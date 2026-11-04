import { Unit } from '../../types';

export const UNIT_1_3_2_LAGRANGIAN: Unit = {
  id: "unit-1-3-2",
  title: "Lagrangian Formulation",
  description: "Energy based approach",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-3-2-1",
      title: "The Lagrangian",
      description: "L = T - V",
      icon: "Activity",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "What is the Lagrangian $L$ defined as?",
          options: [
            { id: "A", text: "Kinetic + Potential Energy ($T+V$)", isCorrect: false, explanation: "That's the Hamiltonian (Total Energy)." },
            { id: "B", text: "Kinetic - Potential Energy ($T-V$)", isCorrect: true, explanation: "Correct." }
          ]
        },
        {
          id: "derive_T",
          type: "proof",
          title: "Kinetic Energy T",
          content: "In polar coordinates, velocity is $\\mathbf{v} = \\dot{r}\\mathbf{\hat{r}} + r\\dot{\\theta}\\boldsymbol{\\hat{\\theta}}$.",
          proofSteps: [
            "$v^2 = \\mathbf{v} \\cdot \\mathbf{v} = \\dot{r}^2 + (r\\dot{\\theta})^2$",
            "$T = \\frac{1}{2}m v^2 = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2)$"
          ]
        },
        {
          id: "result_L",
          type: "theory",
          title: "The Lagrangian Function",
          content: "Since Potential Energy $V$ depends only on $r$:\n\n$$ L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2) - V(r) $$"
        }
      ]
    },
    {
      id: "les-1-3-2-2",
      title: "Euler-Lagrange Equations",
      description: "Deriving Equations of Motion",
      icon: "FunctionSquare",
      slides: [
        {
          id: "anchor",
          type: "theory",
          title: "The Formula",
          content: "The Euler-Lagrange equation is:\n$$ \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}}\\right) - \\frac{\\partial L}{\\partial q} = 0 $$"
        },
        {
          id: "derive_r",
          type: "proof",
          title: "Radial Equation",
          content: "Let $q = r$.",
          proofSteps: [
            "$\\frac{\\partial L}{\\partial \\dot{r}} = m\\dot{r} \\implies \\frac{d}{dt}(m\\dot{r}) = m\\ddot{r}$",
            "$\\frac{\\partial L}{\\partial r} = m r \\dot{\\theta}^2 - \\frac{\\partial V}{\\partial r}$",
            "Combine: $m\\ddot{r} - (mr\\dot{\\theta}^2 - \\frac{\\partial V}{\\partial r}) = 0$",
            "Rearrange: $m\\ddot{r} - mr\\dot{\\theta}^2 = -\\frac{\\partial V}{\\partial r} = f(r)$"
          ]
        }
      ]
    },
    {
      id: "les-1-3-2-3",
      title: "Cyclic Coordinates",
      description: "Why l is constant",
      icon: "Repeat",
      slides: [
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Does the Lagrangian $L$ contain the angle $\\theta$ explicitly?",
          options: [
            { id: "A", text: "Yes, inside V(r).", isCorrect: false, explanation: "V depends only on r, not theta." },
            { id: "B", text: "No, $\\theta$ is 'missing'.", isCorrect: true, explanation: "We call this a 'cyclic' or 'ignorable' coordinate." }
          ]
        },
        {
          id: "lemma",
          type: "proof",
          title: "Proof of Constant Momentum",
          content: "Let $q = \\theta$.",
          proofSteps: [
            "$\\frac{\\partial L}{\\partial \\theta} = 0$ (Cyclic)",
            "Euler-Lagrange: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{\\theta}}\\right) - 0 = 0$",
            "This implies $\\frac{\\partial L}{\\partial \\dot{\\theta}}$ is constant.",
            "Calculate: $\\frac{\\partial L}{\\partial \\dot{\\theta}} = m r^2 \\dot{\\theta} = l$",
            "Conclusion: Angular momentum $l$ is conserved."
          ]
        }
      ]
    }
  ]
};