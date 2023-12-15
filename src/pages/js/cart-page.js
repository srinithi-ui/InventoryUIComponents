import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default{
    data(){
        return {

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
          ])
    },
    mounted(){
        console.log(this.cart)
        const cartRequest = {
            id:this.cart[0].id,
            quantity:this.cart[0].quantity,
            customerId : 3
        }
        
        const actions = {
            "payload" : cartRequest
        }
        this.CREATE_ORDER(actions)

    }

    
}