"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 glass-beveled organic-radius p-2 flex items-center justify-center border border-white/5 opacity-40">
                <Sun className="w-4 h-4 text-gold-500/20" />
            </div>
        );
    }

    return (
        <button
            onPointerDown={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group relative w-12 h-12 glass-beveled organic-radius flex items-center justify-center transition-all duration-700 hover:scale-110 active:scale-95 border border-gold-500/20 hover:border-gold-500 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            title={theme === "dark" ? "Switch to Light Mode (切換至淺色模式)" : "Switch to Dark Mode (切換至深色模式)"}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {theme === "dark" ? (
                        <Sun className="w-5 h-5 text-gold-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]" />
                    ) : (
                        <Moon className="w-5 h-5 text-crimson-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
                    )}
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-inherit" />
        </button>
    );
}
