/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 7: Tangents (തൊടുവരകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.7.1 Tangent Line & Perpendicular Radius (തൊടുവരയും ആരവുമായുള്ള ലംബബന്ധം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.7.1.tangent-line-and-perpendicular-radius',
    sec: '10.7.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Tangent Line & Perpendicular Radius',
    title_ml: 'തൊടുവരയും ആരവുമായുള്ള ലംബബന്ധം',
    oneLine_en: 'A tangent touches a circle at exactly one point; the radius through the point of contact is strictly perpendicular to the tangent.',
    oneLine_ml: 'ഒരു വൃത്തത്തെ ഒരൊറ്റ ബിന്ദുവിൽ മാത്രം സ്പർശിക്കുന്ന വരയാണ് തൊടുവര; സ്പർശബിന്ദുവിലെ ആരം തൊടുവരയ്ക്ക് ലംബമായിരിക്കും.',
    statement_en: `<p><b>The Tangent-Radius Perpendicularity Theorem:</b></p>
      <p>A straight line that meets a circle at exactly one point is called a <b>tangent</b> (തൊടുവര) to the circle, and the single intersection is called the <b>point of contact</b> (സ്പർശബിന്ദു).</p>
      <p><b>Core Perpendicularity Property:</b> The radius drawn to the point of contact $P$ of a tangent line is always perpendicular to the tangent line:</p>
      $$\\mathbf{OP \\perp PT \\iff \\angle OPT = 90^\\circ}$$
      <p><b>Converse:</b> A line drawn through the endpoint of a radius and perpendicular to it is the tangent to the circle at that point.</p>
      <p><b>Parallel Tangents:</b> The tangents drawn at the two opposite endpoints of any diameter are parallel to each other.</p>`,
    statement_ml: `<p><b>തൊടുവര സിദ്ധാന്തം:</b></p>
      <p>ഒരു വൃത്തത്തെ ഒരൊറ്റ ബിന്ദുവിൽ മാത്രം സ്പർശിക്കുന്ന വരയെ ആ ബിന്ദുവിലെ <b>തൊടുവര</b> എന്ന് വിളിക്കുന്നു, ഈ സംഗമബിന്ദുവാണ് <b>സ്പർശബിന്ദു</b>.</p>
      <p><b>ലംബ സവിശേഷത:</b> വൃത്തകേന്ദ്രം $O$ യിൽ നിന്ന് സ്പർശബിന്ദു $P$ യിലേക്ക് വരയ്ക്കുന്ന ആരം തൊടുവരയ്ക്ക് ലംബമായിരിക്കും:</p>
      $$\\mathbf{OP \\perp PT \\iff \\angle OPT = 90^\\circ}$$
      <p><b>മറുസിദ്ധാന്തം:</b> ആരത്തിന്റെ അറ്റത്തുകൂടി ആരത്തിന് ലംബമായി വരയ്ക്കുന്ന വര ആ ബിന്ദുവിലെ തൊടുവരയായിരിക്കും.</p>
      <p><b>സമാന്തര തൊടുവരകൾ:</b> ഒരു വ്യാസത്തിന്റെ രണ്ടറ്റങ്ങളിലൂടെ വരയ്ക്കുന്ന തൊടുവരകൾ പരസ്പരം സമാന്തരമായിരിക്കും.</p>`,
    intuition_en: `<p>Among all points on the tangent line, the point of contact $P$ is closest to the centre $O$ (distance equals radius $r$; all other points lie outside at distance $> r$). The shortest distance from a point to a line is the perpendicular distance.</p>`,
    intuition_ml: `<p>തൊടുവരയിലെ എല്ലാ ബിന്ദുക്കളിലും വെച്ച് വൃത്തകേന്ദ്രത്തോട് ഏറ്റവും അടുത്ത ബിന്ദുവാണ് സ്പർശബിന്ദുവായ $P$ (അകലം ആരം $r$). കേന്ദ്രത്തിൽ നിന്നുള്ള ഏറ്റവും കുറഞ്ഞ ദൂരം ലംബദൂരം ആയതിനാൽ ആരം തൊടുവരയ്ക്ക് ലംബമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Minimality of distance: the point of contact is the unique closest point on the line to the circle centre.',
      idea_ml: 'വരയിലെ ബിന്ദുക്കളിൽ കേന്ദ്രത്തോട് ഏറ്റവും അടുത്ത ബിന്ദു സ്പർശബിന്ദുവായതിനാൽ ആരം ലംബമായിരിക്കും.',
      why_en: 'Every point on the tangent line other than point of contact P lies outside the circle, meaning distance > radius.',
      why_ml: 'സ്പർശബിന്ദു ഒഴികെയുള്ള തൊടുവരയിലെ എല്ലാ ബിന്ദുക്കളും വൃത്തത്തിന് പുറത്തായതിനാൽ അവയിലേക്കുള്ള ദൂരം ആരത്തേക്കാൾ കൂടുതലാണ്.',
      rungs_en: [
        { why_en: 'Let line L be tangent to circle with centre O at P, so OP = r.', m: 'OP = r' },
        { why_en: 'Take any point Q != P on line L; Q lies outside the circle.', m: 'OQ > r = OP' },
        { why_en: 'Therefore OP is the strictly shortest segment from O to line L.', m: 'OP = \\min_{Q \\in L} OQ' },
        { why_en: 'The shortest distance from a point to a line is the perpendicular.', m: 'OP \\perp L \\implies \\angle OPT = 90^\\circ' }
      ],
      rungs_ml: [
        { why_ml: '$O$ കേന്ദ്രമായ വൃത്തത്തിലെ $P$ എന്ന സ്പർശബിന്ദുവിലൂടെയുള്ള തൊടുവരയാണ് $L$; $OP = r$.', m: 'OP = r' },
        { why_ml: 'തൊടുവരയിലെ $P$ അല്ലാത്ത മറ്റൊരു ബിന്ദുവാണ് $Q$; $Q$ വൃത്തത്തിന് പുറത്താണ്.', m: 'OQ > r = OP' },
        { why_ml: '$O$ ൽ നിന്ന് വരയിലേക്കുള്ള ഏറ്റവും ചെറിയ ദൂരമാണ് $OP$.', m: 'OP = \\min_{Q \\in L} OQ' },
        { why_ml: 'ഏറ്റവും ചെറിയ ദൂരം ലംബമായതിനാൽ $OP \\perp L$.', m: 'OP \\perp L \\implies \\angle OPT = 90^\\circ' }
      ]
    },
    traps_en: [
      'Assuming a secant line cutting the circle twice is perpendicular to the radius. Only the unique tangent line is perpendicular.',
      'Forgetting that tangents at the opposite ends of a diameter are parallel, not perpendicular.'
    ],
    traps_ml: [
      'വൃത്തത്തെ രണ്ട് ബിന്ദുക്കളിൽ മുറിച്ചുകടക്കുന്ന ഛേദകവര ആരത്തിന് ലംബമാണെന്ന് തെറ്റിദ്ധരിക്കൽ; സ്പർശബിന്ദുവിലെ തൊടുവര മാത്രമേ ലംബമാകൂ.',
      'ഒരു വ്യാസത്തിന്റെ രണ്ടറ്റങ്ങളിലെ തൊടുവരകൾ പരസ്പരം സമാന്തരമാണ്, ലംബമല്ല.'
    ],
    cards_en: [
      { q: 'What is the angle between the tangent at a point on a circle and the radius through the point of contact?', a: 'Strictly **$90^\\circ$** (perpendicular).', kind: 'recall' },
      { q: 'A tangent PQ at point P on a circle of radius 5 cm meets a line through centre O at Q such that OQ = 13 cm. Find length PQ.', a: 'Right triangle $OPQ$: $PQ = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = \\mathbf{12}$ cm.', kind: 'apply' },
      { q: 'What is the relationship between the tangents drawn at the ends of a diameter of a circle?', a: 'They are strictly **parallel** to each other ($90^\\circ + 90^\\circ = 180^\\circ$ co-interior angles).', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'വൃത്തത്തിലെ സ്പർശബിന്ദുവിലൂടെയുള്ള ആരവും തൊടുവരയും തമ്മിലുള്ള കോൺ എത്രയാണ്?', a: 'കൃത്യം **$90^\\circ$** (ലംബമാണ്).', kind: 'recall' },
      { q: '5 cm ആരമുള്ള വൃത്തത്തിലെ സ്പർശബിന്ദു $P$ യിലെ തൊടുവരയാണ് $PQ$. $OQ = 13$ cm ആയാൽ തൊടുവരയുടെ നീളം $PQ$ എത്ര?', a: 'മട്ടത്രികോണം $OPQ$: $PQ = \\sqrt{13^2 - 5^2} = \\sqrt{144} = \\mathbf{12}$ cm.', kind: 'apply' },
      { q: 'ഒരു വ്യാസത്തിന്റെ രണ്ടറ്റങ്ങളിലൂടെ വരയ്ക്കുന്ന തൊടുവരകൾ തമ്മിലുള്ള ബന്ധം എന്താണ്?', a: 'അവ പരസ്പരം **സമാന്തരമായിരിക്കും**.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.2 Tangents from an External Point (ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.7.2.tangents-from-an-external-point',
    sec: '10.7.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Tangents from an External Point',
    title_ml: 'ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകൾ',
    oneLine_en: 'From an external point, exactly two tangents can be drawn to a circle; their lengths are equal, and the angle between tangents is supplementary to the central angle: ∠APB + ∠AOB = 180°.',
    oneLine_ml: 'ഒരു ബാഹ്യബിന്ദുവിൽ നിന്ന് വൃത്തത്തിലേക്ക് രണ്ട് തൊടുവരകൾ വരയ്ക്കാം; അവയുടെ നീളങ്ങൾ തുല്യമായിരിക്കും, തൊടുവരകൾക്കിടയിലെ കോണും കേന്ദ്രകോണും അനുപൂരകമായിരിക്കും ($\\angle APB + \\angle AOB = 180^\\circ$).',
    statement_en: `<p><b>Tangents from an External Point $P$:</b></p>
      <p>Let $PA$ and $PB$ be the two tangents drawn from an external point $P$ to a circle with centre $O$, touching at points $A$ and $B$.</p>
      <ol>
        <li><b>Equal Lengths:</b> The lengths of the two tangents are equal:
        $$\\mathbf{PA = PB}$$</li>
        <li><b>Supplementary Angles:</b> The angle between the tangents and the central angle subtended by the chord of contact are supplementary:
        $$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ}$$</li>
        <li><b>Angle Bisector:</b> The line $OP$ joining the centre to the external point bisects both the angle between the tangents and the central angle:
        $$\\angle APO = \\angle BPO = \\frac{1}{2}\\angle APB, \\quad \\angle AOP = \\angle BOP = \\frac{1}{2}\\angle AOB$$</li>
        <li><b>Cyclic Quadrilateral:</b> Since $\\angle OAP = \\angle OBP = 90^\\circ$, quadrilateral $PAOB$ is a <b>cyclic quadrilateral</b>.</li>
      </ol>`,
    statement_ml: `<p><b>ബാഹ്യബിന്ദു $P$ യിൽ നിന്നുള്ള തൊടുവരകൾ:</b></p>
      <p>കേന്ദ്രമായ $O$ ഉള്ള വൃത്തത്തിലേക്ക് ബാഹ്യബിന്ദു $P$ യിൽ നിന്ന് വരച്ച തൊടുവരകളാണ് $PA, PB$ ($A, B$ സ്പർശബിന്ദുക്കൾ).</p>
      <ol>
        <li><b>തുല്യ നീളം:</b> രണ്ട് തൊടുവരകളുടെയും നീളങ്ങൾ തുല്യമായിരിക്കും:
        $$\\mathbf{PA = PB}$$</li>
        <li><b>അനുപൂരക കോണുകൾ:</b> തൊടുവരകൾക്കിടയിലെ കോണും കേന്ദ്രകോണും ചേർന്നാൽ $180^\\circ$ ആയിരിക്കും:
        $$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ}$$</li>
        <li><b>കോൺ സമഭാജി:</b> കേന്ദ്രത്തെയും ബാഹ്യബിന്ദുവിനെയും ബന്ധിപ്പിക്കുന്ന $OP$ എന്ന വര രണ്ട് കോണുകളെയും സമഭാഗം ചെയ്യുന്നു:
        $$\\angle APO = \\angle BPO, \\quad \\angle AOP = \\angle BOP$$</li>
        <li><b>ചക്രിയ ചതുർഭുജം:</b> $\\angle OAP = \\angle OBP = 90^\\circ$ ആയതിനാൽ $PAOB$ ഒരു <b>ചക്രിയ ചതുർഭുജമാണ്</b>.</li>
      </ol>`,
    intuition_en: `<p>Drawing the line $OP$ from the external point to the centre creates two perfectly symmetric mirror-image right triangles sharing hypotenuse $OP$ and radii $OA = OB$.</p>`,
    intuition_ml: `<p>ബാഹ്യബിന്ദുവിൽ നിന്ന് കേന്ദ്രത്തിലേക്ക് വരയ്ക്കുന്ന $OP$ എന്ന വര കർണ്ണമായുള്ള രണ്ട് സർവ്വസമ മട്ടത്രികോണങ്ങൾ ഉണ്ടാക്കുന്നു. ഇവയിലെ വശങ്ങൾ തുല്യമായതിനാൽ തൊടുവരകളുടെ നീളവും തുല്യമാകുന്നു.</p>`,
    proof: {
      idea_en: 'RHS congruence of right-angled triangles OAP and OBP.',
      idea_ml: 'മട്ടത്രികോണങ്ങളായ $\\triangle OAP, \\triangle OBP$ എന്നിവയിലെ $RHS$ സർവ്വസമത വഴി തെളിയിക്കുന്നു.',
      why_en: 'Both triangles have 90° angles, shared hypotenuse OP, and equal radii OA = OB.',
      why_ml: 'രണ്ട് ത്രികോണങ്ങളിലും കർണ്ണം $OP$ പൊതുവായതും ആരങ്ങൾ $OA = OB$ തുല്യമായതുമാണ്.',
      rungs_en: [
        { why_en: 'Radii OA and OB are perpendicular to tangents PA and PB.', m: '\\angle OAP = \\angle OBP = 90^\\circ' },
        { why_en: 'Hypotenuse OP is common to both right triangles.', m: 'OP = OP \\text{ (common)}' },
        { why_en: 'Radii of the same circle are equal.', m: 'OA = OB = r' },
        { why_en: 'By RHS criterion, triangle OAP is congruent to triangle OBP.', m: '\\triangle OAP \\cong \\triangle OBP' },
        { why_en: 'Corresponding parts of congruent triangles are equal.', m: 'PA = PB, \\quad \\angle APO = \\angle BPO' },
        { why_en: 'Opposite angles sum to 180° in quadrilateral PAOB.', m: '\\angle APB + \\angle AOB = 360^\\circ - (90^\\circ + 90^\\circ) = 180^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'സ്പർശബിന്ദുവിലെ ആരങ്ങൾ തൊടുവരകൾക്ക് ലംബമാണ്.', m: '\\angle OAP = \\angle OBP = 90^\\circ' },
        { why_ml: 'രണ്ട് മട്ടത്രികോണങ്ങളിലും കർണ്ണം $OP$ പൊതുവാണ്.', m: 'OP = OP \\text{ (പൊതുവായത്)}' },
        { why_ml: 'ഒരേ വൃത്തത്തിലെ ആരങ്ങൾ തുല്യമാണ്.', m: 'OA = OB = r' },
        { why_ml: '$RHS$ നിയമപ്രകാരം ത്രികോണങ്ങൾ സർവ്വസമമാണ്.', m: '\\triangle OAP \\cong \\triangle OBP' },
        { why_ml: 'സർവ്വസമ ത്രികോണങ്ങളുടെ അനുരൂപ ഭാഗങ്ങൾ തുല്യമാണ്.', m: 'PA = PB, \\quad \\angle APO = \\angle BPO' },
        { why_ml: 'ചതുർഭുജം $PAOB$ ൽ എതിർകോണുകളുടെ തുക $180^\\circ$ ആണ്.', m: '\\angle APB + \\angle AOB = 180^\\circ' }
      ]
    },
    needs: ['m10.7.1.tangent-line-and-perpendicular-radius'],
    traps_en: [
      'Assuming that more than two tangents can be drawn from an external point to a circle: exactly TWO can be drawn.',
      'Confusing the angle between tangents ∠APB with half of it; the full angle satisfies ∠APB + ∠AOB = 180°.'
    ],
    traps_ml: [
      'ഒരു ബാഹ്യബിന്ദുവിൽ നിന്ന് രണ്ടിൽ കൂടുതൽ തൊടുവരകൾ വരയ്ക്കാമെന്ന് കരുതുന്നത്; കൃത്യം 2 തൊടുവരകൾ മാത്രമേ വരയ്ക്കാൻ കഴിയൂ.',
      'തൊടുവരകൾക്കിടയിലെ കോണും കേന്ദ്രകോണും തമ്മിലുള്ള ബന്ധം തെറ്റിദ്ധരിക്കുന്നത്; അവ അനുപൂരകങ്ങളാണ് (തുക $180^\\circ$).'
    ],
    cards_en: [
      { q: 'How many tangents can be drawn to a circle from a point outside it, and how do their lengths compare?', a: 'Exactly **two** tangents, and their lengths are **equal** ($PA = PB$).', kind: 'recall' },
      { q: 'If the angle between two tangents from point P is 70°, what is the measure of the central angle ∠AOB?', a: '$\\angle AOB = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$.', kind: 'apply' },
      { q: 'What kind of quadrilateral is formed by the centre O, external point P, and the two points of contact A and B?', a: 'A **cyclic quadrilateral** (since $\\angle A + \\angle B = 90^\\circ + 90^\\circ = 180^\\circ$).', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ഒരു ബാഹ്യബിന്ദുവിൽ നിന്ന് വൃത്തത്തിലേക്ക് എത്ര തൊടുവരകൾ വരയ്ക്കാം? അവയുടെ നീളങ്ങൾ തമ്മിലുള്ള ബന്ധമെന്ത്?', a: 'കൃത്യം **രണ്ട്** തൊടുവരകൾ; അവയുടെ നീളങ്ങൾ **തുല്യമായിരിക്കും** ($PA = PB$).', kind: 'recall' },
      { q: 'ബാഹ്യബിന്ദു $P$ യിൽ നിന്നുള്ള തൊടുവരകൾക്കിടയിലെ കോൺ $70^\\circ$ ആയാൽ കേന്ദ്രകോൺ $\\angle AOB$ എത്ര?', a: '$\\angle AOB = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$.', kind: 'apply' },
      { q: 'കേന്ദ്രമായ $O$, ബാഹ്യബിന്ദു $P$, സ്പർശബിന്ദുക്കളായ $A, B$ എന്നിവ ചേർത്തുണ്ടാക്കുന്ന ചതുർഭുജം ഏത് തരമാണ്?', a: '**ചക്രിയ ചതുർഭുജം** (എതിർകോണുകളുടെ തുക $90^\\circ + 90^\\circ = 180^\\circ$ ആയതിനാൽ).', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.3 Incircle and Inradius of a Triangle (അന്തർവൃത്തവും അന്തരാരവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.7.3.incircle-and-inradius',
    sec: '10.7.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Incircle and Inradius of a Triangle',
    title_ml: 'അന്തർവൃത്തവും അന്തരാരവും',
    oneLine_en: 'The incircle touches all three sides of a triangle; its inradius is given by r = A / s, where A is triangle area and s = (a+b+c)/2 is the semiperimeter.',
    oneLine_ml: 'ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളെയും സ്പർശിക്കുന്ന വൃത്തമാണ് അന്തർവൃത്തം; അതിന്റെ അന്തരാരം $r = \\frac{A}{s}$ ആണ് ($A$ പരപ്പളവും $s$ അർദ്ധചുറ്റളവും).',
    statement_en: `<p><b>Incircle of a Triangle:</b></p>
      <p>The circle that touches all three sides of a triangle internally is called the <b>incircle</b> (അന്തർവൃത്തം). Its centre (incentre $I$) is the concurrence point of the internal angle bisectors of the triangle.</p>
      <p><b>The Inradius Formula:</b></p>
      $$\\mathbf{r = \\frac{A}{s} \\iff A = r \\cdot s}$$
      <p>where $A$ is the area of the triangle and $s = \\frac{a + b + c}{2}$ is the semi-perimeter.</p>
      <p><b>Special Case — Right-Angled Triangle:</b></p>
      <p>For a right triangle with perpendicular legs $a$ and $b$ and hypotenuse $c$:</p>
      $$\\mathbf{r = \\frac{a + b - c}{2}}$$`,
    statement_ml: `<p><b>ത്രികോണത്തിന്റെ അന്തർവൃത്തം:</b></p>
      <p>ഒരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളെയും ഉള്ളിൽ തൊടുന്ന വൃത്തമാണ് <b>അന്തർവൃത്തം</b>. അന്തർവൃത്തത്തിന്റെ കേന്ദ്രം (അന്തർകേന്ദ്രം $I$) ത്രികോണത്തിന്റെ കോൺ സമഭാജികൾ സംഗമിക്കുന്ന ബിന്ദുവാണ്.</p>
      <p><b>അന്തരാര സൂത്രവാക്യം:</b></p>
      $$\\mathbf{r = \\frac{A}{s} \\iff A = r \\cdot s}$$
      <p>ഇവിടെ $A$ എന്നത് ത്രികോണ പരപ്പളവും $s = \\frac{a + b + c}{2}$ എന്നത് അർദ്ധചുറ്റളവുമാണ്.</p>
      <p><b>പ്രത്യേക രൂപം — മട്ടത്രികോണം:</b></p>
      <p>ലംബവശങ്ങൾ $a, b$ യും കർണ്ണം $c$ യുമായ മട്ടത്രികോണത്തിന്റെ അന്തരാരം:</p>
      $$\\mathbf{r = \\frac{a + b - c}{2}}$$`,
    intuition_en: `<p>Connecting incentre $I$ to vertices splits the triangle into three smaller triangles with bases $a, b, c$ and equal heights $r$. Total area is $\\frac{1}{2}ra + \\frac{1}{2}rb + \\frac{1}{2}rc = r\\left(\\frac{a+b+c}{2}\\right) = rs$.</p>`,
    intuition_ml: `<p>അന്തർകേന്ദ്രത്തിൽ നിന്ന് മൂന്ന് ശീർഷങ്ങളിലേക്കും വരകൾ വരച്ചാൽ ത്രികോണം മൂന്ന് ചെറിയ ത്രികോണങ്ങളായി വിഭജിക്കപ്പെടുന്നു. ഇവയുടെയെല്ലാം ഉയരം അന്തരാരമായ $r$ ആണ്. അതിനാൽ ആകെ പരപ്പളവ് $= rs$.</p>`,
    proof: {
      idea_en: 'Partition triangle into three sub-triangles sharing the incentre as common apex.',
      idea_ml: 'ത്രികോണത്തെ അന്തർകേന്ദ്രം ശീർഷമായ മൂന്ന് ചെറിയ ത്രികോണങ്ങളായി വിഭജിക്കുന്നു.',
      why_en: 'The incentre is equidistant from all three sides by distance equal to inradius r.',
      why_ml: 'അന്തർകേന്ദ്രത്തിൽ നിന്ന് മൂന്ന് വശങ്ങളിലേക്കുമുള്ള ലംബദൂരം അന്തരാരമായ $r$ ന് തുല്യമാണ്.',
      rungs_en: [
        { why_en: 'Incentre I has perpendicular distance r to each side.', m: 'h_a = h_b = h_c = r' },
        { why_en: 'Area of triangle is sum of three sub-triangle areas.', m: 'A = \\text{Area}(\\triangle IBC) + \\text{Area}(\\triangle ICA) + \\text{Area}(\\triangle IAB)' },
        { why_en: 'Substitute 1/2 * base * height for each sub-triangle.', m: 'A = \\frac{1}{2}ar + \\frac{1}{2}br + \\frac{1}{2}cr' },
        { why_en: 'Factor out inradius r.', m: 'A = r \\left(\\frac{a + b + c}{2}\\right) = r \\cdot s' },
        { why_en: 'Solve for inradius r.', m: 'r = \\frac{A}{s}' }
      ],
      rungs_ml: [
        { why_ml: 'അന്തർകേന്ദ്രത്തിൽ നിന്ന് ഓരോ വശത്തേക്കുമുള്ള ലംബദൂരം $r$ ആണ്.', m: 'h_a = h_b = h_c = r' },
        { why_ml: 'ത്രികോണ പരപ്പളവ് മൂന്ന് ചെറിയ ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ തുകയാണ്.', m: 'A = \\text{പരപ്പളവ്}(\\triangle IBC) + \\text{പരപ്പളവ്}(\\triangle ICA) + \\text{പരപ്പളവ്}(\\triangle IAB)' },
        { why_ml: 'ഓരോ ത്രികോണത്തിന്റെയും പരപ്പളവ് $\\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം}$ എന്ന് എഴുതുന്നു.', m: 'A = \\frac{1}{2}ar + \\frac{1}{2}br + \\frac{1}{2}cr' },
        { why_ml: '$r$ പൊതുവായി പുറത്തെടുക്കുന്നു.', m: 'A = r \\left(\\frac{a + b + c}{2}\\right) = r \\cdot s' },
        { why_ml: 'അന്തരാരം $r$ കണ്ടെത്തുന്നു.', m: 'r = \\frac{A}{s}' }
      ]
    },
    needs: ['m10.7.1.tangent-line-and-perpendicular-radius'],
    traps_en: [
      'Using the full perimeter 2s instead of the semi-perimeter s in r = A / s.',
      'Using r = (a + b - c) / 2 for non-right triangles; that shortcut applies ONLY to right-angled triangles.'
    ],
    traps_ml: [
      '$r = \\frac{A}{s}$ എന്നതിൽ അർദ്ധചുറ്റളവ് $s$-ന് പകരം ആകെ ചുറ്റളവ് നൽകുന്നത്.',
      '$r = \\frac{a + b - c}{2}$ എന്ന സൂത്രവാക്യം എല്ലാ ത്രികോണങ്ങൾക്കും ഉപയോഗിക്കുന്നത്; അത് മട്ടത്രികോണങ്ങൾക്ക് മാത്രമേ ബാധകമാകൂ.'
    ],
    cards_en: [
      { q: 'State the formula connecting triangle area A, semi-perimeter s, and inradius r.', a: '$\\mathbf{r = \\frac{A}{s}} \\iff \\mathbf{A = r \\cdot s}$', kind: 'recall' },
      { q: 'A right-angled triangle has legs 6 cm and 8 cm. Find its inradius.', a: 'Hypotenuse $= 10$ cm. $r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = \\mathbf{2}$ cm (or $A = 24, s = 12 \\implies r = \\frac{24}{12} = 2$ cm).', kind: 'apply' },
      { q: 'What is the concurrence point of the internal angle bisectors of a triangle called?', a: 'The **incentre** (അന്തർകേന്ദ്രം), which is the centre of the incircle.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ത്രികോണ പരപ്പളവ് $A$, അർദ്ധചുറ്റളവ് $s$, അന്തരാരം $r$ എന്നിവയെ ബന്ധിപ്പിക്കുന്ന സൂത്രവാക്യം ഏത്?', a: '$\\mathbf{r = \\frac{A}{s}} \\iff \\mathbf{A = r \\cdot s}$', kind: 'recall' },
      { q: 'ലംബവശങ്ങൾ 6 cm, 8 cm ആയ മട്ടത്രികോണത്തിന്റെ അന്തരാരം കാണുക.', a: 'കർണ്ണം $= 10$ cm. $r = \\frac{6 + 8 - 10}{2} = \\mathbf{2}$ cm (അല്ലെങ്കിൽ $r = \\frac{A}{s} = \\frac{24}{12} = 2$ cm).', kind: 'apply' },
      { q: 'ത്രികോണത്തിന്റെ കോൺ സമഭാജികൾ സംഗമിക്കുന്ന ബിന്ദു ഏത്?', a: '**അന്തർകേന്ദ്രം** (ഇതാണ് അന്തർവൃത്തത്തിന്റെ കേന്ദ്രം).', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.7.4 Chord-Tangent Theorem & Intersecting Segments (തൊടുവര-ഞാൺ സിദ്ധാന്തം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Chord-Tangent Theorem & Intersecting Segments',
    title_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തവും രേഖാഖണ്ഡ ഗുണനഫലവും',
    oneLine_en: 'The angle between a tangent and a chord equals the angle subtended by the chord in the alternate segment; for a tangent PT and secant PAB from external point P: PA · PB = PT².',
    oneLine_ml: 'തൊടുവരയും ഞാണും തമ്മിലുള്ള കോൺ മറുഖണ്ഡത്തിലെ കോണിന് തുല്യമായിരിക്കും; ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവര $PT$ യും ഛേദകവര $PAB$ യും ആയാൽ $PA \\cdot PB = PT^2$.',
    statement_en: `<p><b>1. Alternate Segment Theorem (Chord-Tangent Angle):</b></p>
      <p>The angle between a tangent to a circle and a chord drawn from the point of contact equals the angle subtended by that chord in the opposite (alternate) segment:</p>
      $$\\mathbf{\\angle BPT = \\angle PAB}$$
      <p><b>2. Tangent-Secant Product Theorem:</b></p>
      <p>If a secant line drawn from an external point $P$ intersects the circle at points $A$ and $B$, and a tangent touches the circle at $T$, then:</p>
      $$\\mathbf{PA \\cdot PB = PT^2}$$
      <p><b>3. Circumscribed Quadrilateral (Pitot's Theorem):</b></p>
      <p>In any quadrilateral circumscribed about a circle, the sums of opposite sides are equal:</p>
      $$\\mathbf{AB + CD = AD + BC}$$`,
    statement_ml: `<p><b>1. തൊടുവര-ഞാൺ സിദ്ധാന്തം (മറുഖണ്ഡത്തിലെ കോൺ):</b></p>
      <p>ഒരു വൃത്തത്തിലെ തൊടുവരയും സ്പർശബിന്ദുവിലൂടെയുള്ള ഞാണും തമ്മിലുള്ള കോൺ ആ ഞാൺ മറുഖണ്ഡത്തിലുണ്ടാക്കുന്ന കോണിന് തുല്യമായിരിക്കും:</p>
      $$\\mathbf{\\angle BPT = \\angle PAB}$$
      <p><b>2. തൊടുവര-ഛേദകവര ഗുണനഫല സിദ്ധാന്തം:</b></p>
      <p>ബാഹ്യബിന്ദു $P$ യിൽ നിന്നുള്ള ഛേദകവര വൃത്തത്തെ $A, B$ എന്നീ ബിന്ദുക്കളിൽ മുറിക്കുകയും $PT$ തൊടുവരയായിരിക്കുകയും ചെയ്താൽ:</p>
      $$\\mathbf{PA \\cdot PB = PT^2}$$
      <p><b>3. വൃത്തം തൊടുന്ന ചതുർഭുജം:</b></p>
      <p>ഒരു വൃത്തത്തെ തൊടുന്ന ചതുർഭുജത്തിൽ എതിർവശങ്ങളുടെ തുകകൾ തുല്യമായിരിക്കും:</p>
      $$\\mathbf{AB + CD = AD + BC}$$`,
    intuition_en: `<p>As a secant line rotates until both intersection points $A$ and $B$ merge into the single point of contact $T$, the product $PA \\cdot PB$ continuously transitions into $PT \\cdot PT = PT^2$.</p>`,
    intuition_ml: `<p>വൃത്തത്തെ രണ്ട് ബിന്ദുക്കളിൽ മുറിക്കുന്ന വര തിരിഞ്ഞ് രണ്ട് ബിന്ദുക്കളും ഒരൊറ്റ സ്പർശബിന്ദുവായ $T$ യിലേക്ക് ലയിക്കുമ്പോൾ $PA \\cdot PB$ എന്നത് $PT \\cdot PT = PT^2$ ആയി മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Similar triangles formed by the tangent and secant lines sharing the external angle.',
      idea_ml: 'തൊടുവരയും ഛേദകവരയും ചേർത്തുണ്ടാക്കുന്ന സദൃശ ത്രികോണങ്ങളിലൂടെ തെളിയിക്കുന്നു.',
      why_en: 'Triangles PTA and PBT share angle P and have equal alternate segment angles.',
      why_ml: 'ത്രികോണങ്ങൾ $PTA, PBT$ എന്നിവയിൽ $\\angle P$ പൊതുവായതും മറുഖണ്ഡ കോണുകൾ തുല്യമായതിനാലും അവ സദൃശമാണ്.',
      rungs_en: [
        { why_en: 'In triangles PTA and PBT, angle P is shared.', m: '\\angle TPA = \\angle BPT' },
        { why_en: 'By alternate segment theorem, angle PTA equals angle PBT.', m: '\\angle PTA = \\angle PBT' },
        { why_en: 'By AA similarity criterion, triangle PTA is similar to triangle PBT.', m: '\\triangle PTA \\sim \\triangle PBT' },
        { why_en: 'Equate ratios of corresponding sides.', m: '\\frac{PT}{PB} = \\frac{PA}{PT}' },
        { why_en: 'Cross-multiply to obtain the product relation.', m: 'PA \\cdot PB = PT^2' }
      ],
      rungs_ml: [
        { why_ml: '$\\triangle PTA, \\triangle PBT$ എന്നിവയിൽ $\\angle P$ പൊതുവാണ്.', m: '\\angle TPA = \\angle BPT' },
        { why_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തപ്രകാരം $\\angle PTA = \\angle PBT$.', m: '\\angle PTA = \\angle PBT' },
        { why_ml: 'AA തത്വപ്രകാരം രണ്ട് ത്രികോണങ്ങളും സദൃശമാണ്.', m: '\\triangle PTA \\sim \\triangle PBT' },
        { why_ml: 'അനുരൂപ വശങ്ങളുടെ അനുപാതം തുല്യമാക്കുന്നു.', m: '\\frac{PT}{PB} = \\frac{PA}{PT}' },
        { why_ml: 'ഗുണിക്കുമ്പോൾ സിദ്ധാന്ത രൂപം ലഭിക്കുന്നു.', m: 'PA \\cdot PB = PT^2' }
      ]
    },
    needs: ['m10.7.2.tangents-from-an-external-point'],
    traps_en: [
      'Measuring distance PB from point A instead of from external point P: PB is the ENTIRE secant segment PA + AB.',
      'Confusing the alternate segment angle with the adjacent central angle.'
    ],
    traps_ml: [
      '$PB$ യുടെ നീളം ബാഹ്യബിന്ദു $P$ ൽ നിന്നല്ലാതെ $A$ യിൽ നിന്ന് അളക്കുന്നത് ($AB$ എന്ന് എടുക്കുന്നത്); $PB = PA + AB$ ആണ്.',
      'മറുഖണ്ഡത്തിലെ കോണിന് പകരം കേന്ദ്രകോണുമായി തെറ്റിദ്ധരിക്കുന്നത്.'
    ],
    cards_en: [
      { q: 'State the tangent-secant product theorem for a tangent PT and secant PAB.', a: '$\\mathbf{PA \\cdot PB = PT^2}$', kind: 'recall' },
      { q: 'A secant from P cuts a circle at A and B such that PA = 4 cm and AB = 5 cm. Find tangent length PT.', a: '$PB = 4 + 5 = 9$ cm. $PT^2 = 4 \\times 9 = 36 \\implies PT = \\mathbf{6}$ cm.', kind: 'apply' },
      { q: 'In a circumscribed quadrilateral ABCD, AB = 6 cm, BC = 7 cm, and CD = 4 cm. Find AD.', a: '$AB + CD = AD + BC \\implies 6 + 4 = AD + 7 \\implies AD = 10 - 7 = \\mathbf{3}$ cm.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'തൊടുവര $PT$, ഛേദകവര $PAB$ എന്നിവയുടെ ഗുണനഫല സിദ്ധാന്തം എഴുതുക.', a: '$\\mathbf{PA \\cdot PB = PT^2}$', kind: 'recall' },
      { q: '$P$ ൽ നിന്നുള്ള വര വൃത്തത്തെ $A, B$ എന്നിവയിൽ മുറിക്കുന്നു. $PA = 4$ cm, $AB = 5$ cm ആയാൽ തൊടുവര $PT$ യുടെ നീളം എത്ര?', a: '$PB = 4 + 5 = 9$ cm. $PT^2 = 4 \\times 9 = 36 \\implies PT = \\mathbf{6}$ cm.', kind: 'apply' },
      { q: 'വൃത്തം തൊടുന്ന ചതുർഭുജം $ABCD$ ൽ $AB = 6$ cm, $BC = 7$ cm, $CD = 4$ cm ആയാൽ $AD$ എത്ര?', a: '$AB + CD = AD + BC \\implies 6 + 4 = AD + 7 \\implies AD = \\mathbf{3}$ cm.', kind: 'trap' }
    ]
  }
);
