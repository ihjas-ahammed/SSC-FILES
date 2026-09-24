#!/usr/bin/env python3
"""Build this project with the shared builder in ../flow-library/build.py.

    python3 build.py            -> build/index.html       from the `live` pool
    python3 build.py --mock     -> build/test/index.html   from the `mock` pool
"""
import os
import runpy
import sys

HERE = os.path.dirname(os.path.realpath(__file__))
LIB = os.path.join(HERE, '..', 'flow-library', 'build.py')
sys.argv = [LIB, HERE] + sys.argv[1:]
runpy.run_path(LIB, run_name='__main__')
