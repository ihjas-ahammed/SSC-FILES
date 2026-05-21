import { Unit } from '../../types';

export const UNIT_1_3_5: Unit = {
  id: "unit-1-3-5",
  title: "Trends Exercises",
  description: "NCERT Exe 3.1 – 3.20",
  color: "duo-blue",
  lessons: [
    {
      id: "exe-1-3-5-1",
      title: "History & Structure",
      description: "Q 3.1 - 3.4",
      icon: "BookOpen",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.2", 
          content: "Which important property did Mendeleev use to classify the elements?", 
          options: [
            { id: "A", text: "Atomic Number", isCorrect: false, explanation: "That is the Modern law." },
            { id: "B", text: "Atomic Weight", isCorrect: true, explanation: "He arranged by atomic weight (with some inversions)." }
          ] 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 3.4", 
          content: "Justify that the 6th period has 32 elements. Total orbitals filled are $6s, 4f, 5d, 6p$. How many total orbitals is this?", 
          numericAnswer: 16, 
          numericTolerance: 0 
        },
        { 
          id: "sol-2", 
          type: "solution", 
          title: "Logic", 
          content: "Number of elements = $2 \\times$ Number of orbitals.", 
          interactiveSteps: [
            { stepText: "Orbitals: 1 (6s) + 7 (4f) + 5 (5d) + 3 (6p) = 16." },
            { stepText: "Max electrons = $16 \\times 2 = 32$ elements." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-5-2",
      title: "Locating Elements",
      description: "Q 3.5 - 3.6",
      icon: "MapPin",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.5", 
          content: "Where would you locate the element with Z = 114?", 
          options: [
            { id: "A", text: "Period 7, Group 14", isCorrect: true, explanation: "Radon (86) + 14(f) + 10(d) + 2(s) + 2(p) = 114. Group 14." },
            { id: "B", text: "Period 6, Group 4", isCorrect: false, explanation: "Incorrect count." }
          ] 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 3.6", 
          content: "What is the atomic number of the element in the 3rd period and 17th group?", 
          numericAnswer: 17, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-1-3-5-3",
      title: "Nomenclature",
      description: "Q 3.7",
      icon: "Type",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.7", 
          content: "Which element was named by Seaborg's group?", 
          options: [
            { id: "A", text: "Seaborgium (Sg, 106)", isCorrect: true, explanation: "Named in his honour." },
            { id: "B", text: "Lawrencium (Lr, 103)", isCorrect: false, explanation: "Lawrence Berkeley Lab." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-5-4",
      title: "Radius Trends",
      description: "Q 3.8 - 3.10",
      icon: "Maximize",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.8", 
          content: "Why do elements in the same group have similar properties?", 
          options: [
            { id: "A", text: "Similar valence shell configuration", isCorrect: true, explanation: "Same number of outer electrons." },
            { id: "B", text: "Same atomic mass", isCorrect: false, explanation: "Mass increases down a group." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.10", 
          content: "How does atomic radius vary across a period?", 
          options: [
            { id: "A", text: "Decreases", isCorrect: true, explanation: "Due to increasing Zeff." },
            { id: "B", text: "Increases", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-5-5",
      title: "Isoelectronic Species",
      description: "Q 3.11 - 3.12",
      icon: "Users",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.11", 
          content: "Select the species isoelectronic with $F^-$ (9 + 1 = 10e).", 
          options: [
            { id: "A", text: "$Na^+$", isCorrect: true, explanation: "Na (11) - 1 = 10e." },
            { id: "B", text: "$Ar$", isCorrect: false, explanation: "18e." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.12", 
          content: "Arrange by size: $N^{3-}, O^{2-}, F^-$ (Isoelectronic).", 
          options: [
            { id: "A", text: "$N^{3-} > O^{2-} > F^-$", isCorrect: true, explanation: "Lower nuclear charge = Larger size." },
            { id: "B", text: "$F^- > O^{2-} > N^{3-}$", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-3-5-6",
      title: "Ionization Enthalpy",
      description: "Q 3.13 - 3.15",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.13", 
          content: "Why are cations smaller than parent atoms?", 
          options: [
            { id: "A", text: "Increased Zeff", isCorrect: true, explanation: "Same protons holding fewer electrons." },
            { id: "B", text: "Decreased Zeff", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Exercise 3.15",
          content: "Energy of ground state H-atom is $-2.18 \\times 10^{-18}$ J. Calculate Ionization Enthalpy in kJ/mol. (Hint: Remove to infinity).",
          numericAnswer: 1313,
          numericTolerance: 5
        }
      ]
    },
    {
      id: "exe-1-3-5-7",
      title: "IE Exceptions",
      description: "Q 3.16 - 3.20",
      icon: "AlertTriangle",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 3.16", 
          content: "Why does Be have higher $\\Delta_i H$ than B?", 
          options: [
            { id: "A", text: "Penetration of 2s electrons", isCorrect: true, explanation: "2s is closer to nucleus than 2p." },
            { id: "B", text: "Size of Be is larger", isCorrect: false, explanation: "Be is smaller than Li, but comparison is with B." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 3.17", 
          content: "Why is 2nd IE of Na > Mg?", 
          options: [
            { id: "A", text: "Na+ has stable noble gas config", isCorrect: true, explanation: "Removal from 2p6 is very hard." },
            { id: "B", text: "Mg+ is smaller", isCorrect: false, explanation: "Na+ is very stable." }
          ] 
        }
      ]
    }
  ]
};