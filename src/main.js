import './assets/main.css'

// Import Vue Flow styles
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/controls/dist/style.css'
import '@vue-flow/minimap/dist/style.css'
import '@vue-flow/node-resizer/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
