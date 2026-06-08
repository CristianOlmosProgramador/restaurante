import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para el proyecto React.
// Listo para deploy en Vercel (output por defecto en /dist).
export default defineConfig({
  plugins: [react()],
})
