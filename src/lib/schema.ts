import { SITE } from '../data/site';

export type QA = { q: string; a: string };

const strip = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const faqSchema = (items: QA[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: strip(i.a) } })),
});

export const appSchema = () => ({
  '@type': 'MobileApplication',
  '@id': `${SITE.url}/#app`,
  name: 'ClassTrack: Study & Attendance',
  alternateName: 'ClassTrack',
  operatingSystem: 'Android',
  applicationCategory: 'EducationalApplication',
  applicationSubCategory: 'Study planner',
  description: 'Study planner app for students with a class timetable, AI timetable import from a photo or PDF, exam countdowns, homework and assignment planner, AI study plans, notes, flashcards, grades and GPA.',
  url: `${SITE.url}/`,
  downloadUrl: SITE.playUrl,
  installUrl: SITE.playUrl,
  image: `${SITE.url}/icon-512.png`,
  screenshot: [`${SITE.url}/img/screen-planner.webp`, `${SITE.url}/img/screen-schedule.webp`, `${SITE.url}/img/screen-tasks.webp`],
  featureList: ['Study planner', 'Class timetable with day, week and month views', 'AI timetable import from photo, PDF or text', 'Exam countdowns', 'Homework and assignment planner', 'AI study plans', 'AI study assistant', 'Notes and flashcards', 'Grades and GPA', 'Habit tracker', 'Google Calendar import'],
  audience: { '@type': 'EducationalAudience', educationalRole: 'student', audienceType: 'High school, college and university students worldwide' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', category: 'Free with optional Pro subscription' },
  publisher: { '@id': `${SITE.url}/#org` },
});

export const toolSchema = (name: string, path: string, description: string) => ({
  '@type': 'WebApplication',
  name,
  url: new URL(path, SITE.url).href,
  description,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any (runs in the browser)',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': `${SITE.url}/#org` },
});

export const articleSchema = (o: { title: string; path: string; description: string; date: string; modified?: string; image?: string }) => ({
  '@type': 'Article',
  headline: o.title,
  description: o.description,
  url: new URL(o.path, SITE.url).href,
  mainEntityOfPage: new URL(o.path, SITE.url).href,
  datePublished: o.date,
  dateModified: o.modified ?? o.date,
  image: new URL(o.image ?? '/og-default.png', SITE.url).href,
  inLanguage: 'en',
  author: { '@type': 'Person', '@id': `${SITE.url}/about/#prince-kumar`, name: SITE.author.name, url: SITE.author.url, jobTitle: SITE.author.role, sameAs: [SITE.author.site] },
  publisher: { '@id': `${SITE.url}/#org` },
});
