import { Unit } from '../types';

export const UNIT_4_1_SUMMARY: Unit = {
  id: "unit-4-1-summary",
  title: "Section 7.1 Summary",
  description: "Recap of Diagonalization of Symmetric Matrices.",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-sum-1", title: "Symmetric Matrices", description: "Key properties", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Symmetric Matrix", content: "A symmetric matrix is a square matrix that equals its transpose ($A = A^T$). \n\n**Theorem 1** guarantees that eigenvectors from *different* eigenspaces of a symmetric matrix are mutually orthogonal." },
        { id: "s1", type: "theory", title: "Orthogonal Diagonalization", content: "A matrix $A$ is orthogonally diagonalizable ($A = PDP^T$, where $P$ has orthonormal columns) if and only if $A$ is a symmetric matrix (Theorem 2)." }
      ]
    },
    {
      id: "les-4-1-sum-2", title: "Spectral Theorem & Decomposition", description: "The core results", icon: "Star",
      slides: [
        { id: "s0", type: "theory", title: "The Spectral Theorem", content: "A symmetric $n \\times n$ matrix $A$ has $n$ real eigenvalues (counting multiplicities), the dimension of each eigenspace matches the multiplicity of its eigenvalue, the eigenspaces are mutually orthogonal, and $A$ is orthogonally diagonalizable." },
        { id: "s1", type: "theory", title: "Spectral Decomposition", content: "Using the orthogonal diagonalization $A = PDP^T$, we can express $A$ as a sum of rank-1 projection matrices: \n$$ A = \\lambda_1 \\mathbf{u}_1 \\mathbf{u}_1^T + \\lambda_2 \\mathbf{u}_2 \\mathbf{u}_2^T + \\dots + \\lambda_n \\mathbf{u}_n \\mathbf{u}_n^T $$" }
      ]
    }
  ]
};