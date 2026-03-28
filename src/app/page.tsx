import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import WhyUs from "@/components/sections/WhyUs";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import GalleryStrip from "@/components/sections/GalleryStrip";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyUs />
      <FeaturedProducts />
      <GalleryStrip />
      <CTABanner />
    </>
  );
}
