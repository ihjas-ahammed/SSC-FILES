/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 5 — Trigonometry (ത്രികോണമിതി)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.5.1 Trigonometric Ratios in Right Triangles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.5.1',
    concept: 'm10.5.1.trigonometric-ratios-in-right-triangles',
    sec: '10.5.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, $\\angle B = 90^\\circ$, $AB = 5$ cm, and $BC = 12$ cm. What is the value of $\\cos A$?',
    prompt_ml: '$\\triangle ABC$ ൽ $\\angle B = 90^\\circ$, $AB = 5$ cm, $BC = 12$ cm ആയാൽ $\\cos A$ യുടെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$\\frac{5}{13}$' },
      { k: 'B', t: '$\\frac{12}{13}$' },
      { k: 'C', t: '$\\frac{5}{12}$' },
      { k: 'D', t: '$\\frac{13}{5}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{5}{13}$' },
      { k: 'B', t: '$\\frac{12}{13}$' },
      { k: 'C', t: '$\\frac{5}{12}$' },
      { k: 'D', t: '$\\frac{13}{5}$' }
    ],
    answer: 'A',
    solution_en: 'Hypotenuse $AC = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm. With respect to angle $A$, adjacent side is $AB = 5$. Thus $\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{5}{13}$.',
    solution_ml: 'കർണ്ണം $AC = \\sqrt{5^2 + 12^2} = 13$ cm. കോൺ $A$ യുടെ സമീപവശം $AB = 5$. അതിനാൽ $\\cos A = \\frac{5}{13}$.',
    tested_en: 'Calculating cosine from side lengths of a right triangle.',
    tested_ml: 'മട്ടത്രികോണത്തിലെ വശങ്ങളിൽ നിന്ന് കൊസൈൻ കാണൽ.'
  },
  {
    id: 'obj.m10.5.2',
    concept: 'm10.5.1.trigonometric-ratios-in-right-triangles',
    sec: '10.5.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $\\sin\\theta = \\frac{3}{5}$, what is the value of $\\tan\\theta$ (where $\\theta$ is an acute angle)?',
    prompt_ml: '$\\sin\\theta = \\frac{3}{5}$ ആയാൽ $\\tan\\theta$ യുടെ വില എത്ര ($\\theta$ ഒരു ന്യൂനകോൺ)?',
    options_en: [
      { k: 'A', t: '$\\frac{3}{4}$' },
      { k: 'B', t: '$\\frac{4}{3}$' },
      { k: 'C', t: '$\\frac{4}{5}$' },
      { k: 'D', t: '$\\frac{5}{3}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{3}{4}$' },
      { k: 'B', t: '$\\frac{4}{3}$' },
      { k: 'C', t: '$\\frac{4}{5}$' },
      { k: 'D', t: '$\\frac{5}{3}$' }
    ],
    answer: 'A',
    solution_en: 'Opposite $= 3$, Hypotenuse $= 5$. Adjacent $= \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$. Thus $\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{3}{4}$.',
    solution_ml: 'എതിർവശം $= 3$, കർണ്ണം $= 5$. സമീപവശം $= \\sqrt{5^2 - 3^2} = 4$. അതിനാൽ $\\tan\\theta = \\frac{3}{4}$.',
    tested_en: 'Interrelating trigonometric ratios using Pythagorean triangle.',
    tested_ml: 'ത്രികോണമിതി അനുപാതങ്ങളുടെ പരസ്പര ബന്ധം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.2 Special Angles & Values (30°, 45°, 60°)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.5.3',
    concept: 'm10.5.2.special-angles-and-values',
    sec: '10.5.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the numerical value of $\\sin^2 30^\\circ + \\cos^2 30^\\circ$?',
    prompt_ml: '$\\sin^2 30^\\circ + \\cos^2 30^\\circ$ ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '1' },
      { k: 'B', t: '$\\frac{1}{2}$' },
      { k: 'C', t: '$\\frac{3}{4}$' },
      { k: 'D', t: '2' }
    ],
    options_ml: [
      { k: 'A', t: '1' },
      { k: 'B', t: '$\\frac{1}{2}$' },
      { k: 'C', t: '$\\frac{3}{4}$' },
      { k: 'D', t: '2' }
    ],
    answer: 'A',
    solution_en: '$\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$. $\\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{1}{4} + \\frac{3}{4} = 1$. (Also directly by the identity $\\sin^2\\theta + \\cos^2\\theta = 1$).',
    solution_ml: '$\\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{1}{4} + \\frac{3}{4} = 1$.',
    tested_en: 'Exact values of special angles and Pythagorean identity.',
    tested_ml: 'പ്രത്യേക കോണുകളിലെ വിലകളും സർവ്വസമവാക്യവും.'
  },
  {
    id: 'obj.m10.5.4',
    concept: 'm10.5.2.special-angles-and-values',
    sec: '10.5.2',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'In a right triangle, the angles are $30^\\circ, 60^\\circ, 90^\\circ$. If the side opposite to the $30^\\circ$ angle is 6 cm, what is the length of the hypotenuse?',
    prompt_ml: 'ഒരു മട്ടത്രികോണത്തിലെ കോണുകൾ $30^\\circ, 60^\\circ, 90^\\circ$ ആണ്. $30^\\circ$ ന് എതിരെയുള്ള വശം 6 cm ആയാൽ കർണ്ണത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '12 cm' },
      { k: 'B', t: '$6\\sqrt{3}$ cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '$12\\sqrt{3}$ cm' }
    ],
    options_ml: [
      { k: 'A', t: '12 cm' },
      { k: 'B', t: '$6\\sqrt{3}$ cm' },
      { k: 'C', t: '6 cm' },
      { k: 'D', t: '$12\\sqrt{3}$ cm' }
    ],
    answer: 'A',
    solution_en: 'In a $30^\\circ-60^\\circ-90^\\circ$ triangle, sides are in the ratio $1 : \\sqrt{3} : 2$. Since the side opposite $30^\\circ$ is 6, the hypotenuse is $2 \\times 6 = 12$ cm.',
    solution_ml: '$30^\\circ-60^\\circ-90^\\circ$ ത്രികോണത്തിൽ വശങ്ങളുടെ അനുപാതം $1 : \\sqrt{3} : 2$ ആണ്. $30^\\circ$ ന് എതിരെയുള്ള വശം 6 ആയതിനാൽ കർണ്ണം $= 2 \\times 6 = 12$ cm.',
    tested_en: 'Side ratios of 30-60-90 right triangle.',
    tested_ml: '30-60-90 മട്ടത്രികോണത്തിലെ വശങ്ങളുടെ അനുപാതം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.3 Area of Triangles & Sine Formula
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.5.5',
    concept: 'm10.5.3.area-of-triangles-and-sine-formula',
    sec: '10.5.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'Two sides of a triangle are 12 cm and 10 cm, and the angle between them is $30^\\circ$. What is the area of the triangle?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ രണ്ട് വശങ്ങൾ 12 cm, 10 cm ഉം അവയ്ക്കിടയിലെ കോൺ $30^\\circ$ ഉം ആണ്. ത്രികോണത്തിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '30 cm²' },
      { k: 'B', t: '60 cm²' },
      { k: 'C', t: '$30\\sqrt{3}$ cm²' },
      { k: 'D', t: '15 cm²' }
    ],
    options_ml: [
      { k: 'A', t: '30 cm²' },
      { k: 'B', t: '60 cm²' },
      { k: 'C', t: '$30\\sqrt{3}$ cm²' },
      { k: 'D', t: '15 cm²' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\times 12 \\times 10 \\times \\sin 30^\\circ = 60 \\times \\frac{1}{2} = 30\\text{ cm}^2$.',
    solution_ml: 'പരപ്പളവ് $= \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\times 12 \\times 10 \\times \\sin 30^\\circ = 60 \\times \\frac{1}{2} = 30\\text{ cm}^2$.',
    tested_en: 'Area formula: $\\frac{1}{2}ab\\sin C$.',
    tested_ml: 'പരപ്പളവ് സൂത്രവാക്യം: $\\frac{1}{2}ab\\sin C$.'
  },
  {
    id: 'obj.m10.5.6',
    concept: 'm10.5.3.area-of-triangles-and-sine-formula',
    sec: '10.5.3',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'In a circle of radius 6 cm, a chord subtends an angle of $30^\\circ$ at the circle circumference. What is the length of this chord?',
    prompt_ml: '6 cm ആരമുള്ള ഒരു വൃത്തത്തിലെ ഞാൺ മറുചാപത്തിൽ $30^\\circ$ കോണുണ്ടാക്കുന്നു. ഈ ഞാണിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '6 cm' },
      { k: 'B', t: '12 cm' },
      { k: 'C', t: '$6\\sqrt{3}$ cm' },
      { k: 'D', t: '3 cm' }
    ],
    options_ml: [
      { k: 'A', t: '6 cm' },
      { k: 'B', t: '12 cm' },
      { k: 'C', t: '$6\\sqrt{3}$ cm' },
      { k: 'D', t: '3 cm' }
    ],
    answer: 'A',
    solution_en: 'Chord length $a = 2R\\sin A = 2(6)\\sin 30^\\circ = 12 \\times \\frac{1}{2} = 6$ cm.',
    solution_ml: 'ഞാണിന്റെ നീളം $a = 2R\\sin A = 2(6)\\sin 30^\\circ = 12 \\times \\frac{1}{2} = 6$ cm.',
    tested_en: 'Relation between chord length, circumradius and sine: $a = 2R \sin A$.',
    tested_ml: 'ഞാണിന്റെ നീളവും പരിവൃത്ത ആരവും: $a = 2R \sin A$.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.4 Heights and Distances: Elevation & Depression
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.5.7',
    concept: 'm10.5.4.heights-and-distances',
    sec: '10.5.4',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'A ladder leaning against a vertical wall makes an angle of $60^\\circ$ with the ground. If the foot of the ladder is 4 m away from the wall, what is the length of the ladder?',
    prompt_ml: 'ഒരു കോണി ഒരു ചുമരിലേക്ക് ചാരിവെച്ചിരിക്കുന്നു. അത് നിലവുമായി $60^\\circ$ കോണുണ്ടാക്കുന്നു. കോണിയുടെ ചുവട് ചുമരിൽ നിന്ന് 4 മീറ്റർ അകലെയാണെങ്കിൽ കോണിയുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '8 m' },
      { k: 'B', t: '$4\\sqrt{3}$ m' },
      { k: 'C', t: '4 m' },
      { k: 'D', t: '12 m' }
    ],
    options_ml: [
      { k: 'A', t: '8 മീറ്റർ' },
      { k: 'B', t: '$4\\sqrt{3}$ മീറ്റർ' },
      { k: 'C', t: '4 മീറ്റർ' },
      { k: 'D', t: '12 മീറ്റർ' }
    ],
    answer: 'A',
    solution_en: '$\\cos 60^\\circ = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{4}{L} \\implies \\frac{1}{2} = \\frac{4}{L} \\implies L = 8$ m.',
    solution_ml: '$\\cos 60^\\circ = \\frac{\\text{സമീപവശം}}{\\text{കർണ്ണം}} = \\frac{4}{L} \\implies \\frac{1}{2} = \\frac{4}{L} \\implies L = 8$ മീറ്റർ.',
    tested_en: 'Right triangle modeling of ladder leaning on a wall.',
    tested_ml: 'ചുമരിലെ കോണിയും ത്രികോണമിതി പ്രയോഗവും.'
  },
  {
    id: 'obj.m10.5.8',
    concept: 'm10.5.4.heights-and-distances',
    sec: '10.5.4',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'From the top of a lighthouse 50 m high, the angle of depression of a boat in the sea is $30^\\circ$. What is the horizontal distance of the boat from the base of the lighthouse?',
    prompt_ml: '50 മീറ്റർ ഉയരമുള്ള ഒരു ലൈറ്റ്ഹൗസിന്റെ മുകളിൽ നിന്ന് കടലിലുള്ള ഒരു വള്ളത്തിലേക്ക് നോക്കിയപ്പോൾ കീഴ്ക്കോൺ $30^\\circ$ ആണ്. ലൈറ്റ്ഹൗസിന്റെ ചുവട്ടിൽ നിന്ന് വള്ളത്തിലേക്കുള്ള തിരശ്ചീന ദൂരം എത്ര?',
    options_en: [
      { k: 'A', t: '$50\\sqrt{3}$ m' },
      { k: 'B', t: '$\\frac{50}{\\sqrt{3}}$ m' },
      { k: 'C', t: '100 m' },
      { k: 'D', t: '50 m' }
    ],
    options_ml: [
      { k: 'A', t: '$50\\sqrt{3}$ മീറ്റർ' },
      { k: 'B', t: '$\\frac{50}{\\sqrt{3}}$ മീറ്റർ' },
      { k: 'C', t: '100 മീറ്റർ' },
      { k: 'D', t: '50 മീറ്റർ' }
    ],
    answer: 'A',
    solution_en: 'Angle of depression $= 30^\\circ \\implies$ angle of elevation from boat $= 30^\\circ$. $\\tan 30^\\circ = \\frac{h}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{50}{d} \\implies d = 50\\sqrt{3}$ m.',
    solution_ml: 'കീഴ്ക്കോൺ $30^\\circ$ ആയതിനാൽ വള്ളത്തിൽ നിന്നുള്ള മേൽക്കോണും $30^\\circ$. $\\tan 30^\\circ = \\frac{50}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{50}{d} \\implies d = 50\\sqrt{3}$ മീറ്റർ.',
    tested_en: 'Angle of depression translated to tangent ratio.',
    tested_ml: 'കീഴ്ക്കോണും ടാൻജെന്റ് അനുപാതവും.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.5.1 Trigonometric Ratios in Right Triangles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.5.1',
    concept: 'm10.5.1.trigonometric-ratios-in-right-triangles',
    sec: '10.5.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'In $\\triangle ABC$, $\\angle B = 90^\\circ$, $AB = 8$ cm, and $BC = 15$ cm.\\n(a) Calculate the length of the hypotenuse $AC$.\\n(b) Find the values of $\\sin A$ and $\\cos A$.\\n(c) Verify that $\\sin^2 A + \\cos^2 A = 1$.',
    prompt_ml: '$\\triangle ABC$ ൽ $\\angle B = 90^\\circ$, $AB = 8$ cm, $BC = 15$ cm.\\n(a) കർണ്ണം $AC$ യുടെ നീളം കാണുക.\\n(b) $\\sin A, \\cos A$ എന്നിവയുടെ വിലകൾ കാണുക.\\n(c) $\\sin^2 A + \\cos^2 A = 1$ എന്ന് പരിശോധിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>By Pythagoras theorem: $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ cm.</li>\n  <li>With respect to angle $A$: opposite side is $BC = 15$, adjacent side is $AB = 8$. Thus $\\sin A = \\frac{15}{17}$ and $\\cos A = \\frac{8}{17}$.</li>\n  <li>Compute $\\sin^2 A + \\cos^2 A = \\left(\\frac{15}{17}\\right)^2 + \\left(\\frac{8}{17}\\right)^2 = \\frac{225}{289} + \\frac{64}{289} = \\frac{289}{289} = 1$.</li>\n  <li>The Pythagorean identity $\\sin^2 A + \\cos^2 A = 1$ is verified.</li>\n</ol>\n<p><b>Final Answer:</b> (a) AC = 17 cm; (b) sin A = 15/17, cos A = 8/17; (c) Verified 289/289 = 1</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Hypotenuse calculation: 1 mark</li>\n  <li>sin A and cos A ratios: 1.5 marks</li>\n  <li>Algebraic verification of sum of squares = 1: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം: $AC = \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$ cm.</li>\n  <li>കോൺ $A$ ൽ: എതിർവശം $BC = 15$, സമീപവശം $AB = 8$. $\\sin A = \\frac{15}{17}, \\cos A = \\frac{8}{17}$.</li>\n  <li>$\\sin^2 A + \\cos^2 A = \\left(\\frac{15}{17}\\right)^2 + \\left(\\frac{8}{17}\\right)^2 = \\frac{225 + 64}{289} = \\frac{289}{289} = 1$.</li>\n  <li>$\\sin^2 A + \\cos^2 A = 1$ എന്ന് ശരിയാണെന്ന് വ്യക്തമായി.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) $AC = 17\text{ cm}$; (b) $\sin A = 15/17, \cos A = 8/17$; (c) $289/289 = 1$ എന്ന് പരിശോധിച്ചു</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>കർണ്ണത്തിന്റെ നീളം കാണൽ: 1 മാർക്ക്</li>\n  <li>$\sin A, \cos A$ അനുപാതങ്ങൾ: 1.5 മാർക്ക്</li>\n  <li>വർഗ്ഗങ്ങളുടെ തുക 1 എന്ന് തെളിയിക്കൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'By Pythagoras theorem: $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ cm.',
      'With respect to angle $A$: opposite side is $BC = 15$, adjacent side is $AB = 8$. Thus $\\sin A = \\frac{15}{17}$ and $\\cos A = \\frac{8}{17}$.',
      'Compute $\\sin^2 A + \\cos^2 A = \\left(\\frac{15}{17}\\right)^2 + \\left(\\frac{8}{17}\\right)^2 = \\frac{225}{289} + \\frac{64}{289} = \\frac{289}{289} = 1$.',
      'The Pythagorean identity $\\sin^2 A + \\cos^2 A = 1$ is verified.'
    ],
    steps_ml: [
      'പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം: $AC = \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$ cm.',
      'കോൺ $A$ ൽ: എതിർവശം $BC = 15$, സമീപവശം $AB = 8$. $\\sin A = \\frac{15}{17}, \\cos A = \\frac{8}{17}$.',
      '$\\sin^2 A + \\cos^2 A = \\left(\\frac{15}{17}\\right)^2 + \\left(\\frac{8}{17}\\right)^2 = \\frac{225 + 64}{289} = \\frac{289}{289} = 1$.',
      '$\\sin^2 A + \\cos^2 A = 1$ എന്ന് ശരിയാണെന്ന് വ്യക്തമായി.'
    ],
    rubric_en: [
      'Hypotenuse calculation: 1 mark',
      'sin A and cos A ratios: 1.5 marks',
      'Algebraic verification of sum of squares = 1: 1.5 marks'
    ],
    rubric_ml: [
      'കർണ്ണത്തിന്റെ നീളം കാണൽ: 1 മാർക്ക്',
      '$\sin A, \cos A$ അനുപാതങ്ങൾ: 1.5 മാർക്ക്',
      'വർഗ്ഗങ്ങളുടെ തുക 1 എന്ന് തെളിയിക്കൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) AC = 17 cm; (b) sin A = 15/17, cos A = 8/17; (c) Verified 289/289 = 1',
    answer_ml: '(a) $AC = 17\text{ cm}$; (b) $\sin A = 15/17, \cos A = 8/17$; (c) $289/289 = 1$ എന്ന് പരിശോധിച്ചു'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.2 Special Angles & Values (30°, 45°, 60°)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.5.2',
    concept: 'm10.5.2.special-angles-and-values',
    sec: '10.5.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'In $\\triangle ABC$, $\\angle A = 45^\\circ$, $\\angle B = 30^\\circ$, and the perpendicular from $C$ to $AB$ is $CD = 6$ cm.\\n(a) Find the length of $AD$ in right $\\triangle ADC$.\\n(b) Find the length of $BD$ in right $\\triangle BDC$.\\n(c) Calculate the total length of the base $AB$ (leave in terms of $\\sqrt{3}$).',
    prompt_ml: '$\\triangle ABC$ ൽ $\\angle A = 45^\\circ$, $\\angle B = 30^\\circ$. $C$ ൽ നിന്ന് $AB$ യിലേക്കുള്ള ലംബം $CD = 6$ cm ആണ്.\\n(a) മട്ടത്രികോണം $ADC$ ൽ $AD$ യുടെ നീളം കാണുക.\\n(b) മട്ടത്രികോണം $BDC$ ൽ $BD$ യുടെ നീളം കാണുക.\\n(c) പാദം $AB$ യുടെ ആകെ നീളം കാണുക ($\\sqrt{3}$ ഉൾപ്പെടുത്തി എഴുതുക).',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>In right $\\triangle ADC$, $\\angle A = 45^\\circ$. Since $\\tan 45^\\circ = \\frac{CD}{AD} = 1$, we have $AD = CD = 6$ cm.</li>\n  <li>In right $\\triangle BDC$, $\\angle B = 30^\\circ$. $\\tan 30^\\circ = \\frac{CD}{BD} \\implies \\frac{1}{\\sqrt{3}} = \\frac{6}{BD} \\implies BD = 6\\sqrt{3}$ cm.</li>\n  <li>Total base $AB = AD + BD = 6 + 6\\sqrt{3} = 6(1 + \\sqrt{3})$ cm.</li>\n  <li>Taking $\\sqrt{3} \\approx 1.732$, $AB \\approx 6 \\times 2.732 = 16.39$ cm.</li>\n</ol>\n<p><b>Final Answer:</b> (a) AD = 6 cm; (b) BD = 6√3 cm; (c) AB = 6(1 + √3) cm</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>AD calculation using tan 45°: 1.5 marks</li>\n  <li>BD calculation using tan 30°: 1.5 marks</li>\n  <li>Total length AB: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>മട്ടത്രികോണം $ADC$ ൽ $\\angle A = 45^\\circ$. $\\tan 45^\\circ = \\frac{CD}{AD} = 1 \\implies AD = CD = 6$ cm.</li>\n  <li>മട്ടത്രികോണം $BDC$ ൽ $\\angle B = 30^\\circ$. $\\tan 30^\\circ = \\frac{CD}{BD} \\implies \\frac{1}{\\sqrt{3}} = \\frac{6}{BD} \\implies BD = 6\\sqrt{3}$ cm.</li>\n  <li>പാദം $AB = AD + BD = 6 + 6\\sqrt{3} = 6(1 + \\sqrt{3})$ cm.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) AD = 6 cm; (b) BD = 6√3 cm; (c) AB = 6(1 + √3) cm</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>AD യുടെ നീളം കാണൽ: 1.5 മാർക്ക്</li>\n  <li>BD യുടെ നീളം കാണൽ: 1.5 മാർക്ക്</li>\n  <li>AB യുടെ ആകെ നീളം കാണൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'In right $\\triangle ADC$, $\\angle A = 45^\\circ$. Since $\\tan 45^\\circ = \\frac{CD}{AD} = 1$, we have $AD = CD = 6$ cm.',
      'In right $\\triangle BDC$, $\\angle B = 30^\\circ$. $\\tan 30^\\circ = \\frac{CD}{BD} \\implies \\frac{1}{\\sqrt{3}} = \\frac{6}{BD} \\implies BD = 6\\sqrt{3}$ cm.',
      'Total base $AB = AD + BD = 6 + 6\\sqrt{3} = 6(1 + \\sqrt{3})$ cm.',
      'Taking $\\sqrt{3} \\approx 1.732$, $AB \\approx 6 \\times 2.732 = 16.39$ cm.'
    ],
    steps_ml: [
      'മട്ടത്രികോണം $ADC$ ൽ $\\angle A = 45^\\circ$. $\\tan 45^\\circ = \\frac{CD}{AD} = 1 \\implies AD = CD = 6$ cm.',
      'മട്ടത്രികോണം $BDC$ ൽ $\\angle B = 30^\\circ$. $\\tan 30^\\circ = \\frac{CD}{BD} \\implies \\frac{1}{\\sqrt{3}} = \\frac{6}{BD} \\implies BD = 6\\sqrt{3}$ cm.',
      'പാദം $AB = AD + BD = 6 + 6\\sqrt{3} = 6(1 + \\sqrt{3})$ cm.'
    ],
    rubric_en: [
      'AD calculation using tan 45°: 1.5 marks',
      'BD calculation using tan 30°: 1.5 marks',
      'Total length AB: 1 mark'
    ],
    rubric_ml: [
      'AD യുടെ നീളം കാണൽ: 1.5 മാർക്ക്',
      'BD യുടെ നീളം കാണൽ: 1.5 മാർക്ക്',
      'AB യുടെ ആകെ നീളം കാണൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) AD = 6 cm; (b) BD = 6√3 cm; (c) AB = 6(1 + √3) cm',
    answer_ml: '(a) AD = 6 cm; (b) BD = 6√3 cm; (c) AB = 6(1 + √3) cm'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.3 Area of Triangles & Sine Formula
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.5.3',
    concept: 'm10.5.3.area-of-triangles-and-sine-formula',
    sec: '10.5.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A parallelogram has adjacent sides of lengths 10 cm and 8 cm, and one of its interior angles is $60^\\circ$.\\n(a) Write the formula for the area of a triangle with two sides and included angle.\\n(b) Find the area of one of the triangles formed by drawing a diagonal of the parallelogram.\\n(c) Find the total area of the parallelogram (take $\\sqrt{3} \\approx 1.732$).',
    prompt_ml: 'ഒരു സാമാന്തരികത്തിന്റെ അടുത്തടുത്ത വശങ്ങളുടെ നീളം 10 cm, 8 cm ഉം ഒരു കോൺ $60^\\circ$ ഉം ആണ്.\\n(a) രണ്ട് വശങ്ങളും ഉൾക്കോണും തന്നാൽ ത്രികോണ പരപ്പളവ് കാണുന്ന സൂത്രവാക്യം എഴുതുക.\\n(b) ഒരു വികർണ്ണം വരച്ചാൽ കിട്ടുന്ന ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ് കാണുക.\\n(c) സാമാന്തരികത്തിന്റെ ആകെ പരപ്പളവ് കാണുക ($\\sqrt{3} \\approx 1.732$).',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>The formula for triangle area is $\\text{Area} = \\frac{1}{2}ab\\sin\\theta$.</li>\n  <li>A diagonal splits the parallelogram into two congruent triangles. Area of one triangle $= \\frac{1}{2} \\times 10 \\times 8 \\times \\sin 60^\\circ = 40 \\times \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}\\text{ cm}^2$.</li>\n  <li>Total area of the parallelogram $= 2 \\times 20\\sqrt{3} = 40\\sqrt{3}\\text{ cm}^2$.</li>\n  <li>Substituting $\\sqrt{3} \\approx 1.732$: $\\text{Area} \\approx 40 \\times 1.732 = 69.28\\text{ cm}^2$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) (1/2) ab sin θ; (b) 20√3 cm²; (c) 40√3 cm² (approx 69.28 cm²)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Stating the formula: 1 mark</li>\n  <li>Area of single triangle calculation: 1.5 marks</li>\n  <li>Total area of parallelogram: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ത്രികോണ പരപ്പളവ് സൂത്രവാക്യം: $\\text{Area} = \\frac{1}{2}ab\\sin\\theta$.</li>\n  <li>വികർണ്ണം സാമാന്തരികത്തെ തുല്യ പരപ്പളവുള്ള 2 ത്രികോണങ്ങളാക്കുന്നു. ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ് $= \\frac{1}{2} \\times 10 \\times 8 \\times \\sin 60^\\circ = 20\\sqrt{3}\\text{ cm}^2$.</li>\n  <li>സാമാന്തരികത്തിന്റെ ആകെ പരപ്പളവ് $= 2 \\times 20\\sqrt{3} = 40\\sqrt{3}\\text{ cm}^2$.</li>\n  <li>$\\sqrt{3} \\approx 1.732$ എന്ന് നൽകിയാൽ: പരപ്പളവ് $\\approx 40 \\times 1.732 = 69.28\\text{ cm}^2$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) $\\frac{1}{2}ab\\sin\\theta$; (b) $20\\sqrt{3}\\text{ cm}^2$; (c) $40\\sqrt{3}\\text{ cm}^2$ (ഏകദേശം $69.28\\text{ cm}^2$)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>\n  <li>ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ്: 1.5 മാർക്ക്</li>\n  <li>സാമാന്തരികത്തിന്റെ ആകെ പരപ്പളവ്: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'The formula for triangle area is $\\text{Area} = \\frac{1}{2}ab\\sin\\theta$.',
      'A diagonal splits the parallelogram into two congruent triangles. Area of one triangle $= \\frac{1}{2} \\times 10 \\times 8 \\times \\sin 60^\\circ = 40 \\times \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}\\text{ cm}^2$.',
      'Total area of the parallelogram $= 2 \\times 20\\sqrt{3} = 40\\sqrt{3}\\text{ cm}^2$.',
      'Substituting $\\sqrt{3} \\approx 1.732$: $\\text{Area} \\approx 40 \\times 1.732 = 69.28\\text{ cm}^2$.'
    ],
    steps_ml: [
      'ത്രികോണ പരപ്പളവ് സൂത്രവാക്യം: $\\text{Area} = \\frac{1}{2}ab\\sin\\theta$.',
      'വികർണ്ണം സാമാന്തരികത്തെ തുല്യ പരപ്പളവുള്ള 2 ത്രികോണങ്ങളാക്കുന്നു. ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ് $= \\frac{1}{2} \\times 10 \\times 8 \\times \\sin 60^\\circ = 20\\sqrt{3}\\text{ cm}^2$.',
      'സാമാന്തരികത്തിന്റെ ആകെ പരപ്പളവ് $= 2 \\times 20\\sqrt{3} = 40\\sqrt{3}\\text{ cm}^2$.',
      '$\\sqrt{3} \\approx 1.732$ എന്ന് നൽകിയാൽ: പരപ്പളവ് $\\approx 40 \\times 1.732 = 69.28\\text{ cm}^2$.'
    ],
    rubric_en: [
      'Stating the formula: 1 mark',
      'Area of single triangle calculation: 1.5 marks',
      'Total area of parallelogram: 1.5 marks'
    ],
    rubric_ml: [
      'സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്',
      'ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ്: 1.5 മാർക്ക്',
      'സാമാന്തരികത്തിന്റെ ആകെ പരപ്പളവ്: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) (1/2) ab sin θ; (b) 20√3 cm²; (c) 40√3 cm² (approx 69.28 cm²)',
    answer_ml: '(a) $\\frac{1}{2}ab\\sin\\theta$; (b) $20\\sqrt{3}\\text{ cm}^2$; (c) $40\\sqrt{3}\\text{ cm}^2$ (ഏകദേശം $69.28\\text{ cm}^2$)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.4 Heights and Distances: Elevation & Depression
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.5.4',
    concept: 'm10.5.4.heights-and-distances',
    sec: '10.5.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A boy of height 1.5 m is standing 20 m away from a flagpole. The angle of elevation from his eyes to the top of the flagpole is $45^\\circ$.\\n(a) Draw a rough sketch and identify the right triangle formed.\\n(b) Calculate the vertical distance from his eye level to the top of the flagpole.\\n(c) Find the total height of the flagpole from the ground.',
    prompt_ml: '1.5 മീറ്റർ ഉയരമുള്ള ഒരു കുട്ടി ഒരു കൊടിമരത്തിൽ നിന്ന് 20 മീറ്റർ അകലെ നിൽക്കുന്നു. കുട്ടിയുടെ കണ്ണിൽ നിന്ന് കൊടിമരത്തിന്റെ മുകളിലേക്കുള്ള മേൽക്കോൺ $45^\\circ$ ആണ്.\\n(a) അനുയോജ്യമായ ഒരു ഏകദേശ ചിത്രം വരച്ച് മട്ടത്രികോണം അടയാളപ്പെടുത്തുക.\\n(b) കുട്ടിയുടെ കണ്ണിന്റെ ഉയരത്തിൽ നിന്ന് കൊടിമരത്തിന്റെ മുകളിലേക്കുള്ള ലംബദൂരം കാണുക.\\n(c) നിലത്തുനിന്നുള്ള കൊടിമരത്തിന്റെ ആകെ ഉയരം എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Let the flagpole be $AB$ of height $H$, boy be $CD = 1.5$ m, and distance between feet be $DB = 20$ m. Draw horizontal line $CE \\perp AB$ with $CE = 20$ m.</li>\n  <li>In right $\\triangle AEC$, $\\angle ACE = 45^\\circ$. Therefore $\\tan 45^\\circ = \\frac{AE}{CE} \\implies 1 = \\frac{AE}{20} \\implies AE = 20$ m.</li>\n  <li>The height of the lower part $EB$ equals the boy’s height: $EB = CD = 1.5$ m.</li>\n  <li>Total height of the flagpole $H = AE + EB = 20 + 1.5 = 21.5$ metres.</li>\n</ol>\n<p><b>Final Answer:</b> (a) Right triangle with adjacent = 20 m, angle = 45°; (b) 20 m; (c) 21.5 m</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Sketching/identifying model: 1 mark</li>\n  <li>Calculating vertical segment AE using tan 45°: 1.5 marks</li>\n  <li>Adding eye level to determine total height: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>കൊടിമരം $AB$, കുട്ടിയുടെ ഉയരം $CD = 1.5$ m, അകലം $DB = 20$ m. $C$ ൽ നിന്ന് $AB$ യിലേക്ക് ലംബം $CE = 20$ m വരയ്ക്കുക.</li>\n  <li>മട്ടത്രികോണം $AEC$ ൽ $\\tan 45^\\circ = \\frac{AE}{CE} \\implies 1 = \\frac{AE}{20} \\implies AE = 20$ m.</li>\n  <li>താഴത്തെ ഭാഗത്തിന്റെ ഉയരം $EB = CD = 1.5$ m.</li>\n  <li>കൊടിമരത്തിന്റെ ആകെ ഉയരം $H = 20 + 1.5 = 21.5$ മീറ്റർ.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) സമീപവശം = 20 m, കോൺ = 45° ആയ മട്ടത്രികോണം; (b) 20 മീറ്റർ; (c) 21.5 മീറ്റർ</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ചിത്രീകരണവും മട്ടത്രികോണവും: 1 മാർക്ക്</li>\n  <li>$\tan 45^\circ$ ഉപയോഗിച്ച് AE കാണൽ: 1.5 മാർക്ക്</li>\n  <li>ആകെ ഉയരം കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Let the flagpole be $AB$ of height $H$, boy be $CD = 1.5$ m, and distance between feet be $DB = 20$ m. Draw horizontal line $CE \\perp AB$ with $CE = 20$ m.',
      'In right $\\triangle AEC$, $\\angle ACE = 45^\\circ$. Therefore $\\tan 45^\\circ = \\frac{AE}{CE} \\implies 1 = \\frac{AE}{20} \\implies AE = 20$ m.',
      'The height of the lower part $EB$ equals the boy’s height: $EB = CD = 1.5$ m.',
      'Total height of the flagpole $H = AE + EB = 20 + 1.5 = 21.5$ metres.'
    ],
    steps_ml: [
      'കൊടിമരം $AB$, കുട്ടിയുടെ ഉയരം $CD = 1.5$ m, അകലം $DB = 20$ m. $C$ ൽ നിന്ന് $AB$ യിലേക്ക് ലംബം $CE = 20$ m വരയ്ക്കുക.',
      'മട്ടത്രികോണം $AEC$ ൽ $\\tan 45^\\circ = \\frac{AE}{CE} \\implies 1 = \\frac{AE}{20} \\implies AE = 20$ m.',
      'താഴത്തെ ഭാഗത്തിന്റെ ഉയരം $EB = CD = 1.5$ m.',
      'കൊടിമരത്തിന്റെ ആകെ ഉയരം $H = 20 + 1.5 = 21.5$ മീറ്റർ.'
    ],
    rubric_en: [
      'Sketching/identifying model: 1 mark',
      'Calculating vertical segment AE using tan 45°: 1.5 marks',
      'Adding eye level to determine total height: 1.5 marks'
    ],
    rubric_ml: [
      'ചിത്രീകരണവും മട്ടത്രികോണവും: 1 മാർക്ക്',
      '$\\tan 45^\\circ$ ഉപയോഗിച്ച് AE കാണൽ: 1.5 മാർക്ക്',
      'ആകെ ഉയരം കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) Right triangle with adjacent = 20 m, angle = 45°; (b) 20 m; (c) 21.5 m',
    answer_ml: '(a) സമീപവശം = 20 m, കോൺ = 45° ആയ മട്ടത്രികോണം; (b) 20 മീറ്റർ; (c) 21.5 മീറ്റർ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.3 Circumradius & Inscribed Chord Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.5.5',
    concept: 'm10.5.3.area-of-triangles-and-sine-formula',
    sec: '10.5.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A chord of length 8 cm subtends an angle of $45^\\circ$ at the circumference of a circle.\\n(a) State the relationship between chord length $a$, inscribed angle $A$, and circumradius $R$.\\n(b) Calculate the radius $R$ of this circle (give exact radical form and approximate value with $\\sqrt{2} \\approx 1.414$).\\n(c) In another circle, a chord of length 6 cm subtends an angle of $30^\\circ$ at the circumference. Find its radius.\\n(d) In a circle of radius 10 cm, find the length of a chord that subtends an angle of $60^\\circ$ on the circumference.',
    prompt_ml: 'ഒരു വൃത്തത്തിൽ 8 cm നീളമുള്ള ഒരു ഞാൺ വൃത്തപരിധിയിൽ $45^\\circ$ കോൺ ഉണ്ടാക്കുന്നു.\\n(a) ഞാണിന്റെ നീളം $a$, കോൺ $A$, പരിവൃത്ത ആരം $R$ എന്നിവ തമ്മിലുള്ള ബന്ധം എഴുതുക.\\n(b) ഈ വൃത്തത്തിന്റെ ആരം $R$ കാണുക ($\\sqrt{2} \\approx 1.414$).\\n(c) മറ്റൊരു വൃത്തത്തിൽ 6 cm നീളമുള്ള ഞാൺ വൃത്തപരിധിയിൽ $30^\\circ$ കോൺ ഉണ്ടാക്കുന്നുവെങ്കിൽ അതിന്റെ ആരം എത്ര?\\n(d) ആരം 10 cm ആയ വൃത്തത്തിൽ വൃത്തപരിധിയിൽ $60^\\circ$ കോൺ ഉണ്ടാക്കുന്ന ഞാണിന്റെ നീളം എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Formula: $2R = \\frac{a}{\\sin A} \\implies R = \\frac{a}{2\\sin A}$.</li>
  <li>Given $a = 8$ cm and $A = 45^\\circ$:
    $$2R = \\frac{8}{\\sin 45^\\circ} = \\frac{8}{1/\\sqrt{2}} = 8\\sqrt{2} \\implies R = 4\\sqrt{2} \\approx 4 \\times 1.414 = 5.656\\text{ cm}$$</li>
  <li>For $a = 6$ cm and $A = 30^\\circ$:
    $$2R = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{1/2} = 12 \\implies R = 6\\text{ cm}$$</li>
  <li>For $R = 10$ cm and $A = 60^\\circ$:
    $$a = 2R\\sin 60^\\circ = 2(10)\\left(\\frac{\\sqrt{3}}{2}\\right) = 10\\sqrt{3} \\approx 17.32\\text{ cm}$$</li>
</ol>
<p><b>Final Answer:</b> (a) 2R = a / sin A; (b) 4√2 cm (≈ 5.66 cm); (c) 6 cm; (d) 10√3 cm (≈ 17.32 cm)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Stating chord formula: 1 mark</li>
  <li>Calculating radius for 45° chord: 1 mark</li>
  <li>Calculating radius for 30° chord: 1 mark</li>
  <li>Calculating chord length for 60°: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>സൂത്രവാക്യം: $2R = \\frac{a}{\\sin A} \\implies R = \\frac{a}{2\\sin A}$.</li>
  <li>$a = 8$ cm, $A = 45^\\circ$ ആയാൽ:
    $$2R = \\frac{8}{\\sin 45^\\circ} = 8\\sqrt{2} \\implies R = 4\\sqrt{2} \\approx 4 \\times 1.414 = 5.656\\text{ cm}$$</li>
  <li>$a = 6$ cm, $A = 30^\\circ$ ആയാൽ:
    $$2R = \\frac{6}{1/2} = 12 \\implies R = 6\\text{ cm}$$</li>
  <li>$R = 10$ cm, $A = 60^\\circ$ ആയാൽ:
    $$a = 2R\\sin 60^\\circ = 2(10)\\left(\\frac{\\sqrt{3}}{2}\\right) = 10\\sqrt{3} \\approx 17.32\\text{ cm}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) $2R = \\frac{a}{\\sin A}$; (b) $4\\sqrt{2}\\text{ cm}$ (ഏകദേശം 5.66 cm); (c) 6 cm; (d) $10\\sqrt{3}\\text{ cm}$ (ഏകദേശം 17.32 cm)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>
  <li>45° ഞാണിന്റെ ആരം കാണൽ: 1 മാർക്ക്</li>
  <li>30° ഞാണിന്റെ ആരം കാണൽ: 1 മാർക്ക്</li>
  <li>60° ഞാണിന്റെ നീളം കാണൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Formula: $2R = \\frac{a}{\\sin A} \\implies R = \\frac{a}{2\\sin A}$.',
      'For $a = 8$ cm, $A = 45^\\circ$: $2R = \\frac{8}{1/\\sqrt{2}} = 8\\sqrt{2} \\implies R = 4\\sqrt{2} \\approx 5.66$ cm.',
      'For $a = 6$ cm, $A = 30^\\circ$: $2R = \\frac{6}{1/2} = 12 \\implies R = 6$ cm.',
      'For $R = 10$ cm, $A = 60^\\circ$: $a = 2(10)\\sin 60^\\circ = 10\\sqrt{3} \\approx 17.32$ cm.'
    ],
    steps_ml: [
      'സൂത്രവാക്യം: $2R = \\frac{a}{\\sin A} \\implies R = \\frac{a}{2\\sin A}$.',
      '$a = 8$ cm, $A = 45^\\circ$ ആയാൽ: $R = 4\\sqrt{2} \\approx 5.66$ cm.',
      '$a = 6$ cm, $A = 30^\\circ$ ആയാൽ: $R = 6$ cm.',
      '$R = 10$ cm, $A = 60^\\circ$ ആയാൽ: $a = 10\\sqrt{3} \\approx 17.32$ cm.'
    ],
    rubric_en: [
      'Stating chord formula: 1 mark',
      'Calculating radius for 45° chord: 1 mark',
      'Calculating radius for 30° chord: 1 mark',
      'Calculating chord length for 60°: 1 mark'
    ],
    rubric_ml: [
      'സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്',
      '45° ഞാണിന്റെ ആരം കാണൽ: 1 മാർക്ക്',
      '30° ഞാണിന്റെ ആരം കാണൽ: 1 മാർക്ക്',
      '60° ഞാണിന്റെ നീളം കാണൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) 2R = a / sin A; (b) 4√2 cm (≈ 5.66 cm); (c) 6 cm; (d) 10√3 cm (≈ 17.32 cm)',
    answer_ml: '(a) $2R = \\frac{a}{\\sin A}$; (b) $4\\sqrt{2}\\text{ cm}$ (ഏകദേശം 5.66 cm); (c) 6 cm; (d) $10\\sqrt{3}\\text{ cm}$ (ഏകദേശം 17.32 cm)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.5.4 Shadows & Angles of Depression
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.5.6',
    concept: 'm10.5.4.heights-and-distances',
    sec: '10.5.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'When the sun is seen at an angle of elevation of $40^\\circ$, the shadow of a tree is 18 metres long (take $\\tan 40^\\circ \\approx 0.8391$, $\\tan 80^\\circ \\approx 5.6713$).\\n(a) What is the height of the tree?\\n(b) What would be the length of the shadow when the sun is at an angle of elevation of $80^\\circ$?\\n(c) From the top of a building 40 metres high, a person looks at a car parked on the ground at an angle of depression of $30^\\circ$. How far is the car from the base of the building?',
    prompt_ml: 'സൂര്യന്റെ മേൽക്കോൺ $40^\\circ$ ആയിരുന്നപ്പോൾ ഒരു മരത്തിന്റെ തണലിന്റെ നീളം 18 മീറ്ററായിരുന്നു ($\\tan 40^\\circ \\approx 0.8391$, $\\tan 80^\\circ \\approx 5.6713$ എന്ന് എടുക്കുക).\\n(a) മരത്തിന്റെ ഉയരം എത്ര?\\n(b) സൂര്യന്റെ മേൽക്കോൺ $80^\\circ$ ആകുമ്പോൾ തണലിന്റെ നീളം എത്രയായിരിക്കും?\\n(c) 40 മീറ്റർ ഉയരമുള്ള ഒരു കെട്ടിടത്തിന്റെ മുകളിൽ നിന്ന് ഒരാൾ താഴെ നിർത്തിയിട്ടിരിക്കുന്ന കാറിലേക്ക് നോക്കുമ്പോൾ ഉള്ള കീഴ്ക്കോൺ $30^\\circ$ ആണ്. കെട്ടിടത്തിന്റെ ചുവട്ടിൽ നിന്ന് കാറിലേക്കുള്ള അകലം എത്ര?',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Let height of the tree be $h$. In the right triangle formed with ground distance 18 m:
    $$\\tan 40^\\circ = \\frac{h}{18} \\implies h = 18 \\times \\tan 40^\\circ = 18 \\times 0.8391 \\approx 15.10\\text{ metres}$$</li>
  <li>When sun elevation is $80^\\circ$, let new shadow length be $s$:
    $$\\tan 80^\\circ = \\frac{h}{s} \\implies s = \\frac{15.10}{\\tan 80^\\circ} = \\frac{15.10}{5.6713} \\approx 2.66\\text{ metres}$$</li>
  <li>From the top of the 40 m building, angle of depression $= 30^\\circ$. By alternate interior angles, angle of elevation from the car to the top is $30^\\circ$:
    $$\\tan 30^\\circ = \\frac{40}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{40}{d} \\implies d = 40\\sqrt{3} \\approx 40 \\times 1.732 = 69.28\\text{ metres}$$</li>
</ol>
<p><b>Final Answer:</b> (a) 15.10 m; (b) 2.66 m; (c) 40√3 m (approx 69.28 m)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Tree height calculation: 1.5 marks</li>
  <li>New shadow calculation at 80°: 1 mark</li>
  <li>Angle of depression distance calculation: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>മരത്തിന്റെ ഉയരം $h$ ആയാൽ:
    $$\\tan 40^\\circ = \\frac{h}{18} \\implies h = 18 \\times 0.8391 \\approx 15.10\\text{ മീറ്റർ}$$</li>
  <li>മേൽക്കോൺ $80^\\circ$ ആകുമ്പോൾ തണലിന്റെ നീളം $s$:
    $$s = \\frac{h}{\\tan 80^\\circ} = \\frac{15.10}{5.6713} \\approx 2.66\\text{ മീറ്റർ}$$</li>
  <li>കെട്ടിടത്തിന്റെ മുകളിൽ നിന്നുള്ള കീഴ്ക്കോൺ $30^\\circ$ ആയാൽ താഴെ നിന്നുള്ള മേൽക്കോണും $30^\\circ$ ആണ്:
    $$\\tan 30^\\circ = \\frac{40}{d} \\implies d = 40\\sqrt{3} \\approx 40 \\times 1.732 = 69.28\\text{ മീറ്റർ}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 15.10 മീറ്റർ; (b) 2.66 മീറ്റർ; (c) 40√3 മീറ്റർ (ഏകദേശം 69.28 മീറ്റർ)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>മരത്തിന്റെ ഉയരം കാണൽ: 1.5 മാർക്ക്</li>
  <li>80° യിലെ തണലിന്റെ നീളം: 1 മാർക്ക്</li>
  <li>കീഴ്ക്കോണിൽ നിന്നുള്ള അകലം കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Tree height: $h = 18\\tan 40^\\circ = 18 \\times 0.8391 \\approx 15.10$ m.',
      'New shadow at 80°: $s = \\frac{15.10}{\\tan 80^\\circ} = \\frac{15.10}{5.6713} \\approx 2.66$ m.',
      'Distance of car from building: $d = \\frac{40}{\\tan 30^\\circ} = 40\\sqrt{3} \\approx 69.28$ m.'
    ],
    steps_ml: [
      'മരത്തിന്റെ ഉയരം: $h = 18 \\times 0.8391 \\approx 15.10$ മീറ്റർ.',
      '80° യിലെ തണൽ: $s = \\frac{15.10}{5.6713} \\approx 2.66$ മീറ്റർ.',
      'കാറിലേക്കുള്ള അകലം: $d = 40\\sqrt{3} \\approx 69.28$ മീറ്റർ.'
    ],
    rubric_en: [
      'Tree height calculation: 1.5 marks',
      'New shadow calculation at 80°: 1 mark',
      'Angle of depression distance calculation: 1.5 marks'
    ],
    rubric_ml: [
      'മരത്തിന്റെ ഉയരം കാണൽ: 1.5 മാർക്ക്',
      '80° യിലെ തണലിന്റെ നീളം: 1 മാർക്ക്',
      'കീഴ്ക്കോണിൽ നിന്നുള്ള അകലം കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) 15.10 m; (b) 2.66 m; (c) 40√3 m (approx 69.28 m)',
    answer_ml: '(a) 15.10 മീറ്റർ; (b) 2.66 മീറ്റർ; (c) 40√3 മീറ്റർ (ഏകദേശം 69.28 മീറ്റർ)'
  }
);
