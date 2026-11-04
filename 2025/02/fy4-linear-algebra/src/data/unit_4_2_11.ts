import { Unit } from '../types';

export const UNIT_4_2_11: Unit = {
  id: "unit-4-2-11",
  title: "Constrained Optimization Preview",
  description: "Exercises 19-20: Finding max/min values of diagonal forms subject to ||x||=1.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-11-ex19", title: "Exercise 19", description: "Maximum on unit circle", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** What is the largest possible value of the quadratic form $5x_1^2 + 8x_2^2$ if $\\mathbf{x} = (x_1, x_2)$ and $\\mathbf{x}^T\\mathbf{x} = 1$ (that is, $x_1^2 + x_2^2 = 1$)?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Maximize $5x_1^2 + 8x_2^2$ subject to $x_1^2 + x_2^2 = 1$.**", interactiveSteps: [
           { stepText: "Notice that $5x_1^2 + 8x_2^2 \\le 8x_1^2 + 8x_2^2$." },
           { prompt: "Factor out the 8. What is $8(x_1^2 + x_2^2)$ equal to?", options: [{id:"A", text:"8(1) = 8", isCorrect:true, explanation:"Since the constraint is $x_1^2 + x_2^2 = 1$."}, {id:"B", text:"8", isCorrect:false, explanation:""}], stepText: "It equals 8." },
           { stepText: "So the maximum value cannot exceed 8." },
           { prompt: "Can we achieve exactly 8? What if we set $x_1 = 0$ and $x_2 = 1$?", options: [{id:"A", text:"Yes, $5(0) + 8(1) = 8$.", isCorrect:true, explanation:""}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Yes, the maximum value is exactly 8." }
        ]},
        { id: "s2", type: "theory", title: "Connection to Eigenvalues", content: "Notice that the matrix for $5x_1^2 + 8x_2^2$ is $D = \\begin{bmatrix} 5 & 0 \\\\ 0 & 8 \\end{bmatrix}$.\n\nThe eigenvalues are 5 and 8. The maximum value of the form subject to $\\|\\mathbf{x}\\|=1$ is exactly the largest eigenvalue!" }
      ]
    },
    {
      id: "les-4-2-11-ex20", title: "Exercise 20", description: "Maximum of indefinite form", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** What is the largest value of the quadratic form $5x_1^2 - 3x_2^2$ if $\\mathbf{x}^T\\mathbf{x} = 1$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Following the same logic as Ex 19, $5x_1^2 - 3x_2^2 \\le 5x_1^2 + 5x_2^2 = 5(x_1^2 + x_2^2) = 5$.\n\nWe achieve 5 by setting $x_1 = 1, x_2 = 0$.\n\nLargest value is 5. (This is the largest eigenvalue of the matrix $D = \\begin{bmatrix} 5 & 0 \\\\ 0 & -3 \\end{bmatrix}$)." },
        { id: "s2", type: "numerical", title: "Minimum", content: "What is the SMALLEST possible value of this quadratic form subject to the same constraint?", numericAnswer: -3, numericTolerance: 0 }
      ]
    }
  ]
};