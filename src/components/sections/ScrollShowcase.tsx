"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image"; // Preparing for real images!

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Initialize matchMedia
      let mm = gsap.matchMedia();

      // 2. DESKTOP ANIMATIONS (Pinning and Rotation)
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          pin: productRef.current,
        });

        gsap.to(productRef.current, {
          rotate: 45,
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });

      // 3. MOBILE ANIMATIONS (Simplified, No Pinning)
      mm.add("(max-width: 767px)", () => {
        gsap.to(productRef.current, {
          scale: 1.1,
          y: 50, // Slight parallax effect down
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Cleanup is handled automatically by useGSAP, but mm.revert() ensures media queries reset
      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[150vh] md:min-h-[300vh] bg-black"
      id="design"
    >
      {/* Product Container */}
      <div className="sticky top-32 md:absolute md:top-0 left-0 w-full h-[50vh] md:h-screen flex items-center justify-center pointer-events-none z-10 mb-20 md:mb-0">
        <div
          ref={productRef}
          className="w-48 h-48 md:w-96 md:h-96 rounded-3xl bg-linear-to-tr from-zinc-800 via-zinc-600 to-zinc-900 border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden"
        >
          {/* We are ready for a real image here! */}
          <span className="text-white/30 text-xl md:text-2xl font-bold tracking-widest z-10">
            X1 CORE
          </span>
        </div>
      </div>

      {/* Scrolling Text Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between py-[10vh] md:py-[50vh] px-6 md:px-24 space-y-32 md:space-y-0">
        <div className="max-w-md bg-black/50 backdrop-blur-sm p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Titanium forged.
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            Aerospace-grade materials drop the weight while maximizing
            durability. It feels like nothing else.
          </p>
        </div>

        <div className="max-w-md self-end text-left md:text-right mt-10 md:mt-[50vh] bg-black/50 backdrop-blur-sm p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            A1 Bionic.
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            Our fastest chip ever. Neural processing that anticipates your needs
            before you even think them.
          </p>
        </div>
      </div>
    </section>
  );
}
