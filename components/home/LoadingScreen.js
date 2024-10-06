"use client";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#202020]">
      <div className="flex flex-col items-start relative z-10">
        {/* Fixed Left-Side Text Reveal */}
        <motion.div
          className="relative overflow-hidden"
          style={{ display: "inline-block" }} // Keep text block inline
        >
          <motion.h1
            className="text-5xl font-bold text-white"
            style={{ clipPath: "inset(0 100% 0 0)" }} // Start with the right side hidden
            initial={{ clipPath: "inset(0 100% 0 0)" }} // Entire text hidden initially
            animate={{ clipPath: "inset(0 0 0 0)" }} // Reveal from right to left while left side is fixed
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Welcome to MetaMint
          </motion.h1>
        </motion.div>

        {/* Second Line Fixed Left-Side Reveal */}
        <motion.div
          className="relative overflow-hidden mt-2"
          style={{ display: "inline-block" }} // Keep text block inline
        >
          <motion.h2
            className="text-2xl font-light text-white"
            style={{ clipPath: "inset(0 100% 0 0)" }} // Start with the right side hidden
            initial={{ clipPath: "inset(0 100% 0 0)" }} // Entire text hidden initially
            animate={{ clipPath: "inset(0 0 0 0)" }} // Reveal from right to left while left side is fixed
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          >
          </motion.h2>
        </motion.div>

        {/* Pulsating Loading Text (Optional) */}
        <motion.h3
          className="text-2xl text-white mt-8"
          animate={{ opacity: [1, 0.6, 1], scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
         
        </motion.h3>
      </div>
    </div>
  );
};

export default LoadingScreen;
