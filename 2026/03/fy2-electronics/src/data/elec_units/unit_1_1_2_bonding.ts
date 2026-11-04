import { Unit } from '../../types';

export const UNIT_1_1_2: Unit = {
  id: "unit-1-1-2",
  title: "Atomic Bonding",
  description: "Covalent Bonds & Crystals",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-2-1",
      title: "Valence Electrons",
      description: "The number 4",
      icon: "Atom",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Chemistry Recall",
          content: "How many electrons are in the outermost shell of Silicon (Group 14)?",
          options: [
            { id: "A", text: "2", isCorrect: false, explanation: "That's Group 2." },
            { id: "B", text: "4", isCorrect: true, explanation: "Correct. It's tetravalent." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Magic Number 4",
          content: "Germanium (Ge) and Silicon (Si) are the most common semiconductors. Both have **4 valence electrons**.\n\nTo achieve stability (Octet Rule), they need 8 electrons in the outer shell."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Atomic Structure",
          content: "Visualizing the Ge atom (Z=32) and its 4 outer electrons.",
          interactiveCanvasId: "semi-atomic-structure"
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Fact Check",
          content: "A Germanium atom has ___ valence electrons.",
          blankAnswer: "4"
        }
      ]
    },
    {
      id: "les-1-1-2-2",
      title: "Covalent Bonding",
      description: "Sharing is Caring",
      icon: "Users",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Covalent Bonds",
          content: "Since Ge/Si can't easily lose or gain 4 electrons, they **share**.\n\nEach atom positions itself between 4 neighbors. It shares one electron with each neighbor, forming **4 Co-valent Bonds**. This completes the octet (8 electrons)."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Bonding Diagram",
          content: "2D representation of Ge atoms sharing electrons.",
          interactiveCanvasId: "semi-covalent-bonding"
        },
        {
          id: "elab",
          type: "quiz",
          title: "Mechanism Check",
          content: "Are valence electrons in a pure semiconductor free to move?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "That would make it a conductor." },
            { id: "B", text: "No", isCorrect: true, explanation: "They are tightly bound in the covalent bonds." }
          ]
        }
      ]
    },
    {
      id: "les-1-1-2-3",
      title: "Crystalline Structure",
      description: "Orderly Pattern",
      icon: "Grid",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "The Crystal Lattice",
          content: "Because of this specific bonding requirement (4 neighbors), the atoms arrange themselves in a highly ordered, repetitive 3D pattern called a **Crystal**.\n\nA piece of Germanium is technically a single **Germanium Crystal**."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "3D Lattice",
          content: "Diamond cubic structure of Silicon/Germanium.",
          interactiveCanvasId: "semi-crystal-lattice"
        },
        {
          id: "flash",
          type: "quiz",
          title: "Flashback",
          content: "Which material has a resistivity of $0.6 \\, \\Omega m$?",
          options: [
            { id: "A", text: "Germanium", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Silicon", isCorrect: false, explanation: "Si is higher, around 2300." }
          ]
        }
      ]
    }
  ]
};