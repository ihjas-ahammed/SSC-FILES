# Bartle & Sherbert, Introduction to Real Analysis (4e) - Module 4: Sequences of Functions

Source: `scratchpad/ra2/bartle.pdf`. PDF page = printed page + 15. Printed pages are given as "p. N". Content in book order.

Conventions:
- Statements are transcribed from the page images (PDF pages 256-268), with math in LaTeX.
- Items marked **[book gives no proof]** are stated without proof in the book.
- Exercise marks: **★** = my judgement of classic exam-style items (not marked in the book).
- Scope note: 8.2.5 (Bounded Convergence Theorem, p. 251) and 8.2.6 (Dini's Theorem, p. 252) are outside the requested scope and are not extracted.

---

## 0. Earlier results used (verified against the book's text)

| Result (as numbered in the book) | One-line statement | Where used |
|---|---|---|
| Archimedean Property 2.4.3 | If $x\in\mathbb{R}$, there exists $n_x\in\mathbb{N}$ with $x\le n_x$. | Example 3.2.8(a) |
| Theorem 3.1.4 (Uniqueness of Limits) | A sequence in $\mathbb{R}$ can have at most one limit. | 8.1.1 |
| Example 3.1.6(a) | $\lim(1/n)=0$. | 8.1.2(a), (c) |
| Example 3.1.11(a) | If $a>0$ then $\lim\big(1/(1+na)\big)=0$. | (not used in 8.1/8.2 text) |
| Example 3.1.11(b) | If $0<b<1$ then $\lim(b^n)=0$. | 8.1.2(b) |
| Theorem 3.2.2 | A convergent sequence of real numbers is bounded. | 3.2.8(b) |
| Theorem 3.2.3 (Algebraic Limit Theorem) | (a) If $x_n\to x$, $y_n\to y$, $c\in\mathbb{R}$, then $x_n+y_n\to x+y$, $x_n-y_n\to x-y$, $x_ny_n\to xy$, $cx_n\to cx$. (b) If $x_n\to x$, $z_n\to z\neq 0$ with $z_n\neq 0$, then $x_n/z_n\to x/z$. | 8.1.2(a), (c) |
| Theorem 3.2.6 | If $(x_n)$ converges and $a\le x_n\le b$ for all $n$, then $a\le\lim(x_n)\le b$. | 8.1.10 |
| Example 3.2.8(a) | The sequence $(n)$ is divergent. | (not used directly) |
| Example 3.2.8(b) | The sequence $((-1)^n)$ is divergent (bounded, but no limit). | 8.1.2(b) |
| Definition 3.5.1 (Cauchy sequence) | $(x_n)$ is Cauchy if for each $\varepsilon>0$ there is $K(\varepsilon)$ with $\lvert x_n-x_m\rvert<\varepsilon$ for $m,n\ge K(\varepsilon)$. | 8.1.10 |
| Lemma 3.5.3 | A convergent sequence of real numbers is Cauchy. | 8.1.10 |
| Lemma 3.5.4 | A Cauchy sequence of real numbers is bounded. | (background) |
| Cauchy Convergence Criterion 3.5.5 | A sequence of real numbers is convergent if and only if it is Cauchy. | 8.1.10 |
| Definition 5.1.1 (continuity at a point) | $f:A\to\mathbb{R}$ is continuous at $c\in A$ if for each $\varepsilon>0$ there is $\delta>0$ with $\lvert f(x)-f(c)\rvert<\varepsilon$ whenever $x\in A$, $\lvert x-c\rvert<\delta$. | 8.2.2 |
| Theorem 6.2.4 (Mean Value Theorem) | Mean Value Theorem for differentiable functions. | 8.2.3 proof only (out of scope) |
| Theorem 6.2.8 (First Derivative Test) | First Derivative Test for extrema. | 8.1.9(e) |
| Theorem 7.3.1 (FTC, First Form) | If $F$ is continuous on $[a,b]$, $F'=f$ except on a finite set, and $f\in\mathcal{R}[a,b]$, then $\int_a^b f=F(b)-F(a)$. | 8.2.1(d) |

Page numbers of earlier results are not listed; the statements above were checked against the book text.

---

## Section 8.1 - Pointwise and Uniform Convergence

*Printed pp. 241-247. PDF 256-262.*

**Section intro (p. 241).** Let $A\subseteq\mathbb{R}$ be given and suppose that for each $n\in\mathbb{N}$ there is a function $f_n:A\to\mathbb{R}$; we shall say that $(f_n)$ is a sequence of functions on $A$ to $\mathbb{R}$. Clearly, for each $x\in A$, such a sequence gives rise to a sequence of real numbers, namely the sequence
$$(f_n(x)), \tag{1}$$
obtained by evaluating each of the functions at the point $x$. For certain values of $x\in A$ the sequence (1) may converge, and for other values of $x\in A$ this sequence may diverge. For each $x\in A$ for which the sequence (1) converges, there is a uniquely determined real number $\lim(f_n(x))$. In general, the value of this limit, when it exists, will depend on the choice of the point $x\in A$. Thus, there arises in this way a function whose domain consists of all numbers $x\in A$ for which the sequence (1) converges.

### Definition 8.1.1 (Pointwise convergence) - p. 241

Let $(f_n)$ be a sequence of functions on $A\subseteq\mathbb{R}$ to $\mathbb{R}$, let $A_0\subseteq A$, and let $f:A_0\to\mathbb{R}$. We say that the sequence $(f_n)$ **converges on $A_0$ to $f$** if, for each $x\in A_0$, the sequence $(f_n(x))$ converges to $f(x)$ in $\mathbb{R}$. In this case we call $f$ the **limit on $A_0$ of the sequence $(f_n)$**. When such a function $f$ exists, we say that the sequence $(f_n)$ is **convergent on $A_0$**, or that $(f_n)$ **converges pointwise on $A_0$**.

It follows from Theorem 3.1.4 that, except for a possible modification of the domain $A_0$, the limit function is uniquely determined. Ordinarily we choose $A_0$ to be the largest set possible; that is, we take $A_0$ to be the set of all $x\in A$ for which the sequence (1) is convergent in $\mathbb{R}$.

**Notation (p. 242).** In order to symbolize that the sequence $(f_n)$ converges on $A_0$ to $f$, we sometimes write
$$f = \lim(f_n)\ \text{on}\ A_0, \quad\text{or}\quad f_n\to f\ \text{on}\ A_0.$$
Sometimes, when $f_n$ and $f$ are given by formulas, we write
$$f(x)=\lim f_n(x)\ \text{for}\ x\in A_0,\quad\text{or}\quad f_n(x)\to f(x)\ \text{for}\ x\in A_0.$$

### Examples 8.1.2 - pp. 242-243

**(a) $\lim(x/n)=0$ for $x\in\mathbb{R}$.**
*Statement:* $\lim(x/n)=0$ for $x\in\mathbb{R}$.
*Solution (book):* For $n\in\mathbb{N}$, let $f_n(x):=x/n$ and let $f(x):=0$ for $x\in\mathbb{R}$. By Example 3.1.6(a), we have $\lim(1/n)=0$. Hence it follows from Theorem 3.2.3 that
$$\lim(f_n(x))=\lim(x/n)=x\lim(1/n)=x\cdot 0=0$$
for all $x\in\mathbb{R}$. (See Figure 8.1.1.)

**(b) $\lim(x^n)$.**
*Statement:* $\lim(x^n)$ on $\mathbb{R}$.
*Solution (book):* Let $g_n(x):=x^n$ for $x\in\mathbb{R}$, $n\in\mathbb{N}$. (See Figure 8.1.2.) Clearly, if $x=1$, then the sequence $(g_n(1))=(1)$ converges to $1$. It follows from Example 3.1.11(b) that $\lim(x^n)=0$ for $0\le x<1$, and it is readily seen that this is also true for $-1<x<0$. If $x=-1$, then $g_n(-1)=(-1)^n$, and it was seen in Example 3.2.8(b) that the sequence is divergent. Similarly, if $|x|>1$, then the sequence $(x^n)$ is not bounded, and so it is not convergent in $\mathbb{R}$. We conclude that if
$$g(x):=\begin{cases}0 & \text{for } -1<x<1,\\ 1 & \text{for } x=1,\end{cases}$$
then the sequence $(g_n)$ converges to $g$ on the set $(-1,1]$.

**(c) $\lim\big((x^2+nx)/n\big)=x$ for $x\in\mathbb{R}$.**
*Statement:* $\lim\big((x^2+nx)/n\big)=x$ for $x\in\mathbb{R}$.
*Solution (book):* Let $h_n(x):=(x^2+nx)/n$ for $x\in\mathbb{R}$, $n\in\mathbb{N}$, and let $h(x):=x$ for $x\in\mathbb{R}$. (See Figure 8.1.3.) Since we have $h_n(x)=(x^2/n)+x$, it follows from Example 3.1.6(a) and Theorem 3.2.3 that $h_n(x)\to x=h(x)$ for all $x\in\mathbb{R}$.

**(d) $\lim\big((1/n)\sin(nx+n)\big)=0$ for $x\in\mathbb{R}$.**
*Statement:* $\lim\big((1/n)\sin(nx+n)\big)=0$ for $x\in\mathbb{R}$.
*Solution (book):* Let $F_n(x):=(1/n)\sin(nx+n)$ for $x\in\mathbb{R}$, $n\in\mathbb{N}$, and let $F(x):=0$ for $x\in\mathbb{R}$. (See Figure 8.1.4.) Since $|\sin y|\le 1$ for all $y\in\mathbb{R}$ we have
$$|F_n(x)-F(x)|=\left|\tfrac{1}{n}\sin(nx+n)\right|\le\tfrac{1}{n}\tag{2}$$
for all $x\in\mathbb{R}$. Therefore it follows that $\lim(F_n(x))=0=F(x)$ for all $x\in\mathbb{R}$. The reader should note that, given any $\varepsilon>0$, if $n$ is sufficiently large, then $|F_n(x)-F(x)|<\varepsilon$ for all values of $x$ **simultaneously**! [end of example, marked by the book's end-of-proof box]

**Book remark after 8.1.2 (p. 243):** Partly to reinforce Definition 8.1.1 and partly to prepare the way for the important notion of uniform convergence, the definition is reformulated as Lemma 8.1.3.

### Lemma 8.1.3 - p. 243

*Verbatim:* A sequence $(f_n)$ of functions on $A\subseteq\mathbb{R}$ to $\mathbb{R}$ converges to a function $f:A_0\to\mathbb{R}$ on $A_0\subseteq A$ if and only if for each $\varepsilon>0$ and each $x\in A_0$ there is a natural number $K(\varepsilon,x)$ such that if $n\ge K(\varepsilon,x)$, then
$$|f_n(x)-f(x)|<\varepsilon. \tag{3}$$

*Proof:* **[book gives no proof]** "We leave it to the reader to show that this is equivalent to Definition 8.1.1."

*Book comment:* The value of $K(\varepsilon,x)$ will depend, in general, on both $\varepsilon>0$ and $x\in A_0$. In Examples 8.1.2(a-c), $K(\varepsilon,x)$ does depend on both $\varepsilon$ and $x$. The intuitive reason is that convergence is "significantly faster" at some points than at others. However, in Example 8.1.2(d), as in inequality (2), if we choose $n$ sufficiently large, we can make $|F_n(x)-F(x)|<\varepsilon$ for *all* values of $x\in\mathbb{R}$. This subtle difference distinguishes pointwise convergence (Definition 8.1.1) from uniform convergence.

### Uniform Convergence

### Definition 8.1.4 (Uniform convergence) - pp. 243-244

*Verbatim:* A sequence $(f_n)$ of functions on $A\subseteq\mathbb{R}$ to $\mathbb{R}$ **converges uniformly on $A_0\subseteq A$** to a function $f:A_0\to\mathbb{R}$ if for each $\varepsilon>0$ there is a natural number $K(\varepsilon)$ (depending on $\varepsilon$ but **not** on $x\in A_0$) such that if $n\ge K(\varepsilon)$, then
$$|f_n(x)-f(x)|<\varepsilon\quad\text{for all}\ x\in A_0. \tag{4}$$

*Book text after definition (p. 244):* In this case we say that the sequence $(f_n)$ is **uniformly convergent on $A_0$**. Sometimes we write
$$f_n\rightrightarrows f\ \text{on}\ A_0,\quad\text{or}\quad f_n(x)\rightrightarrows f(x)\ \text{for}\ x\in A_0.$$
(Written with the uniform-convergence double arrow $\rightrightarrows$ here.)

It is an immediate consequence of the definitions that if the sequence $(f_n)$ is uniformly convergent on $A_0$ to $f$, then this sequence also converges pointwise on $A_0$ to $f$ in the sense of Definition 8.1.1. The converse is not always true, as seen by a careful examination of Examples 8.1.2(a-c); other examples will be given below.

It is sometimes useful to have the following necessary and sufficient condition for a sequence $(f_n)$ **to fail** to converge uniformly on $A_0$ to $f$.

### Lemma 8.1.5 - p. 244

*Verbatim:* A sequence $(f_n)$ of functions on $A\subseteq\mathbb{R}$ to $\mathbb{R}$ does not converge uniformly on $A_0\subseteq A$ to a function $f:A_0\to\mathbb{R}$ if and only if for some $\varepsilon_0>0$ there is a subsequence $(f_{n_k})$ of $(f_n)$ and a sequence $(x_k)$ in $A_0$ such that
$$|f_{n_k}(x_k)-f(x_k)|\ge\varepsilon_0\quad\text{for all}\ k\in\mathbb{N}. \tag{5}$$

*Proof:* **[book gives no proof]** "The proof of this result requires only that the reader negate Definition 8.1.4; we leave this to the reader as an important exercise."

*Book comment:* "We now show how this result can be used."

### Examples 8.1.6 - p. 244

**(a)** Consider Example 8.1.2(a). If we let $n_k:=k$ and $x_k:=k$, then $|f_{n_k}(x_k)-f(x_k)|=|1-0|=1$. Therefore the sequence $(f_n)$ does not converge uniformly on $\mathbb{R}$ to $f$.

**(b)** Consider Example 8.1.2(b). If $n_k:=k$ and $x_k:=(\tfrac{1}{2})^{1/k}$, then
$$|g_{n_k}(x_k)-g(x_k)|=\left|\tfrac12-0\right|=\tfrac12.$$
Therefore the sequence $(g_n)$ does not converge uniformly on $(-1,1]$ to $g$.

**(c)** Consider Example 8.1.2(c). If $n_k:=k$ and $x_k:=-k$, then $h_{n_k}(x_k)=0$ and $h(x_k)=-k$, so that $|h_{n_k}(x_k)-h(x_k)|=k$. Therefore the sequence $(h_n)$ does not converge uniformly on $\mathbb{R}$ to $h$.

### The Uniform Norm

### Definition 8.1.7 - p. 244

*Verbatim:* If $A\subseteq\mathbb{R}$ and $\varphi:A\to\mathbb{R}$ is a function, we say that $\varphi$ is **bounded on $A$** if the set $\varphi(A)$ is a bounded subset of $\mathbb{R}$. If $\varphi$ is bounded we define the **uniform norm of $\varphi$ on $A$** by
$$\|\varphi\|_A:=\sup\{|\varphi(x)|:x\in A\}. \tag{6}$$
Note that it follows that if $\varepsilon>0$, then
$$\|\varphi\|_A\le\varepsilon\iff|\varphi(x)|\le\varepsilon\ \text{for all}\ x\in A. \tag{7}$$

### Lemma 8.1.8 - p. 244

*Verbatim:* A sequence $(f_n)$ of bounded functions on $A\subseteq\mathbb{R}$ converges uniformly on $A$ to $f$ if and only if $\|f_n-f\|_A\to 0$.

*Proof (book, p. 245):*
1. (⇒) Suppose $f_n\rightrightarrows f$ on $A$. By Definition 8.1.4, given $\varepsilon>0$ there exists $K(\varepsilon)$ such that if $n\ge K(\varepsilon)$ and $x\in A$, then $|f_n(x)-f(x)|\le\varepsilon$.
2. From the definition of supremum, it follows that $\|f_n-f\|_A\le\varepsilon$ whenever $n\ge K(\varepsilon)$.
3. Since $\varepsilon>0$ is arbitrary, this implies $\|f_n-f\|_A\to 0$.
4. (⇐) Suppose $\|f_n-f\|_A\to 0$. Then, given $\varepsilon>0$, there is a natural number $H(\varepsilon)$ such that if $n\ge H(\varepsilon)$ then $\|f_n-f\|_A\le\varepsilon$.
5. It follows from (7) that $|f_n(x)-f(x)|\le\varepsilon$ for all $x\in A$ and $n\ge H(\varepsilon)$. Therefore $(f_n)$ converges uniformly on $A$ to $f$. (Q.E.D.)

*Book lead-in (p. 245):* "We now illustrate the use of Lemma 8.1.8 as a tool in examining a sequence of bounded functions for uniform convergence."

### Examples 8.1.9 - pp. 245-246

**(a)** *Statement:* Convergence of $(x/n)$ on $[0,1]$ (although not uniform on $\mathbb{R}$).
*Solution (book):* We cannot apply Lemma 8.1.8 to the sequence in Example 8.1.2(a) since the function $f_n(x)-f(x)=x/n$ is not bounded on $\mathbb{R}$. For the sake of illustration, let $A:=[0,1]$. Although the sequence $(x/n)$ did not converge uniformly on $\mathbb{R}$ to the zero function, we shall show that the convergence is uniform on $A$. To see this, we observe that
$$\|f_n-f\|_A=\sup\{|x/n-0|:0\le x\le1\}=\tfrac1n$$
so that $\|f_n-f\|_A\to0$. Therefore $(f_n)$ is uniformly convergent on $A$ to $f$.

**(b)** *Statement:* $(g_n)$ with $g_n(x)=x^n$ on $A:=[0,1]$ does **not** converge uniformly to $g$ on $A$.
*Solution (book):* Let $g_n(x):=x^n$ for $x\in A:=[0,1]$, $n\in\mathbb{N}$, and let $g(x):=0$ for $0\le x<1$ and $g(1):=1$. The functions $g_n-g$ are bounded on $A$ and
$$\|g_n-g\|_A=\sup\begin{cases}x^n & \text{for } 0\le x<1\\ 0 & \text{for } x=1\end{cases}=1$$
for any $n\in\mathbb{N}$. Since $\|g_n-g\|_A$ does not converge to $0$, we infer that the sequence $(g_n)$ does not converge uniformly on $A$ to $g$.

**(c)** *Statement:* $(h_n)$ with $h_n(x)=(x^2+nx)/n$ converges uniformly on $A:=[0,8]$ to $h(x)=x$.
*Solution (book):* We cannot apply Lemma 8.1.8 to the sequence in Example 8.1.2(c) since the function $h_n(x)-h(x)=x^2/n$ is not bounded on $\mathbb{R}$. Instead, let $A:=[0,8]$ and consider
$$\|h_n-h\|_A=\sup\{x^2/n:0\le x\le8\}=64/n.$$
Therefore, the sequence $(h_n)$ converges uniformly on $A$ to $h$.

**(d)** *Statement:* $(F_n)$ with $F_n(x)=(1/n)\sin(nx+n)$ converges uniformly on $\mathbb{R}$ to $F=0$.
*Solution (book):* If we refer to Example 8.1.2(d), we see from (2) that $\|F_n-F\|_{\mathbb{R}}\le 1/n$. Hence $(F_n)$ converges uniformly on $\mathbb{R}$ to $F$.

**(e)** *Statement:* $G_n(x)=x^n(1-x)$ on $A:=[0,1]$ converges uniformly to $G=0$ on $A$.
*Solution (book):* Let $G(x):=x^n(1-x)$ for $x\in A:=[0,1]$. Then the sequence $(G_n(x))$ converges to $G(x):=0$ for each $x\in A$. To calculate the uniform norm of $G_n-G=G_n$ on $A$, we find the derivative and solve
$$G_n'(x)=x^{n-1}\big(n-(n+1)x\big)=0$$
to obtain the point $x_n:=\dfrac{n}{n+1}$. This is an interior point of $[0,1]$, and it is easily verified by using the First Derivative Test 6.2.8 that $G_n$ attains a maximum on $[0,1]$ at $x_n$. Therefore, we obtain
$$\|G_n\|_A=G_n(x_n)=\left(1+\tfrac1n\right)^{-n}\cdot\frac{1}{n+1},$$
which converges to $\tfrac1e\cdot 0=0$. Thus we see that convergence is uniform on $A$.


### Cauchy Criterion for Uniform Convergence - p. 246

(The book gives this as an unlabelled result; it is referred to in the book as Theorem 8.1.10 in the proof of 8.2.3 and as "Cauchy Criterion for Uniform Convergence".)

*Verbatim:* Let $(f_n)$ be a sequence of bounded functions on $A\subseteq\mathbb{R}$. Then this sequence converges uniformly on $A$ to a bounded function $f$ if and only if for each $\varepsilon>0$ there is a number $H(\varepsilon)$ in $\mathbb{N}$ such that for all $m,n\ge H(\varepsilon)$,
$$\|f_m-f_n\|_A\le\varepsilon.$$

*Proof (book, p. 246):*
1. (⇒) If $f_n\rightrightarrows f$ on $A$, then given $\varepsilon>0$ there exists a natural number $K(\tfrac12\varepsilon)$ such that if $n\ge K(\tfrac12\varepsilon)$ then $\|f_n-f\|_A\le\tfrac12\varepsilon$.
2. Hence, if both $m,n\ge K(\tfrac12\varepsilon)$, then for all $x\in A$:
$$|f_m(x)-f_n(x)|\le|f_m(x)-f(x)|+|f_n(x)-f(x)|\le\tfrac12\varepsilon+\tfrac12\varepsilon=\varepsilon.$$
3. Therefore $\|f_m-f_n\|_A\le\varepsilon$ for $m,n\ge H(\varepsilon):=K(\tfrac12\varepsilon)$.
4. (⇐) Suppose that for $\varepsilon>0$ there is $H(\varepsilon)$ such that if $m,n\ge H(\varepsilon)$, then $\|f_m-f_n\|_A\le\varepsilon$. Therefore, for each $x\in A$ we have
$$|f_m(x)-f_n(x)|\le\|f_m-f_n\|_A\le\varepsilon\quad\text{for}\ m,n\ge H(\varepsilon). \tag{8}$$
5. It follows that $(f_n(x))$ is a Cauchy sequence in $\mathbb{R}$; therefore, by Theorem 3.5.5, it is a convergent sequence. Define $f:A\to\mathbb{R}$ by $f(x):=\lim(f_n(x))$ for $x\in A$.
6. Letting $n\to\infty$ in (8), it follows from Theorem 3.2.6 that for each $x\in A$, $|f_m(x)-f(x)|\le\varepsilon$ for $m\ge H(\varepsilon)$. Therefore $(f_n)$ converges uniformly on $A$ to $f$. (Q.E.D.)

*Book note:* the book's proof does not separately argue that $f$ is bounded.

### Exercises for Section 8.1 (p. 246-247)

1. ★ Show that $\lim\big(x/(x+n)\big)=0$ for all $x\in\mathbb{R}$, $x\ge0$.
2. Show that $\lim\big(nx/(1+n^2x^2)\big)=0$ for all $x\in\mathbb{R}$.
3. Evaluate $\lim\big(nx/(1+nx)\big)$ for $x\in\mathbb{R}$, $x\ge0$.
4. ★ Evaluate $\lim\big(x^n/(1+x^n)\big)$ for $x\in\mathbb{R}$, $x\ge0$.
5. Evaluate $\lim\big((\sin nx)/(1+nx)\big)$ for $x\in\mathbb{R}$, $x\ge0$.
6. ★ Show that $\lim\big(\arctan nx\big)=(\pi/2)\operatorname{sgn}x$ for $x\in\mathbb{R}$.
7. Evaluate $\lim\big(e^{-nx}\big)$ for $x\in\mathbb{R}$, $x\ge0$.
8. Show that $\lim\big(xe^{-nx}\big)=0$ for $x\in\mathbb{R}$, $x\ge0$.
9. Show that $\lim\big(x^2e^{-nx}\big)=0$ and that $\lim\big(n^2x^2e^{-nx}\big)=0$ for $x\in\mathbb{R}$, $x\ge0$.
10. Show that $\lim\big((\cos\pi x)^{2n}\big)$ exists for all $x\in\mathbb{R}$. What is its limit?
11. ★ Show that if $a>0$, then the convergence of the sequence in Exercise 1 is uniform on the interval $[0,a]$, but is not uniform on the interval $[0,\infty)$.
12. Show that if $a>0$, then the convergence of the sequence in Exercise 2 is uniform on the interval $[a,\infty)$, but is not uniform on the interval $[0,\infty)$.
13. ★ Show that if $a>0$, then the convergence of the sequence in Exercise 3 is uniform on the interval $[a,\infty)$, but is not uniform on the interval $[0,\infty)$.
14. ★ Show that if $0<b<1$, then the convergence of the sequence in Exercise 4 is uniform on the interval $[0,b]$, but is not uniform on the interval $[0,1]$.
15. ★ Show that if $a>0$, then the convergence of the sequence in Exercise 5 is uniform on the interval $[a,\infty)$, but is not uniform on the interval $[0,\infty)$.
16. Show that if $a>0$, then the convergence of the sequence in Exercise 6 is uniform on the interval $[a,\infty)$, but is not uniform on the interval $(0,\infty)$.
17. Show that if $a>0$, then the convergence of the sequence in Exercise 7 is uniform on the interval $[a,\infty)$, but is not uniform on the interval $[0,\infty)$.
18. Show that the convergence of the sequence in Exercise 8 is uniform on $[0,\infty)$.
19. Show that the sequence $(x^2e^{-nx})$ converges uniformly on $[0,\infty)$.
20. ★ Show that if $a>0$, then the sequence $(n^2x^2e^{-nx})$ converges uniformly on the interval $[a,\infty)$, but that it does not converge uniformly on the interval $[0,\infty)$.
21. Show that if $(f_n)$, $(g_n)$ converge uniformly on the set $A$ to $f$, $g$, respectively, then $(f_n+g_n)$ converges uniformly on $A$ to $f+g$.
22. ★ Show that if $f_n(x):=x+1/n$ and $f(x):=x$ for $x\in\mathbb{R}$, then $(f_n)$ converges uniformly on $\mathbb{R}$ to $f$, but the sequence $(f_n^2)$ does not converge uniformly on $\mathbb{R}$. (Thus the product of uniformly convergent sequences of functions may not converge uniformly.)
23. ★ Let $(f_n)$, $(g_n)$ be sequences of bounded functions on $A$ that converge uniformly on $A$ to $f$, $g$, respectively. Show that $(f_ng_n)$ converges uniformly on $A$ to $fg$.
24. ★ Let $(f_n)$ be a sequence of functions that converges uniformly to $f$ on $A$ and that satisfies $|f_n(x)|\le M$ for all $n\in\mathbb{N}$ and all $x\in A$. If $g$ is continuous on the interval $[-M,M]$, show that the sequence $(g\circ f_n)$ converges uniformly to $g\circ f$ on $A$.

---

## Section 8.2 - Interchange of Limits

*Printed pp. 247-252. PDF 262-267.*

**Section intro (p. 247).** It is often useful to know whether the limit of a sequence of functions is a continuous function, a differentiable function, or a Riemann integrable function. Unfortunately, it is not always the case that the limit of a sequence of functions possesses these useful properties.

### Examples 8.2.1 - pp. 247-248

**(a)** Let $g_n(x):=x^n$ for $x\in[0,1]$ and $n\in\mathbb{N}$. Then, as we have noted in Example 8.1.2(b), the sequence $(g_n)$ converges pointwise to the function
$$g(x):=\begin{cases}0 & \text{for } 0\le x<1,\\ 1 & \text{for } x=1.\end{cases}$$
Although all of the functions $g_n$ are continuous at $x=1$, the limit function $g$ is not continuous at $x=1$. Recall that it was shown in Example 8.1.6(b) that this sequence does not converge uniformly on $[0,1]$.

**(b)** Each of the functions $g_n(x)=x^n$ in part (a) has a continuous derivative on $[0,1]$. However, the limit function $g$ does not have a derivative at $x=1$, since it is not continuous at that point.

**(c)** Let $f_n:[0,1]\to\mathbb{R}$ be defined for $n\ge2$ by
$$f_n(x):=\begin{cases}n^2x & \text{for } 0\le x\le 1/n,\\ -n^2(x-2/n) & \text{for } 1/n\le x\le 2/n,\\ 0 & \text{for } 2/n\le x\le 1.\end{cases}$$
(See Figure 8.2.1.) It is clear that each of the functions $f_n$ is continuous on $[0,1]$; hence it is Riemann integrable. Either by means of a direct calculation, or by referring to the significance of the integral as an area, we obtain
$$\int_0^1 f_n(x)\,dx=1\quad\text{for } n\ge2.$$
The reader may show that $f_n(x)\to0$ for all $x\in[0,1]$; hence the limit function $f$ vanishes identically and is continuous (and hence integrable), and $\int_0^1 f(x)\,dx=0$. Therefore we have the uncomfortable situation that:
$$\int_0^1 f(x)\,dx=0\neq1=\lim\int_0^1 f_n(x)\,dx.$$

**(d)** Those who consider the functions $f_n$ in part (c) to be "artificial" may prefer to consider the sequence $(h_n)$ defined by
$$h_n(x):=2nxe^{-nx^2}\quad\text{for } x\in[0,1],\ n\in\mathbb{N}.$$
Since $h_n=H_n'$, where $H_n(x):=-e^{-nx^2}$, the Fundamental Theorem 7.3.1 gives
$$\int_0^1 h_n(x)\,dx=H_n(1)-H_n(0)=1-e^{-n}.$$
It is an exercise to show that $h(x):=\lim(h_n(x))=0$ for all $x\in[0,1]$; hence
$$\int_0^1 h(x)\,dx\neq\lim\int_0^1 h_n(x)\,dx.$$

**Book comment after 8.2.1 (p. 248):** Although the extent of the discontinuity of the limit function in Example 8.2.1(a) is not very great, it is evident that more complicated examples can be constructed that will produce more extensive discontinuity. In any case, we must abandon the hope that the limit of a convergent sequence of continuous [respectively, differentiable, integrable] functions will be continuous [respectively, differentiable, integrable]. It will now be seen that the additional hypothesis of uniform convergence is sufficient to guarantee that the limit of a sequence of continuous functions is continuous. Similar results will also be established for sequences of differentiable and integrable functions.

### Figure descriptions for Section 8.1 and 8.2

**Figure 8.1.1 - $f_n(x)=x/n$ (p. 242).** Straight lines through the origin, labelled $f_1, f_2, f_3, \dots$ (drawn as a fan of lines from the origin). The steepness of $f_n$ decreases as $n$ increases, so the lines flatten toward the horizontal axis. The limit $f$ is drawn as the horizontal line (x-axis), labelled $f$, through the origin.

**Figure 8.1.2 - $g_n(x)=x^n$ (p. 242).** Curves $g_1, g_2, g_3, \dots, g$ on $[-1,1]$ plotted together. $g_1(x)=x$ is the straight diagonal; higher $n$ bend increasingly toward the x-axis on $(-1,1)$. The graph shows the point $(1, g(1))$ marked on the curve at the right end (the limit function $g$ jumps at $x=1$ to the value $1$). The curves all pass through $(1,1)$ and approach the x-axis on $(-1,1)$. The label for $g$ is shown as the horizontal line segment on the x-axis.

**Figure 8.1.3 - $h_n(x)=(x^2+nx)/n$ (p. 243).** Parabolas $h_1, h_2, h_3, \dots$ opening upward, all passing through the origin, that flatten/approach the straight line $h(x)=x$ (labelled $h$) through the origin as $n$ grows. The figure labels the $h_n$'s with a small bracket near the origin.

**Figure 8.1.4 - $F_n(x)=\sin(nx+n)/n$ (p. 243).** Curves $F_1, F_2, F_n$ (sinusoidal, decreasing in amplitude as $n$ grows, $\sin(nx+n)/n$ has amplitude $1/n$) and the limit $F=0$, drawn as the x-axis line labelled $F$. The graph shows the oscillations shrinking to the zero line.

**Figure 8.2.1 - Example 8.2.1(c) (p. 248).** Triangle spike with apex at $(1/n, n)$ on the graph of $f_n$, base from $x=0$ to $x=2/n$. The x-axis has tick marks at $1/n$ and $2/n$, and at $1$ (right end). The spike is labelled "$(\tfrac1n,n)$" at the apex. Graph of $f_n$ for a fixed $n$, to be redrawn as a tall thin triangle with height $n$ and base $[0,2/n]$, with the rest of $[0,1]$ at zero.

**Figure 8.2.2 - $|f(x)-f(c)|<\varepsilon$ (p. 249).** Three curves in the plot: the middle curve labelled $f$ (through points $(c,f(c))$ and $(x,f(x))$), the curve $f_H$ (through $(c,f_H(c))$ and $(x,f_H(x))$), and the upper and lower bands $f+\varepsilon/3$ and $f-\varepsilon/3$ drawn around $f_H$. The labels $(c, f(c))$, $(c, f_H(c))$, $(x, f_H(x))$, $(x, f(x))$ mark the four points. Used to visualize the proof of Theorem 8.2.2.

### Theorem 8.2.2 - Interchange of limit and continuity - p. 248

*Verbatim:* Let $(f_n)$ be a sequence of continuous functions on a set $A\subseteq\mathbb{R}$ and suppose that $(f_n)$ converges uniformly on $A$ to a function $f:A\to\mathbb{R}$. Then $f$ is continuous on $A$.

*Proof (book, p. 249):*
1. By hypothesis, given $\varepsilon>0$ there exists a natural number $H=H(\tfrac13\varepsilon)$ such that if $n\ge H$ then $|f_n(x)-f(x)|<\tfrac13\varepsilon$ for all $x\in A$.
2. Let $c\in A$ be arbitrary; we show that $f$ is continuous at $c$.
3. By the Triangle Inequality,
$$|f(x)-f(c)|\le|f(x)-f_H(x)|+|f_H(x)-f_H(c)|+|f_H(c)-f(c)|\le\tfrac13\varepsilon+|f_H(x)-f_H(c)|+\tfrac13\varepsilon.$$
4. Since $f_H$ is continuous at $c$, there exists $\delta:=\delta(\tfrac13\varepsilon,c,f_H)>0$ such that if $|x-c|<\delta$ and $x\in A$, then $|f_H(x)-f_H(c)|<\tfrac13\varepsilon$.
5. Therefore, if $|x-c|<\delta$ and $x\in A$, then $|f(x)-f(c)|<\varepsilon$.
6. Since $\varepsilon>0$ is arbitrary, this establishes the continuity of $f$ at the arbitrary point $c\in A$. (Q.E.D.)

**Remark (p. 249).** Although the uniform convergence of the sequence of continuous functions is sufficient to guarantee the continuity of the limit function, it is *not* necessary. (See Exercise 2.)

**Book discussion after the Remark (p. 249):** The book recalls that Weierstrass showed that the function
$$f(x):=\sum_{k=0}^{\infty}2^{-k}\cos(3^kx)$$
is continuous at every point but has no derivative at any point of $\mathbb{R}$. Taking the partial sums gives a sequence of differentiable functions $(f_n)$ that is uniformly convergent to $f$; so uniform convergence of differentiable functions does not by itself make the limit differentiable (see Exercises 9 and 10). If the sequence of derivatives $(f_n')$ is uniformly convergent, then all is well; this is proved in 8.2.3 (see Exercise 11 for the continuous-derivative case). (Paraphrased from the book, which discusses this in prose.)

### Interchange of limit and derivative - statements only (practicum, not exam)

**8.2.3 Theorem - p. 249 (statement only).** Let $J\subseteq\mathbb{R}$ be a bounded interval and let $(f_n)$ be a sequence of functions on $J$ to $\mathbb{R}$. Suppose that there exists $x_0\in J$ such that $(f_n(x_0))$ converges, and that the sequence $(f_n')$ of derivatives exists on $J$ and converges uniformly on $J$ to $g$. Then the sequence $(f_n)$ converges uniformly on $J$ to a function $f$ that has a derivative at every point of $J$ and $f'=g$.

**Interchange of limit and integral - statement (practicum, not exam)**

**8.2.4 Theorem - p. 251 (statement only).** Let $(f_n)$ be a sequence of functions in $\mathcal{R}[a,b]$ and suppose that $(f_n)$ converges uniformly on $[a,b]$ to $f$. Then $f\in\mathcal{R}[a,b]$ and
$$\int_a^b f=\lim_{n\to\infty}\int_a^b f_n. \tag{3}$$

### Exercises for Section 8.2 (pp. 252-253)

1. ★ Show that the sequence $(x^n/(1+x^n))$ does not converge uniformly on $[0,2]$ by showing that the limit function is not continuous on $[0,2]$.
2. Prove that the sequence in Example 8.2.1(c) is an example of a sequence of continuous functions that converges nonuniformly to a continuous limit.
3. Construct a sequence of functions on $[0,1]$, each of which is discontinuous at every point of $[0,1]$ and which converges uniformly to a function that is continuous at every point.
4. Suppose $(f_n)$ is a sequence of continuous functions on an interval $I$ that converges uniformly on $I$ to a function $f$. If $x_n\in I$ converges to $x_0\in I$, show that $\lim(f_n(x_n))=f(x_0)$.
5. Let $f:\mathbb{R}\to\mathbb{R}$ be uniformly continuous on $\mathbb{R}$ and let $f_n(x):=f(x+1/n)$ for $x\in\mathbb{R}$. Show that $(f_n)$ converges uniformly on $\mathbb{R}$ to $f$.
6. ★ Let $f_n(x):=1/(1+x^n)$ for $x\in[0,1]$. Find the pointwise limit $f$ of $(f_n)$ on $[0,1]$. Does $(f_n)$ converge uniformly to $f$ on $[0,1]$?
7. ★ Suppose the sequence $(f_n)$ converges uniformly to $f$ on the set $A$, and suppose that each $f_n$ is bounded on $A$. (That is, for each $n$ there is a constant $M_n$ such that $|f_n(x)|\le M_n$ for all $x\in A$.) Show that the function $f$ is bounded on $A$.
8. Let $f_n(x):=nx/(1+nx^2)$ for $x\in A:=[0,\infty)$. Show that each $f_n$ is bounded on $A$, but the pointwise limit $f$ of the sequence is not bounded on $A$. Does $(f_n)$ converge uniformly to $f$ on $A$?
9. ★ Let $f_n(x):=x^n/n$ for $x\in[0,1]$. Show that the sequence $(f_n)$ of differentiable functions converges uniformly to a differentiable function $f$ on $[0,1]$, and that the sequence $(f_n')$ converges on $[0,1]$ to a function $g$, but that $g(1)\neq f'(1)$.
10. Let $g_n(x):=e^{-nx}/n$ for $x\ge0$, $n\in\mathbb{N}$. Examine the relation between $\lim(g_n)$ and $\lim(g_n')$.
11. Let $I:=[a,b]$ and let $(f_n)$ be a sequence of functions on $I\to\mathbb{R}$ that converges on $I$ to $f$. Suppose that each derivative $f_n'$ is continuous on $I$ and that the sequence $(f_n')$ is uniformly convergent to $g$ on $I$. Prove that $f(x)-f(a)=\int_a^x g(t)\,dt$ and that $f'(x)=g(x)$ for all $x\in I$.
12. Show that $\lim\int_1^2 e^{-nx^2}\,dx=0$.
13. ★ If $a>0$, show that $\lim\int_a^\pi\frac{\sin nx}{nx}\,dx=0$. What happens if $a=0$?
14. ★ Let $f_n(x):=nx/(1+nx)$ for $x\in[0,1]$. Show that $(f_n)$ converges nonuniformly to an integrable function $f$ and that $\int_0^1 f(x)\,dx=\lim\int_0^1 f_n(x)\,dx$.
15. Let $g_n(x):=nx(1-x)^n$ for $x\in[0,1]$, $n\in\mathbb{N}$. Discuss the convergence of $(g_n)$ and $\big(\int_0^1 g_n\,dx\big)$.
16. Let $\{r_1,r_2,\dots,r_n,\dots\}$ be an enumeration of the rational numbers in $I:=[0,1]$, and let $f_n:I\to\mathbb{R}$ be defined to be $1$ if $x=r_1,\dots,r_n$ and equal to $0$ otherwise. Show that $f_n$ is Riemann integrable for each $n\in\mathbb{N}$, that $f_1(x)\le f_2(x)\le\cdots\le f_n(x)\le\cdots$, and that $f(x):=\lim(f_n(x))$ is the Dirichlet function, which is not Riemann integrable on $[0,1]$.
17. ★ Let $f_n(x):=1$ for $x\in(0,1/n)$ and $f_n(x):=0$ elsewhere in $[0,1]$. Show that $(f_n)$ is a decreasing sequence of discontinuous functions that converges to a continuous limit function, but the convergence is not uniform on $[0,1]$.
18. ★ Let $f_n(x):=x^n$ for $x\in[0,1]$, $n\in\mathbb{N}$. Show that $(f_n)$ is a decreasing sequence of continuous functions that converges to a function that is not continuous, but the convergence is not uniform on $[0,1]$.
19. ★ Let $f_n(x):=x/n$ for $x\in[0,\infty)$, $n\in\mathbb{N}$. Show that $(f_n)$ is a decreasing sequence of continuous functions that converges to a continuous limit function, but the convergence is not uniform on $[0,\infty)$.
20. ★ Give an example of a decreasing sequence $(f_n)$ of continuous functions on $[0,1)$ that converges to a continuous limit function, but the convergence is not uniform on $[0,1)$.

---

## Counts

- Definitions: 3 (8.1.1, 8.1.4, 8.1.7)
- Lemmas: 3 (8.1.3, 8.1.5, 8.1.8)
- Theorems: 2 in full (8.2.2 with proof; 8.1.10 Cauchy Criterion with proof); plus statements of 8.2.3 and 8.2.4
- Remarks: 1 (after 8.2.2)
- Examples: 8.1.2(a-d), 8.1.6(a-c), 8.1.9(a-e), 8.2.1(a-d)
- Figures: 8.1.1, 8.1.2, 8.1.3, 8.1.4, 8.2.1, 8.2.2
- Exercises: 8.1: 1-24; 8.2: 1-20 (★ = my judgement of classic exam-style)

