import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart'
import Category from '../views/Category'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    
  },
  
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },

  {
    path: '/category/:category',
    name: 'category',
    component: Category,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
