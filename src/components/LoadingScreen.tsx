"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  easeOut,
  easeInOut,
  Variants,
} from "framer-motion";
import { Code, Braces, Smartphone, Box } from "lucide-react";

const phrases = [
  "Charging Chakra...",
  "Summoning Jutsu...",
  "Sharpening Kunai...",
  "Running Shadow Clone...",
  "Preparing Rasengan...",
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [minimal, setMinimal] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const isSmall =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMinimal(isCoarse || isSmall || prefersReduced);

    const timer = setInterval(
      () => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsComplete(true), minimal ? 0 : 300);
            return 100;
          }
          return prev + (minimal ? 30 : Math.random() * 15);
        });
      },
      minimal ? 60 : 100
    );

    const phraseTimer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(phraseTimer);
    };
  }, [minimal]);

  // Fixed variants type
  const logoVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i = 0) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Logo Animation */}
        {!minimal && (
          <div className="flex items-center gap-3 mb-6">
            {[Code, Smartphone, Braces, Box].map((Icon, i) => (
              <motion.div
                key={i}
                custom={i}
                className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-accent to-red-400"
                initial="hidden"
                animate="visible"
                variants={logoVariants}
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: easeOut }}
          />
        </div>

        {/* Animated Phrases */}
        <motion.p
          key={phraseIndex}
          className="text-muted-foreground text-sm font-mono mb-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4, ease: easeInOut }}
        >
          {phrases[phraseIndex]}
        </motion.p>

        {/* Default Loading Text */}
        <motion.p
          className="text-muted-foreground text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Loading...
        </motion.p>

        {/* Floating Elements */}
        {!minimal && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-16 left-16 w-2 h-2 bg-accent rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, -15, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
            />
            <motion.div
              className="absolute bottom-16 right-16 w-3 h-3 bg-orange-500 rounded-full"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.3, 0.8, 0.3],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: easeInOut,
                delay: 0.3,
              }}
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
