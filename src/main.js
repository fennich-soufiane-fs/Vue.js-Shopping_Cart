import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Toast)
app.use(router)
app.mount('#app')

