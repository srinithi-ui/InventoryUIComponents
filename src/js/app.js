
import headerComponent from "@/components/Header.vue"
import filterComponent from "@/components/FilterComponent.vue"
import productComponent from "@/components/ProductComponent.vue"
import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../stores/product.js";

export default{
  components:{
    headerComponent,
    filterComponent,
    productComponent,
    // exampleComponent
  },
  data(){
    
    return {
      // example : "examplesendno",
      count : 0,
      clicked : true,
      // "logoImg" : logo,
      size : '15px',
      
      
    }
  },
  computed : {
    ...mapState(productStore,[
        "showFilter"
    ]),
  }
  

  }

  
  
