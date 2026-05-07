"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  History,
  Bell,
  User,
  Settings,
  ShieldCheck,
  LogOut,
  Search,
  Menu,
} from "lucide-react";

/**
 * UserLayout Component
 * Responsive, premium navigation frame for verified investors.
 * Connected to Better Auth for seamless and safe signOut.
 */
export default function UserLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user || {
    name: "John Doe",
    email: "investor@investsmart.com",
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

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col p-6">
          {/* Logo */}
          <div className="mb-10 flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-lg text-white">
              I
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              InvestSmart
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            <NavItem
              href="/dashboard"
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              active={pathname === "/dashboard"}
            />
            <NavItem
              href="/investments"
              icon={<TrendingUp size={20} />}
              label="Investments"
              active={pathname === "/investments"}
            />
            <NavItem
              href="/wallet"
              icon={<Wallet size={20} />}
              label="Wallet"
              active={pathname === "/wallet"}
            />
            <NavItem
              href="/transactions"
              icon={<History size={20} />}
              label="Transactions"
              active={pathname === "/transactions"}
            />
            <NavItem
              href="/notifications"
              icon={<Bell size={20} />}
              label="Notifications"
              active={pathname === "/notifications"}
            />

            <div className="pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 px-4">
              Account
            </div>

            <NavItem
              href="/profile"
              icon={<User size={20} />}
              label="Profile"
              active={pathname === "/profile"}
            />
            <NavItem
              href="/kyc"
              icon={<ShieldCheck size={20} />}
              label="KYC Status"
              active={pathname === "/kyc"}
            />
            <NavItem
              href="/settings"
              icon={<Settings size={20} />}
              label="Settings"
              active={pathname === "/settings"}
            />
          </nav>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-3 px-4 py-3 text-slate-400 transition-colors hover:text-rose-400 group text-left w-full rounded-lg hover:bg-rose-500/10"
          >
            <LogOut
              size={20}
              className="group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-rose-400"
            />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 backdrop-blur-md">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2 text-slate-400">
              <Menu size={24} />
            </button>
            <span className="font-bold text-white text-lg">InvestSmart</span>
          </div>

          <div className="hidden max-w-md flex-1 items-center gap-3 rounded-full bg-slate-900 px-4 py-2 text-slate-400 lg:flex border border-slate-800/50">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search investments..."
              className="bg-transparent text-sm outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              className="relative p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="View notifications"
            >
              <span className="text-base select-none">🔔</span>
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse" />
            </button>

            <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white leading-none">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500 mt-1">Verified Investor</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-blue-500/10">
                <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-sm text-white">
                  {userInitials}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <div className="mx-auto max-w-7xl animate-in fade-in duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 group ${
        active
          ? "bg-blue-600/10 text-blue-500 border border-blue-600/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
      }`}
    >
      <span
        className={`${active ? "text-blue-500" : "text-slate-500 group-hover:text-slate-200"} transition-colors`}
      >
        {icon}
      </span>
      {label}
    </Link>
  );
}
