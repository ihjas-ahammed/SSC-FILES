import { Unit } from '../types';

export const UNIT_3_1_5: Unit = {
  id: "unit-3-1-5",
  title: "Orthogonality",
  description: "Perpendicular vectors, Pythagorean theorem, and Orthogonal Complements.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-5-def", title: "Definition of Orthogonality", description: "The zero product property", icon: "Minimize2",
      slides: [
        { id: "s0", type: "theory", title: "Definition", content: "Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$ are **orthogonal** (to each other) if $\\mathbf{u} \\cdot \\mathbf{v} = 0$." },
        { id: "s1", type: "quiz", title: "Zero Vector", content: "Is the zero vector orthogonal to every vector?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"$\\mathbf{0} \\cdot \\mathbf{v} = 0$ for any v."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Geometric Meaning", content: "What angle corresponds to orthogonality?", options: [{id:"A", text:"90 degrees", isCorrect:true, explanation:"Perpendicular vectors."}, {id:"B", text:"180 degrees", isCorrect:false, explanation:""}] },
        { id: "s3", type: "interactive_canvas", title: "Interactive Orthogonality", content: "Adjust the vector until the dot product is zero. Notice the right angle.", interactiveCanvasId: "orthogonality-interactive" }
      ]
    },
    {
      id: "les-3-1-5-thm2", title: "Theorem 2: Pythagorean", description: "Sum of squares", icon: "Triangle",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 2", content: "**The Pythagorean Theorem:**\nTwo vectors $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal if and only if\n$$ \\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 $$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Expand $\\|\\mathbf{u}+\\mathbf{v}\\|^2$.**", interactiveSteps: [
           { stepText: "$\\|\\mathbf{u}+\\mathbf{v}\\|^2 = (\\mathbf{u}+\\mathbf{v}) \\cdot (\\mathbf{u}+\\mathbf{v})$." },
           { prompt: "Distribute the terms.", options: [{id:"A", text:"$\\mathbf{u}\\cdot\\mathbf{u} + 2\\mathbf{u}\\cdot\\mathbf{v} + \\mathbf{v}\\cdot\\mathbf{v}$", isCorrect:true, explanation:"Using commutativity."}, {id:"B", text:"$\\mathbf{u}\\cdot\\mathbf{u} + \\mathbf{v}\\cdot\\mathbf{v}$", isCorrect:false, explanation:"Missing the cross terms."}], stepText: "$\\mathbf{u}\\cdot\\mathbf{u} + \\mathbf{v}\\cdot\\mathbf{v} + 2\\mathbf{u}\\cdot\\mathbf{v} = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 + 2\\mathbf{u}\\cdot\\mathbf{v}$." },
           { stepText: "This equals $\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2$ if and only if $2\\mathbf{u}\\cdot\\mathbf{v} = 0$, which means $\\mathbf{u} \\cdot \\mathbf{v} = 0$." }
        ]}
      ]
    },
    {
      id: "les-3-1-5-comp", title: "Orthogonal Complements", description: "The set W perp", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Definition", content: "If a vector $\\mathbf{z}$ is orthogonal to every vector in a subspace $W$ of $\\mathbb{R}^n$, then $\\mathbf{z}$ is said to be **orthogonal to $W$**.\n\nThe set of all vectors $\\mathbf{z}$ that are orthogonal to $W$ is called the **orthogonal complement** of $W$ and is denoted by $W^\\perp$." },
        { id: "s1", type: "quiz", title: "Subspace Property", content: "Is $W^\\perp$ a subspace of $\\mathbb{R}^n$?", options: [{id:"A", text:"Yes, always.", isCorrect:true, explanation:"It contains 0 and is closed under linear combinations."}, {id:"B", text:"No, not always.", isCorrect:false, explanation:""}] },
        { id: "s2", type: "fill_in_blank", title: "Complement", content: "A vector $\\mathbf{x}$ is in $W^\\perp$ if and only if $\\mathbf{x}$ is orthogonal to every vector in a set that ___ $W$.", blankAnswer: "spans" }
      ]
    },
    {
      id: "les-3-1-5-ex6", title: "Example 6: Plane and Line", description: "Geometry of complements", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Scenario:** Let $W$ be a plane through the origin in $\\mathbb{R}^3$, and let $L$ be the line through the origin and perpendicular to $W$." },
        { id: "s1", type: "solution", title: "Analysis", content: "If $\\mathbf{z}$ is on $L$, it is perpendicular to every vector in the plane $W$. So $L$ consists of vectors orthogonal to $W$.\n\nThus $L = W^\\perp$.\n\nConversely, every vector in $W$ is orthogonal to $L$. So $W = L^\\perp$." }
      ]
    }
  ]
};