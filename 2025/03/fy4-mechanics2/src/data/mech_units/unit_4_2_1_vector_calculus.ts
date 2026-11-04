import { Unit } from '../../types';

export const UNIT_4_2_1_VECTOR_CALCULUS: Unit = {
  id: "unit-4-2-1",
  title: "421 (Vector Calculus)",
  description: "Derivatives in a rotating frame",
  color: "duo-orange",
  lessons:[
    {
      id: "les-4-2-1-1",
      title: "Rotating Reference Frames",
      description: "Moving in circles",
      icon: "RefreshCcw",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "If you stand perfectly still at the equator, are you accelerating?",
          options:[
            { id: "A", text: "No, my speed is constant.", isCorrect: false },
            { id: "B", text: "Yes, I am moving in a circle.", isCorrect: true, explanation: "Circular motion requires a continuously changing velocity direction, which means you are constantly accelerating towards the center of the Earth." }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "What makes a coordinate system attached to the Earth a non-inertial frame?",
          options:[
            { id: "A", text: "The Earth revolves around the sun.", isCorrect: false, explanation: "While true, the Earth's daily rotation about its own axis dominates the non-inertial effects we experience." },
            { id: "B", text: "The Earth rotates about its axis.", isCorrect: true, explanation: "This rotation means any coordinate axes fixed to the ground are constantly changing direction in space." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Rotating Frame",
          content: "Consider a coordinate system $(x', y', z')$ rigidly connected to the rotating Earth, with its origin at the center. The Earth and this system rotate together about the $z'$-axis at a constant angular velocity $\\mathbf{\\Omega}$.\n\nThere is also an inertial coordinate system $(x, y, z)$ at rest with respect to the fixed stars. The $z$ and $z'$ axes coincide and lie along the axis of rotation."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.2: Rotating Coordinates",
          content: "The primed axes rotate with the Earth, while unprimed axes remain fixed in space.",
          interactiveCanvasId: "rotating-earth-fig15-2"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "If a person is standing still on the surface of the Earth, what is their velocity with respect to the rotating $(x',y',z')$ coordinate system?",
          options:[
            { id: "A", text: "Zero", isCorrect: true, explanation: "Because the person and the coordinate system are both attached to the rotating Earth, there is no relative motion between them." },
            { id: "B", text: "$\\mathbf{\\Omega} \\times \\mathbf{r}$", isCorrect: false, explanation: "This is their velocity with respect to the inertial system." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "A coordinate system firmly attached to the surface of the Earth is an ___ coordinate system.",
          blankAnswer: "accelerated"
        }
      ]
    },
    {
      id: "les-4-2-1-2",
      title: "Velocity Transformation",
      description: "Comparing inertial and rotating velocities",
      icon: "TrendingUp",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "The Velocity Relationship",
          content: "Let a particle be at position $\\mathbf{r}$. Since the origins coincide, $\\mathbf{r}$ is the same vector in both systems.\n\nHowever, its *rate of change* depends on the observer:\n*   Velocity in rotating frame: $\\mathbf{v}_{rot} = [\\frac{d\\mathbf{r}}{dt}]_{rot}$\n*   Velocity in inertial frame: $\\mathbf{v}_{inertial} =[\\frac{d\\mathbf{r}}{dt}]_{inertial}$"
        },
        {
          id: "proof",
          type: "proof",
          title: "Adding the Rotation",
          content: "If a particle has velocity $\\mathbf{v}_r$ relative to the Earth, what is its velocity in inertial space?",
          proofSteps:[
            "If the particle is at rest on Earth ($[d\\mathbf{r}/dt]_{rot} = 0$), its inertial velocity is purely due to rotation: $\\mathbf{\\Omega} \\times \\mathbf{r}$.",
            "If it moves relative to Earth with $\\mathbf{v}_r$, we simply add this to the rotational velocity.",
            "Result: $[\\frac{d\\mathbf{r}}{dt}]_{inertial} = \\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r}$",
            "Or: $[\\frac{d\\mathbf{r}}{dt}]_{inertial} = [\\frac{d\\mathbf{r}}{dt}]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r}$"
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "OMR: Inertial Velocity",
          content: "What does the term $\\mathbf{\\Omega} \\times \\mathbf{r}$ represent?",
          options:[
            { id: "A", text: "The velocity of the particle relative to the Earth.", isCorrect: false },
            { id: "B", text: "The linear velocity of the coordinate frame itself at the particle's location.", isCorrect: true, explanation: "It represents how fast the ground beneath the particle is moving through inertial space." }
          ]
        }
      ]
    },
    {
      id: "les-4-2-1-3",
      title: "The Time Derivative Operator",
      description: "A generalized transformation",
      icon: "FunctionSquare",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Generalizing the Derivative",
          content: "The relationship we found for position $\\mathbf{r}$ applies to *any* vector $\\mathbf{U}$ (like velocity, momentum, or acceleration) evaluated in the two frames.\n\n$$[\\frac{d\\mathbf{U}}{dt}]_{inertial} = [\\frac{d\\mathbf{U}}{dt}]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{U} $$"
        },
        {
          id: "theory2",
          type: "theory",
          title: "The Operator Equation",
          content: "This leads to a powerful operator equation that transforms time derivatives between the fixed and rotating frames:\n\n$$ \\left[\\frac{d}{dt}\\right]_{inertial} = \\left[\\frac{d}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times $$"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why is this operator equation necessary?",
          options:[
            { id: "A", text: "Because vectors stretch over time.", isCorrect: false },
            { id: "B", text: "Because the unit vectors of the rotating frame are themselves changing direction over time.", isCorrect: true, explanation: "When you take a derivative in the inertial frame, you must apply the product rule to both the components AND the rotating unit vectors." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "To convert a time derivative from a rotating frame to an inertial frame, you must add the cross product of the angular velocity $\\mathbf{\\Omega}$ and the ___.",
          blankAnswer: "vector"
        }
      ]
    },
    {
      id: "les-4-2-1-4",
      title: "Exercise 15.1",
      description: "Merry-go-round velocities",
      icon: "Activity",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 15.1",
          content: "A merry-go-round rotates at angular velocity $\\mathbf{\\Omega}$. A child is sitting on a wooden horse a distance $R$ from the axis.\n\n(a) What is the velocity of the child in the rotating frame?\n(b) What is the velocity of the child in the inertial frame?\n(c) What is the apparent acceleration of the child in the rotating frame?\n(d) Determine the acceleration in the inertial frame using centripetal definition.\n(e) Determine it using the operator equation."
        },
        {
          id: "sol1",
          type: "solution",
          title: "Velocity Solutions",
          content: "Let's answer (a) and (b).",
          interactiveSteps:[
            {
              prompt: "(a) The child is sitting on the horse. What is their velocity relative to the merry-go-round?",
              options:[
                { id: "a", text: "Zero", isCorrect: true, explanation: "They are stationary relative to the rotating frame." }
              ]
            },
            {
              prompt: "(b) What is their velocity in the inertial frame?",
              options:[
                { id: "a", text: "$\\mathbf{v} = \\mathbf{\\Omega} \\times \\mathbf{R}$", isCorrect: true, explanation: "The velocity is purely due to the rotation of the frame." }
              ]
            }
          ]
        },
        {
          id: "sol2",
          type: "solution",
          title: "Acceleration Solutions",
          content: "Let's answer (c), (d), and (e).",
          interactiveSteps:[
            {
              prompt: "(c) Apparent acceleration in the rotating frame?",
              options:[
                { id: "a", text: "Zero", isCorrect: true, explanation: "The child isn't moving in the rotating frame, so they aren't accelerating in it either." }
              ]
            },
            {
              prompt: "(d) Inertial acceleration by elementary definition?",
              options:[
                { id: "a", text: "$\\mathbf{a} = -\\Omega^2 R \\mathbf{\\hat{\\rho}}$", isCorrect: true, explanation: "This is the standard formula for centripetal acceleration, pointing inward." }
              ]
            },
            {
              prompt: "(e) Using the operator equation: $[\\frac{d\\mathbf{v}}{dt}]_{in} =[\\frac{d\\mathbf{v}}{dt}]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{v}$. We plug in $\\mathbf{v}_{in} = \\mathbf{\\Omega} \\times \\mathbf{R}$. What do we get?",
              options:[
                { id: "a", text: "$0 + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{R})$", isCorrect: true, explanation: "Since $\\mathbf{\\Omega} \\perp \\mathbf{R}$, this evaluates to $-\\Omega^2 R \\mathbf{\\hat{\\rho}}$, matching part (d)." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-2-1-5",
      title: "Exercise 15.2",
      description: "Rate of change of Omega",
      icon: "PenTool",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 15.2",
          content: "Prove that the rate of change of the angular velocity of the rotating system is the same in both the inertial and the rotating reference frame."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "We use the operator equation on the vector $\\mathbf{\\Omega}$.",
          interactiveSteps:[
            {
              prompt: "Apply the operator equation to $\\mathbf{\\Omega}$.",
              options:[
                { id: "a", text: "$[\\frac{d\\mathbf{\\Omega}}{dt}]_{in} =[\\frac{d\\mathbf{\\Omega}}{dt}]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{\\Omega}$", isCorrect: true, explanation: "Substitute $\\mathbf{U} = \\mathbf{\\Omega}$ into the formula." }
              ]
            },
            {
              prompt: "What is the value of the cross product of any vector with itself ($\\mathbf{\\Omega} \\times \\mathbf{\\Omega}$)?",
              options:[
                { id: "a", text: "Zero", isCorrect: true, explanation: "Because the angle between them is 0, and $\\sin(0) = 0$." }
              ]
            },
            {
              prompt: "What is the final conclusion?",
              options:[
                { id: "a", text: "$[\\frac{d\\mathbf{\\Omega}}{dt}]_{in} =[\\frac{d\\mathbf{\\Omega}}{dt}]_{rot}$", isCorrect: true, explanation: "Proof complete. The angular acceleration is measured to be identical by both observers." }
              ]
            }
          ]
        }
      ]
    }
  ]
};