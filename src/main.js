import './assets/main.css'

// Import Vue Flow styles - using relative paths from node_modules
import '../node_modules/@vue-flow/core/dist/style.css'
import '../node_modules/@vue-flow/core/dist/theme-default.css'
import '../node_modules/@vue-flow/controls/dist/style.css'
import '../node_modules/@vue-flow/minimap/dist/style.css'
import '../node_modules/@vue-flow/node-resizer/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
