
import React from 'react';
import { cn } from "@/lib/utils";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="py-20 bg-intelekt-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-30 z-0"></div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-4">
              Customer Success
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              FlexiFinance Boosted MQL-to-KYC Conversions by 40% Using Intelekt AI
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              See how a leading digital lender transformed their customer acquisition funnel with our AI-powered solution.
            </p>
          </div>
          
          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-intelekt-primary/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-fade-in animation-delay-100">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="bg-white/10 h-8 w-8 rounded-full flex items-center justify-center mr-3 text-white/80">
                  Before
                </span>
                Manual Process
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✕</span>
                  <div>
                    <p className="text-white/80">Manual qualification taking 2-3 days</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✕</span>
                  <div>
                    <p className="text-white/80">High drop-offs during lengthy KYC</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✕</span>
                  <div>
                    <p className="text-white/80">₹2,000 customer acquisition cost</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✕</span>
                  <div>
                    <p className="text-white/80">~5 days turnaround time (TAT)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-intelekt-accent/10 backdrop-blur-sm border border-intelekt-accent/20 rounded-xl p-8 animate-fade-in animation-delay-200">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="bg-intelekt-accent/30 h-8 w-8 rounded-full flex items-center justify-center mr-3 text-white">
                  After
                </span>
                Intelekt AI Process
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✓</span>
                  <div>
                    <p className="text-white/80">1,000 leads qualified in 2 minutes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✓</span>
                  <div>
                    <p className="text-white/80">35% increase in activation rate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✓</span>
                  <div>
                    <p className="text-white/80">₹300 CAC vs ₹2,000 previously</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">✓</span>
                  <div>
                    <p className="text-white/80">&lt;24 hours turnaround time</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center animate-fade-in animation-delay-300">
              <div className="text-3xl md:text-4xl font-bold text-intelekt-cta mb-2">40%</div>
              <p className="text-sm text-white/70">MQL-to-KYC Conversion</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center animate-fade-in animation-delay-400">
              <div className="text-3xl md:text-4xl font-bold text-intelekt-cta mb-2">~2min</div>
              <p className="text-sm text-white/70">Lead Qualification Time</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center animate-fade-in animation-delay-500">
              <div className="text-3xl md:text-4xl font-bold text-intelekt-cta mb-2">85%</div>
              <p className="text-sm text-white/70">Reduction in CAC</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center animate-fade-in animation-delay-600">
              <div className="text-3xl md:text-4xl font-bold text-intelekt-cta mb-2">&lt;24h</div>
              <p className="text-sm text-white/70">Turnaround Time</p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-intelekt-primary/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-3xl mx-auto animate-fade-in animation-delay-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-intelekt-accent/30 flex items-center justify-center text-white text-xl">
                "
              </div>
              <div>
                <p className="text-lg text-white/90 italic mb-4">
                  Intelekt AI completely transformed our loan qualification process. We've not only reduced costs but also improved customer experience significantly. The speed at which we can now qualify leads and complete KYC has given us a competitive edge.
                </p>
                <div>
                  <p className="font-semibold text-white">Rajiv Kumar</p>
                  <p className="text-sm text-white/70">Chief Digital Officer, FlexiFinance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
