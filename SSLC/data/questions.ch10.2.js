/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 2 — Circles (വൃത്തങ്ങൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.2.1 Inscribed Angle & Central Angle
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.1',
    concept: 'm10.2.1.inscribed-angle-and-central-angle',
    sec: '10.2.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An arc of a circle subtends an angle of $130^\\circ$ at the centre. What angle does this arc subtend at a point on the alternate (major) arc?',
    prompt_ml: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $130^\\circ$ ആണ്. ഈ ചാപം മറുചാപത്തിലെ ഒരു ബിന്ദുവിലുണ്ടാക്കുന്ന കോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$130^\\circ$' },
      { k: 'C', t: '$50^\\circ$' },
      { k: 'D', t: '$115^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$130^\\circ$' },
      { k: 'C', t: '$50^\\circ$' },
      { k: 'D', t: '$115^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The angle on the alternate arc is half of the central angle: $\\frac{130^\\circ}{2} = 65^\\circ$.',
    solution_ml: 'മറുചാപത്തിലെ കോൺ കേന്ദ്രകോണിന്റെ പകുതിയാണ്: $\\frac{130^\\circ}{2} = 65^\\circ$.',
    tested_en: 'Inscribed angle calculation from central angle.',
    tested_ml: 'കേന്ദ്രകോണിൽ നിന്നും വൃത്തത്തിലെ കോൺ കാണൽ.'
  },
  {
    id: 'obj.m10.2.2',
    concept: 'm10.2.1.inscribed-angle-and-central-angle',
    sec: '10.2.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: '$AB$ is a diameter of a circle and $P$ is a point on the circle. If $\\angle PAB = 35^\\circ$, what is $\\angle PBA$?',
    prompt_ml: '$AB$ വ്യാസമായ വൃത്തത്തിലെ ഒരു ബിന്ദുവാണ് $P$. $\\angle PAB = 35^\\circ$ ആയാൽ $\\angle PBA$ എത്ര?',
    options_en: [
      { k: 'A', t: '$55^\\circ$' },
      { k: 'B', t: '$65^\\circ$' },
      { k: 'C', t: '$45^\\circ$' },
      { k: 'D', t: '$90^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$55^\\circ$' },
      { k: 'B', t: '$65^\\circ$' },
      { k: 'C', t: '$45^\\circ$' },
      { k: 'D', t: '$90^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Since $AB$ is a diameter, $\\angle APB = 90^\\circ$ (angle in a semicircle). In $\\triangle PAB$, $\\angle PBA = 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.',
    solution_ml: '$AB$ വ്യാസമായതിനാൽ $\\angle APB = 90^\\circ$ (അർദ്ധവൃത്തത്തിലെ കോൺ). $\\angle PBA = 90^\\circ - 35^\\circ = 55^\\circ$.',
    tested_en: 'Angle in a semicircle property in right triangles.',
    tested_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ ഉപയോഗിച്ചുള്ള കോൺ നിർണ്ണയം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.2 Angles in the Same Segment
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.3',
    concept: 'm10.2.2.angles-in-same-segment',
    sec: '10.2.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a circle, $P$ and $Q$ are two points on the same arc with respect to chord $AB$. If $\\angle APB = 52^\\circ$, what is the measure of $\\angle AQB$?',
    prompt_ml: 'ഒരു വൃത്തത്തിൽ $AB$ എന്ന ഞാണിന്റെ ഒരേ ഭാഗത്തുള്ള ബിന്ദുക്കളാണ് $P, Q$. $\\angle APB = 52^\\circ$ ആയാൽ $\\angle AQB$ എത്ര?',
    options_en: [
      { k: 'A', t: '$52^\\circ$' },
      { k: 'B', t: '$104^\\circ$' },
      { k: 'C', t: '$128^\\circ$' },
      { k: 'D', t: '$26^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$52^\\circ$' },
      { k: 'B', t: '$104^\\circ$' },
      { k: 'C', t: '$128^\\circ$' },
      { k: 'D', t: '$26^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Angles in the same segment of a circle are equal: $\\angle AQB = \\angle APB = 52^\\circ$.',
    solution_ml: 'ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്: $\\angle AQB = 52^\\circ$.',
    tested_en: 'Equality of angles in the same segment.',
    tested_ml: 'ഒരേ ചാപഖണ്ഡത്തിലെ കോണുകളുടെ സമത്വം.'
  },
  {
    id: 'obj.m10.2.4',
    concept: 'm10.2.2.angles-in-same-segment',
    sec: '10.2.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A point $X$ lies inside a circle of diameter $AB$. What can be strictly concluded about the angle $\\angle AXB$?',
    prompt_ml: '$AB$ വ്യാസമായ വൃത്തത്തിന്റെ ഉള്ളിലാണ് $X$ എന്ന ബിന്ദു എങ്കിൽ $\\angle AXB$-യെക്കുറിച്ച് എന്ത് പറയാം?',
    options_en: [
      { k: 'A', t: '$\\angle AXB > 90^\\circ$ (obtuse angle)' },
      { k: 'B', t: '$\\angle AXB < 90^\\circ$ (acute angle)' },
      { k: 'C', t: '$\\angle AXB = 90^\\circ$ (right angle)' },
      { k: 'D', t: '$\\angle AXB = 180^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\angle AXB > 90^\\circ$ (ബൃഹത്കോൺ)' },
      { k: 'B', t: '$\\angle AXB < 90^\\circ$ (ന്യൂനകോൺ)' },
      { k: 'C', t: '$\\angle AXB = 90^\\circ$ (മട്ടകോൺ)' },
      { k: 'D', t: '$\\angle AXB = 180^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Points inside a circle with diameter $AB$ subtend an angle greater than $90^\\circ$. Points on the circle subtend $90^\\circ$, and points outside subtend less than $90^\\circ$.',
    solution_ml: 'വ്യാസത്തെ ആധാരമാക്കി വൃത്തത്തിനകത്തുള്ള ബിന്ദു ഉണ്ടാക്കുന്ന കോൺ $90^\\circ$-ൽ കൂടുതലായിരിക്കും (ബൃഹത്കോൺ).',
    tested_en: 'Angle subtended by points inside, on, and outside a circle.',
    tested_ml: 'വൃത്തത്തിനകത്തെ ബിന്ദുവുണ്ടാക്കുന്ന കോണിന്റെ അളവ്.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.3 Cyclic Quadrilaterals
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.5',
    concept: 'm10.2.3.cyclic-quadrilaterals',
    sec: '10.2.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a cyclic quadrilateral $ABCD$, $\\angle A = 2x + 10^\\circ$ and $\\angle C = 3x + 20^\\circ$. What is the value of $x$?',
    prompt_ml: 'ചക്രിയ ചതുർഭുജം $ABCD$-യിൽ $\\angle A = 2x + 10^\\circ$-ഉം $\\angle C = 3x + 20^\\circ$-ഉം ആണ്. $x$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$30^\\circ$' },
      { k: 'B', t: '$35^\\circ$' },
      { k: 'C', t: '$25^\\circ$' },
      { k: 'D', t: '$40^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$30^\\circ$' },
      { k: 'B', t: '$35^\\circ$' },
      { k: 'C', t: '$25^\\circ$' },
      { k: 'D', t: '$40^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Opposite angles of a cyclic quadrilateral are supplementary: $(2x + 10) + (3x + 20) = 180 \\implies 5x + 30 = 180 \\implies 5x = 150 \\implies x = 30^\\circ$.',
    solution_ml: 'ചക്രിയ ചതുർഭുജത്തിലെ എതിർകോണുകളുടെ തുക $180^\\circ$: $5x + 30 = 180 \\implies 5x = 150 \\implies x = 30^\\circ$.',
    tested_en: 'Algebraic calculation of cyclic quadrilateral opposite angles.',
    tested_ml: 'ചക്രിയ ചതുർഭുജത്തിലെ എതിർകോണുകളുടെ ബീജഗണിത നിർണ്ണയം.'
  },
  {
    id: 'obj.m10.2.6',
    concept: 'm10.2.3.cyclic-quadrilaterals',
    sec: '10.2.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'One side of a cyclic quadrilateral is extended. If the exterior angle formed is $82^\\circ$, what is the interior opposite angle?',
    prompt_ml: 'ഒരു ചക്രിയ ചതുർഭുജത്തിന്റെ ഒരു വശം നീട്ടിയപ്പോൾ ഉണ്ടായ ബാഹ്യകോൺ $82^\\circ$ ആണ്. ഇതിന്റെ എതിർ അന്തർകോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$82^\\circ$' },
      { k: 'B', t: '$98^\\circ$' },
      { k: 'C', t: '$164^\\circ$' },
      { k: 'D', t: '$41^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$82^\\circ$' },
      { k: 'B', t: '$98^\\circ$' },
      { k: 'C', t: '$164^\\circ$' },
      { k: 'D', t: '$41^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The exterior angle of a cyclic quadrilateral is equal to its interior opposite angle, so the angle is $82^\\circ$.',
    solution_ml: 'ചക്രിയ ചതുർഭുജത്തിന്റെ ബാഹ്യകോൺ അതിന്റെ എതിർ അന്തർകോണിന് തുല്യമാണ്. അതിനാൽ കോൺ $82^\\circ$.',
    tested_en: 'Exterior angle property of cyclic quadrilaterals.',
    tested_ml: 'ചക്രിയ ചതുർഭുജത്തിന്റെ ബാഹ്യകോൺ നിയമം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.2.4 Chords and Intersecting Segments
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.2.7',
    concept: 'm10.2.4.chords-and-intersecting-segments',
    sec: '10.2.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two chords $AB$ and $CD$ intersect at $P$ inside a circle. If $PA = 6\\text{ cm}, PB = 8\\text{ cm},$ and $PC = 4\\text{ cm}$, what is $PD$?',
    prompt_ml: 'വൃത്തത്തിനുള്ളിലെ $P$ എന്ന ബിന്ദുവിൽ $AB, CD$ എന്നീ ഞാണുകൾ ഖണ്ഡിക്കുന്നു. $PA = 6\\text{ cm}, PB = 8\\text{ cm}, PC = 4\\text{ cm}$ ആയാൽ $PD$ എത്ര?',
    options_en: [
      { k: 'A', t: '$12\\text{ cm}$' },
      { k: 'B', t: '$10\\text{ cm}$' },
      { k: 'C', t: '$14\\text{ cm}$' },
      { k: 'D', t: '$16\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$12\\text{ cm}$' },
      { k: 'B', t: '$10\\text{ cm}$' },
      { k: 'C', t: '$14\\text{ cm}$' },
      { k: 'D', t: '$16\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$PA \\cdot PB = PC \\cdot PD \\implies 6 \\times 8 = 4 \\times PD \\implies 48 = 4PD \\implies PD = 12\\text{ cm}$.',
    solution_ml: '$PA \\cdot PB = PC \\cdot PD \\implies 6 \\times 8 = 4 \\times PD \\implies PD = 12\\text{ cm}$.',
    tested_en: 'Intersecting chords segment product theorem.',
    tested_ml: 'ഞാണുകളുടെ ഗുണനഫല സമവാക്യ പ്രയോഗം.'
  },
  {
    id: 'obj.m10.2.8',
    concept: 'm10.2.4.chords-and-intersecting-segments',
    sec: '10.2.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A point $P$ on a diameter of a circle divides it into parts of lengths $3\\text{ cm}$ and $12\\text{ cm}$. A chord through $P$ perpendicular to the diameter has half-length $h$. What is $h$?',
    prompt_ml: 'ഒരു വൃത്തത്തിന്റെ വ്യാസത്തിലുള്ള ബിന്ദു $P$ വ്യാസത്തെ $3\\text{ cm}, 12\\text{ cm}$ ആയി ഭാഗിക്കുന്നു. $P$-ലൂടെ വ്യാസത്തിന് ലംബമായ ഞാണിന്റെ പകുതി നീളം $h$ എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$7.5\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$36\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$7.5\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$36\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the geometric mean property of intersecting chords: $h^2 = 3 \\times 12 = 36 \\implies h = \\sqrt{36} = 6\\text{ cm}$.',
    solution_ml: 'ലംബ ഞാണിന്റെ പകുതി നീളം $h^2 = 3 \\times 12 = 36 \\implies h = 6\\text{ cm}$.',
    tested_en: 'Geometric mean theorem for perpendicular chord and diameter.',
    tested_ml: 'വ്യാസവും ലംബ ഞാണും തമ്മിലുള്ള ഗുണനഫല ബന്ധം.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     Level 2 Written Exercises (1 per section)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.2.1',
    concept: 'm10.2.1.inscribed-angle-and-central-angle',
    sec: '10.2.1',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>In the figure, $O$ is the centre of the circle and $AB$ is an arc subtending central angle $\\angle AOB = 140^\\circ$. Points $P$ and $Q$ lie on the major and minor arcs of $AB$ respectively.</p><p>(i) Find the measure of $\\angle APB$.</p><p>(ii) Find the measure of $\\angle AQB$ and explain why $\\angle APB + \\angle AQB = 180^\\circ$.</p>',
    prompt_ml: '<p>ചിത്രത്തിൽ $O$ വൃത്തകേന്ദ്രവും, $AB$ എന്ന ചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $\\angle AOB = 140^\\circ$-ഉം ആണ്. $P, Q$ എന്നിവ യഥാക്രമം ഗുരുചാപത്തിലും ലഘുചാപത്തിലുമുള്ള ബിന്ദുക്കളാണ്.</p><p>(i) $\\angle APB$-യുടെ അളവ് കണ്ടെത്തുക.</p><p>(ii) $\\angle AQB$-യുടെ അളവ് കണ്ടെത്തി, $\\angle APB + \\angle AQB = 180^\\circ$ ആകുന്നത് എന്തുകൊണ്ട് എന്ന് വിശദീകരിക്കുക.</p>',
    solution_en: `<h4>Part (i): Inscribed Angle in Major Arc</h4>
<p>By the inscribed angle theorem, the angle subtended by minor arc $AB$ at $P$ on the alternate major arc is half of the central angle:</p>
$$\\angle APB = \\frac{1}{2}\\angle AOB = \\frac{1}{2}(140^\\circ) = \\mathbf{70^\\circ}$$

<h4>Part (ii): Inscribed Angle in Minor Arc</h4>
<p>The major arc $AB$ has central angle:</p>
$$\\text{Reflex } \\angle AOB = 360^\\circ - 140^\\circ = 220^\\circ$$
<p>The angle subtended by this major arc at point $Q$ on the minor arc is:</p>
$$\\angle AQB = \\frac{1}{2}(220^\\circ) = \\mathbf{110^\\circ}$$
<p>Sum of the two angles:</p>
$$\\angle APB + \\angle AQB = 70^\\circ + 110^\\circ = \\mathbf{180^\\circ}$$
<p>This is because points $A, P, B, Q$ form a cyclic quadrilateral whose opposite angles are always supplementary.</p>`,
    solution_ml: `<h4>ഭാഗം (i): ഗുരുചാപത്തിലെ കോൺ ($\\angle APB$)</h4>
<p>കേന്ദ്രകോണിന്റെ പകുതിയാണ് മറുചാപത്തിലെ കോൺ:</p>
$$\\angle APB = \\frac{1}{2} \\times 140^\\circ = \\mathbf{70^\\circ}$$

<h4>ഭാഗം (ii): ലഘുചാപത്തിലെ കോൺ ($\\angle AQB$)</h4>
<p>ഗുരുചാപത്തിന്റെ കേന്ദ്രകോൺ $= 360^\\circ - 140^\\circ = 220^\\circ$</p>
$$\\angle AQB = \\frac{1}{2} \\times 220^\\circ = \\mathbf{110^\\circ}$$
<p>തുക: $70^\\circ + 110^\\circ = \\mathbf{180^\\circ}$. $APBQ$ ഒരു ചക്രിയ ചതുർഭുജമായതിനാലാണ് എതിർകോണുകളുടെ തുക $180^\\circ$ ആകുന്നത്.</p>`,
    tested_en: 'Central and inscribed angle relationship in major and minor arcs.',
    tested_ml: 'ഗുരുചാപത്തിലും ലഘുചാപത്തിലുമുള്ള കോണുകൾ കണക്കാക്കൽ.'
  },

  {
    id: 'w.m10.2.2',
    concept: 'm10.2.2.angles-in-same-segment',
    sec: '10.2.2',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>A circle is drawn with side $BC$ of triangle $ABC$ as diameter. The circle intersects sides $AB$ and $AC$ at points $P$ and $Q$ respectively.</p><p>(i) State the measures of angles $\\angle BPC$ and $\\angle BQC$, giving mathematical justification.</p><p>(ii) Prove that line segment $CP$ is perpendicular to side $AB$, and $BQ$ is perpendicular to side $AC$.</p>',
    prompt_ml: '<p>$\\triangle ABC$-യിൽ $BC$ വ്യാസമായി ഒരു വൃത്തം വരയ്ക്കുന്നു. ഈ വൃത്തം $AB, AC$ എന്നീ വശങ്ങളെ യഥാക്രമം $P, Q$ എന്നീ ബിന്ദുക്കളിൽ ഖണ്ഡിക്കുന്നു.</p><p>(i) $\\angle BPC, \\angle BQC$ എന്നീ കോണുകളുടെ അളവുകൾ വ്യക്തമായ ഗണിത കാരണത്തോടെ എഴുതുക.</p><p>(ii) $CP$ എന്നത് $AB$-ക്ക് ലംബമാണെന്നും, $BQ$ എന്നത് $AC$-ക്ക് ലംബമാണെന്നും തെളിയിക്കുക.</p>',
    solution_en: `<h4>Part (i): Measures of Angles in Semicircle</h4>
<p>Since $BC$ is the diameter of the circle, any angle subtended by $BC$ at a point on the circumference is an angle in a semicircle:</p>
$$\\mathbf{\\angle BPC = 90^\\circ \\quad \\text{and} \\quad \\angle BQC = 90^\\circ}$$

<h4>Part (ii): Perpendicular Altitudes</h4>
<ul>
  <li>Since $\\angle BPC = 90^\\circ$, line $CP$ meets line $AB$ at a right angle, which means:
  $$\\mathbf{CP \\perp AB}$$
  Thus $CP$ is the altitude from vertex $C$ to side $AB$.</li>

  <li>Similarly, since $\\angle BQC = 90^\\circ$, line $BQ$ meets line $AC$ at a right angle, which means:
  $$\\mathbf{BQ \\perp AC}$$
  Thus $BQ$ is the altitude from vertex $B$ to side $AC$.</li>
</ul>
<p>Hence, the intersection of $CP$ and $BQ$ is the orthocenter of $\\triangle ABC$.</p>`,
    solution_ml: `<h4>ഭാഗം (i): കോണുകളുടെ അളവ്</h4>
<p>$BC$ വൃത്തത്തിന്റെ വ്യാസമായതിനാൽ അർദ്ധവൃത്തത്തിലെ കോൺ സിദ്ധാന്തപ്രകാരം:</p>
$$\\mathbf{\\angle BPC = 90^\\circ, \\quad \\angle BQC = 90^\\circ}$$

<h4>ഭാഗം (ii): ലംബങ്ങൾ എന്ന് തെളിയിക്കൽ</h4>
<ul>
  <li>$\\angle BPC = 90^\\circ$ ആയതിനാൽ $CP$ എന്നത് $AB$-ക്ക് ലംബമാണ് ($CP \\perp AB$).</li>
  <li>$\\angle BQC = 90^\\circ$ ആയതിനാൽ $BQ$ എന്നത് $AC$-ക്ക് ലംബമാണ് ($BQ \\perp AC$).</li>
</ul>
<p>അതിനാൽ $CP, BQ$ എന്നിവ ത്രികോണത്തിന്റെ രണ്ട് ലംബങ്ങളാണ്.</p>`,
    tested_en: 'Angle in semicircle theorem applied to altitudes of a triangle.',
    tested_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ ഉപയോഗിച്ച് ത്രികോണത്തിലെ ലംബങ്ങൾ തെളിയിക്കൽ.'
  },

  {
    id: 'w.m10.2.3',
    concept: 'm10.2.3.cyclic-quadrilaterals',
    sec: '10.2.3',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>In cyclic quadrilateral $ABCD$, sides $AB$ and $DC$ are extended to intersect at an external point $E$.</p><p>(i) If $\\angle ADC = 70^\\circ$ and $\\angle DAB = 85^\\circ$, find $\\angle ABC$ and $\\angle BCD$.</p><p>(ii) Find the angles of triangle $\\triangle EBC$ and calculate $\\angle E$.</p>',
    prompt_ml: '<p>ചക്രിയ ചതുർഭുജം $ABCD$-യിൽ $AB, DC$ എന്നീ വശങ്ങൾ നീട്ടി പുറത്തുള്ള $E$ എന്ന ബിന്ദുവിൽ കൂട്ടിമുട്ടിക്കുന്നു.</p><p>(i) $\\angle ADC = 70^\\circ, \\angle DAB = 85^\\circ$ ആയാൽ $\\angle ABC, \\angle BCD$ എന്നിവ കണ്ടെത്തുക.</p><p>(ii) $\\triangle EBC$-യിലെ കോണുകൾ കണ്ടെത്തി $\\angle E$-യുടെ അളവ് കണക്കാക്കുക.</p>',
    solution_en: `<h4>Part (i): Opposite Angles of Cyclic Quadrilateral</h4>
<p>Opposite angles are supplementary:</p>
$$\\angle ABC = 180^\\circ - \\angle ADC = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$$
$$\\angle BCD = 180^\\circ - \\angle DAB = 180^\\circ - 85^\\circ = \\mathbf{95^\\circ}$$

<h4>Part (ii): Angles of $\\triangle EBC$ and $\\angle E$</h4>
<p>Linear pair on line $ABE$:</p>
$$\\angle EBC = 180^\\circ - \\angle ABC = 180^\\circ - 110^\\circ = \\mathbf{70^\\circ}$$
<p>(Notice this equals the interior opposite angle $\\angle ADC$).</p>

<p>Linear pair on line $DCE$:</p>
$$\\angle ECB = 180^\\circ - \\angle BCD = 180^\\circ - 95^\\circ = \\mathbf{85^\\circ}$$
<p>(Notice this equals the interior opposite angle $\\angle DAB$).</p>

<p>In $\\triangle EBC$:</p>
$$\\angle E = 180^\\circ - (\\angle EBC + \\angle ECB) = 180^\\circ - (70^\\circ + 85^\\circ) = 180^\\circ - 155^\\circ = \\mathbf{25^\\circ}$$`,
    solution_ml: `<h4>ഭാഗം (i): ചക്രിയ ചതുർഭുജത്തിലെ കോണുകൾ</h4>
$$\\angle ABC = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$$
$$\\angle BCD = 180^\\circ - 85^\\circ = \\mathbf{95^\\circ}$$

<h4>ഭാഗം (ii): $\\triangle EBC$-യിലെ കോണുകളും $\\angle E$-യും</h4>
<p>രേഖീയജോഡി പ്രകാരം:</p>
$$\\angle EBC = 180^\\circ - 110^\\circ = \\mathbf{70^\\circ}$$
$$\\angle ECB = 180^\\circ - 95^\\circ = \\mathbf{85^\\circ}$$
<p>$\\triangle EBC$-യിൽ:</p>
$$\\angle E = 180^\\circ - (70^\\circ + 85^\\circ) = 180^\\circ - 155^\\circ = \\mathbf{25^\\circ}$$`,
    tested_en: 'Cyclic quadrilateral angle computation and exterior angle theorem.',
    tested_ml: 'ചക്രിയ ചതുർഭുജത്തിലെ കോണുകളും ബാഹ്യകോണും ഉപയോഗിച്ചുള്ള നിർണ്ണയം.'
  },

  {
    id: 'w.m10.2.4',
    concept: 'm10.2.4.chords-and-intersecting-segments',
    sec: '10.2.4',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>(i) Two chords $AB$ and $CD$ of a circle intersect at point $P$ inside the circle. If $AP = x, PB = x + 3, CP = x - 1,$ and $PD = x + 8$, set up an algebraic equation and solve for $x$.</p><p>(ii) Hence find the total length of each chord ($AB$ and $CD$).</p>',
    prompt_ml: '<p>(i) വൃത്തത്തിനുള്ളിലെ $P$ എന്ന ബിന്ദുവിൽ $AB, CD$ എന്നീ ഞാണുകൾ ഖണ്ഡിക്കുന്നു. $AP = x, PB = x + 3, CP = x - 1, PD = x + 8$ ആയാൽ സമവാക്യം രൂപീകരിച്ച് $x$-ന്റെ വില കാണുക.</p><p>(ii) $AB, CD$ എന്നീ ഞാണുകളുടെ ആകെ നീളങ്ങൾ കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Apply Intersecting Chords Theorem</h4>
$$PA \\cdot PB = PC \\cdot PD$$
$$x(x + 3) = (x - 1)(x + 8)$$
<p>Expand both sides:</p>
$$x^2 + 3x = x^2 + 7x - 8$$
<p>Subtract $x^2$ from both sides:</p>
$$3x = 7x - 8$$
$$8 = 7x - 3x = 4x \\implies x = \\frac{8}{4} = \\mathbf{2}$$

<h4>Step 2: Calculate Lengths of Chords</h4>
<p>For chord $AB$:</p>
$$AP = x = 2\\text{ cm}, \\quad PB = x + 3 = 2 + 3 = 5\\text{ cm}$$
$$AB = AP + PB = 2 + 5 = \\mathbf{7\\text{ cm}}$$

<p>For chord $CD$:</p>
$$CP = x - 1 = 2 - 1 = 1\\text{ cm}, \\quad PD = x + 8 = 2 + 8 = 10\\text{ cm}$$
$$CD = CP + PD = 1 + 10 = \\mathbf{11\\text{ cm}}$$

<p>Verification: $PA \\cdot PB = 2 \\times 5 = 10$; $PC \\cdot PD = 1 \\times 10 = 10$.</p>`,
    solution_ml: `<h4>ഘട്ടം 1: സമവാക്യം രൂപീകരിക്കലും നിർദ്ധാരണവും</h4>
$$PA \\cdot PB = PC \\cdot PD$$
$$x(x + 3) = (x - 1)(x + 8)$$
$$x^2 + 3x = x^2 + 7x - 8$$
$$3x = 7x - 8 \\implies 4x = 8 \\implies x = \\mathbf{2}$$

<h4>ഘട്ടം 2: ഞാണുകളുടെ നീളം കാണൽ</h4>
<p>$AB = AP + PB = 2 + (2 + 3) = 2 + 5 = \\mathbf{7\\text{ cm}}$</p>
<p>$CD = CP + PD = (2 - 1) + (2 + 8) = 1 + 10 = \\mathbf{11\\text{ cm}}$</p>`,
    tested_en: 'Algebraic modeling of intersecting chord segments.',
    tested_ml: 'ഖണ്ഡിക്കുന്ന ഞാണുകളുടെ ബീജഗണിത നിർദ്ധാരണവും നീളങ്ങളും.'
  }
);
