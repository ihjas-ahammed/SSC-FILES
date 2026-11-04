import { Unit } from '../types';

export const UNIT_4_3_8: Unit = {
  id: "unit-4-3-8",
  title: "Constraint Vectors",
  description: "Exercises 7-11: Finding the unit vector x where the extremum occurs.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-8-ex7", title: "Exercise 7", description: "Unit vector for Max", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** For $A = \\begin{bmatrix} 3 & -2 \\\\ -2 & 3 \\end{bmatrix}$ (from Ex 2), find a unit vector $\\mathbf{u}$ where $Q(\\mathbf{x})$ is maximized." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find eigenvector for max eigenvalue.**", interactiveSteps: [
           { stepText: "Max eigenvalue is $\\lambda = 5$." },
           { stepText: "Solve $(A - 5I)\\mathbf{x} = \\mathbf{0}$:\n$\\begin{bmatrix} -2 & -2 \\\\ -2 & -2 \\end{bmatrix} \\mathbf{x} = \\mathbf{0}$." },
           { prompt: "What is the eigenvector?", options: [{id:"A", text:"$[1, -1]^T$", isCorrect:true, explanation:"$x_1 + x_2 = 0$."}, {id:"B", text:"$[1, 1]^T$", isCorrect:false, explanation:""}], stepText: "Eigenvector is $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "Normalize: $\\mathbf{u} = \\begin{bmatrix} 1/\\sqrt{2} \\\\ -1/\\sqrt{2} \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-3-8-ex8", title: "Exercise 8", description: "Unit vector for Min", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** For $A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 5 \\end{bmatrix}$, find a unit vector where $Q(\\mathbf{x})$ is minimized." },
        { id: "s1", type: "solution", title: "Solution", content: "Eigenvalues are 7 and 3. Minimum is 3.\n\nSolve $(A - 3I)\\mathbf{x} = \\mathbf{0}$:\n$\\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix} \\mathbf{x} = \\mathbf{0} \\implies x_1 + x_2 = 0$.\n\nEigenvector: $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$.\nUnit vector: $\\begin{bmatrix} 1/\\sqrt{2} \\\\ -1/\\sqrt{2} \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-3-8-ex9", title: "Exercise 9", description: "3x3 Max Vector", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find the unit vector maximizing $Q(\\mathbf{x})$ for $A = \\begin{bmatrix} 3 & 2 & 0 \\\\ 2 & 2 & 2 \\\\ 0 & 2 & 1 \\end{bmatrix}$. (Max value = 5)." },
        { id: "s1", type: "solution", title: "Solution", content: "Solve $(A - 5I)\\mathbf{x} = \\mathbf{0}$:\n$\\begin{bmatrix} -2 & 2 & 0 \\\\ 2 & -3 & 2 \\\\ 0 & 2 & -4 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & -1 & 2 \\\\ 0 & 2 & -4 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 0 & -2 \\\\ 0 & 1 & -2 \\\\ 0 & 0 & 0 \\end{bmatrix}$.\n\n$x_1 = 2x_3, x_2 = 2x_3$. Vector: $[2, 2, 1]^T$.\nNorm = 3. Unit vector: $\\begin{bmatrix} 2/3 \\\\ 2/3 \\\\ 1/3 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-3-8-ex10", title: "Exercise 10", description: "3x3 Min Vector", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find the unit vector minimizing $Q(\\mathbf{x})$ for $A$ in Ex 9. (Min value = -1)." },
        { id: "s1", type: "solution", title: "Solution", content: "Solve $(A + I)\\mathbf{x} = \\mathbf{0}$:\n$\\begin{bmatrix} 4 & 2 & 0 \\\\ 2 & 3 & 2 \\\\ 0 & 2 & 2 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 0 & -0.5 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$.\n\nVector: $[1/2, -1, 1]^T$ or $[1, -2, 2]^T$.\nNorm = 3. Unit vector: $\\begin{bmatrix} 1/3 \\\\ -2/3 \\\\ 2/3 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-3-8-ex11", title: "Exercise 11", description: "Orthogonal Constraint", icon: "Filter",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** For $A$ in Ex 9, find the max of $\\mathbf{x}^T A \\mathbf{x}$ subject to $\\|\\mathbf{x}\\|=1$ AND $\\mathbf{x}^T \\mathbf{u}_1 = 0$ (where $\\mathbf{u}_1$ is the max eigenvector)." },
        { id: "s1", type: "solution", title: "Solution", content: "By Theorem 7, this max value is the **second largest eigenvalue**.\n\nEigenvalues are 5, 2, -1.\nMax value is **2**." }
      ]
    }
  ]
};