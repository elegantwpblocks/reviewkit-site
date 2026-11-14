# Technical SEO Findings — reviewkit.gutensuite.net

## Critical
- **Soft-404s site-wide**: every unknown URL returns HTTP 200 with the 404 page HTML. Verified on /about, /sitemap.xml, /llms.txt, /nonexistent-xyz-test. The static 404 page is served with a 200 status — likely a catch-all rewrite/FallbackResource in the hosting config instead of a proper ErrorDocument.
- **Docs navigation broken**: `/docs` → 301 → `/docs/` → **403 Forbidden**. Export built `docs.html` and `docs/installation.html` but no `docs/index.html`; Apache refuses the directory request. `/docs.html` works (200) but nothing links to it. Primary nav + footer both link to the broken path.
- **Trailing-slash 500s**: `/features/` returns a 500 Internal Server Error (Apache rewrite error). Slash variants of every page error rather than redirect.

## High
- **No sitemap.xml** — serves 404 content with a 200 status.
- **No HTTP→HTTPS redirect** — `http://` serves 200 directly.

## Medium
- **No security headers**: HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy all absent. Only Cloudflare NEL/report-to present.
- robots.txt is Cloudflare-managed: search crawlers allowed; AI/training bots (GPTBot, ClaudeBot, CCBot, Google-Extended, Amazonbot, etc.) disallowed; `ai-train=no`, `use=reference`. No Sitemap directive.

## What works
- All 7 real pages return 200 quickly via Cloudflare; static export is clean.
- `/docs/installation` resolves correctly (200).
