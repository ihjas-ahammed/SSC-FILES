/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 9 Chapter 10 — Real Numbers (രേഖീയസംഖ്യകൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.10.1 Real Numbers and the Number Line
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.10.1',
    concept: 'm9.10.1.real-numbers-and-number-line',
    sec: '9.10.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following real numbers lies strictly between $-3$ and $-2$ on the number line?',
    prompt_ml: 'സംഖ്യാരേഖയിൽ $-3$-നും $-2$-നും കൃത്യമായി ഇടയിൽ സ്ഥിതിചെയ്യുന്ന രേഖീയസംഖ്യ ഏത്?',
    options_en: [
      { k: 'A', t: '$-\\sqrt{5}$' },
      { k: 'B', t: '$-\\sqrt{10}$' },
      { k: 'C', t: '$-\\sqrt{3}$' },
      { k: 'D', t: '$-3.5$' }
    ],
    options_ml: [
      { k: 'A', t: '$-\\sqrt{5}$' },
      { k: 'B', t: '$-\\sqrt{10}$' },
      { k: 'C', t: '$-\\sqrt{3}$' },
      { k: 'D', t: '$-3.5$' }
    ],
    answer: 'A',
    solution_en: 'Since $2^2 = 4 < 5 < 9 = 3^2$, we have $2 < \\sqrt{5} < 3$. Multiplying by $-1$ reverses the inequality: $-3 < -\\sqrt{5} < -2$. Thus $-\\sqrt{5} \\approx -2.236$ lies between $-3$ and $-2$.',
    solution_ml: '$2^2 = 4 < 5 < 9 = 3^2$ ആയതിനാൽ $2 < \\sqrt{5} < 3$ ആണ്. $-1$ കൊണ്ട് ഗുണിച്ചാൽ $-3 < -\\sqrt{5} < -2$ എന്ന് കിട്ടുന്നു.',
    tested_en: 'Position of negative irrational roots on the real line.',
    tested_ml: 'സംഖ്യാരേഖയിൽ ഋണ അഭിന്നക സംഖ്യകളുടെ സ്ഥാനം.'
  },
  {
    id: 'obj.m9.10.2',
    concept: 'm9.10.1.real-numbers-and-number-line',
    sec: '9.10.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $a$ and $b$ are two real numbers such that $a < b$, which statement is always TRUE geometrically on the standard number line?',
    prompt_ml: '$a, b$ എന്നിവ രേഖീയസംഖ്യകളും $a < b$-യും ആണെങ്കിൽ, സാധാരണ സംഖ്യാരേഖയിൽ എപ്പോഴും ശരിയായ പ്രസ്താവന ഏതാണ്?',
    options_en: [
      { k: 'A', t: 'The point $a$ lies to the left of the point $b$' },
      { k: 'B', t: 'The point $a$ lies to the right of the point $b$' },
      { k: 'C', t: '$|a| < |b|$ always' },
      { k: 'D', t: '$a$ must be negative and $b$ must be positive' }
    ],
    options_ml: [
      { k: 'A', t: '$a$ എന്ന ബിന്ദു $b$ എന്ന ബിന്ദുവിന്റെ ഇടതുവശത്താണ്' },
      { k: 'B', t: '$a$ എന്ന ബിന്ദു $b$ എന്ന ബിന്ദുവിന്റെ വലതുവശത്താണ്' },
      { k: 'C', t: 'എപ്പോഴും $|a| < |b|$ ആയിരിക്കും' },
      { k: 'D', t: '$a$ ഋണസംഖ്യയും $b$ ധനസംഖ്യയും ആയിരിക്കണം' }
    ],
    answer: 'A',
    solution_en: 'By definition of the real number line, $a < b$ means that $a$ lies to the left of $b$.',
    solution_ml: 'സംഖ്യാരേഖയുടെ നിർവ്വചനമനുസരിച്ച് $a < b$ എന്നാൽ $a$ എന്നത് $b$-യുടെ ഇടതുവശത്താണ് സ്ഥിതിചെയ്യുന്നത്.',
    tested_en: 'Geometric order of numbers on the real line.',
    tested_ml: 'സംഖ്യാരേഖയിലെ രേഖീയസംഖ്യകളുടെ സ്ഥാനക്രമം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.10.2 Absolute Value & Distance on the Line
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.10.3',
    concept: 'm9.10.2.absolute-value-and-modulus',
    sec: '9.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the distance between the points $-7$ and $5$ on the number line?',
    prompt_ml: 'സംഖ്യാരേഖയിൽ $-7$, $5$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം എത്ര?',
    options_en: [
      { k: 'A', t: '$12$' },
      { k: 'B', t: '$-12$' },
      { k: 'C', t: '$2$' },
      { k: 'D', t: '$-2$' }
    ],
    options_ml: [
      { k: 'A', t: '$12$' },
      { k: 'B', t: '$-12$' },
      { k: 'C', t: '$2$' },
      { k: 'D', t: '$-2$' }
    ],
    answer: 'A',
    solution_en: 'Distance $= |5 - (-7)| = |5 + 7| = 12$ units.',
    solution_ml: 'അകലം $= |5 - (-7)| = |5 + 7| = 12$ യൂണിറ്റ്.',
    tested_en: 'Computing distance between negative and positive coordinates.',
    tested_ml: 'സംഖ്യാരേഖയിലെ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണൽ.'
  },
  {
    id: 'obj.m9.10.4',
    concept: 'm9.10.2.absolute-value-and-modulus',
    sec: '9.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $x < 3$, simplify the expression $|x - 3|$.',
    prompt_ml: '$x < 3$ ആണെങ്കിൽ $|x - 3|$ എന്നതിനെ ലഘൂകരിച്ചാൽ എന്ത് കിട്ടും?',
    options_en: [
      { k: 'A', t: '$3 - x$' },
      { k: 'B', t: '$x - 3$' },
      { k: 'C', t: '$-(x + 3)$' },
      { k: 'D', t: '$3 + x$' }
    ],
    options_ml: [
      { k: 'A', t: '$3 - x$' },
      { k: 'B', t: '$x - 3$' },
      { k: 'C', t: '$-(x + 3)$' },
      { k: 'D', t: '$3 + x$' }
    ],
    answer: 'A',
    solution_en: 'Since $x < 3$, we have $x - 3 < 0$. Therefore, by definition of absolute value, $|x - 3| = -(x - 3) = 3 - x$.',
    solution_ml: '$x < 3$ ആയതിനാൽ $x - 3 < 0$ (ഋണസംഖ്യ) ആണ്. അതിനാൽ $|x - 3| = -(x - 3) = 3 - x$.',
    tested_en: 'Definition of absolute value for negative arguments.',
    tested_ml: 'കേവലവിലയുടെ ബീജഗണിത നിർവ്വചനം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.10.3 Equations with Absolute Values
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.10.5',
    concept: 'm9.10.3.absolute-value-equations',
    sec: '9.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What are the solutions of the equation $|x - 5| = 9$?',
    prompt_ml: '$|x - 5| = 9$ എന്ന സമവാക്യത്തിന്റെ പരിഹാരങ്ങൾ ഏതെല്ലാം?',
    options_en: [
      { k: 'A', t: '$14$ and $-4$' },
      { k: 'B', t: '$14$ and $4$' },
      { k: 'C', t: '$-14$ and $4$' },
      { k: 'D', t: '$4$ only' }
    ],
    options_ml: [
      { k: 'A', t: '$14$-ഉം $-4$-ഉം' },
      { k: 'B', t: '$14$-ഉം $4$-ഉം' },
      { k: 'C', t: '$-14$-ഉം $4$-ഉം' },
      { k: 'D', t: '$4$ മാത്രം' }
    ],
    answer: 'A',
    solution_en: '$|x - 5| = 9 \\implies x - 5 = 9$ or $x - 5 = -9 \\implies x = 5 + 9 = 14$ or $x = 5 - 9 = -4$.',
    solution_ml: '$|x - 5| = 9 \\implies x - 5 = 9$ അല്ലെങ്കിൽ $x - 5 = -9 \\implies x = 14$ അല്ലെങ്കിൽ $x = -4$.',
    tested_en: 'Solving absolute value equations with two solutions.',
    tested_ml: 'കേവലവില സമവാക്യങ്ങൾ നിർദ്ധാരണം ചെയ്യൽ.'
  },
  {
    id: 'obj.m9.10.6',
    concept: 'm9.10.3.absolute-value-equations',
    sec: '9.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which equation correctly expresses: "The distance of $x$ from $-3$ on the number line is $8$"?',
    prompt_ml: '"സംഖ്യാരേഖയിൽ $-3$-ൽ നിന്ന് $x$-ലേക്കുള്ള അകലം $8$ ആണ്" എന്നതിനെ സൂചിപ്പിക്കുന്ന സമവാക്യം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$|x + 3| = 8$' },
      { k: 'B', t: '$|x - 3| = 8$' },
      { k: 'C', t: '$|x - 8| = 3$' },
      { k: 'D', t: '$|x + 8| = -3$' }
    ],
    options_ml: [
      { k: 'A', t: '$|x + 3| = 8$' },
      { k: 'B', t: '$|x - 3| = 8$' },
      { k: 'C', t: '$|x - 8| = 3$' },
      { k: 'D', t: '$|x + 8| = -3$' }
    ],
    answer: 'A',
    solution_en: 'Distance between $x$ and $-3$ is $|x - (-3)| = |x + 3|$. Equating this to $8$ gives $|x + 3| = 8$.',
    solution_ml: '$x$, $-3$ എന്നിവ തമ്മിലുള്ള അകലം $|x - (-3)| = |x + 3|$ ആണ്. ഇത് $8$-ന് തുല്യമാക്കിയാൽ $|x + 3| = 8$ എന്ന് കിട്ടുന്നു.',
    tested_en: 'Translating verbal distance statements to absolute value equations.',
    tested_ml: 'അകലത്തെ അടിസ്ഥാനമാക്കിയുള്ള കേവലവില സമവാക്യ രൂപീകരണം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.10.4 Midpoint and Intervals on the Real Line
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.10.7',
    concept: 'm9.10.4.midpoint-and-intervals',
    sec: '9.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the midpoint of the points $-9$ and $3$ on the number line?',
    prompt_ml: 'സംഖ്യാരേഖയിൽ $-9$, $3$ എന്നീ ബിന്ദുക്കളുടെ മധ്യബിന്ദു ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$-3$' },
      { k: 'B', t: '$-6$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$-4$' }
    ],
    options_ml: [
      { k: 'A', t: '$-3$' },
      { k: 'B', t: '$-6$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$-4$' }
    ],
    answer: 'A',
    solution_en: 'Midpoint $M = \\frac{-9 + 3}{2} = \\frac{-6}{2} = -3$.',
    solution_ml: 'മധ്യബിന്ദു $M = \\frac{-9 + 3}{2} = \\frac{-6}{2} = -3$.',
    tested_en: 'Calculating midpoint between two real numbers.',
    tested_ml: 'രണ്ട് സംഖ്യകളുടെ മധ്യബിന്ദു കണക്കാക്കൽ.'
  },
  {
    id: 'obj.m9.10.8',
    concept: 'm9.10.4.midpoint-and-intervals',
    sec: '9.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which absolute value inequality corresponds to the range of numbers $-2 \\le x \\le 8$?',
    prompt_ml: '$-2 \\le x \\le 8$ എന്ന പരിധിയെ സൂചിപ്പിക്കുന്ന കേവലവില അസമത ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$|x - 3| \\le 5$' },
      { k: 'B', t: '$|x + 3| \\le 5$' },
      { k: 'C', t: '$|x - 5| \\le 3$' },
      { k: 'D', t: '$|x - 3| \\le 10$' }
    ],
    options_ml: [
      { k: 'A', t: '$|x - 3| \\le 5$' },
      { k: 'B', t: '$|x + 3| \\le 5$' },
      { k: 'C', t: '$|x - 5| \\le 3$' },
      { k: 'D', t: '$|x - 3| \\le 10$' }
    ],
    answer: 'A',
    solution_en: 'Midpoint $a = \\frac{-2 + 8}{2} = 3$. Half-width $k = \\frac{8 - (-2)}{2} = 5$. Thus $|x - 3| \\le 5$.',
    solution_ml: 'മധ്യബിന്ദു $a = \\frac{-2 + 8}{2} = 3$. അകലം $k = \\frac{8 - (-2)}{2} = 5$. അതിനാൽ അസമത $|x - 3| \\le 5$ ആണ്.',
    tested_en: 'Converting intervals into absolute value inequalities.',
    tested_ml: 'സംഖ്യാ പരിധികളെ കേവലവില അസമതകളാക്കി മാറ്റൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     Level 2 Written Exercises (1 per section)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m9.10.1',
    concept: 'm9.10.1.real-numbers-and-number-line',
    sec: '9.10.1',
    type: 'written',
    marks: 4,
    time: 180,
    prompt_en: '<p>(i) Explain why every point on the real number line corresponds to a unique real number, distinguishing between rational and irrational numbers.</p><p>(ii) Locate the approximate positions of $\\sqrt{2}$, $-\\sqrt{5}$, and $\\frac{7}{4}$ with respect to consecutive integers on the number line.</p>',
    prompt_ml: '<p>(i) ഭിന്നകസംഖ്യകളും അഭിന്നകസംഖ്യകളും തമ്മിലുള്ള വ്യത്യാസം വ്യക്തമാക്കി, സംഖ്യാരേഖയിലെ ഓരോ ബിന്ദുവും ഒരു രേഖീയസംഖ്യയെ എങ്ങനെ പ്രതിനിധീകരിക്കുന്നു എന്ന് വിശദീകരിക്കുക.</p><p>(ii) $\\sqrt{2}$, $-\\sqrt{5}$, $\\frac{7}{4}$ എന്നീ സംഖ്യകൾ സംഖ്യാരേഖയിൽ ഏതേത് അടുത്തടുത്ത പൂർണ്ണസംഖ്യകൾക്കിടയിലാണ് സ്ഥിതിചെയ്യുന്നതെന്ന് കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Rational vs Irrational Real Numbers</h4>
<p>The set of real numbers $\\mathbb{R}$ is partitioned into:</p>
<ul>
  <li><b>Rational Numbers ($\\mathbb{Q}$):</b> Numbers expressible as $\\frac{p}{q}$ ($q \\neq 0$, $p, q \\in \\mathbb{Z}$), which have terminating or repeating decimal expansions.</li>
  <li><b>Irrational Numbers:</b> Non-terminating, non-repeating decimals that represent geometric lengths that cannot be expressed as simple ratios (e.g. diagonals of unit squares $\\sqrt{2}$, circle ratio $\\pi$).</li>
</ul>
<p>Together, they leave no gaps along the unbroken continuous line.</p>

<h4>Step 2: Locating the Given Numbers</h4>
<ul>
  <li><b>$\\sqrt{2}$:</b> Since $1^2 = 1 < 2 < 4 = 2^2$, we have:
  $$1 < \\sqrt{2} < 2 \\quad (\\sqrt{2} \\approx 1.414)$$
  It lies strictly between the integers <b>$1$ and $2$</b>.</li>
  
  <li><b>$-\\sqrt{5}$:</b> Since $2^2 = 4 < 5 < 9 = 3^2$, we have $2 < \\sqrt{5} < 3$. Multiplying by $-1$ reverses inequalities:
  $$-3 < -\\sqrt{5} < -2 \\quad (-\\sqrt{5} \\approx -2.236)$$
  It lies strictly between the integers <b>$-3$ and $-2$</b>.</li>

  <li><b>$\\frac{7}{4}$:</b> As a mixed fraction, $\\frac{7}{4} = 1\\frac{3}{4} = 1.75$.
  $$1 < \\frac{7}{4} < 2$$
  It lies strictly between the integers <b>$1$ and $2$</b>.</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടം 1: ഭിന്നക, അഭിന്നക രേഖീയസംഖ്യകൾ</h4>
<p>രേഖീയസംഖ്യകൾ $\\mathbb{R}$ രണ്ട് പ്രധാന വിഭാഗങ്ങളായി തിരിയുന്നു:</p>
<ul>
  <li><b>ഭിന്നകസംഖ്യകൾ ($\\mathbb{Q}$):</b> $\\frac{p}{q}$ ($q \\neq 0$) രൂപത്തിൽ എഴുതാവുന്ന സംഖ്യകൾ. ഇവ അവസാനിക്കുന്നതോ ആവർത്തിക്കുന്നതോ ആയ ദശാംശരൂപങ്ങളാണ്.</li>
  <li><b>അഭിന്നകസംഖ്യകൾ:</b> അവസാനിക്കാത്തതും ആവർത്തിക്കാത്തതുമായ ദശാംശങ്ങൾ. ഇവ ജ്യാമിതീയ അളവുകളായി സംഖ്യാരേഖയിൽ കൃത്യമായ സ്ഥാനങ്ങൾ കണ്ടെത്തുന്നു (ഉദാഹരണത്തിന് $\\sqrt{2}, \\pi$).</li>
</ul>

<h4>ഘട്ടം 2: നൽകിയിരിക്കുന്ന സംഖ്യകളുടെ സ്ഥാനം</h4>
<ul>
  <li><b>$\\sqrt{2}$:</b> $1^2 < 2 < 2^2$ ആയതിനാൽ $1 < \\sqrt{2} < 2$ (ഏകദേശം $1.414$). ഇത് <b>$1$-നും $2$-നും ഇടയിലാണ്</b>.</li>
  <li><b>$-\\sqrt{5}$:</b> $2^2 < 5 < 3^2$ ആയതിനാൽ $-3 < -\\sqrt{5} < -2$ (ഏകദേശം $-2.236$). ഇത് <b>$-3$-നും $-2$-നും ഇടയിലാണ്</b>.</li>
  <li><b>$\\frac{7}{4}$:</b> $\\frac{7}{4} = 1.75$ ആയതിനാൽ ഇത് <b>$1$-നും $2$-നും ഇടയിലാണ്</b>.</li>
</ul>`,
    tested_en: 'Classification and bounds of real numbers on the number line.',
    tested_ml: 'സംഖ്യാരേഖയിലെ രേഖീയസംഖ്യകളുടെ സ്ഥാനവും പരിധികളും.'
  },

  {
    id: 'w.m9.10.2',
    concept: 'm9.10.2.absolute-value-and-modulus',
    sec: '9.10.2',
    type: 'written',
    marks: 4,
    time: 180,
    prompt_en: '<p>Points $A, B, C$ on the real number line have coordinates $-8, -2,$ and $5$ respectively.</p><p>(i) Calculate the distances $AB, BC,$ and $AC$ using absolute values.</p><p>(ii) Verify whether $AB + BC = AC$ and state what this implies about the relative positions of the three points.</p>',
    prompt_ml: '<p>സംഖ്യാരേഖയിലെ $A, B, C$ എന്നീ ബിന്ദുക്കളുടെ സൂചകസംഖ്യകൾ യഥാക്രമം $-8, -2, 5$ എന്നിവയാണ്.</p><p>(i) കേവലവില ഉപയോഗിച്ച് $AB, BC, AC$ എന്നീ അകലങ്ങൾ കണക്കാക്കുക.</p><p>(ii) $AB + BC = AC$ ആണോ എന്ന് പരിശോധിച്ച്, ഈ മൂന്ന് ബിന്ദുക്കളുടെ സ്ഥാനത്തെക്കുറിച്ച് എന്ത് നിഗമനത്തിലെത്താം എന്ന് വ്യക്തമാക്കുക.</p>',
    solution_en: `<h4>Step 1: Compute Distances Using Absolute Values</h4>
<ul>
  <li>$$AB = |-2 - (-8)| = |-2 + 8| = |6| = \\mathbf{6\\text{ units}}$$</li>
  <li>$$BC = |5 - (-2)| = |5 + 2| = |7| = \\mathbf{7\\text{ units}}$$</li>
  <li>$$AC = |5 - (-8)| = |5 + 8| = |13| = \\mathbf{13\\text{ units}}$$</li>
</ul>

<h4>Step 2: Verification and Geometric Implication</h4>
$$AB + BC = 6 + 7 = 13$$
$$AC = 13$$
<p>Since $AB + BC = AC$, the point $B$ lies strictly <b>between</b> point $A$ and point $C$ on the real line. Order on the line from left to right: $A(-8) \\to B(-2) \\to C(5)$.</p>`,
    solution_ml: `<h4>ഘട്ടം 1: അകലങ്ങൾ കണക്കാക്കൽ</h4>
<ul>
  <li>$$AB = |-2 - (-8)| = |-2 + 8| = |6| = \\mathbf{6\\text{ യൂണിറ്റ്}}$$</li>
  <li>$$BC = |5 - (-2)| = |5 + 2| = |7| = \\mathbf{7\\text{ യൂണിറ്റ്}}$$</li>
  <li>$$AC = |5 - (-8)| = |5 + 8| = |13| = \\mathbf{13\\text{ യൂണിറ്റ്}}$$</li>
</ul>

<h4>ഘട്ടം 2: പരിശോധനയും നിഗമനവും</h4>
$$AB + BC = 6 + 7 = 13$$
$$AC = 13$$
<p>$AB + BC = AC$ ആയതിനാൽ, സംഖ്യാരേഖയിൽ $B$ എന്ന ബിന്ദു $A$-യ്ക്കും $C$-യ്ക്കും <b>ഇടയിലാണ്</b> സ്ഥിതിചെയ്യുന്നത്. ഇടത്തുനിന്ന് വലത്തോട്ട് ക്രമം: $A(-8) \\to B(-2) \\to C(5)$.</p>`,
    tested_en: 'Distance computation between coordinates and collinearity.',
    tested_ml: 'ബിന്ദുക്കൾ തമ്മിലുള്ള അകലവും സ്ഥാന നിർണ്ണയവും.'
  },

  {
    id: 'w.m9.10.3',
    concept: 'm9.10.3.absolute-value-equations',
    sec: '9.10.3',
    type: 'written',
    marks: 4,
    time: 180,
    prompt_en: '<p>Solve the following equations for all possible real values of $x$ and interpret each geometrically on the number line:</p><p>(i) $|x - 4| = 9$</p><p>(ii) $|2x + 6| = 10$</p>',
    prompt_ml: '<p>താഴെ നൽകിയിരിക്കുന്ന സമവാക്യങ്ങൾ നിർദ്ധാരണം ചെയ്ത് $x$-ന്റെ വിലകൾ കാണുക. ഓരോന്നിന്റെയും ജ്യാമിതീയ അർത്ഥം വ്യക്തമാക്കുക:</p><p>(i) $|x - 4| = 9$</p><p>(ii) $|2x + 6| = 10$</p>',
    solution_en: `<h4>Part (i): Solve $|x - 4| = 9$</h4>
<p><b>Geometric Meaning:</b> The distance between $x$ and $4$ on the number line is $9$ units.</p>
$$x - 4 = 9 \\implies x = 4 + 9 = \\mathbf{13}$$
$$x - 4 = -9 \\implies x = 4 - 9 = \\mathbf{-5}$$
<p>The solutions are <b>$x = 13$</b> and <b>$x = -5$</b>.</p>

<h4>Part (ii): Solve $|2x + 6| = 10$</h4>
<p>Factor out $2$:</p>
$$2|x + 3| = 10 \\implies |x + 3| = 5 \\implies |x - (-3)| = 5$$
<p><b>Geometric Meaning:</b> The distance of $x$ from $-3$ on the number line is $5$ units.</p>
$$x - (-3) = 5 \\implies x = -3 + 5 = \\mathbf{2}$$
$$x - (-3) = -5 \\implies x = -3 - 5 = \\mathbf{-8}$$
<p>The solutions are <b>$x = 2$</b> and <b>$x = -8$</b>.</p>`,
    solution_ml: `<h4>ഭാഗം (i): $|x - 4| = 9$ നിർദ്ധാരണം ചെയ്യൽ</h4>
<p><b>ജ്യാമിതീയ അർത്ഥം:</b> സംഖ്യാരേഖയിൽ $4$-ൽ നിന്ന് $x$-ലേക്കുള്ള അകലം $9$ യൂണിറ്റാണ്.</p>
$$x - 4 = 9 \\implies x = 4 + 9 = \\mathbf{13}$$
$$x - 4 = -9 \\implies x = 4 - 9 = \\mathbf{-5}$$
<p>പരിഹാരങ്ങൾ <b>$x = 13$</b>, <b>$x = -5$</b> എന്നിവയാണ്.</p>

<h4>ഭാഗം (ii): $|2x + 6| = 10$ നിർദ്ധാരണം ചെയ്യൽ</h4>
$$2|x + 3| = 10 \\implies |x + 3| = 5 \\implies |x - (-3)| = 5$$
<p><b>ജ്യാമിതീയ അർത്ഥം:</b> സംഖ്യാരേഖയിൽ $-3$-ൽ നിന്ന് $x$-ലേക്കുള്ള അകലം $5$ യൂണിറ്റാണ്.</p>
$$x = -3 + 5 = \\mathbf{2}$$
$$x = -3 - 5 = \\mathbf{-8}$$
<p>പരിഹാരങ്ങൾ <b>$x = 2$</b>, <b>$x = -8$</b> എന്നിവയാണ്.</p>`,
    tested_en: 'Algebraic and geometric solution of absolute value equations.',
    tested_ml: 'കേവലവില സമവാക്യങ്ങളുടെ ബീജഗണിത നിർദ്ധാരണവും ജ്യാമിതീയ വ്യാഖ്യാനവും.'
  },

  {
    id: 'w.m9.10.4',
    concept: 'm9.10.4.midpoint-and-intervals',
    sec: '9.10.4',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>(i) Find the midpoint of the points $-5$ and $11$ on the number line, and find the distance from each point to this midpoint.</p><p>(ii) Express the condition that a number $x$ lies within $6$ units of the point $-1$ as an absolute value inequality, and determine all integer values of $x$ satisfying this condition.</p>',
    prompt_ml: '<p>(i) സംഖ്യാരേഖയിൽ $-5, 11$ എന്നീ ബിന്ദുക്കളുടെ മധ്യബിന്ദു കണ്ടെത്തുക. ഓരോ ബിന്ദുവിൽ നിന്നും മധ്യബിന്ദുവിലേക്കുള്ള അകലം കണക്കാക്കുക.</p><p>(ii) $x$ എന്ന സംഖ്യ $-1$-ൽ നിന്ന് പരമാവധി $6$ യൂണിറ്റ് അകലത്തിലാണ് സ്ഥിതിചെയ്യുന്നത് എന്ന നിബന്ധനയെ ഒരു കേവലവില അസമതയായി എഴുതുക. ഈ നിബന്ധന തൃപ്തിപ്പെടുത്തുന്ന പൂർണ്ണസംഖ്യകൾ ഏതെല്ലാമാണെന്ന് കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Part (i): Midpoint of $-5$ and $11$</h4>
<p>The midpoint $M$ is the arithmetic average:</p>
$$M = \\frac{-5 + 11}{2} = \\frac{6}{2} = \\mathbf{3}$$
<p>Distance from $-5$ to $M$:</p>
$$|-5 - 3| = |-8| = \\mathbf{8\\text{ units}}$$
<p>Distance from $11$ to $M$:</p>
$$|11 - 3| = |8| = \\mathbf{8\\text{ units}}$$
<p>The total distance between $-5$ and $11$ is $|11 - (-5)| = 16$, and each point is indeed $8$ units from $M$.</p>

<h4>Part (ii): Absolute Value Inequality and Integer Values</h4>
<p>Distance of $x$ from $-1$ is $|x - (-1)| = |x + 1|$. Being within $6$ units means:</p>
$$\\mathbf{|x + 1| \\le 6}$$
<p>Expanding the inequality:</p>
$$-6 \\le x + 1 \\le 6$$
<p>Subtract $1$ from all parts:</p>
$$-7 \\le x \\le 5$$
<p>The integer solutions are:</p>
$$\\mathbf{\\{-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5\\}}$$`,
    solution_ml: `<h4>ഭാഗം (i): മധ്യബിന്ദുവും അകലവും</h4>
<p>മധ്യബിന്ദു $M$ എന്നത് സംഖ്യകളുടെ ശരാശരിയാണ്:</p>
$$M = \\frac{-5 + 11}{2} = \\frac{6}{2} = \\mathbf{3}$$
<p>ഓരോ ബിന്ദുവിൽ നിന്നും മധ്യബിന്ദുവിലേക്കുള്ള അകലം:</p>
$$|-5 - 3| = |-8| = \\mathbf{8\\text{ യൂണിറ്റ്}}$$
$$|11 - 3| = \\mathbf{8\\text{ യൂണിറ്റ്}}$$

<h4>ഭാഗം (ii): കേവലവില അസമതയും പൂർണ്ണസംഖ്യകളും</h4>
<p>$-1$-ൽ നിന്നുള്ള അകലം $|x - (-1)| = |x + 1|$ ആണ്. അതിനാൽ അസമത:</p>
$$\\mathbf{|x + 1| \\le 6}$$
$$-6 \\le x + 1 \\le 6$$
$$-7 \\le x \\le 5$$
<p>ഈ പരിധിയിലുള്ള പൂർണ്ണസംഖ്യകൾ:</p>
$$\\mathbf{\\{-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5\\}}$$`,
    tested_en: 'Midpoint determination, interval inequalities and discrete integer counting.',
    tested_ml: 'മധ്യബിന്ദു, പരിധി അസമതകൾ, അനുയോജ്യമായ പൂർണ്ണസംഖ്യകൾ കണ്ടെത്തൽ.'
  }
);
