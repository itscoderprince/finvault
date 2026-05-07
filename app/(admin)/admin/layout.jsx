"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserNav } from "@/components/user-nav";
import { NotificationsDropdown } from "@/components/notifications-dropdown";

/**
 * Admin Layout Component
 * Provides responsive sidebar navigation and dynamic breadcrumbs based on active pathname.
 * Wraps everything in TooltipProvider to ensure Tooltips in AppSidebar render without errors.
 */
export default function Layout({ children }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <TooltipProvider>
      <SidebarProvider className="h-svh overflow-hidden">
        <AppSidebar />
        <SidebarInset className="h-svh flex flex-col overflow-hidden bg-slate-950">
          {/* Top Header */}
          <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-slate-900 bg-slate-950/95 backdrop-blur px-4">
            <SidebarTrigger className="text-slate-400 hover:text-white hover:bg-slate-900 transition-colors" />

            {/* Notification and Right Side Controls */}
            <div className="flex items-center gap-3">
              <NotificationsDropdown />
              <div className="md:hidden">
                <UserNav isSidebar={false} side="bottom" align="end" />
              </div>
            </div>
          </header>

          {/* Workspace Content */}
          <div className="flex flex-1 flex-col gap-4 p-3 sm:p-5 bg-slate-950 overflow-y-auto">
            {/* Page Breadcrumbs */}
            <Breadcrumb className="mb-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/admin/dashboard"
                    className="capitalize text-slate-400 hover:text-slate-200"
                  >
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {segments.slice(1).map((segment, index, arr) => {
                  const isLast = index === arr.length - 1;
                  const url = `/admin/${segments.slice(1, index + 2).join("/")}`;
                  const formattedSegment = segment.replace(/-/g, " ");

                  return (
                    <React.Fragment key={segment}>
                      <BreadcrumbSeparator className="text-slate-600" />
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage className="capitalize font-semibold text-slate-100">
                            {formattedSegment}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink
                            href={url}
                            className="capitalize text-slate-400 hover:text-slate-200"
                          >
                            {formattedSegment}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>

            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
