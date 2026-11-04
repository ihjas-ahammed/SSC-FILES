import { Unit } from '../types';

export const UNIT_2_3_7: Unit = {
  id: "unit-2-3-7",
  title: "Conceptual True/False",
  description: "Exercises 17-18: Testing understanding of Rank properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-7-ex17", title: "Exercise 17", description: "True/False Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "The row space of $A$ is the same as the column space of $A^T$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the definition of row space."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $B$ is in echelon form, then the pivot columns of $B$ form a basis for $\\text{Col } A$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Row operations change the column space."}, {id:"B", text:"False", isCorrect:true, explanation:"They form a basis for Col B, but for Col A you need columns from A."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The dimension of the null space of $A$ is the number of columns of $A$ that are *not* pivot columns.", options: [{id:"A", text:"True", isCorrect:true, explanation:"These correspond to free variables."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "The row space of $A^T$ is the same as the column space of $A$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"$(\\text{Row } A^T) = \\text{Col } (A^T)^T = \\text{Col } A$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s4", type: "quiz", title: "Question E", content: "If $A$ and $B$ are row equivalent, their row spaces are the same.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Theorem 13."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-2-3-7-ex18", title: "Exercise 18", description: "True/False Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $B$ is in echelon form, the nonzero rows of $B$ form a basis for $\\text{Row } A$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Theorem 13."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "The dimensions of the row space and the column space of $A$ are always the same.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the Rank Theorem."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The sum of the dimensions of the row space and the null space of $A$ equals the number of rows in $A$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"It equals the number of COLUMNS ($n$)."}, {id:"B", text:"False", isCorrect:true, explanation:"Rank + Nullity = n."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "On a computer, row operations can change the apparent rank of a matrix.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Rounding errors can make zero entries non-zero."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};