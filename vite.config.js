import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // base:process.env.VITE_BASE_PATH||"/Personal-Portfolio",
  base:process.env.VITE_BASE_PATH||"/",
})
