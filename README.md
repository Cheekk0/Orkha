# Orkha — Website

Marketing site for Orkha: a managed website + AI inquiry-capture system for
appointment-driven service businesses. Built with **Astro (static / SSG) +
Tailwind CSS**, fully static, targeting **Vercel**.

---

## Deploy to Vercel (recommended flow)

This project is source you push to GitHub; Vercel builds it for you.

1. Push this `04-Build` folder to a GitHub repository (it becomes the repo root).
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects Astro. Confirm the defaults:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Deploy. That's it — no environment variables required.

### Run locally (needs Node 18+)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

> Node/npm were **not installed on the build machine**, so this project was
> authored but not compiled locally. It uses a standard, pinned Astro 4 +
> Tailwind 3 stack; the first `npm run build` on Vercel (or locally) produces the
> static site. If anything fails to install, delete `package-lock.json` (if any)
> and re-run `npm install`.

---

## Structure

```
src/
  layouts/Base.astro        # <head>, header, footer, org schema, fonts
  components/               # Header, Footer, Seo, Logo, SystemFlow (hero visual),
                            # Calculator, StatStrip, FaqAccordion, GhlForm, CtaBand
  pages/                    # index, pricing, about, contact, faq, privacy, 404
  lib/site.ts               # single source of truth for business facts + nav
  lib/faqs.ts               # FAQ content (also feeds FAQPage schema)
  styles/global.css         # Tailwind layers + design tokens
public/brand/               # logo, icon, wordmark, NFC card image
public/robots.txt           # AI crawlers welcomed; points to sitemap
```

Sitemap is generated automatically by `@astrojs/sitemap` at build
(`/sitemap-index.xml`).

---

## ⚠️ Build notes & decisions (please review)

These are choices made where source docs were ambiguous or silent. Adjust if needed.

1. **Production domain — assumed `https://orkha.solutions`.**
   SEO-GEO.MD listed `https://www.orkha.solutions.com`, which looks like a typo.
   Canonical URLs, sitemap, OG tags and schema all use `orkha.solutions`.
   **If the real domain differs, update it in two places:** `site:` in
   `astro.config.mjs` **and** `SITE_URL` in `src/lib/site.ts`.

2. **Phone number — used Brief.MD's `+63 962 347 3843`.**
   The three source files list three slightly different numbers
   (Brief.MD, Constraints.MD §4, SEO-GEO.MD). Constraints §3 says "use the real
   number from Brief.MD", so Brief.MD wins. Verify before launch and update
   `phoneDisplay` / `phoneHref` in `src/lib/site.ts` if wrong.

3. **The word "Leads" is avoided sitewide** (Constraints §5). Copy uses
   "inquiries / messages / customers". The SEO-GEO title tags that contained
   "Lead" were adapted to comply, since Constraints wins on conflict.

4. **Owner name & credentials were omitted.** SEO-GEO §6 asks the About page to
   state the owner's name — but it isn't in Brief.MD, and the content-integrity
   rule forbids inventing facts. Add the owner name to `src/pages/about.astro`
   when available (it also improves GEO/entity signals).

5. **OG / social share image** uses the wordmark (`/brand/orkha-wordmark.png`).
   A purpose-made 1200×630 image would look better in link previews — drop one in
   `public/brand/` and set `ogImage` in `src/components/Seo.astro`. *(gap)*

6. **No testimonials were used** — none were present in `02-Assets`, and the
   integrity rules forbid inventing them.

7. **Analytics:** none installed yet (Constraints §3). A `TODO` comment marks the
   spot in `src/components/Seo.astro`.

8. **GHL form** embed is used verbatim from Constraints §3 on Home, Pricing and
   Contact. The `form_embed.js` script handles iframe resizing.

9. **Privacy Policy** was generated as a standard page under the Philippine Data
   Privacy Act of 2012 (RA 10173). Have it reviewed by counsel before relying on
   it; update the effective date in `src/pages/privacy.astro` if edited.

10. **Fonts** are self-hosted via `@fontsource-variable` (Inter for body/UI,
    Fraunces for display) — no external font requests, per the performance budget.
