"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const notifications = [
  {
    id: 1,
    icon: "📈",
    title: "Market Alert: AAPL +3.2%",
    description: "Apple Inc. shares have surged by 3.2% following the latest earnings call.",
    time: "10 mins ago",
    unread: true,
  },
  {
    id: 2,
    icon: "💰",
    title: "Deposit Confirmed",
    description: "Your bank transfer of $5,000.00 has been credited to your investment account.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 3,
    icon: "💸",
    title: "Dividend Received",
    description: "You received a dividend payment of $142.50 from Microsoft Corp (MSFT).",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 4,
    icon: "🛡️",
    title: "New Login Detected",
    description: "A secure sign-in was logged from Chrome on Windows (IP: 192.168.1.45).",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 5,
    icon: "🚀",
    title: "System Update Complete",
    description: "InvestSmart has been successfully upgraded to v1.2.0-beta with enhanced analytics.",
    time: "3 days ago",
    unread: false,
  },
];

/**
 * Clean, production-level, highly premium Notifications Dropdown component
 * Employs ScrollArea and Separator with smooth, rich interactive micro-animations.
 */
export function NotificationsDropdown() {
  const [unreadCount, setUnreadCount] = React.useState(
    notifications.filter((n) => n.unread).length
  );

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative flex h-9 w-9 items-center rounded-full justify-center bg-transparent hover:bg-white/10 transition-all cursor-pointer focus:outline-none"
          aria-label="View notifications"
        >
          <span className="text-base select-none">🔔</span>
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 p-0"
        align="end"
        sideOffset={8}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm">Notifications</span>
            {unreadCount > 0 && (
              <span className="flex h-4 items-center justify-center rounded-full bg-rose-500/10 px-1.5 text-[10px] font-bold text-rose-500">
                {unreadCount} New
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-primary hover:text-foreground transition-colors font-medium cursor-pointer focus:outline-none bg-transparent border-none"
            >
              Mark all as read
            </button>
          )}
        </div>
        <ScrollArea className="h-[280px]">
          <div className="flex flex-col">
            {notifications.map((n, i) => (
              <React.Fragment key={n.id}>
                <div
                  className={`flex gap-3 p-3.5 hover:bg-accent transition-colors ${
                    n.unread && unreadCount > 0 ? "bg-muted/40" : ""
                  }`}
                >
                  <span className="text-lg select-none">{n.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {n.title}
                      </p>
                      {n.unread && unreadCount > 0 && (
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-normal">
                      {n.description}
                    </p>
                    <p className="text-[10px] text-muted-foreground/70 mt-1.5">
                      {n.time}
                    </p>
                  </div>
                </div>
                {i < notifications.length - 1 && (
                  <Separator />
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
        <div className="p-2 border-t border-border text-center">
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium w-full py-1 cursor-pointer bg-transparent border-none focus:outline-none">
            View all activity
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
