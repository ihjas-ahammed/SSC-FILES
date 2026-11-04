#!/usr/bin/env bash
# Shared Study Match engine. Run from a module's study-match folder (it has data/, dist/, assets/generated/):
#   bash ../../study-match/build.sh            build dist/study-match.html + dist/app/
#   bash ../../study-match/build.sh --check    validate only
set -e
ENGINE="$(cd "$(dirname "$0")" && pwd)"
if command -v python3 >/dev/null 2>&1; then PY=python3; else PY=python; fi
"$PY" "$ENGINE/build.py" "$@"
