# Advald

Acquisition infrastructure for iGaming.

Single-page credibility site. Next.js 14 (App Router) + Tailwind + TypeScript.
Static export, deployed to Vercel.

## Develop

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
# outputs to ./out
```

## Stack

- Next.js 14, App Router, static export (`output: 'export'`)
- Tailwind CSS (tokens in `tailwind.config.ts`)
- `next/font/google` — Fraunces (display) + Inter (UI)
- Plausible Analytics, loaded via `next/script`

## Structure

```
app/
  layout.tsx          fonts, analytics, meta
  page.tsx            single-page composition
  imprint/page.tsx
  privacy/page.tsx
  robots.ts
  sitemap.ts
components/
  sections/           Header, Hero, Thesis, Capabilities, Stack, WorkNote, About, Contact
  ui/                 Reveal, Eyebrow, Rule
public/
  og.png              1200x630 social card
  favicon.ico
  apple-touch-icon.png
```

## Notes

- `{{FILL IN}}` markers in `/imprint` and `/privacy` need to be completed
  before the site is shipped publicly.
- Plausible domain is configured to `advald.com` in `app/layout.tsx`.
