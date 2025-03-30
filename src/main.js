import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
