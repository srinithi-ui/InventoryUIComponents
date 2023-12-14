import { createRouter, createWebHistory } from 'vue-router'
import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'

// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')


import productComponent from "@/components/ProductComponent.vue"
import filterComponent from "@/components/FilterComponent.vue"
import CartPage from '@/pages/CartPage.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "productList",
      component: productComponent
    },
    {
      path: '/cart',
      name: "CartPage",
      component: CartPage
    }
   
  ]
})

export default router
