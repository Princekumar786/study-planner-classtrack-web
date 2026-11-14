import type { APIRoute } from 'astro';
import { SITE, PLANNERS, TOOLS, GUIDES } from '../data/site';
import { COMPARISONS } from '../data/compare';

// llms.txt: a plain-Markdown map of the site for LLMs and AI agents (llmstxt.org).
export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE.url}${p}`;
  const body = `# studyplanner.tech

> Free study planner tools and research-backed study guides for high school, college and university students worldwide, by the makers of ClassTrack, a study planner app for students in any country on Android and the web (class timetable with AI import from photo/PDF, homework and assignment planner, exam countdowns, AI study plans, grades and GPA).

Key facts (checked against the app code on ${SITE.updated}):
- App: ClassTrack ("ClassTrack: Study & Attendance") on Google Play: ${SITE.playUrl} (package ${SITE.playId}). iPhone app: coming soon.
- Web app: ${SITE.webUrl} (launched 2026-11-14). Log in with the same Google or email account as the Android app; data syncs both ways. Runs in Chrome, Edge, Safari and Firefox on Windows, Mac, Chromebook, iPhone and iPad. On a wide window it has a desktop layout: sidebar, Ctrl K search, a week calendar, a task list with a side editor, and the AI assistant (Ask Kiro) as a side panel. Reminders and widgets are phone-only. Guide: ${u('/guides/classtrack-web-app/')}
- Price: free. The free plan includes the timetable, tasks, homework, exam countdowns, grades, habits and reminders, plus ${SITE.free.aiMessages} AI assistant messages per month, ${SITE.free.timetableScans} AI timetable scans and ${SITE.free.learningPlans} AI learning plans. ClassTrack Pro (Google Play subscription; local price shown in app) makes AI unlimited and adds notes and flashcards, daily Google Calendar and Tasks import (write-back to Google Calendar is not available yet), PDF/CSV/calendar export, daily agenda, insights, semester wrap-up with SGPA/CGPA, quiet hours and custom colours.
- AI: Google Gemini, called through ClassTrack's own backend.
- Web tools: run fully in the browser, no account, nothing uploaded.
- Founder and author: ${SITE.author.name} (${SITE.author.site}). Contact: ${SITE.email}.
- Related site: ${SITE.appSite} (the app's original website).

## Planners
${PLANNERS.map((p) => `- [${p.label}](${u(p.href)}): ${p.desc}`).join('\n')}
- [All features](${u('/features/')}): every ClassTrack feature and what is free

## Free tools
${TOOLS.map((t) => `- [${t.title}](${u(t.href)}): ${t.desc}`).join('\n')}

## Guides
${GUIDES.map((g) => `- [${g.title}](${u(g.href)}): ${g.desc}`).join('\n')}

## Comparisons (competitor facts linked to official sources)
${COMPARISONS.map((c) => `- [${c.title}](${u(`/compare/${c.slug}/`)}): ${c.description}`).join('\n')}
- [Free printable study planner templates](${u('/templates/')}): weekly and daily planners, exam revision tracker, assignment tracker, semester calendar.

## Known limits of ClassTrack (as of ${SITE.updated})
- Native apps: Android only; iPhone app coming soon. The web app works on iPhone in Safari, but cannot send reminders.
- No rotating timetables (Week A/B or Day 1–6 cycles) yet.
- Google Calendar: daily import only (Pro); writing back to Google Calendar is not available yet.
- App language: English.

## Company
- [About and editorial policy](${u('/about/')})
- [Pricing: Free vs Pro](${u('/pricing/')})
- [FAQ](${u('/faq/')})
- [Contact](${u('/contact/')})

## Optional
- [Privacy policy](${u('/privacy/')})
- [Terms of use](${u('/terms/')})
- [Sitemap](${u('/sitemap.xml')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
