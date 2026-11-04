import { Unit } from '../../types';

export const UNIT_1_3_6: Unit = {
  id: "unit-1-3-6",
  title: "Property Exercises",
  description: "NCERT Exe 3.21 – 3.40",
  color: "duo-blue",
  lessons: [
    {
      id: "exe-1-3-6-1",
      title: "Electron Gain vs IE",
      description: "Q 3.21 - 3.22",
      icon: "ArrowRightLeft",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.21", 
          content: "Is the 2nd Electron Gain Enthalpy of Oxygen ($O^- \\to O^{2-}$) positive or negative?", 
          options: [
            { id: "A", text: "Positive (Endothermic)", isCorrect: true, explanation: "Energy needed to overcome repulsion between anion and electron." },
            { id: "B", text: "Negative (Exothermic)", isCorrect: false, explanation: "1st EGE is negative, 2nd is positive." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-2",
      title: "Electronegativity",
      description: "Q 3.23",
      icon: "Magnet",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.23", 
          content: "Is electronegativity constant for an element?", 
          options: [
            { id: "A", text: "No, depends on hybridization/environment", isCorrect: true, explanation: "Variable depending on bonding state." },
            { id: "B", text: "Yes, it is a fixed property", isCorrect: false, explanation: "Unlike IE, it varies." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-3",
      title: "Isotopes & Metals",
      description: "Q 3.25 - 3.26",
      icon: "Layers",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.25", 
          content: "Are IE values for isotopes of the same element different?", 
          options: [
            { id: "A", text: "No, same", isCorrect: true, explanation: "IE depends on Z and config, which are identical." },
            { id: "B", text: "Yes, different", isCorrect: false, explanation: "Mass doesn't affect IE significantly." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.26", 
          content: "Metals generally form ___ oxides.", 
          options: [
            { id: "A", text: "Basic", isCorrect: true, explanation: "e.g., Na2O." },
            { id: "B", text: "Acidic", isCorrect: false, explanation: "Non-metals form acidic oxides." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-4",
      title: "Config Prediction",
      description: "Q 3.27 - 3.30",
      icon: "Cpu",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.27(b)", 
          content: "Identify element that tends to lose 2 electrons to gain stable config.", 
          options: [
            { id: "A", text: "Group 2 (Alkaline Earth)", isCorrect: true, explanation: "ns2 config." },
            { id: "B", text: "Group 16 (Chalcogens)", isCorrect: false, explanation: "Gains 2 electrons." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.30", 
          content: "Assign position for $[Ar] 3d^2 4s^2$ (n=4).", 
          options: [
            { id: "A", text: "Period 4, Group 4", isCorrect: true, explanation: "Titanium. Group = 2+2=4." },
            { id: "B", text: "Period 4, Group 2", isCorrect: false, explanation: "d-electrons contribute to group number." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-5",
      title: "Reactivity Trends",
      description: "Q 3.28, 3.40",
      icon: "Flame",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.28", 
          content: "Reactivity of Halogens decreases down the group because:", 
          options: [
            { id: "A", text: "Electron gain enthalpy becomes less negative", isCorrect: true, explanation: "Ability to accept electron decreases." },
            { id: "B", text: "Ionization enthalpy increases", isCorrect: false, explanation: "IE actually decreases." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.40", 
          content: "Correct order of oxidizing power: F, Cl, O, N.", 
          options: [
            { id: "A", text: "F > O > Cl > N", isCorrect: true, explanation: "Fluorine is strongest oxidant." },
            { id: "B", text: "F > Cl > O > N", isCorrect: false, explanation: "O is stronger than Cl." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-6",
      title: "Complex Analysis",
      description: "Q 3.31",
      icon: "Search",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Data Table",
          content: "Consider Element I: $\\Delta H_1 = 520$, $\\Delta H_2 = 7300$ kJ/mol.\nBig jump after 1st electron $\\to$ Alkali Metal (Li)."
        },
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.31(b)", 
          content: "Which element from the table (I to VI) is the most reactive metal?", 
          options: [
            { id: "A", text: "Element II (419, 3051)", isCorrect: true, explanation: "Lowest IE1 (419) indicates most reactive alkali metal (e.g. K)." },
            { id: "B", text: "Element I (520, 7300)", isCorrect: false, explanation: "Higher IE1 than II." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.31(c)", 
          content: "Most reactive non-metal?", 
          options: [
            { id: "A", text: "Element III (1681, 3374, -328)", isCorrect: true, explanation: "High IE and large negative EGE (Halogen)." },
            { id: "B", text: "Element V (2372... +48)", isCorrect: false, explanation: "Noble gas (Positive EGE)." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-7",
      title: "Formulas",
      description: "Q 3.32",
      icon: "Beaker",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.32", 
          content: "Formula for compound formed by Aluminium and Sulphur?", 
          options: [
            { id: "A", text: "$Al_2S_3$", isCorrect: true, explanation: "Al is +3, S is -2." },
            { id: "B", text: "$Al_3S_2$", isCorrect: false, explanation: "Incorrect valency swap." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.32(f)", 
          content: "Formula for Element 71 (Lu) and Fluorine?", 
          options: [
            { id: "A", text: "$LuF_3$", isCorrect: true, explanation: "Lu is Lanthanoid, common valence +3." },
            { id: "B", text: "$LuF$", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-6-8",
      title: "Table Rules",
      description: "Q 3.34 - 3.38",
      icon: "List",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.34", 
          content: "Which statement is incorrect?", 
          options: [
            { id: "A", text: "The d-block has 8 columns", isCorrect: true, explanation: "Incorrect. It has 10 columns (d1 to d10)." },
            { id: "B", text: "p-block has 6 columns", isCorrect: false, explanation: "Correct." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.38", 
          content: "Correct order of metallic character: B, Al, Mg, K.", 
          options: [
            { id: "A", text: "$K > Mg > Al > B$", isCorrect: true, explanation: "Increases down, decreases across." },
            { id: "B", text: "$B > Al > Mg > K$", isCorrect: false, explanation: "Reverse." }
          ] 
        }
      ]
    }
  ]
};