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

const TestimonialSection = () => (
  <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-12">
        Trusted by Growing Businesses
      </h2>
      <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="text-slate-300 mb-6 flex justify-center gap-1 mt-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              className="w-6 h-6 text-[#d9f966]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug mb-8">
          "Finvault is simply the best when it comes to global money transfers.
          It makes every cross-border transaction feel confident, secure, and
          incredibly fast."
        </p>
        <div>
          <div className="font-bold text-slate-900">David Chen</div>
          <div className="text-slate-500 font-medium text-sm">
            CEO, TechFlow Inc.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
