import { Unit } from '../types';

export const UNIT_2_3_11: Unit = {
  id: "unit-2-3-11",
  title: "Advanced Rank Construction",
  description: "Exercises 31-38: Constructing matrices with specific properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-11-ex31", title: "Exercise 31", description: "Rank 1 check", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Verify that $\\text{rank } (\\mathbf{u}\\mathbf{v}^T) \\le 1$ if $\\mathbf{u} = [2, -3, 5]^T$ and $\\mathbf{v} = [a, b, c]^T$." },
        { id: "s1", type: "solution", title: "Solution", content: "Matrix is $\\begin{bmatrix} 2a & 2b & 2c \\\\ -3a & -3b & -3c \\\\ 5a & 5b & 5c \\end{bmatrix}$.\nEvery column is a multiple of $[2, -3, 5]^T$. Rank is 1 (if any of a,b,c are nonzero) or 0." }
      ]
    },
    {
      id: "les-2-3-11-ex32", title: "Exercise 32", description: "Rank 2 Construction", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "**Problem:** Construct a $3 \\times 3$ matrix of rank 2." },
        { id: "s1", type: "solution", title: "Solution", content: "We need 2 independent columns. Let col 1 = $[1, 0, 0]^T$ and col 2 = $[0, 1, 0]^T$. Let col 3 be a sum of them: $[1, 1, 0]^T$.\n\n$A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-2-3-11-ex33", title: "Exercise 33", description: "Column Sum", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33", content: "**Problem:** If the sum of the columns of a matrix $A$ is zero, what can we say about the columns? Are they linearly dependent?" },
        { id: "s1", type: "solution", title: "Solution", content: "Yes. $\\mathbf{c}_1 + \\dots + \\mathbf{c}_n = \\mathbf{0}$ is a dependence relation with weights all equal to 1 (non-zero). Thus they are dependent." }
      ]
    },
    {
      id: "les-2-3-11-ex34", title: "Exercise 34", description: "Adding a column", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** If $A$ is $m \\times n$ and we add a column to make it $m \\times (n+1)$, can the rank decrease?" },
        { id: "s1", type: "solution", title: "Solution", content: "No. Adding a column either increases the dimension of the column space (if the new vector is independent) or leaves it the same. It cannot shrink the space spanned by the existing columns." }
      ]
    },
    {
      id: "les-2-3-11-ex35", title: "Exercise 35", description: "Changing an Entry", icon: "Edit",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 35", content: "**Problem:** Can changing a single entry in a matrix change its rank?" },
        { id: "s1", type: "solution", title: "Solution", content: "Yes. Consider $A = [0]$. Rank 0. Change to $[1]$. Rank 1.\nOr $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$ (Rank 1). Change to $\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$ (Rank 2)." }
      ]
    },
    {
      id: "les-2-3-11-ex36", title: "Exercise 36", description: "Rank of A + B", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 36", content: "**Problem:** Show that $\\text{rank}(A+B) \\le \\text{rank } A + \\text{rank } B$." },
        { id: "s1", type: "solution", title: "Sketch", content: "Col $(A+B) \\subseteq \\text{Col } A + \\text{Col } B$. The dimension of the sum of two subspaces is at most the sum of their dimensions." }
      ]
    },
    {
      id: "les-2-3-11-ex37", title: "Exercise 37", description: "Rank 1 Updates", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 37", content: "**Problem:** If $A$ is $m \\times n$ and rank 1, can it always be written as $\\mathbf{u}\\mathbf{v}^T$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Yes. Let $\\mathbf{u}$ be a basis for Col A. Then every column of $A$ is a scalar multiple of $\\mathbf{u}$. Let the scalars be $v_1, \\dots, v_n$. Then $A = [v_1\\mathbf{u} \\ \\dots \\ v_n\\mathbf{u}] = \\mathbf{u}[v_1 \\ \\dots \\ v_n] = \\mathbf{u}\\mathbf{v}^T$." }
      ]
    },
    {
      id: "les-2-3-11-ex38", title: "Exercise 38", description: "Null Space Intersection", icon: "Combine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 38", content: "**Problem:** If $A$ and $B$ are $n \\times n$, show that $\\text{Nul } A \\subseteq \\text{Nul } (BA)$." },
        { id: "s1", type: "solution", title: "Solution", content: "If $\\mathbf{x} \\in \\text{Nul } A$, then $A\\mathbf{x} = \\mathbf{0}$.\nThen $BA\\mathbf{x} = B(A\\mathbf{x}) = B(\\mathbf{0}) = \\mathbf{0}$.\nSo $\\mathbf{x} \\in \\text{Nul } (BA)$." }
      ]
    }
  ]
};