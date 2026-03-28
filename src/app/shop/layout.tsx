import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Shop - Premium Lumber & Hardware",
  "Browse our complete selection of premium deck lumber, fence materials, and hardware in Stouffville, Ontario. Pressure-treated lumber, cedar boards, balusters, and more at competitive prices.",
  "/shop"
);

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
