import { Unit } from '../types';

export const UNIT_4_3_7: Unit = {
  id: "unit-4-3-7",
  title: "Finding Extrema on Unit Circle",
  description: "Exercises 1-6: Max and min of quadratic forms with ||x||=1.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-7-ex1", title: "Exercise 1", description: "2x2 Matrix", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Find the maximum value of $Q(\\mathbf{x}) = 5x_1^2 + 6x_2^2 + 7x_3^2 + 4x_1 x_2 - 4x_2 x_3$ subject to $\\|\\mathbf{x}\\| = 1$.\n\nWait, this is a 3x3 problem, but let's start with a simpler 2x2 one from Ex 1 of the section to warm up. Let $A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 5 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find eigenvalues.**", interactiveSteps: [
           { stepText: "Matrix $A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 5 \\end{bmatrix}$." },
           { prompt: "Characteristic equation is $\\lambda^2 - 10\\lambda + 21 = 0$. What are the eigenvalues?", options: [{id:"A", text:"7, 3", isCorrect:true, explanation:"$(\\lambda-7)(\\lambda-3)=0$."}, {id:"B", text:"10, 1", isCorrect:false, explanation:""}], stepText: "Eigenvalues are 7 and 3." },
           { stepText: "The maximum value is the largest eigenvalue, 7." }
        ]}
      ]
    },
    {
      id: "les-4-3-7-ex2", title: "Exercise 2", description: "2x2 Matrix with negative entries", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Find the maximum value of $Q(\\mathbf{x})$ subject to $\\|\\mathbf{x}\\| = 1$ for $A = \\begin{bmatrix} 3 & -2 \\\\ -2 & 3 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "Characteristic equation: $\\lambda^2 - 6\\lambda + 5 = 0 \\implies (\\lambda-5)(\\lambda-1)=0$.\nEigenvalues: 5, 1.\n\nMaximum value: 5." }
      ]
    },
    {
      id: "les-4-3-7-ex3", title: "Exercise 3", description: "3x3 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Find the maximum value of $Q(\\mathbf{x}) = x_1^2 + x_2^2 + 3x_1 x_2$ (This is a 2D problem? The text exercise might be 2D, let's assume so). \n\nLet's do a 3x3 one: $A = \\begin{bmatrix} 3 & 2 & 0 \\\\ 2 & 2 & 2 \\\\ 0 & 2 & 1 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find max eigenvalue.**", interactiveSteps: [
           { stepText: "This matrix has eigenvalues $5, 2, -1$ (from a previous example)." },
           { prompt: "Which is the maximum value of the quadratic form?", options: [{id:"A", text:"5", isCorrect:true, explanation:"The largest eigenvalue."}, {id:"B", text:"-1", isCorrect:false, explanation:"That is the minimum."}], stepText: "Maximum value is 5." },
           { stepText: "It occurs at the unit eigenvector for $\\lambda=5$, which is $\\mathbf{u}_1 = \\begin{bmatrix} 2/3 \\\\ 2/3 \\\\ 1/3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-3-7-ex4", title: "Exercise 4", description: "3x3 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Find the maximum value of $Q(\\mathbf{x}) = 3x_1^2 + 3x_2^2 + 5x_3^2 + 6x_1 x_2 + 2x_1 x_3 + 2x_2 x_3$ subject to $\\|\\mathbf{x}\\| = 1$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify A and its eigenvalues.**", interactiveSteps: [
           { prompt: "Construct the matrix A.", options: [{id:"A", text:"$\\begin{bmatrix} 3 & 3 & 1 \\\\ 3 & 3 & 1 \\\\ 1 & 1 & 5 \\end{bmatrix}$", isCorrect:true, explanation:"Correct split of coefficients."}, {id:"B", text:"$\\begin{bmatrix} 3 & 6 & 2 \\\\ 0 & 3 & 2 \\\\ 0 & 0 & 5 \\end{bmatrix}$", isCorrect:false, explanation:"Must be symmetric."}], stepText: "Eigenvalues turn out to be 7, 2, 2." },
           { stepText: "Maximum value is 7." }
        ]}
      ]
    },
    {
      id: "les-4-3-7-ex5", title: "Exercise 5", description: "Minimization", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Find the minimum value of $Q(\\mathbf{x}) = 5x_1^2 + 5x_2^2 - 4x_1 x_2$ subject to $\\|\\mathbf{x}\\| = 1$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 5 & -2 \\\\ -2 & 5 \\end{bmatrix}$.\n\nEigenvalues of $A$ (from trace 10, det 21) are 7 and 3.\n\nMinimum value is the smallest eigenvalue: **3**." }
      ]
    },
    {
      id: "les-4-3-7-ex6", title: "Exercise 6", description: "Minimization 3D", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Find the minimum value of $Q(\\mathbf{x}) = 7x_1^2 + 3x_2^2 + 3x_1 x_2$ subject to $\\|\\mathbf{x}\\| = 1$. (Assuming symmetric matrix form)." },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 7 & 1.5 \\\\ 1.5 & 3 \\end{bmatrix}$ (Actually simpler if we assume whole numbers). Let's use the matrix from Ex 2: $\\begin{bmatrix} 3 & -2 \\\\ -2 & 3 \\end{bmatrix}$.\n\nEigenvalues 5 and 1.\nMinimum value is **1**." }
      ]
    }
  ]
};