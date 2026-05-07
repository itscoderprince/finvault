import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BarChart3, ShieldCheck, Smartphone, Zap, UserPlus, Globe, Plus } from "lucide-react";

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50 text-white">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      <span className="text-xl font-bold tracking-tight">Finvault</span>
    </div>
    <div className="hidden lg:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
      <Link href="#" className="text-sm font-medium hover:text-[#d9f966] transition-colors">Home</Link>
      <Link href="#" className="text-sm font-medium hover:text-[#d9f966] transition-colors">About</Link>
      <Link href="#" className="text-sm font-medium hover:text-[#d9f966] transition-colors">Services</Link>
      <Link href="#" className="text-sm font-medium hover:text-[#d9f966] transition-colors">Help</Link>
    </div>
    <div className="flex items-center gap-4">
      <Link href="/login" className="hidden sm:block text-sm font-medium hover:text-[#d9f966] transition-colors">Log in</Link>
      <Link href="/register" className="text-sm font-medium bg-white text-blue-950 px-6 py-2.5 rounded-full hover:bg-[#d9f966] transition-colors">Sign up</Link>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#11235a] to-white">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          FAST, EASY GLOBAL <br className="hidden lg:block" />
          MONEY TRANSFERS
        </h1>
        <p className="text-blue-200 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
          Send and receive money instantly from anywhere in the world with zero hidden fees. Experience the future of banking today.
        </p>
        <button className="bg-[#d9f966] text-blue-950 font-semibold px-8 py-4 rounded-full hover:bg-lime-400 transition-colors inline-flex items-center gap-2">
          Get Started
        </button>
      </div>
      <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] lg:aspect-square">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="Man using banking app" className="object-cover w-full h-full" />
        </div>
        {/* Floating Card */}
        <div className="absolute bottom-10 -left-6 lg:-left-12 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 w-72 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-500 font-medium">Total Balance</span>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">$8,240<span className="text-slate-400 text-xl">.50</span></div>
          <div className="flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full w-fit">
            <ArrowRight className="w-4 h-4 -rotate-45" />
            +2.4% this month
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 w-full max-w-md mx-auto">
        <div className="relative">
          <div className="absolute top-4 -right-4 bg-[#d9f966] text-blue-950 font-bold px-4 py-2 rounded-full z-10 shadow-lg transform rotate-6">
            +$50.5k
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white shadow-2xl aspect-[1.6/1] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl"></div>
              <div className="text-2xl italic font-bold">VISA</div>
            </div>
            <div className="text-2xl tracking-[0.2em] mb-4">•••• •••• •••• 4289</div>
            <div className="flex justify-between items-end opacity-80">
              <div>
                <div className="text-xs mb-1">Card Holder</div>
                <div className="font-medium tracking-wide">ALEXANDER DOE</div>
              </div>
              <div>
                <div className="text-xs mb-1">Expires</div>
                <div className="font-medium">12/28</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
          Make smarter financial decisions with real-time insights and full visibility into your growth.
        </h2>
        <p className="text-slate-600 text-lg mb-10">
          Our advanced analytics engine categorizes your spending, predicts future expenses, and helps you optimize your savings effortlessly.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-1">4.8</div>
            <div className="text-sm text-slate-500 font-medium">User Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-1">$25M+</div>
            <div className="text-sm text-slate-500 font-medium">Total Transferred</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-1">100K+</div>
            <div className="text-sm text-slate-500 font-medium">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCardsSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <h2 className="text-4xl font-bold text-slate-900 max-w-md leading-tight">
          Trusted by individuals & businesses worldwide
        </h2>
        <p className="text-slate-600 max-w-sm text-lg">
          Whether you are sending money home or paying international vendors, we have you covered.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Send money instantly to anyone, anywhere.",
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
            icon: <Zap className="w-5 h-5 text-blue-600" />
          },
          {
            title: "Pay bills with one tap securely.",
            img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=600",
            icon: <ShieldCheck className="w-5 h-5 text-blue-600" />
          },
          {
            title: "Track all your finances in one place.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            icon: <BarChart3 className="w-5 h-5 text-blue-600" />
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">{item.title}</h3>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
              <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ToolsSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">Smart Tools</div>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
          Shaping the future of finance with smart tools
        </h2>
        <div className="space-y-6 mb-10">
          {[
            "Low transaction fees worldwide",
            "Fast and secure instant transfers",
            "24/7 dedicated customer support"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-slate-700 text-lg font-medium">{text}</span>
            </div>
          ))}
        </div>
        <button className="bg-slate-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors">
          Explore Features
        </button>
      </div>
      <div className="flex-1 relative w-full">
        <div className="rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-[4/3] relative">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Man at laptop" className="object-cover w-full h-full" />
        </div>
        {/* Floating Analytics Card */}
        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block">
          <div className="text-sm text-slate-500 font-medium mb-2">Monthly Overview</div>
          <div className="flex items-end gap-4">
            {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
              <div key={i} className="w-3 bg-blue-100 rounded-t-sm relative group">
                <div className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GlobalBankingSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row items-center">
        <div className="p-12 md:p-20 flex-1 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Global Banking <br/> Made Easy
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-md">
            Open a borderless account in minutes and manage your global finances with zero friction.
          </p>
          <button className="bg-[#d9f966] text-blue-950 font-semibold px-8 py-4 rounded-full hover:bg-lime-400 transition-colors">
            Get Started
          </button>
        </div>
        <div className="flex-1 relative h-[400px] w-full md:h-auto self-stretch">
          <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" alt="Global Banking" className="object-cover w-full h-full absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 md:bg-gradient-to-l to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

const GridSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">One Platform, Infinite Clarity.</h2>
      <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
        Everything you need to manage your personal and business finances securely from a single, powerful dashboard.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {[
          { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics", desc: "Deep insights into your spending habits." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Fast & Secure", desc: "Bank-grade encryption for every transaction." },
          { icon: <Smartphone className="w-6 h-6" />, title: "Easy to Use", desc: "Intuitive interface designed for everyone." },
          { icon: <Zap className="w-6 h-6" />, title: "Smart Tools", desc: "Automate your savings and bill payments." },
          { icon: <UserPlus className="w-6 h-6" />, title: "Personal Advisor", desc: "Get tailored financial advice directly." },
          { icon: <Globe className="w-6 h-6" />, title: "Global Network", desc: "Send money to over 150 countries." },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple pricing. No hidden fees.</h2>
        <p className="text-slate-600 text-lg mb-8">Choose the plan that best fits your financial needs.</p>
        <div className="inline-flex bg-slate-100 p-1 rounded-full">
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium shadow-sm">Monthly</button>
          <button className="text-slate-600 px-6 py-2 rounded-full font-medium hover:text-slate-900 transition-colors">Yearly</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Personal */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200">
          <div className="text-slate-500 font-semibold mb-2 uppercase tracking-wider text-sm">Personal Plan</div>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-slate-900">$0</span>
            <span className="text-slate-500 font-medium mb-1">/ mo</span>
          </div>
          <button className="w-full bg-white border-2 border-slate-200 text-slate-900 font-semibold py-3.5 rounded-full hover:border-slate-300 transition-colors mb-8">
            Get Started
          </button>
          <div className="space-y-4">
            {["Free local transfers", "Basic analytics", "Standard support", "1 virtual card"].map((text, i) => (
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
          <div className="text-blue-200 font-semibold mb-2 uppercase tracking-wider text-sm">Business Plan</div>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-white">$49</span>
            <span className="text-blue-200 font-medium mb-1">/ mo</span>
          </div>
          <button className="w-full bg-[#d9f966] text-blue-950 font-semibold py-3.5 rounded-full hover:bg-lime-400 transition-colors mb-8">
            Upgrade to Business
          </button>
          <div className="space-y-4">
            {["Unlimited global transfers", "Advanced AI analytics", "24/7 Priority support", "Unlimited virtual cards", "API Access"].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d9f966]" />
                <span className="text-white font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200">
          <div className="text-slate-500 font-semibold mb-2 uppercase tracking-wider text-sm">Enterprise Plan</div>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-slate-900">$99</span>
            <span className="text-slate-500 font-medium mb-1">/ mo</span>
          </div>
          <button className="w-full bg-slate-900 text-white font-semibold py-3.5 rounded-full hover:bg-blue-600 transition-colors mb-8">
            Contact Sales
          </button>
          <div className="space-y-4">
            {["Custom transfer limits", "Dedicated account manager", "Custom contracts", "Volume discounts"].map((text, i) => (
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

const TestimonialSection = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-12">Trusted by Growing Businesses</h2>
      <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="User" className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover" />
        </div>
        <div className="text-slate-300 mb-6 flex justify-center gap-1 mt-6">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-6 h-6 text-[#d9f966]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          ))}
        </div>
        <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug mb-8">
          "Finvault is simply the best when it comes to global money transfers. It makes every cross-border transaction feel confident, secure, and incredibly fast."
        </p>
        <div>
          <div className="font-bold text-slate-900">David Chen</div>
          <div className="text-slate-500 font-medium text-sm">CEO, TechFlow Inc.</div>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-600 text-lg">Everything you need to know about our product and billing.</p>
      </div>
      <div className="space-y-4">
        {[
          "What is Finvault and how does it work?",
          "How much does it cost to send money abroad?",
          "Is my money safe with Finvault?",
          "How long do transfers usually take?",
          "Can I open a business account?"
        ].map((q, i) => (
          <div key={i} className="border border-slate-200 rounded-2xl p-6 flex justify-between items-center cursor-pointer hover:border-blue-600 transition-colors">
            <span className="font-semibold text-slate-900 text-lg">{q}</span>
            <Plus className="text-slate-400 w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative z-10">
          <div className="text-[#d9f966] font-bold tracking-wider uppercase text-sm mb-6">Start Today</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Smarter Decisions, <br/> Better Finance
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

const Footer = () => (
  <footer className="bg-slate-50 py-16 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Finvault</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-6">
            Building the next generation of financial infrastructure for global businesses and individuals.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-100 cursor-pointer transition-colors"></div>
            <div className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-100 cursor-pointer transition-colors"></div>
            <div className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-100 cursor-pointer transition-colors"></div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Product</h4>
          <ul className="space-y-3 text-slate-500 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Features</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer">Security</li>
            <li className="hover:text-blue-600 cursor-pointer">Enterprise</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Company</h4>
          <ul className="space-y-3 text-slate-500 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-3 text-slate-500 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-600 cursor-pointer">Terms of Service</li>
            <li className="hover:text-blue-600 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
        <div>&copy; {new Date().getFullYear()} Finvault Inc. All rights reserved.</div>
        <div className="flex gap-6">
          <span className="hover:text-blue-600 cursor-pointer">English (US)</span>
          <span className="hover:text-blue-600 cursor-pointer">USD ($)</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-300 selection:text-blue-950">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeatureCardsSection />
        <ToolsSection />
        <GlobalBankingSection />
        <GridSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
