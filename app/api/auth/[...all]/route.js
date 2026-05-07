import { auth } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const runtime = "nodejs";

/**
 * Better Auth API Handler
 * Catch-all route for all authentication actions.
 */
const handler = toNextJsHandler(auth);

export const GET = (req) => {
  console.log(`[AUTH API] GET ${req.nextUrl.pathname}`);
  return handler.GET(req);
};

export const POST = (req) => {
  console.log(`[AUTH API] POST ${req.nextUrl.pathname}`);
  return handler.POST(req);
};
