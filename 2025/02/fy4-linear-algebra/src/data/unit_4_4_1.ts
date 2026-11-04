import { Unit } from '../types';

export const UNIT_4_4_1: Unit = {
  id: "unit-4-4-1",
  title: "The Singular Value Decomposition (SVD)",
  description: "Example 1: Geometric intuition behind stretching a unit sphere.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-1-e1", title: "Example 1: Stretching a Sphere", description: "Visualizing Ax", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Geometric Action of A", content: "If $A$ is an $m \\times n$ matrix, the mapping $\\mathbf{x} \\mapsto A\\mathbf{x}$ transforms the unit sphere in $\\mathbb{R}^n$ into an ellipse (or ellipsoid) in $\\mathbb{R}^m$.\n\nThe lengths of the principal axes of this ellipse are called the **singular values** of $A$." },
        { id: "s1", type: "example_q", title: "Example 1", content: "**Problem:** If $A = \\begin{bmatrix} 4 & 11 & 14 \\\\ 8 & 7 & -2 \\end{bmatrix}$, find a unit vector $\\mathbf{x}$ at which the length $\\|A\\mathbf{x}\\|$ is maximized, and compute this maximum length." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Maximize $\\|A\\mathbf{x}\\|^2 = \\mathbf{x}^T (A^T A) \\mathbf{x}$ subject to $\\|\\mathbf{x}\\|=1$.**", interactiveSteps: [
           { stepText: "Compute $A^T A = \\begin{bmatrix} 4 & 8 \\\\ 11 & 7 \\\\ 14 & -2 \\end{bmatrix} \\begin{bmatrix} 4 & 11 & 14 \\\\ 8 & 7 & -2 \\end{bmatrix} = \\begin{bmatrix} 80 & 100 & 40 \\\\ 100 & 170 & 140 \\\\ 40 & 140 & 200 \\end{bmatrix}$." },
           { stepText: "The eigenvalues of $A^T A$ are $\\lambda_1 = 360, \\lambda_2 = 90, \\lambda_3 = 0$." },
           { prompt: "What is the maximum value of $\\|A\\mathbf{x}\\|^2$?", options: [{id:"A", text:"360", isCorrect:true, explanation:"The maximum of the quadratic form is the largest eigenvalue."}, {id:"B", text:"90", isCorrect:false, explanation:""}], stepText: "Max squared length is 360." },
           { stepText: "Max length is $\\sqrt{360} = 6\\sqrt{10}$." },
           { stepText: "This max is attained at the unit eigenvector for $\\lambda=360$: $\\mathbf{v}_1 = \\begin{bmatrix} 1/3 \\\\ 2/3 \\\\ 2/3 \\end{bmatrix}$." }
        ]},
        { id: "s3", type: "quiz", title: "Geometric Meaning", content: "What does the vector $A\\mathbf{v}_1$ represent for the image ellipse?", options: [{id:"A", text:"It points along the major (longest) axis of the ellipse.", isCorrect:true, explanation:"Since it has the maximum length."}, {id:"B", text:"It points along the minor axis.", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};