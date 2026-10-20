// Builds optimised images for the site from the ClassTrack app assets.
// Run once (or when screenshots change): npm run images
// Output goes to public/img and public/ (icons). Outputs are committed, so
// Cloudflare Pages does not need sharp during its build.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const APP = 'C:/Users/princ/Downloads/Attendence App';
const OUT = path.resolve('public/img');
const PUB = path.resolve('public');
await mkdir(OUT, { recursive: true });

const screens = {
  'screen-home': 'play-store-assets/store-2026/raw/01_home.png',
  'screen-attendance': 'play-store-assets/store-2026/raw/02_attendance.png',
  'screen-planner': 'play-store-assets/store-2026/raw/03_planner.png',
  'screen-plan': 'play-store-assets/store-2026/raw/03b_plan_overview.png',
  'screen-schedule': 'play-store-assets/store-2026/raw/04_schedule.png',
  'screen-tasks': 'play-store-assets/store-2026/raw/05_tasks.png',
  'screen-grades': 'play-store-assets/store-2026/raw/06_grades.png',
  'screen-assistant': 'play-store-assets/store-2026/raw/08_assistant.png',
};
for (const [name, rel] of Object.entries(screens)) {
  await sharp(path.join(APP, rel)).resize({ width: 480 }).webp({ quality: 80 }).toFile(path.join(OUT, `${name}.webp`));
}

for (const m of ['wave', 'think', 'celebrate', 'excited']) {
  await sharp(path.join(APP, `assets/mascot/mascot_${m}.png`)).resize({ width: 240 }).webp({ quality: 82 }).toFile(path.join(OUT, `mascot-${m}.webp`));
}

// App icon -> favicons and PWA icons.
const icon = path.join(APP, 'assets/icon/icon.png');
await sharp(icon).resize(32).png().toFile(path.join(PUB, 'favicon-32.png'));
await sharp(icon).resize(180).png().toFile(path.join(PUB, 'apple-touch-icon.png'));
await sharp(icon).resize(192).png().toFile(path.join(PUB, 'icon-192.png'));
await sharp(icon).resize(512).png().toFile(path.join(PUB, 'icon-512.png'));
await sharp(icon).resize(96).webp({ quality: 85 }).toFile(path.join(OUT, 'app-icon.webp'));

// Default Open Graph image (1200x630).
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="660" y="60" width="480" height="510" rx="40" fill="#E1EAF6"/>
  <circle cx="1060" cy="140" r="70" fill="#EAE5FA"/>
  <rect x="760" y="150" width="280" height="330" rx="34" fill="#ffffff"/>
  <rect x="760" y="150" width="280" height="70" rx="34" fill="#6C5CE7"/>
  <rect x="760" y="190" width="280" height="30" fill="#6C5CE7"/>
  <rect x="820" y="128" width="16" height="48" rx="8" fill="#F59E0B"/>
  <rect x="964" y="128" width="16" height="48" rx="8" fill="#F59E0B"/>
  <path d="M840 350 l45 40 l95 -95" fill="none" stroke="#F59E0B" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M700 520 l12 -26 l12 26 l26 12 l-26 12 l-12 26 l-12 -26 l-26 -12z" fill="#FFC94D"/>
  <text x="70" y="140" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="#1B1C34">studyplanner<tspan fill="#6C5CE7">.tech</tspan></text>
  <text x="70" y="270" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="70" font-weight="700" fill="#1B1C34">Plan your study.</text>
  <text x="70" y="355" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="70" font-weight="700" fill="#1B1C34">Own your week.</text>
  <rect x="70" y="390" width="440" height="16" rx="8" fill="#FFC94D" opacity="0.8"/>
  <text x="70" y="470" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="30" fill="#3E3F5B">Free study planner, timetable maker</text>
  <text x="70" y="512" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="30" fill="#3E3F5B">and exam planner for students.</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(path.join(PUB, 'og-default.png'));

// Simple SVG favicon (calendar + check, matching the app icon).
await writeFile(path.join(PUB, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3730A3"/><stop offset="1" stop-color="#6366F1"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g)"/><rect x="15" y="19" width="34" height="30" rx="5" fill="#fff"/><path d="M15 24a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v2H15z" fill="#3730A3"/><rect x="24" y="15" width="4" height="8" rx="2" fill="#F59E0B"/><rect x="36" y="15" width="4" height="8" rx="2" fill="#F59E0B"/><path d="M24 37l5 4 11-10" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`);

console.log('Images built.');
