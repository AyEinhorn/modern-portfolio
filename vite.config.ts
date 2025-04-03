import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
  },
  css: {
    // Ensure this file gets included in the build
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/tailwind.css";`
      }
    }
  }
})
