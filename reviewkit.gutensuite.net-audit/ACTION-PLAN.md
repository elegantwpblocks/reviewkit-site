# Action Plan — reviewkit.gutensuite.net Prioritized: Critical → High → Medium → Low
## Phase 1: Critical fixes (immediately)
1. **Fix the 404 status code** — unknown URLs must return real HTTP 404, not 200 + 404 page.
   - If hosting via Apache `.htaccess`: use `ErrorDocument 404 /404.html` (serves 404 status), and remove any catch-all rewrite to index/404. Do not use `FallbackResource`.
2. **Fix `/docs` navigation** — the export built `docs.html` but nav links resolve to `/docs/` which 403s.
   - Quick fix: add `.htaccess` rule `RewriteRule ^docs/?$ docs.html [L]` (or set `trailingSlash: false` semantics consistently server-side), or build a `docs/index.html`.
3. **Fix trailing-slash 500s** — `/features/` etc. return 500. Audit the `.htaccess` rewrite rules; either redirect `/page/` → `/page` with 301, or internally rewrite to `page.html`.
4. **Force HTTPS** — 301 redirect `http://` → `https://` in `.htaccess` (or enable Cloudflare "Always Use HTTPS").
   ```
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## Phase 2: High-impact improvements (week 1-2)
5. **Add sitemap.xml** — in the Next.js static export, add `app/sitemap.js` exporting all 8 URLs; verify it ships to `out/sitemap.xml`.
6. **Unique meta descriptions per page** — one per page via the Metadata API; lead with page-specific value (pricing → tiers and refund policy, features → builder, docs → setup steps).
7. **Add canonical URLs** — `metadataBase` in `app/layout.js` + `alternates.canonical` per page.
8. **Add Open Graph + Twitter cards** — `openGraph` and `twitter` metadata, with `og:image` (1200×630).
9. **Add JSON-LD schema** — `SoftwareApplication` with offers, `FAQPage` from the pricing FAQ, `Organization` site-wide; `BreadcrumbList` on docs.

## Phase 3: Content & authority (month 1-2)
10. **Expand docs** — articles for shortcode usage, styling/caching, widget builder; each is a long-tail search entry point ("reviewkit shortcode", "show trustpilot reviews wordpress").
11. **Add an About page** — who builds Reviewkit, contact identity; supports E-E-A-T.
12. **Flesh out the showcase** — one short paragraph per screenshot naming the layout and use case.
13. **Strengthen testimonials** — real names, sites, or WordPress.org review links.
14. **Convert showcase/badge PNGs to WebP** (~60-80% smaller).

## Phase 4: Monitoring & iteration (ongoing)
15. **Set up Google Search Console** — submit sitemap, monitor soft-404 and crawl errors after Phase 1.
16. **Security headers** — add HSTS, X-Content-Type-Options, Referrer-Policy, X-Frame-Options (via Cloudflare or `.htaccess`).
17. **Decide AI-crawler policy** — if AI citations are wanted, allow AI *search* bots in Cloudflare's managed robots.txt while keeping training bots blocked; add `llms.txt`.
18. Remove the duplicated Changelog link in the mobile menu.
