import { Unit } from '../../types';

export const UNIT_2_4_2: Unit = {
  id: "unit-2-4-2",
  title: "Half-Wave Doubler",
  description: "Doubling the peak voltage",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-4-2-1",
      title: "Circuit Operation",
      description: "Charging the caps",
      icon: "GitBranch",
      slides: [
        {
          id: "pred",
          type: "quiz",
          title: "Prediction",
          content: "If a circuit is called a 'Half-Wave Doubler', what will the output DC voltage be if the input AC peak is 15V?",
          options: [
            { id: "A", text: "30V", isCorrect: true, explanation: "It doubles the peak voltage." },
            { id: "B", text: "15V", isCorrect: false, explanation: "That would just be a standard rectifier." }
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Mechanism Visualization",
          content: "Notice how the two capacitors take turns charging during alternating half-cycles.",
          interactiveCanvasId: "doubler-circuit-stages"
        },
        {
          id: "mech",
          type: "proof",
          title: "Step-by-Step Action",
          content: "Let's trace the charge.",
          proofSteps: [
            "1. **Negative Half-Cycle:** $D_1$ is forward-biased (ON), $D_2$ is OFF. $C_1$ charges to peak input $V_{S(pk)}$.",
            "2. **Positive Half-Cycle:** $D_1$ is OFF, $D_2$ is ON.",
            "3. The source voltage and $C_1$'s stored voltage are now in series.",
            "4. They add up! $C_2$ charges to $V_S + V_{C1} = 2V_{S(pk)}$."
          ]
        }
      ]
    },
    {
      id: "les-2-4-2-2",
      title: "Capacitor Addition",
      description: "Stacking voltages",
      icon: "PlusCircle",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Voltage Stacking",
          content: "The fundamental concept of multipliers.",
          interactiveCanvasId: "doubler-mechanics"
        },
        {
          id: "bound",
          type: "quiz",
          title: "Boundary Check",
          content: "What happens to the $2V_m$ output if a heavy load is connected?",
          options: [
            { id: "A", text: "It stays exactly at $2V_m$", isCorrect: false, explanation: "Capacitors will drain." },
            { id: "B", text: "It drops significantly", isCorrect: true, explanation: "Multipliers have poor regulation. Heavy loads drain the capacitors faster than they charge." }
          ]
        }
      ]
    }
  ]
};