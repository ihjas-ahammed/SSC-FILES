/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 2: Equal Triangles (തുല്യത്രികോണങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.2.1.sss-congruence',
    sec: '8.2.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Three Sides Equal (SSS Congruence)',
    title_ml: 'മൂന്ന് വശങ്ങൾ തുല്യമായ ത്രികോണങ്ങൾ ($SSS$ തുല്യത)',
    oneLine_en: 'If the lengths of the sides of two triangles are the same, then their angles are also the same. Angles opposite to equal sides are equal.',
    oneLine_ml: 'ഒരു ത്രികോണത്തിന്റെ വശങ്ങളുടെ നീളങ്ങൾ മറ്റൊരു ത്രികോണത്തിന്റെ വശങ്ങളുടെ നീളങ്ങൾക്ക് തുല്യമാണെങ്കിൽ, അവയുടെ കോണുകളും തുല്യമായിരിക്കും. തുല്യമായ വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ തുല്യമാണ്.',
    statement_en: `<p><b>Theorem (SSS Equality):</b> If the lengths of the three sides of a triangle are equal to the lengths of the three sides of another triangle, then the angles of the two triangles are also equal.</p>
      <p><b>Crucial Rule of Pairing:</b> The angles opposite to the equal sides in both triangles are equal.</p>
      $$\\begin{aligned}
      AB = PQ &\\implies \\angle C = \\angle R \\\\
      BC = QR &\\implies \\angle A = \\angle P \\\\
      AC = PR &\\implies \\angle B = \\angle Q
      \\end{aligned}$$`,
    statement_ml: `<p><b>സിദ്ധാന്തം ($SSS$ തുല്യത):</b> ഒരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളുടെ നീളങ്ങൾ മറ്റൊരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളുടെ നീളങ്ങൾക്ക് തുല്യമാണെങ്കിൽ, ആ രണ്ട് ത്രികോണങ്ങളിലെയും കോണുകൾ തുല്യമായിരിക്കും.</p>
      <p><b>കോണുകൾ തുല്യമാകുന്ന ക്രമം:</b> തുല്യമായ വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകളാണ് പരസ്പരം തുല്യമാകുന്നത്.</p>
      $$\\begin{aligned}
      AB = PQ &\\implies \\angle C = \\angle R \\\\
      BC = QR &\\implies \\angle A = \\angle P \\\\
      AC = PR &\\implies \\angle B = \\angle Q
      \\end{aligned}$$`,
    intuition_en: `<p>Imagine cutting out a triangle of sides $3\\text{ cm}, 4\\text{ cm}, 6\\text{ cm}$ from paper. No matter how you rotate, flip, or shift it, the shape and the internal angles are completely locked and cannot change.</p>
      <p><b>Worked micro-example:</b> In $\\triangle ABC$, $AB = 6\\text{ cm}, BC = 4\\text{ cm}, AC = 5\\text{ cm}$. In $\\triangle PQR$, $PQ = 4\\text{ cm}, QR = 5\\text{ cm}, PR = 6\\text{ cm}$. Which angle equals $\\angle C$? $\\angle C$ is opposite side $AB$ ($6\\text{ cm}$). In $\\triangle PQR$, side $PR$ is $6\\text{ cm}$, and the angle opposite $PR$ is $\\angle Q$. Therefore, $\\angle C = \\angle Q$.</p>`,
    intuition_ml: `<p>$3\\text{ cm}, 4\\text{ cm}, 6\\text{ cm}$ വശങ്ങളുള്ള ഒരു ത്രികോണം കടലാസിൽ വെട്ടി മാറ്റി തിരിച്ചോ മറിച്ചോ വെച്ചാലും അതിന്റെ രൂപത്തിനോ കോണുകൾക്കോ മാറ്റം വരുന്നില്ല.</p>
      <p><b>ഉദാഹരണം:</b> $\\triangle ABC$-യിൽ $AB = 6\\text{ cm}, BC = 4\\text{ cm}, AC = 5\\text{ cm}$. $\\triangle PQR$-ൽ $PQ = 4\\text{ cm}, QR = 5\\text{ cm}, PR = 6\\text{ cm}$. ഇതിൽ $\\angle C$-ക്ക് തുല്യമായ കോൺ ഏതാണ്? $\\angle C$ എന്നത് $6\\text{ cm}$ നീളമുള്ള $AB$-ക്ക് എതിരെയുള്ള കോണാണ്. $\\triangle PQR$-ൽ $6\\text{ cm}$ ഉള്ള വശം $PR$ ആണ്, അതിനെതിരെയുള്ള കോൺ $\\angle Q$ ആണ്. അതിനാൽ $\\angle C = \\angle Q$.</p>`,
    proof_en: `<p><b>Proof Strategy:</b> Show that when three side lengths are fixed, only one unique triangle can be constructed.</p>
      <p><b>Step 1:</b> Fix the base $BC = QR = a$. The third vertex $A$ must lie on a circle with center $B$ and radius $c = AB$, and also on a circle with center $C$ and radius $b = AC$.</p>
      <p><b>Step 2:</b> Two circles intersect in at most two points (one above the base, one below), which are reflections of each other across $BC$.</p>
      <p><b>Step 3:</b> Therefore, the triangle formed is unique up to reflection and rigid motion. Hence all corresponding angles must be equal.</p>`,
    proof_ml: `<p><b>തെളിയിക്കുന്ന രീതി:</b> മൂന്ന് വശങ്ങളുടെ നീളം നിശ്ചയിച്ചാൽ ഒരേയൊരു ത്രികോണം മാത്രമേ വരയ്ക്കാൻ കഴിയൂ എന്ന് സമർത്ഥിക്കുക.</p>
      <p><b>ഘട്ടം 1:</b> പാദം $BC = QR = a$ ആയി വരയ്ക്കുക. മൂന്നാമത്തെ മൂലയായ $A$ വരുന്നത്, $B$ കേന്ദ്രമായി $AB$ ആരമുള്ള വൃത്തത്തിലും, $C$ കേന്ദ്രമായി $AC$ ആരമുള്ള വൃത്തത്തിലുമാണ്.</p>
      <p><b>ഘട്ടം 2:</b> രണ്ട് വൃത്തങ്ങൾ പരമാവധി രണ്ട് ബിന്ദുക്കളിൽ മാത്രമേ മുട്ടിപ്പോകൂ. ഈ രണ്ട് ബിന്ദുക്കൾ പാദത്തിന് മുകളിലും താഴെയുമുള്ള പ്രതിഫലനങ്ങൾ മാത്രമാണ്.</p>
      <p><b>ഘട്ടം 3:</b> അതിനാൽ ഉണ്ടാകുന്ന ത്രികോണം സ്ഥാനവ്യത്യാസമല്ലാതെ മറ്റൊന്നുമല്ല. അതിനാൽ എല്ലാ അനുയോജ്യ കോണുകളും തുല്യമായിരിക്കും.</p>`,
    needs: ['s.counting', 's.area-rectangle', 's.algebraic-terms'],
    figs: ['fig.tri-sss'],
    traps_en: [
      'Equating angles by position (e.g. bottom-left = bottom-left) instead of matching the opposite equal side.',
      'Assuming triangles are equal just because their angles are equal (AAA gives similar, not equal triangles).'
    ],
    traps_ml: [
      'വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ നോക്കാതെ, ചിത്രത്തിലെ സ്ഥാനത്തിന്റെ ക്രമത്തിൽ മാത്രം കോണുകൾ തുല്യമാണെന്ന് കരുതരുത്.',
      'മൂന്ന് കോണുകൾ തുല്യമായതുകൊണ്ട് മാത്രം ത്രികോണങ്ങൾ തുല്യമാകില്ല (അവ സദൃശ്യ ത്രികോണങ്ങൾ മാത്രമായിരിക്കും).'
    ],
    cards_en: [
      { q: 'State the SSS equality property of triangles.', a: 'If the three sides of a triangle are equal to the three sides of another triangle, their angles are also equal.', kind: 'state' },
      { q: 'In equal triangles, which angles are equal to each other?', a: 'Angles opposite to the equal sides.', kind: 'apply' },
      { q: 'If all three angles of two triangles are equal, are the triangles necessarily equal?', a: 'No, their sides could be different sizes (they are similar, not congruent).', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ത്രികോണങ്ങളുടെ SSS തുല്യതാ തത്വം പ്രസ്താവിക്കുക.', a: 'ഒരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങൾ മറ്റൊരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങൾക്ക് തുല്യമാണെങ്കിൽ അവയുടെ കോണുകളും തുല്യമായിരിക്കും.', kind: 'state' },
      { q: 'തുല്യ ത്രികോണങ്ങളിൽ പരസ്പരം തുല്യമാകുന്ന കോണുകൾ ഏവ?', a: 'തുല്യമായ വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ.', kind: 'apply' },
      { q: 'രണ്ട് ത്രികോണങ്ങളിലെ മൂന്ന് കോണുകളും തുല്യമായാൽ അവ തുല്യ ത്രികോണങ്ങളാകുമോ?', a: 'ആകണമെന്നില്ല, വശങ്ങളുടെ വലിപ്പം വ്യത്യസ്തമാകാം (അവ സദൃശ്യ ത്രികോണങ്ങൾ മാത്രമാണ്).', kind: 'trap' }
    ]
  },

  {
    id: 'm8.2.1.rigidity',
    sec: '8.2.1',
    kind: 'property',
    tier: 'core',
    title_en: 'Rigidity of Triangles',
    title_ml: 'ത്രികോണ ദാർഢ്യം',
    oneLine_en: 'A triangular frame cannot change its shape without changing its side lengths, unlike a four-sided frame.',
    oneLine_ml: 'നാല് വശങ്ങളുള്ള ചട്ടക്കൂട് പോലെ വശങ്ങളുടെ നീളം മാറ്റാതെ ത്രികോണ ചട്ടക്കൂടിന്റെ ആകൃതി മാറ്റാൻ കഴിയില്ല.',
    statement_en: `<p>A quadrilateral frame made of rods can easily be bent into different shapes without changing the lengths of the rods, because its angles can change.</p>
      <p>In contrast, a <b>triangular frame is rigid</b>: once the three side lengths are fixed, the angles cannot change at all. For this reason, triangular structures are used in roof trusses, bridges, and construction cranes to provide strength and stability.</p>`,
    statement_ml: `<p>ഈർക്കിൽക്കഷണങ്ങൾ കൊണ്ടോ കമ്പികൾ കൊണ്ടോ ഉണ്ടാക്കിയ ഒരു ചതുർഭുജ ചട്ടക്കൂടിന്റെ കോണുകൾ വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ മാറ്റാൻ കഴിയും (അതിന്റെ രൂപം ചായുന്നു).</p>
      <p>എന്നാൽ <b>ത്രികോണ ചട്ടക്കൂട് ദൃഢമാണ്</b>: മൂന്ന് വശങ്ങളുടെ നീളം നിശ്ചയിച്ചുകഴിഞ്ഞാൽ അതിന്റെ കോണുകൾ മാറ്റാൻ സാധ്യമല്ല. അതുകൊണ്ടാണ് വീടുകളുടെ മേൽക്കൂരകൾ, പാലങ്ങൾ, ക്രെയിനുകൾ എന്നിവയിൽ ത്രികോണാകൃതിയിലുള്ള നിർമ്മിതികൾ ഉപയോഗിക്കുന്നത്.</p>`,
    intuition_en: `<p>Try joining four sticks with pins: it sways and deforms easily. Add a diagonal stick to form two triangles, and the structure immediately freezes and becomes completely rigid.</p>`,
    intuition_ml: `<p>നാല് ഈർക്കിൽക്കഷണങ്ങൾ കോർത്തുണ്ടാക്കിയ ചതുരം വേഗത്തിൽ ചരിഞ്ഞുപോകുന്നു. എന്നാൽ അതിലൊരു കോണോടു കോൺ വരയ്ക്കുന്നതുപോലെ ഒരു കഷ്ണം കൂടി വെച്ച് രണ്ട് ത്രികോണങ്ങളാക്കിയാൽ അത് ഒട്ടും ചലിക്കാതെ ദൃഢമാകുന്നു.</p>`,
    needs: ['m8.2.1.sss-congruence'],
    figs: ['fig.tri-rigidity'],
    traps_en: [
      'Believing a four-sided polygon has fixed angles once its four side lengths are given.'
    ],
    traps_ml: [
      'നാല് വശങ്ങളുടെ നീളം തന്നാൽ ചതുർഭുജത്തിന്റെ കോണുകൾ നിശ്ചയിക്കപ്പെടും എന്ന് തെറ്റിദ്ധരിക്കരുത്.'
    ],
    cards_en: [
      { q: 'Why are triangular shapes used in roof trusses and bridges?', a: 'Because a triangle is rigid; its angles cannot change without changing its side lengths.', kind: 'state' },
      { q: 'Can the angles of a quadrilateral change without changing its side lengths?', a: 'Yes, four-sided frames can tilt and change angles freely.', kind: 'apply' },
      { q: 'Is a four-sided polygon (quadrilateral) rigid like a triangle?', a: 'No, only triangles are rigid; quadrilaterals can flex unless braced with a diagonal.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'മേൽക്കൂരകളിലും പാലങ്ങളിലും ത്രികോണ രൂപങ്ങൾ ഉപയോഗിക്കുന്നത് എന്തുകൊണ്ട്?', a: 'ത്രികോണം ദൃഢമാണ്; വശങ്ങളുടെ നീളം മാറ്റാതെ അതിന്റെ കോണുകൾ മാറ്റാൻ കഴിയില്ല.', kind: 'state' },
      { q: 'വശങ്ങളുടെ നീളം മാറ്റാതെ ചതുർഭുജത്തിന്റെ കോണുകൾ മാറ്റാൻ കഴിയുമോ?', a: 'കഴിയും, ചതുർഭുജങ്ങൾ വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ ചരിഞ്ഞ് രൂപം മാറാം.', kind: 'apply' },
      { q: 'ത്രികോണത്തെപ്പോലെ നാല് വശങ്ങളുള്ള ചതുർഭുജവും ദൃഢമാണോ?', a: 'അല്ല, ത്രികോണങ്ങൾ മാത്രമേ ദൃഢമായിരിക്കൂ; വികർണ്ണം വരച്ച് ഉറപ്പിച്ചില്ലെങ്കിൽ ചതുർഭുജങ്ങൾക്ക് ആകൃതി മാറ്റാൻ കഴിയും.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.2.2.asa-congruence',
    sec: '8.2.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'One Side and Two Angles (ASA / AAS Congruence)',
    title_ml: 'ഒരു വശവും രണ്ട് കോണുകളും ($ASA$ തുല്യത)',
    oneLine_en: 'If one side of a triangle and the angles at its ends are equal to one side and the angles at its ends of another triangle, then the third angle and other two sides are also equal.',
    oneLine_ml: 'ഒരു ത്രികോണത്തിലെ ഒരു വശവും അതിന്റെ രണ്ടറ്റത്തുമുള്ള കോണുകളും മറ്റൊരു ത്രികോണത്തിലെ ഒരു വശത്തിനും അതിന്റെ രണ്ടറ്റത്തുമുള്ള കോണുകൾക്കും തുല്യമാണെങ്കിൽ, അവയുടെ മൂന്നാമത്തെ കോണും മറ്റു രണ്ട് വശങ്ങളും തുല്യമായിരിക്കും.',
    statement_en: `<p><b>Theorem (ASA Equality):</b> If one side of a triangle and the two angles at its ends are equal to one side of another triangle and the two angles at its ends, then the third angle is also equal and the other two sides are also equal.</p>
      <p><b>Side Pairing Rule:</b> Sides opposite to equal angles in both triangles are equal:</p>
      $$\\begin{aligned}
      \\angle B = \\angle Q, \\quad \\angle C = \\angle R, \\quad BC = QR \\implies \\\\
      \\angle A = \\angle P, \\quad AB = PQ, \\quad AC = PR
      \\end{aligned}$$
      <p><i>Note:</i> Since the sum of angles in any triangle is $180^\\circ$, knowing two angles immediately fixes the third angle: $\\angle A = 180^\\circ - (\\angle B + \\angle C)$.</p>`,
    statement_ml: `<p><b>സിദ്ധാന്തം ($ASA$ തുല്യത):</b> ഒരു ത്രികോണത്തിലെ ഒരു വശവും അതിന്റെ രണ്ടറ്റത്തുമുള്ള കോണുകളും മറ്റൊരു ത്രികോണത്തിലെ ഒരു വശത്തിനും അതിന്റെ രണ്ടറ്റത്തുമുള്ള കോണുകൾക്കും തുല്യമാണെങ്കിൽ, മൂന്നാമത്തെ കോണും തുല്യമായിരിക്കും, മറ്റു രണ്ട് വശങ്ങളും തുല്യമായിരിക്കും.</p>
      <p><b>വശങ്ങൾ തുല്യമാകുന്ന ക്രമം:</b> തുല്യമായ കോണുകൾക്ക് എതിരെയുള്ള വശങ്ങളാണ് പരസ്പരം തുല്യമാകുന്നത്:</p>
      $$\\begin{aligned}
      \\angle B = \\angle Q, \\quad \\angle C = \\angle R, \\quad BC = QR \\implies \\\\
      \\angle A = \\angle P, \\quad AB = PQ, \\quad AC = PR
      \\end{aligned}$$
      <p><i>പ്രത്യേകത:</i> ഒരു ത്രികോണത്തിലെ കോണുകളുടെ തുക $180^\\circ$ ആയതിനാൽ രണ്ട് കോണുകൾ അറിഞ്ഞാൽ മൂന്നാമത്തെ കോൺ തനിയെ നിശ്ചയിക്കപ്പെടുന്നു: $\\angle A = 180^\\circ - (\\angle B + \\angle C)$.</p>`,
    intuition_en: `<p>Draw a segment of $6\\text{ cm}$. At the ends, draw rays at angles of $50^\\circ$ and $70^\\circ$. These rays can intersect at only one single point in the plane, fixing the triangle completely.</p>
      <p><b>Worked micro-example:</b> In $\\triangle ABC$, $BC = 5\\text{ cm}, \\angle B = 40^\\circ, \\angle C = 60^\\circ$. Then $\\angle A = 180^\\circ - (40^\\circ + 60^\\circ) = 80^\\circ$. Any triangle with a $5\\text{ cm}$ side and angles $40^\\circ, 60^\\circ$ at its ends will have all its sides and angles identical to $\\triangle ABC$.</p>`,
    intuition_ml: `<p>$6\\text{ cm}$ നീളത്തിൽ ഒരു വര വരയ്ക്കുക. അതിന്റെ രണ്ടറ്റത്തും $50^\\circ, 70^\\circ$ കോണുകളിൽ വരകൾ നീട്ടിയാൽ അവയ്ക്ക് ഒരു ബിന്ദുവിൽ മാത്രമേ സന്ധിക്കാൻ കഴിയൂ. അങ്ങനെ ത്രികോണം പൂർണ്ണമായി നിർണ്ണയിക്കപ്പെടുന്നു.</p>
      <p><b>ഉദാഹരണം:</b> $\\triangle ABC$-യിൽ $BC = 5\\text{ cm}, \\angle B = 40^\\circ, \\angle C = 60^\\circ$ ആയാൽ $\\angle A = 180^\\circ - (40^\\circ + 60^\\circ) = 80^\\circ$ ആയിരിക്കും. $5\\text{ cm}$ വശവും രണ്ടറ്റത്തും $40^\\circ, 60^\\circ$ കോണുകളുമുള്ള മറ്റൊരു ത്രികോണത്തിന്റെ എല്ലാ വശങ്ങളും കോണുകളും $\\triangle ABC$-ക്ക് തുല്യമായിരിക്കും.</p>`,
    needs: ['m8.2.1.sss-congruence', 's.addition', 's.subtraction'],
    figs: ['fig.tri-asa'],
    traps_en: [
      'Comparing sides without ensuring they are opposite to equal angles.',
      'Forgetting to calculate the third angle when the given equal side is not between the two known angles.'
    ],
    traps_ml: [
      'തുല്യ കോണുകൾക്ക് എതിരെയുള്ള വശങ്ങൾ ഒത്തുനോക്കാതെ വശങ്ങൾ തുല്യമാണെന്ന് തെറ്റായി എടുക്കുന്നത്.',
      'തന്നിരിക്കുന്ന വശം രണ്ട് കോണുകൾക്കിടയിലല്ലെങ്കിൽ മൂന്നാമത്തെ കോൺ കണ്ടുപിടിക്കാൻ മറന്നുപോകുന്നത്.'
    ],
    cards_en: [
      { q: 'State the ASA equality rule.', a: 'If one side and the two angles at its ends are equal to one side and the two angles at its ends of another triangle, all corresponding sides and angles are equal.', kind: 'state' },
      { q: 'If two angles of a triangle are 50° and 60°, what is the third angle?', a: '70°, because 180° - (50° + 60°) = 70°.', kind: 'apply' },
      { q: 'If two angles and any non-corresponding side are equal, are the triangles congruent?', a: 'No, the side must correspond between the equal angles or have matching angle placement.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ASA തുല്യതാ നിയമം പ്രസ്താവിക്കുക.', a: 'ഒരു ത്രികോണത്തിലെ ഒരു വശവും രണ്ടറ്റത്തെ കോണുകളും മറ്റൊരു ത്രികോണത്തിലെ ഒരു വശത്തിനും രണ്ടറ്റത്തെ കോണുകൾക്കും തുല്യമാണെങ്കിൽ ആ ത്രികോണങ്ങൾ തുല്യമാണ്.', kind: 'state' },
      { q: 'ഒരു ത്രികോണത്തിലെ രണ്ട് കോണുകൾ 50°-യും 60°-യും ആയാൽ മൂന്നാമത്തെ കോൺ എത്ര?', a: '70°, കാരണം 180° - (50° + 60°) = 70°.', kind: 'apply' },
      { q: 'രണ്ട് കോണുകളും തുല്യ കോണുകൾക്ക് അനുയോജ്യമല്ലാത്ത ഒരു വശവും തുല്യമായാൽ ത്രികോണങ്ങൾ തുല്യമാകുമോ?', a: 'ഇല്ല, വശങ്ങൾ തുല്യ കോണുകൾക്ക് എതിരെയുള്ളതോ അനുയോജ്യമായതോ ആയിരിക്കണം.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.2.3.sas-congruence',
    sec: '8.2.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Two Sides and Included Angle (SAS Congruence)',
    title_ml: 'രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും ($SAS$ തുല്യത)',
    oneLine_en: 'If two sides of a triangle and the angle between them are equal to two sides and the angle between them of another triangle, the triangles are equal.',
    oneLine_ml: 'ഒരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും മറ്റൊരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങൾക്കും അവയ്ക്കിടയിലെ കോണിനും തുല്യമാണെങ്കിൽ ആ ത്രികോണങ്ങൾ തുല്യമാണ്.',
    statement_en: `<p><b>Theorem (SAS Equality):</b> If two sides of a triangle and the angle between them are equal to two sides of another triangle and the angle between them, then their third sides are also equal and the other two angles are also equal.</p>
      $$\\begin{aligned}
      AB = PQ, \\quad AC = PR, \\quad \\angle A = \\angle P \\implies \\\\
      BC = QR, \\quad \\angle B = \\angle Q, \\quad \\angle C = \\angle R
      \\end{aligned}$$
      <p><b>Important Condition:</b> The equal angle <i>must be the angle between</i> the two equal sides (included angle).</p>`,
    statement_ml: `<p><b>സിദ്ധാന്തം ($SAS$ തുല്യത):</b> ഒരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും മറ്റൊരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങൾക്കും അവയ്ക്കിടയിലെ കോണിനും തുല്യമാണെങ്കിൽ, അവയുടെ മൂന്നാമത്തെ വശങ്ങളും മറ്റു രണ്ട് കോണുകളും തുല്യമായിരിക്കും.</p>
      $$\\begin{aligned}
      AB = PQ, \\quad AC = PR, \\quad \\angle A = \\angle P \\implies \\\\
      BC = QR, \\quad \\angle B = \\angle Q, \\quad \\angle C = \\angle R
      \\end{aligned}$$
      <p><b>പ്രധാന നിബന്ധന:</b> കോൺ ആ രണ്ട് വശങ്ങൾക്കും <i>ഇടയിലുള്ളതായിരിക്കണം</i> (ഉൾക്കൊള്ളുന്ന കോൺ).</p>`,
    intuition_en: `<p>If you take two sticks of lengths $4\\text{ cm}$ and $5\\text{ cm}$ and hinge them at an angle of $50^\\circ$, the distance between their other two endpoints is completely fixed. You can only close the triangle in one specific way.</p>`,
    intuition_ml: `<p>$4\\text{ cm}, 5\\text{ cm}$ നീളമുള്ള രണ്ട് ഈർക്കിൽക്കഷണങ്ങൾ എടുത്ത് അവയ്ക്കിടയിലെ കോൺ $50^\\circ$ ആയി വെച്ചാൽ അവയുടെ മറ്റേ അറ്റങ്ങൾ തമ്മിലുള്ള അകലം സ്ഥിരമായിരിക്കും. മൂന്നാമത്തെ വശം ഒരേയൊരു നീളത്തിൽ മാത്രമേ വരയ്ക്കാനാവൂ.</p>`,
    needs: ['m8.2.1.sss-congruence'],
    figs: ['fig.tri-sas'],
    traps_en: [
      'Applying SAS when the angle is NOT between the two given sides (SSA is not a valid congruence condition).'
    ],
    traps_ml: [
      'തന്നിരിക്കുന്ന കോൺ രണ്ട് വശങ്ങൾക്ക് ഇടയിലല്ലെങ്കിൽ SAS തുല്യത ബാധകമല്ല (SSA തുല്യതാ നിയമമല്ല).'
    ],
    cards_en: [
      { q: 'State the SAS congruence theorem.', a: 'If two sides and the included angle of one triangle are equal to two sides and the included angle of another, the triangles are equal.', kind: 'state' },
      { q: 'Does two sides and any angle being equal guarantee equal triangles?', a: 'No, the angle must be strictly between the two equal sides.', kind: 'trap' },
      { q: 'In SAS congruence, what is the required position of the angle?', a: 'It must be the included angle directly between the two known equal sides.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'SAS തുല്യതാ സിദ്ധാന്തം പ്രസ്താവിക്കുക.', a: 'ഒരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും മറ്റൊരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങൾക്കും അവയ്ക്കിടയിലെ കോണിനും തുല്യമാണെങ്കിൽ ആ ത്രികോണങ്ങൾ തുല്യമാണ്.', kind: 'state' },
      { q: 'രണ്ട് വശങ്ങളും മറ്റേതെങ്കിലും ഒരു കോണും തുല്യമായാൽ ത്രികോണങ്ങൾ തുല്യമാകുമോ?', a: 'ഇല്ല, കോൺ ആ രണ്ട് വശങ്ങൾക്കിടയിൽ തന്നെ ആയിരിക്കണം.', kind: 'trap' },
      { q: 'SAS തുല്യതയിൽ തുല്യമായ കോണിന്റെ സ്ഥാനം എവിടെയായിരിക്കണം?', a: 'അത് രണ്ട് തുല്യവശങ്ങൾക്കും കൃത്യം ഇടയിലുള്ള കോൺ (ഉൾക്കൊള്ളുന്ന കോൺ) ആയിരിക്കണം.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.2.4.isosceles-triangles',
    sec: '8.2.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Isosceles Triangles & Perpendicular Bisectors',
    title_ml: 'സമപാർശ്വ ത്രികോണങ്ങളും ലംബസമഭാജിയും',
    oneLine_en: 'In a triangle with two sides equal, the angles opposite to these sides are equal, and the altitude to the base bisects both the base and the vertex angle.',
    oneLine_ml: 'രണ്ട് വശങ്ങൾ തുല്യമായ ത്രികോണത്തിൽ തുല്യവശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ തുല്യമായിരിക്കും. മുകളിലെ മൂലയിൽ നിന്നുള്ള ലംബം പാദത്തെയും മൂലയിലെ കോണിനെയും സമഭാഗം ചെയ്യുന്നു.',
    statement_en: `<p><b>Definition:</b> A triangle with two sides of equal length is called an <b>isosceles triangle</b>.</p>
      <p><b>Properties:</b></p>
      <ol>
        <li>In an isosceles triangle, the angles opposite to the equal sides are equal: $AB = AC \\implies \\angle B = \\angle C$.</li>
        <li><b>Converse:</b> If two angles of a triangle are equal, the sides opposite to them are equal: $\\angle B = \\angle C \\implies AB = AC$.</li>
        <li>The perpendicular line drawn from the vertex between the equal sides to the third side (base) bisects the base and bisects the vertex angle.</li>
      </ol>`,
    statement_ml: `<p><b>നിർവ്വചനം:</b> രണ്ട് വശങ്ങളുടെ നീളം തുല്യമായ ത്രികോണത്തെ <b>സമപാർശ്വ ത്രികോണം</b> എന്ന് വിളിക്കുന്നു.</p>
      <p><b>സവിശേഷതകൾ:</b></p>
      <ol>
        <li>സമപാർശ്വ ത്രികോണത്തിൽ തുല്യമായ വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ തുല്യമായിരിക്കും: $AB = AC \\implies \\angle B = \\angle C$.</li>
        <li><b>വിപരീതം:</b> ഒരു ത്രികോണത്തിലെ രണ്ട് കോണുകൾ തുല്യമാണെങ്കിൽ അവയ്ക്ക് എതിരെയുള്ള വശങ്ങളും തുല്യമായിരിക്കും: $\\angle B = \\angle C \\implies AB = AC$.</li>
        <li>തുല്യവശങ്ങൾ ചേരുന്ന മൂലയിൽ നിന്ന് എതിർവശത്തേക്ക് (പാദത്തിലേക്ക്) വരയ്ക്കുന്ന ലംബം പാദത്തെയും ആ മൂലയിലെ കോണിനെയും സമഭാഗം ചെയ്യുന്നു.</li>
      </ol>`,
    intuition_en: `<p>Fold an isosceles triangle paper along its line of symmetry from the top vertex to the base. The two halves match completely: the base angles coincide, and the base is split into two equal halves at right angles.</p>
      <p><b>Worked micro-example:</b> In $\\triangle ABC$, $AB = AC$ and vertex angle $\\angle A = 40^\\circ$. What are the base angles? The remaining angle sum is $180^\\circ - 40^\\circ = 140^\\circ$. Since $\\angle B = \\angle C$, each base angle is $\\frac{140^\\circ}{2} = 70^\\circ$.</p>`,
    intuition_ml: `<p>സമപാർശ്വ ത്രികോണാകൃതിയിലുള്ള കടലാസ് മുകളിലെ മൂലയിൽ നിന്ന് പാദത്തിന്റെ നടുവിലേക്ക് മടക്കിയാൽ രണ്ട് പകുതികളും കൃത്യമായി ഒത്തുചേരും: പാദത്തിലെ കോണുകൾ തുല്യമാകും, പാദം രണ്ട് തുല്യ ഭാഗങ്ങളായി വിഭജിക്കപ്പെടും.</p>
      <p><b>ഉദാഹരണം:</b> $\\triangle ABC$-യിൽ $AB = AC$ ഉം മുകളിലെ കോൺ $\\angle A = 40^\\circ$ ഉം ആണ്. പാദത്തിലെ കോണുകൾ എത്ര? ബാക്കി കോണുകളുടെ തുക $180^\\circ - 40^\\circ = 140^\\circ$. $\\angle B = \\angle C$ ആയതിനാൽ ഓരോ കോണും $\\frac{140^\\circ}{2} = 70^\\circ$ വീതമായിരിക്കും.</p>`,
    proof_en: `<p><b>Proof of Property 1 & 3:</b></p>
      <p><b>Step 1:</b> Let $M$ be the midpoint of base $BC$, so $BM = MC$. Join $AM$.</p>
      <p><b>Step 2:</b> Consider $\\triangle ABM$ and $\\triangle ACM$:
        <ul>
          <li>$AB = AC$ (given)</li>
          <li>$BM = MC$ ($M$ is midpoint)</li>
          <li>$AM = AM$ (common side)</li>
        </ul>
      </p>
      <p><b>Step 3:</b> By SSS equality, $\\triangle ABM = \\triangle ACM$.</p>
      <p><b>Step 4:</b> Therefore, $\\angle B = \\angle C$ (opposite to common side $AM$), and $\\angle BAM = \\angle CAM$ ($AM$ bisects $\\angle A$), and $\\angle AMB = \\angle AMC = 90^\\circ$ (linear pair of equal angles, so $AM \\perp BC$).</p>`,
    proof_ml: `<p><b>തെളിവ്:</b></p>
      <p><b>ഘട്ടം 1:</b> പാദം $BC$-യുടെ മധ്യബിന്ദു $M$ അടയാളപ്പെടുത്തുക ($BM = MC$). $A$-യിൽ നിന്ന് $M$-ലേക്ക് വരയ്ക്കുക.</p>
      <p><b>ഘട്ടം 2:</b> $\\triangle ABM, \\triangle ACM$ എന്നീ ത്രികോണങ്ങൾ പരിശോധിക്കുക:
        <ul>
          <li>$AB = AC$ (തന്നിരിക്കുന്നു)</li>
          <li>$BM = MC$ ($M$ മധ്യബിന്ദുവാണ്)</li>
          <li>$AM = AM$ (പൊതുവായ വശം)</li>
        </ul>
      </p>
      <p><b>ഘട്ടം 3:</b> SSS തത്വപ്രകാരം $\\triangle ABM, \\triangle ACM$ തുല്യ ത്രികോണങ്ങളാണ്.</p>
      <p><b>ഘട്ടം 4:</b> അതിനാൽ $\\angle B = \\angle C$, $\\angle BAM = \\angle CAM$ ($AM$ കോൺ $A$-യെ സമഭാഗം ചെയ്യുന്നു), കൂടാതെ $\\angle AMB = \\angle AMC = 90^\\circ$ (രേഖീയ ജോഡികൾ തുല്യമായതിനാൽ $AM \\perp BC$).</p>`,
    needs: ['m8.2.1.sss-congruence', 's.addition', 's.subtraction'],
    figs: ['fig.tri-isosceles'],
    traps_en: [
      'Assuming the bisector of any angle in any scalene triangle is perpendicular to the opposite side (this is only true from the vertex of an isosceles or equilateral triangle).'
    ],
    traps_ml: [
      'ഏതൊരു ത്രികോണത്തിലും മൂലയിലെ കോണിന്റെ സമഭാജി എതിർവശത്തിന് ലംബമായിരിക്കും എന്ന് കരുതരുത് (ഇത് സമപാർശ്വ, സമഭുജ ത്രികോണങ്ങളിൽ മാത്രമേ ശരിയാകൂ).'
    ],
    cards_en: [
      { q: 'In an isosceles triangle, if the vertex angle is 50°, what are the base angles?', a: '65° each ((180° - 50°) / 2 = 65°).', kind: 'apply' },
      { q: 'What is special about the line from the apex to the midpoint of the base in an isosceles triangle?', a: 'It is perpendicular to the base and bisects the vertex angle.', kind: 'state' },
      { q: 'In an isosceles triangle with AB = AC, which two angles are strictly equal?', a: '$\\angle B$ and $\\angle C$ (the angles opposite to sides AC and AB).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു സമപാർശ്വ ത്രികോണത്തിലെ മുകളിലെ കോൺ 50° ആയാൽ പാദത്തിലെ കോണുകൾ എത്ര വീതമാണ്?', a: '65° വീതം ((180° - 50°) / 2 = 65°).', kind: 'apply' },
      { q: 'സമപാർശ്വ ത്രികോണത്തിൽ തുല്യവശങ്ങൾക്കിടയിലെ മൂലയിൽ നിന്ന് പാദത്തിന്റെ മധ്യബിന്ദുവിലേക്ക് വരയ്ക്കുന്ന വരയുടെ പ്രത്യേകത എന്താണ്?', a: 'അത് പാദത്തിന് ലംബമായിരിക്കും, മുകളിലെ കോണിനെ സമഭാഗം ചെയ്യുകയും ചെയ്യും.', kind: 'state' },
      { q: 'AB = AC ആയ സമപാർശ്വ ത്രികോണത്തിൽ തുല്യമാകുന്ന രണ്ട് കോണുകൾ ഏവ?', a: '$\\angle B$-യും $\\angle C$-യും ($AC, AB$ എന്നീ വശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ).', kind: 'recall' }
    ]
  },

  {
    id: 'm8.2.5.equilateral-triangles',
    sec: '8.2.5',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Equilateral Triangles (60° Angles)',
    title_ml: 'സമഭുജ ത്രികോണങ്ങൾ (60° കോണുകൾ)',
    oneLine_en: 'In an equilateral triangle, all three sides are equal and each angle is 60°. Conversely, if all angles are equal, all sides are equal.',
    oneLine_ml: 'സമഭുജ ത്രികോണത്തിൽ മൂന്ന് വശങ്ങളും തുല്യമായിരിക്കും, ഓരോ കോണും 60° ആയിരിക്കും. മറിച്ച്, മൂന്ന് കോണുകളും തുല്യമായാൽ മൂന്ന് വശങ്ങളും തുല്യമായിരിക്കും.',
    statement_en: `<p><b>Definition:</b> A triangle having all three sides of equal length is called an <b>equilateral triangle</b>.</p>
      <p><b>Properties:</b></p>
      <ul>
        <li>Every equilateral triangle is equiangular, with each interior angle measuring exactly:
          $$\\frac{180^\\circ}{3} = 60^\\circ$$
        </li>
        <li><b>Converse:</b> If all three angles of a triangle are equal (each $60^\\circ$), then all three sides are equal in length.</li>
        <li>Every altitude is also a median, angle bisector, and perpendicular bisector of the opposite side.</li>
      </ul>`,
    statement_ml: `<p><b>നിർവ്വചനം:</b> മൂന്ന് വശങ്ങളുടെ നീളവും തുല്യമായ ത്രികോണത്തെ <b>സമഭുജ ത്രികോണം</b> എന്ന് വിളിക്കുന്നു.</p>
      <p><b>സവിശേഷതകൾ:</b></p>
      <ul>
        <li>സമഭുജ ത്രികോണത്തിലെ എല്ലാ കോണുകളും തുല്യമായിരിക്കും. ഓരോ കോണിന്റെയും അളവ് കൃത്യം $60^\\circ$ ആണ്:
          $$\\frac{180^\\circ}{3} = 60^\\circ$$
        </li>
        <li><b>വിപരീതം:</b> ഒരു ത്രികോണത്തിലെ മൂന്ന് കോണുകളും തുല്യമായാൽ (ഓരോന്നും $60^\\circ$), അതിന്റെ മൂന്ന് വശങ്ങളും തുല്യമായിരിക്കും.</li>
        <li>ഓരോ മൂലയിൽ നിന്നുമുള്ള ലംബവും എതിർവശത്തിന്റെ മധ്യലംബവും കോണിന്റെ സമഭാജിയും ആയിരിക്കും.</li>
      </ul>`,
    intuition_en: `<p>An equilateral triangle has 3-fold rotational and reflectional symmetry. Since all three sides are identical, no angle can be larger or smaller than any other; dividing the total $180^\\circ$ equally gives three $60^\\circ$ angles.</p>`,
    intuition_ml: `<p>സമഭുജ ത്രികോണത്തിന് മൂന്ന് വശങ്ങളും ഒരുപോലെയായതിനാൽ ഒരു കോണും മറ്റൊന്നിനേക്കാൾ വലുതോ ചെറുതോ ആകാൻ കഴിയില്ല; ആകെ തുകയായ $180^\\circ$-നെ മൂന്നായി തുല്യമായി ഭാഗിച്ചാൽ ഓരോ കോണും $60^\\circ$ ലഭിക്കുന്നു.</p>`,
    needs: ['m8.2.4.isosceles-triangles'],
    figs: ['fig.tri-equilateral'],
    traps_en: [
      'Assuming that an equilateral triangle of side 4 cm has different angles from an equilateral triangle of side 10 cm (all equilateral triangles have 60° angles regardless of side length).'
    ],
    traps_ml: [
      'വശത്തിന്റെ നീളം കൂടുമ്പോൾ സമഭുജ ത്രികോണത്തിന്റെ കോണുകളുടെ അളവ് കൂടും എന്ന് തെറ്റിദ്ധരിക്കരുത് (എല്ലാ സമഭുജ ത്രികോണങ്ങളിലെയും കോണുകൾ എപ്പോഴും 60° ആയിരിക്കും).'
    ],
    cards_en: [
      { q: 'What is the measure of each angle in an equilateral triangle?', a: '60° (180° / 3 = 60°).', kind: 'state' },
      { q: 'If a triangle has three equal angles, what kind of triangle is it?', a: 'An equilateral triangle.', kind: 'apply' },
      { q: 'Do equilateral triangles of different sizes have different angles?', a: 'No, every equilateral triangle has angles measuring exactly 60°, regardless of size.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ഒരു സമഭുജ ത്രികോണത്തിലെ ഓരോ കോണിന്റെയും അളവ് എത്രയാണ്?', a: '60° (180° / 3 = 60°).', kind: 'state' },
      { q: 'മൂന്ന് കോണുകളും തുല്യമായ ഒരു ത്രികോണം ഏത് തരത്തിലുള്ളതാണ്?', a: 'സമഭുജ ത്രികോണം.', kind: 'apply' },
      { q: 'വ്യത്യസ്ത വലിപ്പമുള്ള സമഭുജ ത്രികോണങ്ങളിലെ കോണുകൾ വ്യത്യസ്തമായിരിക്കുമോ?', a: 'അല്ല, വശങ്ങളുടെ നീളം എത്രയായാലും എല്ലാ സമഭുജ ത്രികോണങ്ങളിലെയും ഓരോ കോണും കൃത്യം 60° ആയിരിക്കും.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.2.6.triangle-applications',
    sec: '8.2.6',
    kind: 'technique',
    tier: 'core',
    title_en: 'Geometric Applications & Parallelograms',
    title_ml: 'ജ്യാമിതീയ പ്രയോഗങ്ങളും സാമാന്തരികങ്ങളും',
    oneLine_en: 'Dividing quadrilaterals by diagonals creates equal triangles, proving opposite sides and angles of a parallelogram are equal.',
    oneLine_ml: 'ചതുർഭുജങ്ങളിൽ വികർണ്ണം വരയ്ക്കുമ്പോൾ ഉണ്ടാകുന്ന തുല്യത്രികോണങ്ങൾ ഉപയോഗിച്ച് സാമാന്തരികത്തിന്റെ എതിർവശങ്ങളും എതിർകോണുകളും തുല്യമാണെന്ന് തെളിയിക്കാം.',
    statement_en: `<p><b>Key Application:</b> By drawing a diagonal in a parallelogram or quadrilateral, we split it into two triangles. Using equal triangle theorems (SAS, ASA, SSS):</p>
      <ol>
        <li><b>Parallelogram Sides & Angles:</b> A diagonal divides a parallelogram into two equal triangles. Hence:
          $$\\text{Opposite sides are equal: } AB = CD, \\quad AD = BC$$
          $$\\text{Opposite angles are equal: } \\angle A = \\angle C, \\quad \\angle B = \\angle D$$
        </li>
        <li><b>Diagonals of a Parallelogram:</b> The diagonals bisect each other.</li>
        <li><b>Rhombus:</b> All four sides are equal; the diagonals are perpendicular bisectors of each other.</li>
      </ol>`,
    statement_ml: `<p><b>പ്രധാന പ്രയോഗം:</b> സാമാന്തരികത്തിലോ ചതുർഭുജത്തിലോ ഒരു വികർണ്ണം വരച്ചാൽ അത് രണ്ട് ത്രികോണങ്ങളായി വിഭജിക്കപ്പെടുന്നു. തുല്യത്രികോണ തത്വങ്ങൾ ഉപയോഗിച്ച്:</p>
      <ol>
        <li><b>സാമാന്തരികത്തിന്റെ വശങ്ങളും കോണുകളും:</b> വികർണ്ണം സാമാന്തരികത്തെ രണ്ട് തുല്യത്രികോണങ്ങളായി വിഭജിക്കുന്നു. അതിനാൽ:
          $$\\text{എതിർവശങ്ങൾ തുല്യമാണ്: } AB = CD, \\quad AD = BC$$
          $$\\text{എതിർകോണുകൾ തുല്യമാണ്: } \\angle A = \\angle C, \\quad \\angle B = \\angle D$$
        </li>
        <li><b>സാമാന്തരികത്തിന്റെ വികർണ്ണങ്ങൾ:</b> വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നു.</li>
        <li><b>സമഭുജസാമാന്തരികം (റോംബസ്):</b> നാല് വശങ്ങളും തുല്യമാണ്; വികർണ്ണങ്ങൾ പരസ്പരം ലംബസമഭാജികളാണ്.</li>
      </ol>`,
    intuition_en: `<p>Whenever parallel lines are cut by a transversal, alternate interior angles are equal. Using this with a shared diagonal immediately gives ASA equality between the two triangles forming a parallelogram.</p>`,
    intuition_ml: `<p>സമാന്തര വരകളെ ഒരു വര മുറിച്ചു കടക്കുമ്പോൾ ഉണ്ടാകുന്ന മറുകോണുകൾ തുല്യമാണ്. ഈ തത്വവും പൊതുവായ വികർണ്ണവും ചേരുമ്പോൾ സാമാന്തരികത്തിലെ രണ്ട് ത്രികോണങ്ങൾ $ASA$ നിയമപ്രകാരം തുല്യമാകുന്നു.</p>`,
    needs: ['m8.2.2.asa-congruence', 'm8.2.3.sas-congruence'],
    figs: ['fig.tri-parallelogram'],
    traps_en: [
      'Assuming the diagonals of any parallelogram are equal in length (they are only equal in rectangles and squares).'
    ],
    traps_ml: [
      'എല്ലാ സാമാന്തരികങ്ങളുടെയും വികർണ്ണങ്ങളുടെ നീളം തുല്യമായിരിക്കും എന്ന് കരുതരുത് (ചതുരത്തിലും സമചതുരത്തിലും മാത്രമേ വികർണ്ണങ്ങൾക്ക് ഒരേ നീളമുണ്ടാകൂ).'
    ],
    cards_en: [
      { q: 'How does a diagonal divide a parallelogram?', a: 'Into two equal (congruent) triangles.', kind: 'state' },
      { q: 'In a parallelogram, why are opposite sides equal?', a: 'Because the diagonal divides it into two equal triangles, making corresponding sides equal.', kind: 'apply' },
      { q: 'Are the diagonals of every parallelogram equal in length?', a: 'No, diagonals are only equal in special parallelograms like rectangles and squares.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ഒരു വികർണ്ണം സാമാന്തരികത്തെ എങ്ങനെ വിഭജിക്കുന്നു?', a: 'രണ്ട് തുല്യ ത്രികോണങ്ങളായി.', kind: 'state' },
      { q: 'സാമാന്തരികത്തിൽ എതിർവശങ്ങൾ തുല്യമാകുന്നത് എന്തുകൊണ്ട്?', a: 'വികർണ്ണം സാമാന്തരികത്തെ രണ്ട് തുല്യത്രികോണങ്ങളായി വിഭജിക്കുന്നതിനാൽ അവയുടെ അനുയോജ്യ വശങ്ങൾ തുല്യമാകുന്നു.', kind: 'apply' },
      { q: 'എല്ലാ സാമാന്തരികങ്ങളുടെയും വികർണ്ണങ്ങളുടെ നീളം തുല്യമായിരിക്കുമോ?', a: 'അല്ല, ചതുരം, സമചതുരം തുടങ്ങിയ പ്രത്യേക സാമാന്തരികങ്ങളിൽ മാത്രമേ വികർണ്ണങ്ങൾ തുല്യമാകൂ.', kind: 'trap' }
    ]
  }
);
