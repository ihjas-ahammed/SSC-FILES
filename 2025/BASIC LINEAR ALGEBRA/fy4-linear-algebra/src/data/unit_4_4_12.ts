import { Unit } from '../types';

export const UNIT_4_4_12: Unit = {
  id: "unit-4-4-12",
  title: "Conceptual SVD Questions",
  description: "Exercises 21-29: Proofs and True/False.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-12-ex21", title: "Exercise 21: Orthogonal P", description: "SVD of orthogonal matrix", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** Show that if $P$ is an orthogonal $m \\times m$ matrix, then $PA$ has the same singular values as $A$." },
        { id: "s1", type: "proof", title: "Proof", content: "Compute $(PA)^T (PA) = A^T P^T P A$.\nSince $P$ is orthogonal, $P^T P = I$.\nSo $(PA)^T (PA) = A^T A$.\n\nSince $PA$ and $A$ have the same Gram matrix ($A^T A$), they have the same eigenvalues for that matrix, and thus the same singular values." }
      ]
    },
    {
      id: "les-4-4-12-ex23", title: "Exercise 23: Invertible Matrix", description: "Singular values of inverse", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Let $U \\Sigma V^T$ be an SVD of an invertible matrix $A$. Find an SVD of $A^{-1}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A^{-1} = (U \\Sigma V^T)^{-1} = (V^T)^{-1} \\Sigma^{-1} U^{-1} = V \\Sigma^{-1} U^T$.\n\n$\Sigma^{-1}$ is diagonal with entries $1/\\sigma_i$. Note that the order is reversed (smallest singular value becomes largest). To make it a proper SVD, we might need to reorder the columns of $V$ and $U$ so the diagonal entries are decreasing." }
      ]
    },
    {
      id: "les-4-4-12-ex27", title: "Exercise 27: Fundamental Subspaces", description: "Matching bases", icon: "Columns",
      slides: [
        { id: "s0", type: "quiz", title: "Question", content: "Which columns of the SVD matrices form a basis for $\\text{Nul } A^T$?", options: [{id:"A", text:"The last $m-r$ columns of $U$.", isCorrect:true, explanation:"These are the left singular vectors corresponding to zero singular values."}, {id:"B", text:"The first $r$ columns of $U$.", isCorrect:false, explanation:"Those form a basis for Col A."}] }
      ]
    }
  ]
};