import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Vercel serves the app from the domain root; GitHub Pages serves it under /Portfolio_v1/.
  base: process.env.VERCEL ? '/' : '/Portfolio_v1/',
  plugins: [react(), tailwindcss()],
})
