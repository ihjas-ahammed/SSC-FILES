import { Unit } from '../../types';

export const UNIT_1_2_1: Unit = {
  id: "unit-1-2-1",
  title: "Sub-atomic Theory",
  description: "Discovery of Particles & Models",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-1-1",
      title: "Discovery of Electron",
      description: "Cathode Ray Experiments",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "Before subatomic particles were discovered, atoms were thought to be:", options: [{id: "A", text: "Divisible", isCorrect: false, explanation: "Dalton's theory said they were indivisible."}, {id: "B", text: "Indivisible", isCorrect: true, explanation: "Dalton's Atomic Theory (1808) regarded atom as ultimate particle."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "Do cathode rays depend on the nature of gas in the tube?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Electrons are universal."}, {id: "B", text: "No", isCorrect: true, explanation: "Properties of cathode rays (electrons) are independent of gas nature."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Cathode Ray Discharge Tube",
          content: "Mid 1850s: Faraday studied electrical discharge in partially evacuated tubes.\n\n**Results:**\n1. Rays move from **Cathode to Anode**.\n2. In absence of fields, they travel in **straight lines**.\n3. Deflected by electric/magnetic fields (behaviour similar to **negatively charged** particles).\n4. **Universal Character:** Properties do not depend on electrode material or gas nature."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Charge to Mass Ratio",
          content: "J.J. Thomson measured $e/m_e$. Deflection depends on magnitude of charge, mass of particle, and field strength.\n$$e/m_e = 1.758820 \\times 10^{11} \\text{ C kg}^{-1}$$",
          interactiveCanvasId: "chem-photoelectric" // Using similar visual placeholder or default
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The characteristics of cathode rays (electrons) ___ depend upon the material of electrodes and the nature of the gas.",
          blankAnswer: "do not"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Electrons are considered basic constituents of all atoms.\n**Reason:** The $e/m$ ratio of cathode rays is independent of the nature of the gas.",
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "Universality of e/m proves they are fundamental to all matter." },
            { id: "B", text: "Both True, Reason does not explain", isCorrect: false, explanation: "The independence is the evidence for the assertion." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ Integration",
          content: "Which of the following is never true for cathode rays?",
          options: [
            { id: "A", text: "They possess kinetic energy", isCorrect: false, explanation: "True, they are particles." },
            { id: "B", text: "They are electromagnetic waves", isCorrect: true, explanation: "False. They are material particles (electrons)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Law of Multiple Proportions was proposed by?", options: [{id: "A", text: "Dalton", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Proust", isCorrect: false, explanation: "Definite Proportions"}]}
      ]
    },
    {
      id: "les-1-2-1-2",
      title: "Protons & Neutrons",
      description: "Canal Rays and Neutral Particles",
      icon: "PlusCircle",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "Are 'Canal Rays' simply protons?", options: [{id: "A", text: "Always", isCorrect: false, explanation: "Only for Hydrogen gas."}, {id: "B", text: "Depends on gas", isCorrect: true, explanation: "They are positively charged gaseous ions."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "Who discovered the Neutron?", options: [{id: "A", text: "Chadwick", isCorrect: true, explanation: "1932, by bombarding Be with alpha particles."}, {id: "B", text: "Rutherford", isCorrect: false, explanation: "Discovered nucleus/proton."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Canal Rays (Anode Rays)",
          content: "Modified cathode ray tube led to discovery of positive rays.\n\n**Characteristics:**\n1. Unlike cathode rays, mass **depends on the nature of gas**.\n2. Charge to mass ratio ($e/m$) depends on the gas.\n3. Some carry multiple units of positive charge.\n4. Deflected by magnetic/electric fields (opposite to cathode rays)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Discovery of Neutron",
          content: "Chadwick (1932) bombarded thin sheet of Beryllium with $\\alpha$-particles.\n\n$$ ^9_4Be + ^4_2He \\to ^{12}_6C + ^1_0n $$\n\nElectrically neutral particles with mass slightly greater than proton were emitted."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Which statement is INCORRECT regarding Canal Rays?",
          options: [
            { id: "A", text: "They originate from the anode", isCorrect: false, explanation: "Often called anode rays." },
            { id: "B", text: "Their e/m ratio is constant", isCorrect: true, explanation: "False. It depends on the gas." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET Fact Check",
          content: "The lightest positive ion is obtained from:",
          options: [
            { id: "A", text: "Hydrogen", isCorrect: true, explanation: "Gives H+ (Proton)." },
            { id: "B", text: "Helium", isCorrect: false, explanation: "Heavier." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which has a higher e/m ratio?", options: [{id: "A", text: "Electron", isCorrect: true, explanation: "Mass is very small (denominator small -> ratio large)."}, {id: "B", text: "Proton", isCorrect: false, explanation: "Mass is ~1837 times electron."}]}
      ]
    },
    {
      id: "les-1-2-1-3",
      title: "Thomson Model of Atom",
      description: "Plum Pudding Model",
      icon: "Disc",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "In Thomson's model, the mass of the atom is:", options: [{id: "A", text: "Concentrated in center", isCorrect: false, explanation: "That's Rutherford."}, {id: "B", text: "Uniformly distributed", isCorrect: true, explanation: "Like the pudding."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "Could Thomson explain overall neutrality?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Positive sphere balances negative electrons."}, {id: "B", text: "No", isCorrect: false, explanation: "He did explain neutrality, but failed dynamic stability."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Thomson Model (1898)",
          content: "Known as **Plum Pudding**, Raisin Pudding, or Watermelon model.\n\n1. Atom is a spherical shape (radius $\\approx 10^{-10}$ m) of positive charge.\n2. Electrons are embedded into it.\n3. **Key Feature:** Mass is assumed to be uniformly distributed.\n\n**Limitation:** Could not explain results of later scattering experiments (Rutherford)."
        },
        {
          id: "ret-1",
          type: "fill_in_blank", 
          title: "NCERT Check",
          content: "An important feature of this model is that the ___ of the atom is assumed to be uniformly distributed.",
          blankAnswer: "mass"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Thomson's model was discarded.\n**Reason:** It could not explain the stability of the atom in terms of energy and scattering results.",
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Assertion True, Reason False", isCorrect: false, explanation: "Reason is valid." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "The charge on electron was determined by?", options: [{id: "A", text: "Millikan", isCorrect: true, explanation: "Oil drop experiment."}, {id: "B", text: "Thomson", isCorrect: false, explanation: "He found e/m."}]}
      ]
    },
    {
      id: "les-1-2-1-4",
      title: "Rutherford's Nuclear Model",
      description: "Gold Foil Experiment",
      icon: "Atom",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "Most alpha particles in Rutherford's experiment:", options: [{id: "A", text: "Bounced back", isCorrect: false, explanation: "Very few (1 in 20,000)."}, {id: "B", text: "Passed undeflected", isCorrect: true, explanation: "Most space is empty."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "The nucleus discovered by Rutherford is:", options: [{id: "A", text: "Negatively charged", isCorrect: false, explanation: "Repelled alpha particles."}, {id: "B", text: "Positively charged", isCorrect: true, explanation: "Caused repulsion."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Alpha-Particle Scattering",
          content: "Bombarded thin gold foil (100 nm) with $\\alpha$-particles ($He^{2+}$).\n\n**Observations:**\n1. Most passed undeflected $\\rightarrow$ Most space is **empty**.\n2. Few deflected by small angles.\n3. Very few (1 in 20,000) bounced back ($180^\\circ$) $\\rightarrow$ Positive charge and mass concentrated in tiny volume (**Nucleus**)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Scattering Visual",
          content: "Observe how most particles miss the nucleus, but direct hits bounce back.",
          interactiveCanvasId: "chem-rutherford-gold"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Nuclear Model Conclusions",
          content: "1. Positive charge and mass concentrated in **Nucleus**.\n2. Size of nucleus ($10^{-15}$ m) is negligible vs Atom ($10^{-10}$ m).\n3. Electrons move around nucleus in circular paths (**Orbits**).\n4. Electrostatic attraction holds nucleus and electrons."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Volume Comparison",
          content: "If radius of atom is $10^{-10}$ m and nucleus is $10^{-15}$ m, the ratio of their volumes ($V_{atom}/V_{nuc}$) is $10^x$. Find x.",
          numericAnswer: 15,
          numericTolerance: 0.1
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Concept Test",
          content: "Why did Rutherford use Gold?",
          options: [
            { id: "A", text: "It's malleable (thin foil)", isCorrect: true, explanation: "Need very thin layer (100nm) to avoid multiple scattering." },
            { id: "B", text: "It's radioactive", isCorrect: false, explanation: "Gold is stable." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Neutron was discovered by bombarding Beryllium with?", options: [{id: "A", text: "Alpha particles", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Beta particles", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-2-1-5",
      title: "Atomic & Mass Number",
      description: "Z and A",
      icon: "Hash",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "Atomic Number (Z) is equal to:", options: [{id: "A", text: "Number of Protons", isCorrect: true, explanation: "Fundamental definition."}, {id: "B", text: "Number of Neutrons", isCorrect: false, explanation: "Varies in isotopes."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "In a neutral atom, electrons equal:", options: [{id: "A", text: "Protons", isCorrect: true, explanation: "For neutrality."}, {id: "B", text: "Neutrons", isCorrect: false, explanation: "Unrelated."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Definitions",
          content: "**Atomic Number (Z):** Number of protons in nucleus.\n- For neutral atom: Protons = Electrons.\n\n**Mass Number (A):** Sum of Protons + Neutrons.\n- $A = Z + n$\n- Protons and Neutrons are collectively called **Nucleons**."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Symbol Notation",
          content: "Calculate protons, neutrons, electrons in $^{80}_{35}Br$.",
          interactiveSteps: [
            { stepText: "Step 1: Identify Z (Subscript). Z = 35.\nProtons = 35." },
            { stepText: "Step 2: Neutral atom? Yes.\nElectrons = Protons = 35." },
            { stepText: "Step 3: Neutrons = A - Z.\n80 - 35 = 45." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Practice",
          content: "An atom has 29 electrons and 35 neutrons. What is its Mass Number (A)?",
          numericAnswer: 64,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Rutherford's model resembles?", options: [{id: "A", text: "Solar System", isCorrect: true, explanation: "Planetary model."}, {id: "B", text: "Pudding", isCorrect: false, explanation: "Thomson."}]}
      ]
    },
    {
      id: "les-1-2-1-6",
      title: "Isotopes & Isobars",
      description: "Variations in A and Z",
      icon: "Copy",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "Isotopes have same:", options: [{id: "A", text: "Atomic Number", isCorrect: true, explanation: "Same Z, different A."}, {id: "B", text: "Mass Number", isCorrect: false, explanation: "That's Isobars."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "Do isotopes show different chemical properties?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Chemical props depend on electrons (Z)."}, {id: "B", text: "No", isCorrect: true, explanation: "Chemical behaviour is identical."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Isotopes vs Isobars",
          content: "**Isotopes:** Identical atomic number (Z), different mass number (A).\n- Diff no. of neutrons.\n- Example: $^1_1H$ (Protium), $^2_1H$ (Deuterium), $^3_1H$ (Tritium).\n- Same chemical properties.\n\n**Isobars:** Same mass number (A), different atomic number (Z).\n- Example: $^{14}_6C$ and $^{14}_7N$.\n- Different chemical properties."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identification",
          content: "Which pair are isobars?",
          options: [
            { id: "A", text: "$^{40}_{18}Ar$ and $^{40}_{20}Ca$", isCorrect: true, explanation: "Same A (40), diff Z." },
            { id: "B", text: "$^{35}_{17}Cl$ and $^{37}_{17}Cl$", isCorrect: false, explanation: "These are isotopes." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET Trap",
          content: "Isotopes differ in:",
          options: [
            { id: "A", text: "Number of electrons", isCorrect: false, explanation: "Same for neutral isotopes." },
            { id: "B", text: "Number of neutrons", isCorrect: true, explanation: "Correct." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Canal rays carry ___ charge.", options: [{id: "A", text: "Positive", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Negative", isCorrect: false, explanation: "Cathode rays are negative"}]}
      ]
    }
  ]
};