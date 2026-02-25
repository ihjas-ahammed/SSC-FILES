import { Unit } from '../types';

export const UNIT_1_3_3: Unit = {
  id: "unit-1-3-3",
  title: "Bases for Nul A and Col A",
  description: "Theorem 6, Examples 8 & 9: Algorithms for finding bases.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-3-ex8", title: "Example 8: Basis for Col B", description: "Matrix in echelon form", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Example 8", content: "**Problem:** Find a basis for $\\text{Col } B$, where\n$$ B = \\begin{bmatrix} 1 & 4 & 0 & 2 & 0 \\\\ 0 & 0 & 1 & -1 & 0 \\\\ 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify pivot columns.**", interactiveSteps: [
           { stepText: "Recall that $\\text{Col } B$ is the span of its columns." },
           { stepText: "Note that columns 1, 3, and 5 contain pivots." },
           { prompt: "Can column 2 be written as a combo of column 1? (Look at $B$)", options: [{id:"A", text:"Yes, $\\mathbf{b}_2 = 4\\mathbf{b}_1$.", isCorrect:true, explanation:"$4 \\times [1,0,0,0]^T = [4,0,0,0]^T$."}, {id:"B", text:"No, they are independent.", isCorrect:false, explanation:""}], stepText: "Any non-pivot column is a linear combination of the pivot columns." },
           { stepText: "Therefore, the set of pivot columns $\\{\\mathbf{b}_1, \\mathbf{b}_3, \\mathbf{b}_5\\}$ is linearly independent and spans $\\text{Col } B$." },
           { stepText: "Basis: $\\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Pivot Rule", content: "The pivot columns of a matrix $B$ are linearly ___.", blankAnswer: "independent" }
      ]
    },
    {
      id: "les-1-3-3-ex9", title: "Example 9: Basis for Col A", description: "Using the original matrix", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Example 9", content: "**Problem:** Find a basis for $\\text{Col } A$, where\n$$ A = \\begin{bmatrix} 1 & 4 & 0 & 2 & -1 \\\\ 3 & 12 & 1 & 5 & 5 \\\\ 2 & 8 & 1 & 3 & 2 \\\\ 5 & 20 & 2 & 8 & 8 \\end{bmatrix} $$\nNote: $A$ is row equivalent to $B$ in Example 8." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Map pivots back to A.**", interactiveSteps: [
           { stepText: "Row operations do NOT preserve the column space itself (Col A $\\neq$ Col B usually), but they preserve linear dependence relations among columns." },
           { prompt: "If columns 1, 3, 5 of $B$ are independent, what about columns 1, 3, 5 of $A$?", options: [{id:"A", text:"They are also independent.", isCorrect:true, explanation:"Row operations are reversible linear transformations on the columns' coordinates."}, {id:"B", text:"We don't know.", isCorrect:false, explanation:""}], stepText: "The pivot columns of $B$ are 1, 3, and 5." },
           { stepText: "Therefore, the pivot columns of $A$ (columns 1, 3, 5) form a basis for $\\text{Col } A$." },
           { stepText: "Basis: $\\left\\{ \\begin{bmatrix} 1 \\\\ 3 \\\\ 2 \\\\ 5 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 5 \\\\ 2 \\\\ 8 \\end{bmatrix} \\right\\}$." }
        ]},
        { id: "s2", type: "quiz", title: "Critical Warning", content: "Can we use the columns of the echelon form $B$ as the basis for $\\text{Col } A$?", options: [{id:"A", text:"Yes, they are the same.", isCorrect:false, explanation:"Row operations change the row entries, so the vectors are different."}, {id:"B", text:"No, we must use the columns of $A$.", isCorrect:true, explanation:"The basis must be chosen from the original matrix A."}] }
      ]
    },
    {
      id: "les-1-3-3-thm6", title: "Theorem 6: Pivot Columns", description: "The definitive rule", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 6", content: "**Theorem 6:** The pivot columns of a matrix $A$ form a basis for $\\text{Col } A$." },
        { id: "s1", type: "proof", title: "Proof Sketch", content: "**Logic:**\n1. Let $B$ be the reduced echelon form of $A$.\n2. The pivot columns of $B$ are linearly independent (they are standard basis vectors $\\mathbf{e}_i$).\n3. The non-pivot columns of $B$ are linear combinations of the pivot columns.\n4. Row operations are reversible, so the linear dependence relationships in $A$ are identical to those in $B$.\n5. Thus, the pivot columns of $A$ are linearly independent and span $\\text{Col } A$." },
        { id: "s2", type: "fill_in_blank", title: "Summary", content: "To find a basis for the column space, row reduce A to identify the ___ positions, then select those columns from A.", blankAnswer: "pivot" }
      ]
    }
  ]
};