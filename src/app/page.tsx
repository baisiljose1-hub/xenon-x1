"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

// Import all our completed sections
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import ScrollShowcase from "@/components/sections/ScrollShowcase";
import Features from "@/components/sections/Features";
import Specs from "@/components/sections/Specs";
import Cta from "@/components/sections/Cta";

export default function Home() {
  // Initialize Lenis smooth scrolling for the entire page
  useSmoothScroll();

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] overflow-hidden">
      <Hero />
      <Intro />
      <ScrollShowcase />
      <Features />
      <Specs />
      <Cta />
    </main>
  );
}
