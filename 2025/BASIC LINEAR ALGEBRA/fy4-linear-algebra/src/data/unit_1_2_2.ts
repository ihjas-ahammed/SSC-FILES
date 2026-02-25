import { Unit } from '../types';

export const UNIT_1_2_2: Unit = {
  id: "unit-1-2-2",
  title: "Explicit Description of Nul A",
  description: "Solving for the Spanning Set (Example 3).",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-2-ex3", title: "Example 3: Finding the Basis", description: "Calculating the spanning set", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Find a spanning set for the null space of the matrix:\n$$ A = \\begin{bmatrix} -3 & 6 & -1 & 1 & -7 \\\\ 1 & -2 & 2 & 3 & -1 \\\\ 2 & -4 & 5 & 8 & -4 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $A\\mathbf{x}=\\mathbf{0}$ and express $\\mathbf{x}$ in parametric vector form.**", interactiveSteps: [
           { stepText: "First, row reduce the augmented matrix $[A \\ \\mathbf{0}]$ to reduced echelon form." },
           { stepText: "The RREF is $\\begin{bmatrix} 1 & -2 & 0 & -1 & 3 & 0 \\\\ 0 & 0 & 1 & 2 & -2 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 0 \\end{bmatrix}$." },
           { prompt: "Identify the free variables.", options: [{id:"A", text:"$x_2, x_4, x_5$", isCorrect:true, explanation:"Columns 2, 4, 5 have no pivots."}, {id:"B", text:"$x_1, x_3$", isCorrect:false, explanation:"Those are the pivot variables."}], stepText: "Express pivot variables in terms of free variables:\n$x_1 = 2x_2 + x_4 - 3x_5$\n$x_3 = -2x_4 + 2x_5$" },
           { stepText: "Write the general solution vector $\\mathbf{x}$ as a linear combination of vectors weighted by free variables." },
           { stepText: "$ \\mathbf{x} = x_2 \\begin{bmatrix} 2 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix} + x_4 \\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\\\ 1 \\\\ 0 \\end{bmatrix} + x_5 \\begin{bmatrix} -3 \\\\ 0 \\\\ 2 \\\\ 0 \\\\ 1 \\end{bmatrix} $" },
           { stepText: "The spanning set for Nul A is these three vectors." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Summary", content: "The number of vectors in the spanning set for Nul A equals the number of ___ variables in the equation $Ax=0$.", blankAnswer: "free" }
      ]
    }
  ]
};