#!/usr/bin/env bash
# Deploy the November project(s) only, to Firebase project flow-research-26.
# Separate from SSC-V2-SEM5-PHY/apps/tools/deploy.sh (that one replaces the whole
# live site at ssc-data-science-qm and must not be used for this).
#
# Ships:
#   /study-plan-gate-v2/                      STUDY-PLAN-GATE-V2/study-plan-gate-v2.html
#   /STUDY-PLAN-GATE-V1/syllabus/...pdf       the module PDFs the V2 page links to
#   /STUDY-PLAN-GATE-V1/PYQ/DA20xx*.pdf       the PYQ PDFs the V2 page links to
# The V2 page reaches the PDFs with ../STUDY-PLAN-GATE-V1/..., so the layout is kept.
#   /study-plan-gate-v3/                      STUDY-PLAN-GATE-V3/index.html + pyq/ (question images)
# V3 loads its PDFs from GitHub raw (main), so push STUDY-PLAN-GATE-V3 before deploying.
#
# Usage:  ./deploy-november.sh            stage and deploy
#         ./deploy-november.sh --prepare DIR   stage only, into DIR
# Requires: firebase login as ihjas.two@gmail.com (checked below).
set -euo pipefail

PROJECT="flow-research-26"
ACCOUNT="ihjas.two@gmail.com"
HERE="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)"
V2="$HERE/STUDY-PLAN-GATE-V2"
V1="$HERE/STUDY-PLAN-GATE-V1"
PAGE="$V2/study-plan-gate-v2.html"

PREPARE_DIR=""
if [ "${1:-}" = "--prepare" ]; then
  PREPARE_DIR="${2:?--prepare needs a directory}"
fi

command -v firebase >/dev/null || { echo "firebase CLI not on PATH (try ~/.npm-global/bin)" >&2; exit 1; }
[ -f "$PAGE" ] || { echo "missing $PAGE" >&2; exit 1; }

TMP="$(mktemp -d "${TMPDIR:-/tmp}/.deploy-november.XXXXXX")"
trap 'rm -rf "$TMP"' EXIT
PUB="$TMP/public"
mkdir -p "$PUB/study-plan-gate-v2"
cp "$PAGE" "$PUB/study-plan-gate-v2/index.html"

V3="$HERE/STUDY-PLAN-GATE-V3"
[ -f "$V3/index.html" ] || { echo "missing $V3/index.html (run build.py)" >&2; exit 1; }
mkdir -p "$PUB/study-plan-gate-v3"
cp "$V3/index.html" "$PUB/study-plan-gate-v3/index.html"
cp -r "$V3/pyq" "$PUB/study-plan-gate-v3/pyq"
rm -f "$PUB/study-plan-gate-v3/pyq/index.json"

# Copy every V1 file the page links to, keeping its folder layout.
# The links are percent-encoded (e.g. "calculus%20and%20optimization"), so decode them.
COUNT=0
while IFS= read -r ENC; do
  REL="$(python3 -I -c 'import sys,urllib.parse; print(urllib.parse.unquote(sys.argv[1]))' "$ENC")"
  SRC="$V1/$REL"
  [ -f "$SRC" ] || { echo "ERROR: linked file missing: $SRC" >&2; exit 1; }
  mkdir -p "$PUB/STUDY-PLAN-GATE-V1/$(dirname "$REL")"
  cp "$SRC" "$PUB/STUDY-PLAN-GATE-V1/$REL"
  COUNT=$((COUNT+1))
done < <(grep -o '\.\./STUDY-PLAN-GATE-V1/[^"#) ]*\.pdf' "$PAGE" | sed 's|^\.\./STUDY-PLAN-GATE-V1/||' | sort -u)
echo "Staged $COUNT linked PDFs from STUDY-PLAN-GATE-V1."

cat > "$TMP/firebase.json" <<'JSON'
{ "hosting": { "public": "public",
  "ignore": ["firebase.json", "**/.*"],
  "headers": [
    { "source": "**/*.html", "headers": [{ "key": "Cache-Control", "value": "no-cache" }] }
  ] } }
JSON
echo '{ "projects": { "default": "flow-research-26" } }' > "$TMP/.firebaserc"

if [ -n "$PREPARE_DIR" ]; then
  mkdir -p "$PREPARE_DIR"
  cp -r "$TMP/." "$PREPARE_DIR/"
  echo "Prepared hosting files in $PREPARE_DIR (no deployment)."
  exit 0
fi

# Refuse to deploy from the wrong account: the project lives under $ACCOUNT only.
ACTIVE="$(firebase login:list 2>/dev/null | sed -n 's/^Logged in as //p' | head -1)"
if [ "$ACTIVE" != "$ACCOUNT" ]; then
  echo "Active Firebase account is '$ACTIVE', expected '$ACCOUNT'." >&2
  echo "Switch with: firebase login:use $ACCOUNT" >&2
  exit 1
fi

echo "Publishing $(find "$PUB" -type f | wc -l) files to $PROJECT ..."
cd "$TMP"
firebase deploy --only hosting --project "$PROJECT"

echo ""
echo "Study plan GATE V2: https://$PROJECT.web.app/study-plan-gate-v2/"
echo "Study plan GATE V3: https://$PROJECT.web.app/study-plan-gate-v3/"
