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
      // Add proper aliases for Vue Flow packages
      '@vue-flow/core': fileURLToPath(new URL('./node_modules/@vue-flow/core', import.meta.url)),
      '@vue-flow/controls': fileURLToPath(new URL('./node_modules/@vue-flow/controls', import.meta.url)),
      '@vue-flow/minimap': fileURLToPath(new URL('./node_modules/@vue-flow/minimap', import.meta.url)),
      '@vue-flow/node-resizer': fileURLToPath(new URL('./node_modules/@vue-flow/node-resizer', import.meta.url))
    },
    dedupe: ['vue']
  },
  css: {
    // Ensure CSS is processed correctly during build
    postcss: {}, // Add any PostCSS config if needed
    preprocessorOptions: {}
  },
  optimizeDeps: {
    include: ['vue', '@vue-flow/core', '@vue-flow/controls', '@vue-flow/minimap', '@vue-flow/node-resizer']
  },
  build: {
    // Ensure CSS imports are properly bundled
    cssCodeSplit: true,
    // Enable source maps for debugging
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-flow': [
            '@vue-flow/core',
            '@vue-flow/controls',
            '@vue-flow/minimap',
            '@vue-flow/node-resizer'
          ],
          'vue': ['vue']
        }
      }
    }
  }
})
