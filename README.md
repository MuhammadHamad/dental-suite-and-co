# The Dental Suite & Co. — website

Marketing site for **The Dental Suite and Co.**, Dr. Osama Afridi's dental clinic at Office No 19,
Ground Floor, Liberty Mall, University Road (Tehkal), Peshawar. Every fact on the site comes from the
clinic's own public listings; see [`docs/clinic-research.md`](docs/clinic-research.md).

Next.js 16 (App Router, fully static) · Tailwind CSS v4 · TypeScript. No database, no backend:
bookings go to the clinic's WhatsApp.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build — every route is prerendered
npm run start
```

## Deploy (Vercel)

1. Push the repo to GitHub and import it in Vercel (framework preset: Next.js).
2. Set **`NEXT_PUBLIC_SITE_URL`** to the final domain, e.g. `https://thedentalsuiteandco.com`.
   It drives canonical URLs, the sitemap, robots.txt, Open Graph and structured data. Without it the
   site falls back to the Vercel production URL.

## Where to edit things

| What | File |
|---|---|
| Phone, WhatsApp, address, hours, map links, socials, doctor credentials | `src/content/site.ts` |
| The 10 treatment pages (copy, FAQs, steps, options, SEO title/description) | `src/content/treatments.ts` |
| Case notes ("Patient stories") | `src/content/cases.ts` |
| Google reviews (verbatim) | `src/content/reviews.ts` |
| General FAQs | `src/content/faqs.ts` |
| Journal articles | `src/content/journal.ts` |
| Photos | `src/assets/` (imported, so Next.js optimises them to AVIF/WebP) |
| Colours, fonts, animations | `src/app/globals.css` |

Opening hours are entered in Pakistan time; the live "Open now / Closed · opens at…" badge is
calculated for Asia/Karachi wherever the visitor is.

## Pages

`/` · `/treatments` · `/treatments/[slug]` (10) · `/dr-osama-afridi` · `/patient-stories` ·
`/journal` · `/journal/[slug]` (5) · `/contact` · custom 404.

## SEO built in

- One page per treatment, each targeting "<treatment> in Peshawar", with its own title,
  description, FAQs and generated share image.
- JSON-LD: `Dentist` (address, geo, opening hours, services, map, socials), `WebSite`, `Person`
  (Dr. Osama), `Service` per treatment, `FAQPage`, `BlogPosting`, `BreadcrumbList`.
  Self-serving review stars are deliberately **not** marked up (Google ignores them for local
  businesses and it risks a manual action); the 5.0 rating is shown visibly instead.
- `sitemap.xml`, `robots.txt`, web manifest, generated favicon/app icons and Open Graph images.
- Name, address and phone match the Google Business Profile exactly.
- Lighthouse (mobile, production build): SEO 100, Accessibility 100, Best Practices 100,
  Performance 89–94. Desktop performance 99.

## Conversion features

WhatsApp booking from every page (pre-filled messages per treatment), sticky call/WhatsApp/directions
bar on phones, a Smile Planner that suggests treatments and sends them to WhatsApp, a booking form
that opens a ready-to-send WhatsApp message (blocks Sundays), live open/closed status, Google rating
badge, real reviews and case notes.

## Before launch — confirm with the clinic

- [ ] WhatsApp is on **0330 1720064** (assumed to be the same as the phone line).
- [ ] Degrees: BDS from Abbottabad International Dental College and MPH from Khyber Medical
      University (inferred from LinkedIn and Dr. Osama's own reel).
- [ ] Clinic Instagram handle (`@_thedentalsuiteandco_` wasn't viewable); add it to
      `clinic.social` if it's live.
- [ ] Dr. Osama reviews the treatment pages and Journal articles (health content). Then add a
      "Reviewed by Dr. Osama Afridi" line to the articles.
- [ ] Any current offers or price ranges the clinic is happy to publish.
- [ ] More photos (reception, treatment room, before/after with patient consent) — drop them in
      `src/assets/`.

## After launch

- Add the website URL to the Google Business Profile, Facebook page and Instagram bio.
- Verify the domain in Google Search Console and submit `/sitemap.xml`.
- Ask happy patients for Google reviews; update `src/content/reviews.ts` and the count in
  `src/content/site.ts` as they come in.
