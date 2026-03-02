import { Unit } from '../../types';

export const UNIT_1_1_4: Unit = {
  id: "unit-1-1-4",
  title: "Section 1.1 Exercises",
  description: "Test your understanding",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-4-1",
      title: "Conceptual Review",
      description: "Properties & Theory",
      icon: "CheckCircle",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Question 1",
          content: "The resistivity of a semiconductor is ___ than that of a conductor.",
          options: [
            { id: "A", text: "More", isCorrect: true, explanation: "Conductors (10^-8) < Semi (10^-4)." },
            { id: "B", text: "Less", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "q2",
          type: "quiz",
          title: "Question 2",
          content: "The temperature coefficient of resistance for a semiconductor is:",
          options: [
            { id: "A", text: "Positive", isCorrect: false, explanation: "That's metals." },
            { id: "B", text: "Negative", isCorrect: true, explanation: "Heat breaks bonds -> More carriers -> Less resistance." }
          ]
        },
        {
          id: "q3",
          type: "fill_in_blank",
          title: "Question 3",
          content: "Valence electrons in a semiconductor are not free because they are trapped in ___ bonds.",
          blankAnswer: "covalent"
        }
      ]
    },
    {
      id: "les-1-1-4-2",
      title: "Numerical Challenge",
      description: "Carrier Math",
      icon: "Hash",
      slides: [
        {
          id: "q4",
          type: "numerical",
          title: "Donor Density",
          content: "Pure Si ($5 \\times 10^{28} atoms/m^3$) is doped with 1 ppm Arsenic. Calculate electron density ($n_e$).\nHint: 1 ppm = $10^{-6}$.",
          numericAnswer: 5, 
          numericTolerance: 0.1
        },
        {
          id: "hint",
          type: "solution",
          title: "Logic",
          content: "1 As atom replaces 1 Si atom. 1 As donates 1 electron.",
          interactiveSteps: [
            { stepText: "Density = Total Atoms $\\times$ ppm" },
            { stepText: "$5 \\times 10^{28} \\times 10^{-6} = 5 \\times 10^{22} m^{-3}$" }
          ]
        },
        {
          id: "q5",
          type: "quiz",
          title: "Mass Action Law",
          content: "If $n_e = 5 \\times 10^{22}$ and $n_i = 1.5 \\times 10^{16}$, finding $n_h$ requires:",
          options: [
            { id: "A", text: "$n_h = n_i^2 / n_e$", isCorrect: true, explanation: "$n_e n_h = n_i^2$" },
            { id: "B", text: "$n_h = n_e - n_i$", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    }
  ]
};