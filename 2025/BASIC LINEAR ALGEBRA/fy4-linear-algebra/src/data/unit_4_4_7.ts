import { Unit } from '../types';

export const UNIT_4_4_7: Unit = {
  id: "unit-4-4-7",
  title: "Reduced SVD & Pseudoinverse",
  description: "Example 6-8: Compact forms and least squares.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-7-e6", title: "Reduced SVD", description: "Removing zeros", icon: "Minimize",
      slides: [
        { id: "s0", type: "theory", title: "Reduced SVD", content: "Since $\\Sigma$ has many zeros, we can factor $A$ more compactly as:\n$$ A = U_r D V_r^T $$\nwhere $U_r$ is $m \\times r$, $D$ is $r \\times r$ diagonal, and $V_r$ is $n \\times r$." }
      ]
    },
    {
      id: "les-4-4-7-e7", title: "Pseudoinverse", description: "Moore-Penrose Inverse", icon: "RotateCw",
      slides: [
        { id: "s0", type: "theory", title: "Pseudoinverse", content: "The **pseudoinverse** of $A$, denoted $A^+$, is defined as:\n$$ A^+ = V_r D^{-1} U_r^T $$\nIt acts like an inverse for non-square matrices in a least-squares sense." }
      ]
    },
    {
      id: "les-4-4-7-e8", title: "Example 8: Least Squares", description: "Solving Ax=b", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Example 8", content: "**Problem:** Use the pseudoinverse to find the least-squares solution to $A\\mathbf{x} = \\mathbf{b}$." },
        { id: "s1", type: "solution", title: "Solution", content: "The optimal solution is simply $\\hat{\\mathbf{x}} = A^+ \\mathbf{b}$." }
      ]
    }
  ]
};