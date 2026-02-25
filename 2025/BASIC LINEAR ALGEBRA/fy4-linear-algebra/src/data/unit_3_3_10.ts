import { Unit } from '../types';

export const UNIT_3_3_10: Unit = {
  id: "unit-3-3-10",
  title: "Orthonormal Bases & Matrices",
  description: "Exercises 17-20: Using matrices with orthonormal columns.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-10-ex17", title: "Exercise 17: Matrix U", description: "U^T U and U U^T", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Let $U = \\begin{bmatrix} 2/3 & -2/3 \\\\ 2/3 & 1/3 \\\\ 1/3 & 2/3 \\end{bmatrix}$.\n\na. Compute $U^T U$ and $U U^T$.\nb. Compute $\\text{proj}_W \\mathbf{y}$ where $W = \\text{Col } U$." },
        { id: "s1", type: "solution", title: "Part A", content: "$U$ has orthonormal columns (check dot product and norms). \nThus $U^T U = I_2$.\n\n$U U^T$ is a $3 \\times 3$ matrix, which is the projection matrix onto $W$." },
        { id: "s2", type: "solution", title: "Part B", content: "By Theorem 10, $\\text{proj}_W \\mathbf{y} = U U^T \\mathbf{y}$." }
      ]
    },
    {
      id: "les-3-3-10-ex18", title: "Exercise 18", description: "Another U matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Similar to Ex 17 with a different $U$." },
        { id: "s1", type: "solution", title: "Recall", content: "If columns are orthonormal, $U^T U = I$. The projection is $U U^T \\mathbf{y}$." }
      ]
    },
    {
      id: "les-3-3-10-ex19", title: "Exercise 19", description: "Orthonormal Basis Construction", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Let $\\mathbf{u}_1, \\mathbf{u}_2$ be orthogonal. Can we form an orthonormal basis?" },
        { id: "s1", type: "solution", title: "Solution", content: "Yes, by normalizing the vectors: $\\mathbf{v}_1 = \\mathbf{u}_1 / \\|\\mathbf{u}_1\\|$." }
      ]
    },
    {
      id: "les-3-3-10-ex20", title: "Exercise 20", description: "Extending Basis", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** How to find a vector orthogonal to a set?" },
        { id: "s1", type: "solution", title: "Hint", content: "Use the projection process (Gram-Schmidt idea) or solve $A\\mathbf{x}=\\mathbf{0}$." }
      ]
    }
  ]
};