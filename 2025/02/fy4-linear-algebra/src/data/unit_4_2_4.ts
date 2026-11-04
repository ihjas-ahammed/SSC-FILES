import { Unit } from '../types';

export const UNIT_4_2_4: Unit = {
  id: "unit-4-2-4",
  title: "The Principal Axes Theorem",
  description: "Theorem 4: Formalizing the elimination of cross-product terms.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-4-t4", title: "Theorem 4: Principal Axes", description: "Geometrically aligning with the curve", icon: "Compass",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4", content: "**The Principal Axes Theorem**\n\nLet $A$ be an $n \\times n$ symmetric matrix. Then there is an orthogonal change of variable, $\\mathbf{x} = P\\mathbf{y}$, that transforms the quadratic form $\\mathbf{x}^T A \\mathbf{x}$ into a quadratic form $\\mathbf{y}^T D \\mathbf{y}$ with no cross-product term.\n\nThe columns of $P$ are called the **principal axes** of the quadratic form. The vector $\\mathbf{y}$ is the coordinate vector of $\\mathbf{x}$ relative to the orthonormal basis of $\\mathbb{R}^n$ given by these principal axes." },
        { id: "s1", type: "quiz", title: "Conceptual Verification", content: "Why are there no cross-product terms in $\\mathbf{y}^T D \\mathbf{y}$?", options: [{id:"A", text:"Because D is a diagonal matrix.", isCorrect:true, explanation:"A diagonal matrix has zeros everywhere off the diagonal, which are the coefficients for the cross-product terms."}, {id:"B", text:"Because P is orthogonal.", isCorrect:false, explanation:"P being orthogonal is what allows us to form D, but D being diagonal is the direct reason there are no cross-terms."}] },
        { id: "s2", type: "quiz", title: "Principal Axes", content: "What are the 'principal axes' of a quadratic form mathematically?", options: [{id:"A", text:"The eigenvectors of the matrix A.", isCorrect:true, explanation:"The columns of P are the orthonormal eigenvectors of A."}, {id:"B", text:"The standard coordinate axes.", isCorrect:false, explanation:"The standard axes usually have cross-terms. The principal axes are the rotated ones."}] },
        { id: "s3", type: "fill_in_blank", title: "Coordinate Connection", content: "The substitution $\\mathbf{x} = P\\mathbf{y}$ means that $\\mathbf{y}$ is exactly the coordinate vector $[\\mathbf{x}]_B$ relative to the basis $B$ formed by the ___ axes.", blankAnswer: "principal" }
      ]
    }
  ]
};