#!/usr/bin/env python3
"""Generate the station files (src/data.*.js) from the book cuts.
Inputs: examples.json (extracted programs and In/Out sessions), stations.json (earlier prose),
handwritten.py (unit 4 and Module V). Every program and session goes to exactly one unit."""
import json, re, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from handwritten import UNIT4, MODULE_V, PROGRAM_FIX, UNIT13_DEMO
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'src')
SC = '/tmp/claude-1000/-home-ihjas-Documents/60b0e123-609b-58ee-8d73-31e83606d21b/scratchpad'
EX = json.load(open(os.path.join(SC, 'examples.json')))
OLD = {s['id']: s for g in json.load(open(os.path.join(SC, 'stations.json'))) for s in g}
J = lambda s: json.dumps(s, ensure_ascii=False)

def progs(key, uid):
    out = []
    for p in EX[key]['programs']:
        code = PROGRAM_FIX.get((uid, p['n']), p['code'])
        out.append((f"Program {p['n']} · {p['desc'] or 'example'}".rstrip(' ·'), code))
    return out
def sess(key, lo=None, hi=None, pick=None):
    S = EX[key]['sessions']
    if pick is not None:
        S = [s for s in S if pick(s)]
    else:
        S = S[lo or 0: hi]
    return [(f"Example · {s.splitlines()[0][:60]}", s) for s in S]
def not_(fn):
    return lambda s: not fn(s)
has = lambda pat: (lambda s: re.search(pat, s) is not None)

K = {
 'c1': 'unit-1-datatypes-operators-lists', 'c2': 'unit-2-tuples-sets-dicts-files', 'c3': 'unit-3-control-statements',
 'c5': 'unit-5-numpy-arrays', 'c6': 'unit-6-dataframe-creation', 'c7': 'unit-7-18-dataframe-attributes-pivot-sort-loc-iloc',
 'c8': 'unit-8-missing-data', 'c9': 'unit-9-statistical-values-count-mode-covariance',
 'c10': 'unit-10-aggregation-grouping-wrangling-merging', 'c11': 'unit-11-12-bar-histogram-box-scatter-matplotlib',
 'c13': 'unit-13-16-correlation-seaborn-heatmap-categorical', 'c17': 'unit-17-series-dataframes-data-file-formats',
 'c19': 'unit-19-jupyter-notebooks-ipython'}

# Split the combined cuts, keeping the book's order. Each split unit also gets the setup cells of its cut
# that come before it (assignments and imports only, no plots), so every example runs on its own.
def indexed(key):
    return list(enumerate(EX[key]['sessions']))
def setup_before(key, first_idx, keep=None):
    out = []
    for i, s in indexed(key):
        if i >= first_idx: break
        if keep is not None and not keep(i, s): continue
        if re.search(r'plot|show\(|savefig|hist\(|imshow|figure|subplots', s): continue
        if re.search(r'=|^import |^from ', s, re.M):
            out.append(("Setup · " + s.splitlines()[0][:50], s))
    return out
def cut_range(key, lo, hi=None, pick=None):
    return [(f"Example · {s.splitlines()[0][:60]}", s) for i, s in indexed(key)
            if i >= lo and (hi is None or i < hi) and (pick is None or pick(s))]

c11 = cut_range(K['c11'], 0, 10)
c12 = setup_before(K['c11'], 10) + cut_range(K['c11'], 10)
c14 = setup_before(K['c13'], 19) + cut_range(K['c13'], 19, 31)
c15 = setup_before(K['c13'], 31) + cut_range(K['c13'], 31, 38)
c16 = setup_before(K['c13'], 0) + cut_range(K['c13'], 0, 19) + setup_before(K['c13'], 38) + cut_range(K['c13'], 38)
is_loc = lambda s: re.search(r'\bloc\b|\.loc|iloc', s) is not None
c7 = cut_range(K['c7'], 0, None, pick=lambda s: not is_loc(s))
first_loc = next(i for i, s in indexed(K['c7']) if is_loc(s))
c18 = setup_before(K['c7'], first_loc, keep=lambda i, s: not is_loc(s)) + cut_range(K['c7'], 0, None, pick=is_loc)

def heads(key):
    """Section headings of a cut (title lines), so every topic in the book is listed."""
    lines = open(os.path.join(SC, 'py', key + '.txt'), encoding='utf-8').read().split('\n')
    out = []
    for i, ln in enumerate(lines):
        t = ln.strip()
        if 4 <= len(t) <= 60 and re.match(r'^(\d+(\.\d+)*\.?\s+)?[A-Z][A-Za-z ,/&()\-’\']+$', t) and not t.endswith(('.', ',')):
            prev = lines[i - 1].strip() if i else ''
            if prev == '' and not re.match(r'^(Output|Program|Figure|Table|Chapter)', t):
                out.append(t)
    seen = []
    for h in out:
        if h not in seen and h.lower() not in ('chapter', 'output'):
            seen.append(h)
    return seen[:80]

UNITS = [
 dict(id='u1', num=1, title='Python: variables, operators, data types, numerical types (int, float, complex), lists and list operations', mod='I',
      old='u1', gist='Python does not need type declarations. The value has the type, and a name is a tag that points to it.', cuts=['c1'], sources=lambda: progs(K['c1'], 'u1')),
 dict(id='u2', num=2, title='Tuples, sets, dictionaries, input() and file operations (open, close)', mod='I', old='u2',
      gist='Tuples, sets and dictionaries hold groups of values. Files store data after the program ends.', cuts=['c2'], sources=lambda: progs(K['c2'], 'u2')),
 dict(id='u3', num=3, title='Conditional and control statements, break and continue', mod='I', old='u3',
      gist='if, while and for decide what runs and how often. break and continue change a loop.', cuts=['c3'], sources=lambda: progs(K['c3'], 'u3')),
 dict(id='u4', num=4, title='Functions: define functions, passing arguments, return values', mod='I', old='u4',
      gist='A function groups statements under one name. It takes arguments and can return a value.', cuts=[], sources=lambda: UNIT4),
 dict(id='u5', num=5, title='NumPy: arrays, creation, access and array operations', mod='I', old='u5',
      gist='NumPy arrays hold many numbers of one type. You make them, index them and do arithmetic on all their values at once.', cuts=['c5'], sources=lambda: progs(K['c5'], 'u5')),
 dict(id='u6', num=6, title='Pandas: creating a DataFrame', mod='II', old='u6',
      gist='A DataFrame is a table with labelled rows and columns. You can build one from lists, dictionaries or a file.', cuts=['c6'], sources=lambda: sess(K['c6'])),
 dict(id='u7', num=7, title='DataFrame attributes, pivoting, sorting and sort by labels', mod='II', old='u7',
      gist='Attributes describe a DataFrame. Pivot reshapes it. Sort puts rows in order by values or by labels.', cuts=['c7'], sources=lambda: c7),
 dict(id='u8', num=8, title='Missing data: fill, drop and replace; combining; describe(); min and max index values', mod='II', old='u8',
      gist='pandas marks a missing value as NaN. You can drop, fill or replace it. describe() gives the summary statistics.', cuts=['c8'], sources=lambda: sess(K['c8'])),
 dict(id='u9', num=9, title='Statistical values: count, mode, covariance, correlation and quantiles', mod='II', old='u9',
      gist='count, mode, covariance and correlation describe the values of a column and how two columns move together.', cuts=['c9'], sources=lambda: sess(K['c9'])),
 dict(id='u10', num=10, title='Aggregation, grouping columns, data wrangling, merging, joining and concatenating DataFrames', mod='II', old='u10',
      gist='groupby splits rows into groups. merge and concat join tables. Wrangling makes the data ready for analysis.', cuts=['c10'], sources=lambda: sess(K['c10'])),
 dict(id='u11', num=11, title='Importance of data visualisation and the bar chart', mod='III', old='u11',
      gist='A chart shows a pattern that a table hides. Start with a bar chart.', cuts=['c11'], sources=lambda: c11),
 dict(id='u12', num=12, title='Histogram, frequency polygon, box plot, scatter plot: markers, xlabel, ylabel, title', mod='III', old=None,
      gist='A histogram counts values in bins. A box plot shows the median and the spread. A scatter plot shows one point for each pair of values.', cuts=['c11'], sources=lambda: c12),
 dict(id='u13', num=13, title='Correlation matrix plot: calculate the correlations, correlation matrix, correlation plot', mod='III', old=None,
      gist='The correlation matrix holds the correlation between each pair of columns. A correlation plot draws it as colours.', cuts=[], sources=lambda: UNIT13_DEMO + [
        ('Correlation matrix of a small table', 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nrng = np.random.default_rng(3)\nm = pd.DataFrame({"mass": [10, 20, 30, 40, 50], "length": [0.2, 0.4, 0.6, 0.8, 1.0]})\nm["length_sq"] = m["length"] ** 2\nprint(m.corr().round(3))\nplt.imshow(m.corr(), cmap="RdYlGn", vmin=-1, vmax=1)\nplt.colorbar()\nplt.xticks(range(3), m.columns, rotation=45); plt.yticks(range(3), m.columns)')]),
 dict(id='u14', num=14, title='Seaborn library: features, colour palette, univariate distribution plot', mod='III', old=None,
      gist='Seaborn draws statistical plots with one call. It has colour palettes and distribution plots.', cuts=['c13'], sources=lambda: c14),
 dict(id='u15', num=15, title='Seaborn: histogram, density plot, bivariate distribution plots, hexbin plot, violin plots', mod='III', old=None,
      gist='A density plot smooths a histogram. Bivariate plots show two variables together. Violin plots show the shape of each group.', cuts=['c13'], sources=lambda: c15),
 dict(id='u16', num=16, title='Statistical estimation, bar plot, plotting categorical data, heatmap and the cmap attribute', mod='III', old=None,
      gist='A bar plot shows an estimate for each category. A heatmap uses colour to show a matrix. cmap sets the colours.', cuts=['c13'], sources=lambda: c16),
 dict(id='u17', num=17, title='Series and DataFrames; data file formats: csv, xls, tab and dat; creating a DataFrame from each', mod='IV', old='u17',
      gist='pandas reads many file formats. csv and tab files are text with a separator. Each format gives one DataFrame.', cuts=['c17'], sources=lambda: sess(K['c17'])),
 dict(id='u18', num=18, title='Viewing a DataFrame using loc and iloc; operations on DataFrames', mod='IV', old=None,
      gist='loc selects by label. iloc selects by position. Both can select rows and columns.', cuts=['c7'], sources=lambda: c18),
 dict(id='u19', num=19, title='Jupyter notebooks using Anaconda and Google Colab: introduction and familiarisation', mod='IV', old='u19',
      gist='A notebook mixes code, output and notes in cells. Run each cell with Shift+Enter.', cuts=['c19'], sources=lambda: sess(K['c19'])),
 dict(id='uV', num=None, title='Additional training on data analysis: pendulum, Hooke’s law, histograms, bar charts and regplot', mod='V', old=None,
      gist='The five open-ended examples of the syllabus. Each one builds data, then reads, groups, merges and plots it.', cuts=[], sources=lambda: MODULE_V),
]

PREAMBLE = ("Setup · imports the book assumes", "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nnp.random.seed(12345)")
SEABORN_PRE = ("Setup · seaborn", "import seaborn as sns")
SHORT = {'u1': 'Variables, types and lists', 'u2': 'Tuples, sets, dicts and files', 'u3': 'Control statements', 'u4': 'Functions', 'u5': 'NumPy arrays', 'u6': 'DataFrame creation', 'u7': 'DataFrame attributes and sorting', 'u8': 'Missing data', 'u9': 'Statistics and correlation', 'u10': 'Grouping and merging', 'u11': 'Bar charts', 'u12': 'Histograms, box and scatter plots', 'u13': 'Correlation matrix', 'u14': 'Seaborn distributions', 'u15': 'Seaborn bivariate plots', 'u16': 'Categorical plots and heatmaps', 'u17': 'Data file formats', 'u18': 'loc and iloc', 'u19': 'Jupyter and Colab', 'uV': 'Open-ended module'}

def station(u):
    blocks = []
    if u['old'] and u['old'] in OLD:
        for b in OLD[u['old']]['blocks']:
            blocks.append(b)
    head = f"Unit {u['num']}" if u['num'] else 'Open-ended module'
    body = []
    body.append(f"gist({J(u['gist'])})")
    if u['num'] and 6 <= u['num'] <= 19:
        # the setup cell comes first, so the prose examples below can use pd, np and plt
        body.append(f"ex({J(PREAMBLE[1])},{{title:{J(PREAMBLE[0])}}})")
    hs = []
    for c in u['cuts']:
        hs += heads(K[c])
    if hs:
        body.append(f"tp({J('Topics in the book')})")
        body.append(f"{J('<ul class=\"toc-topics\">' + ''.join('<li>' + h.replace('<','&lt;') + '</li>' for h in hs) + '</ul>')}")
    for b in blocks:
        if 'p' in b: body.append(J('<p>' + b['p'] + '</p>'))
        elif 'note' in b: body.append(f"why({J(b['note'])})")
        elif 'code' in b: body.append(f"ex({J(b['code'])},{{title:{J('Try it')}}})")
    ex = u['sources']()
    if ex and u['num'] and 6 <= u['num'] <= 19:
        ex = ([SEABORN_PRE] if u['num'] in (14, 15, 16) else []) + [e for e in ex if e != PREAMBLE]
    if ex:
        body.append(f"tp({J('Examples from the book')})")
    import ast as _ast
    for i, (title, code) in enumerate(ex, 1):
        t = title if title else f'Example {i}'
        try:
            _ast.parse(code)
            body.append(f"ex({J(code)},{{title:{J(t)}}})")
        except SyntaxError:
            # IPython shell lines (%magic, !shell) cannot run in the browser: show them as text
            body.append(f"{J('<p class="mini">' + t + ' — a terminal or IPython command, shown here but not run in the browser.</p><pre class="lx-verb">' + code.replace('<','&lt;').replace('>','&gt;') + '</pre>')}")
    st = f"STATIONS.push({{id:{J(u['id'])},title:{J(head + ' · ' + u['title'])},short:{J(SHORT[u['id']])},est:'~25 min',body:[\n  " + ',\n  '.join(body) + "\n].join('')});"
    return st, len(ex), len(hs)

def write(name, units):
    out = [f"/* Module {units[0]['mod']} — units written from the Python book cuts and the CU syllabus. Every code block runs. */"]
    counts = []
    for u in units:
        st, n, h = station(u)
        out.append(st); counts.append((u['id'], n, h))
    open(os.path.join(SRC, name), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
    return counts

MODS = {'I': 'data.m1.js', 'II': 'data.m2.js', 'III': 'data.m3.js', 'IV': 'data.m4.js', 'V': 'data.mv.js'}
allc = []
for mod, fn in MODS.items():
    units = [u for u in UNITS if u['mod'] == mod]
    allc += write(fn, units)
for row in allc:
    print(row)
print('examples total', sum(r[1] for r in allc), 'topics total', sum(r[2] for r in allc))
