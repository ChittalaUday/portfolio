"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const ContactHero = () => {
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
        <section ref={ref} className="py-20 px-6 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                            Let's <span className="text-gradient">Connect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Ready to collaborate on your next project? I'm always excited to discuss
                            new opportunities and innovative ideas.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-3 gap-8 mt-16"
                    >
                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4">
                                <Mail size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                            <p className="text-muted-foreground">chitalauday@gmail.com</p>
                        </div>

                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mx-auto mb-4">
                                <Phone size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                            <p className="text-muted-foreground">+91 83091 54716</p>
                        </div>

                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-4">
                                <MapPin size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
                            <p className="text-muted-foreground">Rajamahendravaram, India</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-16"
                    >
                        <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-purple-500 p-3">
                                    <MessageCircle size={24} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-semibold text-foreground">
                                    Available for Opportunities
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-center">
                                I'm currently available for freelance projects, internships, and full-time positions.
                                Let's discuss how we can work together to bring your ideas to life.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
