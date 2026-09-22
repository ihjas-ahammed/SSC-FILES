/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 2: Circles (വൃത്തങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.2.1 Angle in a Semicircle (അർദ്ധവൃത്തത്തിലെ കോൺ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.2.1.angle-in-semicircle',
    sec: '10.2.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Angle in a Semicircle (Thales Theorem)',
    title_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ (ഥേൽസ് സിദ്ധാന്തം)',
    oneLine_en: 'The angle subtended by a diameter at any point on the semicircle is a right angle (90°). An angle inside the circle is obtuse (>90°), and an angle outside is acute (<90°).',
    oneLine_ml: 'ഒരു വ്യാസം അർദ്ധവൃത്തത്തിലെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ മട്ടകോണാണ് (90°); വൃത്തത്തിനകത്താണെങ്കിൽ ബൃഹത്കോണും (>90°), വൃത്തത്തിന് പുറത്താണെങ്കിൽ ന്യൂനകോണുമായിരിക്കും (<90°).',
    statement_en: `<p><b>Thales Theorem on Semicircles:</b></p>
      <p>If $AB$ is the diameter of a circle, and $P$ is any point on the circle other than $A$ and $B$, then:</p>
      $$\\mathbf{\\angle APB = 90^\\circ}$$
      <p>The angle subtended by the diameter at any point on the circumference is always a right angle.</p>
      <p><b>Interior and Exterior Points:</b></p>
      <ul>
        <li><b>On the circle:</b> If $P$ is on the circle, $\\mathbf{\\angle APB = 90^\\circ}$.</li>
        <li><b>Inside the circle:</b> If a point $Q$ lies strictly inside the circle on the same side of $AB$, $\\mathbf{\\angle AQB > 90^\\circ}$ (obtuse angle).</li>
        <li><b>Outside the circle:</b> If a point $R$ lies strictly outside the circle, $\\mathbf{\\angle ARB < 90^\\circ}$ (acute angle).</li>
      </ul>
      <p><b>Converse Property:</b> The circle drawn with the hypotenuse of a right-angled triangle as diameter passes through the opposite right-angled vertex.</p>`,
    statement_ml: `<p><b>അർദ്ധവൃത്തത്തിലെ കോൺ സിദ്ധാന്തം:</b></p>
      <p>$AB$ വ്യാസമായ വൃത്തത്തിലെ ഒരു ബിന്ദുവാണ് $P$ എങ്കിൽ ($A, B$ ഒഴികെ):</p>
      $$\\mathbf{\\angle APB = 90^\\circ}$$
      <p>വ്യാസം അർദ്ധവൃത്തത്തിലെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ എപ്പോഴും ഒരു മട്ടകോണായിരിക്കും.</p>
      <p><b>വൃത്തത്തിനകത്തും പുറത്തുമുള്ള ബിന്ദുക്കളുടെ കോണളവുകൾ:</b></p>
      <ul>
        <li><b>വൃത്തത്തിലെ ബിന്ദു:</b> $P$ വൃത്തത്തിലാണെങ്കിൽ, $\\mathbf{\\angle APB = 90^\\circ}$.</li>
        <li><b>വൃത്തത്തിനകത്തെ ബിന്ദു:</b> $Q$ വൃത്തത്തിനകത്താണെങ്കിൽ, $\\mathbf{\\angle AQB > 90^\\circ}$ (ബൃഹത്കോൺ).</li>
        <li><b>വൃത്തത്തിന് പുറത്തെ ബിന്ദു:</b> $R$ വൃത്തത്തിന് പുറത്താണെങ്കിൽ, $\\mathbf{\\angle ARB < 90^\\circ}$ (ന്യൂനകോൺ).</li>
      </ul>
      <p><b>മറുതല സിദ്ധാന്തം:</b> ഒരു മട്ടത്രികോണത്തിന്റെ കർണ്ണം വ്യാസമാക്കി വൃത്തം വരച്ചാൽ, ആ വൃത്തം മട്ടകോണിന്റെ ശീർഷത്തിലൂടെ കടന്നുപോകും.</p>`,
    intuition_en: `<p>Connecting the center $O$ to $P$ divides $\\triangle APB$ into two isosceles triangles because $OA = OP = OB = r$. The angles at $A$ and $B$ together equal the angle at $P$, forcing $\\angle APB = 180^\\circ / 2 = 90^\\circ$.</p>`,
    intuition_ml: `<p>വൃത്തകേന്ദ്രം $O$-യിൽ നിന്ന് $P$-ലേക്ക് വര വരയ്ക്കുമ്പോൾ രണ്ട് സമപാർശ്വ ത്രികോണങ്ങൾ ഉണ്ടാകുന്നു ($OA = OP = OB$). അതിനാൽ $P$-യിലെ കോൺ മട്ടകോണായി മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Join center O to point P on the semicircle. Split triangle APB into two isosceles triangles OA P and OBP.',
      idea_ml: 'കേന്ദ്രം $O$-യും $P$-യും യോജിപ്പിച്ച് രണ്ട് സമപാർശ്വ ത്രികോണങ്ങളാക്കുന്നു.',
      why_en: 'Radii OA = OP = OB force base angles equal; triangle angle sum is 180°.',
      why_ml: 'ആരങ്ങൾ തുല്യമായതിനാൽ പാദകോണുകൾ തുല്യമാകുന്നു; ത്രികോണത്തിലെ കോണുകളുടെ തുക $180^\\circ$.',
      rungs_en: [
        { why_en: 'In triangle OAP, OA = OP (radii).', m: '\\angle OPA = \\angle OAP = x' },
        { why_en: 'In triangle OPB, OB = OP (radii).', m: '\\angle OPB = \\angle OBP = y' },
        { why_en: 'Angle APB is the sum of both parts.', m: '\\angle APB = x + y' },
        { why_en: 'Sum of angles in triangle APB is 180°.', m: 'x + y + (x + y) = 180^\\circ \\implies 2(x + y) = 180^\\circ \\implies x + y = 90^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'ത്രികോണം $OAP$-യിൽ $OA = OP$ (ആരങ്ങൾ).', m: '\\angle OPA = \\angle OAP = x' },
        { why_ml: 'ത്രികോണം $OPB$-യിൽ $OB = OP$ (ആരങ്ങൾ).', m: '\\angle OPB = \\angle OBP = y' },
        { why_ml: '$\\angle APB$ എന്നത് $x + y$ ആണ്.', m: '\\angle APB = x + y' },
        { why_ml: 'ത്രികോണത്തിലെ മൂന്ന് കോണുകളുടെ തുക $180^\\circ$.', m: '2(x + y) = 180^\\circ \\implies x + y = 90^\\circ' }
      ]
    },
    needs: ['m9.5.3.angle-in-a-semicircle'],
    traps_en: [
      'The chord AB MUST be a diameter passing through the center O for the angle to be 90°.',
      'A point inside the circle makes an angle GREATER than 90°, not smaller.'
    ],
    traps_ml: [
      'കോൺ $90^\\circ$ ആകണമെങ്കിൽ $AB$ വൃത്തത്തിന്റെ വ്യാസം തന്നെയായിരിക്കണം.',
      'വൃത്തത്തിനകത്തുള്ള ബിന്ദുവുണ്ടാക്കുന്ന കോൺ $90^\\circ$-ൽ കൂടുതലാണ് (ബൃഹത്കോൺ).'
    ],
    cards_en: [
      { q: 'What is the measure of the angle subtended by a diameter on a semicircle?', a: 'Always exactly $\\mathbf{90^\\circ}$ (a right angle).', kind: 'recall' },
      { q: 'A circle is drawn with hypotenuse AB = 10 cm of a right triangle as diameter. Where does the right-angled vertex C lie?', a: 'Vertex $C$ lies **on the circle** because $\\angle C = 90^\\circ$.', kind: 'apply' },
      { q: 'If AB is a diameter and P is a point inside the circle, what can you say about ∠APB?', a: '$\\angle APB > 90^\\circ$ (it is an **obtuse angle**).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'അർദ്ധവൃത്തത്തിലെ കോണിന്റെ അളവ് എത്രയാണ്?', a: 'എപ്പോഴും കൃത്യം $\\mathbf{90^\\circ}$ (മട്ടകോൺ).', kind: 'recall' },
      { q: 'ഒരു മട്ടത്രികോണത്തിന്റെ കർണ്ണം വ്യാസമാക്കി വൃത്തം വരച്ചാൽ മട്ടകോണിന്റെ ശീർഷം എവിടെയായിരിക്കും?', a: 'മട്ടകോൺ $90^\\circ$ ആയതിനാൽ ആ ശീർഷം **വൃത്തത്തിൽ തന്നെ** ആയിരിക്കും.', kind: 'apply' },
      { q: 'AB വ്യാസവും P വൃത്തത്തിനകത്തെ ബിന്ദുവുമായാൽ ∠APB-യെക്കുറിച്ച് എന്ത് പറയാം?', a: '$\\angle APB > 90^\\circ$ ആണ് (ഇതൊരു **ബൃഹത്കോണാണ്**).', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.2 Central Angle & Inscribed Angle Theorem (കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.2.2.inscribed-angle-and-central-angle',
    sec: '10.2.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Central Angle & Inscribed Angle Theorem',
    title_ml: 'കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും',
    oneLine_en: 'The angle subtended by an arc at any point on the alternate arc of a circle is half the central angle subtended by the same arc: ∠APB = (1/2)∠AOB.',
    oneLine_ml: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണിന്റെ പകുതിയായിരിക്കും ആ ചാപം മറുചാപത്തിലെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ: $\\angle APB = \\frac{1}{2}\\angle AOB$.',
    statement_en: `<p><b>Inscribed Angle Theorem:</b></p>
      <p>Let $AB$ be an arc of a circle with centre $O$. If $P$ is any point on the remaining part of the circle (alternate arc), then:</p>
      $$\\mathbf{\\angle APB = \\frac{1}{2} \\angle AOB}$$
      <p>Conversely, the central angle is twice the inscribed angle: $\\mathbf{\\angle AOB = 2\\angle APB}$.</p>
      <p><b>Major Arc and Minor Arc Angles:</b></p>
      <ul>
        <li>If arc $AB$ is a minor arc subtending central angle $\\theta$ ($< 180^\\circ$), the angle in the major arc is acute: $\\mathbf{\\frac{\\theta}{2} < 90^\\circ}$.</li>
        <li>The angle subtended in the minor arc itself is obtuse: $\\mathbf{180^\\circ - \\frac{\\theta}{2}}$.</li>
      </ul>`,
    statement_ml: `<p><b>കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും സിദ്ധാന്തം:</b></p>
      <p>കേന്ദ്രം $O$ ആയ വൃത്തത്തിലെ ഒരു ചാപമാണ് $AB$. ഈ ചാപത്തിന്റെ മറുചാപത്തിലെ ഏതൊരു ബിന്ദുവാണ് $P$ എങ്കിൽ:</p>
      $$\\mathbf{\\angle APB = \\frac{1}{2} \\angle AOB}$$
      <p>തിരിച്ച്, കേന്ദ്രകോൺ വൃത്തത്തിലെ കോണിന്റെ ഇരട്ടിയായിരിക്കും: $\\mathbf{\\angle AOB = 2\\angle APB}$.</p>
      <p><b>വലിയ ചാപത്തിലെയും ചെറിയ ചാപത്തിലെയും കോണുകൾ:</b></p>
      <ul>
        <li>ചെറിയ ചാപം ഉണ്ടാക്കുന്ന കേന്ദ്രകോൺ $\\theta$ ആണെങ്കിൽ, മറുചാപത്തിലെ (വലിയ ചാപത്തിലെ) കോൺ ന്യൂനകോണായിരിക്കും: $\\mathbf{\\frac{\\theta}{2} < 90^\\circ}$.</li>
        <li>ചെറിയ ചാപത്തിൽ തന്നെയുള്ള കോൺ ബൃഹത്കോണായിരിക്കും: $\\mathbf{180^\\circ - \\frac{\\theta}{2}}$.</li>
      </ul>`,
    intuition_en: `<p>Viewing an object from the center gives a direct angular perspective $\\angle AOB$. Stepping back to the perimeter at $P$ doubles the distance from the baseline, cutting the angular aperture in half.</p>`,
    intuition_ml: `<p>വൃത്തകേന്ദ്രത്തിൽ നിന്ന് നോക്കുമ്പോൾ കാണുന്ന കോണിന്റെ കൃത്യം പകുതി കോണളവ് മാത്രമേ വൃത്തപരിധിയിൽ നിന്ന് നോക്കുമ്പോൾ ആ ചാപത്തിന് കാണാൻ കഴിയൂ.</p>`,
    proof: {
      idea_en: 'Draw the diameter through P and center O. Apply exterior angle theorem to two isosceles triangles.',
      idea_ml: '$P$-യിലൂടെ വ്യാസം വരച്ച് രണ്ട് സമപാർശ്വ ത്രികോണങ്ങളിൽ ബാഹ്യകോൺ തത്വം പ്രയോഗിക്കുന്നു.',
      why_en: 'Radii OA = OP = OB create two isosceles triangles; exterior angle at O equals sum of interior opposite angles.',
      why_ml: 'ആരങ്ങൾ തുല്യമായതിനാൽ സമപാർശ്വ ത്രികോണങ്ങളിലെ ബാഹ്യകോൺ ആന്തരകോണുകളുടെ തുകയ്ക്ക് തുല്യമാകുന്നു.',
      rungs_en: [
        { why_en: 'Draw line PO extended to meet circle at Q.', m: 'OA = OP \\implies \\angle OPA = \\angle OAP' },
        { why_en: 'Exterior angle of triangle OPA at O.', m: '\\angle AOQ = \\angle OPA + \\angle OAP = 2\\angle OPA' },
        { why_en: 'Exterior angle of triangle OPB at O.', m: '\\angle BOQ = \\angle OPB + \\angle OBP = 2\\angle OPB' },
        { why_en: 'Combine both central parts.', m: '\\angle AOB = \\angle AOQ + \\angle BOQ = 2(\\angle OPA + \\angle OPB) = 2\\angle APB' }
      ],
      rungs_ml: [
        { why_ml: '$P$-ലൂടെ കേന്ദ്രം $O$-യെ ബന്ധിപ്പിച്ച് വ്യാസം $PQ$ വരയ്ക്കുന്നു.', m: 'OA = OP \\implies \\angle OPA = \\angle OAP' },
        { why_ml: 'ത്രികോണം $OAP$-യുടെ ബാഹ്യകോൺ.', m: '\\angle AOQ = 2\\angle OPA' },
        { why_ml: 'ത്രികോണം $OPB$-യുടെ ബാഹ്യകോൺ.', m: '\\angle BOQ = 2\\angle OPB' },
        { why_ml: 'രണ്ട് കോണുകളും കൂട്ടുമ്പോൾ.', m: '\\angle AOB = 2\\angle APB \\implies \\angle APB = \\frac{1}{2}\\angle AOB' }
      ]
    },
    needs: ['m10.2.1.angle-in-semicircle'],
    traps_en: [
      'Do not confuse the central angle with the angle in the circle. The central angle is TWICE the inscribed angle, never the other way around.',
      'Check which arc: the angle in the minor arc is supplementary to the angle in the major arc.'
    ],
    traps_ml: [
      'കേന്ദ്രകോൺ വൃത്തത്തിലെ കോണിന്റെ ഇരട്ടിയാണ്; പകുതിയാക്കി മാറിപ്പോകരുത്.',
      'ചെറിയ ചാപത്തിലെ കോൺ ബൃഹത്കോണും ($180^\\circ - \\frac{\\theta}{2}$), വലിയ ചാപത്തിലെ കോൺ ന്യൂനകോണുമാണ് ($\\frac{\\theta}{2}$).'
    ],
    cards_en: [
      { q: 'An arc subtends a central angle of 130°. What is the angle subtended by it on the alternate arc?', a: '$\\angle APB = \\frac{130^\\circ}{2} = \\mathbf{65^\\circ}$.', kind: 'apply' },
      { q: 'An inscribed angle on a circle is 38°. What is the central angle of the same arc?', a: 'Central angle $\\angle AOB = 2 \\times 38^\\circ = \\mathbf{76^\\circ}$.', kind: 'apply' },
      { q: 'A chord of length equal to the radius is drawn. What is the central angle and the angle in the major arc?', a: 'Forms equilateral triangle with center: central angle $= \\mathbf{60^\\circ}$; angle in major arc $= \\frac{60^\\circ}{2} = \\mathbf{30^\\circ}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ 130° ആയാൽ മറുചാപത്തിലെ കോൺ എത്ര?', a: '$\\frac{130^\\circ}{2} = \\mathbf{65^\\circ}$.', kind: 'apply' },
      { q: 'വൃത്തത്തിലെ ഒരു കോൺ 38° ആണെങ്കിൽ അതേ ചാപത്തിന്റെ കേന്ദ്രകോൺ എത്ര?', a: '$2 \\times 38^\\circ = \\mathbf{76^\\circ}$.', kind: 'apply' },
      { q: 'ആരത്തിന് തുല്യമായ നീളമുള്ള ഒരു ഞാൺ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണും മറുചാപത്തിലെ കോണും എത്ര?', a: 'സമഭുജ ത്രികോണം രൂപപ്പെടുന്നു: കേന്ദ്രകോൺ $= \\mathbf{60^\\circ}$, മറുചാപത്തിലെ കോൺ $= \\frac{60^\\circ}{2} = \\mathbf{30^\\circ}$.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.3 Angles in Same Segment & Alternate Segment (ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.2.3.angles-in-same-segment',
    sec: '10.2.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Angles in the Same Segment & Opposite Arcs',
    title_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകളും എതിർ ചാപങ്ങളും',
    oneLine_en: 'Angles in the same segment of a circle are equal (∠APB = ∠AQB). The sum of angles in opposite arcs is supplementary (∠P + ∠Q = 180°).',
    oneLine_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമായിരിക്കും ($\\angle APB = \\angle AQB$); ഒരു ചാപത്തിലെയും അതിന്റെ എതിർ ചാപത്തിലെയും കോണുകളുടെ തുക $180^\\circ$ ആയിരിക്കും.',
    statement_en: `<p><b>Angles in the Same Segment:</b></p>
      <p>Let $AB$ be a chord of a circle. If $P$ and $Q$ are any two points on the same circular arc bounded by $AB$, then:</p>
      $$\\mathbf{\\angle APB = \\angle AQB}$$
      <p>Because every inscribed angle on that arc is equal to half of the same central angle $\\angle AOB$.</p>
      <p><b>Angles in Opposite Arcs:</b></p>
      <p>If $P$ is on one arc of $AB$, and $Q$ is on the opposite arc (together completing the circle):</p>
      $$\\mathbf{\\angle APB + \\angle AQB = 180^\\circ}$$
      <p>The sum of the angles in alternate arcs is always two right angles ($180^\\circ$).</p>`,
    statement_ml: `<p><b>ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ:</b></p>
      <p>$AB$ എന്ന ഞാൺ നിർണ്ണയിക്കുന്ന ഒരേ വൃത്തഖണ്ഡത്തിലെ രണ്ട് ബിന്ദുക്കളാണ് $P, Q$ എങ്കിൽ:</p>
      $$\\mathbf{\\angle APB = \\angle AQB}$$
      <p>കാരണം ഇവ രണ്ടും ഒരേ കേന്ദ്രകോണിന്റെ ($\\angle AOB$) പകുതിക്ക് തുല്യമായിരിക്കും.</p>
      <p><b>എതിർ ചാപങ്ങളിലെ കോണുകളുടെ തുക:</b></p>
      <p>$P$ ഒരു ചാപത്തിലും $Q$ അതിന്റെ എതിർ ചാപത്തിലുമാണെങ്കിൽ (രണ്ട് ചാപങ്ങളും ചേർന്ന് വൃത്തം പൂർത്തിയാകുന്നു):</p>
      $$\\mathbf{\\angle APB + \\angle AQB = 180^\\circ}$$
      <p>ഒരു ചാപത്തിലെയും എതിർ ചാപത്തിലെയും കോണുകൾ അനുപൂരകങ്ങളാണ് (തുക $180^\\circ$).</p>`,
    intuition_en: `<p>The central angles of the two opposite arcs sum to $360^\\circ$ (a full circle). Since the inscribed angle in each arc is half its central partner, their sum is $\\frac{360^\\circ}{2} = 180^\\circ$.</p>`,
    intuition_ml: `<p>എതിർ ചാപങ്ങൾ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണുകൾ കൂട്ടിയാൽ $360^\\circ$ (ഒരു പൂർണ്ണ വൃത്തം) കിട്ടും; വൃത്തത്തിലെ കോണുകൾ ഇവയുടെ പകുതിയായതിനാൽ തുക $180^\\circ$ ആകുന്നു.</p>`,
    proof: {
      idea_en: 'Relate the two inscribed angles to their corresponding central angles that form a complete 360° turn.',
      idea_ml: 'രണ്ട് കേന്ദ്രകോണുകളുടെ തുക $360^\\circ$ ആണെന്ന വസ്തുത ഉപയോഗിക്കുന്നു.',
      why_en: 'Central angle + reflex central angle = 360°, and each inscribed angle is half of its central partner.',
      why_ml: 'കേന്ദ്രകോണും ബൃഹത് കേന്ദ്രകോണും കൂട്ടിയാൽ $360^\\circ$, വൃത്തത്തിലെ കോണുകൾ ഇവയുടെ പകുതിയാണ്.',
      rungs_en: [
        { why_en: 'Let central angle of minor arc AB be θ.', m: '\\angle APB = \\frac{\\theta}{2}' },
        { why_en: 'Central angle of major arc AB is 360° - θ.', m: '\\angle AQB = \\frac{360^\\circ - \\theta}{2} = 180^\\circ - \\frac{\\theta}{2}' },
        { why_en: 'Add both inscribed angles together.', m: '\\angle APB + \\angle AQB = \\frac{\\theta}{2} + 180^\\circ - \\frac{\\theta}{2} = 180^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'ചെറിയ ചാപത്തിന്റെ കേന്ദ്രകോൺ $\\theta$ ആണെന്നിരിക്കട്ടെ.', m: '\\angle APB = \\frac{\\theta}{2}' },
        { why_ml: 'എതിർ ചാപത്തിന്റെ കേന്ദ്രകോൺ $360^\\circ - \\theta$ ആണ്.', m: '\\angle AQB = \\frac{360^\\circ - \\theta}{2} = 180^\\circ - \\frac{\\theta}{2}' },
        { why_ml: 'രണ്ട് കോണുകളും കൂട്ടുമ്പോൾ.', m: '\\angle APB + \\angle AQB = 180^\\circ' }
      ]
    },
    needs: ['m10.2.2.inscribed-angle-and-central-angle'],
    traps_en: [
      'Two angles are equal ONLY if they are in the SAME segment. Angles in OPPOSITE segments sum to 180°, they are not equal (unless 90°).',
      'The points P and Q must both be on the circle circumference.'
    ],
    traps_ml: [
      'ഒരേ ഭാഗത്തുള്ള (ഒരേ ഖണ്ഡത്തിലെ) കോണുകൾ മാത്രമേ തുല്യമാകൂ; എതിർ ഭാഗത്തുള്ള കോണുകളുടെ തുക $180^\\circ$ ആണ്.',
      '$P, Q$ എന്നീ ബിന്ദുക്കൾ വൃത്തത്തിൽ തന്നെയായിരിക്കണം.'
    ],
    cards_en: [
      { q: 'In a circle, ∠APB = 55° on an arc. What is the angle subtended by the same chord at another point Q on the SAME arc?', a: '$\\angle AQB = \\angle APB = \\mathbf{55^\\circ}$ (angles in the same segment).', kind: 'apply' },
      { q: 'If ∠APB = 70° on one arc of a circle, what is the angle subtended on the OPPOSITE arc?', a: 'Opposite arc angle $= 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$.', kind: 'apply' },
      { q: 'State the relation between angles in the same segment of a circle.', a: 'Angles in the same segment of a circle are **equal** to each other.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു വൃത്തത്തിൽ ഒരേ ചാപഖണ്ഡത്തിൽ ∠APB = 55° ആയാൽ അതേ ഭാഗത്തെ മറ്റൊരു ബിന്ദു Q-വിലെ കോൺ എത്ര?', a: '$\\angle AQB = \\mathbf{55^\\circ}$ (ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്).', kind: 'apply' },
      { q: 'ഒരു ചാപത്തിലെ കോൺ ∠APB = 70° ആയാൽ എതിർ ചാപത്തിലെ കോൺ എത്ര?', a: 'എതിർ ചാപത്തിലെ കോൺ $= 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$.', kind: 'apply' },
      { q: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തമ്മിലുള്ള ബന്ധം പ്രസ്താവിക്കുക.', a: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ എല്ലാ കോണുകളും **തുല്യമായിരിക്കും**.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.4 Cyclic Quadrilaterals & Supplementary Angles (ചക്രിയ ചതുർഭുജങ്ങൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.2.4.cyclic-quadrilaterals',
    sec: '10.2.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Cyclic Quadrilaterals & Supplementary Angles',
    title_ml: 'ചക്രിയ ചതുർഭുജങ്ങൾ',
    oneLine_en: 'A quadrilateral is cyclic if all four vertices lie on a circle. In a cyclic quadrilateral, opposite angles are supplementary (sum = 180°), and any exterior angle equals the opposite interior angle.',
    oneLine_ml: 'നാല് ശീർഷങ്ങളും ഒരു വൃത്തത്തിലുള്ള ചതുർഭുജമാണ് ചക്രിയ ചതുർഭുജം; ഇതിൽ എതിർകോണുകളുടെ തുക 180° ആയിരിക്കും, ബാഹ്യകോൺ എതിർ ആന്തരകോണിന് തുല്യമായിരിക്കും.',
    statement_en: `<p><b>Definition of Cyclic Quadrilateral:</b></p>
      <p>A quadrilateral whose four vertices all lie on the circumference of a circle is called a <b>cyclic quadrilateral</b>.</p>
      <p><b>Core Theorems on Cyclic Quadrilaterals:</b></p>
      <ul>
        <li><b>Opposite Angles are Supplementary:</b> In any cyclic quadrilateral $ABCD$:
          $$\\mathbf{\\angle A + \\angle C = 180^\\circ \\quad \\text{and} \\quad \\angle B + \\angle D = 180^\\circ}$$</li>
        <li><b>Converse:</b> If the sum of any pair of opposite angles of a quadrilateral is $180^\\circ$, then its four vertices lie on a circle (it is cyclic).</li>
        <li><b>Exterior Angle Property:</b> Any exterior angle of a cyclic quadrilateral is strictly equal to the interior opposite angle:
          $$\\mathbf{\\angle \\text{Ext} = \\angle \\text{Int Opposite}}$$</li>
      </ul>
      <p><b>Special Geometric Applications:</b></p>
      <ul>
        <li>Any <b>rectangle</b> and any <b>square</b> is always cyclic.</li>
        <li>A <b>parallelogram</b> is cyclic if and only if it is a rectangle.</li>
        <li>A <b>rhombus</b> is cyclic if and only if it is a square.</li>
        <li>A <b>trapezium</b> is cyclic if and only if it is an <b>isosceles trapezium</b> (non-parallel sides are equal).</li>
      </ul>`,
    statement_ml: `<p><b>ചക്രിയ ചതുർഭുജത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>നാല് ശീർഷങ്ങളും ഒരേ വൃത്തത്തിൽ സ്ഥിതിചെയ്യുന്ന ചതുർഭുജത്തെയാണ് <b>ചക്രിയ ചതുർഭുജം</b> എന്ന് വിളിക്കുന്നത്.</p>
      <p><b>പ്രധാന സിദ്ധാന്തങ്ങൾ:</b></p>
      <ul>
        <li><b>എതിർകോണുകളുടെ തുക:</b> ഏതൊരു ചക്രിയ ചതുർഭുജത്തിലും എതിർകോണുകൾ അനുപൂരകങ്ങളാണ്:
          $$\\mathbf{\\angle A + \\angle C = 180^\\circ \\quad \\text{ഉം} \\quad \\angle B + \\angle D = 180^\\circ}$$</li>
        <li><b>മറുതല സിദ്ധാന്തം:</b> ഒരു ചതുർഭുജത്തിലെ ഏതെങ്കിലും ഒരു ജോടി എതിർകോണുകളുടെ തുക $180^\\circ$ ആണെങ്കിൽ ആ ചതുർഭുജം ചക്രിയമായിരിക്കും.</li>
        <li><b>ബാഹ്യകോൺ തത്വം:</b> ഒരു ചക്രിയ ചതുർഭുജത്തിന്റെ ഒരു വശം നീട്ടിയാൽ ഉണ്ടാകുന്ന ബാഹ്യകോൺ അതിന്റെ എതിർ ആന്തരകോണിന് തുല്യമായിരിക്കും:
          $$\\mathbf{\\angle \\text{ബാഹ്യകോൺ} = \\angle \\text{എതിർ ആന്തരകോൺ}}$$</li>
      </ul>
      <p><b>പ്രത്യേക ചതുർഭുജങ്ങൾ:</b></p>
      <ul>
        <li>എല്ലാ <b>ചതുരങ്ങളും</b> <b>സമചതുരങ്ങളും</b> എപ്പോഴും ചക്രിയ ചതുർഭുജങ്ങളാണ്.</li>
        <li>ഒരു <b>സാമാന്തരികം</b> ചക്രിയമാകണമെങ്കിൽ അത് ചതുരമായിരിക്കണം.</li>
        <li>ഒരു <b>റോംബസ്</b> ചക്രിയമാകണമെങ്കിൽ അത് സമചതുരമായിരിക്കണം.</li>
        <li>ഒരു <b>ലംബകം</b> ചക്രിയമാകണമെങ്കിൽ അത് <b>സമപാർശ്വ ലംബകമായിരിക്കണം</b>.</li>
      </ul>`,
    intuition_en: `<p>Diagonal vertices $A$ and $C$ look at the same chord $BD$ from opposite arcs of the circle. As established by the opposite arc theorem, their view angles must sum to $180^\\circ$.</p>`,
    intuition_ml: `<p>എതിർ ശീർഷങ്ങളായ $A$-യും $C$-യും $BD$ എന്ന ഞാണിന്റെ രണ്ട് എതിർ ചാപങ്ങളിലിരുന്ന് നോക്കുന്നതിനാൽ അവയുടെ കോണുകളുടെ തുക എപ്പോഴും $180^\\circ$ ആയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Opposite angles A and C are inscribed in opposite circular arcs subtended by chord BD.',
      idea_ml: 'എതിർ കോണുകളായ $A$-യും $C$-യും $BD$ എന്ന ഞാണിന്റെ എതിർ ചാപങ്ങളിലെ കോണുകളാണ്.',
      why_en: 'The opposite arc theorem proves that angles in opposite arcs sum to 180°.',
      why_ml: 'എതിർ ചാപങ്ങളിലെ കോണുകളുടെ തുക $180^\\circ$ ആണെന്ന് തെളിയിക്കപ്പെട്ടിട്ടുണ്ട്.',
      rungs_en: [
        { why_en: 'Arc BCD subtends angle A on the opposite arc.', m: '\\angle A = \\frac{1}{2} \\text{Reflex } \\angle BOD' },
        { why_en: 'Arc BAD subtends angle C on the opposite arc.', m: '\\angle C = \\frac{1}{2} \\angle BOD' },
        { why_en: 'Sum of angle at O and reflex angle at O is 360°.', m: '\\angle A + \\angle C = \\frac{1}{2}(360^\\circ) = 180^\\circ' },
        { why_en: 'Sum of all angles of quadrilateral is 360°.', m: '\\angle B + \\angle D = 360^\\circ - 180^\\circ = 180^\\circ' }
      ],
      rungs_ml: [
        { why_ml: '$BCD$ ചാപം ഉണ്ടാക്കുന്ന കോൺ $A$.', m: '\\angle A = \\frac{1}{2} \\text{ബൃഹത് } \\angle BOD' },
        { why_ml: '$BAD$ ചാപം ഉണ്ടാക്കുന്ന കോൺ $C$.', m: '\\angle C = \\frac{1}{2} \\angle BOD' },
        { why_ml: 'കേന്ദ്രത്തിലെ രണ്ട് കോണുകളുടെ തുക $360^\\circ$.', m: '\\angle A + \\angle C = \\frac{1}{2}(360^\\circ) = 180^\\circ' },
        { why_ml: 'ചതുർഭുജത്തിലെ കോണുകളുടെ തുക $360^\\circ$ ആയതിനാൽ.', m: '\\angle B + \\angle D = 180^\\circ' }
      ]
    },
    needs: ['m10.2.3.angles-in-same-segment'],
    traps_en: [
      'In a general parallelogram, opposite angles are EQUAL, not supplementary. Hence a parallelogram is NOT cyclic unless angles are 90° (rectangle).',
      'The exterior angle equals the OPPOSITE interior angle, not the adjacent interior angle.'
    ],
    traps_ml: [
      'സാധാരണ സാമാന്തരികത്തിൽ എതിർകോണുകൾ തുല്യമാണ്, തുക $180^\\circ$ അല്ല. അതിനാൽ ചതുരമല്ലാത്ത സാമാന്തരികങ്ങൾ ചക്രിയമല്ല.',
      'ബാഹ്യകോൺ തൊട്ടടുത്ത ആന്തരകോണിനല്ല, എതിരെയുള്ള ആന്തരകോണിനാണ് തുല്യമാകുന്നത്.'
    ],
    cards_en: [
      { q: 'In cyclic quadrilateral ABCD, ∠A = 75°. Find ∠C.', a: '$\\angle C = 180^\\circ - 75^\\circ = \\mathbf{105^\\circ}$.', kind: 'apply' },
      { q: 'Under what condition is a parallelogram a cyclic quadrilateral?', a: 'Only when it is a **rectangle** (all angles must be $90^\\circ$).', kind: 'recall' },
      { q: 'One side AB of a cyclic quadrilateral is extended. The exterior angle is 112°. Find the opposite interior angle.', a: 'The opposite interior angle is strictly equal: $\\mathbf{112^\\circ}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ചക്രിയ ചതുർഭുജം ABCD-യിൽ ∠A = 75° ആയാൽ ∠C എത്ര?', a: '$\\angle C = 180^\\circ - 75^\\circ = \\mathbf{105^\\circ}$.', kind: 'apply' },
      { q: 'ഏത് നിബന്ധനയിലാണ് ഒരു സാമാന്തരികം ചക്രിയ ചതുർഭുജമാകുന്നത്?', a: 'അതൊരു **ചതുരമാകുമ്പോൾ** മാത്രം (എല്ലാ കോണുകളും $90^\\circ$ ആവണം).', kind: 'recall' },
      { q: 'ചക്രിയ ചതുർഭുജത്തിന്റെ ഒരു വശം നീട്ടിയപ്പോൾ കിട്ടിയ ബാഹ്യകോൺ 112° ആണ്. എതിർ ആന്തരകോൺ എത്ര?', a: 'ബാഹ്യകോണിന് തുല്യമായിരിക്കും: $\\mathbf{112^\\circ}$.', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.5 Intersecting Chords & Tangent-Secant Theorem (ഞാണുകളുടെ ഗുണനഫലവും തൊടുവരയും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.2.5.intersecting-chords-and-tangents',
    sec: '10.2.5',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Intersecting Chords & Tangent-Secant Theorem',
    title_ml: 'ഞാണുകളുടെ ഗുണനഫലവും തൊടുവരയും',
    oneLine_en: 'If two chords AB and CD intersect at P (inside or outside the circle), PA · PB = PC · PD. If PT is a tangent and PAB is a secant, PA · PB = PT².',
    oneLine_ml: 'രണ്ട് ഞാണുകൾ $AB, CD$ എന്നിവ വൃത്തത്തിനകത്തോ പുറത്തോ ഉള്ള $P$-യിൽ ഖണ്ഡിച്ചാൽ $PA \\cdot PB = PC \\cdot PD$ ആയിരിക്കും; $PT$ തൊടുവരയും $PAB$ ഛേദകവുമായാൽ $PA \\cdot PB = PT^2$ ആയിരിക്കും.',
    statement_en: `<p><b>Intersecting Chords Theorem:</b></p>
      <p>Let $AB$ and $CD$ be two chords of a circle intersecting at point $P$.</p>
      <ul>
        <li><b>Chords Intersecting Inside the Circle:</b>
          $$\\mathbf{PA \\cdot PB = PC \\cdot PD}$$
          The area of the rectangle formed by the parts of one chord equals the area of the rectangle formed by the parts of the other chord.</li>
        <li><b>Chords Intersecting Outside the Circle:</b>
          $$\\mathbf{PA \\cdot PB = PC \\cdot PD}$$</li>
        <li><b>Tangent-Secant Theorem:</b> If $PT$ is a tangent segment touching the circle at $T$, and $PAB$ is a secant line intersecting the circle at $A$ and $B$:
          $$\\mathbf{PA \\cdot PB = PT^2}$$</li>
      </ul>
      <p><b>Geometric Construction Application:</b></p>
      <p>To construct a square of area equal to a given rectangle with sides $a$ and $b$:</p>
      $$\\mathbf{\\text{Side of square } s = \\sqrt{a \\cdot b}}$$
      <p>This is constructed by drawing a line segment $AB = a + b$, drawing a semicircle on $AB$ as diameter, and raising a perpendicular at the junction of $a$ and $b$ to meet the semicircle at height $s = \\sqrt{ab}$.</p>`,
    statement_ml: `<p><b>ഞാണുകളുടെ ഗുണനഫല സിദ്ധാന്തം:</b></p>
      <p>$AB, CD$ എന്നീ രണ്ട് ഞാണുകൾ $P$ എന്ന ബിന്ദുവിൽ ഖണ്ഡിക്കുന്നു.</p>
      <ul>
        <li><b>ഞാണുകൾ വൃത്തത്തിനകത്ത് ഖണ്ഡിക്കുമ്പോൾ:</b>
          $$\\mathbf{PA \\cdot PB = PC \\cdot PD}$$
          ഒരു ഞാണിന്റെ ഭാഗങ്ങൾ വശങ്ങളായ ചതുരത്തിന്റെ പരപ്പളവ് മറ്റേ ഞാണിന്റെ ഭാഗങ്ങൾ വശങ്ങളായ ചതുരത്തിന്റെ പരപ്പളവിന് തുല്യമായിരിക്കും.</li>
        <li><b>ഞാണുകൾ വൃത്തത്തിന് പുറത്ത് ഖണ്ഡിക്കുമ്പോൾ:</b>
          $$\\mathbf{PA \\cdot PB = PC \\cdot PD}$$</li>
        <li><b>തൊടുവര-ഛേദക സിദ്ധാന്തം:</b> $P$-യിൽ നിന്നുള്ള തൊടുവരയാണ് $PT$-യും, വൃത്തത്തെ $A, B$ എന്നിവയിൽ ഖണ്ഡിക്കുന്ന ഛേദകമാണ് $PAB$-യും എങ്കിൽ:
          $$\\mathbf{PA \\cdot PB = PT^2}$$</li>
      </ul>
      <p><b>ജ്യാമിതീയ നിർമ്മിതി:</b></p>
      <p>വശങ്ങൾ $a, b$ ആയ ചതുരത്തിന് തുല്യ പരപ്പളവുള്ള സമചതുരം വരയ്ക്കാൻ:</p>
      $$\\mathbf{\\text{സമചതുരത്തിന്റെ വശം } s = \\sqrt{a \\cdot b}}$$
      <p>$a + b$ വ്യാസമാക്കി അർദ്ധവൃത്തം വരച്ച്, സന്ധിക്കുന്ന ബിന്ദുവിൽ നിന്ന് അർദ്ധവൃത്തത്തിലേക്ക് വരയ്ക്കുന്ന ലംബത്തിന്റെ നീളമാണ് സമചതുരത്തിന്റെ വശം $s$.</p>`,
    intuition_en: `<p>Triangles $\\triangle PAC$ and $\\triangle PDB$ share the same angle at $P$ and subtend the same circular arcs, making them similar: $\\frac{PA}{PD} = \\frac{PC}{PB} \\implies PA \\cdot PB = PC \\cdot PD$.</p>`,
    intuition_ml: `<p>$\\triangle PAC$-യും $\\triangle PDB$-യും സദൃശ ത്രികോണങ്ങളാണ്; അവയുടെ സമാന വശങ്ങളുടെ അംശബന്ധം തുല്യമായതിനാൽ $\\frac{PA}{PD} = \\frac{PC}{PB} \\implies PA \\cdot PB = PC \\cdot PD$ ലഭിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Join AC and BD to form two triangles with equal inscribed angles and common or vertically opposite angle at P.',
      idea_ml: '$AC, BD$ എന്നിവ യോജിപ്പിച്ച് സദൃശ ത്രികോണങ്ങൾ രൂപീകരിക്കുന്നു.',
      why_en: 'AA similarity criterion establishes proportionality of corresponding sides.',
      why_ml: '$AA$ സദൃശതാ തത്വപ്രകാരം സമാന വശങ്ങൾ ആനുപാതികമാകുന്നു.',
      rungs_en: [
        { why_en: 'Vertical opposite angles at P are equal.', m: '\\angle APC = \\angle BPD' },
        { why_en: 'Angles in the same circular segment subtended by arc CB are equal.', m: '\\angle PAC = \\angle PDB' },
        { why_en: 'Therefore triangles PAC and PDB are similar (AA similarity).', m: '\\triangle PAC \\sim \\triangle PDB' },
        { why_en: 'Ratios of corresponding sides are equal.', m: '\\frac{PA}{PD} = \\frac{PC}{PB} \\implies PA \\cdot PB = PC \\cdot PD' }
      ],
      rungs_ml: [
        { why_ml: '$P$-യിലെ എതിർകോണുകൾ തുല്യമാണ്.', m: '\\angle APC = \\angle BPD' },
        { why_ml: 'ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്.', m: '\\angle PAC = \\angle PDB' },
        { why_ml: '$AA$ തത്വപ്രകാരം $\\triangle PAC \\sim \\triangle PDB$ സദൃശങ്ങളാണ്.', m: '\\triangle PAC \\sim \\triangle PDB' },
        { why_ml: 'സമാന വശങ്ങളുടെ അംശബന്ധം തുല്യമാണ്.', m: '\\frac{PA}{PD} = \\frac{PC}{PB} \\implies PA \\cdot PB = PC \\cdot PD' }
      ]
    },
    needs: ['m10.2.3.angles-in-same-segment', 'm9.7.1.concept-of-similarity'],
    traps_en: [
      'When chords intersect OUTSIDE at P, the segments measured from P are PA and PB (where PB is the whole secant, not just the outside part AB).',
      'Do not confuse chord intersection with chord lengths: it is PA · PB, NOT (PA + PB).'
    ],
    traps_ml: [
      'ഞാണുകൾ പുറത്ത് ഖണ്ഡിക്കുമ്പോൾ $P$-യിൽ നിന്നുള്ള അളവുകൾ $PA$-യും $PB$-യുമാണ് (മുഴുവൻ നീളം ഉൾപ്പെടെ).',
      '$PA \\cdot PB$ ആണ്, പദങ്ങളുടെ തുകയല്ല.'
    ],
    cards_en: [
      { q: 'Chords AB and CD intersect at P inside a circle. PA = 4 cm, PB = 6 cm, PC = 3 cm. Find PD.', a: '$PA \\cdot PB = PC \\cdot PD \\implies 4 \\times 6 = 3 \\times PD \\implies PD = \\frac{24}{3} = \\mathbf{8\\text{ cm}}$.', kind: 'apply' },
      { q: 'A tangent segment PT = 6 cm and secant PAB has outer segment PA = 4 cm. Find the length of secant PB and chord AB.', a: '$PT^2 = PA \\cdot PB \\implies 36 = 4 \\times PB \\implies PB = \\mathbf{9\\text{ cm}}$. Chord $AB = 9 - 4 = \\mathbf{5\\text{ cm}}$.', kind: 'apply' },
      { q: 'How do you construct a square equal in area to a rectangle of sides 6 cm and 2 cm?', a: 'Draw line segment $6 + 2 = 8\\text{ cm}$ as diameter of semicircle; perpendicular at junction gives side $s = \\sqrt{6 \\times 2} = \\sqrt{12}\\text{ cm}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'വൃത്തത്തിനകത്ത് P-യിൽ ഖണ്ഡിക്കുന്ന രണ്ട് ഞാണുകളിൽ PA = 4 cm, PB = 6 cm, PC = 3 cm ആയാൽ PD എത്ര?', a: '$PA \\cdot PB = PC \\cdot PD \\implies 4 \\times 6 = 3 \\times PD \\implies PD = \\frac{24}{3} = \\mathbf{8\\text{ cm}}$.', kind: 'apply' },
      { q: 'തൊടുവര PT = 6 cm, ബാഹ്യഛേദകഖണ്ഡം PA = 4 cm ആയാൽ PB-യും ഞാൺ AB-യും എത്ര?', a: '$PT^2 = PA \\cdot PB \\implies 36 = 4 \\times PB \\implies PB = \\mathbf{9\\text{ cm}}$. ഞാൺ $AB = 9 - 4 = \\mathbf{5\\text{ cm}}$.', kind: 'apply' },
      { q: 'വശങ്ങൾ 6 cm, 2 cm ആയ ചതുരത്തിന് തുല്യ പരപ്പളവുള്ള സമചതുരത്തിന്റെ വശം എങ്ങനെ കണ്ടെത്താം?', a: '$6 + 2 = 8\\text{ cm}$ വ്യാസമാക്കി അർദ്ധവൃത്തം വരച്ച് സന്ധിയിലെ ലംബം കാണുന്നു: $s = \\sqrt{6 \\times 2} = \\sqrt{12}\\text{ cm}$.', kind: 'recall' }
    ]
  }
);
