# Day 9 Maths — source audit and coverage

Both required Semester V FYUGP syllabus PDFs and all three prescribed textbooks
were found in /home/ihjas/mnt/ssc-files. No required source is missing.

## Primary files

| Source | Exact local path | Included extract |
|---|---|---|
| Complex Analysis I syllabus, MAT5CJ303 | SSC-V2/SEM5/MATH/MAT5CJ303CourseTitleCOMPLEXANA_COMPLEX_ANALYSIS_I.pdf | complex-analysis-i/syllabus.pdf |
| Convex Optimization syllabus, MAT5EJ303 (2) | SSC-V2/SEM5/MATH/MAT5EJ3032CourseTitleCONVEXOPT_CONVEX_OPTIMIZATION.pdf | convex-optimization/syllabus.pdf |
| Zill–Shanahan, Complex Analysis: A First Course with Applications, 3rd ed. | 2026 2/COMPLEX ANALYSIS/Complex Analysis (Dennis G. Zill, Patrick D. Shanahan) (z-library.sk, 1lib.sk, z-lib.sk).pdf | complex-analysis-i/zill-sections-3-1-to-3-3-extract.pdf, original PDF pages 117–147, printed pp.103–133 |
| Binmore, Mathematical Analysis: A Straightforward Approach, 2nd ed. | SSC-V2/SEM5/MATH/books/Mathematical_Analysis_Straightforward_Binmore.pdf | convex-optimization/binmore-stationarity-to-classification.pdf, original PDF pages 231–245, printed pp.217–231 |
| Boyd–Vandenberghe, Convex Optimization | SSC-V2/SEM5/MATH/books/Convex_Optimization_Boyd_Vandenberghe.pdf | convex-optimization/boyd-convex-sets-extract.pdf, original PDF pages 36–61, printed pp.21–46 |

Extracts retain complete PDF pages. Zill printed p.133 also contains material after
Theorem 3.3.2; that later material is outside this deck. Binmore's broader chapter
is assigned at pp.190–231, but today's topics begin at §19.27, p.217.

## All 14 timetable items

| Timetable topic | Syllabus unit | Primary sections | Minutes |
|---|---|---|---:|
| Limits of complex functions | CA III.11 | Zill §3.1.1, pp.103–110 | 30 |
| Continuity of complex functions | CA III.12 | §3.1.2 through Example 7, pp.110–113 | 24 |
| Continuity theorems and bounding property | CA III.13 | Theorems 3.1.4–3.1.5 and bound, pp.113–115 | 22 |
| Differentiability and derivative rules | CA III.14–15 | §3.2, pp.121–126 | 36 |
| Analyticity and entire functions | CA III.15 | §3.2, pp.124–127 | 24 |
| Cauchy–Riemann through Theorem 3.3.2 | CA III.16 | §3.3, pp.130–133, ending at the theorem | 38 |
| Stationary points and conditions | CO I.4 | Binmore §§19.27–19.30, pp.217–219 | 20 |
| Second derivatives and Hessian | CO I.5 | §§19.31–19.33, pp.219–221 | 22 |
| Mean value and second-order Taylor | CO I.6 in timetable sequence | §§19.34–19.36, pp.221–223 | 24 |
| Eigenvalues of the Hessian | CO I.7 | §§19.37–19.39, pp.223–226 | 18 |
| Classification of stationary points | CO I.8 | §§19.40–19.46, pp.227–231 | 24 |
| Affine and convex sets | CO II.9 | Boyd §§2.1–2.2, pp.21–35 | 24 |
| Convexity-preserving operations | CO II.10 | §2.3, pp.35–42 | 20 |
| Generalized inequalities | CO II.11 | §2.4, pp.43–46 | 22 |

Complex Analysis totals 174 minutes; Convex Optimization totals 174 minutes.
These are learning allocations, separate from the user-configured match clock.
The local CO syllabus has a blank content cell for Unit 6; the timetable explicitly
names mean value and second-order Taylor, which are in the assigned Binmore chapter.
“Conditional stationarity” is treated as the first-order condition for stationarity,
consistent with §§19.27–19.30, not as an instruction to add constrained optimization.

## Scope and source use

The mathematical explanations, examples, diagrams and quizzes are directly
authored paraphrases and original worked illustrations of the assigned material.
Examples distinguish pointwise CR equations from the full C¹ domain criterion;
the indefinite-Hessian saddle conclusion also applies when other eigenvalues
are zero, by the positive/negative eigenvector-direction argument.
Zill's simple-zero L’Hôpital rule (Theorem 3.2.3) is included with its analytic
and nonzero-denominator-derivative hypotheses. Affine dimension and the
ellipsoid-as-affine-ball example are included from Boyd §§2.1–2.2.

No harmonic functions, later complex-function units, supporting hyperplane
theorems, dual cones, convex-function operations or duality have been added.
Hyperplanes, halfspaces and PSD matrices appear as basic convex-set examples.

Brown–Churchill is also present at SSC-V2/SEM5/MATH/books/
Complex_Variables_Brown_Churchill.pdf, but was not needed in place of the prescribed
Zill text. Other supplementary syllabus references were not located by filename
in this audit (Stein–Shakarchi, Burckel, Hörmander, Priestley, Silverman, Bak–Newman;
Luenberger–Ye and Lauritzen). This is a filename-search result, not a claim that
no unlabelled copy exists.

The timetable image is topics-image.png. Runtime interaction references are
../doc/tda.html and ../doc/TDA-briefing-2026-10-23.md. Archived physics material
under day-9-physics-baseline/ does not supply today's mathematical content.
