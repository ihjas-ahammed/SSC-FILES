import { Unit } from '../types';

export const UNIT_1_3_5: Unit = {
  id: "unit-1-3-5",
  title: "Practice Problems",
  description: "P1, P2, P3: Testing understanding of Bases.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-5-p1", title: "Problem 1: Checking Basis", description: "Independence and Span", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 3 \\end{bmatrix}$ and $\\mathbf{v}_2 = \\begin{bmatrix} -2 \\\\ 7 \\\\ -9 \\end{bmatrix}$. Determine if $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is a basis for $\\mathbb{R}^3$. Is it a basis for $\\mathbb{R}^2$?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check basis conditions.**", interactiveSteps: [
           { prompt: "Are $\\mathbf{v}_1$ and $\\mathbf{v}_2$ linearly independent?", options: [{id:"A", text:"Yes, not multiples.", isCorrect:true, explanation:"$\\mathbf{v}_2$ is not a scalar multiple of $\\mathbf{v}_1$."}, {id:"B", text:"No.", isCorrect:false, explanation:""}], stepText: "They are linearly independent." },
           { prompt: "Do they span $\\mathbb{R}^3$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"You need at least 3 vectors to span 3D space."}, {id:"B", text:"No", isCorrect:true, explanation:"Two vectors span a plane, not 3D space."}], stepText: "Since they don't span $\\mathbb{R}^3$, they are **not** a basis for $\\mathbb{R}^3$." },
           { prompt: "Are they a basis for $\\mathbb{R}^2$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"The vectors have 3 entries!"}, {id:"B", text:"No", isCorrect:true, explanation:"They are not even in $\\mathbb{R}^2$."}], stepText: "They are vectors in $\\mathbb{R}^3$, so they cannot be a basis for $\\mathbb{R}^2$." }
        ]}
      ]
    },
    {
      id: "les-1-3-5-p2", title: "Problem 2: Basis for Subspace", description: "Constructing a basis", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 2", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ -3 \\\\ 4 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 6 \\\\ 2 \\\\ -1 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 2 \\\\ -2 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_4 = \\begin{bmatrix} -4 \\\\ -8 \\\\ 9 \\end{bmatrix}$.\n\nFind a basis for the subspace $W$ spanned by $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{v}_4\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find pivot columns.**", interactiveSteps: [
           { stepText: "Place vectors into matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ \\mathbf{v}_4]$." },
           { stepText: "Row reduce $A$ to identify pivot columns." },
           { stepText: "Suppose the row reduction shows pivots in columns 1 and 2. (This is hypothetical for the interactive flow)." },
           { prompt: "Which vectors form the basis?", options: [{id:"A", text:"$\\mathbf{v}_1, \\mathbf{v}_2$", isCorrect:true, explanation:"The pivot columns of the original matrix form the basis."}, {id:"B", text:"The columns of the reduced matrix.", isCorrect:false, explanation:"Warning: Always go back to the original A."}], stepText: "The basis is $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$." }
        ]}
      ]
    },
    {
      id: "les-1-3-5-p3", title: "Problem 3: Standard Basis", description: "Vector representation", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 3", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$.\n\nIs $H$ a subspace of $\\mathbb{R}^3$? Is $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ a basis for $H$?" },
        { id: "s1", type: "solution", title: "Solution", content: "**Analysis:**\n\n1. By Theorem 1, any Span is a subspace. So $H$ is a subspace of $\\mathbb{R}^3$ (it is the $xy$-plane).\n2. $\\mathbf{v}_1, \\mathbf{v}_2$ are clearly linearly independent.\n3. By definition, they span $H$.\n\nThus, yes, they form a basis for $H$." }
      ]
    }
  ]
};