import { Unit } from '../../types';

export const UNIT_4_1_4: Unit = {
  id: "unit-4-1-4",
  title: "Section 4.1 Exercises",
  description: "Test your Digital Knowledge",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-1-4-1",
      title: "Signal Identification",
      description: "Analog or Digital?",
      icon: "HelpCircle",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Scenario 1",
          content: "The temperature of a room changes from 20°C to 20.1°C to 20.2°C. This data is:",
          options: [
            { id: "A", text: "Analog", isCorrect: true, explanation: "Temperature varies continuously." },
            { id: "B", text: "Digital", isCorrect: false, explanation: "" }
          ]
        },
        {
          id: "q2",
          type: "quiz",
          title: "Scenario 2",
          content: "A switch that turns a motor either ON or OFF.",
          options: [
            { id: "A", text: "Analog", isCorrect: false, explanation: "" },
            { id: "B", text: "Digital", isCorrect: true, explanation: "Only two discrete states." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-4-2",
      title: "Logic Levels",
      description: "Voltage & States",
      icon: "CheckSquare",
      slides: [
        {
          id: "q3",
          type: "fill_in_blank",
          title: "Voltage",
          content: "In a standard digital circuit, +5V corresponds to Logic ___.",
          blankAnswer: "1"
        },
        {
          id: "q4",
          type: "quiz",
          title: "Reliability",
          content: "Why is digital preferred for computers?",
          options: [
            { id: "A", text: "It can handle infinite values", isCorrect: false, explanation: "That's Analog." },
            { id: "B", text: "It is more reliable against noise", isCorrect: true, explanation: "Two-state operation is robust." }
          ]
        }
      ]
    }
  ]
};