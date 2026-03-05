"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ExternalLink, ShieldCheck, Flame, Zap, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

const examples = [
    {
        title: "Sovereign Gaze",
        image: "/assets/hero-girl.png",
        category: "Romance",
        tag: "Ref 1-Style",
        description: "Focusing on the expressive golden eyes as requested in the divine architecture."
    },
    {
        title: "Sect Warfare",
        image: "/assets/manhua_battle_scene_1_1772473040991.png",
        category: "Action",
        tag: "Dragon energy",
        description: "High-intensity battle scene featuring Ref 3 dragon motifs and flowing hair."
    },
    {
        title: "Qi Gathering",
        image: "/assets/manhua_cultivation_meditation_1_1772473058189.png",
        category: "Cultivation",
        tag: "Ethereal",
        description: "Capturing spiritual qi as semi-realistic anime art."
    },
    {
        title: "Midnight Vow",
        image: "/assets/manhua_romance_moment_1_1772473071320.png",
        category: "Romance",
        tag: "Lunar Mist",
        description: "A tender moment between immortals under the cherry blossom trees."
    },
    {
        title: "Heavenly Gate",
        image: "/assets/floating-pavilions.png",
        category: "Environment",
        tag: "Ref 2 Motif",
        description: "Ethereal pavilions floating in the celestial clouds."
    },
    {
        title: "Divine Pillar",
        image: "/assets/manhua_showcase_1_1772472489401.png",
        category: "Epic",
        tag: "Ref 1.0",
        description: "A vertical manhua panel optimized for Bilibili app."
    },
    {
        title: "Crimson Path",
        image: "/assets/crimson-staircase.png",
        category: "Environment",
        tag: "Ref 3 Motif",
        description: "The grand crimson staircase with golden dragon motifs."
    },
    {
        title: "Final Ascension",
        image: "/assets/hero-girl.png",
        category: "Portrait",
        tag: "Golden Aura",
        description: "The peak of cultivation, manifested as a stunning manhua artifact."
    },
];

export default function Showcase() {
    const [selectedImage, setSelectedImage] = useState<typeof examples[0] | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="showcase" className="py-40 relative bg-[#0c0c0e] overflow-hidden border-b border-white/5">
            {/* Artisanal Background Grain & Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />

            {/* Background Decorative Text - DAO (道) - Hand-drawn feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-display text-white/[0.01] select-none pointer-events-none tracking-tighter leading-none -rotate-12 italic">
                Manifest
            </div>

            <div className="container mx-auto px-6 sm:px-10 md:px-20 relative z-10 flex flex-col gap-16 md:gap-24">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-[8px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.8em] uppercase text-gold-500/40 text-glow-gold flex items-center gap-4 md:gap-6"
                    >
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                        HEAVENLY SCROLL ARCHIVE • 天卷档案
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-display tracking-widest text-glow-gold uppercase leading-[1.1] drop-shadow-2xl"
                    >
                        Divine <span className="font-serif italic text-white/95 lowercase tracking-tight">Records <span className="text-xl md:text-3xl opacity-20">(神圣记录)</span></span>
                    </motion.h2>

                    <p className="text-white/60 max-w-xl font-serif text-lg md:text-xl italic leading-relaxed border-l-2 border-gold-500/20 pl-6 md:pl-10 -rotate-1 origin-left border-b border-gold-500/5 pb-6 px-4">
                        "Behold the manifestations of those who preceded your ascent. Each scroll is a fragment of a refined soul." <br />
                        <span className="text-xs md:text-sm opacity-20 lowercase tracking-widest block mt-4">(每一卷都是精炼灵魂碎片。)</span>
                    </p>
                </div>

                {/* Hand-Crafted Masonry Grid - Asymmetrical */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
                    {examples.map((item, index) => {
                        const rotations = [-1.5, 1, -0.5, 1.5];
                        const offsets = [0, 15, -8, 30];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95, y: 30, rotate: rotations[index % rotations.length] }}
                                whileInView={{ opacity: 1, scale: 1, y: offsets[index % offsets.length], rotate: rotations[index % rotations.length] }}
                                transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: offsets[index % offsets.length] - 15, scale: 1.03, rotate: 0, zIndex: 10 }}
                                onClick={() => setSelectedImage(item)}
                                className="group relative aspect-[3/5] overflow-hidden rounded-sm cursor-zoom-in border border-white/5 bg-black shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)] filter grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 molten-edge ring-1 ring-white/5"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-1500 brightness-[0.8] group-hover:brightness-110"
                                />

                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-3 md:gap-4 bg-gradient-to-t from-black via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <span className="text-[7px] md:text-[8px] font-black tracking-[0.2em] md:tracking-[0.4em] bg-gold-500 text-black px-2 md:px-3 py-0.5 md:py-1 uppercase rounded-sm shadow-xl">
                                            {item.category}
                                        </span>
                                        <span className="text-[7px] md:text-[8px] font-black tracking-[0.1em] md:tracking-[0.3em] text-gold-500 uppercase italic opacity-60">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-display text-glow-gold tracking-widest uppercase truncate leading-none mb-1">
                                        {item.title}
                                    </h4>
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-3 h-3 text-gold-500/40" />
                                        <div className="h-[1px] flex-1 bg-gold-500/20" />
                                        <ShieldCheck className="w-4 h-4 text-gold-500 shadow-glow" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Refined CTA Button - Artisanal */}
                <div className="mt-10 md:mt-20 flex flex-col items-center">
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 md:px-12 py-5 md:py-6 glass-beveled border-gold-500/10 text-gold-500 font-black tracking-[0.4em] md:tracking-[0.6em] uppercase cursor-pointer hover:bg-gold-500 hover:text-black transition-all shadow-3xl flex items-center gap-4 md:gap-5 group rounded-sm text-[10px] md:text-[11px] overflow-hidden"
                    >
                        <div className="relative z-10 flex items-center gap-4 md:gap-5">
                            CULTIVATOR RECORDS (记录) <ExternalLink className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>

                        {/* Ink Splash on Hover */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ scale: 0.1, opacity: 0 }}
                                    animate={{ scale: 2, opacity: 1 }}
                                    exit={{ scale: 2.5, opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 bg-gold-400 ink-splash z-0"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <div className="mt-8 md:mt-12 flex items-center gap-3 md:gap-4 opacity-[0.05] hover:opacity-10 transition-opacity">
                        <Wind className="w-3 md:w-4 h-3 md:h-4" />
                        <div className="text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-center px-4">Ethereal Archive Verification Active • 以太档案验证</div>
                    </div>
                </div>
            </div>

            {/* Modal - Artisanal Depth */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-[40px] flex items-center justify-center p-4 sm:p-8 lg:p-20 overflow-y-auto"
                    >
                        <button className="absolute top-6 sm:top-12 right-6 sm:right-12 p-3 sm:p-6 bg-white/[0.02] border border-white/5 hover:bg-white/10 rounded-full transition-all group z-[10001] active:scale-90">
                            <X className="w-6 h-6 sm:w-10 sm:h-10 text-white/40 group-hover:text-gold-500 group-hover:rotate-90 transition-all duration-700" />
                        </button>

                        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row gap-10 md:gap-20 items-center justify-center py-20" onClick={(e) => e.stopPropagation()}>
                            <motion.div
                                initial={{ scale: 0.9, y: 60, rotate: -3 }}
                                animate={{ scale: 1, y: 0, rotate: 0 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 40 }}
                                className="relative aspect-[9/15] w-full max-w-[350px] sm:max-w-[450px] lg:h-[80vh] rounded-sm group overflow-hidden border border-gold-500/20 shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] bg-black ring-1 ring-gold-500/10 shrink-0"
                            >
                                <Image src={selectedImage.image} alt={selectedImage.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                            </motion.div>

                            <div className="flex-1 text-center lg:text-left flex flex-col gap-6 md:gap-10 max-w-xl">
                                <div>
                                    <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-gold-500/60 border-l-[2px] md:border-l-[3px] border-gold-500/40 pl-4 md:pl-6 py-1 md:py-2">
                                        {selectedImage.category}
                                    </span>
                                </div>

                                <h2 className="text-4xl sm:text-6xl md:text-8xl font-display text-white tracking-widest leading-none uppercase text-glow-gold drop-shadow-[0_0_60px_rgba(255,215,0,0.3)]">
                                    {selectedImage.title}
                                </h2>

                                <p className="text-white/40 text-xl md:text-2xl font-serif italic font-light leading-relaxed border-l-2 border-crimson-500/20 pl-6 md:pl-10 -rotate-1 origin-left text-center lg:text-left">
                                    "{selectedImage.description}"
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-6 md:gap-10 mt-6 md:mt-10 justify-center lg:justify-start">
                                    <button className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-gold-500 text-black font-black tracking-[0.3em] md:tracking-[0.4em] uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_45px_100px_-20px_rgba(255,215,0,0.4)] rounded-sm text-xs md:text-sm flex items-center justify-center gap-4 molten-edge group/btn relative overflow-hidden">
                                        <span className="relative z-10">MINT ON SOLANA (铸造)</span> <Flame className="w-4 md:w-5 h-4 md:h-5 relative z-10" />
                                        <div className="ink-splash absolute inset-0 bg-gold-400 scale-[2] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    </button>

                                    <div className="divine-divider w-24 md:w-32 opacity-20 hidden lg:block" />

                                    <button className="p-4 md:p-6 glass border-white/5 text-white/20 hover:text-white/60 transition-all rounded-sm hover:border-white/10 shrink-0">
                                        <Wind className="w-6 md:w-8 h-6 md:h-8" strokeWidth={1} />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 opacity-[0.03] mt-10 md:mt-20 justify-center lg:justify-start">
                                    <div className="text-[8px] md:text-[10px] font-black tracking-[0.6em] md:tracking-[0.8em] uppercase text-center md:text-left px-4">Forged in the Divine Forge of Eternity</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
