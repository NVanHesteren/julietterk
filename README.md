# julietterk.com

Marketing site for Juliette Reese-Kari, paediatric dietitian (London). Built for clean SEO across 40 service-by-age pages, with Cal.com booking integration.

## Stack

- **Next.js 15** (App Router, React 19 RC)
- **TypeScript** (strict)
- **Tailwind CSS** for utilities, custom CSS in `globals.css` for ticker animation, FAQ accordion and service-page prose styles
- **@calcom/embed-react** for booking (two namespaces: `new-patient`, `follow-up`)
- **next/font** for Fraunces + Plus Jakarta Sans (no CDN requests)
- Static generation for all service pages, sitemap and robots auto-generated

Designed to deploy to Vercel with zero config.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of all 40 service pages
```

## Deploy to Vercel

1. `git init && git add . && git commit -m "initial commit"`
2. Push to GitHub
3. Go to [vercel.com/new](https://vercel.com/new), import the repo
4. Hit deploy. Add `julietterk.com` as a custom domain in project settings.

No environment variables needed. Cal.com links are hardcoded in `components/BookButton.tsx`.

## Structure

```
app/
  layout.tsx                 Root layout, fonts, Nav, Footer
  page.tsx                   Home (composes home components)
  globals.css                Tailwind + custom CSS
  sitemap.ts                 Auto-generated from content
  robots.ts                  Standard rules
  services/
    page.tsx                 Index of all 40 pages, grouped by age
    [slug]/page.tsx          Dynamic route (renders ServicePage from data)

components/
  Nav.tsx, Footer.tsx
  BookButton.tsx             Cal.com client component (the only one)
  HomeHero, ThumbStrip, Ticker,
  ServiceCategories, AboutSection,
  BookCta, FaqAccordion       Home sections
  ServicePage.tsx            The template for all 40 service pages

content/
  pages.ts                   ALL service page content lives here.
                             Edit this file to update copy, add pages,
                             reorder. Dynamic route + sitemap pick up
                             changes automatically.

lib/
  images.ts                  Centralised image URLs (Unsplash placeholders)
  ages.ts                    Age group labels

tailwind.config.ts           Brand colour tokens, font CSS vars, maxWidths
```

## Adding or editing a service page

Everything lives in `content/pages.ts`. To add a page:

```ts
"new-slug-here": {
  age: "child",                          // "infant" | "child" | "teen"
  img: IMG.ca,                           // image key from lib/images.ts
  title: ["Pre ", "Emphasised", " post"], // becomes H1 with italic middle word
  lead: "One-sentence intro for the page.",
  sections: [
    { h: ["Section heading", "Emphasised substring", " trailing text"],
      b: "<p>HTML body. <strong>Highlight</strong> for clay callouts.</p>" },
  ],
  faqs: [
    { q: "Question?", a: "Answer." },
  ],
  related: ["existing-slug-1", "existing-slug-2", "existing-slug-3"],
},
```

The dynamic route `/services/[slug]`, the sitemap, the services index, and related-page cards all pick it up automatically. No other files to edit.

## Brand customisation

- **Colours**: `tailwind.config.ts` → `theme.extend.colors`. Sage, cream, clay, ink families.
- **Fonts**: `app/layout.tsx` swap the `next/font` imports.
- **Imagery**: `lib/images.ts` is the central place. Replace Unsplash URLs with real photography when ready. Particularly Juliette's portrait (`IMG.about`).
- **Custom CSS classes** (eyebrow, h-display, ticker, faq-item, svc-content prose styles): `app/globals.css` under `@layer components`.

## Cal.com setup

`components/BookButton.tsx` is the single client component handling booking. Two namespaces:

- `new-patient` → `julietterk/new-patient` (£90, 1 hr)
- `follow-up` → `julietterk/follow-up` (£60, 30 min)

Brand colour is set inline (`#6F8666` sage). Layout is `month_view`. To change either, edit the `useEffect` in BookButton.

## SEO architecture

Topic-cluster hub model. Homepage hosts the brand and trust signals. `/services` is the index. All 40 specific pages are indexed via sitemap and via in-page links from related cards, but they are **not in the main nav** — they're search-traffic landing pages, not navigation anchors.

Per-page `generateMetadata` provides title, description, canonical URL, OpenGraph image. All pages are statically generated at build time.

## Important: content needs clinical review before publishing

The current copy in `content/pages.ts` was drafted from mainstream NHS / BDA / NICE guidance, in Juliette's voice as best I could reconstruct it. **It still needs Juliette's clinical review and personal voice edits before going live.** Three reasons:

1. Specific clinical claims should be Juliette's, not mine
2. AI-detection tooling is unreliable but readers can usually tell when copy hasn't been touched by a human
3. Small edits ("I tend to say…", "in my experience…") materially change how the site reads

The architecture handles whatever Juliette writes. Don't ship without her edits.

## Next steps (not done yet)

- Real photography (especially Juliette's portrait)
- Standalone `/about` page (currently a homepage anchor)
- OG image generation
- Page transitions
- Clinical review of all 40 pages
