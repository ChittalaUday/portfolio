"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactInfo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const contactMethods = [
    {
      icon: Mail,
      title: "Send a Scroll 📜",
      value: "chitalauday@gmail.com",
      href: "mailto:chitalauday@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Fire off an email scroll to summon my attention instantly!",
    },
    {
      icon: Phone,
      title: "Ninja Signal 📞",
      value: "+91 83091 54716",
      href: "tel:+918309154716",
      color: "from-green-500 to-emerald-500",
      description:
        "Call me like you’re sending a smoke signal… works just as fast!",
    },
    {
      icon: MapPin,
      title: "Secret Hideout 🏯",
      value: "Rajamahendravaram, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
      description: "My hidden village—approach quietly or ramen may attack!",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "Shinobi Network 💼",
      value: "uday-kumar-chittala-a1b4912a6",
      href: "http://www.linkedin.com/in/uday-kumar-chittala-a1b4912a6",
      color: "from-blue-600 to-blue-700",
      description: "Professional scrolls and missions—connect if you dare!",
    },
    {
      icon: Github,
      title: "Jutsu Code Repository 💻",
      value: "ChittalaUday",
      href: "https://github.com/ChittalaUday",
      color: "from-gray-600 to-gray-700",
      description:
        "My secret scrolls of code—peek if you have ninja clearance!",
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
    hidden: { opacity: 0, y: 50 },
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connect with this <span className="text-gradient">Shinobi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prefer a secret scroll, ninja signal, or social jutsu? Choose your
            method wisely! 🥷
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Direct Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Mail className="text-accent" size={28} /> Direct Ninja Signals
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex flex-col gap-2 p-4 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic ml-16">
                      {method.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Globe className="text-accent" size={28} /> Social Jutsus
            </h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 p-4 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {social.title}
                        </h4>
                        <p className="text-muted-foreground">{social.value}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic ml-16">
                      {social.description}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl text-center">
              <h4 className="font-semibold text-foreground mb-3">
                Current Ninja Status
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Available for freelance missions 🥷</p>
                <p>• Open to internship scrolls 📜</p>
                <p>• Training for full-time jutsus 💻</p>
                <p>• Always learning new ninja techniques ⚡</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
