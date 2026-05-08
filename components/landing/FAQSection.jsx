"use client";

import React, { useState } from "react";
import { MessageCircleQuestion, Plus, Minus } from "lucide-react";

// Custom Accordion Item to exactly match the specific design requirements
const FAQItem = ({ number, question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-white border border-blue-600/80 shadow-sm"
          : "bg-white border border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left cursor-pointer focus:outline-none group"
      >
        <span className={`text-[15px] md:text-[1.1rem] font-semibold pr-4 transition-colors duration-300 ${
          isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
        }`}>
          {number}. {question}
        </span>
        <span className="flex-shrink-0 ml-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
          }`}>
            <div className="relative w-4 h-4 flex items-center justify-center">
              {/* Horizontal line */}
              <span className="absolute h-[2px] w-3.5 bg-current rounded-full" />
              {/* Vertical line morphs smoothly */}
              <span className={`absolute h-3.5 w-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                isOpen ? "scale-y-0 rotate-90" : "scale-y-100"
              }`} />
            </div>
          </div>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 md:px-6 md:pb-6 text-slate-500 text-sm md:text-[15px] text-justify md:text-left leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is this platform used for?",
      answer:
        "Our platform provides comprehensive financial tools to track spending, manage budgets, and handle global money transfers effortlessly.",
    },
    {
      id: 2,
      question: "Is my financial data secure here?",
      answer:
        "Yes, we use bank-level encryption and advanced security protocols to ensure your financial data remains completely secure and private.",
    },
    {
      id: 3,
      question: "Can I connect multiple bank accounts?",
      answer:
        "Absolutely. You can connect and manage multiple bank accounts for seamless financial tracking and management.",
      defaultOpen: true,
    },
    {
      id: 4,
      question: "Does it work for small businesses?",
      answer:
        "Yes. Our platform is designed for individuals, freelancers, and businesses of all sizes to manage finances effortlessly.",
      defaultOpen: true,
    },
    {
      id: 5,
      question: "How quickly can I get started?",
      answer:
        "You can set up your account and connect your first bank in less than 5 minutes. Approval for international transfers typically takes under 24 hours.",
    },
    {
      id: 6,
      question: "Are there any hidden fees?",
      answer:
        "No. We believe in complete transparency. All fees are clearly displayed before you confirm any transaction or subscription.",
    },
    {
      id: 7,
      question: "Can I make international payments?",
      answer:
        "Yes, you can send money to over 150 countries with competitive exchange rates and low transparent fees.",
    },
    {
      id: 8,
      question: "Is there customer support available?",
      answer:
        "We offer 24/7 customer support via live chat, email, and a comprehensive help center to assist you whenever you need.",
    },
    {
      id: 9,
      question: "Does it support multiple currencies?",
      answer:
        "Yes, our multi-currency wallets allow you to hold, exchange, and send over 30 different currencies within a single account.",
    },
    {
      id: 10,
      question: "Can I track my spending and savings goals?",
      answer:
        "Absolutely. Our intelligent dashboard automatically categorizes your spending and allows you to set customized savings goals.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#F8F9FA] py-8 md:py-24 px-4 sm:px-8 font-sans flex items-center justify-center w-full border-b border-slate-100">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 md:mb-16">
          {/* FAQ Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/60 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <div className="bg-blue-600 rounded-full p-0.5">
              <MessageCircleQuestion className="w-3.5 h-3.5 text-white stroke-[2]" />
            </div>
            FAQ
          </div>

          {/* Titles */}
          <h2 className="text-[1.65rem] md:text-[2.75rem] font-semibold text-slate-900 leading-[1.2] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know, answered clearly in one place.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 items-start">
          {/* Left Column (Odds) */}
          <div className="flex flex-col gap-4">
            {faqs
              .filter((_, index) => index % 2 === 0)
              .map((faq) => (
                <FAQItem
                  key={faq.id}
                  number={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              ))}
          </div>

          {/* Right Column (Evens) */}
          <div className="flex flex-col gap-4">
            {faqs
              .filter((_, index) => index % 2 !== 0)
              .map((faq) => (
                <FAQItem
                  key={faq.id}
                  number={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
