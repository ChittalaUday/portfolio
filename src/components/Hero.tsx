"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Code2,
  Smartphone,
  Zap,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-nav flex items-center justify-center bg-gradient-animated overflow-hidden"
    >
      {/* Background Pattern with Grid */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent opacity-70 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s", animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s", animationDuration: "7s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-10 sm:px-8 lg:px-12">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Avatar Section
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 mb-6">
              <div className="w-full h-full rounded-full bg-gradient-accent p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-card border border-border flex items-center justify-center backdrop-blur-custom">
                  <span className="text-2xl md:text-3xl font-bold text-gradient font-display">
                    UK
                  </span>
                </div>
              </div>
              
              <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-green-500 border-3 border-background rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div> */}

          {/* Main Heading */}
          <div
            className={`space-y-4 transform transition-all duration-1000 mt-8 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-display">
              Hi, I'm <span className="text-gradient-accent">Uday Kumar</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          {/* Skills Pills */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="group inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
                <Code2 className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-medium">
                  Full Stack Developer
                </span>
              </div>
              <div className="group inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
                <Smartphone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-medium">
                  Mobile Apps
                </span>
              </div>
              <div className="group inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
                <Zap className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-medium">
                  Automation
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              CSE Student passionate about building exceptional digital
              experiences. I create{" "}
              <span className="text-accent font-medium">web applications</span>,
              <span className="text-accent font-medium"> mobile apps</span>, and
              <span className="text-accent font-medium">
                {" "}
                automation solutions
              </span>{" "}
              that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <button className="group inline-flex items-center gap-2 h-12 md:h-14 px-8 md:px-10 bg-gradient-accent text-primary-foreground rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-magnetic">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group inline-flex items-center gap-2 h-12 md:h-14 px-8 md:px-10 border-2 border-accent bg-background/50 backdrop-blur-custom text-accent rounded-full font-semibold text-base md:text-lg  transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-magnetic">
                <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex justify-center gap-4 md:gap-6 px-4">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "#", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-card border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl backdrop-blur-custom animate-magnetic"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-accent transition-colors group-hover:scale-110 transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <div className="flex flex-col items-center gap-3 text-muted-foreground mt-12 md:mt-16">
              <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 md:w-1.5 md:h-3 bg-accent rounded-full animate-bounce" />
              </div>
              <span className="text-sm md:text-base font-medium">
                Scroll to explore
              </span>
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
};

export default Hero;
