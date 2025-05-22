import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Add aliases for Vue Flow CSS files
      '@vue-flow/core/dist/style.css': fileURLToPath(
        new URL('./node_modules/@vue-flow/core/dist/style.css', import.meta.url)
      ),
      '@vue-flow/core/dist/theme-default.css': fileURLToPath(
        new URL('./node_modules/@vue-flow/core/dist/theme-default.css', import.meta.url)
      ),
      '@vue-flow/controls/dist/style.css': fileURLToPath(
        new URL('./node_modules/@vue-flow/controls/dist/style.css', import.meta.url)
      ),
      '@vue-flow/minimap/dist/style.css': fileURLToPath(
        new URL('./node_modules/@vue-flow/minimap/dist/style.css', import.meta.url)
      ),
      '@vue-flow/node-resizer/dist/style.css': fileURLToPath(
        new URL('./node_modules/@vue-flow/node-resizer/dist/style.css', import.meta.url)
      )
    }
  },
  build: {
    rollupOptions: {
      external: [
        // Add any other external dependencies that shouldn't be bundled
      ]
    }
  }
})
