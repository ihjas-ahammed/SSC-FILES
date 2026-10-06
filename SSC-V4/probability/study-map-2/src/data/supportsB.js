import { idea } from "./dsl.js";
const r = String.raw;

// Part B supports: countable infinity, null events, and random removal orders.
export default [
  idea({
    id: "countable-infinity",
    name: "Countable Infinity",
    group: "infinite",
    symbol: r`s_1,s_2,s_3,\ldots`,
    prerequisites: ["Sample Space"],
    minutes: 3,
    meaning: r`A set is countably infinite when its members can be written as one never-ending list, first, second, third, and so on, with nobody left out.`,
    linkedFormal: r`A set is countably infinite if its members can be listed as $s_1,s_2,s_3,\ldots$ so that every member sits at some place on the list. The whole numbers $1,2,3,\ldots$, the even numbers $2,4,6,\ldots$ and all fractions are countably infinite. Every number between $0$ and $1$ cannot be put on such a list. A [[Sample Space|sample space]] such as "the number of the toss on which the first head appears" is countably infinite: $\{1,2,3,\ldots\}$.`,
    example: r`The even numbers listed as $s_1=2,\ s_2=4,\ s_3=6,\ldots$ follow the rule $s_j=2j$. Every even number, say $50$, appears: it is $s_{25}$.`,
    pretest: {
      prompt: r`Which of these sets can be written as a never-ending list $s_1,s_2,s_3,\ldots$ with every member on the list?`,
      options: [r`The whole numbers $\{1,2,3,\ldots\}$`, r`Every number between $0$ and $1$`, r`Neither of them`],
      correct: 0,
      explanation: r`The whole numbers are already a list. The numbers between $0$ and $1$ are far too many to fit on any single list.`,
    },
    check: {
      prompt: r`The even numbers are listed as $s_1=2$, $s_2=4$, $s_3=6$, and so on. What is $s_{10}$?`,
      options: [r`$20$`, r`$10$`, r`$18$`],
      correct: 0,
      explanation: r`The rule is $s_j=2j$, so $s_{10}=20$.`,
    },
    faq: [
      { q: r`Is every infinite set countable?`, a: r`No. The whole numbers can be listed, but the numbers between $0$ and $1$ cannot. Countable is the smallest kind of infinity.` },
      { q: r`Why does a probability book care about lists?`, a: r`When outcomes can be listed, the probability of an event is found by adding up the probabilities of its listed points, one after the other.` },
    ],
  }),

  idea({
    id: "geometric-series",
    name: "Geometric Series",
    group: "infinite",
    symbol: r`\sum_{i\ge1}2^{-i}`,
    prerequisites: ["Summation Notation"],
    minutes: 3,
    meaning: r`Add numbers that each shrink by the same factor, forever. The total can still be a plain finite number.`,
    linkedFormal: r`If $|x|<1$, then $x+x^2+x^3+\cdots=\dfrac{x}{1-x}$. The reason is that the sum of the first $N$ terms is $\dfrac{x(1-x^N)}{1-x}$, and $x^N$ shrinks to $0$ as $N$ grows. For $x=\tfrac12$ the total is $\dfrac{1/2}{1/2}=1$, written with [[Summation Notation|summation notation]] as $\sum_{i=1}^{\infty}2^{-i}=1$.`,
    example: r`The partial sums of $\tfrac12+\tfrac14+\tfrac18+\cdots$ are $\tfrac12,\ \tfrac34,\ \tfrac78,\ \tfrac{15}{16}$. After $N$ terms the sum is $1-2^{-N}$, which creeps up to $1$ and never passes it.`,
    pretest: {
      prompt: r`What does $\tfrac12+\tfrac14+\tfrac18+\tfrac1{16}$ equal?`,
      options: [r`$\tfrac{15}{16}$`, r`$1$`, r`$\tfrac78$`],
      correct: 0,
      explanation: r`Add them: $\tfrac{8+4+2+1}{16}=\tfrac{15}{16}$. It is just short of $1$; only the endless sum reaches $1$.`,
    },
    check: {
      prompt: r`What is $\tfrac13+\tfrac19+\tfrac1{27}+\cdots$, going on forever?`,
      options: [r`$\tfrac12$`, r`$1$`, r`$\tfrac23$`],
      correct: 0,
      explanation: r`Use $\dfrac{x}{1-x}$ with $x=\tfrac13$: $\dfrac{1/3}{2/3}=\tfrac12$.`,
    },
    faq: [
      { q: r`Can infinitely many positive numbers add up to a finite total?`, a: r`Yes, when they shrink fast enough, for example by half each time. Then the running total gets closer and closer to a fixed number.` },
      { q: r`Is the sum exactly $1$ or only almost $1$?`, a: r`Exactly $1$. After $N$ terms the gap to $1$ is $2^{-N}$, and that gap can be made smaller than any positive number, so the total the sums approach is exactly $1$.` },
    ],
  }),

  idea({
    id: "probability-of-not-happening",
    name: "Probability of Not Happening",
    group: "axioms",
    symbol: r`P(A^c)=1-P(A)`,
    prerequisites: ["Axioms of Probability", "Union, Intersection and Complement"],
    minutes: 3,
    meaning: r`The chance that something does not happen is one minus the chance that it does. As a result no probability can exceed $1$.`,
    linkedFormal: r`For every event $A$, $P(A^c)=1-P(A)$. The events $A$ and $A^c$ are [[Disjoint Events|disjoint]] and together make the whole sample space, so by the [[Axioms of Probability|axioms]] $1=P(S)=P(A)+P(A^c)$. Because $P(A^c)\ge0$, this also gives $P(A)\le1$ for every event. And $P(A)=1$ exactly when $P(A^c)=0$.`,
    example: r`A die is rolled and $A$ is "a six". $P(A)=\tfrac16$, so the chance of no six is $P(A^c)=1-\tfrac16=\tfrac56$.`,
    pretest: {
      prompt: r`A weather forecast gives a $0.3$ chance of rain. What chance does it give that it does not rain?`,
      options: [r`$0.7$`, r`$0.3$`, r`$0.07$`],
      correct: 0,
      explanation: r`Rain or no rain covers everything, so the two chances add to $1$: $1-0.3=0.7$.`,
    },
    check: {
      prompt: r`Axiom 1 says no probability is negative. Using $P(A)+P(A^c)=1$, what follows for every event $A$?`,
      options: [r`$P(A)\le1$`, r`$P(A)\ge1$`, r`$P(A)=\tfrac12$`],
      correct: 0,
      explanation: r`$P(A)=1-P(A^c)$ and $P(A^c)\ge0$, so $P(A)$ is at most $1$.`,
    },
    faq: [
      { q: r`Why is $P(A)\le1$ not one of the three axioms?`, a: r`It does not need to be. It follows from the axioms in one line, as shown above.` },
      { q: r`Does $P(A)=1$ mean $A$ is the whole sample space?`, a: r`Not necessarily. It only means the leftover part $A^c$ has probability $0$. It can still contain outcomes, which simply have no chance.` },
    ],
  }),

  idea({
    id: "point-probabilities",
    name: "Point Probabilities",
    group: "axioms",
    symbol: r`P(E)=\sum_{s\in E}P(\{s\})`,
    prerequisites: ["Axioms of Probability", "Countable Infinity", "Summation Notation"],
    minutes: 4,
    meaning: r`When outcomes can be listed, give each outcome its own probability. The probability of any event is then the sum over the outcomes inside it.`,
    linkedFormal: r`Suppose the sample space $S$ is finite or [[Countable Infinity|countably infinite]]. Write $p_s=P(\{s\})$ for the probability of the one-point event $\{s\}$. Every event $E$ is the disjoint union of its one-point events, so Axiom 3 gives $P(E)=\sum_{s\in E}p_s$. In particular $\sum_{s\in S}p_s=1$. Conversely, any numbers $p_s\ge0$ that add to $1$ define a legitimate probability, because sums of non-negative numbers satisfy all three [[Axioms of Probability|axioms]].`,
    example: r`Let $S=\{1,2,3,\ldots\}$ with $p_j=2^{-j}$. The probability of an even number is $\tfrac14+\tfrac1{16}+\tfrac1{64}+\cdots=\tfrac13$.`,
    pretest: {
      prompt: r`A loaded die has $P(1)=0.5$ and $P(2)=P(3)=P(4)=P(5)=P(6)=0.1$. What is the probability that the roll is even?`,
      options: [r`$0.3$`, r`$0.5$`, r`$0.6$`],
      correct: 0,
      explanation: r`The even faces are $2,4,6$, each with probability $0.1$, so the total is $0.3$.`,
    },
    check: {
      prompt: r`Points $s_1,s_2,s_3,\ldots$ have probabilities $\tfrac12,\tfrac14,\tfrac18,\ldots$ . What is $P(\{s_1,s_3\})$?`,
      options: [r`$\tfrac58$`, r`$\tfrac34$`, r`$\tfrac14$`],
      correct: 0,
      explanation: r`Add the probabilities of the two points: $\tfrac12+\tfrac18=\tfrac58$.`,
    },
    faq: [
      { q: r`Do all points need the same probability?`, a: r`No. Equal probabilities are one special case. Any non-negative numbers that add to $1$ will do.` },
      { q: r`Why does this work for infinite lists too?`, a: r`Axiom 3 is stated for countably many disjoint events, so adding an endless list of point probabilities is allowed.` },
    ],
  }),

  idea({
    id: "union-of-null-events",
    name: "Union of Null Events",
    group: "axioms",
    symbol: r`P\Big(\bigcup_{i}B_i\Big)=0`,
    prerequisites: ["Axioms of Probability", "Disjoint Events", "Union, Intersection and Complement"],
    minutes: 4,
    meaning: r`An event with probability $0$ is called null. Joining together a never-ending list of null events still gives a null event.`,
    linkedFormal: r`If $P(B_i)=0$ for $i=1,2,3,\ldots$, then $P\big(\bigcup_{i=1}^{\infty}B_i\big)=0$. The idea: cut the union into [[Disjoint Events|disjoint]] pieces $F_1=B_1$ and $F_i=B_i$ with the earlier events removed. Each piece sits inside some $B_i$, so $P(F_i)\le P(B_i)=0$. By Axiom 3 the probability of the union is the sum of the zeros, which is $0$.`,
    example: r`Choose a number at random from $0$ to $1$. The chance it equals one exact number, say $\tfrac12$, is $0$. The same holds for every number on a never-ending list $q_1,q_2,\ldots$, so the chance it equals any number on the list is still $0$.`,
    pretest: {
      prompt: r`A spinner lands on any one exact angle with probability $0$. What is the chance it lands on one of the angles on a never-ending list of exact angles?`,
      options: [r`Still $0$`, r`$1$`, r`It cannot be known`],
      correct: 0,
      explanation: r`A never-ending union of null events is null, so the total chance stays $0$.`,
    },
    check: {
      prompt: r`Which tool shows that a never-ending union of probability-$0$ events has probability $0$?`,
      options: [r`Cut it into disjoint pieces, each of probability $0$, and add them by Axiom 3`, r`Multiply all the probabilities together`, r`Divide $1$ by the number of events`],
      correct: 0,
      explanation: r`Disjoint pieces with the same union let Axiom 3 turn the union into a sum of zeros.`,
    },
    faq: [
      { q: r`Is a null event the same as an impossible event?`, a: r`No. Impossible means it has no outcomes at all. Null means it has probability $0$, yet it may contain outcomes that simply never get picked in practice.` },
      { q: r`Why is the list allowed to be endless?`, a: r`Because Axiom 3 holds for countably infinite lists of disjoint events, not just finitely many.` },
    ],
  }),

  idea({
    id: "random-order-of-draws",
    name: "Random Order of Draws",
    group: "counting",
    symbol: r`(b_1,\ldots,b_N)`,
    prerequisites: ["Equally Likely Outcomes", "Factorial and Permutations"],
    minutes: 4,
    meaning: r`If balls come out of an urn one at a time at random until the urn is empty, every possible order of the balls is equally likely.`,
    linkedFormal: r`Take $N$ different balls out of an urn one by one, at random, until the urn is empty. The order in which they come out is one of $N!$ [[Factorial and Permutations|permutations]], and all of them are [[Equally Likely Outcomes|equally likely]], since no ball is favoured at any step. Two facts follow. A given ball is equally likely to sit in any one position, for example last with probability $\tfrac1N$. And looking only at the first $k$ balls is the same as picking a random group of $k$ balls.`,
    example: r`Balls $A,B,C$ come out in one of $ABC, ACB, BAC, BCA, CAB, CBA$, each with probability $\tfrac16$. Ball $A$ is last in $BCA$ and $CBA$, which is $\tfrac26=\tfrac13=\tfrac1N$.`,
    pretest: {
      prompt: r`Three different balls are pulled out one by one at random. What is the chance that ball $A$ comes out last?`,
      options: [r`$\tfrac13$`, r`$\tfrac12$`, r`$\tfrac16$`],
      correct: 0,
      explanation: r`Of the $6$ equally likely orders, $2$ end with $A$, so the chance is $\tfrac26=\tfrac13$. By symmetry each ball is equally likely to be last.`,
    },
    check: {
      prompt: r`In a random order of $N$ labelled balls, what is the chance that one particular ball is in last place?`,
      options: [r`$\tfrac1N$`, r`$\tfrac1{N!}$`, r`$\tfrac1{N-1}$`],
      correct: 0,
      explanation: r`There are $(N-1)!$ orders with that ball last, out of $N!$ in all: $\tfrac{(N-1)!}{N!}=\tfrac1N$.`,
    },
    faq: [
      { q: r`Why bother drawing all the balls if we only care about the first few?`, a: r`Pretending to keep going until the urn is empty gives a clean picture, a random line-up of all the balls, in which every position is treated fairly.` },
      { q: r`Does it matter that balls of the same colour look alike?`, a: r`Only for counting what we see. To get fair probabilities, picture the balls as labelled, then ignore the labels at the end.` },
    ],
  }),

  idea({
    id: "colour-patterns",
    name: "Colour Patterns",
    group: "counting",
    symbol: r`\binom{n+m}{n}`,
    prerequisites: ["Combination", "Basic Counting Principle", "Random Order of Draws"],
    minutes: 4,
    meaning: r`Line up $n$ red and $m$ blue balls and write down only the colours. A pattern is fixed by which places are red.`,
    linkedFormal: r`A colour pattern of $n$ red and $m$ blue balls is a row of $n$ letters $R$ and $m$ letters $B$. Choosing which $n$ of the $n+m$ places are red decides the pattern, so there are $\binom{n+m}{n}$ patterns. When the balls come out in a [[Random Order of Draws|random order]], every pattern is equally likely. The reason is that each pattern comes from the same number of orders of the labelled balls, $n!\,m!$ of them: arrange the reds among the red places and the blues among the blue places, and multiply by the [[Basic Counting Principle|counting principle]].`,
    example: r`With $n=2$ red and $m=1$ blue there are $\binom32=3$ patterns: $RRB$, $RBR$, $BRR$. Each comes from $2!\,1!=2$ of the $6$ orders of the labelled balls, so each has probability $\tfrac26=\tfrac13$.`,
    pretest: {
      prompt: r`How many different colour line-ups are there of 2 red and 2 blue balls in a row, if balls of the same colour look alike?`,
      options: [r`$6$`, r`$4$`, r`$24$`],
      correct: 0,
      explanation: r`Choose the two red places out of four: $\binom42=6$. Twenty-four would count the balls as different.`,
    },
    check: {
      prompt: r`In a pattern of $n$ red and $m$ blue balls, once you have chosen which $n$ places are red, what is left to decide?`,
      options: [r`Nothing: the other $m$ places are blue`, r`The order among the blue places, in $m!$ ways`, r`Which of the other places are red too`],
      correct: 0,
      explanation: r`A pattern only records colours. The red places fix it completely.`,
    },
    faq: [
      { q: r`Why are the patterns equally likely if the balls are not distinguishable?`, a: r`Imagine labelled balls: all $(n+m)!$ orders are equally likely. Each pattern is produced by exactly $n!\,m!$ of them, the same number for every pattern, so patterns are equally likely too.` },
      { q: r`Why $\binom{n+m}{n}$ and not $\binom{n+m}{m}$?`, a: r`They are equal. Choosing the red places also decides the blue places, and vice versa.` },
    ],
  }),
];
