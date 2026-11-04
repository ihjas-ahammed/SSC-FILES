# merge one-card preview files into data/derivations-preview.json, grouping sections by title and topics by id
import json, sys
names = sys.argv[1:]
out = None; secs = []
for n in names:
    d = json.load(open('data/%s-preview.json' % n))
    if out is None:
        out = {k: v for k, v in d.items() if k != 'sections'}
        out['meta'] = dict(d['meta'], title='Derivation preview · focused derivation cards')
    for sec in d['sections']:
        tgt = next((s for s in secs if s['title'] == sec['title']), None)
        if tgt is None:
            tgt = dict(sec, sheets=[]); secs.append(tgt)
        for sh in sec['sheets']:
            ts = next((x for x in tgt['sheets'] if x['id'] == sh['id']), None)
            if ts is None: tgt['sheets'].append(dict(sh, cards=list(sh['cards'])))
            else: ts['cards'] += sh['cards']
out['sections'] = secs
json.dump(out, open('data/derivations-preview.json', 'w'), ensure_ascii=False, indent=2)
print(len(secs), 'sections,', sum(len(s['sheets']) for s in secs), 'topics,', sum(len(sh['cards']) for s in secs for sh in s['sheets']), 'cards')
