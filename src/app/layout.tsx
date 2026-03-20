import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Component Imports
import Navbar from "@/components/sections/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";

// Configure the premium font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Global SEO Metadata
export const metadata: Metadata = {
  title: "Xenon X1 | The Future Smart Device",
  description: "Experience the next evolution of personal computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Exactly ONE return statement, ONE html tag, and ONE body tag.
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#050505] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden`}
      >
        {/* 1. The Cinematic Reveal */}
        <Preloader />

        {/* 2. The High-End Interactive Cursor */}
        <CustomCursor />

        {/* 3. The Glassmorphism Navigation */}
        <Navbar />

        {/* 4. The Main Page Content */}
        {children}
      </body>
    </html>
  );
}
