import './assets/main.css'
import 'boxicons/css/boxicons.min.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/:id',
    name: '404',
    component: () => import('@/views/404.vue')
  }
  // {
  //   path: '/campaign',
  //   name: '预热活动',
  //   component: () => import('@/views/Campaign.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')
