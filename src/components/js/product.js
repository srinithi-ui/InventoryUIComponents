import img from "@/assets/images/download.jpeg"
import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default {
  mounted () {
    this.copyState();
  },
  props: {
    
    selectedValue : String
  },
  data(){
   
    return {
      count : 0,
      clicked : true,
      size : '15px',
      
      checkedCategories : []
      
    }
  },
  computed: {
    ...mapState(productStore, [
      "products","filteredProductsList","showAll","copyState"
      // "cart"

      
    ]),
    
        

      },
      methods : {
        increment(index){
           this.filteredProductsList[index].quantity += 1;
        },
        decrement(index){
          this.filteredProductsList[index].quantity -= 1;
        },

        ...mapActions(productStore, [
          "adding","remove"
        ])

      }
      

      


}