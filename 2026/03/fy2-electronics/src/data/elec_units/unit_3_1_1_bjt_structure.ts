import { Unit } from '../../types';

export const UNIT_3_1_1: Unit = {
  id: "unit-3-1-1",
  title: "BJT Structure",
  description: "NPN and PNP",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-1-1",
      title: "What is a Transistor?",
      description: "Transfer Resistor",
      icon: "Layers",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Definition",
          content: "A **Transistor** is a semiconductor device formed by sandwiching a layer of one type of semiconductor between two layers of the opposite type.\n\nIt has **Two PN Junctions** and **Three Terminals**."
        },
        {
          id: "sandwich",
          type: "interactive_canvas",
          title: "Sandwich Construction",
          content: "Two types: **NPN** (P-block sandwiched) and **PNP** (N-block sandwiched).",
          interactiveCanvasId: "bjt-structure-sandwich"
        },
        {
          id: "etymology",
          type: "fill_in_blank",
          title: "Naming",
          content: "The name 'Transistor' comes from **Transfer** + **___**.",
          blankAnswer: "resistor"
        }
      ]
    },
    {
      id: "les-3-1-1-2",
      title: "Diode Analogy",
      description: "Back-to-Back Diodes",
      icon: "GitMerge",
      slides: [
        {
          id: "analogy",
          type: "quiz",
          title: "Analogy",
          content: "Structurally, a transistor looks like two diodes connected:",
          options: [
            { id: "A", text: "In Series", isCorrect: false, explanation: "" },
            { id: "B", text: "Back-to-Back", isCorrect: true, explanation: "N-P-N is like N-P diode + P-N diode sharing the P region." }
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Diode Equivalent",
          content: "Visualizing the NPN structure as two diodes sharing a common anode (Base).",
          interactiveCanvasId: "bjt-diode-analogy"
        }
      ]
    }
  ]
};