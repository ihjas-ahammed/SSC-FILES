import { Unit } from '../types';

export const UNIT_2_3_1: Unit = {
  id: "unit-2-3-1",
  title: "The Row Space",
  description: "Example 1, Theorem 13, and Example 2: Understanding vectors in row form.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-1-ex1", title: "Example 1: Row Vectors", description: "Identifying the Row Space", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "theory", title: "Definition: Row Space", content: "If $A$ is an $m \\times n$ matrix, each row of $A$ has $n$ entries and can be identified with a vector in $\\mathbb{R}^n$.\n\nThe set of all linear combinations of the row vectors is called the **row space** of $A$, denoted by $\\text{Row } A$." },
        { id: "s1", type: "quiz", title: "Dimension Check", content: "If $A$ is a $4 \\times 7$ matrix, in which space does $\\text{Row } A$ reside?", options: [{id:"A", text:"$\\mathbb{R}^4$", isCorrect:false, explanation:"There are 4 rows, but each row has 7 entries."}, {id:"B", text:"$\\mathbb{R}^7$", isCorrect:true, explanation:"Each row vector has $n=7$ components."}] },
        { id: "s2", type: "example_q", title: "Example 1", content: "**Problem:** Let $A = \\begin{bmatrix} -2 & -5 & 8 & 0 & -17 \\\\ 1 & 3 & -5 & 1 & 5 \\\\ 3 & 11 & -19 & 7 & 1 \\\\ 1 & 7 & -13 & 5 & -3 \\end{bmatrix}$.\n\nExpress $\\text{Row } A$ using standard vector notation." },
        { id: "s3", type: "solution", title: "Solution", content: "Let $\\mathbf{r}_1, \\mathbf{r}_2, \\mathbf{r}_3, \\mathbf{r}_4$ be the rows of $A$. Then:\n$$ \\text{Row } A = \\text{Span}\\{\\mathbf{r}_1, \\mathbf{r}_2, \\mathbf{r}_3, \\mathbf{r}_4\\} $$\n\nNotice we often write row vectors horizontally, e.g., $\\mathbf{r}_1 = (-2, -5, 8, 0, -17)$." }
      ]
    },
    {
      id: "les-2-3-1-thm13", title: "Theorem 13: Row Equivalence", description: "Basis for Row Space", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 13", content: "**Theorem 13:** If two matrices $A$ and $B$ are row equivalent, then their row spaces are the same.\n\nIf $B$ is in echelon form, the **nonzero rows of B** form a **basis** for the row space of $A$ as well as for that of $B$." },
        { id: "s1", type: "quiz", title: "Concept Check", content: "To find a basis for $\\text{Col } A$, we use pivot columns from $A$. To find a basis for $\\text{Row } A$, we use non-zero rows from...?", options: [{id:"A", text:"The original matrix A", isCorrect:false, explanation:"The rows of A might be linearly dependent."}, {id:"B", text:"The echelon form B", isCorrect:true, explanation:"The nonzero rows of B are automatically independent and span the same space."}] },
        { id: "s2", type: "fill_in_blank", title: "Row Ops", content: "Elementary row operations change the linear dependence relations among the rows, but they do **not** change the ___ spanned by the rows.", blankAnswer: "space" }
      ]
    },
    {
      id: "les-2-3-1-ex2", title: "Example 2: All 3 Spaces", description: "Bases for Row, Col, Nul", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Find bases for the row space, the column space, and the null space of:\n$$ A = \\begin{bmatrix} -2 & -5 & 8 & 0 & -17 \\\\ 1 & 3 & -5 & 1 & 5 \\\\ 3 & 11 & -19 & 7 & 1 \\\\ 1 & 7 & -13 & 5 & -3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Step 1: Row Reduction", content: "Row reducing $A$ to echelon form $B$ yields:\n$$ B = \\begin{bmatrix} 1 & 3 & -5 & 1 & 5 \\\\ 0 & 1 & -2 & 2 & -7 \\\\ 0 & 0 & 0 & -4 & 20 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s2", type: "solution", title: "Basis for Row A", content: "The nonzero rows of $B$ form a basis for $\\text{Row } A$:\n$$ \\text{Basis} = \\{(1, 3, -5, 1, 5), (0, 1, -2, 2, -7), (0, 0, 0, -4, 20)\\} $$" },
        { id: "s3", type: "solution", title: "Basis for Col A", content: "The pivot columns are 1, 2, and 4. The basis for $\\text{Col } A$ uses the corresponding columns from **A**:\n$$ \\left\\{ \\begin{bmatrix} -2 \\\\ 1 \\\\ 3 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} -5 \\\\ 3 \\\\ 11 \\\\ 7 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 7 \\\\ 5 \\end{bmatrix} \\right\\} $$" },
        { id: "s4", type: "solution", title: "Basis for Nul A", content: "Solve $B\\mathbf{x} = \\mathbf{0}$. Free variables are $x_3$ and $x_5$. Solving gives:\n$x_1 = -x_3 - x_5$\n$x_2 = 2x_3 - 3x_5$\n$x_4 = 5x_5$\n\nBasis: $\\{ [-1, 2, 1, 0, 0]^T, [-1, -3, 0, 5, 1]^T \\}$." }
      ]
    }
  ]
};