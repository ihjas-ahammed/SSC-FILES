/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 8: Polynomials (ബഹുപദങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.8.1 Algebraic Expressions and Concept of Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.1',
    concept: 'm9.8.1.algebraic-expressions-and-polynomials',
    sec: '9.8.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following algebraic expressions is strictly a polynomial?',
    prompt_ml: 'താഴെ പറയുന്ന ബീജഗണിത വാക്യങ്ങളിൽ കൃത്യമായും ഒരു ബഹുപദം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$3x^2 - \\sqrt{5}x + 8$' },
      { k: 'B', t: '$2x^2 + \\frac{3}{x} - 1$' },
      { k: 'C', t: '$5\\sqrt{x} + 4x - 7$' },
      { k: 'D', t: '$x^{-2} + 3x + 1$' }
    ],
    options_ml: [
      { k: 'A', t: '$3x^2 - \\sqrt{5}x + 8$' },
      { k: 'B', t: '$2x^2 + \\frac{3}{x} - 1$' },
      { k: 'C', t: '$5\\sqrt{x} + 4x - 7$' },
      { k: 'D', t: '$x^{-2} + 3x + 1$' }
    ],
    answer: 'A',
    solution_en: 'In option A, all exponents of $x$ (2, 1, 0) are non-negative integers. In option B, $\\frac{3}{x} = 3x^{-1}$ (negative power). In option C, $\\sqrt{x} = x^{1/2}$ (fractional power). In D, $x^{-2}$ is negative.',
    solution_ml: 'ഓപ്ഷൻ A-യിൽ $x$-ന്റെ എല്ലാ ഘാതങ്ങളും അഖണ്ഡസംഖ്യകളാണ് (2, 1, 0). മറ്റ് ഓപ്ഷനുകളിൽ ഋണ ഘാതമോ ഭിന്നസംഖ്യാ ഘാതമോ വരുന്നു.',
    tested_en: 'Identifying valid polynomials by checking exponents.',
    tested_ml: 'ഘാതങ്ങൾ പരിശോധിച്ച് ബഹുപദം തിരിച്ചറിയൽ.'
  },
  {
    id: 'obj.m9.8.2',
    concept: 'm9.8.1.algebraic-expressions-and-polynomials',
    sec: '9.8.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the coefficient of $x^2$ in the polynomial $p(x) = 5 - 3x + 7x^2 - 2x^3$?',
    prompt_ml: '$p(x) = 5 - 3x + 7x^2 - 2x^3$ എന്ന ബഹുപദത്തിലെ $x^2$-ന്റെ ഗുണകം എത്ര?',
    options_en: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$-3$' },
      { k: 'C', t: '$-2$' },
      { k: 'D', t: '$5$' }
    ],
    options_ml: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$-3$' },
      { k: 'C', t: '$-2$' },
      { k: 'D', t: '$5$' }
    ],
    answer: 'A',
    solution_en: 'The term containing $x^2$ is $+7x^2$. The coefficient is $7$.',
    solution_ml: '$x^2$ ഉള്ള പദം $+7x^2$ ആയതിനാൽ ഗുണകം $7$ ആണ്.',
    tested_en: 'Reading coefficients of specific polynomial terms.',
    tested_ml: 'നിർദ്ദിഷ്ട പദത്തിന്റെ ഗുണകം കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.8.2 Degree and Classification of Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.3',
    concept: 'm9.8.2.degree-and-classification',
    sec: '9.8.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the degree of the polynomial $p(x) = (x^2 + 1)(x^3 - 4)$?',
    prompt_ml: '$p(x) = (x^2 + 1)(x^3 - 4)$ എന്ന ബഹുപദത്തിന്റെ കൃതി എത്ര?',
    options_en: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$3$' },
      { k: 'D', t: '$2$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$3$' },
      { k: 'D', t: '$2$' }
    ],
    answer: 'A',
    solution_en: 'The degree of a product of polynomials is the sum of their degrees: $\\deg(p) = 2 + 3 = 5$. Expanded: $x^2 \\times x^3 = x^5$.',
    solution_ml: 'ഗുണനഫലത്തിന്റെ കൃതി കൃതികളുടെ തുകയാണ്: $2 + 3 = 5$.',
    tested_en: 'Degree of polynomial product.',
    tested_ml: 'ഗുണനഫലത്തിന്റെ കൃതി കാണൽ.'
  },
  {
    id: 'obj.m9.8.4',
    concept: 'm9.8.2.degree-and-classification',
    sec: '9.8.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What kind of polynomial is $f(x) = 8x - 3$ according to its degree?',
    prompt_ml: '$f(x) = 8x - 3$ എന്ന ബഹുപദം കൃതി അനുസരിച്ച് ഏത് വിഭാഗത്തിൽപ്പെടുന്നു?',
    options_en: [
      { k: 'A', t: 'Linear polynomial (degree 1)' },
      { k: 'B', t: 'Quadratic polynomial (degree 2)' },
      { k: 'C', t: 'Constant polynomial (degree 0)' },
      { k: 'D', t: 'Cubic polynomial (degree 3)' }
    ],
    options_ml: [
      { k: 'A', t: 'ഒന്നാംകൃതി ബഹുപദം (കൃതി 1)' },
      { k: 'B', t: 'രണ്ടാംകൃതി ബഹുപദം (കൃതി 2)' },
      { k: 'C', t: 'സ്ഥിര ബഹുപദം (കൃതി 0)' },
      { k: 'D', t: 'മൂന്നാംകൃതി ബഹുപദം (കൃതി 3)' }
    ],
    answer: 'A',
    solution_en: 'The highest power of $x$ is 1; therefore it is a linear polynomial of degree 1.',
    solution_ml: '$x$-ന്റെ ഏറ്റവും ഉയർന്ന ഘാതം 1 ആയതിനാൽ ഇത് ഒന്നാംകൃതി ബഹുപദമാണ്.',
    tested_en: 'Classification of polynomials by degree.',
    tested_ml: 'കൃതി അടിസ്ഥാനമാക്കിയുള്ള തരംതിരിവ്.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.8.3 Value of a Polynomial and Zeroes of Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.5',
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    sec: '9.8.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $p(x) = 3x^2 - 5x + 2$, what is the value of $p(-1)$?',
    prompt_ml: '$p(x) = 3x^2 - 5x + 2$ ആയാൽ $p(-1)$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$0$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$-4$' }
    ],
    options_ml: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$0$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$-4$' }
    ],
    answer: 'A',
    solution_en: '$p(-1) = 3(-1)^2 - 5(-1) + 2 = 3(1) + 5 + 2 = 3 + 5 + 2 = 10$.',
    solution_ml: '$p(-1) = 3(-1)^2 - 5(-1) + 2 = 3 + 5 + 2 = 10$.',
    tested_en: 'Evaluating polynomial at a negative input.',
    tested_ml: 'നെഗറ്റീവ് സംഖ്യയിൽ ബഹുപദത്തിന്റെ വില കാണൽ.'
  },
  {
    id: 'obj.m9.8.6',
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    sec: '9.8.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the zero of the linear polynomial $p(x) = 5x + 15$?',
    prompt_ml: '$p(x) = 5x + 15$ എന്ന ഒന്നാംകൃതി ബഹുപദത്തിന്റെ പൂജ്യം എത്ര?',
    options_en: [
      { k: 'A', t: '$-3$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$15$' },
      { k: 'D', t: '$0$' }
    ],
    options_ml: [
      { k: 'A', t: '$-3$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$15$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'A',
    solution_en: 'Set $p(x) = 0 \\implies 5x + 15 = 0 \\implies 5x = -15 \\implies x = -3$.',
    solution_ml: '$5x + 15 = 0 \\implies 5x = -15 \\implies x = -3$.',
    tested_en: 'Finding the zero of a linear polynomial.',
    tested_ml: 'ഒന്നാംകൃതി ബഹുപദത്തിന്റെ പൂജ്യം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.8.4 Operations on Polynomials and Geometric Modeling
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.7',
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    sec: '9.8.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A rectangle has length $(x + 5)\\text{ cm}$ and breadth $(x + 2)\\text{ cm}$. Which polynomial represents its area?',
    prompt_ml: 'ഒരു ചതുരത്തിന്റെ നീളം $(x + 5)\\text{ cm}$-ഉം വീതി $(x + 2)\\text{ cm}$-ഉം ആണ്. അതിന്റെ പരപ്പളവിനെ സൂചിപ്പിക്കുന്ന ബഹുപദം ഏത്?',
    options_en: [
      { k: 'A', t: '$x^2 + 7x + 10$' },
      { k: 'B', t: '$2x + 7$' },
      { k: 'C', t: '$x^2 + 10$' },
      { k: 'D', t: '$4x + 14$' }
    ],
    options_ml: [
      { k: 'A', t: '$x^2 + 7x + 10$' },
      { k: 'B', t: '$2x + 7$' },
      { k: 'C', t: '$x^2 + 10$' },
      { k: 'D', t: '$4x + 14$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = (x + 5)(x + 2) = x(x + 2) + 5(x + 2) = x^2 + 2x + 5x + 10 = x^2 + 7x + 10$.',
    solution_ml: '$\\text{പരപ്പളവ്} = (x + 5)(x + 2) = x^2 + 7x + 10$.',
    tested_en: 'Geometric area polynomial formulation.',
    tested_ml: 'പരപ്പളവിന്റെ ബഹുപദ രൂപം കാണൽ.'
  },
  {
    id: 'obj.m9.8.8',
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    sec: '9.8.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Subtract $(2x^2 - 3x + 1)$ from $(5x^2 + 4x - 6)$. What is the resulting polynomial?',
    prompt_ml: '$(5x^2 + 4x - 6)$-ൽ നിന്ന് $(2x^2 - 3x + 1)$ കുറച്ചാൽ ലഭിക്കുന്ന ബഹുപദം ഏത്?',
    options_en: [
      { k: 'A', t: '$3x^2 + 7x - 7$' },
      { k: 'B', t: '$3x^2 + x - 5$' },
      { k: 'C', t: '$7x^2 + x - 7$' },
      { k: 'D', t: '$3x^2 - 7x + 7$' }
    ],
    options_ml: [
      { k: 'A', t: '$3x^2 + 7x - 7$' },
      { k: 'B', t: '$3x^2 + x - 5$' },
      { k: 'C', t: '$7x^2 + x - 7$' },
      { k: 'D', t: '$3x^2 - 7x + 7$' }
    ],
    answer: 'A',
    solution_en: '$(5x^2 + 4x - 6) - (2x^2 - 3x + 1) = (5-2)x^2 + (4 - (-3))x + (-6 - 1) = 3x^2 + 7x - 7$.',
    solution_ml: '$(5-2)x^2 + (4+3)x + (-6-1) = 3x^2 + 7x - 7$.',
    tested_en: 'Subtraction of polynomials and sign management.',
    tested_ml: 'ബഹുപദങ്ങളുടെ വ്യവകലനം.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.8.1',
    sec: '9.8.1',
    concept: 'm9.8.1.algebraic-expressions-and-polynomials',
    title_en: 'Polynomial Identification and Rigorous Justification',
    title_ml: 'ബഹുപദങ്ങൾ തിരിച്ചറിയലും കാരണസഹിതം സാധൂകരണവും',
    prompt_en: '<p>Examine each of the following algebraic expressions. State with clear mathematical justification whether each expression is a polynomial or not:</p><ol><li>$p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9$</li><li>$q(x) = 2x^2 + \\frac{5}{x} - 3$</li><li>$r(x) = 3\\sqrt{x} + 7x - 1$</li><li>$s(x) = x^4 - \\frac{2}{3}x^2 + 11$</li></ol>',
    prompt_ml: '<p>താഴെ പറയുന്ന ഓരോ ബീജഗണിത വാക്യവും പരിശോധിച്ച് അവ ബഹുപദങ്ങളാണോ അല്ലയോ എന്ന് കൃത്യമായ കാരണങ്ങൾ സഹിതം വ്യക്തമാക്കുക:</p><ol><li>$p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9$</li><li>$q(x) = 2x^2 + \\frac{5}{x} - 3$</li><li>$r(x) = 3\\sqrt{x} + 7x - 1$</li><li>$s(x) = x^4 - \\frac{2}{3}x^2 + 11$</li></ol>',
    solution_en: `$$\\text{1. Analysis of } p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9:$$
$$\\text{The exponents of } x \\text{ are } 3, 2, 1, 0. \\text{ All exponents are non-negative whole numbers.}$$
$$\\text{The coefficient } \\frac{\\sqrt{3}}{2} \\text{ is a valid real number.}$$
$$\\mathbf{\\text{Conclusion: } p(x) \\text{ IS a polynomial.}}$$

$$\\text{2. Analysis of } q(x) = 2x^2 + \\frac{5}{x} - 3:$$
$$\\text{Rewriting the second term: } \\frac{5}{x} = 5x^{-1}.$$
$$\\text{The exponent } -1 \\text{ is a negative integer (not a whole number).}$$
$$\\mathbf{\\text{Conclusion: } q(x) \\text{ is NOT a polynomial.}}$$

$$\\text{3. Analysis of } r(x) = 3\\sqrt{x} + 7x - 1:$$
$$\\text{Rewriting the first term: } 3\\sqrt{x} = 3x^{1/2}.$$
$$\\text{The exponent } \\frac{1}{2} \\text{ is a fraction, not an integer.}$$
$$\\mathbf{\\text{Conclusion: } r(x) \\text{ is NOT a polynomial.}}$$

$$\\text{4. Analysis of } s(x) = x^4 - \\frac{2}{3}x^2 + 11:$$
$$\\text{The exponents of } x \\text{ are } 4, 2, 0. \\text{ All exponents are whole numbers.}$$
$$\\mathbf{\\text{Conclusion: } s(x) \\text{ IS a polynomial.}}$$`,
    solution_ml: `$$\\text{1. } p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9:$$
$$x\\text{-ന്റെ ഘാതങ്ങൾ } 3, 2, 1, 0 \\text{ എന്നിവ അഖണ്ഡസംഖ്യകളാണ്. അതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമാണ്.}}$$

$$\\text{2. } q(x) = 2x^2 + \\frac{5}{x} - 3:$$
$$\\frac{5}{x} = 5x^{-1} \\text{ എന്നതിൽ ഘാതം } -1 \\text{ ഒരു ഋണസംഖ്യയായതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമല്ല.}}$$

$$\\text{3. } r(x) = 3\\sqrt{x} + 7x - 1:$$
$$3\\sqrt{x} = 3x^{1/2} \\text{ എന്നതിൽ ഘാതം } \\frac{1}{2} \\text{ ഒരു ഭിന്നസംഖ്യയായതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമല്ല.}}$$

$$\\text{4. } s(x) = x^4 - \\frac{2}{3}x^2 + 11:$$
$$x\\text{-ന്റെ ഘാതങ്ങൾ } 4, 2, 0 \\text{ അഖണ്ഡസംഖ്യകളായതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമാണ്.}}$$`
  },

  {
    id: 'w.m9.8.2',
    sec: '9.8.2',
    concept: 'm9.8.2.degree-and-classification',
    title_en: 'Degree Determination and Polynomial Classification',
    title_ml: 'കൃതി നിർണ്ണയവും ബഹുപദങ്ങളുടെ തരംതിരിവും',
    prompt_en: '<p>For each of the following polynomials, determine: (i) its standard form in descending powers of $x$, (ii) its degree, (iii) leading coefficient, and (iv) classify it as constant, linear, quadratic, or cubic:</p><ol><li>$f(x) = 7 - 4x^2 + 3x$</li><li>$g(x) = (2x - 1)(x + 5)$</li><li>$h(x) = 19$</li><li>$k(x) = 4x^3 - 2x + 7x^2 - 8$</li></ol>',
    prompt_ml: '<p>താഴെ പറയുന്ന ഓരോ ബഹുപദത്തിന്റെയും: (i) അവരോഹണ ക്രമത്തിലുള്ള രൂപം, (ii) കൃതി, (iii) മുൻനിര ഗുണകം, (iv) തരംതിരിവ് എന്നിവ കണ്ടെത്തുക:</p><ol><li>$f(x) = 7 - 4x^2 + 3x$</li><li>$g(x) = (2x - 1)(x + 5)$</li><li>$h(x) = 19$</li><li>$k(x) = 4x^3 - 2x + 7x^2 - 8$</li></ol>',
    solution_en: `$$\\text{1. } f(x) = 7 - 4x^2 + 3x:$$
$$\\text{Standard form: } -4x^2 + 3x + 7$$
$$\\text{Degree: } \\mathbf{2}, \\quad \\text{Leading coefficient: } \\mathbf{-4}, \\quad \\text{Classification: } \\mathbf{\\text{Quadratic Polynomial}}$$

$$\\text{2. } g(x) = (2x - 1)(x + 5):$$
$$\\text{Expanded form: } 2x(x + 5) - 1(x + 5) = 2x^2 + 10x - x - 5 = 2x^2 + 9x - 5$$
$$\\text{Degree: } \\mathbf{2}, \\quad \\text{Leading coefficient: } \\mathbf{2}, \\quad \\text{Classification: } \\mathbf{\\text{Quadratic Polynomial}}$$

$$\\text{3. } h(x) = 19:$$
$$\\text{Standard form: } 19x^0$$
$$\\text{Degree: } \\mathbf{0}, \\quad \\text{Leading coefficient: } \\mathbf{19}, \\quad \\text{Classification: } \\mathbf{\\text{Constant Polynomial}}$$

$$\\text{4. } k(x) = 4x^3 - 2x + 7x^2 - 8:$$
$$\\text{Standard form: } 4x^3 + 7x^2 - 2x - 8$$
$$\\text{Degree: } \\mathbf{3}, \\quad \\text{Leading coefficient: } \\mathbf{4}, \\quad \\text{Classification: } \\mathbf{\\text{Cubic Polynomial}}$$`,
    solution_ml: `$$\\text{1. } f(x) = -4x^2 + 3x + 7:$$
$$\\text{കൃതി: } \\mathbf{2}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{-4}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{രണ്ടാംകൃതി ബഹുപദം}}$$

$$\\text{2. } g(x) = (2x - 1)(x + 5) = 2x^2 + 9x - 5:$$
$$\\text{കൃതി: } \\mathbf{2}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{2}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{രണ്ടാംകൃതി ബഹുപദം}}$$

$$\\text{3. } h(x) = 19:$$
$$\\text{കൃതി: } \\mathbf{0}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{19}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{സ്ഥിര ബഹുപദം}}$$

$$\\text{4. } k(x) = 4x^3 + 7x^2 - 2x - 8:$$
$$\\text{കൃതി: } \\mathbf{3}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{4}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{മൂന്നാംകൃതി ബഹുപദം}}$$`
  },

  {
    id: 'w.m9.8.3',
    sec: '9.8.3',
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    title_en: 'Evaluating Polynomial Values and Determining Zeroes',
    title_ml: 'ബഹുപദത്തിന്റെ വില കാണലും പൂജ്യങ്ങൾ നിർണ്ണയിക്കലും',
    prompt_en: '<p>Given the polynomial $p(x) = 2x^2 - 7x + 3$:</p><ol><li>Calculate $p(0)$, $p(1)$, $p(2)$, and $p(3)$.</li><li>Identify which of the values $x = 1, 2, 3$ is a zero of $p(x)$.</li><li>Verify that $x = \\frac{1}{2}$ is also a zero of $p(x)$.</li></ol>',
    prompt_ml: '<p>$p(x) = 2x^2 - 7x + 3$ എന്ന ബഹുപദം പരിഗണിക്കുക:</p><ol><li>$p(0), p(1), p(2), p(3)$ എന്നിവയുടെ വിലകൾ കണക്കാക്കുക.</li><li>$x = 1, 2, 3$ എന്നിവയിൽ $p(x)$-ന്റെ പൂജ്യമായ സംഖ്യ ഏതാണ്?</li><li>$x = \\frac{1}{2}$ എന്നത് $p(x)$-ന്റെ മറ്റൊരു പൂജ്യമാണെന്ന് തെളിയിക്കുക.</li></ol>',
    solution_en: `$$\\text{Step 1: Evaluating at Given Points}$$
$$p(0) = 2(0)^2 - 7(0) + 3 = \\mathbf{3}$$
$$p(1) = 2(1)^2 - 7(1) + 3 = 2 - 7 + 3 = \\mathbf{-2}$$
$$p(2) = 2(2^2) - 7(2) + 3 = 2(4) - 14 + 3 = 8 - 14 + 3 = \\mathbf{-3}$$
$$p(3) = 2(3^2) - 7(3) + 3 = 2(9) - 21 + 3 = 18 - 21 + 3 = \\mathbf{0}$$

$$\\text{Step 2: Identifying the Zero}$$
$$\\text{Since } p(3) = 0, \\text{ the number } \\mathbf{x = 3} \\text{ is a zero of } p(x).$$

$$\\text{Step 3: Verification of } x = 1/2$$
$$p\\left(\\frac{1}{2}\\right) = 2\\left(\\frac{1}{2}\\right)^2 - 7\\left(\\frac{1}{2}\\right) + 3$$
$$= 2\\left(\\frac{1}{4}\\right) - \\frac{7}{2} + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = -\\frac{6}{2} + 3 = -3 + 3 = \\mathbf{0}$$
$$\\text{Since } p(1/2) = 0, \\, \\mathbf{x = \\frac{1}{2}} \\text{ is verified as a zero of } p(x).$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: വിവിധ വിലകൾ കണ്ടെത്തൽ}$$
$$p(0) = 2(0) - 0 + 3 = \\mathbf{3}$$
$$p(1) = 2(1) - 7(1) + 3 = \\mathbf{-2}$$
$$p(2) = 2(4) - 14 + 3 = \\mathbf{-3}$$
$$p(3) = 2(9) - 21 + 3 = 18 - 21 + 3 = \\mathbf{0}$$

$$\\text{ഘട്ടം 2: പൂജ്യം കണ്ടെത്തൽ}$$
$$p(3) = 0 \\text{ ആയതിനാൽ } \\mathbf{x = 3} \\text{ ഒരു പൂജ്യമാണ്.}$$

$$\\text{ഘട്ടം 3: } x = 1/2 \\text{ പരിശോധിക്കൽ}$$
$$p\\left(\\frac{1}{2}\\right) = 2\\left(\\frac{1}{4}\\right) - 7\\left(\\frac{1}{2}\\right) + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = -3 + 3 = \\mathbf{0}$$
$$\\text{അതിനാൽ } \\mathbf{x = \\frac{1}{2}} \\text{ എന്നത് } p(x)\\text{-ന്റെ പൂജ്യമാണ്.}$$`
  },

  {
    id: 'w.m9.8.4',
    sec: '9.8.4',
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    title_en: 'Cardboard Box Volume Modeling and Polynomial Formulation',
    title_ml: 'പെട്ടിയുടെ വ്യാപ്ത മോഡലിംഗും ബഹുപദ രൂപീകരണവും',
    prompt_en: '<p>From each of the four corners of a square piece of tin of side $12\\text{ cm}$, equal squares of side $x\\text{ cm}$ are cut out, and the flaps are turned up to form an open rectangular box. (i) Write the polynomial expressions for the base length and the height of the box. (ii) Formulate the polynomial $V(x)$ representing the volume of the box in standard expanded form. (iii) State the degree of $V(x)$ and calculate the volume when $x = 2\\text{ cm}$.</p>',
    prompt_ml: '<p>$12\\text{ cm}$ വശമുള്ള ഒരു സമചതുര തകിടിന്റെ നാല് മൂലകളിൽ നിന്നും $x\\text{ cm}$ വശമുള്ള സമചതുരങ്ങൾ മുറിച്ചുമാറ്റി വശങ്ങൾ മടക്കി മുകൾഭാഗം തുറന്ന ഒരു പെട്ടിയുണ്ടാക്കുന്നു. (i) പെട്ടിയുടെ പാദത്തിന്റെ വശവും ഉയരവും സൂചിപ്പിക്കുന്ന ബഹുപദങ്ങൾ എഴുതുക. (ii) പെട്ടിയുടെ വ്യാപ്തം $V(x)$-നെ സൂചിപ്പിക്കുന്ന ബഹുപദം സാധാരണ രൂപത്തിൽ എഴുതുക. (iii) $V(x)$-ന്റെ കൃതി എത്രയെന്ന് പ്രസ്താവിക്കുകയും $x = 2\\text{ cm}$ ആകുമ്പോൾ പെട്ടിയുടെ വ്യാപ്തം കണക്കാക്കുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{Step 1: Dimensions of the Box}$$
$$\\text{Initial side of square sheet } = 12\\text{ cm}$$
$$\\text{Two squares of side } x \\text{ are cut along each edge:}$$
$$\\text{Base length } l = 12 - 2x$$
$$\\text{Base breadth } b = 12 - 2x$$
$$\\text{Height of the box } h = x$$

$$\\text{Step 2: Volume Polynomial Formulation}$$
$$V(x) = \\text{length} \\times \\text{breadth} \\times \\text{height}$$
$$V(x) = (12 - 2x)(12 - 2x) \\times x = (12 - 2x)^2 x$$
$$(12 - 2x)^2 = 144 - 48x + 4x^2$$
$$V(x) = x(4x^2 - 48x + 144) = \\mathbf{4x^3 - 48x^2 + 144x}$$

$$\\text{Step 3: Degree and Evaluation at } x = 2$$
$$\\text{The highest power of } x \\text{ is 3; therefore, } \\deg(V) = \\mathbf{3} \\text{ (a Cubic Polynomial).}$$
$$\\text{When } x = 2\\text{ cm:}$$
$$V(2) = 4(2^3) - 48(2^2) + 144(2) = 4(8) - 48(4) + 288 = 32 - 192 + 288 = \\mathbf{128\\text{ cm}^3}$$
$$\\text{Direct check: base } = 12 - 4 = 8\\text{ cm}, \\, h = 2\\text{ cm} \\implies V = 8 \\times 8 \\times 2 = 128\\text{ cm}^3 \\quad (\\text{Verified})$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: പെട്ടിയുടെ അളവുകൾ}$$
$$\\text{പാദത്തിന്റെ വശം } = 12 - 2x$$
$$\\text{പെട്ടിയുടെ ഉയരം } = x$$

$$\\text{ഘട്ടം 2: വ്യാപ്തത്തിന്റെ ബഹുപദ രൂപം}$$
$$V(x) = (12 - 2x)^2 \\cdot x = (144 - 48x + 4x^2) \\cdot x$$
$$V(x) = \\mathbf{4x^3 - 48x^2 + 144x}$$

$$\\text{ഘട്ടം 3: കൃതിയും } x = 2 \\text{ ആകുമ്പോഴുള്ള വ്യാപ്തവും}$$
$$V(x)\\text{-ന്റെ കൃതി: } \\mathbf{3} \\quad (\\text{മൂന്നാംകൃതി ബഹുപദം})$$
$$x = 2\\text{ cm ആകുമ്പോൾ:}$$
$$V(2) = (12 - 4) \\times (12 - 4) \\times 2 = 8 \\times 8 \\times 2 = \\mathbf{128\\text{ cm}^3}$$`
  }
);
