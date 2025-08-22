"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ThemeIconToggle from "@/components/ThemeIconToggle";
import {
    Home,
    User2,
    Wrench,
    GraduationCap,
    FolderGit2,
    BriefcaseBusiness,
    Heart,
    Mail,
} from "lucide-react";

const sections = [
    { id: "hero", label: "Home", Icon: Home },
    { id: "about", label: "About", Icon: User2 },
    { id: "skills", label: "Skills", Icon: Wrench },
    { id: "education", label: "Education", Icon: GraduationCap },
    { id: "projects", label: "Projects", Icon: FolderGit2 },
    { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
    { id: "interests", label: "Interests", Icon: Heart },
    { id: "contact", label: "Contact", Icon: Mail },
] as const;

const RightSidebarNav = () => {
    const [active, setActive] = useState<string>("hero");
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const lockUntilRef = useRef<number>(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const mq = typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)") : null;
        const updateSmall = () => setIsSmallScreen(!!mq?.matches);
        updateSmall();
        mq?.addEventListener?.("change", updateSmall);
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: (mq?.matches ? "0px 0px -25% 0px" : "0px 0px -55% 0px"),
            threshold: 0.01,
        };

        // Use IO on non-small screens only to reduce conflicts on mobile
        if (!mq?.matches) {
            sections.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (!el) return;
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (Date.now() < lockUntilRef.current) return;
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActive(id);
                            }
                        });
                    },
                    observerOptions
                );
                observer.observe(el);
                observers.push(observer);
            });
        }

        // Fallback: determine active by viewport center to stabilize on mobile
        let ticking = false;
        const setActiveByCenter = () => {
            if (Date.now() < lockUntilRef.current) return;
            const centerY = window.innerHeight * 0.4; // favor upper-middle
            let current: string | null = null;
            for (const { id } of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= centerY && rect.bottom >= centerY) {
                    current = id;
                    break;
                }
            }
            if (current) setActive(current);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setActiveByCenter();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        // run once on mount
        setActiveByCenter();

        return () => {
            observers.forEach((o) => o.disconnect());
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            mq?.removeEventListener?.("change", updateSmall);
        };
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        // Immediately reflect the active state on user intent, helpful on mobile
        setActive(id);
        // Lock updates briefly to prevent flicker from scroll listeners/IO
        lockUntilRef.current = Date.now() + 900;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Extend/adjust lock based on settling
        setTimeout(() => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.6) setActive(id);
            // release lock if still held
            lockUntilRef.current = Math.min(lockUntilRef.current, Date.now());
        }, 700);
    };

    return (
        <>
            {/* Desktop/Tablet Right Sidebar */}
            <motion.aside
                className={`hidden md:flex fixed top-1/2 -translate-y-1/2 right-6 z-40 rounded-full backdrop-blur-custom ${active ? "bg-gradient-card shadow-2xl" : "bg-white/20 dark:bg-black/20"}
                border border-white/20 dark:border-white/10`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="p-2 flex flex-col gap-2">
                    {sections.map(({ id, label, Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`group relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${active === id
                                ? "bg-accent text-white"
                                : "text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                                }`}
                            aria-label={label}
                            title={label}
                        >
                            <Icon className="h-5 w-5" />

                            {/* Hover label */}
                            <span
                                className="pointer-events-none absolute right-full mr-2 px-2 py-1 rounded-md text-[10px] font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap bg-black/80 text-white dark:bg-white/10 dark:text-white border border-white/10"
                            >
                                {label}
                            </span>
                        </button>
                    ))}
                    <div className="h-px my-1 bg-white/20 dark:bg-white/10" />
                    <ThemeIconToggle />
                </div>
            </motion.aside>

            {/* Mobile Bottom Nav */}
            <motion.nav
                className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95%] w-[92%] rounded-full backdrop-blur-custom ${active ? "bg-gradient-card shadow-2xl" : "bg-white/20 dark:bg-black/20"}
                border border-white/20 dark:border-white/10`}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="px-2 py-2 grid grid-cols-9 gap-1">
                    {sections.map(({ id, label, Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`flex flex-col items-center justify-center gap-1 py-2 rounded-lg transition-colors ${active === id
                                ? "bg-accent/90 text-white"
                                : "text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                                }`}
                            aria-label={label}
                            title={label}
                        >
                            <Icon className="h-5 w-5" />
                        </button>
                    ))}
                    <div className="flex items-center justify-center">
                        <ThemeIconToggle />
                    </div>
                </div>
            </motion.nav>
        </>
    );
};

export default RightSidebarNav;


