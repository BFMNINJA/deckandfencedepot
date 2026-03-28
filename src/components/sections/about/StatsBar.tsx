"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Projects Supplied" },
  { value: "29+", label: "Products Available" },
  { value: "100%", label: "Customer Satisfaction" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative -mt-12 z-20">
      <div className="container-main">
        <div className="bg-white rounded-2xl border border-[#EDE8E6] shadow-xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#FF5100]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#575250] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
