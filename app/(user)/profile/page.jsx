"use client";

import React from "react";
import { User, Mail, Phone, MapPin, ShieldCheck, Edit3, Camera } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user || {
    name: "John Doe",
    email: "investor@investsmart.com",
    image: null
  };

  const userInitials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Profile</h1>
        <p className="text-slate-400 mt-1 text-sm">Manage your personal information and preferences.</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800/60 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="relative group">
            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 p-[3px] shadow-2xl shadow-blue-500/20">
              <div className="h-full w-full rounded-full bg-[#0B1120] flex items-center justify-center font-bold text-3xl sm:text-4xl text-white overflow-hidden relative">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  userInitials
                )}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-6 w-6 bg-emerald-500 border-4 border-[#0B1120] rounded-full"></span>
          </div>
          
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{user.name}</h2>
              <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors mx-auto sm:mx-0">
                <Edit3 className="w-4 h-4" /> Edit Profile
              </button>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Fully Verified
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <ProfileItem icon={<Mail className="w-4 h-4" />} label="Email Address" value={user.email} />
              <ProfileItem icon={<Phone className="w-4 h-4" />} label="Phone Number" value="+1 (555) 123-4567" />
              <ProfileItem icon={<MapPin className="w-4 h-4" />} label="Location" value="New York, United States" />
              <ProfileItem icon={<User className="w-4 h-4" />} label="Member Since" value="January 2026" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800/60 rounded-3xl p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-white mb-6">Account Limits</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-slate-400">Daily Withdrawal Limit</span>
              <span className="text-white">$2,450 / $10,000</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24.5%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-slate-400">Monthly Deposit Limit</span>
              <span className="text-white">$15,000 / $50,000</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-slate-800/80 text-slate-400 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium mb-0.5">{label}</p>
        <p className="text-sm font-medium text-slate-200">{value}</p>
      </div>
    </div>
  );
}
