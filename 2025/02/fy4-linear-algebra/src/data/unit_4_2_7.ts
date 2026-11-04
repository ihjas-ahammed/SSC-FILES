import { Unit } from '../types';

export const UNIT_4_2_7: Unit = {
  id: "unit-4-2-7",
  title: "Practice Problems",
  description: "Practice transforming a quadratic form.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-7-p1", title: "Practice Problem 1", description: "Full diagonalization pipeline", icon: "Terminal",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Let $Q(\\mathbf{x}) = 3x_1^2 + 3x_2^2 + 2x_1 x_2$. \nFind a change of variable that transforms $Q$ into a quadratic form with no cross-product term, and give the new quadratic form." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $A$, its eigenvalues, and its eigenvectors.**", interactiveSteps: [
           { prompt: "What is the matrix $A$ for this form?", options: [{id:"A", text:"$\\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$", isCorrect:true, explanation:"Split the $2x_1 x_2$ term into 1s on the off-diagonal."}, {id:"B", text:"$\\begin{bmatrix} 3 & 2 \\\\ 0 & 3 \\end{bmatrix}$", isCorrect:false, explanation:"It must be symmetric."}], stepText: "$A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$." },
           { stepText: "The characteristic equation is $\\lambda^2 - 6\\lambda + 8 = 0$, so the eigenvalues are $\\lambda = 4$ and $\\lambda = 2$." },
           { stepText: "The corresponding normalized eigenvectors are $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$ and $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "The desired change of variable is $\\mathbf{x} = P\\mathbf{y}$, where $P = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "The new quadratic form is $D$ in terms of $\\mathbf{y}$: $\\mathbf{y}^T D \\mathbf{y} = 4y_1^2 + 2y_2^2$." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Definiteness", content: "Because both eigenvalues 4 and 2 are positive, this quadratic form is classified as positive ___.", blankAnswer: "definite" }
      ]
    }
  ]
};