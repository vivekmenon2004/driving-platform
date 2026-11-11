import { BadRequestError } from "../../../shared/errors/AppError.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegister = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body || {};

  if (!email || !emailRegex.test(email)) {
    return next(new BadRequestError("Valid email is required"));
  }

  if (!password || typeof password !== "string" || password.length < 8) {
    return next(new BadRequestError("Password must be at least 8 characters"));
  }

  if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0) {
    return next(new BadRequestError("First name is required"));
  }

  if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0) {
    return next(new BadRequestError("Last name is required"));
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body || {};

  if (!email || !emailRegex.test(email)) {
    return next(new BadRequestError("Valid email is required"));
  }

  if (!password || typeof password !== "string") {
    return next(new BadRequestError("Password is required"));
  }

  next();
};

