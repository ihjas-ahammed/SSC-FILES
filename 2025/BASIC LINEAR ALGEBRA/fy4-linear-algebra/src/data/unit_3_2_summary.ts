import { Unit } from '../types';

export const UNIT_3_2_SUMMARY: Unit = {
  id: "unit-3-2-summary",
  title: "Section 6.2 Summary",
  description: "Recap of Orthogonal Sets and Projections.",
  color: "duo-green",
  lessons: [
    {
      id: "les-3-2-sum-1", title: "Orthogonal Sets & Bases", description: "Key definitions", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonal Sets", content: "A set of vectors is **orthogonal** if every distinct pair has a dot product of 0. An orthogonal set of non-zero vectors is always linearly independent (Theorem 4)." },
        { id: "s1", type: "theory", title: "Orthogonal Basis Weights", content: "If $S = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is an orthogonal basis for $W$, the weights for any $\\mathbf{y} \\in W$ are easy to compute:\n$$ c_j = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j} $$" }
      ]
    },
    {
      id: "les-3-2-sum-2", title: "Projections & Orthonormality", description: "Key formulas", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonal Projection", content: "The projection of $\\mathbf{y}$ onto a line $L$ spanned by $\\mathbf{u}$ is:\n$$ \\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}} \\mathbf{u} $$\nThe vector $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$ is orthogonal to $\\mathbf{u}$." },
        { id: "s1", type: "theory", title: "Orthonormal Sets", content: "An **orthonormal** set is an orthogonal set of unit vectors. A square matrix $U$ with orthonormal columns satisfies $U^T U = I$, and is called an **orthogonal matrix**. Mappings by $U$ preserve lengths and dot products." }
      ]
    }
  ]
};