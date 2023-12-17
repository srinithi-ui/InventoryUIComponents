import { createRouter, createWebHistory } from 'vue-router'
import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'

// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')


import productComponent from "@/components/ProductComponent.vue"
import filterComponent from "@/components/FilterComponent.vue"
import CartPage from '@/pages/CartPage.vue';
import addProductsPage from '@/pages/AddProducts.vue';
import updateProductPage from '@/pages/UpdateProductPage.vue';
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
    },
    {
      path : '/addProducts',
      name : "addProductsPage",
      component : addProductsPage
    },
    {
      path : "/product/update/:name",
      name : "product",
      component : updateProductPage,
      props : true

    }
   
  ]
})

export default router
