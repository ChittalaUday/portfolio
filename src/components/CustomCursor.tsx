"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [targetSize, setTargetSize] = useState(16); // default cursor size

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Enable cursor only on non-touch and md+ screens
  useEffect(() => {
    if (typeof window === "undefined") return;

    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const smallQuery = window.matchMedia("(max-width: 767px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      const isCoarse = coarseQuery.matches;
      const isSmall = smallQuery.matches;
      setIsEnabled(!(isCoarse || isSmall || reducedQuery.matches));
      setReduced(reducedQuery.matches);
    };

    updateEnabled();
    coarseQuery.addEventListener?.("change", updateEnabled);
    smallQuery.addEventListener?.("change", updateEnabled);
    reducedQuery.addEventListener?.("change", updateEnabled);

    return () => {
      coarseQuery.removeEventListener?.("change", updateEnabled);
      smallQuery.removeEventListener?.("change", updateEnabled);
      reducedQuery.removeEventListener?.("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
        setCursorText("Click");
        setTargetSize(32);
      } else if (target.tagName === "IMG") {
        setIsHovering(true);
        setCursorText("View");
        setTargetSize(32);
      } else if (
        ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "LI"].includes(
          target.tagName
        )
      ) {
        setIsHovering(true);
        setCursorText("");

        // Dynamically set cursor size based on element height
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.height * 0.6, 16); // minimum 16px
        setTargetSize(size);
      } else {
        setIsHovering(false);
        setCursorText("");
        setTargetSize(16);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 bg-accent rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: targetSize,
          height: targetSize,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 700, damping: 25 },
          height: { type: "spring", stiffness: 700, damping: 25 },
          opacity: { duration: reduced ? 0 : 0.2, ease: "easeOut" },
        }}
      />

      {/* Cursor Text */}
      {cursorText && (
        <motion.div
          ref={cursorTextRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-white text-sm font-medium"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "20px",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{
            duration: reduced ? 0 : 0.2,
            ease: "easeOut",
          }}
        >
          {cursorText}
        </motion.div>
      )}

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 bg-accent/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: targetSize * 0.5,
          height: targetSize * 0.5,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 700, damping: 25 },
          height: { type: "spring", stiffness: 700, damping: 25 },
          opacity: { duration: reduced ? 0 : 0.3, ease: "easeOut" },
        }}
      />
    </>
  );
};

export default CustomCursor;
