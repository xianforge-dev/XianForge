"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    BookMarked,
    GalleryVertical,
    User as UserIcon,
    LogOut,
    Menu,
    X,
    Plus as PlusIcon,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Zap,
    Wind
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SolanaProvider } from "@/components/providers/SolanaProvider";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const WalletMultiButton = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

const navItems = [
    { name: "New Forge", path: "/app", icon: PlusIcon, zh: "新锻造" },
    { name: "My Series", path: "/app/series", icon: BookMarked, zh: "我的系列" },
    { name: "Mint Gallery", path: "/app/gallery", icon: GalleryVertical, zh: "铸造画廊" },
    { name: "Profile", path: "/app/profile", icon: UserIcon, zh: "个人资料" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUser(user);
            } else {
                router.push("/login?redirect_to=" + encodeURIComponent(pathname));
            }
        };
        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUser(session.user);
            } else {
                router.push("/login");
            }
        });

        return () => subscription.unsubscribe();
    }, [router, pathname]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full py-8">
            {/* Logo Section - Asymmetrical Rotate */}
            <div className="h-24 flex items-center px-8 relative border-b border-white/5 group mb-8">
                <Link href="/" className="flex items-center gap-6 group -rotate-1 hover:rotate-0 transition-transform duration-700">
                    <div className="p-4 bg-gold-500 molten-edge rotate-[45deg] flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.3)] group-hover:rotate-[225deg] transition-all duration-1000 shrink-0">
                        <Flame className="w-5 h-5 text-black -rotate-[45deg] group-hover:rotate-[135deg] transition-all duration-1000" strokeWidth={2.5} />
                    </div>
                    <AnimatePresence>
                        {(isSidebarOpen || isMobileMenuOpen) && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="flex flex-col"
                            >
                                <span className="text-xl font-display tracking-[0.25em] text-glow-gold uppercase leading-none">XianForge</span>
                                <span className="text-[7px] font-black tracking-[0.4em] text-white/10 uppercase mt-1 italic">Vane of the Dao <span className="opacity-40 font-serif lowercase italic tracking-tight">(道之风)</span></span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Link>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 py-10 px-5 space-y-4 overflow-y-auto custom-scrollbar">
                {navItems.map((item, idx) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "flex items-center gap-5 px-5 py-4 rounded-sm transition-all relative group/item border border-transparent",
                                isActive
                                    ? 'bg-gold-500/[0.03] text-gold-500 border border-gold-500/10 shadow-[inner_0_0_20px_rgba(255,215,0,0.02)]'
                                    : 'text-white/20 hover:text-white/80'
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform duration-700 group-hover/item:scale-110 shrink-0",
                                isActive ? 'text-gold-500 text-shadow-glow' : '',
                                idx % 2 === 0 ? "rotate-2 group-hover/item:rotate-0" : "-rotate-2 group-hover/item:rotate-0"
                            )} strokeWidth={1.5} />

                            <AnimatePresence>
                                {(isSidebarOpen || isMobileMenuOpen) && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -15 }}
                                        className="flex-1 flex flex-col items-start"
                                    >
                                        <span className="text-[10px] font-black tracking-[0.3em] uppercase whitespace-nowrap">{item.name}</span>
                                        <span className="text-[8px] font-serif italic lowercase tracking-widest opacity-40 group-hover/item:text-gold-500 transition-colors">
                                            ({item.zh})
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {isActive && (
                                <div className="absolute left-[-1.5px] top-1/2 -translate-y-1/2 w-1 h-8 bg-gold-500 molten-edge -rotate-1" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile & Logout - Artisanal Bevels */}
            <div className="p-5 border-t border-white/5 space-y-6">
                <div className={cn(
                    "p-5 glass-beveled organic-radius flex items-center gap-4 transition-all duration-700",
                    (isSidebarOpen || isMobileMenuOpen) ? 'opacity-100 scale-100' : 'opacity-0 scale-90 hidden'
                )}>
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black font-black text-sm molten-edge shadow-[0_15px_30px_rgba(255,215,0,0.3)] shrink-0 animate-wobble">
                        {user?.email?.[0].toUpperCase() || "C"}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="text-[10px] font-black tracking-[0.2em] text-gold-500 truncate uppercase">{user?.email?.split('@')[0]}</div>
                        <div className="text-[8px] text-white/20 font-serif tracking-[0.1em] uppercase truncate italic">Ascended Cultivator <span className="opacity-40 italic lowercase tracking-tight">(飞升者)</span></div>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-5 px-5 py-4 text-crimson-500/30 hover:text-crimson-500 hover:bg-crimson-500/[0.05] transition-all rounded-sm group/logout"
                >
                    <LogOut className="w-6 h-6 transition-transform group-hover/logout:-translate-x-2 shrink-0" strokeWidth={1.2} />
                    {(isSidebarOpen || isMobileMenuOpen) && (
                        <div className="flex flex-col items-start translate-y-0.5">
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase truncate leading-none">Sever Soulbind</span>
                            <span className="text-[8px] font-serif italic lowercase tracking-tight opacity-40 group-hover/logout:text-crimson-500/60 transition-colors mt-0.5">(断开灵魂绑定)</span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <SolanaProvider>
            <div className="flex min-h-screen bg-[#0c0c0e] text-white relative overflow-hidden font-sans">
                {/* Global Texture & Depth Elements */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[9999]" />
                <div className="absolute inset-0 z-0 pointer-events-none mist-overlay opacity-30" />
                <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-gold-500/[0.03] blur-[200px] z-0 animate-wobble" />
                <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-crimson-500/[0.02] blur-[150px] z-0 animate-pulse-slow" />

                {/* Desktop Sidebar - Artisanal Feel */}
                <motion.aside
                    initial={false}
                    animate={{ width: isSidebarOpen ? 300 : 90 }}
                    transition={{ type: "spring", stiffness: 200, damping: 40 }}
                    className="hidden lg:flex fixed left-0 top-0 h-full border-r border-white/5 bg-black/60 backdrop-blur-3xl z-50 flex-col group/sidebar overflow-hidden shadow-[30px_0_60px_-15px_rgba(0,0,0,0.8)]"
                >
                    <SidebarContent />
                    {/* Sidebar Toggle Button (Desktop ARtisan) */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="absolute bottom-28 -right-4 w-8 h-8 bg-gold-500 text-black flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-90 z-[60] organic-radius molten-edge"
                    >
                        {isSidebarOpen ? <ChevronLeft size={16} className="rotate-2" /> : <ChevronRight size={16} className="-rotate-2" />}
                    </button>
                </motion.aside>

                {/* Mobile Slide-over Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] lg:hidden"
                            />
                            <motion.aside
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                                className="fixed left-0 top-0 h-full w-[300px] bg-[#0c0c0e] border-r border-gold-500/20 z-[110] lg:hidden"
                            >
                                <SidebarContent />
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>

                {/* Main Content Area - Asymmetrical Scaling */}
                <main
                    className={cn(
                        "flex-1 transition-all duration-700 flex flex-col min-h-screen",
                        "lg:pl-[90px]",
                        isSidebarOpen ? "lg:pl-[300px]" : "lg:pl-[90px]"
                    )}
                >
                    {/* Header Bar - Beveled Glass */}
                    <header
                        className={cn(
                            "h-20 md:h-28 py-4 md:py-6 px-6 sm:px-10 md:px-20 border-b border-white/5 flex items-center justify-between sticky top-0 z-[40] transition-all duration-700",
                            "bg-black/90 dark:bg-black/40 backdrop-blur-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
                        )}
                    >
                        <div className="flex items-center gap-4 md:gap-10">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="lg:hidden p-3 md:p-4 bg-white/5 border border-white/5 organic-radius hover:text-gold-500 transition-all active:scale-95"
                            >
                                <Menu size={24} className="md:w-[28px] md:h-[28px]" />
                            </button>

                            <div className="flex flex-col gap-0.5 md:gap-1">
                                <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] text-white/20 uppercase italic drop-shadow-sm flex items-center gap-2 md:gap-3">
                                    <Wind className="w-2.5 h-2.5 md:w-3 md:h-3" /> DIVINE RECORDS
                                </span>
                                <h2 className="text-xl md:text-3xl font-display text-glow-gold tracking-[0.05em] md:tracking-[0.1em] uppercase truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
                                    {navItems.find(item => item.path === pathname)?.name || "Immortal Seat"}
                                </h2>
                            </div>
                        </div>

                        {/* Actions Area */}
                        <div className="flex items-center gap-3 md:gap-12">
                            <ThemeToggle />

                            {/* Solana Connect - Asymmetric Shadow */}
                            <div className="scale-[0.7] sm:scale-[0.85] md:scale-95 origin-right opacity-90 hover:opacity-100 transition-all hover:translate-y-[-2px]">
                                <WalletMultiButton className="!bg-black !border !border-gold-500/20 !text-gold-500 !font-black !tracking-[0.2em] md:!tracking-[0.4em] !uppercase !text-[9px] md:!text-[11px] !h-12 md:!h-14 !px-6 md:!px-12 !rounded-sm !shadow-[0_20px_40px_-10px_rgba(255,215,0,0.2)] hover:!shadow-[0_30px_60px_-10px_rgba(255,215,0,0.4)] transition-all" />
                            </div>

                            <div className="hidden xl:flex items-center gap-8 text-white/10">
                                <HelpCircle className="w-6 h-6 hover:text-white cursor-pointer transition-colors" strokeWidth={1.5} />
                                <div className="h-10 w-[1px] bg-white/10" />
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="p-4 bg-gold-500/5 border border-gold-500/10 organic-radius"
                                >
                                    <Sparkles className="w-6 h-6 text-gold-500 shadow-glow" strokeWidth={1} />
                                </motion.div>
                            </div>
                        </div>
                    </header>

                    {/* App Body Content - Humanized Padding */}
                    <div className="flex-1 p-4 sm:p-8 md:p-12 lg:p-20 relative z-10 w-full max-w-8xl mx-auto flex flex-col gap-6 md:gap-12 transition-all duration-700">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={pathname}
                                initial={{ opacity: 0, y: 20, scale: 0.99 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full flex-1"
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>

                        {/* Hidden Artisanal Footer */}
                        <div className="pt-10 md:pt-20 pb-10 flex flex-col items-center gap-6 opacity-[0.05] hover:opacity-20 transition-opacity duration-1000">
                            <div className="divine-divider w-full max-w-sm" />
                            <div className="text-[7px] md:text-[9px] font-black tracking-[0.4em] md:tracking-[0.8em] uppercase whitespace-nowrap text-center px-4">
                                Forged by Immortal Hands • XianForge Protocol <span className="opacity-40">(由长生之手锻造)</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Global/Solana Styling Overrides */}
            <style jsx global>{`
                .wallet-adapter-button {
                  display: flex !important;
                  font-family: var(--font-inter), sans-serif !important;
                }
                .wallet-adapter-modal-wrapper {
                  background-color: #0c0c0e !important;
                  border: 1px solid rgba(255, 215, 0, 0.2) !important;
                  border-radius: 0px !important;
                  box-shadow: 0 50px 100px -20px rgba(0,0,0,1) !important;
                }
                .wallet-adapter-modal-button-close {
                  background-color: rgba(255, 255, 255, 0.05) !important;
                  border-radius: 0px !important;
                }
                .wallet-adapter-modal-title {
                  font-family: var(--font-display), "Cinzel", sans-serif !important;
                  text-transform: uppercase !important;
                  letter-spacing: 0.4em !important;
                  color: white !important;
                  padding-top: 10px !important;
                }
                .wallet-adapter-modal-list {
                  margin: 10px 0 !important;
                }
                .wallet-adapter-wallet-item {
                  background-color: #111113 !important;
                  margin-bottom: 2px !important;
                  border-bottom: 1px solid rgba(255, 215, 0, 0.05) !important;
                  transition: all 0.3s !important;
                }
                .wallet-adapter-wallet-item:hover {
                  background-color: #1a1a1c !important;
                  transform: scale(1.02);
                }
                .wallet-adapter-wallet-name {
                  font-family: var(--font-inter), "Inter", sans-serif !important;
                  text-transform: uppercase !important;
                  font-size: 11px !important;
                  font-weight: 800 !important;
                  letter-spacing: 0.2em !important;
                  opacity: 0.5 !important;
                }
            `}</style>
        </SolanaProvider>
    );
}
