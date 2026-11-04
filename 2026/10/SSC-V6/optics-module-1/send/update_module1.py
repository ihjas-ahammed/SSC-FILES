#!/usr/bin/env python3
"""
Merge a new Optics module (e.g. Module 2 or Module 3) into Study Match data.json
and apply optional card updates to existing modules.

Usage (from study-match/):
  python3 update_module1.py data/data.json data/data-module3.json data/data-module1-updates.json
"""
import json
import os
import re
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


def detect_module_prefix(mod_data, mod_path):
    """Detect the module prefix (e.g. 'optics-m3-') from the new data file and verify consistency."""
    candidates = []
    for g in mod_data.get('glossary', []):
        if isinstance(g, dict) and g.get('id'):
            candidates.append(str(g['id']))
    for sh in collect_sheets(mod_data.get('sections', [])):
        if isinstance(sh, dict) and sh.get('id'):
            candidates.append(str(sh['id']))
    if not candidates:
        sys.exit('Error: %s contains no glossary or sheet IDs.' % mod_path)

    m = re.match(r'^(optics-m(\d+)-)', candidates[0])
    if not m:
        sys.exit('Error: ID %r in %s does not start with "optics-m<N>-".' % (candidates[0], mod_path))
    prefix, mod_num = m.group(1), m.group(2)

    m_file = re.search(r'module(\d+)', os.path.basename(mod_path), re.I)
    if m_file and m_file.group(1) != mod_num:
        sys.exit('Error: filename %s indicates Module %s, but IDs start with %r.'
                 % (mod_path, m_file.group(1), prefix))
    return prefix, mod_num


def main():
    args = sys.argv[1:]
    if len(args) == 0:
        data_path = os.path.join('data', 'data.json')
        mod_path = os.path.join('data', 'data-module3.json')
        if not os.path.exists(mod_path) and os.path.exists('data-module3.json'):
            mod_path = 'data-module3.json'
        upd_path = os.path.join('data', 'data-module1-updates.json')
        if not os.path.exists(upd_path) and os.path.exists('data-module1-updates.json'):
            upd_path = 'data-module1-updates.json'
    elif len(args) == 3:
        data_path, mod_path, upd_path = args
    else:
        sys.exit('Usage: python3 update_module1.py data/data.json data/data-module3.json data/data-module1-updates.json')

    data = load_json(data_path)
    new_mod = load_json(mod_path)
    updates = load_json(upd_path)

    if not isinstance(data, dict):
        sys.exit('Error: %s must be a JSON object.' % data_path)
    if not isinstance(new_mod, dict):
        sys.exit('Error: %s must be a JSON object.' % mod_path)
    if not isinstance(updates, list):
        sys.exit('Error: %s must be a JSON list of card update objects.' % upd_path)

    prefix, mod_num = detect_module_prefix(new_mod, mod_path)

    # 1. Keep a backup copy of data/data.json first; refuse if backup for this module already exists
    backup_path = os.path.join(os.path.dirname(os.path.abspath(data_path)),
                               'data.before-module%s.json' % mod_num)
    if os.path.exists(backup_path):
        sys.exit('Error: backup already exists: %s (refusing to overwrite).' % backup_path)

    # Record existing sheets and card IDs before modifying anything
    existing_sheets = collect_sheets(data.get('sections', []))
    existing_sheet_map = {}
    orig_card_ids = {}
    for sh in existing_sheets:
        sid = sh.get('id')
        if not sid:
            sys.exit('Error: existing sheet missing "id".')
        if sid in existing_sheet_map:
            sys.exit('Error: duplicate existing sheet id "%s".' % sid)
        existing_sheet_map[sid] = sh
        orig_card_ids[sid] = sheet_card_ids(sh)

    # 2. Apply optional card updates and verify card types and IDs stay unchanged
    for idx_u, upd in enumerate(updates):
        if not isinstance(upd, dict) or 'sheet' not in upd or 'index' not in upd or 'card' not in upd:
            sys.exit('Error: update[%d] must have "sheet", "index", and "card".' % idx_u)
        sid = upd['sheet']
        cidx = upd['index']
        new_card = upd['card']
        if sid not in existing_sheet_map:
            sys.exit('Error: update[%d] references unknown sheet "%s".' % (idx_u, sid))
        sh = existing_sheet_map[sid]
        cards = sh.get('cards', [])
        if not isinstance(cidx, int) or not (0 <= cidx < len(cards)):
            sys.exit('Error: update[%d] index %r out of range for sheet "%s" (0..%d).'
                     % (idx_u, cidx, sid, len(cards) - 1))
        old_card = cards[cidx]
        if not isinstance(new_card, dict) or old_card.get('type') != new_card.get('type'):
            sys.exit('Error: update[%d] on sheet "%s"[%d] changes card type from %r to %r.'
                     % (idx_u, sid, cidx, old_card.get('type'),
                        new_card.get('type') if isinstance(new_card, dict) else None))
        cards[cidx] = new_card
        new_ids = sheet_card_ids(sh)
        if new_ids != orig_card_ids[sid]:
            sys.exit('Error: update[%d] on sheet "%s"[%d] would change existing card IDs (%r -> %r).'
                     % (idx_u, sid, cidx, orig_card_ids[sid][cidx], new_ids[cidx]))

    # 3. Check for prefix rule and duplicate IDs across existing data and the new module
    seen_glossary_ids = set()
    for g in data.get('glossary', []):
        gid = g.get('id')
        if not gid:
            sys.exit('Error: existing glossary entry missing "id".')
        if gid in seen_glossary_ids:
            sys.exit('Error: duplicate glossary id "%s" in existing data.' % gid)
        seen_glossary_ids.add(gid)

    for g in new_mod.get('glossary', []):
        gid = g.get('id')
        if not gid or not str(gid).startswith(prefix):
            sys.exit('Error: Module %s glossary id %r must start with %r.' % (mod_num, gid, prefix))
        if gid in seen_glossary_ids:
            sys.exit('Error: duplicate glossary id "%s" across existing data and Module %s.' % (gid, mod_num))
        seen_glossary_ids.add(gid)

    seen_sheet_ids = set(existing_sheet_map.keys())
    new_sheets = collect_sheets(new_mod.get('sections', []))
    if not new_sheets:
        sys.exit('Error: Module %s file %s has no sheets.' % (mod_num, mod_path))
    for sh in new_sheets:
        sid = sh.get('id')
        if not sid or not str(sid).startswith(prefix):
            sys.exit('Error: Module %s sheet id %r must start with %r.' % (mod_num, sid, prefix))
        if sid in seen_sheet_ids:
            sys.exit('Error: duplicate sheet id "%s" across existing data and Module %s.' % (sid, mod_num))
        seen_sheet_ids.add(sid)

    seen_card_ids = set()
    seen_uids = set()
    for sh in existing_sheets + new_sheets:
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

    # Save backup now that all validation checks have passed
    shutil.copyfile(data_path, backup_path)
    print('Backed up %s -> %s' % (data_path, backup_path))

    # 4. Append new module glossary and sections
    data.setdefault('glossary', []).extend(new_mod.get('glossary', []))
    data.setdefault('sections', []).extend(new_mod.get('sections', []))

    # 5. Write merged data.json
    with open(data_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print('Updated %d existing cards and merged %d Module %s sections (%d sheets) -> %s'
          % (len(updates), len(new_mod.get('sections', [])), mod_num, len(new_sheets), data_path))

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
