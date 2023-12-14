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

export const productStore = defineStore("product", {
    id : 'api-product',
    state : () => ({
        "products" :[
            {
              "name" : "BEAUTY 1 ", 
              "img" : beauty1,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Beauty"
            },
            {
              "name" : "BEAUTY 2",
              "img" : beauty2,
              "price" : 10000,
              "quantity" : 10,
              "category" : "Beauty"
            },
            {
              "name" : "BEAUTY 3",
              "img" : beauty3,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Beauty"
            },
            {
              "name" : "BEAUTY 4",
              "img" : beauty4,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Beauty"
            },
            {
              "name" : "BEAUTY 5",
              "img" : beauty5,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Beauty"
            },
            {
              "name" : "MOBILE 1",
              "img" : mobile1,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Mobile"
            },
            {
              "name" : "MOBILE 2",
              "img" : mobile2,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Mobile"
            },
            {
              "name" : "MOBILE 3",
              "img" : mobile3,
              "price" : 10000,
              "quantity" : 0,
              "category" : "Mobile"
            },
            {
                "name" : "MOBILE 4",
                "img" : mobile4,
                "price" : 10000,
                "quantity" : 0,
                "category" : "Mobile"
              },
              {
                "name" : "MOBILE 5",
                "img" : mobile5,
                "price" : 10000,
                "quantity" : 0,
                "category" : "Mobile"
              }
          ],
          "cart" : [
          ],
          "filteredProductsList" : [],
          

          
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
        filterProductStoreByCategory(category){
          console.log(this.filteredProductsList)
          this.filteredProductsList=this.products.filter((product)=>product.category===category);
          

        },
        copyState() {
          this.filteredProductsList = JSON.parse(JSON.stringify(this.products));
          console.log(this.filteredProductsList);
        },
        remove(){
          this.filteredProductsList = this.products;
        }
       

        
    
    }

})