"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Globe, BookOpen, Gamepad2, Code, Music, Trophy } from "lucide-react";

const InterestsLanguagesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const interests = [
    {
      icon: Music,
      title: "Music, Gaming, Movies, Reading (Manhwas)",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Playing Cricket and other sports",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Learning new programming languages, frameworks, tools and libraries",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const languages = [
    {
      name: "English",
      fluency: "Fluent",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Telugu",
      fluency: "Native",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Hindi",
      fluency: "Intermediate",
      color: "from-purple-500 to-pink-500",
    },
  ];

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
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Personal <span className="text-gradient">Interests</span> & Languages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond coding, here's what keeps me inspired and the languages I communicate in
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Interests */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Heart className="text-accent" size={28} />
              Interests & Hobbies
            </h3>
            <div className="space-y-6">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${interest.color} p-3`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <p className="text-muted-foreground font-medium">{interest.title}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Globe className="text-accent" size={28} />
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{language.name}</h4>
                    <span className={`px-3 py-1 bg-gradient-to-r ${language.color} text-white text-sm rounded-full`}>
                      {language.fluency}
                    </span>
                  </div>
                  <div className={`w-full h-2 bg-white/10 rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000`}
                      style={{ 
                        width: language.fluency === "Native" ? "100%" : 
                               language.fluency === "Fluent" ? "90%" : "60%" 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



export default InterestsLanguagesSection;
