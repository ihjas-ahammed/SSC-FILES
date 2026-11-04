import { Unit } from '../types';

export const UNIT_1_3_2: Unit = {
  id: "unit-1-3-2",
  title: "The Spanning Set Theorem",
  description: "Theorem 5 and Example 7: Reducing a spanning set to a basis.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-2-ex7", title: "Example 7: Redundant Vectors", description: "Removing dependent vectors", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Example 7", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 0 \\\\ 2 \\\\ -1 \\end{bmatrix}$, $\\mathbf{v}_2 = \\begin{bmatrix} 2 \\\\ 2 \\\\ 0 \\end{bmatrix}$, $\\mathbf{v}_3 = \\begin{bmatrix} 6 \\\\ 16 \\\\ -5 \\end{bmatrix}$.\n\nSuppose $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$. Note that $\\mathbf{v}_3 = 5\\mathbf{v}_1 + 3\\mathbf{v}_2$. Show that $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\} = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Show any vector in the larger span is in the smaller span.**", interactiveSteps: [
           { stepText: "Take an arbitrary vector $\\mathbf{x}$ in $H$. Then $\\mathbf{x} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3$." },
           { prompt: "Substitute $\\mathbf{v}_3 = 5\\mathbf{v}_1 + 3\\mathbf{v}_2$ into the equation.", options: [{id:"A", text:"$\\mathbf{x} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3(5\\mathbf{v}_1 + 3\\mathbf{v}_2)$", isCorrect:true, explanation:"Replace $\\mathbf{v}_3$ with its linear combination."}, {id:"B", text:"$\\mathbf{x} = 5c_1\\mathbf{v}_1 + 3c_2\\mathbf{v}_2$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x} = (c_1 + 5c_3)\\mathbf{v}_1 + (c_2 + 3c_3)\\mathbf{v}_2$." },
           { stepText: "This shows $\\mathbf{x}$ is a linear combination of just $\\mathbf{v}_1$ and $\\mathbf{v}_2$. Thus $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$." },
           { stepText: "Since $\\mathbf{v}_1$ and $\\mathbf{v}_2$ are not multiples of each other, they are linearly independent and form a **basis** for $H$." }
        ]},
        { id: "s2", type: "quiz", title: "Geometric Interpretation", content: "If $H$ is a plane in $\\mathbb{R}^3$, what does $\\mathbf{v}_3$ represent geometrically in relation to $\\mathbf{v}_1$ and $\\mathbf{v}_2$?", options: [{id:"A", text:"It lies in the same plane spanned by $\\mathbf{v}_1$ and $\\mathbf{v}_2$.", isCorrect:true, explanation:"Since it is a linear combination, it is coplanar."}, {id:"B", text:"It sticks out of the plane.", isCorrect:false, explanation:"That would make it linearly independent."}] }
      ]
    },
    {
      id: "les-1-3-2-thm5", title: "Theorem 5: The Spanning Set Theorem", description: "Reducing spanning sets", icon: "Filter",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 5", content: "Let $S = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ be a set in $V$, and let $H = \\text{Span}\\{S\\}$.\n\na. If one of the vectors in $S$—say, $\\mathbf{v}_k$—is a linear combination of the remaining vectors in $S$, then the set formed from $S$ by removing $\\mathbf{v}_k$ still spans $H$.\n\nb. If $H \\neq \\{\\mathbf{0}\\}$, some subset of $S$ is a **basis** for $H$." },
        { id: "s1", type: "quiz", title: "Concept Check 1", content: "If we keep removing dependent vectors, what do we eventually get?", options: [{id:"A", text:"The zero subspace.", isCorrect:false, explanation:""}, {id:"B", text:"A linearly independent set that still spans H.", isCorrect:true, explanation:"This minimal spanning set is a basis."}] },
        { id: "s2", type: "quiz", title: "Concept Check 2", content: "Does this theorem allow us to expand a set?", options: [{id:"A", text:"No, it's about reducing a set.", isCorrect:true, explanation:"It helps us discard unnecessary vectors."}, {id:"B", text:"Yes, by adding random vectors.", isCorrect:false, explanation:"That's a different concept."}] },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Reduction", content: "Imagine 3 vectors on a plane. Removing the one in the middle leaves 2 vectors that still define the same plane.", interactiveCanvasId: "column-space-span-interactive" },
        { id: "s4", type: "proof", title: "Proof: Spanning Set Theorem", content: "**Proof of Part (a):**", interactiveSteps: [
           { stepText: "Suppose $\\mathbf{v}_p = a_1\\mathbf{v}_1 + \\dots + a_{p-1}\\mathbf{v}_{p-1}$." },
           { stepText: "Let $\\mathbf{x}$ be any vector in $H$. Then $\\mathbf{x} = c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p$." },
           { prompt: "Substitute the expression for $\\mathbf{v}_p$ into $\\mathbf{x}$. What happens?", options: [{id:"A", text:"$\\mathbf{x}$ is now expressed using only $\\mathbf{v}_1, \\dots, \\mathbf{v}_{p-1}$.", isCorrect:true, explanation:"The $\\mathbf{v}_p$ term is absorbed into the other coefficients."}, {id:"B", text:"$\\mathbf{x}$ becomes zero.", isCorrect:false, explanation:""}], stepText: "Thus, $\\mathbf{x}$ is in $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{p-1}\\}$. The reduced set still spans $H$." }
        ]},
        { id: "s5", type: "fill_in_blank", title: "Basis Construction", content: "To find a basis from a spanning set, remove vectors that are linear ___ of the others.", blankAnswer: "combinations" }
      ]
    }
  ]
};