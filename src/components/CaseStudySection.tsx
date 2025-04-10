
import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="py-24 bg-intelekt-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-30 z-0"></div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm font-medium text-white/90 mb-5 transform transition-transform hover:scale-105">
              Customer Success
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              How {{CompanyName}} Doubled Their Loan Conversions by 60% Using Intelekt AI Voice Agents
            </h2>
          </div>

          {/* Challenge, Solution, Outcome Structure */}
          <div className="grid gap-12 mb-16">
            {/* Challenge Section */}
            <div className="bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-fade-in animation-delay-100 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="bg-intelekt-accent/30 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white">
                  <span className="text-xl">1</span>
                </span>
                The Challenge
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <p className="text-white/90 text-lg mb-6">
                    The company faced several challenges:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        <XCircle size={16} />
                      </span>
                      <div>
                        <p className="text-white/80">High Turnaround Time (TAT): The manual loan processing system led to delays, affecting customer satisfaction.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        <XCircle size={16} />
                      </span>
                      <div>
                        <p className="text-white/80">Low Conversion Rates: A significant drop-off occurred between loan application and disbursal stages.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        <XCircle size={16} />
                      </span>
                      <div>
                        <p className="text-white/80">Resource Intensive Processes: Heavy reliance on human agents for customer interactions and document verification.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-intelekt-primary/50 p-6 rounded-lg border border-white/5">
                  <div className="text-white/90">
                    <div className="mb-4">
                      <div className="text-lg font-medium mb-2">Before Intelekt AI</div>
                      <div className="w-full bg-intelekt-primary/30 h-3 rounded-full overflow-hidden">
                        <div className="bg-red-500/60 h-full rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>Low conversion</span>
                        <span>25%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center my-4">
                      <div className="border-t border-white/10 w-3/4"></div>
                    </div>
                    
                    <div className="text-sm text-white/70 italic">
                      "Our manual process was causing us to lose qualified prospects to competitors who could move faster."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution Section */}
            <div className="relative">
              <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 w-10 h-10 bg-intelekt-background border-2 border-intelekt-accent rounded-full flex items-center justify-center z-10">
                <ArrowRight className="text-intelekt-accent rotate-90" size={20}/>
              </div>
              
              <div className="bg-gradient-to-br from-intelekt-accent/20 to-intelekt-primary/40 backdrop-blur-sm border border-intelekt-accent/20 rounded-xl p-8 animate-fade-in animation-delay-200 shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="bg-intelekt-accent/40 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white">
                    <span className="text-xl">2</span>
                  </span>
                  The Solution
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1 bg-intelekt-primary/50 p-6 rounded-lg border border-white/5">
                    <div className="bg-intelekt-primary/60 p-4 rounded-lg mb-4 border border-white/5">
                      <div className="flex items-center mb-3">
                        <div className="h-3 w-3 rounded-full bg-intelekt-accent mr-2"></div>
                        <div className="text-white/90 font-medium">AI Voice Agents for Customer Interaction</div>
                      </div>
                      <div className="text-white/80 text-sm">
                        Automated initial customer outreach to gather necessary information and answer queries
                      </div>
                    </div>
                    
                    <div className="bg-intelekt-primary/60 p-4 rounded-lg mb-4 border border-white/5">
                      <div className="flex items-center mb-3">
                        <div className="h-3 w-3 rounded-full bg-intelekt-cta mr-2"></div>
                        <div className="text-white/90 font-medium">Real-Time Document Verification</div>
                      </div>
                      <div className="text-white/80 text-sm">
                        Enabled customers to submit documents via voice-guided instructions, with AI agents performing preliminary verification
                      </div>
                    </div>
                    
                    <div className="bg-intelekt-primary/60 p-4 rounded-lg border border-white/5">
                      <div className="flex items-center mb-3">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-white/90 font-medium">Personalized Follow-Ups</div>
                      </div>
                      <div className="text-white/80 text-sm">
                        AI agents conducted timely follow-ups with applicants, providing updates and assisting with any issues
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 space-y-5">
                    <p className="text-white/90 text-lg mb-6">
                      To address these challenges, {{CompanyName}} partnered with Intelekt AI to deploy AI-powered voice agents. The solutions included:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</span>
                        <div>
                          <p className="text-white/80">AI-powered qualification of 1,000 leads in 2 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</span>
                        <div>
                          <p className="text-white/80">Automated KYC with conversational AI interface</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</span>
                        <div>
                          <p className="text-white/80">Integration with existing CRM and loan management systems</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</span>
                        <div>
                          <p className="text-white/80">Deployment completed in under 7 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Outcome Section */}
            <div className="relative">
              <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 w-10 h-10 bg-intelekt-background border-2 border-intelekt-accent rounded-full flex items-center justify-center z-10">
                <ArrowRight className="text-intelekt-accent rotate-90" size={20}/>
              </div>
              
              <div className="bg-gradient-to-br from-intelekt-cta/20 to-intelekt-primary/40 backdrop-blur-sm border border-intelekt-cta/20 rounded-xl p-8 animate-fade-in animation-delay-300 shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="bg-intelekt-cta/40 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white">
                    <span className="text-xl">3</span>
                  </span>
                  The Outcome
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <p className="text-white/90 text-lg mb-6">
                      The implementation of Intelekt AI's voice agents led to remarkable improvements:
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">Reduced Turnaround Time: Loan disbursal time decreased by 50%, enhancing customer satisfaction.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">Increased Conversion Rates: Conversion rates from application to disbursal improved by 35%.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">Operational Efficiency: Reduced dependency on human agents allowed staff to focus on more complex tasks, improving overall productivity.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-intelekt-primary/50 p-6 rounded-lg border border-white/5">
                    <h4 className="text-lg font-medium text-white mb-4">Results</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-white/10">
                        <thead>
                          <tr>
                            <th className="py-2 text-left text-sm font-medium text-white/70">Metric</th>
                            <th className="py-2 text-left text-sm font-medium text-white/70">Before Intelekt AI</th>
                            <th className="py-2 text-left text-sm font-medium text-white/70">After Intelekt AI</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr>
                            <td className="py-3 text-sm text-white/90">Disbursal Rate</td>
                            <td className="py-3 text-sm text-white/90">2.2%</td>
                            <td className="py-3 text-sm text-green-400 font-medium">10.5%</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">Avg. TAT to Disbursal</td>
                            <td className="py-3 text-sm text-white/90">10–15 days</td>
                            <td className="py-3 text-sm text-green-400 font-medium">&lt;24 hours</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">KYC Completion Rate</td>
                            <td className="py-3 text-sm text-white/90">14%</td>
                            <td className="py-3 text-sm text-green-400 font-medium">35%+</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">Cost Per Acquisition (CAC)</td>
                            <td className="py-3 text-sm text-white/90">₹2,000–₹4,500</td>
                            <td className="py-3 text-sm text-green-400 font-medium">₹300–₹500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-to-br from-intelekt-primary/50 to-intelekt-primary/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-3xl mx-auto animate-fade-in animation-delay-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-intelekt-accent to-intelekt-accent/70 flex items-center justify-center text-white text-2xl flex-shrink-0">
                "
              </div>
              <div>
                <p className="text-lg text-white/90 italic mb-5 leading-relaxed">
                  Intelekt AI completely transformed our loan qualification process. We've not only reduced costs but also improved customer experience significantly. The speed at which we can now qualify leads and complete KYC has given us a competitive edge.
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Rajiv Kumar</p>
                  <p className="text-sm text-white/70">Chief Digital Officer, {{CompanyName}}</p>
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
