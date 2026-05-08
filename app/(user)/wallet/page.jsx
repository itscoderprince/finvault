"use client";

import React from "react";
import { Wallet, ArrowDownToLine, ArrowUpFromLine, RefreshCcw, History, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Wallet</h1>
        <p className="text-slate-400 mt-1 text-sm">Manage your funds, deposits, and withdrawals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Wallet Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-8 relative z-10 opacity-90">
              <Wallet className="w-5 h-5" />
              <span className="font-medium">Total Balance</span>
            </div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-5xl font-bold tracking-tight mb-2">$12,450.00</h2>
              <p className="text-blue-200 text-sm">Available for withdrawal: $4,250.00</p>
            </div>
            
            <div className="flex gap-3 relative z-10">
              <button className="flex-1 bg-white text-blue-900 font-semibold py-3 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                <ArrowDownToLine className="w-4 h-4" /> Deposit
              </button>
              <button className="flex-1 bg-blue-800/50 hover:bg-blue-800/70 text-white font-semibold py-3 rounded-xl border border-blue-400/30 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                <ArrowUpFromLine className="w-4 h-4" /> Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Recent Wallet History */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800/60 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-slate-400" />
              Recent Transactions
            </h2>
            <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">View All</button>
          </div>

          <div className="space-y-4">
            <TransactionRow 
              title="Deposit via Bank Transfer"
              date="Today, 10:24 AM"
              amount="+$500.00"
              status="Completed"
              type="credit"
            />
            <TransactionRow 
              title="Withdrawal to Bank ****4592"
              date="May 2, 4:30 PM"
              amount="-$200.00"
              status="Completed"
              type="debit"
            />
            <TransactionRow 
              title="Deposit via UPI"
              date="Apr 28, 9:15 AM"
              amount="+$1,000.00"
              status="Completed"
              type="credit"
            />
            <TransactionRow 
              title="Withdrawal to Bank ****4592"
              date="Apr 25, 11:20 AM"
              amount="-$150.00"
              status="Processing"
              type="debit"
              isPending={true}
            />
          </div>
        </div>
      </div>
      
      {/* Payment Methods */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-5 flex items-center justify-between group hover:border-slate-700/60 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center font-bold text-white shadow-inner">
                🏦
              </div>
              <div>
                <h3 className="text-white font-medium">Chase Bank</h3>
                <p className="text-slate-500 text-sm">Checking ending in 4592</p>
              </div>
            </div>
            <button className="text-rose-500 text-sm font-medium hover:bg-rose-500/10 px-3 py-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100">Remove</button>
          </div>
          
          <button className="bg-slate-900/30 border border-slate-800/60 border-dashed rounded-2xl p-5 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800/20 transition-all h-full min-h-[88px]">
            <span className="font-medium">+ Add Payment Method</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function TransactionRow({ title, date, amount, status, type, isPending }) {
  const isCredit = type === "credit";
  return (
    <div className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/40 rounded-2xl hover:bg-slate-800/40 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${isCredit ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
          {isCredit ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">{title}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-slate-500">{date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span className={`text-xs font-medium flex items-center gap-1 ${isPending ? 'text-amber-500' : 'text-emerald-500'}`}>
              {isPending && <Clock className="w-3 h-3" />}
              {status}
            </span>
          </div>
        </div>
      </div>
      <span className={`text-base font-bold ${isCredit ? 'text-emerald-400' : 'text-slate-200'}`}>
        {amount}
      </span>
    </div>
  );
}
