"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      {/* Main Navbar Header */}
      <nav className="flex items-center justify-between py-6 px-4 sm:px-8 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <Hexagon className="w-8 h-8 fill-white animate-[spin_10s_linear_infinite]" />
          <span className="text-xl font-bold tracking-wide">Finexa</span>
        </div>

        {/* Center Menu (White Pill for Desktop) */}
        <div className="hidden md:flex items-center bg-white/95 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-lg">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={
                link.active
                  ? "bg-[#C6F16D] text-slate-900 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm"
                  : "text-slate-600 hover:text-slate-900 px-5 py-2 text-sm font-semibold rounded-full hover:bg-slate-100/60 transition-all"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons (Desktop) & Animated Menu Button (Mobile) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/login"
              className="text-white text-sm font-semibold hover:text-[#C6F16D] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="bg-[#C6F16D] text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#b3df5c] transition-colors shadow-sm"
            >
              Sign up
            </Link>
          </div>

          {/* Fully Custom CSS-Animated Hamburger Button (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 relative z-50 focus:outline-none transition-all duration-300 active:scale-95 hover:bg-white/15"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center relative">
              <span
                className={`absolute h-[2px] w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Smooth Dropdown Card Mobile Menu (Directly Below Navbar) */}
        <div
          className={`absolute left-4 right-4 top-[84px] z-40 bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-6 md:hidden flex flex-col gap-6 origin-top transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-90 -translate-y-4 pointer-events-none"
          }`}
        >
          {/* Menu Header (Subtle Brand Identity) */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation Menu
            </span>
            <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full">
              Finexa Wealth
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-200 ${
                  link.active
                    ? "bg-[#C6F16D]/20 text-slate-900 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Actions inside Dropdown */}
          <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 border border-slate-200 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center py-3 rounded-xl text-sm font-bold bg-[#C6F16D] text-slate-900 hover:bg-[#b3df5c] transition-colors shadow-md"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Backdrop fader to close menu on outside click */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/20 backdrop-blur-xs md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
