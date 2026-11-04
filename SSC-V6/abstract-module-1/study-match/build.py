#!/usr/bin/env python3
# Thin wrapper: this module uses the shared Study Match engine at SSC-V6/study-match.
# Build from this folder, as before: python3 build.py [--check] [--strict]
import os, runpy, sys
ENGINE_BUILD = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'study-match', 'build.py'))
sys.argv[0] = ENGINE_BUILD
runpy.run_path(ENGINE_BUILD, run_name='__main__')
