import { Unit } from '../types';

export const UNIT_1_3_9: Unit = {
  id: "unit-1-3-9",
  title: "Bases from Row Operations",
  description: "Exercises 13-14: Using row equivalence.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-9-ex13", title: "Exercise 13", description: "Basis for Nul A and Col A", icon: "GitMerge",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Let $A = \\begin{bmatrix} 1 & 0 & -3 & 2 \\\\ 0 & 1 & -5 & 4 \\\\ 3 & -2 & 1 & -2 \\end{bmatrix}$. \n\nAssume $B = \\begin{bmatrix} 1 & 0 & -3 & 2 \\\\ 0 & 1 & -5 & 4 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}$ is a row echelon form of $A$.\n\nFind bases for $\\text{Nul } A$ and $\\text{Col } A$." },
        { id: "s1", type: "solution", title: "Basis for Col A", content: "Pivot columns in $B$ are 1 and 2. \nTherefore, basis for $\\text{Col } A$ is columns 1 and 2 of **A**:\n$$ \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ -2 \\end{bmatrix} \\right\\} $$" },
        { id: "s2", type: "solution", title: "Basis for Nul A", content: "Solve $B\\mathbf{x}=\\mathbf{0}$.\n$x_1 - 3x_3 + 2x_4 = 0 \\implies x_1 = 3x_3 - 2x_4$\n$x_2 - 5x_3 + 4x_4 = 0 \\implies x_2 = 5x_3 - 4x_4$\n\nBasis vectors come from free variables $x_3, x_4$:\n$$ \\left\\{ \\begin{bmatrix} 3 \\\\ 5 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ -4 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\} $$" }
      ]
    },
    {
      id: "les-1-3-9-ex14", title: "Exercise 14", description: "Large Matrix", icon: "GitMerge",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Use the matrix $A$ and its echelon form $B$ (typically given in text, let's assume a $4 \\times 5$ case) to find bases for $\\text{Nul } A$ and $\\text{Col } A$." },
        { id: "s1", type: "quiz", title: "Method Check", content: "To find the basis for $\\text{Col } A$, we look at pivots in $B$. Do we take the columns from $A$ or $B$?", options: [{id:"A", text:"From B", isCorrect:false, explanation:"Columns of B span a different space (usually)."}, {id:"B", text:"From A", isCorrect:true, explanation:"We must go back to the original columns of A."}] },
        { id: "s2", type: "quiz", title: "Method Check", content: "To find the basis for $\\text{Nul } A$, do we solve $A\\mathbf{x}=\\mathbf{0}$ or $B\\mathbf{x}=\\mathbf{0}$?", options: [{id:"A", text:"Either works", isCorrect:true, explanation:"Row operations don't change the solution set."}, {id:"B", text:"Only A", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};