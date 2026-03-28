const features = [
  {
    title: "Premium Quality",
    description:
      "We source only the best pressure-treated and cedar lumber, ensuring your deck or fence stands the test of time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    description:
      "Get the best value for your money with our transparent pricing and a wide selection of products for every budget.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Local & Trusted",
    description:
      "Proudly serving Stouffville and surrounding areas. We're your local experts for all deck and fence material needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Wide Selection",
    description:
      "From 1x4 boards to 2x12 beams, and all the hardware you need — we carry 29+ products across all dimensions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5100]">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E1810] leading-tight">
              Your Trusted Source for Deck &amp; Fence Materials
            </h2>
            <p className="mt-4 text-[#575250] leading-relaxed">
              We've been supplying homeowners and contractors in Stouffville with
              premium lumber and hardware. When you shop with us, you get quality
              materials, honest prices, and expert local knowledge.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {["Pressure-treated & cedar lumber", "Full range of hardware & accessories", "Transparent per-unit pricing", "Serving Stouffville & surrounding areas"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-[#FF5100] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#1E1810] font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right - Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-[#F8F5F4] rounded-xl p-6 border border-[#EDE8E6]"
              >
                <div className="w-11 h-11 bg-[#FF5100]/10 rounded-lg flex items-center justify-center text-[#FF5100] mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-[#1E1810] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#575250] leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
