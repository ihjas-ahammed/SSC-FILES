import { Unit } from '../types';

export const UNIT_3_4_3: Unit = {
  id: "unit-3-4-3",
  title: "The Gram-Schmidt Process",
  description: "Theorem 11: The general algorithm.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-3-thm11", title: "Theorem 11", description: "The Algorithm", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 11", content: "Given a basis $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_p\\}$ for a nonzero subspace $W$ of $\\mathbb{R}^n$, define:\n\n1. $\\mathbf{v}_1 = \\mathbf{x}_1$\n2. $\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$\n3. $\\mathbf{v}_3 = \\mathbf{x}_3 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_2}{\\mathbf{v}_2 \\cdot \\mathbf{v}_2}\\mathbf{v}_2$\n\n... and so on.\n\nThen $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is an **orthogonal basis** for $W$, and $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\} = \\text{Span}\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_k\\}$ for $1 \\le k \le p$." },
        { id: "s1", type: "quiz", title: "Geometric Interpretation", content: "What is $\\mathbf{v}_k$ geometrically?", options: [{id:"A", text:"The projection of $\\mathbf{x}_k$ onto the previous vectors.", isCorrect:false, explanation:"That is the part we subtract."}, {id:"B", text:"The component of $\\mathbf{x}_k$ orthogonal to the subspace spanned by the previous vectors.", isCorrect:true, explanation:"$\\mathbf{x}_k - \\text{proj}_{W_{k-1}} \\mathbf{x}_k$."}] },
        { id: "s2", type: "fill_in_blank", title: "Span Property", content: "The Gram-Schmidt process preserves the ___ at each step $k$.", blankAnswer: "span" }
      ]
    }
  ]
};