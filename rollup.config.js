import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/index.ts",
    output: [{
        format: "iife",
        file: './dist/index.iife.js',
        name: 'YOUR_MODULE_NAME',
        esModule: false,
        exports: "named",	
        sourcemap: true
    },
    {
        format: "iife",
        file: './dist/index.iife.min.js',
        name: 'YOUR_MODULE_NAME',
        sourcemap: true,
        esModule: false,
        exports: "named",	
        plugins: [terser()]
    },
	    {
        file: './dist/index.umd.js',
        format: 'umd',
        name: 'YOUR_MODULE_NAME',
		esModule: false,
		exports: "named",		
        sourcemap: true
    },
    {
        file: './dist/index.umd.min.js',
        format: 'umd',
        name: 'YOUR_MODULE_NAME',
        esModule: false,
        exports: "named",
        sourcemap: true,
        plugins: [terser()]
    },
    {
        file: './dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/index.min.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
    },
    {
        file: './dist/index.amd.js',
        format: 'amd',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/index.amd.min.js',
        format: 'amd',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
    },
    {
        file: './dist/index.es.mjs',
        format: 'es',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/index.es.min.mjs',
        format: 'es',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
    }],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
};
