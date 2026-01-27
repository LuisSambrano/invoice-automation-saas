# 💎 Invoice Zero

![License](https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square)
![Tauri](https://img.shields.io/badge/Tauri-v2-FFC131?style=flat-square&logo=tauri&logoColor=black)
![Rust](https://img.shields.io/badge/Rust-System_Core-000000?style=flat-square&logo=rust&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)

> **Local-First. Privacy-Centric. Aesthetic.**
>
> The definitive invoicing tool for the post-SaaS era. No subscriptions. No cloud. Just your data, on your device, in style.

<img src="https://media.discordapp.net/attachments/111/screenshot-placeholder.png" width="100%" style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 80px -20px rgba(0,0,0,0.5);" />

---

## 🏗️ The Hybrid Architecture

Invoice Zero is built on a "Hybrid Luxury" stack designed for maximum performance, security, and cross-platform native feel.

### 🧠 System Core (Rust)

The backend logic runs on **Rust** via Tauri v2. It provides:

- **Memory Safety**: Null-pointer free architecture.
- **SQLite Engine**: Embedding a full SQL relational database (`sqlx`) directly into the binary.
- **Native I/O**: Direct FileSystem access without Node.js overhead.

### 🎨 Logic & UI (React + TypeScript)

The interface is a highly optimized Single Page Application (SPA):

- **Glassmorphism 2.0**: Using `backdrop-filter` and noise textures for a premium feel.
- **Spring Physics**: All animations use `framer-motion` springs (`stiffness: 300`, `damping: 30`) for "Apple-like" fluidity.
- **Strict Typing**: End-to-end type safety from SQL to React components.

---

## 🚀 Getting Started

### Prerequisites

- **Rust**: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- **Node.js**: v20+

### Installation

```bash
# Clone the repository
git clone https://github.com/LuisSambrano/invoice-zero.git

# Install Frontend Dependencies
npm install

# Run in Development Mode (Hot Reload)
npm run tauri dev
```

### Building for Production

**MacOS (Universal)**

```bash
npm run tauri build -- --target universal-apple-darwin
```

**Windows (MSI)**

```bash
npm run tauri build
```

---

## 🔒 Privacy Architecture

Invoice Zero follows a **"Local-Vault"** philosophy.

1.  **Zero Telemetry**: We do not track you.
2.  **Encrypted-at-Rest**: Data is stored in a structured SQLite file in your user's AppData directory.
3.  **Offline-Ready**: The app functions 100% without internet.

---

## 🛠️ Contributing

We follow a **"Quiet Luxury"** code standard.

- **Clean Architecture**: Separation of Database, Command, and UI layers.
- **Conventional Commits**: `feat:`, `fix:`, `docs:`.
- **Prettier**: Default config enabled.

---

**Crafted by [Luis Sambrano](https://github.com/LuisSambrano)**
