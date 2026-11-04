/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 4: Polygons (ബഹുഭുജങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.4.1',
    concept: 'm8.4.1.polygon-angle-sum',
    sec: '8.4.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the sum of the interior angles of an octagon (8-sided polygon)?',
    prompt_ml: '8 വശങ്ങളുള്ള ഒരു അഷ്ടഭുജത്തിലെ ആന്തരകോണുകളുടെ തുക എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$1080^\\circ$' },
      { k: 'B', t: '$900^\\circ$' },
      { k: 'C', t: '$1260^\\circ$' },
      { k: 'D', t: '$1440^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$1080^\\circ$' },
      { k: 'B', t: '$900^\\circ$' },
      { k: 'C', t: '$1260^\\circ$' },
      { k: 'D', t: '$1440^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Formula for the sum of angles: $S = (n - 2) \\times 180^\\circ$. For an octagon, $n = 8$: $S = (8 - 2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$.',
    solution_ml: 'കോണുകളുടെ തുക കാണാനുള്ള സൂത്രവാക്യം: $S = (n - 2) \\times 180^\\circ$. അഷ്ടഭുജത്തിന് $n = 8$: $S = (8 - 2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$.',
    tested_en: 'Sum of interior angles of a polygon.',
    tested_ml: 'ബഹുഭുജത്തിലെ കോണുകളുടെ തുക.'
  },

  {
    id: 'obj.m8.4.2',
    concept: 'm8.4.1.polygon-angle-sum',
    sec: '8.4.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The sum of the interior angles of a polygon is $1440^\\circ$. How many sides does the polygon have?',
    prompt_ml: 'ഒരു ബഹുഭുജത്തിലെ ആന്തരകോണുകളുടെ തുക $1440^\\circ$ ആണ്. ഈ ബഹുഭുജത്തിന് എത്ര വശങ്ങളുണ്ട്?',
    options_en: [
      { k: 'A', t: '8' },
      { k: 'B', t: '9' },
      { k: 'C', t: '10' },
      { k: 'D', t: '12' }
    ],
    options_ml: [
      { k: 'A', t: '8' },
      { k: 'B', t: '9' },
      { k: 'C', t: '10' },
      { k: 'D', t: '12' }
    ],
    answer: 'C',
    solution_en: '$(n - 2) \\times 180^\\circ = 1440^\\circ \\implies n - 2 = \\frac{1440}{180} = 8 \\implies n = 8 + 2 = 10$ sides.',
    solution_ml: '$(n - 2) \\times 180^\\circ = 1440^\\circ \\implies n - 2 = \\frac{1440}{180} = 8 \\implies n = 8 + 2 = 10$ വശങ്ങൾ.',
    tested_en: 'Finding number of sides from angle sum.',
    tested_ml: 'കോണുകളുടെ തുകയിൽ നിന്നും വശങ്ങളുടെ എണ്ണം കണ്ടെത്തൽ.'
  },

  {
    id: 'obj.m8.4.3',
    concept: 'm8.4.2.polygon-outer-angles',
    sec: '8.4.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the sum of the outer angles of any 12-sided polygon?',
    prompt_ml: '12 വശങ്ങളുള്ള ഏതൊരു ബഹുഭുജത്തിലെയും ബാഹ്യകോണുകളുടെ തുക എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$360^\\circ$' },
      { k: 'B', t: '$1800^\\circ$' },
      { k: 'C', t: '$720^\\circ$' },
      { k: 'D', t: '$1440^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$360^\\circ$' },
      { k: 'B', t: '$1800^\\circ$' },
      { k: 'C', t: '$720^\\circ$' },
      { k: 'D', t: '$1440^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The sum of the outer angles of ANY convex polygon is always $360^\\circ$, regardless of the number of sides.',
    solution_ml: 'വശങ്ങളുടെ എണ്ണം എത്രയായാലും ഏതൊരു ബഹുഭുജത്തിലെയും ബാഹ്യകോണുകളുടെ തുക എല്ലായ്പ്പോഴും $360^\\circ$ ആയിരിക്കും.',
    tested_en: 'Sum of outer angles of a polygon.',
    tested_ml: 'ബാഹ്യകോണുകളുടെ തുക.'
  },

  {
    id: 'obj.m8.4.4',
    concept: 'm8.4.2.polygon-outer-angles',
    sec: '8.4.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'At one vertex of a polygon, the interior angle is $115^\\circ$. What is the corresponding exterior (outer) angle?',
    prompt_ml: 'ഒരു ബഹുഭുജത്തിന്റെ ഒരു മൂലയിലെ ആന്തരകോൺ $115^\\circ$ ആണ്. അവിടുത്തെ ബാഹ്യകോണിന്റെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$75^\\circ$' },
      { k: 'C', t: '$55^\\circ$' },
      { k: 'D', t: '$245^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$75^\\circ$' },
      { k: 'C', t: '$55^\\circ$' },
      { k: 'D', t: '$245^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Inner angle and outer angle at any vertex form a linear pair (sum to $180^\\circ$). Outer angle $= 180^\\circ - 115^\\circ = 65^\\circ$.',
    solution_ml: 'ആന്തരകോണും ബാഹ്യകോണും ചേരുമ്പോൾ രേഖീയജോടിയാണ് ($180^\\circ$). ബാഹ്യകോൺ $= 180^\\circ - 115^\\circ = 65^\\circ$.',
    tested_en: 'Linear pair relationship of inner and outer angles.',
    tested_ml: 'ആന്തരകോണും ബാഹ്യകോണും തമ്മിലുള്ള രേഖീയജോടി ബന്ധം.'
  },

  {
    id: 'obj.m8.4.5',
    concept: 'm8.4.3.regular-polygons',
    sec: '8.4.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the measure of each outer angle of a regular hexagon (6 sides)?',
    prompt_ml: 'ഒരു സമഷഡ്ഭുജത്തിലെ (6 വശങ്ങൾ) ഓരോ ബാഹ്യകോണിന്റെയും അളവ് എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$60^\\circ$' },
      { k: 'B', t: '$120^\\circ$' },
      { k: 'C', t: '$72^\\circ$' },
      { k: 'D', t: '$90^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$60^\\circ$' },
      { k: 'B', t: '$120^\\circ$' },
      { k: 'C', t: '$72^\\circ$' },
      { k: 'D', t: '$90^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Each outer angle of an $n$-sided regular polygon is $\\frac{360^\\circ}{n}$. For $n = 6$, $e = \\frac{360^\\circ}{6} = 60^\\circ$.',
    solution_ml: '$n$ വശങ്ങളുള്ള ഒരു സമബഹുഭുജത്തിലെ ഓരോ ബാഹ്യകോണും $\\frac{360^\\circ}{n}$ ആണ്. $n = 6$ ആകുമ്പോൾ, $e = \\frac{360^\\circ}{6} = 60^\\circ$.',
    tested_en: 'Outer angle of a regular polygon.',
    tested_ml: 'സമബഹുഭുജത്തിലെ ബാഹ്യകോൺ.'
  },

  {
    id: 'obj.m8.4.6',
    concept: 'm8.4.3.regular-polygons',
    sec: '8.4.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Each interior angle of a regular polygon is $135^\\circ$. How many sides does it have?',
    prompt_ml: 'ഒരു സമബഹുഭുജത്തിലെ ഓരോ ആന്തരകോണിന്റെയും അളവ് $135^\\circ$ ആണ്. ഇതിന് എത്ര വശങ്ങളുണ്ട്?',
    options_en: [
      { k: 'A', t: '6' },
      { k: 'B', t: '8' },
      { k: 'C', t: '10' },
      { k: 'D', t: '12' }
    ],
    options_ml: [
      { k: 'A', t: '6' },
      { k: 'B', t: '8' },
      { k: 'C', t: '10' },
      { k: 'D', t: '12' }
    ],
    answer: 'B',
    solution_en: 'First find the outer angle: $e = 180^\\circ - 135^\\circ = 45^\\circ$. Number of sides $n = \\frac{360^\\circ}{45^\\circ} = 8$ sides (regular octagon).',
    solution_ml: 'ആദ്യം ബാഹ്യകോൺ കാണുക: $e = 180^\\circ - 135^\\circ = 45^\\circ$. വശങ്ങളുടെ എണ്ണം $n = \\frac{360^\\circ}{45^\\circ} = 8$ വശങ്ങൾ (സമഅഷ്ടഭുജം).',
    tested_en: 'Determining regular polygon sides from interior angle.',
    tested_ml: 'ആന്തരകോണിൽ നിന്നും സമബഹുഭുജത്തിന്റെ വശങ്ങളുടെ എണ്ണം കണ്ടെത്തൽ.'
  },

  {
    id: 'obj.m8.4.7',
    concept: 'm8.4.4.polygon-diagonals',
    sec: '8.4.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'How many diagonals does a regular hexagon (6 sides) have in total?',
    prompt_ml: 'ഒരു ഷഡ്ഭുജത്തിന് (6 വശങ്ങൾ) ആകെ എത്ര വികർണ്ണങ്ങളുണ്ട്?',
    options_en: [
      { k: 'A', t: '6' },
      { k: 'B', t: '9' },
      { k: 'C', t: '12' },
      { k: 'D', t: '15' }
    ],
    options_ml: [
      { k: 'A', t: '6' },
      { k: 'B', t: '9' },
      { k: 'C', t: '12' },
      { k: 'D', t: '15' }
    ],
    answer: 'B',
    solution_en: 'Formula for total diagonals: $D = \\frac{n(n - 3)}{2}$. For $n = 6$: $D = \\frac{6(6 - 3)}{2} = \\frac{6 \\times 3}{2} = 9$ diagonals.',
    solution_ml: 'വികർണ്ണങ്ങളുടെ എണ്ണം കാണാനുള്ള സൂത്രവാക്യം: $D = \\frac{n(n - 3)}{2}$. $n = 6$ ആകുമ്പോൾ: $D = \\frac{6(6 - 3)}{2} = \\frac{6 \\times 3}{2} = 9$ വികർണ്ണങ്ങൾ.',
    tested_en: 'Number of diagonals of a polygon.',
    tested_ml: 'ബഹുഭുജത്തിലെ വികർണ്ണങ്ങളുടെ എണ്ണം.'
  },

  {
    id: 'obj.m8.4.8',
    concept: 'm8.4.4.polygon-diagonals',
    sec: '8.4.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Which polygon has the same number of sides as diagonals?',
    prompt_ml: 'വശങ്ങളുടെ എണ്ണവും വികർണ്ണങ്ങളുടെ എണ്ണവും തുല്യമായ ബഹുഭുജം ഏതാണ്?',
    options_en: [
      { k: 'A', t: 'Quadrilateral' },
      { k: 'B', t: 'Pentagon' },
      { k: 'C', t: 'Hexagon' },
      { k: 'D', t: 'Triangle' }
    ],
    options_ml: [
      { k: 'A', t: 'ചതുർഭുജം' },
      { k: 'B', t: 'പഞ്ചഭുജം' },
      { k: 'C', t: 'ഷഡ്ഭുജം' },
      { k: 'D', t: 'ത്രികോണം' }
    ],
    answer: 'B',
    solution_en: 'For a pentagon, $n = 5$. Diagonals $= \\frac{5(5 - 3)}{2} = \\frac{5 \\times 2}{2} = 5$. Thus sides = diagonals = 5.',
    solution_ml: 'പഞ്ചഭുജത്തിന് $n = 5$. വികർണ്ണങ്ങൾ $= \\frac{5(5 - 3)}{2} = \\frac{5 \\times 2}{2} = 5$. അതിനാൽ വശങ്ങളും വികർണ്ണങ്ങളും തുല്യമാണ് (5).',
    tested_en: 'Property of pentagon diagonals.',
    tested_ml: 'പഞ്ചഭുജത്തിലെ വികർണ്ണങ്ങളുടെ സവിശേഷത.'
  }
);

/* ── Level 2: Written Practice Exercises (SCERT Textbook) ────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.4.1',
    sec: '8.4.1',
    concept: 'm8.4.1.polygon-angle-sum',
    marks: 4,
    time: 180,
    title_en: 'Finding the Missing Angle of a Pentagon',
    title_ml: 'പഞ്ചഭുജത്തിലെ ഒരു കോൺ കണ്ടെത്തൽ',
    prompt_en: `<p>Four angles of a pentagon are $100^\\circ, 110^\\circ, 120^\\circ,$ and $90^\\circ$.</p>
      <ol type="a">
        <li>What is the sum of all angles in a pentagon?</li>
        <li>Find the measure of the fifth angle.</li>
      </ol>`,
    prompt_ml: `<p>ഒരു പഞ്ചഭുജത്തിലെ നാല് കോണുകൾ $100^\\circ, 110^\\circ, 120^\\circ, 90^\\circ$ ആണ്.</p>
      <ol type="a">
        <li>പഞ്ചഭുജത്തിലെ കോണുകളുടെ ആകെ തുക എത്രയാണ്?</li>
        <li>അഞ്ചാമത്തെ കോണിന്റെ അളവ് കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>The sum of angles in a pentagon ($n = 5$) is:
          $$S = (5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = \\mathbf{540^\\circ}$$</li>
        <li>The sum of the four given angles is:
          $$100^\\circ + 110^\\circ + 120^\\circ + 90^\\circ = 420^\\circ$$
          Therefore, the fifth angle is:
          $$\\text{Fifth angle} = 540^\\circ - 420^\\circ = \\mathbf{120^\\circ}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>പഞ്ചഭുജത്തിലെ ($n = 5$) കോണുകളുടെ തുക:
          $$S = (5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = \\mathbf{540^\\circ}$$</li>
        <li>തന്നിരിക്കുന്ന നാല് കോണുകളുടെ തുക:
          $$100^\\circ + 110^\\circ + 120^\\circ + 90^\\circ = 420^\\circ$$
          അതിനാൽ അഞ്ചാമത്തെ കോൺ:
          $$\\text{അഞ്ചാമത്തെ കോൺ} = 540^\\circ - 420^\\circ = \\mathbf{120^\\circ}$$</li>
      </ol>`,
    tested_en: 'Angle sum of a polygon and finding missing interior angle.',
    tested_ml: 'ബഹുഭുജത്തിലെ കോണുകളുടെ തുകയും അജ്ഞാത കോൺ കാണലും.'
  },

  {
    id: 'w.m8.4.2',
    sec: '8.4.2',
    concept: 'm8.4.2.polygon-outer-angles',
    marks: 4,
    time: 180,
    title_en: 'Ratio of Interior to Exterior Angle',
    title_ml: 'ആന്തരകോണും ബാഹ്യകോണും തമ്മിലുള്ള അംശബന്ധം',
    prompt_en: `<p>In a regular polygon, the ratio of an interior angle to an exterior angle is $3 : 1$.</p>
      <ol type="a">
        <li>Find the measure of each exterior angle.</li>
        <li>Find the number of sides of this regular polygon.</li>
      </ol>`,
    prompt_ml: `<p>ഒരു സമബഹുഭുജത്തിലെ ആന്തരകോണും ബാഹ്യകോണും തമ്മിലുള്ള അംശബന്ധം $3 : 1$ ആണ്.</p>
      <ol type="a">
        <li>ഓരോ ബാഹ്യകോണിന്റെയും അളവ് കണ്ടെത്തുക.</li>
        <li>ഈ സമബഹുഭുജത്തിന് എത്ര വശങ്ങളുണ്ടെന്ന് കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Interior angle and exterior angle form a linear pair ($180^\\circ$).<br>
          Let the interior angle be $3x$ and exterior angle be $1x$.
          $$3x + x = 180^\\circ \\implies 4x = 180^\\circ \\implies x = 45^\\circ$$
          Therefore, each exterior angle is $\\mathbf{45^\\circ}$.</li>
        <li>Since the sum of exterior angles of any regular polygon is $360^\\circ$:
          $$n = \\frac{360^\\circ}{45^\\circ} = \\mathbf{8}$$
          The polygon has $\\mathbf{8\\text{ sides}}$ (regular octagon).</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ആന്തരകോണും ബാഹ്യകോണും ചേർന്ന് രേഖീയജോടി ഉണ്ടാക്കുന്നു ($180^\\circ$).<br>
          ആന്തരകോൺ $3x$, ബാഹ്യകോൺ $1x$ എന്നിരിക്കട്ടെ.
          $$3x + x = 180^\\circ \\implies 4x = 180^\\circ \\implies x = 45^\\circ$$
          അതിനാൽ ഓരോ ബാഹ്യകോണും $\\mathbf{45^\\circ}$ ആണ്.</li>
        <li>സമബഹുഭുജത്തിലെ ബാഹ്യകോണുകളുടെ തുക $360^\\circ$ ആയതിനാൽ:
          $$n = \\frac{360^\\circ}{45^\\circ} = \\mathbf{8}$$
          ഈ ബഹുഭുജത്തിന് $\\mathbf{8\\text{ വശങ്ങളുണ്ട്}}$ (സമഅഷ്ടഭുജം).</li>
      </ol>`,
    tested_en: 'Ratio of interior to exterior angles and calculating number of sides.',
    tested_ml: 'ആന്തരകോണും ബാഹ്യകോണും തമ്മിലുള്ള അംശബന്ധവും വശങ്ങളുടെ എണ്ണം കാണലും.'
  },

  {
    id: 'w.m8.4.3',
    sec: '8.4.3',
    concept: 'm8.4.3.regular-polygons',
    marks: 4,
    time: 180,
    title_en: 'Regular Polygon with 150° Interior Angle',
    title_ml: 'ആന്തരകോൺ 150° ആയ സമബഹുഭുജം',
    prompt_en: `<p>The measure of each interior angle of a regular polygon is $150^\\circ$.</p>
      <ol type="a">
        <li>What is the measure of each exterior angle?</li>
        <li>How many sides does this polygon have?</li>
        <li>What is the sum of all its interior angles?</li>
      </ol>`,
    prompt_ml: `<p>ഒരു സമബഹുഭുജത്തിലെ ഓരോ ആന്തരകോണിന്റെയും അളവ് $150^\\circ$ ആണ്.</p>
      <ol type="a">
        <li>ഓരോ ബാഹ്യകോണിന്റെയും അളവ് എത്ര?</li>
        <li>ഈ ബഹുഭുജത്തിന് എത്ര വശങ്ങളുണ്ട്?</li>
        <li>ഇതിലെ എല്ലാ ആന്തരകോണുകളുടെയും തുക എത്രയാണ്?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Exterior angle $= 180^\\circ - 150^\\circ = \\mathbf{30^\\circ}$.</li>
        <li>Number of sides $n = \\frac{360^\\circ}{30^\\circ} = \\mathbf{12\\text{ sides}}$ (dodecagon).</li>
        <li>Sum of interior angles:
          $$S = (12 - 2) \\times 180^\\circ = 10 \\times 180^\\circ = \\mathbf{1800^\\circ}$$
          (Alternatively: $12 \\times 150^\\circ = 1800^\\circ$).</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ബാഹ്യകോൺ $= 180^\\circ - 150^\\circ = \\mathbf{30^\\circ}$.</li>
        <li>വശങ്ങളുടെ എണ്ണം $n = \\frac{360^\\circ}{30^\\circ} = \\mathbf{12\\text{ വശങ്ങൾ}}$.</li>
        <li>ആന്തരകോണുകളുടെ തുക:
          $$S = (12 - 2) \\times 180^\\circ = 10 \\times 180^\\circ = \\mathbf{1800^\\circ}$$
          (അല്ലെങ്കിൽ: $12 \\times 150^\\circ = 1800^\\circ$).</li>
      </ol>`,
    tested_en: 'Properties of regular polygons with given interior angle.',
    tested_ml: 'ആന്തരകോൺ നൽകിയാൽ സമബഹുഭുജത്തിന്റെ സവിശേഷതകൾ കണ്ടെത്തൽ.'
  },

  {
    id: 'w.m8.4.4',
    sec: '8.4.4',
    concept: 'm8.4.4.polygon-diagonals',
    marks: 4,
    time: 180,
    title_en: 'Diagonals of a 9-Sided Polygon (Nonagon)',
    title_ml: '9 വശങ്ങളുള്ള ബഹുഭുജത്തിലെ വികർണ്ണങ്ങൾ',
    prompt_en: `<p>Consider a 9-sided polygon (nonagon).</p>
      <ol type="a">
        <li>How many diagonals can be drawn from a single vertex?</li>
        <li>Into how many triangles do these diagonals divide the polygon?</li>
        <li>What is the total number of diagonals in this polygon?</li>
      </ol>`,
    prompt_ml: `<p>9 വശങ്ങളുള്ള ഒരു ബഹുഭുജം (നവഭുജം) പരിഗണിക്കുക.</p>
      <ol type="a">
        <li>ഒരു മൂലയിൽ നിന്നും എത്ര വികർണ്ണങ്ങൾ വരയ്ക്കാം?</li>
        <li>ഈ വികർണ്ണങ്ങൾ ബഹുഭുജത്തെ എത്ര ത്രികോണങ്ങളായി വിഭജിക്കുന്നു?</li>
        <li>ഈ ബഹുഭുജത്തിൽ ആകെ എത്ര വികർണ്ണങ്ങളുണ്ട്?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>From a single vertex, the number of diagonals is:
          $$n - 3 = 9 - 3 = \\mathbf{6\\text{ diagonals}}$$</li>
        <li>These diagonals divide the polygon into:
          $$n - 2 = 9 - 2 = \\mathbf{7\\text{ triangles}}$$</li>
        <li>The total number of diagonals is:
          $$D = \\frac{n(n - 3)}{2} = \\frac{9 \\times 6}{2} = \\mathbf{27\\text{ diagonals}}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ഒരു മൂലയിൽ നിന്നും വരയ്ക്കാവുന്ന വികർണ്ണങ്ങൾ:
          $$n - 3 = 9 - 3 = \\mathbf{6\\text{ വികർണ്ണങ്ങൾ}}$$</li>
        <li>ഈ വികർണ്ണങ്ങൾ ബഹുഭുജത്തെ വിഭജിക്കുന്ന ത്രികോണങ്ങളുടെ എണ്ണം:
          $$n - 2 = 9 - 2 = \\mathbf{7\\text{ ത്രികോണങ്ങൾ}}$$</li>
        <li>ആകെ വികർണ്ണങ്ങളുടെ എണ്ണം:
          $$D = \\frac{n(n - 3)}{2} = \\frac{9 \\times 6}{2} = \\mathbf{27\\text{ വികർണ്ണങ്ങൾ}}$$</li>
      </ol>`,
    tested_en: 'Calculating single-vertex and total diagonals of a polygon.',
    tested_ml: 'ബഹുഭുജത്തിലെ ഒരു മൂലയിൽ നിന്നുള്ളതും ആകെ വരുന്നതുമായ വികർണ്ണങ്ങൾ കാണൽ.'
  },

  {
    id: 'w.m8.4.5',
    sec: '8.4.1',
    concept: 'm8.4.1.polygon-angle-sum',
    marks: 4,
    time: 180,
    title_en: 'Can the Sum of Angles of a Polygon be 1600°?',
    title_ml: 'ഒരു ബഹുഭുജത്തിലെ കോണുകളുടെ തുക 1600° ആകുമോ?',
    prompt_en: `<p>Investigate the following regarding polygon angle sums:</p>
      <ol type="a">
        <li>Is it possible for the sum of angles of any polygon to be $1600^\\circ$? Explain mathematically.</li>
        <li>What is the closest multiple of $180^\\circ$ to $1600^\\circ$, and what number of sides corresponds to that polygon?</li>
        <li>Find the sum of angles of a polygon having $15$ sides.</li>
      </ol>`,
    prompt_ml: `<p>ബഹുഭുജങ്ങളുടെ കോണുകളുടെ തുകയുമായി ബന്ധപ്പെട്ട് താഴെ പറയുന്നവ പരിശോധിക്കുക:</p>
      <ol type="a">
        <li>ഏതെങ്കിലും ഒരു ബഹുഭുജത്തിലെ കോണുകളുടെ തുക $1600^\\circ$ ആകാൻ സാധ്യതയുണ്ടോ? ഗണിതപരമായി വിശദീകരിക്കുക.</li>
        <li>$1600^\\circ$-നോട് ഏറ്റവും അടുത്ത $180^\\circ$-ന്റെ ഗുണിതം ഏതാണ്? അത് എത്ര വശങ്ങളുള്ള ബഹുഭുജത്തിന്റെ കോണുകളുടെ തുകയാണ്?</li>
        <li>$15$ വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിലെ കോണുകളുടെ തുക കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>The sum of angles of any polygon with $n$ sides is $(n - 2) \\times 180^\\circ$.<br>
          Dividing $1600$ by $180$:
          $$\\frac{1600}{180} = \\frac{80}{9} = 8\\frac{8}{9}$$
          Since this is not a natural number, $n - 2$ cannot be a whole number. Therefore, <b>no polygon can have an angle sum of $1600^\\circ$</b>.
        </li>
        <li>The closest multiples of $180^\\circ$ are:
          $$8 \\times 180^\\circ = 1440^\\circ \\implies n - 2 = 8 \\implies n = \\mathbf{10\\text{ sides}}$$
          $$9 \\times 180^\\circ = 1620^\\circ \\implies n - 2 = 9 \\implies n = \\mathbf{11\\text{ sides}}$$
          The closest value is $1620^\\circ$, corresponding to an $11$-sided polygon.
        </li>
        <li>For $n = 15$:
          $$S = (15 - 2) \\times 180^\\circ = 13 \\times 180^\\circ = \\mathbf{2340^\\circ}.$$
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$n$ വശങ്ങളുള്ള ഏതൊരു ബഹുഭുജത്തിലെയും കോണുകളുടെ തുക $(n - 2) \\times 180^\\circ$ ആണ്.<br>
          $1600$-നെ $180$ കൊണ്ട് ഹരിച്ചാൽ:
          $$\\frac{1600}{180} = \\frac{80}{9} = 8\\frac{8}{9}$$
          ഇതൊരു പൂർണ്ണസംഖ്യയല്ലാത്തതിനാൽ $n - 2$ ഒരു എണ്ണൽസംഖ്യയാകാൻ കഴിയില്ല. അതിനാൽ <b>ഒരു ബഹുഭുജത്തിലെയും കോണുകളുടെ തുക $1600^\\circ$ ആകാൻ കഴിയില്ല</b>.
        </li>
        <li>$1600^\\circ$-നോട് ഏറ്റവും അടുത്ത ഗുണിതങ്ങൾ:
          $$9 \\times 180^\\circ = 1620^\\circ \\implies n - 2 = 9 \\implies n = \\mathbf{11\\text{ വശങ്ങൾ}}$$
          ($11$ വശങ്ങളുള്ള ബഹുഭുജം).
        </li>
        <li>$n = 15$ ആകുമ്പോൾ:
          $$S = (15 - 2) \\times 180^\\circ = 13 \\times 180^\\circ = \\mathbf{2340^\\circ}.$$
        </li>
      </ol>`,
    tested_en: 'Testing divisibility of polygon angle sum by 180 degrees.',
    tested_ml: 'ബഹുഭുജത്തിലെ കോണുകളുടെ തുക 180-ന്റെ ഗുണിതമാണോ എന്ന് പരിശോധിക്കൽ.'
  },

  {
    id: 'w.m8.4.6',
    sec: '8.4.3',
    concept: 'm8.4.3.regular-polygons',
    marks: 4,
    time: 180,
    title_en: 'Regular Polygons with Integer Exterior Angles',
    title_ml: 'ബാഹ്യകോണുകൾ പൂർണ്ണസംഖ്യകളായ സമബഹുഭുജങ്ങൾ',
    prompt_en: `<p>Consider the exterior angles of regular polygons.</p>
      <ol type="a">
        <li>Can a regular polygon have each exterior angle equal to $50^\\circ$? Why or why not?</li>
        <li>If each exterior angle of a regular polygon is $24^\\circ$, find its number of sides and the measure of each interior angle.</li>
        <li>What is the smallest number of sides a regular polygon can have, and what is its exterior angle?</li>
      </ol>`,
    prompt_ml: `<p>സമബഹുഭുജങ്ങളിലെ ബാഹ്യകോണുകൾ പരിഗണിക്കുക.</p>
      <ol type="a">
        <li>ഒരു സമബഹുഭുജത്തിലെ ഓരോ ബാഹ്യകോണും $50^\\circ$ ആകാൻ കഴിയുമോ? എന്തുകൊണ്ട്?</li>
        <li>ഒരു സമബഹുഭുജത്തിലെ ഓരോ ബാഹ്യകോണും $24^\\circ$ ആയാൽ, അതിന്റെ വശങ്ങളുടെ എണ്ണവും ഓരോ ആന്തരകോണിന്റെ അളവും കാണുക.</li>
        <li>ഒരു സമബഹുഭുജത്തിന് ഉണ്ടാകാവുന്ന ഏറ്റവും കുറഞ്ഞ വശങ്ങളുടെ എണ്ണം എത്രയാണ്? അതിന്റെ ബാഹ്യകോൺ എത്രയാണ്?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>For a regular polygon, the number of sides is $n = \\frac{360^\\circ}{\\text{exterior angle}}$.
          $$\\frac{360}{50} = 7.2$$
          Since the number of sides must be an integer, <b>no regular polygon can have an exterior angle of $50^\\circ$</b>.
        </li>
        <li>For an exterior angle of $24^\\circ$:
          $$n = \\frac{360^\\circ}{24^\\circ} = \\mathbf{15\\text{ sides}}$$
          Each interior angle $= 180^\\circ - 24^\\circ = \\mathbf{156^\\circ}$.
        </li>
        <li>The smallest number of sides for any polygon is $\\mathbf{3}$ (equilateral triangle).<br>
          Its exterior angle is $\\frac{360^\\circ}{3} = \\mathbf{120^\\circ}$.
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>സമബഹുഭുജത്തിന്റെ വശങ്ങളുടെ എണ്ണം $n = \\frac{360^\\circ}{\\text{ബാഹ്യകോൺ}}$ ആണ്.
          $$\\frac{360}{50} = 7.2$$
          വശങ്ങളുടെ എണ്ണം ഒരു പൂർണ്ണസംഖ്യയായിരിക്കണം എന്നതിനാൽ, <b>ബാഹ്യകോൺ $50^\\circ$ ആയ സമബഹുഭുജം ഉണ്ടാകില്ല</b>.
        </li>
        <li>ബാഹ്യകോൺ $24^\\circ$ ആയാൽ:
          $$n = \\frac{360^\\circ}{24^\\circ} = \\mathbf{15\\text{ വശങ്ങൾ}}$$
          ഓരോ ആന്തരകോണും $= 180^\\circ - 24^\\circ = \\mathbf{156^\\circ}$.
        </li>
        <li>ഏറ്റവും കുറഞ്ഞ വശങ്ങളുടെ എണ്ണം $\\mathbf{3}$ ആണ് (സമഭുജ ത്രികോണം).<br>
          അതിന്റെ ബാഹ്യകോൺ $= \\frac{360^\\circ}{3} = \\mathbf{120^\\circ}$.
        </li>
      </ol>`,
    tested_en: 'Properties of exterior angles of regular polygons and factor condition on 360 degrees.',
    tested_ml: 'സമബഹുഭുജങ്ങളിലെ ബാഹ്യകോണുകളുടെ സവിശേഷതകളും 360-ന്റെ ഘടക പരിശോധനയും.'
  }
);
