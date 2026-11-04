# process.md: notes for Abstract Algebra I, Module 2 (Fraleigh 8th ed.)

Method as in `../module-1/process.md`, with the changes below. The module notes are built by `build_module2.py combined`; coverage is checked by `check_numbers.py`.

## Scope (decided 2026-10-16)
Syllabus items 7 to 12 are matched by content to the 8th edition:

| Syllabus item (7th ed. numbers) | 8th-ed content | Printed pages | In this module |
|---|---|---|---|
| 7 Section 5, 5.1&ndash;5.16 | Subgroups; subgroup tests | 52&ndash;55 | yes |
| 8 Section 5, 5.17&ndash;5.23 | Cyclic subgroups, generators | 55&ndash;56 | yes, plus 5.24&ndash;5.26 (same subsection) |
| 9 Section 6, 6.1&ndash;6.9 | Cyclic groups are abelian; division algorithm; gcd | 61&ndash;64 | yes |
| 10 Section 6, 6.10&ndash;6.17 | Structure of cyclic groups; subgroups of finite cyclic groups | 64&ndash;66 | yes, plus 6.18&ndash;6.21 (same subsection) |
| 11 Section 8, up to 8.6 | Homomorphisms, images, kernels | 77&ndash;79 | yes |
| 12 Section 8, 8.7&ndash;8.18 | Examples; Cayley&rsquo;s theorem; regular representations; transpositions; orbits | 79&ndash;82 | yes |

Outside this module: Section 7 (Module V); 8.19&ndash;8.25 (even and odd permutations, alternating groups; Module III, item 13); Section 9 onward. Section 4 exercises 32&ndash;38 (printed 52) are outside.

**Decisions taken without asking (reason in brackets):**
- 5.24&ndash;5.26 and 6.18&ndash;6.21 are in the module, because each finishes a subsection that the syllabus item starts. Dropping them would lose book content (notes must not drop content).
- 8.1&ndash;8.6 (homomorphisms) are in the module, because the syllabus places them in item 11. Module IV item 17 (&ldquo;Section 13, Homomorphisms&rdquo;, 7th ed.) must be checked against the 8th ed. before Module IV starts.
- The CLAUDE.md note that Module III is &ldquo;book &sect;9 and &sect;10&rdquo; is wrong by content: in the 8th ed., &sect;9 is Finitely Generated Abelian Groups. Orbits, cycles and alternating groups are 8.17&ndash;8.25. Module III must be re-mapped before it is built.

## Exercises (new rule for this module)
The text names some exercises inside examples, theorems and proofs. Those are reproduced in full, in each section&rsquo;s closing box, in both versions:
- Section 2 Exercise 20 (cited by Example 5.7; text copied from the Module 1 excerpt, printed 29).
- Section 5 Exercises 51 and 57 (proofs of Theorems 5.15 and 5.16).
- Section 6 Exercise 54 (cited after Corollary 6.7).
- Section 8 Exercise 54 (cited after Definition 8.13).

The rest of the exercise sets are in the excerpt, not in the notes. Module 1 notes left all exercises out; this rule was not applied to Module 1.

## Steps done
1. Edition check: 8th ed. confirmed by the concordance (CLAUDE.md, Module 1 excerpt). Printed offset 17 confirmed on PDF 70 (= printed 53), PDF 78 (= printed 61), PDF 94 (= printed 77).
2. Excerpt: 31 sheets (PDF 69&ndash;87 and 94&ndash;105), transcribed from the page images, with a contents sheet. `Fraleigh-8ed_Module2_excerpt.html`. Checks: tag balance 0 errors; sheets 31; odd `$` sheets none; raw `<` in maths none; MathJax errors 0 (4228 containers). Index: `../../books/index-module-2.md` (77 rows).
3. Book sources (sliced from the excerpt; trims in each header): `book-sources/section5-subgroups.html`, `section6-cyclic-groups.html`, `section8-permutations.html`.
4. Pre file: `pre-math.html` (Plus Two bridge). Plus Two statuses marked OPEN until the Kerala text is checked.
5. Bodies: `section{5,6,8}-*-study.body.html` and `-structured.body.html`. One Plus Two recall box each for determinants (5.14) and functions (8.4), status OPEN.
6. Coverage: `check_numbers.py` reports MISSING [] for all six bodies; dollar counts even.
7. Build: `build_module2.py combined` (Module 1 CSS, copied unchanged); render `../../../pyq/render.py`: MathJax error boxes 0 in both.
8. Width check on every display, and on the rendered page: text bounding boxes plus raster pixels in the gutter and beyond the margins (see lessons). One display overflowed: the cycle formula of Definition 8.14. Fixed by splitting it into two aligned lines in both versions. Re-checked: no right-margin hits; gutter hits only at full-width headings and rules.

## Figures
Figures are described with their labels only (Figures 5.10, 5.27, 6.3, 6.11, 6.12, 6.19, Table 8.9 kept as a table). None is redrawn.

## Printed errors (kept, marked)
- Theorem 5.15 reads &ldquo;for all $a, b \in G$, $ab^{-1} \in G$&rdquo;. The notes say the meant condition is in $H$.
- Exercise 25 of Section 6 reads &ldquo;possibe&rdquo; (excerpt only).
- The 2018 and 2022 papers have similar printed garbles, marked in the PYQ.

## Status
- Study and structured PDFs: built (7 and 6 pages).
- Mail: see the session log in the reply. Quickmail keeps no log.

## Lessons (2026-10-16)
- **Text checks cannot see maths.** MathJax draws displays as paths, so `pdftotext -bbox` shows no words for them. Check the rendered page pixels in the gutter and beyond the margins (as in `render.py`), and look at the page. Module 1&rsquo;s overflow was missed for this reason.
- **Keep each table with its caption.** A `div.keep` wrapper with `break-inside: avoid` stopped Table 8.9 from splitting from its caption.
- **Split long displays at an `=`.** A two-line `aligned` display fits the column; the one-line form did not.
- **A printed statement can be wrong.** Check the text layer before writing a theorem into the notes (5.15 was read correctly only after the text-layer check).
- **Trim opener pages.** Section 4 exercises 32&ndash;38 (printed 52) and the Section 7 and Section 9 openers were cut from the book sources, and each cut is written in the source header.
