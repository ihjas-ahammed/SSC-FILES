# Day 9 Maths — Saturday 24 October 2026

Build the independent study-day-9-math app from the timetable in topics-image.png.
The timetable calls the date study day 2 of 10. The folder retains Day 9.

Write every educational item directly yourself in JSON. Never use scripts,
generators, loops or transformations to author, populate or rewrite study data.
Scripts may extract source text, validate, verify maths, test and build. Verbatim
copies of the finished manually authored JSON may synchronize its mirror.

## Complex Analysis I — 174 minutes

Use Semester V FYUGP MAT5CJ303, Module III, Units 11–16. Primary text: Dennis G.
Zill and Patrick D. Shanahan, Complex Analysis: A First Course with Applications,
3rd edition. All material below is from §§3.1–3.2 and §3.3 through Theorem 3.3.2.

1. Limits of complex functions — 30 min: punctured domains, epsilon–delta,
   component limits, uniqueness and algebraic laws, path counterexamples and proof.
2. Continuity of complex functions — 24 min: definition, component criterion,
   conjugation, removable fillings and failures that no centre value can repair.
3. Continuity theorems and bounding property — 22 min: Theorems 3.1.4–3.1.5,
   rational domains, compact-region bound, explicit estimates and counterexamples
   when closedness or boundedness is absent.
4. Differentiability and derivative rules — 36 min: full complex quotient,
   derivative of z², power/sum/product/quotient/chain rules, differentiability
   implies continuity, conjugation and isolated differentiability of |z|².
5. Analyticity and entire functions — 24 min: neighbourhood versus point,
   polynomial/rational examples, isolated singularities, continuous extensions,
   the simple-zero L’Hôpital rule (Theorem 3.2.3) and why a complex derivative is
   not a signed real slope.
6. Cauchy–Riemann equations through Theorem 3.3.2 — 38 min: necessity proof,
   non-differentiability tests, equations on a line, point-only failure and the
   domain-level criterion with continuous first partials. Stop at that theorem.

Do not add polar Cauchy–Riemann equations, harmonic functions/conjugates,
constant-function theorems after 3.3.2, complex exponentials or logarithms.

## Convex Optimization — 174 minutes

Use Semester V FYUGP MAT5EJ303 (2), Module I Units 4–8 and Module II Units 9–11.
Primary texts: Binmore, Mathematical Analysis: A Straightforward Approach, 2nd
edition, §§19.27–19.46 (printed pp.217–231), and Boyd–Vandenberghe, Convex
Optimization, §§2.1–2.4 (printed pp.21–46).

1. Stationary points and conditions — 20 min: zero gradient, interior hypothesis,
   boundary caveat, saddles and least-squares normal equations. The timetable's
   “conditional stationarity” means conditions for stationarity in this review;
   it does not authorize constrained Lagrange multiplier methods.
2. Second derivatives and Hessian — 22 min: matrix construction, mixed partials,
   symmetry hypotheses, point dependence and directional quadratic forms.
3. Mean value and second-order Taylor — 24 min: scalar segment reduction,
   vector-output caution, exact intermediate-Hessian remainder and local small-o
   expansion. Unit 6 is blank in the local syllabus table; the timetable explicitly
   supplies this topic and the assigned Binmore chapter contains it.
4. Eigenvalues of the Hessian — 18 min: explicit 2×2 eigenpairs, spectral form,
   definiteness, semidefinite directions and extreme-eigenvalue bounds.
5. Classification of stationary points — 24 min: C²/interior/gradient hypotheses,
   strict-sign tests, the 2D determinant test, zero-eigenvalue cautions, full
   worked classification and local versus global conclusions.
6. Affine and convex sets — 24 min: coefficient rules, hulls, affine dimension,
   relative interior, cones, common convex sets, ellipsoids as affine images of
   balls and the PSD cone as a symmetric-matrix set.
7. Convexity-preserving operations — 20 min: intersections, affine images and
   inverse images, products/sums/projections, union failure, perspective weights
   and linear-fractional maps with positive affine denominators.
8. Generalized inequalities — 22 min: proper-cone hypotheses, weak/strict order,
   coordinate and Loewner order, incomparable pairs, algebra/limit properties,
   minimum/minimal and maximum/maximal elements.

Do not extend to supporting/separating hyperplanes, dual cones, convex functions,
KKT conditions, convex programs or duality. Define prerequisites in the glossary.

## App, skills and outputs

- Preserve the updated Day 9 runtime and follow skills/08-definition-recall.md.
  Read both ../doc/tda.html and ../doc/TDA-briefing-2026-10-23.md as source designs.
- Concept front, editable back; tap/Recall flips and Read flips back. Controls,
  text selection and typing do not flip. Off-centre cards return to the front.
- At least eight words → Check → same-card Correct statement → I’m correct or
  Retry. I know this skips; Practise again retains prior progress. No keyword
  grader or network synonym lookup. Old reading progress must not disable typing.
- Locked cards remain visible, dimmed and full-size. Only matches lock progression,
  independently per sheet. Movement stops at the first lock, and moving left from
  the centred unfinished definition is blocked until unlock. No locks outside a match.
- Glossary definitions open on click/tap or keyboard activation only. No hover
  opening and no self-links on a card's defined terms. Keep maths and figures intact.
- Default focused notch, Pause/Resume, reload persistence, calculator and real-second
  quizzes remain. Hydration occurs at displayed 25/70 only for halves lasting at
  least 45 real minutes. Break durations are separate and every break is skippable.
- Use inlineChecks false, autoRevealQuestions true and definitionChecks true.
- Current course: 4 sections, 14 topics, 199 cards, 16 intuition cards, 122 glossary
  entries, 6 derivations with 24 checkpoints, and 42 application quizzes.
- Cumulative coverage figures (73% and 44%) belong to the supplied plan; the app
  measures actual progress in this new course and starts at zero.
- Canonical data: ../study-match/data/data.json. Exact mirror: math-data-fixed.json.
- Build ../study-math-day-9.html, ../app/, and both ../study-match/dist/ outputs.
- Keep both skills directories identical. Preserve the physics folder and older
  maths courses. day-9-physics-baseline/ is an archive, not this course's source.
