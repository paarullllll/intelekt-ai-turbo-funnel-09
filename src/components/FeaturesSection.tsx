
import React from 'react';
import { 
  MessageSquare, 
  FileText, 
  Play, 
  Users, 
  Database, 
  BarChart 
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-intelekt-cta" />,
    title: "Prospect Recording & Transcripts",
    description: "Full compliance-ready documentation plus valuable training insights from every interaction."
  },
  {
    icon: <Play className="h-6 w-6 text-intelekt-cta" />,
    title: "Voice + Video Onboarding",
    description: "Real-time AI assistance during KYC verification for a smoother customer experience."
  },
  {
    icon: <FileText className="h-6 w-6 text-intelekt-cta" />,
    title: "AI Call Summary",
    description: "Instant CRM-ready summaries that capture key decision points and next steps."
  },
  {
    icon: <Users className="h-6 w-6 text-intelekt-cta" />,
    title: "Inbound Call Handling",
    description: "Never miss a borrower call with 24/7 AI agents ready to assist and qualify leads."
  },
  {
    icon: <Database className="h-6 w-6 text-intelekt-cta" />,
    title: "Custom Agent Rules",
    description: "Tailor logic, tone, follow-ups and compliance checks to match your specific lending criteria."
  },
  {
    icon: <BarChart className="h-6 w-6 text-intelekt-cta" />,
    title: "AI Insights Dashboard",
    description: "Track drop-offs, identify top objections, and monitor agent performance metrics."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-intelekt-background to-intelekt-primary/90 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Makes Intelekt AI Unstoppable for Lending
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our purpose-built AI platform is designed specifically for the lending industry's unique challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-intelekt-accent/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
