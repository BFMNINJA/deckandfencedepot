import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Gallery - Deck & Fence Projects",
  "View our gallery of deck and fence projects built with premium materials from Deck and Fence Depot in Stouffville, Ontario. Get inspired for your next project.",
  "/gallery"
);

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
