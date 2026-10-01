# GATE DA review: Ross Chapters 1–4

**Basis.** I checked the full local Ross chapter text files (`sources/chapters/ch01.txt` through `ch04.txt`) against the Probability and Statistics entry in the official local `research/GATE_2027_DA_Syllabus.pdf` (p. 1), the current concept banks, and the local 2024–2026 question map in `sources/pyq-map.md`. This is a topic crosswalk, not a claim that every source example or exercise is reproduced. “Core” means the syllabus names the skill or it is a direct prerequisite for a named probability task; “supporting” means it strengthens that skill but is not itself a named syllabus topic; “extension” means enrichment beyond the listed DA syllabus.

## Ross subsection inventory

| Ross subsection and source topic | Concept IDs | DA relevance and review |
|---|---|---|
| §1.1 Introduction | `c.prob.1.1.1` | Core orientation: turn a described experiment into a countable set of possible outcomes. |
| §1.2 Basic Principle of Counting | `c.prob.1.2.1–1.2.2` | Core. Product rule and sequential choices support counting outcomes before assigning probabilities. |
| §1.3 Permutations | `c.prob.1.3.1–1.3.2` | Core. Ordered selections, arrangements, repeated objects and factorial counts are covered. |
| §1.4 Combinations | `c.prob.1.4.1–1.4.2` | Core. Unordered selections and complement/restriction counting are covered. |
| §1.5 Multinomial Coefficients | `c.prob.1.5.1–1.5.2` | Core counting extension. Dividing labeled objects into groups is a direct permutation/combination method and useful for finite-space probability. |
| §1.6 Number of Integer Solutions of Equations | `c.prob.1.6.1–1.6.2` | Core. Stars and bars counts nonnegative integer allocations; GATE 2026 DA Q20 directly uses uniform weak compositions (see `sources/pyq-map.md`). |
| §2.1 Introduction | `c.prob.2.1.1` | Core orientation to probability models and the role of a sample space. |
| §2.2 Sample Space and Events | `c.prob.2.2.1–2.2.2` | Core. Outcomes, events, complements and event operations are covered. |
| §2.3 Axioms of Probability | `c.prob.2.3.1–2.3.2` | Core. Nonnegativity, normalization, additivity and consequences are covered. |
| §2.4 Some Simple Propositions | `c.prob.2.4.1–2.4.2` | Core. Complement, monotonicity, bounds and inclusion–exclusion are covered. |
| §2.5 Equally Likely Outcomes | `c.prob.2.5.1–2.5.2` | Core. Finite equiprobability and favorable-over-total counting are covered, with the equal-likelihood assumption explicit. |
| §2.6 Probability as a Continuous Set Function | `c.prob.2.6.1–2.6.2` | Supporting foundation. Continuity for increasing/decreasing event sequences is useful theory; GATE questions can usually use finite additivity directly. |
| §2.7 Probability as a Measure of Belief | `c.prob.2.7.1–2.7.2` | Supporting conceptual discussion of subjective probability and coherent belief; no distinct syllabus objective or mapped PYQ needs this formulation. |
| §3.1 Introduction | `c.prob.3.1.1` | Core orientation to updating probabilities when information is learned. |
| §3.2 Conditional Probabilities | `c.prob.3.2.1–3.2.3` | Core. Conditional probability, multiplication rule, chain rule and total probability are covered, including the positive-conditioning-probability condition. |
| §3.3 Bayes’s Formula | `c.prob.3.3.1–3.3.3` | Core. Bayes reversal, partition denominator and diagnostic/posterior interpretation are covered. |
| §3.4 Independent Events | `c.prob.3.4.1–3.4.3` | Core. Independence, mutual independence and pairwise independence are distinguished; disjoint positive-probability events are not independent. |
| §3.5 Conditional Probability Is a Probability | `c.prob.3.5.1–3.5.2` | Supporting theorem. It justifies treating a fixed condition as a new probability model; event independence and Bayesian calculations already cover the operational DA needs. |
| §4.1 Random Variables | `c.prob.4.1.1–4.1.2` | Core. Random variables as functions, induced distributions and CDF properties are covered. |
| §4.2 Discrete Random Variables | `c.prob.4.2.1–4.2.4` | Core. Countable support, pmf normalization, aggregation of outcomes, plus a finite discrete-uniform law and a solved mean/variance drill. The uniform supplement closes the syllabus gap; it is not a Ross-text claim. |
| §4.3 Expected Value | `c.prob.4.3.1–4.3.2` | Core. Discrete expectation with integrability conditions and linearity (without requiring independence) are covered. |
| §4.4 Expectation of a Function | `c.prob.4.4.1–4.4.2` | Core. LOTUS and computing transformed moments from the original pmf are covered. |
| §4.5 Variance | `c.prob.4.5.1–4.5.2` | Core. Variance, SD and moment formula are covered with finite-moment conditions and shift/scale effects. |
| §4.6 Bernoulli and Binomial Random Variables | `c.prob.4.6.1–4.6.3` | Core named discrete distributions. Bernoulli/binomial pmfs, assumptions, mean/variance and event-count interpretation are covered. |
| §4.7 Poisson Random Variable | `c.prob.4.7.1–4.7.2` | Core named distribution. Poisson pmf, rate/mean/variance, and standard counting interpretation are covered. |
| §4.8 Other Discrete Distributions: geometric, negative binomial, hypergeometric, zeta | `c.prob.4.8.1–4.8.4` | Geometric, negative-binomial and hypergeometric laws are supporting distribution practice. Zeta/Zipf is an extension beyond the named DA families. These do not displace explicit uniform/Bernoulli/binomial/Poisson coverage. |
| §4.9 Expected Value of Sums | `c.prob.4.9.1–4.9.2` | Core. Indicators, expectation of sums and variance/covariance structure are covered; additional covariance details appear in Ch. 7. |
| §4.10 CDF Properties | `c.prob.4.10.1–4.10.2` | Core. CDF monotonicity, jumps, endpoint conventions and interval probabilities are covered. |

## Official DA syllabus crosswalk

| GATE DA topic | Coverage IDs | Finding |
|---|---|---|
| Counting: permutations and combinations | `c.prob.1.2.1–1.6.2` | Covered. Multinomial grouping and stars-and-bars are included as counting tools. The 2026 weak-composition PYQ confirms §1.6 is directly relevant. |
| Probability axioms and sample space | `c.prob.2.1.1–2.5.2` | Covered, including sample-space/event operations, axioms, their common consequences and finite equiprobability. |
| Events and independent events | `c.prob.2.2.1–2.4.2`, `c.prob.3.2.1`, `c.prob.3.4.1–3.5.2` | Covered. Independence is separated from disjointness and pairwise independence from mutual independence. |
| Marginal, conditional and joint probability; Bayes theorem | `c.prob.3.1.1–3.5.2`; random-variable versions in `c.prob.6.1.1–6.1.3`, `6.4.1`, `6.5.1` | Covered across Chs. 3 and 6. Ch. 3 supplies event conditioning/Bayes; Ch. 6 supplies joint and conditional distributions. |
| Mean, median, mode and standard deviation | `c.prob.4.3.1`, `4.5.1`, `c.prob.DA.1` | Covered across Ch. 4 and the DA descriptive-statistics bridge. |
| Random variables, discrete pmf, CDF | `c.prob.4.1.1–4.2.4`, `4.10.1–4.10.2` | Covered, including finite-support discrete uniform, CDF endpoint behavior and mass aggregation. |
| Uniform, Bernoulli, binomial and Poisson distributions | `c.prob.4.2.3–4.2.4`, `4.6.1–4.6.3`, `4.7.1–4.7.2`, `c.prob.5.3.1–5.3.2` | Covered. Both finite discrete uniform and continuous uniform have distinct treatments. |
| Conditional expectation and variance | `c.prob.7.5.1–7.5.3`, plus conditional laws `c.prob.6.4.1`, `6.5.1` | Covered in Chs. 6–7. |
| Covariance and correlation | `c.prob.4.9.2`, `c.prob.7.4.1–7.4.2` | Covered in Chs. 4 and 7. |
| Continuous RVs/PDF; exponential and normal laws; standard normal; t and chi-square | `c.prob.5.1.1–5.1.2`, `5.4.1–5.4.2`, `5.5.1–5.5.2`, `c.prob.DA.3–DA.4`, `c.prob.7.8.1–7.8.2` | Covered outside this owned chapter range. |
| Conditional PDF | `c.prob.6.5.1–6.5.3` | Covered outside this range. |
| Central limit theorem | `c.prob.8.1.1`, `8.3.1–8.3.2` | Covered outside this range with assumptions and standardized sum/sample-mean forms. |
| Confidence intervals; z, t and chi-square tests | `c.prob.DA.3`, `DA.5–DA.14` | Covered in the DA inference bridge outside this range. |

## Gaps and scope limits

The only DA-relevant gap found in these chapters was discrete uniform: the official syllabus names uniform among the discrete probability laws, while the Ross Ch. 4 source does not give that finite law. I added `c.prob.4.2.3` with its finite-support pmf, mean and variance, plus the original solved drill `c.prob.4.2.4`. This is explicitly marked as a syllabus-aligned supplement, not attributed to Ross. The existing continuous-uniform concepts remain separate.

Ross examples and end-of-chapter exercises are not a checklist of topic coverage. Their omitted numbering is recorded in the chapter coverage notes and original exercise inventory; an omitted problem is not treated here as an absent concept. No further syllabus topic omission was identified across Chs. 1–4 after the discrete-uniform addition. This is a DA crosswalk only; it makes no claim about the separate MA or ST syllabi.
