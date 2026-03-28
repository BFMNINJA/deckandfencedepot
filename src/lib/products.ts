import { Product } from "@/types/product";

// Mock product data based on the website scrape
export const products: Product[] = [
  // Premium Lumber
  {
    id: "1",
    name: "1×4×8 Board",
    slug: "1x4x8-board",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Premium pressure-treated lumber, perfect for deck boards, railings, and trim work. Durable and weather-resistant.",
    basePrice: 4.81,
    priceLabel: "$4.81",
    inStock: true,
    featured: false,
  },
  {
    id: "2",
    name: "1×6 Board",
    slug: "1x6-board",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Versatile 1×6 boards available in multiple lengths. Ideal for fencing, decking, and general construction.",
    basePrice: 3.86,
    priceLabel: "From $3.86",
    variants: [
      { id: "2-8", name: "8ft", price: 3.86 },
      { id: "2-10", name: "10ft", price: 5.24 },
      { id: "2-12", name: "12ft", price: 9.24 },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "2×2 Picket",
    slug: "2x2-picket",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Ideal for fence pickets and decorative railings. Quality pressure-treated wood.",
    basePrice: 2.90,
    priceLabel: "From $2.90",
    variants: [
      { id: "3-6", name: "6ft", price: 2.90 },
      { id: "3-8", name: "8ft", price: 5.37 },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "2×4 Board",
    slug: "2x4-board",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Standard framing lumber for deck joists, fence posts, and structural support.",
    basePrice: 7.50,
    priceLabel: "From $7.50",
    variants: [
      { id: "4-8", name: "8ft", price: 7.50 },
      { id: "4-10", name: "10ft", price: 9.80 },
      { id: "4-12", name: "12ft", price: 11.97 },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "2×4 Grooved Board",
    slug: "2x4-grooved-board",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Grooved deck boards for enhanced traction and modern aesthetic. Perfect for deck surfaces.",
    basePrice: 7.50,
    priceLabel: "From $7.50",
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "2×6 Board",
    slug: "2x6-board",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Heavy-duty 2×6 lumber for deck boards, joists, and structural applications. Available in multiple lengths.",
    basePrice: 10.16,
    priceLabel: "From $10.16",
    variants: [
      { id: "6-8", name: "8ft", price: 10.16 },
      { id: "6-10", name: "10ft", price: 14.28 },
      { id: "6-12", name: "12ft", price: 17.52 },
      { id: "6-16", name: "16ft", price: 24.48 },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "2×10 Joist",
    slug: "2x10-joist",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Strong structural joists for deck framing and support beams. Premium pressure-treated lumber.",
    basePrice: 24.52,
    priceLabel: "From $24.52",
    variants: [
      { id: "7-8", name: "8ft", price: 24.52 },
      { id: "7-10", name: "10ft", price: 32.16 },
      { id: "7-12", name: "12ft", price: 38.64 },
      { id: "7-16", name: "16ft", price: 49.05 },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "8",
    name: "2×12 Beam",
    slug: "2x12-beam",
    category: "premium-lumber",
    categoryLabel: "Premium Lumber",
    description: "Heavy-duty beams for large deck projects and structural support. Maximum strength and durability.",
    basePrice: 37.12,
    priceLabel: "From $37.12",
    variants: [
      { id: "8-8", name: "8ft", price: 37.12 },
      { id: "8-10", name: "10ft", price: 48.20 },
      { id: "8-12", name: "12ft", price: 56.88 },
      { id: "8-16", name: "16ft", price: 66.20 },
    ],
    inStock: true,
    featured: true,
  },

  // Hardware & Accessories
  {
    id: "9",
    name: "26′ Black Balusters + Connectors",
    slug: "black-balusters-connectors",
    category: "hardware-accessories",
    categoryLabel: "Hardware & Accessories",
    description: "Complete baluster kit with connectors. Sleek black finish for modern deck railings. Durable metal construction.",
    basePrice: 3.74,
    priceLabel: "From $3.74",
    variants: [
      { id: "9-single", name: "Single", price: 3.74 },
      { id: "9-10pack", name: "10-Pack", price: 35.00 },
      { id: "9-25pack", name: "25-Pack", price: 82.00 },
      { id: "9-50pack", name: "50-Pack", price: 122.00 },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "10",
    name: "Deck Screws - Exterior Grade",
    slug: "deck-screws-exterior",
    category: "hardware-accessories",
    categoryLabel: "Hardware & Accessories",
    description: "Corrosion-resistant deck screws for outdoor construction. Available in various sizes and quantities.",
    basePrice: 12.99,
    priceLabel: "From $12.99",
    inStock: true,
  },
  {
    id: "11",
    name: "Post Caps - 4×4",
    slug: "post-caps-4x4",
    category: "hardware-accessories",
    categoryLabel: "Hardware & Accessories",
    description: "Decorative and protective caps for 4×4 fence and deck posts. Weather-resistant finish.",
    basePrice: 8.50,
    priceLabel: "From $8.50",
    inStock: true,
  },
  {
    id: "12",
    name: "Joist Hangers",
    slug: "joist-hangers",
    category: "hardware-accessories",
    categoryLabel: "Hardware & Accessories",
    description: "Heavy-duty galvanized joist hangers for secure deck framing connections.",
    basePrice: 2.25,
    priceLabel: "From $2.25",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
