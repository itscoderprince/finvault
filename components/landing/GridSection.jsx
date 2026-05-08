"use client";

import React, { useState } from 'react';
import { 
  HandCoins, 
  CreditCard, 
  FileSearch, 
  FileCheck, 
  Network, 
  LineChart, 
  CircleDollarSign 
} from 'lucide-react';

const FeaturesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "Smart Payments",
      description: "Send and receive money instantly with full visibility across accounts and partners.",
      icon: CreditCard,
    },
    {
      title: "Financial Insights",
      description: "Track spending, forecast revenue, and monitor cash flow with AI-powered insights.",
      icon: FileSearch,
    },
    {
      title: "Billing & Invoicing",
      description: "Create professional invoices, automate payments, and stay on top of what's due.",
      icon: FileCheck,
    },
    {
      title: "Integrations Hub",
      description: "Connect seamlessly with accounting tools, banks, and payment gateways in real time.",
      icon: Network,
    },
    {
      title: "Performance Dashboard",
      description: "View your financial health at a glance with clear analytics and live reporting.",
      icon: LineChart,
    },
    {
      title: "Treasury & Cash Control",
      description: "Optimize liquidity, manage reserves, and put idle funds to work intelligently.",
      icon: CircleDollarSign,
    }
  ];

  // If nothing is hovered, highlight the first card (Smart Payments)
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;

  return (
    <div className="bg-[#F8F9FA] py-24 px-4 sm:px-8 font-sans flex items-center justify-center w-full border-b border-slate-100">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 text-slate-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <HandCoins className="w-4 h-4 text-blue-600" />
            Financial Control
          </div>
          
          {/* Titles */}
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-semibold text-slate-900 leading-[1.2] tracking-tight mb-4">
            One Platform. Financial Clarity.
          </h2>
          
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            See your numbers clearly, automate daily tasks, and stay in control as you scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden rounded-[2rem] p-8 flex flex-col h-full bg-white shadow-sm border border-slate-200/40 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5"
              >
                {/* Smooth Gradient Opacity Fader Layer */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b from-[#0A194E] via-[#274699] to-[#7A9CF5] transition-opacity duration-500 ease-out pointer-events-none ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Content Layer (elevated above absolute gradient) */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-8 transition-all duration-500 ease-out ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'bg-[#F4F5F7] text-slate-600 border border-slate-200/30'
                  }`}>
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-[1.35rem] font-medium mb-3 tracking-tight transition-colors duration-500 ease-out ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-[15px] leading-relaxed transition-colors duration-500 ease-out ${
                    isActive ? 'text-blue-100/90' : 'text-slate-500'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FeaturesGrid;