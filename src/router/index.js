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
      name: 'product',
      component: () => import('../components/products/index.vue')
    },
    {
      path: '/product/:id',
      name: 'product-show',
      component: () => import('../components/products/show.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/products/cart.vue')
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('../components/utilities/services.vue')
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
    {
      path: '/search-result',
      name: 'search-result',
      component: () => import('../components/searchresult.vue')
    },
    
  ]
})

export default router
