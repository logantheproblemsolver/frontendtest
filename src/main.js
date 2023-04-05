import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/css/main.css'
import '@/assets/css/chessSquare.css'
import '@/assets/css/chessBoard.css'
import '@/assets/css/sidebar.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
