#!/usr/bin/env python3
"""Build CONVEX_OPTIMIZATION_1234.html (single file) from the parts in this folder.

  shell.html             page, CSS, MathJax config
  deriv/*.css            derivation player styles (SSC-V6 engine + SSP colours)
  sims/sims.css          Lattice Bench simulation styles
  deriv/core.js figure.js mathflow.js glue.js     the derivation engine
  derivs/*.dv            the derivations, one block per derivation (plain TeX)
  figs.py                figure geometry for derivations, by name
  sims/sims.js           Lattice Bench simulations (Modules III, IV)
  figsco.js              canvas figures for all modules (spliced into engine.js)
  mjtext.js              MathJax for every label: canvas, SVG figures, sims (loaded first)
  data.js engine.js      the SSP content and page engine

  python3 build.py           build ../../CONVEX_OPTIMIZATION_1234.html
  python3 build.py --check   validate only
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ONLY12 = '--only12' in sys.argv
OFFLINE = '--offline' in sys.argv
OUT = os.path.join(HERE, '..', '..', 'CONVEX_OPTIMIZATION_1234' + ('_OFFLINE' if OFFLINE else '') + '.html')
MOVES = {'add', 'subtract', 'multiply', 'divide', 'power', 'root', 'reciprocal', 'negate', 'differentiate', 'integrate',
         'ln', 'exp', 'apply', 'substitute', 'expand', 'factor', 'simplify', 'cancel', 'combine', 'rearrange', 'swap',
         'evaluate', 'define', 'identity'}
errors, warns = [], []
FIGS_USED = []   # (station file, figure name) from <fig> tags


def rd(p):
    with open(os.path.join(HERE, p), encoding='utf-8') as f:
        return f.read()


# ---------------------------------------------------------------- derivations
def parse_move(v, where):
    bits = [b.strip() for b in v.split(' | ')]
    mv = {'type': bits[0]}
    if bits[0] not in MOVES:
        errors.append(f'{where}: unknown move "{bits[0]}"')
    for b in bits[1:]:
        m = re.match(r'^(by|wrt|fn|label)=(.*)$', b, re.S)
        if m:
            mv[m.group(1)] = m.group(2).strip()
        elif 'by' not in mv:
            mv['by'] = b
        else:
            errors.append(f'{where}: cannot read move part "{b}"')
    return mv


def parse_fig(v):
    out = {}
    for b in v.split(' | '):
        b = b.strip()
        if b.startswith('focus '):
            out['focus'] = b[6:].split()
        elif b.startswith('keep '):
            out['keep'] = b[5:].split()
        elif b.startswith('cap '):
            out['caption'] = b[4:].strip()
        elif b.startswith('view '):
            w = b[5:].split()
            if w[0] == 'face':
                out['view'] = {'face': w[1:4]}
                if 'nozoom' in w:
                    out['view']['zoom'] = False
            else:
                v = {}
                for t in w:
                    k, _, val = t.partition('=')
                    v[k] = float(val)
                out['view'] = v
        elif b == 'none':
            pass
        elif b:
            out.setdefault('focus', []).extend(b.split())
    return out


def parse_dv(text, fname):
    blocks = re.split(r'^=== *', text, flags=re.M)
    out = {}
    for blk in blocks[1:]:
        lines = blk.split('\n')
        did = lines[0].strip()
        where = f'{fname}:{did}'
        head, steps, cur, phase = {}, [], None, None
        last = None   # (dict, key) for continuation lines

        def put(dct, k, v):
            dct[k] = v

        for raw in lines[1:]:
            if raw.startswith('#'):
                continue
            if raw.startswith('---'):
                ph = raw[3:].strip()
                cur = {'_opts': []}
                if ph:
                    cur['phase'] = ph
                steps.append(cur)
                last = None
                continue
            if not raw.strip():
                last = None
                continue
            if raw[:1] in ' \t' and last:
                d, k = last
                if k == '_opts':
                    d['_opts'][-1][1] += ' ' + raw.strip()
                else:
                    d[k] += ' ' + raw.strip()
                continue
            m = re.match(r'^([a-z*]+):\s?(.*)$', raw)
            if not m:
                errors.append(f'{where}: cannot read line "{raw[:60]}"')
                continue
            k, v = m.group(1), m.group(2).strip()
            if cur is None:
                head[k] = v
                last = (head, k)
                continue
            if k in ('opt', 'opt*'):
                cur['_opts'].append([k == 'opt*', v])
                last = (cur, '_opts')
            else:
                cur[k] = v
                last = (cur, k)
        st_out = []
        prev_fig = None
        for i, s in enumerate(steps):
            w = f'{where} step {i + 1}'
            if 'tex' not in s:
                errors.append(f'{w}: no tex')
                continue
            o = {'tex': s['tex']}
            if 'phase' in s:
                o['phase'] = s['phase']
            if 'move' in s:
                o['move'] = parse_move(s['move'], w)
            if 'note' in s:
                o['note'] = s['note']
            if s['_opts'] or 'ask' in s:
                opts = s['_opts']
                right = [j for j, (ok, _) in enumerate(opts) if ok]
                if 'ask' not in s or len(right) != 1 or len(opts) < 2:
                    errors.append(f'{w}: a checkpoint needs ask:, two or more opt: lines and exactly one opt*:')
                else:
                    o['ask'] = {'q': s['ask'], 'options': [t for _, t in opts], 'answer': right[0], 'why': s.get('why', '')}
            if 'fig' in s:
                prev_fig = parse_fig(s['fig'])
                o['figNew'] = True
            if prev_fig is not None:
                o['figure'] = prev_fig
            st_out.append(o)
        if not st_out:
            errors.append(f'{where}: no steps')
        if st_out and 'phase' not in st_out[0]:
            st_out[0]['phase'] = 'Start'
        d = {'title': head.get('title', did), 'steps': st_out}
        for k in ('marks', 'src', 'legend', 'start', 'result'):
            if k in head:
                d[k] = head[k]
        if 'figure' in head:
            d['_figname'] = head['figure']
        if did in out:
            errors.append(f'{where}: duplicate id')
        out[did] = d
    return out


MATH_SEG = re.compile(r'(\\\(.*?\\\)|\\\[.*?\\\]|\$[^$]+\$)', re.S)


def tex_safe(t):
    """< and > in TeX that ends up inside HTML would open tags: use \\lt and \\gt"""
    return t.replace('<', '\\lt ').replace('>', '\\gt ')


def html_safe(t):
    return MATH_SEG.sub(lambda m: tex_safe(m.group(0)), t)


def clean(d):
    for k in ('title', 'legend', 'src', 'marks'):
        if k in d:
            d[k] = html_safe(d[k])
    for k in ('start', 'result'):
        if k in d:
            d[k] = tex_safe(d[k])
    for st in d['steps']:
        st['tex'] = tex_safe(st['tex'])
        if 'note' in st:
            st['note'] = html_safe(st['note'])
        if 'phase' in st:
            st['phase'] = html_safe(st['phase'])
        mv = st.get('move')
        if mv:
            for k in ('by', 'wrt', 'fn'):
                if k in mv:
                    mv[k] = tex_safe(mv[k])
            if 'label' in mv:
                mv['label'] = html_safe(mv['label'])
        a = st.get('ask')
        if a:
            a['q'] = html_safe(a['q'])
            a['why'] = html_safe(a['why'])
            a['options'] = [html_safe(o) for o in a['options']]


def load_derivs():
    sys.path.insert(0, HERE)
    import figs
    D = {}
    ddir = os.path.join(HERE, 'derivs')
    for fn in sorted(os.listdir(ddir)):
        if fn.endswith('.dv'):
            for k, v in parse_dv(rd('derivs/' + fn), fn).items():
                if k in D:
                    errors.append(f'{fn}:{k}: duplicate id across files')
                D[k] = v
    for did, d in D.items():
        clean(d)
        name = d.pop('_figname', None)
        if not name:
            if any('figure' in s for s in d['steps']):
                errors.append(f'{did}: steps use fig: but the derivation has no figure:')
            continue
        if name not in figs.FIGS:
            errors.append(f'{did}: figure "{name}" not in figs.py')
            continue
        F = figs.FIGS[name]
        d['figure'] = F
        known = set(F.get('points', {})) | set(F.get('parts', {}))
        for p in F.get('parts', {}).values():
            for k in ('from', 'to', 'at', 'center'):
                if isinstance(p.get(k), str) and p[k] not in F.get('points', {}):
                    errors.append(f'figure {name}: part refers to unknown point {p[k]}')
            for r in p.get('points', []):
                if isinstance(r, str) and r not in F.get('points', {}):
                    errors.append(f'figure {name}: polygon refers to unknown point {r}')
        for st in F.get('draw', []):
            for n in st.get('parts', []):
                if n not in known:
                    errors.append(f'figure {name}: draw list names unknown part {n}')
        for i, s in enumerate(d['steps']):
            for n in ((s.get('figure') or {}).get('view') or {}).get('face', []):
                if n not in F.get('points', {}):
                    errors.append(f'{did} step {i + 1}: view face point "{n}" not in figure {name}')
            for n in (s.get('figure') or {}).get('focus', []) + (s.get('figure') or {}).get('keep', []):
                if n not in known:
                    errors.append(f'{did} step {i + 1}: figure part "{n}" not in figure {name}')
    return D


# ---------------------------------------------------------------- stations written as HTML (Modules III, IV)
def R(t, check=True):
    """a JS String.raw literal"""
    if check and ('`' in t or '${' in t):
        errors.append('station text contains a backtick or ${: ' + t[:50])
    return 'String.raw`' + t + '`'


def conv_station(text, fn):
    m = re.match(r'\s*<!--(.*?)-->', text, re.S)
    if not m:
        errors.append(fn + ': no header comment')
        return ''
    head = {}
    for part in m.group(1).split(' | '):
        k, _, v = part.partition(':')
        head[k.strip()] = v.strip()
    body = text[m.end():]
    for k in ('id', 'title', 'short', 'est'):
        if k not in head:
            errors.append(fn + ': header lacks ' + k)

    def probf(mm):
        n, t, inner = mm.group(1), mm.group(2), mm.group(3)
        bits = []
        for tag in ('pq', 'pth', 'psol', 'prac'):
            x = re.search(r'<' + tag + r'>(.*?)</' + tag + r'>', inner, re.S)
            if x:
                bits.append(tag + '(' + R(x.group(1)) + ')')
        if not bits:
            errors.append(fn + ': empty problem ' + n)
        return '${prob(' + json.dumps(n) + ',' + R(t) + ',' + '+'.join(bits) + ')}'
    body = re.sub(r'<prob n="([^"]*)" t="([^"]*)">(.*?)</prob>', probf, body, flags=re.S)
    body = re.sub(r'<qa m="([^"]*)" q="([^"]*)">(.*?)</qa>', lambda mm: '${qa(' + json.dumps(mm.group(1)) + ',' + R(mm.group(2)) + ',' + R(mm.group(3)) + ')}', body, flags=re.S)
    body = re.sub(r'<chk>\s*<q>(.*?)</q>\s*<a>(.*?)</a>\s*</chk>', lambda mm: '${chk(' + R(mm.group(1)) + ',' + R(mm.group(2)) + ')}', body, flags=re.S)
    for tag in ('gist', 'tp', 'must', 'trap'):
        body = re.sub(r'<' + tag + r'>(.*?)</' + tag + r'>', lambda mm, tag=tag: '${' + tag + '(' + R(mm.group(1)) + ')}', body, flags=re.S)
    body = re.sub(r'<paper n="([^"]*)" t="([^"]*)" m="([^"]*)"/>', lambda mm: '${paper(' + json.dumps(mm.group(1)) + ',' + json.dumps(mm.group(2)) + ',' + json.dumps(mm.group(3)) + ')}', body)
    body = re.sub(r'<sec l="([^"]*)" r="([^"]*)"/>', lambda mm: '${secband(' + json.dumps(mm.group(1)) + ',' + json.dumps(mm.group(2)) + ')}', body)
    body = re.sub(r'<der id="([^"]+)"/>', lambda mm: "${der('" + mm.group(1) + "')}", body)

    def figf(mm):   # <fig name="x"><cap>caption</cap><leg>legend (optional)</leg></fig>
        name, inner = mm.group(1), mm.group(2)
        cap = re.search(r'<cap>(.*?)</cap>', inner, re.S)
        leg = re.search(r'<leg>(.*?)</leg>', inner, re.S)
        if not cap:
            errors.append(fn + ': fig ' + name + ' has no <cap>')
        FIGS_USED.append((fn, name))
        return '${fig(' + json.dumps(name) + ',' + R(cap.group(1) if cap else '') + (',' + R(leg.group(1)) if leg else '') + ')}'
    body = re.sub(r'<fig name="([^"]+)">(.*?)</fig>', figf, body, flags=re.S)

    def simf(mm):
        f = os.path.join(HERE, 'sims', 'simwrap_' + mm.group(1) + '.html')
        if not os.path.exists(f):
            errors.append(fn + ': no sim ' + mm.group(1))
            return ''
        return rd('sims/simwrap_' + mm.group(1) + '.html')
    body = re.sub(r'<sim name="([^"]+)"/>', simf, body)
    for bad in re.findall(r'</?(?:gist|tp|must|trap|chk|q|a|prob|pq|pth|psol|prac|der|sim|qa|fig|cap|leg)\b[^>]*>', body):
        if bad in ('<a>', '</a>') or bad.startswith('<a '):
            continue
        errors.append(fn + ': unconverted tag ' + bad)
    obj = {k: head[k] for k in ('id', 'mod', 'modName', 'modClass', 'title', 'short', 'est') if k in head}
    js = '{' + ','.join(k + ':' + json.dumps(v, ensure_ascii=False) for k, v in obj.items()) + ',\n body:' + R(body, False) + '},\n'
    return js


def stations_js():
    d = os.path.join(HERE, 'stations')
    out = ''
    for fn in sorted(os.listdir(d)):
        if fn.endswith('.html'):
            out += conv_station(rd('stations/' + fn), fn)
    return out


# ---------------------------------------------------------------- page
def lambda_safe(t):
    return t


def main():
    check = '--check' in sys.argv
    D = load_derivs()
    data = rd('data.js')
    if '/*@@M34@@*/' not in data:
        errors.append('data.js has no /*@@M34@@*/ marker')
    data = data.replace('/*@@M34@@*/', stations_js())
    figs34 = rd('figsco.js')
    engine = rd('engine.js')
    if 'function setupFig(cv){' not in engine:
        errors.append('engine.js has no setupFig to splice figsco.js before')
    engine = engine.replace('function setupFig(cv){', figs34 + '\nfunction setupFig(cv){', 1)
    known = set(re.findall(r'^  ([A-Za-z0-9_]+):\{', engine, re.M))
    for fn_, name in FIGS_USED:
        if name not in known:
            errors.append(f'{fn_}: <fig name="{name}"> has no FIGS entry')
    used = re.findall(r"\bder\('([^']+)'\)", data)
    for u in used:
        if u not in D:
            errors.append(f'data.js uses der(\'{u}\') but no such derivation')
    for k in D:
        if k not in used:
            warns.append(f'derivation {k} is not used in data.js')
    if re.search(r'\blad\(', data.split('const STATIONS')[1] if 'const STATIONS' in data else data):
        warns.append('data.js still has lad( ladders')
    nsteps = sum(len(d['steps']) for d in D.values())
    nfig = sum(1 for d in D.values() if 'figure' in d)
    nask = sum(1 for d in D.values() for s in d['steps'] if 'ask' in s)
    print(f'derivations: {len(D)} ({nfig} with figures), {nsteps} steps, {nask} checkpoints')
    for w in warns:
        print('warning:', w)
    for e in errors:
        print('ERROR:', e)
    if errors:
        sys.exit(1)
    if check:
        return
    shell = rd('shell.html')
    css = '\n'.join([rd('deriv/engine.css'), rd('deriv/ssp.css'), rd('sims/sims.css')])
    derivs_js = 'window.DERIVS=' + json.dumps(D, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + ';'
    js_engine = '\n'.join([rd('mjtext.js'), rd('deriv/core.js'), rd('deriv/figure.js'), rd('deriv/mathflow.js'), rd('deriv/fig3.js'), derivs_js, rd('deriv/stack.js')])
    out = shell.replace('/*@@DERIV_CSS@@*/', css)
    for tag, body in [('<!--@@DERIV_JS@@-->', js_engine), ('<!--@@DATA_JS@@-->', data),
                      ('<!--@@SIMS_JS@@-->', rd('sims/sims.js')), ('<!--@@ENGINE_JS@@-->', engine)]:
        if tag not in out:
            print('ERROR: shell has no', tag)
            sys.exit(1)
        out = out.replace(tag, '<script>\n' + body + '\n</script>')
    if OFFLINE:   # no network needed: fonts and MathJax inside the file
        out = re.sub(r'<link rel="preconnect"[^>]*>\n?', '', out)
        out = re.sub(r'<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>', lambda m: '<style>' + rd('vendor/fonts.css') + '</style>', out)
        tag = '<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.js" id="MathJax-script" async></script>'
        if tag not in out:
            errors.append('offline: MathJax tag not found'); print(errors); sys.exit(1)
        out = out.replace(tag, lambda_safe('<script id="MathJax-script">' + rd('vendor/tex-svg.js').replace('</script', '<\\/script') + '</script>'))
        if 'cdnjs' in out or 'fonts.googleapis' in out:
            print('ERROR: offline build still links out'); sys.exit(1)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(out)
    print('built', os.path.normpath(OUT), len(out.encode('utf-8')), 'bytes')


if __name__ == '__main__':
    main()
