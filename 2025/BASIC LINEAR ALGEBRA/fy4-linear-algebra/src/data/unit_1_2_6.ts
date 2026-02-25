import { Unit } from '../types';

export const UNIT_1_2_6: Unit = {
  id: "unit-1-2-6",
  title: "Practice Problems",
  description: "Applying concepts from Section 4.2",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-6-pp1", title: "Practice Problem 1", description: "Two ways to prove a subspace", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 1", content: "Let $W = \\{ \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} : a - 3b - c = 0 \\}$.\n\nShow that $W$ is a subspace of $\\mathbb{R}^3$ in two different ways." },
        { id: "s1", type: "solution", title: "Method 1: Nul A", content: "Rewrite the condition $a - 3b - c = 0$ as a homogeneous equation:\n$$ \\begin{bmatrix} 1 & -3 & -1 \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} = 0 $$\nHere, $A = \\begin{bmatrix} 1 & -3 & -1 \\end{bmatrix}$. Since $W$ is the set of solutions to $A\\mathbf{x}=\\mathbf{0}$, $W = \\text{Nul } A$. By Theorem 2, it is a subspace." },
        { id: "s2", type: "solution", title: "Method 2: Col A (Span)", content: "Solve for the pivot variable: $a = 3b + c$.\n\n$$ \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} = \\begin{bmatrix} 3b + c \\\\ b \\\\ c \\end{bmatrix} = b\\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\end{bmatrix} + c\\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} $$\n\nThus $W = \\text{Span}\\{ \\mathbf{v}_1, \\mathbf{v}_2 \\}$. By Theorem 1 (from 4.1), it is a subspace." }
      ]
    },
    {
      id: "les-1-2-6-pp2", title: "Practice Problem 2", description: "Matrix Consistency", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 2", content: "Let $A = \\begin{bmatrix} 7 & -3 & 5 \\\\ -4 & 1 & -5 \\\\ -5 & 2 & -4 \\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix} 2 \\\\ 1 \\\\ -1 \\end{bmatrix}$, $\\mathbf{w} = \\begin{bmatrix} 7 \\\\ 6 \\\\ -3 \\end{bmatrix}$.\n\nSuppose you know that the equations $A\\mathbf{x} = \\mathbf{v}$ and $A\\mathbf{x} = \\mathbf{w}$ are both consistent. What can you say about the equation $A\\mathbf{x} = \\mathbf{v} + \\mathbf{w}$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Since $A\\mathbf{x} = \\mathbf{v}$ is consistent, $\\mathbf{v}$ is in $\\text{Col } A$.\nSince $A\\mathbf{x} = \\mathbf{w}$ is consistent, $\\mathbf{w}$ is in $\\text{Col } A$.\n\nSince $\\text{Col } A$ is a subspace (Theorem 3), it is closed under addition.\n\nTherefore, $\\mathbf{v} + \\mathbf{w}$ is in $\\text{Col } A$, which means $A\\mathbf{x} = \\mathbf{v} + \\mathbf{w}$ must be consistent." }
      ]
    }
  ]
};