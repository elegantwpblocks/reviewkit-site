# Checkup Report — Reviewkit (reviewkit-site)

- **Mode**: `/design checkup`
- **Date**: 2026-11-14
- **Surface**: Full site — `/`, `/features`, `/showcase`, `/pricing`, `/contact`, `/docs`, `/docs/installation`, `/changelog`
- **Register**: Brand (marketing) + Learn/Explore (docs)

## Overall Score

**40 / 60** — Verdict: **BLOCK** (one HIGH standing)

## TL;DR

The site is visually intentional and consistent: one token system, real contrast discipline (every measured text pair passes WCAG AA), and the new docs/changelog pages inherit the design language cleanly. The one blocking failure is structural: below 860px the entire header nav is `display:none` with no replacement menu, so Features and Showcase become unreachable by primary navigation on mobile. Everything else is Watch-level polish.

**Primary recommendation**: restore a mobile menu (a `<details>`-based disclosure is enough at this scale), then work down the MEDIUM list — focus-ring contrast, touch targets, search-result live region.

## Vital Signs

| # | Vital | Status | Score | Evidence |
|---|---|---|---|---|
| 1 | Intentionality | Healthy | 10 | Single token system (`app/globals.css:1-8`), consistent 14px cards, `head` hero pattern reused on every page; docs sidebar and changelog tags reuse `--pro`/`--g` tints |
| 2 | Readability | Healthy | 10 | Measured contrast: `--mut #667085` on white 5.0:1, `--pro #3b36e8` on white 7.3:1, `.tag.new` 4.8:1, `.tag.fix` 4.7:1, `.pill` 6.2:1 — all pass AA; body measure capped via `.lead`/`.narrow`/`.prose` max-width |
| 3 | Usability | Watch | 5 | Docs search works with real empty state; but mobile primary nav amputated (F1); docs search input spans full 1120px container (F5) |
| 4 | Responsiveness | Watch | 5 | Grids collapse at 860px, inputs ≥16px (no iOS zoom), 320px reflow safe; but header nav hidden on mobile with no menu (F1) |
| 5 | Speed | Watch | 5 | Static export, `loading="lazy"` on media; but no `width`/`height` on any content image → CLS on load (F6) |
| 6 | Accessibility | Watch | 5 | Focus visible everywhere, `aria-current`, `aria-label` present, meaning never color-only; but focus ring 2.6:1 (F2), sub-44px targets (F3), search results not announced (F4) |

## Findings

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Layout / Responsive | `app/globals.css:353-355` | `@media(max-width:860px){ .nav nav { display:none } }` with no menu replacement | Add a mobile disclosure (e.g. `<details className="mobilemenu">` in the header) exposing Features, Showcase, Pricing, Docs, Contact below 860px | A path desktop users can walk, mobile users cannot. Features and Showcase become unreachable from primary navigation on phones; footer only partially compensates |
| 2 | MEDIUM | Accessibility | `app/globals.css:97-103` | `outline: 3px solid var(--g)` (#00b67a on white ≈ 2.6:1) | Darken the ring to ≈ `#00875a` (≈ 4.0:1) or pair green with a 1px ink ring | Focus indicator is visible but below the 3:1 non-text contrast minimum |
| 3 | MEDIUM | Accessibility / Interaction | `app/globals.css:63-67` (`.nav a`), `app/globals.css:397-403` (`.docnav a`), `app/layout.js:12,14` (header/footer links) | Header nav links ≈ 24px tall; `.docnav a` ≈ 40px tall | Raise padding/hit area to reach 44×44px minimum (e.g. `.docnav a` padding 12px, header links `padding:10px 0`) | Touch targets mis-tap on phones; docs sidebar is the primary docs navigation |
| 4 | MEDIUM | Accessibility | `components/docs.js:47-49` | Empty-state block rendered with no live region | Wrap the result region (or a visually hidden status line) in `aria-live="polite"` | Search filtering is completely silent for screen reader users; they cannot tell results changed |
| 5 | MEDIUM | Layout | `components/docs.js:26` + `app/globals.css:361-366` | `.search input` at `width:100%` inside the 1120px `.wrap` | Cap the search field at ~640px (`max-width:640px`) | A 1072px-wide input exceeds any comfortable scan distance; placeholder and results read in different worlds |
| 6 | MEDIUM | Speed | `app/page.js:5` (hero.svg), `components/ui.js:3` (`.shot`), `app/docs/installation/page.js:24` (5 remote screenshots) | `<img>` without `width`/`height` attributes | Add intrinsic width/height (or aspect-ratio) to every content image | Layout shifts as images load; docs article shifts repeatedly while 5 remote screenshots stream in |
| 7 | LOW | Accessibility | `app/layout.js:12,14` | Two unlabeled `<nav>` landmarks | `aria-label="Primary"` / `aria-label="Footer"` | Screen readers announce two identical "navigation" landmarks |
| 8 | LOW | Accessibility | `app/globals.css:97-103` | Focus rule covers `.btn, summary, input, textarea` only; links fall back to UA defaults | Extend selector with `a:focus-visible` | Focus treatment inconsistent across the exact elements docs/changelog navigation depends on |
| 9 | MEDIUM | Writing | `data.json:8` | `"email": "support@example.com"` placeholder on the Contact page | Set the real support address | A dead support email on the support page breaks the promise the page exists to make |

## Considered but Rejected

| Location | Candidate | Rejected because |
|---|---|---|
| `.tag.fix` / `.tag.new` (12px text on tint) | Bump tag text size for contrast | Both measure 4.7–4.8:1, above the 4.5:1 AA threshold; changing adds noise for no violation |
| `.docnav a.on` active state | Add an icon or bar beside the tint | `aria-current="page"` is present and the tint differs in lightness, not hue alone |
| Home hero h1 `clamp(36px, 5vw, 58px)` | Reduce minimum size for 320px | "Turn your Trustpilot reviews into sales." reflows cleanly at 36px on 320px; no overflow |
| Changelog `<time>` without `datetime` attr | Add machine-readable dates | Zero task or assistive impact at this scale; not worth the churn |
| `.card.hl` 2px `--pro` border on featured plan | Differentiate further | Distinguished by border weight, position, and the pill; passes squint test |

## Verification

**Ran and passed / observed:**
- Read every page, component, and all 559 lines of `app/globals.css`
- `bun run build` — compiles clean, 11 routes exported statically
- Contrast math on 6 token/background pairs (all pass AA, see Vital 2)
- Grep of static export: search input has `aria-label`, sidebar links carry `aria-current="page"`, changelog tags render with text labels, 5 article images present
- Input font sizes ≥16px site-wide (no iOS Safari zoom trigger)
- Motion audit: no animations/autoplaying media exist, so no `prefers-reduced-motion` violation is possible today

**Not verified:**
- Real-browser rendering at 320/375/768/1024/1440px (agent-browser not installed on this machine) — mobile nav finding is from source, which is unambiguous
- Measured CLS numbers (finding based on missing intrinsic dimensions, the standard cause)
- Screen reader pass (NVDA/VoiceOver walk-through)
- Touch-device interaction

## Prescriptions (in order)

1. **F1 (HIGH)** — Mobile menu. Layout discipline owns it: the breakpoint must adapt, not amputate. Smallest honest fix: a `<details>` disclosure in `.nav` that renders the four nav links under 860px.
2. **F2, F3, F4 (MEDIUM, Accessibility)** — One pass: darker focus ring, 44px targets on nav/sidebar links, `aria-live` on search results. Run `/design a11y` to apply all three together.
3. **F5, F6 (MEDIUM)** — Search measure cap + image dimensions. Run `/design responsive` or `/design finish`.
4. **F9 (MEDIUM, Writing)** — Replace the placeholder email in `data.json`.

## Verdict

**Block** — F1 (mobile navigation amputation) is HIGH on sight. Fix it before shipping; the rest is contained Watch-level work.
