import { Unit } from '../types';

export const UNIT_3_4_10: Unit = {
  id: "unit-3-4-10",
  title: "Conceptual True/False",
  description: "Exercises 17-18: True/False questions on Gram-Schmidt properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-10-ex17", title: "Exercise 17: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is an orthogonal basis for $W$, then multiplying $\\mathbf{v}_3$ by a scalar $c$ gives a new orthogonal basis $\\{\\mathbf{v}_1, \\mathbf{v}_2, c\\mathbf{v}_3\\}$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"What if c=0? Then it's not a basis."}, {id:"B", text:"False", isCorrect:true, explanation:"The scalar c must be nonzero."}] },
        { id: "s1", type: "quiz", title: "Question B", content: "The Gram-Schmidt process produces from a linearly independent set $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_p\\}$ an orthogonal set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ with the property that for each $k$, the vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ span the same subspace as that spanned by $\\mathbf{x}_1, \\dots, \\mathbf{x}_k$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is explicitly stated in Theorem 11."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If $A=QR$, where $Q$ has orthonormal columns, then $R = Q^T A$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Multiply $A=QR$ by $Q^T$ on the left. Since $Q^T Q = I$, $Q^T A = R$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-4-10-ex18", title: "Exercise 18: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $W = \\text{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2, \\mathbf{x}_3\\}$ with linearly independent $\\mathbf{x}_i$, and if $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is an orthogonal set in $W$, then $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is a basis for $W$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"What if one of the v_i is the zero vector?"}, {id:"B", text:"False", isCorrect:true, explanation:"An orthogonal set must consist of NONZERO vectors to be automatically linearly independent and thus a basis."}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $\\mathbf{x}$ is not in a subspace $W$, then $\\mathbf{x} - \\text{proj}_W \\mathbf{x}$ is not zero.", options: [{id:"A", text:"True", isCorrect:true, explanation:"If it were zero, then x = proj_W x, meaning x is in W."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "In a QR factorization, say $A=QR$ (when $A$ has linearly independent columns), the columns of $Q$ form an orthonormal basis for the column space of $A$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the definition of the QR factorization in Theorem 12."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};