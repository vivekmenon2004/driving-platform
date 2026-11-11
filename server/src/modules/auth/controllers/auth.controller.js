import config from "../../../config/index.js";
import authService from "../services/auth.service.js";
import jwksService from "../services/jwks.service.js";

const setRefreshTokenCookie = (res, token) => {
  res.cookie("refreshToken", token, {
    httpOnly: true,
    secure: config.env === "production",
    sameSite: "strict",
    path: "/api/v1/auth",
    maxAge: config.jwt.refreshExpiresDays * 24 * 60 * 60 * 1000,
  });
};

export class AuthController {
  async register(req, res, next) {
    try {
      const { email, password, firstName, lastName, phoneNumber, role, preferredLanguage } = req.body;
      const ipAddress = req.ip || req.headers["x-forwarded-for"];
      const userAgent = req.headers["user-agent"];
      const deviceFingerprint = req.headers["x-device-fingerprint"];

      const result = await authService.register({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        role,
        preferredLanguage,
        ipAddress,
        userAgent,
        deviceFingerprint,
      });

      setRefreshTokenCookie(res, result.refreshToken);

      res.status(201).json({
        success: true,
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const ipAddress = req.ip || req.headers["x-forwarded-for"];
      const userAgent = req.headers["user-agent"];
      const deviceFingerprint = req.headers["x-device-fingerprint"];

      const result = await authService.login({
        email,
        password,
        ipAddress,
        userAgent,
        deviceFingerprint,
      });

      setRefreshTokenCookie(res, result.refreshToken);

      res.status(200).json({
        success: true,
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const rawRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
      const ipAddress = req.ip || req.headers["x-forwarded-for"];
      const userAgent = req.headers["user-agent"];
      const deviceFingerprint = req.headers["x-device-fingerprint"];

      const result = await authService.refreshTokens({
        rawRefreshToken,
        ipAddress,
        userAgent,
        deviceFingerprint,
      });

      setRefreshTokenCookie(res, result.refreshToken);

      res.status(200).json({
        success: true,
        data: {
          accessToken: result.accessToken,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      const rawRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
      await authService.logout(rawRefreshToken);

      res.clearCookie("refreshToken", {
        path: "/api/v1/auth",
      });

      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  async getJwks(req, res, next) {
    try {
      const jwks = await jwksService.getJwksJson();
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.status(200).json(jwks);
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();

