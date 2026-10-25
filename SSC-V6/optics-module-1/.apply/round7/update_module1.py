#!/usr/bin/env python3
"""
Merge Module 2 (Interference) into Study Match data.json and apply Module 1 updates.

Usage (from optics-module-1/study-match):
  python3 update_module1.py data/data.json data-module2.json data-module1-updates.json
"""
import json
import os
import shutil
import subprocess
import sys


def load_json(path):
    if not os.path.exists(path):
        sys.exit('Error: file not found: %s' % path)
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        sys.exit('Error: invalid JSON in %s (line %d, col %d): %s' % (path, e.lineno, e.colno, e.msg))


def sheet_card_ids(sheet):
    """Compute runtime card IDs using the exact rule in 03-render.js."""
    sid = sheet.get('id', '')
    out = []
    legacy_index = 0
    for c in sheet.get('cards', []):
        if c.get('uid'):
            cid = '%s-extra-%s' % (sid, c['uid'])
        elif c.get('type') == 'intuition':
            cid = '%s-intro-%s' % (sid, c.get('term', ''))
        else:
            cid = '%s-%d' % (sid, legacy_index)
            legacy_index += 1
        out.append(cid)
    return out


def collect_sheets(sections):
    sheets = []
    for sec in sections or []:
        for sh in sec.get('sheets', []):
            sheets.append(sh)
    return sheets


def main():
    args = sys.argv[1:]
    if len(args) == 0:
        data_path = os.path.join('data', 'data.json')
        m2_path = 'data-module2.json'
        upd_path = 'data-module1-updates.json'
    elif len(args) == 3:
        data_path, m2_path, upd_path = args
    else:
        sys.exit('Usage: python3 update_module1.py data/data.json data-module2.json data-module1-updates.json')

    data = load_json(data_path)
    m2 = load_json(m2_path)
    updates = load_json(upd_path)

    if not isinstance(data, dict):
        sys.exit('Error: %s must be a JSON object.' % data_path)
    if not isinstance(m2, dict):
        sys.exit('Error: %s must be a JSON object.' % m2_path)
    if not isinstance(updates, list):
        sys.exit('Error: %s must be a JSON list of card update objects.' % upd_path)

    # 1. Keep a backup copy of data/data.json first
    backup_path = os.path.join(os.path.dirname(os.path.abspath(data_path)), 'data.before-module2.json')
    shutil.copyfile(data_path, backup_path)
    print('Backed up %s -> %s' % (data_path, backup_path))

    # Record original Module 1 sheets and card IDs
    m1_sheets = collect_sheets(data.get('sections', []))
    m1_sheet_map = {}
    orig_card_ids = {}
    for sh in m1_sheets:
        sid = sh.get('id')
        if not sid:
            sys.exit('Error: Module 1 sheet missing "id".')
        if sid in m1_sheet_map:
            sys.exit('Error: duplicate Module 1 sheet id "%s".' % sid)
        m1_sheet_map[sid] = sh
        orig_card_ids[sid] = sheet_card_ids(sh)

    # 2. Apply Module 1 card updates and verify card types and IDs stay unchanged
    for idx_u, upd in enumerate(updates):
        if not isinstance(upd, dict) or 'sheet' not in upd or 'index' not in upd or 'card' not in upd:
            sys.exit('Error: update[%d] must have "sheet", "index", and "card".' % idx_u)
        sid = upd['sheet']
        cidx = upd['index']
        new_card = upd['card']
        if sid not in m1_sheet_map:
            sys.exit('Error: update[%d] references unknown Module 1 sheet "%s".' % (idx_u, sid))
        sh = m1_sheet_map[sid]
        cards = sh.get('cards', [])
        if not isinstance(cidx, int) or not (0 <= cidx < len(cards)):
            sys.exit('Error: update[%d] index %r out of range for sheet "%s" (0..%d).' % (idx_u, cidx, sid, len(cards) - 1))
        old_card = cards[cidx]
        if not isinstance(new_card, dict) or old_card.get('type') != new_card.get('type'):
            sys.exit('Error: update[%d] on sheet "%s"[%d] changes card type from %r to %r.'
                     % (idx_u, sid, cidx, old_card.get('type'), new_card.get('type') if isinstance(new_card, dict) else None))
        cards[cidx] = new_card
        new_ids = sheet_card_ids(sh)
        if new_ids != orig_card_ids[sid]:
            sys.exit('Error: update[%d] on sheet "%s"[%d] would change Module 1 card IDs (%r -> %r).'
                     % (idx_u, sid, cidx, orig_card_ids[sid][cidx], new_ids[cidx]))

    # 3. Check for duplicate IDs across Module 1 and Module 2
    seen_glossary_ids = set()
    for g in data.get('glossary', []):
        gid = g.get('id')
        if not gid:
            sys.exit('Error: Module 1 glossary entry missing "id".')
        if gid in seen_glossary_ids:
            sys.exit('Error: duplicate glossary id "%s" in Module 1.' % gid)
        seen_glossary_ids.add(gid)

    for g in m2.get('glossary', []):
        gid = g.get('id')
        if not gid or not str(gid).startswith('optics-m2-'):
            sys.exit('Error: Module 2 glossary id %r must start with "optics-m2-".' % gid)
        if gid in seen_glossary_ids:
            sys.exit('Error: duplicate glossary id "%s" across Module 1 and Module 2.' % gid)
        seen_glossary_ids.add(gid)

    seen_sheet_ids = set(m1_sheet_map.keys())
    m2_sheets = collect_sheets(m2.get('sections', []))
    for sh in m2_sheets:
        sid = sh.get('id')
        if not sid or not str(sid).startswith('optics-m2-'):
            sys.exit('Error: Module 2 sheet id %r must start with "optics-m2-".' % sid)
        if sid in seen_sheet_ids:
            sys.exit('Error: duplicate sheet id "%s" across Module 1 and Module 2.' % sid)
        seen_sheet_ids.add(sid)

    seen_card_ids = set()
    seen_uids = set()
    for sh in m1_sheets + m2_sheets:
        sid = sh.get('id', '')
        for c in sh.get('cards', []):
            if 'uid' in c:
                uid = c['uid']
                if uid in seen_uids:
                    sys.exit('Error: duplicate card uid "%s" (in sheet "%s").' % (uid, sid))
                seen_uids.add(uid)
        for cid in sheet_card_ids(sh):
            if cid in seen_card_ids:
                sys.exit('Error: duplicate runtime card id "%s" (in sheet "%s").' % (cid, sid))
            seen_card_ids.add(cid)

    # 4. Append Module 2 glossary and sections
    data.setdefault('glossary', []).extend(m2.get('glossary', []))
    data.setdefault('sections', []).extend(m2.get('sections', []))

    # 5. Write merged data.json
    with open(data_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print('Updated %d Module 1 cards and merged %d Module 2 sections (%d sheets) -> %s'
          % (len(updates), len(m2.get('sections', [])), len(m2_sheets), data_path))

    # 6. Run build.py --check and print its result
    build_py = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'build.py')
    if not os.path.exists(build_py):
        build_py = 'build.py'
    res = subprocess.run([sys.executable, build_py, '--check', '--data', data_path],
                         stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    print(res.stdout, end='')
    if res.returncode != 0:
        sys.exit(res.returncode)


if __name__ == '__main__':
    main()
