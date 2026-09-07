import { chromium } from 'playwright-core';
import { measureContrast } from './contrast.mjs';
import fs from 'node:fs';
import path from 'node:path';

const arg = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i+1] : d; };
const has = (f) => process.argv.includes(f);
const URL_ = arg('--url', 'https://katoh-office-site.pages.dev');
const OUT  = arg('--out', 'lab/desktop');
const W = +arg('--width', 1440), H = +arg('--height', 900);
const STEPS = +arg('--steps', 10);

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--force-color-profile=srgb', '--font-render-hinting=none'],
});
const ctx = await browser.newContext({
  viewport: { width: W, height: H }, deviceScaleFactor: 2,
  reducedMotion: has('--reduced-motion') ? 'reduce' : 'no-preference',
  isMobile: W < 500, hasTouch: W < 500,
});
const page = await ctx.newPage();
await page.goto(URL_, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1200);

const doc = await page.evaluate(() => ({
  h: document.documentElement.scrollHeight,
  title: document.title,
  sections: [...document.querySelectorAll('section,header,footer,main>div')].map(s => ({
    tag: s.tagName.toLowerCase(),
    cls: (s.className||'').toString().slice(0,90),
    top: Math.round(s.getBoundingClientRect().top + window.scrollY),
    h: Math.round(s.getBoundingClientRect().height),
    head: (s.querySelector('h1,h2,h3')?.innerText || '').slice(0,50).replace(/\n/g,' '),
  })).filter(s => s.h > 80),
}));

const max = doc.h - H;
for (let i = 0; i < STEPS; i++) {
  const y = Math.round(max * (i / (STEPS - 1)));
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(900);   // let whileInView animations settle
  await page.screenshot({ path: path.join(OUT, `${String(i).padStart(2,'0')}-y${y}.png`) });
}

// Contrast is measured at EVERY scroll position, on real pixels, and the worst
// reading for each run is kept: a page has no single state, and a run that
// passes at one position can fail 200px later over a different backdrop.
const seen = new Map();
for (let i = 0; i < STEPS; i++) {
  const y = Math.round(max * (i / (STEPS - 1)));
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(700);
  for (const f of await measureContrast(page, { dpr: 2 })) {
    const k = f.text + '|' + f.color;
    if (!seen.has(k) || seen.get(k).ratio > f.ratio) seen.set(k, { ...f, atY: y });
  }
}
const contrast = [...seen.values()].sort((a, b) => a.ratio - b.ratio);

// type scale inventory
const type = await page.evaluate(() => {
  const m = {};
  document.querySelectorAll('p,h1,h2,h3,h4,li,span,a,button').forEach(el => {
    const t=(el.innerText||'').trim(); if(!t||el.children.length) return;
    const cs=getComputedStyle(el); const k=`${el.tagName.toLowerCase()} ${cs.fontSize} ${cs.fontWeight} ${cs.lineHeight}`;
    m[k]=(m[k]||0)+1;
  });
  return Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,22);
});

fs.writeFileSync(path.join(OUT,'report.json'), JSON.stringify({url:URL_, viewport:{W,H}, doc, contrast, type}, null, 2));
console.log(`shot ${STEPS} frames @ ${W}x${H} · page height ${doc.h}px · sections ${doc.sections.length} · contrast failures ${contrast.length}`);
console.log(doc.sections.map(s=>`  ${String(s.top).padStart(6)}  h=${String(s.h).padStart(5)}  ${s.tag.padEnd(7)} ${s.head}`).join('\n'));
await browser.close();
