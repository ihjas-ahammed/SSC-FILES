import { Course } from '../types';
import { SECTION_1_1 } from './section_1_1';
import { SECTION_1_2 } from './section_1_2';
import { SECTION_1_3 } from './section_1_3';

export const MODULE_1: Course = {
  id: 'module-1',
  title: 'Module 1: Vector Spaces',
  description: 'Understanding the axioms, subspaces, null spaces, column spaces, and linear transformations.',
  sections: [
    SECTION_1_1,
    SECTION_1_2,
    SECTION_1_3
  ],
  chapterSummary: [
    {
      id: "chap-sum-1",
      type: "theory",
      title: "Section 1: Vector Spaces & Subspaces",
      content: "We introduced the formal definition of a **Vector Space** via 10 axioms. We learned that vectors can be arrows, polynomials $\\mathbb{P}_n$, or functions. A **Subspace** is a subset closed under addition and scalar multiplication, containing $\\mathbf{0}$."
    },
    {
      id: "chap-sum-2",
      type: "theory",
      title: "Section 2: Null Spaces & Column Spaces",
      content: "The **Null Space (Nul A)** is the set of all solutions to $A\\mathbf{x} = \\mathbf{0}$. The **Column Space (Col A)** is the span of the columns of $A$. We also saw how these concepts relate to the Kernel and Range of a linear transformation."
    },
    {
      id: "chap-sum-3",
      type: "theory",
      title: "Section 3: Linearly Independent Sets & Bases",
      content: "A set is linearly independent if no vector is a linear combination of the others. A **basis** is an independent set that spans the subspace. We learned to find a basis for Nul A using free variables, and for Col A using the pivot columns of the original matrix."
    }
  ]
};