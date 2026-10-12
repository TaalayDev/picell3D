/// The destination can only come from the native Save dialog.
#[tauri::command]
async fn save_user_file(filename: String, bytes: Vec<u8>) -> Result<bool, String> {
    let name = std::path::Path::new(&filename)
        .file_name()
        .and_then(|name| name.to_str())
        .ok_or("Invalid filename")?;
    let extension = std::path::Path::new(name)
        .extension()
        .and_then(|ext| ext.to_str())
        .unwrap_or("");
    let mut dialog = rfd::AsyncFileDialog::new()
        .set_title("Save file")
        .set_file_name(name);
    if !extension.is_empty() {
        dialog = dialog.add_filter("File", &[extension]);
    }
    let Some(file) = dialog.save_file().await else {
        return Ok(false);
    };
    file.write(&bytes)
        .await
        .map_err(|error| error.to_string())?;
    Ok(true)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_user_file])
        .run(tauri::generate_context!())
        .expect("error while running Picell3D");
}
