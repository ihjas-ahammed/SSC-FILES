import { Unit } from '../types';

export const UNIT_4_2_9: Unit = {
  id: "unit-4-2-9",
  title: "Matrices of 3D Quadratic Forms",
  description: "Exercises 5-6: Building 3x3 symmetric matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-9-ex5", title: "Exercise 5", description: "3x3 Matrix Construction", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Find the matrix of the quadratic form. Assume $\\mathbf{x}$ is in $\\mathbb{R}^3$.\n\na. $8x_1^2 + 7x_2^2 - 3x_3^2 - 6x_1 x_2 + 4x_1 x_3 - 2x_2 x_3$\nb. $4x_1 x_2 + 6x_1 x_3 - 8x_2 x_3$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part A", content: "**Goal: Map coefficients to the $3 \\times 3$ matrix.**", interactiveSteps: [
           { stepText: "Diagonals: $8, 7, -3$." },
           { prompt: "What goes in positions $(1,2)$ and $(2,1)$?", options: [{id:"A", text:"-3", isCorrect:true, explanation:"Split the -6 from $-6x_1x_2$."}, {id:"B", text:"-6", isCorrect:false, explanation:""}], stepText: "$A_{12} = A_{21} = -3$." },
           { stepText: "$x_1 x_3$ coefficient is $4$, so $A_{13} = A_{31} = 2$." },
           { stepText: "$x_2 x_3$ coefficient is $-2$, so $A_{23} = A_{32} = -1$." },
           { stepText: "Result: $A = \\begin{bmatrix} 8 & -3 & 2 \\\\ -3 & 7 & -1 \\\\ 2 & -1 & -3 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "solution", title: "Solution: Part B", content: "Form: $4x_1 x_2 + 6x_1 x_3 - 8x_2 x_3$.\n\nDiagonals: All $0$.\n$A_{12} = A_{21} = 2$\n$A_{13} = A_{31} = 3$\n$A_{23} = A_{32} = -4$\n\nResult: $A = \\begin{bmatrix} 0 & 2 & 3 \\\\ 2 & 0 & -4 \\\\ 3 & -4 & 0 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-2-9-ex6", title: "Exercise 6", description: "More 3x3 Construction", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Find the matrix of the quadratic form. Assume $\\mathbf{x}$ is in $\\mathbb{R}^3$.\n\na. $5x_1^2 - x_2^2 + 7x_3^2 + 5x_1 x_2 - 3x_1 x_3$\nb. $x_3^2 - 4x_1 x_2 + 4x_2 x_3$" },
        { id: "s1", type: "solution", title: "Solution", content: "**Part A:**\nDiagonals: $5, -1, 7$.\n$x_1x_2$ coeff is $5$, so split to $2.5$.\n$x_1x_3$ coeff is $-3$, so split to $-1.5$.\n$x_2x_3$ coeff is $0$.\n\n$A = \\begin{bmatrix} 5 & 2.5 & -1.5 \\\\ 2.5 & -1 & 0 \\\\ -1.5 & 0 & 7 \\end{bmatrix}$." },
        { id: "s2", type: "solution", title: "Solution", content: "**Part B:**\nDiagonals: $0, 0, 1$.\n$A_{12} = -2$.\n$A_{13} = 0$.\n$A_{23} = 2$.\n\n$A = \\begin{bmatrix} 0 & -2 & 0 \\\\ -2 & 0 & 2 \\\\ 0 & 2 & 1 \\end{bmatrix}$." }
      ]
    }
  ]
};