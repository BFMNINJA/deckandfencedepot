"use client";

import { useState, useMemo } from "react";
import { ImageGallery, type GalleryImage } from "@/components/ui/ImageGallery";

const galleryItems: GalleryImage[] = [
  {
    id: 1,
    title: "Cedar Deck Build",
    category: "Deck",
    src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=1067&fit=crop",
    orientation: "portrait",
  },
  {
    id: 2,
    title: "Privacy Fence Installation",
    category: "Fence",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1067&h=600&fit=crop",
    orientation: "landscape",
  },
  {
    id: 3,
    title: "Backyard Deck Project",
    category: "Deck",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=1067&fit=crop",
    orientation: "portrait",
  },
  {
    id: 4,
    title: "Horizontal Fence Build",
    category: "Fence",
    src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=1067&h=600&fit=crop",
    orientation: "landscape",
  },
  {
    id: 5,
    title: "Multi-Level Deck",
    category: "Deck",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=1067&fit=crop",
    orientation: "portrait",
  },
  {
    id: 6,
    title: "Garden Fence",
    category: "Fence",
    src: "https://images.unsplash.com/photo-1506506605961-6b740d9e0863?w=1067&h=600&fit=crop",
    orientation: "landscape",
  },
  {
    id: 7,
    title: "Deck with Railing",
    category: "Deck",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1067&h=600&fit=crop",
    orientation: "landscape",
  },
  {
    id: 8,
    title: "Picket Fence",
    category: "Fence",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=1067&fit=crop",
    orientation: "portrait",
  },
  {
    id: 9,
    title: "Composite Deck",
    category: "Deck",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=1067&fit=crop",
    orientation: "portrait",
  },
  {
    id: 10,
    title: "Vertical Board Fence",
    category: "Fence",
    src: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=1067&h=600&fit=crop",
    orientation: "landscape",
  },
  {
    id: 11,
    title: "Front Porch Deck",
    category: "Deck",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1067&h=600&fit=crop",
    orientation: "landscape",
  },
  {
    id: 12,
    title: "Custom Fence Design",
    category: "Fence",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=1067&fit=crop",
    orientation: "portrait",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "Deck" | "Fence">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1E1810] py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FF5100]/20 text-[#FF7A3D] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Built with Our Materials
            </h1>
            <p className="mt-6 text-lg text-[#9CA3AF] leading-relaxed">
              See what&apos;s possible with quality lumber and hardware from Deck
              and Fence Depot.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {(["all", "Deck", "Fence"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  filter === cat
                    ? "bg-[#FF5100] text-white"
                    : "bg-[#F8F5F4] text-[#575250] hover:bg-[#EDE8E6]"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <ImageGallery images={filtered} />

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#9CA3AF]">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
