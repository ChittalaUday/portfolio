"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Harmony 🎵 (MEAN Stack)",
      description:
        "A full-stack music player that makes your playlist feel like ninja training—real-time recommendations, Firebase Storage, and authentication.",
      tech: ["MEAN Stack", "Firebase", "Real-time", "Auth"],
      category: "Web Development",
      image: "/projects/harmony.png",
      github: "https://github.com/ChittalaUday/Music-Player-MEAN",
      demo: "https://harmony-demo.vercel.app",
    },
    {
      title: "DCS Web 🌱",
      description:
        "Crop data management with GPS-tagged images and sowing dates. Helping farmers track their crops like a shinobi tracks enemies.",
      tech: ["Next.js", "Node.js", "Postgres", "Postgis", "GPS"],
      category: "Web Development",
      image: "/projects/dcs-web.png",
      github: "",
      demo: "",
    },
    {
      title: "DCS Mobile 📱",
      description:
        "Mobile version of DCS Web—keep tabs on crops anywhere, anytime. Think of it as your ninja scroll in your pocket.",
      tech: ["React Native", "GPS", "Geospatial"],
      category: "Mobile Development",
      image: "/projects/dcs.png",
      github: "",
      demo: "",
    },
    {
      title: "Campus News App 📰",
      description:
        "Role-based news app where admins and faculty post, and students comment—like the Hidden Leaf bulletin board.",
      tech: ["Flutter", "Firebase", "Role-based", "Real-time"],
      category: "Mobile Development",
      image: "/projects/news-app.png",
      github: "",
      demo: "",
    },
    {
      title: "Complaint Management ⚡",
      description:
        "Students lodge complaints, track them in real-time—no more sneaky scrolls under the radar!",
      tech: ["Java", "Firebase", "Real-time", "Tracking"],
      category: "Desktop Application",
      image: "/projects/complaint-system.png",
      github: "",
      demo: "",
    },
    {
      title: "Cable Operator App 🖥️",
      description:
        "Manage subscriptions, billing, and complaints like a ninja managing their clan.",
      tech: ["Java", "MySQL", "Billing", "Customer Management"],
      category: "Desktop Application",
      image: "/projects/cable-operator.png",
      github: "",
      demo: "",
    },
    {
      title: "Recruitment Predictor 📊",
      description:
        "Data analysis & visualization using Matplotlib & Seaborn—predict hiring like a Hokage predicting future threats.",
      tech: ["Python", "Data Analysis", "Matplotlib", "Seaborn"],
      category: "Data Science",
      image: "/projects/recruitment.png",
      github: "",
      demo: "",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Desktop Application",
    "Data Science",
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.02 },
  };

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ninja-level creations across web, mobile, desktop, and data domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors border ${
                filter === cat
                  ? "bg-accent text-white border-accent"
                  : "bg-transparent text-muted-foreground hover:bg-accent/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-60 relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 dark:bg-white/5 text-muted-foreground hover:text-primary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
