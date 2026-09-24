# HOOK_AGY — putting real content and real diagrams into the SSLC app

The app in `app/` is finished and runs on mock data. Nothing in it knows what a
sound wave is: it reads a **shape**, and renders whatever fills that shape. This
document is the contract for filling it.

Read it in this order: **What exists** → **The data contract** → **Where the raw
material already is** → **The six passes** → **Diagrams** → **Validate and
ship**. The traps at the end are the ones that will actually cost you a day.

---

## 1. What exists

```
SSLC/
  app/
    index.html            dev shell — ALSO the build order for src/*.js
    sources.js            the data seam: which pool loads, and from where
    src/core.dom.js       copied from the parent system: el(), mi(), Router
    src/ui.parts.js       copied from the parent system: the shared view parts
    src/ui.css            copied from the parent system + an SSLC tail
    src/*.js              the rest of the app. You should not need to touch these.
    mock/*.js             the mock pool (delete nothing; it is the test fixture)
    diagrams/             light/ and dark/ images, copied next to index.html on deploy
  build.py                bundles everything into one self-contained HTML file
  tools/check_data.js     validates a pool without a browser  ← run constantly
  tools/gen_diagrams.py   rewrites app/src/fig.diagrams.js from the image files
  tools/cdp_test.js       drives the built app in headless Chrome (47 checks)
  build/                  build output; build/test/ is the mock build
```

Commands:

```bash
python3 build.py --mock                 # mock pool  -> build/test/index.html
python3 build.py --mock --all-subjects  # + one bundle per subject
python3 build.py                        # live pool  -> build/index.html
python3 build.py --subject phy          # live, physics only -> build/phy/index.html

node tools/check_data.js mock           # lint the mock pool
node tools/check_data.js live           # lint the live pool
node tools/cdp_test.js build/test/index.html
python3 tools/gen_diagrams.py
```

The app is a static single file. No server, no framework, no build step beyond
`build.py`. Progress lives in `localStorage` under `sslc.v1` and is never
uploaded.

**The design system is not yours to redesign, and neither are its parts.**
Three files are copies of the parent system, not lookalikes:

| file | copied from | what changed |
|---|---|---|
| `src/ui.css` | `SSC-V4/real-analysis/app/src/ui.css` | nothing; an SSLC tail is appended below a banner comment |
| `src/core.dom.js` | same folder | only `linkifyConcepts`, for SSLC's `<subject>.<slug>` ids, plus a `DOM.esc` |
| `src/ui.parts.js` | same folder | the RA-coupled parts only: level names per track, the ladder's rung count, the mock banner's words |

So `el()`, `mi()`, `Router`, `.tt`, `.ring`, `.lvbar`, `.ladder`, `.path`, the
OMR sheet and the reel behave identically in both apps, because they are the
same code. Views build **DOM nodes** through `DOM.el`, never HTML strings —
match that when you add one.

What SSLC adds is only what a bilingual school app needs and a single-language
one did not: a Malayalam face, the plain-language callout, a diagram brief
standing in for an image, and a fourth rung on the ladder. When the parent
system changes, re-copy these three files and re-apply those deltas; do not
fork the tokens.

---

## 2. The data contract

### 2.1 How a pool is assembled

`app/sources.js` lists the files of each pool, **in load order**. The first file
must declare the globals; every later file pushes into them:

```js
// data/curriculum.js — must load first
var DATA_KIND = 'live';
var CONCEPTS = []; var PROBLEMS = []; var PYQ = [];
var SUBJECTS = [ ... ]; var CHAPTERS = [ ... ];

// data/concepts.phy10.js — and every other content file
CONCEPTS.push( {...}, {...} );
```

Plain classic scripts — no modules, no exports, no bundler. `build.py` reads the
quoted paths out of the `live` array and inlines those files in that order.

> **Trap:** anything quoted inside those brackets is treated as a path, comments
> included. A commented-out `'data/old.js'` will make the build try to open it.

Add the live files to the `live` array as you create them. The array shipped
today is a *plan*, not a promise — `build.py --mock` ignores it, and
`build.py` (live) refuses to build while any listed file is missing, which is
the behaviour you want: a half-present live pool must never reach a deploy.

### 2.2 Bilingual fields

Every piece of learner-facing text is stored twice on the same node, as
`<field>_en` and `<field>_ml`. There is one content tree, not two apps.

```js
title_en: 'Wave Equation  v = f λ',
title_ml: 'തരംഗ സമവാക്യം  v = f λ',
```

The UI calls `I18N.pick(node, 'title')`. If the active language is missing it
falls back to the other one **and renders a "Malayalam pending" chip**, so a
half-translated pool is visibly half-translated rather than silently English.
Never paper over a gap by copying the English string into the `_ml` field.

### 2.3 Concept node

```js
{
  id: 'phy.veq',                  // subject prefix + short slug, lowercase, dots
  subject: 'phy',                 // must match the chapter's subject
  chapter: 'phy.10.1',
  needs: ['phy.apf', 'phy.long'], // prerequisite concept ids; may cross class AND subject
  mock: true,                     // omit on real content; drives the MOCK chip

  title_en / title_ml,            // nav label
  one_line_en / one_line_ml,      // one sentence; shown in lists and on reel reveal
  source_text_en / source_text_ml,// the textbook's own statement, as HTML
  cite_en / cite_ml,              // 'Physics X, Ch.1 Sound Waves' — always cite
  plain_en / plain_ml,            // "what this really means"
  plain_status: 'review',         // 'review' until a human has read it. See §4.3
  formula: 'v = f λ',             // optional, plain text, rendered in a mono box
  diagram_brief: '...',           // the work order for the image. See §5
  reel_hook_en / reel_hook_ml,    // daily-life opening line for the reel
  cloze_en / cloze_ml,            // fill-in-the-blank for the first reel exposure
  self_check: [ /* questions, §2.5 */ ]
}
```

### 2.4 Subject and chapter

```js
{ id: 'phy', track: 'science', title_en, title_ml, blurb_en, blurb_ml }
// track is 'science' (4 levels) or 'maths' (5 levels). Nothing else.

{ id: 'phy.10.1', subject: 'phy', cls: 10, n: 1, title_en, title_ml, book_en, book_ml }
// cls 1..10; n is the chapter number within that class.
// Class 10 chapters show as the main tree; everything else shows as Foundation.
```

### 2.5 Question shapes

One shape serves self-checks, problems, PYQ and diagnostics:

```js
{ id: 'pr.phy.2',          // required on PROBLEMS and PYQ; self_check items need none
  tests: ['phy.veq'],      // which concepts this raises a level for — REQUIRED
  type: 'mcq' | 'short' | 'work',
  marks: 3, mock: true,
  prompt_en / prompt_ml,
  options_en / options_ml, // mcq only: [{k:'A', t:'...'}], SAME keys in both languages
  answer: 'B',             // mcq only: must be one of the option keys
  approach_en / approach_ml,   // optional hint, shown before the solution
  solution_en / solution_ml,   // required for short and work
  trap_en / trap_ml }          // optional "common slip" note
```

`PROBLEMS` and `PYQ` are separate top-level arrays keyed to concepts by `tests`,
not nested inside the concept. A PYQ usually tests two or three concepts at
once, and nesting would force you to duplicate it. PYQ nodes additionally carry
`exam`, `year`, `month`, `paper`, `qno`.

### 2.6 What the level engine does with all this

`app/src/core.progress.js` derives levels; nothing is ever set by a button.

| Science (4)                | Maths (5)                    | Evidence required |
|---|---|---|
| — | 1 Basics | every `needs` concept read **and** its self-check passed |
| 1 Read + self-check | 2 Concept | read tick + 2 correct self-check answers |
| 2 Problems | 3 Problems | every `PROBLEMS` item tagged to the concept graded got/partly |
| 3 Past questions | 4 Past questions | every `PYQ` item tagged to the concept graded |
| 4 Recall, spaced | 5 Recall, spaced | SM-2: ≥3 reps, last one correct, interval ≥7 days |

**A rung with nothing filed against it clears for free.** A concept with no
problems reaches the problems rung as soon as the rung below clears. This is
deliberate — it lets a sparse pool ship — but it means *every problem you add
lowers somebody's level*. That is correct behaviour, not a bug to report.

---

## 3. Where the raw material already is

Everything below is already in this repository. Nothing needs downloading.

```
extracted/{en,ml}/{physics,chemistry,biology,mathematics}/chapter_NN_slug.{txt,html}
extracted/{en,ml}/{class_08,class_09,class_10}/<subject>/*.{txt,html}
extracted/{en,ml}/<subject>/images/fig_chNN_pNNN_MM.jpg
PDFs/Class_{08,09,10}/{en,ml}/<subject>/*.pdf
PYQs/SSLC_Class_10/{English_Medium,Malayalam_Medium}/<Subject>/<subject>_march_YYYY_em.{txt,html}
PYQs/SSLC_Class_10/.../SSLC_<Subject>_Model_{QP,AnswerKey}_EM.pdf
```

The `.txt` extraction is the one to parse. Its structure:

```
=== Chapter 1: Sound Waves ===

--- PAGE 7 ---
[Diagram: images/fig_ch01_p007_01.jpg (fig_ch01_p007_01)]
1 Sound Waves
...body text...
```

So you get, for free: chapter title, page boundaries, and **a marker for every
figure with the file already extracted next to it**. That last point matters for
§5 — most diagrams do not need generating at all.

English and Malayalam chapters mirror each other by chapter number. Pair them on
`chapter_NN`, then spot-check a sample by eye before trusting the pairing; a
mispaired chapter produces a node whose two languages say different things,
which the linter cannot catch.

---

## 4. The six passes

Do these as separate passes over the whole slice, not concept by concept. Each
pass has a different failure mode and mixing them hides all of them.

### 4.1 Pass 1 — chapters

Build `data/curriculum.js` from the directory listing: one `CHAPTERS` entry per
`chapter_NN_*.txt`, `title_en` from the `=== Chapter N: Title ===` line,
`title_ml` from the Malayalam file's own heading. Do not translate titles
yourself — the Malayalam book has them.

### 4.2 Pass 2 — concepts

Split each chapter into concept nodes. A concept is **one thing that can be
tested on its own**: a definition, a law, a formula, a process. Ten to fifteen
per chapter is the right density; three is too coarse and forty is a glossary.

`source_text_*` must be the textbook's statement, lightly cleaned (fix OCR
breaks, drop page furniture, keep the wording). **Never paraphrase a definition,
a formula, or a numeric constant into `source_text`**, and never re-word a
statement that is already correct because another phrasing reads better — a
production node is not updated for wording alone. Every term in it comes from
the glossary of §4.3. Cite the chapter in `cite_*` every time.

### 4.3 Pass 3 — terminology

**Use the textbook's own term, every time, in both languages.** This is the
rule the rest of the content hangs off, and it is the one most easily lost to a
generated batch that "improved" the wording.

Do this as its own pass, before any concept text is written:

1. **Build the glossary first.** Walk the English and Malayalam chapters
   side by side and pull out every technical term as a pair — `amplitude` /
   `ആയതി`, `common difference` / `പൊതുവ്യത്യാസം`, `rarefaction` /
   `വിരളീകരണം`. Keep it in `data/glossary.json` as
   `{term_en, term_ml, subject, first_seen: {class, chapter}, note}`. That file,
   not your judgement, is the authority for every later pass.
2. **Never translate a term yourself.** The Malayalam term comes out of the
   Malayalam book, never out of the English term. A translated-sounding
   coinage is worse than an English word left standing, because the learner
   will not find it in their own textbook or in the exam paper.
3. **Never substitute a synonym.** If the book says *equilibrium position*, the
   node says equilibrium position — not "rest position", not "centre". If the
   book says `സമനിലാസ്ഥാനം`, that is the word, even where another is more
   common in speech. The exam is marked against the book's vocabulary.
4. **One term, one concept, everywhere.** The same idea must carry the same
   term in its title, its `source_text`, its `plain_*` rewrite, its questions
   and its `diagram_brief`. Drift between a node's own fields is the commonest
   way a generated batch goes wrong, and no validator can catch it.
5. **Where the books disagree across classes**, prefer the Class 10 book's term
   and record the Class 8/9 variant in the glossary `note` — then say so in the
   foundation node, so a learner who knows the older word is not lost.
6. **Symbols follow the book too.** `x₁` and `d` for a sequence because that is
   Kerala's notation, not `a` and `d` from another syllabus; `v`, `u`, `f` with
   the Cartesian sign convention exactly as the physics book states it.
7. **When the book has no term for something you need, do not mint one.** Say
   so in the node's `note` field and leave it flagged. A missing term is a
   gap someone can fill; an invented one is a mistake that spreads.

### 4.4 Pass 4 — plain language

`plain_*` is the "what this really means" callout. Rules:

- It explains; it does not restate. If it could replace `source_text`, rewrite it.
- It must preserve the exact meaning. Simplifying "the particles vibrate along
  the direction of propagation" into "the air moves" is a factual change.
- **Simplify the sentence, never the term.** The plain-language rewrite is
  where a hard sentence gets easier, not where `വിരളീകരണം` becomes a word the
  learner will not meet again. Introduce the book's term, then explain it — a
  learner who understands the idea under a different name still loses the mark.
- Name the trap where there is one. The best callouts in the mock pool are the
  ones that say which mark gets lost and where (see `mat.nth`, `phy.lensf`).
- Set `plain_status: 'review'`. It renders a visible "awaiting review" line, and
  the linter counts them. Only a human reader flips it to `'ok'`.
- If you cannot simplify something without risking the meaning — a formal
  statement, a chemical convention — **leave `plain_*` empty and flag it**. An
  empty callout is fine. A confidently wrong one is not.

### 4.5 Pass 5 — the prerequisite graph

Its own pass, over the whole Class 10 set at once. For each Class 10 concept,
name the earlier concepts it stands on and put their ids in `needs`. Edges may
cross class **and subject** — `phy.lensf` needs `mat.frac8`, and that edge is
what lets a physics diagnostic surface a Class 8 fractions gap.

This graph powers three things: the diagnostic, the maths basics gate, and the
"builds on" chips. If it is thin, all three go quiet and the app degrades into a
textbook reader. Budget real time here.

Every `needs` id must exist in the pool. If the prerequisite is below the
classes you have extracted, either add a foundation node for it or leave the
edge out — do **not** point at an id you have not created.

### 4.6 Pass 6 — questions

- `self_check`: two per concept, at least one of them an MCQ. **Only MCQs can
  appear in a diagnostic**, so a concept with no MCQ can never be surfaced as
  somebody's gap. Distractors must be plausible — the wrong answer a learner
  would actually pick, ideally the one named in `trap_*`.
- `PROBLEMS`: from the textbook exercises. Tag `tests` honestly; a problem tagged
  to five concepts blocks all five.
- `PYQ`: from `PYQs/`. Parse the question paper `.txt`, take answers from the
  answer-key PDF where one exists, and **never invent an answer key**. Keep
  `exam`, `year`, `month`, `paper`, `qno` — provenance is how a learner decides
  to trust it. Drop `mock: true` only when the question is genuinely from a real
  paper and its answer has been checked.

---

## 5. Diagrams

Two routes. Try them in this order.

### 5.1 Route A — the textbook figure is already extracted

`extracted/<lang>/<subject>/images/fig_chNN_pNNN_MM.jpg`, referenced from the
`.txt` right where it belongs. Crop it, name it as below, done. This is the
cheapest route and the most faithful one; use it whenever the textbook figure
actually shows the mechanism.

### 5.2 Route B — generate one from `diagram_brief`

Every concept carries a `diagram_brief` written as a work order, not a caption:

> "A waveform with λ marked between two successive crests and a labelled arrow
> for v along the direction of travel; beneath it, two stacked waveforms of the
> same length showing low f with long λ and high f with short λ, both annotated
> 'same v'. Bilingual labels."

Feed that, plus the concept title in **both** languages, plus the palette below,
to the image model (Nano Banana / Gemini 2.5 Flash Image). Keep a log of the
exact prompt sent, keyed by concept id, in `diagrams/prompts.jsonl` — one line
of `{concept_id, prompt, model, ts, file}` per generation. When a diagram comes
out wrong you tweak a known prompt instead of guessing what was sent.

Palette to pass to the generator — these are the design system's own tokens, so
a figure sits inside the app rather than on top of it: ink `#191614` on paper
`#faf8f4`, accent `#2a45c7`, rules `#cec4b3`, and for anything that has to read
as right/wrong/careful, `#0d6b49` / `#a9251d` / `#845200`. Flat line art, no
gradients, no drop shadows, generous labels, Malayalam label under the English
one — **and every label taken from the glossary of §4.3**, so the figure and
the text it sits beside call the same thing by the same name.

A dark variant is optional: `tools/gen_diagrams.py` pairs
`diagrams/dark/<same name>` with the light file automatically, and Fig falls
back to the light image when there is none.

### 5.3 Wiring an image in

```
app/diagrams/light/<concept-id-with-hyphens>__<slug>.png
app/diagrams/dark/<concept-id-with-hyphens>__<slug>.png     # optional
```

`phy.veq` becomes `phy-veq__wave-equation.png` — dots in the id become hyphens
in the filename. Then:

```bash
python3 tools/gen_diagrams.py     # rewrites app/src/fig.diagrams.js
python3 build.py --mock           # or the live build
```

Concepts absent from the map render their `diagram_brief` inside a hatched
placeholder, so an unfinished diagram set reads as a visible queue rather than a
blank page. Generate once per concept and cache — the map is keyed by concept
id and nothing regenerates per view.

Images are **not** inlined into the bundle. `DIAGRAM_BASE` stays the relative
`diagrams/`, and the deploy copies `app/diagrams` next to `index.html`. Keep
each file well under a megabyte; a 30 MB diagram set would make the page
unusable on a phone.

---

## 6. Validate and ship

```bash
node tools/check_data.js live                    # errors break the app; warnings are the to-do list
python3 build.py --mock --all-subjects
node tools/cdp_test.js build/test/index.html     # 51 checks, real headless Chrome
```

`check_data.js` catches: duplicate ids, dangling prerequisites, prerequisite
cycles, a concept whose subject disagrees with its chapter, an MCQ whose answer
is not one of its options, option keys that differ between languages, missing
`_ml` fields, questions with no `tests`, and every rung currently clearing for
free. Run it after every generated batch, not at the end.

Hosting is the shared site deploy at
`SSC-V2/SEM5/PHY/apps/tools/deploy.sh`, which publishes:

```
/pre/physics-test    /pre/chemistry-test    /pre/biology-test    /pre/maths-test
```

from `build/test/<subject>/index.html` — always rebuilt fresh from the mock
pool — and, once `build/<subject>/index.html` has been committed, the same pages
without `-test` from the live pool. Live pages are only **rebuilt** when
`deploy.sh --live` is passed; without it the committed build is republished byte
for byte, so shipping an app change can never quietly push unvalidated content.

> A Firebase deploy replaces the whole site. `deploy.sh` publishes every page
> the site serves; anything left out of it disappears. Do not deploy the SSLC
> app on its own.

---

## 7. Traps

1. **A new file in `app/src/` must be added to `app/index.html`** in its
   dependency position. That file is the build order; a script not listed there
   is silently absent from the bundle.
2. **Quoted strings inside the `sources.js` arrays are paths**, comments
   included.
3. **Data files run in global scope** and mutate globals. No `const` at the top
   level of a second data file — it will collide.
4. **`Store` writes are debounced 250 ms.** Call `Store.flushNow()` before a
   navigation that could drop the page.
5. **Malayalam needs a Malayalam OCR model.** Running English OCR over a
   Malayalam page produces confident garbage that no validator can detect.
6. **Do not delete `app/mock/`.** It is the fixture the whole test suite and the
   `-test` deploy run on.
7. **A per-subject build keeps cross-subject prerequisites.** `--subject phy`
   pulls `mat.frac8` in with it. Do not "tidy" those edges away to make a
   subject bundle self-contained; they are the point.
8. **Terminology drift is invisible to every validator here.** `check_data.js`
   can see a dangling id; it cannot see that a node says "rest position" in its
   title and "equilibrium position" in its statement. The glossary pass is the
   only defence, which is why it comes before the writing.
9. **Ids are permanent.** Progress is stored against `conceptId`, `problem.id`
   and `pyq.id` in every learner's browser. Correct the physics in place; never
   renumber a node to tidy it up.
10. **The mock pool is not a content template.** Its facts are correct but its
   wording is not the textbook's, and its Malayalam has not been read by a
   Malayalam reader. Replace nodes wholesale; do not edit mock text into real
   text.
