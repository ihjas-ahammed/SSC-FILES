#!/usr/bin/env python3
"""Complex Analysis data; all build and UI logic lives in ../study-match/."""
import os, runpy, sys
ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
ENGINE_BUILD = os.path.join(ROOT, '..', 'study-match', 'build.py')
if '--data' not in sys.argv:
    sys.argv += ['--data', 'data-ca-m1.json']
sys.argv[0] = ENGINE_BUILD
runpy.run_path(ENGINE_BUILD, run_name='__main__')
