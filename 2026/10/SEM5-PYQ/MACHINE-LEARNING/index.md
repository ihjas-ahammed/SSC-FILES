# Machine Learning I (MAT6EJ303, Sem 5 elective): index

Sources (in this folder):
- `syllabus.pdf`: Machine Learning I syllabus, Units 1–23 plus Module V (open ended).
- `books/machine-learning-textbook-module-N.pdf`: cuts from Bishop, *Pattern Recognition and Machine Learning* (2006), the syllabus textbook.
  - Module I: Ch. 1 (printed pp. 1–66) and Sec. 2.3 (pp. 78–112).
  - Module II: Ch. 3 (pp. 137–177).
  - Module III: Ch. 4 (pp. 179–224).
  - Module IV: Ch. 5 (pp. 225–290).
- `pyq/`: the probability and statistics papers that cover the module's topics (see the PYQ table).

Page numbers are the book's printed numbers. The cut files keep printed page = PDF page − 18 for Module I and Module II, and − 17 for Module III and Module IV.

## Syllabus unit → textbook map

| Module | Unit | Syllabus content | Bishop section (printed page) |
|---|---|---|---|
| I | 1 | Review of probability theory, density and distribution functions | 1.2 (12), 1.2.1 Probability densities (17) |
| I | 2 | Expectation and covariance, Bayesian probabilities | 1.2.2 Expectations and covariances (19), 1.2.3 Bayesian probabilities (21) |
| I | 3 | Gaussian distribution: conditional and marginal | 1.2.4 (24), 2.3 (78), 2.3.1 Conditional Gaussian (85), 2.3.2 Marginal Gaussian (88), 2.3.3 Bayes for Gaussians (90) |
| I | 4 | Maximum likelihood and Bayesian inference for Gaussian | 2.3.4 Maximum likelihood (93), 2.3.5 Sequential (94), 2.3.6 Bayesian inference (97) |
| I | 5 | Decision theory: inference and decision, loss functions | 1.5 (38), 1.5.2 Minimizing expected loss (41), 1.5.3 Reject option (42), 1.5.4 Inference and decision (42), 1.5.5 Loss for regression (46) |
| I | 6 | Entropy, relative entropy, mutual information | 1.6 Information theory (48), 1.6.1 Relative entropy and mutual information (55) |
| II | 7 | Maximum likelihood and least squares | 3.1 Linear basis function models (138), 3.1.1 ML and least squares (140) |
| II | 8 | Regularized least squares | 3.1.4 (144) |
| II | 9 | Bias–variance decomposition | 3.2 (147) |
| II | 10 | Bayesian linear regression | 3.3 (152) |
| II | 11 | Parameter and predictive distributions | 3.3.1 Parameter distribution (152), 3.3.2 Predictive distribution (156) |
| II | 12 | Bayesian model comparison | 3.4 (161), 3.5 Evidence approximation (165) |
| III | 13 | Discriminant functions | 4.1 (181), 4.1.1 Two classes (181), 4.1.2 Multiple classes (182) |
| III | 14 | Least squares, Fisher discriminant and their relation | 4.1.4 Fisher's discriminant (186), 4.1.5 Relation to least squares (189) |
| III | 15 | Perceptron algorithm | 4.1.7 (192) |
| III | 16 | Maximum likelihood classifier | 4.2 Probabilistic generative models (196), 4.2.2 ML solution (200) |
| III | 17 | Probabilistic generative models and logistic regression | 4.2 (196), 4.3 Probabilistic discriminative models (203), 4.3.2 Logistic regression (205) |
| III | 18 | Bayesian logistic regression | 4.5 (217), 4.5.1 Laplace approximation (217), 4.5.2 Predictive distribution (218) |
| IV | 19 | Feed-forward neural networks | 5.1 (227) |
| IV | 20 | Network training and gradient descent | 5.2 (232), 5.2.4 Gradient descent (240) |
| IV | 21 | Analysis of error backpropagation | 5.3 (241), 5.3.1 (242) |
| IV | 22 | Hessian matrix and diagonal approximation | 5.4 (249), 5.4.1 Diagonal approximation (250) |
| IV | 23 | Regularization in neural networks | 5.5 (256), 5.5.2 Early stopping (259) |
| V | — | Open ended (model selection, learnability, run time) | Not in Bishop. Not in the study plan (user decision, 2026-10-16). |

## PYQ coverage (papers in `pyq/`)

Papers are matched by keyword in the question text, then checked by reading the question. Question numbers are as printed.

| File | Paper | Questions on module topics | Units |
|---|---|---|---|
| 2021-NOV.pdf | Sem 3, Probability distributions and sampling theory, Nov 2021 | Q4, Q10, Q11 (normal probabilities, sampling), Q19 (sample from normal, unknown variance) | 3 |
| 2022-APR-2016-2018.pdf | Sem 2, Probability distributions, Apr 2022 (2016–18 adm.) | Q8 (normal moments), Q11 (joint pmf, marginal), Q13 (conditional distribution), Q19 (expectation of two r.v.), Q21 (normal properties), Q25 (rectangular mgf) | 1, 2, 3 |
| 2022-APR-2019.pdf | Sem 2, Probability theory, Apr 2022 (2019 adm.) | Q12 (conditional mean and variance), Q19 (conditional distribution from joint density) | 2, 3 |
| 2022-NOV.pdf | Sem 3, Probability distributions and sampling theory, Nov 2022 | Q10 (sample variance), Q11 (standard normals), Q20 (normal properties), Q21 (chi-square mgf, mean, variance) | 3 |
| 2023-APR.pdf | Sem 2, Probability theory, Apr 2023 (C 43209) | Q8 (expectation, three coins), Q13 (conditional probability), Q17 (expectation, two dice), Q19 (joint density, marginal and conditional), Q20 (Bayes' theorem) | 2, 3 |
| 2023-NOV.pdf | Sem 3, Probability distributions and sampling theory, Nov 2023 (D 51782) | Q3 (Poisson mean and variance), Q14 (mgf of normal), Q17 (CLT, binomial to normal), Q19 (normal sample), Q21 (sample size for normal) | 3 |
| 2025-APR-D122963.pdf | Sem 2, Probability theory I, Apr 2025 (D 122963, 2024 adm.) | Q3 (expectation properties), Q8 (regression lines), Q12 (variance), Q17 (curvilinear regression), Q20 (normal distribution, additive property) | 2, 7, 8 |
| 2025-APR-D123298.pdf | Sem 2, Probability theory I, Apr 2025 (D 123298, 2024 adm.) | Q2 (pmf), Q3 (E(aX+b)), Q6 (normal mean and variance), Q8 (regression analysis), Q9 (parameter) | 1, 2, 3, 7 |
| 2025-NOV.pdf | Sem 3, Statistical inference using R, Nov 2025 (D 134566) | Maximum likelihood estimation methods, moment estimators for normal μ and σ, unbiased and consistent estimators, point estimation | 4, 7, 9 |
| 2026-APR.pdf | Sem 2, Probability theory I, Apr 2026 (D 141714, 2024 adm.) | Q6 (normal probability), Q8 (regression coefficients), Q12 (binomial mean, variance), Q14 (sum of normals), Q16 (intersection of regression lines), Q20 (covariance and data) | 2, 3, 7 |

## Coverage gaps (no PYQ on disk for these units)

- Units 5, 6 (decision theory, entropy): no question.
- Unit 8 (regularized least squares), unit 9 (bias–variance), unit 10 (Bayesian linear regression), unit 12 (Bayesian model comparison): no question.
- Units 13–23 (all of Modules III and IV: classification, logistic regression, neural networks): no question.
- Module V: not in the plan, so no question is needed.

## Not read (no text layer, scanned)

These were not checked page by page. Their titles are probability theory or distributions, so they may cover some of the gaps:
- Sem 1: Probability theory, Jan 2012 and Jan 2014.
- Sem 2: Probability distributions, May 2014 to May 2020 (7 papers); Probability theory, Apr 2020.

## Not copied

- `PYQ/Mathematics/FYUGP-Sem-2/2025/Probability Theory—I 2025 April.pdf`: same paper code (D 122963) as `2025-APR-D122963.pdf`, which was copied from the Statistics folder. The text layers differ, so the copy in the Statistics folder was used.
