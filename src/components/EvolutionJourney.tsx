import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import EvolutionCard from "./EvolutionCard";
import ProgressBar from "./ProgressBar";
import { useIsMobile } from "../hooks/use-mobile";

const evolutionStages = [
  {
    id: 1,
    title: "Basic IVR system",
    subtitle: "(Press-to-Navigate)",
    interaction: "User Interaction",
    description:
      "Callers dial into a system and are met with a pre-recorded menu of options (e.g., 'Press 1 for Sales, Press 2 for Support')",
    limitations: "Limitations",
    limitationsDesc:
      "Static, slow, non-interactive. Users often get frustrated by long menus and irrelevant options.",
    color: "from-blue-900 to-blue-800",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Speech Enabled IVR",
    subtitle: "(Limited Speech Recognition)",
    interaction: "User Interaction",
    description:
      "Callers can now speak basic commands like 'Sales' or 'Support' instead of pressing buttons.",
    limitations: "Limitations",
    limitationsDesc:
      "Limited vocabulary and poor understanding of natural language. Misinterpretation of user input remains a common issue.",
    color: "from-indigo-900 to-indigo-800",
    delay: 0.4,
  },
  {
    id: 3,
    title: "AI-Powered IVR",
    subtitle: "(Natural Language Understanding)",
    interaction: "User Interaction",
    description:
      "AI recognizes and processes more complex, natural language phrases (e.g., 'I need help with my billing').",
    limitations: "Limitations",
    limitationsDesc:
      "Voice AI can understand intent, answer more dynamic queries, and route calls more intelligently.",
    color: "from-violet-900 to-violet-800",
    delay: 0.6,
  },
  {
    id: 4,
    title: "Agentic AI",
    subtitle: "(Fully Interactive and Autonomous)",
    interaction: "User Interaction",
    description:
      "Callers engage in human-like conversations with an AI that handles multiple languages, provides personalized responses, and resolves issues without human intervention.",
    limitations: "Limitations",
    limitationsDesc:
      "Handles outbound and inbound tasks, lead qualification, customer onboarding, and more with fluid, natural conversations, reducing need for human agents.",
    color: "from-cyan-900 to-cyan-800",
    delay: 0.8,
  },
];

const EvolutionJourney = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const controls = useAnimation();
  const journeyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(journeyRef, { once: true });
  const isMobile = useIsMobile();

  const startAnimation = () => {
    setActiveStage(0);
    setProgress(0);
    setAnimationFinished(false);

    let currentProgress = 0;
    let stageIndex = 0;

    const progressInterval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setAnimationFinished(true);
        return;
      }

      currentProgress += 0.75;
      setProgress(currentProgress);

      const newStageIndex = Math.min(
        Math.floor((currentProgress / 100) * evolutionStages.length),
        evolutionStages.length - 1
      );

      if (newStageIndex !== stageIndex) {
        stageIndex = newStageIndex;
        setActiveStage(stageIndex);
      }
    }, isMobile ? 10 : 100);
  };

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView]);

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16 mb-16"
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
      <div ref={journeyRef} className="mb-20">
        <div className="relative mb-20">
          <ProgressBar progress={progress} />

          <div className="md:flex justify-between absolute w-full -top-6 hidden">
            {evolutionStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative 
                ${
                  index <= activeStage
                    ? "bg-[#1221AA] text-white"
                    : "bg-[#090a1a] text-gray-400 border border-[#1e2240]"
                }`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={
                  index <= activeStage
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0.5 }
                }
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-bold">{stage.id}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {evolutionStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: index <= activeStage ? 1 : 0,
                  y: index <= activeStage ? 0 : 20,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.5,
                  },
                },
              }}
            >
              <EvolutionCard stage={stage} isActive={index <= activeStage} />
            </motion.div>
          ))}
        </motion.div>

        {/* {animationFinished && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={startAnimation}
              className="px-6 py-3 bg-[#1221AA] text-white rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity"
            >
              Replay Journey
            </button>
          </motion.div>
        )} */}
      </div>
    </div>
  );
};

export default EvolutionJourney;
