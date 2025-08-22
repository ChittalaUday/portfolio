"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Smartphone, Zap, Database, Globe, Wrench } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [expanded, setExpanded] = useState<string | null>(null);
  const [isSmall, setIsSmall] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("All");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsSmall(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const skills = [
    {
      title: "Web Development",
      details: "React, Angular, Next.js, Node.js, Express, Spring Boot",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile Development",
      details: "Android (Java), Flutter, React Native",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Automation & Scripting",
      details: "Web Scraping, N8N, Selenium",
      icon: Zap,
      color: "from-blue-500  to-indigo-500",
    },
    {
      title: "Programming Languages",
      details: "C, C++, Java, Python, Dart, JavaScript, TypeScript",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases",
      details: "MongoDB, PostgreSQL, MySQL, SQLite",
      icon: Database,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Other Tools/Technologies",
      details: "Git, Firebase, Shadcn, Redux, Tailwind, PostGis, Postman, Expo",
      icon: Wrench,
      color: "from-red-500 to-pink-500",
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

  const getSkillIconPath = (name: string): string | null => {
    const key = name.toLowerCase();
    // language/runtime/frameworks
    if (/(typescript|ts)/.test(key)) return "/icons/TypeScript.svg";
    if (/(javascript)/.test(key)) return "/icons/JavaScript.svg";
    if (/react native/.test(key)) return "/icons/react-native.svg";
    if (/react/.test(key)) return "/icons/react-icon.svg";
    if (/next|nextjs|next/.test(key)) return "/icons/next-js.svg";
    if (/angular/.test(key)) return "/icons/angular-icon.svg";
    if (/node/.test(key)) return "/icons/node.svg";
    if (/express/.test(key)) return "/icons/express.svg";
    if (/spring boot|spring/.test(key)) return "/icons/spring-boot-icon.svg";
    if (/flutter/.test(key)) return "/icons/flutterio-icon.svg";
    if (/dart/.test(key)) return "/icons/Dart.svg";
    if (/android/.test(key)) return "/icons/android-studio.svg";
    if (/python/.test(key)) return "/icons/python.svg";
    if (/\bc\+\+\b/.test(key)) return "/icons/C++%20(CPlusPlus).svg";
    if (/\bc#|csharp\b/.test(key)) return "/icons/C#%20(CSharp).svg";
    if (/\bc\b/.test(key)) return "/icons/c.svg";
    if (/java\b/.test(key)) return "/icons/Java.svg";
    // databases
    if (/postgres|postgis/.test(key)) return "/icons/PostgresSQL.svg";
    if (/mysql/.test(key)) return "/icons/MySQL.svg";
    if (/sqlite/.test(key)) return "/icons/SQLite.svg";
    if (/mongodb/.test(key)) return "/icons/mongodb.svg";
    // tooling/libraries
    if (/redux/.test(key)) return "/icons/redux.svg";
    if (/tailwind/.test(key)) return "/icons/Tailwind%20CSS.svg";
    if (/shadcn|shad-cn/.test(key)) return "/icons/shad-cn.svg";
    if (/git\b/.test(key)) return "/icons/Git.svg";
    if (/postman/.test(key)) return "/icons/Postman.svg";
    if (/vs code|visual studio code/.test(key))
      return "/icons/Visual%20Studio%20Code%20(VS%20Code).svg";
    if (/firebase/.test(key)) return "/icons/Firebase.svg";
    if (/selenium/.test(key)) return "/icons/Selenium.svg";
    if (/n8n/.test(key)) return "/icons/n8n-color.svg";
    if (/expo/.test(key)) return "/icons/expo.svg";

    // generic
    if (/api/.test(key)) return "/icons/api.svg";
    if (/automation|automate/.test(key)) return "/icons/auto-mation.svg";
    return null;
  };

  // Scroll-reactive category label
  const [currentCat, setCurrentCat] = useState<string>(skills[0]?.title ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.01,
    };
    skills.forEach((s) => {
      const el = document.getElementById(`skill-cat-${s.title}`);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrentCat(s.title);
        });
      }, options);
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [skills]);

  const tabs = ["All", ...skills.map((s) => s.title)];

  const skillsToRender =
    activeTab === "All" ? skills : skills.filter((s) => s.title === activeTab);

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to
            bring ideas to life
          </p>
        </motion.div>

        {/* Category blocks (filtered by tab) */}
        <div className="space-y-12">
          {skillsToRender.map((skill) => {
            const IconComponent = skill.icon;
            const children = skill.details
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
            return (
              <section key={skill.title} id={`skill-cat-${skill.title}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} p-2.5`}
                  >
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                >
                  {children.map((child) => (
                    <motion.div
                      key={`${skill.title}-${child}`}
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-card border border-white/20 dark:border-white/10 shadow-md hover:shadow-lg transition-shadow">
                        {(() => {
                          const src = getSkillIconPath(child);
                          if (!src)
                            return (
                              <span className="text-xl" aria-hidden>
                                🔹
                              </span>
                            );
                          const needsInvert =
                            src.includes("next-js.svg") ||
                            src.includes("express.svg");
                          const cls = needsInvert
                            ? "h-6 w-6 object-contain dark:invert"
                            : "h-6 w-6 object-contain";
                          return <img src={src} alt={child} className={cls} />;
                        })()}
                        <span className="text-base  font-medium text-foreground/90">
                          {child}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
