import { Unit } from '../../types';

export const UNIT_2_3_4: Unit = {
  id: "unit-2-3-4",
  title: "Redox Exercises",
  description: "NCERT Chapter 7",
  color: "duo-violet",
  lessons: [
    {
      id: "exe-2-3-4-1",
      title: "Oxidation Numbers",
      description: "Q 8.1 - 8.5",
      icon: "Hash",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 8.1", 
          content: "Oxidation number of Cr in $K_2Cr_2O_7$.", 
          numericAnswer: 6, 
          numericTolerance: 0 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 8.2", 
          content: "Oxidation number of S in $H_2SO_4$.", 
          numericAnswer: 6, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-2-3-4-2",
      title: "Identify Agents",
      description: "Q 8.10",
      icon: "Search",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.10", 
          content: "Identify oxidant in: $2H_2O(l) + 2F_2(g) \\to 4HF(aq) + O_2(g)$.", 
          options: [
            { id: "A", text: "$F_2$", isCorrect: true, explanation: "Reduces from 0 to -1. Oxidizes Oxygen." },
            { id: "B", text: "$H_2O$", isCorrect: false, explanation: "Reductant." }
          ] 
        }
      ]
    },
    {
      id: "exe-2-3-4-3",
      title: "Balancing",
      description: "Q 8.18",
      icon: "Scale",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 8.18(a)", 
          content: "Balance $MnO_4^- + I^- \\to MnO_2 + I_2$ in basic medium. Coefficient of $OH^-$?", 
          numericAnswer: 8, 
          numericTolerance: 0 
        }
      ]
    }
  ]
};