"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * VerifyEmailContent Component
 * Handles the logic for verifying the email token from the URL.
 */
function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // loading, success, error

  useEffect(() => {
    if (token) {
      authClient.verifyEmail({ token })
        .then(({ error }) => {
          if (error) {
            setStatus("error");
            toast.error(error.message || "Verification failed");
          } else {
            setStatus("success");
            toast.success("Email verified successfully!");
          }
        });
    } else {
      setStatus("error");
    }
  }, [token]);

  return (
    <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-center shadow-2xl">
      <CardContent className="p-10 flex flex-col items-center gap-4">
        {status === "loading" && (
          <>
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <h1 className="text-xl font-bold text-white">Verifying your email...</h1>
            <p className="text-slate-400">Please wait while we confirm your account security.</p>
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle2 className="w-12 h-12 text-green-500" />
            <h1 className="text-xl font-bold text-white">Verification Complete!</h1>
            <p className="text-slate-400">Thank you for verifying your email. Your InvestSmart account is now active.</p>
            <Button 
              onClick={() => router.push("/login")} 
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full h-12 font-semibold"
            >
              Sign In to Dashboard
            </Button>
          </>
        )}
        {status === "error" && (
          <>
            <XCircle className="w-12 h-12 text-red-500" />
            <h1 className="text-xl font-bold text-white">Invalid Link</h1>
            <p className="text-slate-400">The verification link is invalid, expired, or has already been used.</p>
            <Button 
              onClick={() => router.push("/register")} 
              variant="outline" 
              className="mt-4 border-slate-800 text-white hover:bg-slate-800 w-full h-12"
            >
              Back to Registration
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * VerifyEmailPage Component
 * Main page for email verification redirected from the user's inbox.
 */
export default function VerifyEmailPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Suspense fallback={<Loader2 className="animate-spin text-blue-500 w-12 h-12" />}>
        <VerifyEmailContent />
      </Suspense>
    </div>
  );
}
