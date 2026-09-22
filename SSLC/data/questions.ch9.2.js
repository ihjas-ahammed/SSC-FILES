/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 2: Decimal Forms (ദശാംശരൂപങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.2.1 Fractions and Terminating Decimals
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.2.1',
    concept: 'm9.2.1.fractions-and-terminating-decimals',
    sec: '9.2.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following fractions terminates in decimal form?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ അവസാനിക്കുന്ന ദശാംശരൂപമുള്ള ഭിന്നസംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\frac{7}{80}$' },
      { k: 'B', t: '$\\frac{5}{14}$' },
      { k: 'C', t: '$\\frac{4}{15}$' },
      { k: 'D', t: '$\\frac{1}{6}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{7}{80}$' },
      { k: 'B', t: '$\\frac{5}{14}$' },
      { k: 'C', t: '$\\frac{4}{15}$' },
      { k: 'D', t: '$\\frac{1}{6}$' }
    ],
    answer: 'A',
    solution_en: 'The denominator $80 = 2^4 \\times 5$ contains only prime factors 2 and 5. Hence $\\frac{7}{80}$ is terminating (it equals $0.0875$). The others have prime factors 7 or 3.',
    solution_ml: '$80 = 2^4 \\times 5$ ആയതിനാൽ ഛേദത്തിൽ 2, 5 എന്നീ അഭാജ്യഘടകങ്ങൾ മാത്രമേയുള്ളൂ; അതിനാൽ $\\frac{7}{80} = 0.0875$ അവസാനിക്കുന്ന ദശാംശമാണ്. മറ്റുള്ളവയിൽ 7, 3 എന്നീ ഘടകങ്ങൾ വരുന്നു.',
    tested_en: 'Identifying terminating decimals by prime factorizing denominators.',
    tested_ml: 'ഛേദത്തിന്റെ അഭാജ്യഘടകങ്ങൾ നോക്കി അവസാനിക്കുന്ന ദശാംശം കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m9.2.2',
    concept: 'm9.2.1.fractions-and-terminating-decimals',
    sec: '9.2.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'How many digits are there after the decimal point in the decimal form of $\\frac{17}{250}$?',
    prompt_ml: '$\\frac{17}{250}$ എന്ന ഭിന്നസംഖ്യയുടെ ദശാംശരൂപത്തിൽ ദശാംശബിന്ദുവിന് ശേഷം എത്ര അക്കങ്ങൾ ഉണ്ടായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$2$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$1$' }
    ],
    options_ml: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$2$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$1$' }
    ],
    answer: 'A',
    solution_en: '$250 = 2 \\times 5^3$. Multiply numerator and denominator by $2^2 = 4$: $\\frac{17 \\times 4}{250 \\times 4} = \\frac{68}{1000} = 0.068$, which has 3 decimal places.',
    solution_ml: '$250 = 2 \\times 5^3$. 4 കൊണ്ട് ഗുണിക്കുമ്പോൾ $\\frac{68}{1000} = 0.068$ ലഭിക്കുന്നു; 3 ദശാംശസ്ഥാനങ്ങളുണ്ട്.',
    tested_en: 'Finding number of decimal places of a terminating fraction.',
    tested_ml: 'അവസാനിക്കുന്ന ദശാംശത്തിന്റെ സ്ഥാനങ്ങളുടെ എണ്ണം കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.2.2 Non-Terminating Repeating Decimals
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.2.3',
    concept: 'm9.2.2.repeating-decimals',
    sec: '9.2.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the decimal form of the fraction $\\frac{4}{11}$?',
    prompt_ml: '$\\frac{4}{11}$ എന്ന ഭിന്നസംഖ്യയുടെ ദശാംശരൂപം എന്താണ്?',
    options_en: [
      { k: 'A', t: '$0.\\overline{36}$' },
      { k: 'B', t: '$0.\\overline{44}$' },
      { k: 'C', t: '$0.36$' },
      { k: 'D', t: '$0.\\overline{364}$' }
    ],
    options_ml: [
      { k: 'A', t: '$0.\\overline{36}$' },
      { k: 'B', t: '$0.\\overline{44}$' },
      { k: 'C', t: '$0.36$' },
      { k: 'D', t: '$0.\\overline{364}$' }
    ],
    answer: 'A',
    solution_en: 'Dividing 4 by 11 gives $0.363636\\dots = 0.\\overline{36}$ with a repeating cycle of 2 digits.',
    solution_ml: '4-നെ 11 കൊണ്ട് ഹരിക്കുമ്പോൾ $0.363636\\dots = 0.\\overline{36}$ ലഭിക്കുന്നു; 2 അക്കങ്ങൾ ആവർത്തിക്കുന്നു.',
    tested_en: 'Calculating recurring decimal representation.',
    tested_ml: 'ആവർത്തന ദശാംശരൂപം കണക്കാക്കൽ.'
  },
  {
    id: 'obj.m9.2.4',
    concept: 'm9.2.2.repeating-decimals',
    sec: '9.2.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the maximum number of repeating digits (period length) in the decimal expansion of $\\frac{1}{7}$?',
    prompt_ml: '$\\frac{1}{7}$ എന്ന ഭിന്നസംഖ്യയുടെ ദശാംശരൂപത്തിലെ ആവർത്തന ദൈർഘ്യം (ആവർത്തിക്കുന്ന പരമാവധി അക്കങ്ങളുടെ എണ്ണം) എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$6$' },
      { k: 'B', t: '$7$' },
      { k: 'C', t: '$5$' },
      { k: 'D', t: '$3$' }
    ],
    options_ml: [
      { k: 'A', t: '$6$' },
      { k: 'B', t: '$7$' },
      { k: 'C', t: '$5$' },
      { k: 'D', t: '$3$' }
    ],
    answer: 'A',
    solution_en: 'For denominator $q = 7$, non-zero remainders can only be $\\{1, 2, 3, 4, 5, 6\\}$, so the maximum period length is $7 - 1 = 6$ (indeed, $\\frac{1}{7} = 0.\\overline{142857}$).',
    solution_ml: 'ഛേദം 7 ആകുമ്പോൾ പൂജ്യമല്ലാത്ത 6 ശിഷ്ടങ്ങൾ മാത്രമേ ഉണ്ടാകൂ; അതിനാൽ പരമാവധി ആവർത്തന ദൈർഘ്യം $7 - 1 = 6$ ആണ് ($\\frac{1}{7} = 0.\\overline{142857}$).',
    tested_en: 'Maximum period length of repeating decimals.',
    tested_ml: 'ആവർത്തന ദശാംശത്തിന്റെ പരമാവധി ആവർത്തന ദൈർഘ്യം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.2.3 Converting Repeating Decimals to Fractions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.2.5',
    concept: 'm9.2.3.converting-repeating-decimals',
    sec: '9.2.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the fraction form of the repeating decimal $0.\\overline{45}$ in lowest terms?',
    prompt_ml: '$0.\\overline{45}$ എന്ന ആവർത്തന ദശാംശത്തിന്റെ ഏറ്റവും ലഘുവായ ഭിന്നസംഖ്യാ രൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\frac{5}{11}$' },
      { k: 'B', t: '$\\frac{45}{100}$' },
      { k: 'C', t: '$\\frac{9}{20}$' },
      { k: 'D', t: '$\\frac{45}{9}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{5}{11}$' },
      { k: 'B', t: '$\\frac{45}{100}$' },
      { k: 'C', t: '$\\frac{9}{20}$' },
      { k: 'D', t: '$\\frac{45}{9}$' }
    ],
    answer: 'A',
    solution_en: 'Let $x = 0.\\overline{45}$. $100x - x = 45 \\implies 99x = 45 \\implies x = \\frac{45}{99} = \\frac{5}{11}$.',
    solution_ml: '$x = 0.\\overline{45}$ ആയാൽ $99x = 45 \\implies x = \\frac{45}{99} = \\frac{5}{11}$.',
    tested_en: 'Converting pure repeating decimal to fraction.',
    tested_ml: 'ശുദ്ധ ആവർത്തന ദശാംശത്തെ ഭിന്നസംഖ്യയാക്കൽ.'
  },
  {
    id: 'obj.m9.2.6',
    concept: 'm9.2.3.converting-repeating-decimals',
    sec: '9.2.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The repeating decimal $0.2\\bar{7}$ in simplified fraction form is:',
    prompt_ml: '$0.2\\bar{7}$ എന്ന ആവർത്തന ദശാംശത്തിന്റെ ലഘൂകരിച്ച ഭിന്നസംഖ്യാ രൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\frac{5}{18}$' },
      { k: 'B', t: '$\\frac{27}{99}$' },
      { k: 'C', t: '$\\frac{25}{90}$' },
      { k: 'D', t: '$\\frac{27}{100}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{5}{18}$' },
      { k: 'B', t: '$\\frac{27}{99}$' },
      { k: 'C', t: '$\\frac{25}{90}$' },
      { k: 'D', t: '$\\frac{27}{100}$' }
    ],
    answer: 'A',
    solution_en: 'Let $x = 0.2777\\dots$ $10x = 2.777\\dots$ and $100x = 27.777\\dots$ $100x - 10x = 25 \\implies 90x = 25 \\implies x = \\frac{25}{90} = \\frac{5}{18}$.',
    solution_ml: '$10x = 2.777\\dots$, $100x = 27.777\\dots$. $100x - 10x = 25 \\implies 90x = 25 \\implies x = \\frac{25}{90} = \\frac{5}{18}$.',
    tested_en: 'Converting mixed repeating decimal to fraction.',
    tested_ml: 'മിശ്ര ആവർത്തന ദശാംശത്തെ ഭിന്നസംഖ്യയാക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.2.4 Non-Repeating Decimals and Approximations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.2.7',
    concept: 'm9.2.4.non-repeating-decimals-and-approximations',
    sec: '9.2.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following numbers has a non-terminating and non-repeating decimal expansion?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ അവസാനിക്കാത്തതും ആവർത്തിക്കാത്തതുമായ ദശാംശ വികാസമുള്ള സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\sqrt{3}$' },
      { k: 'B', t: '$\\frac{22}{7}$' },
      { k: 'C', t: '$0.\\overline{123}$' },
      { k: 'D', t: '$\\frac{3}{16}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\sqrt{3}$' },
      { k: 'B', t: '$\\frac{22}{7}$' },
      { k: 'C', t: '$0.\\overline{123}$' },
      { k: 'D', t: '$\\frac{3}{16}$' }
    ],
    answer: 'A',
    solution_en: '$\\sqrt{3}$ is an irrational number, so its decimal form never ends and never repeats. $\\frac{22}{7}$ is a fraction (repeating), $0.\\overline{123}$ is repeating, and $\\frac{3}{16}$ is terminating.',
    solution_ml: '$\\sqrt{3}$ അഭിന്നക സംഖ്യയായതിനാൽ അതിന്റെ ദശാംശരൂപം അവസാനിക്കുകയോ ആവർത്തിക്കുകയോ ഇല്ല. $\\frac{22}{7}$, $0.\\overline{123}$ എന്നിവ ആവർത്തിക്കുന്നവയും, $\\frac{3}{16}$ അവസാനിക്കുന്നതുമാണ്.',
    tested_en: 'Identifying irrational numbers from decimal characteristics.',
    tested_ml: 'അഭിന്നക സംഖ്യകളെ തിരിച്ചറിയൽ.'
  },
  {
    id: 'obj.m9.2.8',
    concept: 'm9.2.4.non-repeating-decimals-and-approximations',
    sec: '9.2.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the approximation of $\\frac{2}{3}$ correct to two decimal places?',
    prompt_ml: '$\\frac{2}{3}$-ന്റെ രണ്ട് ദശാംശസ്ഥാനങ്ങളിലേക്കുള്ള ഏകദേശ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$0.67$' },
      { k: 'B', t: '$0.66$' },
      { k: 'C', t: '$0.60$' },
      { k: 'D', t: '$0.70$' }
    ],
    options_ml: [
      { k: 'A', t: '$0.67$' },
      { k: 'B', t: '$0.66$' },
      { k: 'C', t: '$0.60$' },
      { k: 'D', t: '$0.70$' }
    ],
    answer: 'A',
    solution_en: '$\\frac{2}{3} = 0.6666\\dots$. Rounding to two decimal places (since the 3rd digit is $6 \\ge 5$) yields $0.67$.',
    solution_ml: '$\\frac{2}{3} = 0.6666\\dots$. മൂന്നാമത്തെ അക്കം $6 \\ge 5$ ആയതിനാൽ രണ്ട് ദശാംശസ്ഥാനങ്ങളിലേക്ക് ഏകദേശനം ചെയ്യുമ്പോൾ $0.67$ ലഭിക്കുന്നു.',
    tested_en: 'Rounding off repeating decimal to two decimal places.',
    tested_ml: 'ദശാംശസ്ഥാനങ്ങളിലേക്ക് ഏകദേശനം ചെയ്യൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.2.1',
    sec: '9.2.1',
    concept: 'm9.2.1.fractions-and-terminating-decimals',
    title_en: 'Determining Terminating Decimal Form Without Actual Division',
    title_ml: 'ഹരിക്കാതെ തന്നെ അവസാനിക്കുന്ന ദശാംശരൂപം നിർണ്ണയിക്കൽ',
    prompt_en: '<p>Without actual long division, determine whether the fraction $\\frac{13}{80}$ can be expressed as a terminating decimal. If so, convert it into decimal form by transforming the denominator into a power of 10, and state the number of decimal digits.</p>',
    prompt_ml: '<p>നീളമുള്ള ഹരണക്രിയ ചെയ്യാതെ, $\\frac{13}{80}$ എന്ന ഭിന്നസംഖ്യയെ അവസാനിക്കുന്ന ദശാംശരൂപത്തിൽ എഴുതാൻ കഴിയുമോ എന്ന് പരിശോധിക്കുക. സാധിക്കുമെങ്കിൽ ഛേദത്തെ 10-ന്റെ കൃതിയാക്കി മാറ്റി ദശാംശരൂപം കണ്ടെത്തുക; ദശാംശസ്ഥാനങ്ങളുടെ എണ്ണം എത്രയെന്ന് വ്യക്തമാക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Check if fraction is in lowest terms}$$
$$\\text{gcd}(13, 80) = 1, \\text{ so } \\frac{13}{80} \\text{ is in lowest terms.}$$

$$\\text{Step 2: Prime factorize denominator}$$
$$80 = 2 \\times 2 \\times 2 \\times 2 \\times 5 = 2^4 \\times 5^1.$$
$$\\text{Since prime factors are exclusively } 2 \\text{ and } 5, \\text{ the fraction will result in a terminating decimal.}$$

$$\\text{Step 3: Transform denominator into a power of 10}$$
$$\\text{The maximum exponent between } 2^4 \\text{ and } 5^1 \\text{ is } 4.$$
$$\\text{Multiply numerator and denominator by } 5^3 = 125:$$
$$\\frac{13}{80} = \\frac{13 \\times 125}{2^4 \\times 5^1 \\times 5^3} = \\frac{1625}{2^4 \\times 5^4} = \\frac{1625}{10^4} = \\frac{1625}{10000} = \\mathbf{0.1625}.$$

$$\\text{Conclusion: It terminates with } \\mathbf{4} \\text{ decimal digits.}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ഭിന്നസംഖ്യ ലഘുരൂപത്തിലാണോ എന്ന് പരിശോധിക്കുന്നു}$$
$$13, 80 \\text{ എന്നിവ പരസ്പര അഭാജ്യങ്ങളാണ്.}$$

$$\\text{ഘട്ടം 2: ഛേദത്തെ അഭാജ്യ ഘടകങ്ങളാക്കുന്നു}$$
$$80 = 2^4 \\times 5^1.$$
$$80\\text{-ന്റെ അഭാജ്യഘടകങ്ങൾ 2, 5 എന്നിവ മാത്രമായതിനാൽ ഇത് അവസാനിക്കുന്ന ദശാംശമായിരിക്കും.}$$

$$\\text{ഘട്ടം 3: ഛേദത്തെ 10-ന്റെ കൃതിയാക്കുന്നു}$$
$$2^4, 5^1 \\text{ എന്നിവയിൽ വലിയ ഘാതം 4 ആണ്.}$$
$$\\text{അംശത്തെയും ഛേദത്തെയും } 5^3 = 125 \\text{ കൊണ്ട് ഗുണിക്കുന്നു:}$$
$$\\frac{13}{80} = \\frac{13 \\times 125}{80 \\times 125} = \\frac{1625}{10000} = \\mathbf{0.1625}.$$

$$\\text{ഉത്തരം: ഇത് } \\mathbf{4} \\text{ ദശാംശസ്ഥാനങ്ങളോടെ അവസാനിക്കുന്നു.}$$`
  },

  {
    id: 'w.m9.2.2',
    sec: '9.2.2',
    concept: 'm9.2.2.repeating-decimals',
    title_en: 'Long Division and Cycle Analysis of 1/7',
    title_ml: '1/7-ന്റെ ഹരണക്രിയയും ആവർത്തന ചക്ര വിശകലനവും',
    prompt_en: '<p>Perform the long division of 1 by 7. List the sequence of remainders that appear at each successive step. Prove that the division must cycle, and express $\\frac{1}{7}$ and $\\frac{2}{7}$ in repeating decimal notation.</p>',
    prompt_ml: '<p>1-നെ 7 കൊണ്ട് ഹരിക്കുക. ഓരോ ഘട്ടത്തിലും ലഭിക്കുന്ന ശിഷ്ടങ്ങളുടെ ശ്രേണി രേഖപ്പെടുത്തുക. ഹരണം എന്തുുകൊണ്ട് ആവർത്തിക്കുന്നു എന്ന് തെളിയിക്കുക. $\\frac{1}{7}, \\frac{2}{7}$ എന്നിവയുടെ ആവർത്തന ദശാംശരൂപങ്ങൾ എഴുതുക.</p>',
    solution_en: `$$\\text{Step 1: Long Division of } 1 \\div 7$$
$$\\text{Quotient starts } 0.$$
$$10 \\div 7 = 1, \\quad \\text{Remainder } = 3$$
$$30 \\div 7 = 4, \\quad \\text{Remainder } = 2$$
$$20 \\div 7 = 2, \\quad \\text{Remainder } = 6$$
$$60 \\div 7 = 8, \\quad \\text{Remainder } = 4$$
$$40 \\div 7 = 5, \\quad \\text{Remainder } = 5$$
$$50 \\div 7 = 7, \\quad \\text{Remainder } = 1 \\quad (\\text{Remainder 1 repeats!})$$

$$\\text{Step 2: Sequence of Remainders}$$
$$\\text{Remainders: } 3, 2, 6, 4, 5, 1, 3, 2, \\dots$$
$$\\text{Since only remainders } \\{1, 2, 3, 4, 5, 6\\} \\text{ are possible, the remainder 1 must repeat after 6 steps.}$$

$$\\text{Step 3: Repeating Decimal Form}$$
$$\\frac{1}{7} = \\mathbf{0.\\overline{142857}}$$
$$\\text{For } \\frac{2}{7}, \\text{ starting from remainder 2 gives the cyclic permutation:}$$
$$\\frac{2}{7} = \\mathbf{0.\\overline{285714}}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: } 1 \\div 7 \\text{ ഹരണക്രിയ}$$
$$10 \\div 7 = 1, \\quad \\text{ശിഷ്ടം } = 3$$
$$30 \\div 7 = 4, \\quad \\text{ശിഷ്ടം } = 2$$
$$20 \\div 7 = 2, \\quad \\text{ശിഷ്ടം } = 6$$
$$60 \\div 7 = 8, \\quad \\text{ശിഷ്ടം } = 4$$
$$40 \\div 7 = 5, \\quad \\text{ശിഷ്ടം } = 5$$
$$50 \\div 7 = 7, \\quad \\text{ശിഷ്ടം } = 1 \\quad (\\text{ആദ്യത്തെ ശിഷ്ടം 1 വീണ്ടും വന്നു!})$$

$$\\text{ഘട്ടം 2: ശിഷ്ടങ്ങളുടെ ക്രമം}$$
$$\\text{ശിഷ്ടങ്ങൾ: } 3, 2, 6, 4, 5, 1, 3, \\dots$$
$$7 \\text{ കൊണ്ട് ഹരിക്കുമ്പോൾ സാധ്യമായ 6 ശിഷ്ടങ്ങളും വന്നു കഴിഞ്ഞതിനാൽ ഹരണഫലം ആവർത്തിക്കുന്നു.}$$

$$\\text{ഘട്ടം 3: ആവർത്തന ദശാംശരൂപം}$$
$$\\frac{1}{7} = \\mathbf{0.\\overline{142857}}$$
$$\\frac{2}{7} = \\mathbf{0.\\overline{285714}}$$`
  },

  {
    id: 'w.m9.2.3',
    sec: '9.2.3',
    concept: 'm9.2.3.converting-repeating-decimals',
    title_en: 'Algebraic Conversion of Mixed Repeating Decimal 0.12333...',
    title_ml: '0.12333... എന്ന മിശ്ര ആവർത്തന ദശാംശത്തെ ഭിന്നസംഖ്യയാക്കൽ',
    prompt_en: '<p>Convert the mixed repeating decimal $x = 0.12\\bar{3} = 0.12333\\dots$ into a rational fraction $\\frac{p}{q}$ in lowest terms using the algebraic elimination method. Verify your answer by dividing.</p>',
    prompt_ml: '<p>$x = 0.12\\bar{3} = 0.12333\\dots$ എന്ന മിശ്ര ആവർത്തന ദശാംശത്തെ ബീജഗണിത രീതി ഉപയോഗിച്ച് ഏറ്റവും ലഘുവായ $\\frac{p}{q}$ എന്ന ഭിന്നസംഖ്യാ രൂപത്തിലേക്ക് മാറ്റുക. ഹരണക്രിയ വഴി ഉത്തരം പരിശോധിച്ച് ഉറപ്പുവരുത്തുക.</p>',
    solution_en: `$$\\text{Let } x = 0.12333\\dots$$

$$\\text{Step 1: Multiply by } 100 \\text{ to bring non-repeating digits before decimal point:}$$
$$100x = 12.3333\\dots \\quad \\text{--- (Equation 1)}$$

$$\\text{Step 2: Multiply by } 1000 \\text{ to shift one repeating period:}$$
$$1000x = 123.3333\\dots \\quad \\text{--- (Equation 2)}$$

$$\\text{Step 3: Subtract Equation 1 from Equation 2:}$$
$$1000x - 100x = 123.333\\dots - 12.333\\dots$$
$$900x = 123 - 12 = 111$$
$$x = \\frac{111}{900}$$

$$\\text{Step 4: Reduce to lowest terms (divide numerator and denominator by 3):}$$
$$x = \\frac{111 \\div 3}{900 \\div 3} = \\mathbf{\\frac{37}{300}}$$

$$\\text{Verification: } 37 \\div 300 = 0.123333\\dots$$`,
    solution_ml: `$$x = 0.12333\\dots \\text{ എന്നിരിക്കട്ടെ.}$$

$$\\text{ഘട്ടം 1: ആവർത്തിക്കാത്ത 2 അക്കങ്ങളെ മാറ്റാൻ 100 കൊണ്ട് ഗുണിക്കുന്നു:}$$
$$100x = 12.3333\\dots \\quad \\text{--- (സമവാക്യം 1)}$$

$$\\text{ഘട്ടം 2: ഒരു ആവർത്തന അക്കം കൂടി മാറ്റാൻ 1000 കൊണ്ട് ഗുണിക്കുന്നു:}$$
$$1000x = 123.3333\\dots \\quad \\text{--- (സമവാക്യം 2)}$$

$$\\text{ഘട്ടം 3: സമവാക്യം 2-ൽ നിന്ന് 1 കുറയ്ക്കുന്നു:}$$
$$1000x - 100x = 123 - 12$$
$$900x = 111$$
$$x = \\frac{111}{900}$$

$$\\text{ഘട്ടം 4: 3 കൊണ്ട് വെട്ടി ലഘൂകരിക്കുന്നു:}$$
$$x = \\frac{111 \\div 3}{900 \\div 3} = \\mathbf{\\frac{37}{300}}$$

$$\\text{പരിശോധന: } 37 \\div 300 = 0.12333\\dots$$`
  },

  {
    id: 'w.m9.2.4',
    sec: '9.2.4',
    concept: 'm9.2.4.non-repeating-decimals-and-approximations',
    title_en: 'Distinguishing Rational and Irrational Decimals with Bounding',
    title_ml: 'ഭിന്നക, അഭിന്നക ദശാംശങ്ങളെ വേർതിരിക്കലും പരിധികളും',
    prompt_en: '<p>Explain why $0.101001000100001\\dots$ is an irrational number. Then, find two rational numbers in decimal form that strictly bound this number from below and above to within an error of less than $0.001$.</p>',
    prompt_ml: '<p>$0.101001000100001\\dots$ ഒരു അഭിന്നക സംഖ്യയാണെന്ന് എന്തുകൊണ്ട് പറയാം എന്ന് വിശദീകരിക്കുക. $0.001$-ൽ കുറഞ്ഞ വ്യത്യാസത്തിൽ ഈ സംഖ്യയെ താഴെ നിന്നും മുകളിൽ നിന്നും പരിമിതപ്പെടുത്തുന്ന രണ്ട് ഭിന്നക സംഖ്യകൾ ദശാംശരൂപത്തിൽ കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{1. Proof of Irrationality:}$$
$$\\text{A decimal represents a rational number if and only if it is either terminating or eventually repeating.}$$
$$\\text{In } 0.101001000100001\\dots, \\text{ the number of zeros between successive ones increases by } 1 \\text{ at each stage:}$$
$$1 \\text{ zero, then } 2 \\text{ zeros, then } 3 \\text{ zeros, then } 4 \\text{ zeros, and so on.}$$
$$\\text{Because the sequence of digits never repeats in a fixed periodic cycle and never terminates,}$$
$$\\text{this number cannot be written as } \\frac{p}{q} \\text{ and is strictly } \\mathbf{\\text{irrational}}.$$

$$\\text{2. Bounding with Rational Numbers:}$$
$$\\text{Take the decimal truncated to 3 places:}$$
$$\\text{Lower Bound: } L = 0.101 = \\frac{101}{1000}$$
$$\\text{Upper Bound: } U = 0.102 = \\frac{102}{1000}$$
$$0.101 < 0.1010010001\\dots < 0.102$$
$$\\text{Error: } U - L = 0.001.$$
$$\\text{Both } 0.101 \\text{ and } 0.102 \\text{ are rational numbers bounding the given irrational number.}$$`,
    solution_ml: `$$\\text{1. അഭിന്നകമാണെന്നതിന്റെ തെളിവ്:}$$
$$\\text{ഒരു ദശാംശം ഭിന്നകമാകുന്നത് അത് അവസാനിക്കുകയോ നിശ്ചിത ക്രമത്തിൽ ആവർത്തിക്കുകയോ ചെയ്യുമ്പോൾ മാത്രമാണ്.}$$
$$0.101001000100001\\dots \\text{-ൽ ഓരോ 1-ന് ശേഷവുമുള്ള പൂജ്യങ്ങളുടെ എണ്ണം 1, 2, 3, 4 എന്നിങ്ങനെ ക്രമമായി കൂടിക്കൊണ്ടിരിക്കുന്നു.}$$
$$\\text{അതിനാൽ ഇതിൽ ഒരേ കൂട്ടം അക്കങ്ങൾ കൃത്യമായ ക്രമത്തിൽ ആവർത്തിക്കുന്നില്ല; ഇത് അവസാനിക്കുന്നുമില്ല.}$$
$$\\text{അതുകൊണ്ട് ഇതിനെ } \\frac{p}{q} \\text{ രൂപത്തിൽ എഴുതാൻ കഴിയില്ല; ഇത് ഒരു } \\mathbf{\\text{അഭിന്നക സംഖ്യയാണ്}}.$$

$$\\text{2. ഭിന്നക പരിധികൾ കണ്ടെത്തൽ:}$$
$$\\text{3 ദശാംശസ്ഥാനം വരെയുള്ള വില എടുക്കുന്നു:}$$
$$\\text{താഴത്തെ പരിധി: } 0.101 = \\frac{101}{1000}$$
$$\\text{മുകളിലെ പരിധി: } 0.102 = \\frac{102}{1000}$$
$$0.101 < 0.1010010001\\dots < 0.102$$
$$\\text{ഇവ രണ്ടും ഭിന്നക സംഖ്യകളാണ്; ഇവ തമ്മിലുള്ള വ്യത്യാസം } 0.001 \\text{ ആണ്.}$$`
  }
);
