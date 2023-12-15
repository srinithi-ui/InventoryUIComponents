import { defineStore } from 'pinia'
import testAPI from '@/api/test-api'
import beauty1 from "@/assets/images/beauty1.jpeg"
import beauty2 from "@/assets/images/beauty2.jpeg"
import beauty3 from "@/assets/images/beauty3.jpeg"
import beauty4 from "@/assets/images/beauty4.jpeg"
import beauty5 from "@/assets/images/beauty5.jpeg"
import mobile1 from "@/assets/images/mobile1.jpeg"
import mobile2 from "@/assets/images/mobile2.jpeg"
import mobile3 from "@/assets/images/mobile3.jpeg"
import mobile4 from "@/assets/images/mobile4.jpeg"
import mobile5 from "@/assets/images/mobile5.jpeg"
import productService from '../services/product-service.js'

export const productStore = defineStore("product", {
    id : 'api-product',
    state : () => ({
        
          cart : [
          ],
          showProducts : true,
          
          filteredProductsList : [],
          list:[],//getting all products from server
          image : beauty1,
          // "addProducts" : [],
          categories : {
                "Electronics" : 1,
               "Mobiles" : 2,
              "Fashion" : 3,
              "Stationary" : 4
          }
          
          

          
    }),
    actions : {
        adding(product) {
           // console.log(product);
            if(product.quantity > 0 ) this.cart.push(product);
            else alert("Choose one product")
            console.log(this.cart.length);
        },
        clearCart(){
            console.log(this.cart);
            this.cart = [];
        },
        filterProductStoreByCategory(categoryId){
          console.log("category"+categoryId)
          
          this.filteredProductsList = this.list.filter(product => product.category.id === categoryId);
          console.log(this.filteredProductsList)
          console.log("done")
          

        },
        copyState() {
          this.filteredProductsList = this.list;
          console.log(this.filteredProductsList);
        },
        // remove(){
        //   this.filteredProductsList = this.list;
        // },
        showProductsFunc(){
          console.log(this.showProducts)
          this.copyState();
          this.showProducts = false
        },
        get_all_products(){
          // console.log("work");
          const data = productService.getAllProducts();
          console.log(data);

          data.then((products)=>{
              products.json().then(productsData=>{
                  // console.log(typeof(productsData));
                  this.list = productsData;
                  console.log(this.list);
              })
          })
      },
      async CREATE_ORDER(orderDetails){
        const payload = orderDetails.payload
        const createOrderResponse = await productService.createOrder(payload)
        const data = await createOrderResponse.json();

      },

      async ADD_ORDER(addDetails){
        // const payload = addDetails.payload;
        console.log(addDetails);
        // console.log(payload);
        const addOrderResponse = await productService.addOrder(addDetails)
        // const data = await addOrderResponse.json();

      },

      async UPDATE_ORDER(updateDetails){
        console.log(updateDetails);
        const addOrderResponse = await productService.updateOrder(updateDetails,updateDetails.id)
        // const data = await addOrderResponse.json();

      }
       

        
    
    }

})