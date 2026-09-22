/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 3 — Mathematics of Chance (സാധ്യതകളുടെ ഗണിതം)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.3.1 Probability as a Measure of Chance
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.3.1',
    concept: 'm10.3.1.probability-as-measure-of-chance',
    sec: '10.3.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A bag contains 6 black beads and 4 white beads. A bead is drawn at random without looking. What is the probability that the bead drawn is white?',
    prompt_ml: 'ഒരു സഞ്ചിയിൽ 6 കറുത്ത മുത്തുകളും 4 വെളുത്ത മുത്തുകളുമുണ്ട്. നോക്കാതെ ഒരു മുത്തെടുത്താൽ അത് വെളുത്തതാകാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{2}{5}$' },
      { k: 'B', t: '$\\frac{3}{5}$' },
      { k: 'C', t: '$\\frac{1}{4}$' },
      { k: 'D', t: '$\\frac{4}{6}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{2}{5}$' },
      { k: 'B', t: '$\\frac{3}{5}$' },
      { k: 'C', t: '$\\frac{1}{4}$' },
      { k: 'D', t: '$\\frac{4}{6}$' }
    ],
    answer: 'A',
    solution_en: 'Total beads $= 6 + 4 = 10$. Favourable white beads $= 4$. Probability $P(\\text{white}) = \\frac{4}{10} = \\frac{2}{5}$.',
    solution_ml: 'ആകെ മുത്തുകൾ $= 6 + 4 = 10$. വെളുത്ത മുത്തുകൾ $= 4$. സാധ്യത $= \\frac{4}{10} = \\frac{2}{5}$.',
    tested_en: 'Definition of probability as favourable outcomes divided by total outcomes.',
    tested_ml: 'സാധ്യത = അനുകൂല ഫലങ്ങൾ / ആകെ ഫലങ്ങൾ എന്ന നിർവ്വചനം.'
  },
  {
    id: 'obj.m10.3.2',
    concept: 'm10.3.1.probability-as-measure-of-chance',
    sec: '10.3.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following numbers CANNOT be the probability of an event?',
    prompt_ml: 'താഴെ കൊടുത്തിരിക്കുന്നവയിൽ ഒരു സംഭവത്തിന്റെ സാധ്യതയാകാൻ കഴിയാത്ത സംഖ്യ ഏത്?',
    options_en: [
      { k: 'A', t: '$\\frac{2}{3}$' },
      { k: 'B', t: '$-0.5$' },
      { k: 'C', t: '$15\\%$' },
      { k: 'D', t: '$0.8$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{2}{3}$' },
      { k: 'B', t: '$-0.5$' },
      { k: 'C', t: '$15\\%$' },
      { k: 'D', t: '$0.8$' }
    ],
    answer: 'B',
    solution_en: 'Probability $P(E)$ of any event satisfies $0 \\le P(E) \\le 1$. Probability cannot be negative, so $-0.5$ cannot be a probability.',
    solution_ml: 'ഏതൊരു സംഭവത്തിന്റെയും സാധ്യത $0 \\le P(E) \\le 1$ ആയിരിക്കണം. സാധ്യത നെഗറ്റീവ് ആകാൻ കഴിയില്ല, അതിനാൽ $-0.5$ സാധ്യതയാകില്ല.',
    tested_en: 'Bounds of probability: must lie within [0, 1].',
    tested_ml: 'സാധ്യതയുടെ പരിധി: 0 നും 1 നും ഇടയിൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.2 Geometric Probability
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.3.3',
    concept: 'm10.3.2.geometric-probability',
    sec: '10.3.2',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'A circle of radius $r$ is drawn inside a square of side $2r$. If a dot is marked inside the square at random, what is the probability that it falls inside the circle?',
    prompt_ml: '$2r$ വശമുള്ള ഒരു സമചതുരത്തിനുള്ളിൽ $r$ ആരമുള്ള ഒരു വൃത്തം വരച്ചിരിക്കുന്നു. സമചതുരത്തിനുള്ളിൽ കണ്ണടച്ച് ഒരു ബിന്ദുവിട്ടാൽ അത് വൃത്തത്തിനുള്ളിലാകാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{\\pi}{2}$' },
      { k: 'B', t: '$\\frac{\\pi}{4}$' },
      { k: 'C', t: '$\\frac{1}{\\pi}$' },
      { k: 'D', t: '$\\frac{2}{\\pi}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{\\pi}{2}$' },
      { k: 'B', t: '$\\frac{\\pi}{4}$' },
      { k: 'C', t: '$\\frac{1}{\\pi}$' },
      { k: 'D', t: '$\\frac{2}{\\pi}$' }
    ],
    answer: 'B',
    solution_en: 'Area of circle $= \\pi r^2$. Area of square $= (2r)^2 = 4r^2$. Probability $= \\frac{\\pi r^2}{4r^2} = \\frac{\\pi}{4}$.',
    solution_ml: 'വൃത്തത്തിന്റെ പരപ്പളവ് $= \\pi r^2$. സമചതുരത്തിന്റെ പരപ്പളവ് $= (2r)^2 = 4r^2$. സാധ്യത $= \\frac{\\pi r^2}{4r^2} = \\frac{\\pi}{4}$.',
    tested_en: 'Geometric probability as ratio of areas.',
    tested_ml: 'പരപ്പളവുകളുടെ അനുപാതമായി ജ്യാമിതീയ സാധ്യത കാണൽ.'
  },
  {
    id: 'obj.m10.3.4',
    concept: 'm10.3.2.geometric-probability',
    sec: '10.3.2',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'The midpoints of the sides of an equilateral triangle are joined to form a smaller central triangle which is shaded. If a point is put randomly inside the large triangle, what is the probability of it landing in the shaded region?',
    prompt_ml: 'ഒരു സമഭുജ ത്രികോണത്തിന്റെ വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ച് നടുവിൽ ഉണ്ടാക്കിയ ചെറിയ ത്രികോണത്തിന് നിറം കൊടുത്തിരിക്കുന്നു. വലിയ ത്രികോണത്തിനുള്ളിലിടുന്ന ബിന്ദു നിറം കൊടുത്ത ഭാഗത്താകാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{1}{2}$' },
      { k: 'B', t: '$\\frac{1}{3}$' },
      { k: 'C', t: '$\\frac{1}{4}$' },
      { k: 'D', t: '$\\frac{3}{4}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{1}{2}$' },
      { k: 'B', t: '$\\frac{1}{3}$' },
      { k: 'C', t: '$\\frac{1}{4}$' },
      { k: 'D', t: '$\\frac{3}{4}$' }
    ],
    answer: 'C',
    solution_en: 'Joining the midpoints of the three sides divides any triangle into 4 smaller congruent triangles of equal area. Thus the shaded region is $\\frac{1}{4}$ of the total area, so $P = \\frac{1}{4}$.',
    solution_ml: 'ഒരു ത്രികോണത്തിന്റെ വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ അത് തുല്യ പരപ്പളവുള്ള 4 ചെറിയ ത്രികോണങ്ങളായി വിഭജിക്കപ്പെടുന്നു. അതിനാൽ സാധ്യത $= \\frac{1}{4}$.',
    tested_en: 'Subdivision of triangles by midpoints and area ratio.',
    tested_ml: 'ത്രികോണത്തിന്റെ മധ്യബിന്ദുക്കൾ വഴിയുള്ള വിഭജനവും പരപ്പളവ് അനുപാതവും.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.3 Pairs of Events & Systematic Tabulation
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.3.5',
    concept: 'm10.3.3.pairs-of-events-and-product-rule',
    sec: '10.3.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Two fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on top is 7?',
    prompt_ml: 'ആറ് വശങ്ങളുള്ള രണ്ട് ഡൈസുകൾ ഒരേസമയം ഉരുട്ടുന്നു. മുകളിലെത്തുന്ന സംഖ്യകളുടെ തുക 7 ആകാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{1}{6}$' },
      { k: 'B', t: '$\\frac{7}{36}$' },
      { k: 'C', t: '$\\frac{5}{36}$' },
      { k: 'D', t: '$\\frac{1}{12}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{1}{6}$' },
      { k: 'B', t: '$\\frac{7}{36}$' },
      { k: 'C', t: '$\\frac{5}{36}$' },
      { k: 'D', t: '$\\frac{1}{12}$' }
    ],
    answer: 'A',
    solution_en: 'Total outcomes $= 6 \\times 6 = 36$. Pairs with sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — total 6 pairs. Probability $= \\frac{6}{36} = \\frac{1}{6}$.',
    solution_ml: 'ആകെ ഫലങ്ങൾ $= 6 \\times 6 = 36$. തുക 7 ആകുന്ന ജോഡികൾ: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — ആകെ 6 ജോഡികൾ. സാധ്യത $= \\frac{6}{36} = \\frac{1}{6}$.',
    tested_en: 'Sample space of two dice and counting favourable pairs.',
    tested_ml: 'രണ്ട് ഡൈസുകളുടെ സാമ്പിൾ സ്പേസും തുക 7 ആകുന്ന ജോഡികളും.'
  },
  {
    id: 'obj.m10.3.6',
    concept: 'm10.3.3.pairs-of-events-and-product-rule',
    sec: '10.3.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Box A contains cards numbered 1, 2, 3. Box B contains cards numbered 1, 2, 3, 4. One card is taken from each box. What is the probability that both cards show odd numbers?',
    prompt_ml: 'പെട്ടി A യിൽ 1, 2, 3 എന്ന് എഴുതിയ കാർഡുകളും, പെട്ടി B യിൽ 1, 2, 3, 4 എന്ന് എഴുതിയ കാർഡുകളുമുണ്ട്. ഓരോന്നിൽ നിന്നും ഓരോ കാർഡെടുത്താൽ രണ്ടും ഒറ്റസംഖ്യകളാകാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{1}{3}$' },
      { k: 'B', t: '$\\frac{1}{2}$' },
      { k: 'C', t: '$\\frac{1}{4}$' },
      { k: 'D', t: '$\\frac{5}{12}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{1}{3}$' },
      { k: 'B', t: '$\\frac{1}{2}$' },
      { k: 'C', t: '$\\frac{1}{4}$' },
      { k: 'D', t: '$\\frac{5}{12}$' }
    ],
    answer: 'A',
    solution_en: 'Total pairs $= 3 \\times 4 = 12$. Odd cards in A: {1, 3} (2). Odd cards in B: {1, 3} (2). Favourable pairs $= 2 \\times 2 = 4$. Probability $= \\frac{4}{12} = \\frac{1}{3}$.',
    solution_ml: 'ആകെ ജോഡികൾ $= 3 \\times 4 = 12$. A യിലെ ഒറ്റസംഖ്യകൾ: 1, 3 (2 എണ്ണം). B യിലെ ഒറ്റസംഖ്യകൾ: 1, 3 (2 എണ്ണം). അനുകൂല ജോഡികൾ $= 2 \\times 2 = 4$. സാധ്യത $= \\frac{4}{12} = \\frac{1}{3}$.',
    tested_en: 'Product rule for independent selections from two boxes.',
    tested_ml: 'രണ്ട് പെട്ടികളിൽ നിന്നുള്ള തിരഞ്ഞെടുപ്പിലെ ഗുണന നിയമം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.4 Complementary Events & Practical Probability
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.3.7',
    concept: 'm10.3.4.complementary-events-and-applications',
    sec: '10.3.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If the probability of winning a game is 0.38, what is the probability of losing it?',
    prompt_ml: 'ഒരു കളി ജയിക്കാനുള്ള സാധ്യത 0.38 ആണെങ്കിൽ തോൽക്കാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '0.62' },
      { k: 'B', t: '0.72' },
      { k: 'C', t: '0.52' },
      { k: 'D', t: '0.38' }
    ],
    options_ml: [
      { k: 'A', t: '0.62' },
      { k: 'B', t: '0.72' },
      { k: 'C', t: '0.52' },
      { k: 'D', t: '0.38' }
    ],
    answer: 'A',
    solution_en: '$P(\\text{losing}) = 1 - P(\\text{winning}) = 1 - 0.38 = 0.62$.',
    solution_ml: 'തോൽക്കാനുള്ള സാധ്യത $= 1 - 0.38 = 0.62$.',
    tested_en: 'Complementary probability: P = 1 - P(E).',
    tested_ml: 'പൂരക സാധ്യത: 1 ൽ നിന്ന് കുറയ്ക്കൽ.'
  },
  {
    id: 'obj.m10.3.8',
    concept: 'm10.3.4.complementary-events-and-applications',
    sec: '10.3.4',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'A card is drawn from a box containing cards numbered 10 to 99. What is the probability that the number on the card is a multiple of 10?',
    prompt_ml: '10 മുതൽ 99 വരെയുള്ള സംഖ്യകൾ എഴുതിയ കാർഡുകൾ ഒരു പെട്ടിയിലുണ്ട്. ഒരു കാർഡെടുത്താൽ അതിലെ സംഖ്യ 10 ന്റെ ഗുണിതമാകാനുള്ള സാധ്യത എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{1}{10}$' },
      { k: 'B', t: '$\\frac{9}{89}$' },
      { k: 'C', t: '$\\frac{1}{9}$' },
      { k: 'D', t: '$\\frac{1}{11}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{1}{10}$' },
      { k: 'B', t: '$\\frac{9}{89}$' },
      { k: 'C', t: '$\\frac{1}{9}$' },
      { k: 'D', t: '$\\frac{1}{11}$' }
    ],
    answer: 'A',
    solution_en: 'Total two-digit numbers from 10 to 99 inclusive $= 99 - 10 + 1 = 90$. Multiples of 10 are: 10, 20, 30, 40, 50, 60, 70, 80, 90 (9 numbers). Probability $= \\frac{9}{90} = \\frac{1}{10}$.',
    solution_ml: '10 മുതൽ 99 വരെയുള്ള ആകെ സംഖ്യകൾ $= 99 - 10 + 1 = 90$. 10 ന്റെ ഗുണിതങ്ങൾ: 10, 20, 30, 40, 50, 60, 70, 80, 90 (9 എണ്ണം). സാധ്യത $= \\frac{9}{90} = \\frac{1}{10}$.',
    tested_en: 'Counting numbers in a closed range and finding probability.',
    tested_ml: 'രണ്ടക്ക സംഖ്യകളിലെ ഗുണിത സാധ്യത.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.3.1 Probability as a Measure of Chance
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.3.1',
    concept: 'm10.3.1.probability-as-measure-of-chance',
    sec: '10.3.1',
    type: 'exercise',
    marks: 4,
    time: 200,
    prompt_en: 'A box contains 8 red beads, 7 green beads, and 5 blue beads. One bead is taken out at random.\\n(a) What is the total number of beads in the box?\\n(b) What is the probability of getting a green bead?\\n(c) What is the probability of getting a bead that is NOT red?',
    prompt_ml: 'ഒരു പെട്ടിയിൽ 8 ചുവന്ന മുത്തുകളും 7 പച്ച മുത്തുകളും 5 നീല മുത്തുകളുമുണ്ട്. നോക്കാതെ ഒരു മുത്തെടുക്കുന്നു.\\n(a) പെട്ടിയിലെ ആകെ മുത്തുകളുടെ എണ്ണം എത്ര?\\n(b) പച്ച മുത്ത് കിട്ടാനുള്ള സാധ്യത എത്ര?\\n(c) ചുവപ്പല്ലാത്ത മുത്ത് കിട്ടാനുള്ള സാധ്യത എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Total beads $N = 8 + 7 + 5 = 20$.</li>\n  <li>Number of green beads $= 7$. Probability $P(\\text{green}) = \\frac{7}{20}$.</li>\n  <li>Number of non-red beads $= 7 + 5 = 12$ (or $20 - 8 = 12$).</li>\n  <li>Probability of non-red bead $P(\\text{not red}) = \\frac{12}{20} = \\frac{3}{5}$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 20 beads; (b) 7/20; (c) 3/5</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Total count calculation: 1 mark</li>\n  <li>Probability of green bead: 1 mark</li>\n  <li>Non-red count identification: 1 mark</li>\n  <li>Probability of non-red bead in lowest terms: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ആകെ മുത്തുകൾ $N = 8 + 7 + 5 = 20$.</li>\n  <li>പച്ച മുത്തുകളുടെ എണ്ണം $= 7$. പച്ച കിട്ടാനുള്ള സാധ്യത $P(\\text{പച്ച}) = \\frac{7}{20}$.</li>\n  <li>ചുവപ്പല്ലാത്ത മുത്തുകളുടെ എണ്ണം $= 7 + 5 = 12$ (അല്ലെങ്കിൽ $20 - 8 = 12$).</li>\n  <li>ചുവപ്പല്ലാത്ത മുത്ത് കിട്ടാനുള്ള സാധ്യത $P(\\text{ചുവപ്പല്ലാത്തത്}) = \\frac{12}{20} = \\frac{3}{5}$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 20 മുത്തുകൾ; (b) 7/20; (c) 3/5</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ആകെ എണ്ണം കണ്ടെത്തൽ: 1 മാർക്ക്</li>\n  <li>പച്ച മുത്തിന്റെ സാധ്യത: 1 മാർക്ക്</li>\n  <li>ചുവപ്പല്ലാത്തവയുടെ എണ്ണം: 1 മാർക്ക്</li>\n  <li>ചുവപ്പല്ലാത്തതിന്റെ സാധ്യത ലഘൂകരിച്ച് എഴുതൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Total beads $N = 8 + 7 + 5 = 20$.',
      'Number of green beads $= 7$. Probability $P(\\text{green}) = \\frac{7}{20}$.',
      'Number of non-red beads $= 7 + 5 = 12$ (or $20 - 8 = 12$).',
      'Probability of non-red bead $P(\\text{not red}) = \\frac{12}{20} = \\frac{3}{5}$.'
    ],
    steps_ml: [
      'ആകെ മുത്തുകൾ $N = 8 + 7 + 5 = 20$.',
      'പച്ച മുത്തുകളുടെ എണ്ണം $= 7$. പച്ച കിട്ടാനുള്ള സാധ്യത $P(\\text{പച്ച}) = \\frac{7}{20}$.',
      'ചുവപ്പല്ലാത്ത മുത്തുകളുടെ എണ്ണം $= 7 + 5 = 12$ (അല്ലെങ്കിൽ $20 - 8 = 12$).',
      'ചുവപ്പല്ലാത്ത മുത്ത് കിട്ടാനുള്ള സാധ്യത $P(\\text{ചുവപ്പല്ലാത്തത്}) = \\frac{12}{20} = \\frac{3}{5}$.'
    ],
    rubric_en: [
      'Total count calculation: 1 mark',
      'Probability of green bead: 1 mark',
      'Non-red count identification: 1 mark',
      'Probability of non-red bead in lowest terms: 1 mark'
    ],
    rubric_ml: [
      'ആകെ എണ്ണം കണ്ടെത്തൽ: 1 മാർക്ക്',
      'പച്ച മുത്തിന്റെ സാധ്യത: 1 മാർക്ക്',
      'ചുവപ്പല്ലാത്തവയുടെ എണ്ണം: 1 മാർക്ക്',
      'ചുവപ്പല്ലാത്തതിന്റെ സാധ്യത ലഘൂകരിച്ച് എഴുതൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) 20 beads; (b) 7/20; (c) 3/5',
    answer_ml: '(a) 20 മുത്തുകൾ; (b) 7/20; (c) 3/5'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.2 Geometric Probability
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.3.2',
    concept: 'm10.3.2.geometric-probability',
    sec: '10.3.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A square of side 10 cm has a circle inscribed in it. A dot is marked inside the square without looking.\\n(a) Find the area of the square.\\n(b) Find the radius and area of the inscribed circle.\\n(c) Find the probability that the dot falls outside the circle (take $\\pi \\approx 3.14$).',
    prompt_ml: '10 സെ.മീ വശമുള്ള ഒരു സമചതുരത്തിൽ അന്തർവൃത്തം വരച്ചിരിക്കുന്നു. സമചതുരത്തിനുള്ളിൽ നോക്കാതെ ഒരു കുത്തിടുന്നു.\\n(a) സമചതുരത്തിന്റെ പരപ്പളവ് കാണുക.\\n(b) അന്തർവൃത്തത്തിന്റെ ആരവും പരപ്പളവും കാണുക.\\n(c) കുത്ത് വൃത്തത്തിന് പുറത്താകാനുള്ള സാധ്യത കാണുക ($\\pi \\approx 3.14$ എന്ന് എടുക്കുക).',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Area of the square $= \\text{side}^2 = 10^2 = 100\\text{ cm}^2$.</li>\n  <li>Diameter of the circle equals the side of the square $= 10\\text{ cm}$, so radius $r = 5\\text{ cm}$. Area of the circle $= \\pi r^2 = 3.14 \\times 5^2 = 3.14 \\times 25 = 78.5\\text{ cm}^2$.</li>\n  <li>Area outside the circle $= \\text{Area of square} - \\text{Area of circle} = 100 - 78.5 = 21.5\\text{ cm}^2$.</li>\n  <li>Probability of dot outside circle $= \\frac{21.5}{100} = 0.215 = \\frac{43}{200}$ (or in terms of $\\pi$: $\\frac{4 - \\pi}{4}$).</li>\n</ol>\n<p><b>Final Answer:</b> (a) 100 cm²; (b) r = 5 cm, Area = 78.5 cm²; (c) 0.215 (or (4 - π)/4)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Area of square: 1 mark</li>\n  <li>Radius and area of circle: 1 mark</li>\n  <li>Difference of areas: 1 mark</li>\n  <li>Final probability: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സമചതുരത്തിന്റെ പരപ്പളവ് $= \\text{വശം}^2 = 10^2 = 100\\text{ cm}^2$.</li>\n  <li>വൃത്തത്തിന്റെ വ്യാസം சமചതുരത്തിന്റെ വശമായ 10 cm ആണ്. അതിനാൽ ആരം $r = 5\\text{ cm}$. വൃത്ത പരപ്പളവ് $= \\pi r^2 = 3.14 \\times 25 = 78.5\\text{ cm}^2$.</li>\n  <li>വൃത്തത്തിന് പുറത്തുള്ള പരപ്പളവ് $= 100 - 78.5 = 21.5\\text{ cm}^2$.</li>\n  <li>വൃത്തത്തിന് പുറത്താകാനുള്ള സാധ്യത $= \\frac{21.5}{100} = 0.215$ (അല്ലെങ്കിൽ $\\frac{4 - \\pi}{4}$).</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 100 cm²; (b) r = 5 cm, പരപ്പളവ് = 78.5 cm²; (c) 0.215 (അല്ലെങ്കിൽ (4 - π)/4)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സമചതുര പരപ്പളവ്: 1 മാർക്ക്</li>\n  <li>വൃത്തത്തിന്റെ ആരവും പരപ്പളവും: 1 മാർക്ക്</li>\n  <li>പുറത്തുള്ള പരപ്പളവ് കാണൽ: 1 മാർക്ക്</li>\n  <li>അന്തിമ സാധ്യത: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Area of the square $= \\text{side}^2 = 10^2 = 100\\text{ cm}^2$.',
      'Diameter of the circle equals the side of the square $= 10\\text{ cm}$, so radius $r = 5\\text{ cm}$. Area of the circle $= \\pi r^2 = 3.14 \\times 5^2 = 3.14 \\times 25 = 78.5\\text{ cm}^2$.',
      'Area outside the circle $= \\text{Area of square} - \\text{Area of circle} = 100 - 78.5 = 21.5\\text{ cm}^2$.',
      'Probability of dot outside circle $= \\frac{21.5}{100} = 0.215 = \\frac{43}{200}$ (or in terms of $\\pi$: $\\frac{4 - \\pi}{4}$).'
    ],
    steps_ml: [
      'സമചതുരത്തിന്റെ പരപ്പളവ് $= \\text{വശം}^2 = 10^2 = 100\\text{ cm}^2$.',
      'വൃത്തത്തിന്റെ വ്യാസം சமചതുരത്തിന്റെ വശമായ 10 cm ആണ്. അതിനാൽ ആരം $r = 5\\text{ cm}$. വൃത്ത പരപ്പളവ് $= \\pi r^2 = 3.14 \\times 25 = 78.5\\text{ cm}^2$.',
      'വൃത്തത്തിന് പുറത്തുള്ള പരപ്പളവ് $= 100 - 78.5 = 21.5\\text{ cm}^2$.',
      'വൃത്തത്തിന് പുറത്താകാനുള്ള സാധ്യത $= \\frac{21.5}{100} = 0.215$ (അല്ലെങ്കിൽ $\\frac{4 - \\pi}{4}$).'
    ],
    rubric_en: [
      'Area of square: 1 mark',
      'Radius and area of circle: 1 mark',
      'Difference of areas: 1 mark',
      'Final probability: 1 mark'
    ],
    rubric_ml: [
      'സമചതുര പരപ്പളവ്: 1 മാർക്ക്',
      'വൃത്തത്തിന്റെ ആരവും പരപ്പളവും: 1 മാർക്ക്',
      'പുറത്തുള്ള പരപ്പളവ് കാണൽ: 1 മാർക്ക്',
      'അന്തിമ സാധ്യത: 1 മാർക്ക്'
    ],
    answer_en: '(a) 100 cm²; (b) r = 5 cm, Area = 78.5 cm²; (c) 0.215 (or (4 - π)/4)',
    answer_ml: '(a) 100 cm²; (b) r = 5 cm, പരപ്പളവ് = 78.5 cm²; (c) 0.215 (അല്ലെങ്കിൽ (4 - π)/4)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.3 Pairs of Events & Systematic Tabulation
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.3.3',
    concept: 'm10.3.3.pairs-of-events-and-product-rule',
    sec: '10.3.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'One box contains four slips numbered 1, 2, 3, 4 and another box contains three slips numbered 1, 2, 3. One slip is taken from each box.\\n(a) In how many different ways can the slips be chosen in pairs?\\n(b) What is the probability that both numbers are even?\\n(c) What is the probability that the sum of the numbers is 5?',
    prompt_ml: 'ഒരു പെട്ടിയിൽ 1, 2, 3, 4 എന്ന് എഴുതിയ 4 കടലാസ് കഷ്ണങ്ങളും, മറ്റൊരു പെട്ടിയിൽ 1, 2, 3 എന്ന് എഴുതിയ 3 കടലാസ് കഷ്ണങ്ങളുമുണ്ട്. ഓരോ പെട്ടിയിൽ നിന്നും ഓരോ കടലാസ് എടുക്കുന്നു.\\n(a) എത്ര വ്യത്യസ്ത ജോഡികൾ സാധ്യമാണ്?\\n(b) രണ്ടും ഇരട്ടസംഖ്യകൾ ആകാനുള്ള സാധ്യത എത്ര?\\n(c) സംഖ്യകളുടെ തുക 5 ആകാനുള്ള സാധ്യത എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Total pairs $N = 4 \\times 3 = 12$.</li>\n  <li>Even numbers in first box: {2, 4} (2 numbers). Even in second box: {2} (1 number). Pairs of both even: (2,2), (4,2) — total 2 pairs. Probability $P(\\text{both even}) = \\frac{2}{12} = \\frac{1}{6}$.</li>\n  <li>Pairs with sum equal to 5: (2,3), (3,2), (4,1) — total 3 pairs.</li>\n  <li>Probability of sum being 5 $= \\frac{3}{12} = \\frac{1}{4}$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 12 pairs; (b) 1/6; (c) 1/4</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Total pairs calculation: 1 mark</li>\n  <li>Both even pairs and probability: 1.5 marks</li>\n  <li>Sum 5 pairs and probability: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സാധ്യമായ ആകെ ജോഡികൾ $N = 4 \\times 3 = 12$.</li>\n  <li>ഒന്നാം പെട്ടിയിലെ ഇരട്ടസംഖ്യകൾ: 2, 4 (2 എണ്ണം). രണ്ടാം പെട്ടിയിലെ ഇരട്ടസംഖ്യ: 2 (1 എണ്ണം). രണ്ടും ഇരട്ടയാകുന്ന ജോഡികൾ: (2,2), (4,2) — ആകെ 2 ജോഡികൾ. സാധ്യത $= \\frac{2}{12} = \\frac{1}{6}$.</li>\n  <li>തുക 5 ആകുന്ന ജോഡികൾ: (2,3), (3,2), (4,1) — ആകെ 3 ജോഡികൾ.</li>\n  <li>തുക 5 ആകാനുള്ള സാധ്യത $= \\frac{3}{12} = \\frac{1}{4}$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 12 ജോഡികൾ; (b) 1/6; (c) 1/4</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ആകെ ജോഡികൾ കണ്ടെത്തൽ: 1 മാർക്ക്</li>\n  <li>രണ്ടും ഇരട്ടയാകുന്ന സാധ്യത: 1.5 മാർക്ക്</li>\n  <li>തുക 5 ആകുന്ന സാധ്യത: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Total pairs $N = 4 \\times 3 = 12$.',
      'Even numbers in first box: {2, 4} (2 numbers). Even in second box: {2} (1 number). Pairs of both even: (2,2), (4,2) — total 2 pairs. Probability $P(\\text{both even}) = \\frac{2}{12} = \\frac{1}{6}$.',
      'Pairs with sum equal to 5: (2,3), (3,2), (4,1) — total 3 pairs.',
      'Probability of sum being 5 $= \\frac{3}{12} = \\frac{1}{4}$.'
    ],
    steps_ml: [
      'സാധ്യമായ ആകെ ജോഡികൾ $N = 4 \\times 3 = 12$.',
      'ഒന്നാം പെട്ടിയിലെ ഇരട്ടസംഖ്യകൾ: 2, 4 (2 എണ്ണം). രണ്ടാം പെട്ടിയിലെ ഇരട്ടസംഖ്യ: 2 (1 എണ്ണം). രണ്ടും ഇരട്ടയാകുന്ന ജോഡികൾ: (2,2), (4,2) — ആകെ 2 ജോഡികൾ. സാധ്യത $= \\frac{2}{12} = \\frac{1}{6}$.',
      'തുക 5 ആകുന്ന ജോഡികൾ: (2,3), (3,2), (4,1) — ആകെ 3 ജോഡികൾ.',
      'തുക 5 ആകാനുള്ള സാധ്യത $= \\frac{3}{12} = \\frac{1}{4}$.'
    ],
    rubric_en: [
      'Total pairs calculation: 1 mark',
      'Both even pairs and probability: 1.5 marks',
      'Sum 5 pairs and probability: 1.5 marks'
    ],
    rubric_ml: [
      'ആകെ ജോഡികൾ കണ്ടെത്തൽ: 1 മാർക്ക്',
      'രണ്ടും ഇരട്ടയാകുന്ന സാധ്യത: 1.5 മാർക്ക്',
      'തുക 5 ആകുന്ന സാധ്യത: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) 12 pairs; (b) 1/6; (c) 1/4',
    answer_ml: '(a) 12 ജോഡികൾ; (b) 1/6; (c) 1/4'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.4 Complementary Events & Practical Probability
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.3.4',
    concept: 'm10.3.4.complementary-events-and-applications',
    sec: '10.3.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'All two-digit numbers (from 10 to 99) are written on identical slips of paper and placed in a box. One slip is drawn at random.\\n(a) How many two-digit numbers are there in total?\\n(b) What is the probability that the number on the slip is a perfect square?\\n(c) What is the probability that the number on the slip is NOT a perfect square?',
    prompt_ml: '10 മുതൽ 99 വരെയുള്ള എല്ലാ രണ്ടക്ക സംഖ്യകളും കടലാസ് തുണ്ടുകളിൽ എഴുതി ഒരു പെട്ടിയിലിട്ടിരിക്കുന്നു. നോക്കാതെ ഒരു കടലാസ് എടുക്കുന്നു.\\n(a) ആകെ എത്ര രണ്ടക്ക സംഖ്യകളുണ്ട്?\\n(b) ലഭിച്ച സംഖ്യ ഒരു പൂർണ്ണവർഗ്ഗമാകാനുള്ള സാധ്യത എത്ര?\\n(c) ലഭിച്ച സംഖ്യ പൂർണ്ണവർഗ്ഗമല്ലാതിരിക്കാനുള്ള സാധ്യത എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Total two-digit numbers from 10 to 99 inclusive $= 99 - 10 + 1 = 90$.</li>\n  <li>Two-digit perfect squares: $4^2 = 16$, $5^2 = 25$, $6^2 = 36$, $7^2 = 49$, $8^2 = 64$, $9^2 = 81$ — total 6 numbers.</li>\n  <li>Probability of a perfect square $P(\\text{square}) = \\frac{6}{90} = \\frac{1}{15}$.</li>\n  <li>Probability of NOT a perfect square $P(\\text{not square}) = 1 - P(\\text{square}) = 1 - \\frac{1}{15} = \\frac{14}{15}$ (or $\\frac{90 - 6}{90} = \\frac{84}{90} = \\frac{14}{15}$).</li>\n</ol>\n<p><b>Final Answer:</b> (a) 90; (b) 1/15; (c) 14/15</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Total two-digit count: 1 mark</li>\n  <li>Listing squares and finding probability: 1.5 marks</li>\n  <li>Complement rule application and probability: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>10 മുതൽ 99 വരെയുള്ള ആകെ രണ്ടക്ക സംഖ്യകൾ $= 99 - 10 + 1 = 90$.</li>\n  <li>രണ്ടക്ക പൂർണ്ണവർഗ്ഗങ്ങൾ: $16, 25, 36, 49, 64, 81$ — ആകെ 6 എണ്ണം.</li>\n  <li>പൂർണ്ണവർഗ്ഗമാകാനുള്ള സാധ്യത $P = \\frac{6}{90} = \\frac{1}{15}$.</li>\n  <li>പൂർണ്ണവർഗ്ഗമല്ലാതിരിക്കാനുള്ള സാധ്യത $= 1 - \\frac{1}{15} = \\frac{14}{15}$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 90; (b) 1/15; (c) 14/15</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ആകെ രണ്ടക്ക സംഖ്യകൾ കാണൽ: 1 മാർക്ക്</li>\n  <li>പൂർണ്ണവർഗ്ഗങ്ങളുടെ എണ്ണവും സാധ്യതയും: 1.5 മാർക്ക്</li>\n  <li>പൂരക നിയമം ഉപയോഗിച്ച് സാധ്യത കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Total two-digit numbers from 10 to 99 inclusive $= 99 - 10 + 1 = 90$.',
      'Two-digit perfect squares: $4^2 = 16$, $5^2 = 25$, $6^2 = 36$, $7^2 = 49$, $8^2 = 64$, $9^2 = 81$ — total 6 numbers.',
      'Probability of a perfect square $P(\\text{square}) = \\frac{6}{90} = \\frac{1}{15}$.',
      'Probability of NOT a perfect square $P(\\text{not square}) = 1 - P(\\text{square}) = 1 - \\frac{1}{15} = \\frac{14}{15}$ (or $\\frac{90 - 6}{90} = \\frac{84}{90} = \\frac{14}{15}$).'
    ],
    steps_ml: [
      '10 മുതൽ 99 വരെയുള്ള ആകെ രണ്ടക്ക സംഖ്യകൾ $= 99 - 10 + 1 = 90$.',
      'രണ്ടക്ക പൂർണ്ണവർഗ്ഗങ്ങൾ: $16, 25, 36, 49, 64, 81$ — ആകെ 6 എണ്ണം.',
      'പൂർണ്ണവർഗ്ഗമാകാനുള്ള സാധ്യത $P = \\frac{6}{90} = \\frac{1}{15}$.',
      'പൂർണ്ണവർഗ്ഗമല്ലാതിരിക്കാനുള്ള സാധ്യത $= 1 - \\frac{1}{15} = \\frac{14}{15}$.'
    ],
    rubric_en: [
      'Total two-digit count: 1 mark',
      'Listing squares and finding probability: 1.5 marks',
      'Complement rule application and probability: 1.5 marks'
    ],
    rubric_ml: [
      'ആകെ രണ്ടക്ക സംഖ്യകൾ കാണൽ: 1 മാർക്ക്',
      'പൂർണ്ണവർഗ്ഗങ്ങളുടെ എണ്ണവും സാധ്യതയും: 1.5 മാർക്ക്',
      'പൂരക നിയമം ഉപയോഗിച്ച് സാധ്യത കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) 90; (b) 1/15; (c) 14/15',
    answer_ml: '(a) 90; (b) 1/15; (c) 14/15'
  }
);
