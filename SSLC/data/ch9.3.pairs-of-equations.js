/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 3: Pairs of Equations (സമവാക്യജോടികൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.3.1.formulating-pairs-of-equations',
    sec: '9.3.1',
    kind: 'method',
    tier: 'core',
    title_en: 'Formulating Pairs of Linear Equations in Two Variables',
    title_ml: 'രണ്ട് ചരങ്ങളുള്ള സമവാക്യങ്ങൾ രൂപീകരിക്കൽ',
    oneLine_en: 'When a problem involves two unknown quantities connected by two independent conditions, we represent them with two variables x and y and form a pair of linear equations.',
    oneLine_ml: 'രണ്ട് അജ്ഞാത അളവുകളും അവ തമ്മിലുള്ള രണ്ട് വ്യവസ്ഥകളും തന്നിട്ടുണ്ടെങ്കിൽ x, y എന്നീ രണ്ട് ചരങ്ങൾ ഉപയോഗിച്ച് രണ്ട് സമവാക്യങ്ങൾ രൂപീകരിക്കുന്നു.',
    statement_en: `<p>A <b>pair of linear equations in two variables</b> (രണ്ട് ചരങ്ങളുള്ള സമവാക്യജോടി) consists of two equations of the general form:</p>
      $$a_1 x + b_1 y = c_1$$
      $$a_2 x + b_2 y = c_2$$
      <p>where $x, y$ are unknown variables, and $a_1, b_1, c_1, a_2, b_2, c_2$ are known real constants (with $a_1^2 + b_1^2 \\neq 0$ and $a_2^2 + b_2^2 \\neq 0$).</p>
      <p><b>Classic Sum and Difference Archetype:</b></p>
      <p>If the sum of two numbers is $S$ and their difference is $D$ ($x > y$):</p>
      $$x + y = S \\quad \\text{and} \\quad x - y = D$$
      <p>Adding the two equations yields $2x = S + D \\implies x = \\frac{S + D}{2}$.</p>
      <p>Subtracting yields $2y = S - D \\implies y = \\frac{S - D}{2}$.</p>
      <p><b>Rule:</b> To determine two distinct unknowns, we strictly require <b>two independent equations</b>.</p>`,
    statement_ml: `<p>രണ്ട് അജ്ഞാത അളവുകൾ ഉൾപ്പെടുന്ന രണ്ട് ബീജഗണിത സമവാക്യങ്ങളുടെ കൂട്ടത്തെയാണ് <b>സമവാക്യജോടി</b> എന്ന് പറയുന്നത്:</p>
      $$a_1 x + b_1 y = c_1$$
      $$a_2 x + b_2 y = c_2$$
      <p>ഇവിടെ $x, y$ എന്നിവ ചരങ്ങളും, $a_1, b_1, c_1, a_2, b_2, c_2$ എന്നിവ സ്ഥിരസംഖ്യകളുമാണ്.</p>
      <p><b>തുകയും വ്യത്യാസവും നൽകിയുള്ള കണക്ക്:</b></p>
      <p>രണ്ട് സംഖ്യകളുടെ തുക $S$-ഉം വ്യത്യാസം $D$-ഉം ആയാൽ ($x > y$):</p>
      $$x + y = S \\quad \\text{കൂടാതെ} \\quad x - y = D$$
      <p>രണ്ട് സമവാക്യങ്ങളും കൂട്ടിയാൽ: $2x = S + D \\implies x = \\frac{S + D}{2}$ (വലിയ സംഖ്യ = തുകയുടെയും വ്യത്യാസത്തിന്റെയും തുകയുടെ പകുതി).</p>
      <p>കുറച്ചാൽ: $2y = S - D \\implies y = \\frac{S - D}{2}$ (ചെറിയ സംഖ്യ = തുകയിൽ നിന്ന് വ്യത്യാസം കുറച്ചതിന്റെ പകുതി).</p>
      <p><b>നിയമം:</b> രണ്ട് വ്യത്യസ്ത അജ്ഞാതവിലകൾ കണ്ടെത്താൻ പരസ്പരബന്ധമില്ലാത്ത <b>രണ്ട് സമവാക്യങ്ങൾ</b> നിർബന്ധമായും ആവശ്യമാണ്.</p>`,
    intuition_en: `<p>A single equation with two unknowns is like having one scale pan: many combinations can balance it. Adding a second independent scale locks the values down to a single unique solution.</p>`,
    intuition_ml: `<p>ഒരു സമവാക്യം മാത്രമുള്ളപ്പോൾ രണ്ട് ചരങ്ങൾക്കും നിരവധി വിലകൾ സ്വീകരിക്കാം. എന്നാൽ രണ്ടാമതൊരു സ്വതന്ത്ര സമവാക്യം കൂടി ലഭിക്കുമ്പോൾ കൃത്യമായ ഒറ്റ പരിഹാരം മാത്രമായി ചുരുങ്ങുന്നു.</p>`,
    proof: {
      idea_en: 'Two intersecting lines in the coordinate plane meet at exactly one unique point (x, y).',
      idea_ml: 'രണ്ട് രേഖീയ സമവാക്യങ്ങൾ രണ്ട് നേർവരകളെ പ്രതിനിധീകരിക്കുന്നു; അവ കൂട്ടിമുട്ടുന്ന ബിന്ദുവാണ് പൊതുപരിഹാരം.',
      why_en: 'Line intersection has a unique solution when slopes are unequal (a1/a2 != b1/b2).',
      why_ml: 'ചരിവുകൾ വ്യത്യസ്തമാകുമ്പോൾ വരകൾ ഒരൊറ്റ ബിന്ദുവിൽ മാത്രം ഖണ്ഡിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Assign variables to unknowns.', m: 'x = \\text{first unknown}, \\quad y = \\text{second unknown}' },
        { why_en: 'Translate first condition into algebraic equation.', m: 'a_1 x + b_1 y = c_1' },
        { why_en: 'Translate second condition into algebraic equation.', m: 'a_2 x + b_2 y = c_2' },
        { why_en: 'Linear independence ensures unique intersection.', m: '\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\implies \\text{unique } (x, y)' }
      ],
      rungs_ml: [
        { why_ml: 'അജ്ഞാത അളവുകൾക്ക് ചരങ്ങൾ നൽകുന്നു.', m: 'x, y' },
        { why_ml: 'ആദ്യ വ്യവസ്ഥയെ സമവാക്യമാക്കുന്നു.', m: 'a_1 x + b_1 y = c_1' },
        { why_ml: 'രണ്ടാമത്തെ വ്യവസ്ഥയെ സമവാക്യമാക്കുന്നു.', m: 'a_2 x + b_2 y = c_2' },
        { why_ml: 'വരകൾ കൂട്ടിമുട്ടുന്ന ബിന്ദു കണ്ടെത്തുന്നു.', m: '(x, y)' }
      ]
    },
    needs: ['m8.11.2.linear-equations-one-variable'],
    traps_en: [
      'Two equations that are multiples of each other (e.g. x + y = 10 and 2x + 2y = 20) are NOT independent and have infinitely many solutions.',
      'Always clearly define what each variable stands for, including its units.'
    ],
    traps_ml: [
      'ഒരേ സമവാക്യത്തിന്റെ ഗുണിതങ്ങൾ (ഉദാ: x + y = 10, 2x + 2y = 20) സ്വതന്ത്ര സമവാക്യങ്ങളല്ല; അവയ്ക്ക് അനന്തമായ പരിഹാരങ്ങളുണ്ടാകും.',
      'ഓരോ ചരവും എന്തിനെയാണ് സൂചിപ്പിക്കുന്നതെന്നും അതിന്റെ യൂണിറ്റും വ്യക്തമായി നിർവചിക്കണം.'
    ],
    cards_en: [
      { q: 'The sum of two numbers is 50 and their difference is 16. What is the larger number?', a: '$x = \\frac{50 + 16}{2} = \\frac{66}{2} = \\mathbf{33}$.', kind: 'apply' },
      { q: 'How many equations are required to uniquely determine the values of two independent unknowns?', a: 'Two independent equations.', kind: 'recall' },
      { q: 'The cost of 1 pen and 1 notebook is ₹35, and 1 pen and 2 notebooks cost ₹55. Find the cost of 1 notebook.', a: 'Subtracting: $(p + 2n) - (p + n) = 55 - 35 \\implies n = \\mathbf{₹20}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'രണ്ട് സംഖ്യകളുടെ തുക 50-ഉം വ്യത്യാസം 16-ഉം ആയാൽ വലിയ സംഖ്യ ഏതാണ്?', a: '$x = \\frac{50 + 16}{2} = \\frac{66}{2} = \\mathbf{33}$.', kind: 'apply' },
      { q: 'രണ്ട് അജ്ഞാത അളവുകൾ കൃത്യമായി കണ്ടെത്താൻ എത്ര സമവാക്യങ്ങൾ ആവശ്യമാണ്?', a: 'പരസ്പരബന്ധമില്ലാത്ത രണ്ട് സമവാക്യങ്ങൾ.', kind: 'recall' },
      { q: 'ഒരു പേനയുടെയും ഒരു നോട്ടുപുസ്തകത്തിന്റെയും വില ₹35, ഒരു പേനയുടെയും 2 നോട്ടുപുസ്തകങ്ങളുടെയും വില ₹55 ആയാൽ നോട്ടുപുസ്തകത്തിന്റെ വില എത്ര?', a: 'കുറയ്ക്കുമ്പോൾ: $55 - 35 = \\mathbf{₹20}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.3.2.elimination-method',
    sec: '9.3.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Solving Linear Systems by Elimination',
    title_ml: 'നിഷ്കാസന രീതി',
    oneLine_en: 'Multiply equations by constants so that coefficients of one variable match, then add or subtract to eliminate that variable and solve a single-variable linear equation.',
    oneLine_ml: 'ഒരു ചരത്തിന്റെ ഗുണോത്തരങ്ങൾ തുല്യമാക്കാൻ സമവാക്യങ്ങളെ അനുയോജ്യ സംഖ്യകൾ കൊണ്ട് ഗുണിച്ച്, കൂട്ടുകയോ കുറയ്ക്കുകയോ ചെയ്ത് ആ ചരത്തെ ഒഴിവാക്കി പരിഹാരം കാണുന്നു.',
    statement_en: `<p>The <b>elimination method</b> systematically reduces a system of two variables into a single linear equation in one variable:</p>
      <ol>
        <li>Choose which variable ($x$ or $y$) to eliminate.</li>
        <li>Multiply one or both equations by non-zero constants so that the coefficients of the chosen variable become numerically equal (or opposite).</li>
        <li><b>Add</b> the equations if the coefficients have opposite signs ($+k$ and $-k$), or <b>subtract</b> if they have the same sign ($+k$ and $+k$).</li>
        <li>This eliminates the variable entirely, leaving a linear equation in one variable. Solve for it.</li>
        <li>Substitute this found value back into either original equation to solve for the second variable.</li>
      </ol>
      <p><i>Example:</i> Solve $2x + 3y = 13$ and $3x - 2y = 0$:</p>
      $$\\text{Multiply (1) by 2: } 4x + 6y = 26$$
      $$\\text{Multiply (2) by 3: } 9x - 6y = 0$$
      $$\\text{Add both equations: } 13x = 26 \\implies x = 2$$
      $$\\text{Substitute } x = 2 \\text{ into (2): } 3(2) = 2y \\implies 2y = 6 \\implies y = 3$$
      $$\\text{Solution: } \\mathbf{x = 2, \\, y = 3}.$$`,
    statement_ml: `<p>രണ്ട് സമവാക്യങ്ങളിൽ നിന്ന് ഒരു ചരത്തെ ഒഴിവാക്കി (നിഷ്കാസനം ചെയ്ത്) ഒരു ചരമുള്ള സമവാക്യമാക്കി മാറ്റി പരിഹരിക്കുന്ന രീതിയാണ് <b>നിഷ്കാസന രീതി</b>:</p>
      <ol>
        <li>ഒഴിവാക്കേണ്ട ചരം ($x$ അല്ലെങ്കിൽ $y$) തിരഞ്ഞെടുക്കുക.</li>
        <li>ആ ചരത്തിന്റെ ഗുണോത്തരങ്ങൾ തുല്യമാക്കാൻ (അല്ലെങ്കിൽ വിപരീത ചിഹ്നങ്ങളുള്ളവയാക്കാൻ) സമവാക്യങ്ങളെ അനുയോജ്യ സംഖ്യകൾ കൊണ്ട് ഗുണിക്കുക.</li>
        <li>ഗുണോത്തരങ്ങൾ വിപരീത ചിഹ്നങ്ങളാണെങ്കിൽ സമവാക്യങ്ങൾ <b>കൂട്ടുക</b>; ഒരേ ചിഹ്നമാണെങ്കിൽ <b>കുറയ്ക്കുക</b>.</li>
        <li>ഇതോടെ ആ ചരം ഇല്ലാതായി ഒറ്റ ചരമുള്ള സമവാക്യം ലഭിക്കുന്നു; അതിന്റെ വില കാണുക.</li>
        <li>കിട്ടിയ വില ഏതെങ്കിലും ഒരു സമവാക്യത്തിൽ നൽകി മറ്റേ ചരത്തിന്റെ വില കണ്ടെത്തുക.</li>
      </ol>
      <p><i>ഉദാഹരണം:</i> $2x + 3y = 13$, $3x - 2y = 0$ നിർദ്ധാരണം ചെയ്യുക:</p>
      $$\\text{സമവാക്യം (1) } \\times 2: \\quad 4x + 6y = 26$$
      $$\\text{സമവാക്യം (2) } \\times 3: \\quad 9x - 6y = 0$$
      $$\\text{രണ്ടും കൂട്ടുന്നു: } 13x = 26 \\implies x = 2$$
      $$3(2) = 2y \\implies 2y = 6 \\implies y = 3$$
      $$\\text{ഉത്തരം: } \\mathbf{x = 2, \\, y = 3}.$$`,
    intuition_en: `<p>Balancing weights: by scaling batches of items so that the amount of one item matches in both batches, the price difference tells you purely the cost of the other item.</p>`,
    intuition_ml: `<p>രണ്ട് കൂട്ടം സാധനങ്ങളിൽ ഒരിനത്തിന്റെ അളവ് തുല്യമാക്കിക്കഴിഞ്ഞാൽ, ആകെ തുകയിലെ വ്യത്യാസം മറ്റേ സാധനത്തിന്റെ വില മാത്രം തരുന്നു.</p>`,
    proof: {
      idea_en: 'Linear combinations of valid equations produce valid equations that isolate individual variables.',
      idea_ml: 'തുല്യത സംരക്ഷിക്കുന്ന ക്രിയകൾ വഴി രണ്ട് ചരങ്ങളുള്ള സമവാക്യങ്ങളെ ഒറ്റ ചരത്തിലേക്ക് ചുരുക്കുന്നു.',
      why_en: 'If a = b and c = d, then ma + nc = mb + nd for all scalars m, n.',
      why_ml: 'ഇരുവശത്തും ഒരേ ക്രിയ ചെയ്യുന്നത് തുല്യത നിലനിർത്തുന്നു.',
      rungs_en: [
        { why_en: 'Given system.', m: 'a_1 x + b_1 y = c_1, \\quad a_2 x + b_2 y = c_2' },
        { why_en: 'Multiply by b2 and b1.', m: 'b_2 a_1 x + b_2 b_1 y = b_2 c_1, \\quad b_1 a_2 x + b_1 b_2 y = b_1 c_2' },
        { why_en: 'Subtract equations to eliminate y.', m: '(a_1 b_2 - a_2 b_1)x = c_1 b_2 - c_2 b_1' },
        { why_en: 'Solve for x directly.', m: 'x = \\frac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}' }
      ],
      rungs_ml: [
        { why_ml: 'തന്നിരിക്കുന്ന സമവാക്യങ്ങൾ.', m: 'a_1 x + b_1 y = c_1, \\quad a_2 x + b_2 y = c_2' },
        { why_ml: 'ഗുണോത്തരങ്ങൾ സമീകരിക്കാൻ ഗുണിക്കുന്നു.', m: 'b_2 a_1 x + b_1 b_2 y = b_2 c_1, \\quad b_1 a_2 x + b_1 b_2 y = b_1 c_2' },
        { why_ml: 'കുറച്ച് y ഒഴിവാക്കുന്നു.', m: '(a_1 b_2 - a_2 b_1)x = c_1 b_2 - c_2 b_1' },
        { why_ml: 'x-ന്റെ വില കണ്ടെത്തുന്നു.', m: 'x = \\frac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}' }
      ]
    },
    needs: ['m9.3.1.formulating-pairs-of-equations'],
    traps_en: [
      'When multiplying an equation by a number, multiply EVERY term including the right-hand constant.',
      'Watch out for negative signs when subtracting an equation containing negative coefficients.'
    ],
    traps_ml: [
      'ഒരു സമവാക്യത്തെ ഗുണിക്കുമ്പോൾ വലതുവശത്തെ സംഖ്യ ഉൾപ്പെടെ എല്ലാ പദങ്ങളെയും ഗുണിക്കാൻ മറക്കരുത്.',
      'നെഗറ്റീവ് സംഖ്യകൾ അടങ്ങിയ സമവാക്യം കുറയ്ക്കുമ്പോൾ ചിഹ്നങ്ങളിൽ തെറ്റ് വരാതെ ശ്രദ്ധിക്കുക.'
    ],
    cards_en: [
      { q: 'Solve: x + y = 14 and x - y = 4 by elimination.', a: 'Adding gives $2x = 18 \\implies x = 9$. Then $y = 14 - 9 = 5$. Solution: $\\mathbf{(9, 5)}$.', kind: 'apply' },
      { q: 'In 3x + 2y = 12 and 5x - 2y = 4, what operation directly eliminates y?', a: 'Adding the two equations directly (since $+2y$ and $-2y$ cancel).', kind: 'recall' },
      { q: 'Solve 2x + y = 7 and x - y = 2.', a: 'Add: $3x = 9 \\implies x = 3$. $y = 3 - 2 = 1$. Solution: $\\mathbf{x = 3, y = 1}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'x + y = 14, x - y = 4 നിർദ്ധാരണം ചെയ്യുക.', a: 'കൂട്ടുമ്പോൾ $2x = 18 \\implies x = 9$. തുടർന്ന് $y = 5$. ഉത്തരം: $\\mathbf{x = 9, y = 5}$.', kind: 'apply' },
      { q: '3x + 2y = 12, 5x - 2y = 4 സമവാക്യങ്ങളിൽ y ഒഴിവാക്കാൻ എന്ത് ചെയ്യണം?', a: 'രണ്ട് സമവാക്യങ്ങളും തമ്മിൽ കൂട്ടുക (+2y, -2y റദ്ദാകും).', kind: 'recall' },
      { q: '2x + y = 7, x - y = 2 പരിഹരിക്കുക.', a: 'കൂട്ടുമ്പോൾ: $3x = 9 \\implies x = 3$. $y = 1$. ഉത്തരം: $\\mathbf{x = 3, y = 1}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.3.3.substitution-method',
    sec: '9.3.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Solving Linear Systems by Substitution',
    title_ml: 'പ്രതിസ്ഥാപന രീതി',
    oneLine_en: 'Solve one equation for one variable in terms of the other, then substitute this expression into the second equation to produce a single-variable equation.',
    oneLine_ml: 'ഒരു സമവാക്യത്തിൽ നിന്ന് ഒരു ചരത്തിന്റെ വില മറ്റേ ചരത്തിന്റെ രൂപത്തിൽ കണ്ടെത്തി, അത് രണ്ടാമത്തെ സമവാക്യത്തിൽ പ്രതിസ്ഥാപിച്ച് പരിഹാരം കാണുന്നു.',
    statement_en: `<p>The <b>substitution method</b> solves a system by plugging the algebraic definition of one variable directly into the other equation:</p>
      <ol>
        <li>From either equation, isolate one variable on the left side:
          $$y = \\frac{c_1 - a_1 x}{b_1}$$</li>
        <li>Substitute this expression for $y$ in the second equation:
          $$a_2 x + b_2 \\left(\\frac{c_1 - a_1 x}{b_1}\\right) = c_2$$</li>
        <li>Solve this linear equation for the remaining single variable $x$.</li>
        <li>Plug the numeric value of $x$ back into the expression for $y$ to obtain its numerical value.</li>
      </ol>
      <p><b>When to Prefer Substitution:</b> This method is especially quick and clean when one of the variables has a coefficient of $1$ or $-1$ (e.g. $x - 3y = 4 \\implies x = 3y + 4$).</p>`,
    statement_ml: `<p>ഒരു സമവാക്യത്തിൽ നിന്ന് ലഭിക്കുന്ന ഒരു ചരത്തിന്റെ ബീജഗണിത വില രണ്ടാമത്തെ സമവാക്യത്തിൽ നൽകി പരിഹരിക്കുന്ന രീതിയാണ് <b>പ്രതിസ്ഥാപന രീതി</b>:</p>
      <ol>
        <li>ഏതെങ്കിലും ഒരു സമവാക്യത്തിൽ നിന്ന് ഒരു ചരത്തെ ഒറ്റപ്പെടുത്തുക:
          $$y = \\frac{c_1 - a_1 x}{b_1}$$</li>
        <li>ഈ വില രണ്ടാമത്തെ സമവാക്യത്തിലെ $y$-ന് പകരം നൽകുക (പ്രതിസ്ഥാപിക്കുക):
          $$a_2 x + b_2(y\\text{-ന്റെ വില}) = c_2$$</li>
        <li>ഇപ്പോൾ ലഭിച്ച ഒരു ചരമുള്ള സമവാക്യം നിർദ്ധാരണം ചെയ്ത് $x$-ന്റെ വില കണ്ടെത്തുക.</li>
        <li>ലഭിച്ച $x$-ന്റെ വില ആദ്യ സമവാക്യത്തിൽ നൽകി $y$-ന്റെ വില കാണുക.</li>
      </ol>
      <p><b>പ്രത്യേക സൗകര്യം:</b> ഏതെങ്കിലും ചരത്തിന്റെ ഗുണോത്തരം $1$ അല്ലെങ്കിൽ $-1$ ആയിരിക്കുമ്പോൾ (ഉദാഹരണത്തിന് $x - 3y = 4 \\implies x = 3y + 4$) ഈ രീതി വളരെ ലളിതവും എളുപ്പവുമാണ്.</p>`,
    intuition_en: `<p>Like replacing a foreign coin with its known equivalent value in local currency: once the substitution is made, all transactions are in a single unified currency.</p>`,
    intuition_ml: `<p>ഒരു വിദേശ നാണയത്തിന് തുല്യമായ തുക സ്വന്തം കറൻസിയിൽ മാറ്റി നൽകുന്നതുപോലെയാണ്, ഒരു ചരത്തിന് പകരം മറ്റേ ചരത്തിലുള്ള വില നൽകുന്നത്.</p>`,
    proof: {
      idea_en: 'Functional composition collapses the dimension of the system from 2 to 1.',
      idea_ml: 'രണ്ട് ചരങ്ങളുടെ ബന്ധത്തെ രണ്ടാമത്തെ സമവാക്യത്തിൽ നൽകി പരിഹാരം കാണുന്നു.',
      why_en: 'Equality axiom allows substituting identical algebraic expressions anywhere.',
      why_ml: 'തുല്യമായ പദങ്ങളെ സമവാക്യത്തിൽ എവിടെയും പരസ്പരം മാറ്റിവെക്കാം.',
      rungs_en: [
        { why_en: 'Express y in terms of x.', m: 'y = f(x) = \\frac{c_1 - a_1 x}{b_1}' },
        { why_en: 'Substitute into second equation.', m: 'a_2 x + b_2 f(x) = c_2' },
        { why_en: 'Single variable equation in x.', m: 'g(x) = c_2 \\implies x = x_0' },
        { why_en: 'Evaluate y.', m: 'y_0 = f(x_0)' }
      ],
      rungs_ml: [
        { why_ml: 'y-നെ x-ന്റെ രൂപത്തിൽ എഴുതുന്നു.', m: 'y = \\frac{c_1 - a_1 x}{b_1}' },
        { why_ml: 'രണ്ടാമത്തെ സമവാക്യത്തിൽ നൽകുന്നു.', m: 'a_2 x + b_2 y = c_2' },
        { why_ml: 'x-ന്റെ വില കണ്ടെത്തുന്നു.', m: 'x = x_0' },
        { why_ml: 'y-ന്റെ വില കണക്കാക്കുന്നു.', m: 'y = y_0' }
      ]
    },
    needs: ['m9.3.2.elimination-method'],
    traps_en: [
      'Remember to put parentheses around the substituted expression when multiplying by b2: b2 * (expression).',
      'Do not substitute the expression back into the SAME equation it was derived from (this yields a trivial 0 = 0).'
    ],
    traps_ml: [
      'പ്രതിസ്ഥാപിക്കുന്ന പദാവലിക്ക് ബ്രാക്കറ്റ് നൽകണം: b2 * (പദാവലി).',
      'വില കണ്ടെത്തിയ അതേ സമവാക്യത്തിലേക്ക് തന്നെ അത് തിരികെ നൽകരുത് (അപ്പോൾ 0 = 0 എന്ന് മാത്രമേ കിട്ടൂ).'
    ],
    cards_en: [
      { q: 'From x - 2y = 3, express x in terms of y.', a: '$\\mathbf{x = 2y + 3}$.', kind: 'apply' },
      { q: 'Solve x + y = 10 and y = 2x + 1 using substitution.', a: '$x + (2x + 1) = 10 \\implies 3x = 9 \\implies x = 3, \\, y = 2(3)+1 = 7$. Solution: $\\mathbf{(3, 7)}$.', kind: 'apply' },
      { q: 'When is substitution most convenient to use?', a: 'When one variable has a coefficient of 1 or -1.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'x - 2y = 3-ൽ നിന്ന് x-നെ y-ന്റെ രൂപത്തിൽ എഴുതുക.', a: '$\\mathbf{x = 2y + 3}$.', kind: 'apply' },
      { q: 'x + y = 10, y = 2x + 1 പ്രതിസ്ഥാപന രീതിയിൽ നിർദ്ധാരണം ചെയ്യുക.', a: '$x + (2x + 1) = 10 \\implies 3x = 9 \\implies x = 3, y = 7$. ഉത്തരം: $\\mathbf{(3, 7)}$.', kind: 'apply' },
      { q: 'പ്രതിസ്ഥാപന രീതി ഏറ്റവും എളുപ്പമാകുന്നത് എപ്പോഴാണ്?', a: 'ഒരു ചരത്തിന്റെ ഗുണോത്തരം 1 അല്ലെങ്കിൽ -1 ആയിരിക്കുമ്പോൾ.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.3.4.applied-word-problems-pairs',
    sec: '9.3.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Applied Real-World Word Problems with Pairs of Equations',
    title_ml: 'സമവാക്യജോടികളിലെ പ്രായോഗിക പ്രശ്നങ്ങൾ',
    oneLine_en: 'Solving real-world puzzles involving ages, currency notes, geometry, and two-digit numbers by translating statements into linear equation pairs.',
    oneLine_ml: 'വയസ്സ്, കറൻസി നോട്ടുകൾ, ജ്യാമിതീയ അളവുകൾ, രണ്ടക്ക സംഖ്യകൾ എന്നിവയുമായി ബന്ധപ്പെട്ട പ്രശ്നങ്ങൾ സമവാക്യജോടികളാക്കി പരിഹരിക്കുന്നു.',
    statement_en: `<p>Real-world mathematical puzzles can be resolved smoothly by systematic translation into a pair of equations:</p>
      <p><b>1. Two-Digit Number Reversal Problems:</b></p>
      <p>A two-digit number with tens digit $x$ and units digit $y$ has value:</p>
      $$\\text{Original Number} = 10x + y$$
      $$\\text{Reversed Number} = 10y + x$$
      $$\\text{Difference: } (10x + y) - (10y + x) = 9(x - y)$$
      $$\\text{Sum: } (10x + y) + (10y + x) = 11(x + y)$$
      <p><b>2. Age Relations:</b></p>
      <p>If a father’s current age is $x$ and his son’s current age is $y$:</p>
      <ul>
        <li>$k$ years ago: their ages were $x - k$ and $y - k$.</li>
        <li>$k$ years from now: their ages will be $x + k$ and $y + k$.</li>
      </ul>
      <p><b>3. Geometry (Perimeter and Dimensions):</b></p>
      <p>In a rectangle with length $x$ and breadth $y$, perimeter $P = 2(x + y) \\implies x + y = \\frac{P}{2}$.</p>`,
    statement_ml: `<p>നിത്യജീവിതത്തിലെ പല സമസ്യകളും രണ്ട് സമവാക്യങ്ങളാക്കി മാറ്റി വളരെ എളുപ്പത്തിൽ പരിഹരിക്കാം:</p>
      <p><b>1. രണ്ടക്ക സംഖ്യകളുടെ കണക്കുകൾ:</b></p>
      <p>പത്തിന്റെ സ്ഥാനത്തെ അക്കം $x$-ഉം ഒന്നിന്റെ സ്ഥാനത്തെ അക്കം $y$-ഉം ആയ രണ്ടക്ക സംഖ്യയുടെ വില:</p>
      $$\\text{സംഖ്യ} = 10x + y$$
      $$\\text{അക്കങ്ങൾ തിരിച്ചിട്ട സംഖ്യ} = 10y + x$$
      $$\\text{വ്യത്യാസം: } (10x + y) - (10y + x) = 9(x - y) \\quad (9\\text{-ന്റെ ഗുണിതം})$$
      $$\\text{തുക: } (10x + y) + (10y + x) = 11(x + y) \\quad (11\\text{-ന്റെ ഗുണിതം})$$
      <p><b>2. വയസ്സുമായി ബന്ധപ്പെട്ട കണക്കുകൾ:</b></p>
      <p>ഒരാളുടെ ഇന്നത്തെ വയസ്സ് $x$-ഉം മറ്റൊരാളുടെ വയസ്സ് $y$-ഉം ആണെങ്കിൽ:</p>
      <ul>
        <li>$k$ വർഷങ്ങൾക്ക് മുൻപ്: അവരുടെ വയസ്സ് $x - k, y - k$ ആയിരുന്നു.</li>
        <li>$k$ വർഷങ്ങൾക്ക് ശേഷം: അവരുടെ വയസ്സ് $x + k, y + k$ ആയിരിക്കും.</li>
      </ul>
      <p><b>3. ജ്യാമിതി (ചതുരത്തിന്റെ അളവുകൾ):</b></p>
      <p>നീളം $x$, വീതി $y$ ആയ ചതുരത്തിന്റെ ചുറ്റളവ് $2(x + y)$ ആണ്; അതിനാൽ $x + y = \\frac{\\text{ചുറ്റളവ്}}{2}$.</p>`,
    intuition_en: `<p>The tens digit contributes 10 times its face value. Reversing the digits transfers the 10-multiplier between the two digits, creating differences that are always multiples of 9.</p>`,
    intuition_ml: `<p>പത്തിന്റെ സ്ഥാനത്തെ അക്കത്തിന് 10 ഇരട്ടി വിലയുണ്ട്. അക്കങ്ങൾ തിരിച്ചിടുമ്പോൾ സ്ഥാനവില മാറുന്നതിനാൽ വ്യത്യാസം എപ്പോഴും 9-ന്റെ ഗുണിതമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Positional decimal notation translates digit semantics into rigorous linear algebra.',
      idea_ml: 'സ്ഥാനവില അടിസ്ഥാനമാക്കി വാചകങ്ങളെ കൃത്യമായ ബീജഗണിത സമവാക്യങ്ങളാക്കുന്നു.',
      why_en: 'Linear models are invertible when determinant is non-zero.',
      why_ml: 'വ്യവസ്ഥകൾ പരസ്പരവിരുദ്ധമല്ലെങ്കിൽ കൃത്യമായ പരിഹാരം കണ്ടെത്താം.',
      rungs_en: [
        { why_en: 'Formulate digit equation.', m: '10x + y' },
        { why_en: 'Formulate reverse equation.', m: '10y + x' },
        { why_en: 'Formulate age/dimension constraints.', m: 'x + k = m(y + k)' },
        { why_en: 'Solve resulting pair by elimination.', m: '(x, y)' }
      ],
      rungs_ml: [
        { why_ml: 'സംഖ്യയെ ബീജഗണിതമാക്കുന്നു.', m: '10x + y' },
        { why_ml: 'തിരിച്ചിട്ട സംഖ്യ.', m: '10y + x' },
        { why_ml: 'വ്യവസ്ഥകൾ സമവാക്യമാക്കുന്നു.', m: 'x + k = m(y + k)' },
        { why_ml: 'സമവാക്യജോടി നിർദ്ധാരണം ചെയ്യുന്നു.', m: '(x, y)' }
      ]
    },
    needs: ['m9.3.2.elimination-method'],
    traps_en: [
      'Do not forget to add/subtract k from BOTH individuals when moving backward or forward in time.',
      'A two-digit number is 10x + y, NOT xy (xy is the product of x and y).'
    ],
    traps_ml: [
      'വർഷങ്ങൾ പിന്നോട്ടോ മുന്നോട്ടോ പോകുമ്പോൾ രണ്ട് പേരുടെയും വയസ്സിൽ മാറ്റം വരുത്തണം.',
      'രണ്ടക്ക സംഖ്യ എന്നാൽ 10x + y ആണ്, xy അല്ല (xy എന്നാൽ x-ഉം y-ഉം തമ്മിലുള്ള ഗുണനമാണ്).'
    ],
    cards_en: [
      { q: 'Express a two-digit number whose tens digit is t and units digit is u.', a: '$\\mathbf{10t + u}$.', kind: 'recall' },
      { q: 'The sum of digits of a two-digit number is 9. Reversing digits gives 27 more. What is the number?', a: 'Let number be $10x + y$. $x + y = 9$ and $9(y - x) = 27 \\implies y - x = 3$. Adding: $2y = 12 \\implies y = 6, x = 3$. Number is **36**.', kind: 'apply' },
      { q: 'Father is 30 years older than son. In 5 years, father will be 3 times son’s age. Find son’s age.', a: '$f = s + 30$. $f + 5 = 3(s + 5) \\implies s + 35 = 3s + 15 \\implies 2s = 20 \\implies s = \\mathbf{10}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'പത്തിന്റെ സ്ഥാനത്ത് t-യും ഒന്നിന്റെ സ്ഥാനത്ത് u-വുമുള്ള രണ്ടക്ക സംഖ്യ ഏത്?', a: '$\\mathbf{10t + u}$.', kind: 'recall' },
      { q: 'രണ്ടക്ക സംഖ്യയിലെ അക്കങ്ങളുടെ തുക 9 ആണ്. അക്കങ്ങൾ തിരിച്ചിട്ടപ്പോൾ 27 കൂടി. സംഖ്യ ഏതാണ്?', a: '$x + y = 9, y - x = 3 \\implies y = 6, x = 3$. സംഖ്യ **36** ആണ്.', kind: 'apply' },
      { q: 'അച്ഛന് മകനേക്കാൾ 30 വയസ്സ് കൂടുതൽ. 5 വർഷം കഴിഞ്ഞ് അച്ഛന്റെ വയസ്സ് മകന്റെ 3 ഇരട്ടിയാകും. മകന്റെ വയസ്സ് എത്ര?', a: '$s + 35 = 3s + 15 \\implies 2s = 20 \\implies s = \\mathbf{10\\text{ വയസ്സ്}}$.', kind: 'apply' }
    ]
  }
);
