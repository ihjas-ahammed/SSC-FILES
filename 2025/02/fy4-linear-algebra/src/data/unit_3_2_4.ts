import { Unit } from '../types';

export const UNIT_3_2_4: Unit = {
  id: "unit-3-2-4",
  title: "Distance & Orthonormal Sets",
  description: "Example 4 (Geometric distance) and Definition 3 (Orthonormal Sets).",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-4-e4", title: "Example 4: Distance to a Line", description: "Shortest path to L", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Let $L$ be the line through the origin spanned by $\\mathbf{u} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix}$.\n\nFind the distance from $\\mathbf{y} = \\begin{bmatrix} 7 \\\\ 6 \\end{bmatrix}$ to $L$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the length of $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$.**", interactiveSteps: [
           { stepText: "The distance from $\\mathbf{y}$ to $L$ is the length of the perpendicular line segment from $\\mathbf{y}$ to its orthogonal projection $\\hat{\\mathbf{y}}$ on $L$." },
           { stepText: "From Example 3, we found the perpendicular component to be $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$." },
           { prompt: "Compute the length of $\\mathbf{z}$.", options: [{id:"A", text:"$\\sqrt{5}$", isCorrect:true, explanation:"$\\sqrt{(-1)^2 + 2^2} = \\sqrt{1+4} = \\sqrt{5}$."}, {id:"B", text:"$\\sqrt{3}$", isCorrect:false, explanation:""}], stepText: "The distance is $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| = \\sqrt{5}$." }
        ]},
        { id: "s2", type: "numerical", title: "Calculation", content: "What is the square of the distance?", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-2-4-d3", title: "Definition 3: Orthonormal Sets", description: "Orthogonal AND Unit length", icon: "Crosshair",
      slides: [
        { id: "s0", type: "theory", title: "Definition 3", content: "A set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is an **orthonormal set** if it is an orthogonal set of **unit vectors**.\n\nIf such a set forms a basis for a subspace $W$, it is called an **orthonormal basis** for $W$.\n\nThe simplest example of an orthonormal set is the standard basis $\\{\\mathbf{e}_1, \\dots, \\mathbf{e}_n\\}$ for $\\mathbb{R}^n$." },
        { id: "s1", type: "quiz", title: "Concept Check", content: "To convert an orthogonal set of nonzero vectors into an orthonormal set, what must you do?", options: [{id:"A", text:"Normalize each vector (divide by its length).", isCorrect:true, explanation:"Normalizing changes their lengths to 1 without altering their orthogonal directions."}, {id:"B", text:"Add the vectors together.", isCorrect:false, explanation:""}] },
        { id: "s2", type: "fill_in_blank", title: "Property", content: "In an orthonormal set, the dot product of any vector with itself ($\\mathbf{u}_i \\cdot \\mathbf{u}_i$) is always exactly ___.", blankAnswer: "1" }
      ]
    }
  ]
};