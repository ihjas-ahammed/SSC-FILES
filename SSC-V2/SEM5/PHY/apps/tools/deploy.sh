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
echo "Trackers & checklists:"
for f in "$REPO"/trackers/*.html; do
  echo "  → $BASE/$(basename "$f")"
done
