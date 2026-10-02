#!/usr/bin/env bash
#
# build-appstore.sh — build an UNSIGNED .xcarchive for the App Store pipeline.
#
#   ./scripts/build-appstore.sh [macos|ios]     # default: macos
#
#   macos   build a universal .app and wrap it in
#           build/appstore/<name>-macOS.xcarchive
#   ios     `tauri ios build --archive-only --no-sign`, copied to
#           build/appstore/<name>-iOS.xcarchive
#
# No distribution identity or provisioning profile is used — the archive is
# produced unsigned and gets signed later by Xcode Organizer / a signing
# service. Two things are still baked in so that final signing produces a
# valid App Store build:
#   * the Apple Team ID in the archive metadata (an org identifier, not a
#     signature) — avoids "No team found in archive".
#   * macOS only: an ad-hoc signature carrying the App Sandbox entitlement —
#     the Mac App Store rejects binaries without it, and re-signing preserves
#     existing code entitlements.
#
# Team ID is read from `tauri.conf.json` (bundle.iOS.developmentTeam); override
# with APPLE_TEAM_ID or APPLE_DEVELOPMENT_TEAM in the environment.
# macOS build numbers are reserved from scripts/macos-appstore-build-number.txt.
# Commit that file after each build so the next machine continues the sequence.
# Set APP_BUILD_NUMBER to an integer above the saved value to skip ahead.
#
# When done, the archive is opened in Xcode's Organizer. Set NO_OPEN=1 to skip.

set -euo pipefail

PLATFORM="${1:-macos}"
case "$PLATFORM" in macos|ios) ;; *) printf 'usage: %s [macos|ios]\n' "$0" >&2; exit 2 ;; esac

# --- locate project root (script lives in <project>/scripts) ----------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"

CONF="src-tauri/tauri.conf.json"
MAC_TARGET="universal-apple-darwin"
APPLE_DIR="src-tauri/gen/apple"
OUT_DIR="$PROJECT_DIR/build/appstore"
PB=/usr/libexec/PlistBuddy
MAC_BUILD_NUMBER_FILE="$PROJECT_DIR/scripts/macos-appstore-build-number.txt"

err() { printf '\033[31m✗ %s\033[0m\n' "$1" >&2; exit 1; }
log() { printf '\033[36m▶ %s\033[0m\n' "$1"; }
ok()  { printf '\033[32m✓ %s\033[0m\n' "$1"; }
warn(){ printf '\033[33m! %s\033[0m\n' "$1"; }

# Open the finished .xcarchive in Xcode's Organizer (falls back to Finder).
open_archive() {
  [ -n "${NO_OPEN:-}" ] && return 0
  command -v open >/dev/null 2>&1 || return 0
  open -a Xcode "$1" >/dev/null 2>&1 && { log "Opened in Xcode Organizer"; return 0; }
  open "$1" >/dev/null 2>&1 || open -R "$1" >/dev/null 2>&1 || true
}

# --- read product name / identifier / version / team ----------------------
# `|| true`: a missing key (grep no match) or an early-closed pipe (head)
# must not abort the script under `set -e -o pipefail` — several of these
# fields are optional.
read_conf() {
  grep -E "\"$1\"[[:space:]]*:" "$CONF" 2>/dev/null | head -1 \
    | sed -E 's/.*:[[:space:]]*"([^"]+)".*/\1/' || true
}
PRODUCT_NAME="$(read_conf productName)"
IDENTIFIER="$(read_conf identifier)"
[ -n "$PRODUCT_NAME" ] || err "could not read productName from $CONF"

APP_VERSION="$(read_conf version)"
[ -n "$APP_VERSION" ] || err "could not read version from $CONF"
[ "$APP_VERSION" = "../package.json" ] && err "set a literal version in $CONF instead of a package.json reference"

TEAM_ID="${APPLE_TEAM_ID:-${APPLE_DEVELOPMENT_TEAM:-$(read_conf developmentTeam)}}" || true
if [ -n "$TEAM_ID" ]; then
  printf '%s' "$TEAM_ID" | grep -qE '^[A-Z0-9]{10}$' \
    || err "team id '$TEAM_ID' does not look like a 10-char Apple Team ID"
else
  warn "no Apple Team ID (bundle.iOS.developmentTeam / APPLE_TEAM_ID) — the archive"
  warn "will have no team and Organizer will ask you to assign one before export."
fi

SAFE_NAME="$(printf '%s' "$PRODUCT_NAME" | tr -c 'A-Za-z0-9' '-' | sed -E 's/-+/-/g; s/^-|-$//g')"

log "Product: $PRODUCT_NAME ($IDENTIFIER) v$APP_VERSION${TEAM_ID:+ — team $TEAM_ID} — platform: $PLATFORM (unsigned)"
mkdir -p "$OUT_DIR"

# Ensure ApplicationProperties:Team is present in an archive's Info.plist.
set_archive_team() { # $1 = archive dir
  [ -n "$TEAM_ID" ] || return 0
  local p="$1/Info.plist"
  [ -f "$p" ] || return 0
  "$PB" -c "Set :ApplicationProperties:Team $TEAM_ID" "$p" 2>/dev/null \
    || "$PB" -c "Add :ApplicationProperties:Team string $TEAM_ID" "$p" 2>/dev/null || true
}

reserve_macos_build_number() {
  local previous next
  [ -f "$MAC_BUILD_NUMBER_FILE" ] || err "missing macOS build-number counter: $MAC_BUILD_NUMBER_FILE"
  previous="$(<"$MAC_BUILD_NUMBER_FILE")"
  [[ "$previous" =~ ^[1-9][0-9]{0,3}$ ]] \
    || err "invalid macOS build-number counter '$previous' (expected 1–9999)"

  next="${APP_BUILD_NUMBER:-$((previous + 1))}"
  [[ "$next" =~ ^[1-9][0-9]{0,3}$ ]] \
    || err "invalid next macOS build number '$next' (expected 1–9999)"
  (( next > previous )) \
    || err "macOS build number $next must be greater than saved number $previous"

  # Reserve before the build: even a failed/abandoned archive won't reuse a
  # number that may already have been submitted to App Store Connect.
  printf '%s\n' "$next" > "$MAC_BUILD_NUMBER_FILE"
  MAC_BUILD_NUMBER="$next"
  log "macOS build number: $MAC_BUILD_NUMBER (previous: $previous)"
}

# ============================================================================
# macOS — universal .app  →  hand-assembled unsigned .xcarchive
# ============================================================================
build_macos() {
  for t in aarch64-apple-darwin x86_64-apple-darwin; do
    rustup target list --installed 2>/dev/null | grep -qx "$t" \
      || err "missing rust target $t — run: rustup target add $t"
  done

  reserve_macos_build_number

  log "Building universal .app (unsigned) …"
  npm run tauri build -- --bundles app --no-sign --target "$MAC_TARGET"
  local app_path="src-tauri/target/$MAC_TARGET/release/bundle/macos/$PRODUCT_NAME.app"
  [ -d "$app_path" ] || err "expected app bundle not found at $app_path"
  ok "Built $app_path"

  local bundled_version
  bundled_version="$("$PB" -c 'Print :CFBundleShortVersionString' "$app_path/Contents/Info.plist" 2>/dev/null || true)"
  [ "$bundled_version" = "$APP_VERSION" ] \
    || err "bundled app version '$bundled_version' does not match $CONF version '$APP_VERSION'"

  # The Mac App Store rejects archives whose Info.plist has no
  # LSApplicationCategoryType. Tauri only writes it for some bundle targets,
  # so ensure it's there. Value comes from `bundle.category` in tauri.conf.json
  # (friendly name or a full public.app-category.* UTI); defaults to games.
  local ap="$app_path/Contents/Info.plist"
  "$PB" -c "Set :CFBundleVersion $MAC_BUILD_NUMBER" "$ap" \
    || err "could not set macOS app build number to $MAC_BUILD_NUMBER"
  local have_cat
  have_cat="$("$PB" -c 'Print :LSApplicationCategoryType' "$ap" 2>/dev/null || true)"
  if [ -z "$have_cat" ]; then
    local raw cat
    raw="$(read_conf category)"
    case "$raw" in
      public.app-category.*) cat="$raw" ;;
      "") cat="public.app-category.games" ;;
      *) cat="public.app-category.$(printf '%s' "$raw" | tr 'A-Z ' 'a-z-')" ;;
    esac
    "$PB" -c "Add :LSApplicationCategoryType string $cat" "$ap" \
      && ok "LSApplicationCategoryType = $cat" \
      || err "failed to add LSApplicationCategoryType to $ap"
  else
    ok "LSApplicationCategoryType = $have_cat"
  fi

  # Declare export-compliance up front so App Store Connect doesn't prompt for
  # it on every build. This app uses no non-exempt encryption.
  if [ -z "$("$PB" -c 'Print :ITSAppUsesNonExemptEncryption' "$ap" 2>/dev/null || true)" ]; then
    "$PB" -c 'Add :ITSAppUsesNonExemptEncryption bool false' "$ap" \
      && ok "ITSAppUsesNonExemptEncryption = false" || true
  fi

  # The Mac App Store requires the App Sandbox entitlement to be present in the
  # binary's signature. `--no-sign` leaves the app with none, so Xcode's
  # distribution re-sign has nothing to preserve and validation fails with
  # "App sandbox not enabled". Ad-hoc-sign the app with just the sandbox
  # entitlements now (no cert, no provisioning profile) — the real distribution
  # identity is applied later by Organizer / the signing service, which keeps
  # these code entitlements.
  local ents="$OUT_DIR/macos-sandbox.entitlements"
  cat > "$ents" <<'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>com.apple.security.app-sandbox</key><true/>
  <key>com.apple.security.network.client</key><true/>
</dict>
</plist>
PLIST
  log "Ad-hoc signing with App Sandbox entitlements …"
  codesign --force --sign - --entitlements "$ents" --timestamp=none "$app_path"
  codesign --display --entitlements - "$app_path" 2>/dev/null | grep -q 'app-sandbox' \
    && ok "App Sandbox entitlement embedded" \
    || warn "could not confirm app-sandbox entitlement — validation may still fail"

  # --- assemble the .xcarchive -------------------------------------------
  local archive="$OUT_DIR/$SAFE_NAME-macOS.xcarchive"
  rm -rf "$archive"
  mkdir -p "$archive/Products/Applications" "$archive/dSYMs"
  cp -R "$app_path" "$archive/Products/Applications/"

  # best-effort dSYM from the universal binary
  local bin="$archive/Products/Applications/$PRODUCT_NAME.app/Contents/MacOS/$PRODUCT_NAME"
  if [ -f "$bin" ] && dsymutil "$bin" -o "$archive/dSYMs/$PRODUCT_NAME.app.dSYM" 2>/dev/null; then
    ok "Generated dSYM"
  else
    rmdir "$archive/dSYMs" 2>/dev/null || true
  fi

  local plist="$archive/Info.plist"
  cat > "$plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>ArchiveVersion</key><integer>2</integer>
  <key>CreationDate</key><date>$(date -u +%Y-%m-%dT%H:%M:%SZ)</date>
  <key>Name</key><string>$PRODUCT_NAME</string>
  <key>SchemeName</key><string>$PRODUCT_NAME</string>
  <key>ApplicationProperties</key>
  <dict>
    <key>ApplicationPath</key><string>Applications/$PRODUCT_NAME.app</string>
    <key>Architectures</key><array><string>arm64</string><string>x86_64</string></array>
    <key>CFBundleIdentifier</key><string>$IDENTIFIER</string>
    <key>CFBundleShortVersionString</key><string>$APP_VERSION</string>
    <key>CFBundleVersion</key><string>$MAC_BUILD_NUMBER</string>${TEAM_ID:+
    <key>Team</key><string>$TEAM_ID</string>}
  </dict>
</dict>
</plist>
PLIST
  plutil -lint "$plist" >/dev/null || err "generated archive Info.plist is invalid"

  local archive_build bundled_build
  archive_build="$("$PB" -c 'Print :ApplicationProperties:CFBundleVersion' "$plist")"
  bundled_build="$("$PB" -c 'Print :CFBundleVersion' "$archive/Products/Applications/$PRODUCT_NAME.app/Contents/Info.plist")"
  [ "$archive_build" = "$MAC_BUILD_NUMBER" ] && [ "$bundled_build" = "$MAC_BUILD_NUMBER" ] \
    || err "archive build-number mismatch (expected $MAC_BUILD_NUMBER; archive $archive_build; app $bundled_build)"

  ok "Unsigned archive ready: $archive"
  open_archive "$archive"
}

# ============================================================================
# iOS — unsigned archive via `tauri ios build --archive-only --no-sign`
# ============================================================================
build_ios() {
  [ -d "$APPLE_DIR" ] || err "missing $APPLE_DIR — run: npm run tauri ios init"
  rustup target list --installed 2>/dev/null | grep -qx aarch64-apple-ios \
    || err "missing rust target aarch64-apple-ios — run: rustup target add aarch64-apple-ios"

  # Unlike the macOS path, `tauri ios build` cannot even start without a team:
  # it generates the Xcode project and needs DEVELOPMENT_TEAM to be set.
  [ -n "$TEAM_ID" ] || err "$(cat <<EOF
iOS archiving needs an Apple Team ID (10-char, e.g. A1B2C3D4E5). Provide one:
  • APPLE_TEAM_ID=XXXXXXXXXX ./scripts/build-appstore.sh ios
  • or add   "developmentTeam": "XXXXXXXXXX"   under bundle.iOS in $CONF
Find it in Xcode ▸ Settings ▸ Accounts (select the team → the ID in parentheses),
or at developer.apple.com/account ▸ Membership details.
EOF
)"

  local build_root="$APPLE_DIR/build"
  local before
  before="$(find "$build_root" -name '*.xcarchive' 2>/dev/null || true)"

  log "tauri ios build --archive-only --no-sign …"
  # Pass the team through so xcodebuild records it in the archive metadata even
  # though signing is disabled — otherwise the archive has no team.
  APPLE_DEVELOPMENT_TEAM="${TEAM_ID:-}" \
    npm run tauri ios build -- --archive-only --no-sign

  local archive_src
  archive_src="$(find "$build_root" -name '*.xcarchive' -type d 2>/dev/null \
    | { grep -vxF "$before" || true; } \
    | xargs -I{} stat -f '%m %N' {} 2>/dev/null | sort -rn | head -1 | cut -d' ' -f2- || true)"
  [ -n "${archive_src:-}" ] && [ -d "$archive_src" ] \
    || archive_src="$(find "$build_root" -name '*.xcarchive' -type d 2>/dev/null \
         | xargs -I{} stat -f '%m %N' {} 2>/dev/null | sort -rn | head -1 | cut -d' ' -f2-)"
  [ -n "${archive_src:-}" ] && [ -d "$archive_src" ] \
    || err "no .xcarchive found under $build_root — check the tauri ios build output above"

  local archive="$OUT_DIR/$SAFE_NAME-iOS.xcarchive"
  rm -rf "$archive"
  cp -R "$archive_src" "$archive"
  set_archive_team "$archive"

  # Patch the bundled app's Info.plist:
  #  * MinimumOSVersion — tauri's iOS template hardcodes 14.0, but the linked
  #    Rust libs are built for bundle.iOS.minimumSystemVersion. Align them.
  #  * ITSAppUsesNonExemptEncryption — skip the App Store Connect prompt.
  local ios_app
  ios_app="$(find "$archive/Products/Applications" -maxdepth 1 -name '*.app' -type d | head -1)"
  if [ -n "${ios_app:-}" ]; then
    local ip="$ios_app/Info.plist"
    local minv
    minv="$(node -p "require('./$CONF').bundle?.iOS?.minimumSystemVersion || ''" 2>/dev/null || true)"
    if [ -n "$minv" ]; then
      "$PB" -c "Set :MinimumOSVersion $minv" "$ip" 2>/dev/null \
        || "$PB" -c "Add :MinimumOSVersion string $minv" "$ip" 2>/dev/null || true
      ok "MinimumOSVersion = $minv"
    fi
    if [ -z "$("$PB" -c 'Print :ITSAppUsesNonExemptEncryption' "$ip" 2>/dev/null || true)" ]; then
      "$PB" -c 'Add :ITSAppUsesNonExemptEncryption bool false' "$ip" 2>/dev/null \
        && ok "ITSAppUsesNonExemptEncryption = false" || true
    fi
  fi

  ok "Unsigned archive ready: $archive"
  open_archive "$archive"
}

case "$PLATFORM" in
  macos) build_macos ;;
  ios)   build_ios ;;
esac
