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
      title: "Music Player (MEAN Stack)",
      description:
        "Full-featured music app with Firebase Storage, authentication, and real-time song recommendations.",
      tech: ["MEAN Stack", "Firebase", "Real-time", "Authentication"],
      color: "from-blue-500 to-cyan-500",
      category: "Web Development",
      image: "/projects/harmony.png",
    },
    {
      title: "DCS Web",
      description:
        "Crop data management with geotagged images, GPS coordinates, sowing dates, and crop stage tracking.",
      tech: ["Next.js", "Node.js", "Postgres", "Postgis", "GPS", "Geospatial"],
      color: "from-green-500 to-emerald-500",
      category: "Web Development",
      image: "/projects/dcs-web.png",
    },

    {
      title: "DCS Mobile",
      description:
        "Crop data management with geotagged images, GPS coordinates, sowing dates, and crop stage tracking.",
      tech: ["React Native", "GPS", "Geospatial"],
      color: "from-green-500 to-emerald-500",
      category: "Mobile Development",
      image: "/projects/dcs.png",
    },
    {
      title: "Campus News App (Flutter)",
      description:
        "Role-based hierarchy allowing admins and faculty to post news while students can view and comment.",
      tech: ["Flutter", "Firebase", "Role-based", "Real-time"],
      color: "from-blue-500 to-indigo-500",
      category: "Mobile Development",
      image: "/projects/news-app.png",
    },
    {
      title: "Complaint Management System (Java)",
      description:
        "Students can lodge and track campus complaints with real-time updates.",
      tech: ["Java", "MySQL", "Real-time", "Tracking"],
      color: "from-orange-500 to-red-500",
      category: "Desktop Application",
      image: "/projects/complaint-system.png",
    },
    {
      title: "Cable Operator App (Java)",
      description:
        "Complete solution for managing customer data, subscription plans, complaints, and billing.",
      tech: ["Java", "MySQL", "Billing", "Customer Management"],
      color: "from-purple-500 to-pink-500",
      category: "Desktop Application",
      image: "/projects/cable-operator.png",
    },
    {
      title: "Recruitment Prediction System (Python)",
      description:
        "Performed data analysis and visualization using Matplotlib & Seaborn.",
      tech: ["Python", "Data Analysis", "Matplotlib", "Seaborn"],
      color: "from-yellow-500 to-orange-500",
      category: "Data Science",
      image: "/projects/recruitment.png",
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
            Showcasing creativity across different technologies and domains
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

        {/* Projects or Placeholder */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
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
                        className="text-xs bg-white/10 dark:bg-white/5 text-muted-foreground  hover:text-primary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Github size={18} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              "android-studio",
              "angular-icon",
              "api",
              "auto-mation",
              "C# (CSharp)",
              "c",
              "C++ (CPlusPlus)",
              "Dart",
              "express",
              "Firebase",
              "flutterio-icon",
              "Git",
              "Java",
              "JavaScript",
              "mongodb",
              "MySQL",
              "next-js",
              "node",
              "PostgresSQL",
              "Postman",
              "python",
              "react-icon",
              "react-native",
              "redux",
              "Selenium",
              "shad-cn",
              "spring-boot-icon",
              "SQLite",
              "Tailwind CSS",
              "TypeScript",
              "Visual Studio Code (VS Code)",
              "n8n-color",
            ].map((icon) => (
              <div
                key={icon}
                className="flex flex-col items-center p-4 bg-white/5 rounded-xl shadow-md"
              >
                <Image
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  width={48}
                  height={48}
                />
                <p className="mt-2 text-xs text-muted-foreground text-center">
                  {icon.replace(/[-()]/g, " ")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
