# Study-PDF kit (built for Optics, Sem 5; reusable for any subject)

This folder turns a syllabus, past papers (PYQs) and a textbook into **three phone-sized PDFs per module**. Part A explains how to do it again for another subject. Part B is the record for Optics.

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
2. **Copy the kit**: copy `OPTICS/pdf-src/` to the new folder, then delete `src/m*/`, `figs_m*.py`, `build/` and `research/` (they are Optics content). Keep `build.py`, `render.js`, `style.css`, `figs.py` (only the `S` class, `fig`, `legend` and colour constants are generic; the rest are Optics figures and can go), `katex/`, `tools/`.
3. In `build.py`, change the output name `optics-module-…` to the new subject, and the module list in `ALLFIGS` to the new `figs_m*.py` files.
4. **Give Claude the prompt in A3**, from inside the new folder.
5. Check the result yourself on a phone. Ask for fixes the same way ("the figure on page 12 is unclear").
6. Ask Claude to mail or zip the PDFs when you are happy (A8).

## A3. The prompt (copy, fill the brackets)

> In `<folder>` I have the syllabus, past papers in `source/` and the textbook `<book>`. Make study PDFs for `<subject>`, modules `<1–4>`, using the kit in `pdf-src/` and the method in `OPTICS/CLAUDE.md` (Part A).
>
> 1. My PYQ + model questions must cover every topic in each module.
> 2. Three files per module: `<subject>-module-N-{prepare, pyq+model, answerkey}.pdf`.
>    - **Prepare**: everything needed to bridge from Plus One / Plus Two (with "remind me" notes) to the concepts each question needs, with good diagrams, a very understandable design, for mobile. Deduce every question to its simplest topics and explain those.
>    - **Pyq+model**: a model paper with the PYQ source marked, not repeating a single concept and not ignoring a single concept, twice as many questions as a real paper (with choices).
>    - **Answer key**: a formal solution for each question, with the prepare topics (code and title) the student must know first.
> 3. Pipeline: Haiku subagents collect data from the textbook, syllabus and past papers. Sonnet subagents compress it into one brief per module, and other Sonnet subagents research how to teach this subject and its maths. Opus writes all three PDFs itself, making the content easier, not shorter.
> 4. Then Opus reviews every page acting as a student who never went above Class 10 (normal memory), checks that student could answer every question from the files alone, and fixes the content and design.
> 5. Update `CLAUDE.md` in the new folder as you go (Part B style).

## A4. The pipeline in detail

1. **Collect (Haiku, in parallel).**
   - Past papers → every question with year, number, marks, section, and a one-line topic. Scans are read as images.
   - Syllabus → modules, units, hours, marks, textbook sections.
   - Textbook → the listed sections: definitions, derivations, worked examples, end-of-chapter problems.
   - Plus One / Plus Two (NCERT) → prerequisite facts the module assumes.
   - Exam pattern → sections, marks, number of questions, choices.
2. **Compress (Sonnet).** One brief per module (see `pdf-src/research/content_m2.md` as the model) with:
   - `K##` atomic concepts: name, key equation, book section, which other atoms it needs
   - derivation skeletons, step by step
   - worked examples with recomputed answers (book misprints flagged)
   - `P##` prerequisites with their NCERT chapter
   - a PYQ map: every past question → its concepts
   - student traps
   - Teaching research briefs (`pedagogy*.md`, `maths_teaching.md`): how to teach the subject and its maths to a weak student.
3. **Write (Opus, by hand).** HTML in `src/m<N>/`, figures as Python-generated SVG, rules in A5.
4. **Build** (A6) and **review** every page (A7).
5. **Cross-link and cover.**
   - Each prepare topic ends with the question numbers it supports.
   - Each answer starts with Know first codes.
   - The paper ends with a coverage table (topic → questions) and a PYQ count.

## A5. Writing rules (what makes the files work)

**Prepare file**
- Order:
  1. cover
  2. "How to read this file" (one sample of each box)
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
  6. a grey "Marks:" split
- Solve the "also" past questions too, briefly, under the main one.
- If a past question is ambiguous, answer the most likely reading and note the other.

**Figures**
- Computed, not hand-drawn: geometry comes from the formulas, so it is correct by construction.
- Keep one fixed colour code for the whole subject, and write it in `figs.py`.
- **Use the same symbols in figures as in the text** (a figure saying y while the text says x confuses students).

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
- **Review sheets**: `python3 tools/sheet.py <pdf> /tmp/x/name 95 6` writes PNGs, 6 pages each, to look at.

**HTML building blocks** (all in `style.css`):
`section.cover` · `section.page` (new page) · `.topic-head > .tid(.pre|.math) + h2` · `.oneline` · `.box.remind|maths|idea|result|trap|check|exam > .lab` · `.steps > .step > .why` · `.kv` (two-column list) · `table.t` · `.chip(.pre|.math|.q)` · `.q` / `.a` (check question / answer) · paper: `.qp-head`, `.section-head`, `.qq > .n + div > .meta > .src` · answers: `.ans-head`, `.need`, `.final`, `.marking` · `.keep` (do not split across pages).

**Gotchas**
- `$` always starts maths; inline maths must stay on one line. Inside maths, `\frac` is auto-turned into `\dfrac`.
- Underscores outside `$…$` print literally (`n_f`). In SVG labels use `<tspan baseline-shift="sub" font-size="75%">f</tspan>` (double quotes, since the Python strings use single quotes).
- SVG text near the figure edge gets clipped; check every label.
- After adding text, check for **orphan pages** (a page with one line or one box). Quick check: `pdftotext -f P -l P file.pdf - | wc -w` for every page; under ~50 words means look at it. Fix by tightening text or moving a `section.page` break.
- Do **not** use `break-after: avoid` / `break-before: avoid` on common elements: Chrome then moves whole blocks to the next page and leaves half-empty pages. Use `.keep` (break-inside: avoid) on small groups instead.

## A7. Review checklist (the "Class 10 student" pass)

Render every page (`tools/sheet.py`) and read it as a student who knows only Class 10:
- Is every symbol, unit and maths step explained before it is used? If not, add a Remind me or Maths tool box.
- Can every model question be answered from the prepare file alone? Follow the Know first codes for a few answers and check.
- Do figure symbols match the text? Are labels clipped, overlapping or hidden by lines?
- Recompute every number in the answer key.
- Any raw `_`, `$`, red KaTeX errors, overflowing boxes, orphan pages?
- Coverage: every syllabus unit has topics, every topic has a question, every PYQ appears.

## A8. Delivering

- Mail one file: `~/.local/bin/quickmail "<file>" ihjas.one@gmail.com` (skill `quickmail`).
- Several modules: zip the PDFs first and send the zip.
- Commit to git only when asked.

## A9. Lessons from the Optics run

- **Time and tokens:** the brief (A4 step 2) is what makes writing fast; keep briefs in `research/`, not `/tmp` (which is wiped).
- The remote folder is an sshfs mount (`ssc-files.service`). If the host sleeps, files give I/O errors. Keep writing in a local folder, then copy over when it is back (the service reconnects by itself).
- Textbook constructions must be checked against the book, not memory. The cosine-law figure was first drawn with the wrong geometry.
- Building over sshfs is slow (a module takes 1–2 minutes) and can hang if the mount drops. Faster and safer: `rsync -a pdf-src/ /tmp/build/pdf-src/`, build there (all four answer keys in ~20 s; PDFs land in `/tmp/build/`), check, then copy the changed files and PDFs back.

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
