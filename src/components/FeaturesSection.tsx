import React from "react";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Target,
  BarChart,
  ShieldCheck,
  FileText,
  BrainCircuit,
  Phone,
  Users,
  MessagesSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Feature card component
const FeatureCard = ({
  title,
  description,
  icon: Icon,
  delay = 0,
  className,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 + delay * 0.1 }}
      className={cn(
        "bg-gradient-to-br from-intelekt-primary/90 to-intelekt-primary/50 backdrop-blur-sm",
        "border border-white/10 rounded-xl p-6 h-full",
        "hover:border-intelekt-accent/30 hover:shadow-lg hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      <div className="bg-intelekt-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-intelekt-accent" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-16 md:py-20 lg:py-24 bg-intelekt-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-intelekt-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-intelekt-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            Works without bias, fatigue and errors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            Ready to use agentic AI platform for lending teams to disburse
            faster
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="Real-time loan qualification"
            description="Process 1,000+ leads in minutes with AI voice agents that conduct initial qualification calls as effectively as your best agents."
            icon={Clock}
            delay={0}
          />
          <FeatureCard
            title="Document verification at scale"
            description="Automate document verification with AI that can follow up on missing or incorrect documents, reducing the time to completion."
            icon={FileText}
            delay={1}
          />
          <FeatureCard
            title="Multilingual support"
            description="Connect with customers in their preferred language across Hindi, English, Tamil, Telugu, Kannada, Malayalam, and more."
            icon={MessagesSquare}
            delay={2}
          />
          <FeatureCard
            title="Intelligent follow-ups"
            description="Never lose a lead due to poor follow-up. Our agents automatically call back at the optimal time to maximize conversion."
            icon={Target}
            delay={3}
          />
          <FeatureCard
            title="Performance analytics"
            description="Gain insights into your loan funnel with detailed analytics on qualification rates, conversion rates, and more."
            icon={BarChart}
            delay={4}
          />
          <FeatureCard
            title="Compliance built-in"
            description="All calls are recorded, transcribed, and analyzed for compliance with lending regulations and internal policies."
            icon={ShieldCheck}
            delay={5}
          />
          <FeatureCard
            title="AI-driven insights"
            description="Identify patterns in customer behavior and preferences to optimize your lending strategy and products."
            icon={BrainCircuit}
            delay={6}
            className="lg:col-span-1"
          />
          <FeatureCard
            title="Voice and WhatsApp channels"
            description="Meet customers where they are, with seamless transitions between voice calls, WhatsApp, and other channels."
            icon={Phone}
            delay={7}
            className="lg:col-span-1"
          />
          <FeatureCard
            title="Handoff to human agents"
            description="Seamlessly transfer complex cases to human agents with full context and history of the conversation."
            icon={Users}
            delay={8}
            className="lg:col-span-1"
          />
        </div>

        {/* CTA section */}
        <div className="mt-16 md:mt-20 text-center">
          <Button
            className={cn(
              "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
              "text-lg px-8 py-6 font-medium rounded-xl",
              "transition-all duration-300 shadow-lg",
              "hover:shadow-intelekt-cta/20 hover:shadow-xl transform hover:-translate-y-1"
            )}
            onClick={() =>
              window.open(
                "https://calendly.com/getintelekt-sales/30min",
                "_blank"
              )
            }
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
