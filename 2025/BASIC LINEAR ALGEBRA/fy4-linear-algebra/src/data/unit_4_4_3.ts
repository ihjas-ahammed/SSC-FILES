import { Unit } from '../types';

export const UNIT_4_4_3: Unit = {
  id: "unit-4-4-3",
  title: "Orthogonal Basis for Col A",
  description: "Theorem 9: Using singular vectors to build a basis.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-3-t9", title: "Theorem 9", description: "Mapping Basis Vectors", icon: "Columns",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 9", content: "Suppose $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is an orthonormal basis of $\\mathbb{R}^n$ consisting of eigenvectors of $A^T A$, arranged so that corresponding eigenvalues satisfy $\\lambda_1 \\ge \\dots \\ge \\lambda_n$. \nSuppose $A$ has $r$ nonzero singular values.\n\nThen $\\{A\\mathbf{v}_1, \\dots, A\\mathbf{v}_r\\}$ is an **orthogonal basis** for $\\text{Col } A$, and $\\text{rank } A = r$." },
        { id: "s1", type: "proof", title: "Proof Sketch", content: "**Orthogonality:** $(A\\mathbf{v}_i) \\cdot (A\\mathbf{v}_j) = \\mathbf{v}_i^T A^T A \\mathbf{v}_j = \\mathbf{v}_i^T (\\lambda_j \\mathbf{v}_j) = \\lambda_j (\\mathbf{v}_i \\cdot \\mathbf{v}_j) = 0$ if $i \\neq j$." },
        { id: "s2", type: "theory", title: "Lengths", content: "The length of each vector is $\\|A\\mathbf{v}_i\\| = \\sqrt{(A\\mathbf{v}_i)^T (A\\mathbf{v}_i)} = \\sqrt{\\lambda_i} = \\sigma_i$." }
      ]
    }
  ]
};