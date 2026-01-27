use sqlx::{sqlite::SqlitePoolOptions, Pool, Sqlite};
use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};

pub struct Database {
    pub pool: Pool<Sqlite>,
}

impl Database {
    pub async fn init(app: &AppHandle) -> Result<Self, Box<dyn std::error::Error>> {
        let app_dir = app.path().app_data_dir()?;
        
        if !app_dir.exists() {
            fs::create_dir_all(&app_dir)?;
        }

        let db_path = app_dir.join("invoice_zero.db");
        let db_url = format!("sqlite://{}", db_path.to_string_lossy());

        if !db_path.exists() {
            fs::File::create(&db_path)?;
        }

        let pool = SqlitePoolOptions::new()
            .max_connections(5)
            .connect(&db_url)
            .await?;

        sqlx::query("
            CREATE TABLE IF NOT EXISTS invoices (
                id TEXT PRIMARY KEY,
                client_name TEXT NOT NULL,
                amount REAL NOT NULL,
                status TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        ")
        .execute(&pool)
        .await?;

        Ok(Database { pool })
    }

    pub async fn get_all(&self) -> Result<Vec<Invoice>, sqlx::Error> {
        sqlx::query_as::<_, Invoice>("SELECT * FROM invoices ORDER BY created_at DESC")
            .fetch_all(&self.pool)
            .await
    }
}

#[derive(serde::Serialize, sqlx::FromRow, Debug)]
pub struct Invoice {
    pub id: String,
    pub client_name: String,
    pub amount: f64,
    pub status: String,
    pub created_at: String, // SQLite returns timestamps as strings
}
