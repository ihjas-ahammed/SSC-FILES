import { Unit } from '../../types';

export const UNIT_3_1_3_SECTION_SUMMARY: Unit = {
  id: "unit-3-1-3",
  title: "Section 3.1 Summary",
  description: "Review of Wave Parameters and Equation",
  color: "duo-violet",
  lessons:[
    {
      id: "les-3-1-3-1",
      title: "Summary: Wave Parameters",
      description: "Recap of Unit 1",
      icon: "List",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Does the linear wave equation apply to all types of waves perfectly?",
          options:[
            { id: "A", text: "Yes", isCorrect: false, explanation: "It is a linear approximation. Real waves (like breaking ocean waves) are non-linear." },
            { id: "B", text: "No, it assumes small amplitudes.", isCorrect: true, explanation: "We used the small angle approximation $\\sin\\theta \\approx \\tan\\theta$." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Is Phase Velocity determined by how fast you shake the string?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "Phase velocity is determined by the medium ($F$ and $\\rho$). Shaking faster just changes frequency and wavelength inversely." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Parameters Review",
          content: "A traveling wave transports energy and momentum without transporting mass.\n\n*   $A$: Amplitude\n*   $\\lambda$: Wavelength\n*   $f$: Frequency\n*   $\\tau$: Period ($1/f$)\n*   $\\omega$: Angular Frequency ($2\\pi f$)\n*   $k$: Wave number ($2\\pi / \\lambda$)\n*   $v$: Phase Velocity ($\\lambda f = \\omega / k$)"
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "Visual Summary",
          content: "Remember the relation between wavelength, amplitude, and phase velocity.",
          interactiveCanvasId: "wave-parameters"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Quick Derivation Recap",
          content: "Remember how we relate $v, \\omega, k$?",
          proofSteps:[
            "$v = \\lambda / \\tau$",
            "$\\lambda = 2\\pi / k$",
            "$\\tau = 2\\pi / \\omega$",
            "$v = (2\\pi / k) / (2\\pi / \\omega) = \\omega / k$"
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Quick Calculation",
          content: "If $\\lambda = 2$ m and $v = 10$ m/s, what is $f$ in Hz?",
          numericAnswer: 5,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What does wave number $k$ measure?",
          options:[
            { id: "A", text: "Radians per meter", isCorrect: true, explanation: "Spatial frequency." },
            { id: "B", text: "Radians per second", isCorrect: false }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The distance between two consecutive peaks is the ___.",
          blankAnswer: "wavelength"
        }
      ]
    },
    {
      id: "les-3-1-3-2",
      title: "Summary: The Wave Equation",
      description: "Recap of Unit 2",
      icon: "FunctionSquare",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "The Wave Equation is derived from:",
          options:[
            { id: "A", text: "Conservation of Energy", isCorrect: false },
            { id: "B", text: "Newton's Second Law", isCorrect: true, explanation: "Applied to an infinitesimal string segment." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "The restoring force in a stretched string is provided by:",
          options:[
            { id: "A", text: "Tension", isCorrect: true, explanation: "Tension pulls the curved string back to flat." },
            { id: "B", text: "Gravity", isCorrect: false }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Equation Review",
          content: "By applying $F=ma$ to a segment of mass $dm = \\rho dx$ under uniform tension $F$, and assuming small angles so $\\sin\\theta \\approx \\tan\\theta = \\partial y/\\partial x$, we derived the Linear Wave Equation:\n\n$$ \\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2} $$\n\nWhere the phase velocity is $v = \\sqrt{F/\\rho}$."
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "Curvature & Acceleration",
          content: "High curvature = high acceleration.",
          interactiveCanvasId: "linear-wave-equation"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Key Step Reminder",
          content: "The critical approximation step:",
          proofSteps:[
            "Vertical force component is $F\\sin\\theta$.",
            "Assume small amplitude: $\\sin\\theta \\approx \\tan\\theta$.",
            "Calculus: $\\tan\\theta$ is the slope $\\partial y / \\partial x$.",
            "This transforms force into a geometric property of the curve."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Speed Dependency",
          content: "If you quadruple ($4\\times$) the tension $F$, by what factor does the wave speed $v$ increase?",
          numericAnswer: 2,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What does $\\partial^2 y / \\partial x^2$ represent physically on the string?",
          options:[
            { id: "A", text: "Velocity", isCorrect: false },
            { id: "B", text: "Curvature", isCorrect: true, explanation: "The second spatial derivative is the concavity or curvature." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The speed of a wave on a string is the square root of ___ divided by linear mass density.",
          blankAnswer: "tension"
        }
      ]
    }
  ]
};