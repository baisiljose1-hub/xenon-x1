"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pin the product in the center
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: productRef.current,
      });

      // Rotate and scale the product as you scroll
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
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-[300vh] bg-black"
      id="design"
    >
      {/* The pinned product */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-10">
        <div
          ref={productRef}
          className="w-64 h-64 md:w-96 md:h-96 rounded-3xl bg-linear-to-tr from-zinc-800 via-zinc-600 to-zinc-900 border border-white/10 shadow-2xl flex items-center justify-center"
        >
          <span className="text-white/30 text-2xl font-bold tracking-widest">
            X1 CORE
          </span>
        </div>
      </div>

      {/* Scrolling Text Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between py-[50vh] px-6 md:px-24">
        <div ref={leftTextRef} className="max-w-md">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Titanium forged.
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            Aerospace-grade materials drop the weight while maximizing
            durability. It feels like nothing else.
          </p>
        </div>

        <div
          ref={rightTextRef}
          className="max-w-md self-end text-right mt-[50vh]"
        >
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
