"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Briefcase,
  ArrowLeftRight,
  TrendingUp,
  BarChart3,
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
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";

// Admin Navigation Configuration
const adminRoutes = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
    iconColor: "text-blue-500",
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
    iconColor: "text-sky-500",
  },
  {
    title: "KYC Submissions",
    url: "/admin/kyc",
    icon: ShieldCheck,
    iconColor: "text-emerald-500",
  },
  {
    title: "Investments",
    url: "/admin/investments",
    icon: Briefcase,
    iconColor: "text-amber-500",
  },
  {
    title: "Transactions",
    url: "/admin/transactions",
    icon: ArrowLeftRight,
    iconColor: "text-purple-500",
  },
  {
    title: "Indexes",
    url: "/admin/indexes",
    icon: TrendingUp,
    iconColor: "text-lime-500",
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
    iconColor: "text-pink-500",
  },
];

/**
 * AppSidebar Component
 * A clean, self-contained, and highly optimized sidebar for the Admin Portal.
 * Consolidates team switching, navigation, and user profile management in a single file.
 */
export function AppSidebar({ ...props }) {
  const pathname = usePathname();
  const { state, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Brand Header */}
      <SidebarHeader className="h-16 border-b border-slate-900 flex items-center p-0 justify-center">
        <div
          className={cn(
            "flex items-center gap-3 px-4 w-full",
            isCollapsed && "justify-center px-0",
          )}
        >
          <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            IS
          </div>
          {!isCollapsed && (
            <div className="flex flex-col text-left leading-tight">
              <span className="font-semibold text-sm">InvestSmart</span>
              <span className="text-[10px] text-muted-foreground font-medium">
                Admin Portal
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent>
        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="mb-2">Management</SidebarGroupLabel>
          <SidebarMenu className="gap-2.5">
            {adminRoutes.map((route) => {
              const isActive = pathname === route.url;
              return (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={route.title}
                  >
                    <Link href={route.url} className="flex items-center gap-3">
                      <route.icon
                        className={cn(
                          "size-4 shrink-0 transition-colors duration-200",
                          route.iconColor,
                        )}
                      />
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
      <SidebarFooter className="border-t border-sidebar-border/50 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <UserNav
              isSidebar={true}
              isCollapsed={isCollapsed}
              side={isMobile ? "bottom" : "right"}
              align="end"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      {/* Sidebar Toggle Handle */}
      <SidebarRail />
    </Sidebar>
  );
}
