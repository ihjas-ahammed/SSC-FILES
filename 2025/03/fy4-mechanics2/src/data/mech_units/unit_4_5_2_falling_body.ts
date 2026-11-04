import { Unit } from '../../types';

export const UNIT_4_5_2_FALLING_BODY: Unit = {
  id: "unit-4-5-2",
  title: "452 (Falling Body)",
  description: "Coriolis Deflection of a Dropped Object",
  color: "duo-orange",
  lessons:[
    {
      id: "les-4-5-2-1",
      title: "Zeroth-Order Approximation",
      description: "Setting the baseline velocity",
      icon: "ArrowDown",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Why can't we easily solve the exact equations of motion for a falling body with the Coriolis force included?",
          options:[
            { id: "A", text: "Because the Coriolis force depends on velocity, which is constantly changing as it falls.", isCorrect: true, explanation: "This creates coupled differential equations that are difficult to integrate directly." },
            { id: "B", text: "Because gravity changes as it falls.", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Successive Approximations",
          content: "Because the Coriolis force is very small compared to gravity, we use a perturbation technique called the **method of successive approximations**.\n\nFirst, we solve the \"unperturbed\" problem ignoring the Earth's rotation to find a baseline velocity. We call this the **zeroth-order approximation**."
        },
        {
          id: "proof",
          type: "proof",
          title: "The Unperturbed Fall",
          content: "Dropping a mass $m$ from rest at height $h$.",
          proofSteps:[
            "Acceleration is purely due to effective gravity: $\\mathbf{a} = -g_e \\mathbf{\\hat{k}}$.",
            "Integrate to find velocity: $\\mathbf{v}_r = -g_e t \\mathbf{\\hat{k}}$.",
            "So $v_x = 0$, $v_y = 0$, and $v_z = -g_e t$."
          ]
        }
      ]
    },
    {
      id: "les-4-5-2-2",
      title: "Eastward Deflection",
      description: "The First-Order Approximation",
      icon: "ArrowRight",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "First-Order Coriolis Force",
          content: "Now we substitute our zeroth-order velocity ($v_x = 0, v_y = 0, v_z = -g_e t$) into the Coriolis acceleration formulas we derived in the last unit."
        },
        {
          id: "proof",
          type: "proof",
          title: "Calculating the Deflection",
          content: "Finding the horizontal shift.",
          proofSteps:[
            "Recall $a_x = 2\\Omega (v_y \\cos \\lambda - v_z \\sin \\lambda)$.",
            "Substitute zeroth-order velocity: $a_x = 2\\Omega (0 - (-g_e t) \\sin \\lambda) = 2\\Omega g_e t \\sin \\lambda$.",
            "Integrate once for x-velocity: $v_x = \\Omega g_e t^2 \\sin \\lambda$.",
            "Integrate again for x-position: $x = \\frac{1}{3} \\Omega g_e t^3 \\sin \\lambda$."
          ]
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Falling Deflection",
          content: "The object lands slightly East of the vertical plumb line.",
          interactiveCanvasId: "falling-body-deflection"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Physical Interpretation",
          content: "From the perspective of an inertial observer floating in space, why does the falling object land to the East?",
          options:[
            { id: "A", text: "The object was pulled by a mysterious force.", isCorrect: false },
            { id: "B", text: "The object was dropped from a tower, meaning it started further from the Earth's center and thus had a higher initial eastward velocity than the ground below it.", isCorrect: true, explanation: "As it falls, it retains this \"excess\" eastward velocity, overtaking the ground rotating beneath it." }
          ]
        }
      ]
    },
    {
      id: "les-4-5-2-3",
      title: "Worked Example 15.2",
      description: "Southward Deflection (Second-Order)",
      icon: "ArrowDownRight",
      slides:[
        {
          id: "prob",
          type: "example_q",
          title: "Worked Example 15.2",
          content: "To first order, a falling particle is not deflected towards the South. \n\nHowever, there is a southward deflection in the **second-order approximation**. Estimate this deviation."
        },
        {
          id: "sol",
          type: "solution",
          title: "Second-Order Approximation",
          content: "We now plug our *first-order* velocity back into the Coriolis equations.",
          interactiveSteps:[
            {
              prompt: "In the first-order approximation, the particle acquired an eastward velocity $v_x = \\Omega g_e t^2 \\sin \\lambda$. What is the formula for the y-acceleration $a_y$?",
              options:[
                { id: "A", text: "$a_y = -2\\Omega v_x \\cos \\lambda$", isCorrect: true, explanation: "This was derived from the cross product in Unit 451." }
              ]
            },
            {
              prompt: "Substitute the first-order $v_x$ into the $a_y$ equation.",
              options:[
                { id: "A", text: "$a_y = -2\\Omega (\\Omega g_e t^2 \\sin \\lambda) \\cos \\lambda = -2\\Omega^2 g_e t^2 \\sin \\lambda \\cos \\lambda$", isCorrect: true, explanation: "This is a very small acceleration because it depends on $\\Omega^2$." }
              ]
            },
            {
              prompt: "Integrate $a_y$ twice with respect to time to find the southward displacement $y$.",
              options:[
                { id: "A", text: "$y = -\\frac{1}{6} \\Omega^2 g_e t^4 \\sin \\lambda \\cos \\lambda$", isCorrect: true, explanation: "Integration of $t^2$ gives $t^3/3$, and again gives $t^4/12$. Wait, $2/12 = 1/6$. Correct!" }
              ]
            },
            {
              prompt: "Using the time of flight $t \\approx \\sqrt{2h/g_e}$, what is the final expression for $y$?",
              options:[
                { id: "A", text: "$y = -\\frac{2h^2}{3g_e} \\Omega^2 \\cos \\lambda \\sin \\lambda$", isCorrect: true, explanation: "Substitute $t^4 = 4h^2/g_e^2$. Then $-\\frac{1}{6} (4h^2/g_e^2) g_e = -\\frac{2h^2}{3g_e}$. This is a tiny, second-order southward deflection!" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-5-2-4",
      title: "Exercise 15.4",
      description: "Force Diagrams",
      icon: "Crosshair",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 15.4",
          content: "Draw force diagrams to determine the direction of the Coriolis force ($\\mathbf{F}_c = -2m\\mathbf{\\Omega} \times \\mathbf{v}$) on the following objects:\n(a) A falling stone.\n(b) A projectile fired due North in the Northern Hemisphere.\n(c) A projectile fired due East in the Northern Hemisphere.\n(d) A projectile fired due East in the Southern Hemisphere."
        },
        {
          id: "sol",
          type: "solution",
          title: "Right-Hand Rule Practice",
          content: "Use the right-hand rule to find the direction of $-\\mathbf{\\Omega} \times \\mathbf{v}$, or alternatively, $\\mathbf{v} \times \\mathbf{\\Omega}$.",
          interactiveSteps:[
            {
              prompt: "(a) A falling stone ($\\mathbf{v}$ points Down). $\\mathbf{\\Omega}$ points generally North and Up. Which way does $\\mathbf{v} \times \\mathbf{\\Omega}$ point?",
              options:[
                { id: "A", text: "East", isCorrect: true, explanation: "Fingers Down, curl North/Up, thumb points East. This matches our derivation." }
              ]
            },
            {
              prompt: "(b) Projectile fired North. $\\mathbf{v}$ points North. $\\mathbf{\\Omega}$ points North and Up. $\\mathbf{v} \times \\mathbf{\\Omega}$?",
              options:[
                { id: "A", text: "East", isCorrect: true, explanation: "Fingers North, curl Up, thumb points East. It deflects to the right." }
              ]
            },
            {
              prompt: "(c) Projectile fired East in Northern Hemisphere. $\\mathbf{v}$ points East. $\\mathbf{\\Omega}$ points North and Up. $\\mathbf{v} \times \\mathbf{\\Omega}$?",
              options:[
                { id: "A", text: "South and Up", isCorrect: true, explanation: "Fingers East, curl North/Up, thumb points South and Up. It deflects to the right (South) and feels slightly \"lighter\" (Up)." }
              ]
            },
            {
              prompt: "(d) Projectile fired East in Southern Hemisphere. $\\mathbf{\\Omega}$ still points North and Up, but relative to the local ground, the Up component is actually pointing into the ground! What is the horizontal deflection?",
              options:[
                { id: "A", text: "North (Left)", isCorrect: true, explanation: "In the Southern Hemisphere, the Coriolis force deflects moving objects to their left." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-5-2-5",
      title: "Exercise 15.5",
      description: "Numerical calculation of deflection",
      icon: "Calculator",
      slides:[
        {
          id: "prob",
          type: "numerical",
          title: "Dropping a Stone",
          content: "A stone is dropped from a height of $h = 50$ m at a latitude of $60^\\circ$ N (so colatitude $\\lambda = 30^\\circ$).\n\nCalculate the eastward deflection in cm.\nAssume $g = 9.8$ m/s$^2$ and $\\Omega = 7.29 \\times 10^{-5}$ rad/s.\nUse $x = \\frac{1}{3} \\Omega g t^3 \\sin \\lambda$.",
          numericAnswer: 0.39,
          numericTolerance: 0.05
        },
        {
          id: "sol",
          type: "solution",
          title: "Step-by-Step",
          content: "First find the time of flight.",
          interactiveSteps:[
            {
              prompt: "Calculate $t = \\sqrt{2h/g}$.",
              options:[
                { id: "A", text: "$t \\approx 3.19$ s", isCorrect: true, explanation: "$\\sqrt{100/9.8} \\approx 3.194$." }
              ]
            },
            {
              prompt: "Calculate $t^3$.",
              options:[
                { id: "A", text: "$t^3 \\approx 32.6$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Substitute into $x = \\frac{1}{3} \\Omega g t^3 \\sin(30^\\circ)$. Note that $\\sin(30^\\circ) = 0.5$.",
              options:[
                { id: "A", text: "$x \\approx 0.0039$ m = $0.39$ cm", isCorrect: true, explanation: "$\\frac{1}{3} (7.29 \\times 10^{-5}) (9.8) (32.6) (0.5) \\approx 0.00388$ m." }
              ]
            }
          ]
        }
      ]
    }
  ]
};