"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../schemas/auth-schemas";
import { WEBSITE_ROUTES } from "@/routes/website.route";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Lock, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";

/**
 * ResetPasswordForm Component
 * Refactored with react-hook-form's native isSubmitting state.
 */
export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data) => {
    if (!token) return toast.error("Invalid token.");

    const { error } = await authClient.resetPassword({
      newPassword: data.password,
      token,
    });

    if (error) {
      toast.error(error.message || "Failed to reset password.");
    } else {
      toast.success("Password updated!");
      router.push(WEBSITE_ROUTES.LOGIN || "/login");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">New Password</CardTitle>
        <CardDescription>
          Create a strong password for your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="password" icon={Lock}>New Password</FieldLabel>
              <PasswordInput
                id="password"
                placeholder="Min 8 characters"
                {...register("password")}
              />
              <FieldError>{errors.password?.message}</FieldError>
            </Field>

            <Button 
              type="submit" 
              className="w-full" 
              loading={isSubmitting}
              icon={Save}
            >
              Update Password
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
