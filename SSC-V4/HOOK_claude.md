# Claude handoff — Real Analysis study system

This file is the implementation brief. Read `HOOK_agy.md` when working on content,
syllabus extraction, or question data. Claude owns the product design, engine, UX, and
integration of validated data; Claude does not invent or silently rewrite source data.

Claude must remain pure Claude for design and implementation. Do not use a plugin,
skill, wrapper, sub-agent, or routing mechanism created to force Claude to use AGY.
AGY is a separate data role, not a design authority. Claude may read and edit
`HOOK_agy.md` when improving the data handoff, but AGY must never edit
`HOOK_claude.md`.

## Product

Build a mobile-first study system for Real Analysis I, Real Analysis II, and the third
course, **Real Analysis for Entrance**, in that order. The existing RA1/RA2 content is
the base. The entrance course contains only genuinely new GATE/CUSAT material and must
reuse existing concepts rather than duplicate sequences, continuity, differentiation,
Riemann integration, power series, or uniform-convergence content.

All project files and runtime assets remain inside this folder. Resolve paths from the
project root. Do not depend on `SSC-V2`, `Documents/Banana`, or another checkout.

## Learning design

The core loop is:

```text
attempt → feedback → correction → delayed reattempt → transfer
```

The product priorities are design quality, fluent modular code, responsive interaction,
accessibility, and reliable state transitions. Content volume is secondary.

### Flashcards

Use flashcards narrowly for theorem-statement recall, especially for written university
examinations. Do not pretend a theorem card measures full mathematical mastery. The
card should ask for the statement first and reveal the canonical answer only after the
learner attempts it.

### Theorem-writing workspace

For theorem statements and written mathematics, provide a focused input area with the
MathJax rendering immediately below it. The user types only the math fragment in LaTeX;
the component must not require HTML or full document markup. The user remains the
authority on whether the statement is mathematically correct—the tool verifies rendering,
not mathematical truth.

Add an information button beside the input. It opens a compact palette of the LaTeX
commands needed for the current theorem. Clicking a command inserts it at the cursor,
so the workspace teaches LaTeX while the learner writes. Keep this palette contextual
and small rather than presenting an indiscriminate reference manual. The rendered output
must update immediately below the input, with safe handling for malformed LaTeX.

### Mastery levels

Separate completion from recall quality. Finishing a note or first exposure is only
**Level 1 — completed**. Recall can progress through levels such as:

1. **Completed** — encountered the material.
2. **Recognized** — can identify the theorem or idea when prompted.
3. **Recalled** — can state it without seeing the answer.
4. **Applied** — can use it on a standard problem.
5. **Transferred** — can use it in a changed or unfamiliar problem.

Do not promote a learner merely because they opened a note. Promotion requires the
corresponding evidence, and forgetting or a failed delayed test can lower recall level
without erasing completion history.

### Exam questions

For objective questions, show the OMR-style question first. The learner chooses an
answer before seeing the solution. Then show:

1. whether the selected option was correct;
2. the complete worked answer;
3. the theorem, definition, or trap involved;
4. a short changed-version follow-up when useful.

Support MCQ, MSQ, and NAT semantics separately. Preserve negative-marking and timing
metadata when AGY supplies it.

### Proofs and written answers

Proof ladders must require generation before reveal. Before showing the next rung, ask
the learner for the goal, theorem, hypothesis, or next mathematical move. A learner who
only reads revealed rungs has not demonstrated recall.

### Scheduling

Start with the simple, inspectable stability/difficulty scheduler specified in the
project design. Keep the scheduler easy to instrument and tune from real review logs.
Do not add opaque complexity before there is evidence it improves delayed recall.

Use this progression when teaching a new skill:

```text
worked example → blocked practice → mixed practice → timed transfer
```

Interleave only after the learner has a basic schema. The queue should combine overdue
recall, weak concepts, exam relevance, and a manageable number of new items.

### Flow and difficulty

Use clear short goals, immediate feedback, visible progress, and challenge appropriate
to the learner's demonstrated level. Flow is a UX aid, not the success metric. Measure
delayed performance and transfer rather than time spent or how pleasant a session felt.

## Data boundary

Claude reads validated content from `data/`, `pyq/`, and approved files in `data_temp/`.
`data_temp/` contains drafts and skeletons, not trusted production content. Do not load
it into the app until the validation rules in `HOOK_agy.md` pass.

The skeleton contract is in `data_temp/content-skeleton.json`. If a field or concept is
uncertain, leave it marked for review rather than guessing.

## Current implementation target: Level 1

Claude should implement **Level 1 only right now**:

- theorem-statement flashcards;
- OMR-style question → user choice → full answer and explanation;
- MathJax theorem-writing input with the contextual LaTeX command palette;
- basic note completion and first-attempt result tracking;
- mobile-first layout and accessible navigation.

Level 1 must be usable with a small representative content set. Do not implement the
full graph scheduler, delayed mastery levels, proof-generation ladder, exam-track
weighting, question generators, Firebase sync, or the complete entrance course yet.

## Review gates

After Level 1 is usable, stop implementation and let the user review it in practice.
Collect concrete feedback about clarity, friction, rendering, question flow, mobile
layout, and whether the study session feels useful. Fix Level 1 before starting Level 2.

The staged plan is:

```text
Level 1 → user review → Level 1 fixes
→ Level 2 recall/proof/scheduling → user review → Level 2 fixes
→ Level 3 exam tracks, generators, entrance content, sync, and polish
```

Keep each level a complete, usable slice. Do not build speculative infrastructure until
the preceding review gate passes.
