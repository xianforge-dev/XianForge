"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    Mail,
    Lock,
    Sparkles,
    ChevronRight,
    ArrowLeft,
    ShieldCheck,
    Zap,
    Wind
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMagicLink, setIsMagicLink] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const router = useRouter();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            if (isMagicLink) {
                const { error } = await supabase.auth.signInWithOtp({
                    email,
                    options: { emailRedirectTo: `${window.location.origin}/app` }
                });
                if (error) throw error;
                setMessage({ type: 'success', text: "Divine scroll (Magic Link) sent! (神圣卷轴已发送!)" });
            } else {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                router.push("/app");
            }
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message || "Failed to consolidate qi. (灵气凝聚失败。)" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
            {/* Global Texture & Depth */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50 animate-noise-anim" />

            {/* Background Decorative Motifs - Humanized Asymmetry */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gold-500/[0.04] blur-[200px] rounded-full animate-wobble" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-crimson-500/[0.03] blur-[150px] rounded-full animate-pulse-slow" />
                <div className="absolute inset-0 mist-overlay opacity-40 scale-110" />
            </div>

            {/* Back to Home - Artisanal Float */}
            <Link
                href="/"
                className="absolute top-12 left-12 flex items-center gap-4 text-[10px] font-black tracking-[0.5em] uppercase text-white/20 hover:text-gold-500 transition-all z-20 group -rotate-1 hover:rotate-0"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" strokeWidth={1.5} /> EXIT THE FORGE <span className="text-[8px] opacity-40 font-serif italic lowercase tracking-tight">(离开锻造)</span>
            </Link>

            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">

                {/* Visual Side - Humanized Depth */}
                <div className="hidden lg:flex flex-col gap-10 max-w-xl">
                    <div className="flex items-center gap-6">
                        <Logo size="lg" showText={false} />
                        <h1 className="text-4xl md:text-5xl font-display text-glow-gold tracking-[0.2em] uppercase leading-none italic font-serif">
                            Celestial <br />
                            Gate <span className="text-white/20 lowercase tracking-normal">(天门)</span>
                        </h1>
                    </div>

                    <p className="text-2xl text-white/30 font-serif italic max-w-md border-l-[3px] border-gold-500/10 pl-10 leading-relaxed -rotate-1 origin-left">
                        "To refine your scripture, one must first align their spirit with the Divine Court. Forge your identity in the eternal fires."
                    </p>

                    <div className="flex flex-col gap-6 opacity-30">
                        {[
                            { icon: ShieldCheck, text: "Divine Soul Encryption", zh: "神圣灵魂加密" },
                            { icon: Zap, text: "Instant Qi Manifestation", zh: "瞬间灵气表现" },
                            { icon: Wind, text: "Bilibili Export Rites", zh: "哔哩哔哩导出仪式" }
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-5 group">
                                <div className="p-3 bg-white/5 border border-white/5 organic-radius rotate-6 group-hover:rotate-0 transition-transform">
                                    <feature.icon className="w-5 h-5" strokeWidth={1} />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.4em] uppercase">{feature.text} <span className="text-[8px] opacity-40 font-serif italic lowercase tracking-tight">({feature.zh})</span></span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Login Form Card - Artisanal Bevels */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30, rotate: -1 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-md glass-gold-premium p-12 organic-radius border-gold-500/10 shadow-[0_80px_160px_-40px_rgba(0,0,0,1)] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none group-hover:opacity-20 transition-opacity">
                        <Sparkles className="w-20 h-20 text-gold-500" strokeWidth={0.5} />
                    </div>

                    <div className="flex flex-col gap-10 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-display text-white tracking-widest uppercase text-glow-gold">Immortal Gate <span className="text-white/20 text-lg lowercase tracking-normal">(长生门)</span></h2>
                            <p className="text-xs text-white/20 font-serif italic tracking-wide">
                                Select your method of ascension. <span className="opacity-40 italic">(选择您的提升方式。)</span>
                            </p>
                        </div>

                        <div className="flex gap-4 p-1.5 bg-black/40 border border-white/5 rounded-sm relative overflow-hidden">
                            <button
                                onClick={() => setIsMagicLink(true)}
                                className={cn(
                                    "flex-1 py-4 text-[10px] font-black tracking-[0.5em] uppercase transition-all relative z-10",
                                    isMagicLink ? "text-black" : "text-white/30 hover:text-white"
                                )}
                            >
                                SCROLL <span className="text-[8px] opacity-40 font-serif italic lowercase font-normal">(卷轴)</span>
                            </button>
                            <button
                                onClick={() => setIsMagicLink(false)}
                                className={cn(
                                    "flex-1 py-4 text-[10px] font-black tracking-[0.5em] uppercase transition-all relative z-10",
                                    !isMagicLink ? "text-black" : "text-white/30 hover:text-white"
                                )}
                            >
                                PASSWORD <span className="text-[8px] opacity-40 font-serif italic lowercase font-normal">(密码)</span>
                            </button>
                            <motion.div
                                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gold-500 rounded-sm molten-edge"
                                animate={{ x: isMagicLink ? 0 : "100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-10">
                        <div className="space-y-6">
                            <div className="space-y-3 group">
                                <label className="text-[10px] font-black tracking-[0.3em] text-white/10 group-focus-within:text-gold-500 transition-colors uppercase flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-3.5 h-3.5" strokeWidth={1.5} /> SOUL EMAIL
                                    </div>
                                    <span className="text-[8px] font-serif italic lowercase tracking-tight opacity-40">(电子邮件)</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="cultivator@divine.court"
                                    className="w-full h-16 bg-white/[0.02] border border-white/5 focus:border-gold-500/20 rounded-sm px-6 text-sm font-light text-white outline-none focus:shadow-[inner_0_0_20px_rgba(255,215,0,0.02)] transition-all placeholder:text-white/5"
                                />
                            </div>

                            {!isMagicLink && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="space-y-3 group"
                                >
                                    <label className="text-[10px] font-black tracking-[0.3em] text-white/10 group-focus-within:text-gold-500 transition-colors uppercase flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Lock className="w-3.5 h-3.5" strokeWidth={1.5} /> SECRET DECREE
                                        </div>
                                        <span className="text-[8px] font-serif italic lowercase tracking-tight opacity-40">(密码短语)</span>
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="w-full h-16 bg-white/[0.02] border border-white/5 focus:border-gold-500/20 rounded-sm px-6 text-sm font-light text-white outline-none focus:shadow-[inner_0_0_20px_rgba(255,215,0,0.02)] transition-all placeholder:text-white/5"
                                    />
                                </motion.div>
                            )}
                        </div>

                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                    "p-6 border text-[10px] font-black tracking-widest uppercase italic bg-black/40",
                                    message.type === 'success' ? "border-gold-500/30 text-gold-500" : "border-crimson-500/30 text-crimson-500"
                                )}
                            >
                                {message.text}
                            </motion.div>
                        )}

                        <button
                            disabled={loading}
                            className="w-full py-7 bg-gold-500 text-black font-black tracking-[0.5em] uppercase transition-all duration-700 rounded-sm group/btn shadow-[0_30px_60px_-10px_rgba(255,215,0,0.3)] hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-4 text-sm relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-4">
                                {loading ? "Consolidating Qi..." : isMagicLink ? "MANIFEST SCROLL (发送)" : "BREACH GATE (进入)"} <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                            </span>

                            {/* Ink Splash Hover Decoration */}
                            <div className="absolute inset-0 bg-gold-400 opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                                <div className="ink-splash absolute inset-0 scale-[2.5] opacity-20" />
                            </div>
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-[9px] font-black tracking-[0.5em] text-white/5 uppercase italic">
                            © DIVINE COURT PROTOCOL • XIANFORGE
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Ink Splash Corners */}
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gold-500 ink-splash opacity-[0.02] -rotate-45 pointer-events-none" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-crimson-500 ink-splash opacity-[0.01] rotate-12 pointer-events-none" />
        </main>
    );
}
