#!/usr/bin/env python3
"""Put one rebuilt module into the live Optics data.

  python3 assemble.py <plan.json>

plan.json:
  { "module": 4, "work": "<dir with agent outputs>",
    "units": [ { "unit": 17, "sheet": "optics-m4-polarisation-introduction", "title": "...", "source": "Unit 17 · ...",
                 "cards": "unit17-cards.json" }, ... ],
    "derivations": ["deriv-17-20.json", ...], "scenes": ["scenes.json"] }

Order inside each topic: plain-words + definitions, 3D explorers, derivations, worked examples, quiz.
Backs up data.json and the generated-image inventory first, drops the old topic cards and their
generated-image keys, replaces the module's glossary entries, keeps every other section untouched.
"""
import json, os, shutil, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
SM = os.path.join(HERE, '..', 'study-match')
plan = json.load(open(sys.argv[1]))
work = plan['work']
data_p = os.path.join(SM, 'data', 'data.json')
inv_p = os.path.join(SM, 'assets', 'generated', 'inventory.json')
stamp = time.strftime('%Y%m%d-%H%M%S')
shutil.copyfile(data_p, os.path.join(SM, 'data', 'data.before-rebuild-m%d-%s.json' % (plan['module'], stamp)))
shutil.copyfile(inv_p, inv_p.replace('.json', '.before-rebuild-m%d-%s.json' % (plan['module'], stamp)))
data = json.load(open(data_p))
inv = json.load(open(inv_p))

def load(name):
    return json.load(open(os.path.join(work, name)))

extra = {}   # unit -> list of cards (derivations, scenes)
for kind in ('derivations', 'scenes'):
    for f in plan.get(kind, []):
        for c in load(f).get('cards', []):
            u = c.pop('unit', None)
            extra.setdefault(u, {}).setdefault(kind, []).append(c)

prefix = 'optics-m%d-' % plan['module']
new_gloss, seen = [], set()
sheets = {}
for u in plan['units']:
    d = load(u['cards'])
    cards = d.get('cards', [])
    for c in cards:
        c.pop('unit', None)
    concept = [c for c in cards if c['type'] in ('intuition', 'info')]
    math = [c for c in cards if c['type'] == 'math']
    quiz = [c for c in cards if c['type'] in ('mcq', 'fill', 'number')]
    other = [c for c in cards if c not in concept and c not in math and c not in quiz]
    ex = extra.get(u['unit'], {})
    sheets[u['sheet']] = {'title': u.get('title'), 'source': u.get('source'),
                          'cards': concept + other + ex.get('scenes', []) + ex.get('derivations', []) + math + quiz}
    for g in d.get('glossary', []):
        if g.get('id') and g['id'] not in seen:
            seen.add(g['id']); new_gloss.append(g)

found = set()
for sec in data['sections']:
    for sh in sec['sheets']:
        if sh['id'] in sheets:
            s = sheets[sh['id']]
            sh['cards'] = s['cards']
            if s['title']: sh['title'] = s['title']
            if s['source']: sh['source'] = s['source']
            found.add(sh['id'])
missing = set(sheets) - found
if missing:
    sys.exit('topics not found in data.json: %s' % ', '.join(sorted(missing)))

old = [g for g in data.get('glossary', []) if g.get('id', '').startswith(prefix)]
data['glossary'] = [g for g in data.get('glossary', []) if not g.get('id', '').startswith(prefix)] + new_gloss
dropped = [k for k in list(inv['cards']) if k.split(':')[0] in sheets]
for k in dropped:
    del inv['cards'][k]
json.dump(data, open(data_p, 'w'), ensure_ascii=False, indent=2)
json.dump(inv, open(inv_p, 'w'), ensure_ascii=False, indent=2)
for sid, s in sheets.items():
    from collections import Counter
    print('%-44s %s' % (sid, dict(Counter(c['type'] for c in s['cards']))))
print('glossary: replaced %d old %s* entries with %d new; generated-image keys retired: %d' % (len(old), prefix, len(new_gloss), len(dropped)))
