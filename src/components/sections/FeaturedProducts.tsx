import Link from "next/link";
import Button from "@/components/ui/Button";

const products = [
  { name: "2×6 Deck Board", category: "Premium Lumber", price: "From $10.16", href: "/shop" },
  { name: "2×4 Grooved Board", category: "Premium Lumber", price: "From $7.50", href: "/shop" },
  { name: "1×6 Cedar Board", category: "Premium Lumber", price: "From $3.86", href: "/shop" },
  { name: "Black Balusters + Connectors", category: "Hardware & Accessories", price: "From $3.74", href: "/shop" },
  { name: "2×10 Joist", category: "Premium Lumber", price: "From $24.52", href: "/shop" },
  { name: "2×2 Picket", category: "Premium Lumber", price: "From $2.90", href: "/shop" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F5F4]">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5100]">
              Products
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1E1810]">
              Popular Materials
            </h2>
          </div>
          <Button href="/shop" variant="outline">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group bg-white rounded-xl border border-[#EDE8E6] hover:border-[#FF5100] hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-[#EDE8E6] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="p-5">
                <span className="text-xs text-[#FF5100] font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="mt-1 font-bold text-[#1E1810] group-hover:text-[#FF5100] transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#575250]">{product.price}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#FF5100] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View details
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
