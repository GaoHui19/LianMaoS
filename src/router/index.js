import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta:{
        showTab:true,
        index:0
      }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: () => import('../views/Mine.vue'),
      meta:{
        showTab:true
      }
    },{
      path: '/Type',
      name: 'Type',
      component: () => import('../views/Type.vue'),
      meta:{
        showTab:true
      }
    },{
      path: '/Cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
      meta:{
        showTab:true
      }
    },{
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    }
    ,{
      path: '/remder',
      name: 'remder',
      component: () => import('../views/remder.vue')
    },{
      path: '/product',
      name: 'product',
      component: () => import('../views/product.vue'),
      meta:{
        index:1,
        isProduct:true
      }
    },{
      path: '/shop',
      name: 'shop',
      component: () => import('../views/shop.vue')
    },{
      path: '/order',
      name: 'order',
      component: () => import('../views/order.vue')
    }
  ]
})

export default router
