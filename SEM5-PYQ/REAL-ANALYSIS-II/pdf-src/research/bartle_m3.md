# Module 3: The Riemann Integral (Bartle & Sherbert, *Introduction to Real Analysis*, 4e)

**Source:** `/tmp/claude-1000/-home-ihjas-Documents/39e3ad74-2e5a-51dc-ad55-2e25977cbac4/scratchpad/ra2/bartle.pdf`, PDF pp. 214-239 = printed pp. 199-224 (offset +15, verified on p. 199 = PDF 214 and p. 224 = PDF 239).
**Scope:** Sections 7.1, 7.2, 7.3 only (7.4 Darboux and 7.5 Approximate Integration begin at printed p. 225 and are excluded).

**Conventions.** Page numbers are printed-book pages. Statements are transcribed from the rendered page images (100 dpi, with 200 dpi crops for the exercises of 7.3) and checked against the text layer; where the book's OCR was unclear, the transcription follows the rendered image. Proof outlines are step-by-step summaries of the book's arguments; nothing is added. Items the book leaves unproved are marked "no proof in book". The ★ marker is a judgement call on which exercises look like classic exam-style items, not a marking from the book.

---

## 0. Results from earlier chapters cited in this module

| Ref | Printed p. | Statement (one line, as used here) |
|---|---|---|
| 3.5.5 | Ch. 3 | Cauchy Convergence Criterion: a sequence of real numbers converges iff it is a Cauchy sequence. (Used in the proof of 7.2.1.) |
| 5.1.4 | Ch. 5 | Discontinuity Criterion: $f$ is discontinuous at $c$ iff some $(x_n)\to c$ in $A$ has $(f(x_n))\not\to f(c)$. (Not cited in the module text itself.) |
| 5.1.6(g), 5.1.6(h) | Ch. 5 | Dirichlet function $f(x)=1$ on rationals, $0$ on irrationals (5.1.6(g)); Thomae's function $h(x)=0$ irrational, $h(0)=1$, $h(x)=1/n$ for $x=m/n$ in lowest terms, $h$ is continuous at irrationals and discontinuous at rationals on $[0,1]$ (5.1.6(h)). |
| 5.3.2 | Ch. 5 | Boundedness Theorem: a function continuous on a closed bounded interval $I$ is bounded on $I$. |
| 5.3.4 | Ch. 5 | Maximum-Minimum Theorem: a function continuous on $I=[a,b]$ attains an absolute maximum and an absolute minimum on $I$. (Used in the proof of 7.2.7.) |
| 5.4.1 | Ch. 5 | Definition of uniform continuity on $A$. |
| 5.4.3 | Ch. 5 | Uniform Continuity Theorem: a function continuous on a closed bounded interval $I$ is uniformly continuous on $I$. |
| 5.4.4 | Ch. 5 | Definition: $f:A\to\mathbb{R}$ is Lipschitz if there is $K>0$ with $\lvert f(x)-f(u)\rvert\le K\lvert x-u\rvert$ for all $x,u\in A$. (Used for "Lipschitz condition" in 7.3.4.) |
| 5.4.9 | Ch. 5 | Definition: $s:[a,b]\to\mathbb{R}$ is a step function if $[a,b]$ is a union of finitely many non-overlapping intervals $I_1,\dots,I_n$ on each of which $s$ is constant. |
| 5.6.4 | Ch. 5 | Theorem: a monotone function on an interval $I$ has a countable set of discontinuities. (Used in 7.3.13(b).) |
| 6.1.2 | Ch. 6 | If $f$ is differentiable at $c$ then $f$ is continuous at $c$ (the converse is false). |
| 6.1.3(c) | Ch. 6 | Product Rule: if $f,g$ are differentiable at $c$, then $fg$ is differentiable at $c$ with $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$. |
| 6.1.6 | Ch. 6 | Chain Rule: if $f$ is differentiable at $c$ and $g$ is differentiable at $f(c)$, then $g\circ f$ is differentiable at $c$ with $(g\circ f)'(c)=g'(f(c))f'(c)$. (Used in the proof of 7.3.8.) |
| 6.1.7(e) | Ch. 6 | Example used in 7.3.2(e) and 7.3.7; not restated in the module. |
| 6.2.4 | Ch. 6 | Mean Value Theorem: if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there is $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$. |
| 4.1.10(b) | Ch. 4 | Definition of the signum function $\operatorname{sgn}$ (used in 7.3.7(a)). |
| Exercise 5.1.4 | Ch. 5 | Greatest integer function $[x]$ (used in 7.3 Exercise 8). |

Forward references in this module: Section 7.4 (Darboux integral); Section 10.1 (generalised Riemann integral: Theorem 10.1.9, Example 10.1.10(a)); Definition 11.1.10 (Cantor set); Appendix C (proof of Lebesgue criterion 7.3.12); Appendix D (approximate integration).

---

# Section 7.1 Riemann Integral (printed pp. 199-207)

## 7.1 Introduction (p. 199)

*Book text (summary):* The Riemann integral is defined as a limit of Riemann sums as the norm of partitions tends to 0. The definition extends to complex-valued and $\mathbb{R}^n$-valued functions. Section 7.2 gives integrability of step, continuous and monotone functions and exhibits non-integrable functions. The Fundamental Theorem of Calculus is the main result of Section 7.3, together with the Lebesgue Criterion (proof in Appendix C). Section 7.4 gives the Darboux approach; Section 7.5 approximate integration (proofs in Appendix D).

## Partitions and Tagged Partitions (pp. 199-200)

**Partition (text, p. 199).** If $I:=[a,b]$ is a closed bounded interval in $\mathbb{R}$, a **partition** of $I$ is a finite, ordered set $P:=(x_0,x_1,\dots,x_{n-1},x_n)$ of points in $I$ such that
$$a=x_0<x_1<\cdots<x_{n-1}<x_n=b.$$
The points of $P$ divide $I$ into non-overlapping subintervals $I_1:=[x_0,x_1],\ I_2:=[x_1,x_2],\dots,\ I_n:=[x_{n-1},x_n]$.

**Figure 7.1.1 (p. 199): A partition of $[a,b]$.** A horizontal number line with the segment $[a,b]$; tick marks and dots at $a=x_0$, $x_1$, $x_2$, $x_3$, $\dots$, $x_{n-1}$, $x_n=b$ (the last two labelled), the points spaced unevenly with a gap between $x_{n-1}$ and $x_n$; the segment is thereby cut into the subintervals between consecutive points.

**Norm (text, p. 200, eq. (1)).** The norm (mesh) of $P$ is
$$\lVert P\rVert := \max\{x_1-x_0,\ x_2-x_1,\dots,\ x_n-x_{n-1}\}.$$
Norm is the length of the largest subinterval; many partitions share a norm, so the partition is not a function of the norm.

**Tags and tagged partitions (text, p. 200).** If $t_i\in I_i=[x_{i-1},x_i]$ is chosen for $i=1,\dots,n$, the $t_i$ are **tags**, and
$$\dot P:=\{([x_{i-1},x_i],t_i)\}_{i=1}^n$$
is a **tagged partition** of $I$ (the dot over $P$ indicates tags were chosen). Tags may be chosen arbitrarily (left endpoints, right endpoints, midpoints, ...). An endpoint can serve as a tag for two consecutive subintervals. Each partition has infinitely many taggings. The norm of a tagged partition is defined as for an ordinary partition and does not depend on the tags.

**Figure 7.1.2 (p. 200): A tagged partition of $[a,b]$.** Number line from $a=x_0$ to $x_n=b$ with points $x_1,x_2,x_3,\dots,x_{n-1}$ marked. Above it, tags $t_1,t_2,t_3,\dots,t_n$ are marked as arrows/points, one inside each subinterval (each $t_i$ placed between $x_{i-1}$ and $x_i$). The tags are drawn as small dots/arrows above the axis.

**Riemann sum (text, p. 200, eq. (2)).** For $f:[a,b]\to\mathbb{R}$ and tagged partition $\dot P$,
$$S(f;\dot P):=\sum_{i=1}^n f(t_i)(x_i-x_{i-1}).$$
The same notation is used when $\dot P$ denotes a subset of a partition.

**Figure 7.1.3 (p. 200): A Riemann sum.** A positive curve $y=f(x)$ over $[a,b]$; $n$ adjacent rectangles with bases $I_i=[x_{i-1},x_i]$ and heights $f(t_i)$ (tags $t_1,\dots,t_6$ marked on the axis, $x_0,\dots,x_6$ marked), each rectangle's top at height $f(t_i)$ sitting on the curve at its tag. The sum of the rectangle areas is $S(f;\dot P)$.

**Book text, p. 200.** If $f$ is positive, the Riemann sum (2) is the sum of areas of $n$ rectangles with bases $I_i$ and heights $f(t_i)$ (Figure 7.1.3).

## Definition of the Riemann Integral (pp. 201-202)

**Definition 7.1.1 (p. 201).** A function $f:[a,b]\to\mathbb{R}$ is said to be **Riemann integrable** on $[a,b]$ if there exists a number $L\in\mathbb{R}$ such that for every $\varepsilon>0$ there exists $\delta_\varepsilon>0$ such that if $\dot P$ is any tagged partition of $[a,b]$ with $\lVert P\rVert<\delta_\varepsilon$, then
$$\lvert S(f;\dot P)-L\rvert<\varepsilon.$$
The set of all Riemann integrable functions on $[a,b]$ is denoted by $\mathcal{R}[a,b]$.

**Remark (p. 201).** It is sometimes said that the integral $L$ is "the limit" of the Riemann sums $S(f;\dot P)$ as $\lVert P\rVert\to 0$. However, since $S(f;\dot P)$ is not a function of $\lVert P\rVert$, this limit is not of the type studied before.

**Notation (p. 201).** The value $L$ is denoted $L=\int_a^b f$ or $\int_a^b f(x)\,dx$; any letter other than $x$ may be used if no ambiguity results.

**Theorem 7.1.2 (Uniqueness, p. 201).** If $f\in\mathcal{R}[a,b]$, then the value of the integral is uniquely determined.

*Proof (book, p. 201).*
1. Suppose $L'$ and $L''$ both satisfy Definition 7.1.1; fix $\varepsilon>0$.
2. Choose $\delta'_{\varepsilon/2}>0$ such that every tagged partition $\dot P_1$ with $\lVert P_1\rVert<\delta'_{\varepsilon/2}$ satisfies $\lvert S(f;\dot P_1)-L'\rvert<\varepsilon/2$.
3. Choose $\delta''_{\varepsilon/2}>0$ such that every tagged partition $\dot P_2$ with $\lVert P_2\rVert<\delta''_{\varepsilon/2}$ satisfies $\lvert S(f;\dot P_2)-L''\rvert<\varepsilon/2$.
4. Put $\delta_\varepsilon:=\min\{\delta'_{\varepsilon/2},\delta''_{\varepsilon/2}\}>0$ and let $\dot P$ be a tagged partition with $\lVert P\rVert<\delta_\varepsilon$. Then both inequalities hold for $\dot P$.
5. By the Triangle Inequality, $\lvert L'-L''\rvert\le\lvert L'-S(f;\dot P)\rvert+\lvert S(f;\dot P)-L''\rvert<\varepsilon/2+\varepsilon/2=\varepsilon$.
6. Since $\varepsilon>0$ is arbitrary, $L'=L''$. $\blacksquare$

**Theorem 7.1.3 (p. 201).** If $g$ is Riemann integrable on $[a,b]$ and if $f(x)=g(x)$ except for a finite number of points in $[a,b]$, then $f$ is Riemann integrable and $\int_a^b f=\int_a^b g$.

*Proof (book, pp. 201-202).*
1. It suffices to prove the case of one exceptional point; the finite case follows by standard induction (left to the reader).
2. Let $c$ be the exceptional point, $L:=\int_a^b g$, and assume $f(x)=g(x)$ for all $x\neq c$.
3. For any tagged partition $\dot P$, the sums $S(f;\dot P)$ and $S(g;\dot P)$ have identical terms except at most two (when $c$ is a partition point). Hence
$$\lvert S(f;\dot P)-S(g;\dot P)\rvert=\Big\lvert\sum(f(x_i)-g(x_i))(x_i-x_{i-1})\Big\rvert\le 2\big(\lvert g(c)\rvert+\lvert f(c)\rvert\big)\lVert P\rVert.$$
4. Given $\varepsilon>0$, choose $\delta_1>0$ with $\delta_1<\varepsilon/(4(\lvert f(c)\rvert+\lvert g(c)\rvert))$, and $\delta_2>0$ such that $\lVert P\rVert<\delta_2$ implies $\lvert S(g;\dot P)-L\rvert<\varepsilon/2$.
5. Let $\delta:=\min\{\delta_1,\delta_2\}$. If $\lVert P\rVert<\delta$, then $\lvert S(f;\dot P)-L\rvert\le\lvert S(f;\dot P)-S(g;\dot P)\rvert+\lvert S(g;\dot P)-L\rvert<\varepsilon/2+\varepsilon/2=\varepsilon$.
6. Hence $f$ is integrable with integral $L$. $\blacksquare$

## Some Examples (pp. 202-204)

*Book text (p. 202):* To show $f\in\mathcal{R}[a,b]$ directly one must know the value $L$ and construct $\delta_\varepsilon$; in practice one uses later theorems.

**Example 7.1.4(a) (p. 202): Constant functions.** Every constant function on $[a,b]$ is in $\mathcal{R}[a,b]$.

*Solution (book).* Let $f(x):=k$ for all $x\in[a,b]$. For any tagged partition $\dot P=\{([x_{i-1},x_i],t_i)\}_{i=1}^n$,
$$S(f;\dot P)=\sum_{i=1}^n k(x_i-x_{i-1})=k(b-a).$$
Thus for any $\varepsilon>0$ choose $\delta_\varepsilon:=1$; if $\lVert P\rVert<\delta_\varepsilon$ then $\lvert S(f;\dot P)-k(b-a)\rvert=0<\varepsilon$. Hence $f\in\mathcal{R}[a,b]$ and $\int_a^b k=k(b-a)$.

**Example 7.1.4(b) (pp. 202-203): a two-valued step function.** Let $g:[0,3]\to\mathbb{R}$, $g(x):=2$ for $0\le x\le 1$, and $g(x):=3$ for $1<x\le 3$. From the graph (Figure 7.1.4) one expects $\int_0^3 g=8$.

**Figure 7.1.4 (p. 202): Graph of $g$.** A horizontal axis marked $1,2,3$ and a vertical axis marked $1,2,3$. A horizontal segment at height $2$ runs from $x=0$ to $x=1$, with a solid dot at its left end $(0,2)$ and a solid dot at $(1,2)$ (since $g(1)=2$). A second horizontal segment at height $3$ runs over $(1,3]$, drawn with an open circle at $(1,3)$ (since $g(1)\neq 3$) and ending at $x=3$ with a solid dot at $(3,3)$ (the endpoint is included, as $g(3)=3$). The graph is the one used to guess $\int_0^3 g=8$.

*Solution (book, pp. 202-203).*
1. Let $\dot P$ be a tagged partition of $[0,3]$ with $\lVert P\rVert<\delta$. Let $\dot P_1$ be the subset of $\dot P$ with tags in $[0,1]$ (where $g=2$), and $\dot P_2$ the subset with tags in $(1,3]$ (where $g=3$). Then $S(g;\dot P)=S(g;\dot P_1)+S(g;\dot P_2)$ (eq. (3)).
2. Let $U_1$ be the union of the subintervals of $\dot P_1$. Then
$$[0,1-\delta]\subseteq U_1\subseteq[0,1+\delta]\qquad(4).$$
(Proof of the first inclusion: if $u\in[0,1-\delta]$, $u$ lies in some $I_k=[x_{k-1},x_k]$ of $P$; since $\lVert P\rVert<\delta$, $x_k\le u+\delta\le 1$, so the tag $t_k\in I_k$ satisfies $t_k\le 1$ and $I_k$ belongs to $\dot P_1$; the second inclusion is analogous.)
3. Since $g(t_k)=2$ for tags of $\dot P_1$ and the intervals in (4) have lengths $1-\delta$ and $1+\delta$: $2(1-\delta)\le S(g;\dot P_1)\le 2(1+\delta)$.
4. Similarly the union of subintervals with tags in $(1,3]$ contains $[1+\delta,3]$ (length $2-\delta$) and is contained in $[1-\delta,3]$ (length $2+\delta$), so $3(2-\delta)\le S(g;\dot P_2)\le 3(2+\delta)$.
5. Adding and using (3): $8-5\delta\le S(g;\dot P)\le 8+5\delta$, so $\lvert S(g;\dot P)-8\rvert\le 5\delta$.
6. To make this $<\varepsilon$ take $\delta_\varepsilon<\varepsilon/5$; for example $\delta_\varepsilon:=\varepsilon/10$ gives $\lvert S(g;\dot P)-8\rvert<\varepsilon$.
7. Hence $g\in\mathcal{R}[0,3]$ and $\int_0^3 g=8$. $\blacksquare$

**Example 7.1.4(c) (pp. 203-204): $h(x)=x$ on $[0,1]$.** $h\in\mathcal{R}[0,1]$ and $\int_0^1 x\,dx=\tfrac12$.

*Solution (book).* The "trick" is to compute a Riemann sum with midpoint tags.
1. Let $\{I_i\}_{i=1}^n$ be any partition of $[0,1]$ with $I_i=[x_{i-1},x_i]$, and let $q_i:=\tfrac12(x_{i-1}+x_i)$ (midpoints). Put $\dot Q:=\{(I_i,q_i)\}_{i=1}^n$. Then
$$h(q_i)(x_i-x_{i-1})=\tfrac12(x_i+x_{i-1})(x_i-x_{i-1})=\tfrac12(x_i^2-x_{i-1}^2).$$
2. The sum telescopes: $S(h;\dot Q)=\sum_{i=1}^n\tfrac12(x_i^2-x_{i-1}^2)=\tfrac12(1^2-0^2)=\tfrac12$.
3. Let $\dot P=\{(I_i,t_i)\}_{i=1}^n$ be an arbitrary tagged partition of $[0,1]$ with $\lVert P\rVert<\delta$, and let $\dot Q$ have the same partition points but midpoint tags $q_i$. Since $t_i,q_i\in I_i$, $\lvert t_i-q_i\rvert<\delta$.
4. By the Triangle Inequality,
$$\lvert S(h;\dot P)-S(h;\dot Q)\rvert\le\sum_{i=1}^n\lvert t_i-q_i\rvert(x_i-x_{i-1})<\delta\sum_{i=1}^n(x_i-x_{i-1})=\delta(x_n-x_0)=\delta.$$
5. Since $S(h;\dot Q)=\tfrac12$, $\lvert S(h;\dot P)-\tfrac12\rvert<\delta$ for every tagged partition with $\lVert P\rVert<\delta$.
6. Therefore take $\delta_\varepsilon\le\varepsilon$; with $\delta_\varepsilon:=\varepsilon$ the argument gives $h\in\mathcal{R}[0,1]$ and $\int_0^1 h=\int_0^1 x\,dx=\tfrac12$. $\blacksquare$

**Example 7.1.4(d) (p. 204): a function that is $0$ except on a sequence.** Let $G(x):=1/n$ for $x=1/n$ ($n\in\mathbb{N}$) and $G(x):=0$ elsewhere on $[0,1]$. Then $G\in\mathcal{R}[0,1]$ and $\int_0^1 G=0$.

*Solution (book).*
1. Given $\varepsilon>0$, the set $E:=\{x: G(x)\ge\varepsilon\}$ is finite (e.g. for $\varepsilon=1/10$, $E=\{1,\tfrac12,\tfrac13,\dots,\tfrac1{10}\}$). Let $n$ be the number of points in $E$; allow for a tag being counted twice if it is an endpoint, and put $\delta:=\varepsilon/(2n)$.
2. For a tagged partition $\dot P$ with $\lVert P\rVert<\delta$, let $\dot P_0$ be the subset with all tags outside $E$, and $\dot P_1$ the subset with one or more tags in $E$.
3. Since $G(x)<\varepsilon$ for each $x$ outside $E$, $G(x)\le 1$ for all $x\in[0,1]$, and $\dot P_1$ has at most $2n$ subintervals of length at most $\delta$ each, we get
$$0\le S(G;\dot P)=S(G;\dot P_0)+S(G;\dot P_1)<\varepsilon+(2n)\delta=2\varepsilon.$$
4. Since $\varepsilon>0$ is arbitrary, $G$ is Riemann integrable with integral $0$. $\blacksquare$

## Some Properties of the Integral (pp. 204-205)

**Theorem 7.1.5 (p. 204).** Suppose $f$ and $g$ are in $\mathcal{R}[a,b]$. Then:

(a) If $k\in\mathbb{R}$, the function $kf$ is in $\mathcal{R}[a,b]$ and $\int_a^b kf=k\int_a^b f$.

(b) The function $f+g$ is in $\mathcal{R}[a,b]$ and $\int_a^b(f+g)=\int_a^b f+\int_a^b g$.

(c) If $f(x)\le g(x)$ for all $x\in[a,b]$, then $\int_a^b f\le\int_a^b g$.

*Proof (book, pp. 204-205).*
1. For a tagged partition $\dot P=\{([x_{i-1},x_i],t_i)\}$, one checks directly (an easy exercise, left to reader): $S(kf;\dot P)=kS(f;\dot P)$; $S(f+g;\dot P)=S(f;\dot P)+S(g;\dot P)$; and $f\le g$ implies $S(f;\dot P)\le S(g;\dot P)$.
2. The book leaves (a) to the reader from the first equality. It proves (b) and (c) in full.
3. (b): Given $\varepsilon>0$, the argument of 7.1.2 gives $\delta_\varepsilon>0$ such that $\lVert P\rVert<\delta_\varepsilon$ implies $\lvert S(f;\dot P)-\int f\rvert<\varepsilon/2$ and $\lvert S(g;\dot P)-\int g\rvert<\varepsilon/2$ (eq. (5)). By the Triangle Inequality $\lvert S(f+g;\dot P)-(\int f+\int g)\rvert<\varepsilon$. Since $\varepsilon$ is arbitrary, $f+g\in\mathcal{R}[a,b]$ with integral the sum.
4. (c): From (5) and the Triangle Inequality, $\int f-\varepsilon/2<S(f;\dot P)$ and $S(g;\dot P)<\int g+\varepsilon/2$. With $S(f;\dot P)\le S(g;\dot P)$ we get $\int f\le\int g+\varepsilon$. Since $\varepsilon$ is arbitrary, $\int f\le\int g$. $\blacksquare$

## Boundedness Theorem (pp. 205-206)

**Theorem 7.1.6 (p. 205).** If $f\in\mathcal{R}[a,b]$, then $f$ is bounded on $[a,b]$.

*Proof (book, pp. 205-206).*
1. Suppose $f$ is unbounded and $f\in\mathcal{R}[a,b]$ with integral $L$. Choose $\delta>0$ such that $\lVert P\rVert<\delta$ implies $\lvert S(f;\dot P)-L\rvert<1$, hence $\lvert S(f;\dot P)\rvert<\lvert L\rvert+1$. (eq. (6))
2. Let $\mathcal{Q}=\{[x_{i-1},x_i]\}_{i=1}^n$ be a partition with $\lVert Q\rVert<\delta$.
3. If $f$ were bounded on each subinterval $[x_{i-1},x_i]$ (say by $M_i$), it would be bounded on $[a,b]$ by $\max\{M_1,\dots,M_n\}$; so $f$ is unbounded on some subinterval $[x_{k-1},x_k]$.
4. Tag $\mathcal{Q}$ by $t_i:=x_i$ for $i\ne k$ and choose $t_k\in[x_{k-1},x_k]$ with
$$\lvert f(t_k)(x_k-x_{k-1})\rvert>\lvert L\rvert+1+\Big\lvert\sum_{i\ne k}f(t_i)(x_i-x_{i-1})\Big\rvert.$$
5. By the Triangle Inequality (in the form $\lvert A+B\rvert\ge\lvert A\rvert-\lvert B\rvert$), $\lvert S(f;\dot Q)\rvert>\lvert L\rvert+1$, contradicting (6). $\blacksquare$

**Example 7.1.7 (p. 206): a function discontinuous at every rational that is not monotone but is Riemann integrable.** Thomae's function $h:[0,1]\to\mathbb{R}$ (as in 5.1.6(h)): $h(x):=0$ if $x\in[0,1]$ is irrational, $h(0):=1$, and $h(x):=1/n$ if $x\in[0,1]$ is the rational $m/n$ with $m,n$ having no common integer factor except $1$. By 5.1.6(h), $h$ is continuous at every irrational and discontinuous at every rational in $[0,1]$ (see Figure 5.1.2). Claim: $h\in\mathcal{R}[0,1]$ with integral $0$.

*Solution (book, p. 206).*
1. Given $\varepsilon>0$, the set $E:=\{x\in[0,1]: h(x)\ge\varepsilon/2\}$ is finite. (Book example: if $\varepsilon/2=1/5$ there are eleven such $x$, namely $E=\{0,1,\tfrac12,\tfrac13,\tfrac23,\tfrac14,\tfrac34,\tfrac15,\tfrac25,\tfrac35,\tfrac45\}$.)
2. Let $n$ be the number of points in $E$ and take $\delta:=\varepsilon/(4n)$.
3. For a tagged partition $\dot P$ with $\lVert P\rVert<\delta$, separate it into $\dot P_1$ (tags in $E$) and $\dot P_2$ (tags elsewhere). Allowing for a tag which is an endpoint of two adjacent intervals, $\dot P_1$ has at most $2n$ intervals, of total length at most $2n\delta=\varepsilon/2$.
4. For tags $t_i$ in $\dot P_1$, $0<h(t_i)\le 1$, so $S(h;\dot P_1)\le 1\cdot 2n\delta\le\varepsilon/2$.
5. For tags in $\dot P_2$, $h(t_i)<\varepsilon/2$, and the total length of the subintervals in $\dot P_2$ is at most $1$; so $S(h;\dot P_2)<(\varepsilon/2)\cdot 1$.
6. Therefore $0\le S(h;\dot P)=S(h;\dot P_1)+S(h;\dot P_2)<\varepsilon/2+\varepsilon/2=\varepsilon$.
7. Since $\varepsilon>0$ is arbitrary, $h\in\mathcal{R}[0,1]$ with integral $0$. $\blacksquare$

**Figure 5.1.2 (cross-reference, p. 206).** Graph of Thomae's function (not reproduced in this module's pages; referenced in the example).

## Exercises for Section 7.1 (printed pp. 206-207)

1. If $I:=[0,4]$, calculate the norms of the following partitions: (a) $P_1:=(0,1,2,4)$, (b) $P_2:=(0,2,3,4)$, (c) $P_3:=(0,1,1.5,2,3.4,4)$, (d) $P_4:=(0,.5,2.5,3.5,4)$.
2. If $f(x):=x^2$ for $x\in[0,4]$, calculate the following Riemann sums, where $P_i$ has the same partition points as in Exercise 1, and the tags are selected as indicated: (a) $P_1$ with tags at left endpoints; (b) $P_1$ with tags at right endpoints; (c) $P_2$ with tags at left endpoints; (d) $P_2$ with tags at right endpoints.
3. ★ Show that $f:[a,b]\to\mathbb{R}$ is Riemann integrable on $[a,b]$ if and only if there exists $L\in\mathbb{R}$ such that for every $\varepsilon>0$ there exists $\delta_\varepsilon>0$ such that if $\dot P$ is any tagged partition with norm $\lVert P\rVert\le\delta_\varepsilon$, then $\lvert S(f;\dot P)-L\rvert\le\varepsilon$.
4. Let $\dot P$ be a tagged partition of $[0,3]$. (a) Show that the union $U_1$ of all subintervals in $\dot P$ with tags in $[0,1]$ satisfies $[0,1-\lVert P\rVert]\subseteq U_1\subseteq[0,1+\lVert P\rVert]$. (b) Show that the union $U_2$ of all subintervals with tags in $[1,2]$ satisfies $[1+\lVert P\rVert,\,2-\lVert P\rVert]\subseteq U_2\subseteq[1-\lVert P\rVert,\,2+\lVert P\rVert]$.
5. Let $\dot P:=\{(I_i,t_i)\}_{i=1}^n$ be a tagged partition of $[a,b]$ and let $c_1<c_2$. (a) If $u$ belongs to a subinterval $I_i$ whose tag satisfies $c_1\le t_i\le c_2$, show that $c_1-\lVert P\rVert\le u\le c_2+\lVert P\rVert$. (b) If $v\in[a,b]$ satisfies $c_1+\lVert P\rVert\le v\le c_2-\lVert P\rVert$, then the tag $t_i$ of any subinterval $I_i$ containing $v$ satisfies $t_i\in[c_1,c_2]$.
6. (a) Let $f(x):=2$ if $0\le x<1$ and $f(x):=1$ if $1\le x\le 2$. Show $f\in\mathcal{R}[0,2]$ and evaluate its integral. (b) Let $h(x):=2$ if $0\le x<1$, $h(1):=3$, and $h(x):=1$ if $1<x\le 2$. Show $h\in\mathcal{R}[0,2]$ and evaluate its integral.
7. Use Mathematical Induction and Theorem 7.1.5 to show that if $f_1,\dots,f_n\in\mathcal{R}[a,b]$ and $k_1,\dots,k_n\in\mathbb{R}$, then $f=\sum_{i=1}^n k_if_i$ belongs to $\mathcal{R}[a,b]$ and $\int_a^b f=\sum_{i=1}^n k_i\int_a^b f_i$.
8. ★ If $f\in\mathcal{R}[a,b]$ and $\lvert f(x)\rvert\le M$ for all $x\in[a,b]$, show that $\lvert\int_a^b f\rvert\le M(b-a)$.
9. ★ If $f\in\mathcal{R}[a,b]$ and if $(\dot P_n)$ is any sequence of tagged partitions of $[a,b]$ such that $\lVert P_n\rVert\to0$, prove that $\int_a^b f=\lim_n S(f;\dot P_n)$.
10. ★ Let $g(x):=0$ if $x\in[0,1]$ is rational and $g(x):=1/x$ if $x\in[0,1]$ is irrational. Explain why $g\notin\mathcal{R}[0,1]$. However, show that there exists a sequence $(\dot P_n)$ of tagged partitions of $[a,b]$ such that $\lVert P_n\rVert\to0$ and $\lim_n S(g;\dot P_n)$ exists.
11. Suppose $f$ is bounded on $[a,b]$ and that there exist two sequences of tagged partitions $(\dot P_n)$ and $(\dot Q_n)$ of $[a,b]$ with $\lVert P_n\rVert\to0$ and $\lVert Q_n\rVert\to0$, but $\lim_n S(f;\dot P_n)\ne\lim_n S(f;\dot Q_n)$. Show that $f\notin\mathcal{R}[a,b]$.
12. ★ Consider the Dirichlet function (Example 5.1.6(g)): $f(x):=1$ for $x\in[0,1]$ rational and $f(x):=0$ for $x\in[0,1]$ irrational. Use the preceding exercise to show $f\notin\mathcal{R}[0,1]$.
13. Suppose $c\le d$ are points in $[a,b]$. If $\varphi:[a,b]\to\mathbb{R}$ satisfies $\varphi(x)=\alpha>0$ for $x\in[c,d]$ and $\varphi(x)=0$ elsewhere in $[a,b]$, prove $\varphi\in\mathcal{R}[a,b]$ and $\int_a^b\varphi=\alpha(d-c)$. [Hint: given $\varepsilon>0$ let $\delta_\varepsilon:=\varepsilon/4\alpha$ and show that if $\lVert P\rVert<\delta$ then $\alpha(d-c-2\delta)\le S(\varphi;\dot P)\le\alpha(d-c+2\delta)$.]
14. Let $0\le a<b$, $Q(x):=x^2$ for $x\in[a,b]$, and let $P:=\{[x_{i-1},x_i]\}_{i=1}^n$ be a partition of $[a,b]$. For each $i$ let $q_i$ be the positive square root of $\tfrac13(x_i^2+x_ix_{i-1}+x_{i-1}^2)$. (a) Show $0\le x_{i-1}\le q_i\le x_i$. (b) Show $Q(q_i)(x_i-x_{i-1})=\tfrac13(x_i^3-x_{i-1}^3)$. (c) If $\dot Q$ is the tagged partition with the same subintervals as $P$ and tags $q_i$, show $S(Q;\dot Q)=\tfrac13(b^3-a^3)$. (d) Use the argument in Example 7.1.4(c) to show $Q\in\mathcal{R}[a,b]$ and $\int_a^b Q=\int_a^b x^2\,dx=\tfrac13(b^3-a^3)$.
15. If $f\in\mathcal{R}[a,b]$ and $c\in\mathbb{R}$, define $g$ on $[a+c,b+c]$ by $g(y):=f(y-c)$. Prove $g\in\mathcal{R}[a+c,b+c]$ and $\int_{a+c}^{b+c}g=\int_a^b f$. ($g$ is called the $c$-translate of $f$.)


---

# Section 7.2 Riemann Integrable Functions (printed pp. 208-216)

*Book text (p. 208, summary):* The section proves the Cauchy Criterion, the Squeeze Theorem, and the Additivity Theorem, and uses them to show integrability of step functions, continuous functions and monotone functions. The Squeeze Theorem is the tool used to establish integrability by bracketing (it is the idea that Darboux later developed, Section 7.4).

## 7.2.1 Cauchy Criterion (p. 208)

**Theorem 7.2.1 (Cauchy Criterion).** A function $f:[a,b]\to\mathbb{R}$ belongs to $\mathcal{R}[a,b]$ if and only if for every $\varepsilon>0$ there exists $\eta_\varepsilon>0$ such that if $\dot P$ and $\dot Q$ are any tagged partitions of $[a,b]$ with $\lVert P\rVert<\eta_\varepsilon$ and $\lVert Q\rVert<\eta_\varepsilon$, then
$$\lvert S(f;\dot P)-S(f;\dot Q)\rvert<\varepsilon.$$

*Proof (book, p. 208).*

(⇒) 
1. Let $f\in\mathcal{R}[a,b]$ with integral $L$. Put $\eta_\varepsilon:=\delta_{\varepsilon/2}>0$ (from Definition 7.1.1) so that $\lVert P\rVert<\eta_\varepsilon$ and $\lVert Q\rVert<\eta_\varepsilon$ imply $\lvert S(f;\dot P)-L\rvert<\varepsilon/2$ and $\lvert S(f;\dot Q)-L\rvert<\varepsilon/2$.
2. Then $\lvert S(f;\dot P)-S(f;\dot Q)\rvert\le\lvert S(f;\dot P)-L+L-S(f;\dot Q)\rvert<\varepsilon/2+\varepsilon/2=\varepsilon$.

(⇐)
3. For each $n\in\mathbb{N}$ let $\delta_n>0$ be such that tagged partitions $\dot P,\dot Q$ with norms $<\delta_n$ satisfy $\lvert S(f;\dot P)-S(f;\dot Q)\rvert<1/n$ (the hypothesis with $\varepsilon=1/n$).
4. Evidently we may assume $\delta_n\ge\delta_{n+1}$ (otherwise replace $\delta_n$ by $\min\{\delta_1,\dots,\delta_n\}$).
5. For each $n$ choose a tagged partition $\dot P_n$ with $\lVert P_n\rVert<\delta_n$. For $m>n$, both $\dot P_m$ and $\dot P_n$ have norm $<\delta_n$, so $\lvert S(f;\dot P_m)-S(f;\dot P_n)\rvert<1/n$ (eq. (1)).
6. Hence $(S(f;\dot P_m))_{m=1}^\infty$ is a Cauchy sequence in $\mathbb{R}$; by Theorem 3.5.5 it converges. Let $A:=\lim_m S(f;\dot P_m)$.
7. Letting $m\to\infty$ in (1) gives $\lvert S(f;\dot P_n)-A\rvert\le 1/n$ for all $n$.
8. To see that $A$ is the integral: given $\varepsilon>0$, choose $K\in\mathbb{N}$ with $K>2/\varepsilon$. If $\dot Q$ is any tagged partition with $\lVert Q\rVert<\delta_K$, then
$$\lvert S(f;\dot Q)-A\rvert\le\lvert S(f;\dot Q)-S(f;\dot P_K)\rvert+\lvert S(f;\dot P_K)-A\rvert<1/K+1/K<\varepsilon.$$
9. Since $\varepsilon$ is arbitrary, $f\in\mathcal{R}[a,b]$ with integral $A$. $\blacksquare$

## Examples 7.2.2 (p. 209)

**Example 7.2.2(a) (Cauchy Criterion applied to 7.1.4(b)).** In Example 7.1.4(b), for $g$ as there and tagged partitions $\dot P$ with $\lVert P\rVert<\delta$: $8-5\delta\le S(g;\dot P)\le 8+5\delta$. So for $\lVert Q\rVert<\delta$ too, $8-5\delta\le S(g;\dot Q)\le 8+5\delta$, and subtracting,
$$\lvert S(g;\dot P)-S(g;\dot Q)\rvert\le 10\delta.$$
To make this $<\varepsilon$ one uses the Cauchy Criterion with $\eta_\varepsilon:=\varepsilon/20$ (details left to reader in the book).

**Example 7.2.2(b) (Dirichlet function is not integrable).** The Dirichlet function $f$ on $[0,1]$ ($f=1$ on rationals, $f=0$ on irrationals; Example 5.1.6(g)) is not Riemann integrable. Using the Cauchy Criterion: there is $\varepsilon_0>0$ (namely $\varepsilon_0:=\tfrac12$) such that for every $\eta>0$ there are tagged partitions $\dot P,\dot Q$ with $\lVert P\rVert<\eta$, $\lVert Q\rVert<\eta$ and $\lvert S(f;\dot P)-S(f;\dot Q)\rvert\ge\varepsilon_0$.
*Solution (book).* If all tags of $\dot P$ are rational, $S(f;\dot P)=1$; if all tags of $\dot Q$ are irrational, $S(f;\dot Q)=0$. Such tagged partitions exist with arbitrarily small norm, so the Cauchy Criterion fails and $f\notin\mathcal{R}[0,1]$. $\blacksquare$

## The Squeeze Theorem (pp. 209-210)

*Book text (p. 209):* Two difficulties with the definition: there are infinitely many tag choices for each partition, and infinitely many partitions with norm less than any given amount. The Squeeze Theorem gives integrability by bracketing $f$ between integrable functions with close integrals.

**Theorem 7.2.3 (Squeeze Theorem).** Let $f:[a,b]\to\mathbb{R}$. Then $f\in\mathcal{R}[a,b]$ if and only if for every $\varepsilon>0$ there exist functions $\alpha_\varepsilon$ and $\omega_\varepsilon$ in $\mathcal{R}[a,b]$ with
$$\alpha_\varepsilon(x)\le f(x)\le\omega_\varepsilon(x)\quad\text{for all }x\in[a,b]\tag{2}$$
and such that
$$\int_a^b(\omega_\varepsilon-\alpha_\varepsilon)<\varepsilon.\tag{3}$$

*Proof (book, pp. 209-210).*

(⇒)
1. Take $\alpha_\varepsilon=\omega_\varepsilon=f$ for all $\varepsilon>0$.

(⇐)
2. Let $\varepsilon>0$. Since $\alpha_\varepsilon,\omega_\varepsilon\in\mathcal{R}[a,b]$, there is $\delta_\varepsilon>0$ such that tagged partitions $\dot P$ with $\lVert P\rVert<\delta_\varepsilon$ satisfy $\lvert S(\alpha_\varepsilon;\dot P)-\int_a^b\alpha_\varepsilon\rvert<\varepsilon$ and $\lvert S(\omega_\varepsilon;\dot P)-\int_a^b\omega_\varepsilon\rvert<\varepsilon$.
3. From these inequalities and (2), $S(\alpha_\varepsilon;\dot P)\le S(f;\dot P)\le S(\omega_\varepsilon;\dot P)$, so
$$\int_a^b\alpha_\varepsilon-\varepsilon<S(f;\dot P)<\int_a^b\omega_\varepsilon+\varepsilon.$$
4. The same holds for any tagged partition $\dot Q$ with $\lVert Q\rVert<\delta_\varepsilon$. Subtracting the two inequalities and using (3),
$$\lvert S(f;\dot P)-S(f;\dot Q)\rvert<\int_a^b(\omega_\varepsilon-\alpha_\varepsilon)+2\varepsilon<3\varepsilon.$$
5. Since $\varepsilon>0$ is arbitrary, the Cauchy Criterion (Theorem 7.2.1) gives $f\in\mathcal{R}[a,b]$. $\blacksquare$

**Lemma 7.2.4 (p. 210).** If $J$ is a subinterval of $[a,b]$ having endpoints $c<d$, and if $\varphi_J(x):=1$ for $x\in J$ and $\varphi_J(x):=0$ elsewhere on $[a,b]$, then $\varphi_J\in\mathcal{R}[a,b]$ and $\int_a^b\varphi_J=d-c$.

*Proof (book, p. 210).*
1. If $J=[c,d]$ (with $c\le d$), this is Exercise 7.1.13; there one may take $\delta_\varepsilon:=\varepsilon/4$.
2. The other three subintervals $J$ with endpoints $c,d$ (namely $(c,d)$, $[c,d)$, $(c,d]$) differ from $[c,d]$ only at the endpoints, i.e. at at most two points. By Theorem 7.1.3 the integrability and the value of the integral are unchanged.
3. Hence all four functions $\varphi_J$ are integrable with integral $d-c$. $\blacksquare$

*Book remark (p. 210):* Any step function is Riemann integrable (Theorem 7.2.5).

**Theorem 7.2.5 (p. 210).** If $\varphi:[a,b]\to\mathbb{R}$ is a step function, then $\varphi\in\mathcal{R}[a,b]$.

*Book remark.* A step function (Definition 5.4.9) takes finitely many values on non-overlapping intervals; Figures 5.4.3 and 7.1.4 illustrate step functions.

*Proof (book, pp. 210-211).*
1. Step functions of the type in Lemma 7.2.4 are called **elementary step functions**.
2. Exercise 5 shows that an arbitrary step function $\varphi$ can be written as a linear combination of elementary step functions:
$$\varphi=\sum_{j=1}^m k_j\varphi_{J_j},\tag{4}$$
where $J_j$ has endpoints $c_j<d_j$.
3. By Lemma 7.2.4 and Theorem 7.1.5(a),(b), $\varphi\in\mathcal{R}[a,b]$, and
$$\int_a^b\varphi=\sum_{j=1}^m k_j(d_j-c_j).\tag{5}$$
$\blacksquare$

**Examples 7.2.6 (p. 211).**

**Example 7.2.6(a) (step-function computation of 7.1.4(b)).** The function $g$ of Example 7.1.4(b) is $g(x)=2$ for $0\le x\le 1$ and $g(x)=3$ for $1<x\le3$. Since $g$ is a step function, $g\in\mathcal{R}[0,3]$ and
$$\int_0^3 g=2\cdot(1-0)+3\cdot(3-1)=2+6=8.$$

**Example 7.2.6(b) (squeeze applied to $h(x)=x$).** Let $h(x):=x$ on $[0,1]$ and $P_n:=(0,\tfrac1n,\tfrac2n,\dots,\tfrac{n-2}{n},\tfrac{n-1}{n},1)$ (the book's partition with $n$ equal subintervals).
*Solution (book).*
1. Define the step functions $\alpha_n,\omega_n$ on the disjoint subintervals $[0,\tfrac1n),[\tfrac1n,\tfrac2n),\dots,[\tfrac{n-2}{n},\tfrac{n-1}{n}),[\tfrac{n-1}{n},1]$ as follows:
   - $\alpha_n(x):=h\big(\tfrac{k-1}{n}\big)=\tfrac{k-1}{n}$ for $x\in[\tfrac{k-1}{n},\tfrac kn)$, $k=1,\dots,n-1$, and $\alpha_n(x):=h\big(\tfrac{n-1}{n}\big)=\tfrac{n-1}{n}$ for $x\in[\tfrac{n-1}{n},1]$;
   - $\omega_n(x):=\tfrac kn$ for $x\in[\tfrac{k-1}{n},\tfrac kn)$, $k=1,\dots,n-1$, and $\omega_n(x):=1$ for $x\in[\tfrac{n-1}{n},1]$.
   (That is, $\alpha_n$ takes the minimum value of $h$ on each subinterval and $\omega_n$ the maximum; the book suggests a sketch for $n=4$.)
2. Then
$$\int_0^1\alpha_n=\frac1n\Big(0+\frac1n+\frac2n+\cdots+\frac{n-1}{n}\Big)=\frac{1}{n^2}\big(1+2+\cdots+(n-1)\big)=\frac{(n-1)n}{2n^2}=\frac12\Big(1-\frac1n\Big).$$
3. Similarly $\int_0^1\omega_n=\tfrac12\big(1+\tfrac1n\big)$.
4. Thus $\alpha_n(x)\le h(x)\le\omega_n(x)$ on $[0,1]$, and $\int_0^1(\omega_n-\alpha_n)=\tfrac1n$.
5. Given $\varepsilon>0$ choose $n>1/\varepsilon$. The Squeeze Theorem gives $h\in\mathcal{R}[0,1]$, and $\int_0^1 h=\tfrac12$. $\blacksquare$

The book then says: "We will now use the Squeeze Theorem to show that an arbitrary continuous function is Riemann integrable."

## Integrability of Continuous and Monotone Functions (p. 212)

**Theorem 7.2.7 (p. 212).** If $f:[a,b]\to\mathbb{R}$ is continuous on $[a,b]$, then $f\in\mathcal{R}[a,b]$.

*Proof (book, p. 212).*
1. By the Uniform Continuity Theorem 5.4.3, $f$ is uniformly continuous on $[a,b]$. Hence for given $\varepsilon>0$ there is $\delta_\varepsilon>0$ such that $\lvert u-v\rvert<\delta_\varepsilon$ with $u,v\in[a,b]$ implies $\lvert f(u)-f(v)\rvert<\varepsilon/(b-a)$.
2. Let $P=\{I_i\}_{i=1}^n$ be a partition of $[a,b]$ with $\lVert P\rVert<\delta_\varepsilon$.
3. By the Maximum-Minimum Theorem 5.3.4 applied on each $I_i$, choose $u_i,v_i\in I_i$ where $f$ attains its minimum and maximum on $I_i$ respectively.
4. Define step functions $\alpha_\varepsilon(x):=f(u_i)$ for $x\in[x_{i-1},x_i)$ ($i=1,\dots,n-1$) and $\alpha_\varepsilon(x):=f(u_n)$ for $x\in[x_{n-1},x_n]$; define $\omega_\varepsilon$ similarly using the $v_i$.
5. Then $\alpha_\varepsilon(x)\le f(x)\le\omega_\varepsilon(x)$ for all $x\in[a,b]$, and
$$0\le\int_a^b(\omega_\varepsilon-\alpha_\varepsilon)=\sum_{i=1}^n\big(f(v_i)-f(u_i)\big)(x_i-x_{i-1})<\sum_{i=1}^n\frac{\varepsilon}{b-a}(x_i-x_{i-1})=\varepsilon.$$
6. By the Squeeze Theorem 7.2.3, $f\in\mathcal{R}[a,b]$. $\blacksquare$

*Book remark:* monotone functions are not necessarily continuous at every point, but are still Riemann integrable.

**Theorem 7.2.8 (p. 212).** If $f:[a,b]\to\mathbb{R}$ is monotone on $[a,b]$, then $f\in\mathcal{R}[a,b]$.

*Proof (book, p. 212; the book writes the increasing case).*
1. Assume $f$ is increasing on $I=[a,b]$. Partition $I$ into $n$ equal subintervals $I_k=[x_{k-1},x_k]$, $x_k-x_{k-1}=(b-a)/n$, $k=1,\dots,n$.
2. Since $f$ is increasing, its minimum on $I_k$ is at the left endpoint $x_{k-1}$ and its maximum at the right endpoint $x_k$.
3. Define step functions $\alpha(x):=f(x_{k-1})$ and $\omega(x):=f(x_k)$ for $x\in[x_{k-1},x_k)$, $k=1,\dots,n-1$; and $\alpha(x):=f(x_{n-1})$, $\omega(x):=f(x_n)$ for $x\in[x_{n-1},x_n]$. Then $\alpha(x)\le f(x)\le\omega(x)$ on $I$.
4. Compute
$$\int_a^b\alpha=\frac{b-a}{n}\big(f(x_0)+f(x_1)+\cdots+f(x_{n-1})\big),\qquad \int_a^b\omega=\frac{b-a}{n}\big(f(x_1)+\cdots+f(x_{n-1})+f(x_n)\big).$$
5. Subtracting and cancelling, $\int_a^b(\omega-\alpha)=\frac{b-a}{n}\big(f(x_n)-f(x_0)\big)=\frac{b-a}{n}\big(f(b)-f(a)\big)$.
6. Given $\varepsilon>0$ choose $n>(b-a)(f(b)-f(a))/\varepsilon$; then $\int(\omega-\alpha)<\varepsilon$, and the Squeeze Theorem gives integrability on $I$. $\blacksquare$

(The book states the proof for increasing $f$ only.)

## The Additivity Theorem (pp. 213-215)

*Book text (p. 213):* The integral is an "additive function" of the interval; the proof is delicate and may be omitted on first reading.

**Theorem 7.2.9 (Additivity Theorem, p. 213).** Let $f:[a,b]\to\mathbb{R}$ and let $c\in(a,b)$. Then $f\in\mathcal{R}[a,b]$ if and only if its restrictions to $[a,c]$ and to $[c,b]$ are both Riemann integrable. In this case
$$\int_a^b f=\int_a^c f+\int_c^b f.\tag{6}$$

*Proof (book, pp. 213-214).*

**(⇐)**
1. Let $f_1$ and $f_2$ be the restrictions of $f$ to $[a,c]$ and $[c,b]$, with $f_1\in\mathcal{R}[a,c]$ with integral $L_1$ and $f_2\in\mathcal{R}[c,b]$ with integral $L_2$.
2. Given $\varepsilon>0$, choose $\delta'>0$ such that tagged partitions $\dot P_1$ of $[a,c]$ with $\lVert P_1\rVert<\delta'$ satisfy $\lvert S(f_1;\dot P_1)-L_1\rvert<\varepsilon/3$, and $\delta''>0$ such that tagged partitions $\dot P_2$ of $[c,b]$ with $\lVert P_2\rVert<\delta''$ satisfy $\lvert S(f_2;\dot P_2)-L_2\rvert<\varepsilon/3$.
3. Let $M$ bound $\lvert f\rvert$, and set $\delta_\varepsilon:=\min\{\delta',\delta'',\varepsilon/(6M)\}$ (the book's bound with $\varepsilon/6M$). Let $\dot Q$ be a tagged partition of $[a,b]$ with $\lVert Q\rVert<\delta_\varepsilon$. The aim is
$$\lvert S(f;\dot Q)-(L_1+L_2)\rvert<\varepsilon.\tag{7}$$
4. *Case (i): $c$ is a partition point of $\dot Q$.* Split $\dot Q$ into $\dot Q_1$ (partition of $[a,c]$) and $\dot Q_2$ (of $[c,b]$). Then $S(f;\dot Q)=S(f;\dot Q_1)+S(f;\dot Q_2)$ with $\lVert Q_1\rVert,\lVert Q_2\rVert<\delta'$, $\delta''$ respectively, so (7) follows from the estimates in step 2.
5. *Case (ii): $c$ is not a partition point of $\dot Q$.* Let $c\in(x_{k-1},x_k)$ for some $k$, and let $\dot Q=\{(I_i,t_i)\}_{i=1}^m$. Define
$$\dot Q_1:=\{(I_1,t_1),\dots,(I_{k-1},t_{k-1}),([x_{k-1},c],c)\},\qquad \dot Q_2:=\{([c,x_k],c),(I_{k+1},t_{k+1}),\dots,(I_m,t_m)\}.$$
6. Then $S(f;\dot Q)-S(f;\dot Q_1)-S(f;\dot Q_2)=\big(f(t_k)-f(c)\big)(x_k-x_{k-1})$, so $\big\lvert S(f;\dot Q)-S(f;\dot Q_1)-S(f;\dot Q_2)\big\rvert\le 2M(x_k-x_{k-1})<\varepsilon/3$ (since $\lVert Q\rVert<\delta_\varepsilon$ and $\delta_\varepsilon\le\varepsilon/(6M)$).
7. Since $\lVert Q_1\rVert,\lVert Q_2\rVert<\delta'$ resp. $\delta''$, step 2 gives $\lvert S(f;\dot Q_1)-L_1\rvert<\varepsilon/3$ and $\lvert S(f;\dot Q_2)-L_2\rvert<\varepsilon/3$; combining gives (7).
8. Hence $f\in\mathcal{R}[a,b]$. The equality (6) now follows from the first part of the theorem.

**(⇒)**
9. Suppose $f\in\mathcal{R}[a,b]$ and let $\varepsilon>0$; let $\eta_\varepsilon>0$ satisfy the Cauchy Criterion 7.2.1. Let $f_1=f|_{[a,c]}$ and let $\dot P_1,\dot Q_1$ be tagged partitions of $[a,c]$ with norms $<\eta_\varepsilon$.
10. Adding the same additional partition points and tags in $[c,b]$ to $\dot P_1$ and to $\dot Q_1$ extends them to tagged partitions $\dot P$, $\dot Q$ of $[a,b]$ with norms $<\eta_\varepsilon$. Using the same additional points and tags in $[c,b]$ for both,
$$S(f_1;\dot P_1)-S(f_1;\dot Q_1)=S(f;\dot P)-S(f;\dot Q),$$
so $\lvert S(f_1;\dot P_1)-S(f_1;\dot Q_1)\rvert<\varepsilon$. By the Cauchy Criterion, $f_1\in\mathcal{R}[a,c]$. The same argument shows $f_2\in\mathcal{R}[c,b]$.
11. Equality (6) follows from the first part of the theorem. $\blacksquare$

**Corollary 7.2.10 (p. 214).** If $f\in\mathcal{R}[a,b]$ and if $[c,d]\subseteq[a,b]$, then the restriction of $f$ to $[c,d]$ is in $\mathcal{R}[c,d]$.

*Proof (book, p. 214).* Since $f\in\mathcal{R}[a,b]$ and $c\in[a,b]$, Theorem 7.2.9 shows the restriction to $[c,b]$ is in $\mathcal{R}[c,b]$. If $d\in(c,b]$, another application of Theorem 7.2.9 shows that the restriction to $[c,d]$ is in $\mathcal{R}[c,d]$. $\blacksquare$

**Corollary 7.2.11 (p. 214).** If $f\in\mathcal{R}[a,b]$ and if $a=c_0<c_1<\cdots<c_m=b$, then the restrictions of $f$ to each subinterval $[c_{i-1},c_i]$ are Riemann integrable and
$$\int_a^b f=\sum_{i=1}^m\int_{c_{i-1}}^{c_i} f.$$
*(No separate proof is given in the book. Book text: "Until now, we have considered the Riemann integral over an interval $[a,b]$ where $a<b$. It is convenient to allow the integral defined more generally," i.e. Definition 7.2.12 follows.)*

**Definition 7.2.12 (p. 214).** If $f\in\mathcal{R}[a,b]$ and if $\alpha,\beta\in[a,b]$ with $\alpha<\beta$, we define
$$\int_\beta^\alpha f:=-\int_\alpha^\beta f\qquad\text{and}\qquad\int_\alpha^\alpha f:=0.$$

**Theorem 7.2.13 (p. 214-215).** If $f\in\mathcal{R}[a,b]$ and if $\alpha,\beta,\gamma$ are any numbers in $[a,b]$, then
$$\int_\alpha^\beta f=\int_\alpha^\gamma f+\int_\gamma^\beta f,\tag{8}$$
in the sense that the existence of any two of these integrals implies the existence of the third and the equality (8).

*Proof (book, pp. 214-215).*
1. If any two of $\alpha,\beta,\gamma$ are equal, (8) holds (by Definition 7.2.12).
2. Otherwise define $L(\alpha,\beta,\gamma):=\int_\alpha^\beta f+\int_\beta^\gamma f+\int_\gamma^\alpha f$. Then (8) holds iff $L(\alpha,\beta,\gamma)=0$.
3. The Additivity Theorem 7.2.9 gives $L(\alpha,\beta,\gamma)=0$ when $\alpha<\gamma<\beta$.
4. One checks easily that $L(\beta,\gamma,\alpha)$ and $L(\gamma,\alpha,\beta)$ both equal $L(\alpha,\beta,\gamma)$.
5. Also $L(\beta,\alpha,\gamma)$, $L(\alpha,\gamma,\beta)$ and $L(\gamma,\beta,\alpha)$ are all equal to $-L(\alpha,\beta,\gamma)$.
6. Hence $L$ vanishes for all configurations of the three points. $\blacksquare$

## Exercises for Section 7.2 (printed pp. 215-216)

1. Let $f:[a,b]\to\mathbb{R}$. Show that $f\notin\mathcal{R}[a,b]$ if and only if there exists $\varepsilon_0>0$ such that for every $n\in\mathbb{N}$ there exist tagged partitions $\dot P_n$ and $\dot Q_n$ with $\lVert P_n\rVert<1/n$ and $\lVert Q_n\rVert<1/n$ such that $\lvert S(f;\dot P_n)-S(f;\dot Q_n)\rvert\ge\varepsilon_0$. ★
2. Consider the function $h$ defined by $h(x):=x+1$ for $x\in[0,1]$ rational, and $h(x):=0$ for $x\in[0,1]$ irrational. Show that $h$ is not Riemann integrable. ★
3. Let $H(x):=k$ for $x=1/k$ ($k\in\mathbb{N}$) and $H(x):=0$ elsewhere on $[0,1]$. Use Exercise 1, or the argument in 7.2.2(b), to show that $H$ is not Riemann integrable.
4. If $\alpha(x):=-x$ and $\omega(x):=x$, and if $\alpha(x)\le f(x)\le\omega(x)$ for all $x\in[0,1]$, does it follow from the Squeeze Theorem 7.2.3 that $f\in\mathcal{R}[0,1]$?
5. If $J$ is any subinterval of $[a,b]$ and if $\varphi_J(x):=1$ for $x\in J$ and $\varphi_J(x):=0$ elsewhere on $[a,b]$, we say $\varphi_J$ is an *elementary step function* on $[a,b]$. Show that every step function is a linear combination of elementary step functions. ★
6. If $\psi:[a,b]\to\mathbb{R}$ takes on only a finite number of distinct values, is $\psi$ a step function?
7. If $S(f;\dot P)$ is any Riemann sum of $f:[a,b]\to\mathbb{R}$, show that there exists a step function $\varphi:[a,b]\to\mathbb{R}$ such that $\int_a^b\varphi=S(f;\dot P)$.
8. ★ Suppose $f$ is continuous on $[a,b]$, $f(x)\ge0$ for all $x\in[a,b]$, and $\int_a^b f=0$. Prove that $f(x)=0$ for all $x\in[a,b]$.
9. Show that the continuity hypothesis in the preceding exercise cannot be dropped.
10. ★ If $f$ and $g$ are continuous on $[a,b]$ and if $\int_a^b f=\int_a^b g$, prove that there exists $c\in[a,b]$ such that $f(c)=g(c)$.
11. ★ If $f$ is bounded by $M$ on $[a,b]$ and if the restriction of $f$ to every interval $[c,b]$ where $c\in(a,b)$ is Riemann integrable, show that $f\in\mathcal{R}[a,b]$ and that $\int_c^b f\to\int_a^b f$ as $c\to a^+$. [Hint: Let $\alpha_c(x):=-M$ and $\omega_c(x):=M$ for $x\in[a,c)$, and $\alpha_c(x):=\omega_c(x):=f(x)$ for $x\in[c,b]$. Apply the Squeeze Theorem 7.2.3 for $c$ sufficiently near $a$.]
12. ★ Show that $g(x):=\sin(1/x)$ for $x\in(0,1]$ and $g(0):=0$ belongs to $\mathcal{R}[0,1]$.
13. Give an example of a function $f:[a,b]\to\mathbb{R}$ that is in $\mathcal{R}[c,b]$ for every $c\in(a,b)$ but which is not in $\mathcal{R}[a,b]$.
14. Suppose $f:[a,b]\to\mathbb{R}$, that $a=c_0<c_1<\cdots<c_m=b$, and that the restrictions of $f$ to $[c_{i-1},c_i]$ belong to $\mathcal{R}[c_{i-1},c_i]$ for $i=1,\dots,m$. Prove that $f\in\mathcal{R}[a,b]$ and that the formula in Corollary 7.2.11 holds.
15. If $f$ is bounded and there is a finite set $E$ such that $f$ is continuous at every point of $[a,b]\setminus E$, show that $f\in\mathcal{R}[a,b]$. ★
16. If $f$ is continuous on $[a,b]$, $a<b$, show that there exists $c\in[a,b]$ such that $\int_a^b f=f(c)(b-a)$. (This is sometimes called the Mean Value Theorem for Integrals.) ★
17. If $f$ and $g$ are continuous on $[a,b]$ and $g(x)>0$ for all $x\in[a,b]$, show that there exists $c\in[a,b]$ such that $\int_a^b fg=f(c)\int_a^b g$. Show that this conclusion fails if we do not have $g(x)>0$. (Note that this result is an extension of the preceding exercise.) ★
18. Let $f$ be continuous on $[a,b]$, let $f(x)\ge0$ for $x\in[a,b]$, and let $M_n:=\big(\int_a^b f^n\big)^{1/n}$. Show that $\lim(M_n)=\sup\{f(x):x\in[a,b]\}$.
19. Suppose that $a>0$ and that $f\in\mathcal{R}[-a,a]$. (a) If $f$ is even (that is, $f(-x)=f(x)$ for all $x\in[0,a]$), show that $\int_{-a}^a f=2\int_0^a f$. (b) If $f$ is odd (that is, $f(-x)=-f(x)$ for all $x\in[0,a]$), show that $\int_{-a}^a f=0$.
20. If $f$ is continuous on $[-a,a]$, show that $\int_{-a}^a f(x^2)\,dx=2\int_0^a f(x^2)\,dx$.


---

# Section 7.3 The Fundamental Theorem (printed pp. 216-224)

*Book text (p. 216, summary):* Integrating a derivative (First Form) and differentiating an integral (Second Form) are the two parts of the Fundamental Theorem of Calculus; the two operations are inverse to one another, subject to the subtleties treated here.

## The Fundamental Theorem (First Form) (pp. 216-217)

*Book text (p. 216):* If $f=F'$ on $[a,b]$ then $F$ is an antiderivative (primitive) of $f$; if $f\in\mathcal{R}[a,b]$, then $\int_a^b f=F(b)-F(a)$. Finitely many exceptional points where $F'$ fails to exist or fails to equal $f$ can be permitted.

**Theorem 7.3.1 (Fundamental Theorem of Calculus, First Form, p. 216).** Suppose there is a finite set $E$ in $[a,b]$ and functions $f,F:[a,b]\to\mathbb{R}$ such that:
(a) $F$ is continuous on $[a,b]$;
(b) $F'(x)=f(x)$ for all $x\in[a,b]\setminus E$;
(c) $f$ belongs to $\mathcal{R}[a,b]$.
Then
$$\int_a^b f=F(b)-F(a).\tag{1}$$

*Proof (book, pp. 216-217; the book proves the case $E=\{a,b\}$ and says the general case follows by splitting $[a,b]$ into finitely many intervals, Exercise 1).*
1. Let $\varepsilon>0$. Since $f\in\mathcal{R}[a,b]$, there is $\delta_\varepsilon>0$ such that tagged partitions $\dot P$ with $\lVert P\rVert<\delta_\varepsilon$ satisfy $\lvert S(f;\dot P)-\int_a^b f\rvert<\varepsilon$ (eq. (2)).
2. Let $P=\{[x_{i-1},x_i]\}_{i=1}^n$ be a partition of $[a,b]$ with $\lVert P\rVert<\delta_\varepsilon$.
3. On each $[x_{i-1},x_i]$, the Mean Value Theorem 6.2.4 applied to $F$ gives $u_i\in(x_{i-1},x_i)$ with
$$F(x_i)-F(x_{i-1})=F'(u_i)(x_i-x_{i-1})=f(u_i)(x_i-x_{i-1})\qquad(i=1,\dots,n),$$
where $F'(u_i)=f(u_i)$ because $u_i\notin E$ (here $E=\{a,b\}$).
4. Summing and telescoping, $F(b)-F(a)=\sum_{i=1}^n f(u_i)(x_i-x_{i-1})=S(f;\dot P_u)$, where $\dot P_u:=\{([x_{i-1},x_i],u_i)\}_{i=1}^n$ is a tagged partition with norm $\lVert P\rVert<\delta_\varepsilon$.
5. Substituting into (2): $\big\lvert F(b)-F(a)-\int_a^b f\big\rvert<\varepsilon$.
6. Since $\varepsilon>0$ is arbitrary, (1) holds. $\blacksquare$

**Remark (p. 217).** If $F$ is differentiable at every point of $[a,b]$, hypothesis (a) is automatic (Theorem 6.1.2). If $f$ is not defined at some point $c\in E$, take $f(c):=0$. Even if $F$ is differentiable at every point of $[a,b]$, condition (c) is **not** automatic: there exist functions $F$ such that $F'$ is not Riemann integrable (see Example 7.3.2(e)).

## Examples 7.3.2 (pp. 217-218)

**Example 7.3.2(a).** If $F(x):=\tfrac12x^2$ for all $x\in[a,b]$, then $F'(x)=x$ for all $x\in[a,b]$. Further, $f=F'$ is continuous, so $f\in\mathcal{R}[a,b]$ (Theorem 7.2.7). The FTC (with $E=\varnothing$) gives
$$\int_a^b x\,dx=F(b)-F(a)=\tfrac12(b^2-a^2).$$

**Example 7.3.2(b).** If $G(x):=\operatorname{Arctan}x$ for $x\in[a,b]$, then $G'(x)=1/(x^2+1)$ for all $x\in[a,b]$; $G'$ is continuous, hence Riemann integrable. The FTC (with $E=\varnothing$) gives
$$\int_a^b\frac{1}{x^2+1}\,dx=\operatorname{Arctan}b-\operatorname{Arctan}a.$$

**Example 7.3.2(c).** If $A(x):=\lvert x\rvert$ for $x\in[-10,10]$, then $A'(x)=-1$ for $x\in[-10,0)$ and $A'(x)=+1$ for $x\in(0,10]$. Recalling the definition of the signum function (in 4.1.10(b)), $A'(x)=\operatorname{sgn}(x)$ for all $x\in[-10,10]\setminus\{0\}$. Since $\operatorname{sgn}$ is a step function, it belongs to $\mathcal{R}[-10,10]$ (Theorem 7.2.5). The FTC (with $E=\{0\}$) gives
$$\int_{-10}^{10}\operatorname{sgn}(x)\,dx=A(10)-A(-10)=10-10=0.$$

**Example 7.3.2(d).** If $H(x):=2\sqrt x$ for $x\in[0,b]$, then $H$ is continuous on $[0,b]$ and $H'(x)=1/\sqrt x$ for $x\in(0,b)$. Since $h:=H'$ is not bounded on $(0,b)$, it does not belong to $\mathcal{R}[0,b]$ no matter how $h(0)$ is defined; so the FTC does not apply. (However, Example 10.1.10(a) treats $h$ as a *generalized* Riemann integrable function on $[0,b]$.)

**Example 7.3.2(e).** Let $K(x):=x^2\cos(1/x^2)$ for $x\in(0,1]$ and $K(0):=0$. It follows from the Product Rule 6.1.3(c) and the Chain Rule 6.1.6 that
$$K'(x)=2x\cos(1/x^2)+(2/x)\sin(1/x^2)\qquad\text{for }x\in(0,1].$$
As in Example 6.1.7(e), $K'(0)=0$. Thus $K$ is continuous and differentiable at every point of $[0,1]$. But $K'$ is not bounded on $[0,1]$, so $K'\notin\mathcal{R}[0,1]$ and the FTC 7.3.1 does not apply to $K'$. (Theorem 10.1.9 shows $K'$ is *generalized* Riemann integrable on $[0,1]$.)

## The Fundamental Theorem (Second Form) (pp. 218-220)

**Definition 7.3.3 (p. 218).** If $f\in\mathcal{R}[a,b]$, the function defined by
$$F(z):=\int_a^z f\qquad\text{for }z\in[a,b]\tag{3}$$
is called the **indefinite integral** of $f$ with **basepoint** $a$. (Sometimes a point other than $a$ is used as basepoint; see Exercise 6 of 7.3.)

*Book text (p. 218):* The indefinite integral $F$ satisfies a Lipschitz condition, hence is continuous on $[a,b]$.

**Theorem 7.3.4 (p. 218).** The indefinite integral $F$ defined by (3) is continuous on $[a,b]$. In fact, if $\lvert f(x)\rvert\le M$ for all $x\in[a,b]$, then
$$\lvert F(z)-F(w)\rvert\le M\lvert z-w\rvert\qquad\text{for all }z,w\in[a,b].$$

*Proof (book, p. 218).*
1. Let $w\le z$ in $[a,b]$. By the Additivity Theorem 7.2.9, $F(z)=\int_a^z f=\int_a^w f+\int_w^z f=F(w)+\int_w^z f$, so $F(z)-F(w)=\int_w^z f$.
2. If $-M\le f(x)\le M$ for all $x$, Theorem 7.1.5(c) gives $-M(z-w)\le\int_w^z f\le M(z-w)$.
3. Hence $\lvert F(z)-F(w)\rvert\le\big\lvert\int_w^z f\big\rvert\le M\lvert z-w\rvert$. $\blacksquare$

**Theorem 7.3.5 (Fundamental Theorem of Calculus, Second Form, p. 219).** Let $f\in\mathcal{R}[a,b]$ and let $f$ be continuous at a point $c\in[a,b]$. Then the indefinite integral $F$ defined by (3) is differentiable at $c$ and $F'(c)=f(c)$.

*Proof (book, pp. 219-220).*
1. Suppose $c\in[a,b)$ and consider the right-hand derivative of $F$ at $c$.
2. Since $f$ is continuous at $c$, given $\varepsilon>0$ there is $\eta_\varepsilon>0$ such that if $c\le x<c+\eta_\varepsilon$ then
$$f(c)-\varepsilon<f(x)<f(c)+\varepsilon.\tag{4}$$
3. Let $0<h<\eta_\varepsilon$. The Additivity Theorem 7.2.9 implies $f$ is integrable on $[a,c]$, $[a,c+h]$ and $[c,c+h]$, and
$$F(c+h)-F(c)=\int_c^{c+h}f.$$
4. On $[c,c+h]$, (4) gives $(f(c)-\varepsilon)h\le F(c+h)-F(c)=\int_c^{c+h}f\le(f(c)+\varepsilon)h$.
5. Dividing by $h>0$ and subtracting $f(c)$: $\Big\lvert\dfrac{F(c+h)-F(c)}{h}-f(c)\Big\rvert\le\varepsilon$.
6. Since $\varepsilon>0$ is arbitrary, the right-hand limit $\lim_{h\to0+}\dfrac{F(c+h)-F(c)}{h}=f(c)$.
7. The left-hand limit at $c\in(a,b]$ is handled in the same way, giving the two-sided derivative $F'(c)=f(c)$. $\blacksquare$

**Theorem 7.3.6 (p. 219).** If $f$ is continuous on $[a,b]$, then the indefinite integral $F$ defined by (3) is differentiable on $[a,b]$ and $F'(x)=f(x)$ for all $x\in[a,b]$.

*Book text (p. 219; no separate proof is written, it is immediate from 7.3.5 at each point):* Theorem 7.3.6 can be summarized as: if $f$ is continuous on $[a,b]$, its indefinite integral is an antiderivative of $f$. In general the indefinite integral need not be an antiderivative of $f$ (either because the derivative does not exist, or does not equal $f(x)$).

**Examples 7.3.7 (p. 219).**

**Example 7.3.7(a).** Let $f(x):=\operatorname{sgn}x$ on $[-1,1]$. Then $f\in\mathcal{R}[-1,1]$ and has indefinite integral $F(x)=\lvert x\rvert-1$ with basepoint $-1$. Since $F'(0)$ does not exist, $F$ is not an antiderivative of $f$ on $[-1,1]$.

**Example 7.3.7(b).** Let $h$ denote Thomae's function (Example 7.1.7) and let $H(x):=\int_0^x h$. $H$ is identically $0$ on $[0,1]$. Its derivative exists at every point and $H'(x)=0$. But $H'(x)\ne h(x)$ whenever $x\in\mathbb{Q}\cap[0,1]$ (where $h(x)\ne 0$), so $H$ is not an antiderivative of $h$ on $[0,1]$. 

## The Substitution Theorem (p. 220)

**Theorem 7.3.8 (Substitution Theorem, p. 220).** Let $J:=[\alpha,\beta]$ and let $\varphi:J\to\mathbb{R}$ have a continuous derivative on $J$. If $f:I\to\mathbb{R}$ is continuous on an interval $I$ containing $\varphi(J)$, then
$$\int_\alpha^\beta f(\varphi(t))\,\varphi'(t)\,dt=\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx.\tag{5}$$

*Book text (p. 220):* The proof is based on the Chain Rule 6.1.6 and is outlined in Exercise 17 of 7.3 (the book gives no full proof in the text).

**Examples 7.3.9 (p. 220).**

**Example 7.3.9(a).** Consider $\displaystyle\int_1^4\frac{\sin\sqrt t}{\sqrt t}\,dt$. Substitute $\varphi(t):=\sqrt t$ for $t\in[1,4]$; then $\varphi'(t)=1/(2\sqrt t)$, which is continuous on $[1,4]$. If $f(x):=2\sin x$, then $f(\varphi(t))\varphi'(t)=\sin\sqrt t/\sqrt t$, and by Theorem 7.3.8 the integral equals
$$\int_1^2 2\sin x\,dx=-2\cos x\Big\rvert_1^2=2(\cos1-\cos2).$$

**Example 7.3.9(b).** Consider $\displaystyle\int_0^4\frac{\sin\sqrt t}{\sqrt t}\,dt$. Since $\varphi(t):=\sqrt t$ does not have a continuous derivative on $[0,4]$, Theorem 7.3.8 does not apply, and it is not obvious that the integral exists. However, Exercise 7.2.11 can be used to show that it exists. Then the FTC 7.3.1 can be applied to $F(t):=-2\cos\sqrt t$ with $E:=\{0\}$ to evaluate the integral: $F'(t)=\sin\sqrt t/\sqrt t$ for $t\in(0,4]$ and
$$\int_0^4\frac{\sin\sqrt t}{\sqrt t}\,dt=F(4)-F(0)=2(1-\cos2).$$
*(The book leaves the final evaluation to the reader; the value above is the direct evaluation of $F(4)-F(0)$.)*

*Book closing sentence (p. 220):* A more powerful Substitution Theorem for the generalized Riemann integral appears in Section 10.1.

## Lebesgue's Integrability Criterion (pp. 220-222)

*Book text (p. 220):* The Lebesgue Criterion gives a necessary and sufficient condition for Riemann integrability (Henri Lebesgue, 1875-1941): a bounded function is integrable iff its discontinuity set is a null set. The concept of a null set is needed first.

**Warning (p. 220).** Some people use "null set" as a synonym for "empty set" or "void set" (referring to $\varnothing$). In this book, "null set" is used as in the definition below, customary in integration theory.

**Definition 7.3.10 (p. 220).**
(a) A set $Z\subseteq\mathbb{R}$ is said to be a **null set** if for every $\varepsilon>0$ there exists a countable collection $\{(a_k,b_k)\}_{k=1}^\infty$ of open intervals such that
$$Z\subseteq\bigcup_{k=1}^\infty(a_k,b_k)\qquad\text{and}\qquad\sum_{k=1}^\infty(b_k-a_k)\le\varepsilon.\tag{6}$$
(b) If $Q(x)$ is a statement about the point $x\in I$ (where $I$ is an interval), we say that $Q(x)$ holds **almost everywhere** on $I$ (or for almost every $x\in I$) if there exists a null set $Z\subseteq I$ such that $Q(x)$ holds for all $x\in I\setminus Z$. In this case we may write $Q(x)$ for a.e. $x\in I$.

*Book text (p. 221):* Any subset of a null set is a null set, and the union of two null sets is a null set (easy to see).

**Example 7.3.11 (p. 221): $\mathbb{Q}_1=\mathbb{Q}\cap[0,1]$ is a null set.**

*Solution (book, p. 221).*
1. Enumerate $\mathbb{Q}_1=\{r_1,r_2,\dots\}$.
2. Given $\varepsilon>0$, define $J_k:=\big(r_k-\varepsilon/2^{k+1},\,r_k+\varepsilon/2^{k+1}\big)$ for $k\in\mathbb{N}$. Each $J_k$ contains $r_k$ and has length $\varepsilon/2^k$. (For example $J_1$ has length $\varepsilon/2$ and $J_2$ has length $\varepsilon/4$.)
3. The union $\bigcup_{k=1}^\infty J_k$ contains every point of $\mathbb{Q}_1$, and $\sum_{k=1}^\infty\varepsilon/2^k=\varepsilon$.
4. Since $\varepsilon>0$ is arbitrary, $\mathbb{Q}_1$ is a null set. $\blacksquare$

*Book remark (p. 221):* Every countable set is a null set (same argument). There are uncountable null sets in $\mathbb{R}$, for example the Cantor set (Definition 11.1.10).

**Theorem 7.3.12 (Lebesgue's Integrability Criterion, p. 221).** A bounded function $f:[a,b]\to\mathbb{R}$ is Riemann integrable if and only if it is continuous almost everywhere on $[a,b]$ (equivalently, the set of points of discontinuity of $f$ is a null set).

*Book text (p. 221):* A proof is given in Appendix C; the criterion is used here to derive several results (Composition and Product Theorems).

**Examples 7.3.13 (pp. 221-222).**

**(a)** The step function $g$ of Example 7.1.4(b) is continuous at every point except $x=1$. Therefore $g$ is Riemann integrable by the Lebesgue Criterion. In fact, every step function has at most finitely many discontinuities, so every step function on $[a,b]$ is Riemann integrable.

**(b)** By Theorem 5.6.4 the set of points of discontinuity of a monotone function is countable. Hence every monotone function on $[a,b]$ is Riemann integrable.

**(c)** The function $G$ of Example 7.1.4(d) is discontinuous precisely at $D:=\{1,\tfrac12,\dots,\tfrac1n,\dots\}$. Since this is a countable set, it is a null set, and Lebesgue's Criterion implies $G$ is Riemann integrable.

**(d)** The Dirichlet function (Example 7.2.2(b)) is discontinuous at **every** point of $[0,1]$. Since $[0,1]$ is not a null set, the criterion yields that the Dirichlet function is not Riemann integrable (the same conclusion as Example 7.2.2(b)).

**(e)** Let $h:[0,1]\to\mathbb{R}$ be Thomae's function (Examples 5.1.6(h) and 7.1.7). In Example 5.1.6(h) it is seen that $h$ is continuous at every irrational number and discontinuous at every rational number in $[0,1]$. By Example 7.3.11 the set of discontinuities $\mathbb{Q}\cap[0,1]$ is a null set, so Lebesgue's Criterion implies that Thomae's function is Riemann integrable on $[0,1]$, as seen in Example 7.1.7.

## Composition, Product, and Integration by Parts (pp. 222-224)

**Theorem 7.3.14 (Composition Theorem, p. 222).** Let $f\in\mathcal{R}[a,b]$ with $f([a,b])\subseteq[c,d]$, and let $\varphi:[c,d]\to\mathbb{R}$ be continuous. Then the composition $\varphi\circ f$ belongs to $\mathcal{R}[a,b]$.

*Proof (book, p. 222).*
1. If $f$ is continuous at a point $u\in[a,b]$, then $\varphi\circ f$ is also continuous at $u$ (composition of continuous functions).
2. So the set $D$ of points of discontinuity of $\varphi\circ f$ is contained in the set of points of discontinuity of $f$.
3. Since $f\in\mathcal{R}[a,b]$, the discontinuity set of $f$ is a null set (Theorem 7.3.12); hence $D$ is a null set.
4. Since $\varphi\circ f$ is bounded (as $\varphi$ is continuous on the compact interval $[c,d]$), Theorem 7.3.12 gives $\varphi\circ f\in\mathcal{R}[a,b]$. $\blacksquare$

*Book remark (p. 222):* It will be seen in Exercise 22 that the hypothesis that $\varphi$ is continuous cannot be dropped.

**Corollary 7.3.15 (p. 222).** Suppose $f\in\mathcal{R}[a,b]$. Then its absolute value $\lvert f\rvert$ is in $\mathcal{R}[a,b]$, and
$$\Big\lvert\int_a^b f\Big\rvert\le\int_a^b\lvert f\rvert\le M(b-a),$$
where $\lvert f(x)\rvert\le M$ for all $x\in[a,b]$.

*Proof (book, p. 222).* By Theorem 7.1.6, $f$ is bounded, say $\lvert f(x)\rvert\le M$. The Composition Theorem 7.3.14 applied with $\varphi(t):=\lvert t\rvert$ on $[-M,M]$ gives $\lvert f\rvert\in\mathcal{R}[a,b]$. The first inequality follows from $-\lvert f\rvert\le f\le\lvert f\rvert$ and Theorem 7.1.5(c); the second from $\lvert f(x)\rvert\le M$ and Theorem 7.1.5(c) (with Example 7.1.4(a)). $\blacksquare$

**Theorem 7.3.16 (Product Theorem, p. 222).** If $f$ and $g$ belong to $\mathcal{R}[a,b]$, then the product $fg$ belongs to $\mathcal{R}[a,b]$.

*Proof (book, p. 222).*
1. Let $M$ bound $\lvert f\rvert$ on $[a,b]$. For $\varphi(t):=t^2$ on $[-M,M]$ (continuous), the Composition Theorem gives $f^2=\varphi\circ f\in\mathcal{R}[a,b]$. Similarly $(f+g)^2$ and $g^2$ belong to $\mathcal{R}[a,b]$ (with a bound $M'$ for $\lvert f+g\rvert$, resp. $\lvert g\rvert$).
2. Since $fg=\tfrac12\big[(f+g)^2-f^2-g^2\big]$, Theorem 7.1.5 gives $fg\in\mathcal{R}[a,b]$. $\blacksquare$

**Integration by Parts.**

**Theorem 7.3.17 (Integration by Parts, p. 222).** Let $F,G$ be differentiable on $[a,b]$ and let $f:=F'$ and $g:=G'$ belong to $\mathcal{R}[a,b]$. Then
$$\int_a^b fG=\Big[FG\Big]_a^b-\int_a^b Fg.\tag{7}$$

*Proof (book, p. 223).*
1. By Theorem 6.1.3(c), $(FG)'$ exists on $[a,b]$ and $(FG)'=F'G+FG'=fG+Fg$.
2. $F$ and $G$ are continuous (Theorem 6.1.2), and $f,g\in\mathcal{R}[a,b]$; so by the Product Theorem 7.3.16, $fG$ and $Fg$ are integrable.
3. By the FTC 7.3.1 applied to $FG$: $\big[FG\big]_a^b=\int_a^b(FG)'=\int_a^b fG+\int_a^b Fg$, which gives (7). $\blacksquare$

*Book remark (p. 223):* A special, but useful, case: when $f$ and $g$ are continuous on $[a,b]$ and $F(x):=\int_a^x f$, $G(x):=\int_a^x g$ are their indefinite integrals.

**Taylor's Theorem with the Remainder.**

**Theorem 7.3.18 (Taylor's Theorem with the Remainder, p. 223).** Suppose that $f',\dots,f^{(n)},f^{(n+1)}$ exist on $[a,b]$ and that $f^{(n+1)}\in\mathcal{R}[a,b]$. Then
$$f(b)=f(a)+\frac{f'(a)}{1!}(b-a)+\cdots+\frac{f^{(n)}(a)}{n!}(b-a)^n+R_n,\tag{8}$$
where the remainder is given by
$$R_n=\frac{1}{n!}\int_a^b f^{(n+1)}(t)\,(b-t)^n\,dt.\tag{9}$$

*Proof (book, p. 223).*
1. Apply Integration by Parts (7) to (9) with $F(t):=f^{(n)}(t)$ and $G(t):=(b-t)^n/n!$, so that $g(t)=G'(t)=-(b-t)^{n-1}/(n-1)!$.
2. This gives
$$R_n=\frac{1}{n!}f^{(n)}(t)(b-t)^n\Big\rvert_{t=a}^{t=b}+\frac{1}{(n-1)!}\int_a^b f^{(n)}(t)\,(b-a)^{n-1}\,dt
=-\frac{f^{(n)}(a)}{n!}(b-a)^n+\frac{1}{(n-1)!}\int_a^b f^{(n)}(t)\,(b-t)^{n-1}\,dt.$$
(Transcription note: the first displayed integrand in the book's proof, as read from the page image, is printed as $(b-a)^{n-1}$; the second line, and the step that follows, use $(b-t)^{n-1}$, which is the correct integrand. Use $(b-t)^{n-1}$.)
3. Continuing to integrate by parts in this way yields (8). $\blacksquare$

## Exercises for Section 7.3 (printed pp. 223-224)

1. Extend the proof of the Fundamental Theorem 7.3.1 to the case of an arbitrary finite set $E$.
2. ★ If $n\in\mathbb{N}$ and $H_n(x):=x^{n+1}/(n+1)$ for $x\in[a,b]$, show that the Fundamental Theorem 7.3.1 implies that $\int_a^b x^n\,dx=(b^{n+1}-a^{n+1})/(n+1)$. What is the set $E$ here?
3. If $g(x):=x$ for $\lvert x\rvert\ge1$ and $g(x):=-x$ for $\lvert x\rvert<1$, and if $G(x):=\tfrac12\lvert x^2-1\rvert$, show that $\int_{-2}^3 g(x)\,dx=G(3)-G(-2)=5/2$.
4. ★ Let $B(x):=-\tfrac12x^2$ for $x<0$ and $B(x):=\tfrac12x^2$ for $x\ge0$. Show that $\int_a^b\lvert x\rvert\,dx=B(b)-B(a)$.
5. Let $f:[a,b]\to\mathbb{R}$ and let $C\in\mathbb{R}$. (a) If $\Phi:[a,b]\to\mathbb{R}$ is an antiderivative of $f$ on $[a,b]$, show that $\Phi_C(x):=\Phi(x)+C$ is also an antiderivative of $f$ on $[a,b]$. (b) If $\Phi_1$ and $\Phi_2$ are antiderivatives of $f$ on $[a,b]$, show that $\Phi_1-\Phi_2$ is a constant function on $[a,b]$.
6. ★ If $f\in\mathcal{R}[a,b]$ and if $c\in[a,b]$, the function defined by $F_c(z):=\int_c^z f$ for $z\in[a,b]$ is called the indefinite integral of $f$ with basepoint $c$. Find a relation between $F_a$ and $F_c$.
7. We have seen in Example 7.1.7 that Thomae's function is in $\mathcal{R}[0,1]$ with integral equal to $0$. Can the Fundamental Theorem 7.3.1 be used to obtain this conclusion? Explain your answer.
8. Let $F(x)$ be defined for $x\ge0$ by $F(x):=(n-1)x-(n-1)n/2$ for $x\in[n-1,n)$, $n\in\mathbb{N}$. Show that $F$ is continuous and evaluate $F'(x)$ at points where this derivative exists. Use this result to evaluate $\int_a^b\lfloor x\rfloor\,dx$ for $0\le a<b$, where $\lfloor x\rfloor$ denotes the greatest integer in $x$, as defined in Exercise 5.1.4.
9. Let $f\in\mathcal{R}[a,b]$ and define $F(x):=\int_a^x f$ for $x\in[a,b]$. (a) Evaluate $G(x):=\int_c^x f$ in terms of $F$, where $c\in[a,b]$. (b) Evaluate $H(x):=\int_x^b f$ in terms of $F$. (c) Evaluate $S(x):=\int_x^{\sin x}f$ in terms of $F$.
10. ★ Let $f:[a,b]\to\mathbb{R}$ be continuous on $[a,b]$ and let $v:[c,d]\to\mathbb{R}$ be differentiable on $[c,d]$ with $v([c,d])\subseteq[a,b]$. If we define $G(x):=\int_a^{v(x)}f$, show that $G'(x)=f(v(x))\,v'(x)$ for all $x\in[c,d]$.
11. ★ Find $F'(x)$ when $F$ is defined on $[0,1]$ by: (a) $F(x):=\int_0^{x^2}(1+t^3)^{-1}\,dt$; (b) $F(x):=\int_{x^2}^{x}\sqrt{1+t^2}\,dt$.
12. Let $f:[0,3]\to\mathbb{R}$ be defined by $f(x):=x$ for $0\le x<1$, $f(x):=1$ for $1\le x<2$, and $f(x):=x$ for $2\le x\le3$. Obtain formulas for $F(x):=\int_0^x f$ and sketch the graphs of $f$ and $F$. Where is $F$ differentiable? Evaluate $F'(x)$ at all such points.
13. The function $g$ is defined on $[0,3]$ by $g(x):=-1$ if $0\le x<2$ and $g(x):=1$ if $2\le x\le3$. Find the indefinite integral $G(x)=\int_0^x g$ for $0\le x\le3$, and sketch the graphs of $g$ and $G$. Does $G'(x)=g(x)$ for all $x\in[0,3]$?
14. ★ Show there does not exist a continuously differentiable function $f$ on $[0,2]$ such that $f(0)=-1$, $f(2)=4$, and $f'(x)\le2$ for $0\le x\le2$. (Apply the Fundamental Theorem.)
15. If $f:\mathbb{R}\to\mathbb{R}$ is continuous and $c>0$, define $g:\mathbb{R}\to\mathbb{R}$ by $g(x):=\int_{x-c}^{x+c}f(t)\,dt$. Show that $g$ is differentiable on $\mathbb{R}$ and find $g'(x)$.
16. ★ If $f:[0,1]\to\mathbb{R}$ is continuous and $\int_0^x f=\int_x^1 f$ for all $x\in[0,1]$, show that $f(x)=0$ for all $x\in[0,1]$.
17. Use the following argument to prove the Substitution Theorem 7.3.8. Define $F(u):=\int_{\varphi(\alpha)}^u f(x)\,dx$ for $u\in I$, and $H(t):=F(\varphi(t))$ for $t\in J$. Show that $H'(t)=f(\varphi(t))\varphi'(t)$ for $t\in J$ and that
$$\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx=F(\varphi(\beta))=H(\beta)=\int_\alpha^\beta f(\varphi(t))\varphi'(t)\,dt.$$
18. ★ Use the Substitution Theorem 7.3.8 to evaluate the following integrals: (a) $\int_0^1 t\sqrt{1+t^2}\,dt$; (b) $\int_0^2 t^2(1+t^3)^{-1/2}\,dt=4/3$; (c) $\int_1^4\dfrac{\sqrt{1+\sqrt t}}{\sqrt t}\,dt$; (d) $\int_1^4\dfrac{\cos\sqrt t}{\sqrt t}\,dt=2(\sin2-\sin1)$.
19. Explain why Theorem 7.3.8 and/or Exercise 7.3.17 cannot be applied to evaluate the following integrals, using the indicated substitution: (a) $\int_0^4\dfrac{\sqrt t\,dt}{1+\sqrt t}$, $\varphi(t)=\sqrt t$; (b) $\int_0^4\dfrac{\cos\sqrt t\,dt}{\sqrt t}$, $\varphi(t)=\sqrt t$; (c) $\int_{-1}^1\sqrt{1+2\lvert t\rvert}\,dt$, $\varphi(t)=\lvert t\rvert$; (d) $\int_0^1\dfrac{dt}{\sqrt{1-t^2}}$, $\varphi(t)=\operatorname{Arcsin}t$.
