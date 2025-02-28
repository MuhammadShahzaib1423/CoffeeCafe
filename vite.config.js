import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})


/*

colors:{
primary : ' #854d3d'
secondary:' #4a1e1b'
brandDark :'#270c03'
}

*/