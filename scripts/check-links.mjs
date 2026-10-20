// Post-build check: every internal href/src in dist/ must resolve to a file.
import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

// Static build -> dist/. If an SSR adapter is ever added, pages move to dist/client/.
const DIST = path.resolve(existsSync('dist/client/index.html') ? 'dist/client' : 'dist');
const files = [];
async function walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) await walk(p); else if (p.endsWith('.html')) files.push(p);
  }
}
await walk(DIST);

const exists = async (p) => { try { await stat(p); return true; } catch { return false; } };
const broken = [];
for (const f of files) {
  const html = await readFile(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let u = m[1];
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/.test(u)) continue;
    u = u.split('#')[0].split('?')[0];
    if (!u) continue;
    let target = path.join(DIST, decodeURIComponent(u));
    if (u.endsWith('/')) target = path.join(target, 'index.html');
    if (!(await exists(target))) broken.push(`${path.relative(DIST, f)} -> ${m[1]}`);
  }
}
console.log(`Checked ${files.length} pages.`);
if (broken.length) { console.error(`Broken links (${broken.length}):\n` + [...new Set(broken)].join('\n')); process.exit(1); }
console.log('No broken internal links.');
