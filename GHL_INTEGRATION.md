# GoHighLevel Integration Guide

This document explains how to integrate GoHighLevel (GHL) forms, calendars, and other features into the Deck and Fence Depot website.

---

## Where GHL is Used

1. **Contact Page** ([/contact](src/app/contact/page.tsx)) - Contact form
2. **Product Detail Pages** ([/shop/[slug]](src/app/shop/[slug]/page.tsx)) - "Request a Quote" button links to contact page
3. **Home Page CTA** ([/](src/app/page.tsx)) - "Get a Quote" buttons

---

## Integration Steps

### Option 1: Form Embed (Recommended)

1. **Get your GHL form embed code:**
   - Log into GoHighLevel
   - Go to **Sites → Forms**
   - Select your contact/quote form
   - Click **Embed** → Copy the embed code

2. **Update the Contact Page:**
   - Open `src/app/contact/page.tsx`
   - Find the GHL placeholder (line ~94)
   - Replace with your actual GHL embed code

   **Before:**
   ```tsx
   <GHLEmbed type="form" formId="contact-form" />
   ```

   **After:**
   ```tsx
   <div dangerouslySetInnerHTML={{ __html: `
     <!-- Your GHL embed code here -->
     <iframe src="https://link.msgsndr.com/widget/form/YOUR_FORM_ID"
             style="width:100%;height:600px;border:none;"></iframe>
   ` }} />
   ```

3. **Or use the GHLEmbed component:**
   - Edit `src/components/ui/GHLEmbed.tsx`
   - Add the GHL script loading in `useEffect`
   - Update the component to render the actual GHL container

---

### Option 2: Direct Script Integration

Add GHL scripts to the root layout:

**File:** `src/app/layout.tsx`

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GHL Form Script */}
        <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

Then use the GHL div container in your contact page:

```tsx
<div id="ghl-form-YOUR_FORM_ID" data-form-id="YOUR_FORM_ID"></div>
```

---

## Product Inquiry Flow

Currently, product detail pages have a "Request a Quote" button that links to `/contact`.

### To capture product context in GHL:

**Option A:** Use URL parameters
```tsx
// In src/app/shop/[slug]/page.tsx
<Button href={`/contact?product=${product.name}&price=${displayPrice}`}>
  Request a Quote
</Button>
```

Then configure your GHL form to capture URL parameters and pre-fill fields.

**Option B:** Create product-specific forms in GHL
- Create separate forms for lumber vs hardware
- Link different buttons to different GHL forms

---

## Google Maps Integration

**File:** `src/app/contact/page.tsx` (line ~116)

Replace the map placeholder with a Google Maps embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl"
></iframe>
```

**Get your embed code:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click **Share** → **Embed a map**
4. Copy the iframe code

---

## Calendar Integration (Optional)

If you want to add appointment booking:

1. Get your GHL calendar link
2. Add a calendar page or embed on contact page:

```tsx
<GHLEmbed type="calendar" calenderId="YOUR_CALENDAR_ID" />
```

Or simply link to your GHL calendar:

```tsx
<Button href="https://your-ghl-calendar-link.com">
  Book an Appointment
</Button>
```

---

## Testing

1. Replace placeholders with actual GHL codes
2. Test form submission
3. Verify leads appear in GHL
4. Test on mobile devices

---

## Environment Variables (Optional)

For cleaner code, store GHL IDs in environment variables:

**File:** `.env.local`
```bash
NEXT_PUBLIC_GHL_FORM_CONTACT=your-form-id
NEXT_PUBLIC_GHL_FORM_QUOTE=your-quote-form-id
```

**Usage:**
```tsx
<GHLEmbed type="form" formId={process.env.NEXT_PUBLIC_GHL_FORM_CONTACT} />
```

---

## Need Help?

- Check GHL documentation: [https://help.gohighlevel.com](https://help.gohighlevel.com)
- Contact GHL support for embed code issues
- Refer to `src/components/ui/GHLEmbed.tsx` for implementation examples
