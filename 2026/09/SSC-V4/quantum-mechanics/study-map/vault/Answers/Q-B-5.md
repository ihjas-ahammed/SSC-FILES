---
type: answer
section: B
number: 5
marks_style: medium
source: Module3.pdf
source_page: 2
completed: false
---
# Question
Derive the general uncertainty relation ΔÂ ΔB̂ ≥ ½ |⟨[Â, B̂]⟩|.

# Formal Answer
1. For [[Normalization|normalized]] $|\psi\rangle$, let $A'=A-\langle A\rangle I$, $B'=B-\langle B\rangle I$, $|\alpha\rangle=A'|\psi\rangle$, and $|\beta\rangle=B'|\psi\rangle$. Here $\langle A\rangle=\langle\psi|A|\psi\rangle$. Hermiticity gives $\langle\alpha|\alpha\rangle=\langle A^2\rangle-\langle A\rangle^2=(\Delta A)^2$, and similarly for $B$. Assume finite [[Variance|variances]] and the necessary [[Operator Domain|operator domains]].

2. Schwarz gives $(\Delta A)^2(\Delta B)^2\ge|z|^2$, where $z=\langle\alpha|\beta\rangle=\langle A'B'\rangle$.

3. Since $z^*=\langle B'A'\rangle$, $z-z^*=\langle[A,B]\rangle$. Thus $\operatorname{Im}z=\langle[A,B]\rangle/(2i)$ and $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2\ge\tfrac14|\langle[A,B]\rangle|^2$.

4. Taking nonnegative square roots yields $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.

# Symbols
- [[Star Symbol]]
- [[Bra-ket Brackets]]
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
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

# Key Terms
- [[Uncertainty Relation]]
- [[Expectation Value]]
- [[Variance]]
- [[Standard Deviation]]
- [[Schwarz Inequality]]
- [[Commutator]]
- [[Hermitian Operator]]
- [[Normalization]]
- [[Operator Domain]]
- [[Star Symbol]]
- [[Bra-ket Brackets]]
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
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

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
