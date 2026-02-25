import { Unit } from '../types';

export const UNIT_2_2_12: Unit = {
  id: "unit-2-2-12",
  title: "Advanced Applications",
  description: "Exercises 33-34: Codes and Geometry.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-12-ex33", title: "Exercise 33: Error Correcting Codes", description: "Dimension of Code", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33", content: "**Problem:** (Paraphrased) In Hamming codes, we define a parity check matrix $H$. The code words form the Null Space of $H$.\n\nIf $H$ is a $3 \\times 7$ matrix with rank 3, what is the dimension of the code (the null space)?" },
        { id: "s1", type: "solution", title: "Solution", content: "By the Rank Theorem (applied to $H$):\n$\\dim \\text{Nul } H + \\text{Rank } H = n$\n\nHere $n = 7$ (columns) and $\\text{Rank } H = 3$.\n\n$\\dim \\text{Nul } H = 7 - 3 = 4$.\n\nThe code is a 4-dimensional subspace of $\\mathbb{R}^7$." }
      ]
    },
    {
      id: "les-2-2-12-ex34", title: "Exercise 34: Geometric Interpretation", description: "Planes and Lines", icon: "Compass",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** Let $V$ be a vector space. If $H$ and $K$ are subspaces with dimensions $h$ and $k$, what are possible dimensions of $H \\cap K$?" },
        { id: "s1", type: "solution", title: "Discussion", content: "The intersection $H \\cap K$ is a subspace of both $H$ and $K$.\n\nTherefore, $\\dim(H \\cap K) \\le \\min(h, k)$.\n\nAlso, a formula exists: $\\dim(H+K) + \\dim(H \\cap K) = \\dim H + \\dim K$. Since $\\dim(H+K) \\le \\dim V$, we can find lower bounds too." }
      ]
    }
  ]
};