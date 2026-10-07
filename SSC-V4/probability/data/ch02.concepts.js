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
    "statement": "Start by describing the experiment and listing its possible results, the sample space $S$. Then assign probabilities to events, which are groups of results. You can record an experiment in different ways, but each way must give the same probabilities to the questions you want to answer.",
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
    "statement": "The sample space $S$ is the set of possible results. An event $E$ happens when the result is in $E$. For a die, $S=\\{1,2,3,4,5,6\\}$ and “an even result” is $E=\\{2,4,6\\}$. The event $S$ always happens. The empty event $\\varnothing$ has no results and cannot happen.",
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
    "statement": "For events $E,F$, $E\\cup F$ means at least one happens, $E\\cap F$ means both happen, and $E^c$ means $E$ does not happen. If $E\\cap F=\\varnothing$, they cannot happen together (mutually exclusive). If $E\\subseteq F$, every result in $E$ is also in $F$. De Morgan’s rules translate “none happen” and “not all happen”: $(\\cup_iE_i)^c=\\cap_iE_i^c$ and $(\\cap_iE_i)^c=\\cup_iE_i^c$.",
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
    "statement": "The probability rules are: (1) $0\\le P(E)\\le1$; (2) $P(S)=1$, since some possible result must occur; (3) if events never overlap, add their probabilities. This last rule also works for a list $E_1,E_2,\\ldots$ that continues forever: $P(\\cup_{i=1}^{\\infty}E_i)=\\sum_{i=1}^{\\infty}P(E_i)$. Here “never overlap” means $E_i\\cap E_j=\\varnothing$ whenever $i\\ne j$.",
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
    "statement": "The rules force $P(\\varnothing)=0$. For a finite list of events that cannot happen together, $P(\\cup_{i=1}^nE_i)=\\sum_{i=1}^nP(E_i)$. To get this from the rule for an infinite list, add empty events after the first $n$ events; these add zero.",
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
    "statement": "An event and its opposite cover all results, so $P(E^c)=1-P(E)$. If every result in $E$ is also in $F$ ($E\\subseteq F$), then $P(E)\\le P(F)$. To keep only the part of $E$ outside $F$, subtract their overlap: $P(E\\setminus F)=P(E)-P(E\\cap F)$.",
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
    "statement": "For two events, $P(E\\cup F)=P(E)+P(F)-P(E\\cap F)$. For $n$ events, add the individual probabilities, subtract all overlaps of two events, add overlaps of three, and continue with alternating signs. The last term is $(-1)^{n+1}P(E_1\\cap\\cdots\\cap E_n)$. These corrections make each result count exactly once.",
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
    "statement": "Suppose there are $N$ possible results, all equally likely. Their probabilities add to one, so each has probability $1/N$. An event $E$ containing $|E|$ results has $P(E)=|E|/|S|$. You may count ordered lists or unordered groups, but you must first check that the results you count really have equal chances.",
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
    "statement": "If $E_1\\subseteq E_2\\subseteq\\cdots$, the final event contains every result that eventually enters: $E=\\cup_nE_n$. If $E_1\\supseteq E_2\\supseteq\\cdots$, the final event contains only results that never leave: $E=\\cap_nE_n$. In both cases, $P(E_n)\\to P(E)$ as $n$ grows.",
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
    "statement": "For any finite or infinite list of events, $P(\\cup_iE_i)\\le\\sum_iP(E_i)$ (the union bound, also called Boole’s inequality). With no overlap, equality holds. There is no equal-chance probability law on a list of individual points that continues forever: a common positive probability would eventually total more than one, and a common zero probability would total zero.",
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
    "statement": "A personal or subjective probability measures how strongly someone believes an event will happen, given their information. It must still lie between zero and one, give probability one to all possible results together, and add correctly for events that cannot happen together. When events overlap, subtract the overlap using the same inclusion–exclusion rules.",
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
    "statement": "Draw $r$ different objects from $N$, choosing uniformly from those remaining at each step. Every ordered list of $r$ draws has the same chance. Each unordered group occurs in exactly $r!$ orders, so every group also has the same chance. You may count in either way as long as numerator and denominator use the same kind of outcome.",
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
    "statement": "Suppose exactly one of $H_1,\\ldots,H_n$ wins, and its personal probability is $p_i=P(H_i)$. A bet covering the winners in a list $I$ succeeds with probability $\\sum_{i\\in I}p_i$. If two bets pay the same amount and cost the same, their chances of winning can be compared directly.",
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
