import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Contact from '@/extensions/contact.vue'
import GetStarted from '@/extensions/getStarted.vue'
import StartSelling from '@/extensions/startSelling.vue'
import Api from '@/branches/api.vue'
import Changing from '@/branches/changing.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/GetStarted', component: GetStarted },
  { path: '/StartSelling', component: StartSelling },
  { 
    path: '/Api', component: Api,meta: { hideLayout: true } // Tells App.vue to hide Header and Final
  },
  { 
    path: '/Changing', component: Changing,meta: { hideLayout: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router