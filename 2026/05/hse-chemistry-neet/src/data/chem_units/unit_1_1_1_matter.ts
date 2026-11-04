import { Unit } from '../../types';

export const UNIT_1_1_1: Unit = {
  id: "unit-1-1-1",
  title: "Matter Fundamentals",
  description: "Importance of Chemistry and Nature of Matter",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-1-1",
      title: "Importance of Chemistry",
      description: "Drugs, Materials, and Scope",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Which of the following drugs is used effectively in cancer therapy?", options: [{ id: "A", text: "Cisplatin", isCorrect: true, explanation: "Cisplatin and Taxol are cited in NCERT for cancer therapy." }, { id: "B", text: "AZT", isCorrect: false, explanation: "AZT is used for AIDS." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "The drug AZT (Azidothymidine) is used for helping patients with:", options: [{ id: "A", text: "Cancer", isCorrect: false, explanation: "Cisplatin/Taxol are for cancer." }, { id: "B", text: "AIDS", isCorrect: true, explanation: "NCERT states AZT is used for AIDS victims." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Chemistry in Healthcare", 
          content: "Chemistry plays a vital role in healthcare. \n\n**Life-saving drugs derived from chemistry:**\n1. **Cisplatin** and **Taxol**: Effective in **cancer therapy**.\n2. **AZT (Azidothymidine)**: Used for helping **AIDS** patients.\n\nChemistry also provides safer alternatives to hazardous refrigerants like **CFCs** (chlorofluorocarbons), replacing them to protect the ozone layer." 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Visualizing Molecules", 
          content: "Observe the structure of Cisplatin. The central Platinum (Pt) atom is key to its anti-cancer properties.", 
          interactiveCanvasId: "chem-molecule-viewer" 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "The drug **Taxol** is effective in ___ therapy.", 
          blankAnswer: "cancer" 
        },
        { 
          id: "ret-2", 
          type: "quiz", 
          title: "Assertion-Reason", 
          content: "**Assertion:** Chemistry helps in environmental protection.\n**Reason:** Safer alternatives to CFCs have been synthesized to prevent ozone depletion.", 
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "Replacing CFCs is a direct environmental application cited in NCERT." },
            { id: "B", text: "Both True, Reason does not explain Assertion", isCorrect: false, explanation: "It is a specific example of the assertion." }
          ] 
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application Check",
          content: "Which environmental issue is associated with CFCs?",
          options: [
            { id: "A", text: "Global Warming only", isCorrect: false, explanation: "While related, the primary concern cited is ozone." },
            { id: "B", text: "Ozone Depletion in Stratosphere", isCorrect: true, explanation: "CFCs cause ozone depletion." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "PYQ Integration",
          content: "Match the following:\n(i) Cisplatin -> (a) AIDS\n(ii) AZT -> (b) Cancer",
          options: [
            { id: "A", text: "(i)-b, (ii)-a", isCorrect: true, explanation: "Cisplatin-Cancer, AZT-AIDS." },
            { id: "B", text: "(i)-a, (ii)-b", isCorrect: false, explanation: "Incorrect mapping." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Are CFCs considered environmentally safe?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "No, they deplete ozone."}, {id: "B", text: "No", isCorrect: true, explanation: "They are hazardous."}]}
      ]
    },
    {
      id: "les-1-1-1-2",
      title: "States of Matter",
      description: "Solid, Liquid, Gas Characteristics",
      icon: "Box",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Which state of matter has definite volume but no definite shape?", options: [{ id: "A", text: "Liquid", isCorrect: true, explanation: "Liquids take the shape of the container." }, { id: "B", text: "Solid", isCorrect: false, explanation: "Solids have definite shape." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Are particles in a solid motionless?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "They oscillate about mean positions." }, { id: "B", text: "No", isCorrect: true, explanation: "They possess vibrational motion." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Characteristics of States", 
          content: "**1. Solids:**\n- Definite volume and definite shape.\n- Particles held close in orderly fashion; little freedom of movement.\n\n**2. Liquids:**\n- Definite volume but **no definite shape** (take shape of container).\n- Particles close but can move around.\n\n**3. Gases:**\n- **No definite volume or shape**.\n- Particles far apart; easy and fast movement." 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Particle Arrangement", 
          content: "Compare the spacing and movement in Solids vs Liquids vs Gases.", 
          interactiveCanvasId: "chem-states-matter" 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "Gases completely occupy the ___ in the container in which they are placed.", 
          blankAnswer: "space" 
        },
        { 
          id: "ret-2", 
          type: "quiz", 
          title: "Assertion-Reason", 
          content: "**Assertion:** Solids have a definite shape.\n**Reason:** The constituent particles in solids have fixed positions and can only oscillate about their mean positions.", 
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "The restriction of movement leads to the rigid shape." },
            { id: "B", text: "Both True, Reason does not explain Assertion", isCorrect: false, explanation: "It is the direct cause." }
          ] 
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Concept Check",
          content: "Which state of matter is most easily compressible?",
          options: [
            { id: "A", text: "Solid", isCorrect: false, explanation: "Solids are incompressible." },
            { id: "B", text: "Gas", isCorrect: true, explanation: "Large spaces between particles allow compression." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "What drug treats AIDS?", options: [{id: "A", text: "AZT", isCorrect: true, explanation: "Correct."}, {id: "B", text: "Taxol", isCorrect: false, explanation: "Taxol is for Cancer."}]}
      ]
    },
    {
      id: "les-1-1-1-3",
      title: "Classification of Matter",
      description: "Mixtures vs Pure Substances",
      icon: "Filter",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Is air a pure substance?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Air is a mixture of gases." }, { id: "B", text: "No", isCorrect: true, explanation: "It is a homogeneous mixture." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Can glucose be separated into its constituents by physical methods?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Compounds require chemical methods." }, { id: "B", text: "Yes", isCorrect: false, explanation: "It is a pure substance (compound)." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Mixtures vs Pure Substances", 
          content: "**Mixture:** Contains two or more substances in *any ratio*. Composition is variable.\n- **Homogeneous:** Uniform composition (e.g., sugar solution, air).\n- **Heterogeneous:** Non-uniform composition (e.g., pulses with stone, sand + salt).\n\n**Pure Substance:** Fixed composition.\n- Constituents cannot be separated by physical methods (e.g., Glucose, Gold, Water)." 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Matter Hierarchy", 
          content: "Interactive flow chart: Matter -> Mixtures/Pure Substances -> Elements/Compounds.", 
          interactiveCanvasId: "chem-matter-chart" 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "In a ___ mixture, the components completely mix with each other.", 
          blankAnswer: "homogeneous" 
        },
        { 
          id: "ret-2", 
          type: "quiz", 
          title: "Assertion-Reason", 
          content: "**Assertion:** Water is a pure substance.\n**Reason:** It contains hydrogen and oxygen in a fixed ratio and cannot be separated by simple physical methods.", 
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "Fixed ratio and chemical separation define pure substances." },
            { id: "B", text: "Assertion True, Reason False", isCorrect: false, explanation: "Reason is correct." }
          ] 
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identification",
          content: "Identify the heterogeneous mixture:",
          options: [
            { id: "A", text: "Air", isCorrect: false, explanation: "Air is homogeneous." },
            { id: "B", text: "Grain and stones", isCorrect: true, explanation: "Components are visible and non-uniform." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Gases have definite volume.", options: [{id: "A", text: "True", isCorrect: false, explanation: "No definite volume or shape."}, {id: "B", text: "False", isCorrect: true, explanation: "Correct."}]}
      ]
    },
    {
      id: "les-1-1-1-4",
      title: "Elements & Compounds",
      description: "Atoms vs Molecules",
      icon: "Atom",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Does a compound retain the properties of its constituent elements?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Properties change drastically." }, { id: "B", text: "No", isCorrect: true, explanation: "Example: H2 (combustible) + O2 (supporter) -> H2O (extinguisher)." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Is Hydrogen gas (H2) an element or a compound?", options: [{ id: "A", text: "Element", isCorrect: true, explanation: "It consists of only one type of atom." }, { id: "B", text: "Compound", isCorrect: false, explanation: "Compounds must have different atoms." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Elements vs Compounds", 
          content: "**Element:** Consists of only one type of particles (atoms or molecules). \n- Examples: Na, Cu, Ag, H$_2$, O$_2$.\n\n**Compound:** Formed when two or more atoms of *different* elements combine in a fixed ratio.\n- Properties of a compound are **different** from its constituents.\n- Example: Water (H$_2$O) is a liquid, while H$_2$ and O$_2$ are gases." 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Atomic Composition", 
          content: "Visualizing H2 vs H2O. One type of atom vs different atoms.", 
          interactiveCanvasId: "chem-atom-visual" 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "The constituents of a compound can be separated by ___ methods.", 
          blankAnswer: "chemical" 
        },
        { 
          id: "ret-2", 
          type: "quiz", 
          title: "Assertion-Reason", 
          content: "**Assertion:** Hydrogen gas burns with a pop sound, but water is used to extinguish fire.\n**Reason:** The properties of a compound are different from those of its constituent elements.", 
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "Classic NCERT example of compound properties." },
            { id: "B", text: "Both True, Reason does not explain Assertion", isCorrect: false, explanation: "It explains exactly why." }
          ] 
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "Critical Thinking",
          content: "Which of the following is NOT a compound?",
          options: [
            { id: "A", text: "Ammonia", isCorrect: false, explanation: "NH3 is a compound." },
            { id: "B", text: "Ozone", isCorrect: true, explanation: "O3 is an element (molecule of one atom type)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is sugar solution homogeneous?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Uniform composition."}, {id: "B", text: "No", isCorrect: false, explanation: "It is not heterogeneous."}]}
      ]
    },
    {
      id: "les-1-1-1-5",
      title: "Properties of Matter",
      description: "Physical vs Chemical",
      icon: "Settings2",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Does measuring boiling point change the identity of water?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "It remains H2O." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would be a chemical change." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Is 'Combustibility' a physical property?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "It involves a chemical reaction." }, { id: "B", text: "No", isCorrect: true, explanation: "It is a chemical property." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Physical vs Chemical Properties", 
          content: "**Physical Properties:** Measured/observed *without* changing the identity or composition of the substance.\n- Examples: Colour, odour, melting point, boiling point, density.\n\n**Chemical Properties:** Measurement requires a **chemical change** to occur.\n- Examples: Acidity, basicity, combustibility." 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "Measurement of chemical properties requires a ___ change to occur.", 
          blankAnswer: "chemical" 
        },
        { 
          id: "ret-2", 
          type: "quiz", 
          title: "Classification Check", 
          content: "Classify 'Density' as a property.", 
          options: [
            { id: "A", text: "Physical", isCorrect: true, explanation: "Can be measured without reaction." },
            { id: "B", text: "Chemical", isCorrect: false, explanation: "Does not change composition." }
          ] 
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Which list contains ONLY physical properties?",
          options: [
            { id: "A", text: "Mass, Volume, Combustibility", isCorrect: false, explanation: "Combustibility is chemical." },
            { id: "B", text: "Colour, Density, Melting Point", isCorrect: true, explanation: "All are physical." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Elements consist of ___ type of atom(s).", options: [{id: "A", text: "One", isCorrect: true, explanation: "Same atoms."}, {id: "B", text: "Two", isCorrect: false, explanation: "That is a compound."}]}
      ]
    }
  ]
};