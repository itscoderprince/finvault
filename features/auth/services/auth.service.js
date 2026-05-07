import User from "@/models/User";
import connectDB from "@/lib/db";
import { PasswordService } from "./password.service";
import { OTPService } from "./otp.service";
import { SessionService } from "./session.service";
import { MailService } from "./mail.service";

/**
 * Auth Service
 * Orchestrates all authentication logic following DRY and clean code principles.
 */
export const AuthService = {
  /**
   * Register a new user and initiate email verification
   */
  register: async (userData) => {
    await connectDB();

    const existingUser = await User.findOne({
      $or: [{ email: userData.email.toLowerCase() }, { username: userData.username.toLowerCase() }],
    });

    if (existingUser) {
      const field = existingUser.email === userData.email.toLowerCase() ? "Email" : "Username";
      throw new Error(`${field} is already registered`);
    }

    const hashedPassword = await PasswordService.hash(userData.password);

    const user = await User.create({
      ...userData,
      password: hashedPassword,
    });

    // Initiate Verification
    const otp = await OTPService.create(user._id, user.email, "EMAIL_VERIFICATION");
    await MailService.sendOTP(user.email, otp, "Email Verification");

    return { userId: user._id, email: user.email };
  },

  /**
   * Verify email via OTP
   */
  verifyEmail: async (userId, otp) => {
    await connectDB();
    const isValid = await OTPService.verify(userId, otp, "EMAIL_VERIFICATION");
    if (!isValid) throw new Error("Invalid or expired verification code");

    await User.findByIdAndUpdate(userId, { emailVerified: true });
    return true;
  },

  /**
   * Initial login step: Validate credentials and send 2FA OTP
   */
  login: async (email, password) => {
    await connectDB();

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await PasswordService.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    if (!user.emailVerified) {
      throw new Error("Email verification required before login");
    }

    if (user.isBlocked) {
      throw new Error("Your account has been suspended");
    }

    // Generate Login 2FA OTP
    const otp = await OTPService.create(user._id, user.email, "LOGIN_OTP");
    await MailService.sendOTP(user.email, otp, "Login Security");

    return { userId: user._id, email: user.email };
  },

  /**
   * Final login step: Verify OTP and create session
   */
  verifyLoginOTP: async (userId, otp, reqInfo) => {
    await connectDB();

    const isValid = await OTPService.verify(userId, otp, "LOGIN_OTP");
    if (!isValid) throw new Error("Invalid or expired 2FA code");

    // Clear failed attempts and update last login
    await User.findByIdAndUpdate(userId, {
      lastLogin: new Date(),
      loginAttempts: 0,
    });

    return SessionService.create(userId, reqInfo);
  },

  /**
   * Initiate password reset flow
   */
  forgotPassword: async (email) => {
    await connectDB();
    const user = await User.findOne({ email: email.toLowerCase() });
    
    // Security: Always return success even if user doesn't exist to prevent email enumeration
    if (!user) return true;

    const otp = await OTPService.create(user._id, user.email, "PASSWORD_RESET");
    await MailService.sendOTP(user.email, otp, "Password Reset");
    
    return true;
  },

  /**
   * Reset password and revoke all active sessions
   */
  resetPassword: async (userId, otp, newPassword) => {
    await connectDB();

    const isValid = await OTPService.verify(userId, otp, "PASSWORD_RESET");
    if (!isValid) throw new Error("Invalid or expired reset code");

    const hashedPassword = await PasswordService.hash(newPassword);
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    // Revoke all existing sessions for security
    await SessionService.revokeAll(userId);

    return true;
  },
};
