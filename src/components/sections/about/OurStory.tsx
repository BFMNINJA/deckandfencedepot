"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "The Beginning",
    text: "Founded in Stouffville with a mission to provide premium deck and fence materials to local homeowners and contractors.",
  },
  {
    year: "Growing",
    text: "Expanded our product range to include full hardware and accessories, becoming a one-stop shop for deck and fence projects.",
  },
  {
    year: "Today",
    text: "Proudly serving hundreds of customers across Stouffville and surrounding areas with 29+ products and counting.",
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-main">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
                alt="Deck and Fence Depot lumber yard"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF5100] rounded-xl p-5 shadow-lg hidden md:block">
              <p className="text-white text-3xl font-bold">10+</p>
              <p className="text-white/80 text-sm font-medium">
                Years Serving
                <br />
                Stouffville
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5100]">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E1810] leading-tight">
              Built on Trust, Quality, and Community
            </h2>
            <p className="mt-5 text-[#575250] leading-relaxed">
              Deck and Fence Depot started with a simple belief: homeowners and
              contractors deserve access to premium-quality building materials
              without the premium markup. We understand that every project is
              unique, and we&apos;re committed to providing the right materials at
              the right price.
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="relative pl-8 pb-8 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                >
                  {/* Line */}
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[9px] top-3 bottom-0 w-px bg-[#EDE8E6]" />
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-[3px] border-[#FF5100] bg-white" />
                  <h4 className="text-sm font-bold text-[#FF5100] uppercase tracking-wider">
                    {m.year}
                  </h4>
                  <p className="mt-1 text-sm text-[#575250] leading-relaxed">
                    {m.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
