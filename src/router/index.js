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
      name: 'index',
      component: () => import('../components/categories/index.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/cardnew.vue')
    },
    
  ]
})

export default router
