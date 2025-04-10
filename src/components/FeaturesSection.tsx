
import React from 'react';
import { 
  MessageSquare, 
  FileText, 
  Play, 
  Users, 
  Database, 
  BarChart,
  Mic,
  Video,
  Zap,
  Scale
} from "lucide-react";

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
            Intelekt AI isn't just a bot — it's a full-stack agentic platform built for lending. Here's what powers it:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in animation-delay-100 transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-start gap-5">
              <div className="bg-intelekt-accent/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-intelekt-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span>Voice & Video Intelligence</span>
                </h3>
                <p className="text-white/80 leading-relaxed">
                  AI agents engage with customers using human-like speech and guide them through onboarding or product discovery — no typing or app switching required.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in animation-delay-200 transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-start gap-5">
              <div className="bg-intelekt-accent/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-intelekt-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span>Customizable Agent Behavior</span>
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Define your own rules, product logic, language tone, and follow-up sequences. Our no-code setup makes changes frictionless.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in animation-delay-300 transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-start gap-5">
              <div className="bg-intelekt-accent/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-intelekt-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span>Inbound & Outbound Call Handling</span>
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Intelekt AI handles customer calls 24/7 — whether it's a support question, an interest in a product, or a follow-up nudge.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in animation-delay-400 transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-start gap-5">
              <div className="bg-intelekt-accent/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-intelekt-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span>AI Insights & Call Summaries</span>
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Every interaction is recorded, transcribed, and summarized with key highlights. Data is auto-synced to your CRM for instant team visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in animation-delay-500 transform hover:scale-105 hover:shadow-lg md:col-span-2">
            <div className="flex items-start gap-5">
              <div className="bg-intelekt-accent/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-intelekt-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span>Built to Scale</span>
                </h3>
                <p className="text-white/80 leading-relaxed">
                  From 1 to 1,000 AI agents — ramp instantly without ops overhead. Works out of the box with CRMs, LOS, LMS, and on-prem/cloud systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
