"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect touch devices and reduced motion settings
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isCoarse || prefersReduced) {
      return;
    }

    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.0,
      easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    } as any);

    let rafId = 0;
    let running = true;
    const raf = (time: number) => {
      if (!running) return;
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onVisibility = () => {
      // Pause RAF when tab is hidden to save CPU on mobile
      running = document.visibilityState === "visible";
      if (running) {
        rafId = requestAnimationFrame(raf);
      } else {
        cancelAnimationFrame(rafId);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
