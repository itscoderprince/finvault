import OTP from "@/models/OTP";

export const OTPService = {
  /**
   * Generate a 6-digit numeric OTP
   */
  generate: () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  /**
   * Create and store an OTP in the database
   */
  create: async (userId, email, type) => {
    const otp = OTPService.generate();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes validity

    // Clear existing OTPs of the same type for this user to prevent clutter
    await OTP.deleteMany({ userId, type });

    await OTP.create({
      userId,
      email,
      otp,
      type,
      expiresAt,
    });

    return otp;
  },

  /**
   * Verify an OTP and delete it if valid (one-time use)
   */
  verify: async (userId, otp, type) => {
    const otpDoc = await OTP.findOne({ userId, otp, type });

    if (!otpDoc) return false;

    if (otpDoc.expiresAt < new Date()) {
      await OTP.deleteOne({ _id: otpDoc._id });
      return false;
    }

    // OTP is valid, remove it so it can't be reused
    await OTP.deleteOne({ _id: otpDoc._id });
    return true;
  },
};
