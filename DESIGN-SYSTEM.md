# Academic Press Design System — 加藤裕幸事務所 (2026-07 redesign)

The site now reads like a beautifully typeset academic monograph: cream paper,
ink-navy text, serif display type, and a single loud accent — 朱 (vermillion).
Flat surfaces, hairline rules, sharp corners. NO gradients, NO rounded corners,
NO drop-shadow blobs, NO colored icon tiles.

## Tokens (tailwind.config.js)

- Background: `bg-washi-50` (page), `bg-white` (alternating sections/panels), washi-100..400 deeper paper
- Text: `text-ink-900` headings (default via h1-h6), `text-ink-800` body (default), `text-ink-600` secondary, `text-ink-500`/`ink-400` captions/muted
- Accent: `shu-500` (#C73E3A 真朱) — links, kickers, active states, seal. Use SPARINGLY.
- Fine gold: `kin-300`/`kin-500` — rare hairline ornaments only
- Dark band sections/footer: `bg-ink-900` with `text-washi-50/100`, muted `text-ink-200/300`
- Legacy `neo-*`, `text-gradient`, `card-glow` are DEPRECATED — remove all uses.

## Type

- `font-display` = Fraunces + Noto Serif JP (serif). All headings, big numerals, wordmarks.
- `font-body` = Noto Sans JP + Manrope. All body copy, buttons, labels.
- Kicker above every section heading: `<p className="section-label mb-4">§N ラベル</p>`
  (section-label = small bold tracking-label uppercase vermillion)
- Japanese headlines: control line breaks with `inline-block` spans per phrase so
  particles (を、に、う) never orphan onto their own line.

## Component classes (index.css @layer components)

- `.panel` white card w/ ink hairline border; add `.panel-hover` for lift + hard offset shadow
- `.plate` photo mounted on washi mat w/ ink frame + hard paper shadow; caption: `.fig-caption` ("Fig. N — …")
- `.hanko` vermillion seal stamp (rotated square, serif chars) — use sparingly (nav, footer, hero, CTA)
- `.rule-double` thick-thin journal rule (section closes, masthead)
- `.rule-fine` hairline washi rule
- `.btn-ink` dark slab primary button; `.btn-paper` outlined secondary; both get hard offset shadow on hover
- `.link-editorial` ink text w/ vermillion underline, thickens on hover
- `.section-label` vermillion small-caps kicker
- `bg-ruled` faint notebook ruling (hero backdrops); `bg-noise` subtle paper grain

## Patterns (see src/pages/Home.jsx — the reference implementation)

- Section headers: left-aligned, max-w-3xl, kicker + `text-4xl md:text-5xl font-display font-bold`
- Lists: em-dash bullets `<span className="text-shu-500 mr-2.5">—</span>`, or `¶` pilcrow markers
- Numbered features: roman numerals set in `font-display italic` washi-400 or shu-500 (I. II. III. / i. ii. iii.)
- Stats: big serif numerals inside `border-y-2 border-ink-900 divide-x divide-washi-300` table bands
- External links show `↗`, internal CTAs `→`
- Catalogue rows (§3 Home): `divide-y divide-washi-300 border-y border-washi-300`, 12-col grid rows,
  hover `hover:bg-white` when linked
- Motion: framer-motion, restrained. `rise` (opacity 0/y:24 → visible, 0.6s easeOut) + `stagger`
  (staggerChildren 0.12) with `whileInView` + `viewport={{ once: true }}`. NOTHING bounces, pulses, or floats.
- Dark CTA band: `bg-ink-900` + `bg-noise` overlay, white serif headline, paper button that turns vermillion on hover.

## Hard rules

- Keep ALL existing content, both `ja` and `en` objects, routes, SEO component usage, props API
  (`{ language }`), and accessibility attributes intact unless told otherwise.
- Never invent statistics or claims. Facts only from existing content or the task prompt.
- 加藤裕幸 — NEVER write 裕之.
- No circled numbers (①②③) anywhere — use 1. 2. 3. or I. II. III.
- JP text: generous leading (`leading-relaxed`), base size stays ≥ current (elderly readers).
- Buttons/links: keep pointer affordances; focus states must remain visible.
