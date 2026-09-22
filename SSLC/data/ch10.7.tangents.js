/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 7: Tangents (തൊടുവരകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.7.1.tangent-line-and-perpendicular-radius',
    sec: '10.7.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Tangent Line & Perpendicular Radius',
    title_ml: 'തൊടുവരയും ആരവുമായുള്ള ലംബബന്ധം',
    oneLine_en: 'A tangent touches a circle at exactly one point; the radius drawn to the point of contact is strictly perpendicular to the tangent line: OP ⊥ PT.',
    oneLine_ml: 'വൃത്തത്തെ ഒരൊറ്റ ബിന്ദുവിൽ മാത്രം സ്പർശിക്കുന്ന വരയാണ് തൊടുവര; സ്പർശബിന്ദുവിലെ ആരവും തൊടുവരയും പരസ്പരം ലംബമായിരിക്കും: OP ⊥ PT.',
    statement_en: `<p><b>Fundamental Tangent Theorem:</b></p>
      <p>A line that touches a circle at exactly one point $P$ is called a <b>tangent</b> to the circle at $P$.</p>
      <p><b>Perpendicularity Property:</b> The radius drawn from the circle centre $O$ to the point of contact $P$ is strictly perpendicular to the tangent line:</p>
      $$\\mathbf{OP \\perp PT \\implies \\angle OPT = 90^\\circ}$$
      <p><b>Converse:</b> A line drawn through the endpoint of a radius and perpendicular to it is the tangent to the circle at that point.</p>
      <p><b>Parallel Tangents:</b> The tangents drawn at the two opposite endpoints of any diameter are parallel to each other.</p>`,
    statement_ml: `<p><b>തൊടുവര സിദ്ധാന്തം:</b></p>
      <p>ഒരു വൃത്തത്തെ ഒരൊറ്റ ബിന്ദുവിൽ മാത്രം സ്പർശിക്കുന്ന വരയെ ആ ബിന്ദുവിലെ <b>തൊടുവര</b> എന്ന് വിളിക്കുന്നു.</p>
      <p><b>ലംബ സവിശേഷത:</b> വൃത്തകേന്ദ്രം $O$ യിൽ നിന്ന് സ്പർശബിന്ദു $P$ യിലേക്ക് വരയ്ക്കുന്ന ആരം തൊടുവരയ്ക്ക് ലംബമായിരിക്കും:</p>
      $$\\mathbf{OP \\perp PT \\implies \\angle OPT = 90^\\circ}$$
      <p><b>മറുസിദ്ധാന്തം:</b> ആരത്തിന്റെ അറ്റത്തുകൂടി ആരത്തിന് ലംബമായി വരയ്ക്കുന്ന വര ആ ബിന്ദുവിലെ തൊടുവരയായിരിക്കും.</p>
      <p><b>സമാന്തര തൊടുവരകൾ:</b> ഒരു വ്യാസത്തിന്റെ രണ്ടറ്റങ്ങളിലൂടെ വരയ്ക്കുന്ന തൊടുവരകൾ പരസ്പരം സമാന്തരമായിരിക്കും.</p>`,
    intuition_en: 'Among all points on the tangent line, the point of contact P is closest to the centre O (distance equals radius r; all other points lie outside the circle at distance > r). The shortest distance from a point to a line is the perpendicular distance.',
    intuition_ml: 'തൊടുവരയിലെ എല്ലാ ബിന്ദുക്കളിലും വെച്ച് വൃത്തകേന്ദ്രത്തോട് ഏറ്റവും അടുത്ത ബിന്ദുവാണ് സ്പർശബിന്ദുവായ P. കേന്ദ്രത്തിൽ നിന്നുള്ള ഏറ്റവും കുറഞ്ഞ ദൂരം ലംബദൂരം ആയതിനാൽ ആരം തൊടുവരയ്ക്ക് ലംബമായിരിക്കും.',
    proof: {
      idea_en: 'Use minimality of distance from a point to a line.',
      idea_ml: 'ഒരു ബിന്ദുവിൽ നിന്ന് വരയിലേക്കുള്ള ഏറ്റവും ചെറിയ ദൂരം ലംബമായിരിക്കും എന്ന തത്വത്തിലൂടെ തെളിയിക്കുന്നു.',
      why_en: 'Every point on the tangent line other than point of contact P lies outside the circle, meaning distance > radius.',
      why_ml: 'സ്പർശബിന്ദു ഒഴികെയുള്ള തൊടുവരയിലെ എല്ലാ ബിന്ദുക്കളും വൃത്തത്തിന് പുറത്തായതിനാൽ അവയിലേക്കുള്ള ദൂരം ആരത്തേക്കാൾ കൂടുതലാണ്.',
      rungs: [
        {
          title_en: 'Position of Arbitrary Point',
          title_ml: 'മറ്റ് ബിന്ദുക്കളുടെ സ്ഥാനം',
          detail_en: 'Let line $L$ be tangent to circle with centre $O$ and radius $r$ at $P$. Take any point $Q \\ne P$ on $L$. Since $L$ touches the circle only at $P$, $Q$ lies outside the circle, so $OQ > r = OP$.',
          detail_ml: 'തൊടുവരയിലെ $P$ അല്ലാത്ത മറ്റൊരു ബിന്ദുവാണ് $Q$. $Q$ വൃത്തത്തിന് പുറത്തായതിനാൽ $OQ > OP = r$.'
        },
        {
          title_en: 'Shortest Distance is Perpendicular',
          title_ml: 'ഏറ്റവും ചെറിയ ദൂരം ലംബം',
          detail_en: 'Since $OP \\le OQ$ for all points $Q$ on $L$, segment $OP$ is the shortest distance from $O$ to line $L$. The shortest path from a point to a line is the perpendicular, hence $OP \\perp L$.',
          detail_ml: '$O$ ൽ നിന്ന് വരയിലേക്കുള്ള ഏറ്റവും ചെറിയ ദൂരമാണ് $OP$. ഏറ്റവും ചെറിയ ദൂരം ലംബമായതിനാൽ $OP \\perp L$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Assuming a secant line cutting the circle twice is perpendicular to the radius.',
        fix_en: 'Only the unique TANGENT line touching at exactly one point is perpendicular to the radius.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'വൃത്തത്തെ രണ്ട് ബിന്ദുക്കളിൽ മുറിച്ചുകടക്കുന്ന ഛേദകവര ആരത്തിന് ലംബമാണെന്ന് തെറ്റിദ്ധരിക്കൽ.',
        fix_ml: 'ഒരൊറ്റ ബിന്ദുവിൽ മാത്രം സ്പർശിക്കുന്ന തൊടുവര മാത്രമേ സ്പർശബിന്ദുവിലെ ആരത്തിന് ലംബമാകൂ.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'A tangent PQ at a point P of a circle of radius 5 cm meets a line through centre O at Q such that OQ = 13 cm. Find length PQ.',
        a: 'Triangle OPQ is right-angled at P. PQ = √(13² - 5²) = √(169 - 25) = √144 = 12 cm.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '5 cm ആരമുള്ള വൃത്തത്തിലെ സ്പർശബിന്ദു P യിലെ തൊടുവരയാണ് PQ. O കേന്ദ്രമായ വൃത്തത്തിൽ OQ = 13 cm ആയാൽ തൊടുവരയുടെ നീളം PQ എത്ര?',
        a: 'OPQ ൽ ∠P = 90°. PQ = √(13² - 5²) = √144 = 12 cm.'
      }
    ]
  },
  {
    id: 'm10.7.2.tangents-from-an-external-point',
    sec: '10.7.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Tangents from an External Point',
    title_ml: 'ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകൾ',
    oneLine_en: 'From an external point, exactly two tangents can be drawn to a circle; their lengths are equal, and the angle between tangents is supplementary to the central angle: ∠APB + ∠AOB = 180°.',
    oneLine_ml: 'ഒരു ബാഹ്യബിന്ദുവിൽ നിന്ന് വൃത്തത്തിലേക്ക് രണ്ട് തൊടുവരകൾ വരയ്ക്കാം; അവയുടെ നീളങ്ങൾ തുല്യമായിരിക്കും, തൊടുവരകൾക്കിടയിലെ കോണും കേന്ദ്രകോണും അനുപൂരകമായിരിക്കും ($\angle APB + \angle AOB = 180^\circ$).',
    statement_en: `<p><b>Tangents from an External Point $P$:</b></p>
      <p>Let $PA$ and $PB$ be the two tangents drawn from an external point $P$ to a circle with centre $O$, touching at points $A$ and $B$.</p>
      <ol>
        <li><b>Equal Lengths:</b> The lengths of the two tangents are equal:
        $$\\mathbf{PA = PB}$$</li>
        <li><b>Supplementary Angles:</b> The angle between the tangents and the angle subtended by the line segment joining the points of contact at the centre are supplementary:
        $$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ}$$</li>
        <li><b>Angle Bisector:</b> The line $OP$ joining the centre to the external point bisects both the angle between the tangents and the central angle:
        $$\\angle APO = \\angle BPO = \\frac{1}{2}\\angle APB, \\quad \\angle AOP = \\angle BOP = \\frac{1}{2}\\angle AOB$$</li>
        <li><b>Cyclic Quadrilateral:</b> Since $\\angle OAP = \\angle OBP = 90^\\circ$, quadrilateral $PAOB$ has opposite angles summing to $180^\\circ$, so it is a <b>cyclic quadrilateral</b>.</li>
      </ol>`,
    statement_ml: `<p><b>ബാഹ്യബിന്ദു $P$ യിൽ നിന്നുള്ള തൊടുവരകൾ:</b></p>
      <p>കേന്ദ്രമായ $O$ ഉള്ള വൃത്തത്തിലേക്ക് ബാഹ്യബിന്ദു $P$ യിൽ നിന്ന് വരച്ച തൊടുവരകളാണ് $PA, PB$ (സ്പർശബിന്ദുക്കൾ $A, B$):</p>
      <ol>
        <li><b>തുല്യ നീളം:</b> രണ്ട് തൊടുവരകളുടെയും നീളങ്ങൾ തുല്യമായിരിക്കും:
        $$\\mathbf{PA = PB}$$</li>
        <li><b>അനുപൂരക കോണുകൾ:</b> തൊടുവരകൾക്കിടയിലെ കോണും കേന്ദ്രകോണും ചേർന്നാൽ $180^\\circ$ ആയിരിക്കും:
        $$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ}$$</li>
        <li><b>കോൺ സമഭാജി:</b> കേന്ദ്രത്തെയും ബാഹ്യബിന്ദുവിനെയും ബന്ധിപ്പിക്കുന്ന $OP$ എന്ന വര രണ്ട് കോണുകളെയും സമഭാഗം ചെയ്യുന്നു:
        $$\\angle APO = \\angle BPO, \\quad \\angle AOP = \\angle BOP$$</li>
        <li><b>ചക്രിയ ചതുർഭുജം:</b> $\\angle OAP = \\angle OBP = 90^\\circ$ ആയതിനാൽ $PAOB$ ഒരു <b>ചക്രിയ ചതുർഭുജമാണ്</b>.</li>
      </ol>`,
    intuition_en: 'Drawing the line from the external point to the center creates two perfectly symmetric mirror-image right triangles sharing the hypotenuse OP and having radii OA = OB.',
    intuition_ml: 'ബാഹ്യബിന്ദുവിൽ നിന്ന് കേന്ദ്രത്തിലേക്ക് വരയ്ക്കുന്ന വര കർണ്ണമായുള്ള രണ്ട് സർവ്വസമ മട്ടത്രികോണങ്ങൾ ഉണ്ടാക്കുന്നു. ഇവയിലെ വശങ്ങൾ തുല്യമായതിനാൽ തൊടുവരകളുടെ നീളവും തുല്യമാകുന്നു.',
    proof: {
      idea_en: 'RHS congruence of right triangles OAP and OBP.',
      idea_ml: 'മട്ടത്രികോണങ്ങളായ $\triangle OAP, \triangle OBP$ എന്നിവയിലെ $RHS$ സർവ്വസമത വഴി തെളിയിക്കുന്നു.',
      why_en: 'Both triangles have right angles, shared hypotenuse OP, and equal radii OA = OB.',
      why_ml: 'രണ്ട് ത്രികോണങ്ങളിലും കർണ്ണം OP പൊതുവായതും ആരങ്ങൾ OA = OB തുല്യമായതുമാണ്.',
      rungs: [
        {
          title_en: 'RHS Congruence',
          title_ml: 'RHS സർവ്വസമത',
          detail_en: 'In right $\\triangle OAP$ and right $\\triangle OBP$: $\\angle OAP = \\angle OBP = 90^\\circ$, hypotenuse $OP = OP$ (common), and $OA = OB = r$ (radii). Therefore, $\\triangle OAP \\cong \\triangle OBP$ by RHS criterion.',
          detail_ml: 'മട്ടത്രികോണങ്ങളായ $OAP, OBP$ എന്നിവയിൽ കർണ്ണം $OP = OP$ പൊതുവാണ്, ആരങ്ങൾ $OA = OB = r$ തുല്യമാണ്. അതിനാൽ RHS നിയമപ്രകാരം $\\triangle OAP \\cong \\triangle OBP$.'
        },
        {
          title_en: 'Corresponding Parts Equal',
          title_ml: 'അനുരൂപ ഭാഗങ്ങളുടെ തുല്യത',
          detail_en: 'By CPCTC: $PA = PB$, $\\angle APO = \\angle BPO$, and $\\angle AOP = \\angle BOP$.',
          detail_ml: 'സർവ്വസമ ത്രികോണങ്ങളുടെ അനുരൂപ വശങ്ങൾ തുല്യമായതിനാൽ $PA = PB$ ഉം കോണുകൾ തുല്യവുമാണ്.'
        },
        {
          title_en: 'Supplementary Sum in Quadrilateral',
          title_ml: 'ചതുർഭുജത്തിലെ കോൺ തുക',
          detail_en: 'In quadrilateral $PAOB$, sum of angles is $360^\\circ$. Since $\\angle A + \\angle B = 90^\\circ + 90^\\circ = 180^\\circ$, we have $\\angle APB + \\angle AOB = 360^\\circ - 180^\\circ = 180^\\circ$.',
          detail_ml: 'ചതുർഭുജം $PAOB$ ൽ ആകെ കോൺ $360^\\circ$ ആണ്. $\\angle A + \\angle B = 180^\\circ$ ആയതിനാൽ $\\angle APB + \\angle AOB = 180^\\circ$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Thinking that three tangents can be drawn from an external point to a circle.',
        fix_en: 'From any point outside a circle, exactly TWO tangents can be drawn, no more and no less.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'ഒരു ബാഹ്യബിന്ദുവിൽ നിന്ന് രണ്ടിൽ കൂടുതൽ തൊടുവരകൾ വരയ്ക്കാമെന്ന് കരുതുന്നത്.',
        fix_ml: 'ഒരു വൃത്തത്തിന് പുറത്തുള്ള ഏതൊരു ബിന്ദുവിൽ നിന്നും കൃത്യം 2 തൊടുവരകൾ മാത്രമേ വരയ്ക്കാൻ കഴിയൂ.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'If the angle between two tangents from a point P to a circle is 70°, what is the angle between the radii at the points of contact?',
        a: '∠AOB = 180° - ∠APB = 180° - 70° = 110°.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ബാഹ്യബിന്ദു P യിൽ നിന്നുള്ള രണ്ട് തൊടുവരകൾക്കിടയിലെ കോൺ 70° ആയാൽ കേന്ദ്രകോൺ ∠AOB എത്ര?',
        a: 'കേന്ദ്രകോൺ ∠AOB = 180° - 70° = 110°.'
      }
    ]
  },
  {
    id: 'm10.7.3.incircle-and-inradius',
    sec: '10.7.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Incircle and Inradius of a Triangle',
    title_ml: 'അന്തർവൃത്തവും അന്തരാരവും',
    oneLine_en: 'The incircle touches all three sides of a triangle; its inradius is given by r = A / s, where A is triangle area and s = (a+b+c)/2 is the semiperimeter.',
    oneLine_ml: 'ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളെയും സ്പർശിക്കുന്ന വൃത്തമാണ് അന്തർവൃത്തം; അതിന്റെ അന്തരാരം r = A / s ആണ് (A പരപ്പളവും s അർദ്ധചുറ്റളവും).',
    statement_en: `<p><b>Incircle of a Triangle:</b></p>
      <p>The circle that touches all three sides of a triangle internally is called the <b>incircle</b> (അന്തർവൃത്തം). Its centre (incentre $I$) is the concurrence point of the internal angle bisectors of the triangle.</p>
      <p><b>The Inradius Formula:</b></p>
      $$\\mathbf{r = \\frac{A}{s} \\iff A = r \\cdot s}$$
      <p>where $A$ is the area of the triangle and $s = \\frac{a + b + c}{2}$ is the semi-perimeter.</p>
      <p><b>Special Case — Right-Angled Triangle:</b></p>
      <p>For a right triangle with legs $a$ and $b$ and hypotenuse $c$:</p>
      $$\\mathbf{r = \\frac{a + b - c}{2}}$$`,
    statement_ml: `<p><b>ത്രികോണത്തിന്റെ അന്തർവൃത്തം:</b></p>
      <p>ഒരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളെയും ഉള്ളിൽ തൊടുന്ന വൃത്തമാണ് <b>അന്തർവൃത്തം</b>. അന്തർവൃത്തത്തിന്റെ കേന്ദ്രം (അന്തർകേന്ദ്രം) ത്രികോണത്തിന്റെ കോൺ സമഭാജികൾ സംഗമിക്കുന്ന ബിന്ദുവാണ്.</p>
      <p><b>അന്തരാര സൂത്രവാക്യം:</b></p>
      $$\\mathbf{r = \\frac{A}{s} \\iff A = r \\cdot s}$$
      <p>ഇവിടെ $A$ എന്നത് ത്രികോണ പരപ്പളവും $s = \\frac{a + b + c}{2}$ എന്നത് അർദ്ധചുറ്റളവുമാണ്.</p>
      <p><b>പ്രത്യേക രൂപം — മട്ടത്രികോണം:</b></p>
      <p>ലംബവശങ്ങൾ $a, b$ യും കർണ്ണം $c$ യുമായ മട്ടത്രികോണത്തിന്റെ അന്തരാരം:</p>
      $$\\mathbf{r = \\frac{a + b - c}{2}}$$`,
    intuition_en: 'Connecting the incenter to the three vertices splits the big triangle into three smaller triangles having the triangle sides as bases and the inradius r as their common height. Summing their areas gives (1/2)ra + (1/2)rb + (1/2)rc = r(a+b+c)/2 = rs.',
    intuition_ml: 'അന്തർകേന്ദ്രത്തിൽ നിന്ന് മൂന്ന് ശീർഷങ്ങളിലേക്കും വരകൾ വരച്ചാൽ ത്രികോണം മൂന്ന് ചെറിയ ത്രികോണങ്ങളായി വിഭജിക്കപ്പെടുന്നു. ഇവയുടെയെല്ലാം ഉയരം അന്തരാരമായ r ആണ്. അതിനാൽ ആകെ പരപ്പളവ് (1/2)ra + (1/2)rb + (1/2)rc = r(a+b+c)/2 = rs.',
    proof: {
      idea_en: 'Partition triangle into three sub-triangles sharing incenter.',
      idea_ml: 'ത്രികോണത്തെ അന്തർകേന്ദ്രം ശീർഷമായ മൂന്ന് ചെറിയ ത്രികോണങ്ങളായി വിഭജിക്കുന്നു.',
      why_en: 'Incenter is equidistant from all three sides by distance equal to inradius r.',
      why_ml: 'അന്തർകേന്ദ്രത്തിൽ നിന്ന് മൂന്ന് വശങ്ങളിലേക്കുമുള്ള ലംബദൂരം അന്തരാരമായ r ന് തുല്യമാണ്.',
      rungs: [
        {
          title_en: 'Three Sub-Triangles',
          title_ml: 'മൂന്ന് ചെറിയ ത്രികോണങ്ങൾ',
          detail_en: 'Let $I$ be the incenter. Triangle $ABC$ is the union of $\\triangle IBC, \\triangle ICA, \\triangle IAB$.',
          detail_ml: 'അന്തർകേന്ദ്രം $I$ ആയാൽ $\\triangle ABC = \\triangle IBC + \\triangle ICA + \\triangle IAB$.'
        },
        {
          title_en: 'Summing Component Areas',
          title_ml: 'പരപ്പളവുകളുടെ തുക',
          detail_en: '$\\text{Area} = \\frac{1}{2}a \\cdot r + \\frac{1}{2}b \\cdot r + \\frac{1}{2}c \\cdot r = r \\left(\\frac{a + b + c}{2}\\right) = r \\cdot s$. Thus $r = \\frac{A}{s}$.',
          detail_ml: 'പരപ്പളവ് $= \\frac{1}{2}ar + \\frac{1}{2}br + \\frac{1}{2}cr = r\\left(\\frac{a+b+c}{2}\\right) = rs \\implies r = \\frac{A}{s}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Confusing semiperimeter s with the full perimeter 2s in r = A/s.',
        fix_en: 'Remember s is the SEMI-perimeter: s = (a + b + c) / 2.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'സൂത്രവാക്യത്തിൽ അർദ്ധചുറ്റളവ് s ന് പകരം ആകെ ചുറ്റളവ് നൽകുന്നത്.',
        fix_ml: 's എന്നത് ചുറ്റളവിന്റെ പകുതിയായ അർദ്ധചുറ്റളവാണ്: s = (a + b + c) / 2.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'A triangle has sides 6 cm, 8 cm, and 10 cm. Find its inradius.',
        a: 'Right triangle with legs 6, 8, hyp 10: r = (6 + 8 - 10) / 2 = 4 / 2 = 2 cm (or Area = 24, s = 12, r = 24/12 = 2 cm).'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'വശങ്ങൾ 6 cm, 8 cm, 10 cm ആയ ത്രികോണത്തിന്റെ അന്തരാരം കാണുക.',
        a: 'മട്ടത്രികോണമായതിനാൽ r = (6 + 8 - 10) / 2 = 2 cm (അല്ലെങ്കിൽ r = A/s = 24/12 = 2 cm).'
      }
    ]
  },
  {
    id: 'm10.7.4.chord-tangent-theorem-and-segments',
    sec: '10.7.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Chord-Tangent Theorem & Intersecting Segments',
    title_ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തവും രേഖാഖണ്ഡ ഗുണനഫലവും',
    oneLine_en: 'The angle between a tangent and a chord equals the angle subtended by the chord in the alternate segment; for a tangent PT and secant PAB from external point P: PA · PB = PT².',
    oneLine_ml: 'തൊടുവരയും ഞാണും തമ്മിലുള്ള കോൺ മറുഖണ്ഡത്തിലെ കോണിന് തുല്യമായിരിക്കും; ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവര PT യും ഛേദകവര $PAB$ യും ആയാൽ PA · PB = PT².',
    statement_en: `<p><b>1. Alternate Segment Theorem (Chord-Tangent Angle):</b></p>
      <p>The angle between a tangent to a circle and a chord drawn from the point of contact equals the angle subtended by the chord in the alternate segment:</p>
      $$\\mathbf{\\angle BPT = \\angle PAB}$$
      <p><b>2. Tangent-Secant Theorem:</b></p>
      <p>If a secant line drawn from an external point $P$ intersects the circle at points $A$ and $B$, and a tangent touches the circle at $T$, then:</p>
      $$\\mathbf{PA \\cdot PB = PT^2}$$
      <p><b>Geometric Construction Meaning:</b> This theorem allows constructing a square equal in area to a given rectangle ($a \\cdot b = x^2$) using circle tangents and chords.</p>`,
    statement_ml: `<p><b>1. തൊടുവര-ഞാൺ സിദ്ധാന്തം (മറുഖണ്ഡത്തിലെ കോൺ):</b></p>
      <p>ഒരു വൃത്തത്തിലെ തൊടുവരയും സ്പർശബിന്ദുവിലൂടെയുള്ള ഞാണും തമ്മിലുള്ള കോൺ ആ ഞാൺ മറുഖണ്ഡത്തിലുണ്ടാക്കുന്ന കോണിന് തുല്യമായിരിക്കും:</p>
      $$\\mathbf{\\angle BPT = \\angle PAB}$$
      <p><b>2. തൊടുവര-ഛേദകവര ഗുണനഫല സിദ്ധാന്തം:</b></p>
      <p>ബാഹ്യബിന്ദു $P$ യിൽ നിന്നുള്ള ഛേദകവര വൃത്തത്തെ $A, B$ എന്നീ ബിന്ദുക്കളിൽ മുറിക്കുകയും $PT$ തൊടുവരയായിരിക്കുകയും ചെയ്താൽ:</p>
      $$\\mathbf{PA \\cdot PB = PT^2}$$
      <p><b>ജ്യാമിതീയ നിർമ്മിതി:</b> തന്നിരിക്കുന്ന ഒരു ചതുരത്തിന്റെ പരപ്പളവിന് തുല്യമായ പരപ്പളവുള്ള സമചതുരം നിർമ്മിക്കാൻ ($a \\cdot b = x^2$) ഈ സിദ്ധാന്തം ഉപയോഗിക്കുന്നു.</p>`,
    intuition_en: 'As a secant line rotates until both intersection points merge into the single point of contact T, the product PA · PB continuously transitions into PT · PT = PT².',
    intuition_ml: 'വൃത്തത്തെ രണ്ട് ബിന്ദുക്കളിൽ മുറിക്കുന്ന വര തിരിഞ്ഞ് രണ്ട് ബിന്ദുക്കളും ഒരൊറ്റ സ്പർശബിന്ദുവായ T യിലേക്ക് ലയിക്കുമ്പോൾ PA · PB എന്നത് PT · PT = PT² ആയി മാറുന്നു.',
    proof: {
      idea_en: 'Similar triangles formed by the tangent and secant lines.',
      idea_ml: 'തൊടുവരയും ഛേദകവരയും ചേർത്തുണ്ടാക്കുന്ന സദൃശ ത്രികോണങ്ങളിലൂടെ തെളിയിക്കുന്നു.',
      why_en: 'Triangles PTA and PBT share angle P and have equal alternate segment angles.',
      why_ml: 'ത്രികോണങ്ങൾ PTA, PBT എന്നിവയിൽ ∠P പൊതുവായതും മറുഖണ്ഡ കോണുകൾ തുല്യമായതിനാലും അവ സദൃശമാണ്.',
      rungs: [
        {
          title_en: 'AA Triangle Similarity',
          title_ml: 'AA സദൃശത',
          detail_en: 'In $\\triangle PTA$ and $\\triangle PBT$: $\\angle P$ is common, and by the alternate segment theorem $\\angle PTA = \\angle PBT$. Therefore, $\\triangle PTA \\sim \\triangle PBT$ by AA similarity.',
          detail_ml: '$\\triangle PTA, \\triangle PBT$ എന്നിവയിൽ $\\angle P$ പൊതുവാണ്, $\\angle PTA = \\angle PBT$. അതിനാൽ AA തത്വപ്രകാരം $\\triangle PTA \\sim \\triangle PBT$.'
        },
        {
          title_en: 'Proportional Ratios Cross-Multiplication',
          title_ml: 'വശാനുപാത ഗുണനം',
          detail_en: 'Corresponding sides ratio: $\\frac{PT}{PB} = \\frac{PA}{PT} \\implies PT \\cdot PT = PA \\cdot PB \\implies PA \\cdot PB = PT^2$.',
          detail_ml: 'അനുരൂപ വശങ്ങളുടെ അനുപാതം: $\\frac{PT}{PB} = \\frac{PA}{PT} \\implies PA \\cdot PB = PT^2$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Measuring distance PB from point A instead of from the external point P.',
        fix_en: 'Both lengths PA and PB must be measured starting from the EXTERNAL point P: PA · PB = PT².'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'PB യുടെ നീളം ബാഹ്യബിന്ദു P ൽ നിന്നല്ലാതെ A യിൽ നിന്ന് അളക്കുന്നത് (AB എന്ന് എടുക്കുന്നത്).',
        fix_ml: 'രണ്ട് അളവുകളും ബാഹ്യബിന്ദുവായ P യിൽ നിന്നാണ് തുടങ്ങേണ്ടത്: PA · PB = PT².'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'A secant from P cuts a circle at A and B such that PA = 4 cm and AB = 5 cm. Find the length of tangent PT.',
        a: 'PB = PA + AB = 4 + 5 = 9 cm. PT² = PA * PB = 4 * 9 = 36 ⟹ PT = 6 cm.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'P യിൽ നിന്നുള്ള ഛേദകവര വൃത്തത്തെ A, B എന്നിവയിൽ മുറിക്കുന്നു. PA = 4 cm, AB = 5 cm ആയാൽ തൊടുവര PT യുടെ നീളം എത്ര?',
        a: 'PB = 4 + 5 = 9 cm. PT² = PA * PB = 4 * 9 = 36 ⟹ PT = 6 cm.'
      }
    ]
  }
);
