"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home-container/hero-section";
import { HowCanWeHelp } from "@/components/home-container/how-can-we-help";
import { LetsTalkSection } from "@/components/home-container/lets-talk-section";
import { DonateSection } from "@/components/home-container/donate-section";
import { RecentPosts } from "@/components/home-container/recent-posts";
import { LocationContact } from "@/components/home-container/location-contact";
import { HeroContent } from "@/components/home-container/hero-content";
import BrandImage from "@/components/home-container/brand-image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        {/* <BrandImage/> */}
        <HeroContent/>
        {/* <HowCanWeHelp /> */}
        {/* <LetsTalkSection />
        <DonateSection />
        <RecentPosts /> */}
        <LocationContact/>
      </main>
      <Footer />
    </div>
  );
}
