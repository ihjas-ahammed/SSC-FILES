# process.md: Module III (semiconductors), syllabus items 12–16

Status (2026-10-16): complete. Excerpt, pre files, PYQ, model paper, notes (study and structured) and final PDFs are built. Mailed 2026-10-16: the four PDFs below, one per message, to ihjas.one@gmail.com.

## Scope
- Syllabus items: 12 intrinsic and extrinsic semiconductors; 13 drift velocity; 14 mobility and conductivity of intrinsic semiconductors; 15 carrier concentration and Fermi level; 16 conductivity for intrinsic and extrinsic semiconductors.
- Book: Puri and Babbar, chapter 7 (printed pp. 199–227, PDF pp. 215–243; printed = PDF − 16).
- Decisions taken: §7.1–7.3 (item 12) in full; §7.4 in full (items 13 and 14, with the temperature variation of conductivity); §7.5 in full (item 15); §7.6 with the worked Examples 7.1–7.3 (items 15 and 16). The chapter summary, very short, short and long questions and problems are not in the notes (as in Module II; the problems are kept in the book source).
- Outside the module: chapter 8 (magnetism, syllabus Module IV).

## Sources
- `book-sources/bs-5-semiconductors.html`: chapter 7 transcription (Codex, from the page images; three chunks: printed 199–210, 211–222, 223–227). Verified against the images for p. 199 (opener) and p. 210 (equations 7.22 to 7.24, layout). `[as printed]` marks kept where the book has them; the "Pd" entry is printed as "Pd" in the image.
- `source/books/puri-babbar_module3_excerpt.html`: the excerpt with the same text.
- Earlier study folder `2026 2/PROPERTIES OF SOLIDS/`: read; it covers Module I only and is not used here.

## Section starts (measured on the excerpt)
§7.1 p. 199; §7.2 p. 200; §7.3 p. 202 (§7.3.1 p. 203, §7.3.2 p. 204); §7.4 p. 205; §7.5 p. 207 (§7.5.1 p. 207, §7.5.2 p. 210, §7.5.3 p. 211, §7.5.4 p. 212); §7.6 p. 213 (a 213, b 217, c 219); Examples 7.1 p. 220, 7.2 p. 221, 7.3 p. 222; summary p. 223.

## Equations
- All 52 numbered book equations (7.1 to 7.52) are display blocks in both the study and the structured notes. `check_equations.py` prints MISSING [] for both. Two book equations (7.20, 7.26) are printed twice in the book and are shown in the notes once each in their sections, with the reuse in §7.6 cited.
- Unnumbered book equations (the N_c and N_v numerics, the intermediate steps of the integrals, Example equations) are shown without a tag; the text says so.

## Figures (Codex, sheets of four)
- Eleven figures from the book (7.1 to 7.11) redrawn by Codex in three sheets: sheet 1 (7.1–7.4), sheet 2 (7.5–7.8), sheet 3 (7.9–7.11). Each sheet was read before its crops were accepted; all three were accepted with no re-run.
- Fig. 7.8 is a schematic of the Fermi-level curves (the book's curves are for Si at several concentrations); the caption says so.
- Fig. 7.11: the book prints the number only; the caption says "the book prints the figure number only".

## Plus Two recall
- Recall boxes: §7.1–7.3 (bands and the gap, Plus Two) and §7.4 (current, drift velocity and conductivity, Plus Two; derives σ = neμ). §7.5 and §7.6 are Beyond the Plus Two base; no recall box.
- Pre files: `pre-physics.html` and `pre-math.html`, every item Recall, Partial or Beyond, all statuses OPEN until checked against the Kerala text.

## Checks (final)
- `check_source.py` (both kinds): OK.
- `check_equations.py`: MISSING [] for both kinds.
- `render.py`: study 9 pages, structured 7 pages, 0 MathJax error boxes. Gutter flags are full-width headings only.
- `check_overflow.py`: study 0 and 0 (after moving the worked-example maths into display blocks); structured 0 and 0.

## PYQ and model paper
- PYQ (`source/pyq/properties-of-solids-module-3-pyq.html`): 7 questions from the M.Sc. Solid State papers (2019 Nov, 2022 Nov, 2023 Nov) and one UG question (2025 Mar PHY6B14 Q5). The UG pool has no 10-mark semiconductor question, so Section C is empty and the 10-mark band is not used. The weightage is kept as printed.
- Model paper (`properties-of-solids-module-3-model-missed-topics-from-pyq.html`): 17 drafted questions, 46 marks (A 4 × 1, B 4 × 2, C 6 × 4, D 10 marks, answer any one of three); key and mapping on page 2–3. Drafted from the book's chapter; not copied from any paper.

## Outputs
- `properties-of-solids-module-3-study.pdf`, `properties-of-solids-module-3-structured.pdf` (notes)
- `source/pyq/properties-of-solids-module-3-pyq.pdf`, `source/pyq/properties-of-solids-module-3-model-missed-topics-from-pyq.pdf`
