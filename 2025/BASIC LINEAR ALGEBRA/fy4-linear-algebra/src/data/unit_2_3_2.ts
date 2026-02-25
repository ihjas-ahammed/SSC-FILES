import { Unit } from '../types';

export const UNIT_2_3_2: Unit = {
  id: "unit-2-3-2",
  title: "The Rank Theorem",
  description: "Rank, Nullity, and the fundamental theorem relating dimensions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-2-def-thm", title: "Rank Definition", description: "Definition 1 and Theorem 14", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Definition: Rank", content: "The **rank** of a matrix $A$, denoted by $\\text{rank } A$, is the dimension of the column space of $A$.\n\nSince row operations don't change linear independence of rows, $\\dim \\text{Row } A = \\dim \\text{Col } A$ (even though the spaces are different!)." },
        { id: "s1", type: "theory", title: "Theorem 14: The Rank Theorem", content: "**The Rank Theorem:**\nThe dimensions of the column space and the row space of an $m \\times n$ matrix $A$ are equal. This common dimension, the rank of $A$, also equals the number of pivot positions in $A$.\n\nFurthermore:\n$$ \\text{rank } A + \\dim \\text{Nul } A = n $$" },
        { id: "s2", type: "interactive_canvas", title: "Visualizing the Rank Theorem", content: "The number of columns $n$ is split into pivot columns (Rank) and non-pivot columns (Nullity).", interactiveCanvasId: "rank-theorem-interactive" },
        { id: "s3", type: "quiz", title: "Check", content: "If a $5 \\times 7$ matrix has 3 pivots, what is the dimension of its null space?", options: [{id:"A", text:"2", isCorrect:false, explanation:"$n - r = 7 - 3 = 4$."}, {id:"B", text:"4", isCorrect:true, explanation:"Total columns (7) minus Rank (3) equals 4."}] }
      ]
    },
    {
      id: "les-2-3-2-ex3", title: "Example 3: Dimensions", description: "Rank and Nullity Calculation", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3a", content: "**Problem:** If $A$ is a $7 \\times 9$ matrix with a two-dimensional null space, what is the rank of $A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "Using the Rank Theorem: $n = 9$, $\\dim \\text{Nul } A = 2$.\n\n$\\text{rank } A = n - \\dim \\text{Nul } A = 9 - 2 = 7$." },
        { id: "s2", type: "example_q", title: "Example 3b", content: "**Problem:** Could a $6 \\times 9$ matrix have a two-dimensional null space?" },
        { id: "s3", type: "solution", title: "Solution", content: "If $\\dim \\text{Nul } A = 2$, then $\\text{rank } A = 9 - 2 = 7$.\n\nHowever, the rank cannot exceed the number of rows ($m=6$). Since $7 > 6$, this is **impossible**." }
      ]
    },
    {
      id: "les-2-3-2-ex4", title: "Example 4: Subspace Visualization", description: "Geometric meanings in R3", icon: "Eye",
      slides: [
        { id: "s0", type: "theory", title: "Example 4", content: "Let $A = \\begin{bmatrix} 3 & 0 & -1 \\\\ 3 & 0 & -1 \\\\ 4 & 0 & 5 \\end{bmatrix}$.\n\nNul $A$ is the $x_2$-axis (1-dim).\nRow $A$ is the $x_1x_3$-plane (2-dim).\n\nSince $n=3$, $\\dim \\text{Nul } A + \\dim \\text{Row } A = 1 + 2 = 3$. This matches the Rank Theorem." },
        { id: "s1", type: "fill_in_blank", title: "Orthogonality Preview", content: "Notice that Nul A (y-axis) is perpendicular to Row A (xz-plane). This foreshadows the concept of ___ complements.", blankAnswer: "orthogonal" }
      ]
    }
  ]
};