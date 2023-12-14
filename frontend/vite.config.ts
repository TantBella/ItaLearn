import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dns from "dns"
// dns.setDefaultResultOrder("ipv4first")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000/",
      "/createusers": "http://localhost:3000/",
      "/signin": "http://localhost:3000/",
      "/admin": "http://localhost:3000/",
      "/addcategory": "http://localhost:3000/",
      "/categorychange": "http://localhost:3000/",
      "/deletecat": "http://localhost:3000/",
      "/glosor": "http://localhost:3000/",
      "/addword": "http://localhost:3000/",
      "/wordchange": "http://localhost:3000/",
      "/deleteword": "http://localhost:3000/",

    },
  },
})
