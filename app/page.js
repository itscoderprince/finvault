import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ToolsSection from "@/components/landing/ToolsSection";
import GlobalBankingSection from "@/components/landing/GlobalBankingSection";
import GridSection from "@/components/landing/GridSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterCTA from "@/components/landing/FooterCTA";
import Footer from "@/components/landing/Footer";
import InsightsSection from "@/components/landing/InsightsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-300 selection:text-blue-950">
      <Navbar />
      <main>
        <HeroSection />
        <InsightsSection />
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
