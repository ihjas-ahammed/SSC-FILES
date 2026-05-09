import { Unit } from '../../types';

export const UNIT_4_5_1_TERRESTRIAL_EFFECTS: Unit = {
  id: "unit-4-5-1",
  title: "451 (Terrestrial Effects)",
  description: "The Coriolis Force on Earth",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-5-1-1",
      title: "Local Coordinate System",
      description: "Setting up axes on the surface",
      icon: "Map",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "When we solve physics problems on the ground, we usually set the z-axis pointing \"Up\". What does \"Up\" mean physically?",
          options:[
            { id: "A", text: "Directly away from the geometric center of the Earth.", isCorrect: false, explanation: "Remember the effective gravity from Section 4.4!" },
            { id: "B", text: "Directly opposite to the effective gravity vector.", isCorrect: true, explanation: "Local \"Up\" is determined by a plumb line, which aligns with effective gravity $\\mathbf{g}_e$." }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Axis Orientation",
          content: "If the z-axis is Up, and the y-axis is North, what direction must the x-axis point to form a standard right-handed coordinate system?",
          options:[
            { id: "A", text: "East", isCorrect: true, explanation: "Right-hand rule: Point fingers North (y), curl Up (z), thumb points East (x)." },
            { id: "B", text: "West", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Local Frame",
          content: "To study the Coriolis force on Earth, we set up a local Cartesian coordinate system:\n*   **z-axis:** Points Up (opposite to effective gravity $\\mathbf{g}_e$).\n*   **y-axis:** Points North.\n*   **x-axis:** Points East.\n\nWe define the position by the **colatitude $\\lambda$**, which is the angle between the North Pole (axis of rotation) and our local vertical."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Reference Frame at Latitude",
          content: "Observe the components of the Earth's angular velocity vector $\\mathbf{\\Omega}$ in our local frame.",
          interactiveCanvasId: "reference-frame-latitude"
        },
        {
          id: "proof",
          type: "proof",
          title: "The Angular Velocity Vector",
          content: "We must express the Earth's angular velocity $\\mathbf{\\Omega}$ in terms of our local $\\mathbf{\\hat{i}}, \\mathbf{\\hat{j}}, \\mathbf{\\hat{k}}$ unit vectors.",
          proofSteps:[
            "$\\mathbf{\\Omega}$ points from the center of the Earth out through the North Pole.",
            "The angle between our local z-axis (Up) and $\\mathbf{\\Omega}$ is the colatitude $\\lambda$.",
            "The component of $\\mathbf{\\Omega}$ along the z-axis (Up) is $\\Omega \\cos \\lambda$.",
            "The component of $\\mathbf{\\Omega}$ along the y-axis (North) is $\\Omega \\sin \\lambda$.",
            "Result: $\\mathbf{\\Omega} = \\Omega \\sin \\lambda \\mathbf{\\hat{j}} + \\Omega \\cos \\lambda \\mathbf{\\hat{k}}$."
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "At the Equator, the colatitude is $\\lambda = 90^\\circ$. What is the direction of the Earth's angular velocity vector $\\mathbf{\\Omega}$ in the local frame?",
          options:[
            { id: "A", text: "Purely Up (z-axis)", isCorrect: false },
            { id: "B", text: "Purely North (y-axis)", isCorrect: true, explanation: "Since $\\cos(90^\\circ)=0$ and $\\sin(90^\\circ)=1$, $\\mathbf{\\Omega} = \\Omega \\mathbf{\\hat{j}}$. The rotation axis is parallel to the ground, pointing North." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "In the local coordinate system, the x-axis points ___, the y-axis points North, and the z-axis points Up.",
          blankAnswer: "East"
        }
      ]
    },
    {
      id: "les-4-5-1-2",
      title: "Coriolis Acceleration Components",
      description: "Expanding the cross product",
      icon: "FunctionSquare",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "The General Coriolis Term",
          content: "The Coriolis acceleration is given by:\n$$ \\mathbf{a}_c = -2\\mathbf{\\Omega} \\times \\mathbf{v}_r $$\n\nWhere $\\mathbf{v}_r = v_x \\mathbf{\\hat{i}} + v_y \\mathbf{\\hat{j}} + v_z \\mathbf{\\hat{k}}$ is the velocity of the object relative to the Earth."
        },
        {
          id: "proof",
          type: "proof",
          title: "Expanding the Cross Product",
          content: "We calculate $-2 (\\Omega \\sin \\lambda \\mathbf{\\hat{j}} + \\Omega \\cos \\lambda \\mathbf{\\hat{k}}) \\times (v_x \\mathbf{\\hat{i}} + v_y \\mathbf{\\hat{j}} + v_z \\mathbf{\\hat{k}})$.",
          proofSteps:[
            "Distribute the cross product across the components.",
            "Use right-hand rule: $\\mathbf{\\hat{j}} \\times \\mathbf{\\hat{i}} = -\\mathbf{\\hat{k}}$, $\\mathbf{\\hat{j}} \\times \\mathbf{\\hat{k}} = \\mathbf{\\hat{i}}$, $\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{i}} = \\mathbf{\\hat{j}}$, $\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{j}} = -\\mathbf{\\hat{i}}$.",
            "x-component: $2\\Omega (v_y \\cos \\lambda - v_z \\sin \\lambda)$.",
            "y-component: $-2\\Omega v_x \\cos \\lambda$.",
            "z-component: $2\\Omega v_x \\sin \\lambda$."
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Component Analysis",
          content: "If you fire a projectile purely East ($v_x > 0, v_y=0, v_z=0$), in which direction is the horizontal Coriolis deflection?",
          options:[
            { id: "A", text: "North", isCorrect: false },
            { id: "B", text: "South", isCorrect: true, explanation: "The y-component of the acceleration is $a_y = -2\\Omega v_x \\cos \\lambda$. Since it is negative, it deflects the projectile South." }
          ]
        }
      ]
    }
  ]
};