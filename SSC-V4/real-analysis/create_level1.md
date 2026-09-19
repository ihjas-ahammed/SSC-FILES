# create_level1.md — building a Level 1 study system for any subject

This is the complete recipe. Given a `sources/` folder holding a syllabus and the
reference books for **any** subject, it produces the same product you are looking at:
a mobile-first, offline-capable, single-deploy study app with theorem/definition notes,
statement-recall flashcards, OMR-first objective questions, and a LaTeX writing
workspace — all running on one swappable data pool.

Nothing here assumes Real Analysis. Where a step is mathematics-specific it says so and
gives the substitution for other subjects.

**Scope of this document: up to Level 1.** Level 1 is a complete, usable slice —
*encountered the material* plus honest first-attempt measurement. Recall levels 2–5,
scheduling, and sync are Level 2 and are specified elsewhere.

---

## 0. What Level 1 is, precisely

One sentence: **read it → state it from memory → answer questions on it**, with feedback
always after the attempt and never before.

Level 1 tracks exactly two things and keeps them apart on purpose:

| tracked | meaning | what it is NOT |
| --- | --- | --- |
| **completion** | you have encountered the material | evidence of recall |
| **first attempt** | the first recorded grade on a card or question | your best score |

Every later attempt is allowed and shown, but the *first* one is the only honest
measurement, so it is never overwritten. If you merge these two numbers into one
percentage you have built a progress bar, not a study system. Don't.

Level 1 deliberately does **not** have: a scheduler, spaced repetition, recall levels,
a proof ladder, exam-track weighting, question generators, accounts, or sync.

---

## 1. Inputs — what must be in `sources/` before you start

```
sources/
  syllabus/
    <course>-syllabus.pdf        official university/board syllabus
    exams/                       optional: GATE/JAM/NET/competitive syllabi
  books/
    <reference-book>.pdf         THE book. One primary per course.
    <secondary>.pdf              optional
  papers/
    <exam>-<year>.pdf            past question papers
    <exam>-<year>-key.pdf        answer keys, when they exist
```

Two hard rules:

1. **One primary reference book per course, chosen before anything else is authored.**
   Its numbering becomes the spine of every id in the system (§4.2). Changing the book
   later means renumbering every concept, and ids are permanent (§4.1).
2. **Books are not committed to the repository.** Read them locally, record provenance
   as *book + edition + chapter/section/page*, and keep the PDF out of git.

If you have no past papers, Level 1 still works — you author pattern questions and label
them as such. What you must never do is invent a citation (§4.6).

---

## 2. Phase 1 — Extract the syllabus into a module map

Read the official syllabus and produce, for each course, a list of **modules** with:

- module number as printed (I, II, III, IV — keep the syllabus's own numbering);
- module title, verbatim;
- marks or weight, if the syllabus assigns them;
- the topics listed under it, verbatim.

Do not paraphrase, reorder, or "clean up" the syllabus at this stage. It is the contract
with the examiner; your opinion about a better ordering belongs in the reading order,
not here.

Output: a table per course. Keep the raw extraction — you will be checked against it.

### Multi-course systems

If the product covers several courses (here: Real Analysis I, II, and an entrance
course), fix the display order now and fix the **non-duplication rule**:

> A later course contains only genuinely new material. It references earlier concepts
> through prerequisites; it never re-authors them.

This is what makes three courses one pool instead of three copies.

---

## 3. Phase 2 — Choose the numbering spine

**The single most important decision in the build.**

Every concept id is derived from the *reference book's* numbering, never from the
syllabus's module numbering:

```
c.5.1.3     = concept, Bartle & Sherbert §5.1, third numbered item
s.abs-ineq  = school/background prerequisite, no book number
```

Why the book and not the syllabus:

- Syllabi are re-issued and renumbered every few years; the book is stable.
- Several courses and several exams map onto **one** pool of concepts. Module numbers
  can't do that — §5.1.3 is one node whether RA1, JAM or the entrance course points at
  it. The syllabus becomes a *view*, not a container.
- A student holding the book can find any node in seconds.

For a subject whose book has no fine-grained numbering (many humanities and some
lab-based subjects), invent a stable scheme and freeze it:

```
c.<chapter>.<section>.<n>    numbered book         ← preferred
c.<topic-slug>.<n>           unnumbered book
s.<slug>                     assumed background, any subject
```

Record the scheme in a `SCHEMA.md` beside the data. Then never change it.

---

## 4. Phase 3 — The data contract

The app reads exactly **six global names** and nothing else. Data files are plain `.js`
that declare or push into them. No modules, no bundler, no framework, no build step for
data.

```js
DATA_KIND   'mock' | 'live'     'mock' makes the app badge every screen as unvalidated
SYLLABI     [ course ]          array order IS display order
SECTITLE    { '5.3': 'Continuous Functions on Intervals' }
CONCEPTS    [ concept ]         CONCEPTS.push(...) from as many files as you like
OBJECTIVE   [ question ]        OMR objective questions
QUESTIONS   [ written ]         optional; written/essay questions
```

### 4.1 course

```js
{ id, title, code, sem, blurb,
  pending?: true, pendingNote?,          /* course announced but not yet authored */
  modules: [ { id, n, title, marks?, secs: ['5.3', …], pending?, builds?, why? } ] }
```

`secs` is what binds a module to content: a section id listed here makes every concept
in that section part of the course, counted in progress, and reachable from the tree.

### 4.2 concept — the unit of everything

```js
{
  id:      'c.5.1.3',        // from the numbering spine. STABLE FOREVER.
  sec:     '5.1',
  kind:    'definition',     // definition|theorem|corollary|lemma|example|technique|counterexample
  tier:    'core',           // core = examinable | extra = off-syllabus but high exam value
                             // ext  = included for chapter completeness
  title:   'Sequential Criterion for Continuity',
  oneLine: 'Continuity = every sequence heading to c has images heading to f(c).',

  statement: `…HTML with $TeX$…`,   // the formal statement, stated correctly
  intuition: `…HTML…`,              // plain words FIRST, symbols second
  needs:   ['c.5.1.1', 'c.3.1.3'],  // prerequisite ids; may cross chapters AND courses
  traps:   [ `…HTML…` ],            // where marks are actually lost
  figs:    ['fig.seqcrit'],         // optional; ids in the figure library
  cards:   [ { q, a, kind } ],      // kind 'state' → the recall deck
  proof:   { idea, why?, rungs: [ { why, m } ], ends? },   // theorems/lemmas
  provenance: { book, edition, sec, page, at, review_required? }
}
```

Field-by-field, with the rule that makes each one earn its place:

- **`oneLine`** — the whole result in one sentence a human would say out loud. If you
  cannot write it, you have not understood the node well enough to author it.
- **`statement`** — the formal statement, correct in every hypothesis. This is the text
  the flashcard reveals and the writing workspace compares against.
- **`intuition`** — plain language first, symbols second. Never a restatement of
  `statement` with different notation.
- **`needs`** — **navigation, not bookkeeping.** The note view walks this chain three
  deep and renders it as a route to the result, then *inverts* it into "used later by".
  A sloppy prerequisite therefore produces a misleading map, not merely a missing link.
  List the genuine dependency, most specific node first.
- **`traps`** — the misconception or the dropped hypothesis, not generic advice.
- **`cards`** — `kind: 'state'` cards form the statement-recall deck. **A theorem with no
  `state` card is unreachable from Recall.** Give every theorem exactly one.
- **`proof.idea`** — the main idea, before any technical step. **`proof.rungs`** — ordered
  steps, each `{ why: plain words, m: '$$…$$' }`.

### 4.3 question (objective, OMR)

```js
{ id, course, sec, type, marks, neg, negLabel, time,
  prompt, options: [ { k: 'A', t } ],
  answer, solution, tested, trap, twist?: { q, a },
  tests: [conceptId], provenance }
```

- `type: 'MCQ'` → `answer` is one key, `'C'`.
- `type: 'MSQ'` → `answer` is the exact key set, `['A','C']`. A clean subset scores
  nothing and is reported as *partial* — that is the convention these papers use, and
  scoring it generously teaches the wrong lesson.
- `type: 'NAT'` → `answer` is `{ value, tol, dp }`; `tol` may be `0`.
- `neg` is a number (`0` = no negative marking); `negLabel` is how it prints (`'−2/3'`).
- `time` is seconds.
- **`tested`** — the theorem/definition/trap the question really examines. Not a topic
  label. This is the sentence the learner reads after locking an answer.
- **`trap`** — where the marks are actually lost on this question.
- **`twist`** — a short changed-version follow-up, revealed on demand. This is the only
  transfer probe Level 1 has; include one wherever the family supports it.

### 4.4 written

```js
{ id, marks, title?, prompt, approach?, solution?, trap?, tests: [conceptId] }
```

`approach` is the strategic hint shown behind "Try it (hint)"; `solution` is the full
model answer behind a second gate.

### 4.5 The rules the engine depends on

1. **Ids are stable forever.** Progress is keyed on them: `conceptId` for completion,
   `conceptId#<index in cards[]>` for a statement card, `question.id` for a locked
   attempt. **Appending to `cards[]` is safe; reordering silently rewrites history.**
2. **Every `needs` and `tests` id must resolve** in the loaded set. Unresolved ids render
   as dead chips, which reads as a bug.
3. **A concept whose `sec` is in no module's `secs`** is treated as background: reachable
   from prerequisite chips, listed under Background, never counted in progress. That is
   the right home for assumed-knowledge nodes (`s.*`).
4. **TeX uses `$…$` and `$$…$$`**, backslashes doubled in JS strings (`\\varepsilon`).
   A lost escape is silent: `\;` inside a template literal becomes `;`. Check the
   *evaluated* string, not the source.
5. **HTML in prose fields is inserted as markup**, so it must be authored, trusted
   content — no scraped HTML, no `<script>`, no inline event handlers.
6. **Figures are drawn by the app, never supplied as images** (§8).

### 4.6 Provenance, and the one unforgivable error

Every imported item carries `provenance`, and uncertainty is preserved explicitly:

```js
provenance: { book: 'Bartle & Sherbert', edition: '4e', sec: '5.1', page: 128,
              at: '2026-09-17', review_required: true, note: 'hypothesis unclear in source' }
```

An **invented citation is worse than no citation.** A question labelled "GATE 2019" that
was not in GATE 2019 corrupts every judgement the learner makes about difficulty and
about themselves. Pattern questions are labelled as pattern questions. If a mapping is
uncertain, `review_required: true` with a note — never a guess.

---

## 5. Phase 4 — Author the Level 1 content slice

**Do not author the whole syllabus before the first review.** Level 1 exists to be
reviewed. Target:

- **six or so sections** of one course — enough to walk the whole loop;
- every theorem in them with a `state` card;
- **several questions per core concept**, spread across four kinds:

| kind | what it probes |
| --- | --- |
| statement recall | can you state the result |
| direct application | can you use it on a standard problem |
| misconception / trap | do you drop the hypothesis everyone drops |
| transfer | can you use it when the surface changes |

with MCQ, MSQ and NAT all represented.

### Authoring order that actually works

1. `SECTITLE` for every section you will touch.
2. `SYLLABI` — courses and modules, `secs` filled in.
3. Concepts **in reading order**, and for each: `oneLine` → `statement` → `intuition` →
   `needs` → `traps` → `cards` → `proof`.
4. Background `s.*` nodes, as they turn out to be needed by `needs`.
5. Questions last — you cannot write `tested` well until the concepts exist.

### Start on mock

Author a **mock** pool first: ten concepts and sixteen questions, plainly fake, with
`DATA_KIND = 'mock'` so the app badges every screen. This lets the entire engine be
built and reviewed before any validated content exists, and it keeps the data seam
honest from day one. Keep the mock set in its own directory forever — it is how you
test changes without risking real content.

---

## 6. Phase 5 — The engine

No framework, no bundler, no modules. Plain global objects, each view returning a real
DOM element. The whole thing is ~4,000 lines and loads as ordered `<script>` tags.

```
app/
  index.html        shell: header, tab bar, MathJax config, script order
  sources.js        THE DATA SEAM — which files to load
  mock/             the placeholder pool
  src/
    core.dom.js     element builder, hash router, sanitizer, linkifier
    core.tex.js     MathJax plumbing
    core.store.js   progress
    core.pool.js    one pass over the data, then pure lookups
    core.latex.js   the LaTeX command catalogue
    ui.parts.js     shared builders
    ui.css          the whole design system
    fig.library.js  hand-drawn figures
    comp.figure.js  figure plumbing
    comp.tree.js    the syllabus tick tree
    comp.write.js   the LaTeX writing workspace
    view.home.js    Today
    view.study.js   the syllabus
    view.note.js    one concept
    view.recall.js  the statement reel
    view.omr.js     objective questions
    view.write.js   writing practice
    boot.js         theme, data loading, routing, failure surfaces
```

Load order matters and is the order above: `core.*`, then `ui.parts`, then `comp.*`,
then `view.*`, then `boot.js` last.

### 6.1 The data seam

```js
const DATA_SOURCES = {
  use: 'mock',                       /* flip to 'live' when the validated pool lands */
  mock: ['mock/mock.courses.js', 'mock/mock.concepts.js', 'mock/mock.objective.js'],
  live: []                           /* paths relative to app/ */
};
```

**Nothing in `app/src` may name a data file, a course, or a concept id.** Swapping the
content set is a one-line edit. This is the rule that lets the same engine serve a
different subject without being touched.

### 6.2 `core.dom.js`

- `el(tag, attrs, kids)` — the entire view layer. `{text}` sets textContent, `{html}`
  sets innerHTML **through the sanitizer and linkifier**, `{on:{click}}` binds, `{style}`
  takes an object.
- **`sanitizeMathHtml`** — authored maths contains bare `<` (`$x < y$`), and the browser
  parser will happily swallow the rest of the element as a tag. Mask real tags from a
  whitelist, escape every remaining `<`, restore. Without this, content silently
  truncates and you will spend a day blaming MathJax.
- **`linkifyConcepts`** — turns `<code>c.5.1.3</code>` in any prose field into a chip
  linking to that note, labelled with its section and title. Authors write ids; readers
  get navigation.
- `Router` — hash based: `#/note/c.5.1.3`, `#/omr?sec=5.1`. Parse into
  `{name, args, query}`.
- `announce(msg)` — polite live-region announcements for every verdict and save.

### 6.3 `core.pool.js`

One pass over the six globals at boot, then pure lookups. Build:

- concept index by id; section → concepts; section → `{course, module}`;
- the **statement deck** in course order (`state` cards only);
- the **inverted `tests` edge** (concept → questions that examine it);
- the **inverted `needs` edge** (concept → what it unlocks);
- `chain(id, depth)` — depth-first, de-duplicated, **cycle-safe**;
- `background` — concepts whose section is in no module.

The app never touches the data globals directly. That is what makes the seam real.

### 6.4 `core.store.js`

```js
{ v: 1, done: {}, cards: {}, omr: {}, write: {}, prefs: {} }
```

- `setDone(id, on)` / `isDone(id)` — completion, timestamped.
- `gradeCard(id, grade)` — `'got' | 'partly' | 'missed'`. Increments `tries`, sets
  `last`, and **sets `first` only once**.
- `lockOmr(id, result)` — same discipline: `first` is written once and never again.
- `saveDraft(cid, tex)` — the writing workspace.
- `summary(conceptIds, cardIds, omrIds)` — aggregates over *any* universe of ids, so the
  same function serves Today, a course, and a section.

localStorage with an **in-memory fallback**, and a `isVolatile()` flag the UI surfaces.
A locked-down browser must degrade to a working-but-forgetful session, never a broken
one. Wrap every read and write in try/catch, and watch the initialisation order — a
temporal-dead-zone bug here breaks the whole app in private mode only, which is the
worst place to find it.

### 6.5 `core.tex.js`

MathJax has three failure modes and all three must be caught:

1. a TeX error raised through the `formatError` hook (park it on `window.__texError`);
2. an error node rendered in place (`mjx-merror`);
3. **nothing at all** — which is what an unmatched `{` does. MathJax swallows the
   closing delimiter and silently produces no output.

Render learner fragments into an **off-screen stage**, inspect it, and only then move the
nodes into the target. On failure the target keeps its last good render. Serialise every
call through a promise chain: MathJax is single-threaded and the error hook has to belong
to a known run.

### 6.6 The five views

**Today** (`view.home.js`) — three stat tiles (notes ticked / first-try recall / first-try
correct, never merged), the three-step loop pointing at the next undone thing in each,
the course list with progress rings, the mastery ladder, and device settings.

**Study** (`view.study.js` + `comp.tree.js`) — the whole syllabus as one page of
dropdowns. Course → module → section → concept, each row one line tall until opened,
each carrying a tick and a ring showing how much beneath it is done. Ticking a parent
ticks everything under it. Indentation is a thin rail, never padding, so a deep tree
never squeezes the text off a phone.

**Note** (`view.note.js`) — navigation is as much the point as the content: the
prerequisite route in, statement, figure, intuition, proof behind gates, traps, "used
later by", the questions that examine it, self-checks, previous/next. Completion is a
deliberate act with a deliberate label — *encountered the material* — so it can never
read as evidence of recall.

**Recall** (`view.recall.js`) — the statement deck as a vertical reel, one card per
screen. Gate first: *write it in LaTeX*, *I stated it aloud*, or *I can't state it* (which
records `missed` immediately and reveals). Then the canonical statement, then the grade.
See §10 for the scroll traps — they are not optional reading.

**Questions** (`view.omr.js`) — OMR first. Options as bubbles, a running timer, an
explicit **lock**, and only then: verdict, full worked answer, the idea tested, the trap,
and the twist. Score each type by its own rule (§4.3).

**Write** (`view.write.js` + `comp.write.js`) — the learner types a LaTeX fragment only;
the rendering appears immediately below the input; the canonical statement stays behind
a gate. It verifies that the fragment *renders*, and says so out loud — the learner
remains the authority on whether the mathematics is right. This component is deliberately
**not a checker**.

---

## 7. Phase 6 — The design system

One stylesheet, custom properties, no utility framework.

- **Tokens first**: `--paper --ink --ink-2 --ink-3 --accent --ok --warn --bad --rule
  --surface --glass`, plus `--r-s/--r-m/--r-l`, `--dur`, `--ease`, `--spring`.
  Define the light palette on bare `:root`; redefine only the tokens under
  `[data-theme=dark]`. Never give a colour its only definition inside a theme block.
- **Two families**: one for prose (a serif carries mathematics better beside MathJax),
  one for UI.
- **Mobile-first shell**: sticky header, **fixed bottom tab bar** on phones that becomes
  a sticky top row at ≥880px. `body` carries `padding-bottom: var(--tab-h) +
  env(safe-area-inset-bottom)`.
- **Type scale is small**: `h1` 1.42rem. A study app is read, not admired.
- **Motion is short and interruptible** (`--dur: 240ms`), and everything is disabled
  under `prefers-reduced-motion`.
- **Every interactive target ≥42px.**
- **Wide content scrolls inside its own container.** The page body must never scroll
  horizontally — long display maths is the usual culprit.
- **Accessibility is not a phase**: skip link, one `#pagetitle` focused after every route
  change, `aria-pressed` on toggles, `aria-expanded` on reveals, a live region for
  verdicts, and visible focus rings.

---

## 8. Phase 7 — Figures

**Figures are hand-drawn inline SVG built from the mathematics, never images.** They
inherit the theme's colours, scale to any width, animate on entry, and some take a
control so the learner can *move the parameter that matters* — ε in an ε–δ figure, the
window in a uniform-continuity figure. A PNG can do none of that.

Split it: `comp.figure.js` is plumbing (coordinate mapping, frame, controls);
`fig.library.js` is the figures. A concept names them by id in `figs: [...]`.

Build a figure only where the picture carries something the prose struggles with. Three
excellent figures beat twenty decorative ones.

For non-mathematical subjects the same rule holds with different content: a timeline, a
labelled apparatus, a process diagram — drawn, themed, and scalable.

---

## 9. Phase 8 — Build and deploy

A ~60-line Python script inlines the CSS, every `src/*.js` in order, and the data files
listed in `sources.js` into **one self-contained `build/index.html`**. No bundler, no
npm, no lockfile. MathJax and fonts stay on their CDNs; everything else is in the file.

The result is a single HTML file you can host anywhere, mail to someone, or open from
disk. Deploy it to any static host under a path (`/<subject>/<course>`).

Two rules learned the hard way:

- **A Hosting deploy replaces the entire site.** If the deploy script does not publish
  every page the site serves, the ones it forgot disappear. Build the publish directory
  from a manifest, and fail loudly rather than deploy a short list.
- **Build fresh inside the deploy script**, so the deployed page can never lag behind
  the sources it was built from.

---

## 10. Traps that will cost you a day each

1. **Nested scrollers in the reel.** A `scroll-snap` container whose cards are
   *themselves* scrollable, with `overscroll-behavior: contain`, traps the gesture: the
   inner scroller eats the touch and refuses to chain to the parent. The card content is
   also usually taller than the viewport, and `scroll-snap-type: y mandatory` then makes
   everything between two snap points unreachable. **One scroller. Cards grow. Snap
   `proximity`, not `mandatory`.**
2. **Scrolling by `index × clientHeight`.** The moment one card is taller than the
   viewport, every "next" jump lands in the wrong place. Scroll to
   `cards[i].offsetTop`.
3. **IntersectionObserver thresholds on tall elements.** A card twice the height of the
   scroller can never reach `intersectionRatio > 0.55`, so a "highlight the live card"
   rule silently leaves long cards dimmed forever. Measure the fraction of the
   *viewport* covered, not the fraction of the element.
4. **`offsetTop` measured from the wrong element.** A scroller that is `position: static`
   is not the `offsetParent` of its children, so `card.offsetTop` and
   `scroller.scrollTop` are in *different coordinate systems* and every jump lands a few
   pixels out. Worse, the skew changes while an ancestor's entrance animation runs, so it
   looks intermittent. Give the scroller `position: relative`.
5. **A `transform` on a scroll-snap child.** The browser snaps to the **transformed**
   box, so a purely decorative `scale(.985)` on inactive cards moves every snap point and
   each jump settles a few pixels past its target. Animate opacity, not transform, on
   anything carrying `scroll-snap-align`.
6. **A lost backslash in a template literal.** `\;` becomes `;`, `\n` becomes a newline.
   Double every backslash and verify the evaluated string.
7. **Bare `<` in authored maths.** See §6.2 — silent content truncation.
8. **Reordering a `cards` array.** Silently rewrites recall history. Append only.
9. **`localStorage` that throws on read.** Private mode in some browsers throws on
   *access*, not just on write. Wrap everything, including the initialisation.
10. **MathJax typeset before the node is in the document.** Typeset after mounting, and
   re-typeset any content revealed later behind a gate.

---

## 11. Adapting to another subject

| this build | your subject |
| --- | --- |
| Bartle & Sherbert numbering | the primary book's numbering |
| theorem / lemma / corollary | law / reaction / case / period / process |
| `state` cards = theorem statements | whatever must be reproduced verbatim under exam conditions |
| proof rungs | derivation steps, mechanism arrows, argument stages |
| LaTeX workspace | keep it for any subject with formulae; drop it for purely verbal ones |
| ε–δ figures | apparatus, timelines, phase diagrams, circuits |

What does **not** change: the seam, the id discipline, first-attempt-is-final, gate
before reveal, completion ≠ recall, provenance on every imported item, and the
review gate before Level 2.

---

## 12. The Level 1 exit checklist

Ship only when all of these hold.

**Data**

- [ ] JSON/JS parses; all six globals present; `DATA_KIND` correct.
- [ ] Ids unique, stable, derived from the numbering spine.
- [ ] Every `needs` and `tests` id resolves.
- [ ] Every theorem has exactly one `state` card.
- [ ] No later-course concept duplicates an earlier one.
- [ ] Statements, hypotheses, answer keys and notation verified against the source.
- [ ] Provenance on every imported item; `review_required` preserved where uncertain.
- [ ] Papers and pattern questions distinguishable in the record.

**Engine**

- [ ] `app/src` names no data file, course, or concept id.
- [ ] Every view renders on a 360px-wide screen with no horizontal scroll.
- [ ] The reel scrolls through a card three viewports tall, on a real phone.
- [ ] Nothing is revealed before an attempt, anywhere.
- [ ] First attempts are never overwritten — verified by attempting twice.
- [ ] Private-mode browser: app loads, warns, and works.
- [ ] MathJax blocked: app loads, warns, and shows LaTeX source.
- [ ] A missing data file produces the "content did not load" screen, not a blank page.
- [ ] Keyboard alone can reach every control; focus lands on `#pagetitle` after routing.

**Then stop.** Put it in front of the learner, collect concrete feedback about clarity,
friction, rendering, question flow and mobile layout, and fix Level 1 before starting
Level 2. Building Level 2 infrastructure before this gate passes is how study apps end
up with a scheduler nobody trusts and content nobody reads.
