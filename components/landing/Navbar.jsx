import React from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-4 sm:px-8 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50 text-white">
    {/* Logo */}
    <div className="flex items-center gap-2 text-white">
      <Hexagon className="w-8 h-8 fill-white" />
      <span className="text-xl font-bold tracking-wide">Finexa</span>
    </div>

    {/* Center Menu (White Pill) */}
    <div className="hidden md:flex items-center bg-white rounded-full p-1 border border-slate-200 shadow-sm">
      <Link
        href="#"
        className="bg-[#2563EB] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
      >
        Home
      </Link>
      <Link
        href="#"
        className="text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-colors"
      >
        About
      </Link>
      <Link
        href="#"
        className="text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-colors"
      >
        Solutions
      </Link>
      <Link
        href="#"
        className="text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-colors"
      >
        Pricing
      </Link>
      <Link
        href="#"
        className="text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-medium transition-colors"
      >
        Contact
      </Link>
    </div>

    {/* Auth Buttons */}
    <div className="flex items-center gap-6">
      <Link
        href="/login"
        className="text-white text-sm font-semibold hover:text-gray-200 transition-colors"
      >
        Log in
      </Link>
      <Link
        href="/register"
        className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm"
      >
        Sign up
      </Link>
    </div>
  </nav>
);

export default Navbar;
