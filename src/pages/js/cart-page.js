import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default{
    data(){
        return {

        }
    },
    computed : {
        ...mapState(productStore,[
            "cart"
        ]),
        ...mapWritableState(productStore, ["cart"])
    },
    methods : {
       
        ...mapActions(productStore, [
            "clearCart"
          ])
    }

    
}