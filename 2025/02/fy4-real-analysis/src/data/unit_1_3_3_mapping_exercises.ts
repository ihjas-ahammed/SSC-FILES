import { Unit } from '../types';

export const UNIT_1_3_3: Unit = {
  id: "unit-1-3-3",
  title: "Mapping Exercises",
  description: "Exercises 1-6: Existence of Bijections and Cardinality",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-3-ex1", title: "Exercise 1: Finite Equivalences", description: "Proving finite sets are bijective to each other", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Prove that a nonempty set $T_1$ is finite if and only if there is a bijection from $T_1$ onto a finite set $T_2$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume $T_1$ is finite, prove there is a bijection to a finite $T_2$.**", interactiveSteps: [
            { stepText: "By Definition 1.3.1, if $T_1$ is finite, it has $n$ elements." },
            { prompt: "What does having $n$ elements mean?", options: [{ id: "A", text: "There is a bijection $f: \\mathbb{N}_n \\to T_1$", isCorrect: true, explanation: "Definition of a finite set with $n$ elements." }, { id: "B", text: "$T_1$ is a subset of $\\mathbb{N}$", isCorrect: false, explanation: "The elements don't have to be numbers." }], stepText: "There exists a bijection $f: \\mathbb{N}_n \\to T_1$." },
            { stepText: "Since $f$ is a bijection, its inverse $f^{-1}: T_1 \\to \\mathbb{N}_n$ is also a bijection." },
            { stepText: "Let $T_2 = \\mathbb{N}_n$. Since $\\mathbb{N}_n$ is explicitly finite, we have found our finite set $T_2$ and the bijection. Forward direction complete!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Backward Direction", content: "**Goal: Assume a bijection to a finite $T_2$ exists, prove $T_1$ is finite.**", interactiveSteps: [
            { stepText: "We are given a bijection $g: T_1 \\to T_2$, and we know $T_2$ is finite." },
            { stepText: "Since $T_2$ is finite, there exists a bijection $h: \\mathbb{N}_n \\to T_2$." },
            { prompt: "How do we construct a bijection directly from $\\mathbb{N}_n$ to $T_1$?", options: [{ id: "A", text: "$g^{-1} \\circ h$", isCorrect: true, explanation: "Compose the inverse of $g$ with $h$." }, { id: "B", text: "$h \\circ g$", isCorrect: false, explanation: "The domains and codomains don't match up." }], stepText: "The composition $g^{-1} \\circ h$ maps $\\mathbb{N}_n \\to T_1$." },
            { stepText: "Because the composition of two bijections is a bijection, $T_1$ has exactly $n$ elements and is finite. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-3-3-ex2", title: "Exercise 2: Finite Subtractions", description: "Proving Theorem 1.3.4 properties", icon: "MinusSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Prove Theorem 1.3.4(c): If $C$ is an infinite set and $B$ is a finite set, then $C \\setminus B$ is an infinite set." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove by contradiction.**", interactiveSteps: [
            { stepText: "Assume for contradiction that $C \\setminus B$ is a finite set." },
            { prompt: "How can we reconstruct the original set $C$ using $C \\setminus B$ and $B$?", options: [{ id: "A", text: "$C = (C \\setminus B) \\cup (C \\cap B)$", isCorrect: true, explanation: "We split C into elements not in B, and elements in B." }, { id: "B", text: "$C = (C \\setminus B) \\cup B$", isCorrect: false, explanation: "This might add elements from B that weren't originally in C." }], stepText: "Actually, $C \subseteq (C \\setminus B) \\cup B$ is true, but exactly $C = (C \\setminus B) \\cup (C \\cap B)$." },
            { stepText: "We know $C \\cap B$ is a subset of $B$. Since $B$ is finite, $C \\cap B$ must be finite." },
            { stepText: "By Theorem 1.3.4(a), the union of two finite sets, $(C \\setminus B)$ and $(C \\cap B)$, must be finite." },
            { stepText: "This implies $C$ is finite. But the premise stated $C$ is infinite! Contradiction! Thus, $C \\setminus B$ must be infinite. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-3-3-ex3", title: "Exercise 3: Counting Mappings", description: "Finding the number of injections and surjections", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Let $S := \\{1, 2\\}$ and $T := \\{a, b, c\\}$.\n\n(a) Determine the number of different injections from $S$ into $T$.\n(b) Determine the number of different surjections from $T$ onto $S$." },
        { id: "s1", type: "solution", title: "Interactive Solution: Injections", content: "**Goal: Count injections $S \\to T$.**", interactiveSteps: [
            { stepText: "An injection means every element in $S$ must map to a *different* element in $T$." },
            { prompt: "How many choices are there for $f(1)$?", options: [{ id: "A", text: "3", isCorrect: true, explanation: "It can be a, b, or c." }, { id: "B", text: "2", isCorrect: false, explanation: "T has 3 elements." }], stepText: "There are 3 choices for $f(1)$." },
            { stepText: "For $f(2)$, it cannot be whatever we picked for $f(1)$. So there are 2 choices left." },
            { stepText: "Total injections = $3 \\times 2 = 6$." }
        ]},
        { id: "s2", type: "numerical", title: "Check: Injections", content: "If $|S|=2$ and $|T|=3$, how many total injections are there?", numericAnswer: 6, numericTolerance: 0 },
        { id: "s3", type: "solution", title: "Interactive Solution: Surjections", content: "**Goal: Count surjections $T \\to S$.**", interactiveSteps: [
            { stepText: "A surjection means every element in $S$ must be 'hit' by at least one element in $T$." },
            { stepText: "First, count ALL possible functions from $T$ to $S$. For each of the 3 elements in $T$, there are 2 choices in $S$. Total = $2^3 = 8$." },
            { prompt: "To find the surjections, we must subtract the functions that are NOT surjective. How many non-surjective functions are there?", options: [{ id: "A", text: "2", isCorrect: true, explanation: "The function where everything maps to 1, and the function where everything maps to 2." }, { id: "B", text: "4", isCorrect: false, explanation: "Only mapping entirely to a single target leaves the other target empty." }], stepText: "There are 2 non-surjective functions." },
            { stepText: "Total surjections = $8 - 2 = 6$." }
        ]},
        { id: "s4", type: "numerical", title: "Check: Surjections", content: "How many surjections exist from a set of 3 elements to a set of 2 elements?", numericAnswer: 6, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-3-ex4", title: "Exercise 4: Bijection to Odds", description: "Mapping N to a shifted set", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Exhibit a bijection between $\\mathbb{N}$ and the set of all odd integers greater than 13." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct the explicit function formula.**", interactiveSteps: [
            { stepText: "We need a function $f: \\mathbb{N} \\to \\{15, 17, 19, 21, \\dots\\}$." },
            { stepText: "When $n=1$, $f(1) = 15$." },
            { stepText: "When $n=2$, $f(2) = 17$." },
            { prompt: "Since it increases by 2 each step, the formula will be $2n + C$. What is $C$?", options: [{ id: "A", text: "13", isCorrect: true, explanation: "If $f(n) = 2n + 13$, then $f(1) = 15$, which matches." }, { id: "B", text: "15", isCorrect: false, explanation: "If C=15, then f(1) = 17, which skips 15." }], stepText: "The formula is $f(n) = 2n + 13$." },
            { stepText: "Because it's a linear function over integers with a non-zero slope, it is strictly increasing (injective) and covers the exact set by definition (surjective). It is a bijection!" }
        ]},
        { id: "s2", type: "numerical", title: "Evaluate mapping", content: "Under the bijection $f(n) = 2n + 13$, what is $f(10)$?", numericAnswer: 33, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-3-ex5", title: "Exercise 5: Bijection N to Z", description: "Explicitly defining the classic mapping", icon: "BookOpen",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Give an explicit definition of the bijection $f$ from $\\mathbb{N}$ onto $\\mathbb{Z}$ described in Example 1.3.7(b)." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Turn the pattern $0, 1, -1, 2, -2, \\dots$ into a math formula.**", interactiveSteps: [
            { stepText: "Let's list the inputs and outputs:\n$n=1 \\to f(1)=0$\n$n=2 \\to f(2)=1$\n$n=3 \\to f(3)=-1$\n$n=4 \\to f(4)=2$\n$n=5 \\to f(5)=-2$" },
            { prompt: "Look at the EVEN values of $n$ (2, 4, 6...). What is the relation to the output?", options: [{ id: "A", text: "$f(n) = n / 2$", isCorrect: true, explanation: "2->1, 4->2, 6->3." }, { id: "B", text: "$f(n) = n - 1$", isCorrect: false, explanation: "4-1 = 3, not 2." }], stepText: "For even $n$, $f(n) = n / 2$." },
            { stepText: "Now look at the ODD values of $n$ (1, 3, 5...). The outputs are 0, -1, -2..." },
            { stepText: "If we do $n-1$, we get 0, 2, 4. If we divide by 2, we get 0, 1, 2. If we make it negative, we get 0, -1, -2." },
            { stepText: "Thus, for odd $n$, $f(n) = -\\frac{n-1}{2}$.\nThe explicit piece-wise definition is complete!" }
        ]}
      ]
    },
    {
      id: "les-1-3-3-ex6", title: "Exercise 6: Proper Subsets of N", description: "Infinity allows bijections to proper subsets!", icon: "Infinity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Exhibit a bijection between $\\mathbb{N}$ and a *proper subset* of itself." },
        { id: "s1", type: "theory", title: "Infinite Magic", content: "A finite set can **never** have a bijection with a proper subset of itself. If you take an apple away from 3 apples, you can't map 3 to 2 bijectively.\n\nBut infinite sets break this rule! This is actually one of the formal definitions of an infinite set." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Create a simple shift.**", interactiveSteps: [
            { stepText: "Let's pick a proper subset of $\\mathbb{N}$. A simple one is $\\mathbb{N} \\setminus \\{1\\} = \\{2, 3, 4, 5, \\dots\\}$." },
            { prompt: "What simple function maps $1 \\to 2$, $2 \\to 3$, $3 \\to 4$?", options: [{ id: "A", text: "$f(n) = n + 1$", isCorrect: true, explanation: "A simple linear shift of +1." }, { id: "B", text: "$f(n) = 2n$", isCorrect: false, explanation: "That would map to even numbers, which is also a valid answer but a different subset!" }], stepText: "The function $f(n) = n + 1$ works perfectly." },
            { stepText: "It is injective (since $n+1 = m+1 \\implies n=m$) and surjective onto $\\mathbb{N} \\setminus \\{1\\}$. We just mapped an infinite set onto a piece of itself!" }
        ]}
      ]
    }
  ]
};