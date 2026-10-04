// One complete, mathematically meaningful fragment per checkpoint. Source questions stay verbatim.
const r = String.raw;
export const segments = {
  "Q-A-1": [
    r`A vector space $V$ over a field $F$ is a set equipped with vector addition and scalar multiplication, satisfying the vector-space axioms.`,
    r`Closure means $u+v\in V$ and $au\in V$ for $u,v\in V$ and $a\in F$.`,
    r`Two of the requested three properties are commutativity, $u+v=v+u$, and associativity, $(u+v)+w=u+(v+w)$.`,
    r`The third is the additive identity: a zero vector $0\in V$ exists such that $v+0=v$ for every $v\in V$.`,
  ],
  "Q-A-5": [
    r`Taking the Hermitian adjoint changes each ket into a bra and complex-conjugates its scalar coefficient: $(a|\Phi_1\rangle)^\dagger=a^*\langle\Phi_1|$.`,
    r`Therefore $\langle\psi|=a^*\langle\Phi_1|+b^*\langle\Phi_2|$.`,
  ],
  "Q-A-7": [
    r`Use the product rules $[A,BC]=[A,B]C+B[A,C]$ and $[AB,C]=A[B,C]+[A,C]B$, with $[x,p]=i\hbar I$.`,
    r`Then $[x,p^2]=[x,p]p+p[x,p]=i\hbar p+pi\hbar=2i\hbar p$.`,
    r`Likewise $[x^2,p]=x[x,p]+[x,p]x=xi\hbar+i\hbar x=2i\hbar x$.`,
  ],
  "Q-A-14": [
    r`The position and momentum wave functions form a Fourier transform pair: $\phi(p)=\frac1{\sqrt{2\pi\hbar}}\int_{-\infty}^{\infty}e^{-ipx/\hbar}\psi(x)\,dx$.`,
    r`The inverse is $\psi(x)=\frac1{\sqrt{2\pi\hbar}}\int_{-\infty}^{\infty}e^{ipx/\hbar}\phi(p)\,dp$.`,
  ],
  "Q-B-2": [
    r`1. Taking the absolute-value square gives $|\psi(x)|^2=|A|^2e^{-2a|x|}$.`,
    r`2. The integrand is even, so $\int_{-\infty}^{\infty}|\psi(x)|^2\,dx=2|A|^2\int_0^{\infty}e^{-2ax}\,dx$.`,
    r`3. For $a>0$, $\int_0^\infty e^{-2ax}\,dx=\left[-e^{-2ax}/(2a)\right]_0^\infty=1/(2a)$. Thus the squared norm is $|A|^2/a<\infty$ for finite $A$, proving square-integrability.`,
    r`4. Normalization requires $|A|^2/a=1$. Hence $|A|=\sqrt a$; choosing real positive $A$ gives $A=\sqrt a$. More generally $A=\sqrt a\,e^{i\theta}$, since a global phase does not change probabilities.`,
  ],
  "Q-B-3": [
    r`1. If $|\phi\rangle=0$, both sides are zero, so the Schwarz inequality holds with equality. Otherwise $N=\langle\phi|\phi\rangle>0$.`,
    r`2. Put $s=\langle\phi|\psi\rangle$, $c=s/N$, and $|r\rangle=|\psi\rangle-c|\phi\rangle$. This choice makes $\langle\phi|r\rangle=s-cN=0$.`,
    r`3. Positive definiteness gives $0\le\langle r|r\rangle=\langle\psi|\psi\rangle-c\langle\psi|\phi\rangle-c^*\langle\phi|\psi\rangle+|c|^2N=\langle\psi|\psi\rangle-|s|^2/N$. Multiplying by $N>0$ yields $|\langle\phi|\psi\rangle|^2\le\langle\phi|\phi\rangle\langle\psi|\psi\rangle$.`,
    r`4. Equality occurs exactly when $r=0$, meaning the nonzero vectors are linearly dependent. Zero-vector cases also give equality.`,
  ],
  "Q-B-5": [
    r`1. For normalized $|\psi\rangle$, let $A'=A-\langle A\rangle I$, $B'=B-\langle B\rangle I$, $|\alpha\rangle=A'|\psi\rangle$, and $|\beta\rangle=B'|\psi\rangle$. Here $\langle A\rangle=\langle\psi|A|\psi\rangle$. Hermiticity gives $\langle\alpha|\alpha\rangle=\langle A^2\rangle-\langle A\rangle^2=(\Delta A)^2$, and similarly for $B$. Assume finite variances and the necessary operator domains.`,
    r`2. Schwarz gives $(\Delta A)^2(\Delta B)^2\ge|z|^2$, where $z=\langle\alpha|\beta\rangle=\langle A'B'\rangle$.`,
    r`3. Since $z^*=\langle B'A'\rangle$, $z-z^*=\langle[A,B]\rangle$. Thus $\operatorname{Im}z=\langle[A,B]\rangle/(2i)$ and $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2\ge\tfrac14|\langle[A,B]\rangle|^2$.`,
    r`4. Taking nonnegative square roots yields $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.`,
  ],
  "Q-B-6": [
    r`1. Let $A|v\rangle=\lambda|v\rangle$ with $v\ne0$. Taking the inner product with $v$ gives $\langle v|Av\rangle=\lambda\langle v|v\rangle$.`,
    r`2. Hermiticity gives $\langle v|Av\rangle=\langle Av|v\rangle=\lambda^*\langle v|v\rangle$, because the first inner-product slot conjugates its scalar coefficient.`,
    r`3. Therefore $(\lambda-\lambda^*)\langle v|v\rangle=0$. The nonzero eigenvector has strictly positive squared norm, so it can be cancelled and $\lambda=\lambda^*$.`,
    r`4. A complex number equal to its complex conjugate has zero imaginary part. Hence every eigenvalue of the Hermitian operator is real.`,
  ],
  "Q-B-9": [
    r`1. In the ordered orthonormal basis, $\langle1|1\rangle=\langle2|2\rangle=1$ and $\langle1|2\rangle=\langle2|1\rangle=0$. Hence $A|1\rangle=2|1\rangle$ and $A|2\rangle=3|2\rangle$.`,
    r`2. The output coefficients form the two columns. Thus $A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$; both off-diagonal elements vanish.`,
  ],
  "Q-B-10": [
    r`1. Let $\{|i\rangle\}$ and $\{|e_j\rangle\}$ be the old and new orthonormal bases. Define $U_{ij}=\langle i|e_j\rangle$, so $|e_j\rangle=\sum_iU_{ij}|i\rangle$. Orthonormality gives $(U^\dagger U)_{mn}=\sum_iU_{im}^*U_{in}=\delta_{mn}$, so $U$ is unitary.`,
    r`2. Expand both basis vectors: $A'_{mn}=\langle e_m|A|e_n\rangle=\sum_{ij}U_{im}^*\langle i|A|j\rangle U_{jn}=\sum_{ij}U_{im}^*A_{ij}U_{jn}$. Therefore $A'=U^\dagger AU$, and state coordinates satisfy $c'=U^\dagger c$.`,
    r`3. For a general invertible change-of-basis matrix $S$, whose columns need not be orthonormal, use $A'=S^{-1}AS$ and $c'=S^{-1}c$.`,
  ],
  "Q-B-11": [
    r`1. Choose $\langle x|p\rangle=(2\pi\hbar)^{-1/2}e^{ipx/\hbar}$. Inserting the position completeness relation into $\phi(p)=\langle p|\psi\rangle$ gives $\phi(p)=\int_{-\infty}^{\infty}\langle p|x\rangle\langle x|\psi\rangle\,dx$.`,
    r`2. Conjugate symmetry gives $\langle p|x\rangle=(2\pi\hbar)^{-1/2}e^{-ipx/\hbar}$, hence $\phi(p)=(2\pi\hbar)^{-1/2}\int_{-\infty}^{\infty}e^{-ipx/\hbar}\psi(x)\,dx$. Conversely $\psi(x)=(2\pi\hbar)^{-1/2}\int_{-\infty}^{\infty}e^{ipx/\hbar}\phi(p)\,dp$.`,
    r`3. $|\psi(x)|^2$ and $|\phi(p)|^2$ are position and momentum probability densities. For an interval $[a,b]$, the position probability is $\int_a^b|\psi(x)|^2\,dx$; momentum probabilities are analogous. For a normalized state the full integrals of both densities equal 1.`,
  ],
  "Q-B-12": [
    r`1. The PDF gives two different outputs for $A|1\rangle$, so taken literally no linear operator satisfies both equations. The following complete calculation is conditional on the intended second input being $|2\rangle$.`,
    r`2. The basis outputs give columns $\begin{pmatrix}2\\i\end{pmatrix}$ and $\begin{pmatrix}-i\\3\end{pmatrix}$, so $A=\begin{pmatrix}2&-i\\i&3\end{pmatrix}$.`,
    r`3. Its Hermitian adjoint is $A^\dagger=\begin{pmatrix}2&-i\\i&3\end{pmatrix}=A$. Therefore the corrected matrix is Hermitian.`,
    r`4. The secular equation is $\det(A-\lambda I)=(2-\lambda)(3-\lambda)-(-i)(i)=\lambda^2-5\lambda+5=0$.`,
    r`5. The quadratic formula gives $\lambda_\pm=(5\pm\sqrt5)/2$. Their sum is 5 and product is 5, agreeing with the trace and determinant.`,
  ],
  "Q-C-1": [
    r`Assume a finite-dimensional complex inner-product space of dimension $n$. Infinite-dimensional Hermitian or self-adjoint operators need not have a discrete complete eigenbasis; the third theorem requires this finite-dimensional qualification.`,
    r`(a) Real eigenvalues. Let $Av=\lambda v$, $v\ne0$. Hermiticity gives $\lambda\langle v|v\rangle=\langle v|Av\rangle=\langle Av|v\rangle=\lambda^*\langle v|v\rangle$. Since $\langle v|v\rangle>0$, $\lambda=\lambda^*$, so $\lambda$ is real.`,
    r`(b) Orthogonality. Let $Au=au$ and $Av=bv$ with distinct real $a,b$. Then $b\langle u|v\rangle=\langle u|Av\rangle=\langle Au|v\rangle=a\langle u|v\rangle$. Since $a\ne b$, the overlap is zero: $\langle u|v\rangle=0$.`,
    r`(c) Complete orthonormal eigenbasis, first step. The characteristic polynomial of a finite complex matrix has a root by the fundamental theorem of algebra, giving an eigenvector. Normalize one such vector $e_1$. The assertion holds directly for dimension 1.`,
    r`Inductive step. The orthogonal complement of $e_1$ is invariant: for $w$ orthogonal to $e_1$, $\langle e_1|Aw\rangle=\langle Ae_1|w\rangle=\lambda_1\langle e_1|w\rangle=0$. The operator restriction to that complement is Hermitian on dimension $n-1$. By mathematical induction it has an orthonormal eigenbasis. Together with $e_1$ this gives $n$ orthonormal eigenvectors spanning the original space.`,
    r`Consequently $\sum_{j=1}^n|e_j\rangle\langle e_j|=I$ and $A=\sum_{j=1}^n\lambda_j|e_j\rangle\langle e_j|$. Inside a degenerate eigenspace an orthonormal basis can be chosen; arbitrary original eigenvectors in that eigenspace need not already be normalized or orthogonal.`,
  ],
  "Q-C-2": [
    r`(a) Center the observables. For normalized $|\psi\rangle$, let $A'=A-\langle A\rangle I$, $B'=B-\langle B\rangle I$, $|\alpha\rangle=A'|\psi\rangle$, and $|\beta\rangle=B'|\psi\rangle$. Assume the needed operator products and finite variances exist.`,
    r`(b) Schwarz gives $(\Delta A)^2(\Delta B)^2\ge|\langle A'B'\rangle|^2$, because $\langle\alpha|\alpha\rangle=\langle(A')^2\rangle=\langle A^2\rangle-\langle A\rangle^2=(\Delta A)^2$ and similarly for $B$.`,
    r`(c) Decompose $A'B'=\tfrac12\{A',B'\}+\tfrac12[A,B]$. The first expectation is real and the second purely imaginary, since $[A,B]^\dagger=-[A,B]$.`,
    r`Define $\operatorname{Cov}(A,B)=\tfrac12\langle\{A',B'\}\rangle=\tfrac12\langle AB+BA\rangle-\langle A\rangle\langle B\rangle$. Hence the full Robertson–Schrödinger relation is $(\Delta A)^2(\Delta B)^2\ge\operatorname{Cov}(A,B)^2+\tfrac14|\langle[A,B]\rangle|^2$. Dropping the nonnegative covariance square yields the printed weaker Robertson bound $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.`,
    r`(d) Apply to position and momentum. On a common domain where $[\hat x,\hat p_x]=i\hbar I$, the expectation is $\langle[\hat x,\hat p_x]\rangle=i\hbar\langle\psi|\psi\rangle=i\hbar$.`,
    r`Therefore $\Delta x\,\Delta p_x\ge\hbar/2$, the Heisenberg uncertainty principle. These spreads are standard deviations over repeated preparations, with finite variances assumed.`,
  ],
  "Q-C-3": [
    r`Assume finite dimension $n$, so ordinary determinants and traces apply. (a) State representation: $|\psi\rangle=\sum_{j=1}^nc_j|\phi_j\rangle$ with $c_j=\langle\phi_j|\psi\rangle$. Thus the state is the column $\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}$.`,
    r`The operator entries are $A_{ij}=\langle\phi_i|A|\phi_j\rangle$. Expanding $A|\psi\rangle$ shows that its coefficients are $d_i=\sum_jA_{ij}c_j$, so the operator sends $c$ to $Ac$.`,
    r`(b) The eigenvalue equation $Ac=\lambda c$ becomes $(A-\lambda I)c=0$. A nonzero solution exists exactly when this square matrix is singular, equivalently $\det(A-\lambda I)=0$. This is the secular equation.`,
    r`(c) By the finite spectral theorem a Hermitian matrix has an orthonormal eigenbasis $u_1,\ldots,u_n$. Put these vectors into the columns of $U$; orthonormality gives $U^\dagger U=UU^\dagger=I$.`,
    r`Since $Au_j=\lambda_j u_j$, $AU=UD$ where $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. Multiplying by $U^\dagger$ gives $U^\dagger AU=D$, proving unitary diagonalization.`,
    r`(d) Trace invariance follows from cyclicity: $\operatorname{tr}(U^\dagger AU)=\operatorname{tr}(AUU^\dagger)=\operatorname{tr}A$.`,
    r`(e) If $Av=\lambda v$, then $(U^\dagger AU)(U^\dagger v)=U^\dagger Av=\lambda U^\dagger v$. Invertibility makes $U^\dagger v\ne0$; the inverse map gives the converse. Also $\det(U^\dagger AU-\lambda I)=\det(U^\dagger)\det(A-\lambda I)\det(U)=\det(A-\lambda I)$. Thus all eigenvalues and their multiplicities are preserved.`,
  ],
  "Q-C-4": [
    r`(a) In one dimension the generalized position and momentum basis states obey $\langle x|x'\rangle=\delta(x-x')$, $\langle p|p'\rangle=\delta(p-p')$, and completeness $\int_{-\infty}^{\infty}|x\rangle\langle x|\,dx=I=\int_{-\infty}^{\infty}|p\rangle\langle p|\,dp$. These idealized kets are not normalized ordinary Hilbert-space vectors.`,
    r`(b) Put $u_p(x)=\langle x|p\rangle$. The intended differential momentum eigenvalue equation is $-i\hbar\,du_p/dx=p\,u_p(x)$, or $du_p/dx=(ip/\hbar)u_p$. The printed source equation is malformed, so this explicitly states the interpreted starting equation.`,
    r`Solving that first-order equation gives $u_p(x)=C e^{ipx/\hbar}$. The constant may depend on $p$; its phase is a basis convention.`,
    r`Use momentum delta normalization: $\langle p|p'\rangle=|C|^2\int_{-\infty}^{\infty}e^{i(p'-p)x/\hbar}\,dx=|C|^2(2\pi\hbar)\delta(p'-p)$. Thus $|C|=(2\pi\hbar)^{-1/2}$. Choosing zero basis phase gives $\langle x|p\rangle=(2\pi\hbar)^{-1/2}e^{ipx/\hbar}$; this normalization identity is distributional.`,
    r`(c) Position action. Since $\langle x|\hat x=x\langle x|$, $\langle x|\hat x|\psi\rangle=x\psi(x)$. The position operator acts by multiplication by $x$.`,
    r`(d) Momentum action. Expand $\psi(x)=(2\pi\hbar)^{-1/2}\int_{-\infty}^{\infty}e^{ipx/\hbar}\phi(p)\,dp$. Then $\langle x|\hat p|\psi\rangle=(2\pi\hbar)^{-1/2}\int_{-\infty}^{\infty}p e^{ipx/\hbar}\phi(p)\,dp=-i\hbar\,d\psi/dx$, since $-i\hbar\,d(e^{ipx/\hbar})/dx=p e^{ipx/\hbar}$.`,
    r`(e) These actions require suitable operator domains and states regular enough to interchange the derivative and integral. Integration by parts confirms momentum symmetry if the boundary term vanishes; self-adjointness also requires the appropriate adjoint domain. Part (b) uses the interpreted differential equation as a starting point, while part (d) verifies its action on general regular wave functions.`,
  ],
};
