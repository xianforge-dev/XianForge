"use client";

import { motion } from "framer-motion";
import { GalleryVertical, Sparkles } from "lucide-react";

export default function GalleryPage() {
    return (
        <div className="flex flex-col items-center justify-center py-40 gap-8">
            <div className="p-8 bg-gold-500/5 molten-edge rotate-45 border border-gold-500/10 flex items-center justify-center">
                <GalleryVertical className="w-12 h-12 text-gold-500 -rotate-45" strokeWidth={1} />
            </div>
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-display text-white tracking-widest uppercase">Mint Gallery</h2>
                <p className="text-white/20 font-sans font-light italic text-sm">Legendary artifacts on the Solana blockchain will descend here.</p>
            </div>
            <div className="flex items-center gap-3 text-[9px] font-black tracking-[0.5em] text-gold-500/40 uppercase">
                <Sparkles className="w-3 h-3" /> Artifact syncing enabled
            </div>
        </div>
    );
}
