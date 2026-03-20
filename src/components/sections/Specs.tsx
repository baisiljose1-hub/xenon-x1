"use client";

import { motion } from "framer-motion";

const specsData = [
  {
    category: "Processor",
    detail: "A1 Bionic Neural Core",
    sub: "16-core architecture, 3.2GHz",
  },
  {
    category: "Display",
    detail: "Liquid Retina Holographic",
    sub: "120Hz ProMotion, 4000 nits peak brightness",
  },
  {
    category: "Materials",
    detail: "Aerospace Titanium",
    sub: "Ceramic shield front, textured matte glass back",
  },
  {
    category: "Power",
    detail: "72-Hour Continuous Use",
    sub: "Mag-Charge wireless, 50% in 15 minutes",
  },
  {
    category: "Sensors",
    detail: "LiDAR & Bio-Metric",
    sub: "Iris mapping, environment depth scanning",
  },
];

export default function Specs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#020202]" id="specs">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            The technicals.
          </h2>
          <p className="text-xl text-gray-400">Pure power, quantified.</p>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {specsData.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row py-8 border-b border-white/10 group hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >
              <div className="md:w-1/3 mb-2 md:mb-0 text-gray-500 font-medium tracking-wide uppercase text-sm">
                {spec.category}
              </div>
              <div className="md:w-2/3 flex flex-col">
                <span className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {spec.detail}
                </span>
                <span className="text-gray-400">{spec.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
