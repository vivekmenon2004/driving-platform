import tokenService from "../modules/auth/services/token.service.js";
import { UnauthorizedError } from "../shared/errors/AppError.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("Authentication token required");
    }

    const token = authHeader.split(" ")[1];
    const decoded = await tokenService.verifyAccessToken(token);

    req.user = {
      id: decoded.sub,
      email: decoded.email,
      roles: decoded.roles || [],
    };

    next();
  } catch (err) {
    next(err);
  }
};

export default authenticate;

