# Bartle & Sherbert, Introduction to Real Analysis (4e) -- Module 1: Continuous Functions

Scope: Section 5.1 (all); Section 5.3 (5.3.1-5.3.5, 5.3.7-5.3.10; 5.3.6 skipped); Section 5.4 (5.4.1-5.4.14; Weierstrass proof omitted, statement only).
Page convention: printed book page numbers (PDF page = printed + 15). Each item carries its printed page.
Notation: items are copied in book order; proofs are step outlines; "[p.N]" marks printed page.

---

## 0. Real Analysis I results used in these sections

| Result | Statement (one line) | Used in |
|---|---|---|
| Def 4.1.4 (limit of function) | $L=\lim_{x\to c}f(x)$ iff for every $\varepsilon>0$ there is $\delta>0$ with $0<|x-c|<\delta$, $x\in A \Rightarrow |f(x)-L|<\varepsilon$ (c a cluster point of A). | 5.1.2 Remark (1) |
| Example 4.1.7 (a)-(d) | $\lim b=b$; $\lim x=c$; $\lim x^2=c^2$; $\lim 1/x = 1/c$ ($c>0$). | 5.1.6 |
| Example 4.1.10 (a),(b),(c) | $\lim_{x\to0}(1/x)$ does not exist; $\lim \operatorname{sgn}(x)$ does not exist at 0; $\lim_{x\to0}\sin(1/x)$ does not exist. | 5.1.6(e),(f); 5.1.8(a) |
| Example 4.2.8 (f) | $\lim_{x\to0}x\sin(1/x)=0$. | 5.1.8(b) |
| Thm 4.1.8 (Sequential Criterion for limits) | $\lim_{x\to c}f=L$ iff for every sequence $(x_n)$ in $A\setminus\{c\}$ with $x_n\to c$ we have $f(x_n)\to L$. | 5.1.3 (cited), 5.4.8 |
| Thm 4.1.9(a) (Divergence Criterion) | $f$ has no limit $L$ at $c$ iff there is a sequence $(x_n)$ in $A\setminus\{c\}$, $x_n\to c$, with $(f(x_n))$ not converging to $L$. | Compare with 5.1.4 |
| Density Theorem 2.4.8 | Between any reals $x<y$ there is a rational $r$ with $x<r<y$. | 5.1.6(g) |
| Corollary 2.4.9 | Between any reals $x<y$ there is an irrational $z$ with $x<z<y$. | 5.1.6(g) |
| Archimedean Property (Cor 2.4.5 cited) | For $\varepsilon>0$ there is $n\in\mathbb N$ with $1/n<\varepsilon$. | 5.1.6(h) |
| Completeness (Supremum) Property 2.3.6 | Every nonempty set of reals with an upper bound has a supremum in $\mathbb R$. | Max/min and inf/sup arguments |
| Thm 2.5.1 (Characterization of intervals) | $S\subseteq\mathbb R$ with $\ge 2$ points and property [$x,y\in S$, $x<y$ $\Rightarrow$ $[x,y]\subseteq S$] is an interval. | 5.3.10 |
| Nested Intervals Property 2.5.2 | A nested sequence $I_n=[a_n,b_n]$ of closed bounded intervals has a common point. | 5.3.5 |
| Thm 3.2.2 | A convergent sequence of reals is bounded. | 5.3.2 |
| Thm 3.2.3 (algebra of limits) | Limits of sums, differences, products, multiples of convergent sequences. | (exercises / 5.4.8) |
| Thm 3.2.5 (order) | If $x_n\le y_n$ for all $n$ and both converge, then $\lim x_n\le\lim y_n$. | 3.2.6 |
| Thm 3.2.6 | If $(x_n)$ converges and $a\le x_n\le b$ for all $n$, then $a\le\lim x_n\le b$ (so closed intervals contain limits of their sequences). | 5.3.2, 5.3.4, 5.4.3 |
| Thm 3.2.7 (Squeeze Theorem) | If $x_n\le y_n\le z_n$ and $\lim x_n=\lim z_n=L$, then $(y_n)$ converges to $L$. | 5.3.4 |
| Thm 3.4.8 (Bolzano-Weierstrass) | Every bounded sequence of reals has a convergent subsequence. | 5.3.2, 5.3.4, 5.4.3 |
| Thm 3.5.5 (Cauchy Convergence Criterion) | A real sequence converges iff it is Cauchy. | 5.4.7, 5.4.8 |
| Lemma 3.5.3 (cited) | A convergent sequence is Cauchy. | 5.4.8 |
| Def 4.2.1 (neighborhood / local boundedness) | "Bounded on a neighborhood $V_\delta(x)$ of $x$" (used as stated in the exercises). | Ex 5.3.18, 5.3.19 |

Also used throughout: Triangle Inequality; the Bisection idea (proof of 5.3.5).

---

## 1. Section 5.1 Continuous Functions  [p.125-129]

**Section intro** [p.125]: The section defines continuity at a point and on a set; it is "one of the central concepts of mathematical analysis" and "it is essential that the reader master it."

### Definition 5.1.1 [p.125]
Let $A\subseteq\mathbb R$, let $f:A\to\mathbb R$, and let $c\in A$. We say that $f$ is **continuous at $c$** if, given any number $\varepsilon>0$, there exists $\delta>0$ such that if $x$ is any point of $A$ satisfying $|x-c|<\delta$, then $|f(x)-f(c)|<\varepsilon$.

If $f$ fails to be continuous at $c$, then we say that $f$ is **discontinuous at $c$**.

### Figure 5.1.1 [p.125]
"Given $V_\varepsilon(f(c))$, a neighborhood $V_\delta(c)$ is to be determined." (Two panels; see Section 7, Figure list.)

### Theorem 5.1.2 [p.125]
A function $f:A\to\mathbb R$ is continuous at a point $c\in A$ if and only if given any $\varepsilon$-neighborhood $V_\varepsilon(f(c))$ of $f(c)$ there exists a $\delta$-neighborhood $V_\delta(c)$ of $c$ such that if $x$ is any point of $A\cap V_\delta(c)$, then $f(x)$ belongs to $V_\varepsilon(f(c))$, that is,
$$f(A\cap V_\delta(c))\subseteq V_\varepsilon(f(c)).$$
*Proof:* none in the book (the reader is asked to verify it; "We leave the verification as an important exercise for the reader").

### Remarks 5.1.2 [p.125-126]
**(1)** If $c\in A$ is a cluster point of $A$, then a comparison of Definitions 4.1.4 and 5.1.1 shows that $f$ is continuous at $c$ if and only if
$$f(c)=\lim_{x\to c}f(x). \tag{1}$$
Thus, if $c$ is a cluster point of $A$, three conditions must hold for $f$ to be continuous at $c$:
(i) $f$ must be defined at $c$ (so that $f(c)$ makes sense),
(ii) the limit of $f$ at $c$ must exist in $\mathbb R$ (so that $\lim_{x\to c}f(x)$ makes sense), and
(iii) these two values must be equal.

**(2)** If $c\in A$ is not a cluster point of $A$, then there exists a neighborhood $V_\delta(c)$ of $c$ such that $A\cap V_\delta(c)=\{c\}$. Thus we conclude that a function $f$ is automatically continuous at a point $c\in A$ that is not a cluster point of $A$. Such points are often called "isolated points" of $A$. They are of little practical interest to us, since they have no relation to a limiting process. Since continuity is automatic for such points, we generally test for continuity only at cluster points. Thus we regard condition (1) as being characteristic for continuity at $c$.

### Theorem 5.1.3 (Sequential Criterion for Continuity) [p.126]
A function $f:A\to\mathbb R$ is continuous at the point $c\in A$ if and only if for every sequence $(x_n)$ in $A$ that converges to $c$, the sequence $(f(x_n))$ converges to $f(c)$.
*Proof:* none in the book; text says it is "a slight modification of the proof of Theorem 4.1.8 for limits."

### Theorem 5.1.4 (Discontinuity Criterion) [p.126]
Let $A\subseteq\mathbb R$, let $f:A\to\mathbb R$, and let $c\in A$. Then $f$ is discontinuous at $c$ if and only if there exists a sequence $(x_n)$ in $A$ such that $(x_n)$ converges to $c$, but the sequence $(f(x_n))$ does not converge to $f(c)$.
*Proof:* none in the book ("should be written out in detail by the reader"); the book notes it is a consequence of Theorem 5.1.3 and compares it with Divergence Criterion 4.1.9(a) with $L=f(c)$.

### Definition 5.1.5 [p.126]
Let $A\subseteq\mathbb R$ and let $f:A\to\mathbb R$. If $B$ is a subset of $A$, we say that $f$ is **continuous on the set $B$** if $f$ is continuous at every point of $B$.

### Examples 5.1.6 [p.126-128]

**(a)** [p.126] The constant function $f(x):=b$ is continuous on $\mathbb R$.
*Solution:* It was seen in Example 4.1.7(a) that if $c\in\mathbb R$ then $\lim_{x\to c}f(x)=b$. Since $f(c)=b$, we have $\lim_{x\to c}f(x)=f(c)$, and thus $f$ is continuous at every point $c\in\mathbb R$. Therefore $f$ is continuous on $\mathbb R$.

**(b)** [p.126] $g(x):=x$ is continuous on $\mathbb R$.
*Solution:* It was seen in Example 4.1.7(b) that if $c\in\mathbb R$ then $\lim_{x\to c}g=c$. Since $g(c)=c$, then $g$ is continuous at every point $c\in\mathbb R$. Thus $g$ is continuous on $\mathbb R$.

**(c)** [p.126] $h(x):=x^2$ is continuous on $\mathbb R$.
*Solution:* It was seen in Example 4.1.7(c) that if $c\in\mathbb R$ then $\lim_{x\to c}h=c^2$. Since $h(c)=c^2$, then $h$ is continuous at every point $c\in\mathbb R$. Thus $h$ is continuous on $\mathbb R$.

**(d)** [p.126] $\varphi(x):=1/x$ is continuous on $A:=\{x\in\mathbb R:x>0\}$.
*Solution:* It was seen in Example 4.1.7(d) that if $c\in A$, then $\lim_{x\to c}\varphi=1/c$. Since $\varphi(c)=1/c$, this shows that $\varphi$ is continuous at every point $c\in A$. Thus $\varphi$ is continuous on $A$.

**(e)** [p.127] $\varphi(x):=1/x$ is not continuous at $x=0$.
*Solution:* Indeed, if $\varphi(x)=1/x$ for $x>0$, then $\varphi$ is not defined for $x=0$, so it cannot be continuous there. Alternatively, it was seen in Example 4.1.10(a) that $\lim_{x\to0}\varphi$ does not exist in $\mathbb R$, so $\varphi$ cannot be continuous at $x=0$.

**(f)** [p.127] The signum function $\operatorname{sgn}$ is not continuous at $0$.
*Solution:* The signum function was defined in Example 4.1.10(b), where it was also shown that $\lim_{x\to0}\operatorname{sgn}(x)$ does not exist in $\mathbb R$. Therefore $\operatorname{sgn}$ is not continuous at $x=0$ (even though $\operatorname{sgn}(0)$ is defined). It is an exercise to show that $\operatorname{sgn}$ is continuous at every point $c\neq0$.

**Note** [p.127] (text, not an example): "In the next two examples, we introduce functions that played a significant role in the development of real analysis. Discontinuities are emphasized and it is not possible to graph either of them satisfactorily. ... In the nineteenth century, these functions clearly demonstrated the need for a precise and rigorous treatment of the basic concepts of analysis."

**(g)** [p.127] (Dirichlet's function) Let $A:=\mathbb R$ and let $f$ be Dirichlet's "discontinuous function" defined by
$$f(x):=\begin{cases}1 & \text{if } x \text{ is rational},\\ 0 & \text{if } x \text{ is irrational}.\end{cases}$$
We claim that $f$ is not continuous at any point of $\mathbb R$. (This function was introduced in 1829 by P. G. L. Dirichlet.)
*Solution:* Indeed, if $c$ is a rational number, let $(x_n)$ be a sequence of irrational numbers that converges to $c$. (Corollary 2.4.9 to the Density Theorem 2.4.8 assures us that such a sequence does exist.) Since $f(x_n)=0$ for all $n\in\mathbb N$, we have $\lim(f(x_n))=0$, while $f(c)=1$. Therefore $f$ is not continuous at the rational number $c$.
On the other hand, if $b$ is an irrational number, let $(y_n)$ be a sequence of rational numbers that converge to $b$. (The Density Theorem 2.4.8 assures us that such a sequence does exist.) Since $f(y_n)=1$ for all $n\in\mathbb N$, we have $\lim(f(y_n))=1$, while $f(b)=0$. Therefore $f$ is not continuous at the irrational number $b$.
Since every real number is either rational or irrational, we deduce that $f$ is not continuous at any point in $\mathbb R$.

**(h)** [p.127-128] (Thomae's function) Let $A:=\{x\in\mathbb R:x>0\}$. For any irrational number $x>0$ we define $h(x):=0$. For a rational number in $A$ of the form $m/n$, with natural numbers $m,n$ having no common factors except $1$, we define $h(m/n):=1/n$. (We also define $h(0):=1$.)
We claim that $h$ is continuous at every irrational number in $A$, and is discontinuous at every rational number in $A$. (This function was introduced in 1875 by K. J. Thomae.)
*Solution:* Indeed, if $a>0$ is rational, let $(x_n)$ be a sequence of irrational numbers in $A$ that converges to $a$. Then $\lim(h(x_n))=0$, while $h(a)>0$. Hence $h$ is discontinuous at $a$.
On the other hand, if $b$ is an irrational number and $\varepsilon>0$, then (by the Archimedean Property) there is a natural number $n_0$ such that $1/n_0<\varepsilon$. There are only a finite number of rationals with denominator less than $n_0$ in the interval $(b-1,b+1)$. (Why?) Hence $\delta>0$ can be chosen so small that the neighborhood $(b-\delta,b+\delta)$ contains no rational numbers with denominator less than $n_0$. It then follows that for $|x-b|<\delta$, $x\in A$, we have $|h(x)-h(b)|=|h(x)|\le 1/n_0<\varepsilon$. Thus $h$ is continuous at the irrational number $b$.
Consequently, we deduce that Thomae's function $h$ is continuous precisely at the irrational points in $A$. (See Figure 5.1.2.)  [end of example, marked by box]

### Figure 5.1.2 [p.127] "Thomae's function" (plot on $[0,2]$; see Section 7).

### Remarks 5.1.7 [p.128]
**(a)** Sometimes a function $f:A\to\mathbb R$ is not continuous at a point $c$ because it is not defined at this point. However, if the function $f$ has a limit $L$ at the point $c$ and if we define $F$ on $A\cup\{c\}\to\mathbb R$ by
$$F(x):=\begin{cases}f(x) & \text{for } x\in A,\\ L & \text{for } x=c,\end{cases}$$
then $F$ is continuous at $c$. To see this, one needs to check that $\lim_{x\to c}F=L$, but this follows (why?), since $\lim_{x\to c}f=L$.

**(b)** If a function $g:A\to\mathbb R$ does not have a limit at $c$, then there is no way that we can obtain a function $G:A\cup\{c\}\to\mathbb R$ that is continuous at $c$ by defining
$$G(x):=\begin{cases}g(x) & \text{for } x\in A,\\ C & \text{for } x=c.\end{cases}$$
To see this, observe that if $\lim_{x\to c}G$ exists and equals $C$, then $\lim_{x\to c}g$ must also exist and equal $C$.

### Examples 5.1.8 [p.128-129]

**(a)** The function $g(x):=\sin(1/x)$ for $x\neq0$ (see Figure 4.1.3) does not have a limit at $x=0$ (see Example 4.1.10(c)). Thus there is no value that we can assign at $x=0$ to obtain a continuous extension of $g$ at $x=0$.

**(b)** Let $f(x):=x\sin(1/x)$ for $x\neq0$. (See Figure 5.1.3.) It was seen in Example 4.2.8(f) that $\lim_{x\to0}(x\sin(1/x))=0$. Therefore it follows from Remark 5.1.7(a) that if we define $F:\mathbb R\to\mathbb R$ by
$$F(x):=\begin{cases}0 & \text{for } x=0,\\ x\sin(1/x) & \text{for } x\neq0,\end{cases}$$
then $F$ is continuous at $x=0$.

### Figure 5.1.3 [p.129] Graph of $f(x)=x\sin(1/x)$ $(x\neq0)$.

### Exercises for Section 5.1 [p.129]

1. Prove the Sequential Criterion 5.1.3.
2. Establish the Discontinuity Criterion 5.1.4.
3. Let $a<b<c$. Suppose that $f$ is continuous on $[a,b]$, that $g$ is continuous on $[b,c]$, and that $f(b)=g(b)$. Define $h$ on $[a,c]$ by $h(x):=f(x)$ for $x\in[a,b]$ and $h(x):=g(x)$ for $x\in[b,c]$. Prove that $h$ is continuous on $[a,c]$.
4. If $x\in\mathbb R$, we define $[x]$ to be the greatest integer $n\in\mathbb Z$ such that $n\le x$. (Thus, for example, $[8.3]=8$, $[\pi]=3$, $[-\pi]=-4$.) The function $x\mapsto[x]$ is called the greatest integer function. Determine the points of continuity of the following functions:
   (a) $f(x):=[x]$, (b) $g(x):=x[x]$, (c) $h(x):=[\sin x]$, (d) $k(x):=[1/x]$ $(x\neq0)$.
5. Let $f$ be defined for all $x\in\mathbb R$, $x\neq2$, by $f(x)=(x^2+x-6)/(x-2)$. Can $f$ be defined at $x=2$ in such a way that $f$ is continuous at this point?
6. Let $A\subseteq\mathbb R$ and let $f:A\to\mathbb R$ be continuous at a point $c\in A$. Show that for any $\varepsilon>0$, there exists a neighborhood $V_\delta(c)$ of $c$ such that if $x,y\in A\cap V_\delta(c)$, then $|f(x)-f(y)|<\varepsilon$.
7. Let $f:\mathbb R\to\mathbb R$ be continuous at $c$ and let $f(c)>0$. Show that there exists a neighborhood $V_\delta(c)$ of $c$ such that if $x\in V_\delta(c)$, then $f(x)>0$.
8. Let $f:\mathbb R\to\mathbb R$ be continuous on $\mathbb R$ and let $S:=\{x\in\mathbb R:f(x)=0\}$ be the "zero set" of $f$. If $(x_n)$ is in $S$ and $x=\lim(x_n)$, show that $x\in S$.
9. Let $A\subseteq B\subseteq\mathbb R$, let $f:B\to\mathbb R$ and let $g$ be the restriction of $f$ to $A$ (that is, $g(x)=f(x)$ for $x\in A$).
   (a) If $f$ is continuous at $c\in A$, show that $g$ is continuous at $c$.
   (b) Show by example that if $g$ is continuous at $c$, it need not follow that $f$ is continuous at $c$.
10. Show that the absolute value function $f(x):=|x|$ is continuous at every point $c\in\mathbb R$.
11. Let $K>0$ and let $f:\mathbb R\to\mathbb R$ satisfy the condition $|f(x)-f(y)|\le K|x-y|$ for all $x,y\in\mathbb R$. Show that $f$ is continuous at every point $c\in\mathbb R$.
12. Suppose that $f:\mathbb R\to\mathbb R$ is continuous on $\mathbb R$ and that $f(r)=0$ for every rational number $r$. Prove that $f(x)=0$ for all $x\in\mathbb R$.
13. Define $g:\mathbb R\to\mathbb R$ by $g(x):=2x$ for $x$ rational, and $g(x):=x+3$ for $x$ irrational. Find all points at which $g$ is continuous.

---

## 2. Section 5.3 Continuous Functions on Intervals  [p.134-140]

**Section intro** [p.134]: Continuous functions on intervals have important properties not possessed by general continuous functions; the section establishes them. "Alternative proofs of these results will be given in Section 5.5."

### Definition 5.3.1 [p.134]
A function $f:A\to\mathbb R$ is said to be **bounded on $A$** if there exists a constant $M>0$ such that $|f(x)|\le M$ for all $x\in A$.

In other words, a function is bounded on a set if its range is a bounded set in $\mathbb R$. To say that a function is *not* bounded on a given set is to say that no particular number can serve as a bound for its range. In exact language, a function $f$ is not bounded on the set $A$ if given any $M>0$, there exists a point $x_M\in A$ such that $|f(x_M)|>M$. We then say that $f$ is **unbounded on $A$** in this case.

*Inline Example (p.134):* For $f(x):=1/x$ on $A:=(0,\infty)$, $f$ is not bounded on $A$ because for any $M>0$ we can take $x_M:=1/(M+1)$ in $A$ to get $f(x_M)=1/x_M=M+1>M$. This example shows that continuous functions need not be bounded.

### Theorem 5.3.2 (Boundedness Theorem) [p.135]
Let $I:=[a,b]$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. Then $f$ is bounded on $I$.
(Footnote on p.135: "This theorem, as well as 5.3.4, is true for an arbitrary closed bounded set. For these developments, see Sections 11.2 and 11.3.")

*Proof (outline).*
1. Suppose $f$ is not bounded on $I$. Then for each $n\in\mathbb N$ there is a number $x_n\in I$ with $|f(x_n)|>n$.
2. The sequence $X=(x_n)$ is bounded (its terms lie in $I$), so by Bolzano-Weierstrass 3.4.8 there is a subsequence $X'=(x_{n_r})$ of $X$ converging to a number $x$.
3. Since $I$ is closed and the elements of $X'$ belong to $I$, Theorem 3.2.6 gives $x\in I$.
4. $f$ is continuous at $x$, so $(f(x_{n_r}))$ converges to $f(x)$.
5. By Theorem 3.2.2 the convergent sequence $(f(x_{n_r}))$ must be bounded. But $|f(x_{n_r})|>n_r\ge r$ for $r\in\mathbb N$, a contradiction.
Therefore the supposition is false, and $f$ is bounded on $I$. (Q.E.D.)

*Necessity of hypotheses (text after proof, p.135):* (i) the interval must be bounded: $f(x):=x$ on the unbounded closed interval $A:=[0,\infty)$ is continuous but not bounded on $A$. (ii) the interval must be closed: $g(x):=1/x$ on the half-open $B:=(0,1]$ is continuous but not bounded on $B$. (iii) the function must be continuous: $h$ defined on $C:=[0,1]$ by $h(x):=1/x$ for $x\in(0,1]$ and $h(0):=1$ is discontinuous and unbounded on $C$.

### Definition 5.3.3 [p.135]
Let $A\subseteq\mathbb R$ and let $f:A\to\mathbb R$. We say that $f$ **has an absolute maximum on $A$** if there is a point $x^*\in A$ such that
$$f(x^*)\ge f(x)\quad\text{for all } x\in A.$$
We say that $f$ **has an absolute minimum on $A$** if there is a point $x_*\in A$ such that
$$f(x_*)\le f(x)\quad\text{for all } x\in A.$$
We say that $x^*$ is an **absolute maximum point** for $f$ on $A$, and that $x_*$ is an **absolute minimum point** for $f$ on $A$, if they exist.

*Text following (p.135):* A continuous function on a set $A$ need not have an absolute max or min. For example $f(x):=1/x$ has neither an absolute maximum nor an absolute minimum on $A:=(0,\infty)$ (Figure 5.3.1). There can be no absolute maximum for $f$ on $A$ since $f$ is not bounded above on $A$, and there is no point at which $f$ attains the value $0=\inf\{f(x):x\in A\}$. The same function has neither an absolute maximum nor an absolute minimum when restricted to $(0,1)$, while it has *both* an absolute maximum and an absolute minimum when restricted to $[1,2]$. In addition, $f(x)=1/x$ has an absolute maximum but no absolute minimum when restricted to $[1,\infty)$, but no absolute maximum and no absolute minimum when restricted to $(1,\infty)$.
The absolute max point need not be unique: $g(x):=x^2$ on $A:=[-1,+1]$ has the two points $x=\pm1$ giving its absolute maximum on $A$ and the single point $x=0$ its absolute minimum. (See Figure 5.3.2.) The constant function $h(x):=1$ for $x\in\mathbb R$ is such that *every point* of $\mathbb R$ is both an absolute maximum and an absolute minimum point for $h$.

### Figure 5.3.1 [p.136] The function $f(x)=1/x$ $(x>0)$.
### Figure 5.3.2 [p.136] The function $g(x)=x^2$ $(|x|\le1)$.

### Theorem 5.3.4 (Maximum-Minimum Theorem) [p.136]
Let $I:=[a,b]$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. Then $f$ has an absolute maximum and an absolute minimum on $I$.

*Proof (outline).*
1. Consider the nonempty set $f(I):=\{f(x):x\in I\}$; it is bounded by Theorem 5.3.2. Let $s^*:=\sup f(I)$ and $s_*:=\inf f(I)$. (Existence of the sup/inf is by the Completeness Property 2.3.6.)
2. We establish the existence of points $x^*$ and $x_*$ in $I$ such that $s^*=f(x^*)$ and $s_*=f(x_*)$. (The book leaves the existence of $x_*$ to the reader.)
3. Since $s^*=\sup f(I)$, for $n\in\mathbb N$ the number $s^*-1/n$ is not an upper bound of $f(I)$. Hence there is $x_n\in I$ with
$$s^*-\frac1n<f(x_n)\le s^*\quad\text{for all } n\in\mathbb N. \tag{1}$$
4. $X=(x_n)$ is bounded, so by Bolzano-Weierstrass 3.4.8 there is a subsequence $X'=(x_{n_r})$ converging to some $x^*$. Its elements lie in $I=[a,b]$, so $x^*\in I$ by Theorem 3.2.6. Hence $f$ is continuous at $x^*$ and $\lim f(x_{n_r})=f(x^*)$.
5. From (1), $s^*-1/n_r<f(x_{n_r})\le s^*$ for all $r\in\mathbb N$; by the Squeeze Theorem 3.2.7, $\lim f(x_{n_r})=s^*$.
6. Therefore $f(x^*)=\lim f(x_{n_r})=s^*=\sup f(I)$, so $x^*$ is an absolute maximum point of $f$ on $I$. (Q.E.D.)

### Location of Roots Theorem 5.3.5 [p.137]
Let $I=[a,b]$ and let $f:I\to\mathbb R$ be continuous on $I$. If $f(a)<0<f(b)$, or if $f(a)>0>f(b)$, then there exists a number $c\in(a,b)$ such that $f(c)=0$.

*Proof (outline; this is the Bisection Method).* Assume $f(a)<0<f(b)$.
1. Let $I_1:=[a_1,b_1]$ with $a_1:=a$, $b_1:=b$, and let $p_1:=\tfrac12(a_1+b_1)$ be the midpoint. If $f(p_1)=0$, take $c:=p_1$ and we are done. If $f(p_1)>0$, set $a_2:=a_1$, $b_2:=p_1$; if $f(p_1)<0$, set $a_2:=p_1$, $b_2:=b_1$. In either case $I_2:=[a_2,b_2]\subseteq I_1$ and $f(a_2)<0$, $f(b_2)>0$.
2. Continue: given $I_1,\dots,I_k$ obtained by successive bisection, with $f(a_k)<0$ and $f(b_k)>0$, let $p_k:=\tfrac12(a_k+b_k)$. If $f(p_k)=0$, take $c:=p_k$ and stop. If $f(p_k)>0$, set $a_{k+1}:=a_k$, $b_{k+1}:=p_k$; if $f(p_k)<0$, set $a_{k+1}:=p_k$, $b_{k+1}:=b_k$. Then $I_{k+1}\subseteq I_k$, $f(a_{k+1})<0$, $f(b_{k+1})>0$.
3. If the process terminates by finding $p_n$ with $f(p_n)=0$, we are done. Otherwise we obtain a nested sequence of closed bounded intervals $I_n:=[a_n,b_n]$ with $f(a_n)<0$ and $f(b_n)>0$ for every $n$.
4. The length of $I_n$ is $b_n-a_n=(b-a)/2^{n-1}$. By the Nested Intervals Property 2.5.2 there is a point $c$ in $I_n$ for all $n$; since $a_n\le c\le b_n$ and $b_n-a_n\to0$, we have $\lim(a_n)=c=\lim(b_n)$.
5. Since $f$ is continuous at $c$: $\lim f(a_n)=f(c)=\lim f(b_n)$.
6. $f(a_n)<0$ for all $n$ gives $f(c)\le0$; $f(b_n)>0$ for all $n$ gives $f(c)\ge0$. Hence $f(c)=0$, and $c\in(a,b)$ is a root. (Q.E.D.)
(The case $f(a)>0>f(b)$ is handled similarly, per the book's wording "similarly" — the book's proof is for $f(a)<0<f(b)$ only.)

*Text after the proof (p.137):* The theorem is the theoretical basis for locating roots of a continuous function by means of sign changes; the proof provides the Bisection Method, readily programmable for a computer. An alternative proof is indicated in Exercise 5.3.11.

*Example 5.3.6 (bisection table, root of $xe^x-2$) is outside the requested scope and is skipped, per instructions.*

### Bolzano's Intermediate Value Theorem 5.3.7 [p.138]
Let $I$ be an interval and let $f:I\to\mathbb R$ be continuous on $I$. If $a,b\in I$ and if $k\in\mathbb R$ satisfies $f(a)<k<f(b)$, then there exists a point $c\in I$ between $a$ and $b$ such that $f(c)=k$.

*Proof (outline).*
1. Suppose $a<b$ and let $g(x):=f(x)-k$. Then $g(a)<0<g(b)$.
2. By the Location of Roots Theorem 5.3.5 there is $c$ with $a<c<b$ such that $0=g(c)=f(c)-k$. Therefore $f(c)=k$.
3. The book then treats the case $b<a$: let $h(x):=k-f(x)$, so that $h(b)<0<h(a)$. Theorem 5.3.5 gives $c$ with $b<c<a$ such that $0=h(c)=k-f(c)$, whence $f(c)=k$. (Q.E.D.)

### Corollary 5.3.8 [p.138]
Let $I=[a,b]$ be a closed, bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. If $k\in\mathbb R$ is any number satisfying
$$\inf f(I)\le k\le\sup f(I),$$
then there exists a number $c\in I$ such that $f(c)=k$.

*Proof.* By the Maximum-Minimum Theorem 5.3.4 there are points $c_*$ and $c^*$ in $I$ such that $\inf f(I)=f(c_*)\le k\le f(c^*)=\sup f(I)$. The conclusion follows from Bolzano's Theorem 5.3.7. (Q.E.D.)

### Theorem 5.3.9 [p.139]
Let $I$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. Then the set $f(I)=\{f(x):x\in I\}$ is a closed bounded interval.

*Proof.* Let $m:=\inf f(I)$ and $M:=\sup f(I)$. By the Maximum-Minimum Theorem 5.3.4, $m$ and $M$ belong to $f(I)$. Moreover $f(I)\subseteq[m,M]$. If $k$ is any element of $[m,M]$, then by the preceding corollary there exists a point $c\in I$ such that $k=f(c)$. Hence $k\in f(I)$, and we conclude that $[m,M]\subseteq f(I)$. Therefore $f(I)$ is the interval $[m,M]$. (Q.E.D.)

**Warning** [p.139]: If $I:=[a,b]$ is an interval and $f:I\to\mathbb R$ is continuous on $I$, we have proved that $f(I)$ is the interval $[m,M]$. We have *not* proved (and it is not always true) that $f(I)$ is the interval $[f(a),f(b)]$. (See Figure 5.3.3.)

*Text (p.139):* The continuous image of a closed bounded interval is a set of the same type ("preservation" theorem). Although the continuous image of an interval is an interval, it is not true that the image interval necessarily has the *same form* as the domain interval. For example, the continuous image of an open interval need not be an open interval, and the continuous image of an unbounded closed interval need not be a closed interval. Indeed, if $f(x):=1/(x^2+1)$ for $x\in\mathbb R$, then $f$ is continuous on $\mathbb R$ [see Example 5.2.3(b)]. It is easy to see that if $I_1:=(-1,1)$, then $f(I_1)=(\tfrac12,1]$, which is not an open interval. Also, if $I_2:=[0,\infty)$, then $f(I_2)=(0,1]$, which is not a closed interval. (See Figure 5.3.4.)

### Figure 5.3.3 [p.139] $f(I)=[m,M]$ (described in Section 7).
### Figure 5.3.4 [p.139] Graph of $f(x)=1/(x^2+1)$ $(x\in\mathbb R)$ (described in Section 7).

### Preservation of Intervals Theorem 5.3.10 [p.140]
Let $I$ be an interval and let $f:I\to\mathbb R$ be continuous on $I$. Then the set $f(I)$ is an interval.

*Proof (outline).* (The book uses Theorem 2.5.1, the characterization of intervals.)
1. Let $\alpha,\beta\in f(I)$ with $\alpha<\beta$. Then there exist points $a,b\in I$ such that $\alpha=f(a)$ and $\beta=f(b)$.
2. By Bolzano's Intermediate Value Theorem 5.3.7, if $k\in(\alpha,\beta)$ then there exists $c\in I$ with $k=f(c)$; hence $k\in f(I)$. Therefore $[\alpha,\beta]\subseteq f(I)$ (the endpoints are already in $f(I)$).
3. So $f(I)$ has property (1) of Theorem 2.5.1 (for $x,y\in f(I)$ with $x<y$, $[x,y]\subseteq f(I)$), and by Theorem 2.5.1 it is an interval. (Q.E.D.)

### Exercises for Section 5.3 [p.140-141]

1. Let $I:=[a,b]$ and let $f:I\to\mathbb R$ be a continuous function such that $f(x)>0$ for each $x$ in $I$. Prove that there exists a number $\alpha>0$ such that $f(x)\ge\alpha$ for all $x\in I$.
2. Let $I:=[a,b]$ and let $f,g:I\to\mathbb R$ be continuous functions. Show that the set $E:=\{x\in I:f(x)=g(x)\}$ has the property that if $(x_n)\subseteq E$ and $x_n\to x_0$, then $x_0\in E$.
3. Let $I:=[a,b]$ and let $f:I\to\mathbb R$ be a continuous function such that for each $x\in I$ there exists $y\in I$ such that $|f(y)|\le\tfrac12|f(x)|$. Prove that there exists $c\in I$ such that $f(c)=0$.
4. Show that every polynomial of odd degree with real coefficients has at least one real root.
5. Show that the polynomial $p(x):=x^4+7x^3-9$ has at least two real roots. Use a calculator to locate the roots within two decimal places.
6. Let $f$ be continuous on the interval $[0,1]\subseteq\mathbb R$ and such that $f(0)=f(1)$. Prove that there exists a point $c\in[0,\tfrac12]$ such that $f(c)=f(c+\tfrac12)$. [Hint: Consider $g(x):=f(x)-f(x+\tfrac12)$.] Conclude that there are, at any time, antipodal points on the earth's equator that have the same temperature.
7. Show that the equation $x=\cos x$ has a solution in the interval $[0,\pi/2]$. Use the Bisection Method and a calculator to find an approximate solution of this equation, with error less than $10^{-3}$.
8. Show that the function $f(x):=2\ln x+\sqrt x-2$ has a root in the interval $[1,2]$. Use the Bisection Method and a calculator to find the root with error less than $10^{-2}$.
9. (a) The function $f(x):=(x-1)(x-2)(x-3)(x-4)(x-5)(x-6)$ has five roots in the interval $[0,7]$. If the Bisection Method is applied on this interval, where are the roots located? (b) Same question for $g(x):=(x-2)(x-3)(x-4)(x-5)(x-6)$ on $[0,7]$.
10. If the Bisection Method is used on an interval of length $1$ to find $p_n$ with error $|p_n-c|<10^{-5}$, determine the least $n$ that will assure this accuracy.
11. Let $I:=[a,b]$, let $f:I\to\mathbb R$ be continuous, and let $f(a)<0$, $f(b)>0$. Let $W:=\{x\in I:f(x)<0\}$, and let $w:=\sup W$. Prove that $f(w)=0$. (This provides an alternative proof of Theorem 5.3.5.)
12. Let $I:=[0,\pi/2]$ and let $f:I\to\mathbb R$ be defined by $f(x):=\sup\{x^2,\cos x\}$ for $x\in I$. Show that there exists an absolute maximum point $x_0\in I$ for $f$ on $I$. Show that $x_0$ is a solution of the equation $\cos x=x^2$.
13. Suppose that $f:\mathbb R\to\mathbb R$ is continuous on $\mathbb R$ and that $\lim_{x\to-\infty}f=0$ and $\lim_{x\to\infty}f=0$. Prove that $f$ is bounded on $\mathbb R$ and attains either a maximum or a minimum on $\mathbb R$. Give an example to show that both a maximum and a minimum need not be attained.
14. Let $f:\mathbb R\to\mathbb R$ be continuous on $\mathbb R$ and let $\beta\in\mathbb R$. Show that if $f(x_0)<\beta$ for some $x_0\in\mathbb R$, then there exists a $\delta$-neighborhood $U$ of $x_0$ such that $f(x)<\beta$ for all $x\in U$.
15. Examine which open [respectively, closed] intervals are mapped by $f(x):=x^2$ for $x\in\mathbb R$ onto open [respectively, closed] intervals.
16. Examine the mapping of open [respectively, closed] intervals under the functions $g(x):=1/(x^2+1)$ and $h(x):=x^3$ for $x\in\mathbb R$.
17. If $f:[0,1]\to\mathbb R$ is continuous and has only rational [respectively, irrational] values, must $f$ be constant? Prove your assertion.
18. Let $I:=[a,b]$ and let $f:I\to\mathbb R$ (not necessarily continuous) have the property that for every $x\in I$, $f$ is bounded on a neighborhood $V_{\delta_x}(x)$ of $x$ (in the sense of Definition 4.2.1). Prove that $f$ is bounded on $I$.
19. Let $J:=(a,b)$ and let $g:J\to\mathbb R$ be a continuous function with the property that for every $x\in J$, the function $g$ is bounded on a neighborhood $V_{\delta_x}(x)$ of $x$. Show by example that $g$ is not necessarily bounded on $J$.


---

## 3. Section 5.4 Uniform Continuity  [p.141-149]

**Section discussion** [p.141-142] (unnumbered text, key content): Let $A\subseteq\mathbb R$ and $f:A\to\mathbb R$. Definition 5.1.1 says $f$ is continuous at every point $u\in A$ iff: given $\varepsilon>0$ and $u\in A$, there is $\delta(\varepsilon,u)>0$ such that $|x-u|<\delta(\varepsilon,u)$, $x\in A$ implies $|f(x)-f(u)|<\varepsilon$. The point is that $\delta$ depends in general on both $\varepsilon$ and $u$. Example: $f(x):=\sin(1/x)$ for $x>0$ — the $\delta$ must shrink near $0$. If $f(x):=2x$ on $\mathbb R$, then $|f(x)-f(u)|=2|x-u|$ and one may take $\delta(\varepsilon,u):=\varepsilon/2$ for all $u$. For $g(x):=1/x$ on $A:=\{x\in\mathbb R:x>0\}$,
$$g(x)-g(u)=\frac{u-x}{ux}. \tag{1}$$
If $u\in A$ and we take $\delta(\varepsilon,u):=\inf\{u,\tfrac12u^2\varepsilon\}$, then if $|x-u|<\delta(\varepsilon,u)$ we have $\tfrac12u<x<\tfrac32u$, so $1/x<2/u$ and
$$|g(x)-g(u)|\le\frac{2}{u^2}|x-u|. \tag{3}$$
Hence $|g(x)-g(u)|<\varepsilon$ whenever $|x-u|<\delta(\varepsilon,u)$. However, $\inf\{\delta(\varepsilon,u):u>0\}=0$, so no single $\delta$ works for all $u$ (Figures 5.4.1, 5.4.2).

### Figure 5.4.1 [p.142] Graph of $g(x)=1/x$ $(x>0)$ with a $\delta$-neighborhood about $\tfrac12$.
### Figure 5.4.2 [p.142] Graph of $g(x)=1/x$ $(x>0)$ with $V_\varepsilon(2)$ about $2$ and the corresponding $\delta$-neighborhood about $\tfrac12$ (illustrates that the permissible $\delta$ tends to $0$ as $u\to0$).

### Definition 5.4.1 (Uniform Continuity) [p.142]
Let $A\subseteq\mathbb R$ and let $f:A\to\mathbb R$. We say that $f$ is **uniformly continuous on $A$** if for each $\varepsilon>0$ there is a $\delta(\varepsilon)>0$ such that if $x,u\in A$ are any numbers satisfying $|x-u|<\delta(\varepsilon)$, then $|f(x)-f(u)|<\varepsilon$.

*Text (p.142):* It is clear that if $f$ is uniformly continuous on $A$, then it is continuous at every point of $A$. In general, the converse does not hold, as is shown by the function $g(x)=1/x$ on the set $A:=\{x\in\mathbb R:x>0\}$.

### Nonuniform Continuity Criteria 5.4.2 [p.142]
Let $A\subseteq\mathbb R$ and let $f:A\to\mathbb R$. Then the following statements are equivalent:
(i) $f$ is not uniformly continuous on $A$.
(ii) There exists $\varepsilon_0>0$ such that for every $\delta>0$ there are points $x_\delta,u_\delta$ in $A$ such that $|x_\delta-u_\delta|<\delta$ and $|f(x_\delta)-f(u_\delta)|\ge\varepsilon_0$.
(iii) There exist $\varepsilon_0>0$ and two sequences $(x_n)$ and $(u_n)$ in $A$ such that $\lim(x_n-u_n)=0$ and $|f(x_n)-f(u_n)|\ge\varepsilon_0$ for all $n\in\mathbb N$.

*Application (p.142):* $g(x):=1/x$ is not uniformly continuous on $A:=\{x:x>0\}$. For $x_n:=1/n$ and $u_n:=1/(n+1)$ we have $\lim(x_n-u_n)=0$ and $|g(x_n)-g(u_n)|=1$ for all $n\in\mathbb N$. (Proof of 5.4.2 left to the reader.)

*Text (p.142):* "We now present an important result that assures that a continuous function on a closed bounded interval $I$ is uniformly continuous on $I$. Other proofs of this theorem are given in Sections 5.5 and 11.3."

### Uniform Continuity Theorem 5.4.3 [p.143]
Let $I$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. Then $f$ is uniformly continuous on $I$.

*Proof (outline).*
1. Suppose $f$ is not uniformly continuous on $I$. By Nonuniform Continuity Criterion 5.4.2 there exist $\varepsilon_0>0$ and two sequences $(x_n),(u_n)$ in $I$ with $|x_n-u_n|<1/n$ and $|f(x_n)-f(u_n)|\ge\varepsilon_0$ for all $n\in\mathbb N$.
2. Since $I$ is bounded, $(x_n)$ is bounded; by Bolzano-Weierstrass 3.4.8 it has a subsequence $(x_{n_k})$ converging to some $z$. Since $I$ is closed, $z\in I$ (Theorem 3.2.6).
3. $|u_{n_k}-z|\le|u_{n_k}-x_{n_k}|+|x_{n_k}-z|$; since $|u_{n_k}-x_{n_k}|<1/n_k\to0$, the subsequence $(u_{n_k})$ also converges to $z$.
4. Since $f$ is continuous at $z$, both $(f(x_{n_k}))$ and $(f(u_{n_k}))$ converge to $f(z)$. Hence $|f(x_{n_k})-f(u_{n_k})|\to0$, which contradicts $|f(x_{n_k})-f(u_{n_k})|\ge\varepsilon_0$ for all $k$.
5. Therefore $f$ is uniformly continuous on $I$. (Q.E.D.)

### Definition 5.4.4 (Lipschitz function) [p.143]
Let $A\subseteq\mathbb R$ and let $f:A\to\mathbb R$. If there exists a constant $K>0$ such that
$$|f(x)-f(u)|\le K|x-u|\quad\text{for all } x,u\in A, \tag{4}$$
then $f$ is said to be a **Lipschitz function** (or to satisfy a **Lipschitz condition**) on $A$.

*Remark (p.143, geometric meaning):* For $f:I\to\mathbb R$ on an interval $I$, (4) can be written as $\left|\dfrac{f(x)-f(u)}{x-u}\right|\le K$ for $x,u\in I$, $x\ne u$. The quantity inside the absolute values is the slope of the line segment joining $(x,f(x))$ and $(u,f(u))$. Thus $f$ satisfies a Lipschitz condition if and only if the slopes of all line segments joining two points on the graph of $y=f(x)$ over $I$ are bounded by some number $K$.

### Theorem 5.4.5 [p.143]
If $f:A\to\mathbb R$ is a Lipschitz function, then $f$ is uniformly continuous on $A$.

*Proof.* If condition (4) is satisfied, then given $\varepsilon>0$ we can take $\delta:=\varepsilon/K$. If $x,u\in A$ satisfy $|x-u|<\delta$, then $|f(x)-f(u)|<K\cdot\dfrac{\varepsilon}{K}=\varepsilon$. Therefore $f$ is uniformly continuous on $A$. (Q.E.D.)

### Examples 5.4.6 [p.144]

**(a)** If $f(x):=x^2$ on $A:=[0,b]$, where $b>0$, then
$$|f(x)-f(u)|=|x+u|\,|x-u|\le 2b|x-u|$$
for all $x,u\in[0,b]$. Thus $f$ satisfies (4) with $K:=2b$ on $A$, and therefore $f$ is uniformly continuous on $A$. Of course, since $f$ is continuous and $A$ is a closed bounded interval, this can also be deduced from the Uniform Continuity Theorem. (Note that $f$ does *not* satisfy a Lipschitz condition on the interval $[0,\infty)$.)

**(b)** Not every uniformly continuous function is a Lipschitz function.
Let $g(x):=\sqrt x$ on the closed bounded interval $I:=[0,2]$. Since $g$ is continuous on $I$, it follows from the Uniform Continuity Theorem 5.4.3 that $g$ is uniformly continuous on $I$. However, there is no number $K>0$ such that $|g(x)|\le K|x|$ for all $x\in I$. (Why?) Therefore, $g$ is not a Lipschitz function on $I$.

**(c)** The Uniform Continuity Theorem and Theorem 5.4.5 can sometimes be combined to establish the uniform continuity of a function on a set.
We consider $g(x):=\sqrt x$ on the set $A:=[0,\infty)$. The uniform continuity of $g$ on the interval $I:=[0,2]$ follows from the Uniform Continuity Theorem as noted in (b). If $J:=[1,\infty)$, then for both $x,u$ in $J$ we have
$$|g(x)-g(u)|=|\sqrt x-\sqrt u|=\frac{|x-u|}{\sqrt x+\sqrt u}\le\tfrac12|x-u|.$$
Thus $g$ is a Lipschitz function on $J$ with constant $K=\tfrac12$, and hence by Theorem 5.4.5, $g$ is uniformly continuous on $J$. Since $A=I\cup J$, it follows (by taking $\delta(\varepsilon):=\inf\{1,\delta_I(\varepsilon),\delta_J(\varepsilon)\}$) that $g$ is uniformly continuous on $A$. We leave the details to the reader. (Q.E.D. box.)

### Theorem 5.4.7 [p.144]
If $f:A\to\mathbb R$ is uniformly continuous on a subset $A$ of $\mathbb R$ and if $(x_n)$ is a Cauchy sequence in $A$, then $(f(x_n))$ is a Cauchy sequence in $\mathbb R$.

*Proof (outline).*
1. Let $(x_n)$ be a Cauchy sequence in $A$ and let $\varepsilon>0$ be given.
2. Choose $\delta>0$ such that if $x,u\in A$ and $|x-u|<\delta$, then $|f(x)-f(u)|<\varepsilon$ (uniform continuity).
3. Since $(x_n)$ is Cauchy, there exists $H(\delta)$ such that $|x_n-x_m|<\delta$ for all $n,m>H(\delta)$.
4. By the choice of $\delta$, for $n,m>H(\delta)$ we have $|f(x_n)-f(x_m)|<\varepsilon$. Therefore $(f(x_n))$ is Cauchy. (Q.E.D.)

*Text after proof (p.144):* This gives an alternative way of seeing that $f(x):=1/x$ is not uniformly continuous on $(0,1)$: the sequence $x_n:=1/n$ in $(0,1)$ is Cauchy, but the image sequence $f(x_n)=n$ is not Cauchy.

### Continuous Extension Theorem 5.4.8 [p.145]
A function $f$ is uniformly continuous on the interval $(a,b)$ if and only if it can be defined at the endpoints $a$ and $b$ such that the extended function is continuous on $[a,b]$.

*Proof (outline).*
(⇐) This direction is trivial.
(⇒) Suppose $f$ is uniformly continuous on $(a,b)$. We show how to extend $f$ to $a$ (the argument for $b$ is similar).
1. Show $\lim_{x\to a^+}f(x)=L$ exists. Let $(x_n)$ be a sequence in $(a,b)$ with $x_n\to a$. Then $(x_n)$ is a Cauchy sequence (Lemma 3.5.3 / convergent sequences are Cauchy), so by Theorem 5.4.7, $(f(x_n))$ is Cauchy and hence convergent (Theorem 3.5.5), with limit $L$ say.
2. The limit $L$ is independent of the sequence: if $(u_n)$ is any other sequence in $(a,b)$ with $u_n\to a$, then $\lim(u_n-x_n)=a-a=0$, and by uniform continuity $\lim(f(u_n))=\lim\big(f(u_n)-f(x_n)\big)+\lim(f(x_n))=0+L=L$.
3. By the Sequential Criterion for limits (4.1.8), $\lim_{x\to a^+}f=L$.
4. If we define $f(a):=L$, then $f$ is continuous at $a$. The same argument applies to $b$, so $f$ has a continuous extension to $[a,b]$. (Q.E.D.)

*Text after proof (p.145):* Since $\lim_{x\to0}\sin(1/x)$ does not exist, by the Continuous Extension Theorem the function $x\mapsto\sin(1/x)$ is not uniformly continuous on $(0,b]$ for $b>0$. On the other hand, since $\lim_{x\to0}x\sin(1/x)=0$ exists, the function $g(x):=x\sin(1/x)$ is uniformly continuous on $(0,b]$ for all $b>0$.

*Footnote (p.145, at the start of "Approximation"):* "The rest of this section can be omitted on a first reading of this chapter."

### Approximation (text, p.145)
Approximation to continuous functions requires a precise meaning of "approximate": the approximating function should not differ from the given function by more than a preassigned error at every point of the domain.

### Definition 5.4.9 (Step function) [p.145]
A function $s:[a,b]\to\mathbb R$ is called a **step function** if $[a,b]$ is the union of a finite number of nonoverlapping intervals $I_1,I_2,\dots,I_n$ such that $s$ is constant on each interval $I_k$, that is, $s(x)=c_k$ for all $x\in I_k$, $k=1,\dots,n$.

Thus a step function has only a finite number of distinct values. Example (p.145): the function $s:[-2,4]\to\mathbb R$ defined by
$$s(x):=\begin{cases}0, & -2\le x<-1,\\ 1, & -1\le x\le0,\\ \tfrac12, & 0<x<\tfrac12,\\ 3, & \tfrac12\le x<1,\\ -2, & 1\le x\le3,\\ 2, & 3<x\le4,\end{cases}$$
is a step function. (See Figure 5.4.3.)

### Figure 5.4.3 [p.146] Graph of $y=s(x)$ (step function above; described in Section 7).

### Theorem 5.4.10 [p.146]
Let $I$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. If $\varepsilon>0$, then there exists a step function $s_\varepsilon:I\to\mathbb R$ such that
$$|f(x)-s_\varepsilon(x)|<\varepsilon\quad\text{for all } x\in I.$$

*Proof (outline).*
1. Since $f$ is uniformly continuous on $I=[a,b]$ (Theorem 5.4.3), there is $\delta(\varepsilon)>0$ such that if $x,y\in I$ and $|x-y|<\delta(\varepsilon)$, then $|f(x)-f(y)|<\varepsilon$.
2. Choose $m\in\mathbb N$ sufficiently large so that $h:=(b-a)/m<\delta(\varepsilon)$. Divide $I$ into $m$ disjoint intervals of length $h$: namely $I_1:=[a,a+h]$, and $I_k:=(a+(k-1)h,\,a+kh]$ for $k=2,\dots,m$. Thus each subinterval has length $h<\delta(\varepsilon)$, so any two values of $f$ in $I_k$ differ by less than $\varepsilon$.
3. Define
$$s_\varepsilon(x):=f(a+kh)\qquad\text{for } x\in I_k,\ k=1,\dots,m. \tag{5}$$
4. $s_\varepsilon$ is constant on each $I_k$ (its value on $I_k$ is the value of $f$ at the right endpoint of $I_k$). Consequently, if $x\in I_k$, then $|f(x)-s_\varepsilon(x)|=|f(x)-f(a+kh)|<\varepsilon$. (Q.E.D.)

### Figure 5.4.4 [p.146] "Approximation by step functions": graph of $f$ with the band $y=f(x)\pm\varepsilon$ and the step function $y=s_\varepsilon(x)$ lying within the band on $[a,b]$.

### Corollary 5.4.11 [p.147]
Let $I:=[a,b]$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. If $\varepsilon>0$, there exists $m\in\mathbb N$ such that if we divide $I$ into $m$ disjoint intervals $I_k$ having length $h:=(b-a)/m$, then the step function $s_\varepsilon$ defined in equation (5) satisfies $|f(x)-s_\varepsilon(x)|<\varepsilon$ for all $x\in I$.
*Text:* "Note that the proof of the preceding theorem establishes somewhat more than was announced in the statement of the theorem." (Proof: the proof of 5.4.10 itself.)

*Text (p.147):* Step functions are extremely elementary in character, but they are not continuous (except in trivial cases). Since it is often desirable to approximate continuous functions by elementary continuous functions, the book now shows that continuous functions can be approximated by continuous piecewise linear functions.

### Definition 5.4.12 (Piecewise linear) [p.147]
Let $I:=[a,b]$ be an interval. Then a function $g:I\to\mathbb R$ is said to be **piecewise linear** on $I$ if $I$ is the union of a finite number of disjoint intervals $I_1,\dots,I_m$ such that the restriction of $g$ to each interval $I_k$ is a linear function.

**Remark** [p.147]: It is evident that in order for a piecewise linear function $g$ to be continuous on $I$, the line segments that form the graph of $g$ must meet at the endpoints of adjacent subintervals $I_k$, $I_{k+1}$ $(k=1,\dots,m-1)$.

### Theorem 5.4.13 [p.147]
Let $I$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. If $\varepsilon>0$, then there exists a continuous piecewise linear function $g_\varepsilon:I\to\mathbb R$ such that
$$|f(x)-g_\varepsilon(x)|<\varepsilon\quad\text{for all } x\in I.$$

*Proof (outline).*
1. Since $f$ is uniformly continuous on $I=[a,b]$, there is $\delta(\varepsilon)>0$ such that $|f(x)-f(y)|<\varepsilon$ whenever $x,y\in I$, $|x-y|<\delta(\varepsilon)$ (and $x,y$ as in 5.4.10).
2. Choose $m\in\mathbb N$ with $h:=(b-a)/m<\delta(\varepsilon)$; let $I_1:=[a,a+h]$ and $I_k:=(a+(k-1)h,a+kh]$ for $k=2,\dots,m$.
3. On each interval $I_k$ define $g_\varepsilon$ to be the linear function joining the points $\big(a+(k-1)h,\ f(a+(k-1)h)\big)$ and $\big(a+kh,\ f(a+kh)\big)$.
4. Then $g_\varepsilon$ is a continuous piecewise linear function on $I$ (adjacent segments meet at the common endpoints).
5. For $x\in I_k$, the value $f(x)$ lies within $\varepsilon$ of $f(a+(k-1)h)$ and of $f(a+kh)$, and the same holds for $g_\varepsilon(x)$ between those two endpoint values; the book states that it is "an exercise to show that $|f(x)-g_\varepsilon(x)|<\varepsilon$ for all $x\in I_k$", therefore the inequality holds on all of $I$. (Q.E.D.)

### Figure 5.4.5 [p.147] "Approximation by piecewise linear function": graph of $f$ with the band $y=f(x)\pm\varepsilon$ and a piecewise linear graph $y=g_\varepsilon(x)$ lying within the band.

### Weierstrass Approximation Theorem 5.4.14 [p.148] (statement only; proof omitted per scope)
Let $I=[a,b]$ and let $f:I\to\mathbb R$ be a continuous function. If $\varepsilon>0$ is given, then there exists a polynomial function $p_\varepsilon$ such that
$$|f(x)-p_\varepsilon(x)|<\varepsilon\quad\text{for all } x\in I.$$
*Text (p.148):* The book notes that polynomials of arbitrarily high degree may be needed; "all of them are rather intricate, or employ results that are not yet at our disposal. (A proof can be found in Bartle, ERA, pp. 169-172, which is listed in the References.)"

### Exercises for Section 5.4 [p.148-149]

1. Show that the function $f(x):=1/x$ is uniformly continuous on the set $A:=[a,\infty)$, where $a$ is a positive constant.
2. Show that the function $f(x):=1/x^2$ is uniformly continuous on $A:=[1,\infty)$, but that it is not uniformly continuous on $B:=(0,\infty)$.
3. Use the Nonuniform Continuity Criterion 5.4.2 to show that the following functions are not uniformly continuous on the given sets:
   (a) $f(x):=x^2$, $A:=[0,\infty)$. (b) $g(x):=\sin(1/x)$, $B:=(0,\infty)$.
4. Show that the function $f(x):=1/(1+x^2)$ for $x\in\mathbb R$ is uniformly continuous on $\mathbb R$.
5. Show that if $f$ and $g$ are uniformly continuous on a subset $A$ of $\mathbb R$, then $f+g$ is uniformly continuous on $A$.
6. Show that if $f$ and $g$ are uniformly continuous on $A\subseteq\mathbb R$ and if both are bounded on $A$, then the product $fg$ is uniformly continuous on $A$.
7. If $f(x):=x$ and $g(x):=\sin x$, show that both $f$ and $g$ are uniformly continuous on $\mathbb R$, but that their product $fg$ is not uniformly continuous on $\mathbb R$.
8. Prove that if $f$ and $g$ are uniformly continuous on $\mathbb R$, then the composite function $f\circ g$ is uniformly continuous on $\mathbb R$.
9. If $f$ is uniformly continuous on $A\subseteq\mathbb R$ and if $|f(x)|\ge k>0$ for all $x\in A$, show that $1/f$ is uniformly continuous on $A$.
10. Prove that if $f$ is uniformly continuous on a bounded subset $A$ of $\mathbb R$, then $f$ is bounded on $A$.
11. If $g(x):=\sqrt x$ for $x\in[0,1]$, show that there does not exist a constant $K$ such that $|g(x)|\le K|x|$ for all $x\in[0,1]$. Conclude that the uniformly continuous function $g$ is not a Lipschitz function on $[0,1]$.
12. Show that if $f$ is continuous on $[0,\infty)$ and uniformly continuous on $[a,\infty)$ for some positive constant $a$, then $f$ is uniformly continuous on $[0,\infty)$.
13. Let $A\subseteq\mathbb R$ and suppose that $f:A\to\mathbb R$ has the following property: for each $\varepsilon>0$ there exists a function $g_\varepsilon:A\to\mathbb R$ such that $g_\varepsilon$ is uniformly continuous on $A$ and $|f(x)-g_\varepsilon(x)|<\varepsilon$ for all $x\in A$. Prove that $f$ is uniformly continuous on $A$.
14. A function $f:\mathbb R\to\mathbb R$ is said to be **periodic** on $\mathbb R$ if there exists a number $p>0$ such that $f(x+p)=f(x)$ for all $x\in\mathbb R$. Prove that a continuous periodic function on $\mathbb R$ is bounded and uniformly continuous on $\mathbb R$.
15. [p.149] Let $f$ and $g$ be Lipschitz functions on $A$.
   (a) Show that the sum $f+g$ is also a Lipschitz function on $A$.
   (b) Show that if $f$ and $g$ are bounded on $A$, then the product $fg$ is a Lipschitz function on $A$.
   (c) Give an example of a Lipschitz function $f$ on $[0,\infty)$ such that its square $f^2$ is not a Lipschitz function.
16. [p.149] A function $f$ is called **absolutely continuous** on an interval $I$ if for any $\varepsilon>0$ there exists $\delta>0$ such that for any pairwise disjoint subintervals $[x_k,y_k]$, $k=1,2,\dots,n$, of $I$ such that $\sum_{k=1}^n|x_k-y_k|<\delta$ we have $\sum_{k=1}^n|f(x_k)-f(y_k)|<\varepsilon$. Show that if $f$ satisfies a Lipschitz condition on $I$, then $f$ is absolutely continuous on $I$.

---

## 4. Figures (for redrawing)

| Fig. | Printed p. | Description |
|---|---|---|
| 5.1.1 | 125 | Two panels of a curve $y=f(x)$ near a point $c$. Left: a horizontal band $V_\varepsilon(f(c))$ around $f(c)$; the curve passes through the band. Right: a vertical strip $V_\delta(c)$ around $c$ within which the curve stays in the band. Caption: "Given $V_\varepsilon(f(c))$, a neighborhood $V_\delta(c)$ is to be determined." |
| 5.1.2 | 127 | Thomae's function $h$ on $[0,2]$: dots at rational $x=m/n$ with height $1/n$ (and $h(0)=1$ at the left), with a vertical scatter of points near $0$ that rapidly thin out; zero on irrationals (not drawn). |
| 5.1.3 | 129 | Graph of $f(x)=x\sin(1/x)$ for $x\ne0$: oscillations squeezed between the lines $y=\pm x$, damping to $0$ at the origin. |
| 5.3.1 | 136 | Graph of $f(x)=1/x$ for $x>0$: decreasing hyperbola branch in the first quadrant, with marks at $x=1,2$. |
| 5.3.2 | 136 | Graph of $g(x)=x^2$ for $|x|\le1$: parabola on $[-1,1]$ with marks at $x=\pm1$. |
| 5.3.3 | 139 | Graph of a continuous $f$ on $[a,b]$ with its absolute minimum $m$ at $x_*$ and maximum $M$ at $x^*$; dashed lines to $f(a)$, $f(b)$ on the vertical axis; illustrates $f(I)=[m,M]$ (not $[f(a),f(b)]$). |
| 5.3.4 | 139 | Bell-shaped graph of $f(x)=1/(x^2+1)$ for $x\in\mathbb R$, maximum $1$ at $x=0$, value $\tfrac12$ marked at $x=\pm1$. |
| 5.4.1 | 142 | Graph of $g(x)=1/x$, $x>0$, with a $\delta$-neighborhood on the $x$-axis about $\tfrac12$ corresponding to $V_\varepsilon(\tfrac12)$ on the $y$-axis. |
| 5.4.2 | 142 | Graph of $g(x)=1/x$, $x>0$, with $V_\varepsilon(2)$ about $2$ on the $y$-axis and the corresponding (smaller) $\delta$-neighborhood about $\tfrac12$. |
| 5.4.3 | 146 | Graph of the step function $y=s(x)$ on $[-2,4]$ from Definition 5.4.9 (horizontal segments at heights $0,1,\tfrac12,3,-2,2$ on the intervals listed there, with open/closed endpoints). |
| 5.4.4 | 146 | Graph of $f$ on $[a,b]$ with the band $y=f(x)\pm\varepsilon$ and the step function $y=s_\varepsilon(x)$ (horizontal segments) lying within the band. |
| 5.4.5 | 147 | Graph of $f$ with the band $y=f(x)\pm\varepsilon$ and the continuous piecewise linear $y=g_\varepsilon(x)$ lying within the band. |

---

## 5. Exercise classification

★ = looks like a classic exam question (standard proof or computation tested in courses on this material).

**Section 5.1** (p.129): ★ 1 (sequential criterion), ★ 2 (discontinuity criterion), 3, ★ 4 (greatest integer function continuity), ★ 5 (removable discontinuity of $(x^2+x-6)/(x-2)$), 6, ★ 7 (local positivity), ★ 8 (zero set closed), 9, 10, 11 (Lipschitz implies continuous), ★ 12 (rationals vanish), ★ 13 (continuity of piecewise $g$).

**Section 5.3** (p.140-141): ★ 1 (positive continuous function bounded below), 2, ★ 3 (sign-change/half-value argument), ★ 4 (odd degree polynomial has a root), ★ 5 (quartic roots via IVT), ★ 6 (equator antipodal temperature), ★ 7 (x = cos x by bisection), ★ 8 (bisection for $2\ln x+\sqrt x-2$), 9, 10 (bisection step count), ★ 11 (alternative proof via sup W), ★ 12 (max of sup{x², cos x}), ★ 13 (zero at infinity: max or min), 14, 15, 16, 17, ★ 18 (bounded on neighborhoods implies bounded), 19.

**Section 5.4** (p.148-149): ★ 1, ★ 2, ★ 3 (nonuniform continuity via criterion), 4, ★ 5 (sum), ★ 6 (product with bounded factors), 7, ★ 8 (composition), ★ 9 (reciprocal), ★ 10 (uniform continuity on bounded set implies bounded), ★ 11 (sqrt not Lipschitz), 12, ★ 13, ★ 14 (periodic continuous functions), 15, 16.

---

## 6. Counts (for the summary)

- Definitions: 8 (5.1.1, 5.1.5, 5.3.1, 5.3.3, 5.4.1, 5.4.4, 5.4.9, 5.4.12)
- Theorems (including the Criteria 5.4.2 and the Sequential/Discontinuity criteria): 18 (5.1.2, 5.1.3, 5.1.4, 5.3.2, 5.3.4, 5.3.5, 5.3.7, 5.3.9, 5.3.10, 5.4.2, 5.4.3, 5.4.5, 5.4.7, 5.4.8, 5.4.10, 5.4.13, 5.4.14; 5.4.14 is statement only)
  - Note: 5.1.2, 5.1.3, 5.1.4 have no proof in the book (left to reader); 5.4.2 proof also left to reader.
- Corollaries: 2 (5.3.8, 5.4.11)
- Remarks: 5 sub-items (5.1.2 Remarks (1),(2); 5.1.7 (a),(b); 5.4.12 remark; plus the unnumbered geometric Remark after Def 5.4.4)
- Numbered Examples: 13 (5.1.6 (a)-(h) = 8; 5.1.8 (a),(b) = 2; 5.4.6 (a)-(c) = 3); Example 5.3.6 skipped per scope. Plus inline examples in 5.3.1, 5.3.3 text, and the 5.4 discussion.
- Figures: 13 (5.1.1, 5.1.2, 5.1.3, 5.3.1, 5.3.2, 5.3.3, 5.3.4, 5.4.1-5.4.5)
- Exercises: 13 (5.1) + 19 (5.3) + 16 (5.4) = 48
