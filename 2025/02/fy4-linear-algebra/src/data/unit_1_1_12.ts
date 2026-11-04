import { Unit } from '../types';

export const UNIT_1_1_12: Unit = {
  id: "unit-1-1-12",
  title: "Advanced Subspace Concepts",
  description: "Exercises 30-38: Intersections, Sums, and Trig Spaces.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-12-ex30-31", title: "Basic Subspace Logic", description: "Zero product & Span containment", icon: "GitBranch",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Suppose $c\\mathbf{u} = \\mathbf{0}$ for some nonzero scalar $c$. Show that $\\mathbf{u} = \\mathbf{0}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Isolate $\\mathbf{u}$.**", interactiveSteps: [
           { stepText: "We are given $c \\neq 0$. Thus, $1/c$ exists." },
           { prompt: "Multiply both sides of $c\\mathbf{u} = \\mathbf{0}$ by $1/c$.", options: [{id:"A", text:"$\\frac{1}{c}(c\\mathbf{u}) = \\frac{1}{c}\\mathbf{0}$", isCorrect:true, explanation:""}, {id:"B", text:"$c\\mathbf{u} / c = 0$", isCorrect:false, explanation:"Notation matters in proofs."}], stepText: "$(1)\\mathbf{u} = \\mathbf{0}$ (by Ex 28, scalar times zero vector is zero vector)." },
           { stepText: "Thus $\\mathbf{u} = \\mathbf{0}$." }
        ]},
        { id: "s2", type: "example_q", title: "Exercise 31", content: "**Problem:** Let $W$ be a subspace of $V$, and let $\\mathbf{u}, \\mathbf{v}$ be in $W$. Show that $W$ contains $\\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$." },
        { id: "s3", type: "solution", title: "Logic Check", content: "Since $W$ is a subspace, it is closed under addition and scalar multiplication.\n\nAny vector in $\\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$ is of the form $c_1\\mathbf{u} + c_2\\mathbf{v}$.\n\n1. $c_1\\mathbf{u}$ is in $W$ (closure under scalar mult).\n2. $c_2\\mathbf{v}$ is in $W$ (closure under scalar mult).\n3. Their sum is in $W$ (closure under addition).\n\nThus, the entire Span is a subset of $W$." }
      ]
    },
    {
      id: "les-1-1-12-ex32", title: "Exercise 32: Intersection of Subspaces", description: "H ∩ K", icon: "Combine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "Let $H$ and $K$ be subspaces of a vector space $V$. The intersection $H \\cap K$ is the set of all vectors that are in *both* $H$ and $K$.\n\nShow that $H \\cap K$ is a subspace of $V$.", interactiveCanvasId: "subspace-intersection-interactive" },
        { id: "s1", type: "solution", title: "Interactive Proof", content: "**Goal: Check the 3 properties for the intersection.**", interactiveSteps: [
           { prompt: "Zero Vector: Is $\\mathbf{0}$ in $H \\cap K$?", options: [{id:"A", text:"Yes, $\\mathbf{0} \\in H$ and $\\mathbf{0} \\in K$ because they are subspaces.", isCorrect:true, explanation:"Since it's in both, it's in the intersection."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "$\\mathbf{0} \\in H \\cap K$." },
           { stepText: "Addition: Let $\\mathbf{u}, \\mathbf{v} \\in H \\cap K$. This means $\\mathbf{u}, \\mathbf{v} \\in H$ AND $\\mathbf{u}, \\mathbf{v} \\in K$." },
           { prompt: "Is $\\mathbf{u} + \\mathbf{v}$ in $H$? In $K$?", options: [{id:"A", text:"Yes to both.", isCorrect:true, explanation:"Since H and K are individually closed under addition."}, {id:"B", text:"Only H.", isCorrect:false, explanation:""}], stepText: "Since $\\mathbf{u}+\\mathbf{v}$ is in both, it is in $H \\cap K$." },
           { stepText: "Scalar mult follows the same logic. Thus, the intersection is a subspace." }
        ]},
        { id: "s2", type: "quiz", title: "Union?", content: "Is the UNION $H \\cup K$ (vectors in H *or* K) always a subspace?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Think of the line x-axis and line y-axis. Their union is a cross shape."}, {id:"B", text:"No", isCorrect:true, explanation:"The sum of a vector in H and a vector in K might not be in either!"}] }
      ]
    },
    {
      id: "les-1-1-12-ex33-34", title: "Exercise 33 & 34: Sum of Subspaces", description: "H + K", icon: "PlusSquare",
      slides: [
        { id: "s0", type: "theory", title: "Sum of Subspaces", content: "The sum of two subspaces $H + K$ is defined as the set of all vectors $\\mathbf{u} + \\mathbf{v}$ where $\\mathbf{u} \\in H$ and $\\mathbf{v} \\in K$.\n\n**Exercise 33** proves that $H+K$ is a subspace of $V$." },
        { id: "s1", type: "example_q", title: "Exercise 34", content: "**Problem:** Let $H = \\text{Span}\\{\\mathbf{u}\\}$ and $K = \\text{Span}\\{\\mathbf{v}\\}$. Show that $H+K = \\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$." },
        { id: "s2", type: "solution", title: "Solution", content: "Any vector in $H$ is $c_1\\mathbf{u}$. Any vector in $K$ is $c_2\\mathbf{v}$.\n\nAny vector in $H+K$ is $c_1\\mathbf{u} + c_2\\mathbf{v}$.\n\nThis is precisely the definition of $\\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$. This generalizes to any number of vectors." }
      ]
    },
    {
      id: "les-1-1-12-ex35-38", title: "Functional Spaces", description: "Trig and Polynomial Examples", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 35", content: "Show that $\\mathbf{w}$ is in the subspace of $\\mathbb{R}^4$ spanned by $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$, where $\\mathbf{w} = \\begin{bmatrix} 9 \\\\ -4 \\\\ -4 \\\\ 7 \\end{bmatrix}$ and $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ are given columns." },
        { id: "s1", type: "solution", title: "Method", content: "This is a computation problem. Augment the matrix $[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ | \\ \\mathbf{w}]$ and row reduce. If consistent, $\\mathbf{w}$ is in the subspace." },
        { id: "s2", type: "example_q", title: "Exercise 37", content: "**Problem:** Let $W$ be the vector space of all real-valued functions. Let $\\mathbf{f}(t) = \\cos^2 t$, $\\mathbf{g}(t) = \\sin^2 t$, and $\\mathbf{h}(t) = 1$.\n\nAre $\\mathbf{f}, \\mathbf{g}, \\mathbf{h}$ linearly independent? Or is one in the span of the others?" },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Find a relationship.**", interactiveSteps: [
           { prompt: "Recall the Pythagorean identity.", options: [{id:"A", text:"$\\cos^2 t + \\sin^2 t = 1$", isCorrect:true, explanation:""}, {id:"B", text:"$\\cos t + \\sin t = 1$", isCorrect:false, explanation:""}], stepText: "Since $\\cos^2 t + \\sin^2 t = 1$, we have $\\mathbf{f} + \\mathbf{g} = \\mathbf{h}$." },
           { stepText: "Therefore, $\\mathbf{h}$ is in $\\text{Span}\\{\\mathbf{f}, \\mathbf{g}\\}$. The set is linearly dependent, and the subspace they span is only 2-dimensional (actually spanned by just $\\mathbf{f}$ and $\\mathbf{g}$)." }
        ]}
      ]
    }
  ]
};