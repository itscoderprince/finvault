"use client";

import React, { useState } from "react";
import { Bell, Lock, Shield, Smartphone, Key, Mail, ChevronRight, Moon, Sun, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("security");

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-slate-400 mt-1 text-sm">Manage your account security and application preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 shrink-0 bg-slate-900/50 border border-slate-800/60 rounded-3xl p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          <SettingsTab 
            active={activeTab === "security"} 
            onClick={() => setActiveTab("security")}
            icon={<Shield className="w-5 h-5" />} 
            label="Security" 
          />
          <SettingsTab 
            active={activeTab === "notifications"} 
            onClick={() => setActiveTab("notifications")}
            icon={<Bell className="w-5 h-5" />} 
            label="Notifications" 
          />
          <SettingsTab 
            active={activeTab === "preferences"} 
            onClick={() => setActiveTab("preferences")}
            icon={<Sun className="w-5 h-5" />} 
            label="Preferences" 
          />
        </div>

        {/* Settings Content */}
        <div className="flex-1 w-full bg-slate-900/50 border border-slate-800/60 rounded-3xl p-6 sm:p-8 min-h-[500px]">
          {activeTab === "security" && <SecuritySettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "preferences" && <PreferencesSettings />}
        </div>
      </div>
    </div>
  );
}

function SettingsTab({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
        active 
          ? "bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.05)]" 
          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
      }`}
    >
      {icon} {label}
    </button>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Password & Authentication</h2>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-950/50 border border-slate-800/50 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-slate-300">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Change Password</h3>
                <p className="text-sm text-slate-400 mt-0.5">Update your password regularly to keep your account secure.</p>
              </div>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors sm:shrink-0 whitespace-nowrap">
              Update
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-950/50 border border-slate-800/50 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white flex items-center gap-2">
                  Two-Factor Authentication (2FA) <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">Secure your account with an extra layer of security.</p>
              </div>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors sm:shrink-0 whitespace-nowrap">
              Manage
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/60 pt-8">
        <h2 className="text-xl font-semibold text-white mb-6">Active Sessions</h2>
        <div className="space-y-4">
          <SessionItem 
            device="MacBook Pro - Chrome"
            location="New York, USA"
            time="Active Now"
            current={true}
          />
          <SessionItem 
            device="iPhone 14 Pro - Safari"
            location="New York, USA"
            time="Last active: 2 hours ago"
            current={false}
          />
        </div>
      </div>
    </div>
  );
}

function SessionItem({ device, location, time, current }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/40 rounded-xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200 text-sm">{device}</span>
          {current && <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-emerald-500/20">Current</span>}
        </div>
        <span className="text-xs text-slate-500 mt-1">{location} • {time}</span>
      </div>
      {!current && <button className="text-rose-500 hover:bg-rose-500/10 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">Revoke</button>}
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
      
      <div className="space-y-6">
        <ToggleSetting 
          title="Investment Updates" 
          description="Receive notifications about your active portfolio returns and updates."
          defaultChecked={true}
        />
        <ToggleSetting 
          title="Deposit & Withdrawals" 
          description="Get alerts whenever funds enter or leave your wallet."
          defaultChecked={true}
        />
        <ToggleSetting 
          title="Marketing & Promotions" 
          description="Receive updates on new indexes, offers, and company news."
          defaultChecked={false}
        />
        <ToggleSetting 
          title="Security Alerts" 
          description="Important alerts about new logins and account changes. (Cannot be disabled)"
          defaultChecked={true}
          disabled={true}
        />
      </div>

      <div className="border-t border-slate-800/60 pt-6 flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20">
          Save Preferences
        </button>
      </div>
    </div>
  );
}

function PreferencesSettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <h2 className="text-xl font-semibold text-white mb-6">App Preferences</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-slate-300 mb-3 block">Theme Appearance</label>
          <div className="flex gap-4">
            <button className="flex-1 flex flex-col items-center gap-3 p-4 border-2 border-blue-500 bg-slate-800/50 rounded-2xl relative overflow-hidden group">
              <div className="w-full h-20 bg-slate-950 rounded-lg border border-slate-800 p-2 flex flex-col gap-2 relative z-10">
                <div className="w-1/3 h-2 bg-slate-800 rounded-full"></div>
                <div className="w-full h-8 bg-slate-900 rounded-md"></div>
              </div>
              <span className="text-sm font-medium text-white relative z-10 flex items-center gap-2"><Moon className="w-4 h-4 text-blue-400" /> Dark Mode</span>
              <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </button>
            <button className="flex-1 flex flex-col items-center gap-3 p-4 border-2 border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-2xl relative overflow-hidden group cursor-not-allowed opacity-50">
              <div className="w-full h-20 bg-white rounded-lg border border-slate-200 p-2 flex flex-col gap-2 relative z-10">
                <div className="w-1/3 h-2 bg-slate-200 rounded-full"></div>
                <div className="w-full h-8 bg-slate-100 rounded-md"></div>
              </div>
              <span className="text-sm font-medium text-slate-400 relative z-10 flex items-center gap-2"><Sun className="w-4 h-4" /> Light Mode (Coming Soon)</span>
            </button>
          </div>
        </div>
        
        <div className="pt-4">
          <label className="text-sm font-medium text-slate-300 mb-3 block">Base Currency</label>
          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-blue-500/50 transition-colors">
            <option value="USD">USD - US Dollar ($)</option>
            <option value="EUR">EUR - Euro (€)</option>
            <option value="GBP">GBP - British Pound (£)</option>
            <option value="INR">INR - Indian Rupee (₹)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function ToggleSetting({ title, description, defaultChecked, disabled }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h3 className={`font-semibold ${disabled ? 'text-slate-400' : 'text-white'}`}>{title}</h3>
        <p className="text-sm text-slate-500 mt-0.5 max-w-sm">{description}</p>
      </div>
      
      {/* Custom pure CSS toggle switch */}
      <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} disabled={disabled} />
        <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
      </label>
    </div>
  );
}
