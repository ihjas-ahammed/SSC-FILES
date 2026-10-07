# Module 3: Conditional Probability and Independence (12 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH03 = {
    'c.prob.3.2.1': (
        r"""<p><b>Statement:</b> For any two events $E$ and $F$ defined on a probability space $(\Omega, \mathcal{F}, P)$ with $P(F) > 0$, the conditional probability of $E$ given $F$ is defined by:"""
        r"""$$P(E \mid F) = \frac{P(E \cap F)}{P(F)}$$"""
        r"""In a finite uniform sample space, this simplifies to $P(E \mid F) = \frac{|E \cap F|}{|F|}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $P(E \mid F)$ is the conditional probability of $E$ given $F$; $E \cap F$ is the joint occurrence of both events; $P(F) > 0$ is the conditioning event's probability; $|E \cap F|$ and $|F|$ are finite set cardinalities.</p>"""
        r"""<p><b>Reason:</b> Knowing that event $F$ has occurred eliminates all outcomes outside $F$, reducing the effective sample space from $\Omega$ to $F$. The only outcomes favorable to $E$ that remain possible are those in the intersection $E \cap F$. To ensure the total probability of the new sample space is normalized to $P(F \mid F) = 1$, the joint mass $P(E \cap F)$ must be scaled by dividing by the total surviving mass $P(F)$.</p>"""
    ),
    'c.prob.3.2.2': (
        r"""<p><b>Statement:</b> For two events with $P(F) > 0$, the Multiplication Rule is $P(E \cap F) = P(F) P(E \mid F)$. More generally, for $n$ events $E_1, \ldots, E_n$ with $P(E_1 \cap \cdots \cap E_{n-1}) > 0$, the <b>Chain Rule of Probability</b> states:"""
        r"""$$P\left(\bigcap_{i=1}^n E_i\right) = P(E_1) P(E_2 \mid E_1) P(E_3 \mid E_1 \cap E_2) \cdots P\left(E_n \mid \bigcap_{j=1}^{n-1} E_j\right)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $\bigcap_{i=1}^n E_i$ is the simultaneous intersection of $n$ events; $P(E_k \mid E_1 \cap \cdots \cap E_{k-1})$ is the transition probability of stage $k$ conditioned on the entire history of preceding stages.</p>"""
        r"""<p><b>Reason:</b> Rearranging the definition of conditional probability $P(E \mid F) = \frac{P(E \cap F)}{P(F)}$ immediately gives $P(E \cap F) = P(F)P(E \mid F)$. In the product expansion for $n$ events, expanding each conditional probability as a quotient produces a telescoping product: $P(E_1) \cdot \frac{P(E_1 \cap E_2)}{P(E_1)} \cdot \frac{P(E_1 \cap E_2 \cap E_3)}{P(E_1 \cap E_2)} \cdots \frac{P(E_1 \cap \cdots \cap E_n)}{P(E_1 \cap \cdots \cap E_{n-1})} = P(\bigcap_{i=1}^n E_i)$, where every intermediate denominator cancels the preceding numerator.</p>"""
    ),
    'c.prob.3.2.3': (
        r"""<p><b>Statement:</b> In sequential multi-stage experiments (such as sampling without replacement), calculating probabilities on the reduced sample space at each stage using sequential conditioning is mathematically equivalent to calculating the joint probability over the entire global sample space:"""
        r"""$$P(\text{sequence}) = \prod_{k=1}^r P(\text{step } k \mid \text{steps } 1, \ldots, k-1)$$</p>"""
        r"""<p><b>Mathematical terms:</b> A reduced sample space $S_k$ is the updated state space of remaining items at stage $k$; $P(\text{step } k \mid \text{history})$ is the one-step transition probability given past outcomes.</p>"""
        r"""<p><b>Reason:</b> At stage $k$, the physical state of the system is completely determined by the previous $k-1$ draws. Restricting attention to the remaining composition directly models the conditional probability, avoiding the combinatorial complexity of tracking global joint sample space permutations while guaranteeing exact mathematical equivalence via the chain rule.</p>"""
    ),
    'c.prob.3.3.1': (
        r"""<p><b>Statement:</b> Let $\{F_1, F_2, \ldots, F_n\}$ (or a countably infinite family) form a <b>partition</b> of the sample space $S$, such that $F_i \cap F_j = \varnothing$ for all $i \ne j$, $\bigcup_{i=1}^n F_i = S$, and $P(F_i) > 0$ for all $i$. Then for any event $E \subseteq S$, the <b>Law of Total Probability</b> states:"""
        r"""$$P(E) = \sum_{i=1}^n P(E \cap F_i) = \sum_{i=1}^n P(F_i) P(E \mid F_i)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $\{F_i\}$ is a partition of $S$ (mutually exclusive and collectively exhaustive scenarios); $P(F_i)$ are prior scenario weights; $P(E \mid F_i)$ is the likelihood of $E$ under scenario $F_i$.</p>"""
        r"""<p><b>Reason:</b> Because $\bigcup_{i=1}^n F_i = S$, intersecting $E$ with $S$ yields $E = E \cap S = E \cap (\bigcup_{i=1}^n F_i) = \bigcup_{i=1}^n (E \cap F_i)$. Since the partition subsets $F_i$ are pairwise disjoint, the components $E \cap F_i$ are also pairwise disjoint ($[E \cap F_i] \cap [E \cap F_j] \subseteq F_i \cap F_j = \varnothing$). By finite/countable additivity, $P(E) = \sum_{i=1}^n P(E \cap F_i)$. Applying the multiplication rule $P(E \cap F_i) = P(F_i) P(E \mid F_i)$ produces the weighted average formula.</p>"""
    ),
    'c.prob.3.3.2': (
        r"""<p><b>Statement:</b> Let $\{F_1, \ldots, F_n\}$ be a partition of $S$ with $P(F_i) > 0$, and let $E$ be an observed event with $P(E) > 0$. Then for any specific scenario $F_j$, <b>Bayes' Formula</b> computes the posterior probability:"""
        r"""$$P(F_j \mid E) = \frac{P(E \cap F_j)}{P(E)} = \frac{P(F_j) P(E \mid F_j)}{\sum_{i=1}^n P(F_i) P(E \mid F_i)}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $P(F_j)$ is the <b>prior probability</b> of hypothesis $F_j$; $P(E \mid F_j)$ is the <b>likelihood</b> of observing evidence $E$ under hypothesis $F_j$; $P(F_j \mid E)$ is the <b>posterior probability</b>; the denominator $\sum_{i=1}^n P(F_i) P(E \mid F_i) = P(E)$ is the marginal probability of evidence $E$.</p>"""
        r"""<p><b>Reason:</b> By definition of conditional probability, $P(F_j \mid E) = \frac{P(E \cap F_j)}{P(E)}$. The numerator is rewritten using the multiplication rule as $P(F_j) P(E \mid F_j)$. The denominator is expanded using the Law of Total Probability across all possible mutually exclusive hypotheses $F_i$, ensuring the posterior probabilities over all hypotheses sum to $\sum_j P(F_j \mid E) = 1$.</p>"""
    ),
    'c.prob.3.3.3': (
        r"""<p><b>Statement:</b> In Bayesian inference, observing evidence $E$ with likelihood ratio $L = \frac{P(E \mid F)}{P(E \mid F^c)}$ updates prior odds to posterior odds according to the odds form of Bayes' rule:"""
        r"""$$\frac{P(F \mid E)}{P(F^c \mid E)} = \frac{P(F)}{P(F^c)} \times \frac{P(E \mid F)}{P(E \mid F^c)}$$"""
        r"""Evidence $E$ supports hypothesis $F$ (raising its probability: $P(F \mid E) > P(F)$) if and only if $P(E \mid F) > P(E \mid F^c)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\frac{P(F)}{P(F^c)}$ represents the prior odds of $F$; $\frac{P(F \mid E)}{P(F^c \mid E)}$ represents the posterior odds of $F$; $\frac{P(E \mid F)}{P(E \mid F^c)}$ is the <b>Bayes Factor</b> (likelihood ratio).</p>"""
        r"""<p><b>Reason:</b> Applying Bayes' formula to both $P(F \mid E) = \frac{P(F)P(E \mid F)}{P(E)}$ and $P(F^c \mid E) = \frac{P(F^c)P(E \mid F^c)}{P(E)}$, dividing the two equations cancels the common evidence denominator $P(E)$. This factors posterior belief into the product of prior belief and empirical evidential support, proving that belief in $F$ increases if and only if the observed evidence was more likely under $F$ than under its absence.</p>"""
    ),
    'c.prob.3.4.1': (
        r"""<p><b>Statement:</b> Two events $E$ and $F$ are statistically <b>independent</b> if and only if their joint probability factors into the product of their marginal probabilities:"""
        r"""$$P(E \cap F) = P(E) P(F)$$</p>"""
        r"""<p>When $P(F) > 0$, this is equivalent to $P(E \mid F) = P(E)$; when $P(E) > 0$, it is equivalent to $P(F \mid E) = P(F)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $E, F$ are independent events; $P(E \cap F)$ is the joint probability; $P(E)P(F)$ is the product of marginal probabilities; $P(E \mid F) = P(E)$ states that conditioning on $F$ leaves the probability of $E$ invariant.</p>"""
        r"""<p><b>Reason:</b> If the occurrence of $F$ provides no information regarding the likelihood of $E$, then by definition $P(E \mid F) = P(E)$. Substituting this into the general multiplication rule $P(E \cap F) = P(F) P(E \mid F)$ gives $P(E \cap F) = P(F) P(E) = P(E)P(F)$. The product formula $P(E \cap F) = P(E)P(F)$ is preferred as the primary definition because it holds symmetrically and does not require non-zero conditioning probabilities.</p>"""
    ),
    'c.prob.3.4.2': (
        r"""<p><b>Statement:</b> If events $E$ and $F$ are independent ($P(E \cap F) = P(E)P(F)$), then:"""
        r"""<br>(1) $E$ and $F^c$ are independent: $P(E \cap F^c) = P(E) P(F^c)$."""
        r"""<br>(2) $E^c$ and $F$ are independent: $P(E^c \cap F) = P(E^c) P(F)$."""
        r"""<br>(3) $E^c$ and $F^c$ are independent: $P(E^c \cap F^c) = P(E^c) P(F^c)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $E^c, F^c$ are the complement events; independence closure means independence is invariant under taking event complements.</p>"""
        r"""<p><b>Reason:</b> Decompose $E = (E \cap F) \cup (E \cap F^c)$ into disjoint sets. By additivity, $P(E) = P(E \cap F) + P(E \cap F^c)$. Using independence of $E$ and $F$, substitute $P(E \cap F) = P(E)P(F)$ to get $P(E \cap F^c) = P(E) - P(E)P(F) = P(E)[1 - P(F)] = P(E)P(F^c)$, proving (1). Applying the same logic symmetrically proves (2), and applying it again to the pair $(E^c, F)$ proves (3).</p>"""
    ),
    'c.prob.3.4.3': (
        r"""<p><b>Statement:</b> A collection of events $E_1, \ldots, E_n$ is <b>mutually independent</b> if and only if for every subset of indices $J \subseteq \{1, \ldots, n\}$ with $|J| \ge 2$:"""
        r"""$$P\left(\bigcap_{j \in J} E_j\right) = \prod_{j \in J} P(E_j)$$</p>"""
        r"""<p>Requiring this factorization only for all pairs $|J| = 2$ defines <b>pairwise independence</b>, which does NOT imply mutual independence.</p>"""
        r"""<p><b>Mathematical terms:</b> Mutual independence requires $2^n - n - 1$ factorization equations; pairwise independence requires only $\binom{n}{2}$ equations; $J \subseteq \{1, \ldots, n\}$ is any sub-collection of events.</p>"""
        r"""<p><b>Reason:</b> Pairwise independence ensures that knowing the outcome of any single event $E_i$ gives no information about any other single event $E_j$. However, it does not prevent joint interactions: for example, in tossing two fair independent coins with $E_1 = \{\text{first is H}\}$, $E_2 = \{\text{second is H}\}$, and $E_3 = \{\text{both coins match}\}$, each pair has $P(E_i \cap E_j) = 1/4 = P(E_i)P(E_j)$, but $P(E_1 \cap E_2 \cap E_3) = 1/4 \ne (1/2)^3 = 1/8$, because $E_1 \cap E_2$ completely dictates $E_3$.</p>"""
    ),
    'c.prob.3.5.1': (
        r"""<p><b>Statement:</b> Let $(\Omega, \mathcal{F}, P)$ be a probability space, and fix an event $B \in \mathcal{F}$ with $P(B) > 0$. Define the mapping $Q: \mathcal{F} \to [0, 1]$ by $Q(A) = P(A \mid B) = \frac{P(A \cap B)}{P(B)}$. Then $Q$ is a valid probability measure on $(\Omega, \mathcal{F})$ satisfying all three Kolmogorov axioms:</p>"""
        r"""<p>(1) $0 \le Q(A) \le 1$ for all $A \in \mathcal{F}$; (2) $Q(\Omega) = 1$; (3) for any countable sequence of pairwise disjoint events $A_1, A_2, \ldots$, $Q(\bigcup_{i=1}^\infty A_i) = \sum_{i=1}^\infty Q(A_i)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $Q(\cdot) \equiv P(\cdot \mid B)$ is the conditional probability measure; $B$ is the conditioning event; all standard probability theorems (inclusion-exclusion, complementation, continuity) apply unconditionally to $Q$.</p>"""
        r"""<p><b>Reason:</b> (1) Since $0 \le P(A \cap B) \le P(B)$, dividing by $P(B) > 0$ yields $0 \le Q(A) \le 1$. (2) $Q(\Omega) = \frac{P(\Omega \cap B)}{P(B)} = \frac{P(B)}{P(B)} = 1$. (3) For disjoint $A_i$, the intersections $A_i \cap B$ are also disjoint, so by countable additivity of $P$, $Q(\bigcup A_i) = \frac{P((\bigcup A_i) \cap B)}{P(B)} = \frac{\sum P(A_i \cap B)}{P(B)} = \sum Q(A_i)$. Because $Q$ satisfies the axioms, every theorem of probability holds within any conditional universe.</p>"""
    ),
    'c.prob.3.5.2': (
        r"""<p><b>Statement:</b> For any conditioning event $C$ with $P(C) > 0$, all structural probability theorems hold conditionally given $C$:"""
        r"""<br>(1) <b>Conditional Law of Total Probability:</b> If $\{F_1, \ldots, F_n\}$ partitions $S$ with $P(F_i \cap C) > 0$, then for any event $E$:"""
        r"""$$P(E \mid C) = \sum_{i=1}^n P(F_i \mid C) P(E \mid F_i \cap C)$$</p>"""
        r"""<br>(2) <b>Conditional Bayes' Formula:</b>"""
        r"""$$P(F_j \mid E \cap C) = \frac{P(F_j \mid C) P(E \mid F_j \cap C)}{\sum_{i=1}^n P(F_i \mid C) P(E \mid F_i \cap C)}$$"""
        r"""<p><b>Mathematical terms:</b> $C$ is the background context; $P(\cdot \mid C)$ acts as the base probability measure; $E \cap C$ is the combined condition.</p>"""
        r"""<p><b>Reason:</b> Since $Q(A) = P(A \mid C)$ is itself a rigorous Kolmogorov probability measure, substituting $Q$ into the standard Law of Total Probability yields $Q(E) = \sum Q(F_i) Q(E \mid F_i)$. Noting that $Q(E \mid F_i) = \frac{Q(E \cap F_i)}{Q(F_i)} = \frac{P(E \cap F_i \cap C)/P(C)}{P(F_i \cap C)/P(C)} = P(E \mid F_i \cap C)$ directly establishes the conditional total probability and Bayes formulas.</p>"""
    ),
    'c.prob.3.1.1': (
        r"""<p><b>Statement:</b> Incorporating partial information $F$ into an analysis transforms prior probability $P(E)$ into posterior conditional probability $P(E \mid F) = \frac{P(E \cap F)}{P(F)}$. The information $F$ shifts likelihood depending on the correlation between $E$ and $F$:"""
        r"""<br>(1) If $P(E \cap F) > P(E)P(F)$, then $P(E \mid F) > P(E)$ ($F$ is favorable to $E$)."""
        r"""<br>(2) If $P(E \cap F) < P(E)P(F)$, then $P(E \mid F) < P(E)$ ($F$ is unfavorable to $E$)."""
        r"""<br>(3) If $P(E \cap F) = P(E)P(F)$, then $P(E \mid F) = P(E)$ ($F$ is neutral / independent of $E$).</p>"""
        r"""<p><b>Mathematical terms:</b> Prior probability is $P(E)$; updated/posterior probability is $P(E \mid F)$; correlation sign is governed by $P(E \cap F) - P(E)P(F)$.</p>"""
        r"""<p><b>Reason:</b> Dividing $P(E \cap F)$ by $P(F)$ gives $P(E \mid F) = \frac{P(E \cap F)}{P(F)}$. Comparing this ratio to $P(E)$ is algebraically equivalent to comparing $P(E \cap F)$ to the product $P(E)P(F)$. Thus, learning that $F$ occurred strictly increases the probability of $E$ if and only if the joint occurrence $E \cap F$ occurs more frequently than predicted by independence.</p>"""
    ),
}
