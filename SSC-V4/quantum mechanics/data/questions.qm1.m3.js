/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module III — Written Exercises (Zettili 2e & Griffiths 3e)
   Total Questions: 15 (worked step-by-step solutions)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'q.qm1.m3.01',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.1',
    marks: 4,
    title: 'Bra-Ket Algebra, Inner Product and Cauchy-Schwarz Inequality',
    source: 'Zettili 2e §2.2 & Problem 2.1',
    prompt: `<p>Consider two state vectors in a two-dimensional Hilbert space spanned by the orthonormal basis $\{|1\\rangle, |2\\rangle\}$:
$$|\\psi\\rangle = \\frac{1}{\\sqrt{3}}|1\\rangle + i\\sqrt{\\frac{2}{3}}|2\\rangle, \\qquad |\\phi\\rangle = \\frac{2}{\\sqrt{5}}|1\\rangle - \\frac{1}{\\sqrt{5}}|2\\rangle$$
(a) Calculate the inner products $\\langle \\psi|\\phi\\rangle$ and $\\langle \\phi|\\psi\\rangle$, and verify that $\\langle \\phi|\\psi\\rangle = \\langle \\psi|\\phi\\rangle^*$.<br>
(b) Verify the Cauchy-Schwarz inequality $|\\langle \\psi|\\phi\\rangle|^2 \\le \\langle \\psi|\\psi\\rangle \\langle \\phi|\\phi\\rangle$.<br>
(c) Construct the projection operator $\\hat{P}_\\psi = |\\psi\\rangle\\langle \\psi|$ in matrix form in the $\{|1\\rangle, |2\\rangle\}$ basis.</p>`,
    tests: ['c.3.1.2', 'c.3.1.3'],
    approach: '<p>Express bras by taking complex conjugates of amplitudes and transposing. Use orthonormality $\\langle i|j\\rangle = \\delta_{ij}$. Form outer product $|\psi\\rangle\\langle\\psi|$ by column times row multiplication.</p>',
    solution: `<p><b>(a) Inner Products:</b><br>
The bra $\\langle \\psi|$ is:
$$\\langle \\psi| = \\frac{1}{\\sqrt{3}}\\langle 1| - i\\sqrt{\\frac{2}{3}}\\langle 2|$$
Taking the inner product with $|\\phi\\rangle$:
$$\\langle \\psi|\\phi\\rangle = \\left(\\frac{1}{\\sqrt{3}}\\langle 1| - i\\sqrt{\\frac{2}{3}}\\langle 2|\\right)\\left(\\frac{2}{\\sqrt{5}}|1\\rangle - \\frac{1}{\\sqrt{5}}|2\\rangle\\right)$$
Using $\\langle 1|1\\rangle = \\langle 2|2\\rangle = 1$ and $\\langle 1|2\\rangle = \\langle 2|1\\rangle = 0$:
$$\\langle \\psi|\\phi\\rangle = \\frac{1}{\\sqrt{3}}\\frac{2}{\\sqrt{5}} + \\left(-i\\sqrt{\\frac{2}{3}}\\right)\\left(-\\frac{1}{\\sqrt{5}}\\right) = \\frac{2 + i\\sqrt{2}}{\\sqrt{15}}$$
Similarly, computing $\\langle \\phi|\\psi\\rangle$:
$$\\langle \\phi|\\psi\\rangle = \\left(\\frac{2}{\\sqrt{5}}\\langle 1| - \\frac{1}{\\sqrt{5}}\\langle 2|\\right)\\left(\\frac{1}{\\sqrt{3}}|1\\rangle + i\\sqrt{\\frac{2}{3}}|2\\rangle\\right) = \\frac{2 - i\\sqrt{2}}{\\sqrt{15}}$$
Clearly, $\\langle \\phi|\\psi\\rangle = \\langle \\psi|\\phi\\rangle^*$.</p>

<p><b>(b) Cauchy-Schwarz Inequality:</b><br>
Check normalization:
$$\\langle \\psi|\\psi\\rangle = \\left|\\frac{1}{\\sqrt{3}}\\right|^2 + \\left|i\\sqrt{\\frac{2}{3}}\\right|^2 = \\frac{1}{3} + \\frac{2}{3} = 1$$
$$\\langle \\phi|\\phi\\rangle = \\left|\\frac{2}{\\sqrt{5}}\\right|^2 + \\left|-\\frac{1}{\\sqrt{5}}\\right|^2 = \\frac{4}{5} + \\frac{1}{5} = 1$$
Now compute $|\\langle \\psi|\\phi\\rangle|^2$:
$$|\\langle \\psi|\\phi\\rangle|^2 = \\left| \\frac{2 + i\\sqrt{2}}{\\sqrt{15}} \\right|^2 = \\frac{2^2 + (\\sqrt{2})^2}{15} = \\frac{4 + 2}{15} = \\frac{6}{15} = \\frac{2}{5} = 0.4$$
Since $\\langle \\psi|\\psi\\rangle \\langle \\phi|\\phi\\rangle = 1 \\times 1 = 1$, we have:
$$0.4 \\le 1$$
which confirms the Cauchy-Schwarz inequality.</p>

<p><b>(c) Projection Operator:</b><br>
In column vector representation with $|1\\rangle = \\begin{pmatrix}1 \\\\ 0\\end{pmatrix}$ and $|2\\rangle = \\begin{pmatrix}0 \\\\ 1\\end{pmatrix}$:
$$|\\psi\\rangle = \\begin{pmatrix} 1/\\sqrt{3} \\\\ i\\sqrt{2/3} \\end{pmatrix}, \\qquad \\langle \\psi| = \\begin{pmatrix} 1/\\sqrt{3} & -i\\sqrt{2/3} \\end{pmatrix}$$
The projection operator is the outer product:
$$\\hat{P}_\\psi = |\\psi\\rangle\\langle\\psi| = \\begin{pmatrix} 1/\\sqrt{3} \\\\ i\\sqrt{2/3} \\end{pmatrix} \\begin{pmatrix} 1/\\sqrt{3} & -i\\sqrt{2/3} \\end{pmatrix} = \\begin{pmatrix} 1/3 & -i\\sqrt{2}/3 \\\\ i\\sqrt{2}/3 & 2/3 \\end{pmatrix}$$
Notice that $\\hat{P}_\\psi^\\dagger = \\hat{P}_\\psi$ (Hermitian) and $\\hat{P}_\\psi^2 = \\hat{P}_\\psi$ (idempotent), as required for an orthogonal projection operator.</p>`,
    trap: 'Forgetting to take the complex conjugate of complex coefficients when forming bra vectors ⟨ψ|.'
  },
  {
    id: 'q.qm1.m3.02',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.1',
    marks: 4,
    title: 'Gram-Schmidt Orthogonalization Procedure',
    source: 'Zettili 2e §2.2.3 & Solved Problem 2.3',
    prompt: `<p>In a 3D vector space, three linearly independent kets are given by:
$$|v_1\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\qquad |v_2\\rangle = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\qquad |v_3\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$$
Using the Gram-Schmidt orthogonalization procedure, construct an orthonormal basis $\{|e_1\\rangle, |e_2\\rangle, |e_3\\rangle\}$.</p>`,
    tests: ['c.3.1.1', 'c.3.1.2'],
    approach: '<p>Normalize the first vector to get |e₁⟩. Subtract projection along |e₁⟩ from |v₂⟩ and normalize to get |e₂⟩. Subtract projections along both |e₁⟩ and |e₂⟩ from |v₃⟩ and normalize to get |e₃⟩.</p>',
    solution: `<p><b>Step 1: First Orthonormal Vector $|e_1\\rangle$:</b><br>
Compute the norm of $|v_1\\rangle$:
$$\\langle v_1|v_1\\rangle = 1^2 + 0^2 + 1^2 = 2 \\implies \\|v_1\\| = \\sqrt{2}$$
$$|e_1\\rangle = \\frac{|v_1\\rangle}{\\|v_1\\|} = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>

<p><b>Step 2: Second Orthonormal Vector $|e_2\\rangle$:</b><br>
First compute the overlap $\\langle e_1|v_2\\rangle$:
$$\\langle e_1|v_2\\rangle = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\frac{1}{\\sqrt{2}}(1 + 0 + 0) = \\frac{1}{\\sqrt{2}}$$
Construct the unnormalized orthogonal vector $|u_2\\rangle = |v_2\\rangle - \\langle e_1|v_2\\rangle |e_1\\rangle$:
$$|u_2\\rangle = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} - \\frac{1}{\\sqrt{2}}\\left( \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} \\right) = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 1/2 \\\\ 0 \\\\ 1/2 \\end{pmatrix} = \\begin{pmatrix} 1/2 \\\\ 1 \\\\ -1/2 \\end{pmatrix}$$
Compute norm of $|u_2\\rangle$:
$$\\langle u_2|u_2\\rangle = (1/2)^2 + 1^2 + (-1/2)^2 = \\frac{1}{4} + 1 + \\frac{1}{4} = \\frac{6}{4} = \\frac{3}{2} \\implies \\|u_2\\| = \\sqrt{\\frac{3}{2}}$$
$$|e_2\\rangle = \\frac{|u_2\\rangle}{\\|u_2\\|} = \\sqrt{\\frac{2}{3}} \\begin{pmatrix} 1/2 \\\\ 1 \\\\ -1/2 \\end{pmatrix} = \\frac{1}{\\sqrt{6}} \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$$</p>

<p><b>Step 3: Third Orthonormal Vector $|e_3\\rangle$:</b><br>
Compute overlaps with $|v_3\\rangle$:
$$\\langle e_1|v_3\\rangle = \\frac{1}{\\sqrt{2}} (0 + 0 + 1) = \\frac{1}{\\sqrt{2}}$$
$$\\langle e_2|v_3\\rangle = \\frac{1}{\\sqrt{6}} (0 + 2 - 1) = \\frac{1}{\\sqrt{6}}$$
Construct $|u_3\\rangle = |v_3\\rangle - \\langle e_1|v_3\\rangle |e_1\\rangle - \\langle e_2|v_3\\rangle |e_2\\rangle$:
$$|u_3\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} - \\frac{1}{2}\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} - \\frac{1}{6}\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -1/2 - 1/6 \\\\ 1 - 2/6 \\\\ 1 - 1/2 + 1/6 \\end{pmatrix} = \\begin{pmatrix} -2/3 \\\\ 2/3 \\\\ 2/3 \\end{pmatrix}$$
Compute norm of $|u_3\\rangle$:
$$\\langle u_3|u_3\\rangle = (-2/3)^2 + (2/3)^2 + (2/3)^2 = \\frac{4 + 4 + 4}{9} = \\frac{12}{9} = \\frac{4}{3} \\implies \\|u_3\\| = \\frac{2}{\\sqrt{3}}$$
$$|e_3\\rangle = \\frac{|u_3\\rangle}{\\|u_3\\|} = \\frac{\\sqrt{3}}{2} \\begin{pmatrix} -2/3 \\\\ 2/3 \\\\ 2/3 \\end{pmatrix} = \\frac{1}{\\sqrt{3}} \\begin{pmatrix} -1 \\\\ 1 \\\\ 1 \\end{pmatrix}$$
The set $\{|e_1\\rangle, |e_2\\rangle, |e_3\\rangle\}$ is mutually orthonormal.</p>`,
    trap: 'Subtracting projections from the already normalized vectors instead of the original raw vectors |v_k⟩.'
  },
  {
    id: 'q.qm1.m3.03',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.2',
    marks: 5,
    title: 'Hermiticity of Linear Differential Operators',
    source: 'Griffiths 3e §3.2 & Zettili 2e §2.3',
    prompt: `<p>(a) Using integration by parts, prove that the momentum operator $\\hat{p} = -i\\hbar \\frac{d}{dx}$ is Hermitian in the Hilbert space $L^2(\\mathbb{R})$ of square-integrable wave functions satisfying $\\lim_{x \\to \\pm\\infty} \\psi(x) = 0$.<br>
(b) Show that the differential operator $\\hat{D} = \\frac{d}{dx}$ is anti-Hermitian: $\\hat{D}^\\dagger = -\\hat{D}$.<br>
(c) Find the Hermitian adjoint of $\\hat{A} = x \\frac{d}{dx}$ and determine whether $\\hat{A}$ is Hermitian.</p>`,
    tests: ['c.3.2.1', 'c.3.2.2'],
    approach: '<p>Apply definition of adjoint: ⟨f|Â|g⟩ = ⟨Â† f|g⟩. Integrate by parts and let boundary terms vanish at infinity.</p>',
    solution: `<p><b>(a) Hermiticity of $\\hat{p} = -i\\hbar \\frac{d}{dx}$:</b><br>
For any two functions $f(x), g(x) \\in L^2(\\mathbb{R})$:
$$\\langle f | \\hat{p} g \\rangle = \\int_{-\\infty}^\\infty f^*(x) \\left( -i\\hbar \\frac{dg}{dx} \\right) dx = -i\\hbar \\int_{-\\infty}^\\infty f^*(x) \\frac{dg}{dx} dx$$
Integrating by parts with $u = f^*(x)$ and $dv = \\frac{dg}{dx} dx$:
$$\\langle f | \\hat{p} g \\rangle = -i\\hbar \\left[ f^*(x)g(x) \\right]_{-\\infty}^\\infty - (-i\\hbar) \\int_{-\\infty}^\\infty \\frac{df^*}{dx} g(x) dx$$
Since $f, g \\to 0$ as $x \\to \\pm\\infty$, the boundary term vanishes:
$$\\langle f | \\hat{p} g \\rangle = i\\hbar \\int_{-\\infty}^\\infty \\frac{df^*}{dx} g(x) dx = \\int_{-\\infty}^\\infty \\left( -i\\hbar \\frac{df}{dx} \\right)^* g(x) dx = \\langle \\hat{p} f | g \\rangle$$
Since $\\langle f | \\hat{p} g \\rangle = \\langle \\hat{p} f | g \\rangle$ for all $f, g$, $\\hat{p}^\\dagger = \\hat{p}$. Hence $\\hat{p}$ is Hermitian.</p>

<p><b>(b) Anti-Hermiticity of $\\hat{D} = \\frac{d}{dx}$:</b><br>
$$\\langle f | \\hat{D} g \\rangle = \\int_{-\\infty}^\\infty f^*(x) \\frac{dg}{dx} dx = [f^* g]_{-\\infty}^\\infty - \\int_{-\\infty}^\\infty \\frac{df^*}{dx} g(x) dx = - \\int_{-\\infty}^\\infty \\left( \\frac{df}{dx} \\right)^* g(x) dx = -\\langle \\hat{D} f | g \\rangle$$
Thus $\\langle f | \\hat{D} g \\rangle = \\langle -\\hat{D} f | g \\rangle \\implies \\hat{D}^\\dagger = -\\hat{D}$. The operator $\\frac{d}{dx}$ is anti-Hermitian.</p>

<p><b>(c) Adjoint of $\\hat{A} = x \\frac{d}{dx}$</b><br>
Using operator product rule $(BC)^\\dagger = C^\\dagger B^\\dagger$:
$$\\hat{A}^\\dagger = \\left( x \\frac{d}{dx} \\right)^\\dagger = \\left(\\frac{d}{dx}\\right)^\\dagger x^\\dagger = \\left(-\\frac{d}{dx}\\right) x$$
Now let this act on an arbitrary test function $g(x)$:
$$\\hat{A}^\\dagger g(x) = -\\frac{d}{dx}[x g(x)] = -\\left( 1 \\cdot g(x) + x \\frac{dg}{dx} \\right) = -g(x) - x \\frac{dg}{dx} = \\left(-1 - x\\frac{d}{dx}\\right)g(x)$$
Therefore:
$$\\hat{A}^\\dagger = -x\\frac{d}{dx} - 1 = -\\hat{A} - \\hat{I}$$
Since $\\hat{A}^\\dagger \\ne \\hat{A}$, $\\hat{A}$ is <b>not Hermitian</b>. (Notice that $\\hat{A} + \\hat{A}^\\dagger = -\\hat{I}$, so $\\hat{A} + \\frac{1}{2}\\hat{I}$ is anti-Hermitian, while $i(\\hat{A} + \\frac{1}{2}\\hat{I})$ is Hermitian!)</p>`,
    trap: 'Writing (x d/dx)† = x (d/dx)† = -x d/dx; failing to reverse operator ordering in (ÂB̂)† = B̂† Â†.'
  },
  {
    id: 'q.qm1.m3.04',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.2',
    marks: 4,
    title: 'Reality of Eigenvalues and Orthogonality of Eigenstates',
    source: 'Zettili 2e §2.3.2 Theorems 2.1 & 2.2',
    prompt: `<p>Let $\\hat{A}$ be a Hermitian operator on a Hilbert space $\\mathcal{H}$.<br>
(a) Prove that all eigenvalues of $\\hat{A}$ are strictly real numbers.<br>
(b) Prove that any two eigenvectors $|\\psi_1\\rangle$ and $|\\psi_2\\rangle$ corresponding to distinct eigenvalues $\\lambda_1 \\ne \\lambda_2$ are mutually orthogonal.</p>`,
    tests: ['c.3.2.2'],
    approach: '<p>Act on both sides with bra states and utilize ⟨ψ|Â|ϕ⟩ = ⟨Âψ|ϕ⟩ with Â = Â†.</p>',
    solution: `<p><b>(a) Reality of Eigenvalues:</b><br>
Let $\\hat{A}|\\psi\\rangle = \\lambda |\\psi\\rangle$ with $|\\psi\\rangle \\ne 0$.<br>
Taking the inner product with $|\\psi\\rangle$:
$$\\langle \\psi | \\hat{A} | \\psi \\rangle = \\langle \\psi | (\\lambda |\\psi\\rangle) = \\lambda \\langle \\psi | \\psi \\rangle$$
Now take the complex conjugate of both sides:
$$(\\langle \\psi | \\hat{A} | \\psi \\rangle)^* = \\lambda^* \\langle \\psi | \\psi \\rangle$$
By the definition of the adjoint, $(\\langle \\psi | \\hat{A} | \\psi \\rangle)^* = \\langle \\psi | \\hat{A}^\\dagger | \\psi \\rangle$. Since $\\hat{A}$ is Hermitian ($\\hat{A}^\\dagger = \\hat{A}$):
$$\\langle \\psi | \\hat{A} | \\psi \\rangle = \\lambda^* \\langle \\psi | \\psi \\rangle$$
Subtracting the two equations:
$$(\\lambda - \\lambda^*) \\langle \\psi | \\psi \\rangle = 0$$
Since $|\\psi\\rangle$ is a non-zero vector, $\\langle \\psi | \\psi \\rangle > 0$. Thus:
$$\\lambda - \\lambda^* = 0 \\implies \\lambda = \\lambda^*$$
Hence, every eigenvalue $\\lambda$ of a Hermitian operator is real.</p>

<p><b>(b) Orthogonality of Distinct Eigenstates:</b><br>
Let $\\hat{A}|\\psi_1\\rangle = \\lambda_1 |\\psi_1\\rangle$ and $\\hat{A}|\\psi_2\\rangle = \\lambda_2 |\\psi_2\\rangle$ with $\\lambda_1 \\ne \\lambda_2$.<br>
Evaluate the matrix element $\\langle \\psi_1 | \\hat{A} | \\psi_2 \\rangle$ in two ways:
$$\\langle \\psi_1 | \\hat{A} | \\psi_2 \\rangle = \\langle \\psi_1 | (\\hat{A} |\\psi_2\\rangle) = \\lambda_2 \\langle \\psi_1 | \\psi_2 \\rangle$$
Operating to the left since $\\hat{A}^\\dagger = \\hat{A}$ and $\\lambda_1$ is real:
$$\\langle \\psi_1 | \\hat{A} | \\psi_2 \\rangle = \\langle \\hat{A} \\psi_1 | \\psi_2 \\rangle = (\\lambda_1 |\\psi_1\\rangle)^\\dagger |\\psi_2\\rangle = \\lambda_1^* \\langle \\psi_1 | \\psi_2 \\rangle = \\lambda_1 \\langle \\psi_1 | \\psi_2 \\rangle$$
Subtracting the two expressions:
$$(\\lambda_1 - \\lambda_2) \\langle \\psi_1 | \\psi_2 \\rangle = 0$$
Since the eigenvalues are distinct by hypothesis ($\\lambda_1 \\ne \\lambda_2$, so $\\lambda_1 - \\lambda_2 \\ne 0$):
$$\\langle \\psi_1 | \\psi_2 \\rangle = 0$$
Thus, eigenvectors corresponding to distinct eigenvalues of any Hermitian operator are strictly orthogonal.</p>`,
    trap: 'Claiming that degenerate eigenstates (λ₁ = λ₂) are automatically orthogonal; degenerate eigenstates are linearly independent and must be orthogonalized via Gram-Schmidt.'
  },
  {
    id: 'q.qm1.m3.05',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.3',
    marks: 4,
    title: 'Commutator of Analytic Functions and Momentum',
    source: 'Griffiths 3e §2.3 & Zettili 2e §2.4',
    prompt: `<p>(a) Let $f(x)$ be a differentiable function of position. Prove that $[f(\\hat{x}), \\hat{p}] = i\\hbar \\frac{df}{dx}$ by letting the commutator act on an arbitrary test function $\\psi(x)$.<br>
(b) Evaluate $[\\hat{x}^3, \\hat{p}]$.<br>
(c) Evaluate $[e^{\\alpha \\hat{x}}, \\hat{p}]$ where $\\alpha$ is a constant.</p>`,
    tests: ['c.3.3.2', 'c.3.3.3'],
    approach: '<p>Apply the definition [A, B]ψ = (AB - BA)ψ with p = -iħ d/dx and use the product rule.</p>',
    solution: `<p><b>(a) General Proof for $[f(\\hat{x}), \\hat{p}]$:</b><br>
Let $[f(\\hat{x}), \\hat{p}]$ act on an arbitrary smooth test function $\\psi(x)$:
$$[f(\\hat{x}), \\hat{p}]\\psi(x) = f(\\hat{x})\\hat{p}\\psi(x) - \\hat{p}[f(\\hat{x})\\psi(x)]$$
Substitute $\\hat{p} = -i\\hbar \\frac{d}{dx}$:
$$[f(\\hat{x}), \\hat{p}]\\psi(x) = f(x) \\left(-i\\hbar \\frac{d\\psi}{dx}\\right) - \\left( -i\\hbar \\frac{d}{dx}[f(x)\\psi(x)] \\right)$$
$$= -i\\hbar f(x)\\frac{d\\psi}{dx} + i\\hbar \\left( \\frac{df}{dx}\\psi(x) + f(x)\\frac{d\\psi}{dx} \\right)$$
The terms proportional to $\\frac{d\\psi}{dx}$ cancel out completely:
$$= -i\\hbar f(x)\\frac{d\\psi}{dx} + i\\hbar \\frac{df}{dx}\\psi(x) + i\\hbar f(x)\\frac{d\\psi}{dx} = i\\hbar \\frac{df}{dx}\\psi(x)$$
Since this holds for every $\\psi(x)$:
$$\\boxed{[f(\\hat{x}), \\hat{p}] = i\\hbar \\frac{df}{dx}}$$</p>

<p><b>(b) Evaluate $[\\hat{x}^3, \\hat{p}]$:</b><br>
Here $f(x) = x^3$. Its derivative is $\\frac{df}{dx} = 3x^2$.<br>
Using the formula derived in part (a):
$$[\\hat{x}^3, \\hat{p}] = i\\hbar \\frac{d(x^3)}{dx} = 3i\\hbar \\hat{x}^2$$</p>

<p><b>(c) Evaluate $[e^{\\alpha \\hat{x}}, \\hat{p}]$:</b><br>
Here $f(x) = e^{\\alpha x}$. Its derivative is $\\frac{df}{dx} = \\alpha e^{\\alpha x}$.<br>
Applying the formula:
$$[e^{\\alpha \\hat{x}}, \\hat{p}] = i\\hbar (\\alpha e^{\\alpha \\hat{x}}) = i\\hbar \\alpha e^{\\alpha \\hat{x}}$$
Notice also that $[\\hat{p}, e^{\\alpha \\hat{x}}] = -[e^{\\alpha \\hat{x}}, \\hat{p}] = -i\\hbar \\alpha e^{\\alpha \\hat{x}}$.</p>`,
    trap: 'Forgetting that p acts on f(x) inside the product d/dx[f(x)ψ(x)], mistakenly concluding [f(x), p] = 0.'
  },
  {
    id: 'q.qm1.m3.06',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.3',
    marks: 5,
    title: 'Orbital Angular Momentum Commutator Algebra',
    source: 'Zettili 2e §2.4 & Problem 2.14',
    prompt: `<p>The components of orbital angular momentum are defined by $\\mathbf{\\hat{L}} = \\mathbf{\\hat{r}} \\times \\mathbf{\\hat{p}}$, so:
$$\\hat{L}_x = \\hat{y}\\hat{p}_z - \\hat{z}\\hat{p}_y, \\qquad \\hat{L}_y = \\hat{z}\\hat{p}_x - \\hat{x}\\hat{p}_z, \\qquad \\hat{L}_z = \\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x$$
Using only the canonical commutation relations $[r_j, p_k] = i\\hbar \\delta_{jk}$ and commutator product rules, prove:
$$[\\hat{L}_x, \\hat{L}_y] = i\\hbar \\hat{L}_z$$</p>`,
    tests: ['c.3.3.1', 'c.3.3.3'],
    approach: '<p>Expand the commutator [yp_z - zp_y, zp_x - xp_z] using distributivity and the Leibniz rule, noting that coordinates and momenta along different axes commute.</p>',
    solution: `<p>Substitute the definitions into the commutator:
$$[\\hat{L}_x, \\hat{L}_y] = [\\hat{y}\\hat{p}_z - \\hat{z}\\hat{p}_y, \\; \\hat{z}\\hat{p}_x - \\hat{x}\\hat{p}_z]$$
Expanding by distributivity into four commutators:
$$[\\hat{L}_x, \\hat{L}_y] = [\\hat{y}\\hat{p}_z, \\hat{z}\\hat{p}_x] - [\\hat{y}\\hat{p}_z, \\hat{x}\\hat{p}_z] - [\\hat{z}\\hat{p}_y, \\hat{z}\\hat{p}_x] + [\\hat{z}\\hat{p}_y, \\hat{x}\\hat{p}_z]$$

<p><b>Evaluate Each Commutator:</b>
<ol>
  <li>First term $[\\hat{y}\\hat{p}_z, \\hat{z}\\hat{p}_x]$:<br>
  Since $\\hat{y}$ commutes with $\\hat{z}, \\hat{p}_x, \\hat{p}_z$ and $\\hat{p}_x$ commutes with $\\hat{y}, \\hat{z}, \\hat{p}_z$:
  $$[\\hat{y}\\hat{p}_z, \\hat{z}\\hat{p}_x] = \\hat{y} [\\hat{p}_z, \\hat{z}] \\hat{p}_x = \\hat{y} (-i\\hbar) \\hat{p}_x = -i\\hbar \\hat{y}\\hat{p}_x$$</li>
  <li>Second term $[\\hat{y}\\hat{p}_z, \\hat{x}\\hat{p}_z]$:<br>
  All factors commute: $[\\hat{y}, \\hat{x}] = 0, [\\hat{y}, \\hat{p}_z] = 0, [\\hat{p}_z, \\hat{x}] = 0, [\\hat{p}_z, \\hat{p}_z] = 0$.<br>
  Thus $[\\hat{y}\\hat{p}_z, \\hat{x}\\hat{p}_z] = 0$.</li>
  <li>Third term $[\\hat{z}\\hat{p}_y, \\hat{z}\\hat{p}_x]$:<br>
  All factors commute ($[\\hat{z}, \\hat{z}] = 0, [\\hat{p}_y, \\hat{p}_x] = 0$, etc.).<br>
  Thus $[\\hat{z}\\hat{p}_y, \\hat{z}\\hat{p}_x] = 0$.</li>
  <li>Fourth term $[\\hat{z}\\hat{p}_y, \\hat{x}\\hat{p}_z]$:<br>
  Here $\\hat{z}$ and $\\hat{p}_z$ do not commute! Using Leibniz rule:
  $$[\\hat{z}\\hat{p}_y, \\hat{x}\\hat{p}_z] = \\hat{x} [\\hat{z}, \\hat{p}_z] \\hat{p}_y = \\hat{x} (i\\hbar) \\hat{p}_y = i\\hbar \\hat{x}\\hat{p}_y$$</li>
</ol>
Combining all non-vanishing terms:
$$[\\hat{L}_x, \\hat{L}_y] = -i\\hbar \\hat{y}\\hat{p}_x + i\\hbar \\hat{x}\\hat{p}_y = i\\hbar (\\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x)$$
Recognizing that $\\hat{L}_z = \\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x$:
$$\\boxed{[\\hat{L}_x, \\hat{L}_y] = i\\hbar \\hat{L}_z}$$
By cyclic permutation: $[\\hat{L}_y, \\hat{L}_z] = i\\hbar \\hat{L}_x$ and $[\\hat{L}_z, \\hat{L}_x] = i\\hbar \\hat{L}_y$.</p>`,
    trap: 'Sign errors from [p_z, z] = -iħ versus [z, p_z] = +iħ.'
  },
  {
    id: 'q.qm1.m3.07',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.4',
    marks: 5,
    title: 'Derivation of Robertson Uncertainty Relation',
    source: 'Griffiths 3e §3.5 & Zettili 2e §2.5',
    prompt: `<p>Let $\\hat{A}$ and $\\hat{B}$ be two Hermitian operators on a Hilbert space $\\mathcal{H}$. Prove the generalized <b>Robertson uncertainty relation</b>:
$$\\Delta A \\, \\Delta B \\ge \\frac{1}{2} |\\langle [\\hat{A}, \\hat{B}] \\rangle|$$
where $\\Delta A = \\sqrt{\\langle (\\hat{A} - \\langle A \\rangle)^2 \\rangle}$.</p>`,
    tests: ['c.3.4.1'],
    approach: '<p>Define shifted operators ΔÂ = Â - ⟨A⟩ and vectors |u⟩ = ΔÂ|ψ⟩, |v⟩ = ΔB̂|ψ⟩. Apply Cauchy-Schwarz ⟨u|u⟩⟨v|v⟩ ≥ |⟨u|v⟩|² and decompose ⟨u|v⟩ into Hermitian and anti-Hermitian parts.</p>',
    solution: `<p><b>Step 1: Shifted Operators:</b><br>
Define the deviation operators:
$$\\Delta \\hat{A} = \\hat{A} - \\langle \\hat{A} \\rangle \\hat{I}, \\qquad \\Delta \\hat{B} = \\hat{B} - \\langle \\hat{B} \\rangle \\hat{I}$$
Notice that $\\Delta \\hat{A}$ and $\\Delta \\hat{B}$ are Hermitian, and their commutator is identical to $[\\hat{A}, \\hat{B}]$:
$$[\\Delta \\hat{A}, \\Delta \\hat{B}] = [\\hat{A} - \\langle A \\rangle, \\hat{B} - \\langle B \\rangle] = [\\hat{A}, \\hat{B}]$$</p>

<p><b>Step 2: Apply Cauchy-Schwarz:</b><br>
For any state $|\\psi\\rangle$, define:
$$|u\\rangle = \\Delta \\hat{A} |\\psi\\rangle, \\qquad |v\\rangle = \\Delta \\hat{B} |\\psi\\rangle$$
Then:
$$\\langle u | u \\rangle = \\langle \\psi | (\\Delta \\hat{A})^2 | \\psi \\rangle = (\\Delta A)^2$$
$$\\langle v | v \\rangle = \\langle \\psi | (\\Delta \\hat{B})^2 | \\psi \\rangle = (\\Delta B)^2$$
By the Cauchy-Schwarz inequality $\\langle u|u\\rangle \\langle v|v\\rangle \\ge |\\langle u|v\\rangle|^2$:
$$(\\Delta A)^2 (\\Delta B)^2 \\ge |\\langle \\psi | \\Delta \\hat{A} \\Delta \\hat{B} | \\psi \\rangle|^2$$</p>

<p><b>Step 3: Symmetric & Antisymmetric Decomposition:</b><br>
Rewrite the operator product $\\Delta \\hat{A} \\Delta \\hat{B}$ as:
$$\\Delta \\hat{A} \\Delta \\hat{B} = \\frac{1}{2}\\{\\Delta \\hat{A}, \\Delta \\hat{B}\\} + \\frac{1}{2}[\\Delta \\hat{A}, \\Delta \\hat{B}]$$
where $\\{\\Delta \\hat{A}, \\Delta \\hat{B}\\} = \\Delta \\hat{A} \\Delta \\hat{B} + \\Delta \\hat{B} \\Delta \\hat{A}$ is the anticommutator.<br>
Notice that $\\{\\Delta \\hat{A}, \\Delta \\hat{B}\\}$ is Hermitian (its expectation value is purely real: $R \\in \\mathbb{R}$).<br>
In contrast, $[\\Delta \\hat{A}, \\Delta \\hat{B}] = [\\hat{A}, \\hat{B}]$ is anti-Hermitian (its expectation value is purely imaginary: $i I$, where $I \\in \\mathbb{R}$).<br>
Therefore:
$$\\langle \\psi | \\Delta \\hat{A} \\Delta \\hat{B} | \\psi \\rangle = \\frac{1}{2}\\langle \\{\\Delta \\hat{A}, \\Delta \\hat{B}\\} \\rangle + \\frac{1}{2}\\langle [\\hat{A}, \\hat{B}] \\rangle$$
The squared magnitude of this complex number $z = R + iI$ is:
$$|\\langle \\psi | \\Delta \\hat{A} \\Delta \\hat{B} | \\psi \\rangle|^2 = \\left( \\frac{1}{2}\\langle \\{\\Delta \\hat{A}, \\Delta \\hat{B}\\} \\rangle \\right)^2 + \\left( \\frac{1}{2i}\\langle [\\hat{A}, \\hat{B}] \\rangle \\right)^2$$
Since $\\left( \\frac{1}{2}\\langle \\{\\Delta \\hat{A}, \\Delta \\hat{B}\\} \\rangle \\right)^2 \\ge 0$:
$$|\\langle \\psi | \\Delta \\hat{A} \\Delta \\hat{B} | \\psi \\rangle|^2 \\ge \\frac{1}{4} |\\langle [\\hat{A}, \\hat{B}] \\rangle|^2$$
Combining with Cauchy-Schwarz:
$$(\\Delta A)^2 (\\Delta B)^2 \\ge \\frac{1}{4} |\\langle [\\hat{A}, \\hat{B}] \\rangle|^2$$
Taking the positive square root of both sides yields:
$$\\boxed{\\Delta A \\, \\Delta B \\ge \\frac{1}{2} |\\langle [\\hat{A}, \\hat{B}] \\rangle|}$$
For $\\hat{x}$ and $\\hat{p}$, $[\\hat{x}, \\hat{p}] = i\\hbar$, so $\\Delta x \\Delta p \\ge \\frac{1}{2}|i\\hbar| = \\frac{\\hbar}{2}$.</p>`,
    trap: 'Forgetting the anticommutator term; the full inequality with anticommutator is the Schrödinger inequality, which reduces to Robertson when the anticommutator is dropped.'
  },
  {
    id: 'q.qm1.m3.08',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.4',
    marks: 4,
    title: 'Minimum Uncertainty State and Gaussian Wave Packets',
    source: 'Griffiths 3e §3.5 & Zettili 2e §2.5.2',
    prompt: `<p>(a) State the two conditions required for the product $\\Delta x \\, \\Delta p$ to attain the absolute minimum value $\\frac{\\hbar}{2}$.<br>
(b) From these conditions, set up and solve the first-order differential equation for the spatial wave function $\\psi(x)$ to prove that the minimum uncertainty wave packet must be a Gaussian.</p>`,
    tests: ['c.3.4.1', 'c.1.6.1'],
    approach: '<p>Equality in Cauchy-Schwarz requires |u⟩ = c|v⟩. For the anticommutator term to vanish, c must be purely imaginary: c = -ia. Solve (x - ⟨x⟩)ψ = -ia(-iħ d/dx - ⟨p⟩)ψ.</p>',
    solution: `<p><b>(a) Equality Conditions:</b><br>
From the derivation of the Robertson relation, equality $\\Delta A \\Delta B = \\frac{1}{2}|\\langle [\\hat{A}, \\hat{B}] \\rangle|$ holds if and only if:
<ol>
  <li><b>Cauchy-Schwarz holds with equality:</b> $|u\\rangle = c |v\\rangle$ for some complex scalar $c$. That is, $(\\hat{x} - \\langle x \\rangle)\\psi(x) = c (\\hat{p} - \\langle p \\rangle)\\psi(x)$.</li>
  <li><b>The anticommutator term vanishes:</b> $\\langle \\{\\Delta \\hat{x}, \\Delta \\hat{p}\\} \\rangle = 0$, which strictly forces the proportionality constant $c$ to be <i>purely imaginary</i>: $c = -ia$ where $a > 0$ is a real constant.</li>
</ol></p>

<p><b>(b) Differential Equation and Gaussian Solution:</b><br>
Substitute $\\hat{p} = -i\\hbar \\frac{d}{dx}$ and $c = -ia$ into the condition:
$$(x - \\langle x \\rangle)\\psi(x) = -ia \\left( -i\\hbar \\frac{d\\psi}{dx} - \\langle p \\rangle \\psi(x) \\right) = -a\\hbar \\frac{d\\psi}{dx} + ia\\langle p \\rangle \\psi(x)$$
Rearranging to isolate $\\frac{d\\psi}{dx}$:
$$a\\hbar \\frac{d\\psi}{dx} = -(x - \\langle x \\rangle)\\psi(x) + ia\\langle p \\rangle \\psi(x) = \\left[ -(x - \\langle x \\rangle) + ia\\langle p \\rangle \\right]\\psi(x)$$
$$\\frac{1}{\\psi} \\frac{d\\psi}{dx} = -\\frac{x - \\langle x \\rangle}{a\\hbar} + \\frac{i\\langle p \\rangle}{\\hbar}$$
Integrating both sides with respect to $x$:
$$\\ln\\psi(x) = -\\frac{(x - \\langle x \\rangle)^2}{2a\\hbar} + \\frac{i\\langle p \\rangle x}{\\hbar} + \\text{const}$$
Exponentiating:
$$\\psi(x) = A \\exp\\left( -\\frac{(x - \\langle x \\rangle)^2}{2a\\hbar} \\right) \\exp\\left( \\frac{i\\langle p \\rangle x}{\\hbar} \\right)$$
Letting $a\\hbar = 2\\sigma^2$, this is precisely the <b>Gaussian wave packet</b>:
$$\\boxed{\\psi(x) = \\left(\\frac{1}{2\\pi\\sigma^2}\\right)^{1/4} \\exp\\left( -\\frac{(x - \\langle x \\rangle)^2}{4\\sigma^2} \\right) e^{i\\langle p \\rangle x / \\hbar}}$$
For this state, $\\Delta x = \\sigma$ and $\\Delta p = \\frac{\\hbar}{2\\sigma}$, so $\\Delta x \\Delta p = \\frac{\\hbar}{2}$.<br>
Thus, the Gaussian wave packet is the unique state of minimum uncertainty.</p>`,
    trap: 'Allowing c to have a real part; a non-zero real part leads to a chirped Gaussian with Δx Δp > ħ/2.'
  },
  {
    id: 'q.qm1.m3.09',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.5',
    marks: 5,
    title: 'Baker-Campbell-Hausdorff Lemma and Operator Exponentials',
    source: 'Zettili 2e §2.4.3 & Problem 2.11',
    prompt: `<p>(a) State the Baker-Campbell-Hausdorff (BCH) expansion for $e^{\\hat{A}} \\hat{B} e^{-\\hat{A}}$.<br>
(b) Evaluate the transformed momentum operator $\\hat{p}' = e^{i p_0 \\hat{x} / \\hbar} \\hat{p} \\, e^{-i p_0 \\hat{x} / \\hbar}$ where $p_0$ is a real constant.<br>
(c) Evaluate the transformed position operator $\\hat{x}' = e^{i x_0 \\hat{p} / \\hbar} \\hat{x} \\, e^{-i x_0 \\hat{p} / \\hbar}$ where $x_0$ is a real constant.</p>`,
    tests: ['c.3.5.1', 'c.3.3.3'],
    approach: '<p>Use the BCH identity e^Â B̂ e^{-Â} = B̂ + [Â, B̂] + 1/2! [Â, [Â, B̂]] + ... and compute successive commutators.</p>',
    solution: `<p><b>(a) The BCH Lemma:</b><br>
For any two linear operators $\\hat{A}$ and $\\hat{B}$:
$$\\boxed{e^{\\hat{A}} \\hat{B} e^{-\\hat{A}} = \\hat{B} + [\\hat{A}, \\hat{B}] + \\frac{1}{2!} [\\hat{A}, [\\hat{A}, \\hat{B}]] + \\frac{1}{3!} [\\hat{A}, [\\hat{A}, [\\hat{A}, \\hat{B}]]] + \\dots}$$
If the commutator $[\\hat{A}, \\hat{B}]$ is a c-number (scalar times identity), all nested commutators vanish, terminating the series after the second term.</p>

<p><b>(b) Evaluate $\\hat{p}' = e^{i p_0 \\hat{x} / \\hbar} \\hat{p} \\, e^{-i p_0 \\hat{x} / \\hbar}$:</b><br>
Here $\\hat{A} = \\frac{i p_0}{\\hbar} \\hat{x}$ and $\\hat{B} = \\hat{p}$.<br>
Compute the first commutator:
$$[\\hat{A}, \\hat{B}] = \\left[ \\frac{i p_0}{\\hbar} \\hat{x}, \\hat{p} \\right] = \\frac{i p_0}{\\hbar} [\\hat{x}, \\hat{p}] = \\frac{i p_0}{\\hbar} (i\\hbar) = -p_0$$
Since $-p_0$ is a pure number (a c-number), it commutes with $\\hat{A}$:
$$[\\hat{A}, [\\hat{A}, \\hat{B}]] = \\left[ \\frac{i p_0}{\\hbar} \\hat{x}, -p_0 \\right] = 0$$
All higher-order nested commutators vanish identically.<br>
Applying the BCH formula:
$$\\hat{p}' = \\hat{p} + [\\hat{A}, \\hat{B}] + 0 = \\hat{p} - p_0$$
Thus:
$$\\boxed{e^{i p_0 \\hat{x} / \\hbar} \\hat{p} \\, e^{-i p_0 \\hat{x} / \\hbar} = \\hat{p} - p_0 \\hat{I}}$$
The operator $e^{i p_0 \\hat{x}/\\hbar}$ shifts the momentum by $-p_0$.</p>

<p><b>(c) Evaluate $\\hat{x}' = e^{i x_0 \\hat{p} / \\hbar} \\hat{x} \\, e^{-i x_0 \\hat{p} / \\hbar}$:</b><br>
Here $\\hat{A} = \\frac{i x_0}{\\hbar} \\hat{p}$ and $\\hat{B} = \\hat{x}$.<br>
Compute the first commutator:
$$[\\hat{A}, \\hat{B}] = \\left[ \\frac{i x_0}{\\hbar} \\hat{p}, \\hat{x} \\right] = \\frac{i x_0}{\\hbar} [\\hat{p}, \\hat{x}] = \\frac{i x_0}{\\hbar} (-i\\hbar) = x_0$$
Since $x_0$ is a c-number, all higher commutators vanish.<br>
Applying the BCH formula:
$$\\hat{x}' = \\hat{x} + x_0$$
Thus:
$$\\boxed{e^{i x_0 \\hat{p} / \\hbar} \\hat{x} \\, e^{-i x_0 \\hat{p} / \\hbar} = \\hat{x} + x_0 \\hat{I}}$$
The operator $e^{-i x_0 \\hat{p}/\\hbar}$ is the spatial translation operator which displaces coordinates by $+x_0$.</p>`,
    trap: 'Getting the sign wrong in [p, x] = -iħ versus [x, p] = +iħ.'
  },
  {
    id: 'q.qm1.m3.10',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.5',
    marks: 4,
    title: 'The Unitary Finite Space Translation Operator',
    source: 'Zettili 2e §2.4.3 & Griffiths 3e §3.5',
    prompt: `<p>Define the finite spatial translation operator $\\hat{T}(a) = \\exp\\left(-\\frac{i}{\\hbar} a \\hat{p}\\right)$ where $a \\in \\mathbb{R}$.<br>
(a) Prove that $\\hat{T}(a)$ is a unitary operator.<br>
(b) Using the Taylor series expansion of $\\hat{T}(a)$, prove that $\\hat{T}(a)\\psi(x) = \\psi(x - a)$.<br>
(c) Find the commutator $[\\hat{x}, \\hat{T}(a)]$.</p>`,
    tests: ['c.3.5.2', 'c.3.5.1'],
    approach: '<p>Use U† = exp(+i a p† / ħ) with p† = p to check unitarity. Expand exponential operator in Taylor series and identify standard Taylor series for ψ(x - a).</p>',
    solution: `<p><b>(a) Unitarity of $\\hat{T}(a)$:</b><br>
Compute the Hermitian adjoint of $\\hat{T}(a) = e^{-i a \\hat{p} / \\hbar}$:
$$\\hat{T}^\\dagger(a) = \\left( \\exp\\left(-\\frac{ia}{\\hbar} \\hat{p}\\right) \\right)^\\dagger = \\exp\\left(+\\frac{ia}{\\hbar} \\hat{p}^\\dagger\\right)$$
Since $\\hat{p}$ is Hermitian ($\\hat{p}^\\dagger = \\hat{p}$):
$$\\hat{T}^\\dagger(a) = \\exp\\left(+\\frac{ia}{\\hbar} \\hat{p}\\right) = \\hat{T}(-a)$$
Now compute the product:
$$\\hat{T}^\\dagger(a) \\hat{T}(a) = \\exp\\left(+\\frac{ia}{\\hbar} \\hat{p}\\right) \\exp\\left(-\\frac{ia}{\\hbar} \\hat{p}\\right) = \\exp\\left( \\frac{ia}{\\hbar}\\hat{p} - \\frac{ia}{\\hbar}\\hat{p} \\right) = e^0 = \\hat{I}$$
Similarly $\\hat{T}(a) \\hat{T}^\\dagger(a) = \\hat{I}$. Therefore, $\\hat{T}(a)$ is strictly <b>unitary</b>.</p>

<p><b>(b) Translation of Wave Function:</b><br>
In coordinate representation, $\\hat{p} = -i\\hbar \\frac{d}{dx}$.<br>
Substitute $\\hat{p}$ into the operator exponent:
$$-\\frac{ia}{\\hbar}\\hat{p} = -\\frac{ia}{\\hbar}\\left(-i\\hbar \\frac{d}{dx}\\right) = -a \\frac{d}{dx}$$
Expanding the operator exponential as a power series:
$$\\hat{T}(a) = \\exp\\left(-a \\frac{d}{dx}\\right) = \\sum_{n=0}^\\infty \\frac{1}{n!} \\left(-a \\frac{d}{dx}\\right)^n = \\sum_{n=0}^\\infty \\frac{(-a)^n}{n!} \\frac{d^n}{dx^n}$$
Now let $\\hat{T}(a)$ act on the wave function $\\psi(x)$:
$$\\hat{T}(a)\\psi(x) = \\sum_{n=0}^\\infty \\frac{(-a)^n}{n!} \\frac{d^n\\psi}{dx^n} = \\psi(x) - a \\psi'(x) + \\frac{a^2}{2!} \\psi''(x) - \\dots$$
By Taylor's theorem, this power series is precisely the Taylor series of $\\psi(x - a)$ expanded around $x$:
$$\\boxed{\\hat{T}(a)\\psi(x) = \\psi(x - a)}$$
Thus, $\\hat{p}$ is the <i>infinitesimal generator of spatial translations</i>.</p>

<p><b>(c) Commutator $[\\hat{x}, \\hat{T}(a)]$:</b><br>
Act on an arbitrary wave function $\\psi(x)$:
$$[\\hat{x}, \\hat{T}(a)]\\psi(x) = \\hat{x}\\hat{T}(a)\\psi(x) - \\hat{T}(a)\\hat{x}\\psi(x) = x\\psi(x - a) - \\hat{T}(a)[x\\psi(x)]$$
Since $\\hat{T}(a)$ shifts the spatial argument of whatever function follows it by $-a$:
$$\\hat{T}(a)[x\\psi(x)] = (x - a)\\psi(x - a)$$
Subtracting:
$$[\\hat{x}, \\hat{T}(a)]\\psi(x) = x\\psi(x - a) - (x - a)\\psi(x - a) = a\\psi(x - a) = a\\hat{T}(a)\\psi(x)$$
Since this holds for all $\\psi(x)$:
$$\\boxed{[\\hat{x}, \\hat{T}(a)] = a\\hat{T}(a)}$$</p>`,
    trap: 'Evaluating T̂(a)[x ψ(x)] as x ψ(x - a); T̂(a) acts on ALL x dependencies in the expression to its right.'
  },
  {
    id: 'q.qm1.m3.11',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.6',
    marks: 6,
    title: 'Matrix Representation, Eigenvalue Problem and Expectation Values',
    source: 'Zettili 2e §2.6 & Solved Problem 2.7',
    prompt: `<p>An observable $\\hat{A}$ acting in a 3D Hilbert space spanned by the orthonormal basis $\{|1\\rangle, |2\\rangle, |3\\rangle\}$ is represented by the matrix:
$$A = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}$$
(a) Find the eigenvalues $\\lambda_1, \\lambda_2, \\lambda_3$ of $\\hat{A}$.<br>
(b) Determine the corresponding normalized eigenvectors $|\\lambda_1\\rangle, |\\lambda_2\\rangle, |\\lambda_3\\rangle$.<br>
(c) Verify the completeness relation $\\sum_{i=1}^3 |\\lambda_i\\rangle\\langle \\lambda_i| = I$.<br>
(d) If a system is in the state $|\\psi\\rangle = \\frac{1}{\\sqrt{2}}(|1\\rangle + |3\\rangle)$, calculate the expectation value $\\langle \\hat{A} \\rangle$ and the uncertainty $\\Delta A$.</p>`,
    tests: ['c.3.6.1', 'c.3.1.2'],
    approach: '<p>Solve characteristic polynomial det(A - λI) = 0. Solve (A - λI)v = 0 and normalize each vector. Verify outer product sum equals identity.</p>',
    solution: `<p><b>(a) Eigenvalues of $A$:</b><br>
Solve the characteristic equation $\\det(A - \\lambda I) = 0$:
$$\\det \\begin{pmatrix} -\\lambda & 1 & 0 \\\\ 1 & -\\lambda & 1 \\\\ 0 & 1 & -\\lambda \\end{pmatrix} = 0$$
Expanding along the first row:
$$-\\lambda(\\lambda^2 - 1) - 1(-\\lambda - 0) = -\\lambda^3 + \\lambda + \\lambda = -\\lambda^3 + 2\\lambda = -\\lambda(\\lambda^2 - 2) = 0$$
The roots are:
$$\\boxed{\\lambda_1 = +\\sqrt{2}, \\qquad \\lambda_2 = 0, \\qquad \\lambda_3 = -\\sqrt{2}}$$</p>

<p><b>(b) Normalized Eigenvectors:</b><br>
1. For $\\lambda_1 = \\sqrt{2}$:
$$\\begin{pmatrix} -\\sqrt{2} & 1 & 0 \\\\ 1 & -\\sqrt{2} & 1 \\\\ 0 & 1 & -\\sqrt{2} \\end{pmatrix} \\begin{pmatrix} c_1 \\\\ c_2 \\\\ c_3 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$
Row 1: $c_2 = \\sqrt{2} c_1$. Row 3: $c_2 = \\sqrt{2} c_3 \\implies c_3 = c_1$.<br>
Normalizing: $|c_1|^2 + 2|c_1|^2 + |c_1|^2 = 4|c_1|^2 = 1 \\implies c_1 = 1/2$.
$$|\\lambda_1\\rangle = \\frac{1}{2} \\begin{pmatrix} 1 \\\\ \\sqrt{2} \\\\ 1 \\end{pmatrix}$$

2. For $\\lambda_2 = 0$:
$$\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix} \\begin{pmatrix} c_1 \\\\ c_2 \\\\ c_3 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$
Row 1: $c_2 = 0$. Row 2: $c_1 + c_3 = 0 \\implies c_3 = -c_1$.<br>
Normalizing: $2|c_1|^2 = 1 \\implies c_1 = 1/\\sqrt{2}$.
$$|\\lambda_2\\rangle = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}$$

3. For $\\lambda_3 = -\\sqrt{2}$:
$$\\begin{pmatrix} \\sqrt{2} & 1 & 0 \\\\ 1 & \\sqrt{2} & 1 \\\\ 0 & 1 & \\sqrt{2} \\end{pmatrix} \\begin{pmatrix} c_1 \\\\ c_2 \\\\ c_3 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$
Row 1: $c_2 = -\\sqrt{2} c_1$. Row 3: $c_3 = c_1$.<br>
Normalizing: $4|c_1|^2 = 1 \\implies c_1 = 1/2$.
$$|\\lambda_3\\rangle = \\frac{1}{2} \\begin{pmatrix} 1 \\\\ -\\sqrt{2} \\\\ 1 \\end{pmatrix}$$</p>

<p><b>(c) Completeness Relation:</b><br>
Compute the sum of outer products:
$$|\\lambda_1\\rangle\\langle \\lambda_1| = \\frac{1}{4} \\begin{pmatrix} 1 & \\sqrt{2} & 1 \\\\ \\sqrt{2} & 2 & \\sqrt{2} \\\\ 1 & \\sqrt{2} & 1 \\end{pmatrix}$$
$$|\\lambda_2\\rangle\\langle \\lambda_2| = \\frac{1}{2} \\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 0 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix} = \\frac{1}{4} \\begin{pmatrix} 2 & 0 & -2 \\\\ 0 & 0 & 0 \\\\ -2 & 0 & 2 \\end{pmatrix}$$
$$|\\lambda_3\\rangle\\langle \\lambda_3| = \\frac{1}{4} \\begin{pmatrix} 1 & -\\sqrt{2} & 1 \\\\ -\\sqrt{2} & 2 & -\\sqrt{2} \\\\ 1 & -\\sqrt{2} & 1 \\end{pmatrix}$$
Adding all three matrices:
$$\\sum_{i=1}^3 |\\lambda_i\\rangle\\langle \\lambda_i| = \\frac{1}{4} \\begin{pmatrix} 1+2+1 & \\sqrt{2}+0-\\sqrt{2} & 1-2+1 \\\\ \\sqrt{2}+0-\\sqrt{2} & 2+0+2 & \\sqrt{2}+0-\\sqrt{2} \\\\ 1-2+1 & \\sqrt{2}+0-\\sqrt{2} & 1+2+1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} = I$$
Completeness is rigorously confirmed.</p>

<p><b>(d) Expectation Value and Uncertainty in $|\psi\\rangle = \\frac{1}{\\sqrt{2}}(|1\\rangle + |3\\rangle)$:</b><br>
In column vector representation: $|\\psi\\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$.<br>
Notice that $|\\psi\\rangle$ is directly orthogonal to $|2\\rangle$, and:
$$A |\\psi\\rangle = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix} \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 0 \\\\ 2 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ \\sqrt{2} \\\\ 0 \\end{pmatrix}$$
Then:
$$\\langle \\hat{A} \\rangle = \\langle \\psi | A | \\psi \\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ \\sqrt{2} \\\\ 0 \\end{pmatrix} = 0$$
Now compute $\\langle \\hat{A}^2 \\rangle$:
$$\\langle \\hat{A}^2 \\rangle = (A|\\psi\\rangle)^\\dagger (A|\\psi\\rangle) = \\begin{pmatrix} 0 & \\sqrt{2} & 0 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ \\sqrt{2} \\\\ 0 \\end{pmatrix} = 2$$
The uncertainty $\\Delta A$ is:
$$\\Delta A = \\sqrt{\\langle \\hat{A}^2 \\rangle - \\langle \\hat{A} \\rangle^2} = \\sqrt{2 - 0} = \\sqrt{2}$$</p>`,
    trap: 'Forgetting to normalize the eigenvectors before summing the outer products in the completeness check.'
  },
  {
    id: 'q.qm1.m3.12',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.6',
    marks: 5,
    title: 'Simultaneous Diagonalization of Commuting Operators',
    source: 'Zettili 2e §2.6.4 Theorem 2.4',
    prompt: `<p>Consider two $2 \\times 2$ matrices representing observables in a 2D Hilbert space:
$$A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}, \\qquad B = \\begin{pmatrix} 3 & 4 \\\\ 4 & 3 \\end{pmatrix}$$
(a) Prove by direct matrix multiplication that $[A, B] = 0$.<br>
(b) Find the common orthonormal basis of eigenvectors for both $A$ and $B$.<br>
(c) Construct the unitary transformation matrix $U$ that simultaneously diagonalizes both $A$ and $B$.</p>`,
    tests: ['c.3.6.3', 'c.3.5.2'],
    approach: '<p>Compute AB and BA to show AB - BA = 0. Find eigenvectors of A; since [A, B] = 0 and A has distinct eigenvalues, these must also be eigenvectors of B. Form U with columns as eigenvectors.</p>',
    solution: `<p><b>(a) Verification of $[A, B] = 0$:</b><br>
Compute the products $AB$ and $BA$:
$$AB = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} 3 & 4 \\\\ 4 & 3 \\end{pmatrix} = \\begin{pmatrix} 1(3)+2(4) & 1(4)+2(3) \\\\ 2(3)+1(4) & 2(4)+1(3) \\end{pmatrix} = \\begin{pmatrix} 11 & 10 \\\\ 10 & 11 \\end{pmatrix}$$
$$BA = \\begin{pmatrix} 3 & 4 \\\\ 4 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} = \\begin{pmatrix} 3(1)+4(2) & 3(2)+4(1) \\\\ 4(1)+3(2) & 4(2)+3(1) \\end{pmatrix} = \\begin{pmatrix} 11 & 10 \\\\ 10 & 11 \\end{pmatrix}$$
Thus $AB - BA = 0$, confirming $[A, B] = 0$.</p>

<p><b>(b) Common Orthonormal Eigenvectors:</b><br>
Find eigenvalues and eigenvectors of $A$:
$$\\det(A - \\lambda I) = \\det \\begin{pmatrix} 1-\\lambda & 2 \\\\ 2 & 1-\\lambda \\end{pmatrix} = (1-\\lambda)^2 - 4 = \\lambda^2 - 2\\lambda - 3 = (\\lambda - 3)(\\lambda + 1) = 0$$
The eigenvalues of $A$ are $\\lambda_1 = 3$ and $\\lambda_2 = -1$.<br>
1. For $\\lambda_1 = 3$:
$$\\begin{pmatrix} -2 & 2 \\\\ 2 & -2 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies x_1 = x_2 \\implies |u_1\\rangle = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$
Now test $|u_1\\rangle$ on $B$:
$$B |u_1\\rangle = \\begin{pmatrix} 3 & 4 \\\\ 4 & 3 \\end{pmatrix} \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 7 \\\\ 7 \\end{pmatrix} = 7 |u_1\\rangle$$
Indeed, $|u_1\\rangle$ is an eigenvector of $B$ with eigenvalue $\\mu_1 = 7$.<br>

2. For $\\lambda_2 = -1$:
$$\\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies x_1 = -x_2 \\implies |u_2\\rangle = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$$
Testing $|u_2\\rangle$ on $B$:
$$B |u_2\\rangle = \\begin{pmatrix} 3 & 4 \\\\ 4 & 3 \\end{pmatrix} \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix} = -1 |u_2\\rangle$$
Indeed, $|u_2\\rangle$ is an eigenvector of $B$ with eigenvalue $\\mu_2 = -1$.</p>

<p><b>(c) Diagonalizing Matrix $U$:</b><br>
The modal matrix $U$ has the normalized eigenvectors as its columns:
$$U = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$
Since $U$ is real and symmetric, $U^\\dagger = U^{-1} = U$.<br>
Check simultaneous diagonalization:
$$U^\\dagger A U = \\frac{1}{2} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}$$
$$U^\\dagger B U = \\frac{1}{2} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 3 & 4 \\\\ 4 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = \\begin{pmatrix} 7 & 0 \\\\ 0 & -1 \\end{pmatrix}$$
Both matrices are simultaneously diagonalized by the same unitary transformation.</p>`,
    trap: 'Assuming any commuting matrices share the exact same eigenvectors; if eigenvalues are degenerate, any linear combination in the eigenspace is an eigenvector of A, but only specific combinations diagonalize B.'
  },
  {
    id: 'q.qm1.m3.13',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.7',
    marks: 5,
    title: 'Transformation Between Position and Momentum Representations',
    source: 'Zettili 2e §2.7 & Griffiths 3e §3.4',
    prompt: `<p>(a) Using the continuous completeness relation $\\int_{-\\infty}^\\infty |x\\rangle \\langle x| \\, dx = \\hat{I}$ and the inner product $\\langle x|p\\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}$, derive the relationship expressing the momentum wave function $\\phi(p) = \\langle p|\\psi\\rangle$ as the Fourier transform of the coordinate wave function $\\psi(x) = \\langle x|\\psi\\rangle$.<br>
(b) Derive the inverse transformation expressing $\\psi(x)$ in terms of $\\phi(p)$.<br>
(c) Check Parseval\'s theorem: $\\int_{-\\infty}^\\infty |\\phi(p)|^2 dp = \\int_{-\\infty}^\\infty |\\psi(x)|^2 dx = 1$.</p>`,
    tests: ['c.3.7.2', 'c.3.7.1'],
    approach: '<p>Insert resolution of identity into ⟨p|ψ⟩ = ⟨p|I|ψ⟩ = ∫ ⟨p|x⟩⟨x|ψ⟩ dx. Use ⟨p|x⟩ = ⟨x|p⟩*.</p>',
    solution: `<p><b>(a) Momentum Wave Function from Position Wave Function:</b><br>
By definition, $\\phi(p) = \\langle p|\\psi\\rangle$. Insert the continuous resolution of the identity $\\hat{I} = \\int_{-\\infty}^\\infty |x\\rangle \\langle x| \\, dx$:
$$\\phi(p) = \\langle p | \\hat{I} | \\psi \\rangle = \\langle p | \\left( \\int_{-\\infty}^\\infty |x\\rangle \\langle x| \\, dx \\right) |\\psi\\rangle = \\int_{-\\infty}^\\infty \\langle p | x \\rangle \\langle x | \\psi \\rangle \\, dx$$
Using $\\langle x|\\psi\\rangle = \\psi(x)$ and the bra-ket conjugate $\\langle p|x\\rangle = \\langle x|p\\rangle^* = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{-ipx/\\hbar}$:
$$\\boxed{\\phi(p) = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\int_{-\\infty}^\\infty e^{-ipx/\\hbar} \\psi(x) \\, dx}$$
This is the standard quantum mechanical <b>Fourier transform</b> mapping coordinate space to momentum space.</p>

<p><b>(b) Inverse Transformation:</b><br>
Similarly, start with $\\psi(x) = \\langle x|\\psi\\rangle$ and insert the completeness relation of momentum eigenstates $\\hat{I} = \\int_{-\\infty}^\\infty |p\\rangle \\langle p| \\, dp$:
$$\\psi(x) = \\langle x | \\hat{I} | \\psi \\rangle = \\int_{-\\infty}^\\infty \\langle x | p \\rangle \\langle p | \\psi \\rangle \\, dp$$
Substituting $\\langle x|p\\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}$ and $\\langle p|\\psi\\rangle = \\phi(p)$:
$$\\boxed{\\psi(x) = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\int_{-\\infty}^\\infty e^{ipx/\\hbar} \\phi(p) \\, dp}$$</p>

<p><b>(c) Parseval\'s Theorem (Unitary Conservation of Norm):</b><br>
Compute the total probability in momentum space:
$$\\int_{-\\infty}^\\infty |\\phi(p)|^2 dp = \\int_{-\\infty}^\\infty \\langle \\psi | p \\rangle \\langle p | \\psi \\rangle \\, dp = \\langle \\psi | \\left( \\int_{-\\infty}^\\infty |p\\rangle \\langle p| \\, dp \\right) | \\psi \\rangle = \\langle \\psi | \\hat{I} | \\psi \\rangle = \\langle \\psi | \\psi \\rangle$$
Likewise in position space:
$$\\int_{-\\infty}^\\infty |\\psi(x)|^2 dx = \\int_{-\\infty}^\\infty \\langle \\psi | x \\rangle \\langle x | \\psi \\rangle \\, dx = \\langle \\psi | \\left( \\int_{-\\infty}^\\infty |x\\rangle \\langle x| \\, dx \\right) | \\psi \\rangle = \\langle \\psi | \\hat{I} | \\psi \\rangle = \\langle \\psi | \\psi \\rangle$$
Since $|\\psi\\rangle$ is normalized, $\\langle \\psi|\\psi\\rangle = 1$. Therefore:
$$\\int_{-\\infty}^\\infty |\\phi(p)|^2 dp = \\int_{-\\infty}^\\infty |\\psi(x)|^2 dx = 1$$
Probability is strictly conserved under the change of basis.</p>`,
    trap: 'Mixing up the sign of the exponential: e^{-ipx/ħ} for x → p and e^{+ipx/ħ} for p → x.'
  },
  {
    id: 'q.qm1.m3.14',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.7',
    marks: 4,
    title: 'Expectation Value of Momentum in Coordinate vs. Momentum Basis',
    source: 'Zettili 2e §2.7.2 & Griffiths 3e §3.4',
    prompt: `<p>Prove that the expectation value $\\langle \\hat{p} \\rangle = \\langle \\psi | \\hat{p} | \\psi \\rangle$ can be equivalently calculated as:
$$\\int_{-\\infty}^\\infty \\psi^*(x) \\left( -i\\hbar \\frac{d}{dx} \\right) \\psi(x) \\, dx = \\int_{-\\infty}^\\infty p \\, |\\phi(p)|^2 \\, dp$$
without assuming either form a priori, using only Dirac projection operators and $\\langle x|\\hat{p}|x'\\rangle = -i\\hbar \\delta'(x - x')$.</p>`,
    tests: ['c.3.7.1', 'c.3.7.2'],
    approach: `<p>Insert resolution of identity in both bases: ⟨ψ|p|ψ⟩ = ∫ ⟨ψ|p'⟩ p' ⟨p'|ψ⟩ dp' in momentum basis, and expand in position basis using ⟨x|p|ψ⟩ = -iħ dψ/dx.</p>`,
    solution: `<p><b>1. Momentum Representation:</b><br>
The momentum operator is diagonal in its own eigenbasis: $\\hat{p}|p\\rangle = p|p\\rangle$.<br>
Insert two completeness relations $\\hat{I} = \\int |p\\rangle\\langle p| dp$ and $\\hat{I} = \\int |p'\\rangle\\langle p'| dp'$:
$$\\langle \\hat{p} \\rangle = \\langle \\psi | \\hat{p} | \\psi \\rangle = \\int_{-\\infty}^\\infty dp \\int_{-\\infty}^\\infty dp' \\langle \\psi | p \\rangle \\langle p | \\hat{p} | p' \\rangle \\langle p' | \\psi \\rangle$$
Since $\\hat{p}|p'\\rangle = p'|p'\\rangle$ and $\\langle p|p'\\rangle = \\delta(p - p')$:
$$\\langle p | \\hat{p} | p' \\rangle = p' \\langle p | p' \\rangle = p' \\delta(p - p')$$
Substituting this in:
$$\\langle \\hat{p} \\rangle = \\int_{-\\infty}^\\infty dp \\int_{-\\infty}^\\infty dp' \\phi^*(p) \\, [p' \\delta(p - p')] \\, \\phi(p') = \\int_{-\\infty}^\\infty p \\, \\phi^*(p) \\phi(p) \\, dp = \\int_{-\\infty}^\\infty p \\, |\\phi(p)|^2 \\, dp$$
This shows that in momentum space, $\\hat{p}$ acts as simple multiplication by the real scalar $p$.</p>

<p><b>2. Coordinate Representation:</b><br>
Now evaluate the same expectation value by inserting two coordinate identity resolutions $\\hat{I} = \\int |x\\rangle\\langle x| dx$:
$$\\langle \\hat{p} \\rangle = \\int_{-\\infty}^\\infty dx \\int_{-\\infty}^\\infty dx' \\langle \\psi | x \\rangle \\langle x | \\hat{p} | x' \\rangle \\langle x' | \\psi \\rangle$$
To find the coordinate matrix element $\\langle x|\\hat{p}|x'\\rangle$, insert the momentum completeness relation:
$$\\langle x | \\hat{p} | x' \\rangle = \\int_{-\\infty}^\\infty dp \\, \\langle x | \\hat{p} | p \\rangle \\langle p | x' \\rangle = \\int_{-\\infty}^\\infty dp \\, p \\, \\langle x | p \\rangle \\langle p | x' \\rangle$$
Substitute $\\langle x|p\\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}$ and $\\langle p|x'\\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{-ipx'/\\hbar}$:
$$\\langle x | \\hat{p} | x' \\rangle = \\frac{1}{2\\pi\\hbar} \\int_{-\\infty}^\\infty dp \\, p \\, e^{ip(x - x')/\\hbar} = \\frac{1}{2\\pi\\hbar} \\left( -i\\hbar \\frac{\\partial}{\\partial x} \\right) \\int_{-\\infty}^\\infty dp \\, e^{ip(x - x')/\\hbar} = -i\\hbar \\frac{\\partial}{\\partial x} \\delta(x - x')$$
Now substitute this back into the expectation value:
$$\\langle \\hat{p} \\rangle = \\int_{-\\infty}^\\infty dx \\int_{-\\infty}^\\infty dx' \\psi^*(x) \\left[ -i\\hbar \\frac{\\partial}{\\partial x} \\delta(x - x') \\right] \\psi(x')$$
Integrating by parts with respect to $x$:
$$\\langle \\hat{p} \\rangle = \\int_{-\\infty}^\\infty dx \\, \\psi^*(x) \\left( -i\\hbar \\frac{d}{dx} \\right) \\psi(x)$$
Both forms are identically equal to the abstract bracket $\\langle \\psi | \\hat{p} | \\psi \\rangle$.</p>`,
    trap: 'Treating p̂ as a multiplicative variable in position space; it is a derivative operator -iħ d/dx in position space.'
  },
  {
    id: 'q.qm1.m3.15',
    course: 'qm1',
    module: 'qm1.m3',
    sec: '3.7',
    marks: 4,
    title: 'Algebraic and Physical Properties of the Parity Operator',
    source: 'Zettili 2e §2.4.4 & Problem 2.13',
    prompt: `<p>The space inversion (parity) operator $\\hat{\\Pi}$ is defined by its action on coordinate space wave functions:
$$\\hat{\\Pi}\\psi(x) = \\psi(-x)$$
(a) Show that $\\hat{\\Pi}^2 = \\hat{I}$ and deduce the allowed eigenvalues of $\\hat{\\Pi}$.<br>
(b) Prove that $\\hat{\\Pi}$ is both Hermitian and unitary.<br>
(c) Evaluate the commutators $[\\hat{\\Pi}, \\hat{x}]$ and $[\\hat{\\Pi}, \\hat{p}]$. Deduce whether $\\hat{x}$ and $\\hat{p}$ have definite parity.</p>`,
    tests: ['c.3.5.2', 'c.3.2.1', 'c.3.3.1'],
    approach: '<p>Apply definitions to a test function ψ(x). Use change of variables u = -x in inner products.</p>',
    solution: `<p><b>(a) Eigenvalues of $\\hat{\\Pi}$:</b><br>
Applying $\\hat{\\Pi}$ twice:
$$\\hat{\\Pi}^2 \\psi(x) = \\hat{\\Pi}(\\psi(-x)) = \\psi(-(-x)) = \\psi(x)$$
Since this holds for all $\\psi(x)$, we have $\\hat{\\Pi}^2 = \\hat{I}$.<br>
Let $|\\phi\\rangle$ be an eigenstate with eigenvalue $p$: $\\hat{\\Pi}|\\phi\\rangle = p|\\phi\\rangle$. Then:
$$\\hat{\\Pi}^2 |\\phi\\rangle = p^2 |\\phi\\rangle = 1 |\\phi\\rangle \\implies p^2 = 1 \\implies \\boxed{p = \\pm 1}$$
States with $p = +1$ are even under inversion: $\\psi(-x) = \\psi(x)$.<br>
States with $p = -1$ are odd under inversion: $\\psi(-x) = -\\psi(x)$.</p>

<p><b>(b) Hermiticity and Unitarity:</b><br>
1. <i>Hermiticity:</i>
$$\\langle \\phi | \\hat{\\Pi} \\psi \\rangle = \\int_{-\\infty}^\\infty \\phi^*(x) \\psi(-x) \\, dx$$
Change variables $u = -x$, so $dx = -du$:
$$\\langle \\phi | \\hat{\\Pi} \\psi \\rangle = \\int_{\\infty}^{-\\infty} \\phi^*(-u) \\psi(u) (-du) = \\int_{-\\infty}^\\infty [\\phi(-u)]^* \\psi(u) \\, du = \\int_{-\\infty}^\\infty [\\hat{\\Pi}\\phi(u)]^* \\psi(u) \\, du = \\langle \\hat{\\Pi} \\phi | \\psi \\rangle$$
Thus $\\hat{\\Pi}^\\dagger = \\hat{\\Pi}$ (Hermitian).<br>
2. <i>Unitarity:</i>
Since $\\hat{\\Pi}^\\dagger = \\hat{\\Pi}$ and $\\hat{\\Pi}^2 = \\hat{I}$:
$$\\hat{\\Pi}^\\dagger \\hat{\\Pi} = \\hat{\\Pi} \\hat{\\Pi} = \\hat{\\Pi}^2 = \\hat{I}$$
Thus $\\hat{\\Pi}$ is both Hermitian and unitary.</p>

<p><b>(c) Commutators $[\\hat{\\Pi}, \\hat{x}]$ and $[\\hat{\\Pi}, \\hat{p}]$:</b><br>
1. Act on test function $\\psi(x)$ with $[\\hat{\\Pi}, \\hat{x}]$:
$$[\\hat{\\Pi}, \\hat{x}]\\psi(x) = \\hat{\\Pi}(x\\psi(x)) - x\\hat{\\Pi}\\psi(x) = (-x)\\psi(-x) - x\\psi(-x) = -2x\\psi(-x) = -2\\hat{x}\\hat{\\Pi}\\psi(x)$$
Rearranging: $\\hat{\\Pi}\\hat{x} + \\hat{x}\\hat{\\Pi} = 0$, so $\\{\\hat{\\Pi}, \\hat{x}\\} = 0$.<br>
Thus $\\hat{\\Pi}\\hat{x} = -\\hat{x}\\hat{\\Pi}$, or:
$$\\boxed{[\\hat{\\Pi}, \\hat{x}] = -2\\hat{x}\\hat{\\Pi}}$$
Notice that $\\hat{\\Pi}^\\dagger \\hat{x} \\hat{\\Pi} = -\\hat{x}$. Thus position is an <b>odd operator</b> under parity.<br>

2. Act with $[\\hat{\\Pi}, \\hat{p}]$:
$$\\hat{\\Pi}\\hat{p}\\psi(x) = \\hat{\\Pi}\\left(-i\\hbar \\frac{d\\psi}{dx}\\right) = -i\\hbar \\left. \\frac{d\\psi}{dx} \\right|_{-x} = -i\\hbar \\left( -\\frac{d}{dx}[\\psi(-x)] \\right) = i\\hbar \\frac{d}{dx}[\\hat{\\Pi}\\psi(x)] = -\\hat{p}\\hat{\\Pi}\\psi(x)$$
Thus $\\hat{\\Pi}\\hat{p} + \\hat{p}\\hat{\\Pi} = 0 \\implies \\hat{\\Pi}^\\dagger \\hat{p} \\hat{\\Pi} = -\\hat{p}$.<br>
Momentum is also an <b>odd operator</b> under parity.<br>
Because $[\\hat{\\Pi}, \\hat{x}] \\ne 0$ and $[\\hat{\\Pi}, \\hat{p}] \\ne 0$, neither position nor momentum commutes with parity. Neither position eigenstates nor momentum eigenstates can have definite parity (indeed, $\\hat{\\Pi}|x\\rangle = |-x\\rangle$ and $\\hat{\\Pi}|p\\rangle = |-p\\rangle$).</p>`,
    trap: 'Overlooking the chain rule minus sign when differentiating ψ(-x), which makes d/dx change sign under parity.'
  }
);
