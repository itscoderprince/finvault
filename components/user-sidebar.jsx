"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  History,
  User,
  Settings,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";

// User Navigation Configuration
const userRoutes = [
  { title: "Dashboard",    url: "/dashboard",    icon: LayoutDashboard },
  { title: "Investments",  url: "/investments",  icon: TrendingUp },
  { title: "Wallet",       url: "/wallet",       icon: Wallet },
  { title: "Transactions", url: "/transactions", icon: History },
  { title: "Profile",      url: "/profile",      icon: User },
  { title: "KYC Status",   url: "/kyc",          icon: ShieldCheck },
  { title: "Settings",     url: "/settings",     icon: Settings },
];

export function UserSidebar({ ...props }) {
  const pathname = usePathname();
  const { state, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="hidden lg:flex" {...props}>
      {/* Brand Header */}
      <SidebarHeader className="h-14 border-b border-border flex items-center p-0 justify-center">
        <div className={cn("flex items-center gap-3 px-4 w-full", isCollapsed && "justify-center px-0")}>
          <div className="flex aspect-square size-6 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
            I
          </div>
          {!isCollapsed && (
            <div className="flex flex-col text-left leading-tight">
              <span className="font-semibold text-sm">InvestSmart</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Investor Portal</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent>
        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="mb-2">Menu</SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {userRoutes.map((route) => {
              const isActive = pathname === route.url;
              return (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild isActive={isActive} tooltip={route.title}>
                    <Link href={route.url} className="flex items-center gap-3">
                      <route.icon className="size-4 shrink-0" />
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* User Profile Footer */}
      <SidebarFooter className="border-t border-border py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <UserNav isSidebar={true} isCollapsed={isCollapsed} side={isMobile ? "bottom" : "right"} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
