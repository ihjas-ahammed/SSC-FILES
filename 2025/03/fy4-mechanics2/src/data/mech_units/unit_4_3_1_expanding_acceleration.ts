import { Unit } from '../../types';

export const UNIT_4_3_1_EXPANDING_ACCELERATION: Unit = {
  id: "unit-4-3-1",
  title: "431 (Expanding Acceleration)",
  description: "Deriving Fictitious Forces",
  color: "duo-green",
  lessons:[
    {
      id: "les-4-3-1-1",
      title: "Derivation: Acceleration Operator",
      description: "Applying the operator twice",
      icon: "FunctionSquare",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Since velocity is the rate of change of position, and acceleration is the rate of change of velocity, how many times must we apply our rotating frame operator $[d/dt]_{in} = [d/dt]_{rot} + \\mathbf{\\Omega} \\times$ to find acceleration?",
          options:[
            { id: "A", text: "Once", isCorrect: false },
            { id: "B", text: "Twice", isCorrect: true, explanation: "We apply it first to position $\\mathbf{r}$ to get velocity, and then again to the resulting velocity expression to get acceleration." }
          ]
        },
        {
          id: "proof",
          type: "proof",
          title: "Expanding the Acceleration",
          content: "Let's apply the operator twice to position $\\mathbf{r}$. Assume Earth's rotation rate is constant ($\\dot{\\mathbf{\\Omega}} = 0$).",
          proofSteps:[
            "Step 1 (Velocity): $\\mathbf{v}_{in} = [\\frac{d\\mathbf{r}}{dt}]_{in} = \\mathbf{v}_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r}$",
            "Step 2 (Acceleration): $\\mathbf{a}_{in} = [\\frac{d}{dt}]_{in} (\\mathbf{v}_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r})$",
            "Apply operator: $\\mathbf{a}_{in} = [\\frac{d}{dt}]_{rot} (\\mathbf{v}_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r}) + \\mathbf{\\Omega} \\times (\\mathbf{v}_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r})$",
            "Expand 1st term: $\\mathbf{a}_{rot} + \\mathbf{\\Omega} \\times \\mathbf{v}_{rot}$ (since $\\dot{\\mathbf{\\Omega}}=0$)",
            "Expand 2nd term: $\\mathbf{\\Omega} \\times \\mathbf{v}_{rot} + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$",
            "Combine: $\\mathbf{a}_{in} = \\mathbf{a}_{rot} + 2\\mathbf{\\Omega} \\times \\mathbf{v}_{rot} + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$"
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "If a particle is perfectly at rest on the rotating Earth (so $\\mathbf{v}_{rot} = 0$ and $\\mathbf{a}_{rot} = 0$), what is its acceleration in inertial space?",
          options:[
            { id: "A", text: "Zero", isCorrect: false },
            { id: "B", text: "$\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$", isCorrect: true, explanation: "This non-zero term represents the centripetal acceleration of a point on the surface of the spinning Earth." }
          ]
        }
      ]
    },
    {
      id: "les-4-3-1-2",
      title: "The Coriolis Force Term",
      description: "Motion-dependent fictitious force",
      icon: "Wind",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Newton's Second Law",
          content: "We know $m\\mathbf{a}_{in} = \\mathbf{F}_{real}$. \nSubstituting our expanded acceleration gives:\n$$ \\mathbf{F}_{real} = m\\mathbf{a}_{rot} + 2m\\mathbf{\\Omega} \\times \\mathbf{v}_{rot} + m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r}) $$\nRearranging to solve for the motion as seen by the rotating observer:\n$$ m\\mathbf{a}_{rot} = \\mathbf{F}_{real} - 2m\\mathbf{\\Omega} \\times \\mathbf{v}_{rot} - m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r}) $$"
        },
        {
          id: "def",
          type: "theory",
          title: "The Coriolis Term",
          content: "The term **$-2m\\mathbf{\\Omega} \\times \\mathbf{v}_{rot}$** is called the **Coriolis Force**.\n\nNotice that it depends directly on the particle's velocity relative to the rotating frame, $\\mathbf{v}_{rot}$. If the particle is stationary relative to the ground, the Coriolis force is zero. It always acts perpendicular to the velocity vector, causing moving objects to veer sideways."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "In what direction does the Coriolis force act relative to the object's velocity?",
          options:[
            { id: "A", text: "Parallel to the velocity", isCorrect: false },
            { id: "B", text: "Perpendicular to the velocity", isCorrect: true, explanation: "Because it involves a cross product $\\mathbf{\\Omega} \\times \\mathbf{v}$, the resulting force is orthogonal to both vectors." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The Coriolis force only affects objects that are ___ relative to the rotating reference frame.",
          blankAnswer: "moving"
        }
      ]
    },
    {
      id: "les-4-3-1-3",
      title: "The Centrifugal Force Term",
      description: "Position-dependent fictitious force",
      icon: "Maximize",
      slides:[
        {
          id: "def",
          type: "theory",
          title: "The Centrifugal Term",
          content: "The term **$-m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$** is called the **Centrifugal Force**.\n\nUnlike the Coriolis force, this term does not depend on velocity. It depends only on the particle's position $\\mathbf{r}$. It points purely outwards, perpendicularly away from the axis of rotation."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Centrifugal Force Vector",
          content: "Notice how the vector points directly away from the vertical axis of rotation.",
          interactiveCanvasId: "centrifugal-force-vector"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "If you move from the Equator to the North Pole, what happens to the magnitude of the Centrifugal Force you experience?",
          options:[
            { id: "A", text: "It decreases to zero.", isCorrect: true, explanation: "At the pole, your distance from the axis of rotation is zero, so the $\\mathbf{\\Omega} \\times \\mathbf{r}$ term vanishes." },
            { id: "B", text: "It increases to a maximum.", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The ___ force pushes objects radially outward from the axis of rotation.",
          blankAnswer: "centrifugal"
        }
      ]
    },
    {
      id: "les-4-3-1-4",
      title: "Worked Example 15.1",
      description: "Bug on a rotating record",
      icon: "Activity",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Worked Example 15.1",
          content: "An old-fashioned record player is rotating with angular velocity $\\mathbf{\\Omega}_0 = \\Omega_0 \\mathbf{\\hat{k}}$. \n\nA bug is crawling with constant speed $v_b$ relative to the record along a groove, a distance $r$ from the axis. Assume the bug is moving in a circular path, so there is no radial component to its velocity.\n\nDetermine the acceleration of the bug in inertial space using the operator equation."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "The Situation",
          content: "The bug moves along the groove of a rotating disk.",
          interactiveCanvasId: "bug-on-record"
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "Let $\\mathbf{\\hat{\\rho}}, \\mathbf{\\hat{\\phi}}, \\mathbf{\\hat{k}}$ be cylindrical unit vectors in the rotating frame.",
          interactiveSteps:[
            {
              prompt: "What is the velocity of the bug in the rotating frame?",
              options:[
                { id: "A", text: "$\\mathbf{v}_{rot} = v_b \\mathbf{\\hat{\\phi}}$", isCorrect: true, explanation: "It moves purely azimuthally along the groove." }
              ]
            },
            {
              prompt: "What is the velocity of the bug in the inertial frame? ($\\mathbf{v}_i = \\mathbf{v}_{rot} + \\mathbf{\\Omega}_0 \\times \\mathbf{r}$)",
              options:[
                { id: "A", text: "$\\mathbf{v}_i = (v_b + \\Omega_0 r) \\mathbf{\\hat{\\phi}}$", isCorrect: true, explanation: "Since $\\mathbf{\\Omega}_0 \\times \\mathbf{r} = (\\Omega_0 \\mathbf{\\hat{k}}) \\times (r \\mathbf{\\hat{\\rho}}) = \\Omega_0 r \\mathbf{\\hat{\\phi}}$." }
              ]
            },
            {
              prompt: "Now apply the operator to find acceleration: $\\mathbf{a}_i = [\\frac{d\\mathbf{v}_i}{dt}]_{rot} + \\mathbf{\\Omega}_0 \\times \\mathbf{v}_i$. What is the first term $[\\frac{d\\mathbf{v}_i}{dt}]_{rot}$?",
              options:[
                { id: "A", text: "Zero, because $v_b$ and $\\Omega_0 r$ are constant.", isCorrect: false, explanation: "Wait! While the magnitude is constant, the direction $\\mathbf{\\hat{\\phi}}$ changes as the bug moves ALONG the groove in the rotating frame!" },
                { id: "B", text: "$-\\frac{v_b}{r} (v_b + \\Omega_0 r) \\mathbf{\\hat{\\rho}}$", isCorrect: true, explanation: "The rate of change of $\\mathbf{\\hat{\\phi}}$ in the rotating frame is due to the bug's angular speed $\\Omega_b = v_b/r$. So $\\dot{\\mathbf{\\hat{\\phi}}} = -\\Omega_b \\mathbf{\\hat{\\rho}}$." }
              ]
            },
            {
              prompt: "Actually, it is easier to define $v_b = \\Omega_b r$. Then $\\mathbf{v}_i = (\\Omega_b + \\Omega_0) r \\mathbf{\\hat{\\phi}}$. The total centripetal acceleration in inertial space simply depends on the total angular velocity.",
              options:[
                { id: "A", text: "$\\mathbf{a}_i = -r (\\Omega_b + \\Omega_0)^2 \\mathbf{\\hat{\\rho}}$", isCorrect: true, explanation: "This evaluates to $-r\\Omega_b^2 - 2r\\Omega_b\\Omega_0 - r\\Omega_0^2$ in the $\\mathbf{\\hat{\\rho}}$ direction. The three terms correspond precisely to $\\mathbf{a}_{rot}$, the Coriolis force, and the Centrifugal force!" }
              ]
            }
          ]
        }
      ]
    }
  ]
};