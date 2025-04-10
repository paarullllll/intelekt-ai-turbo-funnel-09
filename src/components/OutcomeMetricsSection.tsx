import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Target,
  Clock,
  DollarSign,
  Rocket,
  CheckCircle,
  Zap,
} from "lucide-react";

const metrics = [
  {
    value: "5X",
    label: "Leads Qualified",
    description: "Increase in succesfull leads qualified.",
    icon: Rocket,
  },
  {
    value: "40%",
    label: "More Leads to KYC",
    description: "Higher conversion from lead to KYC completion",
    icon: Target,
  },
  {
    value: "1/10th",
    label: "CAC",
    description: "Reduction in customer acquisition cost",
    icon: DollarSign,
  },
  {
    value: "<5 Min",
    label: "Lead Response Time",
    description: "Time from generated leads to first AI call",
    icon: Clock,
  },
  {
    value: "60%",
    label: "Operational Cost Reduction",
    description: "Decrease in operational expenses",
    icon: CheckCircle,
  },
  {
    value: "3 days",
    label: "Deployment Time",
    description: "From contract signing to production launch",
    icon: Zap,
  },
];

const OutcomeMetricsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-intelekt-primary/90 to-intelekt-background relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-20 z-0"
      ></div>

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
            With <span className="text-intelekt-cta">Intelekt AI</span>&nbsp;
            find & disburse to qualified
            <br />
            borrowers, at 1/10th the cost{" "}
            <span className="text-intelekt-accent">in minutes, not months</span>
          </h2>
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
              <h3 className="text-lg font-semibold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-white/70">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Improved Funnel Visualization */}
      </div>
    </section>
  );
};

export default OutcomeMetricsSection;
