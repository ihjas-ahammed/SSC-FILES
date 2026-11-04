import { Unit } from '../../types';

export const UNIT_2_3_2: Unit = {
  id: "unit-2-3-2",
  title: "Regulator Circuits",
  description: "Line & Load Regulation",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-2-1",
      title: "The Circuit",
      description: "Basic Topology",
      icon: "Layout",
      slides: [
        {
          id: "challenge",
          type: "quiz",
          title: "The Challenge",
          content: "We have a fluctuating DC source (10V-15V). We need a steady 9V for our load. How do we connect the Zener?",
          options: [
            { id: "A", text: "Series with Load", isCorrect: false, explanation: "Zener voltage is constant, not current." },
            { id: "B", text: "Parallel with Load", isCorrect: true, explanation: "Parallel branches have the same voltage." }
          ]
        },
        {
          id: "circuit",
          type: "interactive_canvas",
          title: "Zener Regulator",
          content: "Observe how $V_{out}$ stays at $V_Z$ despite changes in $V_{in}$.",
          interactiveCanvasId: "zener-regulator-circuit"
        },
        {
          id: "role-r",
          type: "fill_in_blank",
          title: "Series Resistor",
          content: "The series resistor $R$ is essential to absorb the difference between input voltage and ___ voltage.",
          blankAnswer: "zener"
        }
      ]
    },
    {
      id: "les-2-3-2-2",
      title: "Line Regulation",
      description: "Handling Input Changes",
      icon: "Activity",
      slides: [
        {
          id: "predict",
          type: "quiz",
          title: "Prediction",
          content: "If Input Voltage ($V_{in}$) increases, what happens to the Zener Current ($I_Z$)?",
          options: [
            { id: "A", text: "Increases", isCorrect: true, explanation: "The Zener absorbs the extra current to keep voltage constant." },
            { id: "B", text: "Decreases", isCorrect: false, explanation: "" }
          ]
        },
        {
          id: "mech",
          type: "interactive_canvas",
          title: "Mechanism",
          content: "$V_{in} \\uparrow \\Rightarrow I_{total} \\uparrow \\Rightarrow I_Z \\uparrow$. $V_{out}$ stays constant.",
          interactiveCanvasId: "zener-line-reg-anim"
        }
      ]
    },
    {
      id: "les-2-3-2-3",
      title: "Load Regulation",
      description: "Handling Load Changes",
      icon: "Anchor",
      slides: [
        {
          id: "predict",
          type: "quiz",
          title: "Prediction",
          content: "If we connect a heavier load (lower resistance), it demands more current ($I_L$). Where does this current come from?",
          options: [
            { id: "A", text: "From the Source (Input increases)", isCorrect: false, explanation: "Source current is limited by R and Vin." },
            { id: "B", text: "From the Zener (Iz decreases)", isCorrect: true, explanation: "Total current is constant. The Zener 'gives up' some current to the load." }
          ]
        }
      ]
    }
  ]
};