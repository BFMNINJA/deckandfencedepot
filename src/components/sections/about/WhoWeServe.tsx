"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

const audiences = [
  {
    title: "Contractors & Builders",
    description:
      "Reliable bulk supply for professional deck and fence projects. Consistent stock, competitive pricing, and fast access to the materials you need to stay on schedule.",
    features: [
      "Bulk ordering available",
      "Consistent stock levels",
      "Competitive trade pricing",
      "Quick pickup or delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    cta: "Shop for Contractors",
  },
  {
    title: "DIY Homeowners",
    description:
      "Everything you need for your weekend project, with expert advice to help you get it right the first time. From a simple fence repair to a full deck build.",
    features: [
      "Expert material guidance",
      "Per-unit pricing (no minimums)",
      "All hardware included",
      "Project planning support",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    cta: "Shop for Your Project",
  },
];

export default function WhoWeServe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F8F5F4]">
      <div className="container-main">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5100]">
            Who We Serve
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E1810]">
            Materials for Every Builder
          </h2>
          <p className="mt-3 text-[#575250] max-w-2xl mx-auto">
            Whether you&apos;re a seasoned contractor or picking up a hammer for
            the first time, we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              className="bg-white rounded-2xl overflow-hidden border border-[#EDE8E6] hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1810]">{a.title}</h3>
                <p className="mt-3 text-[#575250] leading-relaxed">
                  {a.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-[#FF5100] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-[#1E1810] font-medium">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/shop">{a.cta}</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
