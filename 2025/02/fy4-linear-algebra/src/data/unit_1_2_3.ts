import { Unit } from '../types';

export const UNIT_1_2_3: Unit = {
  id: "unit-1-2-3",
  title: "The Column Space",
  description: "Definition, Theorem 3, and Example 4.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-3-def", title: "Definition 2: Column Space", description: "Span of the columns", icon: "Columns",
      slides: [
        { id: "s0", type: "theory", title: "Definition 2", content: "The **column space** of an $m \\times n$ matrix $A$, written as $\\text{Col } A$, is the set of all linear combinations of the columns of $A$.\n\nIf $A = [\\mathbf{a}_1 \\ \\dots \\ \\mathbf{a}_n]$, then:\n$$ \\text{Col } A = \\text{Span}\\{ \\mathbf{a}_1, \\dots, \\mathbf{a}_n \\} $$" },
        { id: "s1", type: "theory", title: "Alternative View", content: "Equivalently, $\\text{Col } A$ is the set of all vectors $\\mathbf{b}$ such that $A\\mathbf{x} = \\mathbf{b}$ is consistent (has a solution)." },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Col A", content: "The column space is the subspace spanned by the column vectors. For a $3 \\times 2$ matrix, this is usually a plane in $\\mathbb{R}^3$.", interactiveCanvasId: "column-space-span-interactive" }
      ]
    },
    {
      id: "les-1-2-3-thm3", title: "Theorem 3", description: "Col A is a Subspace", icon: "Shield",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 3", content: "The column space of an $m \\times n$ matrix $A$ is a subspace of $\\mathbb{R}^m$." },
        { id: "s1", type: "proof", title: "Proof Logic", content: "Since $\\text{Col } A$ is defined as the **Span** of a set of vectors (the columns), it satisfies the Spanning Set Theorem (Theorem 1 from Section 4.1). \n\nTherefore, it is automatically a subspace.", interactiveSteps: [] },
        { id: "s2", type: "quiz", title: "Dimension Check", content: "If $A$ is a $4 \\times 5$ matrix, $\\text{Col } A$ is a subspace of which space?", options: [{id:"A", text:"$\\mathbb{R}^4$", isCorrect:true, explanation:"The columns have 4 entries (rows)."}, {id:"B", text:"$\\mathbb{R}^5$", isCorrect:false, explanation:"There are 5 columns, but they live in R4."}] }
      ]
    },
    {
      id: "les-1-2-3-ex4", title: "Example 4: Finding A", description: "Constructing Matrix from Span", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Find a matrix $A$ such that $W = \\text{Col } A$, where:\n$$ W = \\left\\{ \\begin{bmatrix} 6a - b \\\\ a + b \\\\ -7a \\end{bmatrix} : a, b \\in \\mathbb{R} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Decompose into column vectors.**", interactiveSteps: [
           { stepText: "Write the general vector as a linear combination of $a$ and $b$." },
           { prompt: "Identify the vector for $a$.", options: [{id:"A", text:"$\\begin{bmatrix} 6 \\\\ 1 \\\\ -7 \\end{bmatrix}$", isCorrect:true, explanation:"Correct coefficients."}, {id:"B", text:"$\\begin{bmatrix} 6 \\\\ 1 \\\\ 0 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "Vector for $a$: $\\mathbf{v}_1 = \\begin{bmatrix} 6 \\\\ 1 \\\\ -7 \\end{bmatrix}$." },
           { prompt: "Identify the vector for $b$.", options: [{id:"A", text:"$\\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$", isCorrect:true, explanation:"Correct coefficients."}, {id:"B", text:"$\\begin{bmatrix} -1 \\\\ 1 \\\\ -7 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "Vector for $b$: $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Thus $W = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. We can set $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2] = \\begin{bmatrix} 6 & -1 \\\\ 1 & 1 \\\\ -7 & 0 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};