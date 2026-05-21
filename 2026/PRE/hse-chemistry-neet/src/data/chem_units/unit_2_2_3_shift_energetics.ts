import { Unit } from '../../types';

export const UNIT_2_2_3: Unit = {
  id: "unit-2-2-3",
  title: "Shift & Energetics",
  description: "Thermodynamics & Le Chatelier",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-3-1",
      title: "Gibbs Energy & K",
      description: "Energetic Link",
      icon: "Battery",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Spontaneity is determined by:", options: [{id: "A", text: "Gibbs Energy (G)", isCorrect: true, explanation: "Delta G < 0."}, {id: "B", text: "Enthalpy (H)", isCorrect: false, explanation: "Not sufficient."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Relationship",
          content: "$$ \\Delta G = \\Delta G^\\ominus + RT \\ln Q $$\nAt equilibrium, $\\Delta G = 0$ and $Q = K_c$.\n\n$$ \\Delta G^\\ominus = -RT \\ln K_c = -2.303 RT \\log K_c $$\n\n- If $\\Delta G^\\ominus < 0$, $K > 1$ (Spontaneous forward).\n- If $\\Delta G^\\ominus > 0$, $K < 1$ (Non-spontaneous)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Equilibrium Point",
          content: "Visualizing the minimum G point.",
          interactiveCanvasId: "thermo-gibbs-equilibrium"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If $K = 100$ at 300K, calculate $\\Delta G^\\ominus$ in kJ. ($R=8.314$). Hint: $\\log 100 = 2$.",
          numericAnswer: -11.48,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calc",
          interactiveSteps: [
            {stepText: "Formula: $-2.303 RT \\log K$"},
            {stepText: "$-2.303 \\times 8.314 \\times 300 \\times 2$"},
            {stepText: "$-11488$ J = $-11.49$ kJ."}
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Log 1?", options: [{id: "A", text: "0", isCorrect: true, explanation: "Correct"}, {id: "B", text: "1", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-2-3-2",
      title: "Le Chatelier's Principle",
      description: "Concentration & Pressure",
      icon: "Minimize2",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "If a system at equilibrium is disturbed, it:", options: [{id: "A", text: "Shifts to counteract the change", isCorrect: true, explanation: "Le Chatelier."}, {id: "B", text: "Stops reacting", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Le Chatelier's Principle",
          content: "**Statement:** Change in any factor (T, P, Conc) determining equilibrium conditions will cause the system to change in such a manner so as to **reduce or counteract the effect of the change**.\n\n**Concentration:** Add Reactant $\\to$ Shift Forward.\n**Pressure:** Increase P $\\to$ Shift to **less moles of gas**."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Shifting Balance",
          content: "Visualizing the shift.",
          interactiveCanvasId: "eq-le-chatelier"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Haber Process",
          content: "$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$. How to increase yield?",
          options: [
            { id: "A", text: "High Pressure", isCorrect: true, explanation: "4 mol gas -> 2 mol gas. High P favours less volume (Forward)." },
            { id: "B", text: "Low Pressure", isCorrect: false, explanation: "Favours reverse." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Does solid count in pressure?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Negligible volume"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-2-2-3-3",
      title: "Temperature & Catalyst",
      description: "Effect on K",
      icon: "Thermometer",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Temperature & Catalyst",
          content: "**Temperature:** Only factor that **changes K**.\n- Exothermic ($\Delta H < 0$): Increase T $\\to$ K decreases (Reverse shift).\n- Endothermic ($\Delta H > 0$): Increase T $\\to$ K increases (Forward shift).\n\n**Catalyst:** Does **NOT** affect K or equilibrium composition. Only speeds up attainment of equilibrium."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "For $N_2 + 3H_2 \\to 2NH_3$ ($\Delta H = -92$ kJ), higher temperature will:",
          options: [
            { id: "A", text: "Decrease K", isCorrect: true, explanation: "Exothermic reaction prefers low T." },
            { id: "B", text: "Increase K", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Inert Gas",
          content: "Adding inert gas at **Constant Volume**:",
          options: [
            { id: "A", text: "No effect", isCorrect: true, explanation: "Partial pressures don't change." },
            { id: "B", text: "Shifts forward", isCorrect: false, explanation: "Only at constant pressure." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Catalyst lowers?", options: [{id: "A", text: "Activation Energy", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Enthalpy of reaction", isCorrect: false, explanation: "Unchanged"}]}
      ]
    }
  ]
};