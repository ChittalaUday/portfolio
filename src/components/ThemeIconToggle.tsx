"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeValue = "light" | "dark" | "system";

const ThemeIconToggle = () => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<ThemeValue>("system");

    useEffect(() => {
        setMounted(true);
        const saved = (localStorage.getItem("theme") as ThemeValue) || "system";
        setTheme(saved);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const root = document.documentElement;
        if (theme === "system") {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.toggle("dark", systemDark);
        } else {
            root.classList.toggle("dark", theme === "dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    if (!mounted) return null;

    const nextTheme: Record<ThemeValue, ThemeValue> = {
        light: "dark",
        dark: "system",
        system: "light",
    };

    const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
    const label = theme[0].toUpperCase() + theme.slice(1);

    return (
        <motion.button
            onClick={() => setTheme(nextTheme[theme])}
            className="group relative w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-colors border border-white/20 dark:border-white/10"
            aria-label={`Theme: ${label} (click to change)`}
            title={`Theme: ${label}`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
        >
            <Icon className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full mr-2 px-2 py-1 rounded-md text-[10px] font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap bg-black/80 text-white dark:bg-white/10 dark:text-white border border-white/10">
                {label}
            </span>
        </motion.button>
    );
};

export default ThemeIconToggle;


