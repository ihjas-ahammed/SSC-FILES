import { Course } from '../types';
import { SECTION_1_1 } from './section_1_1';

export const MODULE_1: Course = {
  id: 'module-1',
  title: '%name%',
  description: '%placeholder%',
  sections: [
    SECTION_1_1,
  ],
  chapterSummary: [
    {
      id: "chap-sum-1",
      type: "theory",
      title: "Section 1: Vector Spaces & Subspaces",
      content: "We introduced the formal definition of a **Vector Space** via 10 axioms. We learned that vectors can be arrows, polynomials $\\mathbb{P}_n$, or functions. A **Subspace** is a subset closed under addition and scalar multiplication, containing $\\mathbf{0}$."
    },
  ]
};