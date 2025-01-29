import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
  server: {
    host: '0.0.0.0',  // This allows Vite to listen on all IP addresses
    port: 5173,       // Ensure this matches the port you're using
  },
  
})
