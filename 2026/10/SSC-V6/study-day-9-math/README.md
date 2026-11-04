# Study Day 9 Maths — Saturday 24 October 2026

Open [study-math-day-9.html](study-math-day-9.html). The timetable calls this study
day 2 of 10; the folder retains Day 9 to match the existing study-day sequence.

Complex Analysis I and Convex Optimization each have 174 study minutes (2.9 h).
All 14 timetable bullets are covered in 4 sections and 199 directly authored
cards: 16 plain-language introductions, 58 concept/figure cards, 77 mathematical
cards, 6 guided derivations and 42 application quizzes. The glossary has 122 terms.
Each derivation has 4 decision checkpoints, giving 24 checkpoints altogether.

Read [the source audit](source/SOURCES.md) for the Semester V syllabi, exact book
sections and coverage map. Both syllabi and all three prescribed textbooks were
found in ssc-files. The relevant syllabus PDFs and textbook extracts are included.
The planned cumulative coverage percentages in the image (73% and 44%) are not
used as completed progress: this independent course starts at zero.

## Study controls

- The focused notch is the initial view. The football button opens Match centre.
- Tap a definition card or Recall to flip from the concept front to the editable
  back. Read flips back. Typing works before a match too.
- Write at least eight words, then Check to reveal the same card's correct
  statement. Compare it and choose I’m correct or Retry. I know this skips writing.
  Practise again permits another attempt while keeping an earlier unlock.
- Locks apply only during a match. Each topic progresses independently. Locked
  cards stay visible, dimmed and full-size; the shelf stops at the first lock.
  Moving left from an unfinished definition is blocked until it is unlocked.
  Flip back to reread it. Off-centre definition cards return to their front.
- Click or tap dotted terms for definitions. Hover/focus alone opens nothing.
  A term stays unlinked on the card defining it; prerequisite terms remain linked.
- Maths and figure cards keep their ordinary reading layout. Quizzes reveal on
  arrival. Their countdowns use real seconds, independently of match-clock scaling.
- Pause/Resume holds the match, quiz countdowns and derivations. Drafts, progress,
  pauses and configured timings survive reload on the same device/browser.
- Custom halves of at least 45 real minutes have Hydration breaks at displayed
  match minutes 25 and 70. Hydration and half-time durations are separate settings.
  Every break offers Skip break to resume immediately.
- Press = for the scientific calculator. M opens Match centre. Arrow keys move
  between cards; within a text box they edit the answer instead.

## Files and rebuild

The canonical JSON is study-match/data/data.json. Its verbatim mirror is
source/math-data-fixed.json. Educational content must be written directly, never
generated or rewritten by scripts. Scripts may extract sources, verify mathematics,
validate, test and build. Both skills folders record this rule.

From this folder:

    python3 study-match/build.py --strict --out ./study-math-day-9.html
    python3 study-match/build.py --strict

These produce the root standalone page and app/, plus both study-match/dist/
outputs. Host app/ for installation/offline caching. MathJax and fonts need their
external resources on first use; the calculator is bundled.

The copied physics sources, original page and old verification are preserved in
source/day-9-physics-baseline/. They are not sources for this maths deck. The
original study-day-9, study-day-8 and study-day-8-math folders remain separate.
