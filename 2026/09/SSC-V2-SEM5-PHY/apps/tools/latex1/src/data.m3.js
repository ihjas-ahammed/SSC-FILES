/* ═══════════════════ MODULE III — Mathematics (Text 1, Tutorial VIII) ═══════════════════
   Written from the book cuts in ASD-STE100 style.
   Where the book has a misprint, the text gives the correct command and says so. */
const AM='\\usepackage{amsmath}';
const AMS='\\usepackage{amsmath,amssymb}';
/* symbol names → Unicode for the prose tables (prose is HTML, not TeX) */
const SYMU={alpha:'α',beta:'β',gamma:'γ',delta:'δ',epsilon:'ϵ',varepsilon:'ε',zeta:'ζ',eta:'η',theta:'θ',vartheta:'ϑ',iota:'ι',kappa:'κ',lambda:'λ',mu:'μ',nu:'ν',xi:'ξ',pi:'π',rho:'ρ',sigma:'σ',tau:'τ',upsilon:'υ',phi:'ϕ',varphi:'φ',chi:'χ',psi:'ψ',omega:'ω',
 Gamma:'Γ',Delta:'Δ',Theta:'Θ',Lambda:'Λ',Xi:'Ξ',Pi:'Π',Sigma:'Σ',Upsilon:'Υ',Phi:'Φ',Psi:'Ψ',Omega:'Ω',
 pm:'±',mp:'∓',times:'×',div:'÷',ast:'∗',circ:'∘',bullet:'•',cdot:'·',cap:'∩',cup:'∪',vee:'∨',wedge:'∧',oplus:'⊕',otimes:'⊗',
 leq:'≤',geq:'≥',equiv:'≡',sim:'∼',simeq:'≃',approx:'≈',cong:'≅',neq:'≠',subset:'⊂',subseteq:'⊆',in:'∈',ni:'∋',propto:'∝',perp:'⊥',parallel:'∥',
 leftarrow:'←',rightarrow:'→',Rightarrow:'⇒',Leftrightarrow:'⇔',mapsto:'↦',longrightarrow:'⟶',uparrow:'↑',downarrow:'↓',
 ldots:'…',cdots:'⋯',vdots:'⋮',ddots:'⋱',aleph:'ℵ',hbar:'ℏ',ell:'ℓ',emptyset:'∅',nabla:'∇',partial:'∂',forall:'∀',exists:'∃',infty:'∞',neg:'¬',
 sum:'∑',prod:'∏',int:'∫',oint:'∮',bigcup:'⋃',bigcap:'⋂',
 hat:'â',acute:'á',bar:'ā',dot:'ȧ',breve:'ă',check:'ǎ',grave:'à',vec:'a⃗',ddot:'ä',tilde:'ã'};
const U=s=>s.replace(/\$\\([A-Za-z]+)\$/g,(m,c)=>SYMU[c]||m);


/* ───────────── Unit 8 · Basic mathematical equations (VIII.1–VIII.2) ───────────── */
STATIONS.push({id:'m3-basic',title:'Basic mathematical equations',short:'8 · Basic equations',est:'~45 min',body:H`
${gist('Put in-text mathematics between dollar signs. Put displayed mathematics between \\[ and \\]. Use ^ for a superscript and _ for a subscript. Group more than one character with braces.')}

${tp('In-text and displayed mathematics')}
<p>Donald Knuth made TeX mainly to typeset mathematics. LaTeX has all the mathematics features of TeX. Packages such as <code>amsmath</code> improve them.</p>
<p>A mathematical expression in running text is <b>in-text mathematics</b>. Put it between dollar signs.</p>
${ex(L`The equation representing a straight line in the Cartesian plane
is of the form $ax+by+c=0$, where $a$, $b$, $c$ are constants.`,{title:'in-text mathematics'})}
<ul>
  <li>TeX sets the text between the dollars in math italic.</li>
  <li>TeX has its own spacing rules in math mode. It puts a space on each side of <code>+</code> and <code>=</code>. The result is the same if you type <code>$ax + by + c = 0$</code>.</li>
  <li>TeX ignores the spaces in math mode. In <code>$a, b, c$</code>, the output has no space after the commas. This saves no dollar signs, so use <code>$a$, $b$, $c$</code> when the commas belong to the text.</li>
</ul>
<p>LaTeX has two other ways to start math mode: <code>\( ... \)</code> and <code>\begin{math} ... \end{math}</code>. The three ways give the same output.</p>
<p><b>Displayed mathematics</b> is on a line of its own. Use <code>$$ ... $$</code>, <code>\[ ... \]</code> or <code>\begin{displaymath} ... \end{displaymath}</code>.</p>
${ex(L`The equation representing a straight line in the Cartesian plane
is of the form
\[
ax+by+c=0
\]
where $a$, $b$, $c$ are constants.`,{title:'displayed mathematics'})}
${match('Math mode and delimiters',[
 [L`<code>$ ... $</code>`,'in-text mathematics'],[L`<code>\( ... \)</code>`,'in-text mathematics'],[L`<code>\[ ... \]</code>`,'displayed mathematics'],[L`<code>$$ ... $$</code>`,'displayed mathematics (the TeX way)']],{left:'Delimiter',right:'Use'})}

${tp('Superscripts and subscripts')}
<p>Use <code>^</code> for a superscript (an exponent). Use <code>_</code> for a subscript.</p>
${ex(L`In the seventeenth century, Fermat conjectured that if $n>2$, then there are no integers $x$, $y$, $z$ for which
\[
x^n+y^n=z^n.
\]
This was proved in 1994 by Andrew Wiles.`,{title:'superscripts'})}
<p>If the superscript has more than one character, put braces around it.</p>
${ex(L`It is easily seen that $(x^m)^n=x^{mn}$.

A wrong input: $x^mn$ gives $x^m$ followed by $n$.`,{title:'group the characters'})}
<p>A superscript can have a superscript. Group them correctly.</p>
${ex(L`Numbers of the form $2^{2^n}+1$, where $n$ is a natural number, are called Fermat numbers.`,{title:'a superscript of a superscript'})}
<p>Subscripts follow the same rules.</p>
${ex(L`The sequence $(x_n)$ defined by
\[
x_1=1,\quad x_2=1,\quad x_n=x_{n-1}+x_{n-2}\;\;(n>2)
\]
is called the Fibonacci sequence.`,{title:'subscripts and spacing'})}
<p><code>\quad</code> adds a wide space. <code>\;</code> adds a thick space. <code>\,</code> adds a thin space.</p>
<p>A symbol can have a superscript and a subscript together. The order and the braces change the result.</p>
${ex(L`If the sequence $(x_n)$ converges to $a$, then the sequence $(x_n^2)$ converges to $a^2$.
\[
x_m^n\qquad x^n_m\qquad {x_m}^n\qquad {x^n}_m
\]`,{title:'both together'})}
${think('Which input gives x with the exponent mn?',L`x^mn   x^{mn}   x^m^n`,['x^mn','x^{mn}','x^m^n','They all give it'],1,'Put the two characters in braces: x^{mn}.')}
${fill('Groups in math',L`To print $x^{ab}$ type x[[^{ab}]]. To print $x_{n-1}$ type x[[_{n-1}]].`,{code:true,strict:true})}

${tp('Roots')}
<p><code>\sqrt{2}</code> makes a square root. The optional argument makes other roots: <code>\sqrt[4]{5}</code>. The horizontal line (the vinculum) grows to fit the text under it. You can nest roots.</p>
${ex(L`Which is greater, $\sqrt[4]{5}$ or $\sqrt[5]{4}$?  Also $\sqrt{x+y}$.
\[
2\sqrt{2}\,,\quad 2^2\sqrt{2-\sqrt{2}}\,,\quad 2^3\sqrt{2-\sqrt{2+\sqrt{2}}}\,,\;\ldots
\]
converge to $\pi$.`,{title:'roots'})}
<p><code>\ldots</code> makes three dots (an ellipsis). A thin space <code>\,</code> improves the look of an expression. <code>\pi</code> makes the Greek letter pi. The tables at the end of the tutorial list the available symbols.</p>

${tp('Mathematical symbols and classes')}
<p>LaTeX puts symbols in classes, for example "Binary Operations", "Relations" and "Miscellaneous". The class decides the space around the symbol. TeX puts space around a binary operator such as <code>+</code> or <code>\circ</code>.</p>
${ex(L`For real numbers $x$ and $y$, define an operation $\circ$ by
\[
x\circ y = x+y-xy
\]
This operation is associative.`,{title:'a binary operator'})}
<p>Some symbols are not in LaTeX itself. They need the package <code>latexsym</code> or <code>amssymb</code>. The symbol <code>\Box</code> is "Miscellaneous", so TeX puts no space around it. To make TeX treat a symbol as a binary operator, use <code>\mathbin</code>. To make it a relation, use <code>\mathrel</code>.</p>
${ex(L`\documentclass{article}
\usepackage{amsmath,amssymb}
\begin{document}
For real numbers $x$ and $y$, define an operation $\Box$ by
\[
x\Box y = x^2+y^2 \qquad\text{and}\qquad x\mathbin\Box y=x^2+y^2
\]
Define the relation $\rho$ on the set of real numbers by $x\mathrel\rho y$ iff $x-y$ is a rational number.
\end{document}`,{title:'\\mathbin and \\mathrel',run:true})}
${trap(H`<p>Without <code>\mathrel</code>, the expression <code>$x \rho y$</code> has no space around the relation symbol. The expression <code>$x\mathrel\rho y$</code> has the space.</p>`)}

${tp('Custom commands')}
<p>You can make your own commands from existing commands. Use <code>\newcommand</code>. Put the definitions in the preamble. Then you can use them anywhere, and a change is easy.</p>
${ex(L`\documentclass{article}
\newcommand{\vect}{(x_1,x_2,\dots,x_n)}
\begin{document}
We often write $x$ to denote the vector $\vect$.
\end{document}`,{title:'a command without argument',run:true})}
<p>A command can have arguments. <code>[1]</code> says that the command has one argument. LaTeX replaces <code>#1</code> with the argument. The maximum is nine arguments.</p>
${ex(L`\documentclass{article}
\newcommand{\vect}[1]{(#1_1,#1_2,\dots,#1_n)}
\begin{document}
$\vect{x}$ and $\vect{a}$.
\end{document}`,{title:'one argument',run:true})}
${ex(L`\documentclass{article}
\newcommand{\vect}[2]{(#1_1,#1_2,\dots,#1_#2)}
\begin{document}
$\vect{x}{n}$ and $\vect{a}{p}$.
\end{document}`,{title:'two arguments',run:true})}
${parsons('Define and use a command',[L`\newcommand{\vect}[1]{(#1_1,\dots,#1_n)}`,L`\begin{document}`,L`$\vect{y}$`,L`\end{document}`],{extra:[L`\vect{y}`]})}
${omr('Basic equations',[
 {q:'Which delimiters make in-text mathematics?',o:['$ ... $','\\[ ... \\]','$$ ... $$','\\begin{center}'],a:0,why:'Dollar signs make in-text mathematics.'},
 {q:'Which input gives x with the exponent mn?',o:['x^mn','x^{mn}','x_{mn}','x^m^n'],a:1,why:'Put more than one character in braces.'},
 {q:'Which command gives the fourth root of 5?',o:['\\sqrt{4}{5}','\\sqrt[4]{5}','\\sqrt(4)5','\\root{4}{5}'],a:1,why:'The optional argument in square brackets gives the index.'},
 {q:'What does a space in $a, b, c$ do?',o:['It adds a space','TeX ignores it in math mode','It is an error','It adds a thick space'],a:1,why:'TeX has its own spacing rules in math mode.'},
 {q:'Which command makes a thin space in math?',o:['\\,','\\;','\\quad','\\qquad'],a:0,why:'\\, is a thin space. \\; is a thick space.'},
 {q:'Which command makes TeX put space around a symbol as a relation?',o:['\\mathbin','\\mathrel','\\mathop','\\mathord'],a:1,why:'\\mathrel treats the symbol as a relation.'},
 {q:'What does [2] do in \\newcommand{\\f}[2]{...}?',o:['Sets two options','The command has two arguments','Repeats the text','Sets the font size'],a:1,why:'The number in brackets is the number of arguments.'}
])}
${must(H`<ol>
<li>Math mode: <code>$…$</code>, <code>\(…\)</code>, <code>\begin{math}</code>; display: <code>$$…$$</code>, <code>\[…\]</code>, <code>displaymath</code>.</li>
<li><code>^</code> and <code>_</code>. Braces for more than one character.</li>
<li><code>\sqrt[n]{…}</code>. Spaces: <code>\,</code> <code>\;</code> <code>\quad</code>.</li>
<li>Symbol classes. <code>\mathbin</code>, <code>\mathrel</code>.</li>
<li><code>\newcommand{\name}[n]{…#1…}</code> in the preamble.</li>
</ol>`)}
`});

/* ───────────── Unit 9 · Groups of equations and numbering (VIII.3) ───────────── */
STATIONS.push({id:'m3-groups',title:'Groups of equations and numbering',short:'9 · Equation groups',est:'~45 min',body:H`
${gist('Load amsmath. Use equation for one equation, multline and split for a long one, gather and align for a group. The star removes the numbers.')}
<p class="mini">For this unit, all examples load the package <code>amsmath</code>. Without it, LaTeX does not know these environments.</p>

${tp('Single equations')}
<p>The package <code>amsmath</code> gives the environment <code>equation*</code>. The star means that LaTeX prints no number. The environment <code>equation</code> without the star prints a number. This rule holds for all the environments in this unit.</p>
${ex(L`The equation representing a straight line in the Cartesian plane is of the form
\begin{equation*}
ax+by+c=0
\end{equation*}
where $a$, $b$, $c$ are constants.

The same equation with a number:
\begin{equation}
ax+by+c=0
\end{equation}`,{title:'equation* and equation',pre:AM})}
<p>Use <code>\text{…}</code> to put ordinary text in an equation. Use dollar signs inside <code>\text</code> for mathematics.</p>
${ex(L`Thus for all real numbers $x$ we have
\begin{equation*}
x\le|x|\quad\text{and}\quad x\ge|x|
\end{equation*}
and so
\begin{equation*}
x\le|x|\quad\text{for all $x$ in $R$}.
\end{equation*}`,{title:'\\text in an equation',pre:AM})}
<h5>A long equation: multline and split</h5>
<p>A long equation can be too long for one line. The environment <code>multline*</code> breaks it. The first line is flush left. The last line is flush right. The lines between are centered. The spelling is <code>multline</code>, not "multiline".</p>
${ex(L`\begin{multline*}
(a+b+c+d+e)^2=a^2+b^2+c^2+d^2+e^2\\
+2ab+2ac+2ad+2ae+2bc+2bd+2be+2cd+2ce+2de
\end{multline*}`,{title:'multline*',pre:AM})}
<p>For more than two lines, <code>multline</code> gives poor results. A better environment is <code>split</code>. It aligns the lines at the character <code>&amp;</code>, as in a table. It cannot be used alone. Put it inside <code>equation</code> or another equation environment.</p>
${ex(L`\begin{equation*}
\begin{split}
(a+b+c+d+e+f)^2 & = a^2+b^2+c^2+d^2+e^2+f^2\\
&\quad +2ab+2ac+2ad+2ae+2af\\
&\quad +2bc+2bd+2be+2bf\\
&\quad +2cd+2ce+2cf\\
&\quad +2de+2df\\
&\quad +2ef
\end{split}
\end{equation*}`,{title:'split',pre:AM})}
<p><code>split</code> also helps with an equation that has many equalities.</p>
${ex(L`\begin{equation*}
\begin{split}
(a+b)^2 & = (a+b)(a+b)\\
& = a^2+ab+ba+b^2\\
& = a^2+2ab+b^2
\end{split}
\end{equation*}`,{title:'split with many equalities',pre:AM})}
${match('Environment and layout',[
 ['multline','first line left, last line right, others centered'],['split','lines aligned at &, inside another environment'],['gather','a group, each line centered'],['align','a group, aligned at &']],{left:'Environment',right:'Layout'})}

${tp('Groups of equations')}
<p>Use <code>gather*</code> for a group of displayed equations. Each line is centered.</p>
${ex(L`\begin{gather*}
(a,b)+(c,d)=(a+c,b+d)\\
(a,b)(c,d)=(ac-bd,ad+bc)
\end{gather*}`,{title:'gather*',pre:AM})}
<p>When the equations are one unit, align them with <code>align*</code>. Put <code>&amp;</code> before the character to align on.</p>
${ex(L`Thus $x$, $y$ and $z$ satisfy the equations
\begin{align*}
x+y-z & = 1\\
x-y+z & = 1
\end{align*}`,{title:'align*',pre:AM})}
<p>Use <code>\intertext{…}</code> to put a short piece of text between the equations. The alignment stays.</p>
${ex(L`Thus $x$, $y$ and $z$ satisfy the equations
\begin{align*}
x+y-z & = 1\\
x-y+z & = 1\\
\intertext{and by hypothesis}
x+y+z & =1
\end{align*}`,{title:'\\intertext',pre:AM})}
<p>Extra <code>&amp;</code> characters make columns of equations side by side. Add <code>\qquad</code> after the separating <code>&amp;</code> for more space.</p>
${ex(L`Compare the following sets of equations
\begin{align*}
\cos^2x+\sin^2x & = 1 &\qquad \cosh^2x-\sinh^2x & = 1\\
\cos^2x-\sin^2x & = \cos 2x &\qquad \cosh^2x+\sinh^2x & = \cosh 2x
\end{align*}`,{title:'columns of equations',pre:AM})}
<p>The environments above use the full width of the text. So you cannot put anything else on their lines. For this, use <code>gathered</code>, <code>aligned</code> or <code>alignedat</code>. They use only the width of their content.</p>
${ex(L`Compare the following sets of equations
\begin{equation*}
\begin{aligned}
\cos^2x+\sin^2x & = 1\\
\cos^2x-\sin^2x & = \cos 2x
\end{aligned}
\qquad\text{and}\qquad
\begin{aligned}
\cosh^2x-\sinh^2x & = 1\\
\cosh^2x+\sinh^2x & = \cosh 2x
\end{aligned}
\end{equation*}`,{title:'aligned',pre:AM})}
<p>The environment <code>cases</code> makes a display with a brace on the left.</p>
${ex(L`\begin{equation*}
|x| =
\begin{cases}
x & \text{if $x\ge 0$}\\
-x & \text{if $x\le 0$}
\end{cases}
\end{equation*}`,{title:'cases',pre:AM})}
${think('Which environment?',L`Two equations, aligned at the equals sign, as one unit`,['gather*','align*','multline*','cases'],1,'align* aligns the lines at the & character.')}

${tp('Numbered equations')}
<p>Each starred environment has an unstarred form that prints a number. The environments <code>split</code> and <code>aligned</code> take the number of the parent environment. All other alignment environments number each line.</p>
<ul>
  <li>The book is divided into chapters, so its number is (VIII.2) for equation 2 of chapter VIII. In an article, the number is (2).</li>
  <li><code>\numberwithin{equation}{section}</code> adds the section number: (1.2).</li>
  <li><code>\tag{L}</code> replaces the number with (L). <code>\tag*{L}</code> prints L without parentheses.</li>
  <li><code>\notag</code> removes the number of one line.</li>
  <li>Put <code>\tag</code> and <code>\notag</code> before the line end <code>\\</code>.</li>
  <li><code>\label{key}</code> in an equation lets you use <code>\ref{key}</code> or <code>\eqref{key}</code>. The book writes <code>\ntag</code> in one place. This is a misprint for <code>\notag</code>.</li>
</ul>
${ex(L`\begin{equation}
ax+by+c=0 \tag{L}
\end{equation}
\begin{align}
x+y-z & = 1\\
x-y+z & = 1
\end{align}`,{title:'a tag and numbered lines',pre:AM})}
${ex(L`Thus $x$, $y$ and $z$ satisfy the equations
\begin{align}
x+y-z & = 1 \tag{A}\\
x-y+z & = 1 \notag\\
\intertext{and by hypothesis}
x+y+z & =1 \tag{H}
\end{align}`,{title:'\\tag and \\notag',pre:AM})}
${ex(L`\begin{equation}
\begin{split}
(a+b)^2 & = (a+b)(a+b)\\
& = a^2+ab+ba+b^2\\
& = a^2+2ab+b^2
\end{split}
\end{equation}`,{title:'split takes the number of its parent',pre:AM})}
${trap(H`<p>Put <code>\tag</code> before <code>\\</code>. A <code>\tag</code> after <code>\\</code> belongs to the next line.</p>`)}
${build('Number and tag',L`\documentclass{article}
\usepackage{amsmath}
\begin{document}
x+y=1
x-y=0
\end{document}`,{brief:'Put the two equations in an align environment, aligned at the equals sign. Number the first one with the tag (A). Do not number the second one.',checks:[{re:'\\\\begin\\{align\\}',msg:'an align environment'},{re:'\\\\tag\\{A\\}',msg:'\\tag{A}'},{re:'\\\\notag|\\\\nonumber',msg:'\\notag on the second line'}]})}
${omr('Equation groups',[
 {q:'Which package gives align and split?',o:['amsmath','array','enumerate','multirow'],a:0,why:'These environments are in amsmath.'},
 {q:'What does the star in equation* do?',o:['Adds a number','Removes the number','Makes it bold','Nothing'],a:1,why:'The starred form prints no number.'},
 {q:'Which environment is correct for a long equation of two lines?',o:['multline*','multiline*','long*','split*'],a:0,why:'multline* is the correct spelling.'},
 {q:'Where can you use split?',o:['Alone','Only inside another equation environment','Only in text','Only in tables'],a:1,why:'split needs a parent environment.'},
 {q:'Which command puts text between aligned equations?',o:['\\text','\\intertext','\\mbox','\\label'],a:1,why:'\\intertext keeps the alignment.'},
 {q:'Which command removes the number of one line?',o:['\\notag','\\tag','\\label','\\star'],a:0,why:'\\notag removes the number of that line.'},
 {q:'Which command adds the section number to equation numbers?',o:['\\numberwithin{equation}{section}','\\tag{section}','\\setcounter{equation}{section}','\\eqref{section}'],a:0,why:'\\numberwithin does this.'},
 {q:'Which environment makes a display with a left brace?',o:['cases','gather','split','array'],a:0,why:'cases is for definitions by cases.'}
])}
${must(H`<ol>
<li><code>equation*</code> and <code>equation</code>. <code>\text{…}</code>.</li>
<li><code>multline*</code> and <code>split</code> for a long equation.</li>
<li><code>gather*</code>, <code>align*</code>, <code>\intertext</code>, <code>aligned</code>, <code>cases</code>.</li>
<li>Numbers: the unstarred form, <code>\numberwithin</code>, <code>\tag</code>, <code>\tag*</code>, <code>\notag</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 10 · Matrices, dots, delimiters (VIII.4) ───────────── */
STATIONS.push({id:'m3-misc',title:'Matrices, dots, delimiters and more',short:'10 · Matrices & delimiters',est:'~55 min',body:H`
${gist('amsmath has environments for matrices, commands for dots, fractions and arrows, and ways to make delimiters larger.')}

${tp('Matrices')}
<p>A matrix has numbers or expressions in rows and columns. Use <code>pmatrix</code> for round brackets. Separate the columns with <code>&amp;</code> and the rows with <code>\\</code>. You can use it in text and in displayed mathematics.</p>
${ex(L`The system of equations
\begin{align*}
x+y-z & = 1\\
x-y+z & = 1\\
x+y+z & = 1
\end{align*}
can be written in matrix terms as
\begin{equation*}
\begin{pmatrix}
1 & 1 & -1\\
1 & -1 & 1\\
1 & 1 & 1
\end{pmatrix}
\begin{pmatrix}
x\\
y\\
z
\end{pmatrix}
=
\begin{pmatrix}
1\\
1\\
1
\end{pmatrix}.
\end{equation*}`,{title:'pmatrix',pre:AM})}
<div class="scroll-x"><table class="ref"><tr><th>Environment</th><th>Delimiters</th></tr>
<tr><td><code>matrix</code></td><td>none</td></tr>
<tr><td><code>pmatrix</code></td><td>( )</td></tr>
<tr><td><code>bmatrix</code></td><td>[ ]</td></tr>
<tr><td><code>Bmatrix</code></td><td>{ }</td></tr>
<tr><td><code>vmatrix</code></td><td>| | (determinants)</td></tr>
<tr><td><code>Vmatrix</code></td><td>‖ ‖ (double lines)</td></tr>
<tr><td><code>smallmatrix</code></td><td>none. Small size for use in text</td></tr>
</table></div>
${ex(L`Some write matrices as $\begin{pmatrix} a & b\\ c & d \end{pmatrix}$ and others as $\begin{bmatrix} a & b\\ c & d \end{bmatrix}$.
The determinant $\begin{vmatrix} a & b\\ c & d \end{vmatrix}$ is defined by
\begin{equation*}
\begin{vmatrix} a & b\\ c & d \end{vmatrix} = ad-bc
\end{equation*}`,{title:'bmatrix and vmatrix',pre:AM})}
<p>Use <code>\hdotsfor{n}</code> for a row of dots across n columns. The optional argument sets the spacing: <code>\hdotsfor[2]{4}</code> doubles it. The book writes <code>\hdotsfour</code> in the text. This is a misprint. The command is <code>\hdotsfor</code>.</p>
${ex(L`A general $m\times n$ matrix is of the form
\begin{equation*}
\begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n}\\
a_{21} & a_{22} & \dots & a_{2n}\\
\hdotsfor{4}\\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix}
\end{equation*}`,{title:'\\hdotsfor',pre:AM})}

${tp('Dots')}
<p><code>\dots</code> makes dots on the baseline. The amsmath package has dots of the correct height for each use:</p>
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Use</th></tr>
<tr><td><code>\dotsc</code></td><td>dots with commas</td></tr>
<tr><td><code>\dotsb</code></td><td>dots with binary operators or relations (raised)</td></tr>
<tr><td><code>\dotsm</code></td><td>dots for multiplication (raised)</td></tr>
<tr><td><code>\dotsi</code></td><td>dots with integrals</td></tr>
</table></div>
${ex(L`Consider a finite sequence $X_1,X_2,\dotsc$, its sum $X_1+X_2+\dotsb$ and product $X_1X_2\dotsm$.
\[ \int_{A_1}\int_{A_2}\dotsi\int_{A_n} f \]`,{title:'dots',pre:AM})}
${think('Which dots for a sum?',L`$X_1+X_2+\dots$   $X_1+X_2+\dotsb$`,['They are the same','\\dotsb puts the dots at the middle height','\\dots is higher','\\dotsb is an error'],1,'\\dotsb is for binary operators. The dots are raised to the middle of the line.')}

${tp('Delimiters')}
<p>Use <code>\left</code> and <code>\right</code> to make a delimiter as large as the content. Each <code>\left</code> needs a <code>\right</code>. The two delimiters can differ. To have only one large delimiter, give a period for the other: <code>\left.</code> or <code>\right.</code>.</p>
${ex(L`Since $\left|\begin{smallmatrix} a & h & g\\ h & b & f\\ g & f & c \end{smallmatrix}\right|=0$, the matrix
$\left(\begin{smallmatrix} a & h & g\\ h & b & f\\ g & f & c \end{smallmatrix}\right)$ is not invertible.

\begin{equation*}
\left.
\begin{aligned}
u_x & = v_y\\
u_y & = -v_x
\end{aligned}
\right\}
\quad\text{Cauchy-Riemann Equations}
\end{equation*}`,{title:'\\left and \\right',pre:AM})}
<p>Sometimes the delimiters from <code>\left</code> and <code>\right</code> are too small or too large. Use <code>\bigl</code> and <code>\bigr</code> and the larger sizes <code>\Bigl</code>, <code>\biggl</code>, <code>\Biggl</code> (and the <code>r</code> forms).</p>
${ex(L`\begin{equation*}
(x+y)^2-(x-y)^2=\bigl((x+y)+(x-y)\bigr)\bigl((x+y)-(x-y)\bigr)=4xy
\end{equation*}
\begin{equation*}
\biggl(\sum_{k=1}^n|x_ky_k|\biggr)^2\le
\biggl(\sum_{k=1}^{n}|x_k|\biggr)\biggl(\sum_{k=1}^{n}|y_k|\biggr)
\end{equation*}`,{title:'\\bigl, \\bigr and \\biggl',pre:AM})}

${tp('Putting one over another')}
<p>Use <code>\frac{top}{bottom}</code> for a fraction. Use <code>\binom{top}{bottom}</code> for a binomial coefficient. Both are smaller in text than in a display.</p>
${ex(L`From the binomial theorem, if $n$ is an even number, then
\begin{equation*}
1-\binom{n}{1}\frac{1}{2}+\binom{n}{2}\frac{1}{2^2}-\dotsb
-\binom{n}{n-1}\frac{1}{2^{n-1}}=0
\end{equation*}`,{title:'\\frac and \\binom',pre:AM})}
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Effect</th></tr>
<tr><td><code>\tfrac</code>, <code>\tbinom</code></td><td>text-size fraction or binomial</td></tr>
<tr><td><code>\dfrac</code>, <code>\dbinom</code></td><td>display-size fraction or binomial</td></tr>
<tr><td><code>\cfrac</code></td><td>continued fractions</td></tr>
<tr><td><code>\genfrac{left}{right}{thickness}{style}{top}{bottom}</code></td><td>a custom fraction</td></tr>
</table></div>
<p><code>\genfrac</code> has six arguments: the left delimiter (write <code>\{</code> for a brace), the right delimiter, the thickness of the line (<code>0pt</code> means no line; empty means normal), the style (0 display, 1 text, 2 script, 3 scriptscript), the top and the bottom.</p>
${ex(L`Since $(x_n)$ converges to $0$, there exists a positive integer $p$ such that
\begin{equation*}
|x_n|<\tfrac{1}{2}\quad\text{for all $n\ge p$}
\end{equation*}
We have fractions like $\dfrac{1}{2^{n-1}}$ and $\genfrac{(}{)}{0pt}{}{n}{r}$.
\[
\frac{4}{\pi}=1+\cfrac{1^2}{2+\cfrac{3^2}{2+\cfrac{5^2}{2+\dotsb}}}
\]`,{title:'\\tfrac, \\dfrac, \\genfrac, \\cfrac',pre:AM})}
<p>For a custom fraction used often, make a new command with <code>\newcommand</code>.</p>
${ex(L`\documentclass{article}
\usepackage{amsmath}
\newcommand{\chsfk}[2]{\genfrac{[}{]}{0pt}{}{#1}{#2}}
\newcommand{\chssk}[2]{\genfrac{\{}{\}}{0pt}{}{#1}{#2}}
\begin{document}
\begin{equation*}
\chssk{ij}{k}=g^{k1}\chsfk{ij}{1}+g^{k2}\chsfk{ij}{2}
\end{equation*}
\end{document}`,{title:'Christoffel symbols',run:true})}

${tp('Affixing symbols: over, under and arrows')}
<p><code>\overset{top}{base}</code> puts a symbol over, and <code>\underset{bottom}{base}</code> puts a symbol under. Basic LaTeX has <code>\overrightarrow</code> and <code>\overleftarrow</code>. The amsmath package adds <code>\underrightarrow</code>, <code>\underleftarrow</code>, and the extensible arrows <code>\xrightarrow</code> and <code>\xleftarrow</code>. The optional argument in square brackets goes below the arrow.</p>
${ex(L`Thus $\overset{\circ}{a}$ and $\underset{\circ}{a}$. We see that
\begin{equation*}
0\xrightarrow{} A\xrightarrow[\text{monic}]{f}
B\xrightarrow[\hspace{7pt}\text{epi}\hspace{7pt}]{g}
C\xrightarrow{} 0
\end{equation*}
is a short exact sequence.`,{title:'\\overset and \\xrightarrow',pre:AM})}

${tp('Large operators and limits')}
<p>The symbols for sum, product, union and intersection take limits. In text, the limits are at the side. In a display, the limits are above and below.</p>
${ex(L`Euler proved that the series $\sum_{n=1}^\infty\frac{1}{n^2}$ converges, and also that
\begin{equation*}
\sum_{n=1}^\infty\frac{1}{n^2}=\frac{\pi^2}{6}
\end{equation*}
Now with \verb|\displaystyle|: $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$ and with \verb|\limits|: $\sum\limits_{n=1}^\infty\frac{1}{n^2}$.`,{title:'limits in text and display',pre:AM})}
<ul>
  <li><code>\displaystyle</code> in text gives the display size and the display limits. It also changes the size of the fraction.</li>
  <li><code>\limits</code> after the operator puts the limits above and below. The size does not change.</li>
  <li><code>\nolimits</code> puts the limits at the side, also in a display.</li>
  <li>For an integral, the limits are at the side in text and in a display. Use <code>\limits</code> to move them.</li>
  <li><code>\substack{…\\…}</code> makes two lines of subscripts.</li>
  <li><code>\sideset{left}{right}\op</code> puts symbols at the corners of an operator.</li>
</ul>
${ex(L`$\lim\limits_{x\to\infty}\int_0^x\frac{\sin x}{x}\,\mathrm{d}x=\frac{\pi}{2}$ and
\begin{equation*}
\int\limits_0^\infty\frac{\sin x}{x}\,\mathrm{d}x=\frac{\pi}{2}
\end{equation*}
\begin{equation*}
p_k(x)=\prod_{\substack{i=1\\i\ne k}}^n
\left(\frac{x-t_i}{t_k-t_i}\right)
\end{equation*}`,{title:'\\limits and \\substack',pre:AM})}
${fill('Fractions and roots',L`A fraction uses [[\frac]]. A binomial coefficient uses [[\binom]]. A small fraction in text uses [[\tfrac]]. A large delimiter around content uses \left and [[\right]].`,{code:true,strict:false})}
${omr('Matrices, delimiters and more',[
 {q:'Which environment gives a determinant bar on each side?',o:['pmatrix','bmatrix','vmatrix','matrix'],a:2,why:'vmatrix has vertical lines.'},
 {q:'Which environment is for a small matrix in text?',o:['smallmatrix','tinymatrix','matrix*','pmatrix'],a:0,why:'smallmatrix has no delimiters. Add them with \\left and \\right.'},
 {q:'Which command gives dots for multiplication?',o:['\\dotsc','\\dotsb','\\dotsm','\\dotsi'],a:2,why:'\\dotsm is for multiplication.'},
 {q:'What does \\left. do?',o:['An error','A large delimiter that you cannot see','A period','A small dot'],a:1,why:'The period is an empty delimiter. It lets you use \\right alone.'},
 {q:'Which command gives a text-size fraction in a display?',o:['\\frac','\\tfrac','\\dfrac','\\cfrac'],a:1,why:'\\tfrac is the text-size fraction.'},
 {q:'Which command puts the limits above and below an operator?',o:['\\limits','\\nolimits','\\displaylimits','\\sideset'],a:0,why:'\\limits moves the limits above and below.'},
 {q:'Which command makes an arrow that grows to fit long text?',o:['\\rightarrow','\\xrightarrow','\\longrightarrow','\\overrightarrow'],a:1,why:'\\xrightarrow is extensible.'},
 {q:'How many arguments has \\genfrac?',o:['2','4','6','8'],a:2,why:'Left delimiter, right delimiter, thickness, style, top, bottom.'}
])}
${must(H`<ol>
<li>matrix, pmatrix, bmatrix, Bmatrix, vmatrix, Vmatrix, smallmatrix. <code>\hdotsfor</code>.</li>
<li><code>\dots</code>, <code>\dotsc</code>, <code>\dotsb</code>, <code>\dotsm</code>, <code>\dotsi</code>.</li>
<li><code>\left</code> … <code>\right</code>, <code>\bigl</code> … <code>\biggr</code>.</li>
<li><code>\frac</code>, <code>\binom</code>, <code>\tfrac</code>, <code>\dfrac</code>, <code>\cfrac</code>, <code>\genfrac</code>.</li>
<li><code>\overset</code>, <code>\underset</code>, <code>\xrightarrow</code>.</li>
<li>Limits: <code>\displaystyle</code>, <code>\limits</code>, <code>\nolimits</code>, <code>\substack</code>, <code>\sideset</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 11 · Operators, symbols, Greek letters (VIII.5–VIII.8) ───────────── */
STATIONS.push({id:'m3-symbols',title:'Operators, fonts and symbols',short:'11 · Operators & symbols',est:'~35 min',body:U(H`
${gist('Functions such as sin and log are upright. Define your own operator names with \\DeclareMathOperator. Use \\mathbf and \\boldsymbol for bold. Look up symbols in the tables.')}

${tp('New operators')}
<p>TeX sets mathematics in italic. Functions such as log, sin and lim are traditionally upright. LaTeX has commands for them, for example <code>\log</code>, <code>\sin</code> and <code>\lim</code>. These are the "Log-like symbols".</p>
<p>To make your own operator name, use <code>\DeclareMathOperator</code> in the preamble. The sub- and superscripts go at the side. The starred form puts them below and above, like limits.</p>
${ex(L`\documentclass{article}
\usepackage{amsmath}
\DeclareMathOperator{\cl}{cl}
\DeclareMathOperator*{\esup}{ess\,sup}
\begin{document}
We denote the closure of $A$ in the subspace $Y$ of $X$ by $\cl_Y(A)$.

For $f\in L^\infty(R)$, we define
\begin{equation*}
||f||_\infty=\esup_{x\in R}|f(x)|
\end{equation*}
\end{document}`,{title:'\\DeclareMathOperator',run:true})}
<p>The command <code>\,</code> in the definition of <code>\esup</code> puts a thin space between "ess" and "sup".</p>
${trap(H`<p>Put <code>\DeclareMathOperator</code> in the preamble. It does not work in the body.</p>`)}

${tp('The faces of mathematics')}
<p>LaTeX has several math typefaces:</p>
<div class="scroll-x"><table class="ref"><tr><th>Style</th><th>Command</th><th>Example</th></tr>
<tr><td>italic (default)</td><td><code>\mathit</code></td><td><i>x+y=z</i></td></tr>
<tr><td>roman</td><td><code>\mathrm</code></td><td>x+y=z</td></tr>
<tr><td>bold</td><td><code>\mathbf</code></td><td><b>x+y=z</b></td></tr>
<tr><td>sans serif</td><td><code>\mathsf</code></td><td style="font-family:sans-serif">x+y=z</td></tr>
<tr><td>typewriter</td><td><code>\mathtt</code></td><td style="font-family:monospace">x+y=z</td></tr>
<tr><td>calligraphic (capitals only)</td><td><code>\mathcal</code></td><td>𝒳+𝒴=𝒵</td></tr>
</table></div>
<p>Other alphabets need packages: <code>\mathbb</code> (amsfonts or amssymb), <code>\mathfrak</code> (eufrak), <code>\mathscr</code> (mathrsfs or eucal).</p>
<p><code>\mathbf</code> gives roman bold, not italic bold. For a bold italic vector, use <code>\boldsymbol</code> from amsmath. <code>\boldsymbol</code> makes every symbol in its scope bold, also <code>+</code> and <code>=</code>, if a bold form exists.</p>
${ex(L`In this case, we define
\begin{equation*}
\boldsymbol{a}+\boldsymbol{b}=\boldsymbol{c}
\end{equation*}
\begin{equation*}
\boldsymbol{a+b=c}
\end{equation*}`,{title:'\\boldsymbol',pre:AM})}
<p>If a document has many vectors, define a command: <code>\newcommand{\vect}[1]{\boldsymbol{#1}}</code>. If you later want arrows over the vectors, you change only the definition: <code>\overrightarrow{#1}</code>.</p>
<h5>ISO rules</h5>
<ol>
  <li>Simple variables are in italic: <i>a</i>, <i>x</i> (the default).</li>
  <li>Vectors are in bold italic.</li>
  <li>Matrices can be in sans serif.</li>
  <li>The numbers e and i and the differential operator d are upright roman.</li>
</ol>
${ex(L`\documentclass{article}
\newcommand{\me}{\mathrm{e}}
\newcommand{\mi}{\mathrm{i}}
\newcommand{\diff}{\mathrm{d}}
\begin{document}
$\me^{\mi\pi}=-1$ and $\int f\,\diff x$.
\end{document}`,{title:'upright e, i and d',run:true})}
<p>For a new math alphabet, use <code>\DeclareMathAlphabet</code> in the preamble, for example <code>\DeclareMathAlphabet{\mathsfsl}{OT1}{cmss}{m}{sl}</code>. The live preview does not run this command. The Real PDF tab does.</p>

${tp('Symbols')}
<p>The book ends the tutorial with tables of symbols. Learn how to find a symbol and the class it is in. These are the main tables.</p>
<h5>Greek letters</h5>
<div class="scroll-x"><table class="ref"><tr><th colspan="4">Lowercase</th></tr>
<tr><td>$\alpha$ <code>\alpha</code></td><td>$\beta$ <code>\beta</code></td><td>$\gamma$ <code>\gamma</code></td><td>$\delta$ <code>\delta</code></td></tr>
<tr><td>$\epsilon$ <code>\epsilon</code></td><td>$\varepsilon$ <code>\varepsilon</code></td><td>$\zeta$ <code>\zeta</code></td><td>$\eta$ <code>\eta</code></td></tr>
<tr><td>$\theta$ <code>\theta</code></td><td>$\vartheta$ <code>\vartheta</code></td><td>$\iota$ <code>\iota</code></td><td>$\kappa$ <code>\kappa</code></td></tr>
<tr><td>$\lambda$ <code>\lambda</code></td><td>$\mu$ <code>\mu</code></td><td>$\nu$ <code>\nu</code></td><td>$\xi$ <code>\xi</code></td></tr>
<tr><td>$\pi$ <code>\pi</code></td><td>$\rho$ <code>\rho</code></td><td>$\sigma$ <code>\sigma</code></td><td>$\tau$ <code>\tau</code></td></tr>
<tr><td>$\upsilon$ <code>\upsilon</code></td><td>$\phi$ <code>\phi</code></td><td>$\varphi$ <code>\varphi</code></td><td>$\chi$ <code>\chi</code></td></tr>
<tr><td>$\psi$ <code>\psi</code></td><td>$\omega$ <code>\omega</code></td><td colspan="2">(o is typed as o)</td></tr>
<tr><th colspan="4">Uppercase</th></tr>
<tr><td>$\Gamma$ <code>\Gamma</code></td><td>$\Delta$ <code>\Delta</code></td><td>$\Theta$ <code>\Theta</code></td><td>$\Lambda$ <code>\Lambda</code></td></tr>
<tr><td>$\Xi$ <code>\Xi</code></td><td>$\Pi$ <code>\Pi</code></td><td>$\Sigma$ <code>\Sigma</code></td><td>$\Upsilon$ <code>\Upsilon</code></td></tr>
<tr><td>$\Phi$ <code>\Phi</code></td><td>$\Psi$ <code>\Psi</code></td><td>$\Omega$ <code>\Omega</code></td><td></td></tr>
</table></div>
<p>There is no uppercase Alpha or Beta command. Type A and B.</p>
<h5>Other classes</h5>
<div class="scroll-x"><table class="ref"><tr><th>Class</th><th>Examples</th></tr>
<tr><td>Binary operations</td><td>$\pm$ <code>\pm</code>, $\mp$ <code>\mp</code>, $\times$ <code>\times</code>, $\div$ <code>\div</code>, $\ast$ <code>\ast</code>, $\circ$ <code>\circ</code>, $\bullet$ <code>\bullet</code>, $\cdot$ <code>\cdot</code>, $\cap$ <code>\cap</code>, $\cup$ <code>\cup</code>, $\vee$ <code>\vee</code>, $\wedge$ <code>\wedge</code>, $\oplus$ <code>\oplus</code>, $\otimes$ <code>\otimes</code></td></tr>
<tr><td>Relations</td><td>$\leq$ <code>\leq</code>, $\geq$ <code>\geq</code>, $\equiv$ <code>\equiv</code>, $\sim$ <code>\sim</code>, $\simeq$ <code>\simeq</code>, $\approx$ <code>\approx</code>, $\cong$ <code>\cong</code>, $\neq$ <code>\neq</code>, $\subset$ <code>\subset</code>, $\subseteq$ <code>\subseteq</code>, $\in$ <code>\in</code>, $\ni$ <code>\ni</code>, $\propto$ <code>\propto</code>, $\perp$ <code>\perp</code>, $\parallel$ <code>\parallel</code></td></tr>
<tr><td>Arrows</td><td>$\leftarrow$ <code>\leftarrow</code>, $\rightarrow$ <code>\rightarrow</code>, $\Rightarrow$ <code>\Rightarrow</code>, $\Leftrightarrow$ <code>\Leftrightarrow</code>, $\mapsto$ <code>\mapsto</code>, $\longrightarrow$ <code>\longrightarrow</code>, $\uparrow$ <code>\uparrow</code>, $\downarrow$ <code>\downarrow</code></td></tr>
<tr><td>Miscellaneous</td><td>$\ldots$ <code>\ldots</code>, $\cdots$ <code>\cdots</code>, $\vdots$ <code>\vdots</code>, $\ddots$ <code>\ddots</code>, $\aleph$ <code>\aleph</code>, $\hbar$ <code>\hbar</code>, $\ell$ <code>\ell</code>, $\emptyset$ <code>\emptyset</code>, $\nabla$ <code>\nabla</code>, $\partial$ <code>\partial</code>, $\forall$ <code>\forall</code>, $\exists$ <code>\exists</code>, $\infty$ <code>\infty</code>, $\neg$ <code>\neg</code></td></tr>
<tr><td>Variable-sized</td><td>$\sum$ <code>\sum</code>, $\prod$ <code>\prod</code>, $\int$ <code>\int</code>, $\oint$ <code>\oint</code>, $\bigcup$ <code>\bigcup</code>, $\bigcap$ <code>\bigcap</code></td></tr>
<tr><td>Log-like</td><td><code>\arccos \arcsin \arctan \arg \cos \cosh \cot \coth \csc \deg \det \dim \exp \gcd \hom \inf \ker \lg \lim \liminf \limsup \ln \log \max \min \Pr \sec \sin \sinh \sup \tan \tanh</code></td></tr>
<tr><td>Delimiters</td><td><code>( ) [ ] \{ \} \lfloor \rfloor \lceil \rceil \langle \rangle | \|</code></td></tr>
<tr><td>Accents</td><td>$\hat$ <code>\hat</code>, $\acute$ <code>\acute</code>, $\bar$ <code>\bar</code>, $\dot$ <code>\dot</code>, $\breve$ <code>\breve</code>, $\check$ <code>\check</code>, $\grave$ <code>\grave</code>, $\vec$ <code>\vec</code>, $\ddot$ <code>\ddot</code>, $\tilde$ <code>\tilde</code></td></tr>
<tr><td>Constructions</td><td><code>\widetilde</code> <code>\widehat</code> <code>\overleftarrow</code> <code>\overrightarrow</code> <code>\overline</code> <code>\underline</code> <code>\overbrace</code> <code>\underbrace</code> <code>\sqrt</code> <code>\frac</code></td></tr>
</table></div>
<p>The book marks some symbols "not predefined in LaTeX2ε". These need <code>latexsym</code>, <code>amsfonts</code> or <code>amssymb</code>. Examples: <code>\Box</code>, <code>\Diamond</code>, <code>\lhd</code>, <code>\rhd</code>, <code>\mho</code>, <code>\leadsto</code>.</p>
${match('Command and result',[
 [L`<code>\alpha</code>`,L`$\alpha$`],[L`<code>\Omega</code>`,L`$\Omega$`],[L`<code>\infty</code>`,L`$\infty$`],[L`<code>\partial</code>`,L`$\partial$`],[L`<code>\nabla</code>`,L`$\nabla$`],[L`<code>\leq</code>`,L`$\leq$`]],{left:'Command',right:'Result'})}
${ex(L`$\alpha+\beta=\gamma$, $\forall x\in\mathbb{R}$, $\nabla\cdot\vec{E}=\rho/\epsilon_0$, $A\subseteq B\Rightarrow A\cap B=A$`,{title:'a few symbols',pre:AMS})}
${omr('Operators, fonts and symbols',[
 {q:'Which command defines a new operator name?',o:['\\newcommand','\\DeclareMathOperator','\\operator','\\mathop'],a:1,why:'\\DeclareMathOperator in the preamble.'},
 {q:'What does the starred \\DeclareMathOperator* do?',o:['Makes the name bold','Puts limits below and above','Removes the name','Makes the name italic'],a:1,why:'The starred form puts sub- and superscripts as limits.'},
 {q:'Which command gives bold italic symbols?',o:['\\mathbf','\\boldsymbol','\\mathbold','\\textbf'],a:1,why:'\\mathbf gives roman bold. \\boldsymbol is from amsmath.'},
 {q:'Which command gives the calligraphic alphabet?',o:['\\mathcal','\\mathbb','\\mathfrak','\\mathsf'],a:0,why:'\\mathcal is for capital letters.'},
 {q:'Which package is for \\mathbb?',o:['amsfonts or amssymb','array','enumerate','natbib'],a:0,why:'\\mathbb needs amsfonts or amssymb.'},
 {q:'Which ISO rule is correct?',o:['The number e is italic','The differential d is upright roman','Vectors are upright','Variables are bold'],a:1,why:'e, i and d are upright roman.'}
])}
${must(H`<ol>
<li>Log-like functions: <code>\sin</code>, <code>\log</code>, <code>\lim</code>, … <code>\DeclareMathOperator</code> in the preamble.</li>
<li>Math faces: <code>\mathrm</code> <code>\mathbf</code> <code>\mathsf</code> <code>\mathtt</code> <code>\mathcal</code> <code>\mathbb</code> <code>\boldsymbol</code>.</li>
<li>ISO rules. Commands <code>\me</code> <code>\mi</code> <code>\diff</code>.</li>
<li>Symbol tables and the packages that some symbols need.</li>
</ol>`)}
`)});
