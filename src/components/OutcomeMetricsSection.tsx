import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Target, Clock, DollarSign, Rocket, CheckCircle, Zap } from 'lucide-react';

const metrics = [
  {
    value: "5X",
    label: "More Disbursals",
    description: "Increase in successful loan disbursals",
    icon: Rocket
  },
  {
    value: "40%",
    label: "More Leads to KYC",
    description: "Higher conversion from lead to KYC completion",
    icon: Target
  },
  {
    value: "1/10th",
    label: "CAC",
    description: "Reduction in customer acquisition cost",
    icon: DollarSign
  },
  {
    value: "<24h",
    label: "TAT to Disbursal",
    description: "Turnaround time from application to disbursal",
    icon: Clock
  },
  {
    value: "60%",
    label: "Operational Cost Reduction",
    description: "Decrease in operational expenses",
    icon: CheckCircle
  },
  {
    value: "3 days",
    label: "Deployment Time",
    description: "From contract signing to production launch",
    icon: Zap
  }
];

const OutcomeMetricsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-intelekt-primary/90 to-intelekt-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-20 z-0"></div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-4">
            Results That Matter
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            With <span className="text-intelekt-cta">Intelekt AI</span> they find & disburse to qualified<br />
            borrowers, at 1/10th the cost <span className="text-intelekt-accent">in minutes, not months</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Real-world results our lending clients achieve with Intelekt AI.
          </p>
        </motion.div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center",
                "transform transition-all duration-300 hover:scale-105 hover:border-intelekt-cta/30 hover:shadow-lg"
              )}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-intelekt-cta/10 flex items-center justify-center">
                  <metric.icon className="h-6 w-6 text-intelekt-cta" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-intelekt-cta mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
              <p className="text-sm text-white/70">{metric.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Improved Funnel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Background line */}
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-intelekt-accent -z-10"></div>
            
            {/* Funnel Step 1 */}
            <div className="relative z-10 mb-16">
              <div className="flex justify-center">
                <div className="bg-blue-400/20 border border-blue-400/30 text-white rounded-xl p-5 text-center w-full max-w-lg relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-400 rounded-full text-xs font-medium">
                    START
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Marketing Qualified Leads</h3>
                  <p className="text-white/80">1000 leads generated with marketing campaigns</p>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <span className="text-white/80 text-lg font-semibold">100%</span>
                  </div>
                </div>
              </div>
              
              {/* Processing indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2 flex items-center">
                <Zap className="h-5 w-5 text-blue-400 mr-2 animate-pulse" />
                <span className="text-sm text-blue-400">AI instantly processes all leads</span>
              </div>
            </div>
            
            {/* Funnel Step 2 */}
            <div className="relative z-10 mb-16">
              <div className="flex justify-center">
                <div className="bg-blue-500/20 border border-blue-500/30 text-white rounded-xl p-5 text-center w-full max-w-md relative">
                  <h3 className="text-xl font-semibold mb-2">AI Qualification</h3>
                  <p className="text-white/80">Leads qualified within minutes through intelligent conversation</p>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <span className="text-white/80 text-lg font-semibold">40%</span>
                  </div>
                </div>
              </div>
              
              {/* Filter indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-green-500">60% of leads filtered out</span>
              </div>
            </div>
            
            {/* Funnel Step 3 */}
            <div className="relative z-10">
              <div className="flex justify-center">
                <div className="bg-intelekt-cta/20 border border-intelekt-cta/30 text-white rounded-xl p-5 text-center w-full max-w-sm relative">
                  <h3 className="text-xl font-semibold mb-2">KYC & Documentation</h3>
                  <p className="text-white/80">400 leads complete KYC with AI guidance</p>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <span className="text-white/80 text-lg font-semibold">12%</span>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-intelekt-accent rounded-full text-xs font-medium">
                    COMPLETE
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-block py-4 px-8 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              AI-powered lending starts here
            </motion.a>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
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
