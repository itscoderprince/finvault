import React from "react";
import Link from "next/link";
import {
  Hexagon,
  Mail,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-white py-24 px-4 sm:px-8 font-sans flex items-center justify-center w-full">
    {/* Main Container Grid */}
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-8">
      
      {/* Left Card: Brand Slogan & Socials */}
      <div className="bg-[#F4F5F7] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[420px] shadow-sm">
        {/* Subtle Watermark Hexagon in background */}
        <div className="absolute right-[-40px] top-[-40px] opacity-10 text-blue-600 pointer-events-none transform rotate-12">
          <Hexagon className="w-64 h-64 fill-current stroke-[1.5]" />
        </div>

        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 text-slate-900 relative z-10">
            <Hexagon className="w-8 h-8 fill-blue-600 text-blue-600 stroke-[1.5]" />
            <span className="text-xl font-bold tracking-wide">Finexa</span>
          </div>

          {/* Slogan */}
          <p className="text-slate-900 font-semibold text-[26px] max-w-xs leading-[1.2] mb-8 mt-16 relative z-10 tracking-tight">
            Smarter finance through <br />
            <span className="text-slate-400">intelligent analytics.</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="relative z-10">
          <span className="text-slate-400 text-xs font-bold block mb-3.5 tracking-wider uppercase">Social Media</span>
          <div className="flex gap-2">
            <Link href="#" className="w-10 h-10 rounded-xl bg-[#E5E7EB]/60 hover:bg-[#E5E7EB] flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-[#E5E7EB]/60 hover:bg-[#E5E7EB] flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-[#E5E7EB]/60 hover:bg-[#E5E7EB] flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-[#E5E7EB]/60 hover:bg-[#E5E7EB] flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-[#E5E7EB]/60 hover:bg-[#E5E7EB] flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.872.508 9.388.508 9.388.508s7.516 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Card: Links Columns & Newsletter */}
      <div className="bg-[#F4F5F7] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[420px] shadow-sm">
        
        {/* Navigation Links Grid */}
        <div className="grid grid-cols-3 gap-6 md:gap-8">
          {/* Product Column */}
          <div>
            <h4 className="font-bold text-slate-950 mb-6 text-sm tracking-wide">Product</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-semibold">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-slate-950 mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-semibold">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-slate-950 mb-6 text-sm tracking-wide">Resources</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-semibold">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">API Docs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyrights & Newsletter Input */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-slate-200/60 mt-12">
          
          {/* Copyright Metadata */}
          <div className="text-xs text-slate-400 font-semibold space-y-2">
            <p>© 2026 Finexa. All rights reserved.</p>
            <p className="space-x-1">
              <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link href="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            </p>
          </div>

          {/* Newsletter Subscription Pill */}
          <div className="flex flex-col gap-2.5 w-full md:w-auto">
            <span className="text-slate-950 font-bold text-xs">Subscribe to our Newsletter</span>
            <div className="flex items-center gap-2 bg-[#E5E7EB]/40 border border-slate-200/40 rounded-full p-1.5 shadow-sm w-full md:w-[320px]">
              <Mail className="w-4 h-4 text-slate-400 ml-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-400 flex-1 py-1 px-1 font-medium"
              />
              <button className="bg-[#0B0F19] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm shrink-0">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </footer>
);

export default Footer;
