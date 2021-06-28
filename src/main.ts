import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { store } from '@/store'
import './common/style/index.css'
import './common/style/tailwindcss.css'
createApp(App).use(router).use(store).mount('#app')
