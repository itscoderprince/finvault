"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "../schemas/auth-schemas";
import { WEBSITE_ROUTES } from "@/routes/website.route";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { ShieldCheck, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * OTP Verification Form
 * Refactored to use react-hook-form's native isSubmitting state.
 */
export function OTPVerificationForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data) => {
    const { error } = await authClient.twoFactor.verifyOtp({
      code: data.code,
    });

    if (error) {
      toast.error(error.message || "Invalid code");
    } else {
      toast.success("Verification successful!");
      router.push(WEBSITE_ROUTES.DASHBOARD || "/dashboard");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Security Verification</CardTitle>
        <CardDescription>
          Enter the 6-digit code sent to your device
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="code" icon={Shield}>Verification Code</FieldLabel>
              <Input
                id="code"
                placeholder="000000"
                maxLength={6}
                {...register("code")}
              />
              <FieldError>{errors.code?.message}</FieldError>
            </Field>

            <Button 
              type="submit" 
              className="w-full" 
              loading={isSubmitting}
              icon={ShieldCheck}
            >
              Verify & Continue
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
