import Link from "next/link";

const categories = [
  {
    name: "Premium Lumber",
    description:
      "High-quality pressure-treated and cedar lumber for decks and fences. Available in a wide range of dimensions and lengths.",
    href: "/shop?category=premium-lumber",
    count: "13 products",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    name: "Hardware & Accessories",
    description:
      "Everything you need to complete your project — balusters, connectors, fasteners, and more.",
    href: "/shop?category=hardware-accessories",
    count: "16 products",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F5F4]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1810]">
            Shop by Category
          </h2>
          <p className="mt-3 text-[#575250] max-w-xl mx-auto">
            Everything you need to build the perfect deck or fence, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group bg-white rounded-xl p-8 border border-[#EDE8E6] hover:border-[#FF5100] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 bg-[#FF5100]/10 rounded-lg flex items-center justify-center text-[#FF5100] group-hover:bg-[#FF5100] group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1E1810]">{cat.name}</h3>
                    <span className="text-xs text-[#9CA3AF] bg-[#F8F5F4] px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#575250] leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#FF5100] group-hover:gap-2 transition-all duration-200">
                    Browse products
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
