import { Unit } from '../../types';

export const UNIT_1_3_3_MOTION_PRACTICE: Unit = {
  id: "unit-1-3-3",
  title: "Motion Practice",
  description: "Virial Theorem & Exercises",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-3-3-1",
      title: "Virial Theorem",
      description: "Worked Example 10.2",
      icon: "Scale",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "**Worked Example 10.2:**\n\nConsider a particle in a potential $V(r) = kr^{n+1}$.\nShow that for a periodic orbit, the average kinetic energy $\\langle T \\rangle$ is related to average potential energy $\\langle V \\rangle$ by:\n\n$$ \\langle T \\rangle = \\frac{n+1}{2} \\langle V \\rangle $$"
        },
        {
          id: "step1",
          type: "proof",
          title: "Step 1: Euler's Theorem",
          content: "We use the time average of the derivative of quantity $G = \\mathbf{p} \\cdot \\mathbf{r}$.",
          proofSteps: [
            "$\\frac{dG}{dt} = \\dot{\\mathbf{p}} \\cdot \\mathbf{r} + \\mathbf{p} \\cdot \\dot{\\mathbf{r}}$",
            "Term 2: $\\mathbf{p} \\cdot \\mathbf{v} = mv^2 = 2T$",
            "Term 1: $\\mathbf{F} \\cdot \\mathbf{r} = -\\nabla V \\cdot \\mathbf{r}$"
          ]
        },
        {
          id: "step2",
          type: "proof",
          title: "Step 2: Potential Scaling",
          content: "For $V = k r^{n+1}$, calculate $-\\nabla V \\cdot \\mathbf{r}$.",
          proofSteps: [
            "$F = -\\frac{dV}{dr} = -(n+1)k r^n$",
            "$\\mathbf{F} \\cdot \\mathbf{r} = -(n+1)k r^n \\cdot r = -(n+1) k r^{n+1}$",
            "$\\mathbf{F} \\cdot \\mathbf{r} = -(n+1) V$"
          ]
        },
        {
          id: "step3",
          type: "proof",
          title: "Step 3: Averaging",
          content: "The time average of a total time derivative $\\frac{dG}{dt}$ over a bounded period is zero.",
          proofSteps: [
            "$\\langle \\frac{dG}{dt} \\rangle = 0 = \\langle 2T \\rangle + \\langle -(n+1)V \\rangle$",
            "$2\\langle T \\rangle = (n+1)\\langle V \\rangle$",
            "$\\langle T \\rangle = \\frac{n+1}{2} \\langle V \\rangle$"
          ]
        }
      ]
    },
    {
      id: "les-1-3-3-2",
      title: "Exercise 10.5",
      description: "Deriving Kinetic Energy",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "fill_in_blank",
          title: "Exercise 10.5",
          content: "Show that $T = \\frac{1}{2}m\\dot{r}^2 + \\frac{1}{2}mr^2\\dot{\\theta}^2$. \n\nFill in the blank: The velocity vector in polar coordinates is $\\mathbf{v} = \\dot{r}\\mathbf{\\hat{r}} + ___ \\boldsymbol{\\hat{\\theta}}$.",
          blankAnswer: "r\\dot{\\theta}"
        }
      ]
    },
    {
      id: "les-1-3-3-3",
      title: "Exercise 10.6",
      description: "Deriving Equations 10.6/10.7",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Exercise 10.6",
          content: "Obtain the equations of motion from the Lagrangian method again, but explicitly write out the derivatives."
        },
        {
          id: "sol",
          type: "solution",
          title: "Lagrange Derivatives",
          content: "Calculate $\\frac{d}{dt}(mr^2\\dot{\\theta})$.",
          interactiveSteps: [
            {
              stepText: "Apply product rule to $m r^2 \\dot{\\theta}$.",
              options: [
                { id: "a", text: "$m(2r\\dot{r}\\dot{\\theta} + r^2\\ddot{\\theta})$", isCorrect: true, explanation: "We must differentiate $r^2$ (giving $2r\\dot{r}$) and $\\dot{\\theta}$ (giving $\\ddot{\\theta}$)." },
                { id: "b", text: "$m r^2 \\ddot{\\theta}$", isCorrect: false, explanation: "You forgot that $r$ changes with time!" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-1-3-3-4",
      title: "Exercise 10.7",
      description: "Linear Restoring Force",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Exercise 10.7",
          content: "Suppose $\\mathbf{F} = -kr\\mathbf{\\hat{r}}$. Obtain the Lagrangian and equation of motion."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Determine the potential and Lagrangian.",
          interactiveSteps: [
            {
              stepText: "Find V(r).",
              options: [
                { id: "a", text: "$\\frac{1}{2}kr^2$", isCorrect: true, explanation: "Integral of $kr$ is $kr^2/2$." }
              ]
            },
            {
              stepText: "Write the Radial Equation.",
              options: [
                { id: "a", text: "$m\\ddot{r} - mr\\dot{\\theta}^2 + kr = 0$", isCorrect: true, explanation: "Using $f(r) = -kr$." }
              ]
            }
          ]
        }
      ]
    }
  ]
};