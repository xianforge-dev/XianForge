"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Zap, Shield, Crown, BadgeCheck, Flame as FlameIcon, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "MORTAL",
        price: "0",
        description: "Ideal for novice cultivators finding their first spark.",
        features: ["10 Free Forges / Day", "Standard Quality Refinement", "Bilibili Vertical Layout", "Sect Discord Access"],
        icon: Zap,
        color: "white/10",
        button: "ENTER FORGE",
        details: "Path of the Novice"
    },
    {
        name: "IMMORTAL",
        price: "49",
        description: "Ascend to high-tier mastery. Manifest scrolls without limits.",
        features: ["Unlimited Forges", "Ultra HD 4K Generation", "Priority Qi Tokens", "Consistency Refinement v4.0", "One-Click Solana NFTs"],
        icon: Shield,
        color: "gold-500",
        button: "ASCEND NOW",
        popular: true,
        details: "Path of the Sovereign"
    },
    {
        name: "DIVINE LORD",
        price: "199",
        description: "For sects and legendary masters ruling the celestial court.",
        features: ["Custom Style Embedding", "VIP 24/7 Support", "Commercial Rights Grant", "Forge API Integration", "Divine Governance Rights"],
        icon: Crown,
        color: "crimson-500",
        button: "RULE THE HEAVENS",
        details: "Path of the Emperor"
    }
];

export default function Pricing() {
    const [hoveredTier, setHoveredTier] = useState<number | null>(null);

    return (
        <section id="pricing" className="py-20 relative bg-[#0c0c0e] overflow-hidden border-b border-white/5">
            {/* Artisanal Background Grain & Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
            <div className="absolute -right-40 top-1/4 w-[500px] h-[500px] bg-gold-500/[0.02] blur-[150px] rounded-full pointer-events-none animate-wobble" />

            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10 flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col items-center text-center gap-6 md:gap-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[8px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.8em] uppercase text-gold-500/60 text-glow-gold flex items-center gap-4 md:gap-6"
                    >
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                        DIVINE SUBSCRIPTION • 神圣订阅
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-display tracking-widest text-glow-gold uppercase leading-[1.1] drop-shadow-2xl"
                    >
                        Tiers of <br /> <span className="font-serif italic text-white/95 lowercase tracking-tight">Cultivation <span className="text-xl md:text-2xl opacity-20">(修仙等级)</span></span>
                    </motion.h2>

                    <p className="text-white/60 max-w-xl font-serif text-lg md:text-xl italic leading-relaxed border-l-2 border-gold-500/20 pl-6 md:pl-10 -rotate-1 origin-left border-b border-gold-500/5 pb-8 px-4">
                        "Your rank in the Divine Court determines the weight of your scriptures.
                        Choose your path through the eternal tribulations." <br />
                        <span className="text-xs md:text-sm opacity-20 lowercase tracking-widest block mt-4">(神廷地位决定经文分量。)</span>
                    </p>
                </div>

                {/* Expanded Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch w-full">
                    {tiers.map((tier, index) => {
                        const rotations = [-1, 0.5, 1];
                        const lifts = [0, -20, 20];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, rotate: rotations[index] }}
                                whileInView={{ opacity: 1, y: lifts[index], rotate: rotations[index] }}
                                onMouseEnter={() => setHoveredTier(index)}
                                onMouseLeave={() => setHoveredTier(null)}
                                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: lifts[index] - 20, scale: 1.03, rotate: 0, zIndex: 10 }}
                                className={cn(
                                    "glass-beveled organic-radius p-8 md:p-10 flex flex-col items-center text-center group transition-all duration-700 min-h-[500px] md:min-h-[550px] justify-between border relative cursor-pointer active:scale-95 shadow-[0_60px_100px_-20px_rgba(0,0,0,1)]",
                                    tier.popular ? 'border-gold-500/30' : 'border-white/5'
                                )}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 bg-gold-500 text-black px-6 md:px-10 py-2.5 md:py-3 text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase shadow-[0_25px_50px_rgba(255,215,0,0.4)] whitespace-nowrap z-20 molten-edge -rotate-1">
                                        MOST POPULAR • SOVEREIGN (最受欢迎)
                                    </div>
                                )}

                                <div className="w-full flex flex-col items-center">
                                    <div className="p-6 md:p-8 bg-black border border-white/5 mb-6 md:mb-10 inline-flex transition-all duration-1000 rotate-[45deg] group-hover:rotate-[225deg] shadow-2xl shrink-0">
                                        <tier.icon className={cn(
                                            "w-8 md:w-10 h-8 md:h-10 -rotate-[45deg] group-hover:rotate-[135deg] transition-all duration-1000",
                                            tier.popular ? 'text-gold-500 shadow-glow' : 'text-white/20 group-hover:text-white/60'
                                        )} strokeWidth={1.5} />
                                    </div>

                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-white/5 group-hover:text-gold-500/40 transition-colors italic">
                                            {tier.details}
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-display text-white tracking-widest uppercase text-glow-gold leading-none group-hover:scale-110 transition-transform duration-700">
                                            {tier.name}
                                        </h3>
                                    </div>

                                    <p className="text-white/60 font-serif italic mb-6 md:mb-10 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors px-4 md:px-6">
                                        "{tier.description}"
                                    </p>

                                    <div className="flex items-baseline gap-3 mb-8 md:mb-12 justify-center">
                                        <span className="text-white/10 text-xl md:text-2xl font-display">$</span>
                                        <span className="text-5xl md:text-7xl font-display text-glow-gold tracking-tighter leading-none">{tier.price}</span>
                                        <span className="text-white/5 font-black text-[9px] md:text-[10px] tracking-widest uppercase italic">/ cycle</span>
                                    </div>

                                    <div className="w-full flex flex-col gap-4 md:gap-5 mb-10 md:mb-16 items-start px-2">
                                        {tier.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-4 md:gap-5 group/feat translate-x-0 hover:translate-x-2 transition-transform text-left">
                                                <BadgeCheck className={cn(
                                                    "w-4 md:w-5 h-4 md:h-5 transition-all shrink-0",
                                                    tier.popular ? "text-gold-500 shadow-glow" : "text-white/10 group-hover/feat:text-gold-500/40"
                                                )} strokeWidth={1.5} />
                                                <span className="text-xs md:text-sm font-serif italic text-white/60 group-hover/feat:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full relative overflow-hidden group/btn shrink-0">
                                    <button className={cn(
                                        "relative w-full py-5 md:py-7 text-[10px] md:text-[12px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase transition-all duration-700 rounded-sm border flex items-center justify-center gap-4 md:gap-5 z-10",
                                        tier.popular
                                            ? 'bg-gold-500 text-black border-gold-400 shadow-[0_30px_60px_-15px_rgba(255,215,0,0.3)]'
                                            : 'bg-white/[0.02] text-white/20 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10'
                                    )}>
                                        <span className="relative z-10">{tier.button}</span> <FlameIcon className="w-4 md:w-5 h-4 md:h-5 relative z-10" />

                                        {/* Ink Splash on Popular Tier Hover */}
                                        <AnimatePresence>
                                            {hoveredTier === index && tier.popular && (
                                                <div className="absolute inset-0 bg-gold-400 opacity-20 pointer-events-none">
                                                    <div className="ink-splash absolute inset-0 scale-[3] rotate-45" />
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </button>

                                    <div className="mt-6 md:mt-8 opacity-[0.05] group-hover:opacity-30 transition-opacity flex items-center justify-center gap-3 md:gap-4">
                                        <Wind className="w-3 md:w-4 h-3 md:h-4 text-gold-500" />
                                        <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white uppercase italic">Ascension Protocol Secured • 协议安全</span>
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
