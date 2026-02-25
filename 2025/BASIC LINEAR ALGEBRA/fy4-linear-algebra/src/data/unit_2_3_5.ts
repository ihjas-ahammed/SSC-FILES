import { Unit } from '../types';

export const UNIT_2_3_5: Unit = {
  id: "unit-2-3-5",
  title: "Finding Bases and Rank",
  description: "Exercises 1-4: Using row-equivalent forms to find bases for Row A, Col A, and Nul A.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-5-ex1", title: "Exercise 1", description: "Matrix A and B given", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Assume the matrix $A$ is row equivalent to $B$. Without calculations, list $\\text{rank } A$ and $\\dim \\text{Nul } A$. Then find bases for $\\text{Col } A$, $\\text{Row } A$, and $\\text{Nul } A$.\n\n$$ A = \\begin{bmatrix} 1 & -4 & 9 & -7 \\\\ -1 & 2 & -4 & 1 \\\\ 5 & -6 & 10 & 7 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 & 0 & -1 & 5 \\\\ 0 & -2 & 5 & -6 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Rank and Nullity", content: "**Rank:** The echelon form $B$ has 2 pivot positions (cols 1 and 2). Thus $\\text{rank } A = 2$.\n\n**Nullity:** The matrix has $n=4$ columns. By the Rank Theorem, $\\dim \\text{Nul } A = 4 - 2 = 2$." },
        { id: "s2", type: "solution", title: "Bases", content: "**Basis for Col A:** The pivot columns of $A$ (cols 1 and 2): $\\{ [1, -1, 5]^T, [-4, 2, -6]^T \\}$.\n\n**Basis for Row A:** The nonzero rows of $B$: $\\{ (1, 0, -1, 5), (0, -2, 5, -6) \\}$.\n\n**Basis for Nul A:** Solve $B\\mathbf{x}=\\mathbf{0}$. $x_1 = x_3 - 5x_4$, $x_2 = 2.5x_3 - 3x_4$. Basis: $\\{ [1, 2.5, 1, 0]^T, [-5, -3, 0, 1]^T \\}$." }
      ]
    },
    {
      id: "les-2-3-5-ex2", title: "Exercise 2", description: "5-column Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** $A$ is row equivalent to $B$. Find bases and dimensions.\n\n$$ A = \\begin{bmatrix} 1 & 3 & 4 & -1 & 2 \\\\ 2 & 6 & 6 & 0 & -3 \\\\ 3 & 9 & 3 & 6 & -3 \\\\ 3 & 9 & 0 & 9 & 0 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 & 3 & 4 & -1 & 2 \\\\ 0 & 0 & 1 & -1 & 1 \\\\ 0 & 0 & 0 & 0 & -5 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify Pivots.**", interactiveSteps: [
           { prompt: "Which columns of B have pivots?", options: [{id:"A", text:"1, 2, 3", isCorrect:false, explanation:"Col 2 has no pivot."}, {id:"B", text:"1, 3, 5", isCorrect:true, explanation:"Leading entries."}], stepText: "Pivots in 1, 3, 5. Rank = 3." },
           { stepText: "Dimension of Nul A = $5 - 3 = 2$." },
           { stepText: "Basis for Col A: Columns 1, 3, 5 of **A**." },
           { stepText: "Basis for Row A: Rows 1, 2, 3 of **B**." },
           { stepText: "Basis for Nul A: From $B\\mathbf{x}=\\mathbf{0}$, free vars $x_2, x_4$." }
        ]}
      ]
    },
    {
      id: "les-2-3-5-ex3", title: "Exercise 3", description: "Zero Rows in B", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Given $A$ and $B$, find rank and bases.\n$$ A = \\begin{bmatrix} 2 & 6 & -6 & 6 & 3 & 6 \\\\ -2 & -3 & 6 & -3 & 0 & -6 \\\\ 4 & 9 & -12 & 9 & 3 & 12 \\\\ -2 & 3 & 6 & 3 & 3 & -6 \\end{bmatrix}, \\ B = \\begin{bmatrix} 2 & 6 & -6 & 6 & 3 & 6 \\\\ 0 & 3 & 0 & 3 & 3 & 0 \\\\ 0 & 0 & 0 & 0 & 3 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "**Rank:** 3 (3 pivots).\n**Nullity:** $6 - 3 = 3$.\n\n**Basis Col A:** Cols 1, 2, 5 of A.\n**Basis Row A:** Nonzero rows of B.\n**Basis Nul A:** Correspond to free vars $x_3, x_4, x_6$." }
      ]
    },
    {
      id: "les-2-3-5-ex4", title: "Exercise 4", description: "Complex Reduction", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Assume row equivalence. Find dimensions.\n$$ A = \\dots (5 \\times 6), \\quad B = \\begin{bmatrix} 1 & 1 & -2 & 0 & 1 & -2 \\\\ 0 & 1 & -1 & 0 & -3 & -1 \\\\ 0 & 0 & 1 & 1 & -13 & -1 \\\\ 0 & 0 & 0 & 0 & 1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 & 1 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Pivots in columns 1, 2, 3, 5, 6.\nRank = 5.\nNullity = $6 - 5 = 1$.\n\nOnly $x_4$ is free." }
      ]
    }
  ]
};