import { NextResponse } from "next/server";

/**
 * Edge-Safe Role Check (Stub)
 * Deep authorization (checking roles in the DB) should happen in the 
 * Server Component Layout or Page to avoid Edge Runtime limitations.
 */
export async function roleCheck(request) {
  const { pathname } = request.nextUrl;

  // We can't safely access the Database in the Edge runtime.
  // We allow the request to proceed to the Server Component, 
  // where a deep role check will be performed securely.
  
  if (pathname.startsWith("/admin")) {
    // We let it pass, but the Admin Layout will verify the role from the session.
    return null;
  }

  return null;
}
