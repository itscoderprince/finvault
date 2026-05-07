"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {
  Bell,
  BadgeCheck,
  LogOut,
  ChevronsUpDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";

/**
 * Reusable User Navigation Dropdown Component
 * Self-contained component that adapts beautifully between sidebar footer and top navigation header representation.
 */
export function UserNav({ isSidebar = false, isCollapsed = false, side = "bottom", align = "end" }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user || {
    name: "Admin User",
    email: "admin@investsmart.com",
    image: null,
  };

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Successfully logged out");
            router.push("/login");
          },
        },
      });
    } catch (err) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const userInitials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const avatarMarkup = (
    <Avatar className="h-8 w-8 rounded-lg">
      {user.image ? (
        <AvatarImage src={user.image} alt={user.name} />
      ) : (
        <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-medium text-xs">
          {userInitials}
        </AvatarFallback>
      )}
    </Avatar>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isSidebar ? (
          <SidebarMenuButton
            size="lg"
            className="w-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            {avatarMarkup}
            {!isCollapsed && (
              <>
                <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
              </>
            )}
          </SidebarMenuButton>
        ) : (
          <button className="flex items-center gap-2 rounded-full p-0.5 hover:bg-white/10 transition-all cursor-pointer focus:outline-none">
            {avatarMarkup}
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        side={side}
        align={align}
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
            {avatarMarkup}
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-muted-foreground">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/admin/settings" className="flex items-center gap-2 w-full">
              <BadgeCheck className="size-4" />
              <span>Account Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/notifications" className="flex items-center gap-2 w-full">
              <Bell className="size-4" />
              <span>Notifications</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-rose-500 focus:text-rose-400 focus:bg-rose-500/10"
        >
          <LogOut className="size-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
