import { NextResponse } from "next/server";
import { authCheck } from "./middleware/auth-check";
import { roleCheck } from "./middleware/role-check";

/**
 * NEXT.JS MIDDLEWARE (Proxy Layer)
 * Centralized request interception and security gateway.
 * Based on modular "Proxy" architecture for scalability.
 */
export async function middleware(request) {
  // 1. Run Authentication Checks
  const authResult = await authCheck(request);
  if (authResult) return authResult;

  // 2. Run Role/Permission Checks
  const roleResult = await roleCheck(request);
  if (roleResult) return roleResult;

  // 3. Continue to requested resource
  return NextResponse.next();
}

/**
 * Matcher Configuration
 * Optimizes performance by only running the middleware on relevant routes.
 */
export const config = {
  matcher: [
    // Protected Pages
    "/dashboard/:path*",
    "/admin/:path*",
    "/investments/:path*",
    "/kyc/:path*",
    "/profile/:path*",
    "/settings/:path*",
    
    // Auth Pages (to prevent logged-in users from seeing them)
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ],
};
