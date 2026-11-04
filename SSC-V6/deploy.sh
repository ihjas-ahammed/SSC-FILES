#!/usr/bin/env bash
# One-run deploy: rebuild the study-match apps, then publish the whole site
# through the main deploy script (SSC-V2/SEM5/PHY/apps/tools/deploy.sh).
# Usage: ./deploy.sh
set -euo pipefail
cd "$(dirname "$(readlink -f "$0")")"
MAIN="../SSC-V2/SEM5/PHY/apps/tools/deploy.sh"
PY=python3; command -v python3 >/dev/null 2>&1 || PY=python

"$PY" study-match/build_all.py

echo "== main deploy: $MAIN"
bash "$MAIN"
