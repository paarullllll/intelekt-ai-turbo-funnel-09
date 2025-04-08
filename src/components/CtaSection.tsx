
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CtaSection = () => {
  return (
    <section className="py-20 bg-intelekt-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-intelekt-primary/30 to-transparent"></div>
      
      {/* Accent circles */}
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-intelekt-accent/20 blur-3xl opacity-30"></div>
      <div className="absolute -right-32 top-1/2 w-80 h-80 rounded-full bg-intelekt-cta/20 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Power Instant Lending?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's bring agentic AI into your funnel — and start disbursing faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              className={cn(
                "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                "text-lg px-8 py-7 h-auto font-medium rounded-xl",
                "transition-all duration-200 shadow-lg",
                "hover:shadow-intelekt-cta/20 hover:shadow-xl"
              )}
            >
              Talk to Our Team
            </Button>
            
            <Button 
              variant="outline" 
              className={cn(
                "border-white/20 hover:bg-white/5 text-white",
                "text-lg px-8 py-7 h-auto rounded-xl"
              )}
            >
              View Case Studies
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl inline-block">
            <p className="text-white/80">
              Want to see Intelekt AI in action? Schedule a 30-minute demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
