"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass border-b border-white/5"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="relative">
          <Flame className="w-8 h-8 text-gold-500 group-hover:text-crimson-500 transition-colors duration-500 animate-qi-glow" />
          <div className="absolute inset-0 bg-gold-500/20 blur-xl group-hover:bg-crimson-500/20 transition-colors duration-500" />
        </div>
        <span className="text-2xl font-display tracking-wider text-glow-gold">
          Xian<span className="text-white">Forge</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        {["Features", "How it Works", "Showcase", "Pricing"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-white/60 hover:text-gold-500 transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <button className="px-6 py-2 bg-transparent border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-500 rounded-sm font-bold tracking-widest uppercase text-xs shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]">
        Enter Forge
      </button>
    </motion.nav>
  );
}
