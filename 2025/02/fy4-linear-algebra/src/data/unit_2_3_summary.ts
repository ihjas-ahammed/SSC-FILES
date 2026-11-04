import { Unit } from '../types';

export const UNIT_2_3_SUMMARY: Unit = {
  id: "unit-2-3-summary",
  title: "Section 3 Summary",
  description: "Review of Rank and Row Space.",
  color: "duo-green",
  lessons: [
    {
      id: "les-2-3-sum-1", title: "Key Concepts", description: "Review", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "The Rank Theorem", content: "For an $m \\times n$ matrix $A$:\n- $\\text{Rank } A = \\dim \\text{Col } A = \\dim \\text{Row } A$.\n- $\\text{Rank } A + \\dim \\text{Nul } A = n$." },
        { id: "s1", type: "theory", title: "Bases", content: "- Basis for Col A: Pivot columns of $A$.\n- Basis for Row A: Nonzero rows of echelon form $B$.\n- Basis for Nul A: Vectors from parametric solution of $A\\mathbf{x}=\\mathbf{0}$." }
      ]
    }
  ]
};