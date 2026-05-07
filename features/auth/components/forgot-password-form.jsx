"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../schemas/auth-schemas";
import { WEBSITE_ROUTES } from "@/routes/website.route";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Mail, ArrowLeft, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

/**
 * ForgotPasswordForm Component
 * Refactored to use react-hook-form's native isSubmitting state.
 */
export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const { error } = await authClient.forgetPassword({
      email: data.email,
      redirectTo: WEBSITE_ROUTES.RESET_PASSWORD || "/reset-password",
    });

    if (error) {
      toast.error(error.message || "Failed to send link.");
    } else {
      toast.success("Reset link sent!");
      reset();
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          Enter your email to receive a recovery link
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email" icon={Mail}>Email Address</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
              />
              <FieldError>{errors.email?.message}</FieldError>
            </Field>

            <Button 
              type="submit" 
              className="w-full" 
              loading={isSubmitting}
              icon={Send}
            >
              Send Link
            </Button>

            <Link 
              href={WEBSITE_ROUTES.LOGIN} 
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-4"
            >
              <ArrowLeft className="size-4" />
              Back to Sign In
            </Link>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
