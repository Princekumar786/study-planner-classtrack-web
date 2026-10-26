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
  // Global English audience (not one country). og:locale needs a territory, en_US is the standard default.
  locale: 'en_US',
  lang: 'en',
  // Last time the content facts were checked against the app code.
  updated: '2026-10-20',
  author: {
    name: 'Prince Kumar',
    role: 'Founder of ClassTrack',
    url: 'https://studyplanner.tech/about/',
    site: 'https://princelabs.me',
    email: 'hello@princelabs.me',
    bio: 'Prince Kumar is the founder of ClassTrack and an MBA student at Dr. B.R. Ambedkar University Delhi. He builds study tools from his own experience of juggling classes, deadlines and exams, and checks every guide on this site against peer-reviewed learning research.',
  },
  // Facts from the app code (lib/features/subscription). Keep in sync.
  free: {
    aiMessages: 10,
    timetableScans: 2,
    learningPlans: 2,
  },
  // Third-party IDs. The Pageclip site key is public by design (it goes in form action URLs).
  // Both forms post to the same Pageclip form; a hidden "form" field tells them apart.
  pageclipKey: 'Uti2TXp32Y6bK7amhsPkZsb8SkZ6rS5r',
  pageclipForm: 'iphone',
  ga4: 'G-8GQEVJBGDY',
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

// `updated` = last real content change. Set it only when you change facts or advice, not for typo fixes.
export type Guide = NavLink & { title: string; minutes: number; date: string; updated?: string; tint: string; tag: string };

export const GUIDES: Guide[] = [
  { href: '/guides/how-to-use-a-study-planner-app/', label: 'How to use a study planner app', title: 'How to Use a Study Planner App: A Setup Guide for Students', desc: 'Set up a study planner app in 20 minutes: timetable, exams, homework and a study plan. For high school, college and university students anywhere.', minutes: 10, date: '2026-10-22', tint: 'mint', tag: 'Planning' },
  { href: '/guides/best-study-planner-apps/', label: 'Best study planner apps', title: 'Best Study Planner Apps in 2026: 9 Picks Compared (Free & Paid)', desc: 'The best study planner apps of 2026 compared on timetable, exams, AI, platforms and price, with the best pick for school, college and exam prep.', minutes: 13, date: '2026-10-20', updated: '2026-10-22', tint: 'lavender', tag: 'Reviews' },
  { href: '/guides/how-to-make-a-study-timetable/', label: 'How to make a study timetable', title: 'How to Make a Study Timetable That You Actually Follow', desc: 'A 7-step method for building a realistic weekly study timetable, with a free template.', minutes: 9, date: '2026-10-20', tint: 'lavender', tag: 'Planning' },
  { href: '/guides/study-plan-for-exams/', label: 'Study plan for exams', title: 'How to Make a Study Plan for Exams (Backward Planning Method)', desc: 'Work back from your exam date, split the syllabus, and leave room for revision and mocks.', minutes: 10, date: '2026-10-20', tint: 'pink', tag: 'Exams' },
  { href: '/guides/evidence-based-study-techniques/', label: 'Evidence-based study techniques', title: 'Active Recall and Spaced Repetition: What the Research Says', desc: 'Which study techniques work, which waste time, and how to build them into your planner.', minutes: 11, date: '2026-10-20', tint: 'mint', tag: 'Research' },
  { href: '/guides/pomodoro-technique-for-students/', label: 'Pomodoro technique for students', title: 'The Pomodoro Technique for Students: A Practical Guide', desc: 'How to use 25-minute focus blocks for homework, revision and long study days.', minutes: 7, date: '2026-10-20', tint: 'cream', tag: 'Focus' },
  { href: '/guides/weekly-schedule-for-students/', label: 'Weekly schedule for students', title: 'A Sample Weekly Schedule for Students (School and College)', desc: 'Two worked example weeks you can copy, plus rules for fitting study around classes.', minutes: 8, date: '2026-10-20', tint: 'blue', tag: 'Schedules' },
  { href: '/guides/how-to-manage-homework/', label: 'How to manage homework', title: 'How to Manage Homework and Assignments Without Last-Minute Panic', desc: 'A simple capture-plan-do system for homework, projects and assignment deadlines.', minutes: 8, date: '2026-10-20', tint: 'lavender', tag: 'Homework' },
  { href: '/guides/how-many-hours-to-study-a-day/', label: 'How many hours to study a day', title: 'How Many Hours Should You Study a Day? A Research-Based Answer', desc: 'Realistic daily study hours for school, college and exam season, and why focused hours beat long ones.', minutes: 10, date: '2026-10-20', tint: 'mint', tag: 'Planning' },
  { href: '/guides/board-exam-study-timetable/', label: 'Board exam study timetable', title: 'Board Exam Study Timetable for Class 10 and 12 (Free Template)', desc: 'A month-by-month board exam plan with daily timetables for school days, holidays and the final weeks.', minutes: 12, date: '2026-10-20', tint: 'cream', tag: 'Exams' },
  { href: '/guides/how-to-study-for-an-exam-in-one-week/', label: 'Study for an exam in one week', title: 'How to Study for an Exam in One Week: A 7-Day Plan', desc: 'A day-by-day plan for the last week before an exam: triage topics, test yourself and protect sleep.', minutes: 9, date: '2026-10-20', tint: 'pink', tag: 'Exams' },
  { href: '/guides/how-to-stop-procrastinating/', label: 'How to stop procrastinating', title: 'How to Stop Procrastinating on Studying (9 Methods That Work)', desc: 'Why you put off studying and nine research-backed ways to start today, from the two-minute rule to tiny first steps and temptation bundling.', minutes: 9, date: '2026-10-26', tint: 'pink', tag: 'Focus' },
  { href: '/guides/how-to-focus-on-studies/', label: 'How to focus on studies', title: 'How to Focus on Studies for Long Hours Without Burning Out', desc: 'Build deep focus for long study sessions with attention cycling, breaks, a distraction-free setup and a simple pre-study routine that works.', minutes: 9, date: '2026-10-26', tint: 'mint', tag: 'Focus' },
  { href: '/guides/how-to-avoid-distractions-while-studying/', label: 'Avoid distractions while studying', title: 'How to Avoid Distractions While Studying (Phone Included)', desc: 'A practical plan to beat phone, social media and noise distractions while studying, with settings, rules and tools that actually stick.', minutes: 8, date: '2026-10-25', tint: 'blue', tag: 'Focus' },
  { href: '/guides/feynman-technique/', label: 'The Feynman technique', title: 'The Feynman Technique: Learn Anything by Explaining It Simply', desc: 'Use the four-step Feynman technique to master hard topics: explain it plainly, find the gaps, return to the source, then simplify again.', minutes: 7, date: '2026-10-25', tint: 'lavender', tag: 'Techniques' },
  { href: '/guides/how-to-take-better-notes/', label: 'How to take better notes', title: 'How to Take Better Notes: Cornell, Outline and Mapping Methods', desc: 'Compare the Cornell, outline, mapping and charting note methods, and learn why writing notes in your own words helps you remember more.', minutes: 9, date: '2026-10-25', tint: 'cream', tag: 'Techniques' },
  { href: '/guides/spaced-repetition-and-flashcards/', label: 'Flashcards and spaced repetition', title: 'How to Use Flashcards and Spaced Repetition the Right Way', desc: 'Make flashcards that test recall, not recognition, and review them on a spaced schedule so you remember more in less total study time.', minutes: 9, date: '2026-10-24', tint: 'mint', tag: 'Techniques' },
  { href: '/guides/how-to-memorize-faster/', label: 'How to memorize faster', title: 'How to Memorize Faster: 8 Memory Techniques for Students', desc: 'Eight memory techniques that help you learn faster, from chunking and mnemonics to the memory palace and testing yourself before you forget.', minutes: 9, date: '2026-10-24', tint: 'pink', tag: 'Techniques' },
  { href: '/guides/how-to-study-for-finals/', label: 'How to study for finals', title: 'How to Study for Finals: A Two-Week College Exam Plan', desc: 'A two-week plan for college finals: rank exams by risk, build a revision timetable, use past papers, and protect sleep in the final days.', minutes: 10, date: '2026-10-24', tint: 'lavender', tag: 'Exams' },
  { href: '/guides/how-to-make-a-revision-timetable/', label: 'Make a revision timetable', title: 'How to Make a Revision Timetable You Will Actually Use', desc: 'Turn your syllabus and exam dates into a realistic revision timetable, with topic triage, daily blocks and built-in catch-up time.', minutes: 9, date: '2026-10-23', tint: 'cream', tag: 'Exams' },
  { href: '/guides/how-to-balance-study-and-work/', label: 'Balance study and a job', title: 'How to Balance Study and a Part-Time Job Without Falling Behind', desc: 'Juggle study and a part-time job with fixed study anchors, time-blocking and a weekly review that keeps deadlines from sneaking up on you.', minutes: 9, date: '2026-10-23', tint: 'blue', tag: 'Planning' },
  { href: '/guides/study-life-balance/', label: 'Study-life balance', title: 'Study-Life Balance: How to Work Hard Without Burning Out', desc: 'Protect your health and your grades at once with boundaries, rest that actually restores you, and a weekly plan that leaves room to live.', minutes: 8, date: '2026-10-23', tint: 'mint', tag: 'Wellbeing' },
  { href: '/guides/how-to-deal-with-exam-stress/', label: 'Deal with exam stress', title: 'How to Deal With Exam Stress and Anxiety (That Works)', desc: 'Evidence-based ways to manage exam stress: breathing, preparation, sleep and reframing, plus when worry means it is time to ask for help.', minutes: 9, date: '2026-10-22', tint: 'pink', tag: 'Wellbeing' },
  { href: '/guides/sleep-and-studying/', label: 'Sleep and studying', title: 'Sleep and Studying: Why All-Nighters Hurt Your Grades', desc: 'How sleep turns study into memory, why all-nighters backfire before exams, and a simple sleep routine that improves recall and focus.', minutes: 8, date: '2026-10-22', tint: 'lavender', tag: 'Wellbeing' },
  { href: '/guides/best-time-to-study/', label: 'Best time to study', title: 'Best Time to Study: Morning vs Night (What Research Says)', desc: 'Is it better to study in the morning or at night? What chronotype research says, and how to find and protect your own peak focus hours.', minutes: 8, date: '2026-10-22', tint: 'cream', tag: 'Planning' },
  { href: '/guides/how-to-study-effectively-at-home/', label: 'Study effectively at home', title: 'How to Study Effectively at Home Without Getting Distracted', desc: 'Set up a study space, a routine and clear rules so studying at home feels like school, with fewer distractions and more finished work.', minutes: 8, date: '2026-10-21', tint: 'blue', tag: 'Study skills' },
  { href: '/guides/how-to-build-a-daily-study-routine/', label: 'Build a daily study routine', title: 'How to Build a Daily Study Routine That Sticks', desc: 'Design a daily study routine around your energy, classes and deadlines, with anchor habits and a realistic plan for busy and quiet days.', minutes: 8, date: '2026-10-21', tint: 'mint', tag: 'Schedules' },
  { href: '/guides/time-management-for-students/', label: 'Time management for students', title: 'Time Management for Students: 10 Skills That Raise Grades', desc: 'Ten time-management skills for students: time-blocking, urgent-vs-important, weekly reviews and batching, with tools to apply each one.', minutes: 10, date: '2026-10-21', tint: 'pink', tag: 'Planning' },
  { href: '/guides/how-to-set-study-goals/', label: 'How to set study goals', title: 'How to Set Study Goals: SMART Goals for Students', desc: 'Turn vague intentions into SMART study goals you can act on, with weekly targets, progress tracking and a plan for when you fall behind.', minutes: 8, date: '2026-10-20', tint: 'lavender', tag: 'Planning' },
  { href: '/guides/how-to-study-for-multiple-exams/', label: 'Study for multiple exams', title: 'How to Study for Multiple Exams at the Same Time', desc: 'Revise for several exams at once without dropping any: rank by date and difficulty, interleave subjects, and build one combined timetable.', minutes: 9, date: '2026-10-20', tint: 'cream', tag: 'Exams' },
  { href: '/guides/how-to-catch-up-when-behind/', label: 'Catch up when behind', title: 'How to Catch Up When You Are Behind in School or College', desc: 'A calm, step-by-step plan to catch up when you have fallen behind: audit what is due, triage, talk to teachers and rebuild momentum.', minutes: 9, date: '2026-10-20', tint: 'blue', tag: 'Planning' },
  { href: '/guides/study-smart-not-hard/', label: 'Study smart, not hard', title: 'How to Study Smart, Not Hard: 7 High-Leverage Habits', desc: 'Seven habits that get more from each study hour: active recall, interleaving, past papers and testing yourself instead of re-reading notes.', minutes: 8, date: '2026-10-19', tint: 'mint', tag: 'Techniques' },
  { href: '/guides/how-to-improve-concentration/', label: 'Improve concentration', title: 'How to Improve Concentration and Attention Span for Study', desc: 'Train your focus with longer attention blocks, fewer context switches, better sleep and a distraction plan you can keep during exam season.', minutes: 8, date: '2026-10-19', tint: 'pink', tag: 'Focus' },
  { href: '/guides/how-to-study-in-a-group/', label: 'Run a study group', title: 'How to Run a Study Group That Actually Helps You Learn', desc: 'Make study groups work: the right size, clear goals, teaching each other, and avoiding the social drift that turns revision into a hangout.', minutes: 8, date: '2026-10-19', tint: 'lavender', tag: 'Study skills' },
  { href: '/guides/how-to-prepare-for-competitive-exams/', label: 'Prepare for competitive exams', title: 'How to Prepare for Competitive Exams: A Long-Game Plan', desc: 'Prepare for competitive exams over months: map the syllabus, build a weekly cycle of learning and testing, and use mocks to fix weak areas.', minutes: 11, date: '2026-10-18', tint: 'cream', tag: 'Exams' },
  { href: '/guides/planner-for-college-students/', label: 'Planner for college students', title: 'How to Use a Planner as a College Student (Semester System)', desc: 'Run your semester from one planner: lectures, labs, assignment deadlines, midterms and finals, plus a weekly review that keeps you ahead.', minutes: 9, date: '2026-10-18', tint: 'blue', tag: 'Planning' },
  { href: '/guides/how-to-study-with-adhd/', label: 'How to study with ADHD', title: 'How to Study With ADHD: Focus Strategies That Fit How You Work', desc: 'Study strategies for ADHD: shorter blocks, body doubling, external reminders, and a planner that carries the memory load for you.', minutes: 9, date: '2026-10-18', tint: 'mint', tag: 'Wellbeing' },
  { href: '/guides/how-to-read-a-textbook/', label: 'How to read a textbook', title: 'How to Read a Textbook Effectively With the SQ3R Method', desc: 'Read textbooks actively with SQ3R: survey, question, read, recite and review, so you remember more than you would from highlighting alone.', minutes: 8, date: '2026-10-17', tint: 'pink', tag: 'Techniques' },
  { href: '/guides/how-to-make-a-semester-study-plan/', label: 'Make a semester study plan', title: 'How to Make a Semester Study Plan (With Free Template)', desc: 'Plan a whole semester in one sitting: map exams and deadlines to a calendar, set weekly targets, and leave slack for the weeks that go wrong.', minutes: 9, date: '2026-10-17', tint: 'lavender', tag: 'Planning' },
  { href: '/guides/how-to-improve-your-grades/', label: 'How to improve your grades', title: 'How to Improve Your Grades: A Practical Plan That Works', desc: 'A step-by-step plan to raise your grades: find where marks are lost, fix your study methods, use feedback, and track progress exam by exam.', minutes: 9, date: '2026-10-17', tint: 'cream', tag: 'Study skills' },
  { href: '/guides/digital-vs-paper-planner/', label: 'Digital vs paper planner', title: 'Digital vs Paper Planner for Students: Which Is Better?', desc: 'Compare digital and paper planners for students on reminders, focus, flexibility and memory, and learn how to combine both for the best of each.', minutes: 8, date: '2026-10-16', tint: 'blue', tag: 'Planning' },
  { href: '/guides/how-to-manage-college-assignments/', label: 'Manage college assignments', title: 'How to Manage College Assignments and Deadlines', desc: 'A system for college assignments: capture every brief, break big projects into dated steps, and start early with backward planning.', minutes: 8, date: '2026-10-16', tint: 'mint', tag: 'Homework' },
  { href: '/guides/morning-routine-for-students/', label: 'Morning routine for students', title: 'A Morning Routine for Students That Sets Up a Good Study Day', desc: 'Build a simple student morning routine that protects focus: light, movement, a planned first task, and no phone for the first hour.', minutes: 7, date: '2026-10-16', tint: 'pink', tag: 'Lifestyle' },
  { href: '/guides/how-to-stay-motivated-to-study/', label: 'Stay motivated to study', title: 'How to Stay Motivated to Study When You Do Not Feel Like It', desc: 'Keep studying when motivation runs out: systems over willpower, tiny starts, progress you can see, and rewards that do not derail you.', minutes: 9, date: '2026-10-15', tint: 'lavender', tag: 'Motivation' },
];

export const MAIN_NAV: NavLink[] = [
  { href: '/features/', label: 'Features' },
  { href: '/tools/', label: 'Free tools' },
  { href: '/guides/', label: 'Guides' },
  { href: '/templates/', label: 'Templates' },
  { href: '/compare/', label: 'Compare' },
  { href: '/pricing/', label: 'Pricing' },
];
