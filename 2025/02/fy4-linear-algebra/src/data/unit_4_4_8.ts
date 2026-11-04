import { Unit } from '../types';

export const UNIT_4_4_8: Unit = {
  id: "unit-4-4-8",
  title: "Practice Problems",
  description: "Applying SVD concepts.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-8-p1", title: "Practice Problem 1", description: "SVD Construction", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 1", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Strategy", content: "1. Compute $A A^T$ (since $2 \\times 2$ is smaller than $3 \\times 3$) to find $\\sigma_i$ and $U$.\n2. Use $\\mathbf{v}_i = \\frac{1}{\\sigma_i} A^T \\mathbf{u}_i$ to find $V$." }
      ]
    }
  ]
};