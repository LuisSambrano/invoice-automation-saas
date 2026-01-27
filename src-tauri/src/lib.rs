// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod db;
use db::Database;
use tauri::Manager;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn get_invoices(state: tauri::State<'_, Database>) -> Result<Vec<db::Invoice>, String> {
    state.pool_impl().await.map_err(|e| e.to_string())
}

// Wrapper to access internal pool method cleanly
impl Database {
    async fn pool_impl(&self) -> Result<Vec<db::Invoice>, sqlx::Error> {
        self.get_all().await
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                match Database::init(&handle).await {
                    Ok(db) => {
                        handle.manage(db);
                        println!("Database initialized successfully");
                    }
                    Err(e) => {
                        eprintln!("Database initialization failed: {}", e);
                    }
                }
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, get_invoices])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
