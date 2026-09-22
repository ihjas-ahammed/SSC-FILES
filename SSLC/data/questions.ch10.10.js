/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 10 — Polynomials (ബഹുപദങ്ങൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.10.1 Polynomial Functions & Degree
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.1',
    concept: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'What is the degree of the polynomial $P(x) = 5x^4 - 3x^2 + 7x - 9$?',
    prompt_ml: '$P(x) = 5x^4 - 3x^2 + 7x - 9$ എന്ന ബഹുപദത്തിന്റെ കൃതി എത്ര?',
    options_en: [
      { k: 'A', t: '4' },
      { k: 'B', t: '5' },
      { k: 'C', t: '2' },
      { k: 'D', t: '7' }
    ],
    options_ml: [
      { k: 'A', t: '4' },
      { k: 'B', t: '5' },
      { k: 'C', t: '2' },
      { k: 'D', t: '7' }
    ],
    answer: 'A',
    solution_en: 'The degree of a polynomial is the highest power of the variable $x$, which is 4.',
    solution_ml: 'ഏറ്റവും ഉയർന്ന കൃത്യങ്കമാണ് ബഹുപദത്തിന്റെ കൃതി, ഇവിടെ അത് 4 ആണ്.',
    tested_en: 'Identifying degree of a polynomial.',
    tested_ml: 'ബഹുപദത്തിന്റെ കൃതി കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.10.2',
    concept: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'If $P(x) = 3x^2 - 4x + 5$, what is the value of $P(-1)$?',
    prompt_ml: '$P(x) = 3x^2 - 4x + 5$ ആയാൽ $P(-1)$ ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '12' },
      { k: 'B', t: '4' },
      { k: 'C', t: '-2' },
      { k: 'D', t: '6' }
    ],
    options_ml: [
      { k: 'A', t: '12' },
      { k: 'B', t: '4' },
      { k: 'C', t: '-2' },
      { k: 'D', t: '6' }
    ],
    answer: 'A',
    solution_en: '$P(-1) = 3(-1)^2 - 4(-1) + 5 = 3(1) + 4 + 5 = 3 + 4 + 5 = 12$.',
    solution_ml: '$P(-1) = 3(1) + 4 + 5 = 12$.',
    tested_en: 'Evaluating polynomial at a negative value.',
    tested_ml: 'ബഹുപദത്തിന് നെഗറ്റീവ് വില നൽകി കണക്കാക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.2 Remainder Theorem & Factor Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.3',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the remainder when the polynomial $P(x) = x^3 - 2x^2 + 3x - 5$ is divided by $(x - 2)$?',
    prompt_ml: '$P(x) = x^3 - 2x^2 + 3x - 5$ നെ $(x - 2)$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?',
    options_en: [
      { k: 'A', t: '1' },
      { k: 'B', t: '-5' },
      { k: 'C', t: '0' },
      { k: 'D', t: '7' }
    ],
    options_ml: [
      { k: 'A', t: '1' },
      { k: 'B', t: '-5' },
      { k: 'C', t: '0' },
      { k: 'D', t: '7' }
    ],
    answer: 'A',
    solution_en: 'By the remainder theorem, remainder is $P(2) = 2^3 - 2(2^2) + 3(2) - 5 = 8 - 8 + 6 - 5 = 1$.',
    solution_ml: 'ശിഷ്ട സിദ്ധാന്തപ്രകാരം ശിഷ്ടം $P(2) = 8 - 8 + 6 - 5 = 1$.',
    tested_en: 'Application of Remainder Theorem.',
    tested_ml: 'ശിഷ്ട സിദ്ധാന്ത പ്രയോഗം.'
  },
  {
    id: 'obj.m10.10.4',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'For what value of $k$ is $(x - 3)$ a factor of $P(x) = x^2 - 7x + k$?',
    prompt_ml: '$k$ യുടെ ഏത് വിലയ്ക്കാണ് $(x - 3)$ എന്നത് $P(x) = x^2 - 7x + k$ ന്റെ ഒരു ഘടകമാകുന്നത്?',
    options_en: [
      { k: 'A', t: '12' },
      { k: 'B', t: '-12' },
      { k: 'C', t: '21' },
      { k: 'D', t: '10' }
    ],
    options_ml: [
      { k: 'A', t: '12' },
      { k: 'B', t: '-12' },
      { k: 'C', t: '21' },
      { k: 'D', t: '10' }
    ],
    answer: 'A',
    solution_en: 'By factor theorem, $P(3) = 0 \\implies 3^2 - 7(3) + k = 0 \\implies 9 - 21 + k = 0 \\implies -12 + k = 0 \\implies k = 12$.',
    solution_ml: 'ഘടക സിദ്ധാന്തപ്രകാരം $P(3) = 0 \\implies 9 - 21 + k = 0 \\implies k = 12$.',
    tested_en: 'Finding unknown coefficient using Factor Theorem.',
    tested_ml: 'ഘടക സിദ്ധാന്തം ഉപയോഗിച്ച് അജ്ഞാത ഗുണകം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.3 Factoring Quadratic & Higher Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.5',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What are the first-degree factors of the polynomial $P(x) = x^2 - 9x + 20$?',
    prompt_ml: '$P(x) = x^2 - 9x + 20$ എന്ന ബഹുപദത്തിന്റെ ഒന്നാംകൃതി ഘടകങ്ങൾ ഏവ?',
    options_en: [
      { k: 'A', t: '$(x - 4)(x - 5)$' },
      { k: 'B', t: '$(x + 4)(x + 5)$' },
      { k: 'C', t: '$(x - 2)(x - 10)$' },
      { k: 'D', t: '$(x + 2)(x - 10)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(x - 4)(x - 5)$' },
      { k: 'B', t: '$(x + 4)(x + 5)$' },
      { k: 'C', t: '$(x - 2)(x - 10)$' },
      { k: 'D', t: '$(x + 2)(x - 10)$' }
    ],
    answer: 'A',
    solution_en: 'Sum of roots is 9 and product is 20. The numbers are 4 and 5, so $P(x) = (x - 4)(x - 5)$.',
    solution_ml: 'തുക 9 ഉം ഗുണനഫലം 20 ഉം ആകുന്ന സംഖ്യകൾ 4, 5. ഘടകങ്ങൾ $(x - 4)(x - 5)$.',
    tested_en: 'Factoring quadratic polynomial into linear factors.',
    tested_ml: 'രണ്ടാംകൃതി ബഹുപദത്തിന്റെ ഘടകക്രിയ.'
  },
  {
    id: 'obj.m10.10.6',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'Which of the following is the completely factored form of $2x^2 + 5x + 3$?',
    prompt_ml: '$2x^2 + 5x + 3$ ന്റെ പൂർണ്ണ ഘടക രൂപം ഏത്?',
    options_en: [
      { k: 'A', t: '$(2x + 3)(x + 1)$' },
      { k: 'B', t: '$(2x + 1)(x + 3)$' },
      { k: 'C', t: '$(2x - 3)(x - 1)$' },
      { k: 'D', t: '$(x + 2)(2x + 1)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(2x + 3)(x + 1)$' },
      { k: 'B', t: '$(2x + 1)(x + 3)$' },
      { k: 'C', t: '$(2x - 3)(x - 1)$' },
      { k: 'D', t: '$(x + 2)(2x + 1)$' }
    ],
    answer: 'A',
    solution_en: '$2x^2 + 5x + 3 = 2x^2 + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1)$.',
    solution_ml: '$2x^2 + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1)$.',
    tested_en: 'Factoring quadratic polynomial with leading coefficient > 1.',
    tested_ml: 'ഗുണകം 1 ൽ കൂടുതലുള്ള ബഹുപദത്തിന്റെ ഘടകക്രിയ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.4 Roots, Factors & Equation Solutions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.7',
    concept: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $x = 3$ and $x = -2$ are the roots of a second degree polynomial with leading coefficient 1, what is the polynomial?',
    prompt_ml: 'ഒരു രണ്ടാംകൃതി ബഹുപദത്തിന്റെ മൂലങ്ങൾ $3$ ഉം $-2$ ഉം ആയാൽ ആ ബഹുപദം ഏത് ($x^2$ ന്റെ ഗുണകം 1)?',
    options_en: [
      { k: 'A', t: '$x^2 - x - 6$' },
      { k: 'B', t: '$x^2 + x - 6$' },
      { k: 'C', t: '$x^2 - 5x + 6$' },
      { k: 'D', t: '$x^2 + 5x - 6$' }
    ],
    options_ml: [
      { k: 'A', t: '$x^2 - x - 6$' },
      { k: 'B', t: '$x^2 + x - 6$' },
      { k: 'C', t: '$x^2 - 5x + 6$' },
      { k: 'D', t: '$x^2 + 5x - 6$' }
    ],
    answer: 'A',
    solution_en: '$P(x) = (x - 3)(x - (-2)) = (x - 3)(x + 2) = x^2 - x - 6$.',
    solution_ml: '$P(x) = (x - 3)(x + 2) = x^2 - x - 6$.',
    tested_en: 'Constructing polynomial from known roots.',
    tested_ml: 'മൂലങ്ങളിൽ നിന്ന് ബഹുപദം നിർമ്മിക്കൽ.'
  },
  {
    id: 'obj.m10.10.8',
    concept: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What are the roots of the equation $(x - 5)(2x + 7) = 0$?',
    prompt_ml: '$(x - 5)(2x + 7) = 0$ എന്ന സമവാക്യത്തിന്റെ മൂലങ്ങൾ ഏതെല്ലാം?',
    options_en: [
      { k: 'A', t: '$5$ and $-\\frac{7}{2}$' },
      { k: 'B', t: '$-5$ and $\\frac{7}{2}$' },
      { k: 'C', t: '$5$ and $\\frac{7}{2}$' },
      { k: 'D', t: '$-5$ and $-\\frac{7}{2}$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$ ഉം $-\\frac{7}{2}$ ഉം' },
      { k: 'B', t: '$-5$ ഉം $\\frac{7}{2}$ ഉം' },
      { k: 'C', t: '$5$ ഉം $\\frac{7}{2}$ ഉം' },
      { k: 'D', t: '$-5$ ഉം $-\\frac{7}{2}$ ഉം' }
    ],
    answer: 'A',
    solution_en: 'Either $x - 5 = 0 \\implies x = 5$, or $2x + 7 = 0 \\implies x = -\\frac{7}{2}$.',
    solution_ml: '$x - 5 = 0 \\implies x = 5$, അല്ലെങ്കിൽ $2x + 7 = 0 \\implies x = -7/2$.',
    tested_en: 'Finding roots from linear factors.',
    tested_ml: 'ഘടകങ്ങളിൽ നിന്ന് മൂലങ്ങൾ കണ്ടെത്തൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.10.1 Polynomial Functions & Degree
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.1',
    concept: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the polynomial $P(x) = 2x^3 - 3x^2 - 11x + 6$.\\n(a) What is the degree of this polynomial?\\n(b) Find the values of $P(1)$ and $P(-2)$.\\n(c) Find the value of $P(3)$.',
    prompt_ml: '$P(x) = 2x^3 - 3x^2 - 11x + 6$ എന്ന ബഹുപദം പരിഗണിക്കുക.\\n(a) ഈ ബഹുപദത്തിന്റെ കൃതി എത്ര?\\n(b) $P(1), P(-2)$ എന്നിവയുടെ വിലകൾ കാണുക.\\n(c) $P(3)$ ന്റെ വില കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>The highest exponent of $x$ is 3, so the degree of $P(x)$ is 3.</li>\n  <li>Compute $P(1) = 2(1)^3 - 3(1)^2 - 11(1) + 6 = 2 - 3 - 11 + 6 = -6$.</li>\n  <li>Compute $P(-2) = 2(-2)^3 - 3(-2)^2 - 11(-2) + 6 = 2(-8) - 3(4) + 22 + 6 = -16 - 12 + 22 + 6 = 0$.</li>\n  <li>Compute $P(3) = 2(3)^3 - 3(3)^2 - 11(3) + 6 = 2(27) - 3(9) - 33 + 6 = 54 - 27 - 33 + 6 = 0$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) Degree 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Degree stated: 1 mark</li>\n  <li>P(1) and P(-2) evaluated: 1.5 marks</li>\n  <li>P(3) evaluated: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ഏറ്റവും ഉയർന്ന കൃതി 3 ആയതിനാൽ ബഹുപദത്തിന്റെ കൃതി 3 ആണ്.</li>\n  <li>$P(1) = 2 - 3 - 11 + 6 = -6$.</li>\n  <li>$P(-2) = 2(-8) - 3(4) + 22 + 6 = -16 - 12 + 28 = 0$.</li>\n  <li>$P(3) = 54 - 27 - 33 + 6 = 0$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) കൃതി 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>കൃതി എഴുതൽ: 1 മാർക്ക്</li>\n  <li>P(1), P(-2) കാണൽ: 1.5 മാർക്ക്</li>\n  <li>P(3) കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'The highest exponent of $x$ is 3, so the degree of $P(x)$ is 3.',
      'Compute $P(1) = 2(1)^3 - 3(1)^2 - 11(1) + 6 = 2 - 3 - 11 + 6 = -6$.',
      'Compute $P(-2) = 2(-2)^3 - 3(-2)^2 - 11(-2) + 6 = 2(-8) - 3(4) + 22 + 6 = -16 - 12 + 22 + 6 = 0$.',
      'Compute $P(3) = 2(3)^3 - 3(3)^2 - 11(3) + 6 = 2(27) - 3(9) - 33 + 6 = 54 - 27 - 33 + 6 = 0$.'
    ],
    steps_ml: [
      'ഏറ്റവും ഉയർന്ന കൃതി 3 ആയതിനാൽ ബഹുപദത്തിന്റെ കൃതി 3 ആണ്.',
      '$P(1) = 2 - 3 - 11 + 6 = -6$.',
      '$P(-2) = 2(-8) - 3(4) + 22 + 6 = -16 - 12 + 28 = 0$.',
      '$P(3) = 54 - 27 - 33 + 6 = 0$.'
    ],
    rubric_en: [
      'Degree stated: 1 mark',
      'P(1) and P(-2) evaluated: 1.5 marks',
      'P(3) evaluated: 1.5 marks'
    ],
    rubric_ml: [
      'കൃതി എഴുതൽ: 1 മാർക്ക്',
      'P(1), P(-2) കാണൽ: 1.5 മാർക്ക്',
      'P(3) കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) Degree 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0',
    answer_ml: '(a) കൃതി 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.2 Remainder Theorem & Factor Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.2',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Let $P(x) = x^3 - 4x^2 + x + 6$.\\n(a) Check whether $(x - 2)$ is a factor of $P(x)$.\\n(b) Check whether $(x + 1)$ is a factor of $P(x)$.\\n(c) Find the remainder when $P(x)$ is divided by $(x - 1)$.',
    prompt_ml: '$P(x) = x^3 - 4x^2 + x + 6$ ആകട്ടെ.\\n(a) $(x - 2)$ എന്നത് $P(x)$ ന്റെ ഒരു ഘടകമാണോ എന്ന് പരിശോധിക്കുക.\\n(b) $(x + 1)$ എന്നത് $P(x)$ ന്റെ ഒരു ഘടകമാണോ എന്ന് പരിശോധിക്കുക.\\n(c) $P(x)$ നെ $(x - 1)$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>For $(x - 2)$, test $P(2) = 2^3 - 4(2^2) + 2 + 6 = 8 - 16 + 2 + 6 = 0$. Since $P(2) = 0$, $(x - 2)$ <b>is a factor</b>.</li>\n  <li>For $(x + 1)$, test $P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$. Since $P(-1) = 0$, $(x + 1)$ <b>is a factor</b>.</li>\n  <li>Remainder when divided by $(x - 1)$ is $P(1) = 1^3 - 4(1^2) + 1 + 6 = 1 - 4 + 1 + 6 = 4$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) Yes, (x - 2) is a factor; (b) Yes, (x + 1) is a factor; (c) Remainder is 4</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Factor check for (x - 2): 1.5 marks</li>\n  <li>Factor check for (x + 1): 1.5 marks</li>\n  <li>Remainder for (x - 1): 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>$P(2) = 8 - 16 + 2 + 6 = 0$. $P(2) = 0$ ആയതിനാൽ $(x - 2)$ ഒരു ഘടകമാണ്.</li>\n  <li>$P(-1) = -1 - 4 - 1 + 6 = 0$. $P(-1) = 0$ ആയതിനാൽ $(x + 1)$ ഒരു ഘടകമാണ്.</li>\n  <li>$(x - 1)$ കൊണ്ട് ഹരിക്കുമ്പോൾ കിട്ടുന്ന ശിഷ്ടം $P(1) = 1 - 4 + 1 + 6 = 4$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) അതെ, (x - 2) ഘടകമാണ്; (b) അതെ, (x + 1) ഘടകമാണ്; (c) ശിഷ്ടം 4</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>(x - 2) ഘടക പരിശോധന: 1.5 മാർക്ക്</li>\n  <li>(x + 1) ഘടക പരിശോധന: 1.5 മാർക്ക്</li>\n  <li>ശിഷ്ടം കണ്ടെത്തൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'For $(x - 2)$, test $P(2) = 2^3 - 4(2^2) + 2 + 6 = 8 - 16 + 2 + 6 = 0$. Since $P(2) = 0$, $(x - 2)$ <b>is a factor</b>.',
      'For $(x + 1)$, test $P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$. Since $P(-1) = 0$, $(x + 1)$ <b>is a factor</b>.',
      'Remainder when divided by $(x - 1)$ is $P(1) = 1^3 - 4(1^2) + 1 + 6 = 1 - 4 + 1 + 6 = 4$.'
    ],
    steps_ml: [
      '$P(2) = 8 - 16 + 2 + 6 = 0$. $P(2) = 0$ ആയതിനാൽ $(x - 2)$ ഒരു ഘടകമാണ്.',
      '$P(-1) = -1 - 4 - 1 + 6 = 0$. $P(-1) = 0$ ആയതിനാൽ $(x + 1)$ ഒരു ഘടകമാണ്.',
      '$(x - 1)$ കൊണ്ട് ഹരിക്കുമ്പോൾ കിട്ടുന്ന ശിഷ്ടം $P(1) = 1 - 4 + 1 + 6 = 4$.'
    ],
    rubric_en: [
      'Factor check for (x - 2): 1.5 marks',
      'Factor check for (x + 1): 1.5 marks',
      'Remainder for (x - 1): 1 mark'
    ],
    rubric_ml: [
      '(x - 2) ഘടക പരിശോധന: 1.5 മാർക്ക്',
      '(x + 1) ഘടക പരിശോധന: 1.5 മാർക്ക്',
      'ശിഷ്ടം കണ്ടെത്തൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) Yes, (x - 2) is a factor; (b) Yes, (x + 1) is a factor; (c) Remainder is 4',
    answer_ml: '(a) അതെ, (x - 2) ഘടകമാണ്; (b) അതെ, (x + 1) ഘടകമാണ്; (c) ശിഷ്ടം 4'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.3 Factoring Quadratic & Higher Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.3',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the polynomial $P(x) = x^3 - 6x^2 + 11x - 6$.\\n(a) Show that $(x - 1)$ is a factor of $P(x)$.\\n(b) Divide $P(x)$ by $(x - 1)$ to find the quotient second-degree polynomial $Q(x)$.\\n(c) Factorize $P(x)$ completely into three first-degree factors.',
    prompt_ml: '$P(x) = x^3 - 6x^2 + 11x - 6$ എന്ന ബഹുപദം പരിഗണിക്കുക.\\n(a) $(x - 1)$ എന്നത് $P(x)$ ന്റെ ഒരു ഘടകമാണെന്ന് കാണിക്കുക.\\n(b) $P(x)$ നെ $(x - 1)$ കൊണ്ട് ഹരിച്ച് രണ്ടാംകൃതി ബഹുപദമായ $Q(x)$ കണ്ടെത്തുക.\\n(c) $P(x)$ നെ മൂന്ന് ഒന്നാംകൃതി ഘടകങ്ങളുടെ ഗുണനഫലമായി എഴുതുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Compute $P(1) = 1^3 - 6(1^2) + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$. By the factor theorem, $(x - 1)$ is a factor.</li>\n  <li>Divide $P(x)$ by $(x - 1)$: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$. Thus quotient $Q(x) = x^2 - 5x + 6$.</li>\n  <li>Factor $Q(x)$: $x^2 - 5x + 6 = (x - 2)(x - 3)$.</li>\n  <li>The complete factorization is $P(x) = (x - 1)(x - 2)(x - 3)$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) P(1) = 0, so (x - 1) is a factor; (b) Q(x) = x² - 5x + 6; (c) (x - 1)(x - 2)(x - 3)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Showing P(1) = 0: 1 mark</li>\n  <li>Division and quotient Q(x): 1.5 marks</li>\n  <li>Complete factorization: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>$P(1) = 1 - 6 + 11 - 6 = 0$. അതിനാൽ $(x - 1)$ ഒരു ഘടകമാണ്.</li>\n  <li>$P(x)$ നെ $(x - 1)$ കൊണ്ട് ഹരിച്ചാൽ: $Q(x) = x^2 - 5x + 6$.</li>\n  <li>$x^2 - 5x + 6 = (x - 2)(x - 3)$.</li>\n  <li>പൂർണ്ണ ഘടക രൂപം: $P(x) = (x - 1)(x - 2)(x - 3)$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) P(1) = 0, അതിനാൽ (x - 1) ഘടകം; (b) Q(x) = x² - 5x + 6; (c) (x - 1)(x - 2)(x - 3)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>P(1) = 0 എന്ന് തെളിയിക്കൽ: 1 മാർക്ക്</li>\n  <li>ഹരിച്ച് Q(x) കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>\n  <li>പൂർണ്ണ ഘടക രൂപം എഴുതൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Compute $P(1) = 1^3 - 6(1^2) + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$. By the factor theorem, $(x - 1)$ is a factor.',
      'Divide $P(x)$ by $(x - 1)$: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$. Thus quotient $Q(x) = x^2 - 5x + 6$.',
      'Factor $Q(x)$: $x^2 - 5x + 6 = (x - 2)(x - 3)$.',
      'The complete factorization is $P(x) = (x - 1)(x - 2)(x - 3)$.'
    ],
    steps_ml: [
      '$P(1) = 1 - 6 + 11 - 6 = 0$. അതിനാൽ $(x - 1)$ ഒരു ഘടകമാണ്.',
      '$P(x)$ നെ $(x - 1)$ കൊണ്ട് ഹരിച്ചാൽ: $Q(x) = x^2 - 5x + 6$.',
      '$x^2 - 5x + 6 = (x - 2)(x - 3)$.',
      'പൂർണ്ണ ഘടക രൂപം: $P(x) = (x - 1)(x - 2)(x - 3)$.'
    ],
    rubric_en: [
      'Showing P(1) = 0: 1 mark',
      'Division and quotient Q(x): 1.5 marks',
      'Complete factorization: 1.5 marks'
    ],
    rubric_ml: [
      'P(1) = 0 എന്ന് തെളിയിക്കൽ: 1 മാർക്ക്',
      'ഹരിച്ച് Q(x) കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      'പൂർണ്ണ ഘടക രൂപം എഴുതൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) P(1) = 0, so (x - 1) is a factor; (b) Q(x) = x² - 5x + 6; (c) (x - 1)(x - 2)(x - 3)',
    answer_ml: '(a) P(1) = 0, അതിനാൽ (x - 1) ഘടകം; (b) Q(x) = x² - 5x + 6; (c) (x - 1)(x - 2)(x - 3)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.4 Roots, Factors & Equation Solutions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.4',
    concept: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A second-degree polynomial $P(x)$ has roots $4$ and $-1$, and $P(2) = -12$.\\n(a) Write the general form of $P(x)$ in terms of a constant multiplier $k$ and its factors.\\n(b) Use the given condition $P(2) = -12$ to find the value of $k$.\\n(c) Expand and write the polynomial in the standard form $ax^2 + bx + c$.',
    prompt_ml: 'ഒരു രണ്ടാംകൃതി ബഹുപദം $P(x)$ ന്റെ മൂലങ്ങൾ $4$ ഉം $-1$ ഉം ആണ്. $P(2) = -12$ ആണെന്ന് തന്നിരിക്കുന്നു.\\n(a) ഒരു സ്ഥിരസംഖ്യ $k$ യും ഘടകങ്ങളും ഉപയോഗിച്ച് $P(x)$ ന്റെ പൊതുരൂപം എഴുതുക.\\n(b) $P(2) = -12$ എന്ന വ്യവസ്ഥ ഉപയോഗിച്ച് $k$ യുടെ വില കണ്ടെത്തുക.\\n(c) ബഹുപദത്തെ വിപുലീകരിച്ച് $ax^2 + bx + c$ എന്ന സാധാരണ രൂപത്തിൽ എഴുതുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Since roots are $4$ and $-1$, the factors are $(x - 4)$ and $(x - (-1)) = (x + 1)$. General form: $P(x) = k(x - 4)(x + 1)$.</li>\n  <li>Given $P(2) = -12$: $k(2 - 4)(2 + 1) = -12 \\implies k(-2)(3) = -12 \\implies -6k = -12 \\implies k = 2$.</li>\n  <li>Substitute $k = 2$: $P(x) = 2(x - 4)(x + 1) = 2(x^2 - 3x - 4) = 2x^2 - 6x - 8$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) P(x) = k(x - 4)(x + 1); (b) k = 2; (c) P(x) = 2x² - 6x - 8</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Factored form with k: 1 mark</li>\n  <li>Finding multiplier k = 2: 1.5 marks</li>\n  <li>Standard expanded polynomial: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>മൂലങ്ങൾ 4 ഉം -1 ഉം ആയതിനാൽ ഘടകങ്ങൾ $(x - 4), (x + 1)$ ആണ്. $P(x) = k(x - 4)(x + 1)$.</li>\n  <li>$P(2) = k(2 - 4)(2 + 1) = -6k = -12 \\implies k = 2$.</li>\n  <li>$P(x) = 2(x^2 - 3x - 4) = 2x^2 - 6x - 8$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) P(x) = k(x - 4)(x + 1); (b) k = 2; (c) P(x) = 2x² - 6x - 8</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>k ചേർത്തുള്ള ഘടക രൂപം: 1 മാർക്ക്</li>\n  <li>k = 2 എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>\n  <li>വിപുലീകരിച്ച രൂപം എഴുതൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Since roots are $4$ and $-1$, the factors are $(x - 4)$ and $(x - (-1)) = (x + 1)$. General form: $P(x) = k(x - 4)(x + 1)$.',
      'Given $P(2) = -12$: $k(2 - 4)(2 + 1) = -12 \\implies k(-2)(3) = -12 \\implies -6k = -12 \\implies k = 2$.',
      'Substitute $k = 2$: $P(x) = 2(x - 4)(x + 1) = 2(x^2 - 3x - 4) = 2x^2 - 6x - 8$.'
    ],
    steps_ml: [
      'മൂലങ്ങൾ 4 ഉം -1 ഉം ആയതിനാൽ ഘടകങ്ങൾ $(x - 4), (x + 1)$ ആണ്. $P(x) = k(x - 4)(x + 1)$.',
      '$P(2) = k(2 - 4)(2 + 1) = -6k = -12 \\implies k = 2$.',
      '$P(x) = 2(x^2 - 3x - 4) = 2x^2 - 6x - 8$.'
    ],
    rubric_en: [
      'Factored form with k: 1 mark',
      'Finding multiplier k = 2: 1.5 marks',
      'Standard expanded polynomial: 1.5 marks'
    ],
    rubric_ml: [
      'k ചേർത്തുള്ള ഘടക രൂപം: 1 മാർക്ക്',
      'k = 2 എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      'വിപുലീകരിച്ച രൂപം എഴുതൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) P(x) = k(x - 4)(x + 1); (b) k = 2; (c) P(x) = 2x² - 6x - 8',
    answer_ml: '(a) P(x) = k(x - 4)(x + 1); (b) k = 2; (c) P(x) = 2x² - 6x - 8'
  }
);
