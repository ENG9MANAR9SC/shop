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
      path: '/category',
      name: 'category',
      component: () => import('../components/categories/index.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('../components/products/index.vue')
    },
    {
      path: '/showproduct',
      name: 'showproduct',
      component: () => import('../components/products/show.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/products/card.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/products/cart.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../components/blogs/index.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../components/contact-us.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../components/about-us.vue')
    },
    
  ]
})

export default router
