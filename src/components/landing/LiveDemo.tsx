"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Loader2, Share2, Check, Scroll as ScrollIcon, Anchor, Database, Flame, Wind, Zap } from "lucide-react";
import Image from "next/image";
import { cn, seededRandom } from "@/lib/utils";

export default function LiveDemo() {
    const [inputText, setInputText] = useState("");
    const [isForging, setIsForging] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleForge = () => {
        if (!inputText.trim()) return;
        setIsForging(true);
        setShowResult(false);

        // Simulate generation delay
        setTimeout(() => {
            setIsForging(false);
            setShowResult(true);
        }, 4500);
    };

    const mockPanels = [
        {
            image: "/assets/manhua_battle_scene_1_1772473040991.png",
            text: "The ancient dragon awoke from its ten thousand year slumber...",
            bubbles: ["BEHOLD!", "THE DAO IS EVERLASTING."]
        },
        {
            image: "/assets/manhua_cultivation_meditation_1_1772473058189.png",
            text: "Spiritual qi erupting like a supernova, drenching the world in gold.",
            bubbles: ["THE SEVENTH STAGE!", "IMPOSSIBLE."]
        },
        {
            image: "/assets/manhua_romance_moment_1_1772473071320.png",
            text: "A drop of ink can create a world, but only the forge can breathe life into it.",
            bubbles: ["ASCEND NOW.", "XIANFORGE."]
        },
    ];

    if (!mounted) return null;

    return (
        <section id="demo" className="py-20 relative overflow-hidden bg-[#0c0c0e]">
            {/* Artisanal Background Grain & Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/[0.04] blur-[150px] pointer-events-none animate-wobble" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-crimson-500/[0.03] blur-[150px] pointer-events-none animate-pulse-slow" />

            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10 flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col items-center text-center gap-6 md:gap-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[8px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.8em] uppercase text-gold-500/60 text-glow-gold flex items-center gap-4 md:gap-6"
                    >
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                        SACRED RITES • 神圣仪式
                        <div className="h-[1px] w-8 md:w-12 bg-gold-500/20" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-display tracking-widest text-gold-500 uppercase md:leading-[1.05] drop-shadow-2xl"
                    >
                        Enter the <br /> <span className="font-serif italic text-white/95 lowercase tracking-tight">Divine Forge <span className="text-xl md:text-2xl opacity-20">(神圣熔炉)</span></span>
                    </motion.h2>

                    <p className="text-white/60 max-w-xl font-serif text-lg md:text-xl italic leading-relaxed border-b border-gold-500/20 pb-8 text-center -rotate-1 px-4">
                        "Every stroke of the brush must align with the cosmic rhythm of the Dao.
                        Submit your scriptures and witness the manifestation of eternity." <br />
                        <span className="text-xs md:text-sm opacity-20 lowercase tracking-widest block mt-4">(笔触必须与大道的节奏一致。)</span>
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch min-h-[500px] md:min-h-[600px]">

                    {/* Input Area - Artisanal Bevels */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, rotate: -0.5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -0.5 }}
                        whileHover={{ rotate: 0 }}
                        className="glass-gold-premium p-6 md:p-10 rounded-sm border-gold-500/15 shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between h-full bg-[#111113]/80 group transition-all duration-700 organic-radius"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

                        <div className="flex flex-col h-full gap-6 md:gap-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 md:gap-6 group/logo">
                                    <div className="p-3 md:p-4 bg-gold-500/10 shadow-2xl molten-edge rotate-[45deg] group-hover/logo:rotate-[225deg] flex items-center justify-center border border-gold-500/20 transition-all duration-1000 shrink-0">
                                        <ScrollIcon className="w-5 h-5 md:w-6 md:h-6 text-gold-500 -rotate-[45deg] group-hover/logo:rotate-[135deg] transition-all duration-1000" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-white/20 group-hover/logo:text-gold-500 transition-colors">
                                        REFINING SCRIPTURE <span className="hidden sm:inline opacity-40">(炼化经文)</span>
                                    </span>
                                </div>
                                <Wind className="w-5 h-5 text-white/10 hidden sm:block" />
                            </div>

                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Paste xianxia chapter, wuxia battle, or cultivation moment here... The spirits are listening. (请粘贴您的仙侠章节…)"
                                className="w-full flex-grow bg-black/60 border border-white/5 rounded-sm p-6 md:p-8 text-white/80 font-serif font-light text-xl md:text-2xl focus:outline-none focus:border-gold-500/20 transition-all custom-scrollbar resize-none placeholder:text-white/5 leading-relaxed shadow-inner italic"
                            />
                        </div>

                        <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-10">
                            <button
                                onClick={handleForge}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                disabled={isForging || !inputText.trim()}
                                className={cn(
                                    "relative w-full py-5 md:py-7 font-black tracking-[0.4em] md:tracking-[0.5em] uppercase rounded-sm transition-all duration-700 shadow-2xl disabled:opacity-30 disabled:grayscale flex items-center justify-center gap-4 md:gap-5 active:scale-95 molten-edge text-[10px] md:text-[12px] overflow-hidden",
                                    isForging || !inputText.trim()
                                        ? "bg-white/5 text-white/10 border border-white/5"
                                        : "bg-gold-500 text-black border-gold-400 group/forge shadow-[0_30px_60px_-10px_rgba(255,215,0,0.3)] hover:scale-[1.03]"
                                )}
                            >
                                <div className="relative z-10 flex items-center gap-3 md:gap-4">
                                    {isForging ? (
                                        <>
                                            <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" /> CONDENSING QI... (凝聚灵气...)
                                        </>
                                    ) : (
                                        <>
                                            MANIFEST THE SCROLL <span className="opacity-40 italic lowercase font-normal hidden sm:inline">(显示滚动条)</span> <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover/forge:rotate-12 transition-transform" />
                                        </>
                                    )}
                                </div>

                                {/* Ink Splash on Forge Hover */}
                                <AnimatePresence>
                                    {isHovered && !isForging && inputText.trim() && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 2.5, opacity: 1 }}
                                            exit={{ scale: 3, opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute inset-0 bg-gold-400 ink-splash z-0 opacity-20"
                                        />
                                    )}
                                </AnimatePresence>
                            </button>

                            <div className="flex justify-between items-center opacity-10 px-2 md:px-4 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-2 md:gap-4 group/item">
                                    <Database className="w-3 md:w-4 h-3 md:h-4 group-hover/item:text-gold-500 transition-colors" />
                                    <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-white">RECORDS REF 1.0</span>
                                </div>
                                <div className="divine-divider w-12 md:w-20 opacity-20" />
                                <div className="flex items-center gap-2 md:gap-4 group/item">
                                    <Anchor className="w-3 md:w-4 h-3 md:h-4 group-hover/item:text-gold-500 transition-colors" />
                                    <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-white uppercase truncate">DAO ANCHORED</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Result Preview Area - Asymmetrical Frames */}
                    <div className="relative aspect-[9/16] w-full max-w-[480px] mx-auto lg:mx-0 min-h-[450px] md:min-h-[600px] perspective-1000 lg:rotate-1 hover:rotate-0 transition-transform duration-700">

                        <AnimatePresence mode="wait">
                            {!showResult && !isForging ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                                    className="absolute inset-0 glass-beveled border border-dashed border-gold-500/10 flex flex-col items-center justify-center text-center p-6 md:p-16 rounded-sm shadow-3xl opacity-20 group"
                                >
                                    <div className="p-8 md:p-12 border border-gold-500/5 rounded-full mb-6 md:mb-12 animate-pulse transition-all group-hover:bg-gold-500/5">
                                        <Zap className="w-10 h-10 md:w-16 md:h-16 text-white/5 group-hover:text-gold-500/40 transition-colors" strokeWidth={0.5} />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-display text-white/20 mb-4 md:mb-6 uppercase tracking-[0.3em] md:tracking-[0.5em] group-hover:text-glow-gold transition-colors">Awaiting Qi Input</h4>
                                    <p className="text-white/10 font-serif font-light italic text-base md:text-lg leading-relaxed max-w-xs group-hover:text-white/30 transition-colors px-4">
                                        "The forge remains cold until the scripture provides the fundamental law of the Dao."
                                    </p>
                                </motion.div>
                            ) : isForging ? (
                                <motion.div
                                    key="forging"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#0c0c0e]/98 backdrop-blur-3xl rounded-sm molten-edge border border-gold-500/20 shadow-4xl"
                                >
                                    {/* Artisanal Scroll Unrolling */}
                                    <div className="relative w-64 md:w-80 h-8 md:h-10 mb-10 md:mb-12 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 4.5, ease: "easeInOut" }}
                                            className="h-full w-full bg-gold-500 shadow-[0_0_80px_rgba(255,215,0,0.6)] border-y-[2px] border-gold-200/50 flex items-center justify-center overflow-hidden origin-center"
                                        >
                                            <div className="text-[7px] md:text-[9px] font-black text-black tracking-[0.5em] md:tracking-[0.8em] uppercase whitespace-nowrap animate-pulse px-4">MANIFESTING DIVINE DAO (体现神圣之道)</div>
                                        </motion.div>
                                        <div className="absolute -left-2 md:-left-3 -top-1 w-2 md:w-3 h-10 md:h-12 bg-gold-700 border border-gold-400 molten-edge" />
                                        <div className="absolute -right-2 md:-right-3 -top-1 w-2 md:w-3 h-10 md:h-12 bg-gold-700 border border-gold-400 molten-edge" />
                                    </div>

                                    <div className="flex flex-col items-center gap-4">
                                        <Flame className="w-8 h-8 md:w-10 md:h-10 text-gold-500 animate-pulse shadow-glow" />
                                        <p className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.8em] text-gold-500 uppercase italic opacity-40 text-center px-4 leading-relaxed">
                                            REFINING SPIRITUAL PLANES... <br /> (精炼精神位面...)
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.98, rotateX: 5 }}
                                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="absolute inset-0 glass-gold-premium rounded-sm overflow-hidden flex flex-col p-1.5 md:p-2 shadow-[0_100px_200px_-40px_rgba(0,0,0,1)] molten-edge border-gold-500/30"
                                >
                                    {/* Vertical Manhua Strip Result - Artisanal Feel */}
                                    <div className="flex-1 overflow-y-auto custom-scrollbar snap-y snap-mandatory bg-black p-2 md:p-3 flex flex-col gap-4 md:gap-6">
                                        {mockPanels.map((panel, i) => (
                                            <div
                                                key={i}
                                                className="relative aspect-[9/15] w-full snap-start rounded-sm overflow-hidden border border-white/5 last:mb-20 shadow-2xl group/panel -rotate-1 group-hover/panel:rotate-0 transition-all duration-700"
                                            >
                                                <Image
                                                    src={panel.image}
                                                    alt="Result"
                                                    fill
                                                    className="object-cover contrast-[1.1] grayscale-[0.2] group-hover/panel:grayscale-0 transition-all duration-1500 group-hover/panel:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

                                                {/* Artisanal Speech Bubbles */}
                                                {panel.bubbles.map((bubble, bIdx) => (
                                                    <motion.div
                                                        key={bIdx}
                                                        initial={{ scale: 0, opacity: 0, rotate: (seededRandom((i + 1) * 41 + bIdx) - 0.5) * 20 }}
                                                        animate={{ scale: 1, opacity: 1, rotate: (seededRandom((i + 1) * 43 + bIdx) - 0.5) * 10 }}
                                                        transition={{ delay: 1 + i * 0.4 + bIdx * 0.3, type: "spring" }}
                                                        className={cn(
                                                            "absolute bg-white/95 text-black text-[9px] md:text-[10px] font-black p-3 md:p-4 rounded-full border-2 md:border-[2.5px] border-black shadow-[3px_3px_0px_#000] md:shadow-[5px_5px_0px_#000] z-20 max-w-[90px] md:max-w-[110px] text-center leading-none tracking-tight",
                                                            bIdx === 0 ? 'top-6 md:top-10 left-6 md:left-10 scale-105' : 'top-20 md:top-28 right-6 md:right-10 scale-95'
                                                        )}
                                                    >
                                                        {bubble}
                                                    </motion.div>
                                                ))}

                                                {/* Bottom Narrative Strip - High Depth */}
                                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 p-4 md:p-5 bg-black/95 border-l-[3px] md:border-l-[4px] border-gold-500 backdrop-blur-3xl shadow-3xl organic-radius group-hover/panel:scale-[1.03] transition-transform duration-700">
                                                    <p className="text-[10px] md:text-[11px] text-gold-200 font-black leading-relaxed uppercase tracking-[0.1em] md:tracking-[0.15em] italic font-serif">
                                                        {panel.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions Footer - Premium Artisanal HUD */}
                                    <div className="p-4 md:p-8 bg-black/80 flex items-center justify-between border-t border-gold-500/20 backdrop-blur-3xl mt-auto transition-all">
                                        <div className="flex items-center gap-4 md:gap-6">
                                            <button className="p-3 md:p-4 bg-white/5 hover:bg-gold-500 hover:text-black rounded-sm cursor-pointer transition-all border border-white/5 active:scale-90 group/share">
                                                <Share2 className="w-5 md:w-6 h-5 md:h-6 group-hover/share:rotate-12 transition-transform" strokeWidth={1.5} />
                                            </button>
                                            <div className="flex flex-col gap-0.5 opacity-40 hover:opacity-100 transition-opacity hidden sm:flex">
                                                <div className="flex items-center gap-2 text-[8px] md:text-[9px] font-black text-gold-500 tracking-[0.3em] md:tracking-[0.4em] uppercase">
                                                    <Check className="w-2.5 md:w-3 h-2.5 md:h-3" /> REFINED
                                                </div>
                                                <div className="text-[6px] md:text-[7px] text-white/40 uppercase font-black tracking-widest italic">LINEAGE: ASCENDED</div>
                                            </div>
                                        </div>
                                        <button className="px-6 md:px-10 py-3 md:py-4 bg-gold-500 text-black font-black tracking-[0.3em] md:tracking-[0.4em] uppercase hover:scale-105 transition-all shadow-[0_25px_50px_rgba(255,215,0,0.5)] molten-edge active:scale-95 text-[10px] md:text-[11px] rounded-sm group/mint relative overflow-hidden">
                                            <span className="relative z-10">MINT ARTIFACT (铸造)</span>
                                            <div className="ink-splash absolute inset-0 bg-gold-400 scale-[3] opacity-0 group-hover/mint:opacity-100 transition-opacity" />
                                        </button>
                                    </div>

                                    {/* Scroll Indicator */}
                                    <motion.div
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 pointer-events-none"
                                    >
                                        <Wind className="w-5 h-5 text-gold-500" />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
