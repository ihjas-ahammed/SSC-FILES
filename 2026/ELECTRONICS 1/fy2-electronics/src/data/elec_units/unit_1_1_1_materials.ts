import { Unit } from '../../types';

export const UNIT_1_1_1: Unit = {
  id: "unit-1-1-1",
  title: "Material Fundamentals",
  description: "Classification by Resistivity",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-1-1",
      title: "What is a Semiconductor?",
      description: "Defining properties",
      icon: "Zap",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Intuition Check",
          content: "If you heat a Copper wire, its resistance increases. What do you think happens if you heat a Silicon chip?",
          options: [
            { id: "A", text: "Resistance Increases", isCorrect: false, explanation: "Silicon behaves differently from metals." },
            { id: "B", text: "Resistance Decreases", isCorrect: true, explanation: "Correct! Semiconductors have a Negative Temperature Coefficient (NTC)." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "The Definition",
          content: "A **Semiconductor** is a substance whose resistivity ($\rho$) lies between conductors and insulators.\n\n$$ 10^{-4} \\, \\Omega m < \\rho_{semi} < 0.5 \\, \\Omega m $$\n\nExamples: Germanium (Ge), Silicon (Si), Carbon (C)."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Resistivity Spectrum",
          content: "Visualizing where semiconductors sit on the resistivity scale.",
          interactiveCanvasId: "semi-resistivity-chart"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "The resistivity of a semiconductor is generally between $10^{-4}$ and ___ $\\Omega m$.",
          blankAnswer: "0.5"
        },
        {
          id: "elab",
          type: "quiz",
          title: "Critical Thinking",
          content: "**Assertion:** Germanium is neither a good conductor nor a good insulator.\n**Reason:** Its resistivity (0.6 $\\Omega$m) is much higher than Copper ($10^{-8}$) but much lower than Glass ($10^{11}$).",
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "Its intermediate resistivity is the defining characteristic." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Review the resistivity table values." }
          ]
        }
      ]
    },
    {
      id: "les-1-1-1-2",
      title: "Comparison of Materials",
      description: "Conductor vs Semi vs Insulator",
      icon: "BarChart",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Recall",
          content: "Which material has the highest resistivity?",
          options: [
            { id: "A", text: "Germanium", isCorrect: false, explanation: "0.6 Ohm-m" },
            { id: "B", text: "Glass", isCorrect: true, explanation: "10^11 Ohm-m" }
          ]
        },
        {
          id: "table",
          type: "theory",
          title: "The Data",
          content: "| Material | Type | Resistivity ($\\Omega m$) |\n|---|---|---|\n| Copper | Conductor | $1.7 \\times 10^{-8}$ |\n| Germanium | Semiconductor | 0.6 |\n| Glass | Insulator | $9 \\times 10^{11}$ |\n| Nichrome | Resistance Alloy | $10^{-4}$ |"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Material Sorter",
          content: "Drag items to their resistivity buckets.",
          interactiveCanvasId: "semi-material-sorter"
        },
        {
          id: "check",
          type: "quiz",
          title: "Quick Check",
          content: "Nichrome is a resistance material. Is it a semiconductor?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Resistivity overlaps, but it lacks other semiconductor properties (like NTC)." },
            { id: "B", text: "No", isCorrect: true, explanation: "Correct. Resistivity alone is not the only deciding factor." }
          ]
        }
      ]
    },
    {
      id: "les-1-1-1-3",
      title: "Five Peculiar Properties",
      description: "Why Semi != Resistor",
      icon: "List",
      slides: [
        {
          id: "list",
          type: "theory",
          title: "Key Properties",
          content: "1. Formed by **Covalent Bonds**.\n2. **Crystalline** structure.\n3. Intermediate resistivity.\n4. **Negative Temperature Coefficient (NTC):** Resistance *decreases* as Temp *increases*.\n5. **Doping Sensitivity:** Adding impurities drastically changes conductivity."
        },
        {
          id: "ntc-vis",
          type: "interactive_canvas",
          title: "Temperature Effect",
          content: "See how resistance changes with temperature for Copper vs Silicon.",
          interactiveCanvasId: "semi-temp-coeff"
        },
        {
          id: "quiz-ntc",
          type: "quiz",
          title: "Application",
          content: "At 0 Kelvin (Absolute Zero), a pure semiconductor behaves as a:",
          options: [
            { id: "A", text: "Perfect Conductor", isCorrect: false, explanation: "Resistance would be zero." },
            { id: "B", text: "Perfect Insulator", isCorrect: true, explanation: "Resistance becomes infinite as Temp drops." }
          ]
        },
        {
          id: "flash",
          type: "quiz",
          title: "Flashback",
          content: "What is the order of magnitude for Copper's resistivity?",
          options: [
            { id: "A", text: "$10^{-8}$", isCorrect: true, explanation: "Very low." },
            { id: "B", text: "$10^{-4}$", isCorrect: false, explanation: "That's Nichrome." }
          ]
        }
      ]
    }
  ]
};