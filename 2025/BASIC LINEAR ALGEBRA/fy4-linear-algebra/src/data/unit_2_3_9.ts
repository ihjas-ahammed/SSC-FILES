import { Unit } from '../types';

export const UNIT_2_3_9: Unit = {
  id: "unit-2-3-9",
  title: "Fundamental Subspaces",
  description: "Exercises 27-29: The four subspaces and their relations.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-9-ex27", title: "Exercise 27", description: "Where do they live?", icon: "MapPin",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Let $A$ be an $m \\times n$ matrix. Which of the subspaces Row A, Col A, Nul A, Row $A^T$, Col $A^T$, Nul $A^T$ are in $\\mathbb{R}^m$ and which are in $\\mathbb{R}^n$?" },
        { id: "s1", type: "solution", title: "In R^n", content: "- Row A (vectors have $n$ entries)\n- Nul A (solutions to $A\\mathbf{x}=\\mathbf{0}$, $\\mathbf{x}$ has $n$ entries)\n- Col $A^T$ (Same as Row A)" },
        { id: "s2", type: "solution", title: "In R^m", content: "- Col A (vectors have $m$ entries)\n- Row $A^T$ (Same as Col A)\n- Nul $A^T$ (solutions to $A^T\\mathbf{y}=\\mathbf{0}$, $\\mathbf{y}$ has $m$ entries)" }
      ]
    },
    {
      id: "les-2-3-9-ex28", title: "Exercise 28", description: "Equality of Dimensions", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Justify: $\\text{rank } A + \\dim \\text{Nul } A^T = m$." },
        { id: "s1", type: "solution", title: "Proof", content: "Apply the Rank Theorem to $A^T$ (which is $n \\times m$).\n\n$\\text{rank } A^T + \\dim \\text{Nul } A^T = \\text{number of columns of } A^T$.\n\nCols of $A^T$ = Rows of $A$ = $m$.\nAlso, $\\text{rank } A^T = \\text{rank } A$.\n\nThus $\\text{rank } A + \\dim \\text{Nul } A^T = m$." }
      ]
    },
    {
      id: "les-2-3-9-ex29", title: "Exercise 29", description: "Solvability Condition", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Show that $A\\mathbf{x} = \\mathbf{b}$ has a solution for all $\\mathbf{b}$ if and only if $\\text{Nul } A^T = \\{\\mathbf{0}\\}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A\\mathbf{x} = \\mathbf{b}$ solvable for all $\\mathbf{b}$ $\\iff$ Col $A = \\mathbb{R}^m$\n$\\iff \\text{rank } A = m$\n\nFrom Ex 28: $\\text{rank } A + \\dim \\text{Nul } A^T = m$.\n\nSo Rank $A = m \\iff \\dim \\text{Nul } A^T = 0 \\iff \\text{Nul } A^T = \\{\\mathbf{0}\\}$." }
      ]
    }
  ]
};