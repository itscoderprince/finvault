"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserSidebar } from "@/components/user-sidebar";
import { NotificationsDropdown } from "@/components/notifications-dropdown";
import { UserNav } from "@/components/user-nav";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  History,
  User,
} from "lucide-react";

export default function UserLayout({ children }) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <SidebarProvider className="h-svh overflow-hidden">
        {/* PC Sidebar Navigation (Hidden on Mobile) */}
        <UserSidebar />

        <SidebarInset className="h-svh flex flex-col overflow-hidden bg-background">
          {/* Top Header */}
          <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4 sm:px-6">
            <div className="flex items-center gap-4">
              {/* PC Sidebar Trigger */}
              <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors hidden lg:flex" />
              
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-primary flex items-center justify-center font-bold text-primary-foreground text-xs">
                  I
                </div>
                <span className="font-semibold text-foreground tracking-tight">InvestSmart</span>
              </div>
            </div>

            {/* Notification and Right Side Controls */}
            <div className="flex items-center gap-3">
              <NotificationsDropdown />
              <div className="lg:hidden">
                <UserNav isSidebar={false} side="bottom" align="end" />
              </div>
            </div>
          </header>

          {/* Main Workspace Content */}
          <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6 lg:p-8 overflow-y-auto pb-32 lg:pb-8 relative">
            <div className="w-full animate-in fade-in duration-500">
              {children}
            </div>
          </div>
          
          {/* Mobile Floating Bottom Dock Navigation (Hidden on PC) */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none lg:hidden">
            <nav className="flex items-center gap-2 bg-background/95 backdrop-blur border border-border rounded-full px-4 py-2.5 shadow-lg pointer-events-auto">
              <DockItem href="/dashboard"    icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard"    active={pathname === "/dashboard"} />
              <DockItem href="/investments"  icon={<TrendingUp className="h-5 w-5" />}      label="Investments"  active={pathname === "/investments"} />
              <DockItem href="/wallet"       icon={<Wallet className="h-5 w-5" />}          label="Wallet"       active={pathname === "/wallet"} />
              <DockItem href="/transactions" icon={<History className="h-5 w-5" />}         label="Transactions" active={pathname === "/transactions"} />
              <DockItem href="/profile"      icon={<User className="h-5 w-5" />}            label="Profile"      active={pathname === "/profile"} />
            </nav>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

function DockItem({ href, icon, label, active = false }) {
  return (
    <Link
      href={href}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <span className="relative z-10">
        {icon}
      </span>
      <span className="sr-only">{label}</span>
    </Link>
  );
}
