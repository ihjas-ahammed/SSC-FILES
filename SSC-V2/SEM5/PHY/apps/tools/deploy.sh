#!/usr/bin/env bash
# Publish everything hosted at ssc-data-science-qm. Requires: firebase login --reauth
#
# A Firebase Hosting deploy REPLACES the whole site, so this script has to publish
# every page the site serves — not just the physics apps. Anything left out here
# disappears from the live site. Add new pages to repo trackers/ and they ship
# automatically.
set -e
APPS="$(cd "$(dirname "$0")/.." && pwd)"
REPO="$(cd "$(dirname "$0")/../../../../.." && pwd)"
TMP="$(mktemp -d)"; mkdir -p "$TMP/public"

# --- SEM5 physics study apps ---
cp "$APPS/QM_1.html" "$TMP/public/QM_1.html"
cp "$APPS/SOLID_STATE_1.html" "$TMP/public/SOLID_STATE_1.html"
cp "$APPS/LATEX_1.html" "$TMP/public/LATEX_1.html"
cp "$APPS/LATEX_12_OFFLINE.html" "$TMP/public/LATEX_12_OFFLINE.html"
cp "$APPS/PYTHON_12.html" "$TMP/public/PYTHON_12.html"
cp "$APPS/PYTHON_12_OFFLINE.html" "$TMP/public/PYTHON_12_OFFLINE.html"
cp "$APPS/MATERIAL_SCIENCE_12.html" "$TMP/public/MATERIAL_SCIENCE_12.html"
cp "$APPS/MATERIAL_SCIENCE_12_OFFLINE.html" "$TMP/public/MATERIAL_SCIENCE_12_OFFLINE.html"
cp "$APPS/QM_1.html" "$TMP/public/index.html"

# --- SSC-V4 Real Analysis study system ---
#   /math/real-analysis       the real thing, built from the validated data/ pool
#   /math/real-analysis-test  the same app on app/mock/, for trying changes out
#
# The live page is only REBUILT when --live is passed. Without it the deploy
# republishes the committed build/index.html byte for byte, so shipping an app
# change to the test page can never quietly push unvalidated content to the
# live one. AGY runs `deploy.sh --live` once the data has been validated.
V4="$REPO/SSC-V4"
REBUILD_LIVE=0
for arg in "$@"; do [ "$arg" = "--live" ] && REBUILD_LIVE=1; done

if [ -f "$V4/build.py" ]; then
  if [ "$REBUILD_LIVE" = "1" ]; then
    echo "Rebuilding the LIVE page from data/ ..."
    python3 "$V4/build.py" > /dev/null
  else
    echo "Live page: republishing the committed build (pass --live to rebuild it)."
  fi
  if [ ! -f "$V4/build/index.html" ]; then
    echo "ERROR: $V4/build/index.html is missing and --live was not passed." >&2
    echo "       Deploying now would delete /math/real-analysis. Aborting." >&2
    exit 1
  fi
  mkdir -p "$TMP/public/math/real-analysis"
  cp "$V4/build/index.html" "$TMP/public/math/real-analysis/index.html"
  if [ -f "$V4/pyq.html" ]; then
    cp "$V4/pyq.html" "$TMP/public/math/real-analysis/pyq.html"
  fi
  if [ -d "$V4/diagrams" ]; then
    cp -r "$V4/diagrams" "$TMP/public/math/real-analysis/diagrams"
  fi

  # the mock build is always fresh: it exists precisely to show current code
  python3 "$V4/build.py" --mock > /dev/null
  mkdir -p "$TMP/public/math/real-analysis-test"
  cp "$V4/build/test/index.html" "$TMP/public/math/real-analysis-test/index.html"
  # The app now shows the rendered diagrams from diagrams/, referenced by a
  # path relative to the page — so the test page needs its own copy, or every
  # figure on it is a broken image while the live page looks fine.
  if [ -d "$V4/diagrams" ]; then
    cp -r "$V4/diagrams" "$TMP/public/math/real-analysis-test/diagrams"
  fi
else
  echo "WARNING: $V4 missing — deploying without the Real Analysis app." >&2
fi

# --- exam trackers and checklists (repo trackers/) ---
if compgen -G "$REPO/trackers/*.html" > /dev/null; then
  cp "$REPO"/trackers/*.html "$TMP/public/"
else
  echo "WARNING: no pages found in $REPO/trackers — deploying without them would" >&2
  echo "         remove every tracker from the live site. Aborting." >&2
  exit 1
fi

cat > "$TMP/firebase.json" <<'JSON'
{ "hosting": { "site": "ssc-data-science-qm", "public": "public",
  "ignore": ["firebase.json", "**/.*"],
  "headers": [{ "source": "**/*.html", "headers": [{ "key": "Cache-Control", "value": "no-cache" }] }] } }
JSON
echo '{ "projects": { "default": "data-science-ef878" } }' > "$TMP/.firebaserc"

echo "Publishing $(ls "$TMP/public" | wc -l) files..."
cd "$TMP"
firebase deploy --only hosting:ssc-data-science-qm --project data-science-ef878

BASE="https://ssc-data-science-qm.web.app"
echo ""
echo "Physics apps:"
for f in QM_1 SOLID_STATE_1 LATEX_1 LATEX_12_OFFLINE PYTHON_12 PYTHON_12_OFFLINE \
         MATERIAL_SCIENCE_12 MATERIAL_SCIENCE_12_OFFLINE; do
  echo "  → $BASE/$f.html"
done
echo ""
echo "Real Analysis study system:"
echo "  → $BASE/math/real-analysis        (validated data)"
echo "  → $BASE/math/real-analysis-test   (mock data — safe to break)"
echo ""
echo "Trackers & checklists:"
for f in "$REPO"/trackers/*.html; do
  echo "  → $BASE/$(basename "$f")"
done
