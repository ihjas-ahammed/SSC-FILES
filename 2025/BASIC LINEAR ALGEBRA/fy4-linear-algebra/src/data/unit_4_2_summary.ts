import { Unit } from '../types';

export const UNIT_4_2_SUMMARY: Unit = {
  id: "unit-4-2-summary",
  title: "Section 7.2 Summary",
  description: "Recap of Quadratic Forms.",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-2-sum-1", title: "Quadratic Forms & Matrices", description: "Key Definition", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "theory", title: "The Form", content: "A quadratic form on $\\mathbb{R}^n$ is a function $Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}$, where $A$ is an $n \\times n$ symmetric matrix.\nThe cross terms $x_i x_j$ determine the off-diagonal entries of $A$ (split evenly)." }
      ]
    },
    {
      id: "les-4-2-sum-2", title: "Principal Axes Theorem", description: "Eliminating cross terms", icon: "Compass",
      slides: [
        { id: "s0", type: "theory", title: "Change of Variable", content: "The substitution $\\mathbf{x} = P\\mathbf{y}$, where $P$ is an orthogonal matrix that diagonalizes $A$, transforms $Q$ into a form with no cross-product terms: $\\mathbf{y}^T D \\mathbf{y} = \\lambda_1 y_1^2 + \\dots + \\lambda_n y_n^2$.\nThe columns of $P$ are the principal axes." }
      ]
    },
    {
      id: "les-4-2-sum-3", title: "Classifying Definiteness", description: "Theorem 5", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "theory", title: "Classification Rules", content: "A quadratic form is classified solely by its eigenvalues:\n- **Positive Definite:** All $\\lambda_i > 0$.\n- **Negative Definite:** All $\\lambda_i < 0$.\n- **Indefinite:** Both positive and negative $\\lambda_i$.\n- **Semidefinite:** Allow $\\lambda_i = 0$ alongside positives or negatives." }
      ]
    }
  ]
};