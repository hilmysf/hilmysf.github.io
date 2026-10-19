import { createApp } from 'vue'
import App from './App.vue'
import './styles/variables.css'
import './styles/style.css'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import '@/core/extensions/StringExtensions'

createApp(App)
.use(router)
.use(MotionPlugin)
.mount('#app')
