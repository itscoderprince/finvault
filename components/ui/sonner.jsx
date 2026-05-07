"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

/**
 * Customized Sonner Toaster
 * Styled to match the clean, rounded aesthetic of react-hot-toast.
 */
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-xl group-[.toaster]:rounded-full group-[.toaster]:px-6 group-[.toaster]:py-3 group-[.toaster]:font-medium",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: "group-[.toaster]:text-emerald-500",
          error: "group-[.toaster]:text-rose-500",
        },
      }}
      position="top-center"
      expand={false}
      richColors
      {...props}
    />
  );
};

export { Toaster };
