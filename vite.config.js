import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  input: {
    main: resolve(import.meta.dirname, 'src/index.html'),
    imprint: resolve(import.meta.dirname, 'src/imprint.html'),
    privacy: resolve(import.meta.dirname, 'src/privacy.html'),
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
