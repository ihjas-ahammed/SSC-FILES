import { Unit } from '../../types';

export const UNIT_4_5_3_PROJECTILE_MOTION: Unit = {
  id: "unit-4-5-3",
  title: "453 (Projectile Motion)",
  description: "Coriolis effect on cannons and rockets",
  color: "duo-green",
  lessons:[
    {
      id: "les-4-5-3-1",
      title: "Projectile Initial Conditions",
      description: "Setting up the velocity vector",
      icon: "Crosshair",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "When analyzing a projectile, we must break its initial velocity into x, y, and z components. Which two angles are required to fully define its initial direction?",
          options:[
            { id: "A", text: "Elevation and Azimuth", isCorrect: true, explanation: "Elevation is the angle above the horizon; Azimuth is the compass direction (e.g., angle East of North)." },
            { id: "B", text: "Latitude and Longitude", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Initial Velocity Components",
          content: "Let $v_0$ be the initial speed of the projectile. \nLet $\\theta$ be the elevation angle above the horizontal xy-plane.\nLet $\\phi$ be the azimuth angle, measured East of North.\n\nFrom geometry:\n*   **Up (z):** $v_{0z} = v_0 \\sin \\theta$\n*   **North (y):** $v_{0y} = v_0 \\cos \\theta \\cos \\phi$\n*   **East (x):** $v_{0x} = v_0 \\cos \\theta \\sin \\phi$"
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.6: Projectile Setup",
          content: "Visualizing the 3D launch angles.",
          interactiveCanvasId: "projectile-east-north"
        }
      ]
    },
    {
      id: "les-4-5-3-2",
      title: "Equations of Motion",
      description: "Coupled Differential Equations",
      icon: "FunctionSquare",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "The Full Acceleration",
          content: "Applying the Coriolis acceleration components derived in Unit 451, and adding true gravity $-g\\mathbf{\\hat{k}}$, we get the full equations of motion (Eq 15.7):\n\n$$ a_x = 2\\Omega (v_y \\cos \\lambda - v_z \\sin \\lambda) $$\n$$ a_y = -2\\Omega v_x \\cos \\lambda $$\n$$ a_z = 2\\Omega v_x \\sin \\lambda - g $$"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Analyzing the Equations",
          content: "Look at the equation for $a_y$ (North/South acceleration). It depends entirely on $v_x$ (East/West velocity). What does this mean physically?",
          options:[
            { id: "A", text: "A projectile moving East will be deflected South.", isCorrect: true, explanation: "If $v_x > 0$, then $a_y$ is negative (South). This confirms that in the Northern Hemisphere, objects deflect to the right of their path." },
            { id: "B", text: "A projectile moving North will be deflected South.", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "These equations are ___, meaning the acceleration in one direction depends on the velocity in another direction.",
          blankAnswer: "coupled"
        }
      ]
    },
    {
      id: "les-4-5-3-3",
      title: "Worked Example 15.3",
      description: "Initial Acceleration of a Cannonball",
      icon: "Activity",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Worked Example 15.3",
          content: "A large cannon is located at colatitude $\\lambda$ in the Northern Hemisphere. It fires a shell with velocity $v_0$, aimed at an angle $\\phi$ East of North, with elevation $\\theta$.\n\nWrite expressions for the initial (unperturbed) velocity components and the initial accelerations $a_x, a_y, a_z$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "Substitute the initial velocities into the acceleration equations.",
          interactiveSteps:[
            {
              prompt: "We found $v_{0x} = v_0 \\cos \\theta \\sin \\phi$, $v_{0y} = v_0 \\cos \\theta \\cos \\phi$, and $v_{0z} = v_0 \\sin \\theta$. Substitute these into $a_y = -2\\Omega v_{0x} \\cos \\lambda$.",
              options:[
                { id: "A", text: "$a_y = -2 v_0 \\Omega \\cos \\lambda \\cos \\theta \\sin \\phi$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Substitute into $a_z = 2\\Omega v_{0x} \\sin \\lambda - g$.",
              options:[
                { id: "A", text: "$a_z = 2 v_0 \\Omega \\sin \\lambda \\cos \\theta \\sin \\phi - g$", isCorrect: true, explanation: "Correct. The Coriolis force provides a slight \"lift\" if the projectile is fired Eastward!" }
              ]
            },
            {
              prompt: "Substitute into $a_x = 2\\Omega (v_{0y} \\cos \\lambda - v_{0z} \\sin \\lambda)$.",
              options:[
                { id: "A", text: "$a_x = 2 v_0 \\Omega (\\cos \\theta \\cos \\phi \\cos \\lambda - \\sin \\theta \\sin \\lambda)$", isCorrect: true, explanation: "This tells us the exact East/West drift right out of the barrel." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-5-3-4",
      title: "Exercise 15.6 & 15.7",
      description: "Numerical Evaluation",
      icon: "Calculator",
      slides:[
        {
          id: "q",
          type: "numerical",
          title: "Exercise 15.7",
          content: "A projectile located at $60^\\circ$ N latitude (so colatitude $\\lambda = 30^\\circ$) is fired due East ($\\phi = 90^\\circ$) with an initial velocity of $300$ m/s at an elevation of $\\theta = 25^\\circ$ above the horizontal.\n\nEvaluate the initial value of the x-component of the Coriolis acceleration $a_x(t=0)$ in m/s$^2$.\nUse $\\Omega = 7.29 \\times 10^{-5}$ rad/s.",
          numericAnswer: -0.00922,
          numericTolerance: 0.0005
        },
        {
          id: "sol",
          type: "solution",
          title: "Step-by-Step",
          content: "Use the formula $a_x = 2\\Omega (v_{0y} \\cos \\lambda - v_{0z} \\sin \\lambda)$.",
          interactiveSteps:[
            {
              prompt: "Since it is fired due East ($\\phi = 90^\\circ$), what is the Northward velocity $v_{0y}$?",
              options:[
                { id: "A", text: "0", isCorrect: true, explanation: "$\\cos(90^\\circ) = 0$." }
              ]
            },
            {
              prompt: "What is the Upward velocity $v_{0z}$?",
              options:[
                { id: "A", text: "$300 \\sin(25^\\circ) \\approx 126.785$ m/s", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Calculate $a_x = 2\\Omega (0 - 126.785 \\sin 30^\\circ)$. Note $\\sin 30^\\circ = 0.5$.",
              options:[
                { id: "A", text: "$a_x = -126.785 \\times \\Omega = -9.24 \\times 10^{-3}$ m/s$^2$", isCorrect: true, explanation: "Using a slightly more precise $\\Omega$ yields $-9.22 \\times 10^{-3}$ m/s$^2$. The acceleration is negative, meaning it is deflected Westward (backwards)." }
              ]
            }
          ]
        }
      ]
    }
  ]
};