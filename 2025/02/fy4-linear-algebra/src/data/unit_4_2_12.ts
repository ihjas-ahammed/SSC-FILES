import { Unit } from '../types';

export const UNIT_4_2_12: Unit = {
  id: "unit-4-2-12",
  title: "Conceptual True/False",
  description: "Exercises 21-22: Checking conceptual understanding of quadratic forms.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-12-ex21", title: "Exercise 21: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "The matrix of a quadratic form is a symmetric matrix.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is true by definition."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "A quadratic form has no cross-product terms if and only if the matrix of the quadratic form is a diagonal matrix.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The off-diagonal entries exactly correspond to the cross-product terms."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "The principal axes of a quadratic form $\\mathbf{x}^T A \\mathbf{x}$ are eigenvectors of $A$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"By the Principal Axes Theorem, the columns of P (which are the eigenvectors) define the principal axes."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "A positive definite quadratic form $Q$ satisfies $Q(\\mathbf{x}) > 0$ for all $\\mathbf{x}$ in $\\mathbb{R}^n$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Check what happens at the origin!"}, {id:"B", text:"False", isCorrect:true, explanation:"It satisfies $Q(\\mathbf{x}) > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$. At $\\mathbf{x} = \\mathbf{0}$, $Q(\\mathbf{0}) = 0$."}] }
      ]
    },
    {
      id: "les-4-2-12-ex22", title: "Exercise 22: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "The expression $\\|\\mathbf{x}\\|^2$ is a quadratic form.", options: [{id:"A", text:"True", isCorrect:true, explanation:"$\\|\\mathbf{x}\\|^2 = \\mathbf{x}^T I \\mathbf{x}$, where $I$ is symmetric."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $A$ is symmetric and $P$ is an orthogonal matrix, then the change of variable $\\mathbf{x} = P\\mathbf{y}$ transforms $\\mathbf{x}^T A \\mathbf{x}$ into a quadratic form with no cross-product term.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Not JUST any orthogonal matrix works."}, {id:"B", text:"False", isCorrect:true, explanation:"$P$ must specifically be the orthogonal matrix that diagonalizes $A$ (its columns must be eigenvectors of $A$)."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If $A$ is a $2 \\times 2$ symmetric matrix, then the set of $\\mathbf{x}$ such that $\\mathbf{x}^T A \\mathbf{x} = c$ (for a constant $c$) corresponds to either a circle, an ellipse, or a hyperbola.", options: [{id:"A", text:"True", isCorrect:false, explanation:"It could also be intersecting lines, parallel lines, a single point, or empty set depending on c and A."}, {id:"B", text:"False", isCorrect:true, explanation:"It misses degenerate cases like intersecting lines (when c=0 for indefinite forms)."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "An indefinite quadratic form is either positive semidefinite or negative semidefinite.", options: [{id:"A", text:"True", isCorrect:false, explanation:"These are mutually exclusive categories."}, {id:"B", text:"False", isCorrect:true, explanation:"An indefinite form takes both strictly positive and strictly negative values, which violates both semidefinite definitions."}] },
        { id: "s4", type: "quiz", title: "Question E", content: "If $A$ is symmetric and the quadratic form $\\mathbf{x}^T A \\mathbf{x}$ has only negative values for $\\mathbf{x} \\neq \\mathbf{0}$, then the eigenvalues of $A$ are all negative.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is exactly the definition of negative definite, which corresponds to all negative eigenvalues by Theorem 5."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};