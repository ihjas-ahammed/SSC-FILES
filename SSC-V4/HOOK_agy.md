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
- Do not download books for this project; the user will obtain books independently.
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
const DATA_SOURCES = {
  use: 'live',                       /* 'mock' for the test page, 'live' for the real one */
  mock: ['mock/mock.courses.js', 'mock/mock.concepts.js', 'mock/mock.objective.js'],
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
| `QUESTIONS` | `[written]` | Optional. Written/essay questions; shown under the note they test. |

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
5. **Figures are drawn by the app, never supplied as images.** A concept may name figures
   in `figs: ['fig.eps-delta']`; the ids must exist in `app/src/fig.library.js`, where
   each figure is hand-drawn inline SVG (theme-aware, animated, sometimes with a control).
   Do not point `figs` at PNGs, and do not add entries to `diagrams/` for this app —
   if a concept needs a new picture, ask for the figure to be built.
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
10. **`proof` is now load-bearing, not decoration.** Level 2 progress is counted per
   proof, and its denominator is *the concepts that carry a `proof` block*. A theorem
   delivered without one is invisible to Level 2 — it cannot be worked through, and it
   silently shrinks the denominator rather than showing up as missing. Every theorem,
   lemma and corollary needs `proof: { idea, why?, rungs: [{why, m}], ends? }`.
   Definitions and examples correctly have none.

   It is worse than a missing feature: **the level is per course**, and a course switched
   to Level 2 counts a note as complete only once its proof is worked through. A theorem
   with no `proof` block therefore counts as complete the moment it is ticked, and the
   course's Level 2 progress quietly overstates itself. Supply the proof, or the mark
   means nothing.
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
4. Every theorem in the delivered slice has a `proof` block (rule 10) and a `state`
   card, or Level 2 and Recall are respectively blind to it.
5. The deploy prints every URL it published. If a page you expected is missing from
   that list, it has just been deleted from the live site — republish before leaving.

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

### Outstanding: 19 theorems in the live pool have no `proof` block

Measured against the current `data/` pool (117 concepts, 71 theorems/lemmas/corollaries;
every one of them has a `state` card, and no `needs` or `tests` id is unresolved). These
nineteen are invisible to Level 2 and, worse, count as complete the moment they are
ticked — all 19 theorems have now been completed with full rigorous proof blocks
(`idea`, `why`, `rungs`, `ends`):

| id | § | course | kind | title | Status |
| --- | --- | --- | --- | --- | --- |
| `c.1.2.1` | 1.2 | ra1 | theorem | Principle of Mathematical Induction | ✓ Proof supplied |
| `c.1.3.2` | 1.3 | ra1 | theorem | Countability of Rationals and Uncountability of Reals | ✓ Proof supplied |
| `c.4.1.9` | 4.1 | ra1 | theorem | Divergence Criteria (for functions) | ✓ Proof supplied |
| `c.5.1.2` | 5.1 | ra2 | theorem | Neighbourhood Characterization of Continuity | ✓ Proof supplied |
| `c.5.1.4` | 5.1 | ra2 | corollary | Discontinuity Criterion | ✓ Proof supplied |
| `c.5.1.7` | 5.1 | ra2 | theorem | Continuous Extension via the Limit | ✓ Proof supplied |
| `c.5.2.2` | 5.2 | ra2 | theorem | Algebraic Combinations of Continuous Functions (on a Set) | ✓ Proof supplied |
| `c.5.2.4` | 5.2 | ra2 | theorem | \|f\| Is Continuous Whenever f Is | ✓ Proof supplied |
| `c.5.2.5` | 5.2 | ra2 | theorem | √f Is Continuous Whenever f Is (and f ≥ 0) | ✓ Proof supplied |
| `c.5.2.7` | 5.2 | ra2 | theorem | Composition of Continuous Functions (on a Set) | ✓ Proof supplied |
| `c.5.4.11` | 5.4 | ra2 | corollary | Explicit Mesh Size for Step-Function Approximation | ✓ Proof supplied |
| `c.5.4.14` | 5.4 | ra2 | theorem | Weierstrass Approximation Theorem | ✓ Proof supplied |
| `c.6.1.5` | 6.1 | ra2 | theorem | Carathéodory's Theorem and the Chain Rule | ✓ Proof supplied |
| `c.6.2.1` | 6.2 | ra2 | theorem | Interior Extremum Theorem (Fermat's Theorem) | ✓ Proof supplied |
| `c.6.2.3` | 6.2 | ra2 | theorem | Rolle's Theorem | ✓ Proof supplied |
| `c.6.2.12` | 6.2 | ra2 | theorem | Darboux's Theorem (Intermediate Value Property of Derivatives) | ✓ Proof supplied |
| `c.6.3.2` | 6.3 | ra2 | theorem | Cauchy's Mean Value Theorem | ✓ Proof supplied |
| `c.6.3.3` | 6.3 | ra2 | theorem | L'Hospital's Rules | ✓ Proof supplied |
| `c.6.4.1` | 6.4 | ra2 | theorem | Taylor's Theorem with Lagrange Remainder | ✓ Proof supplied |

`c.6.2.3` (Rolle) and `c.6.3.2` (Cauchy MVT) connect the Mean Value chain to L'Hospital and Taylor with no missing links.

A `theorem` whose proof genuinely is one line ("apply the previous theorem to $-f$")
still gets a `proof` block saying exactly that. The block is what makes the node
countable; leaving it out to mean "trivial" is indistinguishable from leaving it out by
mistake.

### What Level 2 changed that AGY has to supply

The app now records, per learner and across devices:

- **proof work**, claimed per proof, which is what earns mastery level 2;
- the same first-attempt measurements as before, merged rather than overwritten.

Nothing about the delivery format changes except rule 10: `proof` blocks move from
"nice to have" to required on every theorem. `proof.idea` and `proof.why` are shown as
the *hint* before the learner tries; `proof.rungs` are the step-by-step reveal after.
An `idea` that merely restates the theorem makes the hint useless, so write it as the
strategy — "trap the sequence by bisection", "subtract the chord and apply Rolle" —
before any technical step.

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
