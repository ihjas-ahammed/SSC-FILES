/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 5: Trigonometry (ത്രികോണമിതി)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.5.1 Trigonometric Ratios in Right Triangles (മട്ടത്രികോണത്തിലെ ത്രികോണമിതി അനുപാതങ്ങൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.5.1.trigonometric-ratios-in-right-triangles',
    sec: '10.5.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Trigonometric Ratios in Right Triangles',
    title_ml: 'മട്ടത്രികോണത്തിലെ ത്രികോണമിതി അനുപാതങ്ങൾ',
    oneLine_en: 'In a right triangle with acute angle θ, the fundamental ratios are sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent.',
    oneLine_ml: 'ഒരു മട്ടത്രികോണത്തിലെ ന്യൂനകോൺ $\\theta$ ആയാൽ, $\\sin\\theta = \\frac{\\text{എതിർവശം}}{\\text{കർണ്ണം}}$, $\\cos\\theta = \\frac{\\text{സമീപവശം}}{\\text{കർണ്ണം}}$, $\\tan\\theta = \\frac{\\text{എതിർവശം}}{\\text{സമീപവശം}}$ എന്ന് നിർവ്വചിക്കുന്നു.',
    statement_en: `<p><b>Definitions of the Three Primary Trigonometric Ratios:</b></p>
      <p>For any acute angle $\\theta$ in a right-angled triangle:</p>
      <ul>
        <li><b>Sine ($\\sin\\theta$):</b> Ratio of the length of the opposite side to the hypotenuse:
          $$\\mathbf{\\sin\\theta = \\frac{\\text{Opposite Side}}{\\text{Hypotenuse}}}$$</li>
        <li><b>Cosine ($\\cos\\theta$):</b> Ratio of the length of the adjacent side to the hypotenuse:
          $$\\mathbf{\\cos\\theta = \\frac{\\text{Adjacent Side}}{\\text{Hypotenuse}}}$$</li>
        <li><b>Tangent ($\\tan\\theta$):</b> Ratio of the opposite side to the adjacent side:
          $$\\mathbf{\\tan\\theta = \\frac{\\text{Opposite Side}}{\\text{Adjacent Side}} = \\frac{\\sin\\theta}{\\cos\\theta}}$$</li>
      </ul>
      <p><b>Complementary Angle Relations:</b></p>
      <p>Since the two acute angles in any right triangle sum to $90^\\circ$:</p>
      $$\\mathbf{\\sin(90^\\circ - \\theta) = \\cos\\theta, \\quad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\quad \\tan(90^\\circ - \\theta) = \\frac{1}{\\tan\\theta}}$$
      <p><b>Fundamental Pythagorean Identity:</b></p>
      $$\\mathbf{\\sin^2\\theta + \\cos^2\\theta = 1}$$`,
    statement_ml: `<p><b>മൂന്ന് അടിസ്ഥാന ത്രികോണമിതി അനുപാതങ്ങൾ:</b></p>
      <p>ഒരു മട്ടത്രികോണത്തിലെ ന്യൂനകോൺ $\\theta$ ആയാൽ:</p>
      <ul>
        <li><b>സൈൻ ($\\sin\\theta$):</b> എതിർവശവും കർണ്ണവും തമ്മിലുള്ള അനുപാതം:
          $$\\mathbf{\\sin\\theta = \\frac{\\text{എതിർവശം}}{\\text{കർണ്ണം}}}$$</li>
        <li><b>കൊസൈൻ ($\\cos\\theta$):</b> സമീപവശവും കർണ്ണവും തമ്മിലുള്ള അനുപാതം:
          $$\\mathbf{\\cos\\theta = \\frac{\\text{സമീപവശം}}{\\text{കർണ്ണം}}}$$</li>
        <li><b>ടാൻജെന്റ് ($\\tan\\theta$):</b> എതിർവശവും സമീപവശവും തമ്മിലുള്ള അനുപാതം:
          $$\\mathbf{\\tan\\theta = \\frac{\\text{എതിർവശം}}{\\text{സമീപവശം}} = \\frac{\\sin\\theta}{\\cos\\theta}}$$</li>
      </ul>
      <p><b>പൂരകകോൺ ബന്ധങ്ങൾ:</b></p>
      <p>മട്ടത്രികോണത്തിലെ രണ്ട് ന്യൂനകോണുകളുടെ തുക $90^\\circ$ ആയതിനാൽ:</p>
      $$\\mathbf{\\sin(90^\\circ - \\theta) = \\cos\\theta, \\quad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\quad \\tan(90^\\circ - \\theta) = \\frac{1}{\\tan\\theta}}$$
      <p><b>പൈതഗോറിയൻ സർവ്വസമവാക്യം:</b></p>
      $$\\mathbf{\\sin^2\\theta + \\cos^2\\theta = 1}$$`,
    intuition_en: `<p>Trigonometric ratios depend strictly on the angular aperture $\\theta$, completely independent of triangle size. By AA similarity, doubling or tripling side lengths scales all sides equally, leaving ratios invariant.</p>`,
    intuition_ml: `<p>ത്രികോണമിതി അനുപാതങ്ങൾ ത്രികോണത്തിന്റെ വലിപ്പത്തെയല്ല, കോണിന്റെ അളവിനെ മാത്രമാണ് ആശ്രയിക്കുന്നത്. ഒരേ കോണുള്ള എല്ലാ മട്ടത്രികോണങ്ങളും സദൃശമായതിനാൽ വശങ്ങളുടെ അനുപാതം എപ്പോഴും സ്ഥിരമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Use AA similarity of right triangles and the Pythagorean theorem to prove invariance and sin² + cos² = 1.',
      idea_ml: 'മട്ടത്രികോണങ്ങളുടെ സദൃശതയും പൈതഗോറസ് സിദ്ധാന്തവും ഉപയോഗിച്ച് അനുപാതങ്ങളുടെ സ്ഥിരതയും സർവ്വസമവാക്യവും തെളിയിക്കുന്നു.',
      why_en: 'All right triangles with one equal acute angle theta are similar (AA similarity).',
      why_ml: 'ഒരു ന്യൂനകോൺ തുല്യമായ എല്ലാ മട്ടത്രികോണങ്ങളും സദൃശങ്ങളാണ്.',
      rungs_en: [
        { why_en: 'Two right triangles with acute angle θ are similar by AA criterion', m: '\\triangle ABC \\sim \\triangle A\'B\'C\' \\implies \\frac{BC}{AC} = \\frac{B\'C\'}{A\'C\'}' },
        { why_en: 'Therefore sin θ and cos θ depend only on θ, not triangle scale', m: '\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\quad \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}' },
        { why_en: 'Apply Pythagoras theorem: opp² + adj² = hyp²', m: '\\text{opp}^2 + \\text{adj}^2 = \\text{hyp}^2' },
        { why_en: 'Divide by hyp² to establish the identity', m: '\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right)^2 + \\left(\\frac{\\text{adj}}{\\text{hyp}}\\right)^2 = 1 \\implies \\sin^2\\theta + \\cos^2\\theta = 1' }
      ],
      rungs_ml: [
        { why_ml: 'ഒരു ന്യൂനകോൺ തുല്യമായ മട്ടത്രികോണങ്ങൾ $AA$ തത്വപ്രകാരം സദൃശങ്ങളാണ്.', m: '\\triangle ABC \\sim \\triangle A\'B\'C\' \\implies \\frac{BC}{AC} = \\frac{B\'C\'}{A\'C\'}' },
        { why_ml: 'അതുകൊണ്ട് വശങ്ങളുടെ അനുപാതം ത്രികോണത്തിന്റെ വലിപ്പത്തിനനുസരിച്ച് മാറുന്നില്ല.', m: '\\sin\\theta = \\frac{\\text{എതിർവശം}}{\\text{കർണ്ണം}}, \\quad \\cos\\theta = \\frac{\\text{സമീപവശം}}{\\text{കർണ്ണം}}' },
        { why_ml: 'പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം: എതിർവശം² + സമീപവശം² = കർണ്ണം².', m: '\\text{എതിർവശം}^2 + \\text{സമീപവശം}^2 = \\text{കർണ്ണം}^2' },
        { why_ml: 'കർണ്ണം² കൊണ്ട് ഹരിക്കുമ്പോൾ സർവ്വസമവാക്യം ലഭിക്കുന്നു.', m: '\\sin^2\\theta + \\cos^2\\theta = 1' }
      ]
    },
    needs: ['m9.7.1.concept-of-similarity', 's.pythagoras-theorem'],
    traps_en: [
      'Swapping opposite and adjacent sides when looking from the other acute angle.',
      'Assuming sin θ + cos θ = 1 instead of sin² θ + cos² θ = 1.',
      'Writing tan θ as adjacent / opposite instead of opposite / adjacent.'
    ],
    traps_ml: [
      'മറ്റേ ന്യൂനകോൺ നോക്കുമ്പോൾ എതിർവശവും സമീപവശവും പരസ്പരം മാറിപ്പോകുന്നത്.',
      '$\\sin^2\\theta + \\cos^2\\theta = 1$ എന്നതിന് പകരം $\\sin\\theta + \\cos\\theta = 1$ എന്ന് തെറ്റായി കരുതുന്നത്.',
      '$\\tan\\theta$-യെ സമീപവശം / എതിർവശം എന്ന് തിരിച്ചെഴുതുന്നത്.'
    ],
    cards_en: [
      { q: 'In a right triangle with legs 6 cm and 8 cm, find the hypotenuse and sin θ for the angle opposite to 6 cm.', a: 'Hypotenuse $= \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. $\\sin\\theta = \\frac{6}{10} = \\mathbf{\\frac{3}{5}}$ (or $0.6$).', kind: 'apply' },
      { q: 'If sin θ = 3/5, find cos θ and tan θ for the same acute angle.', a: '$\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\mathbf{\\frac{4}{5}}$; $\\tan\\theta = \\frac{3/5}{4/5} = \\mathbf{\\frac{3}{4}}$.', kind: 'apply' },
      { q: 'State the relation between sin(90° - θ) and cos θ.', a: '$\\mathbf{\\sin(90^\\circ - \\theta) = \\cos\\theta}$ (they are co-functions of complementary angles).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ലംബവശങ്ങൾ 6 cm, 8 cm ആയ മട്ടത്രികോണത്തിൽ 6 cm-ന് എതിരെയുള്ള കോണിന്റെ sin എത്ര?', a: 'കർണ്ണം $= \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. $\\sin\\theta = \\frac{6}{10} = \\mathbf{\\frac{3}{5}}$ ($0.6$).', kind: 'apply' },
      { q: 'sin θ = 3/5 ആയാൽ cos θ, tan θ എന്നിവ എത്ര?', a: '$\\cos\\theta = \\mathbf{\\frac{4}{5}}$, $\\tan\\theta = \\mathbf{\\frac{3}{4}}$.', kind: 'apply' },
      { q: 'sin(90° - θ), cos θ എന്നിവ തമ്മിലുള്ള ബന്ധം എന്താണ്?', a: '$\\mathbf{\\sin(90^\\circ - \\theta) = \\cos\\theta}$ (പൂരകകോൺ തുല്യത).', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.2 Special Angles & Standard Triangles (പ്രത്യേക കോണുകളിലെ ത്രികോണമിതി വിലകൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.5.2.special-angles-and-values',
    sec: '10.5.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Special Angles & Values (30°, 45°, 60°)',
    title_ml: 'പ്രത്യേക കോണുകളിലെ ത്രികോണമിതി വിലകൾ',
    oneLine_en: 'The standard right triangles 45°-45°-90° and 30°-60°-90° have side ratios 1 : 1 : √2 and 1 : √3 : 2, yielding exact values for sin, cos, and tan of 30°, 45°, and 60°.',
    oneLine_ml: '$45^\\circ-45^\\circ-90^\\circ$ മട്ടത്രികോണത്തിലെ വശങ്ങളുടെ അനുപാതം $1 : 1 : \\sqrt{2}$-ഉം, $30^\\circ-60^\\circ-90^\\circ$-ൽ $1 : \\sqrt{3} : 2$-ഉം ആണ്. ഇത് $30^\\circ, 45^\\circ, 60^\\circ$ കോണുകളുടെ കൃത്യവിലകൾ നൽകുന്നു.',
    statement_en: `<p><b>Exact Values Table for Special Angles:</b></p>
      <table style="width:100%; border-collapse:collapse; text-align:center;" border="1">
        <thead>
          <tr style="background:#f0f4f8;">
            <th>Ratio</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$\\mathbf{\\sin\\theta}$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{1}{\\sqrt{2}}$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$1$</td></tr>
          <tr><td>$\\mathbf{\\cos\\theta}$</td><td>$1$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$\\frac{1}{\\sqrt{2}}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr>
          <tr><td>$\\mathbf{\\tan\\theta}$</td><td>$0$</td><td>$\\frac{1}{\\sqrt{3}}$</td><td>$1$</td><td>$\\sqrt{3}$</td><td>$\\text{undefined}$</td></tr>
        </tbody>
      </table>
      <p><b>Geometric Derivation Models:</b></p>
      <ul>
        <li><b>$45^\\circ - 45^\\circ - 90^\\circ$ Triangle:</b> Half of a unit square. Legs are $1, 1$, and hypotenuse is $\\sqrt{1^2 + 1^2} = \\sqrt{2}$. Side ratio is $\\mathbf{1 : 1 : \\sqrt{2}}$.</li>
        <li><b>$30^\\circ - 60^\\circ - 90^\\circ$ Triangle:</b> Half of an equilateral triangle of side $2$. Altitude bisects the base into $1$, giving legs $1, \\sqrt{3}$ and hypotenuse $2$. Side ratio is $\\mathbf{1 : \\sqrt{3} : 2}$.</li>
      </ul>`,
    statement_ml: `<p><b>പ്രത്യേക കോണുകളിലെ ത്രികോണമിതി വിലകളുടെ പട്ടിക:</b></p>
      <table style="width:100%; border-collapse:collapse; text-align:center;" border="1">
        <thead>
          <tr style="background:#f0f4f8;">
            <th>അനുപാതം</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$\\mathbf{\\sin\\theta}$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{1}{\\sqrt{2}}$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$1$</td></tr>
          <tr><td>$\\mathbf{\\cos\\theta}$</td><td>$1$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$\\frac{1}{\\sqrt{2}}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr>
          <tr><td>$\\mathbf{\\tan\\theta}$</td><td>$0$</td><td>$\\frac{1}{\\sqrt{3}}$</td><td>$1$</td><td>$\\sqrt{3}$</td><td>$\\text{നിർവ്വചിച്ചിട്ടില്ല}$</td></tr>
        </tbody>
      </table>
      <p><b>ജ്യാമിതീയ രൂപീകരണങ്ങൾ:</b></p>
      <ul>
        <li><b>$45^\\circ - 45^\\circ - 90^\\circ$ ത്രികോണം:</b> വശം 1 ആയ സമചതുരത്തിന്റെ പകുതി. ലംബവശങ്ങൾ $1, 1$-ഉം കർണ്ണം $\\sqrt{2}$-ഉം. വശങ്ങളുടെ അനുപാതം $\\mathbf{1 : 1 : \\sqrt{2}}$.</li>
        <li><b>$30^\\circ - 60^\\circ - 90^\\circ$ ത്രികോണം:</b> വശം 2 ആയ സമഭുജ ത്രികോണത്തിന്റെ പകുതി. പാദം പകുതിയായി 1 ആകുന്നു, ഉയരം $\\sqrt{3}$, കർണ്ണം 2. വശങ്ങളുടെ അനുപാതം $\\mathbf{1 : \\sqrt{3} : 2}$.</li>
      </ul>`,
    intuition_en: `<p>Knowing side ratios $1 : 1 : \\sqrt{2}$ and $1 : \\sqrt{3} : 2$ allows instant calculation of any missing side in $30^\\circ-60^\\circ-90^\\circ$ and $45^\\circ-45^\\circ-90^\\circ$ triangles without needing lookup tables.</p>`,
    intuition_ml: `<p>$1 : 1 : \\sqrt{2}$-ഉം $1 : \\sqrt{3} : 2$-ഉം ഓർത്തുവെച്ചാൽ പട്ടിക നോക്കാതെ തന്നെ $30^\\circ-60^\\circ-90^\\circ$, $45^\\circ-45^\\circ-90^\\circ$ ത്രികോണങ്ങളിലെ ഏത് വശവും ഞൊടിയിടയിൽ കണക്കാക്കാം.</p>`,
    proof: {
      idea_en: 'Cut unit square along diagonal for 45°; cut equilateral triangle along altitude for 30°-60°.',
      idea_ml: 'സമചതുരത്തിന്റെ വികർണ്ണത്തിലൂടെയും സമഭുജ ത്രികോണത്തിന്റെ ലംബത്തിലൂടെയും തെളിയിക്കുന്നു.',
      why_en: 'Pythagorean theorem applied to bisected regular polygons gives exact radicals.',
      why_ml: 'സമചതുരത്തിലും സമഭുജ ത്രികോണത്തിലുമുള്ള സമമിതി വശങ്ങളുടെ കൃത്യമായ വില നൽകുന്നു.',
      rungs_en: [
        { why_en: 'In square of side 1, diagonal divides it into two 45°-45°-90° triangles', m: 'd = \\sqrt{1^2 + 1^2} = \\sqrt{2} \\implies \\sin 45^\\circ = \\frac{1}{\\sqrt{2}}, \\tan 45^\\circ = 1' },
        { why_en: 'In equilateral triangle of side 2, drop altitude to base', m: 'h = \\sqrt{2^2 - 1^2} = \\sqrt{3}' },
        { why_en: 'The altitude forms two 30°-60°-90° right triangles', m: '\\sin 30^\\circ = \\frac{1}{2}, \\quad \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}' },
        { why_en: 'Evaluate ratios for the complementary 60° angle', m: '\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60^\\circ = \\frac{1}{2}, \\quad \\tan 60^\\circ = \\sqrt{3}' }
      ],
      rungs_ml: [
        { why_ml: 'വശം 1 ആയ സമചതുരത്തിന്റെ വികർണ്ണം $\\sqrt{2}$ ആണ്.', m: 'd = \\sqrt{1^2 + 1^2} = \\sqrt{2} \\implies \\sin 45^\\circ = \\frac{1}{\\sqrt{2}}, \\tan 45^\\circ = 1' },
        { why_ml: 'വശം 2 ആയ സമഭുജ ത്രികോണത്തിന്റെ ലംബ ഉയരം പൈതഗോറസ് പ്രകാരം കണ്ടെത്തുന്നു.', m: 'h = \\sqrt{2^2 - 1^2} = \\sqrt{3}' },
        { why_ml: 'രൂപപ്പെടുന്ന $30^\\circ-60^\\circ-90^\\circ$ ത്രികോണത്തിൽ $30^\\circ$-ന്റെ അനുപാതങ്ങൾ.', m: '\\sin 30^\\circ = \\frac{1}{2}, \\quad \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}' },
        { why_ml: '$60^\\circ$-ന്റെ അനുപാതങ്ങൾ.', m: '\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60^\\circ = \\frac{1}{2}, \\quad \\tan 60^\\circ = \\sqrt{3}' }
      ]
    },
    needs: ['m10.5.1.trigonometric-ratios-in-right-triangles'],
    traps_en: [
      'Inverting sin 30° and sin 60° (remember: 30° is the smaller angle, facing the smaller side 1, so sin 30° = 1/2).',
      'Confusing 1/√3 (tan 30°) with √3 (tan 60°).'
    ],
    traps_ml: [
      '$\\sin 30^\\circ$-യും $\\sin 60^\\circ$-യും പരസ്പരം മാറിപ്പോകുന്നത് ($30^\\circ$ ചെറിയ കോണായതിനാൽ $\\sin 30^\\circ = 1/2$).',
      '$\\tan 30^\\circ = 1/\\sqrt{3}$-ഉം $\\tan 60^\\circ = \\sqrt{3}$-ഉം പരസ്പരം മാറിപ്പോകുന്നത്.'
    ],
    cards_en: [
      { q: 'What is the ratio of sides in a 30°-60°-90° right triangle?', a: '$\\mathbf{1 : \\sqrt{3} : 2}$ (side opposite $30^\\circ$ is $1$, opposite $60^\\circ$ is $\\sqrt{3}$, hypotenuse is $2$).', kind: 'recall' },
      { q: 'A 45°-45°-90° right triangle has legs of length 7 cm. What is the length of its hypotenuse?', a: 'Hypotenuse $= 7\\sqrt{2}\\text{ cm} \\approx \\mathbf{9.898\\text{ cm}}$.', kind: 'apply' },
      { q: 'Evaluate: sin² 45° + cos² 60°.', a: '$\\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} + \\frac{1}{4} = \\mathbf{\\frac{3}{4}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '30°-60°-90° മട്ടത്രികോണത്തിലെ വശങ്ങളുടെ അനുപാതം എത്ര?', a: '$\\mathbf{1 : \\sqrt{3} : 2}$ ($30^\\circ$-ന് എതിരെ $1$, $60^\\circ$-ന് എതിരെ $\\sqrt{3}$, കർണ്ണം $2$).', kind: 'recall' },
      { q: '45°-45°-90° മട്ടത്രികോണത്തിന്റെ ലംബവശങ്ങൾ 7 cm ആയാൽ കർണ്ണത്തിന്റെ നീളം എത്ര?', a: 'കർണ്ണം $= \\mathbf{7\\sqrt{2}\\text{ cm}}$.', kind: 'apply' },
      { q: 'വില കാണുക: sin² 45° + cos² 60°.', a: '$\\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} + \\frac{1}{4} = \\mathbf{\\frac{3}{4}}$.', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.3 Area of Triangles & Sine Formula (ത്രികോണ പരപ്പളവും സൈൻ സൂത്രവാക്യവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.5.3.area-of-triangles-and-sine-formula',
    sec: '10.5.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Area of Triangles & Sine Formula',
    title_ml: 'ത്രികോണ പരപ്പളവും സൈൻ സൂത്രവാക്യവും',
    oneLine_en: 'The area of any triangle with sides a and b and included angle C is Area = (1/2) ab sin C; the circumradius is R = a / (2 sin A).',
    oneLine_ml: 'രണ്ട് വശങ്ങൾ $a, b$-യും ഉൾക്കോൺ $C$-യുമായ ത്രികോണത്തിന്റെ പരപ്പളവ് $= \\frac{1}{2}ab\\sin C$; പരിവൃത്ത ആരം $R = \\frac{a}{2\\sin A}$.',
    statement_en: `<p><b>Area of Triangle Using Sine:</b></p>
      <p>For any triangle with two sides $a, b$ and the angle $\\theta$ between them:</p>
      $$\\mathbf{\\text{Area} = \\frac{1}{2}ab\\sin\\theta}$$
      <p><b>Supplementary Angles Area Property:</b></p>
      <p>Since $\\sin(180^\\circ - \\theta) = \\sin\\theta$, two triangles having identical pairs of sides have <b>equal area</b> whether their included angle is $\\theta$ or its supplement $180^\\circ - \\theta$.</p>
      <p><b>Circumradius and Chord Theorem:</b></p>
      <p>In a circle of radius $R$, the length of any chord $a$ subtending an inscribed angle $A$ on the circumference is:</p>
      $$\\mathbf{a = 2R\\sin A \\implies R = \\frac{a}{2\\sin A}}$$
      <p>This gives the complete <b>Law of Sines</b>:</p>
      $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$`,
    statement_ml: `<p><b>സൈൻ ഉപയോഗിച്ചുള്ള ത്രികോണ പരപ്പളവ്:</b></p>
      <p>ഏതൊരു ത്രികോണത്തിലും രണ്ട് വശങ്ങൾ $a, b$-യും അവയ്ക്കിടയിലെ കോൺ $\\theta$-യും ആയാൽ:</p>
      $$\\mathbf{\\text{പരപ്പളവ്} = \\frac{1}{2}ab\\sin\\theta}$$
      <p><b>അനുപൂരക കോണുകളിലെ പരപ്പളവ് തുല്യത:</b></p>
      <p>$\\sin(180^\\circ - \\theta) = \\sin\\theta$ ആയതിനാൽ, രണ്ട് വശങ്ങൾ തുല്യമായ രണ്ട് ത്രികോണങ്ങളിൽ ഉൾക്കോണുകൾ $\\theta$-യും $180^\\circ - \\theta$-യും ആയാൽ അവയുടെ <b>പരപ്പളവ് തുല്യമായിരിക്കും</b>.</p>
      <p><b>ഞാണിന്റെ നീളവും പരിവൃത്ത ആരവും:</b></p>
      <p>ആരം $R$ ആയ വൃത്തത്തിൽ ഒരു ഞാൺ വൃത്തപരിധിയിലുണ്ടാക്കുന്ന കോൺ $A$ ആയാൽ, ഞാണിന്റെ നീളം:</p>
      $$\\mathbf{a = 2R\\sin A \\implies R = \\frac{a}{2\\sin A}}$$
      <p>ഇതാണ് <b>സൈൻ നിയമം</b>:</p>
      $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$`,
    intuition_en: `<p>In $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$, with base $a$ and side $b$ at angle $\\theta$, the vertical height dropped to the base is precisely $h = b\\sin\\theta$. Substituting gives $\\frac{1}{2}ab\\sin\\theta$.</p>`,
    intuition_ml: `<p>ത്രികോണ പരപ്പളവ് $= \\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം}$ എന്നതിൽ, പാദം $a$-യും ചരിഞ്ഞ വശം $b$-യും ആയാൽ ഉയരം $h = b\\sin\\theta$ ആണ്. ഇത് നൽകിയാൽ $\\frac{1}{2}ab\\sin\\theta$ ലഭിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Drop altitude from opposite vertex; express altitude as h = b sin A in the right triangle.',
      idea_ml: 'ശീർഷത്തിൽ നിന്ന് പാദത്തിലേക്ക് ലംബം വരച്ച് ഉയരം $h = b\\sin A$ എന്ന് കണ്ടെത്തുന്നു.',
      why_en: 'The altitude forms a right triangle where sin A = h / b.',
      why_ml: 'ലംബം ഉണ്ടാക്കുന്ന മട്ടത്രികോണത്തിൽ $\\sin A = h / b$ ആണ്.',
      rungs_en: [
        { why_en: 'In triangle ABC, draw altitude CD perpendicular to AB', m: 'CD \\perp AB, \\quad CD = h' },
        { why_en: 'In right triangle ACD, ratio definition gives h', m: '\\sin A = \\frac{h}{b} \\implies h = b\\sin A' },
        { why_en: 'Substitute h into standard area formula', m: '\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} c(b\\sin A) = \\frac{1}{2}bc\\sin A' },
        { why_en: 'For circumradius, chord subtends central angle 2A, bisected into right triangle with radius R', m: '\\sin A = \\frac{a/2}{R} \\implies a = 2R\\sin A' }
      ],
      rungs_ml: [
        { why_ml: 'ത്രികോണം $ABC$-യിൽ $C$-യിൽ നിന്ന് $AB$-യിലേക്ക് $CD$ ലംബം വരയ്ക്കുന്നു.', m: 'CD = h' },
        { why_ml: 'മട്ടത്രികോണം $ACD$-യിൽ സൈൻ നിർവ്വചനപ്രകാരം.', m: '\\sin A = \\frac{h}{b} \\implies h = b\\sin A' },
        { why_ml: 'പരപ്പളവ് സൂത്രവാക്യത്തിൽ ഉയരത്തിന്റെ വില നൽകുന്നു.', m: '\\text{പരപ്പളവ്} = \\frac{1}{2} c(b\\sin A) = \\frac{1}{2}bc\\sin A' },
        { why_ml: 'പരിവൃത്ത ആരം കാണാൻ ഞാൺ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $2A$ ആവുകയും അതിന്റെ പകുതി $A$ ആവുകയും ചെയ്യുന്നു.', m: '\\sin A = \\frac{a/2}{R} \\implies a = 2R\\sin A \\implies R = \\frac{a}{2\\sin A}' }
      ]
    },
    needs: ['m10.5.1.trigonometric-ratios-in-right-triangles'],
    traps_en: [
      'Using an angle that is NOT the included angle between the two chosen sides.',
      'Forgetting that sin 140° = sin 40° because sin(180° - θ) = sin θ.',
      'Using a = R sin A instead of a = 2R sin A for chord length.'
    ],
    traps_ml: [
      'തന്നിരിക്കുന്ന രണ്ട് വശങ്ങൾക്ക് ഇടയിലല്ലാത്ത മറ്റ് കോണുകൾ ഉപയോഗിക്കുന്നത്.',
      '$\\sin(180^\\circ - \\theta) = \\sin\\theta$ ആയതിനാൽ $\\sin 140^\\circ = \\sin 40^\\circ$ ആണെന്നത് ഓർക്കാതിരിക്കുന്നത്.',
      'ഞാണിന്റെ നീളത്തിന് $a = 2R\\sin A$-ക്ക് പകരം $R\\sin A$ എന്ന് തെറ്റായി എഴുതുന്നത്.'
    ],
    cards_en: [
      { q: 'The sides of a triangle are 8 cm and 10 cm, with included angle 30°. Find its area.', a: '$\\text{Area} = \\frac{1}{2} \\times 8 \\times 10 \\times \\sin 30^\\circ = 40 \\times \\frac{1}{2} = \\mathbf{20\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'In a circle, a chord of length 6 cm subtends an angle of 30° on the circumference. Find the radius of the circle.', a: '$2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{1/2} = 12 \\implies R = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'Why do two triangles with sides 8 cm, 10 cm have the same area when their angles are 40° and 140°?', a: 'Because $\\mathbf{\\sin 140^\\circ = \\sin(180^\\circ - 40^\\circ) = \\sin 40^\\circ}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'വശങ്ങൾ 8 cm, 10 cm-ഉം ഉൾക്കോൺ 30°-ഉം ആയ ത്രികോണത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$\\frac{1}{2} \\times 8 \\times 10 \\times \\sin 30^\\circ = 40 \\times \\frac{1}{2} = \\mathbf{20\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'ഒരു വൃത്തത്തിൽ 6 cm നീളമുള്ള ഞാൺ മറുചാപത്തിലുണ്ടാക്കുന്ന കോൺ 30° ആണ്. വൃത്തത്തിന്റെ ആരം എത്ര?', a: '$2R = \\frac{6}{\\sin 30^\\circ} = 12 \\implies R = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'വശങ്ങൾ 8 cm, 10 cm ആയ രണ്ട് ത്രികോണങ്ങളിൽ ഉൾക്കോണുകൾ 40°-ഉം 140°-ഉം ആയാൽ പരപ്പളവ് തുല്യമാകാൻ കാരണമെന്ത്?', a: '$\\mathbf{\\sin 140^\\circ = \\sin 40^\\circ}$ ആയതുകൊണ്ട്.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.4 Heights and Distances: Elevation & Depression (ഉയരങ്ങളും ദൂരങ്ങളും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.5.4.heights-and-distances',
    sec: '10.5.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Heights and Distances: Elevation & Depression',
    title_ml: 'ഉയരങ്ങളും ദൂരങ്ങളും — മേൽക്കോണും കീഴ്ക്കോണും',
    oneLine_en: 'Angle of elevation is measured looking upward from horizontal; angle of depression is measured looking downward; right triangles formed with vertical heights are solved using tan θ.',
    oneLine_ml: 'തിരശ്ചീന വരയ്ക്ക് മുകളിലേക്ക് നോക്കുമ്പോൾ മേൽക്കോണും താഴേക്ക് നോക്കുമ്പോൾ കീഴ്ക്കോണും ഉണ്ടാകുന്നു; $\\tan\\theta$ ഉപയോഗിച്ച് ഉയരങ്ങളും ദൂരങ്ങളും കണക്കാക്കുന്നു.',
    statement_en: `<p><b>Angles of Elevation and Depression:</b></p>
      <ul>
        <li><b>Angle of Elevation (മേൽക്കോൺ):</b> When looking UP at an object above horizontal eye level, the angle between the horizontal line of sight and the direct line of sight is the angle of elevation.</li>
        <li><b>Angle of Depression (കീഴ്ക്കോൺ):</b> When looking DOWN at an object below horizontal eye level, the angle between the horizontal line of sight and the direct line of sight is the angle of depression.
          <i>By alternate interior angles formed by parallel horizontal lines: Angle of Depression from top = Angle of Elevation from bottom.</i></li>
      </ul>
      <p><b>Solving Height and Distance Problems:</b></p>
      <p>For a vertical tower of height $h$ viewed from ground distance $d$:</p>
      $$\\mathbf{\\tan\\theta = \\frac{h}{d} \\implies h = d\\tan\\theta, \\quad d = \\frac{h}{\\tan\\theta}}$$
      <p>When the observer has an eye height $e$, total structure height is $\\mathbf{H = e + d\\tan\\theta}$.</p>`,
    statement_ml: `<p><b>മേൽക്കോണും കീഴ്ക്കോണും:</b></p>
      <ul>
        <li><b>മേൽക്കോൺ:</b> കണ്ണിന്റെ തിരശ്ചീന രേഖയ്ക്ക് മുകളിലുള്ള ഒരു വസ്തുവിലേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണാണ് മേൽക്കോൺ.</li>
        <li><b>കീഴ്ക്കോൺ:</b> കണ്ണിന്റെ തിരശ്ചീന രേഖയ്ക്ക് താഴെയുള്ള വസ്തുവിലേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണാണ് കീഴ്ക്കോൺ.
          <i>സമാന്തര രേഖകളിലെ മറുകോണുകളായതിനാൽ, മുകളിൽ നിന്നുള്ള കീഴ്ക്കോൺ = താഴെ നിന്നുള്ള മേൽക്കോൺ.</i></li>
      </ul>
      <p><b>ഉയരവും ദൂരവും കാണൽ:</b></p>
      <p>$d$ അകലെ നിന്ന് $h$ ഉയരമുള്ള വസ്തുവിലേക്ക് നോക്കുമ്പോൾ മേൽക്കോൺ $\\theta$ ആയാൽ:</p>
      $$\\mathbf{\\tan\\theta = \\frac{h}{d} \\implies h = d\\tan\\theta, \\quad d = \\frac{h}{\\tan\\theta}}$$
      <p>നിരീക്ഷകന്റെ കണ്ണിന്റെ ഉയരം $e$ തന്നിട്ടുണ്ടെങ്കിൽ ആകെ ഉയരം $\\mathbf{H = e + d\\tan\\theta}$.</p>`,
    intuition_en: `<p>Trigonometry converts unreachable vertical heights (trees, towers, lighthouses) into solvable right triangles where ground distance and viewing angle give the height directly via the tangent ratio.</p>`,
    intuition_ml: `<p>നേരിട്ട് കയറി അളക്കാൻ കഴിയാത്ത ഉയരങ്ങളെ ഭൂമിയിലെ ദൂരവും നോക്കുന്ന കോണും മാത്രം ഉപയോഗിച്ച് മട്ടത്രികോണങ്ങളിലൂടെ ലളിതമായി കണ്ടെത്താം.</p>`,
    proof: {
      idea_en: 'Right triangle modeling of horizontal base distance and vertical height.',
      idea_ml: 'തിരശ്ചീന ഭൂമിയും ലംബ ഉയരവും ചേർത്തുള്ള മട്ടത്രികോണ നിർമ്മിതി.',
      why_en: 'Vertical structures stand perpendicular to horizontal ground, forming a 90° angle.',
      why_ml: 'ലംബമായ വസ്തുക്കൾ തിരശ്ചീന പ്രതലത്തിന് ലംബമായതിനാൽ 90° കോൺ ഉണ്ടാകുന്നു.',
      rungs_en: [
        { why_en: 'Let observer be at point P on the ground at distance d from foot B of tower AB', m: 'AB \\perp PB, \\quad \\angle APB = \\theta' },
        { why_en: 'By tangent definition in right triangle ABP', m: '\\tan\\theta = \\frac{AB}{PB} = \\frac{h}{d}' },
        { why_en: 'Multiply across by ground distance d', m: 'h = d\\tan\\theta' },
        { why_en: 'For angle of depression from top A to object P, alternate interior angles are equal', m: '\\angle \\text{Depression at } A = \\angle APB = \\theta' }
      ],
      rungs_ml: [
        { why_ml: 'ടവറിന്റെ ചുവട്ടിൽ നിന്ന് $d$ അകലെയുള്ള ബിന്ദുവാണ് $P$; മേൽക്കോൺ $\\theta$.', m: 'AB \\perp PB, \\quad \\angle APB = \\theta' },
        { why_ml: 'മട്ടത്രികോണം $ABP$-യിൽ ടാൻജെന്റ് നിർവ്വചനപ്രകാരം.', m: '\\tan\\theta = \\frac{AB}{PB} = \\frac{h}{d}' },
        { why_ml: 'ദൂരം $d$ കൊണ്ട് ഗുണിക്കുമ്പോൾ ഉയരം ലഭിക്കുന്നു.', m: 'h = d\\tan\\theta' },
        { why_ml: 'മുകളിൽ നിന്നുള്ള കീഴ്ക്കോണും താഴെ നിന്നുള്ള മേൽക്കോണും മറുകോണുകളായതിനാൽ തുല്യമാണ്.', m: '\\angle \\text{കീഴ്ക്കോൺ} = \\angle \\text{മേൽക്കോൺ} = \\theta' }
      ]
    },
    needs: ['m10.5.1.trigonometric-ratios-in-right-triangles', 'm10.5.2.special-angles-and-values'],
    traps_en: [
      'Measuring the angle of depression from the vertical wall instead of from the horizontal line of sight.',
      'Forgetting to add the observer’s eye height when calculating total object height.'
    ],
    traps_ml: [
      'കീഴ്ക്കോൺ തിരശ്ചീന രേഖയിൽ നിന്നല്ലാതെ ലംബ ഭിത്തിയിൽ നിന്ന് അളക്കുന്നത്.',
      'നിരീക്ഷകന്റെ ഉയരം തന്നിരിക്കുമ്പോൾ ആകെ ഉയരം കാണാൻ അത് കൂട്ടാൻ മറന്നുപോകുന്നത്.'
    ],
    cards_en: [
      { q: 'From a point 30 m away from the foot of a tower, the angle of elevation of its top is 45°. What is the height of the tower?', a: '$h = d\\tan 45^\\circ = 30 \\times 1 = \\mathbf{30\\text{ metres}}$.', kind: 'apply' },
      { q: 'A 1.5 m tall observer stands 20 m away from a tree and sees its top at an angle of elevation of 45°. What is the total height of the tree?', a: '$H = 1.5 + 20\\tan 45^\\circ = 1.5 + 20(1) = \\mathbf{21.5\\text{ metres}}$.', kind: 'apply' },
      { q: 'State the geometric relationship between the angle of depression from a tower top to a ground point and the angle of elevation from that point to the top.', a: 'They are **equal** because they form alternate interior angles between two parallel horizontal lines.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ടവറിന്റെ ചുവട്ടിൽ നിന്ന് 30 മീറ്റർ അകലെ നിന്നപ്പോൾ മുകളിലേക്കുള്ള മേൽക്കോൺ 45° ആണ്. ടവറിന്റെ ഉയരം എത്ര?', a: '$h = 30 \\times \\tan 45^\\circ = 30 \\times 1 = \\mathbf{30}$ മീറ്റർ.', kind: 'apply' },
      { q: '1.5 മീറ്റർ ഉയരമുള്ള ഒരാൾ 20 മീറ്റർ അകലെയുള്ള മരത്തിന്റെ മുകളിലേക്ക് നോക്കുമ്പോൾ മേൽക്കോൺ 45° ആണ്. മരത്തിന്റെ ആകെ ഉയരം എത്ര?', a: '$H = 1.5 + 20(1) = \\mathbf{21.5}$ മീറ്റർ.', kind: 'apply' },
      { q: 'മുകളിൽ നിന്നുള്ള കീഴ്ക്കോണും താഴെ നിന്നുള്ള മേൽക്കോണും തമ്മിലുള്ള ബന്ധം എന്ത്?', a: 'സമാന്തര രേഖകളിലെ മറുകോണുകളായതിനാൽ അവ **തുല്യമായിരിക്കും**.', kind: 'recall' }
    ]
  }
);
