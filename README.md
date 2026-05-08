# ARZ Health Website

Professional multilingual health tourism website for ARZ Health, built with Next.js App Router, React, Tailwind CSS, localized routes, RTL Arabic support, SEO metadata, WhatsApp CTA and a frontend-ready consultation form.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Local JSON dictionaries in `/locales`
- RTL support for Arabic
- Frontend consultation form ready for backend integration

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production check:

```bash
npm run lint
npm run build
```

## Routes

Main localized routes:

- English: `/en`, `/en/about`, `/en/services`, `/en/services/dental-treatments`, `/en/services/aesthetic-treatments`, `/en/services/hair-transplantation`, `/en/contact`
- Turkish: `/tr`, `/tr/hakkimizda`, `/tr/hizmetler`, `/tr/hizmetler/dis-tedavileri`, `/tr/hizmetler/estetik-tedaviler`, `/tr/hizmetler/sac-ekimi`, `/tr/iletisim`
- Arabic: `/ar`, `/ar/about`, `/ar/services`, `/ar/services/dental-treatments`, `/ar/services/aesthetic-treatments`, `/ar/services/hair-transplantation`, `/ar/contact`

Legal pages are also localized:

- Privacy Policy
- Terms of Use
- Medical Disclaimer

## Language System

Translations live in:

- `locales/en.json`
- `locales/tr.json`
- `locales/ar.json`

To edit site copy, update the matching JSON file. Most static page content, form labels, validation messages, SEO titles and descriptions are dictionary-driven.

Language routing and slug mapping live in:

- `src/lib/routes.ts`

Initial language detection happens in:

- `src/proxy.ts`

The proxy checks the `arz-locale` cookie first, then browser `Accept-Language`. Manual language selection stores the preference in both `localStorage` and cookie.

## WhatsApp Number

Change the WhatsApp number in:

- `src/lib/site.ts`

```ts
export const WHATSAPP_NUMBER = "905442606000";
```

Use an international number without `+`, spaces or punctuation, for example:

```ts
export const WHATSAPP_NUMBER = "905555555555";
```

The WhatsApp message can be edited in the same file.

## Brand, Contact and SEO

Main brand/contact text is in the locale files under:

- `site`
- `metadata`
- `footer`
- `contactPage`

Canonical and Open Graph base URL is in:

- `src/lib/site.ts`

```ts
export const SITE_URL = "https://arzhealth.com";
```

## Images

Placeholder visuals are stored in:

- `public/images/hero-clinic.png`
- `public/images/dental-treatment.png`
- `public/images/aesthetic-consultation.png`
- `public/images/hair-transplant-care.png`
- `public/images/istanbul-maslak.png`
- `public/images/arz-health-logo.svg`
- `public/images/before-after-placeholder.png`

Replace these files with brand-approved, optimized images using the same filenames, or update image paths in the locale files and components.

## Add a New Service Page

1. Add a new page key to `PageKey` in `src/lib/routes.ts`.
2. Add localized slugs for `en`, `tr` and `ar` in `pageSlugs`.
3. Add metadata to every locale file under `metadata`.
4. Add service content to every locale file.
5. Render the new key in `src/app/[locale]/[[...slug]]/page.tsx`.
6. Add navigation links if needed in `src/components/Header.tsx` and `src/components/Footer.tsx`.

## Form Integration Notes

The consultation form currently validates on the frontend and shows a success message. Integration points are intentionally simple:

- `src/components/ConsultationForm.tsx`

Replace the current submit handler with an API call, email service, CRM integration, Google Sheets connector or WhatsApp redirect.

Required validation currently checks:

- Full name
- Phone or WhatsApp number
- Interested treatment
- Consent checkbox

## Medical Compliance Notes

The site intentionally avoids guaranteed medical-result language. Keep future content aligned with:

- Personalized treatment planning
- Professional consultation
- Medical evaluation required
- Results may vary
- No guaranteed results or success-rate claims
