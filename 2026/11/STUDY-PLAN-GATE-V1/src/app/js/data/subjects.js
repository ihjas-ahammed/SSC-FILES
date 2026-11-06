/* =========================================================================
   GATE DATA SCIENCE & AI (GATE DA) CURRICULUM & MODULE SPECIFICATION
   Master Exam Date: February 1, 2027 (Single GATE Exam Milestone)
   ========================================================================= */

export const MODULE_LABEL = { "1": "I", "2": "II", "3": "III", "4": "IV" };
export const MOD_ROMAN = { "1": "Module I", "2": "Module II", "3": "Module III", "4": "Module IV" };
export const MODS = ["1", "2", "3", "4"];

export const DEPTS = {
  gate_da: {
    label: "GATE Data Science & AI",
    sub: "Math Foundations · Core Systems · Machine Learning & AI",
    ids: ["LA", "CO", "PS", "PDSA", "DB", "ML", "AI", "GA"]
  }
};

export const UNIT_MODULE = {
  "LA": "11111111122222222222233333333334444444444",
  "CO": "1111111222222222333333444444444",
  "PS": "11111122222233333333344444444",
  "PDSA": "1111111111111111111111111122222222222222222233333333333333333334444444444444444444444444444444",
  "DB": "11111111111111111111122222222222222222233333333333333333333333444444444444444444",
  "ML": "1111111111111111111222222222222222222333333333333344444444444444",
  "AI": "11111111122222222333333333444444444444444444",
  "GA": "11111111222222223333333334444"
};

export const SYLLABUS_HOURS_MAP = {
  "LA": [
    0.75,
    0.5,
    0.83,
    0.83,
    0.75,
    0.75,
    1.0,
    0.83,
    0.5,
    0.5,
    0.67,
    0.58,
    0.67,
    0.75,
    0.75,
    0.5,
    0.75,
    0.33,
    0.75,
    0.75,
    0.67,
    0.58,
    0.33,
    0.83,
    1.0,
    0.67,
    1.0,
    1.0,
    0.33,
    0.75,
    0.33,
    1.0,
    0.83,
    1.0,
    0.58,
    1.17,
    0.58,
    0.33,
    0.67,
    0.58,
    0.33
  ],
  "CO": [
    0.67,
    0.75,
    0.67,
    0.83,
    0.75,
    0.5,
    0.83,
    0.5,
    0.75,
    0.67,
    0.75,
    0.5,
    0.67,
    0.83,
    0.67,
    0.42,
    0.83,
    0.75,
    0.75,
    0.92,
    0.83,
    0.5,
    0.58,
    0.33,
    1.0,
    0.67,
    0.42,
    0.67,
    0.83,
    0.67,
    0.42
  ],
  "PS": [
    0.83,
    0.5,
    1.0,
    0.5,
    1.17,
    0.67,
    1.0,
    0.75,
    0.75,
    0.75,
    0.75,
    0.58,
    0.83,
    0.92,
    0.83,
    0.58,
    1.0,
    0.75,
    1.0,
    0.83,
    0.67,
    0.83,
    0.5,
    0.92,
    1.0,
    0.5,
    1.0,
    0.83,
    0.67
  ],
  "PDSA": [
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0
  ],
  "DB": [
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0
  ],
  "ML": [
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0
  ],
  "AI": [
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0
  ],
  "GA": [
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0,
    1.0
  ]
};

export const SUBJECTS = {
  "LA": {
    "id": "LA",
    "stream": "gate_da",
    "role": "Phase 1 \u00b7 Course 1 (11.0m)",
    "name": "Linear Algebra",
    "shortName": "Linear Algebra",
    "examDate": "2027-02-01",
    "totalUnits": 41,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#EEF2FF",
      "bannerBg": "#E0E7FF",
      "border": "#6366F1"
    },
    "iconId": "icon-solid-state",
    "units": [
      {
        "u": 1,
        "text": "Vectors and Linear Combinations (1)"
      },
      {
        "u": 2,
        "text": "Chapter 1 Final Exercises & Problem Set 1.3 (2)"
      },
      {
        "u": 3,
        "text": "Spaces of Vectors (3)"
      },
      {
        "u": 4,
        "text": "The Nullspace of A: Solving Ax = 0 (4)"
      },
      {
        "u": 5,
        "text": "The Rank and the Row Reduced Form (5)"
      },
      {
        "u": 6,
        "text": "The Complete Solution to Ax = b (6)"
      },
      {
        "u": 7,
        "text": "Independence, Basis and Dimension (7)"
      },
      {
        "u": 8,
        "text": "Dimensions of the Four Subspaces (8)"
      },
      {
        "u": 9,
        "text": "Chapter 3 Final Exercises & Problem Set 3.6 (9)"
      },
      {
        "u": 10,
        "text": "Vectors and Linear Equations (10)"
      },
      {
        "u": 11,
        "text": "The Idea of Elimination (11)"
      },
      {
        "u": 12,
        "text": "Elimination Using Matrices (12)"
      },
      {
        "u": 13,
        "text": "Rules for Matrix Operations (13)"
      },
      {
        "u": 14,
        "text": "Inverse Matrices (14)"
      },
      {
        "u": 15,
        "text": "Elimination = Factorization: A=LU (15)"
      },
      {
        "u": 16,
        "text": "Chapter 2 Final Exercises & Problem Set 2.7 (16)"
      },
      {
        "u": 17,
        "text": "The Complete Solution to Ax = b (17)"
      },
      {
        "u": 18,
        "text": "Chapter 3 Final Problem Set (Problem Set 3.6) (18)"
      },
      {
        "u": 19,
        "text": "The Properties of Determinants (19)"
      },
      {
        "u": 20,
        "text": "Permutations and Cofactors (20)"
      },
      {
        "u": 21,
        "text": "Cramer's Rule, Inverses, Volumes & Ch 5 Exercises (21)"
      },
      {
        "u": 22,
        "text": "Lengths and Dot Products (22)"
      },
      {
        "u": 23,
        "text": "Chapter 1 Final Exercises & Problem Set 1.3 (23)"
      },
      {
        "u": 24,
        "text": "Orthogonality of the Four Subspaces (24)"
      },
      {
        "u": 25,
        "text": "Projections (25)"
      },
      {
        "u": 26,
        "text": "Least Squares Approximations (26)"
      },
      {
        "u": 27,
        "text": "Orthogonal Bases and Gram-Schmidt & Ch 4 Exercises (27)"
      },
      {
        "u": 28,
        "text": "Positive Definite Matrices & Quadratic Forms (28)"
      },
      {
        "u": 29,
        "text": "Chapter 6 Review Exercises & Table of Eigenvalues (29)"
      },
      {
        "u": 30,
        "text": "Linear Algebra for Statistics (Centering Matrix) (30)"
      },
      {
        "u": 31,
        "text": "Chapter 8 Final Problem Set (Problem Set 8.7) (31)"
      },
      {
        "u": 32,
        "text": "Introduction to Eigenvalues and Trace (32)"
      },
      {
        "u": 33,
        "text": "Diagonalizing a Matrix (33)"
      },
      {
        "u": 34,
        "text": "Symmetric Matrices and Spectral Theorem (34)"
      },
      {
        "u": 35,
        "text": "Similar Matrices and Jordan Form (35)"
      },
      {
        "u": 36,
        "text": "Singular Value Decomposition (SVD) & Ch 6 Exercises (36)"
      },
      {
        "u": 37,
        "text": "Markov Matrices, Population, and Economics (37)"
      },
      {
        "u": 38,
        "text": "Chapter 8 Final Problem Set (Problem Set 8.7) (38)"
      },
      {
        "u": 39,
        "text": "Complex Vectors and Matrices (Complex Eigenvalues) (39)"
      },
      {
        "u": 40,
        "text": "Hermitian and Unitary Matrices (40)"
      },
      {
        "u": 41,
        "text": "Chapter 10 Final Exercises & Problem Set 10.3 (41)"
      }
    ],
    "revisionBullets": [
      "Full revision: Vector spaces, subspaces, linear independence, basis, dimension and rank-nullity (1\u20139)",
      "Full revision: Linear systems, Gaussian elimination, matrix inverse, determinants and Cramer's rule (10\u201321)",
      "Full revision: Orthogonal bases, Gram-Schmidt process, projection matrices and least squares (22\u201331)",
      "Full revision: Eigenvalues, eigenvectors, symmetric diagonalization, positive definiteness and SVD (32\u201341)"
    ]
  },
  "CO": {
    "id": "CO",
    "stream": "gate_da",
    "role": "Phase 1 \u00b7 Course 2 (8.7m)",
    "name": "Calculus and Optimization",
    "shortName": "Calculus & Opt",
    "examDate": "2027-02-01",
    "totalUnits": 31,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#FFFBEB",
      "bannerBg": "#FEF3C7",
      "border": "#F59E0B"
    },
    "iconId": "icon-convex-opt",
    "units": [
      {
        "u": 1,
        "text": "Functions and Their Graphs (1)"
      },
      {
        "u": 2,
        "text": "Limit of a Function and Limit Laws (2)"
      },
      {
        "u": 3,
        "text": "One-Sided Limits (3)"
      },
      {
        "u": 4,
        "text": "Continuity (4)"
      },
      {
        "u": 5,
        "text": "Limits Involving Infinity; Asymptotes (5)"
      },
      {
        "u": 6,
        "text": "Chapter 2 Review & Practice Exercises (6)"
      },
      {
        "u": 7,
        "text": "Indeterminate Forms and L'H\u00f4pital's Rule (7)"
      },
      {
        "u": 8,
        "text": "Tangent Lines & Derivative at a Point (8)"
      },
      {
        "u": 9,
        "text": "The Derivative as a Function (9)"
      },
      {
        "u": 10,
        "text": "Differentiation Rules (10)"
      },
      {
        "u": 11,
        "text": "The Chain Rule (11)"
      },
      {
        "u": 12,
        "text": "Chapter 3 Review & Practice Exercises (12)"
      },
      {
        "u": 13,
        "text": "Infinite Series (Geometric Series) (13)"
      },
      {
        "u": 14,
        "text": "Taylor and Maclaurin Series (14)"
      },
      {
        "u": 15,
        "text": "Convergence of Taylor Series & Remainder (15)"
      },
      {
        "u": 16,
        "text": "Chapter 10 Review & Practice Exercises (16)"
      },
      {
        "u": 17,
        "text": "Extreme Values of Functions (17)"
      },
      {
        "u": 18,
        "text": "The Mean Value Theorem (MVT) (18)"
      },
      {
        "u": 19,
        "text": "Monotonic Functions & First Derivative Test (19)"
      },
      {
        "u": 20,
        "text": "Concavity and Curve Sketching (20)"
      },
      {
        "u": 21,
        "text": "Applied Optimization (21)"
      },
      {
        "u": 22,
        "text": "Chapter 4 Practice Exercises & Review (22)"
      },
      {
        "u": 23,
        "text": "Affine and Convex Sets (23)"
      },
      {
        "u": 24,
        "text": "Boyd Chapter 2 Final Exercises (24)"
      },
      {
        "u": 25,
        "text": "Convex Functions: Basic Properties (25)"
      },
      {
        "u": 26,
        "text": "Operations Preserving Convexity (26)"
      },
      {
        "u": 27,
        "text": "Boyd Chapter 3 Final Exercises (27)"
      },
      {
        "u": 28,
        "text": "Optimization Problems (28)"
      },
      {
        "u": 29,
        "text": "Convex Optimization Problems (29)"
      },
      {
        "u": 30,
        "text": "Linear Optimization Problems (30)"
      },
      {
        "u": 31,
        "text": "Boyd Chapter 4 Final Exercises (31)"
      }
    ],
    "revisionBullets": [
      "Full revision: Functions, limits, continuity, intermediate value theorem and asymptotic behavior (1\u20137)",
      "Full revision: Differentiation, product/chain rules, derivatives and Taylor/Maclaurin series expansions (8\u201316)",
      "Full revision: Mean value theorem, Cauchy MVT, L'Hopital rule, monotonicity and local/global extrema (17\u201322)",
      "Full revision: Convex sets, strictly convex functions, optimization conditions and gradient descent (23\u201331)"
    ]
  },
  "PS": {
    "id": "PS",
    "stream": "gate_da",
    "role": "Phase 1 \u00b7 Course 3 (17.0m)",
    "name": "Probability and Statistics",
    "shortName": "Prob & Stats",
    "examDate": "2027-02-01",
    "totalUnits": 29,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#F0F9FF",
      "bannerBg": "#E0F2FE",
      "border": "#0EA5E9"
    },
    "iconId": "icon-electrodynamics",
    "units": [
      {
        "u": 1,
        "text": "Counting, Permutations & Combinations (1)"
      },
      {
        "u": 2,
        "text": "Chapter 1 Final Problems & Exercises (2)"
      },
      {
        "u": 3,
        "text": "Sample Space, Events & Axioms (3)"
      },
      {
        "u": 4,
        "text": "Chapter 2 Final Problems & Exercises (4)"
      },
      {
        "u": 5,
        "text": "Conditional Probability, Bayes & Independence (5)"
      },
      {
        "u": 6,
        "text": "Chapter 3 Final Problems & Exercises (6)"
      },
      {
        "u": 7,
        "text": "Random Variables, PMF, Expectation & Variance (7)"
      },
      {
        "u": 8,
        "text": "Bernoulli & Binomial Random Variables (8)"
      },
      {
        "u": 9,
        "text": "The Poisson Random Variable (9)"
      },
      {
        "u": 10,
        "text": "Geometric & Hypergeometric Distributions (10)"
      },
      {
        "u": 11,
        "text": "Cumulative Distribution Function (CDF) (11)"
      },
      {
        "u": 12,
        "text": "Chapter 4 Final Problems & Exercises (12)"
      },
      {
        "u": 13,
        "text": "Continuous RVs, PDF & Uniform Distribution (13)"
      },
      {
        "u": 14,
        "text": "Normal Random Variables ($Z \\sim N(0, 1)$) (14)"
      },
      {
        "u": 15,
        "text": "Exponential Random Variables (15)"
      },
      {
        "u": 16,
        "text": "Chapter 5 Final Problems & Exercises (16)"
      },
      {
        "u": 17,
        "text": "Joint Distributions, Independence & Sums (17)"
      },
      {
        "u": 18,
        "text": "Conditional Distributions: Continuous Case (18)"
      },
      {
        "u": 19,
        "text": "Sums, Covariance & Correlation (19)"
      },
      {
        "u": 20,
        "text": "Conditional Expectation & Total Expectation (20)"
      },
      {
        "u": 21,
        "text": "Chapter 7 Final Problems & Exercises (21)"
      },
      {
        "u": 22,
        "text": "Mean, Median, Mode & Sample Variance (22)"
      },
      {
        "u": 23,
        "text": "Chapter 2 Descriptive Statistics Exercises (23)"
      },
      {
        "u": 24,
        "text": "Sample Mean & Central Limit Theorem (CLT) (24)"
      },
      {
        "u": 25,
        "text": "Sampling Distributions: $\\chi^2$ and $t$-Distribution (25)"
      },
      {
        "u": 26,
        "text": "Chapter 6 Sampling Statistics Problems (26)"
      },
      {
        "u": 27,
        "text": "Parameter Estimation: MLE & Confidence Intervals (27)"
      },
      {
        "u": 28,
        "text": "Hypothesis Testing: $z$-Test & $t$-Test (28)"
      },
      {
        "u": 29,
        "text": "Goodness of Fit & Chi-Square Tests (29)"
      }
    ],
    "revisionBullets": [
      "Full revision: Permutations, combinations, probability axioms, conditional probability and Bayes' rule (1\u20136)",
      "Full revision: Discrete random variables: PMF, CDF, Binomial, Poisson, Geometric and Hypergeometric (7\u201312)",
      "Full revision: Continuous distributions: PDF, Uniform, Normal, Exponential, joint densities and expectations (13\u201321)",
      "Full revision: Sample statistics, Central Limit Theorem, confidence intervals, MLE and hypothesis testing (22\u201329)"
    ]
  },
  "PDSA": {
    "id": "PDSA",
    "stream": "gate_da",
    "role": "Phase 2 \u00b7 Course 4 (16.0m)",
    "name": "Programming, Data Structures & Algorithms",
    "shortName": "Prog & DSA",
    "examDate": "2027-02-01",
    "totalUnits": 94,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#ECFDF5",
      "bannerBg": "#D1FAE5",
      "border": "#10B981"
    },
    "iconId": "icon-optics",
    "units": [
      {
        "u": 1,
        "text": "Python Overview (1)"
      },
      {
        "u": 2,
        "text": "Objects in Python (2)"
      },
      {
        "u": 3,
        "text": "Expressions, Operators, and Precedence (3)"
      },
      {
        "u": 4,
        "text": "Control Flow (4)"
      },
      {
        "u": 5,
        "text": "Functions & Parameter Passing (5)"
      },
      {
        "u": 6,
        "text": "Simple Input and Output (6)"
      },
      {
        "u": 7,
        "text": "Exception Handling (7)"
      },
      {
        "u": 8,
        "text": "Iterators and Generators (8)"
      },
      {
        "u": 9,
        "text": "Additional Python Conveniences (9)"
      },
      {
        "u": 10,
        "text": "Scopes and Namespaces (10)"
      },
      {
        "u": 11,
        "text": "Modules and the Import Statement (11)"
      },
      {
        "u": 12,
        "text": "PRACTICE Chapter 1 Review Exercises (12)"
      },
      {
        "u": 13,
        "text": "Illustrative Examples of Recursion (13)"
      },
      {
        "u": 14,
        "text": "Analyzing Recursive Algorithms (14)"
      },
      {
        "u": 15,
        "text": "Recursion Run Amok (15)"
      },
      {
        "u": 16,
        "text": "Further Examples of Recursion (16)"
      },
      {
        "u": 17,
        "text": "Designing Recursive Algorithms (17)"
      },
      {
        "u": 18,
        "text": "Eliminating Tail Recursion (18)"
      },
      {
        "u": 19,
        "text": "PRACTICE Chapter 4 Review Exercises (19)"
      },
      {
        "u": 20,
        "text": "Python's Sequence Types (20)"
      },
      {
        "u": 21,
        "text": "Low-Level Arrays (21)"
      },
      {
        "u": 22,
        "text": "Dynamic Arrays and Amortization (22)"
      },
      {
        "u": 23,
        "text": "Efficiency of Python's Sequence Types (23)"
      },
      {
        "u": 24,
        "text": "Using Array-Based Sequences (24)"
      },
      {
        "u": 25,
        "text": "Multidimensional Data Sets (25)"
      },
      {
        "u": 26,
        "text": "PRACTICE Chapter 5 Review Exercises (26)"
      },
      {
        "u": 27,
        "text": "Stacks (27)"
      },
      {
        "u": 28,
        "text": "Queues (28)"
      },
      {
        "u": 29,
        "text": "Double-Ended Queues (Deque ADT) (29)"
      },
      {
        "u": 30,
        "text": "PRACTICE Chapter 6 Review Exercises (30)"
      },
      {
        "u": 31,
        "text": "Singly Linked Lists (31)"
      },
      {
        "u": 32,
        "text": "Circularly Linked Lists (32)"
      },
      {
        "u": 33,
        "text": "Doubly Linked Lists (33)"
      },
      {
        "u": 34,
        "text": "The Positional List ADT (34)"
      },
      {
        "u": 35,
        "text": "Sorting a Positional List (35)"
      },
      {
        "u": 36,
        "text": "Case Study: Maintaining Access Frequencies (36)"
      },
      {
        "u": 37,
        "text": "Link-Based vs. Array-Based Sequences (37)"
      },
      {
        "u": 38,
        "text": "PRACTICE Chapter 7 Review Exercises (38)"
      },
      {
        "u": 39,
        "text": "Maps and Dictionaries (39)"
      },
      {
        "u": 40,
        "text": "Hash Tables (40)"
      },
      {
        "u": 41,
        "text": "Sorted Maps (41)"
      },
      {
        "u": 42,
        "text": "Skip Lists (42)"
      },
      {
        "u": 43,
        "text": "Sets, Multisets, and Multimaps (43)"
      },
      {
        "u": 44,
        "text": "PRACTICE Chapter 10 Review Exercises (44)"
      },
      {
        "u": 45,
        "text": "General Trees (45)"
      },
      {
        "u": 46,
        "text": "Binary Trees (46)"
      },
      {
        "u": 47,
        "text": "Implementing Trees (47)"
      },
      {
        "u": 48,
        "text": "Tree Traversal Algorithms (48)"
      },
      {
        "u": 49,
        "text": "Case Study: An Expression Tree (49)"
      },
      {
        "u": 50,
        "text": "PRACTICE Chapter 8 Review Exercises (50)"
      },
      {
        "u": 51,
        "text": "The Priority Queue Abstract Data Type (51)"
      },
      {
        "u": 52,
        "text": "Implementing a Priority Queue (52)"
      },
      {
        "u": 53,
        "text": "Heaps (53)"
      },
      {
        "u": 54,
        "text": "Sorting with a Priority Queue (Heapsort) (54)"
      },
      {
        "u": 55,
        "text": "Adaptable Priority Queues (55)"
      },
      {
        "u": 56,
        "text": "PRACTICE Chapter 9 Review Exercises (56)"
      },
      {
        "u": 57,
        "text": "Binary Search Trees (57)"
      },
      {
        "u": 58,
        "text": "Balanced Search Trees (58)"
      },
      {
        "u": 59,
        "text": "AVL Trees (59)"
      },
      {
        "u": 60,
        "text": "Splay Trees (60)"
      },
      {
        "u": 61,
        "text": "(2,4) Trees (61)"
      },
      {
        "u": 62,
        "text": "Red-Black Trees (62)"
      },
      {
        "u": 63,
        "text": "PRACTICE Chapter 11 Review Exercises (63)"
      },
      {
        "u": 64,
        "text": "Insertion Sort (64)"
      },
      {
        "u": 65,
        "text": "Analyzing Algorithms (65)"
      },
      {
        "u": 66,
        "text": "Designing Algorithms (Merge Sort & Binary Search) (66)"
      },
      {
        "u": 67,
        "text": "PRACTICE Chapter 2 Review Problems (67)"
      },
      {
        "u": 68,
        "text": "Asymptotic Notation (68)"
      },
      {
        "u": 69,
        "text": "Standard Notations and Common Functions (69)"
      },
      {
        "u": 70,
        "text": "PRACTICE Chapter 3 Review Problems (70)"
      },
      {
        "u": 71,
        "text": "The Maximum-Subarray Problem (71)"
      },
      {
        "u": 72,
        "text": "Strassen's Algorithm for Matrix Multiplication (72)"
      },
      {
        "u": 73,
        "text": "The Substitution Method for Solving Recurrences (73)"
      },
      {
        "u": 74,
        "text": "The Recursion-Tree Method for Solving Recurrences (74)"
      },
      {
        "u": 75,
        "text": "The Master Method for Solving Recurrences (75)"
      },
      {
        "u": 76,
        "text": "Proof of the Master Theorem (76)"
      },
      {
        "u": 77,
        "text": "PRACTICE Chapter 4 Review Problems (77)"
      },
      {
        "u": 78,
        "text": "Description of Quicksort (78)"
      },
      {
        "u": 79,
        "text": "Performance of Quicksort (79)"
      },
      {
        "u": 80,
        "text": "A Randomized Version of Quicksort (80)"
      },
      {
        "u": 81,
        "text": "Analysis of Quicksort (81)"
      },
      {
        "u": 82,
        "text": "PRACTICE Chapter 7 Review Problems (82)"
      },
      {
        "u": 83,
        "text": "Rod Cutting & DP Foundations (83)"
      },
      {
        "u": 84,
        "text": "Matrix-Chain Multiplication (84)"
      },
      {
        "u": 85,
        "text": "Elements of Dynamic Programming (85)"
      },
      {
        "u": 86,
        "text": "Longest Common Subsequence (LCS) (86)"
      },
      {
        "u": 87,
        "text": "Optimal Binary Search Trees (87)"
      },
      {
        "u": 88,
        "text": "PRACTICE Chapter 15 Review Problems (88)"
      },
      {
        "u": 89,
        "text": "Representations of Graphs (89)"
      },
      {
        "u": 90,
        "text": "Breadth-First Search (BFS) (90)"
      },
      {
        "u": 91,
        "text": "Depth-First Search (DFS) (91)"
      },
      {
        "u": 92,
        "text": "Topological Sort (92)"
      },
      {
        "u": 93,
        "text": "Strongly Connected Components (SCC) (93)"
      },
      {
        "u": 94,
        "text": "PRACTICE Chapter 22 Review Problems (94)"
      }
    ],
    "revisionBullets": [
      "Full revision: Python syntax, scope, recursion trees, memory models and execution mechanics (1\u201326)",
      "Full revision: Linear data structures: arrays, linked lists, stacks, queues, deques and hashing (27\u201344)",
      "Full revision: Trees, binary tree traversals, BST operations, AVL balance and binary heaps (45\u201363)",
      "Full revision: Algorithm design: asymptotic notations, divide-and-conquer, sorting, DP and graph traversals (64\u201394)"
    ]
  },
  "DB": {
    "id": "DB",
    "stream": "gate_da",
    "role": "Phase 2 \u00b7 Course 5 (13.0m)",
    "name": "Database Management and Warehousing",
    "shortName": "DB & Warehousing",
    "examDate": "2027-02-01",
    "totalUnits": 80,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#F0FDFA",
      "bannerBg": "#CCFBF1",
      "border": "#14B8A6"
    },
    "iconId": "icon-materials",
    "units": [
      {
        "u": 1,
        "text": "Basic Concepts (1)"
      },
      {
        "u": 2,
        "text": "Constraints (2)"
      },
      {
        "u": 3,
        "text": "Keys (3)"
      },
      {
        "u": 4,
        "text": "Design Issues (4)"
      },
      {
        "u": 5,
        "text": "Entity-Relationship Diagram (5)"
      },
      {
        "u": 6,
        "text": "Weak Entity Sets (6)"
      },
      {
        "u": 7,
        "text": "Extended E-R Features (7)"
      },
      {
        "u": 8,
        "text": "Design of an E-R Database Schema (8)"
      },
      {
        "u": 9,
        "text": "Reduction of an E-R Schema to Tables (9)"
      },
      {
        "u": 10,
        "text": "PRACTICE Chapter 2 Review Exercises (10)"
      },
      {
        "u": 11,
        "text": "Structure of Relational Databases (11)"
      },
      {
        "u": 12,
        "text": "Selection Operator (sigma) (12)"
      },
      {
        "u": 13,
        "text": "Projection Operator (Pi) (13)"
      },
      {
        "u": 14,
        "text": "Composition & Cartesian Product (14)"
      },
      {
        "u": 15,
        "text": "Set Operations & Rename (15)"
      },
      {
        "u": 16,
        "text": "Natural Join & Division Operator (16)"
      },
      {
        "u": 17,
        "text": "Extended Relational-Algebra Operations (17)"
      },
      {
        "u": 18,
        "text": "The Tuple Relational Calculus (TRC) (18)"
      },
      {
        "u": 19,
        "text": "The Domain Relational Calculus (DRC) (19)"
      },
      {
        "u": 20,
        "text": "PRACTICE Chapter 3 Review Exercises (20)"
      },
      {
        "u": 21,
        "text": "Referential Integrity & Foreign Keys (21)"
      },
      {
        "u": 22,
        "text": "Background & History of SQL (22)"
      },
      {
        "u": 23,
        "text": "Basic Structure of SQL Queries (23)"
      },
      {
        "u": 24,
        "text": "Set Operations in SQL (24)"
      },
      {
        "u": 25,
        "text": "Aggregate Functions & Grouping (25)"
      },
      {
        "u": 26,
        "text": "Null Values & Three-Valued Logic (26)"
      },
      {
        "u": 27,
        "text": "Nested Subqueries (27)"
      },
      {
        "u": 28,
        "text": "Views in SQL (28)"
      },
      {
        "u": 29,
        "text": "Complex Queries & Derived Relations (29)"
      },
      {
        "u": 30,
        "text": "Modification of the Database (30)"
      },
      {
        "u": 31,
        "text": "Joined Relations (31)"
      },
      {
        "u": 32,
        "text": "Data-Definition Language (DDL) (32)"
      },
      {
        "u": 33,
        "text": "PRACTICE Chapter 4 Review Exercises (33)"
      },
      {
        "u": 34,
        "text": "Domain Constraints (34)"
      },
      {
        "u": 35,
        "text": "Referential Integrity Constraints (35)"
      },
      {
        "u": 36,
        "text": "Assertions (36)"
      },
      {
        "u": 37,
        "text": "Triggers (37)"
      },
      {
        "u": 38,
        "text": "Security and Authorization in SQL (38)"
      },
      {
        "u": 39,
        "text": "PRACTICE Chapter 6 Review Exercises (39)"
      },
      {
        "u": 40,
        "text": "First Normal Form (1NF) & Anomalies (40)"
      },
      {
        "u": 41,
        "text": "Functional Dependencies (FDs) (41)"
      },
      {
        "u": 42,
        "text": "Closure of Attribute Sets & Candidate Keys (42)"
      },
      {
        "u": 43,
        "text": "Desirable Properties of Decomposition (43)"
      },
      {
        "u": 44,
        "text": "Boyce-Codd Normal Form (BCNF) (44)"
      },
      {
        "u": 45,
        "text": "Third Normal Form (3NF) (45)"
      },
      {
        "u": 46,
        "text": "PRACTICE Chapter 7 Review Exercises (46)"
      },
      {
        "u": 47,
        "text": "Overview of Physical Storage Media (47)"
      },
      {
        "u": 48,
        "text": "Magnetic Disks & Access Cost (48)"
      },
      {
        "u": 49,
        "text": "RAID Storage Systems (49)"
      },
      {
        "u": 50,
        "text": "File Organization (50)"
      },
      {
        "u": 51,
        "text": "Organization of Records in Files (51)"
      },
      {
        "u": 52,
        "text": "PRACTICE Chapter 11 Review Exercises (52)"
      },
      {
        "u": 53,
        "text": "Indexing Basic Concepts (53)"
      },
      {
        "u": 54,
        "text": "Ordered Indices & B+ Trees (54)"
      },
      {
        "u": 55,
        "text": "B+ Tree Node Splits & Deletions (55)"
      },
      {
        "u": 56,
        "text": "B-Tree Index Files (56)"
      },
      {
        "u": 57,
        "text": "Static & Dynamic Hashing (57)"
      },
      {
        "u": 58,
        "text": "PRACTICE Chapter 12 Review Exercises (58)"
      },
      {
        "u": 59,
        "text": "Transaction Concept & ACID Properties (59)"
      },
      {
        "u": 60,
        "text": "Serializability (60)"
      },
      {
        "u": 61,
        "text": "Lock-Based Protocols & 2PL (61)"
      },
      {
        "u": 62,
        "text": "Deadlock Handling (62)"
      },
      {
        "u": 63,
        "text": "Data Preprocessing: An Overview (63)"
      },
      {
        "u": 64,
        "text": "Data Cleaning (64)"
      },
      {
        "u": 65,
        "text": "Data Integration (65)"
      },
      {
        "u": 66,
        "text": "Data Transformation & Normalization (66)"
      },
      {
        "u": 67,
        "text": "Data Reduction (67)"
      },
      {
        "u": 68,
        "text": "PRACTICE Chapter 3 Review Exercises (68)"
      },
      {
        "u": 69,
        "text": "Data Warehouse: Basic Concepts (69)"
      },
      {
        "u": 70,
        "text": "Multidimensional Data Model: Data Cube (70)"
      },
      {
        "u": 71,
        "text": "Warehouse Schemas: Star, Snowflake, Fact Constellations (71)"
      },
      {
        "u": 72,
        "text": "Measures: Categorization (72)"
      },
      {
        "u": 73,
        "text": "OLAP Operations in Multidimensional Model (73)"
      },
      {
        "u": 74,
        "text": "Concept Hierarchies & Cuboid Count Formulas (74)"
      },
      {
        "u": 75,
        "text": "Data Warehouse Design & Architecture (75)"
      },
      {
        "u": 76,
        "text": "Data Warehouse Implementation & Cube Computation (76)"
      },
      {
        "u": 77,
        "text": "PRACTICE Chapter 4 Review Exercises (77)"
      },
      {
        "u": 78,
        "text": "Cluster Analysis: Basic Concepts (78)"
      },
      {
        "u": 79,
        "text": "Hierarchical Clustering Methods (79)"
      },
      {
        "u": 80,
        "text": "PRACTICE Chapter 10 Review Exercises (80)"
      }
    ],
    "revisionBullets": [
      "Full revision: ER-modeling, relational data model, relational algebra operations and tuple calculus (1\u201321)",
      "Full revision: SQL declarative queries, multi-table joins, subqueries, group by and aggregations (22\u201339)",
      "Full revision: Normal forms (1NF, 2NF, 3NF, BCNF), functional dependency closure and B+ tree indexing (40\u201362)",
      "Full revision: Data warehousing, star/snowflake schemas, multidimensional cubes and OLAP operations (63\u201380)"
    ]
  },
  "ML": {
    "id": "ML",
    "stream": "gate_da",
    "role": "Phase 3 \u00b7 Course 6 (12.3m)",
    "name": "Machine Learning",
    "shortName": "Machine Learning",
    "examDate": "2027-02-01",
    "totalUnits": 64,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#FAF5FF",
      "bannerBg": "#F3E8FF",
      "border": "#A855F7"
    },
    "iconId": "icon-machine-learning",
    "units": [
      {
        "u": 1,
        "text": "Example: Polynomial Curve Fitting (1)"
      },
      {
        "u": 2,
        "text": "Probability Theory Foundations (2)"
      },
      {
        "u": 3,
        "text": "Model Selection (3)"
      },
      {
        "u": 4,
        "text": "The Curse of Dimensionality (4)"
      },
      {
        "u": 5,
        "text": "Decision Theory (5)"
      },
      {
        "u": 6,
        "text": "Information Theory (6)"
      },
      {
        "u": 7,
        "text": "PRACTICE Chapter 1 Review Exercises (7)"
      },
      {
        "u": 8,
        "text": "Linear Basis Function Models (8)"
      },
      {
        "u": 9,
        "text": "Regularized Least Squares (Ridge Regression) (9)"
      },
      {
        "u": 10,
        "text": "The Bias-Variance Decomposition (10)"
      },
      {
        "u": 11,
        "text": "Bayesian Linear Regression (11)"
      },
      {
        "u": 12,
        "text": "PRACTICE Chapter 3 Review Exercises (12)"
      },
      {
        "u": 13,
        "text": "Discriminant Functions (13)"
      },
      {
        "u": 14,
        "text": "Fisher's Linear Discriminant (14)"
      },
      {
        "u": 15,
        "text": "The Perceptron Learning Algorithm (15)"
      },
      {
        "u": 16,
        "text": "Probabilistic Generative Models (16)"
      },
      {
        "u": 17,
        "text": "Probabilistic Discriminative Models (17)"
      },
      {
        "u": 18,
        "text": "Multiclass Logistic Regression (Softmax) (18)"
      },
      {
        "u": 19,
        "text": "PRACTICE Chapter 4 Review Exercises (19)"
      },
      {
        "u": 20,
        "text": "Decision Tree Representation (20)"
      },
      {
        "u": 21,
        "text": "PRACTICE Appropriate Problems for Decision Trees (21)"
      },
      {
        "u": 22,
        "text": "The Basic Decision Tree Learning Algorithm (ID3) (22)"
      },
      {
        "u": 23,
        "text": "Entropy & Information Gain (23)"
      },
      {
        "u": 24,
        "text": "Hypothesis Space Search in Decision Trees (24)"
      },
      {
        "u": 25,
        "text": "Inductive Bias in Decision Trees (25)"
      },
      {
        "u": 26,
        "text": "Issues in Decision Tree Learning (26)"
      },
      {
        "u": 27,
        "text": "PRACTICE Chapter 3 Review Exercises (27)"
      },
      {
        "u": 28,
        "text": "Introduction to Bayesian Learning (28)"
      },
      {
        "u": 29,
        "text": "Bayes Theorem & Concept Learning (29)"
      },
      {
        "u": 30,
        "text": "Maximum Likelihood & Least-Squares Error (30)"
      },
      {
        "u": 31,
        "text": "Bayes Optimal Classifier (31)"
      },
      {
        "u": 32,
        "text": "Naive Bayes Classifier (32)"
      },
      {
        "u": 33,
        "text": "Learning to Classify Text (33)"
      },
      {
        "u": 34,
        "text": "PRACTICE Chapter 6 Review Exercises (34)"
      },
      {
        "u": 35,
        "text": "Instance-Based Learning Introduction (35)"
      },
      {
        "u": 36,
        "text": "k-Nearest Neighbor Learning (36)"
      },
      {
        "u": 37,
        "text": "PRACTICE Chapter 8 Review Exercises (37)"
      },
      {
        "u": 38,
        "text": "Feed-Forward Network Functions (38)"
      },
      {
        "u": 39,
        "text": "Network Parameter Counting (39)"
      },
      {
        "u": 40,
        "text": "Activation Functions (40)"
      },
      {
        "u": 41,
        "text": "Network Training & Error Functions (41)"
      },
      {
        "u": 42,
        "text": "Error Backpropagation (42)"
      },
      {
        "u": 43,
        "text": "The Hessian Matrix & Optimization (43)"
      },
      {
        "u": 44,
        "text": "Regularization in Neural Networks (44)"
      },
      {
        "u": 45,
        "text": "PRACTICE Chapter 5 Review Exercises (45)"
      },
      {
        "u": 46,
        "text": "Maximum Margin Classifiers (46)"
      },
      {
        "u": 47,
        "text": "Support Vectors & KKT Conditions (47)"
      },
      {
        "u": 48,
        "text": "Overlapping Classes & Soft Margin (48)"
      },
      {
        "u": 49,
        "text": "Support Vector Machines Dual Formulation (49)"
      },
      {
        "u": 50,
        "text": "PRACTICE Chapter 7 Review Exercises (50)"
      },
      {
        "u": 51,
        "text": "k-Means Clustering (51)"
      },
      {
        "u": 52,
        "text": "Voronoi Cells & Convexity (52)"
      },
      {
        "u": 53,
        "text": "Mixtures of Gaussians (53)"
      },
      {
        "u": 54,
        "text": "The EM Algorithm in General (54)"
      },
      {
        "u": 55,
        "text": "PRACTICE Bishop Chapter 9 Review Exercises (55)"
      },
      {
        "u": 56,
        "text": "Problem Setting & Covariance Matrix (56)"
      },
      {
        "u": 57,
        "text": "Maximum Variance Perspective of PCA (57)"
      },
      {
        "u": 58,
        "text": "Minimum Reconstruction Error Perspective (58)"
      },
      {
        "u": 59,
        "text": "Eigenvector Computation & Variance Explained (59)"
      },
      {
        "u": 60,
        "text": "PCA in High Dimensions (60)"
      },
      {
        "u": 61,
        "text": "PRACTICE Deisenroth Chapter 10 Exercises (61)"
      },
      {
        "u": 62,
        "text": "Cluster Analysis: Distance Metrics (62)"
      },
      {
        "u": 63,
        "text": "Hierarchical Clustering Methods (63)"
      },
      {
        "u": 64,
        "text": "PRACTICE Han & Kamber Chapter 10 Review Exercises (64)"
      }
    ],
    "revisionBullets": [
      "Full revision: Supervised learning taxonomy, linear regression, least squares and logistic regression (1\u201319)",
      "Full revision: Decision trees, entropy, information gain, Naive Bayes and k-NN classification (20\u201337)",
      "Full revision: Support Vector Machines (SVMs), margin maximization, kernels and neural networks/MLPs (38\u201350)",
      "Full revision: Unsupervised learning: k-Means clustering, hierarchical clustering and PCA dimensionality reduction (51\u201364)"
    ]
  },
  "AI": {
    "id": "AI",
    "stream": "gate_da",
    "role": "Phase 3 \u00b7 Course 7 (7.0m)",
    "name": "Artificial Intelligence",
    "shortName": "Artificial Intelligence",
    "examDate": "2027-02-01",
    "totalUnits": 44,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#FFF1F2",
      "bannerBg": "#FFE4E6",
      "border": "#F43F5E"
    },
    "iconId": "icon-abstract-algebra",
    "units": [
      {
        "u": 1,
        "text": "Agents and Environments (1)"
      },
      {
        "u": 2,
        "text": "Good Behavior: The Concept of Rationality (2)"
      },
      {
        "u": 3,
        "text": "The Nature of Environments (PEAS) (3)"
      },
      {
        "u": 4,
        "text": "The Structure of Agents (4)"
      },
      {
        "u": 5,
        "text": "Problem-Solving Agents (5)"
      },
      {
        "u": 6,
        "text": "Example Problems (6)"
      },
      {
        "u": 7,
        "text": "Search Algorithms & Infrastructure (7)"
      },
      {
        "u": 8,
        "text": "Uninformed Search Strategies (8)"
      },
      {
        "u": 9,
        "text": "SUMMARY Chapter 3 Summary & Historical Notes (9)"
      },
      {
        "u": 10,
        "text": "Informed (Heuristic) Search Strategies (10)"
      },
      {
        "u": 11,
        "text": "A* Search & Optimality Guarantees (11)"
      },
      {
        "u": 12,
        "text": "Heuristic Functions (12)"
      },
      {
        "u": 13,
        "text": "Generating Admissible Heuristics & Dominance (13)"
      },
      {
        "u": 14,
        "text": "SUMMARY Chapter 3 Summary & Heuristics Notes (14)"
      },
      {
        "u": 15,
        "text": "Local Search and Optimization Problems (15)"
      },
      {
        "u": 16,
        "text": "Local Search in Continuous Spaces (16)"
      },
      {
        "u": 17,
        "text": "SUMMARY Chapter 4 Summary & Historical Notes (17)"
      },
      {
        "u": 18,
        "text": "Game Theory & Deterministic Zero-Sum Games (18)"
      },
      {
        "u": 19,
        "text": "Optimal Decisions in Games (The Minimax Algorithm) (19)"
      },
      {
        "u": 20,
        "text": "Alpha-Beta Pruning (20)"
      },
      {
        "u": 21,
        "text": "Evaluation Functions & Cutoff Search (21)"
      },
      {
        "u": 22,
        "text": "SUMMARY Chapter 5 Summary & Notes (22)"
      },
      {
        "u": 23,
        "text": "Defining Constraint Satisfaction Problems (23)"
      },
      {
        "u": 24,
        "text": "Constraint Propagation: Inference in CSPs (24)"
      },
      {
        "u": 25,
        "text": "Backtracking Search for CSPs (25)"
      },
      {
        "u": 26,
        "text": "SUMMARY Chapter 6 Summary & Notes (26)"
      },
      {
        "u": 27,
        "text": "Knowledge-Based Agents (27)"
      },
      {
        "u": 28,
        "text": "The Wumpus World (28)"
      },
      {
        "u": 29,
        "text": "Logic & Entailment (29)"
      },
      {
        "u": 30,
        "text": "Propositional Logic: Syntax & Semantics (30)"
      },
      {
        "u": 31,
        "text": "Propositional Theorem Proving & Inference Rules (31)"
      },
      {
        "u": 32,
        "text": "Effective Propositional Model Checking (32)"
      },
      {
        "u": 33,
        "text": "SUMMARY Chapter 7 Summary & Notes (33)"
      },
      {
        "u": 34,
        "text": "Representation Revisited (34)"
      },
      {
        "u": 35,
        "text": "Syntax and Semantics of First-Order Logic (35)"
      },
      {
        "u": 36,
        "text": "Using First-Order Logic & Assertions (36)"
      },
      {
        "u": 37,
        "text": "SUMMARY Chapter 8 Summary & Notes (37)"
      },
      {
        "u": 38,
        "text": "Inference Using Full Joint Distributions (38)"
      },
      {
        "u": 39,
        "text": "Independence (39)"
      },
      {
        "u": 40,
        "text": "Bayes' Rule and Its Use (40)"
      },
      {
        "u": 41,
        "text": "Representing Knowledge in an Uncertain Domain (41)"
      },
      {
        "u": 42,
        "text": "Semantics of Bayesian Networks (42)"
      },
      {
        "u": 43,
        "text": "Exact Inference in Bayesian Networks (43)"
      },
      {
        "u": 44,
        "text": "SUMMARY Chapter 13 Summary & Notes (44)"
      }
    ],
    "revisionBullets": [
      "Full revision: Problem-solving agents, state space formulation, BFS, DFS, UCS and search optimality (1\u20139)",
      "Full revision: Informed search: greedy best-first, A* search, heuristic admissibility and consistency (10\u201317)",
      "Full revision: Adversarial search, Minimax game trees, alpha-beta pruning and constraint satisfaction (18\u201326)",
      "Full revision: Propositional logic, First-Order Logic quantifiers, inference rules and Bayesian networks (27\u201344)"
    ]
  },
  "GA": {
    "id": "GA",
    "stream": "gate_da",
    "role": "Phase 3 \u00b7 Course 8 (15.0m)",
    "name": "General Aptitude",
    "shortName": "General Aptitude",
    "examDate": "2027-02-01",
    "totalUnits": 29,
    "unitLabel": "units",
    "theme": {
      "cardBg": "#FEFCE8",
      "bannerBg": "#FEF9C3",
      "border": "#EAB308"
    },
    "iconId": "icon-sec-latex",
    "units": [
      {
        "u": 1,
        "text": "Number System & Divisibility Rules (1)"
      },
      {
        "u": 2,
        "text": "PRACTICE Chapter 1 Exercises & Memory Questions (2)"
      },
      {
        "u": 3,
        "text": "H.C.F. and L.C.M. of Numbers (3)"
      },
      {
        "u": 4,
        "text": "Percentage & Proportional Fractions (4)"
      },
      {
        "u": 5,
        "text": "Profit, Loss & Percentage Return (5)"
      },
      {
        "u": 6,
        "text": "Simple and Compound Interest (6)"
      },
      {
        "u": 7,
        "text": "Logarithms & Powers (7)"
      },
      {
        "u": 8,
        "text": "Quadratic Equations & Surds (8)"
      },
      {
        "u": 9,
        "text": "Mensuration I \u2014 Triangles, Quadrilaterals & Polygons (9)"
      },
      {
        "u": 10,
        "text": "Mensuration I \u2014 Circles & Sectors (10)"
      },
      {
        "u": 11,
        "text": "Mensuration II \u2014 Solids & Volumes (11)"
      },
      {
        "u": 12,
        "text": "Plane Geometry \u2014 Lines, Angles & Triangles (12)"
      },
      {
        "u": 13,
        "text": "Plane Geometry \u2014 Circles, Chords & Tangents (13)"
      },
      {
        "u": 14,
        "text": "Data Interpretation \u2014 Tables & Matrices (14)"
      },
      {
        "u": 15,
        "text": "Data Interpretation \u2014 Bar Charts & Histograms (15)"
      },
      {
        "u": 16,
        "text": "Data Interpretation \u2014 Pie Charts (16)"
      },
      {
        "u": 17,
        "text": "Puzzle Test \u2014 Matrix Matching & Classification (17)"
      },
      {
        "u": 18,
        "text": "Logical Venn Diagrams & Set Intersections (18)"
      },
      {
        "u": 19,
        "text": "Arithmetical Reasoning & Cryptarithmetic (19)"
      },
      {
        "u": 20,
        "text": "Combinatorics \u2014 The Basics of Counting (20)"
      },
      {
        "u": 21,
        "text": "The Pigeonhole Principle (21)"
      },
      {
        "u": 22,
        "text": "Permutations and Combinations (22)"
      },
      {
        "u": 23,
        "text": "Generalized Combinations: Stars & Bars Theorem (23)"
      },
      {
        "u": 24,
        "text": "Planar Graphs & Euler's Formula (24)"
      },
      {
        "u": 25,
        "text": "Graph Colorings & Four Color Theorem (25)"
      },
      {
        "u": 26,
        "text": "Vocabulary Building & Word Roots (Personality Types) (26)"
      },
      {
        "u": 27,
        "text": "Etymology, Prefixes & Suffixes (27)"
      },
      {
        "u": 28,
        "text": "Word Analogy & Semantic Intensity Scales (28)"
      },
      {
        "u": 29,
        "text": "Statement \u2014 Conclusions & Passage Inferences (29)"
      }
    ],
    "revisionBullets": [
      "Full revision: Quantitative aptitude: number systems, divisibility, HCF/LCM and percentages (1\u20138)",
      "Full revision: Quantitative aptitude: ratios, proportions, mensuration, geometry and data interpretation (9\u201316)",
      "Full revision: Analytical & spatial reasoning: series completion, pattern unfolding and Venn diagrams (17\u201325)",
      "Full revision: Verbal ability: grammar, vocabulary, sentence completion and reading comprehension (26\u201329)"
    ]
  }
};

export const LAST_EXAM = "2027-02-01";
