"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/lib/products";
import Button from "@/components/ui/Button";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0]?.id || null
  );

  if (!product) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="text-2xl font-bold text-[#1E1810]">Product Not Found</h1>
        <p className="mt-4 text-[#575250]">
          The product you're looking for doesn't exist.
        </p>
        <Button href="/shop" className="mt-6">
          Back to Shop
        </Button>
      </div>
    );
  }

  const currentVariant = product.variants?.find((v) => v.id === selectedVariant);
  const displayPrice = currentVariant?.price || product.basePrice;

  // Related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#F8F5F4] py-4 border-b border-[#EDE8E6]">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#575250] hover:text-[#FF5100]">
              Home
            </Link>
            <span className="text-[#9CA3AF]">/</span>
            <Link href="/shop" className="text-[#575250] hover:text-[#FF5100]">
              Shop
            </Link>
            <span className="text-[#9CA3AF]">/</span>
            <span className="text-[#1E1810] font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="bg-[#EDE8E6] rounded-2xl aspect-square flex items-center justify-center">
              <svg className="w-24 h-24 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF5100] bg-[#FF5100]/10 px-3 py-1.5 rounded-full">
                {product.categoryLabel}
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#1E1810]">
                {product.name}
              </h1>
              <p className="mt-4 text-[#575250] leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-8 p-6 bg-[#F8F5F4] rounded-xl border border-[#EDE8E6]">
                <p className="text-sm text-[#575250] uppercase tracking-wide">Price</p>
                <p className="mt-2 text-3xl font-bold text-[#1E1810]">
                  ${displayPrice.toFixed(2)}
                </p>
                {product.variants && (
                  <p className="mt-1 text-xs text-[#9CA3AF]">
                    {currentVariant ? `per ${currentVariant.name} length` : "Select a variant"}
                  </p>
                )}
              </div>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-[#1E1810] mb-3">
                    Select Length / Size
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant.id)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium border-2 transition-all duration-200 ${
                          selectedVariant === variant.id
                            ? "border-[#FF5100] bg-[#FF5100]/10 text-[#FF5100]"
                            : "border-[#EDE8E6] text-[#575250] hover:border-[#FF5100]/50"
                        }`}
                      >
                        <div className="font-semibold">{variant.name}</div>
                        <div className="text-xs mt-1">${variant.price.toFixed(2)}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock */}
              <div className="mt-6 flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-[#575250]">In Stock</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-sm text-[#575250]">Out of Stock</span>
                  </>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 space-y-3">
                <Button href="/contact" size="lg" className="w-full">
                  Request a Quote
                </Button>
                <p className="text-xs text-center text-[#9CA3AF]">
                  Contact us for bulk pricing or custom orders
                </p>
              </div>

              {/* Info Grid */}
              <div className="mt-10 pt-10 border-t border-[#EDE8E6] grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-2">
                    Category
                  </p>
                  <p className="text-sm font-semibold text-[#1E1810]">
                    {product.categoryLabel}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-2">
                    Availability
                  </p>
                  <p className="text-sm font-semibold text-[#1E1810]">
                    {product.inStock ? "In Stock" : "Contact Us"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F8F5F4]">
          <div className="container-main">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E1810] mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.slug}`}
                  className="group bg-white rounded-xl border border-[#EDE8E6] hover:border-[#FF5100] hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="h-44 bg-[#EDE8E6] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-[#FF5100] font-semibold uppercase tracking-wide">
                      {relatedProduct.categoryLabel}
                    </span>
                    <h3 className="mt-1 font-bold text-[#1E1810] group-hover:text-[#FF5100] transition-colors duration-200 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[#575250]">
                      {relatedProduct.priceLabel || `$${relatedProduct.basePrice.toFixed(2)}`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
