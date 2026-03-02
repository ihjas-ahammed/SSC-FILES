import { Unit } from '../../types';

export const UNIT_1_2_1: Unit = {
  id: "unit-1-2-1",
  title: "Formation Dynamics",
  description: "How PN Junctions are made",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-1-1",
      title: "What is a PN Junction?",
      description: "The fundamental building block",
      icon: "Layers",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Intuition Check",
          content: "If you simply press a block of P-type material against a block of N-type material, will it work as a diode?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Surface roughness and air gaps prevent atomic-level contact." },
            { id: "B", text: "No", isCorrect: true, explanation: "Correct. A continuous crystal lattice is required." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "The Definition",
          content: "A **PN Junction** is the contact surface formed when a p-type semiconductor is suitably joined to an n-type semiconductor within the *same* crystal lattice.\n\nIt is the control element for almost all semiconductor devices (Diodes, Transistors, FETs)."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Alloying Process",
          content: "Visualizing the formation of a junction using Indium and Germanium.",
          interactiveCanvasId: "pn-formation-alloying"
        }
      ]
    },
    {
      id: "les-1-2-1-2",
      title: "Fabrication: Alloying",
      description: "Indium meets Germanium",
      icon: "Thermometer",
      slides: [
        {
          id: "process",
          type: "proof", // Using proof template for step-by-step mechanism
          title: "Alloying Technique",
          content: "How do we create a single crystal with two distinct regions?",
          proofSteps: [
            "1. A small block of **Indium** (Trivalent) is placed on an n-type **Germanium** slab.",
            "2. The system is heated to ~500°C. Indium and some Germanium melt.",
            "3. Upon cooling, the puddle solidifies. Indium atoms dope the recrystallized Germanium.",
            "4. The recrystallized region becomes **p-type** (due to Indium). The base remains **n-type**."
          ]
        },
        {
          id: "check",
          type: "quiz",
          title: "Material Check",
          content: "In the alloying process described, Indium acts as a ___ impurity.",
          options: [
            { id: "A", text: "Pentavalent (Donor)", isCorrect: false, explanation: "Indium is Group 13 (3 valence electrons)." },
            { id: "B", text: "Trivalent (Acceptor)", isCorrect: true, explanation: "It creates holes, forming the p-region." }
          ]
        }
      ]
    }
  ]
};