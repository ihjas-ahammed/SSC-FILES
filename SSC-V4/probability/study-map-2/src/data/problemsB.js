import { problem, chk } from "./dsl.js";
const r = String.raw;

// Part B: limits and waiting times. Ross, Chapter 2, Theoretical Exercises 19, 20 and Self-Test Problems 15, 20.
export default [
  problem({
    id: "countable-equally-likely",
    name: "Equally Likely Points Forever",
    group: "infinite",
    symbol: r`P(s_i)=c`,
    prerequisites: ["Countable Infinity", "Point Probabilities", "Geometric Series", "Probability of Not Happening", "Axioms of Probability"],
    ross: { n: 20, section: "B", page: 77, label: "Theoretical Exercise 20" },
    title: "Can countably many points be equally likely?",
    statement: r`Consider an experiment whose sample space consists of a countably infinite number of points. Show that not all points can be equally likely. Can all points have a positive probability of occurring?`,
    meaning: r`With finitely many outcomes you can share the probability out equally. With an endless list of outcomes you cannot, but you can still give every outcome some chance.`,
    linkedFormal: r`Let the sample space be $S=\{s_1,s_2,s_3,\ldots\}$ ([[Countable Infinity|countably infinite]]). If every point had the same probability $c$, then Axiom 3 would give $1=P(S)=c+c+c+\cdots$. That sum is $0$ when $c=0$ and exceeds $1$ when $c>0$, so no value of $c$ works. Yet all points can have positive probability: take $P(\{s_i\})=2^{-i}$, a [[Geometric Series|geometric series]] that adds to $1$.`,
    example: r`Try $c=0.01$. The event "one of the first $101$ points" would have probability $101\cdot0.01=1.01$, which is more than $1$. A smaller $c$ only needs more points to break the rule.`,
    pretest: {
      prompt: r`A fair die has $6$ faces, so each has probability $\tfrac16$. If a game had a never-ending list of outcomes, each with the same probability $c$, what could $c$ be?`,
      options: [r`No value works`, r`$c=0$`, r`$c=\tfrac1{1000}$`],
      correct: 0,
      explanation: r`Adding $c$ over and over without end gives either $0$ (if $c=0$) or something larger than any bound. It can never equal $1$.`,
    },
    check: chk(
      r`In the $c>0$ case, why is the event "one of the first $N$ points" a problem when $Nc>1$?`,
      r`Its probability would be above $1$, and no probability can exceed $1$`,
      r`Its probability would be negative`,
      r`The event would be empty`,
      r`Adding $N$ copies of $c$ gives $Nc$, and every probability is at most $1$.`,
      "Probability of Not Happening",
    ),
    faq: [
      { q: r`What does countably infinite mean for the sample space?`, a: r`You can list the outcomes one after another, $s_1,s_2,s_3,\ldots$, so that each one gets a place. See [[Countable Infinity|Countable Infinity]].` },
      { q: r`Why not just say every point has probability $0$?`, a: r`Then the whole sample space would have probability $0+0+0+\cdots=0$, but the axioms demand $P(S)=1$.` },
      { q: r`Is giving the points different probabilities allowed?`, a: r`Yes. Any non-negative numbers that add to $1$ define a probability. See [[Point Probabilities|Point Probabilities]].` },
    ],
    proof: {
      idea: r`If all the points had one common probability $c$, the endless sum $c+c+c+\cdots$ would have to equal $1$. We show that this is impossible for $c=0$ and for $c>0$, and then build a different assignment in which every point still has positive probability.`,
      steps: [
        {
          title: "List the points and add their chances",
          text: r`Because the sample space is countably infinite, write it as $S=\{s_1,s_2,s_3,\ldots\}$. The one-point events $\{s_1\},\{s_2\},\ldots$ never overlap and together make all of $S$. By [[Axioms of Probability|Axiom 3]] and Axiom 2, $P(\{s_1\})+P(\{s_2\})+P(\{s_3\})+\cdots=P(S)=1$.`,
          check: chk(r`If the points are listed as $s_1,s_2,s_3,\ldots$, what must $P(\{s_1\})+P(\{s_2\})+P(\{s_3\})+\cdots$ equal?`, r`$1$, because the points together fill the whole sample space`, r`$\infty$, because there are infinitely many points`, r`$0$, because each point is only one outcome`, r`The one-point events are disjoint and their union is $S$, so Axiom 3 and Axiom 2 give a total of exactly $1$.`, "Point Probabilities"),
        },
        {
          title: "Suppose, for contradiction, that they are equally likely",
          text: r`Suppose every point has the same probability $c$. Then the equation above reads $c+c+c+\cdots=1$. We look at the two possible kinds of $c$: $c=0$ and $c>0$. A probability cannot be negative, so there is no third kind.`,
          check: chk(r`If every point has the same probability $c$, which equation must hold?`, r`$c+c+c+\cdots=1$`, r`$c=1$`, r`$c+c=1$`, r`Each point contributes $c$ to the endless total, and the total must be $1$.`, "Axioms of Probability"),
        },
        {
          title: "The case c = 0",
          text: r`If $c=0$ the endless sum is $0+0+0+\cdots=0$. But the total must be $1$, so $c=0$ is impossible.`,
          check: chk(r`If every point had probability $c=0$, what would adding all the one-point probabilities give for $P(S)$?`, r`$0$, which contradicts $P(S)=1$`, r`$1$, which is fine`, r`$\infty$, which is fine`, r`Adding zeros, however many, gives $0$, never the required $1$.`, "Axioms of Probability"),
        },
        {
          title: "The case c > 0",
          text: r`Now let $c>0$. Choose a whole number $N$ larger than $\tfrac1c$, so that $Nc>1$. Look at the event $E=\{s_1,\ldots,s_N\}$. By Axiom 3, $P(E)=c+\cdots+c=Nc>1$. But no probability exceeds $1$, because [[Probability of Not Happening|$P(E)=1-P(E^c)\le1$]]. This is a contradiction, so $c>0$ is impossible too.`,
          check: chk(r`Each point has probability $c=0.01$. How many points must an event contain for its probability to exceed $1$?`, r`$101$ or more`, r`$100$`, r`Infinitely many`, r`With $101$ points the probability would be $1.01$. With exactly $100$ points it is $1$, which is not above $1$.`, "Probability of Not Happening"),
        },
        {
          title: "First answer: they cannot all be equally likely",
          text: r`Both possibilities for a common value $c$ lead to contradictions, so the points of a countably infinite sample space cannot all be equally likely.`,
          check: chk(r`What have we shown about a common probability $c$ for all the points?`, r`No value of $c$ is possible, so equally likely points cannot exist here`, r`Only $c=0$ is possible`, r`Only very small positive $c$ is possible`, r`$c=0$ makes the total $0$ and $c>0$ makes some event exceed $1$.`, "Countable Infinity"),
        },
        {
          title: "Second answer: positive probabilities do exist",
          text: r`Give the points different chances: $P(\{s_i\})=2^{-i}$, that is $\tfrac12,\tfrac14,\tfrac18,\ldots$. Every one is positive. They add to $\sum_{i=1}^{\infty}2^{-i}=1$ by the [[Geometric Series|geometric series]]: the first $N$ terms add to $1-2^{-N}$, which tends to $1$. So the probability of an event $E$ is $P(E)=\sum_{s_i\in E}2^{-i}$, and the three axioms hold: sums of non-negative numbers are non-negative, $P(S)=1$, and disjoint events add their sums.`,
          check: chk(r`What is $\tfrac12+\tfrac14+\tfrac18+\cdots$, going on forever?`, r`$1$`, r`$2$`, r`$\infty$`, r`After $N$ terms the sum is $1-2^{-N}$, which gets as close to $1$ as we like.`, "Geometric Series"),
        },
      ],
      conclusion: r`The points of a countably infinite sample space cannot all be equally likely, because a common value $c$ would force $P(S)=0$ or force some event to have probability above $1$. They can, however, all have positive probability, for example $P(\{s_i\})=2^{-i}$. $\blacksquare$`,
      example: {
        text: r`Toss a fair coin until the first head and let $s_i$ mean "the first head is on toss $i$". The chance of $s_i$ is $2^{-i}$: $s_1$ is $\tfrac12$, $s_2$ is $\tfrac14$, $s_3$ is $\tfrac18$. All are positive, none are equal, and together they add to $1$. The chance that the first head comes on an odd toss is $\tfrac12+\tfrac18+\tfrac1{32}+\cdots=\tfrac23$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "countably infinite sample space" mean?`, a: r`The outcomes can be written as a never-ending list $s_1,s_2,s_3,\ldots$. An example is "the toss on which the first head appears". See [[Countable Infinity|Countable Infinity]].` },
        { q: r`What does "equally likely" mean here?`, a: r`Every outcome has exactly the same probability $c$, as for the faces of a fair die.` },
        { q: r`Where do the axioms come in?`, a: r`Axiom 3 lets us add the probabilities of the endless list of one-point events, and Axiom 2 says the total is $1$. Everything else follows from adding.` },
        { q: r`Is the second question asking me to prove something?`, a: r`It asks whether positive probabilities for all points are possible. A single example that satisfies the axioms answers it with yes.` },
        { q: r`Can an infinite sum of positive numbers be finite?`, a: r`Yes, if the numbers shrink fast enough. See [[Geometric Series|Geometric Series]].` },
      ],
      keywords: [
        "countably infinite|countable|can be listed", "sample space", "equally likely|same probability", "common value c|c for every point|same c",
        "one-point events|single points|each point", "disjoint events|mutually exclusive", "Axiom 3|countable additivity|additivity axiom",
        "P(S)=1|whole sample space has probability 1|total probability 1", "c equals 0|c = 0|zero probability case", "sum of zeros|0+0+0|adds to zero",
        "c greater than 0|c > 0|positive case", "N times c|Nc|N c exceeds 1", "event with N points|first N points", "probability cannot exceed 1|at most 1|P(E) <= 1",
        "contradiction|impossible|cannot hold", "not all equally likely", "geometric series|2^{-i}|powers of one half", "1/2 + 1/4 + 1/8|one half plus one quarter",
        "sums to 1|adds up to 1", "all points positive|positive probability for each point|every point has positive probability",
      ],
      retryPrompt: r`Without looking, explain in your own words why the points of a countably infinite sample space cannot all have the same probability, and then give an assignment in which every point still has positive probability. Write the key sums in the LaTeX box and recall the key words.`,
      sourcePageText: r`20. Consider an experiment whose sample space consists of a countably infinite number of points. Show that not all points can be equally likely. Can all points have a positive probability of occurring?`,
    },
  }),

  problem({
    id: "sure-events-intersection",
    name: "Intersection of Certain Events",
    group: "infinite",
    symbol: r`P\Big(\bigcap_{i}A_i\Big)=1`,
    prerequisites: ["Probability of Not Happening", "Union of Null Events", "Union, Intersection and Complement", "Disjoint Events", "Axioms of Probability"],
    ross: { n: "S15", section: "B", page: 79, label: "Self-Test Problem 15" },
    title: "Endlessly many sure things at once",
    statement: r`Show that if $P(A_i)=1$ for all $i\ge1$, then $$P\!\left(\bigcap_{i=1}^{\infty}A_i\right)=1.$$`,
    meaning: r`If each event in an endless list is certain, then all of them happening together is still certain.`,
    linkedFormal: r`If $P(A_i)=1$ for $i=1,2,3,\ldots$ then $P\big(\bigcap_{i=1}^{\infty}A_i\big)=1$. Write $B_i=A_i^c$. Then $P(B_i)=0$ by the [[Probability of Not Happening|complement rule]]. The complement of the intersection is $\bigcup_i B_i$, and a [[Union of Null Events|union of null events]] has probability $0$. So the intersection has probability $1-0=1$.`,
    example: r`Pick a number at random from $0$ to $1$. For each fraction $q_i$ on a list of all fractions, let $A_i$ be "the number is not $q_i$". Each $A_i$ has probability $1$. All of them together say "the number is not a fraction", and the result says this has probability $1$.`,
    pretest: {
      prompt: r`Each of $A_1$ and $A_2$ has probability $1$. Does it follow that $P(A_1\cap A_2)=1$?`,
      options: [r`Yes, because the leftover parts $A_1^c$ and $A_2^c$ both have probability $0$`, r`No, it could be as low as $0$`, r`No, it could only be $\tfrac12$`],
      correct: 0,
      explanation: r`The ways $A_1\cap A_2$ can fail are $A_1^c$ or $A_2^c$, and neither has any probability. Zero plus zero is still zero, so the intersection keeps probability $1$.`,
    },
    check: chk(
      r`Why does $P(A_i)=1$ for all $i$ turn into a statement about $B_i=A_i^c$ having probability $0$?`,
      r`$P(B_i)=1-P(A_i)=1-1=0$`,
      r`$P(B_i)=P(A_i)=1$`,
      r`$P(B_i)=\tfrac12$ for every $i$`,
      r`The probability of the complement is one minus the probability of the event.`,
    ),
    faq: [
      { q: r`Does $P(A)=1$ mean $A$ is the whole sample space?`, a: r`No. It only means the missing part has probability $0$. See [[Probability of Not Happening|Probability of Not Happening]].` },
      { q: r`Why is an endless list harder than a finite one?`, a: r`For finitely many events you can add up the failure chances one at a time. For an endless list you need Axiom 3, which allows adding countably many disjoint events.` },
      { q: r`What is the plan?`, a: r`Move to the failures $B_i=A_i^c$, show that the event "something fails" has probability $0$, and subtract from $1$.` },
    ],
    proof: {
      idea: r`An intersection fails exactly when at least one of its events fails. So we study the failure events $B_i=A_i^c$, show that their union has probability $0$, and take the complement.`,
      steps: [
        {
          title: "Turn certainty into impossibility",
          text: r`Let $B_i=A_i^c$ be the event that $A_i$ fails. By the [[Probability of Not Happening|complement rule]], $P(B_i)=1-P(A_i)=1-1=0$ for every $i$.`,
          check: chk(r`If $P(A)=1$, what is $P(A^c)$?`, r`$0$`, r`$1$`, r`$\tfrac12$`, r`The two chances add to $1$, so the complement gets nothing.`, "Probability of Not Happening"),
        },
        {
          title: "Flip the intersection with De Morgan",
          text: r`A point is outside $A_1\cap A_2\cap\cdots$ exactly when it misses at least one $A_i$, that is, when it lies in at least one $B_i$. So $\big(\bigcap_i A_i\big)^c=\bigcup_i B_i$. This is [[Union, Intersection and Complement|De Morgan's law]] for an endless list.`,
          check: chk(r`Which event is the complement of $A_1\cap A_2\cap A_3\cap\cdots$ when $B_i=A_i^c$?`, r`$B_1\cup B_2\cup B_3\cup\cdots$`, r`$B_1\cap B_2\cap B_3\cap\cdots$`, r`$A_1\cup A_2\cup A_3\cup\cdots$`, r`To fall outside the intersection, a point only has to fail one of the events.`, "Union, Intersection and Complement"),
        },
        {
          title: "Cut the union into disjoint pieces",
          text: r`Define $F_1=B_1$ and, for $i\ge2$, let $F_i$ be the part of $B_i$ that lies in none of $B_1,\ldots,B_{i-1}$. These pieces never overlap: if $i<j$, then $F_j$ contains nothing from $B_i$, while $F_i$ lies inside $B_i$. Their union is the same as the union of all the $B_i$: a point in some $B_i$ lies in a first one, say $B_k$, and then it is in $F_k$.`,
          check: chk(r`Why can the pieces $F_i$ and $F_j$ with $i<j$ never share a point?`, r`$F_i$ lies inside $B_i$, and $F_j$ contains nothing from $B_i$`, r`Because the original events $B_i$ are disjoint to begin with`, r`Because both have probability $0$`, r`The $B_i$ may overlap. The pieces are built to remove exactly that overlap.`, "Disjoint Events"),
        },
        {
          title: "Every piece has probability 0",
          text: r`Since $F_i$ sits inside $B_i$, we can split $B_i$ into the two disjoint parts $F_i$ and $B_i$ without $F_i$. By Axiom 3, $P(B_i)=P(F_i)+P(B_i\text{ without }F_i)$, and by Axiom 1 the second part is at least $0$. Hence $0=P(B_i)\ge P(F_i)\ge0$, so $P(F_i)=0$.`,
          check: chk(r`The event $F_i$ lies inside $B_i$ and $P(B_i)=0$. What is $P(F_i)$?`, r`$0$, since $0\le P(F_i)\le P(B_i)=0$`, r`Anything from $0$ up to $1$`, r`$1$`, r`A part of a null event cannot have more probability than the whole.`, "Axioms of Probability"),
        },
        {
          title: "Add the zeros with Axiom 3",
          text: r`The $F_i$ are disjoint and have the same union as the $B_i$, so by Axiom 3, $P\big(\bigcup_i B_i\big)=P\big(\bigcup_i F_i\big)=\sum_i P(F_i)=0+0+0+\cdots=0$.`,
          check: chk(r`Which axiom lets us write $P(F_1\cup F_2\cup\cdots)=P(F_1)+P(F_2)+\cdots$ for an endless list?`, r`Axiom 3, additivity for disjoint events`, r`Axiom 1, probabilities are non-negative`, r`Axiom 2, $P(S)=1$`, r`Disjointness is what allows the probabilities to be added.`, "Axioms of Probability"),
        },
        {
          title: "Come back to the intersection",
          text: r`$\bigcap_i A_i$ is the complement of $\bigcup_i B_i$. Using the complement rule again, $P\big(\bigcap_i A_i\big)=1-P\big(\bigcup_i B_i\big)=1-0=1$.`,
          check: chk(r`$P\big(\bigcup_i B_i\big)=0$. What is the probability of its complement $\bigcap_i A_i$?`, r`$1$`, r`$0$`, r`$\tfrac12$`, r`The complement gets whatever the event leaves over: $1-0=1$.`, "Probability of Not Happening"),
        },
      ],
      conclusion: r`Because each failure event $B_i$ has probability $0$, so does their union, and therefore the intersection $\bigcap_i A_i$ has probability $1-0=1$. $\blacksquare$`,
      example: {
        text: r`Take the finite case $S=\{a,b,c\}$ with $P(a)=\tfrac12$, $P(b)=\tfrac12$, $P(c)=0$. Let $A_1=\{a,b\}$, $A_2=\{a,b,c\}$, $A_3=\{a,b\}$. Each has probability $1$. The failure events are $B_1=\{c\}$, $B_2=\varnothing$, $B_3=\{c\}$, all of probability $0$. Their union $\{c\}$ has probability $0$, and the intersection $\{a,b\}$ has probability $1-0=1$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does $P(A_i)=1$ really mean?`, a: r`The event is almost sure to happen. The only way it can fail is on a set of outcomes of probability $0$. See [[Probability of Not Happening|Probability of Not Happening]].` },
        { q: r`What is $\bigcap_{i=1}^{\infty}A_i$?`, a: r`All the outcomes that lie in every $A_i$ at once: $A_1$ and $A_2$ and $A_3$ and so on without end.` },
        { q: r`Why not multiply the probabilities $1\cdot1\cdot1\cdots$?`, a: r`Multiplying probabilities needs independence, which the question does not give. The proof works without it, by looking at failures instead.` },
        { q: r`Why is the endless case different from a finite list?`, a: r`Adding an endless list of probabilities needs the full Axiom 3. See [[Union of Null Events|Union of Null Events]].` },
        { q: r`How do I know the proof is complete?`, a: r`It should name the failure events, use De Morgan to turn the intersection into a union, cut the union into disjoint pieces of probability $0$, add with Axiom 3, and return to the intersection with the complement rule.` },
      ],
      keywords: [
        "complement rule|P(A^c)=1-P(A)|probability of the complement", "failure event|B_i|A_i complement|A_i^c", "probability zero|null event|P(B_i)=0",
        "De Morgan|De Morgan's law", "complement of the intersection|not in the intersection", "union of the failures|at least one fails|some A_i fails",
        "disjoint pieces|disjointify|F_i", "earlier events removed|remove the overlap|not in any earlier", "same union|same union as before",
        "subset has smaller probability|monotonicity|F_i inside B_i", "Axiom 1|non-negative probability|probabilities are at least 0", "Axiom 3|countable additivity|additivity axiom",
        "sum of zeros|0+0+0|adds to zero", "countably many|endless list|infinitely many events", "infinite union is null|union of null events|null union",
        "one minus zero|1-0|equals 1", "intersection has probability 1|probability one", "almost sure|almost surely|certain event",
      ],
      retryPrompt: r`Without looking, explain in your own words why endlessly many certain events happening together is still certain. Name the failure events, say how De Morgan and Axiom 3 are used, and finish with the complement. Write the key formulas in the LaTeX box and recall the key words.`,
      sourcePageText: r`15. Show that if P(A_i) = 1 for all i >= 1, then P(intersection_{i=1}^{infinity} A_i) = 1.`,
    },
  }),

  problem({
    id: "waiting-for-rth-red",
    name: "Waiting for the r-th Red Ball",
    group: "counting",
    symbol: r`P_k=\frac{\binom{k-1}{r-1}\binom{n+m-k}{n-r}}{\binom{n+m}{n}}`,
    prerequisites: ["Colour Patterns", "Random Order of Draws", "Combination", "Basic Counting Principle", "Event"],
    ross: { n: 19, section: "B", page: 77, label: "Theoretical Exercise 19" },
    title: "Stop at the r-th red ball",
    statement: r`An urn contains $n$ red and $m$ blue balls. They are withdrawn one at a time until a total of $r$, $r\le n$, red balls have been withdrawn. Find the probability that a total of $k$ balls are withdrawn. Hint: A total of $k$ balls will be withdrawn if there are $r-1$ red balls in the first $k-1$ withdrawals and the $k$th withdrawal is a red ball.`,
    meaning: r`Keep drawing until the $r$-th red ball shows up. The question is how likely it is that this happens exactly on draw number $k$.`,
    linkedFormal: r`For $r\le k\le r+m$, $$P(\text{exactly }k\text{ balls withdrawn})=\frac{\binom{k-1}{r-1}\binom{n+m-k}{n-r}}{\binom{n+m}{n}},$$ and the probability is $0$ for other $k$. Equivalent form from the hint: $\dfrac{\binom{n}{r-1}\binom{m}{k-r}}{\binom{n+m}{k-1}}\cdot\dfrac{n-r+1}{n+m-k+1}$. Both count [[Colour Patterns|colour patterns]] or draws in which the $r$-th red falls on place $k$.`,
    example: r`$n=3$ red, $m=2$ blue, $r=2$. Of the $\binom53=10$ patterns, those whose second red is in place $3$ are $RBRRB$, $RBRBR$, $BRRRB$, $BRRBR$. So $P=\tfrac4{10}=\tfrac25$. The formula agrees: $\binom{2}{1}\binom{2}{1}\big/\binom53=\tfrac4{10}$.`,
    pretest: {
      prompt: r`An urn has 3 red and 2 blue balls. They are drawn one at a time until 2 red balls have appeared. How many balls could be drawn altogether?`,
      options: [r`$2$, $3$ or $4$`, r`Exactly $2$`, r`$2$ up to $5$`],
      correct: 0,
      explanation: r`At least $2$ draws are needed (both red at once). If both blue balls come early, we need $2+2=4$ draws. We never need all $5$: by then two reds have already appeared.`,
    },
    check: chk(
      r`Draws are made until $r=2$ reds have appeared. Which description matches "exactly $k=5$ balls are drawn"?`,
      r`Ball $5$ is red and the first $4$ balls hold exactly $1$ red`,
      r`The first $5$ balls hold exactly $2$ reds`,
      r`Ball $5$ is red`,
      r`The $5$th draw must be the $2$nd red, with only one red before it.`,
    ),
    faq: [
      { q: r`Why does the hint say "$r-1$ red balls in the first $k-1$ withdrawals"?`, a: r`To stop exactly at draw $k$, we must have seen $r-1$ reds before it, and then the $k$th ball supplies the $r$-th red.` },
      { q: r`Is the answer a single number?`, a: r`It is a formula in $n,m,r,k$. For each $k$ from $r$ to $r+m$ it gives the probability of stopping at draw $k$.` },
      { q: r`The hint gives a different-looking formula. Which is right?`, a: r`Both. Multiply the chance of $r-1$ reds in the first $k-1$ draws by the chance that the $k$th ball is red. After simplifying you get the same value as the counting formula below.` },
    ],
    proof: {
      idea: r`Pretend every ball is eventually drawn, so the colours form a random row of $n$ reds and $m$ blues. Drawing stops at place $k$ exactly when the $r$-th red sits in place $k$. Count the rows that do this and divide by all rows.`,
      steps: [
        {
          title: "Think of a full row of colours",
          text: r`Keep drawing even after stopping, until the urn is empty. Write down only the colours: a row of $n$ letters $R$ and $m$ letters $B$. There are $\binom{n+m}{n}$ such [[Colour Patterns|colour patterns]], and since the draws are in [[Random Order of Draws|random order]], each pattern has the same probability $\tfrac1{\binom{n+m}{n}}$. Each pattern comes from the same number, $n!\,m!$, of orders of the labelled balls.`,
          check: chk(r`Why are all colour patterns of $n$ red and $m$ blue balls equally likely?`, r`Each pattern comes from exactly $n!\,m!$ of the equally likely orders of labelled balls`, r`Because there are as many red balls as blue balls`, r`Because the first ball is equally likely to be red or blue`, r`The same number of labelled orders produce every pattern, so no pattern is favoured.`, "Random Order of Draws"),
        },
        {
          title: "Translate the event",
          text: r`We stop after exactly $k$ balls when the $r$-th red ball is ball number $k$. That means two things at once: place $k$ holds a red ball, and the first $k-1$ places hold exactly $r-1$ red balls. Then no earlier place can be the $r$-th red, and the $r$-th red is at place $k$.`,
          check: chk(r`Which description is the same as "exactly $k$ balls are withdrawn"?`, r`Place $k$ is red and the first $k-1$ places contain exactly $r-1$ reds`, r`The first $k$ places contain exactly $r$ reds, in any positions`, r`Place $k$ is red`, r`If the $r$-th red were earlier, we would have stopped before draw $k$.`, "Event"),
        },
        {
          title: "Place the earlier reds",
          text: r`Among the first $k-1$ places we must put exactly $r-1$ red letters. We choose which places they take: $\binom{k-1}{r-1}$ ways. All other places among the first $k-1$ are blue.`,
          check: chk(r`In how many ways can $r-1$ red letters be placed among the first $k-1$ places?`, r`$\binom{k-1}{r-1}$`, r`$\binom{k}{r}$`, r`$\binom{n}{r-1}$`, r`We are choosing $r-1$ places out of $k-1$ places.`, "Combination"),
        },
        {
          title: "Place the remaining reds",
          text: r`Place $k$ is red. We have used $r-1$ reds earlier and $1$ at place $k$, which leaves $n-r$ reds for the places after $k$. There are $n+m-k$ such places, so the remaining reds can go in $\binom{n+m-k}{n-r}$ ways. Everything else is blue, and the blue count comes out right automatically.`,
          check: chk(r`After $r-1$ reds in the first $k-1$ places and one red at place $k$, how many reds are left to place, and in how many places?`, r`$n-r$ reds in $n+m-k$ places`, r`$n-r$ reds in $n+m-k+1$ places`, r`$n-r+1$ reds in $n+m-k$ places`, r`Place $k$ is already used, so the later places are $k+1,\ldots,n+m$, which is $n+m-k$ places.`, "Combination"),
        },
        {
          title: "Multiply the two choices",
          text: r`First choose the red places among the first $k-1$, then choose the red places after $k$. These are two steps in a row, so by the [[Basic Counting Principle|counting principle]] the number of patterns in our event is $\binom{k-1}{r-1}\binom{n+m-k}{n-r}$.`,
          check: chk(r`Why do we multiply the two counts $\binom{k-1}{r-1}$ and $\binom{n+m-k}{n-r}$?`, r`Choosing places before $k$ and choosing places after $k$ are two independent steps one after the other`, r`Because the two cases are alternatives`, r`Because both counts are always equal`, r`Steps in a row multiply, alternatives add.`, "Basic Counting Principle"),
        },
        {
          title: "Divide by all patterns",
          text: r`Every pattern has probability $\tfrac1{\binom{n+m}{n}}$, so $P(\text{exactly }k\text{ balls withdrawn})=\dfrac{\binom{k-1}{r-1}\binom{n+m-k}{n-r}}{\binom{n+m}{n}}$. This is non-zero only for $r\le k\le r+m$: we need at least $r$ draws, and at most $m$ blue balls can come first.`,
          check: chk(r`Use the formula with $n=3$, $m=2$, $r=2$, $k=3$. What is the probability?`, r`$\tfrac25$`, r`$\tfrac3{10}$`, r`$\tfrac15$`, r`The count is $\binom{2}{1}\binom{2}{1}=4$ patterns, out of $\binom53=10$.`, "Combination"),
        },
      ],
      conclusion: r`The probability that exactly $k$ balls are withdrawn is $\dfrac{\binom{k-1}{r-1}\binom{n+m-k}{n-r}}{\binom{n+m}{n}}$ for $r\le k\le r+m$, and $0$ otherwise. By the hint, it equals $\dfrac{\binom{n}{r-1}\binom{m}{k-r}}{\binom{n+m}{k-1}}\cdot\dfrac{n-r+1}{n+m-k+1}$ too. $\blacksquare$`,
      example: {
        text: r`$n=3$ red, $m=2$ blue, $r=2$. The possible stopping places are $k=2,3,4$. $k=2$: $\binom11\binom31\big/\binom53=\tfrac3{10}$. $k=3$: $\binom21\binom21\big/\binom53=\tfrac4{10}$ (the four patterns listed above). $k=4$: $\binom31\binom11/\binom53=\tfrac3{10}$. The three probabilities add to $\tfrac{3+4+3}{10}=1$, as they must.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "withdrawn one at a time until $r$ red balls" mean?`, a: r`Draw a ball, look at its colour, set it aside, and repeat. Stop as soon as $r$ reds have been withdrawn in total. The number of balls withdrawn is then random.` },
        { q: r`Why is $k$ at least $r$ and at most $r+m$?`, a: r`You need at least $r$ draws to see $r$ reds. At worst all $m$ blue balls come first, so at most $m+r$ draws are needed.` },
        { q: r`Do I need conditional probability?`, a: r`No. Counting colour patterns is enough. See [[Colour Patterns|Colour Patterns]].` },
        { q: r`What does the hint do?`, a: r`It tells us what stopping at draw $k$ looks like: $r-1$ reds in the first $k-1$ draws, and a red on draw $k$.` },
        { q: r`How can I check my answer?`, a: r`Add the probabilities for $k=r,\ldots,r+m$. They must total $1$, because the process always stops somewhere in that range.` },
      ],
      keywords: [
        "colour pattern|row of colours|sequence of colours", "random order|random line-up|order of draws", "equally likely patterns|each pattern same probability|all patterns equally likely",
        "C(n+m, n)|n+m choose n|total patterns", "n red and m blue|n red m blue", "stop at the r-th red|r-th red ball|until r reds",
        "place k|draw k|kth draw", "kth ball is red|ball k is red|red at place k", "r-1 reds in the first k-1|r minus 1 reds|earlier reds",
        "C(k-1, r-1)|k-1 choose r-1|choose the earlier red places", "n-r reds left|remaining reds|reds after k", "n+m-k places|places after k|later places",
        "C(n+m-k, n-r)|n+m-k choose n-r|choose the later red places", "multiply the two counts|counting principle|two steps", "divide by all patterns|over C(n+m, n)",
        "k from r to r+m|r <= k <= r+m|range of k", "probabilities add to 1|sum over k is 1|check the total", "hint formula|first k-1 draws then red|hypergeometric times last red",
      ],
      retryPrompt: r`Without looking, explain in your own words how to find the probability that exactly $k$ balls are withdrawn when we stop at the $r$-th red ball. Describe the colour pattern, count the places for the earlier and later reds, and write the final formula in the LaTeX box. Then recall the key words.`,
      sourcePageText: r`19. An urn contains n red and m blue balls. They are withdrawn one at a time until a total of r, r <= n, red balls have been withdrawn. Find the probability that a total of k balls are withdrawn. Hint: A total of k balls will be withdrawn if there are r - 1 red balls in the first k - 1 withdrawals and the kth withdrawal is a red ball.`,
    },
  }),

  problem({
    id: "reds-gone-before-blues",
    name: "Reds Gone Before Blues",
    group: "counting",
    symbol: r`P=\frac{m}{n+m}`,
    prerequisites: ["Random Order of Draws", "Colour Patterns", "Factorial and Permutations", "Disjoint Events", "Event"],
    ross: { n: "S20", section: "B", page: 79, label: "Self-Test Problem 20" },
    title: "Which colour is left to the very end?",
    statement: r`Balls are randomly removed from an urn initially containing $20$ red and $10$ blue balls. What is the probability that all of the red balls are removed before all of the blue ones have been removed?`,
    meaning: r`Keep taking balls out until the urn is empty. We want the chance that the last red ball leaves while at least one blue ball is still inside.`,
    linkedFormal: r`With $n$ red and $m$ blue balls, the probability that all the reds are removed before all the blues is $\dfrac{m}{n+m}$. Here it is $\dfrac{10}{30}=\dfrac13$. The event happens exactly when the very last ball removed is blue, and in a [[Random Order of Draws|random order]] each ball is equally likely to be last.`,
    example: r`Take $2$ red and $1$ blue ball. The colour patterns are $RRB$, $RBR$, $BRR$, each with probability $\tfrac13$. Only $RRB$ ends in blue, and in it both reds are removed before the blue. So the probability is $\tfrac13=\tfrac{m}{n+m}$.`,
    pretest: {
      prompt: r`An urn has $1$ red and $1$ blue ball, taken out one by one at random until it is empty. What is the chance that the red ball is removed before the blue one?`,
      options: [r`$\tfrac12$`, r`$\tfrac13$`, r`$1$`],
      correct: 0,
      explanation: r`There are two orders, red-blue and blue-red, equally likely. Red comes first in one of them.`,
    },
    check: chk(
      r`Suppose the final ball removed from the urn is red. What does that say about the event "all reds are removed before all blues"?`,
      r`It fails, because every blue ball was gone before that last red ball left`,
      r`It holds, because reds are the majority`,
      r`Nothing can be said`,
      r`If the last ball is red, then every blue ball left earlier, so the reds were not all gone first.`,
    ),
    faq: [
      { q: r`Does the question say the urn is emptied completely?`, a: r`No, but we may keep going in our heads until it is empty. Whatever happens afterwards cannot change which colour finished first.` },
      { q: r`Do I need to follow the removals step by step?`, a: r`No. A single observation does the job: the event happens exactly when the last ball is blue. See [[Random Order of Draws|Random Order of Draws]].` },
      { q: r`Why is the answer not $\tfrac{20}{30}$?`, a: r`There are more reds, but that makes it likely that the last ball is red. The event needs the last ball to be blue, and blue is the minority.` },
    ],
    proof: {
      idea: r`Keep removing balls until the urn is empty. The event "all reds go before all blues" is the same as "the last ball removed is blue". By symmetry every ball is equally likely to be last, so we count the blue balls.`,
      steps: [
        {
          title: "Remove everything in a random order",
          text: r`Continue removing until all $30$ balls are out. Think of the balls as labelled. The order in which they come out is one of $30!$ line-ups, and by [[Random Order of Draws|random removal]] every line-up is equally likely.`,
          check: chk(r`How many equally likely orders are there for $30$ labelled balls removed one by one?`, r`$30!$`, r`$30$`, r`$\binom{30}{10}$`, r`The first place has $30$ choices, the next $29$, and so on: $30\cdot29\cdots1=30!$.`, "Random Order of Draws"),
        },
        {
          title: "Translate the event",
          text: r`All reds are removed before all blues exactly when the last red leaves while some blue is still inside. Then the final ball in the line-up is blue. Conversely, if the last ball is blue, it is still in the urn when the last red leaves. If the last ball is red, every blue has left earlier, and the event fails. So the event is "the last ball removed is blue".`,
          check: chk(r`Which statement is equivalent to "all reds are removed before all blues"?`, r`The last ball removed is blue`, r`The first ball removed is red`, r`The last ball removed is red`, r`A red last ball means every blue left before it, which is the opposite of the event.`, "Event"),
        },
        {
          title: "A chosen ball is last with probability 1/30",
          text: r`Fix one particular ball. The line-ups with this ball in last place are found by arranging the other $29$ balls in the first $29$ places: $29!$ line-ups. So $P(\text{this ball is last})=\dfrac{29!}{30!}=\dfrac1{30}$. The same holds for every ball.`,
          check: chk(r`How many line-ups of $30$ labelled balls have one chosen ball in last place?`, r`$29!$`, r`$30$`, r`$\tfrac{30!}{2}$`, r`The other $29$ balls fill the first $29$ places in any order.`, "Factorial and Permutations"),
        },
        {
          title: "Add over the blue balls",
          text: r`The last ball is blue if it is blue ball number $1$, or number $2$, and so on up to number $10$. Only one ball can be last, so these $10$ events are [[Disjoint Events|disjoint]] and their probabilities add: $10\cdot\tfrac1{30}=\tfrac13$.`,
          check: chk(r`Why can we add the ten probabilities $\tfrac1{30}$ of "blue ball $j$ is last"?`, r`Two different balls cannot both be last, so the events are disjoint`, r`Because the events are independent`, r`Because each probability equals $1$`, r`Disjoint events add, by Axiom 3.`, "Disjoint Events"),
        },
        {
          title: "A second look with colour patterns",
          text: r`Ignoring the labels, the colours form a row of $20$ $R$ and $10$ $B$: $\binom{30}{10}=\binom{30}{20}$ equally likely [[Colour Patterns|colour patterns]]. Those ending in $B$ have all $20$ reds among the first $29$ places: $\binom{29}{20}$. The ratio is $\dfrac{\binom{29}{20}}{\binom{30}{20}}=\dfrac{10}{30}=\dfrac13$, the same answer.`,
          check: chk(r`In the colour-pattern view, how many patterns of $20$ red and $10$ blue end in blue?`, r`$\binom{29}{20}$, the red places are chosen among the first $29$`, r`$\binom{29}{10}$`, r`$\binom{30}{10}$`, r`With the last place blue, $20$ reds sit among $29$ places. The count $\binom{29}{10}$ is for patterns ending in red.`, "Colour Patterns"),
        },
      ],
      conclusion: r`All reds are removed before all blues exactly when the last ball removed is blue. Each ball is equally likely to be last, so the probability is $\dfrac{10}{30}=\dfrac13$. In general it is $\dfrac{m}{n+m}$. $\blacksquare$`,
      example: {
        text: r`Take red balls $R_1,R_2$ and blue ball $B$. The $6$ equally likely orders are $R_1R_2B$, $R_2R_1B$, $R_1BR_2$, $R_2BR_1$, $BR_1R_2$, $BR_2R_1$. The reds finish before the blue exactly in the first two, where $B$ is last. That gives $\tfrac26=\tfrac13=\tfrac{1}{1+2}$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "all reds removed before all blues" mean?`, a: r`The last red ball leaves the urn at a time when at least one blue ball is still inside.` },
        { q: r`How can the order of removal be random?`, a: r`Each time a ball is removed, every ball still in the urn is equally likely to be the one. Over the whole emptying, every line-up of the balls is equally likely.` },
        { q: r`Is it the same as the first ball being red?`, a: r`No. The event is about which colour is exhausted first, which is decided by the last ball, not the first.` },
        { q: r`Do I have to continue after the event is decided?`, a: r`In real life no, but imagining the urn emptied makes the picture simple. The event has already happened or failed by then.` },
        { q: r`How do I know the argument is complete?`, a: r`State the event as "the last ball is blue", justify both directions, explain why every ball is equally likely to be last, and add over the $10$ blue balls.` },
      ],
      keywords: [
        "random order|random line-up|order of removal", "all 30 balls|keep removing until empty|empty the urn", "30 factorial|30!|all line-ups",
        "equally likely line-ups|every order equally likely|each order same chance", "last ball|final ball|ball in last place", "last ball is blue|last one is blue|blue last",
        "equivalent event|same event|if and only if", "last red leaves|some blue still inside|blue still in the urn", "last ball red fails|red last means failure|event fails if red is last",
        "symmetry|each ball equally likely|any ball could be last", "29 factorial|29!|other 29 balls", "1/30|one in thirty|chance a chosen ball is last",
        "10 blue balls|ten blue balls|blue balls", "disjoint events|only one ball is last|mutually exclusive", "add the probabilities|10 times 1/30|sum over blue balls",
        "10/30|one third|1/3", "m over n+m|m/(n+m)|general formula", "colour patterns|C(29,20)|patterns ending in blue",
      ],
      retryPrompt: r`Without looking, explain in your own words why the probability that all red balls leave before all blue balls is $\tfrac{10}{30}$. Say what the event means for the last ball removed, why each ball is equally likely to be last, and how you add. Write the key formula in the LaTeX box and recall the key words.`,
      sourcePageText: r`20. Balls are randomly removed from an urn initially containing 20 red and 10 blue balls. What is the probability that all of the red balls are removed before all of the blue ones have been removed?`,
    },
  }),
];
