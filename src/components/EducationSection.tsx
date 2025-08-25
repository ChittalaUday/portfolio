"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      institution: "Aditya College of Engineering and Technology, Surampalem",
      degree: "B.Tech in CSE",
      score: "CGPA: 7.94",
      date: "2023-2026",
      description:
        "Computer Science and Engineering – diving deep into the world of code!",
      active: true, // Active chip for B.Tech
    },
    {
      institution: "Andhra Polytechnic, Kakinada",
      degree: "Diploma in CME",
      score: "CGPA: 8.4",
      date: "2020-2023",
      description: "Computer Engineering – laying the foundation.",
    },
    {
      institution: "Mandapeta Public School, Mandapeta",
      degree: "3rd Grade – 10th Grade",
      score: "GPA: 10",
      date: "2012-2020",
      description:
        "Primary and Secondary Education – where curiosity first sparked.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" },
  };

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="hidden lg:block absolute left-1/2 top-35 -translate-x-1/2 h-full w-px bg-border" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Education</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From curious kid to B.Tech coder – here’s the timeline of my
            learning adventures.
          </p>
        </motion.div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative space-y-10 lg:space-y-0"
        >
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.li
                key={index}
                whileHover="hover"
                className="relative grid lg:grid-cols-2 items-stretch"
              >
                {/* Timeline node */}
                <motion.div
                  className={`hidden lg:block absolute top-30 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
                    isLeft ? "bg-blue-500" : "bg-emerald-500"
                  } shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />

                {/* Left column */}
                <div
                  className={`order-2 lg:order-1 ${
                    isLeft ? "lg:pr-8" : "lg:pr-16"
                  }`}
                >
                  {isLeft && (
                    <motion.div
                      className={`bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer relative`}
                      whileHover={itemVariants.hover}
                    >
                      {edu.active && (
                        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Current
                        </span>
                      )}
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-3 shrink-0">
                          <GraduationCap size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-accent" />
                          <span className="text-muted-foreground">
                            {edu.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award size={16} className="text-accent" />
                          <span className="text-muted-foreground font-medium">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right column */}
                <div
                  className={`order-1 lg:order-2 ${
                    isLeft ? "lg:pl-16" : "lg:pl-8"
                  }`}
                >
                  {!isLeft && (
                    <motion.div
                      className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer"
                      whileHover={itemVariants.hover}
                    >
                      {edu.active && (
                        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Current
                        </span>
                      )}
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-3 shrink-0">
                          <GraduationCap size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-accent" />
                          <span className="text-muted-foreground">
                            {edu.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award size={16} className="text-accent" />
                          <span className="text-muted-foreground font-medium">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
};

export default EducationSection;
