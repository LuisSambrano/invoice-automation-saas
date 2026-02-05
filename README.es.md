[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Português](./README.pt.md)

# Invoice Zero

Automatización de facturas local-first enfocada en privacidad, construida con Tauri y React.

<!-- CTAs -->
<p align="center">
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/stargazers"><img src="https://img.shields.io/github/stars/LuisSambrano/invoice-automation-saas?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/network/members"><img src="https://img.shields.io/github/forks/LuisSambrano/invoice-automation-saas?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/issues"><img src="https://img.shields.io/github/issues/LuisSambrano/invoice-automation-saas?style=flat-square" alt="Issues"/></a>
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LuisSambrano/invoice-automation-saas?style=flat-square" alt="License"/></a>
</p>

## Descripción General

> **Decisiones Arquitectónicas**: Lee `KEY_FINDINGS.md` para entender por qué rechazamos Electron y Firebase. o suscripciones. La aplicación almacena todos los datos localmente en tu dispositivo usando SQLite, garantizando completa privacidad y funcionalidad offline.

Construida con Tauri v2, la aplicación combina un backend en Rust para rendimiento y seguridad con un frontend en React para una interfaz de usuario moderna. La arquitectura local-first significa que tus datos financieros nunca salen de tu dispositivo, y la aplicación funciona sin conexión a internet.

La interfaz implementa un sistema de diseño glassmorphism con animaciones suaves impulsadas por Framer Motion, proporcionando una estética profesional mientras mantiene un rendimiento rápido en todas las plataformas.

## Características

### Arquitectura Local-First

- **Privacidad Completa**: Todos los datos almacenados localmente en SQLite
- **Funcionalidad Offline**: Funciona sin conexión a internet
- **Sin Suscripciones**: Compra única, sin tarifas recurrentes
- **Cero Telemetría**: Sin tracking ni recolección de datos

### Gestión de Facturas

- **Crear Facturas**: Plantillas de factura profesionales
- **Base de Datos de Clientes**: Almacena información de clientes localmente
- **Exportación PDF**: Genera facturas PDF para distribución
- **Historial de Facturas**: Rastrea todas las facturas con búsqueda y filtrado

### Seguridad

- **Memory Safe**: El backend Rust previene vulnerabilidades comunes
- **Almacenamiento Encriptado**: Datos encriptados en reposo en SQLite
- **Rendimiento Nativo**: Acceso directo al sistema de archivos sin overhead de Node.js
- **Multiplataforma**: Soporte para macOS, Windows y Linux

### Experiencia de Usuario

- **Diseño Glassmorphism**: UI translúcida moderna
- **Animaciones Spring**: Física suave de Framer Motion
- **Layout Responsivo**: Se adapta a todos los tamaños de ventana
- **Type Safety**: TypeScript end-to-end desde base de datos hasta UI

## Stack Tecnológico

![Tauri](https://img.shields.io/badge/Tauri_v2-FFC131?style=flat&logo=tauri&logoColor=black)
![Rust](https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)

**Backend**:

- [Tauri v2](https://tauri.app/) - Framework de aplicación de escritorio
- [Rust](https://www.rust-lang.org/) - Lenguaje de programación de sistemas
- [SQLite](https://www.sqlite.org/) - Base de datos embebida vía sqlx

**Frontend**:

- [React 19](https://react.dev/) - Biblioteca de componentes UI
- [TypeScript](https://www.typescriptlang.org/) - Desarrollo type-safe
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utility-first
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones

## Primeros Pasos

### Prerequisitos

- **Rust**: Instalar desde [rustup.rs](https://rustup.rs/)
- **Node.js**: Versión 20 o superior
- **Herramientas específicas de plataforma**:
  - macOS: Xcode Command Line Tools
  - Windows: Visual Studio Build Tools
  - Linux: Paquetes de desarrollo (ver docs de Tauri)

### Instalación

1. **Clonar el repositorio**:

```bash
git clone https://github.com/LuisSambrano/invoice-zero.git
cd invoice-zero
```

2. **Instalar dependencias del frontend**:

```bash
npm install
```

3. **Ejecutar en modo desarrollo**:

```bash
npm run tauri dev
```

## Contribuir

Las contribuciones son bienvenidas. Por favor sigue estas pautas:

1. Haz fork del repositorio
2. Crea una rama de feature: `git checkout -b feature/descripcion`
3. Realiza tus cambios con commits claros y atómicos
4. Prueba en tu plataforma: `npm run tauri dev`
5. Push a tu fork: `git push origin feature/descripcion`
6. Envía un pull request

## Licencia

Licencia MIT - Ver [LICENSE](LICENSE) para detalles.

## Enlaces

- **Repositorio**: [github.com/LuisSambrano/invoice-zero](https://github.com/LuisSambrano/invoice-zero)
- **Autor**: [Luis Sambrano](https://github.com/LuisSambrano)
- **Documentación Tauri**: [tauri.app/v2](https://tauri.app/v2/)

---

[English](./README.md) | **Español** | [Português](./README.pt.md)
