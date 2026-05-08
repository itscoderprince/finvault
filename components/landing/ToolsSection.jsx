import React from "react";
import {
  ShieldCheck,
  RefreshCcw,
  Users,
  Zap,
  Check,
  ChevronDown,
  Download,
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-white min-h-screen py-12 px-4 sm:px-8 font-sans flex items-center justify-center w-full border-b border-slate-100">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12 mb-16">
          <div className="max-w-2xl flex flex-col items-start">
            {/* Trust Indicator Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F4F5F7] border border-slate-200/80 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Trust Indicator
            </div>

            <h2 className="text-[2.5rem] md:text-5xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
              Trusted by individuals & <br className="hidden md:block" />{" "}
              businesses worldwide
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-slate-500 text-base leading-relaxed">
              Track spending, plan budgets, and manage your money effortlessly
              with intelligent financial tools built for everyday use.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Real-Time Conversion */}
          <div className="bg-[#F4F5F7] rounded-[2.5rem] p-8 flex flex-col h-full min-h-[500px]">
            {/* Blue Icon directly on background */}
            <div className="text-blue-600 mb-6">
              <RefreshCcw className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Real-Time Conversion
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Live exchange rates instantly
            </p>

            {/* Currency Converter UI */}
            <div className="bg-white rounded-[2rem] p-6 mt-auto shadow-sm border border-slate-100/50">
              <h4 className="text-slate-900 font-bold mb-4 text-sm">
                Currency Details
              </h4>

              {/* From Input */}
              <div className="bg-[#F4F5F7] rounded-2xl p-4 flex justify-between items-center mb-3">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs mb-1 font-medium">From</span>
                  <span className="text-slate-900 font-bold text-lg">
                    1000.00
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#E5E7EB]/40 px-3 py-1.5 rounded-full border border-slate-200/40">
                  {/* Simulated US Flag */}
                  <span className="text-sm">🇺🇸</span>
                  <span className="text-xs font-bold text-slate-800">USD</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </div>

              {/* To Input */}
              <div className="bg-[#F4F5F7] rounded-2xl p-4 flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs mb-1 font-medium">To</span>
                  <span className="text-slate-900 font-bold text-lg">
                    121606.50
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#E5E7EB]/40 px-3 py-1.5 rounded-full border border-slate-200/40">
                  {/* Simulated Bangladesh Flag */}
                  <span className="text-sm font-medium">🇧🇩</span>
                  <span className="text-xs font-bold text-slate-800">BDT</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs mb-5 px-1">
                <span className="text-slate-400 font-medium">Network Fees</span>
                <span className="font-bold text-slate-800">2.59 USD</span>
              </div>

              <button className="w-full bg-[#0B0F19] text-white py-3.5 rounded-full text-sm font-bold hover:bg-black transition-colors shadow-sm">
                Exchange Money
              </button>
            </div>
          </div>

          {/* Card 2: Users Worldwide */}
          <div className="relative overflow-hidden bg-[#0B1220] rounded-[2.5rem] p-8 flex flex-col h-full min-h-[500px] shadow-sm">
            <div className="relative z-10">
              {/* White Icon directly on background */}
              <div className="text-white mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                30M+ Users Worldwide
              </h3>
              <p className="text-blue-100/60 text-sm max-w-[240px] leading-relaxed">
                Send and receive money seamlessly across the globe.
              </p>
            </div>

            {/* Happy Customers Image Layer */}
            <div className="absolute inset-x-0 bottom-0 h-[62%] w-full">
              <img
                src="/images/Happy customers.png"
                alt="Happy users"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Card 3: Instant Transfers */}
          <div className="bg-[#F4F5F7] rounded-[2.5rem] p-8 flex flex-col h-full min-h-[500px]">
            {/* Blue Lightning bolt directly on background */}
            <div className="text-blue-600 mb-6">
              <Zap className="w-8 h-8 fill-blue-600 stroke-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Instant Transfers
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Real-time payments with zero delays
            </p>

            {/* Transfer Success UI */}
            <div className="bg-white rounded-[2rem] p-6 mt-auto shadow-sm border border-slate-100/50 flex flex-col items-center w-full">
              {/* Success Icon */}
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-md shadow-green-500/10">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h4 className="text-slate-900 font-bold text-base mb-1">
                Transfer Success
              </h4>
              <p className="text-slate-400 text-xs mb-5 text-center font-medium">
                Transfer has been successfully done
              </p>

              <div className="w-full h-px border-t border-dashed border-slate-200 mb-5"></div>

              {/* Receipt Details */}
              <div className="w-full flex flex-col gap-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">Summary</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Date</span>
                  <span className="font-bold text-slate-800">
                    25 DEC 2026
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Amount</span>
                  <span className="font-bold text-slate-800">$20,000</span>
                </div>
              </div>

              <button className="w-full bg-[#0B0F19] flex items-center justify-center gap-2 text-white py-3.5 rounded-full text-sm font-bold hover:bg-black transition-colors shadow-sm">
                <Download className="w-4 h-4" />
                Download receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
