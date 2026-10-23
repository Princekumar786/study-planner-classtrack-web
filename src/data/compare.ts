// Head-to-head comparison pages (/compare/<slug>/).
// ClassTrack facts: checked against the app code on 2026-10-22.
// Competitor facts: checked against each app's official website, help centre
// or store listing on 2026-10-22 (see `sources`). Re-check every quarter.
// Rule: if a competitor fact is not on an official page, do not claim it.
import type { QA } from '../lib/schema';
import { SITE } from './site';

export type CompareRow = { feature: string; ct: string; other: string };
export type Comparison = {
  slug: string;
  other: string; // competitor name
  otherUrl: string;
  title: string; // <title>, max 70 chars
  label: string; // short link label
  description: string; // meta description, 70–165 chars
  date: string;
  updated: string;
  verdict: string; // the short answer (HTML allowed)
  summary: { who: string; ct: string; other: string }[];
  rows: CompareRow[];
  chooseCt: string[];
  chooseOther: string[];
  otherAbout: string; // neutral paragraph about the competitor
  faqs: QA[];
  sources: { text: string; url: string }[];
};

const f = SITE.free;

const ctSources = [
  { text: 'ClassTrack: Study & Attendance, Google Play listing.', url: SITE.playUrl },
  { text: 'ClassTrack Free vs Pro plan comparison (mirrors the in-app pricing table).', url: `${SITE.url}/pricing/` },
];

export const COMPARISONS: Comparison[] = [
  {
    slug: 'classtrack-vs-mystudylife',
    other: 'MyStudyLife',
    otherUrl: 'https://mystudylife.com/',
    title: 'ClassTrack vs MyStudyLife: Which Study Planner Is Better? (2026)',
    label: 'ClassTrack vs MyStudyLife',
    description: 'ClassTrack vs MyStudyLife compared on timetables, AI, homework, exams, grades, platforms and price, with an honest verdict on which student planner to choose.',
    date: '2026-10-22',
    updated: '2026-10-22',
    verdict: `<strong>Choose MyStudyLife</strong> if you use an iPhone or a laptop browser, or your school has a rotating timetable (Week A/B, Day 1–6). <strong>Choose ClassTrack</strong> if you are on Android and want AI to build a topic-by-topic study plan for your exams, plus attendance tracking and GPA on a 4.0 or 10-point scale. Both are free to start.`,
    summary: [
      { who: 'iPhone, iPad or web user', ct: 'Not yet (Android only)', other: 'Better fit' },
      { who: 'Rotating or block timetable', ct: 'Not supported yet', other: 'Better fit' },
      { who: 'Android user who wants AI learning plans with time estimates', ct: 'Better fit', other: 'Scout plans your week and revision' },
      { who: 'College with an attendance rule', ct: 'Better fit', other: 'Not in its feature list' },
      { who: 'Parent who wants to follow along', ct: 'No parent app', other: 'Family Connect' },
    ],
    rows: [
      { feature: 'Platforms', ct: 'Android (iPhone coming soon)', other: 'iPhone, iPad, Android and web, synced' },
      { feature: 'Price', ct: 'Free; optional Pro subscription through Google Play', other: 'Free; optional in-app purchases' },
      { feature: 'Class timetable', ct: 'Day, week and month views; rooms, teachers, class links; one-off extra or cancelled classes', other: 'Weekly, rotating and block timetables' },
      { feature: 'Rotating timetables (Week A/B, Day 1–6)', ct: 'Not yet', other: 'Yes (Day A/B, Week 1/2, custom)' },
      { feature: 'Timetable from a photo', ct: `Yes: photo, PDF or pasted text (${f.timetableScans} free scans, unlimited with Pro)`, other: 'Yes: type it or snap a photo' },
      { feature: 'Homework and assignments', ct: 'Grouped into Overdue, Today and Next 7 days, with reminders', other: 'Deadlines, subtasks, recurring coursework and reminders' },
      { feature: 'Exams', ct: 'Countdown for every exam on the home screen', other: 'Exam tracker with study reminders' },
      { feature: 'AI', ct: `AI study assistant (${f.aiMessages} messages/month free), AI learning plans with time estimates (${f.learningPlans} free), AI timetable import`, other: 'Scout, an AI study coach that plans your week and revision' },
      { feature: 'Grades', ct: 'GPA on a 4.0 or 10-point scale; semester wrap-up with SGPA/CGPA (Pro)', other: 'Grade tracking towards a target GPA' },
      { feature: 'Attendance tracking', ct: 'Yes, by subject', other: 'Not in its feature list' },
      { feature: 'Notes and flashcards', ct: 'Yes (Pro)', other: 'Not in its feature list' },
      { feature: 'Focus timer', ct: 'Not in the app; use our free web Pomodoro timer', other: 'Yes, built in' },
      { feature: 'Works offline', ct: 'View your plan offline; changes sync when back online', other: 'Yes; changes sync when you reconnect' },
      { feature: 'Parents and schools', ct: 'No', other: 'Family Connect app for parents; a version for schools' },
    ],
    chooseCt: [
      'You use an Android phone.',
      'You want AI to split a subject into topics and spread them up to your exam date.',
      'Your college has a minimum-attendance rule and you want attendance by subject.',
      'Your grades use a 10-point scale (SGPA/CGPA) as well as, or instead of, a 4.0 GPA.',
      'You want notes and flashcards in the same app as your timetable (Pro).',
    ],
    chooseOther: [
      'You use an iPhone or iPad, or want to plan from a laptop browser.',
      'Your school runs a rotating timetable (Week A/B or Day 1–6).',
      'You want a focus timer built into the planner.',
      'A parent wants to see upcoming homework and exams (Family Connect).',
      'You prefer an app with a long track record: MyStudyLife says it is used by over 10 million students in 187+ countries.',
    ],
    otherAbout: 'MyStudyLife is one of the longest-running student planners. It is free on iPhone, Android and the web, says it never sells data or shows ads, and covers classes, homework, exams, grades and reminders. It recently added Scout, an AI study coach that can plan your week or a revision schedule from one sentence.',
    faqs: [
      { q: 'Is ClassTrack better than MyStudyLife?', a: 'It depends on your phone and timetable. ClassTrack is the better fit for Android users who want AI study plans, attendance tracking and 10-point GPA support. MyStudyLife is the better fit on iPhone or the web, and for rotating timetables. Disclosure: ClassTrack is made by the team behind this site.' },
      { q: 'Is MyStudyLife free?', a: 'Yes. MyStudyLife is free to download and use on iPhone, Android and the web, with optional in-app purchases.' },
      { q: 'Is ClassTrack free?', a: `Yes. The timetable, homework, exams, grades, habits and reminders are free, plus ${f.aiMessages} AI messages a month, ${f.timetableScans} AI timetable scans and ${f.learningPlans} AI learning plans. Pro removes the AI limits. See <a href="/pricing/">pricing</a>.` },
      { q: 'Does ClassTrack support rotating timetables like MyStudyLife?', a: 'Not yet. ClassTrack repeats classes weekly and lets you add one-off extra or cancelled classes, but it has no Week A/B or Day 1–6 cycle. If your school uses one, MyStudyLife or Power Planner will suit you better today.' },
      { q: 'Can both apps read my timetable from a photo?', a: 'Yes. MyStudyLife lets you snap a photo of your timetable. ClassTrack can read a photo, a PDF or pasted text, and shows the classes it found for you to check before saving.' },
      { q: 'Is ClassTrack on iPhone?', a: 'Not yet. ClassTrack is on Android now, and an iPhone version is coming soon. You can join the waitlist on our home page.' },
    ],
    sources: [
      ...ctSources,
      { text: 'MyStudyLife: official website and FAQ (checked 22 October 2026).', url: 'https://mystudylife.com/' },
      { text: 'MyStudyLife: Study Planner, Google Play listing (checked 22 October 2026).', url: 'https://play.google.com/store/apps/details?id=com.virblue.mystudylife' },
      { text: 'MyStudyLife: School Planner, App Store listing (checked 22 October 2026).', url: 'https://apps.apple.com/us/app/my-study-life-school-planner/id910639339' },
    ],
  },
  {
    slug: 'classtrack-vs-power-planner',
    other: 'Power Planner',
    otherUrl: 'https://powerplanner.net/',
    title: 'ClassTrack vs Power Planner: Study Planner Comparison (2026)',
    label: 'ClassTrack vs Power Planner',
    description: 'ClassTrack vs Power Planner compared on timetables, AI, grades and GPA, platforms and price (subscription vs one-time $4.99), with an honest verdict.',
    date: '2026-10-22',
    updated: '2026-10-22',
    verdict: `<strong>Choose Power Planner</strong> if you want detailed grade tracking (weighted grades, credits, pass/fail, extra credit), a Week A/B schedule, Windows or Mac apps, and a one-time $4.99 upgrade instead of a subscription. <strong>Choose ClassTrack</strong> if you are on Android and want AI help: timetable import from a photo or PDF, topic-by-topic study plans and a study assistant, plus attendance tracking.`,
    summary: [
      { who: 'Hates subscriptions', ct: 'Pro is a subscription', other: 'Better fit ($4.99 once)' },
      { who: 'Tracks weighted grades closely', ct: 'GPA, credits, target score', other: 'Better fit' },
      { who: 'Windows, Mac or iPhone user', ct: 'Android only for now', other: 'Better fit' },
      { who: 'Wants AI study plans and timetable import', ct: 'Better fit', other: 'No AI features listed' },
      { who: 'College with an attendance rule', ct: 'Better fit', other: 'Not in its help docs' },
    ],
    rows: [
      { feature: 'Platforms', ct: 'Android (iPhone coming soon)', other: 'iPhone, iPad, Android, Chromebook, Windows, Mac and web (beta), synced' },
      { feature: 'Price', ct: 'Free; optional Pro subscription through Google Play', other: 'Free; Premium is a one-time $4.99 purchase that unlocks every platform' },
      { feature: 'Free plan limits', ct: `${f.aiMessages} AI messages/month, ${f.timetableScans} timetable scans, ${f.learningPlans} AI learning plans; core planner unlimited`, other: '1 semester, 5 grades per class, 1 repeating bulk entry, 1 photo per item' },
      { feature: 'Class timetable', ct: 'Day, week and month views; rooms, teachers, class links; one-off extra or cancelled classes', other: 'Classes on several days and times, labs, rooms, holidays' },
      { feature: 'Week A/B schedules', ct: 'Not yet', other: 'Yes' },
      { feature: 'Timetable from a photo or PDF', ct: `Yes, with AI (${f.timetableScans} free scans)`, other: 'Not in its help docs; classes are added by hand' },
      { feature: 'Homework and tasks', ct: 'Grouped into Overdue, Today and Next 7 days, with reminders', other: 'Tasks and events with automatic and custom reminders, checklists' },
      { feature: 'Exams', ct: 'Countdown for every exam on the home screen', other: 'Not covered separately in its help docs' },
      { feature: 'Grades', ct: 'GPA on a 4.0 or 10-point scale with credits, and the score you need next', other: 'Weighted grades, credits, pass/fail, extra credit and custom GPA scales (including 10.0)' },
      { feature: 'Semesters', ct: 'Semester wrap-up with SGPA/CGPA history (Pro)', other: 'Years and semesters (more than one with Premium)' },
      { feature: 'AI', ct: 'AI study assistant, AI learning plans, AI timetable import', other: 'No AI features listed' },
      { feature: 'Attendance tracking', ct: 'Yes, by subject', other: 'Not in its help docs' },
      { feature: 'Notes and flashcards', ct: 'Yes (Pro)', other: 'Photo attachments on items' },
    ],
    chooseCt: [
      'You use an Android phone.',
      'You want to import your timetable from a photo or PDF instead of typing it.',
      'You want AI to build a study plan with time estimates up to your exam date.',
      'Your college tracks attendance and you need to stay above a minimum.',
      'You want a countdown for every exam on your home screen.',
    ],
    chooseOther: [
      'You want a one-time purchase, not a subscription.',
      'You track weighted grades in detail, including pass/fail and extra credit.',
      'Your school runs a Week A/B schedule.',
      'You want the same planner on Windows, Mac, iPhone and Android.',
      'You do not need AI features.',
    ],
    otherAbout: 'Power Planner is a homework and grade planner that runs on iPhone, iPad, Android, Chromebook, Windows, Mac and the web (beta), synced through one account. It is mostly free; a one-time $4.99 Premium purchase removes the free limits on every platform. Its strength is grades: weighted categories, credits, pass/fail classes, extra credit and custom GPA scales.',
    faqs: [
      { q: 'Is ClassTrack better than Power Planner?', a: 'For Android users who want AI timetable import, AI study plans and attendance tracking, yes. For detailed grade tracking, Week A/B schedules, computer apps or a one-time price, Power Planner is the better pick. Disclosure: ClassTrack is made by the team behind this site.' },
      { q: 'How much does Power Planner cost?', a: 'Power Planner is mostly free. Premium is a one-time, lifetime purchase of $4.99 USD that also unlocks Premium on your other devices. The free version is limited to 1 semester, 5 grades per class, 1 repeating bulk entry and 1 photo per item.' },
      { q: 'How much does ClassTrack Pro cost?', a: 'ClassTrack Pro is a subscription through Google Play. The price is shown in your local currency in the app before you buy, and monthly, multi-month and yearly plans are available. See <a href="/pricing/">pricing</a>.' },
      { q: 'Does Power Planner have AI?', a: 'Its help centre lists no AI features. Power Planner focuses on schedules, tasks, reminders and grades.' },
      { q: 'Which app is better for a 10-point GPA or CGPA?', a: 'Both handle it. ClassTrack has a built-in 10-point scale and a semester wrap-up with SGPA and CGPA (Pro). Power Planner lets you set a custom GPA scale such as 10.0 for all classes or one class.' },
    ],
    sources: [
      ...ctSources,
      { text: 'Power Planner Support: Premium version (checked 22 October 2026).', url: 'https://support.powerplanner.net/faq/premium-version/' },
      { text: 'Power Planner Support: Platforms (checked 22 October 2026).', url: 'https://support.powerplanner.net/faq/platforms/' },
      { text: 'Power Planner Support: Week A/B schedules (checked 22 October 2026).', url: 'https://support.powerplanner.net/schedule/week-a-b-schedules/' },
      { text: 'Power Planner Support: Change the GPA grade scale (checked 22 October 2026).', url: 'https://support.powerplanner.net/grades/gpa-scale/' },
    ],
  },
];
