"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { User, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

const AboutSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [motionEnabled, setMotionEnabled] = useState(true);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const glowX = useSpring(mouseX, { damping: 25, stiffness: 300 });
    const glowY = useSpring(mouseY, { damping: 25, stiffness: 300 });

    useEffect(() => {
        const isCoarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
        const isSmall = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
        const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="col-span-6 md:col-span-3 lg:col-span-2 row-span-2 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-transform"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <User size={18} />
                                <span className="font-semibold text-foreground">Chittala Uday Kumar</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <MapPin size={18} />
                                <span>Rajamahendravaram, India</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="http://www.linkedin.com/in/uday-kumar-chittala-a1b4912a6" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 transition">
                                <Linkedin size={18} className="text-accent" />
                            </a>
                            <a href="https://github.com/ChittalaUday" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 transition">
                                <Github size={18} className="text-accent" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="col-span-6 md:col-span-3 lg:col-span-4 row-span-2 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 transition-transform"
                    >
                        <h2 className="text-2xl font-semibold text-foreground mb-3">Professional Summary</h2>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            CSE student with strong skills in full stack web and mobile development, automation, and scripting. Experienced in building scalable applications using MEAN/MERN stacks, Android, and Flutter. Passionate about problem solving, geospatial systems, and automation.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="col-span-6 md:col-span-3 lg:col-span-2 row-span-1 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-center gap-3 transition-transform"
                    >
                        <div className="flex items-center gap-3 text-muted-foreground"><Mail size={18} /><span>chitalauday@gmail.com</span></div>
                        <div className="flex items-center gap-3 text-muted-foreground"><Phone size={18} /><span>+91 83091 54716</span></div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="col-span-6 md:col-span-3 lg:col-span-2 row-span-1 bg-gradient-card border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 transition-transform"
                    >
                        <h3 className="font-semibold text-foreground mb-4">Current Status</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span><span className="text-muted-foreground">B.Tech in CSE at ACET</span></div>
                            <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span><span className="text-muted-foreground">Full Stack & Mobile Developer</span></div>
                            <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg紫-500 animate-pulse"></span><span className="text-muted-foreground">Automation Enthusiast</span></div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="col-span-6 md:col-span-6 lg:col-span-2 row-span-1 bg-gradient-card border border白/20 dark:border白/10 rounded-3xl p-6 md:p-8 transition-transform"
                    >
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold">10+</div>
                                <div className="text-xs text-muted-foreground">Projects</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">4</div>
                                <div className="text-xs text-muted-foreground">Stacks</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">3</div>
                                <div className="text-xs text-muted-foreground">Platforms</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;


