
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Target, Clock, DollarSign, Rocket } from "lucide-react";

const AIvsHumanSection = () => {
  const comparisonData = [
    {
      metric: "Cost Efficiency",
      ai: "Reduced expenses in hiring and training agents",
      human: "High costs for hiring, training, salaries, and benefits"
    },
    {
      metric: "Performance & Productivity",
      ai: "Consistent efficiency and effectiveness; handles high volume without fatigue and frustration",
      human: "Variable performance due to fatigue, rejections and emotional stress"
    },
    {
      metric: "Personalization",
      ai: "Learns and adapts from each interaction",
      human: "Personalization may wane due to human oversight or high interaction volume"
    },
    {
      metric: "Availability & Scalability",
      ai: "24/7 availability; scales effortlessly to handle high call volumes",
      human: "Limited to working hours; scalability requires additional hires"
    },
    {
      metric: "Training & Adaptability",
      ai: "Rapid learning from data; adapts quickly to new scenarios",
      human: "Requires extensive and ongoing training; slower adaptation"
    },
    {
      metric: "Client Interaction Quality",
      ai: "Accurate, reliable, and empathetic interactions based on data",
      human: "Interaction quality varies based on individual performance and mood"
    }
  ];

  const keyBenefits = [
    {
      icon: Target,
      title: "40% More Leads to KYC",
      description: "Only high-intent applicants move forward"
    },
    {
      icon: Clock,
      title: "Processing in Hours, Not Days",
      description: "Faster conversions with AI follow-ups, cuts wait times"
    },
    {
      icon: DollarSign,
      title: "Lower CAC, Higher ROI",
      description: "No wasted spend on bad leads"
    },
    {
      icon: Rocket,
      title: "5X More Loan Disbursals",
      description: "AI boosts engagement & conversions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-intelekt-background to-intelekt-primary/80 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-intelekt-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-intelekt-cta/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-intelekt-cta/10 border border-intelekt-cta/20 text-sm text-white/80 mb-4">
            Comparison
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-intelekt-cta">Intelekt AI's Agents</span> vs. Human Agents
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See how our AI agents compare to traditional human agents across key performance metrics
          </p>
        </motion.div>
        
        {/* Key Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              With <span className="text-intelekt-cta">Intelekt AI</span> they find & disburse to qualified borrowers,<br/>
              at 1/10th the cost <span className="text-intelekt-accent">in minutes, not months</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-intelekt-primary/50 border border-white/10 rounded-xl p-6 hover:border-intelekt-cta/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-intelekt-accent/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="h-5 w-5 text-intelekt-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                </div>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-intelekt-primary/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-full divide-y divide-white/10">
              <thead>
                <tr className="bg-intelekt-primary/80">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white/90 w-1/3">Metric</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-intelekt-cta w-1/3">Pre-trained AI agents</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white/90 w-1/3">Human Agents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonData.map((row, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={cn(
                      index % 2 === 0 ? "bg-intelekt-primary/40" : "bg-intelekt-primary/30",
                      "hover:bg-intelekt-primary/50 transition-colors"
                    )}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white/90">{row.metric}</td>
                    <td className="px-6 py-4 text-sm text-white/80 border-l border-white/10">{row.ai}</td>
                    <td className="px-6 py-4 text-sm text-white/70 border-l border-white/10">{row.human}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Intelekt AI agents provide superior performance and cost efficiency, 
            while maintaining high quality customer interactions at scale
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIvsHumanSection;
