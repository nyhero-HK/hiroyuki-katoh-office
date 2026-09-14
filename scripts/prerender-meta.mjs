/**
 * Per-route <head> for a SPA on Cloudflare Pages.
 *
 * The app renders its own <title>/<meta> through React 19 hoisting, which only
 * happens in a browser. Crawlers (LinkedIn, Slack, Google) run no JS and see
 * whatever dist/index.html carries — so before this script existed every route
 * shared the home page's tags, and og:url said "/" no matter which page was
 * shared. LinkedIn refused to build a preview for /advisory because of it.
 *
 * This writes dist/<route>/index.html for each route with that route's own
 * head. _redirects still catches everything else, so client-side routing is
 * untouched; the crawler just gets a real file first.
 *
 * The route table below must stay in step with src/App.jsx — the build fails
 * if App.jsx grows a route that has no metadata here, rather than shipping
 * another page with the wrong tags.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://katoh-office-site.pages.dev';

// Japanese copy, because the app boots in Japanese. Mirrors the <SEO> props on
// each page; if you change one, change the other.
const ROUTES = {
  '/': {
    title: '加藤裕幸事務所 — 医療教育・患者教育プラットフォーム | Katoh Office',
    description:
      '医療教育コンサルティング・患者教育プラットフォーム・SCS臨床サポート。25年以上の臨床経験とAI技術を融合した医療教育サービスを提供します。',
    image: '/og-default.png',
  },
  '/about': {
    title: '事務所について | 加藤裕幸事務所',
    description:
      '整形外科医・医学教育学教授 加藤裕幸の経歴と、加藤裕幸事務所の活動について。',
    image: '/og-default.png',
  },
  '/services': {
    title: 'サービス | 加藤裕幸事務所',
    description:
      '医学教育コンサルティング、教育テクノロジー開発、SCS臨床サポート。医療機関と医療従事者の成長をサポートします。',
    image: '/og-default.png',
  },
  '/advisory': {
    title: 'アドバイザリー | 加藤裕幸事務所',
    description:
      '脊椎・脊髄外科と脊髄刺激療法の臨床から、医療機器企業・投資家・研究機関に助言します。日本での臨床採用、医師教育、評価設計。',
    image: '/og-advisory.png',
  },
  '/patient-education': {
    title: '患者教育 | 加藤裕幸事務所',
    description:
      '脊椎疾患・骨粗鬆症の患者教育サイトを運営しています。scs-for-lcs.com、no-porosis.com、porosis-care。',
    image: '/og-default.png',
  },
  '/support': {
    title: 'お問い合わせ | 加藤裕幸事務所',
    description: '加藤裕幸事務所へのご相談・お問い合わせはこちらから。',
    image: '/og-default.png',
  },
  '/privacy-policy': {
    title: 'プライバシーポリシー | 加藤裕幸事務所',
    description: '加藤裕幸事務所のプライバシーポリシー。',
    image: '/og-default.png',
  },
  '/terms-of-service': {
    title: '利用規約 | 加藤裕幸事務所',
    description: '加藤裕幸事務所の利用規約。',
    image: '/og-default.png',
  },
  '/specified-commercial-transaction': {
    title: '特定商取引法に基づく表記 | 加藤裕幸事務所',
    description: '特定商取引法に基づく表記。',
    image: '/og-default.png',
  },
};

// --- guard: every route in App.jsx must have metadata here ---------------
const app = readFileSync(join(root, 'src/App.jsx'), 'utf8');
const declared = [...app.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
const missing = declared.filter((p) => !(p in ROUTES));
if (missing.length) {
  console.error(
    `prerender-meta: these routes exist in App.jsx but have no metadata:\n  ${missing.join('\n  ')}\n` +
      'Add them to ROUTES in scripts/prerender-meta.mjs.'
  );
  process.exit(1);
}

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const template = readFileSync(join(dist, 'index.html'), 'utf8');

const headFor = (route, meta) => {
  // Cloudflare Pages serves dist/<route>/index.html at "/<route>/" and 308s the
  // slashless form to it. og:url and canonical must name the URL that actually
  // answers 200, or the crawler sees the address it fetched and the address the
  // page claims disagree — which is what made LinkedIn give up the first time.
  const url = `${SITE}${route === '/' ? '/' : `${route}/`}`;
  const image = `${SITE}${meta.image}`;
  return `    <title>${escape(meta.title)}</title>
    <meta name="description" content="${escape(meta.description)}" />
    <link rel="canonical" href="${url}" />

    <!-- Open Graph -->
    <meta property="og:title" content="${escape(meta.title)}" />
    <meta property="og:description" content="${escape(meta.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:site_name" content="加藤裕幸事務所 | Katoh Office" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(meta.title)}" />
    <meta name="twitter:description" content="${escape(meta.description)}" />
    <meta name="twitter:image" content="${image}" />`;
};

// Everything from the built index.html between <title> and the last twitter
// tag is page-specific; the rest (charset, favicon, theme colour, the bundle
// script tags Vite injected) is shared and must survive verbatim.
const START = '    <title>';
const END = '</head>';

for (const [route, meta] of Object.entries(ROUTES)) {
  const startIdx = template.indexOf(START);
  const endIdx = template.indexOf(END);
  if (startIdx === -1 || endIdx === -1) {
    console.error('prerender-meta: could not locate the head block in dist/index.html.');
    process.exit(1);
  }

  // Keep anything after the old meta block that is not a meta/title/canonical
  // tag — favicon links, theme-color, and Vite's injected assets.
  const oldHead = template.slice(startIdx, endIdx);
  const keep = oldHead
    .split('\n')
    .filter(
      (line) =>
        !/<title>|<meta name="description"|<link rel="canonical"|<meta property="og:|<meta name="twitter:/.test(line) &&
        !/^\s*<!-- (Open Graph|Twitter Card) -->\s*$/.test(line)
    )
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');

  const html = template.slice(0, startIdx) + headFor(route, meta) + '\n' + keep + template.slice(endIdx);

  const outDir = route === '/' ? dist : join(dist, route);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  console.log(`prerender-meta: ${route} -> ${route === '/' ? 'index.html' : `${route}/index.html`}`);
}

console.log(`prerender-meta: wrote ${Object.keys(ROUTES).length} routes`);
