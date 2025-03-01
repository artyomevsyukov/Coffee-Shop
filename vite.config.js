import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* pass your config */
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 50,
      },
    }),
  ],
})
