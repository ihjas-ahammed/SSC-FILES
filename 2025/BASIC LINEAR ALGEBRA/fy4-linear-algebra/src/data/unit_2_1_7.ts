import { Unit } from '../types';

export const UNIT_2_1_7: Unit = {
  id: "unit-2-1-7",
  title: "Finding Coordinate Vectors",
  description: "Exercises 5-8: Solving linear systems to find coordinates.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-7-ex5", title: "Exercise 5", description: "Solving for [x]_B", icon: "Terminal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Find the coordinate vector $[\\mathbf{x}]_\\mathcal{B}$ relative to the given basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$.\n\n$\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} 3 \\\\ -5 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $c_1\\mathbf{b}_1 + c_2\\mathbf{b}_2 = \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "Set up the augmented matrix: $\\begin{bmatrix} 1 & 3 & -1 \\\\ -2 & -5 & 1 \\end{bmatrix}$." },
           { prompt: "To eliminate the -2 in the second row, we perform $R_2 + 2R_1$. What is the new second row?", options: [{id:"A", text:"$[0 \\ 1 \\ -1]$", isCorrect:true, explanation:"$-2+2=0$, $-5+6=1$, $1-2=-1$."}, {id:"B", text:"$[0 \\ 1 \\ 1]$", isCorrect:false, explanation:""}], stepText: "The matrix becomes $\\begin{bmatrix} 1 & 3 & -1 \\\\ 0 & 1 & -1 \\end{bmatrix}$." },
           { stepText: "From row 2, $c_2 = -1$." },
           { stepText: "Substitute into row 1: $c_1 + 3(-1) = -1 \\implies c_1 - 3 = -1 \\implies c_1 = 2$." },
           { stepText: "The coordinate vector is $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-7-ex6", title: "Exercise 6", description: "System in R2", icon: "Terminal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Find $[\\mathbf{x}]_\\mathcal{B}$ for:\n\n$\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ -4 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} 2 \\\\ -3 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} -1 \\\\ -6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve the augmented matrix $[ \\mathbf{b}_1 \\ \\mathbf{b}_2 \\ | \\ \\mathbf{x} ]$.**", interactiveSteps: [
           { stepText: "Augmented matrix: $\\begin{bmatrix} 1 & 2 & -1 \\\\ -4 & -3 & -6 \\end{bmatrix}$." },
           { stepText: "$R_2 + 4R_1 \\implies \\begin{bmatrix} 1 & 2 & -1 \\\\ 0 & 5 & -10 \\end{bmatrix}$." },
           { prompt: "Solve for $c_2$.", options: [{id:"A", text:"$c_2 = -2$", isCorrect:true, explanation:"$5c_2 = -10$."}, {id:"B", text:"$c_2 = 2$", isCorrect:false, explanation:""}], stepText: "Thus, $c_2 = -2$." },
           { stepText: "Row 1: $c_1 + 2(-2) = -1 \\implies c_1 - 4 = -1 \\implies c_1 = 3$." },
           { stepText: "Coordinate vector: $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 3 \\\\ -2 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-7-ex7", title: "Exercise 7", description: "System in R3", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Find $[\\mathbf{x}]_\\mathcal{B}$ where:\n$\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ -1 \\\\ -3 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} -3 \\\\ 4 \\\\ 9 \\end{bmatrix}, \\mathbf{b}_3 = \\begin{bmatrix} 2 \\\\ -2 \\\\ 4 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 8 \\\\ -9 \\\\ 6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Row reduction of $3 \\times 4$ matrix.**", interactiveSteps: [
           { stepText: "Set up $[ P_\\mathcal{B} \\ | \\ \\mathbf{x} ]$: $\\begin{bmatrix} 1 & -3 & 2 & 8 \\\\ -1 & 4 & -2 & -9 \\\\ -3 & 9 & 4 & 6 \\end{bmatrix}$." },
           { stepText: "Eliminate col 1: $R_2 + R_1 \\to R_2$ gives $[0 \\ 1 \\ 0 \\ -1]$.\n$R_3 + 3R_1 \\to R_3$ gives $[0 \\ 0 \\ 10 \\ 30]$." },
           { prompt: "From the new $R_2$ and $R_3$, what are $c_2$ and $c_3$?", options: [{id:"A", text:"$c_2 = -1, c_3 = 3$", isCorrect:true, explanation:"$1c_2 = -1$ and $10c_3 = 30$."}, {id:"B", text:"$c_2 = 1, c_3 = -3$", isCorrect:false, explanation:""}], stepText: "We immediately see $c_2 = -1$ and $c_3 = 3$." },
           { stepText: "Plug into $R_1$: $c_1 - 3(-1) + 2(3) = 8 \\implies c_1 + 3 + 6 = 8 \\implies c_1 = -1$." },
           { stepText: "$[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -1 \\\\ -1 \\\\ 3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-7-ex8", title: "Exercise 8", description: "R3 reduction", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Find $[\\mathbf{x}]_\\mathcal{B}$ where:\n$\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 3 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} 2 \\\\ 0 \\\\ 8 \\end{bmatrix}, \\mathbf{b}_3 = \\begin{bmatrix} 1 \\\\ -1 \\\\ 3 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 0 \\\\ 0 \\\\ -2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Row reduce $[\\mathbf{b}_1 \\ \\mathbf{b}_2 \\ \\mathbf{b}_3 \\ | \\ \\mathbf{x}]$.**", interactiveSteps: [
           { stepText: "Matrix: $\\begin{bmatrix} 1 & 2 & 1 & 0 \\\\ 1 & 0 & -1 & 0 \\\\ 3 & 8 & 3 & -2 \\end{bmatrix}$." },
           { stepText: "$R_2 - R_1 \\to [0 \\ -2 \\ -2 \\ | \\ 0]$.\n$R_3 - 3R_1 \\to [0 \\ 2 \\ 0 \\ | \\ -2]$." },
           { prompt: "Add new $R_2$ to new $R_3$. What is the resulting 3rd row?", options: [{id:"A", text:"$[0 \\ 0 \\ -2 \\ | \\ -2]$", isCorrect:true, explanation:"$(0+0), (-2+2), (-2+0) | (0-2)$."}, {id:"B", text:"$[0 \\ 0 \\ 2 \\ | \\ 2]$", isCorrect:false, explanation:""}], stepText: "New $R_3$ is $[0 \\ 0 \\ -2 \\ | \\ -2]$. Thus $-2c_3 = -2 \\implies c_3 = 1$." },
           { stepText: "From $R_3$ before addition: $2c_2 = -2 \\implies c_2 = -1$." },
           { stepText: "From $R_1$: $c_1 + 2(-1) + 1(1) = 0 \\implies c_1 = 1$." },
           { stepText: "Result: $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};