import { Unit } from '../types';

export const UNIT_3_4_4: Unit = {
  id: "unit-3-4-4",
  title: "Orthonormal Bases",
  description: "Example 3: Normalizing the result.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-4-ex3", title: "Example 3: Constructing Orthonormal Basis", description: "Normalization", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Use the orthogonal basis found in Example 1 to construct an orthonormal basis for $W$.\n\nVectors from Example 1: $\\mathbf{v}_1 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Divide by norms.**", interactiveSteps: [
           { prompt: "Calculate $\\|\\mathbf{v}_1\\|$.", options: [{id:"A", text:"$\\sqrt{45}$", isCorrect:true, explanation:"$9+36=45$."}, {id:"B", text:"9", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 = \\frac{1}{\\sqrt{45}} \\mathbf{v}_1 = \\begin{bmatrix} 3/\\sqrt{45} \\\\ 6/\\sqrt{45} \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1/\\sqrt{5} \\\\ 2/\\sqrt{5} \\\\ 0 \\end{bmatrix}$." },
           { prompt: "Calculate $\\|\\mathbf{v}_2\\|$.", options: [{id:"A", text:"2", isCorrect:true, explanation:""}, {id:"B", text:"4", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_2 = \\frac{1}{2} \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "The orthonormal basis is $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$." }
        ]}
      ]
    }
  ]
};