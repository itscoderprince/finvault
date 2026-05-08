import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Smartphone,
  Zap,
  UserPlus,
  Globe,
  Plus,
  ChevronDown,
  ArrowDown,
  Hexagon,
  Wallet
} from "lucide-react";

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Simple pricing. No hidden fees.
        </h2>
        <p className="text-slate-600 text-lg mb-8">
          Choose the plan that best fits your financial needs.
        </p>
        <div className="inline-flex bg-slate-100 p-1 rounded-full">
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium shadow-sm">
            Monthly
          </button>
          <button className="text-slate-600 px-6 py-2 rounded-full font-medium hover:text-slate-900 transition-colors">
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Personal */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200">
          <div className="text-slate-500 font-semibold mb-2 uppercase tracking-wider text-sm">
            Personal Plan
          </div>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-slate-900">$0</span>
            <span className="text-slate-500 font-medium mb-1">/ mo</span>
          </div>
          <button className="w-full bg-white border-2 border-slate-200 text-slate-900 font-semibold py-3.5 rounded-full hover:border-slate-300 transition-colors mb-8">
            Get Started
          </button>
          <div className="space-y-4">
            {[
              "Free local transfers",
              "Basic analytics",
              "Standard support",
              "1 virtual card",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="text-slate-600 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business - Highlighted */}
        <div className="bg-gradient-to-b from-blue-900 to-indigo-900 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl transform md:-translate-y-4 relative">
          <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#d9f966] text-blue-950 font-bold px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <div className="text-blue-200 font-semibold mb-2 uppercase tracking-wider text-sm">
            Business Plan
          </div>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-white">$49</span>
            <span className="text-blue-200 font-medium mb-1">/ mo</span>
          </div>
          <button className="w-full bg-[#d9f966] text-blue-950 font-semibold py-3.5 rounded-full hover:bg-lime-400 transition-colors mb-8">
            Upgrade to Business
          </button>
          <div className="space-y-4">
            {[
              "Unlimited global transfers",
              "Advanced AI analytics",
              "24/7 Priority support",
              "Unlimited virtual cards",
              "API Access",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d9f966]" />
                <span className="text-white font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200">
          <div className="text-slate-500 font-semibold mb-2 uppercase tracking-wider text-sm">
            Enterprise Plan
          </div>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-slate-900">$99</span>
            <span className="text-slate-500 font-medium mb-1">/ mo</span>
          </div>
          <button className="w-full bg-slate-900 text-white font-semibold py-3.5 rounded-full hover:bg-blue-600 transition-colors mb-8">
            Contact Sales
          </button>
          <div className="space-y-4">
            {[
              "Custom transfer limits",
              "Dedicated account manager",
              "Custom contracts",
              "Volume discounts",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="text-slate-600 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
