export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "premium-lumber" | "hardware-accessories";
  categoryLabel: string;
  description: string;
  basePrice: number;
  priceLabel?: string; // e.g., "From $10.16"
  variants?: ProductVariant[];
  inStock: boolean;
  featured?: boolean;
  image?: string;
}

export interface ProductVariant {
  id: string;
  name: string; // e.g., "8ft", "10ft", "12ft"
  price: number;
  sku?: string;
}
