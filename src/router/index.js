import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/index',
      name: 'home',
      component: () => import('../components/categories/index.vue')
    },
    
  ]
})

export default router
