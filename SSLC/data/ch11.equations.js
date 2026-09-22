/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 11: Equations (സമവാക്യങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.11.1.inversion-method',
    sec: '8.11.1',
    kind: 'method',
    tier: 'core',
    title_en: 'The Inversion Method (Working Backwards)',
    title_ml: 'വിപരീതക്രിയാരീതി',
    oneLine_en: 'Solving arithmetic problems by reversing operations in backwards sequence: addition becomes subtraction, multiplication becomes division.',
    oneLine_ml: 'ചെയ്ത ക്രിയകളുടെ വിപരീതക്രിയകൾ പുറകോട്ട് (അവസാനം ചെയ്തത് ആദ്യം എന്ന ക്രമത്തിൽ) ചെയ്ത് അജ്ഞാതസംഖ്യ കണ്ടെത്തുന്നു.',
    statement_en: `<p>In many arithmetic puzzles, an unknown number is subjected to a sequence of operations to reach a given result. We recover the original number by <b>working backwards</b> using inverse operations:</p>
      <ul>
        <li>Inverse of <b>addition ($+$)</b> is <b>subtraction ($-$)</b>.</li>
        <li>Inverse of <b>subtraction ($-$)</b> is <b>addition ($+$)</b>.</li>
        <li>Inverse of <b>multiplication ($\\times$)</b> is <b>division ($\\div$)</b>.</li>
        <li>Inverse of <b>division ($\\div$)</b> is <b>multiplication ($\\times$)</b>.</li>
      </ul>
      <p><b>Rule:</b> Undo the operations in the <b>exact reverse order</b> in which they were applied.</p>
      <p><i>Example:</i> "A number is multiplied by $4$, and $20$ is added to get $200$. What is the number?"</p>
      $$\\text{Result} = 200 \\xrightarrow{\\text{subtract } 20} 180 \\xrightarrow{\\text{divide by } 4} 45$$
      $$\\text{The number is } \\mathbf{45}.$$`,
    statement_ml: `<p>ഒരു അജ്ഞാത സംഖ്യയിൽ ചില ക്രിയകൾ ചെയ്ത് ഒടുവിൽ കിട്ടിയ ഫലം തന്നിട്ടുണ്ടെങ്കിൽ, തുടങ്ങിയ സംഖ്യ കണ്ടെത്താൻ <b>വിപരീതക്രിയകൾ പുറകോട്ട്</b> ചെയ്യുന്നു:</p>
      <ul>
        <li><b>കൂട്ടലിന്റെ ($+$)</b> വിപരീതക്രിയ <b>കുറയ്ക്കലാണ് ($-$)</b>.</li>
        <li><b>കുറയ്ക്കലിന്റെ ($-$)</b> വിപരീതക്രിയ <b>കൂട്ടലാണ് ($+$)</b>.</li>
        <li><b>ഗുണനത്തിന്റെ ($\\times$)</b> വിപരീതക്രിയ <b>ഹരണമാണ് ($\\div$)</b>.</li>
        <li><b>ഹരണത്തിന്റെ ($\\div$)</b> വിപരീതക്രിയ <b>ഗുണനമാണ് ($\\times$)</b>.</li>
      </ul>
      <p><b>നിയമം:</b> അവസാനം ചെയ്ത ക്രിയയിൽ നിന്ന് തുടങ്ങി ആദ്യത്തെ ക്രിയയിലേക്ക് വിപരീത ക്രമത്തിൽ ക്രിയകൾ ചെയ്യുക.</p>
      <p><i>ഉദാഹരണം:</i> "ഒരു സംഖ്യയെ $4$ കൊണ്ട് ഗുണിച്ച് $20$ കൂട്ടിയപ്പോൾ $200$ കിട്ടി. സംഖ്യ ഏതാണ്?"</p>
      $$\\text{ഫലം} = 200 \\xrightarrow{20 \\text{ കുറയ്ക്കുക}} 180 \\xrightarrow{4 \\text{ കൊണ്ട് ഹരിക്കുക}} 45$$
      $$\\text{സംഖ്യ } \\mathbf{45} \\text{ ആണ്.}$$`,
    intuition_en: `<p>Rewinding a video plays every action in reverse order: the last movement happens first in reverse.</p>`,
    intuition_ml: `<p>ഒരു വീഡിയോ പിന്നോട്ട് ഓടിക്കുമ്പോൾ അവസാനം നടന്ന സംഭവങ്ങൾ ആദ്യം തിരിഞ്ഞുനടക്കുന്നതുപോലെയാണ് വിപരീതക്രിയകൾ ചെയ്യുന്നത്.</p>`,
    proof: {
      idea_en: 'Functional composition f(x) = k is inverted by applying inverse functions in reverse sequence.',
      idea_ml: 'ക്രിയകളുടെ ശ്രേണിയെ വിപരീത ഫലനങ്ങൾ വഴി ഒന്നൊന്നായി ഇല്ലാതാക്കുന്നു.',
      why_en: 'If g(f(x)) = x, then applying inverses recovers x.',
      why_ml: 'വിപരീതക്രിയകൾ വഴി മൂലസംഖ്യയെ വേർതിരിച്ചെടുക്കാം.',
      rungs_en: [
        { why_en: 'Define operation sequence on x.', m: 'ax + b = c' },
        { why_en: 'Apply inverse of addition (+b -> -b).', m: 'ax = c - b' },
        { why_en: 'Apply inverse of multiplication (*a -> /a).', m: 'x = \\frac{c - b}{a}' }
      ],
      rungs_ml: [
        { why_ml: 'x-ൽ ചെയ്ത ക്രിയകളുടെ സമവാക്യം.', m: 'ax + b = c' },
        { why_ml: 'കൂട്ടലിന്റെ വിപരീതക്രിയ (+b മാറ്റി -b).', m: 'ax = c - b' },
        { why_ml: 'ഗുണനത്തിന്റെ വിപരീതക്രിയ (*a മാറ്റി /a).', m: 'x = \\frac{c - b}{a}' }
      ]
    },
    needs: ['p.5.3'],
    traps_en: [
      'Remember to undo operations in REVERSE order (undo addition/subtraction before multiplication/division).',
      'If a sum is divided by 3, first multiply by 3, then undo the sum.'
    ],
    traps_ml: [
      'ക്രിയകൾ വിപരീത ക്രമത്തിൽ തന്നെ ചെയ്യണം (ആദ്യം കൂട്ടലും കുറയ്ക്കലും മാറ്റിയ ശേഷം മാത്രം ഗുണനവും ഹരണവും ചെയ്യുക).',
      'തുകയെ 3 കൊണ്ട് ഹരിച്ചിട്ടുണ്ടെങ്കിൽ ആദ്യം 3 കൊണ്ട് ഗുണിച്ച ശേഷം മാത്രമേ കുറയ്ക്കൽ നടത്താവൂ.'
    ],
    cards_en: [
      { q: 'A number multiplied by 5 gives 65. What is the number?', a: '$65 \\div 5 = \\mathbf{13}$.', kind: 'apply' },
      { q: 'When 14 is added to 3 times a number, the result is 50. What is the number?', a: '$(50 - 14) \\div 3 = 36 \\div 3 = \\mathbf{12}$.', kind: 'apply' },
      { q: 'What is the inverse operation of subtracting 9?', a: 'Adding 9.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു സംഖ്യയെ 5 കൊണ്ട് ഗുണിച്ചപ്പോൾ 65 കിട്ടി. സംഖ്യ ഏതാണ്?', a: '$65 \\div 5 = \\mathbf{13}$.', kind: 'apply' },
      { q: 'ഒരു സംഖ്യയുടെ 3 മടങ്ങിനോട് 14 കൂട്ടിയപ്പോൾ 50 കിട്ടി. സംഖ്യ ഏതാണ്?', a: '$(50 - 14) \\div 3 = 36 \\div 3 = \\mathbf{12}$.', kind: 'apply' },
      { q: '9 കുറയ്ക്കുക എന്നതിന്റെ വിപരീതക്രിയ എന്താണ്?', a: '9 കൂട്ടുക.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.11.2.linear-equations-one-variable',
    sec: '8.11.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Linear Equations with Variable on One Side',
    title_ml: 'ഒരു വശത്ത് ചരമുള്ള സമവാക്യങ്ങൾ',
    oneLine_en: 'An equation is a statement of equality; adding, subtracting, multiplying, or dividing both sides by the same non-zero quantity preserves balance: ax + b = c implies x = $(c - b)/a$.',
    oneLine_ml: 'തുല്യത കാണിക്കുന്ന ഗണിതവാക്യമാണ് സമവാക്യം; ഇരുവശത്തും ഒരേ ക്രിയ ചെയ്യുന്നത് തുല്യത നിലനിർത്തുന്നു: $ax + b = c$ ആയാൽ $x = \\frac{c - b}{a}$.',
    statement_en: `<p>An <b>equation</b> is a statement that two algebraic expressions are equal:</p>
      $$ax + b = c$$
      <p>where $x$ is an unknown number (<b>variable</b> or ചരം), and $a, b, c$ are known constants.</p>
      <p><b>Rules of Balance (Axioms of Equality):</b></p>
      <ul>
        <li>The same number may be added to or subtracted from both sides without changing equality.</li>
        <li>Both sides may be multiplied or divided by the same non-zero number.</li>
      </ul>
      <p><b>Transposition Rule:</b> Moving a term across the equality sign reverses its sign: $+b$ becomes $-b$, and multiplication by $a$ becomes division by $a$.</p>`,
    statement_ml: `<p>രണ്ട് ബീജഗണിത വാക്യങ്ങൾ തുല്യമാണെന്ന് കാണിക്കുന്ന പ്രസ്താവനയാണ് <b>സമവാക്യം</b>:</p>
      $$ax + b = c$$
      <p>ഇവിടെ $x$ എന്നത് അജ്ഞാത സംഖ്യയാണ് (<b>ചരം</b>), $a, b, c$ എന്നിവ സ്ഥിരസംഖ്യകളും.</p>
      <p><b>തുല്യതയുടെ നിയമങ്ങൾ:</b></p>
      <ul>
        <li>സമവാക്യത്തിന്റെ ഇരുവശത്തും ഒരേ സംഖ്യ കൂട്ടുകയോ കുറയ്ക്കുകയോ ചെയ്താൽ തുല്യത മാറില്ല.</li>
        <li>ഇരുവശത്തെയും പൂജ്യമല്ലാത്ത ഒരേ സംഖ്യ കൊണ്ട് ഗുണിക്കുകയോ ഹരിക്കുകയോ ചെയ്താലും തുല്യത നിലനിൽക്കും.</li>
      </ul>
      <p><b>പക്ഷാന്തര നിയമം:</b> സമചിഹ്നത്തിന് അപ്പുറത്തേക്ക് ഒരു പദം മാറ്റുമ്പോൾ അതിന്റെ ചിഹ്നം വിപരീതമായി മാറും: $+b$ എന്നത് $-b$ ആയും, ഗുണം $a$ എന്നത് ഹരണം $a$ ആയും മാറും.</p>`,
    intuition_en: `<p>A balanced two-pan weighing scale remains in equilibrium as long as you add or remove identical weights from both pans simultaneously.</p>`,
    intuition_ml: `<p>തുലാസിന്റെ രണ്ട് തട്ടുകളിലും ഒരേ ഭാരം വെക്കുകയോ ഒരേ ഭാരം മാറ്റുകയോ ചെയ്താൽ തുലാസിന്റെ തുലനാവസ്ഥ നിലനിൽക്കും.</p>`,
    proof: {
      idea_en: 'Algebraic balance maintains identity under identical field operations on both sides.',
      idea_ml: 'ഇരുവശത്തും ഒരേ ക്രിയ ചെയ്യുന്നത് വഴി ചരത്തെ ഒറ്റപ്പെടുത്തി മൂല്യം കാണുന്നു.',
      why_en: 'Equivalence is preserved at every step.',
      why_ml: 'ഓരോ ഘട്ടത്തിലും തുല്യത സംരക്ഷിക്കപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'Given linear equation.', m: 'ax + b = c' },
        { why_en: 'Subtract b from both sides.', m: 'ax + b - b = c - b \\implies ax = c - b' },
        { why_en: 'Divide both sides by a (a != 0).', m: 'x = \\frac{c - b}{a}' }
      ],
      rungs_ml: [
        { why_ml: 'തന്നിരിക്കുന്ന സമവാക്യം.', m: 'ax + b = c' },
        { why_ml: 'ഇരുവശത്തുനിന്നും b കുറയ്ക്കുക.', m: 'ax = c - b' },
        { why_ml: 'ഇരുവശത്തെയും a കൊണ്ട് ഹരിക്കുക.', m: 'x = \\frac{c - b}{a}' }
      ]
    },
    needs: ['m8.11.1.inversion-method'],
    traps_en: [
      'When dividing, divide ALL terms on the other side, not just one term.',
      'Remember that moving +b across becomes -b, and -b becomes +b.'
    ],
    traps_ml: [
      'ഹരിക്കുമ്പോൾ മറുഭാഗത്തുള്ള മുഴുവൻ തുകയെയുമാണ് ഹരിക്കേണ്ടത്.',
      '+b മറുഭാഗത്തേക്ക് പോകുമ്പോൾ -b ആയും, -b എന്നത് +b ആയും മാറും.'
    ],
    cards_en: [
      { q: 'Solve: 3x + 7 = 28', a: '$3x = 28 - 7 = 21 \\implies x = \\frac{21}{3} = \\mathbf{7}$.', kind: 'apply' },
      { q: 'Solve: 5x - 8 = 32', a: '$5x = 32 + 8 = 40 \\implies x = \\frac{40}{5} = \\mathbf{8}$.', kind: 'apply' },
      { q: 'State the rule for transposing a term across the equals sign.', a: 'The operation is reversed: addition becomes subtraction, subtraction becomes addition.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'നിർദ്ധാരണം ചെയ്യുക: 3x + 7 = 28', a: '$3x = 28 - 7 = 21 \\implies x = \\frac{21}{3} = \\mathbf{7}$.', kind: 'apply' },
      { q: 'നിർദ്ധാരണം ചെയ്യുക: 5x - 8 = 32', a: '$5x = 32 + 8 = 40 \\implies x = \\frac{40}{5} = \\mathbf{8}$.', kind: 'apply' },
      { q: 'സമചിഹ്നത്തിന് അപ്പുറത്തേക്ക് ഒരു പദം മാറ്റുമ്പോഴുള്ള നിയമം എന്താണ്?', a: 'ക്രിയ വിപരീതമാകും: കൂട്ടൽ കുറയ്ക്കലാകും, കുറയ്ക്കൽ കൂട്ടലാകും.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.11.3.variable-on-both-sides',
    sec: '8.11.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Equations with Variables on Both Sides',
    title_ml: 'ഇരുവശത്തും ചരമുള്ള സമവാക്യങ്ങൾ',
    oneLine_en: 'Collect all variable terms on one side and all constant terms on the other side using transposition: ax + b = cx + d implies (a - c)x = d - b.',
    oneLine_ml: 'ചരമുള്ള പദങ്ങളെല്ലാം ഒരു വശത്തേക്കും, സംഖ്യകളെല്ലാം മറുവശത്തേക്കും മാറ്റി സമവാക്യം ലളിതമാക്കുന്നു: ax + b = cx + d ആയാൽ (a - c)x = d - b.',
    statement_en: `<p>Often, the unknown variable $x$ appears on both the left and right sides of an equation:</p>
      $$ax + b = cx + d$$
      <p><b>Step-by-Step Solving Strategy:</b></p>
      <ol>
        <li><b>Collect variable terms:</b> Subtract $cx$ from both sides to move all terms containing $x$ to the left side:
          $$(a - c)x + b = d$$
        </li>
        <li><b>Collect constant numbers:</b> Subtract $b$ from both sides to move all plain numbers to the right side:
          $$(a - c)x = d - b$$
        </li>
        <li><b>Isolate $x$:</b> Divide by the coefficient $(a - c)$:
          $$x = \\frac{d - b}{a - c}$$
        </li>
      </ol>
      <p><i>Example:</i> Solve $5x + 3 = 2x + 18$</p>
      $$5x - 2x = 18 - 3 \\implies 3x = 15 \\implies x = 5$$`,
    statement_ml: `<p>പലപ്പോഴും സമവാക്യത്തിന്റെ ഇരുവശങ്ങളിലും അജ്ഞാത സംഖ്യയായ $x$ വരാറുണ്ട്:</p>
      $$ax + b = cx + d$$
      <p><b>പരിഹരിക്കാനുള്ള ഘട്ടങ്ങൾ:</b></p>
      <ol>
        <li><b>ചരമുള്ള പദങ്ങൾ ഒരു വശത്താക്കുക:</b> ഇരുവശത്തുനിന്നും $cx$ കുറച്ച് $x$ ഉള്ള പദങ്ങളെല്ലാം ഇടതുവശത്തേക്ക് കൊണ്ടുവരിക:
          $$(a - c)x + b = d$$
        </li>
        <li><b>സംഖ്യകളെല്ലാം മറുവശത്താക്കുക:</b> $b$-യെ വലതുവശത്തേക്ക് മാറ്റുക:
          $$(a - c)x = d - b$$
        </li>
        <li><b>$x$-ന്റെ വില കാണുക:</b> $(a - c)$ കൊണ്ട് ഹരിക്കുക:
          $$x = \\frac{d - b}{a - c}$$
        </li>
      </ol>
      <p><i>ഉദാഹരണം:</i> $5x + 3 = 2x + 18$ നിർദ്ധാരണം ചെയ്യുക</p>
      $$5x - 2x = 18 - 3 \\implies 3x = 15 \\implies x = 5$$`,
    intuition_en: `<p>If both sides of the balance have identical boxes of unknown weights, removing the smaller number of boxes from both pans simplifies the puzzle immediately.</p>`,
    intuition_ml: `<p>തുലാസിന്റെ ഇരുവശങ്ങളിലും അജ്ഞാത ഭാരമുള്ള പെട്ടികളുണ്ടെങ്കിൽ, കുറഞ്ഞ എണ്ണം പെട്ടികൾ ഇരുവശത്തുനിന്നും ഒരേപോലെ എടുത്തുമാറ്റിയാൽ കണക്കുകൂട്ടൽ എളുപ്പമാകും.</p>`,
    proof: {
      idea_en: 'Linear combination of terms maps ax + b = cx + d to standard form (a - c)x = (d - b).',
      idea_ml: 'സമാന പദങ്ങൾ കൂട്ടിച്ചേർത്ത് (a - c)x = (d - b) എന്ന രൂപത്തിലേക്ക് മാറ്റുന്നു.',
      why_en: 'Subtracting cx and b maintains equality throughout.',
      why_ml: 'ഇരുവശത്തുനിന്നും cx-ഉം b-യും കുറയ്ക്കുന്നത് തുല്യത നിലനിർത്തുന്നു.',
      rungs_en: [
        { why_en: 'Given equation with variable on both sides.', m: 'ax + b = cx + d' },
        { why_en: 'Subtract cx from both sides.', m: '(a - c)x + b = d' },
        { why_en: 'Subtract b from both sides.', m: '(a - c)x = d - b' },
        { why_en: 'Divide by coefficient of x.', m: 'x = \\frac{d - b}{a - c}' }
      ],
      rungs_ml: [
        { why_ml: 'ഇരുവശത്തും ചരമുള്ള സമവാക്യം.', m: 'ax + b = cx + d' },
        { why_ml: 'ഇരുവശത്തുനിന്നും cx കുറയ്ക്കുക.', m: '(a - c)x + b = d' },
        { why_ml: 'ഇരുവശത്തുനിന്നും b കുറയ്ക്കുക.', m: '(a - c)x = d - b' },
        { why_ml: 'x-ന്റെ ഗുണകം കൊണ്ട് ഹരിക്കുക.', m: 'x = \\frac{d - b}{a - c}' }
      ]
    },
    needs: ['m8.11.2.linear-equations-one-variable'],
    traps_en: [
      'Watch signs when transposing: a negative term like -3x becomes +3x when moved.',
      'Check your solution by substituting the found value of x back into both sides of the original equation.'
    ],
    traps_ml: [
      'പക്ഷാന്തരം ചെയ്യുമ്പോൾ ചിഹ്നങ്ങൾ തെറ്റരുത്: -3x മറുവശത്തേക്ക് പോകുമ്പോൾ +3x ആകും.',
      'കിട്ടിയ ഉത്തരം സമവാക്യത്തിൽ തിരികെ നൽകി ഇരുവശങ്ങളും തുല്യമാണോ എന്ന് പരിശോധിക്കുക.'
    ],
    cards_en: [
      { q: 'Solve: 7x - 5 = 4x + 10', a: '$7x - 4x = 10 + 5 \\implies 3x = 15 \\implies x = \\mathbf{5}$.', kind: 'apply' },
      { q: 'Solve: 2(x + 3) = x + 11', a: '$2x + 6 = x + 11 \\implies 2x - x = 11 - 6 \\implies x = \\mathbf{5}$.', kind: 'apply' },
      { q: 'What is the first step in solving ax + b = cx + d?', a: 'Transpose all variable terms to one side and constant terms to the other side.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'നിർദ്ധാരണം ചെയ്യുക: 7x - 5 = 4x + 10', a: '$7x - 4x = 10 + 5 \\implies 3x = 15 \\implies x = \\mathbf{5}$.', kind: 'apply' },
      { q: 'നിർദ്ധാരണം ചെയ്യുക: 2(x + 3) = x + 11', a: '$2x + 6 = x + 11 \\implies 2x - x = 11 - 6 \\implies x = \\mathbf{5}$.', kind: 'apply' },
      { q: 'ax + b = cx + d പരിഹരിക്കാനുള്ള ആദ്യപടി എന്താണ്?', a: 'ചരമുള്ള പദങ്ങളെ ഒരു വശത്തേക്കും സംഖ്യകളെ മറുവശത്തേക്കും മാറ്റുക.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.11.4.applied-equation-problems',
    sec: '8.11.4',
    kind: 'method',
    tier: 'core',
    title_en: 'Word Problems & Practical Applications of Equations',
    title_ml: 'നിത്യജീവിത, ജ്യാമിതീയ പ്രശ്നപരിഹാരം',
    oneLine_en: 'Translating verbal descriptions into algebraic equations involving perimeters, ages, currency denominations, and fraction parts.',
    oneLine_ml: 'ചുറ്റളവ്, പ്രായം, കറൻസി നോട്ടുകൾ, ഭിന്നസംഖ്യകൾ എന്നിവ ഉൾപ്പെടുന്ന വാക്കുകളിലുള്ള പ്രശ്നങ്ങളെ ബീജഗണിത സമവാക്യങ്ങളാക്കി മാറ്റി പരിഹരിക്കുന്നു.',
    statement_en: `<p>Real-world mathematical challenges can be solved systematically by setting up an equation:</p>
      <ol>
        <li><b>Assign a variable:</b> Let the unknown quantity be $x$.</li>
        <li><b>Express related quantities in terms of $x$:</b> For example, "length is $1\\text{ m}$ more than twice the breadth" $\\implies \\text{breadth} = x, \\text{ length} = 2x + 1$.</li>
        <li><b>Formulate the equation:</b> Use the given condition (e.g., Perimeter $= 2(l + b) = 80$).
          $$2[(2x + 1) + x] = 80 \\implies 2(3x + 1) = 80 \\implies 6x + 2 = 80$$
        </li>
        <li><b>Solve and answer:</b> $6x = 78 \\implies x = 13\\text{ m}$. Thus, breadth $= 13\\text{ m}$, length $= 27\\text{ m}$.</li>
      </ol>`,
    statement_ml: `<p>നിത്യജീവിതത്തിലെ പല പ്രശ്നങ്ങളും സമവാക്യങ്ങൾ രൂപീകരിച്ച് എളുപ്പത്തിൽ പരിഹരിക്കാം:</p>
      <ol>
        <li><b>ചരം നിശ്ചയിക്കുക:</b> കണ്ടെത്തേണ്ട അജ്ഞാത അളവിനെ $x$ എന്ന് എടുക്കുക.</li>
        <li><b>മറ്റ് അളവുകളെ $x$-ൽ എഴുതുക:</b> ഉദാഹരണത്തിന്, "നീളം വീതിയുടെ രണ്ടു മടങ്ങിനേക്കാൾ ഒരു മീറ്റർ കൂടുതൽ" $\\implies \\text{വീതി} = x, \\text{ നീളം} = 2x + 1$.</li>
        <li><b>സമവാക്യം രൂപീകരിക്കുക:</b> നൽകിയിരിക്കുന്ന വ്യവസ്ഥ ഉപയോഗിക്കുക (ചുറ്റളവ് $= 2(l + b) = 80$).
          $$2[(2x + 1) + x] = 80 \\implies 2(3x + 1) = 80 \\implies 6x + 2 = 80$$
        </li>
        <li><b>പരിഹാരം കാണുക:</b> $6x = 78 \\implies x = 13\\text{ മീറ്റർ}$. അതിനാൽ വീതി $= 13\\text{ മീറ്റർ}$, നീളം $= 27\\text{ മീറ്റർ}$.</li>
      </ol>`,
    intuition_en: `<p>An equation is a code translator. It translates English sentences into concise mathematical grammar that algebra can solve effortlessly.</p>`,
    intuition_ml: `<p>ഭാഷയിലെ വിവരണങ്ങളെ ഗണിതത്തിന്റെ കൃത്യമായ സമവാക്യങ്ങളാക്കി മാറ്റിയാൽ സമവാക്യ നിർദ്ധാരണ നിയമങ്ങൾ ഉപയോഗിച്ച് ഉത്തരം പെട്ടെന്ന് കണ്ടെത്താം.</p>`,
    proof: {
      idea_en: 'Mathematical modeling maps natural constraints to polynomial systems.',
      idea_ml: 'വ്യവസ്ഥകളെ സമവാക്യങ്ങളാക്കി മാറ്റി നിർദ്ധാരണം ചെയ്യുന്നു.',
      why_en: 'Consistent constraints yield a unique solution.',
      why_ml: 'നൽകിയ നിബന്ധനകൾ ഒരൊറ്റ ശരിയായ ഉത്തരത്തിലേക്ക് നയിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Define relations: b = x, l = 2x + 1.', m: 'l = 2x + 1, b = x' },
        { why_en: 'Substitute into perimeter formula 2(l + b) = P.', m: '2[(2x + 1) + x] = 80' },
        { why_en: 'Simplify and solve for x.', m: '6x + 2 = 80 \\implies x = 13' }
      ],
      rungs_ml: [
        { why_ml: 'അളവുകൾ രേഖപ്പെടുത്തുക: വീതി = x, നീളം = 2x + 1.', m: 'l = 2x + 1, b = x' },
        { why_ml: 'ചുറ്റളവ് സൂത്രവാക്യത്തിൽ നൽകുക.', m: '2(3x + 1) = 80' },
        { why_ml: 'നിർദ്ധാരണം ചെയ്ത് x കാണുക.', m: '6x + 2 = 80 \\implies x = 13' }
      ]
    },
    needs: ['m8.11.3.variable-on-both-sides'],
    traps_en: [
      'Always state what the final answer represents with proper units (e.g. cm, rupees, years).',
      'If x is breadth, remember to compute length (2x + 1) if asked for length!'
    ],
    traps_ml: [
      'ഉത്തരത്തിൽ കൃത്യമായ യൂണിറ്റുകൾ (മീറ്റർ, രൂപ, വയസ്സ്) എഴുതാൻ മറക്കരുത്.',
      'x എന്നത് വീതിയാണെങ്കിൽ, ചോദ്യത്തിൽ നീളമാണ് ചോദിച്ചതെങ്കിൽ (2x + 1) കൂടി കണക്കാക്കണം!'
    ],
    cards_en: [
      { q: 'The perimeter of a rectangle is 60 cm. Its length is 6 cm more than its breadth. What is its breadth?', a: '$2(x + x + 6) = 60 \\implies 4x + 12 = 60 \\implies 4x = 48 \\implies x = \\mathbf{12\\text{ cm}}$.', kind: 'apply' },
      { q: 'A father is 3 times as old as his son. In 12 years, he will be twice as old. What is the son’s current age?', a: '$3x + 12 = 2(x + 12) \\implies 3x + 12 = 2x + 24 \\implies x = \\mathbf{12\\text{ years}}$.', kind: 'apply' },
      { q: 'What is the key first step in solving a word problem with equations?', a: 'Clearly define the unknown quantity as a variable (such as x).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ചതുരത്തിന്റെ ചുറ്റളവ് 60 cm ആണ്. നീളം വീതിയേക്കാൾ 6 cm കൂടുതലായാൽ വീതി എത്ര?', a: '$2(x + x + 6) = 60 \\implies 4x + 12 = 60 \\implies 4x = 48 \\implies x = \\mathbf{12\\text{ cm}}$.', kind: 'apply' },
      { q: 'അച്ഛന് മകന്റെ 3 മടങ്ങ് പ്രായമുണ്ട്. 12 വർഷം കഴിഞ്ഞാൽ അച്ഛന്റെ പ്രായം മകന്റെ 2 മടങ്ങാകും. മകന്റെ ഇപ്പോഴത്തെ പ്രായം എത്ര?', a: '$3x + 12 = 2(x + 12) \\implies 3x + 12 = 2x + 24 \\implies x = \\mathbf{12\\text{ വയസ്സ്}}$.', kind: 'apply' },
      { q: 'വാക്കുകളിലുള്ള കണക്കുകൾ പരിഹരിക്കാനുള്ള ആദ്യ പടി എന്താണ്?', a: 'കണ്ടെത്തേണ്ട അളവിനെ ഒരു ചരമായി (x) നിശ്ചയിക്കുക.', kind: 'recall' }
    ]
  }
);
