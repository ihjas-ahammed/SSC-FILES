/* ═══════════════════ ORIENTATION ═══════════════════ */
const STATIONS=[];
STATIONS.push({id:'start',title:'Start here',short:'How this app works',est:'~5 min',body:H`
${gist('Read a little, run the example, change one thing, predict what happens. That loop is the whole method.')}
<p class="mini" style="margin-top:-.2rem">Written from the syllabus (Python for Data Analysis, units 1–19). Module I is the Python core, II is pandas, III is plotting, and IV is data files and Jupyter.</p>

${tp('The IDE, in one minute')}
<p>Every example in this app runs in your browser. <b>▶ run</b> shows the output under the code. <b>Edit in IDE</b> carries the code to the <b>IDE</b> tab, where you can change it and run it again.</p>
${ex(`name = "Ravi"\nmarks = [40, 75, 90]\nprint(name, "average:", sum(marks) / len(marks))`,{title:'your first program'})}
<ul>
  <li><b>Python loads once.</b> The first run starts Python in the background. Later runs take milliseconds. Numpy, pandas and matplotlib load the first time a program imports them.</li>
  <li><b>Plots</b> appear under the code that draws them.</li>
  <li><b>Variables stay</b> from one run to the next, so run the cells in order.</li>
</ul>
${why(H`<p>Retrieving an answer from memory works better than re-reading. Try each example before you read the answer.</p>`)}
`});
