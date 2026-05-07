import { z } from "zod";

/**
 * Environment Variable Schema
 * Ensures all required variables are present and correctly formatted at startup.
 */
const envSchema = z.object({
  // Database
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),

  // Better Auth
  BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET is required"),
  BETTER_AUTH_URL: z.string().url("BETTER_AUTH_URL must be a valid URL"),

  // App URLs
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),

  // Optional Services
  RESEND_API_KEY: z.string().optional(),
  
  // Environment
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

const _env = envSchema.safeParse({
  MONGODB_URI: process.env.MONGODB_URI,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  NODE_ENV: process.env.NODE_ENV,
});

if (!_env.success) {
  console.error("❌ Invalid environment variables:");
  console.error(JSON.stringify(_env.error.format(), null, 2));
  throw new Error("Invalid environment variables. Please check your .env file.");
}

export const env = _env.data;
