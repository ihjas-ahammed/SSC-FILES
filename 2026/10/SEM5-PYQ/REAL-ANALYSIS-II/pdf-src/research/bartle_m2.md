# Bartle & Sherbert, *Introduction to Real Analysis* (4e) — Module 2: Differentiation

Sources: `bartle.pdf`, PDF pages 177–194 (printed pp. 162–179), with garbled text-layer output checked against rendered page images. Printed page = PDF page − 15 (verified: Chapter 6 opener is PDF 176 = printed 161; Section 6.1 starts PDF 177 = printed 162; Section 6.2 starts PDF 187 = printed 172; Section 6.3 starts PDF 195 = printed 180).

Conventions:
- Item statements are verbatim in LaTeX (book notation; `\mathbb{R}` written as $\mathbb{R}$, "$\IR$" in the book is rendered as $\mathbb{R}$).
- Proofs are step-by-step outlines of the book's own argument; bracketed text is the book's own aside or a clarification I added only where marked *[editor]*.
- ★ on an exercise = classic exam-style item. **The ★ marks are my editorial judgment, not from the book.**
- *[sic]* marks a printed cross-reference that looks wrong.

---

## Section 6.1 The Derivative (printed pp. 162–171)

### Preamble (p. 162)
Chapter 6 is developed as: 6.1 basic properties of the derivative; 6.2 the MVT and applications; 6.3 L'Hospital's Rules; 6.4 Taylor's Theorem. (Chapter opener p. 161 is historical text only.)

### Definition 6.1.1 — The derivative (p. 162)
**Definition 6.1.1.** Let $I \subseteq \mathbb{R}$ be an interval, let $f : I \to \mathbb{R}$, and let $c \in I$. We say that a real number $L$ is the *derivative of $f$ at $c$* if given any $\varepsilon > 0$ there exists $\delta(\varepsilon) > 0$ such that if $x \in I$ satisfies $0 < |x - c| < \delta(\varepsilon)$, then
$$(1)\qquad \left| \frac{f(x) - f(c)}{x - c} - L \right| < \varepsilon.$$
In this case we say that $f$ is *differentiable at $c$*, and we write $f'(c)$ for $L$.

In other words, the derivative of $f$ at $c$ is given by the limit
$$(2)\qquad f'(c) = \lim_{x \to c} \frac{f(x) - f(c)}{x - c},$$
provided this limit exists. (We allow the possibility that $c$ may be the endpoint of the interval.)

**Note (p. 162).** It is possible to define the derivative of a function having a domain more general than an interval (since the point $c$ need only be an element of the domain and also a cluster point of the domain) but the significance of the concept is most naturally apparent for functions defined on intervals. Consequently we shall limit our attention to such functions.

**Notation / running example (p. 162).** Whenever the derivative of $f : I \to \mathbb{R}$ exists at a point $c \in I$, its value is denoted by $f'(c)$. In this way we obtain a function $f'$ whose domain is a subset of the domain of $f$. In working with the function $f'$, it is convenient to regard it also as a function of $x$. For example, if $f(x) := x^2$ for $x \in \mathbb{R}$, then at any $c$ in $\mathbb{R}$ we have
$$f'(c) = \lim_{x\to c}\frac{f(x)-f(c)}{x-c} = \lim_{x\to c}\frac{x^2-c^2}{x-c} = \lim_{x\to c}(x+c) = 2c.$$
Thus $f'$ is defined on all of $\mathbb{R}$ and $f'(x) = 2x$ for $x \in \mathbb{R}$.

### Theorem 6.1.2 — Differentiable implies continuous (pp. 162–163)
**Theorem 6.1.2.** If $f : I \to \mathbb{R}$ has a derivative at $c \in I$, then $f$ is continuous at $c$.

**Proof (book).**
1. For all $x \in I$, $x \neq c$, we have $f(x) - f(c) = \left(\dfrac{f(x)-f(c)}{x-c}\right)(x-c)$.
2. Since $f'(c)$ exists, apply the limit-of-a-product theorem (Thm 4.2.4): $\lim_{x\to c}(f(x)-f(c)) = \lim_{x\to c}\left(\dfrac{f(x)-f(c)}{x-c}\right)\left(\lim_{x\to c}(x-c)\right) = f'(c)\cdot 0 = 0$.
3. Therefore $\lim_{x\to c} f(x) = f(c)$, so $f$ is continuous at $c$. $\blacksquare$

**Discussion (p. 163).** Continuity at $c$ is necessary but not sufficient. Example: for $f(x) := |x|$ and $x \neq 0$, $\dfrac{f(x)-f(0)}{x-0} = |x|/x$ equals $1$ if $x>0$ and $-1$ if $x<0$; the limit at $0$ does not exist [see Example 4.1.10(b)], so $f$ is not differentiable at $0$, although it is continuous there.

**Remark (p. 163) — Weierstrass.** By taking simple algebraic combinations of functions of the form $x \mapsto |x - c|$, it is not difficult to construct continuous functions that do not have a derivative at a finite (or even a countable) number of points. In 1872, Karl Weierstrass astounded the mathematical world by giving an example of a function that is *continuous at every point but whose derivative does not exist anywhere*. Such a function defied geometric intuition about curves and tangent lines, and consequently spurred much deeper investigations into the concepts of real analysis. It can be shown that the function $f$ defined by the series
$$f(x) := \sum_{n=0}^{\infty} \frac{1}{2^n}\cos(3^n x)$$
has the stated property. (Refs: Kline, pp. 955–966; Hawkins, pp. 44–46; a detailed proof for a slightly different example is in Appendix E.)

### Theorem 6.1.3 — Algebra of derivatives (pp. 163–164)
**Theorem 6.1.3.** Let $I \subseteq \mathbb{R}$ be an interval, let $c \in I$, and let $f : I \to \mathbb{R}$ and $g : I \to \mathbb{R}$ be functions that are differentiable at $c$. Then:

(a) If $\alpha \in \mathbb{R}$, then the function $\alpha f$ is differentiable at $c$, and
$$(3)\qquad (\alpha f)'(c) = \alpha f'(c).$$

(b) The function $f + g$ is differentiable at $c$, and
$$(4)\qquad (f+g)'(c) = f'(c) + g'(c).$$

(c) (**Product Rule**) The function $fg$ is differentiable at $c$, and
$$(5)\qquad (fg)'(c) = f'(c)g(c) + f(c)g'(c).$$

(d) (**Quotient Rule**) If $g(c) \neq 0$, then the function $f/g$ is differentiable at $c$, and
$$(6)\qquad \left(\frac{f}{g}\right)'(c) = \frac{f'(c)g(c) - f(c)g'(c)}{(g(c))^2}.$$

**Proof (book) — proves (c) and (d); (a), (b) are left as exercises (Exercise 3).**

(c) Product Rule:
1. Let $p := fg$. For $x \in I$, $x \neq c$:
$$\frac{p(x)-p(c)}{x-c} = \frac{f(x)g(x)-f(c)g(c)}{x-c} = \frac{f(x)g(x)-f(c)g(x)+f(c)g(x)-f(c)g(c)}{x-c} = \frac{f(x)-f(c)}{x-c}\cdot g(x) + f(c)\cdot\frac{g(x)-g(c)}{x-c}.$$
2. Since $g$ is continuous at $c$ (Thm 6.1.2), $\lim_{x\to c} g(x) = g(c)$.
3. Since $f$ and $g$ are differentiable at $c$, Thm 4.2.4 gives $\lim_{x\to c}\dfrac{p(x)-p(c)}{x-c} = f'(c)g(c) + f(c)g'(c)$.
4. Hence $p = fg$ is differentiable at $c$ and (5) holds.

(d) Quotient Rule:
1. Let $q := f/g$. Since $g$ is differentiable at $c$, it is continuous at $c$ (Thm 6.1.2). Since $g(c) \neq 0$, Thm 4.2.9 gives an interval $J \subseteq I$ with $c \in J$ such that $g(x) \neq 0$ for all $x \in J$.
2. For $x \in J$, $x \neq c$ (the book's displayed algebra, with $g(x)g(c)$ factored out):
$$\frac{q(x)-q(c)}{x-c} = \frac{f(x)g(c)-f(c)g(x)}{g(x)g(c)(x-c)} = \frac{1}{g(x)g(c)}\left[\frac{f(x)-f(c)}{x-c}\cdot g(c) - f(c)\cdot\frac{g(x)-g(c)}{x-c}\right].$$
3. Using continuity of $g$ at $c$ and differentiability of $f$, $g$ at $c$:
$$q'(c) = \lim_{x\to c}\frac{q(x)-q(c)}{x-c} = \frac{f'(c)g(c)-f(c)g'(c)}{(g(c))^2}.$$
4. So $q = f/g$ is differentiable at $c$ and (6) holds. $\blacksquare$

**Mathematical induction remark (p. 164).** Induction may be used to obtain the extensions in Corollary 6.1.4.

### Corollary 6.1.4 — Finite sums and products (pp. 164–165)
**Corollary 6.1.4.** If $f_1, f_2, \ldots, f_n$ are functions on an interval $I$ to $\mathbb{R}$ that are differentiable at $c \in I$, then:

(a) The function $f_1 + f_2 + \cdots + f_n$ is differentiable at $c$ and
$$(7)\qquad (f_1 + f_2 + \cdots + f_n)'(c) = f_1'(c) + f_2'(c) + \cdots + f_n'(c).$$

(b) The function $f_1 f_2 \cdots f_n$ is differentiable at $c$, and
$$(8)\qquad (f_1 f_2\cdots f_n)'(c) = f_1'(c)f_2(c)\cdots f_n(c) + f_1(c)f_2'(c)\cdots f_n(c) + \cdots + f_1(c)f_2(c)\cdots f_n'(c).$$

An important special case of (8) occurs if the functions are equal, that is $f_1 = f_2 = \cdots = f_n = f$. Then (8) becomes
$$(9)\qquad (f^n)'(c) = n\,(f(c))^{n-1} f'(c).$$
In particular, if $f(x) := x$, then the derivative of $g(x) := x^n$ is $g'(x) = nx^{n-1}$, $n \in \mathbb{N}$. The formula is extended to negative integers by applying the Quotient Rule 6.1.3(d).

**Notation (p. 165).** If $I \subseteq \mathbb{R}$ is an interval and $f : I \to \mathbb{R}$, $f'$ denotes the function whose domain is the subset of $I$ where $f$ is differentiable; $f'(c)$ is the value at $c$. Other notations: $Df$ for $f'$. Formulas (4) and (5) read
$$D(f+g) = Df + Dg, \qquad D(fg) = (Df)\cdot g + f\cdot(Dg).$$
With $x$ as "independent variable": $\dfrac{d}{dx}(f(x)g(x)) = \left(\dfrac{df}{dx}(x)\right)g(x) + f(x)\left(\dfrac{dg}{dx}(x)\right)$. (Leibniz notation: "This last notation, due to Leibniz, has certain advantages. However, it also has certain disadvantages and must be used with some care.")

### Section heading "The Chain Rule" (p. 165) — discussion
"We now turn to the theorem on the differentiation of composite functions known as the 'Chain Rule'. It provides a formula for finding the derivative of a composite function $g\circ f$ in terms of the derivatives of $g$ and $f$. We first establish the following theorem concerning the derivative of a function at a point that gives us a very nice method for proving the Chain Rule. It will also be used to derive the formula for differentiating inverse functions."

### Theorem 6.1.5 — Carathéodory's Theorem (pp. 165–166)
**Theorem 6.1.5 (Carathéodory).** Let $f$ be defined on an interval $I$ containing the point $c$. Then $f$ is differentiable at $c$ if and only if there exists a function $\varphi$ on $I$ that is continuous at $c$ and satisfies
$$(10)\qquad f(x) - f(c) = \varphi(x)(x-c)\qquad\text{for } x \in I.$$
In this case, we have $\varphi(c) = f'(c)$.

**Proof (book).**

($\Rightarrow$) Suppose $f'(c)$ exists. Define
$$\varphi(x) := \begin{cases} \dfrac{f(x)-f(c)}{x-c} & \text{for } x \neq c,\ x \in I,\\[2mm] f'(c) & \text{for } x = c.\end{cases}$$
1. Continuity of $\varphi$ at $c$ follows from $\lim_{x\to c}\varphi(x) = f'(c)$.
2. If $x = c$, both sides of (10) equal $0$.
3. If $x \neq c$, multiplying $\varphi(x)$ by $x-c$ gives (10) for all other $x \in I$.

($\Leftarrow$) Suppose $\varphi$ is continuous at $c$ and satisfies (10).
1. Divide (10) by $x - c \neq 0$ (for $x \neq c$): $\dfrac{f(x)-f(c)}{x-c} = \varphi(x)$.
2. By continuity of $\varphi$ at $c$, $\lim_{x\to c}\dfrac{f(x)-f(c)}{x-c} = \lim_{x\to c}\varphi(x) = \varphi(c)$ exists.
3. Therefore $f$ is differentiable at $c$ and $f'(c) = \varphi(c)$. $\blacksquare$

**Illustration (p. 166).** For $f(x) := x^3$, the factorization $x^3 - c^3 = (x^2 + cx + c^2)(x-c)$ shows that $\varphi(x) := x^2 + cx + c^2$ satisfies the conditions of the theorem. Hence $f$ is differentiable at every $c \in \mathbb{R}$ and $f'(c) = \varphi(c) = 3c^2$.

**Motivation for Chain Rule (p. 166).** One approach is to write, when $f(x) \neq f(c)$,
$$\frac{g(f(x))-g(f(c))}{x-c} = \frac{g(f(x))-g(f(c))}{f(x)-f(c)}\cdot\frac{f(x)-f(c)}{x-c}.$$
This suggests the correct limit, but the first factor is undefined if $f(x)-f(c) = 0$ for values of $x$ near $c$, which presents a problem. "However, the use of Carathéodory's Theorem neatly avoids this difficulty."

### Theorem 6.1.6 — Chain Rule (pp. 166)
**Theorem 6.1.6 (Chain Rule).** Let $I, J$ be intervals in $\mathbb{R}$, let $g : I \to \mathbb{R}$ and $f : J \to \mathbb{R}$ be functions such that $f(J) \subseteq I$, and let $c \in J$. If $f$ is differentiable at $c$ and if $g$ is differentiable at $f(c)$, then the composite function $g \circ f$ is differentiable at $c$ and
$$(11)\qquad (g\circ f)'(c) = g'(f(c))\cdot f'(c).$$

**Proof (book).**
1. Since $f'(c)$ exists, Carathéodory's Theorem 6.1.5 gives a function $\varphi$ on $J$, continuous at $c$, with $f(x)-f(c) = \varphi(x)(x-c)$ for $x \in J$, and $\varphi(c) = f'(c)$.
2. Since $g'(f(c))$ exists, with $d := f(c)$, Carathéodory's Theorem gives a function $\psi$ on $I$, continuous at $d$, with $g(y)-g(d) = \psi(y)(y-d)$ for $y \in I$, and $\psi(d) = g'(d)$.
3. Substitute $y = f(x)$ and $d = f(c)$: for all $x \in J$ with $f(x) \in I$,
$$g(f(x))-g(f(c)) = \psi(f(x))\,(f(x)-f(c)) = \big[(\psi\circ f)(x)\cdot\varphi(x)\big](x-c).$$
4. The function $(\psi\circ f)\cdot\varphi$ is continuous at $c$ (composition of functions continuous at the relevant points, and product), and its value at $c$ is $g'(f(c))\cdot f'(c)$.
5. Carathéodory's Theorem then gives (11). $\blacksquare$

**Remark after Chain Rule (p. 166).** If $g$ is differentiable on $I$, and $f$ is differentiable on $J$, and $f(J)\subseteq I$, then $(g\circ f)' = (g'\circ f)\cdot f'$, which can also be written $D(g\circ f) = (Dg\circ f)\cdot Df$.

### Examples 6.1.7 (pp. 167–168)
**Example 6.1.7 (a) (p. 167).** If $f : I \to \mathbb{R}$ is differentiable on $I$ and $g(y) := y^n$ for $y \in \mathbb{R}$ and $n \in \mathbb{N}$, then since $g'(y) = ny^{n-1}$, the Chain Rule gives
$$(g\circ f)'(x) = g'(f(x))\cdot f'(x) \qquad\text{for } x \in I.$$
Therefore $(f^n)'(x) = n(f(x))^{n-1}f'(x)$ for all $x \in I$, as in (9).

**Example 6.1.7 (b) (p. 167).** Suppose $f : I \to \mathbb{R}$ is differentiable on $I$ and $f(x) \neq 0$ and $f'(x) \neq 0$ for $x \in I$. If $h(y) := 1/y$ for $y \neq 0$, then (exercise) $h'(y) = -1/y^2$ for $y \neq 0$. Therefore
$$\left(\frac{1}{f}\right)'(x) = (h\circ f)'(x) = h'(f(x))f'(x) = -\frac{f'(x)}{(f(x))^2}\qquad\text{for } x \in I.$$

**Example 6.1.7 (c) (p. 167).** The absolute value function $g(x) := |x|$ is differentiable at all $x \neq 0$ and has derivative $g'(x) = \operatorname{sgn}(x)$ for $x \neq 0$. (The signum function is defined in Example 4.1.10(b).) Though $\operatorname{sgn}$ is defined everywhere, it is not equal to $g'$ at $x = 0$ since $g'(0)$ does not exist.
Now if $f$ is differentiable, the Chain Rule implies that $g\circ f = |f|$ is differentiable at all points $x$ where $f(x) \neq 0$, with
$$|f|'(x) = \operatorname{sgn}(f(x))\cdot f'(x) = \begin{cases} f'(x) & \text{if } f(x) > 0,\\ -f'(x) & \text{if } f(x) < 0.\end{cases}$$
If $f$ is differentiable at $c$ with $f(c) = 0$, then it is an exercise to show that $|f|$ is differentiable at $c$ if and only if $f'(c) = 0$ (Exercise 7 of 6.1).
*Example:* for $f(x) := x^2 - 1$, $|f|'(x) = \operatorname{sgn}(x^2-1)\cdot(2x)$ for $x \neq 1, -1$. See Figure 6.1.1.

**Example 6.1.7 (d) (pp. 167–168).** It will be proved later that if $S(x) := \sin x$ and $C(x) := \cos x$ for all $x \in \mathbb{R}$, then
$$S'(x) = \cos x = C(x) \qquad\text{and}\qquad C'(x) = -\sin x = -S(x)$$
for all $x \in \mathbb{R}$. Using these facts with the definitions
$$\tan x := \frac{\sin x}{\cos x},\qquad \sec x := \frac{1}{\cos x},\qquad \cot x := \frac{\cos x}{\sin x},\qquad \csc x := \frac{1}{\sin x},$$
and the Quotient Rule 6.1.3(d), one obtains, for $x \neq (2k+1)\pi/2$, $k \in \mathbb{Z}$:
$$D\tan x = (\sec x)^2,\qquad D\sec x = (\sec x)(\tan x).$$
(Book's computation: $D\tan x = \frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{(\cos x)^2} = (\sec x)^2$; $D\sec x = \frac{0 - 1(-\sin x)}{(\cos x)^2} = \frac{\sin x}{(\cos x)^2} = (\sec x)(\tan x)$.)
Similarly, for $x \neq k\pi$, $k \in \mathbb{Z}$:
$$D\cot x = -(\csc x)^2,\qquad D\csc x = -(\csc x)(\cot x).$$

**Example 6.1.7 (e) (p. 168).** Suppose $f$ is defined by
$$f(x) := \begin{cases} x^2\sin(1/x) & \text{for } x \neq 0,\\ 0 & \text{for } x = 0.\end{cases}$$
Using $D\sin x = \cos x$ and the Product Rule 6.1.3(c) and the Chain Rule 6.1.6 (the book leaves "why?" to the reader):
$$f'(x) = 2x\sin(1/x) - \cos(1/x)\qquad\text{for } x \neq 0.$$
At $x = 0$, none of the calculational rules apply (why?), so the derivative must be found from the definition:
$$f'(0) = \lim_{x\to0}\frac{f(x)-f(0)}{x-0} = \lim_{x\to0}\frac{x^2\sin(1/x)}{x} = \lim_{x\to0} x\sin(1/x) = 0.$$
Hence $f'$ exists at all $x \in \mathbb{R}$. However, $f'$ does not have a limit at $x = 0$ (why?), so $f'$ is discontinuous at $0$. Thus a function that is differentiable at every point of $\mathbb{R}$ need not have a continuous derivative. $\square$

### Inverse functions — discussion (pp. 168–169)
"We will now relate the derivative of a function to the derivative of its inverse function, when this inverse function exists. We will limit our attention to a continuous strictly monotone function and use the Continuous Inverse Theorem 5.6.5 to ensure the existence of a continuous inverse function.
If $f$ is a continuous strictly monotone function on an interval $I$, then its inverse function $g = f^{-1}$ is defined on the interval $J := f(I)$ and satisfies $g(f(x)) = x$ for $x \in I$.
If $c \in I$ and $d := f(c)$, and if we knew that both $f'(c)$ and $g'(d)$ exist, then we could differentiate both sides of the equation and apply the Chain Rule to the left side to get $g'(f(c))\cdot f'(c) = 1$. Thus, if $f'(c) \neq 0$, we would obtain $g'(d) = \dfrac{1}{f'(c)}$.
However, it is necessary to deduce the differentiability of the inverse function $g$ from the assumed differentiability of $f$ before such a calculation can be performed. This is nicely accomplished by using Carathéodory's Theorem."

### Theorem 6.1.8 — Derivative of an inverse at a point (p. 169)
**Theorem 6.1.8.** Let $I$ be an interval in $\mathbb{R}$ and let $f : I \to \mathbb{R}$ be strictly monotone and continuous on $I$. Let $J := f(I)$ and let $g : J \to \mathbb{R}$ be the strictly monotone and continuous function inverse to $f$. If $f$ is differentiable at $c \in I$ and $f'(c) \neq 0$, then $g$ is differentiable at $d := f(c)$ and
$$(12)\qquad g'(d) = \frac{1}{f'(c)} = \frac{1}{f'(g(d))}.$$

**Proof (book).**
1. Given $c \in I$, Carathéodory's Theorem 6.1.5 gives a function $\varphi$ on $I$ that is continuous at $c$, with $f(x) - f(c) = \varphi(x)(x-c)$ for $x \in I$, and $\varphi(c) = f'(c)$.
2. Since $\varphi(c) \neq 0$, Thm 4.2.9 gives a neighborhood $V := (c-\delta, c+\delta)$ such that $\varphi(x) \neq 0$ for all $x \in V \cap I$.
3. Let $U := f(V\cap I)$. The inverse $g$ satisfies $f(g(y)) = y$ for $y \in U$, so
$$y - d = f(g(y)) - f(c) = \varphi(g(y))\cdot(g(y)-g(d)).$$
4. Since $\varphi(g(y)) \neq 0$ for $y \in U$, divide: $g(y)-g(d) = \dfrac{1}{\varphi(g(y))}\cdot(y-d)$.
5. The function $1/(\varphi\circ g)$ is continuous at $d$. Apply Carathéodory's Theorem 6.1.5 to conclude that $g'(d)$ exists and $g'(d) = 1/\varphi(c) = 1/f'(c)$. $\blacksquare$

**Note after 6.1.8 (p. 169).** The hypothesis $f'(c)\neq 0$ is essential. If $f'(c) = 0$, then $g$ is never differentiable at $d = f(c)$, since the assumed existence of $g'(d)$ would lead to $1 = f'(c)g'(d) = 0$, which is impossible. The function $f(x) := x^3$ with $c = 0$ is such an example.

### Theorem 6.1.9 — Inverse function on an interval (p. 169)
**Theorem 6.1.9.** Let $I$ be an interval and let $f : I \to \mathbb{R}$ be strictly monotone on $I$. Let $J := f(I)$ and let $g : J \to \mathbb{R}$ be the function inverse to $f$. If $f$ is differentiable on $I$ and $f'(x) \neq 0$ for $x \in I$, then $g$ is differentiable on $J$ and
$$(13)\qquad g' = \frac{1}{f'\circ g}.$$

**Proof (book).** If $f$ is differentiable on $I$, then Thm 6.1.2 implies $f$ is continuous on $I$. By the Continuous Inverse Theorem 5.6.5, $g$ is continuous on $J$. Equation (13) follows from Theorem 6.1.8. $\blacksquare$

**Remark after 6.1.9 (p. 169).** If $f$ and $g$ are as in Theorem 6.1.9, and $x \in I$ and $y \in J$ are related by $y = f(x)$ and $x = g(y)$, then (13) can be written as
$$g'(y) = \frac{1}{(f'\circ g)(y)},\quad y \in J,\qquad\text{or}\qquad (g'\circ f)(x) = \frac{1}{f'(x)},\quad x \in I.$$
It can also be written $g'(y) = 1/f'(x)$, provided it is kept in mind that $x$ and $y$ are related by $y = f(x)$ and $x = g(y)$.

### Examples 6.1.10 (pp. 170)
**Example 6.1.10 (a) (p. 170).** The function $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) := x^5 + 4x + 3$ is continuous and strictly monotone increasing (since it is the sum of two strictly increasing functions). Moreover, $f'(x) = 5x^4 + 4$ is never zero. Therefore, by Theorem 6.1.8, the inverse function $g = f^{-1}$ is differentiable at every point. If we take $c = 1$, then since $f(1) = 8$, we obtain
$$g'(8) = g'(f(1)) = \frac{1}{f'(1)} = \frac{1}{9}.$$

**Example 6.1.10 (b) (p. 170).** Let $n \in \mathbb{N}$ be even, let $I := [0,\infty)$, and let $f(x) := x^n$ for $x \in I$. It was seen at the end of Section 5.6 that $f$ is strictly increasing and continuous on $I$, so that its inverse function $g(y) := y^{1/n}$ for $y \in J := [0,\infty)$ is also strictly increasing and continuous on $J$. Moreover $f'(x) = nx^{n-1}$ for all $x \in I$. Hence if $y > 0$, then $g'(y)$ exists and
$$g'(y) = \frac{1}{f'(g(y))} = \frac{1}{n(g(y))^{n-1}} = \frac{1}{n\,y^{(n-1)/n}}.$$
Hence we deduce that
$$g'(y) = \frac{1}{n}\,y^{(1/n)-1}\qquad\text{for } y > 0.$$
However, $g$ is *not* differentiable at $0$. (For graphs of $f$ and $g$, see Figures 5.6.4 and 5.6.5.)

**Example 6.1.10 (c) (p. 170).** Let $n \in \mathbb{N}$, $n \neq 1$, be odd, let $F(x) := x^n$ for $x \in \mathbb{R}$, and let $G(y) := y^{1/n}$ be its inverse function defined for all $y \in \mathbb{R}$. As in part (b), $G$ is differentiable for $y \neq 0$ and $G'(y) = (1/n)y^{(1/n)-1}$ for $y \neq 0$. However, $G$ is not differentiable at $0$, even though $G$ is differentiable for all $y \neq 0$. (For graphs of $F$ and $G$, see Figures 5.6.6 and 5.6.7.)

**Example 6.1.10 (d) (p. 170).** Let $r := m/n$ be a positive rational number, let $I := [0,\infty)$, and let $R(x) := x^r$ for $x \in I$. (Recall Definition 5.6.6.) Then $R$ is the composition of $f(x) := x^m$ and $g(x) := x^{1/n}$, $x \in I$; that is, $R(x) = f(g(x))$. Applying the Chain Rule 6.1.6 and the results of (b) [or (c), depending on whether $n$ is even or odd]:
$$R'(x) = f'(g(x))\,g'(x) = m\,(x^{1/n})^{m-1}\cdot\frac{1}{n}x^{(1/n)-1} = \frac{m}{n}x^{(m/n)-1} = r\,x^{r-1}$$
for all $x > 0$. If $r > 1$, then it is an exercise to show that the derivative also exists at $x = 0$ and $R'(0) = 0$. (For a graph of $R$ see Figure 5.6.8.)

**Example 6.1.10 (e) (pp. 170).** The sine function is strictly increasing on $I := [-\pi/2, \pi/2]$; therefore its inverse function, denoted $\operatorname{Arcsin}$, exists on $J := [-1,1]$. That is, for $x \in I$ and $y \in [-1,1]$, $y = \sin x$ if and only if $\operatorname{Arcsin} y = x$. It was asserted (without proof) in Example 6.1.7(d) that $\sin$ is differentiable on $I$ with $D\sin x = \cos x$. Since $\cos x \neq 0$ for $x \in (-\pi/2,\pi/2)$, Theorem 6.1.8 gives
$$D\operatorname{Arcsin} y = \frac{1}{D\sin x} = \frac{1}{\cos x} = \frac{1}{\sqrt{1-(\sin x)^2}} = \frac{1}{\sqrt{1-y^2}}$$
for all $y \in (-1,1)$. The derivative of $\operatorname{Arcsin}$ does not exist at the points $-1$ and $1$. $\square$

---

## Section 6.2 The Mean Value Theorem (printed pp. 172–179)

### Introduction and relative extrema (p. 172)
**Definition (relative extremum; not numbered in book).** A function $f : I \to \mathbb{R}$ has a *relative maximum* [resp. *relative minimum*] at $c \in I$ if there exists a neighborhood $V := V_\delta(c)$ of $c$ such that $f(x) \leq f(c)$ [resp. $f(c) \leq f(x)$] for all $x \in V \cap I$. We say $f$ has a *relative extremum* at $c$ if it has either a relative maximum or a relative minimum at $c$.

"The next result provides the theoretical justification for the familiar process of finding points at which $f$ has relative extrema by examining the zeros of the derivative. However, it must be realized that this procedure applies only to *interior* points of the interval. For example, if $f(x) := x$ on $I := [0,1]$, then the endpoint $x=0$ yields the unique relative minimum and the endpoint $x=1$ yields the unique relative maximum of $f$ on $I$, but neither point is a zero of the derivative of $f$."

### Theorem 6.2.1 — Interior Extremum Theorem (p. 172)
**Theorem 6.2.1 (Interior Extremum Theorem).** Let $c$ be an interior point of the interval $I$ at which $f : I \to \mathbb{R}$ has a relative extremum. If the derivative of $f$ at $c$ exists, then $f'(c) = 0$.

**Proof (book) — relative maximum case; minimum is similar.**
1. If $f'(c) > 0$, then by Thm 4.2.9 there is a neighborhood $V \subseteq I$ of $c$ such that $\dfrac{f(x)-f(c)}{x-c} > 0$ for $x \in V$, $x \neq c$.
2. If $x \in V$ and $x > c$, then $f(x)-f(c) = (x-c)\cdot\dfrac{f(x)-f(c)}{x-c} > 0$.
3. This contradicts the hypothesis that $f$ has a relative maximum at $c$. So $f'(c) > 0$ is impossible.
4. Similarly (how?), $f'(c) < 0$ is impossible. Therefore $f'(c) = 0$. $\blacksquare$

### Corollary 6.2.2 (p. 172)
**Corollary 6.2.2.** Let $f : I \to \mathbb{R}$ be continuous on an interval $I$ and suppose that $f$ has a relative extremum at an interior point $c$ of $I$. Then either the derivative of $f$ at $c$ does not exist, or it is equal to zero.

"We note that if $f(x) := |x|$ on $I := [-1,1]$, then $f$ has an interior minimum at $x = 0$; however, the derivative of $f$ fails to exist at $x = 0$."

### Theorem 6.2.3 — Rolle's Theorem (pp. 172–173)
**Theorem 6.2.3 (Rolle).** Suppose that $f$ is continuous on a closed interval $I := [a,b]$, that the derivative $f'$ exists at every point of the open interval $(a,b)$, and that $f(a) = f(b) = 0$. Then there exists at least one point $c$ in $(a,b)$ such that $f'(c) = 0$.

**Proof (book).**
1. If $f$ vanishes identically on $I$, then any $c$ in $(a,b)$ satisfies the conclusion.
2. Otherwise, replacing $f$ by $-f$ if necessary, assume $f$ assumes some positive values.
3. By the Maximum-Minimum Theorem 5.3.4, $f$ attains the value $\sup\{f(x) : x \in I\} > 0$ at some point $c$ in $I$.
4. Since $f(a) = f(b) = 0$, the point $c$ must lie in $(a,b)$; therefore $f'(c)$ exists.
5. Since $f$ has a relative maximum at $c$, the Interior Extremum Theorem 6.2.1 gives $f'(c) = 0$. (See Figure 6.2.1.) $\blacksquare$

**Figure 6.2.1 — Rolle's Theorem.** See the figure description in the Figures section below.

### Theorem 6.2.4 — Mean Value Theorem (pp. 173–174)
**Theorem 6.2.4 (Mean Value Theorem).** Suppose that $f$ is continuous on a closed interval $I := [a,b]$, and that $f$ has a derivative in the open interval $(a,b)$. Then there exists at least one point $c$ in $(a,b)$ such that
$$f(b) - f(a) = f'(c)(b-a).$$

**Proof (book).**
1. Consider the function $\varphi$ defined on $I$ by
$$\varphi(x) := f(x) - f(a) - \frac{f(b)-f(a)}{b-a}\,(x-a).$$
(*The book's aside:* $\varphi$ is the difference of $f$ and the function whose graph is the line segment joining $(a,f(a))$ and $(b,f(b))$; see Figure 6.2.2.)
2. The hypotheses of Rolle's Theorem are satisfied by $\varphi$: it is continuous on $[a,b]$, differentiable on $(a,b)$, and $\varphi(a) = \varphi(b) = 0$.
3. Therefore there exists $c \in (a,b)$ with $0 = \varphi'(c) = f'(c) - \dfrac{f(b)-f(a)}{b-a}$.
4. Hence $f(b)-f(a) = f'(c)(b-a)$. $\blacksquare$

**Remark after 6.2.4 (p. 174).** "The geometric view of the Mean Value Theorem is that there is some point on the curve $y = f(x)$ at which the tangent line is parallel to the line segment through the points $(a,f(a))$ and $(b,f(b))$. Thus it is easy to remember the statement of the Mean Value Theorem by drawing appropriate diagrams. While this should not be discouraged, it tends to suggest that its importance is geometrical in nature, which is quite misleading. In fact the Mean Value Theorem is a wolf in sheep's clothing and is *the* Fundamental Theorem of Differential Calculus. In the remainder of this section, we will present some of the consequences of this result. Other applications will be given later."

### Theorem 6.2.5 (p. 174)
**Theorem 6.2.5.** Suppose that $f$ is continuous on the closed interval $I := [a,b]$, that $f$ is differentiable on the open interval $(a,b)$, and that $f'(x) = 0$ for $x \in (a,b)$. Then $f$ is constant on $I$.

**Proof (book).**
1. Show $f(x) = f(a)$ for all $x \in I$. Let $x \in I$, $x > a$.
2. Apply the MVT to $f$ on $[a,x]$: there is $c$ (depending on $x$) between $a$ and $x$ with $f(x)-f(a) = f'(c)(x-a)$.
3. Since $f'(c) = 0$ (hypothesis), $f(x)-f(a) = 0$. Hence $f(x) = f(a)$ for any $x \in I$. $\blacksquare$

### Corollary 6.2.6 (p. 174)
**Corollary 6.2.6.** Suppose that $f$ and $g$ are continuous on $I := [a,b]$, that they are differentiable on $(a,b)$, and that $f'(x) = g'(x)$ for all $x \in (a,b)$. Then there exists a constant $C$ such that $f = g + C$ on $I$.

(Book: "Recall that a function $f : I \to \mathbb{R}$ is said to be *increasing* on the interval $I$ if whenever $x_1, x_2$ in $I$ satisfy $x_1 < x_2$, then $f(x_1) \leq f(x_2)$. Also recall that $f$ is *decreasing* on $I$ if the function $-f$ is increasing on $I$.")

### Theorem 6.2.7 — Monotonicity criterion (pp. 174–175)
**Theorem 6.2.7.** Let $f : I \to \mathbb{R}$ be differentiable on the interval $I$. Then:

(a) $f$ is increasing on $I$ if and only if $f'(x) \geq 0$ for all $x \in I$.

(b) $f$ is decreasing on $I$ if and only if $f'(x) \leq 0$ for all $x \in I$.

**Proof of (a) (book).**
*($\Rightarrow$)* Suppose $f'(x) \geq 0$ for all $x \in I$. If $x_1 < x_2$ in $I$, apply the MVT to $f$ on the closed interval $J := [x_1, x_2]$ to obtain $c \in (x_1,x_2)$ with $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Since $f'(c) \geq 0$ and $x_2 - x_1 > 0$, $f(x_2) - f(x_1) \geq 0$. Hence $f(x_1) \leq f(x_2)$; since $x_1 < x_2$ were arbitrary, $f$ is increasing on $I$.
*($\Leftarrow$)* Suppose $f$ is differentiable and increasing on $I$. For any $x \neq c$ in $I$, $\dfrac{f(x)-f(c)}{x-c} \geq 0$ (why?). Hence, by Thm 4.2.6 (order limit), $f'(c) = \lim_{x\to c}\dfrac{f(x)-f(c)}{x-c} \geq 0$.

**Proof of (b).** Similar; omitted in book. $\blacksquare$

**Strict monotonicity (p. 175).** "A function $f$ is said to be *strictly increasing* on an interval $I$ if for any points $x_1, x_2$ in $I$ such that $x_1 < x_2$, we have $f(x_1) < f(x_2)$. An argument along the same lines of the proof of Theorem 6.2.7 can be made to show that a function having a strictly positive derivative on an interval is strictly increasing there (See Exercise 13 of 6.2). However, the converse assertion is not true, since a strictly increasing differentiable function may have a derivative that vanishes at certain points. For example, the function $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) := x^3$ is strictly increasing on $\mathbb{R}$, but $f'(0) = 0$. The situation for strictly decreasing functions is similar."

**Remark (p. 175) — increasing at a point.** "It is reasonable to define a function to be *increasing at a point* if there is a neighborhood of the point on which the function is increasing. One might suppose that, if the derivative is strictly positive at a point, then the function is increasing at this point. However, this supposition is false; indeed, the differentiable function defined by
$$g(x) := \begin{cases} x + 2x^2\sin(1/x) & \text{if } x \neq 0,\\ 0 & \text{if } x = 0,\end{cases}$$
is such that $g'(0) = 1$, yet it can be shown that $g$ is not increasing in any neighborhood of $x = 0$. (See Exercise 10 of 6.2.)"

**Remark (p. 175) — "We next obtain a sufficient condition ...":** (the paragraph introducing 6.2.8 reads: "We next obtain a sufficient condition for a function to have a relative extremum at an interior point of an interval.")

### Theorem 6.2.8 — First Derivative Test (pp. 175–176)
**Theorem 6.2.8 (First Derivative Test for Extrema).** Let $f$ be continuous on the interval $I := [a,b]$ and let $c$ be an interior point of $I$. Assume that $f$ is differentiable on $(a,c)$ and $(c,b)$. Then:

(a) If there is a neighborhood $(c-\delta, c+\delta) \subseteq I$ such that $f'(x) \geq 0$ for $c-\delta < x < c$ and $f'(x) \leq 0$ for $c < x < c+\delta$, then $f$ has a relative maximum at $c$.

(b) If there is a neighborhood $(c-\delta, c+\delta) \subseteq I$ such that $f'(x) \leq 0$ for $c-\delta < x < c$ and $f'(x) \geq 0$ for $c < x < c+\delta$, then $f$ has a relative minimum at $c$.

**Proof of (a) (book).**
1. If $x \in (c-\delta, c)$, the MVT gives $c_x \in (x,c)$ with $f(c)-f(x) = (c-x)f'(c_x)$. Since $f'(c_x) \geq 0$, $f(x) \leq f(c)$ for $x \in (c-\delta, c)$.
2. Similarly (how?), $f(x) \leq f(c)$ for $x \in (c, c+\delta)$.
3. Therefore $f(x) \leq f(c)$ for all $x \in (c-\delta, c+\delta)$, so $f$ has a relative maximum at $c$.
(b) The proof is similar. $\blacksquare$

**Remark (pp. 176).** The converse of the First Derivative Test is not true. For example, there exists a differentiable function $f : \mathbb{R} \to \mathbb{R}$ with absolute minimum at $x=0$ but such that $f'$ takes on both positive and negative values on both sides of (and arbitrarily close to) $x = 0$. (See Exercise 9 of 6.2.)

### Further applications — Examples 6.2.9 (p. 176)
"We will continue giving other types of applications of the Mean Value Theorem; in doing so we will draw more freely than before on the past experience of the reader and his or her knowledge concerning the derivatives of certain well-known functions."

**Example 6.2.9 (a) (p. 176).** Rolle's Theorem can be used for the location of roots of a function. For, if a function $g$ can be identified as the derivative of a function $f$, then between any two roots of $f$ there is at least one root of $g$. For example, let $g(x) := \cos x$; then $g$ is known to be the derivative of $f(x) := \sin x$. Hence, between any two roots of $\sin x$ there is at least one root of $\cos x$. On the other hand, $g'(x) = -\sin x = -f(x)$, so another application of Rolle's Theorem tells us that between any two roots of $\cos$ there is at least one root of $\sin$. Therefore, we conclude that the roots of $\sin$ and $\cos$ *interlace* each other. The same type of argument can be applied to the Bessel functions $J_n$ of order $n = 0, 1, 2, \ldots$ by using the relations
$$[x^n J_n(x)]' = x^n J_{n-1}(x),\qquad [x^{-n}J_n(x)]' = -x^{-n}J_{n+1}(x)\qquad\text{for } x > 0.$$
The details of this argument should be supplied by the reader.

**Example 6.2.9 (b) (pp. 176).** The MVT is used for approximate calculations and error estimates. Evaluate $\sqrt{105}$ using the MVT with $f(x) := \sqrt{x}$, $a = 100$, $b = 105$:
$$\sqrt{105} - \sqrt{100} = \frac{5}{2\sqrt{c}}\qquad\text{for some } c \text{ with } 100 < c < 105.$$
Since $10 < \sqrt{c} < \sqrt{105} < \sqrt{121} = 11$, we assert
$$\frac{5}{2(11)} < \sqrt{105} - 10 < \frac{5}{2(10)},$$
whence $10.2272 < \sqrt{105} < 10.2500$. (The book notes "This estimate may not be as sharp as desired" and improves it: using $\sqrt{105} < 10.2500$ gives $\sqrt{c} < 10.2500$, hence $\dfrac{5}{2(10.2500)} < \sqrt{105} - 10$, i.e. $0.2439 < \sqrt{105} - 10$.) Our improved estimate is
$$10.2439 < \sqrt{105} < 10.2500.$$

### Inequalities — Examples 6.2.10 (pp. 176–178)
"One very important use of the MVT is to obtain certain inequalities. Whenever information concerning the range of the derivative of a function is available, this information can be used to deduce certain properties of the function itself."

**Example 6.2.10 (a) (p. 177).** The exponential function $f(x) := e^x$ has derivative $f'(x) = e^x$ for all $x \in \mathbb{R}$. Thus $f'(x) > 1$ for $x > 0$ and $f'(x) < 1$ for $x < 0$. From these relationships we derive
$$(1)\qquad e^x \geq 1 + x\qquad\text{for } x \in \mathbb{R},$$
with equality occurring if and only if $x = 0$.
*Proof (book).* If $x > 0$, apply the MVT to $f$ on $[0,x]$: for some $c$ with $0 < c < x$, $e^x - e^0 = e^c(x-0)$. Since $e^0 = 1$ and $e^c > 1$, this becomes $e^x - 1 > x$, so $e^x > 1 + x$ for $x > 0$. A similar argument establishes the same strict inequality for $x < 0$. Thus (1) holds for all $x$, with equality iff $x = 0$.

**Example 6.2.10 (b) (p. 177).** The function $g(x) := \sin x$ has derivative $g'(x) = \cos x$. On the basis of $-1 \leq \cos x \leq 1$ for all $x \in \mathbb{R}$, we show
$$(2)\qquad -x \leq \sin x \leq x\qquad\text{for all } x \geq 0.$$
*Proof (book).* If $x > 0$, apply the MVT to $g$ on $[0,x]$: $\sin x - \sin 0 = (\cos c)(x-0)$ for some $c$ between $0$ and $x$. Since $\sin 0 = 0$ and $-1 \leq \cos c \leq 1$, we have $-x \leq \sin x \leq x$. Since equality holds at $x = 0$, (2) is established.

**Example 6.2.10 (c) (pp. 177–178) — Bernoulli's inequality.** If $\alpha > 1$, then
$$(3)\qquad (1+x)^\alpha \geq 1 + \alpha x\qquad\text{for all } x > -1,$$
with equality if and only if $x = 0$.
"This inequality was established earlier, in Example 2.1.13(c), for positive integer values of $\alpha$ by using Mathematical Induction. We now derive the more general version by employing the Mean Value Theorem."
*Proof (book).*
1. Let $h(x) := (1+x)^\alpha$. Then $h'(x) = \alpha(1+x)^{\alpha-1}$ for all $x > -1$. *[The book's bracketed note: "For rational $\alpha$ this derivative was established in Example 6.1.10(c). The extension to irrational $\alpha$ will be discussed in Section 8.3."]* *[sic: the rational-power derivation is in Example 6.1.10(d); the printed reference reads 6.1.10(c).]*
2. If $x > 0$, the MVT applied to $h$ on $[0,x]$ gives $c$ with $0 < c < x$ and $h(x) - h(0) = h'(c)(x-0)$, i.e. $(1+x)^\alpha - 1 = \alpha(1+c)^{\alpha-1}x$.
3. Since $c > 0$ and $\alpha - 1 > 0$, $(1+c)^{\alpha-1} > 1$, so $(1+x)^\alpha > 1 + \alpha x$.
4. If $-1 < x < 0$, a similar use of the MVT on $[x,0]$ gives the same strict inequality.
5. Since $x = 0$ gives equality, (3) holds for all $x > -1$, with equality iff $x = 0$.

**Example 6.2.10 (d) (pp. 177–178).** Let $0 < \alpha < 1$ and $g(x) := \alpha x - x^\alpha$ for $x \geq 0$. Then $g'(x) = \alpha(1 - x^{\alpha-1})$, so $g'(x) < 0$ for $0 < x < 1$ and $g'(x) > 0$ for $x > 1$. Consequently, if $x \geq 0$ then $g(x) \geq g(1)$, and $g(x) = g(1)$ if and only if $x = 1$. Therefore, if $x \geq 0$ and $0 < \alpha < 1$, then
$$x^\alpha \leq \alpha x + (1-\alpha).$$
If $a > 0$ and $b > 0$, let $x = a/b$ and multiply by $b$ to obtain
$$a^\alpha b^{1-\alpha} \leq \alpha a + (1-\alpha) b,$$
where equality holds if and only if $a = b$. $\square$

### The Intermediate Value Property of Derivatives (p. 178)
"We conclude this section with an interesting result, often referred to as *Darboux's Theorem*. It states that if a function $f$ is differentiable at every point of an interval $I$, then the function $f'$ has the Intermediate Value Property. This means that if $f'$ takes on values $A$ and $B$, then it also takes on all values between $A$ and $B$. The reader will recognize this property as one of the important consequences of continuity as established in Theorem 5.3.7. It is remarkable that derivatives, which need not be continuous functions, also possess this property."

### Lemma 6.2.11 (p. 178)
**Lemma 6.2.11.** Let $I \subseteq \mathbb{R}$ be an interval, let $f : I \to \mathbb{R}$, let $c \in I$, and assume that $f$ has a derivative at $c$. Then:

(a) If $f'(c) > 0$, then there is a number $\delta > 0$ such that $f(x) > f(c)$ for $x \in I$ such that $c < x < c + \delta$.

(b) If $f'(c) < 0$, then there is a number $\delta > 0$ such that $f(x) > f(c)$ for $x \in I$ such that $c - \delta < x < c$.

**Proof (book).** (a)
1. Since $\lim_{x\to c}\dfrac{f(x)-f(c)}{x-c} = f'(c) > 0$, Thm 4.2.9 gives $\delta > 0$ such that for $x \in I$ with $0 < |x-c| < \delta$, $\dfrac{f(x)-f(c)}{x-c} > 0$.
2. If $x \in I$ also satisfies $x > c$, then $f(x)-f(c) = (x-c)\cdot\dfrac{f(x)-f(c)}{x-c} > 0$.
3. Hence, if $x \in I$ and $c < x < c+\delta$, then $f(x) > f(c)$. The proof of (b) is similar. $\blacksquare$

### Theorem 6.2.12 — Darboux's Theorem (p. 178)
**Theorem 6.2.12 (Darboux).** If $f$ is differentiable on $I = [a,b]$ and if $k$ is a number between $f'(a)$ and $f'(b)$, then there exists at least one point $c$ in $(a,b)$ such that $f'(c) = k$.

**Proof (book) — printed for the case $f'(a) < k < f'(b)$.**
1. Define $g$ on $I$ by $g(x) := kx - f(x)$ for $x \in I$.
2. Since $g$ is continuous on the closed bounded interval $I$, it attains a maximum value on $I$ (Thm 5.3.4).
3. Since $g'(a) = k - f'(a) > 0$, Lemma 6.2.11(a) shows the maximum does not occur at $x = a$.
4. Since $g'(b) = k - f'(b) < 0$, Lemma 6.2.11(b) shows the maximum does not occur at $x = b$.
5. Therefore $g$ attains its maximum at some $c \in (a,b)$. By Thm 6.2.1, $0 = g'(c) = k - f'(c)$, so $f'(c) = k$. $\blacksquare$

*(The printed proof writes out only the case $f'(a) < k < f'(b)$; the case $f'(a) > k > f'(b)$ is not written out in the text I read.)*

### Example 6.2.13 (pp. 178–179)
**Example 6.2.13.** The function $g : [-1,1] \to \mathbb{R}$ defined by
$$g(x) := \begin{cases} 1 & \text{for } 0 < x \leq 1,\\ 0 & \text{for } x = 0,\\ -1 & \text{for } -1 \leq x < 0,\end{cases}$$
is (a restriction of the signum function) and clearly fails to satisfy the intermediate value property on $[-1,1]$. Therefore, by Darboux's Theorem, there does not exist a function $f$ such that $f'(x) = g(x)$ for all $x \in [-1,1]$. In other words, $g$ is *not* the derivative on $[-1,1]$ of any function. $\square$

---

## Exercises — Section 6.1 (printed pp. 170–171)

Exercises 1–17 (★ = my judgment of classic exam-style items).

1. ★ Use the definition to find the derivative of each of the following functions: (a) $f(x) := x^3$ for $x \in \mathbb{R}$, (b) $g(x) := 1/x$ for $x \in \mathbb{R}$, $x \neq 0$, (c) $h(x) := \sqrt{x}$ for $x > 0$, (d) $k(x) := 1/\sqrt{x}$ for $x > 0$. *(p. 170)*
2. Show that $f(x) := x^{1/3}$, $x \in \mathbb{R}$, is not differentiable at $x = 0$. *(p. 171)*
3. Prove Theorem 6.1.3(a), (b). *(p. 171)*
4. ★ Let $f : \mathbb{R} \to \mathbb{R}$ be defined by $f(x) := x^2$ for $x$ rational, $f(x) := 0$ for $x$ irrational. Show that $f$ is differentiable at $x = 0$, and find $f'(0)$. *(p. 171)*
5. Differentiate and simplify: (a) $f(x) := \dfrac{x}{1+x^2}$, (b) $g(x) := \sqrt{5 - 2x + x^2}$, (c) $h(x) := (\sin x^k)^m$ for $m, k \in \mathbb{N}$, (d) $k(x) := \tan(x^2)$ for $|x| < \sqrt{\pi/2}$. *(p. 171)*
6. Let $n \in \mathbb{N}$ and let $f : \mathbb{R} \to \mathbb{R}$ be defined by $f(x) := x^n$ for $x \geq 0$ and $f(x) := 0$ for $x < 0$. For which values of $n$ is $f'$ continuous at $0$? For which values of $n$ is $f'$ differentiable at $0$? *(p. 171)*
7. ★ Suppose that $f : \mathbb{R} \to \mathbb{R}$ is differentiable at $c$ and that $f(c) = 0$. Show that $g(x) := |f(x)|$ is differentiable at $c$ if and only if $f'(c) = 0$. *(p. 171)*
8. ★ Determine where each of the following functions from $\mathbb{R}$ to $\mathbb{R}$ is differentiable and find the derivative: (a) $f(x) := |x| + |x+1|$, (b) $g(x) := 2x + |x|$, (c) $h(x) := x|x|$, (d) $k(x) := |\sin x|$. *(p. 171)*
9. ★ Prove that if $f : \mathbb{R} \to \mathbb{R}$ is an even function [i.e., $f(-x) = f(x)$ for all $x \in \mathbb{R}$] and has a derivative at every point, then the derivative $f'$ is an odd function [$f'(-x) = -f'(x)$ for all $x \in \mathbb{R}$]. Also prove that if $g : \mathbb{R} \to \mathbb{R}$ is a differentiable odd function, then $g'$ is an even function. *(p. 171)*
10. ★ Let $g : \mathbb{R} \to \mathbb{R}$ be defined by $g(x) := x^2\sin(1/x^2)$ for $x \neq 0$, and $g(0) := 0$. Show that $g$ is differentiable for all $x \in \mathbb{R}$. Also show that the derivative $g'$ is not bounded on the interval $[-1,1]$. *(p. 171)*
11. Assume there exists a function $L : (0,\infty) \to \mathbb{R}$ such that $L'(x) = 1/x$ for $x > 0$. Calculate the derivatives of: (a) $f(x) := L(2x+3)$ for $x > 0$, (b) $g(x) := (L(x^2))^3$ for $x > 0$, (c) $h(x) := L(ax)$ for $a > 0$, $x > 0$, (d) $k(x) := L(L(x))$ when $L(x) > 0$, $x > 0$. *(p. 171)*
12. If $r > 0$ is a rational number, let $f : \mathbb{R} \to \mathbb{R}$ be defined by $f(x) := x^r\sin(1/x)$ for $x \neq 0$, and $f(0) := 0$. Determine those values of $r$ for which $f'(0)$ exists. *(p. 171)*
13. ★ If $f : \mathbb{R} \to \mathbb{R}$ is differentiable at $c \in \mathbb{R}$, show that $f'(c) = \lim\big(n\{f(c + 1/n) - f(c)\}\big)$. However, show by example that the existence of the limit of this sequence does not imply the existence of $f'(c)$. *(p. 171)*
14. ★ Given that the function $h(x) := x^3 + 2x + 1$ for $x \in \mathbb{R}$ has an inverse $h^{-1}$ on $\mathbb{R}$, find the value of $(h^{-1})'(y)$ at the points corresponding to $x = 0, 1, -1$. *(p. 171)*
15. ★ Given that the restriction of $\cos$ to $I := [0,\pi]$ is strictly decreasing and that $\cos 0 = 1$, $\cos\pi = -1$, let $J := [-1,1]$, and let $\operatorname{Arccos} : J \to I$ be the inverse function to the restriction of $\cos$ to $I$. Show that $\operatorname{Arccos}$ is differentiable on $(-1,1)$ and $D\operatorname{Arccos}\,y = \dfrac{-1}{(1-y^2)^{1/2}}$ for $y \in (-1,1)$. Show that $\operatorname{Arccos}$ is not differentiable at $-1$ and $1$. *(p. 171)*
16. ★ Given that the restriction of $\tan$ to $I := (-\pi/2, \pi/2)$ is strictly increasing and that $\tan(I) = \mathbb{R}$, let $\operatorname{Arctan} : \mathbb{R} \to \mathbb{R}$ be the inverse function to the restriction of $\tan$ to $I$. Show that $\operatorname{Arctan}$ is differentiable on $\mathbb{R}$ and that $D\operatorname{Arctan}(y) = (1+y^2)^{-1}$ for $y \in \mathbb{R}$. *(p. 171)*
17. Let $f : I \to \mathbb{R}$ be differentiable at $c \in I$. Establish the **Straddle Lemma**: given $\varepsilon > 0$ there exists $\delta(\varepsilon) > 0$ such that if $u, v \in I$ satisfy $c - \delta(\varepsilon) \leq u \leq c \leq v < c + \delta(\varepsilon)$, then
$$|f(v) - f(u) - (v-u)f'(c)| \leq \varepsilon(v-u).$$
[Hint: The $\delta(\varepsilon)$ is given by Definition 6.1.1. Subtract and add the term $f(c) - cf'(c)$ on the left side and use the Triangle Inequality.] *(p. 171)*

## Exercises — Section 6.2 (printed p. 179)

1. ★ For each of the following functions on $\mathbb{R}$ to $\mathbb{R}$, find points of relative extrema, the intervals on which the function is increasing, and those on which it is decreasing: (a) $f(x) := x^2 - 3x + 5$, (b) $g(x) := 3x - 4x^2$, (c) $h(x) := x^3 - 3x - 4$, (d) $k(x) := x^4 + 2x^2 - 4$.
2. ★ Find the points of relative extrema, the intervals on which the following functions are increasing, and those on which they are decreasing: (a) $f(x) := x + 1/x$ for $x \neq 0$, (b) $g(x) := x/(x^2+1)$ for $x \in \mathbb{R}$, (c) $h(x) := \sqrt{x} - 2\sqrt{x+2}$ for $x > 0$, (d) $k(x) := 2x + 1/x^2$ for $x \neq 0$.
3. Find the points of relative extrema of the following functions on the specified domain: (a) $f(x) := |x^2 - 1|$ for $-4 \leq x \leq 4$, (b) $g(x) := 1 - (x-1)^{2/3}$ for $0 \leq x \leq 2$, (c) $h(x) := x\,|x^2 - 12|$ for $-2 \leq x \leq 3$, (d) $k(x) := x(x-8)^{1/3}$ for $0 \leq x \leq 9$.
4. ★ Let $a_1, a_2, \ldots, a_n$ be real numbers and let $f$ be defined on $\mathbb{R}$ by $f(x) := \sum_{i=1}^n (a_i - x)^2$ for $x \in \mathbb{R}$. Find the unique point of relative minimum for $f$.
5. ★ Let $a > b > 0$ and let $n \in \mathbb{N}$ satisfy $n \geq 2$. Prove that $a^{1/n} - b^{1/n} < (a-b)^{1/n}$. [Hint: Show that $f(x) := x^{1/n} - (x-1)^{1/n}$ is decreasing for $x \geq 1$, and evaluate $f$ at $1$ and $a/b$.]
6. ★ Use the Mean Value Theorem to prove that $|\sin x - \sin y| \leq |x - y|$ for all $x, y$ in $\mathbb{R}$.
7. ★ Use the Mean Value Theorem to prove that $(x-1)/x < \ln x < x - 1$ for $x > 1$. [Hint: Use the fact that $D\ln x = 1/x$ for $x > 0$.]
8. ★ Let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$ and differentiable in $(a,b)$. Show that if $\lim_{x\to a} f'(x) = A$, then $f'(a)$ exists and equals $A$. [Hint: Use the definition of $f'(a)$ and the Mean Value Theorem.]
9. ★ Let $f : \mathbb{R} \to \mathbb{R}$ be defined by $f(x) := 2x^4 + x^4\sin(1/x)$ for $x \neq 0$ and $f(0) := 0$. Show that $f$ has an absolute minimum at $x = 0$, but that its derivative has both positive and negative values in every neighborhood of $0$.
10. ★ Let $g : \mathbb{R} \to \mathbb{R}$ be defined by $g(x) := x + 2x^2\sin(1/x)$ for $x \neq 0$ and $g(0) := 0$. Show that $g'(0) = 1$, but in every neighborhood of $0$ the derivative $g'(x)$ takes on both positive and negative values. Thus $g$ is not monotonic in any neighborhood of $0$.
11. Give an example of a uniformly continuous function on $[0,1]$ that is differentiable on $(0,1)$ but whose derivative is not bounded on $(0,1)$.
12. ★ If $h(x) := 0$ for $x < 0$ and $h(x) := 1$ for $x \geq 0$, prove there does not exist a function $f : \mathbb{R} \to \mathbb{R}$ such that $f'(x) = h(x)$ for all $x \in \mathbb{R}$. Give examples of two functions, not differing by a constant, whose derivatives equal $h(x)$ for all $x \neq 0$.
13. Let $I$ be an interval and let $f : I \to \mathbb{R}$ be differentiable on $I$. Show that if $f'$ is positive on $I$, then $f$ is strictly increasing on $I$.
14. ★ Let $I$ be an interval and let $f : I \to \mathbb{R}$ be differentiable on $I$. Show that if the derivative $f'$ is never $0$ on $I$, then either $f'(x) > 0$ for all $x \in I$ or $f'(x) < 0$ for all $x \in I$.
15. Let $I$ be an interval. Prove that if $f$ is differentiable on $I$ and if the derivative $f'$ is bounded on $I$, then $f$ satisfies a Lipschitz condition on $I$. (See Definition 5.4.4.)

**Definition 5.4.4 (cited, verbatim):** Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. If there exists a constant $K > 0$ such that $|f(x) - f(u)| \leq K|x-u|$ for all $x, u \in A$, then $f$ is said to be a Lipschitz function (or to satisfy a Lipschitz condition) on $A$.

---

## Figures (Module 2)

**Figure 6.1.1 — The function $|f|(x) = |x^2 - 1|$ (p. 167).** Graph over roughly $-2 \le x \le 2$, $y \ge 0$. Two downward cusps (V-shaped minima, value $0$) at $x = -1$ and $x = 1$. A smooth local maximum at $x = 0$ with value $1$ (a rounded hump between the cusps). The curve rises steeply on both outer sides, reaching $y = 3$ at $x = \pm 2$. Axes labeled $x$ and $y$ with tick marks at $\pm1, \pm2$.
*Redraw:* $y = |x^2 - 1|$; zeros at $\pm1$, local max $(0,1)$, endpoints at $(\pm2, 3)$.

**Figure 6.2.1 — Rolle's Theorem (p. 173).** Graph of a function $f$ on $[a,b]$ with $f(a) = f(b) = 0$. Starting at $(a,0)$ the curve dips below the axis, rises through the axis, reaches a peak at an interior point $c$ where the tangent is horizontal, labeled $f'(c) = 0$, then falls back to $(b,0)$. The horizontal axis is marked $a$, $c$, $b$.
*Redraw:* a bump-and-dip curve with $f(a)=f(b)=0$ and a horizontal tangent at the maximum $x=c$, labeled $f'(c)=0$.

**Figure 6.2.2 — The Mean Value Theorem (p. 173).** Graph of a wavy function $f$ on $[a,b]$. A straight chord (line segment) joins $(a, f(a))$ and $(b, f(b))$. At an interior point $c$ the curve has a tangent line drawn parallel to the chord. A vertical double-headed arrow at an intermediate point $x$ marks the gap between the curve and the chord and is labeled $\varphi(x)$. Dashed vertical guides drop from $a$, $x$, $c$, $b$ to the horizontal axis.
*Redraw:* $\varphi(x) = f(x) - \text{chord}(x)$ shown as the vertical gap; tangent at $c$ parallel to the chord.

---

## Earlier results used in Module 2 (one-line statements)

| Ref | Statement (one line; verbatim where quoted) | Used in |
|---|---|---|
| **4.1.8 Sequential Criterion** | (Book: "Let $f : A \to \mathbb{R}$ and let $c$ be a cluster point of $A$. Then the following are equivalent. (i) $\lim f = L$. (ii) for every sequence $(x_n) \subseteq A$, $x_n \neq c$, with $x_n \to c$, $f(x_n) \to L$." — only the opening and clause (i) were read from the page; clause (ii) is the standard form.) | Background for limit arguments (used via 4.2.6 proof) |
| **4.1.10 (b)** | Example 4.1.10(b) defines $\operatorname{sgn}$ and shows the limit of the ratio $|x|/x$ at $0$ does not exist (cited as such in 6.1.2). Full text not transcribed here. | 6.1.2 discussion; 6.1.7(c) |
| **4.2.4 Limit Theorems** | If $\lim f = L$ and $\lim g = M$, then $\lim(f\pm g) = L\pm M$, $\lim(fg)=LM$, $\lim(bf)=bL$; and if $h\neq 0$ on $A$ with $\lim h = H\neq 0$, then $\lim(1/h) = 1/H$ (and quotient rule for limits). | 6.1.2, 6.1.3, 6.1.5, 6.1.6, 6.1.8 |
| **4.2.6 Order Limit Theorem** | If $a\le f(x)\le b$ for all $x\in A$, $x\ne c$, and $\lim f$ exists, then $a\le\lim f\le b$. | 6.2.7(⇐) |
| **4.2.9 Local sign** | If $\lim_{x\to c} f = L > 0$ (resp. $<0$), then there is a neighborhood $V_\delta(c)$ with $f(x)>0$ (resp. $<0$) for all $x\in A\cap V_\delta(c)$, $x\ne c$. | 6.1.3(d), 6.1.5, 6.1.8, 6.2.1, 6.2.11 |
| **5.1 Continuity** | Def 5.1.1: $f$ continuous at $c\in A$; Thm 5.1.2: $f$ continuous at $c$ iff $\varepsilon$–$\delta$ / sequential form. | 6.1.2 (differentiable ⇒ continuous) |
| **5.3.2 Boundedness Theorem** | A continuous function on a closed bounded interval is bounded. | 5.3.4 proof, Thm 6.2.3 support |
| **5.3.4 Maximum–Minimum Theorem** | If $I=[a,b]$ and $f:I\to\mathbb{R}$ is continuous on $I$, then $f$ has an absolute maximum and an absolute minimum on $I$. | 6.2.3 (Rolle), 6.2.12 (Darboux) |
| **5.3.7 Bolzano's Intermediate Value Theorem** | If $f$ continuous on interval $I$, $a,b\in I$, $f(a)<k<f(b)$, then there is $c$ between $a$ and $b$ with $f(c)=k$. | Background for Darboux (6.2.12 discussion) |
| **5.3.8 Corollary** | If $I=[a,b]$, $f$ continuous, and $\inf f(I)\le k\le\sup f(I)$, then $f(c)=k$ for some $c\in I$. | Background |
| **5.4.4 Lipschitz** | Definition: $|f(x)-f(u)|\le K|x-u|$ for all $x,u\in A$ with $K>0$. | Exercise 15 of 6.2 |
| **5.6.5 Continuous Inverse Theorem** | If $f$ is strictly monotone and continuous on $I$, then its inverse $g$ on $J=f(I)$ is strictly monotone and continuous. | 6.1.8, 6.1.9 |
| **5.6.6 Definition** | (i) for $m,n\in\mathbb{N}$ and $x\ge0$: $x^{m/n} := (x^{1/n})^m$; (ii) for $m,n\in\mathbb{N}$ and $x>0$: $x^{-m/n} := (x^{1/n})^{-m}$. | 6.1.10(d) |
| **2.1.13(c)** | Bernoulli's inequality $(1+x)^\alpha \ge 1+\alpha x$ for positive integer $\alpha$ (proved by induction; cited in 6.2.10(c)). | 6.2.10(c) |

---

## Summary of counts (for study-kit reference)

- Definitions: 1 numbered (6.1.1) plus 1 unnumbered (relative extremum, 6.2 intro).
- Theorems: 6.1.2, 6.1.3, 6.1.5, 6.1.6, 6.1.8, 6.1.9; 6.2.1, 6.2.3, 6.2.4, 6.2.5, 6.2.7, 6.2.8, 6.2.12 (13 numbered theorems).
- Corollaries: 6.1.4; 6.2.2, 6.2.6 (3).
- Lemmas: 6.2.11 (1).
- Examples: 6.1.7 (a)–(e), 6.1.10 (a)–(e), 6.2.9 (a)–(b), 6.2.10 (a)–(d), 6.2.13.
- Exercises: 6.1 (1–17), 6.2 (1–15).
- Figures: 6.1.1, 6.2.1, 6.2.2.
- Earlier results listed: 11 rows (4.1.8, 4.1.10, 4.2.4, 4.2.6, 4.2.9, 5.1, 5.3.2, 5.3.4, 5.3.7, 5.3.8, 5.4.4, 5.6.5, 5.6.6, 2.1.13(c)).
- Remarks / Notes with content: 6.1.1 Note; 6.1.2 Discussion and Weierstrass Remark; 6.1.8 Note; 6.1.9 Remark; 6.2.4 Remark; 6.2.7 strict-monotonicity paragraph and increasing-at-a-point Remark; 6.2.8 Remark; 6.2.9 / 6.2.10 narrative paragraphs.
- Section 6.1 starts printed p. 162; Section 6.2 starts p. 172 (PDF 187).

## Practicum marking (6.1.8–6.1.10)

Per the brief, 6.1.8–6.1.10 are the inverse-function results and are **practicum, not exam**. The full statements are given above (Theorem 6.1.8 with proof and Note; Theorem 6.1.9 with proof and Remark; Examples 6.1.10(a)–(e)). Treat all of 6.1.8, 6.1.9 and 6.1.10 as practicum, not exam.
