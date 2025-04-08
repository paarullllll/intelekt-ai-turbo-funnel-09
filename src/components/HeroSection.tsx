
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-intelekt-primary via-intelekt-primary to-intelekt-background z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-2">
              AI-Powered Lending Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
              Disburse Loans in Minutes, Not Months
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Intelekt AI automates your loan funnel — qualifying leads, handling onboarding, and disbursing with AI agents at 1/10th the cost, deployed in 2 days. Results in 7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className={cn(
                  "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                  "text-lg px-6 py-6 h-auto font-medium rounded-xl",
                  "transition-all duration-200 shadow-lg",
                  "hover:shadow-intelekt-cta/20 hover:shadow-xl"
                )}
              >
                Book a Demo
              </Button>
              
              <Button 
                variant="outline" 
                className={cn(
                  "border-white/20 hover:bg-white/5 text-white",
                  "text-lg px-6 py-6 h-auto rounded-xl",
                  "inline-flex items-center gap-2"
                )}
              >
                <Play className="h-5 w-5" />
                Watch How It Works
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-white/60 mb-3">Trusted by digital-first lenders across India</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="h-8 bg-white/20 w-24 rounded"></div>
                <div className="h-8 bg-white/20 w-28 rounded"></div>
                <div className="h-8 bg-white/20 w-20 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Right content - Animated mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-intelekt-accent/30 to-transparent blur-3xl opacity-20 animate-pulse-soft"></div>
              <div className="relative bg-intelekt-primary/40 backdrop-blur border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-float">
                <div className="bg-intelekt-primary/80 border-b border-white/10 p-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-white/70">Intelekt AI Agent</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-intelekt-accent flex items-center justify-center text-white text-sm">AI</div>
                    <div className="bg-white/10 rounded-lg rounded-tl-none p-3 text-sm text-white/90">
                      Hello! I'm your loan assistant. I can help qualify you for a personal loan in under 2 minutes. Would you like to proceed?
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-intelekt-accent/20 rounded-lg rounded-tr-none p-3 text-sm text-white/90">
                      Yes, I'm looking for a personal loan of ₹2 lakhs.
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm">U</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-intelekt-accent flex items-center justify-center text-white text-sm">AI</div>
                    <div className="bg-white/10 rounded-lg rounded-tl-none p-3 text-sm text-white/90">
                      Great! I'll need a few details to check your eligibility. What's your monthly income?
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1 w-1 rounded-full bg-white/40 animate-pulse"></div>
                    <div className="h-1 w-1 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-1 w-1 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
