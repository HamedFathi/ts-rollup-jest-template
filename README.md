![rj](https://user-images.githubusercontent.com/8418700/142705105-4532be3d-fdc8-47e7-add2-2c9576214a23.jpg)

This template is useful to create your next node package.

It supports:

- [x] Rollup bundler (`amd`, `commonjs`, `esm`, `iife`, `system`, `umd`) with `sourcemap`
- [x] TypeScript with `declaration`
- [x] ESLint
- [x] Prettier
- [x] Testing (`Jest`) + Watch + Coverage + `JSDOM`
- [x] Documentation (`TypeDoc`)
- [x] Git (`Husky`, `lint-staged`)
- [x] Minification (`Terser`)
- [x] Release and version management (`Standard Version`)
- [ ] Bundle Visualizer (`Rollup Plugin Visualizer`)

### Usage

1. Update the `name` inside `package.json`. (`your-project-name` => `?`)
2. Update two `iife` and `umd` module `name` inside `rollup.config.js`. (`YOUR_MODULE_NAME` => `?`)
3. Update `homepage`, `bugs` and `repository` URLs inside `package.json`.
