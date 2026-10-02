#!/usr/bin/env bash
#
# assemble-dist.sh — collect the static web assets into ./dist so that
# `tauri build` has an isolated frontendDist (it refuses to bundle the repo
# root, which now contains src-tauri/, node_modules/, etc).
#
# Run automatically as tauri's `beforeBuildCommand`; safe to run by hand.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"

DIST="dist"

rm -rf "$DIST"
mkdir -p "$DIST"

cp index.html "$DIST/"

# game code + assets (skip cruft)
for dir in src assets; do
  [ -d "$dir" ] || { printf 'assemble-dist: missing %s/\n' "$dir" >&2; exit 1; }
  rsync -a --exclude '.DS_Store' --exclude '*.ink' "$dir/" "$DIST/$dir/"
done

printf 'assemble-dist: wrote %s/ (%s)\n' "$DIST" "$(du -sh "$DIST" | cut -f1)"
