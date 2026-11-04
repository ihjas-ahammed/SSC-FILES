/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 2 — Circles (വൃത്തങ്ങൾ)
   10 Objective (2 per section) + 5 Written Practice Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Authentic SCERT Kerala SSLC Textbook exercises and exam questions.
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.2.1 Angle in a Semicircle (Thales Theorem)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.1',
    concept: 'm10.2.1.angle-in-semicircle',
    sec: '10.2.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: '$AB$ is a diameter of a circle and $P$ is a point on the circle. What is the measure of $\\angle APB$?',
    prompt_ml: '$AB$ വ്യാസമായ വൃത്തത്തിലെ ഒരു ബിന്ദുവാണ് $P$. $\\angle APB$-യുടെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$45^\\circ$' },
      { k: 'B', t: '$60^\\circ$' },
      { k: 'C', t: '$90^\\circ$' },
      { k: 'D', t: '$180^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$45^\\circ$' },
      { k: 'B', t: '$60^\\circ$' },
      { k: 'C', t: '$90^\\circ$' },
      { k: 'D', t: '$180^\\circ$' }
    ],
    answer: 'C',
    solution_en: 'The angle subtended by a diameter at any point on the semicircle is always a right angle ($90^\\circ$).',
    solution_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ എപ്പോഴും മട്ടകോണാണ് ($90^\\circ$).',
    tested_en: 'Angle in a semicircle theorem.',
    tested_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണെന്ന തത്വം.'
  },
  {
    id: 'obj.m10.2.2',
    concept: 'm10.2.1.angle-in-semicircle',
    sec: '10.2.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, $\\angle B = 90^\\circ$, $AB = 6\\text{ cm}$, and $BC = 8\\text{ cm}$. A circle is drawn with $AC$ as diameter. Where does vertex $B$ lie?',
    prompt_ml: '$\\triangle ABC$-യിൽ $\\angle B = 90^\\circ$, $AB = 6\\text{ cm}$, $BC = 8\\text{ cm}$. കർണ്ണം $AC$ വ്യാസമാക്കി ഒരു വൃത്തം വരച്ചാൽ $B$ എന്ന ശീർഷം എവിടെയായിരിക്കും?',
    options_en: [
      { k: 'A', t: 'Inside the circle' },
      { k: 'B', t: 'On the circle' },
      { k: 'C', t: 'Outside the circle' },
      { k: 'D', t: 'At the center of the circle' }
    ],
    options_ml: [
      { k: 'A', t: 'വൃത്തത്തിനകത്ത്' },
      { k: 'B', t: 'വൃത്തത്തിൽ തന്നെ' },
      { k: 'C', t: 'വൃത്തത്തിന് പുറത്ത്' },
      { k: 'D', t: 'വൃത്തകേന്ദ്രത്തിൽ' }
    ],
    answer: 'B',
    solution_en: 'Since $\\angle B = 90^\\circ$, the circle with hypotenuse $AC$ as diameter must pass through vertex $B$ (converse of Thales theorem).',
    solution_ml: '$\\angle B = 90^\\circ$ ആയതിനാൽ, കർണ്ണം വ്യാസമായി വരയ്ക്കുന്ന വൃത്തം $B$-യിലൂടെ കടന്നുപോകും (വൃത്തത്തിൽ തന്നെയായിരിക്കും).',
    tested_en: 'Converse of angle in a semicircle theorem.',
    tested_ml: 'അർദ്ധവൃത്ത സിദ്ധാന്തത്തിന്റെ മറുതല.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.2 Central Angle & Inscribed Angle Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.3',
    concept: 'm10.2.2.inscribed-angle-and-central-angle',
    sec: '10.2.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An arc of a circle subtends an angle of $140^\\circ$ at the center. What angle does it subtend on the alternate arc?',
    prompt_ml: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $140^\\circ$ ആണ്. ഈ ചാപം മറുചാപത്തിലുണ്ടാക്കുന്ന കോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$70^\\circ$' },
      { k: 'B', t: '$140^\\circ$' },
      { k: 'C', t: '$280^\\circ$' },
      { k: 'D', t: '$40^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$70^\\circ$' },
      { k: 'B', t: '$140^\\circ$' },
      { k: 'C', t: '$280^\\circ$' },
      { k: 'D', t: '$40^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The angle on the alternate arc is half of the central angle: $\\angle APB = \\frac{1}{2}(140^\\circ) = 70^\\circ$.',
    solution_ml: 'മറുചാപത്തിലെ കോൺ കേന്ദ്രകോണിന്റെ പകുതിയാണ്: $\\frac{140^\\circ}{2} = 70^\\circ$.',
    tested_en: 'Inscribed angle is half of central angle.',
    tested_ml: 'മറുചാപത്തിലെ കോൺ കേന്ദ്രകോണിന്റെ പകുതിയാണെന്ന തത്വം.'
  },
  {
    id: 'obj.m10.2.4',
    concept: 'm10.2.2.inscribed-angle-and-central-angle',
    sec: '10.2.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A chord of a circle has length equal to the radius of the circle. What is the angle subtended by this chord at any point on the major arc?',
    prompt_ml: 'ഒരു വൃത്തത്തിലെ ഞാണിന്റെ നീളം അതിന്റെ ആരത്തിന് തുല്യമാണ്. ഈ ഞാൺ വലിയ ചാപത്തിൽ ഉണ്ടാക്കുന്ന കോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$60^\\circ$' },
      { k: 'B', t: '$30^\\circ$' },
      { k: 'C', t: '$45^\\circ$' },
      { k: 'D', t: '$120^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$60^\\circ$' },
      { k: 'B', t: '$30^\\circ$' },
      { k: 'C', t: '$45^\\circ$' },
      { k: 'D', t: '$120^\\circ$' }
    ],
    answer: 'B',
    solution_en: 'The chord and two radii form an equilateral triangle with the center, so central angle is $60^\\circ$. The angle in the major arc is half of the central angle: $\\frac{60^\\circ}{2} = 30^\\circ$.',
    solution_ml: 'ഞാണും രണ്ട് ആരങ്ങളും ചേർന്ന് കേന്ദ്രത്തിൽ സമഭുജ ത്രികോണം ഉണ്ടാക്കുന്നു; അതിനാൽ കേന്ദ്രകോൺ $60^\\circ$. വലിയ ചാപത്തിലെ കോൺ ഇതിന്റെ പകുതിയാണ്: $\\frac{60^\\circ}{2} = 30^\\circ$.',
    tested_en: 'Equilateral triangle central angle and inscribed angle.',
    tested_ml: 'ആരത്തിന് തുല്യമായ ഞാണുണ്ടാക്കുന്ന കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.3 Angles in Same Segment & Alternate Segment
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.5',
    concept: 'm10.2.3.angles-in-same-segment',
    sec: '10.2.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a circle, $P$ and $Q$ are two points in the same segment bounded by chord $AB$. If $\\angle APB = 48^\\circ$, what is the measure of $\\angle AQB$?',
    prompt_ml: 'ഒരു വൃത്തത്തിൽ $AB$ എന്ന ഞാൺ നിർണ്ണയിക്കുന്ന ഒരേ വൃത്തഖണ്ഡത്തിലെ രണ്ട് ബിന്ദുക്കളാണ് $P$-യും $Q$-വും. $\\angle APB = 48^\\circ$ ആയാൽ $\\angle AQB$-യുടെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$24^\\circ$' },
      { k: 'B', t: '$48^\\circ$' },
      { k: 'C', t: '$96^\\circ$' },
      { k: 'D', t: '$132^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$24^\\circ$' },
      { k: 'B', t: '$48^\\circ$' },
      { k: 'C', t: '$96^\\circ$' },
      { k: 'D', t: '$132^\\circ$' }
    ],
    answer: 'B',
    solution_en: 'Angles subtended in the same segment of a circle are equal: $\\angle AQB = \\angle APB = 48^\\circ$.',
    solution_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്: $\\angle AQB = \\angle APB = 48^\\circ$.',
    tested_en: 'Equality of angles in the same segment.',
    tested_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണെന്ന തത്വം.'
  },
  {
    id: 'obj.m10.2.6',
    concept: 'm10.2.3.angles-in-same-segment',
    sec: '10.2.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An arc of a circle subtends an angle of $65^\\circ$ at a point on the circle. What is the angle subtended by the same arc at a point on its opposite arc?',
    prompt_ml: 'ഒരു വൃത്തചാപം വൃത്തത്തിലെ ഒരു ബിന്ദുവിലുണ്ടാക്കുന്ന കോൺ $65^\\circ$ ആണ്. ഈ ചാപത്തിന്റെ എതിർ ചാപത്തിലെ കോൺ എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$115^\\circ$' },
      { k: 'C', t: '$130^\\circ$' },
      { k: 'D', t: '$25^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$115^\\circ$' },
      { k: 'C', t: '$130^\\circ$' },
      { k: 'D', t: '$25^\\circ$' }
    ],
    answer: 'B',
    solution_en: 'The sum of angles in opposite arcs is $180^\\circ$. Therefore, the opposite angle is $180^\\circ - 65^\\circ = 115^\\circ$.',
    solution_ml: 'എതിർ ചാപങ്ങളിലെ കോണുകളുടെ തുക $180^\\circ$ ആണ്. അതിനാൽ എതിർ കോൺ $= 180^\\circ - 65^\\circ = 115^\\circ$.',
    tested_en: 'Angles in opposite arcs are supplementary.',
    tested_ml: 'എതിർ ചാപങ്ങളിലെ കോണുകൾ അനുപൂരകങ്ങളാണെന്ന തത്വം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.4 Cyclic Quadrilaterals & Supplementary Angles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.7',
    concept: 'm10.2.4.cyclic-quadrilaterals',
    sec: '10.2.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In cyclic quadrilateral $ABCD$, $\\angle B = 82^\\circ$. What is the measure of the opposite angle $\\angle D$?',
    prompt_ml: 'ചക്രിയ ചതുർഭുജം $ABCD$-യിൽ $\\angle B = 82^\\circ$ ആയാൽ എതിർകോണായ $\\angle D$-യുടെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$82^\\circ$' },
      { k: 'B', t: '$98^\\circ$' },
      { k: 'C', t: '$108^\\circ$' },
      { k: 'D', t: '$164^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$82^\\circ$' },
      { k: 'B', t: '$98^\\circ$' },
      { k: 'C', t: '$108^\\circ$' },
      { k: 'D', t: '$164^\\circ$' }
    ],
    answer: 'B',
    solution_en: 'In any cyclic quadrilateral, opposite angles are supplementary: $\\angle D = 180^\\circ - \\angle B = 180^\\circ - 82^\\circ = 98^\\circ$.',
    solution_ml: 'ചക്രിയ ചതുർഭുജത്തിൽ എതിർകോണുകളുടെ തുക $180^\\circ$ ആണ്: $\\angle D = 180^\\circ - 82^\\circ = 98^\\circ$.',
    tested_en: 'Opposite angles of cyclic quadrilateral sum to 180°.',
    tested_ml: 'ചക്രിയ ചതുർഭുജത്തിലെ എതിർകോണുകളുടെ തുക 180°.'
  },
  {
    id: 'obj.m10.2.8',
    concept: 'm10.2.4.cyclic-quadrilaterals',
    sec: '10.2.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following geometric figures is ALWAYS a cyclic quadrilateral?',
    prompt_ml: 'താഴെ പറയുന്ന ജ്യാമിതീയ രൂപങ്ങളിൽ എപ്പോഴും ചക്രിയ ചതുർഭുജമായിരിക്കുന്നത് ഏതാണ്?',
    options_en: [
      { k: 'A', t: 'Parallelogram' },
      { k: 'B', t: 'Rhombus' },
      { k: 'C', t: 'Isosceles Trapezium' },
      { k: 'D', t: 'Kite' }
    ],
    options_ml: [
      { k: 'A', t: 'സാമാന്തരികം' },
      { k: 'B', t: 'റോംബസ്' },
      { k: 'C', t: 'സമപാർശ്വ ലംബകം' },
      { k: 'D', t: 'പരുന്ത്' }
    ],
    answer: 'C',
    solution_en: 'An isosceles trapezium has base angles equal, so opposite angles sum to $180^\\circ$, making it always cyclic.',
    solution_ml: 'സമപാർശ്വ ലംബകത്തിൽ എതിർകോണുകളുടെ തുക എപ്പോഴും $180^\\circ$ ആയിരിക്കും; അതിനാൽ ഇത് എപ്പോഴും ചക്രിയമാണ്.',
    tested_en: 'Identification of cyclic quadrilaterals among special quadrilaterals.',
    tested_ml: 'ചക്രിയ ചതുർഭുജങ്ങളുടെ വർഗ്ഗീകരണം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.5 Intersecting Chords & Tangent-Secant Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.9',
    concept: 'm10.2.5.intersecting-chords-and-tangents',
    sec: '10.2.5',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Chords $AB$ and $CD$ intersect at $P$ inside a circle. If $PA = 3\\text{ cm}, PB = 8\\text{ cm}$, and $PC = 4\\text{ cm}$, what is the length of $PD$?',
    prompt_ml: 'ഒരു വൃത്തത്തിനകത്ത് $P$ എന്ന ബിന്ദുവിൽ $AB, CD$ എന്നീ ഞാണുകൾ ഖണ്ഡിക്കുന്നു. $PA = 3\\text{ cm}, PB = 8\\text{ cm}, PC = 4\\text{ cm}$ ആയാൽ $PD$-യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$6\\text{ cm}$' },
      { k: 'C', t: '$7\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$6\\text{ cm}$' },
      { k: 'C', t: '$7\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    answer: 'B',
    solution_en: '$PA \\cdot PB = PC \\cdot PD \\implies 3 \\times 8 = 4 \\times PD \\implies 24 = 4 \\times PD \\implies PD = 6\\text{ cm}$.',
    solution_ml: '$PA \\cdot PB = PC \\cdot PD \\implies 3 \\times 8 = 4 \\times PD \\implies 24 = 4 \\times PD \\implies PD = 6\\text{ cm}$.',
    tested_en: 'Intersecting chords inside a circle theorem: PA · PB = PC · PD.',
    tested_ml: 'വൃത്തത്തിനകത്ത് ഖണ്ഡിക്കുന്ന ഞാണുകളുടെ ഗുണനഫല സിദ്ധാന്തം.'
  },
  {
    id: 'obj.m10.2.10',
    concept: 'm10.2.5.intersecting-chords-and-tangents',
    sec: '10.2.5',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'From an external point $P$, tangent $PT$ touches the circle at $T$, and secant $PAB$ cuts the circle at $A$ and $B$. If $PA = 2\\text{ cm}$ and $PB = 8\\text{ cm}$, find the length of tangent $PT$.',
    prompt_ml: 'വൃത്തത്തിന് പുറത്തുള്ള $P$-യിൽ നിന്നുള്ള തൊടുവരയാണ് $PT$-യും, വൃത്തത്തെ $A, B$ എന്നിവയിൽ ഖണ്ഡിക്കുന്ന ഛേദകമാണ് $PAB$-യും. $PA = 2\\text{ cm}, PB = 8\\text{ cm}$ ആയാൽ തൊടുവര $PT$-യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$4\\text{ cm}$' },
      { k: 'B', t: '$5\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$16\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$4\\text{ cm}$' },
      { k: 'B', t: '$5\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$16\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the tangent-secant theorem: $PT^2 = PA \\cdot PB = 2 \\times 8 = 16 \\implies PT = \\sqrt{16} = 4\\text{ cm}$.',
    solution_ml: 'തൊടുവര-ഛേദക സിദ്ധാന്തപ്രകാരം: $PT^2 = PA \\cdot PB = 2 \\times 8 = 16 \\implies PT = \\sqrt{16} = 4\\text{ cm}$.',
    tested_en: 'Tangent-secant theorem: PT^2 = PA · PB.',
    tested_ml: 'തൊടുവര-ഛേദക സിദ്ധാന്തം PT^2 = PA · PB.'
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   Level 2/3 Written Exercises — Textbook Exercises Page-by-Page
   ══════════════════════════════════════════════════════════════════════════ */
WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.2.1 Angle in a Semicircle (Textbook Page 36, Questions 1-3)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.1',
    concept: 'm10.2.1.angle-in-semicircle',
    sec: '10.2.1',
    type: 'written',
    marks: 4,
    time: 220,
    title_en: 'Semicircle Angles & Vertex Locus (Textbook Page 36)',
    title_ml: 'അർദ്ധവൃത്തത്തിലെ കോണുകളും ശീർഷസ്ഥാനങ്ങളും (പാഠപുസ്തകം പേജ് 36)',
    prompt_en: `<p>(i) In the figure, $AB$ is the diameter of a circle. $P$ is a point on the circle, $Q$ is a point inside the circle, and $R$ is a point outside the circle (all on the same side of $AB$).</p>
      <p>(a) What is the measure of $\\angle APB$?</p>
      <p>(b) What can you say about the angle $\\angle AQB$? Justify mathematically.</p>
      <p>(c) What can you say about the angle $\\angle ARB$? Justify mathematically.</p>
      <p>(ii) A triangle has angles $30^\\circ, 60^\\circ, 90^\\circ$. A circle is drawn with its hypotenuse as diameter. Does the third vertex lie inside, on, or outside the circle? Explain.</p>`,
    prompt_ml: `<p>(i) ചിത്രത്തിൽ $AB$ വൃത്തത്തിന്റെ വ്യാസമാണ്. $P$ വൃത്തത്തിലെ ബിന്ദുവും, $Q$ വൃത്തത്തിനകത്തെ ബിന്ദുവും, $R$ വൃത്തത്തിന് പുറത്തുള്ള ബിന്ദുവുമാണ് ($AB$-യുടെ ഒരേ വശത്ത്):</p>
      <p>(a) $\\angle APB$-യുടെ അളവ് എത്ര?</p>
      <p>(b) $\\angle AQB$-യെക്കുറിച്ച് എന്ത് പറയാം? ഗണിതകാരണം വ്യക്തമാക്കുക.</p>
      <p>(c) $\\angle ARB$-യെക്കുറിച്ച് എന്ത് പറയാം? ഗണിതകാരണം വ്യക്തമാക്കുക.</p>
      <p>(ii) ഒരു ത്രികോണത്തിലെ കോണുകൾ $30^\\circ, 60^\\circ, 90^\\circ$ ആണ്. ഇതിന്റെ കർണ്ണം വ്യാസമാക്കി ഒരു വൃത്തം വരച്ചാൽ മൂന്നാമത്തെ ശീർഷം വൃത്തത്തിനകത്തോ, വൃത്തത്തിലോ, വൃത്തത്തിന് പുറത്തോ ആയിരിക്കുമോ? വിശദീകരിക്കുക.</p>`,
    solution_en: `<h4>Part (i): Angles with Respect to Semicircle</h4>
      <ul>
        <li><b>(a) Angle on the circle:</b> $AB$ is the diameter, so by Thales theorem, $\\mathbf{\\angle APB = 90^\\circ}$ (a right angle).</li>
        <li><b>(b) Angle inside the circle:</b> Extend $AQ$ to intersect the circle at $P'$. In $\\triangle P'QB$, $\\angle AQB$ is an exterior angle to $\\triangle P'QB$, so:
          $$\\angle AQB = \\angle AP'B + \\angle P'BQ = 90^\\circ + \\angle P'BQ > 90^\\circ$$
          Therefore, $\\mathbf{\\angle AQB > 90^\\circ}$ (an <b>obtuse angle</b>).</li>
        <li><b>(c) Angle outside the circle:</b> Let $AR$ intersect the circle at $P''$. In $\\triangle P''RB$, $\\angle AP''B = 90^\\circ$ is an exterior angle, so:
          $$90^\\circ = \\angle ARB + \\angle P''BR \\implies \\angle ARB = 90^\\circ - \\angle P''BR < 90^\\circ$$
          Therefore, $\\mathbf{\\angle ARB < 90^\\circ}$ (an <b>acute angle</b>).</li>
      </ul>
      <h4>Part (ii): Right-Angled Triangle Circumcircle</h4>
      <p>The third angle is $90^\\circ$. By the converse of the semicircle theorem, any point that makes a $90^\\circ$ angle with the endpoints of a diameter must lie <b>on the circle</b>.</p>
      <p>Therefore, the right-angled vertex lies <b>strictly ON the circle</b>.</p>`,
    solution_ml: `<h4>ഭാഗം (i): അർദ്ധവൃത്തവുമായി ബന്ധപ്പെട്ട കോണുകൾ</h4>
      <ul>
        <li><b>(a) വൃത്തത്തിലെ കോൺ:</b> $AB$ വ്യാസമായതിനാൽ ഥേൽസ് സിദ്ധാന്തപ്രകാരം $\\mathbf{\\angle APB = 90^\\circ}$ (മട്ടകോൺ).</li>
        <li><b>(b) വൃത്തത്തിനകത്തെ കോൺ:</b> $AQ$ നീട്ടി വൃത്തത്തിലെ $P'$-ൽ എത്തിച്ചാൽ, $\\triangle P'QB$-യുടെ ബാഹ്യകോണാണ് $\\angle AQB$:
          $$\\angle AQB = \\angle AP'B + \\angle P'BQ = 90^\\circ + \\angle P'BQ > 90^\\circ$$
          അതിനാൽ $\\mathbf{\\angle AQB > 90^\\circ}$ (<b>ബൃഹത്കോൺ</b>).</li>
        <li><b>(c) വൃത്തത്തിന് പുറത്തെ കോൺ:</b> $AR$ വൃത്തത്തെ $P''$-ൽ ഖണ്ഡിക്കുന്നുവെങ്കിൽ:
          $$90^\\circ = \\angle ARB + \\angle P''BR \\implies \\angle ARB < 90^\\circ$$
          അതിനാൽ $\\mathbf{\\angle ARB < 90^\\circ}$ (<b>ന്യൂനകോൺ</b>).</li>
      </ul>
      <h4>ഭാഗം (ii): മട്ടത്രികോണത്തിന്റെ ശീർഷം</h4>
      <p>മൂന്നാമത്തെ കോൺ $90^\\circ$ ആണ്. വ്യാസത്തിന്റെ രണ്ടറ്റങ്ങളുമായി $90^\\circ$ കോണുണ്ടാക്കുന്ന ബിന്ദുക്കൾ വൃത്തത്തിൽ തന്നെയായിരിക്കണം എന്ന തത്വപ്രകാരം ഈ ശീർഷം <b>വൃത്തത്തിൽ തന്നെ</b> സ്ഥിതിചെയ്യും.</p>`,
    tested_en: 'Angles subtended by diameter inside, on, and outside a circle.',
    tested_ml: 'വ്യാസം വൃത്തത്തിനകത്തും വൃത്തത്തിലും പുറത്തും ഉണ്ടാക്കുന്ന കോണുകൾ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.2 Central Angle & Inscribed Angle Theorem (Textbook Page 46-48, Questions 1-3)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.2',
    concept: 'm10.2.2.inscribed-angle-and-central-angle',
    sec: '10.2.2',
    type: 'written',
    marks: 4,
    time: 220,
    title_en: 'Central Angle & Arc Subtensions (Textbook Page 46–48)',
    title_ml: 'കേന്ദ്രകോണും ചാപകോണുകളും (പാഠപുസ്തകം പേജ് 46–48)',
    prompt_en: `<p>(i) An arc of a circle subtends a central angle of $120^\\circ$.</p>
      <p>(a) What is the angle subtended by this arc on the alternate arc?</p>
      <p>(b) What is the angle subtended in the arc itself?</p>
      <p>(ii) A chord of a circle has length equal to the radius of the circle.</p>
      <p>(a) Calculate the central angle subtended by this chord.</p>
      <p>(b) What angle does this chord subtend on the major arc?</p>
      <p>(c) What angle does this chord subtend on the minor arc?</p>
      <p>(iii) The vertices of $\\triangle ABC$ lie on a circle with centre $O$. If $\\angle A = 50^\\circ, \\angle B = 60^\\circ$, and $\\angle C = 70^\\circ$, find the angles subtended by each side at the center ($\\angle BOC, \\angle AOC, \\angle AOB$).</p>`,
    prompt_ml: `<p>(i) ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $120^\\circ$ ആണ്:</p>
      <p>(a) ഈ ചാപം മറുചാപത്തിലുണ്ടാക്കുന്ന കോൺ എത്ര?</p>
      <p>(b) ഈ ചാപത്തിൽ തന്നെയുള്ള കോൺ എത്ര?</p>
      <p>(ii) ഒരു വൃത്തത്തിലെ ഞാണിന്റെ നീളം ആരത്തിന് തുല്യമാണ്:</p>
      <p>(a) ഈ ഞാൺ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ എത്ര?</p>
      <p>(b) ഈ ഞാൺ വലിയ ചാപത്തിൽ ഉണ്ടാക്കുന്ന കോൺ എത്ര?</p>
      <p>(c) ഈ ഞാൺ ചെറിയ ചാപത്തിൽ ഉണ്ടാക്കുന്ന കോൺ എത്ര?</p>
      <p>(iii) $\\triangle ABC$-യുടെ ശീർഷങ്ങൾ കേന്ദ്രം $O$ ആയ വൃത്തത്തിലാണ്. $\\angle A = 50^\\circ, \\angle B = 60^\\circ, \\angle C = 70^\\circ$ ആയാൽ ഓരോ വശവും കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണുകൾ ($\\angle BOC, \\angle AOC, \\angle AOB$) കാണുക.</p>`,
    solution_en: `<h4>Part (i): Arc Subtensions for Central Angle 120°</h4>
      <p>(a) Angle on alternate arc $= \\frac{1}{2} \\times \\text{Central Angle} = \\frac{120^\\circ}{2} = \\mathbf{60^\\circ}$.</p>
      <p>(b) Angle in the arc itself $= 180^\\circ - 60^\\circ = \\mathbf{120^\\circ}$.</p>
      <h4>Part (ii): Chord Equal to Radius</h4>
      <p>(a) Let chord be $AB$. In $\\triangle OAB$, $OA = OB = AB = r$. The triangle is equilateral, so central angle $\\mathbf{\\angle AOB = 60^\\circ}$.</p>
      <p>(b) Angle in the major arc $= \\frac{1}{2}\\angle AOB = \\frac{60^\\circ}{2} = \\mathbf{30^\\circ}$.</p>
      <p>(c) Angle in the minor arc $= 180^\\circ - 30^\\circ = \\mathbf{150^\\circ}$.</p>
      <h4>Part (iii): Central Angles of Triangle Sides</h4>
      <p>By the inscribed angle theorem, the central angle is twice the angle on the alternate arc:</p>
      <ul>
        <li>Side $BC$ subtends angle $A = 50^\\circ$ at the circle: $\\angle BOC = 2 \\times 50^\\circ = \\mathbf{100^\\circ}$.</li>
        <li>Side $AC$ subtends angle $B = 60^\\circ$ at the circle: $\\angle AOC = 2 \\times 60^\\circ = \\mathbf{120^\\circ}$.</li>
        <li>Side $AB$ subtends angle $C = 70^\\circ$ at the circle: $\\angle AOB = 2 \\times 70^\\circ = \\mathbf{140^\\circ}$.</li>
      </ul>
      <p>Check: $100^\\circ + 120^\\circ + 140^\\circ = 360^\\circ$ (full rotation).</p>`,
    solution_ml: `<h4>ഭാഗം (i): 120° കേന്ദ്രകോണുള്ള ചാപം</h4>
      <p>(a) മറുചാപത്തിലെ കോൺ $= \\frac{120^\\circ}{2} = \\mathbf{60^\\circ}$.</p>
      <p>(b) ആ ചാപത്തിൽ തന്നെയുള്ള കോൺ $= 180^\\circ - 60^\\circ = \\mathbf{120^\\circ}$.</p>
      <h4>ഭാഗം (ii): ആരത്തിന് തുല്യമായ ഞാൺ</h4>
      <p>(a) ഞാണും രണ്ട് ആരങ്ങളും ചേർന്ന് സമഭുജ ത്രികോണം ഉണ്ടാക്കുന്നു. അതിനാൽ കേന്ദ്രകോൺ $\\mathbf{\\angle AOB = 60^\\circ}$.</p>
      <p>(b) വലിയ ചാപത്തിലെ കോൺ $= \\frac{60^\\circ}{2} = \\mathbf{30^\\circ}$.</p>
      <p>(c) ചെറിയ ചാപത്തിലെ കോൺ $= 180^\\circ - 30^\\circ = \\mathbf{150^\\circ}$.</p>
      <h4>ഭാഗം (iii): ത്രികോണത്തിന്റെ വശങ്ങൾ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണുകൾ</h4>
      <p>കേന്ദ്രകോൺ വൃത്തത്തിലെ കോണിന്റെ ഇരട്ടിയാണ്:</p>
      <ul>
        <li>$BC$ ഉണ്ടാക്കുന്ന കേന്ദ്രകോൺ $\\angle BOC = 2 \\times 50^\\circ = \\mathbf{100^\\circ}$.</li>
        <li>$AC$ ഉണ്ടാക്കുന്ന കേന്ദ്രകോൺ $\\angle AOC = 2 \\times 60^\\circ = \\mathbf{120^\\circ}$.</li>
        <li>$AB$ ഉണ്ടാക്കുന്ന കേന്ദ്രകോൺ $\\angle AOB = 2 \\times 70^\\circ = \\mathbf{140^\\circ}$.</li>
      </ul>
      <p>പരിശോധന: $100^\\circ + 120^\\circ + 140^\\circ = 360^\\circ$.</p>`,
    tested_en: 'Central angle and inscribed angle theorem with minor and major arc calculations.',
    tested_ml: 'കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും, വലിയ ചാപത്തിലെയും ചെറിയ ചാപത്തിലെയും കോണുകൾ കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.3 Angles in Same Segment & Alternate Segment (Textbook Page 51, Questions 1-3)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.3',
    concept: 'm10.2.3.angles-in-same-segment',
    sec: '10.2.3',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Angles in the Same Segment & Chord Intersections (Textbook Page 51)',
    title_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ (പാഠപുസ്തകം പേജ് 51)',
    prompt_en: `<p>(i) In the figure, $O$ is the center of the circle. $A, B, C, D$ are points on the circle in order. If central angle $\\angle AOC = 110^\\circ$:</p>
      <p>(a) Find $\\angle ADC$.</p>
      <p>(b) Find $\\angle ABC$.</p>
      <p>(ii) In a circle, two chords $AB$ and $CD$ intersect at point $P$ inside the circle. Prove that $\\angle PAC = \\angle PDB$ and $\\triangle PAC \\sim \\triangle PDB$.</p>`,
    prompt_ml: `<p>(i) ചിത്രത്തിൽ $O$ വൃത്തകേന്ദ്രമാണ്. $A, B, C, D$ എന്നിവ വൃത്തത്തിലെ ബിന്ദുക്കളാണ്. കേന്ദ്രകോൺ $\\angle AOC = 110^\\circ$ ആയാൽ:</p>
      <p>(a) $\\angle ADC$ കാണുക.</p>
      <p>(b) $\\angle ABC$ കാണുക.</p>
      <p>(ii) ഒരു വൃത്തത്തിലെ രണ്ട് ഞാണുകൾ $AB, CD$ എന്നിവ വൃത്തത്തിനകത്തെ $P$ എന്ന ബിന്ദുവിൽ ഖണ്ഡിക്കുന്നു. $\\angle PAC = \\angle PDB$ ആണെന്നും $\\triangle PAC \\sim \\triangle PDB$ ആണെന്നും തെളിയിക്കുക.</p>`,
    solution_en: `<h4>Part (i): Angles Subtended by Arc AC</h4>
      <p>(a) Minor arc $ABC$ subtends central angle $\\angle AOC = 110^\\circ$. Point $D$ lies on the alternate major arc, so:</p>
      $$\\angle ADC = \\frac{1}{2}\\angle AOC = \\frac{110^\\circ}{2} = \\mathbf{55^\\circ}$$
      <p>(b) Point $B$ lies on the opposite arc to $D$. The sum of angles in opposite arcs is $180^\\circ$:</p>
      $$\\angle ABC = 180^\\circ - \\angle ADC = 180^\\circ - 55^\\circ = \\mathbf{125^\\circ}$$
      <h4>Part (ii): Similar Triangles from Equal Segment Angles</h4>
      <ul>
        <li>In $\\triangle PAC$ and $\\triangle PDB$:
          $$\\angle APC = \\angle BPD \\quad (\\text{vertically opposite angles})$$</li>
        <li>$\\angle PAC$ and $\\angle PDB$ are both inscribed in the circle subtending the exact same arc $CB$. By the angles in the same segment theorem:
          $$\\angle PAC = \\angle PDB$$</li>
        <li>Similarly, $\\angle PCA = \\angle PBD$ (both subtend arc $AD$).</li>
        <li>Since all three pairs of corresponding angles are equal, by the AA similarity criterion:
          $$\\mathbf{\\triangle PAC \\sim \\triangle PDB}$$</li>
      </ul>`,
    solution_ml: `<h4>ഭാഗം (i): ചാപം AC ഉണ്ടാക്കുന്ന കോണുകൾ</h4>
      <p>(a) $D$ എന്ന ബിന്ദു മറുചാപത്തിലാണ്. അതിനാൽ:</p>
      $$\\angle ADC = \\frac{110^\\circ}{2} = \\mathbf{55^\\circ}$$
      <p>(b) $B$ എന്ന ബിന്ദു $D$-യുടെ എതിർ ചാപത്തിലാണ്. എതിർ ചാപങ്ങളിലെ കോണുകളുടെ തുക $180^\\circ$ ആയതിനാൽ:</p>
      $$\\angle ABC = 180^\\circ - 55^\\circ = \\mathbf{125^\\circ}$$
      <h4>ഭാഗം (ii): സദൃശ ത്രികോണങ്ങൾ തെളിയിക്കൽ</h4>
      <ul>
        <li>$\\triangle PAC$, $\\triangle PDB$ എന്നിവയിൽ:
          $$\\angle APC = \\angle BPD \\quad (\\text{എതിർകോണുകൾ})$$</li>
        <li>$\\angle PAC$-യും $\\angle PDB$-യും $CB$ എന്ന ഒരേ ചാപം ഉണ്ടാക്കുന്ന കോണുകളാണ്. ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമായതിനാൽ:
          $$\\angle PAC = \\angle PDB$$</li>
        <li>അതുപോലെ $\\angle PCA = \\angle PBD$ ($AD$ എന്ന ചാപം ഉണ്ടാക്കുന്ന കോണുകൾ).</li>
        <li>രണ്ട് കോണുകൾ വീതം തുല്യമായതിനാൽ $AA$ സദൃശതാ തത്വപ്രകാരം:
          $$\\mathbf{\\triangle PAC \\sim \\triangle PDB}$$</li>
      </ul>`,
    tested_en: 'Angles in same segment and opposite arcs with geometric similarity proofs.',
    tested_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകളും സദൃശ ത്രികോണ തെളിവും.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.4 Cyclic Quadrilaterals & Supplementary Angles (Textbook Page 53-56, Questions 1-4)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.4',
    concept: 'm10.2.4.cyclic-quadrilaterals',
    sec: '10.2.4',
    type: 'written',
    marks: 4,
    time: 220,
    title_en: 'Cyclic Quadrilaterals & Exterior Angles (Textbook Page 53–56)',
    title_ml: 'ചക്രിയ ചതുർഭുജങ്ങളും ബാഹ്യകോണുകളും (പാഠപുസ്തകം പേജ് 53–56)',
    prompt_en: `<p>(i) In cyclic quadrilateral $ABCD$, $\\angle A = 2x + 4^\\circ$, $\\angle C = 3x + 16^\\circ$, and $\\angle B = 4y - 4^\\circ$, $\\angle D = 2y + 10^\\circ$. Find the values of $x$ and $y$, and find all four angles of the quadrilateral.</p>
      <p>(ii) Prove that any cyclic parallelogram is a rectangle.</p>
      <p>(iii) In a cyclic quadrilateral $ABCD$, side $AB$ is extended to a point $E$. Prove that exterior angle $\\angle CBE$ is equal to interior opposite angle $\\angle ADC$.</p>`,
    prompt_ml: `<p>(i) ചക്രിയ ചതുർഭുജം $ABCD$-യിൽ $\\angle A = 2x + 4^\\circ$, $\\angle C = 3x + 16^\\circ$, $\\angle B = 4y - 4^\\circ$, $\\angle D = 2y + 10^\\circ$ ആയാൽ $x, y$ എന്നിവയുടെ വിലകൾ കണ്ട് ചതുർഭുജത്തിലെ നാല് കോണുകളും കണ്ടെത്തുക.</p>
      <p>(ii) ഏതൊരു ചക്രിയ സാമാന്തരികവും ഒരു ചതുരമായിരിക്കും എന്ന് തെളിയിക്കുക.</p>
      <p>(iii) ചക്രിയ ചതുർഭുജം $ABCD$-യിൽ $AB$ എന്ന വശം $E$ വരെ നീട്ടി. ബാഹ്യകോൺ $\\angle CBE$ എന്നത് എതിർ ആന്തരകോൺ $\\angle ADC$-ക്ക് തുല്യമാണെന്ന് തെളിയിക്കുക.</p>`,
    solution_en: `<h4>Part (i): Supplementary Opposite Angles</h4>
      <p>In a cyclic quadrilateral, $\\angle A + \\angle C = 180^\\circ$ and $\\angle B + \\angle D = 180^\\circ$.</p>
      <ul>
        <li>For $x$:
          $$(2x + 4) + (3x + 16) = 180 \\implies 5x + 20 = 180 \\implies 5x = 160 \\implies \\mathbf{x = 32}$$
          $$\\angle A = 2(32) + 4 = 64 + 4 = \\mathbf{68^\\circ}$$
          $$\\angle C = 3(32) + 16 = 96 + 16 = \\mathbf{112^\\circ}$$</li>
        <li>For $y$:
          $$(4y - 4) + (2y + 10) = 180 \\implies 6y + 6 = 180 \\implies 6y = 174 \\implies \\mathbf{y = 29}$$
          $$\\angle B = 4(29) - 4 = 116 - 4 = \\mathbf{112^\\circ}$$
          $$\\angle D = 2(29) + 10 = 58 + 10 = \\mathbf{68^\\circ}$$</li>
      </ul>
      <h4>Part (ii): Proof that Cyclic Parallelogram is a Rectangle</h4>
      <ul>
        <li>In any parallelogram, opposite angles are equal: $\\angle A = \\angle C$.</li>
        <li>In a cyclic quadrilateral, opposite angles are supplementary: $\\angle A + \\angle C = 180^\\circ$.</li>
        <li>Substituting $\\angle C = \\angle A$:
          $$\\angle A + \\angle A = 180^\\circ \\implies 2\\angle A = 180^\\circ \\implies \\mathbf{\\angle A = 90^\\circ}$$</li>
        <li>Since opposite and consecutive angles are $90^\\circ$, all four angles are $90^\\circ$. A parallelogram with a right angle is a <b>rectangle</b>.</li>
      </ul>
      <h4>Part (iii): Exterior Angle Property</h4>
      <p>$\\angle ABC$ and exterior angle $\\angle CBE$ form a linear pair: $\\angle ABC + \\angle CBE = 180^\\circ$.</p>
      <p>In cyclic quadrilateral $ABCD$, opposite angles are supplementary: $\\angle ABC + \\angle ADC = 180^\\circ$.</p>
      <p>Comparing both equations: $\\mathbf{\\angle CBE = \\angle ADC}$.</p>`,
    solution_ml: `<h4>ഭാഗം (i): എതിർകോണുകളുടെ തുക</h4>
      <p>ചക്രിയ ചതുർഭുജത്തിൽ എതിർകോണുകളുടെ തുക $180^\\circ$ ആണ്:</p>
      <ul>
        <li>$x$-ന്റെ വില കാണുന്നു:
          $$(2x + 4) + (3x + 16) = 180 \\implies 5x = 160 \\implies \\mathbf{x = 32}$$
          $$\\angle A = 2(32) + 4 = \\mathbf{68^\\circ}, \\quad \\angle C = 3(32) + 16 = \\mathbf{112^\\circ}$$</li>
        <li>$y$-ന്റെ വില കാണുന്നു:
          $$(4y - 4) + (2y + 10) = 180 \\implies 6y = 174 \\implies \\mathbf{y = 29}$$
          $$\\angle B = 4(29) - 4 = \\mathbf{112^\\circ}, \\quad \\angle D = 2(29) + 10 = \\mathbf{68^\\circ}$$</li>
      </ul>
      <h4>ഭാഗം (ii): ചക്രിയ സാമാന്തരികം ചതുരമാണെന്ന തെളിവ്</h4>
      <ul>
        <li>സാമാന്തരികത്തിൽ എതിർകോണുകൾ തുല്യമാണ്: $\\angle A = \\angle C$.</li>
        <li>ചക്രിയ ചതുർഭുജത്തിൽ എതിർകോണുകളുടെ തുക $180^\\circ$ ആണ്: $\\angle A + \\angle C = 180^\\circ$.</li>
        <li>$\\angle A + \\angle A = 180^\\circ \\implies 2\\angle A = 180^\\circ \\implies \\mathbf{\\angle A = 90^\\circ}$.</li>
        <li>ഒരു കോൺ $90^\\circ$ ആയ സാമാന്തരികം <b>ചതുരമാണ്</b>.</li>
      </ul>
      <h4>ഭാഗം (iii): ബാഹ്യകോൺ തത്വം</h4>
      <p>രേഖീയജോഡി പ്രകാരം: $\\angle ABC + \\angle CBE = 180^\\circ$.</p>
      <p>ചക്രിയ ചതുർഭുജ തത്വപ്രകാരം: $\\angle ABC + \\angle ADC = 180^\\circ$.</p>
      <p>അതിനാൽ: $\\mathbf{\\angle CBE = \\angle ADC}$.</p>`,
    tested_en: 'Cyclic quadrilateral angle algebra and geometric proof of special properties.',
    tested_ml: 'ചക്രിയ ചതുർഭുജങ്ങളിലെ ബീജഗണിത പ്രശ്നപരിഹാരവും ജ്യാമിതീയ തെളിവുകളും.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.5 Intersecting Chords & Tangent-Secant Theorem (Textbook Page 56-58, Questions 1-4)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.5',
    concept: 'm10.2.5.intersecting-chords-and-tangents',
    sec: '10.2.5',
    type: 'written',
    marks: 4,
    time: 240,
    title_en: 'Chord Products & Geometric Square Construction (Textbook Page 56–58)',
    title_ml: 'ഞാണുകളുടെ ഗുണനഫലവും സമചതുര നിർമ്മിതിയും (പാഠപുസ്തകം പേജ് 56–58)',
    prompt_en: `<p>(i) Two chords $AB$ and $CD$ of a circle intersect at a point $P$ inside the circle. Given $PA = 4\\text{ cm}, PB = 6\\text{ cm}$, and $PC = 3\\text{ cm}$:</p>
      <p>(a) Find the length of $PD$.</p>
      <p>(b) What is the total length of chord $CD$?</p>
      <p>(ii) Two chords $AB$ and $CD$ are extended to intersect at an external point $P$. If $PA = 12\\text{ cm}, PB = 3\\text{ cm}$, and $PC = 9\\text{ cm}$, find the length of segment $PD$ and the length of chord $CD$.</p>
      <p>(iii) From an external point $P$, a tangent $PT$ touches the circle at $T$, and secant $PAB$ cuts the circle at $A$ and $B$. If $PT = 6\\text{ cm}$ and $PA = 4\\text{ cm}$, find the length of $PB$ and the length of chord $AB$.</p>
      <p>(iv) Explain the step-by-step geometric construction to draw a square having the same area as a rectangle of length $6\\text{ cm}$ and breadth $2\\text{ cm}$.</p>`,
    prompt_ml: `<p>(i) ഒരു വൃത്തത്തിനകത്തെ $P$ എന്ന ബിന്ദുവിൽ $AB, CD$ എന്നീ രണ്ട് ഞാണുകൾ ഖണ്ഡിക്കുന്നു. $PA = 4\\text{ cm}, PB = 6\\text{ cm}, PC = 3\\text{ cm}$ ആയാൽ:</p>
      <p>(a) $PD$-യുടെ നീളം എത്ര?</p>
      <p>(b) ഞാൺ $CD$-യുടെ ആകെ നീളം എത്ര?</p>
      <p>(ii) $AB, CD$ എന്നീ രണ്ട് ഞാണുകൾ പുറത്തേക്ക് നീട്ടി വൃത്തത്തിന് പുറത്തുള്ള $P$-യിൽ കൂട്ടിമുട്ടുന്നു. $PA = 12\\text{ cm}, PB = 3\\text{ cm}, PC = 9\\text{ cm}$ ആയാൽ $PD$-യുടെ നീളവും ഞാൺ $CD$-യുടെ നീളവും കണ്ടെത്തുക.</p>
      <p>(iii) വൃത്തത്തിന് പുറത്തുള്ള $P$-യിൽ നിന്നുള്ള തൊടുവര $PT$-യും, വൃത്തത്തെ $A, B$ എന്നിവയിൽ ഖണ്ഡിക്കുന്ന ഛേദകം $PAB$-യും വരച്ചിരിക്കുന്നു. $PT = 6\\text{ cm}, PA = 4\\text{ cm}$ ആയാൽ $PB$-യുടെ നീളവും ഞാൺ $AB$-യുടെ നീളവും കാണുക.</p>
      <p>(iv) നീളം $6\\text{ cm}$-ഉം വീതി $2\\text{ cm}$-ഉം ആയ ചതുരത്തിന് തുല്യ പരപ്പളവുള്ള സമചതുരം നിർമ്മിക്കുന്ന വിധം ഘട്ടങ്ങളായി വിശദീകരിക്കുക.</p>`,
    solution_en: `<h4>Part (i): Chords Intersecting Inside the Circle</h4>
      <p>(a) $PA \\cdot PB = PC \\cdot PD$</p>
      <p>$$4 \\times 6 = 3 \\times PD \\implies 24 = 3 \\times PD \\implies PD = \\frac{24}{3} = \\mathbf{8\\text{ cm}}$$</p>
      <p>(b) Chord $CD = PC + PD = 3 + 8 = \\mathbf{11\\text{ cm}}$.</p>
      <h4>Part (ii): Chords Intersecting Outside the Circle</h4>
      <p>By the intersecting secants theorem: $PA \\cdot PB = PC \\cdot PD$.</p>
      <p>$$12 \\times 3 = 9 \\times PD \\implies 36 = 9 \\times PD \\implies PD = \\frac{36}{9} = \\mathbf{4\\text{ cm}}$$</p>
      <p>Chord $CD = PC - PD = 9 - 4 = \\mathbf{5\\text{ cm}}$.</p>
      <h4>Part (iii): Tangent-Secant Theorem</h4>
      <p>$$PT^2 = PA \\cdot PB \\implies 6^2 = 4 \\times PB \\implies 36 = 4 \\times PB \\implies PB = \\frac{36}{4} = \\mathbf{9\\text{ cm}}$$</p>
      <p>Chord $AB = PB - PA = 9 - 4 = \\mathbf{5\\text{ cm}}$.</p>
      <h4>Part (iv): Constructing Square Equal in Area to Rectangle ($6\\text{ cm} \\times 2\\text{ cm}$)</h4>
      <ol>
        <li>Draw a line and mark segment $AB = 6\\text{ cm}$ and $BC = 2\\text{ cm}$ in a straight line, so total length $AC = 8\\text{ cm}$.</li>
        <li>Find the midpoint $M$ of $AC$ ($AM = 4\\text{ cm}$) and draw a semicircle on $AC$ as diameter.</li>
        <li>At point $B$ (the junction of the two segments), draw a perpendicular line to $AC$ meeting the semicircle at $D$.</li>
        <li>By the intersecting chords theorem, $BD^2 = AB \\cdot BC = 6 \\times 2 = 12 \\implies BD = \\sqrt{12}\\text{ cm}$.</li>
        <li>Construct a square with side equal to $BD$. Its area will be $BD^2 = 12\\text{ cm}^2$, exactly equal to the rectangle's area ($6 \\times 2 = 12\\text{ cm}^2$).</li>
      </ol>`,
    solution_ml: `<h4>ഭാഗം (i): വൃത്തത്തിനകത്ത് ഖണ്ഡിക്കുന്ന ഞാണുകൾ</h4>
      <p>(a) $PA \\cdot PB = PC \\cdot PD$</p>
      <p>$$4 \\times 6 = 3 \\times PD \\implies 24 = 3 \\times PD \\implies PD = \\mathbf{8\\text{ cm}}$$</p>
      <p>(b) ഞാൺ $CD = PC + PD = 3 + 8 = \\mathbf{11\\text{ cm}}$.</p>
      <h4>ഭാഗം (ii): വൃത്തത്തിന് പുറത്ത് ഖണ്ഡിക്കുന്ന ഞാണുകൾ</h4>
      <p>$PA \\cdot PB = PC \\cdot PD$</p>
      <p>$$12 \\times 3 = 9 \\times PD \\implies 36 = 9 \\times PD \\implies PD = \\mathbf{4\\text{ cm}}$$</p>
      <p>ഞാൺ $CD = PC - PD = 9 - 4 = \\mathbf{5\\text{ cm}}$.</p>
      <h4>ഭാഗം (iii): തൊടുവര-ഛേദക സിദ്ധാന്തം</h4>
      <p>$$PT^2 = PA \\cdot PB \\implies 6^2 = 4 \\times PB \\implies 36 = 4 \\times PB \\implies PB = \\mathbf{9\\text{ cm}}$$</p>
      <p>ഞാൺ $AB = PB - PA = 9 - 4 = \\mathbf{5\\text{ cm}}$.</p>
      <h4>ഭാഗം (iv): തുല്യ പരപ്പളവുള്ള സമചതുര നിർമ്മിതി ($6\\text{ cm} \\times 2\\text{ cm}$)</h4>
      <ol>
        <li>ഒരു വരയിൽ $AB = 6\\text{ cm}$-ഉം തുടർന്ന് $BC = 2\\text{ cm}$-ഉം ഒരേ നേർരേഖയിൽ അടയാളപ്പെടുത്തുന്നു ($AC = 8\\text{ cm}$).</li>
        <li>$AC$ വ്യാസമാക്കി ഒരു അർദ്ധവൃത്തം വരയ്ക്കുന്നു.</li>
        <li>$B$ എന്ന ബിന്ദുവിൽ നിന്ന് $AC$-ക്ക് ലംബം വരച്ച് അത് അർദ്ധവൃത്തത്തിൽ മുട്ടുന്ന ബിന്ദുവിനെ $D$ എന്ന് അടയാളപ്പെടുത്തുന്നു.</li>
        <li>ഞാണുകളുടെ ഗുണനഫല സിദ്ധാന്തപ്രകാരം: $BD^2 = AB \\cdot BC = 6 \\times 2 = 12 \\implies BD = \\sqrt{12}\\text{ cm}$.</li>
        <li>$BD$ വശമാക്കി സമചതുരം വരച്ചാൽ അതിന്റെ പരപ്പളവ് ചതുരത്തിന്റെ പരപ്പളവിന് ($12\\text{ cm}^2$) തുല്യമായിരിക്കും.</li>
      </ol>`,
    tested_en: 'Internal and external chord product theorems, tangent-secant calculations, and mean proportional square construction.',
    tested_ml: 'ഞാണുകളുടെ ആന്തര-ബാഹ്യ ഗുണനഫല സിദ്ധാന്തം, തൊടുവര-ഛേദക പ്രയോഗം, സമചതുര നിർമ്മിതി.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.6 Chord Distance from Center & Parallel Chords (SCERT Textbook)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.6',
    concept: 'm10.2.5.intersecting-chords-and-tangents',
    sec: '10.2.5',
    type: 'written',
    marks: 4,
    time: 210,
    title_en: 'Chords and Distance from the Center',
    title_ml: 'ഞാണുകളും കേന്ദ്രത്തിൽ നിന്നുള്ള അകലവും',
    prompt_en: `<p>(i) A chord of length $16\\text{ cm}$ is at a distance of $6\\text{ cm}$ from the center of a circle. Find the radius of the circle.</p>
      <p>(ii) In the same circle, find the distance of a chord of length $12\\text{ cm}$ from the center.</p>
      <p>(iii) Two parallel chords of lengths $12\\text{ cm}$ and $16\\text{ cm}$ are drawn in a circle of radius $10\\text{ cm}$ on opposite sides of the center. Find the distance between the two chords.</p>
      <p>(iv) What would be the distance between these two parallel chords if they were drawn on the same side of the center?</p>`,
    prompt_ml: `<p>(i) ഒരു വൃത്തത്തിൽ $16\\text{ cm}$ നീളമുള്ള ഒരു ഞാൺ കേന്ദ്രത്തിൽ നിന്നും $6\\text{ cm}$ അകലെയാണ്. വൃത്തത്തിന്റെ ആരം കാണുക.</p>
      <p>(ii) ഇതേ വൃത്തത്തിൽ $12\\text{ cm}$ നീളമുള്ള മറ്റൊരു ഞാണിന്റെ കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം എത്ര?</p>
      <p>(iii) $10\\text{ cm}$ ആരമുള്ള ഒരു വൃത്തത്തിൽ കേന്ദ്രത്തിന്റെ ഇരുവശങ്ങളിലുമായി $12\\text{ cm}$, $16\\text{ cm}$ നീളമുള്ള രണ്ട് സമാന്തര ഞാണുകൾ വരച്ചിരിക്കുന്നു. ഈ ഞാണുകൾ തമ്മിലുള്ള അകലം കാണുക.</p>
      <p>(iv) ഈ രണ്ട് സമാന്തര ഞാണുകൾ കേന്ദ്രത്തിന്റെ ഒരേ വശത്താണെങ്കിൽ അവ തമ്മിലുള്ള അകലം എത്രയായിരിക്കും?</p>`,
    solution_en: `<h4>Part (i): Radius from Chord and Perpendicular Distance</h4>
      <p>The perpendicular from the center bisects the chord. Half-chord $= \\frac{16}{2} = 8\\text{ cm}$.</p>
      <p>By the Pythagorean theorem:</p>
      $$r = \\sqrt{d^2 + (\\text{half-chord})^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = \\mathbf{10\\text{ cm}}$$
      <h4>Part (ii): Distance of $12\\text{ cm}$ Chord from Center</h4>
      <p>Half-chord $= \\frac{12}{2} = 6\\text{ cm}$. Radius $r = 10\\text{ cm}$.</p>
      $$d = \\sqrt{r^2 - (\\text{half-chord})^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = \\mathbf{8\\text{ cm}}$$
      <h4>Part (iii): Distance Between Chords on Opposite Sides</h4>
      <p>Let $d_1$ and $d_2$ be distances from center to the two chords:</p>
      <p>For $16\\text{ cm}$ chord: $d_1 = \\sqrt{10^2 - 8^2} = 6\\text{ cm}$.</p>
      <p>For $12\\text{ cm}$ chord: $d_2 = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$.</p>
      <p>Since they are on opposite sides of the center:</p>
      $$\\text{Distance} = d_1 + d_2 = 6 + 8 = \\mathbf{14\\text{ cm}}$$
      <h4>Part (iv): Distance Between Chords on the Same Side</h4>
      <p>Since they are on the same side of the center:</p>
      $$\\text{Distance} = d_2 - d_1 = 8 - 6 = \\mathbf{2\\text{ cm}}$$`,
    solution_ml: `<h4>ഭാഗം (i): ആരവും ലംബദൂരവും</h4>
      <p>കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബം ഞാണിനെ സമഭാഗം ചെയ്യുന്നു. ഞാണിന്റെ പകുതി $= \\frac{16}{2} = 8\\text{ cm}$.</p>
      <p>പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:</p>
      $$r = \\sqrt{d^2 + (\\text{ഞാണിന്റെ പകുതി})^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = \\mathbf{10\\text{ cm}}$$
      <h4>ഭാഗം (ii): $12\\text{ cm}$ ഞാണിന്റെ കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം</h4>
      <p>ഞാണിന്റെ പകുതി $= \\frac{12}{2} = 6\\text{ cm}$. ആരം $r = 10\\text{ cm}$.</p>
      $$d = \\sqrt{r^2 - 6^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = \\mathbf{8\\text{ cm}}$$
      <h4>ഭാഗം (iii): കേന്ദ്രത്തിന്റെ ഇരുവശങ്ങളിലുള്ള ഞാണുകൾ തമ്മിലുള്ള അകലം</h4>
      <p>$16\\text{ cm}$ ഞാണിലേക്കുള്ള അകലം $d_1 = \\sqrt{10^2 - 8^2} = 6\\text{ cm}$.</p>
      <p>$12\\text{ cm}$ ഞാണിലേക്കുള്ള അകലം $d_2 = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$.</p>
      <p>ഇവ കേന്ദ്രത്തിന്റെ ഇരുവശങ്ങളിലായതിനാൽ:</p>
      $$\\text{അകലം} = d_1 + d_2 = 6 + 8 = \\mathbf{14\\text{ cm}}$$
      <h4>ഭാഗം (iv): കേന്ദ്രത്തിന്റെ ഒരേ വശത്തുള്ള ഞാണുകൾ തമ്മിലുള്ള അകലം</h4>
      <p>ഞാണുകൾ കേന്ദ്രത്തിന്റെ ഒരേ വശത്തായതിനാൽ:</p>
      $$\\text{അകലം} = d_2 - d_1 = 8 - 6 = \\mathbf{2\\text{ cm}}$$`,
    tested_en: 'Perpendicular from center to chord, Pythagorean relationship with radius, and parallel chord spacing.',
    tested_ml: 'കേന്ദ്രത്തിൽ നിന്ന് ഞാണിലേക്കുള്ള ലംബവും ആരവും തമ്മിലുള്ള ബന്ധം, സമാന്തര ഞാണുകൾ തമ്മിലുള്ള അകലം.'
  }
);
