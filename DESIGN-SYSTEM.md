# Nocturne Design System — 加藤裕幸事務所 (2026-09)

The site sits on a dark ground. Type is bone, the single accent is 琥珀 amber,
and **exactly one band per page is a lit plate**. Flat surfaces, hairline rules,
sharp corners. NO gradients, NO rounded corners, NO drop-shadow blobs, NO
colored icon tiles, NO glow.

Supersedes the 2026-07 "Academic Press" system (warm washi paper / ink navy /
朱 vermillion). That palette is gone from the codebase; nothing references it.

## The rule that makes this work: colour is named by ROLE, never by hue

The 2026-07 system named colours perceptually (`washi` = paper, `ink` = navy)
and those names were written into 317 class attributes across 12 files. Every
one of them assumed a light page with dark bands, so inverting the ground broke
them silently — text stayed dark on a now-dark ground and measured 1.0:1.

So the palette is now a set of **roles**, resolved through CSS custom properties
declared in `src/index.css` and exposed to Tailwind in `tailwind.config.js`:

| Token | Role |
|---|---|
| `ground` | the page |
| `surface` / `surface-2` | lifted band, panels / close and footer |
| `line` / `line-strong` | hairline / structural rule, stat bands |
| `content` → `content-4` | headings → body → secondary → captions |
| `accent` / `accent-soft` | 琥珀; `accent-soft` is the hover and second voice |
| `accent-ink` | text sitting ON an accent fill |

Values are `R G B` triplets, so Tailwind's opacity modifiers still work
(`bg-content/10`, `border-content/40`).

⛔ **Never write a hue into markup.** `text-content-3`, not `text-slate-400`.
A future theme must be a change to the two blocks in `index.css` and nothing else.

## The plate

A section that should read as lit carries **`on-plate`** and paints itself with
`bg-ground`:

```jsx
<section className="on-plate relative py-28 md:py-40 bg-ground overflow-hidden">
```

`.on-plate` re-declares every role, so the markup inside it needs no special
casing — `text-content` is bone on the dark ground and near-black on the plate.

⛔ **A plate paints itself with `bg-ground`, not `bg-plate`.** `.on-plate` flips
every token including the ground, so `bg-plate` inside a plate resolves back to
the dark value and the band paints itself dark under its own dark text. This
cost a full round of 22 measured failures on Home alone; the harness caught it,
reading it as 1.0:1.

⚑ **One lit plate per page.** Home's is §2 (the peak); About/Services/患者教育
use their closing CTA. The footer is `surface-2`, deliberately NOT a plate — two
lit bands and neither is an event.

## Type

- `font-display` = Fraunces + Noto Serif JP (serif). Headings, numerals, wordmarks.
- `font-body` = Noto Sans JP + Manrope. Body, buttons, labels.
- Kicker above every section heading: `<p className="section-label mb-4">§N ラベル</p>`
- Japanese headlines: split into phrase spans (`titleLines` + `inline-block`) so
  熟語 never breaks across a line. See `t.cta.titleLines` / `t.services.titleLines`.

## Component classes (`index.css @layer components`)

`.panel` `.panel-hover` `.plate` `.fig-caption` `.rule-double` `.rule-fine`
`.btn-ink` `.btn-paper` `.link-editorial` `.section-label` `bg-ruled` `bg-noise`

⚑ `.btn-ink` is `bg-content text-ground` — it inverts against whatever surface it
sits on, so it is correct on the ground and on a plate without a variant.
⚑ `bg-ruled` draws from `rgb(var(--content) / 0.055)`, so the ruling follows the
surface instead of being baked as dark-on-light.

## Patterns (`src/pages/Home.jsx` is the reference implementation)

- Section headers: left-aligned, `max-w-3xl`, kicker + `text-4xl md:text-5xl`
- Lists: em-dash bullets `<span className="text-accent mr-2.5">—</span>`
- Numbered features: roman numerals in `font-display italic text-content-4`
- Stats: serif numerals in `border-y-2 border-line-strong divide-x divide-line` bands
- Catalogue rows: `divide-y divide-line border-y border-line`, 12-col grid
- Motion: framer-motion, restrained. `rise` + `stagger` with `whileInView` and
  `viewport={{ once: true }}`. NOTHING bounces, pulses, or floats.

## Section rhythm

⚑ **No device twice in a row.** §1 (panel grid) and §2 (numbered movements on the
plate) were the same 3-column grid until 2026-09; alternating the background is
not a different device.
⚑ **The close resolves on `surface-2`,** so the footer reads as a colophon rather
than the page trailing off into its own footer.

## Hard rules

- Keep ALL existing content, both `ja` and `en` objects, routes, SEO usage, props
  API (`{ language }`), and accessibility attributes intact unless told otherwise.
- Never invent statistics or claims. Facts only from existing content or the prompt.
- 加藤裕幸 — NEVER write 裕之.
- No circled numbers (①②③) — use 1. 2. 3. or I. II. III.
- JP text: generous leading (`leading-relaxed`); base size stays ≥ current.
- Buttons/links: keep pointer affordances; focus states must remain visible.

## Verification — do not ship on inspection

A page has no single state. Measure contrast on **composited pixels**, not from
the stylesheet, at several scroll positions, on every route:

```
node shoot.mjs --url <url> --out lab/x --width 1440 --height 900 --steps 6
node shoot.mjs --url <url> --out lab/m --width 390  --height 844 --steps 6
node shoot.mjs --url <url> --out lab/r --reduced-motion
```

Last full run (2026-09-07, all 8 routes × desktop + 4 × mobile + reduced-motion):
**0 contrast failures.** Then look at the frames — the harness proves legibility,
never that the page is any good.
