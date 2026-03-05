"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);
    const supabase = createClient();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    }, [supabase]);

    return (
        <div className="max-w-4xl mx-auto space-y-12 py-10">
            <div className="flex flex-col md:flex-row items-center gap-10 border-b border-white/5 pb-12">
                <div className="w-32 h-32 rounded-full bg-gold-500 flex items-center justify-center text-4xl font-black text-black shadow-[0_0_50px_rgba(255,215,0,0.3)] molten-edge">
                    {user?.email?.[0].toUpperCase() || "C"}
                </div>
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h1 className="text-4xl font-display text-glow-gold tracking-widest uppercase mb-1">
                        Cultivator Identity
                    </h1>
                    <p className="text-[10px] font-sans text-white/40 tracking-[0.4em] uppercase border-l-2 border-gold-500/20 pl-6 h-fit">
                        {user?.email || "NOT IDENTIFIED"}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-gold p-10 rounded-sm border-white/5 bg-black/40 flex flex-col gap-6">
                    <h3 className="text-sm font-black tracking-widest uppercase text-gold-500 flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4" /> REFINEMENT STATS
                    </h3>
                    <div className="space-y-6 pt-4">
                        {[
                            { label: "Total Forges", value: "24" },
                            { label: "Solana Artifacts", value: "11" },
                            { label: "Qi Consumption", value: "14.5k" }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">{stat.label}</span>
                                <span className="text-xl font-display text-white tracking-widest">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-gold p-10 rounded-sm border-white/5 bg-black/40 flex flex-col gap-6">
                    <h3 className="text-sm font-black tracking-widest uppercase text-white/40 flex items-center gap-3">
                        <Zap className="w-4 h-4" /> DIVINE RANK
                    </h3>
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
                        <div className="text-5xl font-display text-glow-gold tracking-tighter pulse-glow">IMMORTAL</div>
                        <p className="text-[9px] font-sans font-extralight text-white/20 leading-relaxed italic max-w-xs">
                            "You are currently refining your path in the Sovereign Tier. Ascend higher to rule the heavens."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
