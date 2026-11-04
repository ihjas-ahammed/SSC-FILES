import { Unit } from '../types';

export const UNIT_1_1_3: Unit = {
  id: "unit-1-1-3",
  title: "Practice Problems",
  description: "Applied problems testing Vector Space properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-3-pp1", title: "Practice Problem 1", description: "Testing closure properties", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Show that the set $H$ of all points in $\\mathbb{R}^2$ of the form $(3s, 2 + 5s)$ is **not** a vector space, by showing that it is not closed under scalar multiplication.\n\n(Find a specific vector $\\mathbf{u}$ in $H$ and a scalar $c$ such that $c\\mathbf{u}$ is not in $H$.)", interactiveCanvasId: "practice-prob-1-interactive" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a counterexample.**", interactiveSteps: [
           { stepText: "Let's pick a specific $s$ to find a vector $\\mathbf{u}$ in $H$. Let $s=0$." },
           { prompt: "If $s=0$, what is the vector $\\mathbf{u} = \\begin{bmatrix} 3s \\\\ 2+5s \\end{bmatrix}$?", options: [{id:"A", text:"$\\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix}$", isCorrect:true, explanation:"$3(0)=0$ and $2+5(0)=2$."}, {id:"B", text:"$\\begin{bmatrix} 3 \\\\ 7 \\end{bmatrix}$", isCorrect:false, explanation:"Check your arithmetic."}], stepText: "So $\\mathbf{u} = \\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix}$ is in $H$." },
           { stepText: "Now let's pick a scalar $c$ to multiply $\\mathbf{u}$ by. Let's try $c=0$. (Any $c$ that shifts it off the line works, but 0 is easy)." },
           { prompt: "Calculate $c\\mathbf{u}$.", options: [{id:"A", text:"$\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$", isCorrect:true, explanation:"$0$ times any vector is the zero vector."}, {id:"B", text:"$\\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "The result is $\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Is $\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$ in $H$? If it were, there would be an $s$ such that $3s=0$ and $2+5s=0$. The first implies $s=0$, but the second implies $2+0=0$, which is false." },
           { stepText: "Since $c\\mathbf{u}$ is not in $H$, $H$ is not closed under scalar multiplication and is not a vector space." }
        ]},
        { id: "s2", type: "quiz", title: "Alternative Method", content: "What is another immediate way to see that $H$ is not a subspace?", options: [{id:"A", text:"It doesn't contain the zero vector.", isCorrect:true, explanation:"As shown, the origin (0,0) is not on the line."}, {id:"B", text:"It contains too many vectors.", isCorrect:false, explanation:"Size doesn't matter, structure does."}] }
      ]
    },
    {
      id: "les-1-1-3-pp2", title: "Practice Problem 2", description: "Membership in Span", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 2", content: "**Problem:** Let $W = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$, where $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ are in a vector space $V$.\n\nShow that $\\mathbf{v}_k$ is in $W$ for any $1 \\le k \le p$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Write $\\mathbf{v}_k$ as a linear combination of the set.**", interactiveSteps: [
           { stepText: "By definition, $W$ consists of all vectors of the form $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p$." },
           { prompt: "To get exactly $\\mathbf{v}_k$, what weights (scalars) should we choose?", options: [{id:"A", text:"All $c_i = 1$", isCorrect:false, explanation:"That would give the sum of all vectors."}, {id:"B", text:"$c_k = 1$ and all others $0$", isCorrect:true, explanation:"This isolates just the vector we want."}], stepText: "We choose weights such that $c_k = 1$ and $c_j = 0$ for all $j \\neq k$." },
           { stepText: "Then the linear combination becomes:\n$$ 0\\mathbf{v}_1 + \\dots + 1\\mathbf{v}_k + \\dots + 0\\mathbf{v}_p = \\mathbf{v}_k $$" },
           { stepText: "Since $\\mathbf{v}_k$ can be written as a linear combination of the generating set, $\\mathbf{v}_k$ is in $W$. Goal reached." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Key Takeaway", content: "Any set of vectors is always a ___ of the subspace they span.", blankAnswer: "subset" }
      ]
    }
  ]
};