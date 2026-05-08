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

const FooterCTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative z-10">
          <div className="text-[#d9f966] font-bold tracking-wider uppercase text-sm mb-6">
            Start Today
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Smarter Decisions, <br /> Better Finance
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#d9f966] text-blue-950 font-semibold px-8 py-4 rounded-full hover:bg-lime-400 transition-colors">
              Get Started Now
            </button>
            <button className="bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FooterCTA;
