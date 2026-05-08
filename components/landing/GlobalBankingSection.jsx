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

const GlobalBankingSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row items-center">
        <div className="p-12 md:p-20 flex-1 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Global Banking <br /> Made Easy
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-md">
            Open a borderless account in minutes and manage your global finances
            with zero friction.
          </p>
          <button className="bg-[#d9f966] text-blue-950 font-semibold px-8 py-4 rounded-full hover:bg-lime-400 transition-colors">
            Get Started
          </button>
        </div>
        <div className="flex-1 relative h-[400px] w-full md:h-auto self-stretch">
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            alt="Global Banking"
            className="object-cover w-full h-full absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 md:bg-gradient-to-l to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

export default GlobalBankingSection;
