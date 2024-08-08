import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust if your site is under a subdirectory
  build: {
    outDir: 'dist',  // Output directory for the build
    assetsDir: 'assets',  // Directory for assets within the output directory
  },
  server: {
    port: 3000,
    open: true,
  },
});
