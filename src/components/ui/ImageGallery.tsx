"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/AspectRatio";

export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  src: string;
  orientation: "portrait" | "landscape";
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  // Distribute images across 3 columns
  const columns: GalleryImage[][] = [[], [], []];
  images.forEach((img, i) => {
    columns[i % 3].push(img);
  });

  return (
    <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {columns.map((colImages, col) => (
        <div key={col} className="grid gap-6">
          {colImages.map((image) => {
            const ratio =
              image.orientation === "portrait" ? 9 / 16 : 16 / 9;

            return (
              <AnimatedImage
                key={image.id}
                alt={image.title}
                src={image.src}
                ratio={ratio}
                label={image.title}
                category={image.category}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  ratio: number;
  label: string;
  category: string;
}

function AnimatedImage({ alt, src, ratio, label, category }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    setImgSrc(`https://placehold.co/600x400/EDE8E6/9CA3AF?text=${encodeURIComponent(alt)}`);
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="group relative size-full overflow-hidden rounded-xl border border-[#EDE8E6] bg-[#EDE8E6]"
    >
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          "size-full rounded-xl object-cover opacity-0 transition-all duration-1000 ease-in-out",
          {
            "opacity-100": isInView && !isLoading,
          }
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />

      {/* Hover overlay with label */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1810] via-[#1E1810]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#FF7A3D] bg-[#FF5100]/20 px-2 py-1 rounded mb-2">
            {category}
          </span>
          <h3 className="text-white font-bold text-base">{label}</h3>
        </div>
      </div>
    </AspectRatio>
  );
}
