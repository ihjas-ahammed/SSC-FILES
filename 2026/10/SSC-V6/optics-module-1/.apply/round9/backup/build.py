#!/usr/bin/env python3
"""
Study Match builder.

  python build.py                      validate data/data.json and build dist/study-match.html + dist/app/
  python build.py --data other.json    build from another data file
  python build.py --check              only validate, build nothing
  python build.py --merge a.json b.json [...] [--out data/data.json]
                                       merge several partial files (each with "sections") into one data.json

Standard library only. Python 3.7+.
"""
import argparse, base64, glob, json, os, re, sys, xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')

CARD_TYPES = {'info', 'intuition', 'math', 'scale', 'fall', 'mcq', 'fill', 'number', 'derivation', 'question', 'eval', 'score', 'key'}
MOVES = {'add', 'subtract', 'multiply', 'divide', 'power', 'root', 'reciprocal', 'negate', 'differentiate', 'integrate',
         'ln', 'exp', 'apply', 'substitute', 'expand', 'factor', 'simplify', 'cancel', 'combine', 'rearrange', 'swap',
         'evaluate', 'define', 'identity'}
NEEDS_BY = {'add', 'subtract', 'multiply', 'divide', 'power'}
BOTH = {'add', 'subtract', 'multiply', 'divide', 'power', 'root', 'reciprocal', 'negate', 'differentiate', 'integrate', 'ln', 'exp', 'apply'}
ICONS = {'atom', 'curve', 'motion', 'graph', 'wave', 'lens', 'flask', 'cell', 'sigma', 'book', 'bolt'}
JXG_ROLES = {'f', 's', 'ok', 'lk', 'ik', 'gk', 't', 'i'}
JXG_TYPES = {'point', 'line', 'segment', 'arrow', 'polyline', 'polygon', 'curve', 'circle', 'ellipse', 'arc', 'angle', 'label', 'text'}

# A backslash that was not doubled in JSON turns "\frac" into form-feed + "rac", "\beta" into backspace + "eta", etc.
CTRL_FIX = {'\f': '\\f', '\b': '\\b', '\t': '\\t', '\r': '\\r', '\v': '\\v', '\a': '\\a'}


class Report:
    def __init__(self):
        self.errors, self.warnings, self.fixes = [], [], []

    def err(self, where, msg): self.errors.append('%s: %s' % (where, msg))
    def warn(self, where, msg): self.warnings.append('%s: %s' % (where, msg))
    def fix(self, where, msg): self.fixes.append('%s: %s' % (where, msg))


def fix_text(s, where, rep, tex_field=False):
    """Repair escapes a model typically breaks. Returns the fixed string."""
    if not isinstance(s, str):
        return s
    out = s
    for bad, good in CTRL_FIX.items():
        if bad in out:
            out = out.replace(bad, good)
            rep.fix(where, 'restored a lost backslash (%r -> %r)' % (bad, good))
    if tex_field and '\n' in out:
        # "\nabla", "\neq", "\nu" lose their backslash and become a newline
        out2 = re.sub(r'\n(?=[a-zA-Z])', r'\\n', out)
        if out2 != out:
            rep.fix(where, 'restored a lost backslash before "n" (\\nabla / \\neq / \\nu ...)')
            out = out2
    return out


def braces_ok(t):
    depth = 0
    i = 0
    while i < len(t):
        c = t[i]
        if c == '\\':
            i += 2
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth < 0:
                return False
        i += 1
    return depth == 0


def top_level_equals(t):
    depth, n, i = 0, 0, 0
    while i < len(t):
        c = t[i]
        if c == '\\':
            m = re.match(r'\\([A-Za-z]+|.)', t[i:])
            name = m.group(1) if m else ''
            i += len(m.group(0)) if m else 1
            if name in ('left', 'right'):
                while i < len(t) and t[i] == ' ':
                    i += 1
                m2 = re.match(r'(\\[A-Za-z]+|\\.|.)', t[i:])
                if m2:
                    i += len(m2.group(0))
                depth += 1 if name == 'left' else -1
            continue
        if c in '{([':
            depth += 1
        elif c in '})]':
            depth -= 1
        elif c == '=' and depth == 0:
            n += 1
        i += 1
    return n


def check_inline_math(s, where, rep):
    if not isinstance(s, str):
        return
    if s.count('\\(') != s.count('\\)'):
        rep.err(where, 'unbalanced \\( ... \\) in text')
    if re.search(r'(?<!\\)\$', s):
        rep.warn(where, 'found "$". Use \\( ... \\) for inline maths, not $ ... $')
    for m in re.finditer(r'\\\((.*?)\\\)', s):
        if not braces_ok(m.group(1)):
            rep.err(where, 'unbalanced { } inside \\( %s \\)' % m.group(1)[:40])


def walk_text(obj, where, rep, tex_keys=('tex', 'by', 'start', 'goal')):
    """Fix escapes everywhere, check maths in text fields."""
    if isinstance(obj, dict):
        for k, v in list(obj.items()):
            w = '%s.%s' % (where, k)
            if isinstance(v, str):
                obj[k] = fix_text(v, w, rep, tex_field=k in tex_keys)
                if k not in tex_keys and k not in ('art', 'setup', 'three', 'id', 'type', 'icon', 'op', 'role', 'name', 'align', 'text'):
                    check_inline_math(obj[k], w, rep)
            elif k in ('art', 'setup', 'three'):
                continue
            else:
                walk_text(v, w, rep, tex_keys)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            w = '%s[%d]' % (where, i)
            if isinstance(v, str):
                obj[i] = fix_text(v, w, rep)
                check_inline_math(obj[i], w, rep)
            else:
                walk_text(v, w, rep, tex_keys)


def check_ask(a, where, rep):
    if not isinstance(a, dict):
        rep.err(where, 'ask must be an object'); return
    for k in ('q', 'options', 'answer'):
        if k not in a:
            rep.err(where, 'ask is missing "%s"' % k)
    opts = a.get('options', [])
    if not isinstance(opts, list) or len(opts) < 2:
        rep.err(where, 'ask needs 2 to 6 options')
    elif not isinstance(a.get('answer'), int) or not 0 <= a['answer'] < len(opts):
        rep.err(where, 'ask.answer must be the 0-based index of the right option (0..%d)' % (len(opts) - 1))
    if not a.get('why'):
        rep.warn(where, 'ask has no "why"; the learner sees no reason after answering')


def _is_pt_ref(v):
    return (isinstance(v, str) and bool(v.strip())) or (isinstance(v, list) and len(v) == 2 and all(isinstance(x, (int, float)) for x in v))


def check_svg_art(svg, where, rep):
    if not isinstance(svg, str) or not svg.strip():
        rep.err(where, 'intuition art must be a non-empty SVG string')
        return
    s = svg.strip()
    if not (s.startswith('<svg') and s.endswith('</svg>')) or s.count('<svg') != 1:
        rep.err(where, 'intuition art must be a single <svg ...>...</svg> element')
        return
    if 'viewBox=' not in s:
        rep.err(where, 'SVG needs a viewBox attribute (e.g. viewBox="0 0 260 180")')
    if re.search(r'<\s*script\b|javascript:|\bon[a-z]+\s*=', s, re.I):
        rep.err(where, 'SVG must not contain scripts or event handlers')
    if re.search(r'#[0-9a-fA-F]{3,8}\b|\brgb\s*\(|\bhsl\s*\(|\byellow\b|\bamber\b', s, re.I):
        rep.err(where, 'SVG must use palette classes only, with no hard-coded or yellow/amber colours')
    for m in re.finditer(r'\bclass="([^"]*)"', s):
        for cls in m.group(1).split():
            if cls not in JXG_ROLES:
                rep.err(where, 'disallowed SVG class "%s" (allowed: %s)' % (cls, ', '.join(sorted(JXG_ROLES))))
    try:
        ET.fromstring(s)
    except ET.ParseError as e:
        rep.err(where, 'invalid SVG XML: %s' % e)


def check_jxg_diagram(diag, where, rep):
    names = set()
    if not isinstance(diag, dict):
        rep.err(where, 'diagram must be a declarative JSXGraph object with "view" and "steps"')
        return names
    view = diag.get('view')
    if not isinstance(view, dict) or not (isinstance(view.get('bbox'), list) and len(view['bbox']) == 4 and all(isinstance(x, (int, float)) for x in view['bbox'])):
        rep.err(where + '.view', 'view needs bbox: [left, top, right, bottom]')
    steps = diag.get('steps')
    if not isinstance(steps, list) or not steps:
        rep.err(where + '.steps', 'steps must be a non-empty list of construction steps')
        return names
    for si, st in enumerate(steps):
        sw = '%s.steps[%d]' % (where, si)
        if not isinstance(st, dict):
            rep.err(sw, 'construction step must be an object'); continue
        if st.get('name'):
            names.add(st['name'])
        objs = st.get('objects') or st.get('add')
        if not isinstance(objs, list) or not objs:
            rep.err(sw, 'construction step needs a non-empty "objects" list'); continue
        for oi, item in enumerate(objs):
            iw = '%s.objects[%d]' % (sw, oi)
            if not isinstance(item, dict):
                rep.err(iw, 'JSXGraph object must be a dict'); continue
            tp = item.get('type')
            if tp not in JXG_TYPES:
                rep.err(iw, 'unknown JSXGraph object type "%s" (allowed: %s)' % (tp, ', '.join(sorted(JXG_TYPES)))); continue
            role = item.get('role', '')
            if role:
                for r in str(role).split():
                    if r not in JXG_ROLES:
                        rep.err(iw, 'disallowed or unknown role "%s" (allowed: %s)' % (r, ', '.join(sorted(JXG_ROLES))))
            if item.get('name'):
                names.add(item['name'])
            if item.get('id'):
                names.add(item['id'])
            if tp == 'point':
                if not _is_pt_ref(item.get('coords')) and any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y')):
                    rep.err(iw, 'point needs coords: [x, y]')
            elif tp in ('line', 'segment', 'arrow'):
                if not (_is_pt_ref(item.get('p1')) and _is_pt_ref(item.get('p2'))) and any(not isinstance(item.get(k), (int, float)) for k in ('x1', 'y1', 'x2', 'y2')):
                    rep.err(iw, '%s needs p1 and p2' % tp)
            elif tp in ('polyline', 'polygon', 'curve'):
                pts = item.get('points')
                if not isinstance(pts, list) or len(pts) < 2 or any(not _is_pt_ref(p) for p in pts):
                    rep.err(iw, '%s needs a points list of [x, y] pairs or point IDs' % tp)
            elif tp == 'circle':
                if not _is_pt_ref(item.get('center')) or not isinstance(item.get('r'), (int, float)):
                    rep.err(iw, 'circle needs center and numeric r')
            elif tp == 'ellipse':
                if not _is_pt_ref(item.get('center')) or any(not isinstance(item.get(k), (int, float)) for k in ('rx', 'ry')):
                    rep.err(iw, 'ellipse needs center and numeric rx, ry')
            elif tp == 'arc':
                if not _is_pt_ref(item.get('center')) or any(not isinstance(item.get(k), (int, float)) for k in ('r', 'start', 'end')):
                    rep.err(iw, 'arc needs center and numeric r, start, end')
            elif tp == 'angle':
                if not all(_is_pt_ref(item.get(k)) for k in ('p1', 'vertex', 'p2')):
                    rep.err(iw, 'angle needs p1, vertex, p2')
            elif tp in ('label', 'text'):
                if (not _is_pt_ref(item.get('coords')) and any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y'))) or not isinstance(item.get('text'), str):
                    rep.err(iw, 'label needs coords: [x, y] and string text')
    return names


def validate(data, rep):
    if not isinstance(data, dict):
        rep.err('root', 'data must be a JSON object'); return
    walk_text(data, 'data', rep)
    meta = data.get('meta', {})
    glossary = data.get('glossary', [])
    term_ids = set()
    if not isinstance(glossary, list):
        rep.err('glossary', 'must be an array')
    else:
        for i, entry in enumerate(glossary):
            w = 'glossary[%d]' % i
            if not isinstance(entry, dict) or not all(isinstance(entry.get(k), str) and entry[k].strip() for k in ('id', 'term', 'definition')):
                rep.err(w, 'needs non-empty id, term and definition strings')
                continue
            if entry['id'] in term_ids:
                rep.err(w, 'duplicate term id')
            term_ids.add(entry['id'])
            if 'aliases' in entry and (not isinstance(entry['aliases'], list) or any(not isinstance(a, str) or not a.strip() for a in entry['aliases'])):
                rep.err(w, 'aliases must be non-empty strings')
    for option in ('inlineChecks', 'autoRevealQuestions', 'definitionChecks'):
        if option in meta and not isinstance(meta[option], bool):
            rep.err('meta.' + option, 'must be true or false')
    timing = data.get('match', {}).get('timing')
    if timing is not None:
        if not isinstance(timing, dict) or timing.get('mode', 'standard') not in ('standard', 'custom'):
            rep.err('match.timing', 'must be an object with mode "standard" or "custom"')
        else:
            for field, lo, hi, step in (('halfMinutes', 20, 90, 5), ('halfTimeMinutes', 1, 30, 1), ('hydrationMinutes', 1, 30, 1)):
                value = timing.get(field)
                if value is not None and (type(value) is not int or not lo <= value <= hi or value % step):
                    rep.err('match.timing.' + field, 'must be %d–%d minutes in steps of %d' % (lo, hi, step))
    if not meta.get('title'):
        rep.warn('meta', 'no meta.title (used for the page title and to keep progress separate)')
    secs = data.get('sections')
    if not isinstance(secs, list) or not secs:
        rep.err('sections', 'need at least one section'); return
    ids = set()
    three_cards = 0
    for si, sec in enumerate(secs):
        sw = 'sections[%d]' % si
        if not sec.get('title') and not sec.get('short'):
            rep.err(sw, 'section needs "short" (2-12 chars) and "title"')
        if sec.get('short') and len(sec['short']) > 14:
            rep.warn(sw, 'short name "%s" is long; keep it under 14 characters for the nav chips' % sec['short'])
        sheets = sec.get('sheets')
        if not isinstance(sheets, list) or not sheets:
            rep.err(sw, 'section needs at least one sheet'); continue
        for hi, sh in enumerate(sheets):
            hw = '%s.sheets[%d]' % (sw, hi)
            if not sh.get('title'):
                rep.err(hw, 'sheet needs a title')
            sid = sh.get('id')
            if sid:
                if sid in ids:
                    rep.err(hw, 'duplicate sheet id "%s"' % sid)
                ids.add(sid)
            if sh.get('icon') and sh['icon'] not in ICONS:
                rep.warn(hw, 'unknown icon "%s" (use one of: %s)' % (sh['icon'], ', '.join(sorted(ICONS))))
            if 'due' in sh and not (isinstance(sh['due'], (int, float)) and 5 <= sh['due'] <= 90):
                rep.err(hw, 'due must be a match minute between 5 and 90')
            cards = sh.get('cards')
            if not isinstance(cards, list) or not cards:
                rep.err(hw, 'sheet needs at least one card'); continue
            intro_terms = set()
            extra_ids = set()
            for ci, c in enumerate(cards):
                cw = hw + '.cards[%d]' % ci
                if 'three' in c:
                    three_cards += 1
                    if c.get('term') != 'meridional-ray' and 'meridional-ray' not in (c.get('defines') or []):
                        rep.err(cw, 'three.js is allowed only on the meridional-ray card')
                    th = c['three']
                    if not isinstance(th, dict) or not all(k in th for k in ('axis', 'points', 'meridionalRay')):
                        rep.err(cw + '.three', 'three must be an object with axis, points and meridionalRay')
                if meta.get('definitionChecks') and c.get('type') == 'info':
                    if (c.get('defines') and len(c['defines'])) or re.match(r'^What (?:is|are)\b', c.get('title', ''), re.I):
                        if not c.get('art'):
                            rep.err(cw, 'definition recall card needs a JSXGraph "art" figure on its flip back')
                if 'uid' in c:
                    uid = c['uid']
                    if not isinstance(uid, str) or not re.fullmatch(r'[a-z][a-z0-9-]*', uid):
                        rep.err(cw, 'uid must be a lowercase stable identifier')
                    elif uid in extra_ids:
                        rep.err(cw, 'duplicate card uid in this topic')
                    else:
                        extra_ids.add(uid)
                if 'defines' in c and (not isinstance(c['defines'], list) or any(not isinstance(t, str) or t not in term_ids for t in c['defines'])):
                    rep.err(cw, 'defines must list authored glossary entry IDs')
                if c.get('type') == 'intuition':
                    term = c.get('term')
                    if term not in term_ids:
                        rep.err(hw + '.cards[%d]' % ci, 'intuition.term must identify an authored glossary entry')
                    if term in intro_terms:
                        rep.err(hw + '.cards[%d]' % ci, 'duplicate intuition term in this topic')
                    intro_terms.add(term)
                check_card(c, '%s.cards[%d]' % (hw, ci), rep)
    if three_cards > 1:
        rep.err('root', 'at most one card may use "three" (found %d)' % three_cards)


def check_card(c, w, rep):
    t = c.get('type')
    if 'checks' in c:
        checks = c['checks']
        if not isinstance(checks, list) or len(checks) != 3 or any(not isinstance(p, dict) or not p.get('q') or not p.get('a') for p in checks):
            rep.err(w, 'checks must contain exactly three objects with "q" (question) and "a" (reference answer)')
    if t not in CARD_TYPES:
        rep.err(w, 'unknown card type "%s" (allowed: %s)' % (t, ', '.join(sorted(CARD_TYPES)))); return
    if t in ('info', 'intuition', 'math', 'scale', 'fall', 'question', 'score', 'key') and not c.get('title'):
        rep.err(w, '%s card needs a title' % t)
    if t == 'intuition':
        for field in ('term', 'meaning', 'picture', 'example', 'bridge'):
            if not isinstance(c.get(field), str) or not c[field].strip():
                rep.err(w, 'intuition needs a non-empty ' + field)
        if not c.get('art'):
            rep.err(w, 'intuition card needs an SVG string in "art"')
        else:
            check_svg_art(c.get('art'), w + '.art', rep)
    if t in ('info', 'question') and c.get('art') is not None:
        check_jxg_diagram(c['art'], w + '.art', rep)
    if t == 'question':
        if 'textAnswer' in c and not isinstance(c['textAnswer'], bool):
            rep.err(w, 'textAnswer must be true or false')
        if not c.get('q'):
            rep.err(w, 'question card needs "q"')
    if t == 'eval':
        opts = c.get('options')
        if not c.get('q'):
            rep.err(w, 'eval needs "q"')
        if not isinstance(opts, list) or not 2 <= len(opts) <= 5:
            rep.err(w, 'eval needs 2 to 5 options')
        else:
            for k, o in enumerate(opts):
                if not isinstance(o, dict) or not o.get('t') or not isinstance(o.get('m'), (int, float)):
                    rep.err(w, 'eval option %d needs "t" (text) and "m" (marks, a number)' % k)
            if not any(isinstance(o, dict) and o.get('m') == 0 for o in opts):
                rep.warn(w, 'eval has no option worth 0 marks')
    if t == 'key' and not (isinstance(c.get('points'), list) and c['points']):
        rep.err(w, 'key card needs a "points" list')
    if t == 'math':
        if not c.get('tex'):
            rep.err(w, 'math card needs "tex"')
        elif not braces_ok(c['tex']):
            rep.err(w, 'unbalanced { } in tex')
    if t == 'mcq':
        opts = c.get('options')
        if not c.get('q'):
            rep.err(w, 'mcq needs "q"')
        if not isinstance(opts, list) or not 2 <= len(opts) <= 6:
            rep.err(w, 'mcq needs 2 to 6 options')
        elif not isinstance(c.get('answer'), int) or not 0 <= c['answer'] < len(opts):
            rep.err(w, 'mcq answer must be the 0-based index of the right option (0..%d)' % (len(opts) - 1))
        elif len(set(map(str, opts))) != len(opts):
            rep.err(w, 'mcq has duplicate options')
    if t == 'fill':
        if not c.get('q') or not c.get('answer'):
            rep.err(w, 'fill needs "q" and "answer" (alternatives separated by |)')
    if t == 'number':
        if not c.get('q'):
            rep.err(w, 'number needs "q"')
        try:
            float(c.get('answer'))
        except (TypeError, ValueError):
            rep.err(w, 'number answer must be a number, e.g. 6 or 2.5')
    if t in ('mcq', 'fill', 'number'):
        if 'time' in c and not (isinstance(c['time'], int) and 10 <= c['time'] <= 600):
            rep.err(w, 'time must be whole seconds between 10 and 600')
        if not c.get('why'):
            rep.warn(w, 'no "why"; the learner sees no explanation')
    if t == 'scale':
        z = c.get('zones') or []
        if len(z) < 2:
            rep.err(w, 'scale needs at least 2 zones')
        ups = [x.get('upTo') for x in z]
        if any(not isinstance(u, (int, float)) for u in ups) or ups != sorted(ups):
            rep.err(w, 'zones need increasing numeric "upTo"')
        if not c.get('chips'):
            rep.err(w, 'scale needs chips [{label, value}]')
    if t == 'fall' and not c.get('chips'):
        rep.err(w, 'fall needs chips [{label, value}] where value is g in m/s^2')
    if t == 'derivation':
        check_derivation(c, w, rep)


def check_derivation(d, w, rep):
    setup_names = set()
    if d.get('setup') is not None:
        setup_names = check_jxg_diagram(d['setup'], w + '.setup', rep)
    steps = d.get('steps')
    if not isinstance(steps, list) or len(steps) < 2:
        rep.err(w, 'derivation needs at least 2 steps'); return
    if len(steps) > 16:
        rep.warn(w, '%d steps is long; split it into two derivations if you can' % len(steps))
    for i, st in enumerate(steps):
        sw = '%s.steps[%d]' % (w, i)
        tex = st.get('tex')
        if not tex:
            rep.err(sw, 'step needs "tex"'); continue
        if not braces_ok(tex):
            rep.err(sw, 'unbalanced { } in tex: %s' % tex)
        if '\\begin' in tex or '&' in tex or '\\\\' in tex:
            rep.err(sw, 'one line only: no \\begin{...}, no &, no \\\\')
        if '\\(' in tex or '$' in tex:
            rep.err(sw, 'tex must be bare TeX: no \\( \\) and no $')
        eqs = top_level_equals(tex)
        if eqs != 1:
            rep.warn(sw, 'has %d top-level "=" signs; exactly 1 keeps lines aligned' % eqs)
        mv = st.get('move')
        if i == 0 and mv:
            rep.warn(sw, 'the first step should not have a move')
        if i > 0 and not mv:
            rep.warn(sw, 'no "move"; add one so the learner sees what was done')
        if mv:
            mt = mv.get('type')
            if mt not in MOVES:
                rep.err(sw, 'unknown move "%s" (allowed: %s)' % (mt, ', '.join(sorted(MOVES))))
            if mt in NEEDS_BY and not mv.get('by'):
                rep.err(sw, 'move "%s" needs "by"' % mt)
            if mt in ('differentiate', 'integrate') and not mv.get('wrt'):
                rep.warn(sw, 'move "%s" has no "wrt"; x is assumed' % mt)
            if mv.get('by') and not braces_ok(mv['by']):
                rep.err(sw, 'unbalanced { } in move.by')
            if mt in BOTH and i > 0 and top_level_equals(steps[i - 1].get('tex', '')) != 1:
                rep.err(sw, 'move "%s" acts on both sides, so the previous line needs exactly one "="' % mt)
        if 'focus' in st:
            fc = st['focus']
            if not isinstance(fc, list) or any(not isinstance(fn, str) for fn in fc):
                rep.err(sw + '.focus', 'focus must be a list of part names')
            elif setup_names:
                for fn in fc:
                    if fn not in setup_names:
                        rep.err(sw + '.focus', 'focus name "%s" not found in setup drawing list' % fn)
        if st.get('ask'):
            check_ask(st['ask'], sw + '.ask', rep)
    phases = d.get('phases') or []
    named = [s.get('phase') for s in steps if s.get('phase')]
    if not named:
        rep.warn(w, 'no step has a "phase"; add 3-6 phase names so the route strip works')
    for p in phases:
        if p.get('name') not in named:
            rep.warn(w, 'phase "%s" is listed but no step uses it' % p.get('name'))


def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def load_json(path):
    raw = read(path)
    raw = raw.lstrip('﻿')
    m = re.search(r'```(?:json)?\s*(.*?)```', raw, re.S)
    if m and not raw.strip().startswith('{'):
        raw = m.group(1)  # model wrapped the JSON in a code fence
    try:
        return json.loads(raw)
    except json.JSONDecodeError as e:
        lines = raw.splitlines()
        ctx = lines[e.lineno - 1] if 0 < e.lineno <= len(lines) else ''
        hint = ''
        if 'escape' in e.msg.lower():
            hint = '\n  Hint: every backslash in JSON must be doubled. Write "\\\\frac", not "\\frac".'
        sys.exit('JSON error in %s, line %d col %d: %s\n  %s%s' % (path, e.lineno, e.colno, e.msg, ctx.strip()[:160], hint))


def asset_b64(name):
    p = os.path.join(SRC, 'assets', name)
    with open(p, 'rb') as f:
        return base64.b64encode(f.read()).decode('ascii')


def build(data, out_html, out_app):
    styles = ''.join('/* %s */\n%s\n' % (os.path.basename(p), read(p)) for p in sorted(glob.glob(os.path.join(SRC, 'styles', '*.css'))))
    scripts = ''.join('/* %s */\n%s\n' % (os.path.basename(p), read(p)) for p in sorted(glob.glob(os.path.join(SRC, 'components', '*.js'))))
    tpl = read(os.path.join(SRC, 'template.html'))
    meta = data.get('meta', {})
    title = meta.get('title', 'Study Match')
    data_json = json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
    i192, i512 = asset_b64('icon-192.png'), asset_b64('icon-512.png')
    calculator_licenses = read(os.path.join(SRC, 'vendor', 'mathjs-LICENSE.txt')) + '\n' + read(os.path.join(SRC, 'vendor', 'math.js.LICENSE.txt'))
    calculator_engine = '/*\n' + calculator_licenses.replace('*/', '* /') + '\n*/\n' + read(os.path.join(SRC, 'vendor', 'math-15.1.0.js'))

    def manifest(icon192, icon512, start='.'):
        return json.dumps({
            'name': title, 'short_name': title[:12], 'start_url': start, 'scope': '.', 'display': 'fullscreen',
            'display_override': ['fullscreen', 'standalone'], 'orientation': 'any',
            'background_color': '#FAF8F3', 'theme_color': '#1B2559',
            'icons': [{'src': icon192, 'sizes': '192x192', 'type': 'image/png', 'purpose': 'any maskable'},
                      {'src': icon512, 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}]})

    def page(head_app, flag):
        return (tpl.replace('{{TITLE}}', title.replace('<', '&lt;'))
                   .replace('{{HEAD_APP}}', head_app)
                   .replace('{{STYLE}}', styles)
                   .replace('{{CALCULATOR_ENGINE}}', calculator_engine.replace('</script', '<\\/script'))
                   .replace('{{SCRIPTS}}', scripts)
                   .replace('{{APP_FLAG}}', flag)
                   .replace('{{DATA}}', data_json))

    # 1. single file: icons and manifest inlined
    m_inline = manifest('data:image/png;base64,' + i192, 'data:image/png;base64,' + i512)
    head_single = ('<link rel="icon" type="image/png" href="data:image/png;base64,%s">\n'
                   '<link rel="apple-touch-icon" href="data:image/png;base64,%s">\n'
                   '<link rel="manifest" href="data:application/manifest+json;base64,%s">'
                   % (i192, i192, base64.b64encode(m_inline.encode()).decode()))
    os.makedirs(os.path.dirname(out_html), exist_ok=True)
    with open(out_html, 'w', encoding='utf-8') as f:
        f.write(page(head_single, ''))

    # 0. start page: pick a module and topics, then open study-match.html?sheets=...
    tokens = read(os.path.join(SRC, 'styles', '01-tokens.css'))
    index_html = read(os.path.join(SRC, 'index.html')).replace('{{TOKENS}}', tokens).replace(
        '{{UNITS}}', json.dumps(units_for_index(data), ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/'))
    with open(os.path.join(os.path.dirname(out_html), 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)

    # 2. hostable app: index.html + manifest + service worker (installable, works offline after first load)
    os.makedirs(out_app, exist_ok=True)
    for n, b in (('icon-192.png', i192), ('icon-512.png', i512)):
        with open(os.path.join(out_app, n), 'wb') as f:
            f.write(base64.b64decode(b))
    with open(os.path.join(out_app, 'manifest.webmanifest'), 'w', encoding='utf-8') as f:
        f.write(manifest('icon-192.png', 'icon-512.png', './'))
    with open(os.path.join(out_app, 'mathjs-LICENSE.txt'), 'w', encoding='utf-8') as f:
        f.write(calculator_licenses)
    with open(os.path.join(out_app, 'sw.js'), 'w', encoding='utf-8') as f:
        f.write(read(os.path.join(SRC, 'sw.js')).replace('{{VERSION}}', str(abs(hash(data_json + scripts + styles)) % 10 ** 8)))
    head_app = ('<link rel="icon" type="image/png" href="icon-192.png">\n'
                '<link rel="apple-touch-icon" href="icon-192.png">\n'
                '<link rel="manifest" href="manifest.webmanifest">')
    with open(os.path.join(out_app, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(page(head_app, '<script>window.SM_PWA = true;</script>'))


def units_for_index(data):
    # Module 2 topics have ids starting "optics-m2-"; everything else is Module 1.
    mods = {'1': {'label': 'Module 1 · Geometrical optics', 'sections': []},
            '2': {'label': 'Module 2 · Interference', 'sections': []},
            '3': {'label': 'Module 3 · Diffraction', 'sections': []}}
    for sec in data.get('sections', []):
        for sh in sec.get('sheets', []):
            if not sh.get('id'):
                raise SystemExit('Error: every topic needs an "id" for the start page (missing in "%s").' % sh.get('title', '?'))
            sid = str(sh['id'])
            key = '3' if sid.startswith('optics-m3-') else ('2' if sid.startswith('optics-m2-') else '1')
            groups = mods[key]['sections']
            if not groups or groups[-1]['title'] != (sec.get('short') or sec.get('title', '')):
                groups.append({'title': sec.get('short') or sec.get('title', ''), 'sheets': []})
            groups[-1]['sheets'].append({'id': sh['id'], 'title': sh.get('title', ''), 'cards': len(sh.get('cards', []))})
    return {k: v for k, v in mods.items() if v['sections']}


def count(data):
    secs = data.get('sections', [])
    sheets = sum(len(s.get('sheets', [])) for s in secs)
    cards = sum(len(sh.get('cards', [])) for s in secs for sh in s.get('sheets', []))
    ders = sum(1 for s in secs for sh in s.get('sheets', []) for c in sh.get('cards', []) if c.get('type') == 'derivation')
    return len(secs), sheets, cards, ders


def main():
    ap = argparse.ArgumentParser(description='Build Study Match')
    ap.add_argument('--data', default=os.path.join(ROOT, 'data', 'data.json'))
    ap.add_argument('--out', default=None, help='output html (or output json with --merge)')
    ap.add_argument('--check', action='store_true', help='validate only')
    ap.add_argument('--merge', nargs='+', help='merge partial JSON files into one data.json')
    ap.add_argument('--strict', action='store_true', help='treat warnings as errors')
    a = ap.parse_args()

    if a.merge:
        out = a.out or os.path.join(ROOT, 'data', 'data.json')
        merged = None
        for p in a.merge:
            d = load_json(p)
            if merged is None:
                merged = d
                merged.setdefault('sections', [])
            else:
                merged['sections'].extend(d.get('sections', []))
                if 'glossary' in d:
                    merged.setdefault('glossary', []).extend(d.get('glossary', []))
                for k in ('meta', 'match'):
                    if k in d and k not in merged:
                        merged[k] = d[k]
        with open(out, 'w', encoding='utf-8') as f:
            json.dump(merged, f, ensure_ascii=False, indent=2)
        print('Merged %d files -> %s' % (len(a.merge), out))
        a.data = out

    data = load_json(a.data)
    rep = Report()
    validate(data, rep)
    for x in rep.fixes:
        print('  fixed   ' + x)
    for x in rep.warnings:
        print('  warning ' + x)
    for x in rep.errors:
        print('  ERROR   ' + x)
    s, h, c, d = count(data)
    print('%s: %d sections, %d topics, %d cards, %d derivations | %d errors, %d warnings, %d auto-fixes'
          % (os.path.relpath(a.data, ROOT), s, h, c, d, len(rep.errors), len(rep.warnings), len(rep.fixes)))
    if rep.errors or (a.strict and rep.warnings):
        sys.exit('Build stopped. Fix the errors above (they name the exact field) and run again.')
    if a.check:
        return
    out_html = a.out or os.path.join(ROOT, 'dist', 'study-match.html')
    out_app = os.path.join(os.path.dirname(out_html), 'app')
    build(data, out_html, out_app)
    print('Built  %s  (%d KB)' % (os.path.relpath(out_html, ROOT), os.path.getsize(out_html) // 1024))
    print('Built  %s/  (host it for one-tap install + offline)' % os.path.relpath(out_app, ROOT))


if __name__ == '__main__':
    main()
