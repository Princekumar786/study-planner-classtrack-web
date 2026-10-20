// Single source of truth for brand facts, navigation, tools and guides.
// Hub pages, the footer, sitemap.xml and llms.txt are all generated from here,
// so a new page only needs to be added once.

export const SITE = {
  name: 'StudyPlanner.tech',
  short: 'studyplanner',
  url: 'https://studyplanner.tech',
  app: 'ClassTrack',
  appTagline: 'Study planner, timetable and exam planner app for students',
  playUrl: 'https://play.google.com/store/apps/details?id=com.classtracks.app',
  playId: 'com.classtracks.app',
  appSite: 'https://classtracks.app',
  email: 'support@classtracks.app',
  locale: 'en_IN',
  lang: 'en',
  // Last time the content facts were checked against the app code.
  updated: '2026-10-20',
  author: {
    name: 'Prince Kumar',
    role: 'Founder of ClassTrack',
    url: 'https://studyplanner.tech/about/',
    site: 'https://princekumar.me',
    bio: 'Prince Kumar is the founder of ClassTrack and an MBA student at Dr. B.R. Ambedkar University Delhi. He builds study tools from his own experience of juggling classes, deadlines and exams, and checks every guide on this site against peer-reviewed learning research.',
  },
  // Facts from the app code (lib/features/subscription). Keep in sync.
  free: {
    aiMessages: 10,
    timetableScans: 2,
    learningPlans: 2,
  },
} as const;

export type NavLink = { href: string; label: string; desc?: string };

export const PLANNERS: NavLink[] = [
  { href: '/student-planner/', label: 'Student planner', desc: 'Classes, homework and exams in one app' },
  { href: '/schedule-planner/', label: 'Schedule planner', desc: 'Plan your week, day by day' },
  { href: '/timetable-app/', label: 'Timetable app', desc: 'Build or import your class timetable' },
  { href: '/ai-study-planner/', label: 'AI study planner', desc: 'A study plan built around your deadline' },
  { href: '/exam-planner/', label: 'Exam planner', desc: 'Countdowns and revision plans' },
  { href: '/homework-planner/', label: 'Homework planner', desc: 'Assignments with due dates and reminders' },
];

export type Tool = NavLink & { title: string; keyword: string; tint: string; icon: string };

export const TOOLS: Tool[] = [
  { href: '/tools/study-plan-generator/', label: 'Study plan generator', title: 'Free Study Plan Generator', keyword: 'study plan generator', desc: 'Turn subjects and an exam date into a day-by-day study timetable with built-in revision.', tint: 'lavender', icon: 'route' },
  { href: '/tools/timetable-maker/', label: 'Timetable maker', title: 'Free Online Timetable Maker', keyword: 'timetable maker', desc: 'Make a colour-coded weekly class timetable, print it, or add it to Google Calendar.', tint: 'blue', icon: 'grid' },
  { href: '/tools/exam-countdown/', label: 'Exam countdown', title: 'Exam Countdown Timer', keyword: 'exam countdown', desc: 'See days and study days left for every exam, plus the hours you need per day.', tint: 'pink', icon: 'hourglass' },
  { href: '/tools/pomodoro-timer/', label: 'Pomodoro timer', title: 'Pomodoro Study Timer', keyword: 'pomodoro timer', desc: 'A distraction-free 25/5 focus timer with long breaks and a session counter.', tint: 'mint', icon: 'timer' },
  { href: '/tools/assignment-planner/', label: 'Assignment planner', title: 'Assignment & Homework Planner', keyword: 'assignment planner', desc: 'Work backwards from a due date and get a dated plan for every step.', tint: 'cream', icon: 'check' },
  { href: '/tools/gpa-calculator/', label: 'GPA calculator', title: 'GPA & SGPA Calculator', keyword: 'gpa calculator', desc: 'Calculate GPA on a 4.0 scale or SGPA/CGPA on a 10-point scale with credits.', tint: 'blue', icon: 'cap' },
  { href: '/tools/cgpa-to-percentage/', label: 'CGPA to percentage', title: 'CGPA to Percentage Converter', keyword: 'cgpa to percentage', desc: 'Convert CGPA to percentage (and back) with CBSE, AICTE and ×10 formulas.', tint: 'lavender', icon: 'percent' },
  { href: '/tools/attendance-calculator/', label: 'Attendance calculator', title: 'Attendance Calculator', keyword: 'attendance calculator', desc: 'Check your attendance percentage and how many classes you need to reach a target.', tint: 'mint', icon: 'pie' },
];

export type Guide = NavLink & { title: string; minutes: number; date: string; tint: string; tag: string };

export const GUIDES: Guide[] = [
  { href: '/guides/how-to-make-a-study-timetable/', label: 'How to make a study timetable', title: 'How to Make a Study Timetable That You Actually Follow', desc: 'A 7-step method for building a realistic weekly study timetable, with a free template.', minutes: 9, date: '2026-10-20', tint: 'lavender', tag: 'Planning' },
  { href: '/guides/study-plan-for-exams/', label: 'Study plan for exams', title: 'How to Make a Study Plan for Exams (Backward Planning Method)', desc: 'Work back from your exam date, split the syllabus, and leave room for revision and mocks.', minutes: 10, date: '2026-10-20', tint: 'pink', tag: 'Exams' },
  { href: '/guides/evidence-based-study-techniques/', label: 'Evidence-based study techniques', title: 'Active Recall and Spaced Repetition: What the Research Says', desc: 'Which study techniques work, which waste time, and how to build them into your planner.', minutes: 11, date: '2026-10-20', tint: 'mint', tag: 'Research' },
  { href: '/guides/pomodoro-technique-for-students/', label: 'Pomodoro technique for students', title: 'The Pomodoro Technique for Students: A Practical Guide', desc: 'How to use 25-minute focus blocks for homework, revision and long study days.', minutes: 7, date: '2026-10-20', tint: 'cream', tag: 'Focus' },
  { href: '/guides/weekly-schedule-for-students/', label: 'Weekly schedule for students', title: 'A Sample Weekly Schedule for Students (School and College)', desc: 'Two worked example weeks you can copy, plus rules for fitting study around classes.', minutes: 8, date: '2026-10-20', tint: 'blue', tag: 'Schedules' },
  { href: '/guides/how-to-manage-homework/', label: 'How to manage homework', title: 'How to Manage Homework and Assignments Without Last-Minute Panic', desc: 'A simple capture-plan-do system for homework, projects and assignment deadlines.', minutes: 8, date: '2026-10-20', tint: 'lavender', tag: 'Homework' },
];

export const MAIN_NAV: NavLink[] = [
  { href: '/features/', label: 'Features' },
  { href: '/tools/', label: 'Free tools' },
  { href: '/guides/', label: 'Guides' },
  { href: '/pricing/', label: 'Pricing' },
];
