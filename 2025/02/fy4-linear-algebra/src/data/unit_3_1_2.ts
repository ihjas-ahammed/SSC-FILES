import { Unit } from '../types';

export const UNIT_3_1_2: Unit = {
  id: "unit-3-1-2",
  title: "The Length of a Vector",
  description: "Definition of Norm (Length) and its relationship to the inner product.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-2-def", title: "Definition 2: Length", description: "Calculating norm", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Definition 2", content: "The **length** (or **norm**) of a vector $\\mathbf{v}$ is the nonnegative scalar $\\|\\mathbf{v}\\|$ defined by:\n$$ \\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + v_2^2 + \\dots + v_n^2} $$\n\nAlso, $\\|\\mathbf{v}\\|^2 = \\mathbf{v} \\cdot \\mathbf{v}$." },
        { id: "s1", type: "quiz", title: "Geometric Meaning", content: "In $\\mathbb{R}^2$, what does $\\|\\mathbf{v}\\|$ represent?", options: [{id:"A", text:"The distance from the origin to the point v.", isCorrect:true, explanation:"It is the Euclidean length of the arrow."}, {id:"B", text:"The area of the vector.", isCorrect:false, explanation:"Vectors don't have area."}] },
        { id: "s2", type: "quiz", title: "Scaling", content: "If you scale a vector $\\mathbf{v}$ by $c$, what happens to its length?", options: [{id:"A", text:"It is multiplied by $c$.", isCorrect:false, explanation:"Length must be non-negative."}, {id:"B", text:"It is multiplied by $|c|$.", isCorrect:true, explanation:"$\\|c\\mathbf{v}\\| = |c| \\|\\mathbf{v}\\|$."}] },
        { id: "s3", type: "interactive_canvas", title: "Vector Length", content: "Drag the vector to see its components and length update.", interactiveCanvasId: "dot-product-interactive" },
        { id: "s4", type: "proof", title: "Proof: Scaling Property", content: "**Goal: Show $\\|c\\mathbf{v}\\| = |c|\\|\\mathbf{v}\\|$.**", interactiveSteps: [
           { stepText: "Compute squared length: $\\|c\\mathbf{v}\\|^2 = (c\\mathbf{v}) \\cdot (c\\mathbf{v})$." },
           { prompt: "Pull out the scalars $c$.", options: [{id:"A", text:"$c^2 (\\mathbf{v} \\cdot \\mathbf{v})$", isCorrect:true, explanation:"Property (c) of inner products applies twice."}, {id:"B", text:"$c (\\mathbf{v} \\cdot \\mathbf{v})$", isCorrect:false, explanation:""}], stepText: "$\\|c\\mathbf{v}\\|^2 = c^2 \\|\\mathbf{v}\\|^2$." },
           { stepText: "Take the square root of both sides: $\\sqrt{c^2 \\|\\mathbf{v}\\|^2} = \\sqrt{c^2} \\sqrt{\\|\\mathbf{v}\\|^2} = |c| \\|\\mathbf{v}\\|$. Goal reached." }
        ]},
        { id: "s5", type: "numerical", title: "Calculate", content: "Find the length of the vector $\\mathbf{v} = [3, 4]^T$.", numericAnswer: 5, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Term", content: "The length of a vector is also called its ___.", blankAnswer: "norm" }
      ]
    }
  ]
};