#!/usr/bin/env bash
# Build Study Match: validates data/data.json, writes dist/study-match.html and dist/app/
# Usage: ./build.sh            ./build.sh --check            ./build.sh --data my.json
set -e
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then PY=python3; else PY=python; fi
"$PY" build.py "$@"
