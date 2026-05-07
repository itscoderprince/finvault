import { NextResponse } from "next/server";
import { AppError } from "./app-error";

/**
 * Global API Error Handler
 * Centralizes all error processing for API routes.
 */
export function handleError(error) {
  // Log the error for server-side debugging
  console.error("🔥 [API ERROR]:", {
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    errorCode: error.errorCode || "UNKNOWN",
  });

  // Handle Custom App Errors
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        errorCode: error.errorCode,
      },
      { status: error.statusCode }
    );
  }

  // Handle Zod Validation Errors
  if (error.name === "ZodError" || error.constructor.name === "ZodError") {
    return NextResponse.json(
      {
        success: false,
        message: "Validation Error",
        errors: error.errors?.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
        errorCode: "VALIDATION_ERROR",
      },
      { status: 400 }
    );
  }

  // Handle MongoDB/Mongoose Duplicate Key Errors
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    return NextResponse.json(
      {
        success: false,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`,
        errorCode: "DUPLICATE_RESOURCE",
      },
      { status: 409 }
    );
  }

  // Generic Fallback for unhandled exceptions
  return NextResponse.json(
    {
      success: false,
      message: process.env.NODE_ENV === "production" 
        ? "An internal server error occurred" 
        : error.message,
      errorCode: "INTERNAL_SERVER_ERROR",
    },
    { status: 500 }
  );
}
