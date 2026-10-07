var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.2.1.1",
    "sec": "2.1",
    "kind": "definition",
    "tier": "core",
    "title": "Probability model begins with outcomes",
    "oneLine": "Decide exactly what one outcome records before assigning probabilities.",
    "statement": "<p><b>Statement:</b> A probabilistic model for a random experiment is specified by the probability triple $(\\Omega, \\mathcal{F}, P)$, where $\\Omega$ (or $S$) is the sample space of elementary outcomes $\\omega$, $\\mathcal{F}$ is a $\\sigma$-algebra of events (subsets of $\\Omega$), and $P: \\mathcal{F} \\to [0, 1]$ is a probability measure assigning consistent likelihoods to events.</p><p><b>Mathematical terms:</b> $\\Omega$ (or $S$) is the non-empty set of all possible outcomes $\\omega$; an elementary outcome $\\omega \\in \\Omega$ is an indivisible single result of the trial; an event $E \\in \\mathcal{F}$ is a subset of $\\Omega$; $\\mathcal{F}$ is the event space containing $\\varnothing$, closed under complements and countable unions; $P$ is the probability measure.</p><p><b>Reason:</b> A well-defined experiment requires an unambiguous specification of what constitutes a complete result before probabilities can be evaluated. Different outcome descriptions (e.g., ordered pairs vs. uncoordinated totals) define different sample spaces $\\Omega$, but every valid mathematical description must assign identical probabilities to identical physical events to preserve consistency.</p>",
    "intuition": "Before asking for a chance, write down what one full result looks like. For two named coin tosses, HH, HT, TH, and TT keep the toss positions visible; if the question cares about which toss was heads, combining HT and TH too early loses useful information.",
    "needs": [],
    "traps": [
      "Do not start counting before deciding what constitutes one outcome. A die pair may be an ordered pair when the dice are distinguished."
    ],
    "cards": [
      {
        "q": "What are the two ingredients introduced before computing event probabilities?",
        "a": "A sample space of possible outcomes, and a probability assignment to events in that sample space.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.1, PDF p. 41.",
    "proof": {
      "idea": "Separate the experiment, its possible outcomes, and the probability model.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Describe what one complete run records before asking for its chance.",
          "m": "$$S=\\{\\text{all complete possible outcomes}\\}$$",
          "meaning": "This defines the sample space; it is a modeling choice."
        },
        {
          "why": "An event is a collection of outcomes answering the question.",
          "m": "$$A\\subseteq S$$",
          "meaning": "For a coin, S={H,T} and the heads event is {H}."
        },
        {
          "why": "Choose numerical probabilities consistent with the axioms.",
          "m": "$$P(A)\\ge0,\\quad P(S)=1$$",
          "meaning": "The model’s weights are assumptions or estimates, not consequences of the outcome labels alone."
        },
        {
          "why": "For a two-outcome coin write p=P(H) and use the complement rule.",
          "m": "$$P(T)=1-p$$",
          "meaning": "The two event weights sum to 1 because the events are disjoint and exhaustive."
        },
        {
          "why": "Only the additional fair-coin assumption sets p to one-half.",
          "m": "$$p=1/2\\quad\\text{if the coin is modeled as fair}$$",
          "meaning": "A biased coin has the same outcome set but different probabilities."
        }
      ],
      "ends": "Definitions specify what is recorded; assumptions specify how probability is assigned. They should not be presented as theorems proved by listing outcomes."
    }
  },
  {
    "id": "c.prob.2.2.1",
    "sec": "2.2",
    "kind": "definition",
    "tier": "core",
    "title": "Sample spaces and events",
    "oneLine": "The sample space lists everything that can happen; an event selects some of those results.",
    "statement": "<p><b>Statement:</b> The sample space $S$ is the universal set of all mutually exclusive and collectively exhaustive outcomes $\\omega$ of a random experiment. An event $E$ is a subset $E \\subseteq S$, said to occur if and only if the realized outcome $\\omega$ satisfies $\\omega \\in E$. In particular, the certain event $S$ always occurs, while the impossible event $\\varnothing$ (empty set) never occurs.</p><p><b>Mathematical terms:</b> $S$ is the universal set of outcomes; $\\omega \\in S$ is an elementary outcome; $E \\subseteq S$ is an event; $\\in$ denotes set membership; $\\varnothing$ denotes the null event with no outcomes ($|\\varnothing| = 0$).</p><p><b>Reason:</b> Formulating probability in set-theoretic terms allows logical operations (AND, OR, NOT) on experimental propositions to correspond directly to Boolean set operations (intersection, union, complement) on subsets of $S$. Because any trial must produce an outcome in $S$, $S$ always occurs; because no trial can produce an element in $\\varnothing$, $\\varnothing$ can never occur.</p>",
    "intuition": "The sample space is the full menu of outcomes; an event is the subset that answers a yes/no question. If you roll a die, “even” is {2,4,6}, while the sure event is {1,2,3,4,5,6} and the impossible one is empty.",
    "needs": [],
    "traps": [
      "A sample point is an outcome; an event can contain many outcomes, one outcome, or none.",
      "For continuous measurements, a singleton event can be nonempty even if later its probability is zero."
    ],
    "cards": [
      {
        "q": "Define a sample space and an event.",
        "a": "$S$ is the set of all possible outcomes. An event $E\\subseteq S$ occurs iff the realized outcome belongs to E.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.2, definitions and Examples 1–5, PDF pp. 42–43.",
    "proof": {
      "idea": "Translate event notation into membership of an outcome.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let s be the actual outcome from sample space S.",
          "m": "$$A\\subseteq S$$",
          "meaning": "A happens when s belongs to A."
        },
        {
          "why": "The union records that at least one of two events occurs.",
          "m": "$$s\\in A\\cup B\\ \\Longleftrightarrow\\ s\\in A\\text{ or }s\\in B$$",
          "meaning": "Or includes the possibility that both occur."
        },
        {
          "why": "The intersection records simultaneous occurrence.",
          "m": "$$s\\in A\\cap B\\ \\Longleftrightarrow\\ s\\in A\\text{ and }s\\in B$$",
          "meaning": "An outcome must satisfy both conditions."
        },
        {
          "why": "The complement records failure of an event relative to the chosen sample space.",
          "m": "$$A^c=S\\setminus A$$",
          "meaning": "Changing S can change what the complement includes."
        },
        {
          "why": "An empty intersection means the events cannot both occur.",
          "m": "$$A\\cap B=\\varnothing$$",
          "meaning": "This is mutual exclusion, which is different from probabilistic independence."
        }
      ],
      "ends": "Set operations express ordinary or, and, and failure statements about the recorded outcome."
    }
  },
  {
    "id": "c.prob.2.2.2",
    "sec": "2.2",
    "kind": "definition",
    "tier": "core",
    "title": "Event algebra and De Morgan laws",
    "oneLine": "Union means “at least one”; intersection means “both”; complement means “does not happen”.",
    "statement": "<p><b>Statement:</b> For events $E, F \\subseteq S$, Boolean set operations define compound events: union $E \\cup F$ (at least one occurs), intersection $E \\cap F$ (both occur), complement $E^c = S \\setminus E$ ($E$ does not occur), and difference $E \\setminus F = E \\cap F^c$ ($E$ occurs but not $F$). De Morgan's Laws hold for arbitrary index sets $I$:$$\\left(\\bigcup_{i \\in I} E_i\\right)^c = \\bigcap_{i \\in I} E_i^c, \\qquad \\left(\\bigcap_{i \\in I} E_i\\right)^c = \\bigcup_{i \\in I} E_i^c$$</p><p><b>Mathematical terms:</b> $\\cup$ denotes set union; $\\cap$ denotes set intersection; $E^c$ denotes complement relative to $S$; $\\setminus$ denotes set difference; mutually exclusive means $E \\cap F = \\varnothing$; subset relation $E \\subseteq F$ means occurrence of $E$ implies occurrence of $F$.</p><p><b>Reason:</b> De Morgan's first law states that the event \"not (at least one $E_i$ occurs)\" is logically equivalent to \"every $E_i$ fails to occur\", translating a negated union into an intersection of complements. The second law states that \"not (all $E_i$ occur)\" is equivalent to \"at least one $E_i$ fails to occur\", translating a negated intersection into a union of complements.</p>",
    "intuition": "For events, union means “E or F,” intersection means “both E and F,” and complement means “not E.” If E is “bus is late” and F is “it rains,” De Morgan’s rule says “neither late nor rain” means “not late and not rain.”",
    "needs": [
      "c.prob.2.2.1"
    ],
    "traps": [
      "“Or” in probability is inclusive: $E\\cup F$ includes the case where both occur.",
      "Mutually exclusive means disjoint; it does not mean statistically independent."
    ],
    "cards": [
      {
        "q": "State De Morgan’s laws for a sequence of events.",
        "a": "$(\\cup_i E_i)^c=\\cap_i E_i^c$ and $(\\cap_i E_i)^c=\\cup_i E_i^c$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.2, event operations and De Morgan laws, PDF pp. 43–47.",
    "proof": {
      "idea": "Prove De Morgan’s laws by checking membership of one arbitrary outcome.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "An outcome outside A∪B belongs to neither A nor B.",
          "m": "$$s\\in(A\\cup B)^c\\ \\Longleftrightarrow\\ s\\notin A\\text{ and }s\\notin B$$",
          "meaning": "Negating at least one means both conditions fail."
        },
        {
          "why": "Being in neither is the same as being in both complements.",
          "m": "$$(A\\cup B)^c=A^c\\cap B^c$$",
          "meaning": "The two sets have identical membership conditions for every outcome."
        },
        {
          "why": "An outcome outside A∩B fails at least one of the two membership tests.",
          "m": "$$s\\in(A\\cap B)^c\\ \\Longleftrightarrow\\ s\\notin A\\text{ or }s\\notin B$$",
          "meaning": "Negating both means at least one fails."
        },
        {
          "why": "Translate the failures into complements.",
          "m": "$$(A\\cap B)^c=A^c\\cup B^c$$",
          "meaning": "This is the second De Morgan identity."
        },
        {
          "why": "The same membership reasoning applies to any indexed family.",
          "m": "$$(\\bigcup_iA_i)^c=\\bigcap_iA_i^c,\\quad(\\bigcap_iA_i)^c=\\bigcup_iA_i^c$$",
          "meaning": "Failing every possible union member means lying in every complement; failing an intersection means at least one complement occurs."
        }
      ],
      "ends": "Set identities are proved by identical outcome membership, without assumptions about probabilities."
    }
  },
  {
    "id": "c.prob.2.3.1",
    "sec": "2.3",
    "kind": "definition",
    "tier": "core",
    "title": "Axioms of probability",
    "oneLine": "Probabilities lie between zero and one, total one, and add for events that cannot happen together.",
    "statement": "<p><b>Statement:</b> Given a sample space $S$ and an event space $\\mathcal{F}$ of subsets of $S$, a probability function $P: \\mathcal{F} \\to \\mathbb{R}$ satisfies Kolmogorov's three axioms:<br>(1) <b>Non-negativity:</b> For every event $E \\in \\mathcal{F}$, $0 \\le P(E) \\le 1$.<br>(2) <b>Normalization:</b> $P(S) = 1$.<br>(3) <b>Countable Additivity:</b> For every sequence of pairwise disjoint events $E_1, E_2, \\ldots$ (where $E_i \\cap E_j = \\varnothing$ for all $i \\ne j$):$$P\\left(\\bigcup_{i=1}^\\infty E_i\\right) = \\sum_{i=1}^\\infty P(E_i)$$</p><p><b>Mathematical terms:</b> $S$ is the sample space; $\\mathcal{F}$ is the $\\sigma$-algebra of events; $P(E)$ is the probability measure of event $E$; $E_i \\cap E_j = \\varnothing$ indicates pairwise disjoint (mutually exclusive) events; $\\bigcup_{i=1}^\\infty E_i$ is the countable union; $\\sum_{i=1}^\\infty$ is the infinite series of probabilities.</p><p><b>Reason:</b> Axiom 1 restricts probabilities to $[0, 1]$ because negative likelihood and likelihood exceeding certainty are physically and logically undefined. Axiom 2 establishes total normalization, as the experiment is certain to produce some outcome in $S$. Axiom 3 guarantees that for non-overlapping events, no outcomes are shared or double-counted, allowing the total probability of compound alternatives to equal the exact sum of individual probabilities.</p>",
    "intuition": "The probability rules keep every event’s chance between 0 and 1, make the whole sample space certain, and let us add chances for alternatives that cannot happen together. For example, a single card cannot be both a heart and a spade, so those two chances add.",
    "needs": [
      "c.prob.2.2.1"
    ],
    "traps": [
      "Axiom 3 requires disjoint events; arbitrary event probabilities cannot simply be added.",
      "Axiom 3 is countable additivity, not just finite additivity."
    ],
    "cards": [
      {
        "q": "State the three probability axioms.",
        "a": "$0\\le P(E)\\le1$; $P(S)=1$; and for pairwise disjoint $E_i$, $P(\\cup_i E_i)=\\sum_iP(E_i)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.3, three axioms, PDF pp. 48–49.",
    "proof": {
      "idea": "Explain the probability axioms and derive simple consequences without claiming to prove the axioms.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A probability model first requires nonnegative event weights.",
          "m": "$$P(A)\\ge0$$",
          "meaning": "This is an axiom: negative probability would not describe a chance."
        },
        {
          "why": "The complete list of possibilities has total probability 1.",
          "m": "$$P(S)=1$$",
          "meaning": "This normalization defines the probability scale, where 1 means certainty under the model."
        },
        {
          "why": "For a countable disjoint list of events, the assigned weight of the union is their sum.",
          "m": "$$P\\left(\\bigcup_iA_i\\right)=\\sum_iP(A_i)$$",
          "meaning": "Countable additivity is an axiom; disjoint means no outcome lies in two listed events."
        },
        {
          "why": "The empty event must have zero weight by adding it to S.",
          "m": "$$P(S)=P(S)+P(\\varnothing)\\ \\Longrightarrow\\ P(\\varnothing)=0$$",
          "meaning": "This conclusion is derived from additivity, unlike the assumed axioms themselves."
        },
        {
          "why": "Split S into A and its complement and subtract.",
          "m": "$$P(A)+P(A^c)=1\\ \\Longrightarrow\\ 0\\le P(A)\\le1$$",
          "meaning": "The upper bound follows because the complement probability is nonnegative."
        }
      ],
      "ends": "Axioms are the starting assumptions; null-event, complement and range rules are consequences of them."
    }
  },
  {
    "id": "c.prob.2.3.2",
    "sec": "2.3",
    "kind": "corollary",
    "tier": "core",
    "title": "Finite additivity and the null event",
    "oneLine": "An impossible event has probability zero; finitely many separate cases add.",
    "statement": "<p><b>Statement:</b> From Kolmogorov's axioms, the empty event has probability zero: $P(\\varnothing) = 0$. Furthermore, for any finite collection of pairwise disjoint events $E_1, \\ldots, E_n$ (where $E_i \\cap E_j = \\varnothing$ for $i \\ne j$):$$P\\left(\\bigcup_{i=1}^n E_i\\right) = \\sum_{i=1}^n P(E_i)$$</p><p><b>Mathematical terms:</b> $\\varnothing$ is the null event; $n \\in \\mathbb{N}$ is any finite integer; finite additivity is the restriction of countable additivity to finite index sets.</p><p><b>Reason:</b> Decompose $S = S \\cup \\varnothing$. Since $S \\cap \\varnothing = \\varnothing$, Axiom 3 gives $P(S) = P(S) + P(\\varnothing)$. Subtracting $P(S) = 1$ from both sides yields $P(\\varnothing) = 0$. For any finite disjoint collection $E_1, \\ldots, E_n$, define $E_k = \\varnothing$ for all $k > n$. Applying countable additivity yields $P(\\bigcup_{i=1}^n E_i) = \\sum_{i=1}^n P(E_i) + \\sum_{k=n+1}^\\infty P(\\varnothing) = \\sum_{i=1}^n P(E_i)$.</p>",
    "intuition": "The impossible event has chance zero, and chances add when events cannot overlap. “A roll is 1” and “a roll is 2” are disjoint, so either result has chance 1/6+1/6. In an infinite experiment, a nonempty event can still have probability zero, so “zero chance” need not mean “no possible outcome.”",
    "needs": [
      "c.prob.2.3.1"
    ],
    "traps": [
      "The event $\\varnothing$ has probability zero, but an event of probability zero need not be empty in an infinite model."
    ],
    "proof": {
      "idea": "Extract finite additivity from the probability axioms.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "The whole sample space S has probability 1 by the normalization axiom.",
          "m": "$$P(S)=1$$",
          "meaning": "This is an assumption of a probability model, not a theorem proved from counting."
        },
        {
          "why": "The list S, empty set, empty set, and so on consists of disjoint sets whose union is S.",
          "m": "$$S=S\\cup\\varnothing\\cup\\varnothing\\cup\\cdots$$",
          "meaning": "Empty sets contain no outcomes, so no outcome appears in two entries."
        },
        {
          "why": "Use countable additivity on that list.",
          "m": "$$1=1+\\sum_{i=2}^{\\infty}P(\\varnothing)$$",
          "meaning": "Every term on the right is nonnegative by the first axiom."
        },
        {
          "why": "A nonnegative extra term would make the right side larger than 1.",
          "m": "$$P(\\varnothing)=0$$",
          "meaning": "Subtracting the initial 1 forces every remaining term to be zero."
        },
        {
          "why": "Now let E_1 through E_n be a finite disjoint list and append empty sets.",
          "m": "$$\\bigcup_{i=1}^{\\infty}E_i=\\bigcup_{i=1}^nE_i\\quad(E_i=\\varnothing\\text{ for }i>n)$$",
          "meaning": "This gives a countably infinite list to which the axiom applies."
        },
        {
          "why": "The appended terms have zero probability, so the infinite sum reduces to a finite sum.",
          "m": "$$P\\left(\\bigcup_{i=1}^nE_i\\right)=\\sum_{i=1}^nP(E_i)$$",
          "meaning": "Only mutually exclusive events may be added this way without an overlap correction."
        }
      ],
      "ends": "The null event has probability zero, and probabilities of finite disjoint unions add."
    },
    "cards": [
      {
        "q": "What is $P(\\varnothing)$, and how does finite additivity follow?",
        "a": "$P(\\varnothing)=0$; pad any finite disjoint collection by empty events and apply countable additivity.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.3, derivation following Axiom 3, PDF p. 49."
  },
  {
    "id": "c.prob.2.4.1",
    "sec": "2.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Complement rule and monotonicity",
    "oneLine": "“Does not happen” has the leftover probability; adding possible outcomes cannot reduce probability.",
    "statement": "<p><b>Statement:</b> For any event $E \\subseteq S$, the complement rule holds: $P(E^c) = 1 - P(E)$. For any two events $E, F$:<br>(1) Difference formula: $P(E \\setminus F) = P(E \\cap F^c) = P(E) - P(E \\cap F)$.<br>(2) <b>Monotonicity:</b> If $E \\subseteq F$, then $P(E) \\le P(F)$, with $P(F \\setminus E) = P(F) - P(E) \\ge 0$.</p><p><b>Mathematical terms:</b> $E^c = S \\setminus E$ is the complement; $E \\setminus F$ is the set difference; $E \\subseteq F$ denotes that occurrence of $E$ implies occurrence of $F$; monotonicity states that larger sets have larger or equal probability.</p><p><b>Reason:</b> Decompose $S = E \\cup E^c$. Because $E$ and $E^c$ are disjoint, $P(S) = P(E) + P(E^c)$. Since $P(S) = 1$, rearranging gives $P(E^c) = 1 - P(E)$. Similarly, decompose $E = (E \\setminus F) \\cup (E \\cap F)$ into disjoint sets; additivity gives $P(E) = P(E \\setminus F) + P(E \\cap F)$. When $E \\subseteq F$, $E \\cap F = E$, so $F = E \\cup (F \\setminus E)$, which implies $P(F) = P(E) + P(F \\setminus E) \\ge P(E)$ because $P(F \\setminus E) \\ge 0$ by Axiom 1.</p>",
    "intuition": "An event and “it did not happen” split all possibilities in two, so their chances total 1. If getting 90 or more is one way to pass, then the chance of 90-or-more cannot exceed the chance of passing by any score.",
    "needs": [
      "c.prob.2.3.1"
    ],
    "traps": [
      "The complement is relative to the chosen sample space.",
      "Monotonicity follows from disjoint additivity and nonnegativity; inclusion alone is not an assertion of independence."
    ],
    "proof": {
      "idea": "Split sets into nonoverlapping pieces before adding probabilities.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "The complement E^c contains exactly the outcomes in S outside E.",
          "m": "$$E\\cap E^c=\\varnothing,\\quad E\\cup E^c=S$$",
          "meaning": "Each outcome belongs to one of the two pieces."
        },
        {
          "why": "Add their probabilities by finite additivity.",
          "m": "$$P(E)+P(E^c)=P(S)=1$$",
          "meaning": "The final equality is normalization."
        },
        {
          "why": "Subtract P(E) from both sides.",
          "m": "$$P(E^c)=1-P(E)$$",
          "meaning": "This explains why probabilities of an event and its failure sum to 1."
        },
        {
          "why": "Suppose E is contained in F; separate F into E and its extra part.",
          "m": "$$F=E\\cup(F\\setminus E)$$",
          "meaning": "The symbol setminus removes all elements of E from F."
        },
        {
          "why": "The pieces are disjoint, so add their probabilities.",
          "m": "$$P(F)=P(E)+P(F\\setminus E)$$",
          "meaning": "No overlap is counted twice."
        },
        {
          "why": "The extra piece has nonnegative probability.",
          "m": "$$P(E)\\le P(F)$$",
          "meaning": "Containment therefore gives monotonicity of probability."
        }
      ],
      "ends": "Complementation uses subtraction from 1; containment uses a nonnegative extra piece."
    },
    "cards": [
      {
        "q": "State the complement and monotonicity rules.",
        "a": "$P(E^c)=1-P(E)$; if $E\\subseteq F$, then $P(E)\\le P(F)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.4, Propositions 4.1–4.2, PDF p. 51."
  },
  {
    "id": "c.prob.2.4.2",
    "sec": "2.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Inclusion–exclusion",
    "oneLine": "Add the two probabilities, then subtract the overlap counted twice.",
    "statement": "<p><b>Statement:</b> For any two events $E$ and $F$, the probability of their union is:$$P(E \\cup F) = P(E) + P(F) - P(E \\cap F)$$</p><p>More generally, for any $n$ events $E_1, \\ldots, E_n$, the Principle of Inclusion-Exclusion states:$$P\\left(\\bigcup_{i=1}^n E_i\\right) = \\sum_{i=1}^n P(E_i) - \\sum_{1 \\le i < j \\le n} P(E_i \\cap E_j) + \\cdots + (-1)^{n+1} P(E_1 \\cap \\cdots \\cap E_n)$$</p><p><b>Mathematical terms:</b> $E \\cup F$ is the union event; $E \\cap F$ is the joint occurrence; the sums run over all subsets of indices of sizes $1, 2, \\ldots, n$; $(-1)^{k+1}$ provides the alternating signs for intersections of $k$ events.</p><p><b>Reason:</b> Express $E \\cup F$ as the disjoint union of $E$ and $F \\setminus E = F \\cap E^c$. Then $P(E \\cup F) = P(E) + P(F \\setminus E) = P(E) + [P(F) - P(E \\cap F)]$. In the general $n$-event expansion, any outcome belonging to exactly $m \\ge 1$ of the events is counted $\\sum_{k=1}^m (-1)^{k+1} \\binom{m}{k} = 1 - (1 - 1)^m = 1$ time, ensuring every outcome in the union is counted with net weight exactly 1.</p>",
    "intuition": "When you add the chances of “takes the bus” and “takes the train,” anyone who uses both got counted twice. Subtract that overlap once. With more events, the same correction continues through triple overlaps, four-way overlaps, and so on.",
    "needs": [
      "c.prob.2.4.1"
    ],
    "traps": [
      "For disjoint events the intersection term vanishes. For overlapping events, plain addition double-counts shared outcomes.",
      "For exactly one of E,F, use $P(E)+P(F)-2P(EF)$; this differs from the union."
    ],
    "proof": {
      "idea": "Correct double counts, then check the general formula one outcome at a time.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Split the union into all of E and only the part of F outside E.",
          "m": "$$P(E\\cup F)=P(E)+P(F\\setminus E)$$",
          "meaning": "These are disjoint pieces, so their probabilities add."
        },
        {
          "why": "Split F into the overlapping and nonoverlapping parts.",
          "m": "$$P(F)=P(E\\cap F)+P(F\\setminus E)$$",
          "meaning": "These parts also form a disjoint union."
        },
        {
          "why": "Solve the second equation for the outside part and substitute into the first.",
          "m": "$$P(E\\cup F)=P(E)+P(F)-P(E\\cap F)$$",
          "meaning": "Adding P(E) and P(F) counted the overlap twice; subtraction leaves it once."
        },
        {
          "why": "For m events, let a particular outcome occur in exactly k of them.",
          "m": "$$\\binom k1-\\binom k2+\\cdots+(-1)^{k+1}\\binom kk$$",
          "meaning": "It appears in each j-fold intersection exactly k choose j times."
        },
        {
          "why": "Expand (1−1)^k by the binomial theorem when k≥1.",
          "m": "$$0=1+\\sum_{j=1}^k(-1)^j\\binom kj$$",
          "meaning": "This is an algebraic identity already established in Chapter 1."
        },
        {
          "why": "Move 1 to the left and change signs.",
          "m": "$$\\sum_{j=1}^k(-1)^{j+1}\\binom kj=1$$",
          "meaning": "Each outcome inside the union has net coefficient 1; outcomes outside have coefficient 0."
        },
        {
          "why": "Average this identity of membership flags over outcomes.",
          "m": "$$P\\left(\\bigcup_{i=1}^mE_i\\right)=\\sum_{\\varnothing\\ne I\\subseteq\\{1,\\ldots,m\\}}(-1)^{|I|+1}P\\left(\\bigcap_{i\\in I}E_i\\right)$$",
          "meaning": "A membership flag averages to its event probability; the finite sum can be distributed."
        }
      ],
      "ends": "Inclusion–exclusion counts every outcome of a finite union exactly once."
    },
    "cards": [
      {
        "q": "State inclusion–exclusion for two events.",
        "a": "$P(E\\cup F)=P(E)+P(F)-P(E\\cap F)$.",
        "kind": "state"
      },
      {
        "q": "What sign pattern occurs in finite inclusion–exclusion?",
        "a": "Add singles, subtract pairs, add triples, and continue alternating through the full intersection with sign $(-1)^{n+1}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.4, Propositions 4.3–4.4, PDF pp. 51–54."
  },
  {
    "id": "c.prob.2.5.1",
    "sec": "2.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Uniform finite sample spaces",
    "oneLine": "With equally likely results, probability is the fraction that answers your question.",
    "statement": "<p><b>Statement:</b> In a finite sample space $S$ with $|S| = N$ where every elementary outcome $\\omega \\in S$ has equal probability $P(\\{\\omega\\}) = 1/N$, the probability of any event $E \\subseteq S$ is the ratio of cardinalities:$$P(E) = \\frac{|E|}{|S|} = \\frac{|E|}{N}$$</p><p><b>Mathematical terms:</b> $N = |S|$ is the total number of elementary outcomes; $|E|$ is the number of outcomes favorable to $E$; uniform distribution means $P(\\{\\omega_1\\}) = \\cdots = P(\\{\\omega_N\\}) = 1/N$.</p><p><b>Reason:</b> Normalization requires $\\sum_{\\omega \\in S} P(\\{\\omega\\}) = N \\cdot p = 1$, forcing the individual outcome probability $p = 1/N$. Because $E$ is the finite disjoint union of its individual points $E = \\bigcup_{\\omega \\in E} \\{\\omega\\}$, finite additivity yields $P(E) = \\sum_{\\omega \\in E} P(\\{\\omega\\}) = |E| \\cdot (1/N) = |E|/N$.</p>",
    "intuition": "If a fair die has six faces, each face gets one-sixth of the chance, so an event containing three faces has chance 3/6. The same fraction works for cards or dice only if the listed elementary outcomes really are equally likely.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.3.2"
    ],
    "traps": [
      "“Randomly selected” must imply a uniform model on the chosen outcome representation.",
      "Ordered and unordered outcome descriptions give matching ratios only when their induced probabilities are uniform."
    ],
    "proof": {
      "idea": "Use equal probabilities and total probability 1 to derive the counting formula.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let the finite sample space contain N outcomes, all with probability p.",
          "m": "$$N=|S|,\\quad P(\\{s\\})=p$$",
          "meaning": "Vertical bars around a finite set mean its number of elements."
        },
        {
          "why": "The singleton events are disjoint and cover S.",
          "m": "$$S=\\bigcup_{s\\in S}\\{s\\}$$",
          "meaning": "A singleton contains only the named outcome."
        },
        {
          "why": "Add their equal probabilities.",
          "m": "$$1=P(S)=\\underbrace{p+\\cdots+p}_{N\\text{ terms}}=Np$$",
          "meaning": "This uses normalization and finite additivity."
        },
        {
          "why": "Since N is positive, divide by N.",
          "m": "$$p=\\frac1N$$",
          "meaning": "Equal likelihood fixes the probability of each outcome."
        },
        {
          "why": "An event E consists of |E| such singleton outcomes.",
          "m": "$$P(E)=|E|p$$",
          "meaning": "Add one equal contribution for each favorable outcome."
        },
        {
          "why": "Substitute the value of p.",
          "m": "$$P(E)=\\frac{|E|}{|S|}$$",
          "meaning": "For a fair die, E={2,4,6} gives 3/6=1/2; unequal outcome probabilities would require adding their individual masses instead."
        }
      ],
      "ends": "Favorable count divided by total count is valid only for a finite, equally likely outcome model."
    },
    "cards": [
      {
        "q": "State the probability formula for a finite equiprobable sample space.",
        "a": "$P(E)=|E|/|S|$, since every point has probability $1/|S|$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.5, equally likely sample spaces, PDF pp. 56–57."
  },
  {
    "id": "c.prob.2.6.1",
    "sec": "2.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Continuity of probability for monotone events",
    "oneLine": "When events keep growing or shrinking, their probabilities approach that of the final event.",
    "statement": "<p><b>Statement:</b> The probability measure $P$ is continuous from below and above with respect to monotone sequences of events:<br>(1) If $E_1 \\subseteq E_2 \\subseteq E_3 \\subseteq \\cdots$ (monotone increasing) with limit $E = \\bigcup_{n=1}^\\infty E_n$, then $\\lim_{n \\to \\infty} P(E_n) = P(E)$.<br>(2) If $F_1 \\supseteq F_2 \\supseteq F_3 \\supseteq \\cdots$ (monotone decreasing) with limit $F = \\bigcap_{n=1}^\\infty F_n$, then $\\lim_{n \\to \\infty} P(F_n) = P(F)$.</p><p><b>Mathematical terms:</b> $E_n$ is a nested sequence of events; $E = \\lim E_n = \\bigcup E_n$ is the limiting union; $F = \\lim F_n = \\bigcap F_n$ is the limiting intersection; continuity means the probability of the limit equals the limit of the probabilities.</p><p><b>Reason:</b> Decompose the increasing sequence into disjoint annular rings: $A_1 = E_1$ and $A_k = E_k \\setminus E_{k-1}$ for $k \\ge 2$. Then $E_n = \\bigcup_{k=1}^n A_k$ and $E = \\bigcup_{k=1}^\\infty A_k$. By countable additivity, $P(E) = \\sum_{k=1}^\\infty P(A_k) = \\lim_{n \\to \\infty} \\sum_{k=1}^n P(A_k) = \\lim_{n \\to \\infty} P(E_n)$. Continuity from above follows by taking complements $E_n = F_n^c$ and using De Morgan's laws.</p>",
    "intuition": "Imagine E_n means “the first n coin tosses are all heads.” As n grows, these events shrink toward the outcome “every toss is heads”; their probabilities settle to the probability of that limiting event. For increasing events, each new stage adds a fresh, nonoverlapping piece instead.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.3.2",
      "c.prob.2.4.1"
    ],
    "traps": [
      "The event limit is a union for an increasing sequence and an intersection for a decreasing sequence.",
      "Continuity here needs monotonicity; arbitrary sequences of events need not have convergent probabilities matching a set limit."
    ],
    "proof": {
      "idea": "Turn growing events into disjoint new pieces; use complements for shrinking events.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume E_1 is contained in E_2, which is contained in E_3, and so on.",
          "m": "$$F_1=E_1,\\quad F_n=E_n\\setminus E_{n-1}\\ (n\\ge2)$$",
          "meaning": "F_n records the outcomes entering for the first time at step n."
        },
        {
          "why": "No outcome can enter for the first time twice.",
          "m": "$$F_i\\cap F_j=\\varnothing\\quad(i\\ne j)$$",
          "meaning": "The increments are disjoint."
        },
        {
          "why": "After n stages, the first n increments recover the whole current event.",
          "m": "$$E_n=\\bigcup_{i=1}^nF_i$$",
          "meaning": "Taking all increments gives the union of every E_n as well."
        },
        {
          "why": "Use finite and countable additivity on the increments.",
          "m": "$$P(E_n)=\\sum_{i=1}^nP(F_i),\\quad P\\left(\\bigcup_nE_n\\right)=\\sum_{i=1}^{\\infty}P(F_i)$$",
          "meaning": "A nonnegative infinite sum is defined as the limit of its partial sums."
        },
        {
          "why": "Take the limit of the finite sums.",
          "m": "$$\\lim_{n\\to\\infty}P(E_n)=P\\left(\\bigcup_nE_n\\right)$$",
          "meaning": "This proves continuity for increasing events from an axiom."
        },
        {
          "why": "If instead E_n decreases, its complement increases.",
          "m": "$$E_n^c\\subseteq E_{n+1}^c,\\quad\\bigcup_nE_n^c=\\left(\\bigcap_nE_n\\right)^c$$",
          "meaning": "The second equality is De Morgan’s law: failing at least one E_n means failing their intersection."
        },
        {
          "why": "Apply the increasing result and the complement rule.",
          "m": "$$\\lim_nP(E_n)=1-\\lim_nP(E_n^c)=P\\left(\\bigcap_nE_n\\right)$$",
          "meaning": "All quantities are probabilities between 0 and 1, so subtraction is valid."
        }
      ],
      "ends": "Nested increasing or decreasing events have probabilities that converge to the probability of the corresponding limiting event."
    },
    "cards": [
      {
        "q": "State continuity of probability for monotone event sequences.",
        "a": "If $E_n$ increases, $P(E_n)\\to P(\\cup_n E_n)$; if $E_n$ decreases, $P(E_n)\\to P(\\cap_n E_n)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.6, Proposition 6.1 and proof, PDF pp. 65–66."
  },
  {
    "id": "c.prob.2.6.2",
    "sec": "2.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Consequences for infinite unions and intersections",
    "oneLine": "Adding event probabilities gives an upper bound even when events overlap.",
    "statement": "<p><b>Statement:</b> For any countable collection of events $E_1, E_2, \\ldots$, the <b>Union Bound</b> (Boole's Inequality) holds:$$P\\left(\\bigcup_{i=1}^\\infty E_i\\right) \\le \\sum_{i=1}^\\infty P(E_i)$$</p><p>Furthermore, a uniform probability distribution cannot exist on a countably infinite sample space $S = \\{\\omega_1, \\omega_2, \\ldots\\}$.</p><p><b>Mathematical terms:</b> $\\bigcup_{i=1}^\\infty E_i$ is an arbitrary (not necessarily disjoint) union; $\\le$ indicates that probability of the union cannot exceed the sum of marginal chances; countably infinite means bijectively equivalent to $\\mathbb{N}$.</p><p><b>Reason:</b> Replace $E_i$ by disjoint sub-events $A_1 = E_1$ and $A_i = E_i \\setminus (\\bigcup_{j < i} E_j)$. Then $\\bigcup E_i = \\bigcup A_i$, and since $A_i \\subseteq E_i$, monotonicity gives $P(A_i) \\le P(E_i)$. By countable additivity, $P(\\bigcup E_i) = \\sum P(A_i) \\le \\sum P(E_i)$. For uniform countably infinite spaces, if each outcome has mass $p > 0$, $\\sum_{i=1}^\\infty p = \\infty \\ne 1$; if $p = 0$, $\\sum_{i=1}^\\infty 0 = 0 \\ne 1$, making total probability 1 impossible under uniformity.</p>",
    "intuition": "For many possible mishaps, adding their chances gives a safe upper bound on the chance that at least one happens, even if they overlap. But for nonoverlapping cases, the sum is exact. You cannot make countably many points all equally likely with one common positive chance: the total would exceed 1.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.3.2"
    ],
    "traps": [
      "The inequality holds without disjointness, but equality generally does not.",
      "Countably many equally likely points cannot each have the same probability while totaling one."
    ],
    "proof": {
      "idea": "Assign each outcome to its first event and compare the resulting disjoint pieces.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "The events E_n need not be nested or disjoint.",
          "m": "$$F_1=E_1,\\quad F_n=E_n\\setminus\\bigcup_{i<n}E_i$$",
          "meaning": "Remove outcomes already recorded in earlier events."
        },
        {
          "why": "Every outcome in the union has a first positive-integer index at which it appears.",
          "m": "$$\\bigcup_nF_n=\\bigcup_nE_n,\\quad F_i\\cap F_j=\\varnothing\\ (i\\ne j)$$",
          "meaning": "This explains both complete coverage and absence of double counting."
        },
        {
          "why": "Add the probabilities of the disjoint pieces.",
          "m": "$$P\\left(\\bigcup_nE_n\\right)=\\sum_nP(F_n)$$",
          "meaning": "Countable additivity applies because the F_n are disjoint."
        },
        {
          "why": "Each new piece lies inside its original event.",
          "m": "$$F_n\\subseteq E_n\\ \\Longrightarrow\\ P(F_n)\\le P(E_n)$$",
          "meaning": "Monotonicity was established by adding a nonnegative extra piece."
        },
        {
          "why": "Add these termwise comparisons.",
          "m": "$$P\\left(\\bigcup_nE_n\\right)\\le\\sum_nP(E_n)$$",
          "meaning": "This is the union bound, even if the sum on the right is infinite."
        },
        {
          "why": "Now suppose a countably infinite list of individual outcomes all had common probability q.",
          "m": "$$1=\\sum_{n=1}^{\\infty}q$$",
          "meaning": "Their disjoint union is the whole sample space."
        },
        {
          "why": "If q=0 the sum is zero; if q>0 choose an integer M>1/q.",
          "m": "$$q=0\\Rightarrow\\sum_nq=0,\\quad q>0\\Rightarrow Mq>1$$",
          "meaning": "Neither choice can give total probability 1, so a countably infinite uniform model is impossible."
        }
      ],
      "ends": "The union bound does not require independence. Equal singleton probabilities cannot describe a countably infinite sample space."
    },
    "cards": [
      {
        "q": "State Boole’s inequality.",
        "a": "For any countable events $E_i$, $P(\\cup_i E_i)\\le\\sum_iP(E_i)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.6 and Chapter 2 Self-Test Problem 14, PDF pp. 65–66, 79."
  },
  {
    "id": "c.prob.2.7.1",
    "sec": "2.7",
    "kind": "definition",
    "tier": "core",
    "title": "Subjective probability as coherent belief",
    "oneLine": "A personal probability expresses belief, while following the same probability rules.",
    "statement": "<p><b>Statement:</b> A subjective (Bayesian) probability is a numerical representation of an agent's degree of belief in the occurrence of an event $E$ given available background information $\\mathcal{I}$, denoted $P(E \\mid \\mathcal{I}) \\in [0, 1]$. To be rational and avoid a Dutch book (guaranteed financial loss under bet combinations), subjective probabilities must satisfy Kolmogorov's axioms: non-negativity, normalization $P(S \\mid \\mathcal{I}) = 1$, and additivity for mutually exclusive alternatives.</p><p><b>Mathematical terms:</b> $\\mathcal{I}$ represents the conditioning background knowledge; $P(E \\mid \\mathcal{I})$ is the personal probability assessment; Dutch book is a set of wagers that guarantees a net loss regardless of the experimental outcome.</p><p><b>Reason:</b> De Finetti's coherence theorem demonstrates that if an individual's betting odds violate any of Kolmogorov's probability axioms (e.g., negative probabilities, total probability $\\ne 1$, or failure of additivity for disjoint hypotheses), a bookmaker can construct a finite system of wagers that results in a certain net financial loss for that individual regardless of which outcome occurs. Coherence thus mathematically compels subjective belief to conform to standard probability calculus.</p>",
    "intuition": "A person’s probability can describe how strongly they believe a claim when they do not know the result yet. The numbers still have to fit together: if “rain” and “no rain” cover every possibility, their assigned chances must add to 1.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.4.2"
    ],
    "traps": [
      "Subjective does not mean arbitrary: inconsistent numbers violate the axioms.",
      "Do not confuse a personal probability for a proposition with an empirically measured relative frequency, even though both follow the axioms."
    ],
    "cards": [
      {
        "q": "What is the subjective interpretation of probability, and what constrains it?",
        "a": "It measures degree of belief in an event; its assignments must still satisfy the probability axioms.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.7, probability as measure of belief, PDF p. 68.",
    "proof": {
      "idea": "Explain coherence through a complementary pair of fair-priced unit bets.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Interpret p(A) as the fair price of a ticket paying 1 if A occurs and 0 otherwise.",
          "m": "$$\\text{payoff}=\\mathbf1_A$$",
          "meaning": "This is a subjective betting interpretation of assigned probability."
        },
        {
          "why": "A ticket for A and one for A^c together pay exactly one in every outcome.",
          "m": "$$\\mathbf1_A+\\mathbf1_{A^c}=1$$",
          "meaning": "Exactly one of an event and its complement occurs."
        },
        {
          "why": "Their combined fair price must therefore be 1.",
          "m": "$$p(A)+p(A^c)=1$$",
          "meaning": "Otherwise, buying or selling the pair against a sure unit payoff permits a guaranteed gain under this betting setup."
        },
        {
          "why": "For disjoint events A and B, their two tickets equal a ticket for their union.",
          "m": "$$\\mathbf1_A+\\mathbf1_B=\\mathbf1_{A\\cup B}$$",
          "meaning": "Disjointness prevents a combined payout of 2."
        },
        {
          "why": "Consistent prices must respect the same equality.",
          "m": "$$p(A\\cup B)=p(A)+p(B)$$",
          "meaning": "This illustrates finite additivity. Countable additivity requires an additional continuity assumption; finite betting coherence alone does not establish it."
        }
      ],
      "ends": "Subjective probabilities can represent beliefs while obeying coherent finite probability rules; a probability model’s full axioms must still be specified."
    }
  },
  {
    "id": "c.prob.2.5.2",
    "sec": "2.5",
    "kind": "technique",
    "tier": "core",
    "title": "Changing between ordered and unordered samples",
    "oneLine": "Ignoring draw order preserves equal chances when every group has equally many orders.",
    "statement": "<p><b>Statement:</b> In sampling $r$ objects without replacement from a finite population of size $N$ ($r \\le N$):<br>(1) In the <b>ordered</b> sample space $S_{\\text{ord}}$, each of the $P(N, r) = \\frac{N!}{(N-r)!}$ sequences has equal probability $1/P(N, r)$.<br>(2) In the <b>unordered</b> sample space $S_{\\text{unord}}$, each of the $\\binom{N}{r} = \\frac{N!}{r!(N-r)!}$ subsets has equal probability $1/\\binom{N}{r}$.<br>Both formulations yield identical event probabilities for any order-invariant event.</p><p><b>Mathematical terms:</b> $S_{\\text{ord}}$ is the sample space of ordered $r$-tuples; $S_{\\text{unord}}$ is the sample space of $r$-element subsets; $r!$ is the internal permutation symmetry factor.</p><p><b>Reason:</b> Each unique unordered subset of size $r$ corresponds bijectively to a fiber of exactly $r!$ distinct ordered sequences in $S_{\\text{ord}}$. Because every ordered sequence in $S_{\\text{ord}}$ carries the exact same probability mass $p_0 = \\frac{(N-r)!}{N!}$, the total probability mass of any unordered subset is $\\sum_{k=1}^{r!} p_0 = r! \\cdot \\frac{(N-r)!}{N!} = \\frac{r!(N-r)!}{N!} = 1/\\binom{N}{r}$. Because all subsets have identical fiber sizes $r!$, equiprobability is strictly preserved under the mapping.</p>",
    "intuition": "If you draw 3 different cards without replacement and then ignore their order, every 3-card hand has the same number of possible draw orders: 3!. So all hands remain equally likely. This would fail if some hands had more ways to be produced than others.",
    "needs": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "traps": [
      "Do not infer uniform subsets merely from the phrase “randomly selected” without checking the mechanism.",
      "For distinguishable balls, counting color patterns as if equally likely can be wrong when patterns have different multiplicities."
    ],
    "proof": {
      "idea": "Prove that forgetting draw order preserves equal likelihood when every group has r! orders.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Draw r distinct objects successively from N, uniformly among those remaining.",
          "m": "$$P(\\text{one specified sequence})=\\frac1N\\frac1{N-1}\\cdots\\frac1{N-r+1}$$",
          "meaning": "The conditional chance at each stage is the reciprocal of the remaining count."
        },
        {
          "why": "Multiply and rewrite the denominator as a factorial ratio.",
          "m": "$$P(\\text{sequence})=\\frac{(N-r)!}{N!}$$",
          "meaning": "This probability is the same for every ordered sequence."
        },
        {
          "why": "Fix an unordered group of r objects.",
          "m": "$$r!\\text{ sequences produce this group}$$",
          "meaning": "Its elements can be drawn in every possible internal order."
        },
        {
          "why": "Different sequences are mutually exclusive outcomes, so their probabilities add.",
          "m": "$$P(\\text{group})=r!\\frac{(N-r)!}{N!}$$",
          "meaning": "The probability of a group is the sum over its sequence outcomes."
        },
        {
          "why": "The combination formula gives the reciprocal of this expression.",
          "m": "$$\\binom Nr=\\frac{N!}{r!(N-r)!},\\quad P(\\text{group})=\\frac1{\\binom Nr}$$",
          "meaning": "Every unordered group is therefore equally likely."
        },
        {
          "why": "Check that these probabilities sum to one.",
          "m": "$$\\binom Nr\\frac1{\\binom Nr}=1$$",
          "meaning": "Equal-sized groups of equally likely sequences justify changing the sample-space description."
        }
      ],
      "ends": "The argument depends on uniform sampling without replacement; forgetting order alone does not always create a uniform model."
    },
    "cards": [
      {
        "q": "Why are r-subsets uniform when drawing uniformly without replacement and ignoring order?",
        "a": "Each r-subset corresponds to exactly r! equally likely ordered draws, so every subset has the same probability.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.5, discussion before Example 5c and Example 5b, PDF pp. 56–57."
  },
  {
    "id": "c.prob.2.7.2",
    "sec": "2.7",
    "kind": "example",
    "tier": "core",
    "title": "Comparing wagers under personal probabilities",
    "oneLine": "For separate possible winners, add the probabilities of the winners covered by the bet.",
    "statement": "<p><b>Statement:</b> Given mutually exclusive and exhaustive hypotheses $H_1, \\ldots, H_n$ with coherent subjective probabilities $p_i = P(H_i)$ satisfying $p_i \\ge 0$ and $\\sum_{i=1}^n p_i = 1$, the subjective probability of any compound event consisting of a subset of winning hypotheses $I \\subseteq \\{1, \\ldots, n\\}$ is:$$P\\left(\\bigcup_{i \\in I} H_i\\right) = \\sum_{i \\in I} p_i$$and the expected utility of a wager paying $W_i$ under hypothesis $H_i$ is $\\sum_{i=1}^n p_i U(W_i)$.</p><p><b>Mathematical terms:</b> $H_i$ is hypothesis $i$; $p_i$ is the subjective prior probability of $H_i$; $I$ is an index subset; $W_i$ is the wager payout under state $H_i$; $U(\\cdot)$ is the utility function.</p><p><b>Reason:</b> Because hypotheses $H_i$ are pairwise disjoint ($H_i \\cap H_j = \\varnothing$ for $i \\ne j$), finite additivity guarantees that the probability of any composite wager winning under alternative states $I$ is the direct sum of the individual state probabilities $\\sum_{i \\in I} p_i$, preventing arbitrary non-linear betting distortions.</p>",
    "intuition": "For a fair even-money bet on one of several possible winners, add the personal chances assigned to those winners. If the covered winners cannot occur together, the sum is the chance the bet wins; the bet still depends on the stated belief model.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.7.1"
    ],
    "traps": [
      "Only disjoint winner events may be added directly.",
      "At even money, higher success probability means higher expected payoff only when win and loss amounts are equal."
    ],
    "cards": [
      {
        "q": "How is the personal probability of a wager on one of several mutually exclusive winners computed?",
        "a": "Add the personal probabilities of the winner events covered by the wager.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.7, Example 7a, PDF p. 68.",
    "proof": {
      "idea": "Compute expected wager payoffs from the person’s stated probability model.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let a wager pay w_A if event A happens and w_c otherwise.",
          "m": "$$p=P(A),\\quad P(A^c)=1-p$$",
          "meaning": "These are the bettor’s model probabilities, not necessarily equal-likelihood counts."
        },
        {
          "why": "Form the weighted average of its two payoffs.",
          "m": "$$E[W]=pw_A+(1-p)w_c$$",
          "meaning": "Expected payoff uses all mutually exclusive possibilities and their assigned weights."
        },
        {
          "why": "If buying the wager costs c, subtract that fixed price.",
          "m": "$$E[W-c]=pw_A+(1-p)w_c-c$$",
          "meaning": "The price does not depend on the outcome, so its average is still c."
        },
        {
          "why": "For a unit-win, zero-otherwise ticket this simplifies immediately.",
          "m": "$$E[W-c]=p-c$$",
          "meaning": "A positive expected gain means the subjective chance exceeds the ticket price."
        },
        {
          "why": "Compare wagers using their respective payoff distributions and the same probability model.",
          "m": "$$E[W_1-W_2]=E[W_1]-E[W_2]$$",
          "meaning": "Expected-money comparison does not by itself model risk preferences; it derives the arithmetic payoff criterion only."
        }
      ],
      "ends": "A wager’s expected net payoff is its probability-weighted payoff minus its fixed cost."
    }
  }
]
);
