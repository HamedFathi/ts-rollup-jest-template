![rj](https://user-images.githubusercontent.com/8418700/142705105-4532be3d-fdc8-47e7-add2-2c9576214a23.jpg)

This template is useful to create your next node package.

It supports:

- [x] Rollup bundler (`amd`, `commonjs`, `esm`, `iife`, `umd`) with `sourcemap`
- [x] TypeScript with `declaration`
- [x] ESLint
- [x] Prettier
- [x] Testing (`Jest`) + Coverage + `JSDOM`
- [x] Documentation (`TypeDoc`)
- [x] Git (`Husky`, `lint-staged`)
- [x] Minification (`Terser`)

### Usage

1. Update the `name` inside `package.json`. (`your-project-name` => `?`)
2. Update two `iife` and `umd` module `name` inside `rollup.config.js`. (`--module--name--` => `?`)
3. Update `homepage`, `bugs` and `repository` URLs inside `package.json`.
