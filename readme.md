# Geist Icons

A refined, high-performance icon library based on the aesthetic of Vercel's Geist UI.

This library provides clean, tree-shakeable SVG icons packaged as zero-dependency React components.

---

## ✨ Features

*   **Zero Dependencies:** No mandatory runtime dependencies like `styled-components` or `prop-types`.
*   **Modern Build System:** Uses **tsup** and **esbuild** for lightning-fast bundling, generating native ESM and CommonJS exports.
*   **Tree-Shakeable:** Exports are configured to ensure bundlers remove any icons you don't use, resulting in smaller application bundles.
*   **Customizable:** Supports passing standard SVG props, including `color`, `size`, and `title`.
*   **Ref Forwarding:** All components forward a `ref` to the underlying `<svg>` element for easy integration with tooltips or animation libraries.

## 📦 Installation

To start using Geist Icons, install the package via npm or yarn:

```bash
npm install geist-icons
# or
yarn add geist-icons
# or
bun add geist-icons