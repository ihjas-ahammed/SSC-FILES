#!/usr/bin/env python3
"""Validate an agent's unit file: python3 check_unit.py <file.json>
The file is {"cards": [...], "glossary": [...]} (glossary optional). Runs the real Study Match validator."""
import json, os, subprocess, sys, tempfile
src = sys.argv[1]
d = json.load(open(src))
cards = d.get('cards') or []
if not cards:
    sys.exit('no "cards" list in ' + src)
deck = {"meta": {"title": "unit check", "inlineChecks": False, "autoRevealQuestions": True, "definitionChecks": True, "date": "", "sessions": []},
        "glossary": d.get('glossary') or [],
        "sections": [{"short": "Check", "title": "Check", "sheets": [{"id": "check-sheet", "title": "Check", "cards": cards}]}]}
tmp = tempfile.NamedTemporaryFile('w', suffix='.json', delete=False)
json.dump(deck, tmp, ensure_ascii=False); tmp.close()
sm = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'study-match')
r = subprocess.run([sys.executable, 'build.py', '--data', tmp.name, '--check'], cwd=sm, capture_output=True, text=True)
out = (r.stdout + r.stderr).replace(tmp.name, src)
print(out.strip())
os.unlink(tmp.name)
