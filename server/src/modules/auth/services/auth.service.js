import argon2 from "argon2";
import userRepository from "../../users/repositories/user.repository.js";
import tokenService from "./token.service.js";
import sessionService from "./session.service.js";
import {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
} from "../../../shared/errors/AppError.js";

export class AuthService {
  async register({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    role = "STUDENT",
    preferredLanguage = "sv",
    ipAddress,
    userAgent,
    deviceFingerprint,
  }) {
    const existing = await userRepository.findByEmail(email);
    if (existing) {
      throw new ConflictError("Email already registered");
    }

    const passwordHash = await argon2.hash(password, {
      type: argon2.argon2id,
    });

    const user = await userRepository.createUser({
      email,
      passwordHash,
      firstName,
      lastName,
      phoneNumber,
      preferredLanguage,
    });

    const allowedRoles = ["STUDENT", "SCHOOL_ADMIN"];
    const assignedRole = allowedRoles.includes(role) ? role : "STUDENT";
    await userRepository.assignRole(user.id, assignedRole);
    user.roles = [assignedRole];

    const { refreshToken } = await sessionService.createSession({
      userId: user.id,
      ipAddress,
      userAgent,
      deviceFingerprint,
    });

    const accessToken = await tokenService.generateAccessToken(user);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        roles: user.roles,
        preferredLanguage: user.preferred_language,
      },
      accessToken,
      refreshToken,
    };
  }

  async login({ email, password, ipAddress, userAgent, deviceFingerprint }) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    if (user.locked_until && new Date() < new Date(user.locked_until)) {
      throw new UnauthorizedError("Account is temporarily locked. Try again later.");
    }

    const isValid = await argon2.verify(user.password_hash, password);
    if (!isValid) {
      const attempts = await userRepository.incrementFailedAttempts(user.id);
      if (attempts >= 5) {
        await userRepository.lockAccount(user.id, 15);
      }
      throw new UnauthorizedError("Invalid email or password");
    }

    await userRepository.resetFailedAttempts(user.id);

    const { refreshToken } = await sessionService.createSession({
      userId: user.id,
      ipAddress,
      userAgent,
      deviceFingerprint,
    });

    const accessToken = await tokenService.generateAccessToken(user);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        roles: user.roles,
        preferredLanguage: user.preferred_language,
      },
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens({ rawRefreshToken, ipAddress, userAgent, deviceFingerprint }) {
    if (!rawRefreshToken) {
      throw new UnauthorizedError("Refresh token missing");
    }

    const { userId, refreshToken } = await sessionService.rotateSession({
      rawRefreshToken,
      ipAddress,
      userAgent,
      deviceFingerprint,
    });

    const user = await userRepository.findById(userId);
    if (!user) {
      throw new UnauthorizedError("User no longer exists");
    }

    const accessToken = await tokenService.generateAccessToken(user);

    return {
      accessToken,
      refreshToken,
    };
  }

  async logout(rawRefreshToken) {
    if (rawRefreshToken) {
      await sessionService.revokeSession(rawRefreshToken);
    }
  }

  async logoutAll(userId) {
    if (userId) {
      await sessionService.revokeAllUserSessions(userId);
    }
  }
}

export default new AuthService();

