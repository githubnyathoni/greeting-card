// @ts-ignore
import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./", "src"),
    },
  },
  // Development Port
  server: {
    host: true,
    port: 5173,
  },
  // Production Port
  preview: {
    host: true,
    port: 4173,
  },
})
