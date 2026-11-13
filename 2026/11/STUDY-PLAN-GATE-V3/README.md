# GATE DA 2027 adaptive planner, V3

Live: https://flow-research-26.web.app/study-plan-gate-v3/ (deploy: `../deploy-november.sh`).
One page (`index.html`), mobile-first. Topic PDFs load from GitHub raw (`main`), so this folder must be pushed.

## What changed from V2
- **Adaptive, not fixed.** The plan is rebuilt from *today*, the exam date and the minutes of each day on every tick or change. Missed work is never owed: it moves forward; if the time left is short, the units with the lowest value per minute drop (tier B/C first, PYQ tests are kept). The Today card says how much does not fit and how many extra minutes a day would fit it.
- **Time controls.** Today's minutes (±15), any single day (Plan → tap a day, "Day off"), and the week (Plan → My week). Sem 6 university exams (V6 dates 19–27 Jan 2027): 30 min a day from 10 Jan, 0 on exam days (toggle).
- **Topic PDFs.** Every unit is cut from its V1 module textbook into `cuts/<COURSE>/uNN.pdf` (410 files) and opened in the in-app PDF viewer (PDF.js, lazy pages, pinch / ± zoom, page jump, download, offline cache).
- **Resources tab.** Explorer over topic cuts, module textbooks, DA papers + official keys, other GATE papers (CS, MA, EC, EE) and reference books; search, view, download.
- **Practice with instant feedback.** Every DA 2024–2026 question is cropped to an image (`pyq/`) with its official key (`data/keys.json`): MCQ / MSQ / NAT checked at once. Quick check per unit, module-wise PYQ tests (timed, GATE negative marking), quick drill, mistakes, three full mocks (2026 unseen, 2025, 2024 re-timed).
- **Progress ticks (Progress tab).** One card per course, like V1: a slider with module marks, a "Tick topics individually" list with Tick all per module. Each tick updates the card and the plan summary at once; the plan is refitted before you leave the tab.
- **Start plan from tomorrow (Today).** Sets the plan start to tomorrow: nothing is scheduled today. "Start today" undoes it. Ticks already made today stay in today's list.
- **Study loop.** Read the cut → smart notes (idea, `question :: answer` lines, worked example, trap) → flashcards (1, 3, 7, 16, 35, 70 days) → quick check → module test. "Explain" opens Claude with a ready prompt (video, mini-game, walkthrough, notes draft).

## Plan rules
- Order: LA, PS, CO, DB, PDSA, ML, AI (main track), General Aptitude in parallel (25% of each day, setting). Each unit = V1 minutes × pace (0.4 LA/PS, 0.6 others) + 5 min notes. A module's PYQ test follows its last unit (DA 2024 + 2025 questions; 2026 is kept for Mock 1).
- Chapter practice (module PYQ tests and the Quick check / Quick drill buttons) is Mon–Fri only while the switch in My week / Settings is on. The tests are shared equally across the weekdays left (about one a day when the count allows). Sat and Sun keep reading, notes, flashcards, GA sets and mocks.
- Final phase is reserved backwards from the exam: 3 mocks × 2 sittings of 90 min (never split when a 90-min day exists) and 30-min revision per course.
- Items ticked today stay in today's list; ticking "Finished early?" pulls the next item forward.

## Rebuild
    python3 tools/crop_pyq.py      # question images + pyq/index.json (needs pdftotext, pdftoppm, Pillow)
    python3 build.py [--recut|--no-cut]
Needs node (reads V1 data via `../STUDY-PLAN-GATE-V2/src/dump_v1.mjs`), pypdf, pdfinfo. Inputs: V1 data and PDFs, V2 `data/tiers.json`, `data/keys.json`.

## Data notes
- Keys: DA2025 (IIT Roorkee), DA2026 (IIT Guwahati), DA2024 (final key PDF hosted on the IIT Guwahati archive). PDFs in `keys/`. The 2024 sample paper has no key (self-check).
- Question → course/module: V2 tier matches first, then V1 module lists; GA = Q1–10. 192 of 195 real-paper questions mapped.
- V1 page anchors are used as is. DB units 62 and 80 have placeholder pages; they open the module PDF instead of a cut.
- Progress: localStorage `gate_v3` (Progress → Export / Import). Test hooks: `?today=YYYY-MM-DD`, `?raw=<base>` (serve PDFs locally), `__plan()`, `__setToday()`, `__state()`.
