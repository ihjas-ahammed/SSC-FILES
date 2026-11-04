import { Unit } from '../types';

export const UNIT_3_3_12: Unit = {
  id: "unit-3-3-12",
  title: "Theoretical Proofs",
  description: "Exercises 23-26: Rigorous proofs about projections and distance.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-12-ex23", title: "Exercise 23: Uniqueness", description: "Proof of Theorem 8", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Let $A$ be an $m \\times n$ matrix. Prove that every vector $\\mathbf{x}$ in $\\mathbb{R}^n$ can be written in the form $\\mathbf{x} = \\mathbf{p} + \\mathbf{u}$, where $\\mathbf{p}$ is in Row $A$ and $\\mathbf{u}$ is in Nul $A$. Also show uniqueness." },
        { id: "s1", type: "solution", title: "Proof", content: "Recall that $(\\text{Row } A)^\\perp = \\text{Nul } A$. Let $W = \\text{Row } A$. Then $W^\\perp = \\text{Nul } A$.\n\nBy the Orthogonal Decomposition Theorem, any $\\mathbf{x}$ can be written as $\\hat{\\mathbf{x}} + \\mathbf{z}$ where $\\hat{\\mathbf{x}} \\in W$ (Row A) and $\\mathbf{z} \\in W^\\perp$ (Nul A)." }
      ]
    },
    {
      id: "les-3-3-12-ex24", title: "Exercise 24: Orthonormal Basis Extension", description: "Proof", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Let $W$ be a subspace with orthonormal basis $\\{\\mathbf{w}_1, \\dots, \\mathbf{w}_p\\}$ and let $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_q\\}$ be an orthonormal basis for $W^\\perp$. Show that the combined set is an orthonormal basis for $\\mathbb{R}^n$." },
        { id: "s1", type: "solution", title: "Proof Sketch", content: "1. The union is orthonormal (vectors within sets are orthogonal, and vectors across sets are orthogonal by definition of $W^\\perp$).\n2. The dimension of $W$ plus dimension of $W^\\perp$ is $n$. So the set has $p+q=n$ linearly independent vectors in $\\mathbb{R}^n$, forming a basis." }
      ]
    },
    {
      id: "les-3-3-12-ex25", title: "Exercise 25: Distance with U", description: "Using matrix U", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Let $U$ be the $8 \\times 4$ matrix with orthonormal columns from Ex 36 in 6.2. Find the closest point to $\\mathbf{y} = (1, \\dots, 1)$ in Col $U$." },
        { id: "s1", type: "solution", title: "Solution", content: "The closest point is $\\hat{\\mathbf{y}} = U U^T \\mathbf{y}$. Compute $U^T \\mathbf{y}$ then multiply by $U$." }
      ]
    },
    {
      id: "les-3-3-12-ex26", title: "Exercise 26: Distance to Col U", description: "Calculating distance", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** Find the distance from $\\mathbf{b} = (1, 1, 1, 1, -1, -1, -1, -1)$ to Col $U$." },
        { id: "s1", type: "solution", title: "Solution", content: "1. Compute projection $\\mathbf{p} = U U^T \\mathbf{b}$.\n2. Compute difference $\\mathbf{z} = \\mathbf{b} - \\mathbf{p}$.\n3. Distance is $\\|\\mathbf{z}\\|$." }
      ]
    }
  ]
};