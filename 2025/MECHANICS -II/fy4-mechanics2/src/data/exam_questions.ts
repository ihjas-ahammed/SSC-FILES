export interface ExamQuestion {
  id: number;
  section: 'A' | 'B' | 'C';
  marks: number;
  question: string;
  solution: string;
}

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // Section A
  {
    id: 1,
    section: 'A',
    marks: 3,
    question: "Give Kepler's laws of planetary motion.",
    solution: "**First Law (Orbits):** The orbit of every planet is an ellipse with the Sun at one of the two foci.\n\n**Second Law (Areas):** A line joining a planet and the Sun sweeps out equal areas during equal intervals of time ($dA/dt = \\text{constant}$).\n\n**Third Law (Periods):** The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit ($T^2 \\propto a^3$)."
  },
  {
    id: 2,
    section: 'A',
    marks: 3,
    question: "Define Central forces. Give examples. What are their characteristics?",
    solution: "**Definition:** A central force is a force that is always directed towards or away from a fixed point (origin) and its magnitude depends only on the distance $r$ from that point: $\\mathbf{F} = f(r)\\mathbf{\\hat{r}}$.\n\n**Examples:** Gravitational force, Electrostatic (Coulomb) force.\n\n**Characteristics:**\n1. They are conservative forces (can be derived from a potential $V(r)$).\n2. They exert zero torque about the origin, meaning angular momentum $\\mathbf{L}$ is conserved.\n3. Motion under a central force is always confined to a single plane."
  },
  {
    id: 3,
    section: 'A',
    marks: 3,
    question: "A particle acted upon by a central force will move in a plane. Why?",
    solution: "For a central force, the force vector $\\mathbf{F}$ is parallel to the position vector $\\mathbf{r}$.\n\nTorque is given by $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$. Since $\\mathbf{r} \\parallel \\mathbf{F}$, the cross product is zero: $\\boldsymbol{\\tau} = 0$.\n\nBecause torque is the rate of change of angular momentum ($\\boldsymbol{\\tau} = d\\mathbf{L}/dt$), $\\mathbf{L}$ must be a constant vector. \n\nBy definition, $\\mathbf{L} = m(\\mathbf{r} \\times \\mathbf{v})$, which means $\\mathbf{r}$ is always perpendicular to $\\mathbf{L}$. Since $\\mathbf{L}$ is fixed in space, the position vector $\\mathbf{r}$ is locked into a 2D plane perpendicular to $\\mathbf{L}$."
  },
  {
    id: 4,
    section: 'A',
    marks: 3,
    question: "Show that the total energy of a planet can be written as the sum of radial kinetic energy and effective potential energy.",
    solution: "Total energy $E = T + V$.\nIn polar coordinates, velocity squared is $v^2 = \\dot{r}^2 + r^2\\dot{\\theta}^2$.\nTherefore, $T = \\frac{1}{2}m\\dot{r}^2 + \\frac{1}{2}mr^2\\dot{\\theta}^2$.\n\nSubstitute angular momentum $l = mr^2\\dot{\\theta} \\implies \\dot{\\theta} = \\frac{l}{mr^2}$ into the tangential kinetic energy term:\n$$ \\frac{1}{2}mr^2\\left(\\frac{l}{mr^2}\\right)^2 = \\frac{l^2}{2mr^2} $$\n\nTotal Energy becomes:\n$$ E = \\frac{1}{2}m\\dot{r}^2 + \\left( \\frac{l^2}{2mr^2} + V(r) \\right) $$\nThe term $\\frac{1}{2}m\\dot{r}^2$ is the **radial kinetic energy**. The remaining term $\\frac{l^2}{2mr^2} + V(r)$ depends only on $r$ and acts as the **Effective Potential Energy** $V_{eff}(r)$."
  },
  {
    id: 5,
    section: 'A',
    marks: 3,
    question: "Determine the semimajor axis of Saturn in AU, given its period is 29.5 Earth years.",
    solution: "By Kepler's Third Law, measuring $T$ in Earth years and $a$ in Astronomical Units (AU):\n$$ T^2 = a^3 $$\nGiven $T = 29.5$ years:\n$$ a^3 = (29.5)^2 = 870.25 $$\n$$ a = \\sqrt[3]{870.25} \\approx 9.55 \\text{ AU} $$"
  },
  {
    id: 6,
    section: 'A',
    marks: 3,
    question: "Differentiate between underdamped, overdamped, and critically damped harmonic oscillators, discussing their respective behaviors.",
    solution: "Let $\\gamma = b/2m$ (damping parameter) and $\\omega_0 = \\sqrt{k/m}$ (natural frequency).\n\n1. **Underdamped ($\\gamma < \\omega_0$):** The system oscillates with an exponentially decaying envelope. Roots are complex.\n2. **Critically Damped ($\\gamma = \\omega_0$):** The system returns to equilibrium in the fastest time possible without oscillating. Roots are real and repeated.\n3. **Overdamped ($\\gamma > \\omega_0$):** The system returns to equilibrium very slowly without oscillating, governed by two decaying exponential terms. Roots are real and distinct."
  },
  {
    id: 7,
    section: 'A',
    marks: 3,
    question: "Define the quality factor (Q factor) of a harmonic oscillator and discuss its significance in characterizing the sharpness of resonance and damping in the system.",
    solution: "**Definition:** The Q factor is a dimensionless parameter defined as the ratio of the resonant frequency to the full width at half maximum (FWHM) of the resonance curve:\n$$ Q = \\frac{\\omega_0}{\\Delta\\omega} $$\n\n**Significance:** It measures how underdamped an oscillator is. A high Q factor means the system loses energy slowly, resulting in a very tall, sharp resonance peak. A low Q factor implies high damping and a broad, flat resonance curve."
  },
  {
    id: 8,
    section: 'A',
    marks: 3,
    question: "Write down the differential equation for a damped harmonic oscillator. Explain how the relative values of the system parameters (b, k, m) determines the nature of motion.",
    solution: "The differential equation is:\n$$ m\\ddot{x} + b\\dot{x} + kx = 0 $$\n\nThe nature of motion depends on the roots of the auxiliary equation, determined by comparing the damping term $\\gamma^2 = (b/2m)^2$ to the stiffness term $\\omega_0^2 = k/m$.\n\n- If $b^2 < 4mk$ (Underdamped): System oscillates.\n- If $b^2 = 4mk$ (Critically Damped): Fastest non-oscillatory return.\n- If $b^2 > 4mk$ (Overdamped): Slow, sluggish return."
  },
  {
    id: 9,
    section: 'A',
    marks: 3,
    question: "Prove by substitution that $x = A \\cos\\left(\\sqrt{\\frac{k}{m}}t\\right) + B \\sin\\left(\\sqrt{\\frac{k}{m}}t\\right)$ is a solution of the differential equation for a harmonic oscillator.",
    solution: "The differential equation is $m\\ddot{x} + kx = 0$, or $\\ddot{x} = -\\frac{k}{m}x$.\nLet $\\omega = \\sqrt{k/m}$. Then $x = A\\cos(\\omega t) + B\\sin(\\omega t)$.\n\nFirst derivative:\n$$ \\dot{x} = -A\\omega\\sin(\\omega t) + B\\omega\\cos(\\omega t) $$\nSecond derivative:\n$$ \\ddot{x} = -A\\omega^2\\cos(\\omega t) - B\\omega^2\\sin(\\omega t) $$\nFactor out $-\\omega^2$:\n$$ \\ddot{x} = -\\omega^2 [A\\cos(\\omega t) + B\\sin(\\omega t)] = -\\omega^2 x $$\nSince $\\omega^2 = k/m$, we have $\\ddot{x} = -\\frac{k}{m}x$, which exactly satisfies the original ODE."
  },
  {
    id: 10,
    section: 'A',
    marks: 3,
    question: "A spring of constant 10 N/m is connected to a mass of 2 kg. It is initially at rest in an unstretched position. It is given an initial speed of 3 m/s. What is the amplitude of the oscillation?",
    solution: "Natural frequency $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{10}{2}} = \\sqrt{5}$ rad/s.\n\nThe initial position is $x(0) = 0$ (equilibrium), so the initial speed is the maximum speed $v_{max}$.\nFor SHM, $v_{max} = A\\omega$.\n\n$$ 3 = A\\sqrt{5} \\implies A = \\frac{3}{\\sqrt{5}} \\approx 1.34 \\text{ m} $$"
  },
  
  // Section B
  {
    id: 11,
    section: 'B',
    marks: 6,
    question: "Prove Kepler's third law.",
    solution: "Kepler's Second Law gives the constant rate at which area is swept:\n$$ \\frac{dA}{dt} = \\frac{L}{2m} $$\nIntegrating over one full period $T$, the total area of the ellipse $A$ is swept out:\n$$ A = \\int_0^T \\frac{L}{2m} dt = \\frac{L}{2m} T $$\nThe geometric area of an ellipse is $A = \\pi a b$, where $b = a\\sqrt{1-e^2}$.\n$$ \\frac{L}{2m} T = \\pi a^2 \\sqrt{1-e^2} $$\nWe also know angular momentum $L$ for an elliptical orbit relates to eccentricity by $e = \\sqrt{1 - L^2 / (m k a)}$ (where $k = GMm$), which means $L = \\sqrt{m k a (1-e^2)}$.\nSubstitute $L$ into the period equation:\n$$ \\frac{\\sqrt{m k a (1-e^2)}}{2m} T = \\pi a^2 \\sqrt{1-e^2} $$\nThe $\\sqrt{1-e^2}$ terms cancel. Solving for $T$:\n$$ T = \\frac{2\\pi m a^2}{\\sqrt{m k a}} = 2\\pi \\sqrt{\\frac{m}{k}} a^{3/2} $$\nSquaring both sides:\n$$ T^2 = \\left( \\frac{4\\pi^2 m}{k} \\right) a^3 $$\nSince $k = GMm$, the mass $m$ cancels out, proving $T^2 \\propto a^3$."
  },
  {
    id: 12,
    section: 'B',
    marks: 6,
    question: "Obtain the equation of motion for the radial co-ordinate of a planet moving under the gravitational force of sun.",
    solution: "Using the Lagrangian approach:\n$$ L = T - V = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2) - \\left( -\\frac{GMm}{r} \\right) $$\nThe Euler-Lagrange equation for the radial coordinate $r$ is:\n$$ \\frac{d}{dt}\\left( \\frac{\\partial L}{\\partial \\dot{r}} \\right) - \\frac{\\partial L}{\\partial r} = 0 $$\nCalculate the derivatives:\n$$ \\frac{\\partial L}{\\partial \\dot{r}} = m\\dot{r} \\implies \\frac{d}{dt}(m\\dot{r}) = m\\ddot{r} $$\n$$ \\frac{\\partial L}{\\partial r} = mr\\dot{\\theta}^2 - \\frac{GMm}{r^2} $$\nAssemble the equation:\n$$ m\\ddot{r} - mr\\dot{\\theta}^2 = -\\frac{GMm}{r^2} $$\nUsing angular momentum $l = mr^2\\dot{\\theta} \\implies \\dot{\\theta} = l/mr^2$, we can eliminate $\\theta$:\n$$ m\\ddot{r} - \\frac{l^2}{mr^3} = -\\frac{GMm}{r^2} $$"
  },
  {
    id: 13,
    section: 'B',
    marks: 6,
    question: "Obtain the relation connecting the semi major axis of the orbit of a planet and its total energy.",
    solution: "At the turning points of an orbit (perihelion $r_p$ and aphelion $r_a$), the radial velocity $\\dot{r} = 0$. The total energy equation becomes:\n$$ E = V_{eff}(r) = \\frac{l^2}{2mr^2} - \\frac{k}{r} $$\nRearranging into a quadratic for $1/r$:\n$$ E = \\frac{l^2}{2m}\\left(\\frac{1}{r}\\right)^2 - k\\left(\\frac{1}{r}\\right) $$\n$$ \\frac{l^2}{2m}\\left(\\frac{1}{r}\\right)^2 - k\\left(\\frac{1}{r}\\right) - E = 0 $$\nThe roots of this quadratic are $1/r_p$ and $1/r_a$. From the properties of quadratics, the sum of the roots is:\n$$ \\frac{1}{r_p} + \\frac{1}{r_a} = \\frac{-(-k)}{l^2/2m} = \\frac{2mk}{l^2} $$\nThe product of the roots is:\n$$ \\frac{1}{r_p r_a} = \\frac{-E}{l^2/2m} = -\\frac{2mE}{l^2} $$\nBy definition of an ellipse, the semimajor axis is $a = (r_p + r_a)/2$. Therefore:\n$$ 2a = r_p + r_a = \\frac{r_p + r_a}{r_p r_a} \\cdot (r_p r_a) = \\left( \\frac{1}{r_a} + \\frac{1}{r_p} \\right) (r_p r_a) $$\nSubstitute the sum and product:\n$$ 2a = \\left( \\frac{2mk}{l^2} \\right) \\left( -\\frac{l^2}{2mE} \\right) = -\\frac{k}{E} $$\nRearranging yields the desired relation:\n$$ E = -\\frac{k}{2a} $$"
  },
  {
    id: 14,
    section: 'B',
    marks: 6,
    question: "a) Given an eccentricity e of 0.2 for a planet's orbit, determine whether the orbit is elliptical, parabolic, or hyperbolic.\nb) Given the orbital period of a planet as 1.88 years, determine the semi-major axis of its orbit in astronomical units (AU).",
    solution: "**Part a):**\nEccentricity determines the conic section.\n- Circle: $e = 0$\n- Ellipse: $0 < e < 1$\n- Parabola: $e = 1$\n- Hyperbola: $e > 1$\nSince $e = 0.2$ falls between 0 and 1, the orbit is **elliptical**.\n\n**Part b):**\nUsing Kepler's Third Law in Earth units (Years and AU):\n$$ T^2 = a^3 $$\nGiven $T = 1.88$ years:\n$$ a^3 = (1.88)^2 = 3.5344 $$\n$$ a = \\sqrt[3]{3.5344} \\approx 1.52 \\text{ AU} $$"
  },
  {
    id: 15,
    section: 'B',
    marks: 6,
    question: "Consider a mass-spring system with a mass m=0.2kg attached to a spring with spring constant k=100N/m. The system is set into simple harmonic motion with an amplitude of A=0.1m.\na) Determine the Period of Oscillation.\nb) Find the Maximum Velocity and Acceleration.",
    solution: "**Part a) Period:**\nAngular frequency $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{100}{0.2}} = \\sqrt{500} \\approx 22.36$ rad/s.\nPeriod $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\sqrt{500}} \\approx 0.281$ seconds.\n\n**Part b) Maximums:**\nMaximum Velocity $v_{max} = A\\omega = 0.1 \\times \\sqrt{500} \\approx 2.236$ m/s.\nMaximum Acceleration $a_{max} = A\\omega^2 = 0.1 \\times 500 = 50$ m/s$^2$."
  },
  {
    id: 16,
    section: 'B',
    marks: 6,
    question: "A simple harmonic oscillator consists of a mass of 3 kg on a spring of force constant 0.15 N/m. Determine the frequency of the driving force which will cause the amplitude of oscillations to grow extremely large.",
    solution: "The amplitude grows extremely large when the driving frequency matches the natural resonant frequency of the system (Resonance).\n\nCalculate natural angular frequency:\n$$ \\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{0.15}{3}} = \\sqrt{0.05} \\approx 0.2236 \\text{ rad/s} $$\n\nThe question asks for 'frequency' (usually $f$ in Hz, though $\\omega$ in rad/s is often acceptable):\n$$ f = \\frac{\\omega_0}{2\\pi} = \\frac{0.2236}{2\\pi} \\approx 0.0356 \\text{ Hz} $$\nThe driving force should have a frequency of $0.0356$ Hz (or $0.224$ rad/s)."
  },
  {
    id: 17,
    section: 'B',
    marks: 6,
    question: "Discuss the solution of the differential equation for a damped harmonic oscillator in the underdamped case.",
    solution: "The ODE is $\\ddot{x} + 2\\gamma\\dot{x} + \\omega_0^2x = 0$ where $\\gamma = b/2m$ and $\\omega_0 = \\sqrt{k/m}$.\n\nThe roots of the auxiliary equation $p^2 + 2\\gamma p + \\omega_0^2 = 0$ are:\n$$ p = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2} $$\nIn the **underdamped** case, $\\gamma < \\omega_0$, so the term under the square root is negative, yielding complex roots:\n$$ p = -\\gamma \\pm i\\omega_1 $$\nwhere $\\omega_1 = \\sqrt{\\omega_0^2 - \\gamma^2}$ is the damped angular frequency.\n\nUsing Euler's formula, the general solution is:\n$$ x(t) = A e^{-\\gamma t} \\cos(\\omega_1 t + \\phi) $$\n\n**Discussion:** The solution consists of a sinusoidal oscillation $\\cos(\\omega_1 t + \\phi)$ oscillating at a slightly lower frequency than the natural frequency ($\\omega_1 < \\omega_0$). This oscillation is bounded by an exponentially decaying envelope $A e^{-\\gamma t}$, meaning the amplitude gradually shrinks to zero due to friction."
  },
  {
    id: 18,
    section: 'B',
    marks: 6,
    question: "Bring out the analogy between a damped harmonic oscillator and a RLC circuit. How does resonance arise in RLC circuits?",
    solution: "The mechanical equation is:\n$$ m\\ddot{x} + b\\dot{x} + kx = F(t) $$\nThe electrical equation for an RLC series circuit (using Kirchhoff's Voltage Law) is:\n$$ L\\ddot{q} + R\\dot{q} + \\frac{1}{C}q = V(t) $$\n\n**Analogy Dictionary:**\n- Mass $m$ $\\iff$ Inductance $L$ (Inertia)\n- Damping $b$ $\\iff$ Resistance $R$ (Energy loss)\n- Stiffness $k$ $\\iff$ Inverse Capacitance $1/C$ (Restoring factor)\n- Displacement $x$ $\\iff$ Charge $q$\n- Velocity $\\dot{x}$ $\\iff$ Current $I = \\dot{q}$\n- Driving Force $F(t)$ $\\iff$ Driving Voltage $V(t)$\n\n**Resonance in RLC:**\nResonance arises when the frequency of the driving AC voltage $V(t)$ matches the natural frequency of the circuit $\\omega_0 = 1/\\sqrt{LC}$. At this frequency, the inductive reactance and capacitive reactance perfectly cancel each other out ($X_L = X_C$), minimizing the circuit's total impedance to just the resistance $R$. This causes the current $I$ to spike to its absolute maximum value."
  },
  
  // Section C
  {
    id: 19,
    section: 'C',
    marks: 10,
    question: "State and prove Kepler's first law. Hence obtain the expression for the eccentricity of the orbit in terms of the total energy E.",
    solution: "**Statement:** The orbit of a planet is an ellipse with the Sun at one focus.\n\n**Proof:**\nStart with the radial Newtonian equation with angular momentum substituted:\n$$ m\\ddot{r} - \\frac{l^2}{mr^3} = f(r) $$\nFor gravity, $f(r) = -k/r^2$. Let $u = 1/r$. Time derivatives become angle derivatives via $\\frac{d}{dt} = \\frac{l u^2}{m} \\frac{d}{d\\theta}$.\nApplying this transformation yields Binet's Equation:\n$$ \\frac{d^2u}{d\\theta^2} + u = -\\frac{m}{l^2 u^2}\\left(-ku^2\\right) = \\frac{mk}{l^2} $$\nThis is the equation of a shifted harmonic oscillator. The general solution is:\n$$ u(\\theta) = C \\cos(\\theta - \\theta_0) + \\frac{mk}{l^2} $$\nSet $\\theta_0 = 0$ for perihelion, and substitute $r = 1/u$:\n$$ r = \\frac{1}{\\frac{mk}{l^2} + C\\cos\\theta} = \\frac{l^2/mk}{1 + \\frac{Cl^2}{mk}\\cos\\theta} $$\nThis is the standard polar equation of a conic section $r = \\frac{p}{1 + e\\cos\\theta}$, where $p = l^2/mk$ and eccentricity $e = Cl^2/mk$. Since $0 < e < 1$ for bound planets, the conic is an **ellipse**. (Proof complete).\n\n**Deriving Eccentricity $e$ from Energy $E$:**\nTotal energy is constant. Evaluate $E$ at perihelion ($\\theta=0$), where $r = p/(1+e)$ and $\\dot{r}=0$.\n$$ E = \\frac{l^2}{2mr^2} - \\frac{k}{r} = \\frac{1}{r} \\left( \\frac{l^2}{2mr} - k \\right) $$\nSubstitute $1/r = (1+e)/p$ and $p = l^2/mk$:\n$$ E = \\frac{1+e}{p} \\left( \\frac{l^2(1+e)}{2mp} - k \\right) $$\n$$ E = \\frac{mk(1+e)}{l^2} \\left( \\frac{l^2 mk(1+e)}{2m l^2} - k \\right) $$\n$$ E = \\frac{mk(1+e)}{l^2} \\left( \\frac{k(1+e)}{2} - k \\right) = \\frac{mk(1+e)}{l^2} \\left( \\frac{k e - k}{2} \\right) $$\n$$ E = \\frac{mk^2}{2l^2} (e^2 - 1) $$\nSolving for $e^2$:\n$$ e^2 - 1 = \\frac{2El^2}{mk^2} \\implies e = \\sqrt{1 + \\frac{2El^2}{mk^2}} $$"
  },
  {
    id: 20,
    section: 'C',
    marks: 10,
    question: "What is meant by a forced harmonic oscillator? Write down the differential equation for it. Show that the amplitude of oscillations of a forced harmonic oscillator depends on the frequency of the driving force. Obtain the expression for the resonant frequency of the forced damped oscillator.",
    solution: "**Definition:** A forced harmonic oscillator is a damped oscillating system that is subjected to an external, continuously applied time-varying driving force.\n\n**Differential Equation:**\n$$ m\\ddot{x} + b\\dot{x} + kx = F_0 \\sin(\\omega_d t) $$\nwhere $\\omega_d$ is the driving frequency.\n\n**Amplitude Dependence:**\nTo find the steady-state amplitude, we use the complex substitution $F(t) = F_0 e^{i\\omega_d t}$ and guess $\\xi = C e^{i\\omega_d t}$. Substituting into the ODE yields:\n$$ C(-m\\omega_d^2 + ib\\omega_d + k) = F_0 $$\n$$ C = \\frac{F_0}{(k - m\\omega_d^2) + i(b\\omega_d)} $$\nDividing numerator and denominator by $m$ and using $\\omega_0^2 = k/m$:\n$$ C = \\frac{F_0/m}{(\\omega_0^2 - \\omega_d^2) + i(b\\omega_d/m)} $$\nThe physical amplitude $A$ is the magnitude of the complex constant $C$:\n$$ A = |C| = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}} $$\nThis formula clearly shows that the amplitude $A$ is a strong function of the driving frequency $\\omega_d$.\n\n**Resonant Frequency:**\nResonance occurs when the amplitude $A$ is maximized. This happens when the denominator is minimized. Let $D = (\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2$. To find the minimum, take the derivative with respect to $\\omega_d$ and set it to zero:\n$$ \\frac{dD}{d\\omega_d} = 2(\\omega_0^2 - \\omega_d^2)(-2\\omega_d) + 2\\left(\\frac{b}{m}\\right)^2 \\omega_d = 0 $$\nDivide by $4\\omega_d$ (assuming $\\omega_d \\neq 0$):\n$$ -(\\omega_0^2 - \\omega_d^2) + \\frac{b^2}{2m^2} = 0 $$\n$$ \\omega_d^2 = \\omega_0^2 - \\frac{b^2}{2m^2} $$\nTherefore, the resonant frequency $\\omega_r$ is:\n$$ \\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2} $$\nwhere $\\gamma = b/2m$. Notice it is slightly lower than the natural undamped frequency $\\omega_0$."
  }
];