"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [motionEnabled, setMotionEnabled] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const glowY = useSpring(mouseY, { damping: 25, stiffness: 300 });

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
    setMotionEnabled(!(isCoarse || isSmall || prefersReduced));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6"
      onMouseMove={(e) => {
        if (!motionEnabled || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
    >
      {/* Reactive background glow */}
      {motionEnabled && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
          style={{ x: glowX, y: glowY, width: 420, height: 420 }}
        />
      )}

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-foreground mb-10"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          About <span className="text-gradient">Me</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-6 auto-rows-[minmax(120px,auto)] gap-4 md:gap-6"
        >
          {/* About Me card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-6 md:col-span-3 flex flex-col justify-center lg:col-span-4 row-span-2 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 transition-transform"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-3 w-fit">
              Who I Am
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Hey! I’m Uday😎, a computer nerd who loves turning coffee into
              code. I build websites, apps, and little automation hacks that
              make life easier. When not coding, I’m probably geeking out on
              tech stuff, experimenting with cool ideas, or trying to pull a
              Naruto-style jutsu 🌀 in digital form. Basically, if it’s tech and
              fun, I’m there!
            </p>
          </motion.div>

          {/* Current Status card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-6 md:col-span-3 lg:col-span-2 row-span-1 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 transition-transform"
          >
            <h3 className="font-semibold text-foreground mb-4">
              Current Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-muted-foreground">
                  Student at ACET 🎓 (CSE)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-muted-foreground">
                  Full Stack & Mobile Dev 💻
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-muted-foreground">
                  Automation & Random Hacks ⚡
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick stats card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-6 md:col-span-6 lg:col-span-2 row-span-1 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 transition-transform"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs text-muted-foreground">
                  Projects (fun ones)
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs text-muted-foreground">
                  Stacks I use
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs text-muted-foreground">
                  Platforms I touch
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
