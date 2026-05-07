import { NextResponse } from "next/server";
import { WEBSITE_ROUTES, APP_ROUTES } from "@/routes/website.route";

/**
 * Edge-Safe Authentication Check
 * This module avoids importing the full 'auth' server instance to prevent 
 * Node.js module errors (like 'stream') in the Next.js Edge Runtime.
 */
export async function authCheck(request) {
  // Check for Better Auth session cookies directly
  const sessionToken = 
    request.cookies.get("better-auth.session_token") || 
    request.cookies.get("__secure-better-auth.session_token");

  const { pathname } = request.nextUrl;

  const isAuthPage = 
    pathname.startsWith(WEBSITE_ROUTES.LOGIN) || 
    pathname.startsWith(WEBSITE_ROUTES.REGISTER) ||
    pathname.startsWith(WEBSITE_ROUTES.FORGOT_PASSWORD) ||
    pathname.startsWith(WEBSITE_ROUTES.RESET_PASSWORD);

  // We consider any path under dashboard or admin as protected
  const isProtectedRoute = 
    pathname.startsWith("/dashboard") || 
    pathname.startsWith("/admin") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/kyc");

  // Case 1: Not logged in and trying to access a protected route
  if (!sessionToken && isProtectedRoute) {
    const loginUrl = new URL(WEBSITE_ROUTES.LOGIN, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Case 2: Already logged in and trying to access auth pages (login/register)
  if (sessionToken && isAuthPage) {
    return NextResponse.redirect(new URL(APP_ROUTES.DASHBOARD, request.url));
  }

  return null; // Continue to next check
}
