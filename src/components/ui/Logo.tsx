"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className, showText = true, size = "md" }: LogoProps) {
    const sizeMap = {
        sm: "h-9 md:h-10",
        md: "h-12 md:h-14",
        lg: "h-20 md:h-24",
        xl: "h-28 md:h-36"
    };

    // Use unique IDs per instance to avoid SVG gradient conflicts
    const uid = `logo-${size}`;

    return (
        <div className={cn("flex flex-col items-center gap-2 group cursor-pointer", className)}>
            <div className={cn("relative", sizeMap[size])}>
                <motion.svg
                    viewBox="0 0 220 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-auto"
                    style={{ filter: "drop-shadow(0 0 12px rgba(255,215,0,0.5)) drop-shadow(0 0 4px rgba(255,215,0,0.3))" }}
                    initial="initial"
                    whileHover="hover"
                >
                    {/* Outer Glow Ring */}
                    <motion.ellipse
                        cx="110"
                        cy="55"
                        rx="100"
                        ry="52"
                        fill="none"
                        stroke={`url(#${uid}-glowRing)`}
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                        variants={{
                            initial: { opacity: 0.15 },
                            hover: { opacity: 0.5, rotate: 10 }
                        }}
                    />

                    {/* Ancient Scroll Body — Rich Parchment */}
                    <rect x="38" y="12" width="144" height="88" rx="6"
                        fill={`url(#${uid}-scrollFill)`}
                        stroke="#B8860B"
                        strokeWidth="2"
                    />
                    {/* Inner scroll texture line */}
                    <rect x="44" y="18" width="132" height="76" rx="3"
                        fill="none"
                        stroke="#8B6914"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                        opacity="0.3"
                    />

                    {/* Scroll Rollers */}
                    <rect x="24" y="8" width="18" height="96" rx="6" fill={`url(#${uid}-rollerGrad)`} stroke="#5D3A1A" strokeWidth="1.5" />
                    <rect x="178" y="8" width="18" height="96" rx="6" fill={`url(#${uid}-rollerGrad)`} stroke="#5D3A1A" strokeWidth="1.5" />
                    {/* Roller caps */}
                    <circle cx="33" cy="14" r="4" fill="#8B6914" opacity="0.6" />
                    <circle cx="33" cy="98" r="4" fill="#8B6914" opacity="0.6" />
                    <circle cx="187" cy="14" r="4" fill="#8B6914" opacity="0.6" />
                    <circle cx="187" cy="98" r="4" fill="#8B6914" opacity="0.6" />

                    {/* === ANVIL EMBLEM (Center) === */}
                    {/* Top anvil face */}
                    <motion.path
                        d="M80 44C80 41.79 81.79 40 84 40H136C138.21 40 140 41.79 140 44V50H80V44Z"
                        fill={`url(#${uid}-anvilGrad)`}
                        stroke="#FFD700"
                        strokeWidth="1"
                        variants={{
                            initial: { opacity: 0.85 },
                            hover: { opacity: 1, filter: "drop-shadow(0 0 8px rgba(255,215,0,0.8))" }
                        }}
                    />
                    {/* Tapered body */}
                    <motion.path
                        d="M88 50H132L124 68H96L88 50Z"
                        fill={`url(#${uid}-anvilGrad)`}
                        stroke="#FFD700"
                        strokeWidth="0.8"
                        variants={{
                            initial: { opacity: 0.75 },
                            hover: { opacity: 1, filter: "drop-shadow(0 0 6px rgba(255,215,0,0.6))" }
                        }}
                    />
                    {/* Base */}
                    <motion.path
                        d="M84 68H136V74C136 76.21 134.21 78 132 78H88C85.79 78 84 76.21 84 74V68Z"
                        fill={`url(#${uid}-anvilGrad)`}
                        stroke="#FFD700"
                        strokeWidth="1"
                        variants={{
                            initial: { opacity: 0.85 },
                            hover: { opacity: 1, filter: "drop-shadow(0 0 8px rgba(255,215,0,0.8))" }
                        }}
                    />

                    {/* Anvil center strike mark (小 hammer dent) */}
                    <motion.line
                        x1="110" y1="44" x2="110" y2="50"
                        stroke="#FFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        variants={{
                            initial: { opacity: 0.3 },
                            hover: { opacity: 0.7 }
                        }}
                    />

                    {/* === QI SPARK PARTICLES (always visible, pulse) === */}
                    {[
                        { cx: 72, cy: 36, r: 2 },
                        { cx: 148, cy: 36, r: 1.8 },
                        { cx: 110, cy: 30, r: 2.5 },
                        { cx: 66, cy: 58, r: 1.5 },
                        { cx: 154, cy: 58, r: 1.5 },
                        { cx: 90, cy: 26, r: 1.2 },
                        { cx: 130, cy: 26, r: 1.2 },
                    ].map((p, i) => (
                        <motion.circle
                            key={i}
                            cx={p.cx}
                            cy={p.cy}
                            r={p.r}
                            fill={i % 2 === 0 ? "#FFD700" : "#00E5FF"}
                            variants={{
                                initial: {
                                    opacity: 0.4 + (i % 3) * 0.15,
                                    scale: 1,
                                },
                                hover: {
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.6, 1],
                                    transition: { duration: 1.2, repeat: Infinity, delay: i * 0.15 }
                                }
                            }}
                        />
                    ))}

                    {/* Dragon silhouette accent (right scroll area) */}
                    <path
                        d="M158 80C160 76 164 75 167 78C170 81 169 86 166 88L163 84L158 88C155 85 155 82 158 80Z"
                        fill="#FFD700"
                        opacity="0.25"
                    />

                    {/* 仙 character watermark on scroll */}
                    <text x="110" y="95" textAnchor="middle" fill="#8B6914" opacity="0.2" fontSize="11" fontFamily="serif">
                        仙锻
                    </text>

                    <defs>
                        <linearGradient id={`${uid}-scrollFill`} x1="110" y1="12" x2="110" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFF8E1" />
                            <stop offset="0.3" stopColor="#F5E6BE" />
                            <stop offset="0.7" stopColor="#E8D5A0" />
                            <stop offset="1" stopColor="#D4B070" />
                        </linearGradient>
                        <linearGradient id={`${uid}-rollerGrad`} x1="0" y1="8" x2="0" y2="104" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8B6914" />
                            <stop offset="0.5" stopColor="#6D4C11" />
                            <stop offset="1" stopColor="#4A3208" />
                        </linearGradient>
                        <linearGradient id={`${uid}-anvilGrad`} x1="110" y1="38" x2="110" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE066" />
                            <stop offset="0.4" stopColor="#FFD700" />
                            <stop offset="0.7" stopColor="#FFA500" />
                            <stop offset="1" stopColor="#FF6B00" />
                        </linearGradient>
                        <linearGradient id={`${uid}-glowRing`} x1="10" y1="55" x2="210" y2="55" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD700" stopOpacity="0" />
                            <stop offset="0.3" stopColor="#FFD700" />
                            <stop offset="0.7" stopColor="#00E5FF" />
                            <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>

            {showText && (
                <div className="flex flex-col items-center gap-0.5">
                    <span className="text-xl md:text-2xl font-display tracking-[0.2em] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent uppercase italic drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">
                        XianForge
                    </span>
                    <span className="text-[7px] font-black tracking-[0.5em] text-white/25 uppercase group-hover:text-gold-500/50 transition-colors">
                        Refining the Heavens • 仙锻
                    </span>
                </div>
            )}
        </div>
    );
}
