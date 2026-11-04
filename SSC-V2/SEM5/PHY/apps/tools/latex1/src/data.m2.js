/* ═══════════════════ MODULE II — Styling pages (Text 1, Tutorials VI–VII) ═══════════════════
   Written from the book cuts in ASD-STE100 style. */

/* ───────────── Unit 5 · Displayed text (Tutorial VI) ───────────── */
STATIONS.push({id:'m2-display',title:'Displayed text',short:'5 · Displayed text',est:'~45 min',body:H`
${gist('To display a piece of text, put it in an environment. Use quote and verse for borrowed words and poems. Use itemize, enumerate and description for lists.')}

${tp('Displaying')}
<p>Sometimes you must separate a piece of text from the text around it. One method is to typeset it with an extra indent. This is <b>displaying</b>. LaTeX has different constructs for different kinds of displayed text.</p>
<p>An <b>environment</b> marks the start and the end of a passage that needs special treatment. Its general form is:</p>
<p style="text-align:center"><code>\begin{name} ... \end{name}</code></p>
<p>The name tells LaTeX which treatment to use.</p>

${tp('Borrowed words')}
<p>Authors use quotations to support an argument or to use the words of another person. A quotation of one line goes in double quotes. A quotation of several lines is better when displayed.</p>
<ul>
  <li><code>quote</code> displays a quotation of one paragraph. LaTeX adds an indent on both sides.</li>
  <li><code>quotation</code> displays a quotation of several paragraphs. Separate the paragraphs with blank lines.</li>
</ul>
${ex(L`Some mathematicians elevate the spirit of Mathematics to a kind of
intellectual aesthetics. It is best voiced by Bertrand Russell in the
following lines.
\begin{quote}
The true spirit of delight, the exaltation, the sense of being more than man, which is the touchstone of the highest excellence, is to be found in Mathematics as surely as in poetry.
\end{quote}
Yes, to men like Russell, Mathematics is more of an art than science.`,{title:'the quote environment'})}
${ex(L`\begin{quotation}
The first paragraph of a long quotation.

The second paragraph of the quotation.
\end{quotation}`,{title:'the quotation environment'})}
${think('Which environment?',L`A quotation of three paragraphs`,['quote','quotation','verse','center'],1,'Use quotation for a quotation of several paragraphs.')}

${tp('Poetry in typesetting')}
<p>The <code>verse</code> environment typesets poems.</p>
<ul>
  <li><code>\\</code> breaks a line.</li>
  <li>A blank line separates two stanzas.</li>
  <li>Use <code>\\*</code> in place of <code>\\</code> to stop a page break at that line. This keeps rhyming couplets on one page.</li>
  <li>Use <code>\\[5pt]</code> to add 5 points of vertical space between lines. <code>\\*[5pt]</code> does both.</li>
</ul>
${ex(L`Contrary to popular belief, limericks are not always ribald. Some of them contain mathematical concepts:
\begin{verse}
A mathematician once confided\\
That a M\"obius band is one sided\\
You'll get quite a laugh\\
If you cut it in half\\
For it stays in one piece when divided
\end{verse}
There is an extension of this to Klein's bottle also.`,{title:'the verse environment'})}
${match('Environment and use',[
 ['quote','one paragraph of borrowed words'],['quotation','several paragraphs of borrowed words'],['verse','poetry'],['center','text at the center of the page']],{left:'Environment',right:'Use'})}

${tp('Lists')}
<p>LaTeX has three kinds of lists: <code>itemize</code>, <code>enumerate</code> and <code>description</code>. Each list item starts with <code>\item</code>.</p>
<h5>Bullets: itemize</h5>
<p>The <code>itemize</code> environment makes a list with bullets. A list can be inside another list. LaTeX supports four levels.</p>
${ex(L`One should keep the following in mind when using \TeX
\begin{itemize}
\item \TeX\ is a typesetting language and not a word processor
\item \TeX\ is a program and not an application
\item \TeX\ is the natural choice in one of these situations
\begin{itemize}
\item If we want to typeset a document containing a lot of Mathematics
\item If we want our typed document to look beautiful
\end{itemize}
\end{itemize}
Being a program, \TeX\ offers a high degree of flexibility.`,{title:'itemize with a nested list'})}
<p>The default labels are: bullet (level 1), dash (level 2), asterisk (level 3) and centered dot (level 4). The commands <code>\labelitemi</code>, <code>\labelitemii</code>, <code>\labelitemiii</code> and <code>\labelitemiv</code> hold the labels. Use <code>\renewcommand</code> to change one.</p>
${ex(L`{\renewcommand{\labelitemi}{$\triangleright$}
\begin{itemize}
\item First item of a new list
\item Second item
\end{itemize}}
\begin{itemize}
\item The labels are bullets again
\end{itemize}`,{title:'change the label of level 1'})}
<p>The braces around the input make the change local. After the closing brace, the labels return to bullets. Remove the braces to change the labels in the whole document.</p>
<p>To use the symbols of the ZapfDingbats font, load the package <code>pifont</code> and use <code>\ding{42}</code>.</p>
${trap(H`<p>If you omit the braces around <code>\renewcommand</code>, all the lists that follow use the new label.</p>`)}
<h5>Numbers: enumerate</h5>
<p>Use <code>enumerate</code> when the order of the items is important. It also has four levels. The default labels are: 1. 2. (level 1), (a) (b) (level 2), i. ii. (level 3) and A. B. (level 4).</p>
${ex(L`The three basic steps in producing a printed document using \LaTeX\ are as follows
\begin{enumerate}
\item Prepare a source file with the extension ｀｀tex''
\item Compile it with \LaTeX\ to produce a ｀｀dvi'' file
\item Print the document using a ｀｀dvi'' driver
\end{enumerate}`,{title:'enumerate'})}
<p>The labels of one level must follow a sequence. So the change of labels needs more work. The package <code>enumerate</code> by David Carlisle makes it easy. Give the label in square brackets after <code>\begin{enumerate}</code>.</p>
${ex(L`\documentclass{article}
\usepackage{enumerate}
\begin{document}
The three basic steps in producing a printed document using \LaTeX\ are as follows:
\begin{enumerate}[\hspace{0.5cm}Step 1.]
\item Prepare a source file with the extension ｀｀tex''
\item Compile it with \LaTeX\ to produce a ｀｀dvi'' file
\begin{enumerate}[i.]
\item Use a previewer to view the output
\item Edit the source if needed
\item Recompile
\end{enumerate}
\item Print the document using a ｀｀dvi'' driver
\end{enumerate}
\end{document}`,{title:'the enumerate package',run:true})}
<ul>
  <li>The text <code>Step 1.</code> in the option makes the labels Step 1, Step 2, Step 3.</li>
  <li><code>\hspace{0.5cm}</code> adds an indent at the left margin. The environment does not add one.</li>
  <li>Add <code>\bfseries</code> in the option for bold labels: <code>[\hspace{0.5cm}\bfseries Step 1]</code>.</li>
</ul>
<p>In the option, the characters <code>1</code>, <code>a</code>, <code>A</code>, <code>i</code> and <code>I</code> mean a counter style. <code>1</code> is Arabic numerals. <code>a</code> and <code>A</code> are lowercase and uppercase letters. <code>i</code> and <code>I</code> are lowercase and uppercase Roman numerals. If you want one of these characters as plain text, put it in braces.</p>
${ex(L`\documentclass{article}
\usepackage{enumerate}
\begin{document}
Addition of numbers satisfies the following conditions:
\begin{enumerate}[\hspace{1cm}({A}1)]
\item It is commutative
\item It is associative
\item There is an additive identity
\item Each number has an additive inverse
\end{enumerate}
\end{document}`,{title:'the label (A1), (A2)'})}
${trap(H`<p>The option <code>[\hspace{1cm}(A1)]</code> does not give (A1), (A2). The letter <code>A</code> is a counter style, so the output is (11), (22). Write <code>({A}1)</code>.</p>`)}
<h5>Descriptions: description</h5>
<p>The <code>description</code> environment makes no label. It prints the text in square brackets after each <code>\item</code> as the label. The labels are in boldface roman. The first level has no indent.</p>
${ex(L`Let us take stock of what we have learnt
\begin{description}
\item[\TeX] A typesetting program
\item[Emacs] A text editor and also
\begin{description}
\item a programming environment
\item a mailer
\item and a lot else besides
\end{description}
\item[AbiWord] A word processor
\end{description}`,{title:'description'})}
<p>Change the label font and the indent with <code>\descriptionlabel</code>:</p>
<pre class="lx-verb">\renewcommand{\descriptionlabel}[1]{\hspace{1cm}\textsf{#1}}</pre>
<h5>Your own label on any item</h5>
<p>In all three lists, text in square brackets after <code>\item</code> replaces the label.</p>
${ex(L`The real number $l$ is the least upper bound of the set $A$ if it satisfies the following conditions
\begin{enumerate}
\item[(1)] $l$ is an upper bound of $A$
\item[(2)] if $u$ is an upper bound of $A$, then $l\le u$
\end{enumerate}`,{title:'\\item[(1)]'})}
${trap(H`<p>An item that starts with a square bracket makes LaTeX read the bracket as a label. <code>\item [0,1] is a closed interval</code> loses the text "0,1". Put mathematics in dollar signs: <code>\item $[0,1]$ is a closed interval</code>.</p>`)}
${ex(L`Let's review the notation
\begin{itemize}
\item $(0,1)$ is an \emph{open} interval
\item $[0,1]$ is a \emph{closed} interval
\end{itemize}`,{title:'mathematics in dollar signs'})}
${parsons('A shopping list',[L`\begin{itemize}`,L`  \item Rice`,L`  \item Coconut oil`,L`\end{itemize}`],{extra:[L`\begin{list}`,L`  \item{Salt}`]})}
${fill('Choose the environment',L`Poetry uses [[verse]]. A list with numbers uses [[enumerate]]. A list with bullets uses [[itemize]]. A list of terms with a label uses [[description]].`,{strict:false})}
${build('Exam instructions',L`\documentclass{article}
\begin{document}
Rules of the exam
Bring a pen.
Read all questions.
Write your number on each page.
\end{document}`,{brief:'Put the three rules in a numbered list under the title.',checks:[{re:'\\\\begin\\{enumerate\\}',msg:'an enumerate environment'},{re:'\\\\item',msg:'\\item for each rule'}]})}
${omr('Displayed text',[
 {q:'Which environment is for poetry?',o:['quote','quotation','verse','poem'],a:2,why:'The verse environment typesets poetry.'},
 {q:'Which command stops a page break at a line break?',o:['\\\\','\\\\*','\\\\[5pt]','\\newline'],a:1,why:'\\\\* is a line break where no page break occurs.'},
 {q:'How many levels of nesting does itemize support?',o:['Two','Three','Four','Six'],a:2,why:'itemize and enumerate support four levels.'},
 {q:'Which command holds the label of level 1 in itemize?',o:['\\labelitem','\\labelitemi','\\itemlabel','\\theitem'],a:1,why:'\\labelitemi holds the label of the first level.'},
 {q:'Why do braces surround \\renewcommand in the book example?',o:['They are required','They make the change local to one list','They make it bold','They hide the label'],a:1,why:'The braces limit the change to that list.'},
 {q:'Which package gives easy labels for enumerate?',o:['pifont','array','enumerate','multirow'],a:2,why:'The package enumerate by David Carlisle does this.'},
 {q:'What does \\item[(2)] do?',o:['Starts a new list','Replaces the label with (2)','Makes the item bold','Is an error'],a:1,why:'Text in square brackets replaces the label.'},
 {q:'Which environment makes no label by itself?',o:['itemize','enumerate','description','quote'],a:2,why:'description prints only the labels that you give.'}
])}
${must(H`<ol>
<li>quote (one paragraph), quotation (several paragraphs), verse (<code>\\</code>, <code>\\*</code>, blank line for a stanza).</li>
<li>itemize, enumerate, description. Four levels. <code>\item</code>.</li>
<li><code>\renewcommand{\labelitemi}{…}</code>. Braces make it local. <code>pifont</code> and <code>\ding</code>.</li>
<li>Package <code>enumerate</code>: <code>[Step 1.]</code>. Put counter characters in braces: <code>{A}</code>.</li>
<li><code>\descriptionlabel</code>. <code>\item[label]</code>. Put <code>[0,1]</code> in dollar signs.</li>
</ol>`)}
`});

/* ───────────── Unit 6 · Rows and columns: tabbing (Tutorial VII.1) ───────────── */
STATIONS.push({id:'m2-tabbing',title:'Rows and columns — keeping tabs',short:'6 · Tabbing',est:'~20 min',body:H`
${gist('The tabbing environment sets tab stops. \\= sets a stop. \\> goes to the next stop. \\kill sets the stops without printing a line.')}

${tp('Why tabbing')}
<p>The list environments make rows. Sometimes the rows must have vertical columns also. The <code>tabbing</code> environment aligns text in columns. It works like the tab key of a typewriter.</p>

${tp('The basics')}
${ex(L`Let's take stock of what we have learnt
\begin{tabbing}
\hspace{1cm}\= \textbf{AbiWord}\quad\= A word processor\\[5pt]
\> \textbf{Emacs}  \> A text editor\\[5pt]
\> \textbf{\TeX}  \> A typesetting program
\end{tabbing}`,{title:'two tab stops'})}
<p>Read the example line by line:</p>
<ul>
  <li>In line 1, the first <code>\=</code> sets tab 1 at 1 cm from the left margin. The text "AbiWord" starts at this tab.</li>
  <li>The second <code>\=</code> sets tab 2 one <code>\quad</code> after "AbiWord". A <code>\quad</code> is a TeX length, about one space. The text "A word processor" starts at tab 2.</li>
  <li><code>\\[5pt]</code> ends the line and adds 5 points of space.</li>
  <li>In line 2, <code>\></code> moves to the next tab stop that is already set. The first <code>\></code> goes to tab 1. The second <code>\></code> goes to tab 2.</li>
</ul>
<h5>Set the stops with \kill</h5>
<p>A tab stop is set by the first line. If the first line is a data line, the stops can be in the wrong place. In the book, the stop is set after "TeX" and the other lines overprint. To avoid this, use a dummy line. The command <code>\kill</code> at the end of a line makes TeX set the stops of that line and not print it.</p>
${ex(L`\begin{tabbing}
\textbf{AbiWord}\quad\= A word processor\kill
\textbf{\TeX}\quad  \> A typesetting program\\[5pt]
\textbf{Emacs}\quad \> A text editor\\[5pt]
\textbf{AbiWord}\quad\> A word processor
\end{tabbing}`,{title:'a dummy line with \\kill'})}
${trap(H`<p>If the first line is not a \kill line, the stop comes after the first word. Longer words in the next lines then overprint the text.</p>`)}
<p>You can set new tabs in any later line. The new tabs are added after the tabs already set. To replace the old tabs, set a new <code>\=</code> in a line.</p>
${ex(L`\begin{tabbing}
\textbf{AbiWord}\quad\= : \= A word processor\kill
\textbf{\TeX}\quad  \> : \> A typesetting program\\[5pt]
\textbf{Emacs}\quad  \> : \> A text editor\\[5pt]
\>  \> \quad\= a programming environment\\[5pt]
\>  \>  \> a mail reader\\[5pt]
\textbf{AbiWord}\quad\> : \> A word processor
\end{tabbing}`,{title:'a third tab set later'})}

${tp('Pushing and popping')}
<p>To go back to the old tabs after you set new tabs, use a pair of commands:</p>
<ul>
  <li><code>\pushtabs</code> stores the current tabs and removes them. You can then set a new scheme.</li>
  <li><code>\poptabs</code> makes the stored tabs active again.</li>
</ul>
<p>You can nest these commands.</p>
${ex(L`\begin{tabbing}
Program\quad \= : \= \TeX\\[5pt]
Author  \> : \> Donald Knuth\\[5pt]
Manuals  \> :\\
\pushtabs
\quad\= The Advanced \TeX\ Book\quad\= David Salomon\quad
\= Springer-Verlag\kill\\
\>\textsf{Title}  \>\textsf{Author} \>\textsf{Publisher}\\[8pt]
\>The \TeX Book  \>Donald Knuth  \>Addison-Wesley\\[5pt]
\>The Advanced \TeX\ Book  \>David Salomon  \> Springer-Verlag\\[8pt]
\poptabs
Tutorial  \> :  \> tug.org.in/tutorial
\end{tabbing}`,{title:'\\pushtabs and \\poptabs'})}

${tp('More commands')}
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Effect</th></tr>
<tr><td><code>\=</code></td><td>sets a tab stop</td></tr>
<tr><td><code>\&gt;</code></td><td>goes to the next tab stop</td></tr>
<tr><td><code>\kill</code></td><td>sets the stops of the line and does not print it</td></tr>
<tr><td><code>\+</code></td><td>at the end of a line: all next lines start at the first tab. <code>\+\+</code>: the second tab, and so on</td></tr>
<tr><td><code>\-</code></td><td>at the end of a line: cancels one <code>\+</code></td></tr>
<tr><td><code>\&lt;</code></td><td>at the start of a line: cancels one <code>\+</code> for that line only</td></tr>
<tr><td><code>\｀</code></td><td>puts the text that follows against the right margin. Do not use <code>\=</code> or <code>\&gt;</code> after it in the line</td></tr>
<tr><td><code>\'</code></td><td>puts the text before it just left of the current tab, and the text after it at the tab. The space is set by <code>\tabbingsep</code></td></tr>
<tr><td><code>\pushtabs</code> / <code>\poptabs</code></td><td>store / restore the tab scheme</td></tr>
<tr><td><code>\a=</code>, <code>\a｀</code>, <code>\a'</code></td><td>the accents (macron, grave, acute) inside tabbing</td></tr>
</table></div>
${ex(L`\begin{tabbing}
Row 1 Column 1\hspace{2cm}
\= Row 1 Column 2\\[5pt]
\> Row 2 Column 2\hspace{1.5cm}\=Row 2 Column 3\+\+\\[5pt]
Row 3 Column 3\-\\[5pt]
Row 4 Column 2  \>Row 4 Column 3\\[5pt]
Row 8 Column 1  \｀Right\\[5pt]
Row 9 Column 1  \> and\'Row 9 Column 2
\end{tabbing}`,{title:'several tabbing commands'})}
<p>LaTeX does not need a tidy source. The output is the same if you remove the extra spaces. But a tidy source is easier for people to read and edit. Keep the source readable.</p>
${think('The missing \\kill',L`\begin{tabbing}
\TeX\quad\= A typesetting program\\
Emacs\quad\> A text editor
\end{tabbing}`,['Two columns, aligned','The second line text starts just after "Emacs" and overprints, or is too close','An error','Nothing is printed'],1,'The tab stop is after "TeX" and a quad. A longer word in the next line passes the stop.')}
${match('Tabbing command and effect',[
 [L`<code>\=</code>`,'sets a tab stop'],[L`<code>\></code>`,'goes to the next stop'],[L`<code>\kill</code>`,'sets stops without printing the line'],[L`<code>\pushtabs</code>`,'stores the current stops'],[L`<code>\poptabs</code>`,'restores the stored stops']],{left:'Command',right:'Effect'})}
${build('A small timetable with tabbing',L`\documentclass{article}
\begin{document}
Monday 9:00 Physics
Tuesday 10:00 Maths
Friday 11:00 LaTeX
\end{document}`,{brief:'Use a tabbing environment with three columns: the day, the time and the subject. Set the stops with a \\kill line.',checks:[{re:'\\\\begin\\{tabbing\\}',msg:'a tabbing environment'},{re:'\\\\kill',msg:'a \\kill line'},{re:'\\\\>',msg:'\\> between the columns'}]})}
${omr('Tabbing',[
 {q:'Which command sets a tab stop?',o:['\\>','\\=','\\kill','\\+'],a:1,why:'\\= sets a tab stop. \\> moves to the next stop.'},
 {q:'What does \\kill do?',o:['Deletes the table','Sets the stops of the line but does not print it','Ends the environment','Removes all stops'],a:1,why:'A \\kill line sets stops without printing.'},
 {q:'Which pair stores and restores a tab scheme?',o:['\\kill and \\=','\\pushtabs and \\poptabs','\\+ and \\-','\\< and \\>'],a:1,why:'\\pushtabs stores the stops. \\poptabs restores them.'},
 {q:'What does \\+ at the end of a line do?',o:['Starts a new page','Makes the next lines start at the first tab','Adds a line','Cancels a tab'],a:1,why:'\\+ moves the start of all next lines to the first tab. \\- cancels it.'},
 {q:'Which command puts text against the right margin?',o:['\\｀','\\\'','\\<','\\-'],a:0,why:'\\｀ (left quote) puts the text flush right.'}
])}
`});

/* ───────────── Unit 7 · Tables (Tutorial VII.2) ───────────── */
STATIONS.push({id:'m2-tables',title:'Tables',short:'7 · Tables',est:'~55 min',body:H`
${gist('The tabular environment sets rows and columns. The column specification tells LaTeX the alignment and the lines. & separates the columns. \\\\ ends a row.')}

${tp('The tabular environment')}
${ex(L`The table below shows the sizes of the planets of our solar system.
\begin{center}
\begin{tabular}{lr}
Planet & Diameter(km)\\[5pt]
Mercury & 4878\\
Venus  & 12104\\
Earth  & 12756\\
Mars  & 6794\\
Jupiter & 142984\\
Saturn  & 120536\\
Uranus  & 51118\\
Neptune & 49532\\
Pluto  & 2274
\end{tabular}
\end{center}
As can be seen, Pluto is the smallest and Jupiter the largest.`,{title:'the planets'})}
<ul>
  <li><code>\begin{center}</code> puts the table at the center.</li>
  <li>The specification <code>{lr}</code> gives two columns. The first column is aligned left. The second column is aligned right.</li>
  <li><code>&amp;</code> separates the entries of a row. <code>\\</code> ends a row.</li>
  <li><code>\\[5pt]</code> adds 5 points of space after the row.</li>
</ul>
<h5>Column specifiers</h5>
<div class="scroll-x"><table class="ref"><tr><th>Specifier</th><th>Meaning</th></tr>
<tr><td><code>l</code></td><td>left aligned</td></tr>
<tr><td><code>r</code></td><td>right aligned</td></tr>
<tr><td><code>c</code></td><td>centered</td></tr>
<tr><td><code>p{width}</code></td><td>a paragraph box of the given width. Text wraps. The top line aligns with the other columns</td></tr>
<tr><td><code>|</code></td><td>a vertical line. Two in a row make a double line</td></tr>
<tr><td><code>@{text}</code></td><td>puts the text between the columns and removes the normal column space</td></tr>
<tr><td><code>m{width}</code></td><td>(array package) as <code>p</code>, but vertically in the middle</td></tr>
<tr><td><code>&gt;{decl}</code></td><td>(array package) inserts the declaration before the column</td></tr>
<tr><td><code>!{text}</code></td><td>(array package) as <code>@</code>, but keeps the column space</td></tr>
</table></div>
${ex(L`\begin{tabular}{cr}
Planet & Diameter(km)\\[5pt]
Mercury & 4878\\
Pluto  & 2274
\end{tabular}`,{title:'centered first column'})}
<h5>Paragraph columns</h5>
<p>Use <code>p{6cm}</code> for a column of text that wraps. If you use <code>\raggedright</code> or <code>\centering</code> in a <code>p</code> column, you can put line breaks with <code>\\</code> in it. In the last column of a row, end the row with <code>\tabularnewline</code>.</p>
${ex(L`\begin{tabular}{lp{6cm}}
Planet & Features\tabularnewline[8pt]
Mercury & \raggedright Lunar like crust\\
Crustal faulting\\
Small magnetic fields\tabularnewline[3pt]
Venus  & \raggedright Shrouded in clouds\\
Undulating surface\tabularnewline[3pt]
Neptune &  Unable to detect from earth\tabularnewline[3pt]
\end{tabular}`,{title:'p column with line breaks'})}
${trap(H`<p>In a <code>p</code> column with <code>\raggedright</code>, the command <code>\\</code> breaks the line in the cell. It does not end the row. Use <code>\tabularnewline</code> for the end of a row in the last column.</p>`)}
<h5>Lines</h5>
<p>The character <code>|</code> in the specification draws a vertical line for the full height of the table. The command <code>\hline</code> after a row draws a horizontal line for the full width. Use <code>\hline</code> at the start for a line above the first row. If you put <code>\hline</code> after the last row, end that row with <code>\\</code>.</p>
${ex(L`\begin{tabular}{|l|r|}
\hline
Planet  & Diameter(km)\\
\hline
Mercury & 4878\\
Venus   & 12104\\
Pluto   & 2274\\
\hline
\end{tabular}`,{title:'lines'})}
${think('Double lines',L`\begin{tabular}{||l||}`,['A single line on each side','A double line on each side','An error','No lines'],1,'Two vertical bars in a row make a double line.')}

${tp('Spanning columns: \\multicolumn')}
<p>The general form is <code>\multicolumn{num}{pos}{item}</code>. <code>num</code> is the number of columns to span. <code>pos</code> is the position of the item. <code>item</code> is the text.</p>
${ex(L`\begin{tabular}{lrr}
Planet & \multicolumn{2}{c}{Distance from sun (km)}\\
& Maximum  & Minimum\\
Mercury & 69400000  & 46800000\\
Venus  & 109000000  & 107600000\\
Earth  & 152600000  & 147400000
\end{tabular}`,{title:'a heading over two columns'})}
<p>The second row starts with <code>&amp;</code>. The first column of that row has no entry.</p>
<h5>Lines with \multicolumn</h5>
<p>LaTeX splits the specification <code>|l|r|r|</code> into <code>|l|</code>, <code>r|</code> and <code>r|</code>. The command <code>\multicolumn{2}</code> resets the last two columns. The last <code>|</code> is lost. So write <code>c|</code> in the position argument.</p>
<p>The command <code>\cline{i-j}</code> draws a line from column i to column j.</p>
${ex(L`\begin{tabular}{|l|r|r|}
\hline
Planet & \multicolumn{2}{c|}{Distance from sun (km)}\\
\cline{2-3}
& Maximum  & Minimum\\
\hline
Mercury & 69400000  & 46800000\\
Venus  & 109000000  & 107600000\\
\hline
\end{tabular}`,{title:'\\cline{2-3}'})}
<p>You can use <code>\multicolumn{1}{…}{…}</code> to change the position of one entry. The scope of <code>\centering</code> in a <code>\multicolumn</code> cell ends with the cell, so you do not need <code>\tabularnewline</code> there.</p>
${ex(L`\begin{tabular}{|l|r|r|}
\hline
& \multicolumn{2}{p{3.5cm}|}%
{\centering Distance from sun \\ (million km)}\\
\cline{2-3}
\multicolumn{1}{|c|}{Planet}
& \multicolumn{1}{c|}{Maximum}
& \multicolumn{1}{c|}{Minimum}\\
\hline
Mercury & 69.4  & 46.8\\
Venus  & 109.0  & 107.6\\
\hline
\end{tabular}`,{title:'\\multicolumn{1}'})}
<h5>Row space: \arraystretch</h5>
<p>The default value of <code>\arraystretch</code> is 1. If you set it to k, the space between the rows is k times larger.</p>
${ex(L`\begin{center}
\renewcommand{\arraystretch}{1.5}
\begin{tabular}{|l|r|}
\hline
Mercury & 69.4\\ \hline
Venus  & 109.0\\ \hline
\end{tabular}
\end{center}`,{title:'\\arraystretch'})}
<h5>The @ specification</h5>
<p><code>r@{--}l</code> makes a right column and a left column with "–" between them. The dashes line up. LaTeX removes the normal space between these two columns. You do not type the dash in each row.</p>
${ex(L`\begin{tabular}{|c|r@{--}l|}
\hline
Height & \multicolumn{2}{c|}{Ideal weight}\\
(cm)  & \multicolumn{2}{c|}{(kg)}\\
\hline
155 & 53.5 & 64\\
160 & 56  & 67\\
165 & 59  & 71\\
\hline
\end{tabular}`,{title:'r@{--}l'})}

${tp('Packages that enhance tabular')}
<h5>array</h5>
<p>Load it with <code>\usepackage{array}</code>.</p>
<ul>
  <li><code>m{wd}</code> makes a column of width wd as <code>p</code> does, but the text is vertically in the middle.</li>
  <li><code>&gt;{decl}</code> inserts decl in front of the column. For example, <code>&gt;{\bfseries}l</code> makes the whole column bold.</li>
  <li><code>!{text}</code> works as <code>@</code>, but keeps the column space.</li>
</ul>
${ex(L`\documentclass{article}
\usepackage{array}
\begin{document}
\begin{tabular}{|>{\bfseries}l|r|}
\hline
\multicolumn{1}{|m{1.5cm}|}{\centering Planet}
&\multicolumn{1}{m{2.3cm}|}{\centering Mean distance from sun \\ (km)}\\
\hline
Mercury & 58100000\\
Venus  & 108300000\\
\hline
\end{tabular}
\end{document}`,{title:'array: m and >{}',run:true})}
<h5>multirow</h5>
<p>Load it with <code>\usepackage{multirow}</code>. The command <code>\multirow{num}{wd}{item}</code> spans num rows. wd is the width of the column. The command <code>\multirowsetup</code> sets the horizontal alignment. The default is <code>\raggedright</code>. Use <code>\renewcommand{\multirowsetup}{\centering}</code> to center the text.</p>
${ex(L`\documentclass{article}
\usepackage{multirow}
\begin{document}
\renewcommand{\multirowsetup}{\centering}
\begin{tabular}{|l|r|r|}
\hline
\multirow{2}{1.5cm}{Planet}
& \multicolumn{2}{p{3.5cm}|}{\centering Distance from sun \\ (million km)}\\
\cline{2-3}
& \multicolumn{1}{c|}{Maximum}
& \multicolumn{1}{c|}{Minimum}\\
\hline
Mercury & 69.4  & 46.8\\
Venus  & 109.0  & 107.6\\
\hline
\end{tabular}
\end{document}`,{title:'multirow',run:true})}
<h5>longtable</h5>
<p>A <code>tabular</code> cannot go over more than one page. The package <code>longtable</code> by David Carlisle can. Load it, and use <code>\begin{longtable}</code> in place of <code>\begin{tabular}</code>. Footnotes and <code>\newpage</code> work inside it. These commands set the rows at the top and bottom of each page:</p>
<div class="scroll-x"><table class="ref"><tr><th>Command</th><th>Rows that it ends</th></tr>
<tr><td><code>\endfirsthead</code></td><td>rows at the top of the first page</td></tr>
<tr><td><code>\endhead</code></td><td>rows at the top of each next page</td></tr>
<tr><td><code>\endfoot</code></td><td>rows at the bottom of each page</td></tr>
<tr><td><code>\endlastfoot</code></td><td>rows at the very end of the table</td></tr>
</table></div>
<p>Other packages for tables: <code>tabularx</code>, <code>delarray</code>, <code>dcolumn</code> and <code>hhline</code>.</p>
<h5>tabbing and tabular</h5>
<div class="scroll-x"><table class="ref"><tr><th>tabbing</th><th>tabular</th></tr>
<tr><td>Only as a separate paragraph</td><td>Anywhere in the text, also in mathematics</td></tr>
<tr><td>Can go over many pages</td><td>Cannot go over many pages</td></tr>
<tr><td>Cannot be nested</td><td>Can be nested to any level</td></tr>
</table></div>

${tp('Table as a float')}
<p>A <code>table</code> environment holds a table, a caption and a label. LaTeX numbers the caption automatically. Put <code>\label</code> after <code>\caption</code>.</p>
${ex(L`\begin{table}[h]
\centering
\caption{Sizes of the planets}\label{planets}
\begin{tabular}{|l|r|}
\hline
Planet & Diameter(km)\\ \hline
Mercury & 4878\\ \hline
\end{tabular}
\end{table}
See Table~\ref{planets}.`,{title:'table, caption and label'})}
${parsons('A two-column table',[L`\begin{tabular}{ll}`,L`Language & Year \\`,L`\TeX & 1978 \\`,L`\LaTeX & 1985 \\`,L`\end{tabular}`],{extra:[L`\begin{table}{ll}`]})}
${fill('Column specifications',L`The specification [[|l|r|]] gives a left column and a right column with lines. The command [[\multicolumn]]{2}{c}{Title} spans two columns. The command [[\cline]]{2-3} draws a line under columns 2 and 3.`,{code:true,strict:false})}
${match('Package and use',[
 ['array','the m column and >{decl}'],['multirow','a cell that spans rows'],['longtable','a table that goes over many pages'],['enumerate','labels of a list']],{left:'Package',right:'Use'})}
${build('Build a mark sheet',L`\documentclass{article}
\begin{document}
Name Maths Physics
Asha 80 75
Ravi 72 88
\end{document}`,{brief:'Make a table with three columns and lines. Put the name column on the left. Put the marks on the right. Put a line after each row.',checks:[{re:'\\\\begin\\{tabular\\}',msg:'a tabular environment'},{re:'\\\\hline',msg:'\\hline'},{re:'\\|',msg:'a vertical line in the specification'}]})}
${omr('Tables',[
 {q:'What does the specification {lr} give?',o:['Two left columns','A left column and a right column','A list and a row','Two lines'],a:1,why:'l is left. r is right.'},
 {q:'What does & do in a tabular?',o:['Ends a row','Separates the entries of a row','Draws a line','Starts a table'],a:1,why:'& separates the columns. \\\\ ends the row.'},
 {q:'Which specifier makes a column of fixed width with wrapped text?',o:['l','c','p{…}','|'],a:2,why:'p{width} makes a paragraph box.'},
 {q:'Which command draws a line from column 2 to column 3?',o:['\\hline','\\cline{2-3}','\\line{2-3}','\\multicolumn{2}{c}{}'],a:1,why:'\\cline{i-j} draws a line from column i to column j.'},
 {q:'Why is c| used in \\multicolumn{2}{c|}{…} in a table with |l|r|r|?',o:['To center the text twice','To put back the last vertical line','To draw a horizontal line','For the font'],a:1,why:'\\multicolumn resets the last columns. The final | is lost, so you supply it.'},
 {q:'What does r@{--}l do?',o:['Two columns with a dash between them and no column space','A rule','A comment','A merged cell'],a:0,why:'The text in @{…} replaces the space between the columns.'},
 {q:'Which package gives m{wd} columns?',o:['array','multirow','longtable','enumerate'],a:0,why:'The array package has m, > and !.'},
 {q:'Which environment makes a table that goes over many pages?',o:['tabular','tabbing','longtable','table'],a:2,why:'longtable allows many pages. tabular does not.'},
 {q:'What is the default value of \\arraystretch?',o:['0','1','1.5','2'],a:1,why:'The default is 1. A larger value gives more space between the rows.'}
])}
${must(H`<ol>
<li><code>tabular</code>: specification, <code>&amp;</code>, <code>\\</code>, <code>\\[5pt]</code>.</li>
<li>Specifiers: l, r, c, p{}, |, @{}; array: m{}, &gt;{}, !{}.</li>
<li><code>\hline</code>, <code>\cline{i-j}</code>, <code>\multicolumn{n}{pos}{text}</code>. Use <code>c|</code> to keep the last line.</li>
<li><code>\tabularnewline</code> in the last <code>p</code> column.</li>
<li><code>\arraystretch</code>. multirow: <code>\multirow</code>, <code>\multirowsetup</code>. longtable: <code>\endfirsthead</code> <code>\endhead</code> <code>\endfoot</code> <code>\endlastfoot</code>.</li>
<li>tabbing and tabular: three differences.</li>
</ol>`)}
`});
