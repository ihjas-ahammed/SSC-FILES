# Study Match — Day 9

This course covers Quantum Mechanics I and Properties of Solids for Saturday,
24 October 2026. See [the main README](../README.md) for study guidance and
[the source audit](../source/SOURCES.md) for the local FYUGP syllabi and textbooks.

There are 5 sections, 15 topics and 195 authored cards, including 19 plain-language
cards and 8 matrix examples, with 123 glossary terms, 12 derivations with 48 checkpoints and 46 topic quizzes.
Topic allocations sum to 144 minutes of
QM and 168 minutes of Solids. They do not change the match clock or quiz seconds.

## Content and skills

All educational content is in data/data.json. Write and edit it directly yourself.
Do not generate, populate or rewrite it with scripts. Scripts may extract sources,
validate, check calculations and build the app. A verbatim file copy may synchronize
the finished JSON with ../source/physics-data-fixed.json.

Read every file in skills/ before editing. Keep that folder identical to
../source/skills/. Preserve the current deck on app feature updates; this syllabus
course does not use model-paper marking rubrics or Remember-check additions.

## Build

From this folder:

    python3 build.py --check --strict
    python3 build.py --strict --out ../study-physics-day-9.html
    python3 build.py --strict

The root and dist builds each include a standalone HTML and a hostable app/
directory. Rebuild both after changing data, styles, components or the template.

The runtime includes animated MathFlow derivations, auto-reveal quizzes,
real-time answer timers, a bundled calculator, custom halves and break alerts.
The focused notch is the default. Pause/Resume holds the match and study timers.
Halves lasting at least 45 real minutes include hydration breaks at displayed
25 and 70; hydration duration is a separate setting. Definitions are written
in the top-level glossary and linked in prose at runtime. Click, keyboard
activation or mobile tap opens them; hover/focus alone does not. Defined terms
stay unlinked on their own cards. State is introduced simply and the quantum
algebra uses consistent column-vector/matrix examples. Original card IDs are preserved.
With meta.definitionChecks enabled, definition info cards use eight-word recall,
same-card reference comparison, confirmation, Retry and “I know this”. Only matches
lock progression, independently per sheet. Maths and graphics retain their
existing presentation. See skills/08-definition-recall.md and ../doc/ for the brief.
The implementation also follows ../doc/tda.html: concept front, editable recall
back, tap-to-flip, dimmed visible locks and a scroll boundary at the first lock.
Moving left from an unfinished definition is held until unlock. Off-centre cards
return to their front. Typing works outside matches and on migrated reading cards.
MathJax and fonts use the existing external URLs; cached resources work after
they have loaded, while first-time typesetting requires connectivity.
