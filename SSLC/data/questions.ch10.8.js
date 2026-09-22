/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 8 — Solids (ഘനരൂപങ്ങൾ)
   8 Objective (2 per section) + 6 Written Exercises (authentic SCERT textbook).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. All symbols in Malayalam fields wrapped in $...$.
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
    tested_ml: 'ചരിവുയര ബന്ധം: $l^2 = h^2 + (a/2)^2$.'
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
    tested_ml: 'പാർശ്വധാര ബന്ധം: $e^2 = l^2 + (a/2)^2$.'
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
    tested_ml: 'പാർശ്വ പരപ്പളവ് കാണൽ: $2al$.'
  },
  {
    id: 'obj.m10.8.4',
    concept: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'The base edge of a square pyramid is 6 cm and its vertical height is 10 cm. What is its volume?',
    prompt_ml: 'ഒരു സമചതുര സ്തൂപികയുടെ പാദവക്ക് 6 cm ഉം ലംബ ഉയരം 10 cm ഉം ആണ്. ഇതിന്റെ വ്യാപ്തം എത്ര?',
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
    solution_en: 'Volume $V = \\frac{1}{3}a^2h = \\frac{1}{3} \\times 6^2 \\times 10 = \\frac{1}{3} \\times 36 \\times 10 = 120\\text{ cm}^3$.',
    solution_ml: 'വ്യാപ്തം $V = \\frac{1}{3}a^2h = \\frac{1}{3} \\times 36 \\times 10 = 120\\text{ cm}^3$.',
    tested_en: 'Volume formula for square pyramid: V = (1/3) a² h.',
    tested_ml: 'സമചതുര സ്തൂപികയുടെ വ്യാപ്തം: $\\frac{1}{3}a^2h$.'
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
    prompt_en: 'A cone has base radius $r = 3$ cm and height $h = 4$ cm. What is its curved surface area in terms of $\\pi$?',
    prompt_ml: 'പാദ ആരം $r = 3$ cm ഉം ലംബ ഉയരം $h = 4$ cm ഉം ആയ ഒരു കോണിന്റെ വക്രതല പരപ്പളവ് $\\pi$ ൽ എത്ര?',
    options_en: [
      { k: 'A', t: '$15\\pi\\text{ cm}^2$' },
      { k: 'B', t: '$12\\pi\\text{ cm}^2$' },
      { k: 'C', t: '$24\\pi\\text{ cm}^2$' },
      { k: 'D', t: '$20\\pi\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\pi\\text{ cm}^2$' },
      { k: 'B', t: '$12\\pi\\text{ cm}^2$' },
      { k: 'C', t: '$24\\pi\\text{ cm}^2$' },
      { k: 'D', t: '$20\\pi\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: 'Slant height $l = \\sqrt{3^2 + 4^2} = 5$ cm. Curved surface area $\\text{CSA} = \\pi r l = \\pi \\times 3 \\times 5 = 15\\pi\\text{ cm}^2$.',
    solution_ml: 'ചരിവുയരം $l = \\sqrt{3^2 + 4^2} = 5$ cm. വക്രതല പരപ്പളവ് $= \\pi r l = \\pi \\times 3 \\times 5 = 15\\pi\\text{ cm}^2$.',
    tested_en: 'Cone curved surface area using slant height: CSA = πrl.',
    tested_ml: 'കോണിന്റെ വക്രതല പരപ്പളവ്: $\\pi rl$.'
  },
  {
    id: 'obj.m10.8.6',
    concept: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A circular sector with radius 10 cm and central angle $180^\\circ$ (semicircle) is rolled up into a cone. What is the base radius of this cone?',
    prompt_ml: 'ആരം 10 cm ഉം കേന്ദ്രകോൺ $180^\\circ$ ഉം ആയ അർദ്ധവൃത്തം ചുരുട്ടി ഒരു കോണുണ്ടാക്കിയാൽ അതിന്റെ പാദ ആരം എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '5 cm' },
      { k: 'B', t: '10 cm' },
      { k: 'C', t: '2.5 cm' },
      { k: 'D', t: '$5\\pi$ cm' }
    ],
    options_ml: [
      { k: 'A', t: '5 cm' },
      { k: 'B', t: '10 cm' },
      { k: 'C', t: '2.5 cm' },
      { k: 'D', t: '$5\\pi$ cm' }
    ],
    answer: 'A',
    solution_en: 'Cone base radius $r = l \\times \\frac{x}{360^\\circ} = 10 \\times \\frac{180}{360} = 10 \\times \\frac{1}{2} = 5$ cm.',
    solution_ml: 'പാദ ആരം $r = 10 \\times \\frac{180}{360} = 10 \\times \\frac{1}{2} = 5$ cm.',
    tested_en: 'Sector angle relation: r = l * (x / 360°).',
    tested_ml: 'വൃത്താംശ സൂത്രവാക്യം: $r = l \\times \\frac{x}{360^\\circ}$.'
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
    time: 30,
    prompt_en: 'If the radius of a sphere is doubled, by what factor does its surface area increase?',
    prompt_ml: 'ഒരു ഗോളത്തിന്റെ ആരം ഇരട്ടിയാക്കിയാൽ അതിന്റെ ഉപരിതല പരപ്പളവ് എത്ര മടങ്ങായി വർദ്ധിക്കും?',
    options_en: [
      { k: 'A', t: '4 times' },
      { k: 'B', t: '2 times' },
      { k: 'C', t: '8 times' },
      { k: 'D', t: '16 times' }
    ],
    options_ml: [
      { k: 'A', t: '4 മടങ്ങ്' },
      { k: 'B', t: '2 മടങ്ങ്' },
      { k: 'C', t: '8 മടങ്ങ്' },
      { k: 'D', t: '16 മടങ്ങ്' }
    ],
    answer: 'A',
    solution_en: 'Surface area is proportional to $r^2$. When $r \\to 2r$, area becomes $4\\pi (2r)^2 = 4\\pi (4r^2) = 4 \\times (4\\pi r^2)$, which is 4 times larger.',
    solution_ml: 'പരപ്പളവ് $r^2$ ന് ആനുപാതികമാണ്. ആരം ഇരട്ടിയാകുമ്പോൾ പരപ്പളവ് $2^2 = 4$ മടങ്ങായി വർദ്ധിക്കുന്നു.',
    tested_en: 'Scaling effect on sphere surface area: Area ∝ r².',
    tested_ml: 'ആരവും പരപ്പളവും തമ്മിലുള്ള അനുപാത ബന്ധം.'
  },
  {
    id: 'obj.m10.8.8',
    concept: 'm10.8.4.sphere-and-hemisphere',
    sec: '10.8.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the total surface area of a solid hemisphere of radius 3 cm in terms of $\\pi$?',
    prompt_ml: 'ആരം 3 cm ആയ ഒരു ഖര അർദ്ധഗോളത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് $\\pi$ ൽ എത്ര?',
    options_en: [
      { k: 'A', t: '$27\\pi\\text{ cm}^2$' },
      { k: 'B', t: '$18\\pi\\text{ cm}^2$' },
      { k: 'C', t: '$36\\pi\\text{ cm}^2$' },
      { k: 'D', t: '$9\\pi\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$27\\pi\\text{ cm}^2$' },
      { k: 'B', t: '$18\\pi\\text{ cm}^2$' },
      { k: 'C', t: '$36\\pi\\text{ cm}^2$' },
      { k: 'D', t: '$9\\pi\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: 'For a solid hemisphere, total surface area $\\text{TSA} = 3\\pi r^2 = 3\\pi (3^2) = 27\\pi\\text{ cm}^2$.',
    solution_ml: 'ഖര അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവ് $= 3\\pi r^2 = 3\\pi (3^2) = 27\\pi\\text{ cm}^2$.',
    tested_en: 'Total surface area of solid hemisphere: TSA = 3πr².',
    tested_ml: 'ഖര അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവ്: $3\\pi r^2$.'
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
    prompt_en: 'A square pyramid has a base edge of $a = 16$ cm and slant height of $l = 17$ cm.\\n(a) State the relationship between vertical height $h$, slant height $l$, and base edge $a$.\\n(b) Calculate the vertical height $h$ of the pyramid.\\n(c) Calculate the length of the lateral edge $e$.',
    prompt_ml: 'ഒരു സമചതുര സ്തൂപികയുടെ പാദവക്ക് $a = 16$ cm ഉം ചരിവുയരം $l = 17$ cm ഉം ആണ്.\\n(a) ലംബ ഉയരം $h$, ചരിവുയരം $l$, പാദവക്ക് $a$ എന്നിവ തമ്മിലുള്ള ബന്ധം എഴുതുക.\\n(b) സ്തൂപികയുടെ ലംബ ഉയരം $h$ കണ്ടെത്തുക.\\n(c) പാർശ്വധാരയുടെ ($e$) നീളം കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>The relation is $l^2 = h^2 + (a/2)^2 \\iff h = \\sqrt{l^2 - (a/2)^2}$.</li>
  <li>Half of the base edge $= 16 / 2 = 8$ cm. Vertical height:
  $$h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15\\text{ cm}$$</li>
  <li>Lateral edge:
  $$e = \\sqrt{l^2 + (a/2)^2} = \\sqrt{17^2 + 8^2} = \\sqrt{289 + 64} = \\sqrt{353} \\approx 18.79\\text{ cm}$$</li>
</ol>
<p><b>Final Answer:</b> (a) l² = h² + (a/2)²; (b) h = 15 cm; (c) e = √353 cm (approx 18.79 cm)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Stating the formula: 1 mark</li>
  <li>Calculating vertical height h = 15 cm: 1.5 marks</li>
  <li>Calculating lateral edge e = √353 cm: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>ബന്ധം: $h = \\sqrt{l^2 - (a/2)^2}$.</li>
  <li>പാദത്തിന്റെ പകുതി $= 8$ cm. ലംബ ഉയരം:
  $$h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15\\text{ cm}$$</li>
  <li>പാർശ്വധാര:
  $$e = \\sqrt{17^2 + 8^2} = \\sqrt{353}\\text{ cm}$$ (ഏകദേശം $18.79$ cm).</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) l² = h² + (a/2)²; (b) h = 15 cm; (c) e = √353 cm (ഏകദേശം 18.79 cm)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>
  <li>ലംബ ഉയരം 15 cm കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
  <li>പാർശ്വധാര കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Half-base $= 10/2 = 5$ cm. Slant height $l = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ cm.</li>
  <li>Base Area $= 10^2 = 100\\text{ cm}^2$. Lateral Area $= 2al = 2 \\times 10 \\times 13 = 260\\text{ cm}^2$. Total Surface Area $= 100 + 260 = 360\\text{ cm}^2$.</li>
  <li>Volume $V = \\frac{1}{3}a^2h = \\frac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$.</li>
</ol>
<p><b>Final Answer:</b> (a) l = 13 cm; (b) TSA = 360 cm²; (c) V = 400 cm³</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Slant height l = 13 cm: 1 mark</li>
  <li>Total surface area = 360 cm²: 1.5 marks</li>
  <li>Volume = 400 cm³: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>ചരിവുയരം $l = \\sqrt{12^2 + 5^2} = 13$ cm.</li>
  <li>പാദ പരപ്പളവ് $= 100\\text{ cm}^2$. പാർശ്വ പരപ്പളവ് $= 2 \\times 10 \\times 13 = 260\\text{ cm}^2$. ആകെ പരപ്പളവ് $= 100 + 260 = 360\\text{ cm}^2$.</li>
  <li>വ്യാപ്തം $V = \\frac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) l = 13 cm; (b) ആകെ പരപ്പളവ് = 360 cm²; (c) വ്യാപ്തം = 400 cm³</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>ചരിവുയരം കാണൽ: 1 മാർക്ക്</li>
  <li>ആകെ പരപ്പളവ് കാണൽ: 1.5 മാർക്ക്</li>
  <li>വ്യാപ്തം കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>The radius of the circular sector becomes the slant height of the cone: $l = 15$ cm.</li>
  <li>Using the sector angle relation:
  $$\\frac{r}{l} = \\frac{x}{360^\\circ} \\implies \\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9\\text{ cm}$$</li>
  <li>Curved surface area of the cone:
  $$\\text{CSA} = \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$$</li>
</ol>
<p><b>Final Answer:</b> (a) l = 15 cm; (b) r = 9 cm; (c) CSA = 135π cm²</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Slant height identification: 1 mark</li>
  <li>Radius calculation using sector relation: 1.5 marks</li>
  <li>Curved surface area: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>വൃത്താംശത്തിന്റെ ആരം കോണിന്റെ ചരിവുയരമായി മാറുന്നു: $l = 15$ cm.</li>
  <li>$\\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9$ cm.</li>
  <li>വക്രതല പരപ്പളവ് $= \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) l = 15 cm; (b) r = 9 cm; (c) വക്രതല പരപ്പളവ് = 135π cm²</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>ചരിവുയരം തിരിച്ചറിയൽ: 1 മാർക്ക്</li>
  <li>പാദ ആരം കാണൽ: 1.5 മാർക്ക്</li>
  <li>വക്രതല പരപ്പളവ് കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'The radius of the circular sector becomes the slant height of the cone: $l = 15$ cm.',
      'Using the sector angle relation: $\\frac{r}{l} = \\frac{x}{360^\\circ} \\implies \\frac{r}{15} = \\frac{216}{360} = \\frac{3}{5} \\implies r = 15 \\times \\frac{3}{5} = 9$ cm.',
      'Curved surface area of the cone $= \\pi r l = \\pi \\times 9 \\times 15 = 135\\pi\\text{ cm}^2$.'
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Volume of large sphere:
  $$V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (6^3) = \\frac{4}{3}\\pi (216) = 288\\pi\\text{ cm}^3$$</li>
  <li>Volume of each small sphere:
  $$v = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (2^3) = \\frac{4}{3}\\pi (8) = \\frac{32}{3}\\pi\\text{ cm}^3$$</li>
  <li>Number of small spheres:
  $$N = \\frac{V}{v} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{4}{3}\\pi r^3} = \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27$$</li>
</ol>
<p><b>Final Answer:</b> (a) 288π cm³; (b) (32/3)π cm³; (c) 27 small spheres</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Volume of large sphere: 1 mark</li>
  <li>Volume of small sphere: 1 mark</li>
  <li>Ratio / number of spheres calculation: 2 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>വലിയ ഗോളത്തിന്റെ വ്യാപ്തം:
  $$V = \\frac{4}{3}\\pi (6^3) = 288\\pi\\text{ cm}^3$$</li>
  <li>ഒരു ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം:
  $$v = \\frac{4}{3}\\pi (2^3) = \\frac{32}{3}\\pi\\text{ cm}^3$$</li>
  <li>ചെറിയ ഗോളങ്ങളുടെ എണ്ണം:
  $$N = \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27\\text{ എണ്ണം}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 288π cm³; (b) (32/3)π cm³; (c) 27 ഗോളങ്ങൾ</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>വലിയ ഗോളത്തിന്റെ വ്യാപ്തം: 1 മാർക്ക്</li>
  <li>ചെറിയ ഗോളത്തിന്റെ വ്യാപ്തം: 1 മാർക്ക്</li>
  <li>ഗോളങ്ങളുടെ എണ്ണം കണ്ടെത്തൽ: 2 മാർക്ക്</li>
</ul>`,
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
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.2 Cube Melted into Square Pyramid (SCERT Textbook Problem)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.8.5',
    concept: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A solid metal cube of edge 15 cm is melted and recast into a square pyramid with base edge 25 cm (SCERT textbook problem).\\n(a) Calculate the volume of the metal cube.\\n(b) Write the formula for the volume of a square pyramid.\\n(c) Calculate the vertical height of the square pyramid formed.',
    prompt_ml: '15 cm വക്കുകളുള്ള ഒരു ഖര ലോഹ സമചതുരക്കട്ട ഉരുക്കി പാദവക്ക് 25 cm ആയ ഒരു സമചതുര സ്തൂപികയാക്കി മാറ്റുന്നു.\\n(a) സമചതുരക്കട്ടയുടെ വ്യാപ്തം കണക്കാക്കുക.\\n(b) സമചതുര സ്തൂപികയുടെ വ്യാപ്തം കാണാനുള്ള സൂത്രവാക്യം എഴുതുക.\\n(c) നിർമ്മിക്കപ്പെട്ട സ്തൂപികയുടെ ലംബ ഉയരം കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Volume of metal cube:
  $$V_{\\text{cube}} = \\text{edge}^3 = 15^3 = 3375\\text{ cm}^3$$</li>
  <li>Volume of a square pyramid with base edge $a$ and height $h$:
  $$V_{\\text{pyramid}} = \\frac{1}{3}a^2h$$</li>
  <li>Since the metal is recast without loss, the volumes are equal:
  $$V_{\\text{pyramid}} = V_{\\text{cube}} \\implies \\frac{1}{3}(25^2)h = 3375$$
  $$\\frac{1}{3}(625)h = 3375 \\implies 625h = 3375 \\times 3 = 10125$$
  $$h = \\frac{10125}{625} = 16.2\\text{ cm}$$</li>
</ol>
<p><b>Final Answer:</b> (a) 3375 cm³; (b) V = (1/3) a² h; (c) h = 16.2 cm</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Cube volume calculation: 1 mark</li>
  <li>Square pyramid formula: 1 mark</li>
  <li>Equating volumes and calculating height h = 16.2 cm: 2 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>സമചതുരക്കട്ടയുടെ വ്യാപ്തം:
  $$V_{\\text{കട്ട}} = 15^3 = 3375\\text{ cm}^3$$</li>
  <li>പാദവക്ക് $a$, ലംബ ഉയരം $h$ ആയ സ്തൂപികയുടെ വ്യാപ്തം:
  $$V_{\\text{സ്തൂപിക}} = \\frac{1}{3}a^2h$$</li>
  <li>ഉരുക്കി നിർമ്മിക്കുന്നതിനാൽ വ്യാപ്തങ്ങൾ തുല്യമാണ്:
  $$\\frac{1}{3} \\times 25^2 \\times h = 3375 \\implies \\frac{625}{3}h = 3375$$
  $$h = \\frac{3375 \\times 3}{625} = \\frac{10125}{625} = 16.2\\text{ cm}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 3375 cm³; (b) V = (1/3) a² h; (c) h = 16.2 cm</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കട്ടയുടെ വ്യാപ്തം കാണൽ: 1 മാർക്ക്</li>
  <li>സ്തൂപിക വ്യാപ്ത സൂത്രവാക്യം: 1 മാർക്ക്</li>
  <li>വ്യാപ്തങ്ങൾ തുലനം ചെയ്ത് ഉയരം 16.2 cm കണ്ടെത്തൽ: 2 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Volume of cube $= 15^3 = 3375\\text{ cm}^3$.',
      'Volume of square pyramid $= \\frac{1}{3}a^2h$.',
      'Equate volumes: $\\frac{1}{3}(25^2)h = 3375 \\implies 625h = 10125 \\implies h = 16.2$ cm.'
    ],
    steps_ml: [
      'കട്ടയുടെ വ്യാപ്തം $= 15^3 = 3375\\text{ cm}^3$.',
      'സ്തൂപികയുടെ വ്യാപ്തം $= \\frac{1}{3}a^2h$.',
      '$\\frac{1}{3}(25^2)h = 3375 \\implies 625h = 10125 \\implies h = 16.2$ cm.'
    ],
    rubric_en: [
      'Cube volume calculation: 1 mark',
      'Square pyramid formula: 1 mark',
      'Equating volumes and calculating height h = 16.2 cm: 2 marks'
    ],
    rubric_ml: [
      'കട്ടയുടെ വ്യാപ്തം കാണൽ: 1 മാർക്ക്',
      'സ്തൂപിക വ്യാപ്ത സൂത്രവാക്യം: 1 മാർക്ക്',
      'വ്യാപ്തങ്ങൾ തുലനം ചെയ്ത് ഉയരം 16.2 cm കണ്ടെത്തൽ: 2 മാർക്ക്'
    ],
    answer_en: '(a) 3375 cm³; (b) V = (1/3) a² h; (c) h = 16.2 cm',
    answer_ml: '(a) 3375 cm³; (b) V = (1/3) a² h; (c) h = 16.2 cm'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.3 / 10.8.4 Combination of Solids: Cone Mounted on Hemisphere
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.8.6',
    concept: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A solid wooden toy is in the shape of a right circular cone mounted on a hemisphere of the same radius. The radius of the hemisphere is 3.5 cm, and the total height of the toy is 15.5 cm.\\n(a) Find the vertical height $h$ of the conical part.\\n(b) Calculate the slant height $l$ of the conical part.\\n(c) Find the total surface area of the toy (use $\\pi = 22/7$).',
    prompt_ml: 'ഒരു കളിപ്പാട്ടം അർദ്ധഗോളത്തിന് മുകളിൽ അതേ ആരമുള്ള ഒരു വൃത്തസ്തൂപിക (കോൺ) ഉറപ്പിച്ച രൂപത്തിലാണ്. അർദ്ധഗോളത്തിന്റെ ആരം 3.5 cm ഉം കളിപ്പാട്ടത്തിന്റെ ആകെ ഉയരം 15.5 cm ഉം ആണ്.\\n(a) കോണിന്റെ ലംബ ഉയരം $h$ എത്ര?\\n(b) കോണിന്റെ ചരിവുയരം $l$ കണക്കാക്കുക.\\n(c) കളിപ്പാട്ടത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് കാണുക ($\\pi = 22/7$ എന്ന് എടുക്കുക).',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Radius of both parts is $r = 3.5$ cm. Height of hemisphere equals its radius $= 3.5$ cm.
  Vertical height of conical part:
  $$h = \\text{Total Height} - r = 15.5 - 3.5 = 12\\text{ cm}$$</li>
  <li>Slant height of cone:
  $$l = \\sqrt{r^2 + h^2} = \\sqrt{3.5^2 + 12^2} = \\sqrt{12.25 + 144} = \\sqrt{156.25} = 12.5\\text{ cm}$$</li>
  <li>Total surface area of the toy is the sum of the curved surfaces of the cone and the hemisphere (the circular base is internal and hidden):
  $$\\text{TSA} = \\text{CSA}_{\\text{cone}} + \\text{CSA}_{\\text{hemisphere}} = \\pi r l + 2\\pi r^2 = \\pi r(l + 2r)$$
  Substitute values:
  $$\\text{TSA} = \\frac{22}{7} \\times 3.5 \\times (12.5 + 2 \\times 3.5) = \\frac{22}{7} \\times \\frac{7}{2} \\times (12.5 + 7) = 11 \\times 19.5 = 214.5\\text{ cm}^2$$</li>
</ol>
<p><b>Final Answer:</b> (a) h = 12 cm; (b) l = 12.5 cm; (c) TSA = 214.5 cm²</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Height of conical part (12 cm): 1 mark</li>
  <li>Slant height calculation (12.5 cm): 1 mark</li>
  <li>Recognizing TSA = CSA(cone) + CSA(hemisphere): 1 mark</li>
  <li>Final area calculation = 214.5 cm²: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>അർദ്ധഗോളത്തിന്റെ ആരം $r = 3.5$ cm ആണ്. അർദ്ധഗോളത്തിന്റെ ഉയരവും $3.5$ cm ആണ്.
  കോണിന്റെ ലംബ ഉയരം:
  $$h = 15.5 - 3.5 = 12\\text{ cm}$$</li>
  <li>കോണിന്റെ ചരിവുയരം:
  $$l = \\sqrt{3.5^2 + 12^2} = \\sqrt{12.25 + 144} = \\sqrt{156.25} = 12.5\\text{ cm}$$</li>
  <li>കളിപ്പാട്ടത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് കോണിന്റെ വക്രതല പരപ്പളവും അർദ്ധഗോളത്തിന്റെ വക്രതല പരപ്പളവും ചേർന്നതാണ്:
  $$\\text{ആകെ പരപ്പളവ്} = \\pi r l + 2\\pi r^2 = \\pi r(l + 2r)$$
  $$\\text{ആകെ പരപ്പളവ്} = \\frac{22}{7} \\times 3.5 \\times (12.5 + 7) = 11 \\times 19.5 = 214.5\\text{ cm}^2$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) h = 12 cm; (b) l = 12.5 cm; (c) ആകെ പരപ്പളവ് = 214.5 cm²</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കോണിന്റെ ഉയരം 12 cm കാണൽ: 1 മാർക്ക്</li>
  <li>ചരിവുയരം 12.5 cm കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>ആകെ പരപ്പളവ് രണ്ട് വക്രതലങ്ങളുടെ തുകയാണെന്ന് തിരിച്ചറിയൽ: 1 മാർക്ക്</li>
  <li>അന്തിമ പരപ്പളവ് 214.5 cm² കണ്ടെത്തൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Height of conical part $h = 15.5 - 3.5 = 12$ cm.',
      'Slant height $l = \\sqrt{3.5^2 + 12^2} = \\sqrt{156.25} = 12.5$ cm.',
      'TSA of toy is $\\text{CSA}_{\\text{cone}} + \\text{CSA}_{\\text{hemisphere}} = \\pi r l + 2\\pi r^2 = \\pi r(l + 2r)$.',
      '$\\text{TSA} = \\frac{22}{7} \\times 3.5 \\times (12.5 + 7) = 11 \\times 19.5 = 214.5\\text{ cm}^2$.'
    ],
    steps_ml: [
      'കോണിന്റെ ഉയരം $h = 15.5 - 3.5 = 12$ cm.',
      'ചരിവുയരം $l = \\sqrt{3.5^2 + 12^2} = 12.5$ cm.',
      'ആകെ പരപ്പളവ് $= \\pi rl + 2\\pi r^2 = \\pi r(l + 2r)$.',
      'ആകെ പരപ്പളവ് $= 11 \\times 19.5 = 214.5\\text{ cm}^2$.'
    ],
    rubric_en: [
      'Height of conical part (12 cm): 1 mark',
      'Slant height calculation (12.5 cm): 1 mark',
      'Recognizing TSA = CSA(cone) + CSA(hemisphere): 1 mark',
      'Final area calculation = 214.5 cm²: 1 mark'
    ],
    rubric_ml: [
      'കോണിന്റെ ഉയരം 12 cm കാണൽ: 1 മാർക്ക്',
      'ചരിവുയരം 12.5 cm കണ്ടെത്തൽ: 1 മാർക്ക്',
      'ആകെ പരപ്പളവ് രണ്ട് വക്രതലങ്ങളുടെ തുകയാണെന്ന് തിരിച്ചറിയൽ: 1 മാർക്ക്',
      'അന്തിമ പരപ്പളവ് 214.5 cm² കണ്ടെത്തൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) h = 12 cm; (b) l = 12.5 cm; (c) TSA = 214.5 cm²',
    answer_ml: '(a) h = 12 cm; (b) l = 12.5 cm; (c) ആകെ പരപ്പളവ് = 214.5 cm²'
  }
);
