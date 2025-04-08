
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-28 bg-intelekt-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-intelekt-primary/20 to-intelekt-primary/40"></div>
      
      {/* Accent circles */}
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-intelekt-accent/20 blur-3xl opacity-30"></div>
      <div className="absolute -right-32 bottom-1/3 w-80 h-80 rounded-full bg-intelekt-cta/20 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-intelekt-primary/90 to-intelekt-primary/70 backdrop-blur-md border border-white/10 rounded-2xl p-10 sm:p-14 shadow-2xl animate-fade-in">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 rounded-full bg-intelekt-cta/10 border border-intelekt-cta/30 text-intelekt-cta font-medium text-sm mb-6">
                Get Started Today
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Power Instant Lending?
              </h2>
              
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's bring agentic AI into your funnel — and start disbursing faster.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button 
                  className={cn(
                    "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                    "text-lg px-8 py-7 h-auto font-medium rounded-xl",
                    "transition-all duration-300 shadow-lg group",
                    "hover:shadow-intelekt-cta/20 hover:shadow-xl transform hover:-translate-y-1"
                  )}
                >
                  Talk to Our Team
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className={cn(
                    "border-white/20 hover:bg-white/5 text-white",
                    "text-lg px-8 py-7 h-auto rounded-xl group",
                    "transition-all duration-300 hover:border-white/30 transform hover:-translate-y-1"
                  )}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <div className="mt-14 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-intelekt-accent/20 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-intelekt-cta" />
                  </div>
                  <div>
                    <p className="text-white font-medium">30-Minute Demo</p>
                    <p className="text-white/60 text-sm">See Intelekt AI in action</p>
                  </div>
                </div>
                
                <Button 
                  className={cn(
                    "bg-white/10 hover:bg-white/15 text-white border border-white/20",
                    "rounded-lg transition-all duration-200 px-6",
                    "hover:border-white/30 group"
                  )}
                >
                  Schedule Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
