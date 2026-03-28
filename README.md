# Deck and Fence Depot

Modern, responsive website for **Deck and Fence Depot** — a premium lumber and hardware supplier in Stouffville, Ontario.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **GoHighLevel** (forms/CRM — integration ready)
- **Contabo VPS** (hosting target)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero video, categories, featured products, gallery, CTA |
| `/about` | About — story, stats, who we serve, values, testimonials |
| `/shop` | Product catalog — filtering, sorting, 12 products |
| `/shop/[slug]` | Product detail — variants, pricing, quote CTA |
| `/gallery` | Masonry gallery — scroll animations, category filter |
| `/contact` | Contact — GHL form placeholder, map, business info |

## Project Structure

```
src/
├── app/                    # Pages and routing
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, Categories, etc.)
│   │   └── about/          # About page sections
│   └── ui/                 # Reusable components (Button, etc.)
├── lib/                    # Utilities, product data, metadata
└── types/                  # TypeScript interfaces
```

## Key Files

- **Products** — `src/lib/products.ts` (add/edit products here)
- **SEO** — `src/lib/metadata.ts` (site-wide metadata config)
- **GHL Integration** — see `GHL_INTEGRATION.md`

## Before Launch Checklist

- [ ] Add real product images to `/public/images`
- [ ] Replace GHL form placeholders with embed codes
- [ ] Add Google Maps iframe on contact page
- [ ] Update business contact info (phone, email, address)
- [ ] Add favicon and OG image
- [ ] Configure domain DNS on Contabo

## Deployment (Contabo)

```bash
npm run build
# Transfer to server, then:
pm2 start npm --name "deckandfencedepot" -- start
```

Nginx reverse proxy config needed — see deployment docs.

## License

Proprietary — Deck and Fence Depot
