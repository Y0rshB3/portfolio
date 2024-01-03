import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        404: 'src/404.jsx'
      }
    }
  }
})
