import { Unit } from '../../types';

export const UNIT_2_1_3: Unit = {
  id: "unit-2-1-3",
  title: "Reaction Energetics",
  description: "Hess Law & Bond Energy",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-1-3-1",
      title: "Enthalpy of Formation",
      description: "Reference for Calculations",
      icon: "Construction",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Standard Enthalpy of Formation ($\\Delta_f H^\\ominus$)",
          content: "Enthalpy change when **one mole** of a compound is formed from its elements in their most stable states of aggregation (Reference States).\n\nExample: $H_2(g) + 1/2 O_2(g) \\to H_2O(l)$\n\nNote: $\\Delta_f H^\\ominus$ of elements in stable state (e.g., $C_{graphite}, O_2$) is ZERO."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Which reaction represents $\\Delta_f H$ of $CO_2$?",
          options: [
            { id: "A", text: "$C(graphite) + O_2(g) \\to CO_2(g)$", isCorrect: true, explanation: "Elements in standard state." },
            { id: "B", text: "$C(diamond) + O_2(g) \\to CO_2(g)$", isCorrect: false, explanation: "Diamond is not standard state." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Standard state of Bromine?", options: [{id: "A", text: "Liquid", isCorrect: true, explanation: "Br2(l)"}, {id: "B", text: "Gas", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-1-3-2",
      title: "Hess's Law",
      description: "Additivity of Heat",
      icon: "Plus",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Hess's Law is based on Enthalpy being:", options: [{id: "A", text: "State Function", isCorrect: true, explanation: "Path independent."}, {id: "B", text: "Path Function", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hess's Law",
          content: "The standard enthalpy of an overall reaction is the sum of the standard enthalpies of the intermediate reactions into which the overall reaction may be divided.\n\n$$\\Delta_r H = \\Delta H_1 + \\Delta H_2 + \\Delta H_3 ...$$"
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Application",
          content: "Calculate $\\Delta H$ for $C \\to CO$ using:\n1. $C \\to CO_2$ (-393 kJ)\n2. $CO \\to CO_2$ (-283 kJ)",
          interactiveSteps: [
            { stepText: "Target: $C + 1/2 O_2 \\to CO$" },
            { stepText: "Eq 1: $C + O_2 \\to CO_2$ ($\Delta H_1 = -393$)" },
            { stepText: "Reverse Eq 2: $CO_2 \\to CO + 1/2 O_2$ ($\Delta H_2 = +283$)" },
            { stepText: "Add: $-393 + 283 = -110$ kJ/mol." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is work a state function?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Yes", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-1-3-3",
      title: "Enthalpy of Combustion",
      description: "Burning Energy",
      icon: "Flame",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Combustion Enthalpy ($\\Delta_c H$)",
          content: "Enthalpy change when one mole of substance is completely burnt in excess oxygen.\n\n- It is always **negative** (Exothermic).\n- Example: Glucose combustion releases 2802 kJ/mol."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Combustion reactions are always ___ in nature.",
          blankAnswer: "exothermic"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Does $\\Delta_c H$ of Graphite equal $\\Delta_f H$ of $CO_2$?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "Both represent $C + O_2 \\to CO_2$." },
            { id: "B", text: "No", isCorrect: false, explanation: "They are the same reaction." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Delta H relation with Delta U for solids?", options: [{id: "A", text: "Equal", isCorrect: true, explanation: "Negligible volume change"}, {id: "B", text: "Different", isCorrect: false, explanation: "Only for gases"}]}
      ]
    },
    {
      id: "les-2-1-3-4",
      title: "Atomization Enthalpy",
      description: "Breaking to Atoms",
      icon: "Atom",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Enthalpy of Atomization ($\\Delta_a H$)",
          content: "Enthalpy change on breaking one mole of bonds completely to obtain **atoms in the gas phase**.\n\nExample: $H_2(g) \\to 2H(g)$.\nFor diatomics, this equals Bond Dissociation Enthalpy."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "For $CH_4$, $\\Delta_a H = 1665$ kJ/mol. What is mean C-H bond enthalpy?",
          numericAnswer: 416.25,
          numericTolerance: 1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Reference state of C?", options: [{id: "A", text: "Graphite", isCorrect: true, explanation: "Most stable"}, {id: "B", text: "Diamond", isCorrect: false, explanation: "Metastable"}]}
      ]
    },
    {
      id: "les-2-1-3-5",
      title: "Bond Enthalpy",
      description: "Bond Energy",
      icon: "Link",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Bond Enthalpy",
          content: "**Bond Dissociation Enthalpy:** Energy to break 1 mole of specific bonds.\n**Mean Bond Enthalpy:** Average energy for polyatomic molecules (e.g., C-H in methane).\n\nReaction Enthalpy Estimate:\n$$ \\Delta_r H = \\sum \\Delta H_{bonds(reactants)} - \\sum \\Delta H_{bonds(products)} $$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Bond Energy",
          content: "Visual of breaking bonds (Endothermic) and forming bonds (Exothermic).",
          interactiveCanvasId: "chem-lewis-dot"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Sign Convention",
          content: "Bond breaking is:",
          options: [
            { id: "A", text: "Endothermic (+)", isCorrect: true, explanation: "Requires energy." },
            { id: "B", text: "Exothermic (-)", isCorrect: false, explanation: "Formation releases energy." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Delta H of formation of O2(g) zero?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-2-1-3-6",
      title: "Lattice & Solution",
      description: "Born-Haber Cycle",
      icon: "Grid",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Lattice Enthalpy",
          content: "Energy change when 1 mole of ionic compound dissociates into gaseous ions.\n**Born-Haber Cycle:** Indirect method using Hess's Law.\n\n**Enthalpy of Solution:** $\\Delta_{sol} H = \\Delta_{lattice} H + \\Delta_{hyd} H$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Born-Haber",
          content: "Steps forming NaCl (Sublimation, Ionization, Dissociation, Electron Gain, Lattice).",
          interactiveCanvasId: "chem-ionic-lattice"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Solubility Condition",
          content: "For a salt to dissolve, hydration energy should usually overcome:",
          options: [
            { id: "A", text: "Lattice Enthalpy", isCorrect: true, explanation: "Pulling ions apart." },
            { id: "B", text: "Ionization Enthalpy", isCorrect: false, explanation: "Relevant for formation, not solution." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is $\\Delta_{eg}H$ for Cl positive?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Negative (Exothermic)"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    }
  ]
};