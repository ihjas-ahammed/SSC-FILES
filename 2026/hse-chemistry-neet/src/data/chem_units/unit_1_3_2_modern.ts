import { Unit } from '../../types';

export const UNIT_1_3_2: Unit = {
  id: "unit-1-3-2",
  title: "Modern Periodic Table",
  description: "Law & Nomenclature",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-2-1",
      title: "Modern Periodic Law",
      description: "Moseley's Discovery",
      icon: "Activity",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Moseley plotted square root of frequency vs:", options: [{id: "A", text: "Atomic Weight", isCorrect: false, explanation: "Non-linear."}, {id: "B", text: "Atomic Number", isCorrect: true, explanation: "Straight line."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Modern Periodic Law (1913)",
          content: "Henry Moseley showed that **Atomic Number (Z)** is a more fundamental property than atomic mass.\n\n**Law:** The physical and chemical properties of the elements are periodic functions of their **atomic numbers**.\n\nPeriodicity is due to repetition of outer electronic configurations."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Atomic number is equal to the nuclear charge or number of ___ in a neutral atom.",
          blankAnswer: "electrons"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of s-orbital?", options: [{id: "A", text: "Spherical", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Dumbbell", isCorrect: false, explanation: "p-orbital"}]}
      ]
    },
    {
      id: "les-1-3-2-2",
      title: "Long Form Table",
      description: "Periods and Groups",
      icon: "Grid",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Structure",
          content: "**Groups:** 18 Vertical columns.\n**Periods:** 7 Horizontal rows.\n\nPeriod number corresponds to highest principal quantum number ($n$).\n- 1st period: 2 elements ($1s$).\n- 2nd/3rd: 8 elements.\n- 4th/5th: 18 elements.\n- 6th/7th: 32 elements."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Fact Check",
          content: "How many elements in the 4th period?",
          options: [
            { id: "A", text: "18", isCorrect: true, explanation: "Fills 4s, 3d, 4p." },
            { id: "B", text: "8", isCorrect: false, explanation: "2nd/3rd periods." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Config of Cr?", options: [{id: "A", text: "3d5 4s1", isCorrect: true, explanation: "Exception"}, {id: "B", text: "3d4 4s2", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-3-2-3",
      title: "Magic Numbers",
      description: "2, 8, 8, 18, 18, 32",
      icon: "Hash",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Magic Numbers",
          content: "The number of elements in each period: **2, 8, 8, 18, 18, 32**.\nThese numbers help locate elements and predict atomic numbers of group members.\nExample: Group 1: Li(3) +8 $\\to$ Na(11) +8 $\\to$ K(19) +18 $\\to$ Rb(37)."
        },
        {
          id: "app-1",
          type: "numerical",
          title: "Prediction",
          content: "Atomic number of element below atomic number 55 (Cs) in Group 1?",
          numericAnswer: 87,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Heisenberg Principle?", options: [{id: "A", text: "Pos x Mom >= h/4pi", isCorrect: true, explanation: "Correct"}, {id: "B", text: "E = hv", isCorrect: false, explanation: "Planck"}]}
      ]
    },
    {
      id: "les-1-3-2-4",
      title: "Nomenclature Z > 100",
      description: "IUPAC Rules",
      icon: "Type",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Why distinct names for Z>100?", options: [{id: "A", text: "Avoid discovery disputes", isCorrect: true, explanation: "Systematic naming until confirmed."}, {id: "B", text: "They are stable", isCorrect: false, explanation: "Very unstable."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Roots",
          content: "0=nil, 1=un, 2=bi, 3=tri, 4=quad, 5=pent, 6=hex, 7=sept, 8=oct, 9=enn.\nSuffix: -ium.\n\nExample: 101 $\\to$ Un-nil-un-ium (Unu)."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "Naming",
          content: "The IUPAC name for element with Z = 120 would be ___.",
          blankAnswer: "unbinilium"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Symbol",
          content: "Symbol for element 119?",
          options: [
            { id: "A", text: "Uue", isCorrect: true, explanation: "Un-un-enn-ium." },
            { id: "B", text: "Uun", isCorrect: false, explanation: "110 (Ununnilium)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Pauli Exclusion Principle?", options: [{id: "A", text: "No 2 e- have same 4 QNs", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Max multiplicity", isCorrect: false, explanation: "Hund"}]}
      ]
    },
    {
      id: "les-1-3-2-5",
      title: "Official Names",
      description: "Recent Discoveries",
      icon: "Award",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Official Names",
          content: "**104:** Rutherfordium (Rf)\n**106:** Seaborgium (Sg)\n**118:** Oganesson (Og)\n\nNote: 101 is Mendelevium (Md), 103 is Lawrencium (Lr)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Match",
          content: "Seaborgium corresponds to Z =",
          options: [
            { id: "A", text: "106", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "104", isCorrect: false, explanation: "Rutherfordium." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is H-atom spectrum continuous?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Line spectrum"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    }
  ]
};