# Reviewkit — Full SEO Audit
**Domain:** reviewkit.gutensuite.net · **Date:** 2026-11-14 · **Pages crawled:** 8 (/, /features, /showcase, /pricing, /changelog, /contact, /docs.html, /docs/installation)
**Business type:** WordPress plugin / SaaS product marketing site (Trustpilot review widgets)

---

## SEO Health Score: **58 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 40 | 8.8 |
| Content Quality | 23% | 85 | 19.6 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 5 | 0.5 |
| Performance (CWV) | 10% | 85 | 8.5 |
| AI Search Readiness | 10% | 35 | 3.5 |
| Images | 5% | 75 | 3.8 |

---

## Executive Summary

### Top 5 critical issues
1. **Soft-404s site-wide** — every non-existent URL (e.g. `/about`, `/sitemap.xml`, `/nonexistent-xyz`) returns **HTTP 200** with the 404 page content. Google will flag these as soft 404s and crawl junk URLs indefinitely.
2. **Docs navigation broken in production** — `/docs` 301s to `/docs/`, which returns **403 Forbidden**. The primary nav and footer both link here. (`/docs.html` works, but nothing links to it.)
3. **Trailing-slash URLs return 500** — `/features/` returns a 500 Internal Server Error (Apache rewrite/.htaccess issue).
4. **No HTTP → HTTPS redirect** — `http://reviewkit.gutensuite.net/` serves 200 directly, creating a duplicate-content and security problem.
5. **No sitemap.xml** — `/sitemap.xml` serves the 404 page with a 200 status.

### Top 5 quick wins
1. Add a sitemap (Next.js `app/sitemap.js` in the static export).
2. Write unique meta descriptions per page (currently identical on all 7 pages).
3. Add JSON-LD: `SoftwareApplication`, `FAQPage` (pricing FAQ is ready-made), `Organization`.
4. Add canonical URLs + Open Graph / Twitter card tags via the Next.js Metadata API.
5. Fix the .htaccess: proper 404 status, HTTPS redirect, and `/docs/` handling.

---

## Technical SEO — 40/100

### Critical
- **Soft 404s everywhere.** Verified: `/about`, `/sitemap.xml`, `/llms.txt`, `/nonexistent-xyz-test` all return **200 + 404 page HTML**. The server serves the 404 page with a 200 status for every unknown path. Impact: index bloat, soft-404 warnings in Search Console, wasted crawl budget.
- **`/docs` → 301 → `/docs/` → 403 Forbidden.** The export produced `docs.html` plus `docs/installation.html` but no `docs/index.html`, so Apache refuses the directory request. The main nav's "Docs" link is dead for both users and crawlers. Verified: `curl -sL /docs` ends in 403.
- **`/features/` returns 500.** Any directory-style request to a real page errors (Apache rewrite issue). Also means trailing-slash duplicates aren't canonicalized — they error instead.

### High
- **No sitemap.xml** (serves 404 content with 200).
- **HTTP serves content without redirect to HTTPS** (`http://` returns 200). Split canonical signals + insecure access.

### Medium
- **No security headers at all**: no HSTS, Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, or Referrer-Policy. Only Cloudflare's NEL/report-to headers present.
- **No canonical tags** on any page (see On-Page).
- **robots.txt is Cloudflare-managed** and blocks all AI-training crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, etc.) with `ai-train=no`. Legitimate search crawlers (Googlebot, Bingbot) are allowed. No `Sitemap:` directive (moot until a sitemap exists).

### What works
- All 7 real pages return 200, fast static pages on Cloudflare CDN.
- Clean robots.txt baseline; search crawling allowed.
- `/docs/installation` resolves correctly (200).

---

## Content Quality — 85/100

### What works
- Concise, benefit-led copy with a clear value prop ("Turn your Trustpilot reviews into sales") and a 3-step how-it-works section.
- Unique, well-structured content per page: features (8 feature blocks with screenshots), pricing (4 tiers + 6-question FAQ), changelog, docs with an installation article, showcase gallery.
- Good readability: short sentences, scannable headings, no filler.
- Trust signals: "Rated 5/5 on WordPress.org · 1,000+ active sites", clear "not affiliated with Trustpilot" disclaimer.

### Gaps
- **No About/team page** — E-E-A-T is thin for a plugin asking for payment; no author or company identity anywhere.
- **Showcase is image-only** — no captions/context text; five screenshots with one-word labels.
- **Testimonials are minimal** — two one-line quotes with no names/links.
- **Thin docs section** — one article ("Installation"). Topics like shortcode usage, caching, styling are missing and are exactly what users search for.

---

## On-Page SEO — 65/100

### What works
- Unique `<title>` per page, correct pattern (`Page | Reviewkit`), good lengths.
- Exactly one `<h1>` per page; logical h2/h3 hierarchy.
- Internal linking between home/features/pricing/docs; footer nav solid.

### Issues
- **High: identical meta description on every page** — "Show your Trustpilot reviews on WordPress. No API keys, no code, no slowdowns." on all 7 pages, including Pricing and Contact. Missed opportunity for page-specific CTAs and SERP relevance.
- **High: no canonical tags** on any page — combined with the trailing-slash/HTTP duplicates above, this leaves Google to guess.
- **Medium: no Open Graph or Twitter Card tags** — links shared on social/Slack/chat render bare.
- **Low: mobile menu has a duplicated Changelog link** (appears twice).

---

## Schema / Structured Data — 5/100

**Zero JSON-LD found on any page.** Missing, in priority order:
1. **`SoftwareApplication`** (or `Product`) with offers — core schema for a plugin; enables rich results.
2. **`FAQPage`** — the Pricing page already has 6 fully written Q&As; this is copy-paste-ready schema.
3. **`Organization`** — name, logo, url, contactPoint.
4. **`BreadcrumbList`** on docs pages.
5. **`AggregateRating`** — if the 5/5 WordPress.org rating is citable, this feeds star rich results.

---

## Performance — 85/100 (lab estimates only)

- Homepage HTML is **~24 KB** — excellent. Static export, no server runtime, Cloudflare edge delivery.
- Critical woff2 font is preloaded; JS chunks loaded async.
- GTM + GA4 are the only third-party scripts, loaded after interaction — minimal impact.
- **No CrUX field data available** (site likely too low-traffic for CrUX; no API credentials configured), so CWV is lab-estimated: LCP/CLS/INP expected to pass comfortably.
- PNG screenshots are moderately heavy (badges.png 141 KB, grid.png 88 KB) — acceptable but WebP would cut them 60-80%.

---

## Images — 75/100

- **Alt text present on every content image** with descriptive wording — good.
- SVG hero (11 KB) — ideal.
- **PNG screenshots could be WebP/AVIF**: badges.png 141 KB, grid.png 88 KB, builder.png 57 KB. Full showcase page loads ~400 KB of PNGs.
- No obvious missing-alt or broken-image issues.

---

## AI Search Readiness — 35/100

- **All major AI crawlers are blocked** via Cloudflare-managed robots.txt (GPTBot, ClaudeBot, Google-Extended, CCBot, Perplexity-class bots, and `ai-train=no` content signal). This is a deliberate policy choice, but it means near-zero chance of appearing in ChatGPT/Claude/Gemini answers and AI search citations.
- **No llms.txt**.
- Content itself is highly citable: factual, structured, quotable claims ("Reviews are stored on your site and styles load only on pages that show a widget") with clear headings — this part is ready.
- Trade-off to consider: allowing AI *search/retrieval* bots (while still blocking training bots) would preserve the training opt-out while opening AI citation channels. Cloudflare's managed robots.txt can be configured per-bot.

---

## Methodology & limitations
- Crawl via HTTP fetches of all discoverable pages (8 pages, small site); robots.txt respected.
- `claude-seo` helper scripts (Playwright rendering, Lighthouse, PDF report generator) are not installed in this environment, so Core Web Vitals are lab estimates from response inspection, and no screenshots were captured.
- No Google API (CrUX/GSC/GA4) or backlink API credentials detected — those enrichments were skipped.
