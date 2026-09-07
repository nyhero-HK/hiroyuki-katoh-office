import { PNG } from 'pngjs';

/**
 * Contrast measured on the pixels the reader actually sees.
 *
 * Two screenshots: the page as it is, and the page with every glyph made
 * transparent. Pixels that differ between them ARE the glyph ink; the second
 * shot at those same pixels IS the backdrop behind it. Nothing is parsed, and
 * nothing is inferred from the DOM.
 *
 * That matters because each earlier approach failed silently rather than
 * erroring, and each produced a plausible number:
 *
 *   - reading `background-color` off ancestors returned white for text over a
 *     background IMAGE, so white headings on a photo measured 1.00:1;
 *   - a number regex over `lab(35.6337 -1.58697 -10.8425)` dropped the minus
 *     signs and read it as sRGB — 8 of 13 "failures" on one site were that;
 *   - sampling the element's border box measured a `border-l-2` accent rule as
 *     if text sat on it;
 *   - sampling the text's LINE box still caught the half-leading above the cap
 *     height, where a decorative rule happened to sit.
 *
 * The diff has no such failure mode: text hidden behind a fixed header does not
 * differ between the two shots, so it contributes no pixels and is excluded
 * without anyone naming the header.
 */

const HIDE_INK = `*,*::before,*::after{
  color:transparent!important;
  -webkit-text-fill-color:transparent!important;
  text-shadow:none!important;
  text-decoration-color:transparent!important;
  caret-color:transparent!important;
}`;

// how different a pixel must be between the two shots to count as glyph ink
// rather than as an antialiased edge
const INK_DELTA = 40;

export async function measureContrast(page, { dpr = 2, reportAll = false } = {}) {
  const items = await page.evaluate(() => {
    const SEL = 'p,h1,h2,h3,h4,h5,h6,a,li,span,button,td,th,figcaption,label,dt,dd,strong,em,small,time';
    const out = [];
    document.querySelectorAll(SEL).forEach((el) => {
      const t = (el.innerText || '').trim();
      if (!t) return;
      if ([...el.children].some((c) => (c.innerText || '').trim())) return;   // leaf runs only
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none') return;
      const rng = document.createRange();
      rng.selectNodeContents(el);
      const rects = [...rng.getClientRects()]
        .filter((r) => r.width > 2 && r.height > 2 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth)
        .map((r) => {
          const onTop = [[r.x + r.width / 2, r.y + r.height / 2], [r.x + 3, r.y + r.height / 2], [r.right - 3, r.y + r.height / 2]]
            .some(([x, y]) => {
              if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) return false;
              const hit = document.elementFromPoint(x, y);
              return !!hit && (hit === el || el.contains(hit));
            });
          return { x: r.x, y: r.y, w: r.width, h: r.height, onTop };
        });
      rng.detach?.();
      if (!rects.length) return;
      const px = parseFloat(cs.fontSize);
      const weight = +cs.fontWeight || 400;
      // resolve the colour through a canvas: it accepts lab(), oklch(),
      // color(display-p3 ...) and every other syntax and hands back sRGB,
      // where a regex over the string silently drops minus signs
      const cv = document.createElement('canvas'); cv.width = cv.height = 1;
      const cx2 = cv.getContext('2d', { willReadFrequently: true });
      cx2.clearRect(0, 0, 1, 1); cx2.fillStyle = '#000'; cx2.fillStyle = cs.color;
      cx2.fillRect(0, 0, 1, 1);
      const cd = cx2.getImageData(0, 0, 1, 1).data;
      let alpha = cd[3] / 255, an = el;
      while (an && an !== document.documentElement) { alpha *= +getComputedStyle(an).opacity; an = an.parentElement; }
      // An element animating in at opacity 0 is still hit-testable, so the
      // no-ink branch would otherwise report it as invisible text rather than
      // as text that has not arrived yet. Three such reports came from the
      // pinned cards before they fly in.
      if (alpha < 0.08) return;
      out.push({ text: t.slice(0, 46).replace(/\s+/g, ' '), rects, px, weight,
                 large: px >= 24 || (px >= 18.66 && weight >= 700), color: cs.color,
                 fg: [cd[0], cd[1], cd[2]], alpha });
    });
    return out;
  });
  if (!items.length) return [];

  const withInk = await page.screenshot({ type: 'png' });
  const handle = await page.addStyleTag({ content: HIDE_INK });
  await page.waitForTimeout(150);
  const noInk = await page.screenshot({ type: 'png' });
  await handle.evaluate((el) => el.remove());
  await page.waitForTimeout(60);

  const A = PNG.sync.read(withInk), B = PNG.sync.read(noInk);
  const lum = (r, g, b) => {
    const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (L1, L2) => (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

  const out = [];
  const near = (a, b, tol) => Math.abs(a[0] - b[0]) <= tol && Math.abs(a[1] - b[1]) <= tol && Math.abs(a[2] - b[2]) <= tol;
  for (const it of items) {
    const need = it.large ? 3.0 : 4.5;
    let worst = Infinity, worstBg = null, worstFg = null, ink = 0;
    // The ink diff is taken over the WHOLE page, so a rect that overlaps another
    // element's glyphs counts those as its own. A button entirely under the
    // fixed nav reported 202 ink pixels that were the nav's lettering, and read
    // as dark-on-dark at 1.00:1 while being, in fact, invisible. So: drop rects
    // where this element is not the topmost thing painted, and accept a pixel
    // as this run's ink only if its colour matches this run's own.
    for (const r of it.rects.filter((q) => q.onTop)) {
      const x0 = Math.max(0, Math.floor(r.x * dpr)), y0 = Math.max(0, Math.floor(r.y * dpr));
      const x1 = Math.min(A.width, Math.ceil((r.x + r.w) * dpr)), y1 = Math.min(A.height, Math.ceil((r.y + r.h) * dpr));
      for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
        const i = (A.width * y + x) << 2;
        const d = Math.max(Math.abs(A.data[i] - B.data[i]),
                           Math.abs(A.data[i + 1] - B.data[i + 1]),
                           Math.abs(A.data[i + 2] - B.data[i + 2]));
        if (d < INK_DELTA) continue;                       // not glyph ink
        const bgp = [B.data[i], B.data[i + 1], B.data[i + 2]];
        const mine = [0, 1, 2].map((k) => it.fg[k] * it.alpha + bgp[k] * (1 - it.alpha));
        if (!near([A.data[i], A.data[i + 1], A.data[i + 2]], mine, 28)) continue;   // someone else's glyph
        ink++;
        // The diff LOCATES the ink; it must not supply the foreground colour.
        // An antialiased edge pixel is a blend of glyph and backdrop, so reading
        // it as the text colour drives every ratio toward 1.0 — measured 1.42
        // for white-on-black, which is the giveaway. Foreground is the resolved
        // computed colour, composited at its effective alpha over this backdrop.
        const c = ratio(lum(mine[0], mine[1], mine[2]), lum(bgp[0], bgp[1], bgp[2]));
        if (c < worst) { worst = c; worstBg = `rgb(${bgp.join(',')})`; worstFg = `rgb(${mine.map(Math.round).join(',')})`; }
      }
    }
    // A run with no ink is either occluded / off-screen, or the SAME COLOUR as
    // what is behind it. Those are opposite facts with an identical signature,
    // and skipping both is how an invisible heading reports as no failure at
    // all. So a run that is the topmost element where it sits, yet painted
    // nothing, is measured against the backdrop directly and reported.
    if (ink < 12) {
      const vis = it.rects.filter((r) => r.onTop);
      if (!vis.length) continue;
      for (const r of vis) {
        const x0 = Math.max(0, Math.floor(r.x * dpr)), y0 = Math.max(0, Math.floor(r.y * dpr));
        const x1 = Math.min(B.width, Math.ceil((r.x + r.w) * dpr)), y1 = Math.min(B.height, Math.ceil((r.y + r.h) * dpr));
        for (let y = y0; y < y1; y += 2) for (let x = x0; x < x1; x += 2) {
          const i = (B.width * y + x) << 2;
          const bg = [B.data[i], B.data[i + 1], B.data[i + 2]];
          const fg = [0, 1, 2].map((k) => it.fg[k] * it.alpha + bg[k] * (1 - it.alpha));
          const c = ratio(lum(fg[0], fg[1], fg[2]), lum(bg[0], bg[1], bg[2]));
          if (c < worst) { worst = c; worstBg = `rgb(${bg.join(',')})`; worstFg = `rgb(${fg.map(Math.round).join(',')})`; }
        }
      }
      if (worst === Infinity) continue;
      if (reportAll || worst < need) {
        out.push({ text: it.text, ratio: +worst.toFixed(2), need, px: +it.px.toFixed(1), weight: it.weight,
                   color: it.color, rendered: worstFg, on: worstBg, inkPx: 0, note: 'no ink painted' });
      }
      continue;
    }
    if (worst === Infinity) continue;
    if (reportAll || worst < need) {
      out.push({ text: it.text, ratio: +worst.toFixed(2), need, px: +it.px.toFixed(1),
                 weight: it.weight, color: it.color, rendered: worstFg, on: worstBg, inkPx: ink });
    }
  }
  return out.sort((a, b) => a.ratio - b.ratio);
}
