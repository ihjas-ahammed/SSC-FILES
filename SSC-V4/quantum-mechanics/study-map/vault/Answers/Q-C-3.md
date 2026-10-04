---
type: answer
section: C
number: 3
marks_style: long
source: Module3.pdf
source_page: 3
completed: false
---
# Question
• Explain how a state vector |ψ⟩ is represented as a column matrix and an operator Â is represented as a square matrix in a discrete orthonormal basis {|ϕₙ⟩}.
• Formulate the matrix eigenvalue problem Â |ψ⟩ = λ|ψ⟩ as a secular equation det(A − λ I) = 0
• Demonstrate how a unitary transformation Û diagonalizes a Hermitian matrix representation.
• Prove that the trace and eigenvalues of an operator are invariant under unitary transformations.

# Formal Answer
Assume finite [[Dimension|dimension]] $n$, so ordinary [[Determinant|determinants]] and [[Trace|traces]] apply. (a) [[Quantum State|State]] representation: $|\psi\rangle=\sum_{j=1}^nc_j|\phi_j\rangle$ with $c_j=\langle\phi_j|\psi\rangle$. Thus the [[Quantum State|state]] is the column $\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}$.

The [[Linear Operator|operator]] entries are $A_{ij}=\langle\phi_i|A|\phi_j\rangle$. Expanding $A|\psi\rangle$ shows that its coefficients are $d_i=\sum_jA_{ij}c_j$, so the [[Linear Operator|operator]] sends $c$ to $Ac$.

(b) The [[Eigenvalue|eigenvalue]] equation $Ac=\lambda c$ becomes $(A-\lambda I)c=0$. A nonzero solution exists exactly when this square [[Matrix|matrix]] is [[Null Space|singular]], equivalently $\det(A-\lambda I)=0$. This is the [[Secular Equation|secular equation]].

(c) By the finite [[Spectral Theorem|spectral theorem]] a [[Hermitian Operator|Hermitian matrix]] has an orthonormal eigenbasis $u_1,\ldots,u_n$. Put these [[Vector|vectors]] into the columns of $U$; orthonormality gives $U^\dagger U=UU^\dagger=I$.

Since $Au_j=\lambda_j u_j$, $AU=UD$ where $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. Multiplying by $U^\dagger$ gives $U^\dagger AU=D$, proving unitary diagonalization.

(d) [[Trace|Trace]] invariance follows from cyclicity: $\operatorname{tr}(U^\dagger AU)=\operatorname{tr}(AUU^\dagger)=\operatorname{tr}A$.

(e) If $Av=\lambda v$, then $(U^\dagger AU)(U^\dagger v)=U^\dagger Av=\lambda U^\dagger v$. [[Inverse Matrix|Invertibility]] makes $U^\dagger v\ne0$; the inverse map gives the converse. Also $\det(U^\dagger AU-\lambda I)=\det(U^\dagger)\det(A-\lambda I)\det(U)=\det(A-\lambda I)$. Thus all [[Eigenvalue|eigenvalues]] and their [[Multiplicity|multiplicities]] are preserved.

# Symbols
- [[Dagger Symbol]]
- [[Bra-ket Brackets]]
- [[Lambda Symbol]]
- [[Identity Symbol]]
- [[Summation Symbol]]
- [[Transpose Symbol]]
- [[Imaginary Unit]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Determinant Notation]]
- [[Trace Notation]]
- [[Equality and Inequality Signs]]

# Key Terms
- [[Matrix Representation]]
- [[Matrix]]
- [[Orthonormal Basis]]
- [[Ket]]
- [[Linear Operator]]
- [[Eigenvalue]]
- [[Eigenvector]]
- [[Secular Equation]]
- [[Determinant]]
- [[Unitary Operator]]
- [[Change of Basis]]
- [[Trace]]
- [[Spectral Theorem]]
- [[Dimension]]
- [[Quantum State]]
- [[Null Space]]
- [[Hermitian Operator]]
- [[Vector]]
- [[Inverse Matrix]]
- [[Multiplicity]]
- [[Dagger Symbol]]
- [[Bra-ket Brackets]]
- [[Lambda Symbol]]
- [[Identity Symbol]]
- [[Summation Symbol]]
- [[Transpose Symbol]]
- [[Imaginary Unit]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Determinant Notation]]
- [[Trace Notation]]
- [[Equality and Inequality Signs]]

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
