import { Unit } from '../types';

export const UNIT_3_3_5: Unit = {
  id: "unit-3-3-5",
  title: "Practice Problems",
  description: "Solving a full projection problem.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-5-p1", title: "Practice Problem 1", description: "Computing Projection with U", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Let $\\mathbf{u}_1 = \\begin{bmatrix} -7 \\\\ 1 \\\\ 4 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 1 \\\\ -2 \\end{bmatrix}, \\mathbf{y} = \\begin{bmatrix} -9 \\\\ 1 \\\\ 6 \\end{bmatrix}$, and $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$.\n\nUse the fact that $\\mathbf{u}_1$ and $\\mathbf{u}_2$ are orthogonal to compute $\\text{proj}_W \\mathbf{y}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply projection formula.**", interactiveSteps: [
           { stepText: "Compute dot products:\n$\\mathbf{y} \\cdot \\mathbf{u}_1 = 63 + 1 + 24 = 88$.\n$\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 49 + 1 + 16 = 66$." },
           { stepText: "$\\mathbf{y} \\cdot \\mathbf{u}_2 = 9 + 1 - 12 = -2$.\n$\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = 1 + 1 + 4 = 6$." },
           { prompt: "Calculate $\\hat{\\mathbf{y}}$.", options: [{id:"A", text:"$\\frac{88}{66}\\mathbf{u}_1 + \\frac{-2}{6}\\mathbf{u}_2$", isCorrect:true, explanation:"Weights are dot product ratios."}, {id:"B", text:"$\\frac{88}{6}\\mathbf{u}_1 + \\dots$", isCorrect:false, explanation:""}], stepText: "Simplify weights: $4/3$ and $-1/3$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\frac{4}{3}\\begin{bmatrix} -7 \\\\ 1 \\\\ 4 \\end{bmatrix} - \\frac{1}{3}\\begin{bmatrix} -1 \\\\ 1 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} -28/3 + 1/3 \\\\ 4/3 - 1/3 \\\\ 16/3 + 2/3 \\end{bmatrix} = \\begin{bmatrix} -9 \\\\ 1 \\\\ 6 \\end{bmatrix}$." },
           { stepText: "Wait, $\\hat{\\mathbf{y}} = \\mathbf{y}$! This means $\\mathbf{y}$ was already in $W$." }
        ]}
      ]
    }
  ]
};