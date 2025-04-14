import React from "react";
import { motion } from "framer-motion";

interface StageProps {
  id: number;
  title: string;
  subtitle: string;
  interaction: string;
  description: string;
  limitations: string;
  limitationsDesc: string;
  color: string;
  delay: number;
}

interface EvolutionCardProps {
  stage: StageProps;
  isActive: boolean;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ stage, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: stage.delay }}
      className={`bg-[#090a1a] p-6 rounded-lg border border-[#1e2240] h-full flex flex-col relative overflow-hidden`}
    >
      <h3 className="text-xl font-bold text-white mb-1">{stage.title}</h3>
      <p className="text-intelekt-cta mb-6 text-sm font-medium">
        {stage.subtitle}
      </p>

      <h4 className="font-semibold text-[#8b9faf] mb-2">{stage.interaction}</h4>
      <p className="text-gray-300 text-sm mb-6">{stage.description}</p>

      <h4 className="font-semibold text-[#8b9faf] mb-2 mt-auto">
        {stage.limitations}
      </h4>
      <p className="text-gray-300 text-sm">{stage.limitationsDesc}</p>
    </motion.div>
  );
};

export default EvolutionCard;
