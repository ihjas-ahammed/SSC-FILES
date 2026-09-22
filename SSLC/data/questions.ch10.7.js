/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 7 — Tangents (തൊടുവരകൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
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
    prompt_en: 'Two tangents $PA$ and $PB$ are drawn from point $P$ to a circle. If $PA = 9$ cm, what is the length of $PB$?',
    prompt_ml: 'ഒരു ബാഹ്യബിന്ദു $P$ യിൽ നിന്ന് വൃത്തത്തിലേക്ക് വരച്ച തൊടുവരകളാണ് $PA, PB$. $PA = 9$ cm ആയാൽ $PB$ യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '9 cm' },
      { k: 'B', t: '18 cm' },
      { k: 'C', t: '4.5 cm' },
      { k: 'D', t: 'Cannot be determined' }
    ],
    options_ml: [
      { k: 'A', t: '9 cm' },
      { k: 'B', t: '18 cm' },
      { k: 'C', t: '4.5 cm' },
      { k: 'D', t: 'കണ്ടെത്താൻ കഴിയില്ല' }
    ],
    answer: 'A',
    solution_en: 'Tangents drawn from an external point to a circle are equal in length: $PB = PA = 9$ cm.',
    solution_ml: 'ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകളുടെ നീളങ്ങൾ തുല്യമായതിനാൽ $PB = PA = 9$ cm.',
    tested_en: 'Equality of lengths of tangents from an external point.',
    tested_ml: 'ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകളുടെ തുല്യത.'
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
    prompt_en: 'The area of a triangle is 54 cm² and its perimeter is 36 cm. What is the inradius of this triangle?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ് 54 ചതുരശ്ര സെ.മീറ്ററും ചുറ്റളവ് 36 സെ.മീറ്ററുമാണ്. ഈ ത്രികോണത്തിന്റെ അന്തരാരം എത്ര?',
    options_en: [
      { k: 'A', t: '3 cm' },
      { k: 'B', t: '1.5 cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '4 cm' }
    ],
    options_ml: [
      { k: 'A', t: '3 cm' },
      { k: 'B', t: '1.5 cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '4 cm' }
    ],
    answer: 'A',
    solution_en: 'Semiperimeter $s = 36 / 2 = 18$ cm. Inradius $r = \\frac{A}{s} = \\frac{54}{18} = 3$ cm.',
    solution_ml: 'അർദ്ധചുറ്റളവ് $s = 36 / 2 = 18$ cm. അന്തരാരം $r = \\frac{A}{s} = \\frac{54}{18} = 3$ cm.',
    tested_en: 'Inradius formula: r = A / s.',
    tested_ml: 'അന്തരാര സൂത്രവാക്യം: r = A / s.'
  },
  {
    id: 'obj.m10.7.6',
    concept: 'm10.7.3.incircle-and-inradius',
    sec: '10.7.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'The incenter of any triangle is the point of intersection of which set of lines?',
    prompt_ml: 'ഏതൊരു ത്രികോണത്തിന്റെയും അന്തർകേന്ദ്രം ഏത് വരകൾ സംഗമിക്കുന്ന ബിന്ദുവാണ്?',
    options_en: [
      { k: 'A', t: 'Internal angle bisectors' },
      { k: 'B', t: 'Perpendicular bisectors of sides' },
      { k: 'C', t: 'Altitudes from vertices' },
      { k: 'D', t: 'Medians of the triangle' }
    ],
    options_ml: [
      { k: 'A', t: 'കോൺ സമഭാജികൾ' },
      { k: 'B', t: 'വശങ്ങളുടെ ലംബസമഭാജികൾ' },
      { k: 'C', t: 'ഉന്നതികൾ (ലംബങ്ങൾ)' },
      { k: 'D', t: 'മാധ്യമരേഖകൾ (Medians)' }
    ],
    answer: 'A',
    solution_en: 'The incenter is the unique point equidistant from all three sides, which is the concurrence point of the triangle’s internal angle bisectors.',
    solution_ml: 'ത്രികോണത്തിന്റെ മൂന്ന് കോണുകളുടെയും സമഭാജികൾ സംഗമിക്കുന്ന ബിന്ദുവാണ് അന്തർകേന്ദ്രം.',
    tested_en: 'Definition and property of incenter of a triangle.',
    tested_ml: 'അന്തർകേന്ദ്രത്തിന്റെ നിർവ്വചനം.'
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
    time: 40,
    prompt_en: 'A tangent $PT$ of length 8 cm touches a circle at $T$. A secant line from $P$ intersects the circle at $A$ and $B$. If $PA = 4$ cm, what is the total length of the secant segment $PB$?',
    prompt_ml: '8 cm നീളമുള്ള $PT$ എന്ന തൊടുവര $T$ ൽ വൃത്തത്തെ സ്പർശിക്കുന്നു. $P$ യിൽ നിന്നുള്ള ഛേദകവര വൃത്തത്തെ $A, B$ എന്നിവയിൽ മുറിക്കുന്നു. $PA = 4$ cm ആയാൽ $PB$ യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '16 cm' },
      { k: 'B', t: '12 cm' },
      { k: 'C', t: '8 cm' },
      { k: 'D', t: '2 cm' }
    ],
    options_ml: [
      { k: 'A', t: '16 cm' },
      { k: 'B', t: '12 cm' },
      { k: 'C', t: '8 cm' },
      { k: 'D', t: '2 cm' }
    ],
    answer: 'A',
    solution_en: 'By the tangent-secant theorem: $PA \\cdot PB = PT^2 \\implies 4 \\cdot PB = 8^2 = 64 \\implies PB = \\frac{64}{4} = 16$ cm.',
    solution_ml: 'തൊടുവര-ഛേദകവര സിദ്ധാന്തപ്രകാരം: $PA \\cdot PB = PT^2 \\implies 4 \\cdot PB = 64 \\implies PB = 16$ cm.',
    tested_en: 'Tangent-secant theorem: PA · PB = PT².',
    tested_ml: 'തൊടുവര-ഛേദകവര ഗുണനഫല സൂത്രവാക്യം.'
  },
  {
    id: 'obj.m10.7.8',
    concept: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'In a circle, tangent $PT$ touches the circle at $P$, and chord $AB$ is drawn. If $\\angle BPT = 65^\\circ$, what is the measure of the angle $\\angle PAB$ in the alternate segment?',
    prompt_ml: 'ഒരു വൃത്തത്തിൽ $PT$ എന്ന തൊടുവര $P$ ൽ വൃത്തത്തെ സ്പർശിക്കുന്നു. ഞാൺ $PB$ വരച്ചിരിക്കുന്നു. $\\angle BPT = 65^\\circ$ ആയാൽ മറുഖണ്ഡത്തിലെ കോണായ $\\angle PAB$ യുടെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$115^\\circ$' },
      { k: 'C', t: '$25^\\circ$' },
      { k: 'D', t: '$130^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$115^\\circ$' },
      { k: 'C', t: '$25^\\circ$' },
      { k: 'D', t: '$130^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'By the alternate segment theorem, the angle between the tangent and chord equals the angle subtended by the chord in the alternate segment, so $\\angle PAB = \\angle BPT = 65^\\circ$.',
    solution_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തപ്രകാരം തൊടുവരയും ഞാണും തമ്മിലുള്ള കോൺ മറുഖണ്ഡത്തിലെ കോണിന് തുല്യമാണ്: $\\angle PAB = 65^\\circ$.',
    tested_en: 'Alternate segment theorem.',
    tested_ml: 'മറുഖണ്ഡത്തിലെ കോൺ സിദ്ധാന്തം.'
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
    prompt_en: 'A circle of radius 6 cm has a tangent drawn from an external point $P$. The point $P$ is at a distance of 10 cm from the centre $O$, touching the circle at $T$.\\n(a) What is the angle $\\angle PTO$?\\n(b) Using the Pythagorean theorem, calculate the length of the tangent $PT$.\\n(c) Find the area of the right-angled triangle $\\triangle PTO$.',
    prompt_ml: '6 cm ആരമുള്ള വൃത്തത്തിന് ബാഹ്യബിന്ദുവായ $P$ യിൽ നിന്ന് $T$ എന്ന സ്പർശബിന്ദുവിലേക്ക് ഒരു തൊടുവര വരച്ചിരിക്കുന്നു. കേന്ദ്രം $O$ ൽ നിന്ന് $P$ യിലേക്കുള്ള അകലം 10 cm ആണ്.\\n(a) $\\angle PTO$ യുടെ അളവ് എത്ര?\\n(b) പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് തൊടുവര $PT$ യുടെ നീളം കാണുക.\\n(c) മട്ടത്രികോണം $PTO$ യുടെ പരപ്പളവ് കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>The radius through the point of contact is perpendicular to the tangent, so $\\angle PTO = 90^\\circ$.</li>\n  <li>In right $\\triangle PTO$, hypotenuse is $OP = 10$ cm and leg $OT = 6$ cm. By Pythagoras: $PT = \\sqrt{OP^2 - OT^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ cm.</li>\n  <li>Area of $\\triangle PTO = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times PT \\times OT = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 90°; (b) 8 cm; (c) 24 cm²</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Angle PTO stated as 90° with rationale: 1 mark</li>\n  <li>Pythagorean calculation of PT = 8 cm: 2 marks</li>\n  <li>Area calculation = 24 cm²: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സ്പർശബിന്ദുവിലെ ആരം തൊടുവരയ്ക്ക് ലംബമായതിനാൽ $\\angle PTO = 90^\\circ$.</li>\n  <li>മട്ടത്രികോണം $PTO$ ൽ കർണ്ണം $OP = 10$ cm, ആരം $OT = 6$ cm. പൈതഗോറസ് പ്രകാരം: $PT = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$ cm.</li>\n  <li>$\\triangle PTO$ യുടെ പരപ്പളവ് $= \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 90°; (b) 8 cm; (c) 24 cm²</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>കോൺ 90° എന്ന് എഴുതൽ: 1 മാർക്ക്</li>\n  <li>പൈതഗോറസ് പ്രകാരം PT = 8 cm കാണൽ: 2 മാർക്ക്</li>\n  <li>പരപ്പളവ് 24 cm² കാണൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'The radius through the point of contact is perpendicular to the tangent, so $\\angle PTO = 90^\\circ$.',
      'In right $\\triangle PTO$, hypotenuse is $OP = 10$ cm and leg $OT = 6$ cm. By Pythagoras: $PT = \\sqrt{OP^2 - OT^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ cm.',
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
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>$\\angle AOB = 180^\\circ - \\angle APB = 180^\\circ - 60^\\circ = 120^\\circ$.</li>\n  <li>Since tangents from an external point are equal, $PA = PB$. Thus in $\\triangle PAB$, the angles opposite to these sides are equal: $\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$. All three angles are $60^\\circ$, so $\\triangle PAB$ is equilateral.</li>\n  <li>In $\\triangle AOB$, $OA = OB = 5$ cm and $\\angle AOB = 120^\\circ$. The altitude from $O$ to $AB$ bisects $AB$ and the angle into two $60^\\circ$ angles. Each half is $5\\sin 60^\\circ = 5 \\times \\frac{\\sqrt{3}}{2}$, so total chord $AB = 2 \\times \\frac{5\\sqrt{3}}{2} = 5\\sqrt{3}$ cm.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 120°; (b) Equilateral because PA = PB and all angles are 60°; (c) 5√3 cm</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Central angle calculation: 1 mark</li>\n  <li>Equilateral triangle proof: 1.5 marks</li>\n  <li>Chord length calculation: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>കേന്ദ്രകോൺ $\\angle AOB = 180^\\circ - 60^\\circ = 120^\\circ$.</li>\n  <li>ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകളായതിനാൽ $PA = PB$. അതിനാൽ $\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$. മൂന്ന് കോണുകളും $60^\\circ$ ആയതിനാൽ $\\triangle PAB$ സമഭുജ ത്രികോണമാണ്.</li>\n  <li>$OA = OB = 5$ cm, $\\angle AOB = 120^\\circ$ ആയതിനാൽ ഞാൺ $AB = 2 \\times 5 \\sin 60^\\circ = 5\\sqrt{3}$ cm.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 120°; (b) PA = PB ആയതിനാലും കോണുകൾ 60° ആയതിനാലും സമഭുജം; (c) 5√3 cm</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>കേന്ദ്രകോൺ കാണൽ: 1 മാർക്ക്</li>\n  <li>സമഭുജ ത്രികോണ തെളിവ്: 1.5 മാർക്ക്</li>\n  <li>ഞാണിന്റെ നീളം കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      '$\\angle AOB = 180^\\circ - \\angle APB = 180^\\circ - 60^\\circ = 120^\\circ$.',
      'Since tangents from an external point are equal, $PA = PB$. Thus in $\\triangle PAB$, the angles opposite to these sides are equal: $\\angle PAB = \\angle PBA = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$. All three angles are $60^\\circ$, so $\\triangle PAB$ is equilateral.',
      'In $\\triangle AOB$, $OA = OB = 5$ cm and $\\angle AOB = 120^\\circ$. The altitude from $O$ to $AB$ bisects $AB$ and the angle into two $60^\\circ$ angles. Each half is $5\\sin 60^\\circ = 5 \\times \\frac{\\sqrt{3}}{2}$, so total chord $AB = 2 \\times \\frac{5\\sqrt{3}}{2} = 5\\sqrt{3}$ cm.'
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
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Hypotenuse $c = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ cm.</li>\n  <li>Area $A = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ cm}^2$. Semiperimeter $s = \\frac{12 + 16 + 20}{2} = \\frac{48}{2} = 24$ cm.</li>\n  <li>Inradius $r = \\frac{A}{s} = \\frac{96}{24} = 4$ cm. (Alternatively using right-triangle formula: $r = \\frac{a + b - c}{2} = \\frac{12 + 16 - 20}{2} = \\frac{8}{2} = 4$ cm).</li>\n</ol>\n<p><b>Final Answer:</b> (a) 20 cm; (b) Area = 96 cm², s = 24 cm; (c) r = 4 cm</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Hypotenuse calculation: 1 mark</li>\n  <li>Area and semiperimeter: 1.5 marks</li>\n  <li>Inradius calculation: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>കർണ്ണം $c = \\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$ cm.</li>\n  <li>പരപ്പളവ് $A = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ cm}^2$. അർദ്ധചുറ്റളവ് $s = \\frac{12 + 16 + 20}{2} = 24$ cm.</li>\n  <li>അന്തരാരം $r = \\frac{A}{s} = \\frac{96}{24} = 4$ cm (അല്ലെങ്കിൽ $r = \\frac{12 + 16 - 20}{2} = 4$ cm).</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 20 cm; (b) പരപ്പളവ് = 96 cm², s = 24 cm; (c) r = 4 cm</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>കർണ്ണം കാണൽ: 1 മാർക്ക്</li>\n  <li>പരപ്പളവും അർദ്ധചുറ്റളവും: 1.5 മാർക്ക്</li>\n  <li>അന്തരാരം കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
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
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>The total distance from external point $P$ to the far intersection $B$ is $PB = PA + AB = 9 + 7 = 16$ cm.</li>\n  <li>By the tangent-secant theorem: $PA \\cdot PB = PT^2$.</li>\n  <li>Substitute values: $PT^2 = 9 \\times 16 = 144$.</li>\n  <li>Taking the square root gives $PT = \\sqrt{144} = 12$ cm.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 16 cm; (b) PA · PB = PT²; (c) PT = 12 cm</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Finding PB = 16 cm: 1 mark</li>\n  <li>Stating theorem formula: 1 mark</li>\n  <li>Calculating PT² = 144: 1 mark</li>\n  <li>Final answer PT = 12 cm: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>$P$ ൽ നിന്ന് $B$ യിലേക്കുള്ള ആകെ ദൂരം $PB = PA + AB = 9 + 7 = 16$ cm.</li>\n  <li>സിദ്ധാന്തപ്രകാരം: $PA \\cdot PB = PT^2$.</li>\n  <li>$PT^2 = 9 \\times 16 = 144$.</li>\n  <li>$PT = \\sqrt{144} = 12$ cm.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 16 cm; (b) PA · PB = PT²; (c) PT = 12 cm</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>PB = 16 cm കാണൽ: 1 മാർക്ക്</li>\n  <li>സിദ്ധാന്തം എഴുതൽ: 1 മാർക്ക്</li>\n  <li>PT² = 144 കാണൽ: 1 മാർക്ക്</li>\n  <li>അന്തിമ ഉത്തരം PT = 12 cm: 1 മാർക്ക്</li>\n</ul>`,
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
  }
);
