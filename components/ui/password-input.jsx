"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * Reusable Password Input
 * Highly optimized with a lightweight, perfectly centered visibility toggle on the right side.
 */
const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative w-full flex items-center">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10 w-full", className)}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center bg-transparent text-slate-400 hover:text-white hover:bg-white/10 transition-all rounded-md cursor-pointer focus:outline-none"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeOff className="size-4" aria-hidden="true" />
        ) : (
          <Eye className="size-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
