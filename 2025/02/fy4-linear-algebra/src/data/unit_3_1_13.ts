import { Unit } from '../types';

export const UNIT_3_1_13: Unit = {
  id: "unit-3-1-13",
  title: "Orthogonal Complements and Subspaces",
  description: "Exercises 25-31: Geometry and proofs about W perp.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-13-ex25", title: "Exercise 25", description: "Vectors orthogonal to v", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Let $\\mathbf{v} = \\begin{bmatrix} a \\\\ b \\end{bmatrix}$. Describe the set $H$ of vectors $\\begin{bmatrix} x \\\\ y \\end{bmatrix}$ that are orthogonal to $\\mathbf{v}$. [Hint: Consider $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{v} \\neq \\mathbf{0}$]" },
        { id: "s1", type: "solution", title: "Solution", content: "The condition is $\\mathbf{v} \\cdot \\mathbf{x} = 0$, which means $ax + by = 0$.\n\n- If $\\mathbf{v} = \\mathbf{0}$ (so $a=0, b=0$), then $0x + 0y = 0$ is true for all $x,y$. So $H = \\mathbb{R}^2$.\n- If $\\mathbf{v} \\neq \\mathbf{0}$, $ax + by = 0$ describes a line through the origin in $\\mathbb{R}^2$ that is perpendicular to $\\mathbf{v}$." }
      ]
    },
    {
      id: "les-3-1-13-ex26", title: "Exercise 26", description: "Vectors orthogonal to u", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** Let $\\mathbf{u} = \\begin{bmatrix} 5 \\\\ -6 \\\\ 7 \\end{bmatrix}$, and let $W$ be the set of all $\\mathbf{x}$ in $\\mathbb{R}^3$ such that $\\mathbf{u} \\cdot \\mathbf{x} = 0$.\n\nWhat theorem in Chapter 4 can be used to show that $W$ is a subspace of $\\mathbb{R}^3$? Describe $W$ in geometric language." },
        { id: "s1", type: "solution", title: "Solution", content: "The equation $\\mathbf{u} \\cdot \\mathbf{x} = 0$ is exactly the matrix equation $\\mathbf{u}^T \\mathbf{x} = 0$, where $\\mathbf{u}^T = [5, -6, 7]$.\n\nThus, $W$ is the Null Space of the $1 \\times 3$ matrix $\\mathbf{u}^T$. By Theorem 2 in Chapter 4, the null space of a matrix is a subspace.\n\nGeometrically, $5x_1 - 6x_2 + 7x_3 = 0$ represents a plane through the origin in $\\mathbb{R}^3$." }
      ]
    },
    {
      id: "les-3-1-13-ex27", title: "Exercise 27", description: "Orthogonal to a sum", icon: "Combine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Suppose a vector $\\mathbf{y}$ is orthogonal to vectors $\\mathbf{u}$ and $\\mathbf{v}$. Show that $\\mathbf{y}$ is orthogonal to the vector $\\mathbf{u} + \\mathbf{v}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Compute $\\mathbf{y} \\cdot (\\mathbf{u} + \\mathbf{v})$.**", interactiveSteps: [
           { stepText: "Given: $\\mathbf{y} \\cdot \\mathbf{u} = 0$ and $\\mathbf{y} \\cdot \\mathbf{v} = 0$." },
           { prompt: "Distribute the dot product for $\\mathbf{y} \\cdot (\\mathbf{u} + \\mathbf{v})$.", options: [{id:"A", text:"$\\mathbf{y} \\cdot \\mathbf{u} + \\mathbf{y} \\cdot \\mathbf{v}$", isCorrect:true, explanation:""}, {id:"B", text:"$\\mathbf{y} + \\mathbf{u} \\cdot \\mathbf{v}$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot (\\mathbf{u} + \\mathbf{v}) = \\mathbf{y} \\cdot \\mathbf{u} + \\mathbf{y} \\cdot \\mathbf{v}$." },
           { stepText: "Substitute the givens: $0 + 0 = 0$." },
           { stepText: "Since the dot product is 0, $\\mathbf{y}$ is orthogonal to $\\mathbf{u} + \\mathbf{v}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-13-ex28", title: "Exercise 28", description: "Orthogonal to a span", icon: "Combine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Suppose $\\mathbf{y}$ is orthogonal to $\\mathbf{u}$ and $\\mathbf{v}$. Show that $\\mathbf{y}$ is orthogonal to every $\\mathbf{w}$ in $\\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $\\mathbf{y} \\cdot \\mathbf{w} = 0$.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{w}$ be in $\\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$. Then $\\mathbf{w} = c_1\\mathbf{u} + c_2\\mathbf{v}$." },
           { prompt: "Compute $\\mathbf{y} \\cdot \\mathbf{w}$.", options: [{id:"A", text:"$\\mathbf{y} \\cdot (c_1\\mathbf{u} + c_2\\mathbf{v}) = c_1(\\mathbf{y} \\cdot \\mathbf{u}) + c_2(\\mathbf{y} \\cdot \\mathbf{v})$", isCorrect:true, explanation:"Using linearity of inner product."}, {id:"B", text:"$c_1 c_2 (\\mathbf{u} \\cdot \\mathbf{v})$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot \\mathbf{w} = c_1(\\mathbf{y} \\cdot \\mathbf{u}) + c_2(\\mathbf{y} \\cdot \\mathbf{v})$." },
           { stepText: "Substitute givens: $c_1(0) + c_2(0) = 0$." },
           { stepText: "Thus, $\\mathbf{y}$ is orthogonal to $\\mathbf{w}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-13-ex29", title: "Exercise 29", description: "Generalizing to any Span", icon: "Combine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Let $W = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$. Show that if $\\mathbf{x}$ is orthogonal to each $\\mathbf{v}_j$, then $\\mathbf{x}$ is orthogonal to every vector in $W$." },
        { id: "s1", type: "solution", title: "Solution", content: "This is a direct generalization of Exercise 28.\n\nLet $\\mathbf{w} \in W$. Then $\\mathbf{w} = c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p$.\n\n$\\mathbf{x} \\cdot \\mathbf{w} = \\mathbf{x} \\cdot (c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p) = c_1(\\mathbf{x} \\cdot \\mathbf{v}_1) + \\dots + c_p(\\mathbf{x} \\cdot \\mathbf{v}_p)$.\n\nSince $\\mathbf{x} \\cdot \\mathbf{v}_j = 0$ for all $j$, the entire sum is $c_1(0) + \\dots + c_p(0) = 0$.\nThus $\\mathbf{x}$ is orthogonal to $W$." }
      ]
    },
    {
      id: "les-3-1-13-ex30", title: "Exercise 30", description: "W perp is a Subspace", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Let $W$ be a subspace of $\\mathbb{R}^n$, and let $W^\\perp$ be the set of all vectors orthogonal to $W$. Show that $W^\\perp$ is a subspace of $\\mathbb{R}^n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Verify the 3 subspace properties for $W^\\perp$.**", interactiveSteps: [
           { stepText: "1. Zero vector: Does $\\mathbf{0} \\cdot \\mathbf{w} = 0$ for all $\\mathbf{w} \\in W$?" },
           { prompt: "Yes or No?", options: [{id:"A", text:"Yes, zero dot anything is zero.", isCorrect:true, explanation:""}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{0} \\in W^\\perp$." },
           { stepText: "2. Addition: Let $\\mathbf{z}_1, \\mathbf{z}_2 \\in W^\\perp$. Then $\\mathbf{z}_1 \\cdot \\mathbf{w} = 0$ and $\\mathbf{z}_2 \\cdot \\mathbf{w} = 0$." },
           { prompt: "Compute $(\\mathbf{z}_1 + \\mathbf{z}_2) \\cdot \\mathbf{w}$.", options: [{id:"A", text:"$\\mathbf{z}_1 \\cdot \\mathbf{w} + \\mathbf{z}_2 \\cdot \\mathbf{w} = 0 + 0 = 0$", isCorrect:true, explanation:""}, {id:"B", text:"$\\mathbf{w} \\cdot \\mathbf{w}$", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{z}_1 + \\mathbf{z}_2 \\in W^\\perp$." },
           { stepText: "3. Scalar Mult: $(c\\mathbf{z}_1) \\cdot \\mathbf{w} = c(\\mathbf{z}_1 \\cdot \\mathbf{w}) = c(0) = 0$. So $c\\mathbf{z}_1 \\in W^\\perp$." },
           { stepText: "Therefore, $W^\\perp$ is a subspace." }
        ]}
      ]
    },
    {
      id: "les-3-1-13-ex31", title: "Exercise 31", description: "Intersection of W and W perp", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Show that if $\\mathbf{x}$ is in both $W$ and $W^\\perp$, then $\\mathbf{x} = \\mathbf{0}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the definitions of both spaces.**", interactiveSteps: [
           { stepText: "Since $\\mathbf{x} \\in W^\\perp$, $\\mathbf{x}$ is orthogonal to EVERY vector in $W$." },
           { prompt: "Since $\\mathbf{x}$ is ALSO in $W$, what specific vector in $W$ must it be orthogonal to?", options: [{id:"A", text:"Itself ($\\mathbf{x}$)", isCorrect:true, explanation:"If it's orthogonal to everything in W, and it IS in W, it must be orthogonal to itself!"}, {id:"B", text:"Only the zero vector", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{x}$ must be orthogonal to $\\mathbf{x}$. That means $\\mathbf{x} \\cdot \\mathbf{x} = 0$." },
           { stepText: "By Theorem 1(d), $\\mathbf{x} \\cdot \\mathbf{x} = 0$ implies $\\mathbf{x} = \\mathbf{0}$." },
           { stepText: "Thus, the only vector in the intersection of $W$ and $W^\\perp$ is the zero vector." }
        ]}
      ]
    }
  ]
};