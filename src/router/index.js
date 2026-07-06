import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Contact from '@/extensions/contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router