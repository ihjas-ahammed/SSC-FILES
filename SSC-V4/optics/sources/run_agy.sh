#!/bin/bash
# Launches the Antigravity textbook-sync session in this terminal (see AGY_BRIEF.md).
cd /home/ihjas/Documents/GitHub/SSC-FILES || exit 1
export TERM=xterm-256color
agy --dangerously-skip-permissions --effort high -i "$(cat SSC-V4/optics/sources/AGY_BRIEF.md)"
echo; echo "agy exited — press Enter to close"; read
