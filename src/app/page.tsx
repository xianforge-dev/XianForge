import Header from "@/components/layout/Header";
import Hero from "@/components/landing/Hero";
import LiveDemo from "@/components/landing/LiveDemo";
import Mechanics from "@/components/landing/Mechanics";
import Showcase from "@/components/landing/Showcase";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-gold-500/30 overflow-x-hidden">
      <Header />
      <Hero />
      <LiveDemo />
      <Mechanics />
      <Showcase />
      <Pricing />
      <Footer />
    </main>
  );
}
