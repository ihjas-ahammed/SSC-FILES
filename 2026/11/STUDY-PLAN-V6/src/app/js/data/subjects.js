/* =========================================================================
   DEPARTMENTS, SUBJECT SYLLABI, MODULE MAPPINGS & HOUR WEIGHTS
   ========================================================================= */

export const MODULE_LABEL = { "1": "I", "2": "II", "3": "III", "4": "IV" };
export const MOD_ROMAN = { "1": "Module I", "2": "Module II", "3": "Module III", "4": "Module IV" };
export const MODS = ["1", "2", "3", "4"];

export const DEPTS = {
  physics: { label: "Physics", sub: "ED · Optics · QM · Solids · Materials", ids: ["ED", "OPT", "QM", "SSP", "MS"] },
  math: { label: "Mathematics", sub: "RA · AA · CA · Convex · ML", ids: ["RA", "AA", "CA", "CO", "ML"] }
};

export const SEC_OPTIONS = [
  { id: "SEC_PHY", label: "Python for Data Analysis", sub: "19 units" },
  { id: "SEC_MAT", label: "LaTeX", sub: "19 units" },
  { id: "SEC_OTH", label: "Other SEC", sub: "Name it yourself" }
];

export const UNIT_MODULE = {
  ED: "1111122233333344444444",
  OPT: "1111222222233333444444",
  QM: "1111122222233333333334444",
  SSP: "1111122222233333444444",
  MS: "1111122223333334444444",
  SEC_PHY: "1111122222333333444",
  RA: "1111112222233333334444",
  AA: "1111112222223333444444",
  CA: "1111122222333333334444",
  CO: "1111111122222222233333444",
  ML: "11111122222233333344444",
  SEC_MAT: "1111222333344444444",
  SEC_OTH: "1111122222333333444"
};

export const SUBJECTS = {
  ED: {
    id: "ED", stream: "physics", role: "Major 1", name: "Electrodynamics II", shortName: "Electrodynamics",
    examDate: "2026-11-03", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#BCE0FD", bannerBg: "#D6EEFF", border: "#90C8F8" },
    iconId: "icon-electrodynamics",
    units: [
      { u: 1, text: "Polarisation in dielectrics (1)" },
      { u: 2, text: "The field of a polarised object and bound charges (2)" },
      { u: 3, text: "Electric displacement, boundary conditions, susceptibility, permittivity (3)" },
      { u: 4, text: "Magnetisation in matter (4)" },
      { u: 5, text: "Field of a magnetised object; bound currents; ferromagnetism (5)" },
      { u: 6, text: "Ohm's law, EMF and motional EMF (6)" },
      { u: 7, text: "Faraday's law, induced E field, inductance, energy in magnetic fields (7)" },
      { u: 8, text: "Maxwell's equations in matter and boundary conditions (8)" },
      { u: 9, text: "Waves in one dimension, sinusoidal waves, polarisation of waves (9)" },
      { u: 10, text: "The wave equations for E and B (10)" },
      { u: 11, text: "Monochromatic plane waves in vacuum (11)" },
      { u: 12, text: "Poynting's theorem and energy conservation (12)" },
      { u: 13, text: "Energy and momentum in electromagnetic waves (13)" },
      { u: 14, text: "Propagation of electromagnetic waves in linear media (14)" },
      { u: 15, text: "Growth of current in series L-R, C-R and L-C circuits (15)" },
      { u: 16, text: "Decay of current in L-R, C-R and L-C circuits (16)" },
      { u: 17, text: "AC: EMF induced in a rotating coil in a magnetic field (17)" },
      { u: 18, text: "AC circuits containing R only, L only or C only (18)" },
      { u: 19, text: "Use of j operator in the study of AC circuits (19)" },
      { u: 20, text: "AC circuits with L and R, C and R, and parallel L and C (20)" },
      { u: 21, text: "Series LCR resonant circuit, bandwidth and Q-factor (21)" },
      { u: 22, text: "Power and power factor in AC circuits (22)" }
    ],
    revisionBullets: [
      "Full revision: Polarisation, electric displacement D, magnetisation M and bound currents (1–5)",
      "Full revision: Faraday's law, inductance, Maxwell's equations and boundary conditions (6–8)",
      "Full revision: EM wave equations, monochromatic plane waves and Poynting's theorem (9–14)",
      "Full revision: Transient L-R/C-R/L-C circuits, j-operator analysis and series LCR resonance (15–22)"
    ]
  },
  OPT: {
    id: "OPT", stream: "physics", role: "Major 2", name: "Optics", shortName: "Optics",
    examDate: "2026-10-27", totalUnits: 22, unitLabel: "theory units",
    theme: { cardBg: "#C7F9CC", bannerBg: "#DCFCE7", border: "#86EFAC" },
    iconId: "icon-optics",
    units: [
      { u: 1, text: "Laws of reflection and refraction from Fermat's principle" },
      { u: 2, text: "Refraction and reflection at a single spherical surface" },
      { u: 3, text: "The thin lens, principal foci and focal length" },
      { u: 4, text: "The Newton formula and lateral magnification" },
      { u: 5, text: "Superposition of two sinusoidal waves" },
      { u: 6, text: "Interference: division of wavefront" },
      { u: 7, text: "Interference of light waves" },
      { u: 8, text: "Fresnel's two-mirror and Fresnel's biprism" },
      { u: 9, text: "Interference with white light, Lloyd's mirror, phase change on reflection (9)" },
      { u: 10, text: "Interference by division of amplitude and non-reflecting films (10)" },
      { u: 11, text: "Colours of thin films, Newton's rings, Michelson interferometer (11)" },
      { u: 12, text: "Single-slit Fraunhofer diffraction pattern (12)" },
      { u: 13, text: "Two-slit Fraunhofer diffraction pattern (13)" },
      { u: 14, text: "N-slit Fraunhofer diffraction pattern and grating (14)" },
      { u: 15, text: "Fresnel diffraction and zone plate (15)" },
      { u: 16, text: "Fresnel diffraction by a straight edge (16)" },
      { u: 17, text: "Polarisation: introduction and transverse wave nature (17)" },
      { u: 18, text: "Production of linearly polarised light (18)" },
      { u: 19, text: "Effects of polariser and analyser; Malus's law (19)" },
      { u: 20, text: "Double refraction and Huygens' explanation (20)" },
      { u: 21, text: "Quarter-wave and half-wave plates (21)" },
      { u: 22, text: "Production and analysis of polarised light (22)" }
    ],
    revisionBullets: [
      "Full revision: Fermat's principle, spherical surfaces, thin lens and Newton's formula (1–4)",
      "Full revision: Wavefront & amplitude interference, biprism, Newton's rings and Michelson (5–11)",
      "Full revision: Fraunhofer diffraction (1, 2, N slits & grating), zone plate and straight edge (12–16)",
      "Full revision: Polarisation, double refraction, Huygens' explanation and wave plates (17–22)"
    ]
  },
  QM: {
    id: "QM", stream: "physics", role: "Major 3", name: "Quantum Mechanics I", shortName: "Quantum Mech",
    examDate: "2026-10-29", totalUnits: 25, unitLabel: "units",
    theme: { cardBg: "#E2C2FF", bannerBg: "#F3E8FF", border: "#C084FC" },
    iconId: "icon-quantum",
    units: [
      { u: 1, text: "Schrödinger equation and statistical interpretation (1)" },
      { u: 2, text: "Probability: discrete and continuous variables (2)" },
      { u: 3, text: "Normalization of wave functions (3)" },
      { u: 4, text: "Momentum operator and expectation values (4)" },
      { u: 5, text: "The Heisenberg uncertainty principle (5)" },
      { u: 6, text: "Stationary states and time-independent Schrödinger equation (6)" },
      { u: 7, text: "The infinite square well potential (7)" },
      { u: 8, text: "Free particle, wave packets, phase and group velocity (8)" },
      { u: 9, text: "Conservation of probability: probability density and current (9)" },
      { u: 10, text: "The potential step (Case E > V0 and Case E < V0) (10)" },
      { u: 11, text: "The potential barrier and quantum tunnelling (11)" },
      { u: 12, text: "Hilbert space, dimension, basis and square-integrable wave functions (12)" },
      { u: 13, text: "Dirac notation: kets, bras and bra-kets (13)" },
      { u: 14, text: "Operators, Hermitian adjoint and Hermitian operators (14)" },
      { u: 15, text: "Commutator algebra (15)" },
      { u: 16, text: "Uncertainty relation between two operators (16)" },
      { u: 17, text: "Functions of operators (17)" },
      { u: 18, text: "Eigenvalues and eigenvectors of an operator (18)" },
      { u: 19, text: "Matrix representation of discrete bases; change of basis; unitary transformations (19)" },
      { u: 20, text: "Representation of continuous basis; position and momentum representations (20)" },
      { u: 21, text: "Matrix mechanics and wave mechanics (21)" },
      { u: 22, text: "Harmonic oscillator: energy eigenvalues, eigenstates and ladder operators (22)" },
      { u: 23, text: "3D problems in Cartesian coordinates: separation of variables (23)" },
      { u: 24, text: "Box potentials (rectangular and cubic) and degeneracy (24)" },
      { u: 25, text: "3D harmonic oscillator and degeneracy (25)" }
    ],
    revisionBullets: [
      "Full revision: Wave function, statistical interpretation, momentum and uncertainty principle (1–5)",
      "Full revision: Stationary states, infinite square well, free particle, potential step and tunnelling (6–11)",
      "Full revision: Hilbert space, Dirac notation, Hermitian operators, commutators and representations (12–21)",
      "Full revision: 1D harmonic oscillator ladder operators, 3D box potentials and 3D oscillator degeneracy (22–25)"
    ]
  },
  SSP: {
    id: "SSP", stream: "physics", role: "Elective 1", name: "Properties of Solids", shortName: "Solid State",
    examDate: "2026-10-30", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#FDEEB3", bannerBg: "#FEF6C9", border: "#FCD34D" },
    iconId: "icon-solid-state",
    units: [
      { u: 1, text: "Crystal lattice, translation vectors, unit cell and basis (1)" },
      { u: 2, text: "Symmetry operations, point groups and space groups (2)" },
      { u: 3, text: "Types of lattices, lattice directions and planes, interplanar spacing (3)" },
      { u: 4, text: "Simple crystal structures with examples (4)" },
      { u: 5, text: "X-ray diffraction, reciprocal lattice and Brillouin zones (5)" },
      { u: 6, text: "Drude–Lorentz classical theory (6)" },
      { u: 7, text: "Sommerfeld quantum theory: free electron gas in 1D (7)" },
      { u: 8, text: "Fermi energy, density of states and filling of energy levels (8)" },
      { u: 9, text: "Application of free electron gas model (9)" },
      { u: 10, text: "Band theory, Bloch theorem, Kronig–Penney model and effective mass (10)" },
      { u: 11, text: "Distinction between metal, insulator and semiconductor (11)" },
      { u: 12, text: "Intrinsic and extrinsic semiconductors (12)" },
      { u: 13, text: "Drift velocity in semiconductors (13)" },
      { u: 14, text: "Mobility and conductivity of intrinsic semiconductors (14)" },
      { u: 15, text: "Carrier concentration and Fermi level (15)" },
      { u: 16, text: "Conductivity of intrinsic and extrinsic semiconductors (16)" },
      { u: 17, text: "Types of magnetism and origin of permanent magnetic moment (17)" },
      { u: 18, text: "Diamagnetism, paramagnetism (classical) and Weiss ferromagnetism (18)" },
      { u: 19, text: "Antiferromagnetism and ferrimagnetism (19)" },
      { u: 20, text: "Polarisation, susceptibility and local electric field (20)" },
      { u: 21, text: "Dielectric constant, polarisability and its sources (21)" },
      { u: 22, text: "Ferroelectricity and piezoelectricity (22)" }
    ],
    revisionBullets: [
      "Full revision: Crystal lattice, symmetry groups, Miller planes, XRD and Brillouin zones (1–5)",
      "Full revision: Drude–Lorentz, Sommerfeld Fermi gas, Bloch theorem and Kronig–Penney model (6–11)",
      "Full revision: Intrinsic & extrinsic semiconductors, drift velocity, Fermi level and conductivity (12–16)",
      "Full revision: Dia-, para-, ferro- and ferrimagnetism; local field, polarisability, ferro/piezoelectricity (17–22)"
    ]
  },
  MS: {
    id: "MS", stream: "physics", role: "Elective 2", name: "Materials Science", shortName: "Materials Science",
    examDate: "2026-11-02", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#FFCBA4", bannerBg: "#FFE5D0", border: "#FDBA74" },
    iconId: "icon-materials",
    units: [
      { u: 1, text: "Scope and need of materials science (1)" },
      { u: 2, text: "Classification of materials: metals, ceramics, polymers, composites (2)" },
      { u: 3, text: "Bonding forces, energies and primary interatomic bonds (3)" },
      { u: 4, text: "Ionic, covalent, metallic and van der Waals bonding (4)" },
      { u: 5, text: "Anomalous volume expansion of water (5)" },
      { u: 6, text: "Single and polycrystalline materials, anisotropy, nanocrystalline solids (6)" },
      { u: 7, text: "Imperfections: vacancies and self-interstitials (7)" },
      { u: 8, text: "Impurities, dislocations: linear, interfacial and volume defects (8)" },
      { u: 9, text: "Atomic vibrations, microstructure and grain size determination (9)" },
      { u: 10, text: "Conductors, insulators, dielectrics; thermal conductivity & resistivity (10)" },
      { u: 11, text: "Origins and manipulation of electrical properties (11)" },
      { u: 12, text: "Magnetic materials: physics and manipulation of magnetic properties (12)" },
      { u: 13, text: "Materials selection for magnetic design (13)" },
      { u: 14, text: "Materials for optical devices and radiation interaction (14)" },
      { u: 15, text: "Durability of materials: oxidation, corrosion and degradation (15)" },
      { u: 16, text: "Electrical and electronic measurements (16)" },
      { u: 17, text: "Hall effect in semiconductors (17)" },
      { u: 18, text: "Magnetism and magnetic measurements (18)" },
      { u: 19, text: "Introduction to electrochemical techniques (19)" },
      { u: 20, text: "Cyclic voltammetry principles (20)" },
      { u: 21, text: "Optical microscopy and photoluminescence spectroscopy (21)" },
      { u: 22, text: "Raman spectroscopy of solids (22)" }
    ],
    revisionBullets: [
      "Full revision: Materials classification, bonding types and anomalous expansion of water (1–5)",
      "Full revision: Single/polycrystalline solids, anisotropy, vacancies, dislocations & grain size (6–9)",
      "Full revision: Electrical, thermal, magnetic and optical materials; oxidation & corrosion (10–15)",
      "Full revision: Hall effect, magnetic measurements, cyclic voltammetry, photoluminescence & Raman (16–22)"
    ]
  },
  SEC_PHY: {
    id: "SEC_PHY", stream: "sec", role: "SEC", name: "Python for Data Analysis", shortName: "SEC (Python)",
    examDate: "2026-11-03", totalUnits: 19, unitLabel: "units",
    theme: { cardBg: "#FFC6D0", bannerBg: "#FFE4E8", border: "#FDA4AF" },
    iconId: "icon-sec-python",
    units: [
      { u: 1, text: "Python variables, operators, numerical types (int, float, complex) and list operations (1)" },
      { u: 2, text: "Tuples, sets, dictionaries, input() and file operations open()/close() (2)" },
      { u: 3, text: "Conditional and control statements: break and continue (3)" },
      { u: 4, text: "Functions: defining functions, passing arguments and return values (4)" },
      { u: 5, text: "NumPy arrays: creation, access and 3x3 array arithmetic operations (5)" },
      { u: 6, text: "Pandas DataFrame: creating DataFrames (6)" },
      { u: 7, text: "DataFrame attributes, pivoting DataFrames, sorting and sort by labels (7)" },
      { u: 8, text: "Missing data (fill, drop, replace), combining DataFrames and describe() statistics (8)" },
      { u: 9, text: "Statistical values: count, mode, covariance, correlation and quantiles (9)" },
      { u: 10, text: "Aggregation, groupby(), data wrangling, merging, joining and concatenating (10)" },
      { u: 11, text: "Importance of data visualisation and generating bar charts (11)" },
      { u: 12, text: "Histogram, frequency polygon, box plot and scatter plot arguments (12)" },
      { u: 13, text: "Correlation matrix plot and calculating correlation matrices (13)" },
      { u: 14, text: "Seaborn library features, color palettes and univariate distribution plots (14)" },
      { u: 15, text: "Seaborn histogram, density plot, bivariate distributions, hexbin and violin plots (15)" },
      { u: 16, text: "Statistical estimation bar plot, categorical plotting and heatmaps (cmap) (16)" },
      { u: 17, text: "Series and DataFrames from CSV, XLS, TAB and DAT file formats (17)" },
      { u: 18, text: "Viewing DataFrames using loc and iloc; DataFrame operations (18)" },
      { u: 19, text: "Jupyter Notebooks using Anaconda and Google Colab (19)" }
    ],
    revisionBullets: [
      "Full revision: Python lists, tuples, dictionaries, control flow, functions and NumPy arrays (1–5)",
      "Full revision: Pandas DataFrames, missing data, statistical functions, merge and groupby() (6–10)",
      "Full revision: Matplotlib & Seaborn visualisations (box, scatter, violin, hexbin, heatmaps) (11–16)",
      "Full revision: CSV/XLS/TAB/DAT file I/O, loc/iloc slicing and Jupyter/Colab workflows (17–19)"
    ]
  },
  RA: {
    id: "RA", stream: "math", role: "Major 1", name: "Real Analysis II", shortName: "Real Analysis II",
    examDate: "2026-11-03", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#BCE0FD", bannerBg: "#D6EEFF", border: "#90C8F8" },
    iconId: "icon-real-analysis",
    units: [
      { u: 1, text: "Continuous functions (5.1)" },
      { u: 2, text: "Continuous functions on intervals: boundedness and extrema (5.3.1–5.3.5)" },
      { u: 3, text: "Location of roots and Bolzano's intermediate value theorem (5.3.7–5.3.10)" },
      { u: 4, text: "Uniform continuity (5.4 to 5.4.3)" },
      { u: 5, text: "Uniform continuity & Weierstrass approximation (5.4.4–5.4.14)" },
      { u: 6, text: "Selected problems on continuous and uniformly continuous functions" },
      { u: 7, text: "The derivative and chain rule (6.1.1–6.1.7)" },
      { u: 8, text: "Rolle's theorem and Mean Value Theorem (6.2.1–6.2.6)" },
      { u: 9, text: "Monotone functions and applications of MVT (6.2.7–6.2.9)" },
      { u: 10, text: "Darboux's theorem and L'Hôpital results (6.2.10–6.2.13)" },
      { u: 11, text: "Selected problems on differentiation and MVT" },
      { u: 12, text: "Riemann integral: partitions and Riemann sums (7.1.1–7.1.4a)" },
      { u: 13, text: "Properties of the Riemann integral (7.1.5–7.1.7)" },
      { u: 14, text: "Riemann-integrable functions and Cauchy criterion (7.2.1–7.2.5)" },
      { u: 15, text: "Integrability of continuous/monotone functions and additivity (7.2.7–7.2.13)" },
      { u: 16, text: "Fundamental theorem of calculus (First Form) (7.3.1–7.3.7)" },
      { u: 17, text: "Fundamental theorem (Second Form) and substitution (7.3.8–7.3.18)" },
      { u: 18, text: "Selected problems on Riemann integration" },
      { u: 19, text: "Pointwise convergence of sequences of functions (8.1.1–8.1.3)" },
      { u: 20, text: "Uniform convergence and uniform norm (8.1.4–8.1.10)" },
      { u: 21, text: "Interchange of limits (8.2.1)" },
      { u: 22, text: "Interchange of limit and continuity (8.2.2)" }
    ],
    revisionBullets: [
      "Full revision: Continuous functions on intervals, Bolzano IVT and uniform continuity (5.1–5.4)",
      "Full revision: Differentiability, Rolle's theorem, Mean Value Theorem and Darboux's theorem (6.1–6.2)",
      "Full revision: Riemann integrability criteria, additivity and Fundamental Theorem of Calculus (7.1–7.3)",
      "Full revision: Pointwise vs uniform convergence, uniform norm and interchange of limits (8.1–8.2)"
    ]
  },
  AA: {
    id: "AA", stream: "math", role: "Major 2", name: "Abstract Algebra I", shortName: "Abstract Algebra",
    examDate: "2026-10-27", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#FDEEB3", bannerBg: "#FEF6C9", border: "#FCD34D" },
    iconId: "icon-abstract-algebra",
    units: [
      { u: 1, text: "Binary operations and closure (2.1–2.10)" },
      { u: 2, text: "Commutative and associative binary operations (2.11–2.25)" },
      { u: 3, text: "Isomorphic binary structures (3.1–3.11)" },
      { u: 4, text: "Structural properties under isomorphism (3.12–3.17)" },
      { u: 5, text: "Groups: axioms and examples (4.1–4.14)" },
      { u: 6, text: "Elementary properties of groups, finite groups and group tables (4.15+)" },
      { u: 7, text: "Subgroups and subgroup criteria (5.1–5.16)" },
      { u: 8, text: "Cyclic subgroups (5.17–5.23)" },
      { u: 9, text: "Cyclic groups and generators (6.1–6.9)" },
      { u: 10, text: "Structure and subgroups of cyclic groups (6.10–6.17)" },
      { u: 11, text: "Groups of permutations (up to 8.6)" },
      { u: 12, text: "Cayley's theorem and permutation groups (8.7–8.18)" },
      { u: 13, text: "Orbits and cycles (9.1–9.10)" },
      { u: 14, text: "Transpositions and the alternating groups (9.11–9.21)" },
      { u: 15, text: "Cosets of a subgroup (10.1–10.9)" },
      { u: 16, text: "Lagrange's theorem and consequences (10.10–10.14)" },
      { u: 17, text: "Group homomorphisms (13.1–13.10)" },
      { u: 18, text: "Kernel, image and normal subgroups (13.11–13.20)" },
      { u: 19, text: "Rings and subrings (18.1–18.13)" },
      { u: 20, text: "Division rings and fields (18.14–18.18)" },
      { u: 21, text: "Zero divisors and integral domains (19.1–19.8)" },
      { u: 22, text: "Characteristic of a ring, Fermat's and Euler's theorems (19.9–19.15)" }
    ],
    revisionBullets: [
      "Full revision: Binary operations, isomorphic binary structures, groups and group tables (Secs 2–4)",
      "Full revision: Subgroups, cyclic groups, groups of permutations and Cayley's theorem (Secs 5, 6, 8)",
      "Full revision: Orbits, cycles, alternating groups An, cosets and Lagrange's theorem (Secs 9–10)",
      "Full revision: Homomorphisms, rings, fields and integral domains (Secs 13, 18, 19)"
    ]
  },
  CA: {
    id: "CA", stream: "math", role: "Major 3", name: "Complex Analysis I", shortName: "Complex Analysis",
    examDate: "2026-10-29", totalUnits: 22, unitLabel: "units",
    theme: { cardBg: "#C7F9CC", bannerBg: "#DCFCE7", border: "#86EFAC" },
    iconId: "icon-complex-analysis",
    units: [
      { u: 1, text: "Complex numbers and their properties (1.1)" },
      { u: 2, text: "Complex plane and modulus (1.2)" },
      { u: 3, text: "Polar form of complex numbers (1.3)" },
      { u: 4, text: "Powers and roots; De Moivre's formula (1.4)" },
      { u: 5, text: "Sets of points in the complex plane (1.5)" },
      { u: 6, text: "Complex functions (2.1)" },
      { u: 7, text: "Complex functions as mappings (2.2)" },
      { u: 8, text: "Special power functions z^n (2.4.1)" },
      { u: 9, text: "Reciprocal power functions z^(1/n) (2.4.2)" },
      { u: 10, text: "Principal nth root functions (2.4)" },
      { u: 11, text: "Limits of complex functions (3.1.1)" },
      { u: 12, text: "Continuity of complex functions (3.1.2)" },
      { u: 13, text: "Continuity theorems and bounding property (3.1)" },
      { u: 14, text: "Differentiability and derivative rules (3.2)" },
      { u: 15, text: "Analyticity and entire functions (3.2)" },
      { u: 16, text: "Cauchy–Riemann equations (up to Theorem 3.3.2)" },
      { u: 17, text: "Sufficient conditions for analyticity and polar C–R equations (3.3)" },
      { u: 18, text: "Harmonic functions and harmonic conjugates (3.4)" },
      { u: 19, text: "Complex exponential function and periodicity (4.1.1)" },
      { u: 20, text: "Complex logarithmic function and principal branch (4.1.2)" },
      { u: 21, text: "Complex trigonometric functions (4.3.1)" },
      { u: 22, text: "Complex hyperbolic functions (4.3.2)" }
    ],
    revisionBullets: [
      "Full revision: Complex numbers, polar form, powers/roots, point sets and mappings (1.1–2.4)",
      "Full revision: Limits, continuity, differentiability and analyticity (3.1–3.2)",
      "Full revision: Cartesian & polar Cauchy–Riemann equations and harmonic functions (3.3–3.4)",
      "Full revision: Complex exponential, logarithmic, trigonometric and hyperbolic functions (4.1–4.3)"
    ]
  },
  CO: {
    id: "CO", stream: "math", role: "Elective 1", name: "Convex Optimization", shortName: "Convex Optimization",
    examDate: "2026-10-30", totalUnits: 25, unitLabel: "units",
    theme: { cardBg: "#FFCBA4", bannerBg: "#FFE5D0", border: "#FDBA74" },
    iconId: "icon-convex-opt",
    units: [
      { u: 1, text: "Scalar and vector fields; directional and partial derivatives (1)" },
      { u: 2, text: "Differentiable functions, total derivative, gradient and Jacobian (2)" },
      { u: 3, text: "Chain rule for differentiation in matrix form (3)" },
      { u: 4, text: "Stationary points and conditional stationarity (4)" },
      { u: 5, text: "Second derivatives and Hessian matrix (5)" },
      { u: 6, text: "Mean value theorems and second-order Taylor's theorem (6)" },
      { u: 7, text: "Eigenvalues of the Hessian (7)" },
      { u: 8, text: "Classification of stationary points (8)" },
      { u: 9, text: "Affine and convex sets (9)" },
      { u: 10, text: "Convexity-preserving operations on sets (10)" },
      { u: 11, text: "Generalised inequalities (11)" },
      { u: 12, text: "Supporting and separating hyperplanes (12)" },
      { u: 13, text: "Dual cones and generalised inequalities (13)" },
      { u: 14, text: "Basic properties and examples of convex functions (14)" },
      { u: 15, text: "Convexity-preserving operations on functions (15)" },
      { u: 16, text: "Quasi-convex and log-convex functions (16)" },
      { u: 17, text: "Convexity and generalised inequalities (17)" },
      { u: 18, text: "Optimisation problems and convex optimisation (18)" },
      { u: 19, text: "Linear optimisation problems (LP) (19)" },
      { u: 20, text: "Quadratic optimisation problems (QP) (20)" },
      { u: 21, text: "Geometric programming (GP) (21)" },
      { u: 22, text: "Generalised inequality constraints and vector optimisation (22)" },
      { u: 23, text: "Lagrange dual function, Lagrangian dual and geometric interpretation (23)" },
      { u: 24, text: "Saddle-point interpretation and optimality conditions (24)" },
      { u: 25, text: "Theorems of alternatives and generalised inequalities (25)" }
    ],
    revisionBullets: [
      "Full revision: Gradient, Jacobian, matrix chain rule, Hessian eigenvalues and stationary points (1–8)",
      "Full revision: Affine/convex sets, hyperplanes, dual cones and convex/quasi-convex functions (9–17)",
      "Full revision: Convex optimisation problems, LP, QP, geometric programming and vector optimisation (18–22)",
      "Full revision: Lagrange dual function, geometric/saddle-point meaning, KKT and alternatives (23–25)"
    ]
  },
  ML: {
    id: "ML", stream: "math", role: "Elective 2", name: "Machine Learning I", shortName: "Machine Learning I",
    examDate: "2026-11-02", totalUnits: 23, unitLabel: "units",
    theme: { cardBg: "#E2C2FF", bannerBg: "#F3E8FF", border: "#C084FC" },
    iconId: "icon-machine-learning",
    units: [
      { u: 1, text: "Probability review: density and distribution functions (1)" },
      { u: 2, text: "Expectation, covariance and Bayesian probabilities (2)" },
      { u: 3, text: "Gaussian distributions: conditional and marginal (3)" },
      { u: 4, text: "Maximum likelihood and Bayesian inference for Gaussians (4)" },
      { u: 5, text: "Decision theory: inference, decision and loss functions (5)" },
      { u: 6, text: "Entropy, relative entropy and mutual information (6)" },
      { u: 7, text: "Maximum likelihood and least squares for regression (7)" },
      { u: 8, text: "Regularised least squares (8)" },
      { u: 9, text: "Bias–variance decomposition (9)" },
      { u: 10, text: "Bayesian linear regression (10)" },
      { u: 11, text: "Parameter and predictive distributions (11)" },
      { u: 12, text: "Bayesian model comparison (12)" },
      { u: 13, text: "Discriminant functions for classification (13)" },
      { u: 14, text: "Least squares, Fisher discriminant and relation between them (14)" },
      { u: 15, text: "The perceptron algorithm (15)" },
      { u: 16, text: "Maximum likelihood classifier (16)" },
      { u: 17, text: "Probabilistic generative models and logistic regression (17)" },
      { u: 18, text: "Bayesian logistic regression (18)" },
      { u: 19, text: "Feed-forward neural networks (19)" },
      { u: 20, text: "Network training and gradient descent optimisation (20)" },
      { u: 21, text: "Analysis of error backpropagation (21)" },
      { u: 22, text: "Hessian matrix and diagonal approximation (22)" },
      { u: 23, text: "Regularisation in neural networks (23)" }
    ],
    revisionBullets: [
      "Full revision: Bayesian probabilities, conditional/marginal Gaussians, decision theory and entropy (1–6)",
      "Full revision: Least squares, regularisation, bias–variance decomposition and Bayesian regression (7–12)",
      "Full revision: Fisher discriminant, perceptron, generative models and logistic regression (13–18)",
      "Full revision: Feed-forward neural networks, backpropagation, Hessian and regularisation (19–23)"
    ]
  },
  SEC_MAT: {
    id: "SEC_MAT", stream: "sec", role: "SEC", name: "LaTeX", shortName: "SEC (LaTeX)",
    examDate: "2026-11-03", totalUnits: 19, unitLabel: "units",
    theme: { cardBg: "#FFC6D0", bannerBg: "#FFE4E8", border: "#FDA4AF" },
    iconId: "icon-sec-latex",
    units: [
      { u: 1, text: "LaTeX basics, commands, environments and preamble (1)" },
      { u: 2, text: "Document classes, title pages and sectioning (2)" },
      { u: 3, text: "Bibliographic databases with BibTeX (3)" },
      { u: 4, text: "Table of contents and index generation (4)" },
      { u: 5, text: "Displayed text: quotes and list environments (5)" },
      { u: 6, text: "Rows, columns and multicolumn layouts (6)" },
      { u: 7, text: "Typesetting tables with tabular (7)" },
      { u: 8, text: "Basic mathematical equations, fractions and roots (8)" },
      { u: 9, text: "Groups of equations (align, gather) and numbering (9)" },
      { u: 10, text: "Matrices, dots and auto-sizing delimiters (10)" },
      { u: 11, text: "Mathematical operators, symbols and Greek letters (11)" },
      { u: 12, text: "Theorems, lemmas and proofs (AMS package) (12)" },
      { u: 13, text: "Boxes, parboxes and minipages (13)" },
      { u: 14, text: "Floating images and figure environments (14)" },
      { u: 15, text: "Labels and cross-references (15)" },
      { u: 16, text: "Footnotes and marginal notes (16)" },
      { u: 17, text: "Custom commands and environments (17)" },
      { u: 18, text: "Presentations using the Beamer class (18)" },
      { u: 19, text: "Complete academic document workflow (19)" }
    ],
    revisionBullets: [
      "Full revision: Basics, document classes, BibTeX bibliographic database, TOC and index (1–4)",
      "Full revision: Displayed text, lists, rows, columns and tabular tables (5–7)",
      "Full revision: Mathematical equations, align numbering, matrices, delimiters and Greek letters (8–11)",
      "Full revision: AMS theorems, boxes, floating images, cross-references, footnotes and Beamer (12–19)"
    ]
  },
  SEC_OTH: {
    id: "SEC_OTH", stream: "sec", role: "SEC", name: "Skill Enhancement Course", shortName: "SEC",
    examDate: "2026-11-03", totalUnits: 19, unitLabel: "units",
    theme: { cardBg: "#FFC6D0", bannerBg: "#FFE4E8", border: "#FDA4AF" },
    iconId: "icon-sec-latex",
    units: Array.from({ length: 19 }, (_, i) => ({
      u: i + 1,
      text: `Module ${i < 5 ? 'I' : i < 10 ? 'II' : i < 16 ? 'III' : 'IV'} – Core Topic & Practical Application (Unit ${i + 1})`
    })),
    revisionBullets: [
      "Full revision: Module I – Fundamental concepts, core syntax and hands-on exercises (1–5)",
      "Full revision: Module II – Structured data, formatting, cleaning and grouping operations (6–10)",
      "Full revision: Module III – Visualisation, notation, matrices and styling (11–16)",
      "Full revision: Module IV – File formats, cross-references, notebooks and presentations (17–19)"
    ]
  }
};

export const SYLLABUS_HOURS_MAP = {
  // Physics Honours
  ED:      [0.5, 0.5, 0.75, 0.5, 0.75,  0.75, 1, 1.25,  0.5, 0.25, 0.25, 0.5, 0.25, 0.25,  0.5, 0.5, 0.5, 0.5, 0.25, 0.5, 0.25, 0.25],
  OPT:     [0.5, 0.5, 0.5, 0.5,  0.25, 0.25, 0.75, 0.5, 0.75, 0.75, 0.75,  0.5, 0.5, 0.5, 0.5, 0.5,  0.25, 0.5, 0.25, 0.5, 0.5, 0.75],
  QM:      [0.25, 0.5, 0.25, 0.25, 0.25,  0.75, 0.75, 0.5, 0.25, 0.5, 0.5,  0.75, 0.5, 0.5, 0.25, 0.25, 0.25, 0.5, 0.75, 1, 0.25,  1.5, 0.25, 0.25, 0.25],
  SSP:     [0.75, 0.75, 0.75, 0.75, 0.75,  0.25, 0.5, 0.5, 0.25, 0.75, 0.25,  0.5, 0.5, 0.5, 0.5, 0.5,  0.25, 1, 0.5, 0.5, 0.5, 0.5],
  MS:      [0.25, 0.5, 0.5, 0.75, 0.5,  0.75, 0.5, 0.75, 0.5,  0.75, 0.75, 0.5, 0.5, 1, 0.75, 0.5, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25],
  SEC_PHY: [2, 2, 2, 1, 2,  1, 2, 3, 2, 4,  2, 2, 1, 1, 2, 1,  2, 2, 1],

  // Mathematics Honours
  RA:      [0.5, 0.625, 0.625, 0.625, 0.625, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.438, 0.438, 0.438, 0.438],
  AA:      [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.575, 0.575, 0.575, 0.575, 0.6, 0.6, 0.625, 0.625, 0.625, 0.625, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  CA:      [0.65, 0.65, 0.65, 0.65, 0.65, 0.6, 0.6, 0.6, 0.6, 0.6, 0.45, 0.475, 0.475, 0.475, 0.475, 0.475, 0.475, 0.45, 0.5, 0.5, 0.5, 0.5],
  CO:      [0.312, 0.312, 0.312, 0.312, 0.312, 0.312, 0.312, 0.312, 0.375, 0.375, 0.375, 0.4, 0.4, 0.4, 0.4, 0.375, 0.4, 0.6, 0.6, 0.6, 0.6, 0.6, 1, 1, 1],
  ML:      [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6],
  SEC_MAT: [2, 2, 2, 2,  2, 2, 2,  2, 2, 2, 2,  2, 2, 2, 1.5, 1.5, 1.5, 2, 1.5],
  SEC_OTH: [2, 2, 2, 2, 2,  2, 2, 2, 2, 2,  2, 2, 2, 2, 2, 2,  1.5, 1.5, 1]
};

export const LAST_EXAM = Object.values(SUBJECTS).reduce((m, s) => s.examDate > m ? s.examDate : m, "0000");
