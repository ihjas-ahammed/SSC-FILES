import { Unit } from '../../types';

export const UNIT_2_1_4: Unit = {
  id: "unit-2-1-4",
  title: "Entropy & Gibbs",
  description: "Spontaneity Criteria",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-1-4-1",
      title: "Spontaneity",
      description: "Driving Force",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does spontaneous mean fast?", options: [{id: "A", text: "No", isCorrect: true, explanation: "It means feasible without external aid."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Diamond to graphite is spontaneous but slow."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Spontaneous Process",
          content: "A process that proceeds on its own without external assistance.\n- Irreversible.\n- Examples: Heat flow Hot $\\to$ Cold, Gas expansion.\n- Driving force: Tendency to lower energy AND/OR increase disorder."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Direction",
          content: "Is decrease in enthalpy (Exothermic) the sole criterion for spontaneity?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "Endothermic reactions (e.g. ice melting) occur too." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Entropy also matters." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "First law equation?", options: [{id: "A", text: "Delta U = q + w", isCorrect: true, explanation: "Correct"}, {id: "B", text: "w = -P dV", isCorrect: false, explanation: "Work formula"}]}
      ]
    },
    {
      id: "les-2-1-4-2",
      title: "Entropy (S)",
      description: "Measure of Disorder",
      icon: "Shuffle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Entropy ($S$)",
          content: "A state function measuring the **degree of randomness or disorder** in a system.\n- Gas > Liquid > Solid.\n- Change: $\\Delta S = \\frac{q_{rev}}{T}$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Diffusion",
          content: "Gas mixing increases randomness.",
          interactiveCanvasId: "thermo-entropy-diffusion"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Entropy Calculation",
          content: "Heat absorbed reversibly is 300 J at 300 K. What is $\\Delta S$?",
          numericAnswer: 1,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Entropy extensive?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Depends on amount"}, {id: "B", text: "No", isCorrect: false, explanation: "Intensive"}]}
      ]
    },
    {
      id: "les-2-1-4-3",
      title: "Second Law",
      description: "Universe Entropy",
      icon: "Globe",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Second Law of Thermodynamics",
          content: "For any spontaneous process, the total entropy of the universe increases.\n\n$$ \\Delta S_{total} = \\Delta S_{system} + \\Delta S_{surr} > 0 $$"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Entropy of an isolated system increases in spontaneous process.\n**Reason:** For isolated system, $\\Delta S_{surr} = 0$, so $\\Delta S_{sys} > 0$.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of Entropy?", options: [{id: "A", text: "J/K", isCorrect: true, explanation: "Correct"}, {id: "B", text: "J", isCorrect: false, explanation: "Energy"}]}
      ]
    },
    {
      id: "les-2-1-4-4",
      title: "Third Law",
      description: "Absolute Entropy",
      icon: "ThermometerSnowflake",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Third Law of Thermodynamics",
          content: "The entropy of a perfectly crystalline substance approaches zero as the absolute temperature approaches zero (0 K).\n\nAllows calculation of Absolute Entropies."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "At 0 K, the constituent particles are static and entropy is ___.",
          blankAnswer: "minimum"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "0 Kelvin in Celsius?", options: [{id: "A", text: "-273.15", isCorrect: true, explanation: "Correct"}, {id: "B", text: "-100", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-1-4-5",
      title: "Gibbs Energy (G)",
      description: "Useful Work",
      icon: "Battery",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Gibbs Energy ($G$)",
          content: "State function defined as $G = H - TS$.\nChange at constant T:\n$$ \\Delta G = \\Delta H - T\\Delta S $$\n\nRepresents maximum useful work (non-expansion) obtainable."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Spontaneity Criteria",
          content: "For spontaneous process at const T, P:",
          options: [
            { id: "A", text: "Delta G < 0", isCorrect: true, explanation: "Negative G indicates spontaneity." },
            { id: "B", text: "Delta G > 0", isCorrect: false, explanation: "Non-spontaneous." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Enthalpy definition?", options: [{id: "A", text: "U + PV", isCorrect: true, explanation: "Correct"}, {id: "B", text: "U - TS", isCorrect: false, explanation: "That is Helmholtz"}]}
      ]
    },
    {
      id: "les-2-1-4-6",
      title: "Criteria Analysis",
      description: "Sign of H and S",
      icon: "GitPullRequest",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Effect of Temperature",
          content: "$\\Delta G = \\Delta H - T\\Delta S$\n\n1. $-\\Delta H, +\\Delta S$: Spontaneous at all T.\n2. $+\\Delta H, -\\Delta S$: Non-spontaneous at all T.\n3. $-\\Delta H, -\\Delta S$: Spontaneous at **Low T**.\n4. $+\\Delta H, +\\Delta S$: Spontaneous at **High T**."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Prediction",
          content: "Ice melting ($+\\Delta H, +\\Delta S$) is spontaneous:",
          options: [
            { id: "A", text: "Above 0 deg C (High T)", isCorrect: true, explanation: "Entropy factor dominates." },
            { id: "B", text: "Below 0 deg C", isCorrect: false, explanation: "Enthalpy factor opposes." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond breaking is?", options: [{id: "A", text: "Endothermic", isCorrect: true, explanation: "Positive H"}, {id: "B", text: "Exothermic", isCorrect: false, explanation: "Negative H"}]}
      ]
    },
    {
      id: "les-2-1-4-7",
      title: "Temperature of Equilibrium",
      description: "Switchover Point",
      icon: "Settings",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Equilibrium Temperature",
          content: "At equilibrium, $\\Delta G = 0$.\nTherefore, $\\Delta H = T_{eq} \\Delta S$.\n\n$$ T_{eq} = \\frac{\\Delta H}{\\Delta S} $$"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If $\\Delta H = 400$ kJ and $\\Delta S = 0.2$ kJ/K, find T where reaction becomes spontaneous.",
          numericAnswer: 2000,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "S unit?", options: [{id: "A", text: "kJ/K or J/K", isCorrect: true, explanation: "Correct"}, {id: "B", text: "kJ", isCorrect: false, explanation: "Energy"}]}
      ]
    },
    {
      id: "les-2-1-4-8",
      title: "Gibbs & Equilibrium",
      description: "Standard Free Energy",
      icon: "Scale",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Standard Gibbs Energy",
          content: "Relation to Equilibrium Constant ($K$):\n$$ \\Delta_r G^\\ominus = -RT \\ln K $$\nor\n$$ \\Delta_r G^\\ominus = -2.303 RT \\log K $$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Equilibrium Point",
          content: "Reaction proceeds until G is minimum.",
          interactiveCanvasId: "thermo-gibbs-equilibrium"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "K value",
          content: "If $\\Delta G^\\ominus$ is negative, K is:",
          options: [
            { id: "A", text: "> 1", isCorrect: true, explanation: "Products favoured." },
            { id: "B", text: "< 1", isCorrect: false, explanation: "Reactants favoured." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Log 10?", options: [{id: "A", text: "1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0", isCorrect: false, explanation: "Log 1"}]}
      ]
    }
  ]
};