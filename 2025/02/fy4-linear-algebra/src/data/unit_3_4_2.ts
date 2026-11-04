import { Unit } from '../types';

export const UNIT_3_4_2: Unit = {
  id: "unit-3-4-2",
  title: "Gram-Schmidt in Higher Dimensions",
  description: "Example 2: Orthogonalizing three vectors.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-2-ex2", title: "Example 2: 3 Vectors", description: "Recursive steps", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Let $\\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{x}_3 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 1 \\end{bmatrix}$. Construct an orthogonal basis $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ for $W = \\text{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2, \\mathbf{x}_3\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Step 1 & 2**", interactiveSteps: [
           { stepText: "Step 1: Set $\\mathbf{v}_1 = \\mathbf{x}_1 = [1, 1, 1, 1]^T$." },
           { stepText: "Step 2: $\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$." },
           { prompt: "Calculate the scalar.", options: [{id:"A", text:"$3/4$", isCorrect:true, explanation:"$0+1+1+1=3$ and $1+1+1+1=4$."}, {id:"B", text:"$1/2$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{3}{4}\\mathbf{v}_1 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\begin{bmatrix} 3/4 \\\\ 3/4 \\\\ 3/4 \\\\ 3/4 \\end{bmatrix} = \\begin{bmatrix} -3/4 \\\\ 1/4 \\\\ 1/4 \\\\ 1/4 \\end{bmatrix}$." },
           { stepText: "Optional: Scale by 4 to avoid fractions. Let's use $\\mathbf{v}_2' = [-3, 1, 1, 1]^T$ for calculations." }
        ]},
        { id: "s2", type: "solution", title: "Step 3", content: "**Step 3: $\\mathbf{v}_3 = \\mathbf{x}_3 - \\text{proj}_{\\mathbf{v}_1}\\mathbf{x}_3 - \\text{proj}_{\\mathbf{v}_2'}\\mathbf{x}_3$.**\n\nProjection onto $\\mathbf{v}_1$: $\\frac{2}{4}\\mathbf{v}_1 = \\frac{1}{2}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$.\n\nProjection onto $\\mathbf{v}_2'$: $\\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_2'}{\\mathbf{v}_2' \\cdot \\mathbf{v}_2'}\\mathbf{v}_2'$.\nDot product: $0(-3) + 0(1) + 1(1) + 1(1) = 2$.\nNorm squared: $9+1+1+1=12$.\nRatio: $2/12 = 1/6$.\n\n$\\mathbf{v}_3 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\begin{bmatrix} 1/2 \\\\ 1/2 \\\\ 1/2 \\\\ 1/2 \\end{bmatrix} - \\frac{1}{6}\\begin{bmatrix} -3 \\\\ 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -2/3 \\\\ 1/3 \\\\ 1/3 \\end{bmatrix}$." }
      ]
    }
  ]
};