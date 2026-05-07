import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Simplified Field Components
 * Raw Shadcn style with default theme colors.
 */

export function Field({ className, children, ...props }) {
  return (
    <div className={cn("space-y-2 w-full", className)} {...props}>
      {children}
    </div>
  );
}

export function FieldLabel({ className, icon: Icon, children, ...props }) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="size-4 text-primary" />}
      {children}
    </label>
  );
}

export function FieldDescription({ className, children, ...props }) {
  return (
    <p
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function FieldError({ className, children, ...props }) {
  if (!children) return null;
  return (
    <p
      className={cn("text-xs font-medium text-destructive mt-1", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function FieldGroup({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
}

export function FieldSeparator({ children, className }) {
  return (
    <div className={cn("relative my-4", className)}>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          {children}
        </span>
      </div>
    </div>
  );
}
