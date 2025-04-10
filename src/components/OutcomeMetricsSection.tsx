
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yען0iLz48L2c+PC9nPjwvc3ZnPg==')]
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
        
        {/* Funnel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Funnel Step 1 */}
            <div className="mb-6">
              <div className="bg-blue-400/20 border border-blue-400/30 text-white rounded-t-xl p-4 text-center relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">100%</span>
                <p className="font-medium">1000 leads generated with Marketing Campaigns</p>
              </div>
            </div>
            
            {/* AI Instantly Qualifies */}
            <div className="absolute right-0 -mt-2 mb-2 px-3 py-1 bg-intelekt-cta/10 border border-intelekt-cta/20 rounded-lg flex items-center">
              <Zap className="h-4 w-4 text-intelekt-cta mr-1" />
              <span className="text-sm text-intelekt-cta">AI instantly qualifies all leads</span>
            </div>
            
            {/* Funnel Step 2 */}
            <div className="mb-6 max-w-[85%] mx-auto">
              <div className="bg-blue-500/20 border border-blue-500/30 text-white rounded-lg p-4 text-center relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">100%</span>
                <p className="font-medium">1000 Sales qualified leads within minutes</p>
              </div>
            </div>
            
            {/* Filtered leads */}
            <div className="absolute right-0 mt-2 mb-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">80% of leads filtered & high-intent</span>
            </div>
            
            {/* Funnel Step 3 */}
            <div className="mb-6 max-w-[70%] mx-auto">
              <div className="bg-yellow-400/20 border border-yellow-400/30 text-white rounded-lg p-4 text-center relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">20%</span>
                <p className="font-medium">200 at KYC / Documentation</p>
              </div>
            </div>
            
            {/* More loan approvals */}
            <div className="bg-intelekt-accent/80 text-center py-3 rounded-lg max-w-[50%] mx-auto mb-8">
              <div className="flex items-center justify-center">
                <Target className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">
                  {">"} 40% more loan approvals
                </span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-block py-4 px-8 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300"
              >
                AI-powered lending starts here
              </motion.a>
            </div>
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
