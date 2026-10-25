# Day 8 maths papers — source audit

All required paper and textbook sources were found locally.
The original papers, copied verbatim to ../papers/, are:

| Paper | Downloads PDF | TeX-preserving source HTML |
|---|---|---|
| Real Analysis II Model Paper 5 | REAL-ANALYSIS-II-MODEL-PAPER-5.pdf | ai_studio_code (31).html |
| Abstract Algebra I Model Paper 4 | ABSTRACT-ALGEBRA-I-MODEL-PAPER-4.pdf | ai_studio_code.html |

Each paper has 20 questions, two hours and maximum 70 marks. The section
ceilings are 24, 36 and 10, with one Section C answer counted.

## Primary textbook extracts

- Bartle and Sherbert, Introduction to Real Analysis, 4th edition:
  reference/real-analysis-ii/real-analysis-2-textbook-module-3.pdf (Chapter 7)
  and module-4.pdf (Chapter 8); the local Semester V syllabus is alongside them.
- Fraleigh, A First Course in Abstract Algebra, 8th edition:
  reference/abstract-algebra-i/fraleigh-8ed-section-10-cosets-lagrange.pdf,
  printed pp.97–104, and the local syllabus.
- Supplementary prerequisite extract from the same full Fraleigh book:
  fraleigh-permutation-prerequisites.pdf, original PDF pp.94–104,
  printed pp.77–87, covering §8 for permutation/cycle/parity calculations.
- fraleigh-fermat-euler-extract.pdf, original PDF pp.217–220, printed pp.200–203,
  covering §24 and its Fermat/Euler statements and unit-group reasoning.

The first extracts were retained from the earlier Day 8 syllabus workspace,
originally prepared from ssc-files. The full Fraleigh volume used for the two
additional verbatim page extracts was found at:
/home/ihjas/mnt/ssc-files/2026 2/ABSTRACT ALGEBRA/A First Course in Abstract
Algebra Eighth Edition (John B. Fraleigh etc.) (z-library.sk, 1lib.sk, z-lib.sk).pdf.
These additional sections answer explicit paper questions; no questions were
discarded to enforce the shorter earlier timetable scope.

## Question-to-book map

| Questions | Primary material |
|---|---|
| RA 1–2, 11–12, 19 | Chapter 7: tagged Riemann sums, positivity, additivity, Squeeze Theorem 7.2.3, FTC, integral-order and IVT arguments |
| RA 3–7, 13–15, 20 | §8.1: definitions 8.1.1/3/4/7, norm Lemma 8.1.8, examples 8.1.9, Cauchy Theorem 8.1.10 and exercises |
| RA 8–10, 16–18 | §8.2: interchange counterexamples, Theorem 8.2.2, exercises, Dini Theorem 8.2.6 |
| AA 1–6, 10–14, 17, 19 | §10: coset relations, translations, index, Examples 10.3/5/12/13, Theorem 10.11 and exercises 28/34/40/41; Tables 10.14–15 |
| AA 7–9, 15–16, 18, 20(a) | Theorem 10.7, Corollary 10.8, Theorem 10.9, exercises 36/38/39/42 |
| AA 4, 12 | §8 permutation/parity prerequisites plus §10 exercises |
| AA 9 and 20(b) | §24: nonzero residues modulo a prime, unit groups, Fermat Theorem 24.1 and Euler Theorem 24.7 |

All explanations, proof presentations, rubrics and examples were authored directly.
Computations/scripts only read/extract sources, verify maths, validate, test and
build. The rubrics are self-marking practice guidance, not official schemes.

## Mathematical conventions and details

- Standard integral interval convention is a < b. RA 1 notes why a degenerate
  interval would invalidate its conclusion.
- RA 7's large errors lie just below one, not at one; deleting the endpoint alone
  does not restore uniform convergence.
- RA 12 proves full integrability before using an integral over the small tail.
- RA 14/20 use an epsilon buffer when strict bounds become nonstrict under a
  supremum or a limit; boundedness of the constructed limit is proved.
- RA 18 gives counterexamples preserving the other Dini hypotheses, including
  separately removing closedness and boundedness.
- RA 19 uses the integrability Squeeze Theorem, not only an integral-order rule.
  Its signed-weight example f = g = x on [−1,1] has ∫g = 0 and ∫fg = 2/3.
  Strict positivity can be weakened to nonnegative weights with positive total
  weight, but arbitrary sign-changing weights do not suffice.
- AA 12 uses rightmost-first composition and obtains (1 2 3 5 4), order 5 and
  index 24. A consistently stated opposite convention changes the displayed
  cycle but not these order/index results.
- D₄ has eight elements and ρμ = μρ⁻¹. AA 13 lists both partitions explicitly.
- AA 14 and 17 work for infinite groups with finite index; no finite-cardinality
  division is silently used.
- AA 18 first excludes infinite cyclic groups; its involution argument needs
  abelianity to obtain a four-element subgroup.
- AA 19 includes the full 6×6 reordered table and proves coset addition is
  independent of representatives before identifying the block group with Z₃.
- AA 20 proves Euler through the multiplicative units, handles n = 1 separately,
  and distinguishes Fermat's coprime and all-integer forms.

The new apps retain low-mark flips, self-marked /70 totals, and the updated
Android notch/MathJax-option runtime from ../study-day-8-exams/.
