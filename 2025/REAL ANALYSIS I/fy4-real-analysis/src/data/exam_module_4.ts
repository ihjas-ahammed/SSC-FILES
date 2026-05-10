import { ExamPaper } from '../types';

export const EXAM_MODULE_4: ExamPaper = {
  moduleId: 'module-4',
  sections:[
    {
      id: 'sec-a',
      title: 'Section A',
      instruction: 'Answer all. Each question carries 3 Marks. (Ceiling 12)',
      questions:[
        {
          id: 'q1',
          number: '1',
          marks: 3,
          question: 'Define a Cauchy Sequence.',
          solution: '**Definition:**\nA sequence $X = (x_n)$ of real numbers is said to be a **Cauchy sequence** if for every $\\epsilon > 0$ there exists a natural number $H(\\epsilon)$ such that for all natural numbers $n, m \\ge H(\\epsilon)$, the terms satisfy $|x_n - x_m| < \\epsilon$. $\\blacksquare$'
        },
        {
          id: 'q2',
          number: '2',
          marks: 3,
          question: 'State the Bolzano-Weierstrass Theorem for sequences.',
          solution: '**Bolzano-Weierstrass Theorem:**\nA bounded sequence of real numbers has a convergent subsequence.\n(Every sequence that is contained within a finite interval will have at least one subsequence that settles on a specific limit point.) $\\blacksquare$'
        },
        {
          id: 'q3',
          number: '3',
          marks: 3,
          question: 'Define a cluster point of a set.',
          solution: '**Definition:**\nLet $A \\subseteq \\mathbb{R}$. A point $c \\in \\mathbb{R}$ is a **cluster point** of $A$ if for every $\\delta > 0$ there exists at least one point $x \\in A, x \\neq c$ such that $|x - c| < \\delta$.\nEquivalently, every $\\delta$-neighborhood of $c$ contains at least one point of $A$ distinct from $c$. $\\blacksquare$'
        },
        {
          id: 'q4',
          number: '4',
          marks: 3,
          question: 'Define the limit of a function at a point $c$.',
          solution: '**Definition:**\nLet $A \\subseteq \\mathbb{R}$, and let $c$ be a cluster point of $A$. For a function $f : A \\to \\mathbb{R}$, a real number $L$ is said to be a limit of $f$ at $c$ if, given any $\\epsilon > 0$, there exists a $\\delta > 0$ such that if $x \\in A$ and $0 < |x - c| < \\delta$, then $|f(x) - L| < \\epsilon$. $\\blacksquare$'
        },
        {
          id: 'q5',
          number: '5',
          marks: 3,
          question: 'Evaluate $\\lim_{x \\to 0} x \\sin(1/x)$.',
          solution: '**Solution:**\nWe know that for all $z$, $-1 \\le \\sin(z) \\le 1$. Let $z = 1/x$ for $x \\neq 0$.\nMultiplying by $|x|$ preserves inequalities: $-|x| \\le x \\sin(1/x) \\le |x|$.\nSince $\\lim_{x \\to 0} |x| = 0$ and $\\lim_{x \\to 0} -|x| = 0$, the Squeeze Theorem forces $\\lim_{x \\to 0} x \\sin(1/x) = 0$. $\\blacksquare$'
        }
      ]
    },
    {
      id: 'sec-b',
      title: 'Section B',
      instruction: 'Answer all. Each question carries 6 Marks. (Ceiling 18)',
      questions:[
        {
          id: 'q6',
          number: '6',
          marks: 6,
          question: 'Prove that a Cauchy sequence of real numbers is bounded.',
          solution: '**Proof:**\nLet $X = (x_n)$ be a Cauchy sequence and let $\\epsilon := 1$. By the Cauchy definition, there exists an $H := H(1)$ such that if $n, m \\ge H$, then $|x_n - x_m| < 1$.\nIn particular, fixing $m = H$, we have $|x_n - x_H| < 1$ for all $n \\ge H$.\nBy the Triangle Inequality, we have $|x_n| = |x_n - x_H + x_H| \\le |x_n - x_H| + |x_H| < 1 + |x_H|$ for all $n \\ge H$.\nIf we set $M := \\sup\\{|x_1|, |x_2|, \\dots, |x_{H-1}|, 1 + |x_H|\\}$, then it follows that $|x_n| \\le M$ for all $n \\in \\mathbb{N}$. Thus the sequence is bounded. $\\blacksquare$'
        },
        {
          id: 'q7',
          number: '7',
          marks: 6,
          question: 'State the Sequential Criterion for function limits.',
          solution: '**Theorem (Sequential Criterion):**\nLet $f : A \\to \\mathbb{R}$ and let $c$ be a cluster point of $A$. Then $\\lim_{x \\to c} f(x) = L$ if and only if:\nFor every sequence $(x_n)$ in $A$ that converges to $c$ such that $x_n \\neq c$ for all $n \\in \\mathbb{N}$, the sequence $(f(x_n))$ converges to $L$.\nThis powerful theorem bridges the gap between limits of functions and limits of sequences, allowing sequence properties to be applied directly to functions. $\\blacksquare$'
        },
        {
          id: 'q8',
          number: '8',
          marks: 6,
          question: 'Show that $\\lim_{x \\to 0} \\sin(1/x)$ does not exist using the Divergence Criteria.',
          solution: '**Proof:**\nWe use the Sequential Divergence Criteria. We must find two sequences converging to 0 that produce different limits.\nLet $x_n = \\frac{1}{n\\pi}$. Clearly $x_n \\to 0$ as $n \\to \\infty$. For this sequence, $f(x_n) = \\sin(n\\pi) = 0 \\to 0$.\nNow let $y_n = \\frac{1}{\\pi/2 + 2n\\pi}$. As $n \\to \\infty$, $y_n \\to 0$. For this sequence, $f(y_n) = \\sin(\\pi/2 + 2n\\pi) = 1 \\to 1$.\nSince $(x_n)$ and $(y_n)$ both go to 0, but $f(x_n) \\to 0$ and $f(y_n) \\to 1$, the function limit does not exist. $\\blacksquare$'
        },
        {
          id: 'q9',
          number: '9',
          marks: 6,
          question: 'Prove that if $f: A \\to \\mathbb{R}$ and if $c$ is a cluster point of $A$, then $f$ can have only one limit at $c$.',
          solution: '**Proof:**\nSuppose that numbers $L$ and $L\'$ both satisfy the limit definition. For any $\\epsilon > 0$, there exists $\\delta_1 > 0$ such that $0 < |x - c| < \\delta_1 \\implies |f(x) - L| < \\epsilon/2$.\nAlso there exists $\\delta_2 > 0$ such that $0 < |x - c| < \\delta_2 \\implies |f(x) - L\'| < \\epsilon/2$.\nLet $\\delta = \\min(\\delta_1, \\delta_2)$. Since $c$ is a cluster point, there is an $x$ such that $0 < |x - c| < \\delta$. For this $x$, both inequalities hold.\nBy the Triangle Inequality:\n$|L - L\'| \\le |L - f(x)| + |f(x) - L\'| < \\epsilon/2 + \\epsilon/2 = \\epsilon$.\nSince $\\epsilon > 0$ is arbitrary, we conclude that $|L - L\'| = 0$, so $L = L\'$. $\\blacksquare$'
        }
      ]
    },
    {
      id: 'sec-c',
      title: 'Section C',
      instruction: 'Answer any ONE question. Each question carries 10 marks.',
      questions:[
        {
          id: 'q10',
          number: '10',
          marks: 10,
          question: '(a) State and prove the Cauchy Convergence Criterion.\n(b) Prove that every contractive sequence is Cauchy.',
          solution: '**(a) Cauchy Convergence Criterion:** A sequence of real numbers is convergent if and only if it is a Cauchy sequence.\n*Proof:* If $(x_n)$ converges to $x$, then given $\\epsilon > 0$, $\\exists K$ st $|x_n - x| < \\epsilon/2$ for $n \\ge K$. For $n, m \\ge K$, $|x_n - x_m| \\le |x_n - x| + |x_m - x| < \\epsilon$. Thus it is Cauchy.\nConversely, if $X$ is Cauchy, it is bounded. By Bolzano-Weierstrass, it has a convergent subsequence $X\' \\to x^*$. Since terms are Cauchy, the entire sequence tightly clusters around the subsequence\'s limit, forcing the whole sequence to converge to $x^*$. $\\blacksquare$\n\n**(b) Contractive Sequence is Cauchy:** A sequence is contractive if $|x_{n+2} - x_{n+1}| \\le C|x_{n+1} - x_n|$ with $0 < C < 1$.\n*Proof:* Iterating this yields $|x_{k+1} - x_k| \\le C^{k-1}|x_2 - x_1|$.\nFor $m > n$, $|x_m - x_n| \\le \\sum_{k=n}^{m-1} |x_{k+1} - x_k| \\le C^{n-1}(1 + C + \\dots + C^{m-n-1})|x_2 - x_1|$.\nThis is bounded by the infinite geometric series: $C^{n-1} \\frac{1}{1-C} |x_2 - x_1|$.\nSince $0 < C < 1$, $C^{n-1} \\to 0$. Thus for large $n, m$, distance is $< \\epsilon$, making it Cauchy. $\\blacksquare$'
        },
        {
          id: 'q11',
          number: '11',
          marks: 10,
          question: '(a) State and prove the Squeeze Theorem for functions.\n(b) Prove that $\\lim_{x \\to c} x^2 = c^2$ using the $\\epsilon-\\delta$ definition.',
          solution: '**(a) Squeeze Theorem:** Let $A \\subseteq \\mathbb{R}$, let $f, g, h: A \\to \\mathbb{R}$, and $c$ be a cluster point. If $f(x) \\le g(x) \\le h(x)$ for all $x \\in A, x \\neq c$, and if $\\lim_{x\\to c} f = L = \\lim_{x\\to c} h$, then $\\lim_{x\\to c} g = L$.\n*Proof:* Let $\\epsilon > 0$. $\\exists \\delta_1$ st $L - \\epsilon < f(x)$ for $0 < |x-c| < \\delta_1$. $\\exists \\delta_2$ st $h(x) < L + \\epsilon$ for $0 < |x-c| < \\delta_2$. Let $\\delta = \\min(\\delta_1, \\delta_2)$. For $0 < |x-c| < \\delta$, $L - \\epsilon < f(x) \\le g(x) \\le h(x) < L + \\epsilon$. Thus $|g(x) - L| < \\epsilon$, proving the limit. $\\blacksquare$\n\n**(b) $\\epsilon-\\delta$ Proof for $x^2 \\to c^2$:**\nWe want $|x^2 - c^2| < \\epsilon$. Factor: $|x^2 - c^2| = |x - c||x + c|$.\nAssume preliminary bound $|x - c| < 1$. Then $|x| - |c| \\le |x - c| < 1 \\implies |x| < |c| + 1$.\nThus $|x + c| \\le |x| + |c| < 2|c| + 1$.\nThis gives $|x^2 - c^2| < (2|c| + 1)|x - c|$.\nWe want this $< \\epsilon$. Choose $\\delta = \\min(1, \\frac{\\epsilon}{2|c| + 1})$.\nFor $0 < |x-c| < \\delta$, we have $|x^2 - c^2| < (2|c| + 1) \\frac{\\epsilon}{2|c| + 1} = \\epsilon$. $\\blacksquare$'
        }
      ]
    }
  ]
};