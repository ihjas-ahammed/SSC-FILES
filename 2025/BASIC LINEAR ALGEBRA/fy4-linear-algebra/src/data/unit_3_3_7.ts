import { Unit } from '../types';

export const UNIT_3_3_7: Unit = {
  id: "unit-3-3-7",
  title: "Verifying Orthogonality & Projection",
  description: "Exercises 3-6: Checking sets and computing projections in R2 and R3.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-7-ex3", title: "Exercise 3: R2 Projection", description: "Verify and Compute", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Verify that $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthogonal set, and then find the orthogonal projection of $\\mathbf{y}$ onto $\\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$.\n\n$\\mathbf{y} = \\begin{bmatrix} -1 \\\\ 4 \\\\ 3 \\end{bmatrix}, \\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check dot product, then project.**", interactiveSteps: [
           { prompt: "Check orthogonality: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = $ ?", options: [{id:"A", text:"0", isCorrect:true, explanation:"$1(-1) + 1(1) + 0 = 0$."}, {id:"B", text:"2", isCorrect:false, explanation:""}], stepText: "They are orthogonal." },
           { stepText: "Compute $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y}\\cdot\\mathbf{u}_1}{\\|\\mathbf{u}_1\\|^2}\\mathbf{u}_1 + \\frac{\\mathbf{y}\\cdot\\mathbf{u}_2}{\\|\\mathbf{u}_2\\|^2}\\mathbf{u}_2$." },
           { stepText: "$\\mathbf{y}\\cdot\\mathbf{u}_1 = 3$, $\\|\\mathbf{u}_1\\|^2 = 2$. Term 1: $\\frac{3}{2}\\mathbf{u}_1$." },
           { stepText: "$\\mathbf{y}\\cdot\\mathbf{u}_2 = 5$, $\\|\\mathbf{u}_2\\|^2 = 2$. Term 2: $\\frac{5}{2}\\mathbf{u}_2$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\begin{bmatrix} 3/2 \\\\ 3/2 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} -5/2 \\\\ 5/2 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 4 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Notice $\\hat{\\mathbf{y}}$ is just the projection of $\\mathbf{y}$ onto the $xy$-plane!" }
        ]}
      ]
    },
    {
      id: "les-3-3-7-ex4", title: "Exercise 4: R3 Projection", description: "Verify and Compute", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Verify orthogonality and find the projection of $\\mathbf{y} = \\begin{bmatrix} 6 \\\\ 3 \\\\ -2 \\end{bmatrix}$ onto $\\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ 4 \\\\ 0 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -4 \\\\ 3 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "1. **Orthogonality:** $3(-4) + 4(3) + 0 = 0$. Yes.\n2. **Projection:**\n   $\\mathbf{y} \\cdot \\mathbf{u}_1 = 18 + 12 = 30$. $\\|\\mathbf{u}_1\\|^2 = 25$.\n   $\\mathbf{y} \\cdot \\mathbf{u}_2 = -24 + 9 = -15$. $\\|\\mathbf{u}_2\\|^2 = 25$.\n\n   $\\hat{\\mathbf{y}} = \\frac{30}{25}\\mathbf{u}_1 + \\frac{-15}{25}\\mathbf{u}_2 = \\frac{6}{5}\\mathbf{u}_1 - \\frac{3}{5}\\mathbf{u}_2$.\n   $\\hat{\\mathbf{y}} = \\begin{bmatrix} 18/5 \\\\ 24/5 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 12/5 \\\\ -9/5 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 30/5 \\\\ 15/5 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 3 \\\\ 0 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-3-7-ex5", title: "Exercise 5: R3 Projection (3 vectors)", description: "Partial Span", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Find the orthogonal projection of $\\mathbf{y} = \\begin{bmatrix} -1 \\\\ 2 \\\\ 6 \\end{bmatrix}$ onto $\\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ -1 \\\\ 2 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 1 \\\\ -1 \\\\ -2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate coefficients.**", interactiveSteps: [
           { prompt: "Verify orthogonality first.", options: [{id:"A", text:"$3+1-4=0$. Orthogonal.", isCorrect:true, explanation:""}, {id:"B", text:"Not orthogonal.", isCorrect:false, explanation:""}], stepText: "Orthogonality confirmed." },
           { stepText: "$\\mathbf{y}\\cdot\\mathbf{u}_1 = -3 -2 + 12 = 7$. $\\|\\mathbf{u}_1\\|^2 = 9+1+4=14$. Coeff: $7/14 = 1/2$." },
           { stepText: "$\\mathbf{y}\\cdot\\mathbf{u}_2 = -1 -2 -12 = -15$. $\\|\\mathbf{u}_2\\|^2 = 1+1+4=6$. Coeff: $-15/6 = -5/2$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\frac{1}{2}\\begin{bmatrix} 3 \\\\ -1 \\\\ 2 \\end{bmatrix} - \\frac{5}{2}\\begin{bmatrix} 1 \\\\ -1 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 1.5 - 2.5 \\\\ -0.5 + 2.5 \\\\ 1 + 5 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\\\ 6 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-3-7-ex6", title: "Exercise 6: R3 Projection", description: "Verification", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Find $\\hat{\\mathbf{y}}$ for $\\mathbf{y} = \\begin{bmatrix} 6 \\\\ 4 \\\\ 1 \\end{bmatrix}$ onto $\\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} -4 \\\\ -1 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Orthogonality: $0 -1 + 1 = 0$. Yes.\n\n$\\mathbf{y}\\cdot\\mathbf{u}_1 = -24 -4 + 1 = -27$. $\\|\\mathbf{u}_1\\|^2 = 16+1+1 = 18$. Ratio: $-3/2$.\n$\\mathbf{y}\\cdot\\mathbf{u}_2 = 4 + 1 = 5$. $\\|\\mathbf{u}_2\\|^2 = 2$. Ratio: $5/2$.\n\n$\\hat{\\mathbf{y}} = -1.5\\mathbf{u}_1 + 2.5\\mathbf{u}_2 = \\begin{bmatrix} 6 \\\\ 1.5 \\\\ -1.5 \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ 2.5 \\\\ 2.5 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 4 \\\\ 1 \\end{bmatrix}$." }
      ]
    }
  ]
};