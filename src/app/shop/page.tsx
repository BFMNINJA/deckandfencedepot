"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

type Category = "all" | "premium-lumber" | "hardware-accessories";

export default function ShopPage() {
  const [category, setCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high">("name");

  const filteredAndSorted = useMemo(() => {
    let filtered = category === "all"
      ? products
      : products.filter((p) => p.category === category);

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price-low") return a.basePrice - b.basePrice;
      if (sortBy === "price-high") return b.basePrice - a.basePrice;
      return 0;
    });

    return sorted;
  }, [category, sortBy]);

  const categoryCount = (cat: Category) => {
    if (cat === "all") return products.length;
    return products.filter((p) => p.category === cat).length;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1E1810] py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FF5100]/20 text-[#FF7A3D] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Shop
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Premium Lumber &amp; Hardware
            </h1>
            <p className="mt-6 text-lg text-[#9CA3AF] leading-relaxed">
              Browse our complete selection of deck and fence materials. All prices shown per unit.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-[#F8F5F4] rounded-xl p-6 border border-[#EDE8E6] sticky top-24">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E1810] mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Products" },
                    { value: "premium-lumber", label: "Premium Lumber" },
                    { value: "hardware-accessories", label: "Hardware & Accessories" },
                  ].map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value as Category)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-between ${
                        category === cat.value
                          ? "bg-[#FF5100] text-white"
                          : "text-[#575250] hover:bg-white"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-xs ${
                          category === cat.value ? "text-white/80" : "text-[#9CA3AF]"
                        }`}
                      >
                        {categoryCount(cat.value as Category)}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#EDE8E6]">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E1810] mb-4">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="w-full px-4 py-2.5 bg-white border border-[#EDE8E6] rounded-lg text-sm text-[#1E1810] focus:outline-none focus:ring-2 focus:ring-[#FF5100]"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-[#575250]">
                  Showing <span className="font-semibold text-[#1E1810]">{filteredAndSorted.length}</span> products
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSorted.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.slug}`}
                    className="group bg-white rounded-xl border border-[#EDE8E6] hover:border-[#FF5100] hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="h-48 bg-[#EDE8E6] flex items-center justify-center">
                      <svg className="w-14 h-14 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-xs text-[#FF5100] font-semibold uppercase tracking-wide">
                        {product.categoryLabel}
                      </span>
                      <h3 className="mt-2 font-bold text-[#1E1810] group-hover:text-[#FF5100] transition-colors duration-200 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#575250] line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-[#1E1810]">
                          {product.priceLabel || `$${product.basePrice.toFixed(2)}`}
                        </span>
                        <span className="text-xs font-semibold text-[#FF5100] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                          View
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredAndSorted.length === 0 && (
                <div className="text-center py-20">
                  <svg className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="text-[#575250]">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
