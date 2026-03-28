import { Metadata } from "next";

const siteConfig = {
  name: "Deck and Fence Depot",
  description:
    "Premium lumber and hardware for decks and fences in Stouffville, Ontario. Quality materials at competitive prices for contractors and homeowners.",
  url: "https://deckandfencedepot.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "deck lumber",
    "fence lumber",
    "pressure treated lumber",
    "cedar lumber",
    "deck hardware",
    "fence hardware",
    "Stouffville lumber",
    "Ontario deck materials",
    "fence materials",
    "deck supplies",
    "fence supplies",
    "deck boards",
    "fence posts",
    "balusters",
    "deck screws",
  ],
  location: {
    city: "Stouffville",
    region: "Ontario",
    country: "Canada",
  },
};

export function generateSiteMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | Premium Lumber in ${siteConfig.location.city}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Premium Deck and Fence Materials`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  overrides?: Partial<Metadata>
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    ...overrides,
  };
}

export { siteConfig };
