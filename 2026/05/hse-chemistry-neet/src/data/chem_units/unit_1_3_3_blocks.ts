import { Unit } from '../../types';

export const UNIT_1_3_3: Unit = {
  id: "unit-1-3-3",
  title: "Electronic Configurations",
  description: "Blocks (s, p, d, f)",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-3-1",
      title: "Configs in Periods",
      description: "Value of n",
      icon: "ChevronsRight",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Periods and n",
          content: "The period number indicates the value of **principal quantum number ($n$)** for the outermost shell.\n\n- 3rd Period: Filling $n=3$ ($3s, 3p$). 3d fills in 4th period.\n- Number of elements = $2 \\times$ orbitals filled."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Concept",
          content: "Why does the 5th period have 18 elements?",
          options: [
            { id: "A", text: "Fills 5s, 4d, 5p (1+5+3 = 9 orbitals)", isCorrect: true, explanation: "9 orbitals x 2 e- = 18." },
            { id: "B", text: "Fills 5s, 5p, 5d", isCorrect: false, explanation: "5d fills in 6th period." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Formula for max e- in a shell?", options: [{id: "A", text: "2n^2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "n^2", isCorrect: false, explanation: "Orbitals"}]}
      ]
    },
    {
      id: "les-1-3-3-2",
      title: "Configs in Groups",
      description: "Valence Electrons",
      icon: "Columns",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Group Similarity",
          content: "Elements in the same vertical column (group) have **similar valence shell electronic configurations**.\n\nExample Group 1:\nLi ($2s^1$), Na ($3s^1$), K ($4s^1$)... $ns^1$."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Application",
          content: "Element with Z=37 (Rb) belongs to which group?",
          options: [
            { id: "A", text: "Group 1", isCorrect: true, explanation: "Config [Kr] 5s1." },
            { id: "B", text: "Group 2", isCorrect: false, explanation: "Group 2 is ns2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Isotopes of H?", options: [{id: "A", text: "Protium, Deuterium, Tritium", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Alpha, Beta, Gamma", isCorrect: false, explanation: "Rays"}]}
      ]
    },
    {
      id: "les-1-3-3-3",
      title: "s-Block Elements",
      description: "Groups 1 & 2",
      icon: "Box",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "s-Block",
          content: "Outermost electron enters **s-orbital**.\n- Group 1 (Alkali): $ns^1$\n- Group 2 (Alkaline Earth): $ns^2$\n\n**Properties:** Reactive metals, low ionization enthalpy, form ionic compounds (except Li, Be)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "s-Block",
          content: "Visual representation of spherical s-orbitals filling.",
          interactiveCanvasId: "chem-orbital-shapes"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "Exception",
          content: "___ and Helium are s-block exceptions/special cases.",
          blankAnswer: "hydrogen"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Heisenberg uncertainty involved?", options: [{id: "A", text: "Position", isCorrect: true, explanation: "Pos and Mom"}, {id: "B", text: "Color", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-3-3-4",
      title: "p-Block Elements",
      description: "Groups 13 to 18",
      icon: "Box",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "p-Block",
          content: "Outermost electron enters **p-orbital**.\n- General Config: $ns^2 np^{1-6}$.\n- Together with s-block, called **Representative Elements**.\n- Includes Metals, Non-metals, and Metalloids."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Group 18",
          content: "Group 18 elements have config $ns^2 np^6$. They are called:",
          options: [
            { id: "A", text: "Noble Gases", isCorrect: true, explanation: "Stable octet." },
            { id: "B", text: "Halogens", isCorrect: false, explanation: "Group 17 (np5)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of p-orbital?", options: [{id: "A", text: "Dumbbell", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Spherical", isCorrect: false, explanation: "s-orbital"}]}
      ]
    },
    {
      id: "les-1-3-3-5",
      title: "d-Block Elements",
      description: "Transition Elements",
      icon: "Box",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "d-Block (Transition)",
          content: "Filling of **inner d-orbitals** (Groups 3-12).\n- General Config: $(n-1)d^{1-10} ns^{0-2}$.\n- **Properties:** Metals, form coloured ions, variable oxidation states, paramagnetic, catalysts.\n- Zn, Cd, Hg ($d^{10}$) are distinct (not typical transition)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Definition",
          content: "Why called 'Transition'?",
          options: [
            { id: "A", text: "Bridge between active s-metals and p-non-metals", isCorrect: true, explanation: "Transitional properties." },
            { id: "B", text: "They transform into gold", isCorrect: false, explanation: "Alchemy myth." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which QN determines shape?", options: [{id: "A", text: "l", isCorrect: true, explanation: "Azimuthal"}, {id: "B", text: "n", isCorrect: false, explanation: "Size"}]}
      ]
    },
    {
      id: "les-1-3-3-6",
      title: "f-Block Elements",
      description: "Inner Transition",
      icon: "Box",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "f-Block",
          content: "Filling of **anti-penultimate** (n-2) f-orbitals.\n- General Config: $(n-2)f^{1-14} (n-1)d^{0-1} ns^2$.\n- **Lanthanoids:** 4f series (Ce to Lu).\n- **Actinoids:** 5f series (Th to Lr).\n- All are metals. Actinoids are radioactive."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Placement",
          content: "Where are f-block elements placed?",
          options: [
            { id: "A", text: "Separate panels at bottom", isCorrect: true, explanation: "To prevent table expanding too wide." },
            { id: "B", text: "Group 3", isCorrect: false, explanation: "They technically belong there but shown separately." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "How many orbitals in f-subshell?", options: [{id: "A", text: "7", isCorrect: true, explanation: "Correct"}, {id: "B", text: "5", isCorrect: false, explanation: "d-subshell"}]}
      ]
    }
  ]
};