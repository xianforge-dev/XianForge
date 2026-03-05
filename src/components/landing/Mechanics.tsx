"use client";

import { motion } from "framer-motion";
import { Flame, ShieldCheck, Smartphone, Target, Zap, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

const mechanics = [
    {
        title: "Instant Forge",
        description: "2026-grade AI transforms raw chapters into vibrant manhua panels in seconds.",
        icon: Flame,
        color: "gold-500",
        motif: "DRAGON FORGE",
        bullets: ["Multilingual Support", "Depth-Aware Refinement"]
    },
    {
        title: "On-Chain Legacy",
        description: "Mint chapters as legendary artifacts on the Solana blockchain with a single click.",
        icon: ShieldCheck,
        color: "crimson-500",
        motif: "IMMORTAL SEAL",
        bullets: ["Zero-Wait Minting", "Verifiable Provenance"]
    },
    {
        title: "Vertical Perfection",
        description: "Optimized for Bilibili and mobile vertical scrolling with precision layout.",
        icon: Smartphone,
        color: "cyan-500",
        motif: "SKY FLOW",
        bullets: ["Auto-Paneling", "Ref 1.0 Aesthetics"]
    },
    {
        title: "Precision Refinement",
        description: "Achieve 95%+ visual consistency across all panels. No more character drift.",
        icon: Target,
        color: "gold-300",
        motif: "INNER VISION",
        bullets: ["Qi Continuity", "Style Embedding"]
    }
];

export default function Mechanics() {
    return (
        <section id="mechanics" className="py-40 relative bg-[#0c0c0e] overflow-hidden border-b border-white/5">
            {/* Artisanal Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
            <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-crimson-500/[0.02] blur-[150px] rounded-full pointer-events-none animate-wobble" />

            <div className="container mx-auto px-6 sm:px-10 md:px-20 relative z-10 flex flex-col gap-16 md:gap-24">
                <div className="flex flex-col items-center text-center gap-6 md:gap-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[8px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.8em] uppercase text-gold-500/60 text-glow-gold flex items-center gap-4 md:gap-6"
                    >
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                        DIVINE MECHANICS • 神圣机制
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-display tracking-widest text-gold-500 uppercase leading-[1.1] drop-shadow-2xl"
                    >
                        The Path of <br /> <span className="font-serif italic text-white/95 lowercase tracking-tight">Manifestation <span className="text-xl md:text-3xl opacity-20">(体现之道)</span></span>
                    </motion.h2>

                    <p className="text-white/60 max-w-xl font-serif text-lg md:text-xl italic leading-relaxed border-l-2 border-gold-500/20 pl-6 md:pl-10 -rotate-1 origin-left border-b border-gold-500/5 pb-6 px-4">
                        "Tools of the mortal realm cannot touch the true essence of the Dao.
                        Forge your scriptures through the four heavenly stages." <br />
                        <span className="text-xs md:text-sm opacity-20 lowercase tracking-widest block mt-4">(尘世工具无法触及大道本质。)</span>
                    </p>
                </div>

                {/* Hand-Crafted Stage Cards - Asymmetrical */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full max-w-7xl mx-auto">
                    {mechanics.map((item, index) => {
                        const rotations = [-1, 2, -1.5, 1];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, rotate: rotations[index % 4] }}
                                whileInView={{ opacity: 1, y: 0, rotate: rotations[index % 4] }}
                                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -15, scale: 1.03, rotate: 0 }}
                                className="glass-beveled organic-radius group p-8 md:p-10 flex flex-col items-center text-center rounded-sm transition-all duration-700 hover:bg-gold-500/[0.04] overflow-hidden relative shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)] min-h-[460px] justify-between border border-white/5 active:scale-95 cursor-pointer"
                            >
                                {/* Artisanal Flourishes */}
                                <div className="absolute top-0 right-0 p-5 opacity-[0.05] group-hover:opacity-30 transition-opacity">
                                    <Zap className={`w-8 h-8 text-${item.color}`} strokeWidth={0.5} />
                                </div>

                                <div className="relative mb-6 md:mb-10 mt-6 shrink-0">
                                    <div className="p-7 bg-black border border-white/5 relative z-10 group-hover:border-gold-500/40 transition-all duration-700 shadow-2xl flex items-center justify-center rotate-[45deg] group-hover:rotate-[225deg] transition-all">
                                        <item.icon className={cn(
                                            "w-8 md:w-10 h-8 md:h-10 group-hover:scale-125 transition-transform duration-1000 -rotate-[45deg] group-hover:rotate-[135deg]",
                                            `text-${item.color}`
                                        )} strokeWidth={1} />
                                    </div>
                                    <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-[9px] font-black text-white/5 uppercase tracking-[0.5em] md:tracking-[1em] select-none pointer-events-none group-hover:text-gold-500/40 transition-all italic">
                                        {item.motif}
                                    </div>

                                    {/* Qi Aura on Hover */}
                                    <div className="absolute inset-0 bg-gold-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1500" />
                                </div>

                                <div className="flex-1 flex flex-col items-center gap-6">
                                    <h3 className="text-xl md:text-2xl font-display text-white tracking-widest uppercase text-glow-gold group-hover:scale-110 transition-transform duration-700 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/20 text-sm md:text-base leading-relaxed font-serif italic tracking-wide group-hover:text-white/60 transition-colors duration-700 px-4">
                                        "{item.description}"
                                    </p>

                                    <div className="flex flex-col gap-3 py-4 w-full items-center">
                                        {item.bullets.map((bullet, bIdx) => (
                                            <div key={bIdx} className="flex items-center gap-3 md:gap-4 group/bullet transition-all">
                                                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gold-500/20 group-hover/bullet:bg-gold-500 shadow-glow" />
                                                <span className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-white/5 group-hover:text-white/40 transition-colors">
                                                    {bullet}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-10 w-full flex flex-col items-center gap-4 shrink-0 transition-all">
                                    <div className="divine-divider w-full opacity-10 group-hover:opacity-30 transition-opacity" />
                                    <div className="flex items-center gap-2 md:gap-3 opacity-10 group-hover:opacity-100 transition-all">
                                        <Wind className="w-4 h-4 text-gold-500" />
                                        <span className="text-[8px] md:text-[9px] font-black tracking-widest text-gold-500 uppercase">QI SYNC ACTIVE (同步中)</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
