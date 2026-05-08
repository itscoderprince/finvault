import React from "react";
import Link from "next/link";
import { ChevronDown, Wallet, Mouse } from "lucide-react";

const HeroSection = () => {
  return (
    // Background requires a gradient. In a real app, you might overlay a subtle cloud image here.
    <div className="min-h-screen bg-linear-to-b from-[#0B1120] via-[#0A2463] to-[#E2E8F0] overflow-hidden font-sans relative flex flex-col">
      {/* Main Hero Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center relative z-10 w-full flex-1">
        {/* Left Column - Typography & CTA */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.1] tracking-tight uppercase">
            Fast, Easy Global Money Transfers
          </h1>
          <p className="mt-6 text-lg text-blue-100/80 max-w-4xl leading-relaxed">
            Track spending, plan budgets, and manage your money effortlessly
            with intelligent financial tools built for everyday use.
          </p>
          <Link
            href="/register"
            className="inline-block mt-8 bg-[#C6F16D] text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-[#b3df5c] transition-colors shadow-lg"
          >
            Start Free trial
          </Link>

          {/* Scroll Indicator */}
          <div className="mt-24 flex items-center gap-2 text-sm text-gray-900 font-medium tracking-wider">
            <Mouse className="w-5 h-5 animate-pulse" />
            <span>SCROLL</span>
          </div>
        </div>

        {/* Right Column - Images & Glassmorphism Card */}
        <div className="relative h-[480px] sm:h-[600px] w-full flex justify-center items-end overflow-visible">
          
          {/* Centered relative group container */}
          <div className="relative w-[320px] sm:w-[450px] h-full flex justify-center items-end">
            {/* Note: Replace the src below with your actual transparent PNG of the model. */}
            <img
              src="/images/man.webp"
              alt="Man using mobile phone"
              className="relative z-20 h-[85%] sm:h-full object-cover object-bottom [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] -scale-x-100"
            />

            {/* Floating Glassmorphism Dashboard Card (Behind Boy) */}
            <div className="absolute left-[-20px] sm:left-[-110px] bottom-24 sm:bottom-32 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 sm:p-6 w-[200px] sm:w-[280px] h-[145px] sm:h-[200px] shadow-2xl">
              <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-none">
                $8,24
              </h2>

              <div className="mt-2.5 sm:mt-4 flex items-center">
                <button className="bg-white text-slate-800 text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-1">
                  Weekly <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Transaction Item (In Front of Boy) */}
            <div className="absolute left-[10px] sm:left-[-80px] bottom-16 sm:bottom-36 z-30 bg-white rounded-2xl p-2.5 sm:p-3 flex items-center justify-between shadow-2xl w-[210px] sm:w-[250px]">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-100 p-1.5 sm:p-2 rounded-xl text-blue-500 shrink-0">
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                    Earning Money
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">Web Design</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 shrink-0">+ $7.65</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
