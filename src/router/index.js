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
      path: '/indexCategory',
      name: 'indexCategory',
      component: () => import('../components/categories/index.vue')
    },
    {
      path: '/indexproduct',
      name: 'indexProduct',
      component: () => import('../components/products/index.vue')
    },
    {
      path: '/showProduct',
      name: 'showProduct',
      component: () => import('../components/products/show.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/products/card.vue')
    },
    
  ]
})

export default router
