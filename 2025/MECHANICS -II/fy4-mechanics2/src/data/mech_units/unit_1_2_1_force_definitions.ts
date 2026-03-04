import { Unit } from '../../types';

export const UNIT_1_2_1_FORCE_DEFINITIONS: Unit = {
  id: "unit-1-2-1",
  title: "Defining Central Forces",
  description: "Gravity, Electrostatics & Potential Energy",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-2-1-1",
      title: "General Vector Form",
      description: "Definition of Central Force",
      icon: "Target",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "If you tie a rock to a string and swing it in a circle, in which direction does the force from the string pull the rock?",
          options: [
            { id: "A", text: "Forward, tangent to the circle.", isCorrect: false, explanation: "That would make it speed up linearly, not turn." },
            { id: "B", text: "Inward, towards your hand.", isCorrect: true, explanation: "This 'center-seeking' force is a classic example of a central force." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Does a true 'Central Force' depend on the angle $\\theta$ (like North vs South)?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "If it depended on angle, the system wouldn't have spherical symmetry." },
            { id: "B", text: "No", isCorrect: true, explanation: "It depends *only* on the distance $r$ from the origin." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Mathematical Definition",
          content: "A force is a **Central Force** if it satisfies two conditions:\n\n1. It is always directed toward or away from a fixed point (the origin).\n2. Its magnitude depends *only* on the distance $r$.\n\n$$ \\mathbf{F} = f(r)\\mathbf{\hat{r}} $$"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visualizing Central Force",
          content: "The force vector is always parallel (or antiparallel) to the position vector.",
          interactiveCanvasId: "central-force-vector"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "In a central force field, the force magnitude is a function only of the distance ___.",
          blankAnswer: "r"
        }
      ]
    },
    {
      id: "les-1-2-1-2",
      title: "Gravitational Force",
      description: "The Inverse Square Law",
      icon: "Globe",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "If the Earth were twice as far from the Sun, how strong would the gravitational pull be?",
          options: [
            { id: "A", text: "Half as strong ($1/2$)", isCorrect: false, explanation: "Gravity is an inverse-square law." },
            { id: "B", text: "One quarter as strong ($1/4$)", isCorrect: true, explanation: "Since $F \\propto 1/r^2$, doubling distance reduces force by $2^2 = 4$." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Newton's Law of Gravitation",
          content: "The most famous central force is gravity. For a mass $m$ attracted to a larger mass $M$ at the origin:\n\n$$ \\mathbf{F} = -\\frac{GMm}{r^2}\\mathbf{\hat{r}} $$\n\nNote the **negative sign**: Gravity is always attractive (points towards the center, opposite to $\\mathbf{\\hat{r}}$)."
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Vector Check",
          content: "Why do we include $\\mathbf{\\hat{r}}$ in the formula?",
          options: [
            { id: "A", text: "To make the equation look complicated.", isCorrect: false, explanation: "Physics is about precision, not complexity!" },
            { id: "B", text: "To indicate direction.", isCorrect: true, explanation: "Force is a vector. The magnitude is $GMm/r^2$, and the direction is along the radius." }
          ]
        }
      ]
    },
    {
      id: "les-1-2-1-3",
      title: "Electrostatic Force",
      description: "Coulomb's Law",
      icon: "Zap",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "How is the electric force between two protons different from the gravitational force between them?",
          options: [
            { id: "A", text: "It is attractive.", isCorrect: false, explanation: "Like charges repel." },
            { id: "B", text: "It is repulsive.", isCorrect: true, explanation: "Both are central forces, but gravity is always attractive while electric force can be repulsive." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Coulomb's Law",
          content: "The electrostatic force between two charges $q_1$ and $q_2$ is:\n\n$$ \\mathbf{F} = \\frac{q_1q_2}{4\\pi\\epsilon_0 r^2}\\mathbf{\hat{r}} $$\n\nIf $q_1$ and $q_2$ have the same sign, the product is positive, $\\mathbf{F}$ is along $+\\mathbf{\\hat{r}}$ (Repulsive).\nIf signs differ, $\\mathbf{F}$ is along $-\\mathbf{\\hat{r}}$ (Attractive)."
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Comparison",
          content: "What mathematical feature do Gravity and Electrostatics share?",
          options: [
            { id: "A", text: "They are both Inverse Square Laws ($1/r^2$).", isCorrect: true, explanation: "This shared structure means they result in very similar orbital mechanics (Kepler-style orbits)." },
            { id: "B", text: "They are both always attractive.", isCorrect: false, explanation: "Only gravity is always attractive." }
          ]
        }
      ]
    },
    {
      id: "les-1-2-1-4",
      title: "Lennard-Jones Force",
      description: "Molecular Interactions",
      icon: "Atom",
      slides: [
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Imagine two neutral atoms floating in space. If they get extremely close, what happens?",
          options: [
            { id: "A", text: "They pass through each other.", isCorrect: false, explanation: "Electron clouds repel each other strongly at short range." },
            { id: "B", text: "They push apart (Repel).", isCorrect: true, explanation: "At very short range, repulsion dominates. At medium range, slight attraction dominates." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "The Molecular Force",
          content: "Between neutral molecules, the force is complex. It is **repulsive** at short range (due to Pauli exclusion) and **attractive** at long range (Van der Waals).\n\nThis is modeled by the **Lennard-Jones Potential**:\n$$ V(r) = 4\\epsilon \\left[ \\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^6 \\right] $$"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Potential Well",
          content: "Notice the 'well' shape. Matter prefers to sit at the bottom of this well (stable equilibrium).",
          interactiveCanvasId: "lennard-jones-potential"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "In the Lennard-Jones potential, the $1/r^{12}$ term represents the ___ part of the interaction.",
          blankAnswer: "repulsive"
        }
      ]
    },
    {
      id: "les-1-2-1-5",
      title: "Potential Energy Derivation",
      description: "Force as Gradient",
      icon: "TrendingDown",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Conservative Forces",
          content: "Central forces depend only on $r$. This makes them **conservative forces**.\n\nAny conservative force can be expressed as the negative gradient of a potential energy $V(r)$:\n$$ \\mathbf{F} = -\\nabla V(r) $$"
        },
        {
          id: "proof_step",
          type: "proof",
          title: "Deriving V(r)",
          content: "Let's connect Force $f(r)$ to Potential $V(r)$.",
          proofSteps: [
            "We know $\\mathbf{F} = f(r)\\mathbf{\hat{r}}$.",
            "In spherical coordinates, gradient $\\nabla V = \\frac{\\partial V}{\\partial r}\\mathbf{\hat{r}} + \\dots$",
            "Since $V$ depends only on $r$, angular terms are zero.",
            "So, $\\mathbf{F} = -\\frac{dV}{dr}\\mathbf{\hat{r}}$.",
            "Scalar form: $f(r) = -\\frac{dV}{dr}$."
          ]
        },
        {
          id: "check",
          type: "quiz",
          title: "Concept Check",
          content: "If the potential energy $V(r)$ is constant everywhere, what is the force?",
          options: [
            { id: "A", text: "Infinite", isCorrect: false, explanation: "Derivative of a constant is zero." },
            { id: "B", text: "Zero", isCorrect: true, explanation: "No change in potential means no force driving the particle." }
          ]
        }
      ]
    }
  ]
};