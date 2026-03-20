"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="relative py-48 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Background radial gradient to give it a spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111_0%,#000_100%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500 leading-none">
          Ready?
        </h2>
        <p className="text-xl md:text-3xl text-gray-400 mb-12 font-light max-w-2xl tracking-tight">
          Step into the future. Order your Xenon X1 today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="rounded-full px-12 py-8 text-xl bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            Pre-order now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-12 py-8 text-xl border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            Compare models
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
