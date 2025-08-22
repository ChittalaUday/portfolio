"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Smartphone, Globe } from "lucide-react";

const WorkHero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

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
        <section ref={ref} className="py-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-background to-muted/20">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                            My <span className="text-gradient">Work</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            A showcase of projects and experiences that demonstrate my passion for
                            creating innovative digital solutions across web, mobile, and automation domains.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-3 gap-8 mt-16"
                    >
                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4">
                                <Globe size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Web Development</h3>
                            <p className="text-muted-foreground">Full-stack applications with modern frameworks</p>
                        </div>

                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mx-auto mb-4">
                                <Smartphone size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Apps</h3>
                            <p className="text-muted-foreground">Cross-platform and native mobile solutions</p>
                        </div>

                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-4">
                                <Code size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Automation</h3>
                            <p className="text-muted-foreground">Python scripts and workflow automation</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkHero;
