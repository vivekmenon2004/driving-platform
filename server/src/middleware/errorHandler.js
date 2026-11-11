import config from "../config/index.js";

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  const response = {
    success: false,
    status,
    message: err.message || "Internal server error",
  };

  if (err.details) {
    response.details = err.details;
  }

  if (config.env === "development") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};
