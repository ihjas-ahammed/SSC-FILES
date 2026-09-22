/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 4 — Second Degree Equations (രണ്ടാംകൃതി സമവാക്യങ്ങൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.4.1 Square Problems & Direct Square Roots
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.4.1',
    concept: 'm10.4.1.square-problems-and-direct-roots',
    sec: '10.4.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'When each side of a square was increased by 2 metres, its area became 64 square metres. What was the length of a side of the original square?',
    prompt_ml: 'ഒരു സമചതുരത്തിന്റെ വശങ്ങളെല്ലാം 2 മീറ്റർ കൂട്ടി വലുതാക്കിയപ്പോൾ പരപ്പളവ് 64 ചതുരശ്രമീറ്ററായി. ആദ്യത്തെ സമചതുരത്തിന്റെ ഒരു വശത്തിന്റെ നീളം എത്രയായിരുന്നു?',
    options_en: [
      { k: 'A', t: '6 metres' },
      { k: 'B', t: '8 metres' },
      { k: 'C', t: '10 metres' },
      { k: 'D', t: '4 metres' }
    ],
    options_ml: [
      { k: 'A', t: '6 മീറ്റർ' },
      { k: 'B', t: '8 മീറ്റർ' },
      { k: 'C', t: '10 മീറ്റർ' },
      { k: 'D', t: '4 മീറ്റർ' }
    ],
    answer: 'A',
    solution_en: 'Let original side be $x$. New side is $x + 2$. Area $= (x + 2)^2 = 64$. Since side is positive, $x + 2 = \\sqrt{64} = 8 \\implies x = 8 - 2 = 6$ metres.',
    solution_ml: 'ആദ്യത്തെ വശം $x$ ആയാൽ, പുതിയ വശം $x + 2$. $(x + 2)^2 = 64 \\implies x + 2 = 8 \\implies x = 6$ മീറ്റർ.',
    tested_en: 'Direct square root method in a geometric setting.',
    tested_ml: 'ജ്യാമിതീയ അളവിലെ നേരിട്ടുള്ള വർഗ്ഗമൂല രീതി.'
  },
  {
    id: 'obj.m10.4.2',
    concept: 'm10.4.1.square-problems-and-direct-roots',
    sec: '10.4.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What are the solutions to the equation $(2x - 1)^2 = 49$?',
    prompt_ml: '$(2x - 1)^2 = 49$ എന്ന സമവാക്യത്തിന്റെ പരിഹാരങ്ങൾ ഏതെല്ലാം?',
    options_en: [
      { k: 'A', t: '$x = 4$ and $x = -3$' },
      { k: 'B', t: '$x = 4$ and $x = 3$' },
      { k: 'C', t: '$x = 8$ and $x = -6$' },
      { k: 'D', t: '$x = 7$ and $x = -7$' }
    ],
    options_ml: [
      { k: 'A', t: '$x = 4$ ഉം $x = -3$ ഉം' },
      { k: 'B', t: '$x = 4$ ഉം $x = 3$ ഉം' },
      { k: 'C', t: '$x = 8$ ഉം $x = -6$ ഉം' },
      { k: 'D', t: '$x = 7$ ഉം $x = -7$ ഉം' }
    ],
    answer: 'A',
    solution_en: '$(2x - 1)^2 = 49 \\implies 2x - 1 = \\pm 7$. If $2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. If $2x - 1 = -7 \\implies 2x = -6 \\implies x = -3$.',
    solution_ml: '$(2x - 1)^2 = 49 \\implies 2x - 1 = \\pm 7$. $2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. $2x - 1 = -7 \\implies 2x = -6 \\implies x = -3$.',
    tested_en: 'Finding both positive and negative roots of a squared binomial.',
    tested_ml: 'വർഗ്ഗമൂലത്തിലെ രണ്ട് മൂലങ്ങളും കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.2 Method of Completing the Square
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.4.3',
    concept: 'm10.4.2.completing-the-square',
    sec: '10.4.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What constant number should be added to $x^2 + 10x$ to make it a perfect square?',
    prompt_ml: '$x^2 + 10x$ എന്നതിനെ ഒരു പൂർണ്ണവർഗ്ഗമാക്കാൻ കൂട്ടേണ്ട സ്ഥിരസംഖ്യ ഏത്?',
    options_en: [
      { k: 'A', t: '25' },
      { k: 'B', t: '50' },
      { k: 'C', t: '20' },
      { k: 'D', t: '100' }
    ],
    options_ml: [
      { k: 'A', t: '25' },
      { k: 'B', t: '50' },
      { k: 'C', t: '20' },
      { k: 'D', t: '100' }
    ],
    answer: 'A',
    solution_en: 'Take half of the coefficient of $x$: $\\frac{10}{2} = 5$. Square it: $5^2 = 25$. Adding 25 gives $x^2 + 10x + 25 = (x + 5)^2$.',
    solution_ml: '$x$ ന്റെ ഗുണകത്തിന്റെ പകുതി $= \\frac{10}{2} = 5$. അതിന്റെ വർഗ്ഗം $= 5^2 = 25$. $x^2 + 10x + 25 = (x + 5)^2$.',
    tested_en: 'Finding the term to complete the square: (b/2)²',
    tested_ml: 'വർഗ്ഗം തികയ്ക്കാനുള്ള സംഖ്യ (b/2)² കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.4.4',
    concept: 'm10.4.2.completing-the-square',
    sec: '10.4.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Solving $x^2 - 6x = 7$ by completing the square gives which completed square form?',
    prompt_ml: 'വർഗ്ഗം തികയ്ക്കൽ രീതിയിൽ $x^2 - 6x = 7$ മാറ്റിയെഴുതിയാൽ ലഭിക്കുന്ന പൂർണ്ണവർഗ്ഗ രൂപം ഏത്?',
    options_en: [
      { k: 'A', t: '$(x - 3)^2 = 16$' },
      { k: 'B', t: '$(x - 6)^2 = 43$' },
      { k: 'C', t: '$(x - 3)^2 = 10$' },
      { k: 'D', t: '$(x + 3)^2 = 16$' }
    ],
    options_ml: [
      { k: 'A', t: '$(x - 3)^2 = 16$' },
      { k: 'B', t: '$(x - 6)^2 = 43$' },
      { k: 'C', t: '$(x - 3)^2 = 10$' },
      { k: 'D', t: '$(x + 3)^2 = 16$' }
    ],
    answer: 'A',
    solution_en: 'Add $(-6/2)^2 = (-3)^2 = 9$ to both sides: $x^2 - 6x + 9 = 7 + 9 \\implies (x - 3)^2 = 16$.',
    solution_ml: 'ഇരുവശത്തും $(-3)^2 = 9$ കൂട്ടുക: $x^2 - 6x + 9 = 7 + 9 \\implies (x - 3)^2 = 16$.',
    tested_en: 'Completing the square with negative linear term.',
    tested_ml: 'നെഗറ്റീവ് ഗുണകമുള്ള സമവാക്യത്തിൽ വർഗ്ഗം തികയ്ക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.3 Quadratic Formula & Nature of Roots
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.4.5',
    concept: 'm10.4.3.quadratic-formula-and-discriminant',
    sec: '10.4.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the discriminant of the quadratic equation $3x^2 - 5x + 2 = 0$?',
    prompt_ml: '$3x^2 - 5x + 2 = 0$ എന്ന രണ്ടാംകൃതി സമവാക്യത്തിന്റെ വിവേചകം എത്ര?',
    options_en: [
      { k: 'A', t: '1' },
      { k: 'B', t: '49' },
      { k: 'C', t: '-1' },
      { k: 'D', t: '25' }
    ],
    options_ml: [
      { k: 'A', t: '1' },
      { k: 'B', t: '49' },
      { k: 'C', t: '-1' },
      { k: 'D', t: '25' }
    ],
    answer: 'A',
    solution_en: 'Here $a = 3, b = -5, c = 2$. Discriminant $\\Delta = b^2 - 4ac = (-5)^2 - 4(3)(2) = 25 - 24 = 1$.',
    solution_ml: 'ഇവിടെ $a = 3, b = -5, c = 2$. വിവേചകം $\\Delta = b^2 - 4ac = (-5)^2 - 4(3)(2) = 25 - 24 = 1$.',
    tested_en: 'Evaluating the discriminant b² - 4ac.',
    tested_ml: 'വിവേചകം b² - 4ac ന്റെ വില കാണൽ.'
  },
  {
    id: 'obj.m10.4.6',
    concept: 'm10.4.3.quadratic-formula-and-discriminant',
    sec: '10.4.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'For what value of $k$ does the equation $x^2 - 6x + k = 0$ have equal real roots?',
    prompt_ml: '$k$ യുടെ ഏത് വിലയ്ക്കാണ് $x^2 - 6x + k = 0$ എന്ന സമവാക്യത്തിന് തുല്യ മൂലങ്ങൾ ഉണ്ടാകുന്നത്?',
    options_en: [
      { k: 'A', t: '9' },
      { k: 'B', t: '36' },
      { k: 'C', t: '6' },
      { k: 'D', t: '3' }
    ],
    options_ml: [
      { k: 'A', t: '9' },
      { k: 'B', t: '36' },
      { k: 'C', t: '6' },
      { k: 'D', t: '3' }
    ],
    answer: 'A',
    solution_en: 'For equal roots, $\\Delta = b^2 - 4ac = 0$. Here $(-6)^2 - 4(1)(k) = 0 \\implies 36 - 4k = 0 \\implies 4k = 36 \\implies k = 9$.',
    solution_ml: 'തുല്യ മൂലങ്ങൾക്ക് $\\Delta = b^2 - 4ac = 0$. $(-6)^2 - 4(1)(k) = 0 \\implies 36 - 4k = 0 \\implies k = 9$.',
    tested_en: 'Condition for equal roots: b² - 4ac = 0.',
    tested_ml: 'തുല്യ മൂലങ്ങൾക്കുള്ള വ്യവസ്ഥ: b² - 4ac = 0.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.4 Practical and Geometric Applications
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.4.7',
    concept: 'm10.4.4.applications-of-quadratic-equations',
    sec: '10.4.4',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'The perimeter of a rectangle is 28 cm and its area is 48 cm². What are the lengths of its sides?',
    prompt_ml: 'ഒരു ചതുരത്തിന്റെ ചുറ്റളവ് 28 സെ.മീറ്ററും പരപ്പളവ് 48 ചതുരശ്ര സെ.മീറ്ററുമാണ്. അതിന്റെ വശങ്ങളുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '8 cm and 6 cm' },
      { k: 'B', t: '12 cm and 4 cm' },
      { k: 'C', t: '16 cm and 3 cm' },
      { k: 'D', t: '10 cm and 4 cm' }
    ],
    options_ml: [
      { k: 'A', t: '8 cm ഉം 6 cm ഉം' },
      { k: 'B', t: '12 cm ഉം 4 cm ഉം' },
      { k: 'C', t: '16 cm ഉം 3 cm ഉം' },
      { k: 'D', t: '10 cm ഉം 4 cm ഉം' }
    ],
    answer: 'A',
    solution_en: 'Semi-perimeter $= 28 / 2 = 14$ cm. Let length be $x$, width is $14 - x$. Area: $x(14 - x) = 48 \\implies 14x - x^2 = 48 \\implies x^2 - 14x + 48 = 0$. Factoring: $(x - 8)(x - 6) = 0 \\implies x = 8$ or $6$. The sides are 8 cm and 6 cm.',
    solution_ml: 'ചുറ്റളവിന്റെ പകുതി $= 14$ സെ.മീ. വശങ്ങൾ $x, 14 - x$. $x(14 - x) = 48 \\implies x^2 - 14x + 48 = 0 \\implies (x - 8)(x - 6) = 0$. വശങ്ങൾ 8 cm, 6 cm.',
    tested_en: 'Perimeter and area of rectangle leading to quadratic equation.',
    tested_ml: 'ചതുരത്തിന്റെ ചുറ്റളവും പരപ്പളവും ഉപയോഗിച്ചുള്ള രണ്ടാംകൃതി സമവാക്യം.'
  },
  {
    id: 'obj.m10.4.8',
    concept: 'm10.4.4.applications-of-quadratic-equations',
    sec: '10.4.4',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'The sum of a positive number and its reciprocal is $\\frac{10}{3}$. What is the number?',
    prompt_ml: 'ഒരു പോസിറ്റീവ് സംഖ്യയും അതിന്റെ വ്യുൽക്രമവും തമ്മിലുള്ള തുക $\\frac{10}{3}$ ആണ്. ആ സംഖ്യ ഏത്?',
    options_en: [
      { k: 'A', t: '3' },
      { k: 'B', t: '2' },
      { k: 'C', t: '4' },
      { k: 'D', t: '5' }
    ],
    options_ml: [
      { k: 'A', t: '3' },
      { k: 'B', t: '2' },
      { k: 'C', t: '4' },
      { k: 'D', t: '5' }
    ],
    answer: 'A',
    solution_en: '$x + \\frac{1}{x} = \\frac{10}{3} \\implies \\frac{x^2 + 1}{x} = \\frac{10}{3} \\implies 3x^2 + 3 = 10x \\implies 3x^2 - 10x + 3 = 0$. Factoring: $(3x - 1)(x - 3) = 0 \\implies x = 3$ (or $1/3$). Among the options, 3 is the integer answer.',
    solution_ml: '$x + \\frac{1}{x} = \\frac{10}{3} \\implies 3x^2 - 10x + 3 = 0 \\implies (3x - 1)(x - 3) = 0 \\implies x = 3$.',
    tested_en: 'Formulating and solving quadratic from number reciprocal relationship.',
    tested_ml: 'സംഖ്യയും വ്യുൽക്രമവും ചേർന്ന രണ്ടാംകൃതി സമവാക്യം.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.4.1 Square Problems & Direct Square Roots
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.4.1',
    concept: 'm10.4.1.square-problems-and-direct-roots',
    sec: '10.4.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'There is a 2-metre wide concrete path around all sides of a square garden. The total area of the garden and the path together is 1225 square metres.\\n(a) What is the side length of the outer large square including the path?\\n(b) What is the side length of the inner garden alone?\\n(c) Find the area of the garden alone and the area of the path.',
    prompt_ml: 'സമചതുരാകൃതിയിലുള്ള ഒരു പൂന്തോട്ടത്തിന് ചുറ്റും 2 മീറ്റർ വീതിയിൽ ഒരു കോൺക്രീറ്റ് പാതയുണ്ട്. പൂന്തോട്ടവും പാതയും ചേർന്ന വലിയ സമചതുരത്തിന്റെ പരപ്പളവ് 1225 ചതുരശ്രമീറ്ററാണ്.\\n(a) പാത ഉൾപ്പെടെയുള്ള വലിയ സമചതുരത്തിന്റെ ഒരു വശത്തിന്റെ നീളം എത്ര?\\n(b) പൂന്തോട്ടത്തിന്റെ മാത്രം വശത്തിന്റെ നീളം എത്ര?\\n(c) പൂന്തോട്ടത്തിന്റെ പരപ്പളവും പാതയുടെ പരപ്പളവും കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Total area of outer square $= 1225\\text{ m}^2$. Outer side length $S = \\sqrt{1225} = 35$ metres.</li>\n  <li>The path of width 2 metres runs along both sides, so the inner side length $s = S - 2(2) = 35 - 4 = 31$ metres.</li>\n  <li>Area of the inner garden $= s^2 = 31^2 = 961\\text{ m}^2$.</li>\n  <li>Area of the path $= \\text{Total area} - \\text{Garden area} = 1225 - 961 = 264\\text{ m}^2$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 35 m; (b) 31 m; (c) Garden: 961 m², Path: 264 m²</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Outer side length: 1 mark</li>\n  <li>Inner garden side length: 1 mark</li>\n  <li>Garden area calculation: 1 mark</li>\n  <li>Path area calculation: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>പുറത്തെ സമചതുരത്തിന്റെ പരപ്പളവ് $= 1225\\text{ m}^2$. പുറത്തെ വശം $S = \\sqrt{1225} = 35$ മീറ്റർ.</li>\n  <li>ഇരുവശത്തും 2 മീറ്റർ വീതം പാതയുള്ളതിനാൽ ഉള്ളിലെ പൂന്തോട്ടത്തിന്റെ വശം $s = 35 - 2(2) = 35 - 4 = 31$ മീറ്റർ.</li>\n  <li>പൂന്തോട്ടത്തിന്റെ പരപ്പളവ് $= 31^2 = 961\\text{ m}^2$.</li>\n  <li>പാതയുടെ പരപ്പളവ് $= 1225 - 961 = 264\\text{ m}^2$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 35 മീറ്റർ; (b) 31 മീറ്റർ; (c) പൂന്തോട്ടം: 961 m², പാത: 264 m²</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>പുറത്തെ വശത്തിന്റെ നീളം: 1 മാർക്ക്</li>\n  <li>പൂന്തോട്ടത്തിന്റെ വശത്തിന്റെ നീളം: 1 മാർക്ക്</li>\n  <li>പൂന്തോട്ട പരപ്പളവ്: 1 മാർക്ക്</li>\n  <li>പാതയുടെ പരപ്പളവ്: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Total area of outer square $= 1225\\text{ m}^2$. Outer side length $S = \\sqrt{1225} = 35$ metres.',
      'The path of width 2 metres runs along both sides, so the inner side length $s = S - 2(2) = 35 - 4 = 31$ metres.',
      'Area of the inner garden $= s^2 = 31^2 = 961\\text{ m}^2$.',
      'Area of the path $= \\text{Total area} - \\text{Garden area} = 1225 - 961 = 264\\text{ m}^2$.'
    ],
    steps_ml: [
      'പുറത്തെ സമചതുരത്തിന്റെ പരപ്പളവ് $= 1225\\text{ m}^2$. പുറത്തെ വശം $S = \\sqrt{1225} = 35$ മീറ്റർ.',
      'ഇരുവശത്തും 2 മീറ്റർ വീതം പാതയുള്ളതിനാൽ ഉള്ളിലെ പൂന്തോട്ടത്തിന്റെ വശം $s = 35 - 2(2) = 35 - 4 = 31$ മീറ്റർ.',
      'പൂന്തോട്ടത്തിന്റെ പരപ്പളവ് $= 31^2 = 961\\text{ m}^2$.',
      'പാതയുടെ പരപ്പളവ് $= 1225 - 961 = 264\\text{ m}^2$.'
    ],
    rubric_en: [
      'Outer side length: 1 mark',
      'Inner garden side length: 1 mark',
      'Garden area calculation: 1 mark',
      'Path area calculation: 1 mark'
    ],
    rubric_ml: [
      'പുറത്തെ വശത്തിന്റെ നീളം: 1 മാർക്ക്',
      'പൂന്തോട്ടത്തിന്റെ വശത്തിന്റെ നീളം: 1 മാർക്ക്',
      'പൂന്തോട്ട പരപ്പളവ്: 1 മാർക്ക്',
      'പാതയുടെ പരപ്പളവ്: 1 മാർക്ക്'
    ],
    answer_en: '(a) 35 m; (b) 31 m; (c) Garden: 961 m², Path: 264 m²',
    answer_ml: '(a) 35 മീറ്റർ; (b) 31 മീറ്റർ; (c) പൂന്തോട്ടം: 961 m², പാത: 264 m²'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.2 Method of Completing the Square
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.4.2',
    concept: 'm10.4.2.completing-the-square',
    sec: '10.4.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Solve the equation $x^2 + 6x - 16 = 0$ using the method of completing the square.\\n(a) Write the equation in the form $x^2 + bx = c$.\\n(b) What number must be added to both sides to complete the square?\\n(c) Solve for both values of $x$.',
    prompt_ml: '$x^2 + 6x - 16 = 0$ എന്ന സമവാക്യം വർഗ്ഗം തികയ്ക്കൽ രീതി ഉപയോഗിച്ച് നിർദ്ധാരണം ചെയ്യുക.\\n(a) സമവാക്യത്തെ $x^2 + bx = c$ എന്ന രൂപത്തിൽ എഴുതുക.\\n(b) വർഗ്ഗം തികയ്ക്കാൻ ഇരുവശത്തും കൂട്ടേണ്ട സംഖ്യ ഏത്?\\n(c) $x$ ന്റെ രണ്ട് വിലകളും കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Rearrange the equation: $x^2 + 6x = 16$.</li>\n  <li>Coefficient of $x$ is 6. Half is 3, and its square is $3^2 = 9$. Add 9 to both sides: $x^2 + 6x + 9 = 16 + 9$.</li>\n  <li>Write LHS as a perfect square: $(x + 3)^2 = 25$.</li>\n  <li>Take square root on both sides: $x + 3 = \\pm 5$. Thus $x = -3 + 5 = 2$, or $x = -3 - 5 = -8$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) x² + 6x = 16; (b) 9; (c) x = 2 or x = -8</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Rearranging to x² + bx = c: 1 mark</li>\n  <li>Identifying and adding (b/2)²: 1 mark</li>\n  <li>Writing factored square form: 1 mark</li>\n  <li>Finding both roots correctly: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സമവാക്യം മാറ്റിയെഴുതുക: $x^2 + 6x = 16$.</li>\n  <li>$x$ ന്റെ ഗുണകം 6; പകുതി 3; അതിന്റെ വർഗ്ഗം $3^2 = 9$. ഇരുവശത്തും 9 കൂട്ടുക: $x^2 + 6x + 9 = 16 + 9$.</li>\n  <li>പൂർണ്ണവർഗ്ഗ രൂപത്തിൽ എഴുതുക: $(x + 3)^2 = 25$.</li>\n  <li>വർഗ്ഗമൂലമെടുക്കുക: $x + 3 = \\pm 5 \\implies x = 2$ അല്ലെങ്കിൽ $x = -8$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) x² + 6x = 16; (b) 9; (c) x = 2 അല്ലെങ്കിൽ x = -8</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>രൂപമാറ്റം വരുത്തൽ: 1 മാർക്ക്</li>\n  <li>കൂട്ടേണ്ട സംഖ്യ കണ്ടെത്തി ഇരുവശത്തും കൂട്ടൽ: 1 മാർക്ക്</li>\n  <li>പൂർണ്ണവർഗ്ഗ രൂപം: 1 മാർക്ക്</li>\n  <li>രണ്ട് വിലകളും ശരിയായി കണ്ടെത്തൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Rearrange the equation: $x^2 + 6x = 16$.',
      'Coefficient of $x$ is 6. Half is 3, and its square is $3^2 = 9$. Add 9 to both sides: $x^2 + 6x + 9 = 16 + 9$.',
      'Write LHS as a perfect square: $(x + 3)^2 = 25$.',
      'Take square root on both sides: $x + 3 = \\pm 5$. Thus $x = -3 + 5 = 2$, or $x = -3 - 5 = -8$.'
    ],
    steps_ml: [
      'സമവാക്യം മാറ്റിയെഴുതുക: $x^2 + 6x = 16$.',
      '$x$ ന്റെ ഗുണകം 6; പകുതി 3; അതിന്റെ വർഗ്ഗം $3^2 = 9$. ഇരുവശത്തും 9 കൂട്ടുക: $x^2 + 6x + 9 = 16 + 9$.',
      'പൂർണ്ണവർഗ്ഗ രൂപത്തിൽ എഴുതുക: $(x + 3)^2 = 25$.',
      'വർഗ്ഗമൂലമെടുക്കുക: $x + 3 = \\pm 5 \\implies x = 2$ അല്ലെങ്കിൽ $x = -8$.'
    ],
    rubric_en: [
      'Rearranging to x² + bx = c: 1 mark',
      'Identifying and adding (b/2)²: 1 mark',
      'Writing factored square form: 1 mark',
      'Finding both roots correctly: 1 mark'
    ],
    rubric_ml: [
      'രൂപമാറ്റം വരുത്തൽ: 1 മാർക്ക്',
      'കൂട്ടേണ്ട സംഖ്യ കണ്ടെത്തി ഇരുവശത്തും കൂട്ടൽ: 1 മാർക്ക്',
      'പൂർണ്ണവർഗ്ഗ രൂപം: 1 മാർക്ക്',
      'രണ്ട് വിലകളും ശരിയായി കണ്ടെത്തൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) x² + 6x = 16; (b) 9; (c) x = 2 or x = -8',
    answer_ml: '(a) x² + 6x = 16; (b) 9; (c) x = 2 അല്ലെങ്കിൽ x = -8'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.3 Quadratic Formula & Nature of Roots
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.4.3',
    concept: 'm10.4.3.quadratic-formula-and-discriminant',
    sec: '10.4.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the quadratic equation $2x^2 - 7x + 3 = 0$.\\n(a) Identify the coefficients $a, b, c$.\\n(b) Compute the discriminant $\\Delta = b^2 - 4ac$ and state the nature of the roots.\\n(c) Use the quadratic formula to find the roots.',
    prompt_ml: '$2x^2 - 7x + 3 = 0$ എന്ന രണ്ടാംകൃതി സമവാക്യം പരിഗണിക്കുക.\\n(a) $a, b, c$ എന്നിവയുടെ വിലകൾ എഴുതുക.\\n(b) വിവേചകം $\\Delta = b^2 - 4ac$ കണക്കാക്കി മൂലങ്ങളുടെ സ്വഭാവം വ്യക്തമാക്കുക.\\n(c) രണ്ടാംകൃതി സൂത്രവാക്യം ഉപയോഗിച്ച് സമവാക്യത്തിന്റെ മൂലങ്ങൾ കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Coefficients: $a = 2, b = -7, c = 3$.</li>\n  <li>Discriminant $\\Delta = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$. Since $\\Delta > 0$, the equation has two distinct real roots.</li>\n  <li>By the quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(-7) \\pm \\sqrt{25}}{2(2)} = \\frac{7 \\pm 5}{4}$.</li>\n  <li>$x_1 = \\frac{7 + 5}{4} = \\frac{12}{4} = 3$, and $x_2 = \\frac{7 - 5}{4} = \\frac{2}{4} = \\frac{1}{2}$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) a = 2, b = -7, c = 3; (b) Δ = 25 > 0, two distinct real roots; (c) x = 3, 1/2</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Identifying a, b, c: 1 mark</li>\n  <li>Calculating discriminant and stating nature: 1 mark</li>\n  <li>Applying quadratic formula: 1 mark</li>\n  <li>Final values of x: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ഗുണകങ്ങൾ: $a = 2, b = -7, c = 3$.</li>\n  <li>വിവേചകം $\\Delta = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$. $\\Delta > 0$ ആയതിനാൽ വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ ഉണ്ട്.</li>\n  <li>സൂത്രവാക്യപ്രകാരം: $x = \\frac{-(-7) \\pm \\sqrt{25}}{2(2)} = \\frac{7 \\pm 5}{4}$.</li>\n  <li>$x_1 = \\frac{12}{4} = 3$, $x_2 = \\frac{2}{4} = \\frac{1}{2}$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) a = 2, b = -7, c = 3; (b) Δ = 25 > 0, വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ; (c) x = 3, 1/2</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>a, b, c എഴുതൽ: 1 മാർക്ക്</li>\n  <li>വിവേചകവും മൂലങ്ങളുടെ സ്വഭാവവും: 1 മാർക്ക്</li>\n  <li>സൂത്രവാക്യം പ്രയോഗിക്കൽ: 1 മാർക്ക്</li>\n  <li>അന്തിമ മൂലങ്ങൾ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Coefficients: $a = 2, b = -7, c = 3$.',
      'Discriminant $\\Delta = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$. Since $\\Delta > 0$, the equation has two distinct real roots.',
      'By the quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(-7) \\pm \\sqrt{25}}{2(2)} = \\frac{7 \\pm 5}{4}$.',
      '$x_1 = \\frac{7 + 5}{4} = \\frac{12}{4} = 3$, and $x_2 = \\frac{7 - 5}{4} = \\frac{2}{4} = \\frac{1}{2}$.'
    ],
    steps_ml: [
      'ഗുണകങ്ങൾ: $a = 2, b = -7, c = 3$.',
      'വിവേചകം $\\Delta = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$. $\\Delta > 0$ ആയതിനാൽ വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ ഉണ്ട്.',
      'സൂത്രവാക്യപ്രകാരം: $x = \\frac{-(-7) \\pm \\sqrt{25}}{2(2)} = \\frac{7 \\pm 5}{4}$.',
      '$x_1 = \\frac{12}{4} = 3$, $x_2 = \\frac{2}{4} = \\frac{1}{2}$.'
    ],
    rubric_en: [
      'Identifying a, b, c: 1 mark',
      'Calculating discriminant and stating nature: 1 mark',
      'Applying quadratic formula: 1 mark',
      'Final values of x: 1 mark'
    ],
    rubric_ml: [
      'a, b, c എഴുതൽ: 1 മാർക്ക്',
      'വിവേചകവും മൂലങ്ങളുടെ സ്വഭാവവും: 1 മാർക്ക്',
      'സൂത്രവാക്യം പ്രയോഗിക്കൽ: 1 മാർക്ക്',
      'അന്തിമ മൂലങ്ങൾ: 1 മാർക്ക്'
    ],
    answer_en: '(a) a = 2, b = -7, c = 3; (b) Δ = 25 > 0, two distinct real roots; (c) x = 3, 1/2',
    answer_ml: '(a) a = 2, b = -7, c = 3; (b) Δ = 25 > 0, വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ; (c) x = 3, 1/2'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.4 Practical and Geometric Applications
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.4.4',
    concept: 'm10.4.4.applications-of-quadratic-equations',
    sec: '10.4.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'In a right-angled triangle, the hypotenuse is 13 cm, and one of the perpendicular sides is 7 cm longer than the other.\\n(a) If the shorter perpendicular side is $x$ cm, express the other perpendicular side in terms of $x$.\\n(b) Using the Pythagorean theorem, form a second degree equation in $x$.\\n(c) Find the lengths of the two perpendicular sides of the triangle.',
    prompt_ml: 'ഒരു മട്ടത്രികോണത്തിന്റെ കർണ്ണം 13 സെ.മീ ആണ്. ലംബവശങ്ങളിൽ ഒന്ന് മറ്റേതിനേക്കാൾ 7 സെ.മീ കൂടുതലാണ്.\\n(a) ചെറിയ ലംബവശം $x$ ആയാൽ, മറ്റേ ലംബവശത്തിന്റെ നീളം $x$ ൽ എഴുതുക.\\n(b) പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് $x$ ലുള്ള ഒരു രണ്ടാംകൃതി സമവാക്യം രൂപീകരിക്കുക.\\n(c) ത്രികോണത്തിന്റെ രണ്ട് ലംബവശങ്ങളുടെയും നീളം കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Let the shorter side be $x$ cm. The other perpendicular side is $(x + 7)$ cm.</li>\n  <li>By Pythagoras theorem: $x^2 + (x + 7)^2 = 13^2 \\implies x^2 + (x^2 + 14x + 49) = 169 \\implies 2x^2 + 14x + 49 - 169 = 0 \\implies 2x^2 + 14x - 120 = 0$.</li>\n  <li>Dividing by 2 gives: $x^2 + 7x - 60 = 0$. Factoring: $(x + 12)(x - 5) = 0$.</li>\n  <li>Since a side length cannot be negative, $x = 5$ cm. The other perpendicular side is $5 + 7 = 12$ cm.</li>\n</ol>\n<p><b>Final Answer:</b> (a) (x + 7) cm; (b) x² + 7x - 60 = 0; (c) 5 cm and 12 cm</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Expressing sides in terms of x: 1 mark</li>\n  <li>Forming correct quadratic equation: 1 mark</li>\n  <li>Solving the equation: 1 mark</li>\n  <li>Selecting valid positive length and giving both sides: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ചെറിയ വശം $x$ cm ആയാൽ, മറ്റേ ലംബവശം $(x + 7)$ cm.</li>\n  <li>പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം: $x^2 + (x + 7)^2 = 13^2 \\implies 2x^2 + 14x + 49 = 169 \\implies 2x^2 + 14x - 120 = 0$.</li>\n  <li>2 കൊണ്ട് ഹരിച്ചാൽ: $x^2 + 7x - 60 = 0 \\implies (x + 12)(x - 5) = 0$.</li>\n  <li>നീളം നെഗറ്റീവ് ആകാൻ കഴിയില്ല എന്നതിനാൽ $x = 5$ cm. മറ്റേ ലംബവശം $= 5 + 7 = 12$ cm.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) (x + 7) cm; (b) x² + 7x - 60 = 0; (c) 5 cm, 12 cm</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>വശങ്ങളെ x ൽ സൂചിപ്പിക്കൽ: 1 മാർക്ക്</li>\n  <li>രണ്ടാംകൃതി സമവാക്യം രൂപീകരിക്കൽ: 1 മാർക്ക്</li>\n  <li>സമവാക്യം നിർദ്ധാരണം ചെയ്യൽ: 1 മാർക്ക്</li>\n  <li>പോസിറ്റീവ് വില സ്വീകരിച്ച് വശങ്ങൾ എഴുതൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Let the shorter side be $x$ cm. The other perpendicular side is $(x + 7)$ cm.',
      'By Pythagoras theorem: $x^2 + (x + 7)^2 = 13^2 \\implies x^2 + (x^2 + 14x + 49) = 169 \\implies 2x^2 + 14x + 49 - 169 = 0 \\implies 2x^2 + 14x - 120 = 0$.',
      'Dividing by 2 gives: $x^2 + 7x - 60 = 0$. Factoring: $(x + 12)(x - 5) = 0$.',
      'Since a side length cannot be negative, $x = 5$ cm. The other perpendicular side is $5 + 7 = 12$ cm.'
    ],
    steps_ml: [
      'ചെറിയ വശം $x$ cm ആയാൽ, മറ്റേ ലംബവശം $(x + 7)$ cm.',
      'പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം: $x^2 + (x + 7)^2 = 13^2 \\implies 2x^2 + 14x + 49 = 169 \\implies 2x^2 + 14x - 120 = 0$.',
      '2 കൊണ്ട് ഹരിച്ചാൽ: $x^2 + 7x - 60 = 0 \\implies (x + 12)(x - 5) = 0$.',
      'നീളം നെഗറ്റീവ് ആകാൻ കഴിയില്ല എന്നതിനാൽ $x = 5$ cm. മറ്റേ ലംബവശം $= 5 + 7 = 12$ cm.'
    ],
    rubric_en: [
      'Expressing sides in terms of x: 1 mark',
      'Forming correct quadratic equation: 1 mark',
      'Solving the equation: 1 mark',
      'Selecting valid positive length and giving both sides: 1 mark'
    ],
    rubric_ml: [
      'വശങ്ങളെ x ൽ സൂചിപ്പിക്കൽ: 1 മാർക്ക്',
      'രണ്ടാംകൃതി സമവാക്യം രൂപീകരിക്കൽ: 1 മാർക്ക്',
      'സമവാക്യം നിർദ്ധാരണം ചെയ്യൽ: 1 മാർക്ക്',
      'പോസിറ്റീവ് വില സ്വീകരിച്ച് വശങ്ങൾ എഴുതൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) (x + 7) cm; (b) x² + 7x - 60 = 0; (c) 5 cm and 12 cm',
    answer_ml: '(a) (x + 7) cm; (b) x² + 7x - 60 = 0; (c) 5 cm, 12 cm'
  }
);
