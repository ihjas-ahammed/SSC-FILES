import { Unit } from '../types';

export const UNIT_3_1_14: Unit = {
  id: "unit-3-1-14",
  title: "Angles and Linear Maps",
  description: "Exercises 32-34: Angles between vectors and mappings.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-14-ex32", title: "Exercise 32 (Theory)", description: "Angles via Dot Product", icon: "Compass",
      slides: [
        { id: "s0", type: "theory", title: "Angles in R^n", content: "The angle $\\theta$ between two nonzero vectors $\\mathbf{u}$ and $\\mathbf{v}$ is defined by the formula:\n$$ \\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos \\theta $$\n\nThis generalizes the geometric angle from 2D and 3D into $n$-dimensional space." },
        { id: "s1", type: "quiz", title: "Connection to Orthogonality", content: "If $\\mathbf{u} \\cdot \\mathbf{v} = 0$, what does the formula say about $\\cos \\theta$?", options: [{id:"A", text:"$\\cos \\theta = 0$, meaning $\\theta = 90^\\circ$", isCorrect:true, explanation:"This perfectly aligns the algebraic definition of orthogonal with the geometric concept of perpendicular."}, {id:"B", text:"$\\cos \\theta = 1$", isCorrect:false, explanation:""}] },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Angles", content: "Notice how the dot product changes sign as the angle passes 90 degrees.", interactiveCanvasId: "dot-product-interactive" }
      ]
    },
    {
      id: "les-3-1-14-ex33", title: "Exercise 33 (Theory)", description: "Projection Mapping", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Projection Mapping", content: "**Problem:** Let $\\mathbf{u} \\neq \\mathbf{0}$ in $\\mathbb{R}^n$, and let $L = \\text{Span}\\{\\mathbf{u}\\}$. Define a mapping $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ by $T(\\mathbf{x}) = \\text{proj}_L \\mathbf{x} = \\frac{\\mathbf{x} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\mathbf{u}$.\n\nShow that $T$ is a linear transformation." },
        { id: "s1", type: "solution", title: "Interactive Proof", content: "**Goal: Show additivity and scalar scaling.**", interactiveSteps: [
           { stepText: "Let $c = \\frac{1}{\\mathbf{u} \\cdot \\mathbf{u}}$ (a constant scalar for a fixed $\\mathbf{u}$)." },
           { prompt: "Compute $T(\\mathbf{x} + \\mathbf{y})$.", options: [{id:"A", text:"$c((\\mathbf{x}+\\mathbf{y}) \\cdot \\mathbf{u}) \\mathbf{u}$", isCorrect:true, explanation:"Substitute x+y into the formula."}, {id:"B", text:"$c(\\mathbf{x} \\cdot \\mathbf{y}) \\mathbf{u}$", isCorrect:false, explanation:""}], stepText: "$T(\\mathbf{x}+\\mathbf{y}) = c(\\mathbf{x} \\cdot \\mathbf{u} + \\mathbf{y} \\cdot \\mathbf{u}) \\mathbf{u}$." },
           { stepText: "Distribute $\\mathbf{u}$: $c(\\mathbf{x} \\cdot \\mathbf{u})\\mathbf{u} + c(\\mathbf{y} \\cdot \\mathbf{u})\\mathbf{u} = T(\\mathbf{x}) + T(\\mathbf{y})$." },
           { stepText: "Scalar mult: $T(k\\mathbf{x}) = c((k\\mathbf{x}) \\cdot \\mathbf{u}) \\mathbf{u} = k[c(\\mathbf{x} \\cdot \\mathbf{u}) \\mathbf{u}] = kT(\\mathbf{x})$." },
           { stepText: "Thus, orthogonal projection is a linear transformation." }
        ]}
      ]
    },
    {
      id: "les-3-1-14-ex34", title: "Exercise 34 (Theory)", description: "Reflection Mapping", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Reflection", content: "The reflection of a vector $\\mathbf{y}$ across a line $L$ spanned by $\\mathbf{u}$ is defined as:\n$$ \\text{refl}_L \\mathbf{y} = 2 \\text{proj}_L \\mathbf{y} - \\mathbf{y} $$\n\nSince it is a combination of two linear transformations ($2 T(\\mathbf{y})$ and the identity $-\\mathbf{y}$), it is also a linear transformation." }
      ]
    }
  ]
};