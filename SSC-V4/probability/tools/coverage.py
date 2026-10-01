#!/usr/bin/env python3
"""Publish an honest reading guide and retain a machine-readable lesson inventory."""
from pathlib import Path
import html,json,re,subprocess
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'sources/chapter-manifest.json').read_text())
parts=['<h1>Probability · coverage and reading guide</h1><p>DA is the primary syllabus. Ross 10e supplies probability; the separate DA bridge supplies inference. Extensions support further study but do not claim full GATE ST preparation. MA has no standalone probability section in its current syllabus.</p><p>These are original explanations and selected worked exercises, not a word-for-word or example-by-example replacement for Ross. Read the original at the section and PDF pages recorded below whenever exact wording is needed. The chapter PDFs are local source files and are not hosted here.</p><p><a href="./">Return to the course</a></p><h2>How to study</h2><p>Read the section, describe its experiment and support, reconstruct its proof, attempt the selected textbook exercises, solve mapped PYQs, then use Recall and correct missed items. First attempts stay on record after correction.</p>']
for ch in manifest:
 n=ch['chapter'];parts.append('<h2>'+html.escape(ch['title'])+'</h2>')
 parts.append('<p>Original PDF pages '+str(ch['pdfStart'])+'–'+str(ch['pdfEnd'])+('. Extension to DA.' if n>=9 else '.')+'</p>')
 p=root/f'sources/coverage-ch{n:02}.md'
 parts.append('<pre>'+html.escape(p.read_text())+'</pre>' if p.exists() else '<p>Authoring and review pending.</p>')
parts.append('<h2>DA bridge</h2><p>Descriptive summaries, standard error, chi-squared and t sampling laws, confidence intervals, mean/proportion/variance testing and count-based chi-squared tests. Original practice is clearly labelled. Sources: <a href="https://www.itl.nist.gov/div898/handbook/">NIST handbook</a> and <a href="https://gate2027.iitm.ac.in/static/doc/GATE2027_Syllabus/DA_GATE2027_Syllabus.pdf">official DA 2027 syllabus</a>.</p>')
parts.append('<p>The experiment-first prompts and story proofs draw on <a href="https://stat110.hsites.harvard.edu/strategic-practice-problems">Harvard Stat 110 strategic practice</a>; the lesson–worked problem–independent practice sequence follows <a href="https://www.ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/pages/resource-index/">MIT 6.041SC course materials</a>.</p>')
reports=sorted((root/'sources').glob('GATE_REVIEW_*.md'))
if reports:
 parts.append('<h2>GATE topic coverage review</h2><p>This review maps the named GATE DA topics to lessons. Selected textbook examples and exercises are still documented separately below.</p>')
 for report in reports:parts.append('<pre>'+html.escape(report.read_text())+'</pre>')
review=root/'sources/MATH_REVIEW.md'
if review.exists():parts.append('<h2>Mathematical review and limits</h2><pre>'+html.escape(review.read_text())+'</pre>')
pyq=root/'sources/pyq-map.md'
parts.append('<h2>Past-paper mapping</h2>'+('<pre>'+html.escape(pyq.read_text())+'</pre>' if pyq.exists() else '<p>Pending. Original practice never counts as a PYQ.</p>'))
text='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Probability coverage</title><style>body{background:#f6f3ea;color:#21352f;font:17px/1.65 system-ui;margin:auto;padding:28px;max-width:1000px}h1,h2{line-height:1.2}a{color:#087f79}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.65 system-ui;border-left:3px solid #ba8830;padding-left:16px}@media(prefers-color-scheme:dark){body{background:#111d1b;color:#e5efe8}a{color:#6ad9c9}}</style><main>'+''.join(parts)+'</main></html>'
(root/'build').mkdir(exist_ok=True)
(root/'build/source-guide.html').write_text(text)
(root/'app/source-guide.html').write_text(text)
print('Reading guide generated.')
