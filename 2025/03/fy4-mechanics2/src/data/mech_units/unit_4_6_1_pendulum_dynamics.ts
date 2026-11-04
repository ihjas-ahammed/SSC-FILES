import { Unit } from '../../types';

export const UNIT_4_6_1_PENDULUM_DYNAMICS: Unit = {
  id: "unit-4-6-1",
  title: "461 (Pendulum Dynamics)",
  description: "Setting up the Foucault Pendulum",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-6-1-1",
      title: "History and Behavior",
      description: "Visualizing Earth's rotation",
      icon: "Clock",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "If you were to swing a pendulum exactly at the North Pole, and wait 24 hours, what would you observe?",
          options:[
            { id: "A", text: "The pendulum's swing plane would rotate exactly once.", isCorrect: true, explanation: "The Earth rotates entirely underneath the pendulum, so relative to the ground, the pendulum's plane appears to rotate 360 degrees in one day." },
            { id: "B", text: "The pendulum would swing in the exact same plane.", isCorrect: false }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "What if you set up the same pendulum exactly at the Equator?",
          options:[
            { id: "A", text: "It would rotate once per day.", isCorrect: false },
            { id: "B", text: "It would not rotate at all.", isCorrect: true, explanation: "At the equator, the axis of the Earth's rotation is perpendicular to the local vertical, so there is no rotation of the ground *around* the vertical axis." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Foucault Pendulum",
          content: "In 1851, the French physicist L\u00e9on Foucault suspended a massive pendulum inside the Pantheon in Paris. Large crowds gathered to watch it, as it provided direct, visible proof that the Earth was rotating.\n\nThe plane of motion of a long pendulum slowly precesses over time. At the North Pole it precesses one revolution per day, and at the equator it does not precess. We want to analyze the motion at an arbitrary latitude."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "Which fictitious force is primarily responsible for the precession of the Foucault pendulum?",
          options:[
            { id: "A", text: "The Centrifugal Force", isCorrect: false, explanation: "Centrifugal force pushes the bob slightly outward, but doesn't deflect moving objects sideways." },
            { id: "B", text: "The Coriolis Force", isCorrect: true, explanation: "As the pendulum swings, its velocity interacts with the Earth's rotation, creating a sideways Coriolis force that slowly rotates its plane." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The slow rotation of the swing plane of a Foucault pendulum is called ___.",
          blankAnswer: "precession"
        }
      ]
    },
    {
      id: "les-4-6-1-2",
      title: "Coordinate Frame",
      description: "Figure 15.7 Analysis",
      icon: "Map",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "To describe the position of the pendulum bob swinging back and forth over the ground, how many coordinate axes do we need for the horizontal plane?",
          options:[
            { id: "A", text: "One", isCorrect: false },
            { id: "B", text: "Two", isCorrect: true, explanation: "We need x and y to describe a 2D plane over the ground." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Local Axes",
          content: "Consider a long pendulum at an arbitrary latitude. Let the z-axis be oriented along the local vertical (Up).\n\nThe projection of the path of the pendulum onto the xy-plane makes an angle $\\psi$ with the x-axis. The precession of the pendulum causes $\\psi$ to change as a function of time."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.7: Pendulum Setup",
          content: "The path of the pendulum bob is projected onto the horizontal xy-plane.",
          interactiveCanvasId: "foucault-pendulum-frame"
        },
        {
          id: "target",
          type: "theory",
          title: "The Goal",
          content: "The basic problem consists in demonstrating that the rate of change of the angle $\\psi$ is:\n$$ \\frac{d\\psi}{dt} = \\Omega \\cos \\lambda $$\n\nWhere $\\Omega$ is the Earth's angular velocity and $\\lambda$ is the colatitude."
        }
      ]
    },
    {
      id: "les-4-6-1-3",
      title: "Equations of Motion",
      description: "Deriving the coupled ODEs",
      icon: "FunctionSquare",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Forces on the Bob",
          content: "The pendulum bob is acted upon by two real forces: the tension in the string $\\mathbf{T}$ and gravity $m\\mathbf{g}$.\n\nIt is also acted upon by two fictitious forces: the Coriolis force ($-2m\\mathbf{\\Omega} \\times \\mathbf{v}$) and the centrifugal force. We assume the centrifugal force is absorbed into effective gravity $m\\mathbf{g}_e$ (which we just write as $m\\mathbf{g}$). Therefore:\n$$ m\\mathbf{a} = \\mathbf{T} + m\\mathbf{g} - 2m(\\mathbf{\\Omega} \\times \\mathbf{v}) $$"
        },
        {
          id: "proof1",
          type: "proof",
          title: "Component Form (Eq 15.8 - 15.10)",
          content: "Expanding this into components is tedious but straightforward.",
          proofSteps:[
            "Let string length be $l$. The bob is displaced by angle $\\theta$ from vertical.",
            "Tension components: $T_z = T\\cos\\theta$, horizontal $T_{xy} = -T\\sin\\theta$.",
            "Projecting $T_{xy}$ onto axes: $T_x = -T\\sin\\theta \\cos\\psi$, $T_y = -T\\sin\\theta \\sin\\psi$.",
            "Coriolis components were found earlier: $a_{cx} = 2\\Omega(v_y \\cos\\lambda - v_z \\sin\\lambda)$, $a_{cy} = -2\\Omega v_x \\cos\\lambda$, $a_{cz} = 2\\Omega v_x \\sin\\lambda$.",
            "x-equation: $ma_x = -T\\sin\\theta\\cos\\psi + 2m\\Omega(v_y\\cos\\lambda - v_z\\sin\\lambda)$.",
            "y-equation: $ma_y = -T\\sin\\theta\\sin\\psi - 2m\\Omega v_x\\cos\\lambda$."
          ]
        },
        {
          id: "proof2",
          type: "proof",
          title: "Simplifying the Equations",
          content: "We make approximations for a very long pendulum.",
          proofSteps:[
            "Since the pendulum is very long, $\\theta$ is small, so $T_z = T\\cos\\theta \\approx T \\approx mg$.",
            "Also, vertical velocity $v_z$ is much smaller than horizontal velocity, so we ignore terms with $v_z$.",
            "From geometry: $x = l\\sin\\theta\\cos\\psi$ and $y = l\\sin\\theta\\sin\\psi$.",
            "Substitute $T \\approx mg$: $-T\\sin\\theta\\cos\\psi \\approx -mg(x/l) = -(\\frac{mg}{l})x$.",
            "Let $\\omega^2 = g/l$ (the natural pendulum frequency) and $K = \\Omega\\cos\\lambda$.",
            "Resulting coupled ODEs: $\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$ and $\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$."
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Analyzing the ODEs",
          content: "What causes the x and y equations to be coupled (meaning the x equation contains y terms)?",
          options:[
            { id: "A", text: "The restoring force of gravity.", isCorrect: false },
            { id: "B", text: "The Coriolis terms $2K\\dot{y}$ and $2K\\dot{x}$.", isCorrect: true, explanation: "These terms mix the horizontal velocities, causing the pendulum to constantly curve away from a straight line." }
          ]
        }
      ]
    }
  ]
};