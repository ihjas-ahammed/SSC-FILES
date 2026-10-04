---
type: answer
section: B
number: 2
marks_style: medium
source: Module3.pdf
source_page: 2
completed: false
---
# Question
Show that the function ψ(x) = A e⁻ᵃ|ˣ|, a > 0, is square-integrable. Find the normalization constant A.

# Formal Answer
1. Taking the absolute-value square gives $|\psi(x)|^2=|A|^2e^{-2a|x|}$.

2. The integrand is even, so $\int_{-\infty}^{\infty}|\psi(x)|^2\,dx=2|A|^2\int_0^{\infty}e^{-2ax}\,dx$.

3. For $a>0$, $\int_0^\infty e^{-2ax}\,dx=\left[-e^{-2ax}/(2a)\right]_0^\infty=1/(2a)$. Thus the squared [[Norm|norm]] is $|A|^2/a<\infty$ for finite $A$, proving square-integrability.

4. [[Normalization|Normalization]] requires $|A|^2/a=1$. Hence $|A|=\sqrt a$; choosing real positive $A$ gives $A=\sqrt a$. More generally $A=\sqrt a\,e^{i\theta}$, since a [[Phase|global phase]] does not change [[Probability|probabilities]].

# Symbols
- [[Integral Symbol]]
- [[Absolute-Value Bars]]
- [[Imaginary Unit]]
- [[Infinity Symbol]]
- [[Psi Symbol]]
- [[Theta Symbol]]
- [[Index Notation]]
- [[Equality and Inequality Signs]]
- [[Exponential Notation]]

# Key Terms
- [[Square-Integrable Function]]
- [[Exponential Function]]
- [[Absolute Value]]
- [[Integral]]
- [[Normalization]]
- [[Complex Conjugate]]
- [[Norm]]
- [[Phase]]
- [[Probability]]
- [[Integral Symbol]]
- [[Absolute-Value Bars]]
- [[Imaginary Unit]]
- [[Infinity Symbol]]
- [[Psi Symbol]]
- [[Theta Symbol]]
- [[Index Notation]]
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
