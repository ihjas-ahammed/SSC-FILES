import { Unit } from '../../types';

export const UNIT_2_1_5: Unit = {
  id: "unit-2-1-5",
  title: "First Law Exercises",
  description: "NCERT Exe 5.1 - 5.10",
  color: "duo-red",
  lessons: [
    {
      id: "exe-2-1-5-1",
      title: "State Functions",
      description: "Q 5.1",
      icon: "Map",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.1", 
          content: "A thermodynamic state function is a quantity:", 
          options: [
            { id: "A", text: "Whose value is independent of path", isCorrect: true, explanation: "Depends only on state." },
            { id: "B", text: "Used to determine heat changes", isCorrect: false, explanation: "Not the definition." }
          ] 
        }
      ]
    },
    {
      id: "exe-2-1-5-2",
      title: "Adiabatic Conditions",
      description: "Q 5.2",
      icon: "Shield",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.2", 
          content: "For process under adiabatic conditions, correct condition is:", 
          options: [
            { id: "A", text: "q = 0", isCorrect: true, explanation: "No heat exchange." },
            { id: "B", text: "Delta T = 0", isCorrect: false, explanation: "Temperature can change due to work." }
          ] 
        }
      ]
    },
    {
      id: "exe-2-1-5-3",
      title: "Standard States",
      description: "Q 5.3",
      icon: "Disc",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.3", 
          content: "Enthalpies of all elements in their standard states are:", 
          options: [
            { id: "A", text: "Zero", isCorrect: true, explanation: "By convention." },
            { id: "B", text: "Unity", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-2-1-5-4",
      title: "U vs H",
      description: "Q 5.4 - 5.5",
      icon: "Link",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.4", 
          content: "Combustion of methane ($CH_4 + 2O_2 \\to CO_2 + 2H_2O(l)$). $\\Delta U$ is -X. Value of $\\Delta H$ is?", 
          options: [
            { id: "A", text: "< Delta U", isCorrect: true, explanation: "Delta ng = 1 - 3 = -2. So H = U - 2RT." },
            { id: "B", text: "> Delta U", isCorrect: false, explanation: "Negative term added." }
          ] 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 5.5", 
          content: "Enthalpy of combustion of C, H2, CH4 are -393.5, -285.8, -890.3 kJ/mol. Calculate Enthalpy of Formation of CH4.", 
          numericAnswer: -74.8, 
          numericTolerance: 0.1 
        },
        {
          id: "sol-2",
          type: "solution",
          title: "Hess Law",
          content: "Target: $C + 2H_2 \\to CH_4$",
          interactiveSteps: [
            {stepText: "$C \\to CO_2$ (-393.5)"},
            {stepText: "$2H_2 \\to 2H_2O$ (2 * -285.8 = -571.6)"},
            {stepText: "$CO_2 + 2H_2O \\to CH_4 + 2O_2$ (Reverse comb: +890.3)"},
            {stepText: "Sum: -393.5 - 571.6 + 890.3 = -74.8"}
          ]
        }
      ]
    },
    {
      id: "exe-2-1-5-5",
      title: "Work Calculation",
      description: "Q 5.7",
      icon: "Activity",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.7", 
          content: "701 J heat absorbed ($q=+701$), 394 J work done by system ($w=-394$). Change in internal energy (J)?", 
          numericAnswer: 307, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-2-1-5-6",
      title: "Bomb Calorimeter",
      description: "Q 5.8",
      icon: "Box",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.8", 
          content: "Reaction $NH_2CN(s) + 3/2 O_2(g) \\to N_2(g) + CO_2(g) + H_2O(l)$. $\\Delta U = -742.7$ kJ at 298K. Calculate $\\Delta H$. ($R=8.314 \\times 10^{-3}$).", 
          numericAnswer: -741.5, 
          numericTolerance: 0.2 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution",
          content: "Formula: $\\Delta H = \\Delta U + \\Delta n_g RT$",
          interactiveSteps: [
            {stepText: "$\Delta n_g = (1+1) - (1.5) = 0.5$ mol (Solids/Liquids ignored)."},
            {stepText: "$\Delta n_g RT = 0.5 \\times 8.314 \\times 10^{-3} \\times 298 = 1.239$ kJ."},
            {stepText: "$\Delta H = -742.7 + 1.24 = -741.46$ kJ."}
          ]
        }
      ]
    }
  ]
};