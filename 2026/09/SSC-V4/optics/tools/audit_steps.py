#!/usr/bin/env python3
"""Coverage audit of the Optics teaching layer (data only — no browser).

    python3 tools/audit_steps.py            # report; exit 1 if any check fails

For every proof step it asks:
  1. does it have a diagram, or an explicit reason it needs none (authoring/steps.py NF)?
  2. does the diagram build up (the stage never goes backwards within a proof)?
  3. is its "What this really means" plain language — not notation, not a fragment?
  4. would a step that talks about rays, paths, angles, wavefronts… be left without a picture?
And for every concept with a proof: does it host a simulation, or say why not (NS)?
"""
import glob, json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'tools'))
import author

author.load(os.path.join(ROOT, 'authoring', 'steps.py'))
GEOM = re.compile(r'\b(ray|rays|angle|angles|path|paths|wavefront|triangle|circle|slit|slits|mirror|surface|lens|lenses|screen|phasor|phasors|zone|zones|plate|prism|film|fringe|fringes|axis|normal|arrow|arrows|chord)\b', re.I)


def load(f):
    s = open(f, encoding='utf-8').read()
    i = s.index('.push(') + 6
    return json.loads('[' + s[i:s.rindex(');')] + ']')


def plain(text):
    """The meaning box must read as language. Strip tags/TeX, then judge."""
    raw = re.sub(r'<[^>]+>', '', text)
    tex = re.findall(r'\$[^$]+\$', raw)
    words = re.sub(r'\$[^$]+\$', ' ', raw)
    n = len(re.findall(r"[A-Za-z][A-Za-z'’-]+", words))
    problems = []
    if n < 18:
        problems.append('only %d words' % n)
    if len(tex) > 2:
        problems.append('%d TeX spans (a meaning explains, it does not restate the maths)' % len(tex))
    if not re.search(r'[.!?]["”)]?$', raw.strip()):
        problems.append('does not end like a sentence')
    if raw.strip()[:1].islower():
        problems.append('starts with a lower-case fragment')
    if re.search(r'\\[a-zA-Z]+', raw):
        problems.append('contains raw TeX commands')
    return problems


def main():
    bad, rows = [], []
    steps = with_fig = with_reason = 0
    for f in sorted(glob.glob(os.path.join(ROOT, 'data', 'm*.concepts.js'))):
        for c in load(f):
            pr = c.get('proof')
            if not pr:
                continue
            last, figs = 0, 0
            for i, r in enumerate(pr['rungs']):
                steps += 1
                fig = r.get('fig')
                if fig:
                    with_fig += 1; figs += 1
                    if fig['s'] < last:
                        bad.append('%s step %d: diagram stage goes backwards (%d after %d)' % (c['id'], i + 1, fig['s'], last))
                    last = fig['s']
                elif (c['id'], i) in author.NOFIG:
                    with_reason += 1
                else:
                    text = r.get('why', '') + ' ' + r.get('m', '') + ' ' + r.get('meaning', '')
                    bad.append('%s step %d has no diagram and no stated reason%s' % (c['id'], i + 1, '  [geometry words: ' + ', '.join(sorted(set(m.lower() for m in GEOM.findall(text)))[:4]) + ']' if GEOM.search(text) else ''))
                pb = plain(r.get('meaning', ''))
                if pb:
                    bad.append('%s step %d meaning: %s' % (c['id'], i + 1, '; '.join(pb)))
            sim = c.get('sim')
            if not sim and c['id'] not in author.NOSIM:
                bad.append('%s has a proof but no simulation and no stated reason' % c['id'])
            rows.append((c['id'], len(pr['rungs']), figs, sim or ('— ' + author.NOSIM.get(c['id'], '')[:40])))
    print('%-9s %5s %5s  %s' % ('concept', 'steps', 'figs', 'simulation'))
    for r in rows:
        print('%-9s %5d %5d  %s' % r)
    print('\n%d proof steps: %d with a diagram, %d with a stated reason for none; %d proofs, %d with a simulation'
          % (steps, with_fig, with_reason, len(rows), sum(1 for r in rows if not str(r[3]).startswith('—'))))
    if bad:
        print('\nFAIL (%d):' % len(bad))
        print('\n'.join('  ' + b for b in bad))
        sys.exit(1)
    print('OK')


if __name__ == '__main__':
    main()
