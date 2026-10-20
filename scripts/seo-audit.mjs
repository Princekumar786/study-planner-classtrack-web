// Post-build SEO audit: title/description length, one <h1>, valid JSON-LD, canonical.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = fs.existsSync('dist/client/index.html') ? 'dist/client' : 'dist';
let pages = 0, ld = 0, problems = 0;
const types = new Set();
const titles = new Map();
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) { walk(f); continue; }
    if (!f.endsWith('.html')) continue;
    pages++;
    const rel = path.relative(ROOT, f);
    const h = fs.readFileSync(f, 'utf8');
    const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const desc = (h.match(/name="description" content="([^"]*)"/) || [])[1] || '';
    const warn = (m) => { problems++; console.log(`WARN ${rel}: ${m}`); };
    if (!title || title.length > 70) warn(`title length ${title.length}`);
    if (!desc || desc.length < 70 || desc.length > 165) warn(`description length ${desc.length}`);
    if ((h.match(/<h1[\s>]/g) || []).length !== 1) warn('not exactly one <h1>');
    if (!h.includes('rel="canonical"')) warn('no canonical');
    if (titles.has(title)) warn(`duplicate title with ${titles.get(title)}`); else titles.set(title, rel);
    for (const s of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      ld++;
      try { JSON.parse(s[1])['@graph'].forEach((x) => types.add(x['@type'])); } catch { warn('invalid JSON-LD'); }
    }
  }
})(ROOT);
console.log(`SEO audit: ${pages} pages, ${ld} JSON-LD blocks, ${problems} warnings.`);
console.log(`Schema types: ${[...types].sort().join(', ')}`);
