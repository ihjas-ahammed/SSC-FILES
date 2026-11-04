# Pedagogy research for Real Analysis II study PDFs (Calicut Univ., Bartle & Sherbert 4e)

Evidence labels: [V] = verified in this session via web search; [M] = from author's background knowledge, not re-verified here (check before quoting publicly). The Calicut exam pattern could NOT be verified online; treat Section 5 pattern notes as assumptions to check against the real syllabus/past papers.

---
## 1. The 14 most important insights and the rule each gives us

**1. Self-explanation beats re-reading (Hodds, Alcock, Inglis 2014).** A short self-explanation training booklet for students reading proofs gave large gains in proof comprehension (d about 0.95 in Expt 1), more eye movement back and forth between proof lines, and the gain persisted after a 15-minute in-lecture version. [V] https://dspace.lboro.ac.uk/2134/14964 ; booklet: https://www.lboro.ac.uk/media/media/schoolanddepartments/mathematics-education-centre/downloads/research/SE-booklet.pdf . Dunlosky et al. 2013 rate re-reading and highlighting LOW utility, practice testing and distributed practice HIGH. [V] https://stafforini.com/works/dunlosky-2013-improving-students-learning/
→ **Rule:** After every worked proof, put a "Why this line?" margin next to each step (justify by: definition / earlier line / named theorem). Add 1–2 "Cover and explain" prompts: "Which line used the hypothesis? Where did we use that c lies in the interval?" Never present a proof as an unbroken block.

**2. Separate scratch work from the proof (Cummings; every good epsilon-delta guide).** Cummings's long-form text precedes dozens of proofs with "scratch work" showing how you would find the proof yourself. [V] https://webpages.csus.edu/Jay.Cummings/Books.html . Epsilon-delta guides stress: scratch work runs backwards from |f(x)−L|<ε to find δ (often with implication arrows ⇐), the written proof runs forward and must not assume the conclusion. [V] https://www.themathdoctors.org/?p=1720
→ **Rule:** Every ε–δ / ε–N / ε-partition proof is printed in two columns (or two stacked boxes): "Scratch (how we find δ)" in grey, "Proof (what you write in the exam)" in clean black. Scratch box uses "want … ⇐ …"; proof box begins "Let ε>0. Choose δ = …".

**3. Proof frameworks: write the skeleton from logical structure before thinking (Selden & Selden).** The "formal-rhetorical part" of a proof can be written just by unpacking the statement and definitions; only the "problem-centred" core needs ideas. [V] https://scholarworks.umt.edu/tme/vol10/iss1/14
→ **Rule:** Each definition gets a "Skeleton" box: first line(s) you can write *before* knowing the trick (e.g. "Let ε>0. Choose δ=… Let x∈A with |x−c|<δ. … Hence |f(x)−f(c)|<ε. ∎"). Marks in an exam are largely for this skeleton; teach students to write it first, leave a gap "…", fill the gap second.

**4. Quantifier order is THE obstacle; make it physical (Roh & Lee; Swinyard & Larsen; Dubinsky).** Student errors with the ε–N definition trace to not grasping that quantifier order changes meaning; the "Mayan activity" and ε-strip reinvention tasks cause then resolve cognitive conflict. [V] https://asu.elsevierpure.com/en/publications/the-mayan-activity-a-way-of-teaching-multiple-quantifications-in- ; Swinyard & Larsen 2012 JRME https://nctm.org/Publications/journal-for-research-in-mathematics-education/2012/Vol43/Issue4/Coming-to-Understand-the-Formal-Definition-of-Limit_-Insights-Gained-From-Engaging-Students-in-Reinvention [V]
→ **Rule:** Present continuity vs uniform continuity vs pointwise vs uniform convergence side by side as a "challenge-response game": *Opponent picks ε. You pick δ. Does your δ depend on c / x?* One-line table: "δ may depend on (ε, c)" vs "δ depends on ε only". Colour the variable that is allowed to appear in the choice. Always write ∀ε ∃δ in words ("whatever ε is handed to you, you must be able to produce a δ").

**5. Concept image vs concept definition (Tall & Vinner 1981).** Students' mental image of continuity ("can draw without lifting pen") conflicts with the formal definition and survives instruction. [V] https://link.springer.com/doi/10.1007/BF00305619
→ **Rule:** For each concept give (a) definition, (b) a picture, (c) one example satisfying it that *violates* the naive image (Thomae/Dirichlet type, x·sin(1/x) continuous but wild; f(x)=x² continuous but NOT UC), (d) one example that fits the naive image but fails the definition (1/x on (0,1)). Label this box "Your intuition will lie to you here".

**6. Retrieval practice and spacing (Dunlosky 2013).** Practice testing and distributed practice are the two top-rated techniques. [V] https://stafforini.com/works/dunlosky-2013-improving-students-learning/
→ **Rule:** End each chapter PDF with a 6-item "close the book" recall quiz (state definition; state theorem with hypotheses; give counterexample). Add "Day 1 / Day 3 / Day 7 / exam-week" review tags to each item. Provide a one-page "cards" deck (front: prompt, back: answer).

**7. Worked examples, then faded examples (worked-example / Sweller effect) [M].** Novices learn more from studying worked solutions than from solving cold; then fade steps. Alcock's "How to Study for a Mathematics Degree" and "How to Think About Analysis" advocate the same read-then-reconstruct cycle [M] (Oxford UP).
→ **Rule:** Template for every proof type: Example 1 fully worked (both columns); Example 2 with 2 blanks to fill; Example 3 only the statement ("Try it; hint below"). Hints in graded levels (H1 idea, H2 choice of δ, H3 full).

**8. Interleave problem types (Dunlosky; Rohrer) [V for Dunlosky listing]; students must recognise WHICH method to use.** Weak students succeed block-wise ("this is the δ chapter") and fail mixed.
→ **Rule:** Final page of each chapter: "Which tool?" mixed set of 8 one-line prompts ("Show f has a root", "show sup of f exists", "show f not UC") with answers that name only the tool (IVT / Max–Min / sequential criterion), then the full list of hypotheses to check.

**9. Check the hypotheses: most failures are misapplied theorems (Weber on proof comprehension [M]; Propp exam comments [V] https://faculty.uml.edu/jpropp/305/Exam2Comments.pdf, e.g. students invoking an algebraic limit law for *uniform* convergence that does not exist).**
→ **Rule:** Every theorem box has three lines: STATEMENT / HYPOTHESES CHECKLIST (☐ closed ☐ bounded ☐ continuous ☐ on [a,b]) / WHAT FAILS WITHOUT EACH (one counterexample per hypothesis). This is the single most valuable repeating element.

**10. Counterexamples are half of analysis.** The conclusion of nearly every B&S theorem fails when one hypothesis is dropped; knowing the standard counterexample earns marks and protects against wrong "proofs". (Cummings's second appendix is explicitly a catalogue of pathological examples [V, same Cummings page]; Gelbaum & Olmsted [M].)
→ **Rule:** Build a numbered Counterexample Library (C1…C20, section 5) and cross-reference by number in every theorem's "what fails" line.

**11. Pictures first, but pictures are not proofs (Tao, Needham, 3Blue1Brown).** Sanderson explicitly weighed whether to include ε–δ at all, noting it is largely beside the point for understanding what calculus is about and arrived long after calculus; he included it as a brief, visual game. [V] https://members.3blue1brown.com/posts/to-epsilon-delta-8530689 . Tao's career advice: knowing a statement and proof is not understanding; test by finding alternate proofs/generalising. [V via secondary summaries] https://www.antoinebuteau.com/lessons-from-terence-tao/ ; Tao "Does one have to be a genius to do maths?" https://www.ams.org/journals/notices/202401/rnoti-p30.pdf [V]
→ **Rule:** Each theorem: picture on the left, "picture → line of the proof" arrows. Add a "What the picture does NOT prove" note (e.g. pictures can't show existence of δ for *every* ε).

**12. Analysis needs fluent inequality manipulation; weak calculus habits break proofs [M].** Typical blockers: |a|<ε unpacked, triangle inequality, "add and subtract", bounding a factor by restricting δ ≤ 1.
→ **Rule:** A one-page "Inequality gym" at the start (|x−c|<δ ⇔ c−δ<x<c+δ, triangle ineq. and reverse, |ab|, bounding |x+2| after δ≤1, sup/inf ε-characterisation). Used and linked from later proofs.

**13. Know the examiner (Indian university context).** Past-paper repeats are heavy; marks follow a fixed rubric (statement, setup, key step, conclusion). [M/assumed; Calicut pattern not found online, see section 5]
→ **Rule:** Mark-scheme tags on each worked proof: "(1) statement (1) setup (2) key inequality (1) conclusion". "Writing this much earns 5 marks."

**14. Reading: active reading with a pencil, not a highlighter (Alcock; Houston; Solow) [M].** Houston's "How to Think Like a Mathematician" and Solow's forward–backward method [M] teach: ask "what do I know / what do I want", unpack definitions, build from both ends.
→ **Rule:** Every proof starts with a 2-line "KNOW / WANT" header (KNOW: f continuous at c, so ∀ε ∃δ…; WANT: x_n→c ⇒ f(x_n)→f(c)). Forward–backward arrows are used in scratch boxes.

---
## 2. Proof-writing toolkit (templates). Format in PDF: left "Scratch", right "Proof"

General opening lines (print on every proof page): **KNOW** (unpack hypotheses with definitions) / **WANT** (unpack the conclusion) / **TOOL** (which theorem or definition connects them).

### T1. f is continuous at c (ε–δ)
Skeleton: *Let ε>0. Choose δ = [?]. Let x∈A with |x−c|<δ. Then |f(x)−f(c)| ≤ … < ε.*
Scratch recipe: (i) Write |f(x)−f(c)|. (ii) Factor to get |x−c|·|g(x)|. (iii) If g(x) unbounded, impose δ ≤ 1, so |x−c|<1 gives bound M on |g|. (iv) Need M|x−c|<ε ⇐ |x−c|<ε/M. (v) δ = min{1, ε/M}.
Example f(x)=x² at c=2: scratch |x²−4|=|x−2||x+2|; if |x−2|<1 then 1<x<3 so |x+2|<5; want 5|x−2|<ε ⇐ |x−2|<ε/5. Proof: δ=min{1, ε/5}. Then |x²−4|<5·(ε/5)=ε.
Remember: B&S also accepts the neighbourhood form and the sequential form; state which you use.

### T2. f is NOT continuous at c (sequential criterion)
Skeleton: *Exhibit (x_n) in A with x_n→c but f(x_n) ↛ f(c). By the sequential criterion f is not continuous at c.* Steps: pick x_n; show x_n→c; compute f(x_n); show it does not converge to f(c) (different limit, or oscillates, or unbounded).
Standard choices: Dirichlet function (rational x_n and irrational y_n sequences both →c), signum at 0 (x_n = ±1/n), sin(1/x) at 0 (x_n=1/(nπ) gives 0, y_n=2/((4n+1)π) gives 1).
ε–δ negation (for when asked): ∃ε₀>0 ∀δ>0 ∃x with |x−c|<δ and |f(x)−f(c)|≥ε₀. Give ε₀ explicitly first (e.g. ε₀=1/2).

### T3. f is uniformly continuous on A (ε–δ)
Skeleton: *Let ε>0. Choose δ = [depends on ε ONLY]. Let x,u∈A with |x−u|<δ. Then |f(x)−f(u)|<ε.*
Scratch: factor |f(x)−f(u)| = |x−u|·|h(x,u)|; bound |h| by a constant M that uses only that x,u∈A (e.g. on [0,3], |x+u|≤6). Then δ=ε/M. Compare with T1: here the M must not depend on the point.
Fast routes (check in this order): (a) Lipschitz ⇒ UC; (b) continuous on closed bounded [a,b] ⇒ UC (Uniform Continuity Theorem); (c) continuous on bounded (a,b) and limits exist at both ends ⇒ extend ⇒ UC (B&S 5.4.8 type); (d) ε–δ.

### T4. f is NOT uniformly continuous on A (sequence method)
Use B&S 5.4.2 (Nonuniform continuity criteria): find ε₀>0 and sequences (x_n),(u_n) in A with x_n−u_n→0 but |f(x_n)−f(u_n)|≥ε₀.
Skeleton: *Take ε₀=…; x_n=…, u_n=…; x_n−u_n=…→0; |f(x_n)−f(u_n)|=…≥ε₀. So f is not UC on A.*
Standard pairs: f=1/x on (0,1): x_n=1/n, u_n=1/(n+1), difference →0 but |f|-gap =1. f=x² on ℝ: x_n=n, u_n=n+1/n, f-gap = 2+1/n² ≥ 2. f=sin(1/x) on (0,1): x_n=1/(nπ), u_n=2/((2n+1)π)... (check values: sin(1/x_n)=0 vs ±1; difference →0).
Expect: unbounded domain or an open end where f blows up/oscillates.

### T5. Lipschitz ⇒ UC
Lipschitz: |f(x)−f(u)|≤K|x−u| for all x,u∈A. Proof: Let ε>0; δ=ε/K (K>0 WLOG). If |x−u|<δ then |f(x)−f(u)|≤K|x−u|<ε. Extra: derivative bounded by K on an interval ⇒ Lipschitz by MVT (f(x)−f(u)=f′(ξ)(x−u)). Converse false: √x on [0,1] is UC but not Lipschitz.

### T6. Using IVT / Max–Min / roots
IVT skeleton: *f continuous on I=[a,b] (CHECK), f(a)<k<f(b) or reverse ⇒ ∃c with f(c)=k.* Root location: show f(a), f(b) opposite signs; continuity; conclude root in (a,b). Bisection gives location to any accuracy: after n steps width (b−a)/2ⁿ.
Max–Min: continuous on closed bounded ⇒ bounded and attains sup and inf. Always state "closed AND bounded AND continuous". Fixed point: g(x)=f(x)−x on [0,1] when f:[0,1]→[0,1].

### T7. Rolle / MVT application inequalities
Skeleton for "show |sin x − sin y| ≤ |x−y|": *Apply MVT to f=sin on [y,x] (continuous on closed, differentiable on open). ∃ξ between y and x with sin x−sin y=cos ξ·(x−y). Since |cos ξ|≤1 the claim follows.* General: bound |f′| on the interval → Lipschitz estimate.
"Show eˣ>1+x for x>0": MVT on [0,x] gives eˣ−1 = e^ξ x > x. "Show f′>0 ⇒ increasing": MVT on [x,y]. "Show equation has at most k roots": Rolle on consecutive roots (roots of f ⇒ roots of f′ between them).
Always write: (1) which function and interval; (2) check continuity on closed, differentiability on open; (3) formula; (4) bound the derivative term.

### T8. f is Riemann integrable
Three methods in order of exam usefulness:
(a) **Quote a theorem**: continuous on [a,b] ⇒ R; monotone ⇒ R; bounded with finitely many discontinuities ⇒ R; Lebesgue (bounded and discontinuities a null set). Verify hypotheses explicitly.
(b) **Cauchy criterion skeleton**: *Let ε>0. Choose η=… If P, Q are tagged partitions with ‖P‖,‖Q‖<η then |S(f;P)−S(f;Q)|<ε.* Rarely used in full; know it.
(c) **Squeeze (Riemann) criterion skeleton**: *Let ε>0. Find a partition P_ε with U(f;P_ε)−L(f;P_ε)<ε.* For monotone increasing f on [a,b], with equal partition of mesh (b−a)/n, U−L = (f(b)−f(a))(b−a)/n<ε if n large. For continuous f, UC gives |f(x)−f(u)|<ε/(b−a) when mesh<δ so U−L<ε.
Not integrable: show for each partition a tagged choice with sum differing by a fixed amount (Dirichlet: all-rational tags give b−a, all-irrational give 0, so Cauchy criterion fails with ε₀=(b−a)/2). Or unbounded ⇒ not R (B&S 7.1.5).
Computing ∫ from definition: guess value L, show |S(f;P)−L|<ε when ‖P‖<δ. Practise only on constants, x, x² (then use FTC).

### T9. FTC applications
FTC1 (evaluation form): F′=f on [a,b], f∈R ⇒ ∫f=F(b)−F(a). Skeleton: name F, verify F′=f *at all points* (or all but finitely many with F continuous), cite theorem.
FTC2 (derivative of integral): f continuous at c ⇒ F(x)=∫_a^x f is differentiable at c with F′(c)=f(c). Needs *continuity of f at c*, not merely integrability. Example: d/dx ∫_0^{x²} sin(t²)dt = 2x sin(x⁴) by chain rule with composition.
Substitution: write u=φ(x), check φ′ continuous, change limits, state both sides. Taylor remainder: choose form (Lagrange: f^{(n+1)}(ξ)(x−c)^{n+1}/(n+1)!), bound |f^{(n+1)}| on the interval by M, so |R_n|≤M|x−c|^{n+1}/(n+1)!.

### T10. fₙ → f pointwise vs uniformly (sup-norm method)
Pointwise: fix x, compute lim fₙ(x). Write the limit f piecewise.
Uniform: compute ‖fₙ−f‖_A = sup_{x∈A}|fₙ(x)−f(x)| (calculus: find max of |fₙ−f| via derivative, endpoints). **fₙ→f uniformly ⇔ ‖fₙ−f‖→0.**
- If sup→0: done (give explicit bound or exact sup).
- If sup ↛ 0: NOT uniform. Choose x_n∈A with |fₙ(x_n)−f(x_n)|≥ε₀. Example xⁿ on [0,1): f=0; x_n=(1/2)^{1/n} gives fₙ(x_n)=1/2; so ε₀=1/2, not uniform.
- Quick bounds: if |fₙ(x)−f(x)|≤a_n with a_n→0 independent of x (e.g. sin(nx)/n, ≤1/n) uniform.
- Cauchy criterion: uniformly Cauchy ⇔ uniformly convergent.
- Uniform limit of continuous is continuous: use contrapositive to *disprove* uniform convergence (xⁿ on [0,1], limit discontinuous at 1).
- Do not claim integral/derivative swapping from pointwise alone; uniform needed (B&S 8.2.4 integral; derivative needs fₙ′ converge uniformly).

---
## 3. Misconception catalogue (trap → one-line fix)

**Continuity**
- "Continuous = draw without lifting the pen" → fails for x sin(1/x) near 0 and for functions on non-intervals (1/x is continuous on its domain). Fix: use definition: "f(x)→f(c) at every point of the domain".
- δ depends on ε only → no: in T1 δ may depend on c too.
- Confusing limit with value: "f(c) need not exist for lim to exist, but continuity needs lim = f(c)".
- "Take limits then compose" without checking g continuous at the limit.
- Believing a function continuous at one point must be continuous nearby (f(x)=x on ℚ, 0 elsewhere is continuous only at 0).

**Uniform continuity**
- "UC just means continuous everywhere" → x² on ℝ is continuous, not UC. Fix: "same δ for the whole set".
- "UC fails only on infinite domains": 1/x on (0,1) bounded domain but not UC. Fix: failure from unbounded domain OR open end with blow up/oscillation.
- Writing δ that secretly depends on x (e.g. δ=ε/(2x)). Fix: after writing δ, circle every symbol: only ε and constants allowed.
- "Closed interval theorem applies to open interval" → continuous on [a,b] closed ONLY.

**IVT / Max–Min / roots**
- IVT converse: "if f takes all values between f(a), f(b) it is continuous" → false (sin(1/x), f(0)=0 on [0,1] has IVP, not continuous).
- Applying IVT/Max–Min on non-closed or unbounded intervals (1/x on (0,1] has no max). Fix: hypothesis checklist.
- Believing the root is unique or equal to bisection midpoint. Fix: IVT gives existence only.
- Max exists but "f′=0 there": only for interior points.

**Derivative**
- Differentiable ⇒ continuous but not conversely (|x| at 0). Fix: one-line table of implications.
- f′ continuous automatically (x²sin(1/x), f(0)=0 has f′(0)=0 but f′ discontinuous at 0). Fix: Darboux theorem still gives IVP for f′.
- Chain rule: forgetting inner derivative; using Carathéodory incorrectly: need φ continuous at c with f(x)−f(c)=φ(x)(x−c).
- "f′(c)>0 ⇒ f increasing near c": false in general (x/2+x²sin(1/x)). Fix: positive derivative on an *interval* ⇒ increasing.

**MVT**
- Applying MVT/Rolle without checking continuity on closed, differentiability on open (|x| on [−1,1]).
- "ξ is the midpoint" or "unique". Fix: ξ exists, not computed, possibly many.
- Using MVT for a vector-valued/two-variable situation: out of scope.
- Rolle needs f(a)=f(b) and both continuity conditions; students forget f(a)=f(b).

**Riemann integral**
- "Integral = area" as a definition → area under negative parts is signed; integrable ≠ continuous.
- Thinking integrable requires continuity (monotone function with countably many jumps is R).
- Believing Dirichlet function is R because "mostly 0": fails; Lebesgue's criterion: discontinuous everywhere.
- Forgetting boundedness: unbounded ⇒ not R in B&S sense.
- Confusing mesh (norm) with number of subintervals or with tags: ‖P‖→0 needed, not just n→∞ with specific tags.
- Thinking Riemann sum with left tags suffices: need all tagged partitions.
- "f=g except at finitely many points ⇒ same integral" correct; "except on infinite set" can fail.

**FTC**
- Mixing FTC1 and FTC2.
- FTC1: forgetting F′ must equal f everywhere (or F′ exists, f∈R). A derivative not integrable counterexample (Volterra) exists; do not state converse.
- FTC2: integral function F is continuous always (Lipschitz) but differentiable only where f is continuous (jump of f ⇒ corner in F; example f=sgn gives F=|x|).
- Differentiating ∫_a^{g(x)}f without chain rule factor g′(x).
- Believing every integrable f has an antiderivative.

**Pointwise vs uniform convergence**
- Thinking "pointwise limit of continuous functions is continuous" (xⁿ on [0,1]). Fix: continuity is preserved under *uniform* limits.
- N depends on x for pointwise, uniform: N independent of x. Fix: ∀ε ∃N ∀x ∀n≥N; quantifier order drawn as a table.
- Pointwise suffices to swap limit and integral/derivative → needs uniform (plus extra for derivatives; fₙ=sin(nx)/√n has fₙ→0 uniformly but fₙ′ does not converge).
- Verifying uniform convergence by checking sup at a few points; must take the sup over all x.
- Uniform convergence on (0,1) vs [0,a]: xⁿ is uniform on [0,a], a<1, not on [0,1).
- Applying "algebraic limit law" for uniform convergence products; false for unbounded functions (fₙ=x+1/n, gₙ=x on ℝ; products converge pointwise to x² but not uniformly). [V analogous: https://faculty.uml.edu/jpropp/305/Exam2Comments.pdf]

---
## 4. Visual and diagram ideas

1. **ε-band / δ-window (continuity).** Graph with horizontal band f(c)±ε shaded; vertical window c±δ; the graph portion over the window must stay in the band. Include a "bad δ" copy where the graph pokes out. 3Blue1Brown-style game: Opponent shrinks band, you shrink window. https://members.3blue1brown.com/posts/to-epsilon-delta-8530689 [V]
2. **Window varying with c vs fixed (UC).** Same graph, same ε, draw the δ-window *at several points c*. For f(x)=x² show windows shrinking as c grows (δ must shrink → not UC). For sin x show a single window works everywhere. For 1/x on (0,1) show shrinking windows near 0. This "sliding rectangle of fixed width δ and height 2ε" picture is the best single image for UC.
3. **Rectangle that fits (UC reformulated).** Fixed-size rectangle (width δ, height 2ε) slides along the graph; the graph stays inside exiting only through the sides. If it must be skinnier near some end, not UC.
4. **IVT/max–min.** Graph crossing a horizontal line y=k; bisection intervals shrinking with nested intervals sketch (a₁,b₁⊃a₂,b₂…). Show broken domain (hole) kills IVT, open interval kills max.
5. **Derivative.** Secant lines tilting to tangent; Carathéodory: φ(x) as the slope of the chord from (c,f(c)) to (x,f(x)), "φ is the chord-slope function, continuous at c, and φ(c)=f′(c)". Chain rule as two gears.
6. **MVT / Rolle.** Chord from (a,f(a)) to (b,f(b)) and a parallel tangent line (slide the chord until it touches); Rolle as horizontal chord. Draw |x| to show failure at the corner. Darboux: derivative cannot jump (draw f′ with the forbidden gap).
7. **Tagged partitions.** Rectangles of varying width with tag points marked with dots; show different tag choices (left, right, mid, random) giving different sums that all lie within ε of the integral when ‖P‖<δ. Upper/lower sums stack of blocks with the gap U−L shaded (a staircase of "extra" rectangles; for monotone f slide them into one column of width (b−a)/n and height f(b)−f(a)). That shows the squeeze criterion at a glance.
8. **Dirichlet/Thomae/ sin(1/x), x sin(1/x), x² sin(1/x).** Thomae (popcorn): dots at p/q with height 1/q; continuous exactly at irrationals; integrable with integral 0. sin(1/x): oscillation envelope between ±1; x sin(1/x): envelope y=±|x| squeezes it so continuous at 0; x² sin(1/x): differentiable at 0, derivative oscillates. Show f′(x)=2x sin(1/x)−cos(1/x) picture.
9. **FTC.** Area-accumulation function F(x) drawn under f with shaded sliver of width h, height f(x): F(x+h)−F(x)≈f(x)h. Show f=sgn and F=|x|.
10. **Pointwise vs uniform: ε-tube.** Draw f with tube f±ε; fₙ for n=1,2,5,20 as curves; uniform means eventually the whole curve sits in the tube; show xⁿ on [0,1]: curve hugs 0 then shoots up near 1 — always leaves the tube (hump at x_n). Also the "moving bump" (fₙ=tall narrow spike, pointwise 0 but sup does not →0), and fₙ(x)=x/n (uniform on bounded sets, not on ℝ).
11. **Family xⁿ on [0,1].** Animated/sequence of overlays; mark the point (x_n, ½) travelling to 1. Give sup-norm table: ‖xⁿ−0‖ on [0,1)=1, on [0,a]=aⁿ→0.
12. **Taylor.** Function and polynomial approximations T₁,T₂,T₃ overlaid; remainder shaded.
13. **Logic ladder.** A 4-row table of quantifier strings with the dependency arrows drawn (ε→δ(c), ε→δ uniform, ε→N(x), ε→N uniform).

Layout notes for mobile pages: every diagram one column, ≤ 6 labels, caption "What to notice"; avoid dense axes.

---
## 5. Memory and exam strategy

### 5.1 Memorise verbatim (flashcard list)
Definitions: continuity at c (ε–δ, sequential, neighbourhood); UC; Lipschitz; derivative; Carathéodory form; tagged partition, mesh, Riemann sum; Riemann integrable (B&S: ∃L ∀ε ∃δ_ε: ‖Ṗ‖<δ ⇒ |S−L|<ε); Cauchy criterion; upper/lower sums or squeeze; pointwise & uniform convergence; sup norm; uniform Cauchy.
Theorems (statement + hypotheses): Sequential criterion; Boundedness thm; Max–Min thm; Location of roots; Bolzano IVT; Preservation of intervals; Uniform Continuity thm; Nonuniform-continuity criteria; Rolle; MVT; Interior extremum; Darboux; derivative sign tests; Cauchy criterion for integrals; Squeeze; continuous ⇒ R; monotone ⇒ R; additivity; FTC both forms; Lebesgue criterion; substitution; Lagrange remainder; Cauchy criterion for uniform convergence; uniform limit continuous; interchange of limit and integral.

### 5.2 Counterexample library (numbered, cite in theorem boxes)
C1 x² on ℝ (continuous, not UC). C2 1/x on (0,1) (continuous, unbounded, not UC, no max). C3 sin(1/x) on (0,1) (bounded, continuous, not UC; extension not exist). C4 √x on [0,1] (UC, not Lipschitz). C5 |x| (continuous, not differentiable at 0). C6 x² sin(1/x), f(0)=0 (differentiable, f′ not continuous). C7 Dirichlet function (nowhere continuous, not R). C8 Thomae function (continuous at irrationals, R). C9 Sign function with f(0)=0 or step (IVP fails, R). C10 Conway base-13 or sin(1/x)-with-0 (IVP without continuity). C11 f(x)=x on ℚ, 0 elsewhere (continuous only at 0). C12 xⁿ on [0,1] (pointwise limit discontinuous). C13 moving spike (pointwise 0, integrals do not →0). C14 sin(nx)/√n (derivative problem). C15 x/n on ℝ (pointwise, not uniform; uniform on bounded). C16 f=1/x on [0,1] with f(0)=0 unbounded not R. C17 f(x)=x³ at 0 (f′=0 but not extremum). C18 Rolle failing without f(a)=f(b). C19 Unbounded derivative but differentiable (x²sin(1/x²)): f′ not integrable in Riemann sense. C20 g(x)=|x| sgn, "F=|x|" for f=sgn (FTC2 fails at jump).

### 5.3 Spaced/retrieval checklist (print as last page of each unit)
☐ Day 0: read pages with "Why this line?" annotations; cover and re-explain 2 proofs.
☐ Day 1: write 3 definitions from memory, then check.
☐ Day 3: redo one full proof (T1/T3/T10) without looking, using the skeleton.
☐ Day 7: do the interleaved "Which tool?" set.
☐ Day 14 / week before exam: counterexample library recitation, 2 past papers timed.
Sources for method: Dunlosky et al. [V]; Hodds–Alcock–Inglis self-explanation [V]; Alcock 2013 "How to Study as a Mathematics Major" [M].

### 5.4 Attacking 2 / 5 / 10 mark proof questions
(Calicut's exact pattern was not found online; typical Kerala university pattern is short-answer/very short, paragraph, and essay sections. Verify against the actual model question paper; the advice below is robust anyway.)
- **2 marks**: State exactly: definition or theorem including hypotheses; or one counterexample with one-line verification. Spend 3 minutes. Write the object (f, interval) AND the conclusion.
- **5 marks**: One theorem proof or one ε–δ computation. Structure: (1) statement of what is given/to prove (1 mark); (2) skeleton and choice of δ/N/tool (1–2 marks); (3) key estimate (2 marks); (4) conclusion sentence ("Hence … ∎"). Aim for 8–12 lines.
- **10 marks**: Usually a major theorem (IVT, UC thm, MVT, FTC, uniform limit continuous) or a 2-part problem. Write: statement, hypotheses; any lemma used and its name; diagram if allowed; then proof in numbered steps; finish with a remark on where each hypothesis was used. Partial credit: if stuck, still write the skeleton and the definition unpacked; mention the theorem you would use.
- **Universal tips**: always begin with "Let ε>0 be given"; write quantifier words not only symbols; never assume the conclusion; write "since f is continuous on [a,b]" whenever applying a theorem; underline the final claim; leave 5 minutes for check ("did I use every hypothesis?"). If a question asks "show that", one counterexample suffices for falsity, but a proof needs generality.
- Past-paper analysis: tally which theorems appear in each paper, then drill those (theorem frequency tables per chapter).

---
## 6. "How to read this book" (student-facing, adaptable)

"This is not a book you read; it is a book you *do*. Keep a pencil and a blank sheet. For every definition, say it aloud, then say what it does NOT say. For every proof, first cover the right-hand column and try to write the skeleton yourself: 'Let ε>0, choose δ=…'. Then uncover the scratch work and see how the δ is found. Next, explain each line to an imaginary friend: which definition or theorem justified it? If you cannot, mark it and return. Never highlight and re-read; instead close the book and write the definition and theorem from memory, then check. Study little and often (today, in 3 days, in a week). When a theorem has hypotheses, check each one by name and find the counterexample that shows what breaks without it. Pictures are for understanding, but marks are for the words: always finish your proof with an explicit conclusion sentence. If you are confused about order of quantifiers, play the game: someone gives you ε, you give back δ or N, and ask whether your answer is allowed to depend on x."

---
## Sources actually retrieved (verified through search)
- Hodds/Alcock/Inglis: https://dspace.lboro.ac.uk/2134/14964 and SE booklet https://www.lboro.ac.uk/media/media/schoolanddepartments/mathematics-education-centre/downloads/research/SE-booklet.pdf
- Dunlosky et al.: https://stafforini.com/works/dunlosky-2013-improving-students-learning/
- Swinyard & Larsen 2012: https://nctm.org/Publications/journal-for-research-in-mathematics-education/2012/Vol43/Issue4/Coming-to-Understand-the-Formal-Definition-of-Limit_-Insights-Gained-From-Engaging-Students-in-Reinvention
- Roh/Lee Mayan activity: https://asu.elsevierpure.com/en/publications/the-mayan-activity-a-way-of-teaching-multiple-quantifications-in-
- Selden & Selden: https://scholarworks.umt.edu/tme/vol10/iss1/14
- Tall & Vinner: https://link.springer.com/doi/10.1007/BF00305619
- Cummings: https://webpages.csus.edu/Jay.Cummings/Books.html
- 3Blue1Brown post: https://members.3blue1brown.com/posts/to-epsilon-delta-8530689
- Tao: https://www.ams.org/journals/notices/202401/rnoti-p30.pdf ; https://www.antoinebuteau.com/lessons-from-terence-tao/
- Epsilon-delta scratch work: https://www.themathdoctors.org/?p=1720
- Propp exam comments on uniform convergence errors: https://faculty.uml.edu/jpropp/305/Exam2Comments.pdf

NOT verified (from memory, flagged [M]): Abbott, Velleman, Solow, Houston, Alcock book, Needham, Su, Mason/Burton/Stacey, Polya, Dubinsky APOS, Weber, Leron/Lamport, worked-example effect, Calicut paper pattern. Verify check items before quoting.
