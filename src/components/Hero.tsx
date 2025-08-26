"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Smartphone,
  Zap,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-nav flex items-center justify-center bg-gradient-animated overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent opacity-70 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-10 sm:px-8 lg:px-12 text-center space-y-8 md:space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.div variants={fadeUp}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-display">
            Yo! I'm <span className="text-gradient-accent">Uday Kumar</span>{" "}
            <span className="inline-block animate-wiggle">😎</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeUp}>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 h-full">
            {[
              { icon: <Code2 />, label: "Full Stack Jutsu" },
              { icon: <Smartphone />, label: "Mobile Summonings" },
              { icon: <Zap />, label: "Automation Rasengan" },
            ].map((skill) => (
              <motion.div
                key={skill.label}
                className="group inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-4 h-4 text-accent flex items-center justify-center">
                  {skill.icon}
                </span>
                <span className="text-sm md:text-base font-medium">
                  <Tooltip>
                    <TooltipTrigger>{skill.label}</TooltipTrigger>
                    <TooltipContent>
                      {skill.label === "Full Stack Jutsu" &&
                        "Coding techniques as powerful as a ninja's jutsu!"}
                      {skill.label === "Mobile Summonings" &&
                        "Calling mobile apps into action like summoning creatures!"}
                      {skill.label === "Automation Rasengan" &&
                        "Spinning automated magic like Naruto's Rasengan!"}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
        >
          I'm a CSE{" "}
          <span className="text-accent font-medium">shinobi-in-training</span>{" "}
          on a mission to make the web ninja-level fun 🥷. I craft{" "}
          <span className="text-accent font-medium">web pages</span>,{" "}
          <span className="text-accent font-medium">mobile apps</span>, and{" "}
          <span className="text-accent font-medium">automation scripts</span> to
          save time and look cool doing it.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 h-12 md:h-14 px-8 md:px-10 bg-gradient-accent text-primary-foreground rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl"
          >
            <span>Check My Jutsus</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 h-12 md:h-14 px-8 md:px-10 border-2 border-accent bg-background/50 backdrop-blur-custom text-accent rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            <span>Send a Shuriken</span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 md:gap-8 mt-4"
        >
          {[
            {
              Icon: Github,
              href: "https://github.com/ChittalaUday",
              label: "GitHub",
            },
            {
              Icon: Linkedin,
              href: "http://www.linkedin.com/in/uday-kumar-chittala-a1b4912a6",
              label: "LinkedIn",
            },
            {
              Icon: Mail,
              href: "mailto:chitalauday@gmail.com",
              label: "Email",
            },
            {
              Icon: Phone,
              href: "tel:+91830954716",
              label: "Phone",
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-card border border-border/50 shadow-lg hover:shadow-xl backdrop-blur-custom"
              aria-label={label}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-3 text-muted-foreground"
        >
          <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 md:w-1.5 md:h-3 bg-accent rounded-full animate-bounce" />
          </div>
          <span className="text-sm md:text-base font-medium">
            Scroll like a ninja
          </span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
};

export default Hero;
