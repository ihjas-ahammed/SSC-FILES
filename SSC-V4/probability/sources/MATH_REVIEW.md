# Mathematical and provenance review: probability chapters 1–6 and inference bridge

Historical first-pass review, before the final chapter integration and later GATE coverage corrections. The newer `GATE_REVIEW_*.md` reports give the current topic mapping and supersede the residual-gap discussion below.

Reviewed the loaded `ch01`–`ch06` concept, written-practice, and objective modules and the three inference bridge modules against the Ross 10e chapter text/PDFs and the downloaded GATE DA 2027 syllabus. This review targets mathematical hypotheses, solution claims, and source labels; it is not a line-by-line certification of Ross or every item in these files. Parent's separate numeric sanity pass covered objective answer values.

## Corrections made

- `q.prob.1.5.2` cited Ross Problem 1.29 but changed the exercise into an unrelated coefficient in `(x+y+z)^6`. Problem 1.29 asks to expand `(x1+2x2+3x3)^4`. The drill now asks for one coefficient in that actual expression; the coefficient is 72 after including the weights 2 and 3. Source: full-book PDF p. 33.
- `w.prob.4.10.1` cited “Problem 4.10,” which is a different question about a gambler's winnings. The sample maximum question is Self-Test Problem 4.10. The label and provenance now identify the correct category and full-book PDF p. 190.
- `w.prob.4.8.3` attributed a homogeneous hypergeometric count to Example 8i. Example 8i is a mixed-lot quality-control problem. The exercise is now accurately described as original practice based on §4.8 hypergeometric sampling.
- `w.prob.5.3.2` cited Self-Test Problem 5.22, which concerns affine transformations of a uniform variable and is already the source of `w.prob.5.7.1`. The minimum-of-reflected-uniform exercise is now correctly labeled original practice.
- Bayes' formula in `c.prob.3.3.2` did not state that the partition-cell conditionals must exist. It now requires positive-probability cells and positive evidence probability. The conditional partition/Bayes result in `c.prob.3.5.2` now explicitly excludes zero-mass conditioning cells and states the positive-probability condition for a posterior.

## Checks and findings

- Checked every numbered Ross exercise or Self-Test label present in written practice for chapters 1–6 against the corresponding source section. The other checked labels match the cited problem/setup: chapter 1 Problems 1, 2, 8(c), 10(b), 16, 21(a), 30, 34, 36(a); chapter 2 Problems 3, 5, 8, 12(a), 23, Theoretical Exercises 9 and 20, and §2.5 Example 5b/§2.7 Example 7a; chapter 3 Problems 3.1, 3.13, 3.16, 3.33; chapter 4 Problem 4.1, Problem 4.2, Problem 4.7, Problem 4.28, and Examples 6b, 6h, 7b; chapter 5 Self-Test Problems 5.2, 5.3, 5.8, 5.9, 5.13, 5.14, 5.16, 5.22; chapter 6 Problems 6.1(c), 6.2, 6.12, 6.20, 6.27, 6.29(a), 6.45, and 6.50. Where a prompt changes the original data or requested part, it is marked as adapted.
- Rechecked the core probability identities and worked solutions across the reviewed range, including count spaces, inclusion–exclusion, conditional/Bayes calculations, discrete and continuous expectation/variance, binomial/Poisson/hypergeometric laws, joint and conditional distributions, order statistics, transformations, and exchangeability. No additional substantive formula or worked-answer error was found in this pass.
- The inference bridge states the sampling assumptions for exact normal-sample t and chi-square procedures, gives lower-tail quantile conventions for variance intervals, and labels normal/Wald approximations as approximations. The numerical answer fields were not repeated here because they received the separate numeric pass.

## Coverage limits and residual gaps

- GATE DA 2027 Probability & Statistics also explicitly expects conditional expectation and variance; covariance/correlation; continuous distributions including uniform, exponential, Poisson, normal and standard normal; conditional PDFs; CLT; confidence intervals; and z-, t-, and chi-square tests. Chapters 1–6 plus `inference.*` cover the core probability setup, common distributions, conditional densities, summaries, and inference bridge. Conditional expectation/variance, systematic covariance/correlation, and CLT are delegated to Ross chapters 7–8; their in-progress modules were not edited or certified in this review. Course readiness still depends on those modules covering the named DA outcomes.
- The loaded inference bridge includes one-way core examples of confidence intervals and z/t/chi-square procedures, but this review did not establish exhaustive GATE coverage for every test variant (notably goodness-of-fit parameter estimation details, two-proportion tests, or all confidence-interval variants). Treat the bridge as foundational practice, not an exhaustive inference syllabus.
- Ross's simulation, Poisson-process, Markov-chain, entropy/coding sections are extensions rather than replacements for the DA core list. They are outside this review's chapters 1–6/inference scope.


## Expanded Ross item bank — October 2026

The expanded bank uses the local 10th-edition chapter PDFs. `ross-item-inventory.json` records all detected example headings and the numbered Problems, Theoretical Exercises and Self-Test ranges. `audit_ross.js` checks explicit IDs against that inventory; it does not automatically check whether a prompt covers every part or whether its solution is true. The chapter reading indices are generated from the actual mapped exercise titles.

The authoring pass includes worked explanations and source/subpart checks. Advanced proofs now explain their notation and identify the extra theorems they use; an elementary explanation does not remove required hypotheses. This is an authoring and targeted mathematical review, not independent certification of every answer.

Corrections and caveats in this expansion:

- Chapter 1 Problem 29 now contains the complete weighted multinomial expansion. The earlier coefficient-only drill remains under its old ID. Problem 36 includes both investment requirements. Problem 37 uses the source's five fish types, exactly three trout, and at least two trout; its counts are 1001, 120 and 495.
- Chapter 3 Problem 31 uses a hypergeometric mixture: the first group of tennis balls may contain used balls, so it does not always convert three unused balls. Theoretical Exercise 29's beta-integral ratio gives (n+1)/(n+m+1); the inconsistent printed denominator is corrected.
- Chapter 4 corrects mapped-item mismatches including Theoretical Exercises 2, 5, 13 and 19 and Self-Test 2 and 14. Integer-parameter Poisson modes and deterministic endpoint cases are retained.
- Chapter 6 Problem 9 has ambiguous flattened fraction/exponent text in the provided ebook PDF. The exercise explicitly identifies its normalized teaching interpretation, (6/7)(x²+xy/2) on 0<x<1, 0<y<2. This interpretation integrates to one; consult a typeset copy to resolve the original typography. Conditional-density identities state positivity requirements. Dirichlet spacings include the final spacing to the upper endpoint.
- Chapter 8 Example 5b's match-count covariance and variance were recomputed. Problem 8 counts 100 bulb lifetimes but only 99 replacement delays. Problem 23's Poisson Chernoff bound is about 0.4398; the one-sided variance bound is about 0.3571 and the exact probability about 0.1122. The clinic exercise conditions on the number of doctors before mixing distributions. Normal approximations are labeled as approximations; finite variance alone gives no guarantee for small samples or an extreme 30-standard-error nicotine tail.
- The Ehrenfest chain changes count parity on every step. Its binomial stationary distribution is valid, but a fixed-start distribution does not converge to it step by step. Chapter 9 Problem 11 explains the parity obstruction to joint independence, the single-molecule exception at M=1, and the distinction between stationarity, time averages and convergence.
- Chapter 9 entropy equality statements require finite entropy where equality is used to infer injectivity. Unordered Poisson arrival locations are represented by independent uniforms; the chronologically ordered arrival times are dependent order statistics.
- Chapter 10 Problem 5 preserves Ross's coefficient convention F(t)=1−exp(−a t^β), with inverse (−ln U/a)^(1/β). The equivalent scale is a^(−1/β). Self-Test 3 tests higher-probability values first for efficient sequential simulation.
- Chapter 10 Self-Test 5, as printed, asks about E[exp(XY)] for independent rate-one exponential X and Y. This expectation is infinite: conditional on Y=y≥1, the integral over X is ∫ exp((y−1)x) dx, which diverges. A finite Monte Carlo average does not make the expectation finite, and the usual finite-variance control-variable formula is unavailable. The bank explains this instead of reporting a fictitious variance reduction.

The local source PDFs are used for authoring and are not published. The public reading index provides item labels and page references. Generated diagrams are schematic teaching illustrations; their captions state the exact relationship to the adjacent argument.

Additional source-review results in this expansion:

- Chapter 1 restores both antenna-separation cases in Example 6d, all 13 three-variable records in Theoretical Exercise 16(a), and the requested direct checks in Theoretical Exercise 12(b). The four-antenna introduction now labels the correct three valid configurations. The lattice waypoint in Problem 24 was checked visually against the local PDF.
- Chapter 2 restores missing source subparts in Problems 3 and 5, the source color counts in Problem 35, five initial draws in Self-Test 18, and exact-temperature events in Self-Test 4. Card, shuffle and occupancy calculations were recomputed where the earlier bank had incorrect factors or numerical reductions.
- Chapter 5 replaces ten unrelated source-labelled exercises with the actual source questions, including the Weibull plotting question. Self-Test 1's density graph was inspected visually and expressed as an exact piecewise density in the teaching prompt.
- Chapter 6 replaces fourteen unrelated source-labelled items while retaining their existing IDs.
- Chapter 7 replaces incorrect source mappings, restores the zero-order term in the normal moment expansion, the square-root Poisson approximation, the factor n in the higher-moment result, and the square roots in the standard-deviation triangle inequality. The jointly normal MGF proof now factors the independent normal ingredients, rather than falsely treating correlated outputs as independent.

- The final Chapter 3 pass restores the exact tournament bracket in Figure 3.6: (1,8), (4,5), (3,6), (2,7). The resulting team-1 title probability is 225148/426465, about 0.527940159. It also restores the replacement/without-replacement urn cases, all requested consecutive-heads cases, the tournament recurrence, both requested proof approaches, and the p=1/2 independence exception. Consecutive-heads recurrences were checked against exact rational dynamic programming at three parameter pairs.
