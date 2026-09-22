/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 1: Area (പരപ്പളവ്)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.1.1 Triangles on Same Base Between Parallel Lines
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.1.1',
    concept: 'm9.1.1.triangles-same-base-parallels',
    sec: '9.1.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two triangles share the same base of length $10\\text{ cm}$ and lie between two parallel lines that are $6\\text{ cm}$ apart. What is the area of each triangle?',
    prompt_ml: '$10\\text{ cm}$ നീളമുള്ള ഒരേ പാദവും $6\\text{ cm}$ അകലത്തിലുള്ള രണ്ട് സമാന്തരവരകൾക്കിടയിലുമുള്ള രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവ് എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$30\\text{ cm}^2$' },
      { k: 'B', t: '$60\\text{ cm}^2$' },
      { k: 'C', t: '$15\\text{ cm}^2$' },
      { k: 'D', t: '$45\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$30\\text{ cm}^2$' },
      { k: 'B', t: '$60\\text{ cm}^2$' },
      { k: 'C', t: '$15\\text{ cm}^2$' },
      { k: 'D', t: '$45\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 10 \\times 6 = 30\\text{ cm}^2$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 10 \\times 6 = 30\\text{ cm}^2$.',
    tested_en: 'Area of triangle between parallel lines.',
    tested_ml: 'സമാന്തരവരകൾക്കിടയിലെ ത്രികോണ പരപ്പളവ്.'
  },
  {
    id: 'obj.m9.1.2',
    concept: 'm9.1.1.triangles-same-base-parallels',
    sec: '9.1.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, vertex $A$ is slid along a line parallel to base $BC$ to a new position $A\'$. Which of the following quantities remains unchanged?',
    prompt_ml: '$\\triangle ABC$-ൽ $A$ എന്ന ശീർഷത്തെ പാദമായ $BC$-ക്ക് സമാന്തരമായ വരയിലൂടെ $A\'$ എന്ന ബിന്ദുവിലേക്ക് നീക്കുന്നു. താഴെ പറയുന്നവയിൽ മാറ്റമില്ലാതെ തുടരുന്നത് ഏതാണ്?',
    options_en: [
      { k: 'A', t: 'Area of the triangle' },
      { k: 'B', t: 'Perimeter of the triangle' },
      { k: 'C', t: 'Length of side AB' },
      { k: 'D', t: 'Measure of angle A' }
    ],
    options_ml: [
      { k: 'A', t: 'ത്രികോണത്തിന്റെ പരപ്പളവ്' },
      { k: 'B', t: 'ത്രികോണത്തിന്റെ ചുറ്റളവ്' },
      { k: 'C', t: 'AB എന്ന വശത്തിന്റെ നീളം' },
      { k: 'D', t: 'A എന്ന കോണിന്റെ അളവ്' }
    ],
    answer: 'A',
    solution_en: 'Since base $BC$ and perpendicular height between parallel lines remain constant, the area remains strictly constant.',
    solution_ml: 'പാദവും സമാന്തരവരകൾ തമ്മിലുള്ള ലംബ ഉയരവും മാറാത്തതിനാൽ പരപ്പളവ് മാറ്റമില്ലാതെ തുടരുന്നു.',
    tested_en: 'Invariance of triangle area under parallel shearing.',
    tested_ml: 'സമാന്തരവരയിലൂടെ ശീർഷം നീക്കുമ്പോഴുള്ള പരപ്പളവ് സ്ഥിരത.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.1.2 Triangles with Same Height & Area-Base Proportionality
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.1.3',
    concept: 'm9.1.2.triangles-same-height-base-split',
    sec: '9.1.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, point $D$ lies on base $BC$ such that $BD : DC = 3 : 2$. If the total area of $\\triangle ABC$ is $50\\text{ cm}^2$, what is the area of $\\triangle ABD$?',
    prompt_ml: '$\\triangle ABC$-ൽ $BC$ എന്ന പാദത്തിലെ ബിന്ദുവാണ് $D$; $BD : DC = 3 : 2$ ആണ്. $\\triangle ABC$-യുടെ ആകെ പരപ്പളവ് $50\\text{ cm}^2$ ആയാൽ $\\triangle ABD$-യുടെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$30\\text{ cm}^2$' },
      { k: 'B', t: '$20\\text{ cm}^2$' },
      { k: 'C', t: '$25\\text{ cm}^2$' },
      { k: 'D', t: '$35\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$30\\text{ cm}^2$' },
      { k: 'B', t: '$20\\text{ cm}^2$' },
      { k: 'C', t: '$25\\text{ cm}^2$' },
      { k: 'D', t: '$35\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: 'Total parts $= 3 + 2 = 5$. Since both triangles share the same height from $A$, $\\text{Area}(\\triangle ABD) = \\frac{3}{5} \\times 50 = 30\\text{ cm}^2$.',
    solution_ml: 'ആകെ ഭാഗങ്ങൾ $= 3 + 2 = 5$. തുല്യ ഉയരമായതിനാൽ പരപ്പളവുകളുടെ അംശബന്ധം പാദങ്ങളുടെ അംശബന്ധമാണ്: $\\text{Area}(\\triangle ABD) = \\frac{3}{5} \\times 50 = 30\\text{ cm}^2$.',
    tested_en: 'Area division by base ratio.',
    tested_ml: 'പാദത്തിന്റെ അംശബന്ധത്തിൽ പരപ്പളവ് ഭാഗിക്കൽ.'
  },
  {
    id: 'obj.m9.1.4',
    concept: 'm9.1.2.triangles-same-height-base-split',
    sec: '9.1.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A median of a triangle connects a vertex to the midpoint of the opposite side. What is the ratio into which it divides the area of the triangle?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ മധ്യരേഖ അതിന്റെ പരപ്പളവിനെ ഏത് അംശബന്ധത്തിലാണ് ഭാഗിക്കുന്നത്?',
    options_en: [
      { k: 'A', t: '$1 : 1$' },
      { k: 'B', t: '$1 : 2$' },
      { k: 'C', t: '$2 : 1$' },
      { k: 'D', t: '$1 : 3$' }
    ],
    options_ml: [
      { k: 'A', t: '$1 : 1$' },
      { k: 'B', t: '$1 : 2$' },
      { k: 'C', t: '$2 : 1$' },
      { k: 'D', t: '$1 : 3$' }
    ],
    answer: 'A',
    solution_en: 'Since the midpoint divides the base into two equal segments ($1 : 1$), the areas of the two triangles formed are in the ratio $1 : 1$.',
    solution_ml: 'മധ്യബിന്ദു പാദത്തെ തുല്യമായി ($1 : 1$) ഭാഗിക്കുന്നതിനാൽ രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധവും $1 : 1$ ആണ്.',
    tested_en: 'Property of a triangle median dividing area equally.',
    tested_ml: 'മധ്യരേഖ പരപ്പളവിനെ പകുതിയാക്കുന്ന സ്വഭാവം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.1.3 Transforming Quadrilaterals
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.1.5',
    concept: 'm9.1.3.transforming-quadrilaterals',
    sec: '9.1.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'When transforming a quadrilateral $ABCD$ into a triangle of equal area with base along $AB$, through which vertex is a line drawn parallel to diagonal $AC$?',
    prompt_ml: 'ചതുർഭുജം $ABCD$-യെ $AB$ പാദമായുള്ള തുല്യ പരപ്പളവുള്ള ത്രികോണമാക്കി മാറ്റുമ്പോൾ, വികർണ്ണം $AC$-ക്ക് സമാന്തരമായി ഏത് ശീർഷത്തിലൂടെയാണ് വര വരയ്ക്കുന്നത്?',
    options_en: [
      { k: 'A', t: 'Vertex D' },
      { k: 'B', t: 'Vertex B' },
      { k: 'C', t: 'Vertex C' },
      { k: 'D', t: 'Midpoint of AB' }
    ],
    options_ml: [
      { k: 'A', t: 'D എന്ന ശീർഷത്തിലൂടെ' },
      { k: 'B', t: 'B എന്ന ശീർഷത്തിലൂടെ' },
      { k: 'C', t: 'C എന്ന ശീർഷത്തിലൂടെ' },
      { k: 'D', t: 'AB-യുടെ മധ്യബിന്ദുവിലൂടെ' }
    ],
    answer: 'A',
    solution_en: 'A line is drawn through vertex $D$ parallel to diagonal $AC$ to intersect extended $AB$ at $E$, creating triangle $ACE$ equal in area to triangle $ACD$.',
    solution_ml: '$D$ എന്ന ശീർഷത്തിലൂടെ വികർണ്ണം $AC$-ക്ക് സമാന്തരമായി വരയ്ക്കുന്ന വര $AB$ നീട്ടിയതിനെ $E$-ൽ മുട്ടിക്കുന്നു.',
    tested_en: 'Steps in transforming a quadrilateral into a triangle.',
    tested_ml: 'ചതുർഭുജത്തെ ത്രികോണമാക്കുന്ന രീതി.'
  },
  {
    id: 'obj.m9.1.6',
    concept: 'm9.1.3.transforming-quadrilaterals',
    sec: '9.1.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A quadrilateral of area $72\\text{ cm}^2$ is converted into an equivalent triangle of equal area. If the base of the transformed triangle is $16\\text{ cm}$, what is its altitude?',
    prompt_ml: 'പരപ്പളവ് $72\\text{ cm}^2$ ആയ ഒരു ചതുർഭുജത്തെ അതേ പരപ്പളവുള്ള ത്രികോണമാക്കി മാറ്റി. ആ ത്രികോണത്തിന്റെ പാദം $16\\text{ cm}$ ആയാൽ അതിന്റെ ലംബ ഉയരം എത്ര?',
    options_en: [
      { k: 'A', t: '$9\\text{ cm}$' },
      { k: 'B', t: '$4.5\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$9\\text{ cm}$' },
      { k: 'B', t: '$4.5\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \\frac{1}{2} b h \\implies 72 = \\frac{1}{2} \\times 16 \\times h = 8h \\implies h = \\frac{72}{8} = 9\\text{ cm}$.',
    solution_ml: '$\\frac{1}{2} \\times 16 \\times h = 72 \\implies 8h = 72 \\implies h = \\frac{72}{8} = 9\\text{ cm}$.',
    tested_en: 'Finding height from transformed triangle area.',
    tested_ml: 'ത്രികോണ പരപ്പളവിൽ നിന്ന് ഉയരം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.1.4 Trapezium Diagonals & Land Division
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.1.7',
    concept: 'm9.1.4.trapezium-and-land-division',
    sec: '9.1.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In trapezium $ABCD$ with $AB \\parallel CD$, the diagonals intersect at $O$. If the area of $\\triangle AOD$ is $18\\text{ cm}^2$, what is the area of $\\triangle BOC$?',
    prompt_ml: '$AB \\parallel CD$ ആയ ലംബകം $ABCD$-യിലെ വികർണ്ണങ്ങൾ $O$-ൽ ഖണ്ഡിക്കുന്നു. $\\triangle AOD$-യുടെ പരപ്പളവ് $18\\text{ cm}^2$ ആയാൽ $\\triangle BOC$-യുടെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$18\\text{ cm}^2$' },
      { k: 'B', t: '$36\\text{ cm}^2$' },
      { k: 'C', t: '$9\\text{ cm}^2$' },
      { k: 'D', t: '$24\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$18\\text{ cm}^2$' },
      { k: 'B', t: '$36\\text{ cm}^2$' },
      { k: 'C', t: '$9\\text{ cm}^2$' },
      { k: 'D', t: '$24\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: 'In any trapezium, the two triangles adjacent to the non-parallel sides have strictly equal areas: $\\text{Area}(\\triangle BOC) = \\text{Area}(\\triangle AOD) = 18\\text{ cm}^2$.',
    solution_ml: 'ഏതൊരു ലംബകത്തിലും സമാന്തരമല്ലാത്ത വശങ്ങളോട് ചേർന്ന രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവ് തുല്യമാണ്: $\\text{Area}(\\triangle BOC) = 18\\text{ cm}^2$.',
    tested_en: 'Equality of non-parallel side triangles in a trapezium.',
    tested_ml: 'ലംബകത്തിലെ വികർണ്ണങ്ങൾ ഉണ്ടാക്കുന്ന പാർശ്വത്രികോണങ്ങളുടെ തുല്യത.'
  },
  {
    id: 'obj.m9.1.8',
    concept: 'm9.1.4.trapezium-and-land-division',
    sec: '9.1.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In trapezium $ABCD$ ($AB \\parallel CD$), diagonals intersect at $O$. Given $\\text{Area}(\\triangle COD) = 16\\text{ cm}^2$ and $\\text{Area}(\\triangle ADC) = 40\\text{ cm}^2$, what is $\\text{Area}(\\triangle BOC)$?',
    prompt_ml: '$AB \\parallel CD$ ആയ ലംബകം $ABCD$-യിൽ വികർണ്ണങ്ങൾ $O$-ൽ മുട്ടുന്നു. $\\text{Area}(\\triangle COD) = 16\\text{ cm}^2$, $\\text{Area}(\\triangle ADC) = 40\\text{ cm}^2$ ആയാൽ $\\text{Area}(\\triangle BOC)$ എത്ര?',
    options_en: [
      { k: 'A', t: '$24\\text{ cm}^2$' },
      { k: 'B', t: '$20\\text{ cm}^2$' },
      { k: 'C', t: '$16\\text{ cm}^2$' },
      { k: 'D', t: '$28\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$24\\text{ cm}^2$' },
      { k: 'B', t: '$20\\text{ cm}^2$' },
      { k: 'C', t: '$16\\text{ cm}^2$' },
      { k: 'D', t: '$28\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle ADC) - \\text{Area}(\\triangle COD) = 40 - 16 = 24\\text{ cm}^2$. Since $\\text{Area}(\\triangle BOC) = \\text{Area}(\\triangle AOD)$, $\\text{Area}(\\triangle BOC) = 24\\text{ cm}^2$.',
    solution_ml: '$\\text{Area}(\\triangle AOD) = 40 - 16 = 24\\text{ cm}^2$. $\\text{Area}(\\triangle BOC) = \\text{Area}(\\triangle AOD) = 24\\text{ cm}^2$.',
    tested_en: 'Computing triangle area in trapezium using decomposition.',
    tested_ml: 'ലംബകത്തിലെ ത്രികോണ പരപ്പളവ് കണ്ടെത്തൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.1.1',
    sec: '9.1.1',
    concept: 'm9.1.1.triangles-same-base-parallels',
    title_en: 'Geometric Proof of Equal Area for Triangles Between Parallels',
    title_ml: 'സമാന്തരവരകൾക്കിടയിലെ ത്രികോണങ്ങളുടെ പരപ്പളവ് തുല്യമാണെന്ന് തെളിയിക്കൽ',
    prompt_en: '<p>Prove that two triangles having the same base and lying between the same parallel lines have equal area. If the common base is $8\\text{ cm}$ and the perpendicular distance between the parallel lines is $4.5\\text{ cm}$, calculate the numerical area of the triangles.</p>',
    prompt_ml: '<p>ഒരേ പാദവും ഒരേ സമാന്തരവരകൾക്കിടയിലുമുള്ള രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ തുല്യമാണെന്ന് തെളിയിക്കുക. പൊതുവായ പാദം $8\\text{ cm}$-ഉം സമാന്തരവരകൾ തമ്മിലുള്ള ലംബദൂരം $4.5\\text{ cm}$-ഉം ആയാൽ ത്രികോണങ്ങളുടെ പരപ്പളവ് കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{1. Proof of Equal Area:}$$
$$\\text{Let } \\triangle ABC \\text{ and } \\triangle ABD \\text{ share the common base } AB = b.$$
$$\\text{Let } CD \\parallel AB, \\text{ so vertices } C \\text{ and } D \\text{ lie on a line parallel to } AB.$$
$$\\text{Let the perpendicular distance between the two parallel lines be } h.$$

$$\\text{Altitude of } \\triangle ABC = h, \\quad \\text{Altitude of } \\triangle ABD = h.$$
$$\\text{Area}(\\triangle ABC) = \\frac{1}{2} \\times b \\times h$$
$$\\text{Area}(\\triangle ABD) = \\frac{1}{2} \\times b \\times h$$
$$\\implies \\mathbf{\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ABD)}.$$

$$\\text{2. Numerical Calculation:}$$
$$b = 8\\text{ cm}, \\quad h = 4.5\\text{ cm}$$
$$\\text{Area} = \\frac{1}{2} \\times 8 \\times 4.5 = 4 \\times 4.5 = \\mathbf{18\\text{ cm}^2}.$$`,
    solution_ml: `$$\\text{1. തെളിവ്:}$$
$$\\triangle ABC, \\triangle ABD \\text{ എന്നീ രണ്ട് ത്രികോണങ്ങൾക്ക് } AB = b \\text{ എന്ന ഒരേ പാദമാണുള്ളത്.}$$
$$CD \\parallel AB \\text{ ആയതിനാൽ } C, D \\text{ എന്നീ ശീർഷങ്ങൾ പാദത്തിന് സമാന്തരമായ വരയിലാണ്.}$$
$$\\text{സമാന്തരവരകൾ തമ്മിലുള്ള ലംബദൂരം } h \\text{ എന്നിരിക്കട്ടെ.}$$

$$\\triangle ABC\\text{-ന്റെ ഉയരം} = h, \\quad \\triangle ABD\\text{-ന്റെ ഉയരം} = h.$$
$$\\text{Area}(\\triangle ABC) = \\frac{1}{2} \\times b \\times h$$
$$\\text{Area}(\\triangle ABD) = \\frac{1}{2} \\times b \\times h$$
$$\\implies \\mathbf{\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ABD)}.$$

$$\\text{2. അളവ് കണക്കാക്കൽ:}$$
$$b = 8\\text{ cm}, \\quad h = 4.5\\text{ cm}$$
$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 8 \\times 4.5 = 4 \\times 4.5 = \\mathbf{18\\text{ cm}^2}.$$`
  },

  {
    id: 'w.m9.1.2',
    sec: '9.1.2',
    concept: 'm9.1.2.triangles-same-height-base-split',
    title_en: 'Area Division of a Triangle by Interior Point on a Median',
    title_ml: 'ത്രികോണത്തിലെ മധ്യരേഖയിലെ ബിന്ദു വഴിയുള്ള പരപ്പളവ് വിഭജനം',
    prompt_en: '<p>In $\\triangle ABC$, $AD$ is a median to side $BC$. $P$ is a point on $AD$ such that $AP : PD = 2 : 1$. If the total area of $\\triangle ABC$ is $72\\text{ cm}^2$, find: (a) the area of $\\triangle ABD$, (b) the area of $\\triangle PBD$, and (c) the area of $\\triangle PBC$.</p>',
    prompt_ml: '<p>$\\triangle ABC$-ൽ $AD$ എന്നത് $BC$ എന്ന വശത്തേക്കുള്ള മധ്യരേഖയാണ്. $AD$-യിലെ ഒരു ബിന്ദുവാണ് $P$; $AP : PD = 2 : 1$ ആണ്. $\\triangle ABC$-യുടെ ആകെ പരപ്പളവ് $72\\text{ cm}^2$ ആയാൽ: (a) $\\triangle ABD$-യുടെ പരപ്പളവ്, (b) $\\triangle PBD$-യുടെ പരപ്പളവ്, (c) $\\triangle PBC$-യുടെ പരപ്പളവ് എന്നിവ കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Given: Total Area}(\\triangle ABC) = 72\\text{ cm}^2.$$

$$\\text{(a) Area of } \\triangle ABD:$$
$$\\text{Since } AD \\text{ is a median, it bisects the area of } \\triangle ABC:$$
$$\\text{Area}(\\triangle ABD) = \\frac{1}{2} \\times 72 = \\mathbf{36\\text{ cm}^2}.$$

$$\\text{(b) Area of } \\triangle PBD:$$
$$\\text{In } \\triangle ABD, \\text{ point } P \\text{ divides } AD \\text{ in the ratio } AP : PD = 2 : 1.$$
$$\\text{Triangles } \\triangle ABP \\text{ and } \\triangle PBD \\text{ share the same vertex } B \\text{ and baseline } AD.$$
$$\\text{Area}(\\triangle PBD) = \\frac{1}{2 + 1} \\times \\text{Area}(\\triangle ABD) = \\frac{1}{3} \\times 36 = \\mathbf{12\\text{ cm}^2}.$$

$$\\text{(c) Area of } \\triangle PBC:$$
$$\\text{By identical reasoning in } \\triangle ADC, \\text{ Area}(\\triangle PCD) = 12\\text{ cm}^2.$$
$$\\text{Area}(\\triangle PBC) = \\text{Area}(\\triangle PBD) + \\text{Area}(\\triangle PCD) = 12 + 12 = \\mathbf{24\\text{ cm}^2}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: } \\triangle ABC\\text{-യുടെ പരപ്പളവ്} = 72\\text{ cm}^2.$$

$$\\text{(a) } \\triangle ABD\\text{-ന്റെ പരപ്പളവ്:}$$
$$AD \\text{ ഒരു മധ്യരേഖയായതിനാൽ അത് പരപ്പളവിനെ പകുതിയാക്കുന്നു:}$$
$$\\text{Area}(\\triangle ABD) = \\frac{72}{2} = \\mathbf{36\\text{ cm}^2}.$$

$$\\text{(b) } \\triangle PBD\\text{-ന്റെ പരപ്പളവ്:}$$
$$\\triangle ABD\\text{-ൽ } P \\text{ എന്ന ബിന്ദു } AD\\text{-നെ } AP : PD = 2 : 1 \\text{ എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു.}$$
$$\\triangle ABP, \\triangle PBD \\text{ എന്നിവയ്ക്ക് } B \\text{ എന്ന പൊതുശീർഷമാണുള്ളത്.}$$
$$\\text{Area}(\\triangle PBD) = \\frac{1}{3} \\times 36 = \\mathbf{12\\text{ cm}^2}.$$

$$\\text{(c) } \\triangle PBC\\text{-ന്റെ പരപ്പളവ്:}$$
$$\\triangle ADC\\text{-ലും ഇതുപോലെ } \\text{Area}(\\triangle PCD) = 12\\text{ cm}^2 \\text{ ലഭിക്കുന്നു.}$$
$$\\text{Area}(\\triangle PBC) = 12 + 12 = \\mathbf{24\\text{ cm}^2}.$$`
  },

  {
    id: 'w.m9.1.3',
    sec: '9.1.3',
    concept: 'm9.1.3.transforming-quadrilaterals',
    title_en: 'Construction and Justification for Converting a Quadrilateral into a Triangle',
    title_ml: 'ചതുർഭുജത്തെ ത്രികോണമാക്കുന്നതിന്റെ നിർമ്മിതിയും സാധൂകരണവും',
    prompt_en: '<p>Explain in detail the step-by-step geometric construction to convert a given quadrilateral $ABCD$ into a triangle of equal area having side $AB$ along its base. State clearly why the area of the constructed triangle equals the area of the quadrilateral.</p>',
    prompt_ml: '<p>തന്നിരിക്കുന്ന ഒരു ചതുർഭുജം $ABCD$-യെ $AB$ എന്ന വശത്തിന്റെ ദിശയിൽ പാദമുള്ള അതേ പരപ്പളവുള്ള ത്രികോണമാക്കി മാറ്റുന്നതിനുള്ള ജ്യാമിതീയ നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ വിശദീകരിക്കുക. നിർമ്മിച്ച ത്രികോണത്തിന്റെ പരപ്പളവ് ചതുർഭുജത്തിന്റെ പരപ്പളവിന് തുല്യമാകുന്നത് എന്തുകൊണ്ടാണെന്ന് സാധൂകരിക്കുക.</p>',
    solution_en: `$$\\text{1. Construction Steps:}$$
$$\\text{Step a: Draw diagonal } AC \\text{ connecting opposite vertices } A \\text{ and } C.$$
$$\\text{Step b: Through vertex } D, \\text{ draw a line parallel to diagonal } AC.$$
$$\\text{Step c: Extend side } AB \\text{ past } A \\text{ to intersect the parallel line at point } E.$$
$$\\text{Step d: Draw line segment } EC.$$
$$\\text{The resulting triangle is } \\triangle EBC.$$

$$\\text{2. Mathematical Justification:}$$
$$\\text{Triangles } \\triangle ACD \\text{ and } \\triangle ACE \\text{ have the common base } AC.$$
$$\\text{Their third vertices } D \\text{ and } E \\text{ lie on line } DE \\text{ which is parallel to base } AC.$$
$$\\implies \\text{Area}(\\triangle ACD) = \\text{Area}(\\triangle ACE).$$

$$\\text{Now express the area of quadrilateral } ABCD:$$
$$\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)$$
$$= \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE)$$
$$= \\mathbf{\\text{Area}(\\triangle EBC)}.$$
$$\\text{Thus the area is strictly preserved.}$$`,
    solution_ml: `$$\\text{1. നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ:}$$
$$\\text{ഘട്ടം a: } A, C \\text{ ശീർഷങ്ങളെ യോജിപ്പിച്ച് വികർണ്ണം } AC \\text{ വരയ്ക്കുക.}$$
$$\\text{ഘട്ടം b: } D \\text{ എന്ന ശീർഷത്തിലൂടെ വികർണ്ണം } AC\\text{-ക്ക് സമാന്തരമായി വര വരയ്ക്കുക.}$$
$$\\text{ഘട്ടം c: } AB \\text{ എന്ന വശം നീട്ടി ഈ സമാന്തരവരയെ } E \\text{ എന്ന ബിന്ദുവിൽ ഖണ്ഡിക്കുക.}$$
$$\\text{ഘട്ടം d: } E, C \\text{ ബിന്ദുക്കളെ തമ്മിൽ യോജിപ്പിക്കുക.}$$
$$\\text{ഇപ്പോൾ ലഭിക്കുന്ന } \\triangle EBC \\text{ ആണ് ആവശ്യമായ ത്രികോണം.}$$

$$\\text{2. ഗണിത സാധൂകരണം:}$$
$$\\triangle ACD, \\triangle ACE \\text{ എന്നിവയ്ക്ക് } AC \\text{ എന്ന ഒരേ പാദമാണുള്ളത്.}$$
$$AC \\parallel DE \\text{ ആയതിനാൽ ഇവ ഒരേ സമാന്തരവരകൾക്കിടയിലാണ്.}$$
$$\\implies \\text{Area}(\\triangle ACD) = \\text{Area}(\\triangle ACE).$$

$$\\text{ചതുർഭുജം } ABCD\\text{-യുടെ പരപ്പളവ്:}$$
$$\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)$$
$$= \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE)$$
$$= \\mathbf{\\text{Area}(\\triangle EBC)}.$$
$$\\text{അങ്ങനെ പരപ്പളവ് ഒട്ടും മാറാതെ ത്രികോണമായി മാറുന്നു.}$$`
  },

  {
    id: 'w.m9.1.4',
    sec: '9.1.4',
    concept: 'm9.1.4.trapezium-and-land-division',
    title_en: 'Boundary Straightening Application of Trapezium Diagonals',
    title_ml: 'ലംബക തത്വമുപയോഗിച്ച് ഭൂമിയുടെ അതിർത്തി നേരെയാക്കൽ',
    prompt_en: '<p>Two farmers, Joy and Rahim, have adjacent plots of land separated by a crooked two-segment boundary $APB$ between boundary markers $A$ and $B$. Show geometrically how to replace the boundary $APB$ with a single straight boundary $AQ$ from post $A$ to the opposite boundary line such that neither farmer gains or loses any land.</p>',
    prompt_ml: '<p>ജോയിയുടെയും റഹീമിന്റെയും അടുത്തടുത്ത പറമ്പുകൾ തമ്മിൽ $A, B$ എന്നീ അതിരടയാളങ്ങൾക്കിടയിൽ $APB$ എന്ന വളഞ്ഞ അതിർത്തിയാലാണുള്ളത്. ആരുടെയും ഭൂമിയുടെ പരപ്പളവിൽ യാതൊരു മാറ്റവും വരാതെ, $A$ എന്ന അതിരടയാളത്തിൽ നിന്ന് എതിർ അതിർവരയിലേക്ക് $AQ$ എന്ന ഒറ്റ നേർവര അതിർത്തി നിർണ്ണയിക്കുന്നത് എങ്ങനെയെന്ന് ജ്യാമിതീയമായി വിശദീകരിക്കുക.</p>',
    solution_en: `$$\\text{1. Construction to Straighten Boundary:}$$
$$\\text{Step a: Join marker } A \\text{ to marker } B \\text{ with a straight reference line segment } AB.$$
$$\\text{Step b: Through the bend point } P, \\text{ draw a straight line parallel to line segment } AB.$$
$$\\text{Step c: Let this parallel line intersect the opposite outer boundary line at point } Q.$$
$$\\text{Step d: The straight fence line } AQ \\text{ is the new fair boundary.}$$

$$\\text{2. Mathematical Proof of Fairness:}$$
$$\\text{Consider } \\triangle APB \\text{ and } \\triangle AQB.$$
$$\\text{Both triangles share the same base } AB.$$
$$\\text{Both vertices } P \\text{ and } Q \\text{ lie on the line through } P \\text{ parallel to } AB.$$
$$\\implies \\text{Area}(\\triangle APB) = \\text{Area}(\\triangle AQB).$$

$$\\text{When line } AQ \\text{ replaces path } APB, \\text{ let } AQ \\text{ intersect } PB \\text{ at point } K:$$
$$\\text{The piece exchanged is } \\triangle APK \\text{ for } \\triangle BKQ.$$
$$\\text{Since } \\text{Area}(\\triangle APB) = \\text{Area}(\\triangle AQB), \\text{ subtracting common triangle } \\triangle AKB \\text{ yields:}$$
$$\\mathbf{\\text{Area}(\\triangle APK) = \\text{Area}(\\triangle BKQ)}.$$
$$\\text{Therefore, the land given up by Joy exactly equals the land gained from Rahim. Both plot areas remain unchanged.}$$`,
    solution_ml: `$$\\text{1. അതിർത്തി നേരെയാക്കാനുള്ള നിർമ്മിതി:}$$
$$\\text{ഘട്ടം a: } A, B \\text{ എന്നീ അടയാളങ്ങളെ യോജിപ്പിച്ച് } AB \\text{ എന്ന വര സങ്കൽപ്പിക്കുക.}$$
$$\\text{ഘട്ടം b: വളവ് ബിന്ദുവായ } P\\text{-ലൂടെ } AB\\text{-ക്ക് സമാന്തരമായി ഒരു വര വരയ്ക്കുക.}$$
$$\\text{ഘട്ടം c: ഈ സമാന്തരവര എതിർ അതിർത്തി വരയെ } Q \\text{ എന്ന ബിന്ദുവിൽ കൂട്ടിമുട്ടട്ടെ.}$$
$$\\text{ഘട്ടം d: } A\\text{-യിൽ നിന്ന് } Q\\text{-വിലേക്ക് വരയ്ക്കുന്ന } AQ \\text{ എന്ന നേർവരയാണ് പുതിയ അതിർത്തി.}$$

$$\\text{2. നീതിപൂർവ്വകമായ തെളിവ്:}$$
$$\\triangle APB, \\triangle AQB \\text{ എന്നീ ത്രികോണങ്ങൾ പരിഗണിക്കുക.}$$
$$\\text{രണ്ട് ത്രികോണങ്ങൾക്കും } AB \\text{ എന്ന ഒരേ പാദമാണുള്ളത്.}$$
$$AB \\parallel PQ \\text{ ആയതിനാൽ ഇവ ഒരേ സമാന്തരവരകൾക്കിടയിലാണ്.}$$
$$\\implies \\text{Area}(\\triangle APB) = \\text{Area}(\\triangle AQB).$$

$$AQ \\text{ എന്ന വര } PB\\text{-നെ } K\\text{-ൽ മുറിക്കുന്നുവെന്നിരിക്കട്ടെ:}$$
$$\\text{പൊതുവായ } \\triangle AKB \\text{ കുറയ്ക്കുമ്പോൾ:}$$
$$\\mathbf{\\text{Area}(\\triangle APK) = \\text{Area}(\\triangle BKQ)}.$$
$$\\text{അതായത്, ഒരാൾ വിട്ടുകൊടുക്കുന്ന ഭൂമിയുടെ പരപ്പളവ് മറ്റേയാൾക്ക് നൽകുന്ന ഭൂമിയുടെ പരപ്പളവിന് തുല്യമാണ്. ഇരുവരുടെയും ഭൂമിയുടെ പരപ്പളവ് പൂർണ്ണമായും സംരക്ഷിക്കപ്പെടുന്നു.}$$`
  }
);
