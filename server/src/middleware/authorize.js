import { ForbiddenError, UnauthorizedError } from "../shared/errors/AppError.js";

export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new UnauthorizedError("Authentication required"));
    }

    const userRoles = req.user.roles || [];
    const hasRole = allowedRoles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      return next(new ForbiddenError("Access forbidden: insufficient role permissions"));
    }

    next();
  };
};

export default authorize;

