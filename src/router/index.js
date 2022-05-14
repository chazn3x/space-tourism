import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/Destination.vue')
  },
  {
    path: '/crew',
    name: 'crew',
    component: () => import('../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/Technology.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
