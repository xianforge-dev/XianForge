"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
    const router = useRouter();

    useEffect(() => {
        // Supabase client-side handles the OAuth/magic-link callback automatically
        // when it detects the hash fragments in the URL
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_IN") {
                router.push("/app");
            }
        });

        return () => subscription.unsubscribe();
    }, [router]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="animate-spin w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full mx-auto" />
                <p className="text-sm text-white/40 font-serif italic tracking-widest uppercase">
                    Aligning Qi... (灵气对齐中...)
                </p>
            </div>
        </div>
    );
}
