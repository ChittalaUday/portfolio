"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Globe, Music, Trophy, Code } from "lucide-react";

const InterestsLanguagesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const interests = [
    {
      icon: Music,
      title: "Epic Soundtracks & Meme Songs 🎵🎶",
      description:
        "Listening like a true ninja to summon motivation (or avoid chores).",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Parkour & Random Challenges 🏃‍♂️💨",
      description:
        "Jumping over couches and dodging responsibilities like a stealthy shinobi.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Coding Side Quests 💻🌀",
      description:
        "Building tiny jutsus (scripts) and training my brain chakra daily.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const languages = [
    {
      name: "English",
      fluency: "Hokage Level 🔥",
      color: "from-blue-500 to-cyan-500",
      description:
        "Mastered like Naruto’s Rasengan—with ramen-fueled practice sessions!",
      village: "Hidden Leaf Village of Global Communication",
    },
    {
      name: "Telugu",
      fluency: "Sage Mode 🍃",
      color: "from-green-500 to-emerald-500",
      description:
        "Born with this power—like having the Nine-Tails inside me from day one!",
      village: "Hidden Village of Andhra Pradesh",
    },
    {
      name: "Hindi",
      fluency: "Chunin Level ⚡",
      color: "from-purple-500 to-pink-500",
      description:
        "Still training… sometimes my kunai ends up in the wrong village.",
      village: "Hidden Village of Bollywood",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">Interests</span> & Languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A sneak peek into my ninja hobbies and secret language scrolls.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Hobbies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Heart className="text-accent" size={28} />
              Hobbies & Ninja Shenanigans
            </h3>
            <div className="space-y-6">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 p-5 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${interest.color} p-3 transition-transform duration-300 group-hover:rotate-6`}
                      >
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-semibold text-lg">
                          {interest.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic ml-18">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Globe className="text-accent" size={28} />
              Ninja Languages 🌏🪄
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="group p-5 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {language.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {language.village}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-2 bg-gradient-to-r ${language.color} text-white text-sm rounded-full font-semibold shadow-md group-hover:scale-105 transition-transform`}
                    >
                      {language.fluency}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    {language.description}
                  </p>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${language.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? {
                              width: language.fluency.includes("Sage Mode")
                                ? "100%"
                                : language.fluency.includes("Hokage")
                                ? "85%"
                                : "65%",
                            }
                          : { width: 0 }
                      }
                      transition={{ duration: 1.2, delay: index * 0.2 }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    {language.fluency.includes("Sage Mode")
                      ? "Perfect Chakra Control! 🍃"
                      : language.fluency.includes("Hokage")
                      ? "Village leader energy! 🔥"
                      : "Still tripping over my kunai! ⚡"}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Fun */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-full">
            <span className="animate-bounce">🍜</span>
            <span className="text-sm font-medium text-foreground">
              Powered by ramen, caffeine, and questionable life choices—soon to
              be the ultimate full-stack ninja!
            </span>
            <span className="animate-bounce">⚡</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsLanguagesSection;
