"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/auth-schemas";
import { WEBSITE_ROUTES } from "@/routes/website.route";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Mail, Lock, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { GoogleButton } from "./google-button";

/**
 * LoginForm Component
 * Optimized with react-hook-form's native isSubmitting state for cleaner, DRY code.
 */
export function LoginForm({ className, ...props }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: WEBSITE_ROUTES.DASHBOARD || "/dashboard",
    });

    if (error) {
      toast.error(error.message || "Login failed.");
    } else {
      toast.success("Welcome back!");
      router.push(WEBSITE_ROUTES.DASHBOARD || "/dashboard");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-[450px] mx-auto", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Login to manage your investment portfolio
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

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password" icon={Lock}>Password</FieldLabel>
                  <Link 
                    href={WEBSITE_ROUTES.FORGOT_PASSWORD} 
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <PasswordInput
                  id="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <FieldError>{errors.password?.message}</FieldError>
              </Field>

              <Button 
                type="submit" 
                className="w-full" 
                loading={isSubmitting}
                icon={LogIn}
              >
                Sign In
              </Button>

              <FieldSeparator>Or continue with</FieldSeparator>

              <GoogleButton />

              <FieldDescription className="text-center mt-4">
                Don&apos;t have an account?{" "}
                <Link 
                  href={WEBSITE_ROUTES.REGISTER} 
                  className="text-primary hover:underline font-medium"
                >
                  Create account
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
