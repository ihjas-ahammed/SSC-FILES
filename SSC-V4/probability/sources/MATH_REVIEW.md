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
