import { Unit } from '../types';

export const UNIT_2_3_10: Unit = {
  id: "unit-2-3-10",
  title: "Rank 1 Matrices",
  description: "Exercise 30: Outer products.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-10-ex30", title: "Exercise 30", description: "uv^T", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Let $\\mathbf{u} \\in \\mathbb{R}^m$ and $\\mathbf{v} \\in \\mathbb{R}^n$, both nonzero. Let $A = \\mathbf{u}\\mathbf{v}^T$. Show that $\\text{rank } A = 1$." },
        { id: "s1", type: "solution", title: "Proof", content: "The columns of $A = \\mathbf{u}\\mathbf{v}^T = \\mathbf{u} [v_1 \\ v_2 \\ \\dots \\ v_n]$ are $v_1\\mathbf{u}, v_2\\mathbf{u}, \\dots, v_n\\mathbf{u}$.\n\nAll columns are scalar multiples of the single vector $\\mathbf{u}$. Since $\\mathbf{u} \\neq \\mathbf{0}$, the column space is spanned by $\\mathbf{u}$ and has dimension 1." }
      ]
    }
  ]
};