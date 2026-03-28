"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-[#1E1810] overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop"
        alt="Deck and Fence Depot"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E1810]/75" />

      <div className="container-main relative z-10 py-24 md:py-36">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-[#FF5100]/20 text-[#FF7A3D] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Your Trusted Partner for Quality Deck &amp; Fence{" "}
            <span className="text-[#FF5100]">Materials</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            Serving Stouffville and surrounding areas with premium lumber,
            hardware, and expert advice for every project — big or small.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
