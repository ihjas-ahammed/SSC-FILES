#!/usr/bin/env python3
"""Rebuild every active study-plan app without publishing the site."""
from pathlib import Path
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parent.parent


def main():
    if any(arg != '--check' for arg in sys.argv[1:]):
        raise SystemExit('Usage: python3 study-match/build_all.py [--check]')
    check = '--check' in sys.argv
    targets = [
        ('optics-module-1/study-match-practice', []),
        ('abstract-module-1/study-match', []),
        ('complex-analysis-module-1', ['--strict']),
    ]
    # Build Module I last so QM's standalone topic chooser opens Module I.
    targets += [
        ('quantum-mechanics-module-1', ['--data', 'data-qm-m%d.json' % n,
                                      '--out', 'dist/study-match-m%d.html' % n])
        for n in (2, 3, 4, 1)
    ]
    for folder, args in targets:
        print('== ' + folder + ' ' + ' '.join(args), flush=True)
        subprocess.run([sys.executable, 'build.py', *args, *(['--check'] if check else [])],
                       cwd=ROOT / folder, check=True)
    if not check:
        qm = ROOT / 'quantum-mechanics-module-1' / 'dist'
        shutil.copyfile(qm / 'study-match-m1.html', qm / 'study-match.html')


if __name__ == '__main__':
    main()
