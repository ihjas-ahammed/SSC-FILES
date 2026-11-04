---
type: answer
section: C
number: 2
marks_style: long
source: Module3.pdf
source_page: 3
completed: false
---
# Question
• Starting from the Schwarz inequality for two state vectors |α⟩ = (Â − ⟨Â⟩)|ψ⟩ and |β⟩ = (B̂ − ⟨B̂⟩)|ψ⟩, derive the generalized Robertson-Schrödinger uncertainty relation for any two Hermitian operators Â and B̂: ΔÂ ΔB̂ ≥ ½ |⟨[Â, B̂]⟩|
• Apply this general relation to position x̂ and momentum p̂ₓ to obtain the classic Heisenberg Uncertainty Principle Δx̂ Δp̂ₓ ≥ ℏ/2

# Formal Answer
(a) Center the [[Observable|observables]]. For [[Normalization|normalized]] $|\psi\rangle$, let $A'=A-\langle A\rangle I$, $B'=B-\langle B\rangle I$, $|\alpha\rangle=A'|\psi\rangle$, and $|\beta\rangle=B'|\psi\rangle$. Assume the needed [[Operator Product|operator products]] and finite [[Variance|variances]] exist.

(b) Schwarz gives $(\Delta A)^2(\Delta B)^2\ge|\langle A'B'\rangle|^2$, because $\langle\alpha|\alpha\rangle=\langle(A')^2\rangle=\langle A^2\rangle-\langle A\rangle^2=(\Delta A)^2$ and similarly for $B$.

(c) Decompose $A'B'=\tfrac12\{A',B'\}+\tfrac12[A,B]$. The first expectation is real and the second purely imaginary, since $[A,B]^\dagger=-[A,B]$.

Define $\operatorname{Cov}(A,B)=\tfrac12\langle\{A',B'\}\rangle=\tfrac12\langle AB+BA\rangle-\langle A\rangle\langle B\rangle$. Hence the full [[Robertson–Schrödinger Relation|Robertson–Schrödinger relation]] is $(\Delta A)^2(\Delta B)^2\ge\operatorname{Cov}(A,B)^2+\tfrac14|\langle[A,B]\rangle|^2$. Dropping the nonnegative [[Covariance|covariance]] square yields the printed weaker Robertson bound $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.

(d) Apply to position and momentum. On a common domain where $[\hat x,\hat p_x]=i\hbar I$, the expectation is $\langle[\hat x,\hat p_x]\rangle=i\hbar\langle\psi|\psi\rangle=i\hbar$.

Therefore $\Delta x\,\Delta p_x\ge\hbar/2$, the [[Heisenberg Uncertainty Principle|Heisenberg uncertainty principle]]. These spreads are [[Standard Deviation|standard deviations]] over repeated preparations, with finite [[Variance|variances]] assumed.

# Symbols
- [[Dagger Symbol]]
- [[Operator Hat]]
- [[Bra-ket Brackets]]
- [[Hbar Symbol]]
- [[Delta Symbol]]
- [[Identity Symbol]]
- [[Absolute-Value Bars]]
- [[Prime Symbol]]
- [[Imaginary Unit]]
- [[Psi Symbol]]
- [[Alpha Symbol]]
- [[Beta Symbol]]
- [[Index Notation]]
- [[Expectation Brackets]]
- [[Commutator Brackets]]
- [[Anticommutator Braces]]
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

# Key Terms
- [[Robertson–Schrödinger Relation]]
- [[Uncertainty Relation]]
- [[Schwarz Inequality]]
- [[Expectation Value]]
- [[Variance]]
- [[Covariance]]
- [[Anticommutator]]
- [[Commutator]]
- [[Heisenberg Uncertainty Principle]]
- [[Position Operator]]
- [[Momentum Operator]]
- [[Observable]]
- [[Normalization]]
- [[Operator Product]]
- [[Standard Deviation]]
- [[Dagger Symbol]]
- [[Operator Hat]]
- [[Bra-ket Brackets]]
- [[Hbar Symbol]]
- [[Delta Symbol]]
- [[Identity Symbol]]
- [[Absolute-Value Bars]]
- [[Prime Symbol]]
- [[Imaginary Unit]]
- [[Psi Symbol]]
- [[Alpha Symbol]]
- [[Beta Symbol]]
- [[Index Notation]]
- [[Expectation Brackets]]
- [[Commutator Brackets]]
- [[Anticommutator Braces]]
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

## Source qualification
#verify: The source labels the weaker Robertson bound as Robertson–Schrödinger. The answer derives the full covariance-inclusive relation and then the printed bound.

## Verbatim extracted source page
```text
        Construct the 2×2 matrix representation of ^A.
       Determine whether ^A is Hermitian.
       Find the eigenvalues of ^A.
13.  Given a state vector |ψ ⟩, its position-space wavefunction is ψ (x )= ⟨x|ψ ⟩ and its
   momentum-space wavefunction is ϕ ( p)= ⟨p|ψ ⟩ . Using the continuous completeness
    relation, show that  ψ (x ) and ϕ ( p) form a Fourier transform pair.

                               Section C

 1. Hermitian operators represent physical observables in quantum mechanics.
   Formulate and prove the three major theorems concerning Hermitian operators:
   Theorem 1: The eigenvalues of a Hermitian operator are strictly real.
   Theorem 2: The eigenvectors of a Hermitian operator corresponding to distinct
    eigenvalues are mutually orthogonal.
   Theorem 3: The eigenvectors of a Hermitian operator form a complete orthonormal
    basis for the vector space.


2.

   Starting from the Schwarz inequality for two state vectors |α ⟩=(^A −⟨^A ⟩)|ψ ⟩ and
   |β ⟩=(^B−⟨^B ⟩)|ψ ⟩, derive the generalized Robertson-Schrödinger uncertainty relation for

                                                                                                    ,                                                                                   ^B]⟩|   any two Hermitian operators ^A and ^B:  Δ^A Δ ^B⩾12|⟨[^A

  Apply this general relation to position ^x and momentum ^px to obtain the classic
   Heisenberg Uncertainty Principle Δ ^x Δ^px⩾ℏ                                         2

3.

        Explain how a state vector |ψ ⟩ is represented as a column matrix and an operator ^A
          is represented as a square matrix in a discrete orthonormal basis {|ϕn⟩}.
```
