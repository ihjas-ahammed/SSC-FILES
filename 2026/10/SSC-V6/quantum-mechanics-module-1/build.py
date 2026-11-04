#!/usr/bin/env python3
# Thin wrapper: this module uses the shared Study Match engine at SSC-V6/study-match.
# Data for this module is data-qm-m1.json (no data/ folder). Build from this folder: python3 build.py [--check] [--strict]
import os, runpy, sys
ENGINE_BUILD = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'study-match', 'build.py'))
if '--data' not in sys.argv:
    sys.argv += ['--data', 'data-qm-m1.json']
sys.argv[0] = ENGINE_BUILD
runpy.run_path(ENGINE_BUILD, run_name='__main__')
