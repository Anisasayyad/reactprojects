import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Prevent Rollup from trying to bundle Node-only or optional modules
      external: [
        'fs',
        'path',
        'os',
        'child_process',
        'crypto',
        'stream',
        'util',
      ],
    },
  },
  base: './',
})
