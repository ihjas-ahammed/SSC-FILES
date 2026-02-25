import { Unit } from '../types';

export const UNIT_3_3_1: Unit = {
  id: "unit-3-3-1",
  title: "Orthogonal Projections",
  description: "Theorem 8: The Orthogonal Decomposition Theorem and Example 1.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-1-thm8", title: "Theorem 8: Orthogonal Decomposition", description: "Decomposing vectors", icon: "Split",
      slides: [
        { id: "s0", type: "quiz", title: "Introductory Thought 1", content: "Imagine casting a shadow of a floating arrow onto the floor directly below it. Is the shadow vector part of the floor's plane?", options: [{id:"A", text:"Yes, it lies in the plane.", isCorrect:true, explanation:"The projection lies within the subspace it is projected onto."}, {id:"B", text:"No, it sticks out.", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Introductory Thought 2", content: "If you subtract the 'shadow' (projection) from the original arrow, which direction does the remaining vector point?", options: [{id:"A", text:"Parallel to the floor.", isCorrect:false, explanation:"That would mean it's still part of the shadow."}, {id:"B", text:"Perpendicular (orthogonal) to the floor.", isCorrect:true, explanation:"The difference vector represents the 'height' or 'error', which is orthogonal to the subspace."}] },
        { id: "s2", type: "theory", title: "Theorem 8: Orthogonal Decomposition", content: "Let $W$ be a subspace of $\\mathbb{R}^n$. Then each $\\mathbf{y}$ in $\\mathbb{R}^n$ can be written uniquely in the form\n$$ \\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z} $$\nwhere $\\hat{\\mathbf{y}}$ is in $W$ and $\\mathbf{z}$ is in $W^\\perp$.\n\nIf $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ is any orthogonal basis of $W$, then\n$$ \\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1 + \\dots + \\frac{\\mathbf{y} \\cdot \\mathbf{u}_p}{\\mathbf{u}_p \\cdot \\mathbf{u}_p}\\mathbf{u}_p $$\nand $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$." },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Decomposition", content: "The vector $\\mathbf{y}$ is decomposed into $\\hat{\\mathbf{y}}$ (in $W$) and $\\mathbf{z}$ (orthogonal to $W$).", interactiveCanvasId: "orthogonal-projection-interactive" },
        { id: "s4", type: "proof", title: "Interactive Proof: Uniqueness", content: "**Goal: Show that if $\\mathbf{y} = \\hat{\\mathbf{y}}_1 + \\mathbf{z}_1 = \\hat{\\mathbf{y}}_2 + \\mathbf{z}_2$, then $\\hat{\\mathbf{y}}_1 = \\hat{\\mathbf{y}}_2$ and $\\mathbf{z}_1 = \\mathbf{z}_2$.**", interactiveSteps: [
           { stepText: "Assume two decompositions: $\\hat{\\mathbf{y}}_1 + \\mathbf{z}_1 = \\hat{\\mathbf{y}}_2 + \\mathbf{z}_2$." },
           { prompt: "Rearrange terms to group vectors from $W$ on one side and $W^\\perp$ on the other.", options: [{id:"A", text:"$\\hat{\\mathbf{y}}_1 - \\hat{\\mathbf{y}}_2 = \\mathbf{z}_2 - \\mathbf{z}_1$", isCorrect:true, explanation:"Vectors in $W$ on left, vectors in $W^\\perp$ on right."}, {id:"B", text:"$\\hat{\\mathbf{y}}_1 + \\mathbf{z}_1 = \\hat{\\mathbf{y}}_2 + \\mathbf{z}_2$", isCorrect:false, explanation:"No rearrangement done."}], stepText: "Let $\\mathbf{v} = \\hat{\\mathbf{y}}_1 - \\hat{\\mathbf{y}}_2 = \\mathbf{z}_2 - \\mathbf{z}_1$." },
           { prompt: "Since $W$ is a subspace, $\\hat{\\mathbf{y}}_1 - \\hat{\\mathbf{y}}_2$ is in $W$. Since $W^\\perp$ is a subspace, $\\mathbf{z}_2 - \\mathbf{z}_1$ is in $W^\\perp$. What vector is in BOTH $W$ and $W^\\perp$?", options: [{id:"A", text:"Any vector.", isCorrect:false, explanation:"Most vectors are in neither or just one."}, {id:"B", text:"Only the zero vector $\\mathbf{0}$.", isCorrect:true, explanation:"Intersection of a subspace and its orthogonal complement is {0}."}], stepText: "Thus $\\mathbf{v} = \\mathbf{0}$, which implies $\\hat{\\mathbf{y}}_1 = \\hat{\\mathbf{y}}_2$ and $\\mathbf{z}_1 = \\mathbf{z}_2$." }
        ]},
        { id: "s5", type: "numerical", title: "Quick Check", content: "If $\\mathbf{y} = (10, 5)$ and $\\hat{\\mathbf{y}} = (2, 1)$, what is the first component of $\\mathbf{z}$?", numericAnswer: 8, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Terminology", content: "The vector $\\hat{\\mathbf{y}}$ is called the orthogonal ___ of $\\mathbf{y}$ onto $W$.", blankAnswer: "projection" }
      ]
    },
    {
      id: "les-3-3-1-ex1", title: "Example 1", description: "Calculating Projection", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Let $\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ 5 \\\\ -1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{y} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$.\n\nObserve that $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthogonal basis for $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$. Write $\\mathbf{y}$ as the sum of a vector in $W$ and a vector orthogonal to $W$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y}\\cdot\\mathbf{u}_1}{\\mathbf{u}_1\\cdot\\mathbf{u}_1}\\mathbf{u}_1 + \\frac{\\mathbf{y}\\cdot\\mathbf{u}_2}{\\mathbf{u}_2\\cdot\\mathbf{u}_2}\\mathbf{u}_2$.**", interactiveSteps: [
           { stepText: "First, verify orthogonality: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 2(-2) + 5(1) + (-1)(1) = -4 + 5 - 1 = 0$. Yes." },
           { prompt: "Compute $\\mathbf{y} \\cdot \\mathbf{u}_1$.", options: [{id:"A", text:"9", isCorrect:true, explanation:"$2(1) + 5(2) - 1(3) = 2 + 10 - 3 = 9$."}, {id:"B", text:"15", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot \\mathbf{u}_1 = 9$." },
           { stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 4 + 25 + 1 = 30$." },
           { prompt: "Compute $\\mathbf{y} \\cdot \\mathbf{u}_2$.", options: [{id:"A", text:"3", isCorrect:true, explanation:"$-2(1) + 1(2) + 1(3) = -2 + 2 + 3 = 3$."}, {id:"B", text:"0", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot \\mathbf{u}_2 = 3$." },
           { stepText: "$\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = 4 + 1 + 1 = 6$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\frac{9}{30}\\mathbf{u}_1 + \\frac{3}{6}\\mathbf{u}_2 = \\frac{3}{10}\\mathbf{u}_1 + \\frac{1}{2}\\mathbf{u}_2$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\begin{bmatrix} 6/10 \\\\ 15/10 \\\\ -3/10 \\end{bmatrix} + \\begin{bmatrix} -1 \\\\ 0.5 \\\\ 0.5 \\end{bmatrix} = \\begin{bmatrix} -2/5 \\\\ 2 \\\\ 1/5 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} - \\begin{bmatrix} -0.4 \\\\ 2 \\\\ 0.2 \\end{bmatrix} = \\begin{bmatrix} 1.4 \\\\ 0 \\\\ 2.8 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "quiz", title: "Check z", content: "Is $\\mathbf{z}$ orthogonal to $\\mathbf{u}_1$?", options: [{id:"A", text:"Yes, dot product is 0.", isCorrect:true, explanation:"$1.4(2) + 0(5) + 2.8(-1) = 2.8 - 2.8 = 0$."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Check z again", content: "Is $\\mathbf{z}$ orthogonal to $\\mathbf{u}_2$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"$1.4(-2) + 0(1) + 2.8(1) = -2.8 + 2.8 = 0$."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s4", type: "numerical", title: "Length of z", content: "What is $\\|\\mathbf{z}\\|^2$?", numericAnswer: 9.8, numericTolerance: 0.1 }
      ]
    }
  ]
};