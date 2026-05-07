import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";
import { twoFactor } from "better-auth/plugins";
import { env } from "@/lib/env";

const client = new MongoClient(env.MONGODB_URI);
const db = client.db();

/**
 * Better Auth Configuration
 * Aligned with the latest working setup for Next.js App Router.
 */
export const auth = betterAuth({
  database: mongodbAdapter(db),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    sendResetPassword: async ({ user, url }) => {
      console.log(`[AUTH] Reset Password URL for ${user.email}: ${url}`);
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    expiresIn: 60 * 60, // 1 hour
    sendVerificationEmail: async ({ user, url }) => {
      console.log(`[AUTH] Verification URL for ${user.email}: ${url}`);
    },
  },

  user: {
    additionalFields: {
      fullName: { type: "string" },
      username: { type: "string" },
      phoneNumber: { type: "string" },
      role: { type: "string", defaultValue: "user" },
      accountStatus: { type: "string", defaultValue: "PENDING_KYC" },
      kycStatus: { type: "string", defaultValue: "NOT_SUBMITTED" },
      isBlocked: { type: "boolean", defaultValue: false },
      profileImage: { type: "string" },
      referralCode: { type: "string" },
      referredBy: { type: "string" },
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
  },

  plugins: [
    nextCookies(),
    twoFactor({
      otpOptions: {
        issuer: "InvestSmart",
      },
    }),
  ],
});
