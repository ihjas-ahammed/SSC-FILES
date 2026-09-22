/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 3: Mathematics of Chance (സാധ്യതകളുടെ ഗണിതം)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.3.1.probability-as-measure-of-chance',
    sec: '10.3.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Probability as a Measure of Chance',
    title_ml: 'സാധ്യത ഒരു സംഖ്യയായി',
    oneLine_en: 'Probability quantifies the likelihood of an event as the ratio of favourable outcomes to total equally likely outcomes: P(E) = n(E) / n(S).',
    oneLine_ml: 'ഒരു സംഭവം നടക്കാനുള്ള സാധ്യതയെ അളക്കുന്നത് ആകെ സമസാധ്യതയുള്ള ഫലങ്ങളിൽ അനുകൂല ഫലങ്ങളുടെ അനുപാതമായാണ്: P(E) = n(E) / n(S).',
    statement_en: `<p><b>Definition of Probability:</b></p>
      <p>When an experiment has a finite number of equally likely outcomes, the probability $P(E)$ of an event $E$ is defined as:</p>
      $$\\mathbf{P(E) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of possible outcomes}} = \\frac{n(E)}{n(S)}}$$
      <p><b>Fundamental Properties:</b></p>
      <ul>
        <li><b>Bounds:</b> For any event $E$, $0 \\le P(E) \\le 1$.</li>
        <li><b>Impossible Event:</b> If an event cannot happen, $n(E) = 0$, so $P(E) = 0$.</li>
        <li><b>Certain Event:</b> If an event is guaranteed to happen, $n(E) = n(S)$, so $P(E) = 1$.</li>
        <li><b>Equally Likely Outcomes:</b> Outcomes that have the exact same chance of occurring (e.g., each face of a fair die has probability $\\frac{1}{6}$).</li>
      </ul>`,
    statement_ml: `<p><b>സാധ്യതയുടെ നിർവ്വചനം:</b></p>
      <p>ഒരു പരീക്ഷണത്തിൽ തുല്യസാധ്യതയുള്ള നിശ്ചിത എണ്ണം ഫലങ്ങൾ ഉണ്ടാകുമ്പോൾ, ഒരു സംഭവം $E$ നടക്കാനുള്ള സാധ്യത $P(E)$ താഴെ പറയുന്ന വിധം കണക്കാക്കുന്നു:</p>
      $$\\mathbf{P(E) = \\frac{\\text{അനുകൂല ഫലങ്ങളുടെ എണ്ണം}}{\\text{സാധ്യമായ ആകെ ഫലങ്ങളുടെ എണ്ണം}} = \\frac{n(E)}{n(S)}}$$
      <p><b>അടിസ്ഥാന ഗുണങ്ങൾ:</b></p>
      <ul>
        <li><b>പരിധികൾ:</b> ഏതൊരു സംഭവത്തിനും സാധ്യത $0$ നും $1$ നും ഇടയിലായിരിക്കും: $0 \\le P(E) \\le 1$.</li>
        <li><b>അസാധ്യ സംഭവം:</b> ഒരിക്കലും നടക്കാത്ത സംഭവത്തിന്റെ സാധ്യത $0$ ആണ് ($P(E) = 0$).</li>
        <li><b>നിശ്ചയ സംഭവം:</b> തീർച്ചയായും സംഭവിക്കുന്ന കാര്യത്തിന്റെ സാധ്യത $1$ ആണ് ($P(E) = 1$).</li>
        <li><b>സമസാധ്യതയുള്ള ഫലങ്ങൾ:</b> ഓരോ ഫലത്തിനും വരാൻ തുല്യമായ അവസരമുള്ള പരീക്ഷണങ്ങളിലാണ് ഈ സൂത്രവാക്യം പ്രയോഗിക്കുന്നത്.</li>
      </ul>`,
    intuition_en: 'Probability expresses uncertainty on a scale from 0 (impossible) to 1 (absolute certainty). If a box has 6 green beads and 4 yellow beads, drawing a bead gives 10 equal possibilities; 6 are green, so the chance of green is 6/10 = 3/5.',
    intuition_ml: 'സാധ്യത എന്നത് സംഭവിക്കാൻ പോകുന്ന കാര്യത്തിന്റെ ഉറപ്പിനെ 0 മുതൽ 1 വരെയുള്ള ഒരു സംഖ്യയായി മാറ്റുന്ന രീതിയാണ്. ഒരു പെട്ടിയിൽ 6 പച്ചമുത്തുകളും 4 മഞ്ഞമുത്തുകളുമുണ്ടെങ്കിൽ ആകെ 10 മുത്തുകളുണ്ട്. അതിൽ പച്ച കിട്ടാനുള്ള സാധ്യത 6/10 അഥവാ 3/5 ആണ്.',
    proof: {
      idea_en: 'Deduce the probability formula from uniform measure across discrete symmetric sample spaces.',
      idea_ml: 'തുല്യസാധ്യതയുള്ള ഫലങ്ങളുടെ ഗണത്തിൽ നിന്ന് അനുപാത തത്വത്തിലൂടെ സാധ്യത സൂത്രവാക്യം രൂപീകരിക്കുന്നു.',
      why_en: 'When symmetry guarantees every single elementary outcome is equally likely, the measure of any compound event is simply the sum of the probabilities of its individual outcomes.',
      why_ml: 'ഓരോ ഫലത്തിനും തുല്യ അവസരമാണെന്നിരിക്കെ, ഒരു സംഭവത്തിലെ അനുകൂല ഘടകങ്ങളുടെ തുക ആകെ സാധ്യതയുടെ അംശമായി മാറുന്നു.',
      rungs: [
        {
          title_en: 'Partitioning the Sample Space',
          title_ml: 'സാമ്പിൾ സ്പേസിന്റെ വിഭജനം',
          detail_en: 'Let the sample space $S$ consist of $N$ mutually exclusive and equally likely atomic outcomes: $S = \\{e_1, e_2, \\dots, e_N\\}$. Since the total probability is $1$, each outcome has probability $P(e_i) = \\frac{1}{N}$.',
          detail_ml: 'ആകെ സാധ്യമായ ഫലങ്ങളുടെ ഗണം $S = \\{e_1, e_2, \\dots, e_N\\}$ ആകട്ടെ. ആകെ സാധ്യത 1 ആയതിനാലും ഓരോന്നും തുല്യമായതിനാലും ഓരോന്നിന്റെയും സാധ്യത $P(e_i) = \\frac{1}{N}$ ആണ്.'
        },
        {
          title_en: 'Summing Favourable Outcomes',
          title_ml: 'അനുകൂല ഫലങ്ങളുടെ സങ്കലനം',
          detail_en: 'An event $E$ is a subset of $S$ containing $k$ favourable outcomes. By the addition rule for disjoint events: $P(E) = \\sum_{e \\in E} P(e) = k \\times \\frac{1}{N} = \\frac{k}{N} = \\frac{n(E)}{n(S)}$.',
          detail_ml: 'സംഭവം $E$ യിൽ $k$ അനുകൂല ഫലങ്ങളുണ്ടെങ്കിൽ, അന്യോന്യ വിരുദ്ധ സംഭവങ്ങളുടെ തുക നിയമമനുസരിച്ച്: $P(E) = k \\times \\frac{1}{N} = \\frac{k}{N} = \\frac{n(E)}{n(S)}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Assuming outcomes are equally likely when conditions are biased or uneven.',
        fix_en: 'Always verify that each elementary outcome has identical physical likelihood before dividing counts.'
      },
      {
        trap_en: 'Thinking probability can be greater than 1 or negative.',
        fix_en: 'Probability must always lie in the interval [0, 1]. Ratios must have favourable count <= total count.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'ഫലങ്ങൾ തുല്യസാധ്യതയുള്ളവയല്ലെങ്കിലും വെറുതെ എണ്ണങ്ങൾ ഹരിക്കാമെന്ന് തെറ്റിദ്ധരിക്കൽ.',
        fix_ml: 'ഓരോ ഫലത്തിനും തുല്യ സാധ്യതയുണ്ടെന്ന് ഉറപ്പുവരുത്തിയ ശേഷം മാത്രമേ എണ്ണങ്ങൾ ഹരിക്കാൻ പാടുള്ളൂ.'
      },
      {
        trap_ml: 'സാധ്യത 1 ൽ കൂടുതലോ പൂജ്യത്തിൽ കുറവോ ആകുമെന്ന് കരുതുന്നത്.',
        fix_ml: 'സാധ്യത എപ്പോഴും 0 നും 1 നും ഇടയിലായിരിക്കും. അനുകൂല എണ്ണം ഒരിക്കലും ആകെ എണ്ണത്തേക്കാൾ വലുതാകില്ല.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'A box contains 7 red balls and 5 white balls. What is the probability of drawing a red ball?',
        a: 'Total balls = 7 + 5 = 12. Favourable red balls = 7. P(Red) = 7/12.'
      },
      {
        kind: 'apply',
        q: 'What is the sum of the probabilities of all possible elementary outcomes of an experiment?',
        a: 'The sum of probabilities of all elementary outcomes is always exactly 1.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു പെട്ടിയിൽ 7 ചുവന്ന പന്തുകളും 5 വെളുത്ത പന്തുകളുമുണ്ട്. ഇതിൽനിന്ന് ഒരു ചുവന്ന പന്ത് കിട്ടാനുള്ള സാധ്യത എത്ര?',
        a: 'ആകെ പന്തുകൾ = 7 + 5 = 12. ചുവന്ന പന്തുകൾ = 7. സാധ്യത = 7/12.'
      },
      {
        kind: 'apply',
        q: 'ഒരു പരീക്ഷണത്തിലെ സാധ്യമായ എല്ലാ അടിസ്ഥാന ഫലങ്ങളുടെയും സാധ്യതകളുടെ തുക എത്രയാണ്?',
        a: 'എല്ലാ അടിസ്ഥാന ഫലങ്ങളുടെയും സാധ്യതകളുടെ തുക എപ്പോഴും 1 ആയിരിക്കും.'
      }
    ]
  },
  {
    id: 'm10.3.2.geometric-probability',
    sec: '10.3.2',
    kind: 'concept',
    tier: 'core',
    title_en: 'Geometric Probability',
    title_ml: 'ജ്യാമിതീയ സാധ്യത',
    oneLine_en: 'When a point is chosen at random in a region, the probability that it falls in a specified subregion equals the ratio of the subregion area to the total area.',
    oneLine_ml: 'ഒരു ജ്യാമിതീയ രൂപത്തിൽ സമസാധ്യതയോടെ ഒരു ബിന്ദു അടയാളപ്പെടുത്തിയാൽ, അത് ഒരു പ്രത്യേക ഭാഗത്ത് വീഴാനുള്ള സാധ്യത ആ ഭാഗത്തിന്റെ പരപ്പളവും ആകെ പരപ്പളവും തമ്മിലുള്ള അനുപാതമാണ്.',
    statement_en: `<p><b>Geometric Probability Formula:</b></p>
      <p>If a geometric region $S$ contains a specified target subregion $A$, and a point is chosen uniformly at random within $S$, the probability of the point landing in $A$ is:</p>
      $$\\mathbf{P(\\text{Landing in } A) = \\frac{\\text{Area of region } A}{\\text{Area of total region } S}}$$
      <p><b>One-Dimensional Version (Lengths):</b></p>
      <p>If a point is chosen at random on a line segment of length $L$, the probability that it lies on a subsegment of length $l$ is $\\frac{l}{L}$.</p>
      <p><b>Classic SCERT Geometrical Configurations:</b></p>
      <ul>
        <li><b>Circle inside Square:</b> Square of side $2r$ with inscribed circle of radius $r$:
        $$P(\\text{inside circle}) = \\frac{\\pi r^2}{(2r)^2} = \\frac{\\pi}{4} \\approx 78.5\\%$$</li>
        <li><b>Square inside Circle:</b> Circle of radius $r$ with inscribed square of diagonal $2r$:
        $$P(\\text{inside square}) = \\frac{2r^2}{\\pi r^2} = \\frac{2}{\\pi} \\approx 63.7\\%$$</li>
        <li><b>Triangle Midpoint Subdivisions:</b> Joining midpoints of a triangle divides it into 4 equal triangles, each having probability $\\frac{1}{4}$.</li>
      </ul>`,
    statement_ml: `<p><b>ജ്യാമിതീയ സാധ്യതയുടെ സൂത്രവാക്യം:</b></p>
      <p>ഒരു വലിയ ജ്യാമിതീയ രൂപം $S$ നുള്ളിൽ ഒരു പ്രത്യേക ഭാഗം $A$ അടയാളപ്പെടുത്തിയിരിക്കുന്നു. കണ്ണടച്ച് ഒരു ബിന്ദു ഇട്ടാൽ അത് $A$ യിൽ വീഴാനുള്ള സാധ്യത:</p>
      $$\\mathbf{P(A \\text{ ൽ വീഴാനുള്ള സാധ്യത}) = \\frac{A \\text{ യുടെ പരപ്പളവ്}}{S \\text{ ന്റെ ആകെ പരപ്പളവ്}}}$$
      <p><b>രേഖാഖണ്ഡങ്ങളിലെ സാധ്യത:</b></p>
      <p>$L$ നീളമുള്ള ഒരു വരയിൽ സമസാധ്യതയോടെ ഒരു ബിന്ദു തിരഞ്ഞെടുത്താൽ, അത് $l$ നീളമുള്ള ഭാഗത്താകാനുള്ള സാധ്യത $\\frac{l}{L}$ ആണ്.</p>
      <p><b>പ്രധാന ജ്യാമിതീയ മാതൃകകൾ:</b></p>
      <ul>
        <li><b>സമചതുരത്തിലെ അന്തർവൃത്തം:</b> $2r$ വശമുള്ള സമചതുരത്തിൽ $r$ ആരമുള്ള വൃത്തം വരച്ചാൽ വൃത്തത്തിനുള്ളിൽ ബിന്ദു വീഴാനുള്ള സാധ്യത:
        $$P = \\frac{\\pi r^2}{(2r)^2} = \\frac{\\pi}{4}$$</li>
        <li><b>വൃത്തത്തിലെ സമചതുരം:</b> $r$ ആരമുള്ള വൃത്തത്തിൽ വരച്ച സമചതുരത്തിന്റെ വിസ്തീർണ്ണം $2r^2$ ആണ്. സമചതുരത്തിനുള്ളിൽ വീഴാനുള്ള സാധ്യത:
        $$P = \\frac{2r^2}{\\pi r^2} = \\frac{2}{\\pi}$$</li>
        <li><b>ത്രികോണത്തിലെ മധ്യബിന്ദുക്കൾ:</b> ഒരു ത്രികോണത്തിന്റെ വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ കിട്ടുന്ന 4 തുല്യ ത്രികോണങ്ങളിൽ ഒന്നിൽ വീഴാനുള്ള സാധ്യത $\\frac{1}{4}$ ആണ്.</li>
      </ul>`,
    intuition_en: 'In continuous geometric spaces, you cannot count points because there are infinitely many. Instead of counting individual points, we measure the size of the set: length for 1D, area for 2D, volume for 3D.',
    intuition_ml: 'ജ്യാമിതീയ രൂപങ്ങളിൽ എണ്ണാൻ കഴിയാത്തത്ര അനന്തമായ ബിന്ദുക്കളുണ്ട്. അതിനാൽ ഇവിടെ എണ്ണത്തിന് പകരം പരപ്പളവുകളുടെ (വിസ്തീർണ്ണങ്ങളുടെ) അനുപാതമാണ് സാധ്യതയായി കണക്കാക്കുന്നത്.',
    proof: {
      idea_en: 'Extend uniform probability density across continuous two-dimensional Euclidean domains.',
      idea_ml: 'തുല്യ സാന്ദ്രതയുള്ള പ്രതലങ്ങളിൽ വിസ്തീർണ്ണങ്ങളുടെ അനുപാതം വഴി സാധ്യത കണ്ടെത്തുന്നു.',
      why_en: 'Because every square unit of area has identical chance of containing the randomly chosen point.',
      why_ml: 'പ്രതലത്തിലെ എല്ലാ തുല്യ വിസ്തീർണ്ണമുള്ള ഭാഗങ്ങൾക്കും ബിന്ദു വീഴാൻ തുല്യ സാധ്യതയായതിനാൽ വിസ്തീർണ്ണാനുപാതം സാധുവാകുന്നു.',
      rungs: [
        {
          title_en: 'Uniform Probability Measure',
          title_ml: 'സമസാധ്യത അളവ്',
          detail_en: 'Let point $X$ be distributed uniformly over region $S$. The probability density function is $f(x, y) = \\frac{1}{\\text{Area}(S)}$ for $(x, y) \\in S$.',
          detail_ml: '$S$ എന്ന പ്രതലത്തിൽ സമസാധ്യതയോടെ ബിന്ദു തിരഞ്ഞെടുക്കുമ്പോൾ ഓരോ യൂണിറ്റ് പരപ്പളവിനും ലഭിക്കുന്ന സാധ്യത $\\frac{1}{\\text{Area}(S)}$ ആണ്.'
        },
        {
          title_en: 'Integration over Subregion',
          title_ml: 'ഉൾഭാഗത്തിന്റെ സങ്കലനം',
          detail_en: '$P(X \\in A) = \\iint_A f(x, y)\\,dA = \\frac{1}{\\text{Area}(S)} \\iint_A 1\\,dA = \\frac{\\text{Area}(A)}{\\text{Area}(S)}$.',
          detail_ml: 'അതുകൊണ്ട് $A$ യിൽ വീഴാനുള്ള സാധ്യത എന്നത് $A$ യുടെ പരപ്പളവിനെ ആകെ പരപ്പളവ് കൊണ്ട് ഹരിച്ചതിന് തുല്യമാകുന്നു: $\\frac{\\text{Area}(A)}{\\text{Area}(S)}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Confusing the perimeter ratio with the area ratio.',
        fix_en: 'Geometric probability in two-dimensional planar figures is strictly the ratio of areas, not perimeters.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'പരപ്പളവിന്റെ അനുപാതത്തിന് പകരം ചുറ്റളവിന്റെ അനുപാതം എടുക്കുന്നത്.',
        fix_ml: 'പ്രതലങ്ങളിൽ സാധ്യത കാണാൻ ചുറ്റളവല്ല, മറിച്ച് വിസ്തീർണ്ണങ്ങൾ (പരപ്പളവുകൾ) തമ്മിലാണ് ഹരിക്കേണ്ടത്.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'A circle is inscribed in a square. What is the probability that a randomly placed dot falls outside the circle but inside the square?',
        a: 'P(outside circle) = 1 - P(inside circle) = 1 - (pi/4) = (4 - pi)/4.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു സമചതുരത്തിനുള്ളിൽ ഒരു വൃത്തം വരച്ചിരിക്കുന്നു. സമചതുരത്തിനുള്ളിലിടുന്ന ഒരു ബിന്ദു വൃത്തത്തിന് പുറത്താകാനുള്ള സാധ്യത എത്ര?',
        a: 'സാധ്യത = 1 - (വൃത്തത്തിനുള്ളിലാകാനുള്ള സാധ്യത) = 1 - (pi/4) = (4 - pi)/4.'
      }
    ]
  },
  {
    id: 'm10.3.3.pairs-of-events-and-product-rule',
    sec: '10.3.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Pairs of Events & Systematic Tabulation',
    title_ml: 'ജോഡി പരീക്ഷണങ്ങളിലെ സാധ്യത',
    oneLine_en: 'When two independent selections are made, the total number of pair outcomes is the product of individual possibilities: n(S) = n(A) x n(B).',
    oneLine_ml: 'രണ്ട് വ്യത്യസ്ത തിരഞ്ഞെടുപ്പുകൾ നടത്തുമ്പോൾ ഉണ്ടാകുന്ന ആകെ ജോഡി ഫലങ്ങളുടെ എണ്ണം അവയുടെ ഓരോന്നിന്റെയും ഫലങ്ങളുടെ ഗുണനഫലമാണ്: n(S) = n(A) x n(B).',
    statement_en: `<p><b>Fundamental Counting Principle for Pairs:</b></p>
      <p>If the first action can result in $m$ different outcomes and the second independent action can result in $n$ different outcomes, then the pair of actions together has:</p>
      $$\\mathbf{n(S) = m \\times n \\text{ possible outcomes}}$$
      <p><b>Two Dice / Two Boxes:</b></p>
      <ul>
        <li><b>Rolling Two Standard Dice:</b> First die has 6 outcomes, second has 6 outcomes. Total outcomes $= 6 \\times 6 = 36$.
        Each pair $(a, b)$ where $a, b \\in \\{1, 2, 3, 4, 5, 6\\}$ has probability $\\frac{1}{36}$.</li>
        <li><b>Two Boxes with Beads:</b> If Box 1 has $b_1$ black and $w_1$ white beads (total $N_1$), and Box 2 has $b_2$ black and $w_2$ white beads (total $N_2$), total pairs $= N_1 \\times N_2$.
        $$\\text{Both Black: } n = b_1 \\times b_2 \\implies P(\\text{both black}) = \\frac{b_1 b_2}{N_1 N_2}$$
        $$\\text{Both White: } n = w_1 \\times w_2 \\implies P(\\text{both white}) = \\frac{w_1 w_2}{N_1 N_2}$$
        $$\\text{One Black, One White: } n = b_1 w_2 + w_1 b_2 \\implies P = \\frac{b_1 w_2 + w_1 b_2}{N_1 N_2}$$</li>
      </ul>`,
    statement_ml: `<p><b>ജോഡികളുടെ എണ്ണൽ തത്വം:</b></p>
      <p>ആദ്യത്തെ തിരഞ്ഞെടുപ്പിൽ $m$ ഫലങ്ങളും രണ്ടാമത്തേതിൽ $n$ ഫലങ്ങളും സാധ്യമാണെങ്കിൽ, രണ്ടു തിരഞ്ഞെടുപ്പുകളിലും കൂടി സാധ്യമായ ആകെ ജോഡി ഫലങ്ങളുടെ എണ്ണം:</p>
      $$\\mathbf{n(S) = m \\times n}$$
      <p><b>രണ്ട് പെട്ടികളിൽ നിന്നുള്ള തിരഞ്ഞെടുപ്പ്:</b></p>
      <ul>
        <li><b>രണ്ട് ഡൈസ് എറിയുമ്പോൾ:</b> ആകെ ഫലങ്ങൾ $= 6 \\times 6 = 36$. ഓരോ ജോഡിക്കും സാധ്യത $\\frac{1}{36}$.</li>
        <li><b>മുത്തുകൾ അടങ്ങിയ രണ്ട് പെട്ടികൾ:</b> ഒന്നാം പെട്ടിയിൽ $N_1$ മുത്തുകളും (അതിൽ $b_1$ കറുപ്പ്, $w_1$ വെളുപ്പ്), രണ്ടാം പെട്ടിയിൽ $N_2$ മുത്തുകളും ($b_2$ കറുപ്പ്, $w_2$ വെളുപ്പ്) ഉണ്ടെങ്കിൽ:
        $$\\text{ആകെ ജോഡികൾ } = N_1 \\times N_2$$
        $$\\text{രണ്ടും കറുപ്പാകാനുള്ള സാധ്യത: } P(\\text{രണ്ടും കറുപ്പ്}) = \\frac{b_1 \\times b_2}{N_1 \\times N_2}$$
        $$\\text{ഒന്ന് കറുപ്പും ഒന്ന് വെളുപ്പും ആകാൻ: } P = \\frac{b_1 w_2 + w_1 b_2}{N_1 \\times N_2}$$</li>
      </ul>`,
    intuition_en: 'To avoid missing or double-counting pairs, arrange the outcomes into a two-dimensional grid or table with rows representing outcomes of the first choice and columns representing outcomes of the second choice.',
    intuition_ml: 'ജോഡികൾ എണ്ണുമ്പോൾ വിട്ടുപോകാതിരിക്കാൻ ആദ്യത്തെ തിരഞ്ഞെടുപ്പ് വരികളായും രണ്ടാമത്തെ തിരഞ്ഞെടുപ്പ് നിരകളായും പട്ടികപ്പെടുത്തി ജോഡികൾ കണ്ടെത്തുക.',
    proof: {
      idea_en: 'Show that Cartesian product of sets governs compound independent trials.',
      idea_ml: 'ഗണിതത്തിലെ കാർട്ടീഷ്യൻ ഗുണനഫലത്തിലൂടെ ആകെ ഫലങ്ങളുടെ എണ്ണം കണ്ടെത്തുന്നു.',
      why_en: 'Every outcome in set A pairs with every outcome in set B uniquely.',
      why_ml: 'A യിലെ ഓരോ ഫലത്തിനും B യിലെ ഓരോ ഫലവുമായും ചേരാൻ തുല്യ അവസരമുള്ളതിനാലാണിത്.',
      rungs: [
        {
          title_en: 'Cartesian Product Cardinality',
          title_ml: 'കാർട്ടീഷ്യൻ ഗുണനഫലത്തിലെ എണ്ണം',
          detail_en: 'Sample space $S = A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$. If $|A| = m$ and $|B| = n$, then $|S| = |A| \\times |B| = mn$.',
          detail_ml: 'ആദ്യ ഗണം $A$ യിൽ $m$ അംഗങ്ങളും രണ്ടാമത്തെ ഗണം $B$ യിൽ $n$ അംഗങ്ങളുമുണ്ടെങ്കിൽ, ജോഡികളുടെ ഗണമായ $A \\times B$ യിൽ $m \\times n$ അംഗങ്ങളുണ്ടാകും.'
        },
        {
          title_en: 'Favourable Pairs Calculation',
          title_ml: 'അനുകൂല ജോഡികളുടെ കണക്കാക്കൽ',
          detail_en: 'For independent selections, favourable pairs form a subset of size $k$. The probability is simply $\\frac{k}{mn}$.',
          detail_ml: 'നിബന്ധന തൃപ്തിപ്പെടുത്തുന്ന അനുകൂല ജോഡികളുടെ എണ്ണം $k$ ആയാൽ, സാധ്യത $\\frac{k}{mn}$ ആയിരിക്കും.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Adding possibilities instead of multiplying them: thinking total is m + n instead of m * n.',
        fix_en: 'When events occur together or sequentially in pairs, always MULTIPLY the counts of possibilities.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'ജോഡികൾ കാണുമ്പോൾ ഗുണിക്കുന്നതിന് പകരം കൂട്ടുന്നത്: $m \\times n$ ന് പകരം $m + n$ എന്ന് തെറ്റായി കരുതൽ.',
        fix_ml: 'രണ്ട് കാര്യങ്ങൾ ഒരുമിച്ച് നടക്കുമ്പോഴുണ്ടാകുന്ന ജോഡികളുടെ എണ്ണം കാണാൻ എപ്പോഴും ഗുണിക്കുക.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Two coins are tossed simultaneously. What is the probability of getting at least one head?',
        a: 'Outcomes = {HH, HT, TH, TT}, total = 4. Favourable = {HH, HT, TH} (3). Probability = 3/4.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'രണ്ട് നാണയങ്ങൾ ഒരുമിച്ച് ടോസ് ചെയ്യുന്നു. ചുരുങ്ങിയത് ഒരു തല (Head) എങ്കിലും കിട്ടാനുള്ള സാധ്യത എത്ര?',
        a: 'ആകെ ഫലങ്ങൾ = {HH, HT, TH, TT} (4 എണ്ണം). അനുകൂല ഫലങ്ങൾ = {HH, HT, TH} (3 എണ്ണം). സാധ്യത = 3/4.'
      }
    ]
  },
  {
    id: 'm10.3.4.complementary-events-and-applications',
    sec: '10.3.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Complementary Events & Practical Probability',
    title_ml: 'പൂരക സംഭവങ്ങളും പ്രായോഗിക സാധ്യതകളും',
    oneLine_en: 'The probability that an event does NOT happen is 1 minus the probability that it does happen: P = 1 - P(E).',
    oneLine_ml: 'ഒരു സംഭവം നടക്കാതിരിക്കാനുള്ള സാധ്യത എന്നത് 1 ൽ നിന്ന് അത് നടക്കാനുള്ള സാധ്യത കുറച്ചതാണ്: P = 1 - P(E).',
    statement_en: `<p><b>Rule of Complementary Events:</b></p>
      <p>For any event $E$, the complement event $E'$ (or "not $E$") consists of all outcomes in the sample space that are not in $E$. The sum of their probabilities is always 1:</p>
      $$\\mathbf{P(E) + P(E') = 1 \\implies P(E') = 1 - P(E)}$$
      <p><b>Practical Problem Solving Strategies:</b></p>
      <ul>
        <li><b>"At Least One" Rule:</b> To find the probability of "at least one success", compute:
        $$P(\\text{at least one}) = 1 - P(\\text{none})$$
        This is significantly faster than calculating individual combinations.</li>
        <li><b>Two-Digit Numbers:</b> Total 2-digit numbers $= 99 - 10 + 1 = 90$ (from 10 to 99).
        Multiples of 5 in this range $= 18$. $P(\\text{multiple of 5}) = \\frac{18}{90} = \\frac{1}{5}$.</li>
        <li><b>Calendar / Birthday Problems:</b> In a non-leap year of 365 days (52 weeks + 1 day), the probability of 53 Sundays is $\\frac{1}{7}$. In a leap year of 366 days (52 weeks + 2 days), the probability of 53 Sundays is $\\frac{2}{7}$.</li>
      </ul>`,
    statement_ml: `<p><b>പൂരക സംഭവങ്ങളുടെ നിയമം:</b></p>
      <p>ഒരു സംഭവം $E$ നടക്കാതിരിക്കുക എന്ന പൂരക സംഭവത്തെ $E'$ എന്ന് സൂചിപ്പിച്ചാൽ, അവയുടെ സാധ്യതകളുടെ തുക എപ്പോഴും 1 ആയിരിക്കും:</p>
      $$\\mathbf{P(E) + P(E') = 1 \\implies P(E') = 1 - P(E)}$$
      <p><b>പ്രായോഗിക പ്രശ്നങ്ങൾക്കുള്ള രീതികൾ:</b></p>
      <ul>
        <li><b>'ചുരുങ്ങിയത് ഒന്ന്' എന്ന പ്രശ്നം:</b> ചുരുങ്ങിയത് ഒന്നിലെങ്കിലും ജയിക്കാനുള്ള സാധ്യത കാണാൻ:
        $$P(\\text{ചുരുങ്ങിയത് ഒന്ന്}) = 1 - P(\\text{ഒന്നും സംഭവിക്കാതിരിക്കൽ})$$</li>
        <li><b>രണ്ടക്ക സംഖ്യകളിലെ സാധ്യത:</b> ആകെയുള്ള രണ്ടക്ക സംഖ്യകൾ $= 10$ മുതൽ $99$ വരെ $= 90$ എണ്ണം.
        ഇവയിൽ 5 ന്റെ ഗുണിതങ്ങൾ 18 എണ്ണം. സാധ്യത $= \\frac{18}{90} = \\frac{1}{5}$.</li>
        <li><b>വർഷങ്ങളിലെ ഞായറാഴ്ചകൾ:</b> സാധാരണ വർഷത്തിലെ 365 ദിവസങ്ങളിൽ 52 ആഴ്ചകളും 1 അധിക ദിവസവുമാണുള്ളത്. അതിനാൽ 53 ഞായറാഴ്ചകൾ വരാനുള്ള സാധ്യത $\\frac{1}{7}$ ആണ്. അധിവർഷത്തിൽ 2 അധിക ദിവസങ്ങളുള്ളതിനാൽ സാധ്യത $\\frac{2}{7}$ ആണ്.</li>
      </ul>`,
    intuition_en: 'Often it is far easier to calculate the probability that something DOES NOT happen and subtract from 1, than to directly sum many different winning conditions.',
    intuition_ml: 'പല വ്യവസ്ഥകൾ വെവ്വേറെ കൂട്ടി സാധ്യത കാണുന്നതിനേക്കാൾ വളരെ എളുപ്പമാണ് അത് നടക്കാതിരിക്കാനുള്ള സാധ്യത കണ്ട് 1 ൽ നിന്ന് കുറയ്ക്കുന്നത്.',
    proof: {
      idea_en: 'Partition sample space into event E and its complement E prime.',
      idea_ml: 'സാമ്പിൾ സ്പേസിനെ സംഭവവും അതിന്റെ പൂരകവുമായി വിഭജിക്കുന്നു.',
      why_en: 'E and E prime are mutually exclusive and together form the entire sample space S.',
      why_ml: 'ഇവ രണ്ടും ഒന്നിച്ച് ചേരുമ്പോൾ ആകെ സാമ്പിൾ സ്പേസ് ലഭിക്കുകയും അവയ്ക്കിടയിൽ പൊതുവായ ഘടകങ്ങൾ ഇല്ലാതിരിക്കുകയും ചെയ്യുന്നു.',
      rungs: [
        {
          title_en: 'Disjoint Union of Sample Space',
          title_ml: 'സാമ്പിൾ സ്പേസിന്റെ വിഭജനം',
          detail_en: '$E \\cup E\' = S$ and $E \\cap E\' = \\emptyset$. By the axiom of probability: $P(S) = P(E \\cup E\') = P(E) + P(E\')$.',
          detail_ml: '$E$ യും $E\'$ ഉം ചേരുമ്പോൾ ആകെ ഗണം $S$ ലഭിക്കുന്നു. പൊതുവായി ഒന്നുമില്ലാത്തതിനാൽ: $P(E) + P(E\') = P(S) = 1$.'
        },
        {
          title_en: 'Complement Formula',
          title_ml: 'പൂരക സൂത്രവാക്യം',
          detail_en: 'Since $P(S) = 1$, subtracting $P(E)$ from both sides gives $P(E\') = 1 - P(E)$.',
          detail_ml: 'ആകെ സാധ്യത 1 ആയതിനാൽ ഇരുവശത്തുനിന്നും $P(E)$ കുറച്ചാൽ $P(E\') = 1 - P(E)$ എന്ന് ലഭിക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Counting the number of 2-digit numbers as 99 - 10 = 89 instead of 90.',
        fix_en: 'The number of integers from a to b inclusive is always b - a + 1. For 10 to 99, it is 99 - 10 + 1 = 90.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'രണ്ടക്ക സംഖ്യകളുടെ ആകെ എണ്ണം 99 - 10 = 89 എന്ന് തെറ്റായി കണക്കാക്കുന്നത്.',
        fix_ml: '10 മുതൽ 99 വരെയുള്ള സംഖ്യകളുടെ എണ്ണം കാണുമ്പോൾ 10 ഉൾപ്പെടെയുള്ളതിനാൽ $99 - 10 + 1 = 90$ എന്ന് എടുക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'The probability that an archer hits a target is 0.72. What is the probability that they miss the target?',
        a: 'P(miss) = 1 - P(hit) = 1 - 0.72 = 0.28.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു അമ്പെയ്ത്തുകാരൻ ലക്ഷ്യത്തിൽ അമ്പു കൊള്ളിക്കാനുള്ള സാധ്യത 0.72 ആണ്. ലക്ഷ്യം തെറ്റാനുള്ള സാധ്യത എത്ര?',
        a: 'സാധ്യത = 1 - 0.72 = 0.28.'
      }
    ]
  }
);
