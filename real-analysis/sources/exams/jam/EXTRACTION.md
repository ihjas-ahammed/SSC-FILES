# Extract the real-analysis questions from one IIT JAM MA paper

*The brief the first pass (2015–2026, minus 2024) was run from, kept so the remaining
nine papers can be done the same way. `<work>` is any scratch directory; the concept
index it refers to is regenerated from the live pool — see the end of this file.*

You are producing study content for a Real Analysis app. Accuracy matters more than
volume: a wrong answer in a past-paper bank is worse than a missing question, because the
learner has no way to know it is wrong.

## Your input

- The paper: `real-analysis/sources/exams/jam/jam-<YEAR>-ma.pdf`
- Plain text already extracted (for text-layer papers): `<work>/jamtxt/<YEAR>.txt`
  Some papers are **image scans with no text layer** — for those, read the PDF directly
  with the Read tool using the `pages` parameter (max 20 pages per call).

  **DO NOT TRUST THE EXTRACTED TEXT BLINDLY.** Several of these PDFs use font
  subsetting that makes `pdftotext` emit the WRONG Unicode characters for maths
  symbols — the 2026 paper is entirely corrupted this way, and a mis-copied exponent or
  inequality produces a question that is subtly, invisibly wrong. Use the text to find
  and triage the questions quickly, then **read the actual PDF pages as images with the
  Read tool and transcribe the maths from those.** If the text and the image disagree,
  the image is right. Say in your report which source you ended up trusting.
- `<work>/concept-index.txt` — every concept id in the app, grouped by textbook
  section. This is what `tests` and `sec` must reference.

## What to keep, and what to drop

Keep ONLY questions whose mathematical content is real analysis as covered by these two
courses:

**`course: 'ra1'`** — Bartle §1.1–1.3, 2.1–2.5, 3.1–3.7, 4.1–4.3:
sets and functions, induction, countability; the field and order axioms, absolute value,
**supremum/infimum and completeness**, the Archimedean property, density of ℚ, nested
intervals; **sequences** — limits, limit theorems, monotone sequences, subsequences,
Bolzano–Weierstrass, Cauchy sequences, divergence, **introduction to infinite series**;
**limits of functions**.

**`course: 'ra2'`** — Bartle §5.1–5.6, 6.1–6.4, 7.1–7.5, 8.1–8.4, 9.x, 10.x:
**continuity**, combinations of continuous functions, continuity on intervals
(boundedness, max–min, IVT), **uniform continuity**, monotone and inverse functions;
**differentiation**, Rolle, **Mean Value Theorem**, L'Hospital, **Taylor's theorem**;
the **Riemann integral**, integrability criteria, the **Fundamental Theorem of Calculus**;
**sequences and series of functions**, pointwise vs **uniform convergence**, interchange
of limits, power series, tests for convergence of series.

A question that spans both goes to the LATER course (`ra2`).

DROP anything that is: linear algebra, matrices, eigenvalues, vector spaces; group
theory, rings, permutations, modular arithmetic; differential equations (ODE/PDE);
vector calculus, line/surface integrals, Green/Stokes/Gauss; multivariable calculus
(partial derivatives, functions of two or three variables, double/triple integrals,
Lagrange multipliers); complex analysis; probability and statistics; and pure
computation with no analysis content.

**Borderline rule:** if a question is *about* a sequence, a limit, continuity,
differentiability, integrability or convergence — keep it, even if it is dressed in
another topic's clothing. If real analysis is only the setting for an algebra
computation, drop it.

Expect roughly 10–25 keepers in a 60-question modern paper.

## Output

Write **one file**: `<work>/<YEAR>.js`, containing a bare JavaScript array literal
and nothing else — no `const`, no `PYQ.push`, no module wrapper, no markdown fence.
It must parse as `[ {...}, {...} ]`.

```js
[
{
  id: 'p.jam.2024.07',
  course: 'ra2',
  exam: 'JAM', year: 2024, paper: 'MA', qno: 7,
  marks: 1, neg: -0.33,
  sec: '6.2',
  tests: ['c.6.2.4'],
  title: 'Mean Value Theorem on a closed interval',
  type: 'MCQ',
  prompt: `<p>Let $f:[0,1]\\to\\mathbb{R}$ be continuous on $[0,1]$ and differentiable on $(0,1)$. Which one of the following is true?</p>`,
  options: [ { k:'A', t:'…' }, { k:'B', t:'…' }, { k:'C', t:'…' }, { k:'D', t:'…' } ],
  answer: 'B',
  solution: `<p>…</p>`,
  tested: `<p>…</p>`,
  trap: `…`
}
]
```

### Field rules — read every one of these

- **`id`** — exactly `p.jam.<year>.<qno>` with `qno` zero-padded to two digits
  (`p.jam.2024.07`). Never renumber, never skip the padding.
- **`qno`** — the number as printed on the paper (a plain integer, not padded).
- **`course`** — `'ra1'` or `'ra2'`. Required.
- **`marks`** — what the paper says. Section A/B are 1 or 2 marks, Section C is 1 or 2.
  Older papers (2007–2011) use 6 and 12 or similar — copy what is printed.
- **`neg`** — negative marking as a NUMBER, from the paper's own instructions
  (`-0.33` for a 1-mark MCQ, `-0.66` for a 2-mark MCQ in modern papers; `0` for MSQ and
  NAT, which carry no negative marking). If the paper does not say, use `0`.
- **`sec`** — the single Bartle section it best belongs to, from the concept index.
- **`tests`** — 1 to 3 concept ids **that appear verbatim in `concept-index.txt`**. Do
  not invent ids. If nothing fits well, use the closest one rather than an invented one;
  if genuinely nothing fits, omit `tests` entirely rather than guessing.
- **`title`** — a short noun phrase naming what the question is about (not "Question 7").
- **`type`** — `'MCQ'` (one key), `'MSQ'` (a set of keys), `'NAT'` (a number), or omit
  entirely for a subjective/descriptive question (the older Part B/C papers).
- **`options`** — for MCQ/MSQ only: `[{k:'A',t:'…'}, …]`, keys `A`,`B`,`C`,`D` as printed.
- **`answer`** —
  - MCQ: the single key as a string, e.g. `'C'`
  - MSQ: the exact key set as an array, e.g. `['A','C']`
  - NAT: an object `{ value: 2.5, tol: 0.01, dp: 2 }` (`tol` may be `0`, `dp` is decimal
    places the paper asks for)
  - subjective: omit `answer`, `options` and `type` entirely.
- **`prompt`** — the question, as authored HTML with LaTeX. **Restate it faithfully**:
  same hypotheses, same quantifiers, same numbers.
- **`solution`** — the full worked answer in HTML. **You must actually solve it.** Show
  the reasoning, not just the letter. For an MCQ, say why each wrong option is wrong when
  that is the instructive part.
- **`tested`** — one or two sentences: which theorem or definition the question really
  examines. Optional but valuable.
- **`trap`** — plain text (not HTML), the mistake that actually costs the marks here.
  Optional; omit rather than padding.
- **`approach`** — optional HTML, a strategic hint shown *before* the solution. Worth
  adding on subjective questions.

### LaTeX and HTML rules — these break the app when violated

- Maths goes in `$…$` (inline) or `$$…$$` (display). Every `$` must be paired.
- This is **JavaScript source**, so every LaTeX backslash must be written as `\\` inside
  a normal string. Prefer **backtick template literals** for `prompt`, `solution`,
  `tested`, `approach` — inside a backtick string a single `\` is still an escape, so
  **still write `\\frac`, `\\mathbb{R}`, `\\varepsilon`**. Getting this wrong is the
  single most common failure: verify by running
  `node -e "JSON.stringify(require('<work>/<YEAR>.js'))"` — no, better:
  `node -e "new Function('return ' + require('fs').readFileSync('<file>','utf8'))()"`
  and fix anything it rejects.
- Balance every `{`/`}`, every `\\left`/`\\right`, every `\\begin{}`/`\\end{}`.
- Convert the PDF's Unicode maths to LaTeX: `ℝ`→`\\mathbb{R}`, `ℕ`→`\\mathbb{N}`,
  `ℚ`→`\\mathbb{Q}`, `ℤ`→`\\mathbb{Z}`, `→`→`\\to`, `∞`→`\\infty`, `≤`→`\\le`,
  `≥`→`\\ge`, `≠`→`\\ne`, `∈`→`\\in`, `⊆`→`\\subseteq`, `∀`→`\\forall`, `∃`→`\\exists`,
  `𝜀`/`ε`→`\\varepsilon`, `𝛿`/`δ`→`\\delta`, `∑`→`\\sum`, `∫`→`\\int`, `√`→`\\sqrt{}`,
  `⋃`→`\\bigcup`, `∩`→`\\cap`, `∪`→`\\cup`. Italic maths letters like `𝑓`, `𝑥`, `𝑛`
  become plain `f`, `x`, `n` inside maths mode.
- HTML allowed in prose: `<p> <b> <i> <em> <strong> <ul> <ol> <li> <br> <code> <sub>
  <sup>`. Nothing else, no attributes, no inline styles.
- **A literal `<` outside maths mode breaks the HTML parser.** Inside `$…$` it is fine
  (the app protects it); outside, write `&lt;`.

## Before you finish — verify

1. The file parses:
   `node -e "const s=require('fs').readFileSync(F,'utf8'); const a=new Function('return '+s)(); console.log(a.length)"`
2. Every `id` is unique and correctly padded.
3. Every id in `tests` appears in `concept-index.txt` (grep for it).
4. Every `$` is paired in every string.
5. Every `answer` matches what your `solution` actually derives. Re-check each one.

## Report back

One short paragraph: how many questions you kept, how many you dropped and why, the
ra1/ra2 split, and — importantly — **any question you were not fully confident about**,
named by id. Do not hide uncertainty; it is more useful than a clean-looking report.


---

## Regenerating the concept index

`<work>/concept-index.txt` is just every concept id in the live pool, grouped by section.
Rebuild it whenever `data/` grows:

```js
// node this from real-analysis/
const fs=require('fs'), path=require('path'), vm=require('vm');
const APP='app';
const src=fs.readFileSync(APP+'/sources.js','utf8');
const files=(/live:\s*\[([\s\S]*?)\]/.exec(src)[1].match(/['"]([^'"]+)['"]/g)||[]).map(s=>s.slice(1,-1));
const ctx={console}; vm.createContext(ctx);
files.forEach(r=>vm.runInContext(fs.readFileSync(path.normalize(path.join(APP,r)),'utf8'),ctx,{filename:r}));
vm.runInContext('globalThis.__X={C:CONCEPTS,S:SECTITLE};',ctx);
const bySec={}; ctx.__X.C.forEach(c=>(bySec[c.sec]||(bySec[c.sec]=[])).push(c));
let out=''; Object.keys(bySec).sort().forEach(sec=>{
  out+=`\n§${sec}  ${ctx.__X.S[sec]||''}\n`;
  bySec[sec].forEach(c=>{ out+=`  ${c.id}  [${c.kind}]  ${c.title}\n`; });
});
fs.writeFileSync('<work>/concept-index.txt', out);
```

## Validating and assembling

The first pass used two throwaway scripts that are worth rewriting rather than hunting
for: a validator that checks id format and uniqueness, that every `tests` id resolves in
the live pool, that `answer` matches `type`, and that `$`, `{}`, `\left/\right` and
`\begin/\end` all balance; and an assembler that merges the per-year fragments into
`data/pyq.ra1.js` / `data/pyq.ra2.js` through `JSON.stringify`, which cannot mis-escape a
backslash.

Two checks that caught real problems and should be repeated:

- **`node tools/check_tex.js`** over the live pool once the files are in place.
- **Render everything through MathJax in a browser** and count `mjx-merror` nodes. The
  first pass rendered 1396 authored blocks into 10992 MathJax containers with zero
  errors; anything above zero is a broken question you would otherwise ship.
- **Cross-check against the official key** for 2016, 2017 and 2026. All 57 matched.
