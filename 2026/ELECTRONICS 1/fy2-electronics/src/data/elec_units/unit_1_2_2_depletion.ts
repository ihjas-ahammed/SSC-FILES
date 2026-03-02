import { Unit } from '../../types';

export const UNIT_1_2_2: Unit = {
  id: "unit-1-2-2",
  title: "Depletion Physics",
  description: "Ions, Diffusion & Barriers",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-2-1",
      title: "Diffusion Current",
      description: "Carriers on the move",
      icon: "Wind",
      slides: [
        {
          id: "prime",
          type: "quiz",
          title: "Priming",
          content: "Imagine a room crowded with people opening a door to an empty room. What happens naturally?",
          options: [
            { id: "A", text: "People stay put", isCorrect: false, explanation: "" },
            { id: "B", text: "People rush to the empty room", isCorrect: true, explanation: "This is Diffusion: movement from High to Low concentration." }
          ]
        },
        {
          id: "concept",
          type: "theory",
          title: "Diffusion Across Junction",
          content: "At the instant of formation:\n\n1. **n-region** has high electron concentration.\n2. **p-region** has high hole concentration.\n\nElectrons diffuse $n \\to p$. Holes diffuse $p \\to n$. This flow constitutes the **Diffusion Current**."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visualizing Diffusion",
          content: "See electrons (blue) crossing the line and leaving behind ions.",
          interactiveCanvasId: "pn-diffusion-process"
        }
      ]
    },
    {
      id: "les-1-2-2-2",
      title: "The Depletion Layer",
      description: "Why diffusion stops",
      icon: "Shield",
      slides: [
        {
          id: "mechanism",
          type: "proof",
          title: "Formation of Ions",
          content: "Trace the creation of the depletion layer.",
          proofSteps: [
            "1. An electron leaves the n-region. It leaves behind a **Positive Pentavalent Ion**.",
            "2. This electron enters the p-region and recombines with a hole.",
            "3. The recombination creates a **Negative Trivalent Ion** in the p-region.",
            "4. These ions are immobile (locked in the crystal lattice).",
            "5. The region containing these ions is 'depleted' of free carriers."
          ]
        },
        {
          id: "field",
          type: "theory",
          title: "The Electric Field",
          content: "We now have a wall of Positive Ions on the n-side and Negative Ions on the p-side.\n\nThis creates an internal **Electric Field** ($E$) pointing from $n \\to p$. This field **opposes** further diffusion of electrons."
        },
        {
          id: "quiz",
          type: "fill_in_blank",
          title: "Key Term",
          content: "The region near the junction depleted of mobile charge carriers is called the ___ region.",
          blankAnswer: "depletion"
        }
      ]
    },
    {
      id: "les-1-2-2-3",
      title: "Barrier Potential",
      description: "The voltage hill",
      icon: "TrendingUp",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Barrier Potential ($V_0$)",
          content: "The potential difference created by the depletion ions is called the **Barrier Potential**.\n\nValues at Room Temp ($25^\\circ C$):\n- **Germanium:** $\\approx 0.3V$\n- **Silicon:** $\\approx 0.7V$"
        },
        {
          id: "analogy",
          type: "quiz",
          title: "Analogy",
          content: "The barrier potential acts like a ___ for electrons trying to cross from n to p.",
          options: [
            { id: "A", text: "Slide", isCorrect: false, explanation: "It opposes motion." },
            { id: "B", text: "Hill", isCorrect: true, explanation: "Electrons need extra energy (voltage) to climb this hill." }
          ]
        },
        {
          id: "factors",
          type: "theory",
          title: "Factors Affecting Width",
          content: "**Doping:** Heavy doping $\\to$ Thin depletion layer.\n**Reason:** High charge density means fewer atoms needed to build the stopping potential."
        }
      ]
    }
  ]
};