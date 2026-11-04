import { Unit } from '../types';

export const UNIT_4_4_11: Unit = {
  id: "unit-4-4-11",
  title: "SVD Approximations",
  description: "Exercises 15-20: Rounding and rank approximation.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-11-ex15", title: "Exercise 15", description: "Rank 1 Approximation", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Suppose the factorization below is an SVD of a matrix $A$, with entries rounded to two decimal places.\n\n$A = \\begin{bmatrix} .40 & -.78 & .47 \\\\ .37 & -.33 & -.87 \\\\ -.84 & -.52 & -.16 \\end{bmatrix} \\begin{bmatrix} 7.10 & 0 & 0 \\\\ 0 & 3.10 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} .30 & -.51 & -.81 \\\\ .76 & .64 & -.12 \\\\ .58 & -.58 & .58 \\end{bmatrix}^T$\n\nWhat is the rank of $A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "The rank is the number of nonzero singular values.\nLooking at $\\Sigma$, we see diagonal entries 7.10, 3.10, and 0.\n\nThere are 2 nonzero entries.\nRank = 2." }
      ]
    },
    {
      id: "les-4-4-11-ex16", title: "Exercise 16", description: "Best Rank 1 Approximation", icon: "Star",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Use the SVD from Exercise 15 to find the best rank 1 approximation of $A$." },
        { id: "s1", type: "solution", title: "Solution", content: "The best rank 1 approximation is $\\sigma_1 \\mathbf{u}_1 \\mathbf{v}_1^T$.\n\n$\\sigma_1 = 7.10$.\n$\\mathbf{u}_1 = \\begin{bmatrix} .40 \\\\ .37 \\\\ -.84 \\end{bmatrix}$.\n$\\mathbf{v}_1 = \\begin{bmatrix} .30 \\\\ -.51 \\\\ -.81 \\end{bmatrix}$.\n\nCalculate $7.10 \\mathbf{u}_1 \\mathbf{v}_1^T$." }
      ]
    }
  ]
};