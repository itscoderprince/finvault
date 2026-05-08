"use client";

import React, { useState } from "react";
import { MessageCircleQuestion, Plus, Minus } from "lucide-react";

// Custom Accordion Item to exactly match the specific design requirements
const FAQItem = ({ number, question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl transition-all duration-200 overflow-hidden ${
        isOpen
          ? "bg-[#F8F9FA] border border-transparent"
          : "bg-white border border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-[1.1rem] font-medium text-slate-900 pr-4">
          {number}. {question}
        </span>
        <span className="text-slate-900 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 stroke-[1.5]" />
          ) : (
            <Plus className="w-5 h-5 stroke-[1.5]" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-slate-600 text-[15px] leading-relaxed">
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
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Main Container */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 max-w-[1200px] w-full shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          {/* FAQ Badge */}
          <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <div className="bg-blue-600 rounded-full p-0.5">
              <MessageCircleQuestion className="w-3.5 h-3.5 text-white stroke-[2]" />
            </div>
            FAQ
          </div>

          {/* Titles */}
          <h2 className="text-[2rem] md:text-[2.75rem] font-semibold text-slate-900 leading-[1.2] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
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
    </div>
  );
};

export default FAQSection;
