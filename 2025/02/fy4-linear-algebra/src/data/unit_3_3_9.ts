import { Unit } from '../types';

export const UNIT_3_3_9: Unit = {
  id: "unit-3-3-9",
  title: "Closest Points & Best Approximation",
  description: "Exercises 11-16: Finding the closest point in a subspace and distance.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-9-ex11", title: "Exercise 11: Closest Point", description: "Minimizing distance", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Find the best approximation to $\\mathbf{z}$ by vectors of the form $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2$.\n\n$\\mathbf{z} = \\begin{bmatrix} 3 \\\\ -7 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_1 = \\begin{bmatrix} 2 \\\\ -1 \\\\ -3 \\\\ 1 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ -1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find projection $\\hat{\\mathbf{z}}$.**", interactiveSteps: [
           { stepText: "The 'best approximation' is simply the orthogonal projection onto $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$." },
           { stepText: "Check orthogonality: $2 - 1 + 0 - 1 = 0$. Yes." },
           { stepText: "Compute coeff 1: $\\frac{6 + 7 - 6 + 3}{4+1+9+1} = \\frac{10}{15} = 2/3$." },
           { stepText: "Compute coeff 2: $\\frac{3 - 7 - 3}{1+1+1} = \\frac{-7}{3}$." },
           { stepText: "Best approx $\\hat{\\mathbf{z}} = \\frac{2}{3}\\mathbf{v}_1 - \\frac{7}{3}\\mathbf{v}_2 = \\begin{bmatrix} 4/3 - 7/3 \\\\ -2/3 - 7/3 \\\\ -6/3 \\\\ 2/3 + 7/3 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ -3 \\\\ -2 \\\\ 3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-3-9-ex12", title: "Exercise 12: Closest Point", description: "R3 Example", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Find the closest point to $\\mathbf{y}$ in the subspace $W$ spanned by $\\mathbf{v}_1, \\mathbf{v}_2$." },
        { id: "s1", type: "solution", title: "Solution", content: "Calculate $\\hat{\\mathbf{y}} = \\text{proj}_W \\mathbf{y}$." }
      ]
    },
    {
      id: "les-3-3-9-ex13", title: "Exercise 13: Best Approximation", description: "Linear Combinations", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Find the best approximation to $\\mathbf{z}$ by vectors of the form $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2$." },
        { id: "s1", type: "solution", title: "Note", content: "This phrasing is identical to asking for the orthogonal projection. The 'best approximation' minimizes the error distance." }
      ]
    },
    {
      id: "les-3-3-9-ex14", title: "Exercise 14", description: "Best Approximation", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Similar to Ex 13, finding coefficients for projection." }
      ]
    },
    {
      id: "les-3-3-9-ex15", title: "Exercise 15: Distance to W", description: "Length of error", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Find the distance from $\\mathbf{y} = \\begin{bmatrix} 5 \\\\ -9 \\\\ 5 \\end{bmatrix}$ to the plane in $\\mathbb{R}^3$ spanned by $\\mathbf{u}_1 = \\begin{bmatrix} -3 \\\\ -5 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -3 \\\\ 2 \\\\ 1 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$.**", interactiveSteps: [
           { stepText: "Compute $\\hat{\\mathbf{y}}$. $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 9 - 10 + 1 = 0$." },
           { stepText: "Coeff 1: $\\frac{-15 + 45 + 5}{9+25+1} = \\frac{35}{35} = 1$." },
           { stepText: "Coeff 2: $\\frac{-15 - 18 + 5}{9+4+1} = \\frac{-28}{14} = -2$." },
           { stepText: "$\\hat{\\mathbf{y}} = 1\\mathbf{u}_1 - 2\\mathbf{u}_2 = \\begin{bmatrix} -3 \\\\ -5 \\\\ 1 \\end{bmatrix} + \\begin{bmatrix} 6 \\\\ -4 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -9 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 2 \\\\ 0 \\\\ 6 \\end{bmatrix}$." },
           { stepText: "Distance = $\\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}$." }
        ]},
        { id: "s2", type: "numerical", title: "Approx Distance", content: "Distance?", numericAnswer: 6.32, numericTolerance: 0.1 }
      ]
    },
    {
      id: "les-3-3-9-ex16", title: "Exercise 16: Distance to W", description: "Length of error in R4", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Find the distance from $\\mathbf{y}$ to $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$." },
        { id: "s1", type: "solution", title: "Solution", content: "Compute $\\hat{\\mathbf{y}}$, then find the norm of $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$." }
      ]
    }
  ]
};