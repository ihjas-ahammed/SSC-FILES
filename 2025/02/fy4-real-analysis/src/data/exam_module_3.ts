import { ExamPaper } from '../types';

export const EXAM_MODULE_3: ExamPaper = {
  moduleId: 'module-3',
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
          question: 'Define the limit of a sequence of real numbers.',
          solution: '**Definition:**\nA sequence $X = (x_n)$ in $\\mathbb{R}$ is said to converge to $x \\in \\mathbb{R}$, or $x$ is said to be a limit of $(x_n)$, if for every $\\epsilon > 0$ there exists a natural number $K(\\epsilon)$ such that for all $n \\ge K(\\epsilon)$, the terms $x_n$ satisfy $|x_n - x| < \\epsilon$. $\\blacksquare$'
        },
        {
          id: 'q2',
          number: '2',
          marks: 3,
          question: 'Prove that $\\lim(1/n) = 0$.',
          solution: '**Proof:**\nIf $\\epsilon > 0$ is given, then $1/\\epsilon > 0$. By the Archimedean Property, there is a natural number $K = K(\\epsilon)$ such that $1/K < \\epsilon$.\nThen, if $n \\ge K$, we have $1/n \\le 1/K < \\epsilon$. \nConsequently, if $n \\ge K$, then:\n$|1/n - 0| = 1/n < \\epsilon$.\nTherefore, we assert that the sequence $(1/n)$ converges to 0. $\\blacksquare$'
        },
        {
          id: 'q3',
          number: '3',
          marks: 3,
          question: 'Define what it means for a sequence to be bounded.',
          solution: '**Definition:**\nA sequence $X = (x_n)$ of real numbers is said to be bounded if there exists a real number $M > 0$ such that $|x_n| \\le M$ for all $n \\in \\mathbb{N}$. This means the set of values $\\{x_n : n \\in \\mathbb{N}\\}$ is a bounded subset of $\\mathbb{R}$. $\\blacksquare$'
        },
        {
          id: 'q4',
          number: '4',
          marks: 3,
          question: 'What is a monotone sequence?',
          solution: '**Definition:**\nA sequence $(x_n)$ is **increasing** if $x_1 \\le x_2 \\le \\dots \\le x_n \\le x_{n+1} \\dots$\nIt is **decreasing** if $x_1 \\ge x_2 \\ge \\dots \\ge x_n \\ge x_{n+1} \\dots$\nA sequence is **monotone** if it is either increasing or decreasing. $\\blacksquare$'
        },
        {
          id: 'q5',
          number: '5',
          marks: 3,
          question: 'State the Squeeze Theorem for sequences.',
          solution: '**Squeeze Theorem:**\nSuppose that $X = (x_n)$, $Y = (y_n)$, and $Z = (z_n)$ are sequences of real numbers such that $x_n \\le y_n \\le z_n$ for all $n \\in \\mathbb{N}$, and that $\\lim(x_n) = \\lim(z_n)$. \nThen $Y = (y_n)$ is convergent and $\\lim(x_n) = \\lim(y_n) = \\lim(z_n)$. $\\blacksquare$'
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
          question: 'Prove that a convergent sequence of real numbers is bounded.',
          solution: '**Proof:**\nSuppose that $\\lim(x_n) = x$ and let $\\epsilon = 1$. Then there exists a natural number $K$ such that $|x_n - x| < 1$ for all $n \\ge K$.\nIf we apply the Triangle Inequality with $n \\ge K$ we obtain:\n$|x_n| = |x_n - x + x| \\le |x_n - x| + |x| < 1 + |x|$.\nIf we set $M := \\sup\\{|x_1|, |x_2|, \\dots, |x_{K-1}|, 1 + |x|\\}$,\nthen it follows that $|x_n| \\le M$ for all $n \\in \\mathbb{N}$. Thus, the sequence is bounded. $\\blacksquare$'
        },
        {
          id: 'q7',
          number: '7',
          marks: 6,
          question: 'Prove that a sequence in $\\mathbb{R}$ can have at most one limit.',
          solution: '**Proof:**\nSuppose that $x\'$ and $x\'\'$ are both limits of $(x_n)$. For each $\\epsilon > 0$ there exist $K\'$ such that $|x_n - x\'| < \\epsilon/2$ for all $n \\ge K\'$, and there exists $K\'\'$ such that $|x_n - x\'\'| < \\epsilon/2$ for all $n \\ge K\'\'$.\nLet $K$ be the larger of $K\'$ and $K\'\'$. Then for $n \\ge K$ we apply the Triangle Inequality to get:\n$|x\' - x\'\'| = |x\' - x_n + x_n - x\'\'| \\le |x\' - x_n| + |x_n - x\'\'| < \\epsilon/2 + \\epsilon/2 = \\epsilon$.\nSince $\\epsilon > 0$ is an arbitrary positive number, we conclude that $|x\' - x\'\'| = 0$, so that $x\' = x\'\'$. $\\blacksquare$'
        },
        {
          id: 'q8',
          number: '8',
          marks: 6,
          question: 'Show that $\\lim(b^n) = 0$ if $0 < b < 1$.',
          solution: '**Proof:**\nWe can write $b = 1/(1+a)$, where $a := (1/b) - 1$ so that $a > 0$.\nBy Bernoulli\'s Inequality, we have $(1+a)^n \\ge 1 + na$. Hence:\n$0 < b^n = \\frac{1}{(1+a)^n} \\le \\frac{1}{1+na} < \\frac{1}{na}$.\nSince $\\lim(1/n) = 0$, we may invoke the Domination Theorem (Theorem 3.1.10) with $C = 1/a$ to infer that $\\lim(b^n) = 0$. $\\blacksquare$'
        },
        {
          id: 'q9',
          number: '9',
          marks: 6,
          question: 'If $X = (x_n)$ converges to $x$ and $Y = (y_n)$ converges to $y$, prove that $\\lim(x_n + y_n) = x + y$.',
          solution: '**Proof:**\nTo show that $\\lim(x_n + y_n) = x + y$, we need to estimate the magnitude of $|(x_n + y_n) - (x + y)|$.\nTo do this we use the Triangle Inequality to obtain:\n$|(x_n + y_n) - (x + y)| = |(x_n - x) + (y_n - y)| \\le |x_n - x| + |y_n - y|$.\nBy hypothesis, if $\\epsilon > 0$ there exists a natural number $K_1$ such that if $n \\ge K_1$, then $|x_n - x| < \\epsilon/2$; also there exists $K_2$ such that if $n \\ge K_2$, then $|y_n - y| < \\epsilon/2$.\nHence if $K(\\epsilon) := \\sup\\{K_1, K_2\\}$, it follows that if $n \\ge K(\\epsilon)$ then:\n$|(x_n + y_n) - (x + y)| \\le |x_n - x| + |y_n - y| < \\epsilon/2 + \\epsilon/2 = \\epsilon$.\nSince $\\epsilon > 0$ is arbitrary, we infer that $(x_n + y_n)$ converges to $x + y$. $\\blacksquare$'
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
          question: '(a) State and prove the Monotone Convergence Theorem.\n(b) Give an example to show that the sequence $(1+1/n)^n$ is bounded and increasing.',
          solution: '**(a) Monotone Convergence Theorem:** A monotone sequence of real numbers is convergent if and only if it is bounded.\n*Proof:* We know a convergent sequence is bounded. Conversely, let $X$ be bounded and monotone (assume increasing). Since $X$ is bounded above, $x^* = \\sup\\{x_n : n \\in \\mathbb{N}\\}$ exists. Let $\\epsilon > 0$. Since $x^* - \\epsilon$ is not an upper bound, there exists $x_K$ such that $x^* - \\epsilon < x_K$. Since $X$ is increasing, for all $n \\ge K$, $x_n \\ge x_K$. Thus $x^* - \\epsilon < x_K \\le x_n \\le x^* < x^* + \\epsilon$. Therefore $|x_n - x^*| < \\epsilon$ for all $n \\ge K$. So $X$ converges to $x^*$. $\\blacksquare$\n\n**(b)** Let $e_n = (1+1/n)^n$. By Binomial Theorem:\n$e_n = 1 + 1 + \\frac{1}{2!}(1-\\frac{1}{n}) + \\dots + \\frac{1}{n!}(1-\\frac{1}{n})\\dots(1-\\frac{n-1}{n})$.\n$e_{n+1}$ has an additional positive term and each $(1-k/n)$ is replaced by the larger $(1-k/(n+1))$. Thus $e_n < e_{n+1}$, sequence is increasing.\nSince $(1-k/n) < 1$ and $2^{p-1} \\le p!$, we have $e_n < 1 + 1 + \\frac{1}{2} + \\frac{1}{2^2} + \\dots + \\frac{1}{2^{n-1}} < 3$. Bounded above. $\\blacksquare$'
        },
        {
          id: 'q11',
          number: '11',
          marks: 10,
          question: '(a) Prove that if $\\lim(x_n) = x > 0$, then there exists a natural number $M$ such that $x_n > 0$ for all $n \\ge M$.\n(b) Show that $\\lim(\\sqrt{n+1} - \\sqrt{n}) = 0$.',
          solution: '**(a) Proof:**\nLet $\\lim(x_n) = x > 0$. We choose $\\epsilon = x/2$, which is strictly positive.\nBy definition of limits, there exists a natural number $M$ such that for all $n \\ge M$, we have $|x_n - x| < x/2$.\nThis inequality unfolds to:\n$-x/2 < x_n - x < x/2$\nAdding $x$ to all parts gives:\n$x/2 < x_n < 3x/2$\nSince $x > 0$, $x/2 > 0$. Therefore, $x_n > x/2 > 0$ for all $n \\ge M$. $\\blacksquare$\n\n**(b) Proof:**\nWe multiply and divide the expression by its conjugate:\n$\\sqrt{n+1} - \\sqrt{n} = \\frac{(\\sqrt{n+1} - \\sqrt{n})(\\sqrt{n+1} + \\sqrt{n})}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{n+1 - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$.\nSince $\\sqrt{n+1} > 0$, we have $\\sqrt{n+1} + \\sqrt{n} > \\sqrt{n}$.\nTaking reciprocals reverses the inequality:\n$0 < \\frac{1}{\\sqrt{n+1} + \\sqrt{n}} < \\frac{1}{\\sqrt{n}}$.\nSince we know $\\lim(1/\\sqrt{n}) = 0$, by the Squeeze Theorem, the sequence converges to 0. $\\blacksquare$'
        }
      ]
    }
  ]
};