"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <Link
        href="/"
        className="text-xl font-semibold tracking-tighter text-white"
      >
        Xenon
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="#features" className="hover:text-white transition-colors">
          Features
        </Link>
        <Link href="#design" className="hover:text-white transition-colors">
          Design
        </Link>
        <Link href="#specs" className="hover:text-white transition-colors">
          Specs
        </Link>
      </nav>

      <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-6 font-medium transition-all">
        Pre-order
      </Button>
    </motion.header>
  );
}
