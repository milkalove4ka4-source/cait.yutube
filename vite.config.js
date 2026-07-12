import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vibestream/', // Необходимо для корректной работы путей на GitHub Pages
})
