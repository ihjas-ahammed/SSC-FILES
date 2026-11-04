# Study Day 9 — Saturday, 24 October 2026

Open [study-physics-day-9.html](study-physics-day-9.html) in a browser.

The full timetable is covered in 15 topics and 195 manually authored cards:
Quantum Mechanics I (144 minutes) and Properties of Solids (168 minutes).
There are 19 In plain words cards, 8 matrix examples, 123 linked definitions, 12 animated derivations
with 48 decision checkpoints, 46 topic quizzes, worked examples and diagrams.
The 15 topics include all 13 original timetable
bullets; the combined band-theory bullet is split into three focused topics.

Read [the source audit](source/SOURCES.md) for exact syllabus/book sections and
supplementary references not located. Both Semester V FYUGP syllabi and the
required Zettili and Puri & Babbar books were found in ssc-files.
The relevant syllabus PDFs and textbook extracts are included under source/.

The supplied timetable calls this study day 2 of its ten-day plan; Day 9 is the
folder name retained from your request. Its planned cumulative coverage figures
(68% QM and 55% Solids) are not used as completed progress in this new deck.

## Use the app

- Click a section pile to spread its topics, then a topic cover to open its cards.
- The app starts in the focused notch layout. Tap the notch for the full header,
  or the football button beside it for Match centre.
- In plain words cards give the meaning, a mental picture and an example before
  the technical introduction. Click or tap dotted-underlined terms for definitions.
  Hover and focus alone do not open popups. The term a card defines stays unlinked;
  unfamiliar prerequisite terms remain clickable.
  Definitions can link to prerequisite terms; use Previous term or Escape to return.
- State has its own simple introduction. Quantum algebra uses the same two-entry
  state and 2×2 matrices to explain bras, kets, overlaps, adjoints, commutators,
  uncertainty and functions of operators before connecting to wave functions.
- Swipe or use arrow keys to move. Quizzes reveal on arrival.
- Tap a definition card or **Recall · flip card** to turn it over and type on
  the back. **Read · flip back** returns to the concept. Typing works before a
  match too; completed answers offer **Practise again** without losing progress.
  Check asks for at least eight words and reveals
  the correct statement; compare it, then choose **I’m correct** or **Retry**.
  **I know this** skips writing. Each topic unlocks its cards independently.
  Outside a match you can browse freely. Drafts and reviews save on this device.
- During a match, locked cards stay visible and dimmed. You can reach the first
  locked card but cannot pass it. An unfinished definition blocks moving left
  until you confirm or skip it. Flip back to reread while working on the answer.
- Press = for the scientific calculator or M for Match centre.
- Set custom halves before kick-off if desired. Study allocations are real
  minutes and remain separate from the configurable match clock.
- Halves of at least 45 real minutes include Hydration breaks at displayed match
  minutes 25 and 70. Set hydration duration separately from half-time. Shorter
  halves have the half-time break only.
- Choose **Skip break · resume now** during any hydration or half-time break to
  continue immediately.
- Pause/Resume is beside the live notch and in Match centre. Pause freezes the
  match, quizzes and derivations and survives reload.
- Each derivation supplies route, animated, full-page and recall views.
- Progress uses a course-specific storage key, separate from Day 8. The original
  cards keep their IDs when the new intuition cards are inserted.
- Hosted version: app/index.html. Deploy the entire app/ folder to a static host.
  Its service worker caches the shell and previously loaded resources.
- Maths uses the inherited MathJax CDN; a first connection is needed for maths
  typesetting. The calculator engine is bundled.

## Authoring and rebuild

The educational data was written directly, without a generation script.
The same requirement is recorded in both skills directories.

Edit study-match/data/data.json directly; its exact mirror is
source/physics-data-fixed.json. Use the existing Python builder only to validate
and assemble the app. From study-match/:

    python3 build.py --strict --out ../study-physics-day-9.html
    python3 build.py --strict

The first command builds the root standalone page and root app/. The second
builds study-match/dist/study-match.html and study-match/dist/app/.

The copied Day 8 source materials are preserved in source/day-8-baseline/.
The original study-day-8 and study-day-8-math folders were not modified.
