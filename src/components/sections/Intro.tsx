"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const chars = textRef.current?.querySelectorAll(".char");

      if (chars) {
        gsap.fromTo(
          chars,
          { opacity: 0.1 },
          {
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: container.current,
              start: "top 60%",
              end: "center center",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: container },
  );

  const text =
    "A revolutionary leap in personal computing, designed to seamlessly integrate into your reality.";
  const words = text.split(" ");

  return (
    <section
      ref={container}
      className="py-48 px-6 md:px-12 flex items-center justify-center bg-[#050505]"
    >
      <h2
        ref={textRef}
        className="text-4xl md:text-6xl lg:text-7xl max-w-5xl text-center font-medium tracking-tight text-white leading-tight"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block mr-3">
            {word.split("").map((char, j) => (
              <span key={j} className="char inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </section>
  );
}
