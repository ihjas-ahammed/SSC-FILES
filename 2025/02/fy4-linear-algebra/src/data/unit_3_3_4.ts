import { Unit } from '../types';

export const UNIT_3_3_4: Unit = {
  id: "unit-3-3-4",
  title: "Distance Calculations & Orthonormal Basis",
  description: "Examples 3 & 4: Calculating distance, and Theorem 10.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-4-ex3", title: "Example 3: Calculating Distance", description: "Finding the shortest distance", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} -1 \\\\ -5 \\\\ 10 \\end{bmatrix}$, $\\mathbf{u}_1 = \\begin{bmatrix} 5 \\\\ -2 \\\\ 1 \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} 1 \\\\ 2 \\\\ -1 \\end{bmatrix}$. \n\nLet $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$. Find the distance from $\\mathbf{y}$ to $W$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$.**", interactiveSteps: [
           { stepText: "1. Compute $\\hat{\\mathbf{y}}$ (projection of y onto W)." },
           { stepText: "Check orthogonality: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 5(1) - 2(2) + 1(-1) = 0$. Good." },
           { stepText: "$\\|\\mathbf{u}_1\\|^2 = 25+4+1=30$. $\\|\\mathbf{u}_2\\|^2 = 1+4+1=6$." },
           { stepText: "$\\mathbf{y} \\cdot \\mathbf{u}_1 = -5 + 10 + 10 = 15$. $\\mathbf{y} \\cdot \\mathbf{u}_2 = -1 - 10 - 10 = -21$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\frac{15}{30}\\mathbf{u}_1 + \\frac{-21}{6}\\mathbf{u}_2 = \\frac{1}{2}\\mathbf{u}_1 - \\frac{7}{2}\\mathbf{u}_2 = \\begin{bmatrix} 2.5 \\\\ -1 \\\\ 0.5 \\end{bmatrix} + \\begin{bmatrix} -3.5 \\\\ -7 \\\\ 3.5 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ -8 \\\\ 4 \\end{bmatrix}$." },
           { stepText: "2. Compute $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} -1 \\\\ -5 \\\\ 10 \\end{bmatrix} - \\begin{bmatrix} -1 \\\\ -8 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 3 \\\\ 6 \\end{bmatrix}$." },
           { stepText: "Distance = $\\|\\mathbf{z}\\| = \\sqrt{0^2 + 3^2 + 6^2} = \\sqrt{45} = 3\\sqrt{5}$." }
        ]},
        { id: "s2", type: "numerical", title: "Value", content: "What is $3\\sqrt{5}$ approximately?", numericAnswer: 6.71, numericTolerance: 0.1 }
      ]
    },
    {
      id: "les-3-3-4-ex4", title: "Example 4: Geometric Interpretation", description: "Understanding the components", icon: "Eye",
      slides: [
        { id: "s0", type: "theory", title: "Visualizing Theorem 10", content: "Theorem 8 provided the formula for projection using an *orthogonal* basis. What if the basis is *orthonormal*?" },
        { id: "s1", type: "theory", title: "Theorem 10", content: "If $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is an **orthonormal** basis for a subspace $W$ of $\\mathbb{R}^n$, then\n$$ \\text{proj}_W \\mathbf{y} = (\\mathbf{y} \\cdot \\mathbf{u}_1)\\mathbf{u}_1 + (\\mathbf{y} \\cdot \\mathbf{u}_2)\\mathbf{u}_2 + \\dots + (\\mathbf{y} \\cdot \\mathbf{u}_p)\\mathbf{u}_p $$\n\nIf $U = [\\mathbf{u}_1 \\ \\dots \\ \\mathbf{u}_p]$, then\n$$ \\text{proj}_W \\mathbf{y} = U U^T \\mathbf{y} $$" },
        { id: "s2", type: "quiz", title: "Simplification", content: "Why did the denominators $\\|\\mathbf{u}_i\\|^2$ disappear from Theorem 8's formula?", options: [{id:"A", text:"Because $\\|\\mathbf{u}_i\\| = 1$ for orthonormal vectors.", isCorrect:true, explanation:"The squared length of a unit vector is 1."}, {id:"B", text:"They cancelled out.", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Matrix Form", content: "What does the matrix $U U^T$ represent?", options: [{id:"A", text:"The Identity matrix.", isCorrect:false, explanation:"Only if U is square (n x n). Here U is n x p."}, {id:"B", text:"The projection matrix onto W.", isCorrect:true, explanation:"It maps any vector y to its projection in W."}] }
      ]
    }
  ]
};