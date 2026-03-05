"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    BookMarked,
    Search,
    Filter,
    Calendar,
    ChevronRight,
    Zap,
    Flame,
    Layout,
    Wind
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mockSeries = [
    {
        id: "1",
        title: "The Heavenly Dao of Infinite Fire",
        chapters: 24,
        status: "Cultivating",
        lastForged: "2 days ago",
        thumbnail: "/assets/manhua_battle_scene_1_1772473040991.png"
    },
    {
        id: "2",
        title: "Sword Saint of the Azure Sea",
        chapters: 12,
        status: "Ascended",
        lastForged: "5 days ago",
        thumbnail: "/assets/manhua_showcase_1_1772472489401.png"
    },
    {
        id: "3",
        title: "The Sovereign's Path to Void",
        chapters: 8,
        status: "Cultivating",
        lastForged: "1 week ago",
        thumbnail: "/assets/manhua_cultivation_meditation_1_1772473058189.png"
    }
];

export default function SeriesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex flex-col gap-16 pb-32">
            {/* Page Header - Asymmetrical Depth */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
                <div className="max-w-3xl space-y-6">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5 }}
                        className="h-[1.5px] w-32 bg-gold-500/30 origin-left"
                    />
                    <h1 className="text-5xl md:text-7xl font-display text-glow-gold tracking-widest uppercase leading-none">
                        Your <span className="font-serif italic text-white/90 lowercase tracking-tight">Divine</span> Archive
                    </h1>
                    <p className="text-xl md:text-2xl text-white/30 font-serif italic max-w-xl border-l-[3px] border-gold-500/10 pl-10 leading-relaxed -rotate-1 origin-left">
                        "The collection of all refined tribulations and manifestations. Your scriptures determine your place in the Divine Court."
                    </p>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex flex-col items-end gap-1.5 opacity-30 hover:opacity-100 transition-opacity">
                        <div className="text-[10px] font-black tracking-[0.6em] uppercase">COLLECTION SIZE</div>
                        <div className="text-2xl font-display text-gold-500 tracking-widest">{mockSeries.length} LEGENDARY SCROLLS</div>
                    </div>
                </div>
            </div>

            {/* Search & Filter - Beveled HUD Style */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-1 group w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/10 group-focus-within:text-gold-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Locate scroll in your memory..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-16 bg-white/[0.02] border border-white/5 focus:border-gold-500/20 rounded-sm pl-16 pr-8 text-sm font-light text-white outline-none focus:shadow-[0_0_40px_rgba(255,215,0,0.02)] transition-all"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button className="h-16 px-10 glass-beveled border-white/5 hover:bg-white/5 transition-all rounded-sm flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-white/40 hover:text-white group">
                        <Filter className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={1.5} /> SIFT RECORDS
                    </button>
                    <button className="h-16 w-16 glass-beveled border-gold-500/10 hover:bg-gold-500/[0.05] transition-all rounded-sm flex items-center justify-center group active:scale-95">
                        <Calendar className="w-6 h-6 text-gold-500/30 group-hover:text-gold-500 transition-colors" strokeWidth={1.2} />
                    </button>
                </div>
            </div>

            {/* Series Grid - Humanized Asymmetrical Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <AnimatePresence>
                    {mockSeries.map((series, idx) => (
                        <motion.div
                            key={series.id}
                            initial={{ opacity: 0, y: 30, scale: 0.98, rotate: idx % 2 === 0 ? -1 : 1 }}
                            animate={{ opacity: 1, y: 0, scale: 1, rotate: idx % 2 === 0 ? -0.5 : 0.5 }}
                            whileHover={{ scale: 1.02, rotate: 0, y: -5 }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-gold-premium p-10 organic-radius border-white/5 group hover:border-gold-500/20 transition-all cursor-pointer relative overflow-hidden shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            {/* Status Stamp - Artisanal Rotate */}
                            <div className={cn(
                                "absolute top-8 right-8 px-6 py-2.5 text-[8px] font-black tracking-[0.5em] uppercase border molten-edge rotate-[12deg] z-20 group-hover:rotate-0 transition-transform",
                                series.status === "Ascended" ? "bg-gold-500 text-black border-gold-400" : "bg-white/5 text-white/40 border-white/10"
                            )}>
                                {series.status}
                            </div>

                            <div className="flex flex-col md:flex-row gap-10 items-start">
                                {/* Thumbnail - Artisanal Frame */}
                                <div className="relative w-full md:w-32 aspect-[3/4] bg-black ring-1 ring-gold-500/10 molten-edge -rotate-3 group-hover:rotate-0 transition-transform duration-700 shrink-0 overflow-hidden rounded-sm">
                                    <img src={series.thumbnail} alt={series.title} className="object-cover w-full h-full grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>

                                <div className="flex-1 flex flex-col justify-between h-full py-4 gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-display text-white tracking-[0.1em] group-hover:text-glow-gold transition-all duration-500">{series.title}</h3>
                                        <div className="flex flex-wrap items-center gap-6 text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">
                                            <span className="flex items-center gap-2 italic"><Layout className="w-3 h-3" /> {series.chapters} FORGES</span>
                                            <div className="h-4 w-[1px] bg-white/5" />
                                            <span className="flex items-center gap-2 italic text-gold-500/40"><Wind className="w-3 h-3" /> {series.lastForged}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-[2px] border-black bg-gold-500/20 organic-radius shadow-xl flex items-center justify-center overflow-hidden">
                                                    <div className="p-2 bg-gold-500/50 w-full h-full" />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-[2px] border-black bg-white/5 text-[8px] flex items-center justify-center font-black">+{series.chapters - 3}</div>
                                        </div>

                                        <button className="flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-gold-500/40 group-hover:text-gold-500 transition-all group/btn">
                                            OPEN SCROLL <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Ink Splash Hover Decoration */}
                            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-gold-500 ink-splash opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-45 pointer-events-none" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty State - Divine Feel */}
            {mockSeries.length === 0 && (
                <div className="py-40 flex flex-col items-center justify-center text-center gap-10">
                    <div className="p-12 glass shadow-2xl organic-radius rotate-6 bg-gold-500/5 animate-wobble">
                        <BookMarked className="w-20 h-20 text-gold-500/20" strokeWidth={0.5} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-3xl font-display text-white/30 tracking-widest uppercase">The Archive is Breathless</h3>
                        <p className="text-[10px] font-black tracking-[0.6em] uppercase text-white/5 italic">No records of manifestation found in the current lineage.</p>
                    </div>
                    <Link href="/app" className="px-12 py-6 bg-gold-500 text-black font-black tracking-[0.5em] uppercase molten-edge text-sm hover:scale-105 active:scale-95 transition-all">
                        BEGIN YOUR LINEAGE
                    </Link>
                </div>
            )}
        </div>
    );
}
