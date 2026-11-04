var QUESTIONS = QUESTIONS || [];
QUESTIONS.push(...
[
  {
    "id": "q.prob.2.2.1",
    "course": "prob",
    "sec": "2.2",
    "marks": 5,
    "title": "Events for two dice",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 3.</b> Two distinguishable dice are thrown. Let E be the event that the sum is odd, F the event that at least one die shows 1, and G the event that the sum is 5. Describe E, $E\\cap F$, $E\\cup F$, $F\\cap G$, and $E\\cap F^c$ as sets of ordered pairs.</p> Also describe E∩F∩G.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "approach": "<p>Use the ordered-pair sample space $S=\\{(i,j):1\\le i,j\\le6\\}$. Translate each event into a condition on i and j, then intersect or union conditions.</p>",
    "solution": "<p>$E=\\{(i,j):i+j$ is odd$\\}$. $E\\cap F=\\{(1,2),(1,4),(1,6),(2,1),(4,1),(6,1)\\}$. $E\\cup F$ consists of all pairs with odd sum or at least one coordinate 1. $F\\cap G=\\{(1,4),(4,1)\\}$, since those are sum-5 outcomes containing a 1. $E\\cap F^c$ consists of odd-sum pairs with neither coordinate 1: $(2,3),(2,5),(3,2),(3,4),(3,6),(4,3),(4,5),(5,2),(5,4),(5,6),(6,3),(6,5)$.</p> Since a sum of 5 is odd, G is contained in E. Thus E∩F∩G=F∩G={(1,4),(4,1)}.",
    "trap": "The dice are distinguishable, so order matters. “At least one die is 1” includes both (1,j) and (j,1), but the pair (1,1) has even sum.",
    "provenance": "Ross, 10e, Chapter 2, Problem 3, PDF p. 70; event wording preserved, solution freshly written."
  },
  {
    "id": "q.prob.2.2.2",
    "course": "prob",
    "sec": "2.2",
    "marks": 5,
    "title": "Boolean event expression for a system",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 5.</b> A system has five components, each working (1) or failed (0), with outcome $x=(x_1,\\ldots,x_5)$. It works if components 1 and 2 work, or 3 and 4 work, or 1, 3, and 5 all work. Write the working event in set-builder notation and describe its complement using event operations.</p>",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "approach": "<p>Translate each sufficient working condition into coordinate equalities, take their union, then complement the union with De Morgan’s law.</p>",
    "solution": "<p>The sample space is $S=\\{0,1\\}^5$. The working event is $W=\\{x:x_1=x_2=1\\text{ or }x_3=x_4=1\\text{ or }x_1=x_3=x_5=1\\}$. If these three events are A, B, and C, then $W^c=A^c\\cap B^c\\cap C^c$: at least one of components 1,2 has failed, at least one of 3,4 has failed, and at least one of 1,3,5 has failed.</p>",
    "trap": "“Or” is inclusive: more than one operating condition can hold at once. The complement requires all three sufficient conditions to fail.",
    "provenance": "Ross, 10e, Chapter 2, Problem 5(a–b), PDF p. 70; solution freshly written."
  },
  {
    "id": "q.prob.2.3.1",
    "course": "prob",
    "sec": "2.3",
    "marks": 5,
    "title": "Empirical frequency as a probability",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Theoretical Exercise 9.</b> An experiment is performed N times. For each event E define $f(E)$ as the fraction of the N recorded outcomes that lie in E. Show that f satisfies nonnegativity, normalization, and additivity over pairwise disjoint events.</p>",
    "tests": [
      "c.prob.2.3.1"
    ],
    "approach": "<p>Let the recorded outcomes be $\\omega_1,\\ldots,\\omega_N$. Count indices i for which $\\omega_i\\in E$; disjoint event memberships partition indices.</p>",
    "solution": "<p>By definition $f(E)=N^{-1}\\#\\{i:\\omega_i\\in E\\}$, so $0\\le f(E)\\le1$. Every recorded outcome belongs to S, hence $f(S)=N/N=1$. If $E_j$ are pairwise disjoint, each index whose outcome lies in their union belongs to exactly one of the index sets, so $\\#\\{i:\\omega_i\\in\\cup_jE_j\\}=\\sum_j\\#\\{i:\\omega_i\\in E_j\\}$. Dividing by N proves additivity. Only finitely many terms can be nonzero because there are N recorded outcomes, so the same argument also gives countable additivity.</p>",
    "trap": "Axiom 3 is about disjoint events. Overlapping events would count some recorded outcomes more than once.",
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 9, PDF p. 76; prompt and proof freshly written."
  },
  {
    "id": "q.prob.2.3.2",
    "course": "prob",
    "sec": "2.3",
    "marks": 4,
    "title": "Probability of the null event",
    "prompt": "<p>Starting from the probability axioms, prove $P(\\varnothing)=0$.</p>",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.3.2"
    ],
    "approach": "<p>Use the pairwise disjoint sequence $E_1=S$ and $E_i=\\varnothing$ for i≥2. Its union is S.</p>",
    "solution": "<p>By countable additivity, $P(S)=P(S)+\\sum_{i=2}^{\\infty}P(\\varnothing)$. Since $P(S)=1$, subtracting 1 gives $\\sum_{i=2}^{\\infty}P(\\varnothing)=0$. Each summand is nonnegative, so $P(\\varnothing)=0$.</p>",
    "trap": "Do not assume $P(\\varnothing)=0$ as an axiom; it follows from normalization and countable additivity.",
    "provenance": "Ross, 10e, §2.3, derivation after Axiom 3, PDF p. 49; original proof prompt."
  },
  {
    "id": "q.prob.2.4.1",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Exclusive events and probabilities",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 8.</b> Events A and B are mutually exclusive with $P(A)=0.3$ and $P(B)=0.5$. Find (a) $P(A\\cup B)$, (b) $P(A\\cap B^c)$, and (c) $P(A\\cap B)$.</p>",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "approach": "<p>Use disjointness to simplify the intersection and union. Since A and B are disjoint, A is contained in $B^c$.</p>",
    "solution": "<p>(a) $P(A\\cup B)=P(A)+P(B)=0.8$. (b) Because A and B cannot occur together, $A\\subseteq B^c$, so $P(A\\cap B^c)=P(A)=0.3$. (c) $A\\cap B=\\varnothing$, hence its probability is 0.</p>",
    "trap": "Mutually exclusive means the intersection is empty; it does not mean the union has probability zero.",
    "provenance": "Ross, 10e, Chapter 2, Problem 8(a–c), PDF pp. 70–71; solution freshly written."
  },
  {
    "id": "q.prob.2.4.2",
    "course": "prob",
    "sec": "2.4",
    "marks": 5,
    "title": "Three-set inclusion–exclusion",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 12(a–b).</b> Among 100 students, 28 take Spanish, 26 French, 16 German; 12 take Spanish and French, 4 Spanish and German, 6 French and German, and 2 take all three. Find the probability a uniformly selected student takes no language class and the probability of taking exactly one language class.</p>",
    "tests": [
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "approach": "<p>Use inclusion–exclusion to count the union. For exactly one class, subtract each pairwise overlap twice from the singleton counts and add the triple overlap three times.</p>",
    "solution": "<p>The union count is $28+26+16-12-4-6+2=50$, so the probability of none is $1-50/100=0.5$. Exactly one count is $(28+26+16)-2(12+4+6)+3(2)=70-44+6=32$, giving probability 0.32.</p>",
    "trap": "The pairwise counts include the triple intersection. In the exactly-one expression, the triple members must be restored three times after being removed through the pair terms.",
    "provenance": "Ross, 10e, Chapter 2, Problem 12(a), adapted to also request exactly one, PDF p. 71."
  },
  {
    "id": "q.prob.2.5.1",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Comparing two fair dice",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 23.</b> Two fair distinguishable dice are rolled. What is the probability that the second die shows a larger number than the first?</p>",
    "tests": [
      "c.prob.2.5.1"
    ],
    "approach": "<p>There are 36 equally likely ordered pairs. Count favorable pairs by conditioning on the first die, or use symmetry between the dice and remove ties.</p>",
    "solution": "<p>By symmetry, the probabilities of second die larger and first die larger are equal. A tie has probability $6/36=1/6$. Thus each strict-order event has probability $(1-1/6)/2=5/12$.</p>",
    "trap": "There are six tie outcomes; the two strict inequalities split the remaining outcomes equally.",
    "provenance": "Ross, 10e, Chapter 2, Problem 23, PDF p. 73; solution freshly written."
  },
  {
    "id": "q.prob.2.5.2",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "One white and two black balls",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Example 5b.</b> Three balls are drawn without replacement from a bowl containing six white and five black balls. Find the probability that exactly one ball is white.</p>",
    "tests": [
      "c.prob.2.5.1",
      "c.prob.1.4.1"
    ],
    "approach": "<p>Use an unordered hand sample space of equally likely 3-subsets, or count ordered draws consistently.</p>",
    "solution": "<p>Among $\\binom{11}{3}$ equally likely subsets, favorable subsets choose one white and two black: $\\binom61\\binom52$. Therefore $P=6\\cdot10/165=4/11$.</p>",
    "trap": "Do not mix ordered favorable counts with an unordered total. The same model must be used in numerator and denominator.",
    "provenance": "Ross, 10e, §2.5, Example 5b, PDF pp. 56–57; adapted prompt."
  },
  {
    "id": "q.prob.2.6.1",
    "course": "prob",
    "sec": "2.6",
    "marks": 6,
    "title": "Continuity from below",
    "prompt": "<p><b>Adapted from Ross, §2.6, Proposition 6.1.</b> Suppose $E_1\\subseteq E_2\\subseteq\\cdots$ and $E=\\cup_{n\\ge1}E_n$. Prove from countable additivity that $P(E_n)\\to P(E)$.</p>",
    "tests": [
      "c.prob.2.6.1"
    ],
    "approach": "<p>Form disjoint increments $F_1=E_1$ and $F_n=E_n\\setminus E_{n-1}$. Express both E and each E_n as unions of these increments.</p>",
    "solution": "<p>The events $F_n$ are pairwise disjoint, $E_n=\\cup_{i=1}^nF_i$, and $E=\\cup_{i=1}^\\infty F_i$. Countable additivity gives $P(E)=\\sum_{i=1}^\\infty P(F_i)$ while finite additivity gives $P(E_n)=\\sum_{i=1}^nP(F_i)$. The latter are partial sums of a convergent nonnegative series, so they tend to the full sum $P(E)$.</p>",
    "trap": "The original nested events are not disjoint. Apply additivity to their disjoint increments.",
    "provenance": "Ross, 10e, §2.6, Proposition 6.1, PDF pp. 65–66; proof freshly written."
  },
  {
    "id": "q.prob.2.6.2",
    "course": "prob",
    "sec": "2.6",
    "marks": 5,
    "title": "Why an infinite countable space cannot be uniform",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Theoretical Exercise 20.</b> Show that a countably infinite sample space cannot assign the same probability to every point. Can every point nevertheless have positive probability?</p>",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.6.2"
    ],
    "approach": "<p>Let q be the common point probability. Countable additivity requires the infinite sum of these masses to equal one.</p>",
    "solution": "<p>If q=0, the sum over countably many points is 0, contradicting $P(S)=1$. If q>0, the partial sums $Nq$ exceed 1 for sufficiently large N, also impossible. Thus no common q works. Yes, every point can have positive probability when masses are unequal; for example, on positive integers assign $P(\\{k\\})=2^{-k}$, whose sum is 1.</p>",
    "trap": "A countably infinite sample space may have all points positive, just not equally likely.",
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 20, PDF p. 77; solution freshly written."
  },
  {
    "id": "q.prob.2.7.1",
    "course": "prob",
    "sec": "2.7",
    "marks": 4,
    "title": "Coherence of personal probabilities",
    "prompt": "<p><b>Adapted from Ross, §2.7, Example 7a.</b> A bettor assigns winning probabilities .20, .20, and .15 to horses 1, 2, and 3, respectively; horses 4–6 each receive .10. At even money, compare a wager that the winner is among horses 1–3 with one that the winner is among horses 1, 4, 5, and 6.</p>",
    "tests": [
      "c.prob.2.7.1",
      "c.prob.2.4.2"
    ],
    "approach": "<p>The horse-winner events are mutually exclusive. Add the bettor’s personal probabilities for the horses included in each wager.</p>",
    "solution": "<p>The first wager has assigned success probability $.20+.20+.15=.55$. The second has $.20+.10+.10+.10=.50$. Under the bettor’s own probability model, the first wager is more attractive at equal payoff.</p>",
    "trap": "Do not regard personal probabilities as unconstrained opinions. These mutually exclusive winner events should have probabilities summing to 1.",
    "provenance": "Ross, 10e, §2.7, Example 7a, PDF p. 68; names and wording adapted."
  },
  {
    "id": "q.prob.2.7.2",
    "course": "prob",
    "sec": "2.7",
    "marks": 4,
    "title": "Check a belief assignment for consistency",
    "prompt": "<p><b>Adapted from Ross, §2.7, consistency discussion, PDF p. 68.</b> A person assigns $P(R)=0.30$ for rain today, $P(T)=0.40$ for rain tomorrow, $P(R\\cap T)=0.20$, and $P(R\\cup T)=0.60$. Are these assignments coherent with the probability axioms?</p>",
    "tests": [
      "c.prob.2.7.1",
      "c.prob.2.4.2"
    ],
    "approach": "<p>Check the two-event inclusion–exclusion identity against the assigned marginals and intersection.</p>",
    "solution": "<p>Inclusion–exclusion requires $P(R\\cup T)=P(R)+P(T)-P(R\\cap T)=0.30+0.40-0.20=0.50$. The assigned union probability is 0.60, so the four values are inconsistent.</p>",
    "trap": "A union probability is not freely assignable once the individual and intersection probabilities are fixed.",
    "provenance": "Ross, 10e, §2.7, consistency discussion following Example 7a, PDF p. 68; original numeric check."
  },
  {
    "id": "w.prob.2.ross.example.2a",
    "course": "prob",
    "sec": "2.2",
    "marks": 3,
    "title": "Sample space of child gender determination",
    "prompt": "<p>An experiment determines the sex of a newborn child. (a) Specify the sample space $S$. (b) Express the events $E$: \"the child is a girl\" and $F$: \"the child is a boy\". (c) What is $E\\cup F$?</p>",
    "approach": "<p>List the elementary outcomes and define subsets corresponding to the stated conditions.</p>",
    "solution": "<p>(a) The sample space is $S = \\{g, b\\}$, where $g$ denotes girl and $b$ denotes boy.<br/>(b) The event $E = \\{g\\}$ and $F = \\{b\\}$.<br/>(c) Because a newborn must be a girl or a boy, $E\\cup F = \\{g, b\\} = S$, the entire sample space.</p>",
    "trap": "The outcomes are mutually exclusive and exhaustive, so their union is the sure event $S$.",
    "tests": [
      "c.prob.2.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.2, Example 1, PDF p. 42."
  },
  {
    "id": "w.prob.2.ross.example.2b",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Permutation sample space for a horse race",
    "prompt": "<p>Seven horses numbered 1 through 7 compete in a race with no ties. (a) Describe the sample space $S$ and state its size. (b) Express the event that horse 3 wins the race.</p>",
    "approach": "<p>Model race finish orders as permutations of $(1, 2, \\ldots, 7)$ and isolate outcomes with 3 in first place.</p>",
    "solution": "<p>(a) The sample space $S$ consists of all $7! = 5,040$ permutations of $(1, 2, 3, 4, 5, 6, 7)$, where an ordered tuple $(h_1, \\ldots, h_7)$ indicates horse $h_1$ finished first, $h_2$ second, and so on.<br/>(b) The event that horse 3 wins is $E = \\{(3, h_2, h_3, h_4, h_5, h_6, h_7) : (h_2, \\ldots, h_7) \\text{ is a permutation of } \\{1, 2, 4, 5, 6, 7\\}\\}$, which contains $6! = 720$ outcomes.</p>",
    "trap": "The sample space contains full rankings, not just the winner.",
    "tests": [
      "c.prob.2.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.2, Example 2, PDF p. 42."
  },
  {
    "id": "w.prob.2.ross.example.2c",
    "course": "prob",
    "sec": "2.2",
    "marks": 3,
    "title": "Two-coin flip outcomes and first-coin events",
    "prompt": "<p>Two coins are flipped in sequence. (a) Write out the sample space $S$. (b) Specify the event $E$ that the first coin lands heads and the event $F$ that the second coin lands heads. (c) Describe $E\\cup F$ in words and list its elements.</p>",
    "approach": "<p>List ordered pairs $(c_1, c_2)\\in\\{h, t\\}^2$ and evaluate event memberships.</p>",
    "solution": "<p>(a) $S = \\{(h, h), (h, t), (t, h), (t, t)\\}$.<br/>(b) $E = \\{(h, h), (h, t)\\}$ and $F = \\{(h, h), (t, h)\\}$.<br/>(c) $E\\cup F = \\{(h, h), (h, t), (t, h)\\}$, which is the event that at least one of the two coins lands heads (the complement of getting two tails).</p>",
    "trap": "Distinguish the order of tosses; $(h, t)$ is distinct from $(t, h)$.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.2, Example 3, PDF pp. 42–43."
  },
  {
    "id": "w.prob.2.ross.example.2d",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Pair of dice sample space and sum-seven event",
    "prompt": "<p>Two distinguishable fair dice are rolled. (a) Specify the sample space $S$. (b) List all outcomes in the event $E$ that the sum of the dice equals 7.</p>",
    "approach": "<p>Use the Cartesian product $\\{1, \\ldots, 6\\}^2$ and find pairs $(i, j)$ satisfying $i+j=7$.</p>",
    "solution": "<p>(a) $S = \\{(i, j) : i, j \\in \\{1, 2, 3, 4, 5, 6\\}\\}$, containing $6\\times 6 = 36$ ordered pairs.<br/>(b) The sum is 7 when $(i, j)$ is one of: $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$. There are 6 such outcomes, so $|E| = 6$.</p>",
    "trap": "$(1, 6)$ and $(6, 1)$ are distinct outcomes because the dice are distinguishable.",
    "tests": [
      "c.prob.2.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.2, Example 4, PDF p. 42."
  },
  {
    "id": "w.prob.2.ross.example.2e",
    "course": "prob",
    "sec": "2.2",
    "marks": 3,
    "title": "Continuous sample space for component lifetime",
    "prompt": "<p>An experiment measures the lifetime (in hours) of an electronic transistor. (a) Specify the sample space $S$. (b) Specify the event $E$ that the transistor lasts no longer than 5 hours. (c) Express the event that it lasts strictly more than 5 hours.</p>",
    "approach": "<p>Represent continuous time as a subset of nonnegative real numbers.</p>",
    "solution": "<p>(a) The sample space is continuous: $S = \\{x \\in \\mathbb{R} : 0 \\le x < \\infty\\} = [0, \\infty)$.<br/>(b) The event that the lifetime does not exceed 5 hours is $E = \\{x : 0 \\le x \\le 5\\} = [0, 5]$.<br/>(c) The complement event is $E^c = \\{x : x > 5\\} = (5, \\infty)$, representing a lifetime exceeding 5 hours.</p>",
    "trap": "Lifetimes are continuous non-negative real numbers, not integers.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.2, Example 5, PDF p. 42."
  },
  {
    "id": "w.prob.2.ross.example.3a",
    "course": "prob",
    "sec": "2.3",
    "marks": 4,
    "title": "Probabilities on a fair and a biased coin",
    "prompt": "<p>(a) If a coin is fair, assign probabilities to the outcomes $H$ and $T$. (b) If a coin is biased such that heads is twice as likely as tails, determine $P(\\{H\\})$ and $P(\\{T\\})$ using the probability axioms.</p>",
    "approach": "<p>Use the normalization axiom $P(S)=1$ and the additivity of disjoint elementary outcomes.</p>",
    "solution": "<p>(a) For a fair coin, symmetry implies $P(\\{H\\}) = P(\\{T\\})$. Since $\\{H\\}\\cup\\{T\\}=S$ and the events are disjoint, $P(\\{H\\}) + P(\\{T\\}) = 1$, giving $P(\\{H\\}) = P(\\{T\\}) = 1/2$.<br/>(b) If heads is twice as likely as tails, $P(\\{H\\}) = 2P(\\{T\\})$. By normalization, $P(\\{H\\}) + P(\\{T\\}) = 2P(\\{T\\}) + P(\\{T\\}) = 3P(\\{T\\}) = 1$, which gives $P(\\{T\\}) = 1/3$ and $P(\\{H\\}) = 2/3$.</p>",
    "trap": "The ratio condition $P(H)=2P(T)$ must be combined with $P(H)+P(T)=1$.",
    "tests": [
      "c.prob.2.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.3, Example 3a, PDF p. 49."
  },
  {
    "id": "w.prob.2.ross.example.3b",
    "course": "prob",
    "sec": "2.3",
    "marks": 4,
    "title": "Even roll probability for a balanced die",
    "prompt": "<p>A fair six-sided die is rolled, with each face equally likely: $P(\\{i\\}) = 1/6$ for $i=1, \\ldots, 6$. Use Axiom 3 to compute the probability of rolling an even number.</p>",
    "approach": "<p>Express the event as the union of mutually exclusive singleton outcomes and add their probabilities.</p>",
    "solution": "<p>The event of rolling an even number is $E = \\{2, 4, 6\\} = \\{2\\} \\cup \\{4\\} \\cup \\{6\\}$. Because the outcomes $\\{2\\}, \\{4\\}, \\{6\\}$ are mutually exclusive, Axiom 3 (finite additivity) gives $P(E) = P(\\{2\\}) + P(\\{4\\}) + P(\\{6\\}) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$.</p>",
    "trap": "Axiom 3 applies directly because the single face outcomes cannot occur simultaneously.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.3, Example 3b, PDF p. 49."
  },
  {
    "id": "w.prob.2.ross.example.4a",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Liking vacation books via inclusion-exclusion",
    "prompt": "<p>A traveler takes two books on vacation. With probability 0.5 she will like the first book, with probability 0.4 she will like the second book, and with probability 0.3 she will like both books. What is the probability that she likes neither book?</p>",
    "approach": "<p>Compute the union probability using Proposition 4.3, then take the complement.</p>",
    "solution": "<p>Let $B_1$ and $B_2$ be the events that she likes the first and second books, respectively. By inclusion-exclusion, the probability that she likes at least one book is $P(B_1\\cup B_2) = P(B_1) + P(B_2) - P(B_1\\cap B_2) = 0.5 + 0.4 - 0.3 = 0.6$. The event that she likes neither book is the complement $(B_1\\cup B_2)^c = B_1^c \\cap B_2^c$. Hence $P(B_1^c \\cap B_2^c) = 1 - P(B_1\\cup B_2) = 1 - 0.6 = 0.4$.</p>",
    "trap": "Do not subtract 0.3 directly from 1; find the union first, then complement.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.4, Example 4a, PDF pp. 52–53."
  },
  {
    "id": "w.prob.2.ross.example.5a",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Probability of rolling a sum of seven",
    "prompt": "<p>Two fair dice are rolled. Assuming all 36 possible outcomes are equally likely, calculate the probability that the sum of the upturned faces equals 7.</p>",
    "approach": "<p>Count favorable ordered pairs among the 36 equally likely sample points.</p>",
    "solution": "<p>The sample space contains $6\\times 6 = 36$ equiprobable outcomes. The outcomes resulting in a sum of 7 are $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$, giving 6 favorable outcomes. By the finite uniform probability formula, $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$.</p>",
    "trap": "The dice are distinct, so $(1, 6)$ and $(6, 1)$ must both be counted.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5a, PDF p. 56."
  },
  {
    "id": "w.prob.2.ross.example.5c",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Gender composition of a random committee",
    "prompt": "<p>A committee of 5 is to be randomly selected from a group of 6 men and 9 women. What is the probability that the committee consists of 3 men and 2 women?</p>",
    "approach": "<p>Use combinations to count favorable subsets over the total number of 5-person committees.</p>",
    "solution": "<p>The total number of possible committees of 5 chosen from $6+9=15$ people is $\\binom{15}{5} = \\frac{15\\times 14\\times 13\\times 12\\times 11}{120} = 3,003$. The number of committees with 3 men and 2 women is $\\binom{6}{3}\\binom{9}{2} = 20\\times 36 = 720$. Assuming all selections are equally likely, $P = \\frac{720}{3,003} = \\frac{240}{1,001} \\approx 0.2398$.</p>",
    "trap": "Multiply the independent combinations for men and women; do not add them.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5c, PDF p. 57."
  },
  {
    "id": "w.prob.2.ross.example.5d",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Probability a special ball is in a random sample",
    "prompt": "<p>An urn contains $n$ balls, one of which is special. If $k$ balls are randomly withdrawn without replacement ($1\\le k\\le n$), what is the probability that the special ball is chosen?</p>",
    "approach": "<p>Compute via unordered combinations, or by summing the mutually exclusive draw positions.</p>",
    "solution": "<p>Method 1 (unordered subsets): The total number of $k$-element subsets is $\\binom{n}{k}$. Subsets containing the special ball choose the special ball plus $k-1$ of the other $n-1$ balls in $\\binom{1}{1}\\binom{n-1}{k-1} = \\binom{n-1}{k-1}$ ways. Thus $P = \\frac{\\binom{n-1}{k-1}}{\\binom{n}{k}} = \\frac{(n-1)!/(k-1)!(n-k)!}{n!/k!(n-k)!} = \\frac{k}{n}$.<br/>Method 2 (draw position): The special ball can be drawn on draw $i$ ($1\\le i\\le k$) with probability $1/n$. Since these $k$ stages are disjoint, $P = \\sum_{i=1}^k 1/n = k/n$.</p>",
    "trap": "The ratio simplifies cleanly to $k/n$, matching intuition that each ball has a $k/n$ chance of being included.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5d, PDF pp. 57–58."
  },
  {
    "id": "w.prob.2.ross.example.5e",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Equiprobability of color sequences of distinguishable balls",
    "prompt": "<p>Suppose $n$ red balls and $m$ blue balls are randomly arranged in a line such that all $(n+m)!$ orderings are equally likely. If we record only the sequence of colors, show that all $\\binom{n+m}{n}$ possible color patterns are equally likely.</p>",
    "approach": "<p>Count the number of underlying distinct-ball permutations that map to each color sequence.</p>",
    "solution": "<p>Assign labels $r_1, \\ldots, r_n$ to the red balls and $b_1, \\ldots, b_m$ to the blue balls. Any specific sequence of colors (e.g. $n$ reds in specified slots and $m$ blues in the rest) corresponds to exactly $n!$ permutations of the red balls among their assigned slots and $m!$ permutations of the blue balls among theirs. Thus, every color sequence corresponds to exactly $n!\\,m!$ equally likely underlying permutations. The probability of any specific color sequence is therefore $\\frac{n!\\,m!}{(n+m)!} = \\frac{1}{\\binom{n+m}{n}}$. Because this value is identical for all color sequences, all color patterns remain equally likely.</p>",
    "trap": "Every color pattern has the exact same fiber size $n! m!$ in the full permutation space.",
    "tests": [
      "c.prob.1.3.2",
      "c.prob.2.5.1",
      "c.prob.2.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5e, PDF p. 58."
  },
  {
    "id": "w.prob.2.ross.example.5f",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Probability of being dealt a straight in poker",
    "prompt": "<p>A 5-card poker hand is dealt from a standard 52-card deck. A hand is a straight if its cards have 5 consecutive face values but are not all of the same suit. Find the probability of being dealt a straight.</p>",
    "approach": "<p>Count the number of 5-card rank sequences, assign suits, subtract straight flushes, and divide by $\\binom{52}{5}$.</p>",
    "solution": "<p>A straight can start with any of 10 denominations: Ace (A,2,3,4,5), 2, 3, 4, 5, 6, 7, 8, 9, or 10 (10,J,Q,K,A). For each starting rank, there are 4 choices of suit for each of the 5 cards, giving $4^5 = 1,024$ suit assignments. Of these, 4 assignments have all cards in the same suit (straight flushes). Thus there are $1,024 - 4 = 1,020$ valid suit configurations per sequence. The total number of straights is $10\\times 1,020 = 10,200$. Dividing by the total number of hands $\\binom{52}{5} = 2,598,960$ gives $P = \\frac{10,200}{2,598,960} \\approx 0.003925$ (about 1 in 255 hands).</p>",
    "trap": "Do not forget to subtract the 4 straight flushes from the $4^5$ suit combinations for each sequence.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5f, PDF pp. 58–59."
  },
  {
    "id": "w.prob.2.ross.example.5g",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Probability of being dealt a full house in poker",
    "prompt": "<p>In poker, a full house consists of three cards of one denomination and two cards of another denomination. What is the probability of being dealt a full house in a 5-card hand?</p>",
    "approach": "<p>Choose the triple rank and its suits, then choose the pair rank and its suits.</p>",
    "solution": "<p>There are 13 possible denominations for the three of a kind. Once chosen, there are $\\binom{4}{3} = 4$ ways to select its suits. The denomination for the pair can be chosen from the remaining 12 denominations in 12 ways, and its suits in $\\binom{4}{2} = 6$ ways. By the product rule, the number of full houses is $13\\times\\binom{4}{3}\\times 12\\times\\binom{4}{2} = 13\\times 4\\times 12\\times 6 = 3,744$. Dividing by $\\binom{52}{5} = 2,598,960$ gives $P = \\frac{3,744}{2,598,960} \\approx 0.001441$ (about 1 in 694 hands).</p>",
    "trap": "The triple denomination and pair denomination have distinct roles; do not divide by $2!$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5g, PDF p. 59."
  },
  {
    "id": "w.prob.2.ross.example.5h",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Bridge deal spade sweeps and ace distributions",
    "prompt": "<p>In bridge, 52 cards are dealt equally to 4 distinct players (13 cards each). (a) Find the probability that one of the players receives all 13 spades. (b) Find the probability that each player receives exactly 1 ace.</p>",
    "approach": "<p>Use combinations and multinomial coefficients for 4 labeled 13-card hands.</p>",
    "solution": "<p>(a) Let $E_i$ be the event that player $i$ receives all 13 spades ($i=1..4$). For any fixed player, $P(E_i) = 1/\\binom{52}{13}$. Because the events $E_1, E_2, E_3, E_4$ are mutually exclusive (only one player can hold all 13 spades), $P(\\cup E_i) = \\sum_{i=1}^4 P(E_i) = \\frac{4}{\\binom{52}{13}} = \\frac{4}{635,013,559,600} \\approx 6.30\\times 10^{-12}$.<br/>(b) Distribute the 48 non-ace cards equally into 4 hands of 12 in $\\binom{48}{12, 12, 12, 12}$ ways, and distribute the 4 aces one to each player in $4!$ ways. The total number of bridge deals is $\\binom{52}{13, 13, 13, 13}$. The probability is $\\frac{4!\\,\\binom{48}{12, 12, 12, 12}}{\\binom{52}{13, 13, 13, 13}} = \\frac{24\\times (13)^4}{52\\times 51\\times 50\\times 49} = \\frac{24\\times 28,561}{6,497,400} = \\frac{685,464}{6,497,400} \\approx 0.1055$.</p>",
    "trap": "In (b), simplify the ratio of multinomial coefficients by canceling common factorials.",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5h(a–b), PDF p. 59."
  },
  {
    "id": "w.prob.2.ross.example.5i",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "The classical birthday problem threshold",
    "prompt": "<p>Assuming a 365-day year and equally likely birth dates: (a) Write a formula for the probability that no two people in a group of $n$ share a birthday. (b) Find the smallest $n$ such that the probability of at least one shared birthday is at least $1/2$.</p>",
    "approach": "<p>Compute the complement probability using ordered sampling without replacement, then find the median crossover.</p>",
    "solution": "<p>(a) Total birthday assignments for $n$ people is $365^n$. The number of assignments with distinct birthdays is $365\\times 364\\times\\cdots\\times(365-n+1)$. The probability that all birthdays are distinct is $P(\\text{all distinct}) = \\frac{365\\times 364\\times\\cdots\\times(365-n+1)}{365^n} = \\prod_{i=1}^{n-1}\\left(1 - \\frac{i}{365}\\right)$.<br/>(b) Using the approximation $1 - x \\approx e^{-x}$, $P(\\text{distinct}) \\approx e^{-\\sum_{i=1}^{n-1} i/365} = e^{-n(n-1)/730}$. Setting $e^{-n(n-1)/730} \\le 1/2$ gives $n(n-1) \\ge 730\\ln 2 \\approx 506.0$. For $n=22$, $22\\times 21 = 462$ and $P(\\text{shared}) \\approx 0.4757$. For $n=23$, $23\\times 22 = 506$ and exact $P(\\text{distinct}) \\approx 0.4927$, so $P(\\text{shared}) = 1 - 0.4927 = 0.5073 > 1/2$. The minimum number is $n=23$.</p>",
    "trap": "The threshold is driven by the number of pairs $\\binom{n}{2} = \\binom{23}{2} = 253$, not $n$ directly.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5i, PDF pp. 59–60."
  },
  {
    "id": "w.prob.2.ross.example.5j",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Identity of the card following the first ace",
    "prompt": "<p>A standard 52-card deck is shuffled and turned up one card at a time until the first ace appears. Is the next card more likely to be the Ace of Spades or the Two of Clubs? Prove your answer.</p>",
    "approach": "<p>Count the number of complete deck permutations in which a specified card immediately follows the first ace.</p>",
    "solution": "<p>Let $C$ be any specified card in the deck (whether the Ace of Spades or the Two of Clubs). Any ordering of the 52 cards can be formed by first ordering the other 51 cards in $(51)!$ ways, and then inserting card $C$. In any ordering of the 51 other cards, the first ace in that sequence is uniquely determined; therefore, there is exactly ONE position where card $C$ can be inserted to immediately follow that first ace. Consequently, there are exactly $(51)!$ orderings of the 52 cards where card $C$ immediately follows the first ace. The probability is $\\frac{(51)!}{(52)!} = \\frac{1}{52}$ for every single card in the deck. Thus, the Ace of Spades and the Two of Clubs are equally likely (probability $1/52$ each).</p>",
    "trap": "Intuition falsely suggests the Two of Clubs is more likely because the first ace might be the Ace of Spades itself; the permutation insertion argument proves exact equality.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5j, PDF p. 60."
  },
  {
    "id": "w.prob.2.ross.example.5k",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Roommate pairings of offensive and defensive players",
    "prompt": "<p>A football team has 20 offensive and 20 defensive players who are randomly paired into 20 two-person rooms. (a) Find the probability of 0 offensive-defensive roommate pairs. (b) Give the general formula for the probability of $2i$ offensive-defensive pairs ($i=0, \\ldots, 10$).</p>",
    "approach": "<p>Count partitions into 20 unordered pairs of size 2, and count favorable selections of players in mixed pairs.</p>",
    "solution": "<p>Total ways to partition 40 players into 20 unordered pairs of 2 is $\\frac{40!}{2^{20}\\,20!}$.<br/>(a) For 0 mixed pairs, offensive players pair among themselves in $\\frac{20!}{2^{10}\\,10!}$ ways and defensive players among themselves in $\\frac{20!}{2^{10}\\,10!}$ ways. The probability is $P_0 = \\frac{[20! / (2^{10} 10!)]^2}{40! / (2^{20} 20!)} = \\frac{(20!)^3}{(10!)^2 40!} \\approx 1.34\\times 10^{-6}$.<br/>(b) For $2i$ mixed pairs: choose $2i$ offensive players in $\\binom{20}{2i}$ ways, $2i$ defensive players in $\\binom{20}{2i}$ ways, pair them in $(2i)!$ ways, and pair the remaining $20-2i$ of each group internally in $\\frac{(20-2i)!}{2^{10-i}(10-i)!}$ ways. Thus $P_{2i} = \\frac{\\binom{20}{2i}^2 (2i)! \\left[\\frac{(20-2i)!}{2^{10-i}(10-i)!}\\right]^2}{40! / (2^{20}\\,20!)}$ for $i=0, 1, \\ldots, 10$.</p>",
    "trap": "The number of mixed pairs must be even ($2i$) because each mixed room uses 1 offensive and 1 defensive player, leaving an even number to pair internally.",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5k, PDF pp. 60–61."
  },
  {
    "id": "w.prob.2.ross.example.5l",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Sports club membership count via inclusion-exclusion",
    "prompt": "<p>In a athletic club, 36 members play tennis, 28 play squash, and 18 play badminton. Also, 22 play tennis and squash, 12 play tennis and badminton, 9 play squash and badminton, and 4 play all three sports. How many members play at least one of these three sports?</p>",
    "approach": "<p>Apply the three-set inclusion-exclusion principle to the counts.</p>",
    "solution": "<p>Let $T, S, B$ denote the sets of members playing tennis, squash, and badminton. By inclusion-exclusion: $|T\\cup S\\cup B| = (|T| + |S| + |B|) - (|T\\cap S| + |T\\cap B| + |S\\cap B|) + |T\\cap S\\cap B|$. Substituting the given values: $|T\\cup S\\cup B| = (36 + 28 + 18) - (22 + 12 + 9) + 4 = 82 - 43 + 4 = 43$. Exactly 43 club members play at least one of the three sports.</p>",
    "trap": "Add the triple intersection after subtracting the three pairwise intersections.",
    "tests": [
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5l, PDF pp. 61–62."
  },
  {
    "id": "w.prob.2.ross.example.5m",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "The hat-matching problem and asymptotic derangements",
    "prompt": "<p>Each of $N$ people randomly selects a hat from a mixed collection containing their $N$ distinct hats. (a) Use inclusion-exclusion to find the exact probability that no person selects their own hat. (b) Determine the limiting probability as $N\\to\\infty$.</p>",
    "approach": "<p>Define indicator events for individual matches and apply Proposition 4.4.</p>",
    "solution": "<p>(a) Let $E_i$ be the event that person $i$ selects their own hat ($i=1..N$). For any $n$ people $i_1 < \\cdots < i_n$, the probability that all $n$ get their own hats is $P(E_{i_1}\\cdots E_{i_n}) = \\frac{(N-n)!}{N!}$. The number of such $n$-tuples is $\\binom{N}{n}$. Thus $\\sum_{i_1<\\cdots<i_n} P(E_{i_1}\\cdots E_{i_n}) = \\binom{N}{n} \\frac{(N-n)!}{N!} = \\frac{1}{n!}$. By inclusion-exclusion, the probability of at least one match is $P(\\cup E_i) = \\sum_{n=1}^N (-1)^{n+1} \\frac{1}{n!}$. Therefore, the probability of no match is $P_0 = 1 - P(\\cup E_i) = 1 - \\sum_{n=1}^N (-1)^{n+1} \\frac{1}{n!} = \\sum_{n=0}^N \\frac{(-1)^n}{n!} = 1 - 1 + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + \\frac{(-1)^N}{N!}$.<br/>(b) Recognizing the Taylor series $e^x = \\sum_{n=0}^\\infty x^n / n!$ at $x = -1$, as $N\\to\\infty$, $P_0 \\to e^{-1} \\approx 0.367879$.</p>",
    "trap": "The limiting probability is not 0 or 1, but converges rapidly to $1/e$ even for modest $N$.",
    "tests": [
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5m, PDF pp. 62–63."
  },
  {
    "id": "w.prob.2.ross.example.5n",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Couples seated at a circular table without adjacent spouses",
    "prompt": "<p>Ten married couples (20 people) are seated randomly at a round table. Compute the probability that no wife sits next to her husband.</p>",
    "approach": "<p>Use circular permutations and inclusion-exclusion over the events that specified couples sit together.</p>",
    "solution": "<p>The total number of circular seating arrangements of 20 people is $(20 - 1)! = 19!$. Let $E_i$ be the event that couple $i$ sits together ($i=1..10$). For any $n$ specified couples to sit together, treat each of the $n$ couples as a single unit, giving $20 - n$ units to arrange around a circle in $(20 - n - 1)! = (19 - n)!$ ways. Each of the $n$ couples can be ordered in $2$ ways, giving $2^n$ internal orderings. Thus $P(E_{i_1}\\cdots E_{i_n}) = \\frac{2^n (19-n)!}{19!}$. By inclusion-exclusion, the probability that at least one couple sits together is $P(\\cup_{i=1}^{10} E_i) = \\sum_{n=1}^{10} (-1)^{n+1} \\binom{10}{n} \\frac{2^n (19-n)!}{19!} \\approx 0.6605$. The probability that no wife sits next to her husband is $1 - 0.6605 = 0.3395$.</p>",
    "trap": "Remember that a circular arrangement of $m$ units has $(m-1)!$ orderings.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5n, PDF pp. 62–63."
  },
  {
    "id": "w.prob.2.ross.example.5o",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Probability distribution of runs of wins",
    "prompt": "<p>A team finishes its season with $n$ wins and $m$ losses. Assuming all $\\binom{n+m}{n}$ arrangements of wins and losses are equally likely: (a) Derive the formula for the probability of having exactly $r$ runs of wins ($r\\ge 1$). (b) Compute this probability for $n=8, m=6$, and $r=7$.</p>",
    "approach": "<p>Partition the losses into $r+1$ intervals around the $r$ runs of wins using stars and bars.</p>",
    "solution": "<p>(a) Let $x_1, \\ldots, x_r$ be the sizes of the $r$ runs of wins ($x_i\\ge 1, \\sum x_i = n$), which has $\\binom{n-1}{r-1}$ positive integer solutions. Let $y_1$ be the number of losses before the first win run, $y_{r+1}$ after the last, and $y_2, \\ldots, y_r$ between win runs. Then $y_1\\ge 0, y_{r+1}\\ge 0$, and $y_i\\ge 1$ for $i=2..r$, with $\\sum_{i=1}^{r+1} y_i = m$. Setting $y_1' = y_1 + 1$ and $y_{r+1}' = y_{r+1} + 1$ yields a sum of $r+1$ positive integers equal to $m+2$, which has $\\binom{(m+2)-1}{(r+1)-1} = \\binom{m+1}{r}$ solutions. The total number of configurations with $r$ win runs is $\\binom{m+1}{r}\\binom{n-1}{r-1}$. Dividing by $\\binom{n+m}{n}$ gives $P(r\\text{ runs}) = \\frac{\\binom{m+1}{r}\\binom{n-1}{r-1}}{\\binom{n+m}{n}}$.<br/>(b) For $n=8, m=6, r=7$: $\\binom{7}{7}\\binom{7}{6} / \\binom{14}{8} = \\frac{1\\times 7}{3,003} = \\frac{7}{3,003} = \\frac{1}{429} \\approx 0.00233$.</p>",
    "trap": "The boundary loss counts $y_1$ and $y_{r+1}$ can be 0, while internal loss counts $y_2,\\ldots,y_r$ must be at least 1.",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.5, Example 5o, PDF pp. 63–64."
  },
  {
    "id": "w.prob.2.ross.example.6a",
    "course": "prob",
    "sec": "2.6",
    "marks": 5,
    "title": "The infinite urn paradox and continuity of probability",
    "prompt": "<p>At 1 minute to 12, balls 1–10 are placed in an urn and one ball is removed. At 1/2 minute to 12, balls 11–20 are placed in and one ball removed, and so on. (a) If ball $10n$ is removed at stage $n$, how many balls are in the urn at 12? (b) If ball $n$ is removed at stage $n$, how many balls remain? (c) If a randomly chosen ball is removed at each stage, show using continuity from above and Boole’s inequality that the urn is empty at 12 with probability 1.</p>",
    "approach": "<p>Determine membership of ball $n$ at the limit time 12 p.m., then evaluate the infinite product of retention probabilities.</p>",
    "solution": "<p>(a) Ball 10 is removed at stage 1, ball 20 at stage 2, etc. Any ball not ending in 0 is never removed, so infinitely many balls remain.<br/>(b) Ball $n$ is removed at stage $n$ (time $1/2^{n-1}$ min to 12). At 12 p.m., every ball $n$ has already been removed, so the urn is completely empty.<br/>(c) If removal is random: let $E_n$ be the event that ball 1 is still in the urn after stage $n$. After stage 1, 9 balls of 10 remain without ball 1; after stage 2, 18 of 19, and so on: $P(E_n) = \\prod_{k=1}^n \\frac{9k}{9k+1}$. Since $E_n$ decreases, continuity of probability gives $P(\\text{ball 1 in urn at 12}) = P(\\cap E_n) = \\lim P(E_n) = \\prod_{k=1}^\\infty \\frac{9k}{9k+1}$. Note that $\\prod (1 + 1/9k) \\ge \\sum 1/9k = \\infty$, so $\\prod \\frac{9k}{9k+1} = 0$. By identical logic, $P(\\text{ball } k \\text{ in urn at 12}) = 0$ for all $k\\ge 1$. By Boole's inequality, $P(\\text{urn not empty at 12}) \\le \\sum_{k=1}^\\infty P(\\text{ball } k \\text{ in urn}) = \\sum 0 = 0$. Thus, with probability 1, the urn is empty at 12 p.m.</p>",
    "trap": "Although the number of balls in the urn at stage $n$ grows as $9n$, the probability that any individual ball avoids being chosen over infinitely many draws is 0.",
    "tests": [
      "c.prob.2.6.1",
      "c.prob.2.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, §2.6, Example 6a, PDF pp. 66–67."
  },
  {
    "id": "w.prob.2.ross.prob.1",
    "course": "prob",
    "sec": "2.2",
    "marks": 3,
    "title": "Sample spaces with and without replacement",
    "prompt": "<p>A box contains 3 marbles: 1 red ($r$), 1 green ($g$), and 1 blue ($b$). (a) Describe the sample space $S_1$ if a marble is drawn, its color recorded, replaced, and a second marble is drawn. (b) Describe the sample space $S_2$ if the second marble is drawn without replacing the first.</p>",
    "approach": "<p>List ordered pairs $(c_1, c_2)$ of colors for both sampling schemes.</p>",
    "solution": "<p>(a) With replacement, the second draw is independent of the first and allows identical colors: $S_1 = \\{(r, r), (r, g), (r, b), (g, r), (g, g), (g, b), (b, r), (b, g), (b, b)\\}$, containing $3\\times 3 = 9$ outcomes.<br/>(b) Without replacement, the same marble cannot be drawn twice: $S_2 = \\{(r, g), (r, b), (g, r), (g, b), (b, r), (b, g)\\}$, containing $3\\times 2 = 6$ outcomes.</p>",
    "trap": "Without replacement removes the diagonal pairs $(r,r), (g,g), (b,b)$.",
    "tests": [
      "c.prob.2.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 1, PDF p. 70."
  },
  {
    "id": "w.prob.2.ross.prob.2",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Infinite sample space for rolling until a six appears",
    "prompt": "<p>A fair die is rolled continually until a 6 appears, at which point the experiment stops. (a) Specify the sample space $S$. (b) What points are in $E_n$, the event that $n$ rolls are necessary? (c) What is the event $(\\cup_{n=1}^\\infty E_n)^c$?</p>",
    "approach": "<p>Model outcomes as sequences of non-6 rolls terminated by a 6, along with the infinite sequence of never rolling a 6.</p>",
    "solution": "<p>(a) Let $x \\in \\{1, 2, 3, 4, 5\\}$ denote a non-6 roll. The sample space is $S = \\{6, (x_1, 6), (x_1, x_2, 6), \\ldots\\} \\cup \\{(x_1, x_2, x_3, \\ldots)\\}$, consisting of all finite sequences ending with their first 6, plus the infinite sequence where 6 never appears.<br/>(b) $E_n$ consists of all length-$n$ sequences of the form $(x_1, \\ldots, x_{n-1}, 6)$ with each $x_i \\in \\{1, 2, 3, 4, 5\\}$; it contains $5^{n-1}$ points.<br/>(c) The union $\\cup_{n=1}^\\infty E_n$ is the event that a 6 eventually appears. Its complement $(\\cup_{n=1}^\\infty E_n)^c$ is the single infinite event that a 6 never appears, which has probability $\\lim_{n\\to\\infty}(5/6)^n = 0$.</p>",
    "trap": "Do not omit the infinite sequence where 6 never appears; the sample space must be logically exhaustive.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 2, PDF p. 70."
  },
  {
    "id": "w.prob.2.ross.prob.4",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Coin flipping game sample space and winning events",
    "prompt": "<p>Players A, B, and C take turns flipping a coin in order A, B, C, A, B, C, ... until the first head appears. Let $1$ denote heads and $0$ tails. (a) Interpret the sample space $S = \\{1, 01, 001, 0001, \\ldots\\} \\cup \\{0000\\ldots\\}$. (b) Express the events $A$ (A wins), $B$ (B wins), and $(A\\cup B)^c$.</p>",
    "approach": "<p>Identify which turn indices correspond to each player's flips.</p>",
    "solution": "<p>(a) Outcome $0^{k-1}1$ indicates that the first head occurs on toss $k$, concluding the game with a win for whoever flipped toss $k$. The infinite sequence of zeros $000\\ldots$ represents the run where a head never appears.<br/>(b) Player A flips on tosses $1, 4, 7, \\ldots$ ($3k-2$), so $A = \\{1, 0001, 0000001, \\ldots\\}$.<br/>Player B flips on tosses $2, 5, 8, \\ldots$ ($3k-1$), so $B = \\{01, 00001, 00000001, \\ldots\\}$.<br/>The event $(A\\cup B)^c$ occurs if neither A nor B wins, meaning C wins (tosses $3, 6, 9, \\ldots$: $\\{001, 000001, \\ldots\\}$) or the coin never lands heads ($0000\\ldots$).</p>",
    "trap": "The complement $(A\\cup B)^c$ includes both C winning and the infinite tail run.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 4(a–b), PDF p. 70."
  },
  {
    "id": "w.prob.2.ross.prob.6",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Patient classification sample space and events",
    "prompt": "<p>Incoming emergency patients are coded by insurance status (1 = insured, 0 = uninsured) and medical condition (g = good, f = fair, s = serious). (a) State the sample space $S$. (b) Specify event $A$: patient in serious condition. (c) Specify event $B$: patient uninsured. (d) Specify $B^c \\cup A$.</p>",
    "approach": "<p>Form Cartesian product $\\{0, 1\\} \\times \\{g, f, s\\}$ and determine subset memberships.</p>",
    "solution": "<p>(a) $S = \\{(1, g), (1, f), (1, s), (0, g), (0, f), (0, s)\\}$, containing 6 outcomes.<br/>(b) $A = \\{(1, s), (0, s)\\}$.<br/>(c) $B = \\{(0, g), (0, f), (0, s)\\}$.<br/>(d) $B^c = \\{(1, g), (1, f), (1, s)\\}$. Taking the union with $A$ gives $B^c \\cup A = \\{(1, g), (1, f), (1, s), (0, s)\\}$, which represents all patients who are either insured or in serious condition (or both).</p>",
    "trap": "Notice that $(1, s)$ lies in both $B^c$ and $A$, so it appears once in the union.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 6(a–d), PDF p. 70."
  },
  {
    "id": "w.prob.2.ross.prob.7",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Soccer team occupational and political profiles",
    "prompt": "<p>Each of the 15 members of an adult soccer team is classified by job type (blue collar or white collar: 2 categories) and political affiliation (Republican, Democrat, or Independent: 3 categories). How many team outcome profiles are: (a) in the sample space? (b) in the event that at least one member is a blue-collar worker? (c) in the event that none of the members is an Independent?</p>",
    "approach": "<p>Each member has $2\\times 3 = 6$ combined categories. Use independent choices and complementation.</p>",
    "solution": "<p>(a) Each of the 15 players has $2\\times 3 = 6$ possible classifications. By the generalized basic principle of counting, the sample space contains $6^{15} \\approx 4.70\\times 10^{11}$ outcomes.<br/>(b) The complement is that ALL 15 members are white collar (3 political choices each, so $3^{15}$ profiles). The number of outcomes with at least one blue-collar worker is $6^{15} - 3^{15} = 470,184,984,576 - 14,348,907 = 470,170,635,669$.<br/>(c) If no member is Independent, each player has 2 job types and 2 political parties (Rep or Dem), giving $2\\times 2 = 4$ classifications. For 15 members, there are $4^{15} = 1,073,741,824$ outcomes.</p>",
    "trap": "In (b), subtract the count where all 15 members are white-collar workers.",
    "tests": [
      "c.prob.1.2.2",
      "c.prob.2.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 7(a–c), PDF p. 70."
  },
  {
    "id": "w.prob.2.ross.prob.9",
    "course": "prob",
    "sec": "2.4",
    "marks": 3,
    "title": "Retail store payment card acceptance percentage",
    "prompt": "<p>A retail store accepts either American Express or VISA. 24% of customers carry American Express, 61% carry VISA, and 11% carry both. What percentage of customers carry a credit card accepted by the store?</p>",
    "approach": "<p>Apply the two-event inclusion-exclusion formula $P(A\\cup V) = P(A) + P(V) - P(A\\cap V)$.</p>",
    "solution": "<p>Let $A$ and $V$ denote carrying American Express and VISA, respectively. The probability that a customer carries an accepted card is $P(A\\cup V) = P(A) + P(V) - P(A\\cap V) = 0.24 + 0.61 - 0.11 = 0.74$. Thus, 74% of customers carry an accepted card.</p>",
    "trap": "Do not add $24 + 61$ without subtracting the 11% carrying both cards.",
    "tests": [
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 9, PDF p. 71."
  },
  {
    "id": "w.prob.2.ross.prob.10",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Student jewelry ownership probabilities",
    "prompt": "<p>Sixty percent of students wear neither a ring nor a necklace. Twenty percent wear a ring and thirty percent wear a necklace. For a randomly chosen student, find the probability that they wear: (a) a ring or a necklace; (b) both a ring and a necklace.</p>",
    "approach": "<p>Use the complement rule to find the union probability, then solve for the intersection.</p>",
    "solution": "<p>(a) Let $R$ and $N$ be the events of wearing a ring and a necklace. The event of wearing neither is $R^c \\cap N^c = (R\\cup N)^c$, with probability 0.60. By the complement rule, $P(R\\cup N) = 1 - P((R\\cup N)^c) = 1 - 0.60 = 0.40$.<br/>(b) By inclusion-exclusion, $P(R\\cup N) = P(R) + P(N) - P(R\\cap N)$. Substituting known values: $0.40 = 0.20 + 0.30 - P(R\\cap N) \\implies P(R\\cap N) = 0.50 - 0.40 = 0.10$.</p>",
    "trap": "The union probability is $1 - 0.60 = 0.40$, which is less than $0.20 + 0.30$; the difference is the intersection.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 10(a–b), PDF p. 71."
  },
  {
    "id": "w.prob.2.ross.prob.11",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Smoking habits decomposition",
    "prompt": "<p>Among adult males, 28% smoke cigarettes, 7% smoke cigars, and 5% smoke both. What percentage: (a) smoke neither cigarettes nor cigars? (b) smoke cigars but not cigarettes?</p>",
    "approach": "<p>Compute the union for (a), and subtract the intersection from cigar smokers for (b).</p>",
    "solution": "<p>(a) Let $C_1$ be cigarette smokers and $C_2$ cigar smokers. The proportion smoking at least one is $P(C_1\\cup C_2) = P(C_1) + P(C_2) - P(C_1\\cap C_2) = 0.28 + 0.07 - 0.05 = 0.30$ (30%). The percentage smoking neither is $1 - 0.30 = 0.70$, or 70%.<br/>(b) Smoking cigars but not cigarettes is $C_2 \\cap C_1^c$. Since $C_2 = (C_2\\cap C_1) \\cup (C_2\\cap C_1^c)$ as a disjoint union, $P(C_2\\cap C_1^c) = P(C_2) - P(C_1\\cap C_2) = 0.07 - 0.05 = 0.02$, or 2%.</p>",
    "trap": "Cigar-only smokers are $P(C_2) - P(C_1\\cap C_2)$, not $P(C_2) - P(C_1)$.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 11(a–b), PDF p. 71."
  },
  {
    "id": "w.prob.2.ross.prob.12c",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Language enrollment pair selection probability",
    "prompt": "<p>In a school of 100 students, exactly 50 take at least one language class (and 50 take none). If two students are randomly chosen without replacement, what is the probability that at least one of them is taking a language class?</p>",
    "approach": "<p>Compute the probability using the complement event that neither chosen student takes a language class.</p>",
    "solution": "<p>Let $E$ be the event that at least one of the 2 chosen students takes a language class. The complement $E^c$ is the event that neither student takes a language class. Both students must be chosen from the 50 students who take no language classes. The number of ways to choose 2 such students is $\\binom{50}{2} = \\frac{50\\times 49}{2} = 1,225$. The total number of pairs from 100 students is $\\binom{100}{2} = \\frac{100\\times 99}{2} = 4,950$. Thus $P(E^c) = \\frac{1,225}{4,950} = \\frac{49}{198}$. The desired probability is $P(E) = 1 - \\frac{49}{198} = \\frac{149}{198} \\approx 0.7525$.</p>",
    "trap": "Sampling without replacement reduces the population by 1 on the second draw; do not square $0.5$.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 12(c), PDF p. 71."
  },
  {
    "id": "w.prob.2.ross.prob.13",
    "course": "prob",
    "sec": "2.4",
    "marks": 5,
    "title": "Town newspaper readership survey breakdown",
    "prompt": "<p>In a town of 100,000 people, readership proportions for newspapers I, II, III are: I: 10%, II: 30%, III: 5%; I&II: 8%, I&III: 2%, II&III: 4%; all three: 1%. Morning papers are I and III; evening is II. Find how many people: (a) read only one newspaper; (b) read at least two; (c) read at least one morning paper plus the evening paper; (d) read no newspapers; (e) read exactly one morning paper and the evening paper.</p>",
    "approach": "<p>Decompose into disjoint Venn diagram regions and scale by 100,000.</p>",
    "solution": "<p>Disjoint region percentages:<br/>- All three (I, II, III): 1%<br/>- Only I and II: $8 - 1 = 7%$<br/>- Only I and III: $2 - 1 = 1%$<br/>- Only II and III: $4 - 1 = 3%$<br/>- Only I: $10 - (7 + 1 + 1) = 1%$<br/>- Only II: $30 - (7 + 3 + 1) = 19%$<br/>- Only III: $5 - (1 + 3 + 1) = 0%$<br/>(a) Only one paper: $1% + 19% + 0% = 20%$, which is $20,000$ people.<br/>(b) At least two papers: $7% + 1% + 3% + 1% = 12%$, which is $12,000$ people.<br/>(c) At least one morning (I or III) plus evening (II): $(I\\cap II) \\cup (III\\cap II)$. By inclusion-exclusion: $8% + 4% - 1% = 11%$, which is $11,000$ people.<br/>(d) Total reading at least one: $20% + 12% = 32%$. None: $100% - 32% = 68%$, which is $68,000$ people.<br/>(e) Exactly one morning and the evening paper: (only I and II) + (only III and II) $= 7% + 3% = 10%$, which is $10,000$ people.</p>",
    "trap": "\"At least one morning plus evening\" includes readers of all three; \"exactly one morning plus evening\" excludes the triple intersection.",
    "tests": [
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 13(a–e), PDF p. 71."
  },
  {
    "id": "w.prob.2.ross.prob.14",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Detecting inconsistent survey data via probability bounds",
    "prompt": "<p>A study of 1,000 subscribers reported: 312 professionals ($M$), 470 married persons ($W$), 525 college graduates ($G$), 42 professional graduates ($M\\cap G$), 147 married graduates ($W\\cap G$), 86 married professionals ($M\\cap W$), and 25 married professional graduates ($M\\cap W\\cap G$). Prove that these reported numbers must be incorrect.</p>",
    "approach": "<p>Compute $P(M\\cup W\\cup G)$ under the uniform sample space of 1,000 subscribers and test against Axiom 1.</p>",
    "solution": "<p>Assuming each subscriber has probability $1/1000$, use Proposition 4.4 to compute $P(M\\cup W\\cup G)$:<br/>$P(M\\cup W\\cup G) = P(M) + P(W) + P(G) - P(MW) - P(MG) - P(WG) + P(MWG)$<br/>$= \\frac{312 + 470 + 525 - 86 - 42 - 147 + 25}{1000} = \\frac{1057}{1000} = 1.057$.<br/>By Axiom 1, the probability of any event cannot exceed 1. Since $1.057 > 1$, the reported numbers are mathematically inconsistent and must be erroneous.</p>",
    "trap": "A probability exceeding 1 is an explicit violation of Axiom 1.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 14, PDF pp. 71–72."
  },
  {
    "id": "w.prob.2.ross.prob.15",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Poker hand hierarchy probabilities",
    "prompt": "<p>Assuming all $\\binom{52}{5} = 2,598,960$ 5-card poker hands are equally likely, calculate the probability of being dealt: (a) a flush (including straight flushes); (b) exactly one pair; (c) two pairs; (d) three of a kind; (e) four of a kind.</p>",
    "approach": "<p>Count favorable hands for each rank partition using combinations.</p>",
    "solution": "<p>(a) Flush: choose suit in 4 ways, choose 5 cards in $\\binom{13}{5}=1,287$ ways: $4\\times 1,287 = 5,148$. $P = \\frac{5,148}{2,598,960} \\approx 0.001981$.<br/>(b) One pair: choose pair rank in 13 ways, its suits in $\\binom{4}{2}=6$ ways, 3 distinct other ranks in $\\binom{12}{3}=220$ ways, each with 4 suits: $13\\times 6\\times 220\\times 4^3 = 1,098,240$. $P = \\frac{1,098,240}{2,598,960} \\approx 0.422569$.<br/>(c) Two pairs: choose 2 ranks for pairs in $\\binom{13}{2}=78$ ways, their suits in $\\binom{4}{2}^2=36$ ways, 1 fifth card in $44$ ways: $78\\times 36\\times 44 = 123,552$. $P = \\frac{123,552}{2,598,960} \\approx 0.047539$.<br/>(d) Three of a kind: choose rank in 13 ways, suits in $\\binom{4}{3}=4$ ways, 2 other ranks in $\\binom{12}{2}=66$ ways, suits in $4^2=16$ ways: $13\\times 4\\times 66\\times 16 = 54,912$. $P = \\frac{54,912}{2,598,960} \\approx 0.021128$.<br/>(e) Four of a kind: choose rank in 13 ways, all 4 suits in 1 way, kicker in 48 ways: $13\\times 48 = 624$. $P = \\frac{624}{2,598,960} \\approx 0.000240$.</p>",
    "trap": "In two pairs, choose pair denominations using $\\binom{13}{2}$, not $13\\times 12$, because pair order does not matter.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 15(a–e), PDF p. 72."
  },
  {
    "id": "w.prob.2.ross.prob.16",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Poker dice distribution with five dice",
    "prompt": "<p>In poker dice, 5 fair six-sided dice are rolled simultaneously ($6^5 = 7,776$ equiprobable outcomes). Verify the probabilities of: (a) no two alike; (b) one pair; (c) two pair; (d) three alike; (e) full house; (f) four alike; (g) five alike.</p>",
    "approach": "<p>Count multiset patterns and multiply by permutation arrangements $\\frac{5!}{n_1!\\cdots n_r!}$.</p>",
    "solution": "<p>(a) No two alike: $P(6, 5) = 6\\times 5\\times 4\\times 3\\times 2 = 720$. $P = \\frac{720}{7,776} \\approx 0.0926$.<br/>(b) One pair: choose pair face (6), its 2 positions ($\\binom{5}{2}=10$), and 3 distinct other faces in $P(5, 3)=60$ ways: $6\\times 10\\times 60 = 3,600$. $P = \\frac{3,600}{7,776} \\approx 0.4630$.<br/>(c) Two pair: choose 2 pair faces ($\\binom{6}{2}=15$), 1 single face (4), and arrange in $\\frac{5!}{2!\\,2!} = 30$ ways: $15\\times 4\\times 30 = 1,800$. $P = \\frac{1,800}{7,776} \\approx 0.2315$.<br/>(d) Three alike: choose triple face (6), its 3 positions ($\\binom{5}{3}=10$), and 2 distinct other faces in $P(5, 2)=20$ ways: $6\\times 10\\times 20 = 1,200$. $P = \\frac{1,200}{7,776} \\approx 0.1543$.<br/>(e) Full house: choose triple face (6), pair face (5), and arrange in $\\frac{5!}{3!\\,2!} = 10$ ways: $6\\times 5\\times 10 = 300$. $P = \\frac{300}{7,776} \\approx 0.0386$.<br/>(f) Four alike: choose quadruple face (6), positions ($\\binom{5}{4}=5$), and single face (5): $6\\times 5\\times 5 = 150$. $P = \\frac{150}{7,776} \\approx 0.0193$.<br/>(g) Five alike: 6 outcomes. $P = \\frac{6}{7,776} \\approx 0.0008$.</p>",
    "trap": "The sum of these 7 mutually exclusive outcomes is $720 + 3600 + 1800 + 1200 + 300 + 150 + 6 = 7,776 = 6^5$.",
    "tests": [
      "c.prob.1.3.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 16(a–g), PDF p. 72."
  },
  {
    "id": "w.prob.2.ross.prob.17",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Order statistic position in a mixed lineup",
    "prompt": "<p>Twenty-five people (15 women and 10 men) are arranged in a random line. Find the probability that the 9th woman to appear is in position 17.</p>",
    "approach": "<p>Specify that exactly 8 women appear in the first 16 positions, a woman is in position 17, and the remaining 6 women are in the last 8 positions.</p>",
    "solution": "The positions of the 15 women form a uniform 15-subset of 25 positions. The ninth woman is at position 17 if eight women occupy the first 16 positions, position 17 is a woman, and six occupy the last eight. Therefore P=C(16,8)C(8,6)/C(25,15)=360360/3268760=819/7429≈.1102436.",
    "trap": "The condition requires exactly 8 women before position 17, not 9.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 17, PDF p. 72."
  },
  {
    "id": "w.prob.2.ross.prob.18",
    "course": "prob",
    "sec": "2.5",
    "marks": 3,
    "title": "Blackjack probability from a two-card deal",
    "prompt": "<p>Two cards are randomly selected from a standard 52-card deck. What is the probability that they form a blackjack (one ace and one 10-point card: 10, J, Q, or K)?</p>",
    "approach": "<p>Count favorable 2-card combinations of {Ace, 10-value card} over $\\binom{52}{2}$.</p>",
    "solution": "<p>There are 4 aces and $4\\times 4 = 16$ ten-value cards (tens, jacks, queens, kings) in the deck. The number of blackjack hands is $4\\times 16 = 64$. The total number of 2-card hands is $\\binom{52}{2} = \\frac{52\\times 51}{2} = 1,326$. Thus $P(\\text{blackjack}) = \\frac{64}{1,326} = \\frac{32}{663} \\approx 0.048265$ (about 4.83%).</p>",
    "trap": "Remember that 10-value cards include 10, Jack, Queen, and King (16 cards total).",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 18, PDF p. 72."
  },
  {
    "id": "w.prob.2.ross.prob.19",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Matching colors on multi-colored symmetric dice",
    "prompt": "<p>Two symmetric dice each have two faces painted red, two black, one yellow, and one white. When both dice are rolled, what is the probability that both land showing the same color?</p>",
    "approach": "<p>Sum the probabilities of rolling matching colors across all 4 mutually exclusive colors.</p>",
    "solution": "<p>Each die has 6 equally likely faces: $P(\\text{red}) = 2/6$, $P(\\text{black}) = 2/6$, $P(\\text{yellow}) = 1/6$, $P(\\text{white}) = 1/6$. By independence of the two dice, the probability of both landing on color $c$ is $P(c)^2$. Because the colors are mutually exclusive, the probability of matching colors is $P(\\text{same}) = (2/6)^2 + (2/6)^2 + (1/6)^2 + (1/6)^2 = \\frac{4 + 4 + 1 + 1}{36} = \\frac{10}{36} = \\frac{5}{18} \\approx 0.2778$.</p>",
    "trap": "Add probabilities across colors since the events (both red, both black, etc.) are disjoint.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 19, PDF p. 72."
  },
  {
    "id": "w.prob.2.ross.prob.20",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Simultaneous blackjack hands against the dealer",
    "prompt": "<p>In a freshly shuffled 52-card deck, 2 cards are dealt to a player and 2 to the dealer. What is the probability that neither the player nor the dealer is dealt a blackjack?</p>",
    "approach": "<p>Use two-event inclusion-exclusion $P(A^c\\cap B^c) = 1 - P(A) - P(B) + P(A\\cap B)$ where $A, B$ are the blackjack events.</p>",
    "solution": "Let A,B mean player/dealer blackjack. Each marginal is 64/C(52,2), since a blackjack combines one of 4 aces and one of 16 ten-value cards. Given the player’s blackjack, 3 aces and 15 ten-value cards remain, so P(B|A)=45/C(50,2). Thus P(AB)=64·45/[C(52,2)C(50,2)]. Inclusion–exclusion gives P(neither)=1−2·64/C(52,2)+64·45/[C(52,2)C(50,2)]=11311/12495≈.9052421. Counting chosen two-ace and two-ten sets requires four, rather than two, assignments to the named hands.",
    "trap": "Do not assume player and dealer blackjacks are independent; they share the same deck without replacement.",
    "tests": [
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 20, PDF p. 72."
  },
  {
    "id": "w.prob.2.ross.prob.21",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Sampling bias in family size versus child perspective",
    "prompt": "<p>A community has 20 families: 4 with 1 child, 8 with 2, 5 with 3, 2 with 4, and 1 with 5 children. (a) If a family is chosen at random, find the probability it has $i$ children ($i=1..5$). (b) If a child is chosen at random, find the probability they come from a family with $i$ children ($i=1..5$).</p>",
    "approach": "<p>Weight each category by family counts for (a) and by total children for (b).</p>",
    "solution": "<p>(a) Total families = 20. Probabilities per family size: $P_F(1) = 4/20 = 1/5$, $P_F(2) = 8/20 = 2/5$, $P_F(3) = 5/20 = 1/4$, $P_F(4) = 2/20 = 1/10$, $P_F(5) = 1/20$.<br/>(b) Total children = $4(1) + 8(2) + 5(3) + 2(4) + 1(5) = 4 + 16 + 15 + 8 + 5 = 48$. Probabilities per child's family size: $P_C(1) = 4/48 = 1/12$, $P_C(2) = 16/48 = 1/3$, $P_C(3) = 15/48 = 5/16$, $P_C(4) = 8/48 = 1/6$, $P_C(5) = 5/48$.</p>",
    "trap": "Randomly sampling an individual child biases toward larger families relative to sampling a household uniformly.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 21(a–b), PDF pp. 72–73."
  },
  {
    "id": "w.prob.2.ross.prob.22",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Coin-flip card shuffle preservation probability",
    "prompt": "<p>A deck of $n$ cards is shuffled in one round: for each card in sequence, a fair coin is flipped; if heads, the card stays in place; if tails, it is moved to the end of the deck. What is the probability that the order of the cards after one round is identical to the initial ordering?</p>",
    "approach": "<p>Analyze which sequences of $n$ coin flips leave the relative order of all cards undisturbed.</p>",
    "solution": "<p>Let the cards initially be in order $1, 2, \\ldots, n$. Any card moved to the end by a tails flip is placed after all cards currently in the deck. In particular, cards that received tails appear at the end in increasing order of their indices, and cards that received heads remain in their relative order at the front. The final order matches $1, 2, \\ldots, n$ if and only if all cards moved to the end originally had higher indices than all cards remaining in front. This occurs precisely when for some $k \\in \\{0, 1, \\ldots, n\\}$, cards $1, 2, \\ldots, k$ get heads and cards $k+1, \\ldots, n$ get tails (or if all $n$ cards get heads, or all get tails; all $n+1$ cutoff points $k$). Because each coin flip sequence of length $n$ is equally likely with probability $1/2^n$, exactly $n+1$ sequences out of $2^n$ preserve the deck order. Thus $P = \\frac{n+1}{2^n}$.</p>",
    "trap": "Moving tails cards to the end appends them in order of flipping; only prefixes of tails preserve the global increasing sequence.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 22, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.24",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Exact sum probabilities for a pair of fair dice",
    "prompt": "<p>Two fair dice are rolled. Compute the probability distribution of the sum of the upturned faces, finding $P(\\text{sum} = i)$ for all $i \\in \\{2, 3, \\ldots, 12\\}$.</p>",
    "approach": "<p>Count the number of ordered pairs $(j, k)$ with $1\\le j, k\\le 6$ that sum to $i$ out of 36.</p>",
    "solution": "<p>The sample space has 36 equally likely outcomes. The number of ways to obtain sum $i$ is $6 - |i - 7|$ for $i=2, \\ldots, 12$:<br/>- $P(2) = P(12) = 1/36$<br/>- $P(3) = P(11) = 2/36 = 1/18$<br/>- $P(4) = P(10) = 3/36 = 1/12$<br/>- $P(5) = P(9) = 4/36 = 1/9$<br/>- $P(6) = P(8) = 5/36$<br/>- $P(7) = 6/36 = 1/6$.</p>",
    "trap": "The distribution is symmetric about 7, with sum 7 being the most likely single value.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 24, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.25",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "First occurrence race between sums five and seven",
    "prompt": "<p>A pair of fair dice is rolled repeatedly until a sum of either 5 or 7 appears. What is the probability that a sum of 5 appears before a sum of 7?</p>",
    "approach": "<p>Express as an infinite series over the number of rolls, or condition on the terminating roll.</p>",
    "solution": "<p>On each roll, $P(\\text{sum } 5) = 4/36$, $P(\\text{sum } 7) = 6/36$, and $P(\\text{neither}) = 1 - 10/36 = 26/36$. The event that 5 appears first on roll $n$ requires rolls $1, \\ldots, n-1$ to show neither 5 nor 7, followed by a 5 on roll $n$: $P(E_n) = (26/36)^{n-1}(4/36)$. Summing the geometric series over $n\\ge 1$: $\\sum_{n=1}^\\infty (26/36)^{n-1}(4/36) = \\frac{4/36}{1 - 26/36} = \\frac{4/36}{10/36} = \\frac{4}{10} = \\frac{2}{5} = 0.4$.</p>",
    "trap": "Rolls showing other sums neither advance nor hinder either outcome; the race is decided entirely by the ratio $4/(4+6)$.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 25, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.26",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Complete probability analysis of the game of craps",
    "prompt": "<p>In craps, a player rolls two dice: sum 7 or 11 wins immediately; sum 2, 3, or 12 loses immediately. Any other sum $i \\in \\{4, 5, 6, 8, 9, 10\\}$ becomes the \"point\", and the player continues rolling until either $i$ reoccurs (win) or 7 appears (loss). Compute the total probability that the player wins.</p>",
    "approach": "<p>Sum the immediate win probabilities with the conditional winning probabilities for each point value.</p>",
    "solution": "<p>Immediate outcomes on roll 1: $P(\\text{win}) = P(7) + P(11) = 6/36 + 2/36 = 8/36$. Immediate loss: $P(2) + P(3) + P(12) = 1/36 + 2/36 + 1/36 = 4/36$.<br/>For each point $i$, the player wins if $i$ reoccurs before 7, which has probability $\\frac{P(i)}{P(i) + P(7)}$:<br/>- Point 4: $P(4) = 3/36$; prob to win $= 3/(3+6) = 1/3$. Contribution $= (3/36)(1/3) = 1/36$.<br/>- Point 5: $P(5) = 4/36$; prob to win $= 4/(4+6) = 2/5$. Contribution $= (4/36)(2/5) = 2/45$.<br/>- Point 6: $P(6) = 5/36$; prob to win $= 5/(5+6) = 5/11$. Contribution $= (5/36)(5/11) = 25/396$.<br/>- Points 8, 9, 10 match points 6, 5, 4 by symmetry.<br/>Total win probability: $P = \\frac{8}{36} + 2\\left(\\frac{1}{36} + \\frac{2}{45} + \\frac{25}{396}\\right) = \\frac{2}{9} + 2\\left(\\frac{55 + 88 + 125}{1980}\\right) = \\frac{2}{9} + \\frac{536}{1980} = \\frac{2}{9} + \\frac{134}{495} = \\frac{110 + 134}{495} = \\frac{244}{495} \\approx 0.492929$.</p>",
    "trap": "The house edge in craps comes from this slight deficit: $244/495 \\approx 49.30\\% < 50\\%$.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 26, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.27",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Alternating draw without replacement until success",
    "prompt": "<p>An urn contains 3 red and 7 black balls. Players A and B take turns drawing balls without replacement, with A drawing first. The game ends when a red ball is drawn. What is the probability that A selects the red ball?</p>",
    "approach": "<p>A draws on turns 1, 3, 5, and 7. Sum the probabilities that the first red ball occurs on an odd turn.</p>",
    "solution": "<p>Player A wins if the game terminates on draw 1, 3, 5, or 7 (there are only 7 black balls, so draw 7 is the last possible odd draw):<br/>- Draw 1: $P = 3/10$.<br/>- Draw 3 (BB R): $\\frac{7}{10}\\times\\frac{6}{9}\\times\\frac{3}{8} = \\frac{7}{40}$.<br/>- Draw 5 (BBBB R): $\\frac{7}{10}\\times\\frac{6}{9}\\times\\frac{5}{8}\\times\\frac{4}{7}\\times\\frac{3}{6} = \\frac{1}{12}$.<br/>- Draw 7 (BBBBBB R): $\\frac{7\\times 6\\times 5\\times 4\\times 3\\times 2}{10\\times 9\\times 8\\times 7\\times 6\\times 5}\\times\\frac{3}{4} = \\frac{1}{40}$.<br/>Summing: $P(A\\text{ wins}) = \\frac{3}{10} + \\frac{7}{40} + \\frac{1}{12} + \\frac{1}{40} = \\frac{12 + 7 + 1}{40} + \\frac{1}{12} = \\frac{20}{40} + \\frac{1}{12} = \\frac{1}{2} + \\frac{1}{12} = \\frac{7}{12} \\approx 0.5833$.</p>",
    "trap": "The game must terminate by draw 8 at the latest because there are only 7 black balls.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 27, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.28",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Three-ball color uniformity with and without replacement",
    "prompt": "<p>An urn contains 5 red, 6 blue, and 8 green balls (19 balls total). Three balls are randomly selected. Find the probability that all three balls are of the same color, and the probability all three are of different colors: (a) without replacement; (b) with replacement.</p>",
    "approach": "<p>Use hypergeometric combinations for (a) and independent multinomial powers for (b).</p>",
    "solution": "<p>(a) Without replacement: total samples is $\\binom{19}{3} = 969$.<br/>- Same color: $\\frac{\\binom{5}{3} + \\binom{6}{3} + \\binom{8}{3}}{969} = \\frac{10 + 20 + 56}{969} = \\frac{86}{969} \\approx 0.08875$.<br/>- Different colors: $\\frac{\\binom{5}{1}\\binom{6}{1}\\binom{8}{1}}{969} = \\frac{5\\times 6\\times 8}{969} = \\frac{240}{969} \\approx 0.24768$.<br/>(b) With replacement: total sequences is $19^3 = 6,859$.<br/>- Same color: $\\frac{5^3 + 6^3 + 8^3}{19^3} = \\frac{125 + 216 + 512}{6,859} = \\frac{853}{6,859} \\approx 0.12436$.<br/>- Different colors: $3!\\times\\frac{5\\times 6\\times 8}{19^3} = \\frac{6\\times 240}{6,859} = \\frac{1,440}{6,859} \\approx 0.20994$.</p>",
    "trap": "In (b) different colors, remember the $3! = 6$ ordering permutations for the three distinct colors.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 28(a–b), PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.29",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Color matching inequality between sampling models",
    "prompt": "<p>An urn contains $n$ white and $m$ black balls ($n, m > 0$). (a) Find the probability that 2 withdrawn balls have the same color without replacement. (b) Find the probability with replacement. (c) Prove that the probability in (b) is strictly greater than in (a).</p>",
    "approach": "<p>Express both probabilities as algebraic functions of $n$ and $m$ and subtract them.</p>",
    "solution": "<p>(a) Without replacement: $P_1 = \\frac{\\binom{n}{2} + \\binom{m}{2}}{\\binom{n+m}{2}} = \\frac{n(n-1) + m(m-1)}{(n+m)(n+m-1)} = \\frac{n^2 + m^2 - (n+m)}{(n+m)(n+m-1)}$.<br/>(b) With replacement: $P_2 = \\left(\\frac{n}{n+m}\\right)^2 + \\left(\\frac{m}{n+m}\\right)^2 = \\frac{n^2 + m^2}{(n+m)^2}$.<br/>(c) Compute $P_2 - P_1$ over common denominator $(n+m)^2(n+m-1)$:<br/>$(n^2+m^2)(n+m-1) - (n+m)[n^2+m^2-(n+m)] = -(n^2+m^2) + (n+m)^2 = (n+m)^2 - (n^2+m^2) = 2nm$.<br/>Therefore $P_2 - P_1 = \\frac{2nm}{(n+m)^2(n+m-1)} > 0$, since $n, m > 0$. Sampling with replacement always gives a strictly higher probability of matching colors.</p>",
    "trap": "The difference simplifies cleanly to $\\frac{2nm}{(n+m)^2(n+m-1)}$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 29(a–c), PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.30",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Sister chess match tournament pairings",
    "prompt": "<p>Two chess clubs have 8 and 9 members. Four members from each club are chosen at random to participate in a match, and the chosen players are randomly paired. Rebecca is in club 1 and her sister Elise in club 2. Find the probability that: (a) Rebecca and Elise are paired; (b) both are chosen but do not play each other; (c) at least one sister is chosen.</p>",
    "approach": "<p>Multiply team selection probabilities by conditional match pairings.</p>",
    "solution": "<p>Rebecca is chosen with probability $\\binom{7}{3}/\\binom{8}{4} = 4/8 = 1/2$. Elise is chosen with probability $\\binom{8}{3}/\\binom{9}{4} = 4/9$. Because selections are independent, $P(\\text{both chosen}) = (1/2)(4/9) = 2/9$.<br/>(a) Given both are chosen, Rebecca is paired with Elise with probability $1/4$. Thus $P(\\text{paired}) = (2/9)(1/4) = 1/18$.<br/>(b) Given both are chosen, they are not paired with probability $3/4$. Thus $P = (2/9)(3/4) = 2/12 = 1/6$.<br/>(c) $P(\\text{at least one chosen}) = 1 - P(\\text{neither}) = 1 - (1 - 1/2)(1 - 4/9) = 1 - (1/2)(5/9) = 1 - 5/18 = 13/18$.</p>",
    "trap": "In (b), condition on both being selected before multiplying by $3/4$.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 30(a–c), PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.31",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Basketball lineup position composition",
    "prompt": "<p>A 3-person basketball team consists of a guard, a forward, and a center. One player is chosen at random from each of three different teams. Find the probability that: (a) the chosen players form a complete team (one guard, one forward, one center); (b) all three players play the same position.</p>",
    "approach": "<p>Model each player's position as an independent uniform choice from $\\{\\text{G}, \\text{F}, \\text{C}\\}$.</p>",
    "solution": "<p>Each chosen player has 3 equally likely positions; total outcomes is $3^3 = 27$.<br/>(a) A complete team requires one of each position, which can occur in $3! = 6$ assignment orders: $P = 6/27 = 2/9 \\approx 0.2222$.<br/>(b) All three play the same position: either all guards, all forwards, or all centers (3 outcomes): $P = 3/27 = 1/9 \\approx 0.1111$.</p>",
    "trap": "The sample space has size $3^3=27$, not $3\\times 3=9$.",
    "tests": [
      "c.prob.1.2.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 31(a–b), PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.32",
    "course": "prob",
    "sec": "2.5",
    "marks": 3,
    "title": "Position invariance in a random lineup",
    "prompt": "<p>A group of $b$ boys and $g$ girls is arranged in a random line, with all $(b+g)!$ permutations equally likely. What is the probability that the person in the $i$th position ($1\\le i\\le b+g$) is a girl?</p>",
    "approach": "<p>Use positional symmetry or count permutations with a girl in slot $i$.</p>",
    "solution": "<p>By symmetry, every one of the $b+g$ positions is equally likely to be occupied by any of the $b+g$ distinct individuals. Because exactly $g$ of the individuals are girls, the probability that slot $i$ is occupied by a girl is $\\frac{g}{b+g}$. (Equivalently, there are $g\\times (b+g-1)!$ permutations with a girl in position $i$; dividing by $(b+g)!$ gives $\\frac{g}{b+g}$).</p>",
    "trap": "The probability is completely independent of the position index $i$.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 32, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.33",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Capture-recapture hypergeometric probability",
    "prompt": "<p>A wildlife reserve contains 20 elk, of which 5 are captured, tagged, and released. Later, 4 elk are captured at random. What is the probability that exactly 2 of the 4 are tagged?</p> State the sampling assumptions.",
    "approach": "<p>Apply the hypergeometric distribution formula $\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$.</p>",
    "solution": "<p>Population $N=20$, tagged elk $K=5$, recaptured sample $n=4$. The number of ways to choose 2 tagged elk and 2 untagged elk is $\\binom{5}{2}\\binom{15}{2} = 10\\times 105 = 1,050$. The total number of 4-elk samples is $\\binom{20}{4} = \\frac{20\\times 19\\times 18\\times 17}{24} = 4,845$. The probability is $P = \\frac{1,050}{4,845} = \\frac{70}{323} \\approx 0.2167$. (This assumes all 20 elk are equally likely to be recaptured, with no tag loss or behavioral change).</p> Assume the population remains these same 20 elk, tags are retained and recognized, and the recapture is a uniform four-elk sample, without changing capture chances through tagging.",
    "trap": "Untagged elk are drawn from the remaining $20 - 5 = 15$ animals.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 33, PDF p. 73."
  },
  {
    "id": "w.prob.2.ross.prob.34",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "The Yarborough hand probability in bridge",
    "prompt": "<p>In bridge, a hand with no cards higher than 9 (no 10, J, Q, K, or A) is called a Yarborough. What is the probability that a randomly dealt 13-card bridge hand is a Yarborough?</p>",
    "approach": "<p>Count cards with rank 2 through 9 and evaluate the subset ratio over $\\binom{52}{13}$.</p>",
    "solution": "<p>The ranks 2, 3, 4, 5, 6, 7, 8, 9 comprise 8 denominations, giving $8\\times 4 = 32$ cards that are 9 or lower. The 13 cards of a Yarborough hand must be chosen entirely from these 32 cards. There are $\\binom{32}{13}$ such hands. The total number of bridge hands is $\\binom{52}{13}$. The probability is $P = \\frac{\\binom{32}{13}}{\\binom{52}{13}} = \\frac{347,373,600}{635,013,559,600} \\approx 0.000547$ (about 1 in 1,828 hands).</p>",
    "trap": "Ranks 2 through 9 give 8 ranks (32 cards); do not count 9 ranks.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 34, PDF pp. 73–74."
  },
  {
    "id": "w.prob.2.ross.prob.35",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Multi-color urn extraction probabilities",
    "prompt": "Choose seven balls without replacement from 12 red,16 blue,18 green. Find chances of (a) 3 red,2 blue,2 green; (b) at least 2 red; (c) all the same color; (d) exactly 3 red or exactly 3 blue.",
    "approach": "<p>Apply multivariate hypergeometric counting and inclusion-exclusion.</p>",
    "solution": "There are T=C(46,7)=53,524,680 equally likely samples. (a) C(12,3)C(16,2)C(18,2)/T≈.0754643. (b) 1−[C(34,7)+12C(34,6)]/T, subtracting zero and one red. (c) [C(12,7)+C(16,7)+C(18,7)]/T. (d) [C(12,3)C(34,4)+C(16,3)C(30,4)−C(12,3)C(16,3)C(18,1)]/T. The last subtraction removes samples counted twice, with three red and three blue.",
    "trap": "In (d), a 7-ball hand can contain both 3 red AND 3 blue balls (leaving 1 green), so subtract the intersection.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 35(a–d), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.36",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Two-card pair and ace probabilities",
    "prompt": "<p>Two cards are chosen randomly from a 52-card deck without replacement. What is the probability that: (a) both are aces? (b) both have the same denomination?</p>",
    "approach": "<p>Use combination ratios over $\\binom{52}{2} = 1,326$.</p>",
    "solution": "<p>(a) Both aces: choose 2 aces from 4: $\\binom{4}{2} = 6$. Thus $P(\\text{both aces}) = \\frac{6}{1,326} = \\frac{1}{221} \\approx 0.004525$.<br/>(b) Same denomination: choose any of 13 denominations, and 2 cards of that denomination in $\\binom{4}{2}=6$ ways: $13\\times 6 = 78$ pairs. Thus $P(\\text{pair}) = \\frac{78}{1,326} = \\frac{13}{221} = \\frac{1}{17} \\approx 0.058824$. (Equivalently, after the first card is dealt, exactly 3 of the remaining 51 cards match its denomination: $3/51 = 1/17$).</p>",
    "trap": "In (b), once the first card is fixed, the second card matches with chance $3/51 = 1/17$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 36(a–b), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.37",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Exam problem preparation success rates",
    "prompt": "<p>An instructor provides 10 practice problems, of which 5 will be selected randomly for the final exam. A student knows how to solve 7 of the 10 problems. What is the probability that the student will answer correctly: (a) all 5 problems? (b) at least 4 problems?</p>",
    "approach": "<p>Hypergeometric distribution with $N=10$, $K=7$, and $n=5$.</p>",
    "solution": "<p>Total exams: $\\binom{10}{5} = 252$.<br/>(a) All 5 known: $\\binom{7}{5} = 21$. $P = \\frac{21}{252} = \\frac{1}{12} \\approx 0.0833$.<br/>(b) At least 4 known: 4 known plus 1 unknown, or all 5 known: $\\binom{7}{4}\\binom{3}{1} + \\binom{7}{5} = 35\\times 3 + 21 = 105 + 21 = 126$. Thus $P = \\frac{126}{252} = \\frac{1}{2} = 0.50$.</p>",
    "trap": "At least 4 means either exactly 4 or all 5; add both favorable combinations.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 37(a–b), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.38",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Determining drawer population from pair probability",
    "prompt": "<p>A drawer contains $n$ socks, exactly 3 of which are red. When 2 socks are chosen randomly without replacement, the probability that both are red is $1/2$. Find the total number of socks $n$.</p>",
    "approach": "<p>Set up the combination equation $\\binom{3}{2}/\\binom{n}{2} = 1/2$ and solve for integer $n$.</p>",
    "solution": "<p>The probability of choosing 2 red socks is $\\frac{\\binom{3}{2}}{\\binom{n}{2}} = \\frac{3}{n(n-1)/2} = \\frac{6}{n(n-1)}$. Setting this equal to $1/2$: $\\frac{6}{n(n-1)} = \\frac{1}{2} \\implies n(n-1) = 12$. Expanding: $n^2 - n - 12 = 0 \\implies (n-4)(n+3) = 0$. Since $n \\ge 3$ must be a positive integer, $n = 4$. There are 4 socks in the drawer (3 red and 1 non-red).</p>",
    "trap": "The quadratic has roots 4 and -3; reject the negative root.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 38, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.39",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Hotel check-in occupancy collision avoidance",
    "prompt": "<p>Three people independently check into hotels in a town with 5 hotels. Assuming each person is equally likely to choose any hotel, what is the probability that all three check into different hotels?</p> State the assumptions.",
    "approach": "<p>Divide the number of permutations without replacement by the total number of unrestricted assignments.</p>",
    "solution": "<p>Each of the 3 travelers can choose any of the 5 hotels, giving $5^3 = 125$ equally likely assignments. For all three to check into different hotels, the first has 5 choices, the second 4, and the third 3: $5\\times 4\\times 3 = 60$. The probability is $P = \\frac{60}{125} = \\frac{12}{25} = 0.48$. (This assumes hotel choices are independent and uniform).</p> The calculation assumes independent hotel choices and that each of the five hotels is equally likely for each person.",
    "trap": "The denominator is $5^3$, not $3^5$; hotels are chosen by people.",
    "tests": [
      "c.prob.1.2.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 39, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.40",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Four-color urn sample characteristics",
    "prompt": "<p>An urn contains 4 red, 5 white, 6 blue, and 7 green balls (22 balls total). Four balls are randomly drawn without replacement. Find the probability that: (a) at least one green ball is chosen; (b) exactly one ball of each color is chosen.</p>",
    "approach": "<p>Use complementation with non-green balls for (a) and product of single draws for (b).</p>",
    "solution": "<p>Total selections of 4 from 22 is $\\binom{22}{4} = \\frac{22\\times 21\\times 20\\times 19}{24} = 7,315$.<br/>(a) At least one green: the complement is drawing all 4 balls from the $22 - 7 = 15$ non-green balls, which has $\\binom{15}{4} = \\frac{15\\times 14\\times 13\\times 12}{24} = 1,365$ ways. $P(\\ge 1\\text{ green}) = 1 - \\frac{1,365}{7,315} = 1 - \\frac{39}{209} = \\frac{170}{209} \\approx 0.8134$.<br/>(b) One ball of each color: choose 1 red, 1 white, 1 blue, 1 green: $4\\times 5\\times 6\\times 7 = 840$ ways. $P = \\frac{840}{7,315} = \\frac{24}{209} \\approx 0.1148$.</p>",
    "trap": "Remember that 22 balls split into 7 green and 15 non-green.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 40(a–b), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.41",
    "course": "prob",
    "sec": "2.4",
    "marks": 3,
    "title": "Rolling at least one six in four die rolls",
    "prompt": "<p>A fair six-sided die is rolled 4 times. What is the probability that a 6 appears at least once?</p>",
    "approach": "<p>Compute the complement event that no 6 appears in any of the 4 independent rolls.</p>",
    "solution": "<p>On each roll, the probability of not rolling a 6 is $5/6$. By independence, the probability of obtaining no 6 in all 4 rolls is $(5/6)^4 = \\frac{625}{1,296}$. By the complement rule, the probability of rolling at least one 6 is $P = 1 - \\left(\\frac{5}{6}\\right)^4 = 1 - \\frac{625}{1,296} = \\frac{671}{1,296} \\approx 0.5177$.</p>",
    "trap": "Do not sum $4\\times (1/6) = 4/6$; multiple sixes can occur, so rolls are not mutually exclusive.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 41, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.42",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "De Méré double-six threshold problem",
    "prompt": "<p>Two fair dice are thrown $n$ times in succession. Compute the probability of obtaining double 6 at least once. What is the minimum number of throws $n$ needed for this probability to be at least $1/2$?</p>",
    "approach": "<p>Use the complement $(35/36)^n$ and solve the inequality $1 - (35/36)^n \\ge 1/2$.</p>",
    "solution": "<p>On each toss of two dice, $P(\\text{double 6}) = 1/36$, and $P(\\text{not double 6}) = 35/36$. For $n$ independent tosses, the probability of at least one double 6 is $P_n = 1 - (35/36)^n$. Setting $1 - (35/36)^n \\ge 1/2$ gives $(35/36)^n \\le 1/2$. Taking natural logarithms: $n\\ln(35/36) \\le -\\ln 2 \\implies n\\ge \\frac{\\ln 2}{\\ln(36/35)} = \\frac{0.693147}{0.028171} \\approx 24.605$. Since $n$ must be an integer, the minimum number of throws is $n = 25$ (where $P_{24} \\approx 0.4914$ and $P_{25} \\approx 0.5055$).</p>",
    "trap": "The historical Chevalier de Méré paradox arose from confusing $24\\times(1/36) = 2/3$ with the true probability $1 - (35/36)^{24} \\approx 0.4914 < 0.5$.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 42, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.43",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Adjacency probability in linear versus circular order",
    "prompt": "<p>$N$ people, including A and B, are randomly arranged: (a) in a line; (b) in a circle. In each case, what is the probability that A and B sit next to each other?</p>",
    "approach": "<p>Use block permutations for the line and relative chair positions for the circle.</p>",
    "solution": "<p>(a) In a line of $N$ people ($N!$ orderings), treat (AB) as 1 unit: there are $(N-1)!\\times 2!$ arrangements where A and B are adjacent. The probability is $\\frac{2(N-1)!}{N!} = \\frac{2}{N}$.<br/>(b) In a circle of $N$ people ($(N-1)!$ circular orderings), fix A's seat without loss of generality. There are $N-1$ remaining seats for B, of which exactly 2 are adjacent to A (one to the left, one to the right). Since all $N-1$ seats are equally likely for B, the probability is $\\frac{2}{N-1}$.</p>",
    "trap": "In a circle, there are no endpoints, so every person has exactly 2 neighbors among $N-1$ available positions.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 43(a–b), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.44",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Separation distance between two individuals in a line",
    "prompt": "<p>Five people A, B, C, D, E are arranged in a random line ($5! = 120$ orderings). Find the probability that: (a) there is exactly 1 person between A and B; (b) there are exactly 2 people between A and B; (c) there are exactly 3 people between A and B.</p>",
    "approach": "<p>Count the possible index pairs for A and B with separation $k$, multiplied by $2!$ internal orders and $3!$ other arrangements.</p>",
    "solution": "<p>Total arrangements = $5! = 120$. For each part, A and B can appear in either order ($2! = 2$ ways) and the other 3 people fill remaining positions in $3! = 6$ ways: a factor of $2\\times 6 = 12$ per pair of positions.<br/>(a) Exactly 1 person between: positions for {A, B} are (1, 3), (2, 4), (3, 5) (3 pairs). Total favorable = $3\\times 12 = 36$. $P = \\frac{36}{120} = \\frac{3}{10} = 0.30$.<br/>(b) Exactly 2 people between: positions are (1, 4), (2, 5) (2 pairs). Total favorable = $2\\times 12 = 24$. $P = \\frac{24}{120} = \\frac{2}{10} = \\frac{1}{5} = 0.20$.<br/>(c) Exactly 3 people between: positions must be (1, 5) (1 pair). Total favorable = $1\\times 12 = 12$. $P = \\frac{12}{120} = \\frac{1}{10} = 0.10$.</p>",
    "trap": "Check: adjacent (0 between) has 4 pairs ($48/120 = 4/10$). The probabilities $4/10 + 3/10 + 2/10 + 1/10 = 1$ sum to 1.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 44(a–c), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.45",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Key trial success distribution with and without replacement",
    "prompt": "<p>A person has $n$ keys, exactly one of which unlocks the door. Find the probability of opening the door on the $k$th try ($1\\le k\\le n$): (a) if non-working keys are discarded; (b) if non-working keys are not discarded.</p>",
    "approach": "<p>Compute sequential conditional failure probabilities followed by success at trial $k$.</p>",
    "solution": "<p>(a) With discarding (sampling without replacement): trial $k$ can occur for any $1\\le k\\le n$. The probability of failing on the first $k-1$ tries and succeeding on try $k$ is $\\frac{n-1}{n}\\times\\frac{n-2}{n-1}\\times\\cdots\\times\\frac{n-k+1}{n-k+2}\\times\\frac{1}{n-k+1} = \\frac{1}{n}$. The distribution is uniform on $\\{1, 2, \\ldots, n\\}$.<br/>(b) Without discarding (sampling with replacement): every try is an independent attempt with success probability $1/n$ and failure $(n-1)/n$. The probability of first success on try $k$ ($k\\ge 1$) is geometric: $\\left(\\frac{n-1}{n}\\right)^{k-1}\\left(\\frac{1}{n}\\right)$.</p>",
    "trap": "In (a), telescoping fractions cancel completely to leave $1/n$ for every trial index $k$.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 45(a–b), PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.46",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Monthly birthday collision threshold",
    "prompt": "<p>Assuming all 12 calendar months are equally likely birth months, how many people must be in a room so that the probability of at least two celebrating their birthday in the same month is at least $1/2$?</p>",
    "approach": "<p>Compute $1 - \\frac{P(12, k)}{12^k}$ for increasing values of $k$.</p>",
    "solution": "<p>For $k$ people, the probability that all $k$ are born in different months is $\\frac{P(12, k)}{12^k}$. We evaluate for consecutive values of $k$:<br/>- For $k=4$: $P(\\text{all distinct}) = \\frac{12\\times 11\\times 10\\times 9}{12^4} = \\frac{11,880}{20,736} \\approx 0.5729$. Then $P(\\text{collision}) = 1 - 0.5729 = 0.4271 < 0.5$.<br/>- For $k=5$: $P(\\text{all distinct}) = \\frac{12\\times 11\\times 10\\times 9\\times 8}{12^5} = \\frac{95,040}{248,832} \\approx 0.3819$. Then $P(\\text{collision}) = 1 - 0.3819 = 0.6181 \\ge 0.5$.<br/>Therefore, at least 5 people are required.</p>",
    "trap": "Although there are 12 months, the threshold for a $\\ge 50\\%$ collision chance is only 5 people.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 46, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.47",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Order statistic distribution from integer subset selection",
    "prompt": "<p>Five numbers are chosen at random without replacement from $\\{1, 2, \\ldots, 14\\}$. What is the probability that 9 is the third smallest value chosen?</p>",
    "approach": "<p>Fix 9 as the median, then choose 2 smaller numbers from $\\{1..8\\}$ and 2 larger numbers from $\\{10..14\\}$.</p>",
    "solution": "<p>The total number of 5-element subsets chosen from 14 integers is $\\binom{14}{5} = \\frac{14\\times 13\\times 12\\times 11\\times 10}{120} = 2,002$. For 9 to be the third smallest value in the chosen subset, the subset must contain: (1) exactly two numbers strictly less than 9, chosen from $\\{1, 2, \\ldots, 8\\}$ in $\\binom{8}{2} = 28$ ways; (2) the number 9 itself (1 way); (3) exactly two numbers strictly greater than 9, chosen from $\\{10, 11, 12, 13, 14\\}$ in $\\binom{5}{2} = 10$ ways. By the product rule, there are $28\\times 1\\times 10 = 280$ favorable subsets. The probability is $P = \\frac{280}{2,002} = \\frac{20}{143} \\approx 0.13986$.</p>",
    "trap": "Numbers smaller than 9 are chosen from the 8 integers $1..8$; numbers larger are chosen from the 5 integers $10..14$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 47, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.48",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Specified monthly birthday distribution profile",
    "prompt": "<p>Given 20 people and assuming 12 equally likely birth months, formulate the probability that among the 12 months, there are exactly 4 months with 2 birthdays, 4 months with 3 birthdays, and 4 months with 0 birthdays.</p>",
    "approach": "<p>Choose the month categories using multinomial coefficients, then distribute the 20 people.</p>",
    "solution": "All 12^{20} independent uniform birth-month assignments are equally likely. Assign the twelve months to groups of four with occupancies 2,3,0 in 12!/(4!)³ ways. For a fixed assignment, allocate the 20 distinct people in 20!/[(2!)⁴(3!)⁴] ways. Divide their product by 12^{20}; the probability is about .00106042.",
    "trap": "The 4 months with 0 birthdays are automatically the remaining 4 months ($4+4+4=12$ and $4(2)+4(3)+4(0)=20$).",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 48, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.49",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Balanced gender division into equal groups",
    "prompt": "<p>A group of 6 men and 6 women is randomly divided into two equal groups of 6 each. What is the probability that both groups have the same number of men (3 men and 3 women in each group)?</p>",
    "approach": "<p>Determine group 1 by choosing 3 men from 6 and 3 women from 6, divided by total 6-person groups.</p>",
    "solution": "<p>Choosing group 1 of size 6 uniquely determines group 2. The total number of ways to choose group 1 from the 12 people is $\\binom{12}{6} = 924$. For both groups to have the same number of men, group 1 must contain exactly 3 men and 3 women, which can be selected in $\\binom{6}{3}\\binom{6}{3} = 20\\times 20 = 400$ ways. Assuming all divisions are equally likely, $P = \\frac{400}{924} = \\frac{100}{231} \\approx 0.4329$.</p>",
    "trap": "Specifying group 1 completely determines group 2, so do not multiply by an extra factor.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 49, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.50",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Joint spade split between bridge partners",
    "prompt": "<p>In bridge, 52 cards are dealt into four 13-card hands. What is the probability that you hold exactly 5 spades and your partner holds the remaining 8 spades?</p>",
    "approach": "<p>Compute your hand's composition, then evaluate the conditional probability of your partner's hand from the remaining 39 cards.</p>",
    "solution": "First choose your five spades and eight nonspades: the probability is C(13,5)C(39,8)/C(52,13). Given that hand, your partner chooses a 13-subset from 39 remaining cards and must take all eight spades plus five of 31 nonspades. This chance is C(31,5)/C(39,13). Multiply the two factors: P≈.00000260839942.",
    "trap": "After your hand is fixed, your partner's hand is chosen from the remaining 39 cards containing 8 spades and 31 non-spades.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 50, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.51",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Binomial occupancy probability in random allocation",
    "prompt": "<p>Suppose $n$ distinguishable balls are randomly distributed into $N$ compartments such that each of the $N^n$ arrangements is equally likely. Find the probability that exactly $m$ balls fall into the first compartment ($0\\le m\\le n$).</p>",
    "approach": "<p>Choose which $m$ balls enter compartment 1, and place the remaining $n-m$ balls into the other $N-1$ compartments.</p>",
    "solution": "<p>There are $N^n$ total equally likely assignments. To have exactly $m$ balls in compartment 1: choose which $m$ balls enter compartment 1 in $\\binom{n}{m}$ ways. Each of the remaining $n-m$ balls can be placed in any of the other $N-1$ compartments, giving $(N-1)^{n-m}$ choices. The total number of favorable assignments is $\\binom{n}{m}(N-1)^{n-m}$. The probability is $P = \\frac{\\binom{n}{m}(N-1)^{n-m}}{N^n} = \\binom{n}{m}\\left(\\frac{1}{N}\\right)^m\\left(1 - \\frac{1}{N}\\right)^{n-m}$, which is the binomial probability with parameters $n$ and $p=1/N$.</p>",
    "trap": "The remaining balls must be distributed among the other $N-1$ compartments, not $N$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 51, PDF p. 74."
  },
  {
    "id": "w.prob.2.ross.prob.52",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Shoe pair completeness probabilities",
    "prompt": "<p>A closet contains 10 pairs of shoes (20 distinct shoes). If 8 shoes are randomly selected without replacement, find the probability that there is: (a) no complete pair; (b) exactly 1 complete pair.</p>",
    "approach": "<p>Count selections by choosing pairs first and then choosing individual shoes from each pair.</p>",
    "solution": "<p>Total selections of 8 from 20: $\\binom{20}{8} = 125,970$.<br/>(a) No complete pair: the 8 shoes must come from 8 different pairs. Choose 8 pairs from 10 in $\\binom{10}{8} = 45$ ways. From each selected pair, choose 1 of the 2 shoes (left or right) in $2^8 = 256$ ways. Total favorable = $45\\times 256 = 11,520$. $P = \\frac{11,520}{125,970} = \\frac{128}{1,399} \\approx 0.09145$.<br/>(b) Exactly 1 complete pair: choose 1 pair to be complete in $\\binom{10}{1} = 10$ ways (contributes 2 shoes). Choose 6 other pairs from the remaining 9 in $\\binom{9}{6} = 84$ ways, and 1 shoe from each in $2^6 = 64$ ways (contributes 6 shoes). Total favorable = $10\\times 84\\times 64 = 53,760$. $P = \\frac{53,760}{125,970} = \\frac{1,792}{4,199} \\approx 0.42677$.</p>",
    "trap": "In (b), ensure the remaining 6 shoes are drawn from 6 distinct pairs so that no second complete pair is formed.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 52(a–b), PDF pp. 74–75."
  },
  {
    "id": "w.prob.2.ross.prob.53",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Row arrangement with no adjacent partners",
    "prompt": "Arrange eight people, consisting of four couples, randomly in a row. Find the chance nobody is next to their partner.",
    "approach": "<p>Let $E_i$ be the event that couple $i$ is adjacent, and apply Proposition 4.4.</p>",
    "solution": "For k specified couples to sit together, collapse each into a block: (8−k)! ways to arrange the blocks/people, and 2^k internal couple orders. Inclusion–exclusion gives ∑_{k=0}^4(−1)^kC(4,k)2^k(8−k)!/8!=12/35≈.3428571.",
    "trap": "Each bundled couple introduces an internal permutation factor of $2! = 2$.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 53, PDF p. 75."
  },
  {
    "id": "w.prob.2.ross.prob.54",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Void suit probability in bridge via inclusion-exclusion",
    "prompt": "<p>Compute the probability that a 13-card bridge hand is void in at least one suit. Explain why the answer is not simply $4\\binom{39}{13}/\\binom{52}{13}$.</p>",
    "approach": "<p>Define $E_i$ as the event that the hand is void in suit $i$ ($i=1..4$) and apply inclusion-exclusion.</p>",
    "solution": "<p>The naive expression $4\\binom{39}{13}/\\binom{52}{13}$ multi-counts hands void in two or three suits: a hand void in both spades and hearts is counted twice in $P(E_1) + P(E_2)$. By Proposition 4.4:<br/>$P(\\cup_{i=1}^4 E_i) = \\sum_{i=1}^4 P(E_i) - \\sum_{i<j} P(E_i E_j) + \\sum_{i<j<k} P(E_i E_j E_k) - P(E_1 E_2 E_3 E_4)$.<br/>Here: $P(E_i) = \\frac{\\binom{39}{13}}{\\binom{52}{13}}$, $P(E_i E_j) = \\frac{\\binom{26}{13}}{\\binom{52}{13}}$ (void in 2 suits, cards chosen from 26), $P(E_i E_j E_k) = \\frac{\\binom{13}{13}}{\\binom{52}{13}} = \\frac{1}{\\binom{52}{13}}$ (all cards in 1 suit), and $P(E_1 E_2 E_3 E_4) = 0$.<br/>Thus $P(\\text{void in } \\ge 1\\text{ suit}) = \\frac{4\\binom{39}{13} - 6\\binom{26}{13} + 4\\binom{13}{13}}{\\binom{52}{13}} \\approx \\frac{3.249\\times 10^{10} - 6.24\\times 10^7 + 4}{6.350\\times 10^{11}} \\approx 0.051066$.</p>",
    "trap": "Hands with 2 or 3 voids overlap across single-suit void events; inclusion-exclusion is mandatory.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 54, PDF p. 75."
  },
  {
    "id": "w.prob.2.ross.prob.55",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Ace-king and four-of-a-kind occurrences in bridge",
    "prompt": "<p>In a 13-card bridge hand: (a) Find the probability of holding the Ace and King of at least one suit. (b) Find the probability of holding all 4 cards of at least one denomination.</p>",
    "approach": "<p>Apply the inclusion-exclusion principle over the 4 suits for (a) and 13 denominations for (b).</p>",
    "solution": "<p>(a) Let $A_i$ be the event of holding the Ace and King of suit $i$ ($i=1..4$). For any $k$ suits, holding the $2k$ specified aces and kings leaves $13 - 2k$ cards to choose from the remaining $52 - 2k$ cards: $P(A_{i_1}\\cdots A_{i_k}) = \\frac{\\binom{52 - 2k}{13 - 2k}}{\\binom{52}{13}}$. By inclusion-exclusion: $P(\\cup_{i=1}^4 A_i) = \\sum_{k=1}^4 (-1)^{k+1} \\binom{4}{k} \\frac{\\binom{52 - 2k}{13 - 2k}}{\\binom{52}{13}} \\approx 0.2198$.<br/>(b) Let $D_i$ be the event of holding all 4 cards of denomination $i$ ($i=1..13$). A hand of 13 cards can hold at most $\\lfloor 13/4 \\rfloor = 3$ complete 4-of-a-kinds. By inclusion-exclusion: $P(\\cup_{i=1}^{13} D_i) = 13\\frac{\\binom{48}{9}}{\\binom{52}{13}} - \\binom{13}{2}\\frac{\\binom{44}{5}}{\\binom{52}{13}} + \\binom{13}{3}\\frac{\\binom{40}{1}}{\\binom{52}{13}} \\approx 0.03420035$.</p>",
    "trap": "In (b), at most 3 denominations can simultaneously have 4 cards in a 13-card hand, terminating the sum at $k=3$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 55(a–b), PDF p. 75."
  },
  {
    "id": "w.prob.2.ross.prob.56",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Non-transitive spinner game second-player advantage",
    "prompt": "<p>Three spinners A, B, C each have 3 equally likely sectors: Spinner A has values (9, 5, 1), Spinner B has (8, 4, 3), and Spinner C has (7, 6, 2). Player 1 picks a spinner, then Player 2 picks from the remaining two. Both spin, and the higher number wins. Would you rather be Player 1 or Player 2? Explain with probabilities.</p>",
    "approach": "<p>Compute the pairwise winning probabilities between all three spinners to reveal non-transitivity.</p>",
    "solution": "<p>Compare each pair over the $3\\times 3 = 9$ equally likely outcomes:<br/>1. Spinner A vs B: A has (9, 5, 1), B has (8, 4, 3). 9 beats all 3 of B (3 wins); 5 beats 4 and 3 (2 wins); 1 loses to all. Total A wins = $3 + 2 = 5$ out of 9: $P(\\text{A beats B}) = 5/9 > 1/2$.<br/>2. Spinner B vs C: B has (8, 4, 3), C has (7, 6, 2). 8 beats all 3 of C (3 wins); 4 beats 2 (1 win); 3 beats 2 (1 win). Total B wins = $3 + 1 + 1 = 5$ out of 9: $P(\\text{B beats C}) = 5/9 > 1/2$.<br/>3. Spinner C vs A: C has (7, 6, 2), A has (9, 5, 1). 7 beats 5 and 1 (2 wins); 6 beats 5 and 1 (2 wins); 2 beats 1 (1 win). Total C wins = $2 + 2 + 1 = 5$ out of 9: $P(\\text{C beats A}) = 5/9 > 1/2$.<br/>Because A beats B ($5/9$), B beats C ($5/9$), and C beats A ($5/9$), these spinners form a non-transitive cycle. Whichever spinner Player 1 chooses, Player 2 can pick the spinner that beats it with probability $5/9 \\approx 55.56\\%$. Therefore, you would definitely rather be Player 2.</p>",
    "trap": "The game is non-transitive like Rock-Paper-Scissors: there is no best spinner, giving the second player a decisive advantage.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Problem 56, PDF p. 75."
  },
  {
    "id": "w.prob.2.ross.theo.1",
    "course": "prob",
    "sec": "2.2",
    "marks": 3,
    "title": "Nested inclusion of intersection, event, and union",
    "prompt": "<p>Prove that for any two events $E$ and $F$, $E\\cap F \\subseteq E \\subseteq E\\cup F$.</p>",
    "approach": "<p>Use element-level set definitions of intersection and union.</p>",
    "solution": "<p>Let $x \\in E\\cap F$. By definition of intersection, $x \\in E$ and $x \\in F$. In particular, $x \\in E$. This proves $E\\cap F \\subseteq E$.<br/>Now let $x \\in E$. By definition of union, $x \\in E\\cup F$ since $x$ belongs to at least one of $E$ or $F$. This proves $E \\subseteq E\\cup F$. Combining both inclusions gives $E\\cap F \\subseteq E \\subseteq E\\cup F$.</p>",
    "trap": "By monotonicity of probability, this immediately implies $P(EF) \\le P(E) \\le P(E\\cup F)$.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 1, PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.2",
    "course": "prob",
    "sec": "2.2",
    "marks": 3,
    "title": "Inversion of set inclusion under complementation",
    "prompt": "<p>Prove that if $E \\subseteq F$, then $F^c \\subseteq E^c$.</p>",
    "approach": "<p>Argue by contradiction or direct contrapositive on element membership.</p>",
    "solution": "<p>Suppose $E \\subseteq F$. Let $x \\in F^c$. By definition of complement, $x \\notin F$. If $x$ were in $E$, then because $E \\subseteq F$, $x$ would also be in $F$, contradicting $x \\notin F$. Therefore $x$ cannot be in $E$, which means $x \\in E^c$. Since every element of $F^c$ belongs to $E^c$, we have $F^c \\subseteq E^c$.</p>",
    "trap": "Taking complements reverses the direction of set inclusion.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 2, PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.3",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Disjoint decompositions of events and unions",
    "prompt": "<p>Prove the set identities: (a) $F = (F\\cap E) \\cup (F\\cap E^c)$; (b) $E\\cup F = E \\cup (E^c \\cap F)$.</p>",
    "approach": "<p>Use the partition of the sample space $S = E \\cup E^c$ and distributivity of intersection over union.</p>",
    "solution": "<p>(a) Since $S = E \\cup E^c$, write $F = F \\cap S = F \\cap (E \\cup E^c)$. By distributivity of intersection over union, $F = (F\\cap E) \\cup (F\\cap E^c)$. Moreover, $(F\\cap E) \\cap (F\\cap E^c) = F \\cap (E \\cap E^c) = F \\cap \\varnothing = \\varnothing$, so this is a disjoint union.<br/>(b) By distributivity, $E \\cup (E^c \\cap F) = (E \\cup E^c) \\cap (E \\cup F) = S \\cap (E \\cup F) = E \\cup F$. Note that $E$ and $E^c \\cap F$ are disjoint, providing a disjoint partition of $E\\cup F$.</p>",
    "trap": "These disjoint decompositions are the foundational steps for proving $P(F) = P(FE) + P(FE^c)$ and $P(E\\cup F) = P(E) + P(E^c F)$.",
    "tests": [
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 3, PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.4",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Countable distributivity laws for events",
    "prompt": "<p>Prove the distributive relations for countable collections of events: (a) $(\\cup_{i=1}^\\infty E_i) \\cap F = \\cup_{i=1}^\\infty (E_i \\cap F)$; (b) $(\\cap_{i=1}^\\infty E_i) \\cup F = \\cap_{i=1}^\\infty (E_i \\cup F)$.</p>",
    "approach": "<p>Verify set equality by two-way element containment in both directions.</p>",
    "solution": "<p>(a) Let $x \\in (\\cup_{i=1}^\\infty E_i) \\cap F$. Then $x \\in \\cup_{i=1}^\\infty E_i$ and $x \\in F$. Thus $x \\in E_k$ for some $k$, which implies $x \\in E_k \\cap F$, so $x \\in \\cup_{i=1}^\\infty (E_i \\cap F)$. Conversely, if $x \\in \\cup_{i=1}^\\infty (E_i \\cap F)$, then $x \\in E_k \\cap F$ for some $k$, so $x \\in E_k \\subseteq \\cup E_i$ and $x \\in F$, hence $x \\in (\\cup E_i) \\cap F$.<br/>(b) $x \\in (\\cap E_i) \\cup F \\iff x \\in \\cap E_i$ or $x \\in F$. If $x \\in F$, then $x \\in E_i \\cup F$ for all $i$, so $x \\in \\cap (E_i \\cup F)$. If $x \\in \\cap E_i$, then $x \\in E_i$ for all $i$, so $x \\in E_i \\cup F$ for all $i$. The converse holds similarly: if $x \\notin F$, then $x \\in E_i \\cup F$ for all $i$ forces $x \\in E_i$ for all $i$, so $x \\in \\cap E_i$.</p>",
    "trap": "Distributivity extends directly to infinite countable unions and intersections without changing logic.",
    "tests": [
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 4, PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.5",
    "course": "prob",
    "sec": "2.3",
    "marks": 4,
    "title": "Standard disjointization of an arbitrary event sequence",
    "prompt": "<p>For an arbitrary sequence of events $E_1, E_2, \\ldots$, define a new sequence of pairwise disjoint events $F_1, F_2, \\ldots$ such that for all $n\\ge 1$, $\\cup_{i=1}^n F_i = \\cup_{i=1}^n E_i$ and $\\cup_{i=1}^\\infty F_i = \\cup_{i=1}^\\infty E_i$.</p>",
    "approach": "<p>Assign each outcome in the union to the first event $E_k$ that contains it.</p>",
    "solution": "<p>Define $F_1 = E_1$, and for each $n \\ge 2$ define $F_n = E_n \\setminus (\\cup_{i=1}^{n-1} E_i) = E_n \\cap E_1^c \\cap E_2^c \\cap \\cdots \\cap E_{n-1}^c$.<br/>1. Pairwise disjoint: For $j < k$, $F_k \\subseteq E_j^c$ by definition, whereas $F_j \\subseteq E_j$. Thus $F_j \\cap F_k \\subseteq E_j \\cap E_j^c = \\varnothing$.<br/>2. Equal finite unions: By mathematical induction on $n$, for $n=1$, $F_1 = E_1$. Assuming $\\cup_{i=1}^{n-1} F_i = \\cup_{i=1}^{n-1} E_i$, then $(\\cup_{i=1}^{n-1} F_i) \\cup F_n = (\\cup_{i=1}^{n-1} E_i) \\cup [E_n \\setminus (\\cup_{i=1}^{n-1} E_i)] = \\cup_{i=1}^n E_i$.<br/>3. Equal countable unions: Taking the limit as $n\\to\\infty$ yields $\\cup_{i=1}^\\infty F_i = \\cup_{i=1}^\\infty E_i$.</p>",
    "trap": "This disjoint construction is the fundamental technique used to deduce continuity and Boole's inequality from countable additivity.",
    "tests": [
      "c.prob.2.2.2",
      "c.prob.2.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 5, PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.6",
    "course": "prob",
    "sec": "2.2",
    "marks": 5,
    "title": "Set-theoretic expressions for composite three-event criteria",
    "prompt": "<p>Let $E, F, G$ be three events. Express each of the following in terms of $E, F, G$ using set operations: (a) only $E$ occurs; (b) both $E$ and $G$ occur, but not $F$; (c) at least one occurs; (d) at least two occur; (e) all three occur; (f) none occurs; (g) at most one occurs; (h) at most two occur; (i) exactly two occur; (j) at most three occur.</p>",
    "approach": "<p>Translate each verbal condition into intersection, union, and complement operations.</p>",
    "solution": "<p>(a) Only $E$: $E \\cap F^c \\cap G^c$.<br/>(b) $E$ and $G$ but not $F$: $E \\cap F^c \\cap G$.<br/>(c) At least one: $E \\cup F \\cup G$.<br/>(d) At least two: $(E\\cap F) \\cup (E\\cap G) \\cup (F\\cap G)$.<br/>(e) All three: $E \\cap F \\cap G$.<br/>(f) None: $E^c \\cap F^c \\cap G^c = (E\\cup F\\cup G)^c$.<br/>(g) At most one: $(E\\cap F^c \\cap G^c) \\cup (E^c \\cap F \\cap G^c) \\cup (E^c \\cap F^c \\cap G) \\cup (E^c \\cap F^c \\cap G^c) = [(E\\cap F) \\cup (E\\cap G) \\cup (F\\cap G)]^c$.<br/>(h) At most two: $(E\\cap F\\cap G)^c = E^c \\cup F^c \\cup G^c$.<br/>(i) Exactly two: $(E\\cap F\\cap G^c) \\cup (E\\cap F^c \\cap G) \\cup (E^c \\cap F\\cap G)$.<br/>(j) At most three: The entire sample space $S$ (since there are only three events in total).</p>",
    "trap": "In (g), \"at most one\" includes the case where NONE of the events occurs.",
    "tests": [
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 6(a–j), PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.7",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Venn diagram proofs of absorption and De Morgan laws",
    "prompt": "<p>Use algebraic and Venn diagram arguments to verify: (a) $(E\\cup F) \\cap (E\\cup F^c) = E$; (b) De Morgan's laws: $(E\\cup F)^c = E^c \\cap F^c$ and $(E\\cap F)^c = E^c \\cup F^c$.</p>",
    "approach": "<p>Apply distributive laws of set theory and trace corresponding Venn diagram regions.</p>",
    "solution": "<p>(a) By distributivity of union over intersection: $(E\\cup F) \\cap (E\\cup F^c) = E \\cup (F \\cap F^c)$. Since $F$ and $F^c$ are disjoint, $F\\cap F^c = \\varnothing$. Thus $E \\cup \\varnothing = E$. In a Venn diagram, $E\\cup F$ covers regions (E only, both, F only) and $E\\cup F^c$ covers (E only, both, outside). Their intersection is precisely the two regions making up $E$.<br/>(b) $(E\\cup F)^c$: The union $E\\cup F$ contains regions inside $E$ or $F$. The complement $(E\\cup F)^c$ consists of all points outside both $E$ and $F$, which is $E^c \\cap F^c$. Similarly, $(E\\cap F)^c$ is everything except the mutual overlap, which is the union of points outside $E$ and points outside $F$: $E^c \\cup F^c$.</p>",
    "trap": "In (a), distributivity factors out $E\\cup$ to leave $F\\cap F^c = \\varnothing$.",
    "tests": [
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 7(a–b), PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.8",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Bell numbers recurrence for set partitions",
    "prompt": "<p>Let $T_n$ denote the number of partitions of $\\{1, 2, \\ldots, n\\}$ into nonempty disjoint subsets (Bell numbers). (a) Show $T_1=1, T_2=2, T_3=5, T_4=15$. (b) Prove the recurrence $T_{n+1} = 1 + \\sum_{k=1}^n \\binom{n}{k} T_k$ by tracking a special element.</p> List the partitions for n=3,4 and use the recurrence to calculate T_10.",
    "approach": "<p>Condition on the number of other elements sharing the block containing element $n+1$.</p>",
    "solution": "<p>(a) $n=1$: $\\{\\{1\\}\\} \\implies T_1 = 1$.<br/>$n=2$: $\\{\\{1, 2\\}\\}$ and $\\{\\{1\\}, \\{2\\}\\} \\implies T_2 = 2$.<br/>$n=3$: 1 partition of size 3, 3 partitions of sizes 2+1, 1 partition of sizes 1+1+1: $1 + 3 + 1 = 5 \\implies T_3 = 5$.<br/>$n=4$: 1 (size 4) + $\\binom{4}{2}/2 = 3$ (2+2) + $\\binom{4}{3} = 4$ (3+1) + $6$ (2+1+1) + 1 (1+1+1+1) $= 1 + 3 + 4 + 6 + 1 = 15 \\implies T_4 = 15$.<br/>(b) Consider partitioning $\\{1, 2, \\ldots, n, n+1\\}$. Focus on element $n+1$. In any partition, the block containing $n+1$ contains $n+1$ along with some subset of $k$ other elements chosen from the $n$ items $\\{1, \\ldots, n\\}$ ($0\\le k\\le n$). There are $\\binom{n}{k}$ ways to choose these $k$ companions. The remaining $n-k$ elements can be partitioned in $T_{n-k}$ ways (with $T_0=1$). Setting $j = n-k$ and separating $k=n$ (giving 1 block) gives $T_{n+1} = \\sum_{j=0}^n \\binom{n}{j} T_j = 1 + \\sum_{k=1}^n \\binom{n}{k} T_k$. For $n=3$: $T_4 = \\binom{3}{0}T_0 + \\binom{3}{1}T_1 + \\binom{3}{2}T_2 + \\binom{3}{3}T_3 = 1(1) + 3(1) + 3(2) + 1(5) = 1 + 3 + 6 + 5 = 15$.</p> Explicitly the five partitions of {1,2,3} are 123;12|3;13|2;23|1;1|2|3. The fifteen of {1,2,3,4} are 1234;123|4;124|3;134|2;234|1;12|34;13|24;14|23;12|3|4;13|2|4;14|2|3;23|1|4;24|1|3;34|1|2;1|2|3|4, where a vertical bar separates blocks. Iterating the recurrence gives T_5=52,T_6=203,T_7=877,T_8=4140,T_9=21147,T_10=115975.",
    "trap": "The binomial coefficient $\\binom{n}{k}$ chooses the companion elements of $n+1$; the remaining elements partition independently.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 8(a–b), PDF p. 76."
  },
  {
    "id": "w.prob.2.ross.theo.10",
    "course": "prob",
    "sec": "2.4",
    "marks": 5,
    "title": "Three-event union identity via disjoint region decomposition",
    "prompt": "<p>Prove the identity: $P(E\\cup F\\cup G) = P(E) + P(F) + P(G) - P(E^c F G) - P(E F^c G) - P(E F G^c) - 2P(EFG)$.</p>",
    "approach": "<p>Express each marginal probability as the sum of its four constituent disjoint Venn regions.</p>",
    "solution": "<p>Divide $E\\cup F\\cup G$ into 7 mutually exclusive regions: 3 singleton regions ($E F^c G^c, E^c F G^c, E^c F^c G$), 3 pairwise-only regions ($E F G^c, E F^c G, E^c F G$), and 1 triple overlap ($EFG$).<br/>Writing marginals:<br/>- $P(E) = P(E F^c G^c) + P(E F G^c) + P(E F^c G) + P(EFG)$<br/>- $P(F) = P(E^c F G^c) + P(E F G^c) + P(E^c F G) + P(EFG)$<br/>- $P(G) = P(E^c F^c G) + P(E F^c G) + P(E^c F G) + P(EFG)$.<br/>Summing these three equations:<br/>$P(E) + P(F) + P(G) = [P(E F^c G^c) + P(E^c F G^c) + P(E^c F^c G)] + 2[P(E F G^c) + P(E F^c G) + P(E^c F G)] + 3P(EFG)$.<br/>Notice that the union $P(E\\cup F\\cup G)$ contains each pairwise-only region once and the triple overlap once. Subtracting $P(E^c F G) + P(E F^c G) + P(E F G^c) + 2P(EFG)$ from $P(E)+P(F)+P(G)$ reduces the coefficients of pairwise-only regions from 2 to 1, and the coefficient of the triple overlap from 3 to 1. The result equals $P(E\\cup F\\cup G)$ exactly.</p>",
    "trap": "Each pair-only region appears in 2 marginals, so subtracting it once leaves net coefficient 1; the triple overlap appears in 3 marginals, so subtracting $2P(EFG)$ leaves net coefficient 1.",
    "tests": [
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 10, PDF pp. 76–77."
  },
  {
    "id": "w.prob.2.ross.theo.11",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Derivation of Bonferroni inequality for two events",
    "prompt": "<p>Prove Bonferroni’s inequality for two events: $P(E\\cap F) \\ge P(E) + P(F) - 1$. If $P(E)=0.9$ and $P(F)=0.8$, show that $P(E\\cap F) \\ge 0.7$.</p>",
    "approach": "<p>Rearrange the inclusion-exclusion identity and apply the axiom bound $P(E\\cup F) \\le 1$.</p>",
    "solution": "<p>By Proposition 4.3, $P(E\\cup F) = P(E) + P(F) - P(E\\cap F)$. Rearranging terms gives $P(E\\cap F) = P(E) + P(F) - P(E\\cup F)$. By Axiom 1, the probability of any event satisfies $P(E\\cup F) \\le 1$, which implies $-P(E\\cup F) \\ge -1$. Substituting this lower bound yields $P(E\\cap F) \\ge P(E) + P(F) - 1$.<br/>For $P(E)=0.9$ and $P(F)=0.8$: $P(E\\cap F) \\ge 0.9 + 0.8 - 1 = 1.7 - 1 = 0.7$.</p>",
    "trap": "The inequality provides a guaranteed lower bound on the joint probability without assuming independence.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 11, PDF pp. 76–77."
  },
  {
    "id": "w.prob.2.ross.theo.12",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Probability that exactly one of two events occurs",
    "prompt": "<p>Prove that the probability that exactly one of the events $E$ or $F$ occurs is equal to $P(E) + P(F) - 2P(E\\cap F)$.</p>",
    "approach": "<p>Express the symmetric difference $E \\Delta F$ as a disjoint union and apply additivity.</p>",
    "solution": "<p>The event that exactly one of $E$ or $F$ occurs is the symmetric difference $(E \\cap F^c) \\cup (E^c \\cap F)$. Because $E \\cap F^c$ and $E^c \\cap F$ are mutually exclusive, $P(\\text{exactly one}) = P(E \\cap F^c) + P(E^c \\cap F)$. Using the decomposition $P(E\\cap F^c) = P(E) - P(E\\cap F)$ and $P(E^c \\cap F) = P(F) - P(E\\cap F)$, adding them yields $P(\\text{exactly one}) = [P(E) - P(E\\cap F)] + [P(F) - P(E\\cap F)] = P(E) + P(F) - 2P(E\\cap F)$. (Alternatively, subtract the overlap from the union: $P(E\\cup F) - P(E\\cap F) = [P(E) + P(F) - P(EF)] - P(EF) = P(E) + P(F) - 2P(EF)$).</p>",
    "trap": "The union $E\\cup F$ subtracts $P(EF)$ once; \"exactly one\" excludes the overlap completely, so subtracts $2P(EF)$.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 12, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.13",
    "course": "prob",
    "sec": "2.4",
    "marks": 3,
    "title": "Difference of events probability rule",
    "prompt": "<p>Prove that for any two events $E$ and $F$, $P(E\\cap F^c) = P(E) - P(E\\cap F)$.</p>",
    "approach": "<p>Decompose $E$ into the disjoint union of its part inside $F$ and its part outside $F$.</p>",
    "solution": "<p>Notice that $E = (E \\cap F) \\cup (E \\cap F^c)$. The two events $E\\cap F$ and $E\\cap F^c$ are mutually exclusive because $F \\cap F^c = \\varnothing$. By Axiom 3 (finite additivity), $P(E) = P(E\\cap F) + P(E\\cap F^c)$. Subtracting $P(E\\cap F)$ from both sides immediately gives $P(E\\cap F^c) = P(E) - P(E\\cap F)$.</p>",
    "trap": "This rule is valid whether or not $F$ is a subset of $E$.",
    "tests": [
      "c.prob.2.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 13, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.14",
    "course": "prob",
    "sec": "2.4",
    "marks": 5,
    "title": "Inductive proof of the inclusion-exclusion identity",
    "prompt": "<p>Prove Proposition 4.4 (the general inclusion-exclusion identity) by mathematical induction on the number of events $n$.</p>",
    "approach": "<p>Group the first $n-1$ events as a single event $A = \\cup_{i=1}^{n-1} E_i$ and apply the two-event formula followed by distributivity.</p>",
    "solution": "<p>Base case: For $n=2$, $P(E_1\\cup E_2) = P(E_1) + P(E_2) - P(E_1 E_2)$ holds by Proposition 4.3.<br/>Inductive hypothesis: Assume the identity holds for any union of $n-1$ events. Let $A = \\cup_{i=1}^{n-1} E_i$. Then $\\cup_{i=1}^n E_i = A \\cup E_n$. Applying the two-event formula gives $P(A\\cup E_n) = P(A) + P(E_n) - P(A \\cap E_n)$. By distributivity, $A \\cap E_n = (\\cup_{i=1}^{n-1} E_i) \\cap E_n = \\cup_{i=1}^{n-1} (E_i \\cap E_n)$, which is a union of $n-1$ events. Applying the induction hypothesis to both $P(A)$ and $P(A\\cap E_n)$ expands $P(A)$ into all combinations of ${E_1,\\ldots,E_{n-1}}$ and $P(A\\cap E_n)$ into all combinations that include $E_n$. The minus sign before $P(A\\cap E_n)$ correctly alternates signs for terms containing $E_n$. Combining like-degree intersection terms produces the full $n$-event inclusion-exclusion formula.</p>",
    "trap": "Ensure the induction step shows that the sign inversion on $P(A\\cap E_n)$ matches $(-1)^{r+1}$ for size-$r$ intersections containing $E_n$.",
    "tests": [
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 14, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.15",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "First principles derivation of the hypergeometric formula",
    "prompt": "<p>An urn contains $M$ white and $N$ black balls. If a random sample of size $r$ is chosen without replacement, derive the probability that it contains exactly $k$ white balls ($0\\le k\\le r$).</p>",
    "approach": "<p>Compute the ratio of favorable subsets of size $r$ to total subsets from $M+N$ objects.</p>",
    "solution": "<p>The total number of balls is $M+N$. An unordered sample of size $r$ can be chosen in $\\binom{M+N}{r}$ equally likely ways. For the sample to contain exactly $k$ white balls, it must also contain $r-k$ black balls. The $k$ white balls must be chosen from the $M$ available white balls in $\\binom{M}{k}$ ways, and the $r-k$ black balls from the $N$ black balls in $\\binom{N}{r-k}$ ways. By the basic principle of counting, the number of favorable samples is $\\binom{M}{k}\\binom{N}{r-k}$. The probability is $P = \\frac{\\binom{M}{k}\\binom{N}{r-k}}{\\binom{M+N}{r}}$, defined for $\\max(0, r-N) \\le k \\le \\min(M, r)$.</p>",
    "trap": "Terms where $k > M$ or $r-k > N$ evaluate to zero automatically.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 15, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.16",
    "course": "prob",
    "sec": "2.4",
    "marks": 5,
    "title": "Inductive generalization of Bonferroni inequality to n events",
    "prompt": "<p>Use mathematical induction to prove Bonferroni’s generalized inequality: $P(E_1 \\cap E_2 \\cap \\cdots \\cap E_n) \\ge \\sum_{i=1}^n P(E_i) - (n - 1)$.</p>",
    "approach": "<p>Apply the two-event Bonferroni inequality and the inductive hypothesis, or apply Boole’s inequality to complements.</p>",
    "solution": "<p>Method 1 (Induction): Base case $n=2$: $P(E_1 E_2) \\ge P(E_1) + P(E_2) - 1$ was proven in Theoretical Exercise 11. Assume the inequality holds for $n-1$ events: $P(E_1\\cdots E_{n-1}) \\ge \\sum_{i=1}^{n-1} P(E_i) - (n-2)$. Now group the first $n-1$ events as $A = E_1\\cdots E_{n-1}$. Then $P(E_1\\cdots E_n) = P(A E_n) \\ge P(A) + P(E_n) - 1$. Substituting the induction bound for $P(A)$ gives $P(E_1\\cdots E_n) \\ge [\\sum_{i=1}^{n-1} P(E_i) - (n-2)] + P(E_n) - 1 = \\sum_{i=1}^n P(E_i) - (n-1)$. By induction, the inequality holds for all $n\\ge 2$.<br/>Method 2 (Complements): By De Morgan's laws, $(\\cap E_i)^c = \\cup E_i^c$. By Boole's inequality, $P(\\cup E_i^c) \\le \\sum P(E_i^c) = \\sum [1 - P(E_i)] = n - \\sum P(E_i)$. Then $P(\\cap E_i) = 1 - P(\\cup E_i^c) \\ge 1 - [n - \\sum P(E_i)] = \\sum P(E_i) - (n-1)$.</p>",
    "trap": "The subtraction term is $n-1$, corresponding to bounding the union of $n$ complements by 1.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 16, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.17",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Combinatorial derivation of the derangement recurrence",
    "prompt": "<p>Let $A_N$ denote the number of derangements of $N$ objects (permutations with no fixed points). Prove the recurrence $A_N = (N-1)(A_{N-1} + A_{N-2})$ for $N\\ge 3$ with $A_1=0$ and $A_2=1$.</p>",
    "approach": "<p>Condition on whether the person who receives person 1's hat gives their own hat to person 1.</p>",
    "solution": "<p>Person 1 must select a hat other than their own, which can be done in $N-1$ ways. Suppose person 1 selects hat $j$ ($j \\ne 1$). We partition remaining assignments into two cases based on person $j$'s selection:<br/>Case 1: Person $j$ selects hat 1. Then persons 1 and $j$ have swapped hats, leaving the remaining $N-2$ people to select among their own $N-2$ hats with no one getting their own, which can be done in $A_{N-2}$ ways.<br/>Case 2: Person $j$ does NOT select hat 1. In this case, person $j$ is forbidden from taking hat 1 (just as person $i$ is forbidden from taking hat $i$). Person $j$ can be viewed as \"owning\" hat 1 for the purpose of the prohibition. This is isomorphic to a derangement of $N-1$ people, which can be done in $A_{N-1}$ ways.<br/>Because these two cases are mutually exclusive and person 1 has $N-1$ choices for $j$, $A_N = (N-1)(A_{N-1} + A_{N-2})$.</p>",
    "trap": "The boundary conditions are $A_1 = 0$ (impossible to derange 1 item) and $A_2 = 1$ (the single swap $(2, 1)$).",
    "tests": [
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 17, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.18",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Fibonacci recurrence for non-consecutive coin toss heads",
    "prompt": "<p>Let $f_n$ be the number of binary sequences of length $n$ with no consecutive heads (1s). (a) Argue that $f_n = f_{n-1} + f_{n-2}$ for $n\\ge 2$ with $f_0=1, f_1=2$. (b) For $n$ fair coin tosses, find the probability $P_n = f_n / 2^n$ and compute $P_{10}$.</p>",
    "approach": "<p>Condition on the first toss (or last toss) being heads or tails.</p>",
    "solution": "<p>(a) A valid sequence of length $n$ either starts with T (0) or H (1):<br/>- If it starts with T, the remaining $n-1$ tosses must have no consecutive heads: $f_{n-1}$ ways.<br/>- If it starts with H, the second toss must be T to prevent consecutive heads; the remaining $n-2$ tosses must have no consecutive heads: $f_{n-2}$ ways.<br/>Thus $f_n = f_{n-1} + f_{n-2}$. Base values: $f_0 = 1$ (empty string), $f_1 = 2$ (T, H), $f_2 = 3$ (TT, TH, HT).<br/>(b) With $2^n$ equiprobable sequences, $P_n = f_n / 2^n$. Compute values: $f_3=5, f_4=8, f_5=13, f_6=21, f_7=34, f_8=55, f_9=89, f_{10}=144$. Then $P_{10} = \\frac{144}{2^{10}} = \\frac{144}{1,024} = \\frac{9}{64} \\approx 0.140625$.</p>",
    "trap": "A head forces the next toss to be a tail, advancing the recurrence by two steps.",
    "tests": [
      "c.prob.1.2.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 18, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.19",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Negative hypergeometric waiting-time distribution",
    "prompt": "<p>An urn contains $n$ red and $m$ blue balls. Balls are drawn one at a time without replacement until a total of $r$ red balls have been withdrawn ($r\\le n$). Find the probability that a total of $k$ balls are withdrawn ($r\\le k\\le r+m$).</p>",
    "approach": "<p>Decompose into drawing $r-1$ red balls in the first $k-1$ draws, followed by a red ball on the $k$th draw.</p>",
    "solution": "<p>A total of $k$ balls are withdrawn if and only if: (1) among the first $k-1$ withdrawals, there are exactly $r-1$ red balls (and $(k-1)-(r-1) = k-r$ blue balls); and (2) the $k$th withdrawal is a red ball.<br/>The probability of event (1) is given by the hypergeometric distribution: $\\frac{\\binom{n}{r-1}\\binom{m}{k-r}}{\\binom{n+m}{k-1}}$.<br/>Given that $r-1$ red and $k-r$ blue balls were drawn in the first $k-1$ draws, there remain $n - (r-1)$ red balls among the $(n+m) - (k-1)$ balls currently in the urn. The probability that the $k$th ball is red is $\\frac{n - r + 1}{n + m - k + 1}$.<br/>Multiplying gives $P(k) = \\frac{\\binom{n}{r-1}\\binom{m}{k-r}}{\\binom{n+m}{k-1}} \\frac{n - r + 1}{n + m - k + 1} = \\frac{\\binom{k-1}{r-1}\\binom{n+m-k}{n-r}}{\\binom{n+m}{n}}$.</p>",
    "trap": "The $k$th ball must be fixed as red; do not treat all $k$ positions symmetrically.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 19, PDF p. 77."
  },
  {
    "id": "w.prob.2.ross.theo.21",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Distribution of total alternating runs of wins and losses",
    "prompt": "<p>In a random permutation of $n$ wins and $m$ losses, let $R$ denote the total number of runs (win runs plus loss runs). Prove that: (a) $P(R = 2k) = 2\\frac{\\binom{m-1}{k-1}\\binom{n-1}{k-1}}{\\binom{m+n}{n}}$; (b) $P(R = 2k+1) = \\frac{\\binom{m-1}{k-1}\\binom{n-1}{k} + \\binom{m-1}{k}\\binom{n-1}{k-1}}{\\binom{m+n}{n}}$.</p>",
    "approach": "<p>Condition on whether the sequence starts with a win or a loss, and partition wins into $k$ blocks and losses into $k$ blocks.</p>",
    "solution": "<p>(a) A total of $2k$ runs requires an even number of alternating blocks. The sequence must alternate between $k$ win runs and $k$ loss runs. There are two patterns: (1) W-L-W-L... (starts with win): $n$ wins split into $k$ positive blocks in $\\binom{n-1}{k-1}$ ways, and $m$ losses into $k$ positive blocks in $\\binom{m-1}{k-1}$ ways; (2) L-W-L-W... (starts with loss): similarly $\\binom{m-1}{k-1}\\binom{n-1}{k-1}$ ways. Summing both patterns gives $2\\binom{m-1}{k-1}\\binom{n-1}{k-1}$. Dividing by $\\binom{m+n}{n}$ yields $P(R=2k) = 2\\frac{\\binom{m-1}{k-1}\\binom{n-1}{k-1}}{\\binom{m+n}{n}}$.<br/>(b) For $2k+1$ runs (odd number of runs), the first and last run must be of the same type:<br/>- Starts and ends with win: $k+1$ win runs and $k$ loss runs, giving $\\binom{n-1}{k}\\binom{m-1}{k-1}$ ways.<br/>- Starts and ends with loss: $k+1$ loss runs and $k$ win runs, giving $\\binom{m-1}{k}\\binom{n-1}{k-1}$ ways.<br/>Summing gives $\\binom{m-1}{k-1}\\binom{n-1}{k} + \\binom{m-1}{k}\\binom{n-1}{k-1}$, giving $P(R=2k+1) = \\frac{\\binom{m-1}{k-1}\\binom{n-1}{k} + \\binom{m-1}{k}\\binom{n-1}{k-1}}{\\binom{m+n}{n}}$.</p>",
    "trap": "Even runs alternate equally ($k$ of each), giving the symmetry factor 2; odd runs have one more block of the starting type.",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 21, PDF pp. 77–78."
  },
  {
    "id": "w.prob.2.ross.selftest.1",
    "course": "prob",
    "sec": "2.2",
    "marks": 4,
    "title": "Cafeteria meal sample space and composite event operations",
    "prompt": "<p>A meal consists of an entree (chicken $C$ or roast beef $R$), a starch (pasta $P$, rice $Ri$, or potatoes $Po$), and a dessert (ice cream $I$, jello $J$, apple pie $A$, or peach $Pe$). (a) How many outcomes are in the sample space? (b) How many outcomes are in event $A$: ice cream chosen? (c) How many in event $B$: chicken chosen? (d) List all outcomes in $A\\cap B$. (e) How many in event $C$: rice chosen? (f) List all outcomes in $A\\cap B\\cap C$.</p>",
    "approach": "<p>Apply the basic principle of counting and set intersection on menu attributes.</p>",
    "solution": "<p>(a) Outcomes in $S$: $2\\times 3\\times 4 = 24$.<br/>(b) Event $A$ (ice cream): $2\\times 3\\times 1 = 6$ outcomes.<br/>(c) Event $B$ (chicken): $1\\times 3\\times 4 = 12$ outcomes.<br/>(d) $A\\cap B$ (chicken and ice cream): $1\\times 3\\times 1 = 3$ outcomes: $(C, P, I), (C, Ri, I), (C, Po, I)$.<br/>(e) Event $C$ (rice): $2\\times 1\\times 4 = 8$ outcomes.<br/>(f) $A\\cap B\\cap C$ (chicken, rice, and ice cream): 1 outcome: $(C, Ri, I)$.</p>",
    "trap": "Each meal is an ordered triple (entree, starch, dessert); intersections restrict coordinates.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 1(a–f), PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.2",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Clothing purchase inclusion-exclusion probabilities",
    "prompt": "<p>A department store shopper buys a suit ($S$) with prob 0.22, a shirt ($Sh$) with prob 0.30, and a tie ($T$) with prob 0.28. Pairwise probabilities: suit and shirt 0.11, suit and tie 0.14, shirt and tie 0.10. All three items: 0.06. Find the probability that the customer buys: (a) none of these items; (b) exactly one item.</p>",
    "approach": "<p>Compute the union via three-set inclusion-exclusion, then evaluate the exactly-one region formula.</p>",
    "solution": "<p>By inclusion-exclusion:<br/>$P(S\\cup Sh\\cup T) = (0.22 + 0.30 + 0.28) - (0.11 + 0.14 + 0.10) + 0.06 = 0.80 - 0.35 + 0.06 = 0.51$.<br/>(a) Buys none: $P(\\text{none}) = 1 - P(S\\cup Sh\\cup T) = 1 - 0.51 = 0.49$.<br/>(b) Buys exactly one: sum marginals, subtract twice each pairwise overlap, and add three times the triple overlap:<br/>$P(\\text{exactly one}) = \\sum P(A) - 2\\sum P(AB) + 3P(ABC) = 0.80 - 2(0.35) + 3(0.06) = 0.80 - 0.70 + 0.18 = 0.28$.</p>",
    "trap": "For exactly one, subtract pairwise overlaps twice and add the triple overlap 3 times.",
    "tests": [
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 2(a–b), PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.3",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Positional ace probability versus first-ace waiting time",
    "prompt": "<p>A standard 52-card deck is dealt out card by card. (a) What is the probability that the 14th card dealt is an ace? (b) What is the probability that the first ace occurs on the 14th card?</p>",
    "approach": "<p>For (a) use marginal position symmetry; for (b) require 13 non-aces followed by an ace.</p>",
    "solution": "(a) Each card is equally likely in position 14, so the ace chance is 4/52=1/13. (b) For the first ace on position 14, all first 13 must be nonaces, then the next must be an ace. Thus P=C(48,13)/C(52,13)·4/39≈.0311607720.",
    "trap": "Do not confuse unconditional position probability (1/13) with the waiting time for the first ace.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 3, PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.4",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Bivariate temperature bounds and extreme orderings",
    "prompt": "A means the Los Angeles temperature equals 70 degrees Fahrenheit, B means the New York temperature equals 70, and C means their maximum equals 70. Given P(A)=.3,P(B)=.4,P(C)=.2, find the chance their minimum equals 70.",
    "approach": "<p>Relate maximum to intersection and minimum to union of events.</p>",
    "solution": "Let D mean their minimum equals 70. At each outcome, the number of cities having temperature 70 equals the number of the maximum and minimum that equal 70: 1_A+1_B=1_C+1_D. If both temperatures are 70, both sides are 2; if one is 70 both sides are 1; otherwise both are 0. Taking expectations gives P(D)=P(A)+P(B)−P(C)=.5. Replacing equality by “at most” would change the stated events, though it coincidentally gives the same numerical answer here.",
    "trap": "Max bounded above means both are bounded; min bounded above means at least one is bounded.",
    "tests": [
      "c.prob.2.2.2",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 4, PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.5",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Diversity of denominations and suits in top four cards",
    "prompt": "<p>An ordinary 52-card deck is shuffled. What is the probability that the top four cards have: (a) four different denominations? (b) four different suits?</p>",
    "approach": "<p>Compute sequential probabilities without replacement for non-repeating attributes.</p>",
    "solution": "<p>(a) Different denominations: Card 1 can be any card. Card 2 must avoid card 1's rank (48 choices). Card 3 must avoid the first two ranks (44 choices). Card 4 must avoid the first three ranks (40 choices).<br/>$P = \\frac{52\\times 48\\times 44\\times 40}{52\\times 51\\times 50\\times 49} = \\frac{48\\times 44\\times 40}{51\\times 50\\times 49} = \\frac{16\\times 44\\times 4}{17\\times 5\\times 49} = \\frac{2,816}{4,165} \\approx 0.6761$.<br/>(b) Different suits: Card 1 can be any card (52). Card 2 must be from a different suit (39). Card 3 from a third suit (26). Card 4 from the fourth suit (13).<br/>$P = \\frac{52\\times 39\\times 26\\times 13}{52\\times 51\\times 50\\times 49} = \\frac{39\\times 26\\times 13}{51\\times 50\\times 49} = \\frac{13\\times 13\\times 13}{17\\times 25\\times 49} = \\frac{2,197}{20,825} \\approx 0.1055$.</p>",
    "trap": "In (b), there are only 4 suits, so all 4 suits must be represented exactly once.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 5(a–b), PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.6",
    "course": "prob",
    "sec": "2.5",
    "marks": 3,
    "title": "Matching color selection from two distinct urns",
    "prompt": "<p>Urn A contains 3 red and 3 black balls; Urn B contains 4 red and 6 black balls. One ball is chosen at random from each urn. What is the probability that both balls are of the same color?</p>",
    "approach": "<p>Sum the probabilities of the disjoint events that both balls are red or both are black.</p>",
    "solution": "<p>From Urn A, $P(R_A) = 3/6 = 1/2$ and $P(B_A) = 3/6 = 1/2$. From Urn B, $P(R_B) = 4/10 = 2/5$ and $P(B_B) = 6/10 = 3/5$. By independence of the two draws, $P(\\text{both red}) = (1/2)(2/5) = 2/10$ and $P(\\text{both black}) = (1/2)(3/5) = 3/10$. The probability of matching color is $P = P(\\text{both red}) + P(\\text{both black}) = \\frac{2}{10} + \\frac{3}{10} = \\frac{5}{10} = \\frac{1}{2} = 0.50$.</p>",
    "trap": "The selections from Urn A and Urn B are independent; multiply their respective probabilities.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 6, PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.7",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "State lottery winning tier combinations",
    "prompt": "<p>In a state lottery, a player chooses 8 numbers from 1 to 40, and the lottery commission draws 8 winning numbers at random without replacement. Assuming all $\\binom{40}{8} = 76,904,685$ combinations are equally likely, find the probability that a player has: (a) all 8 numbers correct; (b) exactly 7 correct; (c) at least 6 correct.</p>",
    "approach": "<p>Apply the hypergeometric distribution with population 40, 8 winning numbers, and sample size 8.</p>",
    "solution": "<p>Total combinations: $\\binom{40}{8} = 76,904,685$.<br/>(a) All 8 correct: $\\frac{\\binom{8}{8}\\binom{32}{0}}{\\binom{40}{8}} = \\frac{1}{76,904,685} \\approx 1.30\\times 10^{-8}$.<br/>(b) Exactly 7 correct: $\\frac{\\binom{8}{7}\\binom{32}{1}}{\\binom{40}{8}} = \\frac{8\\times 32}{76,904,685} = \\frac{256}{76,904,685} \\approx 3.33\\times 10^{-6}$.<br/>(c) At least 6 correct: add 6, 7, and 8 correct: $\\binom{8}{6}\\binom{32}{2} = 28\\times 496 = 13,888$. Total favorable = $13,888 + 256 + 1 = 14,145$. $P = \\frac{14,145}{76,904,685} \\approx 0.0001839$.</p>",
    "trap": "Non-winning numbers are chosen from the remaining $40 - 8 = 32$ numbers.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 7(a–c), PDF p. 78."
  },
  {
    "id": "w.prob.2.ross.selftest.8",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Class cohort committee quota probabilities",
    "prompt": "<p>A committee of 4 is selected randomly from 3 freshmen, 4 sophomores, 4 juniors, and 3 seniors (14 students total). Find the probability that the committee contains: (a) exactly 1 from each class; (b) 2 sophomores and 2 juniors; (c) only sophomores or juniors.</p>",
    "approach": "<p>Evaluate combinations over the total number of committees $\\binom{14}{4} = 1,001$.</p>",
    "solution": "<p>Total possible committees: $\\binom{14}{4} = \\frac{14\\times 13\\times 12\\times 11}{24} = 1,001$.<br/>(a) One from each class: choose 1 freshman (3), 1 sophomore (4), 1 junior (4), 1 senior (3): $3\\times 4\\times 4\\times 3 = 144$. $P = \\frac{144}{1,001} \\approx 0.14386$.<br/>(b) 2 sophomores and 2 juniors: $\\binom{4}{2}\\binom{4}{2} = 6\\times 6 = 36$. $P = \\frac{36}{1,001} \\approx 0.03596$.<br/>(c) Only sophomores or juniors: chosen from the $4+4=8$ sophomores and juniors: $\\binom{8}{4} = 70$. $P = \\frac{70}{1,001} = \\frac{10}{143} \\approx 0.06993$.</p>",
    "trap": "In (c), the pool is the union of sophomores and juniors (8 people).",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 8(a–c), PDF pp. 78–79."
  },
  {
    "id": "w.prob.2.ross.selftest.9",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Set cardinality inclusion-exclusion formulation",
    "prompt": "<p>For a finite set $A$, let $N(A)$ denote its cardinality. Prove: (a) $N(A\\cup B) = N(A) + N(B) - N(A\\cap B)$; (b) the general inclusion-exclusion formula for $N(\\cup_{i=1}^n A_i)$.</p>",
    "approach": "<p>Assign equal probability $1/|S|$ to each element of a universal set $S$, or partition elements by the number of sets containing them.</p>",
    "solution": "<p>(a) Let $S$ be a finite set containing $A$ and $B$, and assign uniform probability $P(E) = N(E)/N(S)$ to all subsets $E\\subseteq S$. By Proposition 4.3, $P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$. Multiplying both sides by $N(S)$ gives $N(A\\cup B) = N(A) + N(B) - N(A\\cap B)$.<br/>(b) Similarly, applying Proposition 4.4 to the uniform probability measure on $S$ and multiplying by $N(S)$ yields $N(\\cup_{i=1}^n A_i) = \\sum_i N(A_i) - \\sum_{i<j} N(A_i A_j) + \\cdots + (-1)^{n+1} N(A_1 \\cdots A_n)$. Alternatively, each element belonging to exactly $k\\ge 1$ of the sets $A_i$ contributes $\\sum_{j=1}^k (-1)^{j+1}\\binom{k}{j} = 1 - (1-1)^k = 1$ to the right side, so every element in the union is counted exactly once.</p>",
    "trap": "The counting principle for finite sets is isomorphic to the probability inclusion-exclusion theorem.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 9(a–b), PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.10",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Horse race placing overlap counting",
    "prompt": "<p>Six horses numbered 1 to 6 run a race ($6! = 720$ finish orders). Let $A$ be the event horse 1 finishes in the top 3, and $B$ the event horse 2 finishes in second place. How many outcomes are in $A\\cup B$?</p>",
    "approach": "<p>Compute $|A|$, $|B|$, and $|A\\cap B|$, then apply $N(A\\cup B) = N(A) + N(B) - N(A\\cap B)$.</p>",
    "solution": "<p>Total outcomes: $6! = 720$.<br/>- $N(A)$: Horse 1 can finish in rank 1, 2, or 3 (3 positions), and the other 5 horses can be arranged in $5! = 120$ ways: $N(A) = 3\\times 120 = 360$.<br/>- $N(B)$: Horse 2 is in rank 2 (1 position), and the other 5 horses are arranged in $5! = 120$ ways: $N(B) = 120$.<br/>- $N(A\\cap B)$: Horse 2 is second, and horse 1 is in the top 3. Since rank 2 is taken by horse 2, horse 1 must be in rank 1 or rank 3 (2 choices). The remaining 4 horses fill the other 4 positions in $4! = 24$ ways: $N(A\\cap B) = 2\\times 24 = 48$.<br/>By inclusion-exclusion: $N(A\\cup B) = N(A) + N(B) - N(A\\cap B) = 360 + 120 - 48 = 432$.</p>",
    "trap": "In $A\\cap B$, horse 1 cannot be in second place since horse 2 occupies second place.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 10, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.11",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Four-suit coverage in a five-card hand",
    "prompt": "<p>A 5-card hand is dealt from a well-shuffled 52-card deck. What is the probability that the hand contains at least one card from each of the four suits?</p>",
    "approach": "<p>Recognize that a 5-card hand covering all 4 suits must have exactly 2 cards of one suit and 1 card of each of the other three suits.</p>",
    "solution": "<p>Total hands: $\\binom{52}{5} = 2,598,960$.<br/>Because there are only 5 cards and 4 suits, by the pigeonhole principle, a hand containing all 4 suits must contain exactly 2 cards of one suit and 1 card from each of the other 3 suits (suit partition 2, 1, 1, 1).<br/>To count such hands:<br/>1. Choose which of the 4 suits has 2 cards: $\\binom{4}{1} = 4$ choices.<br/>2. Choose 2 cards from that suit: $\\binom{13}{2} = 78$ choices.<br/>3. Choose 1 card from each of the remaining 3 suits: $\\binom{13}{1}^3 = 13^3 = 2,197$ choices.<br/>By the product rule, the number of favorable hands is $4\\times 78\\times 2,197 = 312\\times 2,197 = 685,464$. The probability is $P = \\frac{685,464}{2,598,960} = \\frac{2,197}{8,330} \\approx 0.263749$.</p>",
    "trap": "Only one suit can have 2 cards; do not over-count by picking the two-card suit multiple times.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 11, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.12",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Backcourt and frontcourt mixed roommate pairings",
    "prompt": "<p>A basketball squad consists of 6 frontcourt and 4 backcourt players (10 players total). If the players are randomly paired into 5 two-person roommate rooms, what is the probability that exactly two rooms contain a mixed pair (one frontcourt and one backcourt player)?</p>",
    "approach": "<p>Count pairings into 5 unordered pairs and evaluate the favorable cross-group pairings.</p>",
    "solution": "<p>Total ways to divide 10 players into 5 unordered pairs: $\\frac{10!}{2^5\\,5!} = \\frac{3,628,800}{32\\times 120} = 945$.<br/>To have exactly two mixed pairs:<br/>1. Choose 2 frontcourt players to be in mixed rooms: $\\binom{6}{2} = 15$ ways.<br/>2. Choose 2 backcourt players to be in mixed rooms: $\\binom{4}{2} = 6$ ways.<br/>3. Pair the 2 chosen frontcourt players with the 2 chosen backcourt players: $2! = 2$ ways.<br/>4. The remaining $6 - 2 = 4$ frontcourt players must be paired among themselves into 2 pure rooms: $\\frac{4!}{2^2\\,2!} = 3$ ways.<br/>5. The remaining $4 - 2 = 2$ backcourt players must be paired together into 1 pure room: 1 way.<br/>The total number of favorable pairings is $15\\times 6\\times 2\\times 3\\times 1 = 540$. The probability is $P = \\frac{540}{945} = \\frac{4}{7} \\approx 0.5714$.</p>",
    "trap": "Do not forget to divide the pure frontcourt pairing by $2!$ since the two frontcourt rooms are unordered.",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 12, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.13",
    "course": "prob",
    "sec": "2.5",
    "marks": 3,
    "title": "Random character match between two words",
    "prompt": "<p>A letter is chosen at random from RESERVE and another is chosen at random from VERTICAL. What is the probability that the two chosen letters are the same?</p>",
    "approach": "<p>Identify the letters common to both words and sum their joint independent probabilities.</p>",
    "solution": "<p>RESERVE has 7 letters: R: 2, E: 3, S: 1, V: 1.<br/>VERTICAL has 8 letters: V: 1, E: 1, R: 1, T: 1, I: 1, C: 1, A: 1, L: 1.<br/>The letters appearing in both words are R, E, and V. The selections from the two words are independent:<br/>- Same letter is R: $P(R_1)P(R_2) = (2/7)(1/8) = 2/56$.<br/>- Same letter is E: $P(E_1)P(E_2) = (3/7)(1/8) = 3/56$.<br/>- Same letter is V: $P(V_1)P(V_2) = (1/7)(1/8) = 1/56$.<br/>Summing these mutually exclusive matching outcomes: $P(\\text{match}) = \\frac{2 + 3 + 1}{56} = \\frac{6}{56} = \\frac{3}{28} \\approx 0.10714$.</p>",
    "trap": "Only the shared alphabet letters {R, E, V} contribute positive probability to a match.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 13, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.14",
    "course": "prob",
    "sec": "2.6",
    "marks": 4,
    "title": "Proof of countable Boole inequality from axioms",
    "prompt": "<p>Prove Boole’s inequality for a countable sequence of events: $P(\\cup_{i=1}^\\infty A_i) \\le \\sum_{i=1}^\\infty P(A_i)$.</p>",
    "approach": "<p>Disjointize the sequence and apply countable additivity with monotonicity.</p>",
    "solution": "<p>Define disjoint events $F_1 = A_1$, and for $n \\ge 2$, $F_n = A_n \\setminus (\\cup_{i=1}^{n-1} A_i) = A_n \\cap A_1^c \\cap \\cdots \\cap A_{n-1}^c$. By construction, the events $F_i$ are pairwise disjoint and $\\cup_{i=1}^\\infty F_i = \\cup_{i=1}^\\infty A_i$. By Axiom 3 (countable additivity), $P(\\cup_{i=1}^\\infty A_i) = P(\\cup_{i=1}^\\infty F_i) = \\sum_{i=1}^\\infty P(F_i)$. Furthermore, because $F_i \\subseteq A_i$ for every $i$, monotonicity of probability (Proposition 4.2) implies $P(F_i) \\le P(A_i)$ for all $i$. Substituting this inequality term by term gives $\\sum_{i=1}^\\infty P(F_i) \\le \\sum_{i=1}^\\infty P(A_i)$, which proves $P(\\cup_{i=1}^\\infty A_i) \\le \\sum_{i=1}^\\infty P(A_i)$.</p>",
    "trap": "Countable additivity applies to disjoint increments $F_i$, not to overlapping events $A_i$.",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 14, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.15",
    "course": "prob",
    "sec": "2.6",
    "marks": 4,
    "title": "Countable intersection of probability one events",
    "prompt": "<p>Show that if $P(A_i) = 1$ for all $i \\ge 1$, then $P(\\cap_{i=1}^\\infty A_i) = 1$.</p>",
    "approach": "<p>Apply De Morgan's laws and Boole's inequality to the complement event.</p>",
    "solution": "<p>If $P(A_i) = 1$, then by the complement rule, $P(A_i^c) = 1 - P(A_i) = 0$ for each $i\\ge 1$. By De Morgan’s laws, the complement of the intersection is the union of the complements: $(\\cap_{i=1}^\\infty A_i)^c = \\cup_{i=1}^\\infty A_i^c$. Applying Boole's inequality gives $P((\\cap_{i=1}^\\infty A_i)^c) = P(\\cup_{i=1}^\\infty A_i^c) \\le \\sum_{i=1}^\\infty P(A_i^c) = \\sum_{i=1}^\\infty 0 = 0$. Since probabilities are nonnegative, $P((\\cap_{i=1}^\\infty A_i)^c) = 0$. Therefore, $P(\\cap_{i=1}^\\infty A_i) = 1 - P((\\cap_{i=1}^\\infty A_i)^c) = 1 - 0 = 1$.</p>",
    "trap": "The countable sum of zeros is zero; this fails for uncountably infinite intersections.",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 15, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.16",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Stirling numbers of the second kind recurrence",
    "prompt": "<p>Let $T_k(n)$ denote the number of partitions of $\\{1, 2, \\ldots, n\\}$ into $k$ nonempty subsets ($1\\le k\\le n$). Argue combinatorially that $T_k(n) = k T_k(n-1) + T_{k-1}(n-1)$.</p>",
    "approach": "<p>Condition on whether element 1 forms a singleton block by itself.</p>",
    "solution": "<p>Consider partitioning $\\{1, 2, \\ldots, n\\}$ into $k$ nonempty blocks. Focus on a specific element, say element 1. Every partition falls into one of two mutually exclusive cases:<br/>Case 1: $\\{1\\}$ is a singleton block. Then the other $n-1$ elements must be partitioned into the remaining $k-1$ nonempty blocks, which can be done in $T_{k-1}(n-1)$ ways.<br/>Case 2: Element 1 belongs to a block containing other elements. In this case, removing 1 leaves a partition of the other $n-1$ elements into $k$ nonempty blocks ($T_k(n-1)$ ways). Element 1 can then be placed into any of these $k$ already-formed blocks in $k$ ways, producing $k T_k(n-1)$ partitions.<br/>Because these two cases are exhaustive and mutually exclusive, $T_k(n) = k T_k(n-1) + T_{k-1}(n-1)$.</p>",
    "trap": "In Case 2, element 1 joins an existing block, so the block count remains $k$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 16, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.17",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Three-color presence probability in five-ball draw",
    "prompt": "<p>Five balls are randomly chosen without replacement from an urn containing 5 red, 6 white, and 7 blue balls (18 balls total). Find the probability that at least one ball of each color is chosen.</p>",
    "approach": "<p>Use inclusion-exclusion on the complement events that specific colors are missing.</p>",
    "solution": "<p>Total samples: $\\binom{18}{5} = \\frac{18\\times 17\\times 16\\times 15\\times 14}{120} = 8,568$.<br/>Let $R^c, W^c, B^c$ be the events that no red, no white, or no blue balls are drawn:<br/>- $N(R^c)$: balls chosen from $18-5=13$ non-red balls: $\\binom{13}{5} = 1,287$.<br/>- $N(W^c)$: balls chosen from $18-6=12$ non-white balls: $\\binom{12}{5} = 792$.<br/>- $N(B^c)$: balls chosen from $18-7=11$ non-blue balls: $\\binom{11}{5} = 462$.<br/>Pairwise missing colors:<br/>- $N(R^c \\cap W^c)$: all balls blue (7 blue balls): $\\binom{7}{5} = 21$.<br/>- $N(R^c \\cap B^c)$: all balls white (6 white balls): $\\binom{6}{5} = 6$.<br/>- $N(W^c \\cap B^c)$: all balls red (5 red balls): $\\binom{5}{5} = 1$.<br/>- $N(R^c \\cap W^c \\cap B^c) = 0$ (cannot miss all three colors).<br/>By inclusion-exclusion, the number of samples missing at least one color is $(1,287 + 792 + 462) - (21 + 6 + 1) = 2,541 - 28 = 2,513$. Thus, the number containing at least one of each color is $8,568 - 2,513 = 6,055$. The probability is $P = \\frac{6,055}{8,568} \\approx 0.706699$.</p>",
    "trap": "Subtract pairwise intersections of missing colors to avoid double-counting pure single-color hands.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 17, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.18",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Arrangement configurations of multicolored balls",
    "prompt": "Randomly arrange four red, eight blue, five green balls. Find chances of (a) first five blue; (b) none of first five blue; (c) final three of different colors; (d) all four red consecutive.",
    "approach": "<p>Compute sequential draw probabilities for (a)–(c) and use block bundling for (d).</p>",
    "solution": "(a) C(8,5)/C(17,5)=2/221≈.00904977. (b) C(9,5)/C(17,5)=9/442≈.02036199. (c) A three-position sample has all colors in 4·8·5 choices out of C(17,3), so the probability is 4·8·5/C(17,3)=4/17. (d) The four red positions are a uniform four-subset of 17 positions; 14 of those subsets are consecutive blocks. Hence P=14/C(17,4)=1/170.",
    "trap": "In (c), multiply by $3! = 6$ for the possible color sequences (RBG, RGB, BRG, BGR, GRB, GBR).",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 18(a–d), PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.19",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "Suit pile partition distribution of ten cards",
    "prompt": "<p>Ten cards are chosen randomly from a 52-card deck and sorted by suit into 4 piles. Find the probability that: (a) the piles have sizes 4, 3, 2, and 1; (b) two piles have 3 cards, one has 4 cards, and one has 0 cards.</p>",
    "approach": "<p>Assign suits to pile sizes and multiply by combination choices from each 13-card suit.</p>",
    "solution": "There are C(52,10) equally likely hands. (a) Assign the four suits to occupancies 4,3,2,1 in 4!=24 ways, and choose the cards in C(13,4)C(13,3)C(13,2)C(13,1) ways. Thus P=24C(13,4)C(13,3)C(13,2)13/C(52,10)≈.3145677005. (b) Choose the suit with four cards in four ways and the absent suit in three ways. The probability is 12C(13,4)C(13,3)²/C(52,10)≈.04436316.",
    "trap": "In (b), the two piles of size 3 have the same size, so there are $\\frac{4!}{2!\\,1!\\,1!} = 12$ suit assignments, not 24.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 19(a–b), PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.selftest.20",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Exhaustion race between two color populations",
    "prompt": "<p>Balls are randomly drawn one at a time without replacement from an urn containing 20 red and 10 blue balls until the urn is empty. What is the probability that all 20 red balls are removed before all 10 blue balls have been removed?</p>",
    "approach": "<p>Focus on the color of the very last ball drawn from the urn.</p>",
    "solution": "<p>All red balls are removed before all blue balls if and only if at least one blue ball remains after the last red ball is drawn. This means that the very last ball remaining in the urn (the 30th ball drawn) must be a BLUE ball. By symmetry, every one of the 30 balls in the urn is equally likely to be the last ball drawn. Because there are 10 blue balls and 20 red balls, the probability that the last ball drawn is blue is $\\frac{10}{20 + 10} = \\frac{10}{30} = \\frac{1}{3}$.</p>",
    "trap": "Do not attempt complicated sequential draw casework; looking backwards at the final ball gives an immediate one-line solution.",
    "tests": [
      "c.prob.2.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 2, Self-Test Problem 20, PDF p. 79."
  },
  {
    "id": "w.prob.2.ross.example.5b",
    "course": "prob",
    "sec": "2.5",
    "marks": 5,
    "title": "One white and two black balls",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Example 5b.</b> Three balls are drawn without replacement from a bowl containing six white and five black balls. Find the probability that exactly one ball is white.</p>",
    "tests": [
      "c.prob.2.5.1",
      "c.prob.1.4.1"
    ],
    "approach": "<p>Use an unordered hand sample space of equally likely 3-subsets, or count ordered draws consistently.</p>",
    "solution": "<p>Among $\\binom{11}{3}$ equally likely subsets, favorable subsets choose one white and two black: $\\binom61\\binom52$. Therefore $P=6\\cdot10/165=4/11$.</p>",
    "trap": "Do not mix ordered favorable counts with an unordered total. The same model must be used in numerator and denominator.",
    "provenance": "Ross, 10e, Chapter 2, Example 5b; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.example.7a",
    "course": "prob",
    "sec": "2.7",
    "marks": 4,
    "title": "Coherence of personal probabilities",
    "prompt": "<p><b>Adapted from Ross, §2.7, Example 7a.</b> A bettor assigns winning probabilities .20, .20, and .15 to horses 1, 2, and 3, respectively; horses 4–6 each receive .10. At even money, compare a wager that the winner is among horses 1–3 with one that the winner is among horses 1, 4, 5, and 6.</p>",
    "tests": [
      "c.prob.2.7.1",
      "c.prob.2.4.2"
    ],
    "approach": "<p>The horse-winner events are mutually exclusive. Add the bettor’s personal probabilities for the horses included in each wager.</p>",
    "solution": "<p>The first wager has assigned success probability $.20+.20+.15=.55$. The second has $.20+.10+.10+.10=.50$. Under the bettor’s own probability model, the first wager is more attractive at equal payoff.</p>",
    "trap": "Do not regard personal probabilities as unconstrained opinions. These mutually exclusive winner events should have probabilities summing to 1.",
    "provenance": "Ross, 10e, Chapter 2, Example 7a; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.problem.3",
    "course": "prob",
    "sec": "2.2",
    "marks": 5,
    "title": "Events for two dice",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 3.</b> Two distinguishable dice are thrown. Let E be the event that the sum is odd, F the event that at least one die shows 1, and G the event that the sum is 5. Describe E, $E\\cap F$, $E\\cup F$, $F\\cap G$, and $E\\cap F^c$ as sets of ordered pairs.</p> Also describe E∩F∩G.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "approach": "<p>Use the ordered-pair sample space $S=\\{(i,j):1\\le i,j\\le6\\}$. Translate each event into a condition on i and j, then intersect or union conditions.</p>",
    "solution": "<p>$E=\\{(i,j):i+j$ is odd$\\}$. $E\\cap F=\\{(1,2),(1,4),(1,6),(2,1),(4,1),(6,1)\\}$. $E\\cup F$ consists of all pairs with odd sum or at least one coordinate 1. $F\\cap G=\\{(1,4),(4,1)\\}$, since those are sum-5 outcomes containing a 1. $E\\cap F^c$ consists of odd-sum pairs with neither coordinate 1: $(2,3),(2,5),(3,2),(3,4),(3,6),(4,3),(4,5),(5,2),(5,4),(5,6),(6,3),(6,5)$.</p> Since a sum of 5 is odd, G is contained in E. Thus E∩F∩G=F∩G={(1,4),(4,1)}.",
    "trap": "The dice are distinguishable, so order matters. “At least one die is 1” includes both (1,j) and (j,1), but the pair (1,1) has even sum.",
    "provenance": "Ross, 10e, Chapter 2, Problem 3; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.problem.5",
    "course": "prob",
    "sec": "2.2",
    "marks": 5,
    "title": "Boolean event expression for a system",
    "prompt": "Record working/failure states of five components as (x_1,…,x_5), each 0 or 1. The system works if 1 and 2 work, or 3 and 4 work, or 1,3,5 work. (a) Count all outcomes. (b) List the working event W. (c) Count event A that 4 and 5 fail. (d) List A∩W.",
    "tests": [
      "c.prob.2.2.1",
      "c.prob.2.2.2"
    ],
    "approach": "<p>Translate each sufficient working condition into coordinate equalities, take their union, then complement the union with De Morgan’s law.</p>",
    "solution": "(a) There are 2⁵=32 outcomes. (b) W consists of (0,0,1,1,0), (0,0,1,1,1), (0,1,1,1,0), (0,1,1,1,1), (1,0,1,0,1), (1,0,1,1,0), (1,0,1,1,1), (1,1,0,0,0), (1,1,0,0,1), (1,1,0,1,0), (1,1,0,1,1), (1,1,1,0,0), (1,1,1,0,1), (1,1,1,1,0), (1,1,1,1,1): 15 outcomes. Each listed tuple satisfies at least one of the three paths. (c) Fix x_4=x_5=0; the other three entries are free, so |A|=2³=8. (d) With 4 and 5 failed, only the 1–2 path can work. Hence A∩W={(1,1,0,0,0),(1,1,1,0,0)}.",
    "trap": "“Or” is inclusive: more than one operating condition can hold at once. The complement requires all three sufficient conditions to fail.",
    "provenance": "Ross, 10e, Chapter 2, Problem 5; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.problem.8",
    "course": "prob",
    "sec": "2.4",
    "marks": 4,
    "title": "Exclusive events and probabilities",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 8.</b> Events A and B are mutually exclusive with $P(A)=0.3$ and $P(B)=0.5$. Find (a) $P(A\\cup B)$, (b) $P(A\\cap B^c)$, and (c) $P(A\\cap B)$.</p>",
    "tests": [
      "c.prob.2.4.1",
      "c.prob.2.4.2"
    ],
    "approach": "<p>Use disjointness to simplify the intersection and union. Since A and B are disjoint, A is contained in $B^c$.</p>",
    "solution": "<p>(a) $P(A\\cup B)=P(A)+P(B)=0.8$. (b) Because A and B cannot occur together, $A\\subseteq B^c$, so $P(A\\cap B^c)=P(A)=0.3$. (c) $A\\cap B=\\varnothing$, hence its probability is 0.</p>",
    "trap": "Mutually exclusive means the intersection is empty; it does not mean the union has probability zero.",
    "provenance": "Ross, 10e, Chapter 2, Problem 8; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.problem.12",
    "course": "prob",
    "sec": "2.4",
    "marks": 5,
    "title": "Three-set inclusion–exclusion",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 12(a–c).</b> Among 100 students, 28 take Spanish, 26 French, 16 German; 12 take Spanish and French, 4 Spanish and German, 6 French and German, and 2 take all three. Find the probability a uniformly selected student takes no language class and the probability of taking exactly one language class.</p><p>(c) Two distinct students are chosen uniformly without replacement. What is the chance that at least one takes a language class?</p>",
    "tests": [
      "c.prob.2.4.2",
      "c.prob.2.5.1"
    ],
    "approach": "<p>Use inclusion–exclusion to count the union. For exactly one class, subtract each pairwise overlap twice from the singleton counts and add the triple overlap three times.</p>",
    "solution": "<p>The union count is $28+26+16-12-4-6+2=50$, so the probability of none is $1-50/100=0.5$. Exactly one count is $(28+26+16)-2(12+4+6)+3(2)=70-44+6=32$, giving probability 0.32.</p><p>(c) There are 50 students outside all language classes. Count pairs: $P(\\text{at least one})=1-\\binom{50}{2}/\\binom{100}{2}=1-1225/4950=149/198\\approx0.7525$.</p>",
    "trap": "The pairwise counts include the triple intersection. In the exactly-one expression, the triple members must be restored three times after being removed through the pair terms.",
    "provenance": "Ross, 10e, Chapter 2, Problem 12; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.problem.23",
    "course": "prob",
    "sec": "2.5",
    "marks": 4,
    "title": "Comparing two fair dice",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Problem 23.</b> Two fair distinguishable dice are rolled. What is the probability that the second die shows a larger number than the first?</p>",
    "tests": [
      "c.prob.2.5.1"
    ],
    "approach": "<p>There are 36 equally likely ordered pairs. Count favorable pairs by conditioning on the first die, or use symmetry between the dice and remove ties.</p>",
    "solution": "<p>By symmetry, the probabilities of second die larger and first die larger are equal. A tie has probability $6/36=1/6$. Thus each strict-order event has probability $(1-1/6)/2=5/12$.</p>",
    "trap": "There are six tie outcomes; the two strict inequalities split the remaining outcomes equally.",
    "provenance": "Ross, 10e, Chapter 2, Problem 23; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.theoretical.9",
    "course": "prob",
    "sec": "2.3",
    "marks": 5,
    "title": "Empirical frequency as a probability",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Theoretical Exercise 9.</b> An experiment is performed N times. For each event E define $f(E)$ as the fraction of the N recorded outcomes that lie in E. Show that f satisfies nonnegativity, normalization, and additivity over pairwise disjoint events.</p>",
    "tests": [
      "c.prob.2.3.1"
    ],
    "approach": "<p>Let the recorded outcomes be $\\omega_1,\\ldots,\\omega_N$. Count indices i for which $\\omega_i\\in E$; disjoint event memberships partition indices.</p>",
    "solution": "<p>By definition $f(E)=N^{-1}\\#\\{i:\\omega_i\\in E\\}$, so $0\\le f(E)\\le1$. Every recorded outcome belongs to S, hence $f(S)=N/N=1$. If $E_j$ are pairwise disjoint, each index whose outcome lies in their union belongs to exactly one of the index sets, so $\\#\\{i:\\omega_i\\in\\cup_jE_j\\}=\\sum_j\\#\\{i:\\omega_i\\in E_j\\}$. Dividing by N proves additivity. Only finitely many terms can be nonzero because there are N recorded outcomes, so the same argument also gives countable additivity.</p>",
    "trap": "Axiom 3 is about disjoint events. Overlapping events would count some recorded outcomes more than once.",
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 9; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.2.ross.theoretical.20",
    "course": "prob",
    "sec": "2.6",
    "marks": 5,
    "title": "Why an infinite countable space cannot be uniform",
    "prompt": "<p><b>Adapted from Ross, Chapter 2, Theoretical Exercise 20.</b> Show that a countably infinite sample space cannot assign the same probability to every point. Can every point nevertheless have positive probability?</p>",
    "tests": [
      "c.prob.2.3.1",
      "c.prob.2.6.2"
    ],
    "approach": "<p>Let q be the common point probability. Countable additivity requires the infinite sum of these masses to equal one.</p>",
    "solution": "<p>If q=0, the sum over countably many points is 0, contradicting $P(S)=1$. If q>0, the partial sums $Nq$ exceed 1 for sufficiently large N, also impossible. Thus no common q works. Yes, every point can have positive probability when masses are unequal; for example, on positive integers assign $P(\\{k\\})=2^{-k}$, whose sum is 1.</p>",
    "trap": "A countably infinite sample space may have all points positive, just not equally likely.",
    "provenance": "Ross, 10e, Chapter 2, Theoretical Exercise 20; independently rewritten full item and solution."
  }
]
);
