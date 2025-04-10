import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Clock,
  Ban,
  Users,
  TrendingDown,
} from "lucide-react";

const CaseStudySection = () => {
  // Define a company name state that could be updated later if needed
  const [companyName] = useState("Rupeeq");

  return (
    <section
      id="case-study"
      className="py-16 md:py-20 lg:py-12 bg-intelekt-background relative"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-30 z-0"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          {/* About Rupeeq - Horizontal Card */}
          <div className="bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-10 md:mb-16 animate-fade-in shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 bg-intelekt-accent/20 h-16 w-16 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-intelekt-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  About {companyName}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {companyName} is a fast-growing DSA focused on personal and
                  business loans. With a strong marketing engine generating high
                  volumes of leads every month, the company's challenge was to
                  convert high lead volumes into qualified opportunities quickly
                  and efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge, Solution, Outcome Structure */}
          <div className="grid gap-10 md:gap-12 mb-16">
            {/* Challenge Section */}
            <div className="bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 animate-fade-in animation-delay-100 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="bg-intelekt-accent/30 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white">
                  <span className="text-xl">1</span>
                </span>
                The Challenge
              </h3>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-5">
                  <p className="text-white/90 text-lg mb-4 md:mb-6">
                    The company faced several challenges:
                  </p>

                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <Clock size={16} />
                      </span>
                      <div>
                        <p className="text-white/90 font-medium">
                          Slow qualification cycles
                        </p>
                        <p className="text-white/80">
                          MQLs waited 1–2 days before receiving a call from the
                          team.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <Ban size={16} />
                      </span>
                      <div>
                        <p className="text-white/90 font-medium">
                          Low conversion
                        </p>
                        <p className="text-white/80">
                          Only 2% of marketing-qualified leads turned into
                          sales-ready ones.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <Users size={16} />
                      </span>
                      <div>
                        <p className="text-white/90 font-medium">
                          Heavy dependence on SDRs
                        </p>
                        <p className="text-white/80">
                          Human teams struggled to follow up at scale, leading
                          to inconsistent conversations and missed
                          opportunities.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500/20 text-red-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <TrendingDown size={16} />
                      </span>
                      <div>
                        <p className="text-white/90 font-medium">
                          Wasted marketing spend
                        </p>
                        <p className="text-white/80">
                          High-intent leads were lost due to slow response time
                          and no-show follow-ups.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-intelekt-primary/50 p-6 rounded-lg border border-white/5 h-fit">
                  <div className="text-white/90">
                    <div className="mb-4 w-full">
                      <div className="text-lg font-medium mb-2">
                        Before Intelekt AI
                      </div>
                      <div className="flex text-sm w-full justify-between">
                        <div className="flex w-full justify-between">
                          <div className="flex w-full gap-2 items-center">
                            <div
                              className="bg-red-500/60 rounded-full h-3 w-3"
                              
                            ></div>
                            <span>MQL to SQL Conversion</span>
                          </div>
                          <span>2%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center my-4">
                      <div className="border-t border-white/10 w-full"></div>
                    </div>

                    <div className="text-sm text-white/70 italic">
                      "Our manual process was causing us to lose qualified
                      prospects to competitors who could move faster."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-intelekt-accent/20 to-intelekt-primary/40 backdrop-blur-sm border border-intelekt-accent/20 rounded-xl p-6 md:p-8 animate-fade-in animation-delay-200 shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="bg-intelekt-accent/40 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white">
                    <span className="text-xl">2</span>
                  </span>
                  The Solution
                </h3>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4 md:space-y-5">
                    <p className="text-white/90 text-lg mb-4 md:mb-6">
                      To address these challenges, {companyName} partnered with
                      Intelekt AI to deploy AI-powered voice agents:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          1
                        </span>
                        <div>
                          <p className="text-white/80">
                            Called every MQL within minutes of form fill
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          2
                        </span>
                        <div>
                          <p className="text-white/80">
                            Verified eligibility and interest through a natural
                            language conversation
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          3
                        </span>
                        <div>
                          <p className="text-white/80">
                            Filtered out cold leads, pushing only SQLs to the
                            sales team
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          4
                        </span>
                        <div>
                          <p className="text-white/80">
                            Logged transcripts, summaries, and intent scores
                            back to CRM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-intelekt-accent text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          5
                        </span>
                        <div>
                          <p className="text-white/80">
                            Created personalized follow-up rules based on lead
                            behavior
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-intelekt-primary/50 p-6 rounded-lg border border-white/5">
                    <div className="bg-intelekt-primary/60 p-4 rounded-lg mb-4 border border-white/5">
                      <div className="flex items-center mb-3">
                        <div className="h-3 w-3 rounded-full bg-intelekt-accent mr-2"></div>
                        <div className="text-white/90 font-medium">
                          AI Voice Agents for Customer Interaction
                        </div>
                      </div>
                      <div>
                        {" "}
                        Automated initial customer outreach to gather necessary
                        information and answer queries
                      </div>
                    </div>

                    <div className="bg-intelekt-primary/60 p-4 rounded-lg mb-4 border border-white/5">
                      <div className="flex items-center mb-3">
                        <div className="h-3 w-3 rounded-full bg-intelekt-cta mr-2"></div>
                        <div className="text-white/90 font-medium">
                          Personalized Follow-Ups
                        </div>
                      </div>
                      <div>
                        AI agents conducted timely follow-ups with applicants,
                        providing updates and assisting with any issues
                      </div>
                    </div>

                    <div className="bg-intelekt-primary/60 p-4 rounded-lg mb-4 border border-white/5">
                      <div className="flex items-center mb-3">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-white/90 font-medium">
                          Real-Time Document Verification
                        </div>
                      </div>
                      <div>
                        Enabled customers to submit documents via voice-guided
                        instructions, with AI agents performing preliminary
                        verification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-intelekt-cta/20 to-intelekt-primary/40 backdrop-blur-sm border border-intelekt-cta/20 rounded-xl p-6 md:p-8 animate-fade-in animation-delay-300 shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="bg-intelekt-cta/40 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white">
                    <span className="text-xl">3</span>
                  </span>
                  The Outcome
                </h3>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4 md:space-y-5">
                    <p className="text-white/90 text-lg mb-4 md:mb-6">
                      The implementation of Intelekt AI's voice agents led to
                      remarkable improvements:
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">
                            6x increase in MQL to SQL conversion rate, from 2%
                            to 12%
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">
                            Reduced response time from 24-48 hours to under 5
                            minutes
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">
                            100% follow-up coverage across all leads,
                            eliminating missed opportunities
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500/20 text-green-400 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <CheckCircle size={16} />
                        </span>
                        <div>
                          <p className="text-white/80">
                            Significant reduction in customer acquisition costs
                            (CAC), from ₹2,000-₹4,000 to ₹300-₹500
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-intelekt-primary/50 p-6 rounded-lg border border-white/5">
                    <h4 className="text-lg font-medium text-white mb-4">
                      Results
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-white/10">
                        <thead>
                          <tr>
                            <th className="py-2 text-left text-sm font-medium text-white/70">
                              Metric
                            </th>
                            <th className="py-2 text-left text-sm font-medium text-white/70">
                              Before Intelekt
                            </th>
                            <th className="py-2 text-left text-sm font-medium text-white/70">
                              After Intelekt
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr>
                            <td className="py-3 text-sm text-white/90">
                              MQL to SQL Conversion
                            </td>
                            <td className="py-3 text-sm text-white/90">2%</td>
                            <td className="py-3 text-sm text-green-400 font-medium">
                              12%
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">
                              Avg. Response Time
                            </td>
                            <td className="py-3 text-sm text-white/90">
                              24–48 hrs
                            </td>
                            <td className="py-3 text-sm text-green-400 font-medium">
                              &lt;5 minutes
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">
                              Manual SDR Touchpoints
                            </td>
                            <td className="py-3 text-sm text-white/90">6+</td>
                            <td className="py-3 text-sm text-green-400 font-medium">
                              0
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">
                              Follow-Up Coverage
                            </td>
                            <td className="py-3 text-sm text-white/90">~35%</td>
                            <td className="py-3 text-sm text-green-400 font-medium">
                              100%
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 text-sm text-white/90">CAC</td>
                            <td className="py-3 text-sm text-white/90">
                              ₹2,000–₹4,000
                            </td>
                            <td className="py-3 text-sm text-green-400 font-medium">
                              ₹300–₹500
                            </td>
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
          <div className="bg-gradient-to-br from-intelekt-primary/50 to-intelekt-primary/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 max-w-3xl mx-auto animate-fade-in animation-delay-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-intelekt-accent to-intelekt-accent/70 flex items-center justify-center text-white text-xl md:text-2xl flex-shrink-0">
                "
              </div>
              <div>
                <p className="text-base md:text-lg text-white/90 italic mb-4 md:mb-5 leading-relaxed">
                  Intelekt AI helped us qualify leads at scale — faster than any
                  human team could. We now focus on closing deals, not chasing
                  dead ends.
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Rajiv Kumar</p>
                  <p className="text-sm text-white/70">
                    Chief Digital Officer, {companyName}
                  </p>
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
