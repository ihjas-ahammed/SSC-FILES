import { Unit } from '../types';

export const UNIT_1_3_12: Unit = {
  id: "unit-1-3-12",
  title: "Conceptual True/False",
  description: "Exercises 21-22: True/False questions on basis properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-12-ex21", title: "Exercise 21: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "A single vector by itself is linearly dependent.", options: [{id:"A", text:"True", isCorrect:false, explanation:"If the vector is non-zero, it is linearly independent."}, {id:"B", text:"False", isCorrect:true, explanation:"Only the zero vector by itself is linearly dependent."}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $H = \\text{Span}\\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}$, then $\\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}$ is a basis for $H$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The set might be linearly dependent."}, {id:"B", text:"False", isCorrect:true, explanation:"It is a spanning set, but not necessarily a basis unless it is also linearly independent."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The columns of an invertible $n \\times n$ matrix form a basis for $\\mathbb{R}^n$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"By the Invertible Matrix Theorem, the columns are independent and span $\\mathbb{R}^n$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "A basis is a spanning set that is as large as possible.", options: [{id:"A", text:"True", isCorrect:false, explanation:"A spanning set that is as large as possible would contain all vectors in the space!"}, {id:"B", text:"False", isCorrect:true, explanation:"A basis is a spanning set that is as SMALL as possible (or a linearly independent set that is as LARGE as possible)."}] },
        { id: "s4", type: "quiz", title: "Question E", content: "In some cases, the linear dependence relations among the columns of a matrix can be affected by certain elementary row operations on the matrix.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Row operations preserve linear dependence relations among columns."}, {id:"B", text:"False", isCorrect:true, explanation:"The linear dependence relations among columns are EXACTLY the same for A and its reduced echelon form."}] }
      ]
    },
    {
      id: "les-1-3-12-ex22", title: "Exercise 22: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "A linearly independent set in a subspace $H$ is a basis for $H$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"It must ALSO span $H$ to be a basis."}, {id:"B", text:"False", isCorrect:true, explanation:"An independent set might not span the entire subspace."}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If a finite set $S$ of nonzero vectors spans a vector space $V$, then some subset of $S$ is a basis for $V$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is exactly the Spanning Set Theorem."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "A basis is a linearly independent set that is as large as possible.", options: [{id:"A", text:"True", isCorrect:true, explanation:"If you add any vector to a basis, it becomes linearly dependent."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "The standard method for producing a spanning set for $\\text{Nul } A$, described in Section 4.2, sometimes fails to produce a basis for $\\text{Nul } A$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The standard method always produces linearly independent vectors."}, {id:"B", text:"False", isCorrect:true, explanation:"The vectors produced by solving $A\\mathbf{x}=\\mathbf{0}$ with free variables are always linearly independent, and thus always form a basis."}] },
        { id: "s4", type: "quiz", title: "Question E", content: "If $B$ is an echelon form of a matrix $A$, then the pivot columns of $B$ form a basis for $\\text{Col } A$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The columns of B form a basis for Col B, not Col A."}, {id:"B", text:"False", isCorrect:true, explanation:"You must use the pivot columns of the ORIGINAL matrix $A$."}] }
      ]
    }
  ]
};