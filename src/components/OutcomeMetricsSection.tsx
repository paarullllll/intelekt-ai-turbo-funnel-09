
import React from 'react';
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "5X",
    label: "More Disbursals",
    description: "Increase in successful loan disbursals"
  },
  {
    value: "40%",
    label: "More Leads to KYC",
    description: "Higher conversion from lead to KYC completion"
  },
  {
    value: "1/10th",
    label: "CAC",
    description: "Reduction in customer acquisition cost"
  },
  {
    value: "<24h",
    label: "TAT to Disbursal",
    description: "Turnaround time from application to disbursal"
  },
  {
    value: "60%",
    label: "Operational Cost Reduction",
    description: "Decrease in operational expenses"
  },
  {
    value: "3 days",
    label: "Deployment Time",
    description: "From contract signing to production launch"
  }
];

const OutcomeMetricsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-intelekt-primary/90 to-intelekt-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-20 z-0"></div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-4">
            Results That Matter
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Outcome Metrics
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Real-world results our lending clients achieve with Intelekt AI.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center",
                "transform transition-all duration-300 hover:scale-105",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-intelekt-cta mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
              <p className="text-sm text-white/70">{metric.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Built for BFSI by BFSI veterans</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mt-8">
            <div className="h-8 bg-white/20 w-24 rounded"></div>
            <div className="h-8 bg-white/20 w-28 rounded"></div>
            <div className="h-8 bg-white/20 w-20 rounded"></div>
            <div className="h-8 bg-white/20 w-24 rounded"></div>
            <div className="h-8 bg-white/20 w-28 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeMetricsSection;
