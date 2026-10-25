# Study Match — Day 9 Maths

This separate course covers Complex Analysis I and Convex Optimization for the
24 October 2026 timetable. Read ../source/prompt.md and all files in skills/.
Use ../source/SOURCES.md for the exact syllabus and textbook boundaries.

There are 4 sections, 14 topics, 199 authored cards, 122 glossary terms,
16 intuition cards, 6 derivations with 24 checkpoints, and 42 topic quizzes.
Each subject totals 174 real study minutes. This allocation is independent of
the configurable match clock and real-second question timers.

Author explanations, diagrams, examples and questions directly in data/data.json.
Do not generate or transform educational content with a script. A verbatim copy
synchronizes the finished JSON with ../source/math-data-fixed.json.
Keep skills/ identical to ../source/skills/.

The app code comes from the updated physics Day 9 runtime: focused notch, pause,
skippable breaks, conditional hydration, click-only definitions, editable flip
backs, visible locks and movement bounds. Read ../doc/tda.html and the briefing
when changing those interactions. Preserve all maths, figures and saved card IDs.

Build from this folder:

    python3 build.py --check --strict
    python3 build.py --strict --out ../study-math-day-9.html
    python3 build.py --strict

The root and dist outputs each contain standalone HTML and a hostable app/.
MathJax and fonts use external resources on first load; the calculator is bundled.
