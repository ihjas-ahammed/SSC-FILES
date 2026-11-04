import { Unit } from '../types';

export const UNIT_3_2_5: Unit = {
  id: "unit-3-2-5",
  title: "Orthonormal Bases & Matrices",
  description: "Example 5 and Theorems 6 & 7 on Matrices with Orthonormal Columns.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-5-e5", title: "Example 5", description: "Verifying an orthonormal basis", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "**Problem:** Show that $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is an orthonormal basis of $\\mathbb{R}^3$, where:\n\n$\\mathbf{v}_1 = \\begin{bmatrix} 3/\\sqrt{11} \\\\ 1/\\sqrt{11} \\\\ 1/\\sqrt{11} \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} -1/\\sqrt{6} \\\\ 2/\\sqrt{6} \\\\ 1/\\sqrt{6} \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} -1/\\sqrt{66} \\\\ -4/\\sqrt{66} \\\\ 7/\\sqrt{66} \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check orthogonality and unit length.**", interactiveSteps: [
           { stepText: "First, verify orthogonality. $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = \\frac{-3}{\\sqrt{66}} + \\frac{2}{\\sqrt{66}} + \\frac{1}{\\sqrt{66}} = 0$." },
           { stepText: "$\\mathbf{v}_1 \\cdot \\mathbf{v}_3 = \\frac{-3}{\\sqrt{726}} - \\frac{4}{\\sqrt{726}} + \\frac{7}{\\sqrt{726}} = 0$." },
           { stepText: "$\\mathbf{v}_2 \\cdot \\mathbf{v}_3 = \\frac{1}{\\sqrt{396}} - \\frac{8}{\\sqrt{396}} + \\frac{7}{\\sqrt{396}} = 0$. The set is orthogonal." },
           { prompt: "Now check the length of $\\mathbf{v}_1$. What is $\\mathbf{v}_1 \\cdot \\mathbf{v}_1$?", options: [{id:"A", text:"1", isCorrect:true, explanation:"$9/11 + 1/11 + 1/11 = 11/11 = 1$."}, {id:"B", text:"11", isCorrect:false, explanation:""}], stepText: "$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 1$." },
           { stepText: "$\\mathbf{v}_2 \\cdot \\mathbf{v}_2 = 1/6 + 4/6 + 1/6 = 1$.\n$\\mathbf{v}_3 \\cdot \\mathbf{v}_3 = 1/66 + 16/66 + 49/66 = 1$." },
           { stepText: "Since it is an orthogonal set of unit vectors, it is an orthonormal set. Being 3 independent vectors in $\\mathbb{R}^3$, it is an orthonormal basis." }
        ]}
      ]
    },
    {
      id: "les-3-2-5-t6", title: "Theorem 6: Orthogonal Matrix Properties", description: "U^T U = I", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 6", content: "An $m \\times n$ matrix $U$ has **orthonormal columns** if and only if\n$$ U^T U = I $$" },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "If $U = [\\mathbf{u}_1 \\ \\mathbf{u}_2 \\ \\mathbf{u}_3]$, what does the entry in row 1, column 2 of $U^T U$ represent?", options: [{id:"A", text:"$\\mathbf{u}_1 \\cdot \\mathbf{u}_2$", isCorrect:true, explanation:"The $ij$-entry of $U^T U$ is the dot product of column $i$ and column $j$ of $U$."}, {id:"B", text:"$\\mathbf{u}_2 \\cdot \\mathbf{u}_2$", isCorrect:false, explanation:""}] },
        { id: "s2", type: "proof", title: "Proof Sketch", content: "**Goal: Understand matrix multiplication in blocks.**", interactiveSteps: [
           { stepText: "Let $U = [\\mathbf{u}_1 \\ \\dots \\ \\mathbf{u}_n]$." },
           { stepText: "Then $U^T$ has rows $\\mathbf{u}_1^T, \\dots, \\mathbf{u}_n^T$." },
           { stepText: "The $(i, j)$-entry of $U^T U$ is the product of the $i$-th row of $U^T$ and the $j$-th col of $U$, which is $\\mathbf{u}_i^T \\mathbf{u}_j = \\mathbf{u}_i \\cdot \\mathbf{u}_j$." },
           { prompt: "If the columns are orthonormal, what is $\\mathbf{u}_i \\cdot \\mathbf{u}_j$ when $i=j$?", options: [{id:"A", text:"1", isCorrect:true, explanation:"Because they are unit vectors."}, {id:"B", text:"0", isCorrect:false, explanation:""}], stepText: "The diagonal entries are 1." },
           { stepText: "When $i \\neq j$, $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ (orthogonal). Thus, $U^T U$ has 1s on the diagonal and 0s elsewhere. $U^T U = I$." }
        ]}
      ]
    },
    {
      id: "les-3-2-5-t7", title: "Theorem 7: Isometric Mappings", description: "Preserving length and angle", icon: "Shield",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 7", content: "Let $U$ be an $m \\times n$ matrix with orthonormal columns, and let $\\mathbf{x}$ and $\\mathbf{y}$ be in $\\mathbb{R}^n$. Then:\n\na. $\\|U\\mathbf{x}\\| = \\|\\mathbf{x}\\|$\nb. $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = \\mathbf{x} \\cdot \\mathbf{y}$\nc. $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = 0$ if and only if $\\mathbf{x} \\cdot \\mathbf{y} = 0$" },
        { id: "s1", type: "quiz", title: "What does this mean?", content: "What does property (a) tell us geometrically about the mapping $\\mathbf{x} \\mapsto U\\mathbf{x}$?", options: [{id:"A", text:"It preserves lengths (isometric).", isCorrect:true, explanation:"The vector's length doesn't change when transformed by U."}, {id:"B", text:"It stretches the vector.", isCorrect:false, explanation:""}] },
        { id: "s2", type: "proof", title: "Proof of (b)", content: "**Goal: Show $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = \\mathbf{x} \\cdot \\mathbf{y}$.**", interactiveSteps: [
           { stepText: "By definition of dot product, $(U\\mathbf{x}) \\cdot (U\\mathbf{y}) = (U\\mathbf{x})^T (U\\mathbf{y})$." },
           { prompt: "What is $(U\\mathbf{x})^T$?", options: [{id:"A", text:"$\\mathbf{x}^T U^T$", isCorrect:true, explanation:"Transpose of a product reverses order: $(AB)^T = B^T A^T$."}, {id:"B", text:"$U^T \\mathbf{x}^T$", isCorrect:false, explanation:""}], stepText: "So we have $\\mathbf{x}^T U^T U \\mathbf{y}$." },
           { stepText: "Since $U$ has orthonormal columns, $U^T U = I$ (Theorem 6)." },
           { stepText: "The expression simplifies to $\\mathbf{x}^T I \\mathbf{y} = \\mathbf{x}^T \\mathbf{y} = \\mathbf{x} \\cdot \\mathbf{y}$. Goal reached!" }
        ]}
      ]
    }
  ]
};