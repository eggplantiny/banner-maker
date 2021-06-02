import * as VueRouter from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, name: Home.name }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
