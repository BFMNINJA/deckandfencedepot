import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Contact Us",
  "Get in touch with Deck and Fence Depot in Stouffville, Ontario. Request a quote, ask questions, or visit us for all your deck and fence material needs.",
  "/contact"
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
