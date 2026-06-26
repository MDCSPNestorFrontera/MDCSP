# MDCSP Nestor Frontera Tacoronte Website

Bilingual website for MDCSP Nestor Frontera Tacoronte, the medical office of Dr. Nestor R. Frontera Tacoronte in Guánica, Puerto Rico. Spanish is the default language, with an English toggle available across the site.

## Office Information

- Address: 32-42 C. 25 de Julio, Guánica, PR 00653
- Phone: (787) 821-4417
- Phone: (787) 821-5828
- Phone: (787) 821-4829
- Hours: Monday to Friday, 7:00 a.m. - 4:00 p.m.
- Medical plans: We take most medical plans. Call for more information.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Bilingual content using `?lang=es` and `?lang=en`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Content Editing

The main content source is:

- `src/content/siteContent.ts`

Update doctor biography, services, office hours, phone numbers, medical plans note, FAQ, SEO titles, and Spanish/English copy there.

## Important Files

- `src/app/page.tsx` - home page
- `src/app/about/page.tsx` - doctor biography and résumé timeline
- `src/app/services/page.tsx` - medical services
- `src/app/contact/page.tsx` - contact and location details
- `src/components` - reusable UI components
- `public/assets/dr-nestor-frontera.jpg` - doctor portrait used across the site

## Notes

- The contact form is client-side only and does not submit to a backend yet.
- For medical emergencies, users should call 911 or visit the nearest emergency room.
- Keep Spanish as the primary language unless the office requests otherwise.
