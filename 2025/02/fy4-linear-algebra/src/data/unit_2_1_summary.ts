import { Unit } from '../types';

export const UNIT_2_1_SUMMARY: Unit = {
  id: "unit-2-1-summary",
  title: "Section 1 Summary",
  description: "Recap of Coordinate Systems.",
  color: "duo-green",
  lessons: [
    {
      id: "les-2-1-sum-1", title: "Coordinates and Isomorphisms", description: "Summary", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "theory", title: "Unique Representation", content: "If $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ is a basis for a vector space $V$, every vector $\\mathbf{x}$ in $V$ can be uniquely expressed as a linear combination of the basis vectors. The weights are the **coordinates** of $\\mathbf{x}$ relative to $\\mathcal{B}$." },
        { id: "s1", type: "theory", title: "Change of Coordinates Matrix", content: "In $\\mathbb{R}^n$, the matrix $P_\\mathcal{B}$ formed by using the basis vectors as columns is called the change-of-coordinates matrix. It directly maps coordinate vectors back to the standard space:\n$$ \\mathbf{x} = P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B} $$\nSince $P_\\mathcal{B}$ is invertible, we can solve for coordinates using $P_\\mathcal{B}^{-1}$." },
        { id: "s2", type: "theory", title: "Isomorphisms", content: "The coordinate mapping $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$ is a one-to-one linear transformation (an **isomorphism**) from $V$ onto $\\mathbb{R}^n$. This means any vector space with an $n$-vector basis behaves exactly like $\\mathbb{R}^n$ algebraically." }
      ]
    }
  ]
};