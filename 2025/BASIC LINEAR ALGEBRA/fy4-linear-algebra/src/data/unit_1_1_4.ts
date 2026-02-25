import { Unit } from '../types';

export const UNIT_1_1_4: Unit = {
  id: "unit-1-1-4",
  title: "Geometric Counterexamples",
  description: "Exercises 1-4: Visualizing why sets fail to be subspaces.",
  color: "duo-red",
  lessons: [
    {
      id: "les-1-1-4-ex1", title: "The First Quadrant", description: "Exercise 1", icon: "LayoutTemplate",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Let $V$ be the first quadrant in the $xy$-plane; that is, $V = \\left\\{ \\begin{bmatrix} x \\\\ y \\end{bmatrix} : x \\ge 0, y \\ge 0 \\right\\}$.\n\nIs $V$ a vector space?", interactiveCanvasId: "quadrant-closure-interactive" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test the closure axioms.**", interactiveSteps: [
           { prompt: "Is $V$ closed under addition? If $\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$, is $\\mathbf{u}+\\mathbf{v}$ in $V$?", options: [{id:"A", text:"Yes, positive + positive is positive.", isCorrect:true, explanation:"Summing non-negative numbers yields non-negative numbers."}, {id:"B", text:"No.", isCorrect:false, explanation:""}], stepText: "It appears closed under addition. Let's check scalar multiplication." },
           { prompt: "Find a specific vector $\\mathbf{u}$ in $V$ and a scalar $c$ such that $c\\mathbf{u}$ is NOT in $V$.", options: [{id:"A", text:"$\\mathbf{u}=\\begin{bmatrix}1\\\\1\\end{bmatrix}, c=2$", isCorrect:false, explanation:"$2\\mathbf{u} = [2,2]$ is still in $V$."}, {id:"B", text:"$\\mathbf{u}=\\begin{bmatrix}1\\\\1\\end{bmatrix}, c=-1$", isCorrect:true, explanation:"$(-1)\\mathbf{u} = [-1,-1]$ is in the third quadrant, not $V$."}], stepText: "If $\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ and $c = -1$, then $c\\mathbf{u} = \\begin{bmatrix} -1 \\\\ -1 \\end{bmatrix}$, which is not in $V$." },
           { stepText: "Since $V$ is not closed under scalar multiplication, it is **not** a vector space." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Conclusion", content: "The set of vectors with non-negative coordinates fails the axiom of closure under ___ multiplication.", blankAnswer: "scalar" }
      ]
    },
    {
      id: "les-1-1-4-ex2", title: "Union of Quadrants", description: "Exercise 2", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Let $W$ be the union of the first and third quadrants in the $xy$-plane. That is, $W = \\left\\{ \\begin{bmatrix} x \\\\ y \\end{bmatrix} : xy \\ge 0 \\right\\}$.\n\nIs $W$ a subspace of $\\mathbb{R}^2$?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test closure properties.**", interactiveSteps: [
           { stepText: "Vectors in $W$ are either in Q1 (both pos) or Q3 (both neg)." },
           { prompt: "Is $W$ closed under scalar multiplication?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Multiplying by pos scalar keeps quadrant; neg scalar flips Q1 to Q3 or Q3 to Q1. Both are in W."}, {id:"B", text:"No", isCorrect:false, explanation:"Try a few examples."}], stepText: "$W$ is closed under scalar multiplication. Now let's check addition." },
           { prompt: "Find $\\mathbf{u}$ in Q1 and $\\mathbf{v}$ in Q3 such that $\\mathbf{u}+\\mathbf{v}$ is NOT in $W$.", options: [{id:"A", text:"$\\mathbf{u}=\\begin{bmatrix}1\\\\0\\end{bmatrix}, \\mathbf{v}=\\begin{bmatrix}0\\\\-1\\end{bmatrix}$", isCorrect:true, explanation:"Sum is $[1, -1]$, which is in Q4 (not in W)."}, {id:"B", text:"$\\mathbf{u}=\\begin{bmatrix}1\\\\1\\end{bmatrix}, \\mathbf{v}=\\begin{bmatrix}-1\\\\-1\\end{bmatrix}$", isCorrect:false, explanation:"Sum is zero vector, which IS in W."}], stepText: "Let $\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 0 \\\\ -1 \\end{bmatrix}$. Their sum is $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "The vector $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$ has $xy = -1 < 0$, so it is not in $W$. Thus $W$ is **not** a subspace." }
        ]},
        { id: "s2", type: "quiz", title: "Visualizing", content: "Why did addition fail?", options: [{id:"A", text:"We added two vectors from the same quadrant.", isCorrect:false, explanation:""}, {id:"B", text:"We added vectors \"pulling\" in different orthogonal directions.", isCorrect:true, explanation:"A pull right (x) and a pull down (-y) lands in the 4th quadrant."}] }
      ]
    },
    {
      id: "les-1-1-4-ex3", title: "The Unit Circle", description: "Exercise 3", icon: "Circle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Let $H$ be the set of points inside and on the unit circle in the $xy$-plane. $H = \\{ \\mathbf{x} : \\|\\mathbf{x}\\| \\le 1 \\}$.\n\nIs $H$ a subspace?", interactiveCanvasId: "unit-circle-closure-interactive" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a counterexample.**", interactiveSteps: [
           { prompt: "Does $H$ contain the zero vector?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Length of zero is 0, which is <= 1."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "It contains zero. Now check closure under addition." },
           { prompt: "If we take $\\mathbf{u} = \\begin{bmatrix} 0.9 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 0.9 \\\\ 0 \\end{bmatrix}$ (both in $H$), is $\\mathbf{u}+\\mathbf{v}$ in $H$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Sum is [1.8, 0]."}, {id:"B", text:"No", isCorrect:true, explanation:"1.8 > 1, so it is outside the circle."}], stepText: "The sum is $\\begin{bmatrix} 1.8 \\\\ 0 \\end{bmatrix}$, which has length $1.8 > 1$. It is not in $H$." },
           { stepText: "Scalar multiplication also fails (e.g., $2\\mathbf{u}$ is not in $H$). Thus $H$ is **not** a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-1-4-ex4", title: "Visualizing Subspaces", description: "Exercise 4", icon: "Eye",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 4: Construct a Figure", content: "Exercise 4 asks for a geometric figure that illustrates why a line in $\\mathbb{R}^2$ not through the origin is not closed under addition.\n\nImagine a line $L$ passing through $(0,1)$ and $(1,1)$.\n- Vector $\\mathbf{u} = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$ is on the line.\n- Vector $\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ is on the line.\n- Sum $\\mathbf{u}+\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$." },
        { id: "s1", type: "interactive_canvas", title: "Visual Proof", content: "The sum $\\mathbf{u}+\\mathbf{v}$ shoots way off the line. For a set to be a subspace, the result of addition must *stay* in the set.", interactiveCanvasId: "line-not-origin-interactive" },
        { id: "s2", type: "fill_in_blank", title: "Takeaway", content: "Geometrically, for closure under addition, the shape must be flat (line/plane) and pass through the ___.", blankAnswer: "origin" }
      ]
    }
  ]
};