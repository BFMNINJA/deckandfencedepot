import Link from "next/link";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Premium Lumber", href: "/shop?category=premium-lumber" },
    { label: "Hardware & Accessories", href: "/shop?category=hardware-accessories" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1E1810] text-white">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
              Deck &amp; Fence <span className="text-[#FF5100]">Depot</span>
            </span>
            <p className="mt-4 text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Premium lumber and hardware for decks and fences in Stouffville, Ontario. Quality materials for every project.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#FF5100] hover:bg-[#CC4100] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#EDE8E6] hover:text-[#FF5100] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>&copy; {new Date().getFullYear()} Deck and Fence Depot. All rights reserved.</p>
          <p>Stouffville, Ontario</p>
        </div>
      </div>
    </footer>
  );
}
