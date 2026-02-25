import { Unit } from '../types';

export const UNIT_3_2_14: Unit = {
  id: "unit-3-2-14",
  title: "Matrix Computations with U",
  description: "Exercises 35-36: Calculating U^T U and U U^T.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-14-ex35", title: "Exercise 35", description: "U^T U vs U U^T", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 35", content: "**Problem:** Let $A = \\begin{bmatrix} -6 & -3 & 6 & 1 \\\\ -1 & 2 & 1 & -6 \\\\ 3 & 6 & 3 & -2 \\\\ 6 & -3 & 6 & -1 \\\\ 2 & -1 & 2 & 3 \\\\ -3 & 6 & 3 & 2 \\\\ -2 & -1 & 2 & -3 \\\\ 1 & 2 & 1 & 6 \\end{bmatrix}$.\n\nLet $U$ be the matrix formed by normalizing each column of $A$.\nCompute $U^T U$ and $U U^T$. How do they differ?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Understand the properties of $U$.**", interactiveSteps: [
           { stepText: "First, note that $A$ is $8 \\times 4$. So $U$ is also an $8 \\times 4$ matrix with orthonormal columns." },
           { prompt: "Since $U$ has orthonormal columns, what is $U^T U$?", options: [{id:"A", text:"The $4 \\times 4$ Identity Matrix $I_4$", isCorrect:true, explanation:"Theorem 6 guarantees this."}, {id:"B", text:"The $8 \\times 8$ Identity Matrix $I_8$", isCorrect:false, explanation:"$U^T$ is $4 \\times 8$ and $U$ is $8 \\times 4$, so the product is $4 \\times 4$."}], stepText: "So $U^T U = I_4$." },
           { stepText: "$U U^T$ is an $8 \\times 8$ matrix. It is NOT the identity matrix because $U$ is not square." },
           { stepText: "By Theorem 10 (upcoming in Section 6.3), $U U^T \\mathbf{y}$ is the orthogonal projection of $\\mathbf{y}$ onto the column space of $U$ (which is Col A)." }
        ]}
      ]
    },
    {
      id: "les-3-2-14-ex36", title: "Exercise 36", description: "Projection Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 36", content: "**Problem:** This exercise continues exploring the matrix $U U^T$. Generate a random vector $\\mathbf{y}$ in $\\mathbb{R}^8$, and compute $\\mathbf{p} = U U^T \\mathbf{y}$ and $\\mathbf{z} = \\mathbf{y} - \\mathbf{p}$.\n\nVerify that $\\mathbf{p}$ is in $\\text{Col } A$ and that $\\mathbf{z}$ is orthogonal to $\\mathbf{p}$." },
        { id: "s1", type: "solution", title: "Solution", content: "Since $\\mathbf{p} = U(U^T \\mathbf{y})$, it is a linear combination of the columns of $U$. Since the columns of $U$ span $\\text{Col } A$, $\\mathbf{p}$ is in $\\text{Col } A$.\n\nTo check orthogonality:\n$\\mathbf{p} \\cdot \\mathbf{z} = \\mathbf{p}^T \\mathbf{z} = (U U^T \\mathbf{y})^T (\\mathbf{y} - U U^T \\mathbf{y})$\n$= \\mathbf{y}^T U U^T (\\mathbf{y} - U U^T \\mathbf{y}) = \\mathbf{y}^T U U^T \\mathbf{y} - \\mathbf{y}^T U U^T U U^T \\mathbf{y}$\n\nSince $U^T U = I$, the second term becomes $\\mathbf{y}^T U I U^T \\mathbf{y} = \\mathbf{y}^T U U^T \\mathbf{y}$.\n\nThe difference is exactly 0! Thus $\\mathbf{z} \\perp \\mathbf{p}$." }
      ]
    }
  ]
};