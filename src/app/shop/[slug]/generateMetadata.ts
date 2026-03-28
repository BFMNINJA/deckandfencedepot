import { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for doesn't exist.",
    };
  }

  return {
    title: `${product.name} | ${product.categoryLabel}`,
    description: `${product.description} Available at Deck and Fence Depot in Stouffville, Ontario. ${product.priceLabel || `Starting at $${product.basePrice.toFixed(2)}`}`,
    alternates: {
      canonical: `${siteConfig.url}/shop/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} - ${siteConfig.name}`,
      description: product.description,
      url: `${siteConfig.url}/shop/${product.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: product.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
    },
  };
}
