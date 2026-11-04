import { Course } from '../types';
import { SECTION_3_1 } from './section_3_1';
import { SECTION_3_2 } from './section_3_2';
import { SECTION_3_3 } from './section_3_3';
import { SECTION_3_4 } from './section_3_4';

export const MODULE_3: Course = {
  id: 'module-3',
  title: 'Module 3: Orthogonality and Least Squares',
  description: 'Inner products, orthogonality, projections, and least-squares problems.',
  sections: [
    SECTION_3_1,
    SECTION_3_2,
    SECTION_3_3,
    SECTION_3_4
  ],
  chapterSummary: [
    {
      id: "chap-sum-6-1",
      type: "theory",
      title: "Section 6.1: Inner Products",
      content: "We introduced the inner product $\\mathbf{u} \\cdot \\mathbf{v}$, length $\\|\\mathbf{v}\\|$, and distance. Vectors are orthogonal if their inner product is zero. We saw that $(Row A)^\\perp = Nul A$."
    },
    {
      id: "chap-sum-6-2",
      type: "theory",
      title: "Section 6.2: Orthogonal Sets",
      content: "Orthogonal sets are linearly independent. We learned to compute coordinates relative to an orthogonal basis using dot products. Orthogonal matrices have orthonormal columns."
    },
    {
      id: "chap-sum-6-3",
      type: "theory",
      title: "Section 6.3: Orthogonal Projections",
      content: "We learned how to project a vector $\\mathbf{y}$ orthogonally onto a subspace $W$. This creates a unique decomposition $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$. The projection $\\hat{\\mathbf{y}}$ is the best approximation of $\\mathbf{y}$ within $W$."
    },
    {
      id: "chap-sum-6-4",
      type: "theory",
      title: "Section 6.4: Gram-Schmidt",
      content: "The Gram-Schmidt process transforms any basis into an orthogonal basis. This leads to the QR Factorization $A=QR$, useful in many algorithms."
    }
  ]
};