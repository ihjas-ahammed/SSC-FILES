import { Unit } from '../../types';

export const UNIT_2_1_1_MECHANICAL_SYSTEMS: Unit = {
  id: "unit-2-1-1",
  title: "Mechanical Systems",
  description: "Springs, Pendulums & Equations",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-1-1",
      title: "Figure 11.1 - Mass on Spring",
      description: "Defining SHM visually",
      icon: "MoveHorizontal",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "If you pull a mass on a spring twice as far from its resting point, what happens to the restoring force?",
          options: [
            { id: "A", text: "It becomes four times stronger.", isCorrect: false, explanation: "That would be a non-linear spring." },
            { id: "B", text: "It becomes two times stronger.", isCorrect: true, explanation: "Hooke's Law is linear: force is directly proportional to displacement." }
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Physical System",
          content: "A mass $m$ on a frictionless surface connected to a spring of constant $k$. The displacement $x$ is measured from equilibrium.",
          interactiveCanvasId: "mass-spring-system"
        }
      ]
    },
    {
      id: "les-2-1-1-2",
      title: "Equation of Motion (Spring)",
      description: "Deriving Eq 11.1",
      icon: "FunctionSquare",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Destination",
          content: "We aim to prove the fundamental equation of Simple Harmonic Motion:\n$$ \\ddot{x} + \\frac{k}{m}x = 0 $$"
        },
        {
          id: "proof",
          type: "proof",
          title: "The Derivation",
          content: "Use Newton's Second Law and Hooke's Law.",
          proofSteps: [
            "Newton's 2nd Law states $F = ma = m\\ddot{x}$.",
            "Hooke's Law states the restoring force is $F = -kx$.",
            "Equating the forces: $m\\ddot{x} = -kx$.",
            "Divide by $m$: $\\ddot{x} = -\\frac{k}{m}x$.",
            "Rearrange to get Eq 11.1: $\\ddot{x} + \\frac{k}{m}x = 0$."
          ],
          interactiveSteps: [
            {
              stepText: "What does the negative sign in $F = -kx$ represent?",
              options: [
                { id: "a", text: "The force opposes the displacement.", isCorrect: true, explanation: "It is a 'restoring' force pulling back to $x=0$." },
                { id: "b", text: "The force is moving left.", isCorrect: false, explanation: "If displacement is negative (left), the force is positive (right)." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-1-1-3",
      title: "Figure 11.2 - Simple Pendulum",
      description: "Angular SHM",
      icon: "Clock",
      slides: [
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Does a pendulum swing faster (shorter period) if you attach a heavier weight?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Mass cancels out in the equation of motion." },
            { id: "B", text: "No", isCorrect: true, explanation: "Gravity acts harder on more mass, but increased inertia resists it equally." }
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Pendulum",
          content: "A mass $m$ suspended by a string of length $l$. The angle $\\theta$ is measured from the vertical.",
          interactiveCanvasId: "simple-pendulum-swing"
        }
      ]
    },
    {
      id: "les-2-1-1-4",
      title: "Equation of Motion (Pendulum)",
      description: "Deriving Eq 11.2",
      icon: "RotateCw",
      slides: [
        {
          id: "proof",
          type: "proof",
          title: "Angular Dynamics",
          content: "Derive the exact nonlinear equation of motion.",
          proofSteps: [
            "Use the rotational analog to Newton's 2nd Law: $\\tau = I\\ddot{\\theta}$.",
            "Moment of Inertia for a point mass: $I = ml^2$.",
            "The restoring torque from gravity is $\\tau = -mg(l\\sin\\theta)$.",
            "Equate them: $ml^2\\ddot{\\theta} = -mgl\\sin\\theta$.",
            "Divide by $ml^2$ to get Eq 11.2: $\\ddot{\\theta} + \\frac{g}{l}\\sin\\theta = 0$."
          ]
        }
      ]
    },
    {
      id: "les-2-1-1-5",
      title: "Small Angle Approximation",
      description: "Deriving Eq 11.3",
      icon: "Minimize",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Linearizing the Equation",
          content: "The term $\\sin\\theta$ makes Eq 11.2 a non-linear differential equation, which is very hard to solve.\n\nFor small angles ($\\theta \\lesssim 20^\\circ$ or $0.35$ rad), we use the Taylor series expansion: $\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6} + \\dots$"
        },
        {
          id: "proof",
          type: "proof",
          title: "The SHM form",
          content: "Applying the approximation.",
          proofSteps: [
            "Assume $\\theta$ is small, so $\\sin\\theta \\approx \\theta$.",
            "Substitute into Eq 11.2: $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$."
          ],
          interactiveSteps: [
            {
              stepText: "Look at $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$ and $\\ddot{x} + \\frac{k}{m}x = 0$. What is the equivalent of 'spring constant' $k/m$ for the pendulum?",
              options: [
                { id: "a", text: "$g/l$", isCorrect: true, explanation: "Yes! So $\\omega^2 = g/l$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-1-1-6",
      title: "Exercise 11.1",
      description: "Substitution Proof",
      icon: "CheckCircle",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Challenge",
          content: "Prove by substitution that $x(t) = A\\cos(\\sqrt{k/m}t + B\\sin(\\sqrt{k/m}t)$ is a solution to $\\ddot{x} + \\frac{k}{m}x = 0$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Verification Steps",
          content: "Let $\\omega = \\sqrt{k/m}$. Then $x = A\\cos\\omega t + B\\sin\\omega t$.",
          interactiveSteps: [
            {
              stepText: "Find the first derivative $\\dot{x}$.",
              options: [
                { id: "a", text: "$\\dot{x} = -A\\omega\\sin\\omega t + B\\omega\\cos\\omega t$", isCorrect: true, explanation: "Chain rule pulls out $\\omega$." }
              ]
            },
            {
              stepText: "Find the second derivative $\\ddot{x}$.",
              options: [
                { id: "a", text: "$\\ddot{x} = -A\\omega^2\\cos\\omega t - B\\omega^2\\sin\\omega t$", isCorrect: true, explanation: "Pull out $\\omega$ again." }
              ]
            },
            {
              stepText: "Factor out $-\\omega^2$.",
              options: [
                { id: "a", text: "$\\ddot{x} = -\\omega^2 (A\\cos\\omega t + B\\sin\\omega t) = -\\omega^2 x$", isCorrect: true, explanation: "Since $-\\omega^2 = -k/m$, $\\ddot{x} = -(k/m)x$, proving it satisfies the ODE." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-1-1-7",
      title: "Exercise 11.2",
      description: "Spring Displacement",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "The Setup",
          content: "A spring stretches 6 cm when a force of 6 N is applied. A 5 kg mass is attached. It is pulled 3 cm ($0.03$ m) and released with an initial speed of $-6$ cm/s ($-0.06$ m/s).\n\nFind the angular frequency $\\omega$ in rad/s.",
          numericAnswer: 4.47,
          numericTolerance: 0.1
        },
        {
          id: "sol",
          type: "solution",
          title: "Solving for the Equation",
          content: "Use $x(t) = A\\cos\\omega t + B\\sin\\omega t$.",
          interactiveSteps: [
            {
              stepText: "Calculate $k = F/x$.",
              options: [
                { id: "a", text: "$k = 6 / 0.06 = 100$ N/m", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Calculate $\\omega = \\sqrt{k/m}$.",
              options: [
                { id: "a", text: "$\\omega = \\sqrt{100/5} = \\sqrt{20} \\approx 4.47$ rad/s", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Apply $x(0) = 0.03$. What is A?",
              options: [
                { id: "a", text: "$A = 0.03$", isCorrect: true, explanation: "At $t=0$, $\\sin(0)=0$ and $\\cos(0)=1$, so $x(0) = A$." }
              ]
            },
            {
              stepText: "Apply $\\dot{x}(0) = -0.06$. We know $\\dot{x}(0) = B\\omega$. What is B?",
              options: [
                { id: "a", text: "$B = -0.06 / \\sqrt{20} \\approx -0.013$", isCorrect: true, explanation: "Final equation: $x = 0.030\\cos(4.47t) - 0.013\\sin(4.47t)$ m." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-1-1-8",
      title: "Exercise 11.3",
      description: "Initial Conditions",
      icon: "Target",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Solving the Constants",
          content: "At $t=0$, an oscillator with $\\omega=2$ rad/s is at $x=3$ cm and has a speed of $1$ cm/s.\n\nFind the position $x$ at $t=1$ second. (Calculate in cm).",
          numericAnswer: -0.80, // x(t) = 3cos(2t) + (1/2)sin(2t). At t=1: 3*cos(2) + 0.5*sin(2) = 3(-0.416) + 0.5(0.909) = -1.248 + 0.454 = -0.794.
          numericTolerance: 0.1
        },
        {
          id: "error_check",
          type: "quiz",
          title: "Spot the Error",
          content: "A student writes $B = v(0) = 1$ cm. Why is this wrong?",
          options: [
            { id: "A", text: "Because B must be in meters.", isCorrect: false, explanation: "Units can be consistent in cm." },
            { id: "B", text: "Because $\\dot{x}(0) = B\\omega$, so $B = v(0)/\\omega$.", isCorrect: true, explanation: "The derivative of sine brings out an $\\omega$. So $B = 1/2 = 0.5$ cm." }
          ]
        }
      ]
    }
  ]
};