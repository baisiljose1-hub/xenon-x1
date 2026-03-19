"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import ScrollShowcase from "@/components/sections/ScrollShowcase";
import Features from "@/components/sections/Features";

export default function Home() {
  // Initialize Lenis smooth scrolling for the entire page
  useSmoothScroll();

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] overflow-hidden">
      <Hero />
      <Intro />
      <ScrollShowcase />
      <Features />

      {/* Simple Footer/CTA */}
      <section className="py-48 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          Ready to evolve?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          Order today and experience the future of personal computing tomorrow.
        </p>
        <button className="bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform">
          Pre-order Xenon X1
        </button>
      </section>
    </main>
  );
}
