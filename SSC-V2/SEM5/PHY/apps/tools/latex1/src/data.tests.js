/* ═══════════════════ MODEL TESTS — four papers, each covering Modules I–IV ═══════════════════
   Pattern: Section A (answer any 4 of 6, 3 marks), Section B (any 3 of 5, 6 marks), Section C (any 1 of 2, 10 marks).
   Answers are written in ASD-STE100 style from the book cuts. */
const PAPER_TITLE=n=>`MATHEMATICAL TYPE SETTING SYSTEM — LaTeX · Model Paper ${n} (Modules I–IV)`;
const SEC_A=secband('A','Answer any 4 questions. Each carries 3 marks. Ceiling: 12 marks.');
const SEC_B=secband('B','Answer any 3 questions. Each carries 6 marks. Ceiling: 18 marks.');
const SEC_C=secband('C','Answer any 1 question. Each carries 10 marks.');
const TIP='Sit it closed-book against the clock first. Write the code by hand. Then open the answers and press ▶ run on any code to check it.';

/* ───────────── Model paper 1 ───────────── */
STATIONS.push({id:'test-1',title:'Model paper 1',short:'Model paper 1',est:'~75 min',body:H`
${gist(TIP)}
${paper(PAPER_TITLE('I'),'75 minutes','40')}
${SEC_A}
${qa('3 m','1. Name the ten special characters of TeX. State how to print each one.',H`
<p>The ten characters are <code>~ # $ % ^ &amp; _ \ { }</code>. TeX uses them for its own work.</p>
<div class="scroll-x"><table class="ref"><tr><th>Print</th><th>Type</th></tr>
<tr><td>~</td><td><code>\textasciitilde</code></td></tr><tr><td>#</td><td><code>\#</code></td></tr><tr><td>$</td><td><code>\$</code></td></tr>
<tr><td>%</td><td><code>\%</code></td></tr><tr><td>^</td><td><code>\textasciicircum</code></td></tr><tr><td>&amp;</td><td><code>\&amp;</code></td></tr>
<tr><td>_</td><td><code>\_</code></td></tr><tr><td>\</td><td><code>\textbackslash</code></td></tr><tr><td>{ }</td><td><code>\{ \}</code></td></tr></table></div>
${ex(L`\# \$ \% \& \_ \{ \} \textbackslash`,{title:'print the characters'})}`)}
${qa('3 m','2. Write the syntax of \\documentclass. Give the options for font size and paper size.',H`
<p>The syntax is <code>\documentclass[options]{class}</code>. Options are in square brackets. The class is in braces.</p>
<ul><li>Font size: <code>10pt</code> (default), <code>11pt</code>, <code>12pt</code>.</li>
<li>Paper size: <code>letterpaper</code> (default), <code>legalpaper</code>, <code>executivepaper</code>, <code>a4paper</code>, <code>a5paper</code>, <code>b5paper</code>.</li></ul>
${ex(L`\documentclass[12pt,a4paper]{article}
\begin{document}
Text.
\end{document}`,{title:'class with options'})}`)}
${qa('3 m','3. State the difference between the quote, quotation and verse environments.',H`
<ul><li><code>quote</code>: a quotation of one paragraph.</li>
<li><code>quotation</code>: a quotation of several paragraphs. Blank lines separate the paragraphs.</li>
<li><code>verse</code>: poetry. <code>\\</code> breaks a line. A blank line separates two stanzas.</li></ul>`)}
${qa('3 m','4. Show how to number corollaries in the same sequence as theorems.',H`
<p>Define the theorem first. Then give its name as the optional argument of the corollary definition.</p>
${ex(L`\documentclass{article}
\newtheorem{thm}{Theorem}
\newtheorem{cor}[thm]{Corollary}
\begin{document}
\begin{thm}A theorem.\end{thm}
\begin{cor}A corollary.\end{cor}
\end{document}`,{title:'a shared counter',run:true})}`)}
${qa('3 m','5. Explain the commands \\fbox and \\makebox with the position letters.',H`
<p><code>\fbox{text}</code> puts the text in a frame. <code>\makebox[width][pos]{text}</code> makes a box of the given width with no frame. The position letter is <code>c</code> (default, center), <code>l</code> (left), <code>r</code> (right) or <code>s</code> (stretch between the edges). <code>\framebox[width][pos]{text}</code> is the framed form.</p>
${ex(L`\fbox{a box}\ \makebox[4cm][r]{right}|\ \framebox[4cm][s]{a few words of advice}`,{title:'boxes'})}`)}
${qa('3 m','6. Explain the overlay specifications &lt;1-2,4-&gt; and &lt;-3&gt; in beamer.',H`
<p>&lt;1-2,4-&gt; means overlays 1 and 2, and all overlays from 4 onwards. &lt;-3&gt; means all overlays up to 3. &lt;2,4,6&gt; means overlays 2, 4 and 6. <code>\pause</code> accepts only a single number.</p>`)}

${SEC_B}
${qa('6 m','7. Explain the commands for the title, the abstract and the sectioning levels. Give an example.',H`
<ul><li>Title: <code>\title</code>, <code>\author</code>, <code>\date</code>, then <code>\maketitle</code>. <code>\and</code> puts authors side by side. <code>\thanks</code> adds a footnote.</li>
<li>Abstract: the <code>abstract</code> environment, in article and report. The book class has none.</li>
<li>Sectioning: <code>\chapter</code> (book, report), <code>\section</code>, <code>\subsection</code>, <code>\subsubsection</code>, <code>\paragraph</code>, <code>\subparagraph</code>. The starred form has no number.</li></ul>
${ex(L`\documentclass{article}
\title{Field Report}
\author{R. Nair}
\date{\today}
\begin{document}
\maketitle
\begin{abstract}
A short abstract.
\end{abstract}
\section{Method}
\subsection{Data}
\section*{Unnumbered}
\end{document}`,{title:'title, abstract and sections',run:true})}`)}
${qa('6 m','8. Make a table with a heading over two columns, lines, and a line under the heading.',H`
<p>Use <code>\multicolumn{2}{c|}{…}</code> for the heading and <code>\cline{2-3}</code> for the line. Write <code>c|</code> to keep the last vertical line.</p>
${ex(L`\begin{tabular}{|l|r|r|}
\hline
Planet & \multicolumn{2}{c|}{Distance from sun (km)}\\
\cline{2-3}
& Maximum & Minimum\\
\hline
Mercury & 69400000 & 46800000\\
\hline
\end{tabular}`,{title:'multicolumn and cline'})}`)}
${qa('6 m','9. Typeset two aligned equations with a text line between them, and a definition by cases.',H`
${ex(L`\begin{align*}
x+y-z & = 1\\
x-y+z & = 1\\
\intertext{and by hypothesis}
x+y+z & = 1
\end{align*}
\begin{equation*}
|x| = \begin{cases} x & \text{if $x\ge 0$}\\ -x & \text{if $x\le 0$}\end{cases}
\end{equation*}`,{title:'align* and cases',pre:AM})}
<p><code>&amp;</code> marks the alignment point. <code>\intertext</code> keeps the alignment. <code>cases</code> makes the left brace.</p>`)}
${qa('6 m','10. Explain the placement options of a figure and the options of \\includegraphics.',H`
<p><code>h</code> here, <code>t</code> top, <code>b</code> bottom, <code>p</code> a page of floats. The default is <code>[tbp]</code>. <code>\clearpage</code> processes the unprocessed floats and starts a new page. <code>\FloatBarrier</code> (placeins) processes them with no new page.</p>
<p>Options of <code>\includegraphics</code>: <code>width</code>, <code>height</code>, <code>totalheight</code>, <code>scale</code> and <code>angle</code> (counter-clockwise).</p>`)}
${qa('6 m','11. How do you customize footnote marks? Give the commands.',H`
<ul><li><code>\renewcommand{\thefootnote}{\fnsymbol{footnote}}</code> gives symbols for 1 to 9.</li>
<li>Other styles: <code>\arabic</code>, <code>\roman</code>, <code>\Roman</code>, <code>\alph</code>, <code>\Alph</code>.</li>
<li><code>\footnote[num]{text}</code> uses num as the mark and does not increase the counter.</li>
<li>Restore with <code>\renewcommand{\thefootnote}{\arabic{footnote}}</code>.</li>
<li><code>\setcounter{footnote}{0}</code> restarts the numbers.</li></ul>`)}

${SEC_C}
${qa('10 m','12. Explain how to make a bibliography with BibTeX. Give the commands, the entry syntax, the run order and the styles.',H`
<ol><li>Make a database <code>refs.bib</code> with entries such as the one below.</li>
<li>In the document, cite with <code>\cite{key}</code>. Put <code>\bibliographystyle{plain}</code> and <code>\bibliography{refs}</code> where the list must appear.</li>
<li>Run LaTeX, BibTeX, LaTeX, LaTeX.</li></ol>
<pre class="lx-verb">@BOOK{knuth:86a,
  AUTHOR = "Donald E. Knuth",
  TITLE = {The \TeX{}book},
  PUBLISHER = "Addison-Wesley",
  YEAR = 1986 }</pre>
<p>Styles: <code>plain</code> (sorted, numbers), <code>unsrt</code> (order of citation), <code>alpha</code> (name and year labels), <code>abbrv</code> (compact), <code>acm</code>, <code>apalike</code>. <code>\nocite{key}</code> adds an entry that is not cited. The .aux file holds the citations. The .bbl file holds the formatted list.</p>`)}
${qa('10 m','13. Write a beamer presentation with a title page, an outline, a block, two columns and items that appear one at a time.',H`
${ex(L`\documentclass{beamer}
\usetheme{Berkeley}
\title[Short title]{A long title}
\author{A. Author}
\institute{My College}
\date{\today}
\begin{document}
\begin{frame}
\titlepage
\end{frame}
\begin{frame}
\frametitle{Outline}
\tableofcontents[pausesections]
\end{frame}
\section{Ideas}
\begin{frame}
\frametitle{Ideas}
\begin{block}{Claim}
LaTeX is exact.
\end{block}
\begin{columns}[t]
\begin{column}{2in}
Left text.
\end{column}
\begin{column}{2in}
Right text.
\end{column}
\end{columns}
\begin{itemize}[<+->]
\item First
\item Second
\end{itemize}
\end{frame}
\section{End}
\begin{frame}
\frametitle{End}
Thank you.
\end{frame}
\end{document}`,{title:'a short presentation',run:true})}`)}
`});

/* ───────────── Model paper 2 ───────────── */
STATIONS.push({id:'test-2',title:'Model paper 2',short:'Model paper 2',est:'~75 min',body:H`
${gist(TIP)}
${paper(PAPER_TITLE('II'),'75 minutes','40')}
${SEC_A}
${qa('3 m','1. Name the four page styles. State what each one puts in the head and the foot.',H`
<ul><li><code>plain</code>: empty head. The foot has the page number at the center. It is the default for article.</li>
<li><code>empty</code>: empty head and foot.</li>
<li><code>headings</code>: empty foot. The head has the page number and the chapter, section or subsection name. It is the default for book.</li>
<li><code>myheadings</code>: as headings, but you give the text with <code>\markboth</code> or <code>\markright</code>.</li></ul>
<p><code>\thispagestyle{style}</code> changes the current page only.</p>`)}
${qa('3 m','2. How do you change the label of an itemize list for one list only?',H`
<p>Redefine <code>\labelitemi</code> inside braces. The braces make the change local.</p>
${ex(L`{\renewcommand{\labelitemi}{$\triangleright$}
\begin{itemize}
\item First item
\item Second item
\end{itemize}}`,{title:'a local label'})}`)}
${qa('3 m','3. Explain \\label and \\ref. How many runs does LaTeX need?',H`
<p>Put <code>\label{key}</code> at the object (a section, an item, a theorem, an equation, or after the caption of a float). Write <code>~\ref{key}</code> where you refer to it. The first run writes the data to the .aux file. The second run gives the correct numbers. LaTeX shows a warning "Rerun to get cross-references right" after the first run.</p>`)}
${qa('3 m','4. What do \\mathbin and \\mathrel do? Give one use for each.',H`
<p>TeX puts space around binary operators and relations. <code>\mathbin</code> makes TeX treat a symbol as a binary operator. <code>\mathrel</code> makes it a relation.</p>
<p>Example: <code>$x\mathbin\Box y$</code> and <code>$x\mathrel\rho y$</code>.</p>`)}
${qa('3 m','5. Write the command for a green text, a green box and a box with a red frame.',H`
<p><code>\textcolor{green}{text}</code>, <code>\colorbox{green}{text}</code> and <code>\fcolorbox{red}{green}{text}</code>. They need the package xcolor. Beamer loads it. <code>green!40!yellow</code> mixes 40% green with yellow.</p>`)}
${qa('3 m','6. State the differences between the tabbing and tabular environments (any three).',H`
<ul><li>tabbing is only a separate paragraph. tabular can be anywhere, also in mathematics.</li>
<li>tabbing can go over many pages. tabular cannot.</li>
<li>tabbing cannot be nested. tabular can be nested to any level.</li></ul>`)}

${SEC_B}
${qa('6 m','7. Name the natbib citation commands and show their output in author-year mode.',H`
<div class="scroll-x"><table class="ref"><tr><th>Input</th><th>Output</th></tr>
<tr><td><code>\citet{ale91}</code></td><td>Alex et al. (1991)</td></tr>
<tr><td><code>\citep{ale91}</code></td><td>(Alex et al., 1991)</td></tr>
<tr><td><code>\citep[see][chap.~4]{ale91}</code></td><td>(see Alex et al., 1991, chap. 4)</td></tr>
<tr><td><code>\citet*{ale91}</code></td><td>Alex, Mathew, and Ravi (1991)</td></tr>
<tr><td><code>\citeauthor{ale91}</code></td><td>Alex et al.</td></tr>
<tr><td><code>\citeyear{ale91}</code></td><td>1991</td></tr></table></div>
<p>Load it with <code>\usepackage[options]{natbib}</code>. Options: <code>round</code>, <code>square</code>, <code>numbers</code>, <code>super</code>, <code>sort&amp;compress</code>. Each <code>\bibitem</code> needs the optional label with the year, for example <code>\bibitem[Alex(1991)]{ale91}</code>.</p>`)}
${qa('6 m','8. Show how to make a list with the labels Step 1, Step 2 and an inner list with i, ii. Add a description list.',H`
${ex(L`\documentclass{article}
\usepackage{enumerate}
\begin{document}
\begin{enumerate}[\hspace{0.5cm}Step 1.]
\item Prepare a source file
\item Compile it
\begin{enumerate}[i.]
\item Use a previewer
\item Edit the source
\end{enumerate}
\end{enumerate}
\begin{description}
\item[\TeX] A typesetting program
\item[Emacs] A text editor
\end{description}
\end{document}`,{title:'enumerate package and description',run:true})}`)}
${qa('6 m','9. List the matrix environments of amsmath. Typeset a general m × n matrix.',H`
<p><code>matrix</code> (no delimiters), <code>pmatrix</code> ( ), <code>bmatrix</code> [ ], <code>Bmatrix</code> { }, <code>vmatrix</code> | |, <code>Vmatrix</code> ‖ ‖, <code>smallmatrix</code> (for text).</p>
${ex(L`\begin{equation*}
\begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n}\\
a_{21} & a_{22} & \dots & a_{2n}\\
\hdotsfor{4}\\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix}
\end{equation*}`,{title:'a general matrix',pre:AM})}`)}
${qa('6 m','10. Describe the three styles of amsthm. Show a proof with the end mark.',H`
<p><code>plain</code>: bold name, italic body (default). <code>definition</code>: bold name, roman body. <code>remark</code>: italic name, roman body. <code>\theoremstyle{…}</code> selects the style for the next <code>\newtheorem</code> commands.</p>
${ex(L`\documentclass{article}
\usepackage{amsmath,amsthm}
\newtheorem{thm}{Theorem}
\begin{document}
\begin{thm}
The square of the sum of two numbers is equal to the sum of their squares and twice their product.
\end{thm}
\begin{proof}
This follows from $(x+y)^2=x^2+y^2+2xy$.
\end{proof}
\end{document}`,{title:'theorem and proof',run:true})}`)}
${qa('6 m','11. How do you add an entry for a starred heading to the table of contents? What does minitoc do?',H`
<pre class="lx-verb">\chapter*{Forward}
\addcontentsline{toc}{chapter}{\numberline{}Forward}</pre>
<p>The starred form makes no entry by itself. <code>\addcontentsline{file}{type}{text}</code> adds one. <code>\numberline{}</code> keeps the space for the number. The package <code>minitoc</code> makes a small table of contents at the start of each chapter. Use <code>\dominitoc</code> before <code>\tableofcontents</code> and <code>\minitoc</code> after each <code>\chapter</code>.</p>`)}

${SEC_C}
${qa('10 m','12. Explain the tabbing environment. Show \\kill, \\pushtabs and \\poptabs with an example.',H`
<p><code>\=</code> sets a tab stop. <code>\&gt;</code> goes to the next stop. <code>\kill</code> sets the stops of a line and does not print it. <code>\pushtabs</code> stores the stops. <code>\poptabs</code> restores them. <code>\+</code> and <code>\-</code> change the left edge. <code>\｀</code> sets text flush right.</p>
${ex(L`\begin{tabbing}
Program\quad \= : \= \TeX\\[5pt]
Author  \> : \> Donald Knuth\\[5pt]
Manuals  \> :\\
\pushtabs
\quad\= The Advanced \TeX\ Book\quad\= David Salomon\kill\\
\>\textsf{Title}  \>\textsf{Author}\\[8pt]
\>The \TeX Book  \>Donald Knuth\\
\poptabs
Tutorial  \> :  \> tug.org.in
\end{tabbing}`,{title:'tabbing'})}`)}
${qa('10 m','13. Typeset: a sum with limits, large delimiters, a fraction, and an extensible arrow. State the commands used.',H`
${ex(L`\begin{equation*}
\biggl(\sum_{k=1}^n|x_ky_k|\biggr)^2\le
\biggl(\sum_{k=1}^{n}|x_k|\biggr)\biggl(\sum_{k=1}^{n}|y_k|\biggr)
\end{equation*}
\begin{equation*}
\frac{4}{\pi}=1+\cfrac{1^2}{2+\cfrac{3^2}{2+\dotsb}}
\qquad 0\xrightarrow{} A\xrightarrow[\text{monic}]{f} B
\end{equation*}`,{title:'delimiters, fractions, arrows',pre:AM})}
<p><code>\sum_{k=1}^n</code> gives limits. <code>\left … \right</code> and <code>\bigl … \bigr</code> set the size of delimiters. <code>\frac</code>, <code>\cfrac</code> and <code>\binom</code> put one expression over another. <code>\xrightarrow[below]{above}</code> is an arrow that grows to fit its text.</p>`)}
`});

/* ───────────── Model paper 3 ───────────── */
STATIONS.push({id:'test-3',title:'Model paper 3',short:'Model paper 3',est:'~75 min',body:H`
${gist(TIP)}
${paper(PAPER_TITLE('III'),'75 minutes','40')}
${SEC_A}
${qa('3 m','1. Explain family, series and shape of a type style. Give the command for each value.',H`
<div class="scroll-x"><table class="ref"><tr><th>Part</th><th>Values (command / declaration)</th></tr>
<tr><td>Family</td><td>roman <code>\textrm</code> / <code>\rmfamily</code>; sans serif <code>\textsf</code> / <code>\sffamily</code>; typewriter <code>\texttt</code> / <code>\ttfamily</code></td></tr>
<tr><td>Series</td><td>medium <code>\textmd</code> / <code>\mdseries</code>; bold <code>\textbf</code> / <code>\bfseries</code></td></tr>
<tr><td>Shape</td><td>upright <code>\textup</code>; italic <code>\textit</code>; slanted <code>\textsl</code>; small cap <code>\textsc</code></td></tr></table></div>`)}
${qa('3 m','2. How do you number the pages of the preface with Roman numerals and the rest with Arabic numerals?',H`
<p>Write <code>\pagenumbering{roman}</code> at the start of the preface. Write <code>\pagenumbering{arabic}</code> after the first <code>\chapter</code>. The command resets the page counter. <code>\setcounter{page}{n}</code> starts at the number n.</p>`)}
${qa('3 m','3. How do you add a note to a citation? What does \\nocite do?',H`
<p>Use the optional argument: <code>\cite[page~25]{key}</code> prints [1, page 25]. <code>\nocite{key}</code> puts the entry in the list and prints nothing in the text. <code>\nocite{*}</code> adds every entry of the database.</p>`)}
${qa('3 m','4. Explain \\tag, \\tag* and \\notag.',H`
<p><code>\tag{L}</code> replaces the number of an equation with (L). <code>\tag*{L}</code> prints L without parentheses. <code>\notag</code> removes the number of one line. Put them before the line end <code>\\</code>.</p>`)}
${qa('3 m','5. State the difference between \\parbox and the minipage environment.',H`
<p>Both make a paragraph box of a given width: <code>\parbox[pos]{width}{text}</code> and <code>\begin{minipage}[pos]{width} … \end{minipage}</code>. The position is <code>c</code>, <code>t</code> or <code>b</code>. A minipage can have lists, tables and footnotes. Footnotes in a minipage use the counter mpfootnote and letters.</p>`)}
${qa('3 m','6. What does the block environment of beamer need? Give the syntax.',H`
<pre class="lx-verb">\begin{block}&lt;overlay spec&gt;{title}
  source
\end{block}</pre>
<p>The overlay specification is optional. If there is no title, the braces are still required.</p>`)}

${SEC_B}
${qa('6 m','7. Explain how to make an index. Give the forms of the \\index command.',H`
<ol><li>Tag the words with <code>\index{…}</code>.</li><li>Load <code>makeidx</code> and put <code>\makeindex</code> in the preamble.</li><li>Put <code>\printindex</code> where the index must appear.</li><li>Run LaTeX, then <code>makeindex file</code>, then LaTeX.</li></ol>
<ul><li>Sub entry: <code>\index{animal!mammal!cat}</code> (up to three levels).</li><li>Range: <code>\index{table|(}</code> and <code>\index{table|)}</code>.</li><li>Cross-reference: <code>\index{animalism|see{animal}}</code>.</li><li>Sort key: <code>\index{animal@\emph{animal}}</code>.</li><li>Format of the page number: <code>\index{mammal|textbf}</code>.</li></ul>`)}
${qa('6 m','8. Explain the column specifiers l, r, c, p, @ and | with an example.',H`
${ex(L`\begin{tabular}{|c|r@{--}l|p{3cm}|}
\hline
Height & \multicolumn{2}{c|}{Ideal weight} & Note\\
\hline
155 & 53.5 & 64 & A long note that wraps in a narrow column.\\
160 & 56 & 67 & Short note.\\
\hline
\end{tabular}`,{title:'the specifiers'})}
<p><code>l</code> left, <code>r</code> right, <code>c</code> center, <code>p{w}</code> a paragraph box, <code>|</code> a vertical line, <code>@{text}</code> text between the columns with no column space.</p>`)}
${qa('6 m','9. Compare multline and split. Give an example of each.',H`
<p><code>multline*</code>: the first line is flush left, the last line is flush right, the lines between are centered. It is poor for more than two lines. <code>split</code> aligns the lines at <code>&amp;</code>. It is used inside <code>equation</code> or another equation environment.</p>
${ex(L`\begin{multline*}
(a+b+c+d+e)^2=a^2+b^2+c^2+d^2+e^2\\
+2ab+2ac+2ad+2ae+2bc+2bd+2be+2cd+2ce+2de
\end{multline*}
\begin{equation*}
\begin{split}
(a+b)^2 & = (a+b)(a+b)\\
& = a^2+2ab+b^2
\end{split}
\end{equation*}`,{title:'multline and split',pre:AM})}`)}
${qa('6 m','10. Show how to define your own theorem style with \\newtheoremstyle. Explain the nine parameters.',H`
<p>The nine parameters are: name, abovespace, belowspace, bodyfont, indent, headfont, headpunct, headspace, custom-head-spec.</p>
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
\end{document}`,{title:'a custom style',run:true})}
<p>Fonts are declarations such as <code>\scshape</code>. <code>{ }</code> in headspace is a normal space. <code>\newline</code> puts the body on a new line. In the last parameter, <code>#1</code> is the name, <code>#2</code> the number and <code>#3</code> the note.</p>`)}
${qa('6 m','11. Describe the steps to change an article to a beamer presentation.',H`
<ol><li>Change the class to <code>beamer</code>.</li><li>Delete the <code>\usepackage</code> and <code>\newtheorem</code> lines.</li><li>Change <code>\address</code> to <code>\institute</code>. Delete the abstract.</li><li>Cut the text into <code>frame</code> environments. Give each a <code>\frametitle</code>.</li><li>Add <code>\usetheme{…}</code>. Replace <code>\maketitle</code> with a frame that has <code>\titlepage</code>.</li><li>Add an Outline frame with <code>\tableofcontents[pausesections]</code>.</li><li>Use <code>equation*</code> and delete the labels.</li></ol>`)}

${SEC_C}
${qa('10 m','12. Make a long table with a repeating heading. Explain longtable, array and multirow.',H`
<p>The package <code>longtable</code> allows a table over many pages. <code>\endfirsthead</code>, <code>\endhead</code>, <code>\endfoot</code> and <code>\endlastfoot</code> set the rows at the top and bottom of the pages. <code>array</code> gives <code>m{w}</code> (middle), <code>&gt;{decl}</code> and <code>!{text}</code>. <code>multirow</code> gives <code>\multirow{n}{w}{text}</code>; <code>\multirowsetup</code> sets the alignment.</p>
${ex(L`\documentclass{article}
\usepackage{longtable}
\begin{document}
\begin{longtable}{|c|l|}
\hline Year & Event\\ \hline
\endfirsthead
\hline Year & Event (continued)\\ \hline
\endhead
\hline
\endfoot
1900 & Max Planck proposes quantum theory\\
1905 & Einstein presents special relativity\\
1928 & Fleming discovers penicillin\\
\end{longtable}
\end{document}`,{title:'longtable'})}`)}
${qa('10 m','13. Explain \\left, \\right, \\bigl, \\frac, \\dfrac, \\tfrac, \\genfrac and the limits of large operators.',H`
<ul><li><code>\left</code> … <code>\right</code> make a delimiter as large as the content. <code>\left.</code> gives no delimiter.</li>
<li><code>\bigl</code>, <code>\Bigl</code>, <code>\biggl</code>, <code>\Biggl</code> (and the r forms) give fixed larger sizes.</li>
<li><code>\frac</code> is smaller in text. <code>\dfrac</code> is display size. <code>\tfrac</code> is text size.</li>
<li><code>\genfrac{left}{right}{thickness}{style}{top}{bottom}</code> makes a custom fraction.</li>
<li>Limits: in text at the side; in a display above and below. <code>\limits</code> and <code>\nolimits</code> change the place. <code>\displaystyle</code> changes the size too. For integrals the limits stay at the side.</li></ul>
${ex(L`$\sum_{n=1}^\infty\frac{1}{n^2}$ and $\displaystyle\sum_{n=1}^\infty\tfrac{1}{n^2}$
\begin{equation*}
\left(\frac{x-t_i}{t_k-t_i}\right)\qquad \genfrac{(}{)}{0pt}{}{n}{r}\qquad \int\limits_0^\infty\frac{\sin x}{x}\,\mathrm{d}x
\end{equation*}`,{title:'limits and delimiters',pre:AM})}`)}
`});

/* ───────────── Model paper 4 ───────────── */
STATIONS.push({id:'test-4',title:'Model paper 4',short:'Model paper 4',est:'~75 min',body:H`
${gist(TIP)}
${paper(PAPER_TITLE('IV'),'75 minutes','40')}
${SEC_A}
${qa('3 m','1. How do you control the space after a period? Give two cases.',H`
<p>TeX adds extra space after a period that follows a lower case letter. When a sentence ends with an upper case letter, type <code>\@</code> before the period: <code>Vitamin A\@.</code> When a period after a lower case letter is not the end of a sentence, type <code>\ </code> after it: <code>etc.\ are</code>.</p>`)}
${qa('3 m','2. Give the commands of the quotes and dashes. What do - , -- and --- make?',H`
<p><code>｀｀text''</code> makes double quotes. <code>｀text'</code> makes single quotes. <code>\lq</code> and <code>\rq</code> make the left and right single quotes. <code>-</code> is a hyphen. <code>--</code> is a short dash for ranges (221–225). <code>---</code> is a long dash for a comment in a sentence.</p>`)}
${qa('3 m','3. State the use of \\DeclareMathOperator and its starred form.',H`
<p>It defines a new operator name in the preamble. The name is upright, like <code>\sin</code>. <code>\DeclareMathOperator{\cl}{cl}</code> puts the limits at the side. <code>\DeclareMathOperator*{\esup}{ess\,sup}</code> puts the limits below and above.</p>`)}
${qa('3 m','4. State the float counters and their default values.',H`
<p><code>topnumber</code> 2, <code>bottomnumber</code> 1, <code>totalnumber</code> 3. Fractions: <code>\textfraction</code> 0.2, <code>\topfraction</code> 0.7, <code>\bottomfraction</code> 0.3, <code>\floatpagefraction</code> 0.5. Set counters with <code>\setcounter</code> and fractions with <code>\renewcommand</code>. The character ! in the placement ignores the first group.</p>`)}
${qa('3 m','5. What is the difference between \\footnotemark and \\footnotetext?',H`
<p><code>\footnotemark</code> prints the mark only. <code>\footnotetext{text}</code> prints the text at the bottom of the page. They are used together for a note that starts in a minipage or a table.</p>`)}
${qa('3 m','6. Write the beamer commands for two columns with top alignment.',H`
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\begin{columns}[t]
\begin{column}{2in}Left text.\end{column}
\begin{column}{2in}Right text.\end{column}
\end{columns}
\end{frame}
\end{document}`,{title:'columns[t]',run:true})}`)}

${SEC_B}
${qa('6 m','7. Compare the four commands for lists of contents: \\tableofcontents, \\listoffigures, \\listoftables, \\addtocontents.',H`
<p>LaTeX writes headings to the .toc file, figure captions to .lof, table captions to .lot. The commands print them where they are. Two runs are needed. <code>\addtocontents{toc}{\protect\vspace{2ex}}</code> adds formatting. <code>\caption[List text]{Caption text}</code> gives a short text for the list.</p>`)}
${qa('6 m','8. Explain the three kinds of lists with one example each. How do you change a label?',H`
${ex(L`\begin{itemize}\item Bullet\end{itemize}
\begin{enumerate}\item Number\end{enumerate}
\begin{description}\item[Term] Meaning\end{description}
\begin{enumerate}\item[(1)] Own label\end{enumerate}`,{title:'three lists and a label'})}
<p>All three lists have four levels. A text in square brackets after <code>\item</code> replaces the label. <code>\renewcommand{\labelitemi}{…}</code> changes the label of level 1.</p>`)}
${qa('6 m','9. Explain two ways to typeset footnotes in a table.',H`
<p>Standard <code>tabular</code> does not typeset footnotes. (1) Put the table in a <code>minipage</code> and use <code>\renewcommand{\thefootnote}{\thempfootnote}</code> with <code>\footnotemark[\value{mpfootnote}]</code>. (2) Use the package <code>threeparttable</code> with <code>\tnote{a}</code> and the <code>tablenotes</code> environment. <code>tabularx</code> and <code>longtable</code> also handle footnotes, but the notes go to the bottom of the page.</p>`)}
${qa('6 m','10. Explain \\only, \\onslide and \\pause with the overlays that they make.',H`
${ex(L`\documentclass{beamer}
\begin{document}
\begin{frame}
\frametitle{Some background}
\onslide<1,2>{We start with some concepts.}
\only<2>{The first concept is old.}
\pause
Last point.
\end{frame}
\end{document}`,{title:'overlays',run:true})}
<p><code>\only&lt;spec&gt;{x}</code> typesets x on the given overlays. On the others it is ignored, so the text can move. <code>\onslide&lt;spec&gt;{x}</code> typesets x on the given overlays and makes it invisible on the others, so the text stays. <code>\pause</code> shows the text after it on the next overlay.</p>`)}
${qa('6 m','11. Explain how to make cross references to a theorem, an equation and a table.',H`
${ex(L`\documentclass{article}
\usepackage{amsmath}
\newtheorem{theorem}{Theorem}
\begin{document}
\begin{theorem}\label{diffcon}
Every differentiable function is continuous.
\end{theorem}
\begin{equation}\label{sumsq}
(x+y)^2=x^2+2xy+y^2
\end{equation}
The converse of Theorem~\ref{diffcon} is false. See Equation~(\ref{sumsq}) or \eqref{sumsq}.
\end{document}`,{title:'references',run:true})}
<p>For a table or a figure, put <code>\label</code> after <code>\caption</code>.</p>`)}

${SEC_C}
${qa('10 m','12. Write a complete short article with a title, an abstract, a section, a theorem with a proof, an equation, a table with a caption, a footnote and a citation.',H`
${ex(L`\documentclass[11pt,a4paper]{article}
\usepackage{amsmath,amsthm}
\newtheorem{thm}{Theorem}[section]
\title{A Short Note}
\author{A. Student}
\date{\today}
\begin{document}
\maketitle
\begin{abstract}
We state one result.
\end{abstract}
\section{Result}
\begin{thm}\label{t1}
The sum of the angles of a triangle is $180^\circ$.
\end{thm}
\begin{proof}
See Lamport~\cite{les85}.
\end{proof}
By Theorem~\ref{t1} and Table~\ref{tab1}\footnote{A footnote.},
\begin{equation}
a+b+c=\pi.
\end{equation}
\begin{table}[h]
\centering
\begin{tabular}{|c|c|}
\hline Shape & Angles\\ \hline Triangle & 3\\ \hline
\end{tabular}
\caption{Angles}\label{tab1}
\end{table}
\begin{thebibliography}{9}
\bibitem{les85} L. Lamport, \emph{\LaTeX}, Addison-Wesley, 1985.
\end{thebibliography}
\end{document}`,{title:'a complete article',run:true})}`)}
${qa('10 m','13. Explain the navigation of a beamer presentation: themes, sections, short forms and the outline.',H`
<p>The theme (<code>\usetheme{Berkeley}</code>) sets the layout. In Berkeley, the sidebar lists the sections and marks the current one. A click on a section title jumps to it. Sections are navigation tools.</p>
<ul><li>A long title does not fit in the sidebar. Use <code>\title[short]{long}</code>.</li><li>Use <code>\section[short]{long}</code> for a long section title.</li><li>Use <code>\author[]{Name}</code> for no author in the sidebar.</li><li>Put a frame after the last section, or the section is not in the table of contents.</li><li><code>\tableofcontents[pausesections]</code> shows the section titles one at a time. Each step is an overlay, so it is a page in the PDF.</li></ul>
${ex(L`\documentclass{beamer}
\usetheme{Warsaw}
\title[Short]{A very long title for a presentation}
\author[]{George~A. Menuhin}
\begin{document}
\begin{frame}\titlepage\end{frame}
\section[Intro]{The introduction}
\begin{frame}\frametitle{Intro}Text.\end{frame}
\section{Proof}
\begin{frame}\frametitle{Proof}Text.\end{frame}
\end{document}`,{title:'short forms and a theme',run:true})}`)}
`});

/* ═══════════════════ LAST PASS ═══════════════════ */
STATIONS.push({id:'lastpass',title:'Last pass before the exam',short:'Last pass',est:'~15 min',body:H`
${gist('One mixed quiz across all four modules. Mixing the topics is part of the practice. Then read the must-know list.')}
${omr('Mixed: Modules I to IV',[
 {q:'Which command prints a percent sign?',o:['%','\\%','%%','\\percent'],a:1},
 {q:'Which option puts the title on a page of its own?',o:['notitlepage','titlepage','twoside','openany'],a:1},
 {q:'Which file does BibTeX write for LaTeX?',o:['.aux','.bib','.bbl','.idx'],a:2},
 {q:'Which package makes the index?',o:['index','makeidx','idx','natbib'],a:1},
 {q:'Which environment is for poetry?',o:['quote','quotation','verse','poem'],a:2},
 {q:'Which command sets a tab stop in tabbing?',o:['\\>','\\=','\\kill','\\+'],a:1},
 {q:'Which specifier gives a paragraph column?',o:['l','c','r','p{…}'],a:3},
 {q:'Which package gives align and split?',o:['amsmath','array','enumerate','multirow'],a:0},
 {q:'Which environment makes a left brace in a display?',o:['cases','gather','split','array'],a:0},
 {q:'Which command makes a bold italic vector?',o:['\\mathbf','\\boldsymbol','\\textbf','\\mathbold'],a:1},
 {q:'Which command defines a theorem environment?',o:['\\newtheorem','\\theorem','\\proof','\\newenvironment'],a:0},
 {q:'Which command puts a number before the theorem name?',o:['\\swapnumbers','\\numberfirst','\\newtheorem*','\\tag'],a:0},
 {q:'What is the default float placement?',o:['[h]','[tbp]','[p]','[b]'],a:1},
 {q:'Where does \\label go in a table?',o:['After \\caption','Before \\caption','In the preamble','After \\end{table}'],a:0},
 {q:'Which command makes a footnote mark only?',o:['\\footnote','\\footnotemark','\\footnotetext','\\thanks'],a:1},
 {q:'Which beamer command keeps the room of text that is not yet visible?',o:['\\only','\\onslide','\\pause only','\\hide'],a:1},
 {q:'Which beamer class option sets the color package options?',o:['xcolor=…','color=…','palette=…','theme=…'],a:0}
])}
${cards('Syntax you must be able to write',[
 {f:'Smallest document',b:{code:'\\documentclass{article}\n\\begin{document}\nText\n\\end{document}'}},
 {f:'Title block',b:{code:'\\title{…}\\author{…}\\date{\\today}\n\\maketitle'}},
 {f:'Cite from a .bib',b:{code:'\\cite{k}\n\\bibliographystyle{plain}\n\\bibliography{refs}'}},
 {f:'Index set-up',b:{code:'\\usepackage{makeidx}\n\\makeindex\n\\index{term}\n\\printindex'}},
 {f:'Tab stops',b:{code:'\\begin{tabbing}\nA \\= B \\kill\nx \\> y\n\\end{tabbing}'}},
 {f:'A ruled table',b:{code:'\\begin{tabular}{|l|r|}\\hline\na & 1\\\\ \\hline\n\\end{tabular}'}},
 {f:'Aligned equations',b:{code:'\\begin{align*}\nx+y & = 1\\\\\nx-y & = 0\n\\end{align*}'}},
 {f:'A matrix',b:{code:'\\begin{pmatrix}\na & b\\\\\nc & d\n\\end{pmatrix}'}},
 {f:'A theorem',b:{code:'\\newtheorem{thm}{Theorem}\n\\begin{thm}[Note]\n…\n\\end{thm}'}},
 {f:'A figure',b:{code:'\\begin{figure}[htbp]\n\\centering\n\\includegraphics[width=5cm]{f}\n\\caption{…}\\label{k}\n\\end{figure}'}},
 {f:'A frame',b:{code:'\\begin{frame}\n\\frametitle{…}\n…\n\\pause\n…\n\\end{frame}'}},
 {f:'Two columns',b:{code:'\\begin{columns}[t]\n\\begin{column}{2in}…\\end{column}\n\\begin{column}{2in}…\\end{column}\n\\end{columns}'}}
])}
${must(H`<ol>
<li>Module I: structure, ten special characters, spaces, quotes, dashes, fonts, classes, page styles, title, sections, bibliography, BibTeX, contents, index.</li>
<li>Module II: quote, quotation, verse, lists, tabbing, tabular, multicolumn, cline, array, multirow, longtable.</li>
<li>Module III: math mode, superscripts, roots, symbols classes, custom commands, amsmath environments, numbering, matrices, dots, delimiters, fractions, limits, operators, fonts.</li>
<li>Module IV: theorems, amsthm, boxes, floats, cross references, footnotes, beamer frames, overlays, blocks, columns, color.</li>
</ol>`)}
`});
