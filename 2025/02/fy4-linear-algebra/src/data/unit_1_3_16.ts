import { Unit } from '../types';

export const UNIT_1_3_16: Unit = {
  id: "unit-1-3-16",
  title: "Polynomial Independence",
  description: "Exercises 33-34: Checking independence in P_n.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-16-ex33", title: "Exercise 33", description: "Two polynomials", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "quiz", title: "Warm-up", content: "If you have exactly two vectors, how do you quickly check for linear independence?", options: [{id:"A", text:"Check if one is a scalar multiple of the other", isCorrect:true, explanation:"For two vectors, dependence means $\\mathbf{v}_1 = c\\mathbf{v}_2$."}, {id:"B", text:"Row reduce a matrix", isCorrect:false, explanation:"While it works, checking for multiples is much faster."}] },
        { id: "s1", type: "example_q", title: "Exercise 33", content: "**Problem:** Consider the polynomials $\\mathbf{p}_1(t) = 1 + t^2$ and $\\mathbf{p}_2(t) = 1 - t^2$. \n\nIs $\\{\\mathbf{p}_1, \\mathbf{p}_2\\}$ a linearly independent set in $\\mathbb{P}_3$?" },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Test if they are multiples.**", interactiveSteps: [
           { stepText: "We need to check if there is a scalar $c$ such that $\\mathbf{p}_1(t) = c\\mathbf{p}_2(t)$ for all $t$." },
           { prompt: "If $1 + t^2 = c(1 - t^2)$, looking at the constant terms, what must $c$ be?", options: [{id:"A", text:"c = 1", isCorrect:true, explanation:"The constant term on both sides must match: $1 = c(1)$."}, {id:"B", text:"c = -1", isCorrect:false, explanation:""}], stepText: "So $c$ must equal 1." },
           { prompt: "Now check the $t^2$ terms with $c=1$. Does $t^2 = 1(-t^2)$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:""}, {id:"B", text:"No", isCorrect:true, explanation:"$1 \\neq -1$."}], stepText: "This is a contradiction. They are not scalar multiples." },
           { stepText: "Since neither is a multiple of the other, the set is **linearly independent**." }
        ]}
      ]
    },
    {
      id: "les-1-3-16-ex34", title: "Exercise 34", description: "Dependence by inspection", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** Consider the polynomials $\\mathbf{p}_1(t) = 1 + t$, $\\mathbf{p}_2(t) = 1 - t$, and $\\mathbf{p}_3(t) = 2$ (for all $t$).\n\nBy inspection, write a linear dependence relation among them. Then find a basis for $\\text{Span}\\{\\mathbf{p}_1, \\mathbf{p}_2, \\mathbf{p}_3\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a relationship visually.**", interactiveSteps: [
           { prompt: "Look at $\\mathbf{p}_1$ and $\\mathbf{p}_2$. What happens if you add them together?", options: [{id:"A", text:"$(1+t) + (1-t) = 2$", isCorrect:true, explanation:"The $t$ and $-t$ cancel out."}, {id:"B", text:"$(1+t) + (1-t) = 2t$", isCorrect:false, explanation:""}], stepText: "We see that $\\mathbf{p}_1(t) + \\mathbf{p}_2(t) = 2$." },
           { stepText: "But $\\mathbf{p}_3(t) = 2$. Therefore, $\\mathbf{p}_1 + \\mathbf{p}_2 = \\mathbf{p}_3$." },
           { stepText: "The linear dependence relation is $\\mathbf{p}_1 + \\mathbf{p}_2 - \\mathbf{p}_3 = \\mathbf{0}$." },
           { stepText: "To find a basis, the Spanning Set Theorem says we can discard the redundant vector $\\mathbf{p}_3$." },
           { stepText: "The remaining set $\\{\\mathbf{p}_1, \\mathbf{p}_2\\}$ spans the same space. Since $1+t$ and $1-t$ are not multiples of each other, they are linearly independent." },
           { stepText: "Thus, $\\{\\mathbf{p}_1, \\mathbf{p}_2\\}$ is a basis." }
        ]},
        { id: "s2", type: "numerical", title: "Dimension", content: "What is the dimension of the subspace spanned by these three polynomials?", numericAnswer: 2, numericTolerance: 0 }
      ]
    }
  ]
};