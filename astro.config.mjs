// @ts-check
import { defineConfig } from 'astro/config';

// Static site for Cloudflare Pages. Every page is pre-rendered to plain HTML,
// so search engines and AI crawlers can read all content without running JS.
export default defineConfig({
  site: 'https://studyplanner.tech',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
