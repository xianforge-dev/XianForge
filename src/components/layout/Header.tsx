"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Flame,
    Menu,
    X,
    ChevronRight,
    Sparkles,
    Zap,
    Layout,
    BookOpen,
    Trophy,
    Activity,
    Twitter
} from "lucide-react";
import { cn } from "@/lib/utils";

import Logo from "../ui/Logo";

const navLinks = [
    { name: "Forge", href: "/#demo", icon: Zap, zh: "锻造" },
    { name: "Mechanics", href: "/#mechanics", icon: Layout, zh: "机制" },
    { name: "Showcase", href: "/#showcase", icon: BookOpen, zh: "作品" },
    { name: "Archive", href: "/app/series", icon: Trophy, zh: "档案" },
    { name: "Ascension", href: "/#pricing", icon: Activity, zh: "提升" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible",
                isScrolled
                    ? "bg-black/80 backdrop-blur-3xl py-4 md:py-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-b border-gold-500/10"
                    : "bg-transparent py-7 md:py-10 border-b border-transparent"
            )}
        >
            <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16">
                {/* Custom Logo - Responsive & Animated */}
                <Link href="/" className="group relative z-[110] transition-all duration-700 hover:scale-105 active:scale-95">
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <Logo size="sm" showText={false} />
                            <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                        <div className="flex flex-col -gap-1">
                            <span className="text-xl md:text-2xl font-display tracking-[0.2em] bg-gradient-to-r from-gold-500 via-crimson-400 to-gold-600 bg-clip-text text-transparent uppercase italic leading-none drop-shadow-sm">
                                XianForge
                            </span>
                            <span className="text-[7px] font-black tracking-[0.5em] text-white/20 group-hover:text-gold-500/40 transition-colors uppercase italic hidden sm:inline-block">
                                Refine Scriptures <span className="font-serif italic lowercase tracking-tight opacity-40">(仙锻)</span>
                            </span>
                        </div>
                    </div>
                    {/* Tooltip hint on hover (bilingual) */}
                    <div className="absolute -bottom-10 left-0 w-max bg-black/80 backdrop-blur-md border border-gold-500/10 px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-[8px] font-black tracking-[0.2em] text-gold-500/80">
                        仙锻 – FORGE HEAVENLY MANHUA
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                    <ul className="flex items-center gap-0.5">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href.startsWith('/#') && pathname === '/');
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "group relative px-3 xl:px-5 py-3 text-[9px] xl:text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 flex flex-col items-center gap-0.5",
                                            isActive ? "text-gold-500" : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        <div className="flex items-center gap-2 xl:gap-3">
                                            <link.icon className={cn(
                                                "w-3 h-3 xl:w-3.5 xl:h-3.5 transition-all duration-500 stroke-[2px]",
                                                isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                            )} />
                                            <span className="group-hover:tracking-[0.4em] transition-all duration-500">{link.name}</span>
                                        </div>
                                        <span className={cn(
                                            "text-[7px] xl:text-[8px] transition-all duration-700 font-serif italic lowercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap",
                                            isActive ? "opacity-50 text-gold-500" : "opacity-0 group-hover:opacity-40 text-gold-500"
                                        )}>
                                            ({link.zh})
                                        </span>

                                        {/* Organic Indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav-dot"
                                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_15px_#ffd700]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent mx-2" />

                    <div className="flex items-center gap-4 xl:gap-6">
                        <Link
                            href="https://x.com/xianforge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 text-white/40 hover:text-gold-500 transition-all hover:scale-110 active:scale-90"
                        >
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/login"
                            className="px-6 xl:px-10 py-3.5 glass-beveled text-[9px] xl:text-[10px] font-black tracking-[0.4em] uppercase rounded-sm hover:bg-gold-500 hover:text-black hover:border-gold-400 group/btn transition-all duration-700 flex flex-col items-center justify-center gap-0.5 active:scale-95 shadow-xl relative overflow-hidden min-w-[160px] xl:min-w-[190px]"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                REFINE SPIRIT <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                            <span className="relative z-10 text-[7px] xl:text-[8px] font-normal font-serif italic lowercase tracking-widest opacity-40 group-hover/btn:text-black group-hover/btn:opacity-100 transition-colors">
                                (即刻炼化)
                            </span>
                            <div className="absolute inset-0 bg-gold-400 ink-splash opacity-0 group-hover/btn:opacity-10 scale-[2.5]" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Actions */}
                <div className="flex lg:hidden items-center gap-3 md:gap-4">
                    <Link
                        href="https://x.com/xianforge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white/40 hover:text-gold-500 transition-all active:scale-90"
                    >
                        <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="relative z-[110] p-3 text-white/40 hover:text-gold-500 transition-all active:scale-90"
                        aria-label="Toggle mobile menu"
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <X className="w-7 h-7 md:w-8 md:h-8" />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                    <Menu className="w-7 h-7 md:w-8 md:h-8" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Fixed Height Issue */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[105] bg-black/98 dark:bg-black/95 backdrop-blur-[100px] lg:hidden h-screen flex flex-col"
                    >
                        {/* Background Grain & Orbs */}
                        <div className="absolute inset-0 pointer-events-none opacity-40">
                            <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-gold-500/[0.05] blur-[120px] rounded-full animate-wobble" />
                            <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-crimson-500/[0.05] blur-[150px] rounded-full animate-pulse-slow" />
                        </div>

                        <div className="flex flex-col flex-1 pt-32 px-10 pb-16 justify-between relative z-10 w-full max-w-lg mx-auto overflow-y-auto custom-scrollbar">
                            <ul className="flex flex-col gap-5 md:gap-7">
                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href || (link.href.startsWith('/#') && pathname === '/');
                                    return (
                                        <motion.li
                                            key={link.name}
                                            initial={{ x: -30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 + index * 0.05, duration: 0.8 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-6 group py-2"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <div className={cn(
                                                    "p-3.5 border organic-radius transition-all shrink-0",
                                                    isActive
                                                        ? "bg-gold-500 border-gold-400 text-black rotate-0 scale-110 shadow-glow"
                                                        : "bg-white/5 border-white/5 text-white/40 group-hover:bg-gold-500/10 group-hover:text-gold-500 rotate-6 group-hover:rotate-0"
                                                )}>
                                                    <link.icon className="w-5 h-5 -rotate-[inherit]" strokeWidth={1} />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <span className={cn(
                                                        "text-2xl md:text-3xl font-display uppercase tracking-[0.15em] transition-all duration-500",
                                                        isActive ? "text-gold-500 text-shadow-glow" : "text-white/30 group-hover:text-gold-500"
                                                    )}>
                                                        {link.name}
                                                    </span>
                                                    <span className="text-[10px] font-serif italic lowercase tracking-widest text-gold-500/40">
                                                        ({link.zh})
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>

                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 40, opacity: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-10 mt-12 shrink-0 px-2"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="text-[9px] font-black tracking-[0.4em] text-white/10 uppercase italic pl-2">INITIATE RITUAL</div>
                                    <Link
                                        href="/login"
                                        className="w-full py-5 md:py-7 bg-gold-500 text-black font-black tracking-[0.4em] uppercase flex items-center justify-center gap-4 molten-edge shadow-[0_30px_60px_-10px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all text-sm rounded-sm"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        ENTER THE FORGE <Sparkles className="w-5 h-5 animate-pulse" />
                                    </Link>
                                </div>

                                <div className="flex flex-col items-center gap-4 text-white/10 italic">
                                    <div className="divine-divider w-full opacity-20" />
                                    <div className="text-[8px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-center px-4 leading-relaxed">Refined in the Divine Archipelago • 神圣群岛精炼</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
