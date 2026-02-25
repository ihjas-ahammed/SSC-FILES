import { Unit } from '../types';

export const UNIT_3_3_SUMMARY: Unit = {
  id: "unit-3-3-summary",
  title: "Section 6.3 Summary",
  description: "Review of Orthogonal Projections.",
  color: "duo-green",
  lessons: [
    {
      id: "les-3-3-sum-1", title: "Key Concepts", description: "Projections and Approximation", icon: "Star",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonal Projection", content: "Any vector $\\mathbf{y}$ can be uniquely decomposed into $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$, where $\\hat{\\mathbf{y}} \\in W$ and $\\mathbf{z} \\in W^\\perp$.\n\nFormula (Orthogonal Basis): $\\hat{\\mathbf{y}} = \\sum \\frac{\\mathbf{y} \\cdot \\mathbf{u}_i}{\\mathbf{u}_i \\cdot \\mathbf{u}_i} \\mathbf{u}_i$." },
        { id: "s1", type: "theory", title: "Best Approximation", content: "The orthogonal projection $\\hat{\\mathbf{y}}$ is the closest point in $W$ to $\\mathbf{y}$. The distance is $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| = \\|\\mathbf{z}\\|$." },
        { id: "s2", type: "theory", title: "Orthonormal Basis", content: "If the basis is orthonormal ($U$), the projection is simply $U U^T \\mathbf{y}$." }
      ]
    }
  ]
};