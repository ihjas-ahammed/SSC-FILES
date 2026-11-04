---
type: answer
section: B
number: 6
marks_style: medium
source: Module3.pdf
source_page: 2
completed: false
---
# Question
Prove that the eigenvalues of a Hermitian operator are real.

# Formal Answer
1. Let $A|v\rangle=\lambda|v\rangle$ with $v\ne0$. Taking the [[Inner Product|inner product]] with $v$ gives $\langle v|Av\rangle=\lambda\langle v|v\rangle$.

2. Hermiticity gives $\langle v|Av\rangle=\langle Av|v\rangle=\lambda^*\langle v|v\rangle$, because the first inner-product slot conjugates its [[Scalar|scalar]] coefficient.

3. Therefore $(\lambda-\lambda^*)\langle v|v\rangle=0$. The nonzero [[Eigenvector|eigenvector]] has strictly positive squared [[Norm|norm]], so it can be cancelled and $\lambda=\lambda^*$.

4. A [[Complex Number Arithmetic|complex number]] equal to its [[Complex Conjugate|complex conjugate]] has zero imaginary part. Hence every [[Eigenvalue|eigenvalue]] of the [[Hermitian Operator|Hermitian operator]] is real.

# Symbols
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Lambda Symbol]]
- [[Index Notation]]
- [[Expectation Brackets]]
- [[Equality and Inequality Signs]]

# Key Terms
- [[Hermitian Operator]]
- [[Eigenvalue]]
- [[Eigenvector]]
- [[Inner Product]]
- [[Complex Conjugate]]
- [[Norm]]
- [[Scalar]]
- [[Complex Number Arithmetic]]
- [[Star Symbol]]
- [[Bra-ket Brackets]]
- [[Lambda Symbol]]
- [[Index Notation]]
- [[Expectation Brackets]]
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
