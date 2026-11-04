import { Unit } from '../types';

export const UNIT_3_2_6: Unit = {
  id: "unit-3-2-6",
  title: "Orthogonal Matrices & Practice",
  description: "Examples 6 & 7 and Practice Problems for Section 6.2.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-6-e6", title: "Example 6", description: "Verifying length preservation", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Problem:** Let $U = \\begin{bmatrix} 1/\\sqrt{2} & 2/3 \\\\ 1/\\sqrt{2} & -2/3 \\\\ 0 & 1/3 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} \\sqrt{2} \\\\ 3 \\end{bmatrix}$.\n\nNotice that $U$ has orthonormal columns. Verify that $\\|U\\mathbf{x}\\| = \\|\\mathbf{x}\\|$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute both lengths.**", interactiveSteps: [
           { stepText: "Compute $U\\mathbf{x}$: \n$U\\mathbf{x} = \\begin{bmatrix} 1/\\sqrt{2} & 2/3 \\\\ 1/\\sqrt{2} & -2/3 \\\\ 0 & 1/3 \\end{bmatrix} \\begin{bmatrix} \\sqrt{2} \\\\ 3 \\end{bmatrix}$." },
           { stepText: "Row 1: $(1/\\sqrt{2})(\\sqrt{2}) + (2/3)(3) = 1 + 2 = 3$.\nRow 2: $(1/\\sqrt{2})(\\sqrt{2}) + (-2/3)(3) = 1 - 2 = -1$.\nRow 3: $0 + (1/3)(3) = 1$." },
           { prompt: "So $U\\mathbf{x} = [3, -1, 1]^T$. What is $\\|U\\mathbf{x}\\|$", options: [{id:"A", text:"$\\sqrt{11}$", isCorrect:true, explanation:"$\\sqrt{9+1+1}$."}, {id:"B", text:"$\\sqrt{9}$", isCorrect:false, explanation:""}], stepText: "$\\|U\\mathbf{x}\\| = \\sqrt{11}$." },
           { stepText: "Now compute $\\|\\mathbf{x}\\|$ directly: $\\sqrt{(\\sqrt{2})^2 + 3^2} = \\sqrt{2 + 9} = \\sqrt{11}$." },
           { stepText: "Lengths are equal! Theorem 7 works." }
        ]}
      ]
    },
    {
      id: "les-3-2-6-d4", title: "Definition 4: Orthogonal Matrix", description: "Square matrices with orthonormal columns", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonal Matrix", content: "An **orthogonal matrix** is a *square* invertible matrix $U$ such that $U^{-1} = U^T$.\n\nBy Theorem 6, such a matrix has orthonormal columns. (It is easy to see that any square matrix with orthonormal columns is an orthogonal matrix). \n\n*Note*: A better name might be *orthonormal matrix*, but \"orthogonal matrix\" is the standard term in linear algebra." },
        { id: "s1", type: "quiz", title: "Rows Check", content: "If $U$ is an orthogonal matrix, what can we say about its rows?", options: [{id:"A", text:"They form an orthonormal set as well.", isCorrect:true, explanation:"Because $U^T U = I$ and $U U^T = I$, both columns and rows are orthonormal."}, {id:"B", text:"Nothing specific.", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-2-6-e7", title: "Example 7", description: "Square matrix from Ex 5", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 7", content: "**Problem:** Look at the matrix $U$ formed by the columns from Example 5:\n$$ U = \\begin{bmatrix} 3/\\sqrt{11} & -1/\\sqrt{6} & -1/\\sqrt{66} \\\\ 1/\\sqrt{11} & 2/\\sqrt{6} & -4/\\sqrt{66} \\\\ 1/\\sqrt{11} & 1/\\sqrt{6} & 7/\\sqrt{66} \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Is $U$ an orthogonal matrix?\n\nYes! Since its columns were proven to be an orthonormal basis for $\\mathbb{R}^3$ in Example 5, and it is a square $3 \\times 3$ matrix, it satisfies $U^T U = I$. Therefore $U^{-1} = U^T$ and it is an orthogonal matrix." }
      ]
    },
    {
      id: "les-3-2-6-p1", title: "Practice Problem 1", description: "Orthonormal verification", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Let $\\mathbf{u}_1 = \\begin{bmatrix} -1/\\sqrt{5} \\\\ 2/\\sqrt{5} \\end{bmatrix}$ and $\\mathbf{u}_2 = \\begin{bmatrix} 2/\\sqrt{5} \\\\ 1/\\sqrt{5} \\end{bmatrix}$.\n\nShow that $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthonormal basis for $\\mathbb{R}^2$." },
        { id: "s1", type: "solution", title: "Solution", content: "1. **Orthogonality:** $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = (-1/\\sqrt{5})(2/\\sqrt{5}) + (2/\\sqrt{5})(1/\\sqrt{5}) = -2/5 + 2/5 = 0$.\n2. **Unit Length:**\n$\\text{  } \\|\\mathbf{u}_1\\|^2 = (-1/\\sqrt{5})^2 + (2/\\sqrt{5})^2 = 1/5 + 4/5 = 1$.\n$\\text{  } \\|\\mathbf{u}_2\\|^2 = (2/\\sqrt{5})^2 + (1/\\sqrt{5})^2 = 4/5 + 1/5 = 1$.\n\nSince it's an orthonormal set of 2 vectors in $\\mathbb{R}^2$, it forms an orthonormal basis." }
      ]
    },
    {
      id: "les-3-2-6-p2", title: "Practice Problem 2", description: "Projection invariance", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 2", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} 7 \\\\ 6 \\end{bmatrix}$ and $L$ be the line spanned by $\\mathbf{u} = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.\nCompute the orthogonal projection $\\hat{\\mathbf{y}}$ of $\\mathbf{y}$ onto $L$. (Compare with Example 3, where $\\mathbf{u}$ was $[4, 2]^T$)." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\mathbf{u}$.**", interactiveSteps: [
           { stepText: "$\\mathbf{y} \\cdot \\mathbf{u} = 7(2) + 6(1) = 14 + 6 = 20$." },
           { stepText: "$\\mathbf{u} \\cdot \\mathbf{u} = 2^2 + 1^2 = 4 + 1 = 5$." },
           { prompt: "Calculate $\\hat{\\mathbf{y}}$.", options: [{id:"A", text:"$\\frac{20}{5} \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 4 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\hat{\\mathbf{y}} = \\begin{bmatrix} 8 \\\\ 4 \\end{bmatrix}$." },
           { stepText: "This is the EXACT SAME $\\hat{\\mathbf{y}}$ found in Example 3! The orthogonal projection depends on the line $L$, not on the specific vector chosen to span the line." }
        ]}
      ]
    },
    {
      id: "les-3-2-6-p3", title: "Practice Problem 3", description: "Preserving dot products", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 3", content: "**Problem:** Let $U$ and $\\mathbf{x}$ be as in Example 6: $U = \\begin{bmatrix} 1/\\sqrt{2} & 2/3 \\\\ 1/\\sqrt{2} & -2/3 \\\\ 0 & 1/3 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} \\sqrt{2} \\\\ 3 \\end{bmatrix}$.\n\nLet $\\mathbf{y} = \\begin{bmatrix} -3\\sqrt{2} \\\\ 6 \\end{bmatrix}$. Verify that $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = \\mathbf{x} \\cdot \\mathbf{y}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate both sides.**", interactiveSteps: [
           { stepText: "First calculate the right side: $\\mathbf{x} \\cdot \\mathbf{y} = (\\sqrt{2})(-3\\sqrt{2}) + (3)(6)$." },
           { prompt: "What is $\\mathbf{x} \\cdot \\mathbf{y}$?", options: [{id:"A", text:"12", isCorrect:true, explanation:"$-3(2) + 18 = -6 + 18 = 12$."}, {id:"B", text:"0", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x} \\cdot \\mathbf{y} = 12$." },
           { stepText: "Now calculate $U\\mathbf{y}$. $U\\mathbf{y} = \\begin{bmatrix} 1/\\sqrt{2} & 2/3 \\\\ 1/\\sqrt{2} & -2/3 \\\\ 0 & 1/3 \\end{bmatrix} \\begin{bmatrix} -3\\sqrt{2} \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} -3 + 4 \\\\ -3 - 4 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -7 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "From Ex 6, $U\\mathbf{x} = \\begin{bmatrix} 3 \\\\ -1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Compute $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = 3(1) + (-1)(-7) + 1(2) = 3 + 7 + 2 = 12$." },
           { stepText: "They match! Theorem 7(b) holds." }
        ]}
      ]
    }
  ]
};