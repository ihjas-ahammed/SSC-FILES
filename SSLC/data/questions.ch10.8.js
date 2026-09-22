/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 8 — Solids (ഘനരൂപങ്ങൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.8.1 Square Pyramid: Dimensions & Relations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.8.1',
    concept: 'm10.8.1.square-pyramid-dimensions-and-relations',
    sec: '10.8.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a square pyramid, the base edge is $a = 12$ cm and the vertical height is $h = 8$ cm. What is the slant height $l$?',
    prompt_ml: 'ഒരു സമചതുര സ്തൂപികയുടെ പാദവക്ക് $a = 12$ cm ഉം ലംബ ഉയരം $h = 8$ cm ഉം ആണ്. ചരിവുയരം $l$ എത്ര?',
    options_en: [
      { k: 'A', t: '10 cm' },
      { k: 'B', t: '14 cm' },
      { k: 'C', t: '12 cm' },
      { k: 'D', t: '16 cm' }
    ],
    options_ml: [
      { k: 'A', t: '10 cm' },
      { k: 'B', t: '14 cm' },
      { k: 'C', t: '12 cm' },
      { k: 'D', t: '16 cm' }
    ],
    answer: 'A',
    solution_en: 'Half-base $= a/2 = 6$ cm. Slant height $l = \\sqrt{h^2 + (a/2)^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ cm.',
    solution_ml: 'പാദത്തിന്റെ പകുതി $= 12 / 2 = 6$ cm. ചരിവുയരം $l = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$ cm.',
    tested_en: 'Right-triangle relationship: l² = h² + (a/2)².',
    tested_ml: 'ചരിവുയര ബന്ധം: l² = h² + (a/2)².'
  },
  {
    id: 'obj.m10.8.2',
    concept: 'm10.8.1.square-pyramid-dimensions-and-relations',
    sec: '10.8.1',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'In a square pyramid, the slant height is $l = 12$ cm and the base edge is $a = 10$ cm. What is the length of each lateral edge $e$?',
    prompt_ml: 'ഒരു സമചതുര സ്തൂപികയുടെ ചരിവുയരം $l = 12$ cm ഉം പാദവക്ക് $a = 10$ cm ഉം ആണ്. ഓരോ പാർശ്വധാരയുടെയും ($e$) നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '13 cm' },
      { k: 'B', t: '15 cm' },
      { k: 'C', t: '17 cm' },
      { k: 'D', t: '14 cm' }
    ],
    options_ml: [
      { k: 'A', t: '13 cm' },
      { k: 'B', t: '15 cm' },
      { k: 'C', t: '17 cm' },
      { k: 'D', t: '14 cm' }
    ],
    answer: 'A',
    solution_en: 'Half-base $= 10/2 = 5$ cm. Lateral edge $e = \\sqrt{l^2 + (a/2)^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ cm.',
    solution_ml: 'പാർശ്വധാര $e = \\sqrt{l^2 + (a/2)^2} = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ cm.',
    tested_en: 'Right-triangle relationship: e² = l² + (a/2)².',
    tested_ml: 'പാർശ്വധാര ബന്ധം: e² = l² + (a/2)².'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.2 Surface Area & Volume of Square Pyramid
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.8.3',
    concept: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A square pyramid has a base edge of 8 cm and a slant height of 5 cm. What is its lateral surface area?',
    prompt_ml: 'പാദവക്ക് 8 cm ഉം ചരിവുയരം 5 cm ഉം ആയ സമചതുര സ്തൂപികയുടെ പാർശ്വ പ്രതല പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '80 cm²' },
      { k: 'B', t: '160 cm²' },
      { k: 'C', t: '40 cm²' },
      { k: 'D', t: '144 cm²' }
    ],
    options_ml: [
      { k: 'A', t: '80 cm²' },
      { k: 'B', t: '160 cm²' },
      { k: 'C', t: '40 cm²' },
      { k: 'D', t: '144 cm²' }
    ],
    answer: 'A',
    solution_en: 'Lateral surface area $\\text{LSA} = 2al = 2 \\times 8 \\times 5 = 80\\text{ cm}^2$.',
    solution_ml: 'പാർശ്വ പരപ്പളവ് $= 2al = 2 \\times 8 \\times 5 = 80\\text{ cm}^2$.',
    tested_en: 'Lateral surface area formula: LSA = 2al.',
    tested_ml: 'പാർശ്വ പരപ്പളവ് കാണൽ: 2al.'
  },
  {
    id: 'obj.m10.8.4',
    concept: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A square pyramid has a base edge of 6 cm and height of 10 cm. What is its volume?',
    prompt_ml: 'പാദവക്ക് 6 cm ഉം ലംബ ഉയരം 10 cm ഉം ആയ സമചതുര സ്തൂപികയുടെ വ്യാപ്തം എത്ര?',
    options_en: [
      { k: 'A', t: '120 cm³' },
      { k: 'B', t: '360 cm³' },
      { k: 'C', t: '60 cm³' },
      { k: 'D', t: '180 cm³' }
    ],
    options_ml: [
      { k: 'A', t: '120 cm³' },
      { k: 'B', t: '360 cm³' },
      { k: 'C', t: '60 cm³' },
      { k: 'D', t: '180 cm³' }
    ],
    answer: 'A',
    solution_en: '$V = \\frac{1}{3} a^2 h = \\frac{1}{3} \\times 6^2 \\times 10 = \\frac{1}{3} \\times 36 \\times 10 = 120\\text{ cm}^3$.',
    solution_ml: 'വ്യാപ്തം $V = \\frac{1}{3} a^2 h = \\frac{1}{3} \\times 36 \\times 10 = 120\\text{ cm}^3$.',
    tested_en: 'Volume of square pyramid: V = (1/3) a²h.',
    tested_ml: 'സമചതുര സ്തൂപികയുടെ വ്യാപ്തം: (1/3) a²h.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.3 Right Circular Cone: Area & Volume
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.8.5',
    concept: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A cone has a base radius of 3 cm and a vertical height of 4 cm. What is its curved surface area in terms of $\\pi$?',
    prompt_ml: 'പാദ ആരം 3 cm ഉം ലംബ ഉയരം 4 cm ഉം ആയ കോണിന്റെ വക്രതല പരപ്പളവ് എത്ര ($\\pi$ ൽ)?',
    options_en: [
      { k: 'A', t: '$15\\pi$ cm²' },
      { k: 'B', t: '$12\\pi$ cm²' },
      { k: 'C', t: '$24\\pi$ cm²' },
      { k: 'D', t: '$20\\pi$ cm²' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\pi$ cm²' },
      { k: 'B', t: '$12\\pi$ cm²' },
      { k: 'C', t: '$24\\pi$ cm²' },
      { k: 'D', t: '$20\\pi$ cm²' }
    ],
    answer: 'A',
    solution_en: 'Slant height $l = \\sqrt{3^2 + 4^2} = 5$ cm. Curved surface area $= \\pi r l = \\pi \\times 3 \\times 5 = 15\\pi\\text{ cm}^2$.',
    solution_ml: 'ചരിവുയരം $l = \\sqrt{3^2 + 4^2} = 5$ cm. വക്രതല പരപ്പളവ് $= \\pi r l = 15\\pi\\text{ cm}^2$.',
    tested_en: 'Curved surface area of cone: CSA = πrl.',
    tested_ml: 'കോണിന്റെ വക്രതല പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m10.8.6',
    concept: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'A sector of radius 12 cm and central angle $120^\\circ$ is rolled up into a cone. What is the base radius of the cone?',
    prompt_ml: 'ആരം 12 cm ഉം കേന്ദ്രകോൺ $120^\\circ$ ഉം ഉള്ള വൃത്താംശം ചുരുട്ടി ഒരു കോണുണ്ടാക്കുന്നു. കോണിന്റെ പാദ ആരം എത്ര?',
    options_en: [
      { k: 'A', t: '4 cm' },
      { k: 'B', t: '6 cm' },
      { k: 'C', t: '3 cm' },
      { k: 'D', t: '8 cm' }
    ],
    options_ml: [
      { k: 'A', t: '4 cm' },
      { k: 'B', t: '6 cm' },
      { k: 'C', t: '3 cm' },
      { k: 'D', t: '8 cm' }
    ],
    answer: 'A',
    solution_en: 'Here slant height $l = 12$ cm. Using $\\frac{r}{l} = \\frac{x}{360^\\circ} \\implies \\frac{r}{12} = \\frac{120}{360} = \\frac{1}{3} \\implies r = 12 \\times \\frac{1}{3} = 4$ cm.',
    solution_ml: 'ചരിവുയരം $l = 12$ cm. $\\frac{r}{l} = \\frac{120}{360} = \\frac{1}{3} \\implies r = 4$ cm.',
    tested_en: 'Sector unfolding formula: r / l = x / 360°.',
    tested_ml: 'വൃത്താംശം ചുരുട്ടുമ്പോൾ പാദ ആരം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.4 Sphere and Hemisphere: Area & Volume
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.8.7',
    concept: 'm10.8.4.sphere-and-hemisphere',
    sec: '10.8.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'If the radius of a sphere is doubled, by what factor does its volume increase?',
    prompt_ml: 'ഒരു ഗോളത്തിന്റെ ആരം ഇരട്ടിയാക്കിയാൽ അതിന്റെ വ്യാപ്തം എത്ര മടങ്ങായി വർദ്ധിക്കും?',
    options_en: [
      { k: 'A', t: '8 times' },
      { k: 'B', t: '4 times' },
      { k: 'C', t: '2 times' },
      { k: 'D', t: '16 times' }
    ],
    options_ml: [
      { k: 'A', t: '8 മടങ്ങ്' },
      { k: 'B', t: '4 മടങ്ങ്' },
      { k: 'C', t: '2 മടങ്ങ്' },
      { k: 'D', t: '16 മടങ്ങ്' }
    ],
    answer: 'A',
    solution_en: 'Volume is proportional to $r^3$: $V\' = \\frac{4}{3}\\pi (2r)^3 = 8 \\times \\left(\\frac{4}{3}\\pi r^3\\right) = 8V$. The volume increases by 8 times.',
    solution_ml: 'വ്യാപ്തം ആരത്തിന്റെ ഘനത്തിന് അനുപാതത്തിലാണ് ($r^3$): $(2r)^3 = 8r^3$. അതിനാൽ വ്യാപ്തം 8 മടങ്ങായി വർദ്ധിക്കും.',
    tested_en: 'Cubic scaling of volume with radius in a sphere.',
    tested_ml: 'ആരം ഇരട്ടിക്കുമ്പോഴുള്ള വ്യാപ്ത മാറ്റം.'
  },
  {
    id: 'obj.m10.8.8',
    concept: 'm10.8.4.sphere-and-hemisphere',
    sec: '10.8.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the total surface area of a solid hemisphere of radius 7 cm (take $\\pi = \\frac{22}{7}$)?',
    prompt_ml: '7 cm ആരമുള്ള ഒരു ഖര അർദ്ധഗോളത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് എത്ര ($\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '462 cm²' },
      { k: 'B', t: '308 cm²' },
      { k: 'C', t: '616 cm²' },
      { k: 'D', t: '154 cm²' }
    ],
    options_ml: [
      { k: 'A', t: '462 cm²' },
      { k: 'B', t: '308 cm²' },
      { k: 'C', t: '616 cm²' },
      { k: 'D', t: '154 cm²' }
    ],
    answer: 'A',
    solution_en: 'Total surface area of solid hemisphere $= 3\\pi r^2 = 3 \\times \\frac{22}{7} \\times 7^2 = 3 \\times 22 \\times 7 = 462\\text{ cm}^2$.',
    solution_ml: 'ഖര അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവ് $= 3\\pi r^2 = 3 \\times \\frac{22}{7} \\times 49 = 462\\text{ cm}^2$.',
    tested_en: 'Total surface area of solid hemisphere: TSA = 3πr².',
    tested_ml: 'ഖര അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവ് കാണൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.8.1 Square Pyramid: Dimensions & Relations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.8.1',
    concept: 'm10.8.1.square-pyramid-dimensions-and-relations',
    sec: '10.8.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A square pyramid has a base edge of $a = 16$ cm and slant height of $l = 17$ cm.\\n(a) State the relationship between height $h$, slant height $l$, and base edge $a$.\\n(b) Calculate the vertical height $h$ of the pyramid.\\n(c) Calculate the length of the lateral edge $e$.',
    prompt_ml: 'ഒരു സമചതുര സ്തൂപികയുടെ പാദവക്ക് $a = 16$ cm ഉം ചരിവുയരം $l = 17$ cm ഉം ആണ്.\\n(a) ലംബ ഉയരം $h$, ചരിവുയരം $l$, പാദവക്ക് $a$ എന്നിവ തമ്മിലുള്ള ബന്ധം എഴുതുക.\\n(b) സ്തൂപികയുടെ ലംബ ഉയരം $h$ കണ്ടെത്തുക.\\n(c) പാർശ്വധാരയുടെ ($e$) നീളം കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>The relation is $l^2 = h^2 + (a/2)^2 \\iff h = \\sqrt{l^2 - (a/2)^2}$.</li>\n  <li>Half of the base edge $= 16 / 2 = 8$ cm. Vertical height $h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$ cm.</li>\n  <li>Lateral edge $e = \\sqrt{l^2 + (a/2)^2} = \\sqrt{17^2 + 8^2} = \\sqrt{289 + 64} = \\sqrt{353} \\approx 18.79$ cm (or $\\sqrt{353}$ cm).</li>\n</ol>\n<p><b>Final Answer:</b> (a) l² = h² + (a/2)²; (b) h = 15 cm; (c) e = √353 cm (approx 18.79 cm)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Stating the formula: 1 mark</li>\n  <li>Calculating vertical height h = 15 cm: 1.5 marks</li>\n  <li>Calculating lateral edge e = √353 cm: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ബന്ധം: $h = \\sqrt{l^2 - (a/2)^2}$.</li>\n  <li>പാദത്തിന്റെ പകുതി $= 8$ cm. ലംബ ഉയരം $h = \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$ cm.</li>\n  <li>പാർശ്വധാര $e = \\sqrt{17^2 + 8^2} = \\sqrt{353}$ cm (ഏകദേശം 18.79 cm).</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) l² = h² + (a/2)²; (b) h = 15 cm; (c) e = √353 cm (ഏകദേശം 18.79 cm)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>\n  <li>ലംബ ഉയരം 15 cm കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>\n  <li>പാർശ്വധാര കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'The relation is $l^2 = h^2 + (a/2)^2 \\iff h = \\sqrt{l^2 - (a/2)^2}$.',
      'Half of the base edge $= 16 / 2 = 8$ cm. Vertical height $h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$ cm.',
      'Lateral edge $e = \\sqrt{l^2 + (a/2)^2} = \\sqrt{17^2 + 8^2} = \\sqrt{289 + 64} = \\sqrt{353} \\approx 18.79$ cm (or $\\sqrt{353}$ cm).'
    ],
    steps_ml: [
      'ബന്ധം: $h = \\sqrt{l^2 - (a/2)^2}$.',
      'പാദത്തിന്റെ പകുതി $= 8$ cm. ലംബ ഉയരം $h = \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$ cm.',
      'പാർശ്വധാര $e = \\sqrt{17^2 + 8^2} = \\sqrt{353}$ cm (ഏകദേശം 18.79 cm).'
    ],
    rubric_en: [
      'Stating the formula: 1 mark',
      'Calculating vertical height h = 15 cm: 1.5 marks',
      'Calculating lateral edge e = √353 cm: 1.5 marks'
    ],
    rubric_ml: [
      'സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്',
      'ലംബ ഉയരം 15 cm കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      'പാർശ്വധാര കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) l² = h² + (a/2)²; (b) h = 15 cm; (c) e = √353 cm (approx 18.79 cm)',
    answer_ml: '(a) l² = h² + (a/2)²; (b) h = 15 cm; (c) e = √353 cm (ഏകദേശം 18.79 cm)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.2 Surface Area & Volume of Square Pyramid
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.8.2',
    concept: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A solid metal square pyramid has base edge 10 cm and height 12 cm.\\n(a) Find the slant height $l$ of the pyramid.\\n(b) Find the total surface area of the pyramid.\\n(c) Find the volume of the pyramid.',
    prompt_ml: 'ഒരു ഖര ലോഹ സമചതുര സ്തൂപികയുടെ പാദവക്ക് 10 cm ഉം ലംബ ഉയരം 12 cm ഉം ആണ്.\\n(a) സ്തൂപികയുടെ ചരിവുയരം $l$ കാണുക.\\n(b) സ്തൂപികയുടെ ആകെ ഉപരിതല പരപ്പളവ് കാണുക.\\n(c) സ്തൂപികയുടെ വ്യാപ്തം കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Half-base $= 10/2 = 5$ cm. Slant height $l = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ cm.</li>\n  <li>Base Area $= 10^2 = 100\\text{ cm}^2$. Lateral Area $= 2al = 2 \\times 10 \\times 13 = 260\\text{ cm}^2$. Total Surface Area $= 100 + 260 = 360\\text{ cm}^2$.</li>\n  <li>Volume $V = \\frac{1}{3}a^2h = \\frac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) l = 13 cm; (b) TSA = 360 cm²; (c) V = 400 cm³</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Slant height l = 13 cm: 1 mark</li>\n  <li>Total surface area = 360 cm²: 1.5 marks</li>\n  <li>Volume = 400 cm³: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ചരിവുയരം $l = \\sqrt{12^2 + 5^2} = 13$ cm.</li>\n  <li>പാദ പരപ്പളവ് $= 100\\text{ cm}^2$. പാർശ്വ പരപ്പളവ് $= 2 \\times 10 \\times 13 = 260\\text{ cm}^2$. ആകെ പരപ്പളവ് $= 100 + 260 = 360\\text{ cm}^2$.</li>\n  <li>വ്യാപ്തം $V = \\frac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) l = 13 cm; (b) ആകെ പരപ്പളവ് = 360 cm²; (c) വ്യാപ്തം = 400 cm³</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ചരിവുയരം കാണൽ: 1 മാർക്ക്</li>\n  <li>ആകെ പരപ്പളവ് കാണൽ: 1.5 മാർക്ക്</li>\n  <li>വ്യാപ്തം കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Half-base $= 10/2 = 5$ cm. Slant height $l = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ cm.',
      'Base Area $= 10^2 = 100\\text{ cm}^2$. Lateral Area $= 2al = 2 \\times 10 \\times 13 = 260\\text{ cm}^2$. Total Surface Area $= 100 + 260 = 360\\text{ cm}^2$.',
      'Volume $V = \\frac{1}{3}a^2h = \\frac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$.'
    ],
    steps_ml: [
      'ചരിവുയരം $l = \\sqrt{12^2 + 5^2} = 13$ cm.',
      'പാദ പരപ്പളവ് $= 100\\text{ cm}^2$. പാർശ്വ പരപ്പളവ് $= 2 \\times 10 \\times 13 = 260\\text{ cm}^2$. ആകെ പരപ്പളവ് $= 100 + 260 = 360\\text{ cm}^2$.',
      'വ്യാപ്തം $V = \\frac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$.'
    ],
    rubric_en: [
      'Slant height l = 13 cm: 1 mark',
      'Total surface area = 360 cm²: 1.5 marks',
      'Volume = 400 cm³: 1.5 marks'
    ],
    rubric_ml: [
      'ചരിവുയരം കാണൽ: 1 മാർക്ക്',
      'ആകെ പരപ്പളവ് കാണൽ: 1.5 മാർക്ക്',
      'വ്യാപ്തം കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) l = 13 cm; (b) TSA = 360 cm²; (c) V = 400 cm³',
    answer_ml: '(a) l = 13 cm; (b) ആകെ പരപ്പളവ് = 360 cm²; (c) വ്യാപ്തം = 400 cm³'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.3 Right Circular Cone: Area & Volume
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.8.3',
    concept: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A sector of central angle $216^\\circ$ is cut out from a circle of radius 15 cm and rolled up into a cone.\\n(a) What is the slant height $l$ of the cone?\\n(b) Calculate the radius $r$ of the base of the cone.\\n(c) Find the curved surface area of the cone in terms of $\\pi$.',
    prompt_ml: '15 cm ആരമുള്ള ഒരു വൃത്തത്തിൽ നിന്ന് $216^\\circ$ കേന്ദ്രകോണുള്ള വൃത്താംശം വെട്ടിയെടുത്ത് ചുരുട്ടി ഒരു കോണുണ്ടാക്കുന്നു.\\n(a) കോണിന്റെ ചരിവുയരം $l$ എത്ര?\\n(b) കോണിന്റെ പാദ ആരം $r$ കാണുക.\\n(c) കോണിന്റെ വക്രതല പരപ്പളവ് $\\pi$ ൽ കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>The radius of the circular sector becomes the slant height of the cone: $l = 15$ cm.</li>\n  <li>Using the sector angle relation: $\\frac{r}{l} = \\frac{x}{360^\\circ} \\implies \\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9$ cm.</li>\n  <li>Curved surface area of the cone $= \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$ (approx $424.1$ cm²).</li>\n</ol>\n<p><b>Final Answer:</b> (a) l = 15 cm; (b) r = 9 cm; (c) CSA = 135π cm²</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Slant height identification: 1 mark</li>\n  <li>Radius calculation using sector relation: 1.5 marks</li>\n  <li>Curved surface area: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>വൃത്താംശത്തിന്റെ ആരം കോണിന്റെ ചരിവുയരമായി മാറുന്നു: $l = 15$ cm.</li>\n  <li>$\\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9$ cm.</li>\n  <li>വക്രതല പരപ്പളവ് $= \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) l = 15 cm; (b) r = 9 cm; (c) വക്രതല പരപ്പളവ് = 135π cm²</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ചരിവുയരം തിരിച്ചറിയൽ: 1 മാർക്ക്</li>\n  <li>പാദ ആരം കാണൽ: 1.5 മാർക്ക്</li>\n  <li>വക്രതല പരപ്പളവ് കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'The radius of the circular sector becomes the slant height of the cone: $l = 15$ cm.',
      'Using the sector angle relation: $\\frac{r}{l} = \\frac{x}{360^\\circ} \\implies \\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9$ cm.',
      'Curved surface area of the cone $= \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$ (approx $424.1$ cm²).'
    ],
    steps_ml: [
      'വൃത്താംശത്തിന്റെ ആരം കോണിന്റെ ചരിവുയരമായി മാറുന്നു: $l = 15$ cm.',
      '$\\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9$ cm.',
      'വക്രതല പരപ്പളവ് $= \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$.'
    ],
    rubric_en: [
      'Slant height identification: 1 mark',
      'Radius calculation using sector relation: 1.5 marks',
      'Curved surface area: 1.5 marks'
    ],
    rubric_ml: [
      'ചരിവുയരം തിരിച്ചറിയൽ: 1 മാർക്ക്',
      'പാദ ആരം കാണൽ: 1.5 മാർക്ക്',
      'വക്രതല പരപ്പളവ് കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) l = 15 cm; (b) r = 9 cm; (c) CSA = 135π cm²',
    answer_ml: '(a) l = 15 cm; (b) r = 9 cm; (c) വക്രതല പരപ്പളവ് = 135π cm²'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.4 Sphere and Hemisphere: Area & Volume
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.8.4',
    concept: 'm10.8.4.sphere-and-hemisphere',
    sec: '10.8.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A solid metallic sphere of radius 6 cm is melted and recast into small solid spheres of radius 2 cm each.\\n(a) Find the volume of the original sphere in terms of $\\pi$.\\n(b) Find the volume of one small sphere in terms of $\\pi$.\\n(c) How many small spheres can be made from the original sphere?',
    prompt_ml: '6 cm ആരമുള്ള ഒരു ഖര ലോഹ ഗോളം ഉരുക്കി 2 cm വീതം ആരമുള്ള ചെറിയ ഖര ഗോളങ്ങളാക്കി മാറ്റുന്നു.\\n(a) ആദ്യത്തെ വലിയ ഗോളത്തിന്റെ വ്യാപ്തം $\\pi$ ൽ കാണുക.\\n(b) ഒരു ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം $\\pi$ ൽ കാണുക.\\n(c) എത്ര ചെറിയ ഗോളങ്ങൾ നിർമ്മിക്കാൻ കഴിയും?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Volume of large sphere $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (6^3) = \\frac{4}{3}\\pi (216) = 288\\pi\\text{ cm}^3$.</li>\n  <li>Volume of each small sphere $v = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (2^3) = \\frac{4}{3}\\pi (8) = \\frac{32}{3}\\pi\\text{ cm}^3$.</li>\n  <li>Number of small spheres $= \\frac{V}{v} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{4}{3}\\pi r^3} = \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 288π cm³; (b) (32/3)π cm³; (c) 27 small spheres</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Volume of large sphere: 1 mark</li>\n  <li>Volume of small sphere: 1 mark</li>\n  <li>Ratio / number of spheres calculation: 2 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>വലിയ ഗോളത്തിന്റെ വ്യാപ്തം $V = \\frac{4}{3}\\pi (6^3) = 288\\pi\\text{ cm}^3$.</li>\n  <li>ഒരു ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം $v = \\frac{4}{3}\\pi (2^3) = \\frac{32}{3}\\pi\\text{ cm}^3$.</li>\n  <li>ചെറിയ ഗോളങ്ങളുടെ എണ്ണം $= \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27$ എണ്ണം.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 288π cm³; (b) (32/3)π cm³; (c) 27 ഗോളങ്ങൾ</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>വലിയ ഗോളത്തിന്റെ വ്യാപ്തം: 1 മാർക്ക്</li>\n  <li>ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം: 1 മാർക്ക്</li>\n  <li>ഗോളങ്ങളുടെ എണ്ണം കണ്ടെത്തൽ: 2 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Volume of large sphere $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (6^3) = \\frac{4}{3}\\pi (216) = 288\\pi\\text{ cm}^3$.',
      'Volume of each small sphere $v = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (2^3) = \\frac{4}{3}\\pi (8) = \\frac{32}{3}\\pi\\text{ cm}^3$.',
      'Number of small spheres $= \\frac{V}{v} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{4}{3}\\pi r^3} = \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27$.'
    ],
    steps_ml: [
      'വലിയ ഗോളത്തിന്റെ വ്യാപ്തം $V = \\frac{4}{3}\\pi (6^3) = 288\\pi\\text{ cm}^3$.',
      'ഒരു ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം $v = \\frac{4}{3}\\pi (2^3) = \\frac{32}{3}\\pi\\text{ cm}^3$.',
      'ചെറിയ ഗോളങ്ങളുടെ എണ്ണം $= \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27$ എണ്ണം.'
    ],
    rubric_en: [
      'Volume of large sphere: 1 mark',
      'Volume of small sphere: 1 mark',
      'Ratio / number of spheres calculation: 2 marks'
    ],
    rubric_ml: [
      'വലിയ ഗോളത്തിന്റെ വ്യാപ്തം: 1 മാർക്ക്',
      'ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം: 1 മാർക്ക്',
      'ഗോളങ്ങളുടെ എണ്ണം കണ്ടെത്തൽ: 2 മാർക്ക്'
    ],
    answer_en: '(a) 288π cm³; (b) (32/3)π cm³; (c) 27 small spheres',
    answer_ml: '(a) 288π cm³; (b) (32/3)π cm³; (c) 27 ഗോളങ്ങൾ'
  }
);
