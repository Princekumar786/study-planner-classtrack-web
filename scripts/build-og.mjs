// Builds one Open Graph image (1200x630) per guide, tool, comparison and hub page,
// so shared links on WhatsApp, X, Discord, LinkedIn etc. show the page's own title.
// Run after adding or renaming a page:  npm run og
// Output: public/og/<key>.png (committed, so Cloudflare Pages does not need sharp).
// Base.astro picks the matching image automatically from the page URL.
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// Node 24 strips TypeScript types natively, so site.ts can be imported as-is.
const { GUIDES, TOOLS, PLANNERS } = await import('../src/data/site.ts');

// compare.ts imports other modules, so read slug/title pairs from the source text.
const compareSrc = await readFile('src/data/compare.ts', 'utf8');
const COMPARE = [...compareSrc.matchAll(/slug: '([^']+)',[\s\S]*?title: '([^']+)'/g)].map((m) => ({ href: `/compare/${m[1]}/`, title: m[2] }));

const OUT = path.resolve('public/og');
await mkdir(OUT, { recursive: true });

// Must match keyFor() in src/layouts/Base.astro.
const keyFor = (href) => href.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';

const tints = { lavender: '#EAE5FA', mint: '#DFF3E7', cream: '#FBF1CE', pink: '#F9E1E4', blue: '#E1EAF6' };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Greedy word wrap for a fixed-width font size (Poppins bold averages ~0.56em per char).
function wrap(text, size, width) {
  const max = Math.floor(width / (size * 0.56));
  const lines = [];
  let line = '';
  for (const w of text.split(' ')) {
    if ((line + ' ' + w).trim().length > max) { lines.push(line.trim()); line = w; } else line += ' ' + w;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

function svg({ eyebrow, title, tint }) {
  let size = 66;
  let lines = wrap(title, size, 1000);
  while (lines.length > 4 && size > 44) { size -= 6; lines = wrap(title, size, 1000); }
  const lh = Math.round(size * 1.18);
  const startY = 250 - ((lines.length - 1) * lh) / 2 + (lines.length > 2 ? 30 : 0);
  const titleSvg = lines.map((l, i) => `<text x="80" y="${startY + i * lh}" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="${size}" font-weight="700" fill="#1B1C34">${esc(l)}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="630" fill="${tints[tint] ?? tints.lavender}" opacity="0.55"/>
  <circle cx="1110" cy="90" r="120" fill="#ffffff" opacity="0.7"/>
  <path d="M1040 520 l14 -30 l14 30 l30 14 l-30 14 l-14 30 l-14 -30 l-30 -14z" fill="#FFC94D"/>
  <text x="80" y="110" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="3" fill="#5546C9">${esc(eyebrow.toUpperCase())}</text>
  ${titleSvg}
  <rect x="80" y="520" width="56" height="56" rx="14" fill="#6C5CE7"/>
  <path d="M96 548 l9 8 l18 -18" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="156" y="560" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" fill="#1B1C34">studyplanner<tspan fill="#6C5CE7">.tech</tspan></text>
  <text x="440" y="560" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="24" fill="#3E3F5B">Free study planner tools for students</text>
</svg>`;
}

const pages = [
  ...GUIDES.map((g) => ({ href: g.href, eyebrow: `Guide · ${g.tag}`, title: g.title, tint: g.tint })),
  ...TOOLS.map((t) => ({ href: t.href, eyebrow: 'Free tool · no sign-up', title: t.title, tint: t.tint })),
  ...PLANNERS.map((p, i) => ({ href: p.href, eyebrow: 'ClassTrack app', title: `${p.label} app for students`, tint: ['lavender', 'mint', 'cream', 'pink', 'blue', 'lavender'][i] })),
  ...COMPARE.map((c) => ({ href: c.href, eyebrow: 'Comparison', title: c.title.replace(/\s*\(\d{4}\)$/, ''), tint: 'lavender' })),
  { href: '/guides/', eyebrow: 'Study guides', title: 'Research-backed study guides for students', tint: 'mint' },
  { href: '/tools/', eyebrow: 'Free tools', title: 'Free study planner tools that run in your browser', tint: 'blue' },
  { href: '/compare/', eyebrow: 'Compare', title: 'Which study planner app is right for you?', tint: 'lavender' },
  { href: '/templates/', eyebrow: 'Free printables', title: 'Printable study planner templates', tint: 'cream' },
  { href: '/pricing/', eyebrow: 'Pricing', title: 'ClassTrack: free study planner, optional Pro', tint: 'mint' },
  { href: '/features/', eyebrow: 'Features', title: 'Everything in the ClassTrack study planner app', tint: 'lavender' },
];

for (const p of pages) {
  await sharp(Buffer.from(svg(p))).png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, `${keyFor(p.href)}.png`));
}
console.log(`Built ${pages.length} OG images in public/og/.`);
