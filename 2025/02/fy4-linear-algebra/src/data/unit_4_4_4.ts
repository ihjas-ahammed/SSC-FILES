import { Unit } from '../types';

export const UNIT_4_4_4: Unit = {
  id: "unit-4-4-4",
  title: "The Singular Value Decomposition",
  description: "Theorem 10: The SVD factorization.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-4-t10", title: "Theorem 10: SVD", description: "A = U Sigma V^T", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "The Singular Value Decomposition", content: "Let $A$ be an $m \\times n$ matrix with rank $r$. Then there exists an $m \\times n$ matrix $\\Sigma$, an $m \\times m$ orthogonal matrix $U$, and an $n \\times n$ orthogonal matrix $V$ such that\n$$ A = U \\Sigma V^T $$" },
        { id: "s1", type: "theory", title: "Structure of Sigma", content: "The matrix $\\Sigma$ looks like this:\n$$ \\Sigma = \\begin{bmatrix} D & 0 \\\\ 0 & 0 \\end{bmatrix} $$\nwhere $D$ is an $r \\times r$ diagonal matrix with diagonal entries $\\sigma_1 \\ge \\dots \\ge \\sigma_r > 0$." },
        { id: "s2", type: "fill_in_blank", title: "Components", content: "The columns of $V$ are called the ___ singular vectors of $A$.", blankAnswer: "right" }
      ]
    }
  ]
};