[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md)

# Invoice Zero

Automação de faturas local-first focada em privacidade, construída com Tauri e React.

<!-- CTAs -->
<p align="center">
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/stargazers"><img src="https://img.shields.io/github/stars/LuisSambrano/invoice-automation-saas?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/network/members"><img src="https://img.shields.io/github/forks/LuisSambrano/invoice-automation-saas?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/issues"><img src="https://img.shields.io/github/issues/LuisSambrano/invoice-automation-saas?style=flat-square" alt="Issues"/></a>
  <a href="https://github.com/LuisSambrano/invoice-automation-saas/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LuisSambrano/invoice-automation-saas?style=flat-square" alt="License"/></a>
</p>

## Visão Geral

Invoice Zero é uma aplicação desktop para criar e gerenciar faturas sem depender de serviços na nuvem ou assinaturas. A aplicação armazena todos os dados localmente no seu dispositivo usando SQLite, garantindo completa privacidade e funcionalidade offline.

Construída com Tauri v2, a aplicação combina um backend em Rust para performance e segurança com um frontend em React para interface moderna. A arquitetura local-first significa que seus dados financeiros nunca saem do seu dispositivo, e a aplicação funciona sem conexão à internet.

A interface implementa um sistema de design glassmorphism com animações suaves impulsionadas por Framer Motion, proporcionando estética profissional mantendo performance rápida em todas as plataformas.

## Características

### Arquitetura Local-First

- **Privacidade Completa**: Todos dados armazenados localmente em SQLite
- **Funcionalidade Offline**: Funciona sem conexão à internet
- **Sem Assinaturas**: Compra única, sem taxas recorrentes
- **Zero Telemetria**: Sem tracking ou coleta de dados

### Gestão de Faturas

- **Criar Faturas**: Templates de fatura profissionais
- **Banco de Dados de Clientes**: Armazena informações de clientes localmente
- **Exportação PDF**: Gera faturas PDF para distribuição
- **Histórico de Faturas**: Rastreia todas faturas com busca e filtro

### Segurança

- **Memory Safe**: Backend Rust previne vulnerabilidades comuns
- **Armazenamento Criptografado**: Dados criptografados em repouso no SQLite
- **Performance Nativa**: Acesso direto ao sistema de arquivos sem overhead Node.js
- **Multiplataforma**: Suporte para macOS, Windows e Linux

### Experiência do Usuário

- **Design Glassmorphism**: UI translúcida moderna
- **Animações Spring**: Física suave Framer Motion
- **Layout Responsivo**: Adapta-se a todos tamanhos de janela
- **Type Safety**: TypeScript end-to-end do banco de dados à UI

## Stack Tecnológico

![Tauri](https://img.shields.io/badge/Tauri_v2-FFC131?style=flat&logo=tauri&logoColor=black)
![Rust](https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)

**Backend**:

- [Tauri v2](https://tauri.app/) - Framework de aplicação desktop
- [Rust](https://www.rust-lang.org/) - Linguagem de programação de sistemas
- [SQLite](https://www.sqlite.org/) - Banco de dados embarcado via sqlx

**Frontend**:

- [React 19](https://react.dev/) - Biblioteca de componentes UI
- [TypeScript](https://www.typescriptlang.org/) - Desenvolvimento type-safe
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utility-first
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações

## Primeiros Passos

### Pré-requisitos

- **Rust**: Instalar de [rustup.rs](https://rustup.rs/)
- **Node.js**: Versão 20 ou superior
- **Ferramentas específicas de plataforma**:
  - macOS: Xcode Command Line Tools
  - Windows: Visual Studio Build Tools
  - Linux: Pacotes de desenvolvimento (ver docs Tauri)

### Instalação

1. **Clonar o repositório**:

```bash
git clone https://github.com/LuisSambrano/invoice-zero.git
cd invoice-zero
```

2. **Instalar dependências do frontend**:

```bash
npm install
```

3. **Executar em modo desenvolvimento**:

```bash
npm run tauri dev
```

## Contribuir

Contribuições são bem-vindas. Por favor siga estas diretrizes:

1. Faça fork do repositório
2. Crie uma branch de feature: `git checkout -b feature/descricao`
3. Faça suas alterações com commits claros e atômicos
4. Teste na sua plataforma: `npm run tauri dev`
5. Push para seu fork: `git push origin feature/descricao`
6. Envie um pull request

## Licença

Licença MIT - Veja [LICENSE](LICENSE) para detalhes.

## Links

- **Repositório**: [github.com/LuisSambrano/invoice-zero](https://github.com/LuisSambrano/invoice-zero)
- **Autor**: [Luis Sambrano](https://github.com/LuisSambrano)
- **Documentação Tauri**: [tauri.app/v2](https://tauri.app/v2/)

---

[English](./README.md) | [Español](./README.es.md) | **Português**
