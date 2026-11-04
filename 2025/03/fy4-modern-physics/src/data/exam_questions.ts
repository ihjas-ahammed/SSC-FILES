export interface ExamQuestion {
  id: number;
  moduleId: string;
  section: 'A' | 'B' | 'C';
  marks: number;
  question: string;
  solution: string;
}

export const EXAM_QUESTIONS: ExamQuestion[] =[
  // ---------------------------------------------------------
  // MODULE 1: Special Theory of Relativity
  // ---------------------------------------------------------
  {
    id: 1, moduleId: 'module-1-modern-physics', section: 'A', marks: 3,
    question: "Explain the principle of Michelson-Moreley experiment.",
    solution: "The Michelson-Morley experiment was designed to detect the relative motion of the Earth through the hypothetical \"luminiferous ether\".\n\n**Principle:** It used an interferometer to split a single beam of light into two perpendicular paths. If the ether existed, the ether wind should cause the light to take slightly different times to complete the two paths due to Galilean velocity addition. Rotating the apparatus should cause a measurable shift in the interference fringes. The experiment yielded a **null result**, proving that the speed of light is constant in all directions."
  },
  {
    id: 2, moduleId: 'module-1-modern-physics', section: 'A', marks: 3,
    question: "Derive the formula for length contraction.",
    solution: "Let a rod of proper length $L_0$ be at rest in frame $S'$. The coordinates of its ends are $x'_1$ and $x'_2$, so $L_0 = x'_2 - x'_1$.\n\nAn observer in $S$ measures the length of the moving rod, $L = x_2 - x_1$, by recording the positions of the endpoints **simultaneously** ($t_1 = t_2 = t$).\n\nUsing the Lorentz transformation $x' = \\gamma(x - vt)$:\n$$x'_2 - x'_1 = \\gamma(x_2 - vt) - \\gamma(x_1 - vt)$$\n$$L_0 = \\gamma(x_2 - x_1) = \\gamma L$$\n\nSolving for $L$:\n$$L = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}$$"
  },
  {
    id: 3, moduleId: 'module-1-modern-physics', section: 'A', marks: 3,
    question: "Obtain the relation connecting the relativistic total energy, momentum and rest energy.",
    solution: "Start with $E = \\gamma mc^2$ and $p = \\gamma mv$.\n\nSquare both:\n$$E^2 = \\gamma^2 m^2 c^4$$\n$$p^2 c^2 = \\gamma^2 m^2 v^2 c^2$$\n\nSubtract the momentum equation from the energy equation:\n$$E^2 - p^2 c^2 = \\gamma^2 m^2 c^4 - \\gamma^2 m^2 v^2 c^2 = \\gamma^2 m^2 c^4 \\left(1 - \\frac{v^2}{c^2}\\right)$$\n\nSince $\\gamma^2 = \\frac{1}{1 - v^2/c^2}$, the term $\\gamma^2 \\left(1 - \\frac{v^2}{c^2}\\right) = 1$. This leaves:\n$$E^2 - p^2 c^2 = m^2 c^4$$\n\nSubstituting $E_0 = mc^2$, we get:\n$$E^2 = (pc)^2 + E_0^2$$"
  },
  {
    id: 4, moduleId: 'module-1-modern-physics', section: 'B', marks: 6,
    question: "A spaceship travels away from Earth at a constant speed of 0.80c. A clock on the spaceship measures an interval of 1.0 hour between two events occurring on the ship.\n(a) What is the time interval between these two events as measured by an observer on Earth?\n(b) If the spaceship is 200 m long according to the crew on board, what is its length as measured by the Earth observer?",
    solution: "**(a) Time Interval (Time Dilation):**\nThe proper time $\\Delta t_0$ is 1.0 hour (measured in the ship's rest frame).\nThe speed $v = 0.80c$. \nLorentz factor $\\gamma = \\frac{1}{\\sqrt{1 - 0.80^2}} = \\frac{1}{\\sqrt{0.36}} = \\frac{1}{0.6} = 1.667$.\nTime measured on Earth: $\\Delta t = \\gamma \\Delta t_0 = 1.667 \\times 1.0 \\text{ h} = 1.667 \\text{ hours}.$\n\n**(b) Length (Length Contraction):**\nThe proper length $L_0$ is 200 m.\nLength measured on Earth: $L = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - v^2/c^2}$.\n$L = 200 \\times 0.6 = 120 \\text{ m}.$"
  },
  {
    id: 5, moduleId: 'module-1-modern-physics', section: 'B', marks: 6,
    question: "Galaxy A is receding from Earth at 0.75c. Galaxy B is receding from Earth in the opposite direction at 0.75c. Determine the velocity of Galaxy A as observed from a station in Galaxy B.",
    solution: "Let Earth be frame $S$. Galaxy B is frame $S'$, moving at $v = -0.75c$ relative to Earth (taking A's direction as positive).\nThe velocity of Galaxy A relative to Earth is $u_x = 0.75c$.\n\nWe need the velocity of Galaxy A relative to Galaxy B, which is $u'_x$.\nUsing the relativistic velocity addition formula:\n$$u'_x = \\frac{u_x - v}{1 - \\frac{u_x v}{c^2}}$$\n\nSubstitute the values:\n$$u'_x = \\frac{0.75c - (-0.75c)}{1 - \\frac{(0.75c)(-0.75c)}{c^2}} = \\frac{1.50c}{1 + 0.5625} = \\frac{1.50c}{1.5625} = 0.96c$$\n\nGalaxy A recedes from Galaxy B at a speed of **0.96c**."
  },
  {
    id: 6, moduleId: 'module-1-modern-physics', section: 'C', marks: 10,
    question: "Obtain the relation connecting the total energy rest energy and kinetic energy in relativity. Hence obtain the relativistic mass-energy relation.",
    solution: "Kinetic energy $K$ is the work $W$ done by a net force $F$ to accelerate a particle from rest to velocity $v$:\n$$K = \\int_0^v v \\, dp$$\nUsing integration by parts and $p = \\gamma mv = \\frac{mv}{\\sqrt{1 - v^2/c^2}}$:\n$$K = \\frac{mv^2}{\\sqrt{1 - v^2/c^2}} - \\int_0^v \\frac{mv}{\\sqrt{1 - v^2/c^2}} dv$$\n\nEvaluating the integral using substitution $u = 1 - v^2/c^2$ gives $-mc^2 \\sqrt{1 - v^2/c^2} \\Big|_0^v = mc^2 - mc^2 \\sqrt{1 - v^2/c^2}$.\n\nSubstitute this back:\n$$K = \\frac{mv^2}{\\sqrt{1 - v^2/c^2}} + mc^2 \\sqrt{1 - v^2/c^2} - mc^2$$\nFinding a common denominator yields:\n$$K = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}} - mc^2$$\n\nThis can be written as $K = \\gamma mc^2 - mc^2$.\n\nWe define **rest energy** as $E_0 = mc^2$, and **total relativistic energy** as $E = \\gamma mc^2$.\nSubstituting these gives:\n$$K = E - E_0 \\implies E = K + E_0$$\n\nThe equation $E = \\gamma mc^2$ is the **relativistic mass-energy relation**, showing that mass and energy are equivalent."
  },

  // ---------------------------------------------------------
  // MODULE 2: Particle-like Properties of EM Radiation
  // ---------------------------------------------------------
  {
    id: 7, moduleId: 'module-2-particle-like-em', section: 'A', marks: 3,
    question: "Explain Bragg's law for x-ray diffraction.",
    solution: "Bragg's law describes the condition for constructive interference of X-rays scattered by the parallel planes of atoms within a crystal lattice. \n\nWhen X-rays hit crystal planes separated by distance $d$ at a glancing angle $\\theta$, the beam reflected from the second plane travels an extra distance of $2d \\sin\\theta$.\n\nFor constructive interference, this path difference must be an integer multiple of the X-ray wavelength $\\lambda$:\n$$2d \\sin\\theta = n\\lambda$$\n*(where $n = 1, 2, 3, \\dots$ is the order of diffraction).*"
  },
  {
    id: 8, moduleId: 'module-2-particle-like-em', section: 'A', marks: 3,
    question: "What is meant by ultraviolet catastrophe?",
    solution: "The **ultraviolet catastrophe** refers to the failure of classical physics (the Rayleigh-Jeans law) to predict the emission spectrum of a blackbody at short wavelengths (high frequencies, like the ultraviolet region).\n\nClassical theory assumed standing waves in a cavity could have any continuous energy, predicting that radiated intensity would approach infinity as the wavelength approached zero ($I \\propto 1/\\lambda^4$). This physically impossible result was resolved by Max Planck's quantum hypothesis."
  },
  {
    id: 9, moduleId: 'module-2-particle-like-em', section: 'B', marks: 6,
    question: "The work function for a particular potassium surface is 2.30 eV.\n(a) Calculate the threshold frequency and the cutoff wavelength for this metal.\n(b) If light of wavelength 350 nm is shone on the surface, what is the maximum kinetic energy of the ejected photoelectrons?\n(c) Determine the stopping potential required to reduce the photoelectric current to zero for the 350 nm light.",
    solution: "**(a) Threshold Frequency and Cutoff Wavelength:**\nWork function $\\phi = 2.30 \\text{ eV}$.\nCutoff wavelength $\\lambda_c = \\frac{hc}{\\phi} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{2.30 \\text{ eV}} = 539.1 \\text{ nm}$.\nThreshold frequency $f_c = \\frac{c}{\\lambda_c} = \\frac{3 \\times 10^8}{539.1 \\times 10^{-9}} = 5.56 \\times 10^{14} \\text{ Hz}$.\n\n**(b) Maximum Kinetic Energy:**\nIncident photon energy $E = \\frac{hc}{\\lambda} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{350 \\text{ nm}} = 3.54 \\text{ eV}$.\n$K_{\\max} = E - \\phi = 3.54 \\text{ eV} - 2.30 \\text{ eV} = 1.24 \\text{ eV}$.\n\n**(c) Stopping Potential:**\n$V_s = \\frac{K_{\\max}}{e} = 1.24 \\text{ V}$."
  },
  {
    id: 10, moduleId: 'module-2-particle-like-em', section: 'B', marks: 6,
    question: "A beam of X-rays of wavelength 0.0827 nm is used to study a crystal. The first-order Bragg reflection is detected at an angle of 15.5° relative to the crystal planes. Find the interplanar spacing of the crystal.",
    solution: "Use Bragg's Law: $2d \\sin\\theta = n\\lambda$\n\nWhere:\n- $n = 1$ (first-order reflection)\n- $\\theta = 15.5^\\circ$\n- $\\lambda = 0.0827 \\text{ nm}$\n\nRearranging to solve for interplanar spacing $d$:\n$$d = \\frac{n\\lambda}{2 \\sin\\theta} = \\frac{(1)(0.0827 \\text{ nm})}{2 \\sin(15.5^\\circ)}$$\n$$d = \\frac{0.0827}{2 \\times 0.2672} = \\frac{0.0827}{0.5344} \\approx 0.155 \\text{ nm}$$"
  },
  {
    id: 11, moduleId: 'module-2-particle-like-em', section: 'C', marks: 10,
    question: "What is meant by Compton effect? Derive the expression for the shift in the wavelength.",
    solution: "**The Compton Effect:**\nIt is the scattering of high-energy photons (X-rays) by loosely bound electrons. The scattered photon has less energy and a **longer wavelength** than the incident photon, proving light behaves as a particle carrying momentum $p = h/\\lambda$.\n\n**Derivation:**\nIncident photon: $E = hc/\\lambda$, $p = h/\\lambda$.\nScattered photon (angle $\\theta$): $E' = hc/\\lambda'$, $p' = h/\\lambda'$.\nElectron (recoil angle $\\phi$): momentum $p_e$.\n\n**1. Conservation of Momentum:**\n- x-axis: $p = p' \\cos\\theta + p_e \\cos\\phi \\implies p_e \\cos\\phi = p - p' \\cos\\theta$\n- y-axis: $0 = p' \\sin\\theta - p_e \\sin\\phi \\implies p_e \\sin\\phi = p' \\sin\\theta$\nSquare and add to eliminate $\\phi$:\n$$p_e^2 = p^2 + p'^2 - 2pp' \\cos\\theta \\quad \\text{--- (1)}$$\n\n**2. Conservation of Energy:**\n$$E + m_e c^2 = E' + E_e \\implies E_e = E - E' + m_e c^2$$\nSquare and use $E_e^2 = (p_e c)^2 + (m_e c^2)^2$:\n$$p_e^2 c^2 = E^2 + E'^2 - 2EE' + 2(E - E')m_e c^2 \\quad \\text{--- (2)}$$\n\n**3. Combining:**\nMultiply (1) by $c^2$ and equate to (2). Substituting $E=pc$ and $E'=p'c$:\n$$-2EE' \\cos\\theta = -2EE' + 2(E - E')m_e c^2$$\nDivide by $2EE'm_e c^2$:\n$$\\frac{E - E'}{EE'} = \\frac{1 - \\cos\\theta}{m_e c^2} \\implies \\frac{1}{E'} - \\frac{1}{E} = \\frac{1 - \\cos\\theta}{m_e c^2}$$\nSubstitute $E = hc/\\lambda$ and $E' = hc/\\lambda'$:\n$$\\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos\\theta)$$\nThis is the expression for the Compton wavelength shift."
  },

  // ---------------------------------------------------------
  // MODULE 3: Wave-like Properties of Particles
  // ---------------------------------------------------------
  {
    id: 12, moduleId: 'module-3-wave-like-particles', section: 'A', marks: 3,
    question: "State de Broglie's Hypothesis.",
    solution: "De Broglie hypothesized that any material particle moving with momentum $p$ has an associated **matter wave**. The wavelength $\\lambda$ of this wave is given by:\n$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$\nWhere $h$ is Planck's constant. This implies that matter possesses a dual wave-particle nature, just like light."
  },
  {
    id: 13, moduleId: 'module-3-wave-like-particles', section: 'A', marks: 3,
    question: "What is a Wave Packet?",
    solution: "A wave packet is a wave disturbance confined to a finite region of space ($\\Delta x$). It is constructed by superimposing (adding together) many continuous pure sine waves of slightly different wavelengths and frequencies. The wave packet acts as the quantum mechanical representation of a localized particle, moving at the group velocity."
  },
  {
    id: 14, moduleId: 'module-3-wave-like-particles', section: 'B', marks: 6,
    question: "Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 54 V.",
    solution: "The kinetic energy $K$ of the electron is $54 \\text{ eV}$.\nUsing the formula $\\lambda = \\frac{hc}{\\sqrt{2mc^2 K}}$:\nWe know $hc = 1240 \\text{ eV}\\cdot\\text{nm}$ and $mc^2 = 511,000 \\text{ eV}$ for an electron.\n$$\\lambda = \\frac{1240}{\\sqrt{2(511,000)(54)}} = \\frac{1240}{\\sqrt{55,188,000}}$$\n$$\\lambda = \\frac{1240}{7428} \\approx 0.167 \\text{ nm}$$\nThis precisely matches the wavelength observed in the Davisson-Germer diffraction experiment."
  },
  {
    id: 15, moduleId: 'module-3-wave-like-particles', section: 'B', marks: 6,
    question: "Explain the Davisson-Germer experiment and its significance.",
    solution: "**The Experiment:** Davisson and Germer accelerated electrons through a known voltage and fired them at a single crystal of nickel. They measured the intensity of scattered electrons at various angles.\n\n**Observation:** They observed a sharp maximum in electron intensity at an angle of 50° for an accelerating voltage of 54 V.\n\n**Significance:** This sharp peak was the unmistakable signature of constructive interference (diffraction). It provided the first direct experimental proof of de Broglie's matter waves, validating the wave nature of electrons."
  },
  {
    id: 16, moduleId: 'module-3-wave-like-particles', section: 'C', marks: 10,
    question: "Derive the Heisenberg uncertainty principle for position and momentum from the properties of classical wave packets.",
    solution: "To represent a localized particle, we construct a **wave packet** of length $\\Delta x$. If the packet contains $N$ cycles, $\\Delta x \\approx N\\lambda$.\n\nThe uncertainty in finding the start/end of the packet is a fraction $\\epsilon$ of a wavelength, so the wavelength uncertainty is $\\Delta \\lambda \\sim \\epsilon\\lambda / N$.\nMultiplying these gives: $\\Delta x \\Delta \\lambda \\sim \\epsilon \\lambda^2$.\n\nUsing wave number $k = 2\\pi/\\lambda$, the differential is $dk = -(2\\pi/\\lambda^2) d\\lambda$. Thus in magnitudes, $\\Delta k \\approx (2\\pi/\\lambda^2) \\Delta \\lambda$.\nSubstitute $\\Delta \\lambda \\approx (\\lambda^2/2\\pi) \\Delta k$:\n$$\\Delta x \\left( \\frac{\\lambda^2}{2\\pi} \\Delta k \\right) \\sim \\epsilon \\lambda^2 \\implies \\Delta x \\Delta k \\sim 2\\pi \\epsilon \\sim 1$$\n\nNow apply de Broglie's relation: $p = h/\\lambda = \\hbar k$.\nThe momentum uncertainty is $\\Delta p = \\hbar \\Delta k$.\nSubstitute $\\Delta k = \\Delta p / \\hbar$ into $\\Delta x \\Delta k \\sim 1$:\n$$\\Delta x \\frac{\\Delta p}{\\hbar} \\sim 1 \\implies \\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$$\nThis is the Heisenberg uncertainty principle, arising intrinsically from wave mechanics."
  },

  // ---------------------------------------------------------
  // MODULE 4: Rutherford-Bohr Model
  // ---------------------------------------------------------
  {
    id: 17, moduleId: 'module-4-rutherford-bohr', section: 'A', marks: 3,
    question: "What is the distance of closest approach?",
    solution: "It is the minimum distance a charged projectile (like an alpha particle) reaches when fired head-on at an atomic nucleus. At this point, the particle's initial kinetic energy is entirely converted into electrostatic potential energy ($K = U$).\n$$d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}$$\nIt provides an upper limit for the physical size of the nucleus."
  },
  {
    id: 18, moduleId: 'module-4-rutherford-bohr', section: 'A', marks: 3,
    question: "State Bohr's postulates for the hydrogen atom.",
    solution: "**1. Stationary States:** The electron can exist in specific circular orbits without radiating energy. In these states, orbital angular momentum is quantized: $L = mvr = n\\hbar$.\n**2. Quantum Jumps:** The electron emits or absorbs a photon ONLY when jumping between these stationary states. The photon's energy equals the difference: $hf = |E_i - E_f|$."
  },
  {
    id: 19, moduleId: 'module-4-rutherford-bohr', section: 'B', marks: 6,
    question: "Find the distance of closest approach of an 8.0-MeV alpha particle incident on a gold foil.",
    solution: "Formula: $d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}$\nConstants: Alpha particle $z = 2$, Gold $Z = 79$, $K = 8.0 \\text{ MeV}$.\nCoulomb constant $\\frac{e^2}{4\\pi\\epsilon_0} = 1.44 \\text{ MeV}\\cdot\\text{fm}$.\n\nSubstitute the values:\n$$d = \\frac{(2)(79)}{8.0 \\text{ MeV}} \\times 1.44 \\text{ MeV}\\cdot\\text{fm}$$\n$$d = \\frac{158}{8.0} \\times 1.44 = 19.75 \\times 1.44 = 28.44 \\text{ fm}$$\n\nThe distance of closest approach is **28.44 fm**."
  },
  {
    id: 20, moduleId: 'module-4-rutherford-bohr', section: 'B', marks: 6,
    question: "Calculate the longest wavelength of the Balmer series of hydrogen.",
    solution: "The Rydberg formula is $\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$.\nFor the Balmer series, $n_f = 2$.\nThe longest wavelength corresponds to the smallest energy jump, which is from $n_i = 3$.\n\n$$\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{2^2} - \\frac{1}{3^2} \\right) = R_\\infty \\left( \\frac{1}{4} - \\frac{1}{9} \\right) = R_\\infty \\left( \\frac{5}{36} \\right)$$\n\n$$\\lambda = \\frac{36}{5 R_\\infty} = \\frac{36}{5(1.097 \\times 10^7 \\text{ m}^{-1})} \\approx 656.1 \\text{ nm}$$\nThis is the red H-alpha line."
  },
  {
    id: 21, moduleId: 'module-4-rutherford-bohr', section: 'C', marks: 10,
    question: "Discuss Rutherford's alpha scattering experiment and explain how it led to the nuclear model of the atom.",
    solution: "**The Experiment:** Geiger and Marsden, under Rutherford, bombarded a thin gold foil with high-energy alpha particles and measured the scattering angles.\n\n**Classical Expectation:** According to the Thomson 'plum pudding' model, the positive charge and mass were spread uniformly across the atom. An alpha particle should easily plow through with only tiny deflections ($\\sim 1^\\circ$).\n\n**Observation:** While most particles passed straight through, about 1 in 10,000 were deflected at massive angles, some even bouncing straight backward ($>90^\\circ$).\n\n**Conclusion (The Nuclear Model):**\nRutherford concluded the Thomson model was impossible. The only way a heavy, fast alpha particle could bounce backward is if it hit something extremely dense and highly charged. He proposed:\n1. All positive charge and almost all mass is concentrated in a tiny central **nucleus** ($\\sim 10^{-14}$ m).\n2. Electrons orbit at a vast distance ($\\sim 10^{-10}$ m), leaving the atom mostly empty space.\nThis perfectly explained why most particles passed unhindered, while a few experienced extreme Coulomb repulsion."
  }
];