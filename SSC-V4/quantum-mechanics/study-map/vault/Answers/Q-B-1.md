---
type: answer
section: B
number: 1
marks_style: medium
source: Module3.pdf
source_page: 2
completed: false
---
# Question
Explain why the set of square-integrable functions is suitable for representing wave functions.

# Formal Answer
1.
A position [[Wave Function|wave function]] must have finite $\int|\psi(x)|^2dx$ so a nonzero [[Quantum State|state]] can be [[Normalization|normalized]] to total [[Probability|probability]] 1.
2.

[[Square-Integrable Function|Square-integrable functions]], identifying [[Function|functions]] equal except on [[Set|sets]] of zero length, form a [[Vector Space|vector space]].
Its [[Inner Product|inner product]] is $\langle\phi|\psi\rangle=\int\phi^*(x)\psi(x)dx$; the [[Schwarz Inequality|Schwarz inequality]] ensures it is finite.
3.

This [[Mathematical Space|space]] $L^2$ is complete under its induced [[Norm|norm]], so it is a [[Hilbert Space|Hilbert space]].
Thus [[Superposition|superpositions]] and [[Norm|norm]] [[Limit|limits]] remain valid [[Quantum State|state]] [[Vector|vectors]].
Idealized plane waves are [[Generalized State|generalized states]] rather than normalizable members of $L^2$.

# Symbols
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Integral Symbol]]
- [[Absolute-Value Bars]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]

# Key Terms
- [[Square-Integrable Function]]
- [[Wave Function]]
- [[Probability Density]]
- [[Normalization]]
- [[Hilbert Space]]
- [[Inner Product]]
- [[Quantum State]]
- [[Probability]]
- [[Function]]
- [[Set]]
- [[Vector Space]]
- [[Schwarz Inequality]]
- [[Mathematical Space]]
- [[Norm]]
- [[Superposition]]
- [[Limit]]
- [[Vector]]
- [[Generalized State]]
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Integral Symbol]]
- [[Absolute-Value Bars]]
- [[Psi Symbol]]
- [[Phi Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]
- [[Almost Everywhere]]

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
