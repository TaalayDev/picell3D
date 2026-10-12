# Guideline 2.4.5(i): user file saving

The desktop app now sends project saves and PNG, VOX, GLB, OBJ, and MTL exports through a native Save dialog. The Rust command receives suggested filenames and bytes; it obtains the destination exclusively from the dialog. Cancellation writes nothing, and write errors appear in the app. The sandbox uses the user-selected read/write entitlement.

Local storage holds preferences and a temporary project recovery cache. Use Save (toolbar or Command-S) to create a permanent `.picell3d` document in a chosen location. Browser builds continue to use browser downloads.

## Signed build verification before resubmission

1. Build and install the signed sandboxed release. The archive script now preserves configured permissions and verifies App Sandbox and user-selected read/write in the actual ad-hoc signature. Verify the final distribution signature also contains `com.apple.security.files.user-selected.read-write` using `codesign --display --entitlements :- /path/to/Picell3D.app`.
2. Create a model, use Save and Command-S, and choose Desktop or Documents. Confirm the `.picell3d` file is visible in Finder and can be reopened.
3. Export PNG, spritesheet, VOX, GLB, low-poly GLB, and OBJ/MTL. Confirm each opens a native Save dialog and creates a usable file at the chosen destination.
4. For OBJ/MTL, keep the suggested names and place both files in the same folder: the OBJ references the suggested MTL filename. Each file has its own Save dialog and overwrite confirmation.
5. Cancel a Save dialog and confirm no file is created. Try overwriting an existing file and verify native confirmation. Confirm an unwritable destination produces an error.
6. Relaunch and verify recovery still works and a saved project can be opened independently of recovery.

## Review response draft (after signed-build verification)

We updated Picell3D so project documents and all exported files use the standard macOS Save dialog. Users select the destination, such as Desktop or Documents, and can access these files in Finder. The app container is used only for preferences and temporary recovery data. To verify, create a model and choose Save in the toolbar or press Command-S, then select a location. The export actions also present a Save dialog.

## TestFlight Save crash packaging fix

The previous archive script ad-hoc signed with only sandbox and network permissions, dropping user-selected read/write from `src-tauri/Entitlements.plist`. The existing local archive confirmed those two permissions only. Rebuild the archive with the corrected script and upload a new build; existing TestFlight builds cannot be repaired by changing source entitlements. The missing permission is a likely cause of the Save crash; confirmation requires testing the replacement TestFlight build or inspecting its crash report.
