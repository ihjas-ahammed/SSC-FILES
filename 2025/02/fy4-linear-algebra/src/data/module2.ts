import { Course } from '../types';
import { SECTION_2_1 } from './section_2_1';
import { SECTION_2_2 } from './section_2_2';
import { SECTION_2_3 } from './section_2_3';

export const MODULE_2: Course = {
  id: 'module-2',
  title: 'Module 2: Dimension and Rank',
  description: 'Coordinate Systems, Dimension of a Vector Space, and Rank.',
  sections: [
    SECTION_2_1,
    SECTION_2_2,
    SECTION_2_3
  ],
  chapterSummary: [
    {
      id: "chap-sum-2-1",
      type: "theory",
      title: "Section 1: Coordinate Systems",
      content: "We established that a basis creates a unique coordinate system for a vector space. The mapping from vectors to their coordinate vectors is an isomorphism, meaning it preserves all vector space structure, effectively making any $n$-dimensional space act exactly like $\\mathbb{R}^n$."
    },
    {
      id: "chap-sum-2-2",
      type: "theory",
      title: "Section 2: Dimension",
      content: "We defined dimension as the number of vectors in a basis. We learned that this number is invariant for any given space. We also connected this to matrices, seeing that the dimension of the column space is the number of pivots, and the dimension of the null space is the number of free variables."
    },
    {
      id: "chap-sum-2-3",
      type: "theory",
      title: "Section 3: Rank",
      content: "We introduced the Row Space and Rank. The Rank Theorem is a fundamental result stating that the dimensions of the column space and row space are equal, and that Rank + Nullity = number of columns. This unifies our understanding of the fundamental subspaces of a matrix."
    }
  ]
};