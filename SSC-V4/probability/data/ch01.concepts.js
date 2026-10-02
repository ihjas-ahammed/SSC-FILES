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
    "statement": "First list what can happen. This list is the sample space $S$. An event $A$ is the part of the list that answers your question. If the list is finite and every outcome has the same chance, $P(A)=|A|/|S|$, where $|A|$ means the number of outcomes in $A$.",
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
    "provenance": "Ross, A First Course in Probability, 10e, §1.1, PDF p. 17."
  },
  {
    "id": "c.prob.1.2.1",
    "sec": "1.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Basic principle of counting",
    "oneLine": "Multiply the number of choices at each stage.",
    "statement": "Suppose you make two choices. There are $m$ options for the first choice and exactly $n$ options for the second choice after each possible first choice. There are $mn$ complete results. For $r$ stages, if stage $i$ always has $n_i$ options after any earlier choices, the total is $\\prod_{i=1}^r n_i$. The number of options may change between stages, but it must be the same for every history leading to that stage.",
    "intuition": "A choice diagram branches at each step: pick a shirt, then pick a pair of shoes. If every shirt has the same number of shoe choices, multiply the branch counts. If some first choices leave fewer options than others, count each branch separately and add.",
    "needs": [],
    "traps": [
      "Add counts for successive stages only when the task branches into alternatives; multiply counts for choices that are all made.",
      "If later choices depend on earlier choices, check whether each branch has the same size before using a simple product."
    ],
    "proof": {
      "idea": "Make one row for each first choice, then count the entries in all rows.",
      "why": "Every complete outcome has a unique first-stage result and a unique continuation.",
      "rungs": [
        {
          "why": "For each of the $m$ first outcomes, list its $n$ continuations.",
          "m": "(1,1),\\ldots,(1,n);\\;\\ldots;\\;(m,1),\\ldots,(m,n)",
          "meaning": "The possibilities form $m$ nonoverlapping rows."
        },
        {
          "why": "Count the entries in all rows.",
          "m": "m\\cdot n",
          "meaning": "A complete result tells us its row and its position in that row. So every result is listed once."
        }
      ],
      "ends": "For two stages the answer is $mn$. For another stage, multiply each complete result by its number of continuations; repeating this gives the rule for any finite number of stages."
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
    "statement": "A function on $n$ specified inputs is a list of $n$ answers: one answer for each input. If every answer can be any of $q$ values, there are $q^n$ such lists. If position $i$ allows $q_i$ values, multiply them to get $\\prod_i q_i$. If repeats are forbidden, remove choices already used: three different letters give $26\\cdot25\\cdot24$ lists.",
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
    "provenance": "Ross, 10e, §1.2, Examples 2c–2e, PDF pp. 18–19."
  },
  {
    "id": "c.prob.1.3.1",
    "sec": "1.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Permutations of distinct objects",
    "oneLine": "To arrange different objects, count the choices for each position.",
    "statement": "For $n$ different objects, choose the first in $n$ ways, the second in $n-1$ ways, and continue. Thus all $n$ objects have $n!=n(n-1)\\cdots1$ orders. Arranging only $r$ of them gives $n!/(n-r)!$ orders, for $0\\le r\\le n$. We define $0!=1$: the empty list has exactly one possible order.",
    "intuition": "Putting 5 different books in a row gives 5 choices for the first place, then 4, then 3, and so on. A new order counts as a new result because the books have moved to different places.",
    "needs": [
      "c.prob.1.2.1"
    ],
    "traps": [
      "A combination is not a permutation: use the falling factorial only when order matters.",
      "The convention $0!=1$ makes endpoint formulas work and counts the unique empty ordering."
    ],
    "proof": {
      "idea": "Apply the multiplication principle to successive positions.",
      "why": "After each position is filled, exactly one fewer object remains.",
      "rungs": [
        {
          "why": "Count the choices for the first $r$ positions.",
          "m": "n(n-1)\\cdots(n-r+1)",
          "meaning": "Each ordered partial list is counted once."
        },
        {
          "why": "For a full arrangement, take $r=n$; rewrite the product using factorials.",
          "m": "n(n-1)\\cdots1=n!",
          "meaning": "For a full list we use every object. For a shorter list, cancel the unused factors from $n!$ to obtain $n!/(n-r)!$. The case $r=0$ has one empty list."
        }
      ],
      "ends": "There are $n!$ full permutations and $n!/(n-r)!$ ordered $r$-ordered lists."
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
    "statement": "Suppose $n$ objects include $n_j$ identical copies of each type $j$, with $\\sum_jn_j=n$. The number of visibly different arrangements is $n!/\\prod_jn_j!$. For example, swapping two identical letters does not make a new word. Each factor $n_j!$ removes these repeated counts.",
    "intuition": "For the word LEVEL, first pretend every copy of L and E has a tiny identifying sticker. Then erase the stickers: swapping identical copies did not make a visibly new word, so divide by the number of sticker arrangements that look the same.",
    "needs": [
      "c.prob.1.3.1"
    ],
    "traps": [
      "Use this formula only for indistinguishable copies; distinct people from the same country remain distinct unless the outcome records nationality alone.",
      "Do not divide by multiplicity factorials if the objects are individually distinguishable in the experiment."
    ],
    "proof": {
      "idea": "Put temporary labels on equal copies, count all orders, then remove the extra counts caused by those labels.",
      "why": "Every visible arrangement has the same number of temporary labelings, so division removes the extra counts fairly.",
      "rungs": [
        {
          "why": "Label copies and arrange all objects.",
          "m": "n!",
          "meaning": "This distinguishes even copies that should look the same."
        },
        {
          "why": "In one fixed visible arrangement, swap the temporary labels among copies of each type.",
          "m": "n_1!n_2!\\cdots n_k!",
          "meaning": "These and only these relabelings leave the string unchanged."
        },
        {
          "why": "Divide the overcount.",
          "m": "\\frac{n!}{n_1!\\cdots n_k!}",
          "meaning": "Each distinct arrangement is counted exactly once."
        }
      ],
      "ends": "The multinomial permutation formula follows."
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
    "statement": "Choose $r$ objects from $n$ different objects, with $0\\le r\\le n$. There are $\\binom nr=n!/[r!(n-r)!]$ groups. We first count ordered choices and then divide by the $r!$ orders of each group. Choosing none or choosing all has one result, so $\\binom n0=\\binom nn=1$. A choice outside $0\\le r\\le n$ is impossible, so its count is zero.",
    "intuition": "A committee of 3 classmates is a group, not a lineup: choosing Ana, Bo, and Chen gives the same committee in any order. Count the lineups first, then divide away the 3! ways to rearrange the same group.",
    "needs": [
      "c.prob.1.3.1"
    ],
    "traps": [
      "First decide whether the outcome is a subset/group or an ordered list.",
      "For a committee with composition constraints, multiply independent group choices; do not permute members within each group."
    ],
    "proof": {
      "idea": "Count ordered selections and remove the orderings within each selected group.",
      "why": "Each fixed r-element subset has exactly r! orderings.",
      "rungs": [
        {
          "why": "Count ordered selections without replacement.",
          "m": "\\frac{n!}{(n-r)!}",
          "meaning": "This counts each subset in every possible order."
        },
        {
          "why": "Divide by the r! orders of each subset.",
          "m": "\\binom nr=\\frac{n!}{r!(n-r)!}",
          "meaning": "For example, ABC and BAC select the same three objects. Dividing removes all different orders of the same group."
        }
      ],
      "ends": "The quotient is the number of unordered r-subsets."
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
    "statement": "For $1\\le r\\le n$, $\\binom nr=\\binom{n-1}{r-1}+\\binom{n-1}r$: a group either includes one fixed object or does not. Also, $(x+y)^n=\\sum_{k=0}^n\\binom nkx^ky^{n-k}$. The coefficient $\\binom nk$ counts the ways to choose which $k$ of the $n$ brackets contribute an $x$.",
    "intuition": "To build a group of r people from n, either the group includes one particular person or it does not; those two cases make Pascal’s rule. In (x+y)^n, each term records which of the n factors supplied x and which supplied y.",
    "needs": [
      "c.prob.1.4.1"
    ],
    "traps": [
      "In Pascal’s identity, the first term counts subsets containing the fixed element.",
      "The coefficient of $x^k y^{n-k}$ is $\\binom nk$, not $\\binom n{k-1}$."
    ],
    "proof": {
      "idea": "For Pascal’s rule, separate groups by one object. For the expansion, count which brackets contribute each letter.",
      "why": "Both formulas count the same objects in a way that exposes their coefficient.",
      "rungs": [
        {
          "why": "Fix one element and split r-subsets.",
          "m": "\\#(\\text{contains})=\\binom{n-1}{r-1},\\quad\\#(\\text{omits})=\\binom{n-1}{r}",
          "meaning": "The cases are nonoverlapping and cover all possibilities."
        },
        {
          "why": "In $(x+y)^n$, choose the k factors contributing x.",
          "m": "\\#\\text{choices}=\\binom nk",
          "meaning": "Every such choice contributes the same term $x^ky^{n-k}$."
        },
        {
          "why": "Collect equal terms.",
          "m": "(x+y)^n=\\sum_{k=0}^n\\binom nkx^ky^{n-k}",
          "meaning": "The coefficient is exactly the number of ways to produce that term."
        }
      ],
      "ends": "Pascal’s identity and the binomial theorem."
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
    "statement": "Divide $n$ different objects into named groups of sizes $n_1,\\ldots,n_r$, where the sizes are nonnegative integers adding to $n$. The number of divisions is $n!/(n_1!\\cdots n_r!)$. A group name matters: Team A and Team B have different jobs. The same count gives the coefficients in $(x_1+\\cdots+x_r)^n=\\sum_{n_1+\\cdots+n_r=n}[n!/(n_1!\\cdots n_r!)]\\prod_i x_i^{n_i}$.",
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
      "idea": "Attach one group name to each object, then count lists with the required number of each name.",
      "why": "Each object goes to exactly one group. In the algebra expansion, each bracket similarly contributes exactly one variable.",
      "rungs": [
        {
          "why": "Temporarily order all n labels and remove permutations among equal labels.",
          "m": "\\frac{n!}{n_1!\\cdots n_r!}",
          "meaning": "This counts assignments with prescribed group sizes."
        },
        {
          "why": "Expand $n$ identical sums, selecting one variable from each factor.",
          "m": "(x_1+\\cdots+x_r)^n",
          "meaning": "Each selection gives one label string and thus one term."
        },
        {
          "why": "Collect terms of copy counts $(n_1,\\ldots,n_r)$.",
          "m": "\\frac{n!}{n_1!\\cdots n_r!}x_1^{n_1}\\cdots x_r^{n_r}",
          "meaning": "The coefficient is the number of ways those variables are selected."
        }
      ],
      "ends": "The multinomial coefficient and expansion formula."
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
    "statement": "Share $n$ identical objects among $r$ named groups. Empty groups are allowed. If $x_i$ is the amount in group $i$, then $x_1+\\cdots+x_r=n$ with each $x_i\\ge0$. There are $\\binom{n+r-1}{r-1}$ ways, for integers $n\\ge0,r\\ge1$. If every group must receive at least one object, there are $\\binom{n-1}{r-1}$ ways when $n\\ge r$, and none when $n<r$.",
    "intuition": "Stars and bars turns a pile of identical objects into gaps: 7 identical candies shared among 3 kids can be shown as 7 stars separated by 2 bars. An empty gap means a child gets zero; for a positive share, give each child one candy first.",
    "needs": [
      "c.prob.1.4.1"
    ],
    "traps": [
      "Nonnegative allows zero and uses $n+r-1$ positions; positive requires $n\\ge r$ and uses $n-1$ separators positions.",
      "Stars and bars counts solutions, not permutations of indistinguishable objects."
    ],
    "proof": {
      "idea": "Translate each share into one unique line of stars and bars.",
      "why": "Count the stars between consecutive bars to read back the amount in each group. This works in both directions, so no share is lost or counted twice.",
      "rungs": [
        {
          "why": "Represent n units as stars and separate r entries with r−1 bars.",
          "m": "\\underbrace{*\\cdots*}_{x_1}|\\underbrace{*\\cdots*}_{x_2}|\\cdots|\\underbrace{*\\cdots*}_{x_r}",
          "meaning": "Adjacent bars or bars at an end represent zero."
        },
        {
          "why": "Choose the bar positions among n+r−1 total slots.",
          "m": "\\binom{n+r-1}{r-1}",
          "meaning": "The remaining positions are stars."
        },
        {
          "why": "For positive entries, reserve one star in each part, leaving n−r stars.",
          "m": "\\binom{n-1}{r-1}",
          "meaning": "This is valid only when n≥r."
        }
      ],
      "ends": "The formulas for nonnegative and positive integer solutions."
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
    "statement": "If $r$ groups each contain $m$ objects and $n=rm$, first count them as named groups: $n!/(m!)^r$. If group names have no meaning, the same division is counted $r!$ times, once for each naming of the groups. For nonempty groups ($m\\ge1$), the answer is $n!/[(m!)^rr!]$.",
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
    "provenance": "Ross, 10e, §1.5, Examples 5b–5c, PDF p. 25."
  },
  {
    "id": "c.prob.1.6.2",
    "sec": "1.6",
    "kind": "technique",
    "tier": "core",
    "title": "Allocations with minimum requirements",
    "oneLine": "Give each group its required minimum first, then share what remains.",
    "statement": "Suppose group $i$ must receive at least $a_i$ objects and the total is $n$. Write $y_i=x_i-a_i$: this is the amount left after giving each group its minimum. For integer amounts, if $n\\ge\\sum_i a_i$, there are $\\binom{n-\\sum_i a_i+r-1}{r-1}$ ways. Otherwise there are none. When $a_i=1$, this counts shares with no empty group. With all $a_i=0$, it also counts the different terms $x_1^{n_1}\\cdots x_r^{n_r}$ in the expansion of $(x_1+\\cdots+x_r)^n$.",
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
    "provenance": "Ross, 10e, §1.6, Examples 6b–6c, PDF pp. 28–29."
  }
]
);
