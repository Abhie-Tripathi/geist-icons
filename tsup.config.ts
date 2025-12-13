import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // Outputs both CommonJS and ES Modules
  dts: true, // Generates .d.ts files
  splitting: true, // Enables code splitting for better tree-shaking
  sourcemap: true,
  clean: true, // Cleans the dist folder before building
  minify: true, // Minifies the output
  treeshake: true,
  external: ['react', 'react-dom', 'styled-components'], // Prevents bundling peer dependencies
});