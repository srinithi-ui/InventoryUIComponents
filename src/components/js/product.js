import img from "@/assets/images/download.jpeg"
import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";
import productService from '../../services/product-service.js'


export default {
  // mounted () {
  //   this.copyState();
  // },
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
  methods : {
    increment(index){
      //  this.list[index].quantity += 1;
      this.count++;
    },
    decrement(index){
      // this.list[index].quantity -= 1;
      this.count--;
    },
    update(id){
      console.log(id);
      this.$router.push({name:'product',params: {id}});
    },

    ...mapActions(productStore, [
      "adding","remove","get_all_products","copyState"
    ])

  },
  mounted(){
    this.get_all_products()
    console.log("DD"+this.showProducts)
    // this.copyState()
  },
  
  computed: {
    ...mapState(productStore, [
      "products","filteredProductsList","showProducts","copyState","list","image"
      // "cart"

      
    ]),
    
      }
      

      


}