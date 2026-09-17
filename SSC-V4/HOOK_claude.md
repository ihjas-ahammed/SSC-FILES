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

`data/`, `pyq/`, and `diagrams/` are AGY's territory. Claude integrates what is there
and may repair rendering-level faults it finds (unclosed `$`, a lost escape, an `id` that
does not resolve, HTML that breaks the parser), but does not rewrite mathematics, answer
keys, or provenance — those go back to AGY as a correction request. The field-by-field
runtime contract lives in `HOOK_agy.md` → "Runtime data contract"; `data/SCHEMA.md` is
the authoring schema behind it, keyed to Bartle & Sherbert 4e numbering.

## Current state — Level 1 is built and live

The app is at `app/index.html` and now runs on **validated content, not mock**:
`app/sources.js` has `use: 'live'`, loading `data/syllabus.js`, `data/school.js`, the
`ra1-*` set, `ch5.a/ch5.b/ch6`, `questions.ra2.m1.js`, and `data/objective.js`.
`app/mock/` is retained only as the fallback set and must never be pointed at by `live`.

`build.py` inlines `app/src/ui.css`, every `app/src/*.js`, and the `live` data files
listed in `sources.js` into one self-contained `build/index.html`. It parses the `live`
array out of `sources.js` by regex, so keep that array a plain list of quoted paths.
The build is deployed to Firebase Hosting at
`https://ssc-data-science-qm.web.app/math/real-analysis`.

### Engine map

No framework, no bundler, no modules — plain globals, each view returns a real element.

| file | role |
| --- | --- |
| `boot.js` | theme, data loading, the earned Level 2 unlock, routing, failure surfaces |
| `core.dom.js` | element builder, routing primitives, `sanitizeMathHtml`, `linkifyConcepts` |
| `core.pool.js` | one pass over the data globals; every lookup above this line goes through it |
| `core.store.js` | progress: completion, proof work, first-try grades, attempts — and the merge |
| `core.sync.js` | multi-device sync over Firebase RTDB REST; merges before every write |
| `core.tex.js` | MathJax typesetting and safe rendering of learner fragments |
| `core.md.js` | line-at-a-time markdown that leaves everything between `$…$` alone |
| `core.latex.js` | the LaTeX catalogue, ranked per concept, as a completion source |
| `comp.figure.js` + `fig.library.js` | the figure engine and the hand-drawn inline-SVG figures |
| `comp.tree.js` | the tick tree — course → module → section → concept, with ring progress |
| `comp.write.js` | the line-by-line writing workspace: output above input, completions below |
| `view.home/study/note/recall/omr/write.js` | the five screens plus Today |

### Invariants the engine depends on

1. **Ids are stable forever.** Progress is keyed on them: `conceptId` for completion,
   `conceptId#<index in cards[]>` for a statement card, `question.id` for a locked
   attempt. Appending to `cards[]` is safe; reordering silently rewrites recall history.
2. **The data seam is the only integration point.** `app/src` must never name a data
   file, a course, or a concept id. Changing the content set is a one-line edit in
   `app/sources.js`.
3. **Authored HTML is inserted as markup**, so it must stay trusted — no scraped HTML,
   no `<script>`, no inline handlers. `sanitizeMathHtml` protects bare `<` inside maths
   (`$x < y$`) from being parsed as a tag; it is not a sanitizer for untrusted input.
4. **Concept references linkify automatically.** `<code>c.X.Y</code>` or `$c.X.Y$` in any
   prose field resolves through `Pool.concept(id)` into a clickable `§X.Y Title` chip.
   An id that does not resolve renders as a dead chip and reads as a bug.
5. **Figures are drawn by the app, never supplied as images.** `figs: ['fig.eps-delta']`
   must name an id in `fig.library.js`. A concept needing a new picture needs a new
   figure built, not a PNG in `diagrams/`.
6. **`needs` is navigation, not bookkeeping.** The note view walks the chain three deep
   and inverts it into "used later by", so a sloppy prerequisite produces a misleading
   map rather than a missing link.
7. **Storage degrades, never breaks.** `core.store.js` falls back to memory when
   `localStorage` is unavailable, so a locked-down or private-mode browser gets a
   working-but-forgetful session.
8. **The reel is ONE scroller.** `.reel-card` must never be `overflow-y: auto`: a snap
   container whose cards are themselves scrollable traps the gesture, and
   `overscroll-behavior: contain` then refuses to chain it back out. Snap is
   `proximity`, never `mandatory` — `mandatory` makes everything between two snap points
   unreachable the moment a card is taller than the viewport.
9. **`.reel` is `position: relative`, and that is load-bearing.** It makes the reel the
   `offsetParent` of its cards, so `card.offsetTop` is in the same coordinate system as
   `reel.scrollTop`. Never navigate the reel by `index × clientHeight`.
10. **No `transform` on a snap child.** The browser snaps to the *transformed* box, so a
   decorative `scale()` on the dim state silently moves every snap point. The reel's
   settle effect is opacity only.

### What Level 1 actually shipped

- theorem-statement flashcards as a vertical reel (`view.recall.js`), `state` cards only,
  nothing revealed before an attempt, first grade is the one recorded;
- OMR-first objective questions with per-type scoring — MCQ single key, MSQ exact set
  (a clean subset is reported as partial and earns nothing), NAT value/tolerance — plus
  negative marking, timing, the worked answer, the tested idea, the trap, and the twist;
- the MathJax theorem-writing workspace with the contextual LaTeX palette;
- the tick tree over the whole syllabus, completion labelled "encountered the material";
- Today, keeping completion and recall apart rather than merging them into one figure;
- the figure engine, including the two controllable ε–δ and uniform-continuity figures;
- proof support ahead of schedule (see below).

### Proof support

`proofView` in `view.note.js` gives every theorem two gated controls:

- **💡 Try proof (hint)** — reveals `proof.idea`, `proof.why`, and the Step 1 clue
  (`proof.rungs[0].why`) beside a scratchpad textarea;
- **👁 Show step-by-step proof** — reveals all rungs and `proof.ends`.

Written questions (`writtenOn`) carry the same pair over `approach` and `solution`.

At Level 2 both gain a third control, **"I worked this proof through"**, which is the
only thing that earns mastery level 2 (see below).

One gap remains, and it is real: the rungs reveal as one block rather than one at a time
with a prompt at each rung. Until that lands, do not describe the reveal itself as
satisfying "generation before reveal" — the *mark* is the evidence, and it is
self-reported.

## Level 2 — what it is, and what it deliberately is not

Level 2 adds **one** rung to the ladder and one new kind of evidence for it. It is not
the scheduler, and it is not levels 3–5.

### The level is PER COURSE

`Store.level(courseId)`, not `Store.level()`. A learner can be consolidating proofs in
Real Analysis I while meeting Real Analysis II for the first time, and one global switch
would force the harder standard onto the course they have only just opened. Each course
carries its own level, its own unlock, and its own progress reading.

Level 2 has to be **unlocked on that course** before it can be selected:

- **earned** — that course is fully ticked at Level 1. `boot.js` checks every course once
  on the way in (`earnedUnlocks`) so "earned" cannot mean something slightly different on
  each screen;
- **taken** — the learner unlocks it on the course card on Today.

Unlocking is not promotion; switching is always a deliberate press. Locking again hides
that course's Level 2 surfaces and **keeps every record**.

### What "done" means, and why ticks change when you switch

`core.progress.js` is the one place `Store` (which knows about ticks and proofs but not
courses) meets `Pool` (which knows about courses but not progress). **Every screen that
draws a tick, a ring or a meter asks `Progress`, never `Store` directly** — that is what
keeps "done" meaning one thing.

```
level 1   ticked
level 2   ticked AND, if it has a proof, that proof worked through
```

So switching a course to Level 2 makes some completed notes incomplete again. That is
the intended reading, not a bug: **Level 2 is the progress measure for a course held to
it.** Courses still at Level 1 are untouched by that decision, which is the whole point
of the level being per course.

This gives a concept three states, because at Level 2 a ticked note with an unworked
proof is genuinely neither done nor untouched:

| state | tree tick | meaning |
| --- | --- | --- |
| `none` | empty | not ticked |
| `part` | mixed (–) | ticked, proof outstanding |
| `done` | ✓ | complete at this course's level |

One press of the tick **advances one step** — tick → work the proof → clear — so the
control always has somewhere to go and never silently refuses.

### Proof work is the level 2 evidence

`Store.setProofDone(id, on)`, keyed on a concept id, or `'w:' + questionId` for a
written question. The denominator is `Pool.ids.proofs(courseId)` — **the concepts that
carry a `proof` block**, not every note, because a chapter is not "recognised" because
one theorem in it was worked through.

It is self-reported, like the Level 1 tick, and the label says exactly what is being
claimed — *"Claim this only if you produced the argument yourself, not if you read it"* —
because a mark that can be earned by scrolling is not evidence of anything.

### The reel

`Progress.reel()` decides what is in it, and the rules are deliberate:

- **only material you have ticked.** Studying a statement you have never read is not
  recall, it is reading with extra steps, and a reel full of unread theorems is exactly
  the pile the reel exists to avoid;
- **proof cards only from a course at Level 2** — a second card per theorem that asks
  you to reconstruct the argument, graded like any other;
- **ordered by how badly each card needs the attempt** (never attempted → missed →
  partly → got), then by reading order. No randomness, so the queue is inspectable and
  the same twice running.

The scroll behaviour is Shorts/Reels, and one CSS rule carries it: **`scroll-snap-stop:
always`**. Without it a flick keeps its momentum and sails past two or three snap points
before settling — which is what "it swipes twice" was. With it the scroller must come to
rest on the very next snap point however hard the flick.

That rule only holds if **every card is exactly one viewport tall**, so the card is a
fixed-height frame and its content scrolls inside `.inner`. That inner scroller's
`overscroll-behavior` is left at `auto` on purpose: it scrolls to its own end and then
chains out to the reel. `contain` was tried, and is what trapped the gesture on a long
card.

### The prerequisite cascade

Ticking a concept offers to tick its untticked prerequisites too. `UI.pendingPrereqs(id)`
is the single definition of what that would do; the note view asks inline with every
name listed, and the syllabus tree asks with a confirm. It is **offered, never
automatic**, and the list is always shown — a cascade the learner cannot see is one they
cannot trust.

### Sign-in, and sync

**The app does not open until there is a name and a roll number** (`view.login.js`,
gated in `boot.js`). That is not ceremony: the record is keyed on those two, so progress
made anonymously could never be merged honestly with the record it later turns out to
belong to.

`core.sync.js`: Firebase RTDB over plain REST, no SDK. The key is `slug(name) + '--' +
slug(roll)`. The separator is `--` and not `.` because an RTDB key may not contain
`.`, `$`, `#`, `[`, `]` or `/`.

It is a **pass key, not a password**, and the login screen says so in as many words
rather than implying security it does not provide. If that is not acceptable for the
real deployment, the answer is real auth, not a longer key.

`Sync.hello()` registers the key in a separate sign-in store, then merges. Being offline
never blocks entry — the local record opens and reconciles later.

**Test and live use entirely separate stores**, progress and sign-in both, decided in one
place off `DATA_KIND`. AGY owns standing up the official pair; see "The databases" in
`HOOK_agy.md`.

Anything the next page load depends on must go through `Store.flushNow()`: the ordinary
write is debounced 250ms, and `location.reload()` after a sign-in or sign-out would
otherwise land back where it started.

Every sync **merges before it writes** (`Store.mergeStates`), and the merge rules come
from what each field means rather than from one "newest wins":

- a **tick is a decision** — the later one survives, with tombstones (`undone`,
  `unproofs`) so an un-tick on one device is not resurrected by the other;
- a **first attempt is a measurement** — the *earliest* one survives, on either device;
- `merge(a,b) == merge(b,a)`, and merging twice changes nothing. Both laws are asserted
  in the driver tests; break either and a reconnect can silently lose a week.

`Store` state is versioned (`v: 2`) and v1 records upgrade in place.

### The writing workspace

**Markdown is the default.** Every line is prose until you put maths in it, because a
workspace you cannot write a sentence in is not a workspace, it is a formula box. Maths
goes in as `$…$` and `$$…$$`, and a command accepted from the completion strip **wraps
itself in `$…$`** when the caret is in prose — so a symbol can be dropped into the middle
of a sentence without stopping to think about delimiters. `mathFirst: true` is the
opt-in exception for a box that exists only to capture one formula.

The same component is the scratchpad behind every *Try proof (hint)* and written-answer
gate, filed under `proof:<id>` / `written:<id>` so a sketch never collides with the
statement draft for the same concept — and, unlike the textarea it replaced, it is
**persisted and synced**.

`Latex.splice` takes a `wrap` flag, and the distinction is load-bearing: wrapping a
*selection* keeps it (`\sqrt{x}`), replacing a *half-typed command* must discard it, or
`\eps` + `$\varepsilon▮$` becomes `$\varepsilon\eps$`.

An on-screen keyboard shrinks the visual viewport but not the layout one, so `revealInput`
measures the overflow against `window.visualViewport` and scrolls the nearest scrolling
ancestor — the reel when inside it, the window otherwise.

## Still not built

The scheduler, mastery levels 3–5, the per-rung proof ladder, exam-track weighting,
question generators, and the entrance course content. Do not build speculative
infrastructure for them ahead of the review gate.

## Publishing

Two pages, same code, different pools:

| URL | pool | built by | published by |
| --- | --- | --- | --- |
| `/math/real-analysis` | `data/` | `python3 build.py` | **AGY** |
| `/math/real-analysis-test` | `app/mock/` | `python3 build.py --mock` | Claude |

`deploy.sh` refreshes the test page and republishes the **committed**
`build/index.html` for the live one; `deploy.sh --live` rebuilds the live page from
`data/` and is AGY's command. Claude ships app changes to the test page and does not
publish the live one — a Hosting deploy replaces the whole site, so that separation is
what keeps unvalidated content off the real URL. `build/index.html` is committed on
purpose: it is the record of what is actually live.

`app/mock/` is therefore permanent. Its theorems carry real `proof` blocks so Level 2
has something to be claimed against.

## Review gates

Level 1 is usable, loaded with validated RA1 content, and deployed. Level 2 is built and
running on the test page. Both gates are **open and waiting**: collect concrete feedback
about clarity, friction, rendering, question flow, mobile layout, and whether the study
session feels useful, then fix before going further.

The staged plan is:

```text
Level 1 → user review → Level 1 fixes
→ Level 2 recall/proof/scheduling → user review → Level 2 fixes
→ Level 3 exam tracks, generators, entrance content, sync, and polish
```

Keep each level a complete, usable slice.

---

## Implementation log

### September 2026

1. **Live data cutover.** `app/sources.js` flipped from `use: 'mock'` to `use: 'live'`
   across twelve `data/` files. `build.py` now reads that same `live` array so the built
   page and the dev page always carry the same content set.
2. **Try proof (hint) and the scratchpad.** Dual gated controls added to theorem proofs
   and to written questions in `view.note.js`, with `.proof-scratchpad` styling in
   `ui.css`. Hint-first, solution-second; still block-reveal, still unpersisted.
3. **Automatic concept linkification.** `linkifyConcepts` in `core.dom.js`, hooked into
   `DOM.el`'s `{ html: v }` path, turns `c.X.Y` / `s.name` references in any authored
   prose into `.concept-ref` chips carrying the section number, the title, and a
   tooltip, routing to `#/note/<id>` on click.
4. **DOM and runtime robustness.** `sanitizeMathHtml` stops a bare `<` in an inequality
   from truncating an element; a temporal-dead-zone bug in `core.store.js` was fixed so
   the private-browsing fallback initialises in the right order.
5. **RA1 content integration.** Modules II–IV audited with AGY: statements, proofs,
   traps and `state` cards filled in for §3.1–§3.5 and §4.1–§4.3, and unclosed LaTeX
   delimiters repaired across the data files.
6. **Deployment.** `build.py` → `build/index.html` → Firebase Hosting at
   `https://ssc-data-science-qm.web.app/math/real-analysis`.

### Level 2

7. **Level gating.** `Store.level()` / `setLevel()` / `unlocked()` / `unlock()`, default
   Level 1. Earned at boot by finishing a course, or taken in the level card on Today.
   Unlock ≠ promotion; locking again keeps every record.
8. **Proof work.** `Store.setProofDone`, `Pool.ids.proofs()`, the "I worked this proof
   through" control on every proof and written answer, a Proofs tile and a fourth loop
   step on Today. Level 2 is counted per proof.
9. **The prerequisite cascade.** `UI.pendingPrereqs` plus an inline offer in the note
   view and a confirm in the tree. Offered, never automatic, always itemised.
   `Store.setDoneMany` makes a bulk tick one write instead of N.
10. **The writing workspace, rebuilt.** One line at a time, each line's rendering
   directly above its input; Enter settles the line and opens the next; settled lines
   reopen on tap and are cached by source text. Markdown with `$…$`/`$$…$$` via
   `core.md.js`; a delimiter-free line in a maths-first box is bare display LaTeX.
   The key sheet is gone: commands are completions in a thumb-high strip
   (`Latex.tokenAt/complete/suggestions/accept`), tap or Tab to accept.
11. **Sync.** `core.sync.js` — RTDB over REST, name + roll as the pass key, merge before
   every write, auto-push debounced and auto-pull on focus and on `online`.
   `Store.mergeStates` is commutative and idempotent.
12. **The reel actually scrolls.** Removed the nested scroller and `mandatory` snap, made
   `.reel` the offsetParent, navigated by `offsetTop`, dropped the `scale()` that was
   shifting snap points, and replaced the IntersectionObserver ratio test with one based
   on viewport coverage so a card taller than the screen is no longer dimmed forever.
13. **Build and deploy.** `build.py --mock` → `build/test/index.html`; the script order
   is now read out of `app/index.html` instead of a hand-kept copy that had already
   drifted. `deploy.sh` publishes `/math/real-analysis-test`; `--live` is AGY's flag.
14. **`create_level1.md`.** The full recipe for rebuilding this system for any subject
   from a syllabus and reference books, up to Level 1.

### Level 2, second pass

15. **The level moved to per course.** `Store.level(courseId)`, unlocked and switched on
   each course's own card on Today. The global switch is gone.
16. **`core.progress.js`** — the one place Store and Pool meet. Every tick, ring and
   meter now reads "done" from here, so a course at Level 2 counts proof work and a
   course at Level 1 does not. Concepts gained a third state (`part`), and the tree tick
   advances one step per press.
17. **The reel actually behaves like a reel.** `scroll-snap-stop: always` with every card
   exactly one viewport tall — one swipe, one card, however hard the flick. Verified
   with raw touch drags in Chrome, not just programmatic scrolls. Its contents now come
   from `Progress.reel()`: ticked material only, proof cards from Level 2 courses, hardest
   first.
18. **The editor writes prose.** Markdown is the default; completions wrap themselves in
   `$…$` when the caret is in prose. Fixed `Latex.splice` re-inserting the half-typed
   command it was supposed to replace.
19. **Scratchpads are the real editor**, persisted under their own keys and synced.
20. **Sign-in is required** (`view.login.js`), with a separate sign-in store per build.
21. **`Store.flushNow()`** — the debounced write cost a sign-in that was followed
   immediately by `location.reload()`.
