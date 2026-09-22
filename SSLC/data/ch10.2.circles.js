/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 2: Circles (വൃത്തങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.2.1.inscribed-angle-and-central-angle',
    sec: '10.2.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Inscribed Angle & Central Angle',
    title_ml: 'വൃത്തത്തിലെ കോണും കേന്ദ്രകോണും',
    oneLine_en: 'The angle subtended by an arc at any point on the alternate arc is exactly half the central angle subtended by the same arc: $\\angle APB = \\frac{1}{2}\\angle AOB$.',
    oneLine_ml: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണിന്റെ പകുതിയായിരിക്കും ആ ചാപം മറുചാപത്തിലെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ: $\\angle APB = \\frac{1}{2}\\angle AOB$.',
    statement_en: `<p><b>Inscribed Angle Theorem:</b></p>
      <p>Let $AB$ be an arc of a circle with centre $O$. If $P$ is any point on the circle other than $A$ and $B$ (on the alternate arc), then:</p>
      $$\\mathbf{\\angle APB = \\frac{1}{2} \\angle AOB}$$
      <p><b>Special Cases:</b></p>
      <ul>
        <li><b>Angle in a Semicircle:</b> When arc $AB$ is a semicircle, its central angle is $\\angle AOB = 180^\\circ$. Therefore, the angle in a semicircle is always a right angle:
        $$\\angle APB = \\frac{1}{2}(180^\\circ) = 90^\\circ$$</li>
        <li><b>Major and Minor Arcs:</b> If arc $AB$ is a minor arc (central angle $\\theta < 180^\\circ$), the angle in the major arc is acute ($\\frac{\\theta}{2} < 90^\\circ$). The angle in the minor arc is obtuse: $\\frac{360^\\circ - \\theta}{2} = 180^\\circ - \\frac{\\theta}{2}$.</li>
      </ul>`,
    statement_ml: `<p><b>വൃത്തത്തിലെ കോൺ സിദ്ധാന്തം:</b></p>
      <p>കേന്ദ്രം $O$ ആയ വൃത്തത്തിലെ ഒരു ചാപമാണ് $AB$. ഈ ചാപത്തിന്റെ മറുചാപത്തിലെ ഏതൊരു ബിന്ദുവാണ് $P$ എങ്കിൽ:</p>
      $$\\mathbf{\\angle APB = \\frac{1}{2} \\angle AOB}$$
      <p><b>പ്രത്യേക സന്ദർഭങ്ങൾ:</b></p>
      <ul>
        <li><b>അർദ്ധവൃത്തത്തിലെ കോൺ:</b> വ്യാസം വൃത്തകേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $180^\\circ$ ആണ്. അതിനാൽ അർദ്ധവൃത്തത്തിലെ കോൺ എപ്പോഴും മട്ടകോണാണ്:
        $$\\angle APB = \\frac{1}{2}(180^\\circ) = 90^\\circ$$</li>
        <li><b>ചെറിയ ചാപവും വലിയ ചാപവും:</b> ലഘുചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $\\theta$ ആണെങ്കിൽ, ഗുരുചാപത്തിലെ കോൺ ന്യൂനകോണായിരിക്കും ($\\frac{\\theta}{2} < 90^\\circ$). ലഘുചാപത്തിലെ കോൺ ബൃഹത്കോണായിരിക്കും ($180^\\circ - \\frac{\\theta}{2}$).</li>
      </ul>`,
    intuition_en: `<p>Imagine the center $O$ as a spotlight creating a wide beam $\\angle AOB$; stepping back to the edge of the circle at $P$ narrows the angular beam by exactly half.</p>`,
    intuition_ml: `<p>വൃത്തകേന്ദ്രത്തിൽ നിന്ന് നോക്കുമ്പോൾ കാണുന്ന കോൺ അളവിന്റെ കൃത്യം പകുതി മാത്രമേ വൃത്തപരിധിയിലെ ഒരു ബിന്ദുവിൽ നിന്ന് നോക്കുമ്പോൾ ആ ചാപത്തിന് അനുഭവപ്പെടുകയുള്ളൂ.</p>`,
    proof: {
      idea_en: 'Draw diameter through P and center O. Form two isosceles triangles OA P and OBP; their exterior angles at O equal the sum of two equal interior opposite angles.',
      idea_ml: '$P$-യിലൂടെ വ്യാസം വരച്ച് രണ്ട് സമപാർശ്വ ത്രികോണങ്ങളാക്കി ബാഹ്യകോൺ തത്വം പ്രയോഗിക്കുന്നു.',
      why_en: 'Radii OA = OP = OB force base angles to be equal, and exterior angle of triangle equals sum of non-adjacent interior angles.',
      why_ml: 'ആരങ്ങൾ തുല്യമായതിനാൽ സമപാർശ്വ ത്രികോണങ്ങളുടെ പാദകോണുകൾ തുല്യമാകുന്നു.',
      rungs_en: [
        { why_en: 'Draw line PO extended to meet circle at Q.', m: 'OA = OP \\implies \\angle OPA = \\angle OAP' },
        { why_en: 'Exterior angle of triangle OPA.', m: '\\angle AOQ = 2\\angle OPA' },
        { why_en: 'Similarly for triangle OPB.', m: '\\angle BOQ = 2\\angle OPB' },
        { why_en: 'Add both angles.', m: '\\angle AOB = 2(\\angle OPA + \\angle OPB) = 2\\angle APB \\implies \\angle APB = \\frac{1}{2}\\angle AOB' }
      ],
      rungs_ml: [
        { why_ml: '$P$-ലൂടെ വ്യാസം വരയ്ക്കുന്നു.', m: 'OA = OP \\implies \\angle OPA = \\angle OAP' },
        { why_ml: 'ത്രികോണം $OAP$-യുടെ ബാഹ്യകോൺ.', m: '\\angle AOQ = 2\\angle OPA' },
        { why_ml: 'ത്രികോണം $OBP$-യുടെ ബാഹ്യകോൺ.', m: '\\angle BOQ = 2\\angle OPB' },
        { why_ml: 'കൂട്ടുമ്പോൾ.', m: '\\angle AOB = 2\\angle APB \\implies \\angle APB = \\frac{1}{2}\\angle AOB' }
      ]
    },
    needs: ['m9.5.4.angle-subtended-by-an-arc'],
    traps_en: [
      'The point P must lie ON the circle, not inside or outside.',
      'The inscribed angle is half of the CENTRAL angle subtended by the SAME arc.'
    ],
    traps_ml: [
      '$P$ എന്ന ബിന്ദു വൃത്തത്തിന് പുറത്തോ അകത്തോ അല്ല, വൃത്തത്തിൽ തന്നെയായിരിക്കണം.',
      'കേന്ദ്രകോണിന്റെ പകുതിയാണ് വൃത്തത്തിലെ കോൺ; തിരിച്ചാക്കി ഇരട്ടിയാക്കരുത്.'
    ],
    cards_en: [
      { q: 'If arc AB subtends a central angle of 110°, what is the angle subtended by it on the alternate arc?', a: '$\\angle APB = \\frac{110^\\circ}{2} = \\mathbf{55^\\circ}$.', kind: 'apply' },
      { q: 'What is the measure of an angle inscribed in a semicircle?', a: 'Always exactly $\\mathbf{90^\\circ}$ (a right angle).', kind: 'recall' },
      { q: 'An inscribed angle on a circle is 42°. What is the central angle subtended by the same arc?', a: '$\\angle AOB = 2 \\times 42^\\circ = \\mathbf{84^\\circ}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ 110° ആയാൽ മറുചാപത്തിലെ കോൺ എത്ര?', a: '$\\frac{110^\\circ}{2} = \\mathbf{55^\\circ}$.', kind: 'apply' },
      { q: 'അർദ്ധവൃത്തത്തിലെ കോണിന്റെ അളവ് എത്രയാണ്?', a: 'എപ്പോഴും കൃത്യം $\\mathbf{90^\\circ}$ (മട്ടകോൺ).', kind: 'recall' },
      { q: 'വൃത്തത്തിലെ ഒരു കോൺ 42° ആണെങ്കിൽ അതേ ചാപത്തിന്റെ കേന്ദ്രകോൺ എത്ര?', a: '$2 \\times 42^\\circ = \\mathbf{84^\\circ}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm10.2.2.angles-in-same-segment',
    sec: '10.2.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Angles in the Same Segment',
    title_ml: 'ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ',
    oneLine_en: 'Angles subtended by the same chord or arc in the same circular segment are strictly equal to each other.',
    oneLine_ml: 'ഒരു വൃത്തത്തിലെ ഒരേ ചാപം അല്ലെങ്കിൽ ഞാൺ ഒരേ ചാപഖണ്ഡത്തിൽ ഉണ്ടാക്കുന്ന എല്ലാ കോണുകളും തുല്യമായിരിക്കും.',
    statement_en: `<p><b>Angles in the Same Segment Theorem:</b></p>
      <p>Let $AB$ be an arc or chord of a circle. If $P$ and $Q$ are any two points on the same alternate arc of $AB$, then:</p>
      $$\\mathbf{\\angle APB = \\angle AQB}$$
      <p>All inscribed angles that subtend the exact same arc have equal measures, because each is equal to half of the unique central angle $\\angle AOB$.</p>
      <p><b>Angle Properties for Variable Points:</b></p>
      <ul>
        <li>If a point $X$ lies <b>inside</b> the circle: $\\angle AXB > \\angle APB$.</li>
        <li>If a point $Y$ lies <b>outside</b> the circle: $\\angle AYB < \\angle APB$.</li>
        <li>Therefore, the set of all points in the plane where segment $AB$ subtends a constant angle $\\alpha$ is a circular arc passing through $A$ and $B$.</li>
      </ul>`,
    statement_ml: `<p><b>ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ തുല്യം:</b></p>
      <p>ഒരു വൃത്തത്തിലെ $AB$ എന്ന ചാപം ഒരേ ഭാഗത്ത് ഉണ്ടാക്കുന്ന രണ്ട് കോണുകളാണ് $\\angle APB$-യും $\\angle AQB$-യും എങ്കിൽ:</p>
      $$\\mathbf{\\angle APB = \\angle AQB}$$
      <p>കാരണം ഇവ രണ്ടും ഒരേ കേന്ദ്രകോണിന്റെ ($\\angle AOB$) പകുതിക്ക് തുല്യമായിരിക്കും.</p>
      <p><b>വൃത്തത്തിനകത്തും പുറത്തുമുള്ള ബിന്ദുക്കൾ:</b></p>
      <ul>
        <li>ബിന്ദു $X$ വൃത്തത്തിന് <b>ഉള്ളിൽ</b> ആണെങ്കിൽ: $\\angle AXB > \\angle APB$.</li>
        <li>ബിന്ദു $Y$ വൃത്തത്തിന് <b>പുറത്ത്</b> ആണെങ്കിൽ: $\\angle AYB < \\angle APB$.</li>
        <li>അതിനാൽ $AB$ എന്ന രേഖാഖണ്ഡം ഒരു നിശ്ചിത കോൺ ഉണ്ടാക്കുന്ന ബിന്ദുക്കളുടെ പാത ഒരു വൃത്തചാപമാണ്.</li>
      </ul>`,
    intuition_en: `<p>Slide the apex of an angle along the circular rim while keeping its feet anchored at A and B: the opening angle remains locked in place without changing.</p>`,
    intuition_ml: `<p>A, B എന്നീ രണ്ട് കുറ്റികളിൽ കെട്ടിയ നൂലിന്റെ മൂല വൃത്തപരിധിയിലൂടെ എങ്ങോട്ട് നീക്കിയാലും അവയ്ക്കിടയിലെ കോണിന്റെ വിടവ് മാറാതെ നിലനിൽക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Both inscribed angles ∠APB and ∠AQB are equal to (1/2)∠AOB, hence they are equal to each other.',
      idea_ml: 'രണ്ട് കോണുകളും ഒരേ കേന്ദ്രകോണിന്റെ പകുതിയായതിനാൽ അവ പരസ്പരം തുല്യമാണ്.',
      why_en: 'Transitive property of equality via the central angle.',
      why_ml: 'കേന്ദ്രം നൽകുന്ന അളവ് ഒന്നുതന്നെയായതിനാൽ.',
      rungs_en: [
        { why_en: 'Angle APB subtends arc AB.', m: '\\angle APB = \\frac{1}{2}\\angle AOB' },
        { why_en: 'Angle AQB subtends same arc AB.', m: '\\angle AQB = \\frac{1}{2}\\angle AOB' },
        { why_en: 'Equate the two.', m: '\\angle APB = \\angle AQB' }
      ],
      rungs_ml: [
        { why_ml: '$\angle APB$ എന്ന കോൺ ചാപം ഉണ്ടാക്കുന്നു.', m: '\\angle APB = \\frac{1}{2}\\angle AOB' },
        { why_ml: '$\angle AQB$ എന്ന കോണും അതേ ചാപം ഉണ്ടാക്കുന്നു.', m: '\\angle AQB = \\frac{1}{2}\\angle AOB' },
        { why_ml: 'രണ്ടും തുല്യമാകുന്നു.', m: '\\angle APB = \\angle AQB' }
      ]
    },
    needs: ['m10.2.1.inscribed-angle-and-central-angle'],
    traps_en: [
      'The points must be in the SAME segment; angles in opposite segments are supplementary, NOT equal.',
      'A point inside the circle subtends an angle GREATER than the circle angle.'
    ],
    traps_ml: [
      'കോണുകൾ ഒരേ ചാപഖണ്ഡത്തിലായിരിക്കണം; എതിർ ചാപഖണ്ഡങ്ങളിലെ കോണുകൾ അനുപൂരകങ്ങളാണ്, തുല്യമല്ല.',
      'വൃത്തത്തിനുള്ളിലെ ബിന്ദുവുണ്ടാക്കുന്ന കോൺ വൃത്തത്തിലെ കോണിനേക്കാൾ വലുതായിരിക്കും.'
    ],
    cards_en: [
      { q: 'In a circle, chords AB and CD subtend angles at P and Q on the same arc. If ∠APB = 48°, what is ∠AQB?', a: '$\\angle AQB = \\mathbf{48^\\circ}$ (angles in the same segment are equal).', kind: 'apply' },
      { q: 'If a point X lies inside the circle, how does ∠AXB compare to the inscribed angle on the circle?', a: '$\\angle AXB$ is **greater** than the inscribed angle.', kind: 'recall' },
      { q: 'If a point Y lies outside the circle, how does ∠AYB compare to the inscribed angle?', a: '$\\angle AYB$ is **smaller** than the inscribed angle.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരേ ചാപഖണ്ഡത്തിലെ രണ്ട് കോണുകളാണ് $\\angle APB, \\angle AQB$. $\\angle APB = 48^\\circ$ ആയാൽ $\\angle AQB$ എത്ര?', a: '$\\angle AQB = \\mathbf{48^\\circ}$ (ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്).', kind: 'apply' },
      { q: 'വൃത്തത്തിന് ഉള്ളിലുള്ള ഒരു ബിന്ദു $X$ ഉണ്ടാക്കുന്ന കോൺ വൃത്തത്തിലെ കോണിനേക്കാൾ വലുതാണോ ചെറുതാണോ?', a: '**വലുതാണ്**.', kind: 'recall' },
      { q: 'വൃത്തത്തിന് പുറത്തുള്ള ഒരു ബിന്ദു $Y$ ഉണ്ടാക്കുന്ന കോൺ വൃത്തത്തിലെ കോണിനേക്കാൾ വലുതാണോ ചെറുതാണോ?', a: '**ചെറുതാണ്**.', kind: 'recall' }
    ]
  },

  {
    id: 'm10.2.3.cyclic-quadrilaterals',
    sec: '10.2.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Cyclic Quadrilaterals',
    title_ml: 'ചക്രിയ ചതുർഭുജങ്ങൾ',
    oneLine_en: 'A quadrilateral whose four vertices lie on a circle is cyclic; its opposite angles are supplementary (sum to 180°), and any exterior angle equals its interior opposite angle.',
    oneLine_ml: 'നാല് മൂലകളും ഒരു വൃത്തത്തിലുള്ള ചതുർഭുജമാണ് ചക്രിയ ചതുർഭുജം; ഇതിന്റെ എതിർകോണുകളുടെ തുക 180° ആയിരിക്കും, ബാഹ്യകോൺ എതിർ അന്തർകോണിന് തുല്യമായിരിക്കും.',
    statement_en: `<p><b>Definition of Cyclic Quadrilateral:</b></p>
      <p>A quadrilateral whose all four vertices lie on a single circle is called a <b>cyclic quadrilateral</b>.</p>
      <p><b>The Supplementary Opposite Angles Theorem:</b></p>
      <p>In any cyclic quadrilateral $ABCD$:</p>
      $$\\mathbf{\\angle A + \\angle C = 180^\\circ \\quad \\text{and} \\quad \\angle B + \\angle D = 180^\\circ}$$
      <p><b>Converse:</b> If a pair of opposite angles of a quadrilateral is supplementary, then the quadrilateral is cyclic (a circle passes through all four vertices).</p>
      <p><b>Exterior Angle Property:</b> If any side of a cyclic quadrilateral is extended, the exterior angle formed is equal to the interior opposite angle.</p>`,
    statement_ml: `<p><b>ചക്രിയ ചതുർഭുജത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>നാല് മൂലകളും ഒരേ വൃത്തത്തിൽ സ്ഥിതിചെയ്യുന്ന ചതുർഭുജങ്ങളെയാണ് <b>ചക്രിയ ചതുർഭുജങ്ങൾ</b> എന്ന് വിളിക്കുന്നത്.</p>
      <p><b>എതിർകോണുകളുടെ തുക 180°:</b></p>
      <p>ഏതൊരു ചക്രിയ ചതുർഭുജം $ABCD$-യിലും:</p>
      $$\\mathbf{\\angle A + \\angle C = 180^\\circ \\quad \\text{മറ്റു ജോഡി:} \\quad \\angle B + \\angle D = 180^\\circ}$$
      <p><b>മറുതല സിദ്ധാന്തം:</b> ഒരു ചതുർഭുജത്തിന്റെ എതിർകോണുകളുടെ തുക $180^\\circ$ ആണെങ്കിൽ അത് ചക്രിയ ചതുർഭുജമായിരിക്കും.</p>
      <p><b>ബാഹ്യകോൺ സവിശേഷത:</b> ചക്രിയ ചതുർഭുജത്തിന്റെ ഒരു വശം നീട്ടിയാൽ ഉണ്ടാകുന്ന ബാഹ്യകോൺ അതിന്റെ എതിർ അന്തർകോണിന് തുല്യമായിരിക്കും.</p>`,
    intuition_en: `<p>Opposite vertices subtend complementary arcs that together wrap the entire 360° of the circle; dividing by 2 yields a combined angle of exactly 180°.</p>`,
    intuition_ml: `<p>എതിർകോണുകൾ വൃത്തത്തിന്റെ രണ്ട് ഭാഗങ്ങളിലായി സ്ഥിതിചെയ്യുമ്പോൾ അവയ്ക്ക് ആധാരമായ ചാപങ്ങൾ ചേർന്ന് വൃത്തം പൂർണ്ണമാകുന്നു ($360^\\circ$); അതിന്റെ പകുതിയായതിനാൽ കോണുകളുടെ തുക കൃത്യം $180^\\circ$ ആയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Angle B subtends arc ADC and angle D subtends arc ABC. Arc ADC + arc ABC = 360°. Sum of inscribed angles = (1/2)(360°) = 180°.',
      idea_ml: 'രണ്ട് എതിർകോണുകളും ചേരുമ്പോൾ കേന്ദ്രകോൺ $360^\\circ$ ആകുന്നു; അതിനാൽ വൃത്തത്തിലെ കോണുകളുടെ തുക $180^\\circ$.',
      why_en: 'The inscribed angle theorem applied to both complementary arcs.',
      why_ml: 'വൃത്തത്തിലെ കോൺ കേന്ദ്രകോണിന്റെ പകുതിയായതിനാൽ.',
      rungs_en: [
        { why_en: 'Angle B is inscribed in major/minor arc.', m: '\\angle B = \\frac{1}{2} \\text{central angle}(ADC)' },
        { why_en: 'Angle D is inscribed in remaining arc.', m: '\\angle D = \\frac{1}{2} \\text{central angle}(ABC)' },
        { why_en: 'Add both equations.', m: '\\angle B + \\angle D = \\frac{1}{2}[\\text{central angle}(ADC) + \\text{central angle}(ABC)] = \\frac{1}{2}(360^\\circ) = 180^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'B എന്ന കോണിന്റെ കേന്ദ്രകോൺ.', m: '\\angle B = \\frac{1}{2} \\text{കേന്ദ്രകോൺ}(ADC)' },
        { why_ml: 'D എന്ന കോണിന്റെ കേന്ദ്രകോൺ.', m: '\\angle D = \\frac{1}{2} \\text{കേന്ദ്രകോൺ}(ABC)' },
        { why_ml: 'കൂട്ടുമ്പോൾ.', m: '\\angle B + \\angle D = \\frac{1}{2}(360^\\circ) = 180^\\circ' }
      ]
    },
    needs: ['m10.2.1.inscribed-angle-and-central-angle'],
    traps_en: [
      'Parallelograms are NOT cyclic unless they are rectangles (since opposite angles in a parallelogram are equal: equal + supplementary = 90°).',
      'Rhombuses are NOT cyclic unless they are squares.'
    ],
    traps_ml: [
      'സാധാരണ സാമാന്തരികങ്ങൾ ചക്രിയമല്ല; ചതുരങ്ങൾ മാത്രമേ സാമാന്തരികങ്ങളിൽ ചക്രിയമാകൂ.',
      'സമഭുജസാമാന്തരികങ്ങൾ സമചതുരമായാൽ മാത്രമേ ചക്രിയമാകൂ.'
    ],
    cards_en: [
      { q: 'In a cyclic quadrilateral ABCD, ∠A = 75°. What is the measure of ∠C?', a: '$\\angle C = 180^\\circ - 75^\\circ = \\mathbf{105^\\circ}$.', kind: 'apply' },
      { q: 'Can a parallelogram with an angle of 60° be cyclic?', a: 'No, because its opposite angle is also 60°, and 60° + 60° = 120° ≠ 180°.', kind: 'recall' },
      { q: 'What is true about any rectangle regarding circles?', a: 'Every rectangle is cyclic (opposite angles are 90° + 90° = 180°).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ചക്രിയ ചതുർഭുജം ABCD-യിൽ $\\angle A = 75^\\circ$ ആയാൽ $\\angle C$ എത്ര?', a: '$\\angle C = 180^\\circ - 75^\\circ = \\mathbf{105^\\circ}$.', kind: 'apply' },
      { q: 'ഒരു കോൺ 60° ആയ സാമാന്തരികം ചക്രിയമാകുമോ?', a: 'ഇല്ല, കാരണം എതിർകോണുകളുടെ തുക $60^\\circ + 60^\\circ = 120^\\circ \\neq 180^\\circ$ ആണ്.', kind: 'recall' },
      { q: 'ഏതൊരു ചതുരത്തെക്കുറിച്ചും വൃത്തങ്ങളുമായി ബന്ധപ്പെട്ട സവിശേഷത എന്താണ്?', a: 'എല്ലാ ചതുരങ്ങളും ചക്രിയ ചതുർഭുജങ്ങളാണ് ($90^\\circ + 90^\\circ = 180^\\circ$).', kind: 'recall' }
    ]
  },

  {
    id: 'm10.2.4.chords-and-intersecting-segments',
    sec: '10.2.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Chords and Intersecting Segments',
    title_ml: 'ഞാണുകളുടെ ഗുണനഫലം',
    oneLine_en: 'If two chords AB and CD of a circle intersect at a point P (inside or outside the circle), the products of their segments are equal: PA × PB = PC × PD.',
    oneLine_ml: 'ഒരു വൃത്തത്തിലെ രണ്ട് ഞാണുകൾ AB, CD എന്നിവ വൃത്തത്തിനകത്തോ പുറത്തോ ഉള്ള P എന്ന ബിന്ദുവിൽ ഖണ്ഡിച്ചാൽ, അവയുടെ ഭാഗങ്ങളുടെ ഗുണനഫലം തുല്യമായിരിക്കും: PA × PB = PC × PD.',
    statement_en: `<p><b>Intersecting Chords Theorem:</b></p>
      <p>Let $AB$ and $CD$ be two chords of a circle intersecting at point $P$:</p>
      $$\\mathbf{PA \\cdot PB = PC \\cdot PD}$$
      <p><b>Two Cases:</b></p>
      <ul>
        <li><b>Internal Intersection:</b> $P$ lies inside the circle. The chords divide each other into segments of lengths $PA, PB$ and $PC, PD$. The rectangle formed by segments of one chord has the exact same area as the rectangle formed by segments of the other.</li>
        <li><b>External Intersection:</b> Chords $AB$ and $CD$ are extended to meet at an external point $P$. Then the secant product rule holds: $PA \\cdot PB = PC \\cdot PD$.</li>
      </ul>
      <p><b>Geometric Mean Corollary:</b> If a chord $AB$ is perpendicular to a diameter $CD$ at point $P$ on $CD$ (so $PA = PB$):</p>
      $$\\mathbf{PA^2 = PC \\cdot PD \\implies PA = \\sqrt{PC \\cdot PD}}$$
      <p>This allows exact geometric construction of square roots.</p>`,
    statement_ml: `<p><b>ഞാണുകളുടെ ഖണ്ഡന സിദ്ധാന്തം:</b></p>
      <p>ഒരു വൃത്തത്തിലെ $AB, CD$ എന്നീ ഞാണുകൾ $P$ എന്ന ബിന്ദുവിൽ ഖണ്ഡിച്ചാൽ:</p>
      $$\\mathbf{PA \\cdot PB = PC \\cdot PD}$$
      <p><b>രണ്ട് സാഹചര്യങ്ങൾ:</b></p>
      <ul>
        <li><b>ആന്തരിക ഖണ്ഡനം:</b> $P$ വൃത്തത്തിനുള്ളിലാണ്. ഓരോ ഞാണിന്റെയും കഷണങ്ങൾ കൊണ്ട് ഉണ്ടാക്കുന്ന ചതുരങ്ങളുടെ പരപ്പളവുകൾ തുല്യമായിരിക്കും.</li>
        <li><b>ബാഹ്യ ഖണ്ഡനം:</b> ഞാണുകൾ വൃത്തത്തിന് പുറത്തേക്ക് നീട്ടി $P$-യിൽ കൂട്ടിമുട്ടുന്നു. അപ്പോഴും $PA \\cdot PB = PC \\cdot PD$ ശരിയായിരിക്കും.</li>
      </ul>
      <p><b>വർഗ്ഗമൂല നിർമ്മിതി:</b> വ്യാസം $CD$-ക്ക് ലംബമായി $P$-യിലൂടെ വരയ്ക്കുന്ന ഞാണാണ് $AB$ എങ്കിൽ ($PA = PB$):</p>
      $$\\mathbf{PA^2 = PC \\cdot PD \\implies PA = \\sqrt{PC \\cdot PD}}$$`,
    intuition_en: `<p>Similar triangles: connecting endpoints forms two triangles $\\triangle PAC$ and $\\triangle PDB$ that are similar by angle-angle, yielding equal cross-multiplied ratios.</p>`,
    intuition_ml: `<p>അറ്റങ്ങൾ യോജിപ്പിച്ച് വരയ്ക്കുന്ന രണ്ട് ത്രികോണങ്ങൾ സദൃശമായതിനാൽ, വശങ്ങളുടെ അംശബന്ധം തുല്യമാകുകയും ഗുണനഫലങ്ങൾ തുല്യമാകുകയും ചെയ്യുന്നു.</p>`,
    proof: {
      idea_en: 'Join AC and BD. In triangles PAC and PDB: angles at P are vertical (or shared), and angles at A and D are in the same segment. Hence triangles are similar.',
      idea_ml: '$\triangle PAC, \triangle PDB$ എന്നീ ത്രികോണങ്ങൾ സദൃശമാകുന്നതിനാൽ $\\frac{PA}{PD} = \\frac{PC}{PB}$ ലഭിക്കുന്നു.',
      why_en: 'AA similarity of triangles inscribed in the circle.',
      why_ml: 'ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ തുല്യമായതിനാൽ ത്രികോണങ്ങൾ സദൃശമാണ്.',
      rungs_en: [
        { why_en: 'Angles in same segment are equal.', m: '\\angle PAC = \\angle PDB' },
        { why_en: 'Vertical opposite angles (or shared angle).', m: '\\angle APC = \\angle DPB' },
        { why_en: 'Triangles PAC and PDB are similar (AA).', m: '\\triangle PAC \\sim \\triangle PDB' },
        { why_en: 'Ratio of corresponding sides.', m: '\\frac{PA}{PD} = \\frac{PC}{PB} \\implies PA \\cdot PB = PC \\cdot PD' }
      ],
      rungs_ml: [
        { why_ml: 'ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്.', m: '\\angle PAC = \\angle PDB' },
        { why_ml: 'എതിർകോണുകൾ തുല്യമാണ്.', m: '\\angle APC = \\angle BPD' },
        { why_ml: 'ത്രികോണങ്ങൾ സദൃശമാണ്.', m: '\\triangle PAC \\sim \\triangle PDB' },
        { why_ml: 'അംശബന്ധം ഗുണിക്കുമ്പോൾ.', m: 'PA \\cdot PB = PC \\cdot PD' }
      ]
    },
    needs: ['m10.2.2.angles-in-same-segment', 'm9.7.1.concept-of-similarity-and-aa'],
    traps_en: [
      'For external intersection, the distances are measured from the intersection point P to BOTH ends of the chord: PA and PB (NOT the segment AB alone!).',
      'PA * PB = PC * PD, do NOT add: PA + PB != PC + PD.'
    ],
    traps_ml: [
      'ബാഹ്യ ഖണ്ഡനത്തിൽ $P$-യിൽ നിന്ന് രണ്ട് അറ്റങ്ങളിലേക്കുമുള്ള അകലമാണ് ($PA, PB$) എടുക്കേണ്ടത്, $AB$ മാത്രമായി എടുക്കരുത്.',
      'ഇത് ഗുണനഫലമാണ് ($PA \\times PB$), തുകയല്ല.'
    ],
    cards_en: [
      { q: 'Two chords AB and CD intersect at P inside a circle. If PA = 4 cm, PB = 9 cm, and PC = 3 cm, find PD.', a: '$PA \\cdot PB = PC \\cdot PD \\implies 4 \\times 9 = 3 \\times PD \\implies 36 = 3PD \\implies PD = \\mathbf{12\\text{ cm}}$.', kind: 'apply' },
      { q: 'A perpendicular from a point P on a diameter divides it into lengths 2 cm and 8 cm. What is the length of the half-chord at P?', a: '$h = \\sqrt{2 \\times 8} = \\sqrt{16} = \\mathbf{4\\text{ cm}}$.', kind: 'apply' },
      { q: 'What geometric relation holds between segments of intersecting chords?', a: '$\\mathbf{PA \\cdot PB = PC \\cdot PD}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'വൃത്തത്തിനുള്ളിൽ P-യിൽ മുട്ടുന്ന ഞാണുകളാണ് AB, CD. PA = 4 cm, PB = 9 cm, PC = 3 cm ആയാൽ PD എത്ര?', a: '$4 \\times 9 = 3 \\times PD \\implies PD = \\frac{36}{3} = \\mathbf{12\\text{ cm}}$.', kind: 'apply' },
      { q: 'വ്യാസത്തെ 2 cm, 8 cm ആയി ഭാഗിക്കുന്ന ബിന്ദുവിൽ നിന്നുള്ള ലംബ ഞാണിന്റെ പകുതി നീളം എത്ര?', a: '$h = \\sqrt{2 \\times 8} = \\sqrt{16} = \\mathbf{4\\text{ cm}}$.', kind: 'apply' },
      { q: 'ഖണ്ഡിക്കുന്ന ഞാണുകളുടെ ഭാഗങ്ങൾ തമ്മിലുള്ള ബന്ധം എന്താണ്?', a: '$\\mathbf{PA \\cdot PB = PC \\cdot PD}$.', kind: 'recall' }
    ]
  }
);
