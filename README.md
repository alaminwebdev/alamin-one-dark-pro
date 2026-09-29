# Alamin One Dark Pro

> A clean, modern, and eye-friendly dark theme for VS Code and Antigravity IDE, inspired by One Dark Pro.

Available as both a **VS Code / Antigravity IDE Extension** and an **npm package**.

---

## 🎨 Features
- **Carefully balanced palette**: Designed for high contrast and comfortable long coding sessions.
- **Rich syntax highlighting**: Comprehensive token scopes for JavaScript, TypeScript, Python, HTML/CSS, Go, Rust, JSON, Markdown, and more.
- **Unified IDE Chrome**: Styled sidebar, tabs, terminal, status bar, and dialogs.
- **npm Integration**: Import theme colors directly into JavaScript/TypeScript, Tailwind, or Monaco Editor projects.

---

## 📦 Usage as an npm Package

Install via npm:

```bash
npm install alamin-one-dark-pro
```

Import theme colors or the complete VS Code theme JSON:

```javascript
// JavaScript / CommonJS
const { palette, theme } = require('alamin-one-dark-pro');

console.log(palette.blue); // #61afef
```

```typescript
// TypeScript / ESM
import { palette, theme } from 'alamin-one-dark-pro';

// Use with Tailwind / CSS-in-JS
export const themeColors = {
  primary: palette.blue,
  accent: palette.purple,
  background: palette.background
};
```

---

## 💻 Manual Installation in IDE (VS Code / Antigravity)

### 1. Copy to Extensions Directory

#### Windows:
```powershell
# Standard VS Code
Copy-Item -Recurse -Force "D:\alamin-one-dark-pro" "$HOME\.vscode\extensions\alamin-one-dark-pro"

# Antigravity IDE
Copy-Item -Recurse -Force "D:\alamin-one-dark-pro" "$HOME\.antigravity\extensions\alamin-one-dark-pro"
```

#### macOS / Linux:
```bash
cp -r /path/to/alamin-one-dark-pro ~/.vscode/extensions/
```

### 2. Activate Theme
1. Reload your IDE (`Ctrl + Shift + P` -> `Developer: Reload Window`).
2. Open the Theme selector (`Ctrl + K Ctrl + T`).
3. Select **Alamin One Dark Pro**.

---

## 🚀 Publishing Guide

### Publishing to npm:
```bash
npm login
npm publish --access public
```

### Packaging as a `.vsix` extension:
```bash
npx @vscode/vsce package
```

---

## 📄 License
MIT © Alamin
