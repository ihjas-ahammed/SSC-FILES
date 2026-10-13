# M1 CONTINUOUS FUNCTIONS brief (Bartle & Sherbert 4e; B=Bartle, page = printed; K=concept, P=prereq, M=maths tool)
Module scope: 5.1 (all); 5.3.1-5.3.5, 5.3.7-5.3.10; 5.4.1-5.4.14 (5.4.14 statement only). Sources read: `bartle_m1.md`, `pyq_all.md`, `pedagogy_ra.md`, FYUGP `MAT1MN102/2024/SEM1_CALCULUSOFASINGLEVARIABLE.pdf`.
Notation: $V_\varepsilon(a)=(a-\varepsilon,a+\varepsilon)$; "UC" = uniformly continuous; "IVT" = Bolzano 5.3.7; "BW" = Bolzano-Weierstrass 3.4.8; "NIP" = Nested Intervals 2.5.2; "SC" = sequential criterion.

## 0. READ FIRST: decisions, verification log, corrections

0.1 **K count = 40, not 18-28.** The model paper needs 40 questions (20+16+4) and every K must be the MAIN point of exactly one question, so K is cut at 40 atomic items (definition / theorem / one standard example each). Section map: A (3 marks) = 20 K, B (6 marks) = 16 K, C (10 marks) = 4 K (Section 6).
0.2 **Corrections / flags found while recomputing** (each verified numerically with Python 3 this session):
- **B p.142 discussion (uses $\delta(\varepsilon,u)$ for $1/x$):** the extract reads $\delta:=\inf\{u,\tfrac12u^2\varepsilon\}$. With $\delta\le u$ one only gets $0<x<2u$, NOT $\tfrac12u<x<\tfrac32u$. The version that makes the next line true is $\delta:=\inf\{\tfrac12u,\ \tfrac12u^2\varepsilon\}$ (extraction error or book misprint). Use $\min\{u/2,\ u^2\varepsilon/2\}$ everywhere.
- **B 5.1.6(h) Thomae:** domain is $A=\{x>0\}$ yet the book also sets $h(0):=1$ ($0\notin A$). Treat $h$ on $(0,\infty)$; if $0$ is included ($h(0)=1$) it is a discontinuity point (rational $0=0/1$). Exam MCQ answer: continuous exactly at irrationals.
- **B 5.3.6 (xe^x-2)** is outside the requested scope but PYQ MAT6B09-21-Q17 asks to show the root lies in $(0,1)$; this needs only 5.3.5 ($f(0)=-2<0<e-2=f(1)\approx0.7183$). Root $=0.852605\ldots$ ($=W(2)$). Bisection table computed in Section 4.9.
- **B 5.3.5** proof is given for $f(a)<0<f(b)$ only; the case $f(a)>0>f(b)$ follows by applying the result to $-f$.
- **B 5.3.4** proof: the book proves the maximum and leaves the minimum to the reader (apply the same argument with $\inf$, or apply it to $-f$).
- **Theorems 5.1.2, 5.1.3, 5.1.4, 5.4.2 have NO proof in the book.** Exams ask for them (MTS26-Q1 asks to "state"; MAT21-Q16 "state"). Full proofs are supplied in Section 3.
- **PYQ ambiguities:** MTS22-MCQ-Q2 omits the function $g$ (read $g(x)=1/x$; answer C); MAT22-MCQ-Q11 option (B) is garbled ("closed and bounded not bounded", read "closed and bounded"); MAT21-Q22 writes sequences $(f_n)(g_n)$ but means two functions $f,g$ (answer $f=g=x$); MAT22-MCQ-Q8/Q9 use words "jump/removable" that B never defines.
- **pedagogy_ra.md audit (M1-relevant parts)**: all computations in T1-T6, C1-C4, C7-C11 are correct (re-verified, Section 7). One imprecision: Section 3 first bullet says "pen-lifting fails for x sin(1/x)". Actually the graph of $F$ (with $F(0)=0$) is connected and the pen rule is not violated; the pen picture fails because (a) it gives no way to prove anything, (b) it is wrong for $1/x$ (continuous on its domain but graph has two pieces), and (c) for $\operatorname{sgn}$-like or Dirichlet-like functions you cannot draw the graph at all. Quote it that way.
0.3 **Exam pool vs paper.** The model paper is a 40-question PRACTICE POOL (Section A 20x3 + B 16x6 + C 4x10 = 60+96+40=196 marks), "FYUGP pattern doubled". A real 70-mark FYUGP paper takes about 15+ marks from this module (syllabus: min 15 per module).
0.4 **Tag syntax:** `MTS25-Qn` = MTS6B10-25-Qn (Mar 2025); `MTS26` = MTS6B10-26 (Apr 2026); `MAT22`/`MAT21` = MAT6B09-22/-21 descriptive; `MAT22M`/`MAT21M` = MCQ of those years; `MTS22` = MTS6B10-22 descriptive; `MTS22M` = MTS6B10-22 MCQ; `CALC-24` = FYUGP MAT1MN102 Nov 2024 (related FYUGP, not the old course).

---
## 1. ATOMIC CONCEPTS  K## | name | B# [page] | statement (verbatim from B) | needs | exam weight
Weight = number of M1 PYQ tags that test the concept (57 mapped tags; MCQ repeats across 2021/2022 counted separately). Sec = slot in Section 6 model paper.

**1A. Continuity at a point**
- **K01 Continuity at a point** | Def 5.1.1 [125] | Let $A\subseteq\mathbb R$, let $f:A\to\mathbb R$, and let $c\in A$. We say that $f$ is **continuous at $c$** if, given any number $\varepsilon>0$, there exists $\delta>0$ such that if $x$ is any point of $A$ satisfying $|x-c|<\delta$, then $|f(x)-f(c)|<\varepsilon$. If $f$ fails to be continuous at $c$, then we say that $f$ is **discontinuous at $c$**. | P03,P04,M01,M02 | 1 (MTS22-Q1) | A
- **K02 Neighbourhood form; limit form; isolated points** | Thm 5.1.2 & Remarks 5.1.2 [125-126] | $f$ is continuous at $c\in A$ iff given any $\varepsilon$-neighbourhood $V_\varepsilon(f(c))$ there exists a $\delta$-neighbourhood $V_\delta(c)$ such that if $x$ is any point of $A\cap V_\delta(c)$, then $f(x)\in V_\varepsilon(f(c))$, i.e. $f(A\cap V_\delta(c))\subseteq V_\varepsilon(f(c))$. If $c\in A$ is a cluster point of $A$ then $f$ is continuous at $c$ iff $f(c)=\lim_{x\to c}f(x)$; (i) $f$ defined at $c$, (ii) limit exists in $\mathbb R$, (iii) equal. If $c\in A$ is not a cluster point, $f$ is automatically continuous at $c$. | K01,P11 | 0 (new) | A
- **K03 Sequential Criterion for Continuity** | Thm 5.1.3 [126] | A function $f:A\to\mathbb R$ is continuous at the point $c\in A$ if and only if for every sequence $(x_n)$ in $A$ that converges to $c$, the sequence $(f(x_n))$ converges to $f(c)$. | K01,P07,M05,M08 | 0 direct (used inside 4+ proofs) | B
- **K04 Discontinuity Criterion** | Thm 5.1.4 [126] | Let $A\subseteq\mathbb R$, $f:A\to\mathbb R$, $c\in A$. Then $f$ is discontinuous at $c$ iff there exists a sequence $(x_n)$ in $A$ such that $(x_n)$ converges to $c$, but $(f(x_n))$ does not converge to $f(c)$. | K03,M03 | 1 (MTS26-Q1) | A
- **K05 Continuity on a set; constant and identity** | Def 5.1.5 & Ex 5.1.6(a),(b) [126] | If $B\subseteq A$, $f$ is **continuous on the set $B$** if $f$ is continuous at every point of $B$. $f(x):=b$ and $g(x):=x$ are continuous on $\mathbb R$. | K01 | 0 (new; constant part inside MTS22-Q1) | A
- **K06 $\varepsilon$-$\delta$ for $x^2$; polynomials** | Ex 5.1.6(c) [126] (+4.1.7(c)) | $h(x):=x^2$ is continuous on $\mathbb R$. | K01,M01,M04 | 1 (MTS25-Q1, polynomials) | B
- **K07 $\varepsilon$-$\delta$ for $1/x$ on $(0,\infty)$** | Ex 5.1.6(d) [126] (+4.1.7(d)) | $\varphi(x):=1/x$ is continuous on $A:=\{x\in\mathbb R:x>0\}$. | K01,M01,M04 | 0 (new) | B
- **K08 $|x|$ is continuous** | Ex 5.1.10 [129] | The absolute value function $f(x):=|x|$ is continuous at every point $c\in\mathbb R$. | K01,M01 | 1 (CALC-24-Q12, related FYUGP) | A
- **K09 Piecewise-defined functions; junction test** | Ex 5.1.3, 5.1.13 [129] | Let $a<b<c$, $f$ continuous on $[a,b]$, $g$ continuous on $[b,c]$, $f(b)=g(b)$. Then $h:=f$ on $[a,b]$, $g$ on $[b,c]$ is continuous on $[a,c]$. (Fails if $f(b)\ne g(b)$.) | K01,K03,P04 | 1 (CALC-24-Q3, related FYUGP) | A
- **K10 Discontinuity: $1/x$ at 0, $\operatorname{sgn}$; types of discontinuity** | Ex 5.1.6(e),(f) [127] | $\varphi(x)=1/x$ is not continuous at $x=0$ (not defined there; $\lim_{x\to0}1/x$ does not exist). The signum function is not continuous at 0 ($\lim_{x\to0}\operatorname{sgn}(x)$ does not exist although $\operatorname{sgn}(0)$ is defined); it is continuous at every $c\neq0$. (Names jump / removable / infinite are not in B; define in class.) | K01,K04 | 3 (MAT22M-Q3, MAT22M-Q8, MAT21M-Q6) | A
- **K11 Dirichlet's function** | Ex 5.1.6(g) [127] | $f(x):=1$ if $x$ rational, $0$ if $x$ irrational, is not continuous at any point of $\mathbb R$. | K04,P05 (density 2.4.8-9) | 1 (MTS25-Q16) | B
- **K12 Thomae's function** | Ex 5.1.6(h) [127-128] | For irrational $x>0$, $h(x):=0$; for rational $m/n$ in lowest terms, $h(m/n):=1/n$. $h$ is continuous at every irrational in $A$ and discontinuous at every rational in $A$. | K01,K04,P05,P13 | 1 (MTS22M-Q1) | B
- **K13 Removable discontinuity; continuous extension of a point; $x\sin(1/x)$ vs $\sin(1/x)$** | Rem 5.1.7, Ex 5.1.8 [128-129] | If $f$ has a limit $L$ at $c$ and $F(x):=f(x)$ on $A$, $F(c):=L$, then $F$ is continuous at $c$. If $g$ has no limit at $c$, no value $C$ makes $G$ continuous at $c$. $\sin(1/x)$ has no continuous extension at 0; $F(x):=x\sin(1/x)$ ($x\ne0$), $F(0):=0$ is continuous at 0. | K02,P11 | 1 (MAT22M-Q9, "hole") | A

**1B. Continuous functions on intervals**
- **K14 Bounded / unbounded function** | Def 5.3.1 [134] | $f:A\to\mathbb R$ is **bounded on $A$** if there is $M>0$ with $|f(x)|\le M$ for all $x\in A$. Not bounded: given any $M>0$ there is $x_M\in A$ with $|f(x_M)|>M$ ($f$ is **unbounded**). $f(x)=1/x$ on $(0,\infty)$: $x_M:=1/(M+1)$ gives $f(x_M)=M+1>M$; so continuous functions need not be bounded. | M03 | 2 (MTS26-Q2, MAT22M-Q6) | A
- **K15 Boundedness Theorem** | Thm 5.3.2 [135] | Let $I:=[a,b]$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. Then $f$ is bounded on $I$. | K03,P08 (3.2.2, 3.2.6),P09,M05,M08 | 4 (MTS26-Q16, MAT22-Q27, MAT21-Q13, MTS22-Q2) | B
- **K16 Hypotheses of 5.3.2 / 5.3.4 are all needed** | text [135] | (i) $f(x)=x$ on $[0,\infty)$ is continuous, unbounded. (ii) $g(x)=1/x$ on $(0,1]$ is continuous, unbounded. (iii) $h(x)=1/x$ on $(0,1]$, $h(0)=1$, on $[0,1]$ is discontinuous and unbounded. | K15,K14 | 3 (MTS22-Q2, MAT21-Q13, MAT21-Q14) | A
- **K17 Absolute maximum / minimum** | Def 5.3.3 [135] | $f$ **has an absolute maximum on $A$** if there is $x^*\in A$ with $f(x^*)\ge f(x)$ for all $x\in A$; **absolute minimum** if $x_*\in A$ with $f(x_*)\le f(x)$ for all $x\in A$. $f(x)=1/x$ has neither on $(0,\infty)$; $x^2$ on $[-1,1]$ has max at $\pm1$, min at $0$. | P06 | 1 (MAT22M-Q10) | A
- **K18 Maximum-Minimum Theorem** | Thm 5.3.4 [136] | Let $I:=[a,b]$ be a closed bounded interval and let $f:I\to\mathbb R$ be continuous on $I$. Then $f$ has an absolute maximum and an absolute minimum on $I$. | K15,P06,P08,P09 | 3 (MAT22-Q36a, MAT21-Q14, MAT22M-Q11) | C
- **K19 Location of Roots Theorem** | Thm 5.3.5 [137] | Let $I=[a,b]$ and $f:I\to\mathbb R$ continuous. If $f(a)<0<f(b)$, or if $f(a)>0>f(b)$, then there exists $c\in(a,b)$ such that $f(c)=0$. | NIP,P12,P08,M07 | 2 (MTS25-Q24, MAT21-Q17) | C
- **K20 Using sign changes (roots)** | Thm 5.3.5 applied; Ex 5.3.4,5.3.5,5.3.7 [140] | Show a polynomial / equation has a root by evaluating $f$ at two points of opposite sign and quoting 5.3.5 (continuity of $f$ on the closed interval is part of the check). | K19 | 3 (MAT21-Q17b, MAT22M-Q12, MAT21M-Q7) | A
- **K21 Bolzano's Intermediate Value Theorem** | Thm 5.3.7 [138] | Let $I$ be an interval and $f:I\to\mathbb R$ continuous on $I$. If $a,b\in I$ and $k\in\mathbb R$ satisfies $f(a)<k<f(b)$, then there exists $c\in I$ between $a$ and $b$ such that $f(c)=k$. | K19 | 1 (MAT21-Q1) | A
- **K22 Corollary 5.3.8** | Cor 5.3.8 [138] | $I=[a,b]$, $f$ continuous. If $k$ satisfies $\inf f(I)\le k\le\sup f(I)$, then there is $c\in I$ with $f(c)=k$. | K18,K21 | 1 (MAT22-Q13) | B
- **K23 Continuous image of $[a,b]$** | Thm 5.3.9 [139] | $I$ closed bounded interval, $f:I\to\mathbb R$ continuous. Then $f(I)=\{f(x):x\in I\}$ is a closed bounded interval ($=[m,M]$ with $m=\inf$, $M=\sup$; NOT necessarily $[f(a),f(b)]$). | K18,K22 | 1 (MAT21-Q15) | B
- **K24 Preservation of Intervals** | Thm 5.3.10 [140] | $I$ an interval, $f:I\to\mathbb R$ continuous on $I$. Then $f(I)$ is an interval. | K21,P12 (2.5.1) | 2 (MTS25-Q17, MAT22-Q14) | B

**1C. Uniform continuity and approximation**
- **K25 Uniform continuity** | Def 5.4.1 [142] | $f:A\to\mathbb R$ is **uniformly continuous on $A$** if for each $\varepsilon>0$ there is $\delta(\varepsilon)>0$ such that if $x,u\in A$ satisfy $|x-u|<\delta(\varepsilon)$ then $|f(x)-f(u)|<\varepsilon$. UC $\Rightarrow$ continuous; converse false ($g(x)=1/x$ on $x>0$). | K01,M02 | 4 (MAT22-Q1, MAT21-Q2, MAT22M-Q13, MAT21M-Q8) | A
- **K26 Nonuniform Continuity Criteria** | 5.4.2 [142] | TFAE: (i) $f$ not UC on $A$. (ii) $\exists\varepsilon_0>0$ $\forall\delta>0$ $\exists x_\delta,u_\delta\in A$: $|x_\delta-u_\delta|<\delta$ and $|f(x_\delta)-f(u_\delta)|\ge\varepsilon_0$. (iii) $\exists\varepsilon_0>0$ and sequences $(x_n),(u_n)$ in $A$ with $\lim(x_n-u_n)=0$ and $|f(x_n)-f(u_n)|\ge\varepsilon_0$ for all $n$. (Book: $x_n=1/n$, $u_n=1/(n+1)$ for $1/x$.) | K25,M03,M06 | 2 (MAT21-Q16, MTS22M-Q2) | B
- **K27 Uniform Continuity Theorem** | Thm 5.4.3 [143] | Let $I$ be a closed bounded interval and $f:I\to\mathbb R$ continuous on $I$. Then $f$ is uniformly continuous on $I$. | K26,P08,P09,M05 | 3 (MTS26-Q24a, MAT22-Q28, MAT21-Q27) | C
- **K28 Lipschitz function** | Def 5.4.4 [143] | If there is $K>0$ with $|f(x)-f(u)|\le K|x-u|$ for all $x,u\in A$ then $f$ is **Lipschitz** on $A$. On an interval this means all chord slopes $\left|\frac{f(x)-f(u)}{x-u}\right|\le K$. | K25 | 2 (MTS26-Q3, MAT21-Q28a) | A
- **K29 Lipschitz $\Rightarrow$ UC** | Thm 5.4.5 [143] | If $f:A\to\mathbb R$ is a Lipschitz function, then $f$ is uniformly continuous on $A$. | K28 | 1 (MAT21-Q28b) | B
- **K30 UC but not Lipschitz: $\sqrt x$** | Ex 5.4.6(b) [144]; Ex 5.4.11 | $g(x)=\sqrt x$ on $[0,2]$ is UC (by 5.4.3) but there is no $K>0$ with $|g(x)|\le K|x|$ on $I$; so $g$ is not Lipschitz. ($x^2$ on $[0,b]$ is Lipschitz with $K=2b$, not Lipschitz on $[0,\infty)$.) | K27,K28 | 2 (MTS25-Q2, MAT22-Q15) | A
- **K31 $\sqrt x$ is UC on $[0,\infty)$** | Ex 5.4.6(c) [144] | $A=[0,2]\cup[1,\infty)$; on $J=[1,\infty)$, $|\sqrt x-\sqrt u|=\frac{|x-u|}{\sqrt x+\sqrt u}\le\frac12|x-u|$ (Lipschitz $K=\frac12$); combine with UC on $[0,2]$ using $\delta(\varepsilon):=\inf\{1,\delta_I(\varepsilon),\delta_J(\varepsilon)\}$. | K27,K29 | 2 (MTS26-Q24b, MAT22-Q36b ($[0,2]$ part)) | B
- **K32 Algebra of Lipschitz functions** | Ex 5.4.15 [149] | $f,g$ Lipschitz on $A$: (a) $f+g$ Lipschitz; (b) if $f,g$ bounded on $A$ then $fg$ Lipschitz; (c) $f^2$ need not be Lipschitz ($f(x)=x$ on $[0,\infty)$). | K28 | 1 (MTS22M-Q3) | A
- **K33 $1/(1+x^2)$ is UC on $\mathbb R$** | Ex 5.4.4 [148] | Show $f(x)=1/(1+x^2)$ is uniformly continuous on $\mathbb R$. | K28,K29,M01 | 1 (MTS22M-Q4) | A
- **K34 Sums and products of UC functions** | Ex 5.4.5-5.4.7 [148] | $f,g$ UC on $A$ $\Rightarrow$ $f+g$ UC; if also both bounded then $fg$ UC; $f(x)=x$ and $g(x)=\sin x$ UC on $\mathbb R$ but $fg$ is not. | K25,K26 | 1 (MAT21-Q22) | B
- **K35 UC maps Cauchy sequences to Cauchy sequences** | Thm 5.4.7 [144] | If $f:A\to\mathbb R$ is UC on $A$ and $(x_n)$ is a Cauchy sequence in $A$, then $(f(x_n))$ is a Cauchy sequence in $\mathbb R$. (Application: $1/x$, $x_n=1/n$, $f(x_n)=n$ not Cauchy.) | K25,P10 | 2 (MAT21-Q36a, MTS22-Q3) | B
- **K36 Continuous Extension Theorem** | Thm 5.4.8 [145] | A function $f$ is uniformly continuous on $(a,b)$ iff it can be defined at the endpoints $a$ and $b$ such that the extended function is continuous on $[a,b]$. | K35,K27,P10,P11 (4.1.8) | 1 (MAT22-Q29) | C
- **K37 Step function** | Def 5.4.9 [145] | $s:[a,b]\to\mathbb R$ is a **step function** if $[a,b]$ is the union of finitely many nonoverlapping intervals $I_1,\dots,I_n$ such that $s$ is constant on each $I_k$ ($s(x)=c_k$ on $I_k$). | P01 | 2 (MAT22-Q5, MAT21-Q3) | A
- **K38 Approximation by step functions** | Thm 5.4.10, Cor 5.4.11 [146-147] | $I$ closed bounded, $f:I\to\mathbb R$ continuous. If $\varepsilon>0$ there is a step function $s_\varepsilon:I\to\mathbb R$ with $|f(x)-s_\varepsilon(x)|<\varepsilon$ for all $x\in I$. (Cor: $m\in\mathbb N$ with $h=(b-a)/m$ small, $s_\varepsilon(x)=f(a+kh)$ on $I_k$.) | K27,K37 | 1 (MTS26-Q17) | B
- **K39 Piecewise linear approximation** | Def 5.4.12, Thm 5.4.13 [147] | $g:[a,b]\to\mathbb R$ is **piecewise linear** if $[a,b]$ is a union of finitely many disjoint intervals on each of which $g$ is linear. For $f$ continuous on closed bounded $I$ and $\varepsilon>0$ there is a continuous piecewise linear $g_\varepsilon$ with $|f(x)-g_\varepsilon(x)|<\varepsilon$ for all $x\in I$. | K38 | 0 (new) | B
- **K40 Weierstrass Approximation Theorem** | Thm 5.4.14 [148] | $I=[a,b]$, $f:I\to\mathbb R$ continuous. If $\varepsilon>0$ then there exists a polynomial function $p_\varepsilon$ with $|f(x)-p_\varepsilon(x)|<\varepsilon$ for all $x\in I$. (Proof omitted: B, ERA pp.169-172.) | K39 | 2 (MTS25-Q3, MAT22-Q2) | A

**Teaching order** = K01...K40 as numbered. Dependency spine: K01-K04 -> K15 -> K18 -> K22/K23; K19 -> K21 -> K22/K24; K25-K27 -> K29 -> K36; K27 -> K38 -> K39 -> K40.
**Highest weight (study first):** K15 (4), K25 (4), K10/K18/K20/K27/K16 (3 each), then K14, K19, K24, K26, K28, K30, K31, K35, K37, K40 (2 each).
**Repeated-pair watch:** MAT21 paper is the MAT22 pattern at 6/9/15 marks; its 2022 twin repeats K15, K18, K23-K27, K36. Expect "State and prove" for K15, K18, K19, K24, K27, K36 and short "Define/State" for K25, K28, K37, K40.

---
## 2. PREREQUISITES (P) and MATHS TOOLS (M)

### 2.1 Prerequisites
| code | content | source |
|---|---|---|
| P01 | Intervals (open, closed, half-open, bounded/unbounded), union/intersection of sets, subset notation | Class 11 Maths Ch.1 Sets |
| P02 | Function $f:A\to\mathbb R$: domain, range, image $f(B)$, restriction, piecewise definition, greatest-integer and signum functions | Class 11 Ch.2 Relations & Functions |
| P03 | Modulus: $|x|<a\iff-a<x<a$; $|ab|=|a||b|$; triangle inequality $|a+b|\le|a|+|b|$ | Class 11 Ch.5 (inequalities) / Class 11 absolute value |
| P04 | Limits and continuity at a point (left/right limit, $f(c)=\lim f$); continuity of polynomial, sin, exp | Class 12 Ch.5 Continuity & Differentiability; Class 11 Ch.13 Limits |
| P05 | $\mathbb Q$ and irrationals; density of $\mathbb Q$ and irrationals (Thm 2.4.8, Cor 2.4.9) | RA I 2.4 (MAT4CJ203) |
| P06 | Supremum / infimum; Completeness Property 2.3.6; $s^*-1/n$ is not an upper bound | RA I 2.3 |
| P07 | Sequence, $\varepsilon$-$N$ convergence, $x_n\to c$; $x_n=c+1/n$ type sequences | RA I 3.1 |
| P08 | Convergent $\Rightarrow$ bounded (3.2.2); algebra of limits (3.2.3); order: $a\le x_n\le b\Rightarrow a\le\lim x_n\le b$ (3.2.6); Squeeze 3.2.7 | RA I 3.2 |
| P09 | Subsequences; Bolzano-Weierstrass 3.4.8 (every bounded sequence has a convergent subsequence) | RA I 3.4 |
| P10 | Cauchy sequences: convergent $\Rightarrow$ Cauchy (3.5.3); Cauchy $\Rightarrow$ convergent (3.5.5) | RA I 3.5 |
| P11 | Cluster point (4.1.1); $\lim_{x\to c}f$ (4.1.4); Sequential Criterion 4.1.8; Divergence Criterion 4.1.9; Ex 4.1.7, 4.1.10, 4.2.8(f) | RA I 4.1-4.2 |
| P12 | Nested Intervals Property 2.5.2; Characterisation of intervals 2.5.1 | RA I 2.5 |
| P13 | Archimedean Property: $\forall\varepsilon>0\ \exists n:\ 1/n<\varepsilon$ | RA I 2.4 |
| P14 | $|\sin t|\le1$, $\sin(n\pi)=0$, $\sin(\pi/2+2n\pi)=1$; $e>2$, $e^x$ increasing | Class 11 Ch.3 Trig; Class 12 Ch.2,5 |

### 2.2 Maths tools to teach from zero (each gets a mini-lesson)
| code | tool | content to teach |
|---|---|---|
| M01 | Absolute-value and inequality gym | $|x-c|<\delta\iff c-\delta<x<c+\delta$; triangle inequality; reverse form $\big||a|-|b|\big|\le|a-b|$; $|x+c|\le|x-c|+2|c|$; if $|x-c|<1$ then $|x|<|c|+1$; $|t|/(1+t^2)\le\frac12$ (as $1+t^2\ge2|t|$); $1/x<2/c$ when $x>c/2$ |
| M02 | Reading $\forall\varepsilon\,\exists\delta$ aloud; the challenge-response game | Opponent hands $\varepsilon$; you return $\delta$. Continuity: $\delta$ may depend on $(\varepsilon,c)$. UC: $\delta$ depends on $\varepsilon$ only. Draw the quantifier ladder |
| M03 | Negating quantifiers | not continuous at $c$: $\exists\varepsilon_0\,\forall\delta\,\exists x\in A$, $|x-c|<\delta$, $|f(x)-f(c)|\ge\varepsilon_0$. Not UC: $\exists\varepsilon_0\,\forall\delta\,\exists x,u$, $|x-u|<\delta$, $|f(x)-f(u)|\ge\varepsilon_0$. Unbounded: $\forall M\ \exists x_M:\ |f(x_M)|>M$ |
| M04 | Scratch work vs proof; choosing $\delta$ | Scratch (backwards): want $|f(x)-f(c)|<\varepsilon$; factor to $|x-c|\cdot|g(x)|$; bound $|g|$ by $M$ on a restricted window ($\delta\le1$ or $\delta\le c/2$); then $\delta=\min\{\text{window},\varepsilon/M\}$. Proof (forwards): "Let $\varepsilon>0$. Put $\delta=\ldots$. If $|x-c|<\delta$ then ..." |
| M05 | Proof by contradiction / contrapositive | Used in 5.3.2, 5.4.3, SC "$\Leftarrow$" |
| M06 | Pair-of-sequences method | To show not UC choose $x_n,u_n$ with $x_n-u_n\to0$ but images a fixed distance apart; to show not continuous choose $x_n\to c$ with $f(x_n)\not\to f(c)$ (two sequences with different limits also works) |
| M07 | Bisection / nested-interval thinking | halve interval keeping the sign change; lengths $(b-a)/2^{n-1}$; the single common point |
| M08 | "Pick $x_n$ for each $n$" | negation gives for each $n\in\mathbb N$ a point (use $\delta=1/n$ or $M=n$); then BW |
| M09 | Squeeze and $\sup$-approximation | $s^*-1/n<f(x_n)\le s^*\Rightarrow f(x_n)\to s^*$ |
| M10 | Algebra tricks | $a^2-b^2=(a-b)(a+b)$; conjugate: $\sqrt x-\sqrt u=\frac{x-u}{\sqrt x+\sqrt u}$; common denominator: $\frac1x-\frac1u=\frac{u-x}{xu}$ |
| M11 | Reading an $\varepsilon$-band / $\delta$-window picture | horizontal band $f(c)\pm\varepsilon$, vertical strip $c\pm\delta$; graph over the strip must stay inside the band |

---
## 3. PROOF SKELETONS (each step: WHAT | WHY). Marks guide: **[10]** = 10-mark material, **[6]**, **[3]**.
Format for the study kit: left "KNOW / WANT / TOOL" header, then numbered steps with the WHY in the margin.

### 3.1 Thm 5.1.2 Neighbourhood form [3] (book leaves it as exercise)
KNOW: Def 5.1.1. WANT: $f(A\cap V_\delta(c))\subseteq V_\varepsilon(f(c))$. TOOL: translate neighbourhoods.
1. $x\in V_\delta(c)\iff|x-c|<\delta$ | definition of neighbourhood.
2. $f(x)\in V_\varepsilon(f(c))\iff|f(x)-f(c)|<\varepsilon$ | same.
3. So "$x\in A$, $|x-c|<\delta\Rightarrow|f(x)-f(c)|<\varepsilon$" is the statement "$f(A\cap V_\delta(c))\subseteq V_\varepsilon(f(c))$" | image-of-set meaning. Both conditions are literally the same sentence. ∎

### 3.2 Thm 5.1.3 Sequential Criterion for continuity [6] (book: no proof; this is the standard one)
KNOW/WANT: ($\Rightarrow$) continuity gives $x_n\to c\Rightarrow f(x_n)\to f(c)$. ($\Leftarrow$) the converse. TOOL: $\varepsilon$-$\delta$ and $\varepsilon$-$N$; contrapositive.
($\Rightarrow$)
1. Let $(x_n)\subseteq A$, $x_n\to c$; let $\varepsilon>0$ | fix the opponent's challenge.
2. Take $\delta>0$ from continuity at $c$ | definition 5.1.1.
3. Since $x_n\to c$ there is $N$ with $|x_n-c|<\delta$ for $n\ge N$ | definition of convergence, applied with the number $\delta$.
4. Then $|f(x_n)-f(c)|<\varepsilon$ for $n\ge N$, so $f(x_n)\to f(c)$ | step 2 applied to $x=x_n\in A$.
($\Leftarrow$, by contrapositive)
5. Suppose $f$ is not continuous at $c$: $\exists\varepsilon_0>0$ such that for every $\delta>0$ there is $x\in A$ with $|x-c|<\delta$ and $|f(x)-f(c)|\ge\varepsilon_0$ | negation M03.
6. Take $\delta=1/n$: get $x_n\in A$, $|x_n-c|<1/n$, $|f(x_n)-f(c)|\ge\varepsilon_0$ | one point for every $n$ (M08).
7. $x_n\to c$ but $f(x_n)\not\to f(c)$ | by squeeze on $|x_n-c|<1/n$; and the gap $\ge\varepsilon_0$ for all $n$. This contradicts the hypothesis. ∎
Note: steps 5-7 are also the proof of **Thm 5.1.4 (Discontinuity Criterion)** [3-6]: "$f$ discontinuous at $c$ iff such a sequence exists"; the "if" part is step 1-4 read backwards (if $f$ were continuous the sequence would have to satisfy $f(x_n)\to f(c)$).

### 3.3 Thm 5.3.2 Boundedness Theorem [6; 10 if combined with remarks on hypotheses]
KNOW: $f$ continuous on $[a,b]$. WANT: $\exists M:\ |f|\le M$. TOOL: contradiction + BW + SC.
1. Suppose $f$ not bounded on $I$. Then for each $n\in\mathbb N$ there is $x_n\in I$ with $|f(x_n)|>n$ | M03 (unbounded) with $M=n$.
2. $(x_n)\subseteq[a,b]$ is bounded, so BW 3.4.8 gives a subsequence $(x_{n_r})\to x$ | boundedness of $I$ is used here.
3. $a\le x_{n_r}\le b\Rightarrow x\in[a,b]$ (Thm 3.2.6) | closedness of $I$ is used here.
4. $f$ is continuous at $x$, so $f(x_{n_r})\to f(x)$ | continuity used here, via SC 5.1.3.
5. A convergent sequence is bounded (3.2.2), but $|f(x_{n_r})|>n_r\ge r$ is unbounded; contradiction | $n_r\ge r$ since $n_1<n_2<\cdots$.
6. Hence $f$ is bounded. ∎
Hypothesis map: bounded -> step 2; closed -> step 3; continuous -> step 4. Counterexamples: K16.

### 3.4 Thm 5.3.4 Maximum-Minimum Theorem [10]
KNOW: continuous on $[a,b]$. WANT: $x^*,x_*\in I$ with $f(x_*)\le f(x)\le f(x^*)$. TOOL: Thm 5.3.2 (so sup, inf exist), $\sup$-approximation, BW.
1. $f(I)$ is nonempty and bounded (5.3.2); let $s^*=\sup f(I)$, $s_*=\inf f(I)$ | Completeness gives existence.
2. For each $n$, $s^*-1/n$ is not an upper bound, so pick $x_n\in I$ with $s^*-1/n<f(x_n)\le s^*$ | definition of sup (M09).
3. BW: subsequence $x_{n_r}\to x^*$; $x^*\in I$ by 3.2.6 | $I$ bounded and closed.
4. $f(x_{n_r})\to f(x^*)$ | continuity + SC.
5. Squeeze: $s^*-1/n_r<f(x_{n_r})\le s^*$ forces $f(x_{n_r})\to s^*$ | Thm 3.2.7.
6. Limits are unique: $f(x^*)=s^*\ge f(x)$ for all $x\in I$ | uniqueness of limits; $s^*$ upper bound.
7. For the minimum: repeat with $\inf$ (choose $s_*<f(x_n)<s_*+1/n$), or apply steps 1-6 to $-f$ | book leaves $x_*$ to the reader. ∎
Mark scheme (10): statement 1, step 1 (bounded via 5.3.2) 1, approximating sequence 2, BW and $x^*\in I$ 2, continuity+squeeze 2, conclusion 1, minimum 1.

### 3.5 Thm 5.3.5 Location of Roots (Bisection) [10]
KNOW: $f$ continuous on $[a,b]$, $f(a)<0<f(b)$. WANT: $c\in(a,b)$, $f(c)=0$. TOOL: bisection, NIP, SC, 3.2.6.
1. Put $I_1=[a_1,b_1]=[a,b]$, midpoint $p_1$. If $f(p_1)=0$ stop. If $f(p_1)>0$ set $I_2=[a_1,p_1]$; if $f(p_1)<0$ set $I_2=[p_1,b_1]$ | keep a sign change: $f(a_2)<0<f(b_2)$.
2. Repeat; either some $f(p_n)=0$ (done) or we get nested $I_n=[a_n,b_n]$ with $f(a_n)<0<f(b_n)$ | induction preserves the sign pattern.
3. $b_n-a_n=(b-a)/2^{n-1}\to0$ | each step halves the length.
4. NIP 2.5.2: there is $c\in\bigcap I_n$; since $a_n\le c\le b_n$ and $b_n-a_n\to0$, $a_n\to c$ and $b_n\to c$ | squeeze $|a_n-c|\le b_n-a_n$.
5. $f$ continuous at $c$: $f(a_n)\to f(c)$ and $f(b_n)\to f(c)$ | SC.
6. $f(a_n)<0\Rightarrow f(c)\le0$ and $f(b_n)>0\Rightarrow f(c)\ge0$ (Thm 3.2.6; strict inequalities weaken to $\le,\ge$ in the limit). So $f(c)=0$ | trap: the limit of negatives may be $0$, not negative.
7. $c\ne a,b$ since $f(a)<0<f(b)$, so $c\in(a,b)$. Case $f(a)>0>f(b)$: apply to $-f$ | $-f$ has $-f(a)<0<-f(b)$. ∎
Mark scheme: statement 2, construction 3, NIP+limits 2, continuity+sign argument 2, conclusion 1.
**Optional alternative (Ex 5.3.11, $\sup$ proof)** [6]: $W=\{x\in I:f(x)<0\}\ni a$, bounded; $w=\sup W$. If $f(w)<0$: then $w<b$ and continuity gives $f<0$ on some $(w,w+\eta)$, contradicting $\sup$. If $f(w)>0$: $f>0$ on $(w-\eta,w]$, so no point of $W$ lies there, making $w-\eta$ an upper bound, contradiction. So $f(w)=0$.
**Bisection error (Ex 5.3.10):** midpoint $p_n$ of $I_n$ has $|p_n-c|\le(b-a)/2^n$; for length 1 and $<10^{-5}$ need $2^n>10^5$, i.e. $n\ge17$ ($2^{-16}=1.53\times10^{-5}$ too big; $2^{-17}=7.6\times10^{-6}$ works).

### 3.6 Thm 5.3.7 Bolzano's Intermediate Value Theorem [6]
1. WLOG treat $a<b$; set $g(x)=f(x)-k$ | shift so the target is $0$.
2. $g$ continuous, $g(a)<0<g(b)$ | from $f(a)<k<f(b)$.
3. 5.3.5 gives $c\in(a,b)$ with $g(c)=0$, so $f(c)=k$ | direct application.
4. If $b<a$ use $h(x)=k-f(x)$: $h(b)<0<h(a)$; 5.3.5 on $[b,a]$ gives $c$ with $h(c)=0$ | order of endpoints reversed. ∎

### 3.7 Cor 5.3.8 [3-6]
1. By 5.3.4 pick $c_*,c^*\in I$ with $f(c_*)=\inf f(I)\le k\le\sup f(I)=f(c^*)$ | extremes are attained.
2. If $k$ equals either extreme, take $c=c_*$ or $c^*$. Otherwise $f(c_*)<k<f(c^*)$ and IVT on the interval between $c_*,c^*$ gives $c$ | endpoint cases need no IVT. ∎

### 3.8 Thm 5.3.9 $f([a,b])=[m,M]$ [6]
1. $m=\inf f(I),\ M=\sup f(I)$ exist and belong to $f(I)$ (5.3.4); so $f(I)\subseteq[m,M]$ | every value lies between inf and sup.
2. If $k\in[m,M]$ Cor 5.3.8 gives $c\in I$ with $f(c)=k$; so $[m,M]\subseteq f(I)$ | surjectivity onto $[m,M]$.
3. $f(I)=[m,M]$ | double inclusion. ∎ Warning: not $[f(a),f(b)]$ (Section 4.8).

### 3.9 Thm 5.3.10 Preservation of Intervals [6]
1. Take $\alpha<\beta$ in $f(I)$: $\alpha=f(a)$, $\beta=f(b)$ for some $a,b\in I$ | definition of image.
2. For $k\in(\alpha,\beta)$, IVT 5.3.7 gives $c\in I$ (between $a$ and $b$) with $f(c)=k$ | $I$ is an interval, so $c\in I$.
3. So $[\alpha,\beta]\subseteq f(I)$ | endpoints already in $f(I)$.
4. $f(I)$ has the property "$x<y$ in the set $\Rightarrow[x,y]\subseteq$ set", so by 2.5.1 it is an interval (it has $\ge2$ points unless $f$ constant on $I$, in which case it is a single point = degenerate interval) | characterisation of intervals. ∎

### 3.10 Thm 5.4.2 Nonuniform Continuity Criteria [3-6] (book: left to the reader)
(i)$\Rightarrow$(ii): negate Def 5.4.1 (M03): $\exists\varepsilon_0\,\forall\delta\,\exists x_\delta,u_\delta\in A$ with $|x_\delta-u_\delta|<\delta$ and $|f(x_\delta)-f(u_\delta)|\ge\varepsilon_0$ | pure logic.
(ii)$\Rightarrow$(iii): $\delta=1/n$ gives $x_n,u_n$, $|x_n-u_n|<1/n\to0$ | one pair per $n$.
(iii)$\Rightarrow$(i): if $f$ were UC, take $\delta(\varepsilon_0)$; $x_n-u_n\to0$ gives $n$ with $|x_n-u_n|<\delta(\varepsilon_0)$, hence $|f(x_n)-f(u_n)|<\varepsilon_0$, contradiction. ∎

### 3.11 Thm 5.4.3 Uniform Continuity Theorem [10]
KNOW: $f$ continuous on $I=[a,b]$. WANT: UC. TOOL: 5.4.2(iii)-type contradiction, BW, SC.
1. Suppose $f$ is not UC on $I$. By 5.4.2 there are $\varepsilon_0>0$ and $(x_n),(u_n)$ in $I$ with $|x_n-u_n|<1/n$ and $|f(x_n)-f(u_n)|\ge\varepsilon_0$ | negation with $\delta=1/n$.
2. $I$ bounded, so BW gives $x_{n_k}\to z$; $z\in I$ since $I$ closed | same pattern as 5.3.2.
3. $|u_{n_k}-z|\le|u_{n_k}-x_{n_k}|+|x_{n_k}-z|<1/n_k+|x_{n_k}-z|\to0$, so $u_{n_k}\to z$ | triangle inequality: both sequences squeeze together to the same point.
4. $f$ is continuous at $z\in I$: $f(x_{n_k})\to f(z)$ and $f(u_{n_k})\to f(z)$ | SC.
5. So $|f(x_{n_k})-f(u_{n_k})|\to0$, contradicting $\ge\varepsilon_0$ for all $k$ | uses subtraction of limits.
6. Hence $f$ is UC. ∎
Mark scheme: statement 1, negation + sequences 3, BW + $z\in I$ 2, second sequence same limit 2, continuity at $z$ + contradiction 2.

### 3.12 Thm 5.4.5 Lipschitz $\Rightarrow$ UC [3-6]
1. Given $\varepsilon>0$ put $\delta=\varepsilon/K$ | $\delta$ depends on $\varepsilon$ and the constant $K$ only (no $x$).
2. If $|x-u|<\delta$ then $|f(x)-f(u)|\le K|x-u|<K\delta=\varepsilon$ | the Lipschitz inequality. ∎ (Converse false: K30.)

### 3.13 Thm 5.4.7 UC maps Cauchy to Cauchy [6]
1. Let $(x_n)$ Cauchy in $A$, $\varepsilon>0$; choose $\delta$ for $\varepsilon$ by UC | the same $\delta$ will serve every pair of terms.
2. Cauchy: $\exists H(\delta)$: $|x_n-x_m|<\delta$ for $n,m>H(\delta)$ | definition applied with $\delta$ in the role of $\varepsilon$.
3. Then $|f(x_n)-f(x_m)|<\varepsilon$ for $n,m>H(\delta)$; so $(f(x_n))$ is Cauchy. ∎ (Plain continuity is not enough: $1/x$, $x_n=1/n$.)

### 3.14 Thm 5.4.8 Continuous Extension [10]
($\Leftarrow$) Continuous on $[a,b]$ $\Rightarrow$ UC on $[a,b]$ (5.4.3) $\Rightarrow$ UC on the subset $(a,b)$ | restriction keeps the same $\delta$. [2 marks]
($\Rightarrow$) extend to $a$ (for $b$ the same).
1. Let $x_n\in(a,b)$, $x_n\to a$. Convergent $\Rightarrow$ Cauchy (3.5.3) | P10.
2. By 5.4.7 $(f(x_n))$ is Cauchy, hence convergent to some $L$ (3.5.5) | UC is used here, not mere continuity.
3. $L$ does not depend on the sequence: if $u_n\to a$ also, then $u_n-x_n\to0$ and by UC $f(u_n)-f(x_n)\to0$, so $f(u_n)\to L$ | pair argument (M06).
4. By the sequential criterion for limits (4.1.8), $\lim_{x\to a^+}f(x)=L$ | every sequence gives the same value.
5. Define $f(a):=L$; then $f$ is continuous at $a$ (Rem 5.1.7); likewise at $b$. The extension is continuous on $[a,b]$: at interior points as before, at $a,b$ by step 5. ∎
Consequences: $\sin(1/x)$ not UC on $(0,b]$ (no limit at 0); $x\sin(1/x)$ UC on $(0,b]$ (limit 0).

### 3.15 Thm 5.4.10 / Cor 5.4.11 step-function approximation [6]
1. $f$ UC on $[a,b]$ (5.4.3): get $\delta(\varepsilon)$ | the one place continuity enters.
2. Choose $m$ with $h=(b-a)/m<\delta(\varepsilon)$ | Archimedes. Take $I_1=[a,a+h]$, $I_k=(a+(k-1)h,a+kh]$ | disjoint cover of $[a,b]$.
3. Define $s_\varepsilon(x)=f(a+kh)$ on $I_k$ (right-endpoint value) | step function, finitely many pieces.
4. $x\in I_k\Rightarrow|x-(a+kh)|\le h<\delta\Rightarrow|f(x)-s_\varepsilon(x)|<\varepsilon$ | UC. ∎

### 3.16 Thm 5.4.13 piecewise linear approximation [6]
1-2. As 3.15; nodes $x_k=a+kh$.
3. $g_\varepsilon$ on $[x_{k-1},x_k]$ is the chord through $(x_{k-1},f(x_{k-1}))$, $(x_k,f(x_k))$ | continuous because chords meet at nodes.
4. For $x\in[x_{k-1},x_k]$, $x=(1-\lambda)x_{k-1}+\lambda x_k$, $\lambda\in[0,1]$: $g_\varepsilon(x)=(1-\lambda)f(x_{k-1})+\lambda f(x_k)$ | linear interpolation.
5. $f(x)-g_\varepsilon(x)=(1-\lambda)[f(x)-f(x_{k-1})]+\lambda[f(x)-f(x_k)]$, and both brackets are $<\varepsilon$ in modulus since $|x-x_{k-1}|,|x-x_k|\le h<\delta$ | the "exercise" the book skips; a convex combination of numbers of size $<\varepsilon$ has size $<\varepsilon$. ∎

### 3.17 Ex 5.1.6(g) Dirichlet function [6]
1. $c$ rational: choose irrational $x_n\to c$ (e.g. $x_n=c+\sqrt2/n$) | density (Cor 2.4.9); then $f(x_n)=0\to0\ne1=f(c)$. 2. $b$ irrational: choose rational $y_n\to b$ (decimal truncations) | Density 2.4.8; $f(y_n)=1\ne0=f(b)$. 3. By 5.1.4 $f$ is discontinuous at every point. ∎

### 3.18 Ex 5.1.6(h) Thomae's function [6]
Rational $a=m/n$ (lowest terms): irrational $x_n\to a$ in $A$, $h(x_n)=0$, $h(a)=1/n>0$; discontinuous. Irrational $b>0$: given $\varepsilon$, pick $n_0$ with $1/n_0<\varepsilon$ (Archimedes). In $(b-1,b+1)$ only finitely many rationals have denominator $<n_0$ (for each $q<n_0$, the numerators satisfy $(b-1)q<p<(b+1)q$: finitely many $p$). Choose $\delta>0$ smaller than the distance from $b$ to each of them ($b$ itself is not one of them, being irrational). If $|x-b|<\delta$, $x\in A$: $x$ is irrational ($h=0$) or rational with denominator $\ge n_0$, so $|h(x)-h(b)|=h(x)\le1/n_0<\varepsilon$. ∎

### 3.19 Optional: Weierstrass 5.4.14 (statement only)
Proof is omitted in B (see B, *Elementary Real Analysis*, pp.169-172). Optional enrichment [general knowledge, not in B]: on $[0,1]$ the Bernstein polynomials $B_n(f)(x)=\sum_{k=0}^n f(k/n)\binom nk x^k(1-x)^{n-k}$ converge uniformly to $f$; general $[a,b]$ by an affine change of variable. State only; no exam asks the proof.

---
## 4. WORKED EXAMPLES (all recomputed; $\delta$ explicit)

### 4.1 B 5.1.6 (a)-(d)
(a) $f(x)=b$: $|f(x)-f(c)|=0<\varepsilon$ for every $x$; any $\delta>0$ works (say $\delta=1$). Continuous on $\mathbb R$.
(b) $g(x)=x$: $|g(x)-g(c)|=|x-c|<\varepsilon$ whenever $|x-c|<\delta:=\varepsilon$.
(c) $h(x)=x^2$ at $c$: **scratch** $|x^2-c^2|=|x-c||x+c|$; if $|x-c|<1$ then $|x+c|\le|x-c|+2|c|<1+2|c|$; want $(1+2|c|)|x-c|<\varepsilon$. **Proof** $\delta=\min\{1,\ \varepsilon/(1+2|c|)\}$. Check: $c=2$, $\varepsilon=0.1$: $\delta=\min\{1,0.1/5\}=0.02$; $x=2.019$: $|x^2-4|=0.0764<0.1$ ok. $c=3,\varepsilon=0.01$: $\delta=\min\{1,0.01/7\}=1/700\approx0.001429$. Polynomials: sums/products of continuous functions are continuous (by SC + 3.2.3); or directly: $x_n\to c\Rightarrow p(x_n)\to p(c)$.
(d) $\varphi(x)=1/x$ on $x>0$ at $c>0$: **scratch** $|1/x-1/c|=|c-x|/(xc)$; if $|x-c|<c/2$ then $x>c/2$ so $1/x<2/c$, hence $\le2|x-c|/c^2$; want $<\varepsilon$. **Proof** $\delta=\min\{c/2,\ c^2\varepsilon/2\}$. Check $c=0.5,\varepsilon=0.1$: $\delta=\min\{0.25,0.0125\}=0.0125$; $x=0.5125$: $|1/x-2|=|1.9512-2|=0.0488<0.1$ ok. (Exact best $\delta$ is $\varepsilon c^2/(1+\varepsilon c)=0.0238$ here.)
(e) $1/x$ at $0$: not defined; and $\lim_{x\to0}1/x$ does not exist ($x_n=1/n\Rightarrow f(x_n)=n$).
(f) $\operatorname{sgn}$ at $0$: $x_n=1/n\Rightarrow\operatorname{sgn}x_n=1\not\to0=\operatorname{sgn}0$ (also $-1/n\to-1$); continuous elsewhere (constant $\pm1$ near $c\ne0$: $\delta=|c|$).
(g) Dirichlet; (h) Thomae: Section 3.17-3.18.

### 4.2 B 5.1.7-5.1.8, Ex 5.1.5
- $f(x)=\dfrac{x^2+x-6}{x-2}=\dfrac{(x+3)(x-2)}{x-2}=x+3$ ($x\ne2$): $\lim_{x\to2}f=5$; define $f(2):=5$ and it is continuous (Ex 5.1.5: yes).
- $\sin(1/x)$: $x_n=\dfrac1{n\pi}\Rightarrow\sin=0$; $y_n=\dfrac2{(4n+1)\pi}\Rightarrow\sin\big((4n+1)\pi/2\big)=1$. Two sequences $\to0$ with different limits; no limit, so no continuous extension.
- $F(x)=x\sin(1/x)$, $F(0)=0$: $|F(x)-F(0)|\le|x|<\varepsilon$ if $\delta=\varepsilon$. (Squeeze between $y=\pm|x|$.) Continuous at $0$.

### 4.3 Exercises 5.1 (recomputed answers)
- Ex 5.1.4: (a) $[x]$: continuous exactly at $x\notin\mathbb Z$. (b) $x[x]$: at integer $n$ left limit $n(n-1)$, right limit $n^2$, equal iff $n=0$: continuous at all non-integers and at $0$. (c) $[\sin x]$: $=0$ where $0\le\sin x<1$, $=-1$ where $-1\le\sin x<0$, $=1$ only where $\sin x=1$. Discontinuous at $x=k\pi$ ($k\in\mathbb Z$) AND at $x=\pi/2+2k\pi$ (isolated value $1$); continuous at $3\pi/2+2k\pi$ (there $\sin\in[-1,0)$ on both sides, value $-1$) and everywhere else. **(book trap: students forget $\pi/2+2k\pi$)**. (d) $[1/x]$ ($x\ne0$): discontinuous exactly at $x=1/n$, $n\in\mathbb Z\setminus\{0\}$.
- Ex 5.1.13: $g=2x$ (rational), $x+3$ (irrational). Continuous only at $x=3$ ($2x=x+3\iff x=3$); at $c=3$ $\delta=\varepsilon/2$ works ($|g(x)-6|\le2|x-3|$).
- Ex 5.1.7: $f(c)>0$, take $\varepsilon=f(c)/2$; then $f(x)>f(c)/2>0$ on $V_\delta(c)$.
- Ex 5.1.12: $f$ continuous, $f=0$ on $\mathbb Q$: for $x$ choose rationals $r_n\to x$; $f(x)=\lim f(r_n)=0$.
- Ex 5.1.10 / K08: $\big||x|-|c|\big|\le|x-c|$, so $\delta=\varepsilon$. (**CALC-24 Q12**.)
- **CALC-24 Q3:** $f(x)=x^2$ ($x\le2$), $x+10$ ($x>2$): $f(2)=4$, $\lim_{x\to2^-}=4$, $\lim_{x\to2^+}=12$. Not continuous at 2 (jump 8). Sequence: $x_n=2+1/n$, $f(x_n)=12+1/n\to12\ne4$. (Continuous version would be $x+2$ for $x>2$.)

### 4.4 B 5.3 inline examples
- $1/x$ on $(0,\infty)$: unbounded; $x_M=1/(M+1)$, $f(x_M)=M+1>M$. $1/(2x)$ (MAT22M-Q6): $x_M=\dfrac1{2(M+1)}$, $f=M+1>M$.
- Extremes of $1/x$: none on $(0,\infty)$, none on $(0,1)$ (decreasing from $\infty$ to $1$, $\inf=1$ not attained), both on $[1,2]$ (max $1$ at 1, min $\frac12$ at 2), max but no min on $[1,\infty)$ ($\inf=0$ not attained), neither on $(1,\infty)$. $x^2$ on $[-1,1]$: max points $\pm1$, min point $0$.
- Fail-without-hypothesis for 5.3.4: $f(x)=x$ on $(0,1)$ has neither max nor min ($\sup=1$, $\inf=0$ not attained) [MAT21-Q14]; $f(x)=x$ on $[0,\infty)$ has min but no max; $h$ discontinuous: $h(x)=x$ ($0\le x<1$), $h(1)=0$ on $[0,1]$ has no max ($\sup=1$ not attained).

### 4.5 Root location (5.3.5) applications
- $f(x)=xe^x-2$: $f(0)=-2<0$, $f(1)=e-2=0.7183>0$; root in $(0,1)$ (actual root $0.852605$) [MAT21-Q17].
- $q(x)=6x^3-3x^2+2$ [MAT22M-Q12 / MAT21M-Q7]: $q(-1)=-7$, $q(0)=2$, $q(1)=5$. Zero in $(-1,0)\subset(-1,1)$ (actual root $-0.5606$). No zero in $(0,1)$: $q'=6x(3x-1)$, minimum on $[0,\infty)$ at $x=1/3$ equals $q(1/3)=17/9>0$. So answer **(C)**.
- Ex 5.3.4 odd degree: $p(x)=x^n+a_{n-1}x^{n-1}+\dots$, $n$ odd; $p(x)/x^n\to1$ so $p>0$ for large positive $x$, $<0$ for large negative; 5.3.5.
- Ex 5.3.5: $p(x)=x^4+7x^3-9$: $p(1)=-1$, $p(2)=63$ (root in $(1,2)$, actual $1.0384$); $p(-8)=503$, $p(-7)=-9$ (root in $(-8,-7)$, actual $-7.0259$). Two real roots. (Other two roots are complex.)
- Ex 5.3.7: $g(x)=x-\cos x$: $g(0)=-1$, $g(\pi/2)=\pi/2>0$; root $0.739085$.
- Ex 5.3.6 (equator): $g(x)=f(x)-f(x+\tfrac12)$, $g(0)=f(0)-f(\tfrac12)$, $g(\tfrac12)=f(\tfrac12)-f(1)=f(\tfrac12)-f(0)=-g(0)$: opposite signs (or zero), so root $c\in[0,\tfrac12]$.
- IVT application (K21): $f(x)=x^2$ on $[1,2]$, $f(1)=1<2<4=f(2)$, so $\exists c\in(1,2)$, $c^2=2$.

### 4.6 Preservation: images (B p.139)
$f(x)=\dfrac1{x^2+1}$: $f((-1,1))=(\tfrac12,1]$ (not open); $f([0,\infty))=(0,1]$ (not closed); $f(\mathbb R)=(0,1]$; $f([-1,1])=[\tfrac12,1]$.

### 4.7 B 5.4 (UC)
- $g=1/x$, $x>0$ at $u$: $\delta(\varepsilon,u)=\min\{u/2,u^2\varepsilon/2\}$ (flag 0.2); $\inf_u\delta=0$: no uniform $\delta$.
- Not UC (5.4.2): $x_n=1/n$, $u_n=1/(n+1)$: $x_n-u_n=\dfrac1{n(n+1)}\to0$, $|g(x_n)-g(u_n)|=|n-(n+1)|=1$, $\varepsilon_0=1$.
- $1/x$ on $[a,\infty)$, $a>0$: $|1/x-1/u|=|x-u|/(xu)\le|x-u|/a^2$; Lipschitz $K=1/a^2$, $\delta=\varepsilon a^2$ (Ex 5.4.1). On $[a,1)$ same. On $(0,1)$ or $(0,\infty)$: not UC. (MTS22M-Q2 with $g=1/x$: **C**.)
- $x^2$ on $[0,b]$: $|x^2-u^2|=|x+u||x-u|\le2b|x-u|$; $K=2b$, $\delta=\varepsilon/(2b)$. Not Lipschitz on $[0,\infty)$; not UC there: $x_n=n$, $u_n=n+1/n$: $x_n-u_n=-1/n\to0$, $|f(x_n)-f(u_n)|=2+1/n^2\ge2=:\varepsilon_0$ (Ex 5.4.3a).
- $\sin(1/x)$ on $(0,\infty)$: $x_n=\dfrac1{2n\pi+\pi/2}$ (value 1), $u_n=\dfrac1{2n\pi}$ (value 0): $x_n-u_n=-\dfrac{\pi/2}{(2n\pi+\pi/2)(2n\pi)}\to0$, gap $=1$, $\varepsilon_0=1$ (Ex 5.4.3b). Also by 5.4.8 (no limit at 0).
- $1/x^2$ on $[1,\infty)$: $\le2|x-u|$ (Lipschitz $K=2$); not UC on $(0,\infty)$: $x_n=1/n,u_n=1/(n+1)$, gap $(n+1)^2-n^2=2n+1\ge3$ (Ex 5.4.2).
- $\sin x$ on $\mathbb R$: $|\sin x-\sin u|=2|\cos\frac{x+u}2||\sin\frac{x-u}2|\le|x-u|$; Lipschitz $K=1$, $\delta=\varepsilon$.
- $f(x)=\dfrac1{1+x^2}$ on $\mathbb R$ (K33): $f(x)-f(u)=\dfrac{(u-x)(u+x)}{(1+x^2)(1+u^2)}$; $\dfrac{|x|}{1+x^2}\le\dfrac12$ and $\dfrac1{1+u^2}\le1$, so $\dfrac{|u+x|}{(1+x^2)(1+u^2)}\le\frac12+\frac12=1$. Lipschitz $K=1$; $\delta=\varepsilon$. (True best constant $3\sqrt3/8\approx0.6495$.)
- $\sqrt x$ (K30/K31): continuity at $c>0$: $|\sqrt x-\sqrt c|\le|x-c|/\sqrt c$, $\delta=\varepsilon\sqrt c$; at $0$: $\delta=\varepsilon^2$. UC on $[0,\infty)$: for $x\ge u\ge0$, $\sqrt x\le\sqrt u+\sqrt{x-u}$ (square both sides), so $|\sqrt x-\sqrt u|\le\sqrt{|x-u|}$, and $\delta=\varepsilon^2$ works on the whole half-line (clean one-line proof; the book's route is [0,2] by 5.4.3 + [1,∞) Lipschitz $\frac12$, with $\delta=\min\{1,\delta_I,\delta_J\}$; the "1" is essential: if $x<1\le u$ and $|x-u|<1$ then $u<2$ so both lie in $[0,2]$). Not Lipschitz on $[0,1]$: for any $K>0$ put $x=1/(K+1)^2\in(0,1)$: $\sqrt x=\frac1{K+1}>\frac K{(K+1)^2}=Kx$. Check $K=5$: $x=1/36$, $\sqrt x=0.1667>5/36=0.1389$.
- $x\sin(1/x)$: continuous extension $F(0)=0$ on $[0,b]$; UC on $(0,b]$ by 5.4.8.

### 4.8 B 5.3.9 warning example
$f(x)=x^3-3x$ on $[-1.5,1.5]$: $f(-1.5)=1.125$, $f(1.5)=-1.125$, local max $f(-1)=2$, local min $f(1)=-2$. $f(I)=[-2,2]$, NOT $[f(a),f(b)]$. Cor 5.3.8 with $k=1$: $c^3-3c=1$ has roots $2\cos20^\circ=1.879$, $2\cos100^\circ=-0.3473$, $2\cos140^\circ=-1.532$; the one in $[-1.5,1.5]$ is $c=-0.3473$.

### 4.9 Bisection for $f(x)=xe^x-2$ on $[0,1]$ (B 5.3.6 is out of scope; computed here for the figure)
n | $[a_n,b_n]$ | $p_n$ | $f(p_n)$ | next
1 | [0,1] | 0.5 | $-1.1756$ | right half
2 | [0.5,1] | 0.75 | $-0.4122$ | right
3 | [0.75,1] | 0.875 | $+0.0990$ | left
4 | [0.75,0.875] | 0.8125 | $-0.1690$ | right
5 | [0.8125,0.875] | 0.84375 | $-0.0382$ | right
6 | [0.84375,0.875] | 0.859375 | $+0.0296$ | left
7 | [0.84375,0.859375] | 0.8515625 | $-0.0045$ | right
8 | [0.8515625,0.859375] | 0.85546875 | $+0.0125$ | left. Root $0.852605$.

### 4.10 B 5.4.9-5.4.13 approximations
- Step function s of B p.145: pieces $[-2,-1)\to0$; $[-1,0]\to1$; $(0,\frac12)\to\frac12$; $[\frac12,1)\to3$; $[1,3]\to-2$; $(3,4]\to2$ (6 pieces cover $[-2,4]$ without overlap). Distinct values $0,1,\frac12,3,-2,2$.
- $f(x)=x$ on $[0,1]$, $\varepsilon=0.1$: $\delta=\varepsilon=0.1$; need $h<0.1$ STRICTLY, so $m=11$ ($m=10$ gives $h=0.1$ and at $x=0$: $|f(0)-s(0)|=0.1\not<0.1$). $s=k/11$ on $I_k$; max error $=1/11=0.0909<0.1$.
- $f(x)=x^2$ on $[0,1]$, $\varepsilon=0.25$: $|x^2-y^2|\le2|x-y|$, $\delta=0.125$, $m=9$ ($h=0.111<0.125$). $s=k^2/81$ on $((k-1)/9,k/9]$. Actual max error $=\max(2k-1)/81=17/81=0.2099<0.25$ (Figure F17).
- Same $f$ piecewise linear with $m=4$ nodes $0,\frac14,\frac12,\frac34,1$: interpolation error on a piece of width $h$ is $\le h^2/4=1/64=0.0156$. The book's recipe would give $\delta=\varepsilon/2$, $m=41$ for $\varepsilon=0.05$; the proof is sufficient, not minimal (F18).
- Weierstrass: $1/x$ on $(0,1]$ cannot be uniformly approximated by polynomials: polynomials are bounded on $[0,1]$, so if $|1/x-p|<1$ then $1/x$ would be bounded.

---
## 5. PYQ MAP (every in-scope M1 tag -> K; model-paper slot in last column)
Source papers: MTS25 (Mar 2025, 2+5+10 marks), MTS26 (Apr 2026, 2+5+10), MAT22 (Mar 2022, 1/4/7/13), MAT21 (Mar 2021 special, 1/6/9/15), MTS22 (Mar 2022, pp.1 only, 3 marks), MCQ papers (1 mark each), CALC-24 (FYUGP MAT1MN102, 3/6 marks).

### 5.1 Descriptive questions
| tag | marks | question (short) | K | model slot |
|---|---|---|---|---|
| MTS25-Q1 | 2 | Prove polynomial functions are continuous on $\mathbb R$ | K06 | B2 |
| MTS25-Q2 | 2 | Give an example of a UC function that is not Lipschitz | K30 | A16 |
| MTS25-Q3 | 2 | State Weierstrass approximation theorem | K40 | A20 |
| MTS25-Q16 | 5 | Prove Dirichlet's function is discontinuous on $\mathbb R$ | K11 (K04) | B4 |
| MTS25-Q17 | 5 | State and prove Preservation of Intervals | K24 | B9 |
| MTS25-Q24 | 10 | State and prove Location of Roots Theorem | K19 | C1 |
| MTS26-Q1 | 2 | State Discontinuity Criterion | K04 | A3 |
| MTS26-Q2 | 2 | Example of a continuous function that is not bounded | K14 | A9 |
| MTS26-Q3 | 2 | Define Lipschitz function | K28 | A15 |
| MTS26-Q16 | 5 | State and prove Boundedness Theorem | K15 | B6 |
| MTS26-Q17 | 5 | $\forall\varepsilon$ step function $s_\varepsilon$ with $|f-s_\varepsilon|<\varepsilon$ (prove) | K38 (K37) | B15 |
| MTS26-Q24a | 10 | State and prove Uniform Continuity Theorem | K27 | C3 |
| MTS26-Q24b | 10 (part) | Prove $\sqrt x$ is UC on $[0,\infty)$ | K31 | B12 |
| MAT22-Q1 | 1 | Define uniform continuity | K25 | A14 |
| MAT22-Q2 | 1 | State Weierstrass approximation theorem | K40 | A20 |
| MAT22-Q5 | 1 | Define step function | K37 | A19 |
| MAT22-Q13 | 4 | $\inf f(I)\le k\le\sup f(I)\Rightarrow\exists c:f(c)=k$ | K22 | B7 |
| MAT22-Q14 | 4 | State and prove Preservation of Intervals | K24 | B9 |
| MAT22-Q15 | 4 | UC function need not be Lipschitz (example) | K30 | A16 |
| MAT22-Q27 | 7 | Continuous on closed bounded interval $\Rightarrow$ bounded | K15 | B6 |
| MAT22-Q28 | 7 | State and prove UC Theorem | K27 | C3 |
| MAT22-Q29 | 7 | State and prove Continuous Extension Theorem | K36 (K35) | C4 |
| MAT22-Q36a | 13 | State and prove Max-Min Theorem | K18 | C2 |
| MAT22-Q36b | 13 (part) | Test UC of $\sqrt x$ on $[0,2]$ | K31 (K27) | B12 |
| MAT21-Q1 | 1 | State Bolzano's IVT | K21 | A13 |
| MAT21-Q2 | 1 | Define UC function | K25 | A14 |
| MAT21-Q3 | 1 | Define step function | K37 | A19 |
| MAT21-Q13 | 6 | State Boundedness Thm; example failing if $f$ discontinuous | K15 + K16 | B6 (statement) + A10 (example) |
| MAT21-Q14 | 6 | State Max-Min Thm; example failing if interval not closed | K18 + K16 | C2 (statement) + A10 (example) |
| MAT21-Q15 | 6 | Continuous image of closed bounded interval is closed bounded interval | K23 | B8 |
| MAT21-Q16 | 6 | State non-uniform continuity criteria; apply to $1/x$ on $(0,\infty)$ | K26 | B10 |
| MAT21-Q17 | 6 | State Location of Roots; show $xe^x-2=0$ has a root in $(0,1)$ | K19 + K20 | C1 (statement) + A12 (application) |
| MAT21-Q22 | 6 | $f,g$ UC on $\mathbb R$ but $fg$ need not be UC | K34 | B13 |
| MAT21-Q27 | 9 | State and prove UC Theorem | K27 | C3 |
| MAT21-Q28a | 9 | Define Lipschitz function | K28 | A15 |
| MAT21-Q28b | 9 | Lipschitz $\Rightarrow$ UC | K29 | B11 |
| MAT21-Q36a | 15 | UC maps Cauchy sequences to Cauchy sequences | K35 | B14 |
| MTS22-Q1 | 3 | Define continuity; constant function continuous | K01 | A1 |
| MTS22-Q2 | 3 | State Boundedness Thm; is boundedness of interval necessary? example | K15 + K16 | B6 (statement) + A10 (example) |
| MTS22-Q3 | 3 | UC maps Cauchy to Cauchy | K35 | B14 |
| CALC-24-Q3 (related FYUGP) | 3 | Is $f(x)=x^2\ (x\le2)$, $x+10\ (x>2)$ continuous at 2? | K09 | A6 |
| CALC-24-Q12 (related FYUGP) | 6 | Show $|x|$ is continuous everywhere | K08 | A4 |

### 5.2 1-mark MCQs (adapted into Section A questions)
| tag | stem (short) | answer | K | slot |
|---|---|---|---|---|
| MAT22M-Q3 | continuous on $A=\{x\ge0\}$: $\sin x$ / $\sin(1/x)$ / $1/x$ | (A) $\sin x$ ($\sin(1/x)$, $1/x$ undefined at 0) | K10 | A7 |
| MAT22M-Q6 | $f(x)=\frac1{2x}$ on $(0,\infty)$ is | (A) continuous, not bounded | K14 | A9 |
| MAT22M-Q8 / MAT21M-Q6 | break; value $\neq$ limit (limit does not exist) | (B) Jump | K10 | A7 |
| MAT22M-Q9 | hole in graph; value $\ne$ limit | (A) Removable | K13 | A8 |
| MAT22M-Q10 | $\exists x'$: $f(x')\ge f(x)\ \forall x$ | (A) Absolute maximum | K17 | A11 |
| MAT22M-Q11 | $f$ continuous on $I$ has abs max & min if | (B) $I$ closed and bounded (stem garbled) | K18 | C2 (also) |
| MAT22M-Q12 / MAT21M-Q7 | $f=6x^3-3x^2+2$ | (C) zero in $(-1,1)$ | K20 | A12 |
| MAT22M-Q13 / MAT21M-Q8 | "Every continuous is UC / Every UC is continuous" | (B) | K25 | A14 |
| MTS22M-Q1 | Thomae's function | (A) continuous only at irrationals | K12 | B5 (also) |
| MTS22M-Q2 | $g$ UC when $A=(0,1),(-1,0),[a,1),(0,\infty)$ | (C) $[a,1)$, $a>0$ (assumes $g=1/x$; stem lost $g$) | K26 | B10 (also) |
| MTS22M-Q3 | false statement about Lipschitz $f,g$: $cf$, $f+g$, $f^2$, $f-g$ | (C) $f^2$ | K32 | A17 |
| MTS22M-Q4 | $f=1/(1+x^2)$ on $\mathbb R$ | (A) UC on $\mathbb R$ | K33 | A18 |

### 5.3 Exact repeats ("also" groups)
- Define UC: MAT22-Q1 = MAT21-Q2 (+ MCQ MAT22M-Q13 = MAT21M-Q8) -> A14.
- State Weierstrass: MTS25-Q3 = MAT22-Q2 -> A20.
- Define step function: MAT22-Q5 = MAT21-Q3 -> A19.
- Define Lipschitz: MTS26-Q3 = MAT21-Q28a -> A15.
- UC-not-Lipschitz example: MTS25-Q2 = MAT22-Q15 -> A16.
- Boundedness theorem: MTS26-Q16 = MAT22-Q27 = MAT21-Q13(a) = MTS22-Q2(a) -> B6.
- Preservation of intervals: MTS25-Q17 = MAT22-Q14 -> B9.
- UC theorem: MTS26-Q24a = MAT22-Q28 = MAT21-Q27 -> C3.
- Max-Min: MAT22-Q36a = MAT21-Q14(a) -> C2.
- Location of roots: MTS25-Q24 = MAT21-Q17(a) -> C1.
- UC maps Cauchy to Cauchy: MAT21-Q36a = MTS22-Q3 -> B14.
- $\sqrt x$ UC: MTS26-Q24b ($[0,\infty)$) ~ MAT22-Q36b ($[0,2]$) -> B12.
- Repeated MCQs: MAT21M-Q6,7,8 = MAT22M-Q8,12,13.

### 5.4 Ambiguous wording and the most likely reading
- MTS25-Q1 (2 marks) "Prove polynomial functions are continuous": B proves this as 5.2.3(a) (out of scope). Use: $c$ and $x$ continuous (5.1.6(a),(b)); sums and products of convergent sequences converge (3.2.3), so $x_n\to c\Rightarrow p(x_n)\to p(c)$, then SC 5.1.3.
- MTS25-Q16 (5 marks) "Dirichlet function is discontinuous on $\mathbb R$" = "at every point of $\mathbb R$" (B 5.1.6(g)).
- MTS26-Q24b "Prove $g(x)=\sqrt x$ is UC on $A=[0,\infty)$" is a 10-mark question jointly with Q24a; follows B 5.4.6(c).
- MAT22-Q36b "Test UC of $\sqrt x$ on $[0,2]$": continuous on closed bounded $\Rightarrow$ UC (5.4.3); add $\delta=\varepsilon^2$ for a direct proof.
- MAT21-Q13 "boundedness theorem fails if the function is discontinuous": use $h(x)=1/x$ ($x\in(0,1]$), $h(0)=1$ on $[0,1]$ (B p.135).
- MAT21-Q14 "fails if the interval is not closed": $f(x)=x$ on $(0,1)$ (no max/min), or $1/x$ on $(0,1)$.
- MAT21-Q22 "$(f_n)$, $(g_n)$ UC in $\mathbb R$, $(f_n)(g_n)$ not UC": means functions $f,g$ and product $fg$; $f=g=x$.
- MTS22-Q2 "Is boundedness of the interval a necessary condition?": yes; $f(x)=x$ on $[0,\infty)$ (closed, unbounded) is continuous and unbounded.
- MTS26-Q17: statement is 5.4.10 (not 5.4.13).
- MAT22M-Q8/Q9 (jump/removable): not B vocabulary; answers above are the standard calculus meanings.
- MAT22M-Q10 stem has $\exists x'$ with $f(x')\ge f(x)$: absolute maximum.

---
## 6. MODEL PAPER FOR MODULE 1 (40 questions)
Section A: 20 x 3 marks. Section B: 16 x 6 marks. Section C: 4 x 10 marks. Every question has ONE main K; all 40 K appear exactly once as main.

### Section A (3 marks each: define / state / short computation / adapted MCQ)
**A1 [K01]** (src: MTS22-Q1) Define continuity of $f:A\to\mathbb R$ at $c\in A$. Show that the constant function $f(x)=b$ is continuous on $\mathbb R$.
Ans: Def 5.1.1 in $\varepsilon$-$\delta$ words (1). $|f(x)-f(c)|=|b-b|=0<\varepsilon$ for all $x$, so any $\delta$ (say $1$) works (1). True for every $c$: continuous on $\mathbb R$ (1).

**A2 [K02]** (new; B 5.1.2) State the neighbourhood form of continuity at $c$ and the limit condition when $c$ is a cluster point. Why is every function continuous at an isolated point of its domain?
Ans: $f(A\cap V_\delta(c))\subseteq V_\varepsilon(f(c))$ (1); $f(c)=\lim_{x\to c}f(x)$ with (i) defined (ii) limit exists (iii) equal (1). Isolated $c$: some $V_\delta(c)\cap A=\{c\}$, so $|f(x)-f(c)|=0$ (1). Example $A=[0,1]\cup\{2\}$, $c=2$, $\delta=\frac12$.

**A3 [K04]** (src: MTS26-Q1 + new example) State the Discontinuity Criterion. Use it to show that $f(x)=[x]$ (greatest integer function) is discontinuous at $x=1$.
Ans: Criterion (1). $x_n=1-\frac1{n+1}\in[\frac12,1)\to1$, $[x_n]=0\to0$, but $f(1)=1\ne0$ (2).

**A4 [K08]** (src: CALC-24-Q12, related FYUGP) Show that $f(x)=|x|$ is continuous at every point of $\mathbb R$.
Ans: $\big||x|-|c|\big|\le|x-c|$ (reverse triangle) (1); given $\varepsilon$ put $\delta=\varepsilon$ (1); so $|f(x)-f(c)|<\varepsilon$ for $|x-c|<\delta$; $c$ arbitrary (1).

**A5 [K05]** (new; B 5.1.5, 5.1.6(b)) Define continuity on a set $B\subseteq A$. Prove from the $\varepsilon$-$\delta$ definition that $g(x)=x$ is continuous on $\mathbb R$.
Ans: continuous at each point of $B$ (1). $|g(x)-g(c)|=|x-c|<\varepsilon$ when $|x-c|<\delta:=\varepsilon$ (2).

**A6 [K09]** (src: CALC-24-Q3, related FYUGP) Is $f(x)=x^2$ for $x\le2$, $f(x)=x+10$ for $x>2$ continuous at $2$? Why? Which change makes it continuous?
Ans: $f(2)=4$, left limit $4$, right limit $12$; unequal, so not continuous (jump of 8) (2). Sequence $x_n=2+1/n$: $f(x_n)\to12\ne4$. Replace $x+10$ by $x+2$ (1).

**A7 [K10]** (src: MAT22M-Q3, MAT22M-Q8, MAT21M-Q6, adapted) (a) Is $\varphi(x)=1/x$ continuous at $0$? (b) Show $\operatorname{sgn}$ is not continuous at 0 and say what kind of break it is. (c) Which of $\sin x$, $\sin(1/x)$, $1/x$ are continuous functions on $A=\{x\ge0\}$?
Ans: (a) not defined at 0; $x_n=1/n$ gives $n\to\infty$, no limit. (b) one-sided limits $-1$, $1$ differ: **jump**. (c) only $\sin x$ (other two undefined at $0$) -> MCQ (A). (1+1+1)

**A8 [K13]** (src: MAT22M-Q9 adapted; Ex 5.1.5, 5.1.8) Can $f(x)=\dfrac{x^2+x-6}{x-2}$ ($x\ne2$) be defined at $2$ so that it is continuous there? Show that $F(x)=x\sin(1/x)$ ($x\ne0$), $F(0)=0$ is continuous at $0$.
Ans: $f(x)=x+3$, $\lim_{x\to2}=5$; set $f(2)=5$ (removable) (1.5). $|F(x)|\le|x|<\varepsilon$ with $\delta=\varepsilon$ (1.5).

**A9 [K14]** (src: MTS26-Q2, MAT22M-Q6) Define a bounded function. Give an example of a continuous function that is not bounded and prove it.
Ans: $\exists M>0\ \forall x:\ |f(x)|\le M$ (1). $f(x)=1/x$ on $(0,\infty)$ [or $\frac1{2x}$]: for $M>0$, $x_M=\frac1{M+1}$ gives $f(x_M)=M+1>M$ (2); continuous by 5.1.6(d).

**A10 [K16]** (src: MTS22-Q2 part 2, MAT21-Q13 part 2, MAT21-Q14 part 2) Show by examples that the conclusion of the Boundedness Theorem fails if (i) the interval is unbounded, (ii) the interval is not closed, (iii) $f$ is not continuous. Also give a continuous $f$ on a non-closed interval with no absolute maximum.
Ans: (i) $x$ on $[0,\infty)$; (ii) $1/x$ on $(0,1]$; (iii) $h=1/x$ on $(0,1]$, $h(0)=1$, on $[0,1]$ (2). $f(x)=x$ on $(0,1)$: $\sup=1$, $\inf=0$ not attained (1).

**A11 [K17]** (src: MAT22M-Q10 adapted) Define absolute maximum and absolute minimum of $f$ on $A$. Does $f(x)=1/x$ have either on $(0,\infty)$? Find them for $x^2$ on $[-1,1]$.
Ans: def (1). $1/x$: unbounded above, $\inf=0$ not attained: none (1). $x^2$: max $1$ at $\pm1$, min $0$ at $0$ (1).

**A12 [K20]** (src: MAT21-Q17 application part, MAT22M-Q12, MAT21M-Q7) Using the Location of Roots Theorem show that (a) $xe^x-2=0$ has a root in $(0,1)$; (b) $6x^3-3x^2+2$ has a zero in $(-1,1)$.
Ans: (a) $f(0)=-2<0<e-2=f(1)$ (1.5). (b) $f(-1)=-7<0<2=f(0)$ so a zero in $(-1,0)$ (1.5). (No zero in $(0,1)$: minimum of $6x^3-3x^2+2$ there is $17/9$ at $x=\frac13$.) MCQ answer (C).

**A13 [K21]** (src: MAT21-Q1 + new use) State Bolzano's Intermediate Value Theorem. Use it to prove that there is $c\in(1,2)$ with $c^2=2$.
Ans: statement (1.5). $f(x)=x^2$ continuous on $[1,2]$, $f(1)=1<2<4=f(2)$ (1.5).

**A14 [K25]** (src: MAT22-Q1, MAT21-Q2, MAT22M-Q13, MAT21M-Q8) Define uniform continuity. Is every continuous function uniformly continuous? Is every uniformly continuous function continuous?
Ans: Def 5.4.1, $\delta$ depends on $\varepsilon$ only (1). UC $\Rightarrow$ continuous (same $\delta$ at each point) (1). Converse false: $1/x$ on $(0,\infty)$ (1). MCQ (B).

**A15 [K28]** (src: MTS26-Q3, MAT21-Q28a) Define a Lipschitz function and explain it geometrically. Show $f(x)=3x+1$ is Lipschitz.
Ans: $|f(x)-f(u)|\le K|x-u|$; chord slopes bounded by $K$ (2). $|f(x)-f(u)|=3|x-u|$, $K=3$ (1).

**A16 [K30]** (src: MTS25-Q2, MAT22-Q15) Give an example of a uniformly continuous function that is not Lipschitz, and justify.
Ans: $g(x)=\sqrt x$ on $[0,2]$: continuous on closed bounded interval, so UC (5.4.3) (1). Not Lipschitz: for any $K$, $x=\frac1{(K+1)^2}$ gives $\sqrt x=\frac1{K+1}>\frac K{(K+1)^2}=Kx$ (2). (e.g. $K=5$: $0.1667>0.1389$.)

**A17 [K32]** (src: MTS22M-Q3 adapted; Ex 5.4.15) If $f,g$ are Lipschitz on $A$ show $f+g$ is Lipschitz. Give an example where $f$ is Lipschitz but $f^2$ is not.
Ans: constants $K_1,K_2$ give $K_1+K_2$ (1). $f(x)=x$ on $[0,\infty)$ ($K=1$); $|x^2-u^2|=(x+u)|x-u|$ and $x+u$ unbounded (take $x=n+1,u=n$: slope $2n+1$) (2). MCQ answer (C) $f^2$.

**A18 [K33]** (src: MTS22M-Q4 adapted; Ex 5.4.4) Show that $f(x)=\dfrac1{1+x^2}$ is uniformly continuous on $\mathbb R$.
Ans: $f(x)-f(u)=\dfrac{(u-x)(u+x)}{(1+x^2)(1+u^2)}$ (1); $\frac{|x|}{1+x^2}\le\frac12$, $\frac1{1+u^2}\le1$, so $|f(x)-f(u)|\le|x-u|$ (1); $\delta=\varepsilon$ (1).

**A19 [K37]** (src: MAT22-Q5, MAT21-Q3) Define a step function. Show that $s:[-2,4]\to\mathbb R$, $s=0$ on $[-2,-1)$, $1$ on $[-1,0]$, $\frac12$ on $(0,\frac12)$, $3$ on $[\frac12,1)$, $-2$ on $[1,3]$, $2$ on $(3,4]$ is a step function; how many distinct values does it take? Is $f(x)=x$ on $[0,1]$ a step function?
Ans: def (1). six nonoverlapping intervals covering $[-2,4]$; values $0,1,\frac12,3,-2,2$: 6 values (1). $f(x)=x$ takes infinitely many values: no (1).

**A20 [K40]** (src: MTS25-Q3, MAT22-Q2) State the Weierstrass Approximation Theorem. Why can it not hold for $f(x)=1/x$ on $(0,1]$?
Ans: statement (2). Polynomials are bounded on $[0,1]$; $|1/x-p|<1$ would make $1/x$ bounded (1).

### Section B (6 marks each)
**B1 [K03]** (new; B 5.1.3, Ex 5.1.1) State and prove the Sequential Criterion for continuity.
Ans: Section 3.2. Marks: statement 1, ($\Rightarrow$) 2, ($\Leftarrow$) negation + $x_n$ with $\delta=1/n$ 3.

**B2 [K06]** (src: MTS25-Q1) Prove from the $\varepsilon$-$\delta$ definition that $f(x)=x^2$ is continuous at every $c\in\mathbb R$, giving $\delta$ in terms of $\varepsilon$ and $c$. Hence deduce that every polynomial is continuous on $\mathbb R$.
Ans: $|x^2-c^2|=|x-c||x+c|<(1+2|c|)|x-c|$ if $|x-c|<1$; $\delta=\min\{1,\varepsilon/(1+2|c|)\}$ (e.g. $c=3,\varepsilon=0.01$: $\delta=1/700$). Polynomials: constants, $x$ continuous; sums, products of continuous functions continuous (SC + 3.2.3).

**B3 [K07]** (new; 5.1.6(d)) Prove that $\varphi(x)=1/x$ is continuous on $(0,\infty)$ using $\varepsilon$-$\delta$. Find an admissible $\delta$ for $c=\frac12$, $\varepsilon=\frac1{10}$.
Ans: $\delta=\min\{c/2,c^2\varepsilon/2\}$; for $|x-c|<c/2$: $1/x<2/c$, $|1/x-1/c|\le2|x-c|/c^2<\varepsilon$. Numbers: $\delta=\min\{\frac14,\frac1{80}\}=\frac1{80}$.

**B4 [K11]** (src: MTS25-Q16) Prove that Dirichlet's function ($1$ on $\mathbb Q$, $0$ on irrationals) is discontinuous at every point of $\mathbb R$.
Ans: Section 3.17: rational $c$: irrational $x_n=c+\sqrt2/n\to c$, $f(x_n)=0\ne1$; irrational $b$: rational $y_n\to b$, $f(y_n)=1\ne0$; Discontinuity Criterion.

**B5 [K12]** (src: MTS22M-Q1 adapted; B 5.1.6(h)) Define Thomae's function on $(0,\infty)$ and prove it is continuous at every irrational and discontinuous at every rational. Find an admissible $\delta$ at $b=\frac{\sqrt2}2$ for $\varepsilon=0.2$.
Ans: Section 3.18. Numbers: $n_0=6$ ($\frac16<0.2$); rationals with denominator $\le5$ nearest to $0.7071$: $\frac23$ (distance $0.0404$), $\frac34$ ($0.0429$); $\delta=0.04$ works. MCQ answer: continuous only at irrationals.

**B6 [K15]** (src: MTS26-Q16, MAT22-Q27, MAT21-Q13 first part, MTS22-Q2 first part) State and prove the Boundedness Theorem.
Ans: Section 3.3 (contradiction, BW, $x\in I$, continuity, convergent $\Rightarrow$ bounded). Marks: statement 1, negation 1, BW 1, $x\in I$ 1, continuity 1, contradiction 1.

**B7 [K22]** (src: MAT22-Q13) Let $f:[a,b]\to\mathbb R$ be continuous and $\inf f(I)\le k\le\sup f(I)$. Prove $\exists c\in I$ with $f(c)=k$. Illustrate with $f(x)=x^3-3x$ on $[-1.5,1.5]$, $k=1$.
Ans: Section 3.7. Example: $\inf=-2$, $\sup=2$ (at $x=1$, $x=-1$); $c^3-3c=1$ has a root $c=2\cos100^\circ=-0.3473\in I$.

**B8 [K23]** (src: MAT21-Q15) Prove that the image of a closed bounded interval under a continuous function is a closed bounded interval. Show by example that it need not be $[f(a),f(b)]$.
Ans: Section 3.8. Example $x^3-3x$ on $[-1.5,1.5]$: $f(a)=1.125,f(b)=-1.125$ but $f(I)=[-2,2]$.

**B9 [K24]** (src: MTS25-Q17, MAT22-Q14) State and prove the Preservation of Intervals Theorem. Find $f(I)$ for $f(x)=\frac1{x^2+1}$ and $I=(-1,1)$, $[0,\infty)$.
Ans: Section 3.9. $f((-1,1))=(\frac12,1]$, $f([0,\infty))=(0,1]$ (open/closed type not preserved).

**B10 [K26]** (src: MAT21-Q16; also MTS22M-Q2 adapted) State the Nonuniform Continuity Criteria. Use them to show $f(x)=1/x$ is not uniformly continuous on $(0,\infty)$. Is it UC on $[a,1)$, $a>0$?
Ans: (i)(ii)(iii) (2). $x_n=\frac1n,u_n=\frac1{n+1}$: $x_n-u_n=\frac1{n(n+1)}\to0$, $|f(x_n)-f(u_n)|=1=\varepsilon_0$ (2). On $[a,1)$: Lipschitz with $K=1/a^2$ so UC (2). MCQ answer (C) (reading $g=1/x$).

**B11 [K29]** (src: MAT21-Q28b) Prove that a Lipschitz function on $A$ is uniformly continuous on $A$. Find $\delta$ for $f(x)=\sin x$ on $\mathbb R$.
Ans: $\delta=\varepsilon/K$ (Section 3.12). $|\sin x-\sin u|\le|x-u|$ ($K=1$), so $\delta=\varepsilon$.

**B12 [K31]** (src: MTS26-Q24b; MAT22-Q36b) Prove that $g(x)=\sqrt x$ is uniformly continuous on $[0,\infty)$. (In particular on $[0,2]$.)
Ans: Route 1 (B): UC on $[0,2]$ by 5.4.3; on $[1,\infty)$ Lipschitz $K=\frac12$; $\delta=\min\{1,\delta_I,\delta_J\}$ (explain why the 1). Route 2: $|\sqrt x-\sqrt u|\le\sqrt{|x-u|}$, $\delta=\varepsilon^2$ ($\varepsilon=0.1\Rightarrow\delta=0.01$).

**B13 [K34]** (src: MAT21-Q22) Show that if $f,g$ are UC on $\mathbb R$ the product $fg$ need not be UC. Show that $f+g$ is UC.
Ans: $f=g=x$ (Lipschitz $K=1$, UC). $fg=x^2$: $x_n=n$, $u_n=n+\frac1n$, $|x_n^2-u_n^2|=2+\frac1{n^2}\ge2$, $x_n-u_n\to0$. Sum: $\delta=\min\{\delta_f(\varepsilon/2),\delta_g(\varepsilon/2)\}$. (Bounded UC functions have UC product; $x\cdot\sin x$ not UC.)

**B14 [K35]** (src: MAT21-Q36a, MTS22-Q3) If $f$ is UC on $A$ and $(x_n)$ is a Cauchy sequence in $A$, prove $(f(x_n))$ is Cauchy. Show the result can fail for a function that is merely continuous.
Ans: Section 3.13. $f=1/x$ on $(0,1)$, $x_n=1/(n+1)$ Cauchy, $f(x_n)=n+1$ unbounded, not Cauchy.

**B15 [K38]** (src: MTS26-Q17) Let $f$ be continuous on $[a,b]$ and $\varepsilon>0$. Prove there is a step function $s_\varepsilon$ with $|f(x)-s_\varepsilon(x)|<\varepsilon$ on $[a,b]$. Find $m$ and $s_\varepsilon$ for $f(x)=x$ on $[0,1]$, $\varepsilon=0.1$.
Ans: Section 3.15. $\delta=0.1$; need $h<0.1$ so $m=11$; $s=k/11$ on $I_k$; error $\le1/11<0.1$.

**B16 [K39]** (new; B 5.4.12-5.4.13) Define a piecewise linear function. Prove that a continuous $f$ on $[a,b]$ can be approximated within $\varepsilon$ by a continuous piecewise linear $g_\varepsilon$. For $f(x)=x^2$ on $[0,1]$ with nodes $0,\frac14,\frac12,\frac34,1$ find the maximum error.
Ans: Section 3.16 (convex-combination step). Max error $=h^2/4=1/64$ (at the midpoint of each piece: chord of $x^2$ over $[p,p+h]$ exceeds $x^2$ by $\le h^2/4$).

### Section C (10 marks each)
**C1 [K19]** (src: MTS25-Q24; MAT21-Q17 first part) State and prove the Location of Roots Theorem. (10)
Ans: Section 3.5 (bisection; NIP; sign argument). Marks: statement 2, construction 3, limits 2, continuity+sign 2, conclusion 1.

**C2 [K18]** (src: MAT22-Q36a; MAT21-Q14 first part; MAT22M-Q11) State and prove the Maximum-Minimum Theorem. (10)
Ans: Section 3.4. Quote the Boundedness Theorem as a lemma (state it). Marks: statement 1, sup exists 1, approximating $x_n$ 2, BW+$x^*\in I$ 2, continuity+squeeze 2, max 1, min 1.

**C3 [K27]** (src: MTS26-Q24a; MAT22-Q28; MAT21-Q27) State and prove the Uniform Continuity Theorem. (10)
Ans: Section 3.11.

**C4 [K36]** (src: MAT22-Q29) State and prove the Continuous Extension Theorem. (10)
Ans: Section 3.14 ($\Leftarrow$ 2 marks via 5.4.3; $\Rightarrow$: Cauchy image via 5.4.7, independence of sequence, 4.1.8, define $f(a)$, $f(b)$). Remark: $\sin(1/x)$ not UC on $(0,b]$; $x\sin(1/x)$ UC.

### 6.1 Coverage check (every K main once; every tag placed)
Main K by question: A1 K01, A2 K02, A3 K04, A4 K08, A5 K05, A6 K09, A7 K10, A8 K13, A9 K14, A10 K16, A11 K17, A12 K20, A13 K21, A14 K25, A15 K28, A16 K30, A17 K32, A18 K33, A19 K37, A20 K40 | B1 K03, B2 K06, B3 K07, B4 K11, B5 K12, B6 K15, B7 K22, B8 K23, B9 K24, B10 K26, B11 K29, B12 K31, B13 K34, B14 K35, B15 K38, B16 K39 | C1 K19, C2 K18, C3 K27, C4 K36. That is K01-K40, each once.
Tags not placed directly: none; MCQ tags are adapted or "also" as in 5.2. MAT22M-Q11 is an "also" under C2.
Mark-total note: 60 + 96 + 40 = 196.

---
## 7. STUDENT TRAPS and COUNTEREXAMPLES

### 7.1 Traps (trap -> fix); each is verified
| # | trap | fix |
|---|---|---|
| T01 | "Continuous = draw without lifting the pen" | Use the definition; the pen rule cannot prove anything, and $1/x$ is continuous on its domain although the graph has two pieces (see 0.2 for the corrected $x\sin(1/x)$ remark) |
| T02 | $\delta$ in continuity depends only on $\varepsilon$ | It may depend on $c$ too: $\delta=\min\{1,\varepsilon/(1+2|c|)\}$ for $x^2$. Only in UC must it be free of the point |
| T03 | Writing $\delta=\varepsilon/(2x)$ or $\delta=\varepsilon/|x+c|$ (contains $x$) | Circle every symbol in $\delta$: only $\varepsilon$, $c$, constants allowed. Restrict $\delta\le1$ first |
| T04 | Forgetting $\min$: $\delta=\varepsilon/(1+2|c|)$ alone | The bound $|x+c|<1+2|c|$ needs $|x-c|<1$; hence $\min\{1,\cdot\}$ |
| T05 | Limit $\ne$ value: "$f(c)$ undefined but limit exists, so continuous" | Need (i) defined, (ii) limit exists, (iii) equal |
| T06 | Assuming isolated points matter | Automatic continuity at isolated points of the domain (5.1.2(2)) |
| T07 | $f(x)=1/x$ "is discontinuous" | It is continuous on $(0,\infty)$; $0\notin$ domain. Discontinuity is only discussed at points of the domain |
| T08 | Proving not-UC with one sequence | Need TWO sequences $(x_n),(u_n)$ with $x_n-u_n\to0$ and $|f(x_n)-f(u_n)|\ge\varepsilon_0$; and $\varepsilon_0$ fixed |
| T09 | "UC fails only on unbounded domains" | $1/x$ and $\sin(1/x)$ on $(0,1)$; the open end is the problem |
| T10 | Applying 5.3.2/5.3.4/5.4.3 to an open or unbounded interval | Check three boxes: closed, bounded, continuous. (Counterexamples: K16) |
| T11 | Max-Min: "max is where $f'=0$" | Max may be at an endpoint ($f(x)=x$ on $[0,1]$); derivatives are not in this module |
| T12 | IVT converse: "takes every value between $\Rightarrow$ continuous" | False: $\sin(1/x)$, $f(0)=0$ on $[0,1]$ has the intermediate value property but is discontinuous at $0$ |
| T13 | Believing $f([a,b])=[f(a),f(b)]$ | It is $[m,M]$. $x^3-3x$ on $[-1.5,1.5]$: $[-2,2]$ vs $[-1.125,1.125]$ |
| T14 | Thinking the root from bisection is unique or equals a midpoint | IVT/roots give existence only; a function can have several roots in $(a,b)$ (e.g. $x^3-3x$ on $[-2,2]$ has three) |
| T15 | Strict inequality kept in the limit: "$f(a_n)<0\Rightarrow f(c)<0$" | Limits of negative numbers can be $0$: conclusion is $f(c)\le0$; combine with $\ge0$ |
| T16 | Continuous image of open interval is open | $f(x)=1/(1+x^2)$: $f((-1,1))=(\frac12,1]$ |
| T17 | Lipschitz $\Rightarrow$ UC and then thinking converse true | $\sqrt x$ on $[0,1]$ is UC, not Lipschitz (steep at 0) |
| T18 | Product of Lipschitz / UC is Lipschitz / UC | $x\cdot x$ on $\mathbb R$; $f(x)=x$, $g=\sin x$: $fg$ not UC. True only if both are bounded |
| T19 | In 5.4.6(c) dropping the $\min$ with $1$ when joining $[0,2]$ and $[1,\infty)$ | The "1" forces points within $\delta$ of each other to lie in a common piece |
| T20 | Using $m$ with $h=\delta$ in step approximation | Need $h<\delta$ strictly; $f(x)=x$, $\varepsilon=0.1$: $m=10$ fails at $x=0$, $m=11$ works |
| T21 | "Continuous $\Rightarrow$ UC on every interval" in MCQ 'A' | UC on closed bounded intervals only (or via Lipschitz / extension) |
| T22 | Greatest-integer: $[\sin x]$ forgotten isolated values | discontinuous at $\pi/2+2k\pi$ as well as at $k\pi$ |
| T23 | $\sin(1/x)$ vs $x\sin(1/x)$ | the first has no limit at 0 (no extension, not UC on $(0,b]$); the second tends to 0 (extension, UC on $(0,b]$) |
| T24 | Thomae: "continuous at rationals" | Reverse: continuous exactly at irrationals; at $p/q$ the value $1/q>0$ but nearby irrationals give $0$ |
| T25 | Writing the sequential criterion as "for some sequence" | "For EVERY sequence" to prove continuity; ONE bad sequence to disprove it |
| T26 | Weierstrass: "any continuous function on any interval is a polynomial limit" | closed bounded $[a,b]$; $1/x$ on $(0,1]$ fails (unbounded) |
| T27 | Applying UC Theorem to $(a,b)$ for $\sin(1/x)$ because "bounded" | needs a continuous extension to $[a,b]$ (K36); none exists |

### 7.2 Counterexample library for M1 (C-numbers from pedagogy_ra.md; verified; N = new)
| code | object | what it shows | verification | where used |
|---|---|---|---|---|
| C1 | $x^2$ on $\mathbb R$ | continuous, unbounded, not UC, not Lipschitz | $x_n=n,u_n=n+\frac1n$, gap $2+\frac1{n^2}$ | K16, K26, K34 |
| C2 | $1/x$ on $(0,1)$ | continuous, unbounded, no max, no min ($\inf=1$ not attained), not UC | $x_n=\frac1n,u_n=\frac1{n+1}$ gap $1$ | K14, K16, K26 |
| C3 | $\sin(1/x)$ on $(0,1)$ | bounded, continuous, not UC, no continuous extension at 0 | $x_n=\frac1{2n\pi+\pi/2}$, $u_n=\frac1{2n\pi}$ gap $1$ | K13, K36 |
| C4 | $\sqrt x$ on $[0,1]$ | UC but not Lipschitz | $x=1/(K+1)^2$ beats any $K$ | K30 |
| C5 | $|x|$ | continuous, not differentiable at 0 | (M2) | K08 remark |
| C7 | Dirichlet | continuous nowhere (and not Riemann integrable, M3) | density sequences | K11 |
| C8 | Thomae (on $x>0$) | continuous exactly at irrationals | $\delta$ avoiding finitely many rationals | K12 |
| C9 | $\operatorname{sgn}$ (with $\operatorname{sgn}0=0$) | jump; fails IVT (misses $(0,1)$) | takes only $-1,0,1$ | K10, K21 |
| C10 | $\sin(1/x)$, $f(0)=0$, on $[0,1]$ | IVT property without continuity | oscillation fills $[-1,1]$ on every $(0,\eta)$ | T12 |
| C11 | $f(x)=x$ on $\mathbb Q$, $0$ off $\mathbb Q$ | continuous only at $0$ | $|f(x)|\le|x|$ at 0; sequences elsewhere | K01 contrast |
| N1 | $f(x)=x\ (x<1)$, $x+1\ (x\ge1)$ on $[0,2]$ | IVT fails: $[1,2)$ missed ($f(0)=0$, $f(2)=3$, $k=\frac32$) | values $<1$ or $\ge2$ | K21, F10 |
| N2 | $h=1/x$ on $(0,1]$, $h(0)=1$ | discontinuous, unbounded on $[0,1]$ | B p.135 | K16 |
| N3 | $x$ on $(0,1)$ | bounded, continuous, no max/min | $\sup=1,\inf=0$ | K16 |
| N4 | $x\sin x$ on $\mathbb R$ | product of UC not UC | $x_n=2\pi n$, $u_n=2\pi n+\frac1n$: $f(x_n)=0$, $f(u_n)\to2\pi$ | K34 |
| N5 | $x$ on $[0,\infty)$ | Lipschitz, $f^2$ not Lipschitz | slope $2n+1$ | K32 |
| N6 | $[x]$, $x[x]$, $[\sin x]$, $[1/x]$ | discontinuity sets | Section 4.3 | K04 |
| N7 | $x\sin x$-free: $x$ on $\mathbb R$ | UC and unbounded (so UC does not give bounded on unbounded sets; Ex 5.4.10 needs bounded $A$) | | K25 |
| N8 | $f(x)=x^2$ piecewise at 2 ($x+10$) | jump; fix $x+2$ | CALC-24-Q3 | K09 |
Not M1 (skip here): C6, C12-C20 belong to M2-M4. C13-C14 etc. unchanged.

### 7.3 Audit of pedagogy_ra.md for M1
- Verified correct: T1-T6 templates (including $x^2$ at 2 with $\delta=\min\{1,\varepsilon/5\}$, pairs for $1/x$, $x^2$, $\sin(1/x)$, Lipschitz $\Rightarrow$ UC, fast-route list), C1-C4, C5, C7-C11, "IVT converse", "Believing root unique" and "Max exists but $f'=0$ only interior".
- Imprecision: Section 3 "Continuous = draw without lifting the pen -> fails for $x\sin(1/x)$": the graph of $F$ is connected; see 0.2.
- Nothing else wrong found in the M1 portions. Note pedagogy C10 text "Conway base-13 or sin(1/x)-with-0": both work (Conway base-13 has the IVT property on every interval).
- Missing from pedagogy for M1 (added here): $[\sin x]$ trap, $\delta$ must be strict ($m=11$), $\min\{1,\ldots\}$ in 5.4.6(c), T15 (strict-to-weak inequality in the limit), N1-N8.

---
## 8. FIGURES (18). Common conventions
Symbols: graph = solid blue curve; $\varepsilon$-band = horizontal green strip centred at $f(c)$ with half-width $\varepsilon$; $\delta$-window = vertical orange strip centred at $c$ with half-width $\delta$; $c$ = dashed vertical line; filled dot = value taken; hollow dot = value not taken; red = failure/bad choice; sequences = small numbered dots. One column; at most 6 labels; caption "What to notice". Axes labelled $x$, $y$ with tick values given below.

| # | figure | exact specification | what to notice |
|---|---|---|---|
| F01 | $\varepsilon$-$\delta$ for continuity (B Fig 5.1.1) | $f(x)=x^2$, $c=1$, $\varepsilon=0.5$: band $0.5<y<1.5$. Exact window: $x\in(0.7071\ [=\sqrt{0.5}],\ 1.2247\ [=\sqrt{1.5}])$, so the largest symmetric $\delta=\sqrt{1.5}-1=0.2247$. Proof window $\delta=\min\{1,0.5/3\}=1/6=0.1667$ drawn inside it. View $x\in[0.5,1.5]$, $y\in[0.2,2.2]$ | graph over the window stays in the band; proof's $\delta$ is smaller (safe), not best |
| F02 | Bad $\delta$ | same graph, $\delta=0.4$: window $(0.6,1.4)$; mark red points $(1.4,1.96)$ above $y=1.5$ and $(0.6,0.36)$ below $y=0.5$ | one window fits only if graph never leaves the band; the failing side is the steeper one |
| F03 | Discontinuity criterion | Panel (a): $f(x)=[x]$ on $[0,2)$, steps at 0,1; $c=1$, $f(1)=1$ (filled), left piece $0$ with hollow dot at $(1,0)$; sequence $x_n=1-\frac1{n+1}$: $0.5,0.667,0.75,0.8,0.833$ at height $0$; $\varepsilon_0=\frac12$ band around $1$ ($0.5<y<1.5$) shows $f(x_n)=0$ outside it. Panel (b): CALC-24 Q3: $x^2$ on $[0,2]$ ending filled at $(2,4)$; $x+10$ on $(2,3]$ starting hollow at $(2,12)$; jump arrow length 8 | no window works: points arbitrarily close to $c$ land outside the band |
| F04 | Dirichlet function | $x\in[0,2]$; two dotted horizontal rows $y=1$ (rationals) and $y=0$ (irrationals). $c=\frac12$ with irrational $x_n=\frac12+\frac{\sqrt2}n$: $1.914,1.207,0.971,0.854,0.783,0.736,0.702,0.677$ at $y=0$; $b=\frac{\sqrt2}2=0.7071$ with rational truncations $0.7,\ 0.70,\ 0.707,\ 0.7071$ at $y=1$ | every neighbourhood of any point contains both kinds of points |
| F05 | Thomae's function (B Fig 5.1.2) | $x\in(0,1]$, $y\in[0,1]$, points $(p/q,1/q)$ gcd=1 for $q\le10$. Shade $|y|<0.2$ (so $\varepsilon=0.2$, $n_0=6$); the points with $q\le5$ lie on/above its top edge: for $q\le4$ they are $(1,1),(\frac12,\frac12),(\frac13,\frac13),(\frac23,\frac13),(\frac14,\frac14),(\frac34,\frac14)$, for $q=5$ at $y=0.2$: $x=0.2,0.4,0.6,0.8$. Mark $b=0.7071$ with $\delta=0.04$ window $(0.6671,0.7471)$, containing no point with $q\le5$ | finitely many points above any horizontal line; the window dodges them |
| F06 | $x\sin(1/x)$ and $\sin(1/x)$ (B Fig 5.1.3) | Panel (a): $F(x)=x\sin(1/x)$ on $[-0.3,0.3]$, dashed envelopes $y=\pm|x|$, $F(0)=0$; $\varepsilon=0.05$ band and $\delta=0.05$ window at $c=0$. Panel (b): $\sin(1/x)$ on $(0,0.3]$; dots at $x_n=\frac1{n\pi}$, $n=2..6$ ($0.159,0.106,0.0796,0.0637,0.0531$; $y=0$) and $x'_n=\frac2{(4n+1)\pi}$, $n=1..4$ ($0.1273,0.0707,0.0490,0.0374$; $y=1$) | squeeze makes the first calm; the second oscillates, two sequences with different limits |
| F07 | Unbounded continuous function (B p.134) | $f(x)=1/x$ on $(0,1]$, $y\in[0,8]$; horizontal line $y=M=5$, vertical dashed at $x_M=\frac1{M+1}=\frac16$, point $(\frac16,6)$ above the line | for any $M$ the graph rises above it |
| F08 | Max-Min and $f(I)=[m,M]$ (B Fig 5.3.3) | $f(x)=x^3-3x$ on $I=[-1.5,1.5]$: end points $(-1.5,1.125)$, $(1.5,-1.125)$; max $(-1,2)$, min $(1,-2)$; dashed horizontals $y=\pm2$ and $y=\pm1.125$; bracket on $y$-axis $[-2,2]=f(I)$ | $f(I)\ne[f(a),f(b)]$; extreme values at interior points |
| F09 | Bisection (5.3.5) | $g(x)=xe^x-2$ on $[0,1]$; nested bars $I_1=[0,1]$, $I_2=[0.5,1]$, $I_3=[0.75,1]$, $I_4=[0.75,0.875]$, $I_5=[0.8125,0.875]$ above the graph; $p_1..p_5=0.5,0.75,0.875,0.8125,0.84375$ with signs $-,-,+,-,-$; root $0.8526$ marked | the sign change is always trapped; lengths $1/2^{n-1}$ |
| F10 | IVT fails without continuity | $f(x)=x$ on $[0,1)$, $f(x)=x+1$ on $[1,2]$: hollow $(1,1)$, filled $(1,2)$, ends $(0,0)$ and $(2,3)$; horizontal line $k=1.5$ misses the graph | continuity removes the gap |
| F11 | Images of intervals (B Fig 5.3.4) | $f(x)=\frac1{x^2+1}$ on $[-3,3]$: peak $(0,1)$; hollow points $(\pm1,\frac12)$. Highlight $x\in(-1,1)\mapsto y\in(\frac12,1]$ (open end at $\frac12$, closed at 1); highlight $x\in[0,\infty)\mapsto y\in(0,1]$ | image of open interval need not be open; of closed unbounded not closed |
| F12 | $x^2$: windows shrink (UC fails) | $f(x)=x^2$, $\varepsilon=1$: at $c=0,1,2,3$ the exact right-hand $\delta(c)=\sqrt{c^2+1}-c=1,\ 0.4142,\ 0.2361,\ 0.1623$. Draw four rectangles of width $2\delta(c)$ (using the same symmetric $\delta$) and height $2$ on $x\in[0,3.5]$, $y\in[0,12]$ | same $\varepsilon$, shrinking $\delta$ as $c$ grows: $\inf\delta=0$ |
| F13 | $1/x$: windows shrink (B Fig 5.4.1-5.4.2) | $g(x)=1/x$, $\varepsilon=1$: $\delta(c)=\varepsilon c^2/(1+\varepsilon c)$: $c=2:\ 1.3333$; $c=1:\ 0.5$; $c=\frac12:\ 0.1667$; $c=\frac14:\ 0.05$. View $x\in(0,2.5]$, $y\in(0,5]$. Variant with B's setup: $\varepsilon=\frac12$ about $y=2$ ($1.5<y<2.5$): window about $c=\frac12$ is $(0.4,0.6667)$, symmetric $\delta=0.1$ | the permissible window tends to $0$ near the open end |
| F14 | $\sin x$: one window fits everywhere | $f=\sin x$, $\varepsilon=0.5$, fixed $\delta=0.5$ (rectangle width $1$, height $1$) centred at $c=0,\frac\pi2,3$ with the graph inside each | Lipschitz $\Rightarrow$ UC: sliding rectangle of fixed size |
| F15 | Non-UC pairs (5.4.2) | $g=1/x$; pairs $(x_n,u_n)=(\frac1n,\frac1{n+1})$ for $n=2..6$: $x$-gaps $\frac16,\frac1{12},\frac1{20},\frac1{30},\frac1{42}$, heights $(2,3),(3,4),(4,5),(5,6),(6,7)$, each vertical gap $=1=\varepsilon_0$ | horizontal gap $\to0$, vertical gap stays 1 |
| F16 | Lipschitz cone fails for $\sqrt x$ | $y=\sqrt x$ on $[0,1]$ with cones $y=3x$ and $y=10x$: $\sqrt x=3x$ at $x=\frac19$ ($y=\frac13$), $\sqrt x=10x$ at $x=\frac1{100}$ ($y=0.1$); region $x<1/K^2$ is above the line | no slope bound near 0: UC but not Lipschitz |
| F17 | Step approximation (B Fig 5.4.4) | $f(x)=x^2$ on $[0,1]$, $\varepsilon=0.25$, $m=9$, $h=\frac19$; steps $s=\frac{k^2}{81}$ on $(\frac{k-1}9,\frac k9]$ ($I_1$ closed at 0); band $f\pm0.25$; mark worst gap $17/81=0.2099$ at $x\to\frac89^+$ in $I_9$ | steps hug the right-end value; error $<\varepsilon$ everywhere |
| F18 | Piecewise-linear approximation (B Fig 5.4.5) | same $f$, nodes $0,\frac14,\frac12,\frac34,1$ ($m=4$), chords through $(\frac k4,\frac{k^2}{16})$; band $f\pm0.05$; mark gap $1/64=0.0156$ at each midpoint | chords stay inside the band; proof's $m$ (41) is overkill |

Optional (not required): Weierstrass illustration — $f(x)=|x-\frac12|$ on $[0,1]$ with Bernstein polynomials degree $4$ and $20$ (general knowledge; B has no picture).

---
## 9. Verification log (Python 3, this session)
Re-computed and found correct: bisection table of $xe^x-2$ (root $0.8526055$); root of $x=\cos x$ ($0.7390851$); roots of $x^4+7x^3-9$ in $(-8,-7)$ ($-7.0259$) and $(1,2)$ ($1.0384$); roots of $6x^3-3x^2+2$ (single real root $-0.5606$), min on $[0,\infty)$ $17/9$; bisection count $n=17$; $x^2$ window $\delta(c)$ values; $1/x$ window values ($\varepsilon c^2/(1+\varepsilon c)$) and the book-style $\min\{c/2,c^2\varepsilon/2\}$ always $\le$ exact; $17/81$ for step error; $1/64$ for chord error; $x^3-3x$ extremes and $k=1$ root $-0.3473$; Thomae points with $q\le4$ (6 points); $[\sin x]$ behaviour; $\sin(1/x)$ pair values; sup of $|(1/(1+x^2))'|=3\sqrt3/8=0.6495$; $\sqrt x$ not Lipschitz witness for $K=5$.
