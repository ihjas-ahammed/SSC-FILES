# GATE DA probability/statistics coverage review: Ross Chapters 5–8

**Basis.** This is a learning-objective review against the Probability and Statistics entry in the local official `research/GATE_2027_DA_Syllabus.pdf` (one-page syllabus, p. 1), cross-checked against the authored Ross chapter inventories `coverage-ch05.md` through `coverage-ch08.md` and the concept banks. It identifies topics needed for GATE DA and records their concrete concept IDs. “Covered” means the relevant definition, conditions, or computational rule is represented; it does not mean every Ross example or exercise was copied. The source audit found no substantive omission among the DA topics mapped below.

## GATE DA topic crosswalk

| Official syllabus topic | Concept IDs | Review |
|---|---|---|
| Counting: permutations and combinations | `c.prob.1.2.1`, `1.3.1–1.3.2`, `1.4.1–1.4.2`, `1.5.1–1.5.2`, `1.6.1–1.6.2` | Covered in Ch. 1. Basic count rules and labeled/unlabeled distinctions support probability calculations. |
| Probability axioms and sample space | `c.prob.2.1.1`, `2.2.1–2.2.2`, `2.3.1–2.3.2`, `2.4.1–2.4.2`, `2.6.1–2.6.2` | Covered in Ch. 2, including event operations, additivity, continuity, and inclusion–exclusion. |
| Events, independence, mutually exclusive events | `c.prob.2.2.1–2.2.2`, `2.4.2`, `c.prob.3.2.1`, `3.4.1–3.4.3`, `3.5.1` | Covered in Chs. 2–3. Independence is distinguished from disjointness, and pairwise from mutual independence. |
| Joint, marginal and conditional probability; Bayes theorem | `c.prob.3.1.1`, `3.2.1–3.2.3`, `3.3.1–3.3.3`, `3.5.1–3.5.2`; random-variable versions: `c.prob.6.1.1–6.1.3`, `6.4.1`, `6.5.1` | Covered in Chs. 3 and 6. The Ch. 6 notes explicitly explain a joint law as a table/cloud for pairs, a marginal as adding away the other coordinate, and conditioning as restricting and rescaling after information arrives. |
| Conditional expectation and variance | `c.prob.6.4.1`, `6.5.1`; `c.prob.7.5.1–7.5.3` | Covered for discrete and continuous conditioning. Ch. 7 defines conditional variance both as a mean squared distance from the conditional mean and as a conditional second-moment difference, then gives the tower and total-variance laws. |
| Mean, median, mode and standard deviation | `c.prob.4.3.1`, `4.5.1`; `c.prob.DA.1` | Covered: mean/variance/SD foundations in Ch. 4; mean, median, mode and SD bridge in the DA inference notes. |
| Correlation and covariance | `c.prob.4.9.2`, `c.prob.7.4.1–7.4.2` | Covered with units-free correlation, bounds, zero-covariance caveat, and variance of sums. |
| Random variables, discrete variables and pmfs | `c.prob.4.1.1–4.1.2`, `4.2.1–4.2.2`, `4.3.1` | Covered in Ch. 4, including support, induced law, CDF, and mass-function normalization. |
| Uniform, Bernoulli and binomial distributions | `c.prob.4.2.3–4.2.4`, `4.6.1–4.6.3`, `c.prob.5.3.1–5.3.2` | Discrete uniform, Bernoulli/binomial and continuous uniform are covered. The separate discrete-uniform supplement was added after this review. |
| Continuous random variables and probability density function (PDF) | `c.prob.5.1.1–5.1.2` | Covered: nonnegative density with unit integral, event probabilities as area, CDF recovery and zero point mass. The intuition notes distinguish density height from probability. |
| Exponential distribution | `c.prob.5.5.1–5.5.2` | Covered with rate parameterization, density, survival, moments, memorylessness, and hazard rate. |
| Poisson distribution | `c.prob.4.7.1–4.7.2`, `c.prob.6.3.4`, `c.prob.6.4.2`, `c.prob.8.5.4`, `c.prob.8.6.1` | Covered as a discrete law, a limit for rare events, a sum law, and conditional allocation. Ch. 8 also presents approximation conditions/bounds. |
| Normal and standard normal distributions | `c.prob.5.4.1–5.4.2`, `c.prob.6.3.4`, `c.prob.7.8.1–7.8.2` | Covered: density, standardization, affine transforms, normal sums, jointly normal combinations, and normal sample results. |
| t and chi-squared distributions | `c.prob.6.5.2`, `c.prob.7.8.2`, `c.prob.DA.3–DA.4` | Covered. DA bridge records their defining pivots and degrees of freedom; Ch. 7 gives the normal sample-variance chi-square result and independence. |
| Cumulative distribution function (CDF) | `c.prob.4.1.2`, `4.10.1–4.10.2`, `c.prob.5.1.1–5.1.2`, `c.prob.6.1.1`, `6.4.1`, `6.5.1` | Covered for discrete, continuous, joint, and conditional laws, including intervals, atoms, rectangle probabilities and conditional CDFs. |
| Conditional PDF | `c.prob.6.5.1–6.5.3` | Covered: conditional density and CDF, support depending on the observed value, conditioning on events, normal slices and latent-variable updating. |
| Central limit theorem | `c.prob.5.4.3`, `c.prob.8.1.1`, `8.3.1–8.3.2` | Covered. The classical iid statement specifies finite mean and strictly positive finite variance; sum and sample-mean standardization and continuity correction are included. The friendly note clarifies that the CLT describes a distribution across repeated samples. |
| Confidence intervals | `c.prob.DA.5–DA.8`, `DA.13` | Covered in the DA inference bridge: known/unknown variance mean intervals, variance and proportion intervals, and difference of means. |
| z-test and t-test | `c.prob.DA.9–DA.10`, `DA.12`, `DA.14` | Covered: null/p-value/error concepts, one- and two-sample/paired procedures, and large-sample proportion tests. |
| Chi-squared tests | `c.prob.DA.3`, `DA.7`, `DA.11` | Covered: variance interval/test pivot, goodness-of-fit and independence tests. |

## Ross subsection inventory and DA boundary

| Ross section in Chs. 5–8 | Concepts | GATE DA relevance |
|---|---|---|
| §5.1 continuous density and CDF | `5.1.1–5.1.2` | Direct: PDF/CDF and interval probability. |
| §5.2 continuous expectation and variance | `5.2.1–5.2.3` | Direct: expectation and variance calculations. |
| §5.3 continuous uniform | `5.3.1–5.3.2` | Direct: named uniform distribution. |
| §5.4 normal; §5.4.1 normal approximation to binomial | `5.4.1–5.4.3` | Direct: normal/standard normal; binomial approximation supports the CLT toolkit. |
| §5.5 exponential; §5.5.1 hazard | `5.5.1–5.5.2` | Exponential is direct; hazard is useful lifetime extension. |
| §5.6 other continuous distributions; §§5.6.1 gamma, 5.6.2 Weibull, 5.6.3 Cauchy, 5.6.4 beta, 5.6.5 Pareto | `5.6.1–5.6.2` | Ross enrichment beyond the syllabus’s named continuous families. Gamma is useful for recognizing chi-square, but DA chi-square definitions/pivots are covered in `DA.3` and `7.8.2`. Weibull, Cauchy, beta, and Pareto are not GATE DA requirements. |
| §5.7 transformations | `5.7.1–5.7.2` | Supporting technique for deriving laws, including inference pivots. |
| §6.1 joint distributions, marginals and joint CDF | `6.1.1–6.1.3` | Direct: joint/marginal probability and joint CDF. |
| §6.2 independence | `6.2.1–6.2.2` | Direct: independent random variables and transforms. |
| §6.3 sums; §§6.3.1 uniforms, 6.3.2 gamma, 6.3.3 normal, 6.3.4 Poisson/binomial | `6.3.1–6.3.4` | Direct for probability calculations and named distributions; gamma closure is supporting context. |
| §6.4 conditional discrete distributions | `6.4.1–6.4.2` | Direct: conditional law and joint/marginal relationships. |
| §6.5 conditional continuous distributions | `6.5.1–6.5.3` | Direct: conditional PDF/CDF. Bivariate normal and Bayesian latent-variable cases are enrichments. |
| §6.6 order statistics | `6.6.1–6.6.2` | Supporting extension; helps interpret sample extrema. |
| §6.7 joint transformations | `6.7.1–6.7.2` | Supporting technique; gamma proportion link is useful for beta/chi-square theory. |
| §6.8 exchangeability | `6.8.1–6.8.2` | Enrichment beyond the explicit syllabus list; useful contrast with independence and sampling without replacement. |
| §7.1–7.3 expectation, linearity and event counts | `7.1.1`, `7.2.1–7.2.2`, `7.3.1–7.3.2` | Direct foundations for expectation, indicators and distribution summaries. |
| §7.4 covariance, correlation and variance sums | `7.4.1–7.4.2` | Direct. |
| §7.5 conditional expectation; total expectation/variance | `7.5.1–7.5.3` | Direct; definitions and total-variance decomposition included. |
| §7.6 best predictors; §7.7 MGFs; §7.8 jointly normal variables; §7.9 Stieltjes expectation | `7.6.1–7.9.1` | Useful Ross extensions. DA inference relies on the normal-sample result in `7.8.2`; MMSE, MGFs, and Stieltjes details are not explicit GATE topics. |
| §8.1–8.3 LLN, inequalities and CLT; §8.4 strong law | `8.1.1`, `8.2.1–8.2.2`, `8.3.1–8.3.2`, `8.4.1` | CLT is direct; LLN and inequalities provide supporting intuition. Strong law is extension. |
| §8.5–8.6 refinements and Poisson approximation | `8.5.1–8.5.4`, `8.6.1` | Supporting limit-theorem enrichment; Poisson is a named DA distribution. |
| §8.7 Lorenz curve and Gini index | `8.7.1–8.7.2` | Statistical enrichment; not listed in the DA syllabus. |

### Findings and limits

All named syllabus topics are mapped above. This review initially found a discrete-uniform gap: the syllabus lists uniform among the discrete laws and again among continuous laws. The final chapter 1–4 review resolved it with the explicit finite discrete-uniform law and solved drill `c.prob.4.2.3–4.2.4`. All other named distributions and inference procedures have an explicit destination. The Ross sections flagged as extensions remain useful preparation but are not represented here as official DA requirements. Chapter coverage files retain the honest list of omitted examples/exercises; this crosswalk does not claim exhaustive reproduction of Ross.
