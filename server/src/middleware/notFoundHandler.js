import { NotFoundError } from "../shared/errors/AppError.js";

export const notFoundHandler = (req, res, next) => {
  next(new NotFoundError(`Cannot find ${req.method} ${req.originalUrl} on this server`));
};

