"use client";
import { Header } from "@/components/header";
// import HowCanWeHelp from "@/components/how-can-we-help"
// import LetsTalkSection from "@/components/lets-talk-section"
// import DonateSection from "@/components/donate-section"
// import RecentPosts from "@/components/recent-posts"
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home-container/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        {/* <HowCanWeHelp />
        <LetsTalkSection />
        <DonateSection />
        <RecentPosts /> */}
      </main>
      <Footer />
    </div>
  );
}
