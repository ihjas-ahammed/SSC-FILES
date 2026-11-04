---
type: answer
section: B
number: 3
marks_style: medium
source: Module3.pdf
source_page: 2
completed: false
---
# Question
Prove the Schwarz inequality: |⟨ϕ|ψ⟩|² ≤ ⟨ϕ|ϕ⟩ ⟨ψ|ψ⟩

# Formal Answer
1. If $|\phi\rangle=0$, both sides are zero, so the [[Schwarz Inequality|Schwarz inequality]] holds with equality. Otherwise $N=\langle\phi|\phi\rangle>0$.

2. Put $s=\langle\phi|\psi\rangle$, $c=s/N$, and $|r\rangle=|\psi\rangle-c|\phi\rangle$. This choice makes $\langle\phi|r\rangle=s-cN=0$.

3. [[Positive Definiteness|Positive definiteness]] gives $0\le\langle r|r\rangle=\langle\psi|\psi\rangle-c\langle\psi|\phi\rangle-c^*\langle\phi|\psi\rangle+|c|^2N=\langle\psi|\psi\rangle-|s|^2/N$. Multiplying by $N>0$ yields $|\langle\phi|\psi\rangle|^2\le\langle\phi|\phi\rangle\langle\psi|\psi\rangle$.

4. Equality occurs exactly when $r=0$, meaning the nonzero [[Vector|vectors]] are linearly dependent. Zero-[[Vector|vector]] cases also give equality.

# Symbols
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Absolute-Value Bars]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]

# Key Terms
- [[Schwarz Inequality]]
- [[Inner Product]]
- [[Norm]]
- [[Complex Conjugate]]
- [[Linear Combination]]
- [[Orthogonality]]
- [[Positive Definiteness]]
- [[Vector]]
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Absolute-Value Bars]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]

## Verbatim extracted source page
```text
                               Section B

1.  Explain why the set of square-integrable functions is suitable for representing wave
    functions.

2. Show that the function ψ( x)= A e −a| x|,  a>0,  is square-integrable. Find the
   normalization constant A.

3.  Prove the Schwarz inequality:   |⟨ϕ|ψ ⟩|2⩽⟨ϕ|ϕ ⟩⟨ψ|ψ ⟩

4. Show that if ^A and ^B are Hermitian, then ^A ^B is Hermitian only if ^A and ^B commute.


                                                                                                    ,                                                                                   ^B]⟩| .5.  Derive the general uncertainty relation Δ^A Δ ^B⩾12|⟨[^A

6.   Prove that the eigenvalues of a Hermitian operator are real.

7.  Prove that eigenvectors belonging to distinct eigenvalues of a Hermitian operator are
   orthogonal.

8.   Write the matrix representation of the ket  |ψ ⟩=a|1⟩+b|2⟩, in the basis {|1⟩,|2⟩}.

9.  Find the matrix representation of the operator    ^A =2|1⟩⟨1|+3|2⟩⟨2|.

10. Show how an operator transforms under a change of basis.

11. Explain how the position-space and momentum-space wave functions are related by a
   Fourier transform. Write the integral transformation from ψ( x) to ϕ( p). Explain the
   physical meaning of |ψ( x)| 2 and |ϕ( p)| 2.

12.  In a two-dimensional Hilbert space spanned by the orthonormal basis  {|1⟩,|2⟩}

   an operator ^A acts on the basis vectors as follows:
    ^A|1⟩=2|1⟩+i|2⟩  and  ^A|1⟩=−i|1⟩+3|2⟩
```
