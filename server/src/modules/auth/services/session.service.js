import crypto from "node:crypto";
import config from "../../../config/index.js";
import sessionRepository from "../repositories/session.repository.js";
import { UnauthorizedError } from "../../../shared/errors/AppError.js";

export class SessionService {
  hashToken(token) {
    return crypto.createHash("sha256").update(token).digest("hex");
  }

  generateTokenString() {
    return crypto.randomBytes(48).toString("hex");
  }

  calculateExpiration() {
    const days = config.jwt.refreshExpiresDays;
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  }

  async createSession({ userId, ipAddress, userAgent, deviceFingerprint }) {
    const rawToken = this.generateTokenString();
    const tokenHash = this.hashToken(rawToken);
    const familyId = crypto.randomUUID();
    const expiresAt = this.calculateExpiration();

    const session = await sessionRepository.createSession({
      userId,
      refreshTokenHash: tokenHash,
      familyId,
      ipAddress,
      userAgent,
      deviceFingerprint,
      expiresAt,
    });

    return {
      session,
      refreshToken: rawToken,
    };
  }

  async rotateSession({ rawRefreshToken, ipAddress, userAgent, deviceFingerprint }) {
    if (!rawRefreshToken) {
      throw new UnauthorizedError("Refresh token required");
    }

    const tokenHash = this.hashToken(rawRefreshToken);
    const existingSession = await sessionRepository.findSessionByTokenHash(tokenHash);

    if (!existingSession) {
      throw new UnauthorizedError("Invalid refresh session");
    }

    if (existingSession.is_revoked) {
      await sessionRepository.revokeFamily(existingSession.family_id, "REUSE_BREACH_DETECTED");
      throw new UnauthorizedError("Security alert: compromised session revoked");
    }

    if (new Date() > new Date(existingSession.expires_at)) {
      await sessionRepository.revokeSession(existingSession.id, "EXPIRED");
      throw new UnauthorizedError("Refresh session expired");
    }

    await sessionRepository.revokeSession(existingSession.id, "ROTATED");

    const newRawToken = this.generateTokenString();
    const newTokenHash = this.hashToken(newRawToken);
    const newExpiresAt = this.calculateExpiration();

    await sessionRepository.createSession({
      userId: existingSession.user_id,
      refreshTokenHash: newTokenHash,
      familyId: existingSession.family_id,
      ipAddress,
      userAgent,
      deviceFingerprint,
      expiresAt: newExpiresAt,
    });

    return {
      userId: existingSession.user_id,
      refreshToken: newRawToken,
    };
  }

  async revokeSession(rawRefreshToken) {
    if (!rawRefreshToken) return;
    const tokenHash = this.hashToken(rawRefreshToken);
    const existing = await sessionRepository.findSessionByTokenHash(tokenHash);
    if (existing) {
      await sessionRepository.revokeSession(existing.id, "USER_LOGOUT");
    }
  }

  async revokeAllUserSessions(userId) {
    await sessionRepository.revokeAllUserSessions(userId, "USER_LOGOUT_ALL");
  }
}

export default new SessionService();

