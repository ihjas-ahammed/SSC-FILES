/* ═══════════════════ MODULE IV — Theorems, boxes, floats, references, notes, presentations ═══════════════════
   Units 12–17: Text 1, Tutorials IX–XIII. Units 18–19: Text 2 (Grätzer, More Math into LaTeX), Chapter 12.
   Written from the book cuts in ASD-STE100 style.
   The syllabus omits: IX.2.2–IX.2.3 (in the page range of unit 13), 12.2.5 and 12.2.7 (links). */
const THM_PRE=L`\usepackage{amsmath,amssymb,amsthm}`;

/* ───────────── Unit 12 · Theorems (Tutorial IX.1) ───────────── */
STATIONS.push({id:'m4-theorems',title:'Theorems',short:'12 · Theorems',est:'~25 min',body:H`
${gist('Use \\newtheorem in the preamble to define a theorem-like environment. Then use the environment in the text. LaTeX numbers it for you.')}

${tp('Theorem-like statements')}
<p>A mathematical document has special statements: axioms (the assumptions) and theorems (the conclusions). Theorems have other names, for example propositions and lemmas. They are in a different font from the text. They have a name and a number, so you can refer to them. We call them <b>theorem-like statements</b>.</p>
<p>The declaration <code>\newtheorem</code> defines a theorem-like environment. It has two arguments: the name of the environment and the name that LaTeX prints with the statement.</p>
${ex(L`\documentclass{article}
\newtheorem{thm}{Theorem}
\begin{document}
\begin{thm}
The sum of the angles of a triangle is $180^\circ$.
\end{thm}
\end{document}`,{title:'\\newtheorem{thm}{Theorem}',run:true})}
<ul>
  <li>The first argument can be any name. Here it is <code>thm</code>.</li>
  <li>Put all the <code>\newtheorem</code> commands together in the preamble.</li>
</ul>

${tp('Numbering')}
<p>The command <code>\newtheorem</code> has two optional arguments. They control the numbering.</p>
<h5>Number within a section</h5>
<p>Add the optional argument at the end. <code>\newtheorem{thm}{Theorem}[section]</code> numbers the theorems 1.1, 1.2, … in each section.</p>
<h5>Share a counter</h5>
<p>Put the optional argument before the second argument. <code>\newtheorem{cor}[thm]{Corollary}</code> makes corollaries and theorems share one sequence. Define <code>thm</code> first.</p>
${ex(L`\documentclass{article}
\newtheorem{thm}{Theorem}[section]
\newtheorem{cor}[thm]{Corollary}
\begin{document}
\section{Triangles}
\begin{thm}
The sum of the angles of a triangle is $180^\circ$.
\end{thm}
An immediate consequence of the result is the following.
\begin{cor}
The sum of the angles of a quadrilateral is $360^\circ$.
\end{cor}
\end{document}`,{title:'a shared counter',run:true})}
${think('Corollary number',L`\newtheorem{thm}{Theorem}[section]
\newtheorem{cor}[thm]{Corollary}
... Theorem 1.1, then a corollary`,['Corollary 1.1','Corollary 1.2','Corollary 1','Corollary 2.1'],1,'A corollary shares the counter of thm. The next number is 1.2.')}

${tp('A note on a theorem')}
<p>A theorem-like environment has an optional argument. It gives a note, for example the name of the person who found it.</p>
${ex(L`\documentclass{article}
\newtheorem{thm}{Theorem}
\begin{document}
\begin{thm}[Euclid]
The sum of the angles of a triangle is $180^\circ$.
\end{thm}
\end{document}`,{title:'\\begin{thm}[Euclid]',run:true})}
${trap(H`<p>A statement that starts with a square bracket gives an unwanted note. <code>[0,1] is a compact subset...</code> prints "(0,1)" as a note and loses the rest. Put the mathematics in dollar signs: <code>$[0,1]$ is a compact subset of $\mathbb{R}$</code>.</p>`)}
${ex(L`\documentclass{article}
\usepackage{amssymb}
\newtheorem{thm}{Theorem}
\begin{document}
\begin{thm}
$[0,1]$ is a compact subset of $\mathbb{R}$.
\end{thm}
\end{document}`,{title:'the correct input',run:true})}
${fill('Theorem definitions',L`The command [[\newtheorem]]{thm}{Theorem}[section] numbers the theorems in each section. To share the counter of thm, write \newtheorem{cor}[[[thm]]]{Corollary}.`,{code:true,strict:false})}
${omr('Theorems',[
 {q:'Which command defines a theorem-like environment?',o:['\\theorem','\\newtheorem','\\newenvironment','\\proof'],a:1,why:'\\newtheorem{name}{Printed name}.'},
 {q:'What does \\newtheorem{thm}{Theorem}[section] do?',o:['Numbers the theorems within each section','Adds a section','Shares a counter','Removes the number'],a:0,why:'The last optional argument sets the number to restart in each section.'},
 {q:'What does \\newtheorem{cor}[thm]{Corollary} do?',o:['Corollaries share the counter of theorems','Corollaries have no number','Corollaries restart in each section','An error'],a:0,why:'The optional argument [thm] shares the thm counter.'},
 {q:'What is the optional argument of \\begin{thm}[Euclid]?',o:['A note','The number','The font','The counter'],a:0,why:'It is a note, for example the name of the discoverer.'},
 {q:'Where do you put \\newtheorem commands?',o:['In the preamble','In the body, after each theorem','At the end','In a table'],a:0,why:'Keep them together in the preamble.'}
])}
${must(H`<ol>
<li><code>\newtheorem{env}{Name}</code>; <code>[section]</code> at the end; <code>[other]</code> before the name.</li>
<li>Note: <code>\begin{thm}[note]</code>. Put <code>[0,1]</code> in dollar signs.</li>
</ol>`)}
`});

/* ───────────── Unit 13 · AMS theorem package (Tutorial IX.2) ───────────── */
STATIONS.push({id:'m4-amsthm',title:'Designer theorems — amsthm',short:'13 · amsthm',est:'~40 min',body:H`
${gist('The package amsthm gives theorem styles and the proof environment. \\theoremstyle chooses the style before \\newtheorem.')}
<p class="mini">The syllabus omits IX.2.2 and IX.2.3 (custom styles and more features). They are in the page range, so this unit gives them in short form for your reference.</p>

${tp('Ready-made styles')}
<p>Load the package with <code>\usepackage{amsthm}</code>. The package has three ready-made styles:</p>
<div class="scroll-x"><table class="ref"><tr><th>Style</th><th>Name and number</th><th>Body</th></tr>
<tr><td><code>plain</code> (default)</td><td>bold</td><td>italic</td></tr>
<tr><td><code>definition</code></td><td>bold</td><td>roman</td></tr>
<tr><td><code>remark</code></td><td>italic</td><td>roman</td></tr>
</table></div>
<p>The command <code>\theoremstyle{…}</code> selects the style. It acts on all the <code>\newtheorem</code> commands that follow, until the next <code>\theoremstyle</code>.</p>
${ex(L`\documentclass{article}
\usepackage{amsthm}
\newtheorem{thm}{Theorem}[section]
\theoremstyle{definition}
\newtheorem{dfn}{Definition}[section]
\theoremstyle{remark}
\newtheorem{note}{Note}[section]
\theoremstyle{plain}
\newtheorem{lem}[thm]{Lemma}
\begin{document}
\section{Triangles}
\begin{dfn}
A triangle is the figure formed by joining each pair of three non collinear points by line segments.
\end{dfn}
\begin{note}
A triangle has three angles.
\end{note}
\begin{thm}
The sum of the angles of a triangle is $180^\circ$.
\end{thm}
\begin{lem}
The sum of any two sides of a triangle is greater than or equal to the third.
\end{lem}
\end{document}`,{title:'three styles',run:true})}
${trap(H`<p>If you omit <code>\theoremstyle{plain}</code> before <code>\newtheorem{lem}...</code>, the remark style is still active. "Lemma" then has the remark style.</p>`)}
${match('Style and look',[
 ['plain','bold name, italic body'],['definition','bold name, roman body'],['remark','italic name, roman body']],{left:'Style',right:'Look'})}

${tp('Custom styles: \\newtheoremstyle')}
<p>The command <code>\newtheoremstyle</code> has nine parameters:</p>
<div class="scroll-x"><table class="ref"><tr><th>#</th><th>Parameter</th><th>Meaning</th></tr>
<tr><td>1</td><td>name</td><td>The name of the new style. It is not the name of an environment.</td></tr>
<tr><td>2</td><td>abovespace</td><td>Space above. Empty means the usual space.</td></tr>
<tr><td>3</td><td>belowspace</td><td>Space below. Empty means the usual space.</td></tr>
<tr><td>4</td><td>bodyfont</td><td>A font declaration, for example <code>\itshape</code>. Not a command such as <code>\textit</code>. Empty means the text font.</td></tr>
<tr><td>5</td><td>indent</td><td>Indent of the theorem head. Empty means none.</td></tr>
<tr><td>6</td><td>headfont</td><td>Font of the head (a declaration).</td></tr>
<tr><td>7</td><td>headpunct</td><td>Punctuation after the head. Empty means none.</td></tr>
<tr><td>8</td><td>headspace</td><td>Space between the head and the body. <code>{ }</code> is a normal space. <code>{}</code> is not the same. <code>\newline</code> puts the body on a new line.</td></tr>
<tr><td>9</td><td>custom-head-spec</td><td>Custom head. Uses <code>#1</code> (name), <code>#2</code> (number), <code>#3</code> (note).</td></tr>
</table></div>
${ex(L`\documentclass{article}
\usepackage{amsthm}
\newtheoremstyle{mystyle}{}{}{\slshape}{}{\scshape}{.}{ }{}
\theoremstyle{mystyle}
\newtheorem{mythm}{Theorem}[section]
\begin{document}
\section{Triangles}
\begin{mythm}
The sum of the angles of a triangle is $180^\circ$.
\end{mythm}
\end{document}`,{title:'\\newtheoremstyle',run:true})}
<p>The head includes the note. So the number, the name and the note have the same font. To change them separately, use the ninth parameter. <code>{#1 (\mdseries #3)}</code> prints the name, a space, and the note in medium weight in parentheses. Without #2, there is no number.</p>
<p>When a statement has no note, the text <code>(\mdseries #3)</code> prints empty parentheses. To avoid this, use <code>\thmname</code>, <code>\thmnumber</code> and <code>\thmnote</code>. Each prints its argument only if the matching part is not empty:</p>
<pre class="lx-verb">{\thmname{#1}\thmnote{ (\mdseries #3)}}</pre>
${ex(L`\documentclass{article}
\usepackage{amsthm,amssymb}
\newtheoremstyle{newnonum}{}{}{\itshape}{}{\bfseries}{.}{ }{\thmname{#1}\thmnote{ (\mdseries #3)}}
\theoremstyle{newnonum}
\newtheorem{newRiemann}{Riemann Mapping Theorem}
\newtheorem{newCauchy}{Cauchy's Theorem}
\begin{document}
\begin{newRiemann}
Every open simply connected proper subset of $\mathbb{C}$ is analytically homeomorphic to the open unit disk in $\mathbb{C}$.
\end{newRiemann}
\begin{newCauchy}[Third Version]
If $G$ is a simply connected open subset of $\mathbb{C}$, then for every closed rectifiable curve $\gamma$ in $G$, we have $\int_\gamma f=0$.
\end{newCauchy}
\end{document}`,{title:'\\thmname and \\thmnote',run:true})}

${tp('More features of amsthm')}
<ul>
  <li><code>\swapnumbers</code> puts the number before the name. It is a switch: all next definitions have the number first. Give it again to switch back.</li>
  <li><code>\newtheorem*{name}{Title}</code> makes a statement with no number.</li>
  <li>The <code>proof</code> environment sets a proof. It ends the proof with a box, the <code>\qedsymbol</code>.</li>
  <li>The optional argument of <code>proof</code> changes the head: <code>\begin{proof}[\textsc{Proof\,(Euclid)}:]</code>.</li>
  <li>To change the end mark, use <code>\renewcommand{\qedsymbol}{…}</code>. For the Halmos box: <code>\newcommand{\halmos}{\rule{1mm}{2.5mm}}</code> and <code>\renewcommand{\qedsymbol}{\halmos}</code>.</li>
  <li><code>\qed</code> places the mark. To put the mark at the end of a display, use <code>\tag*{\qed}</code> in the equation and <code>\renewcommand{\qed}{}</code> after it. This needs amsmath without the <code>leqno</code> option.</li>
</ul>
${ex(L`\documentclass{article}
\usepackage{amsmath,amsthm}
\newtheorem{thmsec}{Theorem}[section]
\newtheorem*{numlessthm}{Theorem}
\begin{document}
\section{Primes}
\begin{thmsec}
The number of primes is infinite.
\end{thmsec}
\begin{proof}
Let $\{p_1,p_2,\dotsc,p_k\}$ be a finite set of primes. Define $n=p_1p_2\dotsm p_k+1$. Then either $n$ itself is a prime or has a prime factor. In either case we obtain a prime different from $p_1,\dotsc,p_k$. Thus no finite set of primes can include all the primes.
\end{proof}
\begin{numlessthm}[Euclid]
The sum of the angles in a triangle is $180^\circ$.
\end{numlessthm}
\begin{proof}[\textsc{Proof\,(Euclid)}:]
See the book.
\end{proof}
\end{document}`,{title:'proof and \\newtheorem*',run:true})}
${think('The end of a proof',L`\begin{proof} ... \end{proof}`,['LaTeX prints "QED" in bold','LaTeX puts a box at the end of the proof','Nothing is printed','An error'],1,'The proof environment ends with \\qedsymbol, a box by default.')}
${build('Define a lemma and a proof',L`\documentclass{article}
\usepackage{amsthm}
\begin{document}
Lemma: Every square is a rectangle.
Proof: A square has four right angles.
\end{document}`,{brief:'Define a lemma environment with \\newtheorem in the preamble. Use it for the first statement. Use the proof environment for the second statement.',checks:[{re:'\\\\newtheorem\\{\\w+\\}\\{Lemma\\}',msg:'\\newtheorem{…}{Lemma} in the preamble'},{re:'\\\\begin\\{proof\\}',msg:'a proof environment'}]})}
${omr('amsthm',[
 {q:'Which package gives theorem styles and the proof environment?',o:['amsthm','amsmath','array','theorem2'],a:0,why:'The package amsthm.'},
 {q:'Which style has bold names and roman bodies?',o:['plain','definition','remark','proof'],a:1,why:'definition: bold name, roman body.'},
 {q:'Why do you give \\theoremstyle{plain} again?',o:['To stop the previous style from acting on later definitions','To make it bold','It is required by LaTeX','To number the theorems'],a:0,why:'The style stays active until you change it.'},
 {q:'How many parameters has \\newtheoremstyle?',o:['3','5','9','12'],a:2,why:'Nine parameters.'},
 {q:'Which command puts the number before the name?',o:['\\swapnumbers','\\numberfirst','\\newtheorem*','\\tag'],a:0,why:'\\swapnumbers is a switch.'},
 {q:'Which form makes a theorem with no number?',o:['\\newtheorem*','\\newtheorem[0]','\\theoremstyle{none}','\\notag'],a:0,why:'The starred form has no number.'},
 {q:'Which command holds the end mark of a proof?',o:['\\qedsymbol','\\endproof','\\halmos','\\box'],a:0,why:'\\qedsymbol. Change it with \\renewcommand.'}
])}
${must(H`<ol>
<li><code>\usepackage{amsthm}</code>. Styles plain, definition, remark. <code>\theoremstyle</code>.</li>
<li><code>\newtheoremstyle</code> has nine parameters. <code>\thmname</code>, <code>\thmnumber</code>, <code>\thmnote</code>.</li>
<li><code>\swapnumbers</code>, <code>\newtheorem*</code>, <code>proof</code>, <code>\qedsymbol</code>, <code>\qed</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 14 · Boxes (Tutorial X) ───────────── */
STATIONS.push({id:'m4-boxes',title:'Several kinds of boxes',short:'14 · Boxes',est:'~25 min',body:H`
${gist('TeX treats a box as one character. LaTeX has LR boxes, paragraph boxes and rules.')}

${tp('Boxes')}
<p>TeX builds pages from boxes. A <b>box</b> is an object that TeX treats as one character. TeX cannot split a box across lines or pages. You can move a box up, down, left and right. LaTeX has three types of boxes:</p>
<ul>
  <li><b>LR box</b> (left-right): TeX typesets the content from left to right.</li>
  <li><b>Par box</b> (paragraph): the content is typeset in paragraph mode, with several lines. You give the width.</li>
  <li><b>Rule</b>: a thin or thick line. It separates logical elements, for example table rows and columns.</li>
</ul>

${tp('LR boxes')}
<p>There are four commands:</p>
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Effect</th></tr>
<tr><td><code>\mbox{text}</code></td><td>the text in a box with no frame</td></tr>
<tr><td><code>\fbox{text}</code></td><td>the text in a box with a frame</td></tr>
<tr><td><code>\makebox[width][pos]{text}</code></td><td>a box of the given width, with no frame</td></tr>
<tr><td><code>\framebox[width][pos]{text}</code></td><td>a box of the given width, with a frame</td></tr>
</table></div>
<p>The book prints the width and the position in braces. The correct form has square brackets: width and position are optional arguments.</p>
<p>The position <code>c</code> (default) centers the text. <code>l</code> puts it at the left. <code>r</code> puts it at the right. <code>s</code> stretches the text from the left to the right edge of the box, if it has stretchable space (the space between words is stretchable).</p>
${ex(L`\fbox{some words}\par\smallskip
\mbox{some words}\par\smallskip
\framebox[5cm][s]{A few words of advice}\par\smallskip
\framebox[5cm][r]{some words}\par\smallskip
\makebox[5cm][l]{some words}|`,{title:'LR boxes'})}
<p>In the width argument, you can use four special lengths: <code>\width</code>, <code>\height</code>, <code>\depth</code> and <code>\totalheight</code>. They are the natural size of the text. <code>\totalheight</code> is <code>\height</code> plus <code>\depth</code>. A box with zero width makes the text stick out into the margin.</p>
${ex(L`\framebox{A few words of advice}\par\smallskip
\framebox[1.5\width]{A few words of advice}`,{title:'\\width'})}
<h5>Frame parameters</h5>
<ul>
  <li><code>\fboxrule</code> is the width of the frame lines. The default is 0.4 pt.</li>
  <li><code>\fboxsep</code> is the space between the frame and the content. The default is 3 pt.</li>
</ul>
${ex(L`\fbox{Text in a box}\par
{\setlength\fboxrule{2pt}\setlength\fboxsep{2mm}
\fbox{Text in a box}}`,{title:'\\fboxrule and \\fboxsep'})}
<h5>Raise and lower: \raisebox</h5>
<p>The command is <code>\raisebox{lift}[depth][height]{contents}</code>. It has two required and two optional arguments. A negative lift lowers the box.</p>
${ex(L`baseline \raisebox{1ex}{upward} baseline \raisebox{-1ex}{downward} baseline`,{title:'\\raisebox'})}
<p>You can use <code>\height</code>, <code>\depth</code>, <code>\totalheight</code> and <code>\width</code> in the first three arguments. For example, <code>\raisebox{0pt}[0.9\height]{text}</code> acts as if the box is only 90% of its height above the baseline.</p>

${tp('Paragraph boxes')}
<p>You make paragraph boxes with <code>\parbox</code> or the <code>minipage</code> environment. The text is typeset in paragraph mode in a box of the given width. The optional position (<code>c</code>, <code>t</code> or <code>b</code>) sets the vertical position against the baseline. The default is the center.</p>
<pre class="lx-verb">\parbox[pos]{width}{text}

\begin{minipage}[pos]{width}
  ... text ...
\end{minipage}</pre>
<p>The book prints the position and the width in braces, but the position is an optional argument in square brackets.</p>
<p>When the width is small, LaTeX may leave wide spaces between the words.</p>
${ex(L`\parbox{.3\linewidth}{This is the contents of the left-most parbox.} \hfill CURRENT LINE \hfill
\parbox{.3\linewidth}{This is the right-most parbox. Note that the typeset text looks sloppy because \LaTeX{} cannot nicely balance the material in these narrow columns.}`,{title:'two parboxes'})}
${ex(L`\begin{minipage}[t]{5cm}
A minipage is a paragraph box. It can have lists, tables and footnotes.
\end{minipage}\hfill
\begin{minipage}[b]{5cm}
A second minipage, aligned at the bottom.
\end{minipage}`,{title:'minipage'})}
${match('Box and use',[
 ['\\mbox','text in a box, no frame'],['\\fbox','text in a box, with a frame'],['\\raisebox','move a box up or down'],['\\parbox','a paragraph in a box of fixed width'],['minipage','a paragraph box environment']],{left:'Command',right:'Use'})}
${omr('Boxes',[
 {q:'How does TeX treat a box?',o:['As one character','As a line','As a page','As a paragraph'],a:0,why:'A box is one object. TeX cannot split it.'},
 {q:'Which command makes a box with a frame?',o:['\\mbox','\\fbox','\\raisebox','\\parbox'],a:1,why:'\\fbox has a frame. \\mbox has none.'},
 {q:'Which position letter stretches the text to both edges?',o:['c','l','r','s'],a:3,why:'s means stretch.'},
 {q:'What is the default value of \\fboxsep?',o:['0 pt','3 pt','0.4 pt','1 cm'],a:1,why:'\\fboxsep is 3 pt. \\fboxrule is 0.4 pt.'},
 {q:'What does \\raisebox{-1ex}{x} do?',o:['Raises x','Lowers x','Frames x','Hides x'],a:1,why:'A negative lift lowers the box.'},
 {q:'Which command makes a paragraph box?',o:['\\parbox','\\makebox','\\mbox','\\rule'],a:0,why:'\\parbox or the minipage environment.'}
])}
${must(H`<ol>
<li>Box types: LR, Par, Rule.</li>
<li><code>\mbox</code> <code>\fbox</code> <code>\makebox[w][pos]</code> <code>\framebox[w][pos]</code>; pos = c l r s.</li>
<li><code>\fboxrule</code> (0.4 pt), <code>\fboxsep</code> (3 pt). <code>\raisebox{lift}[depth][height]{…}</code>.</li>
<li><code>\parbox[pos]{width}{…}</code>, <code>minipage</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 15 · Floating images (Tutorial XI.1) ───────────── */
STATIONS.push({id:'m4-floats',title:'Floating figures',short:'15 · Floats',est:'~30 min',body:H`
${gist('A figure environment is a float. LaTeX moves it to a good place. Use [htbp] to give LaTeX the places that it can use.')}

${tp('The figure environment')}
<p>A figure never splits between pages. A big figure can leave blank space at the bottom of a page. LaTeX gives <b>floating figures</b>. LaTeX moves them to good places, so LaTeX does the positioning.</p>
${ex(L`\begin{figure}
\centering
\includegraphics{figure.eps}
\caption{This is an inserted EPS graphic}
\label{fig1}
\end{figure}
See Figure~\ref{fig1}.`,{title:'a floating figure',pre:'\\usepackage{graphicx}'})}
<p>The preview shows a gray placeholder for the image file. The Real PDF tab needs the real file.</p>
<h5>Features</h5>
<ul>
  <li>Put <code>\label</code> immediately after <code>\caption</code>. Then you can use <code>\ref</code> and <code>\pageref</code>.</li>
  <li>A figure with no <code>\caption</code> is an unnumbered floating figure.</li>
  <li>A figure with several <code>\caption</code> commands makes several figures that float together.</li>
  <li><code>\listoffigures</code> makes a list of figures.</li>
  <li><code>\caption[List text]{Caption text}</code> puts the short text in the list of figures.</li>
  <li>You can use <code>figure</code> only in outer paragraph mode. Do not use it inside a <code>parbox</code> or <code>minipage</code>.</li>
  <li>A figure inside a paragraph is processed at the end of the paragraph.</li>
</ul>

${tp('Figure placement')}
<p>The optional argument gives the places that LaTeX can use:</p>
<div class="scroll-x"><table class="ref"><tr><th>Letter</th><th>Place</th></tr>
<tr><td><code>h</code></td><td>here, where the command is. LaTeX cannot do this when there is not enough room on the page</td></tr>
<tr><td><code>t</code></td><td>at the top of a page</td></tr>
<tr><td><code>b</code></td><td>at the bottom of a page</td></tr>
<tr><td><code>p</code></td><td>on a page that has only floats</td></tr>
</table></div>
<p>If you give no argument, the default is <code>[tbp]</code>. LaTeX holds a float until it can place it at a good location. The floats that LaTeX has read and not yet placed are <b>unprocessed floats</b>. These commands process them:</p>
<ul>
  <li><code>\clearpage</code> places the unprocessed floats and starts a new page.</li>
  <li><code>\FloatBarrier</code> (package <code>placeins</code>) processes all unprocessed floats. It does not start a new page.</li>
  <li><code>\usepackage[section]{placeins}</code> inserts <code>\FloatBarrier</code> before each section. This is strict: a float cannot come after the start of the next section.</li>
  <li><code>\usepackage[below]{placeins}</code> is less strict. A float can come after the new section starts if some of the previous section is on the page.</li>
  <li><code>\afterpage{\clearpage}</code> (package <code>afterpage</code>) runs <code>\clearpage</code> at the next natural page break. This is useful for small float pages.</li>
</ul>
${think('Default placement',L`\begin{figure} ... \end{figure}`,['[h]','[tbp]','[p] only','[b] only'],1,'The default is [tbp].')}

${tp('Customizing float placement')}
<p>These parameters prevent pages with too many floats.</p>
<div class="scroll-x"><table class="ref"><tr><th>Counter</th><th>Meaning</th><th>Default</th></tr>
<tr><td><code>topnumber</code></td><td>maximum floats at the top of a text page</td><td>2</td></tr>
<tr><td><code>bottomnumber</code></td><td>maximum floats at the bottom of a text page</td><td>1</td></tr>
<tr><td><code>totalnumber</code></td><td>maximum floats on a text page</td><td>3</td></tr>
</table></div>
<p>Set them with <code>\setcounter</code>, for example <code>\setcounter{totalnumber}{2}</code>. They do not affect float pages. The character <code>!</code> in the placement argument makes LaTeX ignore them.</p>
<div class="scroll-x"><table class="ref"><tr><th>Fraction</th><th>Meaning</th><th>Default</th></tr>
<tr><td><code>\textfraction</code></td><td>minimum part of a text page for text</td><td>0.2</td></tr>
<tr><td><code>\topfraction</code></td><td>maximum part of a text page for floats at the top</td><td>0.7</td></tr>
<tr><td><code>\bottomfraction</code></td><td>maximum part of a text page for floats at the bottom</td><td>0.3 (the book also says 0.4 in the text)</td></tr>
<tr><td><code>\floatpagefraction</code></td><td>minimum part of a float page for floats</td><td>0.5</td></tr>
</table></div>
<p>Set them with <code>\renewcommand</code>, for example <code>\renewcommand{\textfraction}{0.3}</code>. The first three apply to text pages. The <code>!</code> option ignores them. <code>\floatpagefraction</code> applies to float pages and is always used.</p>

${tp('Graphics')}
<p>LaTeX can import many graphic formats. The easiest is Encapsulated PostScript (EPS). Use <code>\includegraphics[options]{filename}</code>. You need the package <code>graphicx</code>.</p>
<div class="scroll-x"><table class="ref"><tr><th>Option</th><th>Meaning</th></tr>
<tr><td><code>width</code></td><td>width of the graphic</td></tr>
<tr><td><code>height</code></td><td>height of the graphic</td></tr>
<tr><td><code>totalheight</code></td><td>height plus depth</td></tr>
<tr><td><code>scale</code></td><td>scale factor. <code>scale=2</code> gives twice the size</td></tr>
<tr><td><code>angle</code></td><td>rotation in degrees. A positive angle is counter-clockwise</td></tr>
</table></div>
${ex(L`\includegraphics[width=1in]{tex.png}
\includegraphics[height=1.5in]{tex.png}
\includegraphics[scale=.25,angle=45]{tex.png}`,{title:'\\includegraphics options',pre:'\\usepackage{graphicx}'})}
<ul>
  <li><code>\graphicspath{{dir1/}{dir2/}}</code> tells LaTeX to look for graphics also in dir1/ and dir2/.</li>
  <li><code>\DeclareGraphicsExtensions{.eps,.ps,.eps.gz}</code> gives the extensions that LaTeX tries when you give a file name with no extension. With it, <code>\includegraphics{file}</code> finds <code>file.eps</code> first.</li>
</ul>
${fill('Float letters',L`The letter [[h]] means here. The letter [[t]] means top. The letter [[b]] means bottom. The letter [[p]] means a page of floats. The default is [[tbp]].`,{strict:false})}
${omr('Floats',[
 {q:'Which command goes after \\caption for a reference?',o:['\\label','\\ref','\\cite','\\index'],a:0,why:'\\label must follow \\caption.'},
 {q:'Which command places the unprocessed floats and starts a new page?',o:['\\clearpage','\\FloatBarrier','\\afterpage','\\newpage'],a:0,why:'\\clearpage does both. \\FloatBarrier does not start a new page.'},
 {q:'Which package gives \\FloatBarrier?',o:['placeins','afterpage','graphicx','float2'],a:0,why:'The package placeins.'},
 {q:'What is the default maximum number of floats at the bottom of a text page?',o:['0','1','2','3'],a:1,why:'bottomnumber is 1.'},
 {q:'What does angle=90 do in \\includegraphics?',o:['Rotates 90 degrees counter-clockwise','Scales to 90 percent','Crops','Makes the width 90 pt'],a:0,why:'A positive angle is counter-clockwise.'},
 {q:'Which option scales a graphic to twice its size?',o:['scale=2','width=2','size=2','angle=2'],a:0,why:'scale=2.'}
])}
${must(H`<ol>
<li><code>figure</code>: <code>\centering</code>, <code>\includegraphics</code>, <code>\caption</code>, <code>\label</code> (after caption).</li>
<li>Placement: h t b p, default tbp. <code>\clearpage</code>, <code>\FloatBarrier</code>, <code>\afterpage</code>.</li>
<li>Counters and fractions with their defaults.</li>
<li><code>\includegraphics</code> options. <code>\graphicspath</code>. <code>\DeclareGraphicsExtensions</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 16 · Cross references (Tutorial XII) ───────────── */
STATIONS.push({id:'m4-refs',title:'Cross references',short:'16 · Cross references',est:'~20 min',body:H`
${gist('Put \\label{key} at the thing. Write \\ref{key} where you refer to it. Run LaTeX two times.')}

${tp('Why cross references')}
<p>A cross reference tells the reader to look at something that you wrote in another place of the same document. For example, you explain a term in section 2 and you use it again in section 4. A cross reference is a courtesy to the reader. In mathematics, you may cite an earlier result in a proof.</p>
<p>You can write cross references by hand. But when you add a section or a theorem, you must change all the numbers. LaTeX can do this for you.</p>

${tp('Let LaTeX do it')}
<ol>
  <li>Give the object a key: <code>\section{section name}\label{key}</code>.</li>
  <li>At the place of the reference, write <code>\ref{key}</code>.</li>
</ol>
<p>You can put <code>\label</code> anywhere in the section. It does not need to be immediately after <code>\section</code>.</p>
${ex(L`\section{Why cross references}\label{intro}
Text of the first section.
\section{The next section}
See Section~\ref{intro} for the reason.`,{title:'\\label and \\ref'})}
<ul>
  <li>The first run writes the reference data to the <code>.aux</code> file. LaTeX prints: <i>LaTeX Warning: There were undefined references.</i> and <i>Rerun to get cross-references right.</i></li>
  <li>The second run gets the references right. Run LaTeX again when you add a section.</li>
  <li>The key can have letters, digits and punctuation. Use a mnemonic, for example <code>\label{limcon}</code> for "Limits and Continuity".</li>
  <li>Write <code>~\ref{limcon}</code> with a tie. The tie stops a line break between the word and the number.</li>
</ul>
<h5>Items</h5>
<p>You can refer to an <code>\item</code> of an <code>enumerate</code> list. Attach a <code>\label</code> to the item.</p>
${ex(L`In the classical \emph{syllogism}
\begin{enumerate}
\item All men are mortal.\label{pre1}
\item Socrates is a man.\label{pre2}
\item So Socrates is a mortal.\label{con}
\end{enumerate}
Statements (\ref{pre1}) and (\ref{pre2}) are the \emph{premises} and statement (\ref{con}) is the conclusion.`,{title:'refer to list items'})}
<h5>Floats</h5>
<p>For a table or a figure, give the <code>\label</code> after the <code>\caption</code> or in its argument. You can have several <code>\caption</code> and <code>\label</code> pairs in one environment. A <code>\caption</code> acts like a sectioning command inside the environment.</p>
${ex(L`\begin{table}[h]
\begin{center}
\begin{tabular}{|c|c|c|c|}
\hline
Value of $x$ & 1 & 2 & 3\\
\hline
Value of $y$ & 1 & 8 & 27\\
\hline
\end{tabular}
\caption{Observed values of $x$ and $y$}\label{tabxy}
\end{center}
\end{table}
Two possible relations between $x$ and $y$ satisfying the data in Table~\ref{tabxy} are $y=x^3$ and $y=6x^2-11x+6$.`,{title:'refer to a table'})}
<p>You can also make forward references. Use <code>\ref</code> with the key of a later <code>\label</code>.</p>

${tp('Cross references in mathematics')}
<p>The method is the same for theorems and equations. If you define <code>\newtheorem{theorem}[subsection]{Theorem}</code>, then <code>\begin{theorem}\label{diffcon}</code> numbers the theorem. Elsewhere, write <code>Theorem~\ref{diffcon}</code>. For equations, put the <code>\label</code> inside the <code>equation</code> environment. Write <code>Equation~(\ref{sumsq})</code>. With amsmath, <code>\eqref{sumsq}</code> prints the number with parentheses.</p>
${ex(L`\documentclass{article}
\usepackage{amsmath}
\newtheorem{theorem}{Theorem}
\begin{document}
\begin{theorem}\label{diffcon}
Every differentiable function is continuous.
\end{theorem}
The converse of Theorem~\ref{diffcon} is false.
\begin{equation}\label{sumsq}
(x+y)^2=x^2+2xy+y^2
\end{equation}
Changing $y$ to $-y$ in Equation~(\ref{sumsq}) gives $(x-y)^2=x^2-2xy+y^2$. Also see \eqref{sumsq}.
\end{document}`,{title:'theorem and equation references',run:true})}
${trap(H`<p>In a float, <code>\label</code> before <code>\caption</code> gives the number of the section, not of the float.</p>`)}
${fill('Cross references',L`Put [[\label]]{key} after the caption. Refer to it with [[\ref]]{key}. Use a [[tie¦~]] before the command.`,{code:false,strict:false})}
${omr('Cross references',[
 {q:'Where does LaTeX store the reference data?',o:['In the .aux file','In the .bib file','In the .idx file','In the .toc file'],a:0,why:'The .aux file.'},
 {q:'How many runs give correct references after you add a section?',o:['One','Two','Three','Four'],a:1,why:'Run LaTeX two times.'},
 {q:'Where do you put \\label for a table?',o:['After \\caption','Before \\caption','In the preamble','After \\end{table}'],a:0,why:'After \\caption, or in its argument.'},
 {q:'Why do you write ~\\ref{key}?',o:['It stops a line break before the number','It makes the number bold','It is required','It adds a space'],a:0,why:'The tie is an unbreakable space.'},
 {q:'Which command prints (3) for an equation?',o:['\\eqref{key}','\\pageref{key}','\\cite{key}','\\index{key}'],a:0,why:'\\eqref is from amsmath.'}
])}
${must(H`<ol>
<li><code>\label{key}</code> + <code>\ref{key}</code>; the warnings; two runs.</li>
<li>Mnemonic keys; the tie <code>~</code>.</li>
<li>Labels on items; labels after <code>\caption</code>; theorems; equations (<code>\eqref</code>).</li>
</ol>`)}
`});

/* ───────────── Unit 17 · Footnotes (Tutorial XIII.1) ───────────── */
STATIONS.push({id:'m4-footnotes',title:'Footnotes',short:'17 · Footnotes',est:'~25 min',body:H`
${gist('\\footnote{text} comes straight after the word that needs the note. LaTeX numbers the notes and puts them at the bottom of the page.')}

${tp('Footnotes')}
<p>The command <code>\footnote{footnote text}</code> comes immediately after the word that needs a footnote. The text goes at the bottom of the page in a smaller typeface. The first line is indented and has the same marker as the text. A short horizontal line separates the first footnote from the page text. The standard marker is a small raised number.</p>
${ex(L`The standard footnote marker is a small, raised number\footnote{See how the footnote is produced.}, which is sequentially numbered.`,{title:'a footnote'})}
<ul>
  <li>In the <code>article</code> class, the footnote numbers continue through the document. In <code>report</code> and <code>book</code>, they restart at 1 in each chapter.</li>
  <li>A <code>\footnote</code> inside a <code>minipage</code> uses the counter <code>mpfootnote</code>. The note goes at the bottom of the minipage, with lowercase letters.</li>
  <li>A <code>\footnotemark</code> in a minipage makes a mark in the style and sequence of the main text. Put the matching <code>\footnotetext</code> after the minipage. The note then goes at the bottom of the page.</li>
</ul>
${ex(L`\begin{minipage}{5cm}
Footnotes in a minipage are numbered using lowercase letters.\footnote{Inside minipage}
\par This text references a footnote at the bottom of the page.\footnotemark
\end{minipage}
\footnotetext{At bottom of page}`,{title:'footnotes and minipage'})}
${think('Footnote counter',L`article class: 3 footnotes in section 1, then \section{Two} with 1 footnote.`,['The note in section 2 is number 1','The note in section 2 is number 4','It is number 0','It has no number'],1,'In the article class, the numbers continue through the document.')}

${tp('Footnotes in tabular material')}
<p>Standard LaTeX does not typeset a footnote inside a <code>tabular</code>. Only the environments <code>tabularx</code> and <code>longtable</code> do it correctly. The notes then appear at the bottom of the page, not below the table.</p>
<p>There are two methods for table notes:</p>
<ul>
  <li><b>minipage</b>: put the table in a <code>minipage</code>. The notes come after it. Use <code>\renewcommand{\thefootnote}{\thempfootnote}</code> inside, so that <code>\footnotemark[\value{mpfootnote}]</code> works. You may need to change the width of the minipage.</li>
  <li><b>threeparttable</b>: this package by Donald Arseneau gives control of the marks. It has <code>\tnote{a}</code> in the cells and a <code>tablenotes</code> environment. It also allows a caption.</li>
</ul>
<pre class="lx-verb">\begin{threeparttable}
\caption{PostScript type 1 fonts}
\begin{tabular}{ll}
Courier\tnote{a} &amp; cour, courb \\
Nimbus\tnote{b}  &amp; unmr, unmrs
\end{tabular}
\begin{tablenotes}
\item[a] Donated by IBM.
\item[b] Donated by URW GmbH.
\end{tablenotes}
\end{threeparttable}</pre>
<p>The live preview does not typeset <code>threeparttable</code>. Use the Real PDF tab.</p>

${tp('Customizing footnotes')}
<ul>
  <li>To restart the numbers in each section of an article, put <code>\setcounter{footnote}{0}</code> before each section. Or put <code>\@addtoreset{footnote}{section}</code> in the preamble, between <code>\makeatletter</code> and <code>\makeatother</code>.</li>
  <li>To change the marker style, use <code>\renewcommand{\thefootnote}{\roman{footnote}}</code>. The styles are <code>\arabic</code>, <code>\roman</code>, <code>\Roman</code>, <code>\alph</code>, <code>\Alph</code>, and <code>\fnsymbol</code>.</li>
  <li><code>\fnsymbol</code> prints the counter values 1 to 9 as symbols: * † ‡ § ¶ ‖ ** †† ‡‡. You must reset the counter before the tenth footnote.</li>
  <li><code>\footnote[num]{text}</code> uses the number num as the marker. LaTeX does not increase the counter.</li>
  <li>Restore the style with <code>\renewcommand{\thefootnote}{\arabic{footnote}}</code>. Otherwise all later footnotes keep the symbols.</li>
</ul>
${ex(L`\renewcommand{\thefootnote}{\fnsymbol{footnote}}
First note\footnote{The first symbol.} and second note\footnote{The second symbol.}.
\renewcommand{\thefootnote}{\arabic{footnote}}`,{title:'symbols for footnotes'})}
<p>The size of the footnote text is set by <code>\footnotesize</code>. Other style parameters (such as <code>\footnoterule</code>) change the look of the footnotes.</p>
${fix('Footnote with symbols',L`\documentclass{article}
\begin{document}
Text\footnote{First note.} and more\footnote{Second note.}.
\end{document}`,{brief:'Change the code so that the footnote marks are symbols (*, †). Then restore the numbers for later notes.',checks:[{re:'\\\\fnsymbol',msg:'\\fnsymbol{footnote}'},{re:'\\\\arabic\\{footnote\\}',msg:'restore with \\arabic{footnote}'}]})}
${omr('Footnotes',[
 {q:'Where does \\footnote come?',o:['Immediately after the word','At the end of the paragraph','In the preamble','On its own line'],a:0,why:'Put it immediately after the word that needs the note.'},
 {q:'Which counter does a footnote in a minipage use?',o:['mpfootnote','footnote','page','section'],a:0,why:'mpfootnote.'},
 {q:'Which command makes a mark with no text?',o:['\\footnotemark','\\footnotetext','\\thanks','\\marginpar'],a:0,why:'\\footnotemark makes the mark. \\footnotetext gives the text.'},
 {q:'Which package gives \\tnote?',o:['threeparttable','longtable','array','multirow'],a:0,why:'threeparttable.'},
 {q:'Which command prints footnote numbers as symbols?',o:['\\fnsymbol','\\symbol','\\roman','\\footsymbol'],a:0,why:'\\fnsymbol, for the values 1 to 9.'},
 {q:'What does \\footnote[7]{text} do?',o:['Uses 7 as the marker and does not increase the counter','Sets the counter to 7','Makes 7 notes','An error'],a:0,why:'The optional argument is the marker.'}
])}
${must(H`<ol>
<li><code>\footnote{…}</code>. <code>\footnotemark</code> and <code>\footnotetext</code>. Counter <code>mpfootnote</code>.</li>
<li>Tables: minipage, <code>threeparttable</code>, <code>longtable</code>.</li>
<li><code>\thefootnote</code>, <code>\fnsymbol</code>, <code>\footnote[num]</code>, reset the counter.</li>
</ol>`)}
`});

/* ───────────── Unit 18 · Presentation: beamer (Text 2, 12.1–12.2.4) ───────────── */
STATIONS.push({id:'m4-beamer1',title:'Presentations with beamer',short:'18 · Beamer basics',est:'~45 min',body:H`
${gist('The class beamer makes slides. Each slide is a frame. Use \\frametitle for the title and \\pause or overlay specifications to show things step by step.')}
<p class="mini">Source: Grätzer, <i>More Math into LaTeX</i>, Chapter 12. The live preview shows the slides as pages in a row. Use the Real PDF tab for the exact PDF.</p>

${tp('Quick and dirty beamer')}
<p>The goal of this chapter is to use beamer "out of the box". You change an article to a presentation in a few steps. The result is not a very good presentation. But it shows the basic ideas.</p>
<h5>First changes (preamble and top matter)</h5>
<ol>
  <li>Change the <code>\documentclass</code> to <code>beamer</code>.</li>
  <li>Delete the <code>\usepackage</code> and <code>\newtheorem</code> lines. Beamer loads the packages it needs and defines these declarations.</li>
  <li>Change <code>\address</code> to <code>\institute</code>. This is the beamer command for the address.</li>
  <li>Delete the <code>abstract</code> environment. A presentation does not need it.</li>
</ol>
${ex(L`\documentclass{beamer}
\begin{document}
\title{A construction of complete-simple\\
distributive lattices}
\author{George~A. Menuhin}
\institute{Computer Science Department\\
University of Winnebago\\
Winnebago, MN 53714}
\date{March 15, 2015}
\maketitle
\end{document}`,{title:'the top matter',run:true})}
<h5>Changes in the body</h5>
<ol>
  <li>Delete the <code>notation</code> and <code>proof</code> environments, but keep their contents. An environment can only be used inside a frame. A proof is usually longer than a frame.</li>
  <li>Cut the text into <b>frames</b> (pages, transparencies, foils) with the <code>frame</code> environment. After each <code>\begin{frame}</code>, put <code>\frametitle{…}</code>. The title is at the top of the frame.</li>
  <li>Cut the <code>figure</code> environment. Keep <code>\centering\includegraphics{products}</code> and move it after a <code>\frametitle</code>.</li>
</ol>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Introduction}
In this note, we prove the following result:

\textbf{Theorem.} There exists an infinite complete distributive lattice $K$ with only the two trivial complete congruence relations.
\end{frame}
\begin{frame}
\frametitle{Illustrating the construction}
\centering\includegraphics{products}
\end{frame}
\end{document}`,{title:'two frames',run:true})}

${tp('Making it prettier')}
<ol>
  <li>Add <code>\usetheme{Berkeley}</code> after the <code>\documentclass</code> line.</li>
  <li>Replace <code>\maketitle</code> with <code>\begin{frame}\titlepage\end{frame}</code>. Put a frame after the last (sub)section. Without it, the last section is not in the table of contents.</li>
  <li>Add a frame with <code>\frametitle{Outline}</code> and <code>\tableofcontents[pausesections]</code>. The section titles appear one at a time.</li>
  <li>Use <code>equation*</code> in place of <code>equation</code>. Do not refer to another frame by a number. Delete the <code>\label</code> commands.</li>
  <li>Replace <code>\eqref{…}</code> with text such as "the penultimate equation".</li>
</ol>
${ex(L`\documentclass{beamer}
\usetheme{Berkeley}
\title{A construction of complete-simple distributive lattices}
\author{George~A. Menuhin}
\institute{University of Winnebago}
\date{March 15, 2015}
\begin{document}
\begin{frame}
\titlepage
\end{frame}
\begin{frame}
\frametitle{Outline}
\tableofcontents[pausesections]
\end{frame}
\section{Introduction}
\begin{frame}
\frametitle{Introduction}
In this note, we prove the following result:
\begin{theorem}
There exists an infinite complete distributive lattice $K$ with only the two trivial complete congruence relations.
\end{theorem}
\end{frame}
\section{The construction}
\begin{frame}
\frametitle{The construction}
\begin{equation*}
x\mapsto \Pi^*(x)
\end{equation*}
\end{frame}
\end{document}`,{title:'theme, title page, outline',run:true})}

${tp('Adjusting the navigation')}
<p>The Berkeley theme puts a navigation sidebar on the page. The section titles are in the sidebar. They make the table of contents (the Outline frame). Clicking on a title jumps to that section. Sections play a different role in a presentation: they are navigation tools. Three problems appear in the example:</p>
<ol>
  <li>The title of the presentation is too long for the sidebar. The title of the second section is too long also.</li>
  <li>The author name is not necessary in the sidebar.</li>
  <li>An article has only two sections. A presentation needs more.</li>
</ol>
<p>The solutions:</p>
<ul>
  <li><b>Short forms.</b> Use an optional argument: <code>\title[Complete-simple distributive lattices]{A construction of complete-simple\\ distributive lattices}</code> and <code>\section[Construction]{The $\Pi^{*}$ construction}</code>. The text in brackets is the short version for the sidebar.</li>
  <li><b>No author in the sidebar.</b> Give an empty short form: <code>\author[]{George~A. Menuhin}</code>.</li>
  <li><b>More sections.</b> Add <code>\section[Second result]{The second result}</code>, <code>\section{Proof}</code> and <code>\section{References}</code> before the frames.</li>
</ul>
<p>The Warsaw theme has a different layout. Themes are in section 12.5 of the book chapter. The syllabus does not include that section.</p>
${match('Command and use',[
 ['\\usetheme{Berkeley}','selects a theme'],['\\frametitle{…}','title of the frame'],['\\titlepage','the title page in a frame'],['\\tableofcontents[pausesections]','outline, one section at a time'],['\\institute{…}','the address']],{left:'Command',right:'Use'})}

${tp('Overlays')}
<p>An <b>overlay</b> (a "slide") is one step of a frame. A frame can have one overlay or many. Each overlay from the second on covers the previous one completely. It looks as if the new material appears on the old page. The outline frame with five sections has five overlays.</p>
<h5>\pause</h5>
<p><code>\pause</code> shows the text after it on the next overlay. A frame can have many <code>\pause</code> commands. You cannot give <code>\pause</code> in an AMS multiline math environment. To go to the next overlay, press the space bar or the forward arrow key.</p>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Some background}
We start our discussion with some concepts.
\pause
The first concept we introduce originates with Erd\H os.
\end{frame}
\end{document}`,{title:'\\pause (babybeamer1)',run:true})}
<h5>\only and \onslide</h5>
<p>The syntax is <code>\only&lt;overlay spec&gt;{source}</code>. The code in the argument is typeset only on the overlays you give. On other overlays, it is ignored, so the other text can move.</p>
<p><code>\onslide&lt;overlay spec&gt;{source}</code> typesets the code on the overlays you give. On the other overlays it is typeset but invisible. The text does not move. You often need this behavior.</p>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Some background}
\only<1,2>{We start our discussion with some concepts.}
\only<2>{The first concept we introduce originates with Erd\H os.}
\end{frame}
\begin{frame}
\frametitle{With \textbackslash onslide}
\onslide<1,2>{We start our discussion with some concepts.}
\onslide<2>{The first concept we introduce originates with Erd\H os.}
\end{frame}
\end{document}`,{title:'\\only and \\onslide (babybeamer2)',run:true})}
${think('What happens to line 1?',L`\only<1,2>{First line.}
\only<2>{Second line.}`,['It stays at the same place','It moves up when the second line appears','It disappears on overlay 2','An error'],1,'\\only ignores the second line on overlay 1, so the first line moves when the second line is added. \\onslide keeps the room.')}
<h5>How LaTeX typesets the overlays</h5>
<ul>
  <li>Source with <b>no</b> overlay specification: on all overlays.</li>
  <li>The argument of <code>\only</code>: only on the overlays you give. Ignored on the others.</li>
  <li>The argument of <code>\onslide</code>: on the overlays you give. Typeset but invisible on the others.</li>
</ul>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
This is a very \only<1>{very, very} important concept.
\only<1,2>{To start the definition \dots}
\end{frame}
\begin{frame}
What is $2+2$? It is \onslide<2>{$4$}.
\only<1>{Can you figure it out?}
\onslide<2>{I hope you all got it right.}
\end{frame}
\end{document}`,{title:'the examples of the book',run:true})}
<h5>Overlay specifications</h5>
<div class="scroll-x"><table class="ref"><tr><th>Specification</th><th>Meaning</th></tr>
<tr><td><code>&lt;1-2,4-&gt;</code></td><td>overlays 1 to 2, and 4 onwards</td></tr>
<tr><td><code>&lt;-3&gt;</code></td><td>all overlays up to 3</td></tr>
<tr><td><code>&lt;2,4,6&gt;</code></td><td>overlays 2, 4 and 6</td></tr>
<tr><td><code>&lt;2-&gt;</code></td><td>overlay 2 and all after it</td></tr>
</table></div>
<p><code>&lt;1-&gt;</code> and <code>&lt;2-&gt;</code> are better than <code>&lt;1,2&gt;</code> and <code>&lt;2&gt;</code>. If you add a third overlay, you do not need to change them. <code>\pause</code> accepts only a number: <code>\pause&lt;3&gt;</code> works from overlay 3.</p>
<p>The overlay specification is attached to a command. The overlays are overlays of the frame that has the command.</p>

${tp('More about \\only and \\onslide')}
<p><code>\only</code> and <code>\onslide</code> can do all that <code>\pause</code> does, and more. Many commands take an overlay specification: <code>\textbf</code>, <code>\textit</code> and <code>\alert</code> (the beamer alternative to <code>\emph</code>).</p>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Some background}
\textbf<1>{We start our discussion with some concepts.}
\textbf<2>{The first concept we introduce originates with Erd\H os.}
\end{frame}
\end{document}`,{title:'\\textbf with an overlay (babybeamer3)',run:true})}
<p>Alternate syntax: <code>\only&lt;1&gt;{text}</code> and <code>\only{text}&lt;1&gt;</code> are the same. With the second syntax you can define your own command: <code>\newcommand{\myblue}{\only{\color{blue}}}</code>. Then <code>\myblue&lt;2&gt;{Some more text}</code> colors the text blue on overlay 2 only.</p>

${tp('Lists as overlays')}
<p>Add an overlay specification to each <code>\item</code> to show a list one item at a time.</p>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Overlaying lists}
We introduce our guests:
\begin{itemize}
\item<1-> R. Padmanabhan
\item<2-> Brian Davey
\item<3-> Harry Lakser
\item<4-> Dick Koch
\end{itemize}
\end{frame}
\end{document}`,{title:'item by item (babybeamer4)',run:true})}
<p>Beamer has a short form: <code>\begin{itemize}[&lt;+-&gt;]</code>. It gives each item the next overlay.</p>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Overlaying lists}
We introduce our guests:
\begin{itemize}[<+->]
\item R. Padmanabhan
\item Brian Davey
\item Harry Lakser
\item Dick Koch
\end{itemize}
\end{frame}
\end{document}`,{title:'the short form [<+->] (babybeamer5)',run:true})}
${parsons('A frame with a pause',[L`\begin{frame}`,L`\frametitle{Plan}`,L`First point.`,L`\pause`,L`Second point.`,L`\end{frame}`],{extra:[L`\begin{slide}`]})}
${omr('Beamer basics',[
 {q:'Which class makes a presentation?',o:['slides','beamer','presentation','article'],a:1,why:'\\documentclass{beamer}.'},
 {q:'What is one page of a beamer presentation called?',o:['A frame','A sheet','A block','A box'],a:0,why:'A frame is made by the frame environment.'},
 {q:'Which command is the beamer replacement for \\address?',o:['\\institute','\\place','\\affiliation','\\date'],a:0,why:'\\institute.'},
 {q:'Which command shows a title page in a frame?',o:['\\maketitle','\\titlepage','\\title','\\frametitle'],a:1,why:'Put \\titlepage in a frame.'},
 {q:'What is the difference between \\only&lt;2&gt; and \\onslide&lt;2&gt;?',o:['\\onslide keeps the room on other overlays','\\only keeps the room','No difference','\\only is invisible'],a:0,why:'\\onslide typesets the text but makes it invisible. The layout does not move.'},
 {q:'What does &lt;2-&gt; mean?',o:['Overlay 2 and all after it','Overlays 1 and 2','Overlay 2 only','Overlays up to 2'],a:0,why:'A dash after the number means from there onwards.'},
 {q:'What does \\begin{itemize}[&lt;+-&gt;] do?',o:['Shows one item on each overlay','Hides the list','Numbers the list','Sorts the list'],a:0,why:'Each item appears on the next overlay.'},
 {q:'In the sidebar, what does \\author[]{Name} do?',o:['Shows no author name','Shows the name twice','An error','Shows the name in bold'],a:0,why:'The short form is empty.'}
])}
${must(H`<ol>
<li>Article → beamer: class, delete packages, <code>\institute</code>, delete abstract.</li>
<li><code>frame</code>, <code>\frametitle</code>, <code>\titlepage</code>, <code>\usetheme</code>, <code>\tableofcontents[pausesections]</code>.</li>
<li>Short forms in brackets for the sidebar. Sections are navigation.</li>
<li>Overlays: <code>\pause</code>, <code>\only</code>, <code>\onslide</code>, specs <code>&lt;1-2,4-&gt;</code>, <code>[&lt;+-&gt;]</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 19 · Presentation: blocks, columns, colors (Text 2, 12.2.6–12.2.9) ───────────── */
STATIONS.push({id:'m4-beamer2',title:'Blocks, columns and colors',short:'19 · Blocks & colors',est:'~25 min',body:H`
${gist('A block is a titled box. The columns environment puts text side by side. xcolor gives colors, and \\setbeamercolor changes the colors of the theme.')}
<p class="mini">The syllabus omits sections 12.2.5 (out-of-sequence overlays) and 12.2.7 (links). They are not in this unit.</p>

${tp('Blocks and overlays')}
<p>In beamer, a theorem is the content of the <code>theorem</code> environment with a heading. Most themes add colors. The <code>block</code> environment works in the same way, but you give the name of the block. The syntax is:</p>
<pre class="lx-verb">\begin{block}&lt;overlay spec&gt;{title}
  source
\end{block}</pre>
<ul>
  <li>The overlay specification is optional.</li>
  <li>If there is no title, you still need the braces: <code>{}</code>.</li>
  <li>For a block of code with an overlay specification but without a title and without highlighting, use <code>\onslide</code> or <code>\only</code>.</li>
</ul>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Overlaying declarations and graphics}
\begin{block}<1->{Theorem}
Every finite distributive lattice can be embedded in a boolean lattice.
\end{block}
\onslide<2->{\includegraphics{cube}}
\begin{proof}<3->
Use join-irreducible elements.
\end{proof}
\end{frame}
\end{document}`,{title:'a block, a graphic and a proof',run:true})}
${trap(H`<p>If you write <code>\includegraphics&lt;2,-&gt;{cube}</code>, the theorem jumps up on overlay 2 to make room for the graphic. Use <code>\onslide&lt;2-&gt;{\includegraphics{cube}}</code>. The room stays.</p>`)}
${match('Beamer environment and use',[
 ['theorem','a theorem with a heading'],['block','a block with a title that you choose'],['columns','text side by side'],['frame','one slide']],{left:'Environment',right:'Use'})}

${tp('Columns')}
<p>To put text side by side, use the <code>columns</code> environment. Put each column in a <code>column</code> environment. Give the width of the column as an argument. It can be a length (<code>2in</code>) or a part of the width of the frame (<code>0.4\textwidth</code>). The optional argument of <code>columns</code> sets the alignment: <code>t</code> top, <code>c</code> center, <code>b</code> bottom.</p>
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Columns, top alignment}
\begin{columns}[t]
\begin{column}{2in}
Is it true that there is no new result on the Congruence Lattice Characterization Problem?
\end{column}
\begin{column}{2in}
F. Wehrung found a distributive algebraic lattice that cannot be represented as the congruence lattice of a lattice.
\end{column}
\end{columns}
\end{frame}
\end{document}`,{title:'two columns (babybeamer8)',run:true})}

${tp('Coloring')}
<p>An article or a book does not usually have color. A presentation projects in color. Be careful: too much color distracts the audience. Use color to highlight a word or a phrase. Normally you use the color scheme of the theme.</p>
<p>Beamer uses the package <code>xcolor</code> by Uwe Kern. A color model gives the mix of colors: <code>rgb</code> (red, green, blue), <code>cmyk</code> (cyan, magenta, yellow, black) or <code>gray</code>.</p>
<ul>
  <li><code>\color[rgb]{0,1,0}</code> paints everything in its scope green.</li>
  <li><code>\textcolor[rgb]{0,1,0}{This text is green.}</code> colors only the text.</li>
  <li>There are seventeen predefined colors: red, green, blue, cyan, magenta, yellow, orange, violet, purple, brown, pink, olive, black, darkgray, gray, lightgray and white.</li>
  <li>So <code>\textcolor{green}{This text is green.}</code> and <code>{\color{green}This text is green.}</code> give the same result.</li>
  <li><code>\colorbox{green}{Green box}</code> puts the text in a green box. <code>\fcolorbox{red}{green}{Green box}</code> adds a red frame.</li>
  <li>To mix colors: <code>{\color{green!40!yellow} text}</code> is 40% green and 60% yellow.</li>
  <li>Beamer loads <code>xcolor</code> by itself. To give an option to <code>xcolor</code>, put it in the class options: <code>\documentclass[xcolor=dvipsnam]{beamer}</code>.</li>
  <li><code>\setbeamercolor{normal text}{bg=yellow!15}</code> sets the background color of the normal text.</li>
</ul>
${ex(L`\documentclass{beamer}
\begin{document}
\setbeamercolor{normal text}{bg=yellow!15}
\begin{frame}
\frametitle{Colors}
\begin{columns}[t]
\begin{column}{2in}
{\color{red}Is it true that there is no new result on the Congruence Lattice Characterization Problem?}
\end{column}
\begin{column}{2in}
{\color{green}F. Wehrung found a distributive algebraic lattice that cannot be represented as the congruence lattice of a lattice.}
\end{column}
\end{columns}
\textcolor{blue}{Blue text,} \colorbox{green}{a green box,} \fcolorbox{red}{yellow}{a framed box.}
\end{frame}
\end{document}`,{title:'colors (babybeamer9)',run:true})}
${fill('Beamer commands',L`Start a slide with the [[frame]] environment. Put text side by side with the [[columns]] environment. Color a word with [[\textcolor]]{red}{word}. A titled box is a [[block]].`,{strict:false})}
${build('A short presentation',L`\documentclass{beamer}
\begin{document}
Title: My first talk
Two points: LaTeX is free. LaTeX is exact.
\end{document}`,{brief:'Make a frame with the title "My first talk". Show the two points one after the other with \\pause or a list with overlays.',checks:[{re:'\\\\begin\\{frame\\}',msg:'a frame environment'},{re:'\\\\frametitle',msg:'\\frametitle'},{re:'\\\\pause|<\\+->|<1->|\\\\only|\\\\onslide',msg:'a \\pause or an overlay specification'}]})}
${omr('Blocks, columns and colors',[
 {q:'What must a block have if it has no title?',o:['Empty braces','Nothing','A star','A label'],a:0,why:'You still need the braces.'},
 {q:'Which environment puts text side by side?',o:['columns','sidebar','tabular','minipage only'],a:0,why:'The columns environment with column environments.'},
 {q:'What does t in \\begin{columns}[t] mean?',o:['Top alignment','Text','Table','Title'],a:0,why:'t = top, c = center, b = bottom.'},
 {q:'Which package does beamer use for color?',o:['xcolor','color2','colortbl','pgf'],a:0,why:'xcolor by Uwe Kern.'},
 {q:'What does {\\color{green!40!yellow} text} give?',o:['40% green and 60% yellow','40% yellow','Green only','Gray'],a:0,why:'The number after the first color is the part of that color.'},
 {q:'How do you set the background of the normal text?',o:['\\setbeamercolor{normal text}{bg=…}','\\background{…}','\\pagecolor{…}','\\bg{…}'],a:0,why:'\\setbeamercolor.'},
 {q:'How many predefined colors are there in the book list?',o:['Seventeen','Seven','Twenty-five','One hundred'],a:0,why:'The book lists seventeen.'}
])}
${must(H`<ol>
<li><code>\begin{block}&lt;spec&gt;{title}</code>; braces are required.</li>
<li><code>columns[t|c|b]</code> and <code>column{width}</code>.</li>
<li><code>\color</code>, <code>\textcolor</code>, <code>\colorbox</code>, <code>\fcolorbox</code>, <code>!</code> mixing, <code>\setbeamercolor</code>.</li>
<li>Class options for xcolor: <code>\documentclass[xcolor=…]{beamer}</code>.</li>
</ol>`)}
`});
