import { defineConfig } from "vite"
import path from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@pages": path.resolve(__dirname, "./src/pages"),
        },
    },
})
