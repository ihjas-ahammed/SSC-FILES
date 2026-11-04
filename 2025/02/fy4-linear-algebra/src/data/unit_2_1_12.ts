import { Unit } from '../types';

export const UNIT_2_1_12: Unit = {
  id: "unit-2-1-12",
  title: "Properties of the Coordinate Mapping",
  description: "Exercises 23-26: Proving properties of the isomorphism.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-12-ex23", title: "Exercise 23: One-to-One", description: "Proving injectivity", icon: "MoveRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Show that the coordinate mapping is *one-to-one*.\n\n*(Hint: Suppose $[\\mathbf{u}]_\\mathcal{B} = [\\mathbf{w}]_\\mathcal{B}$ for some $\\mathbf{u}$ and $\\mathbf{w}$ in $V$, and show that $\\mathbf{u} = \\mathbf{w}$.)*" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Assume equal outputs, prove equal inputs.**", interactiveSteps: [
           { stepText: "Assume $[\\mathbf{u}]_\\mathcal{B} = [\\mathbf{w}]_\\mathcal{B} = \\begin{bmatrix} c_1 \\\\ \\vdots \\\\ c_n \\end{bmatrix}$." },
           { prompt: "By the definition of coordinate vectors, what is $\\mathbf{u}$?", options: [{id:"A", text:"$\\mathbf{u} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$", isCorrect:true, explanation:"The coordinates are the weights."}, {id:"B", text:"$\\mathbf{u} = [\\mathbf{u}]_\\mathcal{B}$", isCorrect:false, explanation:"They live in different spaces generally."}], stepText: "$\\mathbf{u} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$." },
           { stepText: "Similarly, by definition, $\\mathbf{w} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$." },
           { stepText: "Since both $\\mathbf{u}$ and $\\mathbf{w}$ are equal to the exact same linear combination of vectors, $\\mathbf{u} = \\mathbf{w}$." },
           { stepText: "Thus, the coordinate mapping is one-to-one." }
        ]}
      ]
    },
    {
      id: "les-2-1-12-ex24", title: "Exercise 24: Onto", description: "Proving surjectivity", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Show that the coordinate mapping is *onto* $\\mathbb{R}^n$.\n\nThat is, given any $\\mathbf{y}$ in $\\mathbb{R}^n$, with entries $y_1, \\dots, y_n$, produce a vector $\\mathbf{u}$ in $V$ such that $[\\mathbf{u}]_\\mathcal{B} = \\mathbf{y}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct the preimage $\\mathbf{u}$.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{y} = \\begin{bmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{bmatrix}$ be an arbitrary vector in $\\mathbb{R}^n$." },
           { prompt: "How should we construct $\\mathbf{u}$ in $V$ to guarantee its coordinates are the entries of $\\mathbf{y}$?", options: [{id:"A", text:"Let $\\mathbf{u} = y_1\\mathbf{b}_1 + \\dots + y_n\\mathbf{b}_n$", isCorrect:true, explanation:"Using the entries of y as weights guarantees its coordinate vector is y."}, {id:"B", text:"Let $\\mathbf{u} = \\mathbf{0}$", isCorrect:false, explanation:""}], stepText: "Define $\\mathbf{u} = y_1\\mathbf{b}_1 + \\dots + y_n\\mathbf{b}_n$." },
           { stepText: "Because $V$ is a vector space, this linear combination $\\mathbf{u}$ is guaranteed to be an element of $V$ (closure)." },
           { stepText: "By the definition of coordinates, $[\\mathbf{u}]_\\mathcal{B} = \\mathbf{y}$. Since we can do this for *any* $\\mathbf{y} \\in \\mathbb{R}^n$, the mapping is onto." }
        ]}
      ]
    },
    {
      id: "les-2-1-12-ex25", title: "Exercise 25: Preserving Independence", description: "Independence in V vs R^n", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Show that a subset $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ in $V$ is linearly independent if and only if the set of coordinate vectors $\\{[\\mathbf{u}_1]_\\mathcal{B}, \\dots, [\\mathbf{u}_p]_\\mathcal{B}\\}$ is linearly independent in $\\mathbb{R}^n$." },
        { id: "s1", type: "solution", title: "Interactive Proof", content: "**Goal: Use the linearity and one-to-one property of the mapping.**", interactiveSteps: [
           { stepText: "Consider the equation: $c_1\\mathbf{u}_1 + \\dots + c_p\\mathbf{u}_p = \\mathbf{0}_V$." },
           { prompt: "Since the coordinate mapping is a linear transformation, we can take the coordinates of both sides. What does the left side become?", options: [{id:"A", text:"$c_1[\\mathbf{u}_1]_\\mathcal{B} + \\dots + c_p[\\mathbf{u}_p]_\\mathcal{B}$", isCorrect:true, explanation:"Linearity: $[c\\mathbf{u} + d\\mathbf{v}] = c[\\mathbf{u}] + d[\\mathbf{v}]$."}, {id:"B", text:"$[\\mathbf{0}]_\\mathcal{B}$", isCorrect:false, explanation:"That's the right side."}], stepText: "We get: $c_1[\\mathbf{u}_1]_\\mathcal{B} + \\dots + c_p[\\mathbf{u}_p]_\\mathcal{B} = [\\mathbf{0}_V]_\\mathcal{B}$." },
           { stepText: "The coordinate vector of the zero vector in $V$ is the zero vector in $\\mathbb{R}^n$, so the right side is $\\mathbf{0}_{\\mathbb{R}^n}$." },
           { stepText: "Because the mapping is one-to-one, the original equation holds IF AND ONLY IF the coordinate equation holds." },
           { stepText: "Therefore, the original vectors have a non-trivial dependence relation if and only if their coordinate vectors have the exact same relation. Thus, independence is preserved." }
        ]}
      ]
    },
    {
      id: "les-2-1-12-ex26", title: "Exercise 26: Preserving Span", description: "Combinations in V vs R^n", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** Given vectors $\\mathbf{u}_1, \\dots, \\mathbf{u}_p$, and $\\mathbf{w}$ in $V$, show that $\\mathbf{w}$ is a linear combination of the $\\mathbf{u}$'s if and only if $[\\mathbf{w}]_\\mathcal{B}$ is a linear combination of the coordinate vectors $[\\mathbf{u}]_\\mathcal{B}$'s." },
        { id: "s1", type: "solution", title: "Solution", content: "Suppose $\\mathbf{w} = c_1\\mathbf{u}_1 + \\dots + c_p\\mathbf{u}_p$.\n\nBecause the coordinate mapping $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$ is a linear transformation, applying it to both sides gives:\n$$ [\\mathbf{w}]_\\mathcal{B} = c_1[\\mathbf{u}_1]_\\mathcal{B} + \\dots + c_p[\\mathbf{u}_p]_\\mathcal{B} $$\nSo $[\\mathbf{w}]_\\mathcal{B}$ is a linear combination with the exact same weights.\n\nConversely, if the coordinate equation holds, because the mapping is an isomorphism (one-to-one and onto, meaning it has a linear inverse), applying the inverse mapping to both sides restores the original equation in $V$." }
      ]
    }
  ]
};