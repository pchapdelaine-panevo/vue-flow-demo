import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

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
      '@vue-flow/core': path.resolve('./node_modules/@vue-flow/core/dist/'),
      '@vue-flow/controls': path.resolve('./node_modules/@vue-flow/controls/dist/'),
      '@vue-flow/minimap': path.resolve('./node_modules/@vue-flow/minimap/dist/'),
      '@vue-flow/node-resizer': path.resolve('./node_modules/@vue-flow/node-resizer/dist/')
    },
  },
})
