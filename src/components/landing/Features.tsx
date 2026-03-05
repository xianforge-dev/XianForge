"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Smartphone, Target, Flame, Moon, Sun, Anchor } from "lucide-react";

const features = [
    {
        title: "Instant Forge",
        description: "2026-grade AI turns chapters into high-fidelity vertical panels in seconds. No talent required.",
        icon: Flame,
        color: "gold-500",
        motif: "锻造 (Forge)"
    },
    {
        title: "On-Chain Legacy",
        description: "Mint immortal NFTs with one click on Solana. Secure your artistic lineage for eternity.",
        icon: ShieldCheck,
        color: "crimson-500",
        motif: "永恒 (Immortal)"
    },
    {
        title: "Mobile Perfection",
        description: "Built for Bilibili vertical readers. Optimized vertical flow that dominates mobile screens.",
        icon: Smartphone,
        color: "cyan-500",
        motif: "流 (Flow)"
    },
    {
        title: "Character Mastery",
        description: "95%+ consistency across panels. Our forge remembers your character's qi signature.",
        icon: Target,
        color: "gold-300",
        motif: "精度 (Precision)"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-64 relative bg-[#050507] overflow-hidden">
            {/* Background Decorative Motifs - Reference 3 Intensity */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent shadow-[0_0_20px_rgba(255,215,0,0.3)]" />
            <div className="absolute -left-40 top-1/3 w-[800px] h-[800px] bg-crimson-500/[0.03] blur-[200px] rounded-full pointer-events-none" />
            <div className="absolute -right-40 bottom-1/3 w-[800px] h-[800px] bg-gold-500/[0.03] blur-[200px] rounded-full pointer-events-none" />

            {/* Floating Dragon Motif (SVG) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full border-[100px] border-gold-500 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 mb-8 relative flex items-center justify-center p-4 bg-black border-[3px] border-gold-500 molten-edge rotate-45"
                    >
                        <Zap className="w-full h-full text-gold-500 -rotate-45" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-8xl font-display mb-12 tracking-widest text-glow-gold uppercase leading-tight"
                    >
                        Heavenly Artifacts
                    </motion.h2>
                    <div className="relative max-w-3xl">
                        <p className="text-white/50 font-sans font-light text-2xl leading-relaxed italic border-x-2 border-gold-500/20 px-12 py-4">
                            "The tools of the mortal realm cannot touch the true essence of the Dao.
                            Only the XianForge can manifest the unseen energy of your words."
                        </p>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-gold-500/30 text-[10px] font-black tracking-[0.5em] uppercase">
                            Ref 20.26 Legacy
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -20, scale: 1.02 }}
                            className="glass-gold group p-12 flex flex-col items-center text-center rounded-sm transition-all duration-700 hover:bg-gold-500/10 overflow-hidden relative shadow-2xl min-h-[480px] justify-between"
                        >
                            {/* Molten Corner Detail */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold-500/10 group-hover:bg-gold-500/20 transition-all duration-700 rounded-full blur-3xl" />
                            <div className="absolute top-0 right-0 w-8 h-[2px] bg-gold-500/50 group-hover:w-16 transition-all duration-700" />
                            <div className="absolute top-0 right-0 w-[2px] h-8 bg-gold-500/50 group-hover:h-16 transition-all duration-700" />

                            <div className="relative mb-12 mt-4">
                                <div className="absolute inset-0 bg-gold-500 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                                <div className={`p-8 bg-black border-2 border-white/5 shadow-2xl relative z-10 group-hover:border-gold-500/60 transition-all duration-500 molten-edge flex items-center justify-center`}>
                                    <feature.icon className={`w-12 h-12 text-${feature.color} group-hover:scale-110 transition-transform duration-700`} strokeWidth={1} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 className="text-3xl font-display text-white tracking-[0.1em] group-hover:text-glow-gold transition-all duration-500 uppercase">
                                    {feature.title}
                                </h3>
                                <p className="text-white/40 text-lg leading-relaxed font-sans font-extralight tracking-wide group-hover:text-white/70 transition-colors duration-500">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Energy Discharge Visual */}
                            <div className="mt-auto w-full flex items-center justify-center gap-6 group-hover:gap-10 transition-all duration-700">
                                <div className="w-2 h-2 rounded-full bg-gold-500/20 group-hover:bg-gold-500/60 transition-colors" />
                                <div className={`flex-1 h-px bg-gradient-to-r from-transparent via-${feature.color} to-transparent opacity-20 group-hover:opacity-60 transition-opacity`} />
                                <div className="w-2 h-2 rounded-full bg-gold-500/20 group-hover:bg-gold-500/60 transition-colors" />
                            </div>

                            {/* Decorative Kanji/Rune Placeholder - More Visible */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/[0.03] uppercase tracking-[1em] select-none pointer-events-none group-hover:text-white/[0.08] transition-all duration-700 group-hover:tracking-[1.5em] whitespace-nowrap">
                                {feature.motif}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
