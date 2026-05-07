import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Auth Layout
 * Simple, focused container for all authentication pages.
 * Removed logo and background styling to use default Shadcn theme.
 */
export default async function AuthLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950">
      <div className="w-full flex justify-center">
        {children}
      </div>
    </div>
  );
}
