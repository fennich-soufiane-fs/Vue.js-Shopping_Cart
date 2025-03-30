import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/cart', name: "cart", component: Cart },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router