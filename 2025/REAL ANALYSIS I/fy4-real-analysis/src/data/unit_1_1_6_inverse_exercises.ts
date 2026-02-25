import { Unit } from '../types';

export const UNIT_1_1_6: Unit = {
  id: "unit-1-1-6",
  title: "Inverse Exercises",
  description: "Exercises 19-24: Injections, Surjections, and Bijections",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-6-ex19", title: "Exercise 19: Strict Equality", description: "When inverse images map back perfectly", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "(a) Show that if $f : A \\to B$ is injective and $E \\subseteq A$, then $f^{-1}(f(E)) = E$.\n(b) Show that if $f : A \\to B$ is surjective and $H \\subseteq B$, then $f(f^{-1}(H)) = H$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Injectivity", content: "**Goal: Prove $f^{-1}(f(E)) = E$ for injective $f$.**", interactiveSteps: [
            { stepText: "It is always true that $E \\subseteq f^{-1}(f(E))$. We just need to prove the reverse inclusion." },
            { stepText: "Let $x \\in f^{-1}(f(E))$. By definition, $f(x) \\in f(E)$. This means $\\exists e \\in E$ such that $f(x) = f(e)$." },
            { prompt: "Since $f$ is injective and $f(x) = f(e)$, what concludes?", options: [{ id: "A", text: "$x = e$", isCorrect: true, explanation: "Injectivity means outputs are unique to inputs." }, { id: "B", text: "$x \\in B$", isCorrect: false, explanation: "x is in the domain." }], stepText: "Therefore, $x = e$." },
            { stepText: "Since $e \\in E$, we have $x \\in E$. Thus $f^{-1}(f(E)) \\subseteq E$. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "Counterexamples", content: "If $f$ is not injective, equality fails. E.g., $f(x) = x^2$. Let $E = \\{2\\}$. $f(E) = \\{4\\}$. But $f^{-1}(\\{4\\}) = \\{-2, 2\\} \\neq E$.\n\nSimilarly, if $f$ is not surjective, $f(f^{-1}(H)) = H$ fails because $H$ might contain elements outside the range of $f$." }
      ]
    },
    {
      id: "les-1-1-6-ex20", title: "Exercise 20: Inverse Function Properties", description: "Bijections and their inverses", icon: "Undo2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "(a) Suppose $f$ is an injection. Show that $f^{-1}(f(x)) = x$ for all $x \\in D(f)$ and that $f(f^{-1}(y)) = y$ for all $y \\in R(f)$.\n(b) If $f$ is a bijection of $A$ onto $B$, show that $f^{-1}$ is a bijection of $B$ onto $A$." },
        { id: "s1", type: "solution", title: "Interactive Proof", content: "**Goal: Understand inverse mappings.**", interactiveSteps: [
            { stepText: "For (a), this directly follows from Exercise 19 by letting the sets $E$ and $H$ be singletons $\\{x\\}$ and $\\{y\\}$ respectively." },
            { stepText: "For (b), let $f$ be a bijection. Then $f^{-1}$ is a well-defined function from $B$ to $A$." },
            { prompt: "To show $f^{-1}$ is injective, assume $f^{-1}(y_1) = f^{-1}(y_2) = x$. Applying $f$ to both sides yields what?", options: [{ id: "A", text: "$y_1 = y_2$", isCorrect: true, explanation: "$f(x) = y_1$ and $f(x) = y_2$, so $y_1 = y_2$." }, { id: "B", text: "$x_1 = x_2$", isCorrect: false, explanation: "We already established they equal x." }], stepText: "This proves $f^{-1}$ is injective." },
            { stepText: "To show $f^{-1}$ is surjective onto $A$, pick any $x \\in A$. Does there exist a $y \\in B$ such that $f^{-1}(y) = x$? Yes, simply let $y = f(x)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex21", title: "Exercise 21: Composition of Bijections", description: "Chaining bijections maintains the property", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "Prove that if $f : A \\to B$ is bijective and $g : B \\to C$ is bijective, then the composite $g \\circ f$ is a bijective map of $A$ onto $C$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $g \\circ f$ is both injective and surjective.**", interactiveSteps: [
            { stepText: "Injectivity: Assume $(g \\circ f)(x_1) = $(g \\circ f)(x_2)$. This means $g(f(x_1)) = g(f(x_2))$." },
            { prompt: "Since $g$ is injective, what does $g(f(x_1)) = g(f(x_2))$ imply?", options: [{ id: "A", text: "$f(x_1) = f(x_2)$", isCorrect: true, explanation: "The inputs to g must be identical." }, { id: "B", text: "$x_1 = x_2$", isCorrect: false, explanation: "That's the next step!" }], stepText: "It implies $f(x_1) = f(x_2)$." },
            { stepText: "Since $f$ is injective, $f(x_1) = f(x_2) \\implies x_1 = x_2$. Thus $g \\circ f$ is injective." },
            { stepText: "Surjectivity: Let $z \\in C$. Since $g$ is surjective, $\\exists y \\in B$ such that $g(y) = z$." },
            { stepText: "Since $f$ is surjective, $\\exists x \\in A$ such that $f(x) = y$. Therefore $g(f(x)) = g(y) = z$. Thus $g \\circ f$ is surjective. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex22", title: "Exercise 22: Unpacking Composition", description: "What does the composite tell us about its parts?", icon: "Unlink",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "Let $f : A \\to B$ and $g : B \\to C$ be functions.\n(a) Show that if $g \\circ f$ is injective, then $f$ is injective.\n(b) Show that if $g \\circ f$ is surjective, then $g$ is surjective." },
        { id: "s1", type: "proof", title: "Interactive Proof: Injectivity", content: "**Goal: Prove $g \\circ f$ injective $\\implies f$ injective.**", interactiveSteps: [
            { stepText: "We want to prove $f$ is injective. Assume $f(x_1) = f(x_2)$." },
            { prompt: "If two values are equal, applying a function to both keeps them equal. Let's apply $g$. What happens?", options: [{ id: "A", text: "$g(f(x_1)) = g(f(x_2))$", isCorrect: true, explanation: "This perfectly sets up our hypothesis." }, { id: "B", text: "$x_1 = x_2$", isCorrect: false, explanation: "We don't know this yet." }], stepText: "We get $(g \\circ f)(x_1) = (g \\circ f)(x_2)$." },
            { stepText: "By the hypothesis that $g \\circ f$ is injective, this implies $x_1 = x_2$. Thus $f$ is injective! Goal reached." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Surjectivity", content: "**Goal: Prove $g \\circ f$ surjective $\\implies g$ surjective.**", interactiveSteps: [
            { stepText: "We want to prove $g$ is surjective onto $C$. Let $z \\in C$." },
            { stepText: "By hypothesis, $g \\circ f$ is surjective, so there exists an $x \\in A$ such that $(g \\circ f)(x) = z$." },
            { stepText: "Let $y = f(x)$. Note that $y \\in B$." },
            { stepText: "Then $g(y) = g(f(x)) = z$. We have found a $y \\in B$ mapping to $z$. Thus $g$ is surjective. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex23", title: "Exercise 23: Inverse of a Composition", description: "Proving Theorem 1.1.14", icon: "CornerUpLeft",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "Prove Theorem 1.1.14: Let $f: A \\to B$ and $g: B \\to C$ be functions and let $H$ be a subset of $C$. Then we have:\n$$(g \\circ f)^{-1}(H) = f^{-1}(g^{-1}(H))$$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show both sets contain the exact same elements.**", interactiveSteps: [
            { stepText: "Let $x \\in (g \\circ f)^{-1}(H)$. By definition of inverse image, this means $(g \\circ f)(x) \\in H$." },
            { prompt: "Rewrite $(g \\circ f)(x)$. What is it?", options: [{ id: "A", text: "$g(f(x))$", isCorrect: true, explanation: "Standard definition of composition." }, { id: "B", text: "$f(g(x))$", isCorrect: false, explanation: "Wrong order." }], stepText: "This means $g(f(x)) \\in H$." },
            { stepText: "If $g(something) \\in H$, then that $something \\in g^{-1}(H)$. So $f(x) \\in g^{-1}(H)$." },
            { stepText: "If $f(x) \\in Set$, then $x \\in f^{-1}(Set)$. So $x \\in f^{-1}(g^{-1}(H))$." },
            { stepText: "The steps are completely reversible, proving equality. Note how the order of functions reverses! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex24", title: "Exercise 24: Uniqueness of Inverses", description: "If they cancel out, they are inverses", icon: "RefreshCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "Let $f, g$ be functions such that $(g \\circ f)(x) = x$ for all $x \\in D(f)$ and $(f \\circ g)(y) = y$ for all $y \\in D(g)$.\n\nProve that $g = f^{-1}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $f$ is a bijection, making $g$ its unique inverse.**", interactiveSteps: [
            { stepText: "From $(g \\circ f)(x) = x$, we know $g \\circ f$ is injective. By Exercise 22(a), $f$ must be injective." },
            { stepText: "From $(f \\circ g)(y) = y$, we know $f \\circ g$ is surjective. By Exercise 22(b), $f$ must be surjective." },
            { prompt: "Since $f$ is both injective and surjective, what can we conclude?", options: [{ id: "A", text: "$f$ is a bijection and has an inverse $f^{-1}$.", isCorrect: true, explanation: "This guarantees the existence of a unique inverse." }, { id: "B", text: "$g$ is a bijection.", isCorrect: false, explanation: "Also true, but our focus is on establishing f's inverse." }], stepText: "Therefore $f$ is a bijection and $f^{-1}$ exists." },
            { stepText: "Since $(g \\circ f)(x) = x$, we can apply $f^{-1}$ to both sides: $f^{-1}(g(f(x))) = f^{-1}(x)$." },
            { stepText: "Substitute $y = f(x)$. We get $f^{-1}(g(y)) = f^{-1}(x)$. Since we know $f(g(y))=y$, $g(y)$ must act exactly as $f^{-1}(y)$. Thus $g = f^{-1}$. Goal reached!" }
        ]}
      ]
    }
  ]
};