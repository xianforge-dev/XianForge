"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, MousePointer2, Flame, Wind } from "lucide-react";
import { cn, seededRandom } from "@/lib/utils";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yParallax = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "50%"]), { stiffness: 100, damping: 30 });
    const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 2]);

    const panels = [
        {
            image: "/assets/hero-girl.png",
            text: "The heavens tremble as the ancient forge ignites...",
            bubbles: [{ text: "PLEASE ENTER", side: "left", top: "15%" }, { text: "你在哪里？", side: "right", top: "35%" }]
        },
        {
            image: "/assets/manhua_battle_scene_1_1772473040991.png",
            text: "Battle for the Dao: A single strike to pierce the void.",
            bubbles: [{ text: "破！", side: "right", top: "10%" }, { text: "IMPOSSIBLE POWER!", side: "left", top: "60%" }]
        },
        {
            image: "/assets/manhua_cultivation_meditation_1_1772473058189.png",
            text: "Gathering spiritual qi, drenching the world in golden light.",
            bubbles: [{ text: "CALM YOUR HEART", side: "left", top: "20%" }]
        },
        {
            image: "/assets/manhua_romance_moment_1_1772473071320.png",
            text: "Even immortals cannot escape the threads of fate.",
            bubbles: [{ text: "WILL WE MEET AGAIN?", side: "right", top: "40%" }]
        },
        {
            image: "/assets/manhua_showcase_1_1772472489401.png",
            text: "Behold the manifestation of a thousand years of cultivation.",
            bubbles: [{ text: "XIANFORGE...", side: "left", top: "30%" }]
        },
        {
            image: "/assets/manhua_showcase_2_alt_1772472656076.png",
            text: "The gates of the Divine Court are finally revealed.",
            bubbles: [{ text: "BEYOND THE SKY", side: "right", top: "25%" }]
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-40 md:pt-64 pb-32"
        >
            {mounted && (
                <>
                    {/* Organic Background Parallax Layers */}
                    <motion.div
                        style={{ y: yParallax, scale: scaleParallax, rotate: rotateParallax }}
                        className="absolute inset-0 z-0 opacity-20 blur-[1px] transform origin-center"
                    >
                        <Image
                            src="/assets/floating-pavilions.png"
                            alt="Floating Pavilions"
                            fill
                            className="object-cover animate-slow-pan grayscale-[0.5] contrast-[1.2] opacity-40 mix-blend-screen"
                            priority
                        />
                    </motion.div>

                    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />

                    <div className="container mx-auto px-10 md:px-20 lg:px-24 relative z-30 flex flex-col lg:flex-row items-center gap-20">

                        {/* Left Side: Asymmetrical Typographic Block */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-10 max-w-2xl lg:mb-20"
                        >
                            <div className="flex items-center gap-5">
                                <motion.div
                                    animate={{ scaleX: [0, 1.2, 1], opacity: [0, 1] }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-[1px] w-16 bg-gradient-to-r from-crimson-500 to-transparent"
                                />
                                <span className="text-[10px] font-black tracking-[0.6em] uppercase text-crimson-500/60 drop-shadow-[0_0_10px_rgba(220,20,60,0.4)] animate-pulse">
                                    ASCENSION COMMENCING
                                </span>
                            </div>

                            <div className="space-y-8">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="text-6xl md:text-8xl font-display leading-[1.05] text-glow-gold tracking-tight"
                                >
                                    Forge any <br />
                                    <span className="text-white drop-shadow-[0_0_40px_rgba(255,215,0,0.15)] italic font-serif">Scripture</span> <span className="text-white/10 lowercase tracking-normal text-3xl">(经文)</span> <br />
                                    into <span className="text-gold-500 text-glow-gold drop-shadow-2xl">Manhua</span> <span className="text-gold-500/20 lowercase tracking-normal text-3xl">(漫画)</span>
                                </motion.h1>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-xl md:text-2xl text-white/60 max-w-lg leading-relaxed font-serif italic border-l-[3px] border-gold-500/20 pl-10 border-b border-gold-500/10 pb-10 -rotate-1 origin-left"
                            >
                                "Breathe life into ancient characters. Manifest divine intent through vertical scrolls, optimized for the Bilibili platform." <span className="opacity-20 lowercase tracking-tight block mt-2">(通过垂直滚动条表现神圣意图。)</span>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.8 }}
                                className="flex flex-wrap items-center gap-8 mt-4 ml-6"
                            >
                                <button
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="relative group px-12 py-6 bg-gold-500 text-black font-black tracking-[0.5em] uppercase molten-edge transition-all duration-700 rounded-sm text-[11px] shadow-[0_45px_100px_-10px_rgba(255,215,0,0.3)] hover:scale-105 active:scale-95"
                                >
                                    <div className="relative z-10 flex items-center gap-4">
                                        IGNITE THE FORGE <span className="opacity-40 italic lowercase font-normal">(开启锻造)</span> <Flame className="w-5 h-5 animate-pulse" />
                                    </div>

                                    {/* Organic Ink Splash on Hover */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ scale: 0.1, opacity: 0 }}
                                                animate={{ scale: 1.5, opacity: 1 }}
                                                exit={{ scale: 2, opacity: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="absolute inset-0 bg-gold-400 ink-splash z-0"
                                            />
                                        )}
                                    </AnimatePresence>
                                </button>

                                <a
                                    href="#showcase"
                                    className="flex items-center gap-4 px-10 py-6 glass-beveled border-white/5 text-white font-black tracking-[0.4em] hover:bg-white/10 transition-all uppercase text-[9px] group rounded-sm active:scale-95"
                                >
                                    CULTIVATOR ARCHIVE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right Side: Hand-Crafted Scrollstrip Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            animate={{ opacity: 1, scale: 0.9, rotate: 2 }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            whileHover={{ rotate: 1, scale: 0.92 }}
                            className="relative aspect-[9/15] w-full max-w-[400px] mx-auto group lg:ml-20"
                        >
                            {/* Divine Ornamental Frame - Asymmetric */}
                            <div className="absolute -inset-8 border-l-[1px] border-r-[1px] border-gold-500/10 rounded-full opacity-30 pointer-events-none scale-x-[1.1] rotate-[-5deg]" />
                            <div className="absolute -inset-10 border-t-[1px] border-b-[1px] border-crimson-600/10 rounded-full opacity-20 pointer-events-none scale-y-[1.05] rotate-[3deg]" />

                            {/* Artisanal Scroll Wrapper */}
                            <div className="relative h-full w-full glass-gold-premium overflow-hidden rounded-sm shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] p-1.5 ring-1 ring-gold-500/20 group-hover:ring-gold-500/50 transition-all duration-700 -rotate-1 group-hover:rotate-0">
                                <div className="h-full w-full overflow-y-auto custom-scrollbar snap-y snap-mandatory scroll-smooth p-2 flex flex-col gap-4">
                                    {panels.map((panel, idx) => (
                                        <div key={idx} className="relative aspect-[9/15] w-full snap-start rounded-sm overflow-hidden border border-white/5 group/panel flex-shrink-0">
                                            <Image
                                                src={panel.image}
                                                alt={`Preview ${idx}`}
                                                fill
                                                className="object-cover contrast-[1.1] grayscale-[0.2] group-hover/panel:grayscale-0 transition-all duration-1200 group-hover/panel:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                                            {/* Humanized Speech Bubbles - Varied Rotations */}
                                            {panel.bubbles.map((bubble, bIdx) => (
                                                <motion.div
                                                    key={bIdx}
                                                    initial={{ scale: 0, opacity: 0, rotate: (seededRandom((idx + 1) * 31 + bIdx) - 0.5) * 20 }}
                                                    whileInView={{ scale: 1, opacity: 1, rotate: (seededRandom((idx + 1) * 37 + bIdx) - 0.5) * 10 }}
                                                    className={cn(
                                                        "absolute bg-white/95 text-black text-[10px] font-black p-4 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20 max-w-[110px] text-center leading-[0.95] tracking-tight",
                                                        bIdx % 2 === 0 ? "scale-95 translate-x-1" : "scale-105 -translate-x-1"
                                                    )}
                                                    style={{
                                                        top: bubble.top,
                                                        left: bubble.side === 'left' ? '10%' : 'auto',
                                                        right: bubble.side === 'right' ? '10%' : 'auto'
                                                    }}
                                                >
                                                    {bubble.text}
                                                </motion.div>
                                            ))}

                                            {/* Artisanal Narrative Overlay */}
                                            <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/95 border-l-[4px] border-gold-500 shadow-3xl backdrop-blur-3xl organic-radius group-hover/panel:scale-[1.03] transition-transform duration-700">
                                                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-gold-200 leading-tight italic font-serif opacity-80 group-hover/panel:opacity-100 transition-opacity">
                                                    {panel.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Artisanal Scroll Hint */}
                            <motion.div
                                animate={{ y: [0, 8, 0], opacity: [0.1, 0.4, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                            >
                                <Wind className="w-5 h-5 text-gold-500/30" />
                                <span className="text-[8px] font-black tracking-[0.5em] uppercase text-white/20 whitespace-nowrap">ASCEND SPIRITUAL SCROLL</span>
                            </motion.div>
                        </motion.div>

                    </div>
                </>
            )}

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </section>
    );
}
