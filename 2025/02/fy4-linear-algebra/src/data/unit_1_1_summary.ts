import { Unit } from '../types';

export const UNIT_1_1_SUMMARY: Unit = {
  id: "unit-1-1-summary",
  title: "Section 1 Summary",
  description: "Recap of Vector Spaces and Subspaces.",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-1-sum-1", title: "Core Concepts", description: "Reviewing the definitions", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "theory", title: "Vector Spaces", content: "A **Vector Space** is a set of objects closed under addition and scalar multiplication, satisfying 10 axioms. Examples include $\\mathbb{R}^n$, polynomials $\\mathbb{P}_n$, functions, and matrices." },
        { id: "s1", type: "theory", title: "Subspaces", content: "A **Subspace** $H$ is a subset of a vector space $V$ that is:\n1. Contains the zero vector $\\mathbf{0}$.\n2. Closed under addition.\n3. Closed under scalar multiplication.\n\nEvery subspace is itself a vector space." },
        { id: "s2", type: "theory", title: "Span", content: "The **Span** of a set of vectors $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is the set of all linear combinations of those vectors. **Theorem 1** states that $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is *always* a subspace." },
        { id: "s3", type: "quiz", title: "Final Check", content: "Is the set of integer-valued vectors a subspace of $\\mathbb{R}^2$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Scalar multiplication by 0.5 would result in non-integers."}, {id:"B", text:"No", isCorrect:true, explanation:"It is not closed under scalar multiplication by real numbers."}] }
      ]
    }
  ]
};