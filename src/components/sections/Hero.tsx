"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1a1a2e_0%,#050505_60%)] opacity-60" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-6"
        >
          The Next Generation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-6 leading-none"
        >
          Xenon{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-600">
            X1
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl text-lg md:text-2xl text-gray-400 font-light tracking-tight mb-10"
        >
          Profoundly powerful. Completely invisible. The most advanced smart
          device ever created.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base bg-white text-black hover:bg-gray-200 transition-all"
          >
            Buy from $999
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-base border-white/20 text-white hover:bg-white/10 transition-all"
          >
            Watch the film
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
