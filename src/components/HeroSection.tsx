
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const caseStudySection = document.getElementById('case-study');
    if (caseStudySection) {
      caseStudySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-intelekt-primary via-intelekt-primary to-intelekt-background z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-70 z-0"></div>
      
      {/* Accent circles */}
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-intelekt-accent/10 blur-3xl opacity-30"></div>
      <div className="absolute -right-32 top-1/3 w-80 h-80 rounded-full bg-intelekt-cta/10 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm font-medium text-white/90 mb-2 transform transition-transform hover:scale-105">
              AI-Powered Lending Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient tracking-tight">
              Disburse Loans in Minutes, Not Months
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
              Intelekt AI automates your loan funnel — qualifying leads, handling onboarding, and disbursing with AI agents at 1/10th the cost, deployed in 2 days. Results in 7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Button 
                className={cn(
                  "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                  "text-lg px-8 py-7 h-auto font-medium rounded-xl",
                  "transition-all duration-300 shadow-lg",
                  "hover:shadow-intelekt-cta/20 hover:shadow-xl transform hover:-translate-y-1"
                )}
              >
                Book a Demo
              </Button>
              
              <Button 
                variant="outline" 
                className={cn(
                  "border-white/20 hover:bg-white/5 text-white",
                  "text-lg px-8 py-7 h-auto rounded-xl",
                  "inline-flex items-center gap-3",
                  "transition-all duration-300 hover:border-white/30 transform hover:-translate-y-1"
                )}
              >
                <Play className="h-5 w-5" />
                Watch How It Works
              </Button>
            </div>
            
            <div className="pt-10">
              <p className="text-sm text-white/70 mb-4">Trusted by digital-first lenders across India</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="h-9 bg-gradient-to-r from-white/20 to-white/10 w-28 rounded-md"></div>
                <div className="h-9 bg-gradient-to-r from-white/20 to-white/10 w-32 rounded-md"></div>
                <div className="h-9 bg-gradient-to-r from-white/20 to-white/10 w-24 rounded-md"></div>
              </div>
            </div>
          </div>
          
          {/* Right content - Animated mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-intelekt-accent/30 to-intelekt-cta/10 blur-3xl opacity-20 animate-pulse-soft"></div>
              <div className="relative bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 backdrop-blur border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-float">
                <div className="bg-intelekt-primary/90 border-b border-white/10 p-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-medium text-white/90">Intelekt AI Agent</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-intelekt-accent to-intelekt-accent/80 flex items-center justify-center text-white text-sm shadow-md">AI</div>
                    <div className="bg-white/10 rounded-lg rounded-tl-none p-4 text-sm text-white/90">
                      Hello! I'm your loan assistant. I can help qualify you for a personal loan in under 2 minutes. Would you like to proceed?
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-intelekt-accent/20 rounded-lg rounded-tr-none p-4 text-sm text-white/90">
                      Yes, I'm looking for a personal loan of ₹2 lakhs.
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm shadow-md">U</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-intelekt-accent to-intelekt-accent/80 flex items-center justify-center text-white text-sm shadow-md">AI</div>
                    <div className="bg-white/10 rounded-lg rounded-tl-none p-4 text-sm text-white/90">
                      Great! I'll need a few details to check your eligibility. What's your monthly income?
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-white/60 text-sm mb-2">Scroll to learn more</span>
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
