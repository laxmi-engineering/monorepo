import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/monorepo/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 9800,
  },
})
