import { Unit } from '../types';

export const UNIT_4_2_3: Unit = {
  id: "unit-4-2-3",
  title: "Change of Variable in a Quadratic Form",
  description: "Examples 3 & 4: Simplifying quadratic forms using matrix diagonalization.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-3-e3", title: "Example 3: Manual Evaluation", description: "Why cross-terms are messy", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Let $Q(\\mathbf{x}) = x_1^2 - 8x_1 x_2 - 5x_2^2$. \nCompute the value of $Q(\\mathbf{x})$ for $\\mathbf{x} = \\begin{bmatrix} -3 \\\\ 1 \\end{bmatrix}$, $\\begin{bmatrix} 2 \\\\ -2 \\end{bmatrix}$, and $\\begin{bmatrix} 1 \\\\ -3 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Computation", content: "**Goal: Plug in the vectors.**", interactiveSteps: [
           { prompt: "Compute $Q(-3, 1)$.", options: [{id:"A", text:"28", isCorrect:true, explanation:"$(-3)^2 - 8(-3)(1) - 5(1)^2 = 9 + 24 - 5 = 28$."}, {id:"B", text:"-20", isCorrect:false, explanation:""}], stepText: "$Q(-3, 1) = 28$." },
           { stepText: "$Q(2, -2) = (2)^2 - 8(2)(-2) - 5(-2)^2 = 4 + 32 - 20 = 16$." },
           { stepText: "$Q(1, -3) = (1)^2 - 8(1)(-3) - 5(-3)^2 = 1 + 24 - 45 = -20$." }
        ]},
        { id: "s2", type: "theory", title: "The Problem with Cross-Terms", content: "In some cases, quadratic forms are easier to use when they have no cross-product terms—that is, when the matrix of the quadratic form is a diagonal matrix. \n\nFortunately, the cross-product term can be eliminated by making a suitable change of variable." }
      ]
    },
    {
      id: "les-4-2-3-e4", title: "Example 4: Removing Cross-Terms", description: "Using orthogonal diagonalization", icon: "Repeat",
      slides: [
        { id: "s0", type: "theory", title: "Change of Variable", content: "If $\\mathbf{x}$ represents a variable vector in $\\mathbb{R}^n$, a **change of variable** is an equation of the form:\n$$ \\mathbf{x} = P \\mathbf{y} $$\nwhere $P$ is an invertible matrix and $\\mathbf{y}$ is a new variable vector. \n\nSubstituting this into a quadratic form yields:\n$$ \\mathbf{x}^T A \\mathbf{x} = (P\\mathbf{y})^T A (P\\mathbf{y}) = \\mathbf{y}^T (P^T A P) \\mathbf{y} $$\nIf we choose $P$ to orthogonally diagonalize $A$, then $P^T A P = D$, and the new form is $\\mathbf{y}^T D \\mathbf{y}$, which has NO cross-product terms!" },
        { id: "s1", type: "example_q", title: "Example 4", content: "**Problem:** Make a change of variable that transforms the quadratic form in Example 3 ($x_1^2 - 8x_1 x_2 - 5x_2^2$) into a quadratic form with no cross-product term." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Orthogonally diagonalize the matrix of the form.**", interactiveSteps: [
           { prompt: "What is the symmetric matrix $A$ for this quadratic form?", options: [{id:"A", text:"$\\begin{bmatrix} 1 & -4 \\\\ -4 & -5 \\end{bmatrix}$", isCorrect:true, explanation:"Split the -8 cross term."}, {id:"B", text:"$\\begin{bmatrix} 1 & -8 \\\\ 0 & -5 \\end{bmatrix}$", isCorrect:false, explanation:"This matrix is not symmetric."}], stepText: "The matrix is $A = \\begin{bmatrix} 1 & -4 \\\\ -4 & -5 \\end{bmatrix}$." },
           { stepText: "Find the eigenvalues. The characteristic equation is $\\lambda^2 + 4\\lambda - 21 = 0$, giving $\\lambda = 3$ and $\\lambda = -7$." },
           { stepText: "Find the corresponding unit eigenvectors: \nFor $\\lambda=3$, $\\mathbf{u}_1 = \\begin{bmatrix} 2/\\sqrt{5} \\\\ -1/\\sqrt{5} \\end{bmatrix}$.\nFor $\\lambda=-7$, $\\mathbf{u}_2 = \\begin{bmatrix} 1/\\sqrt{5} \\\\ 2/\\sqrt{5} \\end{bmatrix}$." },
           { stepText: "Let $P = [\\mathbf{u}_1 \\ \\mathbf{u}_2]$. Then $\\mathbf{x} = P\\mathbf{y}$ transforms the quadratic form into $\\mathbf{y}^T D \\mathbf{y}$." },
           { prompt: "What is the final quadratic form in terms of $\\mathbf{y}$?", options: [{id:"A", text:"$3y_1^2 - 7y_2^2$", isCorrect:true, explanation:"The coefficients are simply the eigenvalues!"}, {id:"B", text:"$3y_1^2 + 7y_2^2$", isCorrect:false, explanation:""}], stepText: "The new quadratic form is $3y_1^2 - 7y_2^2$." }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Summary", content: "By applying the change of variable $\\mathbf{x} = P\\mathbf{y}$, the new coefficients of the squared terms are exactly the ___ of matrix $A$.", blankAnswer: "eigenvalues" }
      ]
    }
  ]
};