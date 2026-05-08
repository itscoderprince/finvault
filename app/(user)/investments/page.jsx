"use client";

import React from "react";
import { TrendingUp, ShieldCheck, Clock, CheckCircle2, ChevronRight, BarChart3, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function InvestmentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Investments</h1>
        <p className="text-slate-400 mt-1 text-sm">Explore and manage your investment portfolios.</p>
      </div>

      {/* Available Plans Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Available Indexes</h2>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-1 flex">
            <button className="px-4 py-1.5 rounded-md bg-slate-800 text-white text-sm font-medium shadow-sm">All</button>
            <button className="px-4 py-1.5 rounded-md text-slate-400 hover:text-white text-sm font-medium transition-colors">Low Risk</button>
            <button className="px-4 py-1.5 rounded-md text-slate-400 hover:text-white text-sm font-medium transition-colors">High Yield</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InvestmentPlanCard 
            title="Gold Index"
            description="Stable returns backed by physical gold assets."
            returnRate="1.2%"
            risk="Low Risk"
            minInvest="$100"
            color="from-amber-500 to-yellow-600"
            icon={<ShieldCheck className="w-6 h-6 text-amber-500" />}
            tag="Safe Haven"
          />
          <InvestmentPlanCard 
            title="AI Tech Growth"
            description="High-growth portfolio focusing on leading AI companies."
            returnRate="3.5%"
            risk="High Risk"
            minInvest="$500"
            color="from-blue-500 to-indigo-600"
            icon={<TrendingUp className="w-6 h-6 text-blue-500" />}
            tag="Popular"
            featured={true}
          />
          <InvestmentPlanCard 
            title="Real Estate"
            description="Fractional real estate investments globally."
            returnRate="2.1%"
            risk="Medium Risk"
            minInvest="$1,000"
            color="from-emerald-500 to-teal-600"
            icon={<BarChart3 className="w-6 h-6 text-emerald-500" />}
            tag="Steady Income"
          />
        </div>
      </div>

      {/* Active Investments */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-white mb-6">Your Active Portfolios</h2>
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Plan Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Invested Amount</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Value</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Weekly ROI</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <ActiveTableRow 
                  name="AI Tech Growth"
                  invested="$5,000.00"
                  current="$5,450.00"
                  roi="3.5%"
                  status="Active"
                />
                <ActiveTableRow 
                  name="Real Estate Index"
                  invested="$3,200.00"
                  current="$3,285.00"
                  roi="2.1%"
                  status="Pending Verification"
                  isPending={true}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestmentPlanCard({ title, description, returnRate, risk, minInvest, color, icon, tag, featured }) {
  return (
    <div className={`relative group bg-slate-900/50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${featured ? 'border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border border-slate-800/60 hover:border-slate-700'}`}>
      {featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Top Choice
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4 mt-2">
        <div className="bg-slate-800/80 p-3 rounded-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="bg-slate-800 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-lg">
          {tag}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 line-clamp-2">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800/50">
          <p className="text-slate-500 text-xs mb-1">Weekly Return</p>
          <p className="text-emerald-400 font-semibold">{returnRate}</p>
        </div>
        <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800/50">
          <p className="text-slate-500 text-xs mb-1">Min. Invest</p>
          <p className="text-white font-semibold">{minInvest}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <AlertCircle className="w-3.5 h-3.5" /> {risk}
        </span>
        <button className="bg-white hover:bg-slate-200 text-slate-900 px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 group-hover:pr-3">
          Invest <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        </button>
      </div>
    </div>
  );
}

function ActiveTableRow({ name, invested, current, roi, status, isPending }) {
  return (
    <tr className="hover:bg-slate-800/30 transition-colors group">
      <td className="px-6 py-5 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-sm font-semibold text-white">{name}</div>
        </div>
      </td>
      <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-300 font-medium">
        {invested}
      </td>
      <td className="px-6 py-5 whitespace-nowrap text-sm text-emerald-400 font-semibold">
        {current}
      </td>
      <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-300">
        {roi}
      </td>
      <td className="px-6 py-5 whitespace-nowrap">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${isPending ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
          {isPending ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
          {status}
        </span>
      </td>
      <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-blue-500 hover:text-blue-400 hover:underline">Details</button>
      </td>
    </tr>
  );
}
