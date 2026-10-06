import { problem, chk } from "./dsl.js";
const r = String.raw;

// Part A: events and the axioms. Ross, Chapter 2, Theoretical Exercises 5, 10, 14, 16 and Self-Test Problem 14.
export default [
  problem({
    id: "disjointification",
    name: "Disjointification of Events",
    group: "sets",
    symbol: r`F_n=E_nE_1^c\cdots E_{n-1}^c`,
    prerequisites: ["Union of Many Events", "Disjoint Events", "Union, Intersection and Complement"],
    ross: { n: 5, section: "A", page: 76 },
    title: "Making overlapping events disjoint",
    statement: r`For any sequence of events $E_1,E_2,\ldots$, define a new sequence $F_1,F_2,\ldots$ of disjoint events (that is, events such that $F_iF_j=\varnothing$ whenever $i\ne j$) such that for all $n\ge1$, $$\bigcup_{i=1}^{n}F_i=\bigcup_{i=1}^{n}E_i.$$`,
    meaning: r`Cut a pile of overlapping events into pieces that do not overlap, keeping in each $E_n$ only the part that the earlier events have not already covered.`,
    linkedFormal: r`Put $F_1=E_1$ and, for $n\ge2$, $F_n=E_nE_1^cE_2^c\cdots E_{n-1}^c$: "$E_n$ happens and none of the earlier events happens". Then $F_n\subset E_n$, the $F_i$ are [[Disjoint Events|pairwise disjoint]], and $\bigcup_{i=1}^{n}F_i=\bigcup_{i=1}^{n}E_i$ for every $n$. See [[Union of Many Events|unions of many events]] for the notation.`,
    example: r`One die, $E_1=\{1,2,3\}$, $E_2=\{2,3,4,5\}$, $E_3=\{1,5,6\}$. Then $F_1=\{1,2,3\}$, $F_2=E_2E_1^c=\{4,5\}$, $F_3=E_3E_1^cE_2^c=\{6\}$. The $F$'s share nothing, and $F_1\cup F_2\cup F_3=\{1,\ldots,6\}=E_1\cup E_2\cup E_3$.`,
    pretest: {
      prompt: r`$E_1=\{1,2,3\}$ and $E_2=\{3,4,5\}$ on a die. What is $E_2E_1^c$?`,
      options: [r`$\{4,5\}$`, r`$\{3\}$`, r`$\{1,2,4,5\}$`],
      correct: 0,
      explanation: r`$E_2E_1^c$ is the part of $E_2$ outside $E_1$: remove the shared outcome $3$ from $E_2$ to get $\{4,5\}$. The set $\{3\}$ is $E_1E_2$.`,
    },
    check: chk(
      r`In the disjointified list, which outcomes does $F_3$ keep from $E_3$?`,
      r`Those that are in $E_3$ but in neither $E_1$ nor $E_2$`,
      r`Those that are in $E_3$ and also in $E_1$ and $E_2$`,
      r`All of $E_3$`,
      r`$F_3=E_3E_1^cE_2^c$ keeps only what is new in $E_3$.`,
    ),
    faq: [
      { q: r`Why do we want events that do not overlap?`, a: r`Because then probabilities simply add. That is the third axiom, and it is how this exercise is used to prove Boole's inequality.` },
      { q: r`Is there only one correct answer?`, a: r`No. Any family of disjoint events with the same unions works. The usual choice keeps what is new in each $E_n$.` },
      { q: r`Can some $F_n$ be empty?`, a: r`Yes. If $E_n$ lies completely inside the earlier events, nothing new is left and $F_n=\varnothing$. That is fine.` },
    ],
    proof: {
      idea: r`Let $F_n$ be the part of $E_n$ that none of $E_1,\ldots,E_{n-1}$ has already covered. Then check three things: the $F$'s do not overlap, each $F_i$ sits inside $E_i$, and every outcome of $E_1\cup\cdots\cup E_n$ is picked up by the first event that contains it.`,
      steps: [
        {
          title: "Keep only what is new",
          text: r`Put $F_1=E_1$ and, for $n\ge2$, $F_n=E_nE_1^cE_2^c\cdots E_{n-1}^c$. In words, $F_n$ is the event "$E_n$ occurs, but none of $E_1,\ldots,E_{n-1}$ does". Each $F_n$ is a legitimate event because it is built from events with intersections and complements.`,
          check: chk(r`Which event says "$E_3$ occurs, but neither $E_1$ nor $E_2$ does"?`, r`$E_3E_1^cE_2^c$`, r`$E_3\cup E_1^c\cup E_2^c$`, r`$E_3E_1E_2$`, r`"And" is an intersection, and "does not occur" is a [[Union, Intersection and Complement|complement]].`, "Union, Intersection and Complement"),
        },
        {
          title: "The new events never overlap",
          text: r`Take $i<j$. An outcome in $F_i$ lies in $E_i$, because $F_i\subset E_i$. An outcome in $F_j$ lies in $E_i^c$, because $F_j$ asks that $E_i$ did not occur. No outcome is both in $E_i$ and in $E_i^c$, so $F_iF_j\subset E_iE_i^c=\varnothing$. Hence the $F_i$ are pairwise disjoint.`,
          check: chk(r`Why is $F_iF_j$ empty when $i<j$?`, r`$F_i$ needs $E_i$ to occur, while $F_j$ needs $E_i$ not to occur`, r`$F_i$ and $F_j$ have the same probability`, r`$E_i$ and $E_j$ are disjoint`, r`The two events ask for opposite things about $E_i$, so no outcome can satisfy both.`, "Disjoint Events"),
        },
        {
          title: "The new union fits inside the old union",
          text: r`Each $F_k$ is contained in $E_k$, by construction. So an outcome in $F_1\cup\cdots\cup F_n$ is in some $F_k$ with $k\le n$, hence in $E_k$, hence in $E_1\cup\cdots\cup E_n$. Thus $\bigcup_{i=1}^{n}F_i\subset\bigcup_{i=1}^{n}E_i$.`,
          check: chk(r`If every $F_i\subset E_i$, what can we say about the two unions up to $n$?`, r`$\bigcup_{i\le n}F_i\subset\bigcup_{i\le n}E_i$`, r`$\bigcup_{i\le n}E_i\subset\bigcup_{i\le n}F_i$`, r`The unions are disjoint`, r`An outcome in some $F_k$ is in the bigger $E_k$, so it is in the bigger union.`, "Union of Many Events"),
        },
        {
          title: "The old union fits inside the new union",
          text: r`Take an outcome $x$ in $E_1\cup\cdots\cup E_n$. Walk along $E_1,E_2,\ldots,E_n$ and stop at the first $E_k$ that contains $x$. Then $k\le n$, $x\in E_k$, and $x$ is in none of $E_1,\ldots,E_{k-1}$. That is exactly $x\in E_kE_1^c\cdots E_{k-1}^c=F_k$. So $x\in F_1\cup\cdots\cup F_n$.`,
          check: chk(r`An outcome is in $E_2$ and $E_4$ but not in $E_1$ or $E_3$. Which $F_i$ contains it?`, r`$F_2$`, r`$F_4$`, r`$F_1$`, r`The first event containing it is $E_2$, and it is not in $E_1$, so it is in $F_2=E_2E_1^c$. It is not in $F_4$ because $F_4$ requires $E_2$ not to occur.`, "Union of Many Events"),
        },
        {
          title: "Two sets that contain each other are equal",
          text: r`We showed $\bigcup_{i=1}^{n}F_i\subset\bigcup_{i=1}^{n}E_i$ and $\bigcup_{i=1}^{n}E_i\subset\bigcup_{i=1}^{n}F_i$. Two sets with each inside the other are equal. This holds for every $n\ge1$, and the $F_i$ are disjoint, so the $F_i$ are what the exercise asks for.`,
          check: chk(r`How do we prove two sets $A$ and $B$ are equal?`, r`Show $A\subset B$ and $B\subset A$`, r`Show $A$ and $B$ have the same size`, r`Show $A$ and $B$ are disjoint`, r`Each set must contain every member of the other, which is two inclusions.`, "Union, Intersection and Complement"),
        },
      ],
      conclusion: r`With $F_1=E_1$ and $F_n=E_nE_1^c\cdots E_{n-1}^c$ the events $F_1,F_2,\ldots$ are pairwise disjoint and $\bigcup_{i=1}^{n}F_i=\bigcup_{i=1}^{n}E_i$ for all $n\ge1$. $\blacksquare$`,
      example: {
        text: r`$E_1=\{1,2,3\}$, $E_2=\{2,3,4,5\}$, $E_3=\{1,5,6\}$. Outcome $5$: first lies in $E_2$ (not in $E_1$), so it goes to $F_2=\{4,5\}$. Outcome $6$: first lies in $E_3$, so it goes to $F_3=\{6\}$. Outcome $1$ first lies in $E_1$, so it stays in $F_1$. Each outcome is put into exactly one $F$, and nothing is lost.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "disjoint" mean here?`, a: r`Two events are disjoint if they cannot happen together: their intersection is the empty set. See [[Disjoint Events|Disjoint Events]].` },
        { q: r`What does "for all $n$" ask for?`, a: r`That the union of the first $n$ of the $F$'s equals the union of the first $n$ of the $E$'s, whatever $n$ you pick: $1$, $2$, $100$.` },
        { q: r`How can I define events out of events?`, a: r`With intersections, unions and complements. Here only intersections and complements are needed. See [[Union, Intersection and Complement|Union, Intersection and Complement]].` },
        { q: r`How do I prove that two sets are equal?`, a: r`Show each is inside the other, by taking a typical outcome of one and checking it lies in the other.` },
        { q: r`Why would anyone want this?`, a: r`To turn probabilities of overlapping events into sums of probabilities of disjoint ones. It proves Boole's inequality in this atlas.` },
      ],
      keywords: [
        "disjointification|make disjoint|disjoint sequence", "only what is new|new part of E_n|what is new", "intersect with complements|E_n E_1 complement|earlier events do not occur",
        "F_1 equals E_1|F_1 = E_1|first event unchanged", "F_i inside E_i|F_i subset of E_i|F_n subset of E_n", "pairwise disjoint|mutually exclusive|F_i F_j empty",
        "i less than j|take i<j|two indices", "event and its complement|E_i E_i complement|contradictory requirements", "empty set|nothing in common",
        "union up to n|union of first n|finite union", "first event containing|smallest index|first k", "outcome x|take an outcome|element chase",
        "both inclusions|each inside the other|two inclusions", "equal sets|sets are equal", "for every n|for all n", "complement", "intersection",
        "die example|example with a die", "additivity|add probabilities|why disjoint",
      ],
      retryPrompt: r`Without looking, explain in your own words how to build the disjoint events $F_n$ from the $E_n$ and why the unions up to $n$ agree. Then write the formula for $F_n$ in the LaTeX box and recall the key words.`,
      sourcePageText: r`5. For any sequence of events E1, E2, ..., define a new sequence F1, F2, ... of disjoint events (that is, events such that Fi Fj = empty set whenever i != j) such that for all n >= 1, the union of F1..Fn = the union of E1..En.`,
    },
  }),

  problem({
    id: "three-event-union-formula",
    name: "Three-Event Union Formula",
    group: "bounds",
    symbol: r`P(E\cup F\cup G)`,
    prerequisites: ["Seven Regions of Three Events", "Axioms of Probability", "Counting by Cases", "Partition of an Event"],
    ross: { n: 10, section: "A", page: 76 },
    title: "The union of three events, counted by regions",
    statement: r`Prove that $$P(E\cup F\cup G)=P(E)+P(F)+P(G)-P(E^cFG)-P(EF^cG)-P(EFG^c)-2P(EFG).$$`,
    meaning: r`Add the three single probabilities, then take back what was over-counted: the "exactly two events" regions were counted twice (take back once), the "all three" region was counted three times (take back twice).`,
    linkedFormal: r`For any three events, $P(E\cup F\cup G)=P(E)+P(F)+P(G)-\big[P(E^cFG)+P(EF^cG)+P(EFG^c)\big]-2P(EFG)$. The bracket holds the three "exactly two" regions of [[Seven Regions of Three Events|the Venn picture]]. Sum of single probabilities counts an "only one" region once, an "exactly two" region twice and the "all three" region three times; the corrections make every region count exactly once.`,
    example: r`Die: $E=\{1,2,3,4\}$, $F=\{3,4,5\}$, $G=\{4,5,6\}$, all outcomes equally likely. $P(E\cup F\cup G)=1$. Right side: $\frac46+\frac36+\frac36-\frac16-0-\frac16-2\cdot\frac16=\frac{10-4}{6}=1$, where $P(E^cFG)=P(\{5\})$, $P(EF^cG)=0$, $P(EFG^c)=P(\{3\})$, $P(EFG)=P(\{4\})$.`,
    pretest: {
      prompt: r`A die is rolled. $E=\{1,2,3,4\}$, $F=\{3,4,5\}$. How many outcomes lie in both $E$ and $F$?`,
      options: [r`$2$`, r`$5$`, r`$7$`],
      correct: 0,
      explanation: r`The common outcomes are $3$ and $4$. The union has $5$ outcomes; $7=4+3$ adds without correcting for the overlap.`,
    },
    check: chk(
      r`Region $EFG^c$ lies in exactly two of the three events. How many times does $P(E)+P(F)+P(G)$ count it?`,
      r`Twice`,
      r`Once`,
      r`Three times`,
      r`It sits in $E$ and in $F$ but not in $G$, so it is counted in $P(E)$ and in $P(F)$ only.`,
    ),
    faq: [
      { q: r`Is this the usual inclusion-exclusion formula?`, a: r`It is the same quantity written differently. The usual one subtracts $P(EF),P(EG),P(FG)$ and adds $P(EFG)$. Here we use the regions instead.` },
      { q: r`Why $2P(EFG)$ and not $P(EFG)$?`, a: r`The "all three" region is counted three times by the single probabilities but should be counted once, so two copies must be taken away.` },
      { q: r`Do the three events need to overlap?`, a: r`No. Regions that are empty simply have probability $0$ and the formula still holds.` },
    ],
    proof: {
      idea: r`Cut $E\cup F\cup G$ into its seven disjoint regions, give each region a letter for its probability, and compare how many times each region is counted on the two sides of the formula.`,
      steps: [
        {
          title: "Cut the picture into regions",
          text: r`Look at [[Seven Regions of Three Events|the seven regions]] inside $E\cup F\cup G$. Name their probabilities: $a=P(EF^cG^c)$, $b=P(E^cFG^c)$, $c=P(E^cF^cG)$ for "only one"; $d=P(EFG^c)$, $e=P(EF^cG)$, $f=P(E^cFG)$ for "exactly two"; and $g=P(EFG)$ for "all three".`,
          check: chk(r`How many non-overlapping regions make up $E\cup F\cup G$ when the events are in general position?`, r`Seven`, r`Eight`, r`Three`, r`Eight in/out combinations exist, and the one outside all events is not part of the union.`, "Seven Regions of Three Events"),
        },
        {
          title: "The union is the sum of the regions",
          text: r`The seven regions do not overlap and together they make up $E\cup F\cup G$. By additivity, $P(E\cup F\cup G)=a+b+c+d+e+f+g$.`,
          check: chk(r`Why may we add the probabilities of the seven regions?`, r`They are disjoint and together form $E\cup F\cup G$`, r`They all have the same probability`, r`Because $P(S)=1$`, r`Additivity of the [[Axioms of Probability|axioms]] works for disjoint events, whose union is the event we want.`, "Axioms of Probability"),
        },
        {
          title: "Write each single event in regions",
          text: r`$E$ is made of the regions inside it: only $E$, $E$ with $F$ only, $E$ with $G$ only, and all three. So $P(E)=a+d+e+g$. In the same way $P(F)=b+d+f+g$ and $P(G)=c+e+f+g$.`,
          check: chk(r`Which regions together make the event $E$?`, r`Only $E$, $EFG^c$, $EF^cG$ and $EFG$`, r`Only $E$ and $EFG$`, r`All seven regions`, r`$E$ is the union of all regions that lie inside it, as in [[Partition of an Event|cutting $E$ into pieces]].`, "Partition of an Event"),
        },
        {
          title: "Add the three single probabilities",
          text: r`$P(E)+P(F)+P(G)=(a+b+c)+2(d+e+f)+3g$. Each region is counted once for every event that contains it: "only one" regions once, "exactly two" regions twice, the "all three" region three times.`,
          check: chk(r`How many times does $P(E)+P(F)+P(G)$ count the region $EFG$?`, r`Three times, once for each event`, r`Once`, r`Twice`, r`$EFG$ lies inside $E$, inside $F$ and inside $G$.`, "Counting by Cases"),
        },
        {
          title: "Take back the over-count",
          text: r`Subtract $P(E^cFG)+P(EF^cG)+P(EFG^c)=d+e+f$ and subtract $2P(EFG)=2g$. We get $(a+b+c)+2(d+e+f)+3g-(d+e+f)-2g=a+b+c+d+e+f+g$. Now every region is counted exactly once, which is the value of $P(E\cup F\cup G)$ from step 2.`,
          check: chk(r`After the corrections, how often is the region $EFG$ counted?`, r`Once, because $3-2=1$`, r`Three times`, r`Zero times`, r`The single probabilities count it $3$ times and we remove $2$ copies.`, "Counting by Cases"),
        },
      ],
      conclusion: r`Both sides equal $a+b+c+d+e+f+g$, so $P(E\cup F\cup G)=P(E)+P(F)+P(G)-P(E^cFG)-P(EF^cG)-P(EFG^c)-2P(EFG)$. $\blacksquare$`,
      example: {
        text: r`Die, $E=\{1,2,3,4\}$, $F=\{3,4,5\}$, $G=\{4,5,6\}$. Regions: only $E$ $=\{1,2\}$ ($a=\frac26$); only $F$ $=\varnothing$ ($b=0$); only $G$ $=\{6\}$ ($c=\frac16$); $EFG^c=\{3\}$ ($d=\frac16$); $EF^cG=\varnothing$ ($e=0$); $E^cFG=\{5\}$ ($f=\frac16$); $EFG=\{4\}$ ($g=\frac16$). The sum of regions is $\frac66=1$. Also $P(E)+P(F)+P(G)=\frac{10}{6}$; subtract $d+e+f=\frac26$ and $2g=\frac26$: $\frac{10-2-2}{6}=1$.`,
      },
    },
    question: {
      faq: [
        { q: r`What do $E^cFG$ and $EF^cG$ mean?`, a: r`$E^cFG$: $F$ and $G$ occur but $E$ does not. $EF^cG$: $E$ and $G$ occur but $F$ does not. The little $c$ means "does not occur". See [[Union, Intersection and Complement|Union, Intersection and Complement]].` },
        { q: r`Is a typo hiding in the book's formula?`, a: r`Some printings show $EFG^c$ twice. The correct version has the three different "exactly two" regions $E^cFG$, $EF^cG$, $EFG^c$, each once.` },
        { q: r`Do I have to use the usual inclusion-exclusion formula?`, a: r`No. Counting how often each region is used is a complete proof, and it needs no formula at all.` },
        { q: r`How can I see where $2P(EFG)$ comes from?`, a: r`The region inside all three events is counted three times by $P(E)+P(F)+P(G)$ but it should be counted once. So we remove two copies.` },
        { q: r`How do I know my proof is complete?`, a: r`You should say what the regions are, why they are disjoint, how $P(E\cup F\cup G)$ is the sum of the regions, how many times each region appears in the right side, and that the corrections make it once.` },
      ],
      keywords: [
        "Venn diagram|three circles|picture", "seven regions|regions|pieces", "disjoint regions|do not overlap|no overlap", "additivity|add the regions|axiom three",
        "only one event|exactly one", "exactly two events|two events only", "all three events|EFG|inside all three", "counted twice|double counted|twice",
        "counted three times|triple counted|three times", "over-count|overcount|too many copies", "subtract once|take back once", "subtract twice|take back twice|two copies",
        "complement|does not occur", "each region once|exactly once|counted once", "P(E) as regions|E is a union of regions|break E into pieces", "inclusion exclusion|inclusion-exclusion|usual formula",
        "union is the sum of regions|union equals sum", "die example|worked example", "empty regions|zero probability regions",
      ],
      retryPrompt: r`Without looking, explain in your own words how often each region is counted by $P(E)+P(F)+P(G)$ and why the two corrections make every region count exactly once. Then write the final formula in the LaTeX box and recall the key words.`,
      sourcePageText: r`10. Prove that P(E u F u G) = P(E) + P(F) + P(G) - P(E^c F G) - P(E F^c G) - P(E F G^c) - 2P(EFG).`,
    },
  }),

  problem({
    id: "inclusion-exclusion-formula",
    name: "Inclusion-Exclusion Formula",
    group: "bounds",
    symbol: r`P\!\left(\bigcup_{i=1}^{n}E_i\right)`,
    prerequisites: ["Mathematical Induction", "Probability of a Union of Two Events", "Union of Many Events", "Summation Notation"],
    ross: { n: 14, section: "A", page: 77 },
    title: "Inclusion-exclusion by induction",
    statement: r`Prove Proposition 4.4 by mathematical induction: $$P\!\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{i=1}^{n}P(E_i)-\sum_{i_1<i_2}P(E_{i_1}E_{i_2})+\cdots+(-1)^{r+1}\sum_{i_1<\cdots<i_r}P(E_{i_1}\cdots E_{i_r})+\cdots+(-1)^{n+1}P(E_1E_2\cdots E_n).$$`,
    meaning: r`The chance that at least one of $n$ events happens: add singles, subtract pairs, add triples, subtract quadruples, and so on, so that every outcome is counted exactly once.`,
    linkedFormal: r`For any events $E_1,\ldots,E_n$, write $E_I=\bigcap_{i\in I}E_i$ for a non-empty set $I$ of indices. Then $P\!\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{I\ne\varnothing}(-1)^{|I|+1}P(E_I)$, the sum over all non-empty $I\subset\{1,\ldots,n\}$. The sets $I$ of size $1$ give the singles, size $2$ the pairs, and so on, with alternating signs. The step from $n$ to $n+1$ uses [[Probability of a Union of Two Events|the two-event union formula]].`,
    example: r`Three events $n=3$: $P(E_1\cup E_2\cup E_3)=\sum P(E_i)-\sum_{i<j}P(E_iE_j)+P(E_1E_2E_3)$. One die with $E_1=\{1,2\}$, $E_2=\{2,3\}$, $E_3=\{3,4\}$: $\frac26\cdot3-\left(\frac16+0+\frac16\right)+0=\frac46$, and indeed $E_1\cup E_2\cup E_3=\{1,2,3,4\}$.`,
    pretest: {
      prompt: r`$P(A)=0.5$, $P(B)=0.4$, $P(C)=0.3$, $P(AB)=0.2$, $P(AC)=0.1$, $P(BC)=0.1$, $P(ABC)=0.05$. What is $P(A\cup B\cup C)$?`,
      options: [r`$0.85$`, r`$1.2$`, r`$0.9$`],
      correct: 0,
      explanation: r`$1.2-(0.2+0.1+0.1)+0.05=0.85$. The singles alone add to $1.2$, which is impossible for a probability.`,
    },
    check: chk(
      r`In the inclusion-exclusion formula, what sign goes in front of the sum over triples $P(E_iE_jE_k)$?`,
      r`Plus`,
      r`Minus`,
      r`It depends on the events`,
      r`The sign is $(-1)^{r+1}$; with $r=3$ it is $+$.`,
    ),
    faq: [
      { q: r`What do the little $i_1<i_2$ under the sum mean?`, a: r`The sum is over all pairs of different indices, written with the smaller one first so that each pair is used once.` },
      { q: r`Why induction and not a picture?`, a: r`A picture only works for two or three events. Induction proves it for every $n$ at once.` },
      { q: r`How many terms does the formula have?`, a: r`One for each non-empty set of indices, so $2^n-1$ terms in all.` },
    ],
    proof: {
      idea: r`Induction on $n$. The case of one event is trivial. For the step from $n$ events to $n+1$ events, split the union into "the first $n$ events" and "the new event", use the two-event union formula, and apply the induction hypothesis twice: once to the first $n$ events and once to the $n$ events "$E_i$ and the new event".`,
      steps: [
        {
          title: "Say what we are proving",
          text: r`For a non-empty set $I$ of indices write $E_I=\bigcap_{i\in I}E_i$ (all of the $E_i$ with $i$ in $I$ happen). Let $S(n)$ be the statement: for every choice of $n$ events, $P\!\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{\varnothing\ne I\subset\{1,\ldots,n\}}(-1)^{|I|+1}P(E_I)$. Sets $I$ of size $r$ contribute the terms with sign $(-1)^{r+1}$, which is exactly the formula to prove.`,
          check: chk(r`In $\sum_{I}(-1)^{|I|+1}P(E_I)$, which sets $I$ give the single probabilities $P(E_i)$?`, r`Those with $|I|=1$`, r`Those with $|I|=n$`, r`Those with $|I|=2$`, r`A set of size $1$ is $\{i\}$ and $E_{\{i\}}=E_i$.`, "Summation Notation"),
        },
        {
          title: "Base case",
          text: r`For $n=1$: $P(E_1)=(-1)^{1+1}P(E_1)$, which is true. (For $n=2$ the statement is $P(E_1\cup E_2)=P(E_1)+P(E_2)-P(E_1E_2)$, which is the two-event union formula.)`,
          check: chk(r`What does $S(1)$ say?`, r`$P(E_1)=P(E_1)$`, r`$P(E_1)=0$`, r`$P(E_1)=1$`, r`There is one non-empty index set $\{1\}$, with sign $+$, giving $P(E_1)$ on both sides.`, "Mathematical Induction"),
        },
        {
          title: "Assume it for n events",
          text: r`Suppose $S(n)$ is true: the formula holds for any $n$ events whatsoever. We must show $S(n+1)$ for events $E_1,\ldots,E_{n+1}$. Note that we will use the assumption for two different families of $n$ events, so it is important that it holds for every family.`,
          check: chk(r`Why must the induction hypothesis hold for every family of $n$ events?`, r`We will apply it to two different families of $n$ events`, r`Because $n$ is always even`, r`Because the events are always disjoint`, r`One family is $E_1,\ldots,E_n$; the other is $E_1E_{n+1},\ldots,E_nE_{n+1}$.`, "Mathematical Induction"),
        },
        {
          title: "Split off the last event",
          text: r`Let $A=\bigcup_{i=1}^{n}E_i$. By [[Probability of a Union of Two Events|the two-event union formula]], $P(A\cup E_{n+1})=P(A)+P(E_{n+1})-P(AE_{n+1})$. The first term $P(A)$ is covered by $S(n)$. The remaining work is the last term.`,
          check: chk(r`Which formula gives $P(A\cup E_{n+1})=P(A)+P(E_{n+1})-P(AE_{n+1})$?`, r`The union formula for two events`, r`The induction hypothesis`, r`The fact that $A$ and $E_{n+1}$ are disjoint`, r`This is $P(X\cup Y)=P(X)+P(Y)-P(XY)$ with $X=A$ and $Y=E_{n+1}$. They need not be disjoint.`, "Probability of a Union of Two Events"),
        },
        {
          title: "Distribute, then use the hypothesis again",
          text: r`$AE_{n+1}=\left(\bigcup_{i=1}^{n}E_i\right)E_{n+1}=\bigcup_{i=1}^{n}(E_iE_{n+1})$, because an outcome is in $A$ and in $E_{n+1}$ exactly when it is in $E_{n+1}$ and in some $E_i$. This is a union of $n$ events $G_i=E_iE_{n+1}$. By $S(n)$, $P(AE_{n+1})=\sum_{\varnothing\ne J\subset\{1,\ldots,n\}}(-1)^{|J|+1}P(G_J)$, and $G_J=E_JE_{n+1}=E_{J\cup\{n+1\}}$.`,
          check: chk(r`Which equality lets us apply the hypothesis to $P(AE_{n+1})$?`, r`$\left(\bigcup_iE_i\right)E_{n+1}=\bigcup_i(E_iE_{n+1})$`, r`$\bigcup_iE_i=\bigcap_iE_i$`, r`$P(AE_{n+1})=P(A)P(E_{n+1})$`, r`Intersection distributes over union, which turns $AE_{n+1}$ into a union of $n$ events.`, "Union, Intersection and Complement"),
        },
        {
          title: "Collect the terms",
          text: r`$P(A\cup E_{n+1})=P(A)+P(E_{n+1})-P(AE_{n+1})$ now has three parts. (1) $P(A)$ gives every non-empty $I\subset\{1,\ldots,n\}$ with sign $(-1)^{|I|+1}$: all index sets that do not contain $n+1$. (2) $P(E_{n+1})$ gives the index set $\{n+1\}$ with sign $+=(-1)^{1+1}$. (3) $-P(AE_{n+1})$ gives, for each non-empty $J\subset\{1,\ldots,n\}$, the index set $I=J\cup\{n+1\}$ with sign $-(-1)^{|J|+1}=(-1)^{|J|+2}=(-1)^{|I|+1}$, since $|I|=|J|+1$. Every non-empty $I\subset\{1,\ldots,n+1\}$ appears in exactly one of the three parts, with the correct sign $(-1)^{|I|+1}$. That is $S(n+1)$.`,
          check: chk(r`A set $J$ of size $r$ is used with sign $(-1)^{r+1}$ inside $P(AE_{n+1})$, which is subtracted. What sign does the new set $J\cup\{n+1\}$, of size $r+1$, receive?`, r`$(-1)^{r+2}$, which is the right sign for size $r+1$`, r`$(-1)^{r+1}$, the same as before`, r`Always plus`, r`Subtracting flips the sign: $-(-1)^{r+1}=(-1)^{r+2}=(-1)^{(r+1)+1}$.`, "Summation Notation"),
        },
      ],
      conclusion: r`$S(1)$ is true, and $S(n)\Rightarrow S(n+1)$. By mathematical induction $S(n)$ holds for all $n\ge1$, which is Proposition 4.4. $\blacksquare$`,
      example: {
        text: r`Check the step $n=2\to3$. $A=E_1\cup E_2$. $P(A)=P(E_1)+P(E_2)-P(E_1E_2)$. $AE_3=E_1E_3\cup E_2E_3$, so $P(AE_3)=P(E_1E_3)+P(E_2E_3)-P(E_1E_2E_3)$. Then $P(A\cup E_3)=P(E_1)+P(E_2)-P(E_1E_2)+P(E_3)-P(E_1E_3)-P(E_2E_3)+P(E_1E_2E_3)$: singles with $+$, pairs with $-$, the triple with $+$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is Proposition 4.4?`, a: r`The inclusion-exclusion formula for the probability of a union of $n$ events, in Ross Chapter 2. It is the formula displayed in the statement.` },
        { q: r`What does a proof by mathematical induction look like?`, a: r`Prove the first case, then prove that "true for $n$" gives "true for $n+1$". See [[Mathematical Induction|Mathematical Induction]].` },
        { q: r`What is $E_{i_1}E_{i_2}$?`, a: r`The intersection of the two events, the event that both occur.` },
        { q: r`What do the little $i_1<i_2<\cdots<i_r$ under the sum mean?`, a: r`Sum over every choice of $r$ different indices, listed in increasing order so no choice is counted twice.` },
        { q: r`How do I know the signs are right?`, a: r`The sign for a set of size $r$ is $(-1)^{r+1}$. In the induction step, subtracting flips the sign and the size goes up by one, so the sign formula is preserved.` },
        { q: r`Where is the two-event formula used?`, a: r`In the step that splits $P(A\cup E_{n+1})$. See [[Probability of a Union of Two Events|Probability of a Union of Two Events]].` },
      ],
      keywords: [
        "inclusion exclusion|inclusion-exclusion|Proposition 4.4", "mathematical induction|induction", "base case|n equals one|first case", "induction hypothesis|assume for n|inductive assumption",
        "induction step|n plus one|step from n to n+1", "union of two events|two event formula", "split off the last event|A union E_{n+1}|last event",
        "distributive law|intersection distributes|A E_{n+1} as a union", "apply the hypothesis twice|use hypothesis again|second family", "events E_i E_{n+1}|intersections with the new event|G_i",
        "alternating signs|plus minus|signs alternate", "singles|single probabilities", "pairs|pairwise intersections", "triples|triple intersections",
        "sign (-1)^(r+1)|sign formula|minus flips the sign", "subtracting flips the sign|minus times minus|sign flip", "index sets|subsets of indices|non empty subsets",
        "every subset appears once|each index set once|collect terms", "two to the n minus one|2^n-1 terms",
      ],
      retryPrompt: r`Without looking, explain in your own words how induction proves the inclusion-exclusion formula: the base case, the hypothesis, the split of the union, and why the signs come out right. Then write the formula in the LaTeX box and recall the key words.`,
      sourcePageText: r`14. Prove Proposition 4.4 by mathematical induction.`,
    },
  }),

  problem({
    id: "generalized-bonferroni",
    name: "Generalized Bonferroni Inequality",
    group: "bounds",
    symbol: r`P(E_1\cdots E_n)\ge\sum P(E_i)-(n-1)`,
    prerequisites: ["Bonferroni's Inequality", "Mathematical Induction", "Summation Notation"],
    ross: { n: 16, section: "A", page: 77 },
    title: "Bonferroni for n events",
    statement: r`Use induction to generalize Bonferroni's inequality to $n$ events. That is, show that $$P(E_1E_2\cdots E_n)\ge P(E_1)+\cdots+P(E_n)-(n-1).$$`,
    meaning: r`If each of many events is very likely, all of them happening together is still fairly likely: you can lose at most $1-P(E_i)$ of the probability for each event.`,
    linkedFormal: r`For any events $E_1,\ldots,E_n$, $P(E_1\cdots E_n)\ge\sum_{i=1}^{n}P(E_i)-(n-1)$. It is proved by induction on $n$, using [[Bonferroni's Inequality|the two-event inequality]] $P(XY)\ge P(X)+P(Y)-1$ with $X=E_1\cdots E_n$ and $Y=E_{n+1}$.`,
    example: r`Four events each with probability $0.9$: $P(E_1E_2E_3E_4)\ge4(0.9)-3=0.6$. So all four happen together with chance at least $60\%$.`,
    pretest: {
      prompt: r`Three events have probabilities $0.9$, $0.8$ and $0.7$. What lower bound does the generalized Bonferroni inequality give for $P(E_1E_2E_3)$?`,
      options: [r`$0.4$`, r`$2.4$`, r`$0.7$`],
      correct: 0,
      explanation: r`$0.9+0.8+0.7-(3-1)=2.4-2=0.4$. The sum $2.4$ alone is not a probability; the bound subtracts $n-1=2$.`,
    },
    check: chk(
      r`For $n=5$ events, what number is subtracted from $\sum P(E_i)$ in the generalized Bonferroni bound?`,
      r`$4$`,
      r`$5$`,
      r`$1$`,
      r`The bound subtracts $n-1$, here $5-1=4$.`,
    ),
    faq: [
      { q: r`Can the bound be negative?`, a: r`Yes, when the probabilities are small. Then it is true but gives no information, because $P(E_1\cdots E_n)\ge0$ anyway.` },
      { q: r`Is there another proof without induction?`, a: r`Yes: use complements. $P(E_1\cdots E_n)=1-P(\bigcup E_i^c)\ge1-\sum P(E_i^c)=1-\sum(1-P(E_i))$, which equals the bound. That needs Boole's inequality, so induction is the more basic proof.` },
      { q: r`Where does the $-1$ per step come from?`, a: r`Each use of the two-event inequality has a $-1$. We use it $n-1$ times to glue $n$ events together.` },
    ],
    proof: {
      idea: r`Induction on $n$. Glue the last event onto the intersection of the first $n$ with the two-event Bonferroni inequality. Each gluing costs at most $1$, and gluing $n$ events needs $n-1$ gluings.`,
      steps: [
        {
          title: "State the claim and the first case",
          text: r`Let $S(n)$ say: for any $n$ events, $P(E_1\cdots E_n)\ge\sum_{i=1}^{n}P(E_i)-(n-1)$. For $n=1$ it says $P(E_1)\ge P(E_1)-0$, which is true. For $n=2$ it is the ordinary Bonferroni inequality $P(E_1E_2)\ge P(E_1)+P(E_2)-1$.`,
          check: chk(r`With only one event, what does the bound $P(E_1)\ge P(E_1)-(1-1)$ reduce to?`, r`$P(E_1)\ge P(E_1)$`, r`$P(E_1)\ge1$`, r`$P(E_1)\ge0$ only`, r`Subtracting $n-1=0$ leaves $P(E_1)$ on the right.`, "Mathematical Induction"),
        },
        {
          title: "Recall the two-event inequality",
          text: r`For any events $X$ and $Y$, $P(XY)\ge P(X)+P(Y)-1$. Reason: $P(X\cup Y)=P(X)+P(Y)-P(XY)\le1$, so $P(XY)\ge P(X)+P(Y)-1$. We may use it with $X$ and $Y$ any events we like, including intersections.`,
          check: chk(r`Which fact makes $P(X)+P(Y)-P(XY)\le1$?`, r`It is $P(X\cup Y)$, and probabilities are at most $1$`, r`$X$ and $Y$ are disjoint`, r`$P(XY)=1$`, r`The expression is the probability of the union.`, "Bonferroni's Inequality"),
        },
        {
          title: "Assume it for n events",
          text: r`Suppose $S(n)$ holds. Take $n+1$ events $E_1,\ldots,E_{n+1}$. Put $A=E_1E_2\cdots E_n$, so that $E_1\cdots E_{n+1}=AE_{n+1}$. The hypothesis tells us $P(A)\ge\sum_{i=1}^{n}P(E_i)-(n-1)$.`,
          check: chk(r`What is $E_1\cdots E_{n+1}$ in terms of $A=E_1\cdots E_n$?`, r`$AE_{n+1}$`, r`$A\cup E_{n+1}$`, r`$A^cE_{n+1}$`, r`Intersecting one more event onto $A$ gives the intersection of all $n+1$.`, "Mathematical Induction"),
        },
        {
          title: "Glue the last event on",
          text: r`By the two-event inequality with $X=A$ and $Y=E_{n+1}$: $P(AE_{n+1})\ge P(A)+P(E_{n+1})-1$.`,
          check: chk(r`Which two events are put into the two-event inequality?`, r`$A=E_1\cdots E_n$ and $E_{n+1}$`, r`$E_1$ and $E_2$`, r`$A$ and $A^c$`, r`We glue the new event $E_{n+1}$ onto the intersection of the first $n$.`, "Bonferroni's Inequality"),
        },
        {
          title: "Feed in the hypothesis and simplify",
          text: r`Replace $P(A)$ by something smaller or equal, which keeps the inequality true: $P(AE_{n+1})\ge\left[\sum_{i=1}^{n}P(E_i)-(n-1)\right]+P(E_{n+1})-1=\sum_{i=1}^{n+1}P(E_i)-n$. That is $S(n+1)$.`,
          check: chk(r`After substituting the hypothesis, what is subtracted from $\sum_{i=1}^{n+1}P(E_i)$?`, r`$(n-1)+1=n$`, r`$n-1$`, r`$n+1$`, r`The old $n-1$ and the new $1$ add up to $n$, which is $(n+1)-1$.`, "Summation Notation"),
        },
      ],
      conclusion: r`$S(1)$ holds and $S(n)\Rightarrow S(n+1)$, so $P(E_1\cdots E_n)\ge\sum_{i=1}^{n}P(E_i)-(n-1)$ for all $n$. $\blacksquare$`,
      example: {
        text: r`Each $P(E_i)=0.9$. $n=2$: $P(E_1E_2)\ge0.8$. $n=3$: $P(E_1E_2E_3)\ge P(E_1E_2)+0.9-1\ge0.8+0.9-1=0.7=3(0.9)-2$. $n=4$: $\ge0.7+0.9-1=0.6=4(0.9)-3$. Each new event costs $0.1$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is Bonferroni's inequality?`, a: r`$P(EF)\ge P(E)+P(F)-1$ for two events. See [[Bonferroni's Inequality|Bonferroni's Inequality]].` },
        { q: r`What does "use induction" ask me to do?`, a: r`Prove the case $n=1$ (or $2$), then show that the case $n$ gives the case $n+1$. See [[Mathematical Induction|Mathematical Induction]].` },
        { q: r`What is $P(E_1E_2\cdots E_n)$?`, a: r`The probability that all $n$ events happen together.` },
        { q: r`Why $(n-1)$?`, a: r`Every extra event costs at most $1$ of probability, and there are $n-1$ extra events beyond the first.` },
        { q: r`May I use the result for two events?`, a: r`Yes. The exercise says to generalize it, so the two-event inequality is the tool for the induction step.` },
      ],
      keywords: [
        "Bonferroni inequality|Bonferroni's inequality|Bonferroni", "mathematical induction|induction", "base case|n equals one|first case", "induction hypothesis|assume for n|inductive assumption",
        "n plus one|induction step|step from n to n+1", "two event inequality|two-event Bonferroni|P(XY) at least P(X)+P(Y)-1", "intersection of the first n|A equals E_1 to E_n|first n events",
        "union at most one|probability at most 1|P of union at most 1", "union formula|inclusion exclusion for two", "glue one more event|add the last event|last event",
        "each event costs at most one|minus one each step|subtract one per event", "n minus one|n-1", "lower bound|at least", "sum of probabilities|add the probabilities",
        "complement proof|use complements|Boole alternative", "all events happen together|all occur|intersection of all", "numerical example|point nine example|0.9 example",
      ],
      retryPrompt: r`Without looking, explain in your own words how the two-event Bonferroni inequality is glued repeatedly to give the bound for $n$ events by induction. Then write the final inequality in the LaTeX box and recall the key words.`,
      sourcePageText: r`16. Use induction to generalize Bonferroni's inequality to n events. That is, show that P(E1 E2 ... En) >= P(E1) + ... + P(En) - (n - 1).`,
    },
  }),

  problem({
    id: "boole-inequality",
    name: "Boole's Inequality",
    group: "infinite",
    symbol: r`P\!\left(\bigcup_{i}A_i\right)\le\sum_iP(A_i)`,
    prerequisites: ["Disjointification of Events", "Countable Additivity", "Monotonicity of Probability", "Summation Notation"],
    ross: { n: "S14", label: "Self-Test Problem 14", section: "A", page: 79 },
    title: "The union is at most the sum",
    statement: r`Prove Boole's inequality: $$P\!\left(\bigcup_{i=1}^{\infty}A_i\right)\le\sum_{i=1}^{\infty}P(A_i).$$`,
    meaning: r`The chance that at least one of many events happens is never more than the sum of their separate chances. Overlaps get counted twice in the sum, so the sum can only be too big.`,
    linkedFormal: r`For any events $A_1,A_2,\ldots$ (overlapping or not), $P\!\left(\bigcup_{i=1}^{\infty}A_i\right)\le\sum_{i=1}^{\infty}P(A_i)$. The proof makes the events disjoint with [[Disjointification of Events|the disjointification exercise]], adds their probabilities by [[Countable Additivity|countable additivity]], and compares term by term using [[Monotonicity of Probability|monotonicity]].`,
    example: r`One die, $A_1=\{1,2\}$, $A_2=\{2,3\}$, $A_3=\{3,4\}$. The union is $\{1,2,3,4\}$ with probability $\frac46$; the sum is $\frac26+\frac26+\frac26=1$. Indeed $\frac46\le1$. The outcomes $2$ and $3$ are counted twice in the sum.`,
    pretest: {
      prompt: r`$P(A_1)=0.5$ and $P(A_2)=0.6$. Which value could $P(A_1\cup A_2)$ be?`,
      options: [r`$0.8$`, r`$1.2$`, r`$1.1$`],
      correct: 0,
      explanation: r`A union is at least as likely as either event ($\ge0.6$) and, being a probability, at most $1$. So $1.1$ and $1.2$ are impossible, and $0.8$ fits when the overlap is $P(A_1A_2)=0.5+0.6-0.8=0.3$.`,
    },
    check: chk(
      r`Why can the sum $\sum P(A_i)$ be bigger than $P(\bigcup A_i)$?`,
      r`Outcomes in several $A_i$ are counted several times in the sum`,
      r`Because the $A_i$ are always disjoint`,
      r`Because $P(A_i)$ can be negative`,
      r`The sum counts an outcome once for every event containing it, but the union counts it once.`,
    ),
    faq: [
      { q: r`When is the inequality an equality?`, a: r`When the events do not overlap (they are disjoint), or overlap only in probability-zero pieces. Then the third axiom gives equality.` },
      { q: r`What if the sum is infinite?`, a: r`Then the inequality is trivially true, because a probability is at most $1$ and $1\le\infty$.` },
      { q: r`Is there a version for finitely many events?`, a: r`Yes: $P(\bigcup_{i=1}^{n}A_i)\le\sum_{i=1}^{n}P(A_i)$. Take $A_i=\varnothing$ for $i>n$, or repeat the same proof with finite sums.` },
    ],
    proof: {
      idea: r`Overlaps are the whole problem. Replace the $A_i$ by disjoint events $F_i\subset A_i$ with the same union, add the probabilities of the $F_i$ exactly (axiom), then note each $F_i$ is smaller than $A_i$.`,
      steps: [
        {
          title: "Make the events disjoint",
          text: r`Let $F_1=A_1$ and $F_n=A_nA_1^c\cdots A_{n-1}^c$, as in [[Disjointification of Events|the disjointification exercise]] (Theoretical Exercise 5). The $F_i$ are pairwise disjoint, each $F_i\subset A_i$, and $\bigcup_{i=1}^{n}F_i=\bigcup_{i=1}^{n}A_i$ for every $n$.`,
          check: chk(r`Why do we replace the $A_i$ by the disjoint events $F_i$?`, r`So that the third axiom lets us add the probabilities exactly`, r`So that all the events have equal probability`, r`So that we need no axioms`, r`Probabilities of disjoint events add exactly; for overlapping events they do not.`, "Disjointification of Events"),
        },
        {
          title: "The two infinite unions are the same",
          text: r`If $x\in\bigcup_{i=1}^{\infty}A_i$, then $x$ lies in some particular $A_n$, so $x\in\bigcup_{i=1}^{n}A_i=\bigcup_{i=1}^{n}F_i$, hence $x\in\bigcup_{i=1}^{\infty}F_i$. Conversely every $F_i\subset A_i$ gives $\bigcup_{i=1}^{\infty}F_i\subset\bigcup_{i=1}^{\infty}A_i$. So $\bigcup_{i=1}^{\infty}A_i=\bigcup_{i=1}^{\infty}F_i$.`,
          check: chk(r`An outcome lies in $\bigcup_{i=1}^{\infty}A_i$. Why is it in a finite union $\bigcup_{i=1}^{n}A_i$ for some $n$?`, r`It lies in some particular $A_n$, and then in the union up to $n$`, r`Because infinite unions are always finite`, r`Because the $A_i$ are disjoint`, r`Belonging to an infinite union means belonging to at least one of the sets, and that set has a definite index $n$.`, "Union of Many Events"),
        },
        {
          title: "Add the disjoint probabilities",
          text: r`Since the $F_i$ are pairwise disjoint, [[Countable Additivity|countable additivity]] gives $P\!\left(\bigcup_{i=1}^{\infty}A_i\right)=P\!\left(\bigcup_{i=1}^{\infty}F_i\right)=\sum_{i=1}^{\infty}P(F_i)$.`,
          check: chk(r`Which fact turns $P(\bigcup_iF_i)$ into $\sum_iP(F_i)$?`, r`Countable additivity for disjoint events`, r`Boole's inequality itself`, r`The complement rule`, r`The third axiom is exactly this statement, valid because the $F_i$ are pairwise disjoint.`, "Countable Additivity"),
        },
        {
          title: "Each piece is smaller than its event",
          text: r`Since $F_i\subset A_i$, monotonicity gives $P(F_i)\le P(A_i)$ for every $i$.`,
          check: chk(r`Why is $P(F_i)\le P(A_i)$?`, r`$F_i\subset A_i$, and a smaller event cannot be more likely`, r`$F_i$ and $A_i$ are disjoint`, r`Because $P(F_i)=P(A_i)-1$`, r`This is the monotonicity of probability for $F_i\subset A_i$.`, "Monotonicity of Probability"),
        },
        {
          title: "Compare the sums",
          text: r`Every partial sum satisfies $\sum_{i=1}^{N}P(F_i)\le\sum_{i=1}^{N}P(A_i)$, and letting $N\to\infty$ keeps the inequality (if the right side grows without bound it is $\infty$ and nothing is to prove). So $\sum_{i=1}^{\infty}P(F_i)\le\sum_{i=1}^{\infty}P(A_i)$. Chain with step 3: $P(\bigcup A_i)=\sum P(F_i)\le\sum P(A_i)$.`,
          check: chk(r`If $0\le a_i\le b_i$ for every $i$, what can we say about $\sum a_i$ and $\sum b_i$?`, r`$\sum a_i\le\sum b_i$`, r`$\sum a_i\ge\sum b_i$`, r`They are always equal`, r`Partial sums keep the inequality, and so do their limits.`, "Summation Notation"),
        },
      ],
      conclusion: r`$P\!\left(\bigcup_{i=1}^{\infty}A_i\right)=\sum_{i=1}^{\infty}P(F_i)\le\sum_{i=1}^{\infty}P(A_i)$. $\blacksquare$`,
      example: {
        text: r`$A_1=\{1,2\}$, $A_2=\{2,3\}$, $A_3=\{3,4\}$, $A_i=\varnothing$ for $i>3$. Disjointify: $F_1=\{1,2\}$, $F_2=\{3\}$, $F_3=\{4\}$. Then $P(\bigcup A_i)=\frac26+\frac16+\frac16=\frac46$ and $P(F_i)\le P(A_i)$: $\frac26\le\frac26$, $\frac16\le\frac26$, $\frac16\le\frac26$. The sum of the $A$'s is $1$, so $\frac46\le1$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is Boole's inequality in words?`, a: r`The probability that at least one event happens is at most the total of their probabilities.` },
        { q: r`What does $\bigcup_{i=1}^{\infty}$ mean?`, a: r`The union of a never-ending list of events: the outcome is in at least one of them. See [[Union of Many Events|Union of Many Events]].` },
        { q: r`May I use the disjointification exercise?`, a: r`Yes. It is the standard tool for this problem; prove the claims you need from it if you want a self-contained proof.` },
        { q: r`Why not add probabilities directly?`, a: r`Addition is only valid for disjoint events. For overlapping ones it counts the overlaps more than once.` },
        { q: r`What if the series diverges?`, a: r`Then the right side is $\infty$ and the inequality is trivial.` },
      ],
      keywords: [
        "Boole's inequality|Boole inequality|Boole", "union bound|subadditivity|sum bound", "overlaps counted twice|overlap|double counting",
        "disjointification|make disjoint|disjoint events F_i", "F_i subset of A_i|F_i inside A_i|new part", "same union|unions are equal|union of F equals union of A",
        "third axiom|countable additivity|axiom three", "pairwise disjoint|mutually exclusive|no overlap", "infinite sum|series|sum to infinity",
        "monotonicity|smaller event smaller probability|subset inequality", "P(F_i) at most P(A_i)|term by term|compare termwise", "partial sums|limit of partial sums|N to infinity",
        "infinite union|union of A_i|countable union", "first set containing|some A_n|belongs to some A_n", "sum may be infinite|trivially true|sum infinite",
        "equality when disjoint|equality case", "finite version|finitely many events", "die example|worked example",
      ],
      retryPrompt: r`Without looking, explain in your own words why the probability of a union is at most the sum of the probabilities: how to make the events disjoint, why the unions agree, which axiom adds the probabilities and which fact compares the terms. Then write the inequality in the LaTeX box and recall the key words.`,
      sourcePageText: r`14. Prove Boole's inequality: P(union of A_i, i = 1 to infinity) <= sum of P(A_i), i = 1 to infinity.`,
    },
  }),
];
