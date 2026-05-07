"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth-schemas";
import { WEBSITE_ROUTES } from "@/routes/website.route";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { User, Mail, Lock, UserPlus, Phone, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSeparator,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { GoogleButton } from "./google-button";

/**
 * RegisterForm Component
 * Optimized with react-hook-form's native isSubmitting state.
 */
export function RegisterForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    const { error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.fullName,
      fullName: data.fullName,
      callbackURL: WEBSITE_ROUTES.VERIFY_EMAIL || "/verify-email",
    });

    if (error) {
      toast.error(error.message || "Registration failed");
    } else {
      toast.success("Account created! Please verify your email.");
      reset();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-full max-w-[450px] md:max-w-xl mx-auto",
        className,
      )}
      {...props}
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle className="text-2xl">Join InvestSmart</CardTitle>
          <CardDescription>Start your investment journey today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="fullName" icon={User}>
                    Full Name
                  </FieldLabel>
                  <Input
                    id="fullName"
                    placeholder="e.g. John Doe"
                    {...register("fullName")}
                  />
                  <FieldError>{errors.fullName?.message}</FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="username" icon={User}>
                    Username
                  </FieldLabel>
                  <Input
                    id="username"
                    placeholder="e.g. johndoe"
                    {...register("username")}
                  />
                  <FieldError>{errors.username?.message}</FieldError>
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="email" icon={Mail}>
                    Email Address
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="phoneNumber" icon={Phone}>
                    Phone Number
                  </FieldLabel>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+1234567890"
                    {...register("phoneNumber")}
                  />
                  <FieldError>{errors.phoneNumber?.message}</FieldError>
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password" icon={Lock}>
                    Password
                  </FieldLabel>
                  <PasswordInput
                    id="password"
                    placeholder="Min 8 chars"
                    {...register("password")}
                  />
                  <FieldError>{errors.password?.message}</FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="confirm-password" icon={Lock}>
                    Confirm
                  </FieldLabel>
                  <PasswordInput
                    id="confirm-password"
                    placeholder="Repeat"
                    {...register("confirmPassword")}
                  />
                  <FieldError>{errors.confirmPassword?.message}</FieldError>
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="referralCode" icon={Gift}>
                  Referral Code (Optional)
                </FieldLabel>
                <Input
                  id="referralCode"
                  placeholder="e.g. REF-123"
                  {...register("referralCode")}
                />
                <FieldError>{errors.referralCode?.message}</FieldError>
              </Field>

              <Button
                type="submit"
                className="w-full"
                loading={isSubmitting}
                icon={UserPlus}
              >
                Create Account
              </Button>

              <FieldSeparator>Or sign up with</FieldSeparator>

              <GoogleButton text="Sign up with Google" />

              <FieldDescription className="text-center mt-4">
                Already have an account?{" "}
                <Link
                  href={WEBSITE_ROUTES.LOGIN}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <p className="text-center text-muted-foreground text-[10px] px-6">
        By continuing, you agree to our{" "}
        <Link href={WEBSITE_ROUTES.TERMS} className="underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link href={WEBSITE_ROUTES.PRIVACY} className="underline">
          Privacy
        </Link>
        .
      </p>
    </div>
  );
}
