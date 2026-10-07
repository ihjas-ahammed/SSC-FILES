# Module 1: Combinatorial Analysis (11 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH01 = {
    'c.prob.1.1.1': (
        r"""<p><b>Statement:</b> In a classical finite probability space where the sample space $S$ consists of $N = |S| < \infty$ equally likely elementary outcomes, the probability of an event $A \subseteq S$ is given by:"""
        r"""$$P(A) = \frac{|A|}{|S|}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $S$ is the finite sample space (the set of all mutually exclusive and collectively exhaustive outcomes); $A \subseteq S$ is an event (a measurable subset of outcomes); $|A|$ denotes the cardinality (count of outcomes favorable to $A$); $|S|$ is the total number of possible outcomes in $S$; $P(A)$ is the classical probability measure on the power set of $S$.</p>"""
        r"""<p><b>Reason:</b> By the equiprobability assumption, each singleton elementary outcome $\{\omega\} \subseteq S$ carries equal probability mass $P(\{\omega\}) = 1/|S|$ to satisfy normalization $\sum_{\omega \in S} P(\{\omega\}) = 1$. By finite additivity of probability for mutually disjoint outcomes, $P(A) = \sum_{\omega \in A} P(\{\omega\}) = |A| \cdot (1/|S|) = |A|/|S|$.</p>"""
    ),
    'c.prob.1.2.1': (
        r"""<p><b>Statement:</b> If a compound experiment consists of $r$ consecutive stages such that stage $1$ has $n_1$ possible outcomes, and for each $k \in \{2, \ldots, r\}$, stage $k$ has $n_k$ possible outcomes regardless of the specific choices made in preceding stages $1, \ldots, k-1$, then the total number of distinct composite outcomes is:"""
        r"""$$N = \prod_{i=1}^r n_i = n_1 \cdot n_2 \cdots n_r$$</p>"""
        r"""<p><b>Mathematical terms:</b> $r \in \mathbb{N}$ is the number of sequential stages; $n_i \in \mathbb{N}$ is the number of valid choices available at stage $i$; $\prod_{i=1}^r n_i$ denotes the sequential product of the stage counts; each complete outcome is an ordered $r$-tuple $(a_1, a_2, \ldots, a_r)$.</p>"""
        r"""<p><b>Reason:</b> The total outcome set corresponds to a decision tree. At stage 1, there are $n_1$ root branches. Each branch splits into $n_2$ second-stage branches, producing $n_1 n_2$ disjoint pairs after stage 2 by repeated addition of equal row sizes. By induction on $r$, each subsequent stage multiplies the accumulated number of paths by $n_k$, yielding the product $\prod_{i=1}^r n_i$.</p>"""
    ),
    'c.prob.1.2.2': (
        r"""<p><b>Statement:</b> The total number of functions $f: A \to B$ from a finite domain $A$ with $|A| = n$ to a finite codomain $B$ with $|B| = q$ is $|B|^{|A|} = q^n$. When assignments at coordinate $i$ are constrained to a subset $B_i \subseteq B$ of size $q_i = |B_i|$, the count of valid functions is $\prod_{i=1}^n q_i$. If values must be distinct without replacement ($q \ge n$), the count of injective functions is $q(q-1)\cdots(q-n+1) = \frac{q!}{(q-n)!}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $A = \{x_1, \ldots, x_n\}$ is the finite domain; $B$ is the finite codomain; $f(x_i)$ is the value assigned to input $x_i$; $q_i$ is the number of permissible values for position $i$; injective means $f(x_i) \ne f(x_j)$ for all $i \ne j$.</p>"""
        r"""<p><b>Reason:</b> Specifying a function on a finite domain of $n$ elements is equivalent to choosing an ordered $n$-tuple of values $(f(x_1), \ldots, f(x_n))$. Under unconstrained selection, each of the $n$ coordinates has independently $q$ choices, giving $q^n$ by the multiplication principle. When repetition is forbidden, the first coordinate uses 1 of $q$ values, leaving $q-1$ available for the second, down to $q-(n-1) = q-n+1$ for the $n$-th.</p>"""
    ),
    'c.prob.1.3.1': (
        r"""<p><b>Statement:</b> The number of distinct ordered sequences (permutations) of $r$ objects chosen from a collection of $n$ distinct objects ($0 \le r \le n$) without replacement is given by the falling factorial:"""
        r"""$$P(n, r) = n(n-1)(n-2)\cdots(n-r+1) = \frac{n!}{(n-r)!}$$"""
        r"""For a complete permutation of all $n$ objects ($r = n$), the total is $P(n, n) = n!$, with $0! \equiv 1$.</p>"""
        r"""<p><b>Mathematical terms:</b> $n \in \mathbb{N}_0$ is the total number of distinct available items; $r \in \mathbb{N}_0$ is the length of the ordered sequence ($r \le n$); $n! = \prod_{k=1}^n k$ is the factorial; $P(n,r)$ (or ${}_n P_r$) is the permutation count.</p>"""
        r"""<p><b>Reason:</b> The first position in the sequence can be filled by any of the $n$ distinct objects. Because items cannot be reused, the second position has $n-1$ remaining choices, and the $k$-th position has $n - (k-1) = n - k + 1$ choices. Multiplying these $r$ consecutive factors yields $n(n-1)\cdots(n-r+1)$. Multiplying and dividing by $(n-r)!$ compresses this product into the compact factorial quotient $\frac{n!}{(n-r)!}$.</p>"""
    ),
    'c.prob.1.3.2': (
        r"""<p><b>Statement:</b> Given $n$ total objects partitioned into $k$ distinct types, where type $j$ contains $n_j$ identical, indistinguishable items such that $\sum_{j=1}^k n_j = n$, the number of distinguishable linear permutations is:"""
        r"""$$N = \frac{n!}{n_1! \, n_2! \cdots n_k!} = \binom{n}{n_1, n_2, \ldots, n_k}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $n$ is the total sequence length; $k$ is the number of distinct item categories; $n_j \ge 0$ is the multiplicity of identical items of type $j$; $n_j!$ is the internal permutation count of identical items of type $j$.</p>"""
        r"""<p><b>Reason:</b> If all $n$ items were temporarily assigned unique identifiers, there would be $n!$ distinct permutations. However, within any visible arrangement, permuting the $n_j$ identical items among their occupied positions produces identical visible sequences. Because permutations among different types are independent, each distinguishable arrangement is counted exactly $\prod_{j=1}^k n_j!$ times. Dividing $n!$ by this uniform overcount gives the true number of distinguishable arrangements.</p>"""
    ),
    'c.prob.1.4.1': (
        r"""<p><b>Statement:</b> The number of unordered subsets of size $r$ chosen from a set of $n$ distinct elements ($0 \le r \le n$) without replacement is the binomial coefficient:"""
        r"""$$\binom{n}{r} = \frac{P(n, r)}{r!} = \frac{n!}{r! \, (n-r)!}$$"""
        r"""with boundary conditions $\binom{n}{0} = \binom{n}{n} = 1$ and $\binom{n}{r} = 0$ for $r < 0$ or $r > n$.</p>"""
        r"""<p><b>Mathematical terms:</b> $n$ is the pool size; $r$ is the subset size; $\binom{n}{r}$ (read "$n$ choose $r$") is the combination count; $r!$ is the number of distinct orderings of any fixed subset of size $r$.</p>"""
        r"""<p><b>Reason:</b> There are $P(n,r) = \frac{n!}{(n-r)!}$ ways to select and order $r$ elements from $n$. Because a combination disregards the internal order of selection, and every subset of size $r$ can be ordered in exactly $r!$ distinct ways, each unique subset is overcounted exactly $r!$ times in the ordered list. Dividing the ordered count by $r!$ yields $\frac{n!}{r!(n-r)!}$.</p>"""
    ),
    'c.prob.1.4.2': (
        r"""<p><b>Statement:</b> For integers $1 \le r \le n$, the binomial coefficients satisfy Pascal's recurrence:"""
        r"""$$\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$$"""
        r"""and generate the polynomial coefficients in the Binomial Theorem for any real or complex $x, y$ and $n \in \mathbb{N}_0$:"""
        r"""$$(x+y)^n = \sum_{k=0}^n \binom{n}{k} x^k y^{n-k}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $\binom{n}{r}$ is the combination coefficient; $n-1$ represents the reduced sub-collection after fixing one element; $k$ indexes the number of factors contributing $x$ in the algebraic expansion of $(x+y)^n$.</p>"""
        r"""<p><b>Reason:</b> To prove Pascal's identity combinatorially, fix a specific element $\omega \in S$. Every $r$-subset either contains $\omega$ (requiring $r-1$ more elements chosen from the remaining $n-1$, giving $\binom{n-1}{r-1}$ ways) or excludes $\omega$ (requiring all $r$ elements chosen from the remaining $n-1$, giving $\binom{n-1}{r}$ ways). Because these two cases are mutually exclusive and exhaustive, their counts add. In the binomial theorem, expanding $(x+y)^n = (x+y)\cdots(x+y)$ requires choosing $x$ from $k$ factors and $y$ from the remaining $n-k$ factors; the number of ways to pick which $k$ factors contribute $x$ is precisely $\binom{n}{k}$.</p>"""
    ),
    'c.prob.1.5.1': (
        r"""<p><b>Statement:</b> The number of ways to partition a set of $n$ distinct items into $r$ distinct, labeled compartments of specified sizes $n_1, n_2, \ldots, n_r$ (where each $n_i \ge 0$ and $\sum_{i=1}^r n_i = n$) is given by the multinomial coefficient:"""
        r"""$$\binom{n}{n_1, n_2, \ldots, n_r} = \frac{n!}{n_1! \, n_2! \cdots n_r!}$$"""
        r"""which forms the expansion coefficient in the Multinomial Theorem: $(x_1 + \cdots + x_r)^n = \sum_{n_1+\cdots+n_r=n} \binom{n}{n_1,\ldots,n_r} \prod_{i=1}^r x_i^{n_i}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $n$ is the total item count; $r$ is the number of labeled recipient groups; $n_i$ is the exact size allocated to group $i$; $\sum_{n_1+\cdots+n_r=n}$ sums over all non-negative integer partitions of $n$.</p>"""
        r"""<p><b>Reason:</b> Select $n_1$ items for group 1 in $\binom{n}{n_1}$ ways. From the remaining $n - n_1$ items, select $n_2$ items for group 2 in $\binom{n-n_1}{n_2}$ ways, continuing sequentially. Multiplying these binomial coefficients produces telescoping factorial cancellations: $\frac{n!}{n_1!(n-n_1)!} \cdot \frac{(n-n_1)!}{n_2!(n-n_1-n_2)!} \cdots \frac{n_r!}{n_r!0!} = \frac{n!}{n_1! n_2! \cdots n_r!}$. In the algebraic product $(x_1+\cdots+x_r)^n$, the coefficient of $\prod x_i^{n_i}$ is the number of ways to select $x_i$ from $n_i$ brackets across the $n$ factors.</p>"""
    ),
    'c.prob.1.6.1': (
        r"""<p><b>Statement:</b> The number of distinct non-negative integer solutions to the Diophantine equation:"""
        r"""$$x_1 + x_2 + \cdots + x_r = n, \quad x_i \in \mathbb{N}_0$$"""
        r"""representing the distribution of $n$ indistinguishable items into $r$ distinguishable bins is:"""
        r"""$$N = \binom{n + r - 1}{r - 1} = \binom{n + r - 1}{n}$$"""
        r"""If each bin must receive at least one item ($x_i \ge 1$, positive integers with $n \ge r$), the count is $\binom{n-1}{r-1}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $n$ is the count of identical objects (stars); $r$ is the number of distinct bins; $r-1$ is the number of separators (bars); $x_i$ is the non-negative integer assigned to bin $i$.</p>"""
        r"""<p><b>Reason:</b> Represent each object as a star ($\star$) and the separation between bins as a bar ($|$). Distributing $n$ stars among $r$ bins requires $r-1$ bars to delimit the $r$ regions. Any solution corresponds bijectively to an arrangement of $n$ stars and $r-1$ bars in a total of $n + r - 1$ linear positions. Choosing the positions of the $r-1$ bars from the $n + r - 1$ available slots yields $\binom{n+r-1}{r-1}$. For strictly positive solutions ($x_i \ge 1$), placing $n$ stars creates $n-1$ internal gaps; choosing $r-1$ gaps to hold bars so no two bars are adjacent gives $\binom{n-1}{r-1}$.</p>"""
    ),
    'c.prob.1.5.2': (
        r"""<p><b>Statement:</b> When partitioning $n = rm$ distinct objects into $r$ groups of equal size $m$ ($m \ge 1$):"""
        r"""<br>(1) If the groups are <b>labeled</b> (distinguishable by name or role), the count is the multinomial coefficient $\frac{n!}{(m!)^r}$."""
        r"""<br>(2) If the groups are <b>unlabeled</b> (indistinguishable partitions where order of groups does not matter), the count is:"""
        r"""$$N_{\text{unlabeled}} = \frac{n!}{(m!)^r \, r!}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $n$ is total distinct items; $r$ is the number of groups; $m$ is the uniform group size ($n = rm$); $(m!)^r$ accounts for internal orderings within each group; $r!$ accounts for external permutations among the identical-sized groups.</p>"""
        r"""<p><b>Reason:</b> Every unlabeled partition into $r$ equal-sized subsets corresponds to exactly $r!$ distinct assignments of labels (e.g. Group A, Group B, ...) to the subsets. Because all $r$ subsets have identical cardinality $m$, any permutation of the group labels produces a valid, distinct labeled assignment of the same underlying partition. Dividing the labeled multinomial count by $r!$ removes this uniform external labeling symmetry.</p>"""
    ),
    'c.prob.1.6.2': (
        r"""<p><b>Statement:</b> For integer lower bounds $a_1, \ldots, a_r \ge 0$, the number of integer solutions to $x_1 + \cdots + x_r = n$ subject to $x_i \ge a_i$ for each $i \in \{1, \ldots, r\}$ is:"""
        r"""$$N = \binom{n - \sum_{i=1}^r a_i + r - 1}{r - 1}$$"""
        r"""provided $n \ge \sum_{i=1}^r a_i$; otherwise $N = 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> $a_i$ is the minimum quota assigned to group $i$; $\sum a_i$ is the total required minimum allocation; $y_i = x_i - a_i \ge 0$ represents the surplus allocated to group $i$; $n - \sum a_i$ is the remaining discretionary amount.</p>"""
        r"""<p><b>Reason:</b> Define the change of variables $y_i = x_i - a_i$. Since $x_i \ge a_i$, each $y_i$ is a non-negative integer ($y_i \in \mathbb{N}_0$). Substituting $x_i = y_i + a_i$ into the sum gives $\sum_{i=1}^r (y_i + a_i) = n$, which simplifies to $\sum_{i=1}^r y_i = n - \sum_{i=1}^r a_i$. This is an unconstrained non-negative Diophantine equation with total $n^\prime = n - \sum a_i$. Applying standard stars and bars to $n^\prime$ and $r$ gives $\binom{n^\prime + r - 1}{r - 1}$.</p>"""
    ),
}
