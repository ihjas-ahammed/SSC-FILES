import { Unit } from '../types';

export const UNIT_1_1_10: Unit = {
  id: "unit-1-1-10",
  title: "Conceptual Review",
  description: "Exercises 23-24: True/False drills on definitions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-10-ex23", title: "Exercise 23: True or False?", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $f$ is a function in the vector space $V$ of all real-valued functions on $\\mathbb{R}$ and if $f(t) = 0$ for some $t$, then $f$ is the zero vector in $V$.", options: [{id:"A", text:"True", isCorrect:false, explanation:""}, {id:"B", text:"False", isCorrect:true, explanation:"The zero vector must be zero for ALL t, not just some t. Example: $f(t)=t$ is 0 at $t=0$ but is not the zero function."}] },
        { id: "s1", type: "quiz", title: "Question B", content: "A vector is an arrow in three-dimensional space.", options: [{id:"A", text:"True", isCorrect:false, explanation:"That is one specific example."}, {id:"B", text:"False", isCorrect:true, explanation:"A vector is an element of any vector space (e.g., functions, matrices, sequences)."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "A subset $H$ of a vector space $V$ is a subspace of $V$ if the zero vector is in $H$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Condition is necessary but not sufficient."}, {id:"B", text:"False", isCorrect:true, explanation:"It must ALSO be closed under addition and scalar multiplication."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "A subspace is also a vector space.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Yes, a subspace satisfies all 10 axioms of a vector space by inheritance and the 3 subspace properties."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-1-1-10-ex24", title: "Exercise 24: True or False?", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "A vector is any element of a vector space.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the definition of a vector."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $\\mathbf{u}$ is a vector in a vector space $V$, then $(-1)\\mathbf{u}$ is the same as the negative of $\\mathbf{u}$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is one of the properties derived from the axioms (Property 3 in the text)."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "A vector space is also a subspace.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Every vector space $V$ is a subspace of itself."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "$\\mathbb{R}^2$ is a subspace of $\\mathbb{R}^3$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Often confused, but false."}, {id:"B", text:"False", isCorrect:true, explanation:"The elements of R2 are pairs, R3 are triples. R2 is not a subset of R3."}] }
      ]
    }
  ]
};