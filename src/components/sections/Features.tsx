"use client";

import { motion } from "framer-motion";
import { Battery, Wifi, Fingerprint, Camera } from "lucide-react";

const features = [
  {
    icon: <Battery size={32} />,
    title: "72-Hour Battery",
    desc: "Keep going without thinking about a charger.",
  },
  {
    icon: <Wifi size={32} />,
    title: "Quantum Wi-Fi",
    desc: "Speeds that redefine what wireless means.",
  },
  {
    icon: <Fingerprint size={32} />,
    title: "Bio-Security",
    desc: "Your DNA is your password. Completely secure.",
  },
  {
    icon: <Camera size={32} />,
    title: "Holographic Lens",
    desc: "Capture depth, not just pixels.",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
          >
            <div className="text-blue-500 mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
