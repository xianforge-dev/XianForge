"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    Sparkles,
    Zap,
    ChevronRight,
    Scroll as ScrollIcon,
    Share2,
    History,
    Info,
    Wind
} from "lucide-react";
import { cn, seededRandom } from "@/lib/utils";

export default function ForgePage() {
    const [chapterText, setChapterText] = useState("");
    const [isForging, setIsForging] = useState(false);
    const [forgedChapter, setForgedChapter] = useState<any>(null);
    const [selectedStyle, setSelectedStyle] = useState("pure-xianxia");

    const handleForge = async () => {
        if (!chapterText.trim()) return;
        setIsForging(true);
        setForgedChapter(null);

        // Simulated AI Forge Delay - Divine Qi Consolidation
        setTimeout(async () => {
            const res = await fetch("/api/forge", {
                method: "POST",
                body: JSON.stringify({ text: chapterText, style: selectedStyle })
            });
            const data = await res.json();
            setForgedChapter(data);
            setIsForging(false);
        }, 3200);
    };

    return (
        <div className="flex flex-col gap-16 relative">
            {/* Header Content - Asymmetrical Layout */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
                <div className="max-w-3xl space-y-6">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5 }}
                        className="h-[1.5px] w-32 bg-gold-500/30 origin-left"
                    />
                    <h1 className="text-5xl md:text-7xl font-display text-glow-gold tracking-widest uppercase leading-none">
                        Forge <span className="font-serif italic text-white/90 lowercase tracking-tight">new</span> Scroll
                    </h1>
                    <p className="text-xl md:text-2xl text-white/30 font-serif italic max-w-xl border-l-[3px] border-gold-500/10 pl-10 leading-relaxed -rotate-1 origin-left">
                        "Convert your raw cultivation records into legendary vertical scriptures. The Dao provides the spark, you provide the intent."
                    </p>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex flex-col items-end gap-1.5 opacity-30 hover:opacity-100 transition-opacity">
                        <div className="text-[10px] font-black tracking-[0.6em] uppercase">QI BALANCE</div>
                        <div className="text-2xl font-display text-gold-500 tracking-widest">1,450 / 2,000</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">
                {/* Input Card - Beveled Glass & Organic Radii */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="xl:col-span-4 flex flex-col gap-10"
                >
                    <div className="glass-beveled p-10 organic-radius flex flex-col gap-10 border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative -rotate-1 hover:rotate-0 transition-transform duration-700">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black tracking-[0.5em] text-white/20 uppercase flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Wind className="w-3.5 h-3.5" /> THE SCRIPTURE TEXT
                                </div>
                                <span className="text-[8px] font-serif italic lowercase tracking-tight opacity-40">(仙侠章节)</span>
                            </label>
                            <textarea
                                value={chapterText}
                                onChange={(e) => setChapterText(e.target.value)}
                                placeholder="Paste your xianxia chapter here… (请粘贴您的仙侠章节…)"
                                className="w-full h-80 bg-black/40 border border-white/5 focus:border-gold-500/30 rounded-sm p-6 text-sm font-light text-white/80 placeholder:text-white/10 resize-none transition-all focus:shadow-[0_0_30px_rgba(255,215,0,0.05)] outline-none custom-scrollbar leading-relaxed"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-black tracking-[0.5em] text-white/20 uppercase flex items-center gap-4">
                                    <Sparkles className="w-3.5 h-3.5" /> REFINEMENT STYLE
                                </label>
                                <span className="text-[8px] font-serif italic lowercase tracking-tight opacity-40">(选择风格)</span>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: "pure-xianxia", name: "Pure Xianxia", zh: "纯仙侠", sub: "Luminous & Ethereal" },
                                    { id: "dark-wuxia", name: "Dark Wuxia", zh: "黑暗武侠", sub: "Ink-heavy & Brutal" },
                                    { id: "heavenly-court", name: "Heavenly Court", zh: "彩色漫画", sub: "Royal Gold & Opulent" }
                                ].map((style) => (
                                    <button
                                        key={style.id}
                                        onClick={() => setSelectedStyle(style.id)}
                                        className={cn(
                                            "p-5 border transition-all flex flex-col text-left group/btn rounded-sm relative overflow-hidden",
                                            selectedStyle === style.id
                                                ? "bg-gold-500/[0.05] border-gold-500/30 active:scale-95"
                                                : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                        )}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className={cn(
                                                "text-[10px] font-black tracking-widest transition-colors uppercase",
                                                selectedStyle === style.id ? "text-gold-500" : "text-white/40 group-hover/btn:text-white/80"
                                            )}>{style.name}</span>
                                            <span className="text-[8px] font-serif italic lowercase opacity-30 text-white tracking-widest">({style.zh})</span>
                                        </div>
                                        <span className="text-[9px] text-white/10 font-serif italic mt-0.5">{style.sub}</span>
                                        {selectedStyle === style.id && (
                                            <motion.div layoutId="style-line" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gold-500 molten-edge" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-2">
                            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-white/20 flex items-center gap-3">
                                <input type="checkbox" className="accent-gold-500 w-3 h-3 bg-black border-white/10" />
                                MAINTAIN CONSISTENCY <span className="opacity-40">(保持一致性)</span>
                            </label>
                        </div>

                        <button
                            disabled={isForging || !chapterText.trim()}
                            onClick={handleForge}
                            className={cn(
                                "w-full py-7 font-black tracking-[0.4em] uppercase transition-all duration-700 rounded-sm flex items-center justify-center gap-4 group/forge shadow-2xl overflow-hidden text-sm",
                                isForging || !chapterText.trim()
                                    ? "bg-white/5 text-white/10 grayscale cursor-not-allowed border border-white/5"
                                    : "bg-gold-500 text-black border-gold-400 molten-edge hover:scale-[1.03] active:scale-95 shadow-[0_30px_60px_-15px_rgba(255,215,0,0.3)]"
                            )}
                        >
                            {isForging ? (
                                <>CONSOLIDATING QI (凝聚灵气) <Flame className="w-6 h-6 animate-pulse" /></>
                            ) : (
                                <>FORGE CHAPTER (锻造章节) <Zap className="w-6 h-6 group-hover/forge:scale-125 transition-all" /></>
                            )}

                            {/* Ink Splash Effect on Active Forge */}
                            <AnimatePresence>
                                {!isForging && chapterText.trim() && (
                                    <div className="absolute inset-0 bg-gold-400/0 opacity-0 group-hover/forge:opacity-100 transition-opacity">
                                        <div className="ink-splash absolute inset-0 scale-150" />
                                    </div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    <div className="p-8 border border-white/5 rounded-sm opacity-20 hover:opacity-100 transition-opacity flex items-center gap-6">
                        <Info className="w-8 h-8 text-gold-500 shrink-0" strokeWidth={1} />
                        <p className="text-[10px] font-serif italic leading-relaxed">
                            Remember: The fidelity of the manifestation depends on the spiritual purity of your intention. Long chapters consume more qi tokens.
                        </p>
                    </div>
                </motion.div>

                {/* Output Area - Artisanal Previews */}
                <div className="xl:col-span-8">
                    <AnimatePresence mode="wait">
                        {isForging ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="h-[800px] w-full flex flex-col items-center justify-center gap-10 bg-black/40 rounded-sm border border-white/5 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 mist-overlay opacity-30" />
                                <div className="p-16 border-2 border-gold-500/20 rounded-full animate-spin-slow relative">
                                    <div className="p-12 border-2 border-gold-500/10 rounded-full rotate-45" />
                                    <Flame className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-gold-500 animate-pulse shadow-glow" />
                                </div>
                                <div className="text-center z-10 flex flex-col gap-4">
                                    <h3 className="text-3xl font-display text-glow-gold tracking-[0.2em] animate-pulse">Refining Spiritual Planes...</h3>
                                    <p className="text-[10px] uppercase font-black tracking-[0.6em] text-white/20 italic">Gathering universal qi tokens</p>
                                </div>
                            </motion.div>
                        ) : forgedChapter ? (
                            <motion.div
                                key="output"
                                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="space-y-16"
                            >
                                {/* Header Info - Artisanal */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 bg-white/[0.02] p-10 border border-white/5 rounded-sm shadow-xl hover:bg-gold-500/[0.02] transition-colors group">
                                    <div className="flex items-center gap-10">
                                        <div className="p-5 bg-gold-500/10 molten-edge organic-radius rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                            <ScrollIcon className="w-10 h-10 text-gold-500" strokeWidth={1} />
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-display text-white tracking-[0.1em]">{forgedChapter.title}</h2>
                                            <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
                                                <span>6 DIVINE PANELS</span>
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500/40" />
                                                <span>RANK: IMMORTAL</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <button
                                            onClick={() => {
                                                alert("Chapter minted as legendary NFT! (章节铸造成传奇NFT!)");
                                            }}
                                            className="px-10 py-4 bg-gold-500 text-black font-black tracking-[0.4em] uppercase text-[10px] rounded-sm shadow-[0_20px_40px_rgba(255,215,0,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group/mint"
                                        >
                                            <span>MINT ON SOLANA <span className="opacity-40 italic lowercase font-normal">(在Solana上铸造NFT)</span></span> <Share2 className="w-5 h-5 group-mint:rotate-12 transition-transform" />
                                        </button>
                                        <button className="p-4 glass border border-white/10 hover:bg-white/10 transition-all rounded-sm">
                                            <History className="w-6 h-6 text-white/40" />
                                        </button>
                                    </div>
                                </div>

                                {/* Vertical Scrolstrip Previews - Humanized Asymmetry */}
                                <div className="flex flex-col gap-10 max-w-[500px] mx-auto pb-40">
                                    <div className="divine-divider opacity-10 mb-8" />
                                    {forgedChapter.panels.map((panel: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, rotate: (seededRandom((idx + 1) * 13) - 0.5) * 4 }}
                                            whileInView={{ opacity: 1, x: 0, rotate: (seededRandom((idx + 1) * 17) - 0.5) * 2 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                            className="relative aspect-[9/15] group/panel shadow-[0_60px_100px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden border border-white/5 ring-1 ring-gold-500/10 hover:ring-gold-500/40 transition-all duration-1000"
                                        >
                                            <img src={panel.image} alt="Panel" className="object-cover w-full h-full grayscale-[0.3] group-hover/panel:grayscale-0 transition-all duration-1500 scale-105 group-hover/panel:scale-115 rotate-1 group-hover/panel:rotate-0" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                                            {/* Artisanal Narrative Boxes */}
                                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/95 border-l-[4px] border-gold-500 organic-radius shadow-3xl backdrop-blur-3xl group-hover/panel:scale-[1.04] transition-all duration-700">
                                                <p className="text-xs font-serif italic text-gold-200/80 leading-relaxed font-black uppercase tracking-tight">
                                                    {panel.text}
                                                </p>
                                            </div>

                                            {/* Artisanal Stats Overlay */}
                                            <div className="absolute top-8 left-8 p-3.5 bg-gold-500/10 backdrop-blur-3xl border border-gold-500/20 text-[9px] font-black tracking-widest text-gold-500 uppercase rounded-sm opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700">
                                                PANEL {idx + 1} • QI DEPTH: {panel.qi_depth}
                                            </div>
                                        </motion.div>
                                    ))}
                                    <div className="divine-divider opacity-10 mt-12" />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-[1000px] w-full flex items-center justify-center bg-white/[0.01] rounded-sm border-2 border-dashed border-white/5 relative group"
                            >
                                <div className="absolute inset-0 mist-overlay opacity-[0.05]" />
                                <div className="text-center space-y-8 max-w-sm px-10 relative z-10 transition-all group-hover:scale-105">
                                    <div className="p-10 border border-gold-500/10 mb-8 inline-flex organic-radius rotate-12 bg-gold-500/5 group-hover:rotate-0 transition-transform">
                                        <Flame className="w-16 h-16 text-gold-500/20 group-hover:text-gold-500 transition-colors" strokeWidth={0.5} />
                                    </div>
                                    <h3 className="text-2xl font-display text-white/20 tracking-widest uppercase group-hover:text-glow-gold group-hover:text-gold-500/60 transition-colors">Awaiting Divine Scripture</h3>
                                    <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/5 group-hover:text-white/20 transition-colors italic leading-relaxed">
                                        Paste your chapter text and ignite the forge to manifest your scrolls.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
