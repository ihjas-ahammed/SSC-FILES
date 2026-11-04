#!/bin/bash
# Second, strict textbook-sync pass (see AGY_BRIEF_V2.md).
cd /home/ihjas/Documents/GitHub/SSC-FILES || exit 1
export TERM=xterm-256color
agy --dangerously-skip-permissions --effort high -i "$(cat SSC-V4/optics/sources/AGY_BRIEF_V2.md)"
echo; echo "agy exited — press Enter to close"; read
