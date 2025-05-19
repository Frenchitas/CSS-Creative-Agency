import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
 base: '/CSS-Coworking-Space/',
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});