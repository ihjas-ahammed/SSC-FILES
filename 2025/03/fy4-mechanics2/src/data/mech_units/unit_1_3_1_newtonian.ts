import { Unit } from '../../types';

export const UNIT_1_3_1_NEWTONIAN: Unit = {
  id: "unit-1-3-1",
  title: "Newtonian Formulation",
  description: "Polar Coordinates Approach",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-3-1-1",
      title: "Vector Acceleration",
      description: "Recap of Polar Coordinates",
      icon: "MoveDiagonal",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "In polar coordinates, if you move in a straight line, does your radius $r$ change?",
          options: [
            { id: "A", text: "No", isCorrect: false, explanation: "Unless you move perfectly perpendicular to the origin (circular arc), r changes." },
            { id: "B", text: "Yes", isCorrect: true, explanation: "Also, your angle $\\theta$ changes." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Acceleration in Polar",
          content: "To define the equation of motion, we need acceleration $\\mathbf{a}$ in polar coordinates $(r, \\theta)$.\n\nRecall from kinematics:\n$$ \\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{\hat{r}} + (r\\ddot{\theta} + 2\\dot{r}\\dot{\theta})\\boldsymbol{\\hat{\\theta}} $$"
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Term check",
          content: "What does the term $-r\\dot{\\theta}^2$ represent?",
          options: [
            { id: "A", text: "Coriolis Acceleration", isCorrect: false, explanation: "That involves mixed derivatives like $\\dot{r}\\dot{\\theta}$." },
            { id: "B", text: "Centripetal Acceleration", isCorrect: true, explanation: "It points inward (negative radial) and depends on rotation speed." }
          ]
        }
      ]
    },
    {
      id: "les-1-3-1-2",
      title: "Scalar Equations",
      description: "Separating r and theta",
      icon: "Split",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "Newton's Second Law",
          content: "Apply $\\mathbf{F} = m\\mathbf{a}$. For a central force, $\\mathbf{F} = f(r)\\mathbf{\hat{r}}$. It has no angular component.\n\nRadial Component:\n$$ m(\\ddot{r} - r\\dot{\\theta}^2) = f(r) $$\n\nAngular Component:\n$$ m(r\\ddot{\theta} + 2\\dot{r}\\dot{\theta}) = 0 $$"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "The angular component of force in a central force field is always ___.",
          blankAnswer: "zero"
        }
      ]
    },
    {
      id: "les-1-3-1-3",
      title: "Eliminating Angular Speed",
      description: "Using angular momentum",
      icon: "RefreshCw",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "The radial equation $m\\ddot{r} - mr\\dot{\\theta}^2 = f(r)$ has two variables: $r$ and $\\theta$. We want an equation only in $r$.\n\nWe use the constant angular momentum $l$:\n$$ l = mr^2\\dot{\\theta} \\implies \\dot{\\theta} = \\frac{l}{mr^2} $$"
        },
        {
          id: "derivation",
          type: "proof",
          title: "Substitution",
          content: "Substitute $\\dot{\\theta}$ into the radial equation.",
          proofSteps: [
            "Start: $m\\ddot{r} - mr(\\dot{\\theta})^2 = f(r)$",
            "Substitute $\\dot{\\theta} = \\frac{l}{mr^2}$",
            "Term becomes: $mr(\\frac{l}{mr^2})^2 = mr \\frac{l^2}{m^2 r^4} = \\frac{l^2}{m r^3}$",
            "Result: $m\\ddot{r} - \\frac{l^2}{mr^3} = f(r)$"
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "We turned a 2D problem (r, theta) into a 1D problem (just r). What 'force' did we add to account for rotation?",
          options: [
            { id: "A", text: "Friction", isCorrect: false, explanation: "Space is a vacuum!" },
            { id: "B", text: "Centrifugal Force", isCorrect: true, explanation: "The term $l^2/mr^3$ acts like a repulsive fictitious force pushing outward." }
          ]
        }
      ]
    }
  ]
};