var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.1.1.1",
    "sec": "1.1",
    "kind": "technique",
    "tier": "core",
    "title": "Counting outcomes to obtain probability",
    "oneLine": "Count the outcomes you want, then divide by all outcomes—when they are equally likely.",
    "statement": "<p><b>Statement:</b> In a classical finite probability space where the sample space $S$ consists of $N = |S| < \\infty$ equally likely elementary outcomes, the probability of an event $A \\subseteq S$ is given by:$$P(A) = \\frac{|A|}{|S|}$$</p><p><b>Mathematical terms:</b> $S$ is the finite sample space (the set of all mutually exclusive and collectively exhaustive outcomes); $A \\subseteq S$ is an event (a measurable subset of outcomes); $|A|$ denotes the cardinality (count of outcomes favorable to $A$); $|S|$ is the total number of possible outcomes in $S$; $P(A)$ is the classical probability measure on the power set of $S$.</p><p><b>Reason:</b> By the equiprobability assumption, each singleton elementary outcome $\\{\\omega\\} \\subseteq S$ carries equal probability mass $P(\\{\\omega\\}) = 1/|S|$ to satisfy normalization $\\sum_{\\omega \\in S} P(\\{\\omega\\}) = 1$. By finite additivity of probability for mutually disjoint outcomes, $P(A) = \\sum_{\\omega \\in A} P(\\{\\omega\\}) = |A| \\cdot (1/|S|) = |A|/|S|$.</p>",
    "intuition": "Think of a sample space as all complete result cards for the experiment. For two named dice, “red shows 2, blue shows 5” and “red shows 5, blue shows 2” are different cards, even though both totals are 7. Favorable cards divided by all cards gives a probability only when every card is equally likely.",
    "needs": [],
    "traps": [
      "The equally-likely condition is essential. A list of possibilities is not a probability model by itself.",
      "Do not count labels that the experiment regards as indistinguishable as distinct outcomes."
    ],
    "cards": [
      {
        "q": "When may a probability be computed as favorable count divided by total count?",
        "a": "When the finite sample space consists of equally likely outcomes; then $P(A)=|A|/|S|$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, A First Course in Probability, 10e, §1.1, PDF p. 17.",
    "proof": {
      "idea": "Derive favorable-over-total counting from the assumption of equally likely outcomes.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "List every complete outcome of the experiment in a finite sample space S.",
          "m": "$$N=|S|$$",
          "meaning": "An outcome must include everything that distinguishes one result from another."
        },
        {
          "why": "Assume every complete outcome has the same probability p.",
          "m": "$$P(\\{s\\})=p\\quad(s\\in S)$$",
          "meaning": "Equal likelihood is a model assumption; merely listing outcomes does not establish it."
        },
        {
          "why": "The N disjoint outcomes cover the whole experiment.",
          "m": "$$Np=P(S)=1$$",
          "meaning": "Probabilities add for disjoint possibilities and total probability is 1."
        },
        {
          "why": "Divide by N to obtain the probability per outcome.",
          "m": "$$p=1/N$$",
          "meaning": "N is positive because there is at least one possible result."
        },
        {
          "why": "An event A with M=|A| favorable outcomes is their disjoint union.",
          "m": "$$P(A)=Mp=M/N=|A|/|S|$$",
          "meaning": "This derives the counting formula and explains its denominator."
        },
        {
          "why": "For two named fair independent dice there are 6·6 complete pairs and 6 pairs totaling 7.",
          "m": "$$P(\\text{total }7)=6/36=1/6$$",
          "meaning": "Independence and fairness make those pairs equally likely; totals themselves are not equally likely."
        }
      ],
      "ends": "Counting gives probabilities only after the finite equal-likelihood assumption is justified."
    }
  },
  {
    "id": "c.prob.1.2.1",
    "sec": "1.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Basic principle of counting",
    "oneLine": "Multiply the number of choices at each stage.",
    "statement": "<p><b>Statement:</b> If a compound experiment consists of $r$ consecutive stages such that stage $1$ has $n_1$ possible outcomes, and for each $k \\in \\{2, \\ldots, r\\}$, stage $k$ has $n_k$ possible outcomes regardless of the specific choices made in preceding stages $1, \\ldots, k-1$, then the total number of distinct composite outcomes is:$$N = \\prod_{i=1}^r n_i = n_1 \\cdot n_2 \\cdots n_r$$</p><p><b>Mathematical terms:</b> $r \\in \\mathbb{N}$ is the number of sequential stages; $n_i \\in \\mathbb{N}$ is the number of valid choices available at stage $i$; $\\prod_{i=1}^r n_i$ denotes the sequential product of the stage counts; each complete outcome is an ordered $r$-tuple $(a_1, a_2, \\ldots, a_r)$.</p><p><b>Reason:</b> The total outcome set corresponds to a decision tree. At stage 1, there are $n_1$ root branches. Each branch splits into $n_2$ second-stage branches, producing $n_1 n_2$ disjoint pairs after stage 2 by repeated addition of equal row sizes. By induction on $r$, each subsequent stage multiplies the accumulated number of paths by $n_k$, yielding the product $\\prod_{i=1}^r n_i$.</p>",
    "intuition": "A choice diagram branches at each step: pick a shirt, then pick a pair of shoes. If every shirt has the same number of shoe choices, multiply the branch counts. If some first choices leave fewer options than others, count each branch separately and add.",
    "needs": [],
    "traps": [
      "Add counts for successive stages only when the task branches into alternatives; multiply counts for choices that are all made.",
      "If later choices depend on earlier choices, check whether each branch has the same size before using a simple product."
    ],
    "proof": {
      "idea": "Build a table of complete choices, then count its rows.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Name the first-stage options 1 through m and the second-stage options 1 through n.",
          "m": "$$(i,j)$$",
          "meaning": "A pair records both choices; changing either entry changes the complete outcome."
        },
        {
          "why": "Fix one first choice i; exactly n second choices remain by the hypothesis.",
          "m": "$$(i,1),(i,2),\\ldots,(i,n)$$",
          "meaning": "This is one row containing n complete outcomes."
        },
        {
          "why": "Different first choices create disjoint rows, since their first entries differ.",
          "m": "$$n+n+\\cdots+n\\quad(m\\text{ terms})$$",
          "meaning": "Adding row sizes counts every outcome once."
        },
        {
          "why": "Multiplication is repeated addition of equal numbers.",
          "m": "$$n+\\cdots+n=mn$$",
          "meaning": "For 3 shirts and 2 shoes, the table has 3 rows of 2, giving 6 outfits."
        },
        {
          "why": "After k stages, each existing outcome has n_{k+1} continuations.",
          "m": "$$(n_1\\cdots n_k)n_{k+1}$$",
          "meaning": "Multiplying the old total by the new branch size proves the rule one stage at a time."
        },
        {
          "why": "Start with the first stage and repeat the previous step.",
          "m": "$$N=n_1n_2\\cdots n_r=\\prod_{i=1}^r n_i$$",
          "meaning": "The product symbol is shorthand for multiplying all listed choice counts."
        }
      ],
      "ends": "The multiplication rule requires the same number of continuations after every history at a given stage; unequal rows must instead be added separately."
    },
    "cards": [
      {
        "q": "State the generalized multiplication principle.",
        "a": "If stage $i$ has $n_i$ choices for every preceding history, the number of complete outcomes is $n_1n_2\\cdots n_r$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.2, Basic Principle and generalized version, PDF pp. 18–19."
  },
  {
    "id": "c.prob.1.2.2",
    "sec": "1.2",
    "kind": "technique",
    "tier": "core",
    "title": "Count functions and constrained products",
    "oneLine": "Fill each position with one allowed value, then multiply the choice counts.",
    "statement": "<p><b>Statement:</b> The total number of functions $f: A \\to B$ from a finite domain $A$ with $|A| = n$ to a finite codomain $B$ with $|B| = q$ is $|B|^{|A|} = q^n$. When assignments at coordinate $i$ are constrained to a subset $B_i \\subseteq B$ of size $q_i = |B_i|$, the count of valid functions is $\\prod_{i=1}^n q_i$. If values must be distinct without replacement ($q \\ge n$), the count of injective functions is $q(q-1)\\cdots(q-n+1) = \\frac{q!}{(q-n)!}$.</p><p><b>Mathematical terms:</b> $A = \\{x_1, \\ldots, x_n\\}$ is the finite domain; $B$ is the finite codomain; $f(x_i)$ is the value assigned to input $x_i$; $q_i$ is the number of permissible values for position $i$; injective means $f(x_i) \\ne f(x_j)$ for all $i \\ne j$.</p><p><b>Reason:</b> Specifying a function on a finite domain of $n$ elements is equivalent to choosing an ordered $n$-tuple of values $(f(x_1), \\ldots, f(x_n))$. Under unconstrained selection, each of the $n$ coordinates has independently $q$ choices, giving $q^n$ by the multiplication principle. When repetition is forbidden, the first coordinate uses 1 of $q$ values, leaving $q-1$ available for the second, down to $q-(n-1) = q-n+1$ for the $n$-th.</p>",
    "intuition": "A function is like a table with one output slot for each input label. With 3 inputs and 4 allowed output values per slot, there are 4 choices for each of 3 slots, or 4³ tables. Labels keep slots distinct even if two outputs happen to match.",
    "needs": [
      "c.prob.1.2.1"
    ],
    "traps": [
      "With repetition allowed, use the same number of choices at each position; without repetition, choices shrink.",
      "A function is determined by its values, not by an ordering of the domain."
    ],
    "cards": [
      {
        "q": "How many functions from an n-point set to a q-point set?",
        "a": "$q^n$, because each of the $n$ inputs independently receives one of $q$ values.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.2, Examples 2c–2e, PDF pp. 18–19.",
    "proof": {
      "idea": "Treat a function as one output choice for each specified input.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Label the n inputs a_1,...,a_n and list q allowed outputs.",
          "m": "$$f\\leftrightarrow(f(a_1),\\ldots,f(a_n))$$",
          "meaning": "This correspondence identifies a function with its complete output table."
        },
        {
          "why": "Each input needs exactly one output and all q values are allowed at each position.",
          "m": "$$q\\text{ choices per position}$$",
          "meaning": "Different input labels create different slots, even if their outputs coincide."
        },
        {
          "why": "Apply the multiplication principle to all n slots.",
          "m": "$$N=\\underbrace{q\\cdot q\\cdots q}_{n\\text{ factors}}=q^n$$",
          "meaning": "This is a counting product, not a probability independence assertion."
        },
        {
          "why": "If slot i has a fixed allowed count q_i for every preceding history, multiply those counts instead.",
          "m": "$$N=\\prod_{i=1}^nq_i$$",
          "meaning": "The factors may differ between positions, but not between earlier histories at the same position."
        },
        {
          "why": "If outputs cannot repeat, the available count decreases after each choice.",
          "m": "$$N=q(q-1)\\cdots(q-n+1)\\quad(n\\le q)$$",
          "meaning": "This counts injective functions; if n>q there are no such functions."
        },
        {
          "why": "For three distinct English letters, use q=26,n=3.",
          "m": "$$N=26\\cdot25\\cdot24$$",
          "meaning": "The second slot excludes the first letter and the third excludes both preceding letters."
        }
      ],
      "ends": "Function counts follow from filling labeled slots under explicit repetition rules."
    }
  },
  {
    "id": "c.prob.1.3.1",
    "sec": "1.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Permutations of distinct objects",
    "oneLine": "To arrange different objects, count the choices for each position.",
    "statement": "<p><b>Statement:</b> The number of distinct ordered sequences (permutations) of $r$ objects chosen from a collection of $n$ distinct objects ($0 \\le r \\le n$) without replacement is given by the falling factorial:$$P(n, r) = n(n-1)(n-2)\\cdots(n-r+1) = \\frac{n!}{(n-r)!}$$For a complete permutation of all $n$ objects ($r = n$), the total is $P(n, n) = n!$, with $0! \\equiv 1$.</p><p><b>Mathematical terms:</b> $n \\in \\mathbb{N}_0$ is the total number of distinct available items; $r \\in \\mathbb{N}_0$ is the length of the ordered sequence ($r \\le n$); $n! = \\prod_{k=1}^n k$ is the factorial; $P(n,r)$ (or ${}_n P_r$) is the permutation count.</p><p><b>Reason:</b> The first position in the sequence can be filled by any of the $n$ distinct objects. Because items cannot be reused, the second position has $n-1$ remaining choices, and the $k$-th position has $n - (k-1) = n - k + 1$ choices. Multiplying these $r$ consecutive factors yields $n(n-1)\\cdots(n-r+1)$. Multiplying and dividing by $(n-r)!$ compresses this product into the compact factorial quotient $\\frac{n!}{(n-r)!}$.</p>",
    "intuition": "Putting 5 different books in a row gives 5 choices for the first place, then 4, then 3, and so on. A new order counts as a new result because the books have moved to different places.",
    "needs": [
      "c.prob.1.2.1"
    ],
    "traps": [
      "A combination is not a permutation: use the falling factorial only when order matters.",
      "The convention $0!=1$ makes endpoint formulas work and counts the unique empty ordering."
    ],
    "proof": {
      "idea": "Fill positions one at a time and explain the factorial cancellation.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "There are n distinct objects and r ordered positions, with 0≤r≤n.",
          "m": "$$n\\text{ choices in position }1$$",
          "meaning": "Objects are used at most once."
        },
        {
          "why": "Using one object removes exactly one option for the next position.",
          "m": "$$n-1\\text{ choices in position }2$$",
          "meaning": "This count is the same whichever first object was chosen."
        },
        {
          "why": "Before position j, exactly j−1 objects have been used.",
          "m": "$$n-(j-1)=n-j+1$$",
          "meaning": "At position r the count is n−r+1, not n−r."
        },
        {
          "why": "Multiply the position counts by the counting principle.",
          "m": "$$N=n(n-1)\\cdots(n-r+1)$$",
          "meaning": "Every ordered list follows one path through these choices."
        },
        {
          "why": "Factorial n! means the product of all integers from n down to 1.",
          "m": "$$n!=[n(n-1)\\cdots(n-r+1)](n-r)!$$",
          "meaning": "The unused final factors are precisely (n−r)!."
        },
        {
          "why": "Divide by the unused product, which is positive.",
          "m": "$$N=\\frac{n!}{(n-r)!}$$",
          "meaning": "For n=5,r=2, this is 5!/3!=5·4=20."
        },
        {
          "why": "For a full arrangement r=n; for r=0 there is one empty list.",
          "m": "$$N_{r=n}=n!,\\qquad 0!=1$$",
          "meaning": "The convention 0!=1 makes the same formula work at both endpoints."
        }
      ],
      "ends": "There are n! full orders and n!/(n−r)! ordered selections."
    },
    "cards": [
      {
        "q": "How many ways to order r distinct objects selected from n?",
        "a": "$n!/(n-r)!$, for $0\\le r\\le n$. For all $n$, this is $n!$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.3, permutation rule, PDF p. 20."
  },
  {
    "id": "c.prob.1.3.2",
    "sec": "1.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Permutations with repeated indistinguishable objects",
    "oneLine": "When equal copies look the same, divide out the orders that cannot be seen.",
    "statement": "<p><b>Statement:</b> Given $n$ total objects partitioned into $k$ distinct types, where type $j$ contains $n_j$ identical, indistinguishable items such that $\\sum_{j=1}^k n_j = n$, the number of distinguishable linear permutations is:$$N = \\frac{n!}{n_1! \\, n_2! \\cdots n_k!} = \\binom{n}{n_1, n_2, \\ldots, n_k}$$</p><p><b>Mathematical terms:</b> $n$ is the total sequence length; $k$ is the number of distinct item categories; $n_j \\ge 0$ is the multiplicity of identical items of type $j$; $n_j!$ is the internal permutation count of identical items of type $j$.</p><p><b>Reason:</b> If all $n$ items were temporarily assigned unique identifiers, there would be $n!$ distinct permutations. However, within any visible arrangement, permuting the $n_j$ identical items among their occupied positions produces identical visible sequences. Because permutations among different types are independent, each distinguishable arrangement is counted exactly $\\prod_{j=1}^k n_j!$ times. Dividing $n!$ by this uniform overcount gives the true number of distinguishable arrangements.</p>",
    "intuition": "For the word LEVEL, first pretend every copy of L and E has a tiny identifying sticker. Then erase the stickers: swapping identical copies did not make a visibly new word, so divide by the number of sticker arrangements that look the same.",
    "needs": [
      "c.prob.1.3.1"
    ],
    "traps": [
      "Use this formula only for indistinguishable copies; distinct people from the same country remain distinct unless the outcome records nationality alone.",
      "Do not divide by multiplicity factorials if the objects are individually distinguishable in the experiment."
    ],
    "proof": {
      "idea": "Give identical copies temporary labels, then remove the resulting repeated counts.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let type j have n_j copies; altogether there are n objects.",
          "m": "$$n_1+\\cdots+n_k=n$$",
          "meaning": "Types differ visibly, but copies of one type do not."
        },
        {
          "why": "Temporarily label every copy so all n objects become distinct.",
          "m": "$$N_{\\text{labeled}}=n!$$",
          "meaning": "The ordinary permutation rule now applies."
        },
        {
          "why": "Fix one visible arrangement and permute only the labels of type j.",
          "m": "$$n_j!$$",
          "meaning": "All these assignments leave the visible type in every position unchanged."
        },
        {
          "why": "Choose label assignments for every type independently as a counting task.",
          "m": "$$D=n_1!\\cdots n_k!$$",
          "meaning": "Each visible arrangement has exactly D labeled versions."
        },
        {
          "why": "If V is the number of visible arrangements, counting labeled versions gives an equation.",
          "m": "$$VD=n!$$",
          "meaning": "This is division of equally sized groups, rather than a guessed correction."
        },
        {
          "why": "Solve that equation for V.",
          "m": "$$V=\\frac{n!}{n_1!\\cdots n_k!}$$",
          "meaning": "For AAB, the 6 labeled orders form 3 groups of 2, giving 3 visible strings."
        }
      ],
      "ends": "Divide by internal permutations only when the copies are indistinguishable in the recorded outcome."
    },
    "cards": [
      {
        "q": "How many arrangements of n objects with multiplicities $n_1,\\ldots,n_k$?",
        "a": "$n!/(n_1!\\cdots n_k!)$, where the repeated items of each class are indistinguishable.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.3, Example 3d and general rule, PDF pp. 20–21."
  },
  {
    "id": "c.prob.1.4.1",
    "sec": "1.4",
    "kind": "definition",
    "tier": "core",
    "title": "Combinations and binomial coefficients",
    "oneLine": "Choosing a group ignores the order in which its members were picked.",
    "statement": "<p><b>Statement:</b> The number of unordered subsets of size $r$ chosen from a set of $n$ distinct elements ($0 \\le r \\le n$) without replacement is the binomial coefficient:$$\\binom{n}{r} = \\frac{P(n, r)}{r!} = \\frac{n!}{r! \\, (n-r)!}$$with boundary conditions $\\binom{n}{0} = \\binom{n}{n} = 1$ and $\\binom{n}{r} = 0$ for $r < 0$ or $r > n$.</p><p><b>Mathematical terms:</b> $n$ is the pool size; $r$ is the subset size; $\\binom{n}{r}$ (read \"$n$ choose $r$\") is the combination count; $r!$ is the number of distinct orderings of any fixed subset of size $r$.</p><p><b>Reason:</b> There are $P(n,r) = \\frac{n!}{(n-r)!}$ ways to select and order $r$ elements from $n$. Because a combination disregards the internal order of selection, and every subset of size $r$ can be ordered in exactly $r!$ distinct ways, each unique subset is overcounted exactly $r!$ times in the ordered list. Dividing the ordered count by $r!$ yields $\\frac{n!}{r!(n-r)!}$.</p>",
    "intuition": "A committee of 3 classmates is a group, not a lineup: choosing Ana, Bo, and Chen gives the same committee in any order. Count the lineups first, then divide away the 3! ways to rearrange the same group.",
    "needs": [
      "c.prob.1.3.1"
    ],
    "traps": [
      "First decide whether the outcome is a subset/group or an ordered list.",
      "For a committee with composition constraints, multiply independent group choices; do not permute members within each group."
    ],
    "proof": {
      "idea": "Count ordered selections first; each unordered group produces the same number of orders.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A combination records a group of r objects from n distinct objects.",
          "m": "$$0\\le r\\le n$$",
          "meaning": "ABC and BAC describe the same group."
        },
        {
          "why": "Choose and order the r objects without replacement.",
          "m": "$$N_{\\text{ordered}}=n(n-1)\\cdots(n-r+1)$$",
          "meaning": "Position by position, the choice counts decrease by one."
        },
        {
          "why": "Write the product using factorial cancellation.",
          "m": "$$N_{\\text{ordered}}=\\frac{n!}{(n-r)!}$$",
          "meaning": "The final n−r factors of n! are not used."
        },
        {
          "why": "One fixed r-object group can be placed in r! different orders.",
          "m": "$$N_{\\text{ordered}}=r!N_{\\text{groups}}$$",
          "meaning": "Every group has the same size r, so the overcount is uniform."
        },
        {
          "why": "Divide both sides by r!.",
          "m": "$$\\binom nr=N_{\\text{groups}}=\\frac{n!}{r!(n-r)!}$$",
          "meaning": "The symbol binomial n choose r names this group count."
        },
        {
          "why": "Check a small example directly.",
          "m": "$$\\binom42=\\frac{4\\cdot3}{2\\cdot1}=6$$",
          "meaning": "The pairs are AB, AC, AD, BC, BD and CD."
        }
      ],
      "ends": "The endpoint values are n choose 0 = n choose n = 1: the empty group and the full group are unique."
    },
    "cards": [
      {
        "q": "Define $\\binom nr$ combinatorially and give its formula.",
        "a": "It counts r-element subsets of an n-element set: $\\binom nr=n!/[r!(n-r)!]$ for $0\\le r\\le n$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.4, combinations, PDF p. 22."
  },
  {
    "id": "c.prob.1.4.2",
    "sec": "1.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Pascal identity and binomial theorem",
    "oneLine": "Split groups into those containing one chosen object and those leaving it out.",
    "statement": "<p><b>Statement:</b> For integers $1 \\le r \\le n$, the binomial coefficients satisfy Pascal's recurrence:$$\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$$and generate the polynomial coefficients in the Binomial Theorem for any real or complex $x, y$ and $n \\in \\mathbb{N}_0$:$$(x+y)^n = \\sum_{k=0}^n \\binom{n}{k} x^k y^{n-k}$$</p><p><b>Mathematical terms:</b> $\\binom{n}{r}$ is the combination coefficient; $n-1$ represents the reduced sub-collection after fixing one element; $k$ indexes the number of factors contributing $x$ in the algebraic expansion of $(x+y)^n$.</p><p><b>Reason:</b> To prove Pascal's identity combinatorially, fix a specific element $\\omega \\in S$. Every $r$-subset either contains $\\omega$ (requiring $r-1$ more elements chosen from the remaining $n-1$, giving $\\binom{n-1}{r-1}$ ways) or excludes $\\omega$ (requiring all $r$ elements chosen from the remaining $n-1$, giving $\\binom{n-1}{r}$ ways). Because these two cases are mutually exclusive and exhaustive, their counts add. In the binomial theorem, expanding $(x+y)^n = (x+y)\\cdots(x+y)$ requires choosing $x$ from $k$ factors and $y$ from the remaining $n-k$ factors; the number of ways to pick which $k$ factors contribute $x$ is precisely $\\binom{n}{k}$.</p>",
    "intuition": "To build a group of r people from n, either the group includes one particular person or it does not; those two cases make Pascal’s rule. In (x+y)^n, each term records which of the n factors supplied x and which supplied y.",
    "needs": [
      "c.prob.1.4.1"
    ],
    "traps": [
      "In Pascal’s identity, the first term counts subsets containing the fixed element.",
      "The coefficient of $x^k y^{n-k}$ is $\\binom nk$, not $\\binom n{k-1}$."
    ],
    "proof": {
      "idea": "Use two disjoint cases for Pascal’s identity, and distributive multiplication for the binomial theorem.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Choose r objects from n and distinguish one particular object.",
          "m": "$$1\\le r\\le n-1$$",
          "meaning": "Every group either contains that object or omits it."
        },
        {
          "why": "If the object is included, select the other r−1 objects from the other n−1.",
          "m": "$$N_{\\text{in}}=\\binom{n-1}{r-1}$$",
          "meaning": "The distinguished object has already been chosen."
        },
        {
          "why": "If it is omitted, all r objects must come from the other n−1.",
          "m": "$$N_{\\text{out}}=\\binom{n-1}{r}$$",
          "meaning": "These groups cannot overlap the included case."
        },
        {
          "why": "Add the two cases to count all groups.",
          "m": "$$\\binom nr=\\binom{n-1}{r-1}+\\binom{n-1}{r}$$",
          "meaning": "This is Pascal’s identity; endpoint cases can use out-of-range coefficients equal to zero."
        },
        {
          "why": "Write a power as n identical factors and use the distributive law.",
          "m": "$$(x+y)^n=(x+y)\\cdots(x+y)$$",
          "meaning": "Each expanded term chooses either x or y from each factor."
        },
        {
          "why": "To obtain x^k y^{n−k}, choose which k factors supply x.",
          "m": "$$\\binom nk x^ky^{n-k}$$",
          "meaning": "All those choices yield the same monomial, so their count becomes its coefficient."
        },
        {
          "why": "Sum over all possible counts k of x choices.",
          "m": "$$(x+y)^n=\\sum_{k=0}^n\\binom nkx^ky^{n-k}$$",
          "meaning": "For n=2 the choices xx, xy, yx, yy give x²+2xy+y²."
        }
      ],
      "ends": "Both identities come from counting complete, disjoint possibilities."
    },
    "cards": [
      {
        "q": "State Pascal’s identity and the binomial theorem.",
        "a": "$\\binom nr=\\binom{n-1}{r-1}+\\binom{n-1}r$; $(x+y)^n=\\sum_{k=0}^n\\binom nkx^ky^{n-k}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.4, Eq. (4.1), Theorem (4.2), PDF p. 23."
  },
  {
    "id": "c.prob.1.5.1",
    "sec": "1.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Multinomial coefficients and theorem",
    "oneLine": "Make named groups of fixed sizes by counting the assignments to them.",
    "statement": "<p><b>Statement:</b> The number of ways to partition a set of $n$ distinct items into $r$ distinct, labeled compartments of specified sizes $n_1, n_2, \\ldots, n_r$ (where each $n_i \\ge 0$ and $\\sum_{i=1}^r n_i = n$) is given by the multinomial coefficient:$$\\binom{n}{n_1, n_2, \\ldots, n_r} = \\frac{n!}{n_1! \\, n_2! \\cdots n_r!}$$which forms the expansion coefficient in the Multinomial Theorem: $(x_1 + \\cdots + x_r)^n = \\sum_{n_1+\\cdots+n_r=n} \\binom{n}{n_1,\\ldots,n_r} \\prod_{i=1}^r x_i^{n_i}$.</p><p><b>Mathematical terms:</b> $n$ is the total item count; $r$ is the number of labeled recipient groups; $n_i$ is the exact size allocated to group $i$; $\\sum_{n_1+\\cdots+n_r=n}$ sums over all non-negative integer partitions of $n$.</p><p><b>Reason:</b> Select $n_1$ items for group 1 in $\\binom{n}{n_1}$ ways. From the remaining $n - n_1$ items, select $n_2$ items for group 2 in $\\binom{n-n_1}{n_2}$ ways, continuing sequentially. Multiplying these binomial coefficients produces telescoping factorial cancellations: $\\frac{n!}{n_1!(n-n_1)!} \\cdot \\frac{(n-n_1)!}{n_2!(n-n_1-n_2)!} \\cdots \\frac{n_r!}{n_r!0!} = \\frac{n!}{n_1! n_2! \\cdots n_r!}$. In the algebraic product $(x_1+\\cdots+x_r)^n$, the coefficient of $\\prod x_i^{n_i}$ is the number of ways to select $x_i$ from $n_i$ brackets across the $n$ factors.</p>",
    "intuition": "Suppose 10 students are assigned to named groups with sizes 4, 3, and 3. Write each student’s group letter beside their name; the multinomial number counts the different label strings with exactly those group sizes. The expansion formula counts the same choices while tracking each group’s variable.",
    "needs": [
      "c.prob.1.3.2",
      "c.prob.1.4.2"
    ],
    "traps": [
      "Groups are labeled when their roles differ (e.g. team A and team B); if the groups themselves are interchangeable, divide for that symmetry separately.",
      "The sum in the theorem ranges over nonnegative integer compositions of n."
    ],
    "proof": {
      "idea": "Assign labeled objects to groups, then use the same count in an algebraic expansion.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "There are n distinct objects and r labeled groups of specified sizes.",
          "m": "$$n_1+\\cdots+n_r=n$$",
          "meaning": "The group labels distinguish assignments, even if sizes agree."
        },
        {
          "why": "Choose the first group, then the second from the remaining objects, and continue.",
          "m": "$$\\binom n{n_1}\\binom{n-n_1}{n_2}\\cdots\\binom{n_r}{n_r}$$",
          "meaning": "The final group is forced; its binomial coefficient is 1."
        },
        {
          "why": "Expand each choosing coefficient into factorials.",
          "m": "$$\\frac{n!}{n_1!(n-n_1)!}\\frac{(n-n_1)!}{n_2!(n-n_1-n_2)!}\\cdots$$",
          "meaning": "Each remaining-population factorial cancels with the numerator of the next factor."
        },
        {
          "why": "After cancellation only n! and the group-size factorials remain.",
          "m": "$$N=\\frac{n!}{n_1!\\cdots n_r!}$$",
          "meaning": "This is the multinomial coefficient for these specified sizes."
        },
        {
          "why": "Expand n factors, choosing one variable from each factor.",
          "m": "$$(x_1+\\cdots+x_r)^n$$",
          "meaning": "Assigning a factor to variable x_j is the same as assigning an object to group j."
        },
        {
          "why": "For specified choice counts, collect identical monomials.",
          "m": "$$\\frac{n!}{n_1!\\cdots n_r!}x_1^{n_1}\\cdots x_r^{n_r}$$",
          "meaning": "The coefficient counts all assignments producing that monomial."
        },
        {
          "why": "Add the terms for every nonnegative size list summing to n.",
          "m": "$$(x_1+\\cdots+x_r)^n=\\sum_{n_1+\\cdots+n_r=n}\\frac{n!}{n_1!\\cdots n_r!}\\prod_{j=1}^r x_j^{n_j}$$",
          "meaning": "Every expanded term has exactly one such list, so none is missed or counted twice."
        }
      ],
      "ends": "Labeled groups use the multinomial count; unordered groups may need a further correction that must be justified separately."
    },
    "cards": [
      {
        "q": "State the multinomial coefficient and theorem.",
        "a": "For $\\sum n_i=n$, $\\binom{n}{n_1,\\ldots,n_r}=n!/(\\prod n_i!)$ and $(\\sum_i x_i)^n=\\sum_{\\sum n_i=n}\\binom{n}{n_1,\\ldots,n_r}\\prod_i x_i^{n_i}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.5, Multinomial Coefficients and theorem, PDF pp. 25–26."
  },
  {
    "id": "c.prob.1.6.1",
    "sec": "1.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Stars and bars: nonnegative integer solutions",
    "oneLine": "Use stars for the objects and bars to divide them among the groups.",
    "statement": "<p><b>Statement:</b> The number of distinct non-negative integer solutions to the Diophantine equation:$$x_1 + x_2 + \\cdots + x_r = n, \\quad x_i \\in \\mathbb{N}_0$$representing the distribution of $n$ indistinguishable items into $r$ distinguishable bins is:$$N = \\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}$$If each bin must receive at least one item ($x_i \\ge 1$, positive integers with $n \\ge r$), the count is $\\binom{n-1}{r-1}$.</p><p><b>Mathematical terms:</b> $n$ is the count of identical objects (stars); $r$ is the number of distinct bins; $r-1$ is the number of separators (bars); $x_i$ is the non-negative integer assigned to bin $i$.</p><p><b>Reason:</b> Represent each object as a star ($\\star$) and the separation between bins as a bar ($|$). Distributing $n$ stars among $r$ bins requires $r-1$ bars to delimit the $r$ regions. Any solution corresponds bijectively to an arrangement of $n$ stars and $r-1$ bars in a total of $n + r - 1$ linear positions. Choosing the positions of the $r-1$ bars from the $n + r - 1$ available slots yields $\\binom{n+r-1}{r-1}$. For strictly positive solutions ($x_i \\ge 1$), placing $n$ stars creates $n-1$ internal gaps; choosing $r-1$ gaps to hold bars so no two bars are adjacent gives $\\binom{n-1}{r-1}$.</p>",
    "intuition": "Stars and bars turns a pile of identical objects into gaps: 7 identical candies shared among 3 kids can be shown as 7 stars separated by 2 bars. An empty gap means a child gets zero; for a positive share, give each child one candy first.",
    "needs": [
      "c.prob.1.4.1"
    ],
    "traps": [
      "Nonnegative allows zero and uses $n+r-1$ positions; positive requires $n\\ge r$ and uses $n-1$ separators positions.",
      "Stars and bars counts solutions, not permutations of indistinguishable objects."
    ],
    "proof": {
      "idea": "Encode each allocation by a row of stars separated by bars.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let x_j be the number of identical units in box j, with r≥1 and n≥0.",
          "m": "$$x_1+\\cdots+x_r=n,\\quad x_j\\ge0$$",
          "meaning": "The boxes are labeled, but the units are not."
        },
        {
          "why": "Write x_1 stars, a bar, x_2 stars, and so on.",
          "m": "$$\\underbrace{*\\cdots*}_{x_1}|\\underbrace{*\\cdots*}_{x_2}|\\cdots|\\underbrace{*\\cdots*}_{x_r}$$",
          "meaning": "Adjacent bars or a bar at an end give an empty box."
        },
        {
          "why": "Count the symbols in this row.",
          "m": "$$n+(r-1)=n+r-1$$",
          "meaning": "There are n stars and r−1 separators."
        },
        {
          "why": "Choosing the separator positions fixes every star position.",
          "m": "$$N=\\binom{n+r-1}{r-1}$$",
          "meaning": "Reading counts between the bars recovers exactly one allocation; the encoding works both ways."
        },
        {
          "why": "For positive box sizes, first put one unit in every box.",
          "m": "$$y_j=x_j-1\\ge0,\\quad\\sum_j y_j=n-r$$",
          "meaning": "This subtraction turns a positive-size problem into the nonnegative one."
        },
        {
          "why": "Apply the previous formula to n−r remaining units.",
          "m": "$$N_+=\\binom{(n-r)+r-1}{r-1}=\\binom{n-1}{r-1}$$",
          "meaning": "This requires n≥r; otherwise positive allocations are impossible."
        }
      ],
      "ends": "The formula counts integer allocations, not permutations of distinguishable objects."
    },
    "cards": [
      {
        "q": "How many nonnegative integer solutions to $x_1+\\cdots+x_r=n$?",
        "a": "$\\binom{n+r-1}{r-1}$. For positive solutions (when $n\\ge r$), $\\binom{n-1}{r-1}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.6, Propositions 6.1–6.2, PDF pp. 27–28."
  },
  {
    "id": "c.prob.1.5.2",
    "sec": "1.5",
    "kind": "technique",
    "tier": "core",
    "title": "Labeled groups versus unlabeled partitions",
    "oneLine": "If the groups have no names or different jobs, remove repeated group labelings.",
    "statement": "<p><b>Statement:</b> When partitioning $n = rm$ distinct objects into $r$ groups of equal size $m$ ($m \\ge 1$):<br>(1) If the groups are <b>labeled</b> (distinguishable by name or role), the count is the multinomial coefficient $\\frac{n!}{(m!)^r}$.<br>(2) If the groups are <b>unlabeled</b> (indistinguishable partitions where order of groups does not matter), the count is:$$N_{\\text{unlabeled}} = \\frac{n!}{(m!)^r \\, r!}$$</p><p><b>Mathematical terms:</b> $n$ is total distinct items; $r$ is the number of groups; $m$ is the uniform group size ($n = rm$); $(m!)^r$ accounts for internal orderings within each group; $r!$ accounts for external permutations among the identical-sized groups.</p><p><b>Reason:</b> Every unlabeled partition into $r$ equal-sized subsets corresponds to exactly $r!$ distinct assignments of labels (e.g. Group A, Group B, ...) to the subsets. Because all $r$ subsets have identical cardinality $m$, any permutation of the group labels produces a valid, distinct labeled assignment of the same underlying partition. Dividing the labeled multinomial count by $r!$ removes this uniform external labeling symmetry.</p>",
    "intuition": "Ask whether the group names matter. “Red team” and “Blue team” are different assignments when the labels are part of the result; if only the two piles matter, swapping their names describes the same split and must be divided out.",
    "needs": [
      "c.prob.1.5.1"
    ],
    "traps": [
      "Divide by $r!$ only when all group labels are interchangeable and the group sizes are equal.",
      "If groups have different sizes, the size itself identifies each block, so there is no additional symmetry factor for swapping roles of different sizes."
    ],
    "cards": [
      {
        "q": "How do you count an unlabeled partition into r equal-sized groups of size m?",
        "a": "Count labeled groups by $n!/((m!)^r)$ and divide by $r!$, giving $n!/((m!)^r r!)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.5, Examples 5b–5c, PDF p. 25.",
    "proof": {
      "idea": "Explain exactly when forgetting group labels produces an equal overcount.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "First assign n distinct objects to labeled groups of specified sizes.",
          "m": "$$N_{\\text{labeled}}=\\frac{n!}{\\prod_jn_j!}$$",
          "meaning": "Internal order is irrelevant, so each group-size factorial removes repeated object orders."
        },
        {
          "why": "If k groups all have the same positive size, forget their labels.",
          "m": "$$k!\\text{ labelings per unlabeled partition}$$",
          "meaning": "Distinct nonempty groups can receive the k labels in every order."
        },
        {
          "why": "The labeled partitions therefore fall into equal groups of k! versions.",
          "m": "$$N_{\\text{unlabeled}}=N_{\\text{labeled}}/k!$$",
          "meaning": "Division is justified by the equal number of versions, not by the mere presence of k groups."
        },
        {
          "why": "If positive group sizes differ, a group’s size already identifies its size role.",
          "m": "$$n_1\\ne n_2\\ \\Longrightarrow\\ \\text{no extra factor }2!\\text{ for those roles}$$",
          "meaning": "Swapping a small and a large group changes the labeled-size requirements."
        },
        {
          "why": "For repeated positive sizes, let m_s count how many groups have size s.",
          "m": "$$N_{\\text{unlabeled, fixed sizes}}=\\frac{n!}{\\prod_jn_j!\\prod_sm_s!}$$",
          "meaning": "Only labels attached to equal-sized groups can be interchanged while preserving the size specification. Empty groups require separate care because they are not distinct blocks."
        }
      ],
      "ends": "Always identify the exact equal-size labeling multiplicity before dividing an assignment count."
    }
  },
  {
    "id": "c.prob.1.6.2",
    "sec": "1.6",
    "kind": "technique",
    "tier": "core",
    "title": "Allocations with minimum requirements",
    "oneLine": "Give each group its required minimum first, then share what remains.",
    "statement": "<p><b>Statement:</b> For integer lower bounds $a_1, \\ldots, a_r \\ge 0$, the number of integer solutions to $x_1 + \\cdots + x_r = n$ subject to $x_i \\ge a_i$ for each $i \\in \\{1, \\ldots, r\\}$ is:$$N = \\binom{n - \\sum_{i=1}^r a_i + r - 1}{r - 1}$$provided $n \\ge \\sum_{i=1}^r a_i$; otherwise $N = 0$.</p><p><b>Mathematical terms:</b> $a_i$ is the minimum quota assigned to group $i$; $\\sum a_i$ is the total required minimum allocation; $y_i = x_i - a_i \\ge 0$ represents the surplus allocated to group $i$; $n - \\sum a_i$ is the remaining discretionary amount.</p><p><b>Reason:</b> Define the change of variables $y_i = x_i - a_i$. Since $x_i \\ge a_i$, each $y_i$ is a non-negative integer ($y_i \\in \\mathbb{N}_0$). Substituting $x_i = y_i + a_i$ into the sum gives $\\sum_{i=1}^r (y_i + a_i) = n$, which simplifies to $\\sum_{i=1}^r y_i = n - \\sum_{i=1}^r a_i$. This is an unconstrained non-negative Diophantine equation with total $n^\\prime = n - \\sum a_i$. Applying standard stars and bars to $n^\\prime$ and $r$ gives $\\binom{n^\\prime + r - 1}{r - 1}$.</p>",
    "intuition": "If each of 4 jars must get at least 2 marbles, put 2 in every jar first. Then count only how the leftover marbles can move among the jars; this one-to-one change of variables makes the minimum rule disappear.",
    "needs": [
      "c.prob.1.6.1"
    ],
    "traps": [
      "The shift changes the right-hand side by the sum of all minima.",
      "Stars and bars does not enforce upper bounds; additional work is needed when a coordinate has a maximum."
    ],
    "cards": [
      {
        "q": "How many solutions to $x_i\\ge a_i$ and $\\sum_i x_i=n$?",
        "a": "For $n\\ge\\sum_i a_i$, shift $y_i=x_i-a_i\\ge0$ and count $\\binom{n-\\sum_i a_i+r-1}{r-1}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §1.6, Examples 6b–6c, PDF pp. 28–29.",
    "proof": {
      "idea": "Remove the minimum required allocation before applying stars and bars.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let box j require at least a_j units, where each a_j is a nonnegative integer.",
          "m": "$$x_j\\ge a_j,\\quad\\sum_{j=1}^rx_j=n$$",
          "meaning": "Units are identical and boxes are labeled."
        },
        {
          "why": "Give every box its minimum allocation first.",
          "m": "$$y_j=x_j-a_j\\ge0$$",
          "meaning": "This subtraction is reversible: x_j=y_j+a_j."
        },
        {
          "why": "Sum the residual counts.",
          "m": "$$\\sum_jy_j=n-\\sum_ja_j=M$$",
          "meaning": "M is the number of units left to distribute freely."
        },
        {
          "why": "If M<0, there are not enough units even for the minima.",
          "m": "$$M<0\\ \\Longrightarrow\\ N=0$$",
          "meaning": "No nonnegative residual solution can have a negative sum."
        },
        {
          "why": "If M≥0, apply the nonnegative stars-and-bars formula.",
          "m": "$$N=\\binom{M+r-1}{r-1}$$",
          "meaning": "The residual allocation is in one-to-one correspondence with the original constrained allocation."
        },
        {
          "why": "For n=10 and three boxes each needing 2, only four units remain.",
          "m": "$$M=10-6=4,\\quad N=\\binom62=15$$",
          "meaning": "Minimum requirements change the total available stars, not the number of boxes."
        }
      ],
      "ends": "Shifting by each minimum reduces the problem to ordinary nonnegative allocations."
    }
  }
]
);
