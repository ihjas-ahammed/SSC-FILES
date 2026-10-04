---
type: answer
section: C
number: 1
marks_style: long
source: Module3.pdf
source_page: 3
completed: false
---
# Question
Hermitian operators represent physical observables in quantum mechanics.
Formulate and prove the three major theorems concerning Hermitian operators:
• Theorem 1: The eigenvalues of a Hermitian operator are strictly real.
• Theorem 2: The eigenvectors of a Hermitian operator corresponding to distinct eigenvalues are mutually orthogonal.
• Theorem 3: The eigenvectors of a Hermitian operator form a complete orthonormal basis for the vector space.

# Formal Answer
Assume a finite-dimensional complex inner-product [[Mathematical Space|space]] of [[Dimension|dimension]] $n$. Infinite-dimensional [[Hermitian Operator|Hermitian]] or [[Self-adjoint Operator|self-adjoint operators]] need not have a discrete complete eigenbasis; the third theorem requires this finite-dimensional qualification.

(a) Real [[Eigenvalue|eigenvalues]]. Let $Av=\lambda v$, $v\ne0$. Hermiticity gives $\lambda\langle v|v\rangle=\langle v|Av\rangle=\langle Av|v\rangle=\lambda^*\langle v|v\rangle$. Since $\langle v|v\rangle>0$, $\lambda=\lambda^*$, so $\lambda$ is real.

(b) [[Orthogonality|Orthogonality]]. Let $Au=au$ and $Av=bv$ with distinct real $a,b$. Then $b\langle u|v\rangle=\langle u|Av\rangle=\langle Au|v\rangle=a\langle u|v\rangle$. Since $a\ne b$, the overlap is zero: $\langle u|v\rangle=0$.

(c) Complete orthonormal eigenbasis, first step. The characteristic [[Polynomial|polynomial]] of a finite complex [[Matrix|matrix]] has a root by the [[Fundamental Theorem of Algebra|fundamental theorem of algebra]], giving an [[Eigenvector|eigenvector]]. Normalize one such [[Vector|vector]] $e_1$. The assertion holds directly for [[Dimension|dimension]] 1.

Inductive step. The [[Orthogonal Complement|orthogonal complement]] of $e_1$ is invariant: for $w$ [[Orthogonality|orthogonal]] to $e_1$, $\langle e_1|Aw\rangle=\langle Ae_1|w\rangle=\lambda_1\langle e_1|w\rangle=0$. The [[Operator Restriction|operator restriction]] to that complement is [[Hermitian Operator|Hermitian]] on [[Dimension|dimension]] $n-1$. By [[Mathematical Induction|mathematical induction]] it has an orthonormal eigenbasis. Together with $e_1$ this gives $n$ orthonormal [[Eigenvector|eigenvectors]] spanning the original [[Mathematical Space|space]].

Consequently $\sum_{j=1}^n|e_j\rangle\langle e_j|=I$ and $A=\sum_{j=1}^n\lambda_j|e_j\rangle\langle e_j|$. Inside a [[Degeneracy|degenerate]] [[Eigenspace|eigenspace]] an [[Orthonormal Basis|orthonormal basis]] can be chosen; arbitrary original [[Eigenvector|eigenvectors]] in that [[Eigenspace|eigenspace]] need not already be [[Normalization|normalized]] or [[Orthogonality|orthogonal]].

# Symbols
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Lambda Symbol]]
- [[Identity Symbol]]
- [[Summation Symbol]]
- [[Absolute-Value Bars]]
- [[Index Notation]]
- [[Expectation Brackets]]
- [[Equality and Inequality Signs]]

# Key Terms
- [[Hermitian Operator]]
- [[Observable]]
- [[Eigenvalue]]
- [[Eigenvector]]
- [[Orthogonality]]
- [[Orthonormal Basis]]
- [[Spectral Theorem]]
- [[Degeneracy]]
- [[Completeness Relation]]
- [[Dimension]]
- [[Mathematical Space]]
- [[Self-adjoint Operator]]
- [[Polynomial]]
- [[Matrix]]
- [[Fundamental Theorem of Algebra]]
- [[Vector]]
- [[Orthogonal Complement]]
- [[Operator Restriction]]
- [[Mathematical Induction]]
- [[Eigenspace]]
- [[Normalization]]
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Lambda Symbol]]
- [[Identity Symbol]]
- [[Summation Symbol]]
- [[Absolute-Value Bars]]
- [[Index Notation]]
- [[Expectation Brackets]]
- [[Equality and Inequality Signs]]
- [[Invariant Subspace]]

## Source qualification
#verify: Theorem 3 in the source lacks a finite-dimensional or suitable discrete-spectrum assumption. We prove the finite-dimensional version; arbitrary eigenvectors within a degeneracy are not automatically orthonormal.

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
