import { Unit } from '../../types';

export const UNIT_1_4_2_ENERGY_DIAGRAMS: Unit = {
  id: "unit-1-4-2",
  title: "Energy Diagrams",
  description: "Visualizing Orbits",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-4-2-1",
      title: "Plotting V_eff",
      description: "Competing Terms",
      icon: "Activity",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Effective Potential Graph",
          content: "See how the Centrifugal Barrier ($1/r^2$) and Gravity ($-1/r$) combine to form a 'well'.",
          interactiveCanvasId: "effective-potential-plot"
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Where is the stable circular orbit located on this graph?",
          options: [
            { id: "A", text: "At $r=0$", isCorrect: false, explanation: "That's the singularity." },
            { id: "B", text: "At the minimum of the well", isCorrect: true, explanation: "The bottom of the valley represents equilibrium where net radial force is zero." }
          ]
        }
      ]
    },
    {
      id: "les-1-4-2-2",
      title: "Energy Levels",
      description: "Turning Points",
      icon: "BarChart",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Turning Points",
          content: "The particle can only exist where $E \\ge V_{eff}$ (otherwise kinetic energy would be negative).\n\nThe points where $E = V_{eff}$ are called **Turning Points** (where $\\dot{r} = 0$).\n\n- If $E < 0$, motion is bounded between two radii (Ellipse).\n- If $E = E_{min}$, motion is at one radius (Circle)."
        }
      ]
    },
    {
      id: "les-1-4-2-3",
      title: "Conic Sections",
      description: "Orbit Types",
      icon: "Circle",
      slides: [
        {
          id: "vis_conics",
          type: "interactive_canvas",
          title: "Energy & Orbit Shape",
          content: "Visualize how Energy determines the shape.",
          interactiveCanvasId: "energy-levels-conics"
        },
        {
          id: "summary",
          type: "theory",
          title: "Classification",
          content: "**Hyperbola:** $E > 0$ (Unbounded)\n**Parabola:** $E = 0$ (Unbounded, escape velocity)\n**Ellipse:** $E < 0$ (Bounded)\n**Circle:** $E = V_{eff, min}$ (Bounded)"
        }
      ]
    }
  ]
};