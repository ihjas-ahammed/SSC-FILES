import { Unit } from '../types';

export const UNIT_2_1_10: Unit = {
  id: "unit-2-1-10",
  title: "Conceptual True/False",
  description: "Exercises 15-16: Core concepts on coordinates and isomorphisms.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-10-ex15", title: "Exercise 15: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $\\mathbf{x}$ is in $V$ and if $\\mathcal{B}$ contains $n$ vectors, then the $\\mathcal{B}$-coordinate vector of $\\mathbf{x}$ is in $\\mathbb{R}^n$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The coordinate vector lists the $n$ weights for the $n$ basis vectors, so it is a column vector with $n$ entries."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $P_\\mathcal{B}$ is the change-of-coordinates matrix, then $[\\mathbf{x}]_\\mathcal{B} = P_\\mathcal{B}\\mathbf{x}$, for $\\mathbf{x}$ in $V$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"The relationship is backward."}, {id:"B", text:"False", isCorrect:true, explanation:"The correct formula is $\\mathbf{x} = P_\\mathcal{B}[\\mathbf{x}]_\\mathcal{B}$ (if V is $\\mathbb{R}^n$). To find coords, we use $P_\\mathcal{B}^{-1}\\mathbf{x}$."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The vector spaces $\\mathbb{P}_3$ and $\\mathbb{R}^3$ are isomorphic.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Check the dimensions!"}, {id:"B", text:"False", isCorrect:true, explanation:"$\\mathbb{P}_3$ has dimension 4 (basis $\{1, t, t^2, t^3\}$), so it is isomorphic to $\\mathbb{R}^4$, not $\\mathbb{R}^3$."}] }
      ]
    },
    {
      id: "les-2-1-10-ex16", title: "Exercise 16: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "If $\\mathcal{B}$ is the standard basis for $\\mathbb{R}^n$, then the $\\mathcal{B}$-coordinate vector of an $\\mathbf{x}$ in $\\mathbb{R}^n$ is $\\mathbf{x}$ itself.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The weights for the standard basis vectors are exactly the components of the vector."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "The correspondence $[\\mathbf{x}]_\\mathcal{B} \\mapsto \\mathbf{x}$ is called the coordinate mapping.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Pay close attention to the direction of the arrow."}, {id:"B", text:"False", isCorrect:true, explanation:"The coordinate mapping goes FROM vectors in V TO their coordinates in $\\mathbb{R}^n$, so it is $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "In some cases, a plane in $\\mathbb{R}^3$ can be isomorphic to $\\mathbb{R}^2$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"If the plane is a subspace (passes through the origin), it has a basis of 2 vectors, making it structurally identical to $\\mathbb{R}^2$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};