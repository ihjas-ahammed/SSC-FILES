import { idea } from "./dsl.js";
const r = String.raw;

// Supporting ideas for Part C (counting recursions). Ross, Chapter 2.
export default [
  idea({
    id: "set-partition",
    name: "Set Partition",
    group: "sets",
    symbol: r`\{S_1,\ldots,S_k\}`,
    prerequisites: ["Union, Intersection and Complement", "Disjoint Events"],
    minutes: 3,
    meaning: r`A partition cuts a set into non-empty pieces called blocks, so that every item lies in exactly one block. The order of the blocks, and the order inside a block, do not matter.`,
    linkedFormal: r`A partition of a set $S$ is a collection of non-empty subsets $S_1,\ldots,S_k$ (the blocks) such that no two blocks share an item (they are [[Disjoint Events|mutually exclusive]]) and the [[Union, Intersection and Complement|union]] of all blocks is $S$. Every item is therefore in exactly one block. Two partitions are the same when they have the same blocks, whatever the order they are written in.`,
    example: r`The set $\{1,2\}$ has exactly two partitions: $\{\{1,2\}\}$ (one block) and $\{\{1\},\{2\}\}$ (two blocks). Writing $\{\{2\},\{1\}\}$ gives the same partition as $\{\{1\},\{2\}\}$.`,
    pretest: {
      prompt: r`Which of these is a partition of $\{1,2,3,4\}$?`,
      options: [r`$\{\{1,2\},\{3,4\}\}$`, r`$\{\{1,2\},\{2,3,4\}\}$`, r`$\{\{1\},\{3\},\{4\}\}$`],
      correct: 0,
      explanation: r`The second shares the item 2 between two blocks. The third leaves the item 2 out completely.`,
    },
    check: {
      prompt: r`Why is $\{\{1,2\},\{2,3\},\{4\}\}$ not a partition of $\{1,2,3,4\}$?`,
      options: [r`The item 2 lies in two different blocks`, r`The item 4 is alone in its block`, r`The blocks are not written in increasing order`],
      correct: 0,
      explanation: r`In a partition every item lies in exactly one block. A block with a single item is fine, and the order of blocks never matters.`,
    },
    faq: [
      { q: r`Can a block have just one item?`, a: r`Yes. A block such as $\{4\}$ is allowed. Only empty blocks are forbidden.` },
      { q: r`Is $\{\{1\},\{2,3\}\}$ the same as $\{\{2,3\},\{1\}\}$?`, a: r`Yes. A partition is a collection of blocks, and a collection has no order.` },
      { q: r`How is this different from splitting people into labelled teams?`, a: r`Here the blocks have no names or numbers. Swapping two blocks does not give a new partition.` },
    ],
  }),

  idea({
    id: "special-element-trick",
    name: "Special Element Trick",
    group: "counting",
    symbol: r`\star`,
    prerequisites: ["Counting by Cases", "Recurrence Relation"],
    minutes: 3,
    meaning: r`To count something about $n$ items, single out one item (the special one) and split into cases by what happens to it. What remains is often the same problem with fewer items.`,
    linkedFormal: r`Pick one item, call it special. Sort the objects you are counting into [[Counting by Cases|cases]] by what the special item does (for example "it is alone" or "it is with others"). In each case, remove the special item. If the leftover objects are again of the same kind but smaller, you get a [[Recurrence Relation|recurrence]] that links the count for $n$ items to counts for fewer items.`,
    example: r`Count all subsets of $\{1,\ldots,n\}$. Make $1$ special. Subsets containing $1$ match the subsets of $\{2,\ldots,n\}$ (just add $1$): $2^{n-1}$ of them. Subsets not containing $1$ are also subsets of $\{2,\ldots,n\}$: $2^{n-1}$ more. Total $2^{n-1}+2^{n-1}=2^n$.`,
    pretest: {
      prompt: r`How many subsets of $\{1,2,3,4\}$ contain the item $1$?`,
      options: [r`$8$`, r`$16$`, r`$4$`],
      correct: 0,
      explanation: r`Item 1 is in. Each of the other three items is in or out: $2^3=8$. Sixteen counts all subsets, including those without 1.`,
    },
    check: {
      prompt: r`Among $5$ items, make item $1$ special. How many $2$-item subsets contain item $1$?`,
      options: [r`$4$`, r`$10$`, r`$6$`],
      correct: 0,
      explanation: r`Item 1 is in; choose its partner from the other $4$ items: $4$ ways. The $6$ subsets without item 1 are the other case, and $4+6=10$ in all.`,
    },
    faq: [
      { q: r`Does it matter which item I make special?`, a: r`No. Any item works. Choose the one that makes the leftover problem look like the original.` },
      { q: r`Why does the leftover problem need to be of the same kind?`, a: r`Then the smaller count already has a name (like $T_{n-1}$ or $A_{n-1}$) and you can write a recurrence.` },
      { q: r`Is this the same as splitting into cases?`, a: r`It is a particular way of splitting: the cases are chosen by what happens to one chosen item.` },
    ],
  }),

  idea({
    id: "derangement",
    name: "Derangement",
    group: "counting",
    symbol: r`A_N`,
    prerequisites: ["Factorial and Permutations", "Counting by Cases"],
    minutes: 3,
    meaning: r`A derangement is a way to hand $N$ things back to $N$ owners so that nobody gets their own. This is the hat-matching problem.`,
    linkedFormal: r`Let $N$ men throw their hats in a pile and each take one hat. There are $N!$ ways ([[Factorial and Permutations|permutations]]) to do this. A way in which no man takes his own hat is called a derangement. Write $A_N$ for the number of derangements, so the probability of no matches, when all $N!$ ways are equally likely, is $A_N/N!$. Clearly $A_1=0$ (the only hat is his own) and $A_2=1$ (they must swap).`,
    example: r`$N=3$ with hats $1,2,3$. Writing which hat each of men $1,2,3$ takes: $(2,3,1)$ and $(3,1,2)$ are the only derangements. The other four, $(1,2,3),(1,3,2),(3,2,1),(2,1,3)$, each give at least one man his own hat. So $A_3=2$.`,
    pretest: {
      prompt: r`Two men each take one of two hats at random. In how many of the $2$ ways does neither man get his own hat?`,
      options: [r`$1$`, r`$2$`, r`$0$`],
      correct: 0,
      explanation: r`Only the swap works. Taking each his own hat is the other way, and it matches both men.`,
    },
    check: {
      prompt: r`Three men $1,2,3$ take hats. Which list (hat taken by man $1$, $2$, $3$) leaves nobody with his own hat?`,
      options: [r`$(2,3,1)$`, r`$(1,3,2)$`, r`$(3,2,1)$`],
      correct: 0,
      explanation: r`$(1,3,2)$ gives man 1 his own hat, and $(3,2,1)$ gives man 2 his own hat. In $(2,3,1)$ everyone holds someone else's hat.`,
    },
    faq: [
      { q: r`Why is $A_1=0$?`, a: r`One man and one hat: the only hat is his own, so he is always matched.` },
      { q: r`Is $A_N$ the same as $N!$ minus something simple?`, a: r`It is $N!$ minus the cases where someone is matched, but those cases overlap and need inclusion-exclusion. In this exercise we use a recurrence instead.` },
      { q: r`Why call it the matching problem?`, a: r`A match is a man who gets his own hat. Derangements are the arrangements with no matches.` },
    ],
  }),

  idea({
    id: "fibonacci-numbers",
    name: "Fibonacci Numbers",
    group: "recursion",
    symbol: r`a_n=a_{n-1}+a_{n-2}`,
    prerequisites: ["Recurrence Relation"],
    minutes: 2,
    meaning: r`A Fibonacci-type sequence starts with two given numbers, and every later number is the sum of the two before it.`,
    linkedFormal: r`A sequence $a_0,a_1,a_2,\ldots$ is of Fibonacci type if $a_n=a_{n-1}+a_{n-2}$ for all $n\ge2$. This is a [[Recurrence Relation|recurrence]] of "memory two": to find a term you need the two previous ones, so you must be given $a_0$ and $a_1$. Different starting values give different sequences with the same rule.`,
    example: r`Starting with $1,1$ you get $1,1,2,3,5,8,13,21,34,55,\ldots$. Starting with $1,2$ you get $1,2,3,5,8,13,21,\ldots$, the same numbers shifted by one place.`,
    pretest: {
      prompt: r`In $1,1,2,3,5,8,13,\ldots$ each number is the sum of the two before it. What comes after $13$?`,
      options: [r`$21$`, r`$20$`, r`$26$`],
      correct: 0,
      explanation: r`$8+13=21$. Twenty-six would double the last term instead of adding the two before.`,
    },
    check: {
      prompt: r`With $a_0=1$, $a_1=2$ and $a_n=a_{n-1}+a_{n-2}$, what is $a_5$?`,
      options: [r`$13$`, r`$11$`, r`$16$`],
      correct: 0,
      explanation: r`$a_2=3$, $a_3=5$, $a_4=8$, $a_5=13$.`,
    },
    faq: [
      { q: r`Why do I need two starting values?`, a: r`Each new term uses two earlier ones, so with fewer than two known terms you cannot get started.` },
      { q: r`Is $a_0$ the first term?`, a: r`It is the term with index $0$. Counting from $0$ or from $1$ only shifts the labels.` },
      { q: r`Does a counting problem ever produce this rule?`, a: r`Yes. When a count splits into two cases, one with $n-1$ items left and one with $n-2$ items left, you get $a_n=a_{n-1}+a_{n-2}$.` },
    ],
  }),

  idea({
    id: "runs-in-a-sequence",
    name: "Runs in a Sequence",
    group: "counting",
    symbol: r`WW\,L\,W\,LL`,
    prerequisites: ["Basic Counting Principle", "Counting by Cases"],
    minutes: 3,
    meaning: r`A run is a maximal block of equal symbols standing next to each other. Cut the row wherever the symbol changes: each piece is one run.`,
    linkedFormal: r`In a row of symbols such as $W$ (win) and $L$ (loss), a run is a maximal stretch of identical neighbouring symbols. The runs alternate in type: a win run is followed by a loss run, then a win run, and so on. So in a row with $r$ runs the types alternate, and the row starts and ends according to the type of the first and last run. The number of runs is one more than the number of places where the symbol changes.`,
    example: r`$WWLWLL$ has $4$ runs: $WW$, $L$, $W$, $LL$ (three changes, $3+1=4$). The first run is a win run and the last is a loss run. $WWWWLL$ has only $2$ runs.`,
    pretest: {
      prompt: r`How many runs does $TTHHHT$ have?`,
      options: [r`$3$`, r`$6$`, r`$2$`],
      correct: 0,
      explanation: r`The runs are $TT$, $HHH$, $T$. Counting letters gives 6, and counting symbol types gives 2.`,
    },
    check: {
      prompt: r`How many runs does $LWWWLLW$ have?`,
      options: [r`$4$`, r`$3$`, r`$7$`],
      correct: 0,
      explanation: r`The runs are $L$, $WWW$, $LL$, $W$. Each change of symbol starts a new run.`,
    },
    faq: [
      { q: r`Is $WW$ one run or two?`, a: r`One run. A run is a maximal block of the same symbol, so adjacent equal symbols stay together.` },
      { q: r`Can two win runs be next to each other?`, a: r`No. If they touched they would be one longer run. A different symbol must sit between them.` },
      { q: r`If there are $3$ win runs, how many loss runs can there be?`, a: r`$2$, $3$ or $4$: the runs alternate, so the numbers differ by at most one.` },
    ],
  }),

  idea({
    id: "compositions-of-an-integer",
    name: "Compositions of an Integer",
    group: "counting",
    symbol: r`\binom{n-1}{k-1}`,
    prerequisites: ["Combination", "Basic Counting Principle"],
    minutes: 4,
    meaning: r`A composition writes $n$ as an ordered sum of $k$ positive whole numbers. Order matters, so $1+3$ and $3+1$ are different.`,
    linkedFormal: r`The number of ways to write $n=x_1+x_2+\cdots+x_k$ with every $x_i$ a positive whole number, with order mattering, is $\binom{n-1}{k-1}$. Reason: line up $n$ identical objects. There are $n-1$ gaps between neighbours. Choosing $k-1$ of these gaps to cut at splits the row into $k$ non-empty parts, and every composition arises from exactly one choice of cuts. Choosing the gaps is a [[Combination|combination]].`,
    example: r`$5=x_1+x_2+x_3$ with positive parts: $\binom42=6$ ways, namely $1+1+3$, $1+3+1$, $3+1+1$, $1+2+2$, $2+1+2$, $2+2+1$.`,
    pretest: {
      prompt: r`In how many ordered ways can $4$ be written as a sum of two positive whole numbers?`,
      options: [r`$3$`, r`$2$`, r`$4$`],
      correct: 0,
      explanation: r`$1+3$, $2+2$, $3+1$. Counting $1+3$ and $3+1$ as the same would give 2.`,
    },
    check: {
      prompt: r`In how many ordered ways can $7$ be written as a sum of $3$ positive whole numbers?`,
      options: [r`$15$`, r`$21$`, r`$35$`],
      correct: 0,
      explanation: r`$\binom{7-1}{3-1}=\binom62=15$. Using $\binom72=21$ counts cuts in $7$ gaps, but there are only $6$ gaps.`,
    },
    faq: [
      { q: r`Why $n-1$ gaps and not $n$?`, a: r`Between $n$ objects in a row there are $n-1$ places where you can cut. A cut before the first or after the last would create an empty part.` },
      { q: r`What if parts may be zero?`, a: r`Then the formula changes (to $\binom{n+k-1}{k-1}$). Here every part is at least $1$.` },
      { q: r`Why does the order matter?`, a: r`The parts will be run lengths in a row, and a row $WWL\ldots$ differs from $LWW\ldots$ even if the lengths are the same numbers in another order.` },
    ],
  }),
];
