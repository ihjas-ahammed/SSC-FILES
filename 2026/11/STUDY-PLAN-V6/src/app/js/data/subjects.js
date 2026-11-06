/* =========================================================================
   DEPARTMENTS, SUBJECT SYLLABI, MODULE MAPPINGS & HOUR WEIGHTS (SEM 6)
   ========================================================================= */

export const MODULE_LABEL = { "1": "I", "2": "II", "3": "III", "4": "IV" };
export const MOD_ROMAN = { "1": "Module I", "2": "Module II", "3": "Module III", "4": "Module IV" };
export const MODS = ["1", "2", "3", "4"];

export const DEPTS = {
  physics: {
    label: "Physics",
    sub: "Thermo · Electronics-II · Nuclear · Nano · Opto · Electrical",
    ids: ["TH", "EL2", "NP", "NT", "OPTO"],
    sec: "EPD"
  },
  math: {
    label: "Mathematics",
    sub: "Diff Eq · Complex-II · Number Theory · Probability · ML-II · Data Science",
    ids: ["DE", "CA2", "ENT", "AP", "ML2"],
    sec: "DSP"
  }
};

export const UNIT_MODULE = {
  // Physics Honours
  TH:   "1111111122222223333333344444444",
  EL2:  "1111122222233333444444",
  NP:   "11111112222223333344444",
  NT:   "1111112223333334444444",
  OPTO: "11111222223334444",
  EPD:  "1111122233333344444",

  // Mathematics Honours
  DE:   "1111111222223333333444",
  CA2:  "1111122222333333444444",
  ENT:  "1111122222333333444444",
  AP:   "11111111222233334444",
  ML2:  "1111112222233333344444",
  DSP:  "1111122222233333344"
};

export const SUBJECTS = {
  // =========================================================================
  // PHYSICS HONOURS
  // =========================================================================
  TH: {
    id: "TH", stream: "physics", role: "Major 1", name: "Thermodynamics", shortName: "Thermodynamics",
    examDate: "2027-01-19", totalUnits: 31, unitLabel: "units",
    theme: { cardBg: "#FED7AA", bannerBg: "#FFEDD5", border: "#FDBA74" },
    iconId: "icon-materials",
    units: [
      { u: 1, text: "Thermodynamic Limit, Extensive and Intensive Variables, The Ideal Gas (1)" },
      { u: 2, text: "Definition of Heat, Heat Capacity, Specific Heat Capacity, Molar Heat Capacity, Cp and Cv (2)" },
      { u: 3, text: "Thermal Equilibrium and Zeroth Law of Thermodynamics (3)" },
      { u: 4, text: "A System in Thermal Equilibrium, Functions of State (4)" },
      { u: 5, text: "The First Law of Thermodynamics (5)" },
      { u: 6, text: "Heat Capacity (6)" },
      { u: 7, text: "Reversibility (7)" },
      { u: 8, text: "Isothermal and Adiabatic Expansion of Ideal Gas (8)" },
      { u: 9, text: "The Second Law of Thermodynamics (9)" },
      { u: 10, text: "The Carnot Engine (10)" },
      { u: 11, text: "Carnot's Theorem (11)" },
      { u: 12, text: "Equivalence of Clausius and Kelvin Statements (12)" },
      { u: 13, text: "Examples of Heat Engines (13)" },
      { u: 14, text: "Heat Engines Running Backwards: Refrigerator and Heat Pump (14)" },
      { u: 15, text: "Clausius' Theorem (15)" },
      { u: 16, text: "Definition of Entropy (16)" },
      { u: 17, text: "Irreversible Change (17)" },
      { u: 18, text: "The First Law Revisited (18)" },
      { u: 19, text: "The Joule Expansion of Ideal Gas (19)" },
      { u: 20, text: "The Statistical Basis for Entropy (20)" },
      { u: 21, text: "Entropy of Mixing (21)" },
      { u: 22, text: "Maxwell's Demon (22)" },
      { u: 23, text: "Entropy and Probability (23)" },
      { u: 24, text: "Thermodynamic potentials: Internal Energy, Enthalpy, Helmholtz & Gibbs Functions (24)" },
      { u: 25, text: "Availability and Constraints (25)" },
      { u: 26, text: "Maxwell's Relations (26)" },
      { u: 27, text: "Different Statements of the Third Law and Consequences (27)" },
      { u: 28, text: "Latent Heat, Clausius–Clapeyron Equation and Phase Diagrams (28)" },
      { u: 29, text: "Stability and Metastability (29)" },
      { u: 30, text: "Gibbs Phase Rule (30)" },
      { u: 31, text: "Classification of Phase Transitions (31)" }
    ],
    revisionBullets: [
      "Full revision: Zeroth law, first law, heat capacity, state functions and gas expansions (1–8)",
      "Full revision: Second law, Carnot engine, Clausius-Kelvin equivalence, heat pumps and Clausius theorem (9–15)",
      "Full revision: Entropy, irreversible changes, Joule expansion, mixing entropy and statistical basis (16–23)",
      "Full revision: Potentials U/H/F/G, Maxwell relations, third law, Clausius-Clapeyron and phase transitions (24–31)"
    ]
  },
  EL2: {
    id: "EL2", stream: "physics", role: "Major 2", name: "Electronics II", shortName: "Electronics II",
    examDate: "2027-01-20", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#BCE0FD", bannerBg: "#D6EEFF", border: "#90C8F8" },
    iconId: "icon-electrodynamics",
    units: [
      { u: 1, text: "Single Stage Transistor Amplifier (1)" },
      { u: 2, text: "Multi Stage Amplifier (2)" },
      { u: 3, text: "Feedback Principles (3)" },
      { u: 4, text: "Advantages of Negative Feedback (4)" },
      { u: 5, text: "Transistor Oscillators: Colpitts, Hartley, Phase Shift (5)" },
      { u: 6, text: "Types of FET (6)" },
      { u: 7, text: "Principle and Working of JFET (7)" },
      { u: 8, text: "Difference Between JFET and BJT (8)" },
      { u: 9, text: "JFET Amplifier (9)" },
      { u: 10, text: "Output Characteristics of JFET (10)" },
      { u: 11, text: "MOSFET Characteristics and Operation (11)" },
      { u: 12, text: "Differential Amplifier (12)" },
      { u: 13, text: "Operational Amplifier Fundamentals (13)" },
      { u: 14, text: "Op-Amp with Negative Feedback (14)" },
      { u: 15, text: "Summing Amplifiers (15)" },
      { u: 16, text: "Integrator and Differentiator Circuits (16)" },
      { u: 17, text: "Basic Logic Gates (17)" },
      { u: 18, text: "Combination of Logic Gates (18)" },
      { u: 19, text: "Boolean Algebra and Logic Circuits (19)" },
      { u: 20, text: "Combinational Logic Circuits (20)" },
      { u: 21, text: "Electronic Adders: Half and Full Adders (21)" },
      { u: 22, text: "Flip-Flops: RS, JK, D, T Flip-Flops (22)" }
    ],
    revisionBullets: [
      "Full revision: Single/multistage amplifiers, negative feedback advantages and oscillators (1–5)",
      "Full revision: JFET principles, JFET vs BJT, amplifier configurations and MOSFETs (6–11)",
      "Full revision: Differential amplifiers, Op-Amp feedback, summing amplifiers, integrator and differentiator (12–16)",
      "Full revision: Logic gates, Boolean simplification, combinational circuits, adders and flip-flops (17–22)"
    ]
  },
  NP: {
    id: "NP", stream: "physics", role: "Major 3", name: "Nuclear and Particle Physics", shortName: "Nuclear & Particle",
    examDate: "2027-01-21", totalUnits: 23, unitLabel: "units",
    theme: { cardBg: "#DDD6FE", bannerBg: "#EDE9FE", border: "#C4B5FD" },
    iconId: "icon-quantum",
    units: [
      { u: 1, text: "Introduction to Nuclear Properties (1)" },
      { u: 2, text: "Quantitative Facts About Nucleus (2)" },
      { u: 3, text: "Binding Energy and Mass Defect (3)" },
      { u: 4, text: "Nuclear Angular Momentum, Nuclear Moments, Parity (4)" },
      { u: 5, text: "Nuclear Force Properties (5)" },
      { u: 6, text: "Liquid Drop Model and Semi-Empirical Mass Formula (6)" },
      { u: 7, text: "Nuclear Shell Model and Magic Numbers (7)" },
      { u: 8, text: "Introduction to Radioactivity (8)" },
      { u: 9, text: "Laws of Radioactive Disintegration and Radioactive Series (9)" },
      { u: 10, text: "Alpha Emission and Gamow Theory (10)" },
      { u: 11, text: "Beta Decay: Beta Spectra, Neutrino Hypothesis, Fermi Theory (11)" },
      { u: 12, text: "Gamma Decay and Internal Conversion (12)" },
      { u: 13, text: "Artificial/Induced Radioactivity and Practical Applications (13)" },
      { u: 14, text: "Nuclear Reaction Cross-Section (14)" },
      { u: 15, text: "Conservation Laws, Kinematics of Reactions, Compound Nucleus (15)" },
      { u: 16, text: "Nuclear Fission and Energy Release (16)" },
      { u: 17, text: "Nuclear Fusion and Stellar Energy (17)" },
      { u: 18, text: "Interaction of Gamma Rays with Matter: Photoelectric, Compton, Pair Production (18)" },
      { u: 19, text: "Types of Fundamental Interactions (19)" },
      { u: 20, text: "Classification of Elementary Particles (20)" },
      { u: 21, text: "Quantum Numbers: Isospin, Strangeness, Baryon/Lepton Number (21)" },
      { u: 22, text: "Conservation Laws and Weak Decays of Strange Particles (22)" },
      { u: 23, text: "Quarks and Qualitative Description of Quark Model (23)" }
    ],
    revisionBullets: [
      "Full revision: Nuclear radius, moments, binding energy curve, liquid drop and shell models (1–7)",
      "Full revision: Radioactive decay law, alpha tunneling, beta neutrino hypothesis and gamma transitions (8–13)",
      "Full revision: Reaction kinematics, cross-sections, compound nucleus, fission, fusion and gamma interactions (14–18)",
      "Full revision: Fundamental interactions, particle classifications, quantum conservation and quark model (19–23)"
    ]
  },
  NT: {
    id: "NT", stream: "physics", role: "Elective 1", name: "Nanoscience and Technology", shortName: "Nanoscience",
    examDate: "2027-01-22", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#FEF08A", bannerBg: "#FEF9C3", border: "#FACC15" },
    iconId: "icon-solid-state",
    units: [
      { u: 1, text: "Introduction to Nanoscale, Size Effects and Quantum Behaviors (1)" },
      { u: 2, text: "Schrodinger Equation Applications: Nanodot (3D), Nanosheet (2D), Nanowire (1D) (2)" },
      { u: 3, text: "Quantum Confinement Effect and Electron Confinement (3)" },
      { u: 4, text: "Density of States for Zero-Dimensional (0D) Solid (4)" },
      { u: 5, text: "Density of States in Two-Dimensional (2D) Potential Box (5)" },
      { u: 6, text: "Thin Films and Density of States in Three-Dimensional Box (6)" },
      { u: 7, text: "Nanostructures: 0D, 1D, 2D and 3D Classifications (7)" },
      { u: 8, text: "Carbon Nanomaterials: Fullerenes, CNTs, Types of CNTs, Graphene (8)" },
      { u: 9, text: "MOFs, Core-Shell Particles, Metamaterials and Bioinspired Materials (9)" },
      { u: 10, text: "Mechanical Methods: High Energy Ball Milling (10)" },
      { u: 11, text: "Physical Vapour Deposition with Consolidation and Laser Ablation (11)" },
      { u: 12, text: "Chemical Vapour Deposition, Ion Beam Techniques and MBE (12)" },
      { u: 13, text: "Chemical Methods: Sol-Gel Method and Hydrothermal Synthesis (13)" },
      { u: 14, text: "Sonochemical Synthesis and Microwave Synthesis (14)" },
      { u: 15, text: "Self-Assembly of Nanoparticles Using Organic Molecules (15)" },
      { u: 16, text: "Optical Microscopy and Confocal Microscopy (16)" },
      { u: 17, text: "Scanning Electron Microscope (SEM) (17)" },
      { u: 18, text: "Transmission Electron Microscope (TEM) (18)" },
      { u: 19, text: "Scanning Probe Microscopes (SPM) and Atomic Force Microscope (AFM) (19)" },
      { u: 20, text: "X-Ray Diffraction (XRD) and Sample Diffraction (20)" },
      { u: 21, text: "Diffraction from Nanoparticles (21)" },
      { u: 22, text: "X-Ray and UV Photoelectron Spectroscopies (XPS / UPS) (22)" }
    ],
    revisionBullets: [
      "Full revision: Nanoscale quantum effects, confinement in 0D/1D/2D and density of states (1–6)",
      "Full revision: Nanostructure dimensions, carbon allotropes (fullerene/CNT/graphene) and MOFs (7–9)",
      "Full revision: Top-down and bottom-up synthesis: ball milling, PVD, CVD, sol-gel and self-assembly (10–15)",
      "Full revision: Characterisation: SEM, TEM, AFM, SPM, XRD peak broadening and photoelectron spectroscopy (16–22)"
    ]
  },
  OPTO: {
    id: "OPTO", stream: "physics", role: "Elective 2", name: "Optoelectronics and Semiconductor Devices", shortName: "Optoelectronics",
    examDate: "2027-01-25", totalUnits: 17, unitLabel: "units",
    theme: { cardBg: "#C7F9CC", bannerBg: "#DCFCE7", border: "#86EFAC" },
    iconId: "icon-optics",
    units: [
      { u: 1, text: "Emission and Absorption Processes, Photon Statistics (1)" },
      { u: 2, text: "Behaviour of Electrons, Optical Properties of Common Materials (2)" },
      { u: 3, text: "Electrons in Periodic Lattice: Metals, Insulators, Semiconductors (3)" },
      { u: 4, text: "Refraction, Absorption, Emission, Fluorescence, Scattering (4)" },
      { u: 5, text: "Absorption and Emission of Light by Semiconductors (5)" },
      { u: 6, text: "Semiconductor Science and LEDs, Energy Band Diagrams (6)" },
      { u: 7, text: "Density of States, Fermi-Dirac Function, Extrinsic Semiconductors (7)" },
      { u: 8, text: "Compensation Doping, Degenerate Semiconductors, Band Diagrams in Applied Field (8)" },
      { u: 9, text: "Direct and Indirect Bandgap Semiconductors: E-K Diagrams, PN Junctions (9)" },
      { u: 10, text: "Open Circuits, PN Junction Forward and Reverse Bias Circuits (10)" },
      { u: 11, text: "Visible Light-Emitting Diodes: Physics and Optical Properties of LEDs (11)" },
      { u: 12, text: "Radiative and Non-Radiative Recombination, Electrical Properties (12)" },
      { u: 13, text: "Current-Voltage Characteristics, Efficiencies, Novel LED Technologies (13)" },
      { u: 14, text: "Stimulated Emission Devices: Stimulated Emission and Population Inversion (14)" },
      { u: 15, text: "Photon Amplification, Laser Principles, Einstein Coefficients (15)" },
      { u: 16, text: "Principle of Laser Diode, Heterostructure Laser Diodes (16)" },
      { u: 17, text: "Photovoltaic Devices: Solar Cells, Operating Current, Voltage and Fill Factor (17)" }
    ],
    revisionBullets: [
      "Full revision: Photon statistics, electron behaviour in lattice and semiconductor optical absorption/emission (1–5)",
      "Full revision: Fermi-Dirac distribution, doping, direct/indirect bandgap E-K diagrams and PN junctions (6–10)",
      "Full revision: LED physics, radiative vs non-radiative recombination, I-V curves and luminous efficiency (11–13)",
      "Full revision: Population inversion, Einstein coefficients, heterostructure laser diodes and solar cell fill factor (14–17)"
    ]
  },
  EPD: {
    id: "EPD", stream: "sec", role: "SEC", name: "Electrical and Photovoltaic Devices", shortName: "SEC (Electrical & PV)",
    examDate: "2027-01-27", totalUnits: 19, unitLabel: "units",
    theme: { cardBg: "#BAE6FD", bannerBg: "#E0F2FE", border: "#7DD3FC" },
    iconId: "icon-electrodynamics",
    units: [
      { u: 1, text: "DC Motor Basics: Principle, Back EMF, Voltage Equation, Torque, Speed Regulation, BLDC Motor (1)" },
      { u: 2, text: "Working Principle of Transformer, Construction, Core-Type and Shell-Type (2)" },
      { u: 3, text: "Ideal Transformer Theory, EMF Equation, Transformation Ratio, Transformer on Load (3)" },
      { u: 4, text: "Classification of AC Motors, Induction Motor: Squirrel-Cage and Phase-Wound Rotor (4)" },
      { u: 5, text: "Production of Rotating Magnetic Field, Three-Phase Supply, Proof of Rotor Rotation (5)" },
      { u: 6, text: "Wiring Types, Specifications of Wires and Cable Classifications (6)" },
      { u: 7, text: "Basics of Wiring: Star and Delta Connections, Simple Domestic Wiring Schemes (7)" },
      { u: 8, text: "Fuses, Circuit Breakers (MCB/ELCB) and Earthing Systems (8)" },
      { u: 9, text: "Electricity Demand, Power Sources Comparison, Conventional and Renewable Energy (9)" },
      { u: 10, text: "Photovoltaic Materials and Basic Semiconductor Physics (10)" },
      { u: 11, text: "Generic Photovoltaic Cell and Equivalent Circuit Model (11)" },
      { u: 12, text: "From Photovoltaic Cells to Modules to Solar Arrays (12)" },
      { u: 13, text: "Crystalline Silicon Technologies: Mono and Polycrystalline (13)" },
      { u: 14, text: "Thin Film Photovoltaic Technologies (14)" },
      { u: 15, text: "Introduction to Energy Storage Systems and Source Profiles (15)" },
      { u: 16, text: "Battery Technology: Lead-Acid and Nickel Metal Hydride Batteries (16)" },
      { u: 17, text: "Lithium-Ion and Advanced Lithium Batteries (17)" },
      { u: 18, text: "Voltage Characteristics, Battery Standards, Nomenclature and Cell Designs (18)" },
      { u: 19, text: "Fuel Cells: Principles, Complementary Electrochemistry, SOFC and PEMFC (19)" }
    ],
    revisionBullets: [
      "Full revision: DC motor torque/speed, BLDC motors, transformer equations, induction motors and rotating fields (1–5)",
      "Full revision: Domestic/industrial wiring, star-delta configurations, fuses, breakers and earthing (6–8)",
      "Full revision: Photovoltaic physics, solar cell equivalent circuits, crystalline silicon and thin film PV (9–14)",
      "Full revision: Energy storage: lead-acid, lithium battery characteristics, standards, fuel cells and PEMFC (15–19)"
    ]
  },

  // =========================================================================
  // MATHEMATICS HONOURS
  // =========================================================================
  DE: {
    id: "DE", stream: "math", role: "Major 1", name: "Methods of Differential Equations", shortName: "Diff Equations",
    examDate: "2027-01-19", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#FBCFE8", bannerBg: "#FCE7F3", border: "#F472B6" },
    iconId: "icon-real-analysis",
    units: [
      { u: 1, text: "Differential Equations Definitions Review and Direction Fields (2.1.1) (1)" },
      { u: 2, text: "Autonomous First-Order DEs, Critical Points and Phase Portraits (2.1.2) (2)" },
      { u: 3, text: "Separable Differential Equations and Integration (2.2) (3)" },
      { u: 4, text: "First-Order Linear Differential Equations and Integrating Factor (2.3) (4)" },
      { u: 5, text: "Exact Differential Equations and Potential Functions (2.4) (5)" },
      { u: 6, text: "Solutions by Substitution: Homogeneous and Bernoulli Equations (2.5) (6)" },
      { u: 7, text: "Comprehensive Problem Solving on First-Order DEs (7)" },
      { u: 8, text: "Initial-Value and Boundary-Value Problems for Higher-Order DEs (4.1.1) (8)" },
      { u: 9, text: "Homogeneous Linear Equations, Superposition and Wronskian (4.1.2) (9)" },
      { u: 10, text: "Nonhomogeneous Linear Equations and General Solution Structure (4.1.3) (10)" },
      { u: 11, text: "Reduction of Order for Second-Order Differential Equations (4.2) (11)" },
      { u: 12, text: "Homogeneous Linear Equations with Constant Coefficients (4.3) (12)" },
      { u: 13, text: "Undetermined Coefficients: Superposition Approach (4.4) (13)" },
      { u: 14, text: "Undetermined Coefficients: Annihilator Approach (Foundations) (4.5) (14)" },
      { u: 15, text: "Undetermined Coefficients: Annihilator Approach (Advanced) (4.5) (15)" },
      { u: 16, text: "Variation of Parameters for Nonhomogeneous Equations (4.6) (16)" },
      { u: 17, text: "Cauchy-Euler Differential Equations (Foundations) (4.7) (17)" },
      { u: 18, text: "Cauchy-Euler Differential Equations (General Solutions) (4.7) (18)" },
      { u: 19, text: "Solving Systems of Linear DEs by Systematic Elimination (4.9) (19)" },
      { u: 20, text: "Definition of Laplace Transforms and Linearity Properties (7.1) (20)" },
      { u: 21, text: "Inverse Laplace Transforms and Partial Fractions (7.2.1) (21)" },
      { u: 22, text: "Transforms of Derivatives and Solving Initial-Value Problems (7.2.2) (22)" }
    ],
    revisionBullets: [
      "Full revision: First-order DEs: direction fields, autonomous equations, separable, linear, exact and substitutions (1–7)",
      "Full revision: Higher-order linear DEs: IVPs/BVPs, Wronskian, reduction of order and constant coefficient equations (8–12)",
      "Full revision: Nonhomogeneous methods: undetermined coefficients, variation of parameters, Cauchy-Euler and linear systems (13–19)",
      "Full revision: Laplace transforms definition, inverse transforms, derivative theorems and IVP applications (20–22)"
    ]
  },
  CA2: {
    id: "CA2", stream: "math", role: "Major 2", name: "Complex Analysis II", shortName: "Complex Analysis II",
    examDate: "2027-01-20", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#DDD6FE", bannerBg: "#EDE9FE", border: "#C4B5FD" },
    iconId: "icon-complex-analysis",
    units: [
      { u: 1, text: "Real Integrals: Smooth Curves, Contours and Parameterisation (5.1) (1)" },
      { u: 2, text: "Complex Integrals: Definition, Line Integrals and Contours (5.2) (2)" },
      { u: 3, text: "Complex Integrals: Properties, ML Inequality and Bounding (5.2) (3)" },
      { u: 4, text: "Cauchy-Goursat Theorem: Simply Connected Domains (5.3) (4)" },
      { u: 5, text: "Cauchy-Goursat Theorem: Multiply Connected Domains and Deformations (5.3) (5)" },
      { u: 6, text: "Independence of Path and Antiderivatives for Analytic Functions (5.4) (6)" },
      { u: 7, text: "Cauchy Integral Formula for Analytic Functions (5.5.1) (7)" },
      { u: 8, text: "Cauchy Integral Formula for Derivatives and Morera's Theorem (5.5.2) (8)" },
      { u: 9, text: "Sequences and Series of Complex Numbers (6.1) (9)" },
      { u: 10, text: "Power Series, Convergence Tests, Radius and Circle of Convergence (6.1) (10)" },
      { u: 11, text: "Taylor Series Expansions for Analytic Functions (6.2) (11)" },
      { u: 12, text: "Taylor Series Properties, Differentiation and Remainder Estimates (6.2) (12)" },
      { u: 13, text: "Laurent Series Expansions in Annular Domains (6.3) (13)" },
      { u: 14, text: "Laurent Series: Principal Part and Singularity Classification (6.3) (14)" },
      { u: 15, text: "Zeros and Poles: Orders of Zeros and Isolated Singularities (6.4) (15)" },
      { u: 16, text: "Zeros and Poles: Removable, Essential Singularities and Picard's Theorem (6.4) (16)" },
      { u: 17, text: "Residues and Calculation of Residues at Poles (6.5) (17)" },
      { u: 18, text: "Cauchy's Residue Theorem and Closed Contour Evaluations (6.5) (18)" },
      { u: 19, text: "Evaluation of Real Trigonometric Integrals around Unit Circle (6.6.1) (19)" },
      { u: 20, text: "Evaluation of Real Improper Integrals along the Real Axis (6.6) (20)" },
      { u: 21, text: "Integration along Indented Contours and Jordan's Lemma (6.6) (21)" },
      { u: 22, text: "Integration around Branch Cuts and Logarithmic Functions (6.6) (22)" }
    ],
    revisionBullets: [
      "Full revision: Complex line integrals, ML inequality, Cauchy-Goursat theorem and domain deformations (1–5)",
      "Full revision: Path independence, Cauchy integral formulas, derivatives, sequences, series and radius of convergence (6–10)",
      "Full revision: Taylor and Laurent series expansions, principal parts, zeros, poles and singularity classification (11–16)",
      "Full revision: Residue theorem, trigonometric integrals, improper real integrals, Jordan's lemma and branch cut contours (17–22)"
    ]
  },
  ENT: {
    id: "ENT", stream: "math", role: "Major 3", name: "Elementary Number Theory", shortName: "Number Theory",
    examDate: "2027-01-21", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#C7D2FE", bannerBg: "#E0E7FF", border: "#818CF8" },
    iconId: "icon-abstract-algebra",
    units: [
      { u: 1, text: "Division Algorithm: Formulation, Proof and Integer Remainders (2.2) (1)" },
      { u: 2, text: "Greatest Common Divisor: Linear Combinations and Properties (2.3) (2)" },
      { u: 3, text: "Coprime Integers, Euclid's Lemma and GCD Theorems (2.3) (3)" },
      { u: 4, text: "Euclidean Algorithm for Efficient GCD Computation (2.4) (4)" },
      { u: 5, text: "Euclidean Algorithm: Expressing GCD as Linear Combination (2.4) (5)" },
      { u: 6, text: "Linear Diophantine Equation ax + by = c: Solvability Condition (2.5) (6)" },
      { u: 7, text: "Linear Diophantine Equation: General Integer Solutions and Examples (2.5) (7)" },
      { u: 8, text: "Fundamental Theorem of Arithmetic: Prime Factorisation Existence (3.1) (8)" },
      { u: 9, text: "Fundamental Theorem of Arithmetic: Uniqueness and Infinitude of Primes (3.1) (9)" },
      { u: 10, text: "Sieve of Eratosthenes and Prime Distribution Bounds (3.2) (10)" },
      { u: 11, text: "Basic Properties of Congruences and Residue Classes (4.2) (11)" },
      { u: 12, text: "Advanced Congruence Algebra and Divisibility Criteria (4.2) (12)" },
      { u: 13, text: "Linear Congruences: Modulo Solvability and Unique Solutions (4.4) (13)" },
      { u: 14, text: "Chinese Remainder Theorem for Simultaneous Congruences (4.4) (14)" },
      { u: 15, text: "Fermat's Little Theorem and Pseudoprimes (5.2) (15)" },
      { u: 16, text: "Fermat's Little Theorem: Applications, Powers and Inverses (5.2) (16)" },
      { u: 17, text: "Wilson's Theorem: Factorials and Characterisation of Primes (5.3) (17)" },
      { u: 18, text: "Wilson's Theorem: Quadratic Congruences and Applications (5.3) (18)" },
      { u: 19, text: "Euler's Phi-Function: Definition and Prime Power Formula (7.2) (19)" },
      { u: 20, text: "Euler's Phi-Function: Multiplicativity and Sum Over Divisors (7.2) (20)" },
      { u: 21, text: "Euler's Theorem: Generalisation of Fermat's Little Theorem (7.3) (21)" },
      { u: 22, text: "Properties and Computational Formulas for Euler's Phi-Function (7.4) (22)" }
    ],
    revisionBullets: [
      "Full revision: Division algorithm, greatest common divisor, coprime properties and Euclidean algorithm (1–5)",
      "Full revision: Diophantine equations ax+by=c, prime factorisation uniqueness and sieve of Eratosthenes (6–10)",
      "Full revision: Congruence arithmetic, linear congruences, Chinese remainder theorem and Fermat's little theorem (11–16)",
      "Full revision: Wilson's theorem, Euler's phi-function multiplicativity, totient properties and Euler's theorem (17–22)"
    ]
  },
  AP: {
    id: "AP", stream: "math", role: "Elective 1", name: "Applied Probability", shortName: "Applied Probability",
    examDate: "2027-01-22", totalUnits: 20, unitLabel: "units",
    theme: { cardBg: "#FED7AA", bannerBg: "#FFEDD5", border: "#FDBA74" },
    iconId: "icon-convex-opt",
    units: [
      { u: 1, text: "Sample Space and Random Events (1.2) (1)" },
      { u: 2, text: "Probabilities Defined on Events and Axioms of Probability (1.3) (2)" },
      { u: 3, text: "Conditional Probabilities and Multiplication Rule (1.4) (3)" },
      { u: 4, text: "Independent Events and Pairwise Independence (1.5) (4)" },
      { u: 5, text: "Bayes' Formula and Law of Total Probability (1.6) (5)" },
      { u: 6, text: "Random Variables: Definition and Cumulative Distribution Function (2.1) (6)" },
      { u: 7, text: "Discrete Random Variables and Probability Mass Functions (2.2) (7)" },
      { u: 8, text: "Continuous Random Variables and Probability Density Functions (2.3) (8)" },
      { u: 9, text: "Expectation of a Random Variable: Discrete and Continuous Cases (2.4) (9)" },
      { u: 10, text: "Jointly Distributed Random Variables, Joint CDF and Independence (2.5) (10)" },
      { u: 11, text: "Moment Generating Functions and Moments Calculation (2.6) (11)" },
      { u: 12, text: "Limit Theorems: Chebyshev Inequality, Weak/Strong LLN and Central Limit Theorem (2.8) (12)" },
      { u: 13, text: "Conditional Probability and Expectation: Discrete Case (3.1) (13)" },
      { u: 14, text: "Conditional Probability and Expectation: Continuous Case (3.2) (14)" },
      { u: 15, text: "Computing Expectations by Conditioning and Law of Total Expectation (3.3) (15)" },
      { u: 16, text: "Computing Probabilities by Conditioning (3.4) (16)" },
      { u: 17, text: "Markov Chains: Definition, Transition Probability Matrices and Examples (4.1) (17)" },
      { u: 18, text: "Chapman-Kolmogorov Equations and n-Step Transition Probabilities (4.2) (18)" },
      { u: 19, text: "Classification of States: Recurrence, Transience and Periodicity (4.3) (19)" },
      { u: 20, text: "Limiting Probabilities, Stationary Distributions and Long-Run Proportions (4.4) (20)" }
    ],
    revisionBullets: [
      "Full revision: Sample spaces, conditional probability, Bayes' formula, discrete & continuous random variables (1–8)",
      "Full revision: Expectations, moments, joint distributions, covariance, MGFs and limit theorems (LLN/CLT) (9–12)",
      "Full revision: Conditional probability, conditional expectation, tower property and conditioning methods (13–16)",
      "Full revision: Markov chains, transition matrices, Chapman-Kolmogorov equations, state classifications and stationary distribution (17–20)"
    ]
  },
  ML2: {
    id: "ML2", stream: "math", role: "Elective 2", name: "Machine Learning - II", shortName: "Machine Learning II",
    examDate: "2027-01-25", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#BBF7D0", bannerBg: "#DCFCE7", border: "#86EFAC" },
    iconId: "icon-machine-learning",
    units: [
      { u: 1, text: "Review of Linear Regression and Classification Foundations (1)" },
      { u: 2, text: "Dual Representations and Construction of Valid Kernels (2)" },
      { u: 3, text: "Radial Basis Function Networks and Nadaraya-Watson Kernel Regression (3)" },
      { u: 4, text: "Gaussian Processes for Regression and Classification (4)" },
      { u: 5, text: "Laplace Approximation for Bayesian Inference (5)" },
      { u: 6, text: "Connection Between Kernel Methods and Neural Networks (6)" },
      { u: 7, text: "Maximum Margin Classifiers and Support Vector Formulation (7)" },
      { u: 8, text: "Relation of SVM to Logistic Regression and Hinge Loss (8)" },
      { u: 9, text: "Support Vector Regression (SVR) and Epsilon-Insensitive Loss (9)" },
      { u: 10, text: "Relevance Vector Machines (RVM) and Sparse Bayesian Learning (10)" },
      { u: 11, text: "Regression and Classification Using Relevance Vector Machines (11)" },
      { u: 12, text: "Bayesian Networks: Directed Acyclic Graphs and Conditional Independence (12)" },
      { u: 13, text: "Markov Random Fields: Undirected Graphs and Cliques (13)" },
      { u: 14, text: "Factorization Properties, d-Separation and Markov Blanket (14)" },
      { u: 15, text: "Inference in Graphical Models and Variable Elimination (15)" },
      { u: 16, text: "Factor Graphs and Sum-Product Algorithm (16)" },
      { u: 17, text: "Max-Sum and Belief Propagation Algorithms on Trees (17)" },
      { u: 18, text: "Principal Component Analysis: Maximum Variance and Minimum Reconstruction Error (18)" },
      { u: 19, text: "Dimensionality Reduction and Covariance Eigenvalue Decomposition (19)" },
      { u: 20, text: "Probabilistic PCA: Maximum Likelihood PCA and EM Algorithm (20)" },
      { u: 21, text: "Bayesian PCA and Factor Analysis Models (21)" },
      { u: 22, text: "Kernel PCA and Nonlinear Dimensionality Reduction (22)" }
    ],
    revisionBullets: [
      "Full revision: Dual representations, kernel trick, RBF networks, Gaussian processes and Laplace approximation (1–6)",
      "Full revision: Maximum margin classifiers, support vector regression, hinge loss and relevance vector machines (7–11)",
      "Full revision: Graphical models: Bayesian networks, Markov random fields, factor graphs and belief propagation (12–17)",
      "Full revision: PCA maximum variance formulation, probabilistic PCA with EM algorithm and Kernel PCA (18–22)"
    ]
  },
  DSP: {
    id: "DSP", stream: "sec", role: "SEC", name: "Data Science with Python", shortName: "SEC (Python DS)",
    examDate: "2027-01-27", totalUnits: 19, unitLabel: "units",
    theme: { cardBg: "#FECDD3", bannerBg: "#FFE4E6", border: "#FDA4AF" },
    iconId: "icon-sec-python",
    units: [
      { u: 1, text: "Python Tools: Exception Handling and Lists Operations (1)" },
      { u: 2, text: "Tuples, Dictionaries and Hash Mapping Operations (2)" },
      { u: 3, text: "Counters, Sets and List Comprehensions (3)" },
      { u: 4, text: "Truthiness, Automated Testing, assert, Iterables and Generators (4)" },
      { u: 5, text: "Randomness, Regular Expressions, zip and Argument Unpacking (5)" },
      { u: 6, text: "NumPy: Mathematical Operations, Array Subtraction, Squaring, Trigonometry (6)" },
      { u: 7, text: "NumPy: Matrix Multiplication, Indexing, Slicing and Shape Manipulation (7)" },
      { u: 8, text: "Pandas: Inserting, Exporting CSV Data, Data Cleansing and Missing Data Checks (8)" },
      { u: 9, text: "Pandas: Filling Missing Data, Vectorized String Operations and Merging Data (9)" },
      { u: 10, text: "Data Operations: Aggregation Operations and Inner Joins (10)" },
      { u: 11, text: "Data Operations: Left/Full Outer Joins and the groupby Function (11)" },
      { u: 12, text: "Probability Distributions: Normal Distribution from Binomial (12)" },
      { u: 13, text: "Poisson Distribution and Bernoulli Distribution Modelling (13)" },
      { u: 14, text: "Hypothesis Testing: z-score, p-value, One-Tailed and Two-Tailed Tests (14)" },
      { u: 15, text: "Type 1 & Type 2 Errors, Statistical Power and Confidence Intervals (15)" },
      { u: 16, text: "Correlation Coefficients, Z-test vs Student's T-test, F-Distribution (16)" },
      { u: 17, text: "Chi-Square Goodness of Fit, Test of Independence and ANOVA (17)" },
      { u: 18, text: "What is Data Mining? Formulating Problems and Presenting Findings (18)" },
      { u: 19, text: "End-to-End Practical Case Study: Complete Titanic Dataset Analysis (19)" }
    ],
    revisionBullets: [
      "Full revision: Python core: exception handling, lists, dicts, comprehensions, generators, regex and unpacking (1–5)",
      "Full revision: NumPy array manipulation, matrix math, Pandas cleaning, merging, joins and groupby (6–11)",
      "Full revision: Inferential statistics: distributions, z/t-tests, p-values, confidence intervals, chi-square and ANOVA (12–17)",
      "Full revision: Data mining methodology and comprehensive exploratory/predictive Titanic analysis (18–19)"
    ]
  }
};

export const SYLLABUS_HOURS_MAP = {
  // Physics Honours
  TH:   [1, 1, 1, 1, 1, 2, 1, 2,  1, 2, 1, 1, 1, 1, 2,  1, 2, 1, 1, 1, 1, 1, 2,  3, 1, 2, 2, 3, 2, 1, 2],
  EL2:  [3, 3, 2, 1, 3,  1, 2, 1, 2, 2, 2,  3, 2, 3, 2, 2,  2, 1, 2, 2, 1, 3],
  NP:   [1, 2, 2, 3, 1, 3, 3,  1, 3, 3, 4, 2, 2,  1, 3, 2, 2, 1,  1, 1, 2, 3, 2],
  NT:   [2, 5, 2, 3, 2, 1,  3, 4, 3,  1, 1, 2, 2, 2, 2,  2, 2, 2, 2, 1, 2, 2],
  OPTO: [2, 3, 3, 2, 2,  3, 3, 4, 3, 3,  4, 3, 3,  2, 2, 3, 3],
  EPD:  [3, 1, 2, 2, 2,  2, 3, 2,  3, 2, 2, 1, 1, 1,  2, 2, 1, 1, 3],

  // Mathematics Honours
  DE:   [2, 2, 2, 2, 2, 2, 2,  2.5, 2.5, 2.5, 2.5, 2,  2, 2, 2, 2, 2, 2, 2,  3, 2.5, 2.5],
  CA2:  [2.4, 2.4, 2.4, 2.4, 2.4,  2.4, 2.4, 2.4, 2.4, 2.4,  2.33, 2.33, 2.33, 2.33, 2.34, 2.34,  1.67, 1.67, 1.67, 1.67, 1.66, 1.66],
  ENT:  [2.4, 2.4, 2.4, 2.4, 2.4,  2.2, 2.2, 2.2, 2.2, 2.2,  2.16, 2.16, 2.16, 2.16, 2.18, 2.18,  2, 2, 2, 2, 2, 2],
  AP:   [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,  3, 3, 3, 3,  3, 3, 3, 3,  3, 3, 3, 3],
  ML2:  [2, 2, 2, 2, 2, 2,  2.4, 2.4, 2.4, 2.4, 2.4,  2, 2, 2, 2, 2, 2,  2.4, 2.4, 2.4, 2.4, 2.4],
  DSP:  [1.6, 1.6, 1.6, 1.6, 1.6,  1.33, 1.33, 1.33, 1.33, 1.34, 1.34,  2, 2, 2, 2, 2, 2,  4, 4]
};

export const LAST_EXAM = Object.values(SUBJECTS).reduce((m, s) => s.examDate > m ? s.examDate : m, "0000");
