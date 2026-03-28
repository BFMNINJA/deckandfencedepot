"use client";

import Link from "next/link";
import { VerticalImageStack, type StackImage } from "@/components/ui/VerticalImageStack";

const galleryImages: StackImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=800&fit=crop",
    alt: "Beautiful cedar deck with outdoor furniture",
    label: "Cedar Deck Build",
    category: "Deck",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    alt: "Wooden privacy fence in backyard",
    label: "Privacy Fence",
    category: "Fence",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
    alt: "Modern backyard deck with landscaping",
    label: "Backyard Deck",
    category: "Deck",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=600&h=800&fit=crop",
    alt: "Horizontal slat fence installation",
    label: "Horizontal Fence",
    category: "Fence",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop",
    alt: "Multi-level deck with railing",
    label: "Multi-Level Deck",
    category: "Deck",
  },
];

export default function GalleryStrip() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5100]">
              Gallery
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1E1810]">
              Built with Our Materials
            </h2>
            <p className="mt-2 text-[#575250] max-w-lg">
              Scroll or drag through our featured projects to see what&apos;s possible.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-semibold text-[#FF5100] hover:underline flex items-center gap-1 shrink-0"
          >
            View full gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <VerticalImageStack images={galleryImages} height="h-[600px]" />
      </div>
    </section>
  );
}
