/* ═══════════════════ MODULE I — Getting started with LaTeX (Text 1, Tutorials I–V) ═══════════════════
   Written from the book cuts (LaTeX Tutorial: A Primer, Tutorials I–V) in ASD-STE100 style:
   short sentences, one idea in each sentence, active voice, simple verbs, steps as commands. */

/* ───────────── Unit 1 · The basics (Tutorial I) ───────────── */
STATIONS.push({id:'m1-basics',title:'The basics',short:'1 · The basics',est:'~40 min',body:H`
${gist('You type the text and the commands. LaTeX sets the lines, the paragraphs and the pages. You compile the file to see the result.')}

${tp('What LaTeX is')}
<p>LaTeX is a typesetting program. It is an extension of the program TeX. Donald Knuth wrote TeX.</p>
<p>A document has four stages when you use a computer:</p>
<ol>
  <li>You enter the text into the computer.</li>
  <li>The computer formats the text into lines, paragraphs and pages.</li>
  <li>The computer shows the output on the screen.</li>
  <li>You print the final output.</li>
</ol>
<p>A word processor does all four stages in one program. TeX does only stage 2. You type the text and the formatting commands in a text editor. Then you compile the file. After that, you view the output in a previewer or print it with a printer driver.</p>
<p>TeX is also a programming language. People write code for new features. LaTeX is a large collection of such features. More people write new packages every year.</p>
<p>Donald Knuth made TeX to typeset technical documents. These documents contain much mathematics. A word processor cannot easily make complex formulas. LaTeX also gives a good look to ordinary text.</p>
${omr('What LaTeX is',[
 {q:'Which stage of document preparation does TeX do?',o:['Enter the text','Format the text into lines, paragraphs and pages','Display the text on the screen','Print the text'],a:1,why:'TeX does only the second stage: formatting.'},
 {q:'Who wrote TeX?',o:['Leslie Lamport','Donald Knuth','Tim Berners-Lee','Linus Torvalds'],a:1,why:'The book says that Donald Knuth wrote TeX.'},
 {q:'What is LaTeX in relation to TeX?',o:['A previewer','A printer driver','A large collection of extra features for TeX','A word processor'],a:2,why:'LaTeX is a large collection of extra features written in the TeX language.'},
 {q:'Why did Knuth make TeX?',o:['To typeset technical documents with much mathematics','To replace the printer','To draw pictures','To send e-mail'],a:0,why:'TeX is made to typeset technical documents, especially those with mathematics.'}
])}

${tp('A small example')}
<p>Type these lines in a text editor. Save the file with the extension <code>.tex</code>, for example <code>myfile.tex</code>.</p>
${ex(L`\documentclass{article}
\begin{document}
This is my \emph{first} document prepared in \LaTeX.
\end{document}`,{title:'the first document'})}
<p>Look at the source file:</p>
<ul>
  <li><code>\documentclass{article}</code> tells LaTeX the kind of document. For a book, write <code>\documentclass{book}</code>.</li>
  <li>The text of the document goes between <code>\begin{document}</code> and <code>\end{document}</code>.</li>
  <li><code>\emph{first}</code> sets the word in italic.</li>
  <li><code>\LaTeX</code> makes new text: the LaTeX logo.</li>
</ul>
<p>The first command changes the text you type. The second command makes new text.</p>
<p>The backslash <code>\</code> is not the slash <code>/</code>. Be careful when you type it.</p>
<h5>Compile in GNU/Linux</h5>
<p>The book gives these steps:</p>
<ol>
  <li>At the shell prompt, type <code>latex myfile</code>.</li>
  <li>Start the X Window system. In a terminal, type <code>xdvi myfile</code>.</li>
  <li>A window shows the output.</li>
</ol>
${ex(L`This is my \emph{first} document prepared in \LaTeX.
I typed it on \today.`,{title:'\\today makes the date'})}
${think('What does \\today make?',L`I typed it on \today.`,['The word “today”','The current date','Nothing','An error'],1,'The command \\today makes new text: the date on which you compile.')}
${parsons('Put the first document in order',[L`\documentclass{article}`,L`\begin{document}`,L`This is my \emph{first} document.`,L`\end{document}`],{extra:[L`\begin{article}`]})}

${tp('Simple typesetting')}
<p>Separate the words with spaces. The number of spaces does not matter. You can break the lines in any place.</p>
<p>A blank line in the input ends a paragraph. To start a new paragraph, leave a blank line. LaTeX indents the first line of each paragraph. To remove the indent, type <code>\noindent</code> at the start of the paragraph.</p>
${ex(L`We have seen that to typeset something in \LaTeX, we type in the
text to be typeset together with some \LaTeX\ commands.
Words must be separated by spaces (does not matter how many)
and lines maybe broken arbitrarily.

\noindent The end of a paragraph is specified by a \emph{blank line}
in the input.`,{title:'paragraphs and \\noindent'})}

<h5>Spaces</h5>
<p>TeX makes all lines the same length. It changes the space between the words to do this. TeX also adds a little extra space after a period that ends a sentence.</p>
<p>TeX thinks that a period ends a sentence when no upper case letter comes before it. This rule is sometimes wrong:</p>
<ul>
  <li>A sentence can end with an upper case letter. Type <code>\@</code> before the period: <code>Vitamin A\@.</code> This gives the extra space.</li>
  <li>A period after a lower case letter can be in the middle of a sentence. Type <code>\ </code> (a backslash and a space) after it: <code>etc.\ are</code> This removes the extra space.</li>
</ul>
${ex(L`Carrots are good for your eyes, since they contain Vitamin A\@. Have you ever seen a rabbit wearing glasses?

The numbers 1, 2, 3, etc.\ are called natural numbers.`,{title:'\\@ and \\␣'})}
<p>TeX ignores all spaces after a command name. So <code>\LaTeX is fun</code> prints "LaTeXis fun". Type <code>\LaTeX\ is fun</code> to keep the space.</p>
${ex(L`I think \LaTeX\ is fun.`,{title:'the space after a command'})}
${trap(H`<p>A command name ends at the first character that is not a letter. TeX removes the spaces after the name. Type <code>\ </code> or <code>{}</code> after the command when you need a space.</p>`)}

<h5>Quotes</h5>
<p>The opening quote and the closing quote are different in print. In TeX, the key <code>｀</code> makes a left quote. The key <code>'</code> makes a right quote. Type the key two times for double quotes. The key <code>"</code> also makes a closing double quote.</p>
<p>If the keyboard has no left quote key, use <code>\lq</code> for the left quote and <code>\rq</code> for the right quote.</p>
${ex(L`Note the difference in right and left quotes in ｀single quotes' and ｀｀double quotes''.`,{title:'quotes'})}

<h5>Dashes</h5>
<p>The length of a dash shows its use. One input dash <code>-</code> makes a hyphen. Two dashes <code>--</code> make a short dash for number ranges. Three dashes <code>---</code> make the longest dash for a comment in a sentence.</p>
${ex(L`X-rays are discussed in pages 221--225 of Volume 3---the volume on electromagnetic waves.`,{title:'three dashes'})}
${think('Which dash for a range?',L`pages 221?225`,['-','--','---','\\-'],1,'Use two dashes (--) for a range of numbers.')}

<h5>Accents and other letters</h5>
<p>Put an accent command before the letter.</p>
${reftable([
 [L`\｀o`,'grave accent',L`\｀o`],
 [L`\'o`,'acute accent',L`\'o`],
 [L`\^o`,'circumflex',L`\^o`],
 [L`\~o`,'tilde',L`\~o`],
 [L`\=o`,'macron',L`\=o`],
 [L`\.o`,'dot over the letter',L`\.o`],
 [L`\"o`,'umlaut',L`\"o`],
 [L`\c c`,'cedilla',L`\c c`],
 [L`\u o`,'breve',L`\u o`],
 [L`\v o`,'caron',L`\v o`],
 [L`\H o`,'long Hungarian umlaut',L`\H o`],
 [L`\d o`,'dot under the letter',L`\d o`],
 [L`\b o`,'bar under the letter',L`\b o`]
])}
<p>The letters i and j have a dot. An accent must replace this dot. Use <code>\i</code> and <code>\j</code> to make dotless letters. To print "Él está aquí", type <code>\'{E}l est\'{a} aqu\'{\i}</code>.</p>
${ex(L`\'{E}l est\'{a} aqu\'{\i}`,{title:'accents on i'})}
<p>These commands make letters of other languages:</p>
<div class="scroll-x"><table class="ref"><tr><th>Input</th><th>Output</th><th>Input</th><th>Output</th></tr>
<tr><td><code>\oe</code></td><td>œ</td><td><code>\OE</code></td><td>Œ</td></tr>
<tr><td><code>\ae</code></td><td>æ</td><td><code>\AE</code></td><td>Æ</td></tr>
<tr><td><code>\aa</code></td><td>å</td><td><code>\AA</code></td><td>Å</td></tr>
<tr><td><code>\o</code></td><td>ø</td><td><code>\O</code></td><td>Ø</td></tr>
<tr><td><code>\l</code></td><td>ł</td><td><code>\L</code></td><td>Ł</td></tr>
<tr><td><code>\ss</code></td><td>ß</td><td><code>!｀</code> and <code>?｀</code></td><td>¡ and ¿</td></tr>
</table></div>

<h5>Special symbols</h5>
<p>TeX keeps ten characters for its own use:</p>
<p style="text-align:center"><code>~ # $ % ^ &amp; _ \ { }</code></p>
<p>The backslash starts a command. The percent sign <code>%</code> starts a comment. TeX ignores the text from <code>%</code> to the end of the line. This is useful for a "to do" list in the file. To print a percent sign, type <code>\%</code>.</p>
${ex(L`Maybe I have now learnt about 1\% of \LaTeX.`,{title:'print a percent sign'})}
${think('The lost line end',L`Maybe I have now learnt about 1% of \LaTeX.`,['The whole line is printed','Only “Maybe I have now learnt about 1” is printed','An error appears','The percent sign is printed'],1,'The % starts a comment. TeX ignores the rest of the line.')}
<div class="scroll-x"><table class="ref"><tr><th>To print</th><th>Type</th><th>To print</th><th>Type</th></tr>
<tr><td>~</td><td><code>\textasciitilde</code></td><td>&amp;</td><td><code>\&amp;</code></td></tr>
<tr><td>#</td><td><code>\#</code></td><td>_</td><td><code>\_</code></td></tr>
<tr><td>$</td><td><code>\$</code></td><td>\</td><td><code>\textbackslash</code></td></tr>
<tr><td>%</td><td><code>\%</code></td><td>{</td><td><code>\{</code></td></tr>
<tr><td>^</td><td><code>\textasciicircum</code></td><td>}</td><td><code>\}</code></td></tr>
</table></div>
${ex(L`\~{} \# \$ \% \^{} \& \_ \{ \} \textbackslash`,{title:'the ten characters'})}
<p>Seven of the characters need only a backslash before them. The tilde and the circumflex are accent commands. So the book uses <code>\textasciitilde</code> and <code>\textasciicircum</code>.</p>
<p>The command <code>\\</code> breaks a line. Add an optional argument to increase the space between the lines: <code>\\[10pt]</code>. One point is about 1/72 of an inch.</p>
${ex(L`This is the first line.\\[10pt]
This is the second line`,{title:'line break with extra space'})}
${fill('Print the special characters',L`Profit rose 12[[\%]] at Johnson [[\&]] Johnson; see item [[\#]]4 in file[[\_]]v2. It cost [[\$]]30.`,{code:true,strict:true})}
${match('Character and input',[
 [L`<code>%</code>`,L`<code>\%</code>`],[L`<code>&amp;</code>`,L`<code>\&amp;</code>`],[L`<code>$</code>`,L`<code>\$</code>`],
 [L`<code>#</code>`,L`<code>\#</code>`],[L`<code>_</code>`,L`<code>\_</code>`],[L`<code>\</code>`,L`<code>\textbackslash</code>`],
 [L`<code>~</code>`,L`<code>\textasciitilde</code>`],[L`<code>{</code>`,L`<code>\{</code>`]],{left:'To print',right:'Type'})}

<h5>Text position</h5>
<p>TeX puts the text in its own way, not the way you type it. Use an <b>environment</b> to change the position:</p>
<ul>
  <li><code>center</code> puts the text at the center of the page.</li>
  <li><code>flushright</code> puts the text against the right margin.</li>
  <li><code>flushleft</code> puts the text against the left margin.</li>
</ul>
<p>An environment has this form: <code>\begin{name} ... \end{name}</code>. The <code>document</code> environment is one example.</p>
${ex(L`\begin{center}
The \TeX nical Institute\\[.75cm]
Certificate
\end{center}
\noindent This is to certify that Mr. N. O. Vice has undergone a
course at this institute and is qualified to be a \TeX nician.
\begin{flushright}
The Director\\
The \TeX nical Institute
\end{flushright}`,{title:'center and flushright'})}
${cards('Text position',[
 {f:'Center the text',b:{code:'\\begin{center}\n...\n\\end{center}'}},
 {f:'Text against the right margin',b:{code:'\\begin{flushright}\n...\n\\end{flushright}'}},
 {f:'Text against the left margin',b:{code:'\\begin{flushleft}\n...\n\\end{flushleft}'}},
 {f:'What is an environment?',b:'A pair \\begin{name} ... \\end{name}.'}
])}

${tp('Fonts')}
<p>The letters and symbols that LaTeX makes are called <b>type</b>. Style and size describe the type. A set of type of one style and size is a <b>font</b>.</p>
<h5>Type style</h5>
<p>A type style has three parts: family, series and shape. Each type style is a combination of the three parts. The default is roman family, medium series and upright shape.</p>
<div class="scroll-x"><table class="ref"><tr><th>Part</th><th>Style</th><th>Command</th><th>Declaration</th></tr>
<tr><td rowspan="3">Family</td><td>roman</td><td><code>\textrm{…}</code></td><td><code>\rmfamily</code></td></tr>
<tr><td>sans serif</td><td><code>\textsf{…}</code></td><td><code>\sffamily</code></td></tr>
<tr><td>typewriter</td><td><code>\texttt{…}</code></td><td><code>\ttfamily</code></td></tr>
<tr><td rowspan="2">Series</td><td>medium</td><td><code>\textmd{…}</code></td><td><code>\mdseries</code></td></tr>
<tr><td>boldface</td><td><code>\textbf{…}</code></td><td><code>\bfseries</code></td></tr>
<tr><td rowspan="4">Shape</td><td>upright</td><td><code>\textup{…}</code></td><td><code>\upshape</code></td></tr>
<tr><td>italic</td><td><code>\textit{…}</code></td><td><code>\itshape</code></td></tr>
<tr><td>slanted</td><td><code>\textsl{…}</code></td><td><code>\slshape</code></td></tr>
<tr><td>small cap</td><td><code>\textsc{…}</code></td><td><code>\scshape</code></td></tr>
</table></div>
${ex(L`\textsf{\textbf{sans serif family, boldface series, upright shape}}\\
\textrm{\textsl{roman family, medium series, slanted shape}}`,{title:'combine the style commands'})}
<p>If the computer does not have a type style, LaTeX shows a warning. It uses a close style instead.</p>
<p>The command <code>\emph</code> gives italic in upright text. In italic or slanted text, it gives upright. It uses the family and series of the current font.</p>
${ex(L`\textit{A polygon of three sides is called a \emph{triangle} and a polygon of four sides is called a \emph{quadrilateral}}

\textbf{A polygon of three sides is called a \emph{triangle} and a polygon of four sides is called a \emph{quadrilateral}}`,{title:'\\emph in italic and in bold'})}
<h5>Declarations</h5>
<p>Each command has a declaration form. The command <code>\textbf{boldface}</code> and the group <code>{\bfseries boldface}</code> give the same result. A declaration acts on the text up to the end of its group. Put the declaration and its text in braces.</p>
${ex(L`By a {\bfseries triangle}, we mean a polygon of three sides.

By a \bfseries{triangle}, we mean a polygon of three sides.`,{title:'a declaration in braces and without braces'})}
${trap(H`<p>The declaration <code>\bfseries{triangle}</code> does not limit the effect to the word. All the text after it is bold.</p>`)}
<p>A declaration name is also an environment name. To set a long passage in sans serif, write <code>\begin{sffamily} ... \end{sffamily}</code>.</p>
<h5>Type size</h5>
<p>Printers measure the size in points. The default size is 10 pt. LaTeX has ten declarations for the size. <code>\tiny</code> is the smallest and <code>\Huge</code> is the largest. <code>\normalsize</code> is the default. These declarations have no command form with one argument.</p>
${parsons('Put the sizes in order, smallest first',[L`\tiny`,L`\scriptsize`,L`\footnotesize`,L`\small`,L`\normalsize`,L`\large`,L`\Large`,L`\LARGE`,L`\huge`,L`\Huge`])}
${ex(L`\begin{center}
{\bfseries\huge The \TeX nical Institute}\\[1cm]
{\scshape\LARGE Certificate}
\end{center}
\noindent This is to certify that Mr. N. O. Vice has undergone a
course at this institute and is qualified to be a \TeX nical Expert.
\begin{flushright}
{\sffamily The Director\\
The \TeX nical Institute}
\end{flushright}`,{title:'style and size together'})}
${build('Style a short notice',L`\documentclass{article}
\begin{document}
Notice
The library closes early today.
Ask at the desk.
\end{document}`,{brief:'Make "Notice" large and bold. Put "early" in emphasis. Set "Ask at the desk." in small caps.',
 checks:[{re:'\\\\(Large|LARGE|large|huge|Huge)',msg:'a size command for the heading'},{re:'\\\\textbf|\\\\bfseries',msg:'bold for the heading'},{re:'\\\\emph\\{early\\}',msg:'\\emph{early}'},{re:'\\\\textsc|\\\\scshape',msg:'small caps for the last line'}]})}
${must(H`<ol>
<li>Structure: <code>\documentclass</code>, then <code>\begin{document}</code> and <code>\end{document}</code>.</li>
<li>The ten special characters and the way to print each one.</li>
<li><code>\@</code> and <code>\ </code> control the space after a period.</li>
<li>Quotes: <code>｀｀ ''</code>. Dashes: <code>-</code> <code>--</code> <code>---</code>.</li>
<li>Environments: <code>center</code>, <code>flushleft</code>, <code>flushright</code>.</li>
<li>Type style = family + series + shape. Ten size declarations.</li>
</ol>`)}
`});

/* ───────────── Unit 2 · The document (Tutorial II) ───────────── */
STATIONS.push({id:'m1-document',title:'The document',short:'2 · The document',est:'~40 min',body:H`
${gist('The document class sets the overall design. The page style sets the head and foot of each page. The sectioning commands divide the text into parts.')}

${tp('Document class')}
<p>Every LaTeX file starts with the command <code>\documentclass{…}</code>. LaTeX has no default class, so you must give one. The classes are <code>article</code>, <code>report</code>, <code>book</code> and <code>letter</code>. They share some features. Each class has its own features also.</p>
<p>The full syntax is:</p>
<p style="text-align:center"><code>\documentclass[options]{class}</code></p>
<p>Put the options in square brackets. Put the required argument in braces. Many LaTeX commands follow this rule.</p>
<h5>Font size</h5>
<p>Use <code>10pt</code>, <code>11pt</code> or <code>12pt</code>. The default is <code>10pt</code>.</p>
<h5>Paper size</h5>
<p>LaTeX must know the width and the height of the paper. Then it can break the pages correctly. The default is <code>letterpaper</code>. The longer side is normally the height.</p>
<div class="scroll-x"><table class="ref"><tr><th>Option</th><th>Size</th></tr>
<tr><td><code>letterpaper</code></td><td>11 × 8.5 in</td></tr>
<tr><td><code>legalpaper</code></td><td>14 × 8.5 in</td></tr>
<tr><td><code>executivepaper</code></td><td>10.5 × 7.25 in</td></tr>
<tr><td><code>a4paper</code></td><td>29.7 × 21 cm (the book prints this value with an error)</td></tr>
<tr><td><code>a5paper</code></td><td>21 × 14.8 cm</td></tr>
<tr><td><code>b5paper</code></td><td>25 × 17.6 cm</td></tr>
</table></div>
<h5>Page format</h5>
<div class="scroll-x"><table class="ref"><tr><th>Option pair</th><th>Default</th><th>Meaning</th></tr>
<tr><td><code>onecolumn</code> / <code>twocolumn</code></td><td>onecolumn</td><td>One column or two columns on a page.</td></tr>
<tr><td><code>oneside</code> / <code>twoside</code></td><td>oneside for article, report, letter; twoside for book</td><td>With twoside, the page number is on the right on odd pages and on the left on even pages. The numbers are on the outside when you print back to back.</td></tr>
<tr><td><code>openany</code> / <code>openright</code></td><td>openany for report; openright for book</td><td>A chapter starts on any new page, or only on a right (odd) page. LaTeX leaves a page blank if necessary.</td></tr>
<tr><td><code>notitlepage</code> / <code>titlepage</code></td><td>notitlepage for article; titlepage for report and book</td><td>The title is on the first page with the text, or on a page of its own.</td></tr>
</table></div>
<p>LaTeX does not control the printing. It only makes the formats for each type of printing.</p>
${ex(L`\documentclass[12pt,a4paper,twoside]{report}
\begin{document}
\chapter{Introduction}
A report in 12 pt on A4 paper for two-sided printing.
\end{document}`,{title:'a class with options'})}
${omr('Document class',[
 {q:'Which part of the command holds the options?',o:['Braces','Square brackets','Parentheses','Angle brackets'],a:1,why:'Options go in square brackets. The class name goes in braces.'},
 {q:'What is the default font size?',o:['9pt','10pt','11pt','12pt'],a:1,why:'The default font size is 10pt.'},
 {q:'Which class starts chapters only on odd pages by default?',o:['article','report','letter','book'],a:3,why:'The book class uses openright by default.'},
 {q:'Which option puts the title on a page of its own?',o:['notitlepage','titlepage','openany','twoside'],a:1,why:'The option titlepage does this. It is the default for report and book.'},
 {q:'Which class is the default when you give none?',o:['article','book','report','There is none'],a:3,why:'LaTeX has no default document class.'}
])}

${tp('Page style')}
<p>Each page has a head and a foot. They contain, for example, the page number or the name of the chapter. The command <code>\pagestyle{…}</code> sets what goes where.</p>
<div class="scroll-x"><table class="ref"><tr><th>Style</th><th>Effect</th></tr>
<tr><td><code>plain</code></td><td>The head is empty. The foot has the page number at the center. This is the default for article.</td></tr>
<tr><td><code>empty</code></td><td>The head and the foot are empty. No page number is printed.</td></tr>
<tr><td><code>headings</code></td><td>The foot is empty. The head has the page number and the name of the chapter, section or subsection. This is the default for book.</td></tr>
<tr><td><code>myheadings</code></td><td>The same as headings, but you give the text of the head with <code>\markboth</code> or <code>\markright</code>.</td></tr>
</table></div>
<p>The head text for <code>headings</code> depends on the class and the option:</p>
<div class="scroll-x"><table class="ref"><tr><th>Class</th><th>Option</th><th>Left page</th><th>Right page</th></tr>
<tr><td>book, report</td><td>oneside</td><td>—</td><td>chapter</td></tr>
<tr><td>book, report</td><td>twoside</td><td>chapter</td><td>section</td></tr>
<tr><td>article</td><td>oneside</td><td>—</td><td>section</td></tr>
<tr><td>article</td><td>twoside</td><td>section</td><td>subsection</td></tr>
</table></div>
<p>To change only the current page, use <code>\thispagestyle{style}</code>. The command <code>\thispagestyle{empty}</code> removes the page number of the current page only. The next page has the next number.</p>
<p>The commands <code>\markboth{left head}{right head}</code> and <code>\markright{right head}</code> set the text of the head. Use <code>\markboth</code> with <code>twoside</code>. Even pages are left pages. Odd pages are right pages. With <code>oneside</code>, all pages are right pages. Use <code>\markright</code>.</p>
<p>These commands give limited control. The package <code>fancyhdr</code> gives better control of the head and the foot.</p>
${ex(L`\documentclass{article}
\pagestyle{myheadings}
\markright{My short report}
\begin{document}
Text of the first page.
\end{document}`,{title:'myheadings with \\markright'})}
${match('Page style and effect',[
 ['plain','Foot has the page number, head is empty'],['empty','Head and foot are empty'],['headings','Head has the page number and the names'],['myheadings','Head text comes from \\markboth or \\markright']],{left:'Style',right:'Effect'})}

${tp('Page numbering')}
<p>The command <code>\pagenumbering{…}</code> sets the style of the page numbers. It also resets the page counter.</p>
<div class="scroll-x"><table class="ref"><tr><th>Argument</th><th>Result</th></tr>
<tr><td><code>arabic</code></td><td>Indo-Arabic numerals (default)</td></tr>
<tr><td><code>roman</code></td><td>lowercase Roman numerals</td></tr>
<tr><td><code>Roman</code></td><td>uppercase Roman numerals</td></tr>
<tr><td><code>alph</code></td><td>lowercase English letters</td></tr>
<tr><td><code>Alph</code></td><td>uppercase English letters</td></tr>
</table></div>
<p>To number the Preface with Roman numerals, write <code>\pagenumbering{roman}</code> at the start of the Preface. Write <code>\pagenumbering{arabic}</code> after the first <code>\chapter</code> command. The book writes <code>\pagestyle{arabic}</code> here, but the correct command is <code>\pagenumbering{arabic}</code>.</p>
<p>To start at a chosen number, use <code>\setcounter{page}{number}</code>.</p>
${trap(H`<p><code>\pagestyle</code> sets what is in the head and foot. <code>\pagenumbering</code> sets the shape of the number. Do not mix them.</p>`)}

${tp('Formatting lengths')}
<p>Each page has a head, a foot and a body. LaTeX uses lengths for the parts of the page: the width, the height and the margins. The paper size options and the page style set these lengths. Use <code>\setlength</code> to change them:</p>
${ex(L`\setlength{\textwidth}{15cm}`,{title:'set the text width',run:false})}
<p>The package <code>geometry</code> gives an easier interface for the page format.</p>

${tp('Parts of a document')}
<p>A long document has chapters and sections. It can also have a title part and an abstract.</p>
<h5>Title</h5>
<p>Use four commands:</p>
<ol>
  <li><code>\title{document name}</code></li>
  <li><code>\author{author names}</code></li>
  <li><code>\date{date text}</code></li>
  <li><code>\maketitle</code></li>
</ol>
<p>You must use <code>\maketitle</code> to typeset the title. LaTeX centers the entries. It breaks a long title automatically. To choose the break points, use <code>\\</code>.</p>
<p>With <code>\and</code> between the authors, the names are side by side. With <code>\\</code>, the names are one below the other. <code>\date{ }</code> prints no date. If you omit the <code>\date</code> command, LaTeX prints the current date.</p>
<p><code>\thanks{footnote text}</code> puts a marker in the title and a footnote on the page. The general footnote command is <code>\footnote{footnote text}</code>.</p>
${ex(L`\documentclass{article}
\title{Title}
\author{Author 1\\ Address line 11\\ Address line 12
\and
Author 2\\ Address line 21\\ Address line 22}
\date{Month Date, Year}
\begin{document}
\maketitle
\end{document}`,{title:'two authors side by side'})}
<h5>Abstract</h5>
<p>In article and report, the environment <code>abstract</code> makes an abstract. You must type the text of the abstract yourself. The book class has no abstract.</p>
${ex(L`\begin{abstract}
Abstract text goes here.
\end{abstract}`,{title:'abstract',pre:'\\title{T}\\author{A}\\date{}'})}
${parsons('Build the title block',[L`\documentclass{article}`,L`\title{Field Report}`,L`\author{R. Nair}`,L`\date{\today}`,L`\begin{document}`,L`\maketitle`,L`\end{document}`],{extra:[L`\begin{title}`]})}

${tp('Dividing the document')}
<p>A technical book has chapters, sections and subsections. In book and report, the hierarchy is:</p>
<ol>
  <li><code>\chapter</code></li>
  <li><code>\section</code></li>
  <li><code>\subsection</code></li>
  <li><code>\subsubsection</code></li>
  <li><code>\paragraph</code></li>
  <li><code>\subparagraph</code></li>
</ol>
<p>The article class has all of them except <code>\chapter</code>.</p>
${ex(L`\section{Dividing the document}
\subsection{Example}
In this example, we show how subsections and subsubsections are produced.
\subsubsection{Subexample}
Subsubsections have numbers in the article class.
\paragraph{Note}
Paragraphs have run-in headings and no numbers.
\subparagraph{Subnote}
Subparagraphs have an extra indent.`,{title:'the hierarchy in article'})}
<h5>Numbering</h5>
<ul>
  <li>In book and report, <code>\chapter</code> starts a new page. It prints the word "Chapter" and the number. The name of the chapter is below.</li>
  <li><code>\section</code> prints the chapter number and the section number, with a dot between them. It does not print the word "Section".</li>
  <li><code>\subsection</code> has three numbers. Subsubsections and the commands below have no numbers.</li>
  <li>In article, <code>\section</code> is the highest level. It has one number. The subsubsection also has a number. The commands below it have no number.</li>
  <li>Each sectioning command has a starred form. <code>\section*{name}</code> prints no number.</li>
  <li><code>\part</code> is the highest level. It does not change the numbers of the lower levels.</li>
</ul>
${ex(L`\section{Numbered}
\section*{Not numbered}
\subsection{Numbered again}`,{title:'the star'})}
<p>LaTeX has a fixed format for the headings: font, position and space. The package <code>sectsty</code> gives easy changes.</p>
${fill('Sectioning',L`The highest level in the article class is [[\section]]. In book and report it is [[\chapter]]. A heading without a number uses the [[star¦*¦starred]] form.`,{strict:false})}
${omr('The document',[
 {q:'Which command typesets the title block?',o:['\\title','\\author','\\maketitle','\\date'],a:2,why:'\\title, \\author and \\date only store the data. \\maketitle typesets it.'},
 {q:'What does LaTeX print when you omit \\date?',o:['Nothing','The current date','An error','The year only'],a:1,why:'Without \\date, LaTeX prints the current date. Use \\date{ } for no date.'},
 {q:'Which command separates two authors side by side?',o:['\\\\','\\and','\\newline','\\par'],a:1,why:'\\and puts the names side by side.'},
 {q:'Which command removes the page number of the current page only?',o:['\\pagestyle{empty}','\\thispagestyle{empty}','\\pagenumbering{empty}','\\markright{}'],a:1,why:'\\thispagestyle changes the current page only.'},
 {q:'Which class has no abstract environment?',o:['article','report','book','letter'],a:2,why:'The book class has no abstract.'},
 {q:'Which sectioning command is not available in article?',o:['\\section','\\subsection','\\chapter','\\paragraph'],a:2,why:'\\chapter is only in report and book.'}
])}
${must(H`<ol>
<li><code>\documentclass[options]{class}</code>. Options in square brackets.</li>
<li>Font size 10, 11, 12 pt. Paper options. Defaults for each class.</li>
<li>Page styles: plain, empty, headings, myheadings. Use <code>\thispagestyle</code> for one page.</li>
<li><code>\pagenumbering</code>: arabic, roman, Roman, alph, Alph. <code>\setcounter{page}{n}</code>.</li>
<li>Title: <code>\title</code>, <code>\author</code>, <code>\date</code>, <code>\maketitle</code>. <code>\and</code>, <code>\thanks</code>.</li>
<li>Six sectioning levels. The star removes the number.</li>
</ol>`)}
`});

/* ───────────── Unit 3 · Bibliography and BibTeX (Tutorials III & IV) ───────────── */
STATIONS.push({id:'m1-bib',title:'Bibliography and BibTeX',short:'3 · Bibliography & BibTeX',est:'~45 min',body:H`
${gist('A bibliography lists your sources. \\bibitem and \\cite connect the list to the text. BibTeX builds the list from a .bib database.')}

${tp('The thebibliography environment')}
<p>A bibliography is a list of the sources at the end of a document. LaTeX uses structure for it. You can change the style of the list without a change in the code inside it. The packages <code>harvard</code> and <code>natbib</code> are in wide use.</p>
<p>The environment <code>thebibliography</code> is similar to <code>enumerate</code>. Use <code>\bibitem</code> to start each entry. Use <code>\cite</code> to refer to an entry in the text. At the place of the citation, LaTeX prints a number or an author-year code.</p>
<pre class="lx-verb">\begin{thebibliography}{widest-label}
\bibitem{key1} ...
\bibitem{key2} ...
\end{thebibliography}</pre>
<ul>
  <li>The argument is the width of the widest label. For 10 to 99 citations, write <code>{99}</code>. All numerals have the same width, so any two-digit number is correct.</li>
  <li>For custom labels, put the longest label in the argument, for example <code>{Long-name}</code>.</li>
  <li>The key is a mnemonic string, for example <code>ale91</code> for Alex, 1991. It can have letters, digits and punctuation. It cannot have a comma.</li>
  <li><code>\cite{key1,key2}</code> accepts two or more keys with commas between them.</li>
  <li>An optional argument adds a note, for example <code>\cite[page~25]{key1}</code>. The note goes in the brackets after the label.</li>
</ul>
<p>The environment needs two compilations. The first one writes the citation data to the <code>.aux</code> file. The second one replaces <code>\cite</code> with the number.</p>
${ex(L`It is hard to write unstructured and disorganised documents using \LaTeX~\cite{les85}. It is interesting to typeset one equation~\cite[Sec 3.3]{les85} rather than setting ten pages of running matter~\cite{don89,rondon89}.
\begin{thebibliography}{9}
\bibitem{les85}Leslie Lamport, 1985. \emph{\LaTeX---A Document Preparation System---User's Guide and Reference Manual}, Addison-Wesley, Reading.
\bibitem{don89}Donald E. Knuth, 1989. \emph{Typesetting Concrete Mathematics}, TUGBoat, 10(1):31-36.
\bibitem{rondon89}Ronald L. Graham, Donald E. Knuth, and Oren Patashnik, 1989. \emph{Concrete Mathematics: A Foundation for Computer Science}, Addison-Wesley, Reading.
\end{thebibliography}`,{title:'thebibliography and \\cite'})}
${think('The note in a citation',L`See \cite[Sec 3.3]{les85}.`,['See [1].','See [1, Sec 3.3].','See [Sec 3.3].','See Lamport, Sec 3.3.'],1,'The note goes in the brackets, after the label.')}
${parsons('Order a manual bibliography',[L`\begin{thebibliography}{9}`,L`\bibitem{k1} A. Author, 2001. \emph{A Book}.`,L`\bibitem{k2} B. Writer, 2005. \emph{Another Book}.`,L`\end{thebibliography}`],{extra:[L`\begin{bibliography}`]})}

${tp('The natbib package')}
<p>The package <code>natbib</code> is a new version of the <code>\cite</code> command. It works with author-year citations and with number citations. It works with the standard style files, for example <code>plain.bst</code>. To load it, write <code>\usepackage[options]{natbib}</code>.</p>
<div class="scroll-x"><table class="ref"><tr><th>Option</th><th>Effect</th></tr>
<tr><td><code>round</code> (default)</td><td>round parentheses</td></tr>
<tr><td><code>square</code></td><td>square brackets</td></tr>
<tr><td><code>curly</code></td><td>curly braces</td></tr>
<tr><td><code>angle</code></td><td>angle brackets</td></tr>
<tr><td><code>colon</code> (default)</td><td>colons between multiple citations</td></tr>
<tr><td><code>comma</code></td><td>commas between multiple citations</td></tr>
<tr><td><code>authoryear</code> (default)</td><td>author-year citations</td></tr>
<tr><td><code>numbers</code></td><td>number citations</td></tr>
<tr><td><code>super</code></td><td>superscript numbers, as in Nature</td></tr>
<tr><td><code>sort</code></td><td>sorts multiple citations in the order of the reference list</td></tr>
<tr><td><code>sort&amp;compress</code></td><td>as sort, and compresses numbers (3–6, 15)</td></tr>
<tr><td><code>longnamesfirst</code></td><td>full author list at the first citation</td></tr>
<tr><td><code>sectionbib</code></td><td>uses <code>\section*</code> instead of <code>\chapter*</code> for the list</td></tr>
<tr><td><code>nonamebreak</code></td><td>keeps the author names of a citation on one line</td></tr>
</table></div>
<p>To make the Nature style, write <code>\citestyle{nature}</code> after <code>\usepackage{natbib}</code>.</p>
<h5>Basic commands</h5>
<p><code>\citet</code> makes a textual citation. <code>\citep</code> makes a parenthetical citation. The starred forms <code>\citet*</code> and <code>\citep*</code> print the full list of authors. All of them accept one or two optional arguments for text before and after the citation.</p>
<p>With author-year labels, each <code>\bibitem</code> has an optional argument, for example <code>\bibitem[Lamport(1985)]{les85}</code>. The year in parentheses is mandatory. If a year is missing, all citations become number citations. Do not put a space before the bracket of the year.</p>
<div class="scroll-x"><table class="ref"><tr><th>Input</th><th>Author-year output</th></tr>
<tr><td><code>\citet{ale91}</code></td><td>Alex et al. (1991)</td></tr>
<tr><td><code>\citet[chap.~4]{ale91}</code></td><td>Alex et al. (1991, chap. 4)</td></tr>
<tr><td><code>\citep{ale91}</code></td><td>(Alex et al., 1991)</td></tr>
<tr><td><code>\citep[chap.~4]{ale91}</code></td><td>(Alex et al., 1991, chap. 4)</td></tr>
<tr><td><code>\citep[see][]{ale91}</code></td><td>(see Alex et al., 1991)</td></tr>
<tr><td><code>\citep[see][chap.~4]{ale91}</code></td><td>(see Alex et al., 1991, chap. 4)</td></tr>
<tr><td><code>\citet*{ale91}</code></td><td>Alex, Mathew, and Ravi (1991)</td></tr>
<tr><td><code>\citep*{ale91}</code></td><td>(Alex, Mathew, and Ravi, 1991)</td></tr>
</table></div>
<h5>Multiple citations, number mode</h5>
<div class="scroll-x"><table class="ref"><tr><th>Input</th><th>Output</th></tr>
<tr><td><code>\citet{ale91,rav92}</code></td><td>Alex et al. (1991); Ravi et al. (1992)</td></tr>
<tr><td><code>\citep{ale91,rav92}</code></td><td>(Alex et al., 1991; Ravi et al. 1992)</td></tr>
<tr><td><code>\citep{ale91,ale92}</code></td><td>(Alex et al., 1991, 1992)</td></tr>
<tr><td><code>\citep{ale91a,ale91b}</code></td><td>(Alex et al., 1991a,b)</td></tr>
<tr><td>number mode: <code>\citet{ale91}</code></td><td>Alex et al. [5]</td></tr>
<tr><td>number mode: <code>\citep[see][chap.~4]{ale91}</code></td><td>[see 5, chap. 4]</td></tr>
<tr><td>number mode: <code>\citep{ale91a,ale91b}</code></td><td>[5, 12]</td></tr>
</table></div>
<h5>Other forms</h5>
<ul>
  <li><code>\citealt</code> is <code>\citet</code> without parentheses. <code>\citealp</code> is <code>\citep</code> without parentheses. Both have starred forms.</li>
  <li><code>\citetext{short comm.}</code> puts any text in the citation parentheses.</li>
  <li><code>\citeauthor{ale91}</code> prints the authors only. <code>\citeyear{ale91}</code> prints the year only. <code>\citeyearpar{ale91}</code> prints the year in parentheses.</li>
  <li>Use <code>\defcitealias{jon90}{Paper~I}</code> to make an alias. Then <code>\citetalias{jon90}</code> prints "Paper I". <code>\citepalias{jon90}</code> prints "(Paper I)".</li>
  <li><code>\bibpunct</code> changes the punctuation. It has one optional argument and six required arguments: opening bracket, closing bracket, separator between citations, style letter (<code>n</code> number, <code>s</code> superscript, other letter author-year), punctuation between author and year, punctuation between years.</li>
</ul>
${ex(L`\documentclass{article}
\usepackage{natbib}
\begin{document}
\citet{ale91} showed this \citep{ale91}.
\begin{thebibliography}{9}
\bibitem[Alex(1991)]{ale91} Alex, 1991. \emph{A Book}.
\end{thebibliography}
\end{document}`,{title:'natbib: \\citet and \\citep',run:true})}
${match('natbib command and result',[
 [L`<code>\citet{k}</code>`,'Alex et al. (1991)'],[L`<code>\citep{k}</code>`,'(Alex et al., 1991)'],[L`<code>\citeauthor{k}</code>`,'Alex et al.'],[L`<code>\citeyear{k}</code>`,'1991'],[L`<code>\citeyearpar{k}</code>`,'(1991)']],{left:'Command',right:'Result'})}

${tp('Bibliographic databases and BibTeX')}
<p>A bibliographic database stores the entries in one or more files with the extension <code>.bib</code>. Each entry has a key. You use the key in the text to refer to the entry. All your documents can use the same database. Authors who often cite the same sources use it.</p>
<p>BibTeX is a program that comes with LaTeX. It builds a bibliography from the databases. Your file must have two commands:</p>
<ul>
  <li><code>\bibliography{database1,database2}</code> names the databases (<code>database1.bib</code> and <code>database2.bib</code>). The list appears at this place.</li>
  <li><code>\bibliographystyle{plain}</code> names the style file (<code>plain.bst</code>). Put it anywhere after <code>\begin{document}</code>.</li>
</ul>
<h5>Style files</h5>
<div class="scroll-x"><table class="ref"><tr><th>Style</th><th>Effect</th></tr>
<tr><td><code>plain</code></td><td>Standard. Sorted alphabetically. Numeric labels.</td></tr>
<tr><td><code>unsrt</code></td><td>As plain, but in the order of citation. Numeric labels.</td></tr>
<tr><td><code>alpha</code></td><td>As plain. The labels come from the author name and the year.</td></tr>
<tr><td><code>abbrv</code></td><td>As plain, but more compact. First names, months and journal names are abbreviated.</td></tr>
<tr><td><code>acm</code></td><td>For the ACM journals. Author names in small caps. Numeric labels.</td></tr>
<tr><td><code>apalike</code></td><td>For the American Psychological Association. Use with the <code>apalike</code> package. Alphabetical, last name first, hanging indent, no label.</td></tr>
</table></div>
<p>Other organisations have their own style files. You can edit a <code>.bst</code> file or make a new one with the program <code>makebst</code>.</p>
<h5>The run</h5>
<ol>
  <li>Run LaTeX. It writes the list of <code>\cite</code> references to the <code>.aux</code> file.</li>
  <li>Run BibTeX. It reads the <code>.aux</code> file and the database. It writes the <code>.bbl</code> file in the format of the <code>.bst</code> file. It writes the messages to the <code>.blg</code> file. BibTeX never reads the LaTeX source file.</li>
  <li>Run LaTeX again. It reads the <code>.bbl</code> file.</li>
  <li>Run LaTeX a third time. All references are now resolved.</li>
</ol>
${parsons('Order the compile steps',[L`latex sample`,L`bibtex sample`,L`latex sample`,L`latex sample`],{extra:[L`makeindex sample`]})}
<p>To add a source that you do not cite, use <code>\nocite{key}</code>. It prints no text. <code>\nocite{*}</code> adds every entry of the databases.</p>
<h5>The entry</h5>
<pre class="lx-verb">@BOOK{knuth:86a,
  AUTHOR    = "Donald E. Knuth",
  TITLE     = {The \TeX{}book},
  EDITION   = "third",
  PUBLISHER = "Addison-Wesley",
  ADDRESS   = {Reading, MA},
  YEAR      = 1986 }</pre>
<ul>
  <li>The word after <code>@</code> is the entry type. Capital or lowercase letters are the same.</li>
  <li>The first item in the braces is the key, here <code>knuth:86a</code>.</li>
  <li>Each field has a name, an equals sign and the field text. Commas separate the fields.</li>
  <li>Put the field text in braces or in double quotation marks. A number, such as the year, does not need them.</li>
  <li>The outer braces can be parentheses. The field text cannot.</li>
  <li>Each entry type has required fields, optional fields and ignored fields. If you omit a required field, BibTeX shows an error. An ignored field stays in the database, for example a comment or an abstract.</li>
</ul>
<div class="scroll-x"><table class="ref"><tr><th>Entry type</th><th>Use</th><th>Required fields</th></tr>
<tr><td><code>@article</code></td><td>article in a journal or magazine</td><td>author, title, journal, year</td></tr>
<tr><td><code>@book</code></td><td>book with a publisher</td><td>author or editor, title, publisher, year</td></tr>
<tr><td><code>@booklet</code></td><td>printed work without a publisher</td><td>title</td></tr>
<tr><td><code>@conference</code>, <code>@inproceedings</code></td><td>article in conference proceedings</td><td>author, title, booktitle, year</td></tr>
<tr><td><code>@inbook</code></td><td>part of a book (chapter, pages)</td><td>author or editor, title, chapter and/or pages, publisher, year</td></tr>
<tr><td><code>@incollection</code></td><td>part of a book with its own title</td><td>author, title, booktitle, publisher, year</td></tr>
<tr><td><code>@manual</code></td><td>technical documentation</td><td>title</td></tr>
<tr><td><code>@mastersthesis</code></td><td>Master's thesis</td><td>author, title, school, year</td></tr>
<tr><td><code>@phdthesis</code></td><td>PhD thesis</td><td>author, title, school, year</td></tr>
<tr><td><code>@misc</code></td><td>other work</td><td>none</td></tr>
<tr><td><code>@proceedings</code></td><td>conference proceedings</td><td>title, year</td></tr>
<tr><td><code>@unpublished</code></td><td>unpublished work</td><td>author, title, note</td></tr>
</table></div>
<p>The book writes <code>@masterthesis</code>. The standard name in BibTeX is <code>@mastersthesis</code>.</p>
${ex(L`\TeX{} was designed by Knuth~\cite{knuth84}; \LaTeX{} came later~\cite{lamport86}.
\bibliographystyle{plain}
\bibliography{refs}`,{title:'cite from a .bib file',bib:L`@book{knuth84,
  author    = {Donald E. Knuth},
  title     = {The {\TeX}book},
  publisher = {Addison-Wesley},
  year      = {1984}
}
@article{lamport86,
  author  = {Leslie Lamport},
  title   = {{\LaTeX}: A Document Preparation System},
  journal = {TUGboat},
  volume  = {7},
  pages   = {10--20},
  year    = {1986}
}`,note:'Press ▶ run. The editor shows a <b>refs.bib</b> tab. The Real PDF tab runs BibTeX in TeX Live.'})}
${ex(L`\cite{knuth84,lamport86}
\bibliographystyle{alpha}
\bibliography{refs}`,{title:'the alpha style',bib:L`@book{knuth84,
  author    = {Donald E. Knuth},
  title     = {The {\TeX}book},
  publisher = {Addison-Wesley},
  year      = {1984}
}
@article{lamport86,
  author  = {Leslie Lamport},
  title   = {{\LaTeX}: A Document Preparation System},
  journal = {TUGboat},
  year    = {1986}
}`})}
${fix('Mend the database',L`\documentclass{article}
\begin{document}
See \cite{wirth76}.
\bibliographystyle{plain}
\bibliography{refs}
\end{document}`,{brief:'Open the refs.bib tab. The entry has two errors: a comma is missing between two fields, and the authors are joined with a comma. Correct both.',
 bib:L`@book{wirth76,
  author = {Niklaus Wirth, Kathleen Jensen}
  title = {Pascal User Manual and Report},
  publisher = {Springer},
  year = {1976}
}`,strictWarn:true,checks:[{file:'bib',re:'Wirth and Kathleen|Wirth\\s+and\\s+Kathleen',msg:'join the two authors with “and”'}]})}
${fill('BibTeX run',L`Run LaTeX, then [[bibtex]], then LaTeX [[twice¦2 times¦two times]]. BibTeX writes the [[.bbl¦bbl]] file.`,{strict:false})}
${omr('Bibliography',[
 {q:'What does the argument of thebibliography show?',o:['The number of entries','The width of the widest label','The style','The file name'],a:1,why:'The argument gives the width of the widest label.'},
 {q:'Which file does BibTeX write for LaTeX?',o:['.aux','.bib','.bbl','.blg'],a:2,why:'BibTeX writes the formatted references to the .bbl file.'},
 {q:'Which style prints the entries in the order of citation?',o:['plain','unsrt','alpha','abbrv'],a:1,why:'unsrt does not sort. It keeps the order of citation.'},
 {q:'Which natbib command makes "(Alex et al., 1991)"?',o:['\\citet','\\citep','\\citeauthor','\\citeyear'],a:1,why:'\\citep makes a parenthetical citation.'},
 {q:'Which entry type needs only a title?',o:['@article','@book','@manual','@phdthesis'],a:2,why:'@manual, @booklet and @misc have short lists. @manual needs only a title.'},
 {q:'How many LaTeX runs follow the BibTeX run?',o:['One','Two','Three','Four'],a:1,why:'After BibTeX, run LaTeX two more times.'},
 {q:'Which command adds a source that the text does not cite?',o:['\\cite','\\nocite','\\bibitem','\\add'],a:1,why:'\\nocite{key} puts the entry in the list and prints nothing in the text.'}
])}
${must(H`<ol>
<li><code>thebibliography{widest}</code>, <code>\bibitem{key}</code>, <code>\cite[note]{key}</code>. Two compilations.</li>
<li>natbib: <code>\citet</code>, <code>\citep</code>, starred forms, <code>\citeauthor</code>, <code>\citeyear</code>, options.</li>
<li><code>\bibliographystyle{…}</code> and <code>\bibliography{…}</code>. Styles: plain, unsrt, alpha, abbrv, acm, apalike.</li>
<li>Run order: LaTeX, BibTeX, LaTeX, LaTeX.</li>
<li>Entry syntax. Types and required fields. <code>\nocite</code>.</li>
</ol>`)}
`});

/* ───────────── Unit 4 · Table of contents and index (Tutorial V) ───────────── */
STATIONS.push({id:'m1-toc',title:'Table of contents and index',short:'4 · Contents & index',est:'~35 min',body:H`
${gist('LaTeX builds the table of contents from the headings and the lists of figures and tables from the captions. MakeIndex builds the index from the \\index tags.')}

${tp('Table of contents')}
<p>A table of contents lists the section numbers, the headings and the page numbers. Two similar lists are the list of figures and the list of tables. Their entries are on one level.</p>
<p>LaTeX writes the heading text to the <code>.toc</code> file. It writes the figure captions to the <code>.lof</code> file and the table captions to the <code>.lot</code> file.</p>
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Result</th></tr>
<tr><td><code>\tableofcontents</code></td><td>table of contents</td></tr>
<tr><td><code>\listoffigures</code></td><td>list of figures</td></tr>
<tr><td><code>\listoftables</code></td><td>list of tables</td></tr>
</table></div>
<p>LaTeX prints each list at the place of its command. Compile two times: the first run writes the files and the second run reads them.</p>
${ex(L`\documentclass{article}
\begin{document}
\tableofcontents
\section{Introduction}
Text.
\section{Method}
\subsection{Data}
More text.
\end{document}`,{title:'a table of contents'})}
<p>To change one entry, use the optional argument of the sectioning command or of <code>\caption</code>. To add formatting, use <code>\addtocontents</code>. As a last step, edit the <code>.toc</code>, <code>.lof</code> or <code>.lot</code> file yourself. Do this only for the final version. Use <code>\nofiles</code> to stop LaTeX from writing new versions.</p>
<h5>Additional entries</h5>
<p>The starred sectioning commands do not make an entry in the table of contents. Two commands put information into a contents file:</p>
<ul>
  <li><code>\addtocontents{file}{text}</code> adds user formatting. It has no type argument. Example: <code>\addtocontents{toc}{\protect\vspace{2ex}}</code> adds space in the middle of the table.</li>
  <li><code>\addcontentsline{file}{type}{text}</code> adds an entry. The file is <code>toc</code>, <code>lof</code> or <code>lot</code>. The type is the heading level, or <code>figure</code> or <code>table</code>.</li>
</ul>
<p>Use <code>\protect</code> before LaTeX commands in the text, to delay their expansion. For a numbered entry, use <code>\numberline</code>:</p>
<pre class="lx-verb">\chapter*{Forward}
\addcontentsline{toc}{chapter}{\numberline{}Forward}</pre>
<p>This makes an indented entry with free space for the number. Without <code>\numberline</code>, the word is against the left margin.</p>
<h5>How a contents list is typeset</h5>
<ul>
  <li>A standard entry is <code>\contentsline{type}{text}{page}</code>. The section number is the argument of <code>\numberline</code>.</li>
  <li>LaTeX formats the entry with <code>\@dottedtocline{level}{indent}{numwidth}{text}{page}</code>. The level is the nesting level. Levels higher than the counter <code>tocdepth</code> do not appear. The indent is the total indent. The numwidth is the width of the box for the number.</li>
  <li>Other parameters: <code>\@pnumwidth</code> (width of the page number box), <code>\@tocmarg</code> (indent of the right margin), <code>\@dotsep</code> (space between the dots, in mu). Change them with <code>\renewcommand</code>.</li>
</ul>
<h5>Multiple tables of contents</h5>
<p>The package <code>minitoc</code> makes a small table of contents at the start of each chapter in book and report.</p>
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Use</th></tr>
<tr><td><code>\dominitoc</code></td><td>Put it before <code>\tableofcontents</code>. Required.</td></tr>
<tr><td><code>\faketableofcontents</code></td><td>Use it in place of <code>\tableofcontents</code> for minitocs only.</td></tr>
<tr><td><code>\minitoc</code></td><td>Put it after each <code>\chapter</code> that needs a minitoc.</td></tr>
<tr><td><code>\minitocdepth</code></td><td>Counter: number of levels shown. Default 2.</td></tr>
<tr><td><code>\mtcindent</code></td><td>Indent of the minitoc. Default 24 pt.</td></tr>
<tr><td><code>\mtcfont</code></td><td>Font of the entries.</td></tr>
</table></div>
<p>Each minitoc has a file <code>.mtcN</code>. Three runs are normally necessary. To switch off all minitocs, use the package <code>minitocoff</code> in place of <code>minitoc</code>.</p>
${match('Command and use',[
 [L`<code>\addtocontents</code>`,'adds formatting to a contents file'],[L`<code>\addcontentsline</code>`,'adds an entry to a contents file'],[L`<code>\numberline</code>`,'separates the number from the heading text'],[L`<code>\protect</code>`,'delays the expansion of a command'],[L`<code>\nofiles</code>`,'stops LaTeX from writing new contents files']],{left:'Command',right:'Use'})}

${tp('Index')}
<p>An index helps the reader find a topic in a large document. The common program for the index is <b>MakeIndex</b>.</p>
<h5>Steps</h5>
<ol>
  <li>Tag each word that needs an index entry with <code>\index{index entry}</code>.</li>
  <li>Load the package with <code>\usepackage{makeidx}</code>. Put <code>\makeindex</code> in the preamble. Without it, LaTeX writes nothing.</li>
  <li>Put <code>\printindex</code> where the index must appear. This is normally before <code>\end{document}</code>.</li>
  <li>Run LaTeX. It writes the raw index file <code>file.idx</code>.</li>
  <li>Run <code>makeindex file</code>. It writes <code>file.ind</code> (the entries) and <code>file.ilg</code> (a transcript).</li>
  <li>Run LaTeX again. The index appears on a new page.</li>
</ol>
${ex(L`\documentclass{article}
\usepackage{makeidx}
\makeindex
\begin{document}
A cat\index{cat} is an animal\index{animal}. Every dog\index{animal!dog} is also an animal.
\printindex
\end{document}`,{title:'a small index'})}
<h5>Sub entries</h5>
<p>LaTeX-MakeIndex has up to three levels: main, sub and subsub entries. Separate the levels with <code>!</code>. For example, <code>\index{dimensions!rule!width}</code>.</p>
<h5>Page ranges and cross-references</h5>
<ul>
  <li>For a page range, put <code>\index{...|(}</code> at the start and <code>\index{...|)}</code> at the end. The range must use one kind of numbers: not Roman and Arabic together.</li>
  <li>For a cross-reference with no page number, use the <code>see</code> encapsulator: <code>\index{animalism|see{animal}}</code>. Put it anywhere after <code>\begin{document}</code>. It is convenient to put all of them in one place.</li>
</ul>
<h5>Control of the form</h5>
<ul>
  <li><code>key@visual</code> sorts by the key and prints the visual text. Example: <code>\index{animal@\emph{animal}}</code>.</li>
  <li>The symbol <code>|</code> encloses the page number in a command. <code>\index{keyword|xxx}</code> makes the page number <code>\xxx{n}</code>. Example: <code>\index{mammal|textbf}</code> prints the page number in bold.</li>
</ul>
${ex(L`\documentclass{article}
\usepackage{makeidx}
\makeindex
\begin{document}
Animals\index{animal} are here. Cats\index{animal!mammal!cat} too.
\index{animalism|see{animal}}
Mammals\index{mammal|textbf} are important.
\printindex
\end{document}`,{title:'sub entries, see and bold page numbers'})}
${fill('Index set-up',L`Load the package [[makeidx]]. Put [[\makeindex]] in the preamble. Print the index with [[\printindex]]. Tag a word with [[\index]]{word}.`,{code:true,strict:false})}
${think('Sub entries',L`\index{animal!insect}`,['insect is a sub entry of animal','animal is a sub entry of insect','Two separate entries','An error'],0,'The exclamation mark separates the levels. The part after it is the sub entry.')}
${omr('Contents and index',[
 {q:'Which file holds the table of contents?',o:['.lof','.lot','.toc','.idx'],a:2,why:'.toc holds the table of contents, .lof the list of figures and .lot the list of tables.'},
 {q:'Which command gives an entry for a starred heading?',o:['\\addcontentsline','\\tableofcontents','\\contentsline','\\listoffigures'],a:0,why:'Use \\addcontentsline for a starred heading.'},
 {q:'Which package makes a small contents list in each chapter?',o:['makeidx','minitoc','natbib','geometry'],a:1,why:'The package minitoc does this.'},
 {q:'Which command makes the .idx file when it is in the preamble?',o:['\\index','\\makeindex','\\printindex','\\tableofcontents'],a:1,why:'\\makeindex makes LaTeX write the .idx file.'},
 {q:'Which file does MakeIndex write for LaTeX?',o:['.idx','.ind','.ilg','.aux'],a:1,why:'MakeIndex writes .ind (the entries) and .ilg (a transcript).'},
 {q:'What does |( in \\index do?',o:['Starts a page range','Ends a page range','Makes a see entry','Makes bold text'],a:0,why:'|( starts a range. |) ends it.'}
])}
${must(H`<ol>
<li><code>\tableofcontents</code>, <code>\listoffigures</code>, <code>\listoftables</code>. Files .toc, .lof, .lot. Two runs.</li>
<li><code>\addcontentsline{toc}{type}{text}</code> for a starred heading. <code>\addtocontents</code> for formatting.</li>
<li>minitoc commands.</li>
<li>Index: makeidx, <code>\makeindex</code>, <code>\index</code>, <code>\printindex</code>. Run makeindex.</li>
<li>Index forms: <code>a!b</code>, <code>|(</code>, <code>|)</code>, <code>|see{}</code>, <code>key@visual</code>, <code>|cmd</code>.</li>
</ol>`)}
`});
