import { Unit } from '../types';

export const UNIT_3_4_SUMMARY: Unit = {
  id: "unit-3-4-summary",
  title: "Section 6.4 Summary",
  description: "Recap of Gram-Schmidt and QR.",
  color: "duo-green",
  lessons: [
    {
      id: "les-3-4-sum-1", title: "The Gram-Schmidt Process", description: "Algorithm", icon: "Settings",
      slides: [
        { id: "s0", type: "theory", title: "The Algorithm", content: "Given a basis $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_p\\}$, we construct an orthogonal basis $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ by successively subtracting the projection onto the subspace spanned by previous vectors.\n\n$$ \\mathbf{v}_k = \\mathbf{x}_k - \\sum_{i=1}^{k-1} \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_i}{\\mathbf{v}_i \\cdot \\mathbf{v}_i}\\mathbf{v}_i $$" },
        { id: "s1", type: "theory", title: "QR Factorization", content: "Any matrix $A$ with linearly independent columns can be factored as $A = QR$, where $Q$ has orthonormal columns and $R$ is upper triangular. This is a direct consequence of the Gram-Schmidt process." }
      ]
    }
  ]
};