/**
 * Website Routes Configuration
 * Centralized route management for the public-facing application.
 */
export const WEBSITE_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  VERIFY_EMAIL: "/verify-email",
  TWO_FACTOR: "/two-factor",
  PRIVACY: "/privacy",
  TERMS: "/terms",
};

/**
 * App Routes Configuration
 * Centralized route management for the protected application.
 */
export const APP_ROUTES = {
  DASHBOARD: "/dashboard",
  PORTFOLIO: "/dashboard/portfolio",
  INVESTMENTS: "/dashboard/investments",
  KYC: "/dashboard/kyc",
  PROFILE: "/dashboard/profile",
  SETTINGS: "/dashboard/settings",
};
