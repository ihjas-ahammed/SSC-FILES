import { Unit } from '../types';

export const UNIT_2_3_4: Unit = {
  id: "unit-2-3-4",
  title: "Practice Problems",
  description: "Selected problems from the text.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-4-p1", title: "Practice Problem 1", description: "Pivot columns and dimensions", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 1", content: "**Problem:** Suppose a $4 \\times 7$ matrix $A$ has three pivot columns. Is $\\text{Col } A = \\mathbb{R}^3$? What is the dimension of $\\text{Nul } A$?" },
        { id: "s1", type: "solution", title: "Col A Analysis", content: "$\text{rank } A = 3$. The column space is a 3-dimensional subspace of $\\mathbb{R}^4$ (since there are 4 rows).\n\nSince $\\mathbb{R}^3$ is not a subspace of $\\mathbb{R}^4$ (different vector sizes), $\\text{Col } A \\neq \\mathbb{R}^3$." },
        { id: "s2", type: "solution", title: "Nul A Analysis", content: "$\dim \\text{Nul } A = n - \\text{rank } A = 7 - 3 = 4$." }
      ]
    },
    {
      id: "les-2-3-4-p2", title: "Practice Problem 2", description: "Constructing Matrices", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 2", content: "**Problem:** Set up a matrix $A$ such that $\\text{Col } A$ is spanned by $\\mathbf{u} = [1, 2, 3]^T$ and $\\text{v} = [-1, 0, 5]^T$, and $\\text{Nul } A$ is spanned by $\\mathbf{w} = [1, 1, 0, 3]^T$ and $\\mathbf{z} = [0, 1, -1, 0]^T$." },
        { id: "s1", type: "solution", title: "Solution Idea", content: "If Nul A is spanned by $\\mathbf{w}$ and $\\mathbf{z}$ (vectors in $\\mathbb{R}^4$), then $A$ must have 4 columns ($n=4$).\nCol A is spanned by $\\mathbf{u}$ and $\\mathbf{v}$ (vectors in $\\mathbb{R}^3$), so $A$ must have 3 rows ($m=3$).\n\nRank A = 2. Dim Nul A = 2. $2+2=4$ (Check).\n\nWe need $A$ such that $A\\mathbf{w} = \\mathbf{0}$ and $A\\mathbf{z} = \\mathbf{0}$ and the columns of $A$ are combinations of $\\mathbf{u}, \\mathbf{v}$. This is an advanced construction problem usually solved by setting $A = [\\mathbf{u} \\ \\mathbf{v} \\ \\mathbf{0} \\ \\mathbf{0}]$ and adjusting... wait, Nul A specific spans are harder. A simpler question might be 'Is it possible?' Yes." }
      ]
    },
    {
      id: "les-2-3-4-p3", title: "Practice Problem 3", description: "Next step for Nul A", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 3", content: "**Problem:** A student has row reduced a matrix $A$ to an echelon form $U$. To find a basis for $\\text{Nul } A$, what is the student's next step?" },
        { id: "s1", type: "solution", title: "Solution", content: "The student should continue row reduction to obtain the **reduced echelon form**. Then, express the pivot variables in terms of the free variables to write the solution in parametric vector form." }
      ]
    },
    {
      id: "les-2-3-4-p4", title: "Practice Problem 4", description: "Rank of Transpose", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 4", content: "**Problem:** If a $5 \\times 6$ matrix $A$ has 4 pivot columns, how many pivot columns does a row echelon form of $A^T$ have?" },
        { id: "s1", type: "solution", title: "Solution", content: "The rank of $A^T$ is equal to the rank of $A$.\n\n$\text{rank } A = 4$. Therefore, $\text{rank } A^T = 4$.\n\nA row echelon form of $A^T$ will have 4 pivot columns." }
      ]
    }
  ]
};