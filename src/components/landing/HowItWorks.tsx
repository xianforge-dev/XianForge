"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Scroll as ScrollIcon, Sword, CloudSun } from "lucide-react";

const steps = [
    {
        title: "Paste Raw Text",
        description: "Submit your xianxia chapter text, wuxia battle scene, or cultivation encounter into our divine forge.",
        image: "/assets/floating-pavilions.png",
        icon: CloudSun,
        color: "cyan-500",
        badge: "1. 入口 (Entry)"
    },
    {
        title: "Divine Refinement",
        description: "Our AI analyzes character descriptions, environment details, and qi flow with 95%+ consistency.",
        image: "/assets/crimson-staircase.png",
        icon: Sword,
        color: "crimson-500",
        badge: "2. 锻造 (Refinement)"
    },
    {
        title: "Descend & Mint",
        description: "Export as Bilibili-optimized vertical strips or mint as legendary Solana NFTs to share with the heavens.",
        image: "/assets/hero-girl.png",
        icon: ScrollIcon,
        color: "gold-500",
        badge: "3. 飞升 (Ascension)"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-72 relative bg-black overflow-hidden">
            {/* Background Mist and Particles - Intensified */}
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-t from-transparent to-background/60 z-10" />
            <div className="absolute inset-0 z-0 mist-overlay opacity-50" />

            {/* Giant Background Icons */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] opacity-[0.03] select-none pointer-events-none rotate-12">
                <ScrollIcon className="w-full h-full text-gold-500" />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-48">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-6 mb-8 group"
                    >
                        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent group-hover:w-24 transition-all duration-700" />
                        <span className="text-sm font-black tracking-[0.6em] uppercase text-gold-500 text-glow-gold">
                            ASCENSION PATHWAY
                        </span>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent group-hover:w-24 transition-all duration-700" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-7xl md:text-[6rem] font-display mb-12 tracking-widest text-glow-gold uppercase leading-[0.9]"
                    >
                        The Path to <br /> Immortality
                    </motion.h2>
                    <p className="text-white/40 max-w-2xl font-sans font-light text-2xl leading-relaxed italic border-l-4 border-crimson-500/20 pl-10 text-left">
                        Master the ancient art of manhua manifestation in three divine steps.
                        No artistic talent required — only your imagination and the Divine Forge.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Vertical Qi Linkage Line - More Prominent Glow */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gold-500/20 hidden lg:block overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-full h-1/3 bg-gradient-to-b from-transparent via-white/60 to-transparent"
                        />
                    </div>

                    <div className="flex flex-col gap-64">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col lg:flex-row items-center gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Step Content - Streamlined & Large */}
                                <div className="flex-1 w-full text-center lg:text-left group/content">
                                    <motion.div
                                        whileHover={{ x: index % 2 === 0 ? 30 : -30 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="glass border-gold-500/10 p-16 relative overflow-hidden group rounded-sm shadow-2xl min-h-[450px] flex flex-col justify-center"
                                    >
                                        <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-transparent via-gold-500 to-transparent group-hover:scale-y-125 transition-transform duration-1000 shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                                        <div className="absolute top-0 right-0 p-6 text-[10px] font-black tracking-[0.4em] text-white/5 uppercase select-none group-hover/content:text-white/20 transition-all duration-700">
                                            {step.badge}
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            className="text-xs font-black tracking-[0.4em] uppercase text-white/40 mb-10 flex items-center gap-4"
                                        >
                                            <span className={`w-10 h-10 border border-${step.color}/30 flex items-center justify-center p-2 rounded-sm bg-black molten-edge`}>
                                                <step.icon className={`w-full h-full text-${step.color}`} strokeWidth={1} />
                                            </span>
                                            DIVINE STEP {String(index + 1).padStart(2, '0')}
                                        </motion.div>

                                        <h3 className="text-5xl md:text-6xl font-display text-white mb-10 tracking-widest group-hover:text-glow-gold transition-colors duration-700 leading-tight uppercase">
                                            {step.title}
                                        </h3>

                                        <p className="text-white/60 font-sans leading-relaxed text-2xl italic font-extralight tracking-wide">
                                            "{step.description}"
                                        </p>

                                        {/* Cultivation Rune Background - Reference 2 */}
                                        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 rotate-12 group-hover:rotate-45 pointer-events-none">
                                            <svg viewBox="0 0 100 100" fill="white">
                                                <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" />
                                                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="2 2" />
                                                <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="white" strokeWidth="0.1" fill="none" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Step Indicator Dot (Glowing Number) */}
                                <div className="relative z-10 hidden lg:flex items-center justify-center scale-125">
                                    <div className="w-24 h-24 rounded-full glass border-gold-500/40 flex items-center justify-center text-gold-500 font-display text-4xl shadow-[0_0_60px_rgba(255,215,0,0.6)] bg-black molten-edge relative z-10 transition-transform duration-700 group-hover:scale-110">
                                        {index + 1}
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 2.5, 1], opacity: [0.1, 0.4, 0.1] }}
                                        transition={{ duration: 5, repeat: Infinity, delay: index * 0.5 }}
                                        className={`absolute w-32 h-32 rounded-full bg-${step.color}/30 blur-[60px]`}
                                    />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-[6rem] select-none pointer-events-none tracking-tighter -z-0">
                                        {index === 0 ? "志" : index === 1 ? "炼" : "成"}
                                    </div>
                                </div>

                                {/* Step Visual Preview - Larger & Ref Style Illustrations */}
                                <div className="flex-1 w-full max-w-[800px] group/viz">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="relative aspect-video rounded-sm overflow-hidden border-2 border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.9)] molten-edge"
                                    >
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="w-full h-full object-cover grayscale-[0.6] group-hover/viz:grayscale-0 transition-all duration-1500 scale-110 group-hover/viz:scale-100 brightness-[0.8] group-hover/viz:brightness-100 shadow-2xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover/viz:opacity-40 transition-opacity duration-1000" />
                                        <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay opacity-0 group-hover/viz:opacity-100 transition-opacity" />

                                        {/* Decorative Label */}
                                        <div className="absolute bottom-6 right-6 px-4 py-2 border border-gold-500/30 glass-gold text-[10px] font-black tracking-[0.4em] uppercase text-gold-500/80 reveal-label translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                                            DIVINE MANIFESTATION
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .reveal-label {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
        </section>
    );
}
