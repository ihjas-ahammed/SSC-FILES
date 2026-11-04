#!/usr/bin/env python3
"""Shim: regenerate app/project/fig.diagrams.js with the shared indexer in
../../flow-library/tools/gen_diagrams.py.

    python3 tools/gen_diagrams.py
"""
import os
import runpy
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
LIB = os.path.join(PROJECT, '..', 'flow-library', 'tools', 'gen_diagrams.py')
sys.argv = [LIB, PROJECT]
runpy.run_path(LIB, run_name='__main__')
