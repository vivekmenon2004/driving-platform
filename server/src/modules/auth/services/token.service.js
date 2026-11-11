import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import config from "../../../config/index.js";
import jwksService from "./jwks.service.js";
import { UnauthorizedError } from "../../../shared/errors/AppError.js";

export class TokenService {
  async generateAccessToken(user) {
    const activeKey = await jwksService.getActiveSigningKey();

    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles || [],
      jti: crypto.randomUUID(),
    };

    return jwt.sign(payload, activeKey.private_key_pem, {
      algorithm: "RS256",
      keyid: activeKey.kid,
      expiresIn: config.jwt.accessExpiresIn,
      issuer: config.jwt.issuer,
      audience: config.jwt.audience,
    });
  }

  async verifyAccessToken(token) {
    try {
      const decoded = jwt.decode(token, { complete: true });
      if (!decoded || !decoded.header || !decoded.header.kid) {
        throw new UnauthorizedError("Invalid token format");
      }

      const key = await jwksService.getKeyByKid(decoded.header.kid);
      if (!key) {
        throw new UnauthorizedError("Unknown token signing key");
      }

      return jwt.verify(token, key.public_key_pem, {
        algorithms: ["RS256"],
        issuer: config.jwt.issuer,
        audience: config.jwt.audience,
      });
    } catch (err) {
      if (err instanceof UnauthorizedError) throw err;
      throw new UnauthorizedError("Invalid or expired access token");
    }
  }
}

export default new TokenService();

