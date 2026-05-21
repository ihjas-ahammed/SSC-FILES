import { Unit } from '../../types';

export const UNIT_1_3_1: Unit = {
  id: "unit-1-3-1",
  title: "Historical Classification",
  description: "Genesis of the Periodic Table",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-1-1",
      title: "Why Classify?",
      description: "Organizing Chemistry",
      icon: "Book",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "How many elements were known in 1800?", options: [{id: "A", text: "31", isCorrect: true, explanation: "Only 31."}, {id: "B", text: "63", isCorrect: false, explanation: "That was in 1865."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Need for Classification",
          content: "In 1800, only 31 elements were known. By 1865, 63 were known. Today, 114+.\n\nClassification is essential to **rationalize known facts** and **predict new ones**. It helps organize the study of elements and their compounds systematically."
        },
        { id: "ret-1", type: "fill_in_blank", title: "NCERT Check", content: "Classification helps to ___ known chemical facts.", blankAnswer: "rationalize" },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Who discovered the electron?", options: [{id: "A", text: "Thomson", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Rutherford", isCorrect: false, explanation: "Nucleus"}]}
      ]
    },
    {
      id: "les-1-3-1-2",
      title: "Dobereiner's Triads",
      description: "Law of Triads (1829)",
      icon: "List",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Dobereiner grouped elements in sets of:", options: [{id: "A", text: "Three (Triads)", isCorrect: true, explanation: "Correct."}, {id: "B", text: "Eight (Octaves)", isCorrect: false, explanation: "Newlands."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Law of Triads",
          content: "Johann Dobereiner noted similarity in groups of 3 elements.\n\n**Key Feature:** The atomic weight of the **middle element** was roughly the **average** of the other two.\n\nExample: Li (7) + K (39) = 46. Average = 23 (Na)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Which is a Dobereiner Triad?",
          options: [
            { id: "A", text: "Cl, Br, I", isCorrect: true, explanation: "Halogen triad." },
            { id: "B", text: "F, Cl, Br", isCorrect: false, explanation: "Not typically cited as his triad originally." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Isotopes have different:", options: [{id: "A", text: "Mass Number", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Atomic Number", isCorrect: false, explanation: "Same Z"}]}
      ]
    },
    {
      id: "les-1-3-1-3",
      title: "Newlands' Octaves",
      description: "Law of Octaves (1865)",
      icon: "Music",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Newlands compared elements to:", options: [{id: "A", text: "Planets", isCorrect: false, explanation: "No."}, {id: "B", text: "Musical Notes", isCorrect: true, explanation: "Octaves (Do, Re, Mi...)."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Law of Octaves",
          content: "John Newlands arranged elements in increasing atomic weight.\n\n**Observation:** Every **eighth** element had properties similar to the first (like musical octaves).\n\n**Limitation:** It worked well only up to **Calcium**."
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Newlands' Law of Octaves was discarded.\n**Reason:** It was only valid for lighter elements up to Calcium.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Major limitation." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Planck's equation?", options: [{id: "A", text: "E = hv", isCorrect: true, explanation: "Correct"}, {id: "B", text: "E = mc2", isCorrect: false, explanation: "Einstein"}]}
      ]
    },
    {
      id: "les-1-3-1-4",
      title: "Mendeleev's Law",
      description: "Periodic Law (1869)",
      icon: "Table",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Mendeleev arranged elements by:", options: [{id: "A", text: "Atomic Number", isCorrect: false, explanation: "Modern table."}, {id: "B", text: "Atomic Weight", isCorrect: true, explanation: "His original law."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Mendeleev's Periodic Law",
          content: "**Statement:** The properties of the elements are a periodic function of their **atomic weights**.\n\nHe arranged elements in horizontal rows (series) and vertical columns (groups). He relied on similarities in empirical formulas of oxides and hydrides."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Mendeleev ignored the order of atomic weights if strictly followed, to place elements with similar ___ together.",
          blankAnswer: "properties"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Rutherford used which foil?", options: [{id: "A", text: "Gold", isCorrect: true, explanation: "Au"}, {id: "B", text: "Silver", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-3-1-5",
      title: "Predictions & Success",
      description: "Eka-Aluminium & Gaps",
      icon: "Star",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Did Mendeleev leave gaps in his table?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "For undiscovered elements."}, {id: "B", text: "No", isCorrect: false, explanation: "He was bold enough to leave gaps."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Predictions",
          content: "Mendeleev predicted existence of undiscovered elements:\n\n1. **Eka-Aluminium** $\\to$ Discovered as **Gallium** (Ga).\n2. **Eka-Silicon** $\\to$ Discovered as **Germanium** (Ge).\n\nHe accurately predicted their density, melting point, and oxide formula."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Match",
          content: "Eka-Silicon corresponds to:",
          options: [
            { id: "A", text: "Germanium", isCorrect: true, explanation: "Ge lies below Si." },
            { id: "B", text: "Gallium", isCorrect: false, explanation: "That is Eka-Aluminium." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Principal Quantum Number symbol?", options: [{id: "A", text: "n", isCorrect: true, explanation: "Correct"}, {id: "B", text: "l", isCorrect: false, explanation: "Azimuthal"}]}
      ]
    }
  ]
};