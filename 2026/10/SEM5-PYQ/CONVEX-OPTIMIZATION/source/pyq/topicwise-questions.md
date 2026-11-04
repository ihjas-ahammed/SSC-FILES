# Convex Optimization (MAT5EJ303(2)): topic-wise questions from past papers on disk

Wording is from the PDF text layer. [CHECK] marks items with garbled symbols or tableaux: check them against the page image before use.
No Convex Optimization paper is on disk. The nearest courses are Linear Programming (MAT 6B 13 E02 / MTS 5B 08) and Multivariable Calculus. Syllabus numbers are printed numbers (19 and 20 appear twice in the syllabus).

## Source codes
| Code | Paper (folder under `GitHub/SSC-FILES/`) |
|---|---|
| LP-25 | MTS 5B 08 Linear Programming, Nov 2025 (`pyq/Mathematics/MAT5EJ306/2025/`) |
| LP-S5-21 | Linear Programming, Sem 5, Nov 2021 (2019 adm) (`PYQ/Mathematics/Sem-5/2021/`) |
| LP-S5-22a | Linear Programming, Sem 5, Nov 2022 (2019 adm) |
| LP-S5-22b | Linear Programming, Sem 5, Nov 2022 (2020 onwards) |
| LP-S5-u1 | Linear Programming, Sem 5, undated, "Linear Programming.pdf" |
| LP-S5-u2 | Linear Programming, Sem 5, undated, "LINEAR PROGRAMMING.pdf" |
| LP-S6-22 | Linear Programming, Sem 6, March 2022 (2014–2018 adm), MAT 6B 13 (E02) |
| LP-S6-u | Linear Programming, Sem 6, undated, MAT 6B 13 (E02) |
| LMM-S5-21 / LMM-S5-u | Linear Mathematical Models, Sem 5 (2021 / undated) |
| LMM-24 / LMM-25 | MTS 5D 03 Linear Mathematical Models, Sem 5, 2024 / Nov 2025 |
| MV-S6-19 | Calculus of Multivariable, Sem 6, 2019 admission, March 2022 |
| MV-S6-u1 / MV-S6-u2 / MV-S6-u3 | Calculus of Multivariable, Sem 6, undated (three files) |
| MV-S3-25 / MV-S3-26 | MAT3CJ201 Multivariable Calculus, 2025 / 2026 |
| MV-PG-23 | PG Sem 3, Multivariable Calculus and Geometry, Nov 2023 |
| ME-24 / ME-25 | MAT3MN206 Mathematical Economics, 2024 / 2025 |
| MTE-ssc | MAT2MN106 Mathematical Tools for Economics II (ssc-v3 copy) |

## Module I: Review of multivariable calculus (gradient, directional derivative, critical points, Hessian, chain rule)
1. [MV-S6-19] Find the directional derivative of f(x, y) = x² sin 2y at the point printed as "(1, π/4)" in direction v = 3i + 4j. [CHECK: point garbled in text layer]
2. [MV-S6-u1] Find the gradient of f(x, y) = y ln x + xy² at the point (1, 2).
3. [MV-S6-u2] Find the gradient of f(x, y) = x² + y² + 1 at (1, 2). Use the result to find the directional derivative of f at (1, 2) in the direction from (1, 2) to (2, 3).
4. [MV-S6-19] Find the relative extrema of f(x, y) = x² + y² + 2x + 4y. [CHECK: sign garbled]
5. [MV-S6-u1] Find the relative extrema of f(x, y) = 2x² + y² + 8x − 6y + 20.
6. [MV-S3-26] Find the relative extrema of f(x, y) = x³ + y² − 2xy + 7x − 8y + 2.
7. [MV-S6-u2] Find the critical points of f(x, y) = −x³ + 4xy − 2y² + 1.
8. [MV-S3-25] Use the chain rule to find dw/dt, where w = 2x³y²z, x = t, y = cos t, z = t sin t.
9. [MV-S6-19] Find the Jacobian for the change of variables x = r cos θ, y = r sin θ.
10. [MV-S6-u3, MCQ] Find the second-order partial derivatives of f(x, y) = 2xy² − 3x² + xy³. (A) 4x + 6xy (B) 6xy (C) 2x + 6xy (D) 0
11. [MV-PG-23] State the chain rule for multivariable functions.
12. [MV-S6-u3, MCQ] Let f have continuous second-order partial derivatives near a critical point (a, b), and D(x, y) = f_xx f_yy − f_xy². If D(a, b) > 0 and f_xx(a, b) > 0, then f(a, b) is a ______: (A) relative minimum value (B) saddle point (C) relative maximum value (D) none of these.

Lagrange multipliers (constrained stationarity; a bridge to Module IV):
13. [ME-24] Explain the meaning and applications of Lagrange multipliers.
14. [ME-25] Write a short note on the significance of the Lagrange multiplier.
15. [MTE-ssc] Lagrange multiplier is a strategy for finding the local maxima and minima of a function subject to equality constraints. Examine.

## Module II: Convexity (affine and convex sets, hyperplanes, convex hull, cones, extreme points)
16. [LP-25] Define a hyperplane in R².
17. [LP-25] Draw and shade a convex subset of R² having no extreme points.
18. [LP-S5-u1] Define a polyhedral convex set. Give an example of a polyhedral convex set in R².
19. [LP-S5-u2] Define a convex subset of R². Also draw a convex set and a non-convex set in R².
20. [LP-S5-u2] Let S be a convex set in R². Define an extreme point of S.
21. [LP-S5-u2] Define a hyperplane and a closed half-space of Rⁿ.
22. [LP-S6-22] Define a vertex of a convex set.
23. [LP-S6-22] Find the convex hull of {x₁, x₂} ⊂ R².
24. [LP-S6-22] Prove that the intersection of two convex sets is a convex set.
25. [LP-S6-22] Show that the set S = {(x₁, x₂): 5x₁ + 2x₂ ≥ 10, 2x₁ + 5x₂ ≥ 10} is convex.
26. [LP-S6-22] (a) Define a convex linear combination of a finite set of vectors. (b) Show that the set of all convex linear combinations of a finite number of vectors u₁, …, u_k ∈ Rⁿ is a convex set.
27. [LP-S6-22] Prove that the set of feasible solutions to an LPP is a convex set.
28. [LP-S6-u] Define a convex cone of a set.
29. [LP-S6-u] Show that a hyperplane in Rⁿ is a convex set.
30. [LP-S6-u] Examine whether the set S = {(x₁, x₂): x₁, x₂ ≥ 1, x₁ ≥ 0, x₂ ≥ 0} is convex or not.
31. [LP-S6-u] Show that the set of all convex combinations of a finite number of points x₁, …, x_k is a convex set.
32. [LP-S6-u] Let A ⊆ Rⁿ be any set. Prove that the convex hull of A is the set of all finite convex combinations of vectors in A.
33. [LP-S5-22a] Draw and shade the region of a bounded polyhedral convex subset of R² in the first quadrant.
34. [LP-S5-22b] Draw and shade a bounded polyhedral convex subset in R².
35. [LP-S5-21] Give an example of a bounded polyhedral convex subset in R.

Convex functions, quasi-convex and log-convex (syllabus items 14–16): no question on disk.

## Module III: Convex optimization problems (LP, standard form, feasibility, simplex, graphical)
36. [LP-S5-22b] Using the geometrical method, solve: Maximize f(x, y) = 5x + 2y subject to x + 3y ≤ 14, 2x + y ≤ 8, x, y ≥ 0. [CHECK: a stray glyph appears in the text layer before each constraint]
37. [LP-S5-u1] Using the graphical method, maximize f(x, y) = x + y subject to 2x − y ≤ 3 (text layer: "8x − y ≤ 3"), 2x + y ≤ 12, 0 ≤ x ≤ 4, 0 ≤ y ≤ 6. [CHECK: coefficient]
38. [LP-S5-u2] Solve graphically: Maximize f(x, y) = 30x + 50y subject to 2x + y ≤ 8, x + 2y ≤ 10, x, y ≥ 0. [CHECK]
39. [LP-S6-u] Solve graphically: Maximize 5x₁ + 3x₂ subject to x₁ + x₂ ≤ 6, 2x₁ + 3x₂ ≥ 6, 0 ≤ x₁ ≤ 4, 0 ≤ x₂ ≤ 4.
40. [LP-S5-21] Solve the canonical LP using the simplex algorithm (tableau in the paper). [CHECK: tableau garbled]
41. [LP-S5-u2] Solve the canonical LP using the simplex algorithm, minimum tableau in the paper. [CHECK: tableau garbled]
42. [LP-S6-u] Solve by the simplex method: Maximize f(x) = x₁ + 2x₂ subject to x₁ + 2x₂ ≤ 3, x₁ + x₂ ≤ 2, x₁ ≤ 1, x₁, x₂ ≥ 0.
43. [LP-S6-22] Use the simplex method to solve: Maximize Z = 4x₁ + 10x₂ subject to 2x₁ + x₂ ≤ 50, 2x₁ + 5x₂ ≤ 100, 2x₁ + 3x₂ ≤ 90, x₁, x₂ ≥ 0.
44. [LP-S6-u] Write in standard form: Maximize f = 5x₁ + 2x₂ − x₃ subject to 2x₁ − x₂ + 6x₃ ≤ 6, 3x₁ + 5x₂ − 2x₃ ≥ 3, x₁ + 5x₂ + x₃ = 6, x₁ ≥ 0, x₃ ≥ 0, x₂ unrestricted in sign.
45. [LP-S6-22] Write the standard form of an LPP.
46. [LP-S6-u] Write the characteristics of the standard form of an LPP.
47. [LP-S6-u] Explain the difference between standard form and canonical form of an LPP.
48. [LP-S6-u] Explain feasible and basic feasible solutions of an LPP.
49. [LP-S6-22] What is meant by a feasible solution to an LPP?
50. [LP-S6-22] Reduce the feasible solution x₁ = 2, x₂ = 4, x₃ = 1 of 2x₁ − x₂ + 2x₃ = 2, x₁ + 4x₂ = 18 to a basic feasible solution.
51. [LP-S6-22] Does a feasible solution exist for: Maximize z = 2x₁ + 10x₂ subject to 3x₁ − x₂ ≥ 1, −x₁ + x₂ ≥ 2, x₁, x₂ ≥ 0? Give reasons.

No question on disk for quadratic programming, geometric programming, generalized inequality constraints, or vector optimization (syllabus items 19–22).

## Module IV: Duality (Lagrange dual, dual LP, complementary slackness, minimax)
52. [LMM-24] Write the dual of: Maximize z = 2x₁ + 5x₂ subject to x₁ + x₂ ≤ 10, 2x₁ + x₂ ≤ 8, x₁, x₂ ≥ 0.
53. [LMM-25] Write the dual of: Minimize w = 7y₁ + 5y₂ + 8y₃ subject to 3y₁ + 2y₂ + y₃ ≥ 10, 4y₁ + 5y₂ ≥ 25, y₁, y₂, y₃ ≥ 0.
54. [ME-24] Distinguish between the primal and the dual problem in linear programming.
55. [LP-S5-21] State the dual canonical minimization of the LP given in the paper. [CHECK: problem garbled]
56. [LP-S5-22b] If a canonical maximization LP is unbounded, prove that the dual canonical minimization LP is infeasible.
57. [LP-S5-u1] Same as item 56, worded differently in the undated paper.
58. [LP-S5-u2] What is complementary slackness of a dual canonical LP?
59. [LP-25] What is complementary slackness of a dual canonical LP?
60. [LP-S5-u1] Prove that a pair of feasible solutions of dual canonical LPs exhibits complementary slackness if and only if both are optimal.
61. [LP-25] State the Von Neumann Minimax Theorem.
62. [LP-S5-u1] Solve the dual canonical LP given in the paper (tableau). [CHECK: tableau garbled]
63. [LMM-S5-u] Use duality to solve: Minimize w = 3y₁ + 2y₂ subject to 2y₁ + 3y₂ ≥ 60, 3y₁ + 4y₂ ≥ 40, y₁, y₂ ≥ 0. [CHECK: marks]

Saddle point and KKT: no question on disk. Item 12 is a saddle-point MCQ in Module I, not a theory question.

## Coverage summary
| Syllabus module | Questions | Gap |
|---|---|---|
| I (calculus, Hessian) | 12 | Hessian eigenvalues not asked directly |
| II (convexity) | 20 | convex functions, quasi-convex, log-convex (items 14–16); generalized inequalities (items 11, 13, 17) |
| III (convex problems) | 16 | quadratic, geometric programming, generalized inequality constraints, vector optimization |
| IV (duality) | 12 | Lagrange dual function, saddle point theory, KKT, theorems of alternatives |
| V (open-ended) | 0 | open ended, no past paper |

The 2020 March LP paper (`PYQ/Mathematics/Sem-6/2020/Linear programming 2020 March.pdf`) and the other Sem-6 2020 files have no text layer. They were not searched.
