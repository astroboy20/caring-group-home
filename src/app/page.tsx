"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home-container/hero-section";
import { HowCanWeHelp } from "@/components/home-container/how-can-we-help";
import { LetsTalkSection } from "@/components/home-container/lets-talk-section";
import { DonateSection } from "@/components/home-container/donate-section";
import { RecentPosts } from "@/components/home-container/recent-posts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HowCanWeHelp />
        <LetsTalkSection />
        <DonateSection />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}
