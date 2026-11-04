/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 6: Construction of Quadrilaterals (ചതുർഭുജ നിർമ്മിതി)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.6.1',
    concept: 'm8.6.1.quad-uniqueness',
    sec: '8.6.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'How many independent measurements are required to uniquely determine a general quadrilateral?',
    prompt_ml: 'ഒരു സാധാരണ ചതുർഭുജം കൃത്യമായി നിർണ്ണയിക്കാൻ എത്ര സ്വതന്ത്ര അളവുകൾ ആവശ്യമാണ്?',
    options_en: [
      { k: 'A', t: '3' },
      { k: 'B', t: '4' },
      { k: 'C', t: '5' },
      { k: 'D', t: '6' }
    ],
    options_ml: [
      { k: 'A', t: '3' },
      { k: 'B', t: '4' },
      { k: 'C', t: '5' },
      { k: 'D', t: '6' }
    ],
    answer: 'C',
    solution_en: 'A triangle requires 3 independent measurements. A quadrilateral is divided by a diagonal into two triangles sharing a common edge ($3 + 3 - 1 = 5$). Thus, exactly 5 independent measurements are needed.',
    solution_ml: 'ഒരു ത്രികോണത്തിന് 3 അളവുകൾ ആവശ്യമാണ്. വികർണ്ണം ഉപയോഗിച്ച് ചതുർഭുജത്തെ രണ്ട് ത്രികോണങ്ങളാക്കുമ്പോൾ ഒരു വശം പൊതുവായതിനാൽ ($3 + 3 - 1 = 5$), കൃത്യം 5 സ്വതന്ത്ര അളവുകൾ ആവശ്യമാണ്.',
    tested_en: 'Number of measurements to fix a quadrilateral.',
    tested_ml: 'ചതുർഭുജം നിർണ്ണയിക്കാൻ ആവശ്യമായ അളവുകൾ.'
  },

  {
    id: 'obj.m8.6.2',
    concept: 'm8.6.1.quad-uniqueness',
    sec: '8.6.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Four metal rods of lengths 5 cm, 6 cm, 7 cm, and 8 cm are hinged at their ends to form a quadrilateral. Can the shape of this frame be changed without altering the rod lengths?',
    prompt_ml: '5 cm, 6 cm, 7 cm, 8 cm നീളമുള്ള നാല് കമ്പികൾ അവയുടെ അറ്റങ്ങളിൽ യോജിപ്പിച്ച് ഒരു ചതുർഭുജ ചട്ടക്കൂട് ഉണ്ടാക്കുന്നു. കമ്പികളുടെ നീളം മാറ്റാതെ തന്നെ ഇതിന്റെ ആകൃതി മാറ്റാൻ കഴിയുമോ?',
    options_en: [
      { k: 'A', t: 'Yes, because a four-sided frame is not rigid and corner angles can flex' },
      { k: 'B', t: 'No, because four side lengths fix a quadrilateral uniquely' },
      { k: 'C', t: 'Only if two pairs of opposite sides are parallel' },
      { k: 'D', t: 'Only if one corner angle is an exact right angle' }
    ],
    options_ml: [
      { k: 'A', t: 'കഴിയും, കാരണം നാല് വശങ്ങൾ മാത്രമുള്ള ചതുർഭുജം ദൃഢമല്ല, കോണുകൾ മാറ്റാം' },
      { k: 'B', t: 'കഴിയില്ല, കാരണം നാല് വശങ്ങൾ നൽകിയാൽ ചതുർഭുജം മാറില്ല' },
      { k: 'C', t: 'എതിർവശങ്ങൾ സമാന്തരമായാൽ മാത്രമേ കഴിയൂ' },
      { k: 'D', t: 'ഒരു കോൺ മട്ടകോണായാൽ മാത്രമേ കഴിയൂ' }
    ],
    answer: 'A',
    solution_en: 'Unlike a triangle, a four-bar linkage is not rigid. The corner angles can freely pivot without altering side lengths, producing infinitely many different quadrilaterals with the same 4 sides.',
    solution_ml: 'ത്രികോണത്തിൽ നിന്ന് വ്യത്യസ്തമായി, ചതുർഭുജ ചട്ടക്കൂട് ഒരു ദൃഢരൂപമല്ല. വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ മൂലകളിലെ കോണുകൾ മാറ്റി വ്യത്യസ്ത ചതുർഭുജങ്ങളാക്കാം.',
    tested_en: 'Non-rigidity of a four-bar linkage.',
    tested_ml: 'ചതുർഭുജ ചട്ടക്കൂടിന്റെ അയവ് (ദൃഢതയില്ലായ്മ).'
  },

  {
    id: 'obj.m8.6.3',
    concept: 'm8.6.2.four-sides-one-diagonal',
    sec: '8.6.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'When constructing a quadrilateral $ABCD$ given the lengths of all four sides and the diagonal $AC$, which figure is constructed first?',
    prompt_ml: 'നാല് വശങ്ങളും വികർണ്ണം $AC$-യും നൽകിയാൽ ചതുർഭുജം $ABCD$ നിർമ്മിക്കുമ്പോൾ ആദ്യം വരയ്ക്കേണ്ട രൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: 'Triangle ABC using sides AB, BC, and diagonal AC' },
      { k: 'B', t: 'A ray perpendicular to side AB' },
      { k: 'C', t: 'Triangle BCD using diagonal BD' },
      { k: 'D', t: 'An arc of radius AD from an arbitrary center' }
    ],
    options_ml: [
      { k: 'A', t: 'AB, BC എന്നീ വശങ്ങളും AC എന്ന വികർണ്ണവും ഉപയോഗിച്ച് ത്രികോണം ABC' },
      { k: 'B', t: 'AB-ക്ക് ലംബമായ ഒരു കിരണം' },
      { k: 'C', t: 'BD വികർണ്ണം ഉപയോഗിച്ച് ത്രികോണം BCD' },
      { k: 'D', t: 'ഏതെങ്കിലും ബിന്ദുവിൽ നിന്ന് AD ആരത്തിൽ ഒരു ചാപം' }
    ],
    answer: 'A',
    solution_en: 'The diagonal $AC$ and two adjacent sides $AB, BC$ form $\\triangle ABC$, whose 3 sides are known. It is constructed first using the SSS triangle construction.',
    solution_ml: 'വികർണ്ണം $AC$, വശങ്ങളായ $AB, BC$ എന്നിവയുടെ മൂന്ന് അളവുകളും അറിയാവുന്നതിനാൽ $SSS$ രീതിയിൽ ആദ്യം $\\triangle ABC$ നിർമ്മിക്കുന്നു.',
    tested_en: 'Base triangle construction in quadrilateral with diagonal.',
    tested_ml: 'വികർണ്ണം നൽകിയുള്ള ചതുർഭുജ നിർമ്മിതിയിലെ അടിസ്ഥാന ത്രികോണം.'
  },

  {
    id: 'obj.m8.6.4',
    concept: 'm8.6.2.four-sides-one-diagonal',
    sec: '8.6.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'A student attempts to construct a quadrilateral $ABCD$ with $AB = 3\\text{ cm}, BC = 4\\text{ cm}, CD = 5\\text{ cm}, DA = 6\\text{ cm}$ and diagonal $AC = 8\\text{ cm}$. Why does the construction fail?',
    prompt_ml: '$AB = 3\\text{ cm}, BC = 4\\text{ cm}, CD = 5\\text{ cm}, DA = 6\\text{ cm}$, വികർണ്ണം $AC = 8\\text{ cm}$ എന്നീ അളവുകളിൽ ചതുർഭുജം നിർമ്മിക്കാൻ ശ്രമിച്ചാൽ അത് പരാജയപ്പെടുന്നത് എന്തുകൊണ്ട്?',
    options_en: [
      { k: 'A', t: 'In triangle ABC, AB + BC = 7 cm < AC = 8 cm, violating the triangle inequality' },
      { k: 'B', t: 'The sum of all four sides exceeds 16 cm' },
      { k: 'C', t: 'The diagonal must always be equal to DA + CD' },
      { k: 'D', t: 'The angle between AB and BC cannot be calculated' }
    ],
    options_ml: [
      { k: 'A', t: 'ത്രികോണം ABC-യിൽ AB + BC = 7 cm < AC = 8 cm ആയതിനാൽ ത്രികോണ അസമത പാലിക്കുന്നില്ല' },
      { k: 'B', t: 'നാല് വശങ്ങളുടെയും തുക 16 cm-ൽ കൂടുതലായതുകൊണ്ട്' },
      { k: 'C', t: 'വികർണ്ണത്തിന്റെ നീളം എപ്പോഴും DA + CD-ക്ക് തുല്യമായിരിക്കണം' },
      { k: 'D', t: 'AB, BC എന്നിവയ്ക്കിടയിലെ കോൺ കണ്ടെത്താൻ സാധിക്കാത്തതുകൊണ്ട്' }
    ],
    answer: 'A',
    solution_en: 'For $\\triangle ABC$ to be constructed, the sum of any two sides must exceed the third: $AB + BC = 3 + 4 = 7\\text{ cm} < 8\\text{ cm} = AC$. The arcs drawn with radii 3 cm and 4 cm will never intersect.',
    solution_ml: '$\\triangle ABC$ നിർമ്മിക്കാൻ കഴിയണമെങ്കിൽ രണ്ട് വശങ്ങളുടെ തുക മൂന്നാമത്തെ വശത്തേക്കാൾ വലുതായിരിക്കണം: $AB + BC = 3 + 4 = 7\\text{ cm} < 8\\text{ cm} = AC$. അതിനാൽ ചാപങ്ങൾ പരസ്പരം കൂട്ടിമുട്ടില്ല.',
    tested_en: 'Triangle inequality condition for quadrilateral construction.',
    tested_ml: 'നിർമ്മിതിയിലെ ത്രികോണ അസമതാ വ്യവസ്ഥ.'
  },

  {
    id: 'obj.m8.6.5',
    concept: 'm8.6.3.sides-and-angles',
    sec: '8.6.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In quadrilateral $PQRS$, three angles are given: $\\angle P = 75^\\circ$, $\\angle Q = 105^\\circ$, and $\\angle R = 80^\\circ$. What is the measure of the fourth angle $\\angle S$?',
    prompt_ml: 'ചതുർഭുജം $PQRS$-ൽ മൂന്ന് കോണുകൾ നൽകിയിരിക്കുന്നു: $\\angle P = 75^\\circ$, $\\angle Q = 105^\\circ$, $\\angle R = 80^\\circ$. എങ്കിൽ നാലാമത്തെ കോണായ $\\angle S$-ന്റെ അളവ് എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '100°' },
      { k: 'B', t: '90°' },
      { k: 'C', t: '110°' },
      { k: 'D', t: '80°' }
    ],
    options_ml: [
      { k: 'A', t: '100°' },
      { k: 'B', t: '90°' },
      { k: 'C', t: '110°' },
      { k: 'D', t: '80°' }
    ],
    answer: 'A',
    solution_en: 'The sum of all four angles in any quadrilateral is $360^\\circ$. $\\angle S = 360^\\circ - (75^\\circ + 105^\\circ + 80^\\circ) = 360^\\circ - 260^\\circ = 100^\\circ$.',
    solution_ml: 'ചതുർഭുജത്തിലെ കോണുകളുടെ തുക $360^\\circ$ ആണ്. അതിനാൽ $\\angle S = 360^\\circ - (75^\\circ + 105^\\circ + 80^\\circ) = 360^\\circ - 260^\\circ = 100^\\circ$.',
    tested_en: 'Fourth angle calculation using quadrilateral angle sum.',
    tested_ml: 'ചതുർഭുജത്തിലെ നാലാമത്തെ കോൺ കണ്ടെത്തൽ.'
  },

  {
    id: 'obj.m8.6.6',
    concept: 'm8.6.3.sides-and-angles',
    sec: '8.6.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following sets of four angles CANNOT belong to any quadrilateral?',
    prompt_ml: 'താഴെ തന്നിരിക്കുന്നതിൽ ഒരു ചതുർഭുജത്തിന്റെ കോണുകളാകാൻ സാധിക്കാത്തത് ഏതാണ്?',
    options_en: [
      { k: 'A', t: '70°, 80°, 100°, 110°' },
      { k: 'B', t: '90°, 90°, 90°, 90°' },
      { k: 'C', t: '110°, 120°, 130°, 20°' },
      { k: 'D', t: '85°, 95°, 105°, 75°' }
    ],
    options_ml: [
      { k: 'A', t: '70°, 80°, 100°, 110°' },
      { k: 'B', t: '90°, 90°, 90°, 90°' },
      { k: 'C', t: '110°, 120°, 130°, 20°' },
      { k: 'D', t: '85°, 95°, 105°, 75°' }
    ],
    answer: 'C',
    solution_en: 'The sum of all four angles must be exactly $360^\\circ$. In option C: $110^\\circ + 120^\\circ + 130^\\circ + 20^\\circ = 380^\\circ \\ne 360^\\circ$, which is impossible.',
    solution_ml: 'ചതുർഭുജത്തിലെ നാല് കോണുകളുടെ തുക കൃത്യം $360^\\circ$ ആയിരിക്കണം. ഓപ്ഷൻ C-യിൽ: $110^\\circ + 120^\\circ + 130^\\circ + 20^\\circ = 380^\\circ \\ne 360^\\circ$ ആയതിനാൽ ഇത് സാധ്യമല്ല.',
    tested_en: 'Quadrilateral angle sum property constraint.',
    tested_ml: 'ചതുർഭുജ കോൺതുകാ വ്യവസ്ഥ.'
  },

  {
    id: 'obj.m8.6.7',
    concept: 'm8.6.4.special-quadrilaterals',
    sec: '8.6.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'How many independent measurements are needed to uniquely construct a square?',
    prompt_ml: 'ഒരു സമചതുരം കൃത്യമായി നിർമ്മിക്കാൻ എത്ര സ്വതന്ത്ര അളവുകൾ ആവശ്യമാണ്?',
    options_en: [
      { k: 'A', t: '1 (side length or diagonal)' },
      { k: 'B', t: '2 (side and angle)' },
      { k: 'C', t: '3 (two sides and diagonal)' },
      { k: 'D', t: '4 (all four sides)' }
    ],
    options_ml: [
      { k: 'A', t: '1 (ഒരു വശത്തിന്റെ നീളം അല്ലെങ്കിൽ വികർണ്ണം)' },
      { k: 'B', t: '2 (വശവും കോണും)' },
      { k: 'C', t: '3 (രണ്ട് വശങ്ങളും ഒരു വികർണ്ണവും)' },
      { k: 'D', t: '4 (നാല് വശങ്ങളും)' }
    ],
    answer: 'A',
    solution_en: 'In a square, all four sides are equal and all four angles are $90^\\circ$. Only 1 independent measurement (the side length $a$ or diagonal $d$) is needed.',
    solution_ml: 'സമചതുരത്തിൽ എല്ലാ വശങ്ങളും തുല്യവും കോണുകൾ $90^\\circ$ യുമാണ്. അതിനാൽ 1 അളവ് മാത്രം (വശം $a$ അല്ലെങ്കിൽ വികർണ്ണം $d$) മതിയാകും.',
    tested_en: 'Single measurement sufficiency for square.',
    tested_ml: 'സമചതുര നിർമ്മിതിയിലെ കുറഞ്ഞ അളവ്.'
  },

  {
    id: 'obj.m8.6.8',
    concept: 'm8.6.4.special-quadrilaterals',
    sec: '8.6.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'A rhombus $ABCD$ is constructed using diagonals $AC = 8\\text{ cm}$ and $BD = 6\\text{ cm}$. In the perpendicular bisector method, what distance is marked from the midpoint $O$ of $AC$ on each side of the bisector?',
    prompt_ml: '$AC = 8\\text{ cm}, BD = 6\\text{ cm}$ എന്നീ വികർണ്ണങ്ങൾ നൽകിയാൽ ലംബസമഭാജി രീതിയിൽ റോംബസ് നിർമ്മിക്കുമ്പോൾ, $AC$-യുടെ മധ്യബിന്ദുവായ $O$-യിൽ നിന്നും ലംബരേഖയുടെ ഇരുവശങ്ങളിലേക്കും അടയാളപ്പെടുത്തേണ്ട നീളം എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '3 cm' },
      { k: 'B', t: '4 cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '8 cm' }
    ],
    options_ml: [
      { k: 'A', t: '3 cm' },
      { k: 'B', t: '4 cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '8 cm' }
    ],
    answer: 'A',
    solution_en: 'The diagonals of a rhombus bisect each other perpendicularly. The second diagonal $BD = 6\\text{ cm}$ is bisected at $O$, so the distance marked on either side of $O$ along the bisector is $\\frac{BD}{2} = \\frac{6}{2} = 3\\text{ cm}$.',
    solution_ml: 'റോംബസിന്റെ വികർണ്ണങ്ങൾ പരസ്പരം ലംബമായി സമഭാഗം ചെയ്യുന്നു. അതിനാൽ രണ്ടാം വികർണ്ണമായ $BD = 6\\text{ cm}$-ന്റെ പകുതിയായ $\\frac{6}{2} = 3\\text{ cm}$ വീതമാണ് $O$-യിൽ നിന്നും ഇരുവശങ്ങളിലേക്കും അടയാളപ്പെടുത്തേണ്ടത്.',
    tested_en: 'Rhombus diagonal perpendicular bisector property.',
    tested_ml: 'റോംബസിന്റെ വികർണ്ണ ലംബസമഭാജി സവിശേഷത.'
  }
);

/* ── Level 2: Written Practice Exercises (SCERT Textbook) ────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.6.0',
    sec: '8.6.1',
    concept: 'm8.6.1.quad-uniqueness',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Minimum Measurements to Fix a Quadrilateral',
    title_ml: 'ചതുർഭുജം നിർണ്ണയിക്കാൻ ആവശ്യമായ കുറഞ്ഞ അളവുകൾ',
    prompt_en: `<p>A student has 4 strips of wood of lengths $4\\text{ cm}, 5\\text{ cm}, 6\\text{ cm},$ and $7\\text{ cm}$.</p>
      <ol type="a">
        <li>Can these four strips uniquely determine the shape of a quadrilateral? Explain why or why not.</li>
        <li>How many additional measurements are needed to make the frame rigid and unique?</li>
        <li>List four different standard combinations of 5 measurements that can uniquely determine a quadrilateral.</li>
      </ol>`,
    prompt_ml: `<p>ഒരു വിദ്യാർത്ഥിയുടെ പക്കൽ $4\\text{ cm}, 5\\text{ cm}, 6\\text{ cm}, 7\\text{ cm}$ നീളമുള്ള 4 കമ്പികളുണ്ട്.</p>
      <ol type="a">
        <li>ഈ 4 അളവുകൾ കൊണ്ട് ഒരേയൊരു നിശ്ചിത ആകൃതിയുള്ള ചതുർഭുജം നിർമ്മിക്കാൻ കഴിയുമോ? എന്തുകൊണ്ട്?</li>
        <li>ഈ ചട്ടക്കൂട് ദൃഢമാക്കാനും ഒരേയൊരു ചതുർഭുജമായി ഉറപ്പിക്കാനും എത്ര അധിക അളവുകൾ കൂടി വേണം?</li>
        <li>ഒരു ചതുർഭുജം കൃത്യമായി നിർണ്ണയിക്കാൻ സാധിക്കുന്ന 5 അളവുകളുടെ 4 വ്യത്യസ്ത രീതികൾ എഴുതുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>No.</b> Four sides alone do not determine a unique quadrilateral because a 4-bar linkage is not rigid. The corner angles can be altered freely without changing the side lengths, yielding infinitely many different quadrilaterals.</li>
        <li><b>1 additional measurement</b> (such as one diagonal or one angle), making a total of <b>5 independent measurements</b>. A diagonal divides the quadrilateral into two rigid triangles.</li>
        <li>Four standard combinations:
          <ul>
            <li>Four sides and one diagonal</li>
            <li>Three sides and two diagonals</li>
            <li>Two adjacent sides and three angles</li>
            <li>Three sides and two included angles</li>
          </ul></li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>ഇല്ല.</b> നാല് വശങ്ങൾ മാത്രം നൽകിയാൽ ചതുർഭുജം നിർണ്ണയിക്കാനാവില്ല. കാരണം ചതുർഭുജ ചട്ടക്കൂട് ദൃഢമല്ല. വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ കോണുകൾ മാറ്റി അസംഖ്യം ചതുർഭുജങ്ങൾ നിർമ്മിക്കാം.</li>
        <li><b>1 അധിക അളവ് കൂടി വേണം</b> (ഉദാഹരണത്തിന് ഒരു വികർണ്ണമോ ഒരു കോണോ), അങ്ങനെ ആകെ <b>5 സ്വതന്ത്ര അളവുകൾ</b> ആവശ്യമാണ്. ഒരു വികർണ്ണം ചതുർഭുജത്തെ രണ്ട് ദൃഢ ത്രികോണങ്ങളായി ഉറപ്പിക്കുന്നു.</li>
        <li>നാല് പ്രധാന രീതികൾ:
          <ul>
            <li>നാല് വശങ്ങളും ഒരു വികർണ്ണവും</li>
            <li>മൂന്ന് വശങ്ങളും രണ്ട് വികർണ്ണങ്ങളും</li>
            <li>രണ്ട് അടുത്തടുത്ത വശങ്ങളും മൂന്ന് കോണുകളും</li>
            <li>മൂന്ന് വശങ്ങളും അവയ്ക്കിടയിലെ രണ്ട് കോണുകളും</li>
          </ul></li>
      </ol>`,
    tested_en: 'Minimum independent measurements and non-rigidity of quadrilateral.',
    tested_ml: 'ചതുർഭുജ നിർണ്ണയത്തിലെ സ്വതന്ത്ര അളവുകളും ചട്ടക്കൂടിന്റെ ദൃഢതയില്ലായ്മയും.'
  },

  {
    id: 'w.m8.6.1',
    sec: '8.6.2',
    concept: 'm8.6.2.four-sides-one-diagonal',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Constructing Quadrilateral with Four Sides and One Diagonal',
    title_ml: 'നാല് വശങ്ങളും ഒരു വികർണ്ണവും നൽകിയുള്ള നിർമ്മിതി',
    prompt_en: `<p>Construct a quadrilateral $ABCD$ in which $AB = 4.5\\text{ cm}$, $BC = 5.5\\text{ cm}$, $CD = 4\\text{ cm}$, $DA = 6\\text{ cm}$, and diagonal $AC = 7\\text{ cm}$.</p>
      <ol type="a">
        <li>Check the triangle inequality for $\\triangle ABC$ and $\\triangle ADC$ to confirm that the construction is possible.</li>
        <li>Write down the detailed step-by-step construction procedure.</li>
      </ol>`,
    prompt_ml: `<p>$AB = 4.5\\text{ cm}$, $BC = 5.5\\text{ cm}$, $CD = 4\\text{ cm}$, $DA = 6\\text{ cm}$, വികർണ്ണം $AC = 7\\text{ cm}$ അളവുകളുള്ള $ABCD$ എന്ന ചതുർഭുജം നിർമ്മിക്കുക.</p>
      <ol type="a">
        <li>$\\triangle ABC$, $\\triangle ADC$ എന്നീ രണ്ട് ത്രികോണങ്ങളിലും ത്രികോണ അസമത പരിശോധിച്ച് നിർമ്മാണം സാധ്യമാണെന്ന് ഉറപ്പുവരുത്തുക.</li>
        <li>ഘട്ടം ഘട്ടമായുള്ള നിർമ്മാണ രീതി വിവരിക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>Triangle inequality check:</b>
          <ul>
            <li>In $\\triangle ABC$: sides are $4.5\\text{ cm}, 5.5\\text{ cm}, 7\\text{ cm}$.<br>
              $4.5 + 5.5 = 10 > 7$, $4.5 + 7 = 11.5 > 5.5$, and $5.5 + 7 = 12.5 > 4.5$. (Valid!)</li>
            <li>In $\\triangle ADC$: sides are $6\\text{ cm}, 4\\text{ cm}, 7\\text{ cm}$.<br>
              $6 + 4 = 10 > 7$, $4 + 7 = 11 > 6$, and $6 + 7 = 13 > 4$. (Valid!)</li>
          </ul>
          Both triangles satisfy the triangle inequality, so the construction is possible.</li>
        <li><b>Steps of Construction:</b>
          <ol>
            <li>Draw base segment $AB = 4.5\\text{ cm}$ using a ruler.</li>
            <li>With $B$ as center and radius $5.5\\text{ cm}$, draw an arc.</li>
            <li>With $A$ as center and radius $7\\text{ cm}$, draw another arc cutting the previous arc at point $C$.</li>
            <li>Join $BC$ and $AC$. This completes the base triangle $\\triangle ABC$.</li>
            <li>With $A$ as center and radius $6\\text{ cm}$, draw an arc on the opposite side of $AC$ from $B$.</li>
            <li>With $C$ as center and radius $4\\text{ cm}$, draw an arc cutting the previous arc at point $D$.</li>
            <li>Join $AD$ and $CD$. The required quadrilateral $ABCD$ is complete.</li>
          </ol></li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>ത്രികോണ അസമതാ പരിശോധന:</b>
          <ul>
            <li>$\\triangle ABC$-യിൽ: വശങ്ങൾ $4.5\\text{ cm}, 5.5\\text{ cm}, 7\\text{ cm}$.<br>
              $4.5 + 5.5 = 10 > 7$, $4.5 + 7 = 11.5 > 5.5$, $5.5 + 7 = 12.5 > 4.5$. (ശരിയാണ്!)</li>
            <li>$\\triangle ADC$-യിൽ: വശങ്ങൾ $6\\text{ cm}, 4\\text{ cm}, 7\\text{ cm}$.<br>
              $6 + 4 = 10 > 7$, $4 + 7 = 11 > 6$, $6 + 7 = 13 > 4$. (ശരിയാണ്!)</li>
          </ul>
          രണ്ട് ത്രികോണങ്ങളും ത്രികോണ അസമത പാലിക്കുന്നതിനാൽ നിർമ്മാണം സാധ്യമാണ്.</li>
        <li><b>നിർമ്മാണ ഘട്ടങ്ങൾ:</b>
          <ol>
            <li>സ്കെയിൽ ഉപയോഗിച്ച് $AB = 4.5\\text{ cm}$ വരയ്ക്കുക.</li>
            <li>$B$ കേന്ദ്രമാക്കി $5.5\\text{ cm}$ ആരത്തിൽ ഒരു ചാപം വരയ്ക്കുക.</li>
            <li>$A$ കേന്ദ്രമാക്കി $7\\text{ cm}$ ആരത്തിൽ മറ്റൊരു ചാപം വരച്ച് മുമ്പത്തെ ചാപത്തെ $C$-യിൽ ഖണ്ഡിക്കുക.</li>
            <li>$BC, AC$ എന്നിവ യോജിപ്പിക്കുക. ഇതോടെ $\\triangle ABC$ പൂർത്തിയാകുന്നു.</li>
            <li>$AC$-യുടെ മറുഭാഗത്ത്, $A$ കേന്ദ്രമാക്കി $6\\text{ cm}$ ആരത്തിൽ ഒരു ചാപം വരയ്ക്കുക.</li>
            <li>$C$ കേന്ദ്രമാക്കി $4\\text{ cm}$ ആരത്തിൽ ചാപം വരച്ച് $D$ കണ്ടെത്തുക.</li>
            <li>$AD, CD$ എന്നിവ യോജിപ്പിക്കുക. $ABCD$ എന്ന ചതുർഭുജം പൂർത്തിയായി.</li>
          </ol></li>
      </ol>`,
    tested_en: 'Construction of quadrilateral with four sides and one diagonal.',
    tested_ml: 'നാല് വശങ്ങളും ഒരു വികർണ്ണവും നൽകിയുള്ള ചതുർഭുജ നിർമ്മിതി.'
  },

  {
    id: 'w.m8.6.2',
    sec: '8.6.3',
    concept: 'm8.6.3.sides-and-angles',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Quadrilateral with Two Adjacent Sides and Three Angles',
    title_ml: 'രണ്ട് അടുത്തടുത്ത വശങ്ങളും മൂന്ന് കോണുകളും നൽകിയുള്ള നിർമ്മിതി',
    prompt_en: `<p>Construct a quadrilateral $MIST$ where $MI = 3.5\\text{ cm}$, $IS = 6.5\\text{ cm}$, $\\angle M = 75^\\circ$, $\\angle I = 105^\\circ$, and $\\angle S = 120^\\circ$.</p>
      <ol type="a">
        <li>Calculate the fourth angle $\\angle T$.</li>
        <li>Explain the construction steps starting with side $IS$ as the base.</li>
      </ol>`,
    prompt_ml: `<p>$MI = 3.5\\text{ cm}$, $IS = 6.5\\text{ cm}$, $\\angle M = 75^\\circ$, $\\angle I = 105^\\circ$, $\\angle S = 120^\\circ$ അളവുകളുള്ള $MIST$ എന്ന ചതുർഭുജം നിർമ്മിക്കുക.</p>
      <ol type="a">
        <li>നാലാമത്തെ കോണായ $\\angle T$-യുടെ അളവ് കണക്കാക്കുക.</li>
        <li>$IS$ പാദമായി എടുത്ത് നിർമ്മിക്കുന്ന ഘട്ടങ്ങൾ വിവരിക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>Fourth angle calculation:</b>
          $$\\angle T = 360^\\circ - (\\angle M + \\angle I + \\angle S)$$
          $$\\angle T = 360^\\circ - (75^\\circ + 105^\\circ + 120^\\circ) = 360^\\circ - 300^\\circ = \\mathbf{60^\\circ}$$</li>
        <li><b>Construction Steps:</b>
          <ol>
            <li>Draw base segment $IS = 6.5\\text{ cm}$.</li>
            <li>At $I$, use a protractor to draw a ray making an angle of $105^\\circ$ with $IS$.</li>
            <li>Along this ray, cut off distance $IM = 3.5\\text{ cm}$ using a compass to locate vertex $M$.</li>
            <li>At $M$, draw a ray making an angle of $75^\\circ$ with segment $MI$.</li>
            <li>At $S$, draw a ray making an angle of $120^\\circ$ with segment $IS$.</li>
            <li>Extend the rays from $M$ and $S$ until they intersect at vertex $T$.</li>
            <li>Quadrilateral $MIST$ is complete with verified angle $\\angle T = 60^\\circ$.</li>
          </ol></li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>നാലാമത്തെ കോൺ കണക്കാക്കൽ:</b>
          $$\\angle T = 360^\\circ - (\\angle M + \\angle I + \\angle S)$$
          $$\\angle T = 360^\\circ - (75^\\circ + 105^\\circ + 120^\\circ) = 360^\\circ - 300^\\circ = \\mathbf{60^\\circ}$$</li>
        <li><b>നിർമ്മാണ ഘട്ടങ്ങൾ:</b>
          <ol>
            <li>പാദമായ $IS = 6.5\\text{ cm}$ വരയ്ക്കുക.</li>
            <li>പ്രൊട്രാക്റ്റർ ഉപയോഗിച്ച് $I$-ൽ $105^\\circ$ കോണളവിൽ ഒരു കിരണം വരയ്ക്കുക.</li>
            <li>ഈ കിരണത്തിൽ കോമ്പസ് ഉപയോഗിച്ച് $IM = 3.5\\text{ cm}$ നീളത്തിൽ $M$ അടയാളപ്പെടുത്തുക.</li>
            <li>$M$-ൽ $MI$-യുമായി $75^\\circ$ കോണളവിൽ ഒരു കിരണം വരയ്ക്കുക.</li>
            <li>$S$-ൽ $IS$-മായി $120^\\circ$ കോണളവിൽ കിരണം വരയ്ക്കുക.</li>
            <li>$M$-ൽ നിന്നും $S$-ൽ നിന്നുമുള്ള കിരണങ്ങൾ പരസ്പരം കൂട്ടിമുട്ടുന്ന ബിന്ദുവാണ് $T$.</li>
            <li>ഇതോടെ $MIST$ എന്ന ചതുർഭുജം പൂർത്തിയാകുന്നു (ഇവിടെ $\\angle T = 60^\\circ$ ആയിരിക്കും).</li>
          </ol></li>
      </ol>`,
    tested_en: 'Construction of quadrilateral with two adjacent sides and three angles.',
    tested_ml: 'രണ്ട് അടുത്തടുത്ത വശങ്ങളും മൂന്ന് കോണുകളും നൽകിയുള്ള ചതുർഭുജ നിർമ്മിതി.'
  },

  {
    id: 'w.m8.6.3',
    sec: '8.6.3',
    concept: 'm8.6.3.sides-and-angles',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Quadrilateral with Three Sides and Two Included Angles',
    title_ml: 'മൂന്ന് വശങ്ങളും അവയ്ക്കിടയിലെ രണ്ട് കോണുകളും നൽകിയുള്ള നിർമ്മിതി',
    prompt_en: `<p>Construct a quadrilateral $ABCD$ given that $AB = 4\\text{ cm}$, $BC = 5\\text{ cm}$, $CD = 4.5\\text{ cm}$, $\\angle B = 60^\\circ$, and $\\angle C = 90^\\circ$.</p>
      <ol type="a">
        <li>Explain why segment $BC$ should be chosen as the base.</li>
        <li>Write the detailed steps of construction.</li>
      </ol>`,
    prompt_ml: `<p>$AB = 4\\text{ cm}$, $BC = 5\\text{ cm}$, $CD = 4.5\\text{ cm}$, $\\angle B = 60^\\circ$, $\\angle C = 90^\\circ$ അളവുകളുള്ള $ABCD$ എന്ന ചതുർഭുജം നിർമ്മിക്കുക.</p>
      <ol type="a">
        <li>$BC$ എന്ന വശം എന്തുകൊണ്ട് പാദമായി തിരഞ്ഞെടുക്കണമെന്ന് വ്യക്തമാക്കുക.</li>
        <li>നിർമ്മാണ ഘട്ടങ്ങൾ വ്യക്തമായി എഴുതുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>Choice of base:</b>
          Segment $BC$ has both adjacent angles given ($\\angle B = 60^\\circ$ at vertex $B$ and $\\angle C = 90^\\circ$ at vertex $C$). Choosing $BC$ as base allows both adjacent rays to be drawn immediately from its two endpoints.</li>
        <li><b>Steps of Construction:</b>
          <ol>
            <li>Draw base segment $BC = 5\\text{ cm}$ using a ruler.</li>
            <li>At $B$, construct a ray making an angle of $60^\\circ$ with $BC$.</li>
            <li>With $B$ as center and radius $4\\text{ cm}$, draw an arc along this ray to mark vertex $A$.</li>
            <li>At $C$, construct a ray making a right angle ($90^\\circ$) with $BC$.</li>
            <li>With $C$ as center and radius $4.5\\text{ cm}$, draw an arc along this perpendicular ray to mark vertex $D$.</li>
            <li>Join vertices $A$ and $D$ with a straight line.</li>
            <li>The quadrilateral $ABCD$ is complete.</li>
          </ol></li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>പാദം തിരഞ്ഞെടുക്കൽ:</b>
          $BC$ എന്ന വശത്തിന്റെ രണ്ടറ്റങ്ങളിലുമുള്ള കോണുകൾ ($\\angle B = 60^\\circ$, $\\angle C = 90^\\circ$) നൽകിയിട്ടുണ്ട്. അതിനാൽ $BC$ പാദമായി എടുത്താൽ രണ്ടറ്റങ്ങളിൽ നിന്നും നേരിട്ട് കോൺ കിരണങ്ങൾ വരയ്ക്കാം.</li>
        <li><b>നിർമ്മാണ ഘട്ടങ്ങൾ:</b>
          <ol>
            <li>$BC = 5\\text{ cm}$ പാദരേഖ വരയ്ക്കുക.</li>
            <li>$B$-ൽ $BC$-യുമായി $60^\\circ$ കോണളവിൽ കിരണം വരയ്ക്കുക.</li>
            <li>$B$ കേന്ദ്രമാക്കി $4\\text{ cm}$ ആരത്തിൽ ഈ കിരണത്തിൽ ചാപം വരച്ച് $A$ അടയാളപ്പെടുത്തുക.</li>
            <li>$C$-ൽ $BC$-ക്ക് ലംബമായി ($90^\\circ$) കിരണം വരയ്ക്കുക.</li>
            <li>$C$ കേന്ദ്രമാക്കി $4.5\\text{ cm}$ ആരത്തിൽ ഈ ലംബത്തിൽ ചാപം വരച്ച് $D$ അടയാളപ്പെടുത്തുക.</li>
            <li>$A$-യും $D$-യും തമ്മിൽ വരച്ച് യോജിപ്പിക്കുക.</li>
            <li>$ABCD$ എന്ന ചതുർഭുജം പൂർത്തിയായി.</li>
          </ol></li>
      </ol>`,
    tested_en: 'Construction of quadrilateral with three sides and two included angles.',
    tested_ml: 'മൂന്ന് വശങ്ങളും അവയ്ക്കിടയിലെ രണ്ട് കോണുകളും നൽകിയുള്ള ചതുർഭുജ നിർമ്മിതി.'
  },

  {
    id: 'w.m8.6.4',
    sec: '8.6.4',
    concept: 'm8.6.4.special-quadrilaterals',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Construction of a Rhombus from Its Diagonals',
    title_ml: 'വികർണ്ണങ്ങൾ നൽകിയുള്ള റോംബസ് നിർമ്മിതി',
    prompt_en: `<p>Construct a rhombus $ABCD$ whose diagonals are $AC = 6\\text{ cm}$ and $BD = 8\\text{ cm}$.</p>
      <ol type="a">
        <li>State the key geometric property of the diagonals of a rhombus used in this construction.</li>
        <li>Describe the step-by-step construction using a ruler and compass.</li>
        <li>Calculate the exact side length of this rhombus using the Pythagorean theorem.</li>
      </ol>`,
    prompt_ml: `<p>വികർണ്ണങ്ങൾ $AC = 6\\text{ cm}$, $BD = 8\\text{ cm}$ ആയ $ABCD$ എന്ന റോംബസ് നിർമ്മിക്കുക.</p>
      <ol type="a">
        <li>ഈ നിർമ്മിതിക്ക് ഉപയോഗിക്കുന്ന റോംബസ് വികർണ്ണങ്ങളുടെ പ്രധാന സവിശേഷത പ്രസ്താവിക്കുക.</li>
        <li>സ്കെയിലും കോമ്പസും ഉപയോഗിച്ചുള്ള നിർമ്മാണ ഘട്ടങ്ങൾ എഴുതുക.</li>
        <li>പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് ഈ റോംബസിന്റെ ഒരു വശത്തിന്റെ നീളം കൃത്യമായി കണക്കാക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>Property:</b>
          The diagonals of a rhombus are <b>perpendicular bisectors of each other</b>. They intersect at right angles ($90^\\circ$) and divide each other into two equal halves.</li>
        <li><b>Steps of Construction:</b>
          <ol>
            <li>Draw diagonal $AC = 6\\text{ cm}$.</li>
            <li>Using a compass with radius greater than half of $AC$ ($> 3\\text{ cm}$), draw intersecting arcs above and below $AC$ from both $A$ and $C$ to construct the perpendicular bisector of $AC$.</li>
            <li>Mark the point where the bisector meets $AC$ as midpoint $O$ ($OA = OC = 3\\text{ cm}$).</li>
            <li>Since $BD = 8\\text{ cm}$, the half-length is $\\frac{8}{2} = 4\\text{ cm}$. With $O$ as center and radius $4\\text{ cm}$, cut the perpendicular bisector at points $B$ (above) and $D$ (below).</li>
            <li>Join $AB, BC, CD,$ and $DA$. The rhombus $ABCD$ is complete.</li>
          </ol></li>
        <li><b>Side length calculation:</b>
          $\\triangle AOB$ is a right-angled triangle with legs $OA = 3\\text{ cm}$ and $OB = 4\\text{ cm}$. By the Pythagorean theorem:
          $$\\text{Side } AB = \\sqrt{OA^2 + OB^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = \\mathbf{5\\text{ cm}}$$
          All four sides of the rhombus are equal to $\\mathbf{5\\text{ cm}}$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>സവിശേഷത:</b>
          റോംബസിന്റെ വികർണ്ണങ്ങൾ <b>പരസ്പരം ലംബമായി സമഭാഗം ചെയ്യുന്നു</b>. അവ $90^\\circ$-ൽ കൂട്ടിമുട്ടുകയും തുല്യമായി പകുക്കുകയും ചെയ്യുന്നു.</li>
        <li><b>നിർമ്മാണ ഘട്ടങ്ങൾ:</b>
          <ol>
            <li>$AC = 6\\text{ cm}$ എന്ന വികർണ്ണം വരയ്ക്കുക.</li>
            <li>കോമ്പസിൽ $AC$-യുടെ പകുതിയിലധികം നീളമെടുത്ത് $A, C$ എന്നിവയിൽ നിന്ന് മുകളിലേക്കും താഴേക്കും ചാപങ്ങൾ വരച്ച് $AC$-യുടെ ലംബസമഭാജി വരയ്ക്കുക.</li>
            <li>ലംബസമഭാജി $AC$-യെ ഖണ്ഡിക്കുന്ന മധ്യബിന്ദു $O$ എന്ന് അടയാളപ്പെടുത്തുക ($OA = OC = 3\\text{ cm}$).</li>
            <li>രണ്ടാം വികർണ്ണം $BD = 8\\text{ cm}$ ആയതിനാൽ പകുതി $\\frac{8}{2} = 4\\text{ cm}$ ആണ്. $O$ കേന്ദ്രമാക്കി $4\\text{ cm}$ ആരത്തിൽ ലംബരേഖയിൽ മുകളിലേക്ക് $B$-യും താഴേക്ക് $D$-യും അടയാളപ്പെടുത്തുക.</li>
            <li>$AB, BC, CD, DA$ എന്നിവ യോജിപ്പിക്കുക. $ABCD$ എന്ന റോംബസ് പൂർത്തിയായി.</li>
          </ol></li>
        <li><b>വശത്തിന്റെ നീളം കണക്കാക്കൽ:</b>
          $\\triangle AOB$ ഒരു മട്ടത്രികോണമാണ്. ഇതിന്റെ ലംബവശങ്ങൾ $OA = 3\\text{ cm}, OB = 4\\text{ cm}$ ആണ്. പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
          $$\\text{വശം } AB = \\sqrt{OA^2 + OB^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = \\mathbf{5\\text{ cm}}$$
          റോംബസിന്റെ നാല് വശങ്ങളും $\\mathbf{5\\text{ cm}}$ വീതമാണ്.</li>
      </ol>`,
    tested_en: 'Construction of rhombus from diagonals using perpendicular bisector.',
    tested_ml: 'വികർണ്ണങ്ങളുടെ ലംബസമഭാജി ഉപയോഗിച്ചുള്ള റോംബസ് നിർമ്മിതി.'
  },

  {
    id: 'w.m8.6.5',
    sec: '8.6.4',
    concept: 'm8.6.4.special-quadrilaterals',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Construction of a Parallelogram and Diagonal Properties',
    title_ml: 'സാമാന്തരിക നിർമ്മിതിയും വികർണ്ണ സവിശേഷതകളും',
    prompt_en: `<p>Construct a parallelogram $ABCD$ with adjacent sides $AB = 6\\text{ cm}$, $BC = 4\\text{ cm}$, and included angle $\\angle B = 70^\\circ$.</p>
      <ol type="a">
        <li>Find the values of $\\angle A$, $\\angle C$, and $\\angle D$.</li>
        <li>Describe the step-by-step construction of the parallelogram using a ruler and compass.</li>
        <li>If diagonal $AC$ is drawn, prove that $\\triangle ABC \\cong \\triangle CDA$.</li>
      </ol>`,
    prompt_ml: `<p>$AB = 6\\text{ cm}$, $BC = 4\\text{ cm}$, ഉൾപ്പെട്ട കോൺ $\\angle B = 70^\\circ$ അളവുകളുള്ള $ABCD$ എന്ന സാമാന്തരികം നിർമ്മിക്കുക.</p>
      <ol type="a">
        <li>$\\angle A, \\angle C, \\angle D$ എന്നിവയുടെ അളവുകൾ കണ്ടെത്തുക.</li>
        <li>സ്കെയിലും കോമ്പസും ഉപയോഗിച്ച് സാമാന്തരികം നിർമ്മിക്കുന്ന ഘട്ടങ്ങൾ എഴുതുക.</li>
        <li>വികർണ്ണം $AC$ വരച്ചാൽ $\\triangle ABC \\cong \\triangle CDA$ ആണെന്ന് തെളിയിക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>Angles of parallelogram:</b>
          <ul>
            <li>Opposite angles are equal: $\\angle D = \\angle B = \\mathbf{70^\\circ}$.</li>
            <li>Consecutive angles are supplementary: $\\angle A = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$, and $\\angle C = \\angle A = \\mathbf{110^\\circ}$.</li>
          </ul></li>
        <li><b>Steps of Construction:</b>
          <ol>
            <li>Draw base segment $AB = 6\\text{ cm}$.</li>
            <li>At $B$, draw a ray making an angle of $70^\\circ$ with $AB$.</li>
            <li>With $B$ as center and radius $4\\text{ cm}$, draw an arc along this ray to mark vertex $C$.</li>
            <li>With $C$ as center and radius $6\\text{ cm}$ (opposite side $CD = AB$), draw an arc.</li>
            <li>With $A$ as center and radius $4\\text{ cm}$ (opposite side $AD = BC$), draw another arc cutting the previous arc at vertex $D$.</li>
            <li>Join $CD$ and $AD$. The required parallelogram $ABCD$ is complete.</li>
          </ol></li>
        <li><b>Congruence Proof:</b>
          <ul>
            <li>In $\\triangle ABC$ and $\\triangle CDA$:
              $$AB = CD \\quad (\\text{opposite sides of parallelogram})$$
              $$BC = DA \\quad (\\text{opposite sides of parallelogram})$$
              $$AC = CA \\quad (\\text{common side})$$</li>
            <li>By SSS congruence criterion, $\\mathbf{\\triangle ABC \\cong \\triangle CDA}$.</li>
          </ul></li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>സാമാന്തരികത്തിലെ കോണുകൾ:</b>
          <ul>
            <li>എതിർകോണുകൾ തുല്യമാണ്: $\\angle D = \\angle B = \\mathbf{70^\\circ}$.</li>
            <li>അടുത്തടുത്ത കോണുകളുടെ തുക $180^\\circ$ ആണ്: $\\angle A = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$, $\\angle C = \\angle A = \\mathbf{110^\\circ}$.</li>
          </ul></li>
        <li><b>നിർമ്മാണ ഘട്ടങ്ങൾ:</b>
          <ol>
            <li>$AB = 6\\text{ cm}$ പാദരേഖ വരയ്ക്കുക.</li>
            <li>$B$-ൽ $AB$-യുമായി $70^\\circ$ കോണളവിൽ കിരണം വരയ്ക്കുക.</li>
            <li>$B$ കേന്ദ്രമാക്കി $4\\text{ cm}$ ആരത്തിൽ ഈ കിരണത്തിൽ ചാപം വരച്ച് $C$ അടയാളപ്പെടുത്തുക.</li>
            <li>$C$ കേന്ദ്രമാക്കി $6\\text{ cm}$ ആരത്തിൽ ($CD = AB$) ഒരു ചാപം വരയ്ക്കുക.</li>
            <li>$A$ കേന്ദ്രമാക്കി $4\\text{ cm}$ ആരത്തിൽ ($AD = BC$) മറ്റൊരു ചാപം വരച്ച് $D$ കണ്ടെത്തുക.</li>
            <li>$CD, AD$ എന്നിവ യോജിപ്പിക്കുക. $ABCD$ എന്ന സാമാന്തരികം പൂർത്തിയായി.</li>
          </ol></li>
        <li><b>സർവ്വസമതാ തെളിവ്:</b>
          <ul>
            <li>$\\triangle ABC$, $\\triangle CDA$ എന്നിവയിൽ:
              $$AB = CD \\quad (\\text{സാമാന്തരികത്തിന്റെ എതിർവശങ്ങൾ})$$
              $$BC = DA \\quad (\\text{സാമാന്തരികത്തിന്റെ എതിർവശങ്ങൾ})$$
              $$AC = CA \\quad (\\text{പൊതുവായ വശം})$$</li>
            <li>$SSS$ സർവ്വസമതാ തത്വപ്രകാരം, $\\mathbf{\\triangle ABC \\cong \\triangle CDA}$.</li>
          </ul></li>
      </ol>`,
    tested_en: 'Construction of parallelogram from two sides and included angle, and diagonal congruency.',
    tested_ml: 'വശങ്ങളും ഉൾപ്പെട്ട കോണും നൽകിയുള്ള സാമാന്തരിക നിർമ്മിതിയും വികർണ്ണ സർവ്വസമതയും.'
  }
);
