/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 4: New Numbers (പുതിയ സംഖ്യകൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.4.1 Diagonal of a Square and Discovery of √2
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.4.1',
    concept: 'm9.4.1.diagonal-of-square-and-sqrt2',
    sec: '9.4.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A square has sides of length $3\\text{ cm}$. What is the exact length of its diagonal?',
    prompt_ml: 'ഒരു സമചതുരത്തിന്റെ വശങ്ങളുടെ നീളം $3\\text{ cm}$ ആണ്. അതിന്റെ വികർണ്ണത്തിന്റെ കൃത്യമായ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$3\\sqrt{2}\\text{ cm}$' },
      { k: 'B', t: '$6\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$\\sqrt{6}\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$3\\sqrt{2}\\text{ cm}$' },
      { k: 'B', t: '$6\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$\\sqrt{6}\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the Pythagorean theorem: $d^2 = 3^2 + 3^2 = 9 + 9 = 18 \\implies d = \\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}\\text{ cm}$.',
    solution_ml: '$d^2 = 3^2 + 3^2 = 18 \\implies d = \\sqrt{18} = 3\\sqrt{2}\\text{ cm}$.',
    tested_en: 'Calculating diagonal of a square using Pythagorean theorem.',
    tested_ml: 'സമചതുരത്തിന്റെ വികർണ്ണ നീളം കാണൽ.'
  },
  {
    id: 'obj.m9.4.2',
    concept: 'm9.4.1.diagonal-of-square-and-sqrt2',
    sec: '9.4.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the area of a square drawn on the diagonal of a square with area $18\\text{ sq cm}$?',
    prompt_ml: 'പരപ്പളവ് $18\\text{ ച.സെ.മീ}$ ആയ ഒരു സമചതുരത്തിന്റെ വികർണ്ണത്തിൽ വരയ്ക്കുന്ന സമചതുരത്തിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$36\\text{ sq cm}$' },
      { k: 'B', t: '$18\\text{ sq cm}$' },
      { k: 'C', t: '$72\\text{ sq cm}$' },
      { k: 'D', t: '$24\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$36\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$18\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$72\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$24\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: 'For a square of side $a$, area $= a^2 = 18$. The square on the diagonal has side $d$ where $d^2 = a^2 + a^2 = 2a^2 = 2 \\times 18 = 36\\text{ sq cm}$.',
    solution_ml: 'വികർണ്ണത്തിലെ സമചതുരത്തിന്റെ പരപ്പളവ് യഥാർത്ഥ സമചതുരത്തിന്റെ പരപ്പളവിന്റെ ഇരട്ടിയാണ്: $2 \\times 18 = 36\\text{ ച.സെ.മീ}$.',
    tested_en: 'Area of square on diagonal is twice original area.',
    tested_ml: 'വികർണ്ണത്തിലെ സമചതുരത്തിന്റെ പരപ്പളവ് ഇരട്ടിയാകുന്നു.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.4.2 Geometric Construction of Roots
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.4.3',
    concept: 'm9.4.2.geometric-construction-of-roots',
    sec: '9.4.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In the spiral of Theodorus, a right triangle has perpendicular sides of length $\\sqrt{5}$ and $2$. What is the length of its hypotenuse?',
    prompt_ml: 'ഒരു മട്ടത്രികോണത്തിന്റെ ലംബവശങ്ങൾ $\\sqrt{5}$, $2$ എന്നിവയാണ്. അതിന്റെ കർണ്ണത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$\\sqrt{7}$' },
      { k: 'C', t: '$\\sqrt{9}$' },
      { k: 'D', t: '$\\sqrt{29}$' }
    ],
    options_ml: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$\\sqrt{7}$' },
      { k: 'C', t: '$\\sqrt{9}$' },
      { k: 'D', t: '$\\sqrt{29}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Hypotenuse} = \\sqrt{(\\sqrt{5})^2 + 2^2} = \\sqrt{5 + 4} = \\sqrt{9} = 3$.',
    solution_ml: '$\\text{കർണ്ണം} = \\sqrt{(\\sqrt{5})^2 + 2^2} = \\sqrt{5 + 4} = \\sqrt{9} = 3$.',
    tested_en: 'Pythagorean hypotenuse computation involving square roots.',
    tested_ml: 'വർഗ്ഗമൂലങ്ങൾ ഉൾപ്പെടുന്ന പൈതഗോറസ് കണക്കുകൂട്ടൽ.'
  },
  {
    id: 'obj.m9.4.4',
    concept: 'm9.4.2.geometric-construction-of-roots',
    sec: '9.4.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'To construct a line segment of length $\\sqrt{10}\\text{ cm}$ in a single right-angled triangle, which leg lengths can be chosen?',
    prompt_ml: 'ഒരൊറ്റ മട്ടത്രികോണം കൊണ്ട് $\\sqrt{10}\\text{ cm}$ നീളമുള്ള വര നിർമ്മിക്കാൻ ലംബവശങ്ങളായി ഏതൊക്കെ നീളങ്ങൾ തിരഞ്ഞെടുക്കാം?',
    options_en: [
      { k: 'A', t: '$3\\text{ cm}$ and $1\\text{ cm}$' },
      { k: 'B', t: '$2\\text{ cm}$ and $2\\text{ cm}$' },
      { k: 'C', t: '$5\\text{ cm}$ and $2\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$ and $1\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$3\\text{ cm}$, $1\\text{ cm}$' },
      { k: 'B', t: '$2\\text{ cm}$, $2\\text{ cm}$' },
      { k: 'C', t: '$5\\text{ cm}$, $2\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$, $1\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$3^2 + 1^2 = 9 + 1 = 10$, so the hypotenuse is $\\sqrt{10}\\text{ cm}$.',
    solution_ml: '$3^2 + 1^2 = 9 + 1 = 10$ ആയതിനാൽ കർണ്ണം $\\sqrt{10}\\text{ cm}$ ആയിരിക്കും.',
    tested_en: 'Designing right triangle legs to construct a given square root.',
    tested_ml: 'വർഗ്ഗമൂല നിർമ്മിതിക്കുള്ള ലംബവശങ്ങൾ കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.4.3 Decimal Approximation of Roots
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.4.5',
    concept: 'm9.4.3.decimal-approximation-of-roots',
    sec: '9.4.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Between which two consecutive tenths does $\\sqrt{5}$ lie?',
    prompt_ml: '$\\sqrt{5}$ ഏത് രണ്ട് തുടർച്ചയായ ദശാംശങ്ങൾക്കിടയിലാണ് സ്ഥിതിചെയ്യുന്നത്?',
    options_en: [
      { k: 'A', t: '$2.2$ and $2.3$' },
      { k: 'B', t: '$2.1$ and $2.2$' },
      { k: 'C', t: '$2.3$ and $2.4$' },
      { k: 'D', t: '$2.0$ and $2.1$' }
    ],
    options_ml: [
      { k: 'A', t: '$2.2$-നും $2.3$-നും ഇടയിൽ' },
      { k: 'B', t: '$2.1$-നും $2.2$-നും ഇടയിൽ' },
      { k: 'C', t: '$2.3$-നും $2.4$-നും ഇടയിൽ' },
      { k: 'D', t: '$2.0$-നും $2.1$-നും ഇടയിൽ' }
    ],
    answer: 'A',
    solution_en: '$(2.2)^2 = 4.84 < 5 < (2.3)^2 = 5.29 \\implies 2.2 < \\sqrt{5} < 2.3$.',
    solution_ml: '$(2.2)^2 = 4.84 < 5 < (2.3)^2 = 5.29$ ആയതിനാൽ $2.2 < \\sqrt{5} < 2.3$.',
    tested_en: 'Bounding square roots by tenths.',
    tested_ml: 'വർഗ്ഗമൂലത്തെ ദശാംശങ്ങൾക്കിടയിൽ കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m9.4.6',
    concept: 'm9.4.3.decimal-approximation-of-roots',
    sec: '9.4.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Given that $\\sqrt{2} \\approx 1.414$, what is the approximate value of $\\sqrt{8}$ to 3 decimal places?',
    prompt_ml: '$\\sqrt{2} \\approx 1.414$ എന്ന് നൽകിയിരിക്കുന്നു. $\\sqrt{8}$-ന്റെ 3 ദശാംശസ്ഥാനങ്ങളിലേക്കുള്ള ഏകദേശ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$2.828$' },
      { k: 'B', t: '$2.414$' },
      { k: 'C', t: '$3.828$' },
      { k: 'D', t: '$2.718$' }
    ],
    options_ml: [
      { k: 'A', t: '$2.828$' },
      { k: 'B', t: '$2.414$' },
      { k: 'C', t: '$3.828$' },
      { k: 'D', t: '$2.718$' }
    ],
    answer: 'A',
    solution_en: '$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2} \\approx 2 \\times 1.414 = 2.828$.',
    solution_ml: '$\\sqrt{8} = 2\\sqrt{2} \\approx 2 \\times 1.414 = 2.828$.',
    tested_en: 'Calculating root approximations via factoring.',
    tested_ml: 'ലഘൂകരിച്ച് വർഗ്ഗമൂലത്തിന്റെ ഏകദേശ വില കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.4.4 Operations on Surds
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.4.7',
    concept: 'm9.4.4.operations-on-surds',
    sec: '9.4.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Simplify the expression: $\\sqrt{32} + \\sqrt{50} - \\sqrt{18}$.',
    prompt_ml: 'ലഘൂകരിക്കുക: $\\sqrt{32} + \\sqrt{50} - \\sqrt{18}$.',
    options_en: [
      { k: 'A', t: '$6\\sqrt{2}$' },
      { k: 'B', t: '$5\\sqrt{2}$' },
      { k: 'C', t: '$7\\sqrt{2}$' },
      { k: 'D', t: '$4\\sqrt{2}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\sqrt{2}$' },
      { k: 'B', t: '$5\\sqrt{2}$' },
      { k: 'C', t: '$7\\sqrt{2}$' },
      { k: 'D', t: '$4\\sqrt{2}$' }
    ],
    answer: 'A',
    solution_en: '$\\sqrt{32} = 4\\sqrt{2}$, $\\sqrt{50} = 5\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$. Sum $= (4 + 5 - 3)\\sqrt{2} = 6\\sqrt{2}$.',
    solution_ml: '$4\\sqrt{2} + 5\\sqrt{2} - 3\\sqrt{2} = (4 + 5 - 3)\\sqrt{2} = 6\\sqrt{2}$.',
    tested_en: 'Adding and subtracting like radical surds.',
    tested_ml: 'സമാന വർഗ്ഗമൂലങ്ങളുടെ സങ്കലനവും വ്യവകലനവും.'
  },
  {
    id: 'obj.m9.4.8',
    concept: 'm9.4.4.operations-on-surds',
    sec: '9.4.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Evaluate: $(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3})$.',
    prompt_ml: 'വില കാണുക: $(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3})$.',
    options_en: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$10$' },
      { k: 'C', t: '$\\sqrt{4}$' },
      { k: 'D', t: '$2$' }
    ],
    options_ml: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$10$' },
      { k: 'C', t: '$\\sqrt{4}$' },
      { k: 'D', t: '$2$' }
    ],
    answer: 'A',
    solution_en: 'Using $(a + b)(a - b) = a^2 - b^2$: $(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$.',
    solution_ml: '$(a + b)(a - b) = a^2 - b^2$ പ്രകാരം: $(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$.',
    tested_en: 'Difference of squares with square roots.',
    tested_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസ സമവാക്യം വർഗ്ഗമൂലങ്ങളിൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.4.1',
    sec: '9.4.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.4.1.diagonal-of-square-and-sqrt2',
    tested_en: 'Proof by contradiction of the irrationality of sqrt(2)',
    tested_ml: 'പരോക്ഷരീതി ഉപയോഗിച്ച് √2 അഭിന്നകമാണെന്ന് തെളിയിക്കൽ',
    title_en: 'Proof of the Irrationality of √2',
    title_ml: '√2 ഒരു അഭിന്നക സംഖ്യയാണെന്നതിന്റെ തെളിവ്',
    prompt_en: '<p>Prove by the method of contradiction that there is no fraction $\\frac{p}{q}$ whose square is 2, thereby establishing that $\\sqrt{2}$ is an irrational number.</p>',
    prompt_ml: '<p>വർഗ്ഗം 2 ആകുന്ന ഒരു ഭിന്നസംഖ്യയും ഇല്ലെന്ന് പരോക്ഷരീതി ഉപയോഗിച്ച് തെളിയിക്കുക. ഇതുവഴി $\\sqrt{2}$ ഒരു അഭിന്നക സംഖ്യയാണെന്ന് സാധൂകരിക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Assumption for Contradiction}$$
$$\\text{Assume that } \\sqrt{2} \\text{ is a rational fraction } \\frac{p}{q}, \\text{ where } p, q \\text{ are positive integers with no common factors (}\\gcd(p, q) = 1\\text{).}$$

$$\\text{Step 2: Algebraic Deduction}$$
$$\\sqrt{2} = \\frac{p}{q} \\implies 2 = \\frac{p^2}{q^2} \\implies p^2 = 2q^2$$
$$\\text{Since } p^2 \\text{ is a multiple of 2, } p^2 \\text{ is an even number.}$$
$$\\text{An odd number squared is always odd; therefore, } p \\text{ must be even.}$$

$$\\text{Step 3: Substitute } p = 2k$$
$$(2k)^2 = 2q^2 \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2$$
$$\\text{This means } q^2 \\text{ is also an even number, which implies } q \\text{ must be even.}$$

$$\\text{Step 4: Contradiction}$$
$$\\text{Since both } p \\text{ and } q \\text{ are even, they share a common factor of 2.}$$
$$\\text{This directly contradicts our initial condition that } \\frac{p}{q} \\text{ is in lowest terms.}$$

$$\\text{Conclusion: The assumption is false. There is no fraction whose square is 2; } \\mathbf{\\sqrt{2}} \\text{ is irrational.}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: പരോക്ഷ സങ്കൽപ്പം}$$
$$\\sqrt{2} = \\frac{p}{q} \\text{ എന്ന ലഘുവായ ഭിന്നസംഖ്യയാണെന്ന് കരുതുക (} p, q \\text{ പരസ്പര അഭാജ്യങ്ങൾ).}$$

$$\\text{ഘട്ടം 2: ബീജഗണിത അപഗ്രഥനം}$$
$$2 = \\frac{p^2}{q^2} \\implies p^2 = 2q^2$$
$$p^2 \\text{ എന്നത് 2-ന്റെ ഗുണിതമായതിനാൽ } p^2 \\text{ ഒരു ഇരട്ടസംഖ്യയാണ്.}$$
$$\\text{ഒറ്റസംഖ്യയുടെ വർഗ്ഗം ഒറ്റസംഖ്യയായതിനാൽ, } p \\text{ ഒരു ഇരട്ടസംഖ്യയായിരിക്കണം (} p = 2k\\text{).}$$

$$\\text{ഘട്ടം 3: } p = 2k \\text{ നൽകുന്നു}$$
$$(2k)^2 = 2q^2 \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2$$
$$\\text{ഇത് കാണിക്കുന്നത് } q^2 \\text{ ഇരട്ടസംഖ്യയാണ്, അതിനാൽ } q\\text{-ഉം ഇരട്ടസംഖ്യയാണ്.}$$

$$\\text{ഘട്ടം 4: വിരുദ്ധത}$$
$$p, q \\text{ എന്നിവ ഇരട്ടസംഖ്യകളായതിനാൽ അവയ്ക്ക് 2 എന്ന പൊതുഘടകമുണ്ട്.}$$
$$\\text{ഇത് } p, q \\text{ എന്നിവയ്ക്ക് പൊതുഘടകങ്ങളില്ല എന്ന ആദ്യ വ്യവസ്ഥയ്ക്ക് വിരുദ്ധമാണ്.}$$

$$\\text{തീരുമാനം: വർഗ്ഗം 2 ആകുന്ന ഭിന്നസംഖ്യകളില്ല; അതിനാൽ } \\mathbf{\\sqrt{2}} \\text{ അഭിന്നകമാണ്.}$$`
  },

  {
    id: 'w.m9.4.2',
    sec: '9.4.2',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.4.2.geometric-construction-of-roots',
    tested_en: 'Spiral of Theodorus construction and Pythagorean justification for sqrt(3)',
    tested_ml: 'തിയോഡോറസ് സർപ്പിള നിർമ്മിതിയും പൈതഗോറസ് സാധൂകരണവും',
    title_en: 'Construction of Spiral of Theodorus to Locate √3 on Number Line',
    title_ml: 'തിയോഡോറസ് സർപ്പിളം നിർമ്മിച്ച് √3 സംഖ്യാരേഖയിൽ അടയാളപ്പെടുത്തൽ',
    prompt_en: '<p>Describe the step-by-step geometric construction to locate the exact position of $\\sqrt{3}$ on a number line using ruler and compasses. Explain the underlying Pythagorean theorem verification for each step.</p>',
    prompt_ml: '<p>സ്കെയിലും കോമ്പസും ഉപയോഗിച്ച് സംഖ്യാരേഖയിൽ $\\sqrt{3}$-ന്റെ കൃത്യമായ സ്ഥാനം അടയാളപ്പെടുത്തുന്നതിനുള്ള ജ്യാമിതീയ നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ വിശദീകരിക്കുക. ഓരോ ഘട്ടത്തിലെയും പൈതഗോറസ് സാധൂകരണം വ്യക്തമാക്കുക.</p>',
    solution_en: `$$\\text{1. Construction Steps:}$$
$$\\text{Step a: Draw a number line with origin } O(0) \\text{ and point } A(1) \\text{ such that } OA = 1\\text{ unit}.$$
$$\\text{Step b: Draw a perpendicular segment } AB = 1\\text{ unit at } A.$$
$$\\text{Join } OB. \\text{ By Pythagoras: } OB = \\sqrt{1^2 + 1^2} = \\sqrt{2}.$$
$$\\text{Step c: At point } B, \\text{ draw a segment } BC = 1\\text{ unit strictly perpendicular to line segment } OB.$$
$$\\text{Step d: Join } OC. \\text{ In right triangle } \\triangle OBC:$$
$$OC = \\sqrt{(OB)^2 + (BC)^2} = \\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{2 + 1} = \\mathbf{\\sqrt{3}}.$$
$$\\text{Step e: With center } O \\text{ and radius } OC, \\text{ draw an arc cutting the positive number line at } P.$$
$$\\text{The point } P \\text{ represents the exact position of } \\mathbf{\\sqrt{3}} \\approx 1.732.$$`,
    solution_ml: `$$\\text{1. നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ:}$$
$$\\text{ഘട്ടം a: സംഖ്യാരേഖ വരച്ച് } O(0), A(1) \\text{ അടയാളപ്പെടുത്തുക (} OA = 1\\text{ യൂണിറ്റ്).}$$
$$\\text{ഘട്ടം b: } A\\text{-ൽ } 1\\text{ യൂണിറ്റ് ലംബമായി } AB \\text{ വരയ്ക്കുക.}$$
$$OB \\text{ യോജിപ്പിക്കുന്നു. പൈതഗോറസ് പ്രകാരം: } OB = \\sqrt{1^2 + 1^2} = \\sqrt{2}.$$
$$\\text{ഘട്ടം c: } B\\text{-ൽ } OB\\text{-ന് ലംബമായി } 1\\text{ യൂണിറ്റ് നീളത്തിൽ } BC \\text{ വരയ്ക്കുക.}$$
$$\\text{ഘട്ടം d: } O, C \\text{ യോജിപ്പിക്കുന്നു. മട്ടത്രികോണം } \\triangle OBC\\text{-ൽ:}$$
$$OC = \\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{2 + 1} = \\mathbf{\\sqrt{3}}.$$
$$\\text{ഘട്ടം e: } O \\text{ കേന്ദ്രമാക്കി } OC \\text{ ആരത്തിൽ വരയ്ക്കുന്ന ചാപം സംഖ്യാരേഖയെ } P\\text{-ൽ ഖണ്ഡിക്കുന്നു.}$$
$$P \\text{ എന്ന ബിന്ദു } \\mathbf{\\sqrt{3}}\\text{-നെ (ഏകദേശം 1.732) പ്രതിനിധീകരിക്കുന്നു.}$$`
  },

  {
    id: 'w.m9.4.3',
    sec: '9.4.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.4.3.decimal-approximation-of-roots',
    tested_en: 'Decimal bounding and approximation of square roots through squaring',
    tested_ml: 'വർഗ്ഗം കണ്ടുകൊണ്ട് വർഗ്ഗമൂലങ്ങളുടെ ദശാംശ പരിധികളും ഏകദേശ വിലയും കണ്ടെത്തൽ',
    title_en: 'Step-by-Step Bounding of √2 to Two Decimal Places',
    title_ml: '√2-ന്റെ രണ്ട് ദശാംശസ്ഥാനങ്ങളിലേക്കുള്ള ഘട്ടംഘട്ടമായ പരിധി കണ്ടെത്തൽ',
    prompt_en: '<p>Using the method of squaring, find the two consecutive tenths between which $\\sqrt{2}$ lies, and then the two consecutive hundredths between which it lies. Write down the approximation of $\\sqrt{2}$ to two decimal places.</p>',
    prompt_ml: '<p>വർഗ്ഗം കാണുന്ന രീതി ഉപയോഗിച്ച് $\\sqrt{2}$ സ്ഥിതിചെയ്യുന്ന രണ്ട് തുടർച്ചയായ ദശാംശസ്ഥാനങ്ങളും, തുടർന്ന് രണ്ട് ശതാംശസ്ഥാനങ്ങളും കണ്ടെത്തുക. $\\sqrt{2}$-ന്റെ രണ്ട് ദശാംശസ്ഥാനങ്ങളിലേക്കുള്ള ഏകദേശ വില എഴുതുക.</p>',
    solution_en: `$$\\text{Step 1: Finding tenths interval}$$
$$\\text{Compute squares of tenths around } 1.4:$$
$$(1.3)^2 = 1.69 < 2$$
$$(1.4)^2 = 1.96 < 2$$
$$(1.5)^2 = 2.25 > 2$$
$$\\text{Since } 1.96 < 2 < 2.25, \\text{ we have:}$$
$$\\mathbf{1.4 < \\sqrt{2} < 1.5}$$

$$\\text{Step 2: Finding hundredths interval}$$
$$\\text{Compute squares between } 1.40 \\text{ and } 1.50:$$
$$(1.41)^2 = 1.9881 < 2$$
$$(1.42)^2 = 2.0164 > 2$$
$$\\text{Since } 1.9881 < 2 < 2.0164, \\text{ we have:}$$
$$\\mathbf{1.41 < \\sqrt{2} < 1.42}$$

$$\\text{Step 3: Two-decimal approximation}$$
$$\\text{Since } (1.41)^2 = 1.9881 \\text{ is much closer to } 2 \\text{ than } 2.0164:$$
$$\\mathbf{\\sqrt{2} \\approx 1.41}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ദശാംശ പരിധി കണ്ടെത്തുന്നു}$$
$$(1.4)^2 = 1.96 < 2$$
$$(1.5)^2 = 2.25 > 2$$
$$1.96 < 2 < 2.25 \\text{ ആയതിനാൽ:}$$
$$\\mathbf{1.4 < \\sqrt{2} < 1.5}$$

$$\\text{ഘട്ടം 2: ശതാംശ പരിധി കണ്ടെത്തുന്നു}$$
$$(1.41)^2 = 1.9881 < 2$$
$$(1.42)^2 = 2.0164 > 2$$
$$1.9881 < 2 < 2.0164 \\text{ ആയതിനാൽ:}$$
$$\\mathbf{1.41 < \\sqrt{2} < 1.42}$$

$$\\text{ഘട്ടം 3: രണ്ട് ദശാംശസ്ഥാനങ്ങളിലേക്കുള്ള ഏകദേശ വില}$$
$$\\mathbf{\\sqrt{2} \\approx 1.41}$$`
  },

  {
    id: 'w.m9.4.4',
    sec: '9.4.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.4.4.operations-on-surds',
    tested_en: 'Simplification and linear combination of surds',
    tested_ml: 'വർഗ്ഗമൂലങ്ങളുടെ കൂട്ടിച്ചേർക്കലും ലഘൂകരണവും',
    title_en: 'Simplification and Rationalisation of Surd Expressions',
    title_ml: 'വർഗ്ഗമൂലങ്ങളുടെ ലഘൂകരണവും ഛേദം ഭിന്നകമാക്കലും',
    prompt_en: '<p>Simplify the expression: $$\\frac{6}{\\sqrt{2}} + \\sqrt{50} - \\sqrt{98}$$ Express the final result in the simplified form $k\\sqrt{2}$ and calculate its decimal value using $\\sqrt{2} \\approx 1.414$.</p>',
    prompt_ml: '<p>ലഘൂകരിക്കുക: $$\\frac{6}{\\sqrt{2}} + \\sqrt{50} - \\sqrt{98}$$ അന്തിമഫലം $k\\sqrt{2}$ എന്ന രൂപത്തിലെഴുതി, $\\sqrt{2} \\approx 1.414$ ഉപയോഗിച്ച് ദശാംശവില കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Rationalize the first term } \\frac{6}{\\sqrt{2}}$$
$$\\frac{6}{\\sqrt{2}} = \\frac{6 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = \\mathbf{3\\sqrt{2}}$$

$$\\text{Step 2: Simplify } \\sqrt{50}$$
$$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = \\mathbf{5\\sqrt{2}}$$

$$\\text{Step 3: Simplify } \\sqrt{98}$$
$$\\sqrt{98} = \\sqrt{49 \\times 2} = \\sqrt{49} \\times \\sqrt{2} = \\mathbf{7\\sqrt{2}}$$

$$\\text{Step 4: Combine all terms}$$
$$3\\sqrt{2} + 5\\sqrt{2} - 7\\sqrt{2} = (3 + 5 - 7)\\sqrt{2} = \\mathbf{1\\sqrt{2}} = \\mathbf{\\sqrt{2}}$$

$$\\text{Step 5: Decimal Value}$$
$$\\sqrt{2} \\approx \\mathbf{1.414}.$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ആദ്യ പദത്തിന്റെ ഛേദം ഭിന്നകമാക്കുന്നു}$$
$$\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = \\mathbf{3\\sqrt{2}}$$

$$\\text{ഘട്ടം 2: } \\sqrt{50} \\text{ ലഘൂകരിക്കുന്നു}$$
$$\\sqrt{50} = \\sqrt{25 \\times 2} = \\mathbf{5\\sqrt{2}}$$

$$\\text{ഘട്ടം 3: } \\sqrt{98} \\text{ ലഘൂകരിക്കുന്നു}$$
$$\\sqrt{98} = \\sqrt{49 \\times 2} = \\mathbf{7\\sqrt{2}}$$

$$\\text{ഘട്ടം 4: പദങ്ങൾ കൂട്ടിച്ചേർക്കുന്നു}$$
$$3\\sqrt{2} + 5\\sqrt{2} - 7\\sqrt{2} = (3 + 5 - 7)\\sqrt{2} = \\mathbf{\\sqrt{2}}$$

$$\\text{ഘട്ടം 5: ദശാംശവില}$$
$$\\sqrt{2} \\approx \\mathbf{1.414}.$$`
  },

  {
    id: 'w.m9.4.5',
    sec: '9.4.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.4.4.operations-on-surds',
    tested_en: 'Rationalising binomial surd denominators using conjugate pairs',
    tested_ml: 'അനുബന്ധ ദ്വിപദങ്ങൾ ഉപയോഗിച്ച് ഛേദം ഭിന്നകമാക്കൽ',
    title_en: 'Rationalising Binomial Surd Denominators',
    title_ml: 'ദ്വിപദ വർഗ്ഗമൂല ഛേദങ്ങളെ ഭിന്നകമാക്കൽ',
    prompt_en: '<p>Simplify the expression by rationalising the denominator: $$\\frac{1}{\\sqrt{3} + \\sqrt{2}} + \\frac{1}{\\sqrt{3} - \\sqrt{2}}$$ Then calculate its value using $\\sqrt{3} \\approx 1.732$.</p>',
    prompt_ml: '<p>ഛേദം ഭിന്നകമാക്കി ലഘൂകരിക്കുക: $$\\frac{1}{\\sqrt{3} + \\sqrt{2}} + \\frac{1}{\\sqrt{3} - \\sqrt{2}}$$ തുടർന്ന് $\\sqrt{3} \\approx 1.732$ നൽകി വില കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Step 1: Rationalize each term using conjugates:}$$
$$\\frac{1}{\\sqrt{3} + \\sqrt{2}} = \\frac{\\sqrt{3} - \\sqrt{2}}{(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2})} = \\frac{\\sqrt{3} - \\sqrt{2}}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{\\sqrt{3} - \\sqrt{2}}{3 - 2} = \\sqrt{3} - \\sqrt{2}$$

$$\\frac{1}{\\sqrt{3} - \\sqrt{2}} = \\frac{\\sqrt{3} + \\sqrt{2}}{(\\sqrt{3} - \\sqrt{2})(\\sqrt{3} + \\sqrt{2})} = \\frac{\\sqrt{3} + \\sqrt{2}}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{\\sqrt{3} + \\sqrt{2}}{3 - 2} = \\sqrt{3} + \\sqrt{2}$$

$$\\text{Step 2: Add the two simplified terms:}$$
$$(\\sqrt{3} - \\sqrt{2}) + (\\sqrt{3} + \\sqrt{2}) = \\mathbf{2\\sqrt{3}}$$

$$\\text{Step 3: Calculate decimal value:}$$
$$2\\sqrt{3} \\approx 2 \\times 1.732 = \\mathbf{3.464}.$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: അനുബന്ധങ്ങൾ ഉപയോഗിച്ച് ഓരോ പദത്തിന്റെയും ഛേദം ഭിന്നകമാക്കുന്നു:}$$
$$\\frac{1}{\\sqrt{3} + \\sqrt{2}} = \\frac{\\sqrt{3} - \\sqrt{2}}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{\\sqrt{3} - \\sqrt{2}}{3 - 2} = \\sqrt{3} - \\sqrt{2}$$

$$\\frac{1}{\\sqrt{3} - \\sqrt{2}} = \\frac{\\sqrt{3} + \\sqrt{2}}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{\\sqrt{3} + \\sqrt{2}}{3 - 2} = \\sqrt{3} + \\sqrt{2}$$

$$\\text{ഘട്ടം 2: രണ്ട് പദങ്ങളും തമ്മിൽ കൂട്ടുന്നു:}$$
$$(\\sqrt{3} - \\sqrt{2}) + (\\sqrt{3} + \\sqrt{2}) = \\mathbf{2\\sqrt{3}}$$

$$\\text{ഘട്ടം 3: ദശാംശവില കണ്ടെത്തുന്നു:}$$
$$2\\sqrt{3} \\approx 2 \\times 1.732 = \\mathbf{3.464}.$$`
  },

  {
    id: 'w.m9.4.6',
    sec: '9.4.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.4.1.diagonal-of-square-and-sqrt2',
    tested_en: 'Geometry of square diagonal and inscribed figures with surd calculations',
    tested_ml: 'സമചതുരത്തിന്റെ കർണ്ണവും അന്തർവ്യാഖ്യാന രൂപങ്ങളുടെ അളവുകളും',
    title_en: 'Perimeter and Area of Square Inscribed in Circle with Surds',
    title_ml: 'വൃത്തത്തിൽ അന്തർവ്യാഖ്യാനം ചെയ്ത സമചതുരത്തിന്റെ അളവുകൾ',
    prompt_en: '<p>A square is inscribed in a circle of diameter $10\\text{ cm}$.<br>(a) Find the length of each side of the square in surd form.<br>(b) Calculate the area and perimeter of the square.<br>(c) Using $\\sqrt{2} \\approx 1.414$, find the perimeter correct to two decimal places.</p>',
    prompt_ml: '<p>വ്യാസം $10\\text{ സെന്റീമീറ്റർ}$ ആയ വൃത്തത്തിൽ ഒരു സമചതുരം അന്തർവ്യാഖ്യാനം ചെയ്തിരിക്കുന്നു.<br>(a) സമചതുരത്തിന്റെ ഒരു വശത്തിന്റെ നീളം വർഗ്ഗമൂല രൂപത്തിൽ കണ്ടെത്തുക.<br>(b) സമചതുരത്തിന്റെ പരപ്പളവും ചുറ്റളവും കണക്കാക്കുക.<br>(c) $\\sqrt{2} \\approx 1.414$ ഉപയോഗിച്ച് ചുറ്റളവ് രണ്ട് ദശാംശസ്ഥാനങ്ങളിലേക്ക് കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{(a) The diagonal of the inscribed square equals the circle diameter:}$$
$$d = 10\\text{ cm}.$$
$$\\text{If } a \\text{ is side length: } a\\sqrt{2} = 10 \\implies a = \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = \\mathbf{5\\sqrt{2}\\text{ cm}}.$$

$$\\text{(b) Area and Perimeter:}$$
$$\\text{Area } = a^2 = (5\\sqrt{2})^2 = 25 \\times 2 = \\mathbf{50\\text{ sq cm}}.$$
$$\\text{Perimeter } = 4a = 4(5\\sqrt{2}) = \\mathbf{20\\sqrt{2}\\text{ cm}}.$$

$$\\text{(c) Decimal perimeter:}$$
$$20\\sqrt{2} \\approx 20 \\times 1.414 = \\mathbf{28.28\\text{ cm}}.$$`,
    solution_ml: `$$\\text{(a) സമചതുരത്തിന്റെ കർണ്ണം വൃത്തത്തിന്റെ വ്യാസത്തിന് തുല്യമാണ്:}$$
$$d = 10\\text{ സെന്റീമീറ്റർ}.$$
$$\\text{ഒരു വശം } a \\text{ ആയാൽ: } a\\sqrt{2} = 10 \\implies a = \\frac{10}{\\sqrt{2}} = \\mathbf{5\\sqrt{2}\\text{ സെന്റീമീറ്റർ}}.$$

$$\\text{(b) പരപ്പളവും ചുറ്റളവും:}$$
$$\\text{പരപ്പളവ് } = a^2 = (5\\sqrt{2})^2 = 25 \\times 2 = \\mathbf{50\\text{ ചതുരശ്ര സെന്റീമീറ്റർ}}.$$
$$\\text{ചുറ്റളവ് } = 4a = 4(5\\sqrt{2}) = \\mathbf{20\\sqrt{2}\\text{ സെന്റീമീറ്റർ}}.$$

$$\\text{(c) ദശാംശവില:}$$
$$20\\sqrt{2} \\approx 20 \\times 1.414 = \\mathbf{28.28\\text{ സെന്റീമീറ്റർ}}.$$`
  }
);
