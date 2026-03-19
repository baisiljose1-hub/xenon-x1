import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xenon X1 | The Future Smart Device",
  description: "Experience the next evolution of personal computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#050505] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
