# studyplanner.tech

SEO / AI-search marketing site for the **ClassTrack** study planner app. Static Astro site (40 pages), hosted on Cloudflare Pages.

## What is in it

| Area | Pages |
|---|---|
| Home | `/` |
| Keyword landing pages | `/student-planner/`, `/schedule-planner/`, `/timetable-app/`, `/ai-study-planner/`, `/exam-planner/`, `/homework-planner/`, `/features/` |
| Free tools (run in browser) | `/tools/` + study plan generator, timetable maker (print + .ics), exam countdown, Pomodoro timer, assignment planner, GPA/SGPA/CGPA, CGPA ↔ %, attendance calculator |
| Guides (cited research) | `/guides/` + 11 articles (`/blog` redirects here) |
| Printable templates | `/templates/`: weekly, daily, exam revision, assignments, semester (each prints on its own page) |
| Comparisons | `/compare/` + ClassTrack vs MyStudyLife, ClassTrack vs Power Planner |
| Trust | `/about/` (author + editorial policy), `/pricing/`, `/faq/`, `/contact/`, `/privacy/`, `/terms/`, 404 |
| Crawlers & AI | `/sitemap.xml`, `/robots.txt` (AI bots allowed), `/llms.txt`, JSON-LD on every page, one share image per page in `public/og/` |

Content and links live in `src/data/site.ts` (tools, guides, nav), `src/data/landings.ts` and `src/data/compare.ts`. The sitemap, llms.txt, footer and hubs are generated from them. **Add a new page there once and it appears everywhere.**

App facts (free limits etc.) are in `SITE.free` in `site.ts`. If the app limits change, update that file. Competitor facts in `compare.ts` must come from the competitor's official pages; re-check them every quarter.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds dist/, then checks links + SEO (titles, h1, JSON-LD)
npm run og         # rebuild share images in public/og/ (after adding or renaming a page)
npm run images     # rebuild screenshots/icons from ../Attendence App (only when they change)
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → choose the repo.
3. Build settings: Framework **Astro**, build command `npm run build`, output directory `dist`. Under environment variables, set `NODE_VERSION` = `22`.
4. Custom domains → add `studyplanner.tech` and `www.studyplanner.tech`.
5. Rules → Redirect Rules: redirect `www.studyplanner.tech/*` → `https://studyplanner.tech/${1}` (301).
6. Optional: Web Analytics → enable for the site (cookie-free; already allowed by the CSP in `public/_headers`).

Or from this folder without Git: `npm run build` then `npx wrangler pages deploy dist --project-name studyplanner`.

## After launch (to get ranking)

1. **Google Search Console** and **Bing Webmaster Tools**: add the domain and submit `https://studyplanner.tech/sitemap.xml`. Bing feeds ChatGPT search and Copilot.
2. Link from the app's Play Store listing (website field) and from classtracks.app to studyplanner.tech, and back.
3. Fix these on classtracks.app, because they hurt trust (E-E-A-T): "4.8 · loved by **0** students", counters showing 0, testimonials that are not real reviews, "20 AI messages" (the app code says **10**), and "Focus timer" (no button opens it in the app).
4. To avoid two sites competing for the same keywords, point classtracks.app's planner-type pages to the matching pages here, or keep classtracks.app for brand and attendance searches only.
5. Publish one new guide every 1–2 weeks (copy any file in `src/pages/guides/`, then add it to `GUIDES` in `site.ts` and run `npm run og`).
6. Once real Play ratings exist, add them to `appSchema()` in `src/lib/schema.ts` as `aggregateRating`. Only use real numbers.
