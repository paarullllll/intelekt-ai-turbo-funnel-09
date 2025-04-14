import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-1 bg-gray-800 rounded-full w-full mb-10 overflow-hidden md:block hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
          type: "tween",
        }}
      />
    </div>
  );
};

export default ProgressBar;
