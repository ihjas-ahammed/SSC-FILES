# M4 SEQUENCES OF FUNCTIONS brief (Bartle & Sherbert 4e, 8.1.1-8.1.10 + 8.2.1-8.2.2; Calicut MAT5CJ301)
Notation: A = domain, f_n -> f pointwise, f_n => f uniform, ||phi||_A = sup{|phi(x)| : x in A}. B = Bartle. Every number below was recomputed (sup values also checked numerically).
SCOPE: IN = 8.1.1-8.1.10 and 8.2.1-8.2.2 only. 8.2.3 (derivative), 8.2.4 (integral) are practicum; series of functions 9.4 is NOT in scope.

## 0. CHECKS AGAINST THE BOOK EXTRACT (bartle_m4.md) AND pedagogy_ra.md
- Examples 8.1.2(a-d), 8.1.6(a-c), 8.1.9(a-e), 8.2.1(a-d): all recomputed, no error found. B 8.1.9(e): ||G_n|| = (1+1/n)^(-n)/(n+1) = n^n/(n+1)^(n+1); values n=1:1/4, n=2:4/27, n=5:0.06698, n=10:0.03505. OK.
- B 8.1.10 (Cauchy criterion): the book's proof does NOT show that the limit f is bounded, though the statement says "bounded function f". Gap-filler (add as step 7): for fixed x, |f(x)| <= |f_H(x)| + eps <= ||f_H|| + eps, so f is bounded. Use this in the 10-mark answer.
- B 8.1.10 has no printed number in the extraction; the syllabus (and the user) call it 8.1.10. Keep "Theorem 8.1.10".
- B 8.2.1(b) says g has no derivative at 1 "since not continuous": correct (differentiable => continuous).
- pedagogy C12 (x^n on [0,1]), C13 (moving spike), C15 (x/n on R: pointwise, not uniform; uniform on bounded sets) VERIFIED. C14 (sin(nx)/sqrt n) VERIFIED: |.|<=1/sqrt n so f_n=>0 on R, but f_n'(x)=sqrt n cos(nx) is unbounded at x=0 (does not converge). pedagogy C20 ("g(x)=|x| sgn") is garbled and is M3 anyway, ignore. pedagogy "x^n uniform on [0,a], a<1, not on [0,1)" VERIFIED (sup on [0,a] is a^n; on [0,1) it is 1, not attained). pedagogy "f_n=x+1/n, g_n=x: products converge pointwise but not uniformly" VERIFIED (f_n g_n - x^2 = x/n, unbounded on R).
- T10 example x_n=(1/2)^(1/n): x_n^n=1/2 VERIFIED.
- New counterexamples added below as C21-C27 (continuing the pedagogy library).
- OUT decisions (checked all non-M4 rows mentioning sequences/uniform convergence):
  * MTS6B10-26-Q26 (prove f in R[a,b] and int f = lim int f_n for uniform limit) = 8.2.4: practicum, needs Riemann theory (Cauchy criterion for integrals). LEAVE OUT.
  * MTS6B10-25-Q11 (state+prove Weierstrass M-test), MAT6B09-22-Q21 (same), MAT6B09-22-Q22 (sum 1/(x^2+n^2)), MAT6B09-21-Q31 (sum sin(x^2+nx)/(n(n+2))), MAT6B09-21-Q9 (sum r^n cos^2 nx): series, 9.4, OUT.
  * MTS6B10-26-Q11, MTS6B10-22-Q11, MAT6B09-21-Q23 (Cauchy criterion for SERIES), MAT6B09-22-Q7 (define uniform convergence of a series), MAT6B09-22-Q20 (sum f_n continuous => sum continuous): series, OUT. (Bridge remark only: Q20 is 8.2.2 applied to the partial sums s_n = f_1+...+f_n; cover that in the K15 note, do not test.)
  * MAT6B09-21-Q22 (UC functions: product need not be UC): M1, not here.
  * Borderline M4 rows KEPT: MTS6B10-22-Q10 (h_n integral): the pointwise limit h=0 and the integral values 1-e^(-n) -> 1 are all computable with 8.1.1 + 8.2.1(d); 8.2.4 is NOT needed. MTS6B10-22-MCQ-13 (products): answerable with 8.1.4 + counterexample x+1/n.
  * pedagogy 5.3/T10 mention "Do not claim integral/derivative swapping from pointwise alone": fine, kept only as a trap (not tested beyond 8.2.1).

## 1. ATOMIC CONCEPTS K## (teaching order). Weight = marks seen in past papers (module-tagged) / role
K01 | Sequence of functions; pointwise convergence | B 8.1.1 | needs P01,P02,M01,M02 | weight: 3 (MTS22-Q8) + 6 (21-Q21)
  Statement: Let $(f_n)$ be a sequence of functions on $A\subseteq\mathbb R$ to $\mathbb R$, let $A_0\subseteq A$ and $f:A_0\to\mathbb R$. The sequence $(f_n)$ \textbf{converges on $A_0$ to $f$} if for each $x\in A_0$ the sequence $(f_n(x))$ converges to $f(x)$ in $\mathbb R$. Then $f$ is the \textbf{limit on $A_0$}, and we say $(f_n)$ converges pointwise on $A_0$.
K02 | Finding the pointwise limit (fix x; limit function written piecewise; domain A_0 = set where the limit exists) | B 8.1.2(a-d), 8.1.1 notation | needs K01,P03,P04,M02,M10 | weight: 6 questions (1+1+2+2+3+3), most frequent M4 type
  Statement: Fix $x\in A$ and compute $\lim_{n}f_n(x)$ (a limit of real numbers). If it exists for every $x\in A_0$ the function $f(x):=\lim f_n(x)$ is the limit on $A_0$; ordinarily $A_0$ is taken as the largest set on which the limit exists (e.g. $g_n(x)=x^n$: $A_0=(-1,1]$, $g=0$ on $(-1,1)$, $g(1)=1$).
K03 | The eps-K(eps,x) form of pointwise convergence | B Lemma 8.1.3 | needs K01,P01,M03 | weight: 0 seen (leads to K04)
  Statement: $(f_n)\to f$ on $A_0$ if and only if for each $\varepsilon>0$ and each $x\in A_0$ there is $K(\varepsilon,x)\in\mathbb N$ such that $n\ge K(\varepsilon,x)\Rightarrow |f_n(x)-f(x)|<\varepsilon$.
K04 | Uniform convergence | B 8.1.4 | needs K03,M03 | weight: 3 (26-Q9) + the whole module
  Statement: $(f_n)$ \textbf{converges uniformly on $A_0\subseteq A$} to $f:A_0\to\mathbb R$ if for each $\varepsilon>0$ there is $K(\varepsilon)\in\mathbb N$ (depending on $\varepsilon$ but \textbf{not} on $x\in A_0$) such that $n\ge K(\varepsilon)\Rightarrow |f_n(x)-f(x)|<\varepsilon$ for all $x\in A_0$. Uniform convergence implies pointwise convergence to the same $f$; the converse fails.
K05 | Criterion for NOT uniform (negation) | B Lemma 8.1.5 | needs K04,M07 | weight: 0 direct (used inside K06,K09,K10)
  Statement: $(f_n)$ does \textbf{not} converge uniformly on $A_0$ to $f$ if and only if for some $\varepsilon_0>0$ there are a subsequence $(f_{n_k})$ and a sequence $(x_k)$ in $A_0$ with $|f_{n_k}(x_k)-f(x_k)|\ge\varepsilon_0$ for all $k\in\mathbb N$.
K06 | Defeating uniformity: choosing the moving point x_k | B Examples 8.1.6(a-c) | needs K05,M06 | weight: 3 (22-Q9) + 15 (21-Q37b) + 7 (22-Q31)
  Statement (technique): choose $n_k=k$ and a point $x_k$ at which $f_k$ is far from $f$: $x/n$ on $\mathbb R$: $x_k=k$ gives $|f_k(k)-0|=1$; $x^n$ on $(-1,1]$: $x_k=(1/2)^{1/k}$ gives $\tfrac12$; $(x^2+nx)/n$ on $\mathbb R$: $x_k=-k$ gives $k$.
K07 | Bounded function; the uniform norm | B Def 8.1.7 | needs P07,M01 | weight: 2 (25-Q9)
  Statement: $\varphi:A\to\mathbb R$ is \textbf{bounded on $A$} if $\varphi(A)$ is a bounded set; then $\|\varphi\|_A:=\sup\{|\varphi(x)|:x\in A\}$. For $\varepsilon>0$: $\|\varphi\|_A\le\varepsilon\iff|\varphi(x)|\le\varepsilon$ for all $x\in A$.
K08 | Sup-norm criterion for uniform convergence | B Lemma 8.1.8 (10-mark material) | needs K04,K07,P07 | weight: 5 (26-Q20) + 4 (22-Q19)
  Statement: A sequence $(f_n)$ of bounded functions on $A$ converges uniformly on $A$ to $f$ if and only if $\|f_n-f\|_A\to0$.
K09 | Computing $\|f_n-f\|_A$ (calculus; sup not always a max; value at infinity) | B Examples 8.1.9(a,b,c,e) | needs K08,M04,M05,M11 | weight: 9 (21-Q32) + used in 21-Q37b, 22-Q31
  Statement (technique): for $f_n-f$ bounded on $A$, find $\sup|f_n-f|$ by critical points/endpoints/limits; $\|f_n-f\|_A\to0$ gives uniform, otherwise not. B: $\|x/n\|_{[0,1]}=1/n$; $\|x^n-g\|_{[0,1]}=1$; $\|(x^2+nx)/n-x\|_{[0,8]}=64/n$; $\|x^n(1-x)\|_{[0,1]}=\dfrac{n^n}{(n+1)^{n+1}}\to0$.
K10 | Uniformity depends on the set A | B 8.1.9(a) vs 8.1.2(a), 8.1.9(b); Ex 8.1.11-17 | needs K09,K06 | weight: 15 (21-Q37b)
  Statement: Uniform convergence is a property of $(f_n,f,A_0)$: $x/n\to0$ is uniform on $[0,1]$ (norm $1/n$) but not on $\mathbb R$; $x^n\to0$ is uniform on $[0,b]$ ($0<b<1$, norm $b^n$) but not on $[0,1)$ or $[0,1]$ (norm 1). Restricting away from the bad point (an endpoint or infinity) restores uniformity.
K11 | Uniform bound (squeeze) shortcut | B 8.1.2(d), 8.1.9(d) | needs K08,P05 | weight: 1 (MCQ-12 adapted)
  Statement: if $|f_n(x)-f(x)|\le a_n$ for all $x\in A$ with $a_n\to0$ (independent of $x$), then $\|f_n-f\|_A\le a_n\to0$, so $f_n\rightrightarrows f$ on $A$. B: $F_n(x)=\tfrac1n\sin(nx+n)$: $|F_n|\le 1/n$ so $F_n\rightrightarrows0$ on $\mathbb R$.
K12 | Cauchy criterion for uniform convergence | B Thm 8.1.10 (10-mark material) | needs K07,K08,P08,P09 | weight: 10 (25-Q26) + 15 (21-Q38a)
  Statement: Let $(f_n)$ be a sequence of bounded functions on $A$. Then $(f_n)$ converges uniformly on $A$ to a bounded function $f$ if and only if for each $\varepsilon>0$ there is $H(\varepsilon)\in\mathbb N$ such that $\|f_m-f_n\|_A\le\varepsilon$ for all $m,n\ge H(\varepsilon)$.
K13 | Interchange fails for pointwise limits: continuity and derivative | B Ex 8.2.1(a,b) | needs K02,P10 | weight: 1 (MCQ-11)
  Statement: $g_n(x)=x^n$ on $[0,1]$ are continuous (even $C^1$) and $g_n\to g$ pointwise, $g=0$ on $[0,1)$, $g(1)=1$; $g$ is not continuous at $1$, hence not differentiable at $1$. Pointwise convergence does not preserve continuity.
K14 | Interchange fails for the integral | B Ex 8.2.1(c,d) | needs K02,P11 | weight: 3 (22-Q10)
  Statement: $h_n(x)=2nxe^{-nx^2}$ on $[0,1]$: $\int_0^1h_n=1-e^{-n}\to1$ but $h_n\to h=0$ and $\int_0^1h=0$. Similarly the triangle spikes $f_n$ of 8.2.1(c): $\int_0^1f_n=1$ for all $n\ge2$, $f_n\to0$. So $\lim\int f_n\ne\int\lim f_n$ in general.
K15 | Uniform limit of continuous functions is continuous | B Thm 8.2.2 (10-mark material) | needs K04,P10,M09 | weight: 5 (25-Q20)
  Statement: Let $(f_n)$ be a sequence of continuous functions on $A\subseteq\mathbb R$ converging uniformly on $A$ to $f:A\to\mathbb R$. Then $f$ is continuous on $A$.
K16 | Using 8.2.2: contrapositive proves non-uniformity; converse is false | B Remark after 8.2.2; Ex 8.2.1, 8.2.2 (Ex 2) | needs K15,K10 | weight: 7 (22-Q31)
  Statement: if each $f_n$ is continuous but the pointwise limit $f$ is discontinuous, then $f_n\not\rightrightarrows f$. The converse is false: $f_n\rightrightarrows f$ is sufficient, not necessary, for continuity of $f$ (e.g. $x/n\to0$ on $\mathbb R$ and the spikes of 8.2.1(c) have continuous limit $0$ but are not uniform).
K17 | Sums and products of uniformly convergent sequences | B Ex 8.1.21-24 (not numbered theorems) | needs K04,K08,P05 | weight: 1 (MCQ-13 adapted)
  Statement: If $f_n\rightrightarrows f$ and $g_n\rightrightarrows g$ on $A$ then $f_n+g_n\rightrightarrows f+g$ and $cf_n\rightrightarrows cf$. If moreover all $f_n,g_n$ are bounded then $f_ng_n\rightrightarrows fg$. Without boundedness products may fail: $f_n=x+\tfrac1n\rightrightarrows x$ on $\mathbb R$ but $f_n^2\not\rightrightarrows x^2$.
Totals: 17 K. Exam budget guide (min 10 marks in the real exam): 10-mark pool = K12, K15, K08 (+K10 as a "discuss x^n" 15-mark original); 5-6 marks = K02/K09/K16 problems; 2-3 marks = K01, K04, K07 definitions and K02 limits.

## 2. PREREQUISITES P## (from Real Analysis I) and MATHS TOOLS M## (from zero)
P01 | eps-N definition of limit | x_n -> x iff for each eps>0 there is N with |x_n - x|<eps for n>=N | used K01,K03
P02 | uniqueness of limits (B 3.1.4) | at most one limit, so f is determined by (f_n) | K01
P03 | standard limits | lim 1/n = 0; lim b^n = 0 if |b|<1; b^n unbounded if |b|>1; (-1)^n diverges; lim n^{1/n}=1; lim(1+1/n)^n=e; lim n e^{-n a}=0 for a>0 | K02,K09
P04 | algebra of limits (B 3.2.3) and squeeze | sums/products/quotients of convergent sequences; if |a_n|<=b_n -> 0 then a_n -> 0 | K02,K11
P05 | bounded sequences / bounded functions; triangle inequality | |a+b|<=|a|+|b|, |a-b|>=||a|-|b|| | K11,K17
P06 | order limit theorem (B 3.2.6) | if a<=x_n<=b for all n and x_n->x then a<=x<=b (used when n->infinity in an inequality) | K12
P07 | supremum | sup S is the least upper bound: sup S <= c iff every s in S satisfies s<=c; if some s>c then sup S>c; a sup need not be attained | K07,K08,K09
P08 | Cauchy sequences (B 3.5.1-3.5.5) | (a_n) convergent iff Cauchy: for eps>0 exists K, |a_m-a_n|<eps for m,n>=K | K12
P09 | triangle inequality with eps/2 (and eps/3) | split an error into equal pieces | K12,K15
P10 | continuity at a point (B 5.1.1) | f continuous at c in A iff for each eps>0 there is delta>0 with |f(x)-f(c)|<eps whenever x in A,|x-c|<delta | K13,K15,K16
P11 | integral facts | integrals of continuous functions exist; FTC (B 7.3.1): int_a^b H' = H(b)-H(a) | K14
M01 | a function is ONE object | f_n is a whole graph; "f_n -> f" compares graphs of f_n to graph of f; uniform = whole graph lies in an eps-tube | K01-K11
M02 | fix x first, then n | pointwise limit: x is frozen, n runs; the answer is a function of x | K01,K02
M03 | quantifier order | pointwise: for all eps, for all x, exists K(eps,x). Uniform: for all eps, exists K(eps), for all x. Only the position of "for all x" moves; draw dependency arrows eps -> K and x -> K (arrow x -> K absent in uniform) | K03,K04
M04 | sup of |f_n - f| by calculus | form d_n(x)=|f_n(x)-f(x)|; find critical points (derivative=0), compare endpoint values and limits at open ends/infinity; the sup is the largest of these (it may be approached, not attained) | K09
M05 | maximising quickly | AM-GM: 1+n^2x^2 >= 2nx, so nx/(1+n^2x^2) <= 1/2 with equality at x=1/n; t - t^2 <= 1/4 with t=x^n | K09
M06 | choosing x_n | pick x_n where f_n is largest or where f_n(x) = 1/2 (x^n: x_n=2^{-1/n}); or x_n = n (for x/n); then |f_n(x_n)-f(x_n)| >= eps_0 for a fixed eps_0>0 | K06
M07 | negating "for all eps exists K for all x" | there is eps_0 so that for every K some n>=K and some x have |f_n(x)-f(x)|>=eps_0 | K05
M08 | piecewise limit function and its continuity | write f case by case (|x|<1, x=1, x>1); check jumps; a jump of f with f_n continuous settles non-uniformity via 8.2.2 | K02,K16
M09 | the eps/3 trick | |f(x)-f(c)| <= |f(x)-f_H(x)| + |f_H(x)-f_H(c)| + |f_H(c)-f(c)| ; two terms controlled by uniformity (same H for all x), the middle by continuity of one fixed f_H | K15
M10 | domain bookkeeping | state A (where f_n are defined), A_0 (where limit exists) and the set on which uniformity is tested; they can differ | K02,K10
M11 | sup vs max | sup x^n over [0,1) is 1 but never attained; 1 is still the norm | K09

## 3. PROOF SKELETONS (numbered, each step with WHY). [10] = 10-mark material
### 3.1 Uniform => pointwise (B remark after 8.1.4) [2-3 marks]
1. Let f_n => f on A_0, x in A_0, eps>0. WHY: start from the definition.
2. Take K(eps) from 8.1.4; for n>=K, |f_n(x)-f(x)|<eps. WHY: the uniform K works for every x, in particular this x.
3. So f_n(x)->f(x) for each x. WHY: this is 8.1.1.
(Converse false: x^n on [0,1), x/n on R.)

### 3.2 Lemma 8.1.5 (not uniform iff eps_0, subsequence, x_k) [5]
1. Not uniform means: NOT[for all eps exists K for all n>=K for all x in A_0: |f_n(x)-f(x)|<eps]. WHY: negate 8.1.4.
2. Negation: there is eps_0>0 such that for every K there are n>=K and x in A_0 with |f_n(x)-f(x)|>=eps_0. WHY: swap each quantifier, negate inequality.
3. Take K=1: get n_1 and x_1. K=n_1+1: get n_2>n_1, x_2. Continue. WHY: build a subsequence (induction).
4. So |f_{n_k}(x_k)-f(x_k)|>=eps_0 for all k. WHY: this is (5).
5. Conversely given such n_k, x_k: for any K choose k with n_k>=K; the pair (n_k,x_k) violates (4). WHY: subsequence indices are unbounded.
Use: B 8.1.6(a): x_k=k, |f_k(k)|=1; (b): x_k=(1/2)^{1/k}, value 1/2; (c): x_k=-k, value k.

### 3.3 Lemma 8.1.8 (B p.245) [10-mark material]
Statement: bounded f_n on A: f_n => f iff ||f_n - f||_A -> 0.
(=>)
1. Suppose f_n => f; let eps>0. By 8.1.4 there is K(eps) with |f_n(x)-f(x)|<=eps for all x in A, n>=K(eps). WHY: uniformity: one K for all x.
2. eps is an upper bound of {|f_n(x)-f(x)|: x in A}, so by definition of supremum ||f_n-f||_A <= eps for n>=K(eps). WHY: sup is the least upper bound.
3. eps arbitrary, so ||f_n-f||_A -> 0. WHY: this is the definition of limit of the real sequence ||f_n-f||_A.
(<=)
4. Suppose ||f_n-f||_A -> 0; given eps>0 there is H(eps) with ||f_n-f||_A <= eps for n>=H(eps). WHY: definition of limit.
5. By (7) in B 8.1.7 (|phi(x)|<=||phi|| for every x), |f_n(x)-f(x)|<=||f_n-f||_A<=eps for all x in A and n>=H(eps). WHY: every term of a set is <= its sup.
6. H depends only on eps, so f_n => f on A. QED. WHY: matches 8.1.4 (the form with <= instead of < is equivalent: use eps/2).
Note: f_n and f bounded is needed so the sup is a finite real number. If f_n - f is unbounded (x/n on R) the norm is +infinity: automatically not uniform.

### 3.4 Theorem 8.1.10 Cauchy criterion [10-mark material]
(=>) Let f_n => f, eps>0.
1. By 8.1.8 there is K(eps/2) with ||f_n-f||_A <= eps/2 for n>=K(eps/2). WHY: use eps/2 so that two such pieces add to eps.
2. For m,n>=K(eps/2) and every x in A: |f_m(x)-f_n(x)| <= |f_m(x)-f(x)|+|f_n(x)-f(x)| <= eps/2+eps/2 = eps. WHY: triangle inequality.
3. Take sup over x: ||f_m-f_n||_A <= eps for m,n>=H(eps):=K(eps/2). WHY: eps bounds every |f_m(x)-f_n(x)|, so bounds the sup.
(<=) Assume the norm condition.
4. For each fixed x, |f_m(x)-f_n(x)| <= ||f_m-f_n||_A <= eps for m,n>=H(eps) (8). So (f_n(x)) is a Cauchy sequence in R. WHY: definition of Cauchy; fixing x turns the function condition into a real-sequence condition.
5. By Cauchy Convergence Criterion 3.5.5, (f_n(x)) converges; define f(x):=lim f_n(x), x in A. WHY: completeness of R; this is the only candidate for the limit (and defines f at every x).
6. In |f_m(x)-f_n(x)|<=eps (m,n>=H) let n->infinity: |f_m(x)-f(x)|<=eps for all x in A, m>=H(eps) (order-limit theorem 3.2.6). WHY: keeps the SAME H for all x, which is exactly uniformity; this step is where the difficulty lies.
7. [add to Bartle] f is bounded: for m=H(1), |f(x)|<=|f_m(x)|+1<=||f_m||_A+1 for all x. WHY: the statement promises a bounded limit.
8. Hence ||f_m-f||_A<=eps for m>=H(eps), i.e. f_n => f (8.1.8). QED.
Exam tip: say aloud the two functions of the proof: step 4 gives pointwise Cauchy => pointwise limit; step 6 upgrades to uniform. Name 3.5.5 and 3.2.6.
Remark (use): the criterion proves/disproves uniform convergence WITHOUT knowing f: x^n on [0,1] is not uniformly Cauchy because ||x^n - x^{2n}||=1/4 (see Q B11).

### 3.5 Theorem 8.2.2 (B p.249) [10-mark material]
Statement: f_n continuous on A, f_n => f on A  =>  f continuous on A.
1. Let eps>0, c in A. We must produce delta>0 with |f(x)-f(c)|<eps for x in A, |x-c|<delta. WHY: P10, continuity at c; c arbitrary gives continuity on A.
2. By uniform convergence there is H=H(eps/3) with |f_n(x)-f(x)|<eps/3 for all x in A, n>=H. Fix this ONE function f_H. WHY: the same H works at x and at c; a single continuous function is then used.
3. For x in A: |f(x)-f(c)| <= |f(x)-f_H(x)| + |f_H(x)-f_H(c)| + |f_H(c)-f(c)| < eps/3 + |f_H(x)-f_H(c)| + eps/3. WHY: add and subtract f_H(x), f_H(c); triangle inequality; outer terms are < eps/3 by step 2 (here uniformity is used at TWO points x and c).
4. f_H is continuous at c, so there is delta=delta(eps/3,c,f_H)>0 with |f_H(x)-f_H(c)|<eps/3 whenever x in A, |x-c|<delta. WHY: continuity of the single function f_H; delta may depend on c, eps and H, which is allowed (we only need continuity, not uniform continuity).
5. For x in A, |x-c|<delta: |f(x)-f(c)|<eps/3+eps/3+eps/3=eps. WHY: combine 3 and 4.
6. c arbitrary => f continuous on A. QED.
Where hypotheses are used: uniformity in step 2 (the same H for x and c); continuity of f_H in step 4. Pointwise convergence cannot do step 2 (H would depend on x, and x moves with delta).
Remark: converse false (K16). Bridge: apply to partial sums for series (not tested).

### 3.6 Using 8.2.2 to prove non-uniformity (technique) [5]
1. Check every f_n is continuous on A. 2. Find the pointwise limit f. 3. Show f is discontinuous at some point c in A. 4. Conclude: if f_n => f then f would be continuous (8.2.2), contradiction. WHY: contrapositive. Caution: if f is continuous this proves NOTHING (x/n on R).

### 3.7 Sum and product (B Ex 8.1.21, 23) [5-6]
Sum: ||(f_n+g_n)-(f+g)|| <= ||f_n-f||+||g_n-g|| -> 0 (triangle inequality of sup norm). WHY: Lemma 8.1.8.
Product (all f_n,g_n bounded): (1) f is bounded (Ex 8.2.7): |f(x)|<=|f_N(x)|+1 for N with norm<1, so ||f||<=||f_N||+1. (2) ||f_n||<=||f||+1=:M for n>=N. (3) f_ng_n-fg = f_n(g_n-g)+g(f_n-f), so ||f_ng_n-fg|| <= M||g_n-g||+||g|| ||f_n-f|| -> 0. WHY: this identity splits the product error; boundedness is the hypothesis that bounds f_n uniformly in n and x. Counterexample without boundedness: f_n=g_n=x+1/n on R: f_n^2 - x^2 = 2x/n+1/n^2, unbounded in x, sup = infinity; x_n=n gives value >=2.

### 3.8 Example derivations (used in 8.2.1)
(a) x^n continuous on [0,1], limit g jump at 1; so 8.2.2 => not uniform (agrees with 8.1.9(b)).
(c) f_n spikes: f_n=n^2x on [0,1/n], -n^2(x-2/n) on [1/n,2/n], 0 on [2/n,1] (n>=2). Triangle with base 2/n and height n: integral = (1/2)(2/n)(n)=1. For x=0 f_n(0)=0; for x>0 and n>2/x f_n(x)=0; so f=0 and int f=0 != 1. ||f_n||=n -> infinity.
(d) h_n=2nxe^{-nx^2}=H_n', H_n=-e^{-nx^2}: int_0^1 h_n = 1-e^{-n}. Pointwise: h_n(0)=0; for x>0, e^{nx^2}>=1+nx^2+n^2x^4/2 > n^2x^4/2, so 0<h_n(x)<2nx*2/(n^2x^4)=4/(n x^3) -> 0. ||h_n||=sqrt(2n/e) at x=1/sqrt(2n) (infinity as n grows).

## 4. WORKED EXAMPLES (every B example in scope, recomputed)
### 8.1.2 pointwise limits
(a) f_n=x/n on R: for fixed x, x/n = x*(1/n) -> x*0 = 0. f=0 on R. K(eps,x) > |x|/eps: depends on x.
(b) g_n=x^n on R: x=1: 1; |x|<1: 0; x=-1: (-1)^n diverges; |x|>1: unbounded. So A_0=(-1,1], g=0 on (-1,1), g(1)=1.
(c) h_n=(x^2+nx)/n = x^2/n + x -> x on R.
(d) F_n=sin(nx+n)/n: |F_n|<=1/n, so F_n(x)->0 for all x, with the same bound 1/n for all x simultaneously.
### 8.1.6 non-uniformity by points
(a) x/n on R: n_k=x_k=k: |k/k - 0| = 1, so not uniform on R.
(b) x^n on (-1,1]: x_k=2^{-1/k}: g_k(x_k)=1/2, g(x_k)=0: difference 1/2; not uniform on (-1,1] (nor on [0,1)).
(c) (x^2+nx)/n on R: x_k=-k: h_k(-k)=(k^2-k^2)/k=0, h(-k)=-k, difference k -> infinity.
### 8.1.9 sup-norm computations
(a) A=[0,1]: ||x/n||=sup x/n = 1/n -> 0: uniform on [0,1]. (On R: f_n-f unbounded, Lemma 8.1.8 not applicable; use 8.1.6(a).)
(b) A=[0,1], g_n-g = x^n on [0,1), 0 at x=1: ||g_n-g||=sup{x^n:0<=x<1}=1 (approached as x->1-, not attained) for every n. Not ->0: not uniform.
(c) A=[0,8], h_n-h=x^2/n: ||.||=64/n -> 0: uniform on [0,8] (and on any bounded [-b,b]: b^2/n). Not uniform on R.
(d) F_n: ||F_n||_R <= 1/n; exactly 1/n (value attained when nx+n=pi/2+2pi m). Uniform on R.
(e) G_n=x^n(1-x), G=0 on [0,1]: G_n'=x^{n-1}(n-(n+1)x)=0 at x_n=n/(n+1) (interior, derivative changes + to -, a max). ||G_n||=(n/(n+1))^n/(n+1) = n^n/(n+1)^{n+1} = (1+1/n)^{-n}/(n+1). Values: n=1: 1/4; n=2: 4/27=0.1481; n=5: 3125/46656=0.0670; n=10: 0.03505. Limit 0 since (1+1/n)^{-n} -> 1/e and 1/(n+1)->0; or simply <= 1/(n+1). Uniform on [0,1].
### 8.2.1 interchange failures
(a),(b) x^n: continuous and C^1 on [0,1]; limit g has a jump at 1, not continuous, not differentiable at 1. Not uniform (8.1.9(b)).
(c) spikes, ints = 1, limit 0 continuous: int f = 0 != 1 = lim int f_n. Also not uniform (||f_n||=n).
(d) h_n: int h_n = 1-e^{-n} -> 1, h=0, int h = 0.

## 5. PYQ MAP (21 in-scope M4 tags -> K codes). Exact repeats grouped under one MAIN tag with "also"
Paper tags: MTS6B10-YY (MTS), MAT6B09-YY (MAT). Marks as printed.
G01 Define uniform norm | MAIN MTS6B10-25-Q9 (A,2) | K07 (K08)
G02 Define pointwise convergence | MAIN MTS6B10-22-Q8 (A,3) | K01; also MAT6B09-21-Q21 first half
G03 Define uniform convergence | MAIN MTS6B10-26-Q9 (A,2) | K04
G04 lim e^{-nx}, x>=0 | MAIN MTS6B10-25-Q10 (A,2) | K02 (limit 1 at x=0, 0 for x>0)
G05 lim nx/(1+nx), x>=0 | MAIN MTS6B10-26-Q10 (A,2) | K02 (0 at x=0, 1 for x>0)
G06 lim (x^2+nx)/n | MAIN MAT6B09-22-Q8 (Part A,1) | K02 (limit x)
G07 lim cos(nx+n)/n | MAIN MAT6B09-21-Q10 (A,1) | K02 (limit 0); also MTS6B10-22-MCQ-Q12 (sin version, answer 0), adapted -> K11
G08 Sup-norm criterion (both directions) | MAIN MTS6B10-26-Q20 (B,5) | K08; also MAT6B09-22-Q19 (B,4, the "<=" direction only)
G09 Cauchy criterion for uniform convergence | MAIN MTS6B10-25-Q26 (C,10) | K12; also MAT6B09-21-Q38a (D,15)
G10 Uniform limit of continuous is continuous | MAIN MTS6B10-25-Q20 (B,5) | K15 (K16)
G11 Pointwise limit & uniform convergence of x^n (on (-1,1]) | MAIN MTS6B10-22-Q9 (A,3) | K06 (K05,K10)
G12 Uniform convergence of x^n on [0,1] | MAIN MAT6B09-21-Q37b (D,15) | K10 (K06,K09,K16); [also overlaps G11 and MAT6B09-21-Q21 (test convergence of x^n, B,6, MAIN for K02)]
G13 Test convergence of x^n(1-x) on [0,1] | MAIN MAT6B09-21-Q32 (C,9) | K09 (K08)
G14 Discuss x^n/(x^n+1) on [0,2] | MAIN MAT6B09-22-Q31 (C,7) | K16 (K02,K15,K06)
G15 h_n=2nxe^{-nx^2}: int lim != lim int | MAIN MTS6B10-22-Q10 (A,3) | K14 (K02)
G16 MCQ (g_n=x^n continuous limit on which set) | MAIN MTS6B10-22-MCQ-Q11 (1) | K13 (K02,K15); answer D, adapted to a 3-mark A question
G17 MCQ lim (1/n) sin(nx+n) | MTS6B10-22-MCQ-Q12 (1) | see G07 / K11; answer B (0)
G18 MCQ f_n => f: which of 2f_n, f_n^2, f_n^3 converge uniformly | MAIN MTS6B10-22-MCQ-Q13 (1) | K17; answer D (none must); adapted
Tag coverage: explicit list of the 21 tags and where each is placed: MTS25-Q9 (A1), MTS25-Q10 (A4), MTS25-Q20 (C2), MTS25-Q26 (C1), MTS26-Q9 (A3), MTS26-Q10 (A5), MTS26-Q20 (C3), MAT22-Q8 (A6), MAT22-Q19 (C3 also), MAT22-Q31 (B3), MAT21-Q10 (A7), MAT21-Q21 (B1), MAT21-Q32 (B2), MAT21-Q37b (C4), MAT21-Q38a (C1 also), MCQ22-Q11 (A11), MCQ22-Q12 (A8), MCQ22-Q13 (A12), MTS22-Q8 (A2), MTS22-Q9 (A9), MTS22-Q10 (A10). = 21.
K usage in PYQ: K01:2 K02:6 K04:1 K06:2 K07:1 K08:2 K09:1 K10:1 K11:1(adapted) K12:2 K13:1 K14:1 K15:2 K16:1 K17:1. NEVER tested: K03, K05 (only as tools).
Likely future (not yet asked): K05 state Lemma 8.1.5 and apply; 8.2.1(c) spikes; exercise-type: nx/(1+n^2x^2), x/(x+n), arctan nx, sums/products (Ex 22).
OUT (listed, not placed): MTS25-Q11, MAT22-Q21 (M-test); MTS26-Q11, MTS22-Q11, MAT21-Q23 (Cauchy criterion for series); MAT22-Q7 (define unif conv of series), MAT22-Q20 (series of continuous), MAT22-Q22, MAT21-Q31, MAT21-Q9 (series); MTS26-Q26 (8.2.4 integral interchange).

## 6. MODEL PAPER PLAN (module 4): Section A 20 x 3 = 60, Section B 16 x 6 = 96, Section C 4 x 10 = 40 (total 196 marks over 40 questions; student attempts a subset in real exam, this is a practice bank). ★ = ANCHOR question for the stated K (each K17 is the anchor of exactly one question; other questions are variants testing the technique/trap in the "idea" column, with K tags in brackets). Source tags in {}.
### Section A (3 marks each). Sketch = marking points + final values
A1 ★K07 {MTS25-Q9}. Define bounded function and uniform norm ||phi||_A on A. Sketch: phi bounded if phi(A) bounded; ||phi||_A:=sup{|phi(x)|:x in A}; ||phi||_A<=eps iff |phi(x)|<=eps for all x in A. Example ||sin||_R=1.
A2 ★K01 {MTS22-Q8; also MAT21-Q21a}. Define pointwise convergence of (f_n) on A_0 to f. Sketch: for each x in A_0, (f_n(x)) -> f(x); equivalently for each eps and x exists K(eps,x). Limit unique by 3.1.4.
A3 ★K04 {MTS26-Q9}. Define uniform convergence of (f_n) on A_0 to f. Sketch: for each eps exists K(eps) independent of x: n>=K => |f_n(x)-f(x)|<eps for ALL x in A_0. Implies pointwise. State the quantifier difference.
A4 K02 {MTS25-Q10}. Evaluate lim e^{-nx} for x>=0. Sketch: x=0: 1; x>0: e^{-nx}=(e^{-x})^n, 0<e^{-x}<1 so ->0. f(0)=1, f(x)=0 (x>0). Trap: x=0 exceptional.
A5 K02 {MTS26-Q10}. Evaluate lim nx/(1+nx), x>=0. Sketch: x=0: 0; x>0: nx/(1+nx)=1/(1+1/(nx)) -> 1. f(0)=0, f=1 on (0,inf). Note the continuous f_n have a jump limit.
A6 K02 {MAT22-Q8}. Evaluate lim (x^2+nx)/n. Sketch: = x^2/n + x -> x for every x in R.
A7 K02 {MAT21-Q10}. Find lim cos(nx+n)/n. Sketch: |cos|<=1 so |.|<=1/n -> 0; squeeze; limit 0 for all x.
A8 ★K11 {MCQ22-Q12 adapted; also MAT21-Q10}. Show that F_n(x)=(1/n)sin(nx+n) converges uniformly on R to 0 and find ||F_n||_R. Sketch: |F_n(x)|<=1/n for all x; ||F_n||=1/n (attained at x=pi/(2n)-1); ->0 so uniform (8.1.8).
A9 ★K06 {MTS22-Q9}. Discuss the uniform convergence of f_n(x)=x^n on (-1,1]. Sketch: pointwise limit g=0 on (-1,1), g(1)=1. Take x_k=2^{-1/k}: |x_k^k - 0|=1/2=eps_0, so not uniform (8.1.5). (Also ||x^n-g||=1.)
A10 ★K14 {MTS22-Q10}. h_n(x)=2nx e^{-nx^2} on [0,1], h=0. Show lim int h_n != int h. Sketch: h_n=H_n', H_n=-e^{-nx^2}, int_0^1 h_n=1-e^{-n} -> 1; h_n(x)->0 (x=0: 0; x>0: e^{nx^2}>n^2x^4/2); int h=0. 1!=0.
A11 K13 {MCQ22-Q11 adapted; K02,K15}. For g_n=x^n on R decide on which of (-1,1], (-2,1], (0,1], (-1,1) the sequence converges to a continuous function. Sketch: A_0=(-1,1]; limit 0 on (-1,1), 1 at 1. On (-1,1]: jump at 1, not continuous. (-2,1]: diverges for x<=-1. (0,1]: jump at 1. (-1,1): limit 0 continuous. Answer: only (-1,1). (Note: on (-1,1) it is still not uniform.)
A12 ★K17 {MCQ22-Q13 adapted}. If f_n => f on R, are (2f_n), (f_n^2), (f_n^3) uniformly convergent on R? Sketch: 2f_n => 2f yes (||2(f_n-f)||=2||f_n-f||). f_n^2: not necessarily: f_n=x+1/n, f_n^2-x^2=2x/n+1/n^2 unbounded (x=n gives >=2). Same for cubes. True if f_n bounded.
A13 ★K03 (Lemma 8.1.3). For f_n=x/n and f=0 on R find K(eps,x) and show it cannot be chosen independent of x. Sketch: |x/n|<eps iff n>|x|/eps; K(eps,x)=ceil(|x|/eps)+1. As |x|->inf K -> inf, so no common K: not uniform on R.
A14 K09/K02 (Ex 8.1.1). Show x/(x+n) -> 0 for x>=0 and find ||f_n||_[0,a] and ||f_n||_[0,inf). Sketch: 0<=x/(x+n)<=x/n->0. Increasing in x: sup on [0,a] = a/(a+n)->0 (uniform). On [0,inf) sup = 1 (limit as x->inf, never attained): not uniform.
A15 K16 (Ex 8.1.6). Show lim arctan(nx) = (pi/2)sgn x and deduce f_n not uniform on R. Sketch: x>0: arctan(nx)->pi/2; x<0: -pi/2; x=0: 0. f_n continuous, f discontinuous at 0; by 8.2.2 not uniform on R (nor on any set containing 0 and points on one side...). Uniform on [a,inf) (a>0) since pi/2-arctan(na)->0.
A16 K02 (Ex 8.1.10). Does lim (cos pi x)^{2n} exist? Sketch: t=cos^2(pi x) in [0,1]; t^n -> 1 if t=1 i.e. x in Z; ->0 if 0<=t<1. Limit f=1 on Z, 0 elsewhere. Trap: |cos|<1 off integers.
A17 K10 (B 8.1.9(a)). Show x/n -> 0 uniformly on [0,1] but not on R. Sketch: ||x/n||_[0,1]=1/n->0. On R x_k=k gives 1 (8.1.6(a)). Same sequence, different set.
A18 K09 (Ex 8.1.8, 18). Show x e^{-nx} -> 0 uniformly on [0,inf). Sketch: derivative e^{-nx}(1-nx)=0 at x=1/n, max; ||.||=1/(e n) -> 0.
A19 K10 (B 8.1.9(b) + Ex 8.1.14). Show x^n -> 0 uniformly on [0,1/2] and compute the norm. Sketch: increasing in x, ||x^n||_[0,1/2]=2^{-n}->0. Contrast with [0,1): sup=1.
A20 K16 (B Remark 8.2.2). State Theorem 8.2.2 and show its converse is false. Sketch: statement; f_n=x/n continuous, f_n -> 0 continuous on R, but not uniform (x_k=k). So uniform convergence is sufficient, not necessary.
### Section B (6 marks each)
B1 ★K02 {MAT21-Q21}. Define pointwise convergence of a sequence of functions. Test the convergence of (x^n). Sketch: def; x=1:1; |x|<1:0; x=-1:(-1)^n diverges; |x|>1: unbounded. Converges exactly on (-1,1], g=0 on (-1,1), g(1)=1 (B 8.1.2(b)).
B2 ★K09 {MAT21-Q32}. Discuss the convergence of x^n(1-x) on [0,1]. Sketch: pointwise 0 (x=0,1: 0; 0<x<1: x^n->0). G_n'=x^{n-1}(n-(n+1)x)=0 at x_n=n/(n+1) max. ||G_n||=n^n/(n+1)^{n+1} <= 1/(n+1) -> 0 (n=1: 1/4, n=2: 4/27, n=10: 0.035). Uniform. Compare with x^n alone (not uniform).
B3 ★K16 {MAT22-Q31}. Discuss the convergence of x^n/(x^n+1) on [0,2]. Sketch: 0<=x<1: 0; x=1: 1/2; 1<x<=2: x^n->inf so ->1. f has jumps at 1 but f_n continuous: not uniform on [0,2] (8.2.2). Direct: ||f_n-f||=1/2 for all n (sup of x^n/(1+x^n) on [0,1) is 1/2, not attained; on (1,2] sup of 1/(1+x^n) is 1/2). Uniform on [0,b] (b<1): <=b^n; on [a,2] (a>1): <=1/(1+a^n).
B4 ★K05. Prove Lemma 8.1.5 (criterion for non-uniform convergence) and use it on f_n(x)=(x^2+nx)/n on R. Sketch: negate 8.1.4 (3.2); h=x; x_k=-k: h_k(-k)=0, h(-k)=-k, difference k>=1: not uniform on R. Compare with [0,8]: 64/n.
B5 ★K13. For g_n=x^n on [0,1] show: each g_n has a continuous derivative, g_n -> g pointwise, g not continuous (hence not differentiable) at 1. Why does uniform convergence fail? Sketch: g_n'=nx^{n-1}; g_n(1)=1, g_n(x)->0 for x<1; g(1^-)=0 != g(1)=1; 8.2.2: if uniform then g would be continuous. Also ||g_n-g||=1.
B6 K09/K06 (Ex 8.1.2, 8.1.12). f_n=nx/(1+n^2x^2) on [0,inf): show f_n -> 0 pointwise, ||f_n||=1/2 (moving bump), not uniform on [0,inf) but uniform on [a,inf), a>0. Sketch: x=0:0; x>0: <=1/(nx)->0. AM-GM: 1+n^2x^2>=2nx so f_n<=1/2 with equality at x=1/n (x_n->0). On [a,inf): for n>=1/a f_n decreasing on [a,inf), sup=na/(1+n^2a^2) < 1/(na) -> 0.
B7 K14/K16 (B 8.2.1(c)). Triangular spikes f_n (n>=2): show f_n continuous, f_n -> 0, int f_n=1, ||f_n||=n. Deduce lim int != int lim, and uniform convergence fails though limit is continuous. Sketch: base 2/n height n: area 1; for x>0, f_n(x)=0 once n>2/x; ||f_n||=n -> inf.
B8 K10 (B 8.1.9(c)). (x^2+nx)/n -> x. Prove uniform on [-b,b] and on [0,8] (norm 64/n); not on R. Sketch: h_n-h=x^2/n; ||.||_[-b,b]=b^2/n; on R unbounded; x_k=-k difference k.
B9 K17 (Ex 8.1.22, 23). f_n=x+1/n => x on R but f_n^2 not => x^2 on R; prove f_n^2 => x^2 on [0,1]. Sketch: ||f_n-x||=1/n. f_n^2-x^2=2x/n+1/n^2: sup on R infinity; on [0,1] sup = 2/n+1/n^2 -> 0. Moral: products need boundedness.
B10 K16/K09 (Ex 8.2.6). f_n=1/(1+x^n) on [0,1]: find the pointwise limit; is convergence uniform? Sketch: f=1 on [0,1), f(1)=1/2. f_n continuous, f discontinuous at 1: not uniform. ||f_n-f||=sup x^n/(1+x^n) over [0,1) = 1/2 (approached as x->1-, not attained).
B11 K12 (Cauchy criterion used). Show (x^n) is not uniformly Cauchy on [0,1], hence not uniformly convergent, without using the limit. Sketch: ||x^n - x^{2n}||_[0,1]=max(t-t^2)=1/4 at x=2^{-1/n}, t=x^n=1/2. So for any H taking m=H,n=2H gives 1/4>eps (eps<1/4): Cauchy criterion fails.
B12 K11/K13 (C14 caution). F_n=sin(nx)/n => 0 on R (||F_n||=1/n) but derivatives cos(nx) do not converge. Sketch: |F_n|<=1/n. F_n'(x)=cos nx: at x=0 equals 1 for all n; at x=pi equals (-1)^n diverges. So limit of derivatives != derivative of limit (f=0, f'=0). Uniform convergence of f_n alone is not enough for derivatives (practicum 8.2.3 needs f_n' uniform).
B13 K09 (Ex 8.1.19). Show x^2 e^{-nx} -> 0 uniformly on [0,inf) and compute the norm. Sketch: derivative xe^{-nx}(2-nx)=0 at x=2/n: ||.||=4e^{-2}/n^2 -> 0 (n=1: 0.5413, n=10: 0.005413).
B14 K06/K10 (Ex 8.1.20). n^2x^2e^{-nx} -> 0 pointwise; not uniform on [0,inf), uniform on [a,inf) (a>0). Sketch: max at x_n=2/n equals 4e^{-2}=0.5413 for every n (not ->0). For n>=2/a the function decreases on [a,inf): sup=n^2a^2e^{-na}->0.
B15 K14 (Ex 8.2.14). f_n=nx/(1+nx) on [0,1]: pointwise limit f (0 at 0, 1 on (0,1]), not uniform, yet int f_n -> int f. Sketch: int_0^1 nx/(1+nx)dx = 1 - ln(1+n)/n -> 1 = int f. Not uniform since f_n continuous, f jumps at 0 (also ||f_n-f||=sup 1/(1+nx)=1). Moral: uniform is sufficient not necessary for swapping integral.
B16 K17 (Ex 8.1.21, 23). Prove sum of two uniformly convergent sequences is uniformly convergent; prove product if all bounded. Sketch: see 3.7.
### Section C (10 marks each; 10-mark material)
C1 ★K12 {MTS25-Q26; MAT21-Q38a}. State and prove the Cauchy criterion for uniform convergence of a sequence of bounded functions. Sketch: 3.4: 3 marks statement + 3 (=>) + 4 (<=: pointwise Cauchy, define f, n->infty, boundedness).
C2 ★K15 {MTS25-Q20}. Let f_n be continuous on A and f_n => f. Prove f continuous. Then deduce x^n is not uniform on [0,1]. Sketch: 3.5 (7 marks) + application: limit jumps at 1 (3 marks). Mention Weierstrass partial sums bridge for series (not needed).
C3 ★K08 {MTS26-Q20; MAT22-Q19}. Prove that a sequence of bounded functions f_n converges uniformly to f on A iff ||f_n-f||_A -> 0. Apply to x/n on [0,1], and explain why the lemma gives no information on R. Sketch: 3.3 (7 marks) + ||x/n||_[0,1]=1/n; on R f_n-f unbounded, norm infinite, x_k=k (3 marks).
C4 ★K10 {MAT21-Q37b}. Discuss uniform convergence of (x^n) on [0,1], on [0,b] (b<1) and on [0,1). Sketch: limit g (0, g(1)=1). Not uniform on [0,1]: three proofs (x_k=2^{-1/k}, 1/2; ||x^n-g||=1; 8.2.2 jump). On [0,b]: ||x^n||=b^n -> 0 uniform. On [0,1): sup=1 not uniform though the limit is continuous. Moral: remove the bad point, uniformity returns, but only on sets bounded away from 1.
Marks: A 60 + B 96 + C 40 = 196. Every one of the 21 past tags appears (see section 5 list). Every K has exactly one anchor: K01 A2, K02 B1, K03 A13, K04 A3, K05 B4, K06 A9, K07 A1, K08 C3, K09 B2, K10 C4, K11 A8, K12 C1, K13 B5, K14 A10, K15 C2, K16 B3, K17 A12.
Note on interpretation: "every K exactly once as main" cannot hold literally for 40 questions with 17 K, so each K has one anchor; the remaining 23 questions are variants whose DISTINCT technique/trap is in the table: A4 x=0 exceptional; A5 jump limit; A6 completing x^2/n; A7 squeeze; A14 sup at infinity; A15 arctan sgn; A16 cos^2 integer; A17 same f_n two sets; A18 exp calculus; A19 restriction [0,1/2]; A20 converse; B6 AM-GM moving bump; B7 spike integral; B8 bounded sets; B9 product; B10 sup not attained; B11 uniformly Cauchy; B12 derivative; B13 exp; B14 moving max constant; B15 integral swap w/o uniformity; B16 algebra; A11/ A12.

## 7. TRAPS AND COUNTEREXAMPLES
C-numbers refer to pedagogy_ra.md 5.2; C21-C27 new.
C12 x^n on [0,1] (continuous f_n, pointwise limit discontinuous; ||x^n-g||=1) VERIFIED.
C13 moving spike (8.2.1(c)): pointwise 0, int f_n=1, ||f_n||=n VERIFIED.
C14 sin(nx)/sqrt n: uniform to 0 but derivative sqrt n cos nx unbounded VERIFIED (use sin(nx)/n in exam: cos nx diverges at x=pi).
C15 x/n on R (pointwise, not uniform; uniform on bounded sets, norm b/n on [-b,b]) VERIFIED.
C21 nx/(1+n^2x^2) on [0,inf): pointwise 0, ||.||=1/2 at x=1/n (moving bump, bump does not shrink in height).
C22 x^n/(1+x^n) on [0,2] and 1/(1+x^n) on [0,1]: sup of difference is exactly 1/2, not attained.
C23 f_n=x+1/n: f_n => x on R but f_n^2 not (product trap); fine on bounded sets.
C24 arctan(nx): continuous, limit (pi/2)sgn x discontinuous; uniform on [a,inf), a>0, not on (0,inf).
C25 x^n on [0,1): continuous limit 0 but NOT uniform (sup=1): "continuous limit does not imply uniform".
C26 nx/(1+nx) on [0,1]: not uniform but int f_n -> int f: uniform not necessary for integral swapping (so do not say "swapping fails iff not uniform").
C27 n^2x^2e^{-nx}: sup constant 4/e^2=0.5413 at x=2/n: pointwise 0 on [0,inf), uniform only away from 0.
Traps (one-liners):
T1 Evaluating only some x: pointwise needs EVERY x in A_0; exceptional points (x=0, x=1, x=-1) are where the answer changes.
T2 Writing "uniform" after finding sup at one n: need the sup for every n and ||.||_n -> 0.
T3 Taking sup over x in [0,1) of x^n and answering "x^n < 1, so ->0": sup is 1, not attained, ||.|| = 1.
T4 Using 8.1.8 on unbounded f_n-f (x/n on R): norm infinite, so not uniform; Lemma needs bounded functions.
T5 "limit continuous, so uniform" false (C25, C15, C21). Only the contrapositive of 8.2.2 works: discontinuous limit => not uniform.
T6 Quantifier slip: choosing K that depends on x and calling it uniform (K=ceil(|x|/eps)+1 depends on x).
T7 Domain confusion: x^n converges on (-1,1], not on R; x/n is uniform on [0,1], not R. Always state A, A_0.
T8 8.2.2 needs ALL f_n continuous and uniform convergence; in step 3 the SAME index H is used at x and c.
T9 Cauchy criterion: needs the norm over ALL x with BOTH m,n>=H; ||f_{n+1}-f_n||->0 is not enough (sum 1/k partial sums analog; example f_n=1+1/2+...+1/n constant function: ||f_{n+1}-f_n||=1/(n+1)->0 but not Cauchy and not convergent).
T10 Uniform convergence does not preserve derivatives or products without extra hypotheses (B12, B9).
T11 eps_0 must be FIXED and independent of k (x_k=2^{-1/k}: eps_0=1/2).
T12 "Swapping lim and integral/derivative needs uniform" is a sufficient condition (practicum); do not claim necessity (C26).

## 8. FIGURE LIST (F01-F14; exact specs; plot ranges, curves, labels)
F01 x^n on [0,1], n=1,2,4,8,16 (curves y=x^n) and limit g: y=0 on [0,1), open circle at (1,0), filled dot at (1,1). Axes 0..1 x 0..1. Caption: "every curve passes through (1,1); the limit jumps".
F02 eps-tube around f: draw f on [0,1] (any smooth curve, e.g. sin(pi x)/2+0.3), band f+-eps shaded (eps=0.1); show f_n (n small) leaving the band and f_N entirely inside for n>=K. Label "uniform = whole graph in the tube for n>=K".
F03 x^n on [0,1] with tube around g: tube y in [0,0.5] with eps=1/2 around 0 on [0,1); each curve x^n eventually exits the tube near x=1 at x=2^{-1/n}; mark points (x_k,1/2) for k=1,2,4,8,16: x=0.5,0.707,0.841,0.917,0.958 moving to 1.
F04 moving bump f_n=nx/(1+n^2x^2) on [0,3] (some wider), n=1,2,4,8: peak at (1/n,1/2), height constant 1/2, peak moves to 0; limit y=0 dashed. Mark peaks (1,0.5),(0.5,0.5),(0.25,0.5),(0.125,0.5). Alternative curve n x e^{-nx} peaks at (1/n, 1/e)=0.368.
F05 x/n on R vs [0,1]: lines y=x/n, n=1,2,3,5 on x in [-5,5]; vertical tube eps=0.5 around y=0; show lines leave the tube at |x|=n eps (x_k=k, value 1); highlight [0,1] region where lines lie inside tube for n>=2 (norm 1/n).
F06 (x^2+nx)/n: parabolas y=x+x^2/n, n=1,2,4,8 on x in [-4,8] with limit line y=x; shaded region [0,8] with gap at x=8 equal 64/n; mark points (-k,0) vs (-k,-k).
F07 sin(nx+n)/n: n=1,2,4,8 on x in [-3,3] sinusoids with amplitude 1/n; envelope lines y=+-1/n dashed; limit y=0. Caption: "sup = 1/n, not depending on x".
F08 Uniform norm as largest vertical gap: draw f_n and f with a double arrow at the x where |f_n-f| is max, labeled ||f_n-f||_A; second panel: plot d_n(x)=|f_n(x)-f(x)| and its max (e.g. x^n(1-x), n=5: max 0.0670 at x=5/6; n=1: 1/4 at 1/2; n=10: 0.0350 at 10/11).
F09 x^n(1-x) on [0,1] n=1,2,5,10,20 humps with peaks at x=n/(n+1) of height n^n/(n+1)^{n+1} = 0.25, 0.148, 0.0670, 0.0350, 0.0179 (n=20: 20^20/21^21 = 0.01795); humps shrink to 0 (uniform).
F10 Uniformly Cauchy: two curves f_m and f_n inside a band of half-width eps/2 about f; double arrow between them <= eps. Second panel: x^n and x^{2n}, n=4, gap max 1/4 at x=2^{-1/4}=0.841 (not uniformly Cauchy).
F11 Continuity preserved: eps/3 picture (B Fig 8.2.2): curves f, f_H, bands f+-eps/3 around f_H; points (c,f(c)),(c,f_H(c)),(x,f_H(x)),(x,f(x)); label three terms of the triangle inequality.
F12 Interchange failure 8.2.1(a): x^n family with the jump at 1 and the "limit of values at 1 (=1) vs value of limit at x->1- (=0)" double arrow; two-limit table: lim_{x->1} lim_n = 0, lim_n lim_{x->1} = 1.
F13 Interchange failure 8.2.1(c): triangle spikes f_n for n=2,4,8 (heights n at x=1/n, base [0,2/n]) each with area 1, shaded; limit 0. And 8.2.1(d) h_n=2nxe^{-nx^2} n=1,4,16 with peak sqrt(2n/e) at x=1/sqrt(2n): (0.707,0.858),(0.354,1.715),(0.177,3.431), area 1-e^{-n}.
F14 Logic ladder: four-row quantifier table with dependency arrows: pointwise (eps -> K(eps,x), x -> K), uniform (eps -> K(eps), no arrow from x), pointwise-fails example x/n (K ~ |x|/eps), plus implication diagram "uniform => pointwise; pointwise =/=> uniform; uniform => continuity of limit (if f_n continuous); continuity of limit =/=> uniform".
