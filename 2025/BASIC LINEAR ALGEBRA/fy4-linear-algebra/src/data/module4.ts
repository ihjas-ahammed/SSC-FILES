import { Course } from '../types';
import { SECTION_4_1 } from './section_4_1';
import { SECTION_4_2 } from './section_4_2';
import { SECTION_4_3 } from './section_4_3';
import { SECTION_4_4 } from './section_4_4';

export const MODULE_4: Course = {
  id: 'module-4',
  title: 'Module 4: Symmetric Matrices and Quadratic Forms',
  description: 'Diagonalization of symmetric matrices, quadratic forms, and Singular Value Decomposition.',
  sections: [
    SECTION_4_1,
    SECTION_4_2,
    SECTION_4_3,
    SECTION_4_4
  ],
  chapterSummary: [
    {
      id: "chap-sum-7-1",
      type: "theory",
      title: "Section 7.1: Diagonalization of Symmetric Matrices",
      content: "We explored symmetric matrices ($A=A^T$) and the powerful Spectral Theorem, which guarantees that every symmetric matrix can be orthogonally diagonalized as $A=PDP^T$. We also introduced spectral decomposition as a sum of rank-1 projection matrices."
    },
    {
      id: "chap-sum-7-2",
      type: "theory",
      title: "Section 7.2: Quadratic Forms",
      content: "We defined quadratic forms $Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}$ and used orthogonal diagonalization to eliminate cross-product terms via the Principal Axes Theorem. Finally, we classified quadratic forms as positive definite, negative definite, or indefinite based entirely on the signs of their eigenvalues."
    },
    {
      id: "chap-sum-7-3",
      type: "theory",
      title: "Section 7.3: Constrained Optimization",
      content: "We showed that the maximum and minimum values of a quadratic form $\\mathbf{x}^T A \\mathbf{x}$ subject to $\\|\\mathbf{x}\\| = 1$ are precisely the greatest and least eigenvalues of $A$. Constraining $\\mathbf{x}$ to be orthogonal to the first eigenvector drops the maximum to the second eigenvalue."
    },
    {
      id: "chap-sum-7-4",
      type: "theory",
      title: "Section 7.4: The Singular Value Decomposition",
      content: "We generalized diagonalization to *any* $m \\times n$ matrix $A$ using the SVD: $A = U \\Sigma V^T$. The singular values $\\sigma_i$ (diagonal entries of $\\Sigma$) are the square roots of the eigenvalues of $A^T A$, providing deep insights into the geometry and rank of $A$."
    }
  ]
};