# Performance & AI Readiness Findings — reviewkit.gutensuite.net

## Performance (lab estimates; no CrUX/GSC credentials available)
- Homepage HTML ~24 KB; static export on Cloudflare edge — excellent baseline.
- woff2 font preloaded; all JS chunks async; GTM/GA4 are the only third-party scripts.
- Expected to pass LCP/CLS/INP comfortably; PNG screenshots are the only moderate cost (badges.png 141 KB, grid.png 88 KB).
- Recommendation: connect Search Console to get field data once traffic qualifies for CrUX.

## AI Search Readiness
- Cloudflare-managed robots.txt blocks all major AI crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, Perplexity-class, etc.) with `ai-train=no`.
- Consequence: minimal eligibility for AI search citations.
- Content is otherwise highly citable: factual, structured, quotable product claims.
- Option: allow AI search/retrieval bots while keeping training bots blocked; add llms.txt.
