import { Unit } from '../types';

export const UNIT_3_3_11: Unit = {
  id: "unit-3-3-11",
  title: "True/False Questions",
  description: "Exercises 21-22: Conceptual understanding of projections.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-11-ex21", title: "Exercise 21: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $\\mathbf{z}$ is orthogonal to $\\mathbf{u}_1$ and $\\mathbf{u}_2$ and if $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$, then $\\mathbf{z}$ must be in $W^\\perp$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Being orthogonal to a spanning set implies orthogonality to the whole subspace."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "For each $\\mathbf{y}$ and each subspace $W$, the vector $\\mathbf{y} - \\text{proj}_W \\mathbf{y}$ is orthogonal to $W$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the Orthogonal Decomposition Theorem."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The orthogonal projection $\\hat{\\mathbf{y}}$ of $\\mathbf{y}$ onto a subspace $W$ can sometimes depend on the orthogonal basis for $W$ used to compute $\\hat{\\mathbf{y}}$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The projection is unique and independent of the basis."}, {id:"B", text:"False", isCorrect:true, explanation:"It depends only on the subspace W itself."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "If $\\mathbf{y}$ is in a subspace $W$, then the orthogonal projection of $\\mathbf{y}$ onto $W$ is $\\mathbf{y}$ itself.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The closest point in W to a vector already in W is the vector itself."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s4", type: "quiz", title: "Question E", content: "If the columns of an $n \\times p$ matrix $U$ are orthonormal, then $U U^T \\mathbf{y}$ is the orthogonal projection of $\\mathbf{y}$ onto the column space of $U$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Theorem 10 states exactly this."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-3-11-ex22", title: "Exercise 22: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $W$ is a subspace of $\\mathbb{R}^n$ and if $\\mathbf{v}$ is in both $W$ and $W^\\perp$, then $\\mathbf{v}$ must be the zero vector.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The only vector orthogonal to itself is 0."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "In the Orthogonal Decomposition Theorem, each term in formula (2) for $\\hat{\\mathbf{y}}$ is itself an orthogonal projection of $\\mathbf{y}$ onto a subspace of $W$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Each term projects onto the 1D subspace spanned by a basis vector."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If $\\mathbf{y} = \\mathbf{z}_1 + \\mathbf{z}_2$, where $\\mathbf{z}_1$ is in a subspace $W$ and $\\mathbf{z}_2$ is in $W^\\perp$, then $\\mathbf{z}_1$ must be the orthogonal projection of $\\mathbf{y}$ onto $W$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Uniqueness of decomposition."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "The best approximation to $\\mathbf{y}$ by elements of a subspace $W$ is given by the vector $\\mathbf{y} - \\text{proj}_W \\mathbf{y}$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"That is the error vector z."}, {id:"B", text:"False", isCorrect:true, explanation:"The best approximation is the projection itself."}] }
      ]
    }
  ]
};