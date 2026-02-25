import { Unit } from '../types';

export const UNIT_4_2_5: Unit = {
  id: "unit-4-2-5",
  title: "Geometric View of Principal Axes",
  description: "Example 5: Rotating ellipses and hyperbolas to standard position.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-5-e5", title: "Example 5: Rotating an Ellipse", description: "Visualizing the change of variable", icon: "Eye",
      slides: [
        { id: "s0", type: "theory", title: "Geometric View", content: "Suppose $Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}$, where $A$ is an invertible $2 \\times 2$ symmetric matrix, and let $c$ be a constant. \nIt can be shown that the set of all $\\mathbf{x}$ satisfying $\\mathbf{x}^T A \\mathbf{x} = c$ either corresponds to an ellipse, a hyperbola, two intersecting lines, or has no points at all.\n\nIf $A$ is a diagonal matrix, the graph is in **standard position**. If $A$ has non-zero off-diagonal entries, the graph is rotated." },
        { id: "s1", type: "example_q", title: "Example 5", content: "**Problem:** The ellipse $5x_1^2 - 4x_1 x_2 + 5x_2^2 = 48$ is rotated out of standard position. Find a change of variable that removes the cross-product term, and write the new equation." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the Principal Axes Theorem.**", interactiveSteps: [
           { stepText: "The matrix of the quadratic form is $A = \\begin{bmatrix} 5 & -2 \\\\ -2 & 5 \\end{bmatrix}$." },
           { stepText: "The eigenvalues of $A$ are $3$ and $7$." },
           { prompt: "What will the left side of the new equation look like in terms of variables $y_1, y_2$?", options: [{id:"A", text:"$3y_1^2 + 7y_2^2$", isCorrect:true, explanation:"The coefficients become the eigenvalues."}, {id:"B", text:"$3y_1^2 - 7y_2^2$", isCorrect:false, explanation:""}], stepText: "The new equation is $3y_1^2 + 7y_2^2 = 48$." },
           { stepText: "The eigenvectors for these eigenvalues are $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$ and $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "These orthonormal eigenvectors form the columns of $P$, which define the new rotated coordinate axes $y_1$ and $y_2$." }
        ]},
        { id: "s3", type: "quiz", title: "Geometric Interpretation", content: "What does the matrix $P$ geometrically do to the standard ellipse $3y_1^2 + 7y_2^2 = 48$?", options: [{id:"A", text:"It rotates it by 45 degrees.", isCorrect:true, explanation:"The matrix P represents a rotation that maps the y-axes to the x-axes."}, {id:"B", text:"It scales it to be larger.", isCorrect:false, explanation:"Orthogonal matrices preserve size, they only rotate/reflect."}] },
        { id: "s4", type: "fill_in_blank", title: "Standard Position", content: "A quadratic curve is in standard position when its defining matrix $A$ is a ___ matrix.", blankAnswer: "diagonal" }
      ]
    }
  ]
};