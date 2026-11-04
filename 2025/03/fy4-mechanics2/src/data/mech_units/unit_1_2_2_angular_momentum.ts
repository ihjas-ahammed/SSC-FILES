import { Unit } from '../../types';

export const UNIT_1_2_2_ANGULAR_MOMENTUM: Unit = {
  id: "unit-1-2-2",
  title: "Angular Momentum Lemma",
  description: "Why motion stays in a plane",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-2-2-1",
      title: "Proof: L is Constant",
      description: "Deriving conservation",
      icon: "ShieldCheck",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "To open a heavy door, you push the handle. What happens if you push *exactly* towards the hinges?",
          options: [
            { id: "A", text: "It opens easily.", isCorrect: false, explanation: "You have no leverage." },
            { id: "B", text: "It doesn't rotate.", isCorrect: true, explanation: "You create zero torque because your force vector passes through the axis of rotation." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Torque in Central Fields",
          content: "Torque is defined as ${\\tau} = \\mathbf{r} \\times \\mathbf{F}$.\n\nFor a central force, $\\mathbf{F}$ is parallel to $\\mathbf{r}$.\nTherefore, the cross product is zero:\n$$ {\\tau} = \\mathbf{r} \\times f(r)\\mathbf{\hat{r}} = 0 $$"
        },
        {
          id: "proof_L",
          type: "proof",
          title: "Derivation",
          content: "We prove angular momentum $\\mathbf{L}$ is constant.",
          proofSteps: [
            "Recall: ${\\tau} = \\frac{d\\mathbf{L}}{dt}$.",
            "From the previous slide, ${\\tau} = 0$.",
            "Therefore, $\\frac{d\\mathbf{L}}{dt} = 0$.",
            "Conclusion: $\\mathbf{L}$ is a constant vector in time."
          ]
        }
      ]
    },
    {
      id: "les-1-2-2-2",
      title: "Planar Motion Lemma",
      description: "Consequence of L conservation",
      icon: "Layers",
      slides: [
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ is a vector perpendicular to both position $\\mathbf{r}$ and velocity $\\mathbf{v}$. If $\\mathbf{L}$ never changes direction, can $\\mathbf{r}$ tilt out of its original plane?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "If r tilted up, L would have to tilt to stay perpendicular." },
            { id: "B", text: "No", isCorrect: true, explanation: "The position vector is locked into the plane perpendicular to L." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Motion is Planar",
          content: "Since $\\mathbf{L}$ is a constant vector, and by definition $\\mathbf{L} \\cdot \\mathbf{r} = 0$, the position vector $\\mathbf{r}$ is always confined to a fixed plane perpendicular to $\\mathbf{L}$.\n\n**Conclusion:** Central force motion is always a 2D problem."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visualizing Planar Motion",
          content: "The angular momentum vector L fixes the orientation of the orbital plane.",
          interactiveCanvasId: "planar-motion-plane"
        }
      ]
    },
    {
      id: "les-1-2-2-3",
      title: "Geometric Interpretation",
      description: "Kepler's Second Law",
      icon: "PenTool",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Figure 10.2 Interpretation",
          content: "In Figure 10.2 of standard texts, we see that the area swept out by the radius vector is related to angular momentum.\n\nThe differential area $dA$ swept in time $dt$ is:\n$$ dA = \\frac{1}{2} |\\mathbf{r} \\times d\\mathbf{r}| $$"
        },
        {
          id: "derivation",
          type: "proof",
          title: "Linking Area to L",
          content: "Let's connect Area to Angular Momentum.",
          proofSteps: [
            "Velocity $\\mathbf{v} = \\frac{d\\mathbf{r}}{dt} \\Rightarrow d\\mathbf{r} = \\mathbf{v}dt$.",
            "Substitute into Area: $dA = \\frac{1}{2} |\\mathbf{r} \\times \\mathbf{v}dt|$.",
            "Multiply by $m/m$: $\\frac{1}{2m} |\\mathbf{r} \\times m\\mathbf{v}| dt$.",
            "Recall $\\mathbf{L} = \\mathbf{r} \\times m\\mathbf{v}$.",
            "Result: $\\frac{dA}{dt} = \\frac{L}{2m}$."
          ]
        },
        {
          id: "vis_sweep",
          type: "interactive_canvas",
          title: "Area Sweep",
          content: "Visualizing the geometric definition of angular momentum.",
          interactiveCanvasId: "geometric-area-sweep"
        },
        {
          id: "conc",
          type: "theory",
          title: "Conclusion",
          content: "Since $L$ is constant, the areal velocity $\\frac{dA}{dt}$ is constant.\n\nThis is exactly **Kepler's Second Law**."
        }
      ]
    }
  ]
};