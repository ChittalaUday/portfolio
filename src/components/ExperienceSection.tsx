"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";
import Link from "next/link";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: "Incrivelsoft Pvt. Ltd, Hyderabad",
      link: "https://incrivelsoft.com",
      position: "Intern – Android Development & Web Scraping",
      date: "2022-2023 (6 Months)",
      location: "Hyderabad, India",
      details: [
        "Developed key features for a healthcare Android app using Java.",
        "Built clean UI design to help patients track health metrics.",
        "Created Python scripts using BeautifulSoup and Selenium for automated web scraping.",
      ],
      technologies: ["Java", "Android", "Python", "BeautifulSoup", "Selenium"],
    },
    {
      company: "Niruthi Climate & Ecosystem Pvt. Ltd, Hyderabad",
      link: "https://niruthi.com",
      position: "Intern – Full Stack Developer & App Development",
      date: "2025 (2 Months)",
      location: "Hyderabad, India",
      details: [
        "Developed a geospatial DCS system for crop data collection and analysis.",
        "Implemented GPS-tagged images and metadata processing for real-time field insights.",
      ],
      technologies: [
        "Next.js",
        "React Native",
        "Node.js",
        "PostGis",
        "Postgres",
        "GPS",
        "Geospatial",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.02 }, // subtle scale, no shadow
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and internships that shaped my development
            skills
          </p>
        </motion.div>

        {/* Experiences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative"
            >
              <div className="bg-gradient-card border border-white/20 dark:border-white/10 rounded-2xl p-8 transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-purple-500 p-3">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building size={16} />
                          <Link
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.company}
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
