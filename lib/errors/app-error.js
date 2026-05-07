/**
 * AppError Class
 * A professional, scalable custom error class for handling operational errors.
 */
export class AppError extends Error {
  constructor(message, statusCode = 500, errorCode = "INTERNAL_ERROR") {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true; // Distinguishes between operational errors and programming bugs

    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * Static helpers for common errors
   */
  static badRequest(message = "Bad Request", errorCode = "BAD_REQUEST") {
    return new AppError(message, 400, errorCode);
  }

  static unauthorized(message = "Unauthorized", errorCode = "UNAUTHORIZED") {
    return new AppError(message, 401, errorCode);
  }

  static forbidden(message = "Forbidden", errorCode = "FORBIDDEN") {
    return new AppError(message, 403, errorCode);
  }

  static notFound(message = "Resource not found", errorCode = "NOT_FOUND") {
    return new AppError(message, 404, errorCode);
  }

  static internal(message = "Internal Server Error", errorCode = "INTERNAL_SERVER_ERROR") {
    return new AppError(message, 500, errorCode);
  }
}
