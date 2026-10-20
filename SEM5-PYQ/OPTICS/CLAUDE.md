# Study-PDF kit (built for Optics, Sem 5; reusable for any subject)

This folder turns a syllabus, past papers (PYQs) and a textbook into **three phone-sized PDFs per module**. Part A explains how to do it again for another subject. Part B is the record for Optics.

Part A was synced on 2026-10-13 with `../REAL-ANALYSIS-II/CLAUDE.md`, the newer maths version of this kit. Rules that come from the maths kit are tagged **[maths kit]**. The Optics kit in `pdf-src/` does not have those features yet (see B7), so do not assume they exist here until they are added.

---

# Part A · How to make the same for another subject

## A1. What you get

For each module N of a subject:

| File | What it is | Who it is for |
|---|---|---|
| `<subject>-module-N-prepare.pdf` | Every idea needed to answer the paper, starting from Plus One / Plus Two. Each question is broken down to its simplest topics, each topic is explained with diagrams, worked steps and a self-check. | Learn |
| `<subject>-module-N-pyq+model.pdf` | A model paper with **twice** the questions of a real exam. Every past question appears (tagged with its year and number). Every syllabus concept is the main point of exactly one question: none missing, none repeated. | Practise |
| `<subject>-module-N-answerkey.pdf` | A formal exam answer for every question. Each starts with **Know first**: the prepare topics (code + title) to revise before reading the answer. | Check |

Design: 100 × 200 mm pages (one phone screen), large type, coloured boxes, no wide tables.

## A2. Step by step

1. **Make a folder** for the subject, e.g. `SEM5-PYQ/CHEMISTRY/`. Put in it:
   - `syllabus.pdf`
   - `source/`: all past papers (scans are fine)
   - the textbook PDF, or the path to it
2. **Copy the kit**: copy `OPTICS/pdf-src/` to the new folder, then delete `src/m*/`, `figs_m*.py`, `build/` and `research/*` (they are Optics content). Keep `build.py`, `render.js`, `style.css`, `katex/`, `tools/sheet.py`, and from `figs.py` only the `S` class, `fig`, `legend` and the colour constants. The rest are Optics figures and can go. [maths kit] The maths `figs.py` also keeps a generic `Plot` class (maths axes, curves, bands), which Optics does not have.
3. In `build.py`, change the output name `optics-module-…` to the new subject. Change the module list in `ALLFIGS` to the new `figs_m*.py` files. [maths kit] The maths build finds `figs_m[1-4].py` automatically, which is simpler.
4. **Give Claude the prompt in A3**, from inside the new folder.
5. Check the result yourself on a phone. Ask for fixes the same way ("the figure on page 12 is unclear").
6. Ask Claude to zip the PDFs and send them when you are happy (A8).

## A3. The prompt (copy, fill the brackets)

> In `<folder>` I have the syllabus, past papers in `source/` and the textbook `<book>`. Make study PDFs for `<subject>`, modules `<1–4>`, using the kit in `pdf-src/` and the method in `OPTICS/CLAUDE.md` (Part A).
>
> 1. My PYQ + model questions must cover every topic in each module.
> 2. Three files per module: `<subject>-module-N-{prepare, pyq+model, answerkey}.pdf`.
>    - **Prepare**: everything needed to bridge from Plus One / Plus Two (with "remind me" notes) to the concepts each question needs, with good diagrams, a very understandable design, for mobile. Deduce every question to its simplest topics and explain those.
>    - **Pyq+model**: a model paper with the PYQ source marked, not repeating a single concept and not ignoring a single concept, twice as many questions as a regular paper (with choices).
>    - **Answer key**: a formal solution for each question, with the prepare topics (code and title) the student must know first.
> 3. Pipeline: Haiku collects the past papers, textbook sections and exam pattern. Sonnet researches how the best people study this subject and compresses everything into one brief per module. Opus writes all three PDFs itself, making the content easier, not shorter.
> 4. Then Opus reviews every page acting as a student who never went above Class 10, checks that student could answer every question from the files alone, and fixes the content and design.
> 5. Save every research output as a file in `research/` as soon as it is done, not only in chat. Write `CLAUDE.md` in the new folder as you go (Part B style).

## A4. The pipeline in detail

| Stage | Model | Output (in `pdf-src/research/`) |
|---|---|---|
| 1. Collect past papers | Haiku | `pyq_all.md`: every question verbatim, with year, number, marks, section, a one-line topic, and its module (or OUT). The exam pattern comes from a real paper of the same scheme. Scans are read as images. |
| 1. Collect syllabus | Haiku | Modules, units, hours, marks and the textbook sections each unit uses. |
| 1. Collect textbook (one agent per module) | Haiku | `textbook_mN.md`: definitions, derivations, worked examples, end-of-chapter problems, figure descriptions, and the earlier results used. Note any page offset between the PDF and the printed book. |
| 1. Collect Plus One / Plus Two (NCERT) | Haiku | The prerequisite facts each module assumes, with chapter numbers. |
| 1. Research teaching | Sonnet (web) | `pedagogy.md`: how the best students and teachers learn this subject and its maths. Every claim carries a URL, or is marked [M] if unverified. |
| 2. Compress (one agent per module) | Sonnet | `content_mN.md`: `K##` atomic concepts (name, key equation, book section, prerequisites), `P##` prerequisites, `M##` maths tools, derivation skeletons, recomputed examples, a PYQ → K map, a 40-question paper plan, student traps, figure specs. |
| 3. Write | Opus | `src/mN/*.html` and `figs_mN.py` |
| 4. Build + review | Opus | PDFs, contact sheets, fixes |

- Run the stage 1 agents in parallel (the past-paper agent takes longest, about 12 minutes with scans). Run the stage 2 agents in parallel.
- Haiku collects and Sonnet compresses. **Opus recomputes every number, bound and derivation step** before any PDF goes out. A collection or expansion agent can change a value without noticing.
- [maths kit] Stage 2 briefs use zero-padded codes (`K01`…`K24`, `P01`…, `M01`…), so the codes sort and read the same everywhere.

## A5. Writing rules (what makes the files work)

**Prepare file**
- Order:
  1. cover
  2. "How to read this file" (one sample of each box, plus the study method: do the steps, don't re-read)
  3. **one rule for the whole module** (the single idea every question uses)
  4. codes + syllabus-unit → topic map
  5. "the whole module in one story" (5 numbered sentences)
  6. P topics (Plus One/Two bridge)
  7. M topics (maths tools)
  8. T topics in syllabus order
  9. formula sheet
  10. PYQ → topic table
- Codes: **P** prerequisite, **M** maths tool, **T** module topic, **Q** paper question. A topic heading must be `<span class="tid">T3</span><h2>Title</h2>`: the answer key reads titles from there.
- One topic = one small idea. Start with a one-line purpose and the PYQs that ask it. Then the boxes:
  - **Remind me**: Plus One/Two facts
  - **Maths tool**: maths, taught at first use
  - **The idea**: physics in plain words, before symbols
  - **Result**: what to write in the exam
  - **Exam trap**: a common mistake
  - **Check yourself**: question with the answer printed below
- Every derivation is numbered steps; **every step has a "why" line**.
- Teach every maths tool from zero the first time it is needed (assume Class 10 maths).
- Put a worked numerical (usually the PYQ itself) inside the topic.
- Mark anything not from the textbook as "general knowledge" or "Book 2". Mark textbook misprints and use the correct value.
- [maths kit] Each topic ends with the question numbers it supports.

**Model paper**
- Copy the latest real pattern and double it. (Optics: 12 short × 2 marks, 7 paragraph × 5, 2 essays × 10 out of 4 → 24 + 14 + 4.)
- Every past question appears: directly with `PYQ N25 Q3`, or as `also N22 Q14` under a question that asks the same thing. A 1-mark fill-in or True/False becomes a short answer marked "adapted".
- Concepts no past paper has asked yet still get a question (the syllabus decides, not the PYQs).
- End with a coverage table and "All N past questions appear".

**Answer key**
- Every answer contains, in this order:
  1. number
  2. PYQ tag
  3. a short restatement of the question
  4. Know first chips
  5. the formal answer (steps, a final boxed answer)
  6. a grey "Marks:" split. Write the split once per question type, as a rubric (e.g. for a 2-mark question: formula 1 · answer with unit 1). [maths kit]
- Solve the "also" past questions too, briefly, under the main one.
- If a past question is ambiguous, answer the most likely reading and note the other.

**Figures**
- Computed, not hand-drawn: geometry comes from the formulas, so it is correct by construction.
- Keep one fixed colour code for the whole subject, and write it in `figs.py`. Optics: blue incident / E-field, orange reflected, green refracted (O-ray in Module 4), grey dashed normals, pink images.
- **Use the same symbols in figures as in the text** (a figure saying y while the text says x confuses students).
- Check every SVG label for clipping at the figure edge.

## A6. Build system reference

```
pdf-src/
  build.py      python3 build.py <module> [prepare|paper|answers]   (no args: all modules)
  render.js     pre-renders $…$ and $$…$$ with KaTeX (Node)
  style.css     page size, boxes, steps, chips, paper and answer layouts
  figs.py       S class (SVG drawing), fig(), legend(), colours, shared figures
  figs_m<N>.py  figures for module N
  katex/        local KaTeX
  src/m<N>/     prepare_01_….html, paper.html, answers_1.html …  (parts joined in name order)
  src/m9/       figure test page (see below)
  tools/sheet.py  contact sheets for review
  research/     the compressed briefs used to write the content
  build/        generated HTML
```

- `{{fig:NAME}}` in HTML is replaced by the SVG from `NAME()` in the module's `figs_m<N>.py`, then the other `figs_m*.py`, then `figs.py`.
- **Know first titles** are added at build time: `build.py` reads `T#/P#/M#` titles from the module's prepare headings and shows each chip with its title. A missing code prints a warning.
- **Answer keys flow continuously**: at build time `build.py` turns each answer-key `section.page` into a plain section (no forced page), so pages never end with a stranded line. Each Section A/B/C still starts a new page, and every answer's number + question + Know first box is wrapped in `.keep` so it never splits. Prepare and paper keep their hand-placed `section.page` breaks.
- Output: Chrome headless prints `../<subject>-module-N-<file>.pdf` and prints the page count.
- **Figure test**: put `<p>name</p>{{fig:name}}` lines in `src/m9/prepare.html`, set `TEST = {'9': 'm<N>'}` in `build.py`, run `python3 build.py 9 prepare`, then delete the module-9 PDF.
- **Review sheets**: `python3 tools/sheet.py <pdf> <scratch>/name 95 6` writes PNGs, 6 pages each, to look at.
- **HTML building blocks** (all in `style.css`):
  `section.cover` · `section.page` (new page) · `.topic-head > .tid(.pre|.math) + h2` · `.oneline` · `.box.remind|maths|idea|result|trap|check|exam > .lab` · `.steps > .step > .why` · `.kv` (two-column list) · `table.t` · `.chip(.pre|.math|.q)` · `.q` / `.a` (check question / answer) · paper: `.qp-head`, `.section-head`, `.qq > .n + div > .meta > .src` · answers: `.ans-head`, `.need`, `.final`, `.marking` · `.keep` (do not split across pages).

**Gotchas**
- `$` always starts maths; inline maths must stay on one line. [maths kit] Inside maths, `\frac` is auto-turned into `\dfrac`.
- Underscores outside `$…$` print literally (`n_f`). In SVG labels use `<tspan baseline-shift="sub" font-size="75%">f</tspan>` (double quotes, since the Python strings use single quotes), or `sub()` / `sup()` where the kit has them.
- SVG text near the figure edge gets clipped; check every label.
- After adding text, check for **orphan pages** (a page with one line or one box). Quick check: `pdftotext -f P -l P file.pdf - | wc -w` for every page; under about 50 words means look at it. Fix by tightening text or moving a `section.page` break.
- Do **not** use `break-after: avoid` / `break-before: avoid` on common elements: Chrome then moves whole blocks to the next page and leaves half-empty pages. Use `.keep` (break-inside: avoid) on small groups instead.
- [maths kit] In maths text use `\lvert x - c\rvert` or `|x-c|` inside `$…$` only; a bare `|` outside maths is fine. Write `\{` for sets and `\varepsilon` for ε inside maths. In HTML, `&lt;`/`&gt;` inside `$…$` are fine: `render.js` unescapes them before KaTeX.
- [maths kit] Prepare builder: `build.py` keeps a forced page break only where a section starts with a topic head, a kicker, `<h1>` or `<h2>`; other `section.page` blocks flow on. This means no page holds a lone figure.

## A7. Review checklist (the "Class 10 student" pass)

Render every page (`tools/sheet.py`) and read it as a student who knows only Class 10:
- Is every symbol, unit and maths step explained before it is used? If not, add a Remind me or Maths tool box (or link to the topic that explains it).
- Can every model question be answered from the prepare file alone? Follow the Know first codes for a few answers and check.
- Do figure symbols match the text? Are labels clipped, overlapping or hidden by lines?
- Recompute every number in the answer key, check units, and check signs against the sign convention in B4.
- Any raw `_`, `$`, red KaTeX errors, overflowing boxes, orphan pages?
- Coverage: every syllabus unit has topics, every topic has a question, every PYQ appears.

## A8. Delivering

- Zip the PDFs with Python's `zipfile` (there is no `zip` command on this machine). Send one file with quickmail: `~/.local/bin/quickmail "<zip>" <address>` (skill `quickmail`).
- **Confirm the recipient address before sending.** Sending publishes the files outside this machine, so ask first. The address used so far is in B6.
- Commit to git only when asked.

## A9. Lessons

- **Working copy:** build in a local copy, not on the sshfs mount. Use the session scratchpad (or `/tmp` only if the user asks), then copy the changed files and PDFs back. Building over sshfs is slow (a module takes 1–2 minutes) and hangs if the mount drops. Do not `rsync --delete` over the mount. Fast and safe: `rsync -a pdf-src/ <scratch>/pdf-src/`, build there (all four answer keys in about 20 s), check, then copy back.
- **Sshfs:** if the host sleeps, files give I/O errors. Keep writing in a local folder, then copy over when it is back (the service `ssc-files.service` reconnects by itself).
- **Briefs:** keep them in `research/`, not `/tmp` (which is wiped). The brief (A4 stage 2) is what makes writing fast.
- **Long agents:** research agents can stop at the session limit. Save each output to its file as it finishes, and re-run only the stopped ones, naming their output path.
- **Textbook constructions** must be checked against the book, not memory. The cosine-law figure was first drawn with the wrong geometry.
- **New course with no own past papers** (common for new FYUGP courses): use the predecessor papers (same textbook), keep only in-syllabus questions, take the exam *pattern* from a sibling paper, and tag questions from related courses "related".
- **Uneven past papers** (one topic almost never asked): the syllabus and the textbook's exercises drive the paper.

---

# Part B · Optics record (Sem 5, CU-FYUGP BSc Physics Honours)

## B1. Original request (user's words)

> In SSC-FILES, I have saved optics pyq+model question, for module 1 sem 5.
> 1. I need to make sure my pyq + model questions cover every topic we have in each module.
> 2. We need three files per module, e.g. `optics-module-1-{prepare, pyq+model, answerkey}.pdf`.
>    i. Prepare file: everything needed to bridge from Plus One / Plus Two physics (plus notes like "remind me") and the concepts needed to answer each question, with good diagrams and a very understandable design, dedicated to mobile view. Refer to how the stellar map is made: deduce every question to its simplest topic and explain that.
>    ii. Pyq+model file: a model question paper with the source marked for PYQ, without repeating a single concept and without ignoring a single concept, twice as many questions as a regular exam paper (with choices).
>    iii. Answer key: a formal solution for each question, with a reference to which topics the student must know from the prepare file.
>
> Instructions: Haiku subagents collect data; Sonnet subagents compress it and research teaching; Opus writes all three PDFs itself; then Opus reviews each file as a kid who never went above class 10 and improves it.

Later requests: mail Module 1 (done); do Modules 2–4 (done); show topic titles with the Know first codes (done, all modules); zip Modules 1–4 and send as one file (done); make this file reusable for other subjects (done: Part A).

## B2. Sources

- `syllabus.pdf`: Module I geometrical optics, II interference (25 marks), III diffraction, IV polarisation.
- `source/`: Nov 2019, 2020, 2022 (scans, 80 marks), Nov 2024, 2025 (text, 60 marks).
- Textbook: Ghatak, *Optics* (`SSC-V2/SEM5/PHY/books/Optics by Ghatak.pdf`); extracts `module1_ref.md`, `ref1.pdf`.
- Concept map: `SSC-V4/optics/authoring/*.py` (the stellar map).
- Briefs: `pdf-src/research/` (`content_brief.md` = Module 1, `content_m2..4.md`, teaching briefs).

## B3. Status

| Module | Topic | Prepare | Paper | Answer key | Emailed |
|---|---|---|---|---|---|
| 1 | Fermat, spherical surfaces, thin lens | 87 pp | 8 pp, 42 Qs | 48 pp | see B6 |
| 2 | Interference | 78 pp | 10 pp, 42 Qs | 45 pp | see B6 |
| 3 | Diffraction | 44 pp | 8 pp, 42 Qs | 40 pp | see B6 |
| 4 | Polarisation | 53 pp | 8 pp, 42 Qs | 42 pp | see B6 |

All four were built and reviewed page by page. Every past question of each module appears in its paper.

## B4. Content conventions (keep consistent)

- Sign convention: Cartesian (Ghatak/NCERT), light left → right. Surface n₂/v − n₁/u = (n₂ − n₁)/R; lens 1/v − 1/u = 1/f; mirror 1/u + 1/v = 2/R; Newton x₁x₂ = −f².
- Figure colours: blue incident / E-field, orange reflected, green refracted (O-ray in Module 4), grey dashed normals, pink images.
- Units: Å = 10⁻¹⁰ m; wavelengths in metres in wave-plate and grating sums.
- Michelson (Module 2): Ghatak's convention, π at the beam splitter, dark 2d cos θ = mλ; the no-π convention is noted.

## B5. Decisions and known issues

- **Ambiguous past questions**:
  - M1 N25 Q13: u = −31.6 cm, other reading noted.
  - M2 N19 Q26: D = a + b = 110 cm, β = 0.0315 cm (0.0287 cm noted).
  - M2 N22 Q26: d = 2h, β = 0.221 mm.
  - M2 N20 Q26: first bright ring m = 0, giving 0.226 and 0.239 cm.
  - M3 N19 Q12 (loudspeaker): borderline.
- **Ghatak misprints**:
  - Ex. 14.10: 6.9 × 10⁻⁴ cm, not 6.7.
  - Eq. 22.54: E_z should be E_x.
  - Eq. 22.53: sign differs from the next line.
  - §22.6: the quartz "e-wave faster" sentence is wrong for a positive crystal.
  - §24.5: the reference "22.2.2" should be 22.3.2.
  - MgF₂ coating: about 1.4% for n = 1.5 glass (the book's 1.3% matches 1.52).
- **Not from Ghatak** (marked in the notes):
  - Nicol prism details, Laurent's half-shade, Huygens cases (Book 2)
  - Michelson straight and white-light fringes, the metre etalons, Haidinger vs Newton table (general knowledge)
- **Out of syllabus but included** (past papers ask them):
  - Airy pattern and resolution, Ghatak §18.3, 18.5
  - lens in water, power of a lens
- **Unverified**: the new FYUGP 70-mark pattern. The paper follows Nov 2024/2025 (12 + 7 + 2), doubled.
- **Not committed** to git.

## B6. Delivery log

- Module 1 PDFs mailed to ihjas.one@gmail.com (individually).
- 2026-10-12: `optics-sem5-modules-1-4.zip` (all 12 PDFs, 7.0 MB, answer keys with titled Know first boxes and flowing layout) sent to ihjas.one@gmail.com with quickmail. Python's `zipfile` was used (no `zip` command on this machine).

## B7. Session start checklist and open kit gaps (2026-10-13)

1. Read this file: Part A for the method, Part B §B3 for status, §B5 for known issues.
2. Check the folder: `ls pdf-src/src pdf-src/figs_m*.py` to see which modules are built.
3. Confirm the recipient address before mailing anything (see A8).
4. Do not git-commit unless the user asks.

**2026-10-13 update:** the prepare files now flow (`.flow` sections in `build.py` + `style.css`, divider line between topics, no forced page per topic). Module 1: 87 → 70 pp; Module 2: 78 → 57 pp; Module 3: 44 → 35 pp; Module 4: 53 → 44 pp. Only one thin page is left (M3 last page, the end of the PYQ table). Paper and answer keys are unchanged.

**Maths-kit features still missing from the Optics kit** (add when Optics needs them, then remove the [maths kit] tag from Part A):
- `Plot` class in `figs.py` (maths axes, curves, bands, `hole`/`dot`).
- Linked index `{{toc}}` with page numbers and PDF bookmarks.
- Zero-padded codes (`T01`, not `T1`).

## Model day paper (from the study-plan screenshot)
- Trigger: the user uploads a screenshot of the study plan and says "create model day paper". Method: `create-model-day-paper.md` (this folder). Builder: `build_model_paper.py`, which takes a JSON paper and writes the HTML and PDF. Each paper is a `model-paper-<N>.json` in this folder.
- Scope is the syllabus's section list, checked against the book excerpt headings. A question whose section is not listed is out, even when the topic sounds right. Do not pad a paper with out-of-scope questions.
- Layout: copy the university paper for this subject (under `GitHub/SSC-FILES/PYQ/` or `ssc-v3/fyug/`), including its marks, ceilings and time. No name or register-number block.
