---
type: answer
section: C
number: 4
marks_style: long
source: Module3.pdf
source_page: 4
completed: false
---
# Question
• Define the continuous position basis states {|x⟩} and momentum basis states {|p⟩}, stating their delta-function normalization and completeness relations.
• By solving the differential momentum eigenvalue equation p̂ = p⃗|p⃗⟩ in position representation, derive the scalar product (transformation function):
⟨x|p⟩ = √(1/(2πℏ)) eⁱᵖˣ/ℏ
• Using this result, prove that the position operator acts as x̂ and the momentum operator acts as −iℏ ∂/∂x in position space.

# Formal Answer
(a) In one [[Dimension|dimension]] the [[Generalized State|generalized]] position and momentum [[Basis|basis]] states obey $\langle x|x'\rangle=\delta(x-x')$, $\langle p|p'\rangle=\delta(p-p')$, and completeness $\int_{-\infty}^{\infty}|x\rangle\langle x|\,dx=I=\int_{-\infty}^{\infty}|p\rangle\langle p|\,dp$. These idealized [[Ket|kets]] are not [[Normalization|normalized]] ordinary Hilbert-[[Mathematical Space|space]] [[Vector|vectors]].

(b) Put $u_p(x)=\langle x|p\rangle$. The intended differential momentum [[Eigenvalue|eigenvalue]] equation is $-i\hbar\,du_p/dx=p\,u_p(x)$, or $du_p/dx=(ip/\hbar)u_p$. The printed source equation is malformed, so this explicitly states the interpreted starting equation.

Solving that first-order equation gives $u_p(x)=C e^{ipx/\hbar}$. The constant may depend on $p$; its [[Phase|phase]] is a [[Basis|basis]] convention.

Use momentum delta [[Normalization|normalization]]: $\langle p|p'\rangle=|C|^2\int_{-\infty}^{\infty}e^{i(p'-p)x/\hbar}\,dx=|C|^2(2\pi\hbar)\delta(p'-p)$. Thus $|C|=(2\pi\hbar)^{-1/2}$. Choosing zero [[Basis|basis]] [[Phase|phase]] gives $\langle x|p\rangle=(2\pi\hbar)^{-1/2}e^{ipx/\hbar}$; this [[Normalization|normalization]] identity is distributional.

(c) Position action. Since $\langle x|\hat x=x\langle x|$, $\langle x|\hat x|\psi\rangle=x\psi(x)$. The [[Position Operator|position operator]] acts by multiplication by $x$.

(d) Momentum action. Expand $\psi(x)=(2\pi\hbar)^{-1/2}\int_{-\infty}^{\infty}e^{ipx/\hbar}\phi(p)\,dp$. Then $\langle x|\hat p|\psi\rangle=(2\pi\hbar)^{-1/2}\int_{-\infty}^{\infty}p e^{ipx/\hbar}\phi(p)\,dp=-i\hbar\,d\psi/dx$, since $-i\hbar\,d(e^{ipx/\hbar})/dx=p e^{ipx/\hbar}$.

(e) These actions require suitable [[Operator Domain|operator domains]] and states regular enough to interchange the [[Derivative|derivative]] and [[Integral|integral]]. [[Integration by Parts|Integration by parts]] confirms momentum symmetry if the boundary term vanishes; self-adjointness also requires the appropriate [[Hermitian Adjoint|adjoint]] domain. Part (b) uses the interpreted differential equation as a starting point, while part (d) verifies its action on general regular [[Wave Function|wave functions]].

# Symbols
- [[Operator Hat]]
- [[Bra-ket Brackets]]
- [[Hbar Symbol]]
- [[Integral Symbol]]
- [[Absolute-Value Bars]]
- [[Partial Derivative Symbol]]
- [[Dirac Delta Symbol]]
- [[Imaginary Unit]]
- [[Infinity Symbol]]
- [[Pi Symbol]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

# Key Terms
- [[Continuous Basis]]
- [[Delta Function]]
- [[Completeness Relation]]
- [[Position Operator]]
- [[Momentum Operator]]
- [[Fourier Transform]]
- [[Exponential Function]]
- [[Derivative]]
- [[Planck Constant]]
- [[Integration by Parts]]
- [[Boundary Condition]]
- [[Operator Domain]]
- [[Dimension]]
- [[Generalized State]]
- [[Basis]]
- [[Ket]]
- [[Normalization]]
- [[Mathematical Space]]
- [[Vector]]
- [[Eigenvalue]]
- [[Phase]]
- [[Integral]]
- [[Hermitian Adjoint]]
- [[Wave Function]]
- [[Operator Hat]]
- [[Bra-ket Brackets]]
- [[Hbar Symbol]]
- [[Integral Symbol]]
- [[Absolute-Value Bars]]
- [[Partial Derivative Symbol]]
- [[Dirac Delta Symbol]]
- [[Imaginary Unit]]
- [[Infinity Symbol]]
- [[Pi Symbol]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

## Source qualification
#verify: The source momentum eigenvalue equation is malformed. We use the intended one-dimensional equation p̂|p⟩=p|p⟩, keeping the original source text separately.

## Verbatim extracted source page
```text
       Formulate the matrix eigenvalue problem ^A|ψ ⟩= λ|ψ ⟩ as a secular equation
        det ( A −λ I )=0

       Demonstrate how a unitary transformation ^U diagonalizes a Hermitian matrix

        representation.

       Prove that the trace and eigenvalues of an operator are invariant under unitary
       transformations.



4.

        Define the continuous position basis states {|x ⟩} and momentum basis states {|p ⟩},
        stating their delta-function normalization and completeness relations.

       By solving the differential momentum eigenvalue equation ^p=⃗p|⃗p ⟩ in position
        representation, derive the scalar product (transformation function):


                                                         i
               1    ℏpx                 2π ℏe       ⟨x|p⟩=√
       Using this result, prove that the position operator acts as ^x and the momentum
       operator acts as −iℏ∂  in position space.
                      ∂x
```
