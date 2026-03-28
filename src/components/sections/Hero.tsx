import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-[#1E1810] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Backyard_Deck_Cinematic_Video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E1810]/70" />

      <div className="container-main relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-block bg-[#FF5100]/20 text-[#FF7A3D] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Stouffville, Ontario
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Premium Lumber for{" "}
            <span className="text-[#FF5100]">Decks &amp; Fences</span>
          </h1>

          <p className="mt-6 text-lg text-[#9CA3AF] leading-relaxed max-w-xl">
            Quality deck and fence materials at competitive prices. Whether
            you're a contractor or a DIY homeowner, we have everything you need
            to build something great.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/shop" size="lg">
              Browse Products
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Get a Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            {[
              { value: "29+", label: "Products" },
              { value: "2", label: "Categories" },
              { value: "Local", label: "Stouffville" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-[#9CA3AF] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
