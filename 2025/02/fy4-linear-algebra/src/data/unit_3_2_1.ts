import { Unit } from '../types';

export const UNIT_3_2_1: Unit = {
  id: "unit-3-2-1",
  title: "Orthogonal Sets",
  description: "Definition 1, Example 1, and Theorem 4.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-1-d1", title: "Definition 1: Orthogonal Sets", description: "Sets of mutually perpendicular vectors.", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Definition 1", content: "A set of vectors $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ in $\\mathbb{R}^n$ is said to be an **orthogonal set** if each pair of distinct vectors from the set is orthogonal.\n\nThat is, if $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ whenever $i \\neq j$." },
        { id: "s1", type: "quiz", title: "Concept Check 1", content: "If a set has 4 vectors, how many pairs of vectors must you check to confirm it is an orthogonal set?", options: [{id:"A", text:"4 pairs", isCorrect:false, explanation:"You have to check every combination of two distinct vectors."}, {id:"B", text:"6 pairs", isCorrect:true, explanation:"$\\binom{4}{2} = 6$. You must check (1,2), (1,3), (1,4), (2,3), (2,4), and (3,4)."}] },
        { id: "s2", type: "quiz", title: "Concept Check 2", content: "If the zero vector $\\mathbf{0}$ is in a set, can the set still be an orthogonal set?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"The zero vector is orthogonal to every vector, so the dot products will still be zero."}, {id:"B", text:"No", isCorrect:false, explanation:"Orthogonality only requires the dot products to be zero."}] }
      ]
    },
    {
      id: "les-3-2-1-e1", title: "Example 1", description: "Checking an orthogonal set", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Show that $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ is an orthogonal set, where:\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} -1/2 \\\\ -2 \\\\ 7/2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check all three pairs of distinct vectors.**", interactiveSteps: [
           { prompt: "Compute $\\mathbf{u}_1 \\cdot \\mathbf{u}_2$.", options: [{id:"A", text:"0", isCorrect:true, explanation:"$3(-1) + 1(2) + 1(1) = -3 + 2 + 1 = 0$."}, {id:"B", text:"2", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$." },
           { prompt: "Compute $\\mathbf{u}_1 \\cdot \\mathbf{u}_3$.", options: [{id:"A", text:"0", isCorrect:true, explanation:"$3(-1/2) + 1(-2) + 1(7/2) = -1.5 - 2 + 3.5 = 0$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 0$." },
           { prompt: "Compute $\\mathbf{u}_2 \\cdot \\mathbf{u}_3$.", options: [{id:"A", text:"0", isCorrect:true, explanation:"$-1(-1/2) + 2(-2) + 1(7/2) = 0.5 - 4 + 3.5 = 0$."}, {id:"B", text:"-1", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = 0$." },
           { stepText: "Since every pair evaluates to 0, the set is an orthogonal set." }
        ]}
      ]
    },
    {
      id: "les-3-2-1-t4", title: "Theorem 4", description: "Orthogonality implies linear independence", icon: "GitCommit",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4", content: "If $S = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is an orthogonal set of **nonzero** vectors in $\\mathbb{R}^n$, then $S$ is linearly independent and hence is a basis for the subspace spanned by $S$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that $c_1\\mathbf{u}_1 + \\dots + c_p\\mathbf{u}_p = \\mathbf{0}$ implies all $c_i = 0$.**", interactiveSteps: [
           { stepText: "Assume $\\mathbf{0} = c_1\\mathbf{u}_1 + c_2\\mathbf{u}_2 + \\dots + c_p\\mathbf{u}_p$." },
           { prompt: "Take the dot product of both sides with $\\mathbf{u}_1$. What is $\\mathbf{0} \\cdot \\mathbf{u}_1$?", options: [{id:"A", text:"0", isCorrect:true, explanation:"Zero vector dotted with anything is 0."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "Left side is $0$." },
           { stepText: "Right side becomes: $(c_1\\mathbf{u}_1 + c_2\\mathbf{u}_2 + \\dots + c_p\\mathbf{u}_p) \\cdot \\mathbf{u}_1$." },
           { prompt: "Distribute the dot product. What happens to the terms like $c_2(\\mathbf{u}_2 \\cdot \\mathbf{u}_1)$?", options: [{id:"A", text:"They become 0.", isCorrect:true, explanation:"Because the set is orthogonal, $u_i \\cdot u_j = 0$ for $i \\neq j$."}, {id:"B", text:"They remain as constants.", isCorrect:false, explanation:""}], stepText: "All cross-terms vanish! The right side simplifies to $c_1(\\mathbf{u}_1 \\cdot \\mathbf{u}_1)$." },
           { stepText: "We have $0 = c_1(\\mathbf{u}_1 \\cdot \\mathbf{u}_1)$. Since $\\mathbf{u}_1$ is nonzero, $\\mathbf{u}_1 \\cdot \\mathbf{u}_1 > 0$." },
           { stepText: "Therefore, $c_1$ must equal 0. By similar logic with each $\\mathbf{u}_i$, all $c_i = 0$. Thus, $S$ is linearly independent." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Key Condition", content: "Theorem 4 requires the vectors to be ___ for the set to be linearly independent.", blankAnswer: "nonzero" }
      ]
    }
  ]
};