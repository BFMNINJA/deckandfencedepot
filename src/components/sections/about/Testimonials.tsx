"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James R.",
    role: "Contractor",
    text: "Deck and Fence Depot has been my go-to supplier for the last 3 years. Their lumber quality is consistently top-notch, pricing is fair, and the stock is always available when I need it. Can't ask for more.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Homeowner",
    text: "We built our entire backyard deck using materials from here. The team helped us figure out exactly what we needed and how much. Saved us a trip back to the store — everything was perfect the first time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike T.",
    role: "Contractor",
    text: "Best lumber yard in Stouffville, hands down. I've tried others and keep coming back. The pressure-treated boards are straight and clean, and the hardware selection covers everything I need on a job site.",
    rating: 5,
  },
  {
    id: 4,
    name: "Linda K.",
    role: "Homeowner",
    text: "As a first-time fence builder, I was nervous about picking the right materials. The staff was incredibly patient and walked me through every option. The fence turned out beautiful and has held up great.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#FF5100]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#1E1810]">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A3D]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the homeowners and
            contractors who trust us with their projects.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <StarRating count={testimonials[active].rating} />
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-white font-bold">
                  {testimonials[active].name}
                </p>
                <p className="text-sm text-[#FF7A3D] font-medium mt-1">
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-[#FF5100] w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini cards below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                i === active
                  ? "bg-[#FF5100]/10 border-[#FF5100]/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <StarRating count={t.rating} />
              <p className="mt-3 text-sm text-white/70 line-clamp-2">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF5100]/20 flex items-center justify-center text-[#FF5100] text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs text-white font-semibold">{t.name}</p>
                  <p className="text-[10px] text-white/50">{t.role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
