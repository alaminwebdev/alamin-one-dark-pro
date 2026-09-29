# Alamin One Dark Pro

[![Visual Studio Marketplace Version](https://img.shields.io/badge/VS%20Code-Theme-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A refined, modern, and eye-friendly dark theme for **Visual Studio Code** and **Antigravity IDE**, inspired by the iconic One Dark Pro aesthetic with carefully retuned contrast, vibrant syntax tokens, and unified workbench chrome.

---

## 📸 Preview

![Alamin One Dark Pro Preview](./images/preview.png)

> **Note:** Drop your theme screenshot at `images/preview.png` to showcase your theme in the Marketplace and GitHub.

---

## ✨ Highlights

- **Eye-Care Contrast**: Designed for comfortable marathon coding sessions with reduced glare.
- **Accurate Token Hierarchy**: Distinct colors for functions, control keywords, variables, types, and strings to help you scan code effortlessly.
- **Cohesive UI Chrome**: Seamlessly styled editor, activity bar, sidebar, tabs, terminal, breadcrumbs, and floating dialogs.

---

## 🎨 Color Palette Reference

| Role | Color | Hex Code | Purpose |
| :--- | :---: | :---: | :--- |
| **Editor Background** | ` ` | `#282c34` | Main workspace background |
| **Editor Foreground** | ` ` | `#abb2bf` | Plain text, punctuation, base code |
| **Activity & Side Bar** | ` ` | `#21252b` | Dark chrome framing |
| **Selection Highlight** | ` ` | `#3e4451` | Selected text and focus indicators |
| **Line Highlight** | ` ` | `#2c313a` | Current line indicator |
| **Keywords & Control** | ` ` | `#c678dd` | `import`, `export`, `function`, `return`, `class` |
| **Functions & Methods** | ` ` | `#61afef` | Function declarations and invocation calls |
| **Strings & Text** | ` ` | `#98c379` | Quoted strings and template literals |
| **Variables & Tags** | ` ` | `#e06c75` | Variables, HTML/JSX tags, JSON keys |
| **Constants & Numbers** | ` ` | `#d19a66` | Numbers, booleans, constants, HTML attributes |
| **Classes & Types** | ` ` | `#e5c07b` | Interfaces, type definitions, constructors |
| **Operators & Special** | ` ` | `#56b6c2` | Logical and mathematical operators, regex |
| **Comments** | ` ` | `#5c6370` | Subtle italics for non-intrusive annotations |

---

## 🛠 Supported Languages & Frameworks

Optimized with granular TextMate scopes for modern language stacks:
- **Web & Frameworks**: TypeScript, JavaScript, React (JSX / TSX), Vue, HTML5, CSS3, SCSS, Tailwind CSS.
- **Backend & Systems**: Python, Go, Rust, PHP, Blade, Node.js, C / C++, Java.
- **Data & Config**: JSON, YAML, TOML, GraphQL, SQL, Markdown, Dockerfile, Shell / Bash / PowerShell.

---

## 🚀 Installation

### From Marketplace
1. Open the Extensions view in VS Code / Antigravity (`Ctrl + Shift + X` or `Cmd + Shift + X`).
2. Search for **`Alamin One Dark Pro`**.
3. Click **Install**.
4. Press `Ctrl + K Ctrl + T` and select **Alamin One Dark Pro**.

### From VSIX Package
1. Download or locate `alamin-one-dark-pro-1.0.0.vsix`.
2. In your terminal, run:
   ```bash
   code --install-extension alamin-one-dark-pro-1.0.0.vsix
   ```
   *(Or in the Extensions view, click the `...` menu in the top-right corner → select **Install from VSIX...**)*.

---

## ⚙️ Recommended Editor Settings

For the sharpest appearance and ligature support, pair this theme with **Fira Code**, **JetBrains Mono**, or **Cascadia Code**:

```json
{
  "workbench.colorTheme": "Alamin One Dark Pro",
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.renderWhitespace": "selection"
}
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
