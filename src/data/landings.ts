// Content for the keyword landing pages (one per search intent).
// Every claim here was checked against the ClassTrack app code on 2026-10-20.
import type { QA } from '../lib/schema';

export type Landing = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: [string, string, string]; // before / italic word / after
  lead: string;
  screens: { back: string; front: string; backAlt: string; frontAlt: string; tint: string };
  whatIs: { q: string; a: string };
  features: { icon: string; title: string; text: string }[];
  steps: { title: string; text: string }[];
  compare: { row: string; paper: string; generic: string; ct: string }[];
  tips: { title: string; text: string };
  faqs: QA[];
  tools: string[]; // hrefs
  guides: string[]; // hrefs
};

const free = 'Free on Android';

export const LANDINGS: Landing[] = [
  {
    slug: 'student-planner',
    keyword: 'student planner',
    title: 'Student Planner App: Classes, Homework & Exams | ClassTrack',
    description: 'Free student planner app for school and college: class timetable, homework and assignments, exam countdowns, grades and an AI study assistant.',
    h1: ['The student planner that keeps', 'everything', 'in one place.'],
    lead: 'Classes, homework, exams and grades usually live in five places. ClassTrack puts them on one screen and reminds you before anything is due.',
    screens: { back: '/img/screen-tasks.webp', front: '/img/screen-home.webp', backAlt: 'ClassTrack tasks list grouped by due date', frontAlt: 'ClassTrack home screen with today, next exam and quick tools', tint: 'var(--lavender)' },
    whatIs: { q: 'What is a student planner?', a: 'A student planner is a calendar and to-do list built around the school or college week. It holds your class timetable, homework and assignment due dates, exam dates and study sessions, so you can see what is happening today and what needs work this week. A digital student planner adds reminders, syncs across devices and can rearrange your plan when dates change.' },
    features: [
      { icon: 'calendar', title: 'Class timetable', text: 'Day, week and month views with rooms, teachers and class links. Add one-off extra classes in a tap.' },
      { icon: 'check', title: 'Homework & assignments', text: 'Assignments, to-dos and events grouped into Overdue, Today and Next 7 days, with priorities.' },
      { icon: 'hourglass', title: 'Exam countdowns', text: 'Each exam shows the days left, so revision starts when it should.' },
      { icon: 'cap', title: 'Grades & GPA', text: 'Log marks, follow your GPA and see the score you need on the next test.' },
      { icon: 'sparkle', title: 'AI study assistant', text: 'Ask for a revision plan or a syllabus breakdown. It knows your real classes and exams.' },
      { icon: 'bell', title: 'Reminders & widget', text: 'Class and task reminders, plus a home-screen widget with today’s classes and tasks.' },
    ],
    steps: [
      { title: 'Add your timetable', text: 'Type your classes, or snap a photo of your timetable and let AI build the week.' },
      { title: 'Capture every deadline', text: 'Add homework, assignments and exams as soon as they are set. A quick-add bar makes it one line.' },
      { title: 'Check Today each morning', text: 'Home shows today’s classes, tasks due and the next exam at a glance.' },
      { title: 'Plan study blocks', text: 'Use the planner or the AI assistant to fit study around classes before exam weeks.' },
    ],
    compare: [
      { row: 'Class timetable', paper: 'Write it out', generic: 'Manual events', ct: 'Built in, or AI from a photo' },
      { row: 'Homework reminders', paper: 'No', generic: 'Yes', ct: 'Yes, grouped by due date' },
      { row: 'Exam countdowns', paper: 'No', generic: 'Partly', ct: 'Yes, per exam' },
      { row: 'Grades & GPA', paper: 'No', generic: 'No', ct: 'Yes' },
      { row: 'Study plan help', paper: 'No', generic: 'No', ct: 'AI study plans and assistant' },
    ],
    tips: { title: 'Planner habit that sticks', text: 'Spend five minutes on Sunday evening looking at next week: exams, due dates and busy days. Then put study blocks on the lighter days. Students who plan weekly, not daily, are less likely to abandon their planner after a busy week.' },
    faqs: [
      { q: 'What is the best student planner app?', a: 'Look for a planner that holds your timetable, homework and exams together and reminds you on your phone. ClassTrack does all three, adds grades and an AI assistant, and is free on Android.' },
      { q: 'Is ClassTrack a good planner for college students?', a: 'Yes. It handles lectures, labs and tutorials with rooms and links, semester exams, assignments, GPA and a semester wrap-up when the term ends (Pro).' },
      { q: 'Can I use it for school homework?', a: 'Yes. Homework and assignments have due dates, priorities and reminders, and the Home screen shows how many tasks are due today and this week.' },
      { q: 'Does the student planner work offline?', a: 'You can open the app and see your plan without a connection. Changes sync to your account when you are back online. AI features need the internet.' },
      { q: 'Is my data private?', a: 'Your planner is private to your account. You can delete your account and data at any time in Settings. See the <a href="/privacy/">privacy policy</a>.' },
    ],
    tools: ['/tools/timetable-maker/', '/tools/assignment-planner/', '/tools/gpa-calculator/'],
    guides: ['/guides/how-to-manage-homework/', '/guides/weekly-schedule-for-students/'],
  },
  {
    slug: 'schedule-planner',
    keyword: 'schedule planner',
    title: 'Weekly Schedule Planner for Students (Free) | ClassTrack',
    description: 'Plan your week around classes, study, work and rest. A free weekly schedule planner for students, with day, week and month views and reminders.',
    h1: ['A weekly schedule planner you can', 'keep', 'all week.'],
    lead: 'Fixed classes go in first. Then study blocks, homework, work shifts and rest. ClassTrack shows the whole week and nudges you when something starts.',
    screens: { back: '/img/screen-home.webp', front: '/img/screen-schedule.webp', backAlt: 'ClassTrack home screen', frontAlt: 'ClassTrack daily schedule with classes on a timeline', tint: 'var(--blue)' },
    whatIs: { q: 'What is a schedule planner?', a: 'A schedule planner is a calendar view of your week, hour by hour, that shows fixed commitments (classes, work, travel) and the flexible time around them. For students, a good schedule planner makes free time visible so you can turn it into study blocks, and keeps a realistic amount of rest so the plan survives a busy week.' },
    features: [
      { icon: 'grid', title: 'Day, week & month views', text: 'Switch views in one tap. Today is always one tap away on the Home screen.' },
      { icon: 'calendar', title: 'Recurring classes', text: 'Set a class once and it repeats every week of the term, with room and teacher.' },
      { icon: 'plus', title: 'One-off events', text: 'Add an extra class, a cancelled lecture or an event without changing the weekly pattern.' },
      { icon: 'globe', title: 'Google Calendar sync', text: 'Two-way sync pulls in your calendar and pushes classes and exams back (Pro).' },
      { icon: 'bell', title: 'Start-of-class nudges', text: 'Reminders before a class starts, plus quiet hours so nights stay quiet (Pro).' },
      { icon: 'moon', title: 'Your study rhythm', text: 'Tell the app if you are an early bird, daytime or night-owl student when you set it up.' },
    ],
    steps: [
      { title: 'Lock in fixed time', text: 'Classes, labs, work shifts, travel and sleep. These do not move.' },
      { title: 'Find your free blocks', text: 'Look for gaps of 45 minutes or more. Those are your study blocks.' },
      { title: 'Assign subjects', text: 'Give harder or exam-soon subjects the longer, earlier blocks.' },
      { title: 'Protect one rest block a day', text: 'A plan with no rest gets abandoned. Keep at least one evening off each week.' },
    ],
    compare: [
      { row: 'Weekly view', paper: 'Yes', generic: 'Yes', ct: 'Yes, plus day and month' },
      { row: 'Recurring classes by term', paper: 'Rewrite weekly', generic: 'Manual repeat', ct: 'Yes, term-aware' },
      { row: 'Import timetable from photo', paper: 'No', generic: 'No', ct: 'Yes (AI)' },
      { row: 'Homework next to schedule', paper: 'Separate', generic: 'Separate app', ct: 'Same screen' },
      { row: 'Reminders', paper: 'No', generic: 'Yes', ct: 'Yes' },
    ],
    tips: { title: 'The 80% rule', text: 'Plan only about 80% of your free time. The rest absorbs the things that always come up: a longer assignment, a late bus, a tired evening. A schedule with slack is one you can keep.' },
    faqs: [
      { q: 'How do I make a weekly schedule as a student?', a: 'Put fixed commitments in first, then mark free gaps of 45+ minutes as study blocks, assign subjects by difficulty and deadline, and keep one rest block a day. See our <a href="/guides/weekly-schedule-for-students/">sample weekly schedules</a>.' },
      { q: 'Is there a free schedule planner?', a: 'Yes. ClassTrack’s schedule and reminders are free on Android. For a printable week, use the free <a href="/tools/timetable-maker/">timetable maker</a> in your browser.' },
      { q: 'Can I sync my schedule with Google Calendar?', a: 'Yes, with ClassTrack Pro. It auto-imports your calendar every day and pushes your classes, exams and deadlines back into Google Calendar.' },
      { q: 'How many hours should a student study per day?', a: 'It depends on your course and exams. Many students do well with 2–4 focused hours outside class on weekdays, more in exam season. Consistency across the week matters more than one long day.' },
    ],
    tools: ['/tools/timetable-maker/', '/tools/study-plan-generator/', '/tools/pomodoro-timer/'],
    guides: ['/guides/weekly-schedule-for-students/', '/guides/how-to-make-a-study-timetable/'],
  },
  {
    slug: 'timetable-app',
    keyword: 'timetable app',
    title: 'Timetable App for Students: Snap a Photo, Get Your Week | ClassTrack',
    description: 'Class timetable app with AI import. Take a photo of your timetable, upload a PDF or paste text, and get a weekly class schedule with reminders. Free on Android.',
    h1: ['The timetable app that reads', 'your', 'timetable for you.'],
    lead: 'Take a photo of the noticeboard, upload the PDF from your college portal or paste the text. AI finds every class, day, time and room. You review, then save.',
    screens: { back: '/img/screen-home.webp', front: '/img/screen-schedule.webp', backAlt: 'ClassTrack home screen', frontAlt: 'ClassTrack class timetable for Friday', tint: 'var(--mint)' },
    whatIs: { q: 'What is a timetable app?', a: 'A timetable app stores your weekly class timetable on your phone: subject, day, start and end time, room and teacher. It shows what is next, reminds you before class, and lets you handle changes like extra or cancelled classes without rewriting the whole week. Some timetable apps, like ClassTrack, can create the timetable automatically from a photo or PDF using AI.' },
    features: [
      { icon: 'camera', title: 'AI timetable import', text: 'Photo, PDF or pasted text becomes a weekly schedule. Two free scans; unlimited with Pro.' },
      { icon: 'pen', title: 'Review before saving', text: 'Every class the AI finds appears as a draft you can fix, so mistakes never sneak in.' },
      { icon: 'grid', title: 'Colour-coded subjects', text: 'Each subject gets its own colour, used across the timetable, tasks and grades.' },
      { icon: 'link', title: 'Rooms, teachers & links', text: 'Keep the room number and the online class link right on the class.' },
      { icon: 'bell', title: 'Class reminders', text: 'Get a reminder before each class starts.' },
      { icon: 'phone', title: 'Home-screen widget', text: 'Today’s classes and tasks without opening the app.' },
    ],
    steps: [
      { title: 'Open Import timetable', text: 'Choose camera, PDF or paste text.' },
      { title: 'Let AI read it', text: 'It extracts subjects, days, times and rooms, usually in seconds.' },
      { title: 'Check the draft', text: 'Fix anything that looks off. Nothing is saved until you confirm.' },
      { title: 'Done for the term', text: 'Classes repeat weekly. Add one-off changes as they happen.' },
    ],
    compare: [
      { row: 'Setup time', paper: 'Copy by hand', generic: 'Enter each class', ct: 'Photo, then review' },
      { row: 'Reads PDFs & photos', paper: 'No', generic: 'No', ct: 'Yes' },
      { row: 'Rooms & class links', paper: 'Partly', generic: 'Yes', ct: 'Yes' },
      { row: 'Reminders', paper: 'No', generic: 'Yes', ct: 'Yes' },
      { row: 'Connected to homework & exams', paper: 'No', generic: 'No', ct: 'Yes' },
    ],
    tips: { title: 'Get a clean AI import', text: 'Photograph the timetable straight on, in good light, with the whole grid in frame. If your college shares a PDF, upload that instead: it gives the most accurate result.' },
    faqs: [
      { q: 'Can an app make a timetable from a photo?', a: 'Yes. ClassTrack uses AI to read a photo, PDF or pasted text of your timetable and turn it into a weekly class schedule you can review and edit.' },
      { q: 'How many timetable scans are free?', a: 'The free plan includes 2 AI timetable scans. ClassTrack Pro includes unlimited scans.' },
      { q: 'What if the AI gets a class wrong?', a: 'Every imported class is shown as a draft first. You can edit, delete or add classes before saving, and change them later at any time.' },
      { q: 'Is there a free online timetable maker?', a: 'Yes. Our <a href="/tools/timetable-maker/">timetable maker</a> runs in your browser, needs no sign-up and lets you print the result or add classes to Google Calendar.' },
    ],
    tools: ['/tools/timetable-maker/', '/tools/study-plan-generator/', '/tools/attendance-calculator/'],
    guides: ['/guides/how-to-make-a-study-timetable/', '/guides/weekly-schedule-for-students/'],
  },
  {
    slug: 'ai-study-planner',
    keyword: 'AI study planner',
    title: 'AI Study Planner: Turn Any Goal Into a Day-by-Day Plan | ClassTrack',
    description: 'Tell the AI what you need to learn and by when. ClassTrack breaks it into topics, estimates time and builds a study plan that fits your deadline. 2 free AI plans.',
    h1: ['An AI study planner that', 'plans', 'backwards from your deadline.'],
    lead: 'Type what you want to learn and your deadline. The AI splits it into topics, estimates how long each takes and spreads the work across the days you have.',
    screens: { back: '/img/screen-assistant.webp', front: '/img/screen-planner.webp', backAlt: 'ClassTrack AI assistant chat', frontAlt: 'ClassTrack AI planner with a Machine Learning plan', tint: 'var(--lavender)' },
    whatIs: { q: 'What is an AI study planner?', a: 'An AI study planner uses a language model to turn a learning goal (an exam syllabus, a course or a skill) into a structured plan: a list of topics in a sensible order, a time estimate for each, and a schedule that ends before your deadline. You still decide what to study; the AI does the splitting and scheduling that most students skip.' },
    features: [
      { icon: 'route', title: 'AI learning plans', text: 'A step-by-step roadmap for a subject or skill. Two free plans; unlimited with Pro.' },
      { icon: 'list', title: 'Topics & subtopics', text: 'Big topics are split into small steps you can finish in one sitting.' },
      { icon: 'clock', title: 'Time estimates', text: 'Each topic gets an estimate, so you know if the deadline is realistic.' },
      { icon: 'chart', title: 'Progress tracking', text: 'See percent complete and what is next on every plan.' },
      { icon: 'sparkle', title: 'AI study assistant', text: 'Ask for a revision schedule or exam prep plan. 10 free messages a month.' },
      { icon: 'pen', title: 'Build your own plan', text: 'Prefer control? Add your own topics and times and follow them.' },
    ],
    steps: [
      { title: 'Describe the goal', text: 'For example: “Linear Algebra mid-term on 13 Nov” or “Learn SQL basics in 3 weeks”.' },
      { title: 'Review the topics', text: 'Add, remove or reorder topics. You know your syllabus best.' },
      { title: 'Follow the next step', text: 'The plan always shows the next topic and the target date.' },
      { title: 'Ask when stuck', text: 'Use the assistant for an explanation, practice questions or a new plan.' },
    ],
    compare: [
      { row: 'Splits syllabus into topics', paper: 'Manual', generic: 'Manual', ct: 'AI, editable' },
      { row: 'Time estimates', paper: 'Guess', generic: 'Guess', ct: 'Per topic' },
      { row: 'Fits your deadline', paper: 'Manual maths', generic: 'Manual', ct: 'Yes' },
      { row: 'Knows your classes', paper: 'No', generic: 'No', ct: 'Yes' },
      { row: 'Progress', paper: 'Tick boxes', generic: 'Tick boxes', ct: 'Percent and next step' },
    ],
    tips: { title: 'Make the AI plan smarter', text: 'Give the AI three things: the exact topics from your syllabus, your deadline, and how many hours a day you can really study. Then add your own “self-test” step after each topic. Practice testing is one of the two best-supported study techniques.' },
    faqs: [
      { q: 'Can AI make a study plan for me?', a: 'Yes. In ClassTrack you describe what you want to learn and your deadline, and the AI builds a plan with topics, time estimates and dates. You can edit everything.' },
      { q: 'Is the AI study planner free?', a: 'The free plan includes 2 AI learning plans and 10 AI assistant messages a month. Pro removes both limits.' },
      { q: 'Which AI does ClassTrack use?', a: 'ClassTrack uses Google Gemini models, called from our own server so your requests are not sent from the app with a public key.' },
      { q: 'Is there a free study plan generator without AI?', a: 'Yes. Our <a href="/tools/study-plan-generator/">study plan generator</a> builds a dated plan from your subjects and exam date using simple rules, entirely in your browser.' },
    ],
    tools: ['/tools/study-plan-generator/', '/tools/exam-countdown/', '/tools/pomodoro-timer/'],
    guides: ['/guides/evidence-based-study-techniques/', '/guides/study-plan-for-exams/'],
  },
  {
    slug: 'exam-planner',
    keyword: 'exam planner',
    title: 'Exam Planner & Revision Timetable for Students | ClassTrack',
    description: 'Plan revision for every exam. Exam countdowns, a revision timetable, AI study plans and reminders, free for students. Works for boards, finals and entrance exams.',
    h1: ['An exam planner that starts revision', 'before', 'the panic does.'],
    lead: 'Add every exam once. See the days left, get a revision plan that fits, and spread the work so the last week is for practice, not first reads.',
    screens: { back: '/img/screen-plan.webp', front: '/img/screen-tasks.webp', backAlt: 'ClassTrack study plan overview', frontAlt: 'ClassTrack tasks and exams with due dates', tint: 'var(--pink)' },
    whatIs: { q: 'What is an exam planner?', a: 'An exam planner lists your exam dates and turns the time before them into a revision timetable: which subject and topic to revise on which day, when to do practice papers, and when to rest. A good exam planner uses spaced revision (coming back to each topic several times) rather than one long cram at the end.' },
    features: [
      { icon: 'hourglass', title: 'Countdown for every exam', text: 'See exactly how many days are left for each paper.' },
      { icon: 'route', title: 'Revision plans', text: 'Use AI learning plans or build your own topic list per subject.' },
      { icon: 'calendar', title: 'Exams on your timetable', text: 'Exams sit next to classes and homework, so busy weeks are obvious early.' },
      { icon: 'sparkle', title: 'Exam prep assistant', text: 'Ask for a revision schedule, practice questions or a plan for the final week.' },
      { icon: 'book', title: 'Notes & flashcards', text: 'Turn lecture notes into flashcards and study a whole deck before the exam (Pro).' },
      { icon: 'cap', title: 'Target scores', text: 'See the mark you need on the next exam to reach your GPA target.' },
    ],
    steps: [
      { title: 'Add every exam', text: 'Date, subject and syllabus. Do it the day the date sheet comes out.' },
      { title: 'Count real study days', text: 'Subtract class-heavy days and rest days. The countdown tool does this for you.' },
      { title: 'Plan three rounds', text: 'Learn, review, then test yourself. Leave the final 20% for practice papers.' },
      { title: 'Check progress weekly', text: 'Move topics that slipped. Better to adjust on Sunday than panic on Friday.' },
    ],
    compare: [
      { row: 'Exam countdowns', paper: 'Count by hand', generic: 'No', ct: 'Yes' },
      { row: 'Revision timetable', paper: 'Manual', generic: 'Manual', ct: 'AI or your own plan' },
      { row: 'Spaced review rounds', paper: 'If you plan it', generic: 'No', ct: 'Plan generator builds them' },
      { row: 'Flashcards', paper: 'Paper cards', generic: 'Separate app', ct: 'From your notes (Pro)' },
      { row: 'Next to homework & classes', paper: 'No', generic: 'No', ct: 'Yes' },
    ],
    tips: { title: 'Interleave, then test', text: 'Mixing two or three subjects in one day keeps revision fresh and forces your brain to switch, which helps long-term memory. End each day with ten minutes of self-testing on what you revised, without looking at notes.' },
    faqs: [
      { q: 'How do I make a revision timetable?', a: 'List exams and dates, count your real study days, divide topics across them with harder subjects getting more time, and leave the last 20% for practice papers. Our <a href="/tools/study-plan-generator/">generator</a> does this automatically.' },
      { q: 'How early should I start revising?', a: 'For major exams, 6–8 weeks gives room for three revision rounds. For a mid-term, 1–2 weeks is often enough. Use the <a href="/tools/exam-countdown/">exam countdown</a> to see study hours per day.' },
      { q: 'Is cramming the night before effective?', a: 'Cramming can help for a test the next morning, but you forget most of it quickly. Research on spacing shows the same hours spread over days give much better long-term memory.' },
      { q: 'Does ClassTrack work for board exams and entrance exams?', a: 'Yes. Add each paper as an exam, then use a study plan to cover the syllabus. It works for school boards, university finals and entrance exams.' },
    ],
    tools: ['/tools/exam-countdown/', '/tools/study-plan-generator/', '/tools/pomodoro-timer/'],
    guides: ['/guides/study-plan-for-exams/', '/guides/evidence-based-study-techniques/'],
  },
  {
    slug: 'homework-planner',
    keyword: 'homework planner',
    title: 'Homework Planner App: Never Miss an Assignment | ClassTrack',
    description: 'Free homework and assignment planner for students. Due dates, priorities, reminders and a Today view grouped by Overdue, Today and Next 7 days.',
    h1: ['A homework planner that tells you', 'what', 'to do next.'],
    lead: 'Add homework the moment it is set. ClassTrack groups everything by Overdue, Today and Next 7 days and reminds you before it is due.',
    screens: { back: '/img/screen-home.webp', front: '/img/screen-tasks.webp', backAlt: 'ClassTrack home screen', frontAlt: 'ClassTrack tasks list with assignments and due dates', tint: 'var(--cream)' },
    whatIs: { q: 'What is a homework planner?', a: 'A homework planner is a list of assignments and their due dates, sorted so you always know what to work on next. A digital homework planner adds reminders, lets you link each task to a subject, and shows how much is due this week so you can plan time before the deadline instead of the night before.' },
    features: [
      { icon: 'check', title: 'Assignments tab', text: 'All assignments in one tab, filtered by subject.' },
      { icon: 'list', title: 'Grouped by date', text: 'Overdue, Today and Next 7 days counts. Tap to filter.' },
      { icon: 'plus', title: 'Quick-add bar', text: 'Type the homework and press enter. Details later.' },
      { icon: 'flag', title: 'Priorities', text: 'Mark what matters most and sort by priority.' },
      { icon: 'bell', title: 'Due-date reminders', text: 'Reminders before a task is due, cancelled automatically once you tick it off.' },
      { icon: 'chart', title: 'Tasks due on Home', text: 'Home shows how many tasks are pending, overdue and due today.' },
    ],
    steps: [
      { title: 'Capture', text: 'Add every assignment the moment it is set, with the due date.' },
      { title: 'Size it', text: 'Big projects get split into steps with their own dates.' },
      { title: 'Schedule', text: 'Put the first step on a free block this week, not the night before.' },
      { title: 'Close it', text: 'Tick it off. Reminders stop and the count updates.' },
    ],
    compare: [
      { row: 'Due dates & reminders', paper: 'Dates only', generic: 'Yes', ct: 'Yes' },
      { row: 'Grouped Today / Next 7 days', paper: 'No', generic: 'Partly', ct: 'Yes' },
      { row: 'Linked to subjects', paper: 'Manual', generic: 'Tags', ct: 'Yes, with subject colour' },
      { row: 'Next to timetable & exams', paper: 'Same book', generic: 'No', ct: 'Yes' },
      { row: 'Split big projects', paper: 'Manual', generic: 'Subtasks', ct: 'Use the assignment planner' },
    ],
    tips: { title: 'The two-day buffer', text: 'Set your own deadline two days before the real one. If something goes wrong (a sick day, a surprise test), you still submit on time. Our assignment planner builds this buffer in for you.' },
    faqs: [
      { q: 'What is the best way to keep track of homework?', a: 'Write it down the moment it is set, with a due date, in one place you check every day. A homework planner app adds reminders and shows what is due today and this week.' },
      { q: 'Can I plan a big assignment step by step?', a: 'Yes. Use our free <a href="/tools/assignment-planner/">assignment planner</a> to split a project into dated steps, then add them as tasks in ClassTrack.' },
      { q: 'Is the homework planner free?', a: 'Yes. Tasks, assignments, priorities and reminders are all free in ClassTrack.' },
      { q: 'Does it work for school and college?', a: 'Yes. Students use it for school homework, college assignments, lab reports and group projects.' },
    ],
    tools: ['/tools/assignment-planner/', '/tools/pomodoro-timer/', '/tools/timetable-maker/'],
    guides: ['/guides/how-to-manage-homework/', '/guides/pomodoro-technique-for-students/'],
  },
];
