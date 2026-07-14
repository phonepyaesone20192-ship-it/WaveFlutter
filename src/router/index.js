import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Contact from '@/extensions/contact.vue'
import GetStarted from '@/extensions/getStarted.vue'
import StartSelling from '@/extensions/startSelling.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/GetStarted', component: GetStarted},
  { path: '/StartSelling', component: StartSelling}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router