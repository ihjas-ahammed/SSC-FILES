import { Unit } from '../types';

export const UNIT_2_1_3: Unit = {
  id: "unit-2-1-3",
  title: "The Change-of-Coordinates Matrix",
  description: "Connecting the abstract to computation using matrix P_B (Example 4).",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-3-pb", title: "The Matrix P_B", description: "Using matrices to change coordinates", icon: "Repeat",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If $\\mathbf{x} = c_1\\mathbf{b}_1 + c_2\\mathbf{b}_2$, how can we rewrite this as a matrix multiplication?", options: [{id:"A", text:"$[\\mathbf{b}_1 \\ \\mathbf{b}_2] \\begin{bmatrix} c_1 \\\\ c_2 \\end{bmatrix}$", isCorrect:true, explanation:"A matrix-vector product is exactly a linear combination of the matrix's columns."}, {id:"B", text:"$\\begin{bmatrix} c_1 \\\\ c_2 \\end{bmatrix} [\\mathbf{b}_1 \\ \\mathbf{b}_2]$", isCorrect:false, explanation:"Dimension mismatch."}] },
        { id: "s1", type: "theory", title: "The Change-of-Coordinates Matrix", content: "For a basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ in $\\mathbb{R}^n$, we define the **change-of-coordinates matrix** $P_\\mathcal{B}$ as the matrix whose columns are the basis vectors:\n\n$$ P_\\mathcal{B} = [\\mathbf{b}_1 \\ \\mathbf{b}_2 \\ \\dots \\ \\mathbf{b}_n] $$\n\nThe vector equation $\\mathbf{x} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$ is equivalent to:\n$$ \\mathbf{x} = P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B} $$" },
        { id: "s2", type: "theory", title: "Inverting P_B", content: "Since the columns of $P_\\mathcal{B}$ form a basis for $\\mathbb{R}^n$, they are linearly independent. By the Invertible Matrix Theorem, $P_\\mathcal{B}$ is invertible.\n\nLeft-multiplying both sides by $P_\\mathcal{B}^{-1}$ gives us a direct way to find coordinates:\n$$ P_\\mathcal{B}^{-1} \\mathbf{x} = [\\mathbf{x}]_\\mathcal{B} $$" }
      ]
    },
    {
      id: "les-2-1-3-ex4", title: "Example 4", description: "Finding the coordinate vector", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Let $\\mathbf{b}_1 = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$, $\\mathbf{b}_2 = \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$, $\\mathbf{x} = \\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$, and $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$.\n\nFind the coordinate vector $[\\mathbf{x}]_\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B} = \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "We need to find $c_1, c_2$ such that $c_1\\mathbf{b}_1 + c_2\\mathbf{b}_2 = \\mathbf{x}$." },
           { prompt: "Set up the augmented matrix for this system.", options: [{id:"A", text:"$\\begin{bmatrix} 2 & -1 & 4 \\\\ 1 & 1 & 5 \\end{bmatrix}$", isCorrect:true, explanation:"The columns are b1, b2, and the augmented part is x."}, {id:"B", text:"$\\begin{bmatrix} 4 & 5 & 2 \\\\ 1 & -1 & 1 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "The augmented matrix is $[ \\mathbf{b}_1 \\ \\mathbf{b}_2 \\ | \\ \\mathbf{x} ] = \\begin{bmatrix} 2 & -1 & 4 \\\\ 1 & 1 & 5 \\end{bmatrix}$." },
           { stepText: "Row reduce the matrix:\n$R_1 \leftrightarrow R_2 \\implies \\begin{bmatrix} 1 & 1 & 5 \\\\ 2 & -1 & 4 \\end{bmatrix}$\n$R_2 - 2R_1 \\implies \\begin{bmatrix} 1 & 1 & 5 \\\\ 0 & -3 & -6 \\end{bmatrix}$" },
           { prompt: "Solve for $c_2$ using the second row.", options: [{id:"A", text:"$c_2 = 2$", isCorrect:true, explanation:"$-3c_2 = -6 \\implies c_2 = 2$."}, {id:"B", text:"$c_2 = -2$", isCorrect:false, explanation:""}], stepText: "We get $c_2 = 2$." },
           { stepText: "Substitute back: $c_1 + 2 = 5 \\implies c_1 = 3$." },
           { stepText: "Thus, the coordinate vector is $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Summary", content: "To find the coordinate vector of $\\mathbf{x}$ relative to $\\mathcal{B}$, we solve a linear system where the augmented matrix has the basis vectors as columns and $\\mathbf{x}$ as the ___ column.", blankAnswer: "last" }
      ]
    }
  ]
};