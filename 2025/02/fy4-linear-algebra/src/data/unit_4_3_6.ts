import { Unit } from '../types';

export const UNIT_4_3_6: Unit = {
  id: "unit-4-3-6",
  title: "Practice Problems",
  description: "Practice Problem 1 & 2: Change of variable and finding the maximum.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-6-p1", title: "Practice Problem 1", description: "Change of variable", icon: "Repeat",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Let $Q(\\mathbf{x}) = 3x_1^2 + 3x_2^2 + 2x_1 x_2$. \nFind a change of variable that transforms $Q$ into a quadratic form with no cross-product term, and give the new quadratic form." },
        { id: "s1", type: "solution", title: "Solution", content: "The matrix is $A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$.\n\nEigenvalues are 4 and 2. Normalized eigenvectors are $\\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$ and $\\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$.\n\nChange of variable is $\\mathbf{x} = P\\mathbf{y}$, where $P = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}$.\n\nNew form: $\\mathbf{y}^T D \\mathbf{y} = 4y_1^2 + 2y_2^2$." }
      ]
    },
    {
      id: "les-4-3-6-p2", title: "Practice Problem 2", description: "Finding the maximum", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 2", content: "**Problem:** With $Q$ as in Problem 1, find the maximum value of $Q(\\mathbf{x})$ subject to the constraint $\\mathbf{x}^T\\mathbf{x} = 1$, and find a unit vector at which the maximum is attained." },
        { id: "s1", type: "solution", title: "Solution", content: "By Theorem 6, the maximum value is the largest eigenvalue of the matrix $A$.\n\nThe eigenvalues are 4 and 2, so the maximum value is **4**.\n\nThis maximum is attained at the unit eigenvector corresponding to $\\lambda = 4$, which we found to be $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$." }
      ]
    }
  ]
};