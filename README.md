
![rollup](https://user-images.githubusercontent.com/8418700/141651449-7a9fe540-d1a7-4828-bbf2-c97bc64af56d.jpg)

This template is useful to create your next node package.

It supports:

- [x] Rollup bundler (`commonjs`, `esm`, `iife`, `umd`) with `sourcemap`
- [x] TypeScript with `declaration`
- [x] ESLint
- [x] Prettier
- [x] Testing (`Jest`) + Coverage + `JSDOM`
- [x] Documentation (`TypeDoc`)
- [x] Git (`Husky`, `lint-staged`)
- [x] Minification (`Terser`)

### Usage

1. Update the `name` inside `package.json`. (`your-project-name` => `?`)
2. Update two `iife` module `name` blocks inside `rollup.config.js`. (`yourModuleName` => `?`)
3. Update `homepage`, `bugs` and `repository` URLs inside `package.json`.
