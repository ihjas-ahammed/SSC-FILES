import { Unit } from '../types';

export const UNIT_2_2_SUMMARY: Unit = {
  id: "unit-2-2-summary",
  title: "Section 2 Summary",
  description: "Recap of Dimension and Rank.",
  color: "duo-green",
  lessons: [
    {
      id: "les-2-2-sum-1", title: "Key Concepts", description: "Dimension definitions", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Dimension", content: "The **dimension** of a vector space $V$ is the number of vectors in any basis for $V$. All bases for a finite-dimensional space have the same number of vectors." },
        { id: "s1", type: "theory", title: "Subspaces", content: "For a subspace $H$ of $V$, $\\dim H \\le \\dim V$. If the dimensions are equal (and finite), then $H = V$." },
        { id: "s2", type: "theory", title: "Matrix Spaces", content: "- $\\dim \\text{Col } A$ = number of pivot columns.\n- $\\dim \\text{Nul } A$ = number of free variables." }
      ]
    }
  ]
};