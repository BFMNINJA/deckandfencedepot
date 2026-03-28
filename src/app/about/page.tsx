import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import AboutHero from "@/components/sections/about/AboutHero";
import StatsBar from "@/components/sections/about/StatsBar";
import OurStory from "@/components/sections/about/OurStory";
import WhoWeServe from "@/components/sections/about/WhoWeServe";
import Values from "@/components/sections/about/Values";
import Testimonials from "@/components/sections/about/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata(
  "About Us",
  "Learn about Deck and Fence Depot - your trusted source for premium lumber and hardware in Stouffville, Ontario. Quality materials, competitive prices, and expert local service.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBar />
      <OurStory />
      <WhoWeServe />
      <Values />
      <Testimonials />
      <CTABanner />
    </>
  );
}
