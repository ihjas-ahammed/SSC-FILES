import { Unit } from '../types';

export const UNIT_3_4_6: Unit = {
  id: "unit-3-4-6",
  title: "Practice Problems",
  description: "Applying Gram-Schmidt.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-6-p1", title: "Practice Problem 1", description: "Orthogonalizing a basis", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Problem 1", content: "**Problem:** Let $W = \\text{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$, where $\\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$ and $\\mathbf{x}_2 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 1 \\end{bmatrix}$. Construct an orthogonal basis for $W$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Gram-Schmidt.**", interactiveSteps: [
           { stepText: "Set $\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Calculate projection of $\\mathbf{x}_2$ onto $\\mathbf{v}_1$: $\\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$." },
           { prompt: "Dot products: $1-2+1=0$. What does this mean?", options: [{id:"A", text:"$\\mathbf{x}_2$ is already orthogonal to $\\mathbf{x}_1$.", isCorrect:true, explanation:"Zero dot product implies orthogonality."}, {id:"B", text:"We made a mistake.", isCorrect:false, explanation:""}], stepText: "Since $\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 0$, $\\mathbf{v}_2 = \\mathbf{x}_2$." },
           { stepText: "The orthogonal basis is simply $\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$." }
        ]}
      ]
    }
  ]
};