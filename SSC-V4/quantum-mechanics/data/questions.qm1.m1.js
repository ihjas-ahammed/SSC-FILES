/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module I — Written Exercises (Griffiths Ch 1)
   Total Questions: 17
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'q.qm1.m1.01',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.3',
    marks: 4,
    title: 'Discrete Distribution & Statistical Metrics',
    source: 'Griffiths 3e §1.3 Problem 1.1',
    prompt: `<p>A room contains 14 people with the following ages: one person of age 14, one of age 15, three of age 16, two of age 22, two of age 24, and five of age 25.</p>
<p>(a) Find $\\langle j \\rangle$ and $\\langle j^2 \\rangle$.<br>
(b) Determine the variance $\\sigma^2$ and standard deviation $\\sigma$.<br>
(c) Identify the mode and the median age.</p>`,
    tests: ['c.1.3.1', 'c.1.3.3'],
    approach: '<p>Construct the probability distribution $P(j) = N(j)/N$ where $N = 14$, then apply $\\langle j \\rangle = \\sum j P(j)$, $\\langle j^2 \\rangle = \\sum j^2 P(j)$, and $\\sigma^2 = \\langle j^2 \\rangle - \\langle j \\rangle^2$.</p>',
    solution: `<p><b>(a) Probabilities and Expectation Values:</b><br>
$N = 14$. The probabilities are $P(14) = 1/14$, $P(15) = 1/14$, $P(16) = 3/14$, $P(22) = 2/14$, $P(24) = 2/14$, $P(25) = 5/14$.<br>
$$\\langle j \\rangle = \\frac{14(1) + 15(1) + 16(3) + 22(2) + 24(2) + 25(5)}{14} = \\frac{14 + 15 + 48 + 44 + 48 + 125}{14} = \\frac{294}{14} = 21$$
$$\\langle j^2 \\rangle = \\frac{14^2(1) + 15^2(1) + 16^2(3) + 22^2(2) + 24^2(2) + 25^2(5)}{14} = \\frac{196 + 225 + 768 + 968 + 1152 + 3125}{14} = \\frac{6434}{14} \\approx 459.57$$</p>
<p><b>(b) Variance and Standard Deviation:</b><br>
$$\\sigma^2 = \\langle j^2 \\rangle - \\langle j \\rangle^2 = \\frac{6434}{14} - 21^2 = 459.571 - 441 = 18.571 = \\frac{130}{7}$$
$$\\sigma = \\sqrt{18.571} \\approx 4.31 \\text{ years}$$</p>
<p><b>(c) Mode and Median:</b><br>
- <b>Mode:</b> The age with the highest frequency is 25 ($N=5$).<br>
- <b>Median:</b> The 7th and 8th people have ages 22 and 24, so the median is $(22 + 24)/2 = 23$ years.</p>`,
    trap: 'Do not confuse the expectation value (21) with the median (23) or mode (25). In a skewed distribution, these three metrics generally disagree.'
  },
  {
    id: 'q.qm1.m1.02',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.3',
    marks: 5,
    title: 'Continuous Statistics: The Falling Rock',
    source: 'Griffiths 3e §1.3 Problem 1.2',
    prompt: `<p>A rock is dropped from rest at height $h$ above the ground at $t = 0$. It falls under gravity with speed $v(x) = \\sqrt{2gx}$, where $x$ is the distance fallen ($0 \\le x \\le h$). A camera with a rapid shutter snaps a photo at an unknown, random time between $0$ and the impact time $T = \\sqrt{2h/g}$.</p>
<p>(a) Find the probability density $\\rho(x)$ that the rock is at distance $x$.<br>
(b) Verify that $\\rho(x)$ is properly normalized.<br>
(c) Calculate the mean distance $\\langle x \\rangle$ and the variance $\\sigma^2$.</p>`,
    tests: ['c.1.3.2', 'c.1.3.3'],
    approach: '<p>The probability $dP$ of catching the rock in $dx$ is $dt/T = dx/(v(x)T)$. Express $v(x)$ in terms of $x$ and integrate to find $\\langle x \\rangle$ and $\\langle x^2 \\rangle$.</p>',
    solution: `<p><b>(a) Probability Density:</b><br>
The time interval spent falling through $dx$ is $dt = dx / v(x) = \\frac{dx}{\\sqrt{2gx}}$.<br>
The total fall time is $T = \\sqrt{2h/g}$. Since the photo is taken at a uniform random time:
$$dP = \\frac{dt}{T} = \\frac{dx}{\\sqrt{2gx} \\sqrt{2h/g}} = \\frac{dx}{2\\sqrt{hx}} \\implies \\rho(x) = \\frac{1}{2\\sqrt{hx}} = \\frac{1}{2\\sqrt{h}} x^{-1/2}$$</p>
<p><b>(b) Normalization Check:</b><br>
$$\\int_0^h \\rho(x) \\, dx = \\frac{1}{2\\sqrt{h}} \\int_0^h x^{-1/2} \\, dx = \\frac{1}{2\\sqrt{h}} [2\\sqrt{x}]_0^h = \\frac{2\\sqrt{h}}{2\\sqrt{h}} = 1$$</p>
<p><b>(c) Mean and Variance:</b><br>
$$\\langle x \\rangle = \\int_0^h x \\rho(x) \\, dx = \\frac{1}{2\\sqrt{h}} \\int_0^h x^{1/2} \\, dx = \\frac{1}{2\\sqrt{h}} \\left[\\frac{2}{3}x^{3/2}\\right]_0^h = \\frac{1}{3} h$$
$$\\langle x^2 \\rangle = \\int_0^h x^2 \\rho(x) \\, dx = \\frac{1}{2\\sqrt{h}} \\int_0^h x^{3/2} \\, dx = \\frac{1}{2\\sqrt{h}} \\left[\\frac{2}{5}x^{5/2}\\right]_0^h = \\frac{1}{5} h^2$$
$$\\sigma^2 = \\langle x^2 \\rangle - \\langle x \\rangle^2 = \\frac{1}{5}h^2 - \\left(\\frac{1}{3}h\\right)^2 = \\left(\\frac{1}{5} - \\frac{1}{9}\\right)h^2 = \\frac{4}{45}h^2$$</p>`,
    trap: 'Intuition suggests the average position is h/2. It is h/3 because the rock spends much more time near the top where it moves slowly!'
  },
  {
    id: 'q.qm1.m1.03',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.3',
    marks: 4,
    title: 'Gaussian Probability Distribution',
    source: 'Griffiths 3e §1.3 Problem 1.3',
    prompt: `<p>Consider the Gaussian distribution $\\rho(x) = A e^{-\\lambda(x-a)^2}$, where $A, \\lambda$, and $a$ are positive real constants.</p>
<p>(a) Normalize the distribution to find the constant $A$.<br>
(b) Find $\\langle x \\rangle$, $\\langle x^2 \\rangle$, and the standard deviation $\\sigma$.</p>`,
    tests: ['c.1.3.2', 'c.1.3.3'],
    approach: '<p>Use standard Gaussian integrals $\\int_{-\\infty}^\\infty e^{-\\lambda u^2} du = \\sqrt{\\pi/\\lambda}$ and $\\int_{-\\infty}^\\infty u^2 e^{-\\lambda u^2} du = \\frac{1}{2\\lambda}\\sqrt{\\pi/\\lambda}$ after substituting $u = x - a$.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
Let $u = x - a$, so $dx = du$:
$$1 = \\int_{-\\infty}^{\\infty} A e^{-\\lambda(x-a)^2} \\, dx = A \\int_{-\\infty}^{\\infty} e^{-\\lambda u^2} \\, du = A \\sqrt{\\frac{\\pi}{\\lambda}} \\implies A = \\sqrt{\\frac{\\lambda}{\\pi}}$$</p>
<p><b>(b) Expectation Values:</b><br>
$$\\langle x \\rangle = \\int_{-\\infty}^{\\infty} (u + a) \\sqrt{\\frac{\\lambda}{\\pi}} e^{-\\lambda u^2} \\, du = \\sqrt{\\frac{\\lambda}{\\pi}}\\left[ \\int_{-\\infty}^\\infty u e^{-\\lambda u^2}du + a\\int_{-\\infty}^\\infty e^{-\\lambda u^2}du \\right]$$
The first integral is odd and vanishes; the second gives $a(1) = a$. Thus $\\langle x \\rangle = a$.<br>
For $\\langle x^2 \\rangle$, write $x^2 = (u+a)^2 = u^2 + 2au + a^2$:
$$\\langle x^2 \\rangle = \\langle u^2 \\rangle + 2a\\langle u \\rangle + a^2 = \\sqrt{\\frac{\\lambda}{\\pi}} \\left(\\frac{1}{2\\lambda}\\sqrt{\\frac{\\pi}{\\lambda}}\\right) + 0 + a^2 = \\frac{1}{2\\lambda} + a^2$$
$$\\sigma^2 = \\langle x^2 \\rangle - \\langle x \\rangle^2 = \\left(a^2 + \\frac{1}{2\\lambda}\\right) - a^2 = \\frac{1}{2\\lambda} \\implies \\sigma = \\frac{1}{\\sqrt{2\\lambda}}$$</p>`,
    trap: 'Forgetting to substitute u = x - a leaves an offset that complicates the Gaussian integral unnecessarily.'
  },
  {
    id: 'q.qm1.m1.04',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.4',
    marks: 6,
    title: 'Normalization of a Triangular Wave Packet',
    source: 'Griffiths 3e §1.4 Problem 1.4',
    prompt: `<p>At time $t = 0$, a particle is described by the triangular wave function:
$$\\Psi(x,0) = \\begin{cases} A \\dfrac{x}{a}, & 0 \\le x \\le a \\\\[6pt] A \\dfrac{b-x}{b-a}, & a \\le x \\le b \\\\[6pt] 0, & \\text{otherwise} \\end{cases}$$
where $A, a, b$ are positive real constants ($b > a$).</p>
<p>(a) Normalize $\\Psi(x,0)$ to determine $A$ in terms of $a$ and $b$.<br>
(b) What is the probability of finding the particle to the left of $a$?<br>
(c) Calculate the expectation value of position $\\langle x \\rangle$.</p>`,
    tests: ['c.1.4.1', 'c.1.2.1', 'c.1.5.1'],
    approach: '<p>Split the normalization integral $\\int |\\Psi|^2 dx$ into the two linear intervals $[0,a]$ and $[a,b]$. Evaluate each polynomial integral and equate the sum to 1.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$$1 = \\int_0^a \\left(A \\frac{x}{a}\\right)^2 dx + \\int_a^b \\left(A \\frac{b-x}{b-a}\\right)^2 dx$$
$$\\int_0^a \\frac{x^2}{a^2} dx = \\frac{a}{3}$$
For the second integral, let $u = b - x$, $du = -dx$:
$$\\int_a^b \\left(\\frac{b-x}{b-a}\\right)^2 dx = \\frac{1}{(b-a)^2} \\int_0^{b-a} u^2 du = \\frac{b-a}{3}$$
Summing both:
$$1 = A^2 \\left(\\frac{a}{3} + \\frac{b-a}{3}\\right) = A^2 \\frac{b}{3} \\implies A = \\sqrt{\\frac{3}{b}}$$
Notice that $A$ depends only on the total base $b$, not on the peak position $a$!</p>
<p><b>(b) Probability to the left of $a$:</b><br>
$$P(x < a) = \\int_0^a |\\Psi|^2 dx = A^2 \\frac{a}{3} = \\left(\\frac{3}{b}\\right)\\frac{a}{3} = \\frac{a}{b}$$</p>
<p><b>(c) Expectation value of position $\\langle x \\rangle$:</b><br>
$$\\langle x \\rangle = A^2 \\left[ \\int_0^a x \\left(\\frac{x^2}{a^2}\\right) dx + \\int_a^b x \\left(\\frac{b-x}{b-a}\\right)^2 dx \\right] = \\frac{3}{b} \\left[ \\frac{a^2}{4} + \\frac{(b-a)(a + 3b)}{12} \\right] = \\frac{2a + b}{4}$$</p>`,
    trap: 'Assuming A must depend on both a and b. Because the area of the squared triangle factors neatly, the normalization depends solely on the total base b.'
  },
  {
    id: 'q.qm1.m1.05',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.4',
    marks: 5,
    title: 'Symmetric Exponential Wave Function',
    source: 'Griffiths 3e §1.4 Problem 1.5',
    prompt: `<p>Consider the wave function $\\Psi(x,t) = A e^{-\\lambda |x|} e^{-i\\omega t}$, where $A, \\lambda, \\omega$ are positive real constants.</p>
<p>(a) Normalize $\\Psi(x,t)$ to determine $A$.<br>
(b) Find the expectation values $\\langle x \\rangle$ and $\\langle x^2 \\rangle$.<br>
(c) Determine the standard deviation $\\sigma_x$ and find the probability of detecting the particle outside the one-standard-deviation region $[-\\sigma_x, \\sigma_x]$.</p>`,
    tests: ['c.1.4.1', 'c.1.3.3', 'c.1.2.1'],
    approach: '<p>Note that $|e^{-i\\omega t}|^2 = 1$. Exploit the even symmetry of $|\\Psi|^2 = A^2 e^{-2\\lambda |x|}$ to evaluate integrals on $[0, \\infty)$ and double them.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$|\\Psi(x,t)|^2 = A^2 e^{-2\\lambda |x|}$. By even symmetry:
$$1 = A^2 \\int_{-\\infty}^{\\infty} e^{-2\\lambda |x|} dx = 2A^2 \\int_0^{\\infty} e^{-2\\lambda x} dx = 2A^2 \\left[\\frac{1}{2\\lambda}\\right] = \\frac{A^2}{\\lambda} \\implies A = \\sqrt{\\lambda}$$</p>
<p><b>(b) Expectation Values:</b><br>
- $\\langle x \\rangle = \\int_{-\\infty}^\\infty x |\\Psi|^2 dx = 0$, because the integrand is odd.<br>
- $\\langle x^2 \\rangle = 2 \\lambda \\int_0^{\\infty} x^2 e^{-2\\lambda x} dx = 2\\lambda \\left(\\frac{2!}{(2\\lambda)^3}\\right) = \\frac{4\\lambda}{8\\lambda^3} = \\frac{1}{2\\lambda^2}$.</p>
<p><b>(c) Standard Deviation and Tail Probability:</b><br>
$$\\sigma_x = \\sqrt{\\langle x^2 \\rangle - \\langle x \\rangle^2} = \\frac{1}{\\sqrt{2}\\lambda}$$
The probability of finding the particle inside $[-\\sigma_x, \\sigma_x]$ is:
$$P(|x| \\le \\sigma_x) = 2 \\lambda \\int_0^{\\sigma_x} e^{-2\\lambda x} dx = 1 - e^{-2\\lambda \\sigma_x} = 1 - e^{-2\\lambda / (\\sqrt{2}\\lambda)} = 1 - e^{-\\sqrt{2}}$$
Therefore, the probability of finding the particle <i>outside</i> is:
$$P(|x| > \\sigma_x) = 1 - P(|x| \\le \\sigma_x) = e^{-\\sqrt{2}} \\approx e^{-1.4142} \\approx 0.2431 \\quad (24.3\\%)$$</p>`,
    trap: 'Forgetting the factor of 2 in the exponent when squaring: |e^{-lambda |x|}|^2 = e^{-2lambda |x|}, not e^{-lambda^2 x^2}.'
  },
  {
    id: 'q.qm1.m1.06',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.4',
    marks: 2,
    title: 'Time Independence of Stationary State Normalization',
    source: 'Griffiths 3e §1.4 Problem 1.6',
    prompt: `<p>For a stationary state of the form $\\Psi(x,t) = \\psi(x) e^{-i E t / \\hbar}$ (where $E$ is real), explain why the time-derivative of the normalization integral $\\frac{d}{dt}\\int_{-\\infty}^\\infty |\\Psi(x,t)|^2 dx = 0$ is trivially satisfied without needing the full machinery of the continuity equation.</p>`,
    tests: ['c.1.4.2'],
    approach: '<p>Evaluate the complex modulus squared $|\\Psi(x,t)|^2 = \\Psi^* \\Psi$ directly using Euler\'s identity or $(e^{-i\\theta})^* = e^{i\\theta}$.</p>',
    solution: `<p>We evaluate the probability density:
$$|\\Psi(x,t)|^2 = \\Psi^*(x,t)\\Psi(x,t) = \\left[\\psi^*(x)e^{+i E t / \\hbar}\\right] \\left[\\psi(x)e^{-i E t / \\hbar}\\right] = |\\psi(x)|^2 e^0 = |\\psi(x)|^2$$
Because $|\\Psi(x,t)|^2 = |\\psi(x)|^2$ has no explicit or implicit dependence on time $t$, the spatial integral $\\int_{-\\infty}^\\infty |\\psi(x)|^2 dx$ is a constant number. Differentiating a constant with respect to time yields zero identically:
$$\\frac{d}{dt} \\int_{-\\infty}^{\\infty} |\\Psi(x,t)|^2 \\, dx = \\frac{d}{dt} \\left[ \\text{constant} \\right] = 0$$</p>`,
    trap: 'Assuming E might be complex. If E has an imaginary part -iΓ, then e^{-i(E_0 - iΓ)t/ħ} = e^{-i E_0 t/ħ} e^{-Γ t/ħ}, and the probability decays exponentially.'
  },
  {
    id: 'q.qm1.m1.07',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.5',
    marks: 5,
    title: "Proof of Ehrenfest's Theorem for Momentum",
    source: 'Griffiths 3e §1.5 Problem 1.7',
    prompt: `<p>Starting from the definition of momentum expectation value $\\langle p \\rangle = m \\frac{d\\langle x \\rangle}{dt} = -i\\hbar \\int_{-\\infty}^\\infty \\Psi^* \\frac{\\partial \\Psi}{\\partial x} dx$ and the Time-Dependent Schrödinger Equation, prove <b>Ehrenfest's theorem for momentum</b>:
$$\\frac{d\\langle p \\rangle}{dt} = \\left\\langle -\\frac{\\partial V}{\\partial x} \\right\\rangle$$</p>`,
    tests: ['c.1.5.5', 'c.1.1.2'],
    approach: '<p>Differentiate $\\langle p \\rangle$ under the integral sign, replace $\\partial \\Psi/\\partial t$ with the TDSE, and integrate by parts to cancel the kinetic term.</p>',
    solution: `<p>Differentiate $\\langle p \\rangle$ with respect to time:
$$\\frac{d\\langle p \\rangle}{dt} = -i\\hbar \\int_{-\\infty}^{\\infty} \\left( \\frac{\\partial \\Psi^*}{\\partial t}\\frac{\\partial \\Psi}{\\partial x} + \\Psi^* \\frac{\\partial^2 \\Psi}{\\partial t \\partial x} \\right) dx$$
Integrate the second term by parts by shifting $\\partial/\\partial x$:
$$\\int_{-\\infty}^{\\infty} \\Psi^* \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial \\Psi}{\\partial t}\\right) dx = \\left[ \\Psi^* \\frac{\\partial \\Psi}{\\partial t} \\right]_{-\\infty}^{\\infty} - \\int_{-\\infty}^{\\infty} \\frac{\\partial \\Psi^*}{\\partial x}\\frac{\\partial \\Psi}{\\partial t} dx = -\\int_{-\\infty}^{\\infty} \\frac{\\partial \\Psi^*}{\\partial x}\\frac{\\partial \\Psi}{\\partial t} dx$$
Thus:
$$\\frac{d\\langle p \\rangle}{dt} = -i\\hbar \\int_{-\\infty}^{\\infty} \\left( \\frac{\\partial \\Psi^*}{\\partial t}\\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x}\\frac{\\partial \\Psi}{\\partial t} \\right) dx$$
From the TDSE: $\\frac{\\partial \\Psi}{\\partial t} = \\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} - \\frac{i}{\\hbar}V\\Psi$ and $\\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + \\frac{i}{\\hbar}V\\Psi^*$.<br>
The kinetic terms $\\frac{\\hbar^2}{2m}$ cancel out identically by integration by parts. The potential terms yield:
$$\\frac{d\\langle p \\rangle}{dt} = -i\\hbar \\int_{-\\infty}^{\\infty} \\left[ \\left(\\frac{i}{\\hbar}V\\Psi^*\\right)\\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x}\\left(-\\frac{i}{\\hbar}V\\Psi\\right) \\right] dx = \\int_{-\\infty}^{\\infty} V \\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} + \\frac{\\partial \\Psi^*}{\\partial x}\\Psi \\right) dx$$
Recognizing that $\\Psi^* \\frac{\\partial \\Psi}{\\partial x} + \\frac{\\partial \\Psi^*}{\\partial x}\\Psi = \\frac{\\partial}{\\partial x}(\\Psi^* \\Psi) = \\frac{\\partial |\\Psi|^2}{\\partial x}$, we integrate by parts once more:
$$\\frac{d\\langle p \\rangle}{dt} = \\int_{-\\infty}^{\\infty} V \\frac{\\partial |\\Psi|^2}{\\partial x} dx = \\left[ V|\\Psi|^2 \\right]_{-\\infty}^{\\infty} - \\int_{-\\infty}^{\\infty} \\frac{\\partial V}{\\partial x} |\\Psi|^2 dx = \\int_{-\\infty}^{\\infty} \\Psi^* \\left(-\\frac{\\partial V}{\\partial x}\\right) \\Psi \\, dx = \\left\\langle -\\frac{\\partial V}{\\partial x} \\right\\rangle$$</p>`,
    trap: 'Omitting the boundary term justification or failing to recognize the product rule contraction (Ψ* ∂Ψ/∂x + Ψ ∂Ψ*/∂x) = ∂|Ψ|²/∂x.'
  },
  {
    id: 'q.qm1.m1.08',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.5',
    marks: 4,
    title: 'Kinetic Energy Expectation Value and Positivity',
    source: 'Griffiths 3e §1.5 Problem 1.8',
    prompt: `<p>The kinetic energy operator is $\\hat{T} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2}$, so $\\langle T \\rangle = -\\frac{\\hbar^2}{2m} \\int_{-\\infty}^\\infty \\Psi^* \\frac{\\partial^2 \\Psi}{\\partial x^2} dx$.</p>
<p>(a) Using integration by parts, show that $\\langle T \\rangle = \\frac{\\hbar^2}{2m} \\int_{-\\infty}^\\infty \\left| \\frac{\\partial \\Psi}{\\partial x} \\right|^2 dx$.<br>
(b) Explain why this guarantees $\\langle T \\rangle \\ge 0$ for all physical states.</p>`,
    tests: ['c.1.5.3'],
    approach: '<p>Integrate by parts with $u = \\Psi^*$ and $dv = \\frac{\\partial^2 \\Psi}{\\partial x^2}dx$. Note that the boundary term vanishes for square-integrable states.</p>',
    solution: `<p><b>(a) Integration by Parts:</b><br>
Let $u = \\Psi^*$ and $dv = \\frac{\\partial^2 \\Psi}{\\partial x^2} dx$, so $du = \\frac{\\partial \\Psi^*}{\\partial x} dx$ and $v = \\frac{\\partial \\Psi}{\\partial x}$:
$$\\int_{-\\infty}^{\\infty} \\Psi^* \\frac{\\partial^2 \\Psi}{\\partial x^2} dx = \\left[ \\Psi^* \\frac{\\partial \\Psi}{\\partial x} \\right]_{-\\infty}^{\\infty} - \\int_{-\\infty}^{\\infty} \\frac{\\partial \\Psi^*}{\\partial x}\\frac{\\partial \\Psi}{\\partial x} dx$$
For any normalizable wave function, $\\Psi \\to 0$ and $\\frac{\\partial \\Psi}{\\partial x} \\to 0$ as $x \\to \\pm\\infty$, so the boundary bracket is zero.<br>
Since $\\frac{\\partial \\Psi^*}{\\partial x}\\frac{\\partial \\Psi}{\\partial x} = \\left| \\frac{\\partial \\Psi}{\\partial x} \\right|^2$:
$$\\langle T \\rangle = -\\frac{\\hbar^2}{2m} \\left( -\\int_{-\\infty}^{\\infty} \\left| \\frac{\\partial \\Psi}{\\partial x} \\right|^2 dx \\right) = \\frac{\\hbar^2}{2m} \\int_{-\\infty}^{\\infty} \\left| \\frac{\\partial \\Psi}{\\partial x} \\right|^2 dx$$</p>
<p><b>(b) Positivity:</b><br>
Since $\\hbar, m > 0$ and the integrand $\\left|\\frac{\\partial \\Psi}{\\partial x}\\right|^2 \\ge 0$ is strictly non-negative everywhere, its integral cannot be negative. Therefore:
$$\\langle T \\rangle \\ge 0$$
Physical kinetic energy is always non-negative in quantum mechanics.</p>`,
    trap: 'Looking at -ħ²/(2m) and mistakenly thinking the minus sign makes the expectation value negative; the second spatial derivative provides an opposing minus sign upon integration by parts.'
  },
  {
    id: 'q.qm1.m1.09',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.6',
    marks: 6,
    title: 'Minimum Uncertainty of a Gaussian Wave Packet',
    source: 'Griffiths 3e §1.6 Problem 1.9',
    prompt: `<p>A particle is in the Gaussian wave packet state $\\Psi(x,0) = A e^{-a x^2}$, where $A$ and $a$ are positive real constants.</p>
<p>(a) Normalize the state to find $A$.<br>
(b) Calculate $\\langle x \\rangle, \\langle x^2 \\rangle, \\langle p \\rangle$, and $\\langle p^2 \\rangle$.<br>
(c) Compute $\\sigma_x$ and $\\sigma_p$, and verify that this state achieves the minimum uncertainty bound $\\sigma_x \\sigma_p = \\frac{\\hbar}{2}$.</p>`,
    tests: ['c.1.6.1', 'c.1.4.1', 'c.1.5.2', 'c.1.3.3'],
    approach: '<p>Use standard Gaussian definite integrals: $\\int e^{-2ax^2} dx = \\sqrt{\\pi/(2a)}$ and $\\int x^2 e^{-2ax^2} dx = \\frac{1}{4a}\\sqrt{\\pi/(2a)}$. For $\\langle p^2 \\rangle$, use $\\langle p^2 \\rangle = 2m\\langle T \\rangle = \\hbar^2 \\int |\\partial \\Psi/\\partial x|^2 dx$.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$$1 = |A|^2 \\int_{-\\infty}^{\\infty} e^{-2a x^2} dx = |A|^2 \\sqrt{\\frac{\\pi}{2a}} \\implies A = \\left(\\frac{2a}{\\pi}\\right)^{1/4}$$</p>
<p><b>(b) Position and Momentum Expectation Values:</b><br>
- By symmetry (odd integrands): $\\langle x \\rangle = 0$ and $\\langle p \\rangle = 0$ (since $\\Psi$ is real).<br>
- $\\langle x^2 \\rangle = A^2 \\int_{-\\infty}^{\\infty} x^2 e^{-2a x^2} dx = A^2 \\frac{1}{4a}\\sqrt{\\frac{\\pi}{2a}} = \\frac{1}{4a}$.<br>
- For $\\langle p^2 \\rangle$, differentiate $\\Psi$: $\\frac{d\\Psi}{dx} = -2ax \\Psi$.
$$\\langle p^2 \\rangle = \\hbar^2 \\int_{-\\infty}^{\\infty} \\left|\\frac{d\\Psi}{dx}\\right|^2 dx = 4a^2 \\hbar^2 \\int_{-\\infty}^{\\infty} x^2 |\\Psi|^2 dx = 4a^2 \\hbar^2 \\langle x^2 \\rangle = 4a^2 \\hbar^2 \\left(\\frac{1}{4a}\\right) = a\\hbar^2$$</p>
<p><b>(c) Uncertainty Product:</b><br>
$$\\sigma_x = \\sqrt{\\langle x^2 \\rangle - \\langle x \\rangle^2} = \\sqrt{\\frac{1}{4a}} = \\frac{1}{2\\sqrt{a}}$$
$$\\sigma_p = \\sqrt{\\langle p^2 \\rangle - \\langle p \\rangle^2} = \\sqrt{a\\hbar^2} = \\hbar \\sqrt{a}$$
Multiply the two uncertainties:
$$\\sigma_x \\sigma_p = \\left(\\frac{1}{2\\sqrt{a}}\\right) (\\hbar \\sqrt{a}) = \\frac{\\hbar}{2}$$
The Gaussian wave packet achieves the absolute theoretical minimum uncertainty!</p>`,
    trap: 'Plugging in e^{-ax^2} into the integral without squaring the wave function (which gives e^{-2ax^2}).'
  },
  {
    id: 'q.qm1.m1.10',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.3',
    marks: 3,
    title: 'Probability Distribution: Removing One Item',
    source: 'Griffiths 3e §1.3 Problem 1.10',
    prompt: `<p>In the age distribution of Problem 1.1 (ages 14, 15, 16(3), 22(2), 24(2), 25(5); $N = 14$, $\\langle j \\rangle = 21$), suppose you remove one person. What age person could you remove such that the average age $\\langle j \\rangle$ remains exactly 21? What happens to the variance $\\sigma^2$ when you do so?</p>`,
    tests: ['c.1.3.1', 'c.1.3.3'],
    approach: '<p>Equate the new mean $(S - j_{rem}) / (N - 1)$ to the old mean $S/N = 21$. Then recompute the variance with $N = 13$.</p>',
    solution: `<p>The new mean is:
$$\\langle j \\rangle_{\\text{new}} = \\frac{\\sum j - j_{\\text{rem}}}{N - 1} = \\frac{294 - j_{\\text{rem}}}{13}$$
Setting this equal to $21$:
$$294 - j_{\\text{rem}} = 13 \\times 21 = 273 \\implies j_{\\text{rem}} = 294 - 273 = 21$$
However, <b>there is no person of age 21 in the room!</b> Therefore, it is impossible to remove any single individual without shifting the average age.<br>
If there <i>had</i> been a 21-year-old, removing someone at the mean would remove a term with zero deviation $(21 - 21)^2 = 0$, causing the variance $\\sigma^2 = \\frac{1}{N-1}\\sum (j - \\mu)^2$ to increase because the sum of squared deviations is divided by a smaller denominator ($13$ instead of $14$).</p>`,
    trap: 'Thinking you can remove someone whose age is the average when that age does not actually exist in the population.'
  },
  {
    id: 'q.qm1.m1.11',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.3',
    marks: 4,
    title: 'Angular Distribution of a Dropped Needle',
    source: 'Griffiths 3e §1.3 Problem 1.11',
    prompt: `<p>A needle is dropped randomly on a horizontal table. The angle $\\theta$ it makes with a fixed reference line is uniformly distributed between $-\\pi/2$ and $+\\pi/2$.</p>
<p>(a) Determine the probability density $\\rho(\\theta)$.<br>
(b) Find $\\langle \\theta \\rangle$, $\\langle \\theta^2 \\rangle$, and the standard deviation $\\sigma_\\theta$.<br>
(c) Find $\\langle \\sin \\theta \\rangle$ and $\\langle \\cos \\theta \\rangle$.</p>`,
    tests: ['c.1.3.2', 'c.1.3.3'],
    approach: '<p>The total angular span is $\\pi$. A uniform distribution gives $\\rho(\\theta) = 1/\\pi$. Integrate trigonometric functions over $[-\\pi/2, \\pi/2]$.</p>',
    solution: `<p><b>(a) Probability Density:</b><br>
Since $\\theta$ is uniformly distributed on $[-\\pi/2, \\pi/2]$ of width $\\pi$:
$$\\rho(\\theta) = \\frac{1}{\\pi} \\quad \\text{for } -\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$$</p>
<p><b>(b) Statistical Moments:</b><br>
- $\\langle \\theta \\rangle = \\int_{-\\pi/2}^{\\pi/2} \\theta \\left(\\frac{1}{\\pi}\\right) d\\theta = 0$ (odd function).<br>
- $\\langle \\theta^2 \\rangle = \\frac{1}{\\pi} \\int_{-\\pi/2}^{\\pi/2} \\theta^2 d\\theta = \\frac{1}{\\pi} \\left[\\frac{\\theta^3}{3}\\right]_{-\\pi/2}^{\\pi/2} = \\frac{2}{\\pi} \\frac{\\pi^3}{24} = \\frac{\\pi^2}{12}$.<br>
- $\\sigma_\\theta = \\sqrt{\\langle \\theta^2 \\rangle - \\langle \\theta \\rangle^2} = \\frac{\\pi}{\\sqrt{12}} = \\frac{\\pi}{2\\sqrt{3}} \\approx 0.907 \\text{ rad}$.</p>
<p><b>(c) Trigonometric Expectation Values:</b><br>
- $\\langle \\sin \\theta \\rangle = \\frac{1}{\\pi} \\int_{-\\pi/2}^{\\pi/2} \\sin \\theta \\, d\\theta = 0$ (odd function).<br>
- $\\langle \\cos \\theta \\rangle = \\frac{1}{\\pi} \\int_{-\\pi/2}^{\\pi/2} \\cos \\theta \\, d\\theta = \\frac{1}{\\pi} [\\sin \\theta]_{-\\pi/2}^{\\pi/2} = \\frac{1 - (-1)}{\\pi} = \\frac{2}{\\pi} \\approx 0.637$.</p>`,
    trap: 'Assuming ⟨cos θ⟩ = cos ⟨θ⟩ = cos(0) = 1. The expectation value of a non-linear function ⟨f(x)⟩ is generally NOT equal to f(⟨x⟩)!'
  },
  {
    id: 'q.qm1.m1.12',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.3',
    marks: 4,
    title: 'Radial Probability Distribution in a Sphere',
    source: 'Griffiths 3e §1.3 Problem 1.12',
    prompt: `<p>A point is chosen uniformly at random inside a solid sphere of radius $R$.</p>
<p>(a) Find the probability density $\\rho(r)$ for the distance $r$ from the center of the sphere ($0 \\le r \\le R$).<br>
(b) Calculate $\\langle r \\rangle$, $\\langle r^2 \\rangle$, and the standard deviation $\\sigma_r$.</p>`,
    tests: ['c.1.3.2', 'c.1.3.3'],
    approach: '<p>The volume of a thin spherical shell of radius $r$ and thickness $dr$ is $dV = 4\\pi r^2 dr$. The probability of falling in that shell is $dV/V_{\\text{total}}$.</p>',
    solution: `<p><b>(a) Probability Density:</b><br>
The total volume of the sphere is $V = \\frac{4}{3}\\pi R^3$. The volume of a shell between $r$ and $r+dr$ is $dV = 4\\pi r^2 dr$.
$$dP = \\frac{dV}{V} = \\frac{4\\pi r^2 dr}{\\frac{4}{3}\\pi R^3} = \\frac{3r^2}{R^3} dr \\implies \\rho(r) = \\frac{3r^2}{R^3} \\quad (0 \\le r \\le R)$$
Check normalization: $\\int_0^R \\frac{3r^2}{R^3} dr = \\left[\\frac{r^3}{R^3}\\right]_0^R = 1$.</p>
<p><b>(b) Expectation Values and Spread:</b><br>
$$\\langle r \\rangle = \\int_0^R r \\left(\\frac{3r^2}{R^3}\\right) dr = \\frac{3}{R^3} \\int_0^R r^3 dr = \\frac{3}{R^3} \\frac{R^4}{4} = \\frac{3}{4}R$$
$$\\langle r^2 \\rangle = \\int_0^R r^2 \\left(\\frac{3r^2}{R^3}\\right) dr = \\frac{3}{R^3} \\int_0^R r^4 dr = \\frac{3}{R^3} \\frac{R^5}{5} = \\frac{3}{5}R^2$$
$$\\sigma_r^2 = \\langle r^2 \\rangle - \\langle r \\rangle^2 = \\frac{3}{5}R^2 - \\left(\\frac{3}{4}R\\right)^2 = \\left(\\frac{3}{5} - \\frac{9}{16}\\right)R^2 = \\frac{48 - 45}{80}R^2 = \\frac{3}{80}R^2$$
$$\\sigma_r = \\sqrt{\\frac{3}{80}} R = \\frac{\\sqrt{15}}{20} R \\approx 0.1936 R$$</p>`,
    trap: 'Assuming the average radius is R/2. Because spherical volume grows as r², most points are concentrated near the outer shell, shifting ⟨r⟩ to (3/4)R.'
  },
  {
    id: 'q.qm1.m1.14',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.5',
    marks: 4,
    title: 'Probability Current of Stationary and Real States',
    source: 'Griffiths 3e §1.5 Problem 1.14',
    prompt: `<p>(a) For a stationary state $\\Psi(x,t) = \\psi(x) e^{-i E t / \\hbar}$, show that the probability current density $J(x,t)$ is independent of time.<br>
(b) Prove that for any bound state with a purely real spatial wave function $\\psi(x) = \\psi^*(x)$, the probability current density is identically zero: $J(x) = 0$.<br>
(c) Calculate $J(x,t)$ for a plane wave $\\Psi(x,t) = A e^{i(kx - \\omega t)}$ and interpret the result.</p>`,
    tests: ['c.1.5.4'],
    approach: '<p>Substitute the states into $J = \\frac{\\hbar}{2mi}(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x})$.</p>',
    solution: `<p><b>(a) Time Independence:</b><br>
Substitute $\\Psi(x,t) = \\psi(x) e^{-i E t / \\hbar}$:
$$\\frac{\\partial \\Psi}{\\partial x} = \\frac{d\\psi}{dx} e^{-i E t / \\hbar}, \\quad \\Psi^*(x,t) = \\psi^*(x) e^{+i E t / \\hbar}, \\quad \\frac{\\partial \\Psi^*}{\\partial x} = \\frac{d\\psi^*}{dx} e^{+i E t / \\hbar}$$
$$J = \\frac{\\hbar}{2mi} \\left( \\psi^* e^{+i E t / \\hbar} \\frac{d\\psi}{dx} e^{-i E t / \\hbar} - \\psi e^{-i E t / \\hbar} \\frac{d\\psi^*}{dx} e^{+i E t / \\hbar} \\right) = \\frac{\\hbar}{2mi}\\left( \\psi^* \\frac{d\\psi}{dx} - \\psi \\frac{d\\psi^*}{dx} \\right)$$
All time-dependent exponential phase factors cancel, so $J(x)$ is purely independent of time.</p>
<p><b>(b) Vanishing Current for Real States:</b><br>
If $\\psi(x)$ is real, then $\\psi^*(x) = \\psi(x)$ and $d\\psi^*/dx = d\\psi/dx$:
$$J = \\frac{\\hbar}{2mi}\\left( \\psi \\frac{d\\psi}{dx} - \\psi \\frac{d\\psi}{dx} \\right) = \\frac{\\hbar}{2mi}(0) = 0$$
Thus, in any real standing wave (such as infinite square well eigenstates), there is zero net flow of probability.</p>
<p><b>(c) Plane Wave Current:</b><br>
For $\\Psi(x,t) = A e^{i(kx - \\omega t)}$:
$$\\frac{\\partial \\Psi}{\\partial x} = ik A e^{i(kx - \\omega t)}, \\quad \\Psi^* = A^* e^{-i(kx - \\omega t)}, \\quad \\frac{\\partial \\Psi^*}{\\partial x} = -ik A^* e^{-i(kx - \\omega t)}$$
$$J = \\frac{\\hbar}{2mi} \\left[ |A|^2 (ik) - |A|^2 (-ik) \\right] = \\frac{\\hbar}{2mi} (2ik |A|^2) = \\frac{\\hbar k}{m} |A|^2$$
Since $\\hbar k / m = p/m = v$ is the classical velocity, $J = v |A|^2 = v \\rho$. The probability flux equals density times velocity, perfectly matching the classical fluid continuity equation $J = \\rho v$!</p>`,
    trap: 'Confusing stationary state (J is constant in time) with static state (J = 0). A plane wave is stationary, but its probability current J = ħk|A|²/m is non-zero.'
  },
  {
    id: 'q.qm1.m1.15',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.5',
    marks: 6,
    title: 'Parabolic Wave Function and Uncertainty Verification',
    source: 'Griffiths 3e §1.5 Problem 1.15',
    prompt: `<p>A particle is described by the inverted parabolic wave function:
$$\\Psi(x,0) = \\begin{cases} A(a^2 - x^2), & -a \\le x \\le a \\\\[4pt] 0, & \\text{otherwise} \\end{cases}$$
where $A$ and $a$ are real constants.</p>
<p>(a) Determine the normalization constant $A$.<br>
(b) Calculate $\\langle x \\rangle, \\langle x^2 \\rangle, \\langle p \\rangle$, and $\\langle p^2 \\rangle$.<br>
(c) Find $\\sigma_x$ and $\\sigma_p$, and verify that $\\sigma_x \\sigma_p > \\hbar/2$.</p>`,
    tests: ['c.1.4.1', 'c.1.5.2', 'c.1.6.1', 'c.1.3.3'],
    approach: '<p>Use even symmetry to evaluate $\\int_{-a}^a (a^2-x^2)^2 dx$. For momentum, remember $\\Psi(x)$ is real, so $\\langle p \\rangle = 0$, and use $\\langle p^2 \\rangle = \\hbar^2 \\int |d\\Psi/dx|^2 dx$.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$$1 = 2A^2 \\int_0^a (a^4 - 2a^2 x^2 + x^4) dx = 2A^2 \\left[ a^5 - \\frac{2}{3}a^5 + \\frac{1}{5}a^5 \\right] = 2A^2 a^5 \\left(\\frac{8}{15}\\right) = \\frac{16}{15}A^2 a^5 \\implies A = \\sqrt{\\frac{15}{16a^5}}$$</p>
<p><b>(b) Expectation Values:</b><br>
- By symmetry: $\\langle x \\rangle = 0$, and since $\\Psi$ is real, $\\langle p \\rangle = 0$.<br>
- $\\langle x^2 \\rangle = 2A^2 \\int_0^a x^2 (a^2 - x^2)^2 dx = 2A^2 \\int_0^a (a^4 x^2 - 2a^2 x^4 + x^6) dx = 2A^2 a^7 \\left(\\frac{1}{3} - \\frac{2}{5} + \\frac{1}{7}\\right) = 2\\left(\\frac{15}{16a^5}\\right)a^7 \\left(\\frac{8}{105}\\right) = \\frac{a^2}{7}$.<br>
- For $\\langle p^2 \\rangle$: $\\frac{d\\Psi}{dx} = -2Ax$ for $x \\in [-a,a]$.
$$\\langle p^2 \\rangle = \\hbar^2 \\int_{-a}^a \\left|\\frac{d\\Psi}{dx}\\right|^2 dx = 4 A^2 \\hbar^2 \\int_{-a}^a x^2 dx = 8 A^2 \\hbar^2 \\frac{a^3}{3} = 8\\left(\\frac{15}{16a^5}\\right)\\hbar^2 \\frac{a^3}{3} = \\frac{5\\hbar^2}{2a^2}$$</p>
<p><b>(c) Uncertainty Verification:</b><br>
$$\\sigma_x = \\sqrt{\\langle x^2 \\rangle} = \\frac{a}{\\sqrt{7}}, \\quad \\sigma_p = \\sqrt{\\langle p^2 \\rangle} = \\sqrt{\\frac{5}{2}} \\frac{\\hbar}{a}$$
$$\\sigma_x \\sigma_p = \\left(\\frac{a}{\\sqrt{7}}\\right) \\left(\\sqrt{\\frac{5}{2}}\\frac{\\hbar}{a}\\right) = \\sqrt{\\frac{5}{14}} \\hbar \\approx 0.5976 \\hbar$$
Since $\\frac{1}{2}\\hbar = 0.5000 \\hbar$ and $0.5976 > 0.5$, we have:
$$\\sigma_x \\sigma_p > \\frac{\\hbar}{2}$$
which satisfies the Heisenberg uncertainty inequality (with strict inequality, as this is parabolic rather than Gaussian).</p>`,
    trap: 'Computing d²Ψ/dx² directly without boundary care. At x = ±a, dΨ/dx jumps discontinuously from ∓2Aa to 0, which would introduce delta functions if differentiated twice. Using ∫ |dΨ/dx|² dx avoids this subtlety cleanly.'
  },
  {
    id: 'q.qm1.m1.16',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.6',
    marks: 5,
    title: 'Wave Packet Spreading of a Free Particle',
    source: 'Griffiths 3e §1.6 Problem 1.16',
    prompt: `<p>A free particle ($V=0$) of mass $m$ is initially in a Gaussian wave packet with initial width $\\sigma_0 = \\sigma_x(0) = 1/\\sqrt{2a}$. As time evolves, dispersion causes the wave packet to spread:
$$\\sigma_x(t) = \\sqrt{\\sigma_0^2 + \\left(\\frac{\\hbar t}{2m\\sigma_0}\\right)^2}$$</p>
<p>(a) For an electron ($m \\approx 9.11 \\times 10^{-31}\\text{ kg}$) initially localized to an atomic diameter $\\sigma_0 = 10^{-10}\\text{ m}$, calculate the time $t$ required for its width to double.<br>
(b) For a macroscopic dust grain ($m = 10^{-6}\\text{ g} = 10^{-9}\\text{ kg}$) with $\\sigma_0 = 10^{-6}\\text{ m}$, find the time required for its width to double. What does this teach us about classical versus quantum mechanics?</p>`,
    tests: ['c.1.6.1', 'c.1.1.2'],
    approach: '<p>Width doubles when $\\sigma_x(t) = 2\\sigma_0 \\implies \\sigma_0^2 + (\\frac{\\hbar t}{2m\\sigma_0})^2 = 4\\sigma_0^2 \\implies t = \\frac{2\\sqrt{3} m \\sigma_0^2}{\\hbar}$. Plug in values.</p>',
    solution: `<p><b>(a) Electron Spreading Time:</b><br>
Setting $\\sigma(t) = 2\\sigma_0$:
$$4\\sigma_0^2 = \\sigma_0^2 + \\left(\\frac{\\hbar t}{2m\\sigma_0}\\right)^2 \\implies \\frac{\\hbar t}{2m\\sigma_0} = \\sqrt{3}\\sigma_0 \\implies t = \\frac{2\\sqrt{3} m \\sigma_0^2}{\\hbar}$$
For an electron with $m = 9.109 \\times 10^{-31}\\text{ kg}$ and $\\sigma_0 = 10^{-10}\\text{ m}$:
$$t = \\frac{2\\sqrt{3} (9.109 \\times 10^{-31}) (10^{-10})^2}{1.0546 \\times 10^{-34}} \\approx \\frac{3.155 \\times 10^{-50}}{1.0546 \\times 10^{-34}} \\approx 3.0 \\times 10^{-16} \\text{ s}$$
The electron wave packet doubles in size in less than a femtosecond!</p>
<p><b>(b) Macroscopic Dust Grain Spreading Time:</b><br>
For $m = 10^{-9}\\text{ kg}$ and $\\sigma_0 = 10^{-6}\\text{ m}$:
$$t = \\frac{2\\sqrt{3} (10^{-9}) (10^{-6})^2}{1.0546 \\times 10^{-34}} = \\frac{3.464 \\times 10^{-21}}{1.0546 \\times 10^{-34}} \\approx 3.28 \\times 10^{13} \\text{ s} \\approx 10^6 \\text{ years!}$$
<b>Conclusion:</b> Because $\\hbar$ is tiny and macroscopic masses $m$ are immense by comparison, quantum wave packet spreading is undetectable for everyday objects over human timescales, explaining why macroscopic classical trajectories appear sharp and permanent.</p>`,
    trap: 'Using the mass in grams instead of kilograms in SI units (1 g = 10^{-3} kg).'
  },
  {
    id: 'q.qm1.m1.17',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.4',
    marks: 5,
    title: 'Complex Potential and Radioactive Decay',
    source: 'Griffiths 3e §1.4 Problem 1.17',
    prompt: `<p>Suppose the potential energy $V(x)$ is complex: $V(x) = V_0(x) - i\\Gamma$, where $V_0(x)$ and $\\Gamma > 0$ are real constants.</p>
<p>(a) Show that the total probability $P(t) = \\int_{-\\infty}^\\infty |\\Psi(x,t)|^2 dx$ is no longer constant in time, but obeys:
$$\\frac{dP}{dt} = -\\frac{2\\Gamma}{\\hbar} P$$
(b) Solve for $P(t)$ and deduce the mean lifetime $\\tau$ of the state.</p>`,
    tests: ['c.1.4.2'],
    approach: '<p>Repeat the proof of preservation of normalization, retaining the imaginary part of $V$ where $V^* = V_0 + i\\Gamma \\ne V$.</p>',
    solution: `<p><b>(a) Derivation of Rate of Decay:</b><br>
From the TDSE:
$$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} + (V_0 - i\\Gamma)\\Psi \\implies \\frac{\\partial \\Psi}{\\partial t} = \\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} - \\frac{i}{\\hbar}V_0\\Psi - \\frac{\\Gamma}{\\hbar}\\Psi$$
Taking the complex conjugate:
$$-i\\hbar \\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + (V_0 + i\\Gamma)\\Psi^* \\implies \\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + \\frac{i}{\\hbar}V_0\\Psi^* - \\frac{\\Gamma}{\\hbar}\\Psi^*$$
Now compute $\\frac{\\partial |\\Psi|^2}{\\partial t} = \\Psi^* \\frac{\\partial \\Psi}{\\partial t} + \\frac{\\partial \\Psi^*}{\\partial t}\\Psi$:
$$\\frac{\\partial |\\Psi|^2}{\\partial t} = -\\frac{\\partial J}{\\partial x} - \\frac{2\\Gamma}{\\hbar}|\\Psi|^2$$
Integrate over all space (the divergence term $\\int \\frac{\\partial J}{\\partial x} dx = [J]_{-\\infty}^\\infty = 0$ vanishes):
$$\\frac{dP}{dt} = \\int_{-\\infty}^{\\infty} \\frac{\\partial |\\Psi|^2}{\\partial t} dx = -\\frac{2\\Gamma}{\\hbar} \\int_{-\\infty}^{\\infty} |\\Psi|^2 dx = -\\frac{2\\Gamma}{\\hbar} P$$</p>
<p><b>(b) Exponential Decay and Lifetime:</b><br>
Separating variables and integrating gives radioactive decay:
$$P(t) = P(0) e^{-2\\Gamma t / \\hbar}$$
The probability decays with a characteristic decay constant $\\lambda_{\\text{decay}} = 2\\Gamma/\\hbar$. The mean lifetime $\\tau$ is:
$$\\tau = \\frac{1}{\\lambda_{\\text{decay}}} = \\frac{\\hbar}{2\\Gamma}$$
This shows how complex optical potentials phenomenologically model particle absorption and unstable resonance decay!</p>`,
    trap: 'Forgetting the factor of 2 in 2Γ/ħ. Both Ψ and Ψ* contribute a decay factor -Γ/ħ, adding up to -2Γ/ħ for |Ψ|².'
  },
  {
    id: 'q.qm1.m1.18',
    course: 'qm1',
    module: 'qm1.m1',
    sec: '1.6',
    marks: 6,
    title: 'General Proof of the Uncertainty Principle',
    source: 'Griffiths 3e §1.6 Problem 1.18 & Zettili 2e §2.5',
    prompt: `<p>For any two Hermitian operators $\\hat{A}$ and $\\hat{B}$, prove the generalized uncertainty relation:
$$\\sigma_A \\sigma_B \\ge \\frac{1}{2} |\\langle [\\hat{A}, \\hat{B}] \\rangle|$$
and deduce the position-momentum uncertainty principle $\\sigma_x \\sigma_p \\ge \\hbar/2$ as a special case.</p>`,
    tests: ['c.1.6.1', 'c.1.5.3'],
    approach: '<p>Define shifted operators $\\Delta \\hat{A} = \\hat{A} - \\langle A \\rangle$ and $\\Delta \\hat{B} = \\hat{B} - \\langle B \\rangle$, apply the Cauchy-Schwarz inequality $|\\langle f | g \\rangle|^2 \\le \\langle f|f\\rangle \\langle g|g\\rangle$ to $|f\\rangle = \\Delta \\hat{A}|\\Psi\\rangle$ and $|g\\rangle = \\Delta \\hat{B}|\\Psi\\rangle$, and split the inner product into Hermitian and anti-Hermitian parts.</p>',
    solution: `<p>Let $|f\\rangle = (\\hat{A} - \\langle A \\rangle)|\\Psi\\rangle$ and $|g\\rangle = (\\hat{B} - \\langle B \\rangle)|\\Psi\\rangle$.<br>
By the Cauchy-Schwarz inequality in Hilbert space:
$$\\sigma_A^2 \\sigma_B^2 = \\langle f | f \\rangle \\langle g | g \\rangle \\ge |\\langle f | g \\rangle|^2$$
Evaluate the inner product $\\langle f | g \\rangle$:
$$\\langle f | g \\rangle = \\langle \\Psi | (\\hat{A} - \\langle A \\rangle)(\\hat{B} - \\langle B \\rangle) | \\Psi \\rangle = \\langle \\Delta \\hat{A} \\Delta \\hat{B} \\rangle$$
Any complex number $z = \\langle f|g \\rangle$ can be written as $z = \\text{Re}(z) + i \\text{Im}(z)$, so $|z|^2 = (\\text{Re} z)^2 + (\\text{Im} z)^2 \\ge (\\text{Im} z)^2 = \\left(\\frac{z - z^*}{2i}\\right)^2$.<br>
Note that:
$$\\langle f | g \\rangle^* = \\langle g | f \\rangle = \\langle \\Delta \\hat{B} \\Delta \\hat{A} \\rangle$$
Therefore:
$$\\frac{\\langle f | g \\rangle - \\langle f | g \\rangle^*}{2i} = \\frac{\\langle \\Delta \\hat{A} \\Delta \\hat{B} - \\Delta \\hat{B} \\Delta \\hat{A} \\rangle}{2i} = \\frac{\\langle [\\Delta \\hat{A}, \\Delta \\hat{B}] \\rangle}{2i} = \\frac{\\langle [\\hat{A}, \\hat{B}] \\rangle}{2i}$$
(since constants commute with all operators).<br>
Substituting back into the Cauchy-Schwarz inequality:
$$\\sigma_A^2 \\sigma_B^2 \\ge \\left| \\frac{\\langle [\\hat{A}, \\hat{B}] \\rangle}{2i} \\right|^2 = \\frac{1}{4} |\\langle [\\hat{A}, \\hat{B}] \\rangle|^2$$
Taking the positive square root on both sides:
$$\\sigma_A \\sigma_B \\ge \\frac{1}{2} |\\langle [\\hat{A}, \\hat{B}] \\rangle|$$
<b>Special Case for Position and Momentum:</b><br>
Set $\\hat{A} = \\hat{x}$ and $\\hat{B} = \\hat{p}$. Since $[\\hat{x}, \\hat{p}] = i\\hbar$:
$$|\\langle [\\hat{x}, \\hat{p}] \\rangle| = |i\\hbar| = \\hbar \\implies \\sigma_x \\sigma_p \\ge \\frac{1}{2}\\hbar = \\frac{\\hbar}{2}$$</p>`,
    trap: 'Forgetting that (Re z)² ≥ 0 can only be discarded as an inequality, which is why the relation is a lower bound (≥), not an equality.'
  }
);
