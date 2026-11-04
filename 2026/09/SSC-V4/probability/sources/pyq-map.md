# GATE DA probability and statistics question map (2024–2026)

The three DA master papers and their matching answer keys were inspected in the local `sources/exams/` inventory. Questions below refer to the master-paper numbering, not candidate-console order. Only the DA subject section (Q11–Q65) is classified here; General Aptitude Q1–Q10 is excluded by scope. Statements and solutions in `data/pyq.js` are paraphrased and independently checked against the official final keys recorded in `sources/exams/provenance.json`.

## Mapped subject questions

| Year | Mapped questions | Coverage |
|---|---|---|
| 2024 | Q11, Q12, Q24, Q27, Q34, Q36, Q56, Q57, Q58, Q62, Q64, Q65 | Poisson/normal moments; event compatibility; Bayesian-network dependence; z-score and updated mean; waiting for a run; independent uniforms; exponential moments; Bayes; information gain; network joint mass; indicator covariance. |
| 2025 | Q11, Q19, Q20, Q21, Q26, Q31, Q34, Q35, Q36, Q39, Q40, Q41, Q45, Q54, Q60, Q61 | Tower property; CDF median; affine normal law; exponential tail; Bayesian inference; Bayes; least-squares slope; posterior classification error; chi-square; CDF event; CLT; exponential floor; complement; sample proportion; PCA variance; expectation of a count. |
| 2026 | Q19, Q20, Q28, Q34, Q44, Q45, Q53, Q54, Q57, Q62, Q63, Q64, Q65 | Finite-space probability; uniform compositions; normal/t CDF comparison; exponential memorylessness; product variance; Poisson central limit; chi-square laws; CDF properties; diagnostic Bayes; pairwise variation; zero correlation; overlapping Bernoulli sums; centering projection. |

Each mapped PYQ has a stable `p.prob.DA.YEAR.QNO` ID, official answer metadata, worked solution and trap note. Every mapped question has one separately identified original NAT practice variant in `data/pyq.similar.js`; those variants are not exam questions.

## Excluded DA questions inspected

| Year | Excluded questions | Reason |
|---|---|---|
| 2024 | Q13–Q23 | Linear algebra, graph/search algorithms, data structures, hashing, clustering and classifier-model tasks; no direct probability/statistics question. |
| 2024 | Q25–Q26, Q28–Q33, Q35, Q37–Q55 | Game-tree search, database queries, algorithms/data structures, symbolic logic, calculus, neural-network/clustering/classifier tasks and linear algebra. |
| 2024 | Q59 | The printed purported joint density is not normalized: its integral over $0<y<x<2$ is $32/5$, not 1. The official final key marks the item MTA. Excluded rather than silently repairing a malformed premise. |
| 2024 | Q60–Q61, Q63 | Limit evaluation, singular-value calculation, and image-dependent k-nearest-neighbor classification. |
| 2025 | Q12–Q18, Q22–Q25, Q27–Q30 | Matrix/calculus/logic/data-structure questions, classifier training, and clustering definitions; not direct probability/statistics tasks. |
| 2025 | Q32–Q33, Q37–Q38, Q42–Q44, Q46, Q48–Q53, Q55–Q59, Q62–Q65 | Limit/calculus and least-squares-adjacent nonprobability algebra (Q32), database/query tasks, optimization/linear algebra, neural networks, search, and deterministic algorithms or logic. Q47 is classifier-score arithmetic, not a probability model or statistical inference question. |
| 2026 | Q11–Q18, Q21–Q27, Q29–Q33, Q35–Q43 (hierarchical clustering, ML/logic, graph and database algorithms), Q46–Q52 | PCA/validation/search, geometry/linear algebra, machine-learning method matching, calculus, combinatorics without a probability experiment (Q33), clustering, databases, logic and algorithms. |
| 2026 | Q55–Q56, Q58–Q61 | Regularized regression loss, network parameter count, sorting, relational algebra/SQL, and ER-to-relational mapping. |

The grouping is by the principal tested skill. In particular, GA counting questions and database/model-complexity questions were not relabeled as probability merely because they use counts, and image- or figure-dependent ML questions were not recreated without their required figures.

## Ross chapter crosswalk and gaps

| Ross chapter | Mapped DA questions | Coverage note |
|---|---|---|
| 1 Combinatorial Analysis | 2026 Q19–Q20 | Finite equiprobable subset/composition counting. |
| 2 Axioms of Probability | 2024 Q12; 2025 Q45 | Event intersection and complementary probability. |
| 3 Conditional Probability and Independence | 2024 Q24, Q58; 2025 Q26, Q31, Q35; 2026 Q57 | Conditional independence, exact/approximate network inference, Bayes and posterior error. |
| 4 Random Variables | 2024 Q36, Q65; 2025 Q54, Q61; 2026 Q54 | Waiting-time expectation, indicators/covariance, sample proportion, CDF conventions and expectation. |
| 5 Continuous Random Variables | 2024 Q11, Q57; 2025 Q19–Q21, Q36, Q39, Q41; 2026 Q28, Q34 | Moments, CDFs, normal/exponential laws, chi-square transform and related continuous distributions. |
| 6 Jointly Distributed Random Variables | 2024 Q56, Q64; 2026 Q63–Q64 | Joint support, network joint mass, conditional mean/correlation and shared-cell dependence. |
| 7 Properties of Expectation | 2025 Q11 | Tower property. |
| 8 Limit Theorems | 2025 Q40; 2026 Q45 | Binomial normal approximation and centered Poisson limit. |
| 9 Additional Topics in Probability | — | No direct mapped question in these three DA papers. |
| 10 Simulation | — | No direct mapped question in these three DA papers. |

The DA statistics bridge items (2024 Q27 and Q34; 2024 Q62; 2025 Q34 and Q60; 2026 Q53 and Q62 and Q65) do not map cleanly to a single Ross section, so they use the existing `DA.1` descriptive-statistics or `DA.3` chi-square bridge IDs. The information-gain item is an information-theoretic extension, not a Ross theorem. This inventory covers GATE DA 2024–2026 only; it makes no claim about MA or ST papers.
