import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X, Zap, Clock, DollarSign, Target, Rocket } from "lucide-react";

const IvrEvolutionSection = () => {
  const steps = [
    {
      title: "Basic IVR system",
      subtitle: "(Press-to-Navigate)",
      color: "from-blue-800/30 to-blue-800/10",
      borderColor: "border-blue-700/40",
      interaction:
        "Callers dial into a system and are met with a pre-recorded menu of options (e.g., 'Press 1 for Sales, Press 2 for Support')",
      limitations:
        "Static, slow, non-interactive. Users often get frustrated by long menus and irrelevant options.",
    },
    {
      title: "Speech Enabled IVR",
      subtitle: "(Limited Speech Recognition)",
      color: "from-blue-600/30 to-blue-600/10",
      borderColor: "border-blue-500/40",
      interaction:
        "Callers can now speak basic commands like 'Sales' or 'Support' instead of pressing buttons.",
      limitations:
        "Limited vocabulary and poor understanding of natural language. Misinterpretation of user input remains a common issue.",
    },
    {
      title: "AI-Powered IVR",
      subtitle: "(Natural Language Understanding)",
      color: "from-blue-400/30 to-blue-400/10",
      borderColor: "border-blue-300/40",
      interaction:
        "AI recognizes and processes more complex, natural language phrases (e.g., 'I need help with my billing').",
      limitations:
        "Voice AI can understand intent, answer more dynamic queries, and route calls more intelligently.",
    },
    {
      title: "Agentic AI",
      subtitle: "(Fully Interactive and Autonomous)",
      color: "from-intelekt-cta/30 to-intelekt-cta/10",
      borderColor: "border-intelekt-cta/40",
      interaction:
        "Callers engage in human-like conversations with an AI that handles multiple languages, provides personalized responses, and resolves issues without human intervention.",
      limitations:
        "Handles outbound and inbound tasks, lead qualification, customer onboarding, and more with fluid, natural conversations, reducing need for human agents.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "40% More Leads to KYC",
      description: "Only high-intent applicants move forward",
      color: "text-intelekt-accent",
    },
    {
      icon: Clock,
      title: "Processing in Hours, Not Days",
      description: "Faster conversions with AI follow-ups, cuts wait times",
      color: "text-intelekt-accent",
    },
    {
      icon: DollarSign,
      title: "Lower CAC, Higher ROI",
      description: "No wasted spend on bad leads",
      color: "text-intelekt-accent",
    },
    {
      icon: Rocket,
      title: "5X More Loan Disbursals",
      description: "AI boosts engagement & conversions",
      color: "text-intelekt-accent",
    },
  ];

  return (
    <section className="py-20 bg-intelekt-background relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
        opacity-20 z-0"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-4">
            Evolution of Voice AI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Journey from old IVRs to{" "}
            <span className="text-intelekt-cta">Intelekt's Agentic AI</span>{" "}
            workflows
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See the transformation from rigid menu systems to intelligent,
            conversational AI agents
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-800/50 via-blue-500/50 to-intelekt-cta/70 rounded-full z-0"></div>

          {/* Evolution Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Marker */}
                <div className="flex justify-center mb-8">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full bg-gradient-to-b",
                      step.color,
                      "flex items-center justify-center border-2",
                      step.borderColor,
                      "shadow-lg z-10"
                    )}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div
                  className={cn(
                    "bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 backdrop-blur-sm",
                    "border border-white/10 rounded-xl p-6",
                    "hover:border-white/20 transition-all duration-300",
                    "h-full"
                  )}
                >
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-intelekt-cta mb-4">
                    {step.subtitle}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white/90 font-medium text-sm mb-2">
                      User Interaction
                    </h4>
                    <p className="text-white/70 text-sm">{step.interaction}</p>
                  </div>

                  <div>
                    <h4 className="text-white/90 font-medium text-sm mb-2">
                      Limitations
                    </h4>
                    <p className="text-white/70 text-sm">{step.limitations}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits section based on slide */}

        {/* Conclusion message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-intelekt-primary/60 to-intelekt-primary/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hidden"
        >
          <p className="text-lg text-intelekt-cta font-medium">
            This progression shows the shift from rigid, menu-based interactions
            to flexible, intelligent voice AI systems capable of personalized,
            dynamic, and human-like conversation ability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IvrEvolutionSection;
