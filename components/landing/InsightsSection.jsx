import React from "react";
import {
  BarChart2,
  Square,
  PenTool,
  MessageSquare,
  Layout,
} from "lucide-react";

const InsightsSection = () => {
  return (
    <div className="bg-white py-24 px-4 sm:px-8 font-sans flex items-center justify-center w-full border-b border-slate-100">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Visuals */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-xl md:text-2xl font-medium text-slate-800 mb-6">
              Finexa
            </h2>

            {/* Visual Card */}
            <div className="bg-[#F8F9FA] rounded-[2rem] p-6 pt-8 flex flex-col items-center">
              {/* Card Header (Year & Percentage) */}
              <div className="flex justify-between items-center w-full mb-8">
                <span className="bg-[#D9FA70] text-slate-900 text-xs font-semibold px-4 py-1.5 rounded-full">
                  2026
                </span>
                <span className="text-4xl font-medium tracking-tight text-slate-900">
                  +90%
                </span>
              </div>

              {/* Dark Chart Card */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#0B1528] via-[#0A204C] to-[#1E4D9C] rounded-2xl p-4 flex flex-col overflow-hidden shadow-xl border border-white/10">
                {/* Top glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-400/30 blur-xl rounded-full"></div>

                <span className="text-white/60 text-xs font-medium relative z-10">
                  Users
                </span>
                <span className="text-white text-sm font-medium mb-auto relative z-10">
                  Jan - Dec
                </span>

                {/* Simulated Chart Lines (SVG) */}
                <div className="absolute inset-x-0 bottom-8 h-24">
                  <svg
                    viewBox="0 0 100 50"
                    className="w-full h-full preserve-3d"
                    preserveAspectRatio="none"
                  >
                    {/* Blue line */}
                    <path
                      d="M0 40 Q 20 40, 40 30 T 70 20 T 100 25"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                    />
                    {/* Green line */}
                    <path
                      d="M0 45 Q 25 35, 50 40 T 80 20 T 100 15"
                      fill="none"
                      stroke="#D9FA70"
                      strokeWidth="1.5"
                    />
                    {/* Green line glow */}
                    <path
                      d="M0 45 Q 25 35, 50 40 T 80 20 T 100 15"
                      fill="none"
                      stroke="#D9FA70"
                      strokeWidth="4"
                      className="opacity-30 blur-[2px]"
                    />
                  </svg>
                </div>

                {/* X-axis labels & small pill */}
                <div className="relative z-10 flex justify-between items-end mt-4">
                  <span className="bg-white/90 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +60%
                  </span>
                  <div className="flex gap-2 text-[8px] text-white/50">
                    <span>20%</span>
                    <span>40%</span>
                    <span>70%</span>
                    <span>80%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 text-slate-800 font-medium text-sm">
                Premium Analysis
              </div>
            </div>
          </div>

          {/* Right Column - Text & Stats */}
          <div className="lg:col-span-8 flex flex-col lg:pl-4">
            {/* Impacts Pill */}
            <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full w-max mb-6">
              <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
              Impacts
            </div>

            {/* Main Heading */}
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] leading-[1.1] font-medium text-slate-900 tracking-tight mb-6">
              Make smarter financial decisions with real-time{" "}
              <span className="text-slate-400">
                insights and full visibility into your growth.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              Move beyond spreadsheets and manual tracking. Our platform
              centralizes your financial data so every decision is backed by
              clarity, accuracy, and confidence.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-auto">
              <div>
                <div className="text-4xl md:text-[2.75rem] font-medium text-slate-900 mb-2">
                  4.9
                </div>
                <div className="text-slate-600 text-sm">Customer Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-[2.75rem] font-medium text-slate-900 mb-2">
                  $25M
                </div>
                <div className="text-slate-600 text-sm">Revenue Managed</div>
              </div>
              <div>
                <div className="text-4xl md:text-[2.75rem] font-medium text-slate-900 mb-2">
                  1600+
                </div>
                <div className="text-slate-600 text-sm">Trusted Businesses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logos Section */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Square className="w-6 h-6 fill-current" /> Square
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <PenTool className="w-6 h-6 fill-current" /> Adobe
          </div>
          <div className="flex items-center gap-1.5 font-bold text-xl text-slate-800 lowercase tracking-tight">
            <div className="w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            reddit
          </div>
          <div className="flex items-center gap-1 font-serif font-bold text-xl text-slate-800">
            <div className="flex gap-0.5">
              <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              <div className="w-4 h-4 bg-slate-800 rounded-full opacity-60"></div>
            </div>
            Medium
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <Layout className="w-6 h-6 fill-current" /> Trello
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg> GitHub
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
