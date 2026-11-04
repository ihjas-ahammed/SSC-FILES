import { Unit } from '../types';

export const UNIT_2_1_8: Unit = {
  id: "unit-2-1-8",
  title: "The Change-of-Coordinates Matrix P_B",
  description: "Exercises 9-10: Finding the matrix P_B.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-8-ex9", title: "Exercise 9", description: "P_B for R2", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find the change-of-coordinates matrix from $\\mathcal{B}$ to the standard basis in $\\mathbb{R}^2$.\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ -3 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -5 \\end{bmatrix} \\right\\}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct $P_\\mathcal{B}$.**", interactiveSteps: [
           { stepText: "The change-of-coordinates matrix $P_\\mathcal{B}$ maps coordinate vectors $[\\mathbf{x}]_\\mathcal{B}$ into the standard space $\\mathbb{R}^n$." },
           { prompt: "How is $P_\\mathcal{B}$ formed?", options: [{id:"A", text:"By placing the basis vectors as its columns.", isCorrect:true, explanation:"$P_\\mathcal{B} = [\\mathbf{b}_1 \\ \\mathbf{b}_2]$."}, {id:"B", text:"By placing the basis vectors as its rows.", isCorrect:false, explanation:"Matrix-vector multiplication uses columns."}], stepText: "The matrix is exactly the columns arranged side by side." },
           { stepText: "Therefore, $P_\\mathcal{B} = \\begin{bmatrix} 1 & 2 \\\\ -3 & -5 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-8-ex10", title: "Exercise 10", description: "P_B for R3", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find the change-of-coordinates matrix from $\\mathcal{B}$ to the standard basis in $\\mathbb{R}^3$.\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 3 \\\\ 0 \\\\ 6 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 2 \\\\ -4 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ -2 \\\\ 3 \\end{bmatrix} \\right\\}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Assemble the matrix.**", interactiveSteps: [
           { stepText: "We want a matrix $P_\\mathcal{B}$ such that $P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B} = \\mathbf{x}$." },
           { prompt: "What is the second column of $P_\\mathcal{B}$?", options: [{id:"A", text:"$[2, 2, -4]^T$", isCorrect:true, explanation:"The second basis vector is the second column."}, {id:"B", text:"$[0, 2, -2]^T$", isCorrect:false, explanation:"That's the second row, not the column."}], stepText: "The columns correspond exactly to the basis vectors in order." },
           { stepText: "Thus, $P_\\mathcal{B} = \\begin{bmatrix} 3 & 2 & 1 \\\\ 0 & 2 & -2 \\\\ 6 & -4 & 3 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};