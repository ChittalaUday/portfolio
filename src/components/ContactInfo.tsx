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
      title: "Email",
      value: "chitalauday@gmail.com",
      href: "mailto:chitalauday@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 83091 54716",
      href: "tel:+918309154716",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rajamahendravaram, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "uday-kumar-chittala-a1b4912a6",
      href: "http://www.linkedin.com/in/uday-kumar-chittala-a1b4912a6",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "ChittalaUday",
      href: "https://github.com/ChittalaUday",
      color: "from-gray-600 to-gray-700",
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
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Other Ways to <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prefer a different way to reach out? Here are all the ways you can get in touch with me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Methods */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Direct Contact
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{method.title}</h4>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Social & Professional
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
                    className="flex items-center gap-4 p-4 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{social.title}</h4>
                      <p className="text-muted-foreground">{social.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-3">Current Status</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Available for freelance projects</p>
                <p>• Open to internship opportunities</p>
                <p>• Interested in full-time positions</p>
                <p>• Always excited to learn new technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
