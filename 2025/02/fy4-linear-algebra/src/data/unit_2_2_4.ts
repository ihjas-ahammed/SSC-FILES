import { Unit } from '../types';

export const UNIT_2_2_4: Unit = {
  id: "unit-2-2-4",
  title: "Practice Problems",
  description: "Conceptual checks on dimension.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-4-p1", title: "Practice Problem 1", description: "True/False", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "quiz", title: "Problem 1a", content: "If $\\dim V = p$ and if $S$ is a linearly dependent subset of $V$, then $S$ contains more than $p$ vectors.", options: [{id:"A", text:"True", isCorrect:false, explanation:"A set can be dependent with fewer than p vectors (e.g. {0})."}, {id:"B", text:"False", isCorrect:true, explanation:"Consider the set {0}. It is dependent but size is 1."}] },
        { id: "s1", type: "quiz", title: "Problem 1b", content: "If $S$ spans $V$ and if $T$ is a subset of $V$ that contains more vectors than $S$, then $T$ is linearly dependent.", options: [{id:"A", text:"True", isCorrect:true, explanation:"If S spans V, dim V <= |S|. Since |T| > |S| >= dim V, T must be dependent (Theorem 9)."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-2-2-4-p2", title: "Practice Problem 2", description: "Subspace Dimensions", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 2", content: "**Problem:** Let $H$ and $K$ be subspaces of $V$ such that $H \\subseteq K$ and $\\dim H = \\dim K < \\infty$. What can you say about $H$ and $K$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Let $p = \dim H = \dim K$. Let $\\mathcal{B} = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ be a basis for $H$.\n\nSince $H \\subseteq K$, these vectors are also in $K$. Since they are linearly independent and there are $p$ of them (where $p = \\dim K$), by the Basis Theorem (Theorem 12), they must form a basis for $K$ as well.\n\nThus $\\text{Span } \\mathcal{B} = H$ and $\\text{Span } \\mathcal{B} = K$. Therefore $H = K$." }
      ]
    }
  ]
};