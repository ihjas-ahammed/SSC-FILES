import { Unit } from '../../types';

export const UNIT_4_1_1: Unit = {
  id: "unit-4-1-1",
  title: "Signal Theory",
  description: "Analog vs Digital Definitions",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-1-1-1",
      title: "Analog Signals",
      description: "Infinite possibilities",
      icon: "Activity",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "Think of a dimmer switch for a light. It allows you to set the brightness to 10%, 50%, 99.5%, etc. This represents:",
          options: [
            { id: "A", text: "A Digital System", isCorrect: false, explanation: "Digital would be just ON or OFF." },
            { id: "B", text: "An Analog System", isCorrect: true, explanation: "It offers a continuous range of values." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Analog Signal",
          content: "A continuously varying signal (voltage or current) is called an **Analog Signal**.\n\nThe output voltage can have an **infinite** number of values."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Waveform Comparison",
          content: "Observe the smooth, continuous nature of the Analog sine wave vs the discrete steps of Digital.",
          interactiveCanvasId: "analog-vs-digital-waves"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Key Characteristic",
          content: "An analog signal can have an ___ number of values.",
          blankAnswer: "infinite"
        },
        {
          id: "elab",
          type: "quiz",
          title: "Critical Thinking",
          content: "**Assertion:** Analog operation is less reliable than digital.\n**Reason:** Analog signals have many values, making it harder to distinguish a specific level from noise.",
          options: [
            { id: "A", text: "Both True", isCorrect: true, explanation: "Correct. Distinguishing 4.9V from 5.0V is harder than distinguishing ON from OFF." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "" }
          ]
        }
      ]
    },
    {
      id: "les-4-1-1-2",
      title: "Digital Signals",
      description: "Discrete values",
      icon: "Binary",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "A standard light switch (toggle) is an example of:",
          options: [
            { id: "A", text: "Analog Operation", isCorrect: false, explanation: "" },
            { id: "B", text: "Digital Operation", isCorrect: true, explanation: "It has only two states: ON or OFF." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Digital Signal",
          content: "A signal that can have only **two discrete values** is called a **Digital Signal**.\n\nExample: A square wave (0V or +5V). These values are labelled High/Low, ON/OFF, or 1/0."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Square Wave",
          content: "Review the Digital wave in the comparison chart. Note the sharp transitions.",
          interactiveCanvasId: "analog-vs-digital-waves"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Values",
          content: "A digital signal has only ___ discrete values.",
          blankAnswer: "two"
        }
      ]
    },
    {
      id: "les-4-1-1-3",
      title: "Logic & Comparison",
      description: "Distinguishing the two",
      icon: "GitCompare",
      slides: [
        {
          id: "compare",
          type: "quiz",
          title: "Identification",
          content: "Which of the following is a Digital Signal?",
          options: [
            { id: "A", text: "A sine wave from AC mains", isCorrect: false, explanation: "That is analog (continuous variation)." },
            { id: "B", text: "A square wave from a clock circuit", isCorrect: true, explanation: "It jumps between two fixed levels." }
          ]
        }
      ]
    }
  ]
};