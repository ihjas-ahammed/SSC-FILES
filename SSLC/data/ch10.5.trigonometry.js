/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 5: Trigonometry (ത്രികോണമിതി)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.5.1.trigonometric-ratios-in-right-triangles',
    sec: '10.5.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Trigonometric Ratios in Right Triangles',
    title_ml: 'മട്ടത്രികോണത്തിലെ ത്രികോണമിതി അനുപാതങ്ങൾ',
    oneLine_en: 'In a right triangle with acute angle θ, the fundamental ratios are sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent.',
    oneLine_ml: 'ഒരു മട്ടത്രികോണത്തിൽ ഒരു ന്യൂനകോൺ θ ആയാൽ, $\sin\theta = \text{എതിർവശം}/\text{കർണ്ണം}$, $\cos\theta = \text{സമീപവശം}/\text{കർണ്ണം}$, $\tan\theta = \text{എതിർവശം}/\text{സമീപവശം}$ എന്നിങ്ങനെ ത്രികോണമിതി അനുപാതങ്ങൾ നിർവ്വചിക്കുന്നു.',
    statement_en: `<p><b>Definitions of the Three Primary Trigonometric Ratios:</b></p>
      <p>For any acute angle $\\theta$ in a right-angled triangle:</p>
      <ul>
        <li><b>Sine ($\\sin\\theta$):</b> Ratio of the side opposite to $\\theta$ to the hypotenuse:
        $$\\mathbf{\\sin\\theta = \\frac{\\text{Opposite Side}}{\\text{Hypotenuse}}}$$</li>
        <li><b>Cosine ($\\cos\\theta$):</b> Ratio of the side adjacent to $\\theta$ to the hypotenuse:
        $$\\mathbf{\\cos\\theta = \\frac{\\text{Adjacent Side}}{\\text{Hypotenuse}}}$$</li>
        <li><b>Tangent ($\\tan\\theta$):</b> Ratio of the opposite side to the adjacent side:
        $$\\mathbf{\\tan\\theta = \\frac{\\text{Opposite Side}}{\\text{Adjacent Side}} = \\frac{\\sin\\theta}{\\cos\\theta}}$$</li>
      </ul>
      <p><b>Complementary Angle Relations:</b></p>
      <p>Since the two acute angles in a right triangle sum to $90^\\circ$:</p>
      $$\\sin(90^\\circ - \\theta) = \\cos\\theta, \\quad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\quad \\tan(90^\\circ - \\theta) = \\frac{1}{\\tan\\theta}$$`,
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
      <p>മട്ടത്രികോണത്തിലെ മറ്റ് രണ്ട് കോണുകളുടെ തുക $90^\\circ$ ആയതിനാൽ:</p>
      $$\\sin(90^\\circ - \\theta) = \\cos\\theta, \\quad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\quad \\tan(90^\\circ - \\theta) = \\frac{1}{\\tan\\theta}$$`,
    intuition_en: 'Trigonometric ratios depend ONLY on the angle, not the size of the triangle. By AA similarity, all right triangles with an angle theta are similar, so the ratios of their corresponding sides are constant numbers.',
    intuition_ml: 'ത്രികോണമിതി അനുപാതങ്ങൾ ത്രികോണത്തിന്റെ വലിപ്പത്തെയല്ല, കോണിന്റെ അളവിനെ മാത്രമാണ് ആശ്രയിക്കുന്നത്. ഒരേ കോണുള്ള എല്ലാ മട്ടത്രികോണങ്ങളും സദൃശമായതിനാൽ വശങ്ങളുടെ അനുപാതം എപ്പോഴും ഒരേ സംഖ്യയായിരിക്കും.',
    proof: {
      idea_en: 'Show invariance of ratios through similar right triangles.',
      idea_ml: 'സദൃശ ത്രികോണങ്ങളുടെ വശാനുപാത സ്ഥിരതയിലൂടെ അനുപാതങ്ങൾ തെളിയിക്കുന്നു.',
      why_en: 'By AA criterion, two right triangles sharing angle theta are similar, making side ratios identical regardless of scale.',
      why_ml: 'AA സദൃശത പ്രകാരം ഒരേ ന്യൂനകോണുള്ള മട്ടത്രികോണങ്ങളുടെ അനുരൂപ വശങ്ങളുടെ അനുപാതം തുല്യമായിരിക്കും.',
      rungs: [
        {
          title_en: 'Similar Triangles Invariance',
          title_ml: 'സദൃശ ത്രികോണങ്ങളിലെ സ്ഥിരത',
          detail_en: 'Let $\\triangle ABC$ and $\\triangle A\'B\'C\'$ be right-angled at $B$ and $B\'$ with $\\angle A = \\angle A\' = \\theta$. Then $\\triangle ABC \\sim \\triangle A\'B\'C\'$, which implies $\\frac{BC}{AC} = \\frac{B\'C\'}{A\'C\'}$.',
          detail_ml: '$\\angle B = \\angle B\' = 90^\\circ$, $\\angle A = \\angle A\' = \\theta$ ആയാൽ രണ്ട് ത്രികോണങ്ങളും സദൃശമാണ്. അതിനാൽ $\\frac{BC}{AC} = \\frac{B\'C\'}{A\'C\'}$.'
        },
        {
          title_en: 'Fundamental Pythagorean Identity',
          title_ml: 'പൈതഗോറിയൻ സർവ്വസമവാക്യം',
          detail_en: 'By Pythagoras: $\\text{opp}^2 + \\text{adj}^2 = \\text{hyp}^2$. Dividing by $\\text{hyp}^2$ gives $\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right)^2 + \\left(\\frac{\\text{adj}}{\\text{hyp}}\\right)^2 = 1 \\implies \\sin^2\\theta + \\cos^2\\theta = 1$.',
          detail_ml: 'പൈതഗോറസ് പ്രകാരം: $\\text{എതിർവശം}^2 + \\text{സമീപവശം}^2 = \\text{കർണ്ണം}^2$. കർണ്ണത്തിന്റെ വർഗ്ഗം കൊണ്ട് ഹരിച്ചാൽ: $\\sin^2\\theta + \\cos^2\\theta = 1$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Swapping opposite and adjacent sides when looking from a different acute angle.',
        fix_en: 'Opposite is always the side facing directly across from the specified angle θ; adjacent is the leg touching θ.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'മറ്റേ ന്യൂനകോൺ എടുക്കുമ്പോൾ എതിർവശവും സമീപവശവും പരസ്പരം മാറിപ്പോകുന്നത്.',
        fix_ml: 'നാം പരിഗണിക്കുന്ന കോണിന് നേരെ എതിർവശത്തുള്ളതാണ് എതിർവശം; അതിനോട് തൊട്ടുകിടക്കുന്ന ലംബവശമാണ് സമീപവശം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'In a right triangle with legs 3 cm and 4 cm, find the hypotenuse and sin θ for the angle opposite to 3 cm.',
        a: 'Hypotenuse = √(3² + 4²) = 5 cm. sin θ = Opposite / Hypotenuse = 3/5.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ലംബവശങ്ങൾ 3 cm, 4 cm ആയ മട്ടത്രികോണത്തിൽ 3 cm ന് എതിരെയുള്ള കോണിന്റെ sin കാണുക.',
        a: 'കർണ്ണം = √(3² + 4²) = 5 cm. sin = എതിർവശം / കർണ്ണം = 3/5.'
      }
    ]
  },
  {
    id: 'm10.5.2.special-angles-and-values',
    sec: '10.5.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Special Angles & Values (30°, 45°, 60°)',
    title_ml: 'പ്രത്യേക കോണുകളിലെ ത്രികോണമിതി വിലകൾ',
    oneLine_en: 'The standard right triangles 45°-45°-90° and 30°-60°-90° have exact side ratios 1 : 1 : √2 and 1 : √3 : 2, determining precise values for sin, cos, and tan.',
    oneLine_ml: '45°-45°-90° മട്ടത്രികോണത്തിലെ വശങ്ങളുടെ അനുപാതം 1 : 1 : √2 ഉം, 30°-60°-90° ൽ 1 : √3 : 2 ഉം ആണ്. ഇത് $\sin, \cos, \tan$ എന്നിവയുടെ കൃത്യവിലകൾ നൽകുന്നു.',
    statement_en: `<p><b>Exact Trigonometric Values Table:</b></p>
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
      <p><b>Standard Ratio Triangles:</b></p>
      <ul>
        <li><b>$45^\\circ - 45^\\circ - 90^\\circ$ Triangle:</b> An isosceles right triangle with legs $1, 1$ has hypotenuse $\\sqrt{1^2 + 1^2} = \\sqrt{2}$. Side ratio is $\\mathbf{1 : 1 : \\sqrt{2}}$.</li>
        <li><b>$30^\\circ - 60^\\circ - 90^\\circ$ Triangle:</b> Bisecting an equilateral triangle of side $2$ gives legs $1, \\sqrt{3}$ and hypotenuse $2$. Side ratio is $\\mathbf{1 : \\sqrt{3} : 2}$.</li>
      </ul>`,
    statement_ml: `<p><b>പ്രത്യേക കോണുകളിലെ വിലകളുടെ പട്ടിക:</b></p>
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
      <p><b>മാനക ത്രികോണങ്ങൾ:</b></p>
      <ul>
        <li><b>$45^\\circ - 45^\\circ - 90^\\circ$ ത്രികോണം:</b> ലംബവശങ്ങൾ തുല്യമായ സമപാർശ്വ മട്ടത്രികോണത്തിൽ വശങ്ങളുടെ അനുപാതം $\\mathbf{1 : 1 : \\sqrt{2}}$ ആണ്.</li>
        <li><b>$30^\\circ - 60^\\circ - 90^\\circ$ ത്രികോണം:</b> സമഭുജ ത്രികോണത്തെ നെടുകെ മുറിക്കുമ്പോൾ കിട്ടുന്ന മട്ടത്രികോണത്തിൽ വശങ്ങളുടെ അനുപാതം $\\mathbf{1 : \\sqrt{3} : 2}$ ആണ് ($30^\\circ$ ന് എതിരെ 1, $60^\\circ$ ന് എതിരെ $\\sqrt{3}$, കർണ്ണം 2).</li>
      </ul>`,
    intuition_en: 'Memorising side ratios 1:1:√2 and 1:√3:2 allows immediate calculation of any side in 45-45-90 and 30-60-90 triangles without recalculating values from tables.',
    intuition_ml: '1:1:√2, 1:√3:2 എന്നീ വശങ്ങളുടെ അനുപാതങ്ങൾ ഓർത്തുവെച്ചാൽ 45-45-90, 30-60-90 ത്രികോണങ്ങളിലെ ഏത് വശവും പട്ടിക നോക്കാതെ ഞൊടിയിടയിൽ കണക്കാക്കാം.',
    proof: {
      idea_en: 'Geometric construction from unit square and equilateral triangle.',
      idea_ml: 'സമചതുരത്തിന്റെ വികർണ്ണത്തിലൂടെയും സമഭുജ ത്രികോണത്തിന്റെ ലംബത്തിലൂടെയും തെളിയിക്കുന്നു.',
      why_en: 'Symmetry in regular geometric polygons fixes side lengths unconditionally.',
      why_ml: 'സമചതുരത്തിലും സമഭുജ ത്രികോണത്തിലുമുള്ള സമമിതി വശങ്ങളുടെ നീളം കൃത്യമായി നിർണ്ണയിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Derivation for 45 degrees',
          title_ml: '45 ഡിഗ്രിയുടെ രൂപീകരണം',
          detail_en: 'Square of side 1 with diagonal $d$. By Pythagoras: $d^2 = 1^2 + 1^2 = 2 \\implies d = \\sqrt{2}$. The angles are $45^\\circ, 45^\\circ, 90^\\circ$, so $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$ and $\\tan 45^\\circ = 1$.',
          detail_ml: 'വശം 1 ആയ സമചതുരത്തിന്റെ വികർണ്ണം $\\sqrt{1^2 + 1^2} = \\sqrt{2}$. കോണുകൾ $45^\\circ$ വീതം. അതിനാൽ $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}, \\tan 45^\\circ = 1$.'
        },
        {
          title_en: 'Derivation for 30 and 60 degrees',
          title_ml: '30, 60 ഡിഗ്രികളുടെ രൂപീകരണം',
          detail_en: 'Equilateral triangle of side 2 with altitude $h$. Altitude bisects base into segments of 1. By Pythagoras: $h = \\sqrt{2^2 - 1^2} = \\sqrt{3}$. Angles are $30^\\circ$ and $60^\\circ$, giving $\\sin 30^\\circ = \\frac{1}{2}$ and $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.',
          detail_ml: 'വശം 2 ആയ സമഭുജ ത്രികോണത്തിന്റെ ഉയരം $h = \\sqrt{2^2 - 1^2} = \\sqrt{3}$. കോണുകൾ $30^\\circ, 60^\\circ$ ആയതിനാൽ $\\sin 30^\\circ = \\frac{1}{2}, \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Inverting sin 30° and sin 60°: saying sin 30° = √3/2.',
        fix_en: 'Remember 30° is the smaller angle, so it faces the smaller side 1: sin 30° = 1/2.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'sin 30° യുടെയും sin 60° യുടെയും വിലകൾ പരസ്പരം മാറിപ്പോകുന്നത്.',
        fix_ml: '30° ചെറിയ കോണായതിനാൽ അതിനെതിരെയുള്ള വശം ചെറുതാണ്: sin 30° = 1/2, sin 60° = √3/2.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'What is the exact value of tan 60° and cos 45°?',
        a: 'tan 60° = √3; cos 45° = 1/√2.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'tan 60°, cos 45° എന്നിവയുടെ കൃത്യവിലകൾ എത്ര?',
        a: 'tan 60° = √3; cos 45° = 1/√2.'
      }
    ]
  },
  {
    id: 'm10.5.3.area-of-triangles-and-sine-formula',
    sec: '10.5.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Area of Triangles & Sine Formula',
    title_ml: 'ത്രികോണ പരപ്പളവും സൈൻ സൂത്രവാക്യവും',
    oneLine_en: 'The area of any triangle with sides a and b and included angle C is Area = (1/2) ab sin C; the circumradius is R = a / (2 sin A).',
    oneLine_ml: 'രണ്ട് വശങ്ങൾ a, b യും അവയ്ക്കിടയിലെ കോൺ C യുമായ ഏത് ത്രികോണത്തിന്റെയും പരപ്പളവ് $= \\frac{1}{2}ab\\sin C$ ആണ്; പരിവൃത്ത ആരം $R = \\frac{a}{2\\sin A}$.',
    statement_en: `<p><b>Area of a Triangle Using Two Sides and Included Angle:</b></p>
      <p>For any triangle with side lengths $a, b$ and the angle $\\theta$ between them:</p>
      $$\\mathbf{\\text{Area} = \\frac{1}{2}ab\\sin\\theta}$$
      <p><b>Circumradius and Chord Length Formula:</b></p>
      <p>In a circle of radius $R$, the length of a chord $a$ that subtends an angle $A$ at the circle circumference is:</p>
      $$\\mathbf{a = 2R\\sin A \\implies R = \\frac{a}{2\\sin A}}$$
      <p>This provides the extended <b>Law of Sines</b>:</p>
      $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$`,
    statement_ml: `<p><b>രണ്ട് വശങ്ങളും ഉൾക്കോണും തന്നാൽ പരപ്പളവ്:</b></p>
      <p>ഏതൊരു ത്രികോണത്തിലും രണ്ട് വശങ്ങൾ $a, b$ യും അവയ്ക്കിടയിലെ കോൺ $\\theta$ യും ആയാൽ:</p>
      $$\\mathbf{\\text{പരപ്പളവ്} = \\frac{1}{2}ab\\sin\\theta}$$
      <p><b>ഞാണിന്റെ നീളവും പരിവൃത്ത ആരവും:</b></p>
      <p>ആരം $R$ ആയ വൃത്തത്തിലെ ഒരു ചാപം മറുചാപത്തിലുണ്ടാക്കുന്ന കോൺ $A$ ആയാൽ, അതിന്റെ ഞാണിന്റെ നീളം:</p>
      $$\\mathbf{a = 2R\\sin A \\implies R = \\frac{a}{2\\sin A}}$$
      <p>ഇതാണ് <b>സൈൻ നിയമം</b>:</p>
      $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$`,
    intuition_en: 'In the standard area formula (1/2) * base * height, if the base is a and adjacent side is b at angle θ, the perpendicular height is precisely h = b sin θ. Substituting gives Area = (1/2) ab sin θ.',
    intuition_ml: 'ത്രികോണ പരപ്പളവിന്റെ അടിസ്ഥാന സൂത്രവാക്യമായ $\\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം}$ എന്നതിൽ, പാദം $a$ യും ചരിഞ്ഞ വശം $b$ യും കോൺ $\theta$ യുമായാൽ ഉയരം $h = b\\sin\\theta$ ആയിരിക്കും. ഇത് നൽകിയാൽ പരപ്പളവ് $= \\frac{1}{2}ab\\sin\\theta$ എന്ന് ലഭിക്കുന്നു.',
    proof: {
      idea_en: 'Drop a perpendicular altitude from vertex to opposite side.',
      idea_ml: 'ശീർഷത്തിൽ നിന്ന് എതിർവശത്തേക്ക് ലംബം വരച്ച് ഉയരം കണ്ടെത്തുന്നു.',
      why_en: 'The altitude forms a right triangle where altitude equals hypotenuse times sine of the angle.',
      why_ml: 'ലംബം ഉണ്ടാക്കുന്ന മട്ടത്രികോണത്തിൽ ഉയരം $= \\text{കർണ്ണം} \\times \\sin\\theta$ ആയിരിക്കും.',
      rungs: [
        {
          title_en: 'Perpendicular Altitude',
          title_ml: 'ലംബ ഉയരം',
          detail_en: 'In $\\triangle ABC$, draw altitude $CD \\perp AB$. In right $\\triangle ACD$, $\\sin A = \\frac{CD}{b} \\implies CD = h = b\\sin A$.',
          detail_ml: '$C$ ൽ നിന്ന് $AB$ യിലേക്ക് ലംബം വരച്ചാൽ മട്ടത്രികോണം $ACD$ ൽ $\\sin A = \\frac{h}{b} \\implies h = b\\sin A$.'
        },
        {
          title_en: 'Area Substitution',
          title_ml: 'പരപ്പളവ് സങ്കലനം',
          detail_en: '$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} c(b\\sin A) = \\frac{1}{2}bc\\sin A$.',
          detail_ml: 'പരപ്പളവ് $= \\frac{1}{2} \\times c \\times (b\\sin A) = \\frac{1}{2}bc\\sin A$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Using an angle that is NOT the angle between the two given sides.',
        fix_en: 'Always ensure that the angle θ used is strictly the INCLUDED angle between sides a and b.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'തന്നിരിക്കുന്ന രണ്ട് വശങ്ങൾക്കിടയിലല്ലാത്ത മറ്റ് കോണുകൾ ഉപയോഗിക്കുന്നത്.',
        fix_ml: 'സൂത്രവാക്യത്തിലെ കോൺ $\\theta$ എന്നത് തന്നിരിക്കുന്ന രണ്ട് വശങ്ങൾക്ക് ഇടയിലുള്ള ഉൾക്കോൺ ആയിരിക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the area of a triangle having sides 8 cm and 10 cm with included angle 30°.',
        a: 'Area = (1/2) * 8 * 10 * sin 30° = 40 * (1/2) = 20 cm².'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'വശങ്ങൾ 8 cm, 10 cm ഉം അവയ്ക്കിടയിലെ കോൺ 30° യുമായ ത്രികോണത്തിന്റെ പരപ്പളവ് കാണുക.',
        a: 'പരപ്പളവ് = (1/2) * 8 * 10 * sin 30° = 40 * (1/2) = 20 cm².'
      }
    ]
  },
  {
    id: 'm10.5.4.heights-and-distances',
    sec: '10.5.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Heights and Distances: Elevation & Depression',
    title_ml: 'ഉയരങ്ങളും ദൂരങ്ങളും — മേൽക്കോണും കീഴ്ക്കോണും',
    oneLine_en: 'Angle of elevation is measured looking upward from horizontal; angle of depression is measured looking downward; right triangles formed with vertical heights are solved using tan θ.',
    oneLine_ml: 'തിരശ്ചീന വരയ്ക്ക് മുകളിലേക്ക് നോക്കുമ്പോൾ മേൽക്കോണും താഴേക്ക് നോക്കുമ്പോൾ കീഴ്ക്കോണും ഉണ്ടാകുന്നു; $\tan\theta$ ഉപയോഗിച്ച് ഉയരങ്ങളും ദൂരങ്ങളും നിർണ്ണയിക്കുന്നു.',
    statement_en: `<p><b>Angles of Elevation and Depression:</b></p>
      <ul>
        <li><b>Angle of Elevation (മേൽക്കോൺ):</b> When an observer looks UP at an object above the horizontal eye level, the angle between the horizontal line of sight and the line of sight to the object is the angle of elevation.</li>
        <li><b>Angle of Depression (കീഴ്ക്കോൺ):</b> When an observer looks DOWN at an object below the horizontal eye level, the angle between the horizontal line of sight and the line of sight to the object is the angle of depression.
        <i>By alternate interior angles, Angle of Depression from top = Angle of Elevation from bottom.</i></li>
      </ul>
      <p><b>Standard Height and Distance Relations:</b></p>
      <p>For a tower of height $h$ viewed from ground distance $d$:</p>
      $$\\mathbf{\\tan\\theta = \\frac{h}{d} \\implies h = d\\tan\\theta, \\quad d = \\frac{h}{\\tan\\theta}}$$
      <p>When the observer has height $e$ (eye level), the total object height is $H = e + d\\tan\\theta$.</p>`,
    statement_ml: `<p><b>മേൽക്കോണും കീഴ്ക്കോണും:</b></p>
      <ul>
        <li><b>മേൽക്കോൺ:</b> കണ്ണിൽ നിന്നുള്ള തിരശ്ചീന രേഖയ്ക്ക് മുകളിലുള്ള ഒരു വസ്തുവിലേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണാണ് മേൽക്കോൺ.</li>
        <li><b>കീഴ്ക്കോൺ:</b> തിരശ്ചീന രേഖയ്ക്ക് താഴെയുള്ള ഒരു വസ്തുവിലേക്ക് താഴോട്ട് നോക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണാണ് കീഴ്ക്കോൺ.
        <i>രണ്ട് സമാന്തര തിരശ്ചീന വരകളിലെ മറുകോണുകളായതിനാൽ, മുകളിൽ നിന്നുള്ള കീഴ്ക്കോൺ = താഴെ നിന്നുള്ള മേൽക്കോൺ.</i></li>
      </ul>
      <p><b>ഉയരവും ദൂരവും തമ്മിലുള്ള ബന്ധം:</b></p>
      <p>$d$ അകലെ നിന്ന് $h$ ഉയരമുള്ള ഒരു ഗോപുരത്തിന്റെ മുകളിലേക്ക് നോക്കുമ്പോൾ മേൽക്കോൺ $\\theta$ ആയാൽ:</p>
      $$\\mathbf{\\tan\\theta = \\frac{h}{d} \\implies h = d\\tan\\theta, \\quad d = \\frac{h}{\\tan\\theta}}$$
      <p>നിരീക്ഷകന്റെ കണ്ണിന്റെ ഉയരം $e$ പരിഗണിച്ചാൽ ആകെ ഉയരം $H = e + d\\tan\\theta$.</p>`,
    intuition_en: 'Trigonometry turns inaccessible heights (like trees, towers, cliffs, or mountains) into simple right triangles where ground distance and viewing angle give the height directly.',
    intuition_ml: 'നേരിട്ട് അളക്കാൻ കഴിയാത്ത മരങ്ങളുടെയും ടവറുകളുടെയും മലകളുടെയും ഉയരം ഭൂമിയിലെ ദൂരവും നോക്കുന്ന കോണും മാത്രം ഉപയോഗിച്ച് മട്ടത്രികോണങ്ങളിലൂടെ ലളിതമായി കണക്കാക്കാം.',
    proof: {
      idea_en: 'Right triangle modeling of horizontal and vertical lines.',
      idea_ml: 'തിരശ്ചീന രേഖയും ലംബ രേഖയും ചേർത്തുണ്ടാക്കുന്ന മട്ടത്രികോണ നിർമ്മിതി.',
      why_en: 'Gravity ensures the vertical tower is perpendicular to the horizontal ground, forming a 90° angle.',
      why_ml: 'ലംബമായ ഗോപുരം തിരശ്ചീന ഭൂമിയുമായി ഉണ്ടാക്കുന്ന കോൺ 90° ആയതിനാൽ മട്ടത്രികോണം രൂപപ്പെടുന്നു.',
      rungs: [
        {
          title_en: 'Horizontal Line Construction',
          title_ml: 'തിരശ്ചീന വര നിർമ്മാണം',
          detail_en: 'Let observer be at point $P$ at distance $d$ from foot of tower $B$. Tower is $AB \\perp PB$. Draw horizontal line through $P$ to base line.',
          detail_ml: 'ടവറിന്റെ ചുവട്ടിൽ നിന്ന് $d$ അകലെയുള്ള ബിന്ദുവാണ് $P$. ടവർ $AB \\perp PB$ ആയതിനാൽ $\\triangle ABP$ ഒരു മട്ടത്രികോണമാണ്.'
        },
        {
          title_en: 'Tangent Definition',
          title_ml: 'ടാൻജെന്റ് നിർവ്വചനം',
          detail_en: 'In right $\\triangle ABP$, $\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{AB}{PB} = \\frac{h}{d} \\implies h = d\\tan\\theta$.',
          detail_ml: 'മട്ടത്രികോണം $ABP$ ൽ $\\tan\\theta = \\frac{AB}{PB} = \\frac{h}{d} \\implies h = d\\tan\\theta$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Measuring angle of depression from the vertical wall instead of from the horizontal eye line.',
        fix_en: 'Angle of depression is ALWAYS measured between the line of sight and the HORIZONTAL line.'
      },
      {
        trap_en: 'Forgetting to add the observer’s eye height to the calculated height.',
        fix_en: 'When observer height is given (e.g., 1.5 m), total height = eye height + calculated vertical opposite side.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'കീഴ്ക്കോൺ തിരശ്ചീന വരയിൽ നിന്നല്ലാതെ ടവറിന്റെ ലംബവശത്തിൽ നിന്ന് അളക്കുന്നത്.',
        fix_ml: 'കീഴ്ക്കോൺ എപ്പോഴും കണ്ണിന്റെ തിരശ്ചീന രേഖയിൽ നിന്നാണ് അളക്കേണ്ടത്.'
      },
      {
        trap_ml: 'നിരീക്ഷകന്റെ ഉയരം കൂട്ടാൻ മറന്നുപോകുന്നത്.',
        fix_ml: 'നിരീക്ഷകന്റെ ഉയരം തന്നിട്ടുണ്ടെങ്കിൽ അന്തിമ ഉയരം കാണാൻ അത് കൂട്ടണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'From a point 30 m away from the foot of a tower, the angle of elevation of its top is 45°. What is the height of the tower?',
        a: 'h = d * tan 45° = 30 * 1 = 30 m.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു ഗോപുരത്തിന്റെ ചുവട്ടിൽ നിന്ന് 30 മീറ്റർ അകലെ നിന്നപ്പോൾ മുകളിലേക്കുള്ള മേൽക്കോൺ 45° ആണ്. ഗോപുരത്തിന്റെ ഉയരം എത്ര?',
        a: 'ഉയരം h = 30 * tan 45° = 30 * 1 = 30 മീറ്റർ.'
      }
    ]
  }
);
