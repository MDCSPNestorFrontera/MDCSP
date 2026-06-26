# Aurora Medical Office Website (Bilingual)

Production-ready, bilingual medical office site for Puerto Rico built with Next.js App Router, TypeScript, and Tailwind CSS. Spanish is the default language with a full UI switch to English.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Editing (Single Source of Truth)

All text and structured content live in:

- `src/content/siteContent.ts`

Update clinic name, doctor info, services, hours, testimonials, FAQ, and SEO content there. The UI reads from this file across every page.

## Key Architecture Notes

- **App Router + Server Metadata**: Each page uses `generateMetadata()` with the selected language so SEO metadata stays aligned.
- **Language Provider**: Client-side language toggle with `?lang=` persistence and localStorage fallback. Example: `/services?lang=en`.
- **Reusable Components**: All visual blocks live in `src/components`.
- **Performance**: Minimal dependencies, `next/image` for assets, subtle CSS-only motion, and reduced-motion support.

## Structure

```
src/
  app/
    about/page.tsx
    contact/page.tsx
    services/page.tsx
    page.tsx
    layout.tsx
  components/
  content/
  lib/
public/
  assets/
```

## Replace Placeholder Assets

Swap placeholders in `public/assets` with real photography:

- `public/assets/clinic-hero.svg`
- `public/assets/doctor-headshot.svg`

## Notes

- No appointments, WhatsApp, or patient portal features are included by design.
- The contact form is client-side only and does not submit to a backend.
- Update the metadata base URL in `src/app/layout.tsx`.
