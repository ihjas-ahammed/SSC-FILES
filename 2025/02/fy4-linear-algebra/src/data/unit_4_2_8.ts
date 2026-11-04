import { Unit } from '../types';

export const UNIT_4_2_8: Unit = {
  id: "unit-4-2-8",
  title: "Evaluating and Constructing Quadratic Forms",
  description: "Exercises 1-4: Computing quadratic forms and their matrices in 2D.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-8-ex1", title: "Exercise 1", description: "Evaluating x^T A x", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Compute the quadratic form $\\mathbf{x}^T A \\mathbf{x}$, when $A = \\begin{bmatrix} 5 & 1/3 \\\\ 1/3 & 1 \\end{bmatrix}$ and\n\na. $\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$\n\nb. $\\mathbf{x} = \\begin{bmatrix} 6 \\\\ 1 \\end{bmatrix}$\n\nc. $\\mathbf{x} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Part A", content: "Let $\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$.\n\nThe diagonal entries give the coefficients for $x_1^2$ and $x_2^2$: $5x_1^2$ and $1x_2^2$.\nThe off-diagonal entry gives the cross term. Since it's split symmetrically, we add them: $(1/3 + 1/3)x_1 x_2 = \\frac{2}{3} x_1 x_2$.\n\nResult: $Q(\\mathbf{x}) = 5x_1^2 + \\frac{2}{3}x_1 x_2 + x_2^2$." },
        { id: "s2", type: "solution", title: "Interactive Part B", content: "**Goal: Evaluate for $\\mathbf{x} = \\begin{bmatrix} 6 \\\\ 1 \\end{bmatrix}$.**", interactiveSteps: [
           { stepText: "Substitute $x_1 = 6$ and $x_2 = 1$ into $5x_1^2 + \\frac{2}{3}x_1 x_2 + x_2^2$." },
           { prompt: "Calculate the value.", options: [{id:"A", text:"185", isCorrect:true, explanation:"$5(36) + (2/3)(6)(1) + 1 = 180 + 4 + 1 = 185$."}, {id:"B", text:"180", isCorrect:false, explanation:""}], stepText: "The value is 185." }
        ]},
        { id: "s3", type: "solution", title: "Interactive Part C", content: "**Goal: Evaluate for $\\mathbf{x} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$.**", interactiveSteps: [
           { stepText: "Substitute $x_1 = 1$ and $x_2 = 3$ into the polynomial." },
           { prompt: "Calculate the value.", options: [{id:"A", text:"16", isCorrect:true, explanation:"$5(1) + (2/3)(1)(3) + 9 = 5 + 2 + 9 = 16$."}, {id:"B", text:"22", isCorrect:false, explanation:""}], stepText: "The value is 16." }
        ]}
      ]
    },
    {
      id: "les-4-2-8-ex2", title: "Exercise 2", description: "Evaluating a 3x3 Form", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Compute the quadratic form $\\mathbf{x}^T A \\mathbf{x}$, for $A = \\begin{bmatrix} 4 & 3 & 0 \\\\ 3 & 2 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}$ and\n\n$\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix}$, $\\mathbf{x} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 5 \\end{bmatrix}$, $\\mathbf{x} = \\begin{bmatrix} 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Part A: Polynomial", content: "Diagonal entries: $4x_1^2 + 2x_2^2 + 1x_3^2$.\nCross terms (double the off-diagonals):\n$(1,2)$: $3+3 = 6x_1 x_2$\n$(1,3)$: $0+0 = 0x_1 x_3$\n$(2,3)$: $1+1 = 2x_2 x_3$\n\nResult: $Q(\\mathbf{x}) = 4x_1^2 + 2x_2^2 + x_3^2 + 6x_1 x_2 + 2x_2 x_3$." },
        { id: "s2", type: "solution", title: "Part B: Vector 1", content: "Substitute $\\mathbf{x} = [2, -1, 5]^T$:\n$4(4) + 2(1) + 25 + 6(2)(-1) + 2(-1)(5)$\n$= 16 + 2 + 25 - 12 - 10$\n$= 43 - 22 = 21$." },
        { id: "s3", type: "solution", title: "Part C: Vector 2", content: "Substitute $\\mathbf{x} = [1/\\sqrt{3}, 1/\\sqrt{3}, 1/\\sqrt{3}]^T$:\nNotice this vector is $\\frac{1}{\\sqrt{3}}[1, 1, 1]^T$.\nLet's evaluate $Q(1,1,1)$ and then multiply by $(1/\\sqrt{3})^2 = 1/3$.\n$Q(1,1,1) = 4 + 2 + 1 + 6 + 2 = 15$.\n\nResult: $\\frac{1}{3} \\times 15 = 5$." }
      ]
    },
    {
      id: "les-4-2-8-ex3", title: "Exercise 3", description: "Finding the Matrix A", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Find the matrix of the quadratic form. Assume $\\mathbf{x}$ is in $\\mathbb{R}^2$.\n\na. $10x_1^2 - 6x_1 x_2 - 3x_2^2$\nb. $5x_1^2 + 3x_1 x_2$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part A", content: "**Goal: Construct $A$ for $10x_1^2 - 6x_1 x_2 - 3x_2^2$.**", interactiveSteps: [
           { stepText: "Diagonal entries: $A_{11} = 10, A_{22} = -3$." },
           { prompt: "What are the off-diagonal entries $A_{12}$ and $A_{21}$?", options: [{id:"A", text:"-3", isCorrect:true, explanation:"Split -6 evenly."}, {id:"B", text:"-6", isCorrect:false, explanation:""}], stepText: "Both are $-3$." },
           { stepText: "$A = \\begin{bmatrix} 10 & -3 \\\\ -3 & -3 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part B", content: "**Goal: Construct $A$ for $5x_1^2 + 3x_1 x_2$.**", interactiveSteps: [
           { stepText: "Diagonal entries: $A_{11} = 5, A_{22} = 0$ (since there is no $x_2^2$ term)." },
           { prompt: "What are the off-diagonal entries?", options: [{id:"A", text:"3/2", isCorrect:true, explanation:"Split 3 evenly."}, {id:"B", text:"3", isCorrect:false, explanation:""}], stepText: "Both are $3/2$." },
           { stepText: "$A = \\begin{bmatrix} 5 & 1.5 \\\\ 1.5 & 0 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-2-8-ex4", title: "Exercise 4", description: "Finding the Matrix A (Part 2)", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Find the matrix of the quadratic form. Assume $\\mathbf{x}$ is in $\\mathbb{R}^2$.\n\na. $20x_1^2 + 15x_1 x_2 - 10x_2^2$\nb. $x_1 x_2$" },
        { id: "s1", type: "solution", title: "Solution", content: "**Part A:**\nDiagonals: $20, -10$.\nOff-diagonals: $15 / 2 = 7.5$.\n$A = \\begin{bmatrix} 20 & 7.5 \\\\ 7.5 & -10 \\end{bmatrix}$." },
        { id: "s2", type: "solution", title: "Solution", content: "**Part B:**\nDiagonals: $0, 0$ (no squared terms).\nOff-diagonals: $1 / 2 = 0.5$.\n$A = \\begin{bmatrix} 0 & 0.5 \\\\ 0.5 & 0 \\end{bmatrix}$." }
      ]
    }
  ]
};