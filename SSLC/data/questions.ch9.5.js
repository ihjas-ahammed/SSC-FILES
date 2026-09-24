/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 5: Circles (വൃത്തങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.5.1 Chords and Perpendicular Bisector from the Centre
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.5.1',
    concept: 'm9.5.1.chords-and-perpendicular-bisector',
    sec: '9.5.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a circle of radius $10\\text{ cm}$, a chord has length $16\\text{ cm}$. What is the perpendicular distance from the centre to this chord?',
    prompt_ml: 'ആരം $10\\text{ cm}$ ആയ ഒരു വൃത്തത്തിലെ ഞാണിന്റെ നീളം $16\\text{ cm}$ ആണ്. വൃത്തകേന്ദ്രത്തിൽ നിന്ന് ഈ ഞാണിലേക്കുള്ള ലംബദൂരം എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'The perpendicular from the centre bisects the chord: half-chord $= \\frac{16}{2} = 8\\text{ cm}$. In the right triangle: $d = \\sqrt{r^2 - (c/2)^2} = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\text{ cm}$.',
    solution_ml: 'കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബം ഞാണിനെ സമഭാഗം ചെയ്യുന്നു: ഞാണിന്റെ പകുതി $= \\frac{16}{2} = 8\\text{ cm}$. പൈതഗോറസ് തത്വപ്രകാരം: $d = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6\\text{ cm}$.',
    tested_en: 'Distance from centre to chord using right-angled triangle relation.',
    tested_ml: 'ഞാണും കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബദൂരവും തമ്മിലുള്ള ബന്ധം.'
  },
  {
    id: 'obj.m9.5.2',
    concept: 'm9.5.1.chords-and-perpendicular-bisector',
    sec: '9.5.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A chord is at a distance of $5\\text{ cm}$ from the centre of a circle of radius $13\\text{ cm}$. What is the total length of the chord?',
    prompt_ml: 'ആരം $13\\text{ cm}$ ആയ ഒരു വൃത്തത്തിൽ കേന്ദ്രത്തിൽ നിന്ന് $5\\text{ cm}$ അകലെയുള്ള ഞാണിന്റെ ആകെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$24\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$26\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$24\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$26\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Half-chord length $= \\sqrt{r^2 - d^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$. Total chord length $= 2 \\times 12 = 24\\text{ cm}$.',
    solution_ml: 'ഞാണിന്റെ പകുതി $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12\\text{ cm}$. ഞാണിന്റെ ആകെ നീളം $= 2 \\times 12 = 24\\text{ cm}$.',
    tested_en: 'Calculating total chord length from perpendicular distance and radius.',
    tested_ml: 'ഞാണിന്റെ ആകെ നീളം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.5.2 Chords and Central Angles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.5.3',
    concept: 'm9.5.2.chords-and-angles-at-centre',
    sec: '9.5.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a circle of radius $7\\text{ cm}$, a chord subtends a central angle of $60^\\circ$. What is the length of this chord?',
    prompt_ml: 'ആരം $7\\text{ cm}$ ആയ ഒരു വൃത്തത്തിൽ കേന്ദ്രത്തിൽ $60^\\circ$ കോണുണ്ടാക്കുന്ന ഞാണിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$7\\text{ cm}$' },
      { k: 'B', t: '$14\\text{ cm}$' },
      { k: 'C', t: '$7\\sqrt{2}\\text{ cm}$' },
      { k: 'D', t: '$7\\sqrt{3}\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$7\\text{ cm}$' },
      { k: 'B', t: '$14\\text{ cm}$' },
      { k: 'C', t: '$7\\sqrt{2}\\text{ cm}$' },
      { k: 'D', t: '$7\\sqrt{3}\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'The two radii of length $7\\text{ cm}$ and the central angle of $60^\\circ$ form an isosceles triangle with vertex angle $60^\\circ$, making all three angles $60^\\circ$ (an equilateral triangle). Therefore, chord length $= \\text{radius} = 7\\text{ cm}$.',
    solution_ml: 'കേന്ദ്രകോൺ $60^\\circ$ ആകുമ്പോൾ രണ്ട് ആരങ്ങളും ഞാണും ചേർന്ന് ഒരു സമഭുജ ത്രികോണം രൂപപ്പെടുന്നു. അതിനാൽ ഞാണിന്റെ നീളം ആരത്തിന് തുല്യമായിരിക്കും: $7\\text{ cm}$.',
    tested_en: 'Equilateral triangle property when central angle is 60°.',
    tested_ml: 'കേന്ദ്രകോൺ 60° ആകുമ്പോഴുള്ള സമഭുജ ത്രികോണ പ്രത്യേകത.'
  },
  {
    id: 'obj.m9.5.4',
    concept: 'm9.5.2.chords-and-angles-at-centre',
    sec: '9.5.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two chords $AB$ and $CD$ of a circle subtend central angles of $80^\\circ$ and $50^\\circ$ respectively. Which of the following statements is strictly correct?',
    prompt_ml: 'ഒരു വൃത്തത്തിലെ രണ്ട് ഞാണുകളായ $AB, CD$ എന്നിവ കേന്ദ്രത്തിൽ യഥാക്രമം $80^\\circ, 50^\\circ$ കോണുകളുണ്ടാക്കുന്നു. താഴെ പറയുന്നവയിൽ ശരിയായ പ്രസ്താവന ഏത്?',
    options_en: [
      { k: 'A', t: '$AB > CD$' },
      { k: 'B', t: '$AB < CD$' },
      { k: 'C', t: '$AB = CD$' },
      { k: 'D', t: '$AB = 2CD$' }
    ],
    options_ml: [
      { k: 'A', t: '$AB > CD$' },
      { k: 'B', t: '$AB < CD$' },
      { k: 'C', t: '$AB = CD$' },
      { k: 'D', t: '$AB = 2CD$' }
    ],
    answer: 'A',
    solution_en: 'In any circle, a chord subtending a larger central angle is strictly longer than a chord subtending a smaller central angle (for central angles $\\le 180^\\circ$). Since $80^\\circ > 50^\\circ$, chord $AB > CD$.',
    solution_ml: 'വൃത്തത്തിൽ വലിയ കേന്ദ്രകോണുണ്ടാക്കുന്ന ഞാണിന് ചെറിയ കേന്ദ്രകോണുണ്ടാക്കുന്ന ഞാണിനേക്കാൾ നീളം കൂടുതലായിരിക്കും. $80^\\circ > 50^\\circ$ ആയതിനാൽ $AB > CD$.',
    tested_en: 'Relationship between central angle size and chord length.',
    tested_ml: 'കേന്ദ്രകോണിന്റെ അളവും ഞാണിന്റെ നീളവും തമ്മിലുള്ള താരതമ്യം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.5.3 Angle in a Semicircle
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.5.5',
    concept: 'm9.5.3.angle-in-a-semicircle',
    sec: '9.5.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: '$AB$ is a diameter of a circle. $P$ is a point on the circle such that $\\angle PAB = 35^\\circ$. What is the measure of $\\angle PBA$?',
    prompt_ml: '$AB$ എന്നത് ഒരു വൃത്തത്തിന്റെ വ്യാസമാണ്. വൃത്തത്തിലെ ഒരു ബിന്ദുവാണ് $P$. $\\angle PAB = 35^\\circ$ ആയാൽ $\\angle PBA$ എത്ര?',
    options_en: [
      { k: 'A', t: '$55^\\circ$' },
      { k: 'B', t: '$45^\\circ$' },
      { k: 'C', t: '$65^\\circ$' },
      { k: 'D', t: '$35^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$55^\\circ$' },
      { k: 'B', t: '$45^\\circ$' },
      { k: 'C', t: '$65^\\circ$' },
      { k: 'D', t: '$35^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Since $AB$ is a diameter, the inscribed angle in a semicircle is a right angle: $\\angle APB = 90^\\circ$. In $\\triangle APB$: $\\angle PBA = 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.',
    solution_ml: '$AB$ വ്യാസമായതിനാൽ അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണ്: $\\angle APB = 90^\\circ$. അതിനാൽ $\\angle PBA = 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.',
    tested_en: 'Angle in a semicircle theorem applied to right triangle angle sum.',
    tested_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ സിദ്ധാന്തം ഉപയോഗിച്ച് കോണളവ് കാണൽ.'
  },
  {
    id: 'obj.m9.5.6',
    concept: 'm9.5.3.angle-in-a-semicircle',
    sec: '9.5.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: '$AB$ is a diameter of a circle. If point $Q$ lies outside the circle, what kind of angle is $\\angle AQB$?',
    prompt_ml: '$AB$ എന്നത് ഒരു വൃത്തത്തിന്റെ വ്യാസമാണ്. വൃത്തത്തിന് പുറത്തുള്ള ഒരു ബിന്ദുവാണ് $Q$ എങ്കിൽ $\\angle AQB$ എത്തരത്തിലുള്ള കോണായിരിക്കും?',
    options_en: [
      { k: 'A', t: 'Acute angle ($< 90^\\circ$)' },
      { k: 'B', t: 'Right angle ($= 90^\\circ$)' },
      { k: 'C', t: 'Obtuse angle ($> 90^\\circ$)' },
      { k: 'D', t: 'Straight angle ($= 180^\\circ$)' }
    ],
    options_ml: [
      { k: 'A', t: 'ന്യൂനകോൺ ($< 90^\\circ$)' },
      { k: 'B', t: 'മട്ടകോൺ ($= 90^\\circ$)' },
      { k: 'C', t: 'ബൃഹത്കോൺ ($> 90^\\circ$)' },
      { k: 'D', t: 'സരളകോൺ ($= 180^\\circ$)' }
    ],
    answer: 'A',
    solution_en: 'Points on the circle make a $90^\\circ$ angle with the diameter. Points outside the circle make an acute angle ($< 90^\\circ$), and points inside make an obtuse angle ($> 90^\\circ$).',
    solution_ml: 'വൃത്തത്തിന് പുറത്തുള്ള ബിന്ദുക്കൾ വ്യാസവുമായി ഉണ്ടാക്കുന്ന കോൺ എപ്പോഴും ന്യൂനകോണായിരിക്കും ($< 90^\\circ$).',
    tested_en: 'Angle subtended by diameter at points outside the circle.',
    tested_ml: 'വൃത്തത്തിന് പുറത്തുള്ള ബിന്ദുവിൽ വ്യാസമുണ്ടാക്കുന്ന കോണിന്റെ സ്വഭാവം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.5.4 Angle Subtended by an Arc (Inscribed Angle Theorem)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.5.7',
    concept: 'm9.5.4.angle-subtended-by-an-arc',
    sec: '9.5.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An arc of a circle subtends a central angle of $130^\\circ$. What angle does this arc subtend at any point on the remaining part of the circle?',
    prompt_ml: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിൽ $130^\\circ$ കോണുണ്ടാക്കുന്നു. ഈ ചാപം ബാക്കി വൃത്തഭാഗത്തെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$130^\\circ$' },
      { k: 'C', t: '$50^\\circ$' },
      { k: 'D', t: '$75^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$65^\\circ$' },
      { k: 'B', t: '$130^\\circ$' },
      { k: 'C', t: '$50^\\circ$' },
      { k: 'D', t: '$75^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'By the Inscribed Angle Theorem: the angle at the circumference is half the angle subtended at the centre: $\\frac{130^\\circ}{2} = 65^\\circ$.',
    solution_ml: 'വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണിന്റെ പകുതിയായിരിക്കും ബാക്കി വൃത്തഭാഗത്തുണ്ടാക്കുന്ന കോൺ: $\\frac{130^\\circ}{2} = 65^\\circ$.',
    tested_en: 'Inscribed angle is half the central angle.',
    tested_ml: 'കേന്ദ്രകോണിന്റെ പകുതിയാണ് വൃത്തത്തിലെ കോൺ.'
  },
  {
    id: 'obj.m9.5.8',
    concept: 'm9.5.4.angle-subtended-by-an-arc',
    sec: '9.5.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a cyclic quadrilateral $ABCD$, $\\angle B = 105^\\circ$. What is the measure of the opposite angle $\\angle D$?',
    prompt_ml: 'വൃത്തീയ ചതുർഭുജം $ABCD$-യിൽ $\\angle B = 105^\\circ$ ആയാൽ എതിർകോണായ $\\angle D$-യുടെ അളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$75^\\circ$' },
      { k: 'B', t: '$105^\\circ$' },
      { k: 'C', t: '$85^\\circ$' },
      { k: 'D', t: '$95^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$75^\\circ$' },
      { k: 'B', t: '$105^\\circ$' },
      { k: 'C', t: '$85^\\circ$' },
      { k: 'D', t: '$95^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Opposite angles of a cyclic quadrilateral are supplementary (sum to $180^\\circ$): $\\angle D = 180^\\circ - 105^\\circ = 75^\\circ$.',
    solution_ml: 'വൃത്തീയ ചതുർഭുജത്തിലെ എതിർകോണുകൾ അനുപൂരകങ്ങളാണ് (തുക $180^\\circ$): $\\angle D = 180^\\circ - 105^\\circ = 75^\\circ$.',
    tested_en: 'Supplementary opposite angles of cyclic quadrilateral.',
    tested_ml: 'വൃത്തീയ ചതുർഭുജത്തിലെ എതിർകോണുകളുടെ അനുപൂരക സ്വഭാവം.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.5.1',
    sec: '9.5.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.5.1.chords-and-perpendicular-bisector',
    tested_en: 'Pythagorean distances from centre to parallel chords on opposite sides',
    tested_ml: 'കേന്ദ്രത്തിൽ നിന്ന് ഇരുവശങ്ങളിലുമുള്ള സമാന്തര ഞാണുകളിലേക്കുള്ള അകലവും പൈതഗോറസ് തത്വവും',
    title_en: 'Distance Between Two Parallel Chords on Opposite Sides of Centre',
    title_ml: 'കേന്ദ്രത്തിന് ഇരുവശങ്ങളിലുമുള്ള രണ്ട് സമാന്തര ഞാണുകൾ തമ്മിലുള്ള അകലം',
    prompt_en: '<p>In a circle of radius $10\\text{ cm}$, two parallel chords $AB$ and $CD$ have lengths $16\\text{ cm}$ and $12\\text{ cm}$ respectively, and lie on opposite sides of the centre $O$. Calculate the distance between these two parallel chords.</p>',
    prompt_ml: '<p>ആരം $10\\text{ cm}$ ആയ ഒരു വൃത്തത്തിൽ കേന്ദ്രത്തിന് ഇരുവശങ്ങളിലുമായി $AB, CD$ എന്നീ രണ്ട് സമാന്തര ഞാണുകൾ വരച്ചിരിക്കുന്നു. അവയുടെ നീളങ്ങൾ യഥാക്രമം $16\\text{ cm}$, $12\\text{ cm}$ ആണെങ്കിൽ ഈ സമാന്തര ഞാണുകൾ തമ്മിലുള്ള അകലം കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Distance of Chord } AB \\text{ from Centre } O$$
$$\\text{Length of chord } AB = 16\\text{ cm} \\implies AM = \\frac{16}{2} = 8\\text{ cm}$$
$$\\text{In right-angled triangle } \\triangle OMA \\text{ (where } OA = r = 10\\text{ cm}):$$
$$OM = \\sqrt{OA^2 - AM^2} = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\text{ cm}$$

$$\\text{Step 2: Distance of Chord } CD \\text{ from Centre } O$$
$$\\text{Length of chord } CD = 12\\text{ cm} \\implies CN = \\frac{12}{2} = 6\\text{ cm}$$
$$\\text{In right-angled triangle } \\triangle ONC \\text{ (where } OC = r = 10\\text{ cm}):$$
$$ON = \\sqrt{OC^2 - CN^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}$$

$$\\text{Step 3: Distance Between Parallel Chords}$$
$$\\text{Since the chords lie on opposite sides of the centre, the total distance } MN \\text{ is:}$$
$$MN = OM + ON = 6\\text{ cm} + 8\\text{ cm} = \\mathbf{14\\text{ cm}}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: കേന്ദ്രത്തിൽ നിന്ന് } AB \\text{ എന്ന ഞാണിലേക്കുള്ള അകലം}$$
$$AB = 16\\text{ cm} \\implies AM = \\frac{16}{2} = 8\\text{ cm}$$
$$\\text{മട്ടത്രികോണം } \\triangle OMA\\text{-ൽ } (OA = r = 10\\text{ cm}):$$
$$OM = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\text{ cm}$$

$$\\text{ഘട്ടം 2: കേന്ദ്രത്തിൽ നിന്ന് } CD \\text{ എന്ന ഞാണിലേക്കുള്ള അകലം}$$
$$CD = 12\\text{ cm} \\implies CN = \\frac{12}{2} = 6\\text{ cm}$$
$$\\text{മട്ടത്രികോണം } \\triangle ONC\\text{-ൽ } (OC = r = 10\\text{ cm}):$$
$$ON = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}$$

$$\\text{ഘട്ടം 3: സമാന്തര ഞാണുകൾ തമ്മിലുള്ള അകലം}$$
$$\\text{ഞാണുകൾ കേന്ദ്രത്തിന് ഇരുവശങ്ങളിലായതിനാൽ ആകെ അകലം } MN:$$
$$MN = OM + ON = 6 + 8 = \\mathbf{14\\text{ cm}}$$`
  },

  {
    id: 'w.m9.5.2',
    sec: '9.5.2',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.5.2.chords-and-angles-at-centre',
    tested_en: 'Proof of equal chord central angle theorem using SSS congruence',
    tested_ml: 'SSS സർവ്വസമതാ തത്വം ഉപയോഗിച്ച് തുല്യ ഞാണുകൾ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണുകളുടെ തുല്യത തെളിയിക്കൽ',
    title_en: 'Proof that Equal Chords Subtend Equal Angles at the Centre',
    title_ml: 'തുല്യ ഞാണുകൾ കേന്ദ്രത്തിൽ തുല്യകോണുകൾ ഉണ്ടാക്കുന്നു എന്നതിന്റെ തെളിവ്',
    prompt_en: '<p>Prove geometrically that chords of equal length in a circle subtend equal angles at the centre. State the congruence criterion applied in your deduction.</p>',
    prompt_ml: '<p>ഒരു വൃത്തത്തിലെ തുല്യ നീളമുള്ള ഞാണുകൾ കേന്ദ്രത്തിൽ തുല്യകോണുകൾ ഉണ്ടാക്കുന്നു എന്ന് ജ്യാമിതീയമായി തെളിയിക്കുക. ഇതിനായി ഉപയോഗിച്ച ത്രികോണ സമീകരണ തത്വം വ്യക്തമാക്കുക.</p>',
    solution_en: `$$\\text{Given:}$$
$$\\text{A circle with centre } O. \\text{ Two chords } AB \\text{ and } CD \\text{ such that } AB = CD.$$

$$\\text{To Prove:}$$
$$\\angle AOB = \\angle COD$$

$$\\text{Construction:}$$
$$\\text{Join radii } OA, OB, OC, \\text{ and } OD.$$

$$\\text{Proof:}$$
$$\\text{In } \\triangle AOB \\text{ and } \\triangle COD:$$
$$OA = OC = r \\quad (\\text{radii of the same circle})$$
$$OB = OD = r \\quad (\\text{radii of the same circle})$$
$$AB = CD \\quad (\\text{given})$$

$$\\text{By SSS (Side-Side-Side) Congruence Criterion:}$$
$$\\triangle AOB \\cong \\triangle COD$$

$$\\text{Since corresponding parts of congruent triangles are equal (CPCTC):}$$
$$\\mathbf{\\angle AOB = \\angle COD}$$`,
    solution_ml: `$$\\text{തന്നിരിക്കുന്നത്:}$$
$$O \\text{ കേന്ദ്രമായ വൃത്തത്തിലെ രണ്ട് തുല്യ ഞാണുകളാണ് } AB, CD \\ (AB = CD).$$

$$\\text{തെളിയിക്കേണ്ടത്:}$$
$$\\angle AOB = \\angle COD$$

$$\\text{നിർമ്മിതി:}$$
$$OA, OB, OC, OD \\text{ എന്നീ ആരങ്ങൾ വരയ്ക്കുന്നു.}$$

$$\\text{തെളിവ്:}$$
$$\\triangle AOB, \\triangle COD \\text{ എന്നീ ത്രികോണങ്ങളിൽ:}$$
$$OA = OC = r \\quad (\\text{ഒരേ വൃത്തത്തിലെ ആരങ്ങൾ})$$
$$OB = OD = r \\quad (\\text{ഒരേ വൃത്തത്തിലെ ആരങ്ങൾ})$$
$$AB = CD \\quad (\\text{തന്നിരിക്കുന്നു})$$

$$\\text{SSS (വശം-വശം-വശം) തുല്യതാ തത്വപ്രകാരം:}$$
$$\\triangle AOB \\cong \\triangle COD$$

$$\\text{സർവ്വസമ ത്രികോണങ്ങളുടെ അനുരൂപ കോണുകൾ തുല്യമായതിനാൽ:}$$
$$\\mathbf{\\angle AOB = \\angle COD}$$`
  },

  {
    id: 'w.m9.5.3',
    sec: '9.5.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.5.3.angle-in-a-semicircle',
    tested_en: 'Proof that angle in a semicircle is a right angle using isosceles triangles',
    tested_ml: 'സമപാർശ്വ ത്രികോണങ്ങൾ ഉപയോഗിച്ച് അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണെന്ന് തെളിയിക്കൽ',
    title_en: 'Proof that the Angle Inscribed in a Semicircle is 90°',
    title_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണെന്നതിന്റെ തെളിവ്',
    prompt_en: '<p>Prove that the angle subtended by a diameter at any point on the circumference of a circle is strictly a right angle ($90^\\circ$). Provide step-by-step reasoning using isosceles triangle angle properties.</p>',
    prompt_ml: '<p>ഒരു വൃത്തത്തിന്റെ വ്യാസം വൃത്തത്തിലെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ കൃത്യമായും മട്ടകോണായിരിക്കും ($90^\\circ$) എന്ന് തെളിയിക്കുക. സമപാർശ്വ ത്രികോണങ്ങളുടെ കോൺ സവിശേഷതകൾ ഉപയോഗിച്ച് ഘട്ടങ്ങളായി വിശദീകരിക്കുക.</p>',
    solution_en: `$$\\text{Given:}$$
$$\\text{A circle with centre } O \\text{ and diameter } AB. \\text{ Point } P \\text{ is any point on the circle distinct from } A \\text{ and } B.$$

$$\\text{To Prove:}$$
$$\\angle APB = 90^\\circ$$

$$\\text{Construction:}$$
$$\\text{Join } OP. \\text{ This divides } \\triangle APB \\text{ into two triangles } \\triangle OAP \\text{ and } \\triangle OBP.$$

$$\\text{Step 1: Isosceles Triangle Analysis}$$
$$\\text{In } \\triangle OAP, \\ OA = OP = r \\implies \\angle OAP = \\angle OPA = \\alpha$$
$$\\text{In } \\triangle OBP, \\ OB = OP = r \\implies \\angle OBP = \\angle OPB = \\beta$$

$$\\text{Step 2: Total Angle at } P$$
$$\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta$$

$$\\text{Step 3: Angle Sum of } \\triangle APB$$
$$\\text{The sum of interior angles in } \\triangle APB \\text{ is } 180^\\circ:$$
$$\\angle PAB + \\angle PBA + \\angle APB = 180^\\circ$$
$$\\alpha + \\beta + (\\alpha + \\beta) = 180^\\circ$$
$$2(\\alpha + \\beta) = 180^\\circ \\implies \\alpha + \\beta = \\frac{180^\\circ}{2} = 90^\\circ$$

$$\\text{Conclusion:}$$
$$\\mathbf{\\angle APB = 90^\\circ} \\quad (\\text{A Right Angle})$$`,
    solution_ml: `$$\\text{തന്നിരിക്കുന്നത്:}$$
$$O \\text{ കേന്ദ്രവും } AB \\text{ വ്യാസവുമായ വൃത്തത്തിലെ ഒരു ബിന്ദുവാണ് } P.$$

$$\\text{തെളിയിക്കേണ്ടത്:}$$
$$\\angle APB = 90^\\circ$$

$$\\text{നിർമ്മിതി:}$$
$$OP \\text{ എന്ന ആരം വരയ്ക്കുന്നു. ഇത് } \\triangle APB\\text{-യെ രണ്ട് ത്രികോണങ്ങളാക്കി മാറ്റുന്നു.}$$

$$\\text{ഘട്ടം 1: സമപാർശ്വ ത്രികോണ വിശകലനം}$$
$$\\triangle OAP\\text{-ൽ } OA = OP = r \\implies \\angle OAP = \\angle OPA = \\alpha$$
$$\\triangle OBP\\text{-ൽ } OB = OP = r \\implies \\angle OBP = \\angle OPB = \\beta$$

$$\\text{ഘട്ടം 2: } P\\text{-ലെ ആകെ കോൺ}$$
$$\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta$$

$$\\text{ഘട്ടം 3: } \\triangle APB\\text{-യിലെ കോണുകളുടെ തുക}$$
$$\\angle PAB + \\angle PBA + \\angle APB = 180^\\circ$$
$$\\alpha + \\beta + (\\alpha + \\beta) = 180^\\circ$$
$$2(\\alpha + \\beta) = 180^\\circ \\implies \\alpha + \\beta = \\frac{180^\\circ}{2} = 90^\\circ$$

$$\\text{തീരുമാനം:}$$
$$\\mathbf{\\angle APB = 90^\\circ} \\quad (\\text{മട്ടകോൺ})$$`
  },

  {
    id: 'w.m9.5.4',
    sec: '9.5.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.5.4.angle-subtended-by-an-arc',
    tested_en: 'Inscribed angles in alternate segments and supplementary opposite angles',
    tested_ml: 'വിവിധ വൃത്തഖണ്ഡങ്ങളിലെ കോണുകളും വൃത്തീയ ചതുർഭുജങ്ങളിലെ എതിർകോണുകളുടെ അനുപൂരകതയും',
    title_en: 'Inscribed Angles in Opposite Segments and Cyclic Quadrilateral Theorem',
    title_ml: 'എതിർ വൃത്തഖണ്ഡങ്ങളിലെ കോണുകളും വൃത്തീയ ചതുർഭുജ സിദ്ധാന്തവും',
    prompt_en: '<p>In a circle with centre $O$, chord $AB$ subtends a central angle $\\angle AOB = 140^\\circ$. Points $P$ and $Q$ lie on the major and minor arcs respectively. Find $\\angle APB$ and $\\angle AQB$, and demonstrate that the opposite angles of quadrilateral $APBQ$ are supplementary.</p>',
    prompt_ml: '<p>കേന്ദ്രം $O$ ആയ ഒരു വൃത്തത്തിലെ ഞാൺ $AB$ കേന്ദ്രത്തിൽ ഉണ്ടാക്കുന്ന കോൺ $\\angle AOB = 140^\\circ$ ആണ്. $P, Q$ എന്നിവ യഥാക്രമം വലിയ ചാപത്തിലും ചെറിയ ചാപത്തിലുമുള്ള ബിന്ദുക്കളാണ്. $\\angle APB$, $\\angle AQB$ എന്നിവയുടെ അളവുകൾ കണ്ടെത്തുകയും, $APBQ$ എന്ന ചതുർഭുജത്തിലെ എതിർകോണുകൾ അനുപൂരകങ്ങളാണെന്ന് സമർത്ഥിക്കുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{Step 1: Angle in the Major Segment } (\\angle APB)$$
$$\\text{By the Inscribed Angle Theorem, the angle subtended by minor arc } AB \\text{ at point } P \\text{ on the major arc is half the central angle:}$$
$$\\angle APB = \\frac{1}{2} \\angle AOB = \\frac{1}{2} \\times 140^\\circ = \\mathbf{70^\\circ}$$

$$\\text{Step 2: Reflex Angle at Centre and Angle in the Minor Segment } (\\angle AQB)$$
$$\\text{The major arc subtends the reflex angle at centre:}$$
$$\\text{Reflex } \\angle AOB = 360^\\circ - 140^\\circ = 220^\\circ$$
$$\\text{The angle subtended by major arc } AB \\text{ at point } Q \\text{ on the minor arc is half this reflex angle:}$$
$$\\angle AQB = \\frac{1}{2} \\times \\text{Reflex } \\angle AOB = \\frac{1}{2} \\times 220^\\circ = \\mathbf{110^\\circ}$$

$$\\text{Step 3: Verification of Supplementary Opposite Angles}$$
$$\\text{In quadrilateral } APBQ, \\text{ opposite angles are } \\angle APB \\text{ and } \\angle AQB:$$
$$\\angle APB + \\angle AQB = 70^\\circ + 110^\\circ = \\mathbf{180^\\circ}$$
$$\\text{This confirms that opposite angles of a cyclic quadrilateral are supplementary.}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: വലിയ വൃത്തഖണ്ഡത്തിലെ കോൺ } (\\angle APB)$$
$$\\text{ചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണിന്റെ പകുതിയാണ് വൃത്തത്തിലുണ്ടാക്കുന്ന കോൺ:}$$
$$\\angle APB = \\frac{1}{2} \\angle AOB = \\frac{1}{2} \\times 140^\\circ = \\mathbf{70^\\circ}$$

$$\\text{ഘട്ടം 2: ബൃഹത് കേന്ദ്രകോണും ചെറിയ വൃത്തഖണ്ഡത്തിലെ കോണും } (\\angle AQB)$$
$$\\text{വലിയ ചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ:}$$
$$\\text{Reflex } \\angle AOB = 360^\\circ - 140^\\circ = 220^\\circ$$
$$\\angle AQB = \\frac{1}{2} \\times 220^\\circ = \\mathbf{110^\\circ}$$

$$\\text{ഘട്ടം 3: എതിർകോണുകളുടെ തുക പരിശോധിക്കൽ}$$
$$APBQ \\text{ എന്ന വൃത്തീയ ചതുർഭുജത്തിലെ എതിർകോണുകൾ } \\angle APB, \\angle AQB \\text{ എന്നിവയാണ്:}$$
$$\\angle APB + \\angle AQB = 70^\\circ + 110^\\circ = \\mathbf{180^\\circ}$$
$$\\text{ഇത് വൃത്തീയ ചതുർഭുജത്തിലെ എതിർകോണുകൾ അനുപൂരകങ്ങളാണ് എന്ന സിദ്ധാന്തം ശരിവെക്കുന്നു.}$$`
  },

  {
    id: 'w.m9.5.5',
    sec: '9.5.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.5.1.chords-and-perpendicular-bisector',
    tested_en: 'Perpendicular from centre to chord bisector property and radius calculation',
    tested_ml: 'കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബം ഞാണിനെ സമഭാഗം ചെയ്യുന്ന തത്വവും ആരവും കണക്കാക്കൽ',
    title_en: 'Perpendicular from Centre to Chord and Chord Bisector Property',
    title_ml: 'കേന്ദ്രത്തിൽ നിന്ന് ഞാണിലേക്കുള്ള ലംബവും ഞാൺ സമഭാജിയും',
    prompt_en: '<p>A chord of length $24\\text{ cm}$ is at a distance of $5\\text{ cm}$ from the centre of a circle.<br>(a) Find the radius of the circle.<br>(b) Find the length of another chord in the same circle which is at a distance of $12\\text{ cm}$ from the centre.</p>',
    prompt_ml: '<p>വൃത്തകേന്ദ്രത്തിൽ നിന്ന് $5\\text{ cm}$ അകലെയുള്ള ഒരു ഞാണിന്റെ നീളം $24\\text{ cm}$ ആണ്.<br>(a) വൃത്തത്തിന്റെ ആരം കണ്ടെത്തുക.<br>(b) ഇതേ വൃത്തത്തിൽ കേന്ദ്രത്തിൽ നിന്ന് $12\\text{ cm}$ അകലെയുള്ള മറ്റൊരു ഞാണിന്റെ നീളം കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{(a) Radius } r:$$
$$\\text{Half-length of first chord } = \\frac{24}{2} = 12\\text{ cm}.$$
$$\\text{Distance from centre } d_1 = 5\\text{ cm}.$$
$$r = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = \\mathbf{13\\text{ cm}}.$$

$$\\text{(b) Length of second chord at distance } d_2 = 12\\text{ cm}:$$
$$\\text{Half-length } = \\sqrt{r^2 - d_2^2} = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5\\text{ cm}.$$
$$\\text{Total length of chord } = 2 \\times 5 = \\mathbf{10\\text{ cm}}.$$`,
    solution_ml: `$$\\text{(a) വൃത്തത്തിന്റെ ആരം } r:$$
$$\\text{ആദ്യ ഞാണിന്റെ പകുതി നീളം } = \\frac{24}{2} = 12\\text{ cm}.$$
$$\\text{കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം } = 5\\text{ cm}.$$
$$r = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = \\mathbf{13\\text{ cm}}.$$

$$\\text{(b) കേന്ദ്രത്തിൽ നിന്ന് } 12\\text{ cm} \\text{ അകലെയുള്ള ഞാണിന്റെ നീളം:}$$
$$\\text{ഞാണിന്റെ പകുതി } = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5\\text{ cm}.$$
$$\\text{ആകെ ഞാണിന്റെ നീളം } = 2 \\times 5 = \\mathbf{10\\text{ cm}}.$$`
  },

  {
    id: 'w.m9.5.6',
    sec: '9.5.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.5.4.angle-subtended-by-an-arc',
    tested_en: 'Angles in the same segment and triangle angle relationships',
    tested_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകളുടെ സമത്വവും ത്രികോണ കോൺ ബന്ധങ്ങളും',
    title_en: 'Angles in the Same Segment and Intersecting Chords',
    title_ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകളും ഖണ്ഡിക്കുന്ന ഞാണുകളും',
    prompt_en: '<p>In a circle, $A, B, C, D$ are four points on the circumference. Chords $AC$ and $BD$ intersect at point $E$ such that $\\angle BEC = 130^\\circ$ and $\\angle ECD = 20^\\circ$.<br>(a) Find $\\angle EDC$.<br>(b) Using the property of angles in the same segment, determine $\\angle BAC$.</p>',
    prompt_ml: '<p>ഒരു വൃത്തത്തിലെ നാല് ബിന്ദുക്കളാണ് $A, B, C, D$. $AC, BD$ എന്നീ ഞാണുകൾ $E$ എന്ന ബിന്ദുവിൽ ഖണ്ഡിക്കുന്നു. $\\angle BEC = 130^\\circ$, $\\angle ECD = 20^\\circ$ ആണ്.<br>(a) $\\angle EDC$ കണ്ടെത്തുക.<br>(b) ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകളുടെ സമത്വം ഉപയോഗിച്ച് $\\angle BAC$ നിർണ്ണയിക്കുക.</p>',
    solution_en: `$$\\text{(a) In } \\triangle CDE:$$
$$\\angle DEC + \\angle BEC = 180^\\circ \\quad (\\text{linear pair}) \\implies \\angle DEC = 180^\\circ - 130^\\circ = 50^\\circ.$$
$$\\text{Sum of angles in } \\triangle CDE:$$
$$\\angle EDC = 180^\\circ - (\\angle DEC + \\angle ECD) = 180^\\circ - (50^\\circ + 20^\\circ) = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}.$$

$$\\text{(b) Angles in the same segment:}$$
$$\\text{Angles subtended by arc } BC \\text{ at points } A \\text{ and } D \\text{ on the circumference are equal:}$$
$$\\angle BAC = \\angle BDC = \\angle EDC = \\mathbf{110^\\circ}.$$`,
    solution_ml: `$$\\text{(a) } \\triangle CDE\\text{-ൽ:}$$
$$\\angle DEC + \\angle BEC = 180^\\circ \\implies \\angle DEC = 180^\\circ - 130^\\circ = 50^\\circ.$$
$$\\triangle CDE\\text{-ലെ കോണുകളുടെ തുക } 180^\\circ \\text{ ആയതിനാൽ:}$$
$$\\angle EDC = 180^\\circ - (50^\\circ + 20^\\circ) = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}.$$

$$\\text{(b) ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ:}$$
$$BC \\text{ എന്ന ചാപം വൃത്തത്തിലുണ്ടാക്കുന്ന കോണുകൾ തുല്യമായതിനാൽ:}$$
$$\\angle BAC = \\angle BDC = \\angle EDC = \\mathbf{110^\\circ}.$$`
  }
);
