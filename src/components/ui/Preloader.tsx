"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while the preloader is active
    document.body.style.overflow = "hidden";

    // Wait 2.5 seconds, then trigger the exit animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scrolling
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          {/* The text mask container */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase"
            >
              Xenon
            </motion.h1>
          </div>

          {/* The sleek loading line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-1px bg-white/30 mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
