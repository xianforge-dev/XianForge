"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Disc as Discord, Github, Flame, Wind, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";

export default function Footer() {
    const socialLinks = [
        { Icon: Twitter, href: "https://x.com/xianforge" },
        { Icon: Discord, href: "https://discord.gg/xianforge" }, // Placeholder
        { Icon: Github, href: "https://github.com/xianforge-dev/XianForge" },
    ];

    return (
        <footer className="py-16 md:py-20 relative bg-background overflow-hidden border-t border-gold-500/10 backdrop-blur-3xl font-sans">
            {/* Artisanal Background Grain & Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-crimson-600/40 to-transparent shadow-[0_0_20px_rgba(220,20,60,0.3)]" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gold-500/[0.02] blur-[150px] rounded-full pointer-events-none animate-wobble" />

            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 relative z-10 flex flex-col items-center gap-10 md:gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-12 sm:mb-20 w-full text-center lg:text-left">

                    {/* Brand - High Depth Artisanal */}
                    <div className="flex flex-col gap-6 md:gap-8 items-center lg:items-start">
                        <Logo className="items-center lg:items-start" />

                        <p className="text-white/30 font-serif italic leading-relaxed text-sm md:text-base border-l-2 border-gold-500/10 pl-6 md:pl-8 -rotate-1 origin-left text-center lg:text-left mx-auto lg:mx-0 max-w-xs sm:max-w-none">
                            "Forged for those who defy the heavens.
                            The ultimate manifestation of AI artifact refinement." <br />
                            <span className="text-[10px] md:text-[11px] opacity-20 block mt-2 lowercase">(为挑战上天者而锻造。人工智能艺术精炼的终极体现。)</span>
                        </p>

                        <div className="flex items-center gap-6 md:gap-8 justify-center lg:justify-start mt-4">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/20 hover:text-gold-500 transition-all hover:scale-125 hover:rotate-6 active:scale-90"
                                >
                                    <Icon className="w-5 md:w-6 h-5 md:h-6" strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources - Artisanal List */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h4 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-gold-500/40 border-b border-white/5 pb-3 md:pb-4 italic inline-block w-full">RESOURCES</h4>
                        <ul className="flex flex-col gap-4 md:gap-5 items-center lg:items-start">
                            {["Heavenly Archive (天卷)", "Cultivation Rites (修炼仪式)", "Scroll API (滚动条)"].map((link, i) => (
                                <li key={i} className="group flex items-center gap-3 md:gap-4 text-white/30 hover:text-gold-500 text-xs md:text-sm font-serif italic tracking-wide cursor-pointer transition-all duration-500">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gold-500/10 group-hover:w-3 md:group-hover:w-4 group-hover:bg-gold-500 transition-all duration-700 shadow-glow" />
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community - Artisanal List */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h4 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-gold-500/40 border-b border-white/5 pb-3 md:pb-4 italic inline-block w-full">COMMUNITY</h4>
                        <ul className="flex flex-col gap-4 md:gap-5 items-center lg:items-start">
                            {["Divine Support (神圣支持)", "Sect News (门派动态)", "DAO Board (董事会)"].map((link, i) => (
                                <li key={i} className="group flex items-center gap-3 md:gap-4 text-white/30 hover:text-gold-500 text-xs md:text-sm font-serif italic tracking-wide cursor-pointer transition-all duration-500">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gold-500/10 group-hover:w-3 md:group-hover:w-4 group-hover:bg-gold-500 transition-all duration-700 shadow-glow" />
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Protocol - Beveled Card */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h4 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-gold-500/40 border-b border-white/5 pb-3 md:pb-4 italic inline-block w-full">IMMUTABLE PROTOCOL</h4>
                        <div className="glass-beveled p-6 md:p-8 border-gold-500/15 flex flex-col gap-5 md:gap-6 rounded-sm shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] relative group overflow-hidden bg-[#111113] organic-radius md:-rotate-1 hover:rotate-0 transition-all duration-700 text-center lg:text-left items-center lg:items-start">
                            <div className="flex items-center gap-3 md:gap-4 group/sol">
                                <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" alt="Solana" className="h-3 md:h-4 brightness-0 invert group-hover/sol:scale-110 group-hover/sol:rotate-3 transition-transform duration-700 opacity-60" />
                                <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white/20 whitespace-nowrap uppercase">POWERED BY SOLANA</span>
                            </div>
                            <p className="text-xs md:text-sm font-serif text-white/20 leading-relaxed italic group-hover:text-white/40 transition-colors">
                                "Artifacts etched into the eternal landscape of the Solana blockchain. Verified by the Divine Court."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom - High Depth Artisanal */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 md:pt-16 border-t border-white/5 gap-8 md:gap-12 bg-gradient-to-t from-white/[0.01] to-transparent p-6 md:p-12 rounded-t-xl group">
                    <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                        <div className="text-[10px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/5 group-hover:text-gold-500/40 transition-colors duration-1000 flex items-center gap-3 md:gap-4 italic leading-none truncate">
                            <Zap className="w-3 md:w-4 h-3 md:h-4 text-gold-500/20 group-hover:text-gold-500 transition-colors shrink-0" />
                            © 2026 XIANFORGE – FORGED IN THE DIVINE COURT
                        </div>
                        <div className="text-[7px] md:text-[8px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-white/[0.03] flex items-center gap-3 md:gap-4 md:pl-8 italic">
                            LEGACY REF 1.0 • 2.0 • 3.0 Manifestations (表现形式)
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-5 group-hover:opacity-100 transition-all duration-1500 pb-4 md:pb-0">
                        {["PRIVACY", "SERVICE", "ETERNAL DAO"].map((term, i) => (
                            <div key={i} className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-white hover:text-gold-500 cursor-pointer transition-all hover:scale-105 active:scale-95 italic">
                                {term}
                            </div>
                        ))}
                        <div className="divine-divider w-8 md:w-12 opacity-20 hidden sm:block" />
                        <Wind className="w-4 md:w-5 h-4 md:h-5 text-gold-500/30 shrink-0" strokeWidth={1} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
