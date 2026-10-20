# Study-PDF kit: Real Analysis II (Sem 5, MAT5CJ301), specialised for proof-based maths

This folder turns the syllabus, past papers (PYQs) and Bartle & Sherbert into **three phone-sized PDFs per module**. It is a maths-specialised fork of `../OPTICS/CLAUDE.md`.
- Part A says how to rebuild it, or reuse it for another proof-based maths course (Real Analysis I, Complex Analysis, Abstract Algebra, Topology).
- Part B is the record for Real Analysis II.

Where Optics teaches *calculations from physics*, this kit teaches *writing proofs*. Every change below follows from that.

---

# Part A · How to make it again (or for another analysis-type course)

## A1. What you get

For each module N:

| File | What it is | Use |
|---|---|---|
| `real-analysis-2-module-N-prepare.pdf` | Every definition, theorem and proof the paper needs. Starts from Plus Two calculus and Real Analysis I. Each question is broken down to its smallest ideas, and each idea is taught with a picture, a word-for-word definition, a proof skeleton, scratch work next to the clean proof, a hypotheses checklist with counterexamples, and a self-check. | Learn |
| `real-analysis-2-module-N-pyq+model.pdf` | A model paper with **twice** the questions of a real FYUGP paper (20 short + 16 paragraph + 4 essay = 40). Every past question appears, tagged with its year and number. Every syllabus concept is the main point of exactly one question. | Practise |
| `real-analysis-2-module-N-answerkey.pdf` | A formal exam answer for every question. Each starts with **Know first** chips (topic code + title) and ends with a grey marks split. | Check |

Design: pages are 100 × 200 mm (one phone screen), with large type, coloured boxes and no wide tables.

## A2. Step by step

1. **Folder**: `SEM5-PYQ/<COURSE>/` with `syllabus.pdf` and `source/` (all past papers, scans fine). Note where the textbook is.
2. **Copy the kit**: `pdf-src/` from here. Delete `src/m*/`, `figs_m*.py`, `build/` and `research/*`. Keep:
   - `build.py`, `render.js`, `style.css` (includes the maths boxes in A5) and `katex/`
   - `figs.py`, the generic `S` and `Plot` classes
   - `tools/sheet.py`
3. In `build.py`, change the output prefix `real-analysis-2-module-…`. Figure modules are found automatically (`figs_m[1-4].py`).
4. Give Claude the prompt in A3 from inside the folder.
5. Read the result on a phone and ask for fixes in plain words.
6. Ask for the zip and email (A8).

## A3. The prompt (copy, fill the brackets)

> In `<folder>` I have the syllabus, past papers in `source/` and the textbook `<book>`. Make study PDFs for `<course>`, modules `<1–4>`, using the kit in `pdf-src/` and the method in `REAL-ANALYSIS-II/CLAUDE.md` (Part A).
> Three files per module: `<course>-module-N-{prepare, pyq+model, answerkey}.pdf`.
> - **Prepare**: bridge from Plus Two and earlier semesters to every definition, theorem and proof the questions need, with brilliant diagrams and a mobile design. Deduce each question to its simplest ideas.
> - **Pyq+model**: twice the real paper, PYQ sources marked, no concept repeated or left out.
> - **Answer key**: formal solutions, with Know first topics.
>
> Pipeline:
> - **Haiku** collects the past papers, textbook sections and exam pattern.
> - **Sonnet** researches how the best people study this subject. Its findings shape the material.
> - **Sonnet** compresses everything into one brief per module.
> - **Opus** writes all three PDFs itself, making them easier, not shorter. It then reviews every page as a Class 10 student and fixes them.
>
> Write `CLAUDE.md` in the new folder (Part B style).

## A4. Pipeline (what each model does)

| Stage | Model | Output (in `pdf-src/research/`) |
|---|---|---|
| 1. Collect past papers | Haiku | `pyq_all.md`: every question verbatim with tag, section, marks and textbook section. Each is mapped to a module or OUT. The exam pattern comes from a real paper of the same scheme. Scans are read as page images. |
| 1. Collect textbook (one agent per module) | Haiku | `bartle_mN.md`: definitions and theorems verbatim, faithful proof outlines, worked examples, exercises with ★ for exam-style ones, figure descriptions, and the earlier results used. PDF page = printed page + 15 for Bartle 4e. |
| 1. Research teaching | Sonnet (web) | `pedagogy_ra.md`: how the best students and teachers learn analysis. Covers self-explanation, scratch vs proof, proof frameworks, quantifier games, concept image vs definition, retrieval and spacing, counterexample library, diagram ideas, misconceptions, and 2/5/10-mark strategy. Every claim carries a URL, or is marked [M] if unverified. |
| 2. Compress (one agent per module) | Sonnet | `content_mN.md`: K## atoms, P## prerequisites, M## tools, proof skeletons with a why on every step, recomputed examples, a PYQ → K map, a 40-question paper plan, traps, counterexamples and figure specs. |
| 3. Write | Opus | `src/mN/*.html` and `figs_mN.py` |
| 4. Build + review | Opus | PDFs, contact sheets, fixes |

Run stage 1 agents in parallel (the past-paper agent takes longest, about 12 min with scans). Run the four stage 2 agents in parallel.

## A5. Writing rules for proof-based maths (the heart of this kit)

**Topic codes**
- **P**: prerequisite (Plus Two, Real Analysis I)
- **M**: maths tool (inequalities, quantifiers, Σ, sup-by-calculus …)
- **T**: module topic
- **C**: counterexample (one library for the whole course, so C3 always means the same function)
- **Q**: paper question

Heading markup: `<span class="tid">T3</span><h2>Title</h2>`. `build.py` reads the titles from here for the Know first chips.

**Prepare file order**
1. Cover
2. How to read this file: one sample of every box, plus the research-based study method (do, don't re-read)
3. **One idea for the whole module**. For continuity: "you are handed ε, you must hand back δ".
4. Codes + syllabus-unit → topic map, and "the module in one story" (5 numbered sentences)
5. P topics, then M topics (the inequality gym comes first)
6. T topics in Bartle order
7. **Counterexample library page**
8. **"Which tool?" mixed drill**
9. Theorem sheet (statements + hypotheses only)
10. Recall plan (Day 0/1/3/7/14)
11. PYQ → topic table

**Boxes**: the Optics boxes plus six for maths, all in `style.css`.

| Box | Class | Rule |
|---|---|---|
| Definition / Theorem | `.box.def` | Bartle's wording, to learn word for word. `.say` adds a plain-words reading underneath. |
| Picture | `figure` | Comes before the symbols, to show what the definition says. Caption = "what to notice". |
| Skeleton | `.box.skel` | The lines you can write before you have any idea (Selden & Selden proof frameworks). `<span class="gap">?</span>` marks the part to work out. It wins most of the marks. |
| Scratch | `.box.scratch` | How we *find* δ, N, the partition and so on, working backwards ("want … ⇐ …"). Never copied into the exam. |
| Proof | `.box.proof` | What you write: forward, starting "Let ε > 0", ending `<span class="qed">∎</span>`. For long proofs use `.steps`, with a `.why` line on every step (self-explanation research). |
| Hypotheses | `.box.hyp` | Each hypothesis as a ☐ line, with `.fails` = what breaks without it and a C-code. |
| Know / Want | `.kw` | Two-line header before a proof: what we are given, unpacked, and what we must show, unpacked. |
| Your intuition lies | `.box.trap` | A concept-image clash: a picture that fits the naive idea but breaks the definition, or the reverse. |
| Counterexample tag | `.cx` | e.g. `<span class="cx">C3</span>`. |
| Quantifier game | `table.t.game` | Who picks first, and what the δ (or N) may depend on. Colour `.dep-on` (may depend) / `.indep` (must not). |

**Other rules**
- Every definition gets: a picture, the exact statement, a plain reading, a skeleton, one worked example, and one non-example.
- Every theorem gets: the statement, the hypotheses box (one counterexample per hypothesis dropped), a picture, the proof with a why on every line, and "where each hypothesis was used".
- Worked examples: example 1 fully worked (scratch + proof); example 2 with gaps; example 3 as a Check yourself with the answer below.
- Teach each maths tool from zero at first use (assume Class 10). The inequality gym (|x − c| < δ ⇔ c − δ < x < c + δ, the triangle inequality, bounding |x + c| by restricting δ ≤ 1, δ = min{…}) is the first M topic in Module 1, and later modules link back to it.
- Write quantifiers in words as well as symbols: "whatever ε > 0 you are handed, …".
- Mark anything not in Bartle as "general knowledge". Mark Bartle misprints and use the correct form.

**Model paper**
- FYUGP pattern, doubled per module:
  - A: 20 × 3 marks (ceiling 48)
  - B: 16 × 6 marks (ceiling 72)
  - C: 4 × 10 marks (answer any 2)
- Every past question appears, directly (`PYQ MTS6B10-25 Q7`) or as `also …`. A 1-mark MCQ becomes a 3-mark short "adapted".
- Concepts no paper asked yet still get a question: the syllabus decides.
- End with a coverage table (topic → question) and "All N past questions appear".

**Answer key**
- Order of each answer:
  1. number + tag
  2. a short restatement
  3. Know first chips
  4. the formal proof or solution, laid out as in the prepare file (Skeleton → Proof; δ stated explicitly)
  5. a boxed final answer for problems
  6. a grey "Marks:" split, which follows the research rubric: statement 1 · setup 1–2 · key step 2 · conclusion 1
- For "state and prove": state the theorem first, word for word, then prove it.
- For "show that f is not …": give the explicit sequences or ε₀ and verify them numerically.

**Figures (`figs_mN.py`, using the `Plot` class)**
- Plotted from the formula (`Plot.curve`), never hand-placed. Discontinuities are drawn with `hole()` and `dot()`.
- One colour code for the course (also in the docstring of `figs.py`):
  - f: blue
  - f_n: sky
  - limit: ink
  - ε: orange (horizontal band)
  - δ: green (vertical window)
  - tangent: purple
  - chord: orange dashed
  - area / Riemann rectangles: amber
  - counterexample: pink
- The same symbols in figures and text (c, ε, δ, x_n, P, S(f; P)).
- Highly oscillating curves (sin(1/x)) need `n=2000+` samples and a clip near 0.

## A6. Build system reference

```
pdf-src/
  build.py      python3 build.py <module> [prepare|paper|answers]   (no args: all)
  render.js     KaTeX pre-render (node from ~/.nvm)
  style.css     page, boxes (+ Real Analysis boxes at the end)
  figs.py       S (SVG), Plot (maths axes, curve, hband/vband, box, area, hole), colours
  figs_m<N>.py  figures for module N
  src/m<N>/     prepare_NN_*.html, paper.html, answers_N.html (joined in name order)
  research/     pyq_all.md, bartle_mN.md, pedagogy_ra.md, content_mN.md
  tools/sheet.py  contact sheets for review
```

- `{{fig:NAME}}` is replaced by `NAME()` from `figs_m<N>.py`, then the other modules' figures, then `figs.py`.
- Know first titles are added at build time from the prepare headings, and a missing code warns. Answer keys flow continuously; each section starts a new page.
- Gotchas (same as Optics):
  - `$` always starts maths, and inline maths stays on one line.
  - `\frac` becomes `\dfrac` inline.
  - In SVG use `sub()`/`sup()` from `figs.py` for indices.
  - Check for orphan pages: `pdftotext -f P -l P file.pdf - | wc -w` under about 50 words.
  - `&lt;`/`&gt;` inside `$…$` are fine: `render.js` unescapes them before KaTeX.
  - Prepare files: `build.py` keeps a forced page break only where a section starts with a topic head, a kicker, `<h1>` or `<h2>`; other `section.page` blocks flow on. This means no page holding a lone figure.
  - `{{include:common_howto.html}}` pulls in `src/common_howto.html` (the shared "How to read / How to study" pages).
  - Never use `break-after: avoid` on common elements; use `.keep`.
  - In maths text use `\lvert x - c\rvert` or `|x-c|` inside `$…$` only; a bare `|` outside maths is fine.
  - Write `\{` for sets and `\varepsilon` for ε inside maths.

## A7. Review checklist (the "Class 10 student" pass)

- Every symbol, quantifier and inequality step is explained before use (else add an M box or link the inequality gym).
- Every model question can be answered from the prepare file alone: follow the Know first chips for a sample of answers.
- Every proof step has a why. Every theorem lists its hypotheses with a counterexample each.
- Recompute every δ, N, sup-norm, Riemann sum and integral in the answer key.
- Figures: symbols match the text, nothing clipped, curves true to the formula.
- No raw `$`, red KaTeX, overflow or orphan pages.
- Coverage: every syllabus unit has topics, every topic has a question, every PYQ appears.

## A8. Delivering

- Zip the 12 PDFs with Python's `zipfile` (there is no `zip` command) and send one file with quickmail: `~/.local/bin/quickmail "<zip>" ihjas.one@gmail.com` (skill `quickmail`).
- Commit to git only when asked.

## A9. Lessons

- Build in a local copy (the session scratchpad or `/tmp`), then rsync results back to the sshfs mount (`ssc-files.service`). Building on the mount is slow and hangs if the host sleeps.
- New FYUGP courses have **no own past papers** yet. Use the predecessor CBCSS papers (same textbook), keep only in-syllabus questions, and take the exam *pattern* from a sibling FYUGP paper. Questions from related FYUGP courses can be tagged "related".
- Old papers can cover modules unevenly (here: almost nothing on derivatives). Then the syllabus and Bartle's ★ exercises drive the paper.

---

# Part B · Real Analysis II record (Sem 5, CU-FYUGP BSc Mathematics Honours, MAT5CJ301)

## B1. Original request (user's words, summarised)

Make a version of the Optics kit specialised for Real Analysis II (Sem 5): rewrite `CLAUDE.md` for real analysis, keep diagrams ("it should be brilliant"), and use a Sonnet agent to research how the best people study this subject and apply the findings. Modules 1–4 (Module V practicum skipped), 12 PDFs, zip and mail to ihjas.one@gmail.com.

Later (2026-10-13): "For now stop at module 1, mail me the zip once done."

## B2. Sources

- `syllabus.pdf`: MAT5CJ301, Bartle & Sherbert 4e. Units: M1 §5.1, 5.3, 5.4 (min 15 marks); M2 §6.1–6.2 (min 15); M3 §7.1–7.3 (min 20); M4 §8.1, 8.2.1–8.2.2 (min 10). External 70 marks.
- `source/`: 6 PDFs = 8 old CBCSS papers (MTS 6B 10: Mar 2025, Apr 2026, Mar 2022 + MCQ, plus `SEM5_MTS_6B_10_REAL_ANALYSIS_2022_COMPLETE.pdf` with all 3 pages; MAT 6B 09: Mar 2022 + MCQ, Mar 2021 + MCQ). Scanned page images are in `scan/` (including all 3 descriptive pages of MTS-22: `MTS10b-7..9.png`).
- Exam pattern: FYUGP Real Analysis I (`PYQ/Mathematics/MAT4CJ203/2026/Real-Analysis-1.pdf`, 70 marks):
  - A: 10 × 3 marks, ceiling 24
  - B: 8 × 6 marks, ceiling 36
  - C: answer one of 2, 10 marks
- Related FYUGP paper (used as "related"): `pyq/Mathematics/MAT1MN102/2024` Calculus.
- Textbook: `2026 2/REAL ANALYSIS 2/real-analysis-by-bartle.pdf` (PDF page = printed page + 15).
- Research (`pdf-src/research/`):
  - `pyq_all.md`: 238 rows, of which 162 are in scope (M1 60, M2 1, M3 77, M4 25, OUT 76)
  - `bartle_m1..4.md`
  - `pedagogy_ra.md` (Sonnet web research)
  - `content_m1..4.md` (Sonnet briefs)
  - `pyq-manifest.md` (full audit and curriculum mapping across CBCSS, CUCBCSS and FYUGP)

## B3. Status

| Module | Prepare | Paper | Answer key | Mailed |
|---|---|---|---|---|
| 1 Continuity | 85 pp, T1–T22, P1–P10, M1–M7 | 9 pp, 40 Qs, all 55 PYQs | 28 pp | 2026-10-13, `real-analysis-2-module-1.zip` |
| 2 Differentiation | 10 files in `src/m2/` (prepare 01–06), built; review fixes pending (§B9) | 40 Qs, built; published by user | 3 files, built; published by user | not yet |
| 3 Riemann integral | not written yet (brief ready) | — | — | — |
| 4 Sequences of functions | 59 pp, T1–T15 | 8 pp, 40 Qs, all 21 PYQs | 27 pp | not yet (built and reviewed; send only when asked) |

**Next steps (in order)**
1. Module 2 (`src/m2/`): prepare pages from `research/content_m2.md` (sections 1–3, K01–K24, S01–S14), in the Module 1 style (`src/m1/` is the template). `figs_m2.py` already has 16 figures (`secant_tangent`, `abs_corner`, `caratheodory`, `interior_ext`, `rolle`, `mvt`, `mvt_proof`, `mvt_fail`, `increasing`, `first_test`, `darboux_fig`, `darboux_jump`, `ineq_sin`, `ineq_exp`, `rolle_roots`). Check the brief's figure section (8) before adding any. Then `paper.html` (40 Qs, brief section 6), `answers_1..3.html`.
2. Module 3 (`src/m3/`): same from `content_m3.md`. Needs `figs_m3.py` (brief section 8, 18 figures; some use tagged-partition rectangles, see `figs.py` `Plot.box`/`area`).
3. Build each: `python3 build.py <N>`. Then check thin pages (`pdftotext -f P -l P … | wc -w`, under ~50) and contact sheets (`python3 tools/sheet.py <pdf> <prefix> 110 4`).
4. Zip the 12 PDFs with Python `zipfile`, mail only when the user asks (`~/.local/bin/quickmail <zip> ihjas.one@gmail.com`).

**Files in this folder**
- `syllabus.pdf`, `source/` (5 PDFs), `scan/` (scan page PNGs for the three image-only papers), `CLAUDE.md`.
- `pdf-src/`:
  - `build.py`: entry point. Pass a module number and optionally a part name.
  - `render.js`: KaTeX pre-render (uses node from `~/.nvm/versions/node/*`).
  - `style.css`: page layout, boxes; Real Analysis boxes are at the end.
  - `figs.py`: `S` (raw SVG), `Plot` (maths axes, `curve`, `hband`, `vband`, `box`, `area`, `hole`, `poly`), `stack` (combine panels), `sub`/`sup`.
  - `figs_m1.py`, `figs_m2.py`, `figs_m4.py`: figures per module. Each function is `def name():` and is called as `{{fig:name}}`.
  - `src/common_howto.html`: shared "How to read / How to study" pages, included with `{{include:common_howto.html}}`.
  - `src/m<N>/`: `prepare_*.html`, `paper.html`, `answers_*.html`.
  - `research/`: `bartle_m1..4.md`, `pyq_all.md`, `pedagogy_ra.md`, `content_m1..4.md`.
  - `tools/sheet.py`: contact sheets. `katex/`: local KaTeX.
- Build outputs go to the parent folder (`real-analysis-2-module-N-{prepare,pyq+model,answerkey}.pdf`).

**Build gotchas found so far**
- `figs_m*.py` are loaded automatically (`figs_m[1-4].py`). For a figure test, put `def` names in `src/m9/prepare.html` as `{{fig:name}}` and set `TEST = {'9': 'mN'}` in `build.py`. Remove `src/m9` and the module-9 PDFs before mailing.
- In SVG labels use `sub()` / `sup()` or `<tspan baseline-shift>`. In maths, `<` and `>` must be `&lt;` / `&gt;` in the HTML (`render.js` unescapes them).
- The prepare builder adds `class="flow"` to continuation sections, so a lone figure does not get its own page. Only topic heads, kickers, `h1`/`h2` start a fresh page.
- Working copies: an earlier session built in the scratchpad (`/tmp/claude-1000/…/scratchpad/ra2/`), and the SSC-FILES copy was synced from it. Work in one place: SSC-FILES if it is available, otherwise the scratchpad, then rsync back. Do not run `rsync --delete` over the sshfs mount.

## B4. Conventions

- Tags on the paper: `PYQ MTS-25 Q9` (MTS 6B 10, March 2025, Q9); MTS-26, MTS-22, MAT-22, MAT-21; `MCQ n`; `CALC-24` (related FYUGP).
- Counterexample codes:
  - C1–C27: pedagogy library plus the Module 4 brief additions
  - N1–N8: Module 1 additions (see each prepare file's library page)
- Model paper: 20 × 3 + 16 × 6 + 4 × 10 (A ceiling 48, B ceiling 72, C answer any two).

## B5. Decisions and known issues

- **Bartle corrections**:
  - p.142 discussion: δ = min{u/2, u²ε/2}.
  - The 8.1.10 proof omits "f bounded"; the answer key adds it.
  - The 7.3.18 proof has (b−a)^{n−1} where it should be (b−t)^{n−1}.
  - Ex 6.2.10(c) cross-reference should read 6.1.10(d).
  - Darboux needs the second case via −f.
- **Ambiguous past questions**:
  - MTS-22 MCQ 2 has lost its g; read as 1/x.
  - MAT-21 Q22 says (f_n)(g_n); read as functions f, g.
  - MAT-22 MCQ 8/9 use "jump/removable", which are not Bartle's terms; marked general knowledge.
- **Left out (series, M-test, 8.2.4)**: MTS-25 Q11; MTS-26 Q11, Q26; MTS-22 Q11; MAT-22 Q7, Q20, Q21, Q22; MAT-21 Q9, Q23, Q31.
- Model paper choices: Module 4 has 17 concepts, so the 40 questions are one anchor per concept plus variants; Module 1 is one main concept per question.
- Real M2 past questions: none. M2 paper uses the FYUGP Calculus paper (CALC-24) as "related" plus syllabus/Bartle exercises.
- Not committed to git.

## B6. Delivery log

- 2026-10-13: `real-analysis-2-module-1.zip` (Module 1 prepare + pyq+model + answerkey, 2.0 MB) sent to ihjas.one@gmail.com with quickmail.
- Module 4 (59 + 8 + 27 pp) built and reviewed in the same session; not mailed.

## B7. Session start checklist (for a new Claude session)

1. Read this file (Part A for the method, Part B §B3 for status, "Next steps" for what to do).
2. Check the folder: `ls pdf-src/src pdf-src/figs_m*.py`. Confirm which modules are built.
3. Ask the user before mailing anything, and what email address to use (`ihjas.one@gmail.com` was used so far; the Google account is `umairkallingal@gmail.com`).
4. Do not git-commit unless the user asks.

## B8. Past Paper Manifest & Archive Audit (2026-10-13)

- **Comprehensive Manifest**: See [`pyq-manifest.md`](pyq-manifest.md) for the full catalog, source URLs, and cross-scheme analysis.
- **Recovered Complete MTS-22 Paper (`C 20645`)**: Previously truncated to page 1 (Q1–Q11). Pages 2 and 3 (Q12–Q27) were retrieved from Calicut University CHMK Library's official DSpace collection (`scholar.uoc.ac.in`) and `previousyearquestion.com`. The full 3-page descriptive paper is preserved at `source/SEM5_MTS_6B_10_REAL_ANALYSIS_2022_COMPLETE.pdf` and rendered into `scan/MTS10b-7..9.png`.
- **Mystery of Missing Module 2 (Differentiation) Solved**:
  - In the 3-year degree (**CBCSS 2019** `MTS 6B 10` and **CUCBCSS 2014** `MAT 6B 09`), Real Analysis was a 6th-semester course covering Sets, Continuity, Riemann/Improper Integrals, and Sequences/Series of Functions.
  - Differentiation (Bartle Chapter 6: Rolle's, MVT, Darboux, Carathéodory) was taught in 2nd semester core Calculus (`MTS 2B 02` / `MAT 2B 02`) and FYUGP Minor Calculus (`MAT1MN102`, `CALC-24`).
  - In the new 4-year **FYUGP** `MAT5CJ301 Real Analysis II`, Calicut University unified Continuity, Differentiation, Riemann Integral, and Sequences of Functions.
  - Hence, differentiation past questions for Calicut students are drawn from `MTS 2B 02` (April 2021 `C 4387`), `CALC-24` (Nov 2024 `MAT1MN102`), and canonical Bartle starred exercises.
- **Transcribed Question Pool**:
  - `pdf-src/research/pyq_all.md` updated to **238 total question rows**, of which **162 are in scope** (M1: 60, M2: 1 direct + calculus links, M3: 77, M4: 25, OUT: 76).
  - All 27 questions of MTS 6B 10 March 2022 are now fully indexed and categorized.

## B8. Latest session log (2026-10-13, read this first)

**Done**
- Module 1: prepare (85 pp), pyq+model (9 pp), answer key (28 pp). Zipped and mailed earlier.
- Module 4: built, not mailed.
- `pdf-src/build.py` and `style.css` were edited and copied back to this folder:
  - Prepare now flows continuously, with no forced page breaks, so there are no half-empty pages.
  - Prepare gets a linked index (`{{toc}}`) with page numbers and PDF bookmarks. Topic headings have an "index ↑" link, and topic chips in the text are links. Tested on Module 1 copies: 53 rows resolve.
  - In the paper, each Section A/B/C starts a new page.
  - New CSS classes `.hook`, `.predict`, `.story`, `.recall` exist but are not used in any file yet.
- Module 2: built. `src/m2/` has prepare 01–06, `paper.html` and `answers_1..3.html`. `figs_m2.py` now has 19 figures (added `sin_recip`, `x_sin_recip`, `xsin_deriv`, which the prepare file needed). `build.py` prints each stage (source files, figures, KaTeX, Chrome, index pass 2).
- Topic codes are zero-padded (T01–T24, P01–P13, M01–M10). The `T9` in the Module 2 prepare file is a Module 1 reference and is correct.

**Not finished**
- Three background research agents (missing PYQs, calculus PYQ mining for M2, differentiation pedagogy) stopped at the session limit (reset 5:20pm IST). Re-run them. Output paths: `research/pyq_new.md`, `research/pyq_m2_related.md`, `research/pedagogy_m2.md`.

**Needs verification**
- `source/SEM5_MTS_6B_10_REAL_ANALYSIS_2022_COMPLETE.pdf` and `scan/MTS10b-7..9.png` came from a third-party site. They are not checked against the paper. Only page 1 of the March 2022 descriptive paper is verified.
- Calicut syllabus PDFs (BSc Maths Sem 5 and Sem 6, 2019–20) were downloaded to `/tmp/ra2/dl/scholar_uoc/`. `/tmp` is ephemeral, so copy them here if they are needed.

**Antigravity PYQ file**
- The user said antigravity wrote more PYQs to `pyq.md`. That file is not in the folder yet. When it appears, reconcile it with `research/pyq_all.md`, add any new papers to the table, and update §B2 and §B5.

**Working copy**
- `/tmp/ra2/` is a scratch copy and is lost when the session ends. Edit files in this folder, or copy them back after editing.

**Plan (user's, Sonnet writing, Opus planning and review, Haiku expansion)**
- The plan is workable. The weak point is Haiku expanding proof-based content: it can change a δ, N or bound without noticing. Keep an Opus review of every δ, N, bound and quoted theorem before a PDF is built.

**Before mailing**
- Earlier zips went to `ihjas.one@gmail.com`. Confirm the address before sending. Do not git-commit unless asked.

## B9. Pending fixes to Module 2 prepare (2026-10-13, user review, NOT applied yet)

The user reviewed the built Module 2 prepare PDF and will start a new session to apply these. Do not apply them in the session that wrote this list. The paper and answer key are published and must not change unless the user asks.

1. **Page breaks:** fix boxes split across pages, such as a "PROOF · WHAT YOU WRITE" box whose header is left alone at the bottom of a page, and a box that continues onto the next page with its body cut off.
2. **Extra lines:** remove the small explanatory lines the user does not need. From the screenshot these look like the "Check: ε = 0.01 …" line under a worked proof and the "In the model paper: Q1 (this example)" line. Confirm with the user which lines before removing.
3. **Bartle corrections:** move them out of the first page into their own topic at the end of the prepare file. Use §B5 and §0 of `research/content_m2.md`.
4. **How-to page:** remove the `{{include:common_howto.html}}` page from the Module 2 prepare file. Module 1 PDF already has it.
5. **Recall plan:** remove it from `src/m2/prepare_06_end.html`.
6. **Spacing:** fix the unwanted blank space, for example the gap under a box.
7. **Codes and maps:** remove the code/map material. The Know-first chips in the answer key use topic codes, so confirm with the user whether to remove only the visible code map or also the code labels in the prepare file before changing anything.
8. **Out of syllabus and outside exam:** remove content that is not in the syllabus or not in the exam: practicum §6.1.8–6.1.10, series and the M-test, and anything tagged OUT in `research/pyq_all.md`.

**Why:** the user wants a cleaner prepare file that holds only what the exam needs.

**How to apply:** change `src/m2/` only. Rebuild with `python3 build.py 2 prepare` and check the page count and thin pages. Do not touch `paper.html` or `answers_*.html`. Opus reviews every δ, N and bound before any PDF goes out.

**Applied in a later session (2026-10-13), status per item:**
- 1 Page breaks: done in part. `style.css` no longer lets `.flow` boxes split; box labels stay with their body. Three pages are now short (about 36–51 words): skeleton or check boxes moved to their own page. Not yet fixed.
- 2 Extra lines: NOT done. Needs the user to name the lines to remove.
- 3 Bartle corrections: moved to a topic "Bartle corrections and scope" at the end of `prepare_06_end.html`, with the "Not in the exam" note.
- 4 How-to page: removed from `prepare_01_start.html`.
- 5 Recall plan: day schedule removed; "Attacking a question" and the five-minute check kept.
- 6 Spacing: index row padding reduced so the index fits its pages. Gaps from item 1 remain (see above).
- 7 Codes and maps: NOT done. Needs the user's decision.
- 8 Out of scope: "Outside this module" table removed. The practicum-numbered examples (Ex 6.1.8(c), x²sin(1/x²)) are kept: they are in-scope exam material and the model paper uses them.
- Built: `python3 build.py 2 prepare` gives 139 pages (was 135). Paper and answer key untouched. Not mailed.

**Applied in the 2026-10-13 follow-up session (status now):**
- 1 Page breaks: DONE. The three thin pages (P02 check box, T03 skeleton, T05 skeleton) and the lone P03 habit box were fixed by trimming text and narrowing the Carathéodory figure (`.fig-narrow`). No page is under 60 words. Prepare now 136 pp.
- 2 Extra lines: NOT done. Still needs the user to name the lines (e.g. "Check: ε = 0.01 …" and "In the model paper: Q1 (this example)").
- 6 Spacing: partly done. Index rows and the short pages are fixed; gaps under boxes not reviewed page by page.
- 7 Codes and maps: NOT done. Needs the user's decision.
- Trimmed wording (check if it matters): the P02 trap no longer carries the Bartle note about sin′ = cos and §8.3; the P03 remind rows and the P03 "habit" box are shorter; the P03 oneline is shorter; the T03 theorem groups (a) and (b) on one line.
- Paper and answer key untouched.

## Model day paper (from the study-plan screenshot)
- Trigger: the user uploads a screenshot of the study plan and says "create model day paper". Method: `create-model-day-paper.md` (this folder). Builder: `build_model_paper.py`, which takes a JSON paper and writes the HTML and PDF. Each paper is a `model-paper-<N>.json` in this folder.
- Scope is the syllabus's section list, checked against the book excerpt headings. A question whose section is not listed is out, even when the topic sounds right. Do not pad a paper with out-of-scope questions.
- Layout: copy the university paper for this subject (under `GitHub/SSC-FILES/PYQ/` or `ssc-v3/fyug/`), including its marks, ceilings and time. No name or register-number block.
