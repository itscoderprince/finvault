import Session from "@/models/Session";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "fallback_refresh_secret";

export const SessionService = {
  /**
   * Create a new session and generate JWT tokens
   */
  create: async (userId, reqInfo = {}) => {
    const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: "7d" });

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await Session.create({
      userId,
      refreshToken,
      expiresAt,
      ipAddress: reqInfo.ip,
      deviceInfo: reqInfo.device,
      browser: reqInfo.browser,
      location: reqInfo.location,
    });

    return { accessToken, refreshToken };
  },

  /**
   * Revoke all sessions for a user (e.g., after password reset)
   */
  revokeAll: async (userId) => {
    await Session.deleteMany({ userId });
  },

  /**
   * Verify an access token
   */
  verifyAccess: (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      return null;
    }
  },

  /**
   * Refresh a session using a refresh token
   */
  refresh: async (refreshToken) => {
    try {
      const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
      const session = await Session.findOne({ userId: decoded.userId, refreshToken });

      if (!session || session.expiresAt < new Date()) {
        return null;
      }

      // Generate new access token
      const accessToken = jwt.sign({ userId: decoded.userId }, JWT_SECRET, { expiresIn: "15m" });
      return { accessToken };
    } catch (e) {
      return null;
    }
  },
};
