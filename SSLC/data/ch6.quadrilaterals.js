/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 6: Construction of Quadrilaterals (ചതുർഭുജ നിർമ്മിതി)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.6.1.quad-uniqueness',
    sec: '8.6.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Conditions to Determine a Quadrilateral',
    title_ml: 'ചതുർഭുജം നിശ്ചയിക്കുന്നതിനുള്ള വ്യവസ്ഥകൾ',
    oneLine_en: 'A triangle requires 3 independent measures; a quadrilateral requires 5 independent measures to be uniquely determined.',
    oneLine_ml: 'ഒരു ത്രികോണം നിശ്ചയിക്കാൻ 3 സ്വതന്ത്ര അളവുകൾ മതിയെങ്കിൽ, ഒരു ചതുർഭുജം നിർണ്ണയിക്കാൻ 5 സ്വതന്ത്ര അളവുകൾ ആവശ്യമാണ്.',
    statement_en: `<p>A triangle is a <b>rigid</b> geometric figure: 3 independent measurements (such as three sides, or two sides and the included angle) fix it uniquely.</p>
      <p>In contrast, four sides alone <b>do not</b> uniquely determine a quadrilateral. A quadrilateral frame made of four linked rods can change its shape freely by flexing its corner angles.</p>
      <p>A single diagonal divides any quadrilateral into two triangles. Since each triangle requires 3 independent measurements and they share the common diagonal ($3 + 3 - 1 = 5$), exactly <b>five independent measurements</b> are necessary and sufficient to determine a general quadrilateral uniquely:</p>
      <ol>
        <li>Four sides and one diagonal</li>
        <li>Three sides and two diagonals</li>
        <li>Two adjacent sides and three angles</li>
        <li>Three sides and two included angles</li>
      </ol>`,
    statement_ml: `<p>ത്രികോണം ഒരു <b>ദൃഢമായ</b> ജ്യാമിതീയ രൂപമാണ്: 3 സ്വതന്ത്ര അളവുകൾ (മൂന്ന് വശങ്ങൾ, അല്ലെങ്കിൽ രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും) നൽകിയാൽ ഒരേയൊരു ത്രികോണം മാത്രം നിർമ്മിക്കാം.</p>
      <p>എന്നാൽ നാല് വശങ്ങൾ മാത്രം നൽകിയാൽ ഒരു ചതുർഭുജം നിശ്ചയിക്കാനാവില്ല. നാല് കമ്പികൾ കൊണ്ടുള്ള ചതുർഭുജ ചട്ടക്കൂടിന്റെ വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ കോണുകൾ മാറ്റി ആകൃതി വ്യത്യാസപ്പെടുത്താം.</p>
      <p>ഒരു വികർണ്ണം ചതുർഭുജത്തെ രണ്ട് ത്രികോണങ്ങളായി വിഭജിക്കുന്നു. ഓരോ ത്രികോണത്തിനും 3 അളവുകൾ വീതവും വികർണ്ണം പൊതുവായതുമായതിനാൽ ($3 + 3 - 1 = 5$), ഒരു സാധാരണ ചതുർഭുജം കൃത്യമായി നിർണ്ണയിക്കാൻ <b>5 സ്വതന്ത്ര അളവുകൾ</b> ആവശ്യമാണ്:</p>
      <ol>
        <li>നാല് വശങ്ങളും ഒരു വികർണ്ണവും</li>
        <li>മൂന്ന് വശങ്ങളും രണ്ട് വികർണ്ണങ്ങളും</li>
        <li>രണ്ട് അടുത്തടുത്ത വശങ്ങളും മൂന്ന് കോണുകളും</li>
        <li>മൂന്ന് വശങ്ങളും അവയ്ക്കിടയിലെ രണ്ട് കോണുകളും</li>
      </ol>`,
    intuition_en: `<p>Think of a square that leans over into a rhombus: the 4 sides remain unchanged, but the angles and diagonals change completely. Fixing a fifth measurement (like a diagonal) locks the shape!</p>`,
    intuition_ml: `<p>ഒരു സമചതുരം ചരിഞ്ഞ് റോംബസായി മാറുന്നത് സങ്കൽപ്പിക്കുക: 4 വശങ്ങളുടെ നീളം മാറിയിട്ടില്ലെങ്കിലും കോണുകളും വികർണ്ണങ്ങളും മാറുന്നു. ഒരു വികർണ്ണത്തിന്റെ നീളം കൂടി ഉറപ്പിച്ചാൽ രൂപം അനങ്ങാതെ ഉറച്ചുനിൽക്കും!</p>`,
    proof: {
      idea_en: 'A diagonal splits the quadrilateral into two triangles sharing a common edge.',
      idea_ml: 'ഒരു വികർണ്ണം ചതുർഭുജത്തെ ഒരു പൊതുവശമുള്ള രണ്ട് ത്രികോണങ്ങളായി മാറ്റുന്നു.',
      why_en: 'Fixing two triangles uniquely with a shared side fixes all 4 vertices.',
      why_ml: 'പൊതുവശമുള്ള രണ്ട് ത്രികോണങ്ങളെ നിശ്ചയിച്ചാൽ ചതുർഭുജത്തിന്റെ നാല് മൂലകളും നിശ്ചയിക്കപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'A quadrilateral ABCD has 4 vertices and 4 edges.', m: 'A, B, C, D' },
        { why_en: 'Draw diagonal AC to create triangle ABC and triangle ADC.', m: '\\triangle ABC, \\triangle ADC' },
        { why_en: 'Triangle ABC requires 3 measurements to be uniquely determined.', m: '3 \\text{ measures}' },
        { why_en: 'Triangle ADC shares edge AC, so it requires 2 additional independent measurements.', m: '2 \\text{ measures}' },
        { why_en: 'Total independent measurements required is 3 + 2 = 5.', m: '3 + 2 = 5' }
      ],
      rungs_ml: [
        { why_ml: '$ABCD$ എന്ന ചതുർഭുജത്തിന് 4 മൂലകളും 4 വശങ്ങളുമുണ്ട്.', m: 'A, B, C, D' },
        { why_ml: 'AC എന്ന വികർണ്ണം വരച്ചാൽ $\triangle ABC, \triangle ADC$ എന്നിവ ലഭിക്കുന്നു.', m: '\\triangle ABC, \\triangle ADC' },
        { why_ml: '$\triangle ABC$ കൃത്യമായി വരയ്ക്കാൻ 3 അളവുകൾ വേണം.', m: '3 \\text{ അളവുകൾ}' },
        { why_ml: '$\triangle ADC$-ക്ക് $AC$ പൊതുവായതിനാൽ 2 അധിക അളവുകൾ കൂടി മതിയാകും.', m: '2 \\text{ അളവുകൾ}' },
        { why_ml: 'അതിനാൽ ആകെ ആവശ്യമായ സ്വതന്ത്ര അളവുകൾ 3 + 2 = 5 ആണ്.', m: '3 + 2 = 5' }
      ]
    },
    needs: ['m8.2.1.congruence-intro', 'm8.2.1.rigidity'],
    traps_en: [
      'Four sides do NOT determine a unique quadrilateral: infinitely many quadrilaterals have the same 4 side lengths.',
      'The 5 measurements must be independent; for example, four angles alone only determine shape (similarity), not size.'
    ],
    traps_ml: [
      'നാല് വശങ്ങൾ മാത്രം നൽകിയാൽ ചതുർഭുജം വരയ്ക്കാനാകില്ല: ഒരേ 4 വശങ്ങളുള്ള അസംഖ്യം വ്യത്യസ്ത ചതുർഭുജങ്ങൾ നിർമ്മിക്കാം.',
      'നൽകിയിരിക്കുന്ന 5 അളവുകളും സ്വതന്ത്രമായിരിക്കണം; ഉദാഹരണത്തിന് നാല് കോണുകൾ മാത്രം നൽകിയാൽ വലിപ്പം നിശ്ചയിക്കാനാവില്ല.'
    ],
    cards_en: [
      { q: 'How many independent measurements are needed to uniquely determine a general quadrilateral?', a: '5 independent measurements.', kind: 'state' },
      { q: 'Can a unique quadrilateral be constructed given only the lengths of its four sides?', a: 'No, because a quadrilateral with fixed sides is not rigid.', kind: 'trap' },
      { q: 'Why does a diagonal reduce the construction of a quadrilateral to triangles?', a: 'Because a diagonal divides the quadrilateral into two rigid triangles sharing a common side.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു സാധാരണ ചതുർഭുജം നിർണ്ണയിക്കാൻ എത്ര സ്വതന്ത്ര അളവുകൾ ആവശ്യമാണ്?', a: '5 സ്വതന്ത്ര അളവുകൾ.', kind: 'state' },
      { q: 'നാല് വശങ്ങളുടെ നീളം മാത്രം നൽകിയാൽ ഒരേയൊരു ചതുർഭുജം നിർമ്മിക്കാൻ കഴിയുമോ?', a: 'ഇല്ല, നാല് വശങ്ങൾ മാത്രമുള്ള ചതുർഭുജം ദൃഢമല്ല.', kind: 'trap' },
      { q: 'ഒരു വികർണ്ണം ചതുർഭുജ നിർമ്മിതിയെ എളുപ്പമാക്കുന്നത് എന്തുകൊണ്ട്?', a: 'വികർണ്ണം ചതുർഭുജത്തെ പൊതുവശമുള്ള രണ്ട് ദൃഢ ത്രികോണങ്ങളായി വിഭജിക്കുന്നതുകൊണ്ട്.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.6.2.four-sides-one-diagonal',
    sec: '8.6.2',
    kind: 'technique',
    tier: 'core',
    title_en: 'Construction: Four Sides and One Diagonal',
    title_ml: 'നാല് വശങ്ങളും ഒരു വികർണ്ണവും നൽകിയുള്ള നിർമ്മിതി',
    oneLine_en: 'Construct the base triangle first using SSS, then locate the fourth vertex with two intersecting arcs from the diagonal ends.',
    oneLine_ml: 'ആദ്യം $SSS$ രീതിയിൽ അടിസ്ഥാന ത്രികോണം വരയ്ക്കുക, തുടർന്ന് വികർണ്ണത്തിന്റെ അറ്റങ്ങളിൽ നിന്ന് രണ്ട് ചാപങ്ങൾ വരച്ച് നാലാമത്തെ മൂല കണ്ടെത്തുക.',
    statement_en: `<p>To construct a quadrilateral $ABCD$ given the lengths of four sides $AB, BC, CD, DA$ and one diagonal $AC$:</p>
      <ol>
        <li><b>Rough sketch:</b> Draw a rough figure, mark vertices $A, B, C, D$ in order, and write down all 5 given lengths.</li>
        <li><b>Base triangle:</b> Construct $\\triangle ABC$ using sides $AB, BC$ and diagonal $AC$ using the SSS construction method.</li>
        <li><b>Fourth vertex $D$:</b>
          <ul>
            <li>With $A$ as center and radius equal to $AD$, draw an arc on the opposite side of $AC$ from $B$.</li>
            <li>With $C$ as center and radius equal to $CD$, draw another arc cutting the previous arc at point $D$.</li>
          </ul></li>
        <li><b>Complete:</b> Join $AD$ and $CD$. The required quadrilateral $ABCD$ is complete.</li>
      </ol>
      <p><b>Condition of Possibility (Triangle Inequality):</b><br>
      The construction is possible if and only if both triangles can be constructed:<br>
      In $\\triangle ABC$: $AB + BC > AC$, $AB + AC > BC$, and $BC + AC > AB$.<br>
      In $\\triangle ADC$: $AD + CD > AC$, $AD + AC > CD$, and $CD + AC > AD$.</p>`,
    statement_ml: `<p>നാല് വശങ്ങൾ ($AB, BC, CD, DA$) ഒരു വികർണ്ണം ($AC$) എന്നിവ തന്നാൽ ചതുർഭുജം $ABCD$ നിർമ്മിക്കുന്ന രീതി:</p>
      <ol>
        <li><b>ഏകദേശ ചിത്രം:</b> ഒരു ഏകദേശ ചിത്രം വരച്ച് $A, B, C, D$ എന്ന് പേരിട്ട് തന്നിട്ടുള്ള 5 അളവുകളും രേഖപ്പെടുത്തുക.</li>
        <li><b>അടിസ്ഥാന ത്രികോണം:</b> $AB, BC$ എന്നീ വശങ്ങളും $AC$ എന്ന വികർണ്ണവും ഉപയോഗിച്ച് $\\triangle ABC$ നിർമ്മിക്കുക ($SSS$ രീതി).</li>
        <li><b>നാലാമത്തെ മൂല $D$:</b>
          <ul>
            <li>$AC$-യുടെ $B$ ഇല്ലാത്ത വശത്ത്, $A$ കേന്ദ്രമാക്കി $AD$ ആരത്തിൽ ഒരു ചാപം വരയ്ക്കുക.</li>
            <li>$C$ കേന്ദ്രമാക്കി $CD$ ആരത്തിൽ മറ്റൊരു ചാപം വരച്ച് മുമ്പത്തെ ചാപത്തെ $D$-യിൽ ഖണ്ഡിക്കുക.</li>
          </ul></li>
        <li><b>പൂർത്തീകരണം:</b> $AD, CD$ എന്നിവ യോജിപ്പിക്കുക. ഇതോടെ $ABCD$ എന്ന ചതുർഭുജം പൂർത്തിയാകുന്നു.</li>
      </ol>
      <p><b>നിർമ്മാണ സാധ്യതാ വ്യവസ്ഥ (ത്രികോണ അസമത):</b><br>
      രണ്ട് ത്രികോണങ്ങളും നിർമ്മിക്കാൻ സാധിച്ചാൽ മാത്രമേ ചതുർഭുജം നിർമ്മിക്കാനാവൂ:<br>
      $\\triangle ABC$-യിൽ: $AB + BC > AC$.<br>
      $\\triangle ADC$-യിൽ: $AD + CD > AC$.</p>`,
    intuition_en: `<p>The diagonal acts as the common spine. We build one triangle on one side of the spine, and the second triangle on the other side. The two triangle apexes give the remaining two vertices.</p>`,
    intuition_ml: `<p>വികർണ്ണം ഒരു നട്ടെല്ല് പോലെ പ്രവർത്തിക്കുന്നു. നട്ടെല്ലിന്റെ ഒരു വശത്ത് ആദ്യത്തെ ത്രികോണവും, മറുവശത്ത് രണ്ടാമത്തെ ത്രികോണവും നിർമ്മിച്ചാൽ ചതുർഭുജം പൂർത്തിയാകും.</p>`,
    needs: ['m8.6.1.quad-uniqueness', 'm8.2.1.sss-congruence'],
    traps_en: [
      'Always verify the triangle inequality for both triangles before starting construction. If sum of two sides is less than or equal to the diagonal, the arcs will not intersect!',
      'Draw the fourth vertex on the OPPOSITE side of the diagonal from the first vertex, not on the same side.'
    ],
    traps_ml: [
      'വരയ്ക്കാൻ തുടങ്ങുന്നതിന് മുമ്പ് ത്രികോണ അസമത പാലിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക. രണ്ട് വശങ്ങളുടെ തുക വികർണ്ണത്തേക്കാൾ കുറവാണെങ്കിൽ ചാപങ്ങൾ കൂട്ടിമുട്ടില്ല!',
      'നാലാമത്തെ മൂല വികർണ്ണത്തിന്റെ എതിർവശത്താണ് വരയ്ക്കേണ്ടത്, ഒരേ വശത്തല്ല.'
    ],
    cards_en: [
      { q: 'In constructing a quadrilateral from 4 sides and 1 diagonal, what is constructed first?', a: 'The base triangle formed by two sides and the diagonal.', kind: 'state' },
      { q: 'Can a quadrilateral be constructed with sides 3 cm, 4 cm, 5 cm, 6 cm and diagonal 10 cm between the first two sides?', a: 'No, because $3 + 4 = 7 < 10$, violating the triangle inequality.', kind: 'apply' },
      { q: 'How is the fourth vertex located in four-sides-and-diagonal construction?', a: 'By the intersection of two arcs drawn from the two ends of the diagonal.', kind: 'state' }
    ],
    cards_ml: [
      { q: 'നാല് വശങ്ങളും ഒരു വികർണ്ണവും നൽകിയാൽ ആദ്യം നിർമ്മിക്കേണ്ടത് എന്താണ്?', a: 'രണ്ട് വശങ്ങളും വികർണ്ണവും ചേർന്ന അടിസ്ഥാന ത്രികോണം.', kind: 'state' },
      { q: 'വശങ്ങൾ 3 cm, 4 cm, 5 cm, 6 cm ഉം ആദ്യ രണ്ട് വശങ്ങൾക്കിടയിലെ വികർണ്ണം 10 cm ഉം ആയ ചതുർഭുജം നിർമ്മിക്കാൻ കഴിയുമോ?', a: 'ഇല്ല, കാരണം $3 + 4 = 7 < 10$ ആയതിനാൽ ത്രികോണ അസമത പാലിക്കുന്നില്ല.', kind: 'apply' },
      { q: 'ഈ നിർമ്മിതിയിൽ നാലാമത്തെ മൂല എങ്ങനെയാണ് കണ്ടെത്തുന്നത്?', a: 'വികർണ്ണത്തിന്റെ രണ്ടറ്റങ്ങളിൽ നിന്നും വശങ്ങളുടെ അളവിൽ വരയ്ക്കുന്ന രണ്ട് ചാപങ്ങൾ ഖണ്ഡിക്കുന്ന ബിന്ദുവിലൂടെ.', kind: 'state' }
    ]
  },

  {
    id: 'm8.6.3.sides-and-angles',
    sec: '8.6.3',
    kind: 'technique',
    tier: 'core',
    title_en: 'Construction with Sides and Angles',
    title_ml: 'വശങ്ങളും കോണുകളും നൽകിയുള്ള നിർമ്മിതി',
    oneLine_en: 'Given 2 adjacent sides & 3 angles (or 3 sides & 2 included angles), use angle rays and arc lengths to locate vertices.',
    oneLine_ml: 'രണ്ട് വശങ്ങളും മൂന്ന് കോണുകളും (അല്ലെങ്കിൽ മൂന്ന് വശങ്ങളും രണ്ട് കോണുകളും) തന്നാൽ, കോൺ കിരണങ്ങളും ചാപങ്ങളും ഉപയോഗിച്ച് മൂലകൾ കണ്ടെത്താം.',
    statement_en: `<p>When angles are given, we use angle rays at vertices combined with side lengths:</p>
      <ul>
        <li><b>Case 1: Two adjacent sides and three angles ($AB, BC, \\angle A, \\angle B, \\angle C$):</b>
          <ol>
            <li>Draw base segment $BC$.</li>
            <li>At $B$, construct ray making angle $\\angle B$ and mark $A$ such that length is $AB$.</li>
            <li>At $C$, construct ray making angle $\\angle C$.</li>
            <li>At $A$, construct ray making angle $\\angle A$.</li>
            <li>The ray from $A$ and the ray from $C$ intersect at point $D$.</li>
            <li><b>Angle Sum Constraint:</b> The sum of the three given angles must be strictly less than $360^\\circ$: $\\angle A + \\angle B + \\angle C < 360^\\circ$. The fourth angle is $\\angle D = 360^\\circ - (\\angle A + \\angle B + \\angle C)$.</li>
          </ol></li>
        <li><b>Case 2: Three sides and two included angles ($AB, BC, CD, \\angle B, \\angle C$):</b>
          <ol>
            <li>Draw base segment $BC$.</li>
            <li>At $B$, draw ray making angle $\\angle B$ and mark point $A$ at distance $AB$.</li>
            <li>At $C$, draw ray making angle $\\angle C$ and mark point $D$ at distance $CD$.</li>
            <li>Join $A$ and $D$. The quadrilateral $ABCD$ is complete.</li>
          </ol></li>
      </ul>`,
    statement_ml: `<p>കോണുകൾ നൽകുമ്പോൾ, മൂലകളിലെ കോൺ കിരണങ്ങളും വശങ്ങളുടെ നീളങ്ങളും ഉപയോഗിച്ച് നിർമ്മിതി നടത്തുന്നു:</p>
      <ul>
        <li><b>രീതി 1: രണ്ട് അടുത്തടുത്ത വശങ്ങളും മൂന്ന് കോണുകളും ($AB, BC, \\angle A, \\angle B, \\angle C$):</b>
          <ol>
            <li>പാദമായ $BC$ വരയ്ക്കുക.</li>
            <li>$B$-യിൽ $\\angle B$ കോണളവിൽ കിരണം വരച്ച് $BA = AB$ അടയാളപ്പെടുത്തുക.</li>
            <li>$C$-യിൽ $\\angle C$ കോണളവിൽ കിരണം വരയ്ക്കുക.</li>
            <li>$A$-യിൽ $\\angle A$ കോണളവിൽ കിരണം വരയ്ക്കുക.</li>
            <li>$A$-യിൽ നിന്നും $C$-യിൽ നിന്നുമുള്ള കിരണങ്ങൾ പരസ്പരം ഖണ്ഡിക്കുന്ന ബിന്ദുവാണ് $D$.</li>
            <li><b>കോണുകളുടെ തുകാ വ്യവസ്ഥ:</b> നൽകിയിട്ടുള്ള മൂന്ന് കോണുകളുടെയും തുക $360^\\circ$-ൽ കുറവായിരിക്കണം: $\\angle A + \\angle B + \\angle C < 360^\\circ$. നാലാമത്തെ കോൺ $\\angle D = 360^\\circ - (\\angle A + \\angle B + \\angle C)$ ആണ്.</li>
          </ol></li>
        <li><b>രീതി 2: മൂന്ന് വശങ്ങളും അവയ്ക്കിടയിലെ രണ്ട് കോണുകളും ($AB, BC, CD, \\angle B, \\angle C$):</b>
          <ol>
            <li>പാദമായ $BC$ വരയ്ക്കുക.</li>
            <li>$B$-യിൽ $\\angle B$ വരച്ച് $A$-യെ അടയാളപ്പെടുത്തുക ($AB$).</li>
            <li>$C$-യിൽ $\\angle C$ വരച്ച് $D$-യെ അടയാളപ്പെടുത്തുക ($CD$).</li>
            <li>$A$-യും $D$-യും തമ്മിൽ യോജിപ്പിക്കുക. ഇതോടെ $ABCD$ പൂർത്തിയാകുന്നു.</li>
          </ol></li>
      </ul>`,
    intuition_en: `<p>When 3 angles are known, the fourth is automatically determined by the angle sum property of quadrilaterals ($360^\circ$). The two side lengths fix the scale and location of the angle vertices.</p>`,
    intuition_ml: `<p>3 കോണുകൾ അറിയാമെങ്കിൽ നാലാമത്തെ കോൺ തനിയെ നിശ്ചയിക്കപ്പെടും (ആകെ തുക $360^\circ$). തന്നിരിക്കുന്ന രണ്ട് വശങ്ങൾ ചതുർഭുജത്തിന്റെ വലിപ്പവും മൂലകളുടെ സ്ഥാനവും നിശ്ചയിക്കുന്നു.</p>`,
    needs: ['m8.6.1.quad-uniqueness', 'm8.4.1.polygon-angle-sum'],
    traps_en: [
      'In Case 1, ensure the angles are at the correct vertices according to the rough sketch.',
      'If the sum of three given angles is 360° or greater, the rays will diverge or be parallel and will never intersect!'
    ],
    traps_ml: [
      'ഏകദേശ ചിത്രത്തിൽ അടയാളപ്പെടുത്തിയിട്ടുള്ള അതേ മൂലകളിലാണ് കോണുകൾ വരയ്ക്കുന്നതെന്ന് ഉറപ്പുവരുത്തുക.',
      'തന്നിട്ടുള്ള മൂന്ന് കോണുകളുടെ തുക 360° അല്ലെങ്കിൽ അതിൽ കൂടുതലായാൽ കിരണങ്ങൾ കൂട്ടിമുട്ടില്ല!'
    ],
    cards_en: [
      { q: 'In a quadrilateral, three angles are 100°, 80°, and 110°. What is the fourth angle?', a: '$360^\\circ - (100^\\circ + 80^\\circ + 110^\\circ) = 360^\\circ - 290^\\circ = 70^\\circ$.', kind: 'apply' },
      { q: 'Can a quadrilateral be constructed with three angles measuring 120°, 130°, and 110°?', a: 'No, because $120^\\circ + 130^\\circ + 110^\\circ = 360^\\circ$, leaving 0° for the fourth angle.', kind: 'trap' },
      { q: 'In "three sides and two included angles", where are the two angles located?', a: 'At the two ends of the middle side (e.g. at B and C for sides AB, BC, CD).', kind: 'state' }
    ],
    cards_ml: [
      { q: 'ഒരു ചതുർഭുജത്തിലെ മൂന്ന് കോണുകൾ 100°, 80°, 110° ആണെങ്കിൽ നാലാമത്തെ കോൺ എത്ര?', a: '$360^\\circ - (100^\\circ + 80^\\circ + 110^\\circ) = 360^\\circ - 290^\\circ = 70^\\circ$.', kind: 'apply' },
      { q: 'മൂന്ന് കോണുകൾ 120°, 130°, 110° വീതമുള്ള ചതുർഭുജം നിർമ്മിക്കാൻ കഴിയുമോ?', a: 'ഇല്ല, കാരണം മൂന്ന് കോണുകളുടെ തുക തന്നെ $360^\\circ$ ആയതിനാൽ നാലാമത്തെ കോണിന് അളവില്ല.', kind: 'trap' },
      { q: '"മൂന്ന് വശങ്ങളും അവയ്ക്കിടയിലെ രണ്ട് കോണുകളും" എന്ന രീതിയിൽ കോണുകൾ എവിടെയാണ് വരുന്നത്?', a: 'നടുവിലെ വശത്തിന്റെ രണ്ടറ്റങ്ങളിലായി (ഉദാ: AB, BC, CD എന്നിവയിൽ B-യിലും C-യിലും).', kind: 'state' }
    ]
  },

  {
    id: 'm8.6.4.special-quadrilaterals',
    sec: '8.6.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Construction of Special Quadrilaterals',
    title_ml: 'പ്രത്യേക ചതുർഭുജങ്ങളുടെ നിർമ്മിതി',
    oneLine_en: 'Special symmetries reduce required measurements: Parallelogram needs 3, Rhombus and Rectangle need 2, Square needs only 1.',
    oneLine_ml: 'പ്രത്യേക ചതുർഭുജങ്ങളിലെ സമമിതികൾ കാരണം കുറഞ്ഞ അളവുകൾ മതി: സാമാന്തരികത്തിന് 3, സമഭുജസാമാന്തരികത്തിനും ചതുരത്തിനും 2, സമചതുരത്തിന് 1.',
    statement_en: `<p>In special quadrilaterals, symmetry properties (equal sides, parallel sides, equal angles, perpendicular bisecting diagonals) reduce the number of required independent measurements from 5:</p>
      <ul>
        <li><b>Square (1 measurement):</b>
          <p>Requires only side $a$ (since all sides $= a$ and all angles $= 90^\\circ$), or diagonal $d$ (diagonals are equal and bisect perpendicularly).</p></li>
        <li><b>Rectangle (2 measurements):</b>
          <p>Requires only length $a$ and breadth $b$ (all angles $= 90^\\circ$), or one side and one diagonal.</p></li>
        <li><b>Rhombus / സമഭുജസാമാന്തരികം (2 measurements):</b>
          <p>Key property: <b>The diagonals of a rhombus are perpendicular bisectors of each other.</b></p>
          <p>Given two diagonals $d_1$ and $d_2$:</p>
          <ol>
            <li>Draw diagonal $AC = d_1$.</li>
            <li>Construct the perpendicular bisector of $AC$, intersecting it at midpoint $O$.</li>
            <li>Along the bisector, mark points $B$ and $D$ on either side at distance $\\frac{d_2}{2}$ from $O$.</li>
            <li>Join $AB, BC, CD, DA$. The rhombus $ABCD$ is complete!</li>
          </ol></li>
        <li><b>Parallelogram / സാമാന്തരികം (3 measurements):</b>
          <p>Requires two adjacent sides and the included angle (or one diagonal). Opposite sides are equal ($AB = CD, BC = DA$).</p></li>
      </ul>`,
    statement_ml: `<p>പ്രത്യേക ചതുർഭുജങ്ങളിലെ സവിശേഷതകൾ (തുല്യ വശങ്ങൾ, സമാന്തര വശങ്ങൾ, ലംബ വികർണ്ണങ്ങൾ) കാരണം 5 അളവുകൾക്ക് പകരം കുറഞ്ഞ അളവുകൾ മതിയാകും:</p>
      <ul>
        <li><b>സമചതുരം (1 അളവ്):</b>
          <p>ഒരു വശം $a$ മാത്രം മതി (എല്ലാ വശങ്ങളും തുല്യവും കോണുകൾ $90^\\circ$ ആയതിനാൽ), അല്ലെങ്കിൽ വികർണ്ണം $d$.</p></li>
        <li><b>ചതുരം (2 അളവുകൾ):</b>
          <p>നീളവും വീതിയും ($a, b$) മാത്രം മതി (എല്ലാ കോണുകളും $90^\\circ$ ആണ്), അല്ലെങ്കിൽ ഒരു വശവും വികർണ്ണവും.</p></li>
        <li><b>സമഭുജസാമാന്തരികം / റോംബസ് (2 അളവുകൾ):</b>
          <p>പ്രധാന സവിശേഷത: <b>റോംബസിന്റെ വികർണ്ണങ്ങൾ പരസ്പരം ലംബമായി സമഭാഗം ചെയ്യുന്നു.</b></p>
          <p>രണ്ട് വികർണ്ണങ്ങൾ $d_1, d_2$ തന്നിരുന്നാൽ:</p>
          <ol>
            <li>ആദ്യം $AC = d_1$ എന്ന വികർണ്ണം വരയ്ക്കുക.</li>
            <li>$AC$-യുടെ ലംബസമഭാജി വരച്ച് മധ്യബിന്ദു $O$ അടയാളപ്പെടുത്തുക.</li>
            <li>ഈ ലംബരേഖയിൽ $O$-യിൽ നിന്നും ഇരുവശങ്ങളിലേക്കും $\\frac{d_2}{2}$ വീതം അകലത്തിൽ $B, D$ എന്നിവ അടയാളപ്പെടുത്തുക.</li>
            <li>$AB, BC, CD, DA$ എന്നിവ യോജിപ്പിച്ച് റോംബസ് പൂർത്തിയാക്കുക!</li>
          </ol></li>
        <li><b>സാമാന്തരികം (3 അളവുകൾ):</b>
          <p>രണ്ട് അടുത്തടുത്ത വശങ്ങളും അവയ്ക്കിടയിലെ കോണും (അല്ലെങ്കിൽ ഒരു വികർണ്ണവും). എതിർവശങ്ങൾ തുല്യവും സമാന്തരവുമാണ്.</p></li>
      </ul>`,
    intuition_en: `<p>Knowing the diagonals of a rhombus gives all four vertices immediately because the diagonals meet at 90° and cut each other exactly in half.</p>`,
    intuition_ml: `<p>റോംബസിന്റെ വികർണ്ണങ്ങൾ $90^\circ$-ൽ കൂട്ടിമുട്ടുകയും തുല്യമായി പകുക്കുകയും ചെയ്യുന്നതിനാൽ, വികർണ്ണങ്ങൾ മാത്രം അറിഞ്ഞാൽ നാല് മൂലകളും ഞൊടിയിടയിൽ കണ്ടെത്താം.</p>`,
    needs: ['m8.6.1.quad-uniqueness', 'm8.2.4.isosceles-triangles', 'm8.2.6.triangle-applications'],
    traps_en: [
      'When constructing a rhombus from diagonals d₁ and d₂, mark d₂/2 (HALF the diagonal) from the center on each side, not the full length!',
      'In a rhombus, diagonals are NOT necessarily equal (if they were, it would be a square!).'
    ],
    traps_ml: [
      'വികർണ്ണങ്ങൾ ഉപയോഗിച്ച് റോംബസ് നിർമ്മിക്കുമ്പോൾ മധ്യബിന്ദുവിൽ നിന്ന് ഇരുവശത്തേക്കും അടയാളപ്പെടുത്തേണ്ടത് വികർണ്ണത്തിന്റെ പകുതിയാണ് (d₂/2), മുഴുവൻ നീളമല്ല!',
      'റോംബസിന്റെ വികർണ്ണങ്ങൾ തുല്യമാകണമെന്നില്ല (തുല്യമായാൽ അത് സമചതുരമാകും!).'
    ],
    cards_en: [
      { q: 'How many independent measurements are needed to construct a square?', a: 'Only 1 measurement (side length or diagonal).', kind: 'state' },
      { q: 'How many measurements are needed to construct a rhombus using its diagonals?', a: '2 measurements (the lengths of the two diagonals).', kind: 'state' },
      { q: 'What special property of rhombus diagonals enables construction from diagonals alone?', a: 'They bisect each other at right angles (90°).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു സമചതുരം നിർമ്മിക്കാൻ എത്ര സ്വതന്ത്ര അളവുകൾ ആവശ്യമാണ്?', a: '1 അളവ് മാത്രം (വശത്തിന്റെ നീളം അല്ലെങ്കിൽ വികർണ്ണം).', kind: 'state' },
      { q: 'വികർണ്ണങ്ങൾ ഉപയോഗിച്ച് ഒരു റോംബസ് നിർമ്മിക്കാൻ എത്ര അളവുകൾ വേണം?', a: '2 അളവുകൾ (രണ്ട് വികർണ്ണങ്ങളുടെ നീളങ്ങൾ).', kind: 'state' },
      { q: 'വികർണ്ണങ്ങൾ മാത്രം ഉപയോഗിച്ച് റോംബസ് നിർമ്മിക്കാൻ സഹായിക്കുന്ന പ്രധാന സവിശേഷത എന്താണ്?', a: 'വികർണ്ണങ്ങൾ പരസ്പരം ലംബമായി സമഭാഗം ചെയ്യുന്നു (90°).', kind: 'recall' }
    ]
  }
);
