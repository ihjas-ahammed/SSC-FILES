# Module 2: Axioms of Probability (13 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH02 = {
    'c.prob.2.1.1': (
        r"""<p><b>Statement:</b> A probabilistic model for a random experiment is specified by the probability triple $(\Omega, \mathcal{F}, P)$, where $\Omega$ (or $S$) is the sample space of elementary outcomes $\omega$, $\mathcal{F}$ is a $\sigma$-algebra of events (subsets of $\Omega$), and $P: \mathcal{F} \to [0, 1]$ is a probability measure assigning consistent likelihoods to events.</p>"""
        r"""<p><b>Mathematical terms:</b> $\Omega$ (or $S$) is the non-empty set of all possible outcomes $\omega$; an elementary outcome $\omega \in \Omega$ is an indivisible single result of the trial; an event $E \in \mathcal{F}$ is a subset of $\Omega$; $\mathcal{F}$ is the event space containing $\varnothing$, closed under complements and countable unions; $P$ is the probability measure.</p>"""
        r"""<p><b>Reason:</b> A well-defined experiment requires an unambiguous specification of what constitutes a complete result before probabilities can be evaluated. Different outcome descriptions (e.g., ordered pairs vs. uncoordinated totals) define different sample spaces $\Omega$, but every valid mathematical description must assign identical probabilities to identical physical events to preserve consistency.</p>"""
    ),
    'c.prob.2.2.1': (
        r"""<p><b>Statement:</b> The sample space $S$ is the universal set of all mutually exclusive and collectively exhaustive outcomes $\omega$ of a random experiment. An event $E$ is a subset $E \subseteq S$, said to occur if and only if the realized outcome $\omega$ satisfies $\omega \in E$. In particular, the certain event $S$ always occurs, while the impossible event $\varnothing$ (empty set) never occurs.</p>"""
        r"""<p><b>Mathematical terms:</b> $S$ is the universal set of outcomes; $\omega \in S$ is an elementary outcome; $E \subseteq S$ is an event; $\in$ denotes set membership; $\varnothing$ denotes the null event with no outcomes ($|\varnothing| = 0$).</p>"""
        r"""<p><b>Reason:</b> Formulating probability in set-theoretic terms allows logical operations (AND, OR, NOT) on experimental propositions to correspond directly to Boolean set operations (intersection, union, complement) on subsets of $S$. Because any trial must produce an outcome in $S$, $S$ always occurs; because no trial can produce an element in $\varnothing$, $\varnothing$ can never occur.</p>"""
    ),
    'c.prob.2.2.2': (
        r"""<p><b>Statement:</b> For events $E, F \subseteq S$, Boolean set operations define compound events: union $E \cup F$ (at least one occurs), intersection $E \cap F$ (both occur), complement $E^c = S \setminus E$ ($E$ does not occur), and difference $E \setminus F = E \cap F^c$ ($E$ occurs but not $F$). De Morgan's Laws hold for arbitrary index sets $I$:"""
        r"""$$\left(\bigcup_{i \in I} E_i\right)^c = \bigcap_{i \in I} E_i^c, \qquad \left(\bigcap_{i \in I} E_i\right)^c = \bigcup_{i \in I} E_i^c$$</p>"""
        r"""<p><b>Mathematical terms:</b> $\cup$ denotes set union; $\cap$ denotes set intersection; $E^c$ denotes complement relative to $S$; $\setminus$ denotes set difference; mutually exclusive means $E \cap F = \varnothing$; subset relation $E \subseteq F$ means occurrence of $E$ implies occurrence of $F$.</p>"""
        r"""<p><b>Reason:</b> De Morgan's first law states that the event "not (at least one $E_i$ occurs)" is logically equivalent to "every $E_i$ fails to occur", translating a negated union into an intersection of complements. The second law states that "not (all $E_i$ occur)" is equivalent to "at least one $E_i$ fails to occur", translating a negated intersection into a union of complements.</p>"""
    ),
    'c.prob.2.3.1': (
        r"""<p><b>Statement:</b> Given a sample space $S$ and an event space $\mathcal{F}$ of subsets of $S$, a probability function $P: \mathcal{F} \to \mathbb{R}$ satisfies Kolmogorov's three axioms:"""
        r"""<br>(1) <b>Non-negativity:</b> For every event $E \in \mathcal{F}$, $0 \le P(E) \le 1$."""
        r"""<br>(2) <b>Normalization:</b> $P(S) = 1$."""
        r"""<br>(3) <b>Countable Additivity:</b> For every sequence of pairwise disjoint events $E_1, E_2, \ldots$ (where $E_i \cap E_j = \varnothing$ for all $i \ne j$):"""
        r"""$$P\left(\bigcup_{i=1}^\infty E_i\right) = \sum_{i=1}^\infty P(E_i)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $S$ is the sample space; $\mathcal{F}$ is the $\sigma$-algebra of events; $P(E)$ is the probability measure of event $E$; $E_i \cap E_j = \varnothing$ indicates pairwise disjoint (mutually exclusive) events; $\bigcup_{i=1}^\infty E_i$ is the countable union; $\sum_{i=1}^\infty$ is the infinite series of probabilities.</p>"""
        r"""<p><b>Reason:</b> Axiom 1 restricts probabilities to $[0, 1]$ because negative likelihood and likelihood exceeding certainty are physically and logically undefined. Axiom 2 establishes total normalization, as the experiment is certain to produce some outcome in $S$. Axiom 3 guarantees that for non-overlapping events, no outcomes are shared or double-counted, allowing the total probability of compound alternatives to equal the exact sum of individual probabilities.</p>"""
    ),
    'c.prob.2.3.2': (
        r"""<p><b>Statement:</b> From Kolmogorov's axioms, the empty event has probability zero: $P(\varnothing) = 0$. Furthermore, for any finite collection of pairwise disjoint events $E_1, \ldots, E_n$ (where $E_i \cap E_j = \varnothing$ for $i \ne j$):"""
        r"""$$P\left(\bigcup_{i=1}^n E_i\right) = \sum_{i=1}^n P(E_i)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $\varnothing$ is the null event; $n \in \mathbb{N}$ is any finite integer; finite additivity is the restriction of countable additivity to finite index sets.</p>"""
        r"""<p><b>Reason:</b> Decompose $S = S \cup \varnothing$. Since $S \cap \varnothing = \varnothing$, Axiom 3 gives $P(S) = P(S) + P(\varnothing)$. Subtracting $P(S) = 1$ from both sides yields $P(\varnothing) = 0$. For any finite disjoint collection $E_1, \ldots, E_n$, define $E_k = \varnothing$ for all $k > n$. Applying countable additivity yields $P(\bigcup_{i=1}^n E_i) = \sum_{i=1}^n P(E_i) + \sum_{k=n+1}^\infty P(\varnothing) = \sum_{i=1}^n P(E_i)$.</p>"""
    ),
    'c.prob.2.4.1': (
        r"""<p><b>Statement:</b> For any event $E \subseteq S$, the complement rule holds: $P(E^c) = 1 - P(E)$. For any two events $E, F$:"""
        r"""<br>(1) Difference formula: $P(E \setminus F) = P(E \cap F^c) = P(E) - P(E \cap F)$."""
        r"""<br>(2) <b>Monotonicity:</b> If $E \subseteq F$, then $P(E) \le P(F)$, with $P(F \setminus E) = P(F) - P(E) \ge 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> $E^c = S \setminus E$ is the complement; $E \setminus F$ is the set difference; $E \subseteq F$ denotes that occurrence of $E$ implies occurrence of $F$; monotonicity states that larger sets have larger or equal probability.</p>"""
        r"""<p><b>Reason:</b> Decompose $S = E \cup E^c$. Because $E$ and $E^c$ are disjoint, $P(S) = P(E) + P(E^c)$. Since $P(S) = 1$, rearranging gives $P(E^c) = 1 - P(E)$. Similarly, decompose $E = (E \setminus F) \cup (E \cap F)$ into disjoint sets; additivity gives $P(E) = P(E \setminus F) + P(E \cap F)$. When $E \subseteq F$, $E \cap F = E$, so $F = E \cup (F \setminus E)$, which implies $P(F) = P(E) + P(F \setminus E) \ge P(E)$ because $P(F \setminus E) \ge 0$ by Axiom 1.</p>"""
    ),
    'c.prob.2.4.2': (
        r"""<p><b>Statement:</b> For any two events $E$ and $F$, the probability of their union is:"""
        r"""$$P(E \cup F) = P(E) + P(F) - P(E \cap F)$$</p>"""
        r"""<p>More generally, for any $n$ events $E_1, \ldots, E_n$, the Principle of Inclusion-Exclusion states:"""
        r"""$$P\left(\bigcup_{i=1}^n E_i\right) = \sum_{i=1}^n P(E_i) - \sum_{1 \le i < j \le n} P(E_i \cap E_j) + \cdots + (-1)^{n+1} P(E_1 \cap \cdots \cap E_n)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $E \cup F$ is the union event; $E \cap F$ is the joint occurrence; the sums run over all subsets of indices of sizes $1, 2, \ldots, n$; $(-1)^{k+1}$ provides the alternating signs for intersections of $k$ events.</p>"""
        r"""<p><b>Reason:</b> Express $E \cup F$ as the disjoint union of $E$ and $F \setminus E = F \cap E^c$. Then $P(E \cup F) = P(E) + P(F \setminus E) = P(E) + [P(F) - P(E \cap F)]$. In the general $n$-event expansion, any outcome belonging to exactly $m \ge 1$ of the events is counted $\sum_{k=1}^m (-1)^{k+1} \binom{m}{k} = 1 - (1 - 1)^m = 1$ time, ensuring every outcome in the union is counted with net weight exactly 1.</p>"""
    ),
    'c.prob.2.5.1': (
        r"""<p><b>Statement:</b> In a finite sample space $S$ with $|S| = N$ where every elementary outcome $\omega \in S$ has equal probability $P(\{\omega\}) = 1/N$, the probability of any event $E \subseteq S$ is the ratio of cardinalities:"""
        r"""$$P(E) = \frac{|E|}{|S|} = \frac{|E|}{N}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $N = |S|$ is the total number of elementary outcomes; $|E|$ is the number of outcomes favorable to $E$; uniform distribution means $P(\{\omega_1\}) = \cdots = P(\{\omega_N\}) = 1/N$.</p>"""
        r"""<p><b>Reason:</b> Normalization requires $\sum_{\omega \in S} P(\{\omega\}) = N \cdot p = 1$, forcing the individual outcome probability $p = 1/N$. Because $E$ is the finite disjoint union of its individual points $E = \bigcup_{\omega \in E} \{\omega\}$, finite additivity yields $P(E) = \sum_{\omega \in E} P(\{\omega\}) = |E| \cdot (1/N) = |E|/N$.</p>"""
    ),
    'c.prob.2.6.1': (
        r"""<p><b>Statement:</b> The probability measure $P$ is continuous from below and above with respect to monotone sequences of events:"""
        r"""<br>(1) If $E_1 \subseteq E_2 \subseteq E_3 \subseteq \cdots$ (monotone increasing) with limit $E = \bigcup_{n=1}^\infty E_n$, then $\lim_{n \to \infty} P(E_n) = P(E)$."""
        r"""<br>(2) If $F_1 \supseteq F_2 \supseteq F_3 \supseteq \cdots$ (monotone decreasing) with limit $F = \bigcap_{n=1}^\infty F_n$, then $\lim_{n \to \infty} P(F_n) = P(F)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $E_n$ is a nested sequence of events; $E = \lim E_n = \bigcup E_n$ is the limiting union; $F = \lim F_n = \bigcap F_n$ is the limiting intersection; continuity means the probability of the limit equals the limit of the probabilities.</p>"""
        r"""<p><b>Reason:</b> Decompose the increasing sequence into disjoint annular rings: $A_1 = E_1$ and $A_k = E_k \setminus E_{k-1}$ for $k \ge 2$. Then $E_n = \bigcup_{k=1}^n A_k$ and $E = \bigcup_{k=1}^\infty A_k$. By countable additivity, $P(E) = \sum_{k=1}^\infty P(A_k) = \lim_{n \to \infty} \sum_{k=1}^n P(A_k) = \lim_{n \to \infty} P(E_n)$. Continuity from above follows by taking complements $E_n = F_n^c$ and using De Morgan's laws.</p>"""
    ),
    'c.prob.2.6.2': (
        r"""<p><b>Statement:</b> For any countable collection of events $E_1, E_2, \ldots$, the <b>Union Bound</b> (Boole's Inequality) holds:"""
        r"""$$P\left(\bigcup_{i=1}^\infty E_i\right) \le \sum_{i=1}^\infty P(E_i)$$</p>"""
        r"""<p>Furthermore, a uniform probability distribution cannot exist on a countably infinite sample space $S = \{\omega_1, \omega_2, \ldots\}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\bigcup_{i=1}^\infty E_i$ is an arbitrary (not necessarily disjoint) union; $\le$ indicates that probability of the union cannot exceed the sum of marginal chances; countably infinite means bijectively equivalent to $\mathbb{N}$.</p>"""
        r"""<p><b>Reason:</b> Replace $E_i$ by disjoint sub-events $A_1 = E_1$ and $A_i = E_i \setminus (\bigcup_{j < i} E_j)$. Then $\bigcup E_i = \bigcup A_i$, and since $A_i \subseteq E_i$, monotonicity gives $P(A_i) \le P(E_i)$. By countable additivity, $P(\bigcup E_i) = \sum P(A_i) \le \sum P(E_i)$. For uniform countably infinite spaces, if each outcome has mass $p > 0$, $\sum_{i=1}^\infty p = \infty \ne 1$; if $p = 0$, $\sum_{i=1}^\infty 0 = 0 \ne 1$, making total probability 1 impossible under uniformity.</p>"""
    ),
    'c.prob.2.7.1': (
        r"""<p><b>Statement:</b> A subjective (Bayesian) probability is a numerical representation of an agent's degree of belief in the occurrence of an event $E$ given available background information $\mathcal{I}$, denoted $P(E \mid \mathcal{I}) \in [0, 1]$. To be rational and avoid a Dutch book (guaranteed financial loss under bet combinations), subjective probabilities must satisfy Kolmogorov's axioms: non-negativity, normalization $P(S \mid \mathcal{I}) = 1$, and additivity for mutually exclusive alternatives.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mathcal{I}$ represents the conditioning background knowledge; $P(E \mid \mathcal{I})$ is the personal probability assessment; Dutch book is a set of wagers that guarantees a net loss regardless of the experimental outcome.</p>"""
        r"""<p><b>Reason:</b> De Finetti's coherence theorem demonstrates that if an individual's betting odds violate any of Kolmogorov's probability axioms (e.g., negative probabilities, total probability $\ne 1$, or failure of additivity for disjoint hypotheses), a bookmaker can construct a finite system of wagers that results in a certain net financial loss for that individual regardless of which outcome occurs. Coherence thus mathematically compels subjective belief to conform to standard probability calculus.</p>"""
    ),
    'c.prob.2.5.2': (
        r"""<p><b>Statement:</b> In sampling $r$ objects without replacement from a finite population of size $N$ ($r \le N$):"""
        r"""<br>(1) In the <b>ordered</b> sample space $S_{\text{ord}}$, each of the $P(N, r) = \frac{N!}{(N-r)!}$ sequences has equal probability $1/P(N, r)$."""
        r"""<br>(2) In the <b>unordered</b> sample space $S_{\text{unord}}$, each of the $\binom{N}{r} = \frac{N!}{r!(N-r)!}$ subsets has equal probability $1/\binom{N}{r}$."""
        r"""<br>Both formulations yield identical event probabilities for any order-invariant event.</p>"""
        r"""<p><b>Mathematical terms:</b> $S_{\text{ord}}$ is the sample space of ordered $r$-tuples; $S_{\text{unord}}$ is the sample space of $r$-element subsets; $r!$ is the internal permutation symmetry factor.</p>"""
        r"""<p><b>Reason:</b> Each unique unordered subset of size $r$ corresponds bijectively to a fiber of exactly $r!$ distinct ordered sequences in $S_{\text{ord}}$. Because every ordered sequence in $S_{\text{ord}}$ carries the exact same probability mass $p_0 = \frac{(N-r)!}{N!}$, the total probability mass of any unordered subset is $\sum_{k=1}^{r!} p_0 = r! \cdot \frac{(N-r)!}{N!} = \frac{r!(N-r)!}{N!} = 1/\binom{N}{r}$. Because all subsets have identical fiber sizes $r!$, equiprobability is strictly preserved under the mapping.</p>"""
    ),
    'c.prob.2.7.2': (
        r"""<p><b>Statement:</b> Given mutually exclusive and exhaustive hypotheses $H_1, \ldots, H_n$ with coherent subjective probabilities $p_i = P(H_i)$ satisfying $p_i \ge 0$ and $\sum_{i=1}^n p_i = 1$, the subjective probability of any compound event consisting of a subset of winning hypotheses $I \subseteq \{1, \ldots, n\}$ is:"""
        r"""$$P\left(\bigcup_{i \in I} H_i\right) = \sum_{i \in I} p_i$$"""
        r"""and the expected utility of a wager paying $W_i$ under hypothesis $H_i$ is $\sum_{i=1}^n p_i U(W_i)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $H_i$ is hypothesis $i$; $p_i$ is the subjective prior probability of $H_i$; $I$ is an index subset; $W_i$ is the wager payout under state $H_i$; $U(\cdot)$ is the utility function.</p>"""
        r"""<p><b>Reason:</b> Because hypotheses $H_i$ are pairwise disjoint ($H_i \cap H_j = \varnothing$ for $i \ne j$), finite additivity guarantees that the probability of any composite wager winning under alternative states $I$ is the direct sum of the individual state probabilities $\sum_{i \in I} p_i$, preventing arbitrary non-linear betting distortions.</p>"""
    ),
}
