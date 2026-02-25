import { Unit } from '../types';

export const UNIT_4_3_2: Unit = {
  id: "unit-4-3-2",
  title: "Geometric View and Theorem 6",
  description: "Example 2 and Theorem 6: Visualizing constraints and formalizing the eigenvalue connection.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-2-e2", title: "Example 2: Visualizing Constraints", description: "Geometry of the quadratic form", icon: "Eye",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Let $A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 7 \\end{bmatrix}$, and let $Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}$ for $\\mathbf{x}$ in $\\mathbb{R}^2$. Visualize the constrained optimization problem." },
        { id: "s1", type: "solution", title: "Visualization", content: "The surface $z = 3x_1^2 + 7x_2^2$ looks like a bowl opening upwards.\n\nThe constraint $\\|\\mathbf{x}\\| = 1$ is a cylinder of radius 1 centered on the z-axis: $x_1^2 + x_2^2 = 1$.\n\nThe intersection of the bowl and the cylinder is a curve floating in 3D space. The \"heights\" of the points on this curve are the constrained values of $Q(\\mathbf{x})$.\n\nGeometrically, the problem is to locate the highest and lowest points on this intersection curve." },
        { id: "s2", type: "solution", title: "Finding the extrema", content: "The two highest points on the curve are 7 units above the $x_1 x_2$-plane, occurring where $x_1=0$ and $x_2=\\pm 1$. These correspond to the eigenvalue 7 and eigenvectors $(0,1)$ and $(0,-1)$.\n\nThe two lowest points are 3 units above the plane, at $x_1=\\pm 1, x_2=0$. These correspond to the eigenvalue 3 and eigenvectors $(1,0)$ and $(-1,0)$." }
      ]
    },
    {
      id: "les-4-3-2-t6", title: "Theorem 6: Min and Max", description: "Formalizing the eigenvalue connection", icon: "Shield",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 6", content: "Let $A$ be a symmetric matrix, and define $m$ and $M$ as the minimum and maximum values of $\\mathbf{x}^T A \\mathbf{x}$ subject to $\\|\\mathbf{x}\\| = 1$.\n\nThen $M$ is the **greatest eigenvalue** $\\lambda_1$ of $A$ and $m$ is the **least eigenvalue** of $A$.\n\nThe value of $\\mathbf{x}^T A \\mathbf{x}$ is $M$ when $\\mathbf{x}$ is a **unit eigenvector** $\\mathbf{u}_1$ corresponding to $M$.\nThe value of $\\mathbf{x}^T A \\mathbf{x}$ is $m$ when $\\mathbf{x}$ is a **unit eigenvector** corresponding to $m$." },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "If $A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 8 \\end{bmatrix}$ has eigenvalues 9 and 4, what is the maximum value of $\\mathbf{x}^T A \\mathbf{x}$ subject to $\\|\\mathbf{x}\\| = 1$?", options: [{id:"A", text:"9", isCorrect:true, explanation:"The maximum value is exactly the largest eigenvalue."}, {id:"B", text:"8", isCorrect:false, explanation:""}] },
        { id: "s2", type: "fill_in_blank", title: "Where it occurs", content: "The maximum value is attained when $\\mathbf{x}$ is the unit ___ corresponding to the largest eigenvalue.", blankAnswer: "eigenvector" }
      ]
    }
  ]
};