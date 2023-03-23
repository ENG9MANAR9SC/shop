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
      path: '/card',
      name: 'home',
      component: () => import('../components/categories/card.vue')
    },
    
  ]
})

export default router
