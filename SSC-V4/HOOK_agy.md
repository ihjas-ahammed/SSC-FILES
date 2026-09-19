# AGY handoff — accurate Real Analysis data

This file governs source collection, syllabus accuracy, question extraction, data repair,
and handoff to Claude. AGY prepares reliable structured drafts. Claude integrates only
validated data and owns the application design and programs.

AGY may edit this file when improving data workflows. AGY must never edit
`HOOK_claude.md`. Claude may edit this file to clarify the handoff, but must preserve
the source-validation rules.

## Scope

The project has three displayed courses:

1. Real Analysis I
2. Real Analysis II
3. Real Analysis for Entrance

The entrance course is an extension only. Do not duplicate existing RA1/RA2 concepts.
Collect only the missing entrance topics:

- general metric spaces;
- Baire category;
- compactness and connectedness in metric spaces;
- equicontinuity and Ascoli–Arzelà;
- inverse and implicit function theorems;
- Lebesgue measure and measurable functions;
- Lebesgue integration, Fatou's lemma, monotone convergence, and dominated convergence.

The GATE and JAM MA syllabus files under `sources/exams/` are local references. CUSAT
has no detailed official topic syllabus in the supplied material, so CUSAT scope must be
labelled as an inferred working scope, never as an official syllabus.

## Source rules

- Prefer official syllabus documents and official question papers.
- Record source path, edition/year, page or section, and extraction date.
- Never infer a theorem, answer key, mark, or syllabus requirement from a vague source.
- Preserve uncertainty explicitly with `review_required: true` and a note.
- Bartle & Sherbert is obtained by the user; do not go looking for it. For the ENTRANCE
  topics, which Bartle does not cover, AGY sources exercises from texts that are
  genuinely free to redistribute — see "Level 3 for the entrance course — the books". A
  paywalled or pirated scan is never an acceptable source, whatever it contains.
- Do not put external paths into production data. Copy only approved source material into
  this repository and record provenance locally.

## Draft workspace

Use `data_temp/` for all drafts, repairs, extraction manifests, and model outputs. The
folder's `content-skeleton.json` is the minimum shape Claude expects. Drafts must not
overwrite `data/` directly.

During Level 1, AGY should prepare only the small representative theorem and objective
question set needed to exercise the first study loop. Do not attempt to collect or
normalize the entire GATE/JAM/CUSAT corpus before the user reviews Level 1.

Every draft concept must include:

- a stable ID;
- title, kind, tier, and section;
- one-line summary, formal statement, and plain-language intuition;
- prerequisite IDs in `needs`;
- traps and retrieval cards;
- provenance and review status.

Existing concept IDs must be searched before creating a new one. If an idea already exists
in RA1 or RA2, reference it in `needs` or in the exam mapping; do not make a duplicate
node for GATE, JAM, or CUSAT.

## Question collection

AGY should collect exam papers and answer keys for Claude. Store questions in the simple
PYQ skeleton first, with:

- exam, paper, year, question number, type, marks, and time metadata;
- prompt and options where applicable;
- answer key and source provenance;
- tested concept IDs, after concept validation;
- review status and uncertainty notes.

Do not force a question into a concept if the mapping is uncertain. Use
`review_required: true` and explain the ambiguity.

Claude should receive the simple skeleton rather than a large prose dump. Claude may
turn validated skeleton records into application data, but must preserve the original
question, answer, provenance, and review flags.

AGY must collect enough questions to support repeated retrieval, not just one example
per concept. As a minimum target, each core concept should have several questions across
statement recall, direct application, misconception/trap, and transfer where the source
supports them. Record the target and actual count in the extraction manifest, and flag
under-covered concepts for follow-up.

Where a question family is mathematically safe under parameter changes, AGY may create
an approved generator specification rather than hand-authoring every instance. A
generator must define:

- the fixed mathematical structure;
- allowed parameter ranges and exclusions;
- the answer-generation rule;
- checks for degeneracy, ambiguity, and duplicate outputs;
- one worked solution template;
- a deterministic seed or reproducible instance record.

Use generators only for genuinely invariant families such as value changes. Do not use
blind substitution for proof, theorem-hypothesis, or conceptual questions. Generated
questions remain drafts until sampled instances and answers pass validation.

When Claude produces a newer model-generated draft or proposes a data correction, AGY
must compare it with the source and current production data, keep the most accurate
version, repair confirmed issues, and return the corrected structured record to Claude.
Never update production data merely because a newer model produced different wording.

## Repair and validation checklist

Before handoff, check:

1. JSON parses and matches the skeleton.
2. IDs are unique and stable.
3. Every `needs` and `tests` ID exists.
4. No entrance concept duplicates an RA1/RA2 concept.
5. The mathematics, answer key, theorem hypotheses, and notation are correct.
6. TeX and HTML are safe for insertion into the app.
7. Source provenance is present for every imported item.
8. Uncertainty and human-review flags are preserved.

Use cheap models for extraction and normalization when useful, but never treat their
output as authoritative. Human review or a stronger verification pass is required for
mathematical statements, proofs, answer keys, and syllabus interpretation.

## Handoff prompt

```text
Using only the supplied source and the data_temp skeleton, extract the requested Real
Analysis material. Search existing RA1/RA2 IDs first. Create an entrance.* concept only
when the idea is genuinely absent. Return valid JSON only. Preserve source provenance,
mark uncertainty with review_required, and never invent an answer, theorem hypothesis,
or citation. Do not duplicate concepts. Validate every needs/tests reference before
handoff to Claude.
```

## Runtime data contract

The app is built, deployed, and **running on the validated pool**: `app/sources.js` has
`use: 'live'` over the files in `data/`. **AGY owns that pool.** Nothing in `app/src/`
needs to change when it grows or is corrected — the app reads data through one seam.

`app/mock/` still exists and is not a leftover: it is the fixture behind
`/math/real-analysis-test`, where app changes are tried out before they can touch the
real page (see "Publishing" below).

### The seam

`app/sources.js` lists which files to load:

```js
const DIAGRAM_BASE = '../diagrams/';   /* build.py rewrites this for the built page */

const DATA_SOURCES = {
  use: 'live',                       /* 'mock' for the test page, 'live' for the real one */
  mock: ['mock/mock.courses.js', 'mock/mock.concepts.js', 'mock/mock.objective.js',
         'mock/mock.written.js'],
  live: ['../data/syllabus.js', '../data/school.js', '../data/ra1-core.js', …]
};
```

Adding a delivered file means adding one line to `live`. `build.py` reads that same
array, so the built page and the dev page always carry the same content set — keep it a
plain list of quoted paths.

Delivered files are plain `.js` that declare or push into six global names and nothing
else. No modules, no build step, no framework. Paths must stay inside `SSC-V4`.

| name | shape | notes |
| --- | --- | --- |
| `DATA_KIND` | `'mock'` or `'live'` | `'mock'` makes the app badge every screen as unvalidated. Set `'live'` only for validated content. |
| `SYLLABI` | `[course]` | Array order IS display order, and it must be RA1, RA2, RAE. |
| `SECTITLE` | `{ '5.3': 'Continuous Functions on Intervals' }` | Every `sec` used by a concept or question needs an entry. |
| `CONCEPTS` | `[concept]` | `CONCEPTS.push(...)` from as many files as you like. |
| `OBJECTIVE` | `[question]` | **New for Level 1** — OMR objective questions. Does not exist in `data/` yet. |
| `QUESTIONS` | `[written]` | **Level 3.** Bartle's exercises. A section with none can never turn green. |

```js
course   = { id, title, code, sem, blurb, needs?, pending?, pendingNote?,
             modules: [ { id, n, title, marks?, secs: ['5.3', …],
                          pending?, builds?: [conceptId], why? } ] }

concept  = { id, sec, kind, tier, title, oneLine, statement, intuition,
             needs: [conceptId], traps: [html], cards: [ { q, a, kind } ],
             figs: [figureId],            /* optional, see below */
             proof: { idea, why?, rungs: [ { why, m } ], ends? }, /* for theorems/lemmas */
             provenance }
           /* kind: definition|theorem|corollary|lemma|example|technique|counterexample
              tier: core|extra|ext
              statement/intuition/traps: HTML with $TeX$ and $$TeX$$
              proof: idea & why provide high-level strategy hints for "💡 Try proof (hint)";
              rungs provide step-by-step breakdown { why: explanation, m: TeX formula }
              cards with kind 'state' become the statement-recall deck; a concept with
              no 'state' card is unreachable from Recall, so give every theorem one */

question = { id, course, sec, type, marks, neg, negLabel, time,
             prompt, options: [ { k: 'A', t } ],
             answer, solution, tested, trap, twist?: { q, a },
             tests: [conceptId], provenance }
           /* type 'MCQ'  answer is one key, e.g. 'C'
              type 'MSQ'  answer is the exact key set, e.g. ['A','C']
              type 'NAT'  answer is { value, tol, dp }   tol may be 0
              neg is a number (0 for no negative marking); negLabel is how it prints,
              e.g. '−2/3'. time is seconds.
              tested  = the theorem/definition/trap the question really examines
              trap    = where the marks are actually lost
              twist   = a short changed-version follow-up, revealed on demand */

written  = { id, marks, title?, prompt, approach?, solution?, trap?, tests: [conceptId] }
           /* approach provides strategic hints for the "💡 Try proof (hint)" scratchpad;
              solution contains full worked answer shown on demand */
```

### Rules the app relies on

1. **Ids are stable forever.** Progress is stored against them: `conceptId` for
   completion, `conceptId#<index in cards[]>` for a statement card, `question.id` for a
   locked attempt. Reordering a concept's `cards` array silently rewrites recall
   history, so append rather than reorder.
2. **Every `needs` and `tests` id must resolve** in the loaded set. Unresolved ids are
   rendered as dead chips, which reads as a bug.
3. **A concept whose `sec` is in no module's `secs`** is treated as background: reachable
   from prerequisite chips, listed under Background, never counted in progress. That is
   the right home for `s.*` school nodes.
4. **`needs` drives navigation, not just dependency bookkeeping.** The note view walks the
   chain three deep and renders it as a route to the result, and inverts it into "used
   later by". Sloppy `needs` therefore produce a misleading map, not merely a missing
   link — list the genuine dependency, most specific node first.
5. **Figures come from two places, and BOTH are now used.**

   - `figs: ['fig.eps-delta']` names a hand-drawn inline SVG in `app/src/fig.library.js`
     — theme-aware, animated, sometimes with a control. There are eleven of them.
   - `diagrams/light/<basename>.png` + `diagrams/dark/<basename>.png` are the **rendered
     diagrams**: 72 of them, one light/dark pair each, already in this repository.

   **This was the standing bug and it is now fixed in the app: 69 of those 72 diagrams
   were never shown to anyone.** The file names already say which concept they belong to
   (`c.5.3.7_bolzano_intermediate_value_theorem.png`), so `app/src/fig.diagrams.js` is a
   GENERATED index from concept id to basenames, and `comp.figure.js` renders the pair as
   one `<img>` that follows the theme. Nothing in `data/` had to change for that to work.

   **What AGY owes here, on the next real-data update:**

   1. **Every concept that has a diagram must show it.** The match is automatic for the
      68 concept ids the file names carry. Check the remaining four basenames and every
      NEW concept against `diagrams/light/`, and where a picture exists under a different
      id than the concept that should show it, put it on the concept explicitly:

      ```js
      { id: 'c.5.3.6', img: ['c.5.3.6_bisection_method'], … }
      ```

      `img` overrides the generated index; it is a list of BASENAMES, never a path and
      never an extension.
   2. **Audit the 72 against the 209.** Report which delivered concepts still have no
      picture of any kind — neither a `fig.*` nor a diagram — so the gap is a list rather
      than a feeling. Concepts whose statement is geometric (every theorem in §5.3, §5.4,
      §6.2, §7.4, §8.1) should not be on that list.
   3. **Regenerate the index rather than editing it:**

      ```bash
      python3 tools/gen_diagrams.py
      ```

      It reads `diagrams/light/`, warns about any light PNG with no dark twin, and
      rewrites `app/src/fig.diagrams.js`. Dropping a new pair into `diagrams/` and running
      that is the whole procedure for adding a picture. Never hand-edit the generated file.
   4. **A diagram without a dark twin is a bug**, not a shortcut: the app swaps on
      `data-theme`, so a missing dark file leaves a white rectangle in a dark note.
   5. `diagrams/sheets/` holds eight whole-topic posters. They belong to no single concept
      and are listed in `DIAGRAM_SHEETS`; nothing displays them yet. If they are worth
      surfacing, say where — per module is the obvious answer — and the app will carry it.
   6. **The deploy already copies `diagrams/` beside both pages.** A diagram is referenced
      by a path relative to the page, so it is only ever as available as that copy.
6. **TeX uses `$…$` and `$$…$$`**, with backslashes doubled in JS strings
   (`\\varepsilon`). A lost escape is silent: `\;` in a template literal becomes `;`.
   Check the evaluated string, not the source.
7. **HTML in `statement`, `intuition`, `traps`, `solution`, `tested`, `trap` is inserted
   as markup.** It must be authored, trusted content — no scraped HTML, no `<script>`,
   no inline event handlers. Strict mathematical inequalities (e.g. `$x < y$`, `$u - \varepsilon < s_\varepsilon$`)
   are safely preserved by `sanitizeMathHtml` in `core.dom.js` and do not break HTML parsing.
8. **Concept references automatically linkify to section chips.** When authors reference
   other concepts in prose using `<code>c.X.Y</code>` or `$c.X.Y$`, the runtime (`core.dom.js`)
   automatically resolves `Pool.concept(id)` and renders a clickable section link
   (`<a class="concept-ref" href="#/note/c.X.Y">§X.Y Concept Title</a>`) with a full section
   and concept title tooltip. Use `<code>c.X.Y</code>` or `<code>s.prereq-name</code>` in text.
9. **Provenance travels with the record** and `review_required: true` stays until a human
   or a stronger verification pass has cleared it.
10. **`proof` is load-bearing, not decoration.** Level 2 is earned per proof. A theorem
   delivered without a `proof` block reaches level 2 the moment it is ticked, because
   there is nothing to work through — so the course's level 2 quietly overstates itself.
   Every theorem, lemma and corollary needs
   `proof: { idea, why?, rungs: [{why, m}], ends? }`. Definitions and examples correctly
   have none, and correctly reach level 2 with the tick.

12. **`QUESTIONS` is now load-bearing too — it IS level 3.** See the next section. A
   section with no exercises delivered can never turn green, and the app says so in as
   many words on every note in it rather than pretending the section is finished.
11. **Ids are now synced, not just stored.** Progress travels between a learner's devices
   keyed on `conceptId`, `conceptId#<card index>` and `question.id`. Renaming an id no
   longer just resets progress on one device — it orphans a record in the cloud that
   nothing will ever reclaim. Ids were already permanent; they are now permanent with
   a witness.

### What Level 1 needs from AGY, in order

1. `SECTITLE` plus a `SYLLABI` that matches the real university syllabus, with RAE third
   and its Level 3 topics marked `pending: true`.
2. Validated `CONCEPTS` for a small representative slice — six or so sections is enough
   to review the loop. Every theorem needs a `state` card.
3. A validated `OBJECTIVE` bank, several questions per core concept across statement
   recall, direct application, misconception/trap and transfer, with MCQ, MSQ and NAT
   all represented. Negative-marking and timing metadata preserved where the source
   gives them; `neg: 0` where it does not.
4. Confirmation of whether any question in the bank comes from an official paper. Papers
   and pattern questions must be distinguishable in the record, because the app labels
   them differently and an invented citation is worse than no citation.

Do not put mock content into `data/`, and do not point `live` at `app/mock/`.
The mock set is no longer a stopgap — it is the permanent test fixture behind
`/math/real-analysis-test`, so it stays where it is.

---

## Levels 1–3 — earned, never switched

**The level switch is gone.** There used to be a per-course control that moved a course
between Level 1 and Level 2, with an unlock; it moved the goalposts under work that was
already finished, and a level somebody *sets* is not a measurement. The level of a
concept is now DERIVED, in one place (`app/src/core.progress.js`), from what has been
done:

| level | earned by | colour |
| --- | --- | --- |
| 1 | the note is ticked — you have been through it | **red** |
| 2 | its proof has been worked through. A concept with no `proof` reaches 2 with the tick | **amber** |
| 3 | every exercise filed against its SECTION has been worked through | **green** |

A section, module or course takes the level of its **weakest** member: all red before the
module is red, all amber before it is amber, all green before it is green. That is what
the rings and the three-colour bars draw, and it is the only progress vocabulary left in
the app — there are no level buttons anywhere.

Two consequences AGY has to plan for:

1. **Level 3 is a section-wide bar, not a per-theorem one.** Exercises are set on a
   section in Bartle, so a section is finished when its whole problem set is. Filing two
   exercises against one theorem does not make that theorem green; it makes the section
   two exercises closer.
2. **A section with no exercises tops out at level 2**, and every note in it says so.
   That is deliberate — it makes undelivered content visible instead of letting a course
   go green on an empty problem set. It also means level 3 across RA1 and RA2 is
   currently unreachable: `data/questions.ra2.m1.js` carries 19 written questions for
   one module and nothing else does.

### Level 3 — the Bartle exercises. AGY extracts every one of them.

**Deliverable: every exercise in Bartle & Sherbert 4e, for every section in the RA1 and
RA2 syllabus, as `QUESTIONS` records.** Not a representative sample — the whole set,
section by section, because "complete all the questions in a section" is what turns that
section green and a partial extraction makes the bar unreachable *and* unexplained.

`app/mock/mock.written.js` is the shape to follow: eighteen exercises across the six mock
sections, three per section, written in Bartle's idiom with a strategic `approach`, a full
`solution` and the `trap` that actually costs marks. Match that depth; a prompt with no
worked answer is a worse deliverable than no exercise, because the learner cannot check
themselves and the claim button becomes a lie.

```js
written = { id, sec, marks, title?, prompt, approach?, solution?, trap?, tests: [conceptId] }
```

- **`id` is permanent.** Progress is stored against `'w:' + id` and synced, so a rename
  orphans a cloud record that nothing will reclaim (rule 1, rule 11). Use the book's own
  numbering: `w.5.3.12` for Exercise 12 of §5.3. Never renumber.
- **`sec` files the exercise under a section directly**; `tests` files it under the
  concepts it examines. The app indexes it under both, and the SECTION index is what
  level 3 counts. An exercise with neither is invisible.
- **`marks`** is the exam weight you judge it to carry, not something Bartle states.
- **`prompt`, `approach`, `solution`, `trap`** are authored HTML with `$TeX$`, under the
  same rules as everything else (rule 6, rule 7).
- Exercises Bartle marks as harder, or that depend on a later section, should carry a
  note in `approach` rather than being dropped — a missing exercise number reads as an
  extraction failure.

Order of work: §5.1 through §5.6 first (that is where the learner is), then §6, §7, §2,
§3, §4, then the rest. Deliver a section at a time and say which sections are complete,
because a half-extracted section is worse than an untouched one — it turns the level-3
bar into a number that can never be reached.

### Level 3 for the entrance course — the books

The entrance topics (metric spaces, Baire category, compactness and connectedness,
equicontinuity and Ascoli–Arzelà, inverse and implicit function theorems, Lebesgue
measure and integration) are not in Bartle, so their exercises have to come from
elsewhere. **AGY sources them.**

Use texts that are genuinely free to redistribute — openly licensed or author-released —
and record the licence with the provenance. Do not download or copy from paywalled or
pirated scans; an exercise with a citation nobody can follow is worse than no exercise.
Reasonable starting points, all legitimately free:

- **Trench, _Introduction to Real Analysis_** (author-released, free PDF) — metric
  spaces, compactness, the implicit function theorem.
- **Hunter & Nachtergaele, _Applied Analysis_** (author-released) — metric spaces, Baire
  category, Ascoli–Arzelà.
- **Bass, _Real Analysis for Graduate Students_** (author-released) — Lebesgue measure,
  measurable functions, the convergence theorems.
- **Zakon, _Mathematical Analysis I/II_** (CC-licensed, Trillia Group) — metric-space
  topology with full exercise sets.
- The GATE and JAM past papers already in `pyq.json` — those are official and are the
  best possible exercises for this course.

For each topic: check the concept does not already exist in RA1/RA2 (scope rules above),
extract the exercises that match the syllabus scope, and file them under the entrance
sections with the same `written` shape. Record book, edition, section and licence in
`provenance`. Where a topic has no free source good enough, say so plainly and leave the
section short rather than inventing exercises.

### LaTeX that does not render — check it, do not hope

MathJax reports a broken fragment by drawing a red blob *inside the page*, so a lost brace
in a proof looks like content until somebody opens that exact note. There is now a checker:

```bash
node tools/check_tex.js           # the live pool in data/
node tools/check_tex.js --mock    # the mock pool
```

It walks every authored string in the pool and reports odd `$` counts, unbalanced braces
inside a maths span, `\left` without `\right`, `\begin` without a matching `\end`, a
trailing `\\` row break, and any command outside the known list. It exits non-zero on an
error, so put it in front of `deploy.sh --live`.

**All reported errors in `data/` have been resolved:**
- `concept c.8.2.3.proof.ends`: Added missing closing `$` delimiter after `f_n'`.
- All 131 proofs across RA1 and RA2 audited via headless runner: all 9 theorems missing `why` guidance (`c.4.1.8`, `c.5.3.8`, `c.5.3.9`, `c.5.4.2`, `c.5.4.5`, `c.5.4.7`, `c.5.4.8`, `c.5.4.10`, `c.5.4.13`) now have complete strategy entries. 100% of proofs now contain `idea`, `why`, complete `rungs` (`why` and `m`), and `ends`.
- `node tools/check_tex.js` reports 0 errors across 209 concepts, 24 objective questions, and 19 written exercises.

---

## Publishing — AGY owns the live page

There are two pages, built from the same code and different pools:

| URL | pool | built by | published by |
| --- | --- | --- | --- |
| `/math/real-analysis` | `data/` — validated | `python3 build.py` | **AGY** |
| `/math/real-analysis-test` | `app/mock/` — placeholders | `python3 build.py --mock` | Claude |

Claude builds and ships the test page whenever the app changes, and does **not** publish
the live one. That is not a courtesy — a Firebase Hosting deploy replaces the whole
site, so a careless publish is how unvalidated content reaches the real URL.

### The procedure

```bash
cd SSC-V2/SEM5/PHY/apps/tools
./deploy.sh --live          # rebuilds /math/real-analysis from data/, then deploys
```

Without `--live` the script republishes the committed `SSC-V4/build/index.html` byte for
byte and only refreshes the test page. So:

- **`./deploy.sh`** — app changes reach the test page; the live page is untouched.
- **`./deploy.sh --live`** — AGY's command, run after the validation checklist passes.

`build/index.html` is committed on purpose: it is the record of what is actually live,
and `git diff` on it is the last chance to see what a publish is about to change.

### Before running `--live`

1. The repair and validation checklist above passes.
2. `python3 build.py` succeeds and `git diff --stat build/index.html` is a change you
   can account for.
3. Open the built file and confirm the app badges itself **live**, not mock — the mock
   banner appearing on the real URL means `DATA_KIND` or `sources.js` is wrong.
4. `node tools/check_tex.js` passes with no ERROR lines.
5. `python3 tools/gen_diagrams.py` has been run if anything under `diagrams/` changed,
   and every light PNG has a dark twin.
6. Every theorem in the delivered slice has a `proof` block (rule 10) and a `state`
   card, or Level 2 and Recall are respectively blind to it.
7. Every section in the delivered slice either has its full exercise set (rule 12) or is
   knowingly left at level 2 — a half-extracted section is the one state to avoid.
8. The deploy prints every URL it published. If a page you expected is missing from
   that list, it has just been deleted from the live site — republish before leaving.
9. `diagrams/` is copied beside BOTH pages by `deploy.sh`. If that copy is dropped, every
   rendered figure becomes a broken image — the diagrams are referenced by a path
   relative to the page, not inlined into the bundle (31 MB would not fit).

### The databases — AGY owns the official pair

Sign-in and progress are stored in Firebase Realtime Database over plain REST. The test
build and the real build use **completely separate stores**, decided in one place
(`NS()` / `USERS()` in `app/src/core.sync.js`) off `DATA_KIND`:

| build | progress | sign-in register |
| --- | --- | --- |
| `live` (`/math/real-analysis`) | `ssc4_ra_v1` | `ssc4_users_v1` |
| `mock` (`/math/real-analysis-test`) | `ssc4_ra_mock_v1` | `ssc4_users_mock_v1` |

Both currently sit on the database the study trackers already use
(`task-dominion-default-rtdb.asia-southeast1.firebasedatabase.app`), which was fine for
getting sync working and is **not** where real student records should live.

**AGY's job: stand up the official database for the live build.** What it needs:

1. A Realtime Database in the project that serves the site (`data-science-ef878`), in a
   region close to the users.
2. Its URL written into `DB` in `app/src/core.sync.js`. Leave the mock namespaces
   pointing wherever is convenient — the point is that they are never the same store.
3. **Security rules.** The current rules are wide open, which is why a plain REST PUT
   works with no token. That is acceptable for a scratch tracker and is not acceptable
   for a register of student names. At minimum, rules should stop one key being
   enumerated from another and cap document size. Write them deliberately rather than
   inheriting the tracker's.
4. A written decision about what the pass key means. Name + roll number is a **pass
   key, not a password** — the login screen says so in as many words. If that is not
   acceptable for the real deployment, the fix is real auth, not a longer key, and that
   is a decision to record rather than to quietly work around.

Key format is `slug(name) + '--' + slug(roll)`. The separator is `--` and not `.`
because an RTDB key may not contain `.`, `$`, `#`, `[`, `]` or `/` — a dotted key is
rejected with "Invalid token in path".

Do not point the live build at a mock namespace, or the mock build at a live one. A
single wrong character there mixes test records into real ones, and the merge is
designed never to lose data — so it would not throw the bad records away either.

#### Content pool status: 209 concepts across RA1 and RA2 (131 with full proofs)

Measured against the current `data/` pool: **209 concepts** across Real Analysis I and Real Analysis II.
- **131 theorems, lemmas, and corollaries** carry complete multi-rung step-by-step proofs (`idea`, `why`, `rungs: [{why, m}]`, `ends`).
- **78 definitions, axioms, and examples** (which correctly carry no proof blocks and automatically award Level 2 mastery upon Level 1 completion).
- Every single concept has intuition, common traps, and statement/recall cards.
- Zero missing sections or empty ("0 concepts") sections across the entire university syllabus and Bartle & Sherbert 4e scope.

#### Module-by-Module Distribution:

| Course | Module | Title | Sections | Concepts | Theorems with Proof |
| --- | --- | --- | --- | --- | --- |
| **RA1** | I | Introduction to Set Theory | §1.1, §1.2, §1.3 | **9** | 6 |
| **RA1** | II | The Real Numbers | §2.1, §2.2, §2.3, §2.4, §2.5 | **20** | 12 |
| **RA1** | III | Sequences and Limits | §3.1, §3.2, §3.3 | **12** | 9 |
| **RA1** | IV | Sequences and Limits (continued) | §3.4, §3.5, §3.6, §3.7, §4.1, §4.2, §4.3 | **33** | 22 |
| **RA1** | + | Topology of the Line | §11.1, §11.2 | **6** | 4 |
| **RA2** | I | Continuous Functions | §5.1, §5.2, §5.3, §5.4, §5.5, §5.6 | **58** | 33 |
| **RA2** | II | Differentiation | §6.1, §6.2, §6.3, §6.4 | **20** | 19 |
| **RA2** | III | The Riemann Integral | §7.1, §7.2, §7.3, §7.4, §7.5 | **22** | 19 |
| **RA2** | IV | Sequences and Series of Functions | §8.1, §8.2, §8.3, §8.4 | **11** | 8 |
| **RA2** | + | Infinite Series | §9.1, §9.2, §9.3, §9.4 | **8** | 4 |
| **Total** | | | | **209** | **131** |

All 19 originally missing theorem proofs have been authored and integrated:
`c.1.2.1`, `c.1.3.2`, `c.4.1.9`, `c.5.1.2`, `c.5.1.4`, `c.5.1.7`, `c.5.2.2`, `c.5.2.4`, `c.5.2.5`, `c.5.2.7`, `c.5.4.11`, `c.5.4.14`, `c.6.1.5`, `c.6.2.1`, `c.6.2.3`, `c.6.2.12`, `c.6.3.2`, `c.6.3.3`, `c.6.4.1`.

### What Levels 2 and 3 need from AGY

The app records, per learner and across devices:

- **proof work**, claimed per proof — that earns level 2;
- **exercise work**, claimed per written exercise (`'w:<id>'`) — a section's full set
  earns level 3 for every concept in it;
- the same first-attempt measurements as before, merged rather than overwritten.

Both claims live in the same flag map in `core.sync.js`, so ids for proofs and for
exercises are equally permanent.

Rule 10 stands: `proof` blocks are required on every theorem. `proof.idea` and
`proof.why` are shown as the *hint* before the learner tries; `proof.rungs` are the
step-by-step reveal after. An `idea` that merely restates the theorem makes the hint
useless, so write it as the strategy — "trap the sequence by bisection", "subtract the
chord and apply Rolle" — before any technical step.

Rule 12 is new and is the bigger job: **every Bartle exercise, section by section.**

---

## Recent changes and implementation log

### September 2026

1. **Try proof (hint) & interactive scratchpad UI**:
   - Added dual controls to theorem proofs (`proofView` in `app/src/view.note.js`):
     - `💡 Try proof (hint)`: Reveals strategic guidance (`p.idea`, `p.why`, Step 1 clue `p.rungs[0].why`) alongside an interactive `.proof-scratchpad` textarea so learners can outline their proof before looking at the solution.
     - `👁 Show step-by-step proof`: Reveals full mathematical rungs and closing remarks.
   - Added dual controls to written questions (`writtenOn` in `app/src/view.note.js`):
     - `💡 Try proof (hint)`: Reveals `q.approach` and a scratchpad.
     - `👁 Show answer`: Reveals full model solution and common traps.

2. **Automated concept linkification (`linkifyConcepts`)**:
   - Added `linkifyConcepts(s)` in `app/src/core.dom.js` and hooked into `DOM.el` `{ html: v }`.
   - Replaces concept references (e.g. `<code>c.2.3.1</code>`, `<code>c.3.4.8</code>`, `<code>s.abs-ineq</code>`) with interactive styled chip links (`.concept-ref` in `app/src/ui.css`) bearing the section number and concept title, plus full hover tooltips. Clicking navigates directly to `#/note/<id>`.

3. **Complete Real Analysis I syllabus audit & content expansion**:
   - Audited Modules II, III, and IV for missing definitions and theorems in `data/ra1-core.js` and `data/ra1-bridge.js`.
   - Populated complete formal statements, rigorous multi-step proofs, traps, intuitions, and state/recall flashcards for:
     - Sequences & Limits (§3.1, §3.2): bounded convergent sequences, algebra of limits, nonnegativity preservation, squeeze theorem, root limits.
     - Monotone sequences & Cauchy criterion (§3.3, §3.4, §3.5): Monotone Convergence Theorem, Subsequences, Monotone Subsequence Theorem, Bolzano–Weierstrass Theorem, Cauchy Convergence Criterion, contractive sequences.
     - Limits of functions (§4.1, §4.2, §4.3): Cluster points, $\varepsilon$-$\delta$ definitions, Sequential Criterion, Divergence Criteria, function algebra of limits, function squeeze theorem, one-sided limits.
   - Fixed unclosed LaTeX delimiters and formatting errors across all data entries.

4. **DOM & runtime robustness**:
   - Added `sanitizeMathHtml` in `app/src/core.dom.js` to prevent raw mathematical `<` inequalities from breaking DOM element markup.
   - Fixed a temporal dead zone (TDZ) initialization order bug in `app/src/core.store.js` ensuring safe degraded operation in private browsing mode.

5. **Production deployment**:
   - Built self-contained distribution via `build.py` into `build/index.html`.
   - Deployed live to Firebase Hosting: `https://ssc-data-science-qm.web.app/math/real-analysis`.

6. **Separated Level 1 & Level 2 Completion Ticks & 19 Rigorous Proof Blocks**:
   - Supplied complete, multi-step formal proofs for all 19 theorems missing proofs (`c.1.2.1`, `c.1.3.2`, `c.4.1.9`, `c.5.1.2`, `c.5.1.4`, `c.5.1.7`, `c.5.2.2`, `c.5.2.4`, `c.5.2.5`, `c.5.2.7`, `c.5.4.11`, `c.5.4.14`, `c.6.1.5`, `c.6.2.1`, `c.6.2.3`, `c.6.2.12`, `c.6.3.2`, `c.6.3.3`, `c.6.4.1`).
   - Implemented separate ticks for Level 1 and Level 2:
     - When a note has no proof (e.g. definitions, examples), the main completion button marks both Level 1 and Level 2 simultaneously (`hasProof === false && done`), and the ladder shows Level 2 achieved ('counts for levels 1 & 2').
     - When a note has a proof, the top button toggles Level 1 completion ('Tick Level 1 (Completed)'). A dedicated Level 2 button is rendered below the proof section ('Tick Level 2 (I worked this proof through)').
     - Ticking Level 2 automatically ensures Level 1 is marked completed as well. Unticking Level 1 unticks Level 2. Top badges live-sync with interaction.

7. **Systematic Expansion of RA1 and RA2 to 209 Concepts (Bartle 4e Complete Coverage)**:
   - Systematically expanded all modules to guarantee complete syllabus and Bartle & Sherbert 4e coverage:
     - `data/ch6.js` (RA2 Module II Differentiation): expanded from 10 to 20 concepts (19 proofs), adding Carathéodory, Inverse Functions, Critical Points, Zero Derivative Characterization, Monotonicity Criteria, First Derivative Test, Mean Value Inequality & Lipschitz, L'Hospital $\infty/\infty$, and Taylor Remainder Estimates.
     - `data/ch7.js` (RA2 Module III Riemann Integral): expanded from 11 to 22 concepts (19 proofs), adding Cauchy Criterion, Linearity, Monotonicity, Squeeze Theorem, Step Functions, Continuous and Monotone Functions Integrability, Absolute Value Triangle Inequality, and First MVT for Integrals.
     - `data/ch8.js` (RA2 Module IV Sequences & Series of Functions): expanded from 6 to 11 concepts (8 proofs), adding Sequential Criterion for Non-Uniform Convergence, Cauchy Criterion for Uniform Convergence, Interchange of Limit and Derivative, Bounded Convergence Theorem, and Dini's Theorem.
     - `data/ra1-m1.js` (RA1 Module I Intro to Set Theory): expanded from 5 to 9 concepts (6 proofs), adding Well-Ordering Property of $\mathbb{N}$, Principle of Strong Induction, Subsets and Countable Unions of Countable Sets, and Cantor's Theorem on Power Sets.
     - `data/ra1-m2.js` (RA1 Module II The Real Numbers): added Theorem 2.1.4 (Irrationality of $\sqrt{2}$), Theorem 2.1.13 (Bernoulli's Inequality), and Theorem 2.4.7 (Existence of $\sqrt{2}$ in $\mathbb{R}$).
     - `data/ra1-core.js` & `data/ra1-bridge.js` (RA1 Module III & IV): added Theorem 3.1.10 (Standard Sequence Limits), Theorem 3.3.6 (Euler's Number $e$ via MCT), Definition 3.4.10 ($\limsup$ & $\liminf$), Theorem 3.4.11 (Convergence via $\limsup = \liminf$), Definition 4.3.5 (Infinite Limits), and Definition 4.3.8 (Limits at Infinity).
   - Zero empty sections remaining across both syllabi.
   - Validated 100% of concept notes in Node VM headless test with zero render errors.
   - Rebuilt bundles via `python3 build.py` and `python3 build.py --mock` and deployed live to `https://ssc-data-science-qm.web.app/math/real-analysis`.

8. **Levels 1–3, derived; desktop rail; Material icons; auto-math; the diagrams are on
   screen at last** (app change only — `data/` untouched, live page not republished).
   - **The level switch is gone.** `Store.level/setLevel/unlocked/unlock` are removed and
     the level is derived in `core.progress.js`: 1 read (red), 2 proof worked (amber),
     3 the section's exercises worked (green). Groups take the level of their weakest
     member. Every ring, tick, bar and badge is coloured by it; there is no promote
     button anywhere.
   - **Prerequisite bug fixed.** A prerequisite is now judged AT THE LEVEL OF THE NOTE
     THAT NEEDS IT (`Progress.prereqTarget` / `prereqOk`), and the cascade raises it to
     exactly that level and no further. Reading a note at level 1 no longer reports its
     groundwork as outstanding because something in the chain was pushed to level 2.
   - **Level 3 wired end to end.** `QUESTIONS` are indexed by section as well as by
     concept (`Pool.writtenForSec`); claiming one writes `'w:<id>'` into the same synced
     flag map as proof work; a section turns green only when its whole set is claimed;
     every note shows where its section stands, including "no exercises delivered yet".
     `app/mock/mock.written.js` adds 18 Bartle-style exercises, three per mock section.
   - **Diagrams.** `tools/gen_diagrams.py` generates `app/src/fig.diagrams.js` from
     `diagrams/light/`; `comp.figure.js` renders the light/dark pair as one `<img>` that
     follows `data-theme`. All 72 diagrams are reachable — 68 by concept id automatically,
     the rest by `img: [...]` on the concept. `deploy.sh` now copies `diagrams/` beside
     the test page as well as the live one.
   - **Desktop shell.** From 900px the top bar and the tab strip are both gone, replaced
     by a left rail carrying the brand, back, the five destinations, full screen and
     theme. `--head-h` and `--tab-h` go to `0px`, so the reel and every page get the full
     window height. Full screen narrows the rail to its glyphs.
   - **Back and full screen** in both shells, sharing one `Shell` module; `Router.back()`
     only walks our own history and disables itself at the root.
   - **No emoji.** Material Symbols throughout, via `DOM.mi('name')`. The only non-ASCII
     glyphs left in the app are the mathematical symbols in the LaTeX palette.
   - **Auto-math in the writing workspace.** `core.md.js` finds mathematical runs in prose
     and fences them itself, so `I love \frac{1}{2} in fact` typesets without a dollar
     sign; explicit `$…$` still wins. Completions are inserted bare rather than wrapped.
   - **`tools/check_tex.js`** added; it finds one real error in `data/` (see above).

9. **Data validation pass & Live release build**:
   - Fixed missing delimiter in `data/ch8.js` (`c.8.2.3.proof.ends`).
   - Audited all 131 theorems across RA1 and RA2; populated missing `why` strategy guidance across 9 proofs (`c.4.1.8`, `c.5.3.8`, `c.5.3.9`, `c.5.4.2`, `c.5.4.5`, `c.5.4.7`, `c.5.4.8`, `c.5.4.10`, `c.5.4.13`).
   - Regenerated diagram library mapping via `python3 tools/gen_diagrams.py` (72 diagrams, 8 sheets).
   - Validated clean TeX passing `tools/check_tex.js` with 0 errors across 209 concepts, 24 objective questions, and 19 written exercises.
   - Built live production bundle `build/index.html` (1.02 MB) from `live` pool and `build/test/index.html` from `mock` pool.
   - Verified clean execution and headless DOM boot in Node VM test.
