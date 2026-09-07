/**
 * Run this BEFORE trusting a report. Every value in fixture/expected.json is
 * hand-computed from the WCAG formula, not recorded from this tool's output, so
 * a passing run says the instrument agrees with arithmetic rather than with
 * itself.
 *
 *   node --experimental-strip-types verify-fixture.mjs   # or just: node verify-fixture.mjs
 *   (serve ./fixture on :4590 first, e.g. python3 -m http.server 4590)
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
import { measureContrast } from './contrast.mjs';

const url = process.argv[2] || 'http://127.0.0.1:4590/';
const expected = JSON.parse(readFileSync(new URL('./fixture/expected.json', import.meta.url)));
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const p = await (await b.newContext({ viewport: { width: 900, height: 800 }, deviceScaleFactor: 2 })).newPage();
await p.goto(url, { waitUntil: 'networkidle' });
await p.waitForTimeout(300);
const got = await measureContrast(p, { dpr: 2, reportAll: true });
await b.close();

let bad = 0;
for (const [name, want] of Object.entries(expected)) {
  const hit = got.find((g) => g.text.startsWith(name.slice(0, 12)));
  const ok = hit && Math.abs(hit.ratio - want) <= 0.03;
  if (!ok) bad++;
  console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${name.padEnd(36)} want ${want.toFixed(2)}  got ${hit ? hit.ratio.toFixed(2) : 'MISSING'}`);
}
console.log(bad ? `\n  ${bad} fixture case(s) failed — do not trust a report from this build.` : '\n  fixture clean');
process.exit(bad ? 1 : 0);
