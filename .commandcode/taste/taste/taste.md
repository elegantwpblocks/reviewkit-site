# Taste
- API keys and secrets must come from environment variables, never be hardcoded in source. Confidence: 0.8
- The user's sites deploy to plain static shared hosting (Apache, no Node.js server) — keep builds as pure static exports (e.g., Next.js `output: 'export'`) and avoid features that require a server runtime (API routes, server-side env vars). Confidence: 0.9
- On that static hosting, the user prefers site configuration values (endpoints, form access keys, recipient addresses) stored raw in the code (e.g., `data.json`) rather than in environment variables or `.env` files. Confidence: 0.8
- Keep structured page content (e.g., changelog releases, nav items) in the central `data.json` rather than hardcoded inside page components — the user had inline changelog data moved there. Confidence: 0.7
- Save final deliverables (reports, audit outputs) to `~/Documents` — the user's preferred location for finished outputs, not just the working project folder. Confidence: 0.7
- Do not add `width`/`height` attributes to `<img>` tags — the user explicitly had them stripped from all images (hero, badges, screenshots, docs) even after the CLS/layout-shift tradeoff was flagged. Confidence: 0.75
