/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 7 — Tangents (തൊടുവരകൾ)
   8 Objective (2 per section) + 6 Written Exercises (authentic SCERT textbook).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. All symbols in Malayalam fields wrapped in $...$.
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.7.1 Tangent Line & Perpendicular Radius
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.7.1',
    concept: 'm10.7.1.tangent-line-and-perpendicular-radius',
    sec: '10.7.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'What is the angle between the tangent at a point on a circle and the radius through that point of contact?',
    prompt_ml: 'വൃത്തത്തിലെ ഒരു ബിന്ദുവിലൂടെയുള്ള തൊടുവരയും ആ ബിന്ദുവിലൂടെയുള്ള ആരവും തമ്മിലുള്ള കോൺ എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$90^\\circ$' },
      { k: 'B', t: '$45^\\circ$' },
      { k: 'C', t: '$60^\\circ$' },
      { k: 'D', t: '$180^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$90^\\circ$' },
      { k: 'B', t: '$45^\\circ$' },
      { k: 'C', t: '$60^\\circ$' },
      { k: 'D', t: '$180^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The radius drawn to the point of contact of a tangent is always strictly perpendicular to the tangent line, making an angle of $90^\\circ$.',
    solution_ml: 'സ്പർശബിന്ദുവിലെ ആരവും തൊടുവരയും പരസ്പരം ലംബമായതിനാൽ കോൺ $90^\\circ$ ആയിരിക്കും.',
    tested_en: 'Perpendicularity of radius to tangent at point of contact.',
    tested_ml: 'തൊടുവരയും ആരവും തമ്മിലുള്ള ലംബബന്ധം.'
  },
  {
    id: 'obj.m10.7.2',
    concept: 'm10.7.1.tangent-line-and-perpendicular-radius',
    sec: '10.7.1',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A tangent $PQ$ of length 24 cm is drawn from point $Q$ to a circle of radius 7 cm touching at $P$. What is the distance from the circle centre $O$ to $Q$?',
    prompt_ml: '7 cm ആരമുള്ള വൃത്തത്തിലെ $P$ എന്ന ബിന്ദുവിലേക്ക് $Q$ ൽ നിന്ന് വരച്ച തൊടുവര $PQ$ ന്റെ നീളം 24 cm ആണ്. വൃത്തകേന്ദ്രം $O$ ൽ നിന്ന് $Q$ വിലേക്കുള്ള അകലം എത്ര?',
    options_en: [
      { k: 'A', t: '25 cm' },
      { k: 'B', t: '31 cm' },
      { k: 'C', t: '17 cm' },
      { k: 'D', t: '20 cm' }
    ],
    options_ml: [
      { k: 'A', t: '25 cm' },
      { k: 'B', t: '31 cm' },
      { k: 'C', t: '17 cm' },
      { k: 'D', t: '20 cm' }
    ],
    answer: 'A',
    solution_en: 'Triangle $OPQ$ is right-angled at $P$. $OQ = \\sqrt{OP^2 + PQ^2} = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$ cm.',
    solution_ml: 'മട്ടത്രികോണം $OPQ$ ൽ $\\angle P = 90^\\circ$. $OQ = \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$ cm.',
    tested_en: 'Pythagorean application on right triangle formed by tangent and radius.',
    tested_ml: 'തൊടുവര-ആരം മട്ടത്രികോണത്തിലെ പൈതഗോറസ് പ്രയോഗം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.2 Tangents from an External Point
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.7.3',
    concept: 'm10.7.2.tangents-from-an-external-point',
    sec: '10.7.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two tangents $PA$ and $PB$ are drawn from an external point $P$ to a circle with centre $O$. If $\\angle APB = 50^\\circ$, what is the measure of the central angle $\\angle AOB$?',
    prompt_ml: 'കേന്ദ്രമായ $O$ ഉള്ള വൃത്തത്തിലേക്ക് ബാഹ്യബിന്ദു $P$ യിൽ നിന്ന് വരച്ച തൊടുവരകളാണ് $PA, PB$. $\\angle APB = 50^\\circ$ ആയാൽ കേന്ദ്രകോൺ $\\angle AOB$ യുടെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$130^\\circ$' },
      { k: 'B', t: '$100^\\circ$' },
      { k: 'C', t: '$140^\\circ$' },
      { k: 'D', t: '$50^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$130^\\circ$' },
      { k: 'B', t: '$100^\\circ$' },
      { k: 'C', t: '$140^\\circ$' },
      { k: 'D', t: '$50^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The angle between the tangents and the central angle are supplementary: $\\angle AOB = 180^\\circ - \\angle APB = 180^\\circ - 50^\\circ = 130^\\circ$.',
    solution_ml: 'തൊടുവരകൾക്കിടയിലെ കോണും കേന്ദ്രകോണും അനുപൂരകങ്ങളാണ്: $\\angle AOB = 180^\\circ - 50^\\circ = 130^\\circ$.',
    tested_en: 'Supplementary relationship: ∠APB + ∠AOB = 180°.',
    tested_ml: 'തൊടുവര കോണും കേന്ദ്രകോണും തമ്മിലുള്ള അനുപൂരക ബന്ധം.'
  },
  {
    id: 'obj.m10.7.4',
    concept: 'm10.7.2.tangents-from-an-external-point',
    sec: '10.7.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If two tangents inclined at an angle of $60^\\circ$ are drawn to a circle of radius 3 cm, what is the length of each tangent?',
    prompt_ml: '3 cm ആരമുള്ള വൃത്തത്തിലേക്ക് പരസ്പരം $60^\\circ$ കോണിൽ രണ്ട് തൊടുവരകൾ വരച്ചാൽ ഓരോ തൊടുവരയുടെയും നീളം എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$3\\sqrt{3}$ cm' },
      { k: 'B', t: '6 cm' },
      { k: 'C', t: '$3$ cm' },
      { k: 'D', t: '$\\frac{3\\sqrt{3}}{2}$ cm' }
    ],
    options_ml: [
      { k: 'A', t: '$3\\sqrt{3}$ cm' },
      { k: 'B', t: '6 cm' },
      { k: 'C', t: '$3$ cm' },
      { k: 'D', t: '$\\frac{3\\sqrt{3}}{2}$ cm' }
    ],
    answer: 'A',
    solution_en: 'Line $OP$ bisects $\\angle APB$, so $\\angle APO = 30^\\circ$. In right $\\triangle OAP$, $\\tan 30^\\circ = \\frac{OA}{PA} = \\frac{3}{PA} \\implies PA = \\frac{3}{1/\\sqrt{3}} = 3\\sqrt{3}$ cm.',
    solution_ml: '$OP$ കോൺ സമഭാഗം ചെയ്യുന്നതിനാൽ $\\angle APO = 30^\\circ$. മട്ടത്രികോണം $OAP$ ൽ $\\tan 30^\\circ = \\frac{3}{PA} \\implies PA = 3\\sqrt{3}$ cm.',
    tested_en: 'Tangent length using trigonometry on bisected tangent angle.',
    tested_ml: 'ത്രികോണമിതി ഉപയോഗിച്ച് തൊടുവരയുടെ നീളം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.3 Incircle and Inradius of a Triangle
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.7.5',
    concept: 'm10.7.3.incircle-and-inradius',
    sec: '10.7.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A triangle has an area of $48\\text{ cm}^2$ and a perimeter of 24 cm. What is the radius of its incircle?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ് $48\\text{ cm}^2$ ഉം ചുറ്റളവ് 24 cm ഉം ആണ്. ഇതിന്റെ അന്തരാരം എത്ര?',
    options_en: [
      { k: 'A', t: '4 cm' },
      { k: 'B', t: '2 cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '8 cm' }
    ],
    options_ml: [
      { k: 'A', t: '4 cm' },
      { k: 'B', t: '2 cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '8 cm' }
    ],
    answer: 'A',
    solution_en: 'Semi-perimeter $s = \\frac{24}{2} = 12$ cm. Inradius $r = \\frac{A}{s} = \\frac{48}{12} = 4$ cm.',
    solution_ml: 'അർദ്ധചുറ്റളവ് $s = \\frac{24}{2} = 12$ cm. അന്തരാരം $r = \\frac{A}{s} = \\frac{48}{12} = 4$ cm.',
    tested_en: 'Calculating inradius from area and perimeter: r = A / s.',
    tested_ml: 'പരപ്പളവും ചുറ്റളവും ഉപയോഗിച്ച് അന്തരാരം കാണൽ: r = A / s.'
  },
  {
    id: 'obj.m10.7.6',
    concept: 'm10.7.3.incircle-and-inradius',
    sec: '10.7.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the inradius of a right-angled triangle with sides 5 cm, 12 cm, and 13 cm?',
    prompt_ml: 'വശങ്ങൾ 5 cm, 12 cm, 13 cm ആയ മട്ടത്രികോണത്തിന്റെ അന്തരാരം എത്ര?',
    options_en: [
      { k: 'A', t: '2 cm' },
      { k: 'B', t: '3 cm' },
      { k: 'C', t: '1 cm' },
      { k: 'D', t: '2.5 cm' }
    ],
    options_ml: [
      { k: 'A', t: '2 cm' },
      { k: 'B', t: '3 cm' },
      { k: 'C', t: '1 cm' },
      { k: 'D', t: '2.5 cm' }
    ],
    answer: 'A',
    solution_en: 'For right triangle: $r = \\frac{a + b - c}{2} = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2$ cm.',
    solution_ml: 'മട്ടത്രികോണത്തിന്റെ അന്തരാരം $r = \\frac{a + b - c}{2} = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2$ cm.',
    tested_en: 'Right triangle inradius formula: r = (a + b - c) / 2.',
    tested_ml: 'മട്ടത്രികോണ അന്തരാര സൂത്രവാക്യം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.4 Chord-Tangent Theorem & Intersecting Segments
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.7.7',
    concept: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A tangent $PT$ of length 6 cm is drawn from an external point $P$ to a circle. A secant through $P$ intersects the circle at $A$ and $B$. If $PA = 4$ cm, what is the length of $AB$?',
    prompt_ml: 'ബാഹ്യബിന്ദു $P$ യിൽ നിന്ന് വരച്ച തൊടുവര $PT$ യുടെ നീളം 6 cm ആണ്. $P$ യിലൂടെയുള്ള ഛേദകവര വൃത്തത്തെ $A, B$ എന്നിവയിൽ മുറിക്കുന്നു. $PA = 4$ cm ആയാൽ $AB$ യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '5 cm' },
      { k: 'B', t: '9 cm' },
      { k: 'C', t: '4 cm' },
      { k: 'D', t: '6 cm' }
    ],
    options_ml: [
      { k: 'A', t: '5 cm' },
      { k: 'B', t: '9 cm' },
      { k: 'C', t: '4 cm' },
      { k: 'D', t: '6 cm' }
    ],
    answer: 'A',
    solution_en: '$PA \\cdot PB = PT^2 \\implies 4 \\cdot PB = 6^2 = 36 \\implies PB = 9$ cm. Therefore, $AB = PB - PA = 9 - 4 = 5$ cm.',
    solution_ml: '$PA \\cdot PB = PT^2 \\implies 4 \\cdot PB = 36 \\implies PB = 9$ cm. അതിനാൽ $AB = PB - PA = 9 - 4 = 5$ cm.',
    tested_en: 'Tangent-secant theorem: PA · PB = PT².',
    tested_ml: 'തൊടുവര-ഛേദകവര സിദ്ധാന്തം.'
  },
  {
    id: 'obj.m10.7.8',
    concept: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'In a circle, a chord $AB$ subtends an angle of $55^\\circ$ at a point on the alternate segment. What is the angle between chord $AB$ and the tangent at point $A$?',
    prompt_ml: 'ഒരു വൃത്തത്തിലെ ഞാൺ $AB$ മറുഖണ്ഡത്തിലുണ്ടാക്കുന്ന കോൺ $55^\\circ$ ആണ്. $A$ യിലെ തൊടുവരയും ഞാൺ $AB$ യും തമ്മിലുള്ള കോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$55^\\circ$' },
      { k: 'B', t: '$125^\\circ$' },
      { k: 'C', t: '$35^\\circ$' },
      { k: 'D', t: '$110^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$55^\\circ$' },
      { k: 'B', t: '$125^\\circ$' },
      { k: 'C', t: '$35^\\circ$' },
      { k: 'D', t: '$110^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'By the Alternate Segment Theorem, the angle between the tangent and the chord equals the angle subtended by the chord in the alternate segment, which is $55^\\circ$.',
    solution_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തപ്രകാരം തൊടുവരയും ഞാണും തമ്മിലുള്ള കോൺ മറുഖണ്ഡത്തിലെ കോണിന് തുല്യമാണ്, അതിനാൽ $55^\\circ$.',
    tested_en: 'Alternate Segment Theorem equality of angles.',
    tested_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തത്തിലെ മറുഖണ്ഡ കോൺ തുല്യത.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.7.1 Tangent Line & Perpendicular Radius
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.7.1',
    concept: 'm10.7.1.tangent-line-and-perpendicular-radius',
    sec: '10.7.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A circle of radius 6 cm has a tangent drawn from an external point $P$. The point $P$ is at a distance of 10 cm from the centre $O$, touching the circle at $T$.\\n(a) What is the measure of the angle $\\angle PTO$?\\n(b) Using the Pythagorean theorem, calculate the length of the tangent $PT$.\\n(c) Find the area of the right-angled triangle $\\triangle PTO$.',
    prompt_ml: '6 cm ആരമുള്ള വൃത്തത്തിന് ബാഹ്യബിന്ദുവായ $P$ യിൽ നിന്ന് $T$ എന്ന സ്പർശബിന്ദുവിലേക്ക് ഒരു തൊടുവര വരച്ചിരിക്കുന്നു. കേന്ദ്രം $O$ ൽ നിന്ന് $P$ യിലേക്കുള്ള അകലം 10 cm ആണ്.\\n(a) $\\angle PTO$ യുടെ അളവ് എത്ര?\\n(b) പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് തൊടുവര $PT$ യുടെ നീളം കാണുക.\\n(c) മട്ടത്രികോണം $PTO$ യുടെ പരപ്പളവ് കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>The radius through the point of contact is strictly perpendicular to the tangent, so $\\angle PTO = 90^\\circ$.</li>
  <li>In right $\\triangle PTO$, the hypotenuse is $OP = 10$ cm and leg $OT = 6$ cm. By Pythagoras:
  $$PT = \\sqrt{OP^2 - OT^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}$$</li>
  <li>Area of $\\triangle PTO = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times PT \\times OT = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2$.</li>
</ol>
<p><b>Final Answer:</b> (a) 90°; (b) 8 cm; (c) 24 cm²</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Angle PTO stated as 90° with rationale: 1 mark</li>
  <li>Pythagorean calculation of PT = 8 cm: 2 marks</li>
  <li>Area calculation = 24 cm²: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>സ്പർശബിന്ദുവിലെ ആരം തൊടുവരയ്ക്ക് ലംബമായതിനാൽ $\\angle PTO = 90^\\circ$.</li>
  <li>മട്ടത്രികോണം $PTO$ ൽ കർണ്ണം $OP = 10$ cm, ആരം $OT = 6$ cm. പൈതഗോറസ് പ്രകാരം:
  $$PT = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}$$</li>
  <li>$\\triangle PTO$ യുടെ പരപ്പളവ് $= \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2$.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 90°; (b) 8 cm; (c) 24 cm²</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കോൺ 90° എന്ന് എഴുതൽ: 1 മാർക്ക്</li>
  <li>പൈതഗോറസ് പ്രകാരം PT = 8 cm കാണൽ: 2 മാർക്ക്</li>
  <li>പരപ്പളവ് 24 cm² കാണൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'The radius through the point of contact is perpendicular to the tangent, so $\\angle PTO = 90^\\circ$.',
      'In right $\\triangle PTO$, hypotenuse is $OP = 10$ cm and leg $OT = 6$ cm. By Pythagoras: $PT = \\sqrt{OP^2 - OT^2} = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$ cm.',
      'Area of $\\triangle PTO = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times PT \\times OT = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2$.'
    ],
    steps_ml: [
      'സ്പർശബിന്ദുവിലെ ആരം തൊടുവരയ്ക്ക് ലംബമായതിനാൽ $\\angle PTO = 90^\\circ$.',
      'മട്ടത്രികോണം $PTO$ ൽ കർണ്ണം $OP = 10$ cm, ആരം $OT = 6$ cm. പൈതഗോറസ് പ്രകാരം: $PT = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$ cm.',
      '$\\triangle PTO$ യുടെ പരപ്പളവ് $= \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2$.'
    ],
    rubric_en: [
      'Angle PTO stated as 90° with rationale: 1 mark',
      'Pythagorean calculation of PT = 8 cm: 2 marks',
      'Area calculation = 24 cm²: 1 mark'
    ],
    rubric_ml: [
      'കോൺ 90° എന്ന് എഴുതൽ: 1 മാർക്ക്',
      'പൈതഗോറസ് പ്രകാരം PT = 8 cm കാണൽ: 2 മാർക്ക്',
      'പരപ്പളവ് 24 cm² കാണൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) 90°; (b) 8 cm; (c) 24 cm²',
    answer_ml: '(a) 90°; (b) 8 cm; (c) 24 cm²'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.2 Tangents from an External Point
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.7.2',
    concept: 'm10.7.2.tangents-from-an-external-point',
    sec: '10.7.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Two tangents $PA$ and $PB$ are drawn from point $P$ to a circle with centre $O$. The angle between the tangents is $\\angle APB = 60^\\circ$.\\n(a) Find the measure of the central angle $\\angle AOB$.\\n(b) Prove that $\\triangle PAB$ is an equilateral triangle.\\n(c) If the radius of the circle is 5 cm, find the length of the chord $AB$.',
    prompt_ml: 'കേന്ദ്രമായ $O$ ഉള്ള വൃത്തത്തിലേക്ക് ബാഹ്യബിന്ദു $P$ യിൽ നിന്ന് $PA, PB$ എന്നീ രണ്ട് തൊടുവരകൾ വരച്ചിരിക്കുന്നു. തൊടുവരകൾക്കിടയിലെ കോൺ $\\angle APB = 60^\\circ$ ആണ്.\\n(a) കേന്ദ്രകോൺ $\\angle AOB$ യുടെ അളവ് കാണുക.\\n(b) $\\triangle PAB$ ഒരു സമഭുജ ത്രികോണമാണെന്ന് തെളിയിക്കുക.\\n(c) വൃത്തത്തിന്റെ ആരം 5 cm ആയാൽ $AB$ എന്ന ഞാണിന്റെ നീളം കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>The tangent angle and central angle are supplementary:
  $$\\angle AOB = 180^\\circ - \\angle APB = 180^\\circ - 60^\\circ = 120^\\circ$$</li>
  <li>Since tangents from an external point are equal in length, $PA = PB$. In $\\triangle PAB$, the base angles opposite to these equal sides are equal:
  $$\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = \\frac{120^\\circ}{2} = 60^\\circ$$
  Since all three angles are $60^\\circ$, $\\triangle PAB$ is equilateral.</li>
  <li>In $\\triangle AOB$, $OA = OB = 5$ cm and $\\angle AOB = 120^\\circ$. The perpendicular from $O$ to chord $AB$ bisects both the chord and the $120^\\circ$ angle into two $60^\\circ$ angles.
  $$\\frac{1}{2}AB = 5\\sin 60^\\circ = 5 \\times \\frac{\\sqrt{3}}{2} \\implies AB = 5\\sqrt{3}\\text{ cm}$$</li>
</ol>
<p><b>Final Answer:</b> (a) 120°; (b) Equilateral because PA = PB and all angles are 60°; (c) 5√3 cm</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Central angle calculation: 1 mark</li>
  <li>Equilateral triangle proof: 1.5 marks</li>
  <li>Chord length calculation: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>കേന്ദ്രകോൺ $\\angle AOB = 180^\\circ - 60^\\circ = 120^\\circ$.</li>
  <li>ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകളായതിനാൽ $PA = PB$. അതിനാൽ $\\triangle PAB$ ൽ തുല്യ വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ തുല്യമാണ്:
  $$\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$$
  മൂന്ന് കോണുകളും $60^\\circ$ ആയതിനാൽ $\\triangle PAB$ സമഭുജ ത്രികോണമാണ്.</li>
  <li>$OA = OB = 5$ cm, $\\angle AOB = 120^\\circ$ ആയതിനാൽ:
  $$AB = 2 \\times 5 \\sin 60^\\circ = 2 \\times 5 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\text{ cm}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 120°; (b) PA = PB ആയതിനാലും കോണുകൾ 60° ആയതിനാലും സമഭുജം; (c) 5√3 cm</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കേന്ദ്രകോൺ കാണൽ: 1 മാർക്ക്</li>
  <li>സമഭുജ ത്രികോണ തെളിവ്: 1.5 മാർക്ക്</li>
  <li>ഞാണിന്റെ നീളം കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      '$\\angle AOB = 180^\\circ - \\angle APB = 180^\\circ - 60^\\circ = 120^\\circ$.',
      'Since tangents from an external point are equal, $PA = PB$. Thus in $\\triangle PAB$, the angles opposite to these sides are equal: $\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$. All three angles are $60^\\circ$, so $\\triangle PAB$ is equilateral.',
      'In $\\triangle AOB$, $OA = OB = 5$ cm and $\\angle AOB = 120^\\circ$. The altitude from $O$ to $AB$ bisects $AB$ and the angle into two $60^\\circ$ angles. Each half is $5\\sin 60^\\circ = 5 \\times \\frac{\\sqrt{3}}{2}$, so total chord $AB = 5\\sqrt{3}$ cm.'
    ],
    steps_ml: [
      'കേന്ദ്രകോൺ $\\angle AOB = 180^\\circ - 60^\\circ = 120^\\circ$.',
      'ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകളായതിനാൽ $PA = PB$. അതിനാൽ $\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$. മൂന്ന് കോണുകളും $60^\\circ$ ആയതിനാൽ $\\triangle PAB$ സമഭുജ ത്രികോണമാണ്.',
      '$OA = OB = 5$ cm, $\\angle AOB = 120^\\circ$ ആയതിനാൽ ഞാൺ $AB = 2 \\times 5 \\sin 60^\\circ = 5\\sqrt{3}$ cm.'
    ],
    rubric_en: [
      'Central angle calculation: 1 mark',
      'Equilateral triangle proof: 1.5 marks',
      'Chord length calculation: 1.5 marks'
    ],
    rubric_ml: [
      'കേന്ദ്രകോൺ കാണൽ: 1 മാർക്ക്',
      'സമഭുജ ത്രികോണ തെളിവ്: 1.5 മാർക്ക്',
      'ഞാണിന്റെ നീളം കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) 120°; (b) Equilateral because PA = PB and all angles are 60°; (c) 5√3 cm',
    answer_ml: '(a) 120°; (b) PA = PB ആയതിനാലും കോണുകൾ 60° ആയതിനാലും സമഭുജം; (c) 5√3 cm'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.3 Incircle and Inradius of a Triangle
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.7.3',
    concept: 'm10.7.3.incircle-and-inradius',
    sec: '10.7.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'In a right-angled triangle, the perpendicular sides are 12 cm and 16 cm.\\n(a) Calculate the hypotenuse of the triangle.\\n(b) Calculate the area and semi-perimeter of the triangle.\\n(c) Find the inradius $r$ of the triangle.',
    prompt_ml: 'ഒരു മട്ടത്രികോണത്തിന്റെ ലംബവശങ്ങൾ 12 cm, 16 cm ആണ്.\\n(a) ത്രികോണത്തിന്റെ കർണ്ണം കാണുക.\\n(b) ത്രികോണത്തിന്റെ പരപ്പളവും അർദ്ധചുറ്റളവും കാണുക.\\n(c) ത്രികോണത്തിന്റെ അന്തരാരം $r$ കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Hypotenuse $c = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ cm.</li>
  <li>Area $A = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ cm}^2$. Semiperimeter $s = \\frac{12 + 16 + 20}{2} = \\frac{48}{2} = 24$ cm.</li>
  <li>Inradius $r = \\frac{A}{s} = \\frac{96}{24} = 4$ cm. (Alternatively using right-triangle formula: $r = \\frac{a + b - c}{2} = \\frac{12 + 16 - 20}{2} = \\frac{8}{2} = 4$ cm).</li>
</ol>
<p><b>Final Answer:</b> (a) 20 cm; (b) Area = 96 cm², s = 24 cm; (c) r = 4 cm</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Hypotenuse calculation: 1 mark</li>
  <li>Area and semiperimeter: 1.5 marks</li>
  <li>Inradius calculation: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>കർണ്ണം $c = \\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$ cm.</li>
  <li>പരപ്പളവ് $A = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ cm}^2$. അർദ്ധചുറ്റളവ് $s = \\frac{12 + 16 + 20}{2} = 24$ cm.</li>
  <li>അന്തരാരം $r = \\frac{A}{s} = \\frac{96}{24} = 4$ cm (അല്ലെങ്കിൽ $r = \\frac{12 + 16 - 20}{2} = 4$ cm).</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 20 cm; (b) പരപ്പളവ് = 96 cm², s = 24 cm; (c) r = 4 cm</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കർണ്ണം കാണൽ: 1 മാർക്ക്</li>
  <li>പരപ്പളവും അർദ്ധചുറ്റളവും: 1.5 മാർക്ക്</li>
  <li>അന്തരാരം കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Hypotenuse $c = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ cm.',
      'Area $A = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ cm}^2$. Semiperimeter $s = \\frac{12 + 16 + 20}{2} = \\frac{48}{2} = 24$ cm.',
      'Inradius $r = \\frac{A}{s} = \\frac{96}{24} = 4$ cm. (Alternatively using right-triangle formula: $r = \\frac{a + b - c}{2} = \\frac{12 + 16 - 20}{2} = \\frac{8}{2} = 4$ cm).'
    ],
    steps_ml: [
      'കർണ്ണം $c = \\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$ cm.',
      'പരപ്പളവ് $A = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ cm}^2$. അർദ്ധചുറ്റളവ് $s = \\frac{12 + 16 + 20}{2} = 24$ cm.',
      'അന്തരാരം $r = \\frac{A}{s} = \\frac{96}{24} = 4$ cm (അല്ലെങ്കിൽ $r = \\frac{12 + 16 - 20}{2} = 4$ cm).'
    ],
    rubric_en: [
      'Hypotenuse calculation: 1 mark',
      'Area and semiperimeter: 1.5 marks',
      'Inradius calculation: 1.5 marks'
    ],
    rubric_ml: [
      'കർണ്ണം കാണൽ: 1 മാർക്ക്',
      'പരപ്പളവും അർദ്ധചുറ്റളവും: 1.5 മാർക്ക്',
      'അന്തരാരം കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) 20 cm; (b) Area = 96 cm², s = 24 cm; (c) r = 4 cm',
    answer_ml: '(a) 20 cm; (b) പരപ്പളവ് = 96 cm², s = 24 cm; (c) r = 4 cm'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.4 Chord-Tangent Theorem & Intersecting Segments
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.7.4',
    concept: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'From an external point $P$, a secant line cuts a circle at $A$ and $B$ such that $PA = 9$ cm and $AB = 7$ cm. A tangent from $P$ touches the circle at $T$.\\n(a) Find the total distance $PB$.\\n(b) Using the tangent-secant theorem, state the relation between $PA, PB$, and $PT$.\\n(c) Calculate the exact length of the tangent $PT$.',
    prompt_ml: 'ബാഹ്യബിന്ദു $P$ യിൽ നിന്നുള്ള ഛേദകവര വൃത്തത്തെ $A, B$ എന്നിവയിൽ മുറിക്കുന്നു. $PA = 9$ cm, $AB = 7$ cm ആണ്. $P$ യിൽ നിന്നുള്ള തൊടുവര $T$ ൽ വൃത്തത്തെ സ്പർശിക്കുന്നു.\\n(a) $PB$ യുടെ ആകെ നീളം കാണുക.\\n(b) തൊടുവര-ഛേദകവര സിദ്ധാന്തം എഴുതുക.\\n(c) തൊടുവര $PT$ യുടെ കൃത്യമായ നീളം കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>The total distance from external point $P$ to the far intersection $B$ is $PB = PA + AB = 9 + 7 = 16$ cm.</li>
  <li>By the tangent-secant theorem: $PA \\cdot PB = PT^2$.</li>
  <li>Substitute values: $PT^2 = 9 \\times 16 = 144$.</li>
  <li>Taking the square root gives $PT = \\sqrt{144} = 12$ cm.</li>
</ol>
<p><b>Final Answer:</b> (a) 16 cm; (b) PA · PB = PT²; (c) PT = 12 cm</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Finding PB = 16 cm: 1 mark</li>
  <li>Stating theorem formula: 1 mark</li>
  <li>Calculating PT² = 144: 1 mark</li>
  <li>Final answer PT = 12 cm: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>$P$ ൽ നിന്ന് $B$ യിലേക്കുള്ള ആകെ ദൂരം $PB = PA + AB = 9 + 7 = 16$ cm.</li>
  <li>സിദ്ധാന്തപ്രകാരം: $PA \\cdot PB = PT^2$.</li>
  <li>$PT^2 = 9 \\times 16 = 144$.</li>
  <li>$PT = \\sqrt{144} = 12$ cm.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 16 cm; (b) PA · PB = PT²; (c) PT = 12 cm</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>PB = 16 cm കാണൽ: 1 മാർക്ക്</li>
  <li>സിദ്ധാന്തം എഴുതൽ: 1 മാർക്ക്</li>
  <li>PT² = 144 കാണൽ: 1 മാർക്ക്</li>
  <li>അന്തിമ ഉത്തരം PT = 12 cm: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'The total distance from external point $P$ to the far intersection $B$ is $PB = PA + AB = 9 + 7 = 16$ cm.',
      'By the tangent-secant theorem: $PA \\cdot PB = PT^2$.',
      'Substitute values: $PT^2 = 9 \\times 16 = 144$.',
      'Taking the square root gives $PT = \\sqrt{144} = 12$ cm.'
    ],
    steps_ml: [
      '$P$ ൽ നിന്ന് $B$ യിലേക്കുള്ള ആകെ ദൂരം $PB = PA + AB = 9 + 7 = 16$ cm.',
      'സിദ്ധാന്തപ്രകാരം: $PA \\cdot PB = PT^2$.',
      '$PT^2 = 9 \\times 16 = 144$.',
      '$PT = \\sqrt{144} = 12$ cm.'
    ],
    rubric_en: [
      'Finding PB = 16 cm: 1 mark',
      'Stating theorem formula: 1 mark',
      'Calculating PT² = 144: 1 mark',
      'Final answer PT = 12 cm: 1 mark'
    ],
    rubric_ml: [
      'PB = 16 cm കാണൽ: 1 മാർക്ക്',
      'സിദ്ധാന്തം എഴുതൽ: 1 മാർക്ക്',
      'PT² = 144 കാണൽ: 1 മാർക്ക്',
      'അന്തിമ ഉത്തരം PT = 12 cm: 1 മാർക്ക്'
    ],
    answer_en: '(a) 16 cm; (b) PA · PB = PT²; (c) PT = 12 cm',
    answer_ml: '(a) 16 cm; (b) PA · PB = PT²; (c) PT = 12 cm'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.4 Circumscribed Quadrilateral (SCERT Textbook p.24-25, Pitot's Theorem)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.7.5',
    concept: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A quadrilateral $ABCD$ is circumscribed about a circle, touching the sides at points $P, Q, R, S$ respectively (SCERT textbook problem).\\n(a) Using the property of tangents from an external point, prove that the sums of opposite sides are equal: $AB + CD = AD + BC$.\\n(b) If $AB = 6\\text{ cm}$, $BC = 7\\text{ cm}$, and $CD = 4\\text{ cm}$, calculate the length of side $AD$.\\n(c) If the quadrilateral $ABCD$ is a parallelogram, prove that it must be a rhombus.',
    prompt_ml: 'ഒരു വൃത്തത്തെ സ്പർശിക്കുന്ന ഒരു ചതുർഭുജമാണ് $ABCD$. വശങ്ങൾ യഥാക്രമം $P, Q, R, S$ എന്നീ ബിന്ദുക്കളിൽ വൃത്തത്തെ സ്പർശിക്കുന്നു.\\n(a) ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകളുടെ പ്രത്യേകത ഉപയോഗിച്ച് എതിർവശങ്ങളുടെ തുകകൾ തുല്യമാണെന്ന് ($AB + CD = AD + BC$) തെളിയിക്കുക.\\n(b) $AB = 6\\text{ cm}, BC = 7\\text{ cm}, CD = 4\\text{ cm}$ ആയാൽ $AD$ യുടെ നീളം കണക്കാക്കുക.\\n(c) ഈ ചതുർഭുജം ഒരു സാമാന്തരികമാണെങ്കിൽ അതൊരു റോംബസ് ആയിരിക്കുമെന്ന് തെളിയിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>Proof of equal opposite side sums:</b> Tangents drawn from an external point are equal in length:
  $$AP = AS = a, \\quad BP = BQ = b, \\quad CR = CQ = c, \\quad DR = DS = d$$
  Sum of opposite sides:
  $$AB + CD = (AP + BP) + (CR + DR) = a + b + c + d$$
  $$AD + BC = (AS + DS) + (BQ + CQ) = a + d + b + c = a + b + c + d$$
  Therefore, $AB + CD = AD + BC$.</li>
  <li><b>Calculate AD:</b>
  $$AB + CD = AD + BC \\implies 6 + 4 = AD + 7 \\implies 10 = AD + 7 \\implies AD = 10 - 7 = 3\\text{ cm}$$</li>
  <li><b>Parallelogram is a Rhombus:</b> In a parallelogram, opposite sides are equal: $AB = CD$ and $AD = BC$.
  Substituting into $AB + CD = AD + BC$:
  $$AB + AB = AD + AD \\implies 2AB = 2AD \\implies AB = AD$$
  Since adjacent sides are equal in a parallelogram, all four sides are equal ($AB = BC = CD = DA$). Thus, $ABCD$ is a rhombus.</li>
</ol>
<p><b>Final Answer:</b> (a) Proved: AB + CD = AD + BC; (b) AD = 3 cm; (c) Proved that parallelogram circumscribing a circle is a rhombus</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Proof of opposite side sum equality using tangent segments: 1.5 marks</li>
  <li>Calculation of AD = 3 cm: 1 mark</li>
  <li>Proof that parallelogram becomes a rhombus: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>എതിർവശങ്ങളുടെ തുകകളുടെ തുല്യത:</b> ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകൾ തുല്യമാണ്:
  $$AP = AS = a, \\quad BP = BQ = b, \\quad CR = CQ = c, \\quad DR = DS = d$$
  $$AB + CD = (a + b) + (c + d) = a + b + c + d$$
  $$AD + BC = (a + d) + (b + c) = a + b + c + d$$
  അതിനാൽ $AB + CD = AD + BC$.</li>
  <li><b>AD യുടെ നീളം കാണൽ:</b>
  $$6 + 4 = AD + 7 \\implies 10 = AD + 7 \\implies AD = 3\\text{ cm}$$</li>
  <li><b>സാമാന്തരികം റോംബസ് ആകുന്നു:</b> സാമാന്തരികത്തിൽ എതിർവശങ്ങൾ തുല്യമാണ് ($AB = CD, AD = BC$).
  $$AB + AB = AD + AD \\implies 2AB = 2AD \\implies AB = AD$$
  അടുത്തടുത്ത വശങ്ങൾ തുല്യമായതിനാൽ നാല് വശങ്ങളും തുല്യമാണ് ($AB = BC = CD = DA$). അതിനാൽ ഇത് ഒരു റോംബസ് ആണ്.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) AB + CD = AD + BC തെളിയിച്ചു; (b) AD = 3 cm; (c) സാമാന്തരികം റോംബസ് ആകുമെന്ന് തെളിയിച്ചു</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>തൊടുവര ഭാഗങ്ങൾ ഉപയോഗിച്ച് എതിർവശങ്ങളുടെ തുക തുല്യമാണെന്ന് തെളിയിക്കൽ: 1.5 മാർക്ക്</li>
  <li>AD = 3 cm കണക്കാക്കൽ: 1 മാർക്ക്</li>
  <li>സാമാന്തരികം റോംബസ് ആകുമെന്ന് സമർത്ഥിക്കൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Tangents from each vertex are equal: $AP = AS, BP = BQ, CR = CQ, DR = DS$.',
      'Summing opposite sides: $AB + CD = (AP + BP) + (CR + DR) = AP + BP + CR + DR = AS + BQ + CQ + DS = (AS + DS) + (BQ + CQ) = AD + BC$.',
      'Calculate $AD$: $6 + 4 = AD + 7 \\implies 10 = AD + 7 \\implies AD = 3$ cm.',
      'For a parallelogram, $AB = CD$ and $AD = BC$, so $2AB = 2AD \\implies AB = AD$. Therefore, all 4 sides are equal, making it a rhombus.'
    ],
    steps_ml: [
      'ഓരോ ശീർഷത്തിൽ നിന്നുമുള്ള തൊടുവരകൾ തുല്യമാണ്: $AP = AS, BP = BQ, CR = CQ, DR = DS$.',
      '$AB + CD = (AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ) = AD + BC$.',
      '$6 + 4 = AD + 7 \\implies AD = 3$ cm.',
      'സാമാന്തരികത്തിൽ $2AB = 2AD \\implies AB = AD$, അതിനാൽ നാല് വശങ്ങളും തുല്യമായി റോംബസ് ആകുന്നു.'
    ],
    rubric_en: [
      'Proof of opposite side sum equality using tangent segments: 1.5 marks',
      'Calculation of AD = 3 cm: 1 mark',
      'Proof that parallelogram becomes a rhombus: 1.5 marks'
    ],
    rubric_ml: [
      'തൊടുവര ഭാഗങ്ങൾ ഉപയോഗിച്ച് എതിർവശങ്ങളുടെ തുക തുല്യമാണെന്ന് തെളിയിക്കൽ: 1.5 മാർക്ക്',
      'AD = 3 cm കണക്കാക്കൽ: 1 mark',
      'സാമാന്തരികം റോംബസ് ആകുമെന്ന് സമർത്ഥിക്കൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) Proved: AB + CD = AD + BC; (b) AD = 3 cm; (c) Proved that parallelogram circumscribing a circle is a rhombus',
    answer_ml: '(a) AB + CD = AD + BC തെളിയിച്ചു; (b) AD = 3 cm; (c) സാമാന്തരികം റോംബസ് ആകുമെന്ന് തെളിയിച്ചു'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.4 Alternate Segment Angles in Triangles & Regular Polygons (SCERT p.21-22)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.7.6',
    concept: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Answer the following questions based on the Alternate Segment Theorem (SCERT textbook questions):\\n(a) A tangent line $XAY$ touches the circumcircle of $\\triangle ABC$ at vertex $A$. If $\\angle B = 65^\\circ$ and $\\angle C = 45^\\circ$, calculate the angles that the tangent makes with sides $AB$ and $AC$ (i.e. $\\angle XAB$ and $\\angle YAC$), and find $\\angle BAC$.\\n(b) A regular pentagon is inscribed in a circle. A tangent is drawn to the circle through one vertex of the pentagon. Calculate the angle which this tangent makes with each of the two adjacent sides of the pentagon meeting at that vertex.',
    prompt_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തം അടിസ്ഥാനമാക്കി താഴെ പറയുന്നവയ്ക്ക് ഉത്തരം കാണുക:\\n(a) $\\triangle ABC$ യുടെ പരിവൃത്തത്തിന് ശീർഷം $A$ യിലൂടെ വരച്ച തൊടുവരയാണ് $XAY$. $\\angle B = 65^\\circ, \\angle C = 45^\\circ$ ആയാൽ തൊടുവര $AB, AC$ എന്നീ വശങ്ങളുമായി ഉണ്ടാക്കുന്ന കോണുകളായ $\\angle XAB, \\angle YAC$ എന്നിവയുടെയും $\\angle BAC$ യുടെയും അളവുകൾ കാണുക.\\n(b) വൃത്തത്തിൽ ഒരു സമപഞ്ചഭുജം വരച്ചിരിക്കുന്നു. ഇതിന്റെ ഒരു ശീർഷത്തിലൂടെ വൃത്തത്തിന് ഒരു തൊടുവര വരച്ചാൽ, ആ ശീർഷത്തിൽ സംഗമിക്കുന്ന പഞ്ചഭുജത്തിന്റെ രണ്ട് വശങ്ങളുമായി തൊടുവര ഉണ്ടാക്കുന്ന കോണുകൾ കണക്കാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>Tangent angles with triangle sides:</b>
  <ul>
    <li>By the Alternate Segment Theorem, the angle between tangent ray $AX$ and chord $AB$ equals the angle subtended by chord $AB$ in the opposite segment, which is $\\angle C$:
    $$\\angle XAB = \\angle C = 45^\\circ$$</li>
    <li>Similarly, the angle between tangent ray $AY$ and chord $AC$ equals the angle in the alternate segment subtended by chord $AC$, which is $\\angle B$:
    $$\\angle YAC = \\angle B = 65^\\circ$$</li>
    <li>Angle $\\angle BAC = 180^\\circ - (65^\\circ + 45^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$.
    (Verification on straight line $XAY$: $45^\\circ + 70^\\circ + 65^\\circ = 180^\\circ$).</li>
  </ul></li>
  <li><b>Tangent angles with regular pentagon:</b>
  <ul>
    <li>A regular pentagon divides the circle into 5 equal arcs, so each side subtends a central angle of $\\frac{360^\\circ}{5} = 72^\\circ$.</li>
    <li>The angle subtended by each side of the pentagon in the alternate segment is half the central angle: $\\frac{72^\\circ}{2} = 36^\\circ$.</li>
    <li>By the Alternate Segment Theorem, the angle between the tangent at a vertex and each of the two adjacent sides meeting at that vertex equals the angle in the alternate segment:
    $$\\text{Angle} = 36^\\circ$$</li>
    <li>(Verification: Interior angle of regular pentagon is $\\frac{(5-2) \\times 180^\\circ}{5} = 108^\\circ$. On the straight tangent line: $36^\\circ + 108^\\circ + 36^\\circ = 180^\\circ$).</li>
  </ul></li>
</ol>
<p><b>Final Answer:</b> (a) ∠XAB = 45°, ∠YAC = 65°, ∠BAC = 70°; (b) 36° with each side</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Finding ∠XAB and ∠YAC using Alternate Segment Theorem: 1.5 marks</li>
  <li>Finding ∠BAC: 0.5 mark</li>
  <li>Regular pentagon central angle and alternate angle calculation: 1 mark</li>
  <li>Concluding tangent-side angle of 36° with reasoning: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>ത്രികോണ വശങ്ങളുമായുള്ള കോണുകൾ:</b>
  <ul>
    <li>തൊടുവര-ഞാൺ സിദ്ധാന്തപ്രകാരം $AB$ എന്ന ഞാണും തൊടുവര $AX$ ഉം തമ്മിലുള്ള കോൺ മറുഖണ്ഡത്തിലെ കോണായ $\\angle C$ ക്ക് തുല്യമാണ്:
    $$\\angle XAB = \\angle C = 45^\\circ$$</li>
    <li>അതുപോലെ $AC$ എന്ന ഞാണും തൊടുവര $AY$ ഉം തമ്മിലുള്ള കോൺ മറുഖണ്ഡത്തിലെ കോണായ $\\angle B$ ക്ക് തുല്യമാണ്:
    $$\\angle YAC = \\angle B = 65^\\circ$$</li>
    <li>$\\angle BAC = 180^\\circ - (65^\\circ + 45^\\circ) = 70^\\circ$. (നേർവരയിൽ $45^\\circ + 70^\\circ + 65^\\circ = 180^\\circ$).</li>
  </ul></li>
  <li><b>സമപഞ്ചഭുജവുമായുള്ള കോണുകൾ:</b>
  <ul>
    <li>സമപഞ്ചഭുജത്തിന്റെ ഓരോ വശവും കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $= \\frac{360^\\circ}{5} = 72^\\circ$.</li>
    <li>ഓരോ വശവും മറുഖണ്ഡത്തിലുണ്ടാക്കുന്ന കോൺ കേന്ദ്രകോണിന്റെ പകുതിയാണ്: $\\frac{72^\\circ}{2} = 36^\\circ$.</li>
    <li>തൊടുവര-ഞാൺ സിദ്ധാന്തപ്രകാരം തൊടുവര ശീർഷത്തിലെ ഇരുവശങ്ങളുമായും ഉണ്ടാക്കുന്ന ഓരോ കോണും മറുഖണ്ഡത്തിലെ കോണിന് തുല്യമാണ്:
    $$\\text{കോൺ} = 36^\\circ$$</li>
    <li>(പരിശോധന: പഞ്ചഭുജത്തിന്റെ ഒരു കോൺ $108^\\circ$ ആണ്. തൊടുവരയിൽ $36^\\circ + 108^\\circ + 36^\\circ = 180^\\circ$).</li>
  </ul></li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) $\\angle XAB = 45^\\circ, \\angle YAC = 65^\\circ, \\angle BAC = 70^\\circ$; (b) ഓരോ വശവുമായും $36^\\circ$</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>മറുഖണ്ഡ സിദ്ധാന്തം ഉപയോഗിച്ച് $\\angle XAB, \\angle YAC$ കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
  <li>$\\angle BAC = 70^\\circ$ കണ്ടെത്തൽ: 0.5 മാർക്ക്</li>
  <li>സമപഞ്ചഭുജത്തിന്റെ കേന്ദ്രകോണും മറുഖണ്ഡ കോണും കാണൽ: 1 മാർക്ക്</li>
  <li>തൊടുവര കോൺ $36^\\circ$ എന്ന് സമർത്ഥിക്കൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'By Alternate Segment Theorem: $\\angle XAB = \\angle C = 45^\\circ$ and $\\angle YAC = \\angle B = 65^\\circ$.',
      '$\\angle BAC = 180^\\circ - (65^\\circ + 45^\\circ) = 70^\\circ$.',
      'Each side of regular pentagon subtends central angle $\\frac{360^\\circ}{5} = 72^\\circ$.',
      'Alternate segment angle is $\\frac{72^\\circ}{2} = 36^\\circ$. By Alternate Segment Theorem, angle between tangent and each adjacent side is $36^\\circ$.'
    ],
    steps_ml: [
      'തൊടുവര-ഞാൺ സിദ്ധാന്തപ്രകാരം: $\\angle XAB = \\angle C = 45^\\circ$ ഉം $\\angle YAC = \\angle B = 65^\\circ$ ഉം ആണ്.',
      '$\\angle BAC = 180^\\circ - (65^\\circ + 45^\\circ) = 70^\\circ$.',
      'സമപഞ്ചഭുജത്തിന്റെ ഒരു വശത്തിന്റെ കേന്ദ്രകോൺ $= \\frac{360^\\circ}{5} = 72^\\circ$.',
      'മറുഖണ്ഡ കോൺ $= \\frac{72^\\circ}{2} = 36^\\circ$. അതിനാൽ തൊടുവര ഓരോ വശവുമായും ഉണ്ടാക്കുന്ന കോൺ $36^\\circ$ ആണ്.'
    ],
    rubric_en: [
      'Finding ∠XAB and ∠YAC using Alternate Segment Theorem: 1.5 marks',
      'Finding ∠BAC: 0.5 mark',
      'Regular pentagon central angle and alternate angle calculation: 1 mark',
      'Concluding tangent-side angle of 36° with reasoning: 1 mark'
    ],
    rubric_ml: [
      'മറുഖണ്ഡ സിദ്ധാന്തം ഉപയോഗിച്ച് $\\angle XAB, \\angle YAC$ കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      '$\\angle BAC = 70^\\circ$ കണ്ടെത്തൽ: 0.5 മാർക്ക്',
      'സമപഞ്ചഭുജത്തിന്റെ കേന്ദ്രകോണും മറുഖണ്ഡ കോണും കാണൽ: 1 മാർക്ക്',
      'തൊടുവര കോൺ $36^\\circ$ എന്ന് സമർത്ഥിക്കൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) ∠XAB = 45°, ∠YAC = 65°, ∠BAC = 70°; (b) 36° with each side',
    answer_ml: '(a) $\\angle XAB = 45^\\circ, \\angle YAC = 65^\\circ, \\angle BAC = 70^\\circ$; (b) ഓരോ വശവുമായും $36^\\circ$'
  }
);
