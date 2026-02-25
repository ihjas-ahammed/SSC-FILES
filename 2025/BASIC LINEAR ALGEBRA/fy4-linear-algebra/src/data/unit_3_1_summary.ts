import { Unit } from '../types';

export const UNIT_3_1_SUMMARY: Unit = {
  id: "unit-3-1-summary",
  title: "Section 6.1 Summary",
  description: "Recap of Inner Products and Orthogonality.",
  color: "duo-green",
  lessons: [
    {
      id: "les-3-1-sum-1", title: "Inner Product", description: "Key Formula", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Definition", content: "$ \\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T \\mathbf{v} $. This scalar product is commutative, distributive, and linear." }
      ]
    },
    {
      id: "les-3-1-sum-2", title: "Length & Norm", description: "Key Formula", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Norm", content: "$ \\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} $. A unit vector has norm 1." }
      ]
    },
    {
      id: "les-3-1-sum-3", title: "Distance", description: "Key Formula", icon: "Ruler",
      slides: [
        { id: "s0", type: "theory", title: "Distance", content: "$ \\text{dist}(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\| $." }
      ]
    },
    {
      id: "les-3-1-sum-4", title: "Orthogonality", description: "Key Concept", icon: "X",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonality", content: "$\\mathbf{u} \\perp \\mathbf{v} \\iff \\mathbf{u} \\cdot \\mathbf{v} = 0$.\n\n**Pythagorean Theorem:** $\\|\\mathbf{u}+\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2$ iff orthogonal." }
      ]
    },
    {
      id: "les-3-1-sum-5", title: "Complements", description: "Fundamental Spaces", icon: "GitBranch",
      slides: [
        { id: "s0", type: "theory", title: "Spaces", content: "$(\\text{Row } A)^\\perp = \\text{Nul } A$." }
      ]
    }
  ]
};