export interface ExamQuestion {
  id: number;
  section: 'A' | 'B' | 'C';
  marks: number;
  question: string;
  solution: string;
}

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // ---------------------------------------------------------
  // SECTION A (3 Marks Each)
  // ---------------------------------------------------------
  {
    id: 1,
    section: 'A',
    marks: 3,
    question: "Derive the formula for length contraction.",
    solution: "Let a rod of proper length $L_0$ be at rest in frame $S'$. The coordinates of its ends are $x'_1$ and $x'_2$, so $L_0 = x'_2 - x'_1$.\n\nFrame $S'$ moves at a constant velocity $v$ relative to frame $S$. An observer in $S$ measures the length of the moving rod, $L = x_2 - x_1$, by recording the positions of the endpoints **simultaneously** in their frame (so $t_1 = t_2 = t$).\n\nUsing the Lorentz transformation for position, $x' = \\gamma(x - vt)$:\n$$x'_2 - x'_1 = \\gamma(x_2 - vt) - \\gamma(x_1 - vt)$$\n$$L_0 = \\gamma(x_2 - x_1) = \\gamma L$$\n\nSolving for $L$:\n$$L = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}$$\nSince $\\gamma > 1$, the measured length $L$ is less than the proper length $L_0$. This is length contraction."
  },
  {
    id: 2,
    section: 'A',
    marks: 3,
    question: "An electron is moving with a kinetic energy of 0.923 MeV. What is its speed?",
    solution: "The rest energy of an electron is $E_0 = mc^2 = 0.511$ MeV.\n\nThe total relativistic energy $E$ is the sum of kinetic and rest energy:\n$$E = K + E_0 = 0.923 \\text{ MeV} + 0.511 \\text{ MeV} = 1.434 \\text{ MeV}$$\n\nWe also know that $E = \\gamma mc^2 = \\gamma E_0$. Solving for $\\gamma$:\n$$\\gamma = \\frac{E}{E_0} = \\frac{1.434}{0.511} \\approx 2.806$$\n\nUsing the definition of $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$:\n$$1 - \\frac{v^2}{c^2} = \\frac{1}{\\gamma^2} = \\frac{1}{(2.806)^2} \\approx 0.127$$\n$$\\frac{v^2}{c^2} = 1 - 0.127 = 0.873$$\n$$v = \\sqrt{0.873}c \\approx 0.934c$$"
  },
  {
    id: 3,
    section: 'A',
    marks: 3,
    question: "Explain the principle of Michelson-Morley experiment.",
    solution: "The Michelson-Morley experiment was designed to detect the relative motion of the Earth through the hypothetical \"luminiferous ether\" (the supposed stationary medium for light propagation).\n\n**Principle:** It used an interferometer to split a single beam of light into two perpendicular paths. One path was parallel to the Earth's supposed motion through the ether, and the other was perpendicular. According to Galilean velocity addition, the ether wind should cause the light to take slightly different times to complete the two paths. \n\nWhen the beams recombined, they formed an interference pattern. Rotating the apparatus by 90° should have caused a measurable shift in the interference fringes due to the changing travel times. The experiment yielded a **null result** (no shift), proving that the speed of light is constant in all directions and that the ether does not exist."
  },
  {
    id: 4,
    section: 'A',
    marks: 3,
    question: "Give the expressions for relativistic momentum and relativistic kinetic energy.",
    solution: "**Relativistic Momentum ($\\mathbf{p}$):**\n$$\\mathbf{p} = \\gamma m \\mathbf{v} = \\frac{m \\mathbf{v}}{\\sqrt{1 - v^2/c^2}}$$\n\n**Relativistic Kinetic Energy ($K$):**\n$$K = E - E_0 = \\gamma mc^2 - mc^2 = mc^2 \\left( \\frac{1}{\\sqrt{1 - v^2/c^2}} - 1 \\right)$$\n\n*(Where $m$ is the rest mass, $v$ is the velocity, $c$ is the speed of light, and $\\gamma$ is the Lorentz factor).*"
  },
  {
    id: 5,
    section: 'A',
    marks: 3,
    question: "Obtain the relation connecting the relativistic total energy, momentum and rest energy.",
    solution: "Start with the equations for total energy and momentum:\n$$E = \\gamma mc^2 \\quad \\text{and} \\quad p = \\gamma mv$$\n\nSquare both equations:\n$$E^2 = \\gamma^2 m^2 c^4$$\n$$p^2 c^2 = \\gamma^2 m^2 v^2 c^2$$\n\nSubtract the momentum equation from the energy equation:\n$$E^2 - p^2 c^2 = \\gamma^2 m^2 c^4 - \\gamma^2 m^2 v^2 c^2 = \\gamma^2 m^2 c^4 \\left(1 - \\frac{v^2}{c^2}\\right)$$\n\nSince $\\gamma^2 = \\frac{1}{1 - v^2/c^2}$, the term $\\gamma^2 \\left(1 - \\frac{v^2}{c^2}\\right) = 1$. This leaves:\n$$E^2 - p^2 c^2 = m^2 c^4$$\n\nSubstituting the rest energy $E_0 = mc^2$, we get the final relation:\n$$E^2 = (pc)^2 + E_0^2$$"
  },
  {
    id: 6,
    section: 'A',
    marks: 3,
    question: "Explain Bragg's law for x-ray diffraction.",
    solution: "Bragg's law describes the condition for constructive interference of X-rays scattered by the parallel planes of atoms within a crystal lattice. \n\nWhen X-rays hit crystal planes separated by a distance $d$ at a glancing angle $\\theta$ (measured from the surface of the plane, not the normal), the beam reflected from the second plane travels an extra distance of $2d \\sin\\theta$ compared to the beam reflected from the first plane.\n\nFor constructive interference to occur (producing a bright diffraction spot), this path difference must be an integer multiple of the X-ray wavelength $\\lambda$:\n$$2d \\sin\\theta = n\\lambda$$\n*(where $n = 1, 2, 3, \\dots$ is the order of diffraction).*"
  },
  {
    id: 7,
    section: 'A',
    marks: 3,
    question: "What is meant by work function of a photoelectric material?",
    solution: "The **work function** ($\\phi$ or $W$) of a material is the minimum amount of energy required to completely remove an electron from the surface of that material. It is a characteristic property of the specific metal.\n\nIn Einstein's photoelectric equation ($K_{\\max} = hf - \\phi$), it represents the \"binding energy\" cost. An incident photon must have an energy ($hf$) at least equal to the work function for the photoelectric effect to occur. Any photon energy in excess of the work function is converted into the kinetic energy of the ejected photoelectron."
  },
  {
    id: 8,
    section: 'A',
    marks: 3,
    question: "What is meant by ultraviolet catastrophe?",
    solution: "The **ultraviolet catastrophe** refers to the catastrophic failure of classical physics (specifically the Rayleigh-Jeans law) to predict the emission spectrum of a blackbody at short wavelengths (high frequencies, like the ultraviolet region).\n\nClassical thermodynamics assumed that standing waves in a cavity could have any continuous energy value ($E_{avg} = kT$). This led to the prediction that the radiated intensity would approach infinity as the wavelength approached zero ($I \\propto 1/\\lambda^4$). This physically impossible result was resolved by Max Planck's quantum hypothesis, which restricted energy to discrete bundles ($E = nhf$)."
  },
  {
    id: 9,
    section: 'A',
    marks: 3,
    question: "Explain Bremsstrahlung for x-ray production.",
    solution: "**Bremsstrahlung** (German for \"braking radiation\") is the electromagnetic radiation produced when a high-speed charged particle, such as an electron, is rapidly decelerated or deflected by the strong electric field of an atomic nucleus.\n\nAs the electron loses kinetic energy during this scattering process, the lost energy is emitted as an X-ray photon ($hf = K_{\\text{initial}} - K_{\\text{final}}$). Because the electrons can lose varying amounts of energy in these collisions, Bremsstrahlung produces a *continuous* X-ray spectrum, up to a sharp cutoff wavelength ($\\lambda_{\\min}$) corresponding to an electron losing 100% of its kinetic energy in a single encounter."
  },
  {
    id: 10,
    section: 'A',
    marks: 3,
    question: "Light of wavelength 304.2 nm illuminates a metal surface whose cutoff wavelength is 352.8 nm. What is the stopping potential?",
    solution: "First, find the work function $\\phi$ using the cutoff wavelength $\\lambda_c = 352.8$ nm:\n$$\\phi = \\frac{hc}{\\lambda_c} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{352.8 \\text{ nm}} \\approx 3.515 \\text{ eV}$$\n\nNext, find the energy $E$ of the incident photons ($\\lambda = 304.2$ nm):\n$$E = \\frac{hc}{\\lambda} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{304.2 \\text{ nm}} \\approx 4.076 \\text{ eV}$$\n\nThe maximum kinetic energy of the photoelectrons is:\n$$K_{\\max} = E - \\phi = 4.076 \\text{ eV} - 3.515 \\text{ eV} = 0.561 \\text{ eV}$$\n\nSince $K_{\\max} = e V_s$, the stopping potential $V_s$ is simply the kinetic energy divided by the elementary charge $e$:\n$$V_s = 0.561 \\text{ V}$$"
  },

  // ---------------------------------------------------------
  // SECTION B (6 Marks Each)
  // ---------------------------------------------------------
  {
    id: 11,
    section: 'B',
    marks: 6,
    question: "Obtain the relativistic velocity transformation equations.",
    solution: "Start with the Lorentz transformation equations relating frame $S$ to frame $S'$ (where $S'$ moves at velocity $v$ along the $+x$ axis relative to $S$):\n$$x = \\gamma(x' + vt')$$\n$$y = y'$$\n$$z = z'$$- \n$$t = \\gamma\\left(t' + \\frac{vx'}{c^2}\\right)$$\n\nTake the differentials of these equations to represent small changes in position and time:\n$$dx = \\gamma(dx' + v dt')$$\n$$dy = dy'$$\n$$dz = dz'$$\n$$dt = \\gamma\\left(dt' + \\frac{v dx'}{c^2}\\right)$$\n\nThe velocity components in frame $S$ are defined as $u_x = \\frac{dx}{dt}$, $u_y = \\frac{dy}{dt}$, and $u_z = \\frac{dz}{dt}$.\n\n**For the x-component:**\nDivide $dx$ by $dt$:\n$$u_x = \\frac{\\gamma(dx' + v dt')}{\\gamma(dt' + \\frac{v dx'}{c^2})}$$\nThe $\\gamma$ factors cancel. Divide the numerator and denominator by $dt'$:\n$$u_x = \\frac{\\frac{dx'}{dt'} + v}{1 + \\frac{v}{c^2} \\frac{dx'}{dt'}}$$\nSince $u'_x = \\frac{dx'}{dt'}$ (the velocity in $S'$), we get:\n$$u_x = \\frac{u'_x + v}{1 + \\frac{u'_x v}{c^2}}$$\n\n**For the y-component:**\n$$u_y = \\frac{dy}{dt} = \\frac{dy'}{\\gamma(dt' + \\frac{v dx'}{c^2})}$$\nDivide numerator and denominator by $dt'$:\n$$u_y = \\frac{\\frac{dy'}{dt'}}{\\gamma\\left(1 + \\frac{v}{c^2} \\frac{dx'}{dt'}\\right)} = \\frac{u'_y}{\\gamma\\left(1 + \\frac{u'_x v}{c^2}\\right)}$$\n\n**For the z-component:**\nBy identical logic to the y-component:\n$$u_z = \\frac{u'_z}{\\gamma\\left(1 + \\frac{u'_x v}{c^2}\\right)}$$"
  },
  {
    id: 12,
    section: 'B',
    marks: 6,
    question: "The proper lifetime of a certain particle is 120.0 ns. (a) How long does it live in the laboratory if it moves at v = 0.950c? (b) How far does it travel in the laboratory during that time? (c) What is the distance traveled in the laboratory according to an observer moving with the particle?",
    solution: "**(a) Lifetime in the laboratory:**\nThe proper time (measured in the particle's rest frame) is $\\Delta t_0 = 120.0$ ns. The particle moves at $v = 0.950c$.\nFirst, calculate the Lorentz factor $\\gamma$:\n$$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = \\frac{1}{\\sqrt{1 - 0.950^2}} = \\frac{1}{\\sqrt{1 - 0.9025}} = \\frac{1}{\\sqrt{0.0975}} \\approx 3.2026$$\nUsing the time dilation formula, the lifetime in the lab is:\n$$\\Delta t = \\gamma \\Delta t_0 = 3.2026 \\times 120.0 \\text{ ns} = 384.3 \\text{ ns}$$\n\n**(b) Distance traveled in the laboratory:**\nUsing the lab frame time $\\Delta t$ and the velocity $v$:\n$$d = v \\Delta t = (0.950 \\times 3 \\times 10^8 \\text{ m/s}) \\times (384.3 \\times 10^{-9} \\text{ s})$$\n$$d = (2.85 \\times 10^8) \\times (384.3 \\times 10^{-9}) \\approx 109.5 \\text{ m}$$\n\n**(c) Distance traveled according to an observer moving with the particle:**\nTo an observer moving *with* the particle, the particle is at rest, so it travels **0 m** relative to them.\n\n*(Note: If the question implies \"how long is the laboratory path as measured by the particle\", we use length contraction. The proper length of the path is $L_0 = 109.5$ m. The particle sees the lab moving, so the path is contracted: $L = L_0 / \\gamma = 109.5 / 3.2026 = 34.2$ m. This also matches $d' = v \\Delta t_0 = (2.85 \\times 10^8)(120 \\times 10^{-9}) = 34.2$ m).* Both interpretations yield consistent relativistic physics, but strictly speaking, the particle travels 0 distance relative to itself."
  },
  {
    id: 13,
    section: 'B',
    marks: 6,
    question: "Rocket A leaves a space station with a speed of 0.811c. Later, rocket B leaves in the same direction with a speed of 0.665c. What is the velocity of rocket A as observed from rocket B?",
    solution: "Let the space station be the stationary frame $S$.\nLet Rocket B be the moving frame $S'$, which moves at velocity $v = +0.665c$ relative to $S$.\nRocket A moves at velocity $u_x = +0.811c$ relative to $S$.\n\nWe need to find the velocity of Rocket A relative to Rocket B, which is $u'_x$.\n\nWe use the inverse relativistic velocity transformation formula:\n$$u'_x = \\frac{u_x - v}{1 - \\frac{u_x v}{c^2}}$$\n\nSubstitute the known values:\n$$u'_x = \\frac{0.811c - 0.665c}{1 - (0.811)(0.665)}$$\n$$u'_x = \\frac{0.146c}{1 - 0.539315}$$\n$$u'_x = \\frac{0.146c}{0.460685} \\approx 0.317c$$\n\nThe velocity of Rocket A as observed from Rocket B is **0.317c** in the forward direction."
  },
  {
    id: 14,
    section: 'B',
    marks: 6,
    question: "Two events occur at locations separated by a distance of 49.5 m and by a time interval of 0.528 $\\mu$s, according to observer O. Observer O' is in motion away from O with a speed of 0.685c in the x direction. According to O', what are the spatial and time separations of the events?",
    solution: "Let frame $S$ be Observer O, and frame $S'$ be Observer O'.\nIn frame $S$: $\\Delta x = 49.5$ m, $\\Delta t = 0.528 \\times 10^{-6}$ s.\nVelocity of $S'$ relative to $S$: $v = 0.685c = 0.685 \\times 3 \\times 10^8 = 2.055 \\times 10^8$ m/s.\n\nFirst, calculate the Lorentz factor $\\gamma$:\n$$\\gamma = \\frac{1}{\\sqrt{1 - 0.685^2}} = \\frac{1}{\\sqrt{1 - 0.4692}} = \\frac{1}{\\sqrt{0.5308}} \\approx 1.3726$$\n\n**Spatial Separation in O' ($\\Delta x'$):**\nUsing the Lorentz transformation for intervals:\n$$\\Delta x' = \\gamma(\\Delta x - v \\Delta t)$$\n$$\\Delta x' = 1.3726 \\times [49.5 - (2.055 \\times 10^8)(0.528 \\times 10^{-6})]$$\n$$\\Delta x' = 1.3726 \\times [49.5 - 108.5] = 1.3726 \\times (-59.0) \\approx -81.0 \\text{ m}$$\nThe spatial separation is **81.0 m**.\n\n**Time Separation in O' ($\\Delta t'$):**\n$$\\Delta t' = \\gamma\\left(\\Delta t - \\frac{v \\Delta x}{c^2}\\right)$$\n$$\\Delta t' = 1.3726 \\times \\left[0.528 \\times 10^{-6} - \\frac{(0.685c)(49.5)}{c^2}\\right]$$\n$$\\Delta t' = 1.3726 \\times \\left[0.528 \\times 10^{-6} - \\frac{(0.685)(49.5)}{3 \\times 10^8}\\right]$$\n$$\\Delta t' = 1.3726 \\times [0.528 \\times 10^{-6} - 0.113 \\times 10^{-6}]$$\n$$\\Delta t' = 1.3726 \\times [0.415 \\times 10^{-6}] \\approx 0.570 \\times 10^{-6} \\text{ s} = 0.570 \\ \\mu\\text{s}$$\nThe time separation is **0.570 $\\mu$s**."
  },
  {
    id: 15,
    section: 'B',
    marks: 6,
    question: "A single crystal of table salt (NaCl) is irradiated with a beam of X rays of wavelength 0.250 nm, and the first Bragg reflection is observed at an angle of 26.3°. What is the atomic spacing of NaCl?",
    solution: "We use Bragg's Law for X-ray diffraction:\n$$2d \\sin\\theta = n\\lambda$$\n\nWhere:\n- $d$ is the atomic spacing (distance between crystal planes).\n- $\\theta = 26.3^\\circ$ is the glancing angle of incidence.\n- $n = 1$ (since it is the first Bragg reflection).\n- $\\lambda = 0.250$ nm is the wavelength of the X-rays.\n\nRearrange the formula to solve for $d$:\n$$d = \\frac{n\\lambda}{2 \\sin\\theta}$$\n\nSubstitute the given values:\n$$d = \\frac{(1)(0.250 \\text{ nm})}{2 \\sin(26.3^\\circ)}$$\n\nCalculate $\\sin(26.3^\\circ)$:\n$$\\sin(26.3^\\circ) \\approx 0.443$$\n\nCalculate $d$:\n$$d = \\frac{0.250}{2 \\times 0.443} = \\frac{0.250}{0.886} \\approx 0.282 \\text{ nm}$$\n\nThe atomic spacing of NaCl is **0.282 nm**."
  },
  {
    id: 16,
    section: 'B',
    marks: 6,
    question: "a) What are the energy and momentum of a photon of red light of wavelength 650 nm? (b) What is the wavelength of a photon of energy 2.40 eV?",
    solution: "**Part (a): Energy and momentum of a 650 nm photon**\nUsing the convenient constant $hc = 1240 \\text{ eV}\\cdot\\text{nm}$:\nEnergy $E = \\frac{hc}{\\lambda} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{650 \\text{ nm}} \\approx 1.91 \\text{ eV}$.\n\nFor a photon, $E = pc$, so momentum $p = \\frac{E}{c} = 1.91 \\text{ eV}/c$.\n\n*(Alternatively, in SI units:)*\n$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s})(3 \\times 10^8 \\text{ m/s})}{650 \\times 10^{-9} \\text{ m}} = 3.06 \\times 10^{-19} \\text{ J}$.\n$p = \\frac{h}{\\lambda} = \\frac{6.626 \\times 10^{-34}}{650 \\times 10^{-9}} = 1.02 \\times 10^{-27} \\text{ kg}\\cdot\\text{m/s}$.\n\n**Part (b): Wavelength of a 2.40 eV photon**\nRearrange the energy equation to solve for wavelength:\n$$\\lambda = \\frac{hc}{E}$$\n$$\\lambda = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{2.40 \\text{ eV}} \\approx 516.7 \\text{ nm}$$"
  },
  {
    id: 17,
    section: 'B',
    marks: 6,
    question: "The universe is filled with thermal radiation, which has a blackbody spectrum at an effective temperature of 2.7 K. What is the peak wavelength of this radiation? What is the energy (in eV) of quanta at the peak wavelength? In what region of the electromagnetic spectrum is this peak wavelength?",
    solution: "**1. Peak Wavelength:**\nUse Wien's Displacement Law: $\\lambda_{\\max} T = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$.\n$$\\lambda_{\\max} = \\frac{2.898 \\times 10^{-3}}{T} = \\frac{2.898 \\times 10^{-3}}{2.7 \\text{ K}} \\approx 1.07 \\times 10^{-3} \\text{ m} = 1.07 \\text{ mm}$$\n\n**2. Energy of Quanta:**\nUse $E = \\frac{hc}{\\lambda}$ with $hc = 1240 \\text{ eV}\\cdot\\text{nm}$.\nConvert $\\lambda_{\\max}$ to nm: $1.07 \\times 10^{-3} \\text{ m} = 1.07 \\times 10^6 \\text{ nm}$.\n$$E = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{1.07 \\times 10^6 \\text{ nm}} \\approx 1.16 \\times 10^{-3} \\text{ eV}$$\n\n**3. Region of the Electromagnetic Spectrum:**\nA wavelength of $\\sim 1$ mm falls squarely in the **Microwave** region. (This is the famous Cosmic Microwave Background radiation)."
  },
  {
    id: 18,
    section: 'B',
    marks: 6,
    question: "The work function for tungsten metal is 4.52 eV. (a) What is the cutoff wavelength $\\lambda_c$ for tungsten? (b) What is the maximum kinetic energy of the electrons when radiation of wavelength 198 nm is used? (c) What is the stopping potential in this case?",
    solution: "**(a) Cutoff Wavelength ($\\lambda_c$):**\nThe cutoff wavelength corresponds to a photon having exactly the energy of the work function ($\\phi = 4.52$ eV).\n$$\\lambda_c = \\frac{hc}{\\phi} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{4.52 \\text{ eV}} \\approx 274.3 \\text{ nm}$$\n\n**(b) Maximum Kinetic Energy ($K_{\\max}$):**\nFirst, find the energy of the incident 198 nm photons:\n$$E = \\frac{hc}{\\lambda} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{198 \\text{ nm}} \\approx 6.263 \\text{ eV}$$\nUsing Einstein's photoelectric equation:\n$$K_{\\max} = E - \\phi = 6.263 \\text{ eV} - 4.52 \\text{ eV} = 1.743 \\text{ eV}$$\n\n**(c) Stopping Potential ($V_s$):**\nThe stopping potential is the voltage required to stop the most energetic electrons. Since $K_{\\max} = e V_s$:\n$$V_s = \\frac{K_{\\max}}{e} = \\frac{1.743 \\text{ eV}}{e} = 1.743 \\text{ V}$$"
  },

  // ---------------------------------------------------------
  // SECTION C (10 Marks Each)
  // ---------------------------------------------------------
  {
    id: 19,
    section: 'C',
    marks: 10,
    question: "Obtain the relation connecting the total energy rest energy and kinetic energy in relativity. Hence obtain the relativistic mass-energy relation.",
    solution: "We derive the relativistic kinetic energy using the work-energy theorem. Kinetic energy $K$ is the work $W$ done by a net force $F$ to accelerate a particle from rest to velocity $v$:\n$$K = W = \\int_0^x F \\, dx$$\n\nUsing Newton's second law $F = \\frac{dp}{dt}$:\n$$K = \\int_0^x \\frac{dp}{dt} dx = \\int_0^v \\frac{dx}{dt} dp = \\int_0^v v \\, dp$$\n\nWe use integration by parts ($\\int v \\, dp = pv - \\int p \\, dv$) and substitute the relativistic momentum $p = \\gamma mv = \\frac{mv}{\\sqrt{1 - v^2/c^2}}$:\n$$K = \\frac{mv^2}{\\sqrt{1 - v^2/c^2}} - \\int_0^v \\frac{mv}{\\sqrt{1 - v^2/c^2}} dv$$\n\nTo evaluate the integral, let $u = 1 - v^2/c^2$, which means $du = -\\frac{2v}{c^2} dv$, or $v \\, dv = -\\frac{c^2}{2} du$. The integral becomes:\n$$\\int m \\left(-\\frac{c^2}{2}\\right) u^{-1/2} du = -mc^2 u^{1/2} = -mc^2 \\sqrt{1 - v^2/c^2}$$\n\nEvaluating this from $0$ to $v$:\n$$\\left[ -mc^2 \\sqrt{1 - v^2/c^2} \\right]_0^v = -mc^2 \\sqrt{1 - v^2/c^2} - (-mc^2(1)) = mc^2 - mc^2 \\sqrt{1 - v^2/c^2}$$\n\nSubstitute this back into the equation for $K$:\n$$K = \\frac{mv^2}{\\sqrt{1 - v^2/c^2}} + mc^2 \\sqrt{1 - v^2/c^2} - mc^2$$\n\nFind a common denominator for the first two terms:\n$$K = \\frac{mv^2 + mc^2(1 - v^2/c^2)}{\\sqrt{1 - v^2/c^2}} - mc^2$$\n$$K = \\frac{mv^2 + mc^2 - mv^2}{\\sqrt{1 - v^2/c^2}} - mc^2$$\n$$K = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}} - mc^2$$\n\nThis can be written as:\n$$K = \\gamma mc^2 - mc^2$$\n\nWe define the **rest energy** of the particle as $E_0 = mc^2$, and the **total relativistic energy** as $E = \\gamma mc^2$. \nSubstituting these definitions into our kinetic energy equation yields the relation connecting them:\n$$K = E - E_0 \\implies E = K + E_0$$\n\nThe equation $E = \\gamma mc^2$ is the **relativistic mass-energy relation**. It demonstrates that mass and energy are fundamentally equivalent. Even when a particle is completely at rest ($K = 0$, $\\gamma = 1$), it possesses an enormous amount of inherent energy $E = mc^2$ simply by virtue of having mass."
  },
  {
    id: 20,
    section: 'C',
    marks: 10,
    question: "Explain the quantum theory of photoelectric effect. How does the quantum theory account for the inadequacies of the classical theory.",
    solution: "**Inadequacies of Classical Wave Theory:**\nBefore 1905, light was modeled purely as a continuous electromagnetic wave. This classical model failed to explain three key experimental observations of the photoelectric effect:\n1. **Intensity vs. Kinetic Energy:** Classically, a brighter (more intense) light has a larger wave amplitude and should impart more kinetic energy to the electrons. Experimentally, the maximum kinetic energy ($K_{\\max}$) depends *only* on the light's frequency, not its intensity.\n2. **Threshold Frequency:** Classically, light of any frequency should eventually eject electrons if it is intense enough or shines long enough to accumulate energy. Experimentally, no electrons are emitted below a specific cutoff frequency ($f_c$), regardless of how bright the light is.\n3. **Time Delay:** Classically, a very dim light wave would take measurable time (seconds or minutes) to pool enough energy over an atom to eject an electron. Experimentally, emission is virtually instantaneous ($< 10^{-9}$ s), even at extremely low intensities.\n\n**Einstein's Quantum Theory (1905):**\nTo resolve this, Albert Einstein applied Max Planck's idea of quantization directly to light itself. He proposed that light is not a continuous wave, but rather a stream of discrete, localized bundles of energy called **photons** (or quanta).\n\n- The energy of a single photon is directly proportional to its frequency: $E = hf$ (where $h$ is Planck's constant).\n- In the photoelectric effect, a single photon interacts with a single electron. The photon transfers its *entire* energy to the electron instantaneously.\n- To escape the metal, the electron must pay a minimum energy \"toll\" called the work function ($\\phi$).\n\nThis leads to Einstein's Photoelectric Equation:\n$$K_{\\max} = hf - \\phi$$\n\n**How Quantum Theory Accounts for the Inadequacies:**\n1. **Kinetic Energy:** The equation $K_{\\max} = hf - \\phi$ shows that kinetic energy depends strictly on the frequency $f$ of the individual photon, not the total intensity. Increasing intensity just means *more* photons hit the metal, ejecting *more* electrons, but each electron still gets the same $hf$ energy.\n2. **Threshold Frequency:** If the photon's energy $hf$ is less than the work function $\\phi$, the electron cannot escape. This perfectly explains why there is a hard cutoff frequency ($f_c = \\phi/h$) below which no emission occurs.\n3. **No Time Delay:** Because the energy is delivered in a concentrated particle-like bundle (a photon) rather than spread out over a wave front, the collision is a 1-to-1 instantaneous event. No \"accumulation\" time is needed."
  },
  {
    id: 21,
    section: 'C',
    marks: 10,
    question: "What is meant by Compton effect? Derive the expression for the shift in the wavelength.",
    solution: "**The Compton Effect:**\nThe Compton effect is the scattering of high-energy photons (like X-rays or gamma rays) by loosely bound electrons in a target material. When the photon scatters, it transfers some of its energy and momentum to the electron. As a result, the scattered photon has less energy, and therefore a **longer wavelength**, than the incident photon. This experiment provided definitive proof that light behaves as a particle (photon) carrying momentum $p = h/\\lambda$.\n\n**Derivation of the Wavelength Shift:**\nConsider an incident photon of energy $E = hc/\\lambda$ and momentum $p = h/\\lambda$ colliding with a stationary electron of rest mass $m_e$.\nAfter the collision, the photon scatters at an angle $\\theta$ with energy $E' = hc/\\lambda'$ and momentum $p' = h/\\lambda'$. The electron recoils at an angle $\\phi$ with momentum $p_e$ and total relativistic energy $E_e$.\n\n**1. Conservation of Momentum:**\nSince momentum is a vector, we conserve it in the x and y directions.\n- x-axis: $p = p' \\cos\\theta + p_e \\cos\\phi \\implies p_e \\cos\\phi = p - p' \\cos\\theta$\n- y-axis: $0 = p' \\sin\\theta - p_e \\sin\\phi \\implies p_e \\sin\\phi = p' \\sin\\theta$\n\nSquare both equations and add them to eliminate the electron's angle $\\phi$:\n$$p_e^2 (\\cos^2\\phi + \\sin^2\\phi) = (p - p' \\cos\\theta)^2 + (p' \\sin\\theta)^2$$\n$$p_e^2 = p^2 - 2pp' \\cos\\theta + p'^2 \\cos^2\\theta + p'^2 \\sin^2\\theta$$\n$$p_e^2 = p^2 + p'^2 - 2pp' \\cos\\theta \\quad \\text{--- (Equation 1)}$$\n\n**2. Conservation of Energy:**\nTotal initial energy = Total final energy\n$$E + m_e c^2 = E' + E_e \\implies E_e = E - E' + m_e c^2$$\n\nWe use the relativistic energy-momentum relation for the electron: $E_e^2 = (p_e c)^2 + (m_e c^2)^2$. Substitute $E_e$ into this:\n$$(E - E' + m_e c^2)^2 = p_e^2 c^2 + m_e^2 c^4$$\nExpand the left side:\n$$(E - E')^2 + 2(E - E')m_e c^2 + m_e^2 c^4 = p_e^2 c^2 + m_e^2 c^4$$\n$$E^2 - 2EE' + E'^2 + 2(E - E')m_e c^2 = p_e^2 c^2 \\quad \\text{--- (Equation 2)}$$\n\n**3. Combining the Equations:**\nSubstitute $p = E/c$ and $p' = E'/c$ into Equation 1, and multiply the whole equation by $c^2$:\n$$p_e^2 c^2 = E^2 + E'^2 - 2EE' \\cos\\theta \\quad \\text{--- (Equation 3)}$$\n\nNow equate Equation 2 and Equation 3 (since both equal $p_e^2 c^2$):\n$$E^2 - 2EE' + E'^2 + 2(E - E')m_e c^2 = E^2 + E'^2 - 2EE' \\cos\\theta$$\n\nCancel $E^2$ and $E'^2$ from both sides:\n$$-2EE' + 2(E - E')m_e c^2 = -2EE' \\cos\\theta$$\n\nDivide by 2 and rearrange:\n$$(E - E')m_e c^2 = EE' - EE' \\cos\\theta = EE'(1 - \\cos\\theta)$$\n\nDivide both sides by $E E' m_e c^2$:\n$$\\frac{E - E'}{EE'} = \\frac{1 - \\cos\\theta}{m_e c^2}$$\n$$\\frac{1}{E'} - \\frac{1}{E} = \\frac{1 - \\cos\\theta}{m_e c^2}$$\n\nFinally, substitute $E = hc/\\lambda$ and $E' = hc/\\lambda'$:\n$$\\frac{\\lambda'}{hc} - \\frac{\\lambda}{hc} = \\frac{1 - \\cos\\theta}{m_e c^2}$$\n$$\\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos\\theta)$$\n\nThis is the final expression for the Compton wavelength shift $\\Delta \\lambda$."
  }
];