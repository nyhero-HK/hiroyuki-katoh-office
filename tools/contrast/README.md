# Contrast harness

Measures text contrast on the pixels a reader actually sees, at several scroll
positions, on any URL. Built 2026-09-07 while auditing this site; kept here
because it is not specific to it.

    npm i playwright-core pngjs
    node shoot.mjs --url https://example.com/ --out lab/x --width 1440 --height 900 --steps 6
    node shoot.mjs --url ... --width 390 --height 844        # phone
    node shoot.mjs --url ... --reduced-motion

`lab/x/report.json` carries the failures, each with the worst ratio found across
the walked scroll positions and the `atY` where it happened.

## Verify the instrument first

    cd fixture && python3 -m http.server 4590 &
    node verify-fixture.mjs

Every expected value is hand-computed from the WCAG formula. A report from a
build that fails the fixture is worthless — which is not hypothetical: five
distinct measurement faults were found and fixed here, and every one of them
reported a plausible number rather than an error.

## How it measures, and why

Two screenshots: the page, and the page with every glyph made transparent.
Pixels that differ are the glyph ink; the second shot at those pixels is the
backdrop. Foreground is the computed colour resolved through a canvas — which
accepts `lab()`, `oklch()`, `color(display-p3 …)` and everything else — folded
with the effective opacity of every ancestor.

Faults this design exists to avoid, all of them observed:

| Fault | What it reported |
|---|---|
| reading `background-color` off ancestors | white heading over a photo: 1.00:1 |
| a number regex over `lab(35.6 -1.59 -10.84)` | minus signs dropped, read as sRGB |
| sampling the element's border box | a `border-l-2` accent rule read as the text's background |
| sampling the text's line box | half-leading above the cap height caught a rule sitting there |
| taking the foreground from the diff | antialiased edges drove white-on-black to 1.42:1 |
| a global ink diff | a button under the fixed nav counted the NAV's lettering as its own |

Two more that matter because they are silent:

- Text the same colour as its backdrop paints no ink. Skipping it would report
  invisible text as no failure at all, so a run that is the topmost element
  where it sits yet painted nothing is measured against the backdrop directly.
- An element animating in at opacity 0 is still hit-testable, so it is excluded
  by effective opacity rather than by hit testing.

## Known limits

- Ratios are WCAG 2.x relative luminance. It does not model APCA.
- A run is measured where it sits at the sampled scroll positions; more `--steps`
  finds more states.
- It proves legibility, never that a page is any good. Read the frames.
