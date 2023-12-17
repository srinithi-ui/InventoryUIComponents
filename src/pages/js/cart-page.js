import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default{
    data(){
        return {
            customerId : 1,
            id : '',
            quantity: '',
            
        }
    },
    computed : {
        ...mapState(productStore,[
            "cart","image"
        ]),
        ...mapWritableState(productStore, ["cart"])
    },
    methods : {
       
        ...mapActions(productStore, [
            "clearCart","CREATE_ORDER"
          ]),
          placeOrder(product){
            console.log(product)
            const cartRequest = {
                id:product.id,
                quantity:product.quantity,
                customerId : this.customerId
            }
            
            const actions = {
                "payload" : cartRequest
            }
            this.CREATE_ORDER(actions)
            alert("Order placed")
    
          },
          increment(index){
            this.cart[index].quantity += 1;
           
         },
         decrement(index){
           this.cart[index].quantity-=1;
         },
         
    },
   

    
}