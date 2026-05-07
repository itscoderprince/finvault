import { z } from "zod";

export const otpSchema = z.object({
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid User ID"),
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});
