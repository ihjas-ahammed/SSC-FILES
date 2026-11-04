import { Unit } from '../../types';

export const UNIT_3_1_3: Unit = {
  id: "unit-3-1-3",
  title: "Inner Transition Elements",
  description: "Lanthanoids & Actinoids",
  color: "duo-gray",
  lessons: [
    {
      id: "les-3-1-3-1",
      title: "Lanthanoids Config & Size",
      description: "4f Series",
      icon: "Minimize",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Lanthanoids",
          content: "Ce (58) to Lu (71). Filling of 4f orbitals.\n**Configuration:** $4f^{1-14} 5d^{0-1} 6s^2$.\n**Lanthanoid Contraction:** Steady decrease in atomic/ionic radii along the series due to poor shielding of 4f electrons.\n**Consequence:** Radii of 4d and 5d series elements are similar (Zr $\\approx$ Hf)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Contraction",
          content: "Visual of size decrease.",
          interactiveCanvasId: "lanthanoid-contraction-graph"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Cause",
          content: "Lanthanoid contraction is due to:",
          options: [
            { id: "A", text: "Poor shielding of 4f electrons", isCorrect: true, explanation: "Nuclear charge pulls outer electrons closer." },
            { id: "B", text: "High shielding of 4f", isCorrect: false, explanation: "Inverse." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Zr in 3d series?", options: [{id: "A", text: "No", isCorrect: true, explanation: "4d series"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Ti is 3d"}]}
      ]
    },
    {
      id: "les-3-1-3-2",
      title: "Lanthanoids Oxidation",
      description: "+3 and exceptions",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Oxidation States",
          content: "Most common and stable state is **+3**.\nExceptions due to stability of $f^0, f^7, f^{14}$:\n- **$Ce^{4+}$:** ($4f^0$) Stable, strong Oxidising Agent.\n- **$Eu^{2+}$:** ($4f^7$) Stable, strong Reducing Agent.\n- **$Yb^{2+}$:** ($4f^{14}$) Stable, Reducing."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Behavior",
          content: "$Eu^{2+}$ changes to $Eu^{3+}$ generally. It acts as:",
          options: [
            { id: "A", text: "Reducing Agent", isCorrect: true, explanation: "It oxidises itself." },
            { id: "B", text: "Oxidising Agent", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "General config of transition elements?", options: [{id: "A", text: "(n-1)d 1-10 ns 1-2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "ns 1-2", isCorrect: false, explanation: "s-block"}]}
      ]
    },
    {
      id: "les-3-1-3-3",
      title: "General Properties",
      description: "Colour & Reactivity",
      icon: "Palette",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Characteristics",
          content: "- **Colour:** f-f transitions. ($f^0$ and $f^{14}$ colourless).\n- **Magnetic:** Paramagnetic (except $f^0, f^{14}$).\n- **Chemical:** Reactive like Calcium. Form oxides ($Ln_2O_3$), hydroxides ($Ln(OH)_3$, basic character decreases along series due to contraction). \n- **Mischmetall:** Alloy (Ln + Fe + traces). Used in bullets/flints."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Basic Character",
          content: "Which hydroxide is most basic?",
          options: [
            { id: "A", text: "$La(OH)_3$", isCorrect: true, explanation: "Largest size -> most basic." },
            { id: "B", text: "$Lu(OH)_3$", isCorrect: false, explanation: "Least basic." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Are transition metal compounds coloured?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "d-d transitions"}, {id: "B", text: "No", isCorrect: false, explanation: "Usually yes"}]}
      ]
    },
    {
      id: "les-3-1-3-4",
      title: "Actinoids Config",
      description: "5f Series",
      icon: "Atom",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Actinoids",
          content: "Th (90) to Lr (103). Filling of 5f orbitals.\n**Actinoid Contraction:** Greater than lanthanoid contraction because 5f electrons shield nuclear charge even more poorly than 4f.\n\nAll are radioactive."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Contraction Comparison",
          content: "Which contraction is greater?",
          options: [
            { id: "A", text: "Actinoid", isCorrect: true, explanation: "Poorer shielding of 5f." },
            { id: "B", text: "Lanthanoid", isCorrect: false, explanation: "Less." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is shielding of d-electrons good?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Poor"}, {id: "B", text: "Yes", isCorrect: false, explanation: "s and p shield better"}]}
      ]
    },
    {
      id: "les-3-1-3-5",
      title: "Actinoids Oxidation",
      description: "Wide Range",
      icon: "TrendingUp",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Oxidation States",
          content: "Show greater range of oxidation states than lanthanoids because **5f, 6d, and 7s levels are of comparable energy**.\n- Common: +3.\n- Max: +7 (Np, Pu).\n- Th shows +4."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Reasoning",
          content: "Why do Actinoids show variable oxidation states?",
          options: [
            { id: "A", text: "Comparable energies of 5f, 6d, 7s", isCorrect: true, explanation: "Electrons easily promoted." },
            { id: "B", text: "Small size", isCorrect: false, explanation: "Not the reason." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Common OS of Lanthanoids?", options: [{id: "A", text: "+3", isCorrect: true, explanation: "Correct"}, {id: "B", text: "+2", isCorrect: false, explanation: "Less common"}]}
      ]
    },
    {
      id: "les-3-1-3-6",
      title: "Actinoids vs Lanthanoids",
      description: "Comparison",
      icon: "GitCompare",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Comparison",
          content: "1. **Shielding:** 5f < 4f.\n2. **Contraction:** Actinoid > Lanthanoid.\n3. **Oxidation States:** Actinoids wide range (+3 to +7), Lanthanoids mostly +3.\n4. **Magnetism:** More complex for actinoids.\n5. **Radioactivity:** All actinoids are radioactive."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Which ions are more prone to hydrolysis?",
          options: [
            { id: "A", text: "Actinoids", isCorrect: true, explanation: "Due to high charge/size." },
            { id: "B", text: "Lanthanoids", isCorrect: false, explanation: "Less tendency." }
          ]
        }
      ]
    },
    {
      id: "les-3-1-3-7",
      title: "Applications",
      description: "Industrial Uses",
      icon: "Settings",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Applications of d/f Block",
          content: "- **Iron/Steel:** Construction.\n- **TiO2:** Pigment.\n- **Zn/Ni/Cd:** Batteries.\n- **Ag/Au:** Coinage, Jewellery.\n- **Catalysts:** V2O5, TiCl4 (Ziegler-Natta), PdCl2 (Wacker).\n- **Photography:** AgBr."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Match",
          content: "Ziegler-Natta catalyst contains:",
          options: [
            { id: "A", text: "TiCl4", isCorrect: true, explanation: "With Al(CH3)3." },
            { id: "B", text: "V2O5", isCorrect: false, explanation: "Contact process." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ Match (2025)",
          content: "Match Catalyst:\nA. Haber Process -> Fe\nB. Wacker -> PdCl2\nC. Wilkinson -> (PPh3)3RhCl\nD. Ziegler -> TiCl4",
          options: [
            { id: "A", text: "Correct Mapping", isCorrect: true, explanation: "Standard catalysts." },
            { id: "B", text: "Incorrect", isCorrect: false, explanation: "Check definitions." }
          ]
        }
      ]
    }
  ]
};