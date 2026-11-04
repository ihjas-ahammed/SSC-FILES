# GATE DA Probability & Statistics syllabus audit

Source checked: the downloaded official IIT Madras document `research/GATE_2027_DA_Syllabus.pdf`, Section 1, “Probability and Statistics.” This is a scope map for the current probability course, not a claim that Ross 10e alone supplies all required DA material. All referenced chapter modules are included in the final build.

## Outcome map

| Official DA syllabus outcome | Current coverage | Where it comes from |
| --- | --- | --- |
| Counting, permutations, combinations | `c.prob.1.2.1`, `1.3.1–1.3.2`, `1.4.1`, `1.5.1` | Ross ch. 1 core |
| Probability axioms, sample space, events, independent and mutually exclusive events | `c.prob.2.1.1–2.4.2`, `c.prob.3.4.1–3.4.3` | Ross chs. 2–3 core |
| Marginal, conditional and joint probability; Bayes theorem | `c.prob.3.2.1–3.3.3`, `c.prob.6.1.1–6.1.3`, `c.prob.6.4.1–6.5.3` | Ross chs. 3 and 6 core |
| Conditional expectation and variance | `c.prob.7.5.1–7.5.3` | Ross ch. 7 core |
| Mean, median, mode, standard deviation | `c.prob.4.3.1`, `c.prob.4.5.1`, `c.prob.DA.1` | Ross ch. 4 plus DA bridge; DA.1 explicitly distinguishes sample and population spread |
| Correlation and covariance | `c.prob.7.4.1–7.4.2` | Ross ch. 7 core |
| Random variables, discrete variables and PMFs | `c.prob.4.1.1–4.2.2` | Ross ch. 4 core |
| Uniform, Bernoulli, binomial and Poisson distributions | `c.prob.4.2.3–4.2.4`, `c.prob.5.3.1–5.3.2`, `c.prob.4.6.1–4.6.3`, `c.prob.4.7.1–4.7.2` | Ross chs. 4–5 core |
| Continuous random variables and PDFs; exponential and normal distributions; standard normal | `c.prob.5.1.1–5.1.2`, `c.prob.5.3.1`, `c.prob.5.4.1–5.4.2`, `c.prob.5.5.1` | Ross ch. 5 core |
| t and chi-squared distributions | `c.prob.DA.3–DA.4` | DA inference bridge beyond Ross; exact defining assumptions and moments are stated |
| Cumulative distribution function and conditional PDF | `c.prob.4.1.2`, `c.prob.4.10.1–4.10.2`, `c.prob.5.1.1`, `c.prob.6.5.1–6.5.2` | Ross chs. 4–6 core |
| Central limit theorem | `c.prob.8.3.1–8.3.2` | Ross ch. 8 core |
| Confidence intervals | `c.prob.DA.5–DA.8`, `c.prob.DA.13` | DA inference bridge beyond Ross; known/unknown-variance means, variance, proportion, and two-mean intervals |
| z-tests, t-tests and chi-squared tests | `c.prob.DA.9–DA.12`, `c.prob.DA.14` | DA inference bridge beyond Ross; mean, proportion, two-sample/paired, variance, goodness-of-fit and independence procedures |

## DA bridge audit and changes

The original bridge was already a useful overview: it distinguished sample summaries from sampling uncertainty; stated the exact normal-sample t and chi-squared laws; gave z and t intervals for one mean, a chi-squared interval for variance, a proportion interval, and formulas for mean, variance, goodness-of-fit and independence tests. It had only sparse practice and did not define sample standard deviation explicitly.

The bridge now explicitly gives the sample standard deviation as the square root of the sample variance and adds practice for it. It adds a pooled two-sample mean confidence interval, large-sample one- and two-proportion z-test formulas, and applied questions for a known-variance z statistic, pooled and paired t statistics, a goodness-of-fit statistic, and a normal-sample variance statistic. Proportion procedures and Welch methods are useful DA-adjacent extensions; the syllabus does not prescribe a specific proportion or two-sample interval variant.

No named item in Section 1 remains without a mapped current concept after these changes and the final discrete-uniform and conditional-variance additions. This is a topic-presence audit, not a guarantee of complete exam-depth practice. The bridge does not try to teach every inference variant or detailed small-sample correction.

## Course boundary

Ross chapters 1–8 supply the selected DA probability core. Ross chapters 9–10 (Poisson processes, Markov chains, entropy/coding, simulation and variance reduction) remain clearly marked extensions: they enrich probability and computation but are not needed to meet the named DA Probability & Statistics outcomes. This DA audit does not certify a complete GATE MA or ST syllabus.
