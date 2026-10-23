import type { APIRoute } from 'astro';
import { SITE, PLANNERS, TOOLS, GUIDES } from '../data/site';
import { COMPARISONS } from '../data/compare';

// Hand-built sitemap so lastmod/priority are explicit and no extra dependency is needed.
const pages: { path: string; priority: string; freq: string; lastmod?: string }[] = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/features/', priority: '0.8', freq: 'monthly' },
  ...PLANNERS.map((p) => ({ path: p.href, priority: '0.9', freq: 'monthly' })),
  { path: '/tools/', priority: '0.9', freq: 'monthly' },
  ...TOOLS.map((t) => ({ path: t.href, priority: '0.9', freq: 'monthly' })),
  { path: '/guides/', priority: '0.8', freq: 'weekly' },
  ...GUIDES.map((g) => ({ path: g.href, priority: '0.7', freq: 'monthly', lastmod: g.updated ?? g.date })),
  { path: '/compare/', priority: '0.7', freq: 'monthly', lastmod: '2026-10-22' },
  ...COMPARISONS.map((c) => ({ path: `/compare/${c.slug}/`, priority: '0.8', freq: 'monthly', lastmod: c.updated })),
  { path: '/templates/', priority: '0.8', freq: 'monthly', lastmod: '2026-10-22' },
  { path: '/pricing/', priority: '0.6', freq: 'monthly' },
  { path: '/about/', priority: '0.6', freq: 'yearly' },
  { path: '/faq/', priority: '0.6', freq: 'monthly' },
  { path: '/contact/', priority: '0.4', freq: 'yearly' },
  { path: '/privacy/', priority: '0.2', freq: 'yearly' },
  { path: '/terms/', priority: '0.2', freq: 'yearly' },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE.url}${p.path}</loc><lastmod>${p.lastmod ?? SITE.updated}</lastmod><changefreq>${p.freq}</changefreq><priority>${p.priority}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
