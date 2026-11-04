import { Unit } from '../types';

export const UNIT_4_3_SUMMARY: Unit = {
  id: "unit-4-3-summary",
  title: "Section 7.3 Summary",
  description: "Recap of Constrained Optimization.",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-3-sum-1", title: "Eigenvalues as Bounds", description: "Theorem 6", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Max and Min Values", content: "For a quadratic form $\\mathbf{x}^T A \\mathbf{x}$ constrained to the unit sphere $\\|\\mathbf{x}\\| = 1$, the maximum value is the largest eigenvalue $\\lambda_1$ and the minimum value is the smallest eigenvalue $\\lambda_n$ of $A$.\nThese extrema are attained at the respective unit eigenvectors." }
      ]
    },
    {
      id: "les-4-3-sum-2", title: "Orthogonal Constraints", description: "Theorem 7 & 8", icon: "Layers",
      slides: [
        { id: "s0", type: "theory", title: "Progressive Constraints", content: "If you constrain $\\mathbf{x}$ to be orthogonal to the first eigenvector $\\mathbf{u}_1$ (i.e., $\\mathbf{x}^T\\mathbf{u}_1 = 0$), the maximum possible value drops to the *second* largest eigenvalue $\\lambda_2$.\n\nIn general, adding orthogonality constraints to the first $k-1$ eigenvectors drops the maximum to the $k$-th eigenvalue $\\lambda_k$." }
      ]
    }
  ]
};